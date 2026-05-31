import { Exercise } from './exercices-t1';

export const exercicesT3: Exercise[] = [
  {
    id: 't3-ex1',
    level: 'BASE',
    points: 4,
    statement: `Trouver une primitive $F(x)$ pour chacune des fonctions $f(x)$ suivantes :
<br/>a) $f(x) = 4x^3 - 2x + 5$ <span class="text-sm text-gray-500 float-right">[1 pt]</span>
<br/>b) $f(x) = \\frac{1}{x^2} + \\sin(x)$ <span class="text-sm text-gray-500 float-right">[1 pt]</span>
<br/>c) $f(x) = \\frac{2x}{x^2 + 1}$ <span class="text-sm text-gray-500 float-right">[1 pt]</span>
<br/>d) $f(x) = e^{3x}$ <span class="text-sm text-gray-500 float-right">[1 pt]</span>`,
    steps: [
      {
        title: 'a)',
        content: `$F(x) = 4\\left(\\frac{x^4}{4}\\right) - 2\\left(\\frac{x^2}{2}\\right) + 5x = x^4 - x^2 + 5x + C$`
      },
      {
        title: 'b)',
        content: `On sait que $\\frac{1}{x^2} = x^{-2}$. Une primitive est $\\frac{x^{-1}}{-1} = -\\frac{1}{x}$.<br/>
Une primitive de $\\sin(x)$ est $-\\cos(x)$.<br/>
Donc $F(x) = -\\frac{1}{x} - \\cos(x) + C$`
      },
      {
        title: 'c)',
        content: `On reconnaît la forme $\\frac{u'}{u}$ avec $u(x) = x^2 + 1$.<br/>
Une primitive de $\\frac{u'}{u}$ est $\\ln|u|$.<br/>
$F(x) = \\ln(x^2 + 1) + C$ (la valeur absolue est inutile car $x^2+1 > 0$)`
      },
      {
        title: 'd)',
        content: `La primitive de $e^{ax}$ est $\\frac{1}{a}e^{ax}$.<br/>
Ici $a=3$, donc $F(x) = \\frac{1}{3}e^{3x} + C$`
      }
    ],
    grandFrereNote: "La constante C est techniquement obligatoire, mais au Bac, on te demandera souvent 'une' primitive, donc tu peux l'omettre. Pour les intégrales, elle s'annule de toute façon !"
  },
  {
    id: 't3-ex2',
    level: 'MOYEN',
    points: 6,
    statement: `Calculer les intégrales suivantes :
<br/><br/>1. $I = \\int_0^1 (3x^2 - x + 2) \\, dx$ <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>2. $J = \\int_0^{\\pi/2} \\cos(x)\\sin^2(x) \\, dx$ <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>3. $K = \\int_1^e \\frac{\\ln(x)}{x} \\, dx$ <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    steps: [
      {
        title: 'Question 1',
        content: `Une primitive de $3x^2 - x + 2$ est $x^3 - \\frac{x^2}{2} + 2x$.<br/>
$I = \\left[ x^3 - \\frac{x^2}{2} + 2x \\right]_0^1 = \\left( 1^3 - \\frac{1^2}{2} + 2(1) \\right) - (0) = 1 - 0.5 + 2 = 2.5 = \\frac{5}{2}$`
      },
      {
        title: 'Question 2',
        content: `On reconnaît la forme $u' u^n$ avec $u(x) = \\sin(x)$ et $n=2$, donc $u'(x) = \\cos(x)$.<br/>
Une primitive de $u' u^2$ est $\\frac{u^3}{3}$.<br/>
$J = \\left[ \\frac{\\sin^3(x)}{3} \\right]_0^{\\pi/2} = \\frac{\\sin^3(\\pi/2)}{3} - \\frac{\\sin^3(0)}{3} = \\frac{1^3}{3} - 0 = \\frac{1}{3}$`
      },
      {
        title: 'Question 3',
        content: `On peut écrire $\\frac{\\ln(x)}{x} = \\frac{1}{x} \\cdot \\ln(x)$. C'est la forme $u' u^1$ avec $u(x) = \\ln(x)$ et $u'(x) = \\frac{1}{x}$.<br/>
Une primitive est donc $\\frac{u^2}{2} = \\frac{(\\ln(x))^2}{2}$.<br/>
$K = \\left[ \\frac{(\\ln(x))^2}{2} \\right]_1^e = \\frac{(\\ln(e))^2}{2} - \\frac{(\\ln(1))^2}{2} = \\frac{1^2}{2} - 0 = \\frac{1}{2}$`
      }
    ],
    grandFrereNote: "L'astuce suprême pour les intégrales compliquées, c'est de chercher u'/u ou u'u^n. Regarde toujours la relation de dérivation entre le numérateur et le dénominateur ou entre les facteurs."
  },
  {
    id: 't3-ex3',
    level: 'BAC',
    points: 10,
    context: "Méthode d'Intégration par parties - Indispensable",
    statement: `1. À l'aide d'une intégration par parties, calculer $L = \\int_0^1 x e^x \\, dx$. <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>2. Calculer l'aire $\\mathcal{A}$, en unité d'aire, du domaine délimité par la courbe représentative de $f(x) = (x-1)e^x$, l'axe des abscisses et les droites d'équation $x = 0$ et $x = 1$. <span class="text-sm text-gray-500 float-right">[4 pts]</span>
<br/>3. (Bonus) Calculer $\\int_1^e x \\ln(x) \\, dx$. <span class="text-sm text-gray-500 float-right">[3 pts]</span>`,
    steps: [
      {
        title: 'Question 1 : IPP',
        content: `On pose $u(x) = x \\implies u'(x) = 1$<br/>
$v'(x) = e^x \\implies v(x) = e^x$<br/>
La formule est : $\\int u v' = [u v] - \\int u' v$<br/>
$L = [x e^x]_0^1 - \\int_0^1 1 \\cdot e^x \\, dx = (1 \\cdot e^1 - 0) - [e^x]_0^1$<br/>
$L = e - (e^1 - e^0) = e - (e - 1) = 1$`
      },
      {
        title: 'Question 2 : Calcul d\'aire',
        content: `Sur $[0, 1]$, $x-1 \\leq 0$ et $e^x > 0$, donc $f(x) \\leq 0$.<br/>
L'aire est donc $\\mathcal{A} = \\int_0^1 (0 - f(x)) \\, dx = - \\int_0^1 (x-1)e^x \\, dx$.<br/>
On développe : $- \\int_0^1 (x e^x - e^x) \\, dx = - \\int_0^1 x e^x \\, dx + \\int_0^1 e^x \\, dx$.<br/>
D'après la question 1, $\\int_0^1 x e^x \\, dx = L = 1$.<br/>
$\\int_0^1 e^x \\, dx = [e^x]_0^1 = e - 1$.<br/>
$\\mathcal{A} = -1 + (e - 1) = e - 2$ unités d'aire (u.a.).`
      },
      {
        title: 'Question 3 : Bonus IPP',
        content: `On pose $u(x) = \\ln(x) \\implies u'(x) = \\frac{1}{x}$ (ALPES : Log prime Polynôme)<br/>
$v'(x) = x \\implies v(x) = \\frac{x^2}{2}$<br/>
$\\int_1^e x \\ln(x) \\, dx = \\left[ \\frac{x^2}{2} \\ln(x) \\right]_1^e - \\int_1^e \\frac{1}{x} \\cdot \\frac{x^2}{2} \\, dx$<br/>
$= \\left( \\frac{e^2}{2} \\cdot 1 - 0 \\right) - \\int_1^e \\frac{x}{2} \\, dx = \\frac{e^2}{2} - \\left[ \\frac{x^2}{4} \\right]_1^e$<br/>
$= \\frac{e^2}{2} - \\left( \\frac{e^2}{4} - \\frac{1}{4} \\right) = \\frac{e^2}{4} + \\frac{1}{4} = \\frac{e^2+1}{4}$`
      }
    ],
    grandFrereNote: "L'acronyme magique pour choisir u(x) lors d'une IPP : ALPES (Arcsin, Logarithme, Polynôme, Exponentielle, Sinus/Cosinus). Tu prends en u(x) la première fonction qui apparaît dans ce mot."
  }
];
