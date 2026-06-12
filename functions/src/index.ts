import * as admin from "firebase-admin";
import { onSchedule } from "firebase-functions/v2/scheduler";
import { onRequest } from "firebase-functions/v2/https";
import { onDocumentCreated, onDocumentUpdated } from "firebase-functions/v2/firestore";
import { defineSecret } from "firebase-functions/params";
import axios from "axios";

admin.initializeApp();

const selarApiKey = defineSecret("SELAR_API_KEY");

const VALID_ACHAT_TYPES = ["chapitre", "tome", "collection", "physique"] as const;
type AchatType = typeof VALID_ACHAT_TYPES[number];

function resolveAchatType(raw: unknown): AchatType {
  if (typeof raw === "string" && (VALID_ACHAT_TYPES as readonly string[]).includes(raw)) {
    return raw as AchatType;
  }
  return "tome";
}

async function createAchatForUser(
  db: admin.firestore.Firestore,
  uid: string,
  productReference: string,
  productType: AchatType,
  amount: number,
  transactionId: string
): Promise<void> {
  const achatRef = db.collection("achats").doc();
  await achatRef.set({
    compte_id: uid,
    type: productType,
    reference: productReference,
    montant_paye: amount || 0,
    ref_commande_selar: String(transactionId),
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });
}

// 1. Le Vigile (Scheduled Function) — toutes les 10 minutes
export const pollSelarSales = onSchedule(
  {
    schedule: "every 10 minutes",
    secrets: [selarApiKey],
    timeZone: "Africa/Abidjan",
  },
  async (_event) => {
    const db = admin.firestore();

    try {
      const key = selarApiKey.value();
      if (!key) {
        console.error("Clé API Selar introuvable dans Secret Manager.");
        return;
      }

      const metaRef = db.collection("_metadata").doc("selar_polling");
      const metaDoc = await metaRef.get();
      let lastChecked = new Date(Date.now() - 1000 * 60 * 15); // défaut: 15 min ago

      if (metaDoc.exists && metaDoc.data()?.lastChecked) {
        lastChecked = metaDoc.data()?.lastChecked?.toDate();
      }

      const response = await axios.get("https://selar.co/api/v1/sales", {
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
        },
      });

      const sales: unknown[] = response.data?.data || [];
      let countNewSales = 0;

      for (const rawSale of sales) {
        const sale = rawSale as Record<string, any>;

        if (sale.status !== "success" && sale.status !== "successful") {
          continue;
        }

        const transactionId = sale.reference || sale.id;
        const saleDate = new Date(sale.created_at);

        if (saleDate <= lastChecked) {
          continue;
        }

        const purchaseRef = db.collection("purchases").doc(String(transactionId));
        const purchaseDoc = await purchaseRef.get();

        if (!purchaseDoc.exists) {
          const customerEmail: string = sale.customer?.email || "";
          const productReference: string =
            sale.custom_fields?.productId ||
            sale.product?.slug ||
            sale.product?.name ||
            "inconnu";
          const productType = resolveAchatType(sale.custom_fields?.type);

          // Enregistrer l'achat brut
          await purchaseRef.set({
            transactionId: String(transactionId),
            amount: sale.amount,
            currency: sale.currency,
            customerPhone: sale.customer?.phone || "",
            customerEmail: customerEmail,
            productId: productReference,
            productType: productType,
            status: "SUCCESS",
            provider: "Selar (Polling)",
            achatLinked: false,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
          });

          // Débloquer le compte utilisateur via l'email
          if (customerEmail) {
            try {
              const userRecord = await admin.auth().getUserByEmail(customerEmail);
              const uid = userRecord.uid;

              await createAchatForUser(db, uid, productReference, productType, sale.amount, transactionId);
              await purchaseRef.update({ userId: uid, achatLinked: true });

              console.log(`Achat créé pour ${uid} (${customerEmail}) — produit: ${productReference}`);
            } catch (authError: any) {
              if (authError.code === "auth/user-not-found") {
                // L'utilisateur n'a pas encore créé de compte — on marque pour réessai
                console.warn(`Utilisateur introuvable pour ${customerEmail}. Achat en attente.`);
              } else {
                console.error(`Erreur Auth pour ${customerEmail}:`, authError);
              }
            }
          }

          countNewSales++;
        } else {
          // Réessai pour les achats non liés (l'utilisateur s'est inscrit depuis)
          const existing = purchaseDoc.data() as Record<string, any>;
          if (existing.achatLinked === false && existing.customerEmail) {
            try {
              const userRecord = await admin.auth().getUserByEmail(existing.customerEmail);
              const uid = userRecord.uid;
              const productType = resolveAchatType(existing.productType);

              await createAchatForUser(db, uid, existing.productId || "inconnu", productType, existing.amount || 0, transactionId);
              await purchaseRef.update({ userId: uid, achatLinked: true });

              console.log(`Achat récupéré (retry) pour ${uid} (${existing.customerEmail})`);
            } catch {
              // Toujours pas inscrit — on réessaiera au prochain passage
            }
          }
        }
      }

      await metaRef.set({
        lastChecked: admin.firestore.FieldValue.serverTimestamp(),
      });

      console.log(`Polling terminé. ${countNewSales} nouvelles ventes traitées.`);
    } catch (error) {
      console.error("Erreur critique lors du polling Selar:", error);
    }
  }
);

