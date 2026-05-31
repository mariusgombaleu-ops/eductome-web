export type BlogContentElement = 
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string; author?: string };

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: BlogContentElement[];
  coverImage: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'comment-bien-preparer-son-annee-scolaire',
    title: 'Comment bien préparer son année scolaire pour les examens',
    excerpt: 'L\'année d\'examen (BEPC ou BAC) peut être stressante. Voici notre méthode infaillible pour s\'organiser, ne pas se laisser déborder et assurer le jour J.',
    coverImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000',
    date: '28 Mai 2026',
    readTime: '4 min',
    category: 'Méthodologie',
    content: [
      { type: 'p', text: 'La classe d\'examen est une étape cruciale. Que tu sois en classe de 3ème pour le BEPC ou en Terminale pour le BAC, la réussite ne se joue pas la veille de l\'épreuve, mais dès les premiers jours de la rentrée. La clé absolue ? L\'organisation.' },
      { type: 'h2', text: '1. Crée un planning réaliste (et respecte-le)' },
      { type: 'p', text: 'Le plus grand piège est de travailler "au feeling". Il te faut un emploi du temps personnel en dehors des heures de cours. Bloque des créneaux précis pour chaque matière, mais n\'oublie pas d\'inclure des temps de pause. Un cerveau fatigué retient deux fois moins bien l\'information.' },
      { type: 'ul', items: [
        'Alloue plus de temps aux matières où tu as des difficultés (tes "bêtes noires").',
        'Fais des sessions courtes mais intenses (méthode Pomodoro : 25 min de travail, 5 min de pause).',
        'Le dimanche, prépare tes affaires et ton programme pour la semaine.'
      ]},
      { type: 'h2', text: '2. Fais des fiches de révision intelligentes' },
      { type: 'p', text: 'Ne recopie pas bêtement ton cours. Une bonne fiche doit être synthétique. Utilise des couleurs, des schémas, et mets en évidence les mots-clés, les formules de mathématiques ou de physique-chimie, et les dates importantes en histoire.' },
      { type: 'quote', text: 'Une fiche de révision n\'est utile que si c\'est TOI qui l\'as écrite et comprise.', author: 'L\'équipe Pédagogique Eductome' },
      { type: 'h2', text: '3. Ne laisse aucune lacune s\'installer' },
      { type: 'p', text: 'Si tu ne comprends pas un chapitre en octobre, il te pénalisera en mai. C\'est exactement pour cela que les manuels Eductome existent : ils t\'expliquent les notions comme un grand frère, de manière simple et décomplexée. N\'hésite pas à refaire les exercices corrigés jusqu\'à ce que la logique devienne une évidence.' },
      { type: 'p', text: 'En appliquant cette méthode pas-à-pas, tu verras que la montagne de travail se transforme en une série de petites collines faciles à franchir. Bon courage pour cette année !' }
    ]
  },
  {
    id: '2',
    slug: 'calendrier-examens-cote-divoire-ce-quil-faut-savoir',
    title: 'Le calendrier des examens en Côte d\'Ivoire : Ce qu\'il faut savoir',
    excerpt: 'Dates, épreuves physiques, examens blancs... Découvrez comment est rythmé le calendrier scolaire ivoirien et quand intensifier vos révisions.',
    coverImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000',
    date: '15 Mai 2026',
    readTime: '3 min',
    category: 'Actualités',
    content: [
      { type: 'p', text: 'En Côte d\'Ivoire, l\'année scolaire pour les classes d\'examen est rythmée par des échéances bien précises fixées par le Ministère de l\'Éducation Nationale et de l\'Alphabétisation (MENA). Connaître ce calendrier est la première étape pour ne pas se laisser surprendre.' },
      { type: 'h2', text: 'Les Examens Blancs : Le Crash-Test' },
      { type: 'p', text: 'Généralement programmés entre mars et avril, les examens blancs régionaux ou nationaux sont le meilleur moyen d\'évaluer ton niveau. Ne les prends pas à la légère ! C\'est le moment idéal pour identifier tes points faibles et ajuster tes révisions avec les manuels Eductome.' },
      { type: 'h2', text: 'Les Épreuves Physiques et Sportives (EPS)' },
      { type: 'p', text: 'Souvent négligée, l\'EPS est la première épreuve officielle que tu passeras (souvent entre avril et mai). C\'est l\'occasion de prendre des points d\'avance. N\'oublie pas ta convocation et ta pièce d\'identité !' },
      { type: 'h2', text: 'Les Épreuves Orales et Écrites' },
      { type: 'ul', items: [
        'BEPC : Les oraux (notamment l\'anglais) précèdent généralement les épreuves écrites de quelques jours à la mi-juin.',
        'BAC : Les oraux (français, anglais, LV2) sont intenses et se déroulent fin juin, suivis des écrits début juillet.'
      ]},
      { type: 'quote', text: 'Le secret n\'est pas de courir à la dernière minute, mais de partir à point en connaissant le terrain.' },
      { type: 'h2', text: 'Comment gérer la dernière ligne droite ?' },
      { type: 'p', text: 'Un mois avant les écrits, arrête d\'apprendre de nouvelles choses à la dernière minute et concentre-toi sur les annales et la pratique. Les semaines précédant l\'examen doivent être dédiées au "drill" (répétition d\'exercices types) et surtout, au repos mental.' }
    ]
  },
  {
    id: '3',
    slug: 'sujets-examen-5-dernieres-annees-decryptes',
    title: 'Les sujets d\'examen des 5 dernières années (BEPC/BAC) décryptés',
    excerpt: 'Pourquoi est-il vital de traiter les anciens sujets ? Nous analysons les tendances des épreuves en Côte d\'Ivoire pour vous aider à cibler vos révisions.',
    coverImage: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&q=80&w=1000',
    date: '02 Mai 2026',
    readTime: '5 min',
    category: 'Ressources',
    content: [
      { type: 'p', text: 'Il y a un secret que les meilleurs élèves connaissent : le format des épreuves d\'examen change très peu d\'une année à l\'autre. S\'entraîner sur les sujets des 5 dernières années est de loin la stratégie de révision la plus rentable.' },
      { type: 'h2', text: 'Pourquoi faire des annales ?' },
      { type: 'ul', items: [
        'Comprendre l\'esprit de l\'épreuve : Les correcteurs attendent une formulation précise, particulièrement en SVT ou en Physique-Chimie.',
        'Gérer son temps : Faire un sujet de Maths en 4 heures à la maison, sans tricher, t\'apprendra à ne pas paniquer le jour J.',
        'Repérer les chapitres récurrents : Certains thèmes (comme les suites numériques au Bac ou la génétique) tombent presque chaque année.'
      ]},
      { type: 'h2', text: 'Ce que disent les sujets récents' },
      { type: 'h3', text: 'En Mathématiques' },
      { type: 'p', text: 'On remarque une volonté croissante d\'intégrer des problèmes ancrés dans la vie réelle (situations d\'évaluation). Il ne suffit plus d\'appliquer une formule mathématique, il faut savoir modéliser un problème (calculer le coût d\'un projet, déterminer un bénéfice maximal, etc.).' },
      { type: 'h3', text: 'En Sciences Physiques' },
      { type: 'p', text: 'L\'accent est mis sur la rigueur scientifique. Les erreurs d\'unités ou le manque de phrases de conclusion coûtent cher. La mécanique et la chimie organique restent des piliers intouchables.' },
      { type: 'h2', text: 'Comment les manuels Eductome t\'aident ?' },
      { type: 'p', text: 'Nos ouvrages intègrent directement des exercices inspirés des annales récentes. Mieux encore : nous décomposons la correction étape par étape, pour que tu comprennes exactement comment le correcteur distribue les points. Tu ne seras plus jamais surpris devant ta feuille d\'examen !' }
    ]
  }
];
