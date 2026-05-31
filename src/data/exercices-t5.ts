import { Exercise } from './exercices-t1';

export const exercicesT5: Exercise[] = [
  {
    id: 't5-ex1',
    level: 'BASE',
    points: 4,
    statement: `Résoudre dans $\\mathbb{R}$ les équations et inéquations suivantes :
<br/><br/>a) $\\ln(x - 2) + \\ln(x) = \\ln(3)$ <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>b) $e^{2x} - 5e^x + 6 \\leq 0$ <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    steps: [
      {
        title: 'Question a) : Équation avec Ln',
        content: `Domaine de validité : on doit avoir $x - 2 > 0$ et $x > 0$. Donc $D_v = ]2; +\\infty[$.<br/>
$\\ln(x - 2) + \\ln(x) = \\ln(3) \\iff \\ln((x-2)x) = \\ln(3)$<br/>
$x^2 - 2x = 3 \\iff x^2 - 2x - 3 = 0$.<br/>
Les racines sont $x_1 = 3$ et $x_2 = -1$.<br/>
On rejette $-1$ car il n'est pas dans $D_v$. La solution est $S = \\{3\\}$.`
      },
      {
        title: 'Question b) : Inéquation avec Exponentielle',
        content: `On pose $X = e^x$. L'inéquation devient $X^2 - 5X + 6 \\leq 0$.<br/>
Les racines de $X^2 - 5X + 6 = 0$ sont $X_1 = 2$ et $X_2 = 3$.<br/>
Le trinôme est négatif entre les racines, donc $2 \\leq X \\leq 3$.<br/>
On revient à $x$ : $2 \\leq e^x \\leq 3 \\iff \\ln(2) \\leq x \\leq \\ln(3)$.<br/>
Solution $S = [\\ln(2); \\ln(3)]$.`
      }
    ],
    grandFrereNote: "L'erreur fatale avec les logarithmes est d'oublier de chercher le domaine de validité avant de commencer. 90% des élèves perdent des points bêtement là-dessus !"
  },
  {
    id: 't5-ex2',
    level: 'MOYEN',
    points: 6,
    statement: `Calculer les limites suivantes :
<br/><br/>1. $\\lim_{x \\to +\\infty} \\frac{e^x}{x^2 + 1}$ <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>2. $\\lim_{x \\to 0} x \\ln(x)$ <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>3. $\\lim_{x \\to +\\infty} (x - \\ln(x))$ <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    steps: [
      {
        title: 'Question 1',
        content: `C'est une forme indéterminée $\\frac{\\infty}{\\infty}$.<br/>
On factorise par le terme dominant en bas : $\\frac{e^x}{x^2(1 + \\frac{1}{x^2})} = \\frac{e^x}{x^2} \\cdot \\frac{1}{1 + \\frac{1}{x^2}}$.<br/>
Par croissances comparées, $\\lim_{x \\to +\\infty} \\frac{e^x}{x^n} = +\\infty$, donc $\\lim_{x \\to +\\infty} \\frac{e^x}{x^2} = +\\infty$.<br/>
Comme $\\lim_{x \\to +\\infty} \\frac{1}{1 + 0} = 1$, le produit donne $+\\infty$.`
      },
      {
        title: 'Question 2',
        content: `C'est une limite de référence du cours (croissances comparées).<br/>
La puissance l'emporte toujours sur le logarithme en zéro.<br/>
Donc $\\lim_{x \\to 0} x \\ln(x) = 0$. (Par valeurs supérieures $x \\to 0^+$).`
      },
      {
        title: 'Question 3',
        content: `Forme indéterminée $\\infty - \\infty$.<br/>
L'astuce universelle : on factorise par le terme le plus fort (ici $x$).<br/>
$x - \\ln(x) = x(1 - \\frac{\\ln(x)}{x})$.<br/>
Par croissances comparées, $\\lim_{x \\to +\\infty} \\frac{\\ln(x)}{x} = 0$.<br/>
Donc le crochet tend vers $1 - 0 = 1$.<br/>
$\\lim_{x \\to +\\infty} x(1) = +\\infty$.`
      }
    ],
    grandFrereNote: "Dans un duel entre Exp, Puissance et Log : l'Exponentielle écrase la Puissance, qui elle-même écrase le Logarithme. Les croissances comparées sauvent des vies."
  },
  {
    id: 't5-ex3',
    level: 'BAC',
    points: 10,
    context: "Problème type - Étude de fonction Exponentielle",
    statement: `On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = (x + 1)e^{-x}$.
<br/><br/>1. Déterminer $\\lim_{x \\to -\\infty} f(x)$ et $\\lim_{x \\to +\\infty} f(x)$. <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>2. Calculer la dérivée $f'(x)$ et étudier son signe. <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>3. Dresser le tableau de variations de $f$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>4. Déterminer l'équation de la tangente $(T)$ à la courbe au point d'abscisse $x=0$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    steps: [
      {
        title: 'Question 1 : Limites',
        content: `$\\lim_{x \\to -\\infty} f(x)$ : on a $\\lim (x+1) = -\\infty$ et $\\lim e^{-x} = +\\infty$.<br/>
Par produit, $\\lim_{x \\to -\\infty} f(x) = -\\infty$.<br/><br/>
$\\lim_{x \\to +\\infty} f(x)$ : On développe $f(x) = \\frac{x}{e^x} + \\frac{1}{e^x}$.<br/>
Par croissances comparées, $\\lim \\frac{x}{e^x} = 0$, et $\\lim \\frac{1}{e^x} = 0$.<br/>
Donc $\\lim_{x \\to +\\infty} f(x) = 0$. La droite $y=0$ est asymptote horizontale en $+\\infty$.`
      },
      {
        title: 'Question 2 : Dérivée',
        content: `On utilise la formule $(uv)' = u'v + uv'$ avec $u(x) = x+1$ et $v(x) = e^{-x}$.<br/>
$f'(x) = 1 \\cdot e^{-x} + (x+1)(-e^{-x}) = e^{-x}(1 - (x+1)) = e^{-x}(-x) = -x e^{-x}$.<br/>
Comme $e^{-x} > 0$ pour tout réel $x$, le signe de $f'(x)$ est celui de $-x$.<br/>
Donc $f'(x) > 0$ sur $]-\\infty; 0[$ et $f'(x) < 0$ sur $]0; +\\infty[$.`
      },
      {
        title: 'Question 3 : Tableau de variations',
        content: `$f$ est croissante sur $]-\\infty; 0]$ et décroissante sur $[0; +\\infty[$.<br/>
Elle admet un maximum local en $x=0$.<br/>
Valeur du maximum : $f(0) = (0 + 1)e^{-0} = 1 \\cdot 1 = 1$.`
      },
      {
        title: 'Question 4 : Tangente',
        content: `L'équation de la tangente en $a=0$ est $y = f'(0)(x - 0) + f(0)$.<br/>
On a $f(0) = 1$ et $f'(0) = -0 \\cdot e^0 = 0$.<br/>
Donc $y = 0(x) + 1 \\implies y = 1$.<br/>
Il s'agit d'une tangente horizontale (cohérent avec le fait qu'il y a un maximum).`
      }
    ],
    grandFrereNote: "Souviens-toi : développer l'expression pour lever une indétermination avec e^(-x) en + l'infini est l'astuce la plus redoutable. Et f'(x) = 0 donne toujours une tangente horizontale !"
  }
];
