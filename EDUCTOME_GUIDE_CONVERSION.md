# EDUCTOME — Guide de Conversion des Tomes
> Document destiné à Gemini pour la conversion PDF/Word → TypeScript  
> Version 1.0 · Juin 2026 · Gombaleu Marius  
> ⚠️ Ce guide est un contrat. Respecte chaque règle sans exception.

---

## AVANT DE COMMENCER — Lis ceci entièrement

Tu vas convertir les manuels pédagogiques EDUCTOME en fichiers TypeScript structurés pour une web app e-learning. Ces manuels sont rédigés par Gombaleu Marius, fondateur d'EDUCTOME, pour des lycéens ivoiriens préparant le BAC.

**Ta mission :** extraire le contenu du PDF/Word source et le structurer en blocs TypeScript selon les types définis dans le Blueprint Technique. Tu n'es pas rédacteur — tu es convertisseur structuré.

**Trois règles absolues avant tout :**

1. **Tu ne modifies jamais le fond** — le contenu pédagogique, les formules, les exercices viennent du source. Zéro invention.
2. **Tu ne "nettoies" jamais le style** — les expressions ivoiriennes, le ton Grand Frère, les "Champion(ne)", tout ça reste intact.
3. **Tu respectes les types TypeScript définis** — aucun nouveau type, aucune structure inventée.

---

## SECTION 1 — Contexte EDUCTOME

### 1.1 La philosophie (non-négociable)

EDUCTOME repose sur un principe fondateur : **comprendre avant de calculer, le sens avant la formule.**

Chaque tome explique d'abord le sens d'une notion avant de donner la formule. Tu dois respecter cet ordre dans la conversion — ne jamais réorganiser le contenu pour "mettre les formules en premier".

### 1.2 Le ton Grand Frère

Le contenu est rédigé comme si un grand frère bienveillant expliquait à l'élève. Ce ton a des marqueurs spécifiques que tu dois préserver **mot pour mot** :

**Adresses obligatoires :**
- `Champion(ne)` — forme inclusive, jamais "Champion" seul
- `Petit Frère` — l'élève dans les dialogues
- `Grand Frère` — le mentor dans les dialogues
- `vieux père` — expression affectueuse entre pairs dans les dialogues

**Expressions ivoiriennes validées — ne jamais supprimer :**

| Expression | Contexte |
|------------|---------|
| *"Faut pas gnan"* | Encouragement avant exercice difficile |
| *"On va gâter le coin"* | Conclusion motivante |
| *"Où bien ?"* | Fin de raisonnement |
| *"C'est quoi encore cette affaire ?"* | Introduction d'une notion surprenante |
| *"Limpide comme l'eau de roche"* | Après une explication claire |
| *"le Cacao"* | Référence au Lycée Classique d'Abidjan |

**Références culturelles ivoiriennes — ne jamais supprimer :**
- Adjamé, Abidjan, Yopougon, Treichville, San-Pédro
- Gbaka, garba, attiéké
- MTN, Orange CI, Wave
- LONACI, RTI
- Lycée Classique d'Abidjan ("le Cacao")

### 1.3 Vocabulaire INTERDIT — Règle Backbone #2

Ces mots sont **strictement interdits** dans tous les contenus EDUCTOME. Si tu les trouves dans le source, tu les remplaces automatiquement :

| Mot interdit | Remplacement obligatoire |
|-------------|--------------------------|
| mortelle(s) | à éviter |
| mortel(s) | à éviter |
| fatale(s) | incontournable à éviter |
| fatal(s) | incontournable à éviter |
| tuer | éliminer / faire perdre des points |
| chirurgical(aux) | ciblé(s) / précis |
| "pièges mortels" | "pièges à éviter" |
| "erreur fatale" | "erreur incontournable à éviter" |

---

## SECTION 2 — Les Types de Blocs TypeScript

Voici les **12 types de blocs officiels**. Tout le contenu du tome doit être classé dans l'un de ces types. Aucun autre type n'est autorisé.

### 2.1 Correspondances PDF → TypeScript

| Ce que tu vois dans le PDF | Type de bloc TypeScript |
|---------------------------|------------------------|
| Paragraphe de cours normal | `text` |
| Formule mathématique (LaTeX, équation) | `math` |
| Échange question/réponse entre élève et mentor | `dialogue` |
| Encadré vert avec conseil / astuce 💡 | `tip` |
| Encadré rouge avec piège / erreur ⚠️ | `warning` |
| Encadré bleu avec formule clé / théorème 📌 | `rule` |
| Encadré orange avec synthèse / points clés 🚀 | `recap` |
| Analogie avec référence ivoirienne | `analogy` |
| Tableau de formules / propriétés / vocabulaire | `table` |
| Schéma, courbe, figure (indique juste le chemin) | `figure` |
| Exercice avec énoncé et correction | `exercise` |
| Question de quiz (fin de chapitre) | `quiz` |

