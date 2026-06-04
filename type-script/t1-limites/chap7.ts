// src/data/t1-limites/chap7.ts
// CHAPITRE 6 — RÉUSSIR LE BAC SUR LES LIMITES
// Tome 1 : Les Limites · Collection Les Clés Maths

import { Chapitre } from '../../types/course';

export const chapitre6: Chapitre = {
  id: 't1-chap7',
  titre: 'Réussir le BAC sur les Limites',
  duree: 35,
  niveau: 'BAC',
  xpGain: 120,
  gratuit: false,
  objectifs: [
    'Connaître les questions qui tombent à 90% au BAC ivoirien',
    'Maîtriser la stratégie de temps pour l\'épreuve',
    'Éviter les 5 pièges à éviter les plus fréquents',
    'Arriver le jour J avec la confiance du Caïman',
  ],
  sections: [
    {
      id: 's1',
      titre: 'Introduction — La stratégie du Général',
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu: "\"La veille du BAC au 'Cacao', je n'ai pas ouvert un seul livre de calcul. J'ai juste pris une feuille blanche et j'ai dessiné toutes les situations possibles de limites dans ma tête. Je me suis dit : 'Demain, ce n'est pas un examen, c'est une démonstration de force'. Le secret des majors, ce n'est pas de tout savoir, c'est de savoir exactement quoi faire quand le stress veut te faire oublier ce que tu sais. J'ai géré mon temps comme un chronomètre suisse, et c'est ce qui m'a permis de finir l'analyse avec 30 minutes d'avance pour tout vérifier.\"",
        },
        {
          type: 'text',
          id: 'b2',
          contenu: "Tu as la technique, tu as l'entraînement. Maintenant, il faut être malin. Le BAC, ce n'est pas seulement des maths, c'est de la gestion de stress et du temps. Voici comment braquer les points le jour J.",
        },
      ],
    },
    {
      id: 's2',
      titre: '6.1 Ce qui tombe souvent au BAC',
      blocs: [
        {
          type: 'text',
          id: 'b3',
          contenu: "Les sujets de BAC (en Côte d'Ivoire, au Sénégal, au Cameroun, etc.) se ressemblent souvent. Les inspecteurs aiment vérifier si tu as compris les bases. Voici ce qui tombe à 90% :",
        },
        {
          type: 'rule',
          id: 'b4',
          titre: '1. Les questions classiques (Points cadeaux)',
          contenu: [
            '"Calculer les limites aux bornes de l\'ensemble de définition" — C\'est souvent la première question de l\'étude de fonction.',
            'Exemple : Si Df = ]−∞ ; 2[∪]2 ; +∞[, attends-toi à calculer en −∞, en 2 (gauche et droite) et en +∞.',
            '',
            '"En déduire l\'existence d\'asymptotes" — Suite logique du calcul précédent.',
            'Résultat fini en l\'infini → Asymptote Horizontale',
            'Résultat infini en un point → Asymptote Verticale',
            '',
            '"Montrer que la droite (D) d\'équation y = ax + b est asymptote oblique"',
            'Ne pas inventer. Appliquer la formule : lim[f(x) - (ax + b)] = 0',
          ],
        },
        {
          type: 'rule',
          id: 'b5',
          titre: '2. Les questions techniques (Points différenciants)',
          contenu: [
            '"Calculer lim f(x) avec une forme indéterminée" — Forme 0/0 ou ∞/∞',
            'Ce sont les questions où la moitié de la classe perd des points.',
            'Toi, tu as la méthode en 5 étapes. Tu ne peux pas rater !',
            '',
            '"Étudier la continuité en un point" — Les 3 conditions',
            '"Appliquer le TVI" — La structure en 3 phrases',
          ],
        },
        {
          type: 'table',
          id: 'b6',
          titre: 'Stratégie de temps au BAC — Partie Analyse',
          headers: ['Question type', 'Temps alloué', 'Stratégie'],
          rows: [
            ['Limites simples (substitution directe)', '2-3 min', 'Calcul mental au brouillon, recopie proprement'],
            ['Limites avec F.I. (0/0 ou ∞/∞)', '5-8 min', 'Les 5 étapes, écrire chaque étape'],
            ['Asymptotes (déduire)', '2-3 min', 'Traduire le résultat en phrase géométrique'],
            ['Continuité en un point', '4-5 min', 'Vérifier les 3 conditions dans l\'ordre'],
            ['TVI (existence solution)', '3-4 min', 'Structure 3 phrases — mécanique'],
          ],
        },
      ],
    },
    {
      id: 's3',
      titre: '6.2 Les 5 pièges à éviter',
      blocs: [
        {
          type: 'warning',
          id: 'b7',
          titre: 'Piège à éviter 1 — Conclure 0/0 = 0 ou ∞/∞ = 1',
          contenu: [
            'C\'est l\'erreur n°1 au BAC. 0/0 et ∞/∞ sont des formes INDÉTERMINÉES.',
            'Elles ne valent RIEN tant que tu n\'as pas fait les calculs.',
            'Sur ta copie, écris toujours : "On obtient la forme indéterminée 0/0. On va lever..."',
          ],
        },
        {
          type: 'warning',
          id: 'b8',
          titre: 'Piège à éviter 2 — Oublier le signe dans l\'asymptote verticale',
          contenu: [
            'lim(x→2⁺) 1/(x-2) ≠ lim(x→2⁻) 1/(x-2)',
            'Par la droite : 1/0⁺ = +∞. Par la gauche : 1/0⁻ = −∞',
            'Toujours préciser par quel côté on approche !',
          ],
        },
        {
          type: 'warning',
          id: 'b9',
          titre: 'Piège à éviter 3 — Dire "la limite n\'existe pas" quand f(a) n\'existe pas',
          contenu: [
            'f(3) peut ne pas exister ET lim(x→3) f(x) peut exister quand même !',
            'Image et limite sont deux choses DIFFÉRENTES.',
            'Ne jamais confondre les deux !',
          ],
        },
        {
          type: 'warning',
          id: 'b10',
          titre: 'Piège à éviter 4 — Confondre les 4 formes indéterminées',
          contenu: [
            '0/0 · ∞/∞ · ∞ − ∞ · 0 × ∞',
            'SEULEMENT ces 4. 0/∞ n\'est PAS indéterminé (c\'est 0).',
            '∞/0 n\'est PAS indéterminé (c\'est ±∞ selon les signes).',
          ],
        },
        {
          type: 'warning',
          id: 'b11',
          titre: 'Piège à éviter 5 — Ne pas justifier sur la copie',
          contenu: [
            'Au BAC, un résultat SANS justification = 0 point.',
            'Même si tu as la bonne réponse, écris TOUJOURS les étapes.',
            'Le correcteur note la démarche, pas juste la réponse.',
          ],
        },
      ],
    },
    {
      id: 's4',
      titre: 'Les Annexes — Ton formulaire complet',
      blocs: [
        {
          type: 'table',
          id: 'b12',
          titre: 'Formulaire des limites usuelles (À copier-coller dans ta tête !)',
          headers: ['Fonction f(x)', 'Limite en +∞', 'Limite en −∞', 'Limite en 0'],
          rows: [
            ['x²', '+∞', '+∞', '0'],
            ['x³', '+∞', '−∞', '0'],
            ['1/x', '0', '0', '+∞ (en 0⁺) −∞ (en 0⁻)'],
            ['√x', '+∞', 'N\'existe pas', '0'],
            ['eˣ', '+∞', '0', '1'],
            ['ln(x)', '+∞', 'N\'existe pas', '−∞ (en 0⁺)'],
          ],
        },
        {
          type: 'table',
          id: 'b13',
          titre: 'Tableau récapitulatif — Types de limites et techniques',
          headers: ['Type de limite', 'Résultat', 'Technique si F.I.'],
          rows: [
            ['k/x quand x → +∞', '0', 'Direct'],
            ['xⁿ quand x → +∞', '+∞', 'Direct'],
            ['1/(x-a) quand x → a⁺', '+∞', 'Signe du dénominateur'],
            ['(0/0) en a', 'À calculer', 'Factoriser'],
            ['(∞/∞)', 'À calculer', 'Duel des chefs'],
            ['(∞ − ∞)', 'À calculer', 'Factoriser par chef'],
            ['eˣ vs xⁿ quand x → +∞', 'eˣ gagne', 'Croissances comparées'],
            ['ln(x) vs xⁿ quand x → +∞', 'xⁿ gagne', 'Croissances comparées'],
          ],
        },
        {
          type: 'recap',
          id: 'b14',
          titre: 'Conclusion — On va gâter le coin !',
          contenu: [
            'Champion(ne), tu as terminé le Tome 1 sur les Limites.',
            'Tu sais maintenant :',
            '✅ Ce qu\'est vraiment une limite (l\'analogie du Gbaka)',
            '✅ Les 4 types de limites et leurs techniques',
            '✅ Le processus en 5 étapes pour calculer n\'importe quelle limite',
            '✅ Les raccourcis des majors pour aller plus vite',
            '✅ Les pièges à éviter pour ne jamais perdre de points inutilement',
            '',
            'Le prochain tome — Les Dérivées — va s\'appuyer sur tout ce que tu viens d\'apprendre.',
            'Faut pas gnan. On va gâter le coin au BAC !',
            '',
            'Je crois en toi ! — Ton Grand Frère EDUCTOME',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      type: 'quiz',
      id: 'q1',
      question: 'Quel est le premier réflexe face à une limite ?',
      options: [
        'Factoriser immédiatement',
        'Substituer directement x par la valeur',
        'Chercher les asymptotes',
        'Utiliser le conjugué',
      ],
      bonneReponse: 1,
      explication: 'TOUJOURS substituer d\'abord. Si on obtient un nombre ou ±∞ clair → C\'EST FINI. C\'est seulement si on obtient une forme indéterminée qu\'on passe aux techniques.',
    },
    {
      type: 'quiz',
      id: 'q2',
      question: 'Si $\\lim_{x \\to +\\infty} f(x) = 3$, quelle est l\'asymptote ?',
      options: [
        'Asymptote verticale x = 3',
        'Asymptote horizontale y = 3',
        'Pas d\'asymptote',
        'Asymptote oblique',
      ],
      bonneReponse: 1,
      explication: 'Résultat fini quand x → ±∞ → Asymptote HORIZONTALE y = L. Ici y = 3.',
    },
    {
      type: 'quiz',
      id: 'q3',
      question: 'Parmi ces formes, laquelle N\'EST PAS indéterminée ?',
      options: [
        '0/0',
        '∞/∞',
        '0/∞',
        '∞ − ∞',
      ],
      bonneReponse: 2,
      explication: '0/∞ n\'est PAS indéterminé : un nombre fixe (0) divisé par quelque chose de très grand → résultat 0. Les 4 formes indéterminées sont : 0/0 · ∞/∞ · ∞ − ∞ · 0 × ∞.',
    },
    {
      type: 'quiz',
      id: 'q4',
      question: 'Que vaut $\\lim_{x \\to +\\infty} \\frac{2x^3+5}{x^3-1}$ ?',
      options: [
        '+∞',
        '0',
        '2',
        '5',
      ],
      bonneReponse: 2,
      explication: 'Degrés égaux (3 = 3) → rapport des coefficients leaders = 2/1 = 2.',
    },
    {
      type: 'quiz',
      id: 'q5',
      question: 'La veille du BAC, la meilleure stratégie est :',
      options: [
        'Apprendre de nouvelles formules',
        'Passer la nuit à faire des exercices',
        'Revoir mentalement toutes les situations de limites et se reposer',
        'Réviser tous les 6 chapitres du tome',
      ],
      bonneReponse: 2,
      explication: 'Comme le dit le Grand Frère : "La veille du BAC, je n\'ai pas ouvert un seul livre de calcul. J\'ai juste visualisé toutes les situations." Le cerveau a besoin de repos pour performer. Fais confiance à ton entraînement !',
    },
  ],
};
