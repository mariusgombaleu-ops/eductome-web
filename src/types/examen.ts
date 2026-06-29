// ============================================================================
// Simulateur d'Examen — « La Salle de Composition »
// Modèle de données partagé entre le Devoir Surveillé et l'Interrogation QCM.
// ============================================================================

export type ExamMode = 'devoir' | 'interro';
export type ExamLevel = 'BASE' | 'MOYEN' | 'BAC';

/** Statut d'un palier dans le Hall. */
export type LevelStatus = 'locked' | 'unlocked' | 'mastered';

/** Auto-évaluation d'une question de Devoir, au barème. */
export type CorrectionState = 'reussi' | 'partiel' | 'manque' | null;

/** Palier du chrono en anneau, dérivé du temps restant. */
export type TimerPhase = 'serein' | 'vigilance' | 'urgence';

// ── Devoir Surveillé ────────────────────────────────────────────────────────

export interface BaremeQuestion {
  id: string;
  /** Énoncé de la question (KaTeX `$...$` autorisé). */
  enonce: string;
  /** Points alloués à cette question dans le barème. */
  points: number;
  /** Corrigé attendu, affiché à la correction (KaTeX autorisé). */
  corrige: string;
  /** Commentaire de correcteur affiché quand l'élève déclare « partiel » ou « manqué ». */
  notePiege?: string;
}

export interface DevoirExercice {
  id: string;
  titre: string;
  /** Total de points de l'exercice (doit égaler la somme des questions). */
  points: number;
  /** Consigne / contexte de l'exercice (KaTeX autorisé). */
  consigne: string;
  questions: BaremeQuestion[];
}

// ── Interrogation QCM ───────────────────────────────────────────────────────

export type QcmLetter = 'A' | 'B' | 'C' | 'D';

export interface QcmOption {
  id: QcmLetter;
  text: string;
}

export interface QcmQuestion {
  id: string;
  /** Compétence diagnostiquée — alimente le sous-score Formules / Méthodes. */
  competence: 'formule' | 'methode';
  /** Intitulé de la question (texte simple). */
  prompt: string;
  /** Formule centrée affichée sous l'intitulé (KaTeX, optionnel). */
  formula?: string;
  options: QcmOption[];
  correct: QcmLetter;
  /** Explication montrée au bilan pour les erreurs (KaTeX autorisé). */
  explication: string;
}

// ── Configuration d'un palier ───────────────────────────────────────────────

export interface DevoirLevelConfig {
  level: ExamLevel;
  /** Durée totale du devoir, en minutes. */
  dureeMin: number;
  /** Phrase de description affichée dans le sélecteur de niveau. */
  description: string;
  exercices: DevoirExercice[];
}

export interface InterroLevelConfig {
  level: ExamLevel;
  /** Durée totale de l'interrogation, en minutes. */
  dureeMin: number;
  description: string;
  questions: QcmQuestion[];
}

// ── Donnée d'examen complète pour un Tome ───────────────────────────────────

export interface ExamData {
  /** Identifiant, aligné sur le courseId (ex. `t1-limites`). */
  id: string;
  /** Titre éditorial (ex. « Tome 1 — Les Limites »). */
  tome: string;
  /** Sous-ligne matière (ex. « Mathématiques · Série D »). */
  matiere: string;
  /** Précision de chapitre (ex. « Calcul de limites »). */
  sousTitre: string;
  /** Module vers lequel le grand frère redirige au bilan. */
  moduleRedirect: { label: string; courseId: string };
  devoir: Record<ExamLevel, DevoirLevelConfig>;
  interro: Record<ExamLevel, InterroLevelConfig>;
}

// ── Progression / persistance ───────────────────────────────────────────────

export interface ModeProgress {
  /** Paliers débloqués (BASE l'est toujours). */
  unlocked: ExamLevel[];
  /** Paliers « maîtrisés » (réussis au-dessus du seuil). */
  mastered: ExamLevel[];
  /** Meilleure note /20 obtenue par palier. */
  bestNote: Partial<Record<ExamLevel, number>>;
  /** Nombre de réussites (note ≥ seuil) par palier. */
  reussites: Partial<Record<ExamLevel, number>>;
}

export interface SimulateurProgress {
  devoir: ModeProgress;
  interro: ModeProgress;
}

// ── Résultats persistés (Firestore) ─────────────────────────────────────────

export interface DevoirResult {
  examId: string;
  level: ExamLevel;
  note: number;          // /20
  pointsObtenus: number;
  pointsTotal: number;
  parExercice: { exerciceId: string; obtenus: number; total: number }[];
  xpGagne: number;
}

export interface InterroResult {
  examId: string;
  level: ExamLevel;
  bonnes: number;
  total: number;
  note: number;          // /20
  parCompetence: { formule: [number, number]; methode: [number, number] };
  erreurs: string[];     // ids des questions ratées
  xpGagne: number;
}
