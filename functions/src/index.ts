import * as admin from "firebase-admin";
import { onSchedule } from "firebase-functions/v2/scheduler";
import { onRequest } from "firebase-functions/v2/https";
import { onDocumentCreated, onDocumentUpdated } from "firebase-functions/v2/firestore";
import { defineSecret } from "firebase-functions/params";
import axios from "axios";

admin.initializeApp();

const selarApiKey = defineSecret("SELAR_API_KEY");

// SÉCURITÉ (CRIT-4) : origines CORS autorisées — jamais de wildcard en production.
const CORS_ORIGINS = [
  "https://eductome.app",
  "https://www.eductome.app",
  "https://eductome-web.vercel.app",
  "http://localhost:5173",
  "http://localhost:4173",
];

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

// ─── Utilitaire auth — extrait et vérifie le token Firebase ─────────────────
async function verifyFirebaseToken(req: any): Promise<admin.auth.DecodedIdToken> {
  const authHeader = req.headers.authorization as string | undefined;
  if (!authHeader?.startsWith("Bearer ")) {
    throw new Error("AUTH_MISSING");
  }
  const idToken = authHeader.split("Bearer ")[1];
  return admin.auth().verifyIdToken(idToken);
}

// 2. Endpoint HTTP pour le frontend (Mécanisme A — polling côté client)
// SÉCURITÉ : token Firebase requis + l'email demandé doit appartenir au compte connecté
export const checkTransaction = onRequest({ cors: CORS_ORIGINS }, async (req, res) => {
  // Vérification du token d'authentification
  let decodedToken: admin.auth.DecodedIdToken;
  try {
    decodedToken = await verifyFirebaseToken(req);
  } catch {
    res.status(401).json({ error: "Non autorisé — token Firebase requis" });
    return;
  }

  const email = req.query.email as string;

  if (!email) {
    res.status(400).json({ error: "Email is required" });
    return;
  }

  // Vérifier que l'email demandé correspond bien au compte connecté
  // Format des comptes EDUCTOME : +225XXXXXXX@eductome.app
  // On accepte aussi les emails Selar stockés sur le profil
  try {
    const db = admin.firestore();
    const userDoc = await db.collection("users").doc(decodedToken.uid).get();
    const userData = userDoc.data() as Record<string, any> | undefined;
    const emailSelarProfil: string | undefined = userData?.email_selar;

    // SÉCURITÉ (MOY-5) : Si l'email Selar n'est pas configuré, refuser la requête.
    // Sans cette vérification, n'importe quel email pouvait être recherché.
    if (!emailSelarProfil) {
      res.status(400).json({ error: "Configure d'abord ton email Selar dans ton profil avant de vérifier un paiement." });
      return;
    }

    // L'email demandé doit être celui enregistré sur le profil utilisateur
    if (email.toLowerCase() !== emailSelarProfil.toLowerCase()) {
      res.status(403).json({ error: "Accès refusé — cet email ne correspond pas à ton compte" });
      return;
    }

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
// SÉCURITÉ : token Firebase requis + protection anti-force-brute (flag alreadyClaimed)
export const claimSelarOrder = onRequest({ cors: CORS_ORIGINS }, async (req, res) => {
  // Vérification du token d'authentification
  let decodedToken: admin.auth.DecodedIdToken;
  try {
    decodedToken = await verifyFirebaseToken(req);
  } catch {
    res.status(401).json({ success: false, message: "Non autorisé — token Firebase requis" });
    return;
  }

  const { reference } = req.body;

  if (!reference || typeof reference !== "string" || reference.trim().length === 0) {
    res.status(400).json({ success: false, message: "La référence est requise" });
    return;
  }

  // Protection anti-force-brute : rate limit via un compteur Firestore
  const db = admin.firestore();
  const rateLimitRef = db.collection("_ratelimit").doc(`claim_${decodedToken.uid}`);

  try {
    const rateLimitDoc = await rateLimitRef.get();
    const now = Date.now();
    const windowMs = 60 * 60 * 1000; // 1 heure
    const maxAttempts = 5;

    if (rateLimitDoc.exists) {
      const rl = rateLimitDoc.data() as { count: number; windowStart: number };
      if (now - rl.windowStart < windowMs) {
        if (rl.count >= maxAttempts) {
          res.status(429).json({
            success: false,
            message: "Trop de tentatives. Réessaie dans 1 heure.",
          });
          return;
        }
        await rateLimitRef.update({ count: admin.firestore.FieldValue.increment(1) });
      } else {
        // Réinitialiser la fenêtre
        await rateLimitRef.set({ count: 1, windowStart: now });
      }
    } else {
      await rateLimitRef.set({ count: 1, windowStart: now });
    }
  } catch (rlError) {
    console.error("Erreur rate limit:", rlError);
    // On continue en cas d'échec du rate limit — ne pas bloquer l'utilisateur légitime
  }

  // SÉCURITÉ (MOY-6) : Utiliser une transaction Firestore pour un check-and-claim atomique.
  // Empêche deux requêtes simultanées de passer le check `alreadyClaimed` en même temps.
  try {
    const purchaseRef = db.collection("purchases").doc(String(reference.trim()));

    const result = await db.runTransaction(async (tx) => {
      const purchaseDoc = await tx.get(purchaseRef);

      if (!purchaseDoc.exists) {
        return { success: false, message: "Référence introuvable ou invalide." };
      }

      const data = purchaseDoc.data() as Record<string, any>;

      if (data?.alreadyClaimed === true) {
        return {
          success: false,
          message: "Cette référence a déjà été utilisée pour débloquer un cours.",
        };
      }

      if (data?.status !== "SUCCESS") {
        return { success: false, message: "La transaction n'est pas encore finalisée." };
      }

      // Marquer comme réclamée de manière atomique
      tx.update(purchaseRef, {
        alreadyClaimed: true,
        claimedByUid: decodedToken.uid,
        claimedAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      return {
        success: true,
        message: "Achat retrouvé avec succès",
        productId: data.productId,
      };
    });

    res.status(200).json(result);
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

export const getPublicStudentData = onRequest({ cors: CORS_ORIGINS }, async (req, res) => {
  // NOTE : cet endpoint est intentionnellement public (pas d'auth requise).
  // Il est conçu pour la page Parent : l'élève partage un lien public vers son profil.
  // Les données exposées sont MINIMALES et non sensibles (pseudo, xp, streak).
  // Ne jamais ajouter de données sensibles ici (email, grades, notes, achats complets).

  const uid = req.query.uid as string;

  if (!uid) {
    res.status(400).json({ error: "Le paramètre uid est requis." });
    return;
  }

  // SÉCURITÉ (CRIT-5) : Rate limiting IP-based pour empêcher l'énumération de profils.
  // Limite : 20 requêtes par IP par fenêtre de 15 minutes.
  try {
    const db = admin.firestore();
    const clientIp = (req.headers["x-forwarded-for"] as string || req.ip || "unknown").split(",")[0].trim();
    const ipHash = Buffer.from(clientIp).toString("base64").replace(/[^a-zA-Z0-9]/g, "").slice(0, 40);
    const rlRef = db.collection("_ratelimit").doc(`public_${ipHash}`);
    const now = Date.now();
    const windowMs = 15 * 60 * 1000; // 15 minutes
    const maxRequests = 20;

    const rlDoc = await rlRef.get();
    if (rlDoc.exists) {
      const rl = rlDoc.data() as { count: number; windowStart: number };
      if (now - rl.windowStart < windowMs) {
        if (rl.count >= maxRequests) {
          res.status(429).json({ error: "Trop de requêtes. Réessaie dans quelques minutes." });
          return;
        }
        await rlRef.update({ count: admin.firestore.FieldValue.increment(1) });
      } else {
        await rlRef.set({ count: 1, windowStart: now });
      }
    } else {
      await rlRef.set({ count: 1, windowStart: now });
    }
  } catch (rlErr) {
    // Ne pas bloquer l'utilisateur légitime en cas d'erreur de rate limiting
    console.error("Rate limit error (getPublicStudentData):", rlErr);
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
    // email_selar, goal, goals, grades, bacSimulation, purchasedReferences.
    const publicData: Record<string, unknown> = {
      pseudo: data.pseudo || null,
      xp: data.xp || 0,
      currentStreak: data.currentStreak || 0,
      level: data.level || null,
      photoURL: data.photoURL || null,
    };

    // SÉCURITÉ (CRIT-5) : supprimé highschool et purchasedReferences de la réponse publique.
    // purchasedReferences révèle le pouvoir d'achat de la famille — info sensible en CI.
    // Si le parent a besoin de voir les tomes débloqués, utiliser un token de partage.

    res.status(200).json({ success: true, data: publicData });
  } catch (error) {
    console.error("Erreur getPublicStudentData:", error);
    res.status(500).json({ error: "Erreur interne du serveur." });
  }
});

// ─── Cloud Function sécurisée pour débloquer un cours ────────────────────────
// Rôle : seule façon autorisée d'écrire dans users/{uid}.unlockedCourses.
// Vérifie qu'un achat réel existe dans /achats avant toute écriture.
// Le client NE DOIT JAMAIS écrire directement dans unlockedCourses.
export const unlockCourseSecure = onRequest({ cors: CORS_ORIGINS }, async (req, res) => {
  // Vérification du token d'authentification
  let decodedToken: admin.auth.DecodedIdToken;
  try {
    decodedToken = await verifyFirebaseToken(req);
  } catch {
    res.status(401).json({ success: false, message: "Non autorisé — token Firebase requis" });
    return;
  }

  const { courseId } = req.body;

  if (!courseId || typeof courseId !== "string" || courseId.trim().length === 0) {
    res.status(400).json({ success: false, message: "courseId est requis" });
    return;
  }

  const uid = decodedToken.uid;
  const db = admin.firestore();

  try {
    // Vérifier qu'un achat correspondant existe dans /achats pour cet utilisateur
    const achatsSnap = await db.collection("achats")
      .where("compte_id", "==", uid)
      .where("reference", "==", courseId.trim())
      .limit(1)
      .get();

    if (achatsSnap.empty) {
      // Aucun achat trouvé — accès refusé
      console.warn(`unlockCourseSecure: UID ${uid} a tenté de débloquer ${courseId} sans achat valide.`);
      res.status(403).json({
        success: false,
        message: "Aucun achat valide trouvé pour ce contenu. Effectue un achat d'abord.",
      });
      return;
    }

    // Achat vérifié — déblocage autorisé via Admin SDK
    const userRef = db.collection("users").doc(uid);
    await userRef.update({
      unlockedCourses: admin.firestore.FieldValue.arrayUnion(courseId.trim()),
    });

    console.log(`unlockCourseSecure: cours ${courseId} débloqué pour UID ${uid} (achat vérifié).`);
    res.status(200).json({ success: true, message: "Cours débloqué avec succès." });
  } catch (error) {
    console.error("Erreur unlockCourseSecure:", error);
    res.status(500).json({ success: false, message: "Erreur interne du serveur." });
  }
});

// ─── Cloud Function sécurisée pour tracker un achat via Relais ───────────────
// SÉCURITÉ (CRIT-2) : remplace les écritures directes du frontend dans /relais.
// Vérifie qu'un achat réel existe ET que le relais n'a pas déjà été crédité pour cet achat.
export const trackRelaisSale = onRequest({ cors: CORS_ORIGINS }, async (req, res) => {
  // Vérification du token d'authentification
  let decodedToken: admin.auth.DecodedIdToken;
  try {
    decodedToken = await verifyFirebaseToken(req);
  } catch {
    res.status(401).json({ success: false, message: "Non autorisé — token Firebase requis" });
    return;
  }

  const { relaisCode, courseId } = req.body;

  if (!relaisCode || typeof relaisCode !== "string" || relaisCode.trim().length === 0) {
    res.status(400).json({ success: false, message: "Le code relais est requis." });
    return;
  }
  if (!courseId || typeof courseId !== "string" || courseId.trim().length === 0) {
    res.status(400).json({ success: false, message: "Le courseId est requis." });
    return;
  }

  const uid = decodedToken.uid;
  const db = admin.firestore();
  const code = relaisCode.trim().toUpperCase();

  try {
    // 1. Vérifier que le code relais existe
    const relaisRef = db.collection("relais").doc(code);
    const relaisDoc = await relaisRef.get();
    if (!relaisDoc.exists) {
      res.status(404).json({ success: false, message: "Code relais introuvable." });
      return;
    }

    // 2. Vérifier qu'un achat réel existe pour cet utilisateur et ce produit
    const achatsSnap = await db.collection("achats")
      .where("compte_id", "==", uid)
      .where("reference", "==", courseId.trim())
      .limit(1)
      .get();

    if (achatsSnap.empty) {
      res.status(403).json({
        success: false,
        message: "Aucun achat valide trouvé pour ce produit.",
      });
      return;
    }

    const achatDoc = achatsSnap.docs[0];
    const achatData = achatDoc.data();

    // 3. Vérifier que le relais n'a pas déjà été crédité pour cet achat
    if (achatData.relaisCode) {
      res.status(200).json({
        success: false,
        message: "Un code relais a déjà été appliqué à cet achat.",
      });
      return;
    }

    // 4. Appliquer le code relais de manière atomique via batch
    const batch = db.batch();

    // Marquer l'achat avec le code relais
    batch.update(achatDoc.ref, { relaisCode: code });

    // Incrémenter les totaux du relais
    batch.update(relaisRef, {
      totalVentes: admin.firestore.FieldValue.increment(1),
      totalCommission: admin.firestore.FieldValue.increment(300),
    });

    // Enregistrer la vente dans la sous-collection
    const venteRef = db.collection("relais").doc(code).collection("ventes").doc();
    batch.set(venteRef, {
      date: admin.firestore.FieldValue.serverTimestamp(),
      produit: courseId.trim(),
      commission: 300,
      acheteurId: uid,
    });

    await batch.commit();

    console.log(`trackRelaisSale: code ${code} crédité pour achat ${courseId} par UID ${uid}.`);
    res.status(200).json({ success: true, message: "Code relais appliqué avec succès." });
  } catch (error) {
    console.error("Erreur trackRelaisSale:", error);
    res.status(500).json({ success: false, message: "Erreur interne du serveur." });
  }
});
