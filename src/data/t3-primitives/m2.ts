import { Chapitre } from '../../types/course';

export const chapitreM2: Chapitre = {
  id: 't3-m2',
  titre: `Module 2 — Les Primitives des Formes Composées`,
  duree: 28,
  niveau: 'MOYEN',
  xpGain: 30,
  objectifs: [
    `Reconnaître les structures composées cachées ($u'u^m$, $\\dfrac{u'}{u}$, $u'e^u$…)`,
    `Nommer chaque forme composée avec le vocabulaire officiel attendu au BAC`,
    `Déterminer la primitive d'une forme composée en lisant la bonne ligne du tableau`,
    `Ajuster un coefficient constant manquant par la technique de compensation`,
    `Choisir entre $\\ln|u|$ et une puissance selon l'exposant du dénominateur`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, dans le Module 1, je lisais la primitive directement dans le tableau. Mais devant $6x^2\\cos(2x^3)$, il n'y a aucune ligne qui correspond ! Je bloque.`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Normal, Champion(ne) — ici la fonction est **emboîtée**. Il y a une fonction cachée à l'intérieur d'une autre. Mais regarde bien : si la dérivée de la fonction intérieure traîne juste à côté, la primitive tombe d'un coup. C'est tout l'art des formes composées. On rallume ton Outil 2 du Socle.`,
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
          contenu: `Imagine un cadeau bien emballé au marché de Cocody. À l'intérieur, il y a l'objet — appelons-le $u$. Autour, il y a le papier et le ruban. Pour ouvrir proprement, tu ne déchires pas n'importe comment : tu repères le ruban et tu tires dessus.

En maths, c'est pareil. Dans $6x^2\\cos(2x^3)$, l'objet caché à l'intérieur du cosinus, c'est $u = 2x^3$. Le « ruban » qui prouve que l'emballage est propre, c'est sa dérivée $u' = 6x^2$ — et elle est écrite juste devant !

Quand le ruban $u'$ est présent à côté de l'objet $u$, tu peux « déballer » la primitive d'un seul geste : tu appliques la formule de référence à $u$ tout entier, comme si $u$ était une simple variable. *Présence de $u'$ = autorisation de déballer directement.*

Et s'il manque un bout de ruban — un coefficient ? Pas de panique : tu ajoutes le morceau qui manque, à condition de retirer le même morceau ailleurs pour ne rien déséquilibrer.`,
        },
        {
          type: 'figure',
          id: 'fig-m2-1',
          src: '/images/t3/fig_M2_1.png',
          legende: `Si $u'$ est présent à côté de $u$, la primitive se lit directement.`,
          alt: `Si $u'$ est présent à côté de $u$, la primitive se lit directement.`,
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
          contenu: `Traduisons le « déballage » en correspondances mathématiques :

- L'objet emballé → la fonction intérieure $u(x)$.
- Le ruban qui prouve l'emballage propre → la dérivée $u'(x)$ présente dans l'expression.
- Déballer d'un coup → appliquer une primitive de référence à $u$ entier.
- Compléter un bout de ruban manquant → multiplier et diviser par une même constante.`,
        },
        {
          type: 'table',
          id: 'tbl5',
          headers: [`Geste concret`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`L'objet à l'intérieur`, `$u(x)$`, `La fonction emboîtée (sous la puissance, la racine, le cos…).`],
            [`Le ruban à côté`, `$u'(x)$`, `Sa dérivée, qui doit être présente dans l'expression.`],
            [`Déballer la primitive`, `$u'g(u) \\to G(u)$`, `On applique la primitive $G$ de $g$ à $u$ entier.`],
            [`Compléter un coefficient`, `$\\dfrac{1}{k}\\times k$`, `On force l'apparition de $u'$ sans changer l'expression.`],
          ],
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
          contenu: `Champion(ne), l'image de l'emballage t'a donné l'intuition. Ta copie, elle, attend les formules officielles des primitives de fonctions composées.

**Définition formelle.** Soit $u$ une fonction dérivable sur un intervalle $I$. Les primitives de référence se transposent aux formes composées :

$$\\int u'e^{u} = e^{u} + C, \\qquad \\int \\dfrac{u'}{u} = \\ln|u| + C \\ (u \\neq 0), \\qquad \\int u'u^{m} = \\dfrac{u^{m+1}}{m+1} + C \\ (m \\neq -1).$$

**En langage courant.** Dès que la dérivée $u'$ de la fonction intérieure est présente comme facteur, on primitive « comme si $u$ était la variable ».`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Fonction composée** — une fonction emboîtée dans une autre, du type $g(u(x))$.
- **Forme $\\dfrac{u'}{u}$** — son intégrale est $\\ln|u|$ : à n'employer **que** si l'exposant du dénominateur vaut $1$.
- **Forme $u'e^{u}$** — son intégrale est $e^{u}$, sans coefficient supplémentaire.
- **Compensation par une constante** — multiplier et diviser par un même réel non nul pour faire apparaître $u'$.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend que tu écrives *« Posons $u(x) = \\ldots$, alors $u'(x) = \\ldots$ ; $f$ est de la forme $\\ldots$, donc une primitive est $\\ldots$ »*. Poser $u$ et $u'$ explicitement, c'est la moitié des points.`,
        },
        {
          type: 'figure',
          id: 'fig-m2-2',
          src: '/images/t3/fig_M2_2.png',
          legende: `D'abord je repère $u'$, ensuite je lis la forme de ce qui l'accompagne.`,
          alt: `D'abord je repère $u'$, ensuite je lis la forme de ce qui l'accompagne.`,
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
          titre: `Règle d'Or — Les primitives des formes composées`,
          contenu: `Si $u$ est dérivable sur un intervalle $I$, on dispose du tableau ci-dessous (où $C \\in \\mathbb{R}$). Le premier geste, toujours : isoler $u$, calculer $u'$, comparer avec l'énoncé.`,
        },
        {
          type: 'table',
          id: 'tbl-composees',
          titre: `Tableau des primitives composées`,
          headers: [`Fonction $f(x)$`, `Une primitive $F(x)$`, `Condition de validité`],
          rows: [
            [`$u' + v'$`, `$u + v$`, `$u, v$ dérivables sur $I$`],
            [`$\\lambda\\,u'$`, `$\\lambda\\,u$`, `$\\lambda \\in \\mathbb{R}$`],
            [`$u'\\,u^{m}$`, `$\\dfrac{u^{m+1}}{m+1}$`, `$m \\in \\mathbb{Q},\\ m \\neq -1$`],
            [`$\\dfrac{u'}{u}$`, `$\\ln|u|$`, `$u \\neq 0$ sur $I$`],
            [`$\\dfrac{u'}{u^{2}}$`, `$-\\dfrac{1}{u}$`, `$u \\neq 0$ sur $I$`],
            [`$\\dfrac{u'}{\\sqrt{u}}$`, `$2\\sqrt{u}$`, `$u > 0$ sur $I$`],
            [`$u'\\,e^{u}$`, `$e^{u}$`, `aucune`],
            [`$u'\\cos u$`, `$\\sin u$`, `aucune`],
            [`$u'\\sin u$`, `$-\\cos u$`, `aucune`],
          ],
        },
        {
          type: 'warning',
          id: 'warn10',
          titre: `Piège à éviter`,
          contenu: `Le $\\ln|u|$ ne s'emploie **que** pour $\\dfrac{u'}{u}$ (exposant $1$ au dénominateur). Devant $\\dfrac{u'}{u^2}$, c'est $-\\dfrac{1}{u}$, jamais un logarithme.`,
        },
      ],
    },
    {
      id: 's5',
      titre: `⑤ LA DESCENTE`,
      blocs: [
        {
          type: 'text',
          id: 'b11',
          titre: `Le Diagnostic`,
          contenu: `Tu vois un **produit** où un facteur ressemble à la dérivée d'un autre, ou une **fraction** dont le haut ressemble à la dérivée du bas, ou un **$e$** / un **$\\cos$** / un **$\\sin$** avec un « bloc » à l'intérieur. Réflexe : pose $u$, calcule $u'$, identifie la ligne du tableau.`,
        },
        {
          type: 'table',
          id: 'tbl12',
          titre: `L'Arbre de décision`,
          headers: [`Si tu vois…`, `Forme cible`, `Primitive à appliquer`],
          rows: [
            [`Un produit avec une puissance parenthésée`, `$u'\\,u^{m}$`, `$\\dfrac{u^{m+1}}{m+1}$`],
            [`Une fraction $\\dfrac{u'}{u}$ (exposant 1)`, `$\\dfrac{u'}{u}$`, `$\\ln|u|$`],
            [`Une fraction avec puissance au dénominateur`, `$\\dfrac{u'}{u^{r}}$`, `$\\dfrac{u^{1-r}}{1-r}$`],
            [`Une racine carrée au dénominateur`, `$\\dfrac{u'}{\\sqrt{u}}$`, `$2\\sqrt{u}$`],
            [`$u'e^{u}$, $u'\\cos u$, $u'\\sin u$`, `exponentielle / trigo`, `$e^{u}$, $\\sin u$, $-\\cos u$`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure`,
          contenu: `**Étape 1.** Poser au brouillon la fonction intérieure $u(x)$.

**Étape 2.** Calculer sa dérivée $u'(x)$.

**Étape 3.** Comparer $u'(x)$ à l'énoncé. S'il manque une constante $k$, écrire $f(x) = \\dfrac{1}{k}\\big(k\\,u'(x)\\big)\\times(\\ldots)$ pour faire apparaître exactement $u'$.

**Étape 4.** Appliquer la formule de primitive correspondante du tableau.

**Étape 5.** Ajouter la constante $+\\,C$ (avec $C \\in \\mathbb{R}$).`,
        },
        {
          type: 'dialogue',
          id: 'dlg3',
          pf: `Attends, Grand Frère — s'il manque un chiffre dans le produit, j'ai le droit de l'ajouter comme ça ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg4',
          gf: `Oui, Champion(ne), tant que tu divises par ce même chiffre à l'extérieur pour équilibrer. Multiplier et diviser par $2$, ça ne change rien à l'expression — c'est la magie des constantes.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `- Dérive ton $F(x)$ : tu dois retomber exactement sur $f(x)$.
- Vérifie qu'aucun coefficient ne s'est perdu lors de la compensation.`,
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
            [`🟢 BASE`, `Forme $u'\\cos u$ ou $u'u^m$ directe`, `$u'$ déjà présent, sans coefficient à ajuster`, `Maintenant à toi`],
            [`🟡 MOYEN`, `Compensation d'un coefficient`, `$u'$ présent à une constante près`, `Type 1`],
            [`🔴 BAC`, `Forme $\\dfrac{u'}{u^2}$ + condition initiale`, `fraction + « la primitive telle que $G(0)=\\ldots$ »`, `Type 2`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 1 — Compensation d'un coefficient.** Déterminer toutes les primitives sur $\\mathbb{R}$ de $f(x) = x\\,(x^2 + 2)^3$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Produit avec une puissance parenthésée → forme $u'\\,u^m$, mais le coefficient devant n'est pas tout à fait $u'$.` },
            { name: `Étape 1`, contenu: `Posons $u(x) = x^2 + 2$, donc $u'(x) = 2x$.` },
            { name: `Étape 2`, contenu: `L'énoncé contient $x$, pas $2x$. On compense : $f(x) = \\dfrac{1}{2}(2x)(x^2+2)^3 = \\dfrac{1}{2}\\,u'(x)\\,[u(x)]^3$.` },
            { name: `Étape 3`, contenu: `Une primitive de $u'u^3$ est $\\dfrac{u^4}{4}$, donc $F(x) = \\dfrac{1}{2}\\times\\dfrac{(x^2+2)^4}{4} + C = \\dfrac{1}{8}(x^2+2)^4 + C$.` },
          ],
          reponse: `$F(x) = \\dfrac{1}{8}(x^2+2)^4 + C, \\quad C \\in \\mathbb{R}$.`,
          conseil: `Écris la fraction de compensation $\\dfrac{1}{2}$ tout de suite, en tête de ligne, pour ne pas l'oublier à la fin.`,
          piege: `On compense uniquement par des **constantes**. Jamais en ajoutant ou retirant un $x$.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$f$ est continue sur $\\mathbb{R}$. Posons $u(x) = x^2 + 2$, dérivable sur $\\mathbb{R}$, $u'(x) = 2x$. Alors
$$f(x) = \\dfrac{1}{2}\\,u'(x)\\,[u(x)]^3.$$
Les primitives de $f$ sur $\\mathbb{R}$ sont
$$F(x) = \\dfrac{1}{2}\\times\\dfrac{(x^2+2)^4}{4} + C = \\dfrac{1}{8}(x^2+2)^4 + C, \\quad C \\in \\mathbb{R}.$$

*[Barème : identification de $u, u'$ : 1,5 pt · compensation $\\frac{1}{2}$ : 1,5 pt · primitive finale + $C$ : 2 pts — Total : 5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 2 — Forme $\\dfrac{u'}{u^2}$ avec condition.** Soit $g(x) = \\dfrac{e^x}{(e^x + 1)^2}$ sur $\\mathbb{R}$. Déterminer la primitive $G$ de $g$ telle que $G(0) = 1$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Fraction avec puissance $2$ au dénominateur → forme $\\dfrac{u'}{u^2}$, primitive $-\\dfrac{1}{u}$. Surtout pas de $\\ln$.` },
            { name: `Étape 1`, contenu: `Posons $u(x) = e^x + 1$, donc $u'(x) = e^x$ — exactement le numérateur.` },
            { name: `Étape 2`, contenu: `$g(x) = \\dfrac{u'(x)}{[u(x)]^2}$, donc $G(x) = -\\dfrac{1}{e^x + 1} + C$.` },
            { name: `Étape 3`, contenu: `$G(0) = 1 \\iff -\\dfrac{1}{e^0 + 1} + C = 1 \\iff -\\dfrac{1}{2} + C = 1 \\iff C = \\dfrac{3}{2}$.` },
          ],
          reponse: `$G(x) = -\\dfrac{1}{e^x + 1} + \\dfrac{3}{2}$.`,
          conseil: `$\\dfrac{1}{u^2} = u^{-2}$, primitive $\\dfrac{u^{-1}}{-1} = -\\dfrac{1}{u}$. Tu retrouves la formule sans l'apprendre par cœur.`,
          piege: `Ne saute pas sur $\\ln$ dès qu'il y a une fraction : ici l'exposant vaut $2$, le logarithme est exclu.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$g$ est continue sur $\\mathbb{R}$ (dénominateur jamais nul). Posons $u(x) = e^x + 1$, dérivable, $u'(x) = e^x$. Alors $g(x) = \\dfrac{u'(x)}{[u(x)]^2}$, et les primitives de $g$ sont
$$G(x) = -\\dfrac{1}{e^x + 1} + C, \\quad C \\in \\mathbb{R}.$$
$$G(0) = 1 \\iff -\\dfrac{1}{2} + C = 1 \\iff C = \\dfrac{3}{2}.$$
D'où $G(x) = -\\dfrac{1}{e^x + 1} + \\dfrac{3}{2}$.

*[Barème : reconnaissance de $\\dfrac{u'}{u^2}$ : 1,5 pt · primitive générale : 1,5 pt · calcul de $C$ : 2 pts — Total : 5 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Repère $u$ et $u'$ avant tout calcul. Réponses finales seulement.

- **Exercice 1.** Primitives sur $]-\\frac{\\pi}{2}\\ ;\\ \\frac{\\pi}{2}[$ de $f(x) = \\cos x\\,\\sin^4 x$. *(Réponse : $F(x) = \\dfrac{1}{5}\\sin^5 x + C$ ; ici $u = \\sin x$, $u' = \\cos x$.)*
- **Exercice 2.** Primitives sur $\\mathbb{R}$ de $g(x) = \\dfrac{x}{\\sqrt{x^2 + 3}}$. *(Réponse : $G(x) = \\sqrt{x^2 + 3} + C$ ; forme $\\dfrac{u'}{2\\sqrt{u}}$ après compensation.)*
- **Exercice 3.** Primitives sur $\\mathbb{R}$ de $h(x) = \\dfrac{2x}{x^2 + 1}$. *(Réponse : $H(x) = \\ln(x^2 + 1) + C$ ; forme $\\dfrac{u'}{u}$, et $x^2+1 > 0$ donc valeur absolue inutile.)*`,
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
            `Une forme composée se primitive « comme si $u$ était la variable », à condition que $u'$ soit présent.`,
            `📘 Vocabulaire officiel : fonction composée, forme $\\dfrac{u'}{u}$ → $\\ln|u|$, forme $u'e^u$ → $e^u$, compensation par une constante.`,
            `On compense uniquement par des constantes (multiplier/diviser par le même réel).`,
            `$\\ln|u|$ seulement pour l'exposant $1$ ; sinon c'est une puissance.`,
            `Vérification : dérive, tu dois retomber sur $f$.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m2',
          titre: `Fil rouge`,
          contenu: `Tu sais maintenant trouver des primitives, simples ou composées. Mais jusqu'ici, la constante $+\\,C$ traîne toujours derrière toi. Et si je te disais qu'en fixant **deux bornes** $a$ et $b$, cette constante s'efface toute seule et le calcul devient un **nombre précis** ? C'est l'intégrale définie — le cœur du **Module 3**.`,
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
            `Je sais repérer la fonction intérieure $u$ et sa dérivée $u'$ dans un produit ou un quotient.`,
            `J'emploie le vocabulaire officiel (fonction composée, forme $\\dfrac{u'}{u}$, $u'e^u$, compensation) dans mes rédactions.`,
            `Je sais compenser un coefficient constant manquant sans déséquilibrer l'expression.`,
            `Je ne confonds jamais $\\dfrac{u'}{u}$ (→ $\\ln|u|$) et $\\dfrac{u'}{u^2}$ (→ $-\\dfrac{1}{u}$).`,
            `Je vérifie ma primitive en la dérivant.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m2',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Beau travail, le plus technique est passé. Direction Module 3.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 1 (compensation).`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : l'image du cadeau emballé et du ruban $u'$.`,
          ],
        },
      ],
    },
  ],
};
