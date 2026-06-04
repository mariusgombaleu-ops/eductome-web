// src/data/t3-primitives/chap3.ts
import { Chapitre } from '../../types/course';

export const chapitre2: Chapitre = {
  id: 't3-chap3',
  titre: 'Comprendre les Primitives comme un Pro',
  duree: 30,
  niveau: 'MOYEN',
  xpGain: 60,
  gratuit: false,
  objectifs: [
    'Visualiser intuitivement le lien entre aire et primitive',
    'Comprendre la signification de l\'intégrale',
    'Maîtriser les 4 situations de calcul d\'aires',
  ],
  sections: [
    {
      id: 's1',
      titre: '2.1 La Primitive, c\'est quoi intuitivement ?',
      blocs: [
        {
          type: 'text',
          id: 'b1-accroche',
          contenu: 'Champion, te voilà de retour ! Tu as survécu au Chapitre 1, et je t\'en félicite. Maintenant que tu as tes outils, on va comprendre CE QU\'EST vraiment une primitive et pourquoi ça existe.'
        },
        {
          type: 'warning',
          id: 'b1',
          contenu: "Champion, te voilà de retour ! Tu as survécu au Chapitre 1, et je t'en félicite. Maintenant que tu as tes outils (Chapitre 1), on va comprendre CE QU'EST vraiment une primitive et pourquoi ça existe. Trop d'élèves appliquent des formules machinalement sans jamais saisir ce qui se cache derrière. Résultat ? Au moindre exercice un peu original au BAC, c'est la panique. Ici, on va d'abord visualiser la chose, la comprendre avec des images de chez nous, avant même de faire le moindre calcul compliqué. Tu es prêt, champion ? Allons-y !"
        },
        {
          type: 'text',
          id: 'b2',
          contenu: "Faisons le calcul complet pas à pas : On cherche la primitive de $f(x)=2x$. On va utiliser notre tableau du Chapitre 1. On cherche quelle fonction, lorsqu'on la dérive, nous donne $2x$. En regardant notre tableau, on voit que la dérivée de $x^2$ est $2x$. Donc $x^2$ est une primitive de $2x$. Mais attention, n'oublie pas la constante $C$ : $x^2 + C$ !"
        },
        {
          type: 'tip',
          id: 'b3',
          titre: 'Grand Frère te dit',
          contenu: [
             'La primitive n\'est pas juste une formule. C\'est une famille de fonctions !',
             'Le \"+ C\" est ton filet de sécurité : il représente tout ce qui a pu disparaître à la dérivation.',
          ]
        }
      ]
    },
    {
      id: 's2',
      titre: '2.2 Primitive vs Intégrale Définie',
      blocs: [
        {
          type: 'text',
          id: 'b4-accroche',
          contenu: 'Quelle est la différence entre une fonction primitive et un nombre ? C\'est ici que le calcul d\'aire commence à prendre tout son sens.'
        },
        {
          type: 'text',
          id: 'b4',
          contenu: "C'est une confusion classique : une primitive est une fonction (une formule), alors qu'une intégrale définie est un nombre (un résultat final)."
        },
        {
          type: 'rule',
          id: 'b5',
          titre: '📌 RÈGLE D\'OR : LE THÉORÈME FONDAMENTAL',
          contenu: [
            'L\'intégrale définie entre a et b d\'une fonction f est :',
            '$$\\int_a^b f(x)dx = F(b) - F(a)$$',
            'Où F est n\'importe quelle primitive de f.',
          ]
        }
      ]
    },
    {
      id: 's3',
      titre: '2.3 Interprétation Graphique',
      blocs: [
        {
          type: 'text',
          id: 'b6-accroche',
          contenu: 'La primitive n\'est pas seulement algébrique. Elle représente une aire sous une courbe. Voyons comment la visualiser.'
        },
        {
          type: 'figure',
          id: 'f1',
          legende: 'Aire sous la courbe',
          contenu: 'Schéma montrant l\'aire sous la courbe entre a et b.'
        }
      ]
    }
  ],
  quiz: [
    {
      type: 'quiz',
      id: 'q1',
      question: 'Qu\'est-ce qu\'une primitive F de f ?',
      options: [
        'Une fonction telle que F\'(x) = f(x)',
        'Une fonction telle que F(x) = f\'(x)',
        'Un nombre réel',
        'Une tangente',
      ],
      bonneReponse: 1,
      explication: 'Une primitive F est une fonction dont la dérivée est f.',
    },
    {
      type: 'quiz',
      id: 'q2',
      question: 'Pourquoi ajoutons-nous toujours \"+ C\" ?',
      options: [
        'Pour faire joli',
        'Parce que la dérivation efface les constantes',
        'Parce que c\'est la dérivée de x',
        'Pour multiplier la fonction par 100',
      ],
      bonneReponse: 2,
      explication: 'Toute constante dérivée devient zéro, donc pour remonter vers la fonction initiale, on doit ajouter une constante arbitraire C.',
    }
  ]
};

