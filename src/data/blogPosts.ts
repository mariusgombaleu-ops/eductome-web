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
    category: 'Astuces & Conseils',
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
    category: 'Actualités Scolaires',
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
    category: 'Spécial BAC / BEPC',
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
  },
  {
    id: '4',
    slug: 'comment-je-me-suis-releve-apres-un-examen-blanc-rate',
    title: 'Comment je me suis relevé après un examen blanc complètement raté',
    excerpt: 'Gombaleu Marius partage son expérience : de la déception de l\'examen blanc à la mention au vrai BAC. Un message pour tous ceux qui doutent.',
    coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000',
    date: '20 Avril 2026',
    readTime: '4 min',
    category: 'Grands Frères',
    content: [
      { type: 'p', text: 'Je me souviens encore de ce jour comme si c\'était hier. Mars, Lycée Classique d\'Abidjan. Les résultats de l\'examen blanc tombent et mon relevé de notes est une catastrophe. Moi qui visais la mention, je me retrouvais avec une moyenne de 8/20 en Maths et 7/20 en Physique.' },
      { type: 'quote', text: 'C\'est dans l\'échec qu\'on apprend le plus, à condition de ne pas s\'y complaire.', author: 'Gombaleu Marius' },
      { type: 'h2', text: 'La remise en question' },
      { type: 'p', text: 'Le premier réflexe, c\'est de paniquer. Mais j\'ai décidé de prendre chaque copie et d\'analyser mes erreurs. Ce n\'était pas un problème d\'intelligence, c\'était un manque criant de méthodologie. Je comprenais en classe, mais devant la copie, c\'était le vide total.' },
      { type: 'h2', text: 'Le plan d\'attaque' },
      { type: 'p', text: 'J\'ai alors changé radicalement ma façon de faire : fini d\'apprendre les formules par cœur sans les comprendre. J\'ai commencé à décortiquer le SENS derrière chaque notion. C\'est d\'ailleurs cette philosophie qui a donné naissance plus tard à EDUCTOME. Si je comprenais la logique, la formule devenait évidente.' },
      { type: 'h2', text: 'Le résultat le jour du vrai BAC' },
      { type: 'p', text: 'Le jour J, j\'étais serein. Les exercices me paraissaient limpides. Je n\'ai pas seulement validé mon BAC, je l\'ai fait avec de bonnes bases pour la suite. Ton examen blanc n\'est qu\'une boussole : il te montre là où tu dois t\'améliorer. Ne baisse jamais les bras !' }
    ]
  },
  {
    id: '5',
    slug: 'quelles-etudes-choisir-apres-un-bac-en-cote-divoire',
    title: 'Quelles études choisir après le BAC (D, C, A) en Côte d\'Ivoire ?',
    excerpt: 'Universités publiques, grandes écoles, concours ou INPHB... On décrypte pour vous les meilleures options après l\'obtention de votre précieux sésame.',
    coverImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000',
    date: '10 Avril 2026',
    readTime: '5 min',
    category: 'Orientation',
    content: [
      { type: 'p', text: 'Avoir son BAC, c\'est génial. Savoir quoi en faire, c\'est encore mieux. Dès la classe de Terminale, les choix d\'orientation (plateforme d\'orientation, concours) frappent à la porte. Petit tour d\'horizon des options en Côte d\'Ivoire.' },
      { type: 'h2', text: '1. Les grandes écoles et l\'INPHB' },
      { type: 'p', text: 'L\'Institut National Polytechnique Félix Houphouët-Boigny (INPHB) de Yamoussoukro reste le graal pour les scientifiques (BAC C, D). Les concours sont rudes (souvent en Mai/Juin). Prépare-toi spécifiquement pour les épreuves de Maths et Physique qui sont souvent d\'un niveau bien supérieur au BAC.' },
      { type: 'h2', text: '2. Les Universités Publiques' },
      { type: 'p', text: 'Félix Houphouët-Boigny (Cocody), Nangui Abrogoua (Abobo-Adjamé), Alassane Ouattara (Bouaké)... Les options sont nombreuses. Les séries littéraires (A) se dirigeront vers le Droit, les Lettres, ou la Criminologie. Les séries scientifiques vers la Médecine (très sélectif !), la Biologie ou les Sciences Physiques.' },
      { type: 'ul', items: [
        'Astuce : Renseigne-toi bien sur les "matières pondérées" sur la plateforme d\'orientation. Si tu veux faire Médecine, tes notes en SVT, Maths et PC compteront triple !'
      ]},
      { type: 'h2', text: '3. Les BTS (Brevet de Technicien Supérieur)' },
      { type: 'p', text: 'Pour ceux qui veulent entrer rapidement sur le marché du travail (2 ans d\'études), les filières comme l\'Informatique, les Ressources Humaines, ou la Logistique offrent d\'excellents débouchés.' },
      { type: 'quote', text: 'Le meilleur diplôme est celui qui te passionne et qui répond à un besoin sur le marché.' },
      { type: 'p', text: 'Quelle que soit ta voie, l\'essentiel est de bien te renseigner avant, de discuter avec des grands frères ou des étudiants déjà dans le cursus.' }
    ]
  }
];
