import { Exercise } from './exercices-t1';

export const exercicesT10: Exercise[] = [
  {
    id: 't10-ex1',
    level: 'BASE',
    points: 4,
    testedConcept: "Résolution d'équation du second degré à coefficients réels (Delta négatif).",
    statement: `Résoudre dans l'ensemble des nombres complexes $\\mathbb{C}$ l'équation suivante :
<br/><br/>
<div class="text-center text-xl my-4">$z^2 - 4z + 13 = 0$</div>`,
    correction: {
      questions: [
        {
          label: "Résolution",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `On calcule le discriminant $\\Delta = b^2 - 4ac$. S'il est négatif, l'équation admet deux solutions complexes conjuguées.`
            },
            {
              type: 'CALCUL',
              content: `$\\Delta = (-4)^2 - 4(1)(13)$<br/>
$\\Delta = 16 - 52 = -36$.<br/><br/>
Comme $\\Delta < 0$, il y a deux solutions complexes conjuguées.<br/>
On pose $\\sqrt{|\\Delta|} = \\sqrt{36} = 6$. Les solutions sont :<br/>
$z_1 = \\frac{-b - i\\sqrt{|\\Delta|}}{2a} = \\frac{4 - 6i}{2} = 2 - 3i$<br/>
$z_2 = \\frac{-b + i\\sqrt{|\\Delta|}}{2a} = \\frac{4 + 6i}{2} = 2 + 3i$`
            },
            {
              type: 'CONCLUSION',
              content: `L'ensemble des solutions est $S = \\{ 2 - 3i \\, ; \\, 2 + 3i \\}$.`
            }
          ]
        }
      ],
      noteGrandFrere: "Quand Delta est négatif, n'écris JAMAIS 'racine de Delta'. Écris plutôt $i\\sqrt{|\\Delta|}$. La racine carrée d'un nombre négatif n'a pas de sens dans l'écriture mathématique stricte de la Terminale."
    }
  },
  {
    id: 't10-ex2',
    level: 'MOYEN',
    points: 6,
    testedConcept: "Forme algébrique vers forme exponentielle et trigonométrique.",
    statement: `On donne le nombre complexe $z = 1 - i\\sqrt{3}$.
<br/><br/>1. Déterminer le module et un argument de $z$. <span class="text-sm text-gray-500 float-right">[3 pts]</span>
<br/>2. En déduire la forme exponentielle et la forme trigonométrique de $z$. <span class="text-sm text-gray-500 float-right">[3 pts]</span>`,
    correction: {
      questions: [
        {
          label: "1. Module et Argument",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `1. Calculer le module $|z| = \\sqrt{a^2 + b^2}$.<br/>
2. Factoriser $z$ par son module pour faire apparaître le cosinus et le sinus de l'argument $\\theta$.`
            },
            {
              type: 'CALCUL',
              content: `**Module :**<br/>
$|z| = \\sqrt{1^2 + (-\\sqrt{3})^2} = \\sqrt{1 + 3} = \\sqrt{4} = 2$.<br/><br/>
**Argument :**<br/>
On cherche l'angle $\\theta$ tel que :<br/>
$\\cos(\\theta) = \\frac{a}{|z|} = \\frac{1}{2}$<br/>
$\\sin(\\theta) = \\frac{b}{|z|} = -\\frac{\\sqrt{3}}{2}$<br/><br/>
D'après le cercle trigonométrique, l'angle dont le cosinus est positif (droite) et le sinus négatif (bas) est dans le 4ème quadrant. C'est $\\theta = -\\frac{\\pi}{3}$.`
            }
          ]
        },
        {
          label: "2. Formes exponentielle et trigonométrique",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `La forme trigonométrique est $z = r(\\cos(\\theta) + i\\sin(\\theta))$.<br/>
La forme exponentielle est $z = re^{i\\theta}$.`
            },
            {
              type: 'CONCLUSION',
              content: `Forme trigonométrique : $z = 2\\left(\\cos\\left(-\\frac{\\pi}{3}\\right) + i\\sin\\left(-\\frac{\\pi}{3}\\right)\\right)$.<br/>
Forme exponentielle : $z = 2e^{-i\\frac{\\pi}{3}}$.`
            }
          ]
        }
      ],
      astuces: [
        "Un petit croquis du repère (x positif, y négatif) t'aurait permis de vérifier que l'angle pointe bien vers 'le bas et la droite' (-pi/3)."
      ]
    }
  },
  {
    id: 't10-ex3',
    level: 'BAC',
    points: 10,
    contextBac: { format: "Transformations Géométriques & Nombres Complexes", serie: "Série D", dureeConseillee: 25 },
    testedConcept: "Similitude directe, Rotation, Rapport de complexes et nature d'un triangle.",
    statement: `Dans le plan complexe muni d'un repère orthonormé direct $(O; \\vec{u}, \\vec{v})$, on considère les points $A, B$ et $C$ d'affixes respectives :
<br/><br/>
$z_A = 1 + i$<br/>
$z_B = 3 + i$<br/>
$z_C = 2 + 2i$
<br/><br/>1. Placer les points $A$, $B$ et $C$ dans le repère. Quelle conjecture peut-on faire sur la nature du triangle $ABC$ ? <span class="text-sm text-gray-500 float-right">[1 pt]</span>
<br/>2. Calculer le rapport complexe $Z = \\frac{z_C - z_A}{z_B - z_A}$. Donner sa forme algébrique puis sa forme exponentielle. <span class="text-sm text-gray-500 float-right">[4 pts]</span>
<br/>3. En déduire la nature exacte du triangle $ABC$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>4. Déterminer l'écriture complexe de la rotation $r$ de centre $A$ et d'angle $\\frac{\\pi}{2}$. Vérifier que $r(B)$ est bien le point $C' (1; 3)$. <span class="text-sm text-gray-500 float-right">[3 pts]</span>`,
    correction: {
      repartitionTemps: [
        { question: "Q1", duree: 2, description: "Figure (à faire sur brouillon)" },
        { question: "Q2", duree: 10, description: "Calcul algébrique complexe puis passage expo" },
        { question: "Q3", duree: 5, description: "Interprétation géométrique de module et argument" },
        { question: "Q4", duree: 8, description: "Formule de rotation z' - z_A = e^(i thêta)(z - z_A)" }
      ],
      questions: [
        {
          label: "1. Figure et conjecture",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `En plaçant $A(1;1)$, $B(3;1)$ et $C(2;2)$ sur un quadrillage, on observe un triangle qui ressemble à un triangle rectangle et isocèle en $C$.`
            }
          ]
        },
        {
          label: "2. Calcul du rapport Z",
          etapes: [
            {
              type: 'CALCUL',
              content: `**Numérateur :**<br/>
$z_C - z_A = (2 + 2i) - (1 + i) = 1 + i$.<br/><br/>
**Dénominateur :**<br/>
$z_B - z_A = (3 + i) - (1 + i) = 2$.<br/><br/>
**Calcul du quotient :**<br/>
$Z = \\frac{1 + i}{2} = \\frac{1}{2} + \\frac{1}{2}i$.<br/><br/>
**Forme exponentielle de Z :**<br/>
Module : $|Z| = \\sqrt{(\\frac{1}{2})^2 + (\\frac{1}{2})^2} = \\sqrt{\\frac{1}{4} + \\frac{1}{4}} = \\sqrt{\\frac{1}{2}} = \\frac{\\sqrt{2}}{2}$.<br/>
Argument : $\\cos(\\theta) = \\frac{1/2}{\\sqrt{2}/2} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$ et $\\sin(\\theta) = \\frac{\\sqrt{2}}{2}$.<br/>
Donc $\\theta = \\frac{\\pi}{4}$.`
            },
            {
              type: 'CONCLUSION',
              content: `Sous forme algébrique $Z = \\frac{1}{2} + \\frac{1}{2}i$.<br/>
Sous forme exponentielle $Z = \\frac{\\sqrt{2}}{2} e^{i\\frac{\\pi}{4}}$.`
            }
          ]
        },
        {
          label: "3. Nature du triangle ABC",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `Le rapport $Z = \\frac{z_C - z_A}{z_B - z_A}$ donne deux informations géométriques :<br/>
- Son module est le rapport des longueurs $\\frac{AC}{AB}$.<br/>
- Son argument est l'angle orienté $(\\vec{AB}, \\vec{AC})$.`
            },
            {
              type: 'CALCUL',
              content: `D'après la question précédente :<br/>
$|Z| = \\frac{\\sqrt{2}}{2} \\implies \\frac{AC}{AB} = \\frac{\\sqrt{2}}{2} \\implies AB = \\sqrt{2} AC$. Ce n'est pas isocèle en A.<br/>
$\\text{Arg}(Z) = \\frac{\\pi}{4} \\implies (\\vec{AB}, \\vec{AC}) = \\frac{\\pi}{4}$.<br/><br/>
Calculons plutôt $\\frac{z_A - z_C}{z_B - z_C}$ pour voir si c'est rectangle en C :<br/>
$z_A - z_C = (1+i) - (2+2i) = -1 - i$<br/>
$z_B - z_C = (3+i) - (2+2i) = 1 - i$<br/>
$\\frac{-1-i}{1-i} = \\frac{(-1-i)(1+i)}{(1-i)(1+i)} = \\frac{-1 - i - i - i^2}{1^2 + 1^2} = \\frac{-1 - 2i + 1}{2} = -i$.<br/>
Module = 1 (donc $CA = CB$, isocèle en C).<br/>
Argument = $-\\frac{\\pi}{2}$ (donc angle droit en C).`
            },
            {
              type: 'CONCLUSION',
              content: `Le triangle $ABC$ est rectangle et isocèle en $C$.`
            }
          ]
        },
        {
          label: "4. Écriture complexe de la rotation",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `La formule générale d'une rotation de centre $\\Omega$ et d'angle $\\alpha$ est :<br/>
$z' - z_{\\Omega} = e^{i\\alpha}(z - z_{\\Omega})$.`
            },
            {
              type: 'CALCUL',
              content: `Ici le centre est $A$ et l'angle est $\\frac{\\pi}{2}$.<br/>
$z' - z_A = e^{i\\frac{\\pi}{2}}(z - z_A)$<br/>
Or, $e^{i\\frac{\\pi}{2}} = i$.<br/>
$z' - (1+i) = i(z - (1+i))$<br/>
$z' = iz - i - i^2 + 1 + i$<br/>
$z' = iz - i + 1 + 1 + i$<br/>
$z' = iz + 2$. (C'est l'écriture complexe de la rotation).<br/><br/>
Appliquons-la à $B$ pour trouver $C'$ :<br/>
$z_{C'} = i(z_B) + 2$<br/>
$z_{C'} = i(3+i) + 2 = 3i + i^2 + 2 = 3i - 1 + 2 = 1 + 3i$.`
            },
            {
              type: 'CONCLUSION',
              content: `Les coordonnées de $C'$ sont bien $(1; 3)$.`
            }
          ]
        }
      ],
      dialogue: [
        {
          petitFrere: "Mais grand frère, pourquoi multiplier par i ça fait tourner d'un quart de tour ?",
          grandFrere: "C'est la magie des nombres complexes ! Dans le repère, '1' c'est avancer, et 'i' c'est monter. Quand tu multiplies n'importe quoi par 'i', tu lui ajoutes 90 degrés (Pi/2) à son angle de base. C'est l'outil suprême pour faire de la géométrie sans jamais tracer une figure !"
        }
      ],
      noteGrandFrere: "Si au BAC tu tombes sur un rapport (zC - zA)/(zB - zA), PENSE IMMÉDIATEMENT à 2 choses : le module donne les proportions du triangle, et l'argument donne l'angle à l'intérieur. C'est systématique."
    }
  }
];
