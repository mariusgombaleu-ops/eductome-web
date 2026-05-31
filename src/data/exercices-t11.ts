import { Exercise } from './exercices-t1';

export const exercicesT11: Exercise[] = [
  {
    id: 't11-ex1',
    level: 'BASE',
    points: 4,
    testedConcept: "Résolution d'équation différentielle du 1er ordre y' = ay + b.",
    statement: `Résoudre sur $\\mathbb{R}$ l'équation différentielle $(E) : y' - 3y = 6$.
<br/>Déterminer la solution particulière $f$ qui vérifie $f(0) = 5$.`,
    correction: {
      questions: [
        {
          label: "Résolution",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `On écrit l'équation sous la forme classique du cours : $y' = ay + b$.`
            },
            {
              type: 'STRATEGIE',
              content: `1. Réécrire : $y' = 3y + 6$. (Donc $a=3$ et $b=6$).<br/>
2. Appliquer la formule du cours : les solutions sont de la forme $y(x) = k e^{ax} - \\frac{b}{a}$, avec $k \\in \\mathbb{R}$.<br/>
3. Utiliser la condition initiale $f(0) = 5$ pour trouver la valeur exacte de $k$.`
            },
            {
              type: 'CALCUL',
              content: `**Solution générale :**<br/>
$y(x) = k e^{3x} - \\frac{6}{3} = k e^{3x} - 2$.<br/><br/>
**Recherche de la solution particulière :**<br/>
On sait que $f(0) = 5$.<br/>
On remplace $x$ par 0 :<br/>
$k e^{3(0)} - 2 = 5$<br/>
$k e^0 - 2 = 5$<br/>
$k(1) = 5 + 2$<br/>
$k = 7$.`
            },
            {
              type: 'CONCLUSION',
              content: `La solution générale est l'ensemble des fonctions $y(x) = k e^{3x} - 2$.<br/>
La solution particulière cherchée est $f(x) = 7 e^{3x} - 2$.`
            }
          ]
        }
      ]
    }
  },
  {
    id: 't11-ex2',
    level: 'MOYEN',
    points: 6,
    testedConcept: "Résolution d'équation différentielle du 2nd ordre y'' + w^2 y = 0.",
    statement: `On considère l'équation différentielle $(E') : y'' + 4y = 0$.
<br/><br/>1. Déterminer la solution générale de cette équation. <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>2. Déterminer l'unique solution $g$ telle que la courbe représentative de $g$ passe par le point $A(0; 2)$ et admette en ce point une tangente horizontale. <span class="text-sm text-gray-500 float-right">[3 pts]</span>`,
    correction: {
      questions: [
        {
          label: "1. Solution générale",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `L'équation est de la forme $y'' + \\omega^2 y = 0$.`
            },
            {
              type: 'CALCUL',
              content: `Ici, $\\omega^2 = 4$, donc $\\omega = 2$.<br/>
D'après le cours, la solution générale s'écrit :<br/>
$y(x) = A \\cos(\\omega x) + B \\sin(\\omega x)$, avec $A, B \\in \\mathbb{R}$.<br/>
Donc $y(x) = A \\cos(2x) + B \\sin(2x)$.`
            }
          ]
        },
        {
          label: "2. Solution particulière avec conditions",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `Il faut traduire mathématiquement les conditions :<br/>
- "passe par A(0; 2)" signifie que $g(0) = 2$.<br/>
- "tangente horizontale en x=0" signifie que la dérivée en ce point est nulle, donc $g'(0) = 0$.`
            },
            {
              type: 'CALCUL',
              content: `On a $g(x) = A \\cos(2x) + B \\sin(2x)$.<br/><br/>
**Première condition : $g(0) = 2$**<br/>
$A \\cos(0) + B \\sin(0) = 2$<br/>
$A(1) + B(0) = 2 \\implies A = 2$.<br/><br/>
**Deuxième condition : $g'(0) = 0$**<br/>
On doit d'abord calculer la dérivée $g'(x)$ :<br/>
$g'(x) = -2A \\sin(2x) + 2B \\cos(2x)$.<br/>
On applique $g'(0) = 0$ :<br/>
$-2A \\sin(0) + 2B \\cos(0) = 0$<br/>
$0 + 2B(1) = 0 \\implies B = 0$.`
            },
            {
              type: 'CONCLUSION',
              content: `La solution cherchée est $g(x) = 2 \\cos(2x)$.`
            }
          ]
        }
      ],
      astuces: [
        "Tangente horizontale = Dérivée nulle. C'est une traduction absolue à mémoriser pour n'importe quel chapitre d'analyse."
      ]
    }
  },
  {
    id: 't11-ex3',
    level: 'BAC',
    points: 10,
    contextBac: { format: "Problème de Modélisation", serie: "Série D", dureeConseillee: 25 },
    testedConcept: "Modélisation d'un phénomène thermique par une équation différentielle (Loi de Newton).",
    statement: `Dans un laboratoire de chimie à Yamoussoukro, un liquide est chauffé à $100^{\\circ}\\text{C}$ puis laissé à refroidir dans une salle où la température ambiante est maintenue à $20^{\\circ}\\text{C}$.
La loi de refroidissement de Newton stipule que la vitesse de refroidissement est proportionnelle à la différence entre la température du liquide et la température ambiante.

Si on note $\\theta(t)$ la température du liquide (en $^{\\circ}\\text{C}$) au bout de $t$ minutes, cette loi se traduit par l'équation différentielle :
<div class="text-center my-2">$\\theta'(t) = -k(\\theta(t) - 20)$</div>
où $k$ est une constante positive.

<br/>1. Posons $y(t) = \\theta(t) - 20$. Montrer que $y$ est solution de l'équation $y' = -ky$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>2. Résoudre cette nouvelle équation et en déduire l'expression générale de $\\theta(t)$. <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>3. À l'instant initial $t=0$, la température est de $100^{\\circ}\\text{C}$. Au bout de $10$ minutes, elle est de $60^{\\circ}\\text{C}$. 
Calculer la constante $k$ (on donnera une valeur exacte avec un logarithme). <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>4. Au bout de combien de temps la température du liquide passera-t-elle sous les $30^{\\circ}\\text{C}$ ? <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    correction: {
      repartitionTemps: [
        { question: "Q1", duree: 5, description: "Changement de fonction inconnue" },
        { question: "Q2", duree: 5, description: "Résolution classique y' = ay" },
        { question: "Q3", duree: 10, description: "Utilisation des conditions initiales pour trouver C et k" },
        { question: "Q4", duree: 5, description: "Résolution d'inéquation avec ln" }
      ],
      questions: [
        {
          label: "1. Changement de variable",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `On pose $y(t) = \\theta(t) - 20$. Il faut dériver cette expression pour voir ce que devient $y'(t)$.`
            },
            {
              type: 'CALCUL',
              content: `$y'(t) = \\theta'(t) - 0 = \\theta'(t)$.<br/>
L'équation de départ est $\\theta'(t) = -k(\\theta(t) - 20)$.<br/>
On remplace $\\theta'(t)$ par $y'(t)$, et $(\\theta(t) - 20)$ par $y(t)$.<br/>
On obtient bien $y'(t) = -k \\cdot y(t)$.`
            }
          ]
        },
        {
          label: "2. Résolution",
          etapes: [
            {
              type: 'CALCUL',
              content: `L'équation $y' = -ky$ a pour solution générale :<br/>
$y(t) = C e^{-kt}$ (avec $C \\in \\mathbb{R}$).<br/><br/>
Or, $y(t) = \\theta(t) - 20$.<br/>
Donc $\\theta(t) - 20 = C e^{-kt}$<br/>
$\\theta(t) = C e^{-kt} + 20$.`
            }
          ]
        },
        {
          label: "3. Détermination des constantes C et k",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `1. Utiliser $\\theta(0) = 100$ pour trouver $C$.<br/>
2. Utiliser $\\theta(10) = 60$ pour trouver $k$.`
            },
            {
              type: 'CALCUL',
              content: `**A t=0 :**<br/>
$\\theta(0) = C e^{0} + 20 = 100$<br/>
$C + 20 = 100 \\implies C = 80$.<br/>
Donc $\\theta(t) = 80 e^{-kt} + 20$.<br/><br/>
**A t=10 :**<br/>
$\\theta(10) = 80 e^{-10k} + 20 = 60$<br/>
$80 e^{-10k} = 40$<br/>
$e^{-10k} = \\frac{40}{80} = \\frac{1}{2}$<br/><br/>
On applique $\\ln$ :<br/>
$-10k = \\ln\\left(\\frac{1}{2}\\right)$<br/>
$-10k = -\\ln(2)$<br/>
$k = \\frac{\\ln(2)}{10} \\approx 0,069$.`
            },
            {
              type: 'CONCLUSION',
              content: `La fonction de température est donc $\\theta(t) = 80 e^{-\\frac{\\ln(2)}{10} t} + 20$.`
            }
          ]
        },
        {
          label: "4. Moment du passage sous les 30°C",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `Il faut résoudre l'inéquation $\\theta(t) \\leq 30$.`
            },
            {
              type: 'CALCUL',
              content: `$80 e^{-kt} + 20 \\leq 30$<br/>
$80 e^{-kt} \\leq 10$<br/>
$e^{-kt} \\leq \\frac{1}{8}$<br/><br/>
On applique $\\ln$ (fonction strictement croissante) :<br/>
$-kt \\leq \\ln\\left(\\frac{1}{8}\\right)$<br/>
$-kt \\leq -\\ln(8)$<br/>
$kt \\geq \\ln(8)$<br/>
$t \\geq \\frac{\\ln(8)}{k}$<br/><br/>
On remplace $k$ par sa valeur $\\frac{\\ln(2)}{10}$ :<br/>
$t \\geq \\frac{\\ln(8)}{\\frac{\\ln(2)}{10}}$<br/>
On sait que $\\ln(8) = \\ln(2^3) = 3\\ln(2)$.<br/>
$t \\geq \\frac{3\\ln(2) \\times 10}{\\ln(2)}$<br/>
$t \\geq 30$.`
            },
            {
              type: 'CONCLUSION',
              content: `Il faudra attendre exactement 30 minutes pour que le liquide passe sous les $30^{\\circ}\\text{C}$.`
            }
          ]
        }
      ],
      dialogue: [
        {
          petitFrere: "Grand frère, j'ai l'impression de faire de la physique là, c'est quoi le rapport avec les maths ?",
          grandFrere: "Les maths sont le langage de la physique ! La 'vitesse de refroidissement' en physique, c'est la dérivée theta'(t) en maths. C'est grâce à nos équations différentielles qu'on peut programmer les frigos et les fours pour qu'ils s'arrêtent au bon moment !"
        }
      ],
      astuces: [
        "Quand tu dois diviser par un nombre négatif dans une inéquation (ici diviser par -k), N'OUBLIE JAMAIS de changer le sens de l'inégalité (le $\\leq$ devient $\\geq$)."
      ],
      noteGrandFrere: "C'est l'exercice 'Transversal' type de la Série D. Il mélange les équations différentielles (Chap 11) et les logarithmes (Chap 5). Si tu maîtrises ça, tu montres au correcteur que tu as le niveau ingénieur."
    }
  }
];
