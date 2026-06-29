// ============================================================================
// Données d'examen — Tome 2 · Les Dérivées (Série D).
// Modules couverts : nombre dérivé, fonction dérivée, règles de calcul,
// dérivée & variations, équation de la tangente, IAF & dérivée réciproque.
// ============================================================================

import type { ExamData } from '../../types/examen';

export const examT2Derivees: ExamData = {
  id: 't2-derivees',
  tome: 'Tome 2 — Les Dérivées',
  matiere: 'Mathématiques · Série D',
  sousTitre: 'Dérivation & variations',
  moduleRedirect: { label: 'Réviser le Module 3 — Les Règles de Calcul', courseId: 't2-derivees' },

  // ── DEVOIR SURVEILLÉ ──────────────────────────────────────────────────────
  devoir: {
    BASE: {
      level: 'BASE',
      dureeMin: 30,
      description: 'Dérivées usuelles & nombre dérivé — application immédiate du cours.',
      exercices: [
        {
          id: 'd-base-ex1',
          titre: 'Exercice 1',
          points: 20,
          consigne: 'Dériver chaque fonction sur son ensemble de définition, puis répondre à la dernière question.',
          questions: [
            { id: 'q1', enonce: 'Dériver $f(x)=4x^{3}-2x^{2}+5$.', points: 5, corrige: 'On dérive terme à terme : $f\'(x)=\\mathbf{12x^{2}-4x}$.' },
            { id: 'q2', enonce: 'Dériver $f(x)=\\dfrac{1}{x}$ sur $]0\\,;+\\infty[$.', points: 5, corrige: '$\\dfrac{1}{x}=x^{-1}$, donc $f\'(x)=-x^{-2}=\\mathbf{-\\dfrac{1}{x^{2}}}$.' },
            { id: 'q3', enonce: 'Dériver $f(x)=\\sqrt{x}$ sur $]0\\,;+\\infty[$.', points: 5, corrige: 'Dérivée de référence : $f\'(x)=\\mathbf{\\dfrac{1}{2\\sqrt{x}}}$.', notePiege: 'Formule de cours à connaître par cœur.' },
            { id: 'q4', enonce: 'Pour $f(x)=x^{2}$, calculer le nombre dérivé $f\'(3)$.', points: 5, corrige: '$f\'(x)=2x$, donc $f\'(3)=\\mathbf{6}$. C\'est le coefficient directeur de la tangente en $x=3$.' },
          ],
        },
      ],
    },

    MOYEN: {
      level: 'MOYEN',
      dureeMin: 60,
      description: 'Produit, quotient, fonction composée + tangente & variations.',
      exercices: [
        {
          id: 'd-moyen-ex1',
          titre: 'Exercice 1',
          points: 11,
          consigne: 'Calculer la dérivée de chacune des fonctions suivantes (préciser la règle utilisée) :',
          questions: [
            {
              id: 'q1', points: 3,
              enonce: '$f(x)=(2x+1)(x^{2}-3)$',
              corrige: 'Règle du produit $(uv)\'=u\'v+uv\'$ avec $u=2x+1,\\ v=x^{2}-3$ : $f\'(x)=2(x^{2}-3)+(2x+1)(2x)=\\mathbf{6x^{2}+2x-6}$.',
            },
            {
              id: 'q2', points: 3,
              enonce: '$f(x)=\\dfrac{3x-1}{x+2}$',
              corrige: 'Règle du quotient : $f\'(x)=\\dfrac{3(x+2)-(3x-1)}{(x+2)^{2}}=\\mathbf{\\dfrac{7}{(x+2)^{2}}}$.',
              notePiege: 'Au numérateur c\'est $u\'v-uv\'$ : l\'ordre compte, sinon demi-barème.',
            },
            {
              id: 'q3', points: 3,
              enonce: '$f(x)=(x^{2}+1)^{5}$',
              corrige: 'Dérivée composée $(u^{n})\'=n\\,u\'\\,u^{n-1}$ avec $u=x^{2}+1$ : $f\'(x)=5\\times 2x\\times(x^{2}+1)^{4}=\\mathbf{10x(x^{2}+1)^{4}}$.',
            },
            {
              id: 'q4', points: 2,
              enonce: '$f(x)=\\sqrt{2x+1}$',
              corrige: '$(\\sqrt{u})\'=\\dfrac{u\'}{2\\sqrt{u}}$ avec $u=2x+1$ : $f\'(x)=\\dfrac{2}{2\\sqrt{2x+1}}=\\mathbf{\\dfrac{1}{\\sqrt{2x+1}}}$.',
            },
          ],
        },
        {
          id: 'd-moyen-ex2',
          titre: 'Exercice 2',
          points: 9,
          consigne: 'On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x)=x^{3}-3x+2$.',
          questions: [
            { id: 'q1', enonce: 'Calculer $f\'(x)$ et la factoriser.', points: 3, corrige: '$f\'(x)=3x^{2}-3=3(x^{2}-1)=\\mathbf{3(x-1)(x+1)}$.' },
            { id: 'q2', enonce: 'Déterminer l\'équation de la tangente $(T)$ à la courbe au point d\'abscisse $x_0=2$.', points: 3, corrige: '$f(2)=4$ et $f\'(2)=9$. $(T):y=f\'(2)(x-2)+f(2)=9(x-2)+4=\\mathbf{9x-14}$.' },
            { id: 'q3', enonce: 'Étudier le signe de $f\'(x)$ et en déduire les variations de $f$.', points: 3, corrige: '$f\'>0$ sur $]-\\infty;-1[\\cup]1;+\\infty[$ (croissante) et $f\'<0$ sur $]-1;1[$ (décroissante). Maximum local $f(-1)=4$, minimum local $f(1)=0$.', notePiege: 'Le tableau de variations complet (avec les extremums) fait partie du barème.' },
          ],
        },
      ],
    },

    BAC: {
      level: 'BAC',
      dureeMin: 120,
      description: 'Étude de fonction complète + Inégalité des Accroissements Finis.',
      exercices: [
        {
          id: 'd-bac-ex1',
          titre: 'Exercice 1',
          points: 11,
          consigne: 'Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x)=x^{3}-3x^{2}+4$.',
          questions: [
            { id: 'q1', enonce: 'Calculer $f\'(x)$ et la factoriser.', points: 3, corrige: '$f\'(x)=3x^{2}-6x=\\mathbf{3x(x-2)}$.' },
            { id: 'q2', enonce: 'Dresser le tableau de variations de $f$.', points: 4, corrige: '$f\'>0$ sur $]-\\infty;0[\\cup]2;+\\infty[$, $f\'<0$ sur $]0;2[$. Maximum local $f(0)=4$ ; minimum local $f(2)=0$.', notePiege: 'Les limites en $\\pm\\infty$ ($-\\infty$ et $+\\infty$) complètent le tableau.' },
            { id: 'q3', enonce: 'Déterminer l\'équation de la tangente à la courbe au point d\'abscisse $1$.', points: 4, corrige: '$f(1)=2$ et $f\'(1)=-3$ : $(T):y=-3(x-1)+2=\\mathbf{-3x+5}$.' },
          ],
        },
        {
          id: 'd-bac-ex2',
          titre: 'Exercice 2',
          points: 9,
          consigne: 'On rappelle l\'Inégalité des Accroissements Finis (IAF) et on pose $f(x)=\\sin x$ sur $\\mathbb{R}$.',
          questions: [
            { id: 'q1', enonce: 'Montrer que pour tous réels $a$ et $b$ : $|\\sin a-\\sin b|\\le |a-b|$.', points: 5, corrige: '$f(x)=\\sin x$ est dérivable, $f\'(x)=\\cos x$ et $|\\cos x|\\le 1$ sur $\\mathbb{R}$. L\'IAF donne $|\\sin a-\\sin b|\\le 1\\times|a-b|=\\mathbf{|a-b|}$.', notePiege: 'Le point clé du barème : justifier $|f\'(x)|\\le 1$ avant d\'appliquer l\'IAF.' },
            { id: 'q2', enonce: 'En déduire que pour tout réel $x$ : $|\\sin x|\\le |x|$.', points: 4, corrige: 'On applique le résultat précédent avec $b=0$ : $|\\sin x-\\sin 0|=|\\sin x|\\le|x-0|=\\mathbf{|x|}$.' },
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
      description: 'Dérivées usuelles & lecture du nombre dérivé.',
      questions: [
        { id: 'b1', competence: 'formule', prompt: 'La dérivée de $x^{5}$ est :', options: [{ id: 'A', text: '$5x^{4}$' }, { id: 'B', text: '$x^{4}$' }, { id: 'C', text: '$5x^{6}$' }, { id: 'D', text: '$4x^{5}$' }], correct: 'A', explication: '$(x^{n})\'=n\\,x^{n-1}$, donc $(x^{5})\'=5x^{4}$.' },
        { id: 'b2', competence: 'formule', prompt: 'La dérivée de $\\sqrt{x}$ sur $]0\\,;+\\infty[$ est :', options: [{ id: 'A', text: '$2\\sqrt{x}$' }, { id: 'B', text: '$\\dfrac{1}{2\\sqrt{x}}$' }, { id: 'C', text: '$\\dfrac{1}{\\sqrt{x}}$' }, { id: 'D', text: '$\\dfrac{\\sqrt{x}}{2}$' }], correct: 'B', explication: 'Dérivée de référence : $(\\sqrt{x})\'=\\dfrac{1}{2\\sqrt{x}}$.' },
        { id: 'b3', competence: 'formule', prompt: 'La dérivée de $\\dfrac{1}{x}$ est :', options: [{ id: 'A', text: '$\\dfrac{1}{x^{2}}$' }, { id: 'B', text: '$-\\dfrac{1}{x}$' }, { id: 'C', text: '$-\\dfrac{1}{x^{2}}$' }, { id: 'D', text: '$\\ln x$' }], correct: 'C', explication: '$\\dfrac{1}{x}=x^{-1}$, donc sa dérivée est $-x^{-2}=-\\dfrac{1}{x^{2}}$.' },
        { id: 'b4', competence: 'methode', prompt: 'Le nombre dérivé $f\'(a)$ représente :', options: [{ id: 'A', text: 'la valeur $f(a)$' }, { id: 'B', text: 'le coefficient directeur de la tangente en $a$' }, { id: 'C', text: 'l\'aire sous la courbe' }, { id: 'D', text: 'l\'ordonnée à l\'origine' }], correct: 'B', explication: '$f\'(a)$ est la pente (coefficient directeur) de la tangente à la courbe au point d\'abscisse $a$.' },
        { id: 'b5', competence: 'formule', prompt: 'La dérivée d\'une fonction constante $f(x)=k$ est :', options: [{ id: 'A', text: '$k$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$x$' }, { id: 'D', text: '$0$' }], correct: 'D', explication: 'Une constante ne varie pas : sa dérivée est nulle.' },
        { id: 'b6', competence: 'methode', prompt: 'Pour dériver une somme $f+g$, on :', options: [{ id: 'A', text: 'dérive terme à terme : $f\'+g\'$' }, { id: 'B', text: 'multiplie $f\'\\times g\'$' }, { id: 'C', text: 'dérive seulement le premier terme' }, { id: 'D', text: 'utilise le quotient' }], correct: 'A', explication: 'La dérivation est linéaire : $(f+g)\'=f\'+g\'$.' },
      ],
    },

    MOYEN: {
      level: 'MOYEN',
      dureeMin: 20,
      description: 'Règles produit / quotient / composée, tangente & variations.',
      questions: [
        { id: 'm1', competence: 'methode', prompt: 'La dérivée d\'un produit $(uv)\'$ vaut :', options: [{ id: 'A', text: '$u\'v\'$' }, { id: 'B', text: '$u\'v+uv\'$' }, { id: 'C', text: '$u\'v-uv\'$' }, { id: 'D', text: '$\\dfrac{u\'}{v\'}$' }], correct: 'B', explication: 'Règle du produit : $(uv)\'=u\'v+uv\'$.' },
        { id: 'm2', competence: 'methode', prompt: 'La dérivée d\'un quotient $\\left(\\dfrac{u}{v}\\right)\'$ vaut :', options: [{ id: 'A', text: '$\\dfrac{u\'v+uv\'}{v^{2}}$' }, { id: 'B', text: '$\\dfrac{u\'}{v\'}$' }, { id: 'C', text: '$\\dfrac{u\'v-uv\'}{v^{2}}$' }, { id: 'D', text: '$\\dfrac{uv\'-u\'v}{v^{2}}$' }], correct: 'C', explication: 'Règle du quotient : $\\left(\\dfrac{u}{v}\\right)\'=\\dfrac{u\'v-uv\'}{v^{2}}$.' },
        { id: 'm3', competence: 'methode', prompt: 'La dérivée de $u^{n}$ (forme composée) vaut :', options: [{ id: 'A', text: '$n\\,u^{n-1}$' }, { id: 'B', text: '$n\\,u\'\\,u^{n-1}$' }, { id: 'C', text: '$u\'\\,u^{n-1}$' }, { id: 'D', text: '$n\\,u\'^{\\,n-1}$' }], correct: 'B', explication: 'Dérivée composée : $(u^{n})\'=n\\,u\'\\,u^{n-1}$ — ne pas oublier le facteur $u\'$.' },
        { id: 'm4', competence: 'formule', prompt: 'La dérivée de $(x^{2}+1)^{3}$ est :', formula: '$f(x)=(x^{2}+1)^{3}$', options: [{ id: 'A', text: '$3(x^{2}+1)^{2}$' }, { id: 'B', text: '$6x(x^{2}+1)^{2}$' }, { id: 'C', text: '$2x(x^{2}+1)^{3}$' }, { id: 'D', text: '$6x(x^{2}+1)^{3}$' }], correct: 'B', explication: '$(u^{3})\'=3u\'u^{2}=3\\times 2x\\times(x^{2}+1)^{2}=6x(x^{2}+1)^{2}$.' },
        { id: 'm5', competence: 'formule', prompt: 'L\'équation de la tangente en $a$ est :', options: [{ id: 'A', text: '$y=f\'(a)(x-a)+f(a)$' }, { id: 'B', text: '$y=f(a)(x-a)+f\'(a)$' }, { id: 'C', text: '$y=f\'(a)\\,x+f(a)$' }, { id: 'D', text: '$y=f\'(a)(x+a)-f(a)$' }], correct: 'A', explication: 'Tangente en $a$ : $y=f\'(a)(x-a)+f(a)$.' },
        { id: 'm6', competence: 'methode', prompt: 'Si $f\'(x)>0$ sur un intervalle $I$, alors sur $I$ :', options: [{ id: 'A', text: '$f$ est décroissante' }, { id: 'B', text: '$f$ est constante' }, { id: 'C', text: '$f$ est croissante' }, { id: 'D', text: '$f$ admet un maximum' }], correct: 'C', explication: 'Le signe de $f\'$ donne le sens de variation : $f\'>0\\Rightarrow f$ strictement croissante.' },
        { id: 'm7', competence: 'formule', prompt: 'La dérivée de $\\dfrac{2x-1}{x+1}$ est :', options: [{ id: 'A', text: '$\\dfrac{3}{(x+1)^{2}}$' }, { id: 'B', text: '$\\dfrac{1}{(x+1)^{2}}$' }, { id: 'C', text: '$\\dfrac{-3}{(x+1)^{2}}$' }, { id: 'D', text: '$2$' }], correct: 'A', explication: '$\\dfrac{2(x+1)-(2x-1)}{(x+1)^{2}}=\\dfrac{3}{(x+1)^{2}}$.' },
        { id: 'm8', competence: 'methode', prompt: 'En un extremum local situé à l\'intérieur de l\'intervalle, $f\'(x)$ :', options: [{ id: 'A', text: 'est strictement positive' }, { id: 'B', text: 's\'annule en changeant de signe' }, { id: 'C', text: 'est constante' }, { id: 'D', text: 'n\'existe pas' }], correct: 'B', explication: 'Un extremum local correspond à un $f\'$ qui s\'annule en changeant de signe.' },
      ],
    },

    BAC: {
      level: 'BAC',
      dureeMin: 30,
      description: 'Composées avec racines, IAF, tangentes & dérivée réciproque.',
      questions: [
        { id: 'x1', competence: 'methode', prompt: 'La dérivée de $\\sqrt{u}$ vaut :', options: [{ id: 'A', text: '$\\dfrac{1}{2\\sqrt{u}}$' }, { id: 'B', text: '$\\dfrac{u\'}{2\\sqrt{u}}$' }, { id: 'C', text: '$\\dfrac{u\'}{\\sqrt{u}}$' }, { id: 'D', text: '$2u\'\\sqrt{u}$' }], correct: 'B', explication: '$(\\sqrt{u})\'=\\dfrac{u\'}{2\\sqrt{u}}$ — le facteur $u\'$ est indispensable.' },
        { id: 'x2', competence: 'formule', prompt: 'La dérivée de $\\sqrt{x^{2}+1}$ est :', options: [{ id: 'A', text: '$\\dfrac{x}{\\sqrt{x^{2}+1}}$' }, { id: 'B', text: '$\\dfrac{1}{2\\sqrt{x^{2}+1}}$' }, { id: 'C', text: '$\\dfrac{2x}{\\sqrt{x^{2}+1}}$' }, { id: 'D', text: '$\\dfrac{x}{2\\sqrt{x^{2}+1}}$' }], correct: 'A', explication: '$\\dfrac{2x}{2\\sqrt{x^{2}+1}}=\\dfrac{x}{\\sqrt{x^{2}+1}}$.' },
        { id: 'x3', competence: 'methode', prompt: 'L\'IAF : si $|f\'(x)|\\le k$ sur $I$, alors pour $a,b\\in I$ :', options: [{ id: 'A', text: '$|f(a)-f(b)|\\le k|a-b|$' }, { id: 'B', text: '$|f(a)-f(b)|\\ge k|a-b|$' }, { id: 'C', text: '$|f(a)-f(b)|=k$' }, { id: 'D', text: '$f(a)-f(b)=k(a-b)$' }], correct: 'A', explication: 'Inégalité des accroissements finis : $|f(a)-f(b)|\\le k|a-b|$.' },
        { id: 'x4', competence: 'formule', prompt: 'Pour $f(x)=x^{3}-3x$, $f\'$ s\'annule en :', options: [{ id: 'A', text: '$x=0$ uniquement' }, { id: 'B', text: '$x=\\pm 1$' }, { id: 'C', text: '$x=\\pm 3$' }, { id: 'D', text: '$x=3$' }], correct: 'B', explication: '$f\'(x)=3x^{2}-3=3(x-1)(x+1)$ s\'annule en $x=1$ et $x=-1$.' },
        { id: 'x5', competence: 'methode', prompt: 'Une tangente est horizontale au point d\'abscisse $a$ si et seulement si :', options: [{ id: 'A', text: '$f(a)=0$' }, { id: 'B', text: '$f\'(a)=0$' }, { id: 'C', text: '$f\'(a)=1$' }, { id: 'D', text: '$f\'\'(a)=0$' }], correct: 'B', explication: 'Pente nulle $\\Leftrightarrow f\'(a)=0$ : la tangente est horizontale.' },
        { id: 'x6', competence: 'formule', prompt: 'Pour $f(x)=\\sin x$, le nombre dérivé $f\'(0)$ vaut :', options: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$-1$' }, { id: 'D', text: '$\\pi$' }], correct: 'B', explication: '$f\'(x)=\\cos x$ donc $f\'(0)=\\cos 0=1$.' },
        { id: 'x7', competence: 'methode', prompt: 'Si $g$ est la réciproque de $f$ et $y=f(x)$, alors $g\'(y)$ vaut :', options: [{ id: 'A', text: '$f\'(x)$' }, { id: 'B', text: '$\\dfrac{1}{f\'(x)}$' }, { id: 'C', text: '$-f\'(x)$' }, { id: 'D', text: '$\\dfrac{1}{f(x)}$' }], correct: 'B', explication: 'Dérivée de la réciproque : $g\'(y)=\\dfrac{1}{f\'(x)}$ avec $y=f(x)$ et $f\'(x)\\neq 0$.' },
        { id: 'x8', competence: 'formule', prompt: 'La dérivée de $\\cos x$ est :', options: [{ id: 'A', text: '$\\sin x$' }, { id: 'B', text: '$-\\sin x$' }, { id: 'C', text: '$-\\cos x$' }, { id: 'D', text: '$\\tan x$' }], correct: 'B', explication: '$(\\cos x)\'=-\\sin x$.' },
        { id: 'x9', competence: 'methode', prompt: 'Pour étudier la position d\'une courbe par rapport à sa tangente $(T)$, on étudie le signe de :', options: [{ id: 'A', text: '$f\'(x)$' }, { id: 'B', text: '$f(x)-T(x)$' }, { id: 'C', text: '$f(x)\\times T(x)$' }, { id: 'D', text: '$f(x)+T(x)$' }], correct: 'B', explication: 'Le signe de la différence $f(x)-T(x)$ situe la courbe au-dessus ($>0$) ou en dessous ($<0$) de la tangente.' },
        { id: 'x10', competence: 'formule', prompt: 'La dérivée de $\\dfrac{1}{x^{2}+1}$ est :', options: [{ id: 'A', text: '$\\dfrac{-2x}{(x^{2}+1)^{2}}$' }, { id: 'B', text: '$\\dfrac{2x}{(x^{2}+1)^{2}}$' }, { id: 'C', text: '$\\dfrac{-1}{(x^{2}+1)^{2}}$' }, { id: 'D', text: '$\\dfrac{-2x}{x^{2}+1}$' }], correct: 'A', explication: '$\\left(\\dfrac{1}{u}\\right)\'=-\\dfrac{u\'}{u^{2}}$ avec $u=x^{2}+1$ : $-\\dfrac{2x}{(x^{2}+1)^{2}}$.' },
      ],
    },
  },
};

export default examT2Derivees;
