import { Chapitre } from '../../types/course';

export const chapitreSocle: Chapitre = {
  id: 't7-socle',
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
          pf: `Grand Frère, le prof a dit qu'avant de faire les probabilités, on doit réviser les ensembles de Seconde, les pourcentages et les factorielles. C'est quoi encore cette affaire ? Je croyais qu'on allait juste lancer des dés et tirer des boules.`,
        },
        {
          type: 'dialogue',
          id: 'dlg-introb',
          gf: `Faut pas gnan, Champion(ne). Lancer les dés, c'est le résultat visible. Mais pour calculer tes chances sans te tromper, il te faut des fondations solides. Tu ne peux pas construire un immeuble au Plateau sans avoir creusé les bases, ou bien ? Allez, Champion(ne), on dépoussière la boîte à outils. Six outils précis, et ça va aller très vite. Au Cacao, on appelait ça « nettoyer ses armes » avant le combat.`,
        },
      ],
    },
    {
      id: 's-o1',
      titre: `🔧 Outil 1 — Fractions, pourcentages et proportions`,
      blocs: [
        {
          type: 'text',
          id: 'b-o1',
          contenu: `En probabilités, une chance s'écrit presque toujours sous forme de **fraction** ou de **pourcentage**. Les deux disent la même chose : $\\dfrac{1}{4} = 0{,}25 = 25\\,\\%$. Quand un énoncé dit « $60\\,\\%$ des élèves jouent d'un instrument à corde », tu traduis immédiatement par $P(C) = 0{,}60 = \\dfrac{60}{100} = \\dfrac{3}{5}$.

**Le réflexe fraction irréductible.** $\\dfrac{15}{56}$ ne se simplifie pas, mais $\\dfrac{20}{56}$ devient $\\dfrac{5}{14}$ : on divise le haut et le bas par le même nombre ($4$). Le correcteur attend toujours la fraction la plus réduite possible.`,
        },
        {
          type: 'tip',
          id: 'tip-o1',
          titre: `Le réflexe du Grand Frère`,
          contenu: `« Prendre un pourcentage d'un pourcentage », c'est multiplier. $30\\,\\%$ de $60\\,\\%$, c'est $0{,}30 \\times 0{,}60 = 0{,}18$. Ce geste, tu le réutilises sur **chaque branche d'arbre pondéré** au Module 3.`,
        },
      ],
    },
    {
      id: 's-o2',
      titre: `🔧 Outil 2 — Puissances et factorielles`,
      blocs: [
        {
          type: 'text',
          id: 'b-o2',
          contenu: `Une **puissance** $a^n$, c'est $a$ multiplié par lui-même $n$ fois : $0{,}8^3 = 0{,}8 \\times 0{,}8 \\times 0{,}8 = 0{,}512$. Attention aux deux cas qui sauvent des points : $a^0 = 1$ (tout nombre à la puissance zéro vaut $1$) et $a^1 = a$.

La **factorielle** $n!$ se lit « factorielle $n$ » : on multiplie tous les entiers de $n$ jusqu'à $1$.
$$5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120, \\qquad \\text{et par convention} \\qquad 0! = 1.$$`,
        },
        {
          type: 'warning',
          id: 'warn-o2',
          titre: `Le piège à éviter`,
          contenu: `N'essaie jamais de calculer une grosse factorielle en entier pour ensuite diviser. La ruse, c'est de **simplifier avant** : dans $\\dfrac{6!}{4!}$, on écrit $\\dfrac{6 \\times 5 \\times 4!}{4!} = 6 \\times 5 = 30$. On barre le $4!$ commun.`,
        },
        {
          type: 'tip',
          id: 'tip-o2',
          titre: `Le réflexe du Grand Frère`,
          contenu: `Les factorielles sont le moteur du **dénombrement** (Module 1), et les puissances sont le cœur de la **loi binomiale** (Module 5). Garde ta calculatrice prête : repère la touche $x!$ et la touche puissance.`,
        },
      ],
    },
    {
      id: 's-o3',
      titre: `🔧 Outil 3 — Les ensembles et les diagrammes de Venn`,
      blocs: [
        {
          type: 'text',
          id: 'b-o3',
          contenu: `Avant de calculer, tu dois savoir lire le français mathématique du hasard. On joue avec des ensembles qu'on appelle des **événements**.

- **L'intersection (le « ET »)** : notée $A \\cap B$. Les deux événements se réalisent *en même temps*.
- **La réunion (le « OU »)** : notée $A \\cup B$. Au moins l'un des deux se réalise (soit $A$, soit $B$, soit les deux).
- **L'événement contraire (le « NON »)** : noté $\\overline{A}$. C'est quand $A$ ne se réalise pas.

On dessine tout ça avec un **diagramme de Venn** : deux ronds qui se chevauchent dans un rectangle (l'univers). La zone commune, c'est $A \\cap B$. Tout ce qui est couvert par au moins un rond, c'est $A \\cup B$. Tout ce qui est hors du rond $A$, c'est $\\overline{A}$.`,
        },
        {
          type: 'tip',
          id: 'tip-o3',
          titre: `Le réflexe du Grand Frère`,
          contenu: `Deux événements sont **incompatibles** quand leurs ronds ne se touchent pas du tout : $A \\cap B = \\varnothing$. Cette image, garde-la : on la formalise au Module 2, et on la distingue de l'indépendance au Module 3.`,
        },
      ],
    },
    {
      id: 's-o4',
      titre: `🔧 Outil 4 — Le symbole somme Sigma`,
      blocs: [
        {
          type: 'text',
          id: 'b-o4',
          contenu: `Le symbole $\\sum$ (la lettre grecque sigma) veut juste dire « additionne-moi tout ça ». Quand tu lis $\\displaystyle\\sum_{i=1}^{n} p_i$, ça signifie « fais la somme de tous les $p_i$, de $p_1$ jusqu'à $p_n$ ».

Le geste vraiment utile en probabilités, c'est la **somme des produits** $\\displaystyle\\sum x_i\\, p_i$ : tu prends chaque colonne d'un tableau, tu multiplies le haut $x_i$ par le bas $p_i$, et tu additionnes tous les résultats.

**Exemple.** Pour $x_i$ valant $-5$ puis $10$, et $p_i$ valant $0{,}2$ puis $0{,}8$ :
$$\\sum x_i\\, p_i = (-5 \\times 0{,}2) + (10 \\times 0{,}8) = -1 + 8 = 7.$$`,
        },
        {
          type: 'tip',
          id: 'tip-o4',
          titre: `Le réflexe du Grand Frère`,
          contenu: `Tu viens de calculer une « espérance » sans le savoir. Ce geste $\\sum x_i p_i$ est exactement le cœur du Module 4 (variables aléatoires). Apprivoise-le maintenant, il reviendra partout.`,
        },
      ],
    },
    {
      id: 's-o5',
      titre: `🔧 Outil 5 — Lire et valider un tableau de probabilités`,
      blocs: [
        {
          type: 'text',
          id: 'b-o5',
          contenu: `Dans ce tome, tu vas croiser beaucoup de tableaux qui associent une valeur $x_i$ (un gain, un nombre de succès) à la probabilité $p_i$ que cette valeur tombe. Deux réflexes absolus :

**Réflexe 1 — Vérifier que le tableau est valide.** Si tu additionnes toutes les probabilités $p_i$, le total doit **toujours** faire exactement $1$. Pas $0{,}99$. Pas $1{,}02$. Exactement $1$.
$$\\sum p_i = 1.$$

**Réflexe 2 — Retrouver une valeur manquante.** Si on te donne toutes les probabilités sauf une, tu utilises $\\sum p_i = 1$ et tu trouves la manquante par soustraction.`,
        },
        {
          type: 'warning',
          id: 'warn-o5',
          titre: `Le piège à éviter`,
          contenu: `Si ta somme ne fait pas $1$, **n'avance pas** : ton tableau est faux, inutile de calculer une espérance dessus. On corrige d'abord.`,
        },
        {
          type: 'tip',
          id: 'tip-o5',
          titre: `Le réflexe du Grand Frère`,
          contenu: `Cette validation $\\sum p_i = 1$, tu la poses systématiquement aux Modules 4, 5 et 6 avant tout calcul. C'est un point gratuit, et un garde-fou.`,
        },
      ],
    },
    {
      id: 's-o6',
      titre: `🔧 Outil 6 — Deux formules en or : contraire et réunion`,
      blocs: [
        {
          type: 'text',
          id: 'b-o6',
          contenu: `De l'Outil 3 (les ensembles), on tire deux formules que tu vas utiliser tout le tome.

**La formule du contraire :**
$$P(\\overline{A}) = 1 - P(A).$$
C'est l'arme anti-calculs interminables : « au moins un » se traite presque toujours par le contraire « aucun ».

**La formule de la réunion :**
$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B).$$

Pourquoi on soustrait l'intersection ? Parce qu'en additionnant les chances de $A$ et de $B$, tu as compté **deux fois** la zone où ils se croisent. On en retire une fois pour rééquilibrer.

**Mini-exercice.** On donne $P(A) = 0{,}4$, $P(B) = 0{,}5$ et $P(A \\cap B) = 0{,}2$. Alors $P(A \\cup B) = 0{,}4 + 0{,}5 - 0{,}2 = 0{,}7$. C'est plié, un point gratuit au BAC.`,
        },
        {
          type: 'tip',
          id: 'tip-o6',
          titre: `Le réflexe du Grand Frère`,
          contenu: `Si $A$ et $B$ sont incompatibles, $P(A \\cap B) = 0$ et la réunion devient une simple addition. On s'en sert dès le Module 2.`,
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
            [`Outil 1 : Fractions, pourcentages, proportions`, `M2 à M6 — traduire un énoncé en probabilité et simplifier.`],
            [`Outil 2 : Puissances & factorielles`, `M1 (dénombrement) et M5 (loi binomiale).`],
            [`Outil 3 : Ensembles & diagrammes de Venn`, `M2 et M3 — le ET, le OU, le contraire, l'incompatibilité.`],
            [`Outil 4 : Le symbole somme Sigma`, `M4 — l'espérance $E(X)$ et la variance $V(X)$.`],
            [`Outil 5 : Lire & valider un tableau (somme = 1)`, `M4, M5, M6 — le garde-fou avant tout calcul.`],
            [`Outil 6 : Formules du contraire et de la réunion`, `M2, M3, M5 — « au moins un » et les unions d'événements.`],
          ],
        },
        {
          type: 'text',
          id: 'b-fin',
          contenu: `Voilà, Champion(ne), tes six outils sont aiguisés. Range-les à portée de main : à partir d'ici, chaque module va piocher dedans. On démarre par le Module 1, l'art de compter sans se tromper — le dénombrement. Faut pas gnan, on avance ensemble.`,
        },
      ],
    },
  ],
};
