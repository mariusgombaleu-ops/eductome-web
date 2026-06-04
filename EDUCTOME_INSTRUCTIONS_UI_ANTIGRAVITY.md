# EDUCTOME — Instructions UI/UX Complètes pour Antigravity
> Document de refonte visuelle avant insertion du contenu réel  
> Version 1.0 · Juin 2026 · Gombaleu Marius  
> ⚠️ Applique TOUTES ces modifications avant d'insérer le moindre contenu de cours.

---

## CONTEXTE

L'interface actuelle de l'app EDUCTOME est fonctionnelle mais les blocs, pages et composants manquent de cohérence visuelle. Avant d'insérer le contenu réel des tomes, toute l'interface doit être remise au propre selon les spécifications ci-dessous.

**Priorité absolue :** mobile-first. La majorité des élèves ivoiriens utilisent un smartphone Android. Chaque composant doit être parfait sur mobile avant d'être testé sur desktop.

---

## SECTION 1 — Design System Global

### 1.1 Palette de couleurs officielle

```typescript
// src/constants/colors.ts — PALETTE OFFICIELLE EDUCTOME

export const COLORS = {
  // Couleurs principales
  magenta:    '#D81B60',  // Logo "Educ" — accents forts — CTA principaux
  marine:     '#1A3557',  // Logo "tome" — titres — fonds sombres
  bleu:       '#1976D2',  // Sections — liens — éléments secondaires

  // Couleurs collections
  clés:       '#1A3557',  // Les Clés Maths
  sciences:   '#6A1B9A',  // Les Clés Sciences
  lettres:    '#880E4F',  // Les Clés Lettres
  dc:         '#C62828',  // Les Derniers Codes
  voie:       '#2E7D32',  // La Voie
  racines:    '#E67E22',  // Les Racines
  college:    '#37474F',  // 3e Facile

  // Encadrés
  tipBg:      '#D5F5E3',  // Fond encadré conseil
  tipBorder:  '#1E8449',  // Bordure encadré conseil
  warnBg:     '#FDEDEC',  // Fond encadré piège
  warnBorder: '#C0392B',  // Bordure encadré piège
  ruleBg:     '#D6E4F0',  // Fond encadré règle d'or
  ruleBorder: '#1F5C99',  // Bordure encadré règle d'or
  recapBg:    '#FDEBD0',  // Fond encadré à retenir
  recapBorder:'#E67E22',  // Bordure encadré à retenir

  // Niveaux exercices
  base:       '#1E8449',  // BASE — vert
  moyen:      '#E67E22',  // MOYEN — orange
  bac:        '#C0392B',  // BAC — rouge
  correction: '#1F5C99',  // Corrections — bleu

  // UI généraux
  dark:       '#0D1117',  // Fond principal dark mode
  darkCard:   '#161B22',  // Fond des cards dark mode
  darkBorder: '#30363D',  // Bordures dark mode
  textLight:  '#E6EDF3',  // Texte principal dark mode
  textMuted:  '#8B949E',  // Texte secondaire dark mode
} as const;
```

### 1.2 Typographie

```typescript
// Polices officielles EDUCTOME
// Corps : Poppins (Google Fonts)
// Formules : MathJax (déjà intégré)

// Tailles standards
export const TYPOGRAPHY = {
  xs:   '12px',   // Labels, badges
  sm:   '14px',   // Texte secondaire
  base: '16px',   // Corps du cours (mobile)
  lg:   '18px',   // Sous-titres
  xl:   '20px',   // Titres sections
  '2xl':'24px',   // Titres chapitres
  '3xl':'30px',   // Titres pages
  '4xl':'36px',   // Titres principaux
} as const;
```

### 1.3 Espacements — Règle mobile-first

- Padding horizontal des pages : `px-4` (16px) sur mobile, `px-6` (24px) sur tablet+
- Espacement entre les sections : `mb-6` (24px) minimum
- Espacement entre les blocs de cours : `mb-4` (16px)
- Coins arrondis des cards : `rounded-xl` (12px)
- Coins arrondis des boutons : `rounded-lg` (8px)

---

## SECTION 2 — Page de Connexion / Inscription

### 2.1 Ce qui doit changer

**PROBLÈME ACTUEL :** La page de connexion est en mode clair (fond blanc) alors que toute l'app est en dark mode. Il y a une rupture visuelle au moment de l'entrée.

**CORRECTION :**
- Fond : dark `#0D1117` — pas blanc
- Card centrale : `#161B22` avec bordure `#30363D`
- Logo EDUCTOME en haut centré avec le magenta `#D81B60`
- Titre : "Bon retour, Champion(ne) ! 👋" — pas "Bon retour !"
- Sous-titre : "Entre ton numéro pour accéder à ton espace."
- Champ téléphone : préfixe `+225` affiché automatiquement en gris
- Bouton principal : fond magenta `#D81B60` — texte blanc — `rounded-lg`
- Lien inscription : "Pas encore de compte ? **Rejoins EDUCTOME →**"
- Supprimer le champ "mot de passe" — remplacer par OTP SMS (Firebase Phone Auth)

