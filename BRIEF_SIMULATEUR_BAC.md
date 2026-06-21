# EDUCTOME — Brief Antigravity : Simulateur Prédictif BAC
> Module à intégrer dans la page existante "Mes Notes & Objectifs"  
> Juin 2026 · Gombaleu Marius  
> Coefficients vérifiés par Gemini — source IVORIAN_CURRICULUM

---

## 1. Contexte et ce qui existe déjà

La page `/dashboard/notes-objectifs` existe et est fonctionnelle. Elle contient :

- **Objectif BAC** de l'élève (défini à l'inscription) : un nombre de points cible (ex. 250 ou 300 points)
- **Saisie des notes** de devoirs au fil de l'année
- **Calcul automatique** de la moyenne par matière et de la moyenne générale annuelle

**Ce module ne touche pas à ce qui existe.** Il s'ajoute en dessous comme nouvelle section : `"Simulateur BAC"`.

---

## 2. Coefficients officiels DPFC (source vérifiée)

Utiliser les constantes déjà définies dans `IVORIAN_CURRICULUM` :

```typescript
export const IVORIAN_CURRICULUM = {
  TLE_D: [
    { id: 'svt',      name: 'SVT',               coeff: 5, color: '#1B5E20' },
    { id: 'maths',    name: 'Mathématiques',      coeff: 4, color: '#1A3557' },
    { id: 'pc',       name: 'Physique-Chimie',    coeff: 4, color: '#6A1B9A' },
    { id: 'français', name: 'Français',           coeff: 3, color: '#D81B60' },
    { id: 'philo',    name: 'Philosophie',        coeff: 2, color: '#880E4F' },
    { id: 'hg',       name: 'Histoire-Géographie',coeff: 2, color: '#E65100' },
    { id: 'anglais',  name: 'Anglais',            coeff: 2, color: '#1976D2' }
  ],
  // Total coefficients Tle D : 22
  TLE_A2: [
    { id: 'français', name: 'Français',           coeff: 5, color: '#D81B60' },
    { id: 'philo',    name: 'Philosophie',        coeff: 5, color: '#880E4F' },
    { id: 'anglais',  name: 'Anglais (LV1)',      coeff: 3, color: '#1976D2' },
    { id: 'hg',       name: 'Histoire-Géographie',coeff: 3, color: '#E65100' },
    { id: 'langue2',  name: 'LV2 (All/Esp)',      coeff: 3, color: '#37474F' },
    { id: 'maths',    name: 'Mathématiques',      coeff: 2, color: '#1A3557' }
  ],
  // Total coefficients Tle A2 : 21
  TLE_A1: [
    { id: 'français', name: 'Français',           coeff: 5, color: '#D81B60' },
    { id: 'philo',    name: 'Philosophie',        coeff: 5, color: '#880E4F' },
    { id: 'maths',    name: 'Mathématiques',      coeff: 4, color: '#1A3557' },
    { id: 'hg',       name: 'Histoire-Géographie',coeff: 3, color: '#E65100' },
    { id: 'anglais',  name: 'Anglais',            coeff: 3, color: '#1976D2' }
  ]
  // Total coefficients Tle A1 : 20
} as const;
```

La série de l'élève (`TLE_D`, `TLE_A1`, `TLE_A2`) est déjà stockée dans `users/{uid}.serie`.
Le simulateur charge automatiquement la bonne liste selon cette valeur.

---

## 3. Logique de calcul

### Points BAC vs Moyenne BAC

```
Points BAC = Σ (note_matière × coeff_matière)

Exemple Tle D :
  SVT    13 × 5 = 65
  Maths  14 × 4 = 56
  PC     12 × 4 = 48
  Français 11 × 3 = 33
  Philo  10 × 2 = 20
  HG     12 × 2 = 24
  Anglais 13 × 2 = 26
  ─────────────────────
  Total points = 272
  Total coeff  = 22
  Moyenne BAC  = 272 ÷ 22 = 12.36/20
```

Points max possibles :
- Tle D : 20 × 22 = **440 points**
- Tle A2 : 20 × 21 = **420 points**
- Tle A1 : 20 × 20 = **400 points**

### Calculateur inverse

Quand l'élève fixe des notes simulées dans certaines matières et laisse les autres vides :

```
Points restants = objectifPoints - Σ(notes_saisies × leurs_coeffs)
Coeffs restants = totalCoeff - Σ(coeffs_matières_saisies)
Note min requise = Points_restants / Coeffs_restants
```

Si `note_min_requise > 20` → objectif mathématiquement impossible avec les notes actuelles.

---

## 4. Les 3 mécaniques à implémenter

### Mécanique 1 — Jauge de points en temps réel

**Composant :** `BacPointsGauge`

