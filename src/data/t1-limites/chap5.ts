// src/data/t1-limites/chap5.ts
// CHAPITRE 4 — LES ASTUCES DE GRAND FRÈRE — ENRICHI
// Tome 1 : Les Limites · Collection Les Clés Maths
// Enrichissements : Accroches · Transitions · Récaps · Mini-exercices · Dialogues vivants · Micro-motivations · Analogies développées

import { Chapitre } from '../../types/course';

export const chapitre4: Chapitre = {
  id: 't1-chap5',
  titre: 'Chapitre 4 : Les Astuces de Grand Frère',
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
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b0-accroche',
          contenu:
            "Champion(ne), voici ce que les majors du Lycée Classique ne t'ont jamais dit. Dans ce chapitre, tu vas apprendre à aller 2x plus vite que les autres le jour du BAC.",
        },
        {
          type: 'text',
          id: 'b1',
          contenu: "Tu as la méthode, tu as la technique. Maintenant, on va parler de vitesse et de stratégie. Le jour de l'examen, tu n'as pas le temps de redémontrer que la terre est ronde. Tu as besoin de réflexes. Voici mes secrets pour aller plus vite que les autres et surtout, pour vérifier tes résultats avant de rendre ta copie.\n\n\"Au 'Cacao', un devoir de 2h contenait souvent 5 exercices de limites. Si tu calculais chaque limite avec toute la rigueur (factorisation, simplification, justification...), tu finissais à peine 3 exercices.\n\nUn jour, j'ai regardé comment travaillait le major de la classe. Il écrivait au brouillon : '\\( \\lim_{x \\to +\\infty} \\frac{x^5}{x^3} \\)' et il notait direct : '\\( +\\infty \\)' (sans calcul !). Je lui ai demandé : 'Comment tu sais ?'. Il m'a dit : 'Regarde juste les puissances : 5 en haut, 3 en bas. 5 > 3 donc le haut est plus fort. Résultat : \\( +\\infty \\).'\n\nJ'ai testé sur 10 exercices. Ça marchait à CHAQUE FOIS ! Ce jour-là, j'ai compris : il y a 2 types de calculs. 1. Le calcul COMPLET (pour ta copie, bien justifié). 2. Le calcul MENTAL (pour vérifier vite au brouillon). Dans ce chapitre, je te donne les raccourcis que les majors utilisent pour aller 2x plus vite.\"",
        },
        // ── Enrichissement 2 : Transition ──
        {
          type: 'text',
          id: 'transition-s1-s2',
          contenu:
            "Tu connais maintenant le secret du major. Premier raccourci : la Loi du Plus Fort — l'outil qui te donne la réponse en 2 secondes pour les fractions rationnelles.",
        },
      ],
    },
    {
      id: 's2',
      titre: '4.1 Les raccourcis qui sauvent du temps',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b2-accroche',
          contenu:
            "Ces astuces ne remplacent pas la rigueur sur ta copie — mais elles te donnent la réponse en 2 secondes pour vérifier. C'est ça l'avantage du major.",
        },
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
            'Si degré numérateur > degré dénominateur → résultat toujours l\'Infini (\\( \\pm\\infty \\))',
            'Exemple : \\( \\lim_{x \\to +\\infty} \\frac{x^3+1}{x^2+2} = +\\infty \\) (car 3 > 2)',
            '',
            'CAS 2 — Le Bas est plus fort que le Haut :',
            'Si degré dénominateur > degré numérateur → résultat toujours 0',
            'Exemple : \\( \\lim_{x \\to +\\infty} \\frac{x^2+1}{x^4+2} = 0 \\) (car 4 > 2)',
            '',
            'CAS 3 — Égalité des forces :',
            'Si degrés égaux → c\'est le RAPPORT des coefficients des termes dominants',
            'Exemple : \\( \\lim_{x \\to +\\infty} \\frac{3x^2+1}{x^2+5} = \\frac{3}{1} = 3 \\)',
          ],
        },
        {
          type: 'table',
          id: 'b4',
          titre: 'Tableau récapitulatif — La Loi du Plus Fort',
          headers: ['Situation', 'Résultat', 'Exemple'],
          rows: [
            ['Degré haut > degré bas', '\\( \\pm\\infty \\) (signe selon les coefficients)', '\\( \\frac{x^3}{x^2} \\to \\infty \\)'],
            ['Degré bas > degré haut', '0', '\\( \\frac{x^2}{x^4} \\to 0 \\)'],
            ['Degrés égaux', 'Rapport des coefficients leaders', '\\( \\frac{3x^2}{x^2} \\to 3 \\)'],
          ],
        },
        // ── Enrichissement 4 : Mini-exercice "À toi de jouer" ──
        {
          type: 'exercise',
          id: 'micro-ex-loi-fort',
          niveau: 'BASE',
          enonce: '⚡ À toi de jouer ! Par la Loi du Plus Fort, que vaut \\( \\lim_{x \\to +\\infty} \\frac{4x^3 + 2}{x^2 + 1} \\) ?',
          etapes: [
            'Degré du numérateur : 3 · Degré du dénominateur : 2',
            '3 > 2 → Le haut est plus fort → résultat \\( +\\infty \\)',
          ],
          reponse: '\\( +\\infty \\)',
          conseil: 'La Loi du Plus Fort — compare juste les exposants. Haut > Bas → \\( \\infty \\), Bas > Haut → 0, Égaux → rapport des coefficients.',
        },
        // ── Enrichissement 3 : Récap intermédiaire ──
        {
          type: 'recap',
          id: 'recap-loi-fort',
          titre: 'La Loi du Plus Fort — 3 cas',
          contenu: [
            '✅ Degré haut > degré bas → \\( \\pm\\infty \\)',
            '✅ Degré bas > degré haut → 0',
            '✅ Degrés égaux → rapport des coefficients leaders',
          ],
        },
        // ── Enrichissement 2 : Transition ──
        {
          type: 'text',
          id: 'transition-s2-s3',
          contenu:
            "Tu as la Loi du Plus Fort pour les polynômes. Maintenant la hiérarchie complète : qu'est-ce qui gagne entre un polynôme, un logarithme, et une exponentielle ? C'est là que les élèves se surprennent.",
        },
      ],
    },
    {
      id: 's3',
      titre: '4.2 Les croissances comparées — La hiérarchie des puissances',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b5-accroche',
          contenu:
            "Champion(ne), cette section tombe souvent au BAC et beaucoup d'élèves la ratent parce qu'ils ne connaissent pas la hiérarchie. Toi tu vas la connaître.",
        },
        // ── Enrichissement 7 : Micro-motivation avant exercice MOYEN ──
        {
          type: 'tip',
          id: 'motivation-croissances',
          titre: 'Grand Frère te dit',
          contenu: [
            "Faut pas gnan pour les croissances comparées — c'est juste un classement à retenir.",
            "Une fois que tu l'as, tu gagnes des points faciles au BAC.",
            "C'est normal de bloquer ici. Relis lentement — le déclic arrive.",
          ],
        },
        // ── Enrichissement 5 : Analogie ivoirienne développée ──
        {
          type: 'analogy',
          id: 'b5',
          titre: 'La course des champions',
          contenu: `Imagine une course sur l'autoroute du Nord entre trois champions ivoiriens : Kouassi (qui court à la vitesse d'un logarithme), Konan (à la vitesse d'un polynôme \\( x^2 \\)), et Séri (à la vitesse de l'exponentielle \\( e^x \\)).
Au départ à Abidjan, les trois sont proches — impossible de distinguer qui gagne vraiment.
Mais plus on avance vers Yamoussoukro, puis vers Bouaké, les écarts se creusent de façon spectaculaire : Séri (\\( e^x \\)) est déjà à Bouaké quand Konan (\\( x^2 \\)) arrive à peine à Yamoussoukro, et Kouassi (\\( \\ln x \\)) est encore en train de quitter Abidjan.
À l'infini, Séri bat tout le monde, Konan est largement devant Kouassi — et l'écart entre eux ne cesse de grandir sans jamais s'arrêter.`,
          conceptMath: "Quand \\( x \\to +\\infty \\) : \\( \\ln(x) \\ll x^n \\ll e^x \\). Autrement dit : \\( e^x \\) domine \\( x^n \\) qui domine \\( \\ln(x) \\). C'est la HIÉRARCHIE DES CROISSANCES.",
        },
        {
          type: 'rule',
          id: 'b6',
          titre: 'Les 3 croissances comparées essentielles',
          contenu: [
            '\\( \\lim_{x \\to +\\infty} \\frac{e^x}{x} = +\\infty \\) (\\( e^x \\) gagne sur x)',
            '\\( \\lim_{x \\to +\\infty} \\frac{\\ln(x)}{x} = 0 \\) (x gagne sur \\( \\ln(x) \\))',
            '\\( \\lim_{x \\to 0^+} x \\ln(x) = 0 \\) (x gagne et tire vers 0)',
            '',
            'RÈGLE GÉNÉRALE : \\( e^x \\) bat toujours \\( x^n \\) qui bat toujours \\( \\ln(x) \\)',
          ],
        },
        {
          type: 'warning',
          id: 'b7',
          titre: 'Piège à éviter — Les croissances comparées à l\'infini seulement',
          contenu: [
            'Les croissances comparées ne s\'appliquent que quand \\( x \\to +\\infty \\).',
            'Ne les utilise PAS pour les limites en un point fini !',
          ],
        },
        // ── Enrichissement 7 : Micro-motivation avant exercice MOYEN ──
        {
          type: 'tip',
          id: 'motivation-avant-ex-croissance',
          titre: 'Grand Frère te dit',
          contenu: [
            "L'exercice qui suit tombe régulièrement au BAC ivoirien.",
            "Tu as les bases. Faut pas gnan — on y va ensemble.",
            "Respire. On avance.",
          ],
        },
        {
          type: 'exercise',
          id: 'ex1',
          niveau: 'MOYEN',
          enonce: 'Calculer \\( \\lim_{x \\to +\\infty} x^2 e^{-x} \\)',
          etapes: [
            'On réécrit : \\( x^2 e^{-x} = \\frac{x^2}{e^x} \\)',
            'C\'est une forme \\( \\frac{\\infty}{\\infty} \\) — mais on reconnaît une croissance comparée',
            '\\( e^x \\) bat \\( x^n \\) à l\'infini, donc \\( e^x \\) bat \\( x^2 \\)',
            'Résultat : \\( \\lim_{x \\to +\\infty} \\frac{x^2}{e^x} = 0 \\)',
          ],
          reponse: '0',
          conseil: 'Chaque fois que tu vois \\( e^x \\) et \\( x^n \\) ensemble en \\( x \\to +\\infty \\), \\( e^x \\) gagne TOUJOURS. Pas besoin de calculer !',
        },
        {
          type: 'exercise',
          id: 'ex2',
          niveau: 'MOYEN',
          enonce: 'Calculer \\( \\lim_{x \\to 0^+} x \\ln(x) \\)',
          etapes: [
            'Forme \\( 0 \\times (-\\infty) \\) → forme indéterminée',
            'On reconnaît une croissance comparée classique',
            '\\( \\lim_{x \\to 0^+} x \\ln(x) = 0 \\) (x gagne et tire vers 0)',
          ],
          reponse: '0',
          conseil: 'Ce résultat est à connaître par cœur — il tombe souvent au BAC ivoirien !',
        },
        // ── Enrichissement 3 : Récap intermédiaire ──
        {
          type: 'recap',
          id: 'recap-croissances',
          titre: 'Hiérarchie des croissances — version express',
          contenu: [
            '✅ \\( \\ln(x) \\ll x^n \\ll e^x \\) quand \\( x \\to +\\infty \\)',
            '✅ \\( \\frac{e^x}{x^n} \\to +\\infty \\) (\\( e^x \\) gagne)',
            '✅ \\( \\frac{\\ln(x)}{x} \\to 0 \\) (\\( x^n \\) gagne sur ln)',
            '✅ \\( x \\ln(x) \\to 0 \\) quand \\( x \\to 0^+ \\)',
          ],
        },
        // ── Enrichissement 2 : Transition ──
        {
          type: 'text',
          id: 'transition-s3-s4',
          contenu:
            "Tu maîtrises maintenant les raccourcis et la hiérarchie. Dernière section de ce chapitre : la continuité et le TVI — des points faciles au BAC si tu connais la structure.",
        },
      ],
    },
    {
      id: 's4',
      titre: '4.3 La continuité et les limites',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b8-accroche',
          contenu:
            "Continuité et TVI — deux questions récurrentes au BAC. Si tu connais la structure en 3 phrases, tu ne les rates jamais.",
        },
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
            '→ f est définie en a (\\( f(a) \\) existe)',
            '→ \\( \\lim_{x \\to a} f(x) \\) existe (et est un nombre réel L)',
            '→ \\( \\lim_{x \\to a} f(x) = f(a) \\) (la limite est égale à la valeur)',
            '',
            'Si l\'une de ces 3 conditions manque → f n\'est PAS continue en a.',
          ],
        },
        // ── Enrichissement 6 : Dialogue vivant ──
        {
          type: 'dialogue',
          id: 'b10',
          pf: "Et le Théorème des Valeurs Intermédiaires, c'est quoi le rapport avec les limites ? Au BAC on me le demande souvent mais je sais pas trop comment le relier.",
          gf: "Bonne question — et c'est exactement ce lien qui te fait gagner les points au BAC ! Le TVI s'applique aux fonctions continues. Donc avant d'utiliser le TVI, tu dois d'abord démontrer la continuité — et pour ça, tu utilises souvent les limites. C'est une chaîne : limites → continuité → TVI. Au BAC, si on te demande de montrer qu'une équation \\( f(x) = k \\) a une solution sur un intervalle, le chemin est toujours : calculer les limites aux bornes → déduire la continuité → appliquer le TVI.",
        },
        {
          type: 'rule',
          id: 'b11',
          titre: 'Structure type au BAC — "Montrer que \\( f(x) = 0 \\) a une solution sur [1 ; 3]"',
          contenu: [
            'Étape 1 : "f est continue sur [1 ; 3] car elle est définie comme [polynôme / fraction sans pôle sur cet intervalle / etc.]."',
            'Étape 2 : "\\( f(1) = ... \\) et \\( f(3) = ... \\) Or \\( f(1) \\) et \\( f(3) \\) sont de signes opposés, donc 0 est compris entre \\( f(1) \\) et \\( f(3) \\)."',
            'Étape 3 : "Par le Théorème des Valeurs Intermédiaires, il existe au moins un réel \\( c \\in [1 ; 3] \\) tel que \\( f(c) = 0 \\)."',
            '3 phrases → points assurés. C\'est mécanique.',
          ],
        },
        // ── Enrichissement 3 : Récap final ──
        {
          type: 'recap',
          id: 'recap-chap5-final',
          titre: '🚀 Récap du Chapitre 4 — Les Astuces de Grand Frère',
          contenu: [
            '✅ Loi du Plus Fort : degré haut > bas → \\( \\infty \\) · bas > haut → 0 · égaux → rapport',
            '✅ Hiérarchie : \\( e^x \\gg x^n \\gg \\ln(x) \\) quand \\( x \\to +\\infty \\)',
            '✅ Continuité : 3 conditions (f(a) existe, limite existe, elles sont égales)',
            '✅ TVI : structure en 3 phrases — mécanique et infaillible',
          ],
        },
        // ── Enrichissement 7 : Micro-motivation de fin ──
        {
          type: 'tip',
          id: 'motivation-fin-chap5',
          titre: 'Grand Frère te dit',
          contenu: [
            "Tu viens de maîtriser les astuces que les majors gardent pour eux.",
            "Dans le prochain chapitre, on monte sur le ring : exercices type BAC réels.",
            "C'est là que tout ce qu'on a appris ensemble se transforme en points !",
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

