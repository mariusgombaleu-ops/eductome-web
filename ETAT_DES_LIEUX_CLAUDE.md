# 🏗️ EDUCTOME — État des Lieux de l'Application

**Date :** Juin 2026
**Destinataire :** Claude (et équipe technique)
**Rédigé par :** Antigravity

Ce document résume l'état d'avancement exact du projet EDUCTOME (Web App). Il sert de base de référence avant l'intégration du nouveau système de comptes (Gratuit / Famille) et du verrouillage avancé.

---

## 1. Architecture générale
- **Stack Technique Front-end :** React 18, Vite 5, TypeScript 5, Tailwind CSS 3 (avec Dark mode natif), React Router DOM 6.
- **Rendu Mathématique :** MathJax 3 pour le rendu LaTeX des formules (les images pour les équations sont strictement interdites).
- **Icônes :** Lucide React.
- **Back-end & Base de données :** Architecture Firebase prévue (Auth, Firestore, Storage). 
- **Hébergement :** Déployé et fonctionnel sur Vercel. L'application est aussi installable en PWA.
- **Structure du code :** Très modulaire (`src/components`, `src/pages`, `src/contexts`, `src/data`).

*Note : Actuellement, pour permettre le développement rapide du front-end, beaucoup de données (progression, XP, achats) sont simulées via le `localStorage` du navigateur en attendant le branchement définitif avec Firestore.*

---

## 2. Authentification
- **Méthode Prévue :** Inscription via Numéro de téléphone + Mot de passe, avec validation par OTP SMS.
- **État actuel :** Les interfaces (`Login.tsx`, `Register.tsx`) sont **100% développées et fonctionnelles visuellement**. Cependant, la logique métier repose actuellement sur une simulation (`AuthContext.tsx` avec variables en `localStorage` comme `eductome_user_logged_in`). 
- **À faire :** Brancher le SDK Firebase Auth officiel pour envoyer et vérifier les vrais OTP SMS.

---

## 3. Contenu e-learning (Le cœur de l'App)
- **Structure des données :** Implémentation robuste. Un fichier `.ts` par chapitre (ex: `src/data/t1-limites/chap1.ts`), contenant des objets TypeScript fortement typés.
- **Composants de rendu :** Le `BlockRenderer.tsx` gère parfaitement les **12 types de blocs** stricts exigés : `text`, `math`, `dialogue`, `tip`, `warning`, `rule`, `recap`, `analogy`, `table`, `figure`, `exercise`, `quiz`.
- **Système de verrouillage actuel :** Le Tome 1 (Starter Pack) est gratuit. Le reste est verrouillé. Le système vérifie un tableau `eductome_unlocked_tomes` pour autoriser l'accès. Le `CourseReader.tsx` est opérationnel (navigation fluide, mode sombre, sauvegarde du dernier chapitre lu).

---

## 4. Intégration Selar / Paiement
- **État de l'interface :** La page Boutique (`DashboardBoutique.tsx`) est opérationnelle, avec des cartes optimisées pour mobile et la mise en avant des Offres VIP.
- **Ce qui a été testé :** La modale de paiement (`SelarPaymentModal.tsx`) s'ouvre, génère le lien de paiement Selar et redirige l'utilisateur. Côté Selar, le paiement passe.
- **Le blocage (Webhook) :** Actuellement, le serveur EDUCTOME (Firebase Cloud Functions) ne capte pas encore la confirmation de paiement de Selar de manière sécurisée. Nous utilisions un système temporaire (`PaymentSuccess.tsx`) avec du polling/redirection qui repose sur le `localStorage` (`eductome_pending_course`).
- **À faire :** Déployer la Cloud Function officielle pour écouter le webhook Selar, valider le paiement, et écrire directement dans la collection `/purchases/{id}` de Firestore (car l'écriture depuis le front-end est formellement interdite par la règle de sécurité).

---

## 5. Gamification
- **Système XP & Niveaux :** **Entièrement fonctionnel côté front-end** (`UserContext.tsx` et `useProgress.ts`). 
- Les élèves gagnent des points selon les constantes fixes (`XP.SECTION = 10`, `XP.QUIZ_FIRST = 50`, etc.).
- Les niveaux ivoiriens (Élève ➡️ Bosseur ➡️ Caïman ➡️ Légende du Cacao) s'affichent dynamiquement en fonction de l'XP.
- Le suivi des séries (Streaks) est en place (stocké en local pour le moment).

---

## 6. Forum
- **État actuel :** L'interface utilisateur (`src/pages/forum/`) est maquettée et développée en React. On peut naviguer dans les catégories et voir le design des posts et des réponses.
- **À faire :** C'est actuellement une coquille vide/mockée. Il faut brancher l'UI sur les collections Firestore `forum_posts` et `forum_replies`.

---

## 7. Calculateur de moyenne
- **État actuel :** **100% Fonctionnel.**
- **Emplacement :** Il est intégré directement dans le tableau de bord (`src/pages/dashboard/GradesCalculator.tsx`) comme un outil dédié pour les élèves, très apprécié pour simuler l'obtention de leur BAC.

---

## 8. UI/UX — État des écrans
**C'est le point fort actuel. L'application est esthétiquement très aboutie et "mobile-first".**
- **Écrans publics fonctionnels :** Accueil (`Home.tsx`), Catalogue des collections, À propos, Blog, Ressources.
- **Écrans privés (Dashboard) fonctionnels :** Vue d'ensemble (`Overview.tsx`), Mes Cours, Boutique, Profil, Paramètres, Lecteur de cours, Starter Pack.
- **Design :** Application stricte de la charte EDUCTOME (couleurs Magenta/Bleu Marine, mode sombre très soigné, ton "Grand Frère" omniprésent).

---

## 9. Ce qui est bloqué / En attente d'implémentation
1. **Le Backend "Vrai" :** La migration des données du `localStorage` vers la base **Firestore** (gestion des profils utilisateurs authentifiés).
2. **La sécurité des paiements :** Le déploiement du webhook Selar sur Cloud Functions.
3. **Le nouveau système de Comptes :** J'attends ton document de spécifications concernant le modèle Gratuit / Famille EDUCTOME et les nouvelles règles de tarification pour commencer la refonte de la base de données et des accès.

---
*Ce document est à jour et reflète le code actuellement déployé sur Vercel.*
