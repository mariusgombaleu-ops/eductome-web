// src/data/t3-primitives/chap4.ts
import { Chapitre } from '../../types/course';

export const chapitre3: Chapitre = {
  id: 't3-chap4',
  titre: 'Calculer les Primitives — La Méthode',
  duree: 45,
  niveau: 'MOYEN',
  xpGain: 75,
  gratuit: false,
  objectifs: [
    'Maîtriser le tableau des primitives usuelles par cœur',
    'Comprendre la linéarité : savoir primitiver une somme',
    'Appliquer les règles de primitives composées (règle de la chaîne inverse)',
    'Utiliser le Process EDUCTOME en 5 étapes pour sécuriser les calculs',
  ],
  sections: [
    {
      id: 's1',
      titre: 'Introduction — La recette du Garba Mathématique',
      blocs: [
        {
          type: 'text',
          id: 'b1-accroche',
          contenu: 'Champion(ne), tu as compris le concept. Maintenant, passons à l\'action. Dériver est une science, primitiver est un art de la méthode.',
        },
        {
          type: 'text',
          id: 'b1',
          contenu: "Quand j'étais en classe de Terminale au Lycée Classique d'Abidjan, j'avais un ami qu'on appelait \"le magicien des dérivées\". À chaque devoir, pendant que nous autres transpirions sur nos brouillons, lui finissait en 15 minutes chrono. Il m'a confié : \"Vieux père, il n'y a pas de magie. Le calcul des dérivées, c'est comme préparer un bon garba. Tu dois juste connaître tes ingrédients (les formules) et suivre la recette étape par étape (les opérations), sans jamais brûler les étapes.\"",
        },
        {
          type: 'text',
          id: 'b2',
          contenu: "Dans le Chapitre 2, on s'est concentré sur la philosophie. Tu as compris le concept, maintenant on apprend à CALCULER. Fini les tâtonnements. Les mathématiciens ont créé des raccourcis puissants : les formules de primitives. Si tu maîtrises ce chapitre, tu as la clé pour déverrouiller plus de 60% des points du problème d'analyse au BAC.",
        },
        {
          type: 'text',
          id: 'b3-transition',
          contenu: 'Sortons tes ingrédients de base : le tableau des primitives usuelles que tu dois connaître aussi bien que ton numéro de téléphone.',
        },
      ],
    },
    {
      id: 's2',
      titre: '3.1 Tableau des Primitives Usuelles',
      blocs: [
        {
          type: 'table',
          id: 'b4-table-usuelles',
          titre: 'Tableau des Primitives (à connaître par cœur)',
          headers: ['Fonction f(x)', 'Primitive F(x)', 'Condition'],
          rows: [
            ['$k$ (constante)', '$kx + C$', '$x \\in \\mathbb{R}$'],
            ['$x$', '$\\frac{1}{2}x^2 + C$', '$x \\in \\mathbb{R}$'],
            ['$x^n$ ($n \\neq -1$)', '$\\frac{1}{n+1}x^{n+1} + C$', '$x \\in \\mathbb{R}$'],
            ['$\\frac{1}{x^2}$', '$-\\frac{1}{x} + C$', '$x \\neq 0$'],
            ['$\\frac{1}{\\sqrt{x}}$', '$2\\sqrt{x} + C$', '$x > 0$'],
            ['$e^x$', '$e^x + C$', '$x \\in \\mathbb{R}$'],
            ['$\\frac{1}{x}$', '$\\ln|x| + C$', '$x \\neq 0$'],
            ['$\\cos(x)$', '$\\sin(x) + C$', '$x \\in \\mathbb{R}$'],
            ['$\\sin(x)$', '$-\\cos(x) + C$', '$x \\in \\mathbb{R}$'],
          ],
        },
        {
          type: 'warning',
          id: 'b5',
          contenu: "⚠️ POINT DE VIGILANCE : La fausse constante\nBeaucoup d'élèves pensent que si un nombre a une forme bizarre, c'est une fonction. Faux ! $\\ln(2)$, $e^3$, $\\sqrt{5}$, ou $\\pi$ sont des CONSTANTES. Si on te demande de primitiver $f(x) = \\ln(2)$, la réponse est $F(x) = \\ln(2)x + C$. Ne te fais pas avoir par le déguisement !",
        },
        {
          type: 'text',
          id: 'b6',
          contenu: "5 Exemples d'application directe :\n1. Si $f(x) = 1500$, alors $F(x) = 1500x + C$.\n2. Si $f(x) = x^4$, alors $F(x) = \\frac{1}{5}x^5 + C$.\n3. Si $f(x) = e^x$, alors $F(x) = e^x + C$.\n4. Si $f(x) = \\ln(x)$, c'est un cas spécial qu'on verra plus tard (c'est une primitive complexe : $x\\ln(x) - x + C$).\n5. Si $f(x) = \\sin(x)$, alors $F(x) = -\\cos(x) + C$.",
        },
        {
          type: 'exercise',
          id: 'micro-ex-primitives-base',
          niveau: 'BASE',
          enonce: 'À toi de jouer ! Calcule la primitive de $f(x) = x^3$ en ajoutant la constante C.',
          etapes: [
            'Étape 1 : Identifie la forme $x^n$ avec $n=3$.',
            'Étape 2 : Applique la formule $\\frac{1}{n+1}x^{n+1}$ : $\\frac{1}{3+1}x^{3+1} = \\frac{1}{4}x^4$.',
            'Étape 3 : Ajoute la constante C pour conclure.',
          ],
          reponse: '\\frac{1}{4}x^4 + C',
          conseil: 'Vérifie toujours par la dérivation : la dérivée de $\\frac{1}{4}x^4$ donne bien $x^3$.',
        },
        {
          type: 'text',
          id: 'b7-transition',
          contenu: 'Les ingrédients sont prêts. Voyons maintenant les 5 règles opérationnelles pour primitiver les fonctions les plus complexes.',
        },
      ],
    },
    {
      id: 's3',
      titre: '3.2 Primitives des Fonctions Composées',
      blocs: [
        {
          type: 'rule',
          id: 'b8',
          titre: '📌 TABLEAU DES COMPOSÉES (La chaîne inverse)',
          contenu: [
            '• $u\' \\cdot u^n$ a pour primitive : $$\\frac{1}{n+1}u^{n+1} + C$$',
            '• $\\frac{u\'}{u^2}$ a pour primitive : $$-\\frac{1}{u} + C$$',
            '• $\\frac{u\'}{\\sqrt{u}}$ a pour primitive : $$2\\sqrt{u} + C$$',
            '• $u\' \\cdot e^u$ a pour primitive : $$e^u + C$$',
            '• $\\frac{u\'}{u}$ a pour primitive : $$\\ln|u| + C$$',
          ],
        },
        {
          type: 'tip',
          id: 'b9',
          titre: 'Conseil du Grand Frère',
          contenu: [
            'C\'est ici que le \"processus EDUCTOME\" prend tout son sens.',
            'Avant de primitiver, demande-toi TOUJOURS : \"Est-ce que je vois la dérivée de l\'intérieur (u\') quelque part dans mon expression ?\"',
            'Si oui, tu n\'as plus qu\'à appliquer la formule composée.',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      type: 'quiz',
      id: 'q1',
      question: 'Quelle est la primitive générale de f(x) = 1/x² ?',
      options: [
        'ln|x| + C',
        '-1/x + C',
        '1/x + C',
        'x^3 + C',
      ],
      bonneReponse: 2,
      explication: 'La dérivée de 1/x est -1/x². Donc, pour avoir 1/x², il faut prendre le signe opposé de la primitive de 1/x², soit -1/x.',
    },
    {
      type: 'quiz',
      id: 'q2',
      question: 'Pourquoi est-il crucial de vérifier ta primitive en la dérivant ?',
      options: [
        'Pour perdre du temps',
        'Parce que le Grand Frère le dit',
        'C\'est la Règle d\'Or : si la dérivée de ta primitive ne redonne pas f(x), c\'est que ton calcul est faux',
        'Pour vérifier si le prof a fait une erreur',
      ],
      bonneReponse: 3,
      explication: 'La Règle d\'Or EDUCTOME : la dérivation est le seul juge infaillible pour valider une primitive. 2 secondes de vérification = 1 point sauvé.',
    }
  ]
};