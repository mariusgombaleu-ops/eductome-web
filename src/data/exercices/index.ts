import { Exercise } from './types';

export * from './types';

// 🔄 NOUVELLE BASE — Banque d'exercices corrigés, indexée par numéro de tome.
// Les anciens exercices (extraits des anciens tomes) ont été retirés ; le nouveau
// contenu T1→T12 sera ajouté tome par tome au fur et à mesure de sa préparation.
//
// Pour activer les exercices d'un tome quand le contenu est prêt :
//   1. Créer src/data/exercices/exercices-tN.ts qui exporte
//      `export const exercicesTN: Exercise[] = [ … ]` (typé via './types').
//   2. L'importer ici et l'ajouter à `allExercises` : { N: exercicesTN }.
//   3. Dans src/data/exercices-registry.ts, passer ce tome à
//      `hasExercises: true` (et retirer `isUpcoming`).
//
// Tant que `allExercises[tome]` est absent, la page Ressources affiche
// automatiquement l'état « Bientôt disponible » pour ce tome.
export const allExercises: Record<number, Exercise[]> = {};
