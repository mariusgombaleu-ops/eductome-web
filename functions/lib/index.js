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
exports.unlockCourseSecure = exports.getPublicStudentData = exports.forumReplyNotifier = exports.courseReminderNotifier = exports.targetWarningNotifier = exports.premiumUnlockNotifier = exports.streakDangerNotifier = exports.claimSelarOrder = exports.checkTransaction = exports.pollSelarSales = void 0;
const admin = __importStar(require("firebase-admin"));
const scheduler_1 = require("firebase-functions/v2/scheduler");
const https_1 = require("firebase-functions/v2/https");
const firestore_1 = require("firebase-functions/v2/firestore");
const params_1 = require("firebase-functions/params");
const axios_1 = __importDefault(require("axios"));
admin.initializeApp();
const selarApiKey = (0, params_1.defineSecret)("SELAR_API_KEY");
const VALID_ACHAT_TYPES = ["chapitre", "tome", "collection", "physique"];
function resolveAchatType(raw) {
    if (typeof raw === "string" && VALID_ACHAT_TYPES.includes(raw)) {
        return raw;
    }
    return "tome";
}
async function createAchatForUser(db, uid, productReference, productType, amount, transactionId) {
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
exports.pollSelarSales = (0, scheduler_1.onSchedule)({
    schedule: "every 10 minutes",
    secrets: [selarApiKey],
    timeZone: "Africa/Abidjan",
}, async (_event) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
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
        if (metaDoc.exists && ((_a = metaDoc.data()) === null || _a === void 0 ? void 0 : _a.lastChecked)) {
            lastChecked = (_c = (_b = metaDoc.data()) === null || _b === void 0 ? void 0 : _b.lastChecked) === null || _c === void 0 ? void 0 : _c.toDate();
        }
        const response = await axios_1.default.get("https://selar.co/api/v1/sales", {
            headers: {
                Authorization: `Bearer ${key}`,
                "Content-Type": "application/json",
            },
        });
        const sales = ((_d = response.data) === null || _d === void 0 ? void 0 : _d.data) || [];
        let countNewSales = 0;
        for (const rawSale of sales) {
            const sale = rawSale;
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
                const customerEmail = ((_e = sale.customer) === null || _e === void 0 ? void 0 : _e.email) || "";
                const productReference = ((_f = sale.custom_fields) === null || _f === void 0 ? void 0 : _f.productId) ||
                    ((_g = sale.product) === null || _g === void 0 ? void 0 : _g.slug) ||
                    ((_h = sale.product) === null || _h === void 0 ? void 0 : _h.name) ||
                    "inconnu";
                const productType = resolveAchatType((_j = sale.custom_fields) === null || _j === void 0 ? void 0 : _j.type);
                // Enregistrer l'achat brut
                await purchaseRef.set({
                    transactionId: String(transactionId),
                    amount: sale.amount,
                    currency: sale.currency,
                    customerPhone: ((_k = sale.customer) === null || _k === void 0 ? void 0 : _k.phone) || "",
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
                    }
                    catch (authError) {
                        if (authError.code === "auth/user-not-found") {
                            // L'utilisateur n'a pas encore créé de compte — on marque pour réessai
                            console.warn(`Utilisateur introuvable pour ${customerEmail}. Achat en attente.`);
                        }
                        else {
                            console.error(`Erreur Auth pour ${customerEmail}:`, authError);
                        }
                    }
                }
                countNewSales++;
            }
            else {
                // Réessai pour les achats non liés (l'utilisateur s'est inscrit depuis)
                const existing = purchaseDoc.data();
                if (existing.achatLinked === false && existing.customerEmail) {
                    try {
                        const userRecord = await admin.auth().getUserByEmail(existing.customerEmail);
                        const uid = userRecord.uid;
                        const productType = resolveAchatType(existing.productType);
                        await createAchatForUser(db, uid, existing.productId || "inconnu", productType, existing.amount || 0, transactionId);
                        await purchaseRef.update({ userId: uid, achatLinked: true });
                        console.log(`Achat récupéré (retry) pour ${uid} (${existing.customerEmail})`);
                    }
                    catch (_l) {
                        // Toujours pas inscrit — on réessaiera au prochain passage
                    }
                }
            }
        }
        await metaRef.set({
            lastChecked: admin.firestore.FieldValue.serverTimestamp(),
        });
        console.log(`Polling terminé. ${countNewSales} nouvelles ventes traitées.`);
    }
    catch (error) {
        console.error("Erreur critique lors du polling Selar:", error);
    }
});
// ─── Utilitaire auth — extrait et vérifie le token Firebase ─────────────────
async function verifyFirebaseToken(req) {
    const authHeader = req.headers.authorization;
    if (!(authHeader === null || authHeader === void 0 ? void 0 : authHeader.startsWith("Bearer "))) {
        throw new Error("AUTH_MISSING");
    }
    const idToken = authHeader.split("Bearer ")[1];
    return admin.auth().verifyIdToken(idToken);
}
// 2. Endpoint HTTP pour le frontend (Mécanisme A — polling côté client)
// SÉCURITÉ : token Firebase requis + l'email demandé doit appartenir au compte connecté
exports.checkTransaction = (0, https_1.onRequest)({ cors: true }, async (req, res) => {
    // Vérification du token d'authentification
    let decodedToken;
    try {
        decodedToken = await verifyFirebaseToken(req);
    }
    catch (_a) {
        res.status(401).json({ error: "Non autorisé — token Firebase requis" });
        return;
    }
    const email = req.query.email;
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
        const userData = userDoc.data();
        const emailSelarProfil = userData === null || userData === void 0 ? void 0 : userData.email_selar;
        // L'email demandé doit être celui enregistré sur le profil utilisateur
        if (emailSelarProfil && email.toLowerCase() !== emailSelarProfil.toLowerCase()) {
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
                status: data === null || data === void 0 ? void 0 : data.status,
                productId: data === null || data === void 0 ? void 0 : data.productId,
            });
        }
        else {
            res.status(200).json({
                success: false,
                message: "Transaction not yet processed",
            });
        }
    }
    catch (error) {
        console.error("Erreur checkTransaction:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
// 3. Endpoint HTTP pour réclamer un achat via Référence (Mécanisme B — manuel)
// SÉCURITÉ : token Firebase requis + protection anti-force-brute (flag alreadyClaimed)
exports.claimSelarOrder = (0, https_1.onRequest)({ cors: true }, async (req, res) => {
    // Vérification du token d'authentification
    let decodedToken;
    try {
        decodedToken = await verifyFirebaseToken(req);
    }
    catch (_a) {
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
            const rl = rateLimitDoc.data();
            if (now - rl.windowStart < windowMs) {
                if (rl.count >= maxAttempts) {
                    res.status(429).json({
                        success: false,
                        message: "Trop de tentatives. Réessaie dans 1 heure.",
                    });
                    return;
                }
                await rateLimitRef.update({ count: admin.firestore.FieldValue.increment(1) });
            }
            else {
                // Réinitialiser la fenêtre
                await rateLimitRef.set({ count: 1, windowStart: now });
            }
        }
        else {
            await rateLimitRef.set({ count: 1, windowStart: now });
        }
    }
    catch (rlError) {
        console.error("Erreur rate limit:", rlError);
        // On continue en cas d'échec du rate limit — ne pas bloquer l'utilisateur légitime
    }
    try {
        const purchaseRef = db.collection("purchases").doc(String(reference.trim()));
        const purchaseDoc = await purchaseRef.get();
        if (purchaseDoc.exists) {
            const data = purchaseDoc.data();
            // Protection anti-réutilisation : vérifier que la référence n'a pas déjà été réclamée
            if ((data === null || data === void 0 ? void 0 : data.alreadyClaimed) === true) {
                res.status(200).json({
                    success: false,
                    message: "Cette référence a déjà été utilisée pour débloquer un cours.",
                });
                return;
            }
            if ((data === null || data === void 0 ? void 0 : data.status) === "SUCCESS") {
                // Marquer comme réclamée AVANT de répondre (évite les races conditions)
                await purchaseRef.update({
                    alreadyClaimed: true,
                    claimedByUid: decodedToken.uid,
                    claimedAt: admin.firestore.FieldValue.serverTimestamp(),
                });
                res.status(200).json({
                    success: true,
                    message: "Achat retrouvé avec succès",
                    productId: data.productId,
                });
            }
            else {
                res.status(200).json({
                    success: false,
                    message: "La transaction n'est pas encore finalisée.",
                });
            }
        }
        else {
            res.status(200).json({
                success: false,
                message: "Référence introuvable ou invalide.",
            });
        }
    }
    catch (error) {
        console.error("Erreur claimSelarOrder:", error);
        res.status(500).json({ success: false, message: "Erreur interne du serveur" });
    }
});
// ─── Notification helpers ─────────────────────────────────────────────────────
const SUBJECT_NAMES = {
    maths: "Mathématiques",
    pc: "Physique-Chimie",
    svt: "SVT",
    francais: "Français",
    philo: "Philosophie",
    anglais: "Anglais",
    hg: "Histoire-Géographie",
    edhc: "EDHC",
};
async function hasUnreadNotification(db, uid, type) {
    const snap = await db
        .collection("users").doc(uid).collection("notifications")
        .where("type", "==", type)
        .where("read", "==", false)
        .limit(1)
        .get();
    return !snap.empty;
}
async function writeNotification(db, uid, notif) {
    await db.collection("users").doc(uid).collection("notifications").add(notif);
}
function computeGradeAverage(grades, matiereId) {
    var _a;
    const all = [];
    for (const trim of ["t1", "t2", "t3"]) {
        const arr = (_a = grades[trim]) === null || _a === void 0 ? void 0 : _a[matiereId];
        if (Array.isArray(arr)) {
            for (const g of arr) {
                const n = Number(g);
                if (g !== "" && !isNaN(n))
                    all.push(n);
            }
        }
    }
    return all.length > 0 ? all.reduce((a, b) => a + b, 0) / all.length : null;
}
// ─── Trigger 1 — STREAK_DANGER (scheduled hourly) ────────────────────────────
exports.streakDangerNotifier = (0, scheduler_1.onSchedule)({ schedule: "every 60 minutes", timeZone: "Africa/Abidjan" }, async (_event) => {
    const db = admin.firestore();
    const now = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    const today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
    const usersSnap = await db.collection("users")
        .where("currentStreak", ">", 0)
        .get();
    let sent = 0;
    for (const userDoc of usersSnap.docs) {
        const data = userDoc.data();
        if (data.lastStudyDate === today)
            continue;
        const uid = userDoc.id;
        const streak = data.currentStreak || 0;
        if (await hasUnreadNotification(db, uid, "STREAK_DANGER"))
            continue;
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
});
// ─── Trigger 2 — PREMIUM_UNLOCK (achats onCreate) ────────────────────────────
// NOTE: user.statut is derived from achats in the frontend, not stored on the
// user doc, so we trigger here on achats/{achatId} instead of users/{uid}.
const FAMILLE_TYPES = ["tome", "collection", "physique"];
exports.premiumUnlockNotifier = (0, firestore_1.onDocumentCreated)("achats/{achatId}", async (event) => {
    var _a;
    const data = (_a = event.data) === null || _a === void 0 ? void 0 : _a.data();
    if (!data)
        return;
    if (!FAMILLE_TYPES.includes(data.type))
        return;
    const uid = data.compte_id;
    if (!uid)
        return;
    const db = admin.firestore();
    if (await hasUnreadNotification(db, uid, "PREMIUM_UNLOCK"))
        return;
    await writeNotification(db, uid, {
        type: "PREMIUM_UNLOCK",
        title: "Compte Famille activé !",
        message: "Bienvenue dans la famille, Champion(ne) ! Ton accès complet est activé — XP ×2, quiz illimités, accès offline. À toi de jouer.",
        read: false,
        createdAt: Date.now(),
        deepLink: "/dashboard",
    });
});
// ─── Trigger 3 — TARGET_WARNING (users/{uid} onUpdate, bacSimulation changed) ─
exports.targetWarningNotifier = (0, firestore_1.onDocumentUpdated)("users/{uid}", async (event) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const before = (_a = event.data) === null || _a === void 0 ? void 0 : _a.before.data();
    const after = (_b = event.data) === null || _b === void 0 ? void 0 : _b.after.data();
    if (!before || !after)
        return;
    if (JSON.stringify((_c = before.bacSimulation) !== null && _c !== void 0 ? _c : {}) === JSON.stringify((_d = after.bacSimulation) !== null && _d !== void 0 ? _d : {})) {
        return;
    }
    const uid = event.params.uid;
    const db = admin.firestore();
    if (await hasUnreadNotification(db, uid, "TARGET_WARNING"))
        return;
    const bacSimulation = ((_e = after.bacSimulation) !== null && _e !== void 0 ? _e : {});
    const grades = ((_f = after.grades) !== null && _f !== void 0 ? _f : {});
    const toWrite = [];
    for (const [matiereId, rawNote] of Object.entries(bacSimulation)) {
        if (typeof rawNote !== "number")
            continue;
        const noteSimulee = rawNote;
        const moyenneClasse = computeGradeAverage(grades, matiereId);
        if (moyenneClasse === null)
            continue;
        const delta = noteSimulee - moyenneClasse;
        if (delta < 1.5)
            continue;
        const matiereName = (_g = SUBJECT_NAMES[matiereId]) !== null && _g !== void 0 ? _g : matiereId;
        toWrite.push({
            type: "TARGET_WARNING",
            title: `Écart détecté en ${matiereName}`,
            message: `Champion(ne), tu as simulé ${noteSimulee.toFixed(1)}/20 en ${matiereName} mais ta moyenne actuelle est ${moyenneClasse.toFixed(2)}/20. Écart de ${delta.toFixed(1)} points à combler avant le BAC.`,
            read: false,
            createdAt: Date.now(),
            deepLink: "/dashboard/notes-objectifs",
        });
    }
    if (toWrite.length === 0)
        return;
    const batch = db.batch();
    for (const notif of toWrite) {
        batch.set(db.collection("users").doc(uid).collection("notifications").doc(), notif);
    }
    await batch.commit();
});
// ─── Trigger 4 — COURSE_REMINDER (tomes/{tomeId} onCreate) ───────────────────
exports.courseReminderNotifier = (0, firestore_1.onDocumentCreated)("tomes/{tomeId}", async (event) => {
    var _a, _b;
    const tomeData = (_a = event.data) === null || _a === void 0 ? void 0 : _a.data();
    if (!tomeData)
        return;
    const tomeId = event.params.tomeId;
    const tomeTitle = (_b = tomeData.title) !== null && _b !== void 0 ? _b : "Nouveau tome";
    const tomeSerie = tomeData.serie;
    if (!tomeSerie)
        return;
    const db = admin.firestore();
    const usersSnap = await db.collection("users")
        .where("level", "==", tomeSerie)
        .get();
    for (const userDoc of usersSnap.docs) {
        const uid = userDoc.id;
        if (await hasUnreadNotification(db, uid, "COURSE_REMINDER"))
            continue;
        await writeNotification(db, uid, {
            type: "COURSE_REMINDER",
            title: "Nouveau contenu disponible !",
            message: `Champion(ne), ${tomeTitle} vient d'être ajouté. Ouvre-le maintenant et prends de l'avance.`,
            read: false,
            createdAt: Date.now(),
            deepLink: `/cours/${tomeId}`,
        });
    }
});
// ─── Trigger 5 — FORUM_REPLY (forum_replies/{replyId} onCreate) ──────────────
// Requires forum_posts to have an `authorId` field (Firebase UID).
// Replies without authorId fall back to no self-reply guard (still notifies).
exports.forumReplyNotifier = (0, firestore_1.onDocumentCreated)("forum_replies/{replyId}", async (event) => {
    var _a;
    const replyData = (_a = event.data) === null || _a === void 0 ? void 0 : _a.data();
    if (!replyData)
        return;
    const discussionId = replyData.discussionId;
    if (!discussionId)
        return;
    const db = admin.firestore();
    const postDoc = await db.collection("forum_posts").doc(discussionId).get();
    if (!postDoc.exists)
        return;
    const postData = postDoc.data();
    if (!postData)
        return;
    const postAuthorId = postData.authorId;
    if (!postAuthorId)
        return;
    const replyAuthorId = replyData.authorId;
    if (replyAuthorId && replyAuthorId === postAuthorId)
        return;
    if (await hasUnreadNotification(db, postAuthorId, "FORUM_REPLY"))
        return;
    await writeNotification(db, postAuthorId, {
        type: "FORUM_REPLY",
        title: "Quelqu'un a répondu à ton post",
        message: "Ta question sur le forum vient de recevoir une réponse. Va voir !",
        read: false,
        createdAt: Date.now(),
        deepLink: `/forum/posts/${discussionId}`,
    });
});
// ─── Proxy public profil élève — /parent/:uid ─────────────────────────────────
// Rôle : retourner UNIQUEMENT les champs publics sûrs du profil d'un élève.
// Ne retourne JAMAIS : email_selar, goal, goals, grades, bacSimulation, unlockedCourses complète.
// Appelé par ParentDashboard.tsx à la place d'un accès Firestore direct.
exports.getPublicStudentData = (0, https_1.onRequest)({ cors: true }, async (req, res) => {
    // NOTE : cet endpoint est intentionnellement public (pas d'auth requise).
    // Il est conçu pour la page Parent : l'élève partage un lien public vers son profil.
    // Les données exposées sont MINIMALES et non sensibles (pseudo, xp, streak, tomes achetés).
    // Ne jamais ajouter de données sensibles ici (email, grades, notes, achats complets).
    // Les champs exposés sont définis et immuables ci-dessous.
    const uid = req.query.uid;
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
        const data = userDoc.data();
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
            purchasedReferences: [],
        };
        // Lire les achats depuis la collection racine (Admin SDK bypass les rules).
        // On ne renvoie que les références — jamais montant, date ou ref_commande.
        const achatsSnap = await db.collection("achats")
            .where("compte_id", "==", uid)
            .get();
        publicData.purchasedReferences = achatsSnap.docs
            .map((d) => d.data().reference)
            .filter(Boolean);
        res.status(200).json({ success: true, data: publicData });
    }
    catch (error) {
        console.error("Erreur getPublicStudentData:", error);
        res.status(500).json({ error: "Erreur interne du serveur." });
    }
});
// ─── Cloud Function sécurisée pour débloquer un cours ────────────────────────
// Rôle : seule façon autorisée d'écrire dans users/{uid}.unlockedCourses.
// Vérifie qu'un achat réel existe dans /achats avant toute écriture.
// Le client NE DOIT JAMAIS écrire directement dans unlockedCourses.
exports.unlockCourseSecure = (0, https_1.onRequest)({ cors: true }, async (req, res) => {
    // Vérification du token d'authentification
    let decodedToken;
    try {
        decodedToken = await verifyFirebaseToken(req);
    }
    catch (_a) {
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
    }
    catch (error) {
        console.error("Erreur unlockCourseSecure:", error);
        res.status(500).json({ success: false, message: "Erreur interne du serveur." });
    }
});
//# sourceMappingURL=index.js.map