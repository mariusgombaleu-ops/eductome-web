# EDUCTOME — Blueprint Technique Web App
> Guide de référence officiel pour Antigravity  
> Version 1.0 · Juin 2026 · Gombaleu Marius  
> ⚠️ Toute déviation doit être validée par Marius avant implémentation.

---

## SECTION 1 — Stack Technique

### 1.1 Technologies officielles

| Couche | Technologie | Version | Rôle |
|--------|-------------|---------|------|
| Frontend | React + Vite | React 18 / Vite 5 | Interface utilisateur |
| Typage | TypeScript | 5.x | Typage strict — structure des données |
| Styling | Tailwind CSS | 3.x | Design system — dark mode natif |
| Routing | React Router DOM | 6.x | Navigation entre les pages |
| Formules | MathJax | 3.x | Rendu LaTeX dynamique |
| Icônes | Lucide React | 0.383.0 | Icônes cohérentes dans toute l'app |
| Backend / Auth | Firebase Auth | 10.x | Connexion par numéro de téléphone |
| Base de données | Firestore | 10.x | Données temps réel — NoSQL |
| Stockage | Firebase Storage | 10.x | Figures, certificats PDF |
| Paiement | CinetPay API | v2 | MTN + Orange Money + Wave + Carte |
| Hosting | Vercel | — | Déploiement automatique depuis GitHub |
| App mobile | PWA | — | Installable Android — phase 1 |

### 1.2 Règles absolues sur la stack

✅ Ne jamais changer de technologie sans validation de Marius.  
✅ Toute nouvelle dépendance npm doit être justifiée et documentée.  
❌ Pas de bibliothèques UI externes (MUI, Ant Design, Chakra) — Tailwind uniquement.  
❌ Pas de state management externe (Redux, Zustand) — React Context + useState pour le MVP.

---

## SECTION 2 — Architecture des Données TypeScript

### 2.1 Les 12 types de blocs — BlockType

```typescript
// src/types/course.ts — TYPES OFFICIELS EDUCTOME

export type BlockType =
  | 'text'          // Paragraphe classique du cours
  | 'math'          // Formule LaTeX rendue par MathJax
  | 'dialogue'      // Échange Petit Frère ↔ Grand Frère
  | 'tip'           // Conseil du Grand Frère — encadré vert
  | 'warning'       // Piège à éviter — encadré rouge
  | 'rule'          // Règle d'Or / théorème — encadré bleu
  | 'recap'         // À Retenir — encadré orange
  | 'analogy'       // Analogie ivoirienne développée
  | 'table'         // Tableau de cours ou formulaire
  | 'figure'        // Schéma, courbe ou illustration PNG
  | 'exercise'      // Exercice interactif BASE/MOYEN/BAC
  | 'quiz';         // Question de validation de chapitre
```

> ⚠️ Ces 12 types couvrent 100% du contenu de tous les tomes EDUCTOME.  
> Ne jamais créer un nouveau type sans validation de Marius.

---

### 2.2 Interfaces complètes des blocs

```typescript
// Bloc générique
export interface Block {
  type: BlockType;
  id: string;                    // Unique dans le chapitre
}

// Bloc texte
export interface TextBlock extends Block {
  type: 'text';
  contenu: string;
}

// Bloc formule mathématique
export interface MathBlock extends Block {
  type: 'math';
  formule: string;               // LaTeX pur — ex: "\\lim_{x \\to +\\infty} f(x) = L"
  explication?: string;          // Explication en français
}

// Bloc dialogue Petit Frère ↔ Grand Frère
export interface DialogueBlock extends Block {
  type: 'dialogue';
  pf: string;                    // Question du Petit Frère
  gf: string;                    // Réponse du Grand Frère
}

// Encadrés colorés (tip / warning / rule / recap)
export interface EncadreBlock extends Block {
  type: 'tip' | 'warning' | 'rule' | 'recap';
  titre: string;
  contenu: string[];             // Tableau de lignes
}

// Analogie ivoirienne
export interface AnalogyBlock extends Block {
  type: 'analogy';
  titre: string;                 // Ex: "Le Gbaka d'Adjamé"
  contenu: string;               // 4 à 6 phrases développées
  conceptMath: string;           // Traduction vers le concept mathématique
}

// Tableau de cours
export interface TableBlock extends Block {
  type: 'table';
  titre?: string;
  headers: string[];
  rows: string[][];
}

// Figure / schéma
export interface FigureBlock extends Block {
  type: 'figure';
  src: string;                   // Chemin vers le PNG
  legende: string;
  alt: string;
}

// Exercice interactif
export interface ExerciceBlock extends Block {
  type: 'exercise';
  niveau: 'BASE' | 'MOYEN' | 'BAC';
  enonce: string;
  etapes: string[];              // Correction progressive étape par étape
  reponse: string;               // Résultat final
  conseil?: string;              // Astuce Grand Frère
  piege?: string;                // Piège à éviter
}

// Question de quiz
export interface QuizBlock extends Block {
  type: 'quiz';
  question: string;              // Texte avec LaTeX si besoin
  options: string[];             // 4 options A/B/C/D
  bonneReponse: number;          // Index 0-3
  explication: string;           // Affiché si l'élève rate la question
}
```

