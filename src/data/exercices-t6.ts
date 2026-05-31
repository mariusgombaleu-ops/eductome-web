import { Exercise } from './exercices-t1';

export const exercicesT6: Exercise[] = [
  {
    id: 't6-ex1',
    level: 'BASE',
    points: 4,
    statement: `1. Résoudre dans l'intervalle $]-\\pi; \\pi]$ l'équation : $\\cos(x) = \\frac{\\sqrt{3}}{2}$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>2. Exprimer $\\cos(2x)$ de 3 manières différentes en fonction de $\\cos(x)$ et $\\sin(x)$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    steps: [
      {
        title: 'Question 1',
        content: `On sait que $\\cos(\\frac{\\pi}{6}) = \\frac{\\sqrt{3}}{2}$.<br/>
L'équation devient $\\cos(x) = \\cos(\\frac{\\pi}{6})$.<br/>
Les solutions générales sont $x = \\frac{\\pi}{6} + 2k\\pi$ et $x = -\\frac{\\pi}{6} + 2k\\pi$ avec $k \\in \\mathbb{Z}$.<br/>
Dans $]-\\pi; \\pi]$, on prend $k=0$.<br/>
$S = \\{-\\frac{\\pi}{6} ; \\frac{\\pi}{6}\\}$`
      },
      {
        title: 'Question 2',
        content: `Les formules de duplication du cosinus à connaître par cœur :<br/>
1) $\\cos(2x) = \\cos^2(x) - \\sin^2(x)$<br/>
2) $\\cos(2x) = 2\\cos^2(x) - 1$<br/>
3) $\\cos(2x) = 1 - 2\\sin^2(x)$`
      }
    ],
    grandFrereNote: "Le cercle trigonométrique n'est pas une option, tu dois le dessiner au brouillon pour TOUS les exercices de trigo pour vérifier visuellement tes solutions."
  },
  {
    id: 't6-ex2',
    level: 'MOYEN',
    points: 6,
    statement: `Soit l'équation $(E) : \\sin(2x) + \\sin(x) = 0$.
