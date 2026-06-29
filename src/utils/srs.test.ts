import { describe, it, expect } from 'vitest';
import { addDays, nextDue, isCourseDue, type FlashcardCourseState } from './srs';

const entry = (due: string): FlashcardCourseState => ({ due, pct: 75, reviewedAt: '2026-06-20' });

describe('addDays', () => {
  it('décale en restant en YYYY-MM-DD', () => {
    expect(addDays('2026-06-28', 2)).toBe('2026-06-30');
    expect(addDays('2026-06-28', 0)).toBe('2026-06-28');
  });
  it('franchit les bornes de mois', () => {
    expect(addDays('2026-06-30', 1)).toBe('2026-07-01');
    expect(addDays('2026-12-31', 1)).toBe('2027-01-01');
  });
});

describe('nextDue — plus le score est haut, plus on espace', () => {
  const t = '2026-06-28';
  it('≥ 80 % → +4 jours', () => {
    expect(nextDue(80, t)).toBe('2026-07-02');
    expect(nextDue(100, t)).toBe('2026-07-02');
  });
  it('≥ 50 % → +2 jours', () => {
    expect(nextDue(50, t)).toBe('2026-06-30');
    expect(nextDue(79, t)).toBe('2026-06-30');
  });
  it('< 50 % → +1 jour', () => {
    expect(nextDue(49, t)).toBe('2026-06-29');
    expect(nextDue(0, t)).toBe('2026-06-29');
  });
});

describe('isCourseDue', () => {
  const today = '2026-06-28';
  it('jamais revu → dû', () => {
    expect(isCourseDue(undefined, today)).toBe(true);
  });
  it('échéance dépassée ou du jour → dû', () => {
    expect(isCourseDue(entry('2026-06-27'), today)).toBe(true);
    expect(isCourseDue(entry('2026-06-28'), today)).toBe(true);
  });
  it('échéance future → pas dû', () => {
    expect(isCourseDue(entry('2026-06-30'), today)).toBe(false);
  });
});
