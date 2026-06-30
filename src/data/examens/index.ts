// ============================================================================
// Registry des examens disponibles, indexé par courseId.
// Ajoute une entrée par Tome dont tu prépares le contenu.
// ============================================================================

import type { ExamData } from '../../types/examen';
import { examT1Limites } from './t1-limites';
import { examT2Derivees } from './t2-derivees';
import { examT3Primitives } from './t3-primitives';
import { examT4Suites } from './t4-suites';
import { examT5LogExpo } from './t5-log-expo';
import { examT6Trigonometrie } from './t6-trigonometrie';

// ── Gabarits T7→T12 (prêts, à remplir) ───────────────────────────────────────
// Les fichiers existent (`t7-probabilites.ts` … `t12-revisions-bac.ts`) mais NE SONT PAS
// encore enregistrés : leur contenu est « À COMPLÉTER » et leur cours n'est pas
// câblé dans le courseRegistry (le bilan redirige vers /dashboard/course/<slug>).
// Pour activer un Tome : 1) remplir son fichier ; 2) s'assurer que le cours <slug>
// est dans courseRegistry (CourseReader.tsx) ; 3) décommenter son import + son
// entrée ci-dessous.
//
// import { examT7Probabilites } from './t7-probabilites';
// import { examT8Statistiques } from './t8-statistiques';
// import { examT9GeometrieEspace } from './t9-geometrie-espace';
// import { examT10Complexes } from './t10-complexes';
// import { examT11EquationsDiff } from './t11-equations-diff';
// import { examT12RevisionsBac } from './t12-revisions-bac';

export const EXAMENS: Record<string, ExamData> = {
  't1-limites': examT1Limites,
  't2-derivees': examT2Derivees,
  't3-primitives': examT3Primitives,
  't4-suites': examT4Suites,
  't5-log-expo': examT5LogExpo,
  't6-trigonometrie': examT6Trigonometrie,
  // 't7-probabilites': examT7Probabilites,
  // 't8-statistiques': examT8Statistiques,
  // 't9-geometrie-espace': examT9GeometrieEspace,
  // 't10-complexes': examT10Complexes,
  // 't11-equations-diff': examT11EquationsDiff,
  // 't12-revisions-bac': examT12RevisionsBac,
};

export function getExam(id: string): ExamData | undefined {
  return EXAMENS[id];
}

/** Liste ordonnée pour un éventuel sélecteur de Tome. */
export const EXAMENS_LIST: ExamData[] = Object.values(EXAMENS);
