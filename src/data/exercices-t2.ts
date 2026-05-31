import { Exercise } from './exercices-t1';

export const exercicesT2: Exercise[] = [
  {
    id: 't2-ex1',
    level: 'BASE',
    points: 4,
    statement: `Calculer la dérivée $f'(x)$ pour chacune des fonctions suivantes :
<br/>a) $f(x) = x^4 - 3x^2 + 5x - 1$ <span class="text-sm text-gray-500 float-right">[1 pt]</span>
<br/>b) $f(x) = \\sqrt{2x + 1}$ <span class="text-sm text-gray-500 float-right">[1 pt]</span>
<br/>c) $f(x) = \\frac{2x - 3}{x + 1}$ <span class="text-sm text-gray-500 float-right">[1 pt]</span>
<br/>d) $f(x) = \\cos(3x - \\frac{\\pi}{4})$ <span class="text-sm text-gray-500 float-right">[1 pt]</span>`,
    steps: [
      {
        title: 'a) Fonction polynôme',
        content: `On utilise la formule $(x^n)' = n x^{n-1}$.<br/>$f'(x) = 4x^3 - 3(2x) + 5 = 4x^3 - 6x + 5$`
      },
      {
        title: 'b) Fonction composée avec racine',
        content: `On utilise $(\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}$ avec $u(x) = 2x+1$ d'où $u'(x) = 2$.<br/>
$f'(x) = \\frac{2}{2\\sqrt{2x+1}} = \\frac{1}{\\sqrt{2x+1}}$`
      },
      {
        title: 'c) Fonction rationnelle (quotient)',
        content: `On utilise $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$ avec $u(x)=2x-3$, $v(x)=x+1$.<br/>
$f'(x) = \\frac{2(x+1) - (2x-3)(1)}{(x+1)^2} = \\frac{2x + 2 - 2x + 3}{(x+1)^2} = \\frac{5}{(x+1)^2}$`
      },
      {
        title: 'd) Fonction trigonométrique composée',
        content: `On utilise $(\\cos(u))' = -u' \\sin(u)$.<br/>
Ici $u(x) = 3x - \\frac{\\pi}{4}$, donc $u'(x) = 3$.<br/>
$f'(x) = -3 \\sin(3x - \\frac{\\pi}{4})$`
      }
    ],
    grandFrereNote: "Attention au quotient ! La formule de u/v est la plus demandée. N'oublie pas les parenthèses au numérateur pour ne pas te tromper de signe en développant."
  },
  {
    id: 't2-ex2',
    level: 'MOYEN',
    points: 6,
    statement: `Soit $g(x) = \\frac{x^2 - 4x + 3}{x - 2}$ définie sur $\\mathbb{R} \\setminus \\{2\\}$.
<br/><br/>1. Calculer $g'(x)$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>2. Étudier le signe de $g'(x)$ et dresser le tableau de variations de $g$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>3. Déterminer l'équation de la tangente $(T)$ à la courbe au point d'abscisse $x_0 = 3$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    steps: [
      {
        title: 'Question 1 : Calcul de la dérivée',
        content: `On pose $u(x) = x^2 - 4x + 3$ et $v(x) = x - 2$.<br/>
$g'(x) = \\frac{(2x - 4)(x - 2) - (x^2 - 4x + 3)(1)}{(x - 2)^2}$<br/>
$g'(x) = \\frac{(2x^2 - 4x - 4x + 8) - (x^2 - 4x + 3)}{(x - 2)^2} = \\frac{x^2 - 4x + 5}{(x - 2)^2}$`
      },
      {
        title: 'Question 2 : Signe et Variations',
        content: `Le dénominateur $(x-2)^2 > 0$, donc le signe de $g'$ dépend du numérateur $x^2 - 4x + 5$.<br/>
On calcule le discriminant $\\Delta = (-4)^2 - 4(1)(5) = 16 - 20 = -4$.<br/>
Comme $\\Delta < 0$, $x^2 - 4x + 5$ est du signe de $a$ (ici $1 > 0$) sur $\\mathbb{R}$.<br/>
Donc $g'(x) > 0$ pour tout $x \\in \\mathbb{R} \\setminus \\{2\\}$. $g$ est strictement croissante.`
      },
      {
        title: 'Question 3 : Équation de la tangente',
        content: `La formule de la tangente est $y = g'(a)(x - a) + g(a)$ avec $a = 3$.<br/>
Calculons : $g(3) = \\frac{3^2 - 4(3) + 3}{3 - 2} = \\frac{9 - 12 + 3}{1} = 0$.<br/>
Et $g'(3) = \\frac{3^2 - 4(3) + 5}{(3 - 2)^2} = \\frac{9 - 12 + 5}{1} = 2$.<br/>
L'équation est donc $y = 2(x - 3) + 0 \\implies y = 2x - 6$.`
      }
    ],
    grandFrereNote: "Un discriminant négatif pour la dérivée, c'est génial ! Ça veut dire que le signe ne change jamais. Souviens-toi toujours de la formule de la tangente, c'est 2 points gratuits au Bac."
  },
  {
    id: 't2-ex3',
    level: 'BAC',
    points: 10,
    context: "Extrait de Problème - Étude complète avec valeur absolue",
    statement: `Soit $h$ définie sur $\\mathbb{R}$ par $h(x) = x \\sqrt{|x^2 - 1|}$.
<br/><br/>1. Exprimer $h(x)$ sans le symbole de la valeur absolue selon les intervalles. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>2. Étudier la dérivabilité de $h$ en $x_0 = 1$ et interpréter géométriquement. <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>3. Calculer $h'(x)$ sur $]1; +\\infty[$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>4. Étudier les variations de $h$ sur $]1; +\\infty[$ et tracer l'allure de la courbe. <span class="text-sm text-gray-500 float-right">[3 pts]</span>`,
    steps: [
      {
        title: 'Question 1 : Retrait de la valeur absolue',
        content: `$x^2 - 1 = 0$ pour $x = 1$ et $x = -1$. Le signe de $x^2 - 1$ est positif à l'extérieur des racines.<br/>
Sur $]-\\infty; -1] \\cup [1; +\\infty[$, $x^2 - 1 \\geq 0 \\implies h(x) = x \\sqrt{x^2 - 1}$.<br/>
Sur $]-1; 1[$, $x^2 - 1 < 0 \\implies h(x) = x \\sqrt{1 - x^2}$.`
      },
      {
        title: 'Question 2 : Dérivabilité en 1',
        content: `Il faut calculer la limite du taux d'accroissement en 1.<br/>
$\\lim_{x \\to 1^+} \\frac{h(x) - h(1)}{x - 1} = \\lim_{x \\to 1^+} \\frac{x \\sqrt{x^2 - 1} - 0}{x - 1} = \\lim_{x \\to 1^+} x \\frac{\\sqrt{(x-1)(x+1)}}{\\sqrt{(x-1)^2}} = \\lim_{x \\to 1^+} x \\sqrt{\\frac{x+1}{x-1}} = +\\infty$.<br/>
La fonction n'est pas dérivable en $1$. La courbe admet une demi-tangente verticale au point d'abscisse 1.`
      },
      {
        title: 'Question 3 : Calcul de la dérivée',
        content: `Sur $]1; +\\infty[$, $h(x) = x \\sqrt{x^2 - 1}$. On utilise la formule $(uv)' = u'v + uv'$.<br/>
$h'(x) = 1 \\cdot \\sqrt{x^2 - 1} + x \\cdot \\frac{2x}{2\\sqrt{x^2 - 1}} = \\sqrt{x^2 - 1} + \\frac{x^2}{\\sqrt{x^2 - 1}}$.<br/>
Mise au même dénominateur : $h'(x) = \\frac{x^2 - 1 + x^2}{\\sqrt{x^2 - 1}} = \\frac{2x^2 - 1}{\\sqrt{x^2 - 1}}$.`
      },
      {
        title: 'Question 4 : Variations',
        content: `Pour $x > 1$, $\\sqrt{x^2 - 1} > 0$. Le signe de $h'$ est celui de $2x^2 - 1$.<br/>
$2x^2 - 1 = 0 \\implies x = \\frac{1}{\\sqrt{2}} \\approx 0.707$, ce qui n'est pas dans l'intervalle $]1; +\\infty[$.<br/>
Sur $]1; +\\infty[$, $x > 1 \\implies 2x^2 - 1 > 1 > 0$, donc $h'(x) > 0$.<br/>
$h$ est strictement croissante sur $]1; +\\infty[$.`
      }
    ],
    grandFrereNote: "L'étude de dérivabilité aux bornes avec une racine donne presque toujours une tangente verticale (limite infinie). Retiens cette méthode d'écriture de la racine, elle revient tout le temps aux oraux et écrits !"
  }
];
