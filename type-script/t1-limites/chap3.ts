// src/data/t1-limites/chap3.ts
// CHAPITRE 2 — COMPRENDRE LES LIMITES COMME UN PRO
// Tome 1 : Les Limites · Collection Les Clés Maths

import { Chapitre } from '../../types/course';

export const chapitre2: Chapitre = {
  id: 't1-chap3',
  titre: 'Comprendre les Limites comme un Pro',
  duree: 35,
  niveau: 'BASE',
  xpGain: 60,
  gratuit: false,
  objectifs: [
    'Distinguer parfaitement image f(a) et limite lim f(x)',
    'Comprendre les 4 types de limites et leurs représentations graphiques',
    'Identifier les formes indéterminées et savoir quoi faire',
    'Ne plus jamais confondre asymptote verticale et horizontale',
  ],
  sections: [
    {
      id: 's1',
      titre: '2.1 C\'est quoi une limite ? L\'explication qu\'on te cache',
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu: "Maintenant que tu as tes chaussures (les bases), on va apprendre à marcher. Si tu comprends ce chapitre, tu as fait 60% du travail pour le BAC.",
        },
        {
          type: 'rule',
          id: 'b2',
          titre: 'IMAGE = la valeur de f pile au point a',
          contenu: [
            'IMAGE f(a) = Regarder EXACTEMENT au point a',
            'f(3) = la valeur de f pile à x = 3',
            'Si x = 3 est INTERDIT (trou, division par 0), alors f(3) N\'EXISTE PAS !',
            'Exemple : f(x) = (x² - 9)/(x - 3). f(3) = (9-9)/(3-3) = 0/0 → INTERDIT !',
            'Conclusion : L\'image f(3) N\'EXISTE PAS.',
          ],
        },
        {
          type: 'rule',
          id: 'b3',
          titre: 'LIMITE = Regarder AUTOUR du point a',
          contenu: [
            'C\'est comme demander : "Si je m\'APPROCHE de x = 3, vers quelle valeur je tends ?"',
            'Pour f(x) = (x² - 9)/(x - 3) : On peut SIMPLIFIER avant !',
            'x² - 9 = (x - 3)(x + 3)',
            'Donc f(x) = (x-3)(x+3)/(x-3) = x + 3 (si x ≠ 3)',
            'En regardant AUTOUR de 3 : f(2,9) = 5,9 · f(2,99) = 5,99 · f(3,001) = 6,001',
            'On voit clairement que f(x) s\'approche de 6 !',
            'lim(x→3) f(x) = lim(x→3) (x+3) = 6',
          ],
        },
        {
          type: 'math',
          id: 'b4',
          formule: '\\lim_{x \\to 3} f(x) = 6 \\text{ même si } f(3) \\text{ n\'existe pas !}',
          explication: 'La limite existe (= 6) même si f(3) n\'existe pas !',
        },
        {
          type: 'dialogue',
          id: 'b5',
          pf: "Ah ! Donc la limite peut exister même si la fonction n'est pas définie au point ?",
          gf: "EXACTEMENT, petit ! C'est TOUTE la puissance de la limite. Elle regarde le COMPORTEMENT AUTOUR du point, pas le point lui-même. L'image f(a) = la photo exacte. La limite = la tendance autour. Deux choses différentes mais complémentaires !",
        },
        {
          type: 'rule',
          id: 'b6',
          titre: 'Règle d\'Or',
          contenu: [
            'La limite regarde le COMPORTEMENT AUTOUR du point, PAS le point lui-même !',
          ],
        },
      ],
    },
    {
      id: 's2',
      titre: 'L\'Analogie du Marché d\'Adjamé',
      blocs: [
        {
          type: 'analogy',
          id: 'b7',
          titre: 'La négociation au marché d\'Adjamé',
          contenu: "Tu veux acheter un sac d'attiéké au marché d'Adjamé. La négociation commence : Tour 1 : Vendeur propose 500F, toi 200F → Écart = 300F. Tour 2 : Vendeur propose 450F, toi 250F → Écart = 200F. Tour 3 : Vendeur propose 425F, toi 275F → Écart = 150F. Tour 4 : Vendeur propose 400F, toi 300F → Écart = 100F. Tour 5 : Vendeur propose 375F, toi 325F → Écart = 50F. Tour 6 : Vendeur propose 360F, toi 340F → Écart = 20F...\n\nSi vous continuez indéfiniment (x → +∞), vers quoi tend l'écart ? Vers 0 ! L'écart diminue, diminue, diminue...\n\nATTENTION — Nuance importante : Est-ce que l'écart devient VRAIMENT 0 à la fin ? Pas forcément ! Cas 1 : Vous tombez d'accord à 350F → Écart = 0 ✅. Cas 2 : Vous abandonnez la négociation → Écart ≠ 0 ✗",
          conceptMath: "Une limite te dit la TENDANCE (vers où tu vas), mais pas si tu y arrives vraiment ! C'est ça une limite : la DIRECTION, pas forcément l'arrivée.",
        },
      ],
    },
    {
      id: 's3',
      titre: '2.2 Les 4 types de limites',
      blocs: [
        {
          type: 'text',
          id: 'b8',
          contenu: "En Terminale, tu vas rencontrer différentes situations de limites. Au lieu de les apprendre par cœur, comprends la LOGIQUE derrière. Poses-toi toujours ces 2 questions : QUESTION 1 : Où va x ? · QUESTION 2 : Où va f(x) ?",
        },
        {
          type: 'table',
          id: 'b9',
          titre: 'Tableau complet des 4 situations',
          headers: ['x tend vers', 'f(x) tend vers', 'Interprétation'],
          rows: [
            ['Un nombre a (ex: x→3)', 'Un nombre L (ex: f→5)', 'CAS 1 : Substitution directe (le plus simple)'],
            ['Un nombre a (x→2)', '±∞', 'CAS 2 : Asymptote verticale x = a'],
            ['±∞ (ex: x→+∞)', 'Un nombre L (ex: f→0)', 'CAS 3 : Asymptote horizontale y = L'],
            ['±∞ (ex: x→+∞)', '±∞ (f→+∞)', 'CAS 4 : Croissance illimitée (polynômes, eˣ...)'],
          ],
        },
        {
          type: 'text',
          id: 'b10',
          contenu: "A. Limite FINIE en un point FINI (Tout est calme) : C'est le cas gentil. Tu remplaces x par le nombre, et tu trouves un résultat normal.\n\nExemple : lim(x→1) (2x + 3). Calcul : Je remplace x par 1. 2(1) + 3 = 5. La limite est 5.",
        },
        {
          type: 'figure',
          id: 'b11',
          src: '/figures/t1/chap3-fig1.png',
          legende: 'Graphe de f(x) = 2x + 3 — limite finie en x = 1, la courbe passe normalement par le point',
          alt: 'Droite f(x) = 2x + 3 avec point lim = 5 marqué en x = 1',
        },
        {
          type: 'text',
          id: 'b12',
          contenu: "B. Limite INFINIE en un point FINI (L'Asymptote Verticale) : Pourquoi ça \"explose\" ? C'est quand tu divises un nombre réel par quelque chose de minuscule (proche de 0).\n\nRègle d'or : Un nombre divisé par Zéro (qui n'est pas nul mais tout petit) donne l'Infini. 1/0 → ∞\n\nExemple concret : lim(x→2) 1/(x-2). Si x est un tout petit peu plus grand que 2 (ex: 2,001), alors x - 2 est un \"zéro positif\" → 1/0⁺ = +∞",
        },
        {
          type: 'figure',
          id: 'b13',
          src: '/figures/t1/chap3-fig2.png',
          legende: 'Graphe de f(x) = 1/(x-2) — asymptote verticale en x = 2 visible',
          alt: 'Hyperbole 1/(x-2) avec asymptote verticale x = 2 en pointillés rouges',
        },
        {
          type: 'analogy',
          id: 'b14',
          titre: 'Partager 1 000F au Stade Houphouët-Boigny',
          contenu: "C'est la finale CAN 2023, Côte d'Ivoire vs Nigeria, au stade Houphouët-Boigny d'Abidjan. Tu as gagné 1000F et tu veux le partager équitablement entre TOUS les spectateurs du stade. Combien chaque personne va recevoir ?\n\n10 personnes : 1000F ÷ 10 = 100F/personne · 100 personnes : 10F/personne · 1 000 personnes : 1F/personne · 10 000 personnes : 0,1F/personne · 1 000 000 personnes : 0,001F/personne.\n\nTu vois le pattern ? Plus il y a de monde, MOINS chaque personne reçoit !",
          conceptMath: "f(n) = 1000/n. Quand n → +∞ (énormément de spectateurs) : f(n) → 0. Un nombre FIXE divisé par quelque chose de TRÈS GRAND → donne quelque chose de TRÈS PETIT (tend vers 0). Pour tout nombre k : lim(x→+∞) (k/x) = 0",
        },
        {
          type: 'figure',
          id: 'b15',
          src: '/figures/t1/chap3-fig3.png',
          legende: 'Graphe de f(x) = 1/x — asymptote horizontale y = 0 visible à l\'infini',
          alt: 'Hyperbole f(x) = 1/x avec asymptote horizontale y = 0 et label HORIZON',
        },
        {
          type: 'text',
          id: 'b16',
          contenu: "D. Limite INFINIE à l'INFINI (La Fusée) : Là, il n'y a pas de frein. x grandit, et f(x) grandit aussi.\n\nL'image : Une fusée qui décolle. Plus le temps passe, plus elle va haut.\n\nExemple : lim(x→+∞) x² = +∞",
        },
      ],
    },
    {
      id: 's4',
      titre: 'Asymptotes — Le mystère résolu',
      blocs: [
        {
          type: 'dialogue',
          id: 'b17',
          pf: "Vieux père, j'ai vraiment peur de mélanger l'asymptote verticale et l'asymptote horizontale. Les deux parlent d'une ligne droite, je confonds tout !",
          gf: "Je comprends ta confusion, petit. Mais je vais te donner une astuce INFAILLIBLE pour ne JAMAIS les mélanger. Écoute bien :",
        },
        {
          type: 'tip',
          id: 'b18',
          titre: 'Astuce INFAILLIBLE pour différencier les asymptotes',
          contenu: [
            'ASYMPTOTE VERTICALE = Ligne droite DEBOUT (x = a)',
            '→ Quand x s\'approche d\'un point précis, f(x) explose vers ±∞',
            '→ Image : C\'est un MUR VERTICAL. Tu ne peux PAS traverser le point x = a.',
            '',
            'ASYMPTOTE HORIZONTALE = Ligne droite COUCHÉE (y = b)',
            '→ Quand x part très loin (vers ±∞), f(x) se stabilise vers une valeur b',
            '→ Image : C\'est l\'HORIZON. Plus tu vas loin, plus tu t\'approches d\'une ligne horizontale.',
            '',
            'Pour différencier : Verticale → x = ... → en UN POINT précis',
            'Horizontale → y = ... → quand x part LOIN',
          ],
        },
        {
          type: 'dialogue',
          id: 'b19',
          pf: "Ah ! Donc verticale c'est quand x a une valeur INTERDITE et que ça explose, et horizontale c'est quand x part à l'infini et que f(x) se calme ?",
          gf: "EXACTEMENT ! Tu as tout compris ! Pour résumer : Verticale → BOOM en un point (x = a). Horizontale → CALME au loin (y = b). Ne les mélange plus jamais !",
        },
        {
          type: 'dialogue',
          id: 'b20',
          pf: "Merci vieux père ! C'est super clair maintenant !",
          gf: "On va gâter le coin, Champion(ne) !",
        },
      ],
    },
    {
      id: 's5',
      titre: '2.3 Les pièges à éviter',
      blocs: [
        {
          type: 'text',
          id: 'b21',
          contenu: "Attention Champion(ne), voici là où 90% des copies perdent des points. Lis bien ça.",
        },
        {
          type: 'warning',
          id: 'b22',
          titre: 'Piège 1 — Confondre +∞ et −∞',
          contenu: [
            'Quand x → −∞, que vaut x² ?',
            'x est un nombre négatif très grand (ex: -1000, -10 000...)',
            'Or (-1000)² = 1 000 000 → POSITIF !',
            'Donc : lim(x→−∞) x² = +∞ (le carré efface le signe)',
            'Par contre : lim(x→−∞) x³ = −∞ (le cube conserve le signe)',
            'ATTENTION : On ne dit JAMAIS "(-∞)² = +" sur une copie.',
            'On dit "quand x → −∞, x² → +∞".',
          ],
        },
        {
          type: 'warning',
          id: 'b23',
          titre: 'Piège 2 — Écrire ∞ − ∞ = 0 ou ∞/∞ = 1',
          contenu: [
            'Pourquoi c\'est indéterminé ? Imagine deux routes infinies. L\'une te tire vers +∞, l\'autre vers −∞. Qui gagne ? Ça dépend de laquelle est plus puissante.',
            'lim(x→+∞) (x² − x) : x² gagne → résultat +∞',
            'lim(x→+∞) (x − x) : égalité → résultat 0',
            'lim(x→+∞) (x − x²) : x² gagne → résultat −∞',
            'Le même ∞ − ∞ peut donner +∞, 0, ou −∞ selon les cas !',
            'Sur ta copie, écris toujours : "On obtient une forme indéterminée du type ∞ − ∞. On va lever cette indétermination en..."',
          ],
        },
        {
          type: 'warning',
          id: 'b24',
          titre: 'Piège 3 — Remplacer directement dans une forme indéterminée',
          contenu: [
            'Si tu obtiens 0/0 ou ∞/∞, STOP. Ne conclus pas 0 ou 1.',
            'C\'est une forme indéterminée : applique les techniques du Chapitre 3.',
          ],
        },
        {
          type: 'warning',
          id: 'b25',
          titre: 'Piège 4 — Oublier le signe du 0 dans le dénominateur',
          contenu: [
            'Si tu divises par un "zéro positif" (0⁺) → résultat +∞',
            'Si tu divises par un "zéro négatif" (0⁻) → résultat −∞',
            'Le signe change TOUT !',
          ],
        },
        {
          type: 'tip',
          id: 'b26',
          titre: 'Conseil du Grand Frère — Le GPS des limites',
          contenu: [
            'Lire une limite c\'est comme lire une carte GPS : tu dois d\'abord savoir OÙ VA x, puis déduire OÙ VA f(x).',
            'Si tu gardes ces 2 questions en tête, tu ne te perdras jamais !',
          ],
        },
      ],
    },
    {
      id: 's6',
      titre: '2.4 Quand la limite n\'existe PAS',
      blocs: [
        {
          type: 'dialogue',
          id: 'b27',
          pf: "Vieux père, est-ce qu'une limite peut ne pas exister du tout ?",
          gf: "Oui, petit. Et c'est souvent là que les élèves perdent des points en essayant de trouver une réponse là où il n'y en a pas.",
        },
        {
          type: 'text',
          id: 'b28',
          contenu: "Cas classique : limite à gauche ≠ limite à droite. Pour que lim(x→a) f(x) existe, il faut que f(x) arrive au même endroit qu'on vienne de la gauche ou de la droite.\n\nExemple concret : f(x) = |x|/x. Si x → 0⁺ (on s'approche de 0 par la droite, x > 0) : f(x) = x/x = 1. Si x → 0⁻ (on s'approche de 0 par la gauche, x < 0) : f(x) = −x/x = −1.\n\nLimite à droite = 1 ≠ Limite à gauche = −1. CONCLUSION : La limite en 0 N'EXISTE PAS.",
        },
        {
          type: 'rule',
          id: 'b29',
          titre: 'Règle d\'Or — Existence de la limite',
          contenu: [
            'lim(x→a) f(x) existe ⟺ lim(x→a⁺) f(x) = lim(x→a⁻) f(x)',
            'Sur ta copie, si tu trouves +∞ d\'un côté et −∞ de l\'autre :',
            '"Les limites à gauche et à droite sont différentes, donc la limite en a n\'existe pas."',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      type: 'quiz',
      id: 'q1',
      question: 'Pour $f(x) = \\frac{x^2-9}{x-3}$, que vaut $f(3)$ ?',
      options: [
        '6',
        '0',
        'N\'existe pas — division par zéro',
        '3',
      ],
      bonneReponse: 2,
      explication: 'f(3) = (9-9)/(3-3) = 0/0 → INTERDIT ! L\'image f(3) N\'EXISTE PAS. Par contre, la LIMITE en x=3 existe et vaut 6 (car on peut factoriser et simplifier).',
    },
    {
      type: 'quiz',
      id: 'q2',
      question: 'Que vaut $\\lim_{x \\to -\\infty} x^2$ ?',
      options: [
        '−∞',
        '+∞',
        '0',
        'N\'existe pas',
      ],
      bonneReponse: 1,
      explication: 'Quand x → −∞, x est un nombre négatif très grand. Mais x² = (nombre négatif)² = toujours positif ! (-1000)² = 1 000 000. Donc lim(x→−∞) x² = +∞.',
    },
    {
      type: 'quiz',
      id: 'q3',
      question: 'L\'asymptote horizontale y = b apparaît quand :',
      options: [
        'x s\'approche d\'un point précis et f(x) explose',
        'x tend vers ±∞ et f(x) se stabilise vers b',
        'f(x) n\'est pas définie en un point',
        'x² tend vers l\'infini',
      ],
      bonneReponse: 1,
      explication: 'L\'asymptote horizontale (ligne COUCHÉE) apparaît quand x part très loin (±∞) et que f(x) se calme vers une valeur fixe b. C\'est l\'HORIZON. Asymptote verticale (ligne DEBOUT) c\'est l\'inverse.',
    },
    {
      type: 'quiz',
      id: 'q4',
      question: 'Pour $f(x) = |x|/x$, la limite en $x = 0$ :',
      options: [
        'Vaut 1',
        'Vaut −1',
        'Vaut 0',
        'N\'existe pas — les limites à gauche et à droite sont différentes',
      ],
      bonneReponse: 3,
      explication: 'Limite à droite (x→0⁺) = 1. Limite à gauche (x→0⁻) = −1. Elles sont différentes → la limite en 0 N\'EXISTE PAS.',
    },
    {
      type: 'quiz',
      id: 'q5',
      question: 'Quelle est la "leçon mathématique" de l\'analogie du marché d\'Adjamé ?',
      options: [
        'Une limite donne toujours un résultat exact',
        'Une limite te dit la TENDANCE (direction), mais pas si tu y arrives vraiment',
        'Les limites sont toujours nulles',
        'Une limite n\'existe que si la fonction est définie au point',
      ],
      bonneReponse: 1,
      explication: 'L\'analogie du marché montre qu\'une limite indique la DIRECTION vers laquelle tu tends, mais pas nécessairement si tu arrives à cette valeur. C\'est la DIRECTION, pas forcément l\'arrivée !',
    },
  ],
};