// 2. Endpoint HTTP pour le frontend (Mécanisme A — polling côté client)
export const checkTransaction = onRequest({ cors: true }, async (req, res) => {
  const email = req.query.email as string;

  if (!email) {
    res.status(400).json({ error: "Email is required" });
    return;
  }

  try {
    const db = admin.firestore();
    const snapshot = await db
      .collection("purchases")
      .where("customerEmail", "==", email)
      .orderBy("createdAt", "desc")
      .limit(1)
      .get();

    if (!snapshot.empty) {
      const data = snapshot.docs[0].data();
      res.status(200).json({
        success: true,
        status: data?.status,
        productId: data?.productId,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "Transaction not yet processed",
      });
    }
  } catch (error) {
    console.error("Erreur checkTransaction:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// 3. Endpoint HTTP pour réclamer un achat via Référence (Mécanisme B — manuel)
export const claimSelarOrder = onRequest({ cors: true }, async (req, res) => {
  const { reference } = req.body;

  if (!reference) {
    res.status(400).json({ success: false, message: "La référence est requise" });
    return;
  }

  try {
    const db = admin.firestore();
    const purchaseRef = db.collection("purchases").doc(String(reference));
    const purchaseDoc = await purchaseRef.get();

    if (purchaseDoc.exists) {
      const data = purchaseDoc.data() as Record<string, any>;
      if (data?.status === "SUCCESS") {
        res.status(200).json({
          success: true,
          message: "Achat retrouvé avec succès",
          productId: data.productId,
        });
      } else {
        res.status(200).json({
          success: false,
          message: "La transaction n'est pas encore finalisée.",
        });
      }
    } else {
      res.status(200).json({
        success: false,
        message: "Référence introuvable ou invalide.",
      });
    }
  } catch (error) {
    console.error("Erreur claimSelarOrder:", error);
    res.status(500).json({ success: false, message: "Erreur interne du serveur" });
  }
});

// ─── Notification helpers ─────────────────────────────────────────────────────

const SUBJECT_NAMES: Record<string, string> = {
  maths: "Mathématiques",
  pc: "Physique-Chimie",
  svt: "SVT",
  francais: "Français",
  philo: "Philosophie",
  anglais: "Anglais",
  hg: "Histoire-Géographie",
  edhc: "EDHC",
};

async function hasUnreadNotification(
  db: admin.firestore.Firestore,
  uid: string,
  type: string
): Promise<boolean> {
  const snap = await db
    .collection("users").doc(uid).collection("notifications")
    .where("type", "==", type)
    .where("read", "==", false)
    .limit(1)
    .get();
  return !snap.empty;
}

async function writeNotification(
  db: admin.firestore.Firestore,
  uid: string,
  notif: Record<string, unknown>
): Promise<void> {
  await db.collection("users").doc(uid).collection("notifications").add(notif);
}

function computeGradeAverage(
  grades: Record<string, Record<string, unknown[]>>,
  matiereId: string
): number | null {
  const all: number[] = [];
  for (const trim of ["t1", "t2", "t3"]) {
    const arr = (grades[trim] as Record<string, unknown[]> | undefined)?.[matiereId];
    if (Array.isArray(arr)) {
      for (const g of arr) {
        const n = Number(g);
        if (g !== "" && !isNaN(n)) all.push(n);
      }
    }
  }
  return all.length > 0 ? all.reduce((a, b) => a + b, 0) / all.length : null;
}

// ─── Trigger 1 — STREAK_DANGER (scheduled hourly) ────────────────────────────

export const streakDangerNotifier = onSchedule(
  { schedule: "every 60 minutes", timeZone: "Africa/Abidjan" },
  async (_event) => {
    const db = admin.firestore();
    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    const today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;

    const usersSnap = await db.collection("users")
      .where("currentStreak", ">", 0)
      .get();

    let sent = 0;
    for (const userDoc of usersSnap.docs) {
      const data = userDoc.data();
      if ((data.lastStudyDate as string | undefined) === today) continue;

      const uid = userDoc.id;
      const streak: number = data.currentStreak || 0;

      if (await hasUnreadNotification(db, uid, "STREAK_DANGER")) continue;

      await writeNotification(db, uid, {
        type: "STREAK_DANGER",
        title: "Ton streak est en danger !",
        message: `Champion(ne), tu n'as pas ouvert l'app depuis plus de 23h. Ton streak de ${streak} jours va disparaître. Reviens maintenant !`,
        read: false,
        createdAt: Date.now(),
        deepLink: "/dashboard",
      });
      sent++;
    }

    console.log(`STREAK_DANGER: ${sent} notification(s) envoyée(s).`);
  }
);

// ─── Trigger 2 — PREMIUM_UNLOCK (achats onCreate) ────────────────────────────
// NOTE: user.statut is derived from achats in the frontend, not stored on the
// user doc, so we trigger here on achats/{achatId} instead of users/{uid}.

const FAMILLE_TYPES = ["tome", "collection", "physique"];

export const premiumUnlockNotifier = onDocumentCreated(
  "achats/{achatId}",
  async (event) => {
    const data = event.data?.data();
    if (!data) return;
    if (!FAMILLE_TYPES.includes(data.type as string)) return;

    const uid: string | undefined = data.compte_id as string | undefined;
    if (!uid) return;

    const db = admin.firestore();
    if (await hasUnreadNotification(db, uid, "PREMIUM_UNLOCK")) return;

    await writeNotification(db, uid, {
      type: "PREMIUM_UNLOCK",
      title: "Compte Famille activé !",
      message:
        "Bienvenue dans la famille, Champion(ne) ! Ton accès complet est activé — XP ×2, quiz illimités, accès offline. À toi de jouer.",
      read: false,
      createdAt: Date.now(),
      deepLink: "/dashboard",
    });
  }
);

// ─── Trigger 3 — TARGET_WARNING (users/{uid} onUpdate, bacSimulation changed) ─

export const targetWarningNotifier = onDocumentUpdated(
  "users/{uid}",
  async (event) => {
    const before = event.data?.before.data();
    const after = event.data?.after.data();
    if (!before || !after) return;

    if (JSON.stringify(before.bacSimulation ?? {}) === JSON.stringify(after.bacSimulation ?? {})) {
      return;
    }

    const uid = event.params.uid;
    const db = admin.firestore();

    if (await hasUnreadNotification(db, uid, "TARGET_WARNING")) return;

    const bacSimulation = (after.bacSimulation ?? {}) as Record<string, unknown>;
    const grades = (after.grades ?? {}) as Record<string, Record<string, unknown[]>>;

    const toWrite: Array<Record<string, unknown>> = [];

    for (const [matiereId, rawNote] of Object.entries(bacSimulation)) {
      if (typeof rawNote !== "number") continue;
      const noteSimulee = rawNote;

      const moyenneClasse = computeGradeAverage(grades, matiereId);
      if (moyenneClasse === null) continue;

      const delta = noteSimulee - moyenneClasse;
      if (delta < 1.5) continue;

      const matiereName = SUBJECT_NAMES[matiereId] ?? matiereId;
      toWrite.push({
        type: "TARGET_WARNING",
        title: `Écart détecté en ${matiereName}`,
        message: `Champion(ne), tu as simulé ${noteSimulee.toFixed(1)}/20 en ${matiereName} mais ta moyenne actuelle est ${moyenneClasse.toFixed(2)}/20. Écart de ${delta.toFixed(1)} points à combler avant le BAC.`,
        read: false,
        createdAt: Date.now(),
        deepLink: "/dashboard/notes-objectifs",
      });
    }

    if (toWrite.length === 0) return;

    const batch = db.batch();
    for (const notif of toWrite) {
      batch.set(
        db.collection("users").doc(uid).collection("notifications").doc(),
        notif
      );
    }
    await batch.commit();
  }
);

// ─── Trigger 4 — COURSE_REMINDER (tomes/{tomeId} onCreate) ───────────────────

export const courseReminderNotifier = onDocumentCreated(
  "tomes/{tomeId}",
  async (event) => {
    const tomeData = event.data?.data();
    if (!tomeData) return;

    const tomeId = event.params.tomeId;
    const tomeTitle: string = (tomeData.title as string | undefined) ?? "Nouveau tome";
    const tomeSerie: string | undefined = tomeData.serie as string | undefined;
    if (!tomeSerie) return;

    const db = admin.firestore();
    const usersSnap = await db.collection("users")
      .where("level", "==", tomeSerie)
      .get();

    for (const userDoc of usersSnap.docs) {
      const uid = userDoc.id;
      if (await hasUnreadNotification(db, uid, "COURSE_REMINDER")) continue;
      await writeNotification(db, uid, {
        type: "COURSE_REMINDER",
        title: "Nouveau contenu disponible !",
        message: `Champion(ne), ${tomeTitle} vient d'être ajouté. Ouvre-le maintenant et prends de l'avance.`,
        read: false,
        createdAt: Date.now(),
        deepLink: `/cours/${tomeId}`,
      });
    }
  }
);

// ─── Trigger 5 — FORUM_REPLY (forum_replies/{replyId} onCreate) ──────────────
// Requires forum_posts to have an `authorId` field (Firebase UID).
// Replies without authorId fall back to no self-reply guard (still notifies).

export const forumReplyNotifier = onDocumentCreated(
  "forum_replies/{replyId}",
  async (event) => {
    const replyData = event.data?.data();
    if (!replyData) return;

    const discussionId: string | undefined = replyData.discussionId as string | undefined;
    if (!discussionId) return;

    const db = admin.firestore();
    const postDoc = await db.collection("forum_posts").doc(discussionId).get();
    if (!postDoc.exists) return;

    const postData = postDoc.data();
    if (!postData) return;

    const postAuthorId: string | undefined = postData.authorId as string | undefined;
    if (!postAuthorId) return;

    const replyAuthorId: string | undefined = replyData.authorId as string | undefined;
    if (replyAuthorId && replyAuthorId === postAuthorId) return;

    if (await hasUnreadNotification(db, postAuthorId, "FORUM_REPLY")) return;

    await writeNotification(db, postAuthorId, {
      type: "FORUM_REPLY",
      title: "Quelqu'un a répondu à ton post",
      message: "Ta question sur le forum vient de recevoir une réponse. Va voir !",
      read: false,
      createdAt: Date.now(),
      deepLink: `/forum/posts/${discussionId}`,
    });
  }
);

// ─── Proxy public profil élève — /parent/:uid ─────────────────────────────────
// Rôle : retourner UNIQUEMENT les champs publics sûrs du profil d'un élève.
// Ne retourne JAMAIS : email_selar, goal, goals, grades, bacSimulation, unlockedCourses complète.
// Appelé par ParentDashboard.tsx à la place d'un accès Firestore direct.

export const getPublicStudentData = onRequest({ cors: true }, async (req, res) => {
  const uid = req.query.uid as string;

  if (!uid) {
    res.status(400).json({ error: "Le paramètre uid est requis." });
    return;
  }

  try {
    const db = admin.firestore();
    const userDoc = await db.collection("users").doc(uid).get();

    if (!userDoc.exists) {
      res.status(404).json({ error: "Profil introuvable." });
      return;
    }

    const data = userDoc.data() as Record<string, any>;

    // Champs publics autorisés UNIQUEMENT — jamais de données sensibles.
    // Ne pas exposer : rewardedActions, unlockedCourses, lastStudyDate,
    // email_selar, goal, goals, grades, bacSimulation.
    const publicData = {
      pseudo: data.pseudo || null,
      xp: data.xp || 0,
      currentStreak: data.currentStreak || 0,
      level: data.level || null,
      photoURL: data.photoURL || null,
      highschool: data.highschool || null,
    };

    res.status(200).json({ success: true, data: publicData });
  } catch (error) {
    console.error("Erreur getPublicStudentData:", error);
    res.status(500).json({ error: "Erreur interne du serveur." });
  }
});
