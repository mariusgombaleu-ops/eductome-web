"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.selarWebhook = void 0;
const functions = __importStar(require("firebase-functions"));
const admin = __importStar(require("firebase-admin"));
const crypto = __importStar(require("crypto"));
admin.initializeApp();
// Clé secrète du webhook Selar
const SELAR_SECRET = functions.config().selar ? functions.config().selar.secret : "YOUR_SELAR_SECRET_HERE";
exports.selarWebhook = functions.https.onRequest(async (req, res) => {
    try {
        // 1. Vérification de la signature Selar
        const signature = req.headers["x-selar-signature"];
        if (!signature) {
            console.warn("Webhook reçu sans signature Selar");
            res.status(401).send("Signature manquante");
            return;
        }
        const hash = crypto.createHmac("sha512", SELAR_SECRET)
            .update(JSON.stringify(req.body))
            .digest("hex");
        if (hash !== signature) {
            console.warn("Signature Selar invalide", { expected: hash, received: signature });
            res.status(401).send("Signature invalide");
            return;
        }
        // 2. Traitement de la commande Selar
        const event = req.body;
        if (event.event !== "transaction.successful") {
            res.status(200).send("Événement ignoré (non successful)");
            return;
        }
        const data = event.data;
        const customerPhone = data.customer.phone;
        // Si on a passé un productId en custom_field, on le récupère
        // Dans Selar, les custom_fields sont généralement dans data.custom_fields
        // Ex: { "Tome": "Tome1" }
        let productId = "Inconnu";
        if (data.custom_fields) {
            // Structure exacte dépend de la conf Selar.
            // On log pour inspecter la première fois
            console.log("Custom fields Selar:", JSON.stringify(data.custom_fields));
            // On va supposer qu'on passe productId
            productId = data.custom_fields.productId || data.product.name;
        }
        else {
            productId = data.product.name;
        }
        if (!customerPhone) {
            console.error("Aucun numéro de téléphone fourni dans l'achat Selar", data);
            res.status(400).send("Numéro manquant");
            return;
        }
        console.log(`Paiement réussi. Tel: ${customerPhone}. Produit: ${productId}`);
        const db = admin.firestore();
        // 3. Création de la facture dans `purchases`
        const transactionId = data.reference || data.id;
        await db.collection("purchases").doc(String(transactionId)).set({
            transactionId: transactionId,
            amount: data.amount,
            currency: data.currency,
            customerPhone: customerPhone,
            productId: productId,
            status: "SUCCESS",
            provider: "Selar",
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        });
        // 4. Déblocage du cours pour l'utilisateur dans `users`
        // On cherche l'utilisateur par son numéro de téléphone
        // Normalisation basique (retirer espaces et +)
        const cleanPhone = String(customerPhone).replace(/[^0-9]/g, "");
        // Attention, selon comment l'auth est faite, l'utilisateur a peut-être un +225. 
        // On essaie une requête basique, ou on cherche "se termine par".
        const usersRef = db.collection("users");
        const snapshot = await usersRef.where("phoneNumber", "==", cleanPhone).get();
        if (!snapshot.empty) {
            const userDoc = snapshot.docs[0];
            // On ajoute l'ID du produit dans le tableau `coursAchetes`
            await userDoc.ref.update({
                coursAchetes: admin.firestore.FieldValue.arrayUnion(productId)
            });
            console.log(`Cours ${productId} débloqué pour l'utilisateur ${cleanPhone}`);
        }
        else {
            console.warn(`Paiement reçu mais aucun utilisateur trouvé avec le numéro ${cleanPhone}. Le contenu devra être débloqué manuellement.`);
        }
        res.status(200).send("Webhook traité avec succès");
        return;
    }
    catch (error) {
        console.error("Erreur Webhook Selar:", error);
        res.status(500).send("Erreur interne");
        return;
    }
});
//# sourceMappingURL=index.js.map