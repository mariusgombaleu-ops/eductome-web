import { Exercise } from './exercices-t1';

export const exercicesT8: Exercise[] = [
  {
    id: 't8-ex1',
    level: 'BASE',
    points: 4,
    statement: `On a relevé les notes sur 20 en Maths ($X$) et en Physique ($Y$) pour 5 élèves.
<br/>$X$ : 8, 10, 12, 14, 16
<br/>$Y$ : 9, 11, 11, 15, 14
<br/><br/>1. Calculer les moyennes $\\bar{X}$ et $\\bar{Y}$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>2. Déterminer les coordonnées du point moyen $G$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    steps: [
      {
        title: 'Question 1 : Calcul des moyennes',
        content: `La moyenne est la somme des valeurs divisée par le nombre total $N = 5$.<br/>
$\\bar{X} = \\frac{8 + 10 + 12 + 14 + 16}{5} = \\frac{60}{5} = 12$<br/>
$\\bar{Y} = \\frac{9 + 11 + 11 + 15 + 14}{5} = \\frac{60}{5} = 12$`
      },
      {
        title: 'Question 2 : Point moyen',
        content: `Le point moyen $G$ a pour coordonnées $(\\bar{X}; \\bar{Y})$.<br/>
Donc $G(12; 12)$.<br/>
Note : Le point moyen est toujours le centre de gravité du nuage de points et la droite d'ajustement passera TOUJOURS par lui.`
      }
    ],
    grandFrereNote: "Le calcul du point moyen est la base de la statistique à deux variables. S'il est faux, la droite d'ajustement sera fausse. Fais ce calcul deux fois plutôt qu'une !"
  },
  {
    id: 't8-ex2',
    level: 'MOYEN',
    points: 6,
    statement: `En utilisant les données de l'exercice précédent :
<br/><br/>1. Calculer la variance $V(X)$ et la covariance $Cov(X, Y)$. <span class="text-sm text-gray-500 float-right">[4 pts]</span>
<br/>2. Déterminer le coefficient directeur $a$ de la droite d'ajustement de $Y$ en $X$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    steps: [
      {
        title: 'Question 1 : Variance et Covariance',
        content: `Formule de la variance : $V(X) = \\frac{\\sum X_i^2}{N} - \\bar{X}^2$<br/>
$\\sum X_i^2 = 8^2 + 10^2 + 12^2 + 14^2 + 16^2 = 64 + 100 + 144 + 196 + 256 = 760$.<br/>
$V(X) = \\frac{760}{5} - 12^2 = 152 - 144 = 8$.<br/>
Formule de la covariance : $Cov(X, Y) = \\frac{\\sum X_i Y_i}{N} - \\bar{X}\\bar{Y}$<br/>
$\\sum X_i Y_i = (8 \\times 9) + (10 \\times 11) + (12 \\times 11) + (14 \\times 15) + (16 \\times 14) = 72 + 110 + 132 + 210 + 224 = 748$.<br/>
$Cov(X, Y) = \\frac{748}{5} - (12 \\times 12) = 149.6 - 144 = 5.6$.`
      },
      {
        title: 'Question 2 : Coefficient directeur',
        content: `L'équation de la droite d'ajustement est $y = ax + b$.<br/>
La formule pour $a$ (droite de régression de Y en X) est : $a = \\frac{Cov(X, Y)}{V(X)}$.<br/>
$a = \\frac{5.6}{8} = 0.7$.`
      }
    ],
    grandFrereNote: "Attention à la calculette ! Les erreurs de frappe sont fréquentes quand on somme les Xi² ou les Xi*Yi. La formule de Koenig V(X) = E(X²) - (E(X))² est celle qu'il faut utiliser, pas l'autre."
  },
  {
    id: 't8-ex3',
    level: 'BAC',
    points: 10,
    context: "Méthode des Moindres Carrés et Prévision",
    statement: `L'équation de la droite de régression de $Y$ en $X$ est $y = 0.7x + b$ (d'après l'exercice 2).
<br/><br/>1. Calculer la valeur de $b$ et donner l'équation finale de la droite d'ajustement. <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>2. Calculer le coefficient de corrélation linéaire $r$, sachant que $V(Y) = 4.8$. Ce modèle d'ajustement est-il justifié ? <span class="text-sm text-gray-500 float-right">[4 pts]</span>
<br/>3. En utilisant cet ajustement, estimer la note en Physique d'un élève ayant eu 18 en Maths. <span class="text-sm text-gray-500 float-right">[3 pts]</span>`,
    steps: [
      {
        title: 'Question 1 : Équation complète',
        content: `La droite passe toujours par le point moyen $G(12; 12)$.<br/>
Donc $\\bar{Y} = a\\bar{X} + b \\implies b = \\bar{Y} - a\\bar{X}$.<br/>
$b = 12 - 0.7 \\times 12 = 12 - 8.4 = 3.6$.<br/>
L'équation de la droite est $y = 0.7x + 3.6$.`
      },
      {
        title: 'Question 2 : Coefficient de corrélation',
        content: `La formule est $r = \\frac{Cov(X, Y)}{\\sigma_X \\sigma_Y} = \\frac{Cov(X, Y)}{\\sqrt{V(X)} \\sqrt{V(Y)}}$.<br/>
$r = \\frac{5.6}{\\sqrt{8} \\times \\sqrt{4.8}} = \\frac{5.6}{\\sqrt{38.4}} \\approx \\frac{5.6}{6.197} \\approx 0.904$.<br/>
$|r| \\approx 0.904$, comme $|r|$ est proche de $1$ (supérieur à $0.85$), l'ajustement affine est fortement justifié.`
      },
      {
        title: 'Question 3 : Prévision',
        content: `Pour un élève ayant eu $x = 18$ en Maths, on cherche $y$.<br/>
On remplace dans l'équation : $y = 0.7(18) + 3.6 = 12.6 + 3.6 = 16.2$.<br/>
On peut estimer que l'élève aura environ 16.2 en Physique.`
      }
    ],
    grandFrereNote: "La prévision est toujours la question finale offerte ! Tu as juste à remplacer x dans l'équation trouvée. Ne rate jamais ce point gratuit."
  }
];
