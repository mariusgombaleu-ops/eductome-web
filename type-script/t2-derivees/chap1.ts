// src/data/t2-derivees/chap1.ts
import { Chapitre } from '../../types/course';

export const chapitreIntro: Chapitre = {
  id: 't2-chap1',
  titre: 'Message du Grand Frère',
  duree: 5,
  niveau: 'BASE',
  xpGain: 10,
  gratuit: true,
  objectifs: [
    'Comprendre le lien direct entre les limites et les dérivées',
    'Savoir ce que tu vas maîtriser dans ce tome 2',
    'Te préparer mentalement à dominer l\'analyse au BAC',
  ],
  sections: [
    {
      id: 's1',
      titre: 'Introduction',
      blocs: [
        {
          type: 'text',
          id: 'b1-accroche',
          contenu: 'Champion(ne), tu as dompté les limites du Tome 1, mais tu te demandes si les dérivées ne vont pas briser ton élan ? Ne t\'inquiète pas, ton Grand Frère est là pour te montrer le chemin.',
        },
        {
          type: 'text',
          id: 'b1',
          contenu: "Si tu lis ces lignes aujourd’hui, c’est que tu as survécu à ton premier grand combat. Tu as bravé le Tome 1 avec courage et tu as fini par dompter les limites. Tu te souviens de ces formes indéterminées qui te donnaient des maux de tête, de ces +∞ et −∞ qui semblaient n'avoir aucun sens ? Aujourd’hui, tout ça est derrière toi, tu maîtrises ces notions et tu as prouvé que tu as la mentalité d'un vrai battant. Je suis fier de toi !",
        },
        {
          type: 'text',
          id: 'b2',
          contenu: "Mais je sais très bien ce qui se passe en ce moment dans ta tête. Tu regardes le programme, tu vois arriver le fameux chapitre des \"Dérivées\", avec ses f'(x), ses tangentes, ses tableaux de variations interminables, et tu te dis : « Le calvaire recommence. C'est quoi encore cette nouvelle sorcellerie extraterrestre ? ». Tu as l'impression d'être face à une montagne infranchissable et que tous tes efforts du Tome 1 ne t'ont servi à rien.",
        },
        {
          type: 'text',
          id: 'b3',
          contenu: "Laisse-moi te dire un grand secret dès maintenant, une vérité que beaucoup de professeurs oublient d'expliquer : les dérivées ne sont pas un nouveau monstre déconnecté du reste. C'est tout simplement une application directe et logique des limites !",
        },
        {
          type: 'text',
          id: 'b4',
          contenu: "C'était un lundi matin de novembre au Lycée Classique d'Abidjan, ce lycée que l'on appelle fièrement \"le Cacao\". Notre professeur de mathématiques venait de commencer le cours sur la dérivation. En moins de vingt minutes, il avait rempli le tableau d'équations, de (u'v - uv')/v², de tangentes et de formules complexes. La chaleur dans la classe était étouffante, mais c'était surtout la panique qui nous faisait transpirer. Toute la classe était en apnée. On essayait tous de mémoriser bêtement les formules, sans rien comprendre à ce qu'on écrivait. Pendant des semaines, j'ai eu de mauvaises notes parce que je faisais l'erreur d'apprendre par cœur sans chercher le sens.",
        },
        {
          type: 'text',
          id: 'b5',
          contenu: "Et puis, un jour, j'ai eu un déclic. J'ai compris que la dérivée, ce n'est rien d'autre que la limite du taux d'accroissement. Dès que j'ai fait ce lien avec les limites que je connaissais déjà, tout est devenu incroyablement clair. La peur de l'échec au BAC s'est évaporée.",
        },
        {
          type: 'dialogue',
          id: 'b6',
          pf: "Vieux père, je vais être honnête avec toi. J'ai tout donné pour comprendre les limites dans le Tome 1. Je me suis privé de sommeil pour maîtriser ça. Et là, le prof débarque avec les dérivées, les f'(x), les équations de tangentes... C'est quoi encore cette affaire ? Je suis déjà fatigué et on dirait que le programme ne finit jamais !",
          gf: "Calme-toi, petit. Je te comprends à 100%. Mais il ne faut pas avoir peur ! Laisse-moi te soulager tout de suite : tu n'as pas besoin de tout réapprendre. Tu te souviens des limites ? Bah, la dérivée, c'est juste le petit frère des limites. C'est la limite du taux d'accroissement !",
        },
        {
          type: 'dialogue',
          id: 'b7',
          pf: "La limite du taux de quoi ? Vieux père, parle-moi français s'il te plaît, laisse les gros mots du prof de côté !",
          gf: "D'accord, regarde l'analogie qui va tout éclairer.",
        },
        {
          type: 'analogy',
          id: 'b8',
          titre: 'L\'Analogie de la Vitesse du Gbaka',
          contenu: "Imagine un instant que tu es dans un gbaka qui part d'Adjamé en direction de Grand-Bassam. Dans le Tome 1, les limites t'aidaient à savoir vers quelle destination finale le gbaka se dirigeait quand le temps avançait vers l'infini. La dérivée, c'est différent : elle te donne la vitesse exacte et instantanée de ton gbaka à un moment 't' super précis de ton trajet, par exemple au niveau du troisième pont. Ou bien, imagine que tu grimpes une colline au village : la dérivée te donne exactement la pente sous tes pieds à l'instant où tu t'arrêtes.",
          conceptMath: "Pour calculer cette vitesse ou cette pente instantanée, on calcule une limite quand l'intervalle de temps devient proche de zéro. La dérivée est une limite déguisée pour étudier le mouvement.",
        },
        {
          type: 'dialogue',
          id: 'b9',
          pf: "Ahhh... Donc en fait, si je gère bien mes limites du Tome 1, j'ai déjà fait le plus dur pour comprendre les dérivées ?",
          gf: "Tu as tout compris, champion ! Tu as déjà les fondations solides. Maintenant, on va juste utiliser cet outil pour devenir des pros.",
        },
        {
          type: 'text',
          id: 'b10',
          contenu: "Dans ce Tome 2 de la collection EDUCTOME, on laisse tomber la condescendance et le jargon inutile qui te font douter de toi. On avance ensemble, étape par étape. Mon rôle de grand frère est de te donner des explications simples, ancrées dans nos réalités ivoiriennes, pour dédramatiser l'erreur et te mener vers le succès.",
        },
        {
          type: 'text',
          id: 'b11-transition',
          contenu: 'Maintenant que le décor est planté, voyons concrètement les objectifs que nous allons réaliser ensemble dans ce tome.',
        },
      ],
    },
    {
      id: 's2',
      titre: 'Objectifs et Motivation',
      blocs: [
        {
          type: 'text',
          id: 'b12-accroche',
          contenu: 'Voici tes objectifs de combat. Lis-les attentivement : c\'est le contrat de réussite entre toi et moi pour ce chapitre.',
        },
        {
          type: 'recap',
          id: 'b13',
          titre: 'Voici tes objectifs concrets pour ce Tome 2 :',
          contenu: [
            '✅ Comprendre ce qu\'est une dérivée (visualiser la pente et la vitesse instantanée sans te perdre).',
            '✅ Calculer la dérivée de n\'importe quelle fonction (grâce à des astuces claires pour retenir tes formules).',
            '✅ Utiliser les dérivées pour étudier les variations (et tracer tes courbes sans trembler).',
            '✅ Résoudre des problèmes d\'optimisation (comment maximiser les bénéfices d\'un commerçant à Adjamé ou d\'un planteur de cacao).',
            '✅ Réussir les exercices type BAC sur les dérivées (pour rafler tous les points le jour de l\'examen).',
          ],
        },
        {
          type: 'text',
          id: 'b14',
          contenu: "Petit(e), l'école ivoirienne est exigeante et je sais que la pression du BAC pèse lourd sur tes épaules. Mais ne laisse jamais un cours mal compris te faire croire que tu n'es pas à la hauteur. Les mathématiques ne sont pas réservées à une élite ; elles s'ouvrent à ceux qui ont la bonne méthode. Tu as tout ce qu'il faut en toi pour réussir ce chapitre, où bien ? Prends ce manuel, lis-le comme on écoute les conseils d'un vieux père sous l'apatam, et fais-toi confiance. Au \"Cacao\", on m'a appris une chose essentielle : tant que la cloche de fin n'a pas sonné, le match t'appartient.",
        },
        {
          type: 'tip',
          id: 'b15',
          titre: 'Grand Frère te dit',
          contenu: [
            'Reste concentré, garde la motivation au maximum !',
            'On va aller gâter le coin au BAC ! Je crois en toi, on est ensemble !',
          ],
        },
        {
          type: 'text',
          id: 'b16-transition',
          contenu: 'Es-tu prêt à poser les bases solides ? Rejoins-moi dans la section suivante pour couler les fondations en béton de ton succès.',
        },
      ],
    },
  ],
  quiz: [
    {
      type: 'quiz',
      id: 'q1',
      question: 'Quelle est la nature fondamentale d\'une dérivée selon le Grand Frère ?',
      options: [
        'Une toute nouvelle matière déconnectée des limites',
        'Une simple limite du taux d\'accroissement, le petit frère des limites',
        'Une formule magique inventée pour bloquer les élèves',
        'Une simple multiplication de fonctions',
      ],
      bonneReponse: 1,
      explication: 'La dérivée n\'est rien d\'autre qu\'une application directe et logique des limites. C\'est la limite du taux d\'accroissement quand l\'intervalle devient infiniment petit.',
    },
    {
      type: 'quiz',
      id: 'q2',
      question: 'Dans l\'analogie du gbaka, que représente concrètement la dérivée ?',
      options: [
        'La destination finale à Grand-Bassam',
        'Le temps total du voyage',
        'La vitesse exacte et instantanée à un moment super précis du trajet',
        'Le prix du transport d\'Adjamé à Bassam',
      ],
      bonneReponse: 2,
      explication: 'Alors que la limite observe la tendance globale ou finale, la dérivée donne le comportement instantané : la vitesse précise à un instant t.',
    },
    {
      type: 'quiz',
      id: 'q3',
      question: 'Quelle phrase résume l\'état d\'esprit à avoir au Lycée Classique \"le Cacao\" ?',
      options: [
        'Le premier devoir détermine toute ton année',
        'Tant que la cloche de fin n\'a pas sonné, le match t\'appartient',
        'Les mathématiques sont réservées à une élite',
        'Si tu as du retard, il est trop tard',
      ],
      bonneReponse: 1,
      explication: 'Le Grand Frère rappelle qu\'avec de la méthode et de la persévérance, rien n\'est joué d\'avance. Tu peux toujours gâter le coin !',
    },
  ],
};