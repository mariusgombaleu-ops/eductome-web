import { Collection } from '../types';

export const collectionsData: Collection[] = [
  {
    id: "cles-maths",
    emoji: "📐",
    badge: "BEST-SELLER",
    image: "/covers/cles-maths.png",
    title: "Les Clés Maths",
    description: "Tout le programme de Terminale, tome par tome. Comprends enfin les notions qui te bloquent.",
    mission: "Te faire maîtriser l'intégralité du programme, un chapitre à la fois, sans sauter d'étapes.",
    valeur: [
      "Des explications claires, étape par étape, pour comprendre le cours comme si un grand frère te parlait.",
      "Des méthodologies, astuces et stratégies infaillibles pour aborder n'importe quel exercice sereinement.",
      "Le kit de survie pour le BAC : erreurs fréquentes à éviter, les questions récurrentes, et astuces d'examen pour valider haut la main."
    ],
    tag: "SÉRIES C & D",
    color: "#1976D2",
    link: "https://selar.com/m/eductome",
    format: "Livre Physique & PDF",
    tomesCount: 11,
    tomes: [
      { id: "t1", title: "Tome 1 : Les Limites", image: "/covers/tomes/cover-t1.png" },
      { id: "t2", title: "Tome 2 : Les Dérivées", image: "/covers/tomes/cover-t2.png" },
      { id: "t3", title: "Tome 3 : Primitives et Intégrales", image: "/covers/tomes/cover-t3.png" },
      { id: "t4", title: "Tome 4 : Suites Numériques", image: "/covers/tomes/cover-t4.png" },
      { id: "t5", title: "Tome 5 : Logarithmes et Exponentielles", image: "/covers/tomes/cover-t5.png" },
      { id: "t6", title: "Tome 6 : Fonctions Trigonométriques", image: "/covers/tomes/cover-t6.png" },
      { id: "t7", title: "Tome 7 : Probabilités", image: "/covers/tomes/cover-t7.png" },
      { id: "t8", title: "Tome 8 : Statistiques", image: "/covers/tomes/cover-t8.png" },
      { id: "t9", title: "Tome 9 : Géométrie dans l'espace", image: "/covers/tomes/cover-t9.jpeg" },
      { id: "t10", title: "Tome 10 : Nombres Complexes", image: "/covers/tomes/cover-t10.png" },
      { id: "t11", title: "Tome 11 : Équations Différentielles", image: "/covers/tomes/cover-t11.png" }
    ]
  },
  {
    id: "cles-sciences",
    emoji: "🔬",
    image: "/covers/cles-sciences.png",
    title: "Les Clés Sciences",
    description: "Physique-Chimie, organisé par bloc d'exercices.",
    mission: "Décortiquer la Physique-Chimie par type d'exercices pour que rien ne te surprenne au Bac.",
    valeur: [
      "Des explications claires, étape par étape, pour comprendre le cours comme si un grand frère te parlait.",
      "Des méthodologies, astuces et stratégies infaillibles pour aborder n'importe quel exercice sereinement.",
      "Le kit de survie pour le BAC : erreurs fréquentes à éviter, les questions récurrentes, et astuces d'examen pour valider haut la main."
    ],
    tag: "SÉRIES C & D",
    color: "#6A1B9A",
    link: "https://selar.com/m/eductome",
    format: "Livre Physique & PDF",
    tomesCount: 3
  },
  {
    id: "derniers-codes",
    emoji: "⚡",
    badge: "NOUVEAU",
    image: "/covers/derniers-codes.png",
    title: "Les Derniers Codes",
    description: "L'essentiel d'un chapitre en 20 pages. Pour les révisions de dernière minute.",
    mission: "Te sauver la mise la veille d'un devoir avec l'essentiel condensé en quelques pages.",
    valeur: [
      "L'essentiel du cours condensé pour un gain de temps massif avant le devoir.",
      "Les formules clés et les 3 exercices types qui tombent à tous les coups.",
      "Les pièges classiques à éviter absolument pour sécuriser tes points."
    ],
    tag: "FICHES RÉVISION",
    color: "#B71C1C",
    link: "https://selar.com/m/eductome",
    format: "PDF",
    tomesCount: 1
  },
  {
    id: "la-voie",
    emoji: "🧭",
    image: "/covers/la-voie.png",
    title: "La Voie",
    description: "Apprends à t'organiser, à réviser efficacement, à gérer ton temps. Avant même d'ouvrir un cahier de maths.",
    mission: "T'apprendre à apprendre. Structurer ton mental et ton organisation avant d'attaquer les révisions.",
    valeur: [
      "Des techniques concrètes pour gérer ton stress et rester constant.",
      "Un plan d'organisation précis pour tes semaines de révisions.",
      "La fondation stratégique indispensable avant d'attaquer les matières scientifiques."
    ],
    tag: "MÉTHODOLOGIE",
    color: "#1B5E20",
    link: "https://selar.com/m/eductome",
    format: "PDF",
    tomesCount: 1
  },
  {
    id: "la-racine",
    emoji: "🌱",
    image: "/covers/la-racine.png",
    title: "La Racine",
    description: "Le pourquoi derrière chaque concept. Avant de calculer, il faut penser.",
    mission: "T'expliquer le POURQUOI derrière chaque concept pour ancrer la logique.",
    valeur: [
      "Une compréhension profonde : savoir pourquoi une règle existe pour ne plus l'apprendre par cœur.",
      "L'ancrage d'une logique scientifique qui te servira dans toutes les matières.",
      "La fin des blocages face aux questions de réflexion."
    ],
    tag: "TOUTES SÉRIES",
    color: "#E65100",
    link: "https://selar.com/m/eductome",
    format: "PDF",
    tomesCount: 1
  },
  {
    id: "3e-facile",
    emoji: "📗",
    image: "/covers/3e-facile.png",
    title: "3e Facile",
    description: "Le même esprit Grand Frère pour les élèves de 3ᵉ qui préparent le BEPC.",
    mission: "Prendre les élèves de 3ème par la main pour assurer l'obtention du BEPC.",
    valeur: [
      "L'esprit 'Grand Frère' adapté aux plus jeunes pour le BEPC.",
      "La démystification des mathématiques pour ne plus en avoir peur.",
      "La construction d'une base ultra solide avant l'entrée au lycée."
    ],
    tag: "CLASSE DE 3E",
    color: "#37474F",
    link: "https://selar.com/m/eductome",
    format: "Livre Physique & PDF",
    tomesCount: 2
  }
];