---

### 2.3 Interface Chapitre

```typescript
export interface Chapitre {
  id: string;                    // Ex: "t1-chap2"
  titre: string;                 // Ex: "Comprendre les Limites comme un Pro"
  duree: number;                 // Durée estimée en minutes
  niveau: 'BASE' | 'MOYEN' | 'BAC';
  xpGain: number;                // XP crédités après validation du quiz
  objectifs: string[];           // 3 objectifs avec verbe d'action
  sections: Section[];
  quiz: QuizBlock[];             // 5 questions minimum
  gratuit: boolean;              // true = Chapitre 1 uniquement
}

export interface Section {
  id: string;
  titre?: string;
  blocs: Block[];                // Tous les types de blocs mélangés
}
```

---

### 2.4 Interface Tome (Course)

```typescript
export interface Tome {
  id: string;                    // Ex: "les-limites-t1"
  titre: string;                 // Ex: "Les Limites (Tome 1)"
  collection: Collection;
  matiere: string;               // Ex: "Mathématiques"
  niveau: string;                // Ex: "Terminale D"
  description: string;
  objectifs: string[];           // 5 objectifs du tome
  chapitres: Chapitre[];
  prix: {
    chapitre: number;            // Prix par chapitre en FCFA (300)
    tome: number;                // Prix tome complet en FCFA (1500)
  };
  couleurCollection: string;     // HEX selon la collection
  couverture: string;            // Chemin vers l'image de couverture
}

export type Collection =
  | 'les-cles-maths'
  | 'les-cles-sciences'
  | 'les-cles-lettres'
  | 'les-derniers-codes'
  | 'la-voie'
  | 'les-racines'
  | '3e-facile';
```

---

### 2.5 Couleurs officielles par collection

| Collection | Couleur | HEX |
|------------|---------|-----|
| Les Clés Maths | Bleu Marine | `#1A3557` |
| Les Clés Sciences | Violet | `#6A1B9A` |
| Les Clés Lettres | Bordeaux | `#880E4F` |
| Les Derniers Codes | Rouge | `#C62828` |
| La Voie | Vert | `#2E7D32` |
| Les Racines | Orange | `#E67E22` |
| 3e Facile | Bleu Acier | `#37474F` |

---

## SECTION 3 — Schéma Firebase Firestore

### 3.1 Collections principales

| Collection | Document ID | Champs principaux | Accès |
|------------|-------------|-------------------|-------|
| `users` | userId (Firebase UID) | displayName, phone, xp, niveau, coursAchetes[], badges[], serie, derniereConnexion | Auth requis |
| `courses` | courseId | titre, collection, matiere, niveau, prix, chapitres[], couverture | Public (lecture) |
| `progress` | userId_chapterId | sectionsLues[], scoreQuiz, tentatives, valide, dateValidation | Propriétaire uniquement |
| `purchases` | purchaseId | userId, courseId, type, montant, statut, datePaiement | Propriétaire uniquement |
| `forum_posts` | postId | titre, contenu, auteur, categorie, likes, dateCreation | Public (lecture) / Auth (écriture) |
| `forum_replies` | replyId | contenu, auteur, postId, likes, isSolution, dateCreation | Public (lecture) / Auth (écriture) |
| `notifications` | userId_notifId | type, message, lu, dateCreation | Propriétaire uniquement |

