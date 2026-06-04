// src/data/t1-limites/chap4.ts
// CHAPITRE 3 — CALCULER LES LIMITES : LA MÉTHODE QUI MARCHE — ENRICHI
// Tome 1 : Les Limites · Collection Les Clés Maths
// Enrichissements : Accroches · Transitions · Récaps · Mini-exercices · Dialogues vivants · Micro-motivations

import { Chapitre } from '../../types/course';

export const chapitre3: Chapitre = {
  id: 't1-chap4',
  titre: 'Chapitre 3 : Calculer les Limites — La Méthode qui Marche',
  duree: 40,
  niveau: 'MOYEN',
  xpGain: 75,
  gratuit: false,
  objectifs: [
    'Appliquer le processus en 5 étapes pour n\'importe quelle limite',
    'Lever les 4 formes indéterminées avec la bonne technique',
    'Maîtriser la factorisation par le "Chef" pour ∞ − ∞',
    'Utiliser l\'expression conjuguée pour les racines carrées',
  ],
  sections: [
    {
      id: 's1',
      titre: 'Introduction — La méthode du protocole militaire',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b0-accroche',
          contenu:
            "Champion(ne), voici le chapitre qui fait la différence entre ceux qui calculent des limites et ceux qui les dominent. Dans 5 minutes, tu vas avoir une méthode qui marche à chaque fois.",
        },
        {
          type: 'text',
          id: 'b1',
          contenu: "\"Devoir régional au 'Cacao', première Terminale. Dernière question (sur 3 points) : Calculer \\( \\lim_{x \\to +\\infty} (x^2 + 2x - x) \\). J'ai remplacé mentalement : \\( +\\infty + 2(+\\infty) - (+\\infty) = +\\infty + \\infty - \\infty \\). Mon cerveau a dit : 'C'est \\( \\infty - \\infty \\), forme indéterminée !' J'ai paniqué. Il restait 5 minutes. Mais je me suis calmé.\n\nJ'ai appliqué la méthode bête et méchante : '\\( \\infty - \\infty \\) avec des x ? → FACTORISE par le plus grand !' \\( x^2 + 2x - x = x^2\\left(1 + \\frac{2}{x} - \\frac{1}{x}\\right) \\). Quand \\( x \\to +\\infty \\) : \\( \\frac{2}{x} \\to 0 \\) et \\( \\frac{1}{x} \\to 0 \\). Donc la parenthèse → \\( (1 + 0 - 0) = 1 \\). Et \\( x^2 \\to +\\infty \\). Résultat : \\( x^2 \\times 1 = +\\infty \\). J'ai écrit ça proprement en 3 minutes. J'ai eu les 3 points.\n\nCe jour-là, j'ai compris : avoir une MÉTHODE qui marche vaut mieux que 100 astuces. C'est cette méthode que je te donne aujourd'hui.\"",
        },
        {
          type: 'text',
          id: 'b2',
          contenu: "Tu as compris le principe ? Super. Maintenant, on passe à l'action. Le problème en maths, c'est que souvent, on panique parce qu'on ne sait pas par quel bout attraper le monstre. Ici, je te donne un protocole militaire. Si tu le suis, tu ne peux pas te tromper.",
        },
        // ── Enrichissement 2 : Transition ──
        {
          type: 'text',
          id: 'transition-s1-s2',
          contenu:
            "Tu connais l'histoire. Maintenant le protocole lui-même — 5 étapes, dans l'ordre, sans exception. Suis-les et tu ne pourras plus jamais te perdre.",
        },
      ],
    },
    {
      id: 's2',
      titre: '3.1 Le processus en 5 étapes',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b3-accroche',
          contenu:
            "C'est le cœur du chapitre. Ces 5 étapes sont ton protocole pour n'importe quelle limite — au brouillon, sur ta copie, partout.",
        },
        // ── Enrichissement 7 : Micro-motivation avant le contenu MOYEN ──
        {
          type: 'tip',
          id: 'motivation-5-etapes',
          titre: 'Grand Frère te dit',
          contenu: [
            "Faut pas gnan — tu as tout ce qu'il faut pour comprendre ces 5 étapes.",
            "C'est normal si ça semble long la première fois. Relis lentement — le déclic arrive.",
            "Beaucoup d'élèves bloquent ici — pas toi.",
          ],
        },
        {
          type: 'rule',
          id: 'b3',
          titre: 'ÉTAPE 1 — LIRE ET IDENTIFIER',
          contenu: [
            'Où va x ? (vers un nombre ou vers ±∞)',
            'Quelle est la fonction f(x) ?',
            'Exemple : \\( \\lim_{x \\to 2} \\frac{x^2-4}{x-2} \\) → x tend vers 2, fonction = \\( \\frac{x^2-4}{x-2} \\)',
          ],
        },
        {
          type: 'rule',
          id: 'b4',
          titre: 'ÉTAPE 2 — REMPLACER DIRECTEMENT',
          contenu: [
            'Si x → a (nombre), remplace x par a.',
            'Si x → +∞, imagine un "nombre très grand".',
            'Si x → −∞, imagine un "nombre très grand négatif".',
            'Notre exemple : x = 2 dans \\( \\frac{x^2-4}{x-2} \\)',
            'Numérateur : \\( (2)^2 - 4 = 4 - 4 = 0 \\)',
            'Dénominateur : \\( 2 - 2 = 0 \\)',
            'Résultat du remplacement : \\( \\frac{0}{0} \\)',
          ],
        },
        {
          type: 'rule',
          id: 'b5',
          titre: 'ÉTAPE 3 — ANALYSER LE RÉSULTAT',
          contenu: [
            'CAS A : Tu obtiens un NOMBRE → C\'EST FINI ! ✅ (Exemples : 7, -3, 0...)',
            'CAS B : Tu obtiens ±∞ CLAIR → C\'EST FINI ! ✅ (Exemples : +∞, -∞)',
            'CAS C : Tu obtiens une FORME INDÉTERMINÉE → Continue ! ⚠️',
            'Les 4 formes indéterminées : \\( \\frac{0}{0} \\) · \\( \\frac{\\infty}{\\infty} \\) · \\( \\infty - \\infty \\) · \\( 0 \\times \\infty \\)',
            'Notre exemple : On a obtenu \\( \\frac{0}{0} \\) → FORME INDÉTERMINÉE ! On passe à l\'étape 4.',
          ],
        },
        {
          type: 'rule',
          id: 'b6',
          titre: 'ÉTAPE 4 — TRANSFORMER LA FONCTION',
          contenu: [
            '1. Forme \\( \\frac{0}{0} \\) en un point → FACTORISER numérateur et dénominateur.',
            '2. Forme \\( \\infty - \\infty \\) → FACTORISER par le terme dominant.',
            '3. Forme \\( \\frac{\\infty}{\\infty} \\) → FACTORISER haut et bas par les termes dominants.',
            '4. Forme \\( \\infty - \\infty \\) avec racines → Utiliser L\'EXPRESSION CONJUGUÉE.',
            'Notre exemple : \\( \\frac{0}{0} \\) en x = 2 → On factorise !',
            'Numérateur : \\( x^2 - 4 = (x-2)(x+2) \\) (identité remarquable)',
            'Fonction transformée : \\( \\frac{(x-2)(x+2)}{x-2} = x + 2 \\) (on simplifie par \\( (x-2) \\))',
          ],
        },
        {
          type: 'rule',
          id: 'b7',
          titre: 'ÉTAPE 5 — RECALCULER AVEC LA NOUVELLE FORME',
          contenu: [
            'Reprends l\'étape 2 avec la fonction simplifiée.',
            'Remplace à nouveau x par la valeur.',
            'Notre exemple : Nouvelle fonction \\( f(x) = x + 2 \\)',
            '\\( \\lim_{x \\to 2} (x + 2) = 2 + 2 = 4 \\)',
            'Réponse finale : 4 ✅',
          ],
        },
        // ── Enrichissement 3 : Récap intermédiaire ──
        {
          type: 'recap',
          id: 'recap-5-etapes',
          titre: 'Les 5 étapes en un coup d\'œil',
          contenu: [
            '1️⃣ Lire et identifier (où va x ?)',
            '2️⃣ Remplacer directement',
            '3️⃣ Analyser (nombre / ±∞ / forme indéterminée ?)',
            '4️⃣ Transformer si forme indéterminée',
            '5️⃣ Recalculer avec la nouvelle forme',
          ],
        },
        {
          type: 'exercise',
          id: 'ex1',
          niveau: 'BASE',
          enonce: 'APPLICATION COMPLÈTE — Exercice guidé pas à pas : Calculer \\( \\lim_{x \\to 3} \\frac{x^2-9}{x-3} \\)',
          etapes: [
            'ÉTAPE 1 — Identifier : x tend vers 3, fonction = \\( \\frac{x^2-9}{x-3} \\)',
            'ÉTAPE 2 — Remplacer : x = 3 → \\( \\frac{9-9}{3-3} = \\frac{0}{0} \\)',
            'ÉTAPE 3 — Analyser → \\( \\frac{0}{0} \\) = Forme indéterminée ! Continue.',
            'ÉTAPE 4 — Transformer → \\( x^2 - 9 = (x-3)(x+3) \\). Donc \\( \\frac{(x-3)(x+3)}{x-3} = x + 3 \\)',
            'ÉTAPE 5 — Recalculer → \\( \\lim_{x \\to 3} (x + 3) = 3 + 3 = 6 \\)',
          ],
          reponse: '6',
          conseil: 'Chaque fois que tu vois \\( \\frac{0}{0} \\) avec un polynôme, cherche IMMÉDIATEMENT le facteur commun entre numérateur et dénominateur.',
          piege: 'Ne conclus JAMAIS que \\( \\frac{0}{0} = 0 \\) ou \\( \\frac{0}{0} = 1 \\). C\'est une forme indéterminée !',
        },
        // ── Enrichissement 4 : Mini-exercice "À toi de jouer" ──
        {
          type: 'exercise',
          id: 'ex2',
          niveau: 'BASE',
          enonce: '⚡ À toi de jouer : Calculer \\( \\lim_{x \\to 2} \\frac{x^3-8}{x-2} \\). Indice : \\( x^3 - 8 = (x-2)(x^2 + 2x + 4) \\)',
          etapes: [
            'Remplacer : \\( \\frac{8-8}{2-2} = \\frac{0}{0} \\) → Forme indéterminée !',
            'Factoriser : \\( \\frac{(x-2)(x^2+2x+4)}{x-2} = x^2 + 2x + 4 \\)',
            'Recalculer : \\( \\lim_{x \\to 2} (x^2 + 2x + 4) = 4 + 4 + 4 = 12 \\)',
          ],
          reponse: '12',
          conseil: 'Cette méthode marche TOUJOURS ! Si tu bloques, c\'est que tu as sauté une étape. Reviens au début et recommence calmement !',
        },
        // ── Enrichissement 6 : Dialogue vivant ──
        {
          type: 'dialogue',
          id: 'b8',
          pf: "Vieux père, il y a trop de techniques ! Factorisation, conjugué, chefs... je prends quoi pour ne pas me mélanger ? J'ai peur de choisir la mauvaise technique au BAC.",
          gf: "C'est simple petit — et heureusement que tu poses cette question maintenant et pas le jour J ! Regarde juste la FORME de la limite. Si tu vois \\( \\frac{0}{0} \\) en un point → factorisation. Si tu vois \\( \\infty - \\infty \\) avec des polynômes → factorise par x à la plus grande puissance. Si tu vois une racine avec \\( \\infty - \\infty \\) → conjugué. C'est comme au foot : on adapte la tactique selon l'adversaire. Regarde la forme, choisis l'arme !",
        },
        // ── Enrichissement 2 : Transition ──
        {
          type: 'text',
          id: 'transition-s2-s3',
          contenu:
            "Tu as la méthode en 5 étapes. Maintenant on va entrer dans le détail des 4 formes indéterminées — les 4 Boss du chapitre — et comment les vaincre un par un.",
        },
      ],
    },
    {
      id: 's3',
      titre: '3.2 Les formes indéterminées et comment les lever',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b9-accroche',
          contenu:
            "Voilà les 4 Boss. La moitié de la classe panique quand elle les rencontre. Toi, tu vas les connaître par nom et savoir exactement quoi faire pour chacun.",
        },
        // ── Enrichissement 7 : Micro-motivation avant contenu difficile ──
        {
          type: 'tip',
          id: 'motivation-boss',
          titre: 'Grand Frère te dit',
          contenu: [
            "Beaucoup d'élèves bloquent sur les formes indéterminées — mais toi tu as les bases.",
            "Respire. On avance ensemble. Chaque Boss a une faiblesse précise.",
            "C'est normal de bloquer ici. Relis lentement — le déclic arrive.",
          ],
        },
        {
          type: 'text',
          id: 'b9',
          contenu: "Il existe 4 \"Boss\" qui vont essayer de te bloquer. Voici comment les vaincre un par un.",
        },
        {
          type: 'tip',
          id: 'b10',
          titre: 'F.I. n°1 : ∞ − ∞ (Le combat des Titans)',
          contenu: [
            'Pourquoi c\'est indéterminé ? Tu as un terme qui tire vers \\( +\\infty \\) et un autre vers \\( -\\infty \\). On ne sait pas qui est le plus fort.',
            'La Technique : FACTORISER par le "Chef" — le terme de plus grande puissance.',
            'Le "Chef", c\'est le terme qui commande à l\'infini. En le mettant en facteur, tu forces tout le monde à voir sa puissance.',
            'Exemple : \\( \\lim_{x \\to +\\infty} (x^2 + 2x - x) = \\lim x^2\\left(1 + \\frac{2}{x} - \\frac{1}{x}\\right) = \\lim x^2 \\times 1 = +\\infty \\)',
          ],
        },
        {
          type: 'tip',
          id: 'b11',
          titre: 'F.I. n°2 : ∞/∞ (Le Duel des Chefs)',
          contenu: [
            'Technique : FACTORISER numérateur et dénominateur par leurs "Chefs" respectifs.',
            'Exemple : \\( \\lim_{x \\to +\\infty} \\frac{3x^2 + 1}{x^2 + 5} = \\lim \\frac{x^2(3 + \\frac{1}{x^2})}{x^2(1 + \\frac{5}{x^2})} \\)',
            '= \\( \\lim \\frac{3 + \\frac{1}{x^2}}{1 + \\frac{5}{x^2}} = \\frac{3}{1} = 3 \\)',
            'Règle : si les puissances sont égales, c\'est le rapport des coefficients !',
          ],
        },
        {
          type: 'tip',
          id: 'b12',
          titre: 'F.I. n°3 : 0/0 (La Factorisation)',
          contenu: [
            'Technique : FACTORISER par (x - a) ou utiliser le nombre dérivé.',
            'Si racines carrées : Expression conjuguée.',
            'Exemple classique : \\( \\lim_{x \\to 2} \\frac{x^2-4}{x-2} = \\lim \\frac{(x-2)(x+2)}{x-2} = \\lim (x+2) = 4 \\)',
          ],
        },
        {
          type: 'tip',
          id: 'b13',
          titre: 'F.I. n°4 : 0 × ∞ (La Transformation)',
          contenu: [
            'Technique : TRANSFORMER l\'écriture pour se ramener à \\( \\frac{0}{0} \\) ou \\( \\frac{\\infty}{\\infty} \\).',
            'En mettant au même dénominateur ou en développant.',
          ],
        },
        // ── Enrichissement 3 : Récap intermédiaire ──
        {
          type: 'recap',
          id: 'recap-boss',
          titre: 'Les 4 Boss et leurs techniques',
          contenu: [
            '✅ \\( \\infty - \\infty \\) → Factoriser par le Chef (terme de plus grande puissance)',
            '✅ \\( \\frac{\\infty}{\\infty} \\) → Duel des Chefs (factoriser haut et bas)',
            '✅ \\( \\frac{0}{0} \\) → Factoriser par (x - a) ou conjugué',
            '✅ \\( 0 \\times \\infty \\) → Transformer pour se ramener à \\( \\frac{0}{0} \\) ou \\( \\frac{\\infty}{\\infty} \\)',
          ],
        },
        // ── Enrichissement 2 : Transition ──
        {
          type: 'text',
          id: 'transition-s3-s4',
          contenu:
            "Tu connais les 4 Boss. Maintenant le cas spécial qui en surprend beaucoup : les racines carrées. Elles ont leur propre arme — l'expression conjuguée.",
        },
      ],
    },
    {
      id: 's4',
      titre: '3.3 Les limites avec les racines carrées (√...)',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b14-accroche',
          contenu:
            "Les racines carrées dans les limites ? Beaucoup d'élèves les voient et bloquent. Toi, tu vas avoir l'arme parfaite.",
        },
        // ── Enrichissement 7 : Micro-motivation avant exercice MOYEN ──
        {
          type: 'tip',
          id: 'motivation-racines',
          titre: 'Grand Frère te dit',
          contenu: [
            "C'est normal de bloquer sur les racines — relis lentement.",
            "L'expression conjuguée, c'est une technique simple une fois qu'on l'a vue.",
            "Tu as les bases. Faut pas gnan !",
          ],
        },
        {
          type: 'rule',
          id: 'b14',
          titre: 'L\'Expression Conjuguée — L\'arme contre les racines',
          contenu: [
            'Dès que tu vois une racine carrée et une forme \\( \\infty - \\infty \\), ton arme c\'est L\'EXPRESSION CONJUGUÉE.',
            'Le principe : Utiliser l\'identité \\( (a - b)(a + b) = a^2 - b^2 \\) pour faire sauter les racines.',
            'Exemple 1 : \\( \\lim_{x \\to +\\infty} (\\sqrt{x+1} - \\sqrt{x}) \\)',
            'Conjugué : \\( \\sqrt{x+1} + \\sqrt{x} \\)',
            'Numérateur : \\( (x+1) - x = 1 \\)',
            'Dénominateur : \\( \\sqrt{x+1} + \\sqrt{x} \\to +\\infty \\)',
            'Résultat : \\( \\frac{1}{\\infty} = 0 \\)',
          ],
        },
        {
          type: 'exercise',
          id: 'ex3',
          niveau: 'MOYEN',
          enonce: 'Calculer \\( \\lim_{x \\to +\\infty} (\\sqrt{x^2+3} - x) \\)',
          etapes: [
            'Test : \\( +\\infty - \\infty \\) → Forme indéterminée. On utilise le conjugué.',
            'Multiplier par le conjugué : \\( (\\sqrt{x^2+3} + x) \\)',
            'Numérateur : \\( (x^2+3) - x^2 = 3 \\)',
            'Dénominateur : \\( \\sqrt{x^2+3} + x \\to +\\infty \\)',
            'Résultat : \\( \\frac{3}{+\\infty} = 0 \\)',
          ],
          reponse: '0',
          conseil: 'Chaque fois que tu vois √(...) − (polynôme), ton premier réflexe doit être : CONJUGUÉ !',
        },
        // ── Enrichissement 3 : Récap final ──
        {
          type: 'recap',
          id: 'recap-chap4-final',
          titre: '🚀 Récap du Chapitre 3 — La Méthode qui Marche',
          contenu: [
            '✅ 5 étapes : Identifier → Substituer → Analyser → Transformer → Recalculer',
            '✅ 4 Boss : \\( \\infty-\\infty \\) (Chef) · \\( \\frac{\\infty}{\\infty} \\) (Duel) · \\( \\frac{0}{0} \\) (Factoriser) · \\( 0\\times\\infty \\) (Transformer)',
            '✅ Racines carrées → Expression conjuguée (a−b)(a+b) = a²−b²',
          ],
        },
        // ── Enrichissement 7 : Micro-motivation de fin ──
        {
          type: 'tip',
          id: 'motivation-fin-chap4',
          titre: 'Grand Frère te dit',
          contenu: [
            "Tu viens de maîtriser LA méthode qui fait la différence au BAC.",
            "Dans le prochain chapitre, on passe aux astuces des majors — pour aller encore plus vite.",
            "Faut pas gnan. On continue !",
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      type: 'quiz',
      id: 'q1',
      question: 'Quelle est la première étape du processus en 5 étapes ?',
      options: [
        'Factoriser immédiatement',
        'Lire et identifier où va x et quelle est la fonction',
        'Utiliser le conjugué',
        'Chercher les formes indéterminées',
      ],
      bonneReponse: 1,
      explication: 'La première étape est TOUJOURS : Lire et identifier. Où va x ? Quelle est la fonction ? Sans cette étape, tu risques d\'appliquer la mauvaise technique.',
    },
    {
      type: 'quiz',
      id: 'q2',
      question: 'Tu calcules $\\lim_{x \\to 2} \\frac{x^2-4}{x-2}$ et tu obtiens $\\frac{0}{0}$. Quelle technique appliques-tu ?',
      options: [
        'La limite est 0',
        'La limite est 1',
        'Factoriser le numérateur : x² - 4 = (x-2)(x+2)',
        'Utiliser le conjugué',
      ],
      bonneReponse: 2,
      explication: '0/0 en un point → FACTORISER. x² - 4 = (x-2)(x+2). On simplifie par (x-2) → lim(x+2) = 4. La réponse est 4.',
    },
    {
      type: 'quiz',
      id: 'q3',
      question: 'Pour calculer $\\lim_{x \\to +\\infty} \\frac{3x^3+1}{x^3+5}$, que remarques-tu ?',
      options: [
        'Forme 0/0 — on factorise',
        'Forme ∞/∞ — on factorise par le Chef (x³) en haut et en bas',
        'La limite est ∞',
        'La limite est 0 car il y a une division',
      ],
      bonneReponse: 1,
      explication: 'Forme ∞/∞ : on factorise par x³ en haut et en bas. = x³(3 + 1/x³) / x³(1 + 5/x³) = (3+0)/(1+0) = 3. Les puissances sont égales → c\'est le rapport des coefficients leaders.',
    },
    {
      type: 'quiz',
      id: 'q4',
      question: 'Quelle technique utilise-t-on pour $\\lim_{x \\to +\\infty} (\\sqrt{x+1} - \\sqrt{x})$ ?',
      options: [
        'Factorisation par le Chef',
        'Substitution directe',
        'Expression conjuguée — multiplier par (√(x+1) + √x)',
        'Règle de L\'Hôpital',
      ],
      bonneReponse: 2,
      explication: 'Forme ∞ - ∞ avec des racines → Expression conjuguée. On multiplie par (√(x+1) + √x) pour faire sauter les racines et obtenir un résultat calculable.',
    },
    {
      type: 'quiz',
      id: 'q5',
      question: 'Que fait le "Chef" dans la factorisation de $\\lim_{x \\to +\\infty} (x^2 + 2x - x)$ ?',
      options: [
        'Le Chef est 2x — le terme du milieu',
        'Le Chef est x² — le terme de plus haute puissance qui commande à l\'infini',
        'Il n\'y a pas de Chef dans cette limite',
        'Le Chef est -x — le terme négatif',
      ],
      bonneReponse: 1,
      explication: 'Le "Chef" est toujours le terme de plus haute puissance. Ici c\'est x². On factorise : x²(1 + 2/x - 1/x). À l\'infini : 2/x → 0 et 1/x → 0. Résultat : x² × 1 = +∞.',
    },
  ],
};

