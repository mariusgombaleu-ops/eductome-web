import { Chapitre } from '../../types/course';

export const chapitreM1: Chapitre = {
  id: 't9-m1',
  titre: `Module 1 — Vecteurs de l'Espace`,
  duree: 24,
  niveau: 'BASE',
  xpGain: 25,
  objectifs: [
    `Calculer les coordonnées d'un vecteur, d'un milieu et une distance en 3D`,
    `Énoncer la colinéarité et la coplanarité avec le vocabulaire officiel attendu au BAC`,
    `Démontrer que trois points sont alignés en prouvant une colinéarité`,
    `Démontrer que quatre points sont coplanaires en résolvant un système`,
    `Contrôler la cohérence des signes de tes coordonnées avant de conclure`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, en Première je calculais mes vecteurs avec deux coordonnées sur ma feuille. Là, on me parle d'espace, de cote, de $z$... Est-ce que je dois réapprendre toute la géométrie depuis le début ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Pas du tout, Champion(ne) ! Tu gardes tout ce que tu sais. On ajoute juste une troisième coordonnée à tes vecteurs, et tous tes anciens réflexes continuent de marcher. La vraie nouveauté, c'est que dans l'espace on peut se poser deux questions neuves : des points sont-ils alignés ? Sont-ils dans un même plan ? On commence par là, c'est le premier pilier de tout le tome.`,
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
          contenu: `Reprends le livreur de bouteilles de gaz d'Adjamé. Son dépôt, à la place de l'Indénié, c'est son point de départ : appelons-le l'origine $O$. Quand il part livrer un client, il enchaîne trois mouvements bien distincts.

D'abord il marche vers la droite le long de l'avenue : c'est son déplacement horizontal, disons $3$ pas. Ensuite il s'enfonce dans une ruelle, vers l'avant : encore $2$ pas, dans la profondeur. Et enfin, arrivé à l'immeuble, il grimpe au troisième étage : il monte, cette fois, vers le haut. Ce dernier mouvement, vers le ciel, c'est la grande nouveauté de la Terminale : la **cote** $z$.

Son trajet complet, du dépôt jusqu'aux mains du client, c'est un seul vecteur $\\vec{u}$ qui résume trois informations empilées : largeur, profondeur, altitude. Et s'il veut savoir si un deuxième livreur suit exactement la même direction que lui (sont-ils colinéaires ?), la règle ne change pas : il faut que leurs pas soient proportionnels — sur la largeur, sur la profondeur ET sur l'altitude.`,
        },
        {
          type: 'figure',
          id: 'fig-m1-1',
          src: '/images/t9/fig_M1_1.png',
          legende: `Un vecteur de l'espace = trois informations empilées : $x$, $y$ et la cote $z$.`,
          alt: `Un repère 3D en perspective cavalière, le vecteur OB et ses trois composantes largeur, profondeur, altitude.`,
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
          contenu: `On traduit le trajet du livreur en langage mathématique, brique par brique.

- Le dépôt (point de départ) → l'origine $O$ — le repère de référence
- Les pas vers la droite → l'abscisse $x$ — première coordonnée
- Les pas vers l'avant → l'ordonnée $y$ — deuxième coordonnée
- Les étages grimpés → la cote $z$ — troisième coordonnée, nouvelle en Terminale
- Le trajet complet → le vecteur $\\vec{u}(x ; y ; z)$ — les trois infos en un seul objet`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène du livreur`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Le dépôt de départ`, `$O$`, `L'origine du repère`],
            [`Aller du point $A$ au point $B$`, `$\\vec{AB}(x_B-x_A \\,;\\, y_B-y_A \\,;\\, z_B-z_A)$`, `Arrivée moins départ, coordonnée par coordonnée`],
            [`Le point situé pile au milieu du trajet`, `$I$ milieu de $[AB]$`, `La moyenne des coordonnées de $A$ et $B$`],
            [`La longueur réelle du trajet`, `$AB = \\|\\vec{AB}\\|$`, `La norme, par Pythagore en 3D`],
            [`Deux livreurs même direction`, `$\\vec{u} = k\\vec{v}$`, `Vecteurs colinéaires (coordonnées proportionnelles)`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `Maintenant que chaque morceau a son symbole, on peut écrire les définitions rigoureuses.`,
        },
      ],
    },
    {
      id: 's-bac',
      titre: `📘 LANGAGE OFFICIEL DU BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b6',
          contenu: `Champion(ne), tu as l'image des livreurs qui suivent la même route. Ta copie, elle, doit parler le langage exact des maths.

**Définition formelle.** Deux vecteurs $\\vec{u}$ et $\\vec{v}$ sont **colinéaires** s'il existe un réel $k$ tel que $\\vec{u} = k\\vec{v}$. Trois vecteurs $\\vec{u}$, $\\vec{v}$, $\\vec{w}$ (avec $\\vec{u}$ et $\\vec{v}$ non colinéaires) sont **coplanaires** s'il existe deux réels $a$ et $b$ tels que $\\vec{w} = a\\vec{u} + b\\vec{v}$.

**En langage courant.** Colinéaires = même direction (la même route). Coplanaires = dans un même plan (la même feuille tendue dans l'espace).`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Repère orthonormé** $(O \\,;\\, \\vec{i} \\,;\\, \\vec{j} \\,;\\, \\vec{k})$ — le décor de travail de tout le tome.
- **Vecteurs colinéaires** — pour prouver que des points sont **alignés**.
- **Vecteurs coplanaires** — pour prouver que des points sont dans un **même plan**.
- **Cote** — le nom officiel de la troisième coordonnée $z$.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend la traduction : *« Les points $A$, $B$, $C$ sont alignés car les vecteurs $\\vec{AB}$ et $\\vec{AC}$ sont colinéaires. »* La question est géométrique, la preuve est vectorielle.`,
        },
      ],
    },
    {
      id: 's4',
      titre: `④ LA RÈGLE`,
      blocs: [
        {
          type: 'rule',
          id: 'rule9',
          titre: `Règle d'Or — La boîte à outils du repère 3D`,
          contenu: `Pour deux points $A(x_A ; y_A ; z_A)$ et $B(x_B ; y_B ; z_B)$ dans un repère orthonormé :
$$\\vec{AB}(x_B - x_A \\,;\\, y_B - y_A \\,;\\, z_B - z_A)$$
$$I\\left(\\dfrac{x_A + x_B}{2} \\,;\\, \\dfrac{y_A + y_B}{2} \\,;\\, \\dfrac{z_A + z_B}{2}\\right) \\qquad AB = \\sqrt{(x_B-x_A)^2 + (y_B-y_A)^2 + (z_B-z_A)^2}$$

**Colinéarité.** $\\vec{u}$ et $\\vec{v}$ sont colinéaires $\\iff$ il existe $k$ réel tel que $\\vec{u} = k\\vec{v}$.

**Coplanarité.** $\\vec{w}$ est coplanaire avec $\\vec{u}$ et $\\vec{v}$ (non colinéaires) $\\iff$ il existe $a$, $b$ réels tels que $\\vec{w} = a\\vec{u} + b\\vec{v}$.`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Pour tester la colinéarité, divise chaque coordonnée du grand vecteur par celle du petit. Même quotient partout ? Colinéaires.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `$\\vec{AB} = A - B$ est faux. C'est toujours l'arrivée moins le départ, soit $B - A$. Et n'oublie pas : le vecteur nul $\\vec{0}$ est colinéaire à tout vecteur.`,
        },
      ],
    },
    {
      id: 's5',
      titre: `⑤ LA DESCENTE`,
      blocs: [
        {
          type: 'text',
          id: 'b12',
          titre: `Le Diagnostic`,
          contenu: `Quand un sujet te donne une série de points dans l'espace, traduis chaque question géométrique en question vectorielle. « Les points sont-ils alignés ? » devient « les vecteurs sont-ils colinéaires ? ». « Les points sont-ils dans un même plan ? » devient « les vecteurs sont-ils coplanaires ? ».`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`La question au BAC`, `Ton réflexe algébrique`],
          rows: [
            [`Calculer une distance $AB$`, `Je calcule $\\vec{AB}$, puis $AB = \\sqrt{x^2+y^2+z^2}$.`],
            [`Prouver que $A$, $B$, $C$ sont alignés`, `Je calcule $\\vec{AB}$ et $\\vec{AC}$, et je cherche $k$ tel que $\\vec{AC} = k\\vec{AB}$.`],
            [`Prouver que $A$, $B$, $C$, $D$ sont coplanaires`, `Je pose $\\vec{AD} = a\\vec{AB} + b\\vec{AC}$ et je résous le système.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure (test de coplanarité)`,
          contenu: `**Étape 1.** Calcule les trois vecteurs partant d'un même point, par exemple $\\vec{AB}$, $\\vec{AC}$ et $\\vec{AD}$.

**Étape 2.** Pose le système issu de $\\vec{AD} = a\\vec{AB} + b\\vec{AC}$ : une ligne pour $x$, une pour $y$, une pour $z$.

**Étape 3.** Résous le sous-système des deux premières lignes pour trouver $a$ et $b$.

**Étape 4.** Reporte $a$ et $b$ dans la troisième ligne (la ligne du juge de paix). Si l'égalité est vraie : coplanaires. Sinon : non coplanaires.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `Contrôle le signe de chaque soustraction $B - A$. Si une coordonnée de $B$ est plus petite que celle de $A$, ta coordonnée du vecteur doit logiquement être négative.`,
        },
        {
          type: 'figure',
          id: 'fig-m1-2',
          src: '/images/t9/fig_M1_2.png',
          legende: `Trois points sont alignés exactement quand $\\vec{AB}$ et $\\vec{AC}$ sont colinéaires.`,
          alt: `Trois points A, B, C alignés sur une droite oblique d'un repère 3D, avec les vecteurs AB et AC.`,
        },
      ],
    },
    {
      id: 's-exo',
      titre: `🎯 EXERCICES-TYPES`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-carte',
          titre: `Carte des situations`,
          headers: [`Niveau`, `Situation`, `Comment la reconnaître`, `Exercice-Type`],
          rows: [
            [`🟢 BASE`, `Coordonnées, milieu, distance`, `On donne des points, on demande un vecteur / une longueur`, `Type 1`],
            [`🟡 MOYEN`, `Alignement de trois points`, `« Démontrer que $A$, $B$, $C$ sont alignés »`, `Type 1`],
            [`🔴 BAC`, `Coplanarité de quatre points`, `« Démontrer que $A$, $B$, $C$, $D$ sont coplanaires »`, `Type 2`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Repérage et alignement** *(BASE / MOYEN)*. L'espace est muni d'un repère orthonormé $(O \\,;\\, \\vec{i} \\,;\\, \\vec{j} \\,;\\, \\vec{k})$. On donne $A(1 ; -2 ; 3)$, $B(4 ; 0 ; 1)$ et $C(-2 ; -6 ; 7)$. **1.** Calcule les coordonnées de $\\vec{AB}$ et la distance $AB$. **2.** Les points $A$, $B$, $C$ sont-ils alignés ?`,
          etapes: [
            { name: `Diagnostic`, contenu: `Question de coordonnées puis d'alignement : on calcule $\\vec{AB}$, $\\vec{AC}$ et on cherche un $k$.` },
            { name: `Étape 1`, contenu: `$\\vec{AB}(4-1 \\,;\\, 0-(-2) \\,;\\, 1-3)$, soit $\\vec{AB}(3 \\,;\\, 2 \\,;\\, -2)$. Puis $AB = \\sqrt{3^2 + 2^2 + (-2)^2} = \\sqrt{9 + 4 + 4} = \\sqrt{17}$.` },
            { name: `Étape 2`, contenu: `$\\vec{AC}(-3 \\,;\\, -4 \\,;\\, 4)$. On cherche $k$ tel que $\\vec{AC} = k\\vec{AB}$. Sur l'abscisse : $-3 = 3k$ donne $k = -1$. Test sur l'ordonnée : $-1 \\times 2 = -2 \\neq -4$.` },
          ],
          reponse: `Les coordonnées ne sont pas proportionnelles : $\\vec{AB}$ et $\\vec{AC}$ ne sont pas colinéaires, donc $A$, $B$, $C$ ne sont pas alignés.`,
          conseil: `Dès que le test échoue sur une seule coordonnée, tu peux conclure : inutile de vérifier les autres.`,
          piege: `Ne conclus jamais l'alignement sur la seule abscisse ; il faut le même $k$ sur les trois coordonnées.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `On a $\\vec{AB}(3 \\,;\\, 2 \\,;\\, -2)$ donc $AB = \\sqrt{3^2+2^2+(-2)^2} = \\sqrt{17}$.
$\\vec{AC}(-3 \\,;\\, -4 \\,;\\, 4)$. Comme $\\dfrac{-3}{3} \\neq \\dfrac{-4}{2}$, les vecteurs $\\vec{AB}$ et $\\vec{AC}$ ne sont pas colinéaires. Par conséquent, les points $A$, $B$ et $C$ ne sont pas alignés.

*[Barème type BAC : $\\vec{AB}$ et $AB$ = 1 pt — $\\vec{AC}$ = 0,5 pt — test et conclusion = 1 pt — Total : 2,5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 2 — Coplanarité de quatre points** *(BAC)*. On donne $A(1 ; 0 ; 2)$, $B(0 ; 3 ; 1)$, $C(2 ; 1 ; 0)$ et $D(2 ; 6 ; 2)$. Les points $A$, $B$, $C$, $D$ sont-ils coplanaires ?`,
          etapes: [
            { name: `Diagnostic`, contenu: `Coplanarité de quatre points : on pose $\\vec{AD} = a\\vec{AB} + b\\vec{AC}$ et on résout.` },
            { name: `Étape 1`, contenu: `$\\vec{AB}(-1 \\,;\\, 3 \\,;\\, -1)$, $\\vec{AC}(1 \\,;\\, 1 \\,;\\, -2)$, $\\vec{AD}(1 \\,;\\, 6 \\,;\\, 0)$.` },
            { name: `Étape 2`, contenu: `Le système $\\vec{AD} = a\\vec{AB} + b\\vec{AC}$ s'écrit : $\\begin{cases} -a + b = 1 \\\\ 3a + b = 6 \\\\ -a - 2b = 0 \\end{cases}$` },
            { name: `Étape 3`, contenu: `Des deux premières lignes : par soustraction, $4a = 5$, donc $a = \\dfrac{5}{4}$ et $b = 1 + a = \\dfrac{9}{4}$.` },
            { name: `Étape 4`, contenu: `Test dans la ligne 3 : $-\\dfrac{5}{4} - 2 \\times \\dfrac{9}{4} = -\\dfrac{5}{4} - \\dfrac{18}{4} = -\\dfrac{23}{4} \\neq 0$.` },
          ],
          reponse: `Le système n'a pas de solution : les vecteurs ne sont pas coplanaires, donc les quatre points ne le sont pas non plus.`,
          conseil: `Ne t'arrête pas dès que tu trouves $a$ et $b$. C'est la troisième ligne qui tranche : elle valide ou invalide la coplanarité.`,
          piege: `Garde une lettre distincte ($a$, $b$) et reporte-les sans erreur de signe dans la dernière ligne.`,
        },
        {
          type: 'figure',
          id: 'fig-m1-3',
          src: '/images/t9/fig_M1_3.png',
          legende: `$D$ est coplanaire avec $A$, $B$, $C$ ($\\vec{AD}=a\\vec{AB}+b\\vec{AC}$) ; $D'$ (au-dessus du plan) ne l'est pas.`,
          alt: `Un plan contenant A, B, C et un point D dessus, un point D' au-dessus du plan.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `On a $\\vec{AB}(-1 \\,;\\, 3 \\,;\\, -1)$, $\\vec{AC}(1 \\,;\\, 1 \\,;\\, -2)$ et $\\vec{AD}(1 \\,;\\, 6 \\,;\\, 0)$.
Cherchons $a$ et $b$ tels que $\\vec{AD} = a\\vec{AB} + b\\vec{AC}$. Les deux premières équations donnent $a = \\dfrac{5}{4}$ et $b = \\dfrac{9}{4}$.
En reportant dans la troisième : $-\\dfrac{5}{4} - 2\\times\\dfrac{9}{4} = -\\dfrac{23}{4} \\neq 0$.
Le système n'admet pas de solution : $\\vec{AD}$ ne s'écrit pas $a\\vec{AB} + b\\vec{AC}$. Les points $A$, $B$, $C$ et $D$ ne sont donc pas coplanaires.

*[Barème type BAC : trois vecteurs = 1 pt — système = 1 pt — résolution = 1 pt — test ligne 3 et conclusion = 1 pt — Total : 4 pts]*`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-a',
          pf: `Mais Grand Frère, pourquoi je résous le système seulement avec les deux premières lignes ? Et la coordonnée $z$ alors ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-b',
          gf: `C'est tout le secret, Champion(ne) ! Tu débusques les suspects $a$ et $b$ avec les lignes de $x$ et $y$. Ensuite, la ligne de $z$ devient ton test de vérité. Si elle tient la route, c'est coplanaire. Sinon, c'est raté.`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Garde un œil sur les signes, et ça roule. Réponses finales seulement.

- **Exercice 1.** $A(2 ; 1 ; 0)$ et $B(2 ; -3 ; 4)$. Calcule $\\vec{AB}$ et le milieu $I$ de $[AB]$. *(Réponse : $\\vec{AB}(0 \\,;\\, -4 \\,;\\, 4)$ ; $I(2 \\,;\\, -1 \\,;\\, 2)$.)*
- **Exercice 2.** $A(0 ; 0 ; 0)$, $B(1 ; 2 ; 3)$, $C(2 ; 4 ; 6)$. Ces points sont-ils alignés ? *(Réponse : oui, car $\\vec{AC} = 2\\vec{AB}$.)*
- **Exercice 3.** Distance $AB$ pour $A(1 ; 1 ; 1)$ et $B(3 ; 1 ; -1)$. *(Réponse : $AB = \\sqrt{4+0+4} = 2\\sqrt{2}$.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m1',
          titre: `À retenir`,
          contenu: [
            `Un vecteur de l'espace a **trois coordonnées** : on ajoute la cote $z$ à tout ce que tu savais faire.`,
            `📘 Vocabulaire officiel : repère orthonormé, colinéaires, coplanaires, cote.`,
            `**Alignement** = colinéarité de deux vecteurs ; **coplanarité** = un vecteur combinaison des deux autres.`,
            `Pour la coplanarité : résoudre deux lignes, puis **vérifier dans la troisième**.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m1',
          titre: `Fil rouge`,
          contenu: `Tu sais maintenant placer des points et tester leurs alignements. Mais comment trouver, à coup sûr, le point d'équilibre exact d'un ensemble de points — le centre de gravité d'un triangle, le point qui répartit les poids ? C'est tout l'enjeu du Module 2 : le barycentre.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m1',
          titre: `Auto-évaluation — Module 1`,
          contenu: [
            `Je sais calculer les coordonnées de $\\vec{AB}$ sans me tromper de sens.`,
            `Je sais calculer un milieu et une distance en 3D.`,
            `J'utilise le vocabulaire officiel (colinéaires, coplanaires) dans ma rédaction.`,
            `Je sais prouver un alignement par la colinéarité.`,
            `Je sais résoudre le système de coplanarité et conclure avec la troisième ligne.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m1',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Direction le Module 2, on cherche le point d'équilibre.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et la procédure de coplanarité.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel pour bien visualiser la cote.`,
          ],
        },
      ],
    },
  ],
};
