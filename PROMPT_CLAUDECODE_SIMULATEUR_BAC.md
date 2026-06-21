# Claude Code — Simulateur Prédictif BAC

## Contexte

Trouve le fichier de la page "Mes Notes & Objectifs" (elle apparaît dans la nav sous ce nom). Cette page a déjà un système d'onglets : "Mes Notes" et "Mes Objectifs". 

**Ajoute un 3ème onglet "Simulateur BAC"** dans ce système d'onglets existant. Ne touche pas aux deux onglets existants.

Les coefficients sont déjà définis dans le codebase :
```typescript
IVORIAN_CURRICULUM.TLE_D   // total coeff 22
IVORIAN_CURRICULUM.TLE_A1  // total coeff 20
IVORIAN_CURRICULUM.TLE_A2  // total coeff 21
```
La série de l'élève est dans `users/{uid}.serie`.
L'objectif points BAC est dans `users/{uid}.objectifPoints`.
Les moyennes de classe par matière sont déjà calculées — utilise la source existante.

---

## Ce qu'il faut créer

### 1. Nouveau composant `BacSimulator.tsx`

**State local :**
```typescript
const [notesSimulees, setNotesSimulees] = useState<Record<string, number | null>>({})
```

**Calculs dérivés (useMemo) :**
```typescript
const pointsSimules = Σ(note × coeff) pour toutes notes saisies
const moyenneSimulee = pointsSimules / totalCoeffSaisi
const progression = pointsSimules / objectifPoints  // en %

// Calculateur inverse — pour chaque matière vide :
const pointsRestants = objectifPoints - pointsSimules
const coeffRestants = totalCoeff - totalCoeffSaisi
const noteMinRequise = pointsRestants / coeffRestants
```

**Persistance :** `users/{uid}/bacSimulation` dans Firestore, debounce 1000ms.

---

### 2. Jauge de points `BacPointsGauge`

Affiche :
- `[pointsSimules] / [objectifPoints] pts` en grand
- Barre de progression — couleur selon avancement :
  - `#C62828` si < 60%
  - `#E67E22` si 60–89%
  - `#1E8449` si ≥ 90%
- Badge mention : Passable ≥10 / Assez Bien ≥12 / Bien ≥14 / Très Bien ≥16 (sur `moyenneSimulee`)

---

### 3. Champ par matière `BacSubjectRow`

Pour chaque matière de `IVORIAN_CURRICULUM[serie]` :

```
Label : "[Nom matière] · Coeff [X]"
Input : number, min=0, max=20, step=0.5, placeholder="Note simulée"

Si champ vide    → afficher en gris sous le champ :
                   "Tu as besoin d'au moins [noteMinRequise]/20 ici"
Si noteMinRequise > 20 → texte rouge :
                   "Objectif hors de portée avec ces notes"
Si note_simulée - moyenne_classe ≥ 1.5 → afficher BacRealityCheck sous ce champ
```

---

### 4. Message "Choc de Réalité" `BacRealityCheck`

Déclenché quand `note_simulée - moyenne_classe ≥ 1.5` sur une matière.

Style : bordure gauche `#D81B60` 3px, fond secondaire, padding 10px 14px.

Texte :
```
💡 Champion(ne), tu as simulé un [note_simulée]/20 en [Matière] pour atteindre
ton objectif. Mais ta moyenne actuelle est de [moyenne_classe]/20.
Il y a un écart de [delta] points. [message_action]
```

Messages par `id` matière :
- `svt` → "C'est le moment d'ouvrir Les Clés Sciences SVT. Les points SVT se récupèrent avec la méthode."
- `maths` → "C'est le moment d'ouvrir Les Clés Maths. Commence par le tome qui couvre ta plus grande faiblesse."
- `pc` → "Les Clés Sciences PC t'attend. Faut pas gnan — les points PC tombent avec la bonne méthode."
- `français` → "Les Clés Lettres Français te donne les outils pour aller chercher ces points."
- `philo` → "Philo Facile est fait exactement pour ça. Un tome, une méthode, et cet écart se comble."
- `hg` → "Travaille tes fiches HG — la régularité est tout ce qu'il te faut ici."
- `anglais` → "Anglais Spécial BAC te donne la méthode pour aller chercher ces points."
- `langue2` → "Régularité et méthode sur ta LV2 — c'est là que les points se gagnent."

---

## Cas limite

- Si `objectifPoints` non défini → afficher dans l'onglet :
  *"Définis ton objectif BAC dans l'onglet Mes Objectifs pour activer le simulateur."*
- Si aucune moyenne de classe disponible pour une matière → `moyenne_classe = null`, ne pas déclencher le Choc de Réalité pour cette matière

---

## Règles

- Mobile-first, champs 100% largeur
- Couleurs : Navy `#1A3557` titres, `#D81B60` alertes Grand Frère
- Accessible à tous les utilisateurs (Gratuit et Famille)
- No screenshot, no verbose report — fichiers modifiés uniquement

## Fichiers attendus
- `BacSimulator.tsx` (nouveau)
- `BacPointsGauge.tsx` (nouveau)
- `BacSubjectRow.tsx` (nouveau)
- `BacRealityCheck.tsx` (nouveau)
- Fichier page "Mes Notes & Objectifs" (modifié — ajout 3ème onglet)
