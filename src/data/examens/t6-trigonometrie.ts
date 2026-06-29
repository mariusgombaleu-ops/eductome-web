// ============================================================================
// GABARIT VIDE — Tome 6 — La Trigonométrie (Série D).
// Structure prête à remplir : remplace chaque « À COMPLÉTER » par le vrai contenu
// (KaTeX `$...$` autorisé ; dans une string TS, double les backslashes : \\dfrac).
//
// ⚠️ NON ENREGISTRÉ dans le registry tant que le cours « t6-trigonometrie » n'est pas câblé
//    dans le courseRegistry du CourseReader : le bilan redirige vers
//    /dashboard/course/t6-trigonometrie. Une fois le contenu rempli ET le cours disponible,
//    décommente l'entrée correspondante dans src/data/examens/index.ts.
//
// Barème conseillé (comme T1–T3) : chaque palier = 20 pts au total
//   • BASE : 1 exercice de 20 pts ;
//   • MOYEN / BAC : 2 exercices (11 + 9 pts).
// Nombre de questions QCM : BASE 6 · MOYEN 8 · BAC 10 (duplique les lignes ci-dessous).
// ============================================================================

import type { ExamData } from '../../types/examen';

export const examT6Trigonometrie: ExamData = {
  id: 't6-trigonometrie',
  tome: "Tome 6 — La Trigonométrie",
  matiere: 'Mathématiques · Série D',
  sousTitre: "Trigonométrie",
  moduleRedirect: { label: "Réviser le cours — Tome 6 — La Trigonométrie", courseId: 't6-trigonometrie' },

  // ── DEVOIR SURVEILLÉ ──────────────────────────────────────────────────────
  devoir: {
    BASE: {
      level: 'BASE',
      dureeMin: 30,
      description: 'À COMPLÉTER — application immédiate du cours.',
      exercices: [
        {
          id: 'd-base-ex1',
          titre: 'Exercice 1',
          points: 20,
          consigne: 'À COMPLÉTER.',
          questions: [
            // Duplique jusqu'à couvrir 20 pts au total.
            { id: 'q1', enonce: 'À COMPLÉTER', points: 20, corrige: 'À COMPLÉTER' },
          ],
        },
      ],
    },

    MOYEN: {
      level: 'MOYEN',
      dureeMin: 60,
      description: 'À COMPLÉTER — méthodes mixtes + 1 piège.',
      exercices: [
        {
          id: 'd-moyen-ex1',
          titre: 'Exercice 1',
          points: 11,
          consigne: 'À COMPLÉTER.',
          questions: [
            { id: 'q1', enonce: 'À COMPLÉTER', points: 11, corrige: 'À COMPLÉTER' },
          ],
        },
        {
          id: 'd-moyen-ex2',
          titre: 'Exercice 2',
          points: 9,
          consigne: 'À COMPLÉTER.',
          questions: [
            { id: 'q1', enonce: 'À COMPLÉTER', points: 9, corrige: 'À COMPLÉTER' },
          ],
        },
      ],
    },

    BAC: {
      level: 'BAC',
      dureeMin: 120,
      description: 'À COMPLÉTER — énoncés type BAC, raisonnement complet.',
      exercices: [
        {
          id: 'd-bac-ex1',
          titre: 'Exercice 1',
          points: 11,
          consigne: 'À COMPLÉTER.',
          questions: [
            { id: 'q1', enonce: 'À COMPLÉTER', points: 11, corrige: 'À COMPLÉTER' },
          ],
        },
        {
          id: 'd-bac-ex2',
          titre: 'Exercice 2',
          points: 9,
          consigne: 'À COMPLÉTER.',
          questions: [
            { id: 'q1', enonce: 'À COMPLÉTER', points: 9, corrige: 'À COMPLÉTER' },
          ],
        },
      ],
    },
  },

  // ── INTERROGATION QCM ─────────────────────────────────────────────────────
  // BASE 6 · MOYEN 8 · BAC 10 questions. Alterne competence 'formule' / 'methode'.
  interro: {
    BASE: {
      level: 'BASE',
      dureeMin: 10,
      description: 'À COMPLÉTER — rappels de cours & formules.',
      questions: [
        { id: 'b1', competence: 'formule', prompt: 'À COMPLÉTER', options: [{ id: 'A', text: 'À COMPLÉTER' }, { id: 'B', text: 'À COMPLÉTER' }, { id: 'C', text: 'À COMPLÉTER' }, { id: 'D', text: 'À COMPLÉTER' }], correct: 'A', explication: 'À COMPLÉTER' },
        { id: 'b2', competence: 'methode', prompt: 'À COMPLÉTER', options: [{ id: 'A', text: 'À COMPLÉTER' }, { id: 'B', text: 'À COMPLÉTER' }, { id: 'C', text: 'À COMPLÉTER' }, { id: 'D', text: 'À COMPLÉTER' }], correct: 'A', explication: 'À COMPLÉTER' },
        // … compléter jusqu'à 6 questions (b3 … b6).
      ],
    },

    MOYEN: {
      level: 'MOYEN',
      dureeMin: 20,
      description: 'À COMPLÉTER — méthodes mixtes.',
      questions: [
        { id: 'm1', competence: 'methode', prompt: 'À COMPLÉTER', options: [{ id: 'A', text: 'À COMPLÉTER' }, { id: 'B', text: 'À COMPLÉTER' }, { id: 'C', text: 'À COMPLÉTER' }, { id: 'D', text: 'À COMPLÉTER' }], correct: 'A', explication: 'À COMPLÉTER' },
        { id: 'm2', competence: 'formule', prompt: 'À COMPLÉTER', options: [{ id: 'A', text: 'À COMPLÉTER' }, { id: 'B', text: 'À COMPLÉTER' }, { id: 'C', text: 'À COMPLÉTER' }, { id: 'D', text: 'À COMPLÉTER' }], correct: 'A', explication: 'À COMPLÉTER' },
        // … compléter jusqu'à 8 questions (m3 … m8).
      ],
    },

    BAC: {
      level: 'BAC',
      dureeMin: 30,
      description: 'À COMPLÉTER — niveau BAC, pièges du correcteur.',
      questions: [
        { id: 'x1', competence: 'methode', prompt: 'À COMPLÉTER', options: [{ id: 'A', text: 'À COMPLÉTER' }, { id: 'B', text: 'À COMPLÉTER' }, { id: 'C', text: 'À COMPLÉTER' }, { id: 'D', text: 'À COMPLÉTER' }], correct: 'A', explication: 'À COMPLÉTER' },
        { id: 'x2', competence: 'formule', prompt: 'À COMPLÉTER', options: [{ id: 'A', text: 'À COMPLÉTER' }, { id: 'B', text: 'À COMPLÉTER' }, { id: 'C', text: 'À COMPLÉTER' }, { id: 'D', text: 'À COMPLÉTER' }], correct: 'A', explication: 'À COMPLÉTER' },
        // … compléter jusqu'à 10 questions (x3 … x10).
      ],
    },
  },
};

export default examT6Trigonometrie;