- Affiche : `[Points simulés] / [Objectif points]` en grand
- Barre de progression se remplissant en temps réel
- Couleur de la barre :
  - Rouge `#C62828` : < 60% de l'objectif
  - Orange `#E67E22` : 60–89%
  - Vert `#1E8449` : ≥ 90%
- Badge mention correspondante (seuils en moyenne /20) :
  - Passable : ≥ 10
  - Assez Bien : ≥ 12
  - Bien : ≥ 14
  - Très Bien : ≥ 16

---

### Mécanique 2 — Champ de simulation par matière

**Composant :** `BacSubjectSimulator`

Chaque matière a un champ de saisie de note simulée (0–20, step 0.5).

- **Note saisie** → impact immédiat sur la jauge de points
- **Note saisie inférieure à la moyenne de classe** → indicateur ⚠️ discret sous le champ
- **Champ vide** → afficher en gris la note minimale requise (calculateur inverse) :
  > *"Tu as besoin d'au moins [X]/20 ici"*
- **Objectif impossible** (note minimale > 20) → message rouge :
  > *"Objectif hors de portée avec ces notes. Ajuste tes simulations."*

---

### Mécanique 3 — Choc de Réalité (Le Déclencheur d'Action)

**Composant :** `BacRealityCheck`

Compare pour chaque matière : `note_simulée_BAC` vs `moyenne_classe_actuelle`.

**Règle de déclenchement :** `note_simulée - moyenne_classe ≥ 1.5 point`

**Format du message (ton Grand Frère — obligatoire) :**

```
💡 Champion(ne), tu as simulé un [note_simulée]/20 en [Matière] pour atteindre 
ton objectif. Mais ta moyenne actuelle sur l'app est de [moyenne_classe]/20. 
Il y a un écart de [delta] points. [Message d'action selon la matière]
```

**Mapping matière → message d'action :**

| Matière (`id`) | Message d'action |
|---|---|
| `svt` | *"C'est le moment d'ouvrir Les Clés Sciences SVT. Les points SVT se récupèrent avec la méthode."* |
| `maths` | *"C'est le moment d'ouvrir Les Clés Maths. Commence par le tome qui couvre ta plus grande faiblesse."* |
| `pc` | *"Les Clés Sciences PC t'attend. Faut pas gnan — les points PC tombent avec la bonne méthode."* |
| `français` | *"Les Clés Lettres Français te donne les outils pour aller chercher ces points."* |
| `philo` | *"Philo Facile est fait exactement pour ça. Un tome, une méthode, et cet écart se comble."* |
| `hg` | *"Travaille tes fiches HG — la régularité est tout ce qu'il te faut ici."* |
| `anglais` | *"Anglais Spécial BAC te donne la méthode pour aller chercher ces points."* |
| `langue2` | *"Régularité et méthode sur ta LV2 — c'est là que les points se gagnent."* |

---

## 5. Structure de données Firestore

### Nouveau sous-document : `users/{uid}/bacSimulation`

```typescript
interface BacSimulation {
  serie: 'TLE_D' | 'TLE_A1' | 'TLE_A2';
  objectifPoints: number;
  notesSimulees: {
    [matiereId: string]: number;   // ex: { "svt": 14, "maths": 12 }
  };
  updatedAt: Timestamp;
}
```

Sauvegarder automatiquement dans Firestore à chaque changement (debounce 1 seconde).
L'élève retrouve sa simulation à chaque visite.

---

## 6. UI / UX

### Position dans la page
Nouvelle section ajoutée **en dessous** de "Mes Notes & Objectifs".  
Titre : `"Simulateur BAC — Anticipe ton examen"`

### Mobile-first
- Champs de saisie : 100% largeur sur mobile
- Jauge de points : sticky en haut de la section pendant le scroll
- Le Choc de Réalité s'affiche **directement sous la matière concernée** (pas en modale)

### Couleurs EDUCTOME
- Titres / structure : Navy `#1A3557`
- Messages Grand Frère : bordure gauche Magenta `#D81B60`
- Objectif atteint : Vert `#1E8449`
- Objectif impossible : Rouge `#C62828`
- Label coefficient : utiliser la `color` définie dans `IVORIAN_CURRICULUM` par matière

---

## 7. Accès

Accessible à **tous les utilisateurs** (Gratuit et Famille).

---

## 8. Hors scope (ne pas implémenter maintenant)

- Multi-scénarios nommés
- Export PDF du plan de révision
- Comparaison avec la moyenne nationale BAC
- Intégration avec le Mode Examen Blanc

---

*EDUCTOME — Apprendre sans limites*  
*Brief Antigravity v1.1 · Juin 2026 — coefficients vérifiés*
