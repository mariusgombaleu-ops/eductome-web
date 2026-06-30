// ============================================================================
// Données d'examen — Tome 5 · Logarithme & Exponentielle (Série D).
// Aligné sur les modules du cours : M1 Ln népérien · M2 Applications du Ln ·
// M3 Exponentielle · M4 Log décimal & base a · M5 Puissances · M6 Croissances comparées.
// KaTeX `$...$` autorisé ; dans une string TS les backslashes sont doublés.
// ============================================================================

import type { ExamData } from '../../types/examen';

export const examT5LogExpo: ExamData = {
  id: 't5-log-expo',
  tome: 'Tome 5 — Logarithme & Exponentielle',
  matiere: 'Mathématiques · Série D',
  sousTitre: 'Fonctions logarithme & exponentielle',
  moduleRedirect: { label: 'Réviser le Module 6 — Les Croissances comparées', courseId: 't5-log-expo' },

  // ── DEVOIR SURVEILLÉ ──────────────────────────────────────────────────────
  devoir: {
    BASE: {
      level: 'BASE',
      dureeMin: 30,
      description: 'Propriétés algébriques, équations simples et simplifications — application directe.',
      exercices: [
        {
          id: 'd-base-ex1',
          titre: 'Exercice 1',
          points: 20,
          consigne: 'Répondre directement en appliquant les propriétés du cours.',
          questions: [
            {
              id: 'q1', points: 5,
              enonce: 'Simplifier $A=\\ln 8+\\ln 2-\\ln 4$.',
              corrige: '$A=\\ln\\dfrac{8\\times 2}{4}=\\ln 4=\\mathbf{2\\ln 2}$.',
              notePiege: 'On regroupe avec $\\ln a+\\ln b=\\ln(ab)$ et $\\ln a-\\ln b=\\ln\\frac{a}{b}$ avant de conclure.',
            },
            {
              id: 'q2', points: 5,
              enonce: 'Résoudre dans $\\mathbb{R}$ : $e^{x}=5$.',
              corrige: '$e^{x}=5 \\Leftrightarrow x=\\ln 5$. Solution : $\\mathbf{x=\\ln 5}$.',
            },
            {
              id: 'q3', points: 5,
              enonce: 'Résoudre : $\\ln x=3$.',
              corrige: 'Condition $x>0$. $\\ln x=3 \\Leftrightarrow x=e^{3}$. Solution : $\\mathbf{x=e^{3}}$.',
            },
            {
              id: 'q4', points: 5,
              enonce: 'Simplifier $B=e^{2\\ln 3}$.',
              corrige: '$B=\\left(e^{\\ln 3}\\right)^{2}=3^{2}=\\mathbf{9}$.',
            },
          ],
        },
      ],
    },

    MOYEN: {
      level: 'MOYEN',
      dureeMin: 60,
      description: 'Équations/inéquations, changement d\'inconnue et étude de fonction + pièges de domaine.',
      exercices: [
        {
          id: 'd-moyen-ex1',
          titre: 'Exercice 1',
          points: 11,
          consigne: 'Résoudre dans $\\mathbb{R}$ chacune des (in)équations suivantes.',
          questions: [
            {
              id: 'q1', points: 3,
              enonce: '$\\ln x+\\ln(x-1)=\\ln 6$.',
              corrige: 'Domaine : $x>1$. $\\ln\\big(x(x-1)\\big)=\\ln 6 \\Rightarrow x^{2}-x-6=0 \\Rightarrow x=3$ ou $x=-2$. On garde $\\mathbf{x=3}$.',
              notePiege: 'Le domaine $x>1$ élimine $x=-2$ : sans lui, demi-barème.',
            },
            {
              id: 'q2', points: 3,
              enonce: '$e^{2x}-3e^{x}+2=0$.',
              corrige: 'On pose $X=e^{x}>0$ : $X^{2}-3X+2=0 \\Rightarrow X=1$ ou $X=2$. Donc $e^{x}=1$ ($x=0$) ou $e^{x}=2$ ($x=\\ln 2$). Solutions : $\\mathbf{x=0}$ et $\\mathbf{x=\\ln 2}$.',
            },
            {
              id: 'q3', points: 2.5,
              enonce: '$\\ln x\\le 1$.',
              corrige: 'Domaine $x>0$. $\\ln x\\le 1=\\ln e \\Leftrightarrow x\\le e$. Solution : $\\mathbf{0<x\\le e}$.',
            },
            {
              id: 'q4', points: 2.5,
              enonce: '$e^{x}>1$.',
              corrige: '$e^{x}>1=e^{0} \\Leftrightarrow x>0$. Solution : $\\mathbf{x>0}$.',
            },
          ],
        },
        {
          id: 'd-moyen-ex2',
          titre: 'Exercice 2',
          points: 9,
          consigne: 'Soit $f$ définie sur $]0;+\\infty[$ par $f(x)=x-\\ln x$.',
          questions: [
            {
              id: 'q1', points: 3,
              enonce: 'Calculer $f\'(x)$ et étudier son signe.',
              corrige: '$f\'(x)=1-\\dfrac{1}{x}=\\dfrac{x-1}{x}$. Sur $]0;+\\infty[$, $x>0$ donc le signe est celui de $x-1$ : négatif sur $]0;1[$, positif sur $]1;+\\infty[$.',
            },
            {
              id: 'q2', points: 3,
              enonce: 'Dresser le sens de variation et donner le minimum de $f$.',
              corrige: '$f$ décroît sur $]0;1]$ puis croît sur $[1;+\\infty[$. Minimum en $x=1$ : $f(1)=1-\\ln 1=\\mathbf{1}$.',
            },
            {
              id: 'q3', points: 3,
              enonce: 'Déterminer les limites de $f$ en $0^{+}$ et en $+\\infty$.',
              corrige: 'En $0^{+}$ : $\\ln x\\to-\\infty$ donc $-\\ln x\\to+\\infty$, d\'où $f\\to+\\infty$. En $+\\infty$ : par croissance comparée $x$ l\'emporte sur $\\ln x$, donc $f\\to+\\infty$.',
              notePiege: 'En $+\\infty$ c\'est une croissance comparée ($x\\gg\\ln x$), pas une FI laissée telle quelle.',
            },
          ],
        },
      ],
    },

    BAC: {
      level: 'BAC',
      dureeMin: 120,
      description: 'Études complètes de fonctions $\\times\\,e^{x}$ et $\\ln x$, croissances comparées, asymptotes.',
      exercices: [
        {
          id: 'd-bac-ex1',
          titre: 'Exercice 1',
          points: 11,
          consigne: 'Soit $f$ définie sur $\\mathbb{R}$ par $f(x)=(x-1)e^{x}$.',
          questions: [
            {
              id: 'q1', points: 4,
              enonce: 'Calculer $f\'(x)$ et étudier son signe.',
              corrige: '$f\'(x)=e^{x}+(x-1)e^{x}=x\\,e^{x}$. Comme $e^{x}>0$, le signe de $f\'$ est celui de $x$ : $f$ décroît sur $]-\\infty;0]$, croît sur $[0;+\\infty[$. Minimum $f(0)=-1$.',
            },
            {
              id: 'q2', points: 4,
              enonce: 'Déterminer les limites de $f$ en $-\\infty$ et en $+\\infty$.',
              corrige: 'En $-\\infty$ : par croissance comparée $x\\,e^{x}\\to 0$, donc $f(x)=(x-1)e^{x}\\to\\mathbf{0}$. En $+\\infty$ : $x-1\\to+\\infty$ et $e^{x}\\to+\\infty$, donc $f\\to\\mathbf{+\\infty}$.',
              notePiege: 'En $-\\infty$ c\'est une FI $0\\times(-\\infty)$ levée par croissance comparée — résultat $0$, pas $-\\infty$.',
            },
            {
              id: 'q3', points: 3,
              enonce: 'Dresser le tableau de variation et préciser l\'asymptote éventuelle.',
              corrige: 'Variation : décroissante jusqu\'à $f(0)=-1$ puis croissante vers $+\\infty$. Comme $\\lim_{-\\infty}f=0$, la droite $y=0$ est asymptote horizontale en $-\\infty$.',
            },
          ],
        },
        {
          id: 'd-bac-ex2',
          titre: 'Exercice 2',
          points: 9,
          consigne: 'Soit $g$ définie sur $]0;+\\infty[$ par $g(x)=\\dfrac{\\ln x}{x}$.',
          questions: [
            {
              id: 'q1', points: 3,
              enonce: 'Calculer $g\'(x)$ et étudier son signe.',
              corrige: '$g\'(x)=\\dfrac{\\frac{1}{x}\\cdot x-\\ln x}{x^{2}}=\\dfrac{1-\\ln x}{x^{2}}$. Signe de $1-\\ln x$ : positif pour $x<e$, négatif pour $x>e$.',
            },
            {
              id: 'q2', points: 3,
              enonce: 'En déduire le maximum de $g$.',
              corrige: '$g$ croît sur $]0;e]$ puis décroît : maximum en $x=e$, $g(e)=\\dfrac{\\ln e}{e}=\\mathbf{\\dfrac{1}{e}}$.',
            },
            {
              id: 'q3', points: 3,
              enonce: 'Déterminer $\\displaystyle\\lim_{x\\to+\\infty} g(x)$ et conclure graphiquement.',
              corrige: 'Croissance comparée : $\\dfrac{\\ln x}{x}\\to 0$. La droite $y=0$ est asymptote horizontale en $+\\infty$.',
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
      description: 'Rappels de cours & propriétés en application directe.',
      questions: [
        { id: 'b1', competence: 'formule', prompt: 'Pour $a>0$ et $b>0$, $\\ln(ab)$ vaut :', options: [{ id: 'A', text: '$\\ln a\\times\\ln b$' }, { id: 'B', text: '$\\ln a+\\ln b$' }, { id: 'C', text: '$\\ln a-\\ln b$' }, { id: 'D', text: '$\\ln(a+b)$' }], correct: 'B', explication: 'Propriété fondamentale : $\\ln(ab)=\\ln a+\\ln b$.' },
        { id: 'b2', competence: 'formule', prompt: '$e^{0}$ vaut :', options: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$e$' }, { id: 'C', text: '$1$' }, { id: 'D', text: 'non défini' }], correct: 'C', explication: 'Pour tout réel, $e^{0}=1$.' },
        { id: 'b3', competence: 'methode', prompt: 'La solution de $e^{x}=5$ est :', options: [{ id: 'A', text: '$x=\\ln 5$' }, { id: 'B', text: '$x=e^{5}$' }, { id: 'C', text: '$x=5e$' }, { id: 'D', text: '$x=\\dfrac{5}{e}$' }], correct: 'A', explication: 'On applique $\\ln$ : $x=\\ln 5$.' },
        { id: 'b4', competence: 'formule', prompt: '$\\ln e$ vaut :', options: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$e$' }, { id: 'D', text: '$10$' }], correct: 'B', explication: '$\\ln e=1$ (et $\\ln 1=0$).' },
        { id: 'b5', competence: 'methode', prompt: 'La solution de $\\ln x=2$ est :', options: [{ id: 'A', text: '$x=2e$' }, { id: 'B', text: '$x=\\ln 2$' }, { id: 'C', text: '$x=e^{2}$' }, { id: 'D', text: '$x=\\dfrac{2}{e}$' }], correct: 'C', explication: 'On applique l\'exponentielle : $x=e^{2}$.' },
        { id: 'b6', competence: 'formule', prompt: 'L\'ensemble de définition de la fonction $\\ln$ est :', options: [{ id: 'A', text: '$\\mathbb{R}$' }, { id: 'B', text: '$[0;+\\infty[$' }, { id: 'C', text: '$]0;+\\infty[$' }, { id: 'D', text: '$\\mathbb{R}^{*}$' }], correct: 'C', explication: '$\\ln$ n\'est définie que pour $x>0$, soit $]0;+\\infty[$.' },
      ],
    },

    MOYEN: {
      level: 'MOYEN',
      dureeMin: 20,
      description: 'Méthodes mixtes (propriétés, changement d\'inconnue, dérivées, domaines) + pièges.',
      questions: [
        { id: 'm1', competence: 'formule', prompt: 'Pour $a>0$, $\\ln(a^{n})$ vaut :', options: [{ id: 'A', text: '$(\\ln a)^{n}$' }, { id: 'B', text: '$n\\,\\ln a$' }, { id: 'C', text: '$\\ln a+n$' }, { id: 'D', text: '$\\dfrac{\\ln a}{n}$' }], correct: 'B', explication: '$\\ln(a^{n})=n\\ln a$.' },
        { id: 'm2', competence: 'methode', prompt: 'Pour résoudre $e^{2x}-3e^{x}+2=0$, on pose :', options: [{ id: 'A', text: '$X=2x$' }, { id: 'B', text: '$X=\\ln x$' }, { id: 'C', text: '$X=e^{x}$' }, { id: 'D', text: '$X=x^{2}$' }], correct: 'C', explication: 'Avec $X=e^{x}$ on obtient $X^{2}-3X+2=0$, équation du second degré.' },
        { id: 'm3', competence: 'formule', prompt: '$e^{\\ln 7}$ vaut :', options: [{ id: 'A', text: '$\\ln 7$' }, { id: 'B', text: '$7$' }, { id: 'C', text: '$e^{7}$' }, { id: 'D', text: '$1$' }], correct: 'B', explication: '$\\ln$ et $\\exp$ sont réciproques : $e^{\\ln 7}=7$.' },
        { id: 'm4', competence: 'methode', prompt: 'Le domaine de l\'équation $\\ln x+\\ln(x-1)=\\ln 6$ est :', options: [{ id: 'A', text: '$x>0$' }, { id: 'B', text: '$x>1$' }, { id: 'C', text: '$x>-1$' }, { id: 'D', text: '$\\mathbb{R}$' }], correct: 'B', explication: 'Il faut $x>0$ ET $x-1>0$, donc $x>1$.' },
        { id: 'm5', competence: 'formule', prompt: 'La dérivée de $\\ln x$ sur $]0;+\\infty[$ est :', options: [{ id: 'A', text: '$\\dfrac{1}{x}$' }, { id: 'B', text: '$x$' }, { id: 'C', text: '$\\ln x$' }, { id: 'D', text: '$-\\dfrac{1}{x^{2}}$' }], correct: 'A', explication: '$(\\ln x)\'=\\dfrac{1}{x}$.' },
        { id: 'm6', competence: 'formule', prompt: 'La dérivée de $e^{x}$ est :', options: [{ id: 'A', text: '$x\\,e^{x-1}$' }, { id: 'B', text: '$e^{x}$' }, { id: 'C', text: '$\\dfrac{1}{e^{x}}$' }, { id: 'D', text: '$e^{x-1}$' }], correct: 'B', explication: 'La fonction exponentielle est sa propre dérivée : $(e^{x})\'=e^{x}$.' },
        { id: 'm7', competence: 'methode', prompt: 'L\'inéquation $\\ln x\\le 1$ a pour solution :', options: [{ id: 'A', text: '$x\\le e$' }, { id: 'B', text: '$0<x\\le e$' }, { id: 'C', text: '$x\\ge e$' }, { id: 'D', text: '$x\\le 1$' }], correct: 'B', explication: '$\\ln x\\le \\ln e \\Leftrightarrow x\\le e$, en tenant compte du domaine $x>0$.' },
        { id: 'm8', competence: 'formule', prompt: '$\\displaystyle\\lim_{x\\to 0^{+}}\\ln x$ vaut :', options: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$-\\infty$' }, { id: 'D', text: '$+\\infty$' }], correct: 'C', explication: 'En $0^{+}$, $\\ln x$ tend vers $-\\infty$.' },
      ],
    },

    BAC: {
      level: 'BAC',
      dureeMin: 30,
      description: 'Croissances comparées, dérivées de produits/quotients, extrema et pièges du correcteur.',
      questions: [
        { id: 'x1', competence: 'formule', prompt: '$\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{\\ln x}{x}$ vaut :', options: [{ id: 'A', text: '$+\\infty$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$0$' }, { id: 'D', text: '$e$' }], correct: 'C', explication: 'Croissance comparée : $x$ l\'emporte sur $\\ln x$, la limite vaut $0$.' },
        { id: 'x2', competence: 'formule', prompt: '$\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{e^{x}}{x}$ vaut :', options: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$+\\infty$' }, { id: 'D', text: '$e$' }], correct: 'C', explication: 'Croissance comparée : l\'exponentielle l\'emporte, la limite vaut $+\\infty$.' },
        { id: 'x3', competence: 'methode', prompt: 'La dérivée de $f(x)=(x-1)e^{x}$ est :', options: [{ id: 'A', text: '$e^{x}$' }, { id: 'B', text: '$x\\,e^{x}$' }, { id: 'C', text: '$(x-1)e^{x}$' }, { id: 'D', text: '$(x-2)e^{x}$' }], correct: 'B', explication: '$(uv)\'=u\'v+uv\'$ : $e^{x}+(x-1)e^{x}=x\\,e^{x}$.' },
        { id: 'x4', competence: 'formule', prompt: '$\\displaystyle\\lim_{x\\to-\\infty} x\\,e^{x}$ vaut :', options: [{ id: 'A', text: '$-\\infty$' }, { id: 'B', text: '$0$' }, { id: 'C', text: '$1$' }, { id: 'D', text: '$+\\infty$' }], correct: 'B', explication: 'Croissance comparée : $e^{x}$ écrase $x$ en $-\\infty$, donc $x\\,e^{x}\\to 0$.' },
        { id: 'x5', competence: 'methode', prompt: 'La fonction $g(x)=\\dfrac{\\ln x}{x}$ atteint son maximum en :', options: [{ id: 'A', text: '$x=1$' }, { id: 'B', text: '$x=e$' }, { id: 'C', text: '$x=e^{2}$' }, { id: 'D', text: '$x=\\dfrac{1}{e}$' }], correct: 'B', explication: '$g\'(x)=\\dfrac{1-\\ln x}{x^{2}}$ s\'annule en changeant de signe en $x=e$.' },
        { id: 'x6', competence: 'formule', prompt: 'Le maximum de $g(x)=\\dfrac{\\ln x}{x}$ vaut :', options: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$e$' }, { id: 'C', text: '$\\dfrac{1}{e}$' }, { id: 'D', text: '$0$' }], correct: 'C', explication: '$g(e)=\\dfrac{\\ln e}{e}=\\dfrac{1}{e}$.' },
        { id: 'x7', competence: 'formule', prompt: 'Pour $a>0$, la puissance réelle $a^{x}$ s\'écrit :', options: [{ id: 'A', text: '$e^{x\\ln a}$' }, { id: 'B', text: '$x\\,e^{\\ln a}$' }, { id: 'C', text: '$\\ln(ax)$' }, { id: 'D', text: '$e^{a\\ln x}$' }], correct: 'A', explication: 'Définition : $a^{x}=e^{x\\ln a}$.' },
        { id: 'x8', competence: 'methode', prompt: 'Le logarithme décimal $\\log(1000)$ vaut :', options: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$10$' }, { id: 'D', text: '$\\ln 1000$' }], correct: 'B', explication: '$\\log(10^{3})=3$ car $\\log 10=1$.' },
        { id: 'x9', competence: 'formule', prompt: '$\\displaystyle\\lim_{x\\to 0^{+}} x\\ln x$ vaut :', options: [{ id: 'A', text: '$-\\infty$' }, { id: 'B', text: '$0$' }, { id: 'C', text: '$1$' }, { id: 'D', text: '$+\\infty$' }], correct: 'B', explication: 'Croissance comparée en $0^{+}$ : $x\\ln x\\to 0$.' },
        { id: 'x10', competence: 'methode', prompt: 'L\'équation $e^{x}=b$ admet une solution si et seulement si :', options: [{ id: 'A', text: '$b\\in\\mathbb{R}$' }, { id: 'B', text: '$b>0$' }, { id: 'C', text: '$b\\ge 0$' }, { id: 'D', text: '$b<0$' }], correct: 'B', explication: 'Comme $e^{x}>0$ toujours, il faut $b>0$ ; la solution est alors $x=\\ln b$.' },
      ],
    },
  },
};

export default examT5LogExpo;