### 2.2 Interfaces TypeScript à utiliser

```typescript
// Ces interfaces sont définies dans src/types/course.ts
// NE PAS les redéfinir — juste les utiliser

export type BlockType =
  | 'text' | 'math' | 'dialogue' | 'tip' | 'warning'
  | 'rule' | 'recap' | 'analogy' | 'table' | 'figure'
  | 'exercise' | 'quiz';

export interface TextBlock {
  type: 'text';
  id: string;
  contenu: string;
}

export interface MathBlock {
  type: 'math';
  id: string;
  formule: string;        // LaTeX pur — ex: "\\lim_{x \\to +\\infty} f(x) = L"
  explication?: string;   // Explication en français si présente dans le source
}

export interface DialogueBlock {
  type: 'dialogue';
  id: string;
  pf: string;             // Ce que dit le Petit Frère (élève)
  gf: string;             // Ce que dit le Grand Frère (mentor)
}

export interface EncadreBlock {
  type: 'tip' | 'warning' | 'rule' | 'recap';
  id: string;
  titre: string;
  contenu: string[];      // Chaque ligne = un élément du tableau
}

export interface AnalogyBlock {
  type: 'analogy';
  id: string;
  titre: string;          // Ex: "Le Gbaka d'Adjamé"
  contenu: string;        // Le texte complet de l'analogie (4 à 6 phrases)
  conceptMath: string;    // La phrase de traduction vers le concept mathématique
}

export interface TableBlock {
  type: 'table';
  id: string;
  titre?: string;
  headers: string[];
  rows: string[][];
}

export interface FigureBlock {
  type: 'figure';
  id: string;
  src: string;            // Format: "/figures/t1/chap2-fig1.png"
  legende: string;
  alt: string;
}

export interface ExerciceBlock {
  type: 'exercise';
  id: string;
  niveau: 'BASE' | 'MOYEN' | 'BAC';
  enonce: string;
  etapes: string[];       // Correction progressive — une étape par élément
  reponse: string;        // Résultat final
  conseil?: string;       // Astuce Grand Frère si présente
  piege?: string;         // Piège à éviter si présent
}

export interface QuizBlock {
  type: 'quiz';
  id: string;
  question: string;       // Avec LaTeX si nécessaire
  options: string[];      // Exactement 4 options
  bonneReponse: number;   // Index 0, 1, 2 ou 3
  explication: string;    // Explication affichée si l'élève rate
}
```

---

## SECTION 3 — Structure d'un Fichier Chapitre

### 3.1 Format obligatoire

Chaque chapitre = **un fichier TypeScript séparé**.  
`chap1.ts` = Message du Grand Frère  
`chap2.ts` = Chapitre 1 (Les Bases Solides)  
`chap3.ts` = Chapitre 2, etc.

```typescript
// src/data/t1-limites/chap2.ts
// CHAPITRE 1 — LES BASES SOLIDES
// Tome 1 : Les Limites · Collection Les Clés Maths

import { Chapitre } from '../../types/course';

export const chapitre1: Chapitre = {
  id: 't1-chap2',
  titre: 'Les Bases Solides',
  duree: 25,                    // Durée estimée en minutes
  niveau: 'BASE',
  xpGain: 50,                   // XP crédités après validation
  gratuit: true,                // Chapitre 1 toujours gratuit
  objectifs: [
    'Maîtriser le vocabulaire des limites',
    'Reconnaître les 3 formes de limites',
    'Lire un tableau de valeurs correctement',
  ],
  sections: [
    {
      id: 's1',
      titre: 'Introduction',
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu: 'Champion(ne), avant de calculer quoi que ce soit...',
        },
        {
          type: 'analogy',
          id: 'b2',
          titre: "Le Gbaka d'Adjamé",
          contenu: 'Imagine le gbaka qui part d\'Adjamé vers Yopougon...',
          conceptMath: 'La limite, c\'est la destination — pas le trajet.',
        },
        // ... autres blocs
      ],
    },
  ],
  quiz: [
    {
      type: 'quiz',
      id: 'q1',
      question: 'Que signifie $\\lim_{x \\to +\\infty} f(x) = +\\infty$ ?',
      options: [
        'f(x) atteint l\'infini',
        'f(x) grandit sans limite',
        'f(x) est indéfinie',
        'f(x) vaut zéro',
      ],
      bonneReponse: 1,
      explication: 'f(x) grandit indéfiniment — elle n\'atteint jamais l\'infini.',
    },
    // 4 autres questions minimum
  ],
};
```

### 3.2 Fichier index.ts — Métadonnées du tome

