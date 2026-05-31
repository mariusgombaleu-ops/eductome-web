import { Exercise } from './exercices-t1';

export const exercicesT7: Exercise[] = [
  {
    id: 't7-ex1',
    tome: 7,
    numero: 1,
    level: 'BASE',
    points: 4,
    testedConcept: "Dénombrement (Combinaisons) et probabilité d'un événement simple.",
    statement: `Une urne contient 5 boules rouges et 3 boules vertes indiscernables au toucher. On tire simultanément au hasard 2 boules de l'urne.
<br/><br/>
a) Quel est le nombre total de tirages possibles ? <span class="text-sm text-gray-500 float-right">[1 pt]</span>
<br/>b) Calculer la probabilité d'obtenir deux boules de la même couleur. <span class="text-sm text-gray-500 float-right">[3 pts]</span>`,
    correction: {
      questions: [
        {
          label: "a) Nombre total de tirages",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `L'énoncé dit "simultanément". Cela signifie que l'ordre des boules n'a pas d'importance. On doit utiliser des **combinaisons** $C_n^p$.`
            },
            {
              type: 'CALCUL',
              content: `Il y a en tout $5 + 3 = 8$ boules dans l'urne.<br/>
On tire 2 boules parmi 8.<br/>
Le nombre de tirages possibles est l'univers $\\Omega$ :<br/>
$\\text{Card}(\\Omega) = C_8^2 = \\frac{8!}{2!(8-2)!} = \\frac{8 \\times 7}{2} = 28$.`
            }
          ]
        },
        {
          label: "b) Probabilité d'avoir la même couleur",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `Soit $A$ l'événement "Obtenir deux boules de la même couleur".<br/>
Cela signifie : (2 Rouges) **OU** (2 Vertes).<br/>
Le "OU" se traduit par une addition des combinaisons.`
            },
            {
              type: 'CALCUL',
              content: `Nombre de façons de tirer 2 Rouges parmi 5 : $C_5^2 = \\frac{5 \\times 4}{2} = 10$.<br/>
Nombre de façons de tirer 2 Vertes parmi 3 : $C_3^2 = \\frac{3 \\times 2}{2} = 3$.<br/><br/>
Le nombre de cas favorables est $\\text{Card}(A) = C_5^2 + C_3^2 = 10 + 3 = 13$.<br/><br/>
La probabilité est $P(A) = \\frac{\\text{Card}(A)}{\\text{Card}(\\Omega)} = \\frac{13}{28}$.`
            },
            {
              type: 'PIEGE',
              content: `**Confondre Combinaison ($C_n^p$) et Arrangement ($A_n^p$).**<br/>
Si on disait "tirage successif SANS remise", l'ordre compterait (A puis B, c'est différent de B puis A). Là, il faudrait utiliser les $A_n^p$. Fais bien attention au mot "simultanément".`
            },
            {
              type: 'CONCLUSION',
              content: `La probabilité d'obtenir deux boules de même couleur est $P(A) = \\frac{13}{28}$.`
            }
          ]
        }
      ],
      noteGrandFrere: "Le dénombrement c'est la fondation. Si ton univers Omega est faux à la question 1, tout le reste de l'exercice sera faux. Prends toujours 1 minute pour te dire : Ordre ou pas ordre ? Remise ou pas remise ?"
    }
  },
  {
    id: 't7-ex2',
    tome: 7,
    numero: 2,
    level: 'MOYEN',
    points: 6,
    testedConcept: "Probabilités conditionnelles, arbre pondéré et probabilités totales.",
    statement: `Dans une clinique d'Abidjan, 10% des patients sont atteints d'une maladie M. 
Un test de dépistage est mis en place :
- Si un patient est malade, le test est positif dans 90% des cas.
- Si un patient n'est pas malade, le test est positif dans 5% des cas (faux positif).
<br/><br/>On choisit un patient au hasard. On note $M$ l'événement "Le patient est malade" et $T$ l'événement "Le test est positif".
<br/>1. Traduire les données de l'énoncé à l'aide d'un arbre de probabilité. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>2. Calculer la probabilité que le patient soit malade ET que son test soit positif. <span class="text-sm text-gray-500 float-right">[1 pt]</span>
<br/>3. Démontrer que $P(T) = 0,135$. <span class="text-sm text-gray-500 float-right">[3 pts]</span>`,
    correction: {
      questions: [
        {
          label: "1. Arbre de probabilité",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `Les données données en pourcentage se traduisent directement en probabilités (ex: 10% = 0,1).`
            },
            {
              type: 'CALCUL',
              content: `On a :<br/>
- $P(M) = 0,1$ donc $P(\\overline{M}) = 1 - 0,1 = 0,9$.<br/>
- $P_M(T) = 0,9$ donc $P_M(\\overline{T}) = 1 - 0,9 = 0,1$.<br/>
- $P_{\\overline{M}}(T) = 0,05$ donc $P_{\\overline{M}}(\\overline{T}) = 1 - 0,05 = 0,95$.<br/><br/>
(Trace ces données sur un arbre à deux niveaux sur ton brouillon).`
            }
          ]
        },
        {
          label: "2. Probabilité (M ∩ T)",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `Le mot "ET" correspond à l'intersection $\\cap$. On utilise la formule : $P(M \\cap T) = P(M) \\times P_M(T)$.`
            },
            {
              type: 'CALCUL',
              content: `$P(M \\cap T) = 0,1 \\times 0,9 = 0,09$.`
            }
          ]
        },
        {
          label: "3. Calcul de P(T)",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `L'événement $T$ (Avoir un test positif) peut arriver de deux manières différentes : en étant malade OU en n'étant pas malade. Il faut utiliser la **Formule des probabilités totales**.`
            },
            {
              type: 'CALCUL',
              content: `La formule donne :<br/>
$P(T) = P(M \\cap T) + P(\\overline{M} \\cap T)$<br/>
$P(T) = P(M \\cap T) + \\left[ P(\\overline{M}) \\times P_{\\overline{M}}(T) \\right]$<br/><br/>
On connaît déjà $P(M \\cap T) = 0,09$.<br/>
Calculons la deuxième branche :<br/>
$P(\\overline{M} \\cap T) = 0,9 \\times 0,05 = 0,045$<br/><br/>
Additionnons les deux :<br/>
$P(T) = 0,09 + 0,045 = 0,135$.`
            },
            {
              type: 'CONCLUSION',
              content: `La probabilité que le test d'un patient choisi au hasard soit positif est bien de $0,135$ (soit $13,5\\%$).`
            }
          ]
        }
      ],
      astuces: [
        "Dans un arbre pondéré, la somme des branches issues d'un même nœud fait TOUJOURS 1. C'est comme ça qu'on trouve les probabilités 'complémentaires' manquantes."
      ],
      noteGrandFrere: "Ne saute jamais la question de l'arbre. C'est l'outil qui va te donner toutes les réponses aux questions suivantes sans avoir à réfléchir."
    }
  },
  {
    id: 't7-ex3',
    tome: 7,
    numero: 3,
    level: 'BAC',
    points: 10,
    contextBac: { format: "Variable Aléatoire & Loi Binomiale", serie: "Série D", dureeConseillee: 25 },
    testedConcept: "Loi de probabilité, Espérance mathématique et Répétition d'épreuves indépendantes (Loi Binomiale).",
    statement: `Lors de la CAN, une entreprise de boisson lance une promotion "Capsules gagnantes". 
Dans chaque caisse de 24 bouteilles, la répartition des capsules est la suivante :
- 1 capsule permet de gagner 5000 FCFA.
- 3 capsules permettent de gagner 1000 FCFA.
- Les autres capsules ne font rien gagner (0 FCFA).
<br/>Koffi achète une bouteille au hasard dans une caisse neuve. Soit $X$ la variable aléatoire correspondant au gain de Koffi.

<br/><br/>1. Donner la loi de probabilité de $X$ et justifier que l'espérance $E(X) = 333,33$ FCFA. <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>2. La bouteille coûte 500 FCFA. En moyenne, ce jeu est-il favorable à Koffi ? <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>3. Koffi, confiant, achète une bouteille par jour pendant 5 jours. On suppose que le stock de la boutique est tellement grand que chaque achat est indépendant des autres. On note $Y$ le nombre de fois où Koffi gagne les 5000 FCFA sur les 5 jours.
Quelle est la loi suivie par $Y$ ? Préciser ses paramètres. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>4. Calculer la probabilité que Koffi gagne EXACTEMENT une fois les 5000 FCFA sur les 5 jours. <span class="text-sm text-gray-500 float-right">[3 pts]</span>`,
    correction: {
      repartitionTemps: [
        { question: "Q1", duree: 8, description: "Tableau de la loi de probabilité et calcul d'Espérance" },
        { question: "Q2", duree: 3, description: "Comparaison E(X) et prix d'achat" },
        { question: "Q3", duree: 5, description: "Identification de la loi Binomiale" },
        { question: "Q4", duree: 9, description: "Application de la formule P(Y=k)" }
      ],
      questions: [
        {
          label: "1. Loi de probabilité et Espérance",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `La variable aléatoire $X$ représente le **gain**. Il faut lister toutes les valeurs possibles de $X$, appelées $x_i$, puis calculer $P(X = x_i)$.`
            },
            {
              type: 'CALCUL',
              content: `Les gains possibles sont : $x_1 = 5000$, $x_2 = 1000$ et $x_3 = 0$.<br/>
Nombre total de bouteilles dans la caisse = 24.<br/><br/>
- Probabilité de gagner 5000 : il y a 1 capsule sur 24.<br/>
$P(X = 5000) = \\frac{1}{24}$<br/>
- Probabilité de gagner 1000 : il y a 3 capsules sur 24.<br/>
$P(X = 1000) = \\frac{3}{24} = \\frac{1}{8}$<br/>
- Probabilité de gagner 0 : il y a $24 - 1 - 3 = 20$ capsules perdantes.<br/>
$P(X = 0) = \\frac{20}{24} = \\frac{5}{6}$<br/><br/>
**Calcul de l'espérance $E(X)$ :**<br/>
La formule est $E(X) = \\sum x_i \\times P(X=x_i)$.<br/>
$E(X) = 5000 \\times \\frac{1}{24} + 1000 \\times \\frac{3}{24} + 0 \\times \\frac{20}{24}$<br/>
$E(X) = \\frac{5000 + 3000}{24} = \\frac{8000}{24}$<br/>
$E(X) = \\frac{1000}{3} \\approx 333,33$ FCFA.`
            }
          ]
        },
        {
          label: "2. Jeu favorable ?",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `L'espérance $E(X)$ représente le gain MOYEN qu'on espère avoir par partie (sans compter ce qu'on a payé). Pour savoir si le jeu est favorable, il faut comparer ce gain moyen au prix d'achat.`
            },
            {
              type: 'CALCUL',
              content: `L'espérance de gain est de $333,33$ FCFA.<br/>
Le coût de la bouteille est de $500$ FCFA.<br/>
Le "Bénéfice net moyen" serait $333,33 - 500 = -166,67$ FCFA.`
            },
            {
              type: 'CONCLUSION',
              content: `Puisque l'espérance de gain est inférieure au prix de la bouteille, le jeu est **défavorable** au joueur. (C'est normal, la brasserie est là pour faire du profit !)`
            }
          ]
        },
        {
          label: "3. Loi Binomiale",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `On a une **répétition** d'épreuves **indépendantes** avec seulement deux issues possibles (Succès ou Échec). C'est le signal absolu pour une Loi Binomiale.`
            },
            {
              type: 'CALCUL',
              content: `L'épreuve de Bernoulli est "Acheter une bouteille".<br/>
Le succès $S$ est "Gagner les 5000 FCFA".<br/>
Sa probabilité est $p = P(X = 5000) = \\frac{1}{24}$.<br/>
On répète cette épreuve de façon indépendante $n = 5$ fois.`
            },
            {
              type: 'CONCLUSION',
              content: `La variable aléatoire $Y$ suit la loi Binomiale de paramètres $n = 5$ et $p = \\frac{1}{24}$, notée $\\mathcal{B}(5 \\, ; \\, \\frac{1}{24})$.`
            }
          ]
        },
        {
          label: "4. Probabilité de Y = 1",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `Utiliser la formule de la loi Binomiale : $P(Y = k) = C_n^k p^k (1-p)^{n-k}$.`
            },
            {
              type: 'CALCUL',
              content: `On cherche $P(Y = 1)$.<br/>
$n = 5$, $k = 1$, $p = \\frac{1}{24}$, $1-p = \\frac{23}{24}$.<br/>
$P(Y = 1) = C_5^1 \\left(\\frac{1}{24}\\right)^1 \\left(\\frac{23}{24}\\right)^{5-1}$<br/>
$P(Y = 1) = 5 \\times \\frac{1}{24} \\times \\left(\\frac{23}{24}\\right)^4$<br/><br/>
Calculons à la machine :<br/>
$\\frac{23}{24} \\approx 0,9583$<br/>
$0,9583^4 \\approx 0,8439$<br/>
$P(Y = 1) = 5 \\times 0,0416 \\times 0,8439 \\approx 0,175$`
            },
            {
              type: 'CONCLUSION',
              content: `Koffi a environ 17,5% de chances de gagner exactement une fois les 5000 FCFA en 5 jours.`
            }
          ]
        }
      ],
      dialogue: [
        {
          petitFrere: "Mais grand frère, s'il achète 5 bouteilles, il a 5 fois plus de chances de gagner, donc 5/24 non ?",
          grandFrere: "Héhé, c'est l'erreur classique ! Si tu achètes 24 bouteilles, tu as 24/24 donc 100% de chances de gagner ? Non, parce qu'il pourrait tomber plusieurs fois sur des perdantes dans l'immense stock du magasin ! C'est pour ça qu'on utilise la formule Binomiale complexe, ça tient compte de toutes les combinaisons possibles de victoires et de défaites jour par jour."
        }
      ],
      astuces: [
        "Quand on te demande 'La loi de probabilité', on attend UN TABLEAU avec les $x_i$ en haut et les $p_i$ en bas. Ne donne pas juste la phrase."
      ],
      noteGrandFrere: "La loi binomiale, c'est l'exercice bonus du BAC. Il tombe presque à chaque fois, la formule est toujours la même. Apprends-la par cœur : C(n,k) * p^k * (1-p)^(n-k)."
    }
  }
];
