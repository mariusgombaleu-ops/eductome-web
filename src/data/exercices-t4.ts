import { Exercise } from './exercices-t1';

export const exercicesT4: Exercise[] = [
  {
    id: 't4-ex1',
    tome: 4,
    numero: 1,
    level: 'BASE',
    points: 4,
    testedConcept: "Reconnaissance et calcul de termes d'une suite arithmétique et géométrique.",
    statement: `Soit $(U_n)$ une suite arithmétique de raison $r = 3$ et de premier terme $U_0 = 2$.
<br/>Soit $(V_n)$ une suite géométrique de raison $q = \\frac{1}{2}$ et de premier terme $V_0 = 16$.
<br/><br/>
a) Exprimer $U_n$ en fonction de $n$ et calculer $U_{10}$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>b) Exprimer $V_n$ en fonction de $n$ et calculer $V_5$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    correction: {
      questions: [
        {
          label: "a) La suite arithmétique (U_n)",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `On est face à une suite **arithmétique**. Son terme général a une formule précise liée à $U_0$ et $r$.`
            },
            {
              type: 'CALCUL',
              content: `La formule du cours est : $U_n = U_0 + n \\times r$<br/>
Ici, $U_0 = 2$ et $r = 3$.<br/>
Donc l'expression est : $U_n = 2 + 3n$.<br/><br/>
Pour calculer $U_{10}$, on remplace $n$ par $10$ :<br/>
$U_{10} = 2 + 3 \\times 10 = 2 + 30 = 32$.`
            }
          ]
        },
        {
          label: "b) La suite géométrique (V_n)",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `On est face à une suite **géométrique**. La formule utilise une puissance pour la raison $q$.`
            },
            {
              type: 'CALCUL',
              content: `La formule du cours est : $V_n = V_0 \\times q^n$<br/>
Ici, $V_0 = 16$ et $q = \\frac{1}{2}$.<br/>
Donc l'expression est : $V_n = 16 \\times \\left(\\frac{1}{2}\\right)^n = \\frac{16}{2^n}$.<br/><br/>
Pour calculer $V_5$, on remplace $n$ par $5$ :<br/>
$V_5 = 16 \\times \\left(\\frac{1}{2}\\right)^5 = 16 \\times \\frac{1}{32} = \\frac{16}{32} = \\frac{1}{2}$.`
            }
          ]
        }
      ],
      noteGrandFrere: "Les formules U_n = U_0 + nr et V_n = V_0 * q^n sont les bases vitales de ce chapitre. Au BAC, si tu ne sais pas ça, tu perds des points gratuits."
    }
  },
  {
    id: 't4-ex2',
    tome: 4,
    numero: 2,
    level: 'MOYEN',
    points: 6,
    testedConcept: "Démonstration par récurrence (Initialisation et Hérédité).",
    statement: `Soit la suite $(u_n)$ définie par $u_0 = 1$ et pour tout $n \\in \\mathbb{N}$, $u_{n+1} = \\frac{1}{3}u_n + 2$.
<br/><br/>Démontrer par récurrence que pour tout entier naturel $n$, on a $u_n \\leq 3$.`,
    correction: {
      questions: [
        {
          label: "Démonstration par récurrence",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `Une démonstration par récurrence se fait toujours en 3 étapes incontournables :<br/>
1. **Initialisation :** Prouver que la propriété est vraie au premier rang ($n=0$).<br/>
2. **Hérédité :** Supposer que c'est vrai à un rang $k$, et prouver que ça le reste au rang $k+1$.<br/>
3. **Conclusion :** Citer le principe de récurrence.`
            },
            {
              type: 'CALCUL',
              content: `Posons $P(n)$ la propriété : "$u_n \\leq 3$".<br/><br/>
**1. Initialisation**<br/>
Pour $n=0$, $u_0 = 1$. Or $1 \\leq 3$, donc $P(0)$ est vraie.<br/><br/>
**2. Hérédité**<br/>
Supposons que $P(k)$ est vraie pour un certain entier $k \\geq 0$, c'est-à-dire $u_k \\leq 3$.<br/>
Montrons que $P(k+1)$ est vraie, c'est-à-dire $u_{k+1} \\leq 3$.<br/>
Par hypothèse de récurrence, on a : $u_k \\leq 3$.<br/>
On multiplie par $\\frac{1}{3}$ (qui est positif) : $\\frac{1}{3}u_k \\leq \\frac{1}{3} \\times 3 \\implies \\frac{1}{3}u_k \\leq 1$.<br/>
On ajoute $2$ des deux côtés : $\\frac{1}{3}u_k + 2 \\leq 1 + 2$.<br/>
Soit $u_{k+1} \\leq 3$.<br/>
Donc l'hérédité est prouvée.<br/><br/>
**3. Conclusion**<br/>
D'après le principe de récurrence, pour tout $n \\in \\mathbb{N}$, $u_n \\leq 3$.`
            },
            {
              type: 'PIEGE',
              content: `**Sauter l'initialisation.**<br/>
Parfois, on est tellement concentré sur le calcul de l'hérédité qu'on oublie de vérifier le premier terme. Sans la base, ta récurrence s'écroule ! C'est 0.5 pt perdu bêtement au BAC.`
            }
          ]
        }
      ],
      astuces: [
        "Dans l'hérédité, pars **toujours** de ton hypothèse de récurrence ($u_k \\leq 3$) et 'fabrique' l'expression de $u_{k+1}$ étape par étape en respectant les priorités mathématiques."
      ],
      noteGrandFrere: "La rédaction est reine ici. Les correcteurs en Série D cherchent les 3 mots clés : Initialisation, Hérédité, Conclusion. Si c'est bien structuré, c'est bingo."
    }
  },
  {
    id: 't4-ex3',
    tome: 4,
    numero: 3,
    level: 'BAC',
    points: 10,
    contextBac: { format: "Suite auxiliaire & Modélisation", serie: "Série D", dureeConseillee: 25 },
    testedConcept: "Utilisation d'une suite auxiliaire géométrique pour trouver l'expression de la suite principale (Analogie Tontine).",
    statement: `Koffi participe à une "Tontine" (système d'épargne) où il cotise. Au 1er janvier 2020, il possède sur son compte tontine une somme $U_0 = 100$ (en milliers de FCFA). 
Chaque année, la gestionnaire de la tontine prélève 10% pour frais de gestion, mais Koffi rajoute systématiquement 30 (milliers de FCFA).
<br/>On note $U_n$ le montant de son compte au 1er janvier de l'année $2020 + n$.

<br/><br/>1. Justifier que pour tout $n \\in \\mathbb{N}$, $U_{n+1} = 0,9 U_n + 30$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>2. Soit $(V_n)$ la suite définie par $V_n = U_n - 300$. Montrer que $(V_n)$ est une suite géométrique dont on précisera la raison $q$ et le premier terme $V_0$. <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>3. Exprimer $V_n$ puis $U_n$ en fonction de $n$. <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>4. Combien d'argent Koffi aura-t-il sur son compte au bout de très longtemps (limite quand $n \\to +\\infty$) ? <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    correction: {
      repartitionTemps: [
        { question: "Q1", duree: 5, description: "Traduction de l'énoncé (diminution de 10% = x 0.9)" },
        { question: "Q2", duree: 10, description: "Démonstration V_{n+1} = q V_n" },
        { question: "Q3", duree: 6, description: "Formules explicites" },
        { question: "Q4", duree: 4, description: "Calcul de limite simple" }
      ],
      questions: [
        {
          label: "1. Modélisation",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `Il faut traduire le texte en mathématiques. On a une **baisse en pourcentage** suivie d'une **addition**.`
            },
            {
              type: 'CALCUL',
              content: `Diminuer de $10\\%$, c'est multiplier par $\\left(1 - \\frac{10}{100}\\right) = 0,9$.<br/>
Donc l'ancien montant $U_n$ devient $0,9 U_n$ après prélèvement.<br/>
Ensuite, Koffi ajoute $30$.<br/>
On a donc bien l'année suivante : $U_{n+1} = 0,9 U_n + 30$.`
            }
          ]
        },
        {
          label: "2. Nature de la suite auxiliaire",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `Pour prouver que $V_n$ est géométrique, on doit calculer $V_{n+1}$ et montrer que c'est de la forme $q \\times V_n$.<br/>
1. Exprimer $V_{n+1}$ en remplaçant les $n$ par $n+1$.<br/>
2. Remplacer $U_{n+1}$ par sa valeur.<br/>
3. Factoriser par le coefficient devant $U_n$.`
            },
            {
              type: 'CALCUL',
              content: `$V_{n+1} = U_{n+1} - 300$<br/>
On sait que $U_{n+1} = 0,9 U_n + 30$. On remplace :<br/>
$V_{n+1} = (0,9 U_n + 30) - 300$<br/>
$V_{n+1} = 0,9 U_n - 270$<br/><br/>
Maintenant, on factorise par $0,9$ (le coefficient de $U_n$) :<br/>
$V_{n+1} = 0,9 \\left( U_n - \\frac{270}{0,9} \\right)$<br/>
Or, $\\frac{270}{0,9} = 300$.<br/>
$V_{n+1} = 0,9 (U_n - 300)$<br/><br/>
On reconnaît $V_n$ dans la parenthèse !<br/>
$V_{n+1} = 0,9 \\times V_n$.`
            },
            {
              type: 'CONCLUSION',
              content: `La suite $(V_n)$ est géométrique de raison $q = 0,9$.<br/>
Son premier terme est $V_0 = U_0 - 300 = 100 - 300 = -200$.`
            }
          ]
        },
        {
          label: "3. Expressions de Vn et Un",
          etapes: [
            {
              type: 'CALCUL',
              content: `Puisque $V_n$ est géométrique, on a :<br/>
$V_n = V_0 \\times q^n = -200 \\times (0,9)^n$.<br/><br/>
On sait que $V_n = U_n - 300$. En isolant $U_n$, on obtient :<br/>
$U_n = V_n + 300$.<br/>
En remplaçant $V_n$ par son expression :<br/>
$U_n = -200 \\times (0,9)^n + 300$.`
            }
          ]
        },
        {
          label: "4. Limite de la somme (Long terme)",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `On calcule la limite de $U_n$ quand $n$ tend vers l'infini. Il faut utiliser la limite d'une suite géométrique $q^n$.`
            },
            {
              type: 'CALCUL',
              content: `Comme $0 < 0,9 < 1$, la limite de $(0,9)^n$ quand $n \\to +\\infty$ est $0$.<br/>
Donc $\\lim_{n \\to +\\infty} -200 \\times (0,9)^n = 0$.<br/>
D'où $\\lim_{n \\to +\\infty} U_n = 0 + 300 = 300$.`
            },
            {
              type: 'CONCLUSION',
              content: `Au bout de très longtemps, la somme sur le compte de tontine va plafonner et se stabiliser autour de 300 (milliers de FCFA), soit 300 000 FCFA.`
            }
          ]
        }
      ],
      dialogue: [
        {
          petitFrere: "C'est bizarre, il ajoute de l'argent chaque année mais son compte ne monte pas à l'infini ?",
          grandFrere: "Eh non, c'est la magie mathématique des suites de type arithmético-géométriques ! Comme la gestionnaire prélève 10% sur LE TOTAL de la cagnotte, plus le montant augmente, plus le prélèvement augmente. À partir de 300 000 FCFA, 10% de frais ça fait 30 000 FCFA, ce qui annule pile poil la cotisation de 30 000 FCFA de Koffi !"
        }
      ],
      astuces: [
        "Dans la question 2 (Factorisation), factorise **toujours** par le nombre qui est devant $U_n$ (ici $0,9$). Ça marche à tous les coups et la parenthèse donnera exactement l'expression de $V_n$ !"
      ],
      noteGrandFrere: "Ceci est LE problème de suite qui tombe chaque année au BAC Série D. C'est toujours une histoire de population qui diminue puis augmente, ou d'argent. Apprends la mécanique Q2 et Q3 par cœur, c'est des points assurés."
    }
  }
];
