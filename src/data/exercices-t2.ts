import { Exercise } from './exercices-t1';

export const exercicesT2: Exercise[] = [
  {
    id: 't2-ex1',
    tome: 2,
    numero: 1,
    level: 'BASE',
    points: 3,
    testedConcept: "Reconnaissance de la forme d'une fonction et application des formules de dérivation (Quotient et Composée).",
    statement: `Calculer la dérivée de la fonction $f$ définie sur $]1; +\\infty[$ par :
<br/><br/>
<div class="text-center text-xl my-4">
  $f(x) = \\frac{\\sqrt{3x - 2}}{x}$
</div>`,
    correction: {
      questions: [
        {
          label: "Calcul de f'(x)",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `La fonction $f$ est de la forme $\\frac{u}{v}$. C'est un **quotient**. Le numérateur contient lui-même une **racine carrée** $\\sqrt{w}$.`
            },
            {
              type: 'STRATEGIE',
              content: `1. On pose $u(x) = \\sqrt{3x - 2}$ et $v(x) = x$.<br/>2. On utilise la formule du quotient : $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$.<br/>3. Pour trouver $u'(x)$, on utilise la formule de la dérivée d'une racine : $(\\sqrt{w})' = \\frac{w'}{2\\sqrt{w}}$.`
            },
            {
              type: 'CALCUL',
              content: `Dérivons $u(x) = \\sqrt{3x - 2}$ :<br/>
On a $w(x) = 3x - 2 \\implies w'(x) = 3$.<br/>
Donc $u'(x) = \\frac{3}{2\\sqrt{3x - 2}}$.<br/><br/>
Dérivons $v(x) = x$ :<br/>
$v'(x) = 1$.<br/><br/>
Appliquons la formule du quotient :<br/>
$f'(x) = \\frac{\\left( \\frac{3}{2\\sqrt{3x - 2}} \\right) \\times x - \\sqrt{3x - 2} \\times 1}{x^2}$<br/><br/>
Mettons le numérateur au même dénominateur ($2\\sqrt{3x - 2}$) :<br/>
$f'(x) = \\frac{ \\frac{3x - 2\\sqrt{3x - 2}\\sqrt{3x - 2}}{2\\sqrt{3x - 2}} }{x^2}$<br/>
$f'(x) = \\frac{ \\frac{3x - 2(3x - 2)}{2\\sqrt{3x - 2}} }{x^2}$<br/>
$f'(x) = \\frac{3x - 6x + 4}{2x^2\\sqrt{3x - 2}}$`
            },
            {
              type: 'CONCLUSION',
              content: `Pour tout $x \\in ]1; +\\infty[$, $\\quad f'(x) = \\frac{-3x + 4}{2x^2\\sqrt{3x - 2}}$`
            }
          ]
        }
      ],
      noteGrandFrere: "La dérivée d'un quotient c'est le classique du BAC. Entraîne-toi à la faire vite et bien. L'erreur la plus courante est de s'emmêler les pinceaux lors de la mise au même dénominateur de la fraction du haut. Fais ça avec calme."
    }
  },
  {
    id: 't2-ex2',
    tome: 2,
    numero: 2,
    level: 'MOYEN',
    points: 6,
    testedConcept: "Étude de la dérivabilité en un point et interprétation graphique (tangente).",
    statement: `Soit $g$ la fonction définie sur $\\mathbb{R}$ par $g(x) = |x - 2|x^2$.
<br/><br/>1. Étudier la dérivabilité de $g$ en $x_0 = 2$.
<br/>2. Interpréter graphiquement le résultat obtenu.`,
    correction: {
      questions: [
        {
          label: "1. Dérivabilité de g en 2",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `On doit étudier la dérivabilité en un point précis où il y a une **valeur absolue** qui s'annule.`
            },
            {
              type: 'STRATEGIE',
              content: `1. Retirer la valeur absolue selon que $x > 2$ ou $x < 2$.<br/>
2. Calculer le taux d'accroissement $T(x) = \\frac{g(x) - g(2)}{x - 2}$ à gauche et à droite de 2.<br/>
3. Calculer les limites de $T(x)$ quand $x \\to 2^-$ et $x \\to 2^+$.<br/>
4. Comparer les deux limites.`
            },
            {
              type: 'CALCUL',
              content: `Calculons $g(2)$ : $g(2) = |2 - 2| \\times 2^2 = 0$.<br/><br/>
**À droite de 2 ($x > 2$) :**<br/>
$x - 2 > 0 \\implies |x - 2| = x - 2$. Donc $g(x) = (x - 2)x^2$.<br/>
$T(x) = \\frac{g(x) - g(2)}{x - 2} = \\frac{(x - 2)x^2 - 0}{x - 2} = x^2$.<br/>
$\\lim_{x \\to 2^+} T(x) = \\lim_{x \\to 2^+} x^2 = 4$.<br/>
La dérivée à droite est $g_d'(2) = 4$.<br/><br/>
**À gauche de 2 ($x < 2$) :**<br/>
$x - 2 < 0 \\implies |x - 2| = -(x - 2)$. Donc $g(x) = -(x - 2)x^2$.<br/>
$T(x) = \\frac{g(x) - g(2)}{x - 2} = \\frac{-(x - 2)x^2 - 0}{x - 2} = -x^2$.<br/>
$\\lim_{x \\to 2^-} T(x) = \\lim_{x \\to 2^-} (-x^2) = -4$.<br/>
La dérivée à gauche est $g_g'(2) = -4$.`
            },
            {
              type: 'PIEGE',
              content: `**Confondre continuité et dérivabilité.**<br/>
Ici, $g$ est tout à fait **continue** en 2 (limite à gauche = limite à droite = 0). Beaucoup d'élèves écrivent : *"g est continue donc elle est dérivable"*. C'est FAUX ! Comme on le voit ici, les deux demi-dérivées sont différentes ($4 \\neq -4$).`
            },
            {
              type: 'CONCLUSION',
              content: `Puisque $g_d'(2) \\neq g_g'(2)$, la fonction $g$ **n'est pas dérivable en $2$**.`
            }
          ]
        },
        {
          label: "2. Interprétation graphique",
          etapes: [
            {
              type: 'CONCLUSION',
              content: `La courbe représentative de $g$ admet au point d'abscisse 2 deux demi-tangentes de coefficients directeurs différents ($4$ et $-4$). C'est ce qu'on appelle un **point anguleux**.`
            }
          ]
        }
      ],
      astuces: [
        "Quand tu vois une valeur absolue dans une étude de dérivabilité, c'est presque sûr à 90% qu'il faudra faire la limite à gauche ET à droite, et que tu tomberas sur un **point anguleux**."
      ],
      noteGrandFrere: "Le coup du point anguleux, c'est un grand classique du BAC ivoirien. Les correcteurs adorent voir si tu fais bien la distinction entre la gauche et la droite."
    }
  },
  {
    id: 't2-ex3',
    tome: 2,
    numero: 3,
    level: 'BAC',
    points: 10,
    contextBac: { format: "Problème d'optimisation", serie: "Séries C & D", dureeConseillee: 25 },
    testedConcept: "Modélisation, dérivation et recherche d'extremum dans un contexte concret (Analogie Ivoirienne).",
    statement: `Un transporteur de la compagnie UTB possède un car qui fait la liaison Abidjan-Yamoussoukro. 
Le coût de consommation du carburant, en milliers de FCFA par heure, est donné par la formule $C_1(v) = 2 + \\frac{v^2}{400}$, où $v$ est la vitesse constante du car en km/h. 
Les autres frais (chauffeur, péage, amortissement du car) s'élèvent à $8$ milliers de FCFA par heure. 
La distance Abidjan-Yamoussoukro est de $240$ km. On suppose que la vitesse $v$ est comprise entre $40$ et $120$ km/h.

<br/><br/>1. Montrer que le coût total du voyage, en milliers de FCFA, en fonction de la vitesse $v$, est donné par : 
<div class="text-center my-2">$C(v) = \\frac{2400}{v} + \\frac{3v}{5}$</div> <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>2. Calculer $C'(v)$ pour $v \\in [40; 120]$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>3. Étudier le signe de $C'(v)$ et dresser le tableau de variations de la fonction $C$. <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>4. En déduire la vitesse à laquelle le chauffeur doit rouler pour que le coût du voyage soit minimal. Quel est ce coût minimal ? <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    correction: {
      repartitionTemps: [
        { question: "Q1", duree: 7, description: "Modélisation physique (temps = d/v)" },
        { question: "Q2", duree: 5, description: "Calcul de la dérivée" },
        { question: "Q3", duree: 8, description: "Signe et tableau de variations" },
        { question: "Q4", duree: 4, description: "Interprétation de l'extremum" }
      ],
      questions: [
        {
          label: "1. Expression du coût total",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `On cherche le coût total **pour le voyage entier**, alors que l'énoncé donne les coûts **par heure**.`
            },
            {
              type: 'STRATEGIE',
              content: `1. Trouver le temps total du voyage $t$ en fonction de la vitesse $v$.<br/>
2. Calculer le coût horaire total (Carburant + Autres frais).<br/>
3. Multiplier le coût horaire total par le temps de voyage $t$ pour obtenir $C(v)$.`
            },
            {
              type: 'CALCUL',
              content: `La distance est $d = 240$ km. On sait que vitesse = distance / temps, donc temps $t = \\frac{d}{v} = \\frac{240}{v}$ heures.<br/><br/>
Le coût total **par heure** est :<br/>
$C_h(v) = C_1(v) + \\text{Autres frais} = 2 + \\frac{v^2}{400} + 8 = 10 + \\frac{v^2}{400}$.<br/><br/>
Le coût **pour le voyage entier** est :<br/>
$C(v) = C_h(v) \\times t = \\left( 10 + \\frac{v^2}{400} \\right) \\times \\frac{240}{v}$<br/>
$C(v) = 10 \\times \\frac{240}{v} + \\frac{v^2}{400} \\times \\frac{240}{v}$<br/>
$C(v) = \\frac{2400}{v} + \\frac{240 v^2}{400 v}$<br/>
$C(v) = \\frac{2400}{v} + \\frac{3v}{5}$`
            },
            {
              type: 'CONCLUSION',
              content: `Le coût total du trajet en fonction de la vitesse $v$ est bien $C(v) = \\frac{2400}{v} + \\frac{3v}{5}$.`
            }
          ]
        },
        {
          label: "2. Calcul de la dérivée",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `On dérive la fonction $C(v)$ sur l'intervalle $[40; 120]$. C'est une somme d'une fonction inverse et d'une fonction affine.`
            },
            {
              type: 'CALCUL',
              content: `Rappel : la dérivée de $\\frac{1}{v}$ est $-\\frac{1}{v^2}$ et la dérivée de $a\\cdot v$ est $a$.<br/>
$C'(v) = 2400 \\times \\left(-\\frac{1}{v^2}\\right) + \\frac{3}{5}$<br/>
$C'(v) = -\\frac{2400}{v^2} + \\frac{3}{5}$<br/><br/>
Mettons au même dénominateur ($5v^2$) :<br/>
$C'(v) = \\frac{-2400 \\times 5 + 3 \\times v^2}{5v^2} = \\frac{3v^2 - 12000}{5v^2}$`
            },
            {
              type: 'PIEGE',
              content: `L'erreur typique ici est d'utiliser la lourde formule du quotient $\\frac{u'v - uv'}{v^2}$ pour $\\frac{2400}{v}$. Ça marche, mais c'est risqué ! Apprends que $\\left(\\frac{k}{x}\\right)' = -\\frac{k}{x^2}$. C'est 10 fois plus rapide et tu feras moins de fautes de signes.`
            },
            {
              type: 'CONCLUSION',
              content: `Pour tout $v \\in [40; 120]$, $\\quad C'(v) = \\frac{3(v^2 - 4000)}{5v^2}$.`
            }
          ]
        },
        {
          label: "3. Signe et Variations",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `1. Trouver le signe du dénominateur (souvent positif).<br/>
2. Chercher les racines du numérateur.<br/>
3. Construire le tableau de signe puis le tableau de variations sur l'intervalle $[40; 120]$.`
            },
            {
              type: 'CALCUL',
              content: `Pour $v \\in [40; 120]$, le dénominateur $5v^2 > 0$. Le signe de $C'(v)$ est donc celui de $v^2 - 4000$.<br/>
Résolvons $v^2 - 4000 = 0$ :<br/>
$v^2 = 4000 \\implies v = \\sqrt{4000} = \\sqrt{400 \\times 10} = 20\\sqrt{10}$ (car $v > 0$).<br/>
Valeur approchée : $20\\sqrt{10} \\approx 63,24$ km/h.<br/><br/>
Signe de $v^2 - 4000$ (signe de $a=1>0$ à l'extérieur des racines) :<br/>
- Si $v \\in [40; 20\\sqrt{10}[$, $v^2 - 4000 < 0 \\implies C'(v) < 0$.<br/>
- Si $v \\in ]20\\sqrt{10}; 120]$, $v^2 - 4000 > 0 \\implies C'(v) > 0$.<br/><br/>
**Variations :**<br/>
$C$ est strictement décroissante sur $[40; 20\\sqrt{10}]$ et strictement croissante sur $[20\\sqrt{10}; 120]$.`
            }
          ]
        },
        {
          label: "4. Vitesse et Coût optimaux",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `D'après le tableau de variations, $C$ atteint un minimum absolu au point où la dérivée s'annule en changeant de signe.`
            },
            {
              type: 'CONCLUSION',
              content: `Le coût du voyage est minimal pour une vitesse de $v = 20\\sqrt{10} \\approx 63,2$ km/h.<br/>
Calculons ce coût :<br/>
$C(20\\sqrt{10}) = \\frac{2400}{20\\sqrt{10}} + \\frac{3(20\\sqrt{10})}{5}$<br/>
$C(20\\sqrt{10}) = \\frac{120}{\\sqrt{10}} + 12\\sqrt{10} = 12\\sqrt{10} + 12\\sqrt{10} = 24\\sqrt{10}$<br/>
$24\\sqrt{10} \\approx 75,89$<br/>
Le coût minimal est donc d'environ 75 890 FCFA pour le trajet entier.`
            }
          ]
        }
      ],
      dialogue: [
        {
          petitFrere: "Grand Frère, pourquoi je ne peux pas juste dire que la vitesse limite sur l'autoroute c'est 120 km/h, donc c'est mieux d'aller vite pour réduire le temps et payer le chauffeur moins longtemps ?",
          grandFrere: "C'est une très bonne réflexion ! C'est vrai que si tu roules à 120 km/h, le voyage dure moins longtemps (2 heures), donc tu paies moins les frais horaires fixes. Mais regarde la formule du carburant : v²/400. À 120 km/h, ça explose ! Ta consommation de carburant coûte tellement cher qu'elle dépasse l'économie faite sur le temps de trajet. Les maths te montrent le point d'équilibre parfait : ~63 km/h."
        }
      ],
      astuces: [
        "Dans les problèmes d'optimisation (minimiser un coût, maximiser une aire), cherche **toujours** à annuler la dérivée. Le BAC c'est aussi de la vraie vie traduite en maths."
      ],
      noteGrandFrere: "Super problème classique du BAC. On l'habille avec un Gbaka, un car UTB ou une plantation de cacao, mais la mécanique reste la même : mettre en équation, dériver, annuler, trouver le minimum. Maîtrise cette mécanique."
    }
  }
];
