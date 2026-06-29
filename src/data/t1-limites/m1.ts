import { Chapitre } from '../../types/course';

export const chapitreM1: Chapitre = {
  id: 't1-m1',
  titre: `Module 1 — Le Concept de Base`,
  duree: 20,
  niveau: 'BASE',
  xpGain: 25,
  objectifs: [
    `Expliquer ce qu'est une limite à un ami en utilisant l'image du gbaka d'Adjamé Liberté`,
    `Énoncer la définition formelle d'une limite avec le vocabulaire exact du BAC`,
    `Calculer la limite d'un polynôme en un point par substitution directe`,
    `Calculer la limite d'une fraction rationnelle en un point sans te faire piéger`,
    `Faire disparaître le symbole « lim » au bon moment sur ta copie — sans exception`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, le prof a commencé le chapitre sur les limites ce matin. Il a rempli le tableau de flèches, de petits repères et de symboles bizarres. Mais au fond, pourquoi on s'embête avec ça ? Si j'ai une fonction, je remplace $x$ par le nombre et j'ai mon résultat, non ? À quoi ça sert d'inventer ce mot « limite » ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Assieds-toi, Champion(ne). Ta question est excellente — et c'est la bonne porte d'entrée. Si la route mathématique était toujours lisse et goudronnée, tu aurais raison : on remplacerait et on passerait à autre chose. Mais en Terminale D, tu vas croiser des fonctions bizarres. Des fonctions avec des valeurs interdites, des divisions par zéro masquées, des cassures nettes. Si je te demande ce qui se passe juste à l'endroit précis où la fonction n'a pas le droit d'exister, ta calculatrice va crier « Erreur ». La limite, c'est l'outil qu'on a inventé pour contourner ce blocage. Elle ne te demande pas ce qui se passe **sur** le trou — elle te montre **où la courbe se dirige** quand elle s'en approche.`,
        },
      ],
    },
    {
      id: 's2',
      titre: `② LE RÉEL`,
      blocs: [
        {
          type: 'text',
          id: 'b3',
          contenu: `Oublie les symboles deux minutes. Pose ton stylo, imagine la scène.

Tu montes dans un gbaka à Yopougon, direction Adjamé Liberté. Le chauffeur roule, tu t'approches du carrefour. Ta destination est claire — tout le monde dans le véhicule sait où le gbaka va atterrir.

Maintenant, imagine qu'à dix mètres de la gare d'arrivée, il y a une énorme crevasse au milieu de la chaussée. Ou un blocus total. Le gbaka s'arrête net. Impossible d'aller poser les pneus sur le goudron de la gare.

**Question :** est-ce que ce blocage imprévu change le fait que, pendant tout le voyage, vous visiez précisément Adjamé Liberté ? Non. Votre destination théorique reste inchangée.

En maths, la limite c'est exactement ça : **la destination que la courbe cherche à atteindre, peu importe si la route est coupée ou interdite juste à l'arrivée**.`,
        },
      ],
    },
    {
      id: 's3',
      titre: `③ LE PONT`,
      blocs: [
        {
          type: 'text',
          id: 'b4',
          contenu: `Maintenant, mot pour mot, du quartier vers les maths. Collons les vraies lettres du cours sur notre trajet en gbaka :

- Le gbaka, c'est notre $x$ — la variable qui se déplace.
- La trajectoire du gbaka sur la route, c'est l'expression de ta fonction $f(x)$.
- Le carrefour dont tu te rapproches de plus en plus sans forcément l'atteindre, c'est la valeur $a$ vers laquelle la variable $x$ tend.
- Et la gare d'arrivée que tout le monde visait à travers le pare-brise, c'est le nombre $L$, qu'on appelle la limite.

Résumons cette traduction dans un tableau, pour que tu aies la correspondance complète sous les yeux :`,
        },
        {
          type: 'table',
          id: 'tbl5',
          headers: [`Scène du quartier`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Le gbaka qui roule sur la route`, `$x$`, `La variable qui se déplace vers sa cible`],
            [`La trajectoire du gbaka`, `$f(x)$`, `L'expression de ta fonction`],
            [`Le carrefour dont tu t'approches`, `$a$`, `La valeur vers laquelle $x$ tend`],
            [`La gare d'arrivée visée par tout le véhicule`, `$L$`, `La limite — la destination de la courbe`],
            [`La crevasse ou le blocus sur la route`, `Valeur interdite`, `Le point où la fonction n'est pas définie`],
          ],
        },
        {
          type: 'text',
          id: 'b6',
          contenu: `Quand on écrit $\\displaystyle\\lim_{x \\to a} f(x) = L$, on dit simplement : « Quand $x$ s'approche très près du nombre $a$, la courbe de la fonction $f$ se dirige tout droit vers la hauteur $L$. » Tu vois le principe — on s'intéresse à la destination visée, pas au point d'impact final.`,
        },
        {
          type: 'figure',
          id: 'fig9',
          src: '/images/t1/fig_M1_1.png',
          legende: `La limite $L$ : la destination visée par la courbe quand $x\\to a$.`,
          alt: `La limite $L$ : la destination visée par la courbe quand $x\\to a$.`,
        },
      ],
    },
    {
      id: 's4',
      titre: `④ LA RÈGLE`,
      blocs: [
        {
          type: 'rule',
          id: 'rule7',
          titre: `Règle`,
          contenu: `Soit $f$ une fonction usuelle (polynôme, fonction rationnelle, racine carrée, logarithme ou exponentielle) définie sur un intervalle contenant le réel $a$.

Si la fonction est définie en $a$, alors la limite et la valeur en ce point coïncident. On dit que la limite s'obtient par **substitution directe** :

$$\\lim_{x \\to a} f(x) = f(a)$$

Autrement dit : quand la route est dégagée et qu'il n'y a aucun piège au carrefour, pour trouver la limite, il te suffit de remplacer la lettre $x$ par le réel $a$ dans la formule.

Devant ta feuille de devoir, dès que tu lis la consigne « Calculer la limite de $f(x)$ quand $x$ tend vers un réel $a$ », ton premier geste doit être un réflexe : tu remplaces tous les $x$ par ce nombre, sur ton brouillon, pour tester si la voie est libre. C'est le point de départ de tout problème d'analyse.`,
        },
      ],
    },
    {
      id: 's5',
      titre: `⑤ LA DESCENTE`,
      blocs: [
        {
          type: 'table',
          id: 'tbl8',
          headers: [`Si tu vois…`, `Ce que tu fais`],
          rows: [
            [`Une limite en un réel $a$ pour un polynôme`, `Pas de dénominateur, pas de risque. Remplace directement $x$ par $a$ partout dans l'expression.`],
            [`Une limite en un réel $a$ pour une fraction rationnelle`, `Calcule d'abord la valeur du dénominateur en $a$. Si elle est non nulle, remplace $x$ par $a$ directement.`],
            [`Pour une fraction : le dénominateur vaut zéro en $a$`, `La route est bloquée. Tu percutes une forme indéterminée $\\\\frac{0}{0}$ — c'est l'enjeu du Module 2.`],
          ],
        },
        {
          type: 'figure',
          id: 'fig-m1-3',
          src: '/images/t1/fig_M1_3.png',
          legende: `Route libre (substitution directe) vs route bloquée (forme indéterminée).`,
          alt: `Route libre (substitution directe) vs route bloquée (forme indéterminée).`,
        },
        {
          type: 'text',
          id: 'b10',
          contenu: `**Procédure pas à pas :**

1. Écris l'expression de la limite complète, telle qu'elle apparaît dans le sujet.

2. **Si ta fonction est une fraction** : avant de tout remplacer, calcule la valeur du dénominateur au point $a$ sur ton brouillon. Si cette valeur est non nulle, la route est libre — passe à l'étape suivante. Si elle est nulle, arrête-toi : c'est le signal d'une forme indéterminée.

3. Bascule dans la phase de calcul : remplace chaque $x$ par la valeur de $a$. Si $a$ est négatif, emballe-le **obligatoirement** dans des parenthèses.

4. Supprime le symbole $\\displaystyle\\lim_{x \\to a}$ à la seconde exacte où les lettres $x$ disparaissent pour laisser la place aux chiffres.

5. Calcule la valeur finale en respectant l'ordre des priorités : d'abord les puissances, puis les multiplications, enfin les additions et soustractions.

Prends deux secondes pour relire ta ligne de calcul avant de sauter sur la question suivante. Vérifie que le mot « lim » n'est pas resté accroché devant tes chiffres et que tu n'as pas confondu les priorités.

Tu connais la scène classique en classe : le prof termine son exemple simple au tableau, tout le monde recopie machinalement en pensant « c'est cadeau », et au devoir, la moitié de la classe se fait sanctionner sur la notation ou un signe moins mal géré. Toi, tu vas sécuriser ces points facilement.`,
        },
        {
          type: 'tip',
          id: 'tip11',
          titre: `Conseil`,
          contenu: `Devant un polynôme ou une fraction bienveillante, commence toujours par la solution la plus directe. Remplacer $x$ par sa valeur ne prend que quelques secondes au brouillon. Si le dénominateur ne s'annule pas, tu as fini. Ne va jamais inventer des factorisations compliquées quand la porte est grande ouverte.`,
        },
        {
          type: 'warning',
          id: 'warn12',
          titre: `Piège à éviter`,
          contenu: `Garder le symbole $\\displaystyle\\lim_{x \\to a}$ écrit alors que tu as déjà remplacé la lettre $x$ par sa valeur. C'est un contresens lourd. Le symbole « lim » exprime un mouvement, une recherche de destination pour une variable. Dès que les chiffres remplacent les lettres, le mouvement est terminé.

- **Faux :** $\\displaystyle\\lim_{x \\to 3} (x^2 + 2) = \\lim_{x \\to 3} (3^2 + 2) = 11$
- **Vrai :** $\\displaystyle\\lim_{x \\to 3} (x^2 + 2) = 3^2 + 2 = 11$`,
        },
        {
          type: 'warning',
          id: 'warn13',
          titre: `Piège à éviter`,
          contenu: `Si $x$ tend vers $-2$, le calcul de $5x^2$ impose d'abord le carré, puis la multiplication. Tu dois écrire $5(-2)^2 = 5 \\times 4 = 20$. Si tu oublies les parenthèses ou si tu multiplies le $5$ par $-2$ avant d'élever au carré, le calcul s'effondre.`,
        },
      ],
    },
    {
      id: 's-bac-5',
      titre: `📘 LANGAGE OFFICIEL DU BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b14',
          contenu: `Champion(ne), l'analogie du gbaka t'a donné l'intuition. Maintenant, ta copie doit parler le langage rigoureux des mathématiques. Voici la traduction officielle, celle que le correcteur attend.

**Définition formelle.** Soit $f$ une fonction, $a$ un réel et $L$ un réel. On dit que $f$ admet $L$ pour limite en $a$, et on écrit :

$$\\lim_{x \\to a} f(x) = L$$

lorsque les valeurs de $f(x)$ peuvent être rendues **aussi proches que l'on veut de $L$**, à condition de choisir $x$ **suffisamment proche de $a$** (sans nécessairement être égal à $a$).

**En langage courant.** Peu importe à quel point tu veux que $f(x)$ soit proche de $L$, tu peux toujours trouver un $x$ suffisamment proche de $a$ pour y arriver. C'est ça, le mot « limite ».`,
        },
        {
          type: 'warning',
          id: 'warn15',
          titre: `Piège à éviter`,
          contenu: `- **Limite finie** : la destination est un réel $L$ (un nombre concret).
- **Limite infinie** : la destination est $+\\infty$ ou $-\\infty$.
- **Limite à gauche** : $\\displaystyle\\lim_{x \\to a^-} f(x)$ — le gbaka arrive par la gauche du carrefour ($x < a$).
- **Limite à droite** : $\\displaystyle\\lim_{x \\to a^+} f(x)$ — le gbaka arrive par la droite du carrefour ($x > a$).

Retiens ces quatre formulations. Dès que tu rédiges une limite au BAC, le correcteur vérifie que tu utilises ce vocabulaire exact, ni plus ni moins.`,
        },
        {
          type: 'figure',
          id: 'fig-m1-2',
          src: '/images/t1/fig_M1_2.png',
          legende: `Limite à gauche et limite à droite convergent vers $(a\\,;\\,L)$.`,
          alt: `Limite à gauche et limite à droite convergent vers $(a\\,;\\,L)$.`,
        },
      ],
    },
    {
      id: 's-exo-6',
      titre: `Exercices-Types`,
      blocs: [
        {
          type: 'exercise',
          id: 'exo16',
          niveau: 'BASE',
          enonce: `Calculer la limite suivante : $\\displaystyle\\lim_{x \\to 2} (x^2 - 3x + 7)$.`,
          etapes: [
          ],
          reponse: `$5$`,
        },
        {
          type: 'exercise',
          id: 'exo17',
          niveau: 'BASE',
          enonce: `Calculer la limite suivante : $\\displaystyle\\lim_{x \\to 1} \\dfrac{3x - 1}{x + 1}$.`,
          etapes: [
          ],
          reponse: `$1$. Le dénominateur vaut $1 + 1 = 2 \\neq 0$ en $x = 1$ : route libre, substitution directe.`,
        },
      ],
    },
    {
      id: 's-recap-7',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap18',
          titre: `À retenir`,
          contenu: [
            `Une limite, c'est la **destination visée** par la courbe quand la variable $x$ s'approche d'un point $a$ — même si elle n'atteint jamais ce point, comme le gbaka d'Adjamé qui sait où il va avant d'être arrivé.`,
            `📘 Vocabulaire officiel à maîtriser : limite finie, limite infinie, limite à gauche, limite à droite, substitution directe.`,
            `Pour un **polynôme**, la route est toujours libre : la limite en $a$ s'obtient en remplaçant directement $x$ par $a$.`,
            `Pour une **fraction rationnelle**, un seul réflexe avant de remplacer : teste la valeur du dénominateur en $a$. S'il est non nul, substitution directe ; s'il s'annule, tu percutes une forme indéterminée.`,
            `Le symbole $\\displaystyle\\lim_{x \\to a}$ disparaît à la seconde exacte où les lettres $x$ deviennent des chiffres — jamais avant, jamais après.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil19',
          titre: `Fil rouge`,
          contenu: `Tu sais maintenant lire une destination quand la route est libre. Mais que se passe-t-il le jour où, sur une fraction, le dénominateur s'annule pile au point visé ? Le test direct te renvoie alors un message d'alarme : $\\dfrac{0}{0}$. Ni la calculatrice ni la substitution ne savent trancher. Ce mur, c'est la **forme indéterminée** — et apprendre à le contourner par une déviation propre, c'est tout l'enjeu du **Module 2**.`,
        },
      ],
    },
    {
      id: 's-eval-8',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval20',
          titre: `Auto-évaluation`,
          contenu: [
            `Je sais expliquer avec mes propres mots ce qu'est une limite : la destination visée par la courbe quand $x$ s'approche d'un point.`,
            `Je calcule sans hésiter la limite d'un polynôme en un point en remplaçant directement $x$ par sa valeur.`,
            `Sur une fraction, je teste toujours le dénominateur au point d'intérêt avant de remplacer $x$.`,
            `Je n'oublie jamais d'enlever le symbole « lim » au moment où je remplace $x$, et je protège les nombres négatifs avec des parenthèses.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score21',
          titre: `Ton score`,
          contenu: [
            `🟢 **4/4** → Tes bases sont solides et propres — tu as le feu vert pour attaquer le Module 2.`,
            `🟡 **2 ou 3** → Relis ⑤ La Descente, puis refais l'Exercice-Type 2 sur ton brouillon sans regarder la solution.`,
            `🔴 **0 ou 1** → Pas de panique, faut pas gnan. Reprends l'image du gbaka d'Adjamé au ① Le Besoin et avance case par case.`,
          ],
        },
      ],
    },
  ],
};
