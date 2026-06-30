import { Chapitre } from '../../types/course';

export const chapitreM4: Chapitre = {
  id: 't7-m4',
  titre: `Module 4 — Les Variables Aléatoires`,
  duree: 28,
  niveau: 'MOYEN',
  xpGain: 30,
  objectifs: [
    `Déterminer la loi de probabilité d'une variable aléatoire sans oublier de cas`,
    `Calculer l'espérance mathématique pour savoir si un jeu t'est favorable`,
    `Énoncer les définitions de loi, espérance, variance et écart-type avec le vocabulaire officiel du BAC`,
    `Maîtriser la formule de la variance sans tomber dans le piège des carrés`,
    `Utiliser les propriétés de $E(aX+b)$ et $V(aX+b)$`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, le bureau des élèves organise une tombola avec trois lots. Le ticket coûte $500$ francs. Avec tous ces lots, est-ce que mathématiquement le billet vaut son prix, ou bien c'est juste pour nous soutirer de l'argent ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `C'est LA vraie question à se poser, Champion(ne). Pour y répondre, tu ne peux pas juste regarder le gros lot qui brille. Tu dois faire la balance entre ce que tu dépenses, ce que tu peux gagner, et la chance exacte de chaque scénario. Mettre un nombre sur chaque issue d'une expérience, puis calculer le gain moyen sur le long terme : c'est exactement ça, étudier une variable aléatoire.`,
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
          contenu: `Reviens à la kermesse du Cacao. Tu paies ton ticket, et selon le tirage, tu repars avec un gain différent : rien, un petit lot, ou le gros lot. À chaque résultat possible, on peut associer un **nombre** — ton bilan financier, c'est-à-dire ce que tu gagnes moins le prix du billet.

Ce bilan change d'un tirage à l'autre, au gré du hasard. C'est pour ça qu'on l'appelle une variable, et « aléatoire » parce qu'elle dépend du sort. La liste de tous les bilans possibles, chacun avec sa chance de tomber, c'est la carte d'identité complète du jeu : sa loi de probabilité.

Une fois cette carte d'identité posée, on peut répondre à la question du Petit Frère. Le gain moyen, si tu jouais une infinité de fois, c'est l'espérance. Et l'écart entre tout perdre et décrocher le gros lot — l'ascenseur émotionnel — se mesure par la variance et l'écart-type.

La phrase-pivot : **une variable aléatoire traduit le hasard en nombres, et l'espérance, c'est le gain moyen sur le très long terme.**`,
        },
        {
          type: 'figure',
          id: 'fig-m4-1',
          src: '/images/t7/fig_M4_1.png',
          legende: `La loi de probabilité, vue en bâtons : l'espérance est le point d'équilibre de la distribution.`,
          alt: `Diagramme en bâtons d'une loi de probabilité avec la position de l'espérance.`,
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
          contenu: `On traduit la kermesse en symboles.

- « le bilan financier d'un tirage » → la variable aléatoire $X$.
- « la liste des bilans + leurs chances » → la loi de probabilité de $X$.
- « le gain moyen à l'infini » → l'espérance $E(X)$.
- « le niveau de risque / dispersion » → la variance $V(X)$ et l'écart-type $\\sigma(X)$.`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`La scène de la kermesse`, `Le symbole`, `Ce que ça mesure`],
          rows: [
            [`Le bilan d'un tirage`, `$X$`, `La valeur numérique de l'issue`],
            [`La carte d'identité du jeu`, `loi de $X$`, `Les $x_i$ et leurs $p_i$`],
            [`Le gain moyen à long terme`, `$E(X)$`, `La moyenne théorique`],
            [`Le risque / l'écart au gain moyen`, `$V(X)$, $\\sigma(X)$`, `La dispersion des résultats`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `On peut maintenant poser les formules officielles, Champion(ne).`,
        },
      ],
    },
    {
      id: 's-bac',
      titre: `📘 LANGAGE OFFICIEL DU BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b6',
          contenu: `Champion(ne), tu as l'image du bilan de la kermesse. La copie attend les définitions exactes.

**Définition formelle.** Soit $X$ une variable aléatoire prenant les valeurs $x_1, \\dots, x_n$ avec les probabilités $p_1, \\dots, p_n$. Son **espérance** est $E(X) = \\displaystyle\\sum_{i=1}^{n} x_i\\, p_i$. Sa **variance** est $V(X) = E(X^2) - \\big[E(X)\\big]^2$ où $E(X^2) = \\displaystyle\\sum_{i=1}^{n} x_i^2\\, p_i$. Son **écart-type** est $\\sigma(X) = \\sqrt{V(X)}$.

**En langage courant.** L'espérance est le gain moyen ; la variance et l'écart-type disent à quel point les résultats sont dispersés autour de ce gain moyen.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Loi de probabilité** — le tableau des valeurs $x_i$ et de leurs probabilités $p_i$ (avec $\\sum p_i = 1$).
- **Espérance $E(X)$** — moyenne théorique pondérée des valeurs.
- **Variance $V(X)$** — formule de König-Huygens : $E(X^2) - [E(X)]^2$.
- **Écart-type $\\sigma(X)$** — racine carrée de la variance ; mesure le risque.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend que tu interprètes l'espérance : *« Comme $E(X) < 0$, le jeu est défavorable au joueur. »* Un nombre sans phrase d'interprétation perd des points.`,
        },
        {
          type: 'figure',
          id: 'fig-m4-2',
          src: '/images/t7/fig_M4_2.png',
          legende: `Deux calculs différents : $E(X^2)$ n'est pas $[E(X)]^2$. La variance, c'est l'écart entre les deux.`,
          alt: `Deux chemins de calcul comparant la moyenne des carrés et le carré de la moyenne.`,
        },
      ],
    },
    {
      id: 's4',
      titre: `④ LA RÈGLE`,
      blocs: [
        {
          type: 'rule',
          id: 'rule9',
          titre: `Règle d'Or — Espérance, variance, écart-type`,
          contenu: `**Espérance** (moyenne théorique) :
$$E(X) = \\sum_{i=1}^{n} x_i\\, p_i.$$
*Interprétation :* $E(X) > 0$ jeu favorable, $E(X) = 0$ jeu équitable, $E(X) < 0$ jeu défavorable.

**Variance** (formule de König-Huygens) :
$$V(X) = E(X^2) - \\big[E(X)\\big]^2, \\qquad \\text{avec } E(X^2) = \\sum_{i=1}^{n} x_i^2\\, p_i.$$

**Écart-type** :
$$\\sigma(X) = \\sqrt{V(X)}.$$

**Propriétés** (pour $a$ et $b$ réels) :
$$E(aX + b) = a\\,E(X) + b, \\qquad V(aX + b) = a^2\\, V(X).$$`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Pour $V(aX+b)$ : la constante $b$ ne change rien à la dispersion (elle décale tout en bloc), mais le coefficient $a$ sort **au carré**. Retiens : « le $+b$ disparaît, le $a$ devient $a^2$ ».`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `$E(X^2)$, c'est la moyenne des carrés ; $[E(X)]^2$, c'est le carré de la moyenne. Les confondre fait toujours trouver une variance fausse (parfois négative).`,
        },
      ],
    },
    {
      id: 's5',
      titre: `⑤ LA DESCENTE`,
      blocs: [
        {
          type: 'text',
          id: 'b12',
          titre: `Le Diagnostic`,
          contenu: `Dès qu'un énoncé parle de « gain algébrique » (qui inclut la mise), de « nombre de succès », ou demande si un jeu est « équitable », tu es dans le territoire des variables aléatoires. Si on te donne une urne et qu'on définit $X$ = « nombre de boules d'une couleur », tu commences par dénombrer (Module 1) pour bâtir la loi.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Ce qu'on te demande`, `Ce que tu fais`, `L'outil`],
          rows: [
            [`Donner la loi de $X$`, `Lister les $x_i$, calculer les $p_i$, dresser le tableau`, `Dénombrement + tableau`],
            [`Le jeu est-il équitable ?`, `Calculer $E(X)$ et tester s'il vaut $0$`, `Espérance`],
            [`Calculer le risque`, `Calculer $V(X)$ puis $\\sigma(X)$`, `König-Huygens`],
            [`Étudier $Y = aX + b$`, `Appliquer $E(aX+b)$ et $V(aX+b)$`, `Propriétés`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure`,
          contenu: `**Étape 1.** Liste les valeurs $x_i$ possibles. Si on paie pour jouer, soustrais la mise du lot gagné (gain algébrique).

**Étape 2.** Calcule chaque $p_i$ (souvent par dénombrement) et dresse le tableau de la loi.

**Étape 3.** Vérifie $\\sum p_i = 1$. Si ce n'est pas le cas, n'avance pas : le tableau est faux.

**Étape 4.** Calcule $E(X)$, puis $E(X^2)$ (les $x_i$ au carré, pas les $p_i$), puis $V(X)$ et $\\sigma(X)$. Conclus et interprète.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `- **Variance positive** : $V(X) \\geqslant 0$ toujours (c'est une somme de carrés pondérés). Si tu trouves un nombre négatif, recommence.
- **Loi valide** : $\\sum p_i = 1$ et chaque $p_i \\in \\left[\\,0\\ ;\\ 1\\,\\right]$.`,
        },
        {
          type: 'figure',
          id: 'fig-m4-3',
          src: '/images/t7/fig_M4_3.png',
          legende: `La loi de $X$ se construit par dénombrement : chaque probabilité est un rapport de combinaisons.`,
          alt: `Diagramme en bâtons de la loi du nombre de rouges en tirage simultané.`,
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
          headers: [`Niveau`, `Situation`, `Comment la reconnaître`, `Exercice-Type`],
          rows: [
            [`🟢 BASE`, `Espérance d'une loi donnée`, `Le tableau de la loi est fourni`, `Type 1`],
            [`🟡 MOYEN`, `Variance, écart-type et $Y=aX+b$`, `On demande $V(X)$, $\\sigma$, et une transformation`, `Type 2`],
            [`🔴 BAC`, `Loi par dénombrement (urne)`, `« $X$ = nombre de … » dans un tirage simultané`, `Type 3`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Espérance d'un jeu.** La loi de $X$ est donnée par : $x_i \\in \\{0, 10, 20, 50\\}$ avec $p_i = 0{,}4$ ; $0{,}3$ ; $0{,}2$ ; $0{,}1$. Calcule $E(X)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Loi fournie, on demande l'espérance : application directe de $\\sum x_i p_i$.` },
            { name: `Étape 1`, contenu: `Contrôle : $0{,}4 + 0{,}3 + 0{,}2 + 0{,}1 = 1$. La loi est valide.` },
            { name: `Étape 2`, contenu: `$E(X) = (0 \\times 0{,}4) + (10 \\times 0{,}3) + (20 \\times 0{,}2) + (50 \\times 0{,}1) = 0 + 3 + 4 + 5$.` },
          ],
          reponse: `$E(X) = 12$.`,
          conseil: `Vérifie toujours $\\sum p_i = 1$ avant de calculer l'espérance : c'est un point gratuit et un garde-fou.`,
          piege: `N'oublie aucune colonne dans la somme, même celle où $x_i = 0$ (sa contribution est nulle, mais l'écrire prouve ta rigueur).`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `La loi est valide car $\\sum p_i = 1$. $E(X) = 0 \\times 0{,}4 + 10 \\times 0{,}3 + 20 \\times 0{,}2 + 50 \\times 0{,}1 = 12$.

*[Barème : validité : 0,5 pt · calcul de $E(X)$ : 1,5 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Variance et transformation.** Avec la loi de l'exercice 1 (donc $E(X) = 12$), calcule $V(X)$ et $\\sigma(X)$ (arrondi à $10^{-2}$). Puis, pour $Y = 2X - 5$, donne $E(Y)$ et $V(Y)$ sans déterminer la loi de $Y$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `On veut la dispersion (König-Huygens) puis une transformation affine (propriétés).` },
            { name: `Étape 1`, contenu: `$E(X^2) = 0^2 \\times 0{,}4 + 10^2 \\times 0{,}3 + 20^2 \\times 0{,}2 + 50^2 \\times 0{,}1 = 30 + 80 + 250 = 360$.` },
            { name: `Étape 2`, contenu: `$V(X) = E(X^2) - [E(X)]^2 = 360 - 12^2 = 360 - 144 = 216$, donc $\\sigma(X) = \\sqrt{216} \\approx 14{,}70$.` },
            { name: `Étape 3`, contenu: `$E(Y) = 2E(X) - 5 = 2 \\times 12 - 5 = 19$ ; $V(Y) = 2^2 \\times V(X) = 4 \\times 216 = 864$.` },
          ],
          reponse: `$V(X) = 216$, $\\sigma(X) \\approx 14{,}70$, $E(Y) = 19$, $V(Y) = 864$.`,
          conseil: `Pour $Y = aX + b$, n'établis jamais une nouvelle loi : les propriétés $E(aX+b)$ et $V(aX+b)$ font le travail en deux lignes.`,
          piege: `Dans $V(Y)$, le $-5$ disparaît et le $2$ devient $2^2 = 4$. Ne garde surtout pas le $-5$.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$E(X^2) = 360$, donc $V(X) = 360 - 12^2 = 216$ et $\\sigma(X) = \\sqrt{216} \\approx 14{,}70$. Pour $Y = 2X - 5$ : $E(Y) = 2 \\times 12 - 5 = 19$ et $V(Y) = 2^2 \\times 216 = 864$.

*[Barème : $V(X)$ : 1,5 pt · $\\sigma$ : 0,5 pt · $E(Y)$ et $V(Y)$ : 1 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 3 — Loi par dénombrement.** Une urne contient $10$ boules : $4$ rouges et $6$ blanches. On tire **simultanément** $2$ boules. Soit $X$ le nombre de boules rouges tirées. **a)** Détermine la loi de probabilité de $X$. **b)** Calcule $E(X)$ et $V(X)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `$X$ = nombre de rouges en tirage simultané : on construit la loi par combinaisons (Module 1), puis on calcule $E$ et $V$.` },
            { name: `Étape 1`, contenu: `Nombre total de tirages : $C_{10}^2 = 45$. Valeurs de $X$ : $0$, $1$, $2$.` },
            { name: `Étape 2`, contenu: `$P(X=0) = \\dfrac{C_4^0 C_6^2}{45} = \\dfrac{15}{45} = \\dfrac{1}{3}$ ; $P(X=1) = \\dfrac{C_4^1 C_6^1}{45} = \\dfrac{24}{45} = \\dfrac{8}{15}$ ; $P(X=2) = \\dfrac{C_4^2 C_6^0}{45} = \\dfrac{6}{45} = \\dfrac{2}{15}$.` },
            { name: `Étape 3`, contenu: `Contrôle : $\\dfrac{15 + 24 + 6}{45} = 1$. $E(X) = 0 \\times \\dfrac{1}{3} + 1 \\times \\dfrac{8}{15} + 2 \\times \\dfrac{2}{15} = \\dfrac{12}{15} = \\dfrac{4}{5}$.` },
            { name: `Étape 4`, contenu: `$E(X^2) = 0 + 1 \\times \\dfrac{8}{15} + 4 \\times \\dfrac{2}{15} = \\dfrac{16}{15}$, donc $V(X) = \\dfrac{16}{15} - \\left(\\dfrac{4}{5}\\right)^2 = \\dfrac{16}{15} - \\dfrac{16}{25} = \\dfrac{32}{75}$.` },
          ],
          reponse: `$E(X) = \\dfrac{4}{5} = 0{,}8$ et $V(X) = \\dfrac{32}{75} \\approx 0{,}43$.`,
          conseil: `Chaque probabilité est un rapport de combinaisons : « $k$ rouges parmi $4$ ET $2-k$ blanches parmi $6$, sur le total $C_{10}^2$ ». Le « ET » fait multiplier.`,
          piege: `Tirage simultané = combinaisons, pas d'arbre. Et garde le même dénominateur $45$ pour vérifier facilement que $\\sum p_i = 1$.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Le tirage est simultané : on dénombre par combinaisons, total $C_{10}^2 = 45$.
$P(X=0) = \\dfrac{C_6^2}{45} = \\dfrac{1}{3}$, $P(X=1) = \\dfrac{C_4^1 C_6^1}{45} = \\dfrac{8}{15}$, $P(X=2) = \\dfrac{C_4^2}{45} = \\dfrac{2}{15}$ (somme $= 1$).
$E(X) = \\dfrac{8}{15} + \\dfrac{4}{15} = \\dfrac{4}{5}$. $E(X^2) = \\dfrac{8}{15} + \\dfrac{8}{15} = \\dfrac{16}{15}$, d'où $V(X) = \\dfrac{16}{15} - \\dfrac{16}{25} = \\dfrac{32}{75}$.

*[Barème : loi (3 probabilités + validité) : 2 pts · $E(X)$ : 0,75 pt · $V(X)$ : 0,75 pt — Total : 3,5 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Vérifie toujours $\\sum p_i = 1$ avant de calculer. Réponses finales seulement.

- **Exercice 1.** Loi : $x_i \\in \\{-1, 2\\}$, $p_i = 0{,}5$ ; $0{,}5$. Calcule $E(X)$. *(Réponse : $0{,}5$.)*
- **Exercice 2.** Avec $E(X) = 2$ et $E(X^2) = 9$, calcule $V(X)$. *(Réponse : $V(X) = 9 - 4 = 5$.)*
- **Exercice 3.** Pour $Y = 3X + 1$ avec $E(X) = 2$ et $V(X) = 5$, donne $E(Y)$ et $V(Y)$. *(Réponse : $E(Y) = 7$, $V(Y) = 45$.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m4',
          titre: `À retenir`,
          contenu: [
            `Une variable aléatoire met un nombre sur chaque issue ; sa loi liste les $x_i$ et leurs $p_i$ (somme $= 1$).`,
            `📘 Vocabulaire officiel : loi de probabilité, espérance $E(X)$, variance $V(X)$ (König-Huygens), écart-type $\\sigma(X)$.`,
            `$E(X) = \\sum x_i p_i$ ; $V(X) = E(X^2) - [E(X)]^2$ ; $\\sigma(X) = \\sqrt{V(X)}$.`,
            `Propriétés : $E(aX+b) = aE(X)+b$ et $V(aX+b) = a^2 V(X)$.`,
            `Toujours interpréter l'espérance (favorable / équitable / défavorable).`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m4',
          titre: `Fil rouge`,
          contenu: `Tu sais étudier une variable aléatoire quelconque. Mais il existe une situation qui revient à **chaque** BAC : quand on répète la même épreuve « succès / échec » un grand nombre de fois, de façon indépendante. La loi devient alors prévisible, avec une formule toute faite pour l'espérance. C'est la reine des probabilités : la loi binomiale. Module 5.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m4',
          titre: `Auto-évaluation — Module 4`,
          contenu: [
            `Je sais construire la loi de probabilité d'une variable aléatoire (au besoin par dénombrement).`,
            `J'emploie le vocabulaire officiel (loi, espérance, variance, écart-type).`,
            `Je calcule la variance avec König-Huygens sans confondre $E(X^2)$ et $[E(X)]^2$.`,
            `J'applique les propriétés $E(aX+b)$ et $V(aX+b)$.`,
            `J'interprète toujours le signe de l'espérance.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m4',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Tu lis un jeu comme un livre. Direction Module 5.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 3 (l'urne).`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : le bilan de la kermesse va te débloquer.`,
          ],
        },
      ],
    },
  ],
};
