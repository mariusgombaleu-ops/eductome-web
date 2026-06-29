// ============================================================================
// Simulateur d'Examen — utilitaires de calcul (mentions, chrono, déblocage).
// Aucune dépendance UI : pur métier, testable isolément.
// ============================================================================

import type {
  ExamLevel, ExamMode, TimerPhase, CorrectionState,
  ModeProgress, SimulateurProgress, BaremeQuestion, DevoirExercice,
} from '../types/examen';

export const LEVELS: ExamLevel[] = ['BASE', 'MOYEN', 'BAC'];

/** Seuil de réussite (note /20) qui valide un palier et compte vers le déblocage. */
export const SEUIL_REUSSITE = 14;

/** Seuils des mentions, en moyenne /20. */
export const MENTIONS = [
  { min: 16, label: 'Très Bien', tone: 'tip' as const },
  { min: 14, label: 'Bien',       tone: 'tip' as const },
  { min: 12, label: 'Assez Bien', tone: 'ana' as const },
  { min: 10, label: 'Passable',   tone: 'ana' as const },
  { min: 0,  label: 'Insuffisant', tone: 'warn' as const },
];

export function mention(note: number): { label: string; tone: 'tip' | 'ana' | 'warn' } {
  return MENTIONS.find(m => note >= m.min) ?? MENTIONS[MENTIONS.length - 1];
}

/** Couleur de jauge de points selon le pourcentage atteint (cf. brief). */
export function gaugeTone(pct: number): 'tip' | 'ana' | 'warn' {
  if (pct >= 0.9) return 'tip';
  if (pct >= 0.6) return 'ana';
  return 'warn';
}

// ── Chrono ──────────────────────────────────────────────────────────────────

export function formatClock(totalSeconds: number): string {
  const s = Math.max(0, Math.floor(totalSeconds));
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

/**
 * Palier du chrono :
 *  - urgence  : 10 dernières minutes (ou moins de 10% s'il reste très peu)
 *  - vigilance: dernier tiers
 *  - serein   : au-delà
 */
export function timerPhase(remainingSec: number, totalSec: number): TimerPhase {
  if (remainingSec <= 600) return 'urgence';
  if (remainingSec <= totalSec / 3) return 'vigilance';
  return 'serein';
}

// ── Points & correction au barème ────────────────────────────────────────────

/** Points obtenus pour une déclaration d'auto-évaluation. Partiel = demi-barème. */
export function pointsFor(q: BaremeQuestion, state: CorrectionState): number {
  if (state === 'reussi') return q.points;
  if (state === 'partiel') return q.points / 2;
  return 0;
}

export function exercicePoints(
  ex: DevoirExercice,
  states: Record<string, CorrectionState>,
): { obtenus: number; total: number } {
  const total = ex.points;
  const obtenus = ex.questions.reduce((acc, q) => acc + pointsFor(q, states[q.id] ?? null), 0);
  return { obtenus, total };
}

/** Convertit un total de points sur le barème en note /20. */
export function noteSur20(pointsObtenus: number, pointsTotal: number): number {
  if (pointsTotal <= 0) return 0;
  return Math.round((pointsObtenus / pointsTotal) * 20 * 2) / 2; // arrondi au demi-point
}

// ── Déblocage des paliers ────────────────────────────────────────────────────

export function emptyMode(): ModeProgress {
  return { unlocked: ['BASE'], mastered: [], bestNote: {}, reussites: {} };
}

export function emptyProgress(): SimulateurProgress {
  return { devoir: emptyMode(), interro: emptyMode() };
}

/**
 * Règles de déblocage (récompense, pas autorisation) :
 *  - BASE  : toujours ouvert.
 *  - MOYEN : ouvert dès une réussite (≥ seuil) en BASE.
 *  - BAC   : ouvert avec 3 réussites MOYEN cumulées ET une meilleure note MOYEN ≥ seuil.
 * Renvoie la progression mise à jour à partir d'un résultat.
 */
export function applyResult(
  mode: ModeProgress,
  level: ExamLevel,
  note: number,
): ModeProgress {
  const next: ModeProgress = {
    unlocked: [...mode.unlocked],
    mastered: [...mode.mastered],
    bestNote: { ...mode.bestNote },
    reussites: { ...mode.reussites },
  };

  next.bestNote[level] = Math.max(note, next.bestNote[level] ?? 0);
  const reussi = note >= SEUIL_REUSSITE;
  if (reussi) {
    next.reussites[level] = (next.reussites[level] ?? 0) + 1;
    if (!next.mastered.includes(level)) next.mastered.push(level);
  }

  // BASE réussi → débloque MOYEN
  if (level === 'BASE' && reussi && !next.unlocked.includes('MOYEN')) {
    next.unlocked.push('MOYEN');
  }
  // 3 réussites MOYEN + meilleure note MOYEN ≥ seuil → débloque BAC
  const moyenReussites = next.reussites['MOYEN'] ?? 0;
  const moyenBest = next.bestNote['MOYEN'] ?? 0;
  if (moyenReussites >= 3 && moyenBest >= SEUIL_REUSSITE && !next.unlocked.includes('BAC')) {
    next.unlocked.push('BAC');
  }

  return next;
}

export function levelStatus(mode: ModeProgress, level: ExamLevel) {
  if (mode.mastered.includes(level)) return 'mastered' as const;
  if (mode.unlocked.includes(level)) return 'unlocked' as const;
  return 'locked' as const;
}

/** Décrit, pour un palier verrouillé, les conditions chiffrées restantes. */
export function unlockRequirements(mode: ModeProgress, level: ExamLevel): {
  done: boolean; label: string; progress: string;
}[] {
  if (level === 'MOYEN') {
    const done = (mode.reussites['BASE'] ?? 0) >= 1;
    return [{ done, label: `Réussir une interrogation BASE (≥ ${SEUIL_REUSSITE}/20)`, progress: done ? '1 / 1' : '0 / 1' }];
  }
  if (level === 'BAC') {
    const r = mode.reussites['MOYEN'] ?? 0;
    const best = mode.bestNote['MOYEN'] ?? 0;
    return [
      { done: r >= 3, label: '3 épreuves MOYEN réussies', progress: `${Math.min(r, 3)} / 3` },
      { done: best >= SEUIL_REUSSITE, label: `Décrocher ${SEUIL_REUSSITE}/20 à un MOYEN`, progress: `${best.toFixed(1).replace('.', ',')} → ${SEUIL_REUSSITE}` },
    ];
  }
  return [];
}

// ── XP ────────────────────────────────────────────────────────────────────

/** XP d'un Devoir selon le palier (avant multiplicateur Famille appliqué par gainXp). */
export function xpDevoir(level: ExamLevel): number {
  return level === 'BAC' ? 60 : level === 'MOYEN' ? 40 : 25;
}
export function xpInterro(level: ExamLevel): number {
  return level === 'BAC' ? 30 : level === 'MOYEN' ? 20 : 12;
}

export function modeLabel(mode: ExamMode): string {
  return mode === 'devoir' ? 'Devoir Surveillé' : 'Interrogation';
}
