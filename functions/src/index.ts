import * as admin from "firebase-admin";
import { onSchedule } from "firebase-functions/v2/scheduler";
import { onRequest } from "firebase-functions/v2/https";
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
