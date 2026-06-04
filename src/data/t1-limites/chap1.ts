// src/data/t1-limites/chap1.ts
// MESSAGE DU GRAND FRÈRE — ENRICHI
// Tome 1 : Les Limites · Collection Les Clés Maths
// ⚠️ Chapitre gratuit — accessible sans achat
// Enrichissements appliqués : Accroches · Transitions · Récaps intermédiaires
//                             Mini-exercice · Dialogues vivants · Micro-motivations

import { Chapitre } from '../../types/course';

export const chapitreIntro: Chapitre = {
  id: 't1-chap1',
  titre: 'Introduction : Message du Grand Frère',
  duree: 5,
  niveau: 'BASE',
  xpGain: 10,
  gratuit: true,
  objectifs: [
    'Comprendre la philosophie EDUCTOME',
    'Savoir ce que tu vas maîtriser dans ce tome',
    'Te préparer mentalement à dominer les limites',
  ],
  sections: [
    {
      id: 's1',
      titre: 'Introduction',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b0-accroche',
          contenu:
            "Champion(ne), avant même de commencer : ce que tu t'apprêtes à lire, beaucoup d'élèves n'ont jamais eu la chance de l'entendre. Reste là — ça va changer quelque chose.",
        },
        {
          type: 'text',
          id: 'b1',
          contenu:
            "Champion(ne),\n\nSi tu es là, c'est probablement parce que tu as exactement les mêmes « rembas » (problèmes) que j'avais il y a quelques années : un bon élève, intelligent et bosseur, mais qui commence à couler.",
        },
        {
          type: 'text',
          id: 'b2',
          contenu:
            "Tu as du mal à comprendre les notions, non pas parce que les maths ne sont pas faites pour toi, mais parce qu'on ne t'explique pas les choses avec des mots simples. On va se dire la vérité : certains professeurs sont tellement pressés de finir le programme qu'ils ne se soucient pas de savoir si tu as compris. Parfois même, c'est fait exprès pour t'obliger à t'inscrire à leurs cours de renforcement payants…",
        },
        {
          type: 'text',
          id: 'b3',
          contenu:
            "J'ai vécu ça au Lycée Classique. Malheureusement, je n'avais pas les moyens pour ces cours de renfos, et je n'avais pas de \"maître de maison\" (tu vois un peu le giga, non ? rire).\n\nRésultat : je me retrouvais frustré avec des montagnes de notions incomprises, surtout les limites, et j'étais constamment stressé quand on parlait d'interro ou de devoir — pourquoi ? Parce que je n'étais jamais prêt. Quand tu comprends pas tu piques pas, ou bien ?",
        },
        // ── Enrichissement 6 : Dialogue vivant ──
        {
          type: 'dialogue',
          id: 'b4',
          pf: "Vieux père, c'est exactement ça ! Le prof avance comme un TGV et quand je demande une explication, il me dit de venir au cours de renfort le samedi. Mais avec quoi je vais payer ? Et moi j'ose même pas poser la question devant toute la classe parce que j'ai peur qu'on se moque.",
          gf: "Je connais ce sentiment, petit — et honnêtement, tu viens de décrire ma Terminale mot pour mot. C'est pour ça que j'ai créé EDUCTOME. Ici, il n'y a pas de frais de renfos cachés, et AUCUNE question n'est stupide. Je te donne tout ce que j'ai appris pour que tu n'aies plus besoin de dépendre de personne. On est ensemble dans ce parcours.",
        },
        // ── Enrichissement 3 : Récap intermédiaire ──
        {
          type: 'recap',
          id: 'recap-s1',
          titre: 'Ce qu\'on vient de voir',
          contenu: [
            '✅ EDUCTOME est né d\'une vraie galère — pas d\'une théorie',
            '✅ Le problème n\'est pas ton intelligence, c\'est l\'accès aux bonnes explications',
            '✅ Ici, tout est clair, accessible, sans frais cachés',
          ],
        },
        // ── Enrichissement 2 : Transition ──
        {
          type: 'text',
          id: 'transition-s1-s2',
          contenu:
            "Tu sais maintenant d'où vient ce livre. Maintenant, passons à l'essentiel : pourquoi tu es là et ce que je vais te donner. C'est dans la section suivante que tout commence vraiment.",
        },
      ],
    },
    {
      id: 's2',
      titre: 'Ma mission',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b5-accroche',
          contenu:
            "Voici la phrase qui résume tout ce que je fais. Lis-la bien — c'est la raison pour laquelle ce tome existe.",
        },
        {
          type: 'text',
          id: 'b5',
          contenu:
            "Ma mission : Que personne ne reste au bord de la route.\n\nMon but est simple : être ce grand frère que je n'ai pas eu. Celui qui s'assoit avec toi, qui comprend ta galère, et qui te montre que les limites, c'est juste une histoire de direction, comme un gbaka qui va à Adjamé. Moi aussi j'étais assis en classe, le prof écrivait des symboles bizarres au tableau (\\( \\lim \\), \\( \\to \\), \\( \\infty \\), \\( +\\infty \\), \\( -\\infty \\)), et je me demandais : « Mais ça veut dire QUOI encore ! »\n\nAujourd'hui, je vais t'expliquer les limites comme j'aurais aimé qu'on m'explique à l'époque. On va transformer cette frustration en victoire.",
        },
        // ── Enrichissement 6 : Dialogue vivant ──
        {
          type: 'dialogue',
          id: 'b6',
          pf: "Vieux père, mais si j'ai déjà accumulé trop de retard — si je suis en Terminale et que j'ai pas compris les limites depuis le début — est-ce que c'est pas trop tard pour moi ? J'ai vraiment peur d'être un cas désespéré.",
          gf: "Champion(ne), au 'Cacao', on dit que tant que le match n'est pas fini, on peut gâter le coin. Et là le match est loin d'être fini ! Ce tome est ton entraînement spécial. On reprend tout à zéro, proprement, et je te garantis qu'à la fin tu vas voir les limites d'une façon complètement différente. Tout le monde peut rattraper — j'en suis la preuve.",
        },
        // ── Enrichissement 7 : Micro-motivation ──
        {
          type: 'tip',
          id: 'motivation-s2',
          titre: 'Grand Frère te dit',
          contenu: [
            "Ce n'est pas une question d'intelligence. C'est une question de méthode.",
            "Faut pas gnan — tu as tout ce qu'il faut pour comprendre les limites.",
            "Respire. On avance ensemble.",
          ],
        },
        // ── Enrichissement 2 : Transition ──
        {
          type: 'text',
          id: 'transition-s2-s3',
          contenu:
            "Tu as compris ma mission. Maintenant, voyons concrètement ce que tu vas repartir avec après ce tome — parce que j'ai des promesses précises à te faire.",
        },
      ],
    },
    {
      id: 's3',
      titre: 'Ce que tu vas gagner avec ce livre',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b7-accroche',
          contenu:
            "Ce que tu t'apprêtes à lire n'est pas une liste de promesses en l'air. C'est exactement ce que les élèves qui ont réussi au BAC avec ce tome ont appris.",
        },
        {
          type: 'recap',
          id: 'b7',
          titre: 'Ce que tu vas gagner avec ce livre',
          contenu: [
            '✅ Comprendre enfin ce qu\'est VRAIMENT une limite avec des exemples de notre quotidien',
            '✅ Calculer n\'importe quelle limite sans paniquer devant ta copie',
            '✅ Maîtriser les formes indéterminées avec une méthode claire',
            '✅ Réussir tes exercices type BAC pour assurer ta mention',
          ],
        },
        // ── Enrichissement 6 : Dialogue vivant (note positive finale) ──
        {
          type: 'dialogue',
          id: 'dialogue-final',
          pf: "Vieux père, j'ai lu tout ça et je me sens déjà un peu mieux. Mais les limites — c'est vraiment pour moi ? Je veux pas me bercer d'illusions.",
          gf: "Oui, Champion(ne). C'est pour toi. Les limites, comme toutes les maths, c'est une question de méthode, pas de génie. Tu as la méthode entre les mains. Maintenant il suffit de suivre. On commence ? 🔥",
        },
        {
          type: 'tip',
          id: 'b8',
          titre: 'Conseil du Grand Frère',
          contenu: [
            'Petit(e), ne laisse jamais le prix d\'un cours de renfort définir la valeur de ton avenir.',
            'Tu as ce livre et ton intelligence. C\'est suffisant pour devenir le debout de ta classe, ou bien ?!',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      type: 'quiz',
      id: 'q1',
      question: 'Quelle est la philosophie fondatrice d\'EDUCTOME ?',
      options: [
        'Mémoriser les formules avant tout',
        'Comprendre avant de calculer — le sens avant la formule',
        'Faire le maximum d\'exercices sans explication',
        'Suivre le programme du professeur strictement',
      ],
      bonneReponse: 1,
      explication:
        'EDUCTOME repose sur un principe non-négociable : comprendre le sens d\'une notion AVANT de calculer. La formule sans compréhension ne tient pas le jour du BAC.',
    },
    {
      type: 'quiz',
      id: 'q2',
      question: 'Pourquoi Marius a-t-il créé EDUCTOME ?',
      options: [
        'Pour concurrencer les professeurs du Lycée Classique',
        'Pour vendre des cours de renforcement payants',
        'Pour être le grand frère explicateur qu\'il n\'a pas eu — accessible à tous',
        'Pour distribuer des manuels gratuits',
      ],
      bonneReponse: 2,
      explication:
        'Marius a créé EDUCTOME parce qu\'il n\'avait pas les moyens pour les cours de renforcement et n\'avait pas de grand frère pour l\'expliquer. Sa mission : que personne ne reste au bord de la route.',
    },
    {
      type: 'quiz',
      id: 'q3',
      question: 'Que signifie "on va gâter le coin" dans le contexte EDUCTOME ?',
      options: [
        'On va abîmer quelque chose',
        'On va abandonner le cours',
        'On va réussir brillamment — dominer le BAC',
        'On va réviser dans un coin tranquille',
      ],
      bonneReponse: 2,
      explication:
        '"Gâter le coin" est une expression ivoirienne qui signifie réussir brillamment, dominer. Au \'Cacao\', tant que le match n\'est pas fini, on peut encore gâter le coin.',
    },
  ],
};

