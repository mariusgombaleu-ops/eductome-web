// src/data/t1-limites/chap7.ts
// CHAPITRE 6 — RÉUSSIR LE BAC SUR LES LIMITES — ENRICHI
// Tome 1 : Les Limites · Collection Les Clés Maths
// Contenu extrait fidèlement du PDF LES LIMITES-final.pdf (pages 93-111)
// Enrichissements : Accroches · Transitions · Récaps · Dialogues vivants · Micro-motivations

import { Chapitre } from '../../types/course';

export const chapitre6: Chapitre = {
  id: 't1-chap7',
  titre: 'Chapitre 6 : Réussir le BAC sur les Limites (La stratégie du Général)',
  duree: 40,
  niveau: 'BAC',
  xpGain: 150,
  gratuit: false,
  objectifs: [
    'Anticiper les questions classiques du BAC',
    'Éviter les erreurs de rédaction qui coûtent des points',
    'Gérer ton temps le jour de l\'épreuve',
    'Maîtriser les formules et astuces de dernière minute',
  ],
  sections: [
    {
      id: 's1',
      titre: 'Introduction — La préparation psychologique',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b0-accroche',
          contenu:
            "Champion(ne), la technique c'est bien, mais la stratégie c'est mieux. Aujourd'hui, on ne calcule plus : on prépare le braquage parfait des points au BAC.",
        },
        {
          type: 'text',
          id: 'b1',
          contenu:
            "\"La veille du BAC au 'Cacao', je n'ai pas ouvert un seul livre de calcul. J'ai juste pris une feuille blanche et j'ai dessiné toutes les situations possibles de limites dans ma tête. Je me suis dit : 'Demain, ce n'est pas un examen, c'est une démonstration de force'. Le secret des majors, ce n'est pas de tout savoir, c'est de savoir exactement quoi faire quand le stress veut te faire oublier ce que tu sais. J'ai géré mon temps comme un chronomètre suisse, et c'est ce qui m'a permis de finir l'analyse avec 30 minutes d'avance pour tout vérifier.\"",
        },
        {
          type: 'recap',
          id: 'b2',
          contenu:
            "Tu as la technique, tu as l'entraînement. Maintenant, il faut être malin. Le BAC, ce n'est pas seulement des maths, c'est de la gestion de stress et du temps. Voici comment braquer les points le jour J.",
        },
        // ── Enrichissement 2 : Transition ──
        {
          type: 'recap',
          id: 'transition-s1-s2',
          contenu:
            "On va d'abord scanner l'adversaire. Quels sont les types de questions qui reviennent systématiquement au BAC ? Voici ton radar à points.",
        },
      ],
    },
    {
      id: 's2',
      titre: '6.1 Ce qui tombe souvent au BAC',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b3-accroche',
          contenu:
            "Les sujets de BAC en Côte d'Ivoire se ressemblent. Les inspecteurs adorent les mêmes questions classiques. Si tu sais à quoi t'attendre, tu ne seras jamais surpris.",
        },
        {
          type: 'recap',
          id: 'b4',
          contenu:
            "Voici ce qui tombe à 90% :\n\n**1. Les questions classiques (Points cadeaux) 🎁**\n\n- **'Calculer les limites aux bornes de l'ensemble de définition'**\nC'est souvent la première question de l'étude de fonction (Problème).\n*Exemple :* Si \\( D_f = ]-\\infty; 2[ \\cup ]2 ; +\\infty[ \\), attends-toi à calculer en \\( -\\infty \\), en 2 (gauche et droite) et en \\( +\\infty \\).\n\n- **'En déduire l'existence d'asymptotes'**\nC'est la suite logique du calcul précédent. Tu dois traduire ton résultat en phrase géométrique.\n  • Résultat fini en l'infini → Asymptote Horizontale.\n  • Résultat infini en un point → Asymptote Verticale.\n\n- **'Montrer que la droite (D) d'équation y = ax + b est asymptote oblique'**\nIci, tu ne dois pas inventer. Tu dois appliquer la formule : \\( \\lim_{x \\to \\infty} [f(x) - (ax+b)] = 0 \\). C'est un classique absolu.\n\n- **Le Théorème de la Bijection (TVI)**\nOn te demandera souvent de montrer que l'équation \\( f(x) = 0 \\) admet une solution unique \\( \\alpha \\). Pour cela, tu dois calculer les limites aux bornes pour montrer que la courbe 'traverse' l'axe des abscisses (changement de signe).",
        },
        {
          type: 'recap',
          id: 'b5',
          titre: '🎁 Résumé des Questions Classiques',
          contenu: [
            "'Calculer limites aux bornes' → Substitution directe + les 5 étapes",
            "'Déterminer asymptotes' → Interpréter les limites trouvées",
            "'Étudier la continuité en a' → Comparer limite et image \\( f(a) \\)",
            "'Déterminer si \\( x=a \\) est une asymptote verticale' → Vérifier si \\( \\lim = \\pm\\infty \\)",
          ],
        },
        {
          type: 'warning',
          id: 'b6',
          contenu:
            "**2. LES PIÈGES RÉCURRENTS (POINTS DE VIGILANCE) 💣**\n\n**La rédaction interdite 1 :**\nÉcrire \\( \\lim \\frac{1}{0} = \\infty \\) sans préciser si c'est \\( +\\infty \\) ou \\( -\\infty \\).\n*Correction :* Fais toujours ton tableau de signes du dénominateur !\n\n**La rédaction interdite 2 :**\nÉcrire ce genre de chose sur ta copie : \\( f(x) = \\frac{\\infty}{\\infty} \\).\nLe correcteur va te pénaliser. Écris plutôt : 'On a une forme indéterminée', puis fais ta transformation.\n\n**L'oubli des parenthèses dans l'Asymptote Oblique :**\nDans le calcul \\( f(x) - (ax+b) \\), si tu oublies les parenthèses autour de \\( ax+b \\), tu vas te tromper de signe et tu ne trouveras jamais 0.",
        },
        // ── Enrichissement 6 : Dialogue vivant ──
        {
          type: 'dialogue',
          id: 'b7',
          pf: "Vieux père, si le sujet tombe et que c'est 'serré' (très difficile) dès la première question, je fais quoi ? Mon cœur va lâcher !",
          gf: "Bonne question — et c'est exactement ce que je pensais au 'Cacao'. Petit(e), respire ! Si la question 1 est dure, saute-la. Regarde la question 2 : elle te donne souvent l'indice ou le résultat que tu cherchais. Au BAC, on ne pleure pas devant un mur, on cherche la porte à côté.",
        },
        // ── Enrichissement 4 : Mini-exercice "À toi de jouer" ──
        {
          type: 'exercise',
          id: 'b8',
          niveau: 'BASE',
          enonce: 'À toi de jouer ! Une limite a donné \\( \\lim_{x \\to -\\infty} f(x) = 4 \\). Quelle est l\'asymptote ?',
          etapes: [
            '1. Je regarde où va x : \\( -\\infty \\)',
            '2. Je regarde où va f(x) : vers un nombre fini (4)',
            '3. Ligne couchée à l\'horizon.',
          ],
          reponse: 'Asymptote horizontale d\'équation y = 4.',
          conseil: 'x à l\'infini donne un nombre = Asymptote Horizontale (y=nombre).',
        },
        // ── Enrichissement 2 : Transition ──
        {
          type: 'recap',
          id: 'transition-s2-s3',
          contenu:
            "Savoir répondre, c'est la moitié du travail. L'autre moitié, c'est de le faire vite. Voici comment dompter le temps le jour de l'épreuve.",
        },
      ],
    },
    {
      id: 's3',
      titre: '6.2 Stratégie Temps ⏱️',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b9-accroche',
          contenu:
            "L'épreuve de Maths dure 4 heures. Ça paraît long, mais ça file à une vitesse folle. Ton pire ennemi, c'est de rester bloqué 20 minutes sur une limite à 0,5 point.",
        },
        {
          type: 'table',
          id: 'b10',
          titre: 'Temps recommandé par type de calcul',
          headers: ['Type de calcul', 'Temps recommandé'],
          rows: [
            ['Limite par substitution directe', '1–2 minutes'],
            ['Forme indéterminée (factorisation simple)', '3–5 minutes'],
            ['Forme indéterminée (conjugué)', '5–7 minutes'],
            ['Identification asymptote', '1 minute'],
            ['Étude complète avec tableau', '10–12 minutes'],
          ],
        },
        {
          type: 'rule',
          id: 'b11',
          titre: 'Quand passer à la suite ? (La règle des 5 minutes)',
          contenu: [
            "Si tu bloques plus de 5 minutes sur un calcul de limite : **ARRÊTE**.",
            "Laisse un espace vide de 5 à 6 lignes sur ta copie.",
            "**Pourquoi ?** Souvent, la question d'après te donne la réponse !",
            "*Exemple :* Question 1 : 'Calculer la limite en +infini'. Question 2 : 'Montrer que la courbe admet une asymptote d'équation y=2'.",
            "**Astuce de chef :** Si la question 2 parle d'une asymptote y=2, c'est que ta limite à la question 1 DOIT être égale à 2. Tu peux utiliser ce résultat pour continuer le problème, même si tu n'as pas réussi le calcul.",
          ],
        },
        // ── Enrichissement 7 : Micro-motivation ──
        {
          type: 'tip',
          id: 'motivation-temps',
          titre: 'Grand Frère te dit',
          contenu: [
            "Au BAC on cherche pas le plus beau dessin, on cherche les points.",
            "Si une limite te fatigue trop, 'dribble-la'.",
            "On revient gâter le coin à la fin quand on a assuré l'essentiel !",
          ],
        },
        // ── Enrichissement 2 : Transition ──
        {
          type: 'recap',
          id: 'transition-s3-s4',
          contenu:
            "Maintenant que la stratégie est en place, que fait-on la veille de l'examen ? On prépare son sac à dos mental.",
        },
      ],
    },
    {
      id: 's4',
      titre: '6.3 Check-list avant l\'épreuve ✅',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b12-accroche',
          contenu:
            "La veille de l'examen, interdiction de faire de nouveaux exercices compliqués. On vérifie juste son équipement.",
        },
        {
          type: 'text',
          id: 'b13',
          contenu:
            "**Ce qu'il faut réviser la veille :**\n- Les Limites Usuelles (surtout \\( \\ln(x) \\) et \\( e^x \\) en l'infini).\n- La technique de Factorisation par le terme de plus haut degré (le 'Chef').\n- L'expression Conjuguée (dès qu'il y a une racine carrée \\( \\sqrt{...} \\) et une soustraction).\n\n**Les formules à avoir en tête :**\n- L'identité remarquable : \\( a^2 - b^2 = (a-b)(a+b) \\) (Ton sauveur pour les factorisations).\n- La limite trigonométrique : \\( \\lim_{x \\to 0} \\frac{\\sin x}{x} = 1 \\).\n- Les croissances comparées : \\( e^x \\) bat \\( x^n \\), qui bat \\( \\ln x \\).\n\n**L'état d'esprit gagnant :**\n- Dis-toi : 'Je ne cherche pas la réponse au hasard, j'applique une méthode'.\n- Si tu tombes sur une Forme Indéterminée, souris. C'est juste un jeu de cache-cache. La réponse est là, cachée derrière une factorisation.\n- N'oublie pas ta calculatrice : c'est ton meilleur outil de vérification.",
        },
        // ── Enrichissement 6 : Dialogue vivant ──
        {
          type: 'dialogue',
          id: 'b14',
          pf: "Vieux père, je me sens prêt. Les limites là, ce n'est plus de la magie pour moi. Je peux dire que je suis un Major ?",
          gf: "Tu es plus qu'un Major, petit(e). Tu es un guerrier d'EDUCTOME. Tu as la technique, tu as la ruse, et tu as le cœur. Va au BAC, assieds-toi, et montre-leur que Le Grand Frère t'a bien formé ! Faut pas gnan !",
        },
        {
          type: 'text',
          id: 'b15',
          contenu:
            "**CONCLUSION :**\nChampion(ne),\nSi tu as bien travaillé, tu n'es plus le même élève qu'au début. Souviens-toi de tes premières frayeurs face à ce 'lim' et cette flèche '→'. Aujourd'hui, tu sais que ce n'est qu'une histoire de mouvement, de gbaka qui avance ou de prix au marché.\n\nTu as compris que :\n- Une limite, c'est regarder le terminus du voyage.\n- Une forme indéterminée, c'est juste un match qu'il faut arbitrer en changeant la forme des joueurs.\n- L'infini n'est pas un monstre, c'est juste une direction.\n\nLes limites ne te font plus peur. Tu as compris, pas appris par cœur. C'est ça la méthode EDUCTOME. Le BAC sera une formalité si tu gardes cette rigueur et ce calme. Respire. Aie confiance en ta tête. Je crois en toi !",
        },
      ],
    },
    {
      id: 's5',
      titre: 'Annexes — Formulaire Indispensable',
      blocs: [
        {
          type: 'text',
          id: 'b16',
          contenu:
            "**Formulaire des limites usuelles (À copier-coller dans ta tête !)**\n\n**Croissances Comparées (En \\( +\\infty \\) uniquement) :**\nC'est la loi du plus fort :\n- \\( \\lim_{x \\to +\\infty} \\frac{e^x}{x} = +\\infty \\) (\\( e^x \\) gagne)\n- \\( \\lim_{x \\to +\\infty} \\frac{\\ln x}{x} = 0 \\) (\\( x \\) gagne)\n- \\( \\lim_{x \\to 0^+} x \\ln x = 0 \\) (\\( x \\) gagne et tire vers 0)",
        },
        {
          type: 'recap',
          id: 'b17',
          titre: 'Tableau récapitulatif des Formes Indéterminées (FI)',
          contenu: [
            "**\\( \\infty - \\infty \\)** : FACTORISER par le terme de plus haut degré (le 'Chef').",
            "**\\( \\frac{\\infty}{\\infty} \\)** : FACTORISER numérateur et dénominateur par leurs 'Chefs' respectifs et simplifier.",
            "**\\( \\frac{0}{0} \\)** : FACTORISER par \\( (x-a) \\) ou utiliser le nombre dérivé. Si racines carrées : Expression conjuguée.",
            "**\\( 0 \\times \\infty \\)** : TRANSFORMER l'écriture (développer, mettre au même dénominateur) pour se ramener à une autre forme.",
          ],
        },
        {
          type: 'tip',
          id: 'b18',
          titre: 'Le mot de la fin',
          contenu: [
            "Petit(e), le jour J là, faut pas gnan (avoir peur). Le sujet est devant toi, mais la solution est déjà dans ta tête.",
            "Sois concentré, sois vif, et ramène-nous la mention. On t'attend au quartier pour fêter ça !",
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      type: 'quiz',
      id: 'q1',
      question: 'Au BAC, si tu bloques plus de 5 minutes sur un calcul de limite, que fais-tu ?',
      options: [
        'Je continue jusqu\'à trouver, au risque de perdre 30 minutes.',
        'Je panique et je passe à l\'exercice de géométrie.',
        'J\'arrête, je laisse un espace, et je regarde la question suivante qui donne souvent la réponse.',
        'Je mets 0 au hasard.',
      ],
      bonneReponse: 2,
      explication: 'La règle des 5 minutes est cruciale. Les sujets de BAC sont souvent construits de manière à ce que la question suivante débloque ou donne le résultat de la précédente.',
    },
    {
      type: 'quiz',
      id: 'q2',
      question: 'Si la question d\'après dit "Montrer que la droite y = 3 est asymptote horizontale", que vaut ta limite en +l\'infini que tu n\'arrivais pas à calculer ?',
      options: [
        '0',
        '\\( +\\infty \\)',
        '3',
        'Impossible à deviner',
      ],
      bonneReponse: 2,
      explication: 'Si la droite d\'équation y=3 est asymptote horizontale, c\'est que la limite en l\'infini VAUT 3. L\'énoncé vient de te donner la réponse de la question précédente !',
    },
    {
      type: 'quiz',
      id: 'q3',
      question: 'La veille du BAC, tu dois passer la nuit à faire des annales de Maths.',
      options: [
        'Vrai, il faut s\'entraîner jusqu\'à la dernière minute.',
        'Faux, la veille on vérifie juste ses formules et on se repose. Le travail est déjà fait.',
      ],
      bonneReponse: 1,
      explication: 'Le BAC se gagne sur la durée, pas la dernière nuit. La veille, le cerveau a besoin de repos et de classement (revoir les formules de base), pas de nouveaux problèmes complexes.',
    },
    {
      type: 'quiz',
      id: 'q4',
      question: 'Comment justifies-tu une forme 0/0 sur ta copie ?',
      options: [
        'J\'écris \\( = \\frac{0}{0} \\) et je rature.',
        'J\'écris "On obtient une forme indéterminée du type 0/0", puis je factorise.',
        'Je n\'écris rien, je passe direct au résultat.',
        'J\'écris "C\'est impossible".',
      ],
      bonneReponse: 1,
      explication: 'Ne jamais écrire \\( = \\frac{0}{0} \\) ! Le correcteur attend que tu identifies explicitement que c\'est une forme indéterminée par une petite phrase.',
    },
    {
      type: 'quiz',
      id: 'q5',
      question: 'Laquelle de ces phrases est l\'état d\'esprit d\'un élève EDUCTOME le jour du BAC ?',
      options: [
        'Je prie pour que le sujet soit facile.',
        'Je ne cherche pas la réponse au hasard, j\'applique une méthode. Ce n\'est qu\'un match à arbitrer.',
        'Je vais mourir, c\'est trop dur.',
        'Si je vois une racine carrée, j\'abandonne.',
      ],
      bonneReponse: 1,
      explication: 'La méthode prime sur l\'intuition. Le BAC vérifie ton application des méthodes. Faut pas gnan !',
    },
  ],
};