```typescript
// src/data/t1-limites/index.ts

import { Tome } from '../../types/course';
import { chapitre0 } from './chap1';   // Message du Grand Frère
import { chapitre1 } from './chap2';
import { chapitre2 } from './chap3';
// ... autres chapitres

export const tomeLesLimites: Tome = {
  id: 'les-limites-t1',
  titre: 'Les Limites (Tome 1)',
  collection: 'les-cles-maths',
  matiere: 'Mathématiques',
  niveau: 'Terminale D',
  description: 'Comprends vraiment les limites avant de les calculer.',
  objectifs: [
    'Comprendre intuitivement ce qu\'est une limite',
    'Calculer les limites en l\'infini',
    'Lever les formes indéterminées',
    'Maîtriser les limites de référence',
    'Dominer les exercices BAC sur les limites',
  ],
  chapitres: [chapitre0, chapitre1, chapitre2 /* ... */],
  prix: {
    chapitre: 300,
    tome: 1500,
  },
  couleurCollection: '#1A3557',
  couverture: '/covers/t1-limites.png',
};
```

---

## SECTION 4 — Règles de Conversion du Contenu

### 4.1 Règle fondamentale — Source avant tout

**Tu extrais, tu ne réécris pas.**

- Le contenu vient du PDF/Word source — pas de ta base de connaissances
- Si une formule est dans le source → tu la retranscris exactement
- Si un exercice est dans le source → tu le retranscris exactement
- Si une analogie est dans le source → tu la retranscris mot pour mot
- **Jamais inventer un exercice, une formule, une valeur numérique**

### 4.2 Conversion des formules LaTeX

Les formules doivent être en LaTeX pur dans le champ `formule` des `MathBlock`.

| Dans le PDF | Dans le TypeScript |
|-------------|-------------------|
| `lim f(x) = L` quand x→+∞ | `"\\lim_{x \\to +\\infty} f(x) = L"` |
| `f'(x) = lim [f(x+h)-f(x)]/h` | `"f'(x) = \\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h}"` |
| Fraction a/b | `"\\frac{a}{b}"` |
| Racine carrée | `"\\sqrt{x}"` |
| Intégrale | `"\\int_{a}^{b} f(x)\\,dx"` |

