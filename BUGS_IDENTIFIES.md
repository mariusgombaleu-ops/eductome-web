# BUGS IDENTIFIÉS — Session 12 juin 2026
> À traiter en session suivante

---

## BUG 1 — ParentDashboard : section "Tomes débloqués" toujours vide

**Fichier :** `src/pages/ParentDashboard.tsx`
**Symptôme :** Tous les tomes s'affichent "Non débloqué" même pour un élève qui a acheté.
**Cause :** La requête achats (`collection(db, 'achats')`) lit dans la collection racine `/achats`, mais les règles Firestore ne couvrent que `users/{uid}/achats` (sous-collection). La collection racine est implicitement refusée — la requête échoue silencieusement.
**Cause racine :** Incohérence dans le modèle de données — `createAchatForUser` dans Cloud Functions écrit dans `db.collection("achats")` (racine) alors que les règles protègent `users/{uid}/achats` (sous-collection).
**Fix suggéré :**
- Option A : Ajouter les tomes débloqués dans la réponse de `getPublicStudentData` (Admin SDK lit la collection racine sans règles)
- Option B : Migrer les achats dans `users/{uid}/achats` et adapter les Cloud Functions

---

## BUG 2 — Untracked files non committés (composants en cours de développement)

**Fichiers :**
- `src/components/bac/` — Simulateur BAC (en cours)
- `src/components/notifications/` — Centre de notifications
- `src/hooks/useHasUnreadNotifications.ts`
- `src/pages/ApeDashboard.tsx`
- `src/pages/dashboard/Flashcards.tsx`

**Symptôme :** Ces fichiers ne sont pas dans Git et ont des erreurs TypeScript (`React` unused, type mismatches dans Flashcards.tsx, `TimetableBottomSheet` undefined dans TimetablePage.tsx).
**Fix suggéré :** Corriger les erreurs TS et committer quand ces features sont prêtes à être déployées.

---

## BUG 3 — TimetablePage : `TimetableBottomSheet` non défini

**Fichier :** `src/pages/TimetablePage.tsx`, ligne 461
**Erreur TS :** `Cannot find name 'TimetableBottomSheet'`
**Fix :** Créer le composant ou importer le bon composant existant.

---

## BUG 4 — achats dans ParentDashboard — Firestore permission silencieuse

**Impact :** La requête achats dans `fetchData` est wrappée dans un try/catch silencieux depuis le fix de cette session — la page charge correctement mais les tomes restent toujours "Non débloqué". L'erreur Firestore ne crash plus la page, mais le comportement UX est incorrect.
**Priorité :** Haute (affecte les parents qui veulent voir les progrès de leur enfant).
