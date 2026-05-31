import { Exercise } from './exercices-t1';

export const exercicesT9: Exercise[] = [
  {
    id: 't9-ex1',
    level: 'BASE',
    points: 4,
    statement: `Dans un repère orthonormé $(O, \\vec{i}, \\vec{j}, \\vec{k})$, on donne les points $A(1, -2, 3)$, $B(3, 0, 2)$ et le vecteur $\\vec{u}(2, -1, 4)$.
<br/><br/>1. Calculer les coordonnées du vecteur $\\vec{AB}$ et sa norme $\\|\\vec{AB}\\|$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>2. Calculer le produit scalaire $\\vec{AB} \\cdot \\vec{u}$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    steps: [
      {
        title: 'Question 1 : Coordonnées et Norme',
        content: `$\\vec{AB}$ a pour coordonnées $(x_B - x_A, y_B - y_A, z_B - z_A)$.<br/>
$\\vec{AB}(3 - 1, 0 - (-2), 2 - 3) = \\vec{AB}(2, 2, -1)$.<br/>
La norme est $\\|\\vec{AB}\\| = \\sqrt{x^2 + y^2 + z^2} = \\sqrt{2^2 + 2^2 + (-1)^2} = \\sqrt{4 + 4 + 1} = \\sqrt{9} = 3$.`
      },
      {
        title: 'Question 2 : Produit scalaire',
        content: `Le produit scalaire de $\\vec{u}(x, y, z)$ et $\\vec{v}(x', y', z')$ est $xx' + yy' + zz'$.<br/>
$\\vec{AB} \\cdot \\vec{u} = (2 \\times 2) + (2 \\times -1) + (-1 \\times 4)$<br/>
$= 4 - 2 - 4 = -2$.`
      }
    ],
    grandFrereNote: "Attention à la formule du vecteur : c'est toujours point d'ARRIVÉE moins point de DÉPART (x_B - x_A), jamais l'inverse !"
  },
  {
    id: 't9-ex2',
    level: 'MOYEN',
    points: 6,
    statement: `Soit le plan $(P)$ passant par le point $A(1, 2, -1)$ et de vecteur normal $\\vec{n}(2, -3, 1)$.
<br/><br/>1. Déterminer une équation cartésienne du plan $(P)$. <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>2. Le point $B(2, 4, -1)$ appartient-il au plan $(P)$ ? Justifier. <span class="text-sm text-gray-500 float-right">[3 pts]</span>`,
    steps: [
      {
        title: 'Question 1 : Équation cartésienne du plan',
        content: `Un plan de vecteur normal $\\vec{n}(a, b, c)$ a pour équation cartésienne $ax + by + cz + d = 0$.<br/>
Ici, l'équation s'écrit $2x - 3y + 1z + d = 0$.<br/>
Le point $A(1, 2, -1)$ appartient à $(P)$, donc ses coordonnées vérifient l'équation :<br/>
$2(1) - 3(2) + 1(-1) + d = 0$<br/>
$2 - 6 - 1 + d = 0 \\implies -5 + d = 0 \\implies d = 5$.<br/>
L'équation est donc $(P): 2x - 3y + z + 5 = 0$.`
      },
      {
        title: 'Question 2 : Appartenance d\'un point',
        content: `Pour savoir si $B(2, 4, -1)$ appartient à $(P)$, on remplace ses coordonnées dans l'équation :<br/>
$2(2) - 3(4) + (-1) + 5 = 4 - 12 - 1 + 5 = -4$.<br/>
Comme $-4 \\neq 0$, les coordonnées ne vérifient pas l'équation.<br/>
Donc le point $B$ n'appartient pas au plan $(P)$.`
      }
    ],
    grandFrereNote: "L'équation cartésienne du plan est super simple : le vecteur normal te donne directement les a, b, c. Tu n'as plus qu'à trouver 'd' en utilisant le point. A maîtriser absolument !"
  },
  {
    id: 't9-ex3',
    level: 'BAC',
    points: 10,
    context: "Produit Vectoriel et Aire d'un Triangle",
    statement: `On considère les points $A(1, 0, 2)$, $B(2, 1, 0)$ et $C(0, 2, 1)$.
<br/><br/>1. Calculer les coordonnées des vecteurs $\\vec{AB}$ et $\\vec{AC}$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>2. Montrer que les points $A, B$ et $C$ ne sont pas alignés en utilisant le produit vectoriel $\\vec{AB} \\wedge \\vec{AC}$. <span class="text-sm text-gray-500 float-right">[4 pts]</span>
<br/>3. Calculer l'aire du triangle $ABC$. <span class="text-sm text-gray-500 float-right">[4 pts]</span>`,
    steps: [
      {
        title: 'Question 1 : Vecteurs',
        content: `$\\vec{AB}(2-1, 1-0, 0-2) = \\vec{AB}(1, 1, -2)$.<br/>
$\\vec{AC}(0-1, 2-0, 1-2) = \\vec{AC}(-1, 2, -1)$.`
      },
      {
        title: 'Question 2 : Produit Vectoriel et Alignement',
        content: `Soit $\\vec{W} = \\vec{AB} \\wedge \\vec{AC}$. On utilise les mineurs :<br/>
Pour l'abscisse : $(1)(-1) - (-2)(2) = -1 + 4 = 3$.<br/>
Pour l'ordonnée : $-[(1)(-1) - (-2)(-1)] = -[-1 - 2] = -(-3) = 3$.<br/>
Pour la cote : $(1)(2) - (1)(-1) = 2 + 1 = 3$.<br/>
Donc $\\vec{AB} \\wedge \\vec{AC} = \\vec{W}(3, 3, 3)$.<br/>
Comme le produit vectoriel n'est pas le vecteur nul ($\\vec{0}$), les vecteurs $\\vec{AB}$ et $\\vec{AC}$ ne sont pas colinéaires. Les points $A, B, C$ ne sont donc pas alignés (ils forment un plan).`
      },
      {
        title: 'Question 3 : Aire du triangle',
        content: `L'aire du triangle $ABC$ est donnée par la moitié de la norme du produit vectoriel :<br/>
$\\mathcal{A} = \\frac{1}{2} \\|\\vec{AB} \\wedge \\vec{AC}\\|$.<br/>
On calcule la norme de $\\vec{W}(3, 3, 3)$ :<br/>
$\\|\\vec{W}\\| = \\sqrt{3^2 + 3^2 + 3^2} = \\sqrt{9 + 9 + 9} = \\sqrt{27} = 3\\sqrt{3}$.<br/>
L'aire est donc $\\mathcal{A} = \\frac{3\\sqrt{3}}{2}$ unités d'aire.`
      }
    ],
    grandFrereNote: "Le produit vectoriel te donne toujours un vecteur NORMAL (perpendiculaire) aux deux premiers. N'oublie pas le SIGNE MOINS sur l'ordonnée (la ligne du milieu) quand tu fais ton calcul."
  }
];
