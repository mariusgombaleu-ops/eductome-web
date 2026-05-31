import { Exercise } from './exercices-t1';

export const exercicesT7: Exercise[] = [
  {
    id: 't7-ex1',
    level: 'BASE',
    points: 4,
    statement: `Une urne contient 5 boules rouges et 3 boules vertes, indiscernables au toucher. On tire simultanément 2 boules de l'urne.
<br/><br/>1. Quel est le nombre total de tirages possibles ? <span class="text-sm text-gray-500 float-right">[1 pt]</span>
<br/>2. Calculer la probabilité d'obtenir 2 boules rouges. <span class="text-sm text-gray-500 float-right">[1 pt]</span>
<br/>3. Calculer la probabilité d'obtenir 2 boules de couleurs différentes. <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    steps: [
      {
        title: 'Question 1',
        content: `Le tirage est "simultané", on utilise donc les combinaisons $C_n^p$.<br/>
Nombre total de boules : $n = 8$. On en tire $p = 2$.<br/>
Nombre total de cas = $C_8^2 = \\frac{8 \\times 7}{2 \\times 1} = 28$.`
      },
      {
        title: 'Question 2',
        content: `On veut 2 boules rouges parmi les 5. Nombre de cas = $C_5^2 = \\frac{5 \\times 4}{2} = 10$.<br/>
Probabilité $P(A) = \\frac{\\text{cas favorables}}{\\text{cas possibles}} = \\frac{10}{28} = \\frac{5}{14}$.`
      },
      {
        title: 'Question 3',
        content: `2 couleurs différentes = 1 rouge ET 1 verte.<br/>
Nombre de cas = $C_5^1 \\times C_3^1 = 5 \\times 3 = 15$.<br/>
Probabilité $P(B) = \\frac{15}{28}$.`
      }
    ],
    grandFrereNote: "Lis bien l'énoncé ! 'Simultanément' veut dire Combinaison (C). 'Successivement et sans remise' veut dire Arrangement (A). Ça change complètement le calcul !"
  },
  {
    id: 't7-ex2',
    level: 'MOYEN',
    points: 6,
    statement: `Lors d'une épidémie, un test de dépistage est tel que : 
- Si une personne est malade, le test est positif dans 90% des cas.
- Si une personne est saine, le test est négatif dans 95% des cas.
On sait que 20% de la population est malade. On choisit une personne au hasard. $M$ = "être malade", $T$ = "test positif".
<br/><br/>1. Représenter la situation par un arbre pondéré. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>2. Calculer $P(T)$, la probabilité que le test soit positif. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>3. Le test de la personne est positif. Quelle est la probabilité qu'elle soit effectivement malade ? <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    steps: [
      {
        title: 'Question 1 : Arbre pondéré',
        content: `$P(M) = 0.2 \\implies P(\\overline{M}) = 0.8$.<br/>
$P_M(T) = 0.9 \\implies P_M(\\overline{T}) = 0.1$.<br/>
$P_{\\overline{M}}(\\overline{T}) = 0.95 \\implies P_{\\overline{M}}(T) = 0.05$.<br/>
(L'arbre se dessine avec ces 6 branches et valeurs associées).`
      },
      {
        title: 'Question 2 : Probabilités totales',
        content: `D'après la formule des probabilités totales :<br/>
$P(T) = P(M \\cap T) + P(\\overline{M} \\cap T)$<br/>
$P(T) = P(M) \\times P_M(T) + P(\\overline{M}) \\times P_{\\overline{M}}(T)$<br/>
$P(T) = (0.2 \\times 0.9) + (0.8 \\times 0.05) = 0.18 + 0.04 = 0.22$.`
      },
      {
        title: 'Question 3 : Probabilité conditionnelle',
        content: `On cherche la probabilité d'être malade SACHANT que le test est positif, soit $P_T(M)$.<br/>
D'après la formule de Bayes : $P_T(M) = \\frac{P(M \\cap T)}{P(T)}$.<br/>
$P_T(M) = \\frac{0.18}{0.22} = \\frac{18}{22} = \\frac{9}{11} \\approx 0.818$.`
      }
    ],
    grandFrereNote: "L'arbre pondéré est ton gilet de sauvetage. Si tu as faux à l'arbre, tout le reste est faux. Vérifie toujours que la somme des branches partant d'un même nœud vaut 1."
  },
  {
    id: 't7-ex3',
    level: 'BAC',
    points: 10,
    context: "Variable Aléatoire et Loi Binomiale",
    statement: `Un tireur à l'arc a une probabilité $p = 0.6$ de toucher la cible. Il tire 5 flèches de façon indépendante. Soit $X$ la variable aléatoire représentant le nombre de flèches atteignant la cible.
<br/><br/>1. Justifier que $X$ suit une loi binomiale et préciser ses paramètres. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>2. Calculer la probabilité d'atteindre exactement 3 fois la cible. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>3. Calculer la probabilité d'atteindre la cible au moins une fois. <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>4. Calculer l'espérance $E(X)$ et la variance $V(X)$. <span class="text-sm text-gray-500 float-right">[3 pts]</span>`,
    steps: [
      {
        title: 'Question 1 : Loi Binomiale',
        content: `On répète $n=5$ fois, de manière identique et indépendante, une épreuve de Bernoulli (Schéma de Bernoulli).<br/>
Le succès est "toucher la cible", de probabilité $p = 0.6$.<br/>
$X$ compte le nombre de succès, donc $X$ suit la loi binomiale $\\mathcal{B}(n=5, p=0.6)$.`
      },
      {
        title: 'Question 2 : Probabilité de 3 succès',
        content: `La formule de la loi binomiale est $P(X=k) = C_n^k p^k (1-p)^{n-k}$.<br/>
$P(X=3) = C_5^3 (0.6)^3 (0.4)^2$.<br/>
$C_5^3 = 10$.<br/>
$P(X=3) = 10 \\times 0.216 \\times 0.16 = 10 \\times 0.03456 = 0.3456$.`
      },
      {
        title: 'Question 3 : Au moins un succès',
        content: `Le contraire de "au moins une fois" est "aucune fois" (soit $X=0$).<br/>
$P(X \\geq 1) = 1 - P(X=0)$.<br/>
$P(X=0) = C_5^0 (0.6)^0 (0.4)^5 = 1 \\times 1 \\times 0.01024 = 0.01024$.<br/>
$P(X \\geq 1) = 1 - 0.01024 = 0.98976$.`
      },
      {
        title: 'Question 4 : Espérance et Variance',
        content: `Pour une loi binomiale, les formules magiques sont simples :<br/>
$E(X) = n \\times p = 5 \\times 0.6 = 3$. (Il touchera en moyenne 3 cibles).<br/>
$V(X) = n \\times p \\times (1-p) = 5 \\times 0.6 \\times 0.4 = 3 \\times 0.4 = 1.2$.`
      }
    ],
    grandFrereNote: "Le 'Au moins un' = '1 moins le contraire' est une astuce de niveau expert qui te fait gagner 5 minutes de calcul à chaque fois. Retiens-la."
  }
];
