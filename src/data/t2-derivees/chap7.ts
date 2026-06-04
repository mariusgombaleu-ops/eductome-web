// src/data/t2-derivees/chap7.ts
import { Chapitre } from '../../types/course';

export const chapitre6: Chapitre = {
  id: 't2-chap7',
  titre: 'Réussir le BAC sur les Dérivées',
  duree: 35,
  niveau: 'BAC',
  xpGain: 120,
  gratuit: false,
  objectifs: [
    'Connaître la structure des 10 questions incontournables sur les dérivées au BAC',
    'Identifier et esquiver les 5 grands pièges à éviter relevés par les jurys',
    'Gérer son temps à la minute près grâce au tableau Chronomètre du BAC',
    'Valider sa préparation complète avec la check-list de dernière minute',
    'Appliquer les 4 stratégies de survie d\'urgence face à un blocage',
  ],
  sections: [
    {
      id: 's1',
      titre: 'Introduction — La Stratégie du Général',
      blocs: [
        {
          type: 'text',
          id: 'b1-accroche',
          contenu: 'Champion(ne), tu as la technique et les muscles. Maintenant, découvre le plan de match et la stratégie tactique d\'un caïman du Cacao pour braquer l\'épreuve d\'analyse.',
        },
        {
          type: 'text',
          id: 'b1',
          contenu: "📖 L'ANECDOTE DU GRAND FRÈRE (La Stratégie du Général) :\nLa veille du BAC au Lycée Classique d'Abidjan, je n'ai pas révisé les démonstrations interminables, je n'ai pas essayé de retenir de nouvelles formules compliquées à la dernière minute. J'ai pris une feuille blanche et j'ai révisé ma STRATÉGIE. Je me suis dit : \"Demain, l'épreuve de mathématiques n'est pas un examen, c'est un combat tactique. C'est une démonstration de force\". Beaucoup de mes camarades étaient plus forts que moi en calcul pur, mais ils ont paniqué le jour J parce qu'ils n'avaient pas de plan de match. Ils passaient 40 minutes sur une question à 0,5 point. Moi, j'ai géré mon temps comme un chronomètre suisse. J'ai repéré les questions \"cadeaux\", j'ai évité les pièges grossiers, et c'est ce qui m'a permis de finir le problème d'analyse avec 30 minutes d'avance pour tout vérifier. Le secret des majors, ce n'est pas de tout savoir, c'est de savoir comment utiliser ce qu'ils savent !",
        },
        {
          type: 'text',
          id: 'b2',
          contenu: "Champion(ne), tu as fait le plus dur. Tu as compris ce qu'est une dérivée, tu maîtrises les formules par cœur, et tu as transpiré sur les exercices d'entraînement. Tu as la technique, tu as les muscles. Maintenant, il faut être malin. Le BAC n'évalue pas seulement ton niveau en mathématiques, il évalue ta capacité à gérer ton stress, ton temps et ta lucidité face à un problème long. Dans ce chapitre, je te donne le plan de bataille officiel d'EDUCTOME pour braquer l'épreuve d'analyse sans trembler.",
        },
        {
          type: 'text',
          id: 'b3-transition',
          contenu: 'Découvrons tout de suite le décodage complet de la structure de l\'épreuve : les 10 questions qui reviennent chaque année.',
        },
      ],
    },
    {
      id: 's2',
      titre: '6.1 Ce qui tombe souvent au BAC — Les 10 Questions Clés',
      blocs: [
        {
          type: 'text',
          id: 'b4-accroche',
          contenu: 'Les concepteurs des sujets de mathématiques réutilisent toujours la même trame. Apprends à décoder l\'énoncé pour savoir exactement où frapper.',
        },
        {
          type: 'text',
          id: 'b4',
          contenu: "Les concepteurs des sujets du BAC utilisent toujours la même structure pour le grand problème d'analyse. Voici les 10 questions incontournables sur les dérivées, comment les plier rapidement, et le piège à esquiver.",
        },
        {
          type: 'text',
          id: 'b5-q1-q5',
          contenu: `
<div class="mb-6"><div class="font-bold text-[#1976D2] dark:text-blue-400 text-lg mb-2">1. « Calculer la fonction dérivée $f'(x)$ »</div>
<div class="pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-2">
<div><span class="font-bold">Fréquence :</span> Toujours présent (100% des sujets) | <span class="font-bold">Points :</span> 2 à 3 points.</div>
<div><span class="font-bold text-emerald-600 dark:text-emerald-400">Stratégie :</span> Identifie la forme globale ($uv$, $u/v$, $u^n$). Pose tes briques $u, v, u', v'$ au brouillon avant d'appliquer le modèle.</div>
<div><span class="font-bold text-red-600 dark:text-red-400">Piège :</span> Se lancer de tête sans écrire les briques, risquant de rater un signe.</div>
</div></div>

<div class="mb-6"><div class="font-bold text-[#1976D2] dark:text-blue-400 text-lg mb-2">2. « Étudier le signe de $f'(x)$ »</div>
<div class="pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-2">
<div><span class="font-bold">Fréquence :</span> Très fréquent (95% des sujets) | <span class="font-bold">Points :</span> 2 points.</div>
<div><span class="font-bold text-emerald-600 dark:text-emerald-400">Stratégie :</span> FACTORISE ta dérivée au maximum ! Un produit ou quotient s'étudie en un clin d'œil. Isole les termes strictement positifs ($e^x, x^2$, carré dénominateur) pour t'effacer la complexité.</div>
<div><span class="font-bold text-red-600 dark:text-red-400">Piège :</span> Essayer de résoudre une inéquation du troisième degré directement sans factorisation.</div>
</div></div>

<div class="mb-6"><div class="font-bold text-[#1976D2] dark:text-blue-400 text-lg mb-2">3. « Dresser le tableau de variations de f »</div>
<div class="pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-2">
<div><span class="font-bold">Fréquence :</span> Quasi-systématique | <span class="font-bold">Points :</span> 2 à 3 points.</div>
<div><span class="font-bold text-emerald-600 dark:text-emerald-400">Stratégie :</span> Ton tableau doit comporter 3 lignes strictes (les x, le signe de $f'$, et les flèches de variation de f : ↗ pour +, ↘ pour −). Reporte bien les limites aux extrémités des flèches.</div>
<div><span class="font-bold text-red-600 dark:text-red-400">Piège :</span> Oublier d'indiquer la double barre (‖) pour les valeurs interdites.</div>
</div></div>

<div class="mb-6"><div class="font-bold text-[#1976D2] dark:text-blue-400 text-lg mb-2">4. « Déterminer les extremums (maximum/minimum) relatifs »</div>
<div class="pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-2">
<div><span class="font-bold">Fréquence :</span> Souvent (70% des sujets) | <span class="font-bold">Points :</span> 1 à 2 points.</div>
<div><span class="font-bold text-emerald-600 dark:text-emerald-400">Stratégie :</span> Repère l'endroit où la dérivée s'annule (le 0) ET change de signe. Calcule l'image exacte $f(x_0)$.</div>
<div><span class="font-bold text-red-600 dark:text-red-400">Piège :</span> Confondre l'abscisse ($x$) et l'extremum lui-même ($f(x)$). L'extremum est la valeur de la fonction, pas son antécédent !</div>
</div></div>

<div class="mb-6"><div class="font-bold text-[#1976D2] dark:text-blue-400 text-lg mb-2">5. « Donner une équation de la tangente (T) au point d'abscisse $x_0$ »</div>
<div class="pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-2">
<div><span class="font-bold">Fréquence :</span> Régulier (80% des sujets) | <span class="font-bold">Points :</span> 2 à 3 points.</div>
<div><span class="font-bold text-emerald-600 dark:text-emerald-400">Stratégie :</span> C'est une question cadeau. Applique la formule : $y = f'(x_0)(x - x_0) + f(x_0)$. Développe pour obtenir la forme réduite $y = mx + p$.</div>
<div><span class="font-bold text-red-600 dark:text-red-400">Piège :</span> Confondre les valeurs de $f(x_0)$ et $f'(x_0)$ lors du remplacement.</div>
</div></div>
`.trim(),
        },
        {
          type: 'text',
          id: 'b6-q6-q10',
          contenu: `
<div class="mb-6"><div class="font-bold text-[#1976D2] dark:text-blue-400 text-lg mb-2">6. « Problème d'optimisation (Situation Complexe) »</div>
<div class="pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-2">
<div><span class="font-bold">Fréquence :</span> 1 fois sur 2 (souvent en fin de sujet) | <span class="font-bold">Points :</span> 4 à 6 points.</div>
<div><span class="font-bold text-emerald-600 dark:text-emerald-400">Stratégie :</span> Repère la grandeur à maximiser/minimiser. Dérive-la, cherche son annulation critique, et valide avec le signe.</div>
<div><span class="font-bold text-red-600 dark:text-red-400">Piège :</span> Trouver une valeur négative pour une dimension réelle sans t'en rendre compte. Le bon sens doit primer.</div>
</div></div>

<div class="mb-6"><div class="font-bold text-[#1976D2] dark:text-blue-400 text-lg mb-2">7. « Position relative de la courbe par rapport à sa tangente (T) »</div>
<div class="pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-2">
<div><span class="font-bold">Fréquence :</span> Parfois | <span class="font-bold">Points :</span> 2 points.</div>
<div><span class="font-bold text-emerald-600 dark:text-emerald-400">Stratégie :</span> Étudie le signe de la différence $d(x) = f(x) - y_T$. Différence positive (+) $\\implies$ courbe au-dessus ; différence négative (−) $\\implies$ courbe en dessous.</div>
<div><span class="font-bold text-red-600 dark:text-red-400">Piège :</span> Se tromper de signe en soustrayant : attention aux parenthèses $f(x) - (mx + p)$.</div>
</div></div>

<div class="mb-6"><div class="font-bold text-[#1976D2] dark:text-blue-400 text-lg mb-2">8. « Étude de fonction avec un paramètre (m, a, b) »</div>
<div class="pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-2">
<div><span class="font-bold">Fréquence :</span> Niveau fort (candidats visant la mention, ou Séries C) | <span class="font-bold">Points :</span> 3 à 4 points.</div>
<div><span class="font-bold text-emerald-600 dark:text-emerald-400">Stratégie :</span> Traduis les indices : "passe par A(1;2)" $\\implies f(1)=2$, "tangente horizontale" $\\implies f'(1)=0$. Résous le système d'équations ainsi créé.</div>
<div><span class="font-bold text-red-600 dark:text-red-400">Piège :</span> Essayer de deviner au hasard au lieu d'écrire le système d'équations linéaire.</div>
</div></div>

<div class="mb-6"><div class="font-bold text-[#1976D2] dark:text-blue-400 text-lg mb-2">9. « Continuité et dérivabilité en un point de raccordement »</div>
<div class="pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-2">
<div><span class="font-bold">Fréquence :</span> Parfois | <span class="font-bold">Points :</span> 2 points.</div>
<div><span class="font-bold text-emerald-600 dark:text-emerald-400">Stratégie :</span> Continuité $\\implies \\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = f(a)$. Dérivabilité $\\implies$ calcule la limite du taux d'accroissement à gauche et à droite.</div>
<div><span class="font-bold text-red-600 dark:text-red-400">Piège :</span> Utiliser les formules de dérivation brute ($nx^{n-1}$) à la place de la définition de la limite du taux face à un raccordement.</div>
</div></div>

<div class="mb-6"><div class="font-bold text-[#1976D2] dark:text-blue-400 text-lg mb-2">10. « Application concrète (vitesse, coût, etc.) »</div>
<div class="pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-2">
<div><span class="font-bold">Fréquence :</span> 1 fois sur 3 | <span class="font-bold">Points :</span> 4 à 5 points.</div>
<div><span class="font-bold text-emerald-600 dark:text-emerald-400">Stratégie :</span> Traduis le français en maths. "Vitesse instantanée" = dérivée, "Coût marginal" = dérivée du coût total. C'est la même mécanique avec d'autres lettres !</div>
<div><span class="font-bold text-red-600 dark:text-red-400">Piège :</span> Abandonner la question car elle parle d'économie ou de physique. C'est juste f(x) avec un autre déguisement !</div>
</div></div>
`.trim(),
        },
        {
          type: 'text',
          id: 'b7-transition',
          contenu: 'Connaître les cibles est indispensable. Voyons maintenant le recueil des erreurs de relecture pour blinder ton score : l\'atelier des pièges à éviter.',
        },
      ],
    },
    {
      id: 's3',
      titre: '6.2 Les Pièges à Éviter — L\'Atelier EDUCTOME',
      blocs: [
        {
          type: 'text',
          id: 'b8-accroche',
          contenu: 'Jury du BAC, rapports de correction... J\'ai analysé les copies de milliers d\'élèves. Voici les 5 erreurs les plus fréquentes qui ruinent une note d\'analyse.',
        },
        {
          type: 'warning',
          id: 'b9-piege-1',
          contenu: "⚠️ PIÈGE À ÉVITER 1 : Croire que $(u/v)' = u'/v'$\n\n• Erreur classique : Dériver $f(x) = \\frac{e^x}{x}$ en écrivant directement $f'(x) = \\frac{e^x}{1} = e^x$. C'est archifaux !\n• Comment l'éviter : Applique la formule sacrée du quotient : $\\frac{u'v - uv'}{v^2}$. Dès qu'il y a un x en haut et en bas, ton cerveau doit clignoter : danger, formule longue !\n• Points perdus : -1,5 point de calcul, et généralement 0 à la suite du problème car tes flèches seront faussées.",
        },
        {
          type: 'warning',
          id: 'b10-piege-2',
          contenu: "⚠️ PIÈGE À ÉVITER 2 : Oublier le u' dans la règle de la chaîne (composée)\n\n• Erreur classique : Dériver $g(x) = \\ln(3x^2 + 5)$ en écrivant $g'(x) = \\frac{1}{3x^2+5}$. C'est incomplet !\n• Comment l'éviter : N'oublie jamais le \"bébé dans le ventre de la mère\". Multiplie par la dérivée interne. La formule de $\\ln(u)$ est $\\frac{u'}{u}$, ce qui donne ici $\\frac{6x}{3x^2+5}$. De même pour $(e^u)' = u'e^u$.\n• Points perdus : -1 point net, et l'étude du signe de ta dérivée devient fausse.",
        },
        {
          type: 'warning',
          id: 'b11-piege-3',
          contenu: "⚠️ PIÈGE À ÉVITER 3 : Mauvais timing de remplacement pour f'(a)\n\n• Erreur classique : Pour calculer $f'(2)$ sachant que $f(x) = x^3$, remplacer d'abord : $f(2) = 8$, puis dériver le nombre 8, ce qui donne 0. C'est un non-sens total.\n• Comment l'éviter : Respecte l'ordre chronologique : on DÉRIVE D'ABORD la fonction en conservant les x ($f'(x) = 3x^2$), et seulement ensuite, on remplace x par sa valeur : $f'(2) = 3(2)^2 = 12$.\n• Points perdus : -1 point, et impossibilité de poser ton équation de tangente.",
        },
        {
          type: 'warning',
          id: 'b12-piege-4',
          contenu: "⚠️ PIÈGE À ÉVITER 4 : Le tableau de variations nu\n\n• Erreur classique : Dessiner un beau tableau avec les bons signes, mais laisser les flèches flotter dans le vide sans remplir leurs extrémités.\n• Comment l'éviter : Un tableau n'est validé que s'il est complet. Inscrits-y les limites en l'infini, les limites aux valeurs interdites, et les images exactes calculées pour les extremums.\n• Points perdus : -0,5 à -1 point de pénalité de rigueur de la part du correcteur.",
        },
        {
          type: 'warning',
          id: 'b13-piege-5',
          contenu: "⚠️ PIÈGE À ÉVITER 5 : Penser que f'(x) = 0 garantit un extremum\n\n• Erreur classique : Trouver que la dérivée s'annule en $x = 1$ et affirmer directement : \"il y a un maximum en 1\".\n• Comment l'éviter : S'arrêter un instant de marcher ne signifie pas qu'on est au sommet. La dérivée doit s'annuler ET changer de signe ! Si elle reste positive de part et d'autre de 0, c'est un simple palier (point d'inflexion).\n• Points perdus : -0,5 point et une justification fausse sur ta copie.",
        },
        {
          type: 'text',
          id: 'b14-transition',
          contenu: 'Avoir la technique ne suffit pas si tu manques de temps. Découvrons la stratégie de gestion du chronomètre officiel d\'EDUCTOME.',
        },
      ],
    },
    {
      id: 's4',
      titre: '6.3 Stratégie Temps & 6.4 Check-list',
      blocs: [
        {
          type: 'text',
          id: 'b15-accroche',
          contenu: 'L\'épreuve du BAC dure 4 heures en série D. Apprends à piloter ton temps à la minute près pour ne pas sacrifier les autres exercices.',
        },
        {
          type: 'table',
          id: 'b16-table-temps',
          titre: 'Le Chronomètre officiel du BAC (Format Stratégie)',
          headers: ['Type de calcul ou d\'étape', 'Temps maximum autorisé'],
          rows: [
            ['Calcul de dérivée simple', '2 à 3 minutes'],
            ['Signe de f\'(x)', '3 à 4 minutes'],
            ['Équation de la tangente', '3 à 4 minutes'],
            ['Recherche d\'extremum', '3 à 5 minutes'],
            ['Calcul de dérivée complexe', '5 à 7 minutes'],
            ['Tableau de variations complet', '5 à 7 minutes'],
            ['Problème d\'optimisation complet', '10 à 15 minutes'],
            ['Étude complète d\'une fonction', '25 à 30 minutes'],
          ],
        },
        {
          type: 'text',
          id: 'b17',
          contenu: "Si tu dépasses ces temps lors de tes entraînements, c'est que tu es bloqué. Il faut appliquer immédiatement un plan de secours.",
        },
        {
          type: 'recap',
          id: 'b18-checklist',
          titre: '6.4 La Check-list d\'urgence de la veille',
          contenu: [
            '📌 Formules : Dérivée d\'une constante (0), de $x^n$ ($nx^{n-1}$), de $\\frac{1}{x}$ ($-\\frac{1}{x^2}$), de $\\sqrt{x}$ ($\\frac{1}{2\\sqrt{x}}$).',
            '📌 Composées : Dérivée de $e^u$ ($u\'e^u$) et de $\\ln(u)$ ($\\frac{u\'}{u}$).',
            '📌 Géométrie : Équation de la tangente $y = f\'(x_0)(x - x_0) + f(x_0)$ sue sur le bout des doigts.',
            '📌 Méthode : Le Processus EDUCTOME en 5 étapes ancré comme un automatisme mécanique.',
            '📌 Relecture : Ai-je bien mis mon u\' ? Mon tableau contient-il les limites ? Ma dérivée change-t-elle de signe ?',
          ],
        },
        {
          type: 'text',
          id: 'b19-transition',
          contenu: 'Le stress monte et tu te retrouves bloqué sur une question le jour J ? Pas de panique, voici le protocole de survie militaire.',
        },
      ],
    },
    {
      id: 's5',
      titre: '6.5 Que faire si tu bloques ? (Opération Survie)',
      blocs: [
        {
          type: 'text',
          id: 'b20-accroche',
          contenu: 'Être bloqué au BAC arrive même aux meilleurs. L\'important n\'est pas d\'éviter l\'obstacle, mais de savoir comment gratter les points légalement.',
        },
        {
          type: 'text',
          id: 'b20',
          contenu: "Même les meilleurs élèves paniquent. Il y aura probablement une question au BAC qui va te faire transpirer. C'est tout à fait normal ! L'important n'est pas de ne jamais tomber, mais de savoir comment se relever. Voici 4 stratégies concrètes de grand frère pour ne pas laisser de points s'envoler.",
        },
        {
          type: 'tip',
          id: 'b21-survie-1-2',
          titre: 'Stratégies 1 & 2 : Relativiser et Enquêter',
          contenu: [
            '1. La Stratégie du \"Bouton Pause\" (Respire et bois) : Face à une dérivée monstrueuse qui refuse de se simplifier, pose ton stylo. Ferme les yeux 10 secondes. Respire profondément et bois une gorgée d\'eau. Regarde la fonction avec un œil neuf. Souvent, il suffisait de factoriser par x ou de scinder une fraction.',
            '2. La Stratégie de l\'Inspecteur (Relis l\'énoncé en entier) : Le sujet de BAC te tient la main. Si tu bloques sur \"Déterminer le signe de la dérivée\", regarde la question suivante. S\'il est écrit : \"En déduire que f est croissante sur ]0; +inf[\", BINGO ! Le sujet te donne la réponse : la dérivée est strictement positive. Sers-toi de la suite pour avancer.',
          ],
        },
        {
          type: 'tip',
          id: 'b22-survie-3-4',
          titre: 'Stratégies 3 & 4 : Gratter et Sauter tactiquement',
          contenu: [
            '3. La Stratégie du Dialogue (Écris ce que tu sais) : Tu n\'arrives pas à dériver ? Ne laisse jamais la feuille blanche. Écris : \"Pour calculer la dérivée de cette fraction rationnelle, j\'identifie la forme u/v. Je pose u = ... et v = ... J\'applique la formule (u\'v-uv\')/v²\". Le correcteur te donnera un demi-point pour la démarche.',
            '4. Le Saut Stratégique (Le repli tactique) : Coincé depuis 10 minutes sur une démonstration ? Arrête le massacre. Écris : \"Admettons le résultat de la question 3.a et passons à la suite\". Utilise la formule de dérivée donnée par l\'énoncé et dresse le tableau et la tangente. Tu perds 1 point mais tu sauves les 5 points du reste du problème ! Un bon soldat sait battre en retraite pour gagner la guerre.',
          ],
        },
        {
          type: 'dialogue',
          id: 'b23-dialogue-victoire',
          pf: "Vieux père, je me sens prêt. J'ai refait les exercices du Chapitre 5. J'ai coché toute ma check-list. Je connais les 5 pièges à éviter par cœur. Sincèrement, les dérivées ne me font plus peur. C'est devenu comme un jeu de Lego pour moi. J'attends le sujet de pied ferme !",
          gf: "C'est exactement cette mentalité que je voulais voir émerger chez toi, champion ! Tu as cessé de subir les mathématiques pour commencer à les dominer. L'école n'est pas un mystère, c'est juste de la méthode et de la persévérance. Le jour J, assois-toi fièrement à ta table. Prends ton temps, applique ce qu'on a vu ensemble, étape par étape, sans précipitation. Tu as les armes, tu as la tactique. Maintenant, va dans cette salle, reste concentré, et ramène-nous la victoire. On est ensemble !",
        },
        {
          type: 'text',
          id: 'b24-transition',
          contenu: 'Le cours est achevé. Découvrons ensemble le récapitulatif final de tes acquis avant d\'ouvrir ton arsenal de révision : les Annexes de cours.',
        },
      ],
    },
    {
      id: 's6',
      titre: 'Conclusion du Tome 2 — Les Acquis Maîtrisés',
      blocs: [
        {
          type: 'text',
          id: 'b25-accroche',
          contenu: 'Regarde le chemin parcouru, champion(ne) ! Tu as noirci des feuilles, tu as transpiré, mais tu as dompté la bête. Faisons le bilan.',
        },
        {
          type: 'recap',
          id: 'b25-conclusion-points',
          titre: 'Au fil de ces pages, tu as compris que :',
          contenu: [
            '✅ Une dérivée mesure la vitesse instantanée ou la pente : c\'est le compteur de vitesse de ton gbaka ou la raideur de la colline sous tes pieds.',
            '✅ Le signe de la dérivée est une boussole absolue : si f\'(x) est positif tu montes, s\'il est négatif tu descends.',
            '✅ f\'(x) = 0 indique un extremum potentiel : quand la pente s\'annule et change de signe, tu as trouvé un sommet (maximum) ou un creux (minimum).',
            '✅ Le tableau de variations est la carte d\'identité de la fonction : il raconte toute l\'histoire de la courbe, de -inf à +inf.',
            '✅ La tangente est une droite d\'approximation : elle vient effleurer la courbe, et sa pente est égale au nombre dérivé f\'(a).',
            '✅ L\'optimisation, c\'est la rentabilité réelle : grâce aux dérivées, tu sais maximiser un bénéfice au marché d\'Adjamé ou minimiser des coûts de tôle.',
          ],
        },
        {
          type: 'text',
          id: 'b26',
          contenu: "Mais l'aventure ne s'arrête pas là ! Tout bon mécanicien sait monter un moteur, mais il doit aussi savoir le démonter. Dans le prochain tome, tu vas découvrir que l'intégrale est l'OPÉRATION INVERSE de la dérivée. Si la dérivée te donne la vitesse à partir de la distance, l'intégrale (les primitives) te permettra de retrouver la distance à partir de la vitesse ! C'est la pièce manquante du puzzle qui te permettra de calculer des aires et des volumes incroyables.",
        },
        {
          type: 'text',
          id: 'b27',
          contenu: "Le jour J là, faut pas avoir peur ! Quand tu seras assis devant ta copie de BAC, respire un bon coup. Tu as les armes, tu connais les pièges, tu as la méthode EDUCTOME. Ne laisse aucune équation t'intimider. Fais parler ton stylo et va gâter le coin !",
        },
        {
          type: 'text',
          id: 'b28',
          contenu: "Je crois en toi ! On est ensemble jusqu'à la victoire.\n— Ton Grand Frère EDUCTOME\n\nP.S. : Garde ce manuel précieusement et repose-toi un peu. On se retrouve très vite dans le Tome 3 : Primitives et Intégrales, pour boucler définitivement le programme d'analyse !",
        },
        {
          type: 'text',
          id: 'b29-transition',
          contenu: 'Ouvrons maintenant les Annexes de référence. Utilise-les pour réviser rapidement tes formules et traquer les erreurs fréquentes.',
        },
      ],
    },
    {
      id: 's7',
      titre: 'ANNEXE A : Formulaire Complet des Dérivées',
      blocs: [
        {
          type: 'text',
          id: 'b30-accroche',
          contenu: 'Voici ton arsenal de guerre, classé par thèmes. Apprends ces formules par cœur, elles sont intouchables.',
        },
        {
          type: 'table',
          id: 'b31-table-annexe-a-1',
          titre: '1. Les Dérivées Usuelles (Format Formulaire Cours)',
          headers: ['Fonction $f(x)$', 'Dérivée $f\'(x)$', 'Condition sur $x$'],
          rows: [
            ['$k$ (constante: 5, $\\pi$, $\\ln 2$)', '$0$', '$x \\in \\mathbb{R}$'],
            ['$x$', '$1$', '$x \\in \\mathbb{R}$'],
            ['$ax + b$', '$a$', '$x \\in \\mathbb{R}$'],
            ['$x^2$', '$2x$', '$x \\in \\mathbb{R}$'],
            ['$x^n$ ($n \\in \\mathbb{N}^*$)', '$nx^{n-1}$', '$x \\in \\mathbb{R}$'],
            ['$\\frac{1}{x}$', '$-\\frac{1}{x^2}$', '$x \\neq 0$'],
            ['$\\frac{1}{x^n}$', '$-\\frac{n}{x^{n+1}}$', '$x \\neq 0$'],
            ['$\\sqrt{x}$', '$\\frac{1}{2\\sqrt{x}}$', '$x > 0$'],
            ['$\\cos(x)$', '$-\\sin(x)$', '$x \\in \\mathbb{R}$'],
            ['$\\sin(x)$', '$\\cos(x)$', '$x \\in \\mathbb{R}$'],
            ['$\\tan(x)$', '$1 + \\tan^2(x) = \\frac{1}{\\cos^2(x)}$', '$x \\neq \\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}$'],
            ['$e^x$', '$e^x$', '$x \\in \\mathbb{R}$'],
            ['$\\ln(x)$', '$\\frac{1}{x}$', '$x > 0$'],
            ['$a^x$ ($a > 0, a \\neq 1$)', '$a^x \\ln(a)$', '$x \\in \\mathbb{R}$'],
            ['$x^r$ ($r \\in \\mathbb{Q}$)', '$rx^{r-1}$', '$x > 0$'],
          ],
        },
        {
          type: 'table',
          id: 'b32-table-annexe-a-2',
          titre: '2. Les Opérations sur les Dérivées',
          headers: ['Opération globale', 'Formule de dérivation'],
          rows: [
            ['La Somme', '$(u + v)\' = u\' + v\'$'],
            ['Le Produit par un réel', '$(k \\cdot u)\' = k \\cdot u\'$'],
            ['Le Produit de deux fonctions', '$(uv)\' = u\'v + uv\'$'],
            ['L\'Inverse d\'une fonction', '$(\\frac{1}{v})\' = -\\frac{v\'}{v^2}$'],
            ['Le Quotient (Division)', '$(\\frac{u}{v})\' = \\frac{u\'v - uv\'}{v^2}$'],
            ['La Composée générale', '$(v \\circ u)\' = (v\' \\circ u) \\cdot u\'$'],
          ],
        },
        {
          type: 'table',
          id: 'b33-table-annexe-a-3',
          titre: '3. Les Fonctions Composées Courantes',
          headers: ['Structure composée', 'Formule dérivée avec u\''],
          rows: [
            ['$(u)^n$', '$n \\cdot u\' \\cdot u^{n-1}$'],
            ['$\\sqrt{u}$', '$\\frac{u\'}{2\\sqrt{u}}$  (avec $u > 0$)'],
            ['$e^u$', '$u\' \\cdot e^u$'],
            ['$\\ln(u)$', '$\\frac{u\'}{u}$  (avec $u > 0$)'],
            ['$\\cos(u)$', '$-u\' \\cdot \\sin(u)$'],
            ['$\\sin(u)$', '$u\' \\cdot \\cos(u)$'],
          ],
        },
        {
          type: 'text',
          id: 'b34-transition',
          contenu: 'Passons à l\'Annexe B pour observer le recueil noir des fautes de calcul : le Cimetière des Points.',
        },
      ],
    },
    {
      id: 's8',
      titre: 'ANNEXE B : Les 10 Erreurs les Plus Fréquentes',
      blocs: [
        {
          type: 'text',
          id: 'b35-accroche',
          contenu: 'Voici le recueil des fautes qui font pleurer les correcteurs du BAC chaque année. Lis-les attentivement pour ne jamais tomber dans ces pièges.',
        },
        {
          type: 'table',
          id: 'b36-table-annexe-b',
          titre: 'Le Cimetière des Points — Les 10 erreurs classiques',
          headers: ['#', 'Erreur classique ❌', 'Bonne méthode ✅'],
          rows: [
            ['1', 'Dériver $f(x) = \\frac{2x}{x+1}$ en écrivant $\\frac{(2x)\'}{(x+1)\'} = \\frac{2}{1} = 2$.', 'La dérivée d\'une division n\'est PAS la division des dérivées ! Applique toujours : $\\frac{u\'v - uv\'}{v^2}$ (*le signe sera inversé sinon*).'],
            ['2', 'Dériver $e^{3x^2}$ en écrivant simplement $e^{3x^2}$.', 'N\'oublie jamais le u\' devant ! La dérivée de $e^u$ est $u\'e^u$. La réponse correcte est $6x \\cdot e^{3x^2}$.'],
            ['3', 'Pour calculer $f\'(2)$ avec $f(x)=x^3$, remplacer d\'abord $f(2)=8$, puis dériver 8 ce qui donne 0.', 'On dérive d\'abord la fonction avec les x ($f\'(x) = 3x^2$), et ENSUITE seulement on remplace x par 2 : $f\'(2) = 3(2)^2 = 12$.'],
            ['4', 'Trouver $f\'(x)=0$ en $x=1$ et affirmer directement : \"il y a un extremum en 1\".', 'Il faut obligatoirement vérifier que la dérivée change de signe (de + à − ou de − à +) en s\'annulant. Sinon, c\'est un simple palier.'],
            ['5', 'Dans le calcul du numérateur de quotient, développer $-(2x + 5)$ en $-2x + 5$.', 'Le signe moins devant une parenthèse change TOUS les signes intérieurs : $-(2x + 5) = -2x - 5$.'],
            ['6', 'Tracer un tableau avec juste les signes + / − et des flèches qui flottent vides.', 'Un tableau n\'est valide que si tu reportes les limites aux bornes et les images exactes calculées $f(x)$ pour les sommets.'],
            ['7', 'Après avoir trouvé $f\'(x) = \\frac{3}{(x-2)^2}$, développer le bas en $x^2 - 4x + 4$.', 'Ne développe JAMAIS un dénominateur au carré ! Garde-le sous la forme $(v)^2$. Un carré est positif, ce qui facilite la lecture du signe.'],
            ['8', 'Dériver $\\sqrt{x^2+1}$ en écrivant $\\frac{1}{2\\sqrt{x^2+1}}$.', 'C\'est une composée $\\sqrt{u}$ ! Il faut le u\' au numérateur. Réponse correcte : $\\frac{2x}{2\\sqrt{x^2+1}} = \\frac{x}{\\sqrt{x^2+1}}$.'],
            ['9', 'Dériver $f(x) = \\ln(2)$ en écrivant $f\'(x) = \\frac{1}{2}$.', '$\\ln(2)$, $e^3$ ou $\\pi$ sont des nombres constants. Leur dérivée est TOUJOURS strictement égale à 0.'],
            ['10', 'Écrire l\'équation de la tangente sous la forme $y = f(a)(x - a) + f\'(a)$.', 'La pente est $f\'(a)$, elle doit être collée au $(x-a)$. La bonne formule est : $y = f\'(a)(x - a) + f(a)$.'],
          ],
        },
        {
          type: 'text',
          id: 'b37-transition',
          contenu: 'Les pièges sont démasqués. Ouvrons l\'organigramme de décision rapide : ton GPS Mental pour savoir quelle formule sortir au brouillon.',
        },
      ],
    },
    {
      id: 's9',
      titre: 'ANNEXE C : Méthode Rapide (GPS Mental de Décision)',
      blocs: [
        {
          type: 'text',
          id: 'b38-accroche',
          contenu: 'Ton cerveau s\'embrouille avec le stress de l\'examen ? Utilise cet algorithme de décision. Pose-toi ces questions exactes dans cet ordre.',
        },
        {
          type: 'table',
          id: 'b39-table-annexe-c',
          titre: 'GPS Mental — Quelle est la forme globale de ta fonction ?',
          headers: ['Sous-question de diagnostic', 'Réponse observée', 'Ce que tu fais immédiatement'],
          rows: [
            ['*Est-ce une somme ou soustraction de blocs simples ?* ex: $x^3 - 4x + 5$', '**OUI**', '① Calme-toi, c\'est le cas facile.\n② Dérive chaque bloc séparément, un par un.\n③ Les constantes isolées deviennent 0.'],
            ['*Est-ce un nombre constant collé à une fonction ?* ex: $5\\ln(x)$ ou $\\frac{1}{3}x^3$', '**OUI**', '① Ne fais pas la règle du produit uv.\n② Garde le nombre en spectateur à sa place.\n③ Dérive uniquement la partie contenant la variable x.'],
            ['*Est-ce un produit de deux blocs contenant des x ?* ex: $(2x+1)e^x$', '**OUI**', '① Danger ! N\'écris jamais u\' × v\'.\n② Pose tes briques u, v, u\', v\' au brouillon.\n③ Applique la formule croisée : $u\'v + uv\'$.\n④ Si c\'est avec $e^x$, factorise-la à la fin.'],
            ['*Est-ce une fraction avec des x en haut et en bas ?* ex: $\\frac{3x-1}{x+2}$', '**OUI**', '① Alerte rouge, risque d\'erreur de signes.\n② Pose tes briques et prépare ta grande barre de fraction.\n③ Formule : $\\frac{u\'v - uv\'}{v^2}$.\n④ Commence par dériver le haut. Ne développe jamais le bas !'],
            ['*Est-ce une fonction emboîtée dans une autre ?* ex: $(4x+5)^3$ ou $\\ln(x^2+1)$', '**OUI**', '① Règle de la chaîne, règle du \"bébé\".\n② Identifie l\'expression intérieure u and calcule u\'.\n③ Multiplie ta formule usuelle par ce u\' (ex: $(\\ln u)\' = \\frac{u\'}{u}$).'],
          ],
        },
        {
          type: 'text',
          id: 'b40-transition',
          contenu: 'Le GPS Mental est configuré. Découvrons la dernière section : les ultimes conseils de vieux père pour le jour J.',
        },
      ],
    },
    {
      id: 's10',
      titre: 'ANNEXE D : Conseils de Dernière Minute du Vieux Père',
      blocs: [
        {
          type: 'text',
          id: 'b41-accroche',
          contenu: 'Dernière ligne droite, champion(ne). Installe-toi confortablement sous l\'apatam, voici les 5 commandements de vie pour aborder l\'épreuve avec la confiance du Major.',
        },
        {
          type: 'recap',
          id: 'b42-annexe-d-recueil',
          titre: '🚀 Les 5 Conseils de Survie d\'un Caïman d\'Abidjan',
          contenu: [
            '⚡ 1. Le \"Vidage de Cerveau\" : Dès que tu t\'assois et qu\'on te distribue ton brouillon, n\'attends pas le sujet. Écris immédiatement dans un coin tes formules compliquées (quotients, composées, tangentes) pour libérer de la mémoire vive dans ton esprit.',
            '⚡ 2. La Vérification du Bon Sens : Les mathématiques sont logiques. Si ta dérivée est positive mais que tes flèches de limites descendent de +inf à -inf... STOP ! Il y a un bug. Si la dérivée est positive, la courbe monte obligatoire !',
            '⚡ 3. La Règle des 5 Minutes : Bloqué sur une factorisation de signe depuis plus de 5 minutes ? Utilise le Bouton Pause. Regarde la question suivante qui te donne souvent la réponse (\"En déduire que f est croissante\"). Écris : \"Admettons ce résultat\", place ta flèche et rafle la suite des points !',
            '⚡ 4. Soigne ta Rédaction Littérale : Le BAC n\'est pas qu\'une suite de calculs froids. Les correcteurs adorent les phrases justificatives. Écris : \"La fonction f est rationnelle, elle est donc dérivable sur son domaine. Posons u = ...\". C\'est du miel pour sa notation !',
            '⚡ 5. La Veille du BAC : À 18h, on ferme les cahiers ! Ne cherche pas à apprendre un nouveau chapitre de toute l\'année à la dernière minute. Relis juste ton Annexe B et C, mange bien, hydrate-toi et dors 8 heures. Ton cerveau a besoin de lucidité pour éviter les fautes de signes idiotes.',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      type: 'quiz',
      id: 't2-c7-q1',
      question: 'Selon la check-list EDUCTOME, quelle est l\'erreur n°1 à éviter en dérivant un quotient u/v ?',
      options: [
        'Oublier de simplifier la fraction',
        'Dériver en écrivant simplement u\'/v\'',
        'Oublier le carré au dénominateur',
        'Développer le dénominateur au carré'
      ],
      bonneReponse: 1,
      explication: 'C\'est le Piège à Éviter n°1 ! La dérivée d\'un quotient n\'est JAMAIS le quotient des dérivées. Il faut appliquer la formule longue (u\'v - uv\')/v².',
    },
    {
      type: 'quiz',
      id: 't2-c7-q2',
      question: 'Le jour de l\'examen, si tu bloques depuis plus de 5 minutes sur la factorisation de la dérivée pour trouver son signe, que dois-tu faire ?',
      options: [
        'Insister jusqu\'à trouver, même si ça prend 30 minutes',
        'Rendre copie blanche pour cette partie',
        'Utiliser le \"Bouton Pause\" et lire la question suivante qui donne souvent la réponse pour continuer le tableau',
        'Inventer un signe au hasard'
      ],
      bonneReponse: 2,
      explication: 'C\'est la stratégie de \"l\'Inspecteur\". Souvent, la question d\'après dit \"En déduire que f est croissante sur...\" ce qui te donne le signe de la dérivée (+). Tu peux donc admettre le résultat et continuer l\'exercice sans perdre tous les points.',
    },
    {
      type: 'quiz',
      id: 't2-c7-q3',
      question: 'Comment dérive-t-on correctement la fonction composée e^(3x²) ?',
      options: [
        'On écrit juste e^(3x²)',
        'On applique la règle de la chaîne avec le u\' : 6x * e^(3x²)',
        'On descend l\'exposant : 3x² * e^(3x²-1)',
        'On utilise (u/v)'
      ],
      bonneReponse: 1,
      explication: 'C\'est le Piège n°2. Il ne faut jamais oublier de multiplier par la dérivée de l\'expression en exposant (le fameux \"bébé\"). La dérivée de e^u est u\'e^u.',
    },
    {
      type: 'quiz',
      id: 't2-c7-q4',
      question: 'Dans ton tableau de variations complet, que manque-t-il si tu as juste mis les signes et des flèches ?',
      options: [
        'La couleur',
        'L\'équation de la tangente',
        'Les limites aux infinis et les images exactes (hauteurs) au bout des flèches',
        'La justification du domaine'
      ],
      bonneReponse: 2,
      explication: 'Le Piège n°4 explique qu\'un tableau nu avec juste des flèches flottantes perd des points. Il faut inscrire les limites et les extremums calculés aux extrémités des flèches.',
    },
    {
      type: 'quiz',
      id: 't2-c7-q5',
      question: 'Quel est le \"Vidage de Cerveau\" recommandé dès la distribution du brouillon ?',
      options: [
        'Fermer les yeux et dormir 5 minutes',
        'Dessiner pour se détendre',
        'Écrire immédiatement dans un coin du brouillon les formules complexes (quotients, tangentes) pour libérer la mémoire',
        'Lire le sujet 10 fois sans rien écrire'
      ],
      bonneReponse: 2,
      explication: 'C\'est le Conseil de Survie n°1. Vider ton cerveau des formules sur le brouillon avant même de lire le sujet t\'évite de douter de tes formules plus tard quand le stress monte.',
    }
  ],
};

