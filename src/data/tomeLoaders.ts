import { Tome } from '../types/course';

// Registre central des tomes chargés à la demande (code-splitting).
// Chaque entrée renvoie une Promise<Tome> via un import() dynamique : Vite
// génère ainsi un chunk JS séparé par tome, chargé seulement quand on ouvre
// le cours ou ses flashcards (et non plus dans le bundle principal).
// Ajouter chaque nouveau tome (T10→T12) ici dès que ses données sont prêtes.
export const tomeLoaders: Record<string, () => Promise<Tome>> = {
  't1-limites': () => import('./course-t1').then(m => m.courseT1),
  't2-derivees': () => import('./course-t2').then(m => m.courseT2),
  't3-primitives': () => import('./course-t3').then(m => m.courseT3),
  't4-suites': () => import('./course-t4').then(m => m.courseT4),
  't5-log-expo': () => import('./course-t5').then(m => m.courseT5),
  't6-trigonometrie': () => import('./course-t6').then(m => m.courseT6),
  't7-probabilites': () => import('./course-t7').then(m => m.courseT7),
  't8-statistiques': () => import('./course-t8').then(m => m.courseT8),
  't9-geometrie-espace': () => import('./course-t9').then(m => m.courseT9),
  't10-complexes': () => import('./course-t10').then(m => m.courseT10),
  't11-equations-diff': () => import('./course-t11').then(m => m.courseT11),
  't12-revisions-bac': () => import('./course-t12').then(m => m.courseT12),
};

// courseId par défaut quand l'id est inconnu/absent.
export const DEFAULT_COURSE_ID = 't1-limites';

// Charge le tome correspondant au courseId, en se rabattant sur le tome par
// défaut si l'id est inconnu. Renvoie null seulement si même le défaut manque.
export const loadTome = (courseId?: string): Promise<Tome | null> => {
  const id = courseId && tomeLoaders[courseId] ? courseId : DEFAULT_COURSE_ID;
  const loader = tomeLoaders[id];
  return loader ? loader() : Promise.resolve(null);
};
