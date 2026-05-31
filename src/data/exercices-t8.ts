import { Exercise } from './exercices-t1';

export const exercicesT8: Exercise[] = [
  {
    id: 't8-ex1',
    tome: 8,
    numero: 1,
    level: 'BASE',
    points: 4,
    testedConcept: "Calcul des coordonnées du point moyen d'un nuage de points.",
    statement: `Le tableau suivant donne l'évolution du chiffre d'affaires $y_i$ (en millions de FCFA) d'une petite entreprise sur 5 années $x_i$ :
<br/><br/>
<table class="w-full text-center border-collapse border border-gray-300 my-4">
  <tr class="bg-gray-100">
    <td class="border border-gray-300 p-2 font-bold">Année ($x_i$)</td>
    <td class="border border-gray-300 p-2">1</td>
    <td class="border border-gray-300 p-2">2</td>
    <td class="border border-gray-300 p-2">3</td>
    <td class="border border-gray-300 p-2">4</td>
    <td class="border border-gray-300 p-2">5</td>
  </tr>
  <tr>
    <td class="border border-gray-300 p-2 font-bold">C.A ($y_i$)</td>
    <td class="border border-gray-300 p-2">12</td>
    <td class="border border-gray-300 p-2">15</td>
    <td class="border border-gray-300 p-2">18</td>
    <td class="border border-gray-300 p-2">22</td>
    <td class="border border-gray-300 p-2">28</td>
  </tr>
</table>
<br/>Calculer les coordonnées du point moyen $G(\\bar{x} ; \\bar{y})$ de ce nuage de points.`,
    correction: {
      questions: [
        {
          label: "Calcul de G",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `Le point moyen $G$ a pour coordonnées les moyennes arithmétiques de la série des $x_i$ (notée $\\bar{x}$) et de la série des $y_i$ (notée $\\bar{y}$).<br/>
$\\bar{x} = \\frac{x_1 + x_2 + ... + x_n}{n}$`
            },
            {
              type: 'CALCUL',
              content: `Ici, on a $n = 5$ points.<br/><br/>
**Calcul de $\\bar{x}$ :**<br/>
$\\bar{x} = \\frac{1 + 2 + 3 + 4 + 5}{5} = \\frac{15}{5} = 3$.<br/><br/>
**Calcul de $\\bar{y}$ :**<br/>
$\\bar{y} = \\frac{12 + 15 + 18 + 22 + 28}{5} = \\frac{95}{5} = 19$.`
            },
            {
              type: 'CONCLUSION',
              content: `Le point moyen du nuage a pour coordonnées $G(3 ; 19)$.`
            }
          ]
        }
      ],
      noteGrandFrere: "La première question de tout problème de stat, c'est le point moyen G. Ne te trompe surtout pas dans l'addition car G sera réutilisé pour l'équation de la droite (la droite d'ajustement passe toujours par G !)."
    }
  },
  {
    id: 't8-ex2',
    tome: 8,
    numero: 2,
    level: 'MOYEN',
    points: 6,
    testedConcept: "Ajustement affine par la méthode des moindres carrés.",
    statement: `On reprend la série statistique précédente de point moyen $G(3 ; 19)$.
<br/>On donne les résultats suivants issus de la calculatrice : 
- Variance de $x$ : $V(x) = 2$
- Covariance de $(x, y)$ : $\\text{Cov}(x, y) = 7,8$
<br/><br/>
Déterminer une équation de la droite d'ajustement de $y$ en $x$ par la méthode des moindres carrés. (On donnera les coefficients sous forme décimale).`,
    correction: {
      questions: [
        {
          label: "Équation de la droite d'ajustement",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `La droite d'ajustement de $y$ en $x$ par les moindres carrés a pour équation $y = ax + b$.`
            },
            {
              type: 'STRATEGIE',
              content: `1. Calculer le coefficient directeur $a$ avec la formule : $a = \\frac{\\text{Cov}(x, y)}{V(x)}$.<br/>
2. Calculer l'ordonnée à l'origine $b$ en utilisant le fait que la droite passe par $G(\\bar{x} ; \\bar{y})$. Donc $\\bar{y} = a\\bar{x} + b$, soit $b = \\bar{y} - a\\bar{x}$.`
            },
            {
              type: 'CALCUL',
              content: `**Calcul de $a$ :**<br/>
$a = \\frac{7,8}{2} = 3,9$.<br/><br/>
**Calcul de $b$ :**<br/>
On sait que $\\bar{x} = 3$ et $\\bar{y} = 19$.<br/>
$b = 19 - (3,9 \\times 3)$<br/>
$b = 19 - 11,7 = 7,3$.`
            },
            {
              type: 'PIEGE',
              content: `**Inverser la formule de 'a'.**<br/>
Beaucoup écrivent $a = \\frac{V(x)}{\\text{Cov}(x,y)}$. C'est faux ! La covariance est toujours au numérateur. Pense à la pente $dy/dx$, c'est la variation conjointe (Cov) divisée par la variation de x (V(x)).`
            },
            {
              type: 'CONCLUSION',
              content: `L'équation de la droite d'ajustement affine est $y = 3,9x + 7,3$.`
            }
          ]
        }
      ],
      astuces: [
        "N'oublie pas de vérifier mentalement : G(3;19) doit vérifier l'équation. 3.9 * 3 + 7.3 = 11.7 + 7.3 = 19. C'est bon, tu es sûr(e) de tes points !"
      ],
      noteGrandFrere: "Au BAC, on te demandera souvent de calculer V(x) et Cov(x,y) toi-même avec un tableau. Maîtrise la fonction STAT de ta calculatrice CASIO pour gagner 15 précieuses minutes."
    }
  },
  {
    id: 't8-ex3',
    tome: 8,
    numero: 3,
    level: 'BAC',
    points: 10,
    contextBac: { format: "Problème d'Ajustement Exponentiel", serie: "Série D", dureeConseillee: 25 },
    testedConcept: "Changement de variable logarithmique et modélisation prévisionnelle (Analogie Epidémie/Biologie).",
    statement: `Une équipe médicale suit la propagation d'une souche grippale dans une commune d'Abidjan. 
Le tableau ci-dessous donne le nombre de cas recensés $y_i$ en fonction du rang de la semaine $x_i$ :
<br/><br/>
<table class="w-full text-center border-collapse border border-gray-300 my-4">
  <tr class="bg-gray-100">
    <td class="border border-gray-300 p-2 font-bold">Semaine ($x_i$)</td>
    <td class="border border-gray-300 p-2">1</td>
    <td class="border border-gray-300 p-2">2</td>
    <td class="border border-gray-300 p-2">3</td>
    <td class="border border-gray-300 p-2">4</td>
  </tr>
  <tr>
    <td class="border border-gray-300 p-2 font-bold">Cas ($y_i$)</td>
    <td class="border border-gray-300 p-2">12</td>
    <td class="border border-gray-300 p-2">32</td>
    <td class="border border-gray-300 p-2">89</td>
    <td class="border border-gray-300 p-2">240</td>
  </tr>
</table>
<br/>L'allure du nuage de points montre que l'évolution n'est pas affine. On pose $z_i = \\ln(y_i)$.
<br/><br/>1. Recopier et compléter le tableau avec les valeurs de $z_i$ (arrondies à $10^{-2}$). <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>2. Déterminer l'équation de la droite d'ajustement de $z$ en $x$ par la méthode des moindres carrés sous la forme $z = ax + b$. (On arrondira $a$ et $b$ à $10^{-2}$). <span class="text-sm text-gray-500 float-right">[4 pts]</span>
<br/>3. En déduire que $y$ peut s'écrire sous la forme $y = C \\cdot e^{ax}$, où $C$ est une constante à déterminer. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>4. Si la tendance se maintient, estimer le nombre de cas à la semaine 6. <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    correction: {
      repartitionTemps: [
        { question: "Q1", duree: 4, description: "Calcul des ln(yi) à la machine" },
        { question: "Q2", duree: 12, description: "Calculs de statistiques à deux variables complets" },
        { question: "Q3", duree: 5, description: "Utilisation de la fonction exponentielle pour repasser à y" },
        { question: "Q4", duree: 4, description: "Application numérique de prévision" }
      ],
      questions: [
        {
          label: "1. Tableau des zi",
          etapes: [
            {
              type: 'CALCUL',
              content: `On calcule $\\ln(y_i)$ pour chaque valeur :<br/>
- $z_1 = \\ln(12) \\approx 2,48$<br/>
- $z_2 = \\ln(32) \\approx 3,47$<br/>
- $z_3 = \\ln(89) \\approx 4,49$<br/>
- $z_4 = \\ln(240) \\approx 5,48$<br/><br/>
Nouveau tableau :<br/>
$x_i$ : 1 | 2 | 3 | 4<br/>
$z_i$ : 2,48 | 3,47 | 4,49 | 5,48`
            }
          ]
        },
        {
          label: "2. Ajustement de z en x",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `Il faut calculer :<br/>
1. $\\bar{x}$ et $\\bar{z}$<br/>
2. $V(x)$ et $\\text{Cov}(x, z)$<br/>
3. $a = \\text{Cov}(x, z) / V(x)$ et $b = \\bar{z} - a\\bar{x}$`
            },
            {
              type: 'CALCUL',
              content: `$\\bar{x} = \\frac{1+2+3+4}{4} = 2,5$.<br/>
$\\bar{z} = \\frac{2,48 + 3,47 + 4,49 + 5,48}{4} = \\frac{15,92}{4} = 3,98$.<br/><br/>
$V(x) = \\frac{1^2+2^2+3^2+4^2}{4} - 2,5^2 = \\frac{30}{4} - 6,25 = 7,5 - 6,25 = 1,25$.<br/><br/>
$\\text{Cov}(x,z) = \\frac{1(2,48) + 2(3,47) + 3(4,49) + 4(5,48)}{4} - (2,5 \\times 3,98)$<br/>
$\\text{Cov}(x,z) = \\frac{2,48 + 6,94 + 13,47 + 21,92}{4} - 9,95$<br/>
$\\text{Cov}(x,z) = \\frac{44,81}{4} - 9,95 = 11,2025 - 9,95 = 1,2525$.<br/><br/>
$a = \\frac{1,2525}{1,25} = 1,002 \\approx 1,00$.<br/>
$b = 3,98 - 1,00(2,5) = 1,48$.`
            },
            {
              type: 'CONCLUSION',
              content: `La droite d'ajustement a pour équation $z = x + 1,48$.`
            }
          ]
        },
        {
          label: "3. Retour à la variable y",
          etapes: [
            {
              type: 'IDENTIFIER',
              content: `On a l'équation en $z$. Mais $z = \\ln(y)$. Il faut donc utiliser la fonction exponentielle pour "tuer" le logarithme et retrouver $y$.`
            },
            {
              type: 'CALCUL',
              content: `On part de : $z = x + 1,48$.<br/>
On remplace $z$ : $\\ln(y) = x + 1,48$.<br/>
On prend l'exponentielle des deux côtés : $y = e^{x + 1,48}$.<br/>
D'après les propriétés des puissances ($e^{A+B} = e^A \\times e^B$) :<br/>
$y = e^{1,48} \\times e^x$.<br/><br/>
Calcul de $C = e^{1,48} \\approx 4,39$.`
            },
            {
              type: 'CONCLUSION',
              content: `On obtient la modélisation : $y = 4,39 e^{x}$.`
            }
          ]
        },
        {
          label: "4. Prévision pour la semaine 6",
          etapes: [
            {
              type: 'STRATEGIE',
              content: `La semaine 6 correspond à $x = 6$. Il suffit de remplacer $x$ par 6 dans l'équation de modélisation obtenue (ou dans l'équation en $z$).`
            },
            {
              type: 'CALCUL',
              content: `Avec la formule : $y(6) = 4,39 e^6$.<br/>
$e^6 \\approx 403,43$.<br/>
$y(6) = 4,39 \\times 403,43 \\approx 1771,05$.<br/><br/>
(Variante plus précise : $z(6) = 6 + 1,48 = 7,48 \\implies y = e^{7,48} \\approx 1772$).`
            },
            {
              type: 'CONCLUSION',
              content: `Si la tendance se maintient, on peut estimer qu'il y aura environ 1771 cas recensés à la semaine 6. C'est une propagation exponentielle très agressive !`
            }
          ]
        }
      ],
      dialogue: [
        {
          petitFrere: "Mais pourquoi on s'est embêté à calculer les ln(y) alors qu'on cherchait des y ?",
          grandFrere: "Parce que le nuage de points des (x, y) n'était pas une droite, mais une courbe qui monte très vite en l'air ! Les mathématiciens ont une astuce : si on prend le 'ln' des valeurs qui montent trop vite, ça les 'écrase' et ça forme une belle ligne droite. On fait nos calculs sur cette droite, et à la fin, on utilise l'exponentielle pour 'gonfler' le résultat final. C'est l'ajustement exponentiel !"
        }
      ],
      astuces: [
        "Pour le retour à y, souviens-toi toujours de cette transition magique : $z = ax+b \\implies \\ln(y) = ax+b \\implies y = e^b \\times e^{ax}$. Le $e^b$ est la fameuse constante C."
      ],
      noteGrandFrere: "C'est l'exercice de stat le plus dur du BAC. Si tu maîtrises le passage au logarithme et le retour par l'exponentielle, tu auras un énorme avantage sur les autres candidats."
    }
  }
];