---

### 3.2 Règles de sécurité Firestore

```javascript
// firestore.rules — RÈGLES OFFICIELLES EDUCTOME

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // USERS — lecture/écriture uniquement par le propriétaire
    match /users/{userId} {
      allow read, write: if request.auth != null
                         && request.auth.uid == userId;
    }

    // COURSES — lecture publique, écriture admin uniquement
    match /courses/{courseId} {
      allow read: if true;
      allow write: if request.auth != null
                   && request.auth.token.admin == true;
    }

    // PROGRESS — propriétaire uniquement
    match /progress/{docId} {
      allow read, write: if request.auth != null
                         && docId.split('_')[0] == request.auth.uid;
    }

    // PURCHASES — écriture via Cloud Function uniquement
    match /purchases/{purchaseId} {
      allow read: if request.auth != null
                  && resource.data.userId == request.auth.uid;
      allow write: if false;
    }

    // FORUM — lecture publique, écriture authentifiée
    match /forum_posts/{postId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null
                            && resource.data.auteur == request.auth.uid;
    }

    match /forum_replies/{replyId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null
                            && resource.data.auteur == request.auth.uid;
    }
  }
}
```

---

## SECTION 4 — Authentification par Téléphone

### 4.1 Flux d'inscription / connexion

```
① L'élève entre son numéro CI (+225 XX XX XX XX XX)
② Firebase envoie un SMS OTP à 6 chiffres
③ L'élève entre le code → Firebase valide et crée le compte
④ Première connexion → écran profil (prénom, niveau, matière préférée)
⑤ Connexion suivante → numéro + OTP → Dashboard directement
→ Pas d'email. Pas de mot de passe. Juste le téléphone.
```

### 4.2 Hook useAuth

```typescript
// src/hooks/useAuth.ts

import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return { user, loading };
}
```

---

## SECTION 5 — Système de Paiement CinetPay

### 5.1 Tunnel de paiement

```
① Frontend → initie transaction via API CinetPay
② CinetPay → retourne lien de paiement sécurisé
③ Élève redirigé → page CinetPay (MTN / Orange / Wave / Carte)
④ Après paiement → CinetPay appelle webhook EDUCTOME (Cloud Function)
⑤ Cloud Function → vérifie paiement → écrit dans /purchases
⑥ Cloud Function → met à jour /users/{userId}/coursAchetes[]
⑦ Frontend → détecte mise à jour Firestore → débloque contenu en temps réel
→ Déblocage automatique en moins de 5 secondes. Zéro intervention manuelle.
```

### 5.2 Structure d'un achat

```typescript
// Collection : purchases/{purchaseId}
interface Purchase {
  userId: string;           // UID Firebase de l'élève
  courseId: string;         // ID du tome ou du chapitre
  type: 'chapitre' | 'tome';
  montant: number;          // 300 ou 1500 (en FCFA)
  statut: 'pending' | 'success' | 'failed';
  methodePaiement: 'mtn' | 'orange' | 'wave' | 'carte';
  transactionId: string;    // ID CinetPay pour référence
  datePaiement: Timestamp;
}
```

### 5.3 Hook useChapterAccess

```typescript
// src/hooks/useAccess.ts

export function useChapterAccess(courseId: string, chapId: string) {
  const { user } = useAuth();
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    if (!user) return;
    const userDoc = doc(db, 'users', user.uid);
    return onSnapshot(userDoc, (snap) => {
      const achetes: string[] = snap.data()?.coursAchetes || [];
      const tomeAchete  = achetes.includes(courseId);
      const chapAchete  = achetes.includes(`${courseId}-${chapId}`);
      setHasAccess(tomeAchete || chapAchete);
    });
  }, [user, courseId, chapId]);

  return hasAccess;
}
```

---

## SECTION 6 — Composants Clés

### 6.1 Architecture des composants

