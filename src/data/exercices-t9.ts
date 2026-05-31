import { Exercise } from './exercices-t1';

export const exercicesT9: Exercise[] = [
  {
    id: 't9-ex1',
    tome: 9,
    numero: 1,
    level: 'BASE',
    points: 4,
    testedConcept: "Produit vectoriel et équation cartésienne de plan.",
    statement: `L'espace est rapporté à un repère orthonormé direct $(O; \\vec{i}, \\vec{j}, \\vec{k})$. 
On donne les points $A(1; 2; 0)$, $B(2; 1; 1)$ et $C(0; 2; 1)$.
<br/><br/>
a) Calculer les coordonnées du vecteur $\\vec{n} = \\vec{AB} \\wedge \\vec{AC}$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>b) En déduire une équation cartésienne du plan $(ABC)$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    correction: {
      questions: [
        {
          label: "a) Calcul du produit vectoriel",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `1. Calculer les coordonnées des vecteurs $\\vec{AB}$ et $\\vec{AC}$.<br/>
2. Appliquer la formule du produit vectoriel (en utilisant la technique des déterminants).`
            },
            {
              type: 'CALCUL',
              content: `Coordonnées de $\\vec{AB}$ :<br/>
$x_B - x_A = 2 - 1 = 1$<br/>
$y_B - y_A = 1 - 2 = -1$<br/>
$z_B - z_A = 1 - 0 = 1$<br/>
Donc $\\vec{AB}(1; -1; 1)$.<br/><br/>
Coordonnées de $\\vec{AC}$ :<br/>
$x_C - x_A = 0 - 1 = -1$<br/>
$y_C - y_A = 2 - 2 = 0$<br/>
$z_C - z_A = 1 - 0 = 1$<br/>
Donc $\\vec{AC}(-1; 0; 1)$.<br/><br/>
Calcul du produit vectoriel $\\vec{n} = \\vec{AB} \\wedge \\vec{AC}$ :<br/>
- Abscisse : $(-1 \\times 1) - (1 \\times 0) = -1 - 0 = -1$<br/>
- Ordonnée : $-[ (1 \\times 1) - (1 \\times -1) ] = -[ 1 - (-1) ] = -2$<br/>
- Cote : $(1 \\times 0) - (-1 \\times -1) = 0 - 1 = -1$<br/>`
            },
            {
              type: 'CONCLUSION',
              content: `Le vecteur normal au plan est $\\vec{n}(-1; -2; -1)$.`
            }
          ]
        },
        {
          label: "b) Équation du plan",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `Une équation de plan s'écrit $ax + by + cz + d = 0$ où $(a, b, c)$ sont les coordonnées d'un vecteur normal. Ensuite, on utilise un point du plan (comme A) pour trouver $d$.`
            },
            {
              type: 'CALCUL',
              content: `Avec $\\vec{n}(-1; -2; -1)$, l'équation est de la forme :<br/>
$-x - 2y - z + d = 0$.<br/><br/>
Le plan passe par le point $A(1; 2; 0)$, ses coordonnées vérifient donc l'équation :<br/>
$-(1) - 2(2) - (0) + d = 0$<br/>
$-1 - 4 + d = 0$<br/>
$-5 + d = 0 \\implies d = 5$.`
            },
            {
              type: 'PIEGE',
              content: `**Erreur de signe sur le déterminant central (y).**<br/>
La formule du produit vectoriel a un signe "MOINS" devant le déterminant du milieu. C'est l'erreur la plus fréquente le jour de l'examen. Ne l'oublie jamais !`
            },
            {
              type: 'CONCLUSION',
              content: `L'équation du plan $(ABC)$ est : $-x - 2y - z + 5 = 0$.<br/>
(On peut aussi tout multiplier par $-1$ pour écrire $x + 2y + z - 5 = 0$, c'est pareil et plus joli !)`
            }
          ]
        }
      ],
      noteGrandFrere: "Le produit vectoriel est l'outil ultime de la géométrie dans l'espace. Si tu sais le calculer sans erreur de signe, tu as déjà 40% des points de l'exercice du BAC."
    }
  },
  {
    id: 't9-ex2',
    tome: 9,
    numero: 2,
    level: 'MOYEN',
    points: 6,
    testedConcept: "Distance d'un point à un plan et sphère tangente.",
    statement: `On considère le plan $(P)$ d'équation $x + 2y + z - 5 = 0$ et le point $\\Omega(1; 1; -2)$.
<br/><br/>1. Calculer la distance du point $\\Omega$ au plan $(P)$, notée $d(\\Omega, P)$. <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>2. En déduire l'équation cartésienne de la sphère $(S)$ de centre $\\Omega$ et tangente au plan $(P)$. <span class="text-sm text-gray-500 float-right">[3 pts]</span>`,
    correction: {
      questions: [
        {
          label: "1. Distance point-plan",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `Il faut utiliser la formule directe de la distance d'un point à un plan :<br/>
$d = \\frac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^2 + b^2 + c^2}}$.`
            },
            {
              type: 'CALCUL',
              content: `Ici, les coefficients du plan sont $a=1, b=2, c=1$ et $d=-5$.<br/>
Les coordonnées du point sont $x_0=1, y_0=1, z_0=-2$.<br/><br/>
On remplace dans le numérateur (valeur absolue) :<br/>
$|1(1) + 2(1) + 1(-2) - 5| = |1 + 2 - 2 - 5| = |-4| = 4$.<br/><br/>
On remplace dans le dénominateur (norme du vecteur normal) :<br/>
$\\sqrt{1^2 + 2^2 + 1^2} = \\sqrt{1 + 4 + 1} = \\sqrt{6}$.<br/><br/>
Donc $d(\\Omega, P) = \\frac{4}{\\sqrt{6}}$.`
            },
            {
              type: 'PIEGE',
              content: `Ne laisse jamais une racine carrée au dénominateur ! Multiplie en haut et en bas par $\\sqrt{6}$ :<br/>
$\\frac{4}{\\sqrt{6}} = \\frac{4\\sqrt{6}}{6} = \\frac{2\\sqrt{6}}{3}$.`
            },
            {
              type: 'CONCLUSION',
              content: `La distance est $d(\\Omega, P) = \\frac{2\\sqrt{6}}{3}$.`
            }
          ]
        },
        {
          label: "2. Équation de la sphère",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `1. Une sphère tangente à un plan a pour rayon $R = d(\\text{Centre}, \\text{Plan})$.<br/>
2. Utiliser la formule classique de la sphère : $(x - x_{\\Omega})^2 + (y - y_{\\Omega})^2 + (z - z_{\\Omega})^2 = R^2$.`
            },
            {
              type: 'CALCUL',
              content: `Puisque $(S)$ est tangente à $(P)$, son rayon est $R = \\frac{4}{\\sqrt{6}}$.<br/>
Calculons $R^2$ :<br/>
$R^2 = \\left(\\frac{4}{\\sqrt{6}}\\right)^2 = \\frac{16}{6} = \\frac{8}{3}$.<br/><br/>
On applique la formule de la sphère avec le centre $\\Omega(1; 1; -2)$ :<br/>
$(x - 1)^2 + (y - 1)^2 + (z - (-2))^2 = \\frac{8}{3}$<br/>
$(x - 1)^2 + (y - 1)^2 + (z + 2)^2 = \\frac{8}{3}$.`
            },
            {
              type: 'CONCLUSION',
              content: `L'équation cartésienne de la sphère $(S)$ est :<br/> $(x - 1)^2 + (y - 1)^2 + (z + 2)^2 = \\frac{8}{3}$.<br/>(On peut aussi la développer, mais cette forme est parfaitement valide et plus parlante).`
            }
          ]
        }
      ],
      noteGrandFrere: "Le concept 'Tangente' en géométrie de l'espace veut toujours dire 'La distance est égale au rayon'. C'est une traduction mathématique automatique que ton cerveau doit faire."
    }
  },
  {
    id: 't9-ex3',
    tome: 9,
    numero: 3,
    level: 'BAC',
    points: 10,
    contextBac: { format: "Problème sur un Tétraèdre", serie: "Série D", dureeConseillee: 25 },
    testedConcept: "Volume d'un tétraèdre, représentation paramétrique d'une droite, et intersection droite-plan.",
    statement: `On donne les points $A(1; 2; 0)$, $B(2; 1; 1)$, $C(0; 2; 1)$ et le point $S(3; 3; 3)$. Le plan $(ABC)$ a pour équation $x + 2y + z - 5 = 0$.

<br/>1. Déterminer une représentation paramétrique de la droite $(\\Delta)$ passant par $S$ et orthogonale au plan $(ABC)$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>2. Déterminer les coordonnées du point $H$, projeté orthogonal de $S$ sur le plan $(ABC)$. <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>3. Calculer la distance $SH$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>4. Sachant que l'aire du triangle $ABC$ est $\\mathcal{A} = \\frac{\\sqrt{6}}{2}$ u.a., calculer le volume du tétraèdre $SABC$. <span class="text-sm text-gray-500 float-right">[3 pts]</span>`,
    correction: {
      repartitionTemps: [
        { question: "Q1", duree: 5, description: "Paramétrage de droite" },
        { question: "Q2", duree: 10, description: "Résolution d'équation en t (intersection)" },
        { question: "Q3", duree: 5, description: "Distance entre deux points" },
        { question: "Q4", duree: 5, description: "Formule du volume 1/3 Base x Hauteur" }
      ],
      questions: [
        {
          label: "1. Représentation paramétrique de (Δ)",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `Pour trouver une droite, il faut un **point** et un **vecteur directeur**.<br/>
- Le point est $S(3; 3; 3)$.<br/>
- Puisque la droite est orthogonale au plan $(ABC)$, le vecteur normal du plan $\\vec{n}(1; 2; 1)$ est un vecteur directeur pour la droite.`
            },
            {
              type: 'CALCUL',
              content: `La représentation paramétrique s'écrit :<br/>
$\\begin{cases} x = x_S + t \\cdot x_n \\\\ y = y_S + t \\cdot y_n \\\\ z = z_S + t \\cdot z_n \\end{cases} \\quad (t \\in \\mathbb{R})$<br/><br/>
On remplace par les valeurs :<br/>
$\\begin{cases} x = 3 + t \\\\ y = 3 + 2t \\\\ z = 3 + t \\end{cases} \\quad (t \\in \\mathbb{R})$`
            }
          ]
        },
        {
          label: "2. Coordonnées de H",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `Le projeté orthogonal $H$ est exactement le point d'intersection entre la droite $(\\Delta)$ et le plan $(ABC)$.`
            },
            {
              type: 'CALCUL',
              content: `On injecte les expressions de $x, y, z$ de la droite dans l'équation du plan :<br/>
$x + 2y + z - 5 = 0$<br/>
$(3 + t) + 2(3 + 2t) + (3 + t) - 5 = 0$<br/>
$3 + t + 6 + 4t + 3 + t - 5 = 0$<br/><br/>
On regroupe les $t$ et les constantes :<br/>
$6t + 7 = 0 \\implies 6t = -7 \\implies t = -\\frac{7}{6}$.<br/><br/>
Maintenant, on remplace $t$ dans le système pour trouver $x_H, y_H, z_H$ :<br/>
$x_H = 3 - \\frac{7}{6} = \\frac{18 - 7}{6} = \\frac{11}{6}$<br/>
$y_H = 3 + 2\\left(-\\frac{7}{6}\\right) = 3 - \\frac{14}{6} = \\frac{18 - 14}{6} = \\frac{4}{6} = \\frac{2}{3}$<br/>
$z_H = 3 - \\frac{7}{6} = \\frac{11}{6}$`
            },
            {
              type: 'CONCLUSION',
              content: `Le point $H$ a pour coordonnées $H\\left(\\frac{11}{6}; \\frac{2}{3}; \\frac{11}{6}\\right)$.`
            }
          ]
        },
        {
          label: "3. Calcul de la distance SH",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `On peut utiliser la formule de la distance entre deux points $S$ et $H$, OU se rappeler que $SH$ est exactement la distance du point $S$ au plan $(ABC)$ ! Utilisons la formule $d(S, P)$ qui est bien plus rapide et évite les fractions lourdes.`
            },
            {
              type: 'CALCUL',
              content: `$SH = \\frac{|x_S + 2y_S + z_S - 5|}{\\sqrt{1^2 + 2^2 + 1^2}}$<br/>
$SH = \\frac{|3 + 2(3) + 3 - 5|}{\\sqrt{6}}$<br/>
$SH = \\frac{|3 + 6 + 3 - 5|}{\\sqrt{6}} = \\frac{|7|}{\\sqrt{6}} = \\frac{7}{\\sqrt{6}}$.`
            },
            {
              type: 'PIEGE',
              content: `On rationalise : $\\frac{7\\sqrt{6}}{6}$. C'était beaucoup plus rapide que de faire $\\sqrt{(x_H - x_S)^2 + ...}$ !`
            }
          ]
        },
        {
          label: "4. Volume du tétraèdre",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `La formule du volume d'une pyramide (ou tétraèdre) est $\\mathcal{V} = \\frac{1}{3} \\times \\text{Aire de la base} \\times \\text{Hauteur}$.`
            },
            {
              type: 'CALCUL',
              content: `Ici, la base est le triangle $ABC$. Son aire est donnée : $\\mathcal{A} = \\frac{\\sqrt{6}}{2}$.<br/>
La hauteur issue de $S$ est exactement la distance $SH = \\frac{7}{\\sqrt{6}}$.<br/><br/>
$\\mathcal{V} = \\frac{1}{3} \\times \\frac{\\sqrt{6}}{2} \\times \\frac{7}{\\sqrt{6}}$<br/>
Les $\\sqrt{6}$ s'annulent en haut et en bas !<br/>
$\\mathcal{V} = \\frac{1}{3} \\times \\frac{1}{2} \\times 7 = \\frac{7}{6}$.`
            },
            {
              type: 'CONCLUSION',
              content: `Le volume du tétraèdre $SABC$ est de $\\frac{7}{6}$ unités de volume.`
            }
          ]
        }
      ],
      dialogue: [
        {
          petitFrere: "Mais grand frère, pourquoi on appelle ça un tétraèdre et pas juste une pyramide ?",
          grandFrere: "Une pyramide peut avoir une base carrée (comme en Égypte). Un tétraèdre, c'est une pyramide spéciale où TOUTES les 4 faces sont des triangles. 'Tétra' = 4. Et pour calculer son volume, la hauteur c'est TOUJOURS la distance du sommet au plan de la base. Retiens ce lien magique !"
        }
      ],
      noteGrandFrere: "Cet exercice est l'enchaînement parfait au BAC. Paramétrage de droite -> Intersection (Projeté orthogonal) -> Distance -> Volume. Si tu sais faire ces 4 étapes, tu es le roi de la géométrie."
    }
  }
];