### 2.2 Flux inscription (nouvelle page)

```
Étape 1 : Numéro de téléphone → Bouton "Recevoir mon code"
Étape 2 : Saisie OTP 6 chiffres (champs séparés, 1 chiffre par case)
Étape 3 (1ère connexion seulement) : Compléter le profil
  - Prénom / Pseudo
  - Niveau : Terminale D / Terminale A / 3ème
  - Matière préférée
  - Objectif : Mention Passable / Bien / Très Bien / Excellent
```

---

## SECTION 3 — Sidebar (Menu de Navigation)

### 3.1 Structure officielle de la sidebar

```
LOGO EDUCTOME (en haut — cliquable vers Dashboard)

─────────────────────
MENU PRINCIPAL
  🏠  Vue d'ensemble      ← Dashboard
  👤  Mon Profil
  📚  Mes Cours
  💬  Forum d'Entraide
  📄  Ressources Gratuites
  🛒  Boutique

─────────────────────
COMPTE
  ⚙️  Paramètres
  🚪  Déconnexion
```

### 3.2 Style de la sidebar

- Fond : `#0D1117` (plus sombre que le contenu)
- Item actif : fond `#1A3557` (bleu marine) + bordure gauche magenta `#D81B60` + texte blanc gras
- Item inactif : texte `#8B949E` — au hover : texte blanc + fond `#161B22`
- Icônes : Lucide React — taille 20px — alignées avec le texte
- Sur mobile : sidebar cachée par défaut — icône hamburger en haut gauche
- Sur desktop : sidebar fixe à gauche — largeur 260px — collapsible à 60px (icônes seulement)
- Transition collapse : smooth 300ms

### 3.3 Header (barre du haut)

- Fond : `#0D1117` avec bordure bottom `#30363D`
- Gauche : icône hamburger (mobile) ou logo réduit (desktop collapsed)
- Centre : barre de recherche — placeholder "Rechercher un cours, un exercice..."
- Droite : icône 🔔 avec badge rouge si notifications + avatar + nom + niveau en texte

---

## SECTION 4 — Dashboard (Vue d'ensemble)

### 4.1 Structure complète de la page

```
┌─────────────────────────────────────────────────────┐
│  HERO BANNER (Salutation + Série d'étude)            │
├────────────┬────────────┬────────────┬───────────────┤
│ Leçons     │ Moyenne    │ Points XP  │ Objectif BAC  │
│ terminées  │ Quiz       │            │               │
├────────────┴────────────┴────────────┴───────────────┤
│  WIDGET "CE QUE TU DOIS FAIRE AUJOURD'HUI"           │
├─────────────────────────┬───────────────────────────┤
│  Temps d'étude (graph)  │  Suggéré pour toi          │
└─────────────────────────┴───────────────────────────┘
```

### 4.2 Hero Banner

- Fond : dégradé de `#1A3557` vers `#1976D2`
- Titre : "Bon matin/après-midi/soir, [Prénom] 👋" — dynamique selon l'heure
- Sous-titre : citation motivante rotative (changer chaque jour)
- Droite : badge "SÉRIE ACTUELLE 🔥 X Jours" — fond orange `#E65100` — texte blanc gras
- Height : 140px sur mobile, 160px sur desktop
- Coins arrondis : `rounded-2xl`

**Citations motivantes (banque de départ) :**
```
"Chaque minute d'étude est un pas de plus vers ton but."
"Le Caïman ne dort pas — il prépare sa victoire."
"Au Cacao, tant que le match n'est pas fini, on peut gâter le coin."
"Ce n'est pas une question d'intelligence. C'est une question de méthode."
"Celui qui comprend domine. Celui qui mémorise subit."
```

### 4.3 Les 4 stats cards

**Règle importante :** la 4ème stat est "Objectif BAC" — PAS "Classement". Le classement peut décourager. L'objectif BAC motive.

| Card | Icône | Valeur | Badge coloré |
|------|-------|--------|-------------|
| Leçons terminées | 📖 | Nombre | "+X cette semaine" en bleu |
| Moyenne Quiz | 🎯 | XX% | "Objectif 80%" en magenta |
| Points d'XP | ⭐ | Nombre | "Niveau X" en jaune |
| Objectif BAC | 🏆 | XX% accompli | "Mention Bien" en vert |

**Style des cards :**
- Fond : `#161B22`
- Bordure bottom colorée (4px) selon la couleur du badge
- Coins : `rounded-xl`
- Padding : `p-4` (16px)
- Valeur principale : `text-3xl font-bold text-white`
- Label : `text-sm text-[#8B949E]`

