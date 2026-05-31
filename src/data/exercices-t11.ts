import { Exercise } from './exercices-t1';

export const exercicesT11: Exercise[] = [
  {
    id: 't11-ex1',
    level: 'BASE',
    points: 4,
    statement: `Résoudre les équations différentielles du premier ordre suivantes :
<br/><br/>a) $(E_1) : y' - 3y = 0$ <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>b) $(E_2) : 2y' + 5y = 0$, avec la condition initiale $y(0) = 4$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    steps: [
      {
        title: 'Question a)',
        content: `L'équation $y' - ay = 0$ (soit $y' = ay$) admet pour solutions générales les fonctions $y(x) = C e^{ax}$ avec $C \\in \\mathbb{R}$.<br/>
Ici $a = 3$, donc les solutions de $(E_1)$ sont les fonctions $y(x) = C e^{3x}$.`
      },
      {
        title: 'Question b)',
        content: `$2y' + 5y = 0 \\iff y' = -\\frac{5}{2}y$.<br/>
Les solutions générales sont $y(x) = C e^{-\\frac{5}{2}x}$.<br/>
On utilise la condition initiale : $y(0) = 4 \\implies C e^{0} = 4 \\implies C = 4$.<br/>
La solution particulière est $y(x) = 4 e^{-\\frac{5}{2}x}$.`
      }
    ],
    grandFrereNote: "Les équations différentielles du 1er ordre, c'est juste de l'exponentielle cachée. Transforme y' + ay = 0 en y' = -ay pour ne jamais te tromper de signe !"
  },
  {
    id: 't11-ex2',
    level: 'MOYEN',
    points: 6,
    statement: `Résoudre les équations différentielles du second ordre suivantes (sans second membre) :
<br/><br/>1. $(E_1) : y'' - 4y' + 3y = 0$ <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>2. $(E_2) : y'' + 6y' + 9y = 0$ <span class="text-sm text-gray-500 float-right">[3 pts]</span>`,
    steps: [
      {
        title: 'Question 1 : Equation E1',
        content: `L'équation caractéristique associée est $r^2 - 4r + 3 = 0$.<br/>
On calcule le discriminant $\\Delta = (-4)^2 - 4(1)(3) = 16 - 12 = 4$.<br/>
$\\Delta > 0$, il y a deux solutions réelles : $r_1 = \\frac{4-2}{2} = 1$ et $r_2 = \\frac{4+2}{2} = 3$.<br/>
La solution générale est $y(x) = A e^{r_1 x} + B e^{r_2 x} = A e^x + B e^{3x}$ avec $A, B \\in \\mathbb{R}$.`
      },
      {
        title: 'Question 2 : Equation E2',
        content: `L'équation caractéristique est $r^2 + 6r + 9 = 0$.<br/>
On remarque l'identité remarquable $(r+3)^2 = 0$, donc $\\Delta = 0$.<br/>
La solution double est $r_0 = -3$.<br/>
La solution générale est $y(x) = (Ax + B)e^{r_0 x} = (Ax + B)e^{-3x}$ avec $A, B \\in \\mathbb{R}$.`
      }
    ],
    grandFrereNote: "L'équation caractéristique transforme du calcul différentiel en une simple équation de 2nd degré. Si Delta > 0, deux exponentielles. Si Delta = 0, ajoute le '(Ax+B)'."
  },
  {
    id: 't11-ex3',
    level: 'BAC',
    points: 10,
    context: "Equation du 2nd ordre complexe",
    statement: `On considère l'équation différentielle $(E) : y'' + y' + y = 0$.
<br/><br/>1. Résoudre l'équation $(E)$ dans $\\mathbb{R}$. <span class="text-sm text-gray-500 float-right">[5 pts]</span>
<br/>2. Déterminer l'unique solution $f$ de $(E)$ vérifiant les conditions : $f(0) = 1$ et $f'(0) = 0$. <span class="text-sm text-gray-500 float-right">[5 pts]</span>`,
    steps: [
      {
        title: 'Question 1 : Résolution générale',
        content: `L'équation caractéristique est $r^2 + r + 1 = 0$.<br/>
$\\Delta = 1^2 - 4(1)(1) = 1 - 4 = -3$.<br/>
$\\Delta < 0$, les racines sont complexes conjuguées :<br/>
$r_1 = \\frac{-1 - i\\sqrt{3}}{2} = -\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}$ et $r_2 = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$.<br/>
La partie réelle est $\\alpha = -\\frac{1}{2}$ et la partie imaginaire est $\\beta = \\frac{\\sqrt{3}}{2}$.<br/>
La solution générale est : $y(x) = e^{\\alpha x} \\left( A \\cos(\\beta x) + B \\sin(\\beta x) \\right)$.<br/>
Soit $y(x) = e^{-\\frac{1}{2}x} \\left( A \\cos(\\frac{\\sqrt{3}}{2} x) + B \\sin(\\frac{\\sqrt{3}}{2} x) \\right)$ avec $A, B \\in \\mathbb{R}$.`
      },
      {
        title: 'Question 2 : Solution particulière',
        content: `On utilise $f(0) = 1$ :<br/>
$f(0) = e^0 (A \\cos(0) + B \\sin(0)) = 1 \\cdot (A \\cdot 1 + 0) = A$. Donc $A = 1$.<br/><br/>
On dérive $f(x)$ avec $A=1$ (forme $(uv)' = u'v+uv'$) :<br/>
$f(x) = e^{-x/2} \\left( \\cos(\\frac{\\sqrt{3}}{2} x) + B \\sin(\\frac{\\sqrt{3}}{2} x) \\right)$.<br/>
$f'(x) = -\\frac{1}{2} e^{-x/2} \\left( \\cos(...) + B \\sin(...) \\right) + e^{-x/2} \\left( -\\frac{\\sqrt{3}}{2} \\sin(...) + B \\frac{\\sqrt{3}}{2} \\cos(...) \\right)$.<br/><br/>
On utilise $f'(0) = 0$ :<br/>
$f'(0) = -\\frac{1}{2} (1 \\cdot (1 + 0)) + 1 \\cdot (0 + B \\frac{\\sqrt{3}}{2}) = 0$.<br/>
$-\\frac{1}{2} + B \\frac{\\sqrt{3}}{2} = 0 \\implies B \\frac{\\sqrt{3}}{2} = \\frac{1}{2} \\implies B = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$.<br/><br/>
La solution est $f(x) = e^{-\\frac{1}{2}x} \\left( \\cos(\\frac{\\sqrt{3}}{2}x) + \\frac{\\sqrt{3}}{3} \\sin(\\frac{\\sqrt{3}}{2}x) \\right)$.`
      }
    ],
    grandFrereNote: "C'est l'exercice de Bac par excellence. C'est du calcul pur et dur. Ne panique pas avec les grosses formules de dérivation, prends ton temps, ça finit toujours par se simplifier joliment."
  }
];