**Règle des backslashes :** en TypeScript, chaque `\` LaTeX devient `\\`.  
`\lim` → `"\\lim"` | `\frac` → `"\\frac"` | `\infty` → `"\\infty"`

### 4.3 Enrichissement autorisé vs interdit

L'enrichissement est autorisé **uniquement pour l'adaptation au format web**  
— pas pour changer le fond pédagogique.

| Action | Autorisé | Interdit |
|--------|----------|---------|
| Reformater un paragraphe long en plusieurs `TextBlock` courts | ✅ | |
| Découper un gros encadré en plusieurs blocs distincts | ✅ | |
| Ajouter `Champion(ne),` en début de section si absent | ✅ | |
| Transformer une liste à puces en `contenu: string[]` | ✅ | |
| Inventer une analogie non présente dans le source | | ❌ |
| Modifier une formule mathématique | | ❌ |
| Changer les valeurs numériques d'un exercice | | ❌ |
| Supprimer des expressions ivoiriennes | | ❌ |
| Réorganiser l'ordre des chapitres | | ❌ |
| Ajouter des questions au quiz non présentes dans le source | | ❌ |

### 4.4 Conversion des dialogues

Dans le PDF, les dialogues sont souvent sous forme de texte narratif.  
Tu dois les identifier et les convertir en `DialogueBlock`.

**Dans le PDF :**
> Le Petit Frère demande : "Mais Grand Frère, pourquoi la limite n'existe pas toujours ?"
> Le Grand Frère répond : "Bonne question ! Imagine que tu essaies d'aller à deux endroits en même temps..."

**En TypeScript :**
```typescript
{
  type: 'dialogue',
  id: 'b5',
  pf: "Mais Grand Frère, pourquoi la limite n'existe pas toujours ?",
  gf: "Bonne question ! Imagine que tu essaies d'aller à deux endroits en même temps...",
}
```

### 4.5 Conversion des exercices

Les exercices dans le PDF ont trois niveaux. Tu dois identifier le niveau selon le marquage dans le source :

| Dans le PDF | Niveau TypeScript |
|-------------|------------------|
| "Exercice BASE", "Niveau BASE", "Échauffement" | `'BASE'` |
| "Exercice MOYEN", "Niveau MOYEN", "Entraînement" | `'MOYEN'` |
| "Exercice BAC", "Type BAC", "Combat" | `'BAC'` |

La correction est décomposée en étapes dans le tableau `etapes[]` — une étape courte par élément.

### 4.6 Conversion des figures

Pour chaque figure, schéma ou courbe dans le PDF :
- Ne pas intégrer l'image dans le TypeScript
- Créer un `FigureBlock` avec un chemin de référence
- Format du chemin : `/figures/t[N]/chap[N]-fig[N].png`

```typescript
{
  type: 'figure',
  id: 'fig1',
  src: '/figures/t1/chap2-fig1.png',
  legende: 'Cercle trigonométrique — angles remarquables',
  alt: 'Cercle de rayon 1 avec les 16 angles remarquables placés',
}
```

Marius générera les figures séparément. Tu te contentes de référencer leur emplacement futur.

---

## SECTION 5 — Ordre de Conversion des Tomes

### 5.1 Phase 1 — MVP (à faire en priorité)

| Ordre | Tome | ID | Fichiers à créer |
|-------|------|----|-----------------|
| 1 | Les Limites (Tome 1) | `les-limites-t1` | `chap1.ts` à `chap7.ts` + `index.ts` |
| 2 | Les Dérivées (Tome 2) | `les-derivees-t2` | `chap1.ts` à `chap7.ts` + `index.ts` |
| 3 | La Voie Tome 1 | `la-voie-t1` | Même structure |
| 4 | DC-M1 Limites | `dc-m1-limites` | Structure simplifiée (fascicule) |

### 5.2 Nommage des IDs — Règle absolue

| Tome | ID tome | ID chapitre |
|------|---------|-------------|
| Les Limites T1 | `les-limites-t1` | `t1-chap1`, `t1-chap2`... |
| Les Dérivées T2 | `les-derivees-t2` | `t2-chap1`, `t2-chap2`... |
| Primitives T3 | `primitives-t3` | `t3-chap1`... |
| Suites T4 | `suites-t4` | `t4-chap1`... |
| Ln & Exp T5 | `ln-exp-t5` | `t5-chap1`... |
| Trigo T6 | `trigo-t6` | `t6-chap1`... |
| Probabilités T7 | `probas-t7` | `t7-chap1`... |
| Statistiques T8 | `stats-t8` | `t8-chap1`... |
| Géométrie 3D T9 | `geo3d-t9` | `t9-chap1`... |
| Complexes T10 | `complexes-t10` | `t10-chap1`... |
| Éq. Diff T11 | `eq-diff-t11` | `t11-chap1`... |
| Révisions BAC T12 | `revisions-bac-t12` | `t12-chap1`... |

---

## SECTION 6 — Contrôle Qualité

### 6.1 Checklist avant de livrer un chapitre

Avant de livrer chaque fichier `.ts`, vérifie :

- [ ] Tous les `Champion(ne)` sont présents et inclusifs
- [ ] Aucun mot du vocabulaire interdit (mortelle, fatale, tuer, chirurgical)
- [ ] Toutes les formules LaTeX ont les `\\` doubles
- [ ] Chaque bloc a un `id` unique dans le chapitre
- [ ] Les exercices ont leur `niveau` correctement assigné
- [ ] Le quiz contient **au moins 5 questions**
- [ ] Aucune valeur numérique inventée — tout vient du source
- [ ] Les analogies ivoiriennes sont intactes mot pour mot
- [ ] Les dialogues sont bien séparés en `pf` et `gf`
- [ ] Le champ `gratuit` est `true` uniquement pour `chap1.ts`

### 6.2 Format de livraison

Livre les fichiers dans cet ordre, un par un :
1. `chap1.ts` (Message du Grand Frère)
2. `chap2.ts` (Chapitre 1)
3. `chap3.ts` (Chapitre 2)
4. ... jusqu'au dernier chapitre
5. `index.ts` (Métadonnées du tome — en dernier)

**Attends la validation de Marius après `chap1.ts` avant de continuer.**  
Ce premier fichier est le pilote — il valide le format pour tout le reste.

---

## SECTION 7 — Prompt Type à Envoyer à Gemini

Voici le prompt exact à utiliser pour chaque chapitre :

```
Tu es un convertisseur de contenu pédagogique pour EDUCTOME.

Voici le Guide de Conversion EDUCTOME (lis-le entièrement avant de commencer) :
[coller le contenu de ce fichier]

Voici le Blueprint Technique avec les interfaces TypeScript :
[coller EDUCTOME_BLUEPRINT_TECHNIQUE.md]

Voici le PDF source du [Titre du tome] :
[joindre le PDF]

Ta mission :
Convertis le [Chapitre N — Titre] en fichier TypeScript EDUCTOME.
Respecte exactement les interfaces définies.
Ne modifie pas le contenu pédagogique.
Ne supprime pas les expressions ivoiriennes.
Livre uniquement le code TypeScript — pas d'explications autour.

Fichier attendu : chap[N].ts
```

---

*EDUCTOME — Apprendre sans limites*  
*Guide de Conversion v1.0 · Juin 2026 · Gombaleu Marius*
