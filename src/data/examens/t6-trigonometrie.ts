// ============================================================================
// Données d'examen — Tome 6 · Trigonométrie (Série D).
// Aligné sur les modules : M1 Radians & cercle · M2 cos/sin · M3 tangente ·
// M4 Formules · M5 Limites de référence & dérivées · M6 Équations & étude.
// KaTeX `$...$` autorisé ; dans une string TS les backslashes sont doublés.
// ============================================================================

import type { ExamData } from '../../types/examen';

export const examT6Trigonometrie: ExamData = {
  id: 't6-trigonometrie',
  tome: 'Tome 6 — La Trigonométrie',
  matiere: 'Mathématiques · Série D',
  sousTitre: 'Fonctions trigonométriques',
  moduleRedirect: { label: 'Réviser le Module 5 — Limites de référence & dérivées', courseId: 't6-trigonometrie' },

  // ── DEVOIR SURVEILLÉ ──────────────────────────────────────────────────────
  devoir: {
    BASE: {
      level: 'BASE',
      dureeMin: 30,
      description: 'Radians, valeurs remarquables et symétries — application directe.',
      exercices: [
        {
          id: 'd-base-ex1',
          titre: 'Exercice 1',
          points: 20,
          consigne: 'Répondre directement en appliquant le cours.',
          questions: [
            {
              id: 'q1', points: 5,
              enonce: 'Convertir $60^{\\circ}$ en radians, puis $\\dfrac{3\\pi}{4}$ en degrés.',
              corrige: '$180^{\\circ}=\\pi$ rad, donc $60^{\\circ}=\\dfrac{\\pi}{3}$ et $\\dfrac{3\\pi}{4}=\\mathbf{135^{\\circ}}$.',
            },
            {
              id: 'q2', points: 5,
              enonce: 'Donner les valeurs exactes de $\\cos\\dfrac{\\pi}{3}$, $\\sin\\dfrac{\\pi}{6}$ et $\\tan\\dfrac{\\pi}{4}$.',
              corrige: '$\\cos\\dfrac{\\pi}{3}=\\dfrac{1}{2}$, $\\sin\\dfrac{\\pi}{6}=\\dfrac{1}{2}$, $\\tan\\dfrac{\\pi}{4}=1$.',
            },
            {
              id: 'q3', points: 5,
              enonce: 'Simplifier $A=\\cos(-x)+\\cos(\\pi-x)$.',
              corrige: '$\\cos(-x)=\\cos x$ (parité) et $\\cos(\\pi-x)=-\\cos x$. Donc $A=\\cos x-\\cos x=\\mathbf{0}$.',
              notePiege: 'Bien distinguer la parité $\\cos(-x)=\\cos x$ de la symétrie $\\cos(\\pi-x)=-\\cos x$.',
            },
            {
              id: 'q4', points: 5,
              enonce: 'Sachant que $\\cos x=\\dfrac{3}{5}$ avec $x\\in\\left]0;\\dfrac{\\pi}{2}\\right[$, calculer $\\sin x$.',
              corrige: '$\\sin^{2}x=1-\\cos^{2}x=1-\\dfrac{9}{25}=\\dfrac{16}{25}$. Comme $x$ est aigu, $\\sin x>0$ : $\\sin x=\\mathbf{\\dfrac{4}{5}}$.',
              notePiege: 'Le signe de $\\sin x$ vient de l\'intervalle : sur $]0;\\frac{\\pi}{2}[$ il est positif.',
            },
          ],
        },
      ],
    },

    MOYEN: {
      level: 'MOYEN',
      dureeMin: 60,
      description: 'Formules d\'addition/duplication et équations trigonométriques + pièges.',
      exercices: [
        {
          id: 'd-moyen-ex1',
          titre: 'Exercice 1',
          points: 11,
          consigne: 'Utiliser les formules trigonométriques.',
          questions: [
            {
              id: 'q1', points: 3,
              enonce: 'Calculer la valeur exacte de $\\cos\\dfrac{\\pi}{12}$.',
              corrige: '$\\dfrac{\\pi}{12}=\\dfrac{\\pi}{3}-\\dfrac{\\pi}{4}$ : $\\cos\\!\\left(\\dfrac{\\pi}{3}-\\dfrac{\\pi}{4}\\right)=\\cos\\dfrac{\\pi}{3}\\cos\\dfrac{\\pi}{4}+\\sin\\dfrac{\\pi}{3}\\sin\\dfrac{\\pi}{4}=\\dfrac{1}{2}\\cdot\\dfrac{\\sqrt{2}}{2}+\\dfrac{\\sqrt{3}}{2}\\cdot\\dfrac{\\sqrt{2}}{2}=\\mathbf{\\dfrac{\\sqrt{2}+\\sqrt{6}}{4}}$.',
            },
            {
              id: 'q2', points: 3,
              enonce: 'On donne $\\sin x=\\dfrac{3}{5}$ et $\\cos x=\\dfrac{4}{5}$. Calculer $\\sin(2x)$.',
              corrige: '$\\sin(2x)=2\\sin x\\cos x=2\\cdot\\dfrac{3}{5}\\cdot\\dfrac{4}{5}=\\mathbf{\\dfrac{24}{25}}$.',
            },
            {
              id: 'q3', points: 2.5,
              enonce: 'Avec $\\cos x=\\dfrac{4}{5}$, calculer $\\cos(2x)$.',
              corrige: '$\\cos(2x)=2\\cos^{2}x-1=2\\cdot\\dfrac{16}{25}-1=\\dfrac{32}{25}-1=\\mathbf{\\dfrac{7}{25}}$.',
            },
            {
              id: 'q4', points: 2.5,
              enonce: 'Simplifier $B=\\sin\\!\\left(\\dfrac{\\pi}{2}-x\\right)+\\cos(\\pi-x)$.',
              corrige: '$\\sin\\!\\left(\\dfrac{\\pi}{2}-x\\right)=\\cos x$ et $\\cos(\\pi-x)=-\\cos x$, donc $B=\\mathbf{0}$.',
              notePiege: 'Les angles associés ($\\frac{\\pi}{2}-x$, $\\pi-x$) doivent être maîtrisés par cœur.',
            },
          ],
        },
        {
          id: 'd-moyen-ex2',
          titre: 'Exercice 2',
          points: 9,
          consigne: 'Résoudre dans $]-\\pi;\\pi]$ chacune des équations suivantes.',
          questions: [
            {
              id: 'q1', points: 4,
              enonce: '$2\\cos x-1=0$.',
              corrige: '$\\cos x=\\dfrac{1}{2}=\\cos\\dfrac{\\pi}{3}$ donc $x=\\dfrac{\\pi}{3}$ ou $x=-\\dfrac{\\pi}{3}$. Solutions : $\\mathbf{\\left\\{-\\dfrac{\\pi}{3};\\dfrac{\\pi}{3}\\right\\}}$.',
            },
            {
              id: 'q2', points: 5,
              enonce: '$2\\sin x+1=0$.',
              corrige: '$\\sin x=-\\dfrac{1}{2}=\\sin\\!\\left(-\\dfrac{\\pi}{6}\\right)$. Sur $]-\\pi;\\pi]$ : $x=-\\dfrac{\\pi}{6}$ ou $x=-\\dfrac{5\\pi}{6}$. Solutions : $\\mathbf{\\left\\{-\\dfrac{5\\pi}{6};-\\dfrac{\\pi}{6}\\right\\}}$.',
              notePiege: 'Pour $\\sin x=\\sin a$, ne pas oublier la seconde famille $x=\\pi-a\\,(+2k\\pi)$.',
            },
          ],
        },
      ],
    },

    BAC: {
      level: 'BAC',
      dureeMin: 120,
      description: 'Étude de fonction trigonométrique et limites de référence — raisonnement complet.',
      exercices: [
        {
          id: 'd-bac-ex1',
          titre: 'Exercice 1',
          points: 11,
          consigne: 'Soit $f$ définie sur $[0;\\pi]$ par $f(x)=\\sin(2x)$.',
          questions: [
            {
              id: 'q1', points: 4,
              enonce: 'Calculer $f\'(x)$ et résoudre $f\'(x)=0$ sur $[0;\\pi]$.',
              corrige: '$f\'(x)=2\\cos(2x)$. $f\'(x)=0 \\Leftrightarrow \\cos(2x)=0 \\Leftrightarrow 2x=\\dfrac{\\pi}{2}+k\\pi$, soit $x=\\dfrac{\\pi}{4}+k\\dfrac{\\pi}{2}$. Sur $[0;\\pi]$ : $x=\\dfrac{\\pi}{4}$ et $x=\\dfrac{3\\pi}{4}$.',
            },
            {
              id: 'q2', points: 4,
              enonce: 'Dresser le tableau de variation de $f$ sur $[0;\\pi]$.',
              corrige: '$f$ croît sur $\\left[0;\\dfrac{\\pi}{4}\\right]$, décroît sur $\\left[\\dfrac{\\pi}{4};\\dfrac{3\\pi}{4}\\right]$, puis croît sur $\\left[\\dfrac{3\\pi}{4};\\pi\\right]$. Valeurs : $f(0)=0$, $f\\!\\left(\\frac{\\pi}{4}\\right)=1$, $f\\!\\left(\\frac{3\\pi}{4}\\right)=-1$, $f(\\pi)=0$.',
            },
            {
              id: 'q3', points: 3,
              enonce: 'En déduire le maximum et le minimum de $f$ sur $[0;\\pi]$.',
              corrige: 'Maximum $\\mathbf{1}$ atteint en $x=\\dfrac{\\pi}{4}$ ; minimum $\\mathbf{-1}$ atteint en $x=\\dfrac{3\\pi}{4}$.',
              notePiege: 'Les extrema se lisent sur le tableau : justifier par le signe de $f\'$, pas seulement par lecture graphique.',
            },
          ],
        },
        {
          id: 'd-bac-ex2',
          titre: 'Exercice 2',
          points: 9,
          consigne: 'Calculer les limites suivantes en $0$ (limites de référence).',
          questions: [
            {
              id: 'q1', points: 3,
              enonce: '$\\displaystyle\\lim_{x\\to 0}\\dfrac{\\sin(3x)}{x}$.',
              corrige: '$\\dfrac{\\sin(3x)}{x}=3\\cdot\\dfrac{\\sin(3x)}{3x}$. Comme $\\dfrac{\\sin(3x)}{3x}\\to 1$, la limite vaut $\\mathbf{3}$.',
              notePiege: 'On ramène à la forme $\\frac{\\sin u}{u}$ en faisant apparaître $3x$ au dénominateur.',
            },
            {
              id: 'q2', points: 3,
              enonce: '$\\displaystyle\\lim_{x\\to 0}\\dfrac{1-\\cos x}{x^{2}}$.',
              corrige: 'Limite de référence : $\\dfrac{1-\\cos x}{x^{2}}\\to\\mathbf{\\dfrac{1}{2}}$.',
            },
            {
              id: 'q3', points: 3,
              enonce: '$\\displaystyle\\lim_{x\\to 0}\\dfrac{\\tan x}{x}$.',
              corrige: '$\\dfrac{\\tan x}{x}=\\dfrac{\\sin x}{x}\\cdot\\dfrac{1}{\\cos x}\\to 1\\cdot 1=\\mathbf{1}$.',
            },
          ],
        },
      ],
    },
  },

  // ── INTERROGATION QCM ─────────────────────────────────────────────────────
  interro: {
    BASE: {
      level: 'BASE',
      dureeMin: 10,
      description: 'Rappels de cours, valeurs remarquables & symétries.',
      questions: [
        { id: 'b1', competence: 'formule', prompt: '$\\pi$ radians correspond à :', options: [{ id: 'A', text: '$90^{\\circ}$' }, { id: 'B', text: '$180^{\\circ}$' }, { id: 'C', text: '$360^{\\circ}$' }, { id: 'D', text: '$270^{\\circ}$' }], correct: 'B', explication: 'Conversion de base : $\\pi$ rad $=180^{\\circ}$.' },
        { id: 'b2', competence: 'formule', prompt: '$\\cos\\dfrac{\\pi}{3}$ vaut :', options: [{ id: 'A', text: '$\\dfrac{1}{2}$' }, { id: 'B', text: '$\\dfrac{\\sqrt{2}}{2}$' }, { id: 'C', text: '$\\dfrac{\\sqrt{3}}{2}$' }, { id: 'D', text: '$1$' }], correct: 'A', explication: '$\\cos\\frac{\\pi}{3}=\\frac{1}{2}$ (valeur remarquable).' },
        { id: 'b3', competence: 'formule', prompt: 'Pour tout réel $x$, $\\cos^{2}x+\\sin^{2}x$ vaut :', options: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$1$' }, { id: 'D', text: '$x$' }], correct: 'C', explication: 'Identité fondamentale : $\\cos^{2}x+\\sin^{2}x=1$.' },
        { id: 'b4', competence: 'methode', prompt: '$\\cos(-x)$ est égal à :', options: [{ id: 'A', text: '$-\\cos x$' }, { id: 'B', text: '$\\cos x$' }, { id: 'C', text: '$\\sin x$' }, { id: 'D', text: '$-\\sin x$' }], correct: 'B', explication: 'La fonction cosinus est paire : $\\cos(-x)=\\cos x$.' },
        { id: 'b5', competence: 'formule', prompt: 'La période de la fonction sinus est :', options: [{ id: 'A', text: '$\\pi$' }, { id: 'B', text: '$2\\pi$' }, { id: 'C', text: '$\\dfrac{\\pi}{2}$' }, { id: 'D', text: '$1$' }], correct: 'B', explication: 'Les fonctions $\\sin$ et $\\cos$ ont pour période $2\\pi$.' },
        { id: 'b6', competence: 'formule', prompt: '$\\sin\\dfrac{\\pi}{6}$ vaut :', options: [{ id: 'A', text: '$\\dfrac{\\sqrt{3}}{2}$' }, { id: 'B', text: '$\\dfrac{1}{2}$' }, { id: 'C', text: '$\\dfrac{\\sqrt{2}}{2}$' }, { id: 'D', text: '$0$' }], correct: 'B', explication: '$\\sin\\frac{\\pi}{6}=\\frac{1}{2}$ (valeur remarquable).' },
      ],
    },

    MOYEN: {
      level: 'MOYEN',
      dureeMin: 20,
      description: 'Formules d\'addition/duplication, dérivées et équations + pièges.',
      questions: [
        { id: 'm1', competence: 'formule', prompt: '$\\cos(a+b)$ est égal à :', options: [{ id: 'A', text: '$\\cos a\\cos b+\\sin a\\sin b$' }, { id: 'B', text: '$\\cos a\\cos b-\\sin a\\sin b$' }, { id: 'C', text: '$\\sin a\\cos b+\\cos a\\sin b$' }, { id: 'D', text: '$\\cos a+\\cos b$' }], correct: 'B', explication: '$\\cos(a+b)=\\cos a\\cos b-\\sin a\\sin b$ (attention au signe $-$).' },
        { id: 'm2', competence: 'formule', prompt: '$\\sin(2x)$ est égal à :', options: [{ id: 'A', text: '$2\\sin x\\cos x$' }, { id: 'B', text: '$\\sin^{2}x-\\cos^{2}x$' }, { id: 'C', text: '$2\\sin x$' }, { id: 'D', text: '$1-2\\sin^{2}x$' }], correct: 'A', explication: 'Formule de duplication : $\\sin(2x)=2\\sin x\\cos x$.' },
        { id: 'm3', competence: 'formule', prompt: 'Parmi ces expressions, laquelle est égale à $\\cos(2x)$ ?', options: [{ id: 'A', text: '$2\\sin x\\cos x$' }, { id: 'B', text: '$2\\cos^{2}x-1$' }, { id: 'C', text: '$1+2\\sin^{2}x$' }, { id: 'D', text: '$\\cos^{2}x+\\sin^{2}x$' }], correct: 'B', explication: '$\\cos(2x)=\\cos^{2}x-\\sin^{2}x=2\\cos^{2}x-1=1-2\\sin^{2}x$.' },
        { id: 'm4', competence: 'methode', prompt: 'L\'équation $\\cos x=\\dfrac{1}{2}$ a pour solutions :', options: [{ id: 'A', text: '$x=\\dfrac{\\pi}{3}+2k\\pi$ uniquement' }, { id: 'B', text: '$x=\\pm\\dfrac{\\pi}{3}+2k\\pi$' }, { id: 'C', text: '$x=\\dfrac{\\pi}{6}+2k\\pi$' }, { id: 'D', text: '$x=\\pm\\dfrac{\\pi}{6}+k\\pi$' }], correct: 'B', explication: '$\\cos x=\\cos\\frac{\\pi}{3} \\Leftrightarrow x=\\frac{\\pi}{3}+2k\\pi$ ou $x=-\\frac{\\pi}{3}+2k\\pi$.' },
        { id: 'm5', competence: 'formule', prompt: 'La dérivée de $\\sin x$ est :', options: [{ id: 'A', text: '$\\cos x$' }, { id: 'B', text: '$-\\cos x$' }, { id: 'C', text: '$-\\sin x$' }, { id: 'D', text: '$\\tan x$' }], correct: 'A', explication: '$(\\sin x)\'=\\cos x$.' },
        { id: 'm6', competence: 'formule', prompt: 'La dérivée de $\\cos x$ est :', options: [{ id: 'A', text: '$\\sin x$' }, { id: 'B', text: '$-\\sin x$' }, { id: 'C', text: '$\\cos x$' }, { id: 'D', text: '$-\\cos x$' }], correct: 'B', explication: '$(\\cos x)\'=-\\sin x$ (attention au signe).' },
        { id: 'm7', competence: 'methode', prompt: '$\\cos(\\pi-x)$ est égal à :', options: [{ id: 'A', text: '$\\cos x$' }, { id: 'B', text: '$-\\cos x$' }, { id: 'C', text: '$\\sin x$' }, { id: 'D', text: '$-\\sin x$' }], correct: 'B', explication: 'Angle associé : $\\cos(\\pi-x)=-\\cos x$.' },
        { id: 'm8', competence: 'formule', prompt: 'La période de la fonction tangente est :', options: [{ id: 'A', text: '$2\\pi$' }, { id: 'B', text: '$\\pi$' }, { id: 'C', text: '$\\dfrac{\\pi}{2}$' }, { id: 'D', text: '$4\\pi$' }], correct: 'B', explication: 'La fonction $\\tan$ est périodique de période $\\pi$.' },
      ],
    },

    BAC: {
      level: 'BAC',
      dureeMin: 30,
      description: 'Limites de référence, dérivées, équations et angles associés — pièges du correcteur.',
      questions: [
        { id: 'x1', competence: 'formule', prompt: '$\\displaystyle\\lim_{x\\to 0}\\dfrac{\\sin x}{x}$ vaut :', options: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$+\\infty$' }, { id: 'D', text: 'non définie' }], correct: 'B', explication: 'Limite de référence : $\\lim_{x\\to0}\\frac{\\sin x}{x}=1$.' },
        { id: 'x2', competence: 'formule', prompt: '$\\displaystyle\\lim_{x\\to 0}\\dfrac{1-\\cos x}{x^{2}}$ vaut :', options: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$\\dfrac{1}{2}$' }, { id: 'D', text: '$+\\infty$' }], correct: 'C', explication: 'Limite de référence : $\\frac{1-\\cos x}{x^{2}}\\to\\frac{1}{2}$.' },
        { id: 'x3', competence: 'methode', prompt: '$\\displaystyle\\lim_{x\\to 0}\\dfrac{\\sin(3x)}{x}$ vaut :', options: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$0$' }, { id: 'D', text: '$\\dfrac{1}{3}$' }], correct: 'B', explication: 'On écrit $\\frac{\\sin(3x)}{x}=3\\cdot\\frac{\\sin(3x)}{3x}\\to 3$.' },
        { id: 'x4', competence: 'formule', prompt: 'La dérivée de $\\tan x$ est :', options: [{ id: 'A', text: '$1+\\tan^{2}x$' }, { id: 'B', text: '$-\\tan^{2}x$' }, { id: 'C', text: '$\\dfrac{1}{x}$' }, { id: 'D', text: '$\\cos^{2}x$' }], correct: 'A', explication: '$(\\tan x)\'=1+\\tan^{2}x=\\dfrac{1}{\\cos^{2}x}$.' },
        { id: 'x5', competence: 'methode', prompt: 'L\'équation $\\sin x=\\sin a$ équivaut à :', options: [{ id: 'A', text: '$x=a+2k\\pi$ uniquement' }, { id: 'B', text: '$x=a+2k\\pi$ ou $x=\\pi-a+2k\\pi$' }, { id: 'C', text: '$x=\\pm a+2k\\pi$' }, { id: 'D', text: '$x=a+k\\pi$' }], correct: 'B', explication: 'Deux familles : $x=a+2k\\pi$ ou $x=\\pi-a+2k\\pi$.' },
        { id: 'x6', competence: 'formule', prompt: 'La fonction $\\tan$ n\'est pas définie pour :', options: [{ id: 'A', text: '$x=k\\pi$' }, { id: 'B', text: '$x=\\dfrac{\\pi}{2}+k\\pi$' }, { id: 'C', text: '$x=2k\\pi$' }, { id: 'D', text: '$x=\\dfrac{\\pi}{4}+k\\pi$' }], correct: 'B', explication: '$\\tan x=\\frac{\\sin x}{\\cos x}$ : indéfinie quand $\\cos x=0$, soit $x=\\frac{\\pi}{2}+k\\pi$.' },
        { id: 'x7', competence: 'methode', prompt: '$\\sin\\!\\left(\\dfrac{\\pi}{2}-x\\right)$ est égal à :', options: [{ id: 'A', text: '$\\cos x$' }, { id: 'B', text: '$-\\cos x$' }, { id: 'C', text: '$\\sin x$' }, { id: 'D', text: '$-\\sin x$' }], correct: 'A', explication: 'Angle complémentaire : $\\sin\\!\\left(\\frac{\\pi}{2}-x\\right)=\\cos x$.' },
        { id: 'x8', competence: 'formule', prompt: '$\\cos\\dfrac{\\pi}{4}$ vaut :', options: [{ id: 'A', text: '$\\dfrac{1}{2}$' }, { id: 'B', text: '$\\dfrac{\\sqrt{2}}{2}$' }, { id: 'C', text: '$\\dfrac{\\sqrt{3}}{2}$' }, { id: 'D', text: '$1$' }], correct: 'B', explication: '$\\cos\\frac{\\pi}{4}=\\sin\\frac{\\pi}{4}=\\frac{\\sqrt{2}}{2}$.' },
        { id: 'x9', competence: 'methode', prompt: 'Pour calculer $\\cos\\dfrac{\\pi}{12}$, on l\'écrit comme :', options: [{ id: 'A', text: '$\\cos\\!\\left(\\dfrac{\\pi}{3}-\\dfrac{\\pi}{4}\\right)$' }, { id: 'B', text: '$\\cos\\!\\left(\\dfrac{\\pi}{6}+\\dfrac{\\pi}{4}\\right)$' }, { id: 'C', text: '$\\dfrac{1}{2}\\cos\\dfrac{\\pi}{6}$' }, { id: 'D', text: '$\\cos\\dfrac{\\pi}{6}-\\cos\\dfrac{\\pi}{4}$' }], correct: 'A', explication: '$\\frac{\\pi}{12}=\\frac{\\pi}{3}-\\frac{\\pi}{4}$, puis formule de $\\cos(a-b)$.' },
        { id: 'x10', competence: 'formule', prompt: '$\\displaystyle\\lim_{x\\to 0}\\dfrac{\\tan x}{x}$ vaut :', options: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$+\\infty$' }, { id: 'D', text: '$\\dfrac{1}{2}$' }], correct: 'B', explication: '$\\frac{\\tan x}{x}=\\frac{\\sin x}{x}\\cdot\\frac{1}{\\cos x}\\to 1\\cdot 1=1$.' },
      ],
    },
  },
};

export default examT6Trigonometrie;
