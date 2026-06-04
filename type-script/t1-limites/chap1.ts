// src/data/t1-limites/chap1.ts
// MESSAGE DU GRAND FRÈRE
// Tome 1 : Les Limites · Collection Les Clés Maths
// ⚠️ Chapitre gratuit — accessible sans achat

import { Chapitre } from '../../types/course';

export const chapitreIntro: Chapitre = {
  id: 't1-chap1',
  titre: 'Message du Grand Frère',
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
        {
          type: 'dialogue',
          id: 'b4',
          pf: "Vieux père, c'est exactement ça ! Le prof avance comme un TGV et quand je demande une explication, il me dit de venir au cours de renfort le samedi. Mais avec quoi je vais payer ?",
          gf: "Je connais ce sentiment, petit. C'est pour ça que j'ai créé EDUCTOME. Ici, il n'y a pas de frais de renfos cachés. Je te donne tout ce que j'ai appris pour que tu n'aies plus besoin de dépendre de personne.",
        },
      ],
    },
    {
      id: 's2',
      titre: 'Ma mission',
      blocs: [
        {
          type: 'text',
          id: 'b5',
          contenu:
            "Ma mission : Que personne ne reste au bord de la route.\n\nMon but est simple : être ce grand frère que je n'ai pas eu. Celui qui s'assoit avec toi, qui comprend ta galère, et qui te montre que les limites, c'est juste une histoire de direction, comme un gbaka qui va à Adjamé. Moi aussi j'étais assis en classe, le prof écrivait des symboles bizarres au tableau (lim, →, ∞, +∞, -∞), et je me demandais : « Mais ça veut dire QUOI encore ! »\n\nAujourd'hui, je vais t'expliquer les limites comme j'aurais aimé qu'on m'explique à l'époque. On va transformer cette frustration en victoire.",
        },
        {
          type: 'dialogue',
          id: 'b6',
          pf: "Mais vieux père, si j'ai déjà accumulé trop de retard, est-ce que c'est pas trop tard pour moi ?",
          gf: "Au 'Cacao', on dit que tant que le match n'est pas fini, on peut gâter le coin. Ce livre est ton entraînement spécial. On reprend tout à zéro, proprement.",
        },
      ],
    },
    {
      id: 's3',
      titre: 'Ce que tu vas gagner avec ce livre',
      blocs: [
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
        {
          type: 'tip',
          id: 'b8',
          titre: 'Conseil du Grand Frère',
          contenu: [
            'Petit(e), ne laisse jamais le prix d\'un cours de renfort définir la valeur de ton avenir.',
            'Tu as ce livre et ton intelligence. C\'est suffisant pour devenir le debout de ta classe, où bien ?!',
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
        '"Gâter le coin" est une expression ivoirienne qui signifie réussir brillamment, dominer. Au 'Cacao', tant que le match n\'est pas fini, on peut encore gâter le coin.',
    },
  ],
};
