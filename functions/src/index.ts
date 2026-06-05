import * as admin from "firebase-admin";
import { onSchedule } from "firebase-functions/v2/scheduler";
import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import axios from "axios";

admin.initializeApp();

const selarApiKey = defineSecret("SELAR_API_KEY");

// 1. Le Vigile (Scheduled Function) qui tourne toutes les 1 minute
export const pollSelarSales = onSchedule({
  schedule: "every 1 minutes",
  secrets: [selarApiKey],
  timeZone: "Africa/Abidjan",
}, async (event) => {
  const db = admin.firestore();
  
  try {
    const key = selarApiKey.value();
    if (!key) {
      console.error("Clé API Selar introuvable dans Secret Manager.");
      return;
    }

    const metaRef = db.collection("_metadata").doc("selar_polling");
    const metaDoc = await metaRef.get();
    let lastChecked = new Date(Date.now() - 1000 * 60 * 5); 
    
    if (metaDoc.exists && metaDoc.data()?.lastChecked) {
      lastChecked = metaDoc.data()?.lastChecked?.toDate();
    }

    const response = await axios.get("https://selar.co/api/v1/sales", {
      headers: {
        "Authorization": `Bearer ${key}`,
        "Content-Type": "application/json"
      }
    });

    const sales = response.data?.data || [];
    let countNewSales = 0;

    for (const sale of sales) {
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
        const customerPhone = sale.customer?.phone;
        let productId = sale.product?.name || "Inconnu";
        if (sale.custom_fields && sale.custom_fields.productId) {
           productId = sale.custom_fields.productId;
        }

        await purchaseRef.set({
          transactionId: transactionId,
          amount: sale.amount,
          currency: sale.currency,
          customerPhone: customerPhone,
          productId: productId,
          status: "SUCCESS",
          provider: "Selar (Polling)",
          createdAt: admin.firestore.FieldValue.serverTimestamp()
        });

        countNewSales++;
      }
    }

    await metaRef.set({
      lastChecked: admin.firestore.FieldValue.serverTimestamp()
    });

    console.log(`Polling terminé avec succès. ${countNewSales} nouvelles ventes traitées.`);
  } catch (error) {
    console.error("Erreur critique lors du polling Selar:", error);
  }
});

// 2. Endpoint HTTP pour le frontend (Polling côté client)
export const checkTransaction = onRequest({ cors: true }, async (req, res) => {
  const reference = req.query.reference as string;
  
  if (!reference) {
    res.status(400).json({ error: "Reference is required" });
    return;
  }

  try {
    const db = admin.firestore();
    const purchaseDoc = await db.collection("purchases").doc(reference).get();

    if (purchaseDoc.exists) {
      const data = purchaseDoc.data();
      res.status(200).json({ 
        success: true, 
        status: data?.status,
        productId: data?.productId 
      });
    } else {
      res.status(200).json({ 
        success: false, 
        message: "Transaction not yet processed" 
      });
    }
  } catch (error) {
    console.error("Erreur checkTransaction:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
