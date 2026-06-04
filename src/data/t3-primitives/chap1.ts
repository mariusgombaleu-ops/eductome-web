// src/data/t3-primitives/chap1.ts
import { Chapitre } from '../../types/course';

export const chapitreIntro: Chapitre = {
  id: 't3-chap1',
  titre: 'Message du Grand Frère',
  duree: 6,
  niveau: 'BASE',
  xpGain: 10,
  gratuit: true,
  objectifs: [
    'Comprendre la philosophie du remontage de fonctions',
    'Saisir l\'analogie de l\'apprenti mécanicien d\'Adjamé',
    'Visualiser tes objectifs de réussite pour ce Tome 3',
  ],
  sections: [
    {
      id: 's1',
      titre: 'Introduction',
      blocs: [
        {
          type: 'text',
          id: 'b1-accroche',
          contenu: 'C’est comment Champion(ne) ? Prêt(e) à découvrir le secret le mieux gardé des mathématiques de Terminale ? Accroche-toi, on passe au niveau supérieur !',
        },
        {
          type: 'text',
          id: 'b1',
          contenu: "Si tu lis ces lignes aujourd’hui, c’est que tu as survécu à ton deuxième grand combat de l'année. Tu as bravé le Tome 2 avec un courage de lion, tu as affronté les formules de dérivation, les tangentes, et tu as fini par dompter les redoutables tableaux de variations. (Si tu ne t'es pas encore procuré le Tome 1, je t'invite à l'avoir absolument). Tu te souviens de cette époque où la formule de $\\frac{u'v-uv'}{v^2}$ te donnait des sueurs froides ? Aujourd’hui, tout ça est derrière toi, tu maîtrises ces outils et tu as prouvé que tu as le mental d'un vrai battant. Je suis extrêmement fier de toi !",
        },
        {
          type: 'text',
          id: 'b2',
          contenu: "Mais je sais très bien ce qui se passe dans ta tête en ce moment. Tu regarde la suite du programme, tu vois le titre du nouveau chapitre : « Primitives et Calcul Intégral ». Tu entends les rumeurs dans la cour de l'école, tu vois ce grand symbole bizarre en forme de « S » allongé ($\\int$) que les terminaliers écrivent sur leurs brouillons, et tu te dis : « Le calvaire recommence. C'est quoi encore cette nouvelle sorcellerie ? Mon cerveau est déjà plein avec les dérivées ! ».",
        },
        {
          type: 'text',
          id: 'b3',
          contenu: "Respire un grand coup et écoute bien ce que je vais te dire, car c'est le secret le mieux gardé des mathématiques au lycée : les intégrales et les primitives ne sont pas de nouveaux monstres à combattre. C'est exactement ce que tu viens de faire, mais dans l'autre sens !",
        },
        {
          type: 'analogy',
          id: 'b4-analogie-moteur',
          titre: 'L\'Analogie du Remontage de Moteur',
          contenu: "Imagine un instant que tu sois un apprenti mécanicien à la grande ferraille d'Adjamé. Pendant tout le Tome 2, je t'ai appris à DÉMONTER le moteur d'une voiture. Tu as appris à prendre une fonction globale (la voiture) et à la décomposer pièce par pièce pour trouver sa vitesse instantanée (la dérivée). Tu es devenu un expert du démontage. Eh bien, dans ce Tome 3, on ne va rien inventer de nouveau : tu vas simplement apprendre à REMONTER le moteur !",
          conceptMath: "La primitive, c'est tout simplement l'opération INVERSE de la dérivée. Si tu as compris le Tome 2, le Tome 3 est déjà dans ta poche. C'est comme lire ton cours de dérivées, mais en commençant par la fin de la page.",
        },
        {
          type: 'text',
          id: 'b5',
          contenu: "Laisse-moi te raconter comment j'ai eu ce déclic. C'était un matin de février au Lycée Classique d'Abidjan, notre mythique « Cacao ». La chaleur commençait déjà à monter dans la classe. Notre professeur de mathématiques, un homme très rigoureux, s'est tourné vers le tableau et a dessiné un immense serpent vertical : le symbole de l'intégrale. Toute la classe a retenu son souffle. On s'est tous regardés avec des yeux écarquillés. Le prof a ensuite écrit une formule qui prenait toute la largeur du tableau. Mes voisins de table étaient en panique totale, certains posaient déjà leurs stylos en signe de défaite. Et puis, en regardant attentivement son calcul, j'ai souri. J'ai levé la main et j'ai dit : « Monsieur, en fait, vous venez juste de prendre le tableau des dérivées du mois dernier, et vous nous demandez de le lire de la droite vers la gauche ? ». Le prof a souri à son tour et a hoché la tête. La pression est retombée d'un coup dans la salle. C'était ça, le grand secret.",
        },
        {
          type: 'dialogue',
          id: 'b6-dialogue-devinette',
          pf: "Vieux père, pour dire vrai, j'ai géré le chapitre des dérivées au calme. Je connais mes formules par cœur. Mais là, j'ai jeté un œil au chapitre des primitives et ça a l'air mystique. C'est quoi l'histoire de chercher une fonction dont on ne connaît que la dérivée ? Ça ressemble à une devinette fatigante !",
          gf: "C'est exactement une devinette, champion ! Mais une devinette dont tu connais déjà toutes les réponses. Dis-moi, si je te demande : « Quelle est la fonction qui, quand je la dérive, me donne $2x$ ? » Tu me réponds quoi ?",
        },
        {
          type: 'dialogue',
          id: 'b7-dialogue-devinette-suite',
          pf: "Bah... c'est $x^2$. Quand on dérive $x^2$, ça fait $2x$. C'est la base du Tome 2.",
          gf: "Et BAM ! Tu viens de calculer ta première primitive sans même t'en rendre compte ! Tu vois ? La primitive de $2x$, c'est $x^2$. Tu ne fais que chercher le \"parent\" de la dérivée. Tu remontes l'arbre généalogique. Tu as juste marché à reculons !",
        },
        {
          type: 'dialogue',
          id: 'b8-dialogue-devinette-fin',
          pf: "Attends... donc c'est juste ça ? Si je connais parfaitement mon tableau de dérivées du Tome 2, je n'ai quasiment aucune nouvelle formule compliquée à apprendre ? C'est le même tableau lu à l'envers ?",
          gf: "Tu avez tout capté ! Les dérivées, c'était le démontage. Les primitives, c'est le remontage. Et l'intégrale, c'est juste l'outil qui utilise ces primitives pour calculer des choses concrètes, comme des aires ou des accumulations. Si tu as validé le Tome 2, ce Tome 3 est fait pour toi, où bien ?",
        },
        {
          type: 'dialogue',
          id: 'b9',
          pf: "Ah mais c'est trop propre ! Je pensais qu'on allait encore souffrir avec des concepts venus d'une autre planète. Je suis chaud, on y va !",
          gf: "C'est la bonne mentalité ! Voyons les objectifs que nous allons détruire ensemble.",
        },
        {
          type: 'text',
          id: 'b10-transition',
          contenu: 'Passons aux objectifs clairs et précis de ce tome pour mesurer ton avancement pas-à-pas.',
        },
      ],
    },
    {
      id: 's2',
      titre: 'Objectifs et Contrat de Réussite',
      blocs: [
        {
          type: 'text',
          id: 'b11-accroche',
          contenu: 'Voici tes cibles de combat pour ce chapitre. Lis-les attentivement : c\'est ton passeport pour gâter le coin au BAC !',
        },
        {
          type: 'recap',
          id: 'b12-objectifs',
          titre: 'Voici tes objectifs concrets pour ce Tome 3 :',
          contenu: [
            '✅ Comprendre qu\'une primitive est l\'opération INVERSE de la dérivée.',
            '✅ Calculer la primitive de n\'importe quelle fonction usuelle (sans aucune hésitation).',
            '✅ Maîtriser l\'intégrale définie et ses propriétés (et comprendre son utilité réelle).',
            '✅ Calculer des aires entre courbes et volumes de révolution (pour maîtriser l\'espace géométrique).',
            '✅ Réussir les exercices type BAC sur les intégrales (pour sécuriser le maximum de points à l\'examen).',
          ],
        },
        {
          type: 'text',
          id: 'b13',
          contenu: "La route vers le BAC est un marathon, pas un sprint. Il y aura des moments où un calcul te résistera, où une intégration par parties te semblera longue. Mais rappelle-toi de tout ce que tu as déjà surmonté. L'école ivoirienne t'apprend la rigueur, mais elle t'apprend surtout la persévérance. Prends ce livre, installe-toi confortablement avec ton cahier de brouillon. Ne te précipite pas. On va comprendre le concept, on va s'entraîner sur la technique, et on va finir par maîtriser la stratégie de l'examen. Le jour de l'épreuve, face à la situation complexe ou à l'étude de fonction, Ne panique pas ! Tu auras toutes les clés en main pour dominer le sujet.",
        },
        {
          type: 'tip',
          id: 'b14-motivation',
          titre: 'Grand Frère te dit',
          contenu: [
            'Reste concentré, garde cette mentalité de guerrier !',
            'On va aller assurer au BAC ! Je crois en toi, on est ensemble !',
          ],
        },
        {
          type: 'text',
          id: 'b15-transition',
          contenu: 'Tournons maintenant la première page d\'analyse pour poser des bases solides en béton armé.',
        },
      ],
    },
  ],
  quiz: [
    {
      type: 'quiz',
      id: 'q1',
      question: 'D\'après l\'analogie d\'Adjamé, quel est le rôle d\'une primitive par rapport à une dérivée ?',
      options: [
        'Démonter les pièces du carburateur',
        'Remonter le moteur de la voiture de façon inverse',
        'Changer les pneus du véhicule',
        'Calculer la vitesse maximale sur l\'autoroute',
      ],
      bonneReponse: 1,
      explication: 'Le cours montre que la dérivation consiste à démonter une fonction pour en trouver la variation, tandis que la primitive consiste à remonter le moteur pour retrouver la fonction d\'origine.',
    },
    {
      type: 'quiz',
      id: 'q2',
      question: 'Si le Grand Frère te demande « Quelle fonction donne 2x lorsqu\'on la dérive », que réponds-tu ?',
      options: [
        'La réponse est 2',
        'La réponse est x',
        'La réponse est x²',
        'La réponse est 2x²',
      ],
      bonneReponse: 2,
      explication: 'La dérivée de x² est 2x. Par conséquent, la primitive d\'origine (le parent de la fonction) de 2x est x².',
    },
  ],
};
