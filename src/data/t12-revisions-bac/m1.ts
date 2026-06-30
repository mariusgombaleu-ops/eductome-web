import { Chapitre } from '../../types/course';

export const chapitreM1: Chapitre = {
  id: 't12-m1',
  titre: `Module 1 — Bilan des 11 tomes : la carte des liaisons`,
  duree: 26,
  niveau: 'BASE',
  xpGain: 25,
  objectifs: [
    `Connecter instantanément les chapitres de l'année pour décoder un problème mixte`,
    `Nommer avec le vocabulaire officiel les 5 formules universelles du BAC D`,
    `Repérer les « doubles domaines » d'une consigne et activer le bon outil de transition`,
    `Faire descendre une puissance inconnue avec le logarithme népérien`,
    `Reconnaître la forme u'/u qui relie primitives et fonctions composées`,
  ],
  sections: [
    {
      id: 's1',
      titre: `Un seul marché, pas onze boutiques`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, et si le jour du BAC je ne me rappelle plus d'un tome ? J'ai l'impression que mon cerveau est surchargé et que toutes les notions se mélangent dans ma tête.`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Respire un grand coup, Champion(ne). C'est la réaction normale de tout grand joueur la veille d'une finale au Félicia. Tu as l'impression que tout est flou, mais en réalité tes onze savoir-faire sont bien installés. Ce qu'il te faut maintenant, ce n'est pas une nouvelle leçon : c'est une boussole. On va survoler toute la brousse mathématique de l'année pour que tu voies comment chaque tome tient l'autre par la main.`,
        },
        {
          type: 'text',
          id: 'b1',
          contenu: `Imagine que tu débarques au grand marché d'Adjamé pour la première fois, avec une longue liste d'achats. Si tu marches au hasard au milieu des étals, tu vas tourner en rond pendant des heures. Mais si un grand frère t'accompagne et te montre la structure du marché, tout change : tu ne vois plus des boutiques isolées, tu vois un réseau fluide où chaque point est connecté.

Dans ton épreuve de Terminale D, c'est pareil. Le grand problème d'analyse est construit comme ce marché interconnecté : une lecture de courbe se transforme deux questions plus loin en recherche de primitive, qui fait appel à un logarithme pour résoudre une inéquation. La limite fonde la dérivée ; la dérivée, prise à l'envers, donne la primitive ; les suites bloquées par une puissance appellent le logarithme. En comprenant ces ponts, tu arrêtes de voir onze chapitres lourds et tu découvres une seule science fluide.`,
        },
        {
          type: 'figure',
          id: 'fig-m1-1',
          src: '/images/t12/fig_M1_1.png',
          legende: `La carte des liaisons : les 11 tomes reliés par leurs connexions principales (un seul réseau).`,
          alt: `Schéma réseau des 11 tomes de la collection et de leurs connexions principales.`,
        },
      ],
    },
    {
      id: 's2',
      titre: `La matrice de tes acquis`,
      blocs: [
        {
          type: 'text',
          id: 'b2',
          contenu: `Garde en tête cette matrice globale : pour chaque tome, le grand acquis, la formule-clé et le pont vers les autres notions.`,
        },
        {
          type: 'table',
          id: 'tbl-bilan',
          headers: [`Tome`, `Grand acquis`, `Formule-clé`, `Connexion`],
          rows: [
            [`T1 — Limites`, `Lire le comportement aux frontières.`, `$\\displaystyle\\lim_{x\\to a}f(x)=L$`, `Fonde la dérivabilité du Tome 2.`],
            [`T2 — Dérivées`, `Mesurer la variation instantanée.`, `$f'(x)=\\displaystyle\\lim_{h\\to 0}\\dfrac{f(x+h)-f(x)}{h}$`, `Opération inverse du Tome 3.`],
            [`T3 — Primitives & Intégrales`, `Calculer aires et reconstruire une fonction.`, `$\\displaystyle\\int_a^b f(x)\\,dx=F(b)-F(a)$`, `Utilise le Tome 5 pour les formes $\\dfrac{u'}{u}$.`],
            [`T4 — Suites`, `Modéliser des phénomènes discrets.`, `$u_n=u_0\\,q^{\\,n}$`, `Appelle le Tome 5 pour isoler $n$ en exposant.`],
            [`T5 — Log & Expo`, `Dompter les croissances rapides.`, `$(\\ln u)'=\\dfrac{u'}{u}$ ; $(e^u)'=u'e^u$`, `Outil de base des équations du Tome 11.`],
            [`T6 — Trigonométrie`, `Modéliser les phénomènes périodiques.`, `$(\\sin u)'=u'\\cos u$`, `Solutions oscillantes du Tome 11.`],
            [`T7 — Probabilités`, `Quantifier l'incertitude.`, `$P(X=k)=\\dbinom{n}{k}p^k(1-p)^{n-k}$`, `L'espérance rejoint la moyenne du Tome 8.`],
            [`T8 — Statistiques`, `Trouver une tendance et prédire.`, `$a=\\dfrac{\\mathrm{cov}(X,Y)}{V(X)}$`, `Complète les données du Tome 7.`],
            [`T9 — Géométrie 3D`, `Se repérer dans l'espace.`, `$d=\\dfrac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$`, `Se projette dans le plan via le Tome 10.`],
            [`T10 — Complexes`, `Transformer la géométrie en calcul.`, `$z=re^{i\\theta}$`, `Simplifie les calculs du Tome 11.`],
            [`T11 — Éq. Différentielles`, `Traduire les mouvements continus.`, `$y'+ay=0 \\Rightarrow y=Ce^{-ax}$`, `Synthèse finale des T2, T3, T5, T6.`],
          ],
        },
      ],
    },
    {
      id: 's3',
      titre: `Les 5 formules universelles du BAC D`,
      blocs: [
        {
          type: 'rule',
          id: 'rule-5f',
          titre: `Les 5 formules à dégainer les yeux fermés`,
          contenu: `Chaque année, ces cinq-là forment l'ossature des sujets.
$$(v\\circ u)'(x)=u'(x)\\,v'\\!\\left(u(x)\\right)$$
$$\\displaystyle\\int_a^b f(x)\\,dx=F(b)-F(a)$$
$$P(X=k)=\\dbinom{n}{k}p^k(1-p)^{n-k}$$
$$z=re^{i\\theta}=r\\left(\\cos\\theta+i\\sin\\theta\\right)$$
$$y'+ay=0 \\;\\Longrightarrow\\; y(x)=Ce^{-ax}\\quad (C\\in\\mathbb{R})$$`,
        },
        {
          type: 'text',
          id: 'b3',
          contenu: `Quand tu analyses une question de grand problème, l'erreur à éviter est de foncer dans les calculs sans regarder d'où vient l'outil. Tu reconnais un problème d'interconnexion lorsque la consigne mêle deux objets de natures différentes — une suite avec un logarithme, ou une équation différentielle dont on demande la limite aux frontières.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'arbre de décision`,
          headers: [`Structure de la question`, `Point de vigilance`, `Tome de secours à activer`],
          rows: [
            [`Inconnue en exposant, du type $q^{\\,n}>k$`, `Ne pas diviser par la puissance.`, `Tome 5 (logarithme népérien)`],
            [`Présence d'une fraction $\\dfrac{u'}{u}$`, `Vérifier le signe du dénominateur.`, `Tome 3 (primitives) & Tome 5 (ln)`],
            [`Équation liant $y$ et $y'$ : $y'+ay=0$`, `Ne pas confondre avec une dérivée simple.`, `Tome 11 (équations différentielles)`],
            [`Calcul de distances ou d'angles`, `Choisir entre coordonnées 3D et écriture complexe.`, `Tome 9 (espace) ou Tome 10 (complexes)`],
          ],
        },
        {
          type: 'text',
          id: 'b4',
          titre: `La procédure en 3 étapes`,
          contenu: `**Étape 1 — Identifier les deux domaines en jeu.** Repère les symboles clés : un indice $n$ en exposant et un symbole $\\ln$, et tu es sur le pont entre les Suites (T4) et les Logarithmes (T5).

**Étape 2 — Isoler la formule de transition.** Rappelle-toi la propriété qui fait passer d'un monde à l'autre, par exemple $\\ln(a^n)=n\\ln(a)$.

**Étape 3 — Exécuter proprement.** Déroule ton calcul au brouillon, ligne par ligne, avant de rédiger ta Copie Parfaite.`,
        },
        {
          type: 'tip',
          id: 'tip-verif',
          titre: `La vérification`,
          contenu: `Utilise la méthode inverse. Si tu as trouvé une primitive grâce à une formule du logarithme, dérive ton résultat au brouillon : si tu retombes sur la fonction de départ, ton calcul est propre.`,
        },
      ],
    },
    {
      id: 's-bac',
      titre: `📘 LANGAGE OFFICIEL DU BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b5',
          contenu: `Champion(ne), tu as l'image du marché d'Adjamé. Ta copie, elle, doit parler la langue exacte des correcteurs.

**Définition formelle.** Un **problème de synthèse** du BAC D mobilise plusieurs notions reliées par des **formules de transition** : la dérivation d'une fonction composée, le théorème fondamental de l'analyse, la loi binomiale, la forme exponentielle d'un complexe et la solution d'une équation différentielle homogène.

**En langage courant.** Ce sont les cinq ponts qui permettent de passer d'un chapitre à l'autre sans rester bloqué(e).`,
        },
        {
          type: 'warning',
          id: 'warn-vocab',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Fonction composée** — la formule $(v\\circ u)'=u'\\times (v'\\circ u)$ ; toujours dériver la fonction intérieure $u$.
- **Théorème fondamental** — « $\\displaystyle\\int_a^b f(x)\\,dx=F(b)-F(a)$ avec $F$ une primitive de $f$ ».
- **Schéma de Bernoulli** — à citer avant d'écrire la loi binomiale $\\mathcal{B}(n\\,;\\,p)$.
- **Forme exponentielle** — « $z=re^{i\\theta}$ avec $r=|z|>0$ et $\\theta=\\arg(z)$ ».
- **Équation homogène** — « les solutions de $y'+ay=0$ sont $y(x)=Ce^{-ax}$, $C\\in\\mathbb{R}$ ».`,
        },
        {
          type: 'tip',
          id: 'tip-retenir',
          titre: `À retenir`,
          contenu: `Le correcteur attend que tu **nommes** l'outil avant de l'utiliser. Écrire « D'après le théorème fondamental » ou « La fonction $\\ln$ étant strictement croissante » rapporte les points de méthode, même si le calcul qui suit dérape.`,
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
          headers: [`Situation BAC typique`, `Objectif de l'épreuve`, `Tomes combinés`],
          rows: [
            [`Suite géométrique avec seuil`, `Trouver l'année où un placement dépasse une valeur.`, `T4 (suites) & T5 (logarithmes)`],
            [`Intégrale d'une fonction du type $\\dfrac{u'}{u}$`, `Calculer une aire sous une courbe en fraction.`, `T3 (intégrales) & T5 (logarithmes)`],
            [`Évolution continue avec limite`, `Résoudre une équation différentielle et étudier sa limite.`, `T11 (éq. diff.) & T1 (limites)`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Le seuil d'une population** *(BASE)*. Un biologiste étudie une culture de bactéries à Adjamé. Le nombre d'individus, en milliers, est modélisé par la suite $(u_n)$ définie pour tout entier naturel $n$ par $u_n=2\\cdot 3^{\\,n}$. Détermine, par le calcul, à partir de quel rang $n$ la population dépasse $162$ milliers d'individus.`,
          etapes: [
            { name: `Diagnostic`, contenu: `On cherche $n$ tel que $u_n>162$, avec l'inconnue en exposant : c'est le pont T4 → T5. On applique la fonction $\\ln$ pour faire descendre l'exposant.` },
            { name: `Étape 1`, contenu: `$u_n>162 \\iff 2\\cdot 3^{\\,n}>162 \\iff 3^{\\,n}>81$.` },
            { name: `Étape 2`, contenu: `La fonction $\\ln$ est strictement croissante sur $]\\,0\\,;\\,+\\infty\\,[$ : $\\ln(3^{\\,n})>\\ln(81)$, soit $n\\ln(3)>\\ln(81)$.` },
            { name: `Étape 3`, contenu: `Comme $3>1$, $\\ln(3)>0$, donc $n>\\dfrac{\\ln(81)}{\\ln(3)}$. Or $81=3^4$, d'où $n>4$.` },
          ],
          reponse: `Le plus petit entier convenable est $n=5$ : la population dépasse $162$ milliers à partir du rang $n=5$.`,
          conseil: `Simplifie les puissances évidentes avant de te lancer dans les décimales : repérer $81=3^4$ fait s'effondrer le calcul tout seul.`,
          piege: `Si la base était entre $0$ et $1$, son logarithme serait négatif : en divisant par un nombre négatif, il faudrait **inverser** le sens de l'inégalité.`,
        },
        {
          type: 'figure',
          id: 'fig-m1-2',
          src: '/images/t12/fig_M1_2.png',
          legende: `La suite $u_n = 2\\times 3^n$ franchit le seuil $162$ à partir du rang $n = 5$.`,
          alt: `La suite géométrique u_n = 2 × 3^n et le seuil horizontal 162 franchi au rang n = 5.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Résolvons $u_n>162$ pour $n\\in\\mathbb{N}$ : $2\\cdot 3^{\\,n}>162 \\iff 3^{\\,n}>81$.
La fonction $\\ln$ étant strictement croissante sur $]\\,0\\,;\\,+\\infty\\,[$, elle conserve l'ordre :
$$\\ln(3^{\\,n})>\\ln(81) \\iff n\\ln(3)>\\ln(81).$$
Comme $3>1$, on a $\\ln(3)>0$, donc $n>\\dfrac{\\ln(81)}{\\ln(3)}$. Sachant que $81=3^4$, on a $\\ln(81)=4\\ln(3)$, d'où $n>4$.
La population dépasse $162$ milliers d'individus à partir du rang $n=5$.

*[Barème type BAC : pose de l'inéquation = 0,5 pt — application du $\\ln$ = 1 pt — simplification et conclusion = 0,5 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Une primitive en u'/u** *(MOYEN)*. Soit $f$ définie sur $\\mathbb{R}$ par $f(x)=\\dfrac{e^x}{e^x+2}$. Détermine la primitive $F$ de $f$ sur $\\mathbb{R}$ qui prend la valeur $\\ln(3)$ en $0$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Une fraction d'exponentielles : c'est le pont T3 → T5. On fait apparaître la forme $\\dfrac{u'}{u}$.` },
            { name: `Étape 1`, contenu: `Posons $u(x)=e^x+2$, dérivable avec $u'(x)=e^x$. Alors $f(x)=\\dfrac{u'(x)}{u(x)}$. Comme $e^x+2>0$, $F(x)=\\ln(e^x+2)+C$, $C\\in\\mathbb{R}$.` },
            { name: `Étape 2`, contenu: `$F(0)=\\ln(3)$ donne $\\ln(1+2)+C=\\ln(3)$, soit $C=0$.` },
          ],
          reponse: `$F(x)=\\ln(e^x+2)$.`,
          conseil: `Avant de chercher la primitive, vérifie que $f$ est continue (quotient dont le dénominateur ne s'annule pas).`,
          piege: `Garde la valeur absolue tant que le signe de $u$ n'est pas connu ; ici $e^x+2>0$ permet de l'enlever.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$f$ est continue sur $\\mathbb{R}$ comme quotient de fonctions continues dont le dénominateur ne s'annule pas ($e^x+2>0$). Elle admet donc des primitives.
Posons $u(x)=e^x+2$, dérivable, $u'(x)=e^x$ ; ainsi $f(x)=\\dfrac{u'(x)}{u(x)}$.
$$F(x)=\\ln(e^x+2)+C\\quad (C\\in\\mathbb{R}).$$
La condition $F(0)=\\ln(3)$ donne $\\ln(3)+C=\\ln(3)$, donc $C=0$ et $F(x)=\\ln(e^x+2)$.

*[Barème type BAC : existence des primitives = 0,25 pt — forme $\\dfrac{u'}{u}$ = 1 pt — expression générale = 0,5 pt — calcul de $C$ = 0,25 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 3 — Équation différentielle et limite** *(BAC)*. **1.** Résous sur $\\mathbb{R}$ l'équation $(E):y'+2y=0$. **2.** Détermine la solution particulière $g$ telle que $g(0)=5$. **3.** Calcule $\\displaystyle\\lim_{x\\to+\\infty}g(x)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Trois dimensions de l'année : T11 (résolution), T5 (manipulation de l'exponentielle), T1 (limite).` },
            { name: `Étape 1`, contenu: `$(E):y'+2y=0$ est de la forme $y'+ay=0$ avec $a=2$ : $y(x)=Ce^{-2x}$, $C\\in\\mathbb{R}$.` },
            { name: `Étape 2`, contenu: `$g(0)=5 \\iff C=5$, donc $g(x)=5e^{-2x}$.` },
            { name: `Étape 3`, contenu: `$\\displaystyle\\lim_{x\\to+\\infty}-2x=-\\infty$ et $\\displaystyle\\lim_{X\\to-\\infty}e^{X}=0$, donc $\\displaystyle\\lim_{x\\to+\\infty}g(x)=0$.` },
          ],
          reponse: `$y(x)=Ce^{-2x}$ ; $g(x)=5e^{-2x}$ ; $\\displaystyle\\lim_{x\\to+\\infty}g(x)=0$.`,
          conseil: `Détaille la limite par composition : c'est ce que le correcteur veut voir.`,
          piege: `Ne confonds pas les solutions de $y'+ay=0$ ($y=Ce^{-ax}$) avec celles de $y'-ay=0$ ($y=Ce^{ax}$). Un oubli de signe fausse tout le calcul de limite.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite`,
          contenu: `1. $(E):y'+2y=0$ est de la forme $y'+ay=0$ avec $a=2$. Les solutions sur $\\mathbb{R}$ sont $y(x)=Ce^{-2x}$, $C\\in\\mathbb{R}$.
2. $g(0)=5 \\iff Ce^{0}=5 \\iff C=5$, donc $g(x)=5e^{-2x}$.
3. $\\displaystyle\\lim_{x\\to+\\infty}-2x=-\\infty$ et $\\displaystyle\\lim_{X\\to-\\infty}e^{X}=0$, donc par composition $\\displaystyle\\lim_{x\\to+\\infty}e^{-2x}=0$, d'où $\\displaystyle\\lim_{x\\to+\\infty}g(x)=0$.

*[Barème type BAC : solutions générales = 0,75 pt — solution particulière = 0,5 pt — limite détaillée = 0,75 pt — Total : 2 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Réponses finales seulement.

- **Exercice 1.** À partir de quel rang $u_n=5\\cdot 2^{\\,n}$ dépasse-t-il $320$ ? *(Réponse : $n=6$, car $2^{\\,n}>64=2^6$.)*
- **Exercice 2.** Primitive de $f(x)=\\dfrac{2x}{x^2+1}$ sur $\\mathbb{R}$ s'annulant en $0$. *(Réponse : $F(x)=\\ln(x^2+1)$.)*
- **Exercice 3.** Limite en $+\\infty$ de $g(x)=3e^{-x}+4$. *(Réponse : $4$.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m1',
          titre: `À retenir`,
          contenu: [
            `Les chapitres de Terminale D ne sont pas des blocs isolés : ils s'interconnectent par des formules-passerelles.`,
            `📘 Vocabulaire officiel : fonction composée, théorème fondamental, schéma de Bernoulli, forme exponentielle, équation homogène.`,
            `Le geste-clé : repérer les **doubles domaines** d'une consigne pour activer le bon outil de transition.`,
            `Les 5 formules universelles sont l'ossature de tout sujet : apprends-les par cœur.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m1',
          titre: `Fil rouge`,
          contenu: `Tu as la carte du marché. Mais connaître les allées ne suffit pas : il faut savoir dans quel ordre faire ses achats sans se faire déborder par la foule. Au Module 2, on ouvre le capot d'une épreuve réelle pour décoder sa stratégie complète : anatomie du sujet, gestion des 4 heures, réflexes de survie.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m1',
          titre: `Auto-évaluation — Module 1`,
          contenu: [
            `Je sais identifier les liens majeurs entre les 11 tomes de la collection.`,
            `J'utilise le vocabulaire officiel (fonction composée, théorème fondamental, schéma de Bernoulli, forme exponentielle, équation homogène).`,
            `Je sais utiliser le logarithme pour faire descendre une puissance inconnue.`,
            `Je sais repérer la forme $\\dfrac{u'}{u}$ qui relie primitives et exponentielles.`,
            `Je connais par cœur les 5 formules universelles de la Terminale D.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m1',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Superbe ! Tu as la vision globale, passe au Module 2.`,
            `🟡 **3 ou 4** → Relis calmement la matrice de tes acquis et la brique 📘.`,
            `🔴 **0 à 2** → Reprends posément l'analogie du marché d'Adjamé pour reconstruire tes connexions.`,
          ],
        },
      ],
    },
  ],
};
