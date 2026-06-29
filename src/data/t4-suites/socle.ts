import { Chapitre } from '../../types/course';

export const chapitreSocle: Chapitre = {
  id: 't4-socle',
  titre: `Le Socle — Les 6 Outils de Sécurité`,
  duree: 14,
  niveau: 'BASE',
  xpGain: 15,
  gratuit: true,
  sections: [
    {
      id: 's1',
      titre: `Le Socle : les six outils de sécurité`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg-introa',
          pf: `Grand Frère, avant qu'on attaque les gros morceaux du Tome 4, il faut quoi dans mon sac à dos ? J'ai peur de mélanger les anciennes notions de Première et de Terminale.`,
        },
        {
          type: 'dialogue',
          id: 'dlg-introb',
          gf: `Assieds-toi, Champion(ne). Respire un bon coup. Pour dompter les suites numériques et t'assurer une copie propre au BAC, on n'a pas besoin de vider toute la bibliothèque. Il nous faut réveiller six réflexes précis. Quand on révisait ça au Lycée Classique d'Abidjan, on appelait ça « nettoyer ses armes ». On passe ces six outils en revue tout de suite — après, plus aucune excuse.`,
        },
      ],
    },
    {
      id: 's-o1',
      titre: `🔧 Outil 1 — Les limites simples de suites`,
      blocs: [
        {
          type: 'text',
          id: 'b-o1',
          contenu: `Pour savoir où va une suite quand le nombre d'étapes devient infini, tu dois manipuler la limite lorsque $n$ tend vers $+\\infty$. Retiens bien : pour les suites, on cherche **uniquement** la limite en $+\\infty$, car l'indice $n$ est un entier naturel qui grandit sans fin.

Trois briques à connaître sur le bout des doigts :

- **La base des bases :** $\\displaystyle\\lim_{n\\to+\\infty} \\dfrac{1}{n} = 0$. Plus le dénominateur grandit, plus la fraction s'écrase vers zéro. Valable aussi pour $\\dfrac{1}{n^2}$, $\\dfrac{1}{n^3}$, $\\dfrac{1}{\\sqrt{n}}$.
- **Le comportement de $q^n$ :** si $|q| < 1$ (par exemple $q = 0,5$), alors $\\displaystyle\\lim_{n\\to+\\infty} q^n = 0$ ; si $q > 1$ (par exemple $q = 2$), alors $\\displaystyle\\lim_{n\\to+\\infty} q^n = +\\infty$.
- **La règle du terme dominant :** face à une fraction de polynômes en $n$, seuls les termes de plus haut degré dictent leur loi à l'infini.

**Exemple.** $\\displaystyle\\lim_{n\\to+\\infty} \\dfrac{3n^2+1}{n^2-2} = \\lim_{n\\to+\\infty} \\dfrac{3n^2}{n^2} = 3.$`,
        },
        {
          type: 'tip',
          id: 'tip-o1',
          titre: `Le réflexe du Grand Frère`,
          contenu: `Pour repérer le terme dominant, cherche l'exposant le plus grand en haut et en bas. C'est lui qui fait la loi ; le reste devient négligeable.`,
        },
      ],
    },
    {
      id: 's-o2',
      titre: `🔧 Outil 2 — Étudier le signe d'une expression`,
      blocs: [
        {
          type: 'text',
          id: 'b-o2',
          contenu: `Étudier les variations d'une suite, c'est savoir si elle grimpe ou si elle descend. Tu as deux méthodes ; choisis la bonne selon la forme de l'exercice.

- **La méthode universelle (la soustraction) :** tu calcules $u_{n+1} - u_n$. Si $u_{n+1} - u_n \\geq 0$, la suite est croissante ; si $u_{n+1} - u_n \\leq 0$, elle est décroissante.
- **La méthode du quotient :** si tous les termes sont strictement positifs, tu compares $\\dfrac{u_{n+1}}{u_n}$ à $1$. Si le quotient est $\\geq 1$, la suite est croissante ; s'il est $\\leq 1$, elle est décroissante.

**Exemple.** Soit $u_{n+1} - u_n = n^2 - n$ pour $n \\geq 1$. On factorise : $u_{n+1} - u_n = n(n-1)$. Pour $n \\geq 1$, $n > 0$ et $n-1 \\geq 0$, donc le produit est positif : la suite est **croissante**.`,
        },
        {
          type: 'warning',
          id: 'warn-o2',
          titre: `Le piège à éviter`,
          contenu: `Utiliser le quotient $\\dfrac{u_{n+1}}{u_n}$ exige **impérativement** que tous les termes soient strictement positifs. Si ta suite change de signe, cette méthode devient une erreur. Reste alors sur la soustraction.`,
        },
      ],
    },
    {
      id: 's-o3',
      titre: `🔧 Outil 3 — Le raisonnement par récurrence`,
      blocs: [
        {
          type: 'text',
          id: 'b-o3',
          contenu: `C'est l'outil de démonstration roi pour les suites en Terminale D. Pense à un **effet domino** : si le premier domino tombe, et que chaque domino qui tombe entraîne le suivant, alors tous tomberont. Pour une démonstration propre qui rapporte tous les points, respecte trois étapes.

- **Étape 1 — L'initialisation.** Tu prouves que la propriété est vraie au tout premier rang (souvent $n = 0$ ou $n = 1$).
- **Étape 2 — L'hérédité.** Tu supposes la propriété vraie à un rang $n$ fixé (c'est l'**hypothèse de récurrence**), et tu démontres qu'elle reste vraie au rang $n+1$.
- **Étape 3 — La conclusion.** Tu affirmes, par le principe de récurrence, qu'elle est vraie pour tout entier naturel $n$.

**Le squelette sur ta copie :**

**Initialisation.** Pour $n = 0$, on vérifie que la propriété est vraie.

**Hérédité.** Supposons la propriété vraie à un rang $n$ fixé. Montrons-la au rang $n+1$. [Calculs.] La propriété est héréditaire.

**Conclusion.** Par récurrence, la propriété est vraie pour tout entier naturel $n$.`,
        },
        {
          type: 'tip',
          id: 'tip-o3',
          titre: `Le réflexe du Grand Frère`,
          contenu: `L'hérédité doit **toujours** démarrer par l'écriture claire de ton hypothèse. Écris noir sur blanc : *« Supposons que la propriété est vraie au rang $n$. »* C'est la clé pour structurer ta pensée avant de lancer les calculs.`,
        },
      ],
    },
    {
      id: 's-o4',
      titre: `🔧 Outil 4 — Compter et sommer les termes`,
      blocs: [
        {
          type: 'text',
          id: 'b-o4',
          contenu: `Au BAC, la moitié des erreurs bêtes vient d'un mauvais comptage. Deux automatismes à graver :

- **Le nombre de termes** entre les indices $p$ et $n$ (inclus) est $n - p + 1$. De $u_0$ à $u_n$, cela fait donc $n+1$ termes, pas $n$.
- **Les sommes de référence :** $\\displaystyle 1 + 2 + 3 + \\cdots + n = \\dfrac{n(n+1)}{2}$.

**Exemple.** Combien de termes de $u_5$ à $u_{12}$ ? Réponse : $12 - 5 + 1 = 8$ termes. C'est exactement ce comptage qui sert dans les formules de sommes des Modules 2 et 3.`,
        },
        {
          type: 'warning',
          id: 'warn-o4',
          titre: `Le piège à éviter`,
          contenu: `Écrire « il y a $n$ termes de $u_0$ à $u_n$ » coûte un demi-point à chaque fois. Compte toujours $n - p + 1$ sur ton brouillon avant d'appliquer une formule de somme.`,
        },
      ],
    },
    {
      id: 's-o5',
      titre: `🔧 Outil 5 — La conjuguée pour lire un signe avec une racine`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg-o5a',
          pf: `Fréro, dès qu'il y a une racine carrée dans la différence $u_{n+1} - u_n$, je n'arrive plus à voir si c'est positif ou négatif…`,
        },
        {
          type: 'dialogue',
          id: 'dlg-o5b',
          gf: `Faut pas gnan, Champion(ne). L'expression conjuguée est ton arme. Elle transforme une soustraction de racines en une fraction dont le signe se lit d'un coup d'œil.`,
        },
        {
          type: 'text',
          id: 'b-o5',
          contenu: `Quand une différence contient une racine, multiplie par la quantité conjuguée pour faire disparaître la racine du numérateur :
$$\\sqrt{a} - \\sqrt{b} = \\dfrac{(\\sqrt{a}-\\sqrt{b})(\\sqrt{a}+\\sqrt{b})}{\\sqrt{a}+\\sqrt{b}} = \\dfrac{a - b}{\\sqrt{a}+\\sqrt{b}}.$$
Comme le dénominateur $\\sqrt{a}+\\sqrt{b}$ est toujours positif, le signe de la différence ne dépend plus que de celui de $a - b$ — bien plus facile à étudier.`,
        },
        {
          type: 'tip',
          id: 'tip-o5',
          titre: `Le réflexe du Grand Frère`,
          contenu: `Dès que tu vois une différence de racines dans une étude de variations, le mot « conjuguée » doit s'allumer dans ta tête. C'est un classique des suites récurrentes du Module 4.`,
        },
      ],
    },
    {
      id: 's-o6',
      titre: `🔧 Outil 6 — Lire une suite sur le graphique (la toile d'araignée)`,
      blocs: [
        {
          type: 'text',
          id: 'b-o6',
          contenu: `Pour une suite récurrente $u_{n+1} = f(u_n)$, le BAC ivoirien te demande souvent de **placer les premiers termes sur l'axe** à l'aide d'un graphique. La technique s'appuie sur deux courbes : celle de la fonction $f$ et la **droite $\\Delta : y = x$**.

Le principe, brique par brique : tu pars de $u_0$ sur l'axe des abscisses, tu montes verticalement jusqu'à la courbe de $f$ pour obtenir $u_1$ en hauteur, puis tu te déplaces horizontalement jusqu'à la droite $y = x$ pour ramener $u_1$ sur l'axe des abscisses. Tu recommences : la trajectoire dessine un escalier ou une spirale — c'est la **toile d'araignée**.`,
        },
        {
          type: 'tip',
          id: 'tip-o6',
          titre: `Le réflexe du Grand Frère`,
          contenu: `La droite $y = x$ est ton miroir : elle sert uniquement à reporter une valeur de l'axe vertical vers l'axe horizontal. Sans elle, impossible de relancer la machine. Garde toujours ce réflexe pour les constructions graphiques du Module 4.`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `🚀 Récap du Socle — Quel outil pour quel module ?`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-recap',
          headers: [`Outil réveillé ici`, `Tu en auras besoin dans…`],
          rows: [
            [`Outil 1 : Les limites simples de suites`, `M1, M2, M3, M4 — pour analyser la convergence et le comportement à l'infini.`],
            [`Outil 2 : Étudier le signe d'une expression`, `M1 et M2 — pour la monotonie et le sens de variation.`],
            [`Outil 3 : Le raisonnement par récurrence`, `M4 et M5 — pour démontrer encadrements et conjectures.`],
            [`Outil 4 : Compter et sommer les termes`, `M2 et M3 — pour les sommes de termes consécutifs sans erreur.`],
            [`Outil 5 : La conjuguée pour lire un signe`, `M4 — pour le sens de variation des suites avec racine carrée.`],
            [`Outil 6 : Lire une suite sur le graphique`, `M4 — pour placer les termes avec la toile d'araignée.`],
          ],
        },
        {
          type: 'text',
          id: 'b-fin',
          contenu: `Voilà, Champion(ne), tes six outils sont aiguisés. Range-les bien à portée de main : à partir d'ici, chaque module va piocher dedans. On démarre par le Module 1, les généralités sur les suites. Faut pas gnan, on avance ensemble.`,
        },
      ],
    },
  ],
};