### 4.4 Widget "Ce que tu dois faire aujourd'hui"

- Fond : `#161B22` avec bordure left 4px magenta `#D81B60`
- Icône 🎯 + titre "Aujourd'hui"
- Message dynamique basé sur la progression réelle :
  *"Chapitre 3 des Limites t'attend. 20 minutes suffisent. On y va ?"*
- Bouton "Continuer →" — fond magenta — texte blanc

### 4.5 Graphique Temps d'étude

- Type : barres verticales simples (recharts BarChart)
- Couleur des barres : `#1976D2` avec opacity 80%
- Barre jour actuel : `#D81B60` (mise en évidence)
- Fond : `#161B22` — grille : `#30363D`
- Label axe X : Lu Ma Me Je Ve Sa Di
- Pas de légende complexe — juste les barres et les valeurs en heures

---

## SECTION 5 — Page "Mes Cours"

### 5.1 Structure de la page

```
HERO BANNER "Mes Cours" (fond bleu marine)
  → Titre + description

ONGLETS : [ Tous | En cours | Terminés ]

GRILLE DE COURS (2 colonnes mobile, 3 colonnes desktop)
```

### 5.2 Card de cours

Chaque tome acheté est représenté par une card :

```
┌─────────────────────────────────┐
│  FOND COLORÉ (couleur collection)│  ← hauteur 120px
│  Titre du tome (blanc, gras)     │
│  MATIÈRE · NIVEAU                │
├─────────────────────────────────┤
│  [X/Y Quiz]         [Badge état] │
│  Progression globale       XX%   │
│  ████████░░░░░░░░░░░░░░░░░░░░░  │
├─────────────────────────────────┤
│  ▶ Continuer    ou   ▶ Revoir   │
└─────────────────────────────────┘
```

**Règles visuelles des cards :**
- Fond couleur = couleur de la collection (marine pour Maths, violet pour Sciences, etc.)
- Badge état : "Terminé ⭐" fond doré / "En cours" fond bleu / "Nouveau" fond vert
- Barre de progression : couleur selon collection — fond `#30363D`
- Bouton "Continuer" : fond transparent, bordure `#1976D2`, texte bleu — au hover : fond bleu
- Bouton "Revoir" : fond `#30363D`, texte `#8B949E`

### 5.3 État vide (aucun cours acheté)

```
┌─────────────────────────────────┐
│           📚                    │
│   Tu n'as pas encore de cours   │
│   Découvre notre catalogue et   │
│   commence dès aujourd'hui.     │
│                                 │
│   [ Voir la Boutique → ]        │
└─────────────────────────────────┘
```

---

## SECTION 6 — CourseReader (Lecteur de Cours)

C'est le composant le plus important de toute l'app. Il doit être parfait.

### 6.1 Layout général

```
┌──────────────────────────────────────────────┐
│  BARRE DE PROGRESSION (fine, en haut, fixe)  │
├────────────┬─────────────────────────────────┤
│  SOMMAIRE  │  CONTENU DU CHAPITRE            │
│  (sidebar) │                                 │
│            │  [blocs de contenu en scroll]   │
│            │                                 │
│            │  [exercices interactifs]        │
│            │                                 │
│            │  [quiz de validation]           │
└────────────┴─────────────────────────────────┘
```

**Sur mobile :** sidebar cachée → bouton "Sommaire" en bas de l'écran (floating button)

### 6.2 Barre de progression (ProgressBar)

- Position : fixed en haut de page (z-index élevé)
- Hauteur : 3px
- Couleur : magenta `#D81B60`
- Avance automatiquement au scroll (calcul basé sur scrollY / documentHeight)
- Animation : smooth, pas de saut

### 6.3 Sidebar sommaire

**Sur desktop (visible) :**
- Largeur : 260px fixe
- Fond : `#0D1117`
- Header : bouton "← RETOUR" + titre du tome
- Chapitres listés avec indicateurs :
  - ✅ Validé (vert)
  - ▶ En cours (magenta, surligné)
  - 🔒 Verrouillé (gris, cadenas)
- Chapitre actif : fond `#1A3557` + bordure left magenta

**Sur mobile (tiroir) :**
- Se ferme automatiquement après avoir cliqué sur un chapitre
- Animation slide-in depuis la gauche

### 6.4 Zone de contenu — Rendu des blocs

**Règles générales :**
- Largeur max du contenu : 720px centré (lisibilité optimale)
- Font-size corps : 16px mobile, 17px desktop
- Line-height : 1.7 (respiration du texte)
- Espacement entre blocs : 24px (mb-6)

**Bloc `text` :**
```
Paragraphe normal — Poppins Regular 16px
Couleur : #E6EDF3
Justifié sur desktop, aligné gauche sur mobile
```

