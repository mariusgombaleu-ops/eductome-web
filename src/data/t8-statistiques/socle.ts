import { Chapitre } from '../../types/course';

export const chapitreSocle: Chapitre = {
  id: 't8-socle',
  titre: `Le Socle — Les 6 Outils de Sécurité`,
  duree: 14,
  niveau: 'BASE',
  xpGain: 15,
  gratuit: true,
  sections: [
    {
      id: 's1',
      titre: `Le Socle : ta boîte à outils`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg-introa',
          pf: `Grand Frère, j'ai jeté un œil au tome... Il y a des signes $\\sum$ de partout, des $x_i$, des $y_i$, des moyennes barrées. C'est quoi encore cette affaire ? Ça a l'air super compliqué.`,
        },
        {
          type: 'dialogue',
          id: 'dlg-introb',
          gf: `Faut pas gnan, Champion(ne). Le symbole $\\sum$ impressionne la première fois, mais ce n'est qu'une addition empilée, rien de plus. C'est comme monter un mur brique par brique. Avant de construire la maison du Tome 8, on vérifie tes fondations. Si tu maîtrises les six petits outils qui suivent, tout le reste ne sera que de la lecture de tableau. On y va doucement, l'un après l'autre.`,
        },
        {
          type: 'text',
          id: 'b-intro',
          contenu: `Champion(ne), ce Socle est ta boîte à outils. Chaque outil ici sera réutilisé plus loin dans un module précis — je te dis à chaque fois où. Lis-le calmement, refais les petits exemples chiffrés à la main, et tu attaqueras les modules sans aucune peur.`,
        },
      ],
    },
    {
      id: 's-o1',
      titre: `🔧 Outil 1 — Moyenne et variance (rappel T7 / Première)`,
      blocs: [
        {
          type: 'text',
          id: 'b-o1',
          contenu: `C'est ton point de départ, et c'est aussi le **pont avec le Tome 7**. En probabilités, tu calculais l'espérance $E(X)$, la valeur que tu attendais en théorie. Ici, on calcule la **moyenne observée** $\\bar{x}$ : la même idée, mais sur de vraies données récoltées sur le terrain.

Pour une série statistique, deux indicateurs fondamentaux. La moyenne donne l'équilibre. La variance mesure la dispersion autour de cet équilibre.
$$\\bar{x} = \\dfrac{1}{n} \\sum_{i=1}^n x_i \\qquad V(X) = \\dfrac{1}{n} \\sum_{i=1}^n x_i^2 - \\bar{x}^2$$

Prenons un exemple avec $n = 4$ valeurs : $2 ; 4 ; 4 ; 6$.
$$\\bar{x} = \\dfrac{2 + 4 + 4 + 6}{4} = \\dfrac{16}{4} = 4$$
$$V(X) = \\dfrac{2^2 + 4^2 + 4^2 + 6^2}{4} - 4^2 = \\dfrac{72}{4} - 16 = 18 - 16 = 2$$`,
        },
        {
          type: 'warning',
          id: 'warn-o1',
          titre: `Le piège à éviter`,
          contenu: `N'oublie jamais de soustraire le $\\bar{x}^2$ à la toute fin du calcul de variance. C'est l'erreur classique qui fausse tout l'exercice ensuite.`,
        },
        {
          type: 'tip',
          id: 'tip-o1',
          titre: `Où tu vas l'utiliser`,
          contenu: `Partout. $\\bar{x}$ et $\\bar{y}$ donnent le point moyen $G$ (M1). La variance $V(X)$ sert à calculer la pente de la droite (M3) et le coefficient $r$ (M2).`,
        },
      ],
    },
    {
      id: 's-o2',
      titre: `🔧 Outil 2 — La somme Sigma et la moyenne pondérée`,
      blocs: [
        {
          type: 'text',
          id: 'b-o2',
          contenu: `Le symbole $\\sum$ (sigma) veut juste dire « additionne tout ». $\\displaystyle\\sum_{i=1}^n x_i$ se lit « la somme des $x_i$, de $i = 1$ jusqu'à $i = n$ ». Rien de magique : $\\displaystyle\\sum_{i=1}^4 x_i = x_1 + x_2 + x_3 + x_4$.

Parfois, certaines valeurs reviennent plusieurs fois : on les regroupe avec un **effectif** $n_i$. La moyenne devient alors une **moyenne pondérée** :
$$\\bar{x} = \\dfrac{1}{N} \\sum_{i=1}^p n_i x_i \\qquad \\text{avec} \\qquad N = \\sum_{i=1}^p n_i$$

Par exemple, si la note $8$ est obtenue par $3$ élèves et la note $12$ par $2$ élèves :
$$\\bar{x} = \\dfrac{3 \\times 8 + 2 \\times 12}{3 + 2} = \\dfrac{24 + 24}{5} = \\dfrac{48}{5} = 9{,}6$$`,
        },
        {
          type: 'tip',
          id: 'tip-o2',
          titre: `Où tu vas l'utiliser`,
          contenu: `Pour lire vite un grand tableau de données (M1, M2) et dans les séries présentées avec des effectifs.`,
        },
      ],
    },
    {
      id: 's-o3',
      titre: `🔧 Outil 3 — Repère, coordonnées et papier millimétré`,
      blocs: [
        {
          type: 'text',
          id: 'b-o3',
          contenu: `Un nuage de points, ça se trace dans un repère orthogonal. Chaque donnée est un point $M_i(x_i ; y_i)$ : on avance de $x_i$ sur l'axe horizontal, on monte de $y_i$ sur l'axe vertical, on marque une petite croix nette.

Le mot d'ordre du BAC, c'est l'**échelle**. Quand l'énoncé impose « $1$ cm pour $2$ unités en abscisse, $1$ cm pour $50$ milliers en ordonnée », tu respectes ça au millimètre. Un repère fantaisiste, et tu perds tous les points du tracé.`,
        },
        {
          type: 'warning',
          id: 'warn-o3',
          titre: `Le piège à éviter`,
          contenu: `Ne confonds jamais l'ordre des coordonnées : l'abscisse $x$ d'abord, l'ordonnée $y$ ensuite. $A(3 ; 5)$ n'est pas $A(5 ; 3)$.`,
        },
        {
          type: 'tip',
          id: 'tip-o3',
          titre: `Où tu vas l'utiliser`,
          contenu: `Dès M1 pour le nuage et le placement de $G$, puis M3 et M4 pour tracer les droites.`,
        },
      ],
    },
    {
      id: 's-o4',
      titre: `🔧 Outil 4 — Équation d'une droite`,
      blocs: [
        {
          type: 'text',
          id: 'b-o4',
          contenu: `En Seconde, tu as appris qu'une droite non verticale a une équation réduite :
$$y = ax + b$$

Ici $a$ est le coefficient directeur (la pente) et $b$ l'ordonnée à l'origine. En Terminale, tu connaîtras souvent $a$, et tu chercheras $b$ en sachant que la droite passe par un point précis $A(x_A ; y_A)$. Comme $A$ appartient à la droite, ses coordonnées vérifient l'équation, d'où :
$$y_A = a x_A + b \\quad\\Longrightarrow\\quad b = y_A - a x_A$$

Par exemple, si $a = 3$ et que la droite passe par $A(2 ; 10)$ :
$$10 = 3 \\times 2 + b \\quad\\Longrightarrow\\quad b = 10 - 6 = 4 \\quad\\Longrightarrow\\quad y = 3x + 4$$`,
        },
        {
          type: 'tip',
          id: 'tip-o4',
          titre: `Où tu vas l'utiliser`,
          contenu: `C'est le cœur de M3 (la droite des moindres carrés passe par $G$, donc $b = \\bar{y} - a\\bar{x}$) et de M4 (droites de Mayer).`,
        },
      ],
    },
    {
      id: 's-o5',
      titre: `🔧 Outil 5 — Le tableau organisé à 5 colonnes`,
      blocs: [
        {
          type: 'text',
          id: 'b-o5',
          contenu: `C'est le secret absolu de ce chapitre. Ne calcule **jamais** tes éléments à la volée sur une feuille volante. Au Cacao, on disait toujours qu'un bon tableau de brouillon vaut mieux que trois pages raturées.

Si tu structures ton tableau dès le départ, tous les calculs se font en une passe, sans erreur. Voici les cinq colonnes que tu traces machinalement, plus une ligne « Total » en bas :
$$\\text{Colonnes} : \\quad x_i \\quad\\mid\\quad y_i \\quad\\mid\\quad x_i^2 \\quad\\mid\\quad y_i^2 \\quad\\mid\\quad x_i y_i$$

Une fois les cinq sommes calculées en bas, tu as sous les yeux tous les morceaux du puzzle : moyennes, variances, covariance, tout se déduit de ces totaux.`,
        },
        {
          type: 'tip',
          id: 'tip-o5',
          titre: `Le geste du jour J`,
          contenu: `Sors ta règle, trace ce grand tableau proprement. C'est ici que tu verrouilles les points avant même la première démonstration.`,
        },
      ],
    },
    {
      id: 's-o6',
      titre: `🔧 Outil 6 — Arrondis, pourcentages et rangs d'années`,
      blocs: [
        {
          type: 'text',
          id: 'b-o6',
          contenu: `Trois petits réflexes qui rapportent gros.

**Les arrondis.** Garde les fractions ou au moins $3$ décimales pendant les calculs intermédiaires. N'arrondis qu'à la toute fin, à la précision demandée (« arrondi à $10^{-2}$ » = $2$ décimales). Arrondir trop tôt fausse le résultat final.

**Les rangs d'années.** Au BAC, les années sont souvent remplacées par un **rang** $x_i$ pour simplifier. Si l'année $2019$ est le rang $1$, alors $2026$ est le rang $2026 - 2019 + 1 = 8$. Lis bien la consigne : parfois le rang $0$ correspond à la première année.

**Les pourcentages.** Une hausse de $5\\,\\%$ se calcule en multipliant par $1{,}05$ ; une baisse de $5\\,\\%$, par $0{,}95$. Simple, mais le jour J on l'oublie sous la pression.`,
        },
        {
          type: 'tip',
          id: 'tip-o6',
          titre: `Où tu vas l'utiliser`,
          contenu: `Les rangs d'années sont partout dans les exercices de prévision (M5). Les arrondis comptent dès le calcul de $r$ (M2).`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `🚀 Récap du Socle — Quel outil pour quel module ?`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg-fina',
          pf: `D'accord Grand Frère, vu comme ça, ce ne sont que des petites briques que je connais déjà presque toutes !`,
        },
        {
          type: 'dialogue',
          id: 'dlg-finb',
          gf: `Exactement, Champion(ne) ! Tu vois, il n'y a rien de neuf et de terrifiant. On réveille juste des outils de Seconde et Première, et on les assemble proprement. Maintenant que ta caisse à outils est complète, on peut bâtir. Direction le Module 1.`,
        },
        {
          type: 'table',
          id: 'tbl-recap',
          headers: [`Outil prérequis`, `La formule ou le principe`, `Où tu vas t'en servir`],
          rows: [
            [`1. Moyenne & variance`, `$\\bar{x} = \\dfrac{1}{n}\\sum x_i$ ; $V(X) = \\dfrac{1}{n}\\sum x_i^2 - \\bar{x}^2$`, `M1 (point $G$), M2 ($r$), M3 (pente $a$)`],
            [`2. Somme $\\sum$ & pondérée`, `$\\bar{x} = \\dfrac{1}{N}\\sum n_i x_i$`, `M1, M2 (grands tableaux)`],
            [`3. Repère & coordonnées`, `$M_i(x_i ; y_i)$, échelle respectée`, `M1 (nuage), M3 & M4 (tracé des droites)`],
            [`4. Équation de droite`, `$y = ax + b$ ; $b = y_A - a x_A$`, `M3 (moindres carrés), M4 (Mayer)`],
            [`5. Tableau à 5 colonnes`, `$x_i \\mid y_i \\mid x_i^2 \\mid y_i^2 \\mid x_i y_i$`, `Tous les modules de calcul`],
            [`6. Arrondis & rangs`, `Arrondir à la fin ; rang $=$ année $-$ origine $+ 1$`, `M2 (arrondi $r$), M5 (prévisions)`],
          ],
        },
      ],
    },
  ],
};
