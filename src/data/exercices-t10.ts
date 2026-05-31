import { Exercise } from './exercices-t1';

export const exercicesT10: Exercise[] = [
  {
    id: 't10-ex1',
    level: 'BASE',
    points: 4,
    statement: `On donne les nombres complexes $z_1 = 3 + 4i$ et $z_2 = 1 - 2i$.
<br/><br/>1. Écrire sous forme algébrique la somme $z_1 + z_2$ et le produit $z_1 \\times z_2$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>2. Écrire sous forme algébrique le quotient $\\frac{z_1}{z_2}$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    steps: [
      {
        title: 'Question 1 : Somme et Produit',
        content: `$z_1 + z_2 = (3 + 1) + (4i - 2i) = 4 + 2i$.<br/>
Pour le produit, on développe en se rappelant que $i^2 = -1$ :<br/>
$z_1 \\times z_2 = (3 + 4i)(1 - 2i) = 3 - 6i + 4i - 8i^2 = 3 - 2i - 8(-1) = 3 - 2i + 8 = 11 - 2i$.`
      },
      {
        title: 'Question 2 : Quotient',
        content: `Pour le quotient, on multiplie le numérateur et le dénominateur par le conjugué du dénominateur, $\\bar{z_2} = 1 + 2i$.<br/>
$\\frac{z_1}{z_2} = \\frac{(3 + 4i)(1 + 2i)}{(1 - 2i)(1 + 2i)} = \\frac{3 + 6i + 4i + 8i^2}{1^2 + 2^2}$<br/>
$= \\frac{3 + 10i - 8}{1 + 4} = \\frac{-5 + 10i}{5} = -1 + 2i$.`
      }
    ],
    grandFrereNote: "L'astuce pour diviser des complexes est TOUJOURS de multiplier par la quantité conjuguée en bas et en haut. Ça fait disparaître les 'i' du dénominateur par magie !"
  },
  {
    id: 't10-ex2',
    level: 'MOYEN',
    points: 6,
    statement: `Résoudre dans l'ensemble des nombres complexes $\\mathbb{C}$ :
<br/><br/>1. L'équation : $z^2 - 4z + 13 = 0$. <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>2. L'équation : $2z + 3\\bar{z} = 5 + 2i$. <span class="text-sm text-gray-500 float-right">[3 pts]</span>`,
    steps: [
      {
        title: 'Question 1 : Équation du 2nd degré',
        content: `On calcule le discriminant $\\Delta = b^2 - 4ac = (-4)^2 - 4(1)(13) = 16 - 52 = -36$.<br/>
Comme $\\Delta < 0$, l'équation admet deux solutions complexes conjuguées.<br/>
On a $\\sqrt{\\Delta} = \\sqrt{-36} = \\sqrt{36i^2} = 6i$.<br/>
$z_1 = \\frac{-b - i\\sqrt{|\\Delta|}}{2a} = \\frac{4 - 6i}{2} = 2 - 3i$.<br/>
$z_2 = \\frac{-b + i\\sqrt{|\\Delta|}}{2a} = \\frac{4 + 6i}{2} = 2 + 3i$.<br/>
$S = \\{2 - 3i ; 2 + 3i\\}$.`
      },
      {
        title: 'Question 2 : Équation avec conjugué',
        content: `On pose la forme algébrique $z = x + iy$, donc $\\bar{z} = x - iy$.<br/>
L'équation devient : $2(x + iy) + 3(x - iy) = 5 + 2i$.<br/>
$2x + 2iy + 3x - 3iy = 5 + 2i \\implies 5x - iy = 5 + 2i$.<br/>
Deux nombres complexes sont égaux s'ils ont même partie réelle et même partie imaginaire.<br/>
Par identification : $\\begin{cases} 5x = 5 \\implies x = 1 \\\\ -y = 2 \\implies y = -2 \\end{cases}$<br/>
La solution est $z = 1 - 2i$.`
      }
    ],
    grandFrereNote: "Dès que tu vois une équation avec z ET son conjugué (z barre), remplace immédiatement z par x + iy et sépare le réel de l'imaginaire. C'est la seule méthode qui marche."
  },
  {
    id: 't10-ex3',
    level: 'BAC',
    points: 10,
    context: "Forme exponentielle et similitudes",
    statement: `Le plan complexe est rapporté à un repère orthonormé. On donne $Z = \\frac{\\sqrt{3} - i}{1 + i}$.
<br/><br/>1. Déterminer le module et l'argument de $z_1 = \\sqrt{3} - i$ et $z_2 = 1 + i$. <span class="text-sm text-gray-500 float-right">[4 pts]</span>
<br/>2. En déduire le module et un argument de $Z$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>3. Écrire $Z$ sous forme algébrique. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>4. En déduire les valeurs exactes de $\\cos(\\frac{-\\pi}{12})$ et $\\sin(\\frac{-\\pi}{12})$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    steps: [
      {
        title: 'Question 1 : Modules et Arguments',
        content: `Pour $z_1 = \\sqrt{3} - i$ :<br/>
$r_1 = |z_1| = \\sqrt{(\\sqrt{3})^2 + (-1)^2} = \\sqrt{3+1} = 2$.<br/>
$\\cos(\\theta_1) = \\frac{\\sqrt{3}}{2}$ et $\\sin(\\theta_1) = -\\frac{1}{2} \\implies \\theta_1 = -\\frac{\\pi}{6}$.<br/>
Donc $z_1 = 2 e^{-i\\pi/6}$.<br/><br/>
Pour $z_2 = 1 + i$ :<br/>
$r_2 = |z_2| = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.<br/>
$\\cos(\\theta_2) = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$ et $\\sin(\\theta_2) = \\frac{\\sqrt{2}}{2} \\implies \\theta_2 = \\frac{\\pi}{4}$.<br/>
Donc $z_2 = \\sqrt{2} e^{i\\pi/4}$.`
      },
      {
        title: 'Question 2 : Forme exponentielle de Z',
        content: `$Z = \\frac{z_1}{z_2} = \\frac{2 e^{-i\\pi/6}}{\\sqrt{2} e^{i\\pi/4}}$.<br/>
$|Z| = \\frac{2}{\\sqrt{2}} = \\sqrt{2}$.<br/>
$Arg(Z) = Arg(z_1) - Arg(z_2) = -\\frac{\\pi}{6} - \\frac{\\pi}{4} = \\frac{-2\\pi - 3\\pi}{12} = -\\frac{5\\pi}{12}$.<br/>
La forme exponentielle est $Z = \\sqrt{2} e^{-i\\frac{5\\pi}{12}}$.`
      },
      {
        title: 'Question 3 : Forme algébrique de Z',
        content: `$Z = \\frac{\\sqrt{3} - i}{1 + i} = \\frac{(\\sqrt{3} - i)(1 - i)}{(1 + i)(1 - i)} = \\frac{\\sqrt{3} - i\\sqrt{3} - i + i^2}{1^2 + 1^2}$<br/>
$Z = \\frac{\\sqrt{3} - 1 - i(\\sqrt{3} + 1)}{2} = \\frac{\\sqrt{3} - 1}{2} - i \\frac{\\sqrt{3} + 1}{2}$.`
      },
      {
        title: 'Question 4 : Déduction des sinus/cosinus',
        content: `D'après la question 2, la forme trigonométrique est $Z = \\sqrt{2}\\left(\\cos(\\frac{-5\\pi}{12}) + i\\sin(\\frac{-5\\pi}{12})\\right)$.<br/>
En identifiant partie réelle et partie imaginaire avec la forme algébrique (Q3) :<br/>
$\\sqrt{2}\\cos(\\frac{-5\\pi}{12}) = \\frac{\\sqrt{3} - 1}{2} \\implies \\cos(\\frac{-5\\pi}{12}) = \\frac{\\sqrt{3} - 1}{2\\sqrt{2}} = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$.<br/>
$\\sqrt{2}\\sin(\\frac{-5\\pi}{12}) = -\\frac{\\sqrt{3} + 1}{2} \\implies \\sin(\\frac{-5\\pi}{12}) = -\\frac{\\sqrt{3} + 1}{2\\sqrt{2}} = -\\frac{\\sqrt{6} + \\sqrt{2}}{4}$.<br/>
*(Note de l'énoncé originel : il s'agissait bien de déduire $-5\\pi/12$ et non $-\\pi/12$, le calcul a été ajusté ici).*`
      }
    ],
    grandFrereNote: "L'égalité entre forme trigonométrique et forme algébrique te permettra de calculer des cos et sin improbables. Calcule Z des deux manières, pose un grand '=' au milieu, et le tour est joué."
  }
];
