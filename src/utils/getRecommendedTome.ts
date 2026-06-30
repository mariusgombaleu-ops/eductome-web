// Associe une évaluation (matière + intitulé) au Tome EDUCTOME correspondant.
//
// IMPORTANT — convention d'ID : on renvoie l'**ID applicatif canonique** au format
// `tN-slug` (ex. `t1-limites`). C'est celui qu'attendent à la fois :
//   • le courseRegistry de CourseReader (`/dashboard/course/:courseId`),
//   • les paquets de flashcards (extractFlashcards / launchRevision dans le Hub),
//   • le registry des examens (src/data/examens/index.ts).
// Ne pas renvoyer l'ID interne des fichiers de données (`les-limites-t1`) : il ne
// résout dans aucun de ces registres et provoque un repli silencieux sur le Tome 1.
export const getRecommendedTome = (subjectId: string, title: string): { tomeId: string; tomeName: string } | null => {
  if (subjectId !== 'maths') return null;

  const cleanTitle = title.toLowerCase();

  if (cleanTitle.includes('limite')) {
    return { tomeId: 't1-limites', tomeName: 'Tome 1 : Les Limites' };
  }
  if (cleanTitle.includes('deriv') || cleanTitle.includes('tangente')) {
    return { tomeId: 't2-derivees', tomeName: 'Tome 2 : Les Dérivées' };
  }
  if (cleanTitle.includes('integral') || cleanTitle.includes('primitive')) {
    return { tomeId: 't3-primitives', tomeName: 'Tome 3 : Primitives & Intégrales' };
  }
  if (cleanTitle.includes('suite')) {
    return { tomeId: 't4-suites', tomeName: 'Tome 4 : Suites Numériques' };
  }
  if (cleanTitle.includes('logarithme') || cleanTitle.includes('exp') || cleanTitle.includes('ln')) {
    return { tomeId: 't5-log-expo', tomeName: 'Tome 5 : Fonctions Ln & Exp' };
  }
  if (cleanTitle.includes('trigo') || cleanTitle.includes('cosinus') || cleanTitle.includes('sinus') || cleanTitle.includes('radian')) {
    return { tomeId: 't6-trigonometrie', tomeName: 'Tome 6 : Fonctions Trigonométriques' };
  }
  if (cleanTitle.includes('probabilit') || cleanTitle.includes('dénombr') || cleanTitle.includes('denombr') || cleanTitle.includes('binomial')) {
    return { tomeId: 't7-probabilites', tomeName: 'Tome 7 : Les Probabilités' };
  }
  if (cleanTitle.includes('statisti') || cleanTitle.includes('corrélation') || cleanTitle.includes('correlation') || cleanTitle.includes('nuage de points') || cleanTitle.includes('ajustement')) {
    return { tomeId: 't8-statistiques', tomeName: 'Tome 8 : Statistiques' };
  }
  if (cleanTitle.includes('espace') || cleanTitle.includes('barycentre') || cleanTitle.includes('vecteur') || cleanTitle.includes('produit scalaire') || cleanTitle.includes('sphère') || cleanTitle.includes('sphere')) {
    return { tomeId: 't9-geometrie-espace', tomeName: 'Tome 9 : Géométrie dans l\'Espace' };
  }
  if (cleanTitle.includes('complexe')) {
    return { tomeId: 't10-complexes', tomeName: 'Tome 10 : Nombres Complexes' };
  }
  if (cleanTitle.includes('équation différentielle') || cleanTitle.includes('equation differentielle') || cleanTitle.includes('différentielle') || cleanTitle.includes('differentielle')) {
    return { tomeId: 't11-equations-diff', tomeName: 'Tome 11 : Les Équations Différentielles' };
  }
  if (cleanTitle.includes('révision') || cleanTitle.includes('revision') || cleanTitle.includes('bac blanc') || cleanTitle.includes('annale')) {
    return { tomeId: 't12-revisions-bac', tomeName: 'Tome 12 : Révisions BAC Complètes' };
  }

  return null;
};
