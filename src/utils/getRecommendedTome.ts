export const getRecommendedTome = (subjectId: string, title: string): { tomeId: string; tomeName: string } | null => {
  if (subjectId !== 'maths') return null;

  const cleanTitle = title.toLowerCase();

  if (cleanTitle.includes('limite')) {
    return { tomeId: 'les-limites-t1', tomeName: 'Tome 1 : Les Limites' };
  }
  if (cleanTitle.includes('deriv') || cleanTitle.includes('tangente')) {
    return { tomeId: 'les-derivees-t2', tomeName: 'Tome 2 : Les Dérivées' };
  }
  if (cleanTitle.includes('integral') || cleanTitle.includes('primitive')) {
    return { tomeId: 'primitives-integrales-t3', tomeName: 'Tome 3 : Primitives & Intégrales' };
  }
  if (cleanTitle.includes('suite')) {
    return { tomeId: 'suites-numeriques-t4', tomeName: 'Tome 4 : Suites Numériques' };
  }
  if (cleanTitle.includes('logarithme') || cleanTitle.includes('exp') || cleanTitle.includes('ln')) {
    return { tomeId: 'logarithmes-exponentielles-t5', tomeName: 'Tome 5 : Fonctions Ln & Exp' };
  }
  if (cleanTitle.includes('complexe')) {
    return { tomeId: 'nombres-complexes-t10', tomeName: 'Tome 10 : Nombres Complexes' };
  }

  return null;
};