**Bloc `math` :**
```
┌─────────────────────────────────┐
│  [Formule MathJax centrée]      │  ← fond #161B22, padding 16px, rounded-lg
│  Explication en italique gris   │  ← si présente
└─────────────────────────────────┘
```

**Bloc `dialogue` :**
```
🗣️ Le Petit Frère :
┌─────────────────────────────────┐
│  "Question de l'élève..."       │  ← fond #FEF9E7 (orange pâle)
│                            (PF) │  ← bordure left 4px orange
└─────────────────────────────────┘

🗣️ Le Grand Frère :
┌─────────────────────────────────┐
│  "Réponse du mentor..."         │  ← fond #EBF5FB (bleu pâle)
│                            (GF) │  ← bordure left 4px bleu
└─────────────────────────────────┘
Note : sur dark mode, utiliser des versions sombres de ces fonds
```

**Bloc `tip` (Conseil du Grand Frère) :**
```
┌─────────────────────────────────┐
│ 💡 Conseil du Grand Frère       │  ← titre vert #1E8449, gras
│─────────────────────────────────│  ← bordure left 4px vert #1E8449
│  Contenu du conseil...          │  ← fond #0F2A1A (vert très sombre)
└─────────────────────────────────┘
```

**Bloc `warning` (Piège à éviter) :**
```
┌─────────────────────────────────┐
│ ⚠️ Piège à éviter               │  ← titre rouge #C0392B, gras
│─────────────────────────────────│  ← bordure left 4px rouge #C0392B
│  Contenu du piège...            │  ← fond #2A0F0F (rouge très sombre)
└─────────────────────────────────┘
```

