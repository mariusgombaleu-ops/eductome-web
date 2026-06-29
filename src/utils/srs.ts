// ============================================================================
// Répétition espacée légère (par chapitre) — logique PURE, sans dépendance UI
// ni Firestore, donc testable isolément. Utilisée par le hook
// `useFlashcardProgress` (cf. Hub de Révision).
// ============================================================================

export interface FlashcardCourseState {
  /** Prochaine échéance de révision (YYYY-MM-DD). */
  due: string;
  /** Dernier score de maîtrise (% acquis). */
  pct: number;
  /** Date de la dernière révision (YYYY-MM-DD). */
  reviewedAt: string;
}

export type FlashcardProgress = Record<string, FlashcardCourseState>;

/** Date du jour au format YYYY-MM-DD (UTC). */
export function todayStr(now: Date = new Date()): string {
  return now.toISOString().split('T')[0];
}

/** Décale une date ISO (YYYY-MM-DD) de `n` jours, en restant en YYYY-MM-DD. */
export function addDays(fromISO: string, n: number): string {
  const d = new Date(`${fromISO}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().split('T')[0];
}

/**
 * Prochaine échéance selon le score de fin de session : plus le score est haut,
 * plus on espace la révision suivante.
 *   ≥ 80 % → +4 j · ≥ 50 % → +2 j · sinon → +1 j
 */
export function nextDue(pct: number, fromISO: string = todayStr()): string {
  if (pct >= 80) return addDays(fromISO, 4);
  if (pct >= 50) return addDays(fromISO, 2);
  return addDays(fromISO, 1);
}

/** Un chapitre jamais revu, ou dont l'échéance est atteinte, est « à réviser ». */
export function isCourseDue(entry: FlashcardCourseState | undefined, today: string = todayStr()): boolean {
  if (!entry) return true;
  return entry.due <= today;
}
