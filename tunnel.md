# 📑 PROPOSITION DE PLAN D'INTÉGRATION : PARCOURS UTILISATEUR & TUNNEL DE CONVERSION
> **Projet :** Écosystème Web EDUCTOME — Juin 2026  
> **Destinataire :** Équipe de Développement Antigravity  
> **Objectif :** Intégrer les parcours Visiteur, Élève Gratuit et Élève Premium sans cannibalisation.

---

## CONTEXTE ET PHILOSOPHIE DE CONVERSION
L'objectif technique de ce plan est de mettre en place un "verrou de valeur" progressif. L'utilisateur anonyme ne doit avoir aucun accès direct au contenu des cours (tomes), mais doit être attiré par les ressources gratuites pour créer son compte. Une fois connecté, il bénéficie d'un chapitre complet gratuit pour tester l'efficacité de la méthode avant de rencontrer le paywall de manière fluide.

---

## 1. ARCHITECTURE DE LA LANDING PAGE PUBLIQUE (ZÔNE ANONYME)
*L'accès à cette page est 100 % ouvert, sans inscription. Son but est d'accueillir et de rassurer l'élève ou le parent.*

* **1.1 Storytelling & Confiance :** Présentation du parcours de l'auteur (Marius Gombaleu, ancien caïman du Lycée Classique d'Abidjan) pour installer le ton "Grand Frère".
* **1.2 La Transformation EDUCTOME :** Comparatif d'impact mettant en valeur la promesse de la marque (*Avant EDUCTOME :* élève bosseur mais bloqué / *Après EDUCTOME :* maîtrise des notions et réussite).
* **1.3 Le Quiz Diagnostic Interactif :** Mini-formulaire dynamique permettant à l'élève de définir son profil d'apprentissage (Bosseur bloqué, découragé, caïman en herbe).
* **1.4 Showcase des Collections :** Présentation visuelle de toutes les collections et de la liste des 12 tomes disponibles (Sommaire global visible).
* **1.5 L'Aiguillage des 3 Portes :** Présentation claire des 3 canaux d'acquisition selon le profil de l'acheteur :
  * *Porte 1 (PDF Brut) :* Redirection vers la boutique Selar.
  * *Porte 2 (L'Espace Élearning) :* Inscription/Connexion à la Web App.
  * *Porte 3 (Le Livre Physique) :* Bouton de commande WhatsApp pour livraison papier.

---

## 2. GESTION DE LA PAGE "RESSOURCES GRATUITES" (ZÔNE DE CAPTURE DE LEADS)
*Cette page sert d'hameçon technique principal pour générer des inscriptions sur la plateforme.*

* **2.1 Contenu en Accès Libre (Zéro compte requis) :**
  * Les articles et astuces pédagogiques du **Blog**.
  * Les énoncés textuels des **3 exercices gratuits par tome** (11 tomes au total).
* **2.2 Le Verrou de Valeur (Popup Grand Frère) :**
  * *Déclencheur :* Dès que l'utilisateur clique sur `[ 🔓 Voir la correction détaillée ]` ou sur `[ 📥 Télécharger la Fiche Méthode PDF ]`.
  * *Action :* Blocage de l'action et ouverture d'une fenêtre d'inscription rapide.
  * *Données minimales à capturer :* Prénom, Numéro WhatsApp, Série (Tle D / Tle A / 3e), Nom du Lycée.

---

## 3. L'ESPACE ÉLÈVE CONNECTÉ ("MON COMPTE" / "MES COURS")
*Une fois le compte gratuit créé, l'élève est redirigé dans son espace personnel e-learning.*

* **3.1 Onglet "Mon Compte" :** Suivi du profil, historique des points d'expérience (XP) gagnés et affichage du grade évolutif ivoirien (*Lycéen → Bosseur → Caïman en herbe → Caïman Validé → Légende du Cacao*).
* **3.2 Onglet "Mes Cours" :** Catalogue interactif des tomes disponibles filtrés selon la série de l'élève.
* **3.3 L'Immersion Gratuite (Le Déclic Pédagogique) :** * En ouvrant n'importe quel tome, l'élève connecté a accès à **100 % de gratuité** sur :
    * La lecture complète du **Message du Grand Frère** (Storytelling immersif).
    * L'intégralité du **Chapitre 1 : Les Bases Solides** (Cours interactif enrichi + exercices BASE associés).

---

## 4. LA MÉCANIQUE DU PAYWALL DE TRANSITION
*Le moment exact où l'application convertit l'élève gratuit en utilisateur Premium.*

* **4.1 L'Action Déclencheuse :** À la fin de la lecture du Chapitre 1, lorsque l'élève clique sur le bouton de navigation globale `[ Continuer ]` ou `[ Chapitre Suivant ]` pour accéder au Chapitre 2 (le cœur de la notion avec les analogies locales).
* **4.2 L'Écran de Vente Premium (Paywall) :**
  * Blocage de la navigation et affichage de l'interface d'achat chaleureuse sur le ton Grand Frère.
  * Affichage des tarifs en FCFA uniquement avec intégration de l'API CinetPay (Paiement direct par MTN, Orange, Wave).
  * **Deux options d'achat au choix :**
    * *Achat du Chapitre unique :* `300 F CFA`
    * *Achat du Tome complet :* `1 500 F CFA`

---

## 5. RÈGLE DE SYNERGIE ET ANTI-CANNIBALISATION (LIVRE ↔ APP)
*Afin d'assurer la cohérence tarifaire et d'augmenter la valeur perçue du livre physique.*

* **5.1 Le Système de Coupon QR Code :**
  * Chaque livre physique vendu à `3 000 F CFA` (Porte 3) contient un code unique.
  * Antigravity doit implémenter un scanner/champ de saisie dans l'onglet "Mon Compte" permettant à l'élève d'entrer ce code.
  * *Résultat technique :* La validation du code débloque immédiatement et gratuitement l'accès Premium total à ce tome sur la Web App.

---