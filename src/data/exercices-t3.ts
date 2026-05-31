import { Exercise } from './exercices-t1';

export const exercicesT3: Exercise[] = [
  {
    id: 't3-ex1',
    level: 'BASE',
    points: 4,
    testedConcept: "Reconnaissance des formes u'/u et u'e^u pour déterminer une primitive.",
    statement: `Déterminer une primitive pour chacune des fonctions suivantes sur l'intervalle donné :
<br/><br/>
a) $f(x) = \\frac{2x}{x^2 + 5}$ sur $\\mathbb{R}$ <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>b) $g(x) = x e^{x^2}$ sur $\\mathbb{R}$ <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    correction: {
      questions: [
        {
          label: "a) Primitive de f(x)",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `La fonction $f$ est une fraction. Le numérateur ($2x$) ressemble beaucoup à la dérivée du dénominateur ($x^2 + 5$). C'est la forme typique $\\frac{u'}{u}$.`
            },
            {
              type: 'STRATEGIE',
              content: `1. On pose $u(x) = x^2 + 5$.<br/>
2. On dérive $u$ pour voir si on obtient le numérateur.<br/>
3. On utilise la formule de cours : la primitive de $\\frac{u'}{u}$ est $\\ln|u| + C$.`
            },
            {
              type: 'CALCUL',
              content: `Posons $u(x) = x^2 + 5$.<br/>
On a $u'(x) = 2x$.<br/>
On remarque que $f(x) = \\frac{u'(x)}{u(x)}$.<br/>
Une primitive est donc $F(x) = \\ln|u(x)| = \\ln|x^2 + 5|$.<br/>
Comme $x^2 + 5 > 0$ pour tout réel $x$, la valeur absolue n'est pas nécessaire.`
            },
            {
              type: 'PIEGE',
              content: `**Oublier la valeur absolue.**<br/>
La formule officielle c'est $\\ln|u(x)|$. Si $u(x)$ peut être négatif, tu dois garder les valeurs absolues. Ici on a de la chance, $x^2 + 5$ est toujours strictement positif, donc on peut écrire des parenthèses.`
            },
            {
              type: 'CONCLUSION',
              content: `Une primitive de $f$ sur $\\mathbb{R}$ est $F(x) = \\ln(x^2 + 5)$.`
            }
          ]
        },
        {
          label: "b) Primitive de g(x)",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `La fonction $g$ contient une exponentielle. Devant elle, on a $x$, qui est (à un coefficient près) la dérivée de l'exposant $x^2$. C'est la forme $u'e^u$.`
            },
            {
              type: 'CALCUL',
              content: `Posons $u(x) = x^2$. On a $u'(x) = 2x$.<br/>
Or, $g(x) = x e^{x^2}$. Il nous manque le "2" pour avoir exactement $u'(x)$.<br/>
On va donc "forcer" le 2 :<br/>
$g(x) = \\frac{1}{2} \\times 2x e^{x^2} = \\frac{1}{2} u'(x) e^{u(x)}$.<br/><br/>
Une primitive de $u'e^u$ est $e^u$.<br/>
Donc une primitive de $g$ est $G(x) = \\frac{1}{2} e^{u(x)}$.`
            },
            {
              type: 'CONCLUSION',
              content: `Une primitive de $g$ sur $\\mathbb{R}$ est $G(x) = \\frac{1}{2} e^{x^2}$.`
            }
          ]
        }
      ],
      noteGrandFrere: "Pour trouver une primitive sans faire d'intégration par parties, tu dois avoir l'œil de l'aigle. Cherche toujours la fonction cachée \"u\" et sa dérivée \"u'\" qui traîne pas loin. Dès que tu les as, c'est bingo."
    }
  },
  {
    id: 't3-ex2',
    level: 'MOYEN',
    points: 6,
    testedConcept: "Technique de l'Intégration Par Parties (IPP) et règle LIATE.",
    statement: `Calculer l'intégrale suivante : 
<div class="text-center text-xl my-4">$I = \\int_1^e x \\ln(x) dx$</div>`,
    correction: {
      questions: [
        {
          label: "Calcul de l'intégrale I",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `On doit intégrer un produit entre un polynôme ($x$) et un logarithme ($\\ln(x)$). Il n'y a pas de formule directe pour ça. On doit utiliser l'**Intégration Par Parties (IPP)**.`
            },
            {
              type: 'STRATEGIE',
              content: `1. Appliquer la formule de l'IPP : $\\int_a^b u(x)v'(x) dx = \\left[ u(x)v(x) \\right]_a^b - \\int_a^b u'(x)v(x) dx$.<br/>
2. Choisir judicieusement $u(x)$ et $v'(x)$ en utilisant la règle **LIATE** (Logarithme, Inverse trigo, Algébrique, Trigo, Exponentielle).`
            },
            {
              type: 'ASTUCE',
              content: `**La règle LIATE :** L'ordre des lettres te dit qui doit être choisi comme $u(x)$. Ici on a un Logarithme (L) et un Algébrique (A). Le L arrive en premier dans LIATE, donc c'est lui qu'on prend pour $u(x)$ !`
            },
            {
              type: 'CALCUL',
              content: `On pose :<br/>
$u(x) = \\ln(x) \\implies u'(x) = \\frac{1}{x}$<br/>
$v'(x) = x \\implies v(x) = \\frac{1}{2}x^2$<br/><br/>
On applique la formule de l'IPP :<br/>
$I = \\left[ \\ln(x) \\times \\frac{1}{2}x^2 \\right]_1^e - \\int_1^e \\frac{1}{x} \\times \\frac{1}{2}x^2 dx$<br/><br/>
On simplifie l'intégrale restante :<br/>
$\\int_1^e \\frac{1}{x} \\times \\frac{1}{2}x^2 dx = \\int_1^e \\frac{1}{2}x dx = \\left[ \\frac{1}{4}x^2 \\right]_1^e$<br/><br/>
On calcule tout :<br/>
$I = \\left( \\ln(e)\\frac{e^2}{2} - \\ln(1)\\frac{1^2}{2} \\right) - \\left( \\frac{e^2}{4} - \\frac{1^2}{4} \\right)$<br/>
On sait que $\\ln(e) = 1$ et $\\ln(1) = 0$.<br/>
$I = \\left( 1 \\times \\frac{e^2}{2} - 0 \\right) - \\left( \\frac{e^2}{4} - \\frac{1}{4} \\right)$<br/>
$I = \\frac{e^2}{2} - \\frac{e^2}{4} + \\frac{1}{4}$<br/>
$I = \\frac{2e^2}{4} - \\frac{e^2}{4} + \\frac{1}{4} = \\frac{e^2 + 1}{4}$`
            },
            {
              type: 'PIEGE',
              content: `**Oublier le signe MOINS de la formule IPP !**<br/>
Beaucoup d'élèves oublient de distribuer le signe $-$ devant la deuxième intégrale ou font des erreurs de signe quand ils développent les crochets. C'est l'erreur la plus fatale au BAC.`
            },
            {
              type: 'CONCLUSION',
              content: `L'intégrale vaut $I = \\frac{e^2 + 1}{4}$.`
            }
          ]
        }
      ],
      dialogue: [
        {
          petitFrere: "Grand Frère, si j'avais inversé et posé u(x) = x et v'(x) = ln(x), ça n'aurait pas marché ?",
          grandFrere: "Tu serais resté bloqué ! Si v'(x) = ln(x), il faut trouver v(x), c'est-à-dire une primitive de ln(x). Or, on ne la connaît pas par cœur au lycée (c'est x ln(x) - x, mais tu n'es pas censé le savoir). C'est pour ça que la règle LIATE est magique : elle te fait dériver ce qui est dur à intégrer !"
        }
      ],
      noteGrandFrere: "L'IPP tombe à chaque BAC. C'est la méthode de sauvetage quand le \"œil de l'aigle\" ne marche pas. Apprends LIATE, écris proprement ton u, v, u', v' dans un coin, et tu auras tes points."
    }
  },
  {
    id: 't3-ex3',
    level: 'BAC',
    points: 10,
    contextBac: { format: "Problème d'Aire", serie: "Séries C & D", dureeConseillee: 20 },
    testedConcept: "Utilisation d'une primitive pour le calcul de l'aire d'un domaine délimité par des courbes (Analogie du Champ).",
    statement: `La bordure d'un champ de maraîchers près d'Azaguié est délimitée par une piste droite (modélisée par l'axe des abscisses) et une petite rivière dont la forme correspond à la courbe représentative de la fonction $f$ définie sur $[0; 3]$ par $f(x) = (x+2) e^{-x}$. 
L'unité graphique sur le plan est de 10 mètres.

<br/><br/>1. Démontrer que la fonction $F$ définie sur $[0; 3]$ par $F(x) = -(x+3)e^{-x}$ est une primitive de $f$. <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>2. L'agriculteur souhaite connaître la surface exacte de son champ compris entre $x=0$ et $x=3$. Hachurer le domaine correspondant (mentalement) et calculer son aire $\\mathcal{A}$ en unités d'aire. <span class="text-sm text-gray-500 float-right">[4 pts]</span>
<br/>3. Sachant que 1 unité d'aire correspond à $100 \\, m^2$, calculer la surface réelle du champ en $m^2$, puis en donner une valeur arrondie au $m^2$ près. <span class="text-sm text-gray-500 float-right">[3 pts]</span>`,
    correction: {
      repartitionTemps: [
        { question: "Q1", duree: 5, description: "Dérivation de la primitive donnée (facile)" },
        { question: "Q2", duree: 8, description: "Calcul de l'intégrale définie et crochets" },
        { question: "Q3", duree: 5, description: "Conversion d'unité d'aire (attention aux échelles)" }
      ],
      questions: [
        {
          label: "1. Vérification de la primitive",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `Pour prouver que $F$ est une primitive de $f$, il ne faut surtout pas chercher à intégrer $f$. Il suffit de **dériver $F$** et vérifier que $F'(x) = f(x)$.`
            },
            {
              type: 'CALCUL',
              content: `$F(x) = -(x+3)e^{-x}$. C'est un produit de la forme $u \\times v$ avec :<br/>
$u(x) = -(x+3) = -x - 3 \\implies u'(x) = -1$<br/>
$v(x) = e^{-x} \\implies v'(x) = -e^{-x}$ (attention au signe moins qui descend de l'exposant)<br/><br/>
$F'(x) = u'v + uv'$<br/>
$F'(x) = (-1)e^{-x} + (-x-3)(-e^{-x})$<br/>
On factorise par $e^{-x}$ :<br/>
$F'(x) = e^{-x} \\left[ -1 - (-x-3) \\right]$<br/>
$F'(x) = e^{-x} \\left[ -1 + x + 3 \\right]$<br/>
$F'(x) = e^{-x} (x + 2) = (x+2)e^{-x}$`
            },
            {
              type: 'CONCLUSION',
              content: `Puisque $F'(x) = f(x)$ pour tout $x \\in [0; 3]$, $F$ est bien une primitive de $f$ sur cet intervalle.`
            }
          ]
        },
        {
          label: "2. Calcul de l'aire en unités d'aire",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `L'aire du domaine compris entre la courbe représentative de $f$, l'axe des abscisses, et les droites $x=0$ et $x=3$ est donnée par l'intégrale $\\mathcal{A}_{ua} = \\int_0^3 |f(x)| dx$.`
            },
            {
              type: 'CALCUL',
              content: `Sur $[0; 3]$, $x+2 > 0$ et $e^{-x} > 0$, donc $f(x) > 0$.<br/>
L'aire en unité d'aire est donc $\\mathcal{A}_{ua} = \\int_0^3 f(x) dx$.<br/><br/>
Comme on connaît déjà une primitive $F$ (d'après la Q1), c'est direct :<br/>
$\\mathcal{A}_{ua} = \\left[ F(x) \\right]_0^3 = F(3) - F(0)$<br/><br/>
Calculons :<br/>
$F(3) = -(3+3)e^{-3} = -6e^{-3}$<br/>
$F(0) = -(0+3)e^{0} = -3 \\times 1 = -3$<br/><br/>
$\\mathcal{A}_{ua} = -6e^{-3} - (-3) = 3 - 6e^{-3}$.`
            },
            {
              type: 'PIEGE',
              content: `**Oublier de vérifier le signe de la fonction.**<br/>
Une aire géométrique est toujours positive ! Si $f(x)$ était négative, l'intégrale serait négative, et il faudrait prendre son opposé. Ne saute jamais l'étape où tu affirmes "f(x) > 0".`
            },
            {
              type: 'CONCLUSION',
              content: `L'aire du domaine est $\\mathcal{A}_{ua} = 3 - \\frac{6}{e^3}$ u.a.`
            }
          ]
        },
        {
          label: "3. Calcul de la surface réelle en m²",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `Pour trouver l'aire réelle, il faut multiplier l'aire en unités d'aire par la valeur en $m^2$ d'une unité d'aire, donnée dans l'énoncé ($100 \\, m^2$).`
            },
            {
              type: 'CALCUL',
              content: `L'aire réelle est :<br/>
$\\mathcal{A} = (3 - 6e^{-3}) \\times 100$<br/>
$\\mathcal{A} = 300 - 600e^{-3} \\, m^2$<br/><br/>
Calcul de la valeur approchée :<br/>
$e^{-3} \\approx 0.049787$<br/>
$600 \\times 0.049787 \\approx 29.87$<br/>
$\\mathcal{A} \\approx 300 - 29.87 = 270.13 \\, m^2$`
            },
            {
              type: 'CONCLUSION',
              content: `La surface réelle du champ est exactement de $300 - 600e^{-3} \\, m^2$, ce qui correspond à environ **$270 \\, m^2$**.`
            }
          ]
        }
      ],
      dialogue: [
        {
          petitFrere: "Grand Frère, pourquoi 1 u.a. fait 100 m² ici ? Dans certains exos, c'est différent.",
          grandFrere: "Très bonne remarque ! L'unité d'aire (u.a.) dépend du repère. C'est l'aire du petit rectangle formé par les vecteurs unitaires i et j. L'énoncé dit 'unité graphique 10 mètres'. Donc 1 unité sur l'axe des x c'est 10m, et 1 unité sur l'axe des y c'est 10m. L'aire du carré unité c'est 10m × 10m = 100 m² !"
        }
      ],
      astuces: [
        "Quand on te demande 'Vérifier que F est une primitive de f', **NE CALCULE PAS L'INTÉGRALE**. Dérive juste F. C'est le cadeau du concepteur du sujet pour ceux qui ont la méthode, c'est 3 points gratuits."
      ],
      noteGrandFrere: "Ce problème est typique des sujets où l'on veut te faire appliquer les maths dans la vraie vie (le champ, le fleuve). Ne te laisse pas impressionner par le texte, va chercher les fonctions et les bornes d'intégration."
    }
  }
];
