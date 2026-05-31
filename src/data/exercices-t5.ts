import { Exercise } from './exercices-t1';

export const exercicesT5: Exercise[] = [
  {
    id: 't5-ex1',
    level: 'BASE',
    points: 4,
    testedConcept: "Résolution d'équation logarithmique et ensemble de validité.",
    statement: `Résoudre dans $\\mathbb{R}$ l'équation suivante :
<br/><br/>
<div class="text-center text-xl my-4">$\\ln(x - 1) + \\ln(x + 2) = \\ln(4)$</div>`,
    correction: {
      questions: [
        {
          label: "Résolution de l'équation",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `On a une équation avec des logarithmes népériens ($\\ln$). Avant même de calculer, il faut **absolument** trouver l'ensemble de validité, car $\\ln(X)$ n'existe que si $X > 0$.`
            },
            {
              type: 'STRATEGIE',
              content: `1. Déterminer l'ensemble de validité $D_v$.<br/>
2. Utiliser la propriété $\\ln(a) + \\ln(b) = \\ln(a \\times b)$.<br/>
3. Utiliser la propriété $\\ln(A) = \\ln(B) \\iff A = B$.<br/>
4. Résoudre l'équation du second degré obtenue.<br/>
5. Vérifier si les solutions trouvées appartiennent à $D_v$.`
            },
            {
              type: 'CALCUL',
              content: `**1. Ensemble de validité $D_v$**<br/>
Il faut que $x - 1 > 0 \\implies x > 1$<br/>
ET que $x + 2 > 0 \\implies x > -2$<br/>
L'intersection de ces deux conditions est $x > 1$. Donc $D_v = ]1; +\\infty[$.<br/><br/>
**2. Simplification de l'équation**<br/>
$\\ln(x - 1) + \\ln(x + 2) = \\ln(4)$<br/>
$\\ln((x - 1)(x + 2)) = \\ln(4)$<br/><br/>
**3. Égalisation des arguments**<br/>
$(x - 1)(x + 2) = 4$<br/>
$x^2 + 2x - x - 2 = 4$<br/>
$x^2 + x - 6 = 0$<br/><br/>
**4. Résolution du polynôme**<br/>
Calcul de $\\Delta = 1^2 - 4(1)(-6) = 1 + 24 = 25$.<br/>
Les racines sont :<br/>
$x_1 = \\frac{-1 - 5}{2} = -3$<br/>
$x_2 = \\frac{-1 + 5}{2} = 2$`
            },
            {
              type: 'PIEGE',
              content: `**Accepter toutes les racines !**<br/>
Si tu t'arrêtes là et que tu dis $S = \\{-3; 2\\}$, c'est **faux**. N'oublie jamais de vérifier avec ton ensemble de validité $D_v = ]1; +\\infty[$.`
            },
            {
              type: 'CONCLUSION',
              content: `La racine $x_1 = -3$ n'appartient pas à $]1; +\\infty[$, on la rejette.<br/>
La racine $x_2 = 2$ appartient à $]1; +\\infty[$, on l'accepte.<br/>
Donc l'ensemble des solutions est $S = \\{ 2 \\}$.`
            }
          ]
        }
      ],
      noteGrandFrere: "C'est le classique des classiques en Série D. L'équation log avec le piège de l'ensemble de validité. Pense à D_v avant même d'écrire ton premier calcul, c'est comme mettre sa ceinture avant de démarrer."
    }
  },
  {
    id: 't5-ex2',
    level: 'MOYEN',
    points: 6,
    testedConcept: "Calcul de limites et levée d'indétermination (Croissances comparées).",
    statement: `Calculer les limites suivantes :
<br/><br/>
a) $\\lim_{x \\to +\\infty} \\frac{e^x - 1}{x^2}$ <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>b) $\\lim_{x \\to 0^+} x \\ln(x + x^2)$ <span class="text-sm text-gray-500 float-right">[3 pts]</span>`,
    correction: {
      questions: [
        {
          label: "a) Limite en +∞",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `1. Évaluer la limite directe pour voir s'il y a une Forme Indéterminée (FI).<br/>
2. Casser la fraction pour faire apparaître une limite du cours (Croissances comparées).`
            },
            {
              type: 'CALCUL',
              content: `Par évaluation directe :<br/>
$\\lim_{x \\to +\\infty} e^x - 1 = +\\infty$ et $\\lim_{x \\to +\\infty} x^2 = +\\infty$. C'est une FI de type $\\frac{\\infty}{\\infty}$.<br/><br/>
On transforme l'expression :<br/>
$\\frac{e^x - 1}{x^2} = \\frac{e^x}{x^2} - \\frac{1}{x^2}$.<br/><br/>
D'après le cours sur les croissances comparées, $\\lim_{x \\to +\\infty} \\frac{e^x}{x^n} = +\\infty$.<br/>
Donc $\\lim_{x \\to +\\infty} \\frac{e^x}{x^2} = +\\infty$.<br/>
Et on sait que $\\lim_{x \\to +\\infty} \\frac{1}{x^2} = 0$.`
            },
            {
              type: 'CONCLUSION',
              content: `Par somme, on obtient $\\lim_{x \\to +\\infty} \\frac{e^x - 1}{x^2} = +\\infty$.`
            }
          ]
        },
        {
          label: "b) Limite en 0+",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `1. Évaluer directement : $0 \\times \\ln(0) = 0 \\times (-\\infty)$, qui est une FI.<br/>
2. Factoriser à l'intérieur du logarithme pour utiliser la limite du cours $\\lim_{x \\to 0^+} x \\ln(x) = 0$.`
            },
            {
              type: 'CALCUL',
              content: `Transformons l'expression en factorisant par $x$ dans le $\\ln$ :<br/>
$x \\ln(x + x^2) = x \\ln(x(1 + x))$.<br/>
On utilise la propriété $\\ln(a \\times b) = \\ln(a) + \\ln(b)$ (car $x>0$ et $1+x>0$) :<br/>
$x \\ln(x(1 + x)) = x \\left( \\ln(x) + \\ln(1 + x) \\right)$<br/>
$x \\ln(x + x^2) = x \\ln(x) + x \\ln(1 + x)$.<br/><br/>
Analysons les deux termes :<br/>
- Par croissance comparée, $\\lim_{x \\to 0^+} x \\ln(x) = 0$.<br/>
- Pour le deuxième terme : $\\lim_{x \\to 0^+} x = 0$ et $\\lim_{x \\to 0^+} \\ln(1 + x) = \\ln(1) = 0$. Donc par produit, $\\lim_{x \\to 0^+} x \\ln(1 + x) = 0 \\times 0 = 0$.`
            },
            {
              type: 'CONCLUSION',
              content: `Par somme, $\\lim_{x \\to 0^+} x \\ln(x + x^2) = 0 + 0 = 0$.`
            }
          ]
        }
      ],
      astuces: [
        "L'exponentielle 'gagne' toujours contre les polynômes en +∞. Le logarithme 'perd' toujours contre les polynômes en +∞ et en 0. C'est ça, la croissance comparée !"
      ],
      noteGrandFrere: "Ne bidouille pas avec les formes indéterminées. Factorise le terme le plus fort (en +∞ ou -∞) ou fais apparaître une formule du cours."
    }
  },
  {
    id: 't5-ex3',
    level: 'BAC',
    points: 10,
    contextBac: { format: "Problème de Modélisation (Biologie)", serie: "Série D", dureeConseillee: 25 },
    testedConcept: "Application de la fonction exponentielle à un problème de croissance de bactéries.",
    statement: `Un biologiste de l'Université Félix Houphouët-Boigny étudie une culture de bactéries. 
Le nombre de bactéries en milliers, $t$ heures après le début de l'observation, est modélisé par la fonction $N$ définie sur $[0; +\\infty[$ par :
<div class="text-center my-2">$N(t) = 50 + 150 e^{0,2t}$</div>

<br/>1. Quel est le nombre initial de bactéries au début de l'observation ? <span class="text-sm text-gray-500 float-right">[1 pt]</span>
<br/>2. Au bout de combien d'heures (arrondi à l'unité) le nombre total de bactéries atteindra-t-il $1 000 000$ (soit $N(t) = 1000$) ? <span class="text-sm text-gray-500 float-right">[4 pts]</span>
<br/>3. Calculer la vitesse de croissance des bactéries, donnée par $N'(t)$. En déduire le sens de variation de la population. <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>4. Le biologiste affirme : "La vitesse de croissance au bout de 10 heures est de plus de 200 000 bactéries par heure". A-t-il raison ? <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    correction: {
      repartitionTemps: [
        { question: "Q1", duree: 2, description: "Calcul basique (t=0)" },
        { question: "Q2", duree: 10, description: "Résolution d'équation avec In (exponentielle)" },
        { question: "Q3", duree: 8, description: "Dérivation de fonction exponentielle composée" },
        { question: "Q4", duree: 5, description: "Application numérique de la dérivée" }
      ],
      questions: [
        {
          label: "1. Nombre initial",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `Le "début de l'observation" correspond au temps $t = 0$. Il faut juste calculer $N(0)$.`
            },
            {
              type: 'CALCUL',
              content: `$N(0) = 50 + 150 e^{0,2 \\times 0} = 50 + 150 e^0$<br/>
Comme $e^0 = 1$, on a :<br/>
$N(0) = 50 + 150 \\times 1 = 200$.`
            },
            {
              type: 'CONCLUSION',
              content: `Au début de l'observation, il y a 200 milliers de bactéries, soit 200 000 bactéries.`
            }
          ]
        },
        {
          label: "2. Temps pour atteindre 1 million",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `L'énoncé demande de résoudre l'équation $N(t) = 1000$. (Rappel: N(t) est en milliers, donc 1 million correspond bien à 1000).`
            },
            {
              type: 'CALCUL',
              content: `Résolvons $50 + 150 e^{0,2t} = 1000$<br/>
On isole l'exponentielle :<br/>
$150 e^{0,2t} = 1000 - 50 = 950$<br/>
$e^{0,2t} = \\frac{950}{150} = \\frac{95}{15} = \\frac{19}{3}$<br/><br/>
On applique la fonction $\\ln$ (qui est la réciproque de l'exponentielle) des deux côtés :<br/>
$\\ln(e^{0,2t}) = \\ln\\left(\\frac{19}{3}\\right)$<br/>
$0,2t = \\ln\\left(\\frac{19}{3}\\right)$<br/>
$t = \\frac{\\ln(\\frac{19}{3})}{0,2}$<br/><br/>
Calcul de la valeur numérique (à la calculatrice) :<br/>
$\\frac{19}{3} \\approx 6,333$<br/>
$\\ln(6,333) \\approx 1,846$<br/>
$t = \\frac{1,846}{0,2} = 1,846 \\times 5 \\approx 9,23$ heures.`
            },
            {
              type: 'CONCLUSION',
              content: `Il faudra environ 9 heures pour que la population atteigne le million.`
            }
          ]
        },
        {
          label: "3. Vitesse de croissance (Dérivée)",
          etapes: [
            {
              type: 'CALCUL',
              content: `La fonction $N$ est dérivable sur $[0; +\\infty[$.<br/>
La dérivée de $e^{at}$ est $a e^{at}$.<br/>
Donc $N'(t) = 0 + 150 \\times (0,2) e^{0,2t}$.<br/>
Comme $150 \\times 0,2 = 30$, on a :<br/>
$N'(t) = 30 e^{0,2t}$.<br/><br/>
Pour le signe : la fonction exponentielle est toujours strictement positive, donc $e^{0,2t} > 0$.<br/>
Par suite, $N'(t) > 0$ pour tout $t \\geq 0$.`
            },
            {
              type: 'CONCLUSION',
              content: `Puisque $N'(t) > 0$, la fonction $N$ est strictement croissante. La population de bactéries ne fait qu'augmenter.`
            }
          ]
        },
        {
          label: "4. Vérification de l'affirmation",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `La "vitesse de croissance au bout de 10h" est exactement la valeur de la dérivée évaluée en $t=10$. On doit donc calculer $N'(10)$.`
            },
            {
              type: 'CALCUL',
              content: `$N'(10) = 30 e^{0,2 \\times 10} = 30 e^2$.<br/>
On sait que $e \\approx 2,718$, donc $e^2 \\approx 7,389$.<br/>
$N'(10) = 30 \\times 7,389 \\approx 221,67$ milliers de bactéries par heure.<br/>
Cela correspond à 221 670 bactéries par heure.`
            },
            {
              type: 'CONCLUSION',
              content: `221 670 est bien supérieur à 200 000. Le biologiste a donc parfaitement raison.`
            }
          ]
        }
      ],
      dialogue: [
        {
          petitFrere: "Mais grand frère, pourquoi on dérive pour trouver la vitesse ? Je pensais qu'on faisait v = d/t comme en physique !",
          grandFrere: "La formule v = d/t c'est pour une vitesse MOYENNE constante. Ici, plus il y a de bactéries, plus elles se reproduisent, donc la vitesse accélère à chaque seconde ! La dérivée N'(t), c'est la vitesse INSTANTANÉE, c'est comme le compteur de vitesse d'une voiture à la seconde t."
        }
      ],
      astuces: [
        "Dans tout problème de biologie ou de radioactivité, si on te parle de 'vitesse d'évolution', c'est toujours le mot de code pour dire 'CALCULE LA DÉRIVÉE'."
      ],
      noteGrandFrere: "Les séries D adorent ces exercices de modélisation. C'est l'essence même de votre filière : utiliser les maths pour expliquer un phénomène biologique ou chimique."
    }
  }
];
