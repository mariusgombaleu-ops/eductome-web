import { Chapitre } from '../../types/course';

export const chapitreM2: Chapitre = {
  id: 't2-m2',
  titre: `Module 2 — La Fonction Dérivée`,
  duree: 25,
  niveau: 'BASE',
  xpGain: 25,
  objectifs: [
    `Expliquer la différence entre le nombre dérivé $f'(a)$ et la fonction dérivée $f'(x)$`,
    `Énoncer ce que veut dire « dérivable sur un intervalle » avec le vocabulaire exact du BAC`,
    `Utiliser le formulaire des dérivées usuelles (6 familles) sans hésiter`,
    `Dériver un polynôme, une racine, un inverse et une fonction trigonométrique`,
    `Distinguer le domaine de définition du domaine de dérivabilité d'une fonction`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Le père, au Module 1 on a calculé $f'(1)$ pour un point précis. Mais si le devoir me demande $f'(2)$, je dois tout refaire depuis le début avec le $h$ ? Et si ensuite il demande $f'(5)$ ? On va y passer la nuit !`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Tu viens de mettre le doigt exactement sur le problème, Champion(ne). Calculer la vitesse point par point, c'est épuisant. La vraie question, c'est : peut-on trouver une formule générale — valable pour tout $x$ — qui nous donne la vitesse d'un seul coup, sans refaire la corvée du $h$ à chaque fois ? La réponse est oui. Cette formule, c'est la **fonction dérivée**. Et une fois qu'on la connaît pour les six familles de base, tu n'auras plus jamais à repasser par la définition.`,
        },
      ],
    },
    {
      id: 's2',
      titre: `② LE RÉEL`,
      blocs: [
        {
          type: 'text',
          id: 'b3',
          contenu: `Imagine le grand robinet dans la cour de ton lycée qui remplit un bidon. La quantité d'eau dans le bidon augmente de minute en minute. Le **débit** du robinet — combien de litres entrent chaque seconde — suit une loi fixe liée au temps.

Tu n'as pas besoin de vider le bidon et de tout recommencer chaque fois que tu veux connaître le débit à 10h00 ou à 10h15. La formule du débit est gravée une fois pour toutes dans le mécanisme du robinet. Tu n'as plus qu'à brancher l'heure que tu veux, et la formule te crache le résultat.

La fonction dérivée, c'est exactement ce mécanisme. Le niveau d'eau dans le bidon, c'est ta fonction $f$. Le débit à chaque instant, c'est $f'$ : **une formule globale, calculée une bonne fois, prête à te donner la vitesse de ta courbe en n'importe quel point $x$ sans effort supplémentaire.**`,
        },
        {
          type: 'figure',
          id: 'fig-m2-1',
          src: '/images/t2/fig_M2_1.png',
          legende: `Le niveau monte vite puis ralentit : le débit $f'$ est sa vitesse de remplissage.`,
          alt: `Le niveau monte vite puis ralentit : le débit $f'$ est sa vitesse de remplissage.`,
        },
      ],
    },
    {
      id: 's3',
      titre: `③ LE PONT`,
      blocs: [
        {
          type: 'text',
          id: 'b4',
          contenu: `Au Module 1, on écrivait, pour un point fixe $a$ :

$$f'(a) = \\lim_{h \\to 0} \\dfrac{f(a + h) - f(a)}{h}$$

La seule différence ici, c'est que le point fixe $a$ cède sa place à la variable $x$. La formule devient :

$$f'(x) = \\lim_{h \\to 0} \\dfrac{f(x + h) - f(x)}{h}$$

On ne cherche plus un nombre fixe — on cherche **l'expression algébrique de la vitesse** pour tout $x$ du domaine.`,
        },
        {
          type: 'table',
          id: 'tbl5',
          headers: [`Module 1 — un point`, `Module 2 — partout`, `Ce qui change`],
          rows: [
            [`$f'(a)$ : un nombre`, `$f'(x)$ : une fonction`, `On passe d'une valeur à une formule`],
            [`Le point fixe $a$`, `La variable $x$`, `$a$ devient $x$, libre de bouger`],
            [`Calcul par la limite à chaque point`, `Lecture directe dans le formulaire`, `Plus de corvée du $h$`],
          ],
        },
        {
          type: 'text',
          id: 'b6',
          contenu: `Les formules usuelles du tableau de la Règle sont précisément les conclusions de cette limite, calculées une fois pour toutes pour t'éviter le nettoyage par $h$ à chaque exercice.`,
        },
      ],
    },
    {
      id: 's-bac',
      titre: `📘 LANGAGE OFFICIEL DU BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b7',
          contenu: `Champion(ne), l'image du robinet t'a donné l'intuition. Maintenant, ta copie doit parler le langage rigoureux des mathématiques.

**Définition formelle.** Soit $f$ une fonction et $I$ un intervalle. On dit que $f$ est **dérivable sur $I$** lorsque $f$ est dérivable en **tout** réel $a$ de $I$. La fonction qui, à chaque $x$ de $I$, associe le nombre dérivé $f'(x)$ est appelée **fonction dérivée** de $f$ sur $I$, notée $f'$.

**En langage courant.** Être dérivable sur un intervalle, c'est avoir une vitesse bien définie en chacun de ses points. La fonction dérivée range toutes ces vitesses dans une seule formule.`,
        },
        {
          type: 'warning',
          id: 'warn8',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Dérivable sur $I$** — $f$ admet un nombre dérivé en chaque point de l'intervalle $I$.
- **Fonction dérivée** — la fonction $f'$ qui donne $f'(x)$ pour tout $x$ de $I$.
- **Domaine de dérivabilité** — l'ensemble des réels où $f'$ existe (parfois plus petit que le domaine de $f$).
- **Fonctions usuelles** — les familles de référence (polynôme, racine, inverse, $\\sin$, $\\cos$) dont la dérivée est connue par cœur.`,
        },
        {
          type: 'tip',
          id: 'tip9',
          titre: `À retenir`,
          contenu: `Le correcteur attend que tu **justifies** la dérivabilité avant de dériver : *« $f$ est dérivable sur $I$ comme somme (ou produit) de fonctions usuelles dérivables sur $I$. »* Sans cette phrase, tu perds le point de justification.`,
        },
      ],
    },
    {
      id: 's4',
      titre: `④ LA RÈGLE`,
      blocs: [
        {
          type: 'rule',
          id: 'rule10',
          titre: `Règle d'Or — Dérivées des fonctions usuelles`,
          contenu: `Grave ces six familles : ce sont l'outil de base de tout le reste du tome.`,
        },
        {
          type: 'table',
          id: 'tbl11',
          headers: [`Famille de $f(x)$`, `Domaine de $f$`, `Dérivée $f'(x)$`],
          rows: [
            [`Constante $k$`, `$\\mathbb{R}$`, `$0$`],
            [`Puissance $x^n$ ($n \\in \\mathbb{Z}$)`, `$\\mathbb{R}$ si $n \\geq 0$ · $\\mathbb{R}^*$ si $n < 0$`, `$nx^{n-1}$`],
            [`Racine carrée $\\sqrt{x}$`, `$[0\\ ;\\ +\\infty[$`, `$\\dfrac{1}{2\\sqrt{x}}$ sur $]0\\ ;\\ +\\infty[$`],
            [`Inverse $\\dfrac{1}{x}$`, `$\\mathbb{R}^*$`, `$-\\dfrac{1}{x^2}$`],
            [`Sinus $\\sin(x)$`, `$\\mathbb{R}$`, `$\\cos(x)$`],
            [`Cosinus $\\cos(x)$`, `$\\mathbb{R}$`, `$-\\sin(x)$`],
          ],
        },
        {
          type: 'tip',
          id: 'tip12',
          titre: `Conseil du Grand Frère`,
          contenu: `Les fonctions $\\ln(x)$ et $e^x$ seront traitées au Tome 5. Pour l'instant, grave ces 6 familles — c'est l'outil de base de tout le reste du tome.`,
        },
        {
          type: 'warning',
          id: 'warn13',
          titre: `Piège à éviter`,
          contenu: `La dérivée d'une constante ($+5$, $-3$) est toujours $0$ : une constante ne varie pas, sa vitesse est nulle. La traîner dans la dérivée est un point perdu bêtement.`,
        },
      ],
    },
    {
      id: 's5',
      titre: `⑤ LA DESCENTE`,
      blocs: [
        {
          type: 'text',
          id: 'b14',
          titre: `Le Diagnostic`,
          contenu: `Ton premier réflexe sur copie : **identifier la famille de la fonction en une ligne**. Regarde la forme globale — polynôme, racine, inverse, trigonométrique ? Ce diagnostic visuel te dit quelle ligne du tableau activer.`,
        },
        {
          type: 'table',
          id: 'tbl15',
          titre: `L'Arbre de décision`,
          headers: [`Si l'expression présente…`, `Le réflexe de dérivation`, `Le point de vigilance`],
          rows: [
            [`Une puissance $x^n$`, `Multiplier par $n$, baisser le degré d'un cran.`, `Les constantes pures ($+5$, $-3$) ont une dérivée $0$.`],
            [`Une racine $\\sqrt{x}$`, `Appliquer $\\dfrac{1}{2\\sqrt{x}}$.`, `Domaine de $f'$ : $]0\\ ;\\ +\\infty[$ — le point $0$ est exclu.`],
            [`Un inverse $\\dfrac{1}{x}$`, `Appliquer $-\\dfrac{1}{x^2}$.`, `Le signe moins est déjà dans la formule.`],
            [`Du trigonométrique`, `$\\sin \\to \\cos$ et $\\cos \\to -\\sin$.`, `Le signe moins est sur le cosinus, pas sur le sinus.`],
          ],
        },
        {
          type: 'text',
          id: 'b16',
          titre: `La Procédure en 3 étapes`,
          contenu: `**Étape 1.** Justifie la dérivabilité et identifie la famille : décompose l'expression, repère les fonctions du tableau.

**Étape 2.** Applique la formule : remplace chaque morceau par sa dérivée en conservant les coefficients multiplicateurs.

**Étape 3.** Précise le domaine de dérivabilité : écris sur quel intervalle ta formule est valable.`,
        },
        {
          type: 'tip',
          id: 'tip17',
          titre: `La Vérification`,
          contenu: `- **Constantes** : vérifie que toute constante a bien disparu (dérivée $0$).
- **Signes trigonométriques** : relis que c'est bien $\\cos$ qui a hérité du signe moins, pas $\\sin$.
- **Domaine** : pour une racine, le domaine de $f'$ exclut toujours le point où le dénominateur $2\\sqrt{x}$ s'annule.`,
        },
        {
          type: 'figure',
          id: 'fig-m2-2',
          src: '/images/t2/fig_M2_2.png',
          legende: `$\\sqrt{x}$ est définie en $0$ mais la tangente y est verticale : dérivable seulement sur $]0\\,;\\,+\\infty[$.`,
          alt: `$\\sqrt{x}$ est définie en $0$ mais la tangente y est verticale : dérivable seulement sur $]0\\,;\\,+\\infty[$.`,
        },
        {
          type: 'warning',
          id: 'warn18',
          titre: `Le piège à éviter de ce module`,
          contenu: `Ne confonds pas domaine de définition et domaine de dérivabilité. $\\sqrt{x}$ est définie en $0$, mais sa dérivée $\\dfrac{1}{2\\sqrt{x}}$ y est impossible (division par zéro). Le domaine de $f'$ est $]0\\ ;\\ +\\infty[$, jamais $[0\\ ;\\ +\\infty[$.`,
        },
      ],
    },
    {
      id: 's-exo',
      titre: `🎯 EXERCICES-TYPES`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-carte',
          titre: `Carte des situations`,
          headers: [`Niveau`, `Situation d'examen`, `Comment la reconnaître`, `Exercice-Type`],
          rows: [
            [`🟢 BASE`, `Dériver un polynôme`, `Somme de puissances de $x$ à coefficients constants.`, `ET-1`],
            [`🟢 BASE`, `Dériver $\\sqrt{x}$ ou $\\dfrac{1}{x}$`, `Expression mixte racine + inverse sur $]0\\ ;\\ +\\infty[$.`, `ET-2`],
            [`🟡 MOYEN`, `Dériver $\\sin$/$\\cos$ + étude de signe`, `Fonction trigonométrique avec question de signe sur un intervalle.`, `ET-3`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Dériver un polynôme.** Soit $f$ définie sur $\\mathbb{R}$ par $f(x) = x^4 - 3x^2 + 5$. Calculer $f'(x)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Polynôme pur — trois termes, trois puissances. On applique $x^n \\to nx^{n-1}$ terme à terme.` },
            { name: `Étape 1`, contenu: `Dériver $x^4$ → $4x^3$.` },
            { name: `Étape 2`, contenu: `Dériver $-3x^2$ → $-3 \\times 2x = -6x$.` },
            { name: `Étape 3`, contenu: `Dériver la constante $+5$ → $0$, puis assembler : $f'(x) = 4x^3 - 6x$.` },
          ],
          reponse: `$f$ est dérivable sur $\\mathbb{R}$ et $f'(x) = 4x^3 - 6x$.`,
          conseil: `Face à un polynôme, travaille terme à terme de gauche à droite sans sauter d'étape : le risque de mélanger les coefficients diminue de moitié.`,
          piege: `La dérivée de $+5$ est $0$, pas $5$. Écrire $f'(x) = 4x^3 - 6x + 5$ coûte un point au BAC.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `La fonction $f$ est un polynôme, elle est donc dérivable sur $\\mathbb{R}$. Pour tout $x \\in \\mathbb{R}$ :

$$f'(x) = 4x^{4-1} - 3 \\times 2x^{2-1} + 0 = 4x^3 - 6x$$

*[Barème type BAC : justification de la dérivabilité 0,5 pt · dérivation des puissances 1 pt · résultat final 0,5 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 2 — Dériver racine + inverse.** Soit $g$ définie sur $]0\\ ;\\ +\\infty[$ par $g(x) = 2\\sqrt{x} - \\dfrac{1}{x}$. Calculer $g'(x)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Expression mixte — racine + inverse. Le domaine $]0\\ ;\\ +\\infty[$ est donné, ce qui sécurise les deux formules.` },
            { name: `Étape 1`, contenu: `Dériver $2\\sqrt{x}$ : la constante $2$ reste, $(\\sqrt{x})' = \\dfrac{1}{2\\sqrt{x}}$, donc $2 \\times \\dfrac{1}{2\\sqrt{x}} = \\dfrac{1}{\\sqrt{x}}$.` },
            { name: `Étape 2`, contenu: `Dériver $-\\dfrac{1}{x}$ : $\\left(\\dfrac{1}{x}\\right)' = -\\dfrac{1}{x^2}$, avec le moins de l'énoncé : $-\\left(-\\dfrac{1}{x^2}\\right) = +\\dfrac{1}{x^2}$.` },
            { name: `Étape 3`, contenu: `Assembler : $g'(x) = \\dfrac{1}{\\sqrt{x}} + \\dfrac{1}{x^2}$.` },
          ],
          reponse: `$g$ est dérivable sur $]0\\ ;\\ +\\infty[$ et $g'(x) = \\dfrac{1}{\\sqrt{x}} + \\dfrac{1}{x^2}$.`,
          conseil: `Quand un coefficient précède $\\sqrt{x}$, simplifie tout de suite : $2 \\times \\dfrac{1}{2\\sqrt{x}} = \\dfrac{1}{\\sqrt{x}}$. Ça allège la copie.`,
          piege: `Le double signe moins sur $-\\dfrac{1}{x}$ est le piège classique : $(-1) \\times \\left(-\\dfrac{1}{x^2}\\right) = +\\dfrac{1}{x^2}$. Deux moins font un plus.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `La fonction $g$ est dérivable sur $]0\\ ;\\ +\\infty[$ comme somme de fonctions usuelles dérivables sur cet intervalle. Pour tout $x \\in\\ ]0\\ ;\\ +\\infty[$ :

$$g'(x) = 2 \\times \\dfrac{1}{2\\sqrt{x}} - \\left(-\\dfrac{1}{x^2}\\right) = \\dfrac{1}{\\sqrt{x}} + \\dfrac{1}{x^2}$$

*[Barème type BAC : domaine mentionné 0,5 pt · dérivation racine 0,5 pt · gestion des signes 0,5 pt · résultat final 0,5 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 3 — Trigonométrie et étude de signe.** Soit $h$ définie sur $\\mathbb{R}$ par $h(x) = 3\\sin(x) - 2\\cos(x)$. Calculer $h'(x)$ et montrer que $h'(x) > 0$ pour tout $x \\in \\left[0\\ ;\\ \\dfrac{\\pi}{2}\\right]$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Combinaison linéaire de fonctions trigonométriques. On applique $\\sin \\to \\cos$ et $\\cos \\to -\\sin$ terme à terme, puis on étudie le signe sur l'intervalle.` },
            { name: `Étape 1`, contenu: `Dériver $3\\sin(x)$ → $3\\cos(x)$.` },
            { name: `Étape 2`, contenu: `Dériver $-2\\cos(x)$ → $-2 \\times (-\\sin(x)) = +2\\sin(x)$.` },
            { name: `Étape 3`, contenu: `Assembler : $h'(x) = 3\\cos(x) + 2\\sin(x)$.` },
            { name: `Étape 4`, contenu: `Sur $\\left[0\\ ;\\ \\dfrac{\\pi}{2}\\right]$ : $\\cos(x) \\geq 0$ et $\\sin(x) \\geq 0$, sans s'annuler simultanément. Donc $h'(x) > 0$.` },
          ],
          reponse: `$h'(x) = 3\\cos(x) + 2\\sin(x) > 0$ sur $\\left[0\\ ;\\ \\dfrac{\\pi}{2}\\right]$.`,
          conseil: `Garde le cercle trigonométrique en coin de brouillon. Au premier quart $\\left[0\\ ;\\ \\dfrac{\\pi}{2}\\right]$, cosinus et sinus sont positifs ou nuls — le quadrant « tout positif ».`,
          piege: `C'est le cosinus qui prend le signe moins en dérivant, pas le sinus : $(\\cos x)' = -\\sin x$, donc $-2\\cos(x)$ donne $+2\\sin(x)$.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite`,
          contenu: `La fonction $h$ est dérivable sur $\\mathbb{R}$ comme combinaison linéaire de fonctions trigonométriques. Pour tout $x \\in \\mathbb{R}$ :

$$h'(x) = 3\\cos(x) - 2 \\times (-\\sin(x)) = 3\\cos(x) + 2\\sin(x)$$

Pour tout $x \\in \\left[0\\ ;\\ \\dfrac{\\pi}{2}\\right]$, on a $\\cos(x) \\geq 0$ et $\\sin(x) \\geq 0$. Les coefficients $3$ et $2$ étant strictement positifs, $3\\cos(x) \\geq 0$ et $2\\sin(x) \\geq 0$. Comme $\\cos(x)$ et $\\sin(x)$ ne s'annulent pas simultanément sur cet intervalle :

$$h'(x) = 3\\cos(x) + 2\\sin(x) > 0 \\quad \\text{pour tout } x \\in \\left[0\\ ;\\ \\dfrac{\\pi}{2}\\right]$$

*[Barème type BAC : expression de $h'(x)$ 1 pt · signes justifiés 1 pt · conclusion rigoureuse 0,5 pt — Total : 2,5 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Résultats finaux seulement :

- **Exercice 1.** Soit $f(x) = x^5 - x + 4$. Calcule $f'(x)$ sur $\\mathbb{R}$. *(Réponse : $f'(x) = 5x^4 - 1$.)*
- **Exercice 2.** Soit $g(x) = \\dfrac{3}{x} + \\sqrt{x}$ sur $]0\\ ;\\ +\\infty[$. Calcule $g'(x)$. *(Réponse : $g'(x) = -\\dfrac{3}{x^2} + \\dfrac{1}{2\\sqrt{x}}$.)*
- **Exercice 3.** Soit $h(x) = -2\\sin(x)$. Calcule $h'(0)$. *(Réponse : $h'(0) = -2$, car $h'(x) = -2\\cos(x)$ et $\\cos(0) = 1$.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m2',
          titre: `À retenir`,
          contenu: [
            `La fonction dérivée $f'(x)$ n'est pas un nouveau calcul à chaque point : c'est une **formule globale** qui donne la vitesse de la courbe en n'importe quel $x$, comme le débit gravé dans le robinet.`,
            `📘 Vocabulaire officiel à maîtriser : dérivable sur $I$, fonction dérivée, domaine de dérivabilité, fonctions usuelles.`,
            `Le réflexe gagnant : **identifier la famille** avant de toucher à quoi que ce soit — chaque famille a sa ligne dans le tableau des 6 dérivées usuelles.`,
            `Domaine de définition ≠ domaine de dérivabilité : pour $\\sqrt{x}$, on définit sur $[0\\ ;\\ +\\infty[$ mais on dérive sur $]0\\ ;\\ +\\infty[$.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m2',
          titre: `Fil rouge`,
          contenu: `Tu sais maintenant dériver les fonctions simples, une famille à la fois. Mais que se passe-t-il quand l'énoncé te présente $x^2 \\cdot \\sin(x)$ — un **produit** de deux familles différentes ? Ou un **quotient** comme $\\dfrac{2x+1}{x-3}$ ? Les formules de base ne suffisent plus. Au **Module 3**, on apprend les règles de calcul (somme, produit, quotient, composée) pour dériver n'importe quelle combinaison. On va gâter le coin, Champion(ne) !`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m2',
          titre: `Auto-évaluation — Module 2`,
          contenu: [
            `Je sais expliquer la différence entre un nombre dérivé $f'(a)$ et une fonction dérivée $f'(x)$.`,
            `J'utilise le vocabulaire officiel (dérivable sur $I$, fonction dérivée, domaine de dérivabilité) dans ma rédaction.`,
            `Je connais les 6 formules du tableau et je ne confonds pas les signes de $\\sin$ et $\\cos$.`,
            `Je justifie toujours la dérivabilité avant de dériver (« comme somme de fonctions usuelles… »).`,
            `Je sais que le domaine de dérivabilité de $\\sqrt{x}$ est $]0\\ ;\\ +\\infty[$, jamais $[0\\ ;\\ +\\infty[$.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m2',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Le coin est gâté. File vers le Module 3 !`,
            `🟡 **3 ou 4** → Relis l'Arbre de décision et refais l'Exercice-Type 2 au propre — c'est le double signe moins qui piège le plus.`,
            `🔴 **0 à 2** → Reprends l'analogie du robinet au ② Le Réel. La formule vient après le sens, jamais avant. Faut pas gnan !`,
          ],
        },
      ],
    },
  ],
};
