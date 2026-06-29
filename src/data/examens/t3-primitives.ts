// ============================================================================
// Données d'examen — Tome 3 · Primitives & Intégrales (Série D).
// Modules couverts : primitives de référence, formes composées, intégrale
// définie & valeur moyenne, intégration par parties, aires, volumes.
// ============================================================================

import type { ExamData } from '../../types/examen';

export const examT3Primitives: ExamData = {
  id: 't3-primitives',
  tome: 'Tome 3 — Primitives & Intégrales',
  matiere: 'Mathématiques · Série D',
  sousTitre: 'Primitives & calcul intégral',
  moduleRedirect: { label: 'Réviser le Module 2 — Les Formes Composées', courseId: 't3-primitives' },

  // ── DEVOIR SURVEILLÉ ──────────────────────────────────────────────────────
  devoir: {
    BASE: {
      level: 'BASE',
      dureeMin: 30,
      description: 'Primitives de référence & intégrale simple — application du cours.',
      exercices: [
        {
          id: 'd-base-ex1',
          titre: 'Exercice 1',
          points: 20,
          consigne: 'Déterminer une primitive (ou calculer l\'intégrale) demandée. $k$ désigne une constante réelle.',
          questions: [
            { id: 'q1', enonce: 'Une primitive de $f(x)=3x^{2}$.', points: 5, corrige: '$F(x)=x^{3}+k$, car $(x^{3})\'=3x^{2}$.' },
            { id: 'q2', enonce: 'Une primitive de $f(x)=\\dfrac{1}{x^{2}}$ sur $]0\\,;+\\infty[$.', points: 5, corrige: '$\\dfrac{1}{x^{2}}=x^{-2}$, donc $F(x)=\\dfrac{x^{-1}}{-1}+k=\\mathbf{-\\dfrac{1}{x}+k}$.', notePiege: 'Attention au signe : la primitive de $x^{-2}$ est $-x^{-1}$.' },
            { id: 'q3', enonce: 'Calculer $\\displaystyle\\int_{0}^{1} 2x\\,\\mathrm{d}x$.', points: 5, corrige: '$\\big[x^{2}\\big]_{0}^{1}=1-0=\\mathbf{1}$.' },
            { id: 'q4', enonce: 'Une primitive de $f(x)=\\cos x$.', points: 5, corrige: '$F(x)=\\sin x+k$, car $(\\sin x)\'=\\cos x$.' },
          ],
        },
      ],
    },

    MOYEN: {
      level: 'MOYEN',
      dureeMin: 60,
      description: 'Primitives de formes composées + intégrale définie & valeur moyenne.',
      exercices: [
        {
          id: 'd-moyen-ex1',
          titre: 'Exercice 1',
          points: 11,
          consigne: 'Déterminer une primitive de chaque fonction (préciser la forme reconnue) :',
          questions: [
            {
              id: 'q1', points: 3,
              enonce: '$f(x)=2x(x^{2}+1)^{3}$',
              corrige: 'Forme $u\'u^{n}$ avec $u=x^{2}+1,\\ u\'=2x$ : $F(x)=\\dfrac{(x^{2}+1)^{4}}{4}+k$.',
            },
            {
              id: 'q2', points: 3,
              enonce: '$f(x)=\\dfrac{2x+1}{x^{2}+x+3}$',
              corrige: 'Forme $\\dfrac{u\'}{u}$ avec $u=x^{2}+x+3,\\ u\'=2x+1$ : $F(x)=\\ln(x^{2}+x+3)+k$ (le dénominateur est strictement positif).',
              notePiege: 'Reconnaître $\\dfrac{u\'}{u}$ avant de se lancer dans un calcul inutile.',
            },
            {
              id: 'q3', points: 3,
              enonce: '$f(x)=e^{3x}$',
              corrige: 'Forme $e^{ax}$ : $F(x)=\\dfrac{1}{3}e^{3x}+k$.',
            },
            {
              id: 'q4', points: 2,
              enonce: '$f(x)=\\cos(2x)$',
              corrige: '$F(x)=\\dfrac{1}{2}\\sin(2x)+k$.',
            },
          ],
        },
        {
          id: 'd-moyen-ex2',
          titre: 'Exercice 2',
          points: 9,
          consigne: 'On considère la fonction $f$ définie sur $[1\\,;2]$ par $f(x)=x^{2}$.',
          questions: [
            { id: 'q1', enonce: 'Calculer $\\displaystyle\\int_{1}^{2} x^{2}\\,\\mathrm{d}x$.', points: 4, corrige: '$\\Big[\\dfrac{x^{3}}{3}\\Big]_{1}^{2}=\\dfrac{8}{3}-\\dfrac{1}{3}=\\mathbf{\\dfrac{7}{3}}$.' },
            { id: 'q2', enonce: 'En déduire la valeur moyenne $\\mu$ de $f$ sur $[1\\,;2]$.', points: 5, corrige: '$\\mu=\\dfrac{1}{2-1}\\displaystyle\\int_{1}^{2}x^{2}\\,\\mathrm{d}x=\\mathbf{\\dfrac{7}{3}}$.', notePiege: 'Ne pas oublier le facteur $\\dfrac{1}{b-a}$ — ici $b-a=1$.' },
          ],
        },
      ],
    },

    BAC: {
      level: 'BAC',
      dureeMin: 120,
      description: 'Intégration par parties, aire entre deux courbes & volume de révolution.',
      exercices: [
        {
          id: 'd-bac-ex1',
          titre: 'Exercice 1',
          points: 11,
          consigne: 'On pose $I=\\displaystyle\\int_{0}^{1} x\\,e^{x}\\,\\mathrm{d}x$.',
          questions: [
            { id: 'q1', enonce: 'Calculer $I$ à l\'aide d\'une intégration par parties.', points: 6, corrige: 'On pose $u=x,\\ v\'=e^{x}$, donc $u\'=1,\\ v=e^{x}$. $I=\\big[x\\,e^{x}\\big]_{0}^{1}-\\displaystyle\\int_{0}^{1}e^{x}\\,\\mathrm{d}x=e-\\big[e^{x}\\big]_{0}^{1}=e-(e-1)=\\mathbf{1}$.', notePiege: 'Bien choisir $u=x$ (qui se simplifie en dérivant) et $v\'=e^{x}$.' },
            { id: 'q2', enonce: 'Interpréter $I$ comme une aire.', points: 5, corrige: 'Sur $[0\\,;1]$, $x\\,e^{x}\\ge 0$ : $I=1$ est l\'aire, en unités d\'aire, du domaine compris entre la courbe de $x\\mapsto x e^{x}$, l\'axe des abscisses et les droites $x=0$ et $x=1$.' },
          ],
        },
        {
          id: 'd-bac-ex2',
          titre: 'Exercice 2',
          points: 9,
          consigne: 'Le plan est rapporté à un repère orthonormé. On travaille sur $[0\\,;1]$.',
          questions: [
            { id: 'q1', enonce: 'Calculer l\'aire $\\mathcal{A}$ du domaine compris entre les courbes de $f(x)=x$ et $g(x)=x^{2}$.', points: 5, corrige: 'Sur $[0\\,;1]$, $x\\ge x^{2}$, donc $\\mathcal{A}=\\displaystyle\\int_{0}^{1}(x-x^{2})\\,\\mathrm{d}x=\\Big[\\dfrac{x^{2}}{2}-\\dfrac{x^{3}}{3}\\Big]_{0}^{1}=\\dfrac{1}{2}-\\dfrac{1}{3}=\\mathbf{\\dfrac{1}{6}}$ u.a.', notePiege: 'Intégrer la différence « courbe du haut moins courbe du bas » : ici $x-x^{2}$.' },
            { id: 'q2', enonce: 'Calculer le volume $V$ du solide engendré par la rotation autour de l\'axe $(Ox)$ de la courbe de $h(x)=\\sqrt{x}$.', points: 4, corrige: '$V=\\pi\\displaystyle\\int_{0}^{1}\\big(\\sqrt{x}\\big)^{2}\\,\\mathrm{d}x=\\pi\\displaystyle\\int_{0}^{1}x\\,\\mathrm{d}x=\\pi\\Big[\\dfrac{x^{2}}{2}\\Big]_{0}^{1}=\\mathbf{\\dfrac{\\pi}{2}}$ u.v.' },
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
      description: 'Primitives de référence & théorème fondamental.',
      questions: [
        { id: 'b1', competence: 'formule', prompt: 'Une primitive de $x^{n}$ (avec $n\\neq -1$) est :', options: [{ id: 'A', text: '$\\dfrac{x^{n+1}}{n+1}$' }, { id: 'B', text: '$n x^{n-1}$' }, { id: 'C', text: '$\\dfrac{x^{n-1}}{n-1}$' }, { id: 'D', text: '$x^{n+1}$' }], correct: 'A', explication: 'Primitive de référence : $\\displaystyle\\int x^{n}\\,\\mathrm{d}x=\\dfrac{x^{n+1}}{n+1}+k$.' },
        { id: 'b2', competence: 'formule', prompt: 'Une primitive de $\\cos x$ est :', options: [{ id: 'A', text: '$-\\sin x$' }, { id: 'B', text: '$\\sin x$' }, { id: 'C', text: '$-\\cos x$' }, { id: 'D', text: '$\\tan x$' }], correct: 'B', explication: '$(\\sin x)\'=\\cos x$, donc $\\sin x$ est une primitive de $\\cos x$.' },
        { id: 'b3', competence: 'methode', prompt: 'Si $F$ est une primitive de $f$, alors $\\displaystyle\\int_{a}^{b} f(x)\\,\\mathrm{d}x$ vaut :', options: [{ id: 'A', text: '$F(a)-F(b)$' }, { id: 'B', text: '$f(b)-f(a)$' }, { id: 'C', text: '$F(b)-F(a)$' }, { id: 'D', text: '$F(b)+F(a)$' }], correct: 'C', explication: 'Théorème fondamental : $\\displaystyle\\int_{a}^{b} f=F(b)-F(a)$.' },
        { id: 'b4', competence: 'methode', prompt: 'Deux primitives d\'une même fonction diffèrent :', options: [{ id: 'A', text: 'd\'un facteur $x$' }, { id: 'B', text: 'd\'une constante' }, { id: 'C', text: 'de rien (elles sont égales)' }, { id: 'D', text: 'd\'un facteur $2$' }], correct: 'B', explication: 'Toutes les primitives de $f$ sur un intervalle diffèrent d\'une constante additive.' },
        { id: 'b5', competence: 'formule', prompt: 'Une primitive de $e^{x}$ est :', options: [{ id: 'A', text: '$e^{x}$' }, { id: 'B', text: '$\\dfrac{e^{x}}{x}$' }, { id: 'C', text: '$x e^{x}$' }, { id: 'D', text: '$\\ln x$' }], correct: 'A', explication: '$e^{x}$ est sa propre primitive (et sa propre dérivée).' },
        { id: 'b6', competence: 'formule', prompt: 'Une primitive de $\\dfrac{1}{x}$ sur $]0\\,;+\\infty[$ est :', options: [{ id: 'A', text: '$-\\dfrac{1}{x^{2}}$' }, { id: 'B', text: '$\\ln x$' }, { id: 'C', text: '$x\\ln x$' }, { id: 'D', text: '$\\dfrac{1}{x^{2}}$' }], correct: 'B', explication: '$(\\ln x)\'=\\dfrac{1}{x}$, donc $\\ln x$ est une primitive de $\\dfrac{1}{x}$ sur $]0\\,;+\\infty[$.' },
      ],
    },

    MOYEN: {
      level: 'MOYEN',
      dureeMin: 20,
      description: 'Formes composées, valeur moyenne & linéarité.',
      questions: [
        { id: 'm1', competence: 'methode', prompt: 'Une primitive de $u\'u^{n}$ (avec $n\\neq -1$) est :', options: [{ id: 'A', text: '$\\dfrac{u^{n+1}}{n+1}$' }, { id: 'B', text: '$n u^{n-1}$' }, { id: 'C', text: '$u\' \\dfrac{u^{n+1}}{n+1}$' }, { id: 'D', text: '$\\dfrac{u^{n}}{n}$' }], correct: 'A', explication: 'Forme composée : $\\displaystyle\\int u\'u^{n}=\\dfrac{u^{n+1}}{n+1}+k$.' },
        { id: 'm2', competence: 'methode', prompt: 'Une primitive de $\\dfrac{u\'}{u}$ (avec $u>0$) est :', options: [{ id: 'A', text: '$\\dfrac{1}{u}$' }, { id: 'B', text: '$\\ln u$' }, { id: 'C', text: '$-\\dfrac{u\'}{u^{2}}$' }, { id: 'D', text: '$u\\ln u$' }], correct: 'B', explication: 'Forme $\\dfrac{u\'}{u}$ : sa primitive est $\\ln|u|$ (ici $\\ln u$ car $u>0$).' },
        { id: 'm3', competence: 'formule', prompt: 'Une primitive de $e^{ax}$ (avec $a\\neq 0$) est :', options: [{ id: 'A', text: '$a e^{ax}$' }, { id: 'B', text: '$\\dfrac{1}{a}e^{ax}$' }, { id: 'C', text: '$e^{ax}$' }, { id: 'D', text: '$\\dfrac{e^{ax}}{x}$' }], correct: 'B', explication: '$\\Big(\\dfrac{1}{a}e^{ax}\\Big)\'=e^{ax}$.' },
        { id: 'm4', competence: 'formule', prompt: '$\\displaystyle\\int_{0}^{1} x^{2}\\,\\mathrm{d}x$ vaut :', options: [{ id: 'A', text: '$\\dfrac{1}{3}$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$\\dfrac{1}{2}$' }, { id: 'D', text: '$2$' }], correct: 'A', explication: '$\\Big[\\dfrac{x^{3}}{3}\\Big]_{0}^{1}=\\dfrac{1}{3}$.' },
        { id: 'm5', competence: 'methode', prompt: 'La valeur moyenne de $f$ sur $[a\\,;b]$ est :', options: [{ id: 'A', text: '$\\displaystyle\\int_{a}^{b} f$' }, { id: 'B', text: '$\\dfrac{1}{b-a}\\displaystyle\\int_{a}^{b} f$' }, { id: 'C', text: '$\\dfrac{f(a)+f(b)}{2}$' }, { id: 'D', text: '$(b-a)\\displaystyle\\int_{a}^{b} f$' }], correct: 'B', explication: 'Valeur moyenne : $\\mu=\\dfrac{1}{b-a}\\displaystyle\\int_{a}^{b} f(x)\\,\\mathrm{d}x$.' },
        { id: 'm6', competence: 'formule', prompt: 'Une primitive de $\\sin x$ est :', options: [{ id: 'A', text: '$\\cos x$' }, { id: 'B', text: '$-\\cos x$' }, { id: 'C', text: '$-\\sin x$' }, { id: 'D', text: '$\\sin x$' }], correct: 'B', explication: '$(-\\cos x)\'=\\sin x$, donc $-\\cos x$ est une primitive de $\\sin x$.' },
        { id: 'm7', competence: 'methode', prompt: 'La linéarité de l\'intégrale donne $\\displaystyle\\int(\\alpha f+\\beta g)$ égal à :', options: [{ id: 'A', text: '$\\alpha\\beta\\displaystyle\\int fg$' }, { id: 'B', text: '$\\alpha\\displaystyle\\int f+\\beta\\displaystyle\\int g$' }, { id: 'C', text: '$\\displaystyle\\int f+\\displaystyle\\int g$' }, { id: 'D', text: '$\\alpha\\displaystyle\\int f\\times\\beta\\displaystyle\\int g$' }], correct: 'B', explication: 'L\'intégrale est linéaire : $\\displaystyle\\int(\\alpha f+\\beta g)=\\alpha\\displaystyle\\int f+\\beta\\displaystyle\\int g$.' },
        { id: 'm8', competence: 'formule', prompt: '$\\displaystyle\\int_{1}^{e} \\dfrac{1}{x}\\,\\mathrm{d}x$ vaut :', options: [{ id: 'A', text: '$e$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$e-1$' }, { id: 'D', text: '$0$' }], correct: 'B', explication: '$\\big[\\ln x\\big]_{1}^{e}=\\ln e-\\ln 1=1-0=1$.' },
      ],
    },

    BAC: {
      level: 'BAC',
      dureeMin: 30,
      description: 'IPP, aires entre courbes, volumes & signe de l\'intégrale.',
      questions: [
        { id: 'x1', competence: 'methode', prompt: 'La formule d\'intégration par parties est :', options: [{ id: 'A', text: '$\\displaystyle\\int u v\' = uv - \\displaystyle\\int u\' v$' }, { id: 'B', text: '$\\displaystyle\\int u v\' = u\'v - \\displaystyle\\int u v$' }, { id: 'C', text: '$\\displaystyle\\int u v\' = uv + \\displaystyle\\int u\' v$' }, { id: 'D', text: '$\\displaystyle\\int u v\' = u\'v\'$' }], correct: 'A', explication: 'IPP : $\\displaystyle\\int u v\' = uv - \\displaystyle\\int u\' v$.' },
        { id: 'x2', competence: 'formule', prompt: '$\\displaystyle\\int_{0}^{1} x\\,e^{x}\\,\\mathrm{d}x$ vaut :', options: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$e$' }, { id: 'C', text: '$e-1$' }, { id: 'D', text: '$0$' }], correct: 'A', explication: 'IPP avec $u=x,\\ v\'=e^{x}$ : $\\big[xe^{x}\\big]_{0}^{1}-\\displaystyle\\int_{0}^{1}e^{x}=e-(e-1)=1$.' },
        { id: 'x3', competence: 'methode', prompt: 'L\'aire entre deux courbes de $f$ et $g$ (avec $f\\ge g$) sur $[a\\,;b]$ vaut :', options: [{ id: 'A', text: '$\\displaystyle\\int_{a}^{b}(f-g)$' }, { id: 'B', text: '$\\displaystyle\\int_{a}^{b}(g-f)$' }, { id: 'C', text: '$\\displaystyle\\int_{a}^{b} fg$' }, { id: 'D', text: '$\\displaystyle\\int_{a}^{b}(f+g)$' }], correct: 'A', explication: 'Aire $=\\displaystyle\\int_{a}^{b}\\big(\\text{haut}-\\text{bas}\\big)=\\displaystyle\\int_{a}^{b}(f-g)$.' },
        { id: 'x4', competence: 'formule', prompt: 'L\'aire entre $y=x$ et $y=x^{2}$ sur $[0\\,;1]$ vaut :', options: [{ id: 'A', text: '$\\dfrac{1}{6}$' }, { id: 'B', text: '$\\dfrac{1}{2}$' }, { id: 'C', text: '$\\dfrac{1}{3}$' }, { id: 'D', text: '$1$' }], correct: 'A', explication: '$\\displaystyle\\int_{0}^{1}(x-x^{2})=\\dfrac{1}{2}-\\dfrac{1}{3}=\\dfrac{1}{6}$.' },
        { id: 'x5', competence: 'methode', prompt: 'Le volume engendré par la rotation de $y=f(x)$ autour de $(Ox)$ sur $[a\\,;b]$ est :', options: [{ id: 'A', text: '$\\pi\\displaystyle\\int_{a}^{b} f(x)\\,\\mathrm{d}x$' }, { id: 'B', text: '$\\pi\\displaystyle\\int_{a}^{b} f(x)^{2}\\,\\mathrm{d}x$' }, { id: 'C', text: '$2\\pi\\displaystyle\\int_{a}^{b} f(x)\\,\\mathrm{d}x$' }, { id: 'D', text: '$\\displaystyle\\int_{a}^{b} f(x)^{2}\\,\\mathrm{d}x$' }], correct: 'B', explication: 'Volume de révolution autour de $(Ox)$ : $V=\\pi\\displaystyle\\int_{a}^{b}\\big(f(x)\\big)^{2}\\,\\mathrm{d}x$.' },
        { id: 'x6', competence: 'formule', prompt: 'Le volume engendré par $y=\\sqrt{x}$ tournant autour de $(Ox)$ sur $[0\\,;1]$ vaut :', options: [{ id: 'A', text: '$\\dfrac{\\pi}{2}$' }, { id: 'B', text: '$\\pi$' }, { id: 'C', text: '$\\dfrac{\\pi}{3}$' }, { id: 'D', text: '$\\dfrac{1}{2}$' }], correct: 'A', explication: '$V=\\pi\\displaystyle\\int_{0}^{1}x\\,\\mathrm{d}x=\\pi\\Big[\\dfrac{x^{2}}{2}\\Big]_{0}^{1}=\\dfrac{\\pi}{2}$.' },
        { id: 'x7', competence: 'methode', prompt: 'Si $f\\ge 0$ sur $[a\\,;b]$, alors $\\displaystyle\\int_{a}^{b} f$ représente :', options: [{ id: 'A', text: 'la pente de $f$' }, { id: 'B', text: 'l\'aire sous la courbe' }, { id: 'C', text: 'la valeur $f(b)$' }, { id: 'D', text: 'une longueur' }], correct: 'B', explication: 'Pour $f\\ge 0$, l\'intégrale est l\'aire du domaine sous la courbe, en unités d\'aire.' },
        { id: 'x8', competence: 'formule', prompt: '$\\displaystyle\\int_{0}^{\\frac{\\pi}{2}} \\cos x\\,\\mathrm{d}x$ vaut :', options: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$\\dfrac{\\pi}{2}$' }, { id: 'D', text: '$-1$' }], correct: 'B', explication: '$\\big[\\sin x\\big]_{0}^{\\frac{\\pi}{2}}=\\sin\\dfrac{\\pi}{2}-\\sin 0=1$.' },
        { id: 'x9', competence: 'methode', prompt: 'Si $f\\le 0$ sur $[a\\,;b]$ (avec $a<b$), alors $\\displaystyle\\int_{a}^{b} f$ est :', options: [{ id: 'A', text: 'positive' }, { id: 'B', text: 'négative ou nulle' }, { id: 'C', text: 'toujours nulle' }, { id: 'D', text: 'impossible à signer' }], correct: 'B', explication: 'La positivité de l\'intégrale : $f\\le 0$ sur $[a\\,;b]$ entraîne $\\displaystyle\\int_{a}^{b} f\\le 0$.' },
        { id: 'x10', competence: 'formule', prompt: 'La valeur moyenne de $f(x)=x$ sur $[0\\,;2]$ vaut :', options: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$\\dfrac{1}{2}$' }, { id: 'D', text: '$4$' }], correct: 'A', explication: '$\\mu=\\dfrac{1}{2}\\displaystyle\\int_{0}^{2}x\\,\\mathrm{d}x=\\dfrac{1}{2}\\Big[\\dfrac{x^{2}}{2}\\Big]_{0}^{2}=\\dfrac{1}{2}\\times 2=1$.' },
      ],
    },
  },
};

export default examT3Primitives;
