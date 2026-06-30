import { Chapitre } from '../../types/course';

export const chapitreSocle: Chapitre = {
  id: 't9-socle',
  titre: `Le Socle — Ta Boîte à Outils 3D`,
  duree: 20,
  niveau: 'BASE',
  xpGain: 20,
  gratuit: true,
  objectifs: [
    `Étendre au repère 3D les vecteurs, milieux, normes et distances`,
    `Tester une colinéarité et résoudre les systèmes utiles au tome`,
    `Distinguer l'équation d'une droite (2D) de celle d'un plan (3D)`,
  ],
  sections: [
    {
      id: 's-intro',
      titre: `On dépoussière la caisse à outils`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, ton histoire de 3D là, ça m'inquiète un peu. Toutes mes formules de Seconde et de Première étaient pour le plan. Je dois tout jeter à la poubelle et recommencer à zéro ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Faut pas avoir peur, Champion(ne). Tu ne jettes absolument rien. C'est même le contraire : la géométrie dans l'espace, c'est la géométrie du plan qui a pris du volume. On réutilise tes vieux outils, on leur ajoute juste un petit réglage. On dépoussière la caisse à outils avant de monter sur le chantier. Six outils, et tu attaqueras les modules sans aucune peur.`,
        },
        {
          type: 'text',
          id: 'b-intro',
          contenu: `Champion(ne), ce Socle est ta boîte à outils. Chaque outil ici sera réutilisé plus loin dans un module précis — je te dis à chaque fois où. Lis-le calmement, refais les petits exemples chiffrés à la main, et le reste ne sera que de la lecture.`,
        },
      ],
    },
    {
      id: 's-o1',
      titre: `🔧 Outil 1 — Le vecteur, du plan à l'espace`,
      blocs: [
        {
          type: 'text',
          id: 'b-o1',
          contenu: `Tu te rappelles comment on calculait les coordonnées d'un vecteur $\\vec{AB}$ sur ta feuille à carreaux ? C'était toujours le point d'arrivée moins le point de départ :
$$\\vec{AB}(x_B - x_A \\,;\\, y_B - y_A)$$

En T9, le passage en 3D est d'une douceur absolue : tu ajoutes simplement la troisième coordonnée, la cote $z$. Pour deux points $A(x_A ; y_A ; z_A)$ et $B(x_B ; y_B ; z_B)$ :
$$\\vec{AB}(x_B - x_A \\,;\\, y_B - y_A \\,;\\, z_B - z_A)$$

Par exemple, pour $A(1 ; -2 ; 3)$ et $B(4 ; 0 ; 1)$ : $\\vec{AB}(4-1 \\,;\\, 0-(-2) \\,;\\, 1-3)$, soit $\\vec{AB}(3 \\,;\\, 2 \\,;\\, -2)$.`,
        },
        {
          type: 'warning',
          id: 'warn-o1',
          titre: `Piège à éviter`,
          contenu: `Ne jamais écrire $\\vec{AB} = A - B$. C'est TOUJOURS l'arrivée moins le départ, donc $B - A$. Une erreur de signe ici, et tout l'exercice déraille.`,
        },
        {
          type: 'tip',
          id: 'tip-o1',
          titre: `Où tu vas l'utiliser`,
          contenu: `Partout, dès le Module 1. C'est le geste de base de tout le tome.`,
        },
      ],
    },
    {
      id: 's-o2',
      titre: `🔧 Outil 2 — Repère 3D : milieu, norme et distance`,
      blocs: [
        {
          type: 'text',
          id: 'b-o2',
          contenu: `Dans un repère orthonormé $(O \\,;\\, \\vec{i} \\,;\\, \\vec{j} \\,;\\, \\vec{k})$, trois formules de Première gagnent juste un étage.

Le **milieu** $I$ du segment $[AB]$ (on additionne, on divise par deux) :
$$I\\left(\\dfrac{x_A + x_B}{2} \\,;\\, \\dfrac{y_A + y_B}{2} \\,;\\, \\dfrac{z_A + z_B}{2}\\right)$$

La **norme** d'un vecteur (sa longueur), c'est Pythagore étendu :
$$\\|\\vec{u}\\| = \\sqrt{x^2 + y^2 + z^2}$$

La **distance** entre deux points $A$ et $B$, c'est la norme de $\\vec{AB}$ :
$$AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$$

Avec $\\vec{AB}(3 \\,;\\, 2 \\,;\\, -2)$ : $AB = \\sqrt{3^2 + 2^2 + (-2)^2} = \\sqrt{9 + 4 + 4} = \\sqrt{17}$.`,
        },
        {
          type: 'tip',
          id: 'tip-o2',
          titre: `Où tu vas l'utiliser`,
          contenu: `Milieu et distance dès le Module 1 ; la distance revient en force au Module 7 (rayon d'une sphère, distance point-plan).`,
        },
      ],
    },
    {
      id: 's-o3',
      titre: `🔧 Outil 3 — Colinéarité et déterminant 2×2`,
      blocs: [
        {
          type: 'text',
          id: 'b-o3',
          contenu: `Deux vecteurs $\\vec{u}$ et $\\vec{v}$ sont **colinéaires** s'il existe un réel $k$ tel que $\\vec{u} = k\\vec{v}$ : leurs coordonnées sont proportionnelles. Dans le plan, tu disposais d'un détecteur rapide, le **déterminant** :
$$\\det(\\vec{u}, \\vec{v}) = x\\,y' - y\\,x'$$

Si ce déterminant vaut $0$, les deux vecteurs sont colinéaires. Par exemple $\\vec{u}(2 ; 6)$ et $\\vec{v}(1 ; 3)$ : $\\det = 2\\times 3 - 6\\times 1 = 0$, donc colinéaires.

En 3D, on teste la proportionnalité des trois coordonnées d'un coup : $\\vec{u}(a ; b ; c)$ et $\\vec{v}(a' ; b' ; c')$ sont colinéaires si $\\dfrac{a}{a'} = \\dfrac{b}{b'} = \\dfrac{c}{c'}$ (avec les dénominateurs non nuls).`,
        },
        {
          type: 'warning',
          id: 'warn-o3',
          titre: `Piège à éviter`,
          contenu: `Le vecteur nul $\\vec{0}(0 ; 0 ; 0)$ est colinéaire à tout vecteur : un cas trivial à ne pas oublier.`,
        },
        {
          type: 'tip',
          id: 'tip-o3',
          titre: `Où tu vas l'utiliser`,
          contenu: `Module 1 (alignement), Module 5 (droites parallèles), Module 6 (droite perpendiculaire à un plan : direction colinéaire au vecteur normal).`,
        },
      ],
    },
    {
      id: 's-o4',
      titre: `🔧 Outil 4 — Le produit scalaire (le détecteur d'angles droits)`,
      blocs: [
        {
          type: 'text',
          id: 'b-o4',
          contenu: `En Première, tu avais cette machine pour repérer les perpendiculaires. Dans le plan, pour $\\vec{u}(x_1 ; y_1)$ et $\\vec{v}(x_2 ; y_2)$ :
$$\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2$$

Dans l'espace, la définition ne change pas d'un cheveu : tu ajoutes juste le produit des cotes.
$$\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2$$

Et la règle d'or qui sauve tes exercices d'orthogonalité reste :
$$\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$$

Exemple : $\\vec{u}(1 ; 2 ; -1)$ et $\\vec{v}(3 ; -1 ; 1)$ donnent $\\vec{u}\\cdot\\vec{v} = 3 - 2 - 1 = 0$ : ils sont orthogonaux.`,
        },
        {
          type: 'tip',
          id: 'tip-o4',
          titre: `Où tu vas l'utiliser`,
          contenu: `C'est le cœur du Module 3, et l'outil clé du Module 6 (vecteur normal, perpendicularités).`,
        },
      ],
    },
    {
      id: 's-o5',
      titre: `🔧 Outil 5 — Résoudre un système de 2 et 3 équations`,
      blocs: [
        {
          type: 'text',
          id: 'b-o5',
          contenu: `La géométrie 3D, c'est beaucoup de systèmes. Tu dois savoir résoudre vite un système à deux inconnues par substitution ou combinaison. Par exemple :
$$\\begin{cases} -a + b = 1 \\\\ 3a + b = 6 \\end{cases}$$

Par soustraction des deux lignes : $4a = 5$, donc $a = \\dfrac{5}{4}$, puis $b = 1 + a = \\dfrac{9}{4}$.`,
        },
        {
          type: 'warning',
          id: 'warn-o5',
          titre: `Piège à éviter`,
          contenu: `Quand un système 3D vient de deux droites différentes, ne mets JAMAIS la même lettre pour les deux paramètres : c'est $t$ pour la première droite, $t'$ pour la seconde. La méthode infaillible du tome : résoudre avec deux lignes, puis **vérifier dans la troisième ligne** (la ligne du juge de paix).`,
        },
        {
          type: 'tip',
          id: 'tip-o5',
          titre: `Où tu vas l'utiliser`,
          contenu: `Module 1 (coplanarité), Module 5 (intersections de droites et de plans).`,
        },
      ],
    },
    {
      id: 's-o6',
      titre: `🔧 Outil 6 — Équation cartésienne : droite (2D) contre plan (3D)`,
      blocs: [
        {
          type: 'text',
          id: 'b-o6',
          contenu: `Voici l'outil qui crée le plus de confusion, alors on le fixe maintenant. Dans le plan, une équation à deux variables définit une **droite** :
$$ax + by + c = 0 \\quad (\\text{une droite, dans le plan})$$

Mais si tu ajoutes la dimension $z$, l'équation gonfle et change complètement de nature : elle ne définit plus une ligne, mais une **surface plate**, un **plan** :
$$ax + by + cz + d = 0 \\quad (\\text{un plan, dans l'espace})$$`,
        },
        {
          type: 'warning',
          id: 'warn-o6',
          titre: `Piège à éviter`,
          contenu: `Dans l'espace 3D, $ax + by + cz + d = 0$ n'est SURTOUT PAS une droite : c'est un plan. Pour décrire une droite dans l'espace, on utilisera un autre outil de précision, la représentation paramétrique (Module 4).`,
        },
        {
          type: 'tip',
          id: 'tip-o6',
          titre: `Où tu vas l'utiliser`,
          contenu: `Module 4 (écrire l'équation d'un plan), Module 5 (positions relatives), Module 6 (vecteur normal), Module 7 (distance point-plan).`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `La carte de ta boîte à outils`,
      blocs: [
        {
          type: 'text',
          id: 'b-recap',
          contenu: `Voici la carte de ta boîte à outils : à chaque ligne, l'outil et le module où il entre en action.`,
        },
        {
          type: 'table',
          id: 'tbl-recap',
          headers: [`Outil du Socle`, `Formule clé`, `Modules où tu l'utilises`],
          rows: [
            [`1. Vecteur de l'espace`, `$\\vec{AB}(x_B-x_A \\,;\\, y_B-y_A \\,;\\, z_B-z_A)$`, `M1, et partout ensuite`],
            [`2. Milieu, norme, distance`, `$AB = \\sqrt{(x_B-x_A)^2 + (y_B-y_A)^2 + (z_B-z_A)^2}$`, `M1, M2, M7`],
            [`3. Colinéarité`, `$\\dfrac{a}{a'} = \\dfrac{b}{b'} = \\dfrac{c}{c'}$`, `M1, M5, M6`],
            [`4. Produit scalaire`, `$\\vec{u}\\cdot\\vec{v} = x_1x_2 + y_1y_2 + z_1z_2$`, `M3, M6`],
            [`5. Systèmes 2 et 3 équations`, `Résoudre 2 lignes, vérifier la 3e`, `M1, M5`],
            [`6. Équation cartésienne d'un plan`, `$ax + by + cz + d = 0$`, `M4, M5, M6, M7`],
          ],
        },
        {
          type: 'text',
          id: 'b-fin',
          contenu: `Ta caisse à outils est prête, Champion(ne). On monte sur le chantier : direction le Module 1.`,
        },
      ],
    },
  ],
};
