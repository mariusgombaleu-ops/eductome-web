import { describe, it, expect } from 'vitest';
import {
  noteSur20, pointsFor, exercicePoints, mention, gaugeTone,
  formatClock, timerPhase, applyResult, levelStatus, unlockRequirements,
  emptyMode, xpDevoir, xpInterro, SEUIL_REUSSITE,
} from './examen-utils';
import type { BaremeQuestion, DevoirExercice } from '../types/examen';

const q = (id: string, points: number): BaremeQuestion =>
  ({ id, points } as BaremeQuestion);

describe('noteSur20', () => {
  it('garde-fou : total nul → 0', () => {
    expect(noteSur20(0, 0)).toBe(0);
    expect(noteSur20(5, 0)).toBe(0);
  });
  it('note pleine et note nulle', () => {
    expect(noteSur20(20, 20)).toBe(20);
    expect(noteSur20(0, 20)).toBe(0);
  });
  it('arrondit au demi-point', () => {
    expect(noteSur20(1, 3)).toBe(6.5); // 6.667 → 6,5
    expect(noteSur20(13, 20)).toBe(13);
    expect(noteSur20(10, 20)).toBe(10);
  });
});

describe('pointsFor', () => {
  it('réussi = plein barème, partiel = demi, sinon 0', () => {
    expect(pointsFor(q('a', 4), 'reussi')).toBe(4);
    expect(pointsFor(q('a', 4), 'partiel')).toBe(2);
    expect(pointsFor(q('a', 4), 'manque')).toBe(0);
    expect(pointsFor(q('a', 4), null)).toBe(0);
  });
});

describe('exercicePoints', () => {
  it('somme les points obtenus par question', () => {
    const ex: DevoirExercice = {
      id: 'ex1', titre: 'Test', points: 10,
      questions: [q('ex1q1', 6), q('ex1q2', 4)],
    } as DevoirExercice;
    const states = { ex1q1: 'reussi' as const, ex1q2: 'partiel' as const };
    expect(exercicePoints(ex, states)).toEqual({ obtenus: 8, total: 10 });
  });
});

describe('mention', () => {
  it('respecte les seuils', () => {
    expect(mention(20).label).toBe('Très Bien');
    expect(mention(16).label).toBe('Très Bien');
    expect(mention(15.9).label).toBe('Bien');
    expect(mention(14).label).toBe('Bien');
    expect(mention(12).label).toBe('Assez Bien');
    expect(mention(10).label).toBe('Passable');
    expect(mention(9.5).label).toBe('Insuffisant');
    expect(mention(0).label).toBe('Insuffisant');
  });
});

describe('gaugeTone', () => {
  it('classe par pourcentage', () => {
    expect(gaugeTone(0.95)).toBe('tip');
    expect(gaugeTone(0.6)).toBe('ana');
    expect(gaugeTone(0.59)).toBe('warn');
  });
});

describe('formatClock', () => {
  it('formate mm:ss et borne à 0', () => {
    expect(formatClock(0)).toBe('00:00');
    expect(formatClock(65)).toBe('01:05');
    expect(formatClock(600)).toBe('10:00');
    expect(formatClock(-10)).toBe('00:00');
  });
});

describe('timerPhase', () => {
  it('urgence ≤ 10 min, vigilance dernier tiers, sinon serein', () => {
    expect(timerPhase(600, 3600)).toBe('urgence');
    expect(timerPhase(1000, 3600)).toBe('vigilance'); // ≤ 1200
    expect(timerPhase(2000, 3600)).toBe('serein');
  });
});

describe('applyResult — déblocage des paliers', () => {
  it('BASE réussi débloque MOYEN et marque BASE maîtrisé', () => {
    const next = applyResult(emptyMode(), 'BASE', SEUIL_REUSSITE);
    expect(next.unlocked).toContain('MOYEN');
    expect(next.mastered).toContain('BASE');
    expect(next.reussites.BASE).toBe(1);
  });
  it('BASE échoué ne débloque rien', () => {
    const next = applyResult(emptyMode(), 'BASE', 13);
    expect(next.unlocked).not.toContain('MOYEN');
    expect(next.mastered).not.toContain('BASE');
  });
  it('3 réussites MOYEN (≥ seuil) débloquent BAC', () => {
    let m = applyResult(emptyMode(), 'BASE', 15); // ouvre MOYEN
    m = applyResult(m, 'MOYEN', 15);
    m = applyResult(m, 'MOYEN', 15);
    expect(m.unlocked).not.toContain('BAC');
    m = applyResult(m, 'MOYEN', 15);
    expect(m.unlocked).toContain('BAC');
  });
  it('garde la meilleure note', () => {
    let m = applyResult(emptyMode(), 'BASE', 18);
    m = applyResult(m, 'BASE', 11);
    expect(m.bestNote.BASE).toBe(18);
  });
});

describe('levelStatus & unlockRequirements', () => {
  it('reflète l’état d’un palier', () => {
    const m = applyResult(emptyMode(), 'BASE', 15);
    expect(levelStatus(m, 'BASE')).toBe('mastered');
    expect(levelStatus(m, 'MOYEN')).toBe('unlocked');
    expect(levelStatus(m, 'BAC')).toBe('locked');
  });
  it('décrit les conditions restantes de MOYEN', () => {
    const reqs = unlockRequirements(emptyMode(), 'MOYEN');
    expect(reqs[0].done).toBe(false);
    expect(reqs[0].progress).toBe('0 / 1');
  });
});

describe('XP par palier', () => {
  it('devoir > interro, et croît avec le niveau', () => {
    expect(xpDevoir('BASE')).toBe(25);
    expect(xpDevoir('MOYEN')).toBe(40);
    expect(xpDevoir('BAC')).toBe(60);
    expect(xpInterro('BASE')).toBe(12);
    expect(xpInterro('BAC')).toBe(30);
  });
});
