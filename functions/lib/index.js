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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkTransaction = exports.pollSelarSales = void 0;
const admin = __importStar(require("firebase-admin"));
const scheduler_1 = require("firebase-functions/v2/scheduler");
const https_1 = require("firebase-functions/v2/https");
const params_1 = require("firebase-functions/params");
const axios_1 = __importDefault(require("axios"));
admin.initializeApp();
const selarApiKey = (0, params_1.defineSecret)("SELAR_API_KEY");
// 1. Le Vigile (Scheduled Function) qui tourne toutes les 1 minute
exports.pollSelarSales = (0, scheduler_1.onSchedule)({
    schedule: "every 1 minutes",
    secrets: [selarApiKey],
    timeZone: "Africa/Abidjan",
}, async (event) => {
    var _a, _b, _c, _d, _e, _f, _g;
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
        if (metaDoc.exists && ((_a = metaDoc.data()) === null || _a === void 0 ? void 0 : _a.lastChecked)) {
            lastChecked = (_c = (_b = metaDoc.data()) === null || _b === void 0 ? void 0 : _b.lastChecked) === null || _c === void 0 ? void 0 : _c.toDate();
        }
        const response = await axios_1.default.get("https://selar.co/api/v1/sales", {
            headers: {
                "Authorization": `Bearer ${key}`,
                "Content-Type": "application/json"
            }
        });
        const sales = ((_d = response.data) === null || _d === void 0 ? void 0 : _d.data) || [];
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
                const customerPhone = (_e = sale.customer) === null || _e === void 0 ? void 0 : _e.phone;
                let productId = ((_f = sale.product) === null || _f === void 0 ? void 0 : _f.name) || "Inconnu";
                if (sale.custom_fields && sale.custom_fields.productId) {
                    productId = sale.custom_fields.productId;
                }
                await purchaseRef.set({
                    transactionId: transactionId,
                    amount: sale.amount,
                    currency: sale.currency,
                    customerPhone: customerPhone,
                    customerEmail: ((_g = sale.customer) === null || _g === void 0 ? void 0 : _g.email) || "",
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
    }
    catch (error) {
        console.error("Erreur critique lors du polling Selar:", error);
    }
});
// 2. Endpoint HTTP pour le frontend (Polling côté client)
exports.checkTransaction = (0, https_1.onRequest)({ cors: true }, async (req, res) => {
    const email = req.query.email;
    if (!email) {
        res.status(400).json({ error: "Email is required" });
        return;
    }
    try {
        const db = admin.firestore();
        // Query the latest purchase by this email
        const snapshot = await db.collection("purchases")
            .where("customerEmail", "==", email)
            .orderBy("createdAt", "desc")
            .limit(1)
            .get();
        if (!snapshot.empty) {
            const doc = snapshot.docs[0];
            const data = doc.data();
            res.status(200).json({
                success: true,
                status: data === null || data === void 0 ? void 0 : data.status,
                productId: data === null || data === void 0 ? void 0 : data.productId
            });
        }
        else {
            res.status(200).json({
                success: false,
                message: "Transaction not yet processed"
            });
        }
    }
    catch (error) {
        console.error("Erreur checkTransaction:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
//# sourceMappingURL=index.js.map