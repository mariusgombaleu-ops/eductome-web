import { Exercise } from './exercices-t1';

export const exercicesT4: Exercise[] = [
  {
    id: 't4-ex1',
    level: 'BASE',
    points: 4,
    statement: `Soit $(u_n)$ une suite arithmétique de premier terme $u_0 = 3$ et de raison $r = 2$, et $(v_n)$ une suite géométrique de premier terme $v_0 = 2$ et de raison $q = 3$.
<br/><br/>1. Calculer $u_{10}$ et $v_{4}$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>2. Exprimer la somme $S_n = u_0 + u_1 + \\dots + u_n$ en fonction de $n$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    steps: [
      {
        title: 'Question 1',
        content: `Pour la suite arithmétique : $u_n = u_0 + n \\times r$.<br/>
Donc $u_{10} = 3 + 10 \\times 2 = 3 + 20 = 23$.<br/>
Pour la suite géométrique : $v_n = v_0 \\times q^n$.<br/>
Donc $v_4 = 2 \\times 3^4 = 2 \\times 81 = 162$.`
      },
      {
        title: 'Question 2',
        content: `La somme des termes d'une suite arithmétique est donnée par :<br/>
$S_n = \\text{Nombre de termes} \\times \\frac{\\text{premier terme} + \\text{dernier terme}}{2}$<br/>
Il y a $(n - 0 + 1) = n+1$ termes.<br/>
$S_n = (n+1) \\times \\frac{u_0 + u_n}{2} = (n+1) \\times \\frac{3 + (3 + 2n)}{2}$<br/>
$S_n = (n+1) \\times \\frac{2n + 6}{2} = (n+1)(n+3)$`
      }
    ],
    grandFrereNote: "La formule de la somme est très mécanique. Fais très attention au nombre de termes : si on commence à u_0 et qu'on va à u_n, il y a (n+1) termes, pas n !"
  },
  {
    id: 't4-ex2',
    level: 'MOYEN',
    points: 6,
    statement: `Soit la suite $(u_n)$ définie par $u_0 = 1$ et, pour tout $n \\in \\mathbb{N}$, $u_{n+1} = \\frac{1}{2}u_n + 3$. On pose $v_n = u_n - 6$.
<br/><br/>1. Montrer que $(v_n)$ est une suite géométrique dont on précisera la raison. <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>2. Exprimer $v_n$, puis $u_n$, en fonction de $n$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>3. Déterminer la limite de la suite $(u_n)$. <span class="text-sm text-gray-500 float-right">[1 pt]</span>`,
    steps: [
      {
        title: 'Question 1 : Suite (Vn)',
        content: `Pour prouver que $(v_n)$ est géométrique, on calcule $v_{n+1}$ :<br/>
$v_{n+1} = u_{n+1} - 6$<br/>
$v_{n+1} = (\\frac{1}{2}u_n + 3) - 6 = \\frac{1}{2}u_n - 3$<br/>
On factorise par le coefficient de $u_n$ (ici $1/2$) :<br/>
$v_{n+1} = \\frac{1}{2}(u_n - 6)$<br/>
Puisque $u_n - 6 = v_n$, on a $v_{n+1} = \\frac{1}{2}v_n$.<br/>
La suite $(v_n)$ est géométrique de raison $q = \\frac{1}{2}$ et de 1er terme $v_0 = u_0 - 6 = 1 - 6 = -5$.`
      },
      {
        title: 'Question 2 : Expression en fonction de n',
        content: `Comme $(v_n)$ est géométrique : $v_n = v_0 \\times q^n = -5 \\times (\\frac{1}{2})^n$.<br/>
Or, $v_n = u_n - 6 \\implies u_n = v_n + 6$.<br/>
Donc $u_n = 6 - 5 \\left(\\frac{1}{2}\\right)^n$.`
      },
      {
        title: 'Question 3 : Limite',
        content: `Puisque $-1 < \\frac{1}{2} < 1$, $\\lim_{n \\to +\\infty} (\\frac{1}{2})^n = 0$.<br/>
Par conséquent, $\\lim_{n \\to +\\infty} u_n = 6 - 5(0) = 6$.`
      }
    ],
    grandFrereNote: "C'est l'exercice de suite le plus classique au BAC (suite arithmético-géométrique). La méthode est TOUJOURS la même : calculer V_n+1, remplacer U_n+1 par sa formule, et factoriser. Apprends ça par cœur."
  },
  {
    id: 't4-ex3',
    level: 'BAC',
    points: 10,
    context: "Raisonnement par Récurrence",
    statement: `Soit la suite $(u_n)$ définie pour tout entier $n \\geq 1$ par $u_1 = 1$ et $u_{n+1} = \\sqrt{u_n + 2}$.
<br/><br/>1. Démontrer par récurrence que pour tout $n \\geq 1$, on a $0 < u_n < 2$. <span class="text-sm text-gray-500 float-right">[4 pts]</span>
<br/>2. Démontrer que la suite $(u_n)$ est strictement croissante. <span class="text-sm text-gray-500 float-right">[4 pts]</span>
<br/>3. En déduire que la suite $(u_n)$ est convergente et déterminer sa limite. <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    steps: [
      {
        title: 'Question 1 : Récurrence',
        content: `**Initialisation** : Pour $n=1$, $u_1 = 1$. On a bien $0 < 1 < 2$. Vrai.<br/>
**Hérédité** : Supposons qu'il existe un entier $k \\geq 1$ tel que $0 < u_k < 2$. Montrons que $0 < u_{k+1} < 2$.<br/>
Par hypothèse : $0 < u_k < 2$<br/>
On ajoute 2 : $2 < u_k + 2 < 4$<br/>
La fonction racine carrée est strictement croissante sur $[0; +\\infty[$, donc :<br/>
$\\sqrt{2} < \\sqrt{u_k + 2} < \\sqrt{4}$<br/>
$\\sqrt{2} < u_{k+1} < 2$. Comme $\\sqrt{2} > 0$, on a bien $0 < u_{k+1} < 2$. Vrai.<br/>
**Conclusion** : Pour tout $n \\geq 1$, $0 < u_n < 2$.`
      },
      {
        title: 'Question 2 : Croissance',
        content: `Étudions le signe de $u_{n+1}^2 - u_n^2$ pour utiliser la monotonie ou résolvons par récurrence.<br/>
Autre méthode : $u_{n+1} - u_n = \\sqrt{u_n + 2} - u_n$.<br/>
Multiplions par le conjugué :<br/>
$\\frac{(\\sqrt{u_n + 2} - u_n)(\\sqrt{u_n + 2} + u_n)}{\\sqrt{u_n + 2} + u_n} = \\frac{u_n + 2 - u_n^2}{\\sqrt{u_n + 2} + u_n}$.<br/>
Le signe dépend de $-u_n^2 + u_n + 2$. Les racines sont $-1$ et $2$.<br/>
Le polynôme $-x^2 + x + 2$ est positif entre ses racines $[-1; 2]$.<br/>
D'après la question 1, $u_n \\in ]0; 2[$, donc le numérateur est strictement positif. Le dénominateur étant la somme de nombres positifs, la fraction entière est positive.<br/>
Donc $u_{n+1} - u_n > 0$. $(u_n)$ est croissante.`
      },
      {
        title: 'Question 3 : Convergence et Limite',
        content: `$(u_n)$ est croissante et majorée par 2. D'après le théorème de la convergence monotone, $(u_n)$ converge vers une limite finie $\\ell$.<br/>
La fonction $f(x) = \\sqrt{x+2}$ est continue, donc la limite vérifie $f(\\ell) = \\ell$, soit $\\sqrt{\\ell + 2} = \\ell$.<br/>
On élève au carré : $\\ell + 2 = \\ell^2 \\implies \\ell^2 - \\ell - 2 = 0$.<br/>
Les solutions sont $\\ell = -1$ et $\\ell = 2$.<br/>
Puisque $(u_n)$ est positive ($u_1 = 1$ et croissante), $\\ell$ ne peut pas être $-1$.<br/>
La limite est donc $\\ell = 2$.`
      }
    ],
    grandFrereNote: "La récurrence en 3 étapes (Initialisation, Hérédité, Conclusion) doit être rédigée à la perfection sur ta copie. C'est le point sur lequel les correcteurs sont les plus intransigeants sur la forme."
  }
];
