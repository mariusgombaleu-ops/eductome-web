// src/data/t1-limites/chap5.ts
// CHAPITRE 4 — LES ASTUCES DE GRAND FRÈRE
// Tome 1 : Les Limites · Collection Les Clés Maths

import { Chapitre } from '../../types/course';

export const chapitre4: Chapitre = {
  id: 't1-chap5',
  titre: 'Les Astuces de Grand Frère',
  duree: 30,
  niveau: 'MOYEN',
  xpGain: 70,
  gratuit: false,
  objectifs: [
    'Utiliser les raccourcis mentaux des majors pour gagner du temps',
    'Maîtriser la loi du plus fort pour les fractions rationnelles',
    'Comprendre et appliquer les croissances comparées',
    'Aller 2x plus vite le jour du BAC',
  ],
  sections: [
    {
      id: 's1',
      titre: 'Introduction — Les secrets des majors',
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu: "Tu as la méthode, tu as la technique. Maintenant, on va parler de vitesse et de stratégie. Le jour de l'examen, tu n'as pas le temps de redémontrer que la terre est ronde. Tu as besoin de réflexes. Voici mes secrets pour aller plus vite que les autres et surtout, pour vérifier tes résultats avant de rendre ta copie.\n\n\"Au 'Cacao', un devoir de 2h contenait souvent 5 exercices de limites. Si tu calculais chaque limite avec toute la rigueur (factorisation, simplification, justification...), tu finissais à peine 3 exercices.\n\nUn jour, j'ai regardé comment travaillait le major de la classe. Il écrivait au brouillon : 'lim x⁵/x³ quand x → +∞' et il notait direct : '+∞' (sans calcul !). Je lui ai demandé : 'Comment tu sais ?'. Il m'a dit : 'Regarde juste les puissances : 5 en haut, 3 en bas. 5 > 3 donc le haut est plus fort. Résultat : +∞.'\n\nJ'ai testé sur 10 exercices. Ça marchait à CHAQUE FOIS ! Ce jour-là, j'ai compris : il y a 2 types de calculs. 1. Le calcul COMPLET (pour ta copie, bien justifié). 2. Le calcul MENTAL (pour vérifier vite au brouillon). Dans ce chapitre, je te donne les raccourcis que les majors utilisent pour aller 2x plus vite.\"",
        },
      ],
    },
    {
      id: 's2',
      titre: '4.1 Les raccourcis qui sauvent du temps',
      blocs: [
        {
          type: 'text',
          id: 'b2',
          contenu: "Ces astuces sont des accélérateurs. Attention : sur ta copie, tu dois toujours justifier (avec les phrases types du cours), mais au brouillon, ces raccourcis te donnent la réponse en 2 secondes.",
        },
        {
          type: 'tip',
          id: 'b3',
          titre: 'La Loi du Plus Fort — Comparer les degrés rapidement',
          contenu: [
            'C\'est l\'astuce ultime pour les fractions rationnelles (polynôme sur polynôme) quand x tend vers l\'infini. On regarde juste la puissance la plus élevée en haut et en bas.',
            '',
            'CAS 1 — Le Haut est plus fort que le Bas :',
            'Si degré numérateur > degré dénominateur → résultat toujours l\'Infini (±∞)',
            'Exemple : lim(x→+∞) (x³+1)/(x²+2) = +∞ (car 3 > 2)',
            '',
            'CAS 2 — Le Bas est plus fort que le Haut :',
            'Si degré dénominateur > degré numérateur → résultat toujours 0',
            'Exemple : lim(x→+∞) (x²+1)/(x⁴+2) = 0 (car 4 > 2)',
            '',
            'CAS 3 — Égalité des forces :',
            'Si degrés égaux → c\'est le RAPPORT des coefficients des termes dominants',
            'Exemple : lim(x→+∞) (3x²+1)/(x²+5) = 3/1 = 3',
          ],
        },
        {
          type: 'table',
          id: 'b4',
          titre: 'Tableau récapitulatif — La Loi du Plus Fort',
          headers: ['Situation', 'Résultat', 'Exemple'],
          rows: [
            ['Degré haut > degré bas', '±∞ (signe selon les coefficients)', 'x³/x² → ∞'],
            ['Degré bas > degré haut', '0', 'x²/x⁴ → 0'],
            ['Degrés égaux', 'Rapport des coefficients leaders', '3x²/x² → 3'],
          ],
        },
      ],
    },
    {
      id: 's3',
      titre: '4.2 Les croissances comparées — La hiérarchie des puissances',
      blocs: [
        {
          type: 'analogy',
          id: 'b5',
          titre: 'La course des champions',
          contenu: "Imagine une course entre trois champions : ln(x), xⁿ et eˣ. Qui gagne quand x → +∞ ? C'est comme une course où chacun court à une vitesse différente. Au départ ils sont proches, mais plus on avance, plus les écarts se creusent. Qui finit dernier ? ln(x) — le logarithme court lentement. Qui est au milieu ? xⁿ — les polynômes courent vite mais régulièrement. Qui gagne TOUJOURS ? eˣ — l'exponentielle s'envole !",
          conceptMath: "Quand x → +∞ : ln(x) << xⁿ << eˣ. Autrement dit : eˣ domine xⁿ qui domine ln(x). C'est la HIÉRARCHIE DES CROISSANCES.",
        },
        {
          type: 'rule',
          id: 'b6',
          titre: 'Les 3 croissances comparées essentielles',
          contenu: [
            'lim(x→+∞) eˣ/x = +∞  (eˣ gagne sur x)',
            'lim(x→+∞) ln(x)/x = 0  (x gagne sur ln(x))',
            'lim(x→0⁺) x·ln(x) = 0  (x gagne et tire vers 0)',
            '',
            'RÈGLE GÉNÉRALE : eˣ bat toujours xⁿ qui bat toujours ln(x)',
          ],
        },
        {
          type: 'warning',
          id: 'b7',
          titre: 'Piège à éviter — Les croissances comparées à l\'infini seulement',
          contenu: [
            'Les croissances comparées ne s\'appliquent que quand x → +∞.',
            'Ne les utilise PAS pour les limites en un point fini !',
          ],
        },
        {
          type: 'exercise',
          id: 'ex1',
          niveau: 'MOYEN',
          enonce: 'Calculer lim(x→+∞) x²·e⁻ˣ',
          etapes: [
            'On réécrit : x²·e⁻ˣ = x²/eˣ',
            'C\'est une forme ∞/∞ — mais on reconnaît une croissance comparée',
            'eˣ bat xⁿ à l\'infini, donc eˣ bat x²',
            'Résultat : lim(x→+∞) x²/eˣ = 0',
          ],
          reponse: '0',
          conseil: 'Chaque fois que tu vois eˣ et xⁿ ensemble en x → +∞, eˣ gagne TOUJOURS. Pas besoin de calculer !',
        },
        {
          type: 'exercise',
          id: 'ex2',
          niveau: 'MOYEN',
          enonce: 'Calculer lim(x→0⁺) x·ln(x)',
          etapes: [
            'Forme 0 × (-∞) → forme indéterminée',
            'On reconnaît une croissance comparée classique',
            'lim(x→0⁺) x·ln(x) = 0 (x gagne et tire vers 0)',
          ],
          reponse: '0',
          conseil: 'Ce résultat est à connaître par cœur — il tombe souvent au BAC ivoirien !',
        },
      ],
    },
    {
      id: 's4',
      titre: '4.3 La continuité et les limites',
      blocs: [
        {
          type: 'text',
          id: 'b8',
          contenu: "La continuité d'une fonction en un point a est liée directement aux limites. Voici la définition que tu dois connaître :",
        },
        {
          type: 'rule',
          id: 'b9',
          titre: 'f est continue en a si et seulement si les 3 conditions sont réunies',
          contenu: [
            '→ f est définie en a (f(a) existe)',
            '→ lim(x→a) f(x) existe (et est un nombre réel L)',
            '→ lim(x→a) f(x) = f(a) (la limite est égale à la valeur)',
            '',
            'Si l\'une de ces 3 conditions manque → f n\'est PAS continue en a.',
          ],
        },
        {
          type: 'dialogue',
          id: 'b10',
          pf: "Et le Théorème des Valeurs Intermédiaires, c'est quoi le rapport avec les limites ?",
          gf: "Le TVI s'applique aux fonctions continues. Donc avant d'utiliser le TVI, tu dois d'abord démontrer la continuité — et pour ça, tu utilises souvent les limites. C'est une chaîne : limites → continuité → TVI. Au BAC, si on te demande de montrer qu'une équation f(x) = k a une solution sur un intervalle, le chemin est toujours : calculer les limites aux bornes → déduire la continuité → appliquer le TVI.",
        },
        {
          type: 'rule',
          id: 'b11',
          titre: 'Structure type au BAC — "Montrer que f(x) = 0 a une solution sur [1 ; 3]"',
          contenu: [
            'Étape 1 : "f est continue sur [1 ; 3] car elle est définie comme [polynôme / fraction sans pôle sur cet intervalle / etc.]."',
            'Étape 2 : "f(1) = ... et f(3) = ... Or f(1) et f(3) sont de signes opposés, donc 0 est compris entre f(1) et f(3)."',
            'Étape 3 : "Par le Théorème des Valeurs Intermédiaires, il existe au moins un réel c ∈ [1 ; 3] tel que f(c) = 0."',
            '3 phrases → points assurés. C\'est mécanique.',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      type: 'quiz',
      id: 'q1',
      question: 'Que vaut $\\lim_{x \\to +\\infty} \\frac{x^5 + 1}{x^3 + 2}$ par la loi du plus fort ?',
      options: [
        '0',
        '1',
        '+∞',
        '5/3',
      ],
      bonneReponse: 2,
      explication: 'Le numérateur a degré 5, le dénominateur degré 3. 5 > 3 → le haut est plus fort → résultat +∞.',
    },
    {
      type: 'quiz',
      id: 'q2',
      question: 'Que vaut $\\lim_{x \\to +\\infty} \\frac{e^x}{x^{100}}$ ?',
      options: [
        '0',
        '1',
        '+∞',
        '100',
      ],
      bonneReponse: 2,
      explication: 'Croissance comparée : eˣ bat TOUJOURS xⁿ à l\'infini, quelle que soit la puissance n. Donc eˣ/x¹⁰⁰ → +∞.',
    },
    {
      type: 'quiz',
      id: 'q3',
      question: 'Que vaut $\\lim_{x \\to +\\infty} \\frac{\\ln x}{x}$ ?',
      options: [
        '+∞',
        '1',
        '0',
        'N\'existe pas',
      ],
      bonneReponse: 2,
      explication: 'Croissance comparée : x bat ln(x) à l\'infini. Donc ln(x)/x → 0.',
    },
    {
      type: 'quiz',
      id: 'q4',
      question: 'Pour que f soit continue en a, combien de conditions doivent être réunies ?',
      options: [
        '1 condition : f(a) doit exister',
        '2 conditions : f(a) existe et la limite existe',
        '3 conditions : f(a) existe, la limite existe, et elles sont égales',
        'Aucune condition particulière',
      ],
      bonneReponse: 2,
      explication: '3 conditions pour la continuité : (1) f définie en a, (2) lim(x→a) f(x) existe, (3) lim = f(a). Si une manque → f n\'est pas continue en a.',
    },
    {
      type: 'quiz',
      id: 'q5',
      question: 'Pour appliquer le TVI, quelle condition est indispensable ?',
      options: [
        'f doit être dérivable',
        'f doit être continue sur l\'intervalle',
        'f doit tendre vers zéro',
        'f doit être positive',
      ],
      bonneReponse: 1,
      explication: 'Le TVI s\'applique aux fonctions CONTINUES sur un intervalle fermé [a ; b]. Sans continuité → pas de TVI !',
    },
  ],
};
