// ============================================================================
// Données d'examen — Tome 1 · Les Limites (Série D).
// Contenu repris fidèlement de la maquette « La Salle de Composition ».
// Sert de gabarit : duplique ce fichier par Tome et enregistre-le dans le registry.
// ============================================================================

import type { ExamData } from '../../types/examen';

export const examT1Limites: ExamData = {
  id: 't1-limites',
  tome: 'Tome 1 — Les Limites',
  matiere: 'Mathématiques · Série D',
  sousTitre: 'Calcul de limites',
  moduleRedirect: { label: 'Réviser le Module 2 — Les F.I.', courseId: 't1-limites' },

  // ── DEVOIR SURVEILLÉ ──────────────────────────────────────────────────────
  devoir: {
    BASE: {
      level: 'BASE',
      dureeMin: 30,
      description: 'Limites directes & lecture de formes — application immédiate du cours.',
      exercices: [
        {
          id: 'd-base-ex1',
          titre: 'Exercice 1',
          points: 20,
          consigne: 'Calculer chacune des limites suivantes par substitution directe lorsque c\'est possible.',
          questions: [
            { id: 'q1', enonce: '$\\displaystyle\\lim_{x \\to 3}\\ (2x^{2}-5x+1)$', points: 5, corrige: 'Substitution directe : $2(9)-15+1=\\mathbf{4}$.' },
            { id: 'q2', enonce: '$\\displaystyle\\lim_{x \\to +\\infty}\\ (x^{3}-x)$', points: 5, corrige: 'Terme dominant $x^3 \\to +\\infty$, donc $\\mathbf{+\\infty}$.' },
            { id: 'q3', enonce: '$\\displaystyle\\lim_{x \\to 0}\\ \\frac{\\sin x}{x}$', points: 5, corrige: 'Limite de référence : $\\mathbf{1}$.', notePiege: 'Limite de cours à connaître par cœur.' },
            { id: 'q4', enonce: '$\\displaystyle\\lim_{x \\to +\\infty}\\ \\frac{1}{x}$', points: 5, corrige: 'L\'inverse d\'une quantité qui explose tend vers $\\mathbf{0}$.' },
          ],
        },
      ],
    },

    MOYEN: {
      level: 'MOYEN',
      dureeMin: 60,
      description: 'Méthodes mixtes (factorisation, conjugué, degrés) + 1 piège.',
      exercices: [
        {
          id: 'd-moyen-ex1',
          titre: 'Exercice 1',
          points: 11,
          consigne: 'Calculer chacune des limites suivantes (toute forme indéterminée doit être annoncée et levée) :',
          questions: [
            {
              id: 'q1', points: 2.5,
              enonce: '$\\displaystyle\\lim_{x \\to 2}\\ \\frac{x^{2}-4}{x-2}$',
              corrige: 'FI $\\frac{0}{0}$. On factorise : $x^{2}-4=(x-2)(x+2)$, donc $\\frac{(x-2)(x+2)}{x-2}=x+2 \\xrightarrow[x\\to2]{} \\mathbf{4}$.',
            },
            {
              id: 'q2', points: 2.5,
              enonce: '$\\displaystyle\\lim_{x \\to +\\infty}\\ \\frac{3x^{2}-x+1}{2x^{2}+5}$',
              corrige: 'En $+\\infty$, on garde les termes de plus haut degré : $\\frac{3x^{2}}{2x^{2}}=\\frac{3}{2}$. Donc la limite vaut $\\mathbf{\\frac{3}{2}}$.',
            },
            {
              id: 'q3', points: 3,
              enonce: '$\\displaystyle\\lim_{x \\to 0}\\ \\frac{\\sqrt{x+1}-1}{x}$',
              corrige: 'FI $\\frac{0}{0}$. On multiplie par le conjugué $\\sqrt{x+1}+1$ : $\\frac{x}{x(\\sqrt{x+1}+1)}=\\frac{1}{\\sqrt{x+1}+1}\\xrightarrow[x\\to0]{}\\mathbf{\\frac{1}{2}}$.',
              notePiege: 'Pense à simplifier le $x$ après avoir posé le conjugué — sinon demi-barème.',
            },
            {
              id: 'q4', points: 3,
              enonce: '$\\displaystyle\\lim_{x \\to 1^{-}}\\frac{1}{x-1}$ et $\\displaystyle\\lim_{x \\to 1^{+}}\\frac{1}{x-1}$',
              corrige: 'Limites latérales : en $1^{-}$, $x-1\\to 0^{-}$ donc $\\frac{1}{x-1}\\to \\mathbf{-\\infty}$ ; en $1^{+}$, $\\to \\mathbf{+\\infty}$.',
              notePiege: 'Étudie le signe du dénominateur : il faut bien les DEUX limites latérales.',
            },
          ],
        },
        {
          id: 'd-moyen-ex2',
          titre: 'Exercice 2',
          points: 9,
          consigne: 'On considère la fonction $f$ définie par $f(x)=\\dfrac{2x-3}{x-1}$.',
          questions: [
            { id: 'q1', enonce: 'Déterminer l\'ensemble de définition de $f$.', points: 3, corrige: '$f$ est définie pour $x-1 \\neq 0$, soit $D_f = \\mathbb{R}\\setminus\\{1\\}$.' },
            { id: 'q2', enonce: 'Étudier les limites de $f$ en $1$. Interpréter graphiquement.', points: 3, corrige: 'En $1^-$ : $\\to +\\infty$ ; en $1^+$ : $\\to -\\infty$. La droite $x=1$ est asymptote verticale.', notePiege: 'L\'interprétation graphique (asymptote verticale) fait partie du barème.' },
            { id: 'q3', enonce: 'Déterminer la limite de $f$ en $\\pm\\infty$ et conclure.', points: 3, corrige: 'Degrés égaux : $\\frac{2x}{x}=2$. La droite $y=2$ est asymptote horizontale en $\\pm\\infty$.' },
          ],
        },
      ],
    },

    BAC: {
      level: 'BAC',
      dureeMin: 120,
      description: 'Énoncés type BAC, pièges du correcteur, raisonnement complet.',
      exercices: [
        {
          id: 'd-bac-ex1',
          titre: 'Exercice 1',
          points: 11,
          consigne: 'Soit $f$ définie sur $\\mathbb{R}\\setminus\\{-2;2\\}$ par $f(x)=\\dfrac{x^{3}-8}{x^{2}-4}$ et $f(2)=3$.',
          questions: [
            { id: 'q1', enonce: 'Étudier la continuité de $f$ en $x_0=2$.', points: 4, corrige: 'FI $\\frac{0}{0}$. Identité du cube : $x^3-8=(x-2)(x^2+2x+4)$ et $x^2-4=(x-2)(x+2)$. Après simplification, $\\lim_{x\\to2}f(x)=\\frac{12}{4}=3=f(2)$ : $f$ est continue en $2$.', notePiege: 'La conclusion explicite « $f$ continue car $\\lim = f(2)$ » est notée.' },
            { id: 'q2', enonce: 'Déterminer la limite de $f$ en $-2$ et interpréter.', points: 4, corrige: 'En $-2$ le dénominateur s\'annule, pas le numérateur : limite infinie, asymptote verticale $x=-2$.' },
            { id: 'q3', enonce: 'Étudier les limites de $f$ en $\\pm\\infty$.', points: 3, corrige: 'Termes dominants $\\frac{x^3}{x^2}=x$, donc $\\lim_{x\\to+\\infty}f=+\\infty$ et $\\lim_{x\\to-\\infty}f=-\\infty$.' },
          ],
        },
        {
          id: 'd-bac-ex2',
          titre: 'Exercice 2',
          points: 9,
          consigne: 'Soit $g(x)=\\sqrt{x^{2}+x}-x$ pour $x>0$.',
          questions: [
            { id: 'q1', enonce: 'Calculer $\\displaystyle\\lim_{x\\to+\\infty} g(x)$.', points: 5, corrige: 'FI $\\infty-\\infty$. Conjugué : $g(x)=\\frac{x}{\\sqrt{x^2+x}+x}=\\frac{1}{\\sqrt{1+1/x}+1}\\to \\mathbf{\\frac{1}{2}}$.', notePiege: 'La mise en facteur de $x$ sous la racine est le point clé du barème.' },
            { id: 'q2', enonce: 'En déduire une asymptote à la courbe de $g$.', points: 4, corrige: 'La droite $y=\\frac{1}{2}$ est asymptote horizontale en $+\\infty$.' },
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
      description: 'Rappels de cours & formules en application directe.',
      questions: [
        { id: 'b1', competence: 'formule', prompt: 'La limite de référence $\\displaystyle\\lim_{x\\to0}\\frac{\\sin x}{x}$ vaut :', options: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$+\\infty$' }, { id: 'D', text: 'Indéfinie' }], correct: 'B', explication: 'C\'est une limite de cours fondamentale : $\\lim_{x\\to0}\\frac{\\sin x}{x}=1$.' },
        { id: 'b2', competence: 'formule', prompt: '$\\displaystyle\\lim_{x\\to+\\infty}\\frac{1}{x}$ vaut :', options: [{ id: 'A', text: '$+\\infty$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$0$' }, { id: 'D', text: '$-\\infty$' }], correct: 'C', explication: 'L\'inverse d\'une quantité qui explose tend vers $0$.' },
        { id: 'b3', competence: 'methode', prompt: 'Pour $\\displaystyle\\lim_{x\\to2}(x^2-3x)$, on :', options: [{ id: 'A', text: 'substitue directement' }, { id: 'B', text: 'utilise le conjugué' }, { id: 'C', text: 'factorise' }, { id: 'D', text: 'compare les degrés' }], correct: 'A', explication: 'Pas de forme indéterminée : substitution directe donne $4-6=-2$.' },
        { id: 'b4', competence: 'formule', prompt: '$\\displaystyle\\lim_{x\\to+\\infty} x^2$ vaut :', options: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$+\\infty$' }, { id: 'C', text: '$1$' }, { id: 'D', text: '$2$' }], correct: 'B', explication: 'Une puissance paire positive explose en $+\\infty$.' },
        { id: 'b5', competence: 'methode', prompt: 'Une « forme indéterminée » signifie :', options: [{ id: 'A', text: 'la limite n\'existe pas' }, { id: 'B', text: 'il faut transformer l\'expression' }, { id: 'C', text: 'la fonction n\'est pas définie' }, { id: 'D', text: 'la limite vaut 0' }], correct: 'B', explication: 'Une FI ($\\frac{0}{0}$, $\\frac{\\infty}{\\infty}$…) impose de lever l\'indétermination par une transformation.' },
        { id: 'b6', competence: 'formule', prompt: '$\\displaystyle\\lim_{x\\to0^+}\\frac{1}{x}$ vaut :', options: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$+\\infty$' }, { id: 'C', text: '$-\\infty$' }, { id: 'D', text: '$1$' }], correct: 'B', explication: 'En $0^+$, $x>0$ et tend vers $0$, donc $\\frac{1}{x}\\to+\\infty$.' },
      ],
    },

    MOYEN: {
      level: 'MOYEN',
      dureeMin: 20,
      description: 'Méthodes mixtes (factorisation, conjugué, degrés) + 1 piège.',
      questions: [
        { id: 'm1', competence: 'methode', prompt: 'Pour $\\displaystyle\\lim_{x\\to2}\\frac{x^2-4}{x-2}$, la bonne méthode est :', options: [{ id: 'A', text: 'substituer $x=2$' }, { id: 'B', text: 'comparer les degrés' }, { id: 'C', text: 'factoriser puis simplifier' }, { id: 'D', text: 'le conjugué' }], correct: 'C', explication: 'FI $\\frac{0}{0}$ polynomiale → factoriser : $\\frac{(x-2)(x+2)}{x-2}=x+2\\to4$.' },
        { id: 'm2', competence: 'formule', prompt: '$\\displaystyle\\lim_{x\\to+\\infty}\\frac{3x^2-x}{2x^2+5}$ vaut :', options: [{ id: 'A', text: '$\\frac{3}{2}$' }, { id: 'B', text: '$0$' }, { id: 'C', text: '$+\\infty$' }, { id: 'D', text: '$\\frac{2}{3}$' }], correct: 'A', explication: 'Degrés égaux → rapport des coefficients dominants $\\frac{3}{2}$.' },
        { id: 'm3', competence: 'methode', prompt: 'Pour lever l\'indétermination de $\\displaystyle\\lim_{x \\to 0}\\ \\frac{\\sqrt{x+1}-1}{x}$ :', formula: '$\\displaystyle\\lim_{x \\to 0}\\ \\frac{\\sqrt{x+1}-1}{x}$', options: [{ id: 'A', text: 'Comparer les termes de plus haut degré' }, { id: 'B', text: 'Multiplier par la quantité conjuguée' }, { id: 'C', text: 'Remplacer directement $x$ par $0$' }, { id: 'D', text: 'Factoriser par $x$' }], correct: 'B', explication: 'FI $\\frac{0}{0}$ avec une racine → on multiplie par le conjugué $\\sqrt{x+1}+1$.' },
        { id: 'm4', competence: 'formule', prompt: '$\\displaystyle\\lim_{x\\to1^-}\\frac{1}{x-1}$ vaut :', options: [{ id: 'A', text: '$+\\infty$' }, { id: 'B', text: '$-\\infty$' }, { id: 'C', text: '$0$' }, { id: 'D', text: '$1$' }], correct: 'B', explication: 'En $1^-$, $x-1\\to0^-$ donc $\\frac{1}{x-1}\\to-\\infty$.' },
        { id: 'm5', competence: 'methode', prompt: 'Pour $\\displaystyle\\lim_{x\\to+\\infty}(\\sqrt{x^2+x}-x)$ :', options: [{ id: 'A', text: 'substituer' }, { id: 'B', text: 'le conjugué' }, { id: 'C', text: 'factoriser par $x-1$' }, { id: 'D', text: 'la limite vaut $+\\infty$' }], correct: 'B', explication: 'FI $\\infty-\\infty$ avec racine → conjugué, puis factoriser $x$ sous la racine.' },
        { id: 'm6', competence: 'formule', prompt: '$\\displaystyle\\lim_{x\\to+\\infty}\\frac{5x+1}{x^2}$ vaut :', options: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$+\\infty$' }, { id: 'C', text: '$0$' }, { id: 'D', text: '$1$' }], correct: 'C', explication: 'Degré du dénominateur supérieur → la limite vaut $0$.' },
        { id: 'm7', competence: 'methode', prompt: 'FI $\\frac{0}{0}$ avec une racine carrée : on utilise…', options: [{ id: 'A', text: 'la factorisation' }, { id: 'B', text: 'le conjugué' }, { id: 'C', text: 'la comparaison de degrés' }, { id: 'D', text: 'la substitution' }], correct: 'B', explication: 'La présence d\'une racine oriente vers la quantité conjuguée, pas la factorisation.' },
        { id: 'm8', competence: 'formule', prompt: '$\\displaystyle\\lim_{x\\to-\\infty}(x^3-x)$ vaut :', options: [{ id: 'A', text: '$+\\infty$' }, { id: 'B', text: '$-\\infty$' }, { id: 'C', text: '$0$' }, { id: 'D', text: '$-1$' }], correct: 'B', explication: 'Terme dominant $x^3$ avec $x\\to-\\infty$ → $-\\infty$.' },
      ],
    },

    BAC: {
      level: 'BAC',
      dureeMin: 30,
      description: 'Énoncés type BAC, pièges du correcteur, raisonnement complet.',
      questions: [
        { id: 'x1', competence: 'methode', prompt: 'Pour $\\displaystyle\\lim_{x\\to2}\\frac{x^3-8}{x^2-4}$, on factorise avec :', options: [{ id: 'A', text: 'l\'identité du cube $a^3-b^3$' }, { id: 'B', text: 'le conjugué' }, { id: 'C', text: 'la comparaison de degrés' }, { id: 'D', text: 'une substitution' }], correct: 'A', explication: '$x^3-8=(x-2)(x^2+2x+4)$ : identité du cube, puis simplification par $(x-2)$.' },
        { id: 'x2', competence: 'formule', prompt: 'Après simplification, $\\displaystyle\\lim_{x\\to2}\\frac{x^3-8}{x^2-4}$ vaut :', options: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$0$' }, { id: 'C', text: '$\\frac{12}{4}=3$' }, { id: 'D', text: '$+\\infty$' }], correct: 'C', explication: '$\\frac{x^2+2x+4}{x+2}\\to\\frac{12}{4}=3$.' },
        { id: 'x3', competence: 'methode', prompt: 'Une asymptote verticale apparaît lorsque :', options: [{ id: 'A', text: 'la limite est finie' }, { id: 'B', text: 'la limite est infinie en un réel' }, { id: 'C', text: 'la fonction est continue' }, { id: 'D', text: 'le numérateur s\'annule' }], correct: 'B', explication: 'Une limite infinie en une valeur finie $a$ traduit une asymptote verticale $x=a$.' },
        { id: 'x4', competence: 'formule', prompt: '$\\displaystyle\\lim_{x\\to+\\infty}(\\sqrt{x^2+x}-x)$ vaut :', options: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$\\frac{1}{2}$' }, { id: 'C', text: '$+\\infty$' }, { id: 'D', text: '$1$' }], correct: 'B', explication: 'Conjugué : $\\frac{x}{\\sqrt{x^2+x}+x}=\\frac{1}{\\sqrt{1+1/x}+1}\\to\\frac{1}{2}$.' },
        { id: 'x5', competence: 'methode', prompt: 'Pour conclure sur la continuité en un point $a$, il faut vérifier :', options: [{ id: 'A', text: '$\\lim_{x\\to a}f(x)=f(a)$' }, { id: 'B', text: 'que $f$ est dérivable' }, { id: 'C', text: 'que $f(a)>0$' }, { id: 'D', text: 'que $a$ est entier' }], correct: 'A', explication: 'Continuité en $a$ : la limite existe et vaut $f(a)$.' },
        { id: 'x6', competence: 'formule', prompt: '$\\displaystyle\\lim_{x\\to+\\infty}\\frac{2x-3}{x-1}$ vaut :', options: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$-3$' }, { id: 'C', text: '$0$' }, { id: 'D', text: '$+\\infty$' }], correct: 'A', explication: 'Degrés égaux → rapport des coefficients dominants $\\frac{2}{1}=2$ ; asymptote $y=2$.' },
        { id: 'x7', competence: 'methode', prompt: 'En $1^+$ et $1^-$, $\\frac{2x-3}{x-1}$ a des limites :', options: [{ id: 'A', text: 'égales' }, { id: 'B', text: 'opposées en signe ($\\pm\\infty$)' }, { id: 'C', text: 'nulles' }, { id: 'D', text: 'finies' }], correct: 'B', explication: 'Le signe du dénominateur change autour de $1$ → $+\\infty$ d\'un côté, $-\\infty$ de l\'autre.' },
        { id: 'x8', competence: 'formule', prompt: '$\\displaystyle\\lim_{x\\to0^+} x\\ln x$ vaut :', options: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$-\\infty$' }, { id: 'C', text: '$1$' }, { id: 'D', text: '$+\\infty$' }], correct: 'A', explication: 'Croissance comparée : $x\\ln x\\to0$ en $0^+$.' },
        { id: 'x9', competence: 'methode', prompt: 'Devant $\\frac{P(x)}{Q(x)}$ en $\\pm\\infty$, le réflexe est :', options: [{ id: 'A', text: 'substituer' }, { id: 'B', text: 'le conjugué' }, { id: 'C', text: 'comparer les degrés / termes dominants' }, { id: 'D', text: 'dériver' }], correct: 'C', explication: 'À l\'infini, on compare les termes de plus haut degré.' },
        { id: 'x10', competence: 'formule', prompt: '$\\displaystyle\\lim_{x\\to+\\infty}\\frac{e^x}{x}$ vaut :', options: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$0$' }, { id: 'C', text: '$+\\infty$' }, { id: 'D', text: 'Indéfinie' }], correct: 'C', explication: 'Croissance comparée : l\'exponentielle l\'emporte → $+\\infty$.' },
      ],
    },
  },
};

export default examT1Limites;