| Composant | Fichier | Rôle |
|-----------|---------|------|
| CourseReader | CourseReader.tsx | Lecteur principal d'un chapitre |
| BlockRenderer | BlockRenderer.tsx | Affiche un bloc selon son type |
| QuizSection | QuizSection.tsx | Quiz de fin de chapitre — mode suspense |
| ExerciceInteractif | ExerciceInteractif.tsx | Correction progressive étape par étape |
| ProgressBar | ProgressBar.tsx | Barre fine en haut — avance au scroll |
| ChapterLock | ChapterLock.tsx | Écran verrouillé avec CTA achat |
| XPNotification | XPNotification.tsx | Toast d'animation XP gagné |
| PaymentModal | PaymentModal.tsx | Modal choix moyen de paiement |

### 6.2 BlockRenderer — Logique complète

```typescript
// src/components/BlockRenderer.tsx

import { Block } from '../types/course';

export function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case 'text':     return <TextBlock block={block} />;
    case 'math':     return <MathBlock block={block} />;
    case 'dialogue': return <DialogueBlock block={block} />;
    case 'tip':      return <EncadreBlock block={block} color="green"  emoji="💡" />;
    case 'warning':  return <EncadreBlock block={block} color="red"    emoji="⚠️" />;
    case 'rule':     return <EncadreBlock block={block} color="blue"   emoji="📌" />;
    case 'recap':    return <EncadreBlock block={block} color="orange" emoji="🚀" />;
    case 'analogy':  return <AnalogyBlock block={block} />;
    case 'table':    return <TableBlock block={block} />;
    case 'figure':   return <FigureBlock block={block} />;
    case 'exercise': return <ExerciceInteractif block={block} />;
    case 'quiz':     return null; // Géré globalement par QuizSection
    default:         return null;
  }
}
```

### 6.3 Rendu visuel des blocs

| Type | Fond | Bordure gauche | Emoji | Couleur titre |
|------|------|----------------|-------|---------------|
| `tip` | Vert pâle `#D5F5E3` | Vert `#1E8449` | 💡 | `#1E8449` |
| `warning` | Rouge pâle `#FDEDEC` | Rouge `#C0392B` | ⚠️ | `#C0392B` |
| `rule` | Bleu pâle `#D6E4F0` | Bleu `#1F5C99` | 📌 | `#1F5C99` |
| `recap` | Orange pâle `#FDEBD0` | Orange `#E67E22` | 🚀 | `#E67E22` |
| `dialogue` PF | Orange léger `#FEF9E7` | Orange | 🗣️ | Italique |
| `dialogue` GF | Bleu pâle `#EBF5FB` | Bleu | 🗣️ | Gras italique |
| `analogy` | Beige `#FDF6EC` | Orange `#E67E22` | 🌍 | `#E67E22` |

---

## SECTION 7 — Gamification

### 7.1 Constantes XP

```typescript
// src/constants/xp.ts — NE JAMAIS METTRE DE VALEURS EN DUR

export const XP = {
  SECTION:          10,   // Terminer une section de cours
  QUIZ_FIRST:       50,   // Quiz validé à la 1ère tentative
  QUIZ_SECOND:      25,   // Quiz validé à la 2ème tentative
  EXERCISE:         15,   // Exercice interactif réussi
  SERIE_3_JOURS:    30,   // Série d'étude 3 jours consécutifs
  SERIE_7_JOURS:   100,   // Série d'étude 7 jours consécutifs
  TOME_COMPLET:    200,   // Tome entier terminé et validé
  FORUM_SOLUTION:   20,   // Réponse marquée Solution ✅
  FORUM_10_LIKES:   15,   // Cumul de 10 likes sur une réponse
} as const;
```

### 7.2 Niveaux et titres

```typescript
// src/constants/niveaux.ts

export const NIVEAUX = [
  { niveau: 1, xpMin: 0,    titre: "Élève",           emoji: "📖" },
  { niveau: 2, xpMin: 200,  titre: "Bosseur",          emoji: "💪" },
  { niveau: 3, xpMin: 500,  titre: "Caïman en herbe",  emoji: "🐊" },
  { niveau: 4, xpMin: 1000, titre: "Le Caïman",        emoji: "⭐" },
  { niveau: 5, xpMin: 2000, titre: "Grand Frère",      emoji: "🏆" },
  { niveau: 6, xpMin: 5000, titre: "Légende du Cacao", emoji: "👑" },
] as const;

export function calculateNiveau(xp: number): number {
  for (let i = NIVEAUX.length - 1; i >= 0; i--) {
    if (xp >= NIVEAUX[i].xpMin) return NIVEAUX[i].niveau;
  }
  return 1;
}
```

