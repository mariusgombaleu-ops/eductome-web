import { Exercise } from './exercices-t1';

export const exercicesT6: Exercise[] = [
  {
    id: 't6-ex1',
    level: 'BASE',
    points: 4,
    testedConcept: "Résolution d'équations trigonométriques classiques et lecture du cercle.",
    statement: `Résoudre dans l'intervalle $I = ]-\\pi ; \\pi]$ l'équation suivante :
<br/><br/>
<div class="text-center text-xl my-4">$\\cos\\left(x + \\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}$</div>`,
    correction: {
      questions: [
        {
          label: "Résolution de l'équation",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `On cherche à résoudre une équation de la forme $\\cos(X) = a$. Il faut trouver quel angle remarquable a pour cosinus $\\frac{\\sqrt{3}}{2}$.`
            },
            {
              type: 'STRATEGIE',
              content: `1. Remplacer $\\frac{\\sqrt{3}}{2}$ par $\\cos(\\alpha)$ avec une valeur connue du tableau.<br/>
2. Appliquer la règle de cours : $\\cos(X) = \\cos(\\alpha) \\iff X = \\alpha + 2k\\pi$ OU $X = -\\alpha + 2k\\pi$ (avec $k \\in \\mathbb{Z}$).<br/>
3. Isoler $x$ dans les deux cas.<br/>
4. Chercher les valeurs de $k$ pour que $x$ appartienne à l'intervalle $]-\\pi ; \\pi]$.`
            },
            {
              type: 'CALCUL',
              content: `On sait d'après le cours que $\\cos\\left(\\frac{\\pi}{6}\\right) = \\frac{\\sqrt{3}}{2}$.<br/>
L'équation devient : $\\cos\\left(x + \\frac{\\pi}{3}\\right) = \\cos\\left(\\frac{\\pi}{6}\\right)$.<br/><br/>
**1er cas :**<br/>
$x + \\frac{\\pi}{3} = \\frac{\\pi}{6} + 2k\\pi$<br/>
$x = \\frac{\\pi}{6} - \\frac{\\pi}{3} + 2k\\pi$<br/>
$x = \\frac{\\pi}{6} - \\frac{2\\pi}{6} + 2k\\pi$<br/>
$x_1 = -\\frac{\\pi}{6} + 2k\\pi$<br/><br/>
**2ème cas :**<br/>
$x + \\frac{\\pi}{3} = -\\frac{\\pi}{6} + 2k\\pi$<br/>
$x = -\\frac{\\pi}{6} - \\frac{\\pi}{3} + 2k\\pi$<br/>
$x = -\\frac{\\pi}{6} - \\frac{2\\pi}{6} + 2k\\pi$<br/>
$x_2 = -\\frac{3\\pi}{6} + 2k\\pi$<br/>
$x_2 = -\\frac{\\pi}{2} + 2k\\pi$<br/><br/>
**Sélection des solutions dans $]-\\pi ; \\pi]$ :**<br/>
- Pour $x_1$, si $k=0$, on a $x = -\\frac{\\pi}{6}$ (qui est dans l'intervalle). Si $k=1$, ça déborde.<br/>
- Pour $x_2$, si $k=0$, on a $x = -\\frac{\\pi}{2}$ (qui est dans l'intervalle).`
            },
            {
              type: 'PIEGE',
              content: `**Oublier le signe MOINS (le 2ème cas).**<br/>
Le cosinus est "pair", ce qui veut dire que la valeur en haut du cercle ($\\pi/6$) et en bas ($-\\pi/6$) donnent le MÊME cosinus sur l'axe des abscisses. N'oublie jamais de traiter les deux branches : $\\alpha$ et $-\\alpha$.`
            },
            {
              type: 'CONCLUSION',
              content: `L'ensemble des solutions dans $]-\\pi ; \\pi]$ est $S = \\left\\{ -\\frac{\\pi}{2} ; -\\frac{\\pi}{6} \\right\\}$.`
            }
          ]
        }
      ],
      noteGrandFrere: "Pour maîtriser ce chapitre, il n'y a pas de secret : il faut connaître le cercle trigonométrique par cœur. Au brouillon, trace toujours un cercle rapide pour visualiser tes angles."
    }
  },
  {
    id: 't6-ex2',
    level: 'MOYEN',
    points: 6,
    testedConcept: "Dérivation de fonctions trigonométriques composées.",
    statement: `On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = \\sin^2(2x) - \\cos(x)$.
<br/><br/>Calculer la fonction dérivée $f'(x)$ pour tout réel $x$.`,
    correction: {
      questions: [
        {
          label: "Calcul de f'(x)",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `On doit dériver une somme/différence de deux termes :<br/>
1. Le terme $\\sin^2(2x)$ est de la forme $u^2$. Sa dérivée est $2u'u$.<br/>
Attention, $u(x) = \\sin(2x)$, donc c'est elle-même une fonction composée de type $\\sin(v)$. Sa dérivée est $v' \\cos(v)$.<br/>
2. Le terme $\\cos(x)$ a pour dérivée $-\\sin(x)$.`
            },
            {
              type: 'CALCUL',
              content: `Dérivons d'abord le bloc délicat : $A(x) = \\sin^2(2x)$.<br/>
Posons $u(x) = \\sin(2x)$.<br/>
On a $u'(x) = 2\\cos(2x)$ (car la dérivée de $\\sin(ax)$ est $a\\cos(ax)$).<br/>
La formule pour $u^2$ donne $2 u' u$.<br/>
Donc $A'(x) = 2 \\times [2\\cos(2x)] \\times [\\sin(2x)]$<br/>
$A'(x) = 4 \\cos(2x) \\sin(2x)$.<br/><br/>
Dérivons l'autre bloc : $B(x) = \\cos(x)$.<br/>
$B'(x) = -\\sin(x)$.<br/><br/>
Assemblons le tout pour $f(x) = A(x) - B(x)$ :<br/>
$f'(x) = A'(x) - B'(x)$<br/>
$f'(x) = 4 \\cos(2x) \\sin(2x) - (-\\sin(x))$<br/>
$f'(x) = 4 \\cos(2x) \\sin(2x) + \\sin(x)$.`
            },
            {
              type: 'ASTUCE',
              content: `Pour simplifier $4 \\cos(2x) \\sin(2x)$, on peut se rappeler de la formule de duplication : $\\sin(2\\alpha) = 2\\sin(\\alpha)\\cos(\\alpha)$.<br/>
Ici avec $\\alpha = 2x$, on a $2\\sin(2x)\\cos(2x) = \\sin(4x)$.<br/>
Donc $4 \\cos(2x) \\sin(2x) = 2 \\sin(4x)$. C'est plus joli pour la suite !`
            },
            {
              type: 'CONCLUSION',
              content: `Pour tout $x \\in \\mathbb{R}$, $f'(x) = 2\\sin(4x) + \\sin(x)$.`
            }
          ]
        }
      ],
      noteGrandFrere: "La dérivée de sin²(ax) est l'une des bêtes noires des candidats au BAC. Procède étape par étape. Si tu fais tout d'un coup de tête, tu vas oublier le 'a' ou le '2'."
    }
  },
  {
    id: 't6-ex3',
    level: 'BAC',
    points: 10,
    contextBac: { format: "Étude de Fonction", serie: "Série D", dureeConseillee: 25 },
    testedConcept: "Étude complète d'une fonction trigonométrique (Parité, Périodicité, Variations).",
    statement: `Soit $h$ la fonction définie sur $\\mathbb{R}$ par $h(x) = \\cos(2x) - 2\\cos(x)$.

<br/><br/>1. Montrer que $h$ est paire et périodique de période $2\\pi$. En déduire qu'il suffit d'étudier $h$ sur $[0 ; \\pi]$. <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>2. Démontrer que pour tout $x \\in \\mathbb{R}$, $h'(x) = 2\\sin(x)(1 - 2\\cos(x))$. <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>3. Étudier le signe de $h'(x)$ sur l'intervalle $[0 ; \\pi]$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>4. Dresser le tableau de variations de $h$ sur $[0 ; \\pi]$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    correction: {
      repartitionTemps: [
        { question: "Q1", duree: 5, description: "Calcul de h(-x) et h(x+2π)" },
        { question: "Q2", duree: 7, description: "Dérivée et factorisation astucieuse" },
        { question: "Q3", duree: 8, description: "Résolution de (1 - 2cos(x)) = 0" },
        { question: "Q4", duree: 5, description: "Synthèse et calcul des extremums" }
      ],
      questions: [
        {
          label: "1. Parité et Périodicité",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `1. Calculer $h(-x)$ en se rappelant que $\\cos(-A) = \\cos(A)$.<br/>
2. Calculer $h(x + 2\\pi)$ en se rappelant que $\\cos(A + 2\\pi) = \\cos(A)$.<br/>
3. Réduire l'intervalle d'étude.`
            },
            {
              type: 'CALCUL',
              content: `**Parité :**<br/>
$h(-x) = \\cos(2(-x)) - 2\\cos(-x)$<br/>
$h(-x) = \\cos(-2x) - 2\\cos(-x)$<br/>
La fonction cosinus absorbe le signe "moins", donc :<br/>
$h(-x) = \\cos(2x) - 2\\cos(x) = h(x)$.<br/>
La fonction est donc **paire**. La courbe sera symétrique par rapport à l'axe des ordonnées.<br/><br/>
**Périodicité :**<br/>
$h(x + 2\\pi) = \\cos(2(x + 2\\pi)) - 2\\cos(x + 2\\pi)$<br/>
$h(x + 2\\pi) = \\cos(2x + 4\\pi) - 2\\cos(x)$<br/>
$4\\pi$ c'est exactement 2 tours complets du cercle, donc $\\cos(2x + 4\\pi) = \\cos(2x)$.<br/>
$h(x + 2\\pi) = \\cos(2x) - 2\\cos(x) = h(x)$.<br/>
La fonction est **périodique de période $2\\pi$**.<br/><br/>
**Réduction de l'intervalle :**<br/>
Grâce à la période $2\\pi$, on peut étudier $h$ sur $[-\\pi ; \\pi]$.<br/>
Grâce à la parité, on peut encore couper en deux et l'étudier uniquement sur la partie positive : $[0 ; \\pi]$.`
            }
          ]
        },
        {
          label: "2. Dérivée de h",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `1. Dériver $h$ en utilisant la dérivée en chaîne.<br/>
2. Factoriser le résultat en utilisant une formule de duplication : $\\sin(2x) = 2\\sin(x)\\cos(x)$.`
            },
            {
              type: 'CALCUL',
              content: `Dérivée de $\\cos(2x)$ : on sort le $2$ et $\\cos$ devient $-\\sin$. Donc $-2\\sin(2x)$.<br/>
Dérivée de $-2\\cos(x)$ : le $-2$ reste, $\\cos$ devient $-\\sin$, ce qui donne $+2\\sin(x)$.<br/>
Donc :<br/>
$h'(x) = -2\\sin(2x) + 2\\sin(x)$.<br/><br/>
Utilisons la formule $\\sin(2x) = 2\\sin(x)\\cos(x)$ :<br/>
$h'(x) = -2 \\times (2\\sin(x)\\cos(x)) + 2\\sin(x)$<br/>
$h'(x) = -4\\sin(x)\\cos(x) + 2\\sin(x)$<br/><br/>
On met $2\\sin(x)$ en facteur :<br/>
$h'(x) = 2\\sin(x) \\left[ -2\\cos(x) + 1 \\right]$<br/>
$h'(x) = 2\\sin(x)(1 - 2\\cos(x))$.`
            },
            {
              type: 'CONCLUSION',
              content: `L'expression demandée est correcte.`
            }
          ]
        },
        {
          label: "3. Signe de la dérivée sur [0; π]",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `Il faut étudier séparément le signe de $2\\sin(x)$ et de $1 - 2\\cos(x)$ sur $[0; \\pi]$, puis faire un tableau de signe.`
            },
            {
              type: 'CALCUL',
              content: `Sur l'intervalle $[0; \\pi]$ (le demi-cercle supérieur) :<br/>
- La fonction $\\sin(x)$ est toujours positive (au-dessus de l'axe des abscisses). Donc $2\\sin(x) \\geq 0$.<br/>
Le signe de $h'(x)$ dépend donc uniquement de la parenthèse $(1 - 2\\cos(x))$.<br/><br/>
Résolvons l'inéquation :<br/>
$1 - 2\\cos(x) > 0$<br/>
$1 > 2\\cos(x)$<br/>
$\\cos(x) < \\frac{1}{2}$<br/><br/>
Sur $[0; \\pi]$, on sait que $\\cos(\\frac{\\pi}{3}) = \\frac{1}{2}$.<br/>
Sur le cercle, le cosinus se lit sur l'axe horizontal. Il est "plus petit que 1/2" quand on est à *gauche* de l'angle $\\frac{\\pi}{3}$.<br/>
Donc $\\cos(x) < \\frac{1}{2}$ correspond à l'intervalle $] \\frac{\\pi}{3} ; \\pi ]$.`
            },
            {
              type: 'CONCLUSION',
              content: `Sur $[0 ; \\frac{\\pi}{3}[$, $h'(x) < 0$.<br/>
En $x = \\frac{\\pi}{3}$, $h'(x) = 0$.<br/>
Sur $] \\frac{\\pi}{3} ; \\pi ]$, $h'(x) > 0$.`
            }
          ]
        },
        {
          label: "4. Tableau de variations",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `Calculer les valeurs de la fonction aux bornes ($0$ et $\\pi$) et au point critique ($\\pi/3$), puis tracer les flèches.`
            },
            {
              type: 'CALCUL',
              content: `$h(0) = \\cos(0) - 2\\cos(0) = 1 - 2(1) = -1$<br/><br/>
$h\\left(\\frac{\\pi}{3}\\right) = \\cos\\left(\\frac{2\\pi}{3}\\right) - 2\\cos\\left(\\frac{\\pi}{3}\\right)$<br/>
On sait que $\\cos\\left(\\frac{2\\pi}{3}\\right) = -\\frac{1}{2}$ et $\\cos\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$.<br/>
$h\\left(\\frac{\\pi}{3}\\right) = -\\frac{1}{2} - 2\\left(\\frac{1}{2}\\right) = -\\frac{1}{2} - 1 = -\\frac{3}{2} = -1.5$<br/><br/>
$h(\\pi) = \\cos(2\\pi) - 2\\cos(\\pi) = 1 - 2(-1) = 1 + 2 = 3$`
            },
            {
              type: 'CONCLUSION',
              content: `Le tableau montre :<br/>
- De $0$ à $\\pi/3$ : fonction décroissante (de $-1$ à $-1.5$).<br/>
- De $\\pi/3$ à $\\pi$ : fonction croissante (de $-1.5$ à $3$).`
            }
          ]
        }
      ],
      dialogue: [
        {
          petitFrere: "Mais si l'énoncé dit d'étudier sur R, pourquoi on ne fait qu'une petite partie [0; pi] ?",
          grandFrere: "C'est l'élégance des maths ! La fonction est un motif qui se répète (périodique) et qui est symétrique comme un miroir (paire). Si tu connais la forme de la courbe entre 0 et pi, tu fais un reflet pour avoir entre -pi et 0, puis tu copies-colles ce bloc de 2pi à l'infini !"
        }
      ],
      astuces: [
        "Réduire l'intervalle d'étude c'est du temps gagné. Si le sujet du BAC te le demande, cherche systématiquement une parité (f(-x)) et une périodicité (f(x+T))."
      ],
      noteGrandFrere: "L'étude de signe d'une expression trigo (Q3) nécessite toujours de repasser par le cercle trigonométrique. Ne fais jamais l'inéquation 'à l'aveugle', trace un petit cercle sur ta feuille de brouillon."
    }
  }
];