<br/><br/>1. En utilisant la formule de duplication de $\\sin(2x)$, factoriser l'expression. <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>2. Résoudre $(E)$ dans l'intervalle $[0; 2\\pi[$. <span class="text-sm text-gray-500 float-right">[3 pts]</span>`,
    steps: [
      {
        title: 'Question 1 : Factorisation',
        content: `On sait que $\\sin(2x) = 2\\sin(x)\\cos(x)$.<br/>
L'équation devient : $2\\sin(x)\\cos(x) + \\sin(x) = 0$.<br/>
On factorise par $\\sin(x)$ :<br/>
$\\sin(x) \\left(2\\cos(x) + 1\\right) = 0$`
      },
      {
        title: 'Question 2 : Résolution',
        content: `Un produit est nul si et seulement si l'un de ses facteurs est nul.<br/>
Donc $\\sin(x) = 0$ OU $2\\cos(x) + 1 = 0 \\implies \\cos(x) = -\\frac{1}{2}$.<br/>
Dans $[0; 2\\pi[$, $\\sin(x) = 0$ donne $x=0$ et $x=\\pi$.<br/>
Pour $\\cos(x) = -\\frac{1}{2} = \\cos(\\frac{2\\pi}{3})$, on trouve $x = \\frac{2\\pi}{3}$ et $x = 2\\pi - \\frac{2\\pi}{3} = \\frac{4\\pi}{3}$.<br/>
Donc $S = \\{0 ; \\frac{2\\pi}{3} ; \\pi ; \\frac{4\\pi}{3}\\}$.`
      }
    ],
    grandFrereNote: "Transformer une somme en produit est la clé magique pour résoudre les équations trigonométriques complexes."
  },
  {
    id: 't6-ex3',
    level: 'BAC',
    points: 10,
    context: "Transformation de a*cos(x) + b*sin(x)",
    statement: `Soit la fonction $f(x) = \\sqrt{3}\\cos(x) - \\sin(x)$.
<br/><br/>1. Déterminer les réels $r > 0$ et $\\theta$ tels que $f(x) = r \\cos(x + \\theta)$. <span class="text-sm text-gray-500 float-right">[4 pts]</span>
<br/>2. Résoudre dans $\\mathbb{R}$ l'équation $f(x) = 1$. <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>3. Résoudre l'inéquation $f(x) > 1$ dans $]-\\pi; \\pi]$. <span class="text-sm text-gray-500 float-right">[3 pts]</span>`,
    steps: [
      {
        title: 'Question 1 : Transformation',
        content: `On pose $a = \\sqrt{3}$ et $b = -1$.<br/>
L'amplitude est $r = \\sqrt{a^2 + b^2} = \\sqrt{3 + (-1)^2} = \\sqrt{4} = 2$.<br/>
On factorise par 2 : $f(x) = 2 \\left(\\frac{\\sqrt{3}}{2}\\cos(x) - \\frac{1}{2}\\sin(x)\\right)$.<br/>
On cherche $\\theta$ tel que $\\cos(\\theta) = \\frac{\\sqrt{3}}{2}$ et $\\sin(\\theta) = \\frac{1}{2}$ (car la formule voulue est $\\cos(x)\\cos(\\theta) - \\sin(x)\\sin(\\theta)$).<br/>
L'angle correspondant est $\\theta = \\frac{\\pi}{6}$.<br/>
Donc $f(x) = 2 \\left(\\cos(x)\\cos(\\frac{\\pi}{6}) - \\sin(x)\\sin(\\frac{\\pi}{6})\\right) = 2\\cos(x + \\frac{\\pi}{6})$.`
      },
      {
        title: 'Question 2 : Résolution équation',
        content: `$f(x) = 1 \\iff 2\\cos(x + \\frac{\\pi}{6}) = 1 \\iff \\cos(x + \\frac{\\pi}{6}) = \\frac{1}{2}$.<br/>
On sait que $\\cos(\\frac{\\pi}{3}) = \\frac{1}{2}$.<br/>
$x + \\frac{\\pi}{6} = \\frac{\\pi}{3} + 2k\\pi \\implies x = \\frac{\\pi}{3} - \\frac{\\pi}{6} + 2k\\pi = \\frac{\\pi}{6} + 2k\\pi$<br/>
$x + \\frac{\\pi}{6} = -\\frac{\\pi}{3} + 2k\\pi \\implies x = -\\frac{\\pi}{3} - \\frac{\\pi}{6} + 2k\\pi = -\\frac{\\pi}{2} + 2k\\pi$<br/>
$S = \\{ \\frac{\\pi}{6} + 2k\\pi ; -\\frac{\\pi}{2} + 2k\\pi, k \\in \\mathbb{Z} \\}$.`
      },
      {
        title: 'Question 3 : Résolution inéquation',
        content: `$f(x) > 1 \\iff \\cos(x + \\frac{\\pi}{6}) > \\frac{1}{2}$.<br/>
Sur le cercle, le cosinus est supérieur à $1/2$ pour les angles compris entre $-\\frac{\\pi}{3}$ et $\\frac{\\pi}{3}$.<br/>
Donc $-\\frac{\\pi}{3} < x + \\frac{\\pi}{6} < \\frac{\\pi}{3}$ (à $2k\\pi$ près).<br/>
On retranche $\\frac{\\pi}{6}$ partout : $-\\frac{\\pi}{3} - \\frac{\\pi}{6} < x < \\frac{\\pi}{3} - \\frac{\\pi}{6}$.<br/>
$-\\frac{\\pi}{2} < x < \\frac{\\pi}{6}$.<br/>
L'ensemble de solution est $S = ]-\\frac{\\pi}{2} ; \\frac{\\pi}{6}[$.`
      }
    ],
    grandFrereNote: "Cette transformation a.cos(x) + b.sin(x) tombe littéralement CHAQUE année au bac d'une façon ou d'une autre. Le facteur r = √(a² + b²) est le pass-partout de la trigonométrie."
  }
];
