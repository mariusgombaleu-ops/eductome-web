// src/data/t1-limites/chap4.ts
// CHAPITRE 3 — CALCULER LES LIMITES : LA MÉTHODE QUI MARCHE
// Tome 1 : Les Limites · Collection Les Clés Maths

import { Chapitre } from '../../types/course';

export const chapitre3: Chapitre = {
  id: 't1-chap4',
  titre: 'Calculer les Limites — La Méthode qui Marche',
  duree: 40,
  niveau: 'MOYEN',
  xpGain: 75,
  gratuit: false,
  objectifs: [
    'Appliquer le processus en 5 étapes pour n\'importe quelle limite',
    'Lever les 4 formes indéterminées avec la bonne technique',
    'Maîtriser la factorisation par le "Chef" pour ∞ − ∞',
    'Utiliser l\'expression conjuguée pour les racines carrées',
  ],
  sections: [
    {
      id: 's1',
      titre: 'Introduction — La méthode du protocole militaire',
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu: "\"Devoir régional au 'Cacao', première Terminale. Dernière question (sur 3 points) : Calculer lim(x² + 2x − x) quand x → +∞. J'ai remplacé mentalement : +∞ + 2(+∞) − (+∞) = +∞ + ∞ − ∞. Mon cerveau a dit : 'C'est ∞ − ∞, forme indéterminée !' J'ai paniqué. Il restait 5 minutes. Mais je me suis calmé.\n\nJ'ai appliqué la méthode bête et méchante : '∞ − ∞ avec des x ? → FACTORISE par le plus grand !' x² + 2x − x = x²(1 + 2/x − 1/x). Quand x → +∞ : 2/x → 0 et 1/x → 0. Donc la parenthèse → (1 + 0 − 0) = 1. Et x² → +∞. Résultat : x² × 1 = +∞. J'ai écrit ça proprement en 3 minutes. J'ai eu les 3 points.\n\nCe jour-là, j'ai compris : avoir une MÉTHODE qui marche vaut mieux que 100 astuces. C'est cette méthode que je te donne aujourd'hui.\"",
        },
        {
          type: 'text',
          id: 'b2',
          contenu: "Tu as compris le principe ? Super. Maintenant, on passe à l'action. Le problème en maths, c'est que souvent, on panique parce qu'on ne sait pas par quel bout attraper le monstre. Ici, je te donne un protocole militaire. Si tu le suis, tu ne peux pas te tromper.",
        },
      ],
    },
    {
      id: 's2',
      titre: '3.1 Le processus en 5 étapes',
      blocs: [
        {
          type: 'rule',
          id: 'b3',
          titre: 'ÉTAPE 1 — LIRE ET IDENTIFIER',
          contenu: [
            'Où va x ? (vers un nombre ou vers ±∞)',
            'Quelle est la fonction f(x) ?',
            'Exemple : lim(x→2) (x²-4)/(x-2) → x tend vers 2, fonction = (x²-4)/(x-2)',
          ],
        },
        {
          type: 'rule',
          id: 'b4',
          titre: 'ÉTAPE 2 — REMPLACER DIRECTEMENT',
          contenu: [
            'Si x → a (nombre), remplace x par a.',
            'Si x → +∞, imagine un "nombre très grand".',
            'Si x → −∞, imagine un "nombre très grand négatif".',
            'Notre exemple : x = 2 dans (x²-4)/(x-2)',
            'Numérateur : (2)² - 4 = 4 - 4 = 0',
            'Dénominateur : 2 - 2 = 0',
            'Résultat du remplacement : 0/0',
          ],
        },
        {
          type: 'rule',
          id: 'b5',
          titre: 'ÉTAPE 3 — ANALYSER LE RÉSULTAT',
          contenu: [
            'CAS A : Tu obtiens un NOMBRE → C\'EST FINI ! ✅ (Exemples : 7, -3, 0...)',
            'CAS B : Tu obtiens ±∞ CLAIR → C\'EST FINI ! ✅ (Exemples : +∞, -∞)',
            'CAS C : Tu obtiens une FORME INDÉTERMINÉE → Continue ! ⚠️',
            'Les 4 formes indéterminées : 0/0 · ∞/∞ · ∞ − ∞ · 0 × ∞',
            'Notre exemple : On a obtenu 0/0 → FORME INDÉTERMINÉE ! On passe à l\'étape 4.',
          ],
        },
        {
          type: 'rule',
          id: 'b6',
          titre: 'ÉTAPE 4 — TRANSFORMER LA FONCTION',
          contenu: [
            '1. Forme 0/0 en un point → FACTORISER numérateur et dénominateur.',
            '2. Forme ∞ − ∞ → FACTORISER par le terme dominant.',
            '3. Forme ∞/∞ → FACTORISER haut et bas par les termes dominants.',
            '4. Forme ∞ − ∞ avec racines → Utiliser L\'EXPRESSION CONJUGUÉE.',
            'Notre exemple : 0/0 en x = 2 → On factorise !',
            'Numérateur : x² - 4 = (x-2)(x+2) (identité remarquable)',
            'Fonction transformée : (x-2)(x+2)/(x-2) = x + 2 (on simplifie par (x-2))',
          ],
        },
        {
          type: 'rule',
          id: 'b7',
          titre: 'ÉTAPE 5 — RECALCULER AVEC LA NOUVELLE FORME',
          contenu: [
            'Reprends l\'étape 2 avec la fonction simplifiée.',
            'Remplace à nouveau x par la valeur.',
            'Notre exemple : Nouvelle fonction f(x) = x + 2',
            'lim(x→2) (x + 2) = 2 + 2 = 4',
            'Réponse finale : 4 ✅',
          ],
        },
        {
          type: 'exercise',
          id: 'ex1',
          niveau: 'BASE',
          enonce: 'APPLICATION COMPLÈTE — Exercice guidé pas à pas : Calculer lim(x→3) (x²-9)/(x-3)',
          etapes: [
            'ÉTAPE 1 — Identifier : x tend vers 3, fonction = (x²-9)/(x-3)',
            'ÉTAPE 2 — Remplacer : x = 3 → (9-9)/(3-3) = 0/0',
            'ÉTAPE 3 — Analyser → 0/0 = Forme indéterminée ! Continue.',
            'ÉTAPE 4 — Transformer → x² - 9 = (x-3)(x+3). Donc (x-3)(x+3)/(x-3) = x + 3',
            'ÉTAPE 5 — Recalculer → lim(x→3) (x + 3) = 3 + 3 = 6',
          ],
          reponse: '6',
          conseil: 'Chaque fois que tu vois 0/0 avec un polynôme, cherche IMMÉDIATEMENT le facteur commun entre numérateur et dénominateur.',
          piege: 'Ne conclus JAMAIS que 0/0 = 0 ou 0/0 = 1. C\'est une forme indéterminée !',
        },
        {
          type: 'exercise',
          id: 'ex2',
          niveau: 'BASE',
          enonce: 'À TOI DE JOUER : Calculer lim(x→2) (x³-8)/(x-2). Indice : x³ - 8 = (x-2)(x² + 2x + 4)',
          etapes: [
            'Remplacer : (8-8)/(2-2) = 0/0 → Forme indéterminée !',
            'Factoriser : (x-2)(x²+2x+4)/(x-2) = x² + 2x + 4',
            'Recalculer : lim(x→2) (x² + 2x + 4) = 4 + 4 + 4 = 12',
          ],
          reponse: '12',
          conseil: 'Cette méthode marche TOUJOURS ! Si tu bloques, c\'est que tu as sauté une étape. Reviens au début et recommence calmement !',
        },
        {
          type: 'dialogue',
          id: 'b8',
          pf: "Vieux père, il y a trop de techniques ! Factorisation, conjugué, chefs... je prends quoi pour ne pas me mélanger ?",
          gf: "C'est simple petit : regarde la FORME de la limite. Si tu vois 0/0 en un point → factorisation. Si tu vois ∞ − ∞ avec des polynômes → factorise par x à la plus grande puissance. Si tu vois une racine avec ∞ − ∞ → conjugué. C'est comme au foot : on adapte la tactique selon l'adversaire. Regarde la forme, choisis l'arme !",
        },
      ],
    },
    {
      id: 's3',
      titre: '3.2 Les formes indéterminées et comment les lever',
      blocs: [
        {
          type: 'text',
          id: 'b9',
          contenu: "Il existe 4 \"Boss\" qui vont essayer de te bloquer. Voici comment les vaincre un par un.",
        },
        {
          type: 'tip',
          id: 'b10',
          titre: 'F.I. n°1 : ∞ − ∞ (Le combat des Titans)',
          contenu: [
            'Pourquoi c\'est indéterminé ? Tu as un terme qui tire vers +∞ et un autre vers −∞. On ne sait pas qui est le plus fort.',
            'La Technique : FACTORISER par le "Chef" — le terme de plus grande puissance.',
            'Le "Chef", c\'est le terme qui commande à l\'infini. En le mettant en facteur, tu forces tout le monde à voir sa puissance.',
            'Exemple : lim(x→+∞) (x² + 2x − x) = lim x²(1 + 2/x − 1/x) = lim x² × 1 = +∞',
          ],
        },
        {
          type: 'tip',
          id: 'b11',
          titre: 'F.I. n°2 : ∞/∞ (Le Duel des Chefs)',
          contenu: [
            'Technique : FACTORISER numérateur et dénominateur par leurs "Chefs" respectifs.',
            'Exemple : lim(x→+∞) (3x² + 1)/(x² + 5) = lim x²(3 + 1/x²) / x²(1 + 5/x²)',
            '= lim (3 + 1/x²) / (1 + 5/x²) = 3/1 = 3',
            'Règle : si les puissances sont égales, c\'est le rapport des coefficients !',
          ],
        },
        {
          type: 'tip',
          id: 'b12',
          titre: 'F.I. n°3 : 0/0 (La Factorisation)',
          contenu: [
            'Technique : FACTORISER par (x - a) ou utiliser le nombre dérivé.',
            'Si racines carrées : Expression conjuguée.',
            'Exemple classique : lim(x→2) (x²-4)/(x-2) = lim (x-2)(x+2)/(x-2) = lim (x+2) = 4',
          ],
        },
        {
          type: 'tip',
          id: 'b13',
          titre: 'F.I. n°4 : 0 × ∞ (La Transformation)',
          contenu: [
            'Technique : TRANSFORMER l\'écriture pour se ramener à 0/0 ou ∞/∞.',
            'En mettant au même dénominateur ou en développant.',
          ],
        },
      ],
    },
    {
      id: 's4',
      titre: '3.3 Les limites avec les racines carrées (√...)',
      blocs: [
        {
          type: 'rule',
          id: 'b14',
          titre: 'L\'Expression Conjuguée — L\'arme fatale contre les racines',
          contenu: [
            'Dès que tu vois une racine carrée et une forme ∞ − ∞, ton arme c\'est L\'EXPRESSION CONJUGUÉE.',
            'Le principe : Utiliser l\'identité (a - b)(a + b) = a² - b² pour faire sauter les racines.',
            'Exemple 1 : lim(x→+∞) (√(x+1) − √x)',
            'Conjugué : √(x+1) + √x',
            'Numérateur : (x+1) - x = 1',
            'Dénominateur : √(x+1) + √x → tend vers +∞',
            'Résultat : 1/∞ = 0',
          ],
        },
        {
          type: 'exercise',
          id: 'ex3',
          niveau: 'MOYEN',
          enonce: 'Calculer lim(x→+∞) (√(x²+3) − x)',
          etapes: [
            'Test : +∞ − ∞ → Forme indéterminée. On utilise le conjugué.',
            'Multiplier par le conjugué : (√(x²+3) + x)',
            'Numérateur : (x²+3) - x² = 3',
            'Dénominateur : √(x²+3) + x → tend vers +∞',
            'Résultat : 3/(+∞) = 0',
          ],
          reponse: '0',
          conseil: 'Chaque fois que tu vois √(...) − (polynôme), ton premier réflexe doit être : CONJUGUÉ !',
        },
      ],
    },
  ],
  quiz: [
    {
      type: 'quiz',
      id: 'q1',
      question: 'Quelle est la première étape du processus en 5 étapes ?',
      options: [
        'Factoriser immédiatement',
        'Lire et identifier où va x et quelle est la fonction',
        'Utiliser le conjugué',
        'Chercher les formes indéterminées',
      ],
      bonneReponse: 1,
      explication: 'La première étape est TOUJOURS : Lire et identifier. Où va x ? Quelle est la fonction ? Sans cette étape, tu risques d\'appliquer la mauvaise technique.',
    },
    {
      type: 'quiz',
      id: 'q2',
      question: 'Tu calcules $\\lim_{x \\to 2} \\frac{x^2-4}{x-2}$ et tu obtiens $\\frac{0}{0}$. Quelle technique appliques-tu ?',
      options: [
        'La limite est 0',
        'La limite est 1',
        'Factoriser le numérateur : x² - 4 = (x-2)(x+2)',
        'Utiliser le conjugué',
      ],
      bonneReponse: 2,
      explication: '0/0 en un point → FACTORISER. x² - 4 = (x-2)(x+2). On simplifie par (x-2) → lim(x+2) = 4. La réponse est 4.',
    },
    {
      type: 'quiz',
      id: 'q3',
      question: 'Pour calculer $\\lim_{x \\to +\\infty} \\frac{3x^3+1}{x^3+5}$, que remarques-tu ?',
      options: [
        'Forme 0/0 — on factorise',
        'Forme ∞/∞ — on factorise par le Chef (x³) en haut et en bas',
        'La limite est ∞',
        'La limite est 0 car il y a une division',
      ],
      bonneReponse: 1,
      explication: 'Forme ∞/∞ : on factorise par x³ en haut et en bas. = x³(3 + 1/x³) / x³(1 + 5/x³) = (3+0)/(1+0) = 3. Les puissances sont égales → c\'est le rapport des coefficients leaders.',
    },
    {
      type: 'quiz',
      id: 'q4',
      question: 'Quelle technique utilise-t-on pour $\\lim_{x \\to +\\infty} (\\sqrt{x+1} - \\sqrt{x})$ ?',
      options: [
        'Factorisation par le Chef',
        'Substitution directe',
        'Expression conjuguée — multiplier par (√(x+1) + √x)',
        'Règle de L\'Hôpital',
      ],
      bonneReponse: 2,
      explication: 'Forme ∞ - ∞ avec des racines → Expression conjuguée. On multiplie par (√(x+1) + √x) pour faire sauter les racines et obtenir un résultat calculable.',
    },
    {
      type: 'quiz',
      id: 'q5',
      question: 'Que fait le "Chef" dans la factorisation de $\\lim_{x \\to +\\infty} (x^2 + 2x - x)$ ?',
      options: [
        'Le Chef est 2x — le terme du milieu',
        'Le Chef est x² — le terme de plus haute puissance qui commande à l\'infini',
        'Il n\'y a pas de Chef dans cette limite',
        'Le Chef est -x — le terme négatif',
      ],
      bonneReponse: 1,
      explication: 'Le "Chef" est toujours le terme de plus haute puissance. Ici c\'est x². On factorise : x²(1 + 2/x - 1/x). À l\'infini : 2/x → 0 et 1/x → 0. Résultat : x² × 1 = +∞.',
    },
  ],
};