**Bloc `rule` (Règle d'Or) :**
```
┌─────────────────────────────────┐
│ 📌 Règle d'Or                   │  ← titre bleu #1F5C99, gras
│─────────────────────────────────│  ← bordure left 4px bleu #1F5C99
│  La formule ou le théorème...   │  ← fond #0A1628 (bleu très sombre)
└─────────────────────────────────┘
```

**Bloc `recap` (À Retenir) :**
```
┌─────────────────────────────────┐
│ 🚀 À Retenir                    │  ← titre orange #E67E22, gras
│─────────────────────────────────│  ← bordure left 4px orange #E67E22
│  Les points clés...             │  ← fond #2A1A0A (orange très sombre)
└─────────────────────────────────┘
```

**Bloc `analogy` (Analogie ivoirienne) :**
```
┌─────────────────────────────────┐
│ 🌍  Le Gbaka d'Adjamé           │  ← titre orange, gras, icône globe
│─────────────────────────────────│  ← fond #1A150A (beige très sombre)
│  Texte de l'analogie...         │  ← italique, texte clair
│                                 │
│  → Concept mathématique :       │  ← ligne de traduction en gras
│  "La limite, c'est la           │
│   destination — pas le trajet." │
└─────────────────────────────────┘
```

**Bloc `table` :**
- Scroll horizontal activé sur mobile (`overflow-x: auto`)
- En-tête : fond `#1A3557`, texte blanc gras
- Lignes alternées : `#161B22` et `#0D1117`
- Bordures : `#30363D`
- Coins : `rounded-lg` pour le conteneur

**Bloc `figure` :**
- Image centrée, largeur max 100%
- Légende en dessous : texte gris centré italique 14px
- Fond de l'image : blanc (les figures sont sur fond blanc)
- Coins : `rounded-lg`

### 6.5 Exercice interactif (ExerciceInteractif)

```
┌─────────────────────────────────────────┐
│ 🟢 EXERCICE BASE  ·  +15 XP            │  ← badge niveau coloré
│─────────────────────────────────────────│
│  Énoncé de l'exercice...                │
│                                         │
│  [▶ Voir l'étape 1]                    │  ← bouton magenta
│                                         │
│  ┌ Étape 1 : ──────────────────────┐   │  ← apparaît au clic
│  │  Raisonnement de l'étape...     │   │
│  └────────────────────────────────┘   │
│                                         │
│  [▶ Voir l'étape 2]                    │  ← débloqué après étape 1
│                                         │
│  ✅ Résultat final : ...                │  ← apparaît à la fin
│                                         │
│  💡 Conseil : ...    ⚠️ Piège : ...    │
└─────────────────────────────────────────┘
```

**Couleurs des badges niveau :**
- 🟢 BASE : fond `#1E8449` texte blanc
- 🟡 MOYEN : fond `#E67E22` texte blanc
- 🔴 BAC : fond `#C0392B` texte blanc

### 6.6 Quiz de fin de chapitre (QuizSection)

**État 1 — Question en cours :**
```
┌─────────────────────────────────────────┐
│  Question 3 / 5                         │  ← progress indicator
│─────────────────────────────────────────│
│  Texte de la question (avec MathJax)    │
│                                         │
│  ○ Option A                             │
│  ○ Option B                             │  ← radio buttons custom
│  ○ Option C                             │
│  ○ Option D                             │
│                                         │
│  [Valider ma réponse →]                 │  ← bouton magenta, actif si sélection
└─────────────────────────────────────────┘
```

**État 2 — Bilan (réussi) :**
```
┌─────────────────────────────────────────┐
│  🎉 Chapitre Validé !                   │  ← animation confettis
│  Score : 4/5 · +50 XP gagnés           │
│─────────────────────────────────────────│
│  [Chapitre suivant →]                   │  ← bouton magenta
└─────────────────────────────────────────┘
```

**État 3 — Bilan (échec) :**
```
┌─────────────────────────────────────────┐
│  📚 Continue d'essayer, Champion(ne) !  │
│  Score : 2/5 · Score requis : 3/5       │
│─────────────────────────────────────────│
│  Questions à revoir :                   │
│                                         │
│  Question 2 : [texte de la question]    │
│  ✅ Bonne réponse : Option B            │
│  💡 Explication : ...                   │
│                                         │
│  Question 4 : [texte de la question]    │
│  ✅ Bonne réponse : Option A            │
│  💡 Explication : ...                   │
│─────────────────────────────────────────│
│  [Relire le chapitre]  [Réessayer]      │
└─────────────────────────────────────────┘
```

### 6.7 Écran de verrouillage (ChapterLock)

Affiché quand l'élève arrive sur un chapitre payant sans l'avoir acheté :

```
┌─────────────────────────────────────────┐
│  🔒                                     │
│  Ce chapitre est verrouillé             │
│                                         │
│  "Tu as goûté au Chapitre 1.            │
│   La suite t'attend, Champion(ne)."     │
│                                         │
│  [Débloquer ce chapitre — 300 F CFA]   │  ← bouton magenta
│                                         │
│  ─────────── ou ──────────────          │
│                                         │
│  [Tome complet — 1 500 F CFA]          │  ← bouton outline bleu
│  ~~2 100 F~~ · Tu économises 600 F     │  ← ancrage prix barré
└─────────────────────────────────────────┘
```

---

## SECTION 7 — Mon Profil

### 7.1 Structure de la page

```
┌─────────────────────────────────────────┐
│  HEADER PROFIL (fond dégradé marine)    │
│  [Avatar] Prénom · Niveau d'études      │
│           Inscrit(e) depuis [date]      │
│           [Badge compte : Gratuit]      │
│                           Niveau X      │
│                     [barre XP: X/Xmax] │
├─────────────────────────────────────────┤
│  Informations Personnelles  │  Stats    │
├─────────────────────────────────────────┤
│  Mes Badges                             │
├─────────────────────────────────────────┤
│  Historique des achats                  │
└─────────────────────────────────────────┘
```

### 7.2 Badges débloqués

Affichage en grille 4 colonnes (mobile) :
- Badge débloqué : couleur pleine + nom en dessous
- Badge verrouillé : grayscale + opacité 40% + icône cadenas

### 7.3 Statistiques rapides

| Stat | Valeur |
|------|--------|
| Série d'étude | 🔥 X jours |
| Cours terminés | X |
| Temps cette sem. | Xh Xmin |
| Moyenne quiz | XX% |

---

## SECTION 8 — Forum d'Entraide

### 8.1 Structure de la page

```
HERO BANNER "Forum d'Entraide" + bouton "＋ Nouvelle Discussion"

BARRE DE RECHERCHE (pleine largeur)

CATÉGORIES (cards cliquables)

DISCUSSIONS RÉCENTES (colonne gauche) | ACTIF RÉCEMMENT (colonne droite)
```

### 8.2 Cards des catégories

```
┌─────────────────────────────────────────┐
│ [Icône]  Objectif BAC                   │  ← titre coloré selon catégorie
│          Entraide pour les Terminale... │  ← description
│                                         │
│  📋 156 Sujets  💬 1 240 Messages       │
│  🕐 il y a 5 min                        │
└─────────────────────────────────────────┘
```

Bordure left colorée selon la catégorie :
- Objectif BAC : rouge `#C62828`
- Exercices & Corrigés : bleu `#1A3557`
- Astuces & Méthodes : vert `#2E7D32`
- Vie de Lycéen : orange `#E67E22`
- Ressources Gratuites : violet `#6A1B9A`

### 8.3 Card de discussion (dans la liste)

```
┌─────────────────────────────────────────┐
│ [Avatar] Alexandre · il y a 5 min       │
│          🎯 Objectif BAC                │  ← badge catégorie
│                                         │
│  Besoin d'aide sur une équation         │
│  différentielle (Terminale Spé Maths)   │
│                                         │
│  💬 4 rép.  👁 23 vues  ❤️ 2 likes    │
└─────────────────────────────────────────┘
```

### 8.4 Modal "Nouvelle Discussion"

```
Titre de la discussion
Catégorie (sélecteur)
Corps du message (textarea avec support LaTeX)
[ 📷 Joindre une photo ]   ← important pour CI
[ Publier ]
```

---

## SECTION 9 — Boutique / Collections

### 9.1 Structure de la page

```
HERO BANNER "Boutique"

FILTRES : [ Tous | Maths | Sciences | Lettres | DC | La Voie ]

GRILLE DES TOMES (2 colonnes mobile, 3-4 desktop)
```

### 9.2 Card produit dans la boutique

```
┌─────────────────────────────────────────┐
│  FOND COULEUR COLLECTION (hauteur 140px)│
│  Numéro · Titre du tome                 │
│  MATIÈRE · NIVEAU                       │
├─────────────────────────────────────────┤
│  ✅ X chapitres  📝 X exercices         │
│  ⭐ Aperçu gratuit disponible           │
├─────────────────────────────────────────┤
│  300 F / chap    1 500 F / tome        │
│  [Aperçu gratuit]  [Acheter le tome]   │
└─────────────────────────────────────────┘
```

**Règle prix :** toujours afficher les deux options côte à côte. Jamais une seule.

---

## SECTION 10 — Notifications et Micro-interactions

### 10.1 Toast XP gagné

Apparaît en bas de l'écran après une action XP :
```
┌──────────────────────────┐
│  ⭐ +50 XP gagnés !      │  ← fond doré, texte sombre, 3 secondes
│  Quiz validé du 1er coup │
└──────────────────────────┘
```
Animation : slide-up depuis le bas → fade-out après 3 secondes.

### 10.2 Animation niveau monté

Quand l'élève monte de niveau :
- Overlay centré avec animation confettis
- "🏆 Niveau X atteint ! Tu es maintenant [Titre] !"
- Bouton "Super !" pour fermer

### 10.3 Notification série d'étude brisée

```
┌──────────────────────────────────────┐
│  🔥 Ta série est en pause            │
│  Tu as manqué hier, vieux père.      │
│  Reprends aujourd'hui et ta série    │
│  repart — faut pas lâcher maintenant.│
│  [ Étudier maintenant ]              │
└──────────────────────────────────────┘
```

---

## SECTION 11 — Ressources Gratuites

### 11.1 Structure

```
HERO BANNER "Ressources Gratuites"

ONGLETS : [ Fiches | Exercices | Annales | Outils ]

GRILLE DE RESSOURCES (cards téléchargeables)
```

### 11.2 Card ressource

```
┌─────────────────────────────────────────┐
│ [Icône type]  Méthode Dissertation      │
│               RESSOURCE · PHILO         │
│                                         │
│  Description courte de la ressource...  │
│                                         │
│  [ 📥 Télécharger gratuitement ]        │
└─────────────────────────────────────────┘
```

---

## SECTION 12 — Checklist finale avant livraison

Avant de livrer la refonte, teste chaque point :

### Mobile (Android — priorité absolue)
- [ ] Connexion / inscription fluide sur mobile
- [ ] Sidebar s'ouvre et se ferme correctement
- [ ] Dashboard lisible sans scroll horizontal
- [ ] Cards de cours affichées en 2 colonnes
- [ ] CourseReader — texte lisible à 16px sans zoom
- [ ] Tableaux avec scroll horizontal activé
- [ ] Boutons suffisamment grands (min 44px height)
- [ ] Quiz — options sélectionnables facilement au doigt
- [ ] Exercices interactifs — étapes défilent correctement
- [ ] Forum — modal "Nouvelle Discussion" utilisable

### Dark Mode
- [ ] Aucun fond blanc parasite dans l'app
- [ ] Tous les textes lisibles (ratio contraste > 4.5:1)
- [ ] Encadrés colorés en version sombre (pas les couleurs claires)
- [ ] Images sur fond blanc dans un conteneur sombre

### Performance
- [ ] Pas de re-render inutile dans le CourseReader au scroll
- [ ] MathJax ne bloque pas le rendu de la page
- [ ] Images chargées en lazy loading
- [ ] Barre de progression fluide au scroll (pas de lag)

### Cohérence visuelle
- [ ] Même style de boutons dans toute l'app
- [ ] Même radius de coins partout (rounded-xl pour cards, rounded-lg pour boutons)
- [ ] Palette de couleurs uniquement depuis `COLORS` — pas de valeurs en dur
- [ ] Poppins utilisé partout — aucune autre police

---

*EDUCTOME — Apprendre sans limites*  
*Instructions UI/UX v1.0 · Juin 2026 · Gombaleu Marius*  
*À envoyer à Antigravity AVANT toute insertion de contenu*

---

## SECTION 13 — Authentification — Sécurité du Compte (MISE À JOUR)

### 13.1 Flux complet officiel

**INSCRIPTION :**
```
① Numéro de téléphone (+225 XX XX XX XX XX)
② Créer un mot de passe (minimum 6 caractères)
③ Confirmer le mot de passe
④ SMS OTP 6 chiffres → vérifier que le numéro appartient à l'élève
⑤ Compléter le profil (prénom, niveau, matière, objectif)
```

**CONNEXION NORMALE :**
```
① Numéro de téléphone
② Mot de passe
→ Accès direct au Dashboard — pas d'OTP
```

**RÉCUPÉRATION DE COMPTE :**
```
① Clic "J'ai oublié mon mot de passe ?"
② Saisie du numéro de téléphone
③ SMS OTP envoyé → vérification
④ Saisie du nouveau mot de passe
⑤ Confirmation → reconnexion automatique
```

### 13.2 Pourquoi ce flux

- Le numéro seul est insuffisant — en CI les numéros circulent facilement
- L'OTP à chaque connexion est trop lourd — connexion instable MTN/Orange + coût SMS
- Numéro + mot de passe = standard universel (WhatsApp, Facebook, Duolingo)
- L'OTP reste utile uniquement pour la vérification à l'inscription et la récupération

### 13.3 UI de la page de connexion (mise à jour)

```
┌─────────────────────────────────────────┐
│  Logo EDUCTOME                          │
│                                         │
│  Bon retour, Champion(ne) ! 👋          │
│  Entre tes identifiants pour continuer. │
│                                         │
│  [+225] [Numéro de téléphone      ]     │
│  [🔒 Mot de passe                  ]    │
│  [👁 afficher/masquer]                  │
│                                         │
│  [ Se connecter ]  ← bouton magenta     │
│                                         │
│  Mot de passe oublié ?                  │
│  Pas encore de compte ? S'inscrire →   │
└─────────────────────────────────────────┘
```

### 13.4 UI de la page d'inscription (mise à jour)

```
┌─────────────────────────────────────────┐
│  Crée ton compte EDUCTOME               │
│  C'est gratuit et ça prend 1 minute.   │
│                                         │
│  ÉTAPE 1 / 3 — Tes identifiants        │
│  [+225] [Numéro de téléphone      ]     │
│  [🔒 Créer un mot de passe         ]    │
│  [🔒 Confirmer le mot de passe     ]    │
│  → Min. 6 caractères                    │
│                                         │
│  [ Recevoir mon code SMS ]              │
│                                         │
│  ÉTAPE 2 / 3 — Vérifie ton numéro      │
│  Code envoyé au +225 XX XX XX XX XX     │
│  [  ] [  ] [  ] [  ] [  ] [  ]         │
│  ← 6 cases séparées, 1 chiffre chacune │
│                                         │
│  ÉTAPE 3 / 3 — Ton profil              │
│  Prénom / Pseudo                        │
│  Niveau : [Terminale D ▼]              │
│  Matière préférée : [Maths ▼]          │
│  Objectif : [Mention Bien ▼]           │
│                                         │
│  [ Rejoindre EDUCTOME 🚀 ]             │
└─────────────────────────────────────────┘
```

---

## SECTION 14 — Light Mode et Dark Mode (MISE À JOUR)

### 14.1 Règle générale

- **Light mode par défaut** — l'élève arrive sur light mode à la première ouverture
- **Bascule manuelle** disponible dans les paramètres (icône ☀️/🌙 aussi dans le header)
- La préférence est sauvegardée dans le profil Firebase de l'élève

### 14.2 Palette Light Mode

```typescript
// src/constants/colors.ts — AJOUT LIGHT MODE

export const LIGHT = {
  // Fonds
  bg:           '#F8F9FA',  // Fond principal
  bgCard:       '#FFFFFF',  // Fond des cards
  bgSidebar:    '#FFFFFF',  // Fond sidebar
  bgHeader:     '#FFFFFF',  // Fond header
  border:       '#E1E4E8',  // Bordures

  // Textes
  textPrimary:  '#1A1A2E',  // Texte principal
  textSecondary:'#6B7280',  // Texte secondaire
  textMuted:    '#9CA3AF',  // Texte discret

  // Encadrés light mode
  tipBg:        '#F0FFF4',  // Fond conseil (vert très clair)
  warnBg:       '#FFF5F5',  // Fond piège (rouge très clair)
  ruleBg:       '#EBF8FF',  // Fond règle d'or (bleu très clair)
  recapBg:      '#FFFBEB',  // Fond à retenir (orange très clair)
  analogyBg:    '#FEFCE8',  // Fond analogie (jaune très clair)

  // Dialogue light mode
  pfBg:         '#FEF9E7',  // Fond Petit Frère (orange pâle)
  gfBg:         '#EBF5FB',  // Fond Grand Frère (bleu pâle)
} as const;

export const DARK = {
  // Fonds
  bg:           '#0D1117',  // Fond principal
  bgCard:       '#161B22',  // Fond des cards
  bgSidebar:    '#0D1117',  // Fond sidebar
  bgHeader:     '#0D1117',  // Fond header
  border:       '#30363D',  // Bordures

  // Textes
  textPrimary:  '#E6EDF3',  // Texte principal
  textSecondary:'#8B949E',  // Texte secondaire
  textMuted:    '#6E7681',  // Texte discret

  // Encadrés dark mode
  tipBg:        '#0F2A1A',  // Fond conseil (vert très sombre)
  warnBg:       '#2A0F0F',  // Fond piège (rouge très sombre)
  ruleBg:       '#0A1628',  // Fond règle d'or (bleu très sombre)
  recapBg:      '#2A1A0A',  // Fond à retenir (orange très sombre)
  analogyBg:    '#1A150A',  // Fond analogie (beige très sombre)

  // Dialogue dark mode
  pfBg:         '#2A1F0A',  // Fond Petit Frère (orange sombre)
  gfBg:         '#0A1A2A',  // Fond Grand Frère (bleu sombre)
} as const;
```

### 14.3 Implémentation avec Tailwind

```typescript
// Utiliser le système de thème Tailwind dark:
// Ajouter class="dark" sur le <html> quand dark mode activé

// Exemples d'usage dans les composants :
<div className="bg-white dark:bg-[#161B22]">
<p className="text-[#1A1A2E] dark:text-[#E6EDF3]">
<div className="border-[#E1E4E8] dark:border-[#30363D]">

// Hook pour gérer le thème
// src/hooks/useTheme.ts
export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  const toggle = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    // Sauvegarder dans Firebase user profile
  };

  return { isDark, toggle };
}
```

### 14.4 Composants spécifiques light mode

**Sidebar light mode :**
- Fond : blanc `#FFFFFF`
- Bordure droite : `#E1E4E8`
- Item actif : fond `#EBF5FB` + bordure left magenta + texte `#1A3557` gras
- Item inactif : texte `#6B7280` → hover : texte `#1A1A2E` + fond `#F8F9FA`

**Cards de cours light mode :**
- Fond : blanc `#FFFFFF`
- Ombre portée : `shadow-md` (plus visible qu'en dark)
- Bordure : `#E1E4E8`
- Barre de progression : fond `#E1E4E8`

**Hero Banner light mode :**
- Même dégradé `#1A3557` → `#1976D2` — identique en light et dark
- Le banner reste sombre dans les deux modes (c'est volontaire — contraste fort)

**CourseReader light mode :**
- Fond page : `#F8F9FA`
- Fond zone contenu : `#FFFFFF`
- Texte corps : `#1A1A2E`
- Encadrés : versions claires (tipBg, warnBg, etc.)

### 14.5 Bascule Light/Dark — UI

**Dans le header (icône toujours visible) :**
```
☀️  → clic → 🌙  (bascule instantanée)
```

**Dans les paramètres (page dédiée) :**
```
Apparence
○ Light (clair)     ← sélectionné par défaut
○ Dark (sombre)
○ Automatique (système)   ← option bonus si possible
```

### 14.6 Règles absolues Light/Dark

- ✅ Chaque composant doit avoir sa version light ET dark
- ✅ Tester les deux modes sur mobile avant de livrer
- ✅ Jamais de texte blanc sur fond blanc (light mode)
- ✅ Jamais de texte noir sur fond noir (dark mode)
- ✅ Les couleurs EDUCTOME (magenta, marine, bleu) restent identiques dans les deux modes
- ❌ Jamais utiliser des valeurs de couleur en dur dans les composants — toujours via les constantes LIGHT/DARK

---

## CHECKLIST MISE À JOUR (version finale)

### Authentification
- [ ] Page connexion : numéro + mot de passe (plus de mot de passe seul)
- [ ] Page inscription : 3 étapes (identifiants → OTP → profil)
- [ ] Page récupération : numéro → OTP → nouveau mot de passe
- [ ] Champ mot de passe avec toggle afficher/masquer
- [ ] Validation : message d'erreur si mot de passe < 6 caractères
- [ ] OTP : 6 cases séparées, focus automatique case suivante

### Light / Dark Mode
- [ ] Light mode activé par défaut à la première ouverture
- [ ] Icône ☀️/🌙 visible dans le header
- [ ] Bascule instantanée sans rechargement de page
- [ ] Préférence sauvegardée dans Firebase
- [ ] Tous les composants testés en light ET dark
- [ ] Sidebar, header, cards, blocs cours — tous adaptés

---

*EDUCTOME — Instructions UI/UX v1.1 · Mise à jour Juin 2026*
