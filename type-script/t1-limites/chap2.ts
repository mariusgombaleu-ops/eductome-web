// src/data/t1-limites/chap2.ts
// CHAPITRE 1 — LES BASES SOLIDES
// Tome 1 : Les Limites · Collection Les Clés Maths
// ⚠️ Chapitre gratuit — accessible sans achat

import { Chapitre } from '../../types/course';

export const chapitre1: Chapitre = {
  id: 't1-chap2',
  titre: 'Les Bases Solides',
  duree: 30,
  niveau: 'BASE',
  xpGain: 50,
  gratuit: true,
  objectifs: [
    'Maîtriser les opérations sur les fractions sans paniquer',
    'Comprendre les règles des puissances et exposants',
    'Saisir intuitivement ce que signifie "tendre vers" une valeur',
    'Lire et interpréter le vocabulaire des limites',
  ],
  sections: [
    {
      id: 's1',
      titre: 'Introduction — Pourquoi revenir en arrière ?',
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu:
            "\"C'était un mercredi matin au 'Cacao'. On avait devoir de maths. Le prof écrit au tableau : 'Calculer la limite de (x²-4)/(x-2) quand x tend vers 2.' La moitié de la classe a directement remplacé x par 2 et écrit '0/0 = 0'. FAUX ! L'autre moitié a paniqué en voyant 0/0 et a laissé blanc. Résultat ? Sur 30 élèves, seulement 3 ont eu juste. Pourquoi ? Parce que PERSONNE n'avait compris qu'il fallait FACTORISER d'abord. Ce jour-là, j'ai compris un truc important : en maths, ce qui te bloque c'est rarement la notion elle-même. C'est souvent un OUTIL de base que tu ne maîtrises pas (ici, la factorisation). C'est pour ça qu'on va d'abord réviser les outils. Pas pour perdre du temps, mais pour GAGNER du temps après.\"",
        },
        {
          type: 'text',
          id: 'b2',
          contenu:
            "Champion(ne), avant de plonger dans les limites, on va d'abord poser des fondations solides. Tu sais, c'est comme quand tu veux construire une maison à deux étages : si la fondation n'est pas bonne, tout va s'écrouler dès la première pluie ! Alors prends ton temps ici. Ne saute aucune partie, même si tu te dis \"ça je connais déjà\". C'est souvent dans ces \"petits détails\" que se cachent les erreurs à éviter au BAC.",
        },
        {
          type: 'dialogue',
          id: 'b3',
          pf: "Vieux père, avec tout le respect, on est en Terminale. Pourquoi on perd le temps sur les fractions de la Seconde alors que les limites là me compliquent déjà la vie ?",
          gf: "Excellente question ! Laisse-moi te montrer EXACTEMENT pourquoi avec des exemples concrets de limites.",
        },
        {
          type: 'text',
          id: 'b4',
          contenu: "EXEMPLE 1 — Limite classique au BAC : Calculer lim(x→0) (1/x + 2)\n\nSi tu ne sais pas mettre au même dénominateur, tu es BLOQUÉ dès le départ !\n\nRegarde : 1/x + 2 = ? La bonne réponse : 1/x + 2x/x = (1+2x)/x\n\nMaintenant tu peux analyser la limite. Sans fractions, impossible !",
        },
        {
          type: 'math',
          id: 'b5',
          formule: '\\lim_{x \\to 0} \\left(\\frac{1}{x} + 2\\right)',
          explication: 'Si tu ne maîtrises pas les fractions, tu es bloqué dès cette étape.',
        },
        {
          type: 'text',
          id: 'b6',
          contenu: "EXEMPLE 2 — Forme indéterminée : Calculer lim(x→+∞) (2 - 1/x)(3 + 1/x)\n\nPour lever cette forme ∞/∞, tu DOIS savoir que :\n2 - 1/x = (2x-1)/x  et  3 + 1/x = (3x+1)/x\nEnsuite tu simplifies les x. Encore des fractions !",
        },
        {
          type: 'text',
          id: 'b7',
          contenu: "EXEMPLE 3 — Division de limites : Si tu ne sais pas que 1/(1/x) = x, tu vas galérer sur BEAUCOUP de limites.",
        },
        {
          type: 'dialogue',
          id: 'b8',
          pf: "LA VÉRITÉ",
          gf: "Les limites ne sont PAS de nouvelles maths. Ce sont les MÊMES outils (fractions, puissances, racines) utilisés différemment. Si tes outils de base sont rouillés, comment tu veux construire une maison solide ? On va affûter tes outils en 15 minutes. Après, tu vas VOLER sur les limites. Promis !",
        },
        {
          type: 'dialogue',
          id: 'b9',
          pf: "Ah d'accord ! Maintenant je comprends pourquoi c'est important. Allons-y !",
          gf: "C'est ça même ! On y va.",
        },
      ],
    },
    {
      id: 's2',
      titre: '1.1 Ce qu\'il te faut absolument savoir avant',
      blocs: [
        {
          type: 'text',
          id: 'b10',
          contenu:
            "Écoute, je ne vais pas te mentir : les limites, ce n'est pas de la sorcellerie. MAIS, il y a quelques outils de base (niveau 3ème et Seconde) que tu dois maîtriser les yeux fermés. Si tu beugues là-dessus, tu vas galérer pour rien.",
        },
      ],
    },
    {
      id: 's3',
      titre: 'A. Les opérations sur les fractions (Le cauchemar des élèves)',
      blocs: [
        {
          type: 'text',
          id: 'b11',
          contenu:
            "Oui, je sais, tu vas me dire \"Grand frère, on a fait ça en 6ème !\". Mais crois-moi, beaucoup d'erreurs dans les calculs de limites viennent d'une mauvaise gestion des fractions. On révise express :",
        },
        {
          type: 'tip',
          id: 'b12',
          titre: 'Additionner (Le Piège) — MÊME DÉNOMINATEUR obligatoire',
          contenu: [
            "C'est comme au marché : tu ne peux pas additionner des ignames et des bananes. Il faut tout convertir en \"kilos\" ou en \"tas\".",
            "Formule : a/b + c/d = (ad+bc) / bd",
            "Exemple : 1/x + 2 = 1/x + 2x/x = (1+2x)/x",
          ],
        },
        {
          type: 'math',
          id: 'b13',
          formule: '\\frac{a}{b} + \\frac{c}{d} = \\frac{ad+bc}{bd}',
          explication: 'Réduction au même dénominateur — indispensable pour les limites',
        },
        {
          type: 'tip',
          id: 'b14',
          titre: 'Multiplier (Le Facile) — Haut avec Haut, Bas avec Bas',
          contenu: [
            "Formule : a/b × c/d = (a×c) / (b×d)",
          ],
        },
        {
          type: 'math',
          id: 'b15',
          formule: '\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}',
        },
        {
          type: 'tip',
          id: 'b16',
          titre: 'Diviser (L\'Astuce) — Multiplier par l\'inverse',
          contenu: [
            "Diviser par une fraction, c'est multiplier par son inverse. On retourne la fraction du bas !",
            "Formule : a/b ÷ c/d = a/b × d/c",
            "Exemple classique en limites : 1/(1/x) = 1 × x/1 = x",
          ],
        },
        {
          type: 'math',
          id: 'b17',
          formule: '\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}',
          explication: 'Exemple classique en limites : 1/(1/x) = x',
        },
      ],
    },
    {
      id: 's4',
      titre: 'B. Les puissances et exposants (Qui est le plus fort ?)',
      blocs: [
        {
          type: 'analogy',
          id: 'b18',
          titre: 'Les deux lutteurs',
          contenu:
            "Les puissances, c'est ce qui va déterminer \"qui est le chef\" dans une limite à l'infini. Imagine deux lutteurs : x² et x³. Quand x devient très grand, x³ gagne toujours car il est plus \"puissant\". C'est exactement comme ça que tu dois penser les limites à l'infini — qui des deux termes grandit le plus vite ?",
          conceptMath:
            "Dans une limite à l'infini, la puissance la plus grande domine. x³ écrase x² quand x → +∞.",
        },
        {
          type: 'table',
          id: 'b19',
          titre: 'Règles de survie à connaître par cœur',
          headers: ['Règle', 'Formule et exemple'],
          rows: [
            ['Multiplication', 'xⁿ × xᵐ = xⁿ⁺ᵐ  →  x² × x³ = x⁵ (On additionne les forces)'],
            ['Division', 'xⁿ / xᵐ = xⁿ⁻ᵐ  →  x⁵/x² = x³ (On soustrait les forces)'],
            ['Puissance', '(xⁿ)ᵐ = xⁿˣᵐ  →  (x²)³ = x⁶ (On multiplie les forces)'],
            ['Inverse', '1/xⁿ = x⁻ⁿ  →  x⁻² = 1/x² (Quand tu montes, le signe change)'],
          ],
        },
      ],
    },
    {
      id: 's5',
      titre: 'C. La notion de "se rapprocher" d\'un nombre',
      blocs: [
        {
          type: 'text',
          id: 'b20',
          contenu:
            "Bon, là on arrive au cœur du sujet. Une limite, c'est TOUJOURS une histoire de mouvement.",
        },
        {
          type: 'analogy',
          id: 'b21',
          titre: "L'Analogie du Gbaka — Adjamé vers Grand-Bassam",
          contenu:
            "Tu prends un gbaka d'Adjamé vers Grand-Bassam. x = Le TEMPS écoulé (en minutes). f(x) = La DISTANCE parcourue depuis Adjamé (km).\n\nSITUATION 1 — Tu vas à une destination précise : Le gbaka roule vers Grand-Bassam (situé à 40 km). x = 0 min → f(0) = 0 km (départ d'Adjamé). x = 10 min → f(10) = 10 km (tu es à Marcory). x = 20 min → f(20) = 20 km (tu es à Treichville). x = 30 min → f(30) = 30 km (tu approches de Bassam). x = 40 min → f(40) = 40 km (tu arrives à Bassam).\n\nSITUATION 2 — Le gbaka roule sans s'arrêter : Maintenant, imagine que le gbaka roule indéfiniment (x → +∞). Si la route finit à Bassam (40 km max) → f(x) tend vers 40 (limite finie). Si la route continue sans fin → f(x) tend vers +∞ (limite infinie).",
          conceptMath:
            "Limite = Prédire où tu vas ABOUTIR. lim f(x) quand x→40 = 40 km. C'est ça une LIMITE : PRÉDIRE vers quelle valeur tu tends.",
        },
        {
          type: 'recap',
          id: 'b22',
          titre: 'Ce qu\'il faut retenir',
          contenu: [
            'x = Ce qui VARIE (le temps, la variable)',
            'f(x) = Ce qu\'on OBSERVE (distance, résultat)',
            'lim f(x) = Prédire le COMPORTEMENT de f(x) quand x s\'approche de a',
          ],
        },
        {
          type: 'text',
          id: 'b23',
          contenu:
            "EXEMPLE MATHÉMATIQUE CONCRET : Fonction f(x) = 2x + 5. Question : lim(x→10) f(x) = ?\n\nInterprétation gbaka : x = 10 min (temps). f(10) = 2(10) + 5 = 25 km (distance).\n\nRéponse : Quand x tend vers 10, f(x) tend vers 25. C'est ça une limite : savoir où tu VAS !",
        },
        {
          type: 'math',
          id: 'b24',
          formule: '\\lim_{x \\to 10} f(x) = 25',
          explication: 'Quand x tend vers 10, f(x) = 2x + 5 tend vers 25.',
        },
      ],
    },
    {
      id: 's6',
      titre: 'D. Comment lire le symbole "tend vers" correctement',
      blocs: [
        {
          type: 'text',
          id: 'b25',
          contenu:
            "Ce symbole → est une flèche. Elle veut dire \"tend vers\".\n- x → 2 se lit : \"x tend vers 2\" (x se colle au 2).\n- x → +∞ se lit : \"x tend vers plus l'infini\" (x part très loin à droite).",
        },
        {
          type: 'table',
          id: 'b26',
          titre: 'Tableau des notations officielles',
          headers: ['Notation', 'Signification'],
          rows: [
            ['x → 2', 'x se rapproche de 2 (sans forcément y toucher)'],
            ['x → +∞', 'x grandit sans limite (devient très grand)'],
            ['x → 2⁺', 'x s\'approche de 2 par la DROITE (2,001 ; 2,0001...)'],
            ['x → 2⁻', 'x s\'approche de 2 par la GAUCHE (1,999 ; 1,9999...)'],
          ],
        },
        {
          type: 'dialogue',
          id: 'b27',
          pf: "Vieux père, quand je vois 'lim f(x) quand x→2', est-ce que je remplace simplement x par 2 et c'est fini ?",
          gf: "Excellente question ! Je vais te donner la méthode PRÉCISE en 2 étapes.",
        },
        {
          type: 'rule',
          id: 'b28',
          titre: 'Règle d\'Or — La méthode en 2 étapes',
          contenu: [
            '1. REMPLACE toujours en premier — C\'est le réflexe numéro 1 : remplacer !',
            '2. Si ça marche → C\'EST FINI !',
            '3. Si ça donne 0/0 ou ∞/∞ ou ∞ − ∞ ou 0 × ∞ → Transforme puis remplace à nouveau',
          ],
        },
        {
          type: 'dialogue',
          id: 'b29',
          pf: "Ah ! Donc je commence TOUJOURS par remplacer, et si ça bloque, là je transforme ?",
          gf: "EXACTEMENT ! Tu as tout compris. La substitution directe, c'est le réflexe numéro 1. Si ça passe pas, là tu sors tes techniques (factorisation, conjugué, etc.). Mais on teste le plus simple d'abord !",
        },
        {
          type: 'dialogue',
          id: 'b30',
          pf: "Parfait ! Ça clarifie tout !",
          gf: "On avance, Champion(ne) !",
        },
        {
          type: 'warning',
          id: 'b31',
          titre: 'ATTENTION MON PETIT !',
          contenu: [
            "Quand on écrit x → 2, ça ne veut PAS dire que x = 2.",
            "Non ! Ça veut dire que x vaut 1,9999... ou 2,0001... Il est voisin, mais il n'est pas forcément égal.",
            "C'est toute la subtilité des limites.",
          ],
        },
      ],
    },
    {
      id: 's7',
      titre: '1.2 Le vocabulaire des limites expliqué simplement',
      blocs: [
        {
          type: 'text',
          id: 'b32',
          contenu:
            "Les profs adorent les mots compliqués. On va traduire ça en langage de quartier pour que ce soit clair dans ta tête.",
        },
        {
          type: 'table',
          id: 'b33',
          titre: 'Dictionnaire des limites — version Grand Frère',
          headers: ['Le prof dit...', 'Ça veut dire en vrai...'],
          rows: [
            ['lim f(x) quand x → a', 'La valeur vers laquelle tend f(x) quand x s\'approche de a'],
            ['"f(x) tend vers L" s\'écrit f(x) → L', 'Les résultats de tes calculs se stabilisent autour du nombre L. C\'est le terminus.'],
            ['Forme indéterminée', 'Un résultat ambigu (0/0 ou ∞/∞) qu\'il faut lever avec une technique'],
            ['Asymptote verticale x = a', 'Ligne droite DEBOUT : f(x) explose vers ±∞ quand x → a'],
            ['Asymptote horizontale y=b', 'Ligne droite COUCHÉE : f(x) se calme vers b quand x → ±∞'],
            ['Limite à gauche / droite', 'On s\'approche de a par x < a (gauche) ou x > a (droite)'],
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      type: 'quiz',
      id: 'q1',
      question: 'Que vaut $\\frac{1}{x} + 2$ mis au même dénominateur ?',
      options: [
        '$\\frac{3}{x}$',
        '$\\frac{1+2x}{x}$',
        '$\\frac{2}{x}$',
        '$\\frac{1+2}{x}$',
      ],
      bonneReponse: 1,
      explication:
        '1/x + 2 = 1/x + 2x/x = (1+2x)/x. Pour additionner des fractions, il faut le même dénominateur. On convertit 2 en 2x/x.',
    },
    {
      type: 'quiz',
      id: 'q2',
      question: 'Que vaut $x^5 \\div x^2$ ?',
      options: [
        '$x^{10}$',
        '$x^3$',
        '$x^7$',
        '$x^{2.5}$',
      ],
      bonneReponse: 1,
      explication:
        'Pour diviser des puissances de même base, on soustrait les exposants : x⁵ ÷ x² = x⁵⁻² = x³.',
    },
    {
      type: 'quiz',
      id: 'q3',
      question: 'Dans l\'analogie du gbaka, que représente f(x) ?',
      options: [
        'Le temps écoulé',
        'La destination finale',
        'La distance parcourue depuis Adjamé',
        'La vitesse du gbaka',
      ],
      bonneReponse: 2,
      explication:
        'Dans l\'analogie : x = le temps (ce qui varie), f(x) = la distance parcourue (ce qu\'on observe). La limite, c\'est prédire où tu vas aboutir.',
    },
    {
      type: 'quiz',
      id: 'q4',
      question: 'Que signifie $x \\to 2^-$ ?',
      options: [
        'x est négatif',
        'x s\'approche de 2 par la droite',
        'x s\'approche de 2 par la gauche (1,999 ; 1,9999...)',
        'x est égal à -2',
      ],
      bonneReponse: 2,
      explication:
        'x → 2⁻ signifie que x s\'approche de 2 par la GAUCHE, c\'est-à-dire par des valeurs inférieures à 2 (1,999 ; 1,9999...). Le signe ⁻ indique "par en dessous".',
    },
    {
      type: 'quiz',
      id: 'q5',
      question: 'Tu calcules lim f(x) et tu obtiens 0/0. Que fais-tu ?',
      options: [
        'La limite est 0',
        'La limite n\'existe pas',
        'Tu conclus que la limite est 1',
        'C\'est une forme indéterminée — tu dois factoriser ou transformer',
      ],
      bonneReponse: 3,
      explication:
        '0/0 est une forme indéterminée — elle ne donne aucune information directe. Tu dois lever cette forme avec une technique (factorisation, conjugué, etc.) avant de conclure.',
    },
  ],
};