### 7.3 Règle de la série d'étude

- La série compte chaque jour où l'élève complète au moins une section.
- **1 pause par semaine autorisée** — la série se met en pause, pas en échec.
- **2 jours d'absence consécutifs** → série réinitialisée à zéro.
- Message de pause : *"Tu as manqué hier, vieux père. Reprends aujourd'hui et ta série repart."*

---

## SECTION 8 — Structure des Fichiers

### 8.1 Organisation du projet

```
src/
  components/
    blocks/           TextBlock, MathBlock, DialogueBlock, EncadreBlock...
    course/           CourseReader, QuizSection, ExerciceInteractif, ProgressBar
    forum/            ForumPost, ForumReply, NewPostModal
    ui/               Button, Card, Modal, Toast, XPNotification, ChapterLock
  pages/
    Dashboard.tsx
    MesCours.tsx
    CourseDetail.tsx
    Forum.tsx
    Profil.tsx
    Boutique.tsx
    RessourcesGratuites.tsx
  data/
    t1-limites/
      index.ts        Métadonnées du tome
      chap1.ts        Message du Grand Frère (GRATUIT)
      chap2.ts
      chap3.ts
      chap4.ts
      chap5.ts
      chap6.ts
      chap7.ts
    t2-derivees/
      ...             Même structure
  hooks/
    useAuth.ts
    useAccess.ts
    useProgress.ts
    useXP.ts
  types/
    course.ts         BlockType, Block, Chapitre, Tome, Collection
    user.ts           User, Niveau, Badge
    forum.ts          ForumPost, ForumReply
    payment.ts        Purchase, PaymentStatus
  utils/
    formatXP.ts
    calculateNiveau.ts
    formatPrice.ts    // Toujours en FCFA — jamais de conversion EUR
  firebase/
    config.ts
    auth.ts
    firestore.ts
  constants/
    xp.ts             XP values
    niveaux.ts        Niveaux et titres
    colors.ts         Palette EDUCTOME officielle
    collections.ts    IDs et métadonnées des collections
```

### 8.2 Conventions de nommage

| Élément | Convention | Exemple |
|---------|------------|---------|
| Composants React | PascalCase | `CourseReader.tsx` |
| Hooks | camelCase avec `use` | `useAuth.ts` |
| Types / Interfaces | PascalCase | `Tome`, `QuizBlock` |
| Fichiers de données | kebab-case | `t1-limites/chap2.ts` |
| Constantes | UPPER_SNAKE_CASE | `XP.QUIZ_FIRST` |
| IDs Firestore | kebab-case | `les-limites-t1` |
| IDs chapitres | kebab-case | `t1-chap2` |

---

## SECTION 9 — Règles Absolues pour Antigravity

### ❌ Ne JAMAIS faire

- Modifier les types `BlockType` sans validation de Marius
- Inventer ou modifier le contenu pédagogique des tomes
- Modifier le ton Grand Frère — `Champion(ne)`, expressions ivoiriennes
- Créer des achats / transactions sans passer par Cloud Functions
- Stocker des données sensibles (numéro de téléphone) en localStorage
- Utiliser des images de formules — toujours MathJax / LaTeX
- Changer les couleurs EDUCTOME sans validation
- Déployer en production sans test sur mobile Android réel
- Mettre des valeurs XP en dur — toujours utiliser les constantes `XP.*`
- Fusionner plusieurs chapitres dans un seul fichier `.ts`

### ✅ Toujours faire

- Valider chaque chapitre intégré sur mobile avant de passer au suivant
- Tester le rendu MathJax après chaque intégration de contenu
- Respecter le dark mode sur tous les nouveaux composants
- Commenter les Cloud Functions avec leur rôle exact
- Un fichier `.ts` par chapitre — `chap1.ts`, `chap2.ts`, etc.
- Tester le parcours d'achat complet après toute modification du paiement
- Afficher les prix en FCFA uniquement — jamais de conversion EUR

---

*EDUCTOME — Apprendre sans limites*  
*Blueprint Technique v1.0 · Juin 2026 · Gombaleu Marius*
