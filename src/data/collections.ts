import { Collection } from '../types';

export const collectionsData: Collection[] = [
  {
    id: 'cles-maths',
    name: 'Les Clés Maths',
    slug: 'cles-maths',
    primaryColor: '#1A3557',
    coverImage: '/covers/cles-maths.png',
    emoji: '📐',
    title: 'Les Clés Maths',
    
    badges: [
      { label: 'BEST-SELLER', color: 'magenta' },
      { label: 'SÉRIE D', color: 'gray' }
    ],
    
    shortDescription: "Tout le programme de Terminale, tome par tome. Comprends enfin les notions qui te bloquent.",
    description: "Tout le programme de Terminale, tome par tome. Comprends enfin les notions qui te bloquent.",
    
    format: 'Livre physique + PDF',
    tomeCount: 11,
    targetClass: 'Terminale D',
    
    objective: "Te faire maîtriser l'intégralité du programme de Mathématiques de Terminale, un chapitre à la fois, sans sauter d'étapes. 12 tomes pour transformer ta façon de penser les maths, de la première limite jusqu'aux équations différentielles.",
    
    benefits: [
      "Les 12 chapitres clés du programme de Terminale, expliqués sans jargon avec des analogies du quotidien ivoirien (gbaka, marché d'Adjamé, plantation de cacao).",
      "La méthode universelle pour attaquer chaque type d'exercice BAC : tu sais par où commencer, comment réfléchir, comment finir.",
      "Les 5 pièges classiques du BAC ivoirien, identifiés et démontés. Plus jamais tu ne perdras 2 points sur un détail piégeux."
    ],
    
    idealFor: [
      "Tu es en Terminale D et tu prépares le BAC ivoirien",
      "Tu veux comprendre tes cours en profondeur, pas juste les réviser à la veille",
      "Tu as au moins 3 mois devant toi pour bosser sérieusement"
    ],
    
    crossSell: [
      {
        collectionId: 'la-voie',
        reason: "Pour t'organiser et tenir ton planning toute l'année — méthode + contenu = combo gagnant"
      },
      {
        collectionId: 'derniers-codes',
        reason: "Pour les révisions express à l'approche du BAC, en complément des tomes complets"
      }
    ],
    
    placeholderTestimonial: "Avec le Tome 1 sur Les Limites, j'ai enfin compris ce qu'était une forme indéterminée. Le déclic. Je suis passé de 9/20 à 14/20 en deux mois.",
    
    previews: [
      {
        caption: 'Extrait Tome 1 : Limites',
        blocks: [
          {
            type: 'text',
            id: 'p1',
            contenu: "Champion(ne), voici la notion qui fait la différence entre ceux qui comprennent les maths et ceux qui les subissent. Accroche-toi — dans 5 minutes tu vas voir pourquoi."
          },
          {
            type: 'analogy',
            id: 'p2',
            titre: 'La limite expliquée avec un gbaka',
            contenu: "Imagine un gbaka qui part d'Adjamé. Le chargeur crie « Yopougon Siporex ! ». La direction est claire. Le mouvement est lancé.\n\nMais attention : que le gbaka arrive VRAIMENT à Siporex, ou qu'il tombe en panne juste avant à la Gesco, sa TENDANCE était d'aller à Siporex.\n\nEn maths, c'est ça une limite. On ne te demande pas si la fonction arrive à destination. On te demande vers où elle se dirige quand $x$ s'approche d'un point.",
            conceptMath: "La limite est une tendance, pas forcément une valeur atteinte."
          }
        ]
      },
      {
        caption: 'Extrait Tome 2 : Dérivées',
        blocks: [
          {
            type: 'text',
            id: 'p3',
            contenu: "Tu connais maintenant les limites. Mais comment mesurer la VITESSE à laquelle une fonction change ? C'est là qu'intervient la dérivée."
          },
          {
            type: 'tip',
            id: 'p4',
            titre: 'Grand Frère te dit',
            contenu: [
              "La dérivée n'est pas juste une formule à apprendre par cœur.",
              "C'est la boussole de la fonction : si la dérivée est positive, la fonction monte. Si elle est négative, elle descend."
            ]
          },
          {
            type: 'math',
            id: 'p5',
            formule: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
            explication: "Le fameux taux d'accroissement vu à la loupe microscopique."
          }
        ]
      },
      {
        caption: 'Extrait Tome 3 : Primitives',
        blocks: [
          {
            type: 'dialogue',
            id: 'p6',
            pf: "Vieux père, pourquoi on s'embête avec les primitives si on sait déjà dériver ? C'est juste pour nous compliquer la vie au BAC ou bien ?",
            gf: "Bonne question ! En fait, la primitive, c'est la machine à remonter le temps. Si la dérivée te donne la vitesse, la primitive te redonne la distance parcourue. Sans primitive, tu ne peux pas calculer d'aires ni de volumes."
          },
          {
            type: 'rule',
            id: 'p7',
            titre: 'Règle d\'or',
            contenu: "Dériver, c'est casser. Primitiver, c'est reconstruire. Pour trouver la primitive de $f(x) = x^n$, tu augmentes la puissance de 1, et tu divises par cette nouvelle puissance : $F(x) = \\frac{x^{n+1}}{n+1}$."
          }
        ]
      }
    ],

    tomes: [
      { id: "cm-1", number: 1, title: 'Les Limites', chapters: ['Continuité', 'Asymptotes', 'Calculs', 'BAC'], coverImage: "/covers/tomes/cover-t1.png", image: "/covers/tomes/cover-t1.png" },
      { id: "cm-2", number: 2, title: 'Les Dérivées', chapters: ['Tangentes', 'Variations', 'Optimisation', 'BAC'], coverImage: "/covers/tomes/cover-t2.png", image: "/covers/tomes/cover-t2.png" },
      { id: "cm-3", number: 3, title: 'Intégrales & Primitives', chapters: ['Primitives', 'Aires', 'Volumes', 'BAC'], coverImage: "/covers/tomes/cover-t3.png", image: "/covers/tomes/cover-t3.png" },
      { id: "cm-4", number: 4, title: 'Suites Numériques', coverImage: "/covers/tomes/cover-t4.png", image: "/covers/tomes/cover-t4.png" },
      { id: "cm-5", number: 5, title: 'Logarithmes & Exponentielles', coverImage: "/covers/tomes/cover-t5.png", image: "/covers/tomes/cover-t5.png" },
      { id: "cm-6", number: 6, title: 'Fonctions Trigonométriques', coverImage: "/covers/tomes/cover-t6.png", image: "/covers/tomes/cover-t6.png" },
      { id: "cm-7", number: 7, title: 'Probabilités', coverImage: "/covers/tomes/cover-t7.png", image: "/covers/tomes/cover-t7.png" },
      { id: "cm-8", number: 8, title: 'Statistiques', coverImage: "/covers/tomes/cover-t8.png", image: "/covers/tomes/cover-t8.png" },
      { id: "cm-9", number: 9, title: 'Géométrie dans l\'Espace', coverImage: "/covers/tomes/cover-t9.jpeg", image: "/covers/tomes/cover-t9.jpeg" },
      { id: "cm-10", number: 10, title: 'Nombres Complexes', coverImage: "/covers/tomes/cover-t10.png", image: "/covers/tomes/cover-t10.png" },
      { id: "cm-11", number: 11, title: 'Équations Différentielles', coverImage: "/covers/tomes/cover-t11.png", image: "/covers/tomes/cover-t11.png" }
    ],
    
    faq: [
      {
        question: "Les manuels sont-ils conformes au programme officiel ivoirien ?",
        answer: "Oui, 100%. Chaque tome est aligné sur le programme du DPFC-CI pour la Terminale D. Les exercices type BAC suivent le format officiel des annales ivoiriennes."
      },
      {
        question: "Faut-il acheter tous les tomes en même temps ?",
        answer: "Non. Tu peux commencer par le tome qui correspond au chapitre que tu étudies en ce moment, ou celui qui te bloque le plus. Beaucoup d'élèves commencent par le Tome 1 (Les Limites) ou le Tome 2 (Les Dérivées) car ce sont les fondations de toute l'année."
      },
      {
        question: "Comment se passe la livraison ?",
        answer: "À Abidjan : livraison sous 24-72h après confirmation de paiement. Pour l'intérieur du pays (San-Pédro, Bouaké, Korhogo, Daloa, etc.) : 3 à 5 jours via une compagnie de transport. Le numéro de suivi t'est envoyé par WhatsApp."
      },
      {
        question: "Quelle est la différence avec Les Derniers Codes ?",
        answer: "Les Clés Maths sont les manuels COMPLETS pour bosser toute l'année : cours détaillés, méthode, nombreux exercices corrigés. Les Derniers Codes sont des fascicules de RÉVISION (20 pages) pour quand le BAC arrive vite. L'un complète l'autre."
      },
      {
        question: "Et si je bloque sur un exercice après avoir lu le tome ?",
        answer: "Tu peux nous écrire directement sur WhatsApp. On t'oriente, et un grand frère du réseau EDUCTOME peut t'expliquer la notion. Tu n'es jamais seul devant ton manuel."
      }
    ]
  },
  {
    id: 'cles-sciences',
    name: 'Les Clés Sciences',
    slug: 'cles-sciences',
    primaryColor: '#6A1B9A',
    coverImage: '/covers/cles-sciences.png',
    emoji: '🔬',
    title: 'Les Clés Sciences',
    
    badges: [
      { label: 'NOUVEAU', color: 'magenta' },
      { label: 'SÉRIE D', color: 'gray' }
    ],
    
    shortDescription: "Physique-Chimie pour la Terminale D, organisée par bloc d'exercices BAC. Une approche unique en Côte d'Ivoire.",
    description: "Physique-Chimie pour la Terminale D, organisée par bloc d'exercices BAC.",
    
    format: 'Livre physique + PDF',
    tomeCount: 6,
    targetClass: 'Terminale D',
    
    objective: "Décortiquer la Physique-Chimie de Terminale par type d'exercice du BAC, pas chapitre par chapitre. Tu apprends en visant directement les compétences évaluées. 6 tomes pour ne plus être surpris au Bac, quelle que soit la question posée.",
    
    benefits: [
      "La Physique-Chimie organisée par bloc d'exercices BAC (Option B Série D) : Mécanique, Chimie organique, Oscillations, Acides & Bases, Électromagnétisme, Nucléaire.",
      "Les schémas et expériences décodés étape par étape, avec analogies de la vie quotidienne ivoirienne.",
      "Les formules à connaître par cœur clairement identifiées, et celles qu'on retrouve dans la documentation du BAC."
    ],
    
    idealFor: [
      "Tu es en Terminale D et tu prépares l'épreuve de Physique-Chimie",
      "Tu veux apprendre par type d'exercice, pas par chapitre théorique",
      "Les schémas et expériences te perdent en classe"
    ],
    
    crossSell: [
      {
        collectionId: 'cles-maths',
        reason: "Pour solidifier les bases mathématiques nécessaires en Physique-Chimie"
      },
      {
        collectionId: 'la-voie',
        reason: "Pour structurer tes révisions Sciences sur l'année"
      }
    ],
    
    placeholderTestimonial: "Pour la première fois, je sais ce qu'on attend exactement de moi à chaque exercice de PC du BAC. Je ne révise plus dans le vide.",
    
    tomes: [
      { id: "cs-1", number: 1, title: 'Mécanique du point' },
      { id: "cs-2", number: 2, title: 'Chimie organique' },
      { id: "cs-3", number: 3, title: 'Oscillations & Circuits' },
      { id: "cs-4", number: 4, title: 'Acides & Bases' },
      { id: "cs-5", number: 5, title: 'Électromagnétisme & Nucléaire' },
      { id: "cs-6", number: 6, title: 'Dominer le BAC' }
    ],
    
    faq: [
      {
        question: "Pourquoi organiser par bloc d'exercices et pas par chapitre ?",
        answer: "Parce que le BAC ivoirien Série D évalue par TYPE de problème, pas par chapitre théorique. En t'entraînant directement sur les blocs d'exercices, tu apprends à reconnaître le type de question et à appliquer la bonne méthode."
      },
      {
        question: "Pour quelle série exactement ?",
        answer: "Conçu pour la Terminale D (Option B). Pour la Terminale C, certains tomes restent utiles (Mécanique, Électromagnétisme) mais le programme PC complet est différent."
      },
      {
        question: "Faut-il avoir bien suivi en Première pour comprendre ?",
        answer: "Pas forcément. On reprend les bases nécessaires au début de chaque tome avant d'aller en profondeur."
      },
      {
        question: "Y a-t-il des schémas et des graphiques ?",
        answer: "Oui, beaucoup. Chaque expérience est illustrée par un schéma annoté, et chaque résultat par un graphique. Le visuel est central dans la PC."
      },
      {
        question: "Comment se passe la livraison ?",
        answer: "À Abidjan : 24-72h. Intérieur : 3 à 5 jours via transporteur, avec numéro de suivi WhatsApp."
      }
    ]
  },
  {
    id: 'derniers-codes',
    name: 'Les Derniers Codes',
    slug: 'derniers-codes',
    primaryColor: '#C62828',
    coverImage: '/covers/derniers-codes.png',
    emoji: '⚡',
    title: 'Les Derniers Codes',
    
    badges: [
      { label: 'NOUVEAU', color: 'magenta' },
      { label: 'FICHES RÉVISION', color: 'gray' }
    ],
    
    shortDescription: "L'essentiel d'un chapitre en 20 pages. Pour les révisions de dernière minute, sans paniquer.",
    description: "L'essentiel d'un chapitre en 20 pages. Pour les révisions de dernière minute.",
    
    format: 'PDF',
    tomeCount: 22,
    targetClass: 'Terminale & 3ᵉ',
    
    objective: "Te donner l'essentiel d'un chapitre en 20 pages condensées, pas une de plus. Quand le BAC ou le BEPC arrive vite, tu n'as plus le temps de relire 200 pages. Tu as besoin du concentré — formules, méthodes, pièges. 22 fascicules disponibles, à la carte selon ta priorité.",
    
    benefits: [
      "L'essentiel d'un chapitre condensé en 20 pages — pas un mot de trop, pas un détail oublié.",
      "Les 10 questions qui tombent presque systématiquement au BAC ivoirien, avec les méthodes ciblées.",
      "Format poche, lisible dans un gbaka entre deux arrêts. Glisse-le dans ton sac, sors-le quand tu peux."
    ],
    
    idealFor: [
      "Le BAC ou le BEPC arrive dans moins de 3 mois",
      "Tu connais déjà tes cours mais tu veux les condenser pour mémoriser",
      "Tu veux pouvoir réviser en mode mobile (transport, pause, queue à la cantine)"
    ],
    
    crossSell: [
      {
        collectionId: 'cles-maths',
        reason: "Pour la version approfondie d'un chapitre qui te bloque vraiment"
      },
      {
        collectionId: 'la-voie',
        reason: "Pour planifier ton sprint final efficacement"
      }
    ],
    
    placeholderTestimonial: "À J-2 mois du BAC, j'ai pris 6 fascicules sur mes chapitres les plus faibles. J'ai fini avec 13 en maths alors que je tournais à 9. Sauveur.",
    
    tomes: [
      { id: "dc-m1", title: "Maths Terminale" },
      { id: "dc-pc1", title: "Physique-Chimie Terminale" },
      { id: "dc-3m1", title: "Maths 3ᵉ" }
    ],
    
    faq: [
      {
        question: "Y a-t-il un fascicule par chapitre ?",
        answer: "Oui. Pour les Mathématiques Terminale, il y a un fascicule par chapitre clé (Limites, Dérivées, Suites, etc.) + un guide calculatrice. Pour la Physique-Chimie, 6 fascicules par bloc BAC. Pour la 3ᵉ, 6 fascicules essentiels pour le BEPC."
      },
      {
        question: "Pourquoi seulement 20 pages ?",
        answer: "Parce qu'on enlève le superflu. Les 20 pages contiennent : les formules à connaître, la méthode universelle pour résoudre les exercices types, les 10 questions BAC les plus fréquentes avec leurs corrections, et les pièges à éviter. Tout ce qui ne sert pas le BAC est dehors."
      },
      {
        question: "Format PDF uniquement ?",
        answer: "Oui. Téléchargement immédiat après paiement sur Selar. Tu peux les imprimer pour les avoir en main, ou les garder sur ton téléphone pour réviser partout."
      },
      {
        question: "Quelle est la différence avec Les Clés Maths ?",
        answer: "Les Clés Maths sont les MANUELS COMPLETS pour toute l'année (cours + méthode + nombreux exos). Les Derniers Codes sont l'ESSENTIEL CONDENSÉ pour réviser vite. Si tu as le temps, Les Clés. Si tu es pressé, Les Derniers Codes."
      },
      {
        question: "Combien coûte un fascicule ?",
        answer: "Les prix sont disponibles sur la boutique Selar. Chaque fascicule s'achète indépendamment, tu prends seulement ceux dont tu as besoin."
      }
    ]
  },
  {
    id: 'la-voie',
    name: 'La Voie',
    slug: 'la-voie',
    primaryColor: '#2E7D32',
    coverImage: '/covers/la-voie.png',
    emoji: '🧭',
    title: 'La Voie',
    
    badges: [
      { label: 'MÉTHODOLOGIE', color: 'green' }
    ],
    
    shortDescription: "Apprends à t'organiser, à réviser efficacement, à gérer ton temps. Avant même d'ouvrir un cahier de maths.",
    description: "Apprends à t'organiser, à réviser efficacement, à gérer ton temps.",
    
    format: 'PDF',
    tomeCount: 1, 
    targetClass: 'Toutes séries',
    
    objective: "Avant de savoir résoudre une équation, il faut savoir organiser ses journées. La Voie est ta boussole pour réussir ton année scolaire. Pas un manuel de maths — un manuel de stratégie. Le tome 1 'Réussir son Année Scolaire' est déjà disponible.",
    
    benefits: [
      "Comment organiser ton année scolaire sans t'épuiser ni stagner.",
      "La méthode SMART pour fixer tes objectifs et les tenir, semaine après semaine.",
      "Le 'Contrat avec moi-même' — un pacte écrit qui te tient debout les jours où tu veux abandonner."
    ],
    
    idealFor: [
      "Tu travailles dur mais tu n'as pas l'impression d'avancer",
      "Tu procrastines ou tu remets toujours au lendemain",
      "Tu es en classe d'examen et tu veux un plan d'année clair"
    ],
    
    crossSell: [
      {
        collectionId: 'cles-maths',
        reason: "La méthode + le contenu mathématique = combo gagnant pour la Terminale"
      },
      {
        collectionId: 'la-racine',
        reason: "Pour la pensée profonde derrière la méthode"
      }
    ],
    
    placeholderTestimonial: "Pour la première fois de ma scolarité, j'ai un planning que je tiens. Pas parce que je suis discipliné — parce que la méthode est faite pour des gens comme moi.",
    
    tomes: [
      { id: "lv-1", number: 1, title: 'Réussir son Année Scolaire' }
    ],
    
    faq: [
      {
        question: "Pour qui est ce manuel ?",
        answer: "Pour tous les élèves de Terminale et de 3ᵉ, toutes séries. C'est de la méthodologie pure — utilisable que tu sois en C, D, A ou en 3ᵉ."
      },
      {
        question: "Faut-il commencer La Voie avant les autres collections ?",
        answer: "Idéalement, oui. La Voie te donne les outils pour exploiter au mieux les autres manuels. Mais tu peux aussi commencer en parallèle, surtout si tu as déjà du retard à rattraper."
      },
      {
        question: "Combien de temps pour parcourir La Voie ?",
        answer: "Le tome 1 se lit en 2-3 heures. Mais c'est un livre qu'on consulte toute l'année — les outils (planning, contrat avec soi-même, méthode SMART) sont à mettre en pratique au quotidien."
      },
      {
        question: "Y a-t-il des modèles imprimables ?",
        answer: "Oui. Le 'Contrat avec moi-même' et le planning hebdomadaire sont prêts à imprimer en A4. Tu remplis à la main, tu colles sur ton mur, tu suis."
      }
    ]
  },
  {
    id: 'la-racine',
    name: 'La Racine',
    slug: 'la-racine',
    primaryColor: '#E67E22',
    status: 'coming-soon',
    coverImage: '/covers/la-racine.png',
    emoji: '🌱',
    title: 'La Racine',
    
    badges: [
      { label: 'BIENTÔT', color: 'gray' },
      { label: 'TOUTES SÉRIES', color: 'gray' }
    ],
    
    shortDescription: "Le pourquoi derrière chaque concept. Avant de calculer, il faut penser.",
    description: "Le pourquoi derrière chaque concept. Avant de calculer, il faut penser.",
    
    format: 'PDF',
    tomeCount: 0,
    targetClass: 'Toutes séries',
    
    objective: "Pendant que les autres mémorisent des formules, toi tu vas comprendre d'où elles viennent. La Racine t'amène à la source philosophique de chaque notion mathématique. Plus jamais tu n'oublieras une formule — parce que tu sauras pourquoi elle existe.",
    
    benefits: [
      "Le pourquoi philosophique derrière chaque notion mathématique du programme.",
      "Comment penser comme un mathématicien, pas comme un calculateur qui exécute.",
      "Pour les élèves qui veulent comprendre, pas juste réussir. Ceux qui visent l'excellence et la durée."
    ],
    
    idealFor: [
      "Tu mémorises beaucoup mais tu oublies vite",
      "Tu veux comprendre profondément, pas juste appliquer",
      "Tu vises les notes du haut du tableau (16+) ou tu aimes simplement les maths pour les maths"
    ],
    
    crossSell: [
      {
        collectionId: 'cles-maths',
        reason: "Pour appliquer ce que La Racine t'a fait comprendre"
      },
      {
        collectionId: 'la-voie',
        reason: "Pour structurer ton apprentissage profond dans le temps"
      }
    ],
    
    tomes: [],
    
    faq: [
      {
        question: "Quand sera disponible La Racine ?",
        answer: "Nous travaillons activement sur la collection. Pour être prévenu(e) en avant-première, inscris-toi avec ton email — tu seras le/la premier(e) informé(e) de la sortie."
      },
      {
        question: "À qui s'adresse cette collection ?",
        answer: "Aux élèves qui veulent comprendre les mathématiques en profondeur, pas juste passer le BAC. C'est la collection pour ceux qui visent 16+, ou simplement pour les esprits curieux."
      },
      {
        question: "C'est une concurrence avec Les Clés Maths ?",
        answer: "Pas du tout. Les Clés t'enseignent COMMENT résoudre. La Racine t'enseigne POURQUOI les outils existent. Les deux sont complémentaires."
      }
    ]
  },
  {
    id: '3e-facile',
    name: '3e Facile',
    slug: '3e-facile',
    primaryColor: '#D81B60',
    coverImage: '/covers/3e-facile.png',
    emoji: '📗',
    title: '3e Facile',
    
    badges: [
      { label: 'CLASSE DE 3E', color: 'gray' }
    ],
    
    shortDescription: "Le même esprit Grand Frère pour les élèves de 3ᵉ qui préparent le BEPC.",
    description: "Le même esprit Grand Frère pour les élèves de 3ᵉ qui préparent le BEPC.",
    
    format: 'Livre physique + PDF',
    tomeCount: 1,
    targetClass: '3ᵉ',
    
    objective: "Préparer le BEPC ivoirien avec la pédagogie EDUCTOME, adaptée au niveau collège. Tout le programme de 3ᵉ expliqué pas à pas, avec les exercices et corrigés détaillés qui font la signature EDUCTOME. Conçu pour rendre la transition vers la Seconde fluide.",
    
    benefits: [
      "Tout le programme de 3ᵉ adapté au BEPC ivoirien, en accord avec le DPFC-CI.",
      "Le même esprit Grand Frère, mais au niveau collège : analogies adaptées, ton adapté, exercices adaptés.",
      "Préparation au passage en Seconde C, D ou A — tu termines la 3ᵉ avec les bonnes bases pour le lycée."
    ],
    
    idealFor: [
      "Tu es en 3ᵉ et tu prépares le BEPC ivoirien",
      "Tu veux anticiper l'entrée au lycée avec de bonnes bases",
      "Tes parents cherchent un manuel pédagogique pour t'accompagner à la maison"
    ],
    
    crossSell: [
      {
        collectionId: 'derniers-codes',
        reason: "Les Derniers Codes 3ᵉ pour les révisions express avant le BEPC"
      }
    ],
    
    placeholderTestimonial: "Ma fille a enfin un manuel qui lui parle vraiment. Elle relit les chapitres seule le soir, sans qu'on lui demande.",
    
    tomes: [
      { id: "3e-1", title: "Mathématiques 3ᵉ" }
    ],
    
    faq: [
      {
        question: "Le manuel est-il conforme au programme de 3ᵉ ivoirien ?",
        answer: "Oui, 100%. Conforme au programme du DPFC-CI pour la 3ᵉ ivoirienne et au format du BEPC."
      },
      {
        question: "C'est adapté aussi pour les parents qui veulent aider leur enfant ?",
        answer: "Absolument. La méthode 'Grand Frère' permet à un parent même non-mathématicien de suivre les explications et d'accompagner son enfant."
      },
      {
        question: "Y a-t-il aussi une collection pour la 4ᵉ ?",
        answer: "Pas encore. Une collection EDUCTOME Collège pour la 4ᵉ est à l'étude. Si tu es intéressé(e), écris-nous sur WhatsApp pour qu'on prenne note de la demande."
      }
    ]
  }
];
