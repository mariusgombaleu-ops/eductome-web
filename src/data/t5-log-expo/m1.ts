import { Chapitre } from '../../types/course';

export const chapitreM1: Chapitre = {
  id: 't5-m1',
  titre: `Module 1 — Le Logarithme népérien`,
  duree: 25,
  niveau: 'BASE',
  xpGain: 25,
  objectifs: [
    `Donner l'ensemble de définition d'une fonction logarithme et reconnaître la condition de validité`,
    `Simplifier une expression en transformant produits et quotients en sommes et différences`,
    `Énoncer la définition et les propriétés du logarithme népérien avec le vocabulaire officiel attendu au BAC`,
    `Déterminer les limites de référence aux bornes et le signe de $\\ln x$`,
    `Lire et tracer l'allure de la courbe de la fonction $\\ln$`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, au Tome 4 on s'est arrêtés en plein milieu d'un calcul. On avait $1{,}05^{\\,n} > 2$ et tu m'as dit qu'on ne savait pas encore faire descendre le $n$ de son perchoir. Là, tout le monde dans la classe a paniqué. C'est quoi cet outil mystère qui nous manquait ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Pose ton cahier, Champion(ne). Tu touches le nerf de la guerre. Quand une inconnue est coincée tout en haut, en exposant, l'algèbre ordinaire ne sait pas la décrocher. Il nous faut une fonction spéciale, une fonction qui transforme une multiplication épuisante en une simple addition, et qui range les explosions de la multiplication sur une échelle bien régulière. Cette fonction, c'est le **logarithme népérien**. Aujourd'hui on apprend à la connaître ; dès le Module 2, elle débloquera ton seuil $1{,}05^{\\,n} > 2$ en deux lignes.`,
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
          contenu: `Imagine une bonne information qui circule un matin à Yopougon : l'ouverture d'un nouveau terrain de foot gratuit. À 8 h, une seule personne est au courant. Mais chacun le dit à un ami, si bien que **le nombre de personnes informées double chaque heure** : une à 8 h, deux à 9 h, quatre à 10 h, huit à 11 h, et ainsi de suite. La foule explose par multiplication.

Maintenant, retourne la question. Tu arrives en fin de matinée, tu vois qu'environ mille personnes sont déjà au courant, et tu veux savoir : **combien d'heures se sont écoulées depuis le tout premier message ?** Tu ne cherches plus une foule, tu cherches un nombre d'étapes. Tu veux remonter de l'explosion vers le compteur du temps.

C'est exactement le rôle du logarithme. Pendant que la foule se multiplie, le logarithme, lui, compte tranquillement les heures, une par une, à pas réguliers. *Le logarithme est le compteur qui transforme une multiplication qui s'emballe en une addition qui avance calmement.*`,
        },
        {
          type: 'figure',
          id: 'fig-m1-1',
          src: '/images/t5/fig_M1_1.png',
          legende: `La foule se multiplie (×2 à chaque pas) ; le logarithme compte les pas un par un (+1).`,
          alt: `La foule se multiplie par deux à chaque pas tandis que le logarithme compte les pas un par un.`,
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
          contenu: `Traduisons la scène de Yopougon dans le langage de la Terminale D.

- **Le nombre de personnes informées** → le réel strictement positif $x$ — l'objet dont on part.
- **Le nombre d'heures écoulées** → la valeur $\\ln x$ — le compteur d'étapes.
- **Doubler la foule** → avancer le compteur d'un pas constant.
- **Multiplier deux foules** → additionner leurs deux compteurs : $\\ln(a \\times b) = \\ln a + \\ln b$.`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène de Yopougon`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Une foule strictement positive`, `$x \\in \\left]\\,0\\ ;\\ +\\infty\\,\\right[$`, `Le logarithme n'existe que pour $x > 0$.`],
            [`Le compteur d'heures`, `$\\ln x$`, `L'image de $x$ par la fonction logarithme.`],
            [`Le tout premier message`, `$\\ln 1 = 0$`, `Au départ, zéro heure écoulée.`],
            [`Multiplier deux foules`, `$\\ln(ab) = \\ln a + \\ln b$`, `Le produit devient une somme.`],
            [`Comparer deux foules`, `$a < b \\iff \\ln a < \\ln b$`, `Le logarithme est strictement croissant.`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `Cette transformation « produit en somme » porte un nom officiel. Habillons-la dans le langage du BAC.`,
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
          contenu: `Champion(ne), tu as l'image du compteur de Yopougon. La copie attend maintenant les mots exacts.

**Définition formelle.** On appelle **fonction logarithme népérien**, notée $\\ln$, l'unique primitive sur $\\left]\\,0\\ ;\\ +\\infty\\,\\right[$ de la fonction $x \\mapsto \\dfrac{1}{x}$ qui s'annule en $1$. Elle est définie sur $\\left]\\,0\\ ;\\ +\\infty\\,\\right[$, dérivable, et pour tout $x > 0$ : $\\ln'(x) = \\dfrac{1}{x}$, avec $\\ln 1 = 0$.

**En langage courant.** $\\ln x$ mesure « combien de fois » il faut multiplier pour atteindre $x$ — le compteur d'étapes de la multiplication.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Ensemble de définition** — $\\left]\\,0\\ ;\\ +\\infty\\,\\right[$ : le logarithme n'existe que d'une quantité **strictement positive**.
- **Propriété fonctionnelle** — la relation $\\ln(ab) = \\ln a + \\ln b$ qui transforme le produit en somme.
- **Logarithme népérien de $e$** — le nombre $e \\approx 2{,}718$ est défini par $\\ln e = 1$.
- **Fonction strictement croissante** — $\\ln a < \\ln b \\iff a < b$, à invoquer pour comparer ou résoudre.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend, avant tout calcul de logarithme, la phrase : *« La fonction est définie pour les valeurs telles que la quantité sous le logarithme est strictement positive. »* Sans la condition d'existence posée, les points de la question s'envolent.`,
        },
        {
          type: 'figure',
          id: 'fig-m1-2',
          src: '/images/t5/fig_M1_2.png',
          legende: `$\\ln$ traverse l'axe en $x=1$, vaut $1$ en $x=e$, plonge vers $-\\infty$ près de zéro et grimpe sans fin.`,
          alt: `Courbe du logarithme népérien passant par les points remarquables.`,
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
          titre: `Règle d'Or — Propriétés algébriques du logarithme népérien`,
          contenu: `Pour tous réels $a > 0$ et $b > 0$, et tout entier $n$ :
$$\\ln(a \\times b) = \\ln a + \\ln b \\qquad \\ln\\!\\left(\\dfrac{a}{b}\\right) = \\ln a - \\ln b$$
$$\\ln\\!\\left(\\dfrac{1}{a}\\right) = -\\ln a \\qquad \\ln(a^n) = n\\,\\ln a \\qquad \\ln\\sqrt{a} = \\dfrac{1}{2}\\ln a$$`,
        },
        {
          type: 'text',
          id: 'b10',
          contenu: `**Valeurs et signe.** $\\ln 1 = 0$, $\\ln e = 1$. De plus, $\\ln x > 0 \\iff x > 1$ et $\\ln x < 0 \\iff 0 < x < 1$.

**Limites de référence.**
$$\\displaystyle\\lim_{x \\to 0^+} \\ln x = -\\infty \\qquad \\displaystyle\\lim_{x \\to +\\infty} \\ln x = +\\infty$$`,
        },
        {
          type: 'tip',
          id: 'tip11',
          titre: `Conseil du Grand Frère`,
          contenu: `Pour simplifier une grosse expression, cherche d'abord à tout exprimer en fonction d'un seul logarithme « parent » (souvent $\\ln 2$ ou $\\ln 3$). Les puissances sortent devant, les produits se cassent en sommes, et tout s'aligne.`,
        },
        {
          type: 'warning',
          id: 'warn12',
          titre: `Piège à éviter`,
          contenu: `Le logarithme transforme le **produit** en somme, jamais l'addition : $\\ln(a + b) \\neq \\ln a + \\ln b$. Cette confusion est l'erreur à éviter numéro un au BAC. Grave-le : seuls les produits et quotients se cassent.`,
        },
      ],
    },
    {
      id: 's5',
      titre: `⑤ LA DESCENTE`,
      blocs: [
        {
          type: 'text',
          id: 'b13',
          titre: `Le Diagnostic`,
          contenu: `On te demande de simplifier, de comparer, de donner un domaine ou une limite. Repère les mots-clés : « ensemble de définition » → pose la quantité interne $> 0$ (Outil 3 du Socle) ; « simplifier / exprimer en fonction de $\\ln 2$ » → casse les produits et sors les puissances ; « limite en $0$ ou en $+\\infty$ » → utilise les limites de référence.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Si tu vois…`, `Ce que tu fais`],
          rows: [
            [`$\\ln$ d'une expression avec $x$`, `Pose la condition : quantité interne $> 0$, et résous (Outil 3).`],
            [`Un produit ou un quotient sous une somme de $\\ln$`, `Casse avec $\\ln(ab)=\\ln a+\\ln b$ et $\\ln(a/b)=\\ln a-\\ln b$.`],
            [`Une puissance $\\ln(a^n)$`, `Fais descendre l'exposant : $n\\,\\ln a$.`],
            [`Une limite en $0^+$ ou $+\\infty$`, `Applique directement les limites de référence.`],
            [`Une comparaison $\\ln a$ et $\\ln b$`, `Compare $a$ et $b$ : $\\ln$ est strictement croissant.`],
          ],
        },
        {
          type: 'text',
          id: 'b14',
          titre: `La Procédure (étudier une fonction ln simple)`,
          contenu: `**Étape 1.** Pose l'ensemble de définition : écris la condition « quantité sous le $\\ln$ $> 0$ » et résous-la.

**Étape 2.** Simplifie l'écriture si possible (produits → sommes, puissances → coefficients).

**Étape 3.** Calcule les limites aux bornes du domaine avec les limites de référence.

**Étape 4.** Conclus (signe, variations ou valeur) par une phrase complète.`,
        },
        {
          type: 'tip',
          id: 'tip15',
          titre: `La Vérification`,
          contenu: `- **Cohérence du domaine** : toute valeur interdite doit faire apparaître $-\\infty$ ou une absence de définition.
- **Test rapide** : remplace par $x = 1$ (où $\\ln 1 = 0$) ou $x = e$ (où $\\ln e = 1$) pour traquer une erreur de signe.`,
        },
        {
          type: 'table',
          id: 'tbl-tv',
          titre: `Tableau de variations de référence`,
          headers: [`$x$`, `$0$`, `$+\\infty$`],
          rows: [
            [`$\\ln'(x) = \\dfrac{1}{x}$`, `$+$`, `$+$`],
            [`$\\ln x$`, `$-\\infty \\nearrow +\\infty$`, ``],
          ],
        },
        {
          type: 'figure',
          id: 'fig-m1-3',
          src: '/images/t5/fig_M1_3.png',
          legende: `À gauche de $1$ le logarithme est négatif, à droite il est positif : le signe bascule en $x=1$.`,
          alt: `Signe du logarithme népérien autour de x égal à 1.`,
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
            [`🟢 BASE`, `Simplifier une expression de logarithmes`, `Tous les nombres sont des puissances d'un même entier`, `Type 1`],
            [`🟡 MOYEN`, `Déterminer un ensemble de définition`, `$\\ln$ d'un trinôme du second degré`, `Type 2`],
            [`🔴 BAC`, `Limite avec forme indéterminée`, `$\\ln x + x$ ou $x - \\ln x$ en $+\\infty$`, `Type 3`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Simplifier une écriture logarithmique.** Écris $A = \\ln 16 - 3\\ln 2 + \\ln 4$ sous la forme $k\\ln 2$ avec $k$ entier.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Tous les nombres ($16$, $2$, $4$) sont des puissances de $2$. On exprime tout en fonction de $\\ln 2$ et on réduit.` },
            { name: `Étape 1`, contenu: `$\\ln 16 = \\ln(2^4) = 4\\ln 2$ et $\\ln 4 = \\ln(2^2) = 2\\ln 2$.` },
            { name: `Étape 2`, contenu: `$A = 4\\ln 2 - 3\\ln 2 + 2\\ln 2 = (4 - 3 + 2)\\ln 2 = 3\\ln 2$.` },
          ],
          reponse: `$A = 3\\ln 2$.`,
          conseil: `Choisis le plus petit « parent » commun ($\\ln 2$ ici) et ramène tout à lui avant d'additionner les coefficients.`,
          piege: `N'écris jamais $\\ln 16 = 16\\ln 2$ : l'exposant qui descend est $4$ (car $16 = 2^4$), pas $16$.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `On a $16 = 2^4$ et $4 = 2^2$, donc $\\ln 16 = 4\\ln 2$ et $\\ln 4 = 2\\ln 2$. Ainsi $A = 4\\ln 2 - 3\\ln 2 + 2\\ln 2 = 3\\ln 2$.

*[Barème : transformation des puissances : 1,5 pt · réduction : 1 pt · conclusion : 0,5 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Ensemble de définition.** Détermine l'ensemble de définition de la fonction $f(x) = \\ln(x^2 - 3x + 2)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Le logarithme exige une quantité strictement positive : on étudie le signe du trinôme $x^2 - 3x + 2$ (Outil 3 du Socle).` },
            { name: `Étape 1`, contenu: `On résout $x^2 - 3x + 2 > 0$. Le discriminant vaut $\\Delta = 9 - 8 = 1 > 0$, les racines sont $x = 1$ et $x = 2$.` },
            { name: `Étape 2`, contenu: `Comme le coefficient de $x^2$ est positif, le trinôme est strictement positif à l'extérieur des racines.` },
          ],
          reponse: `$f$ est définie sur $\\left]\\,-\\infty\\ ;\\ 1\\,\\right[ \\cup \\left]\\,2\\ ;\\ +\\infty\\,\\right[$.`,
          conseil: `Pour un $\\ln$ de trinôme, le réflexe est toujours : discriminant → racines → tableau de signe → on garde le strictement positif.`,
          piege: `N'inclus jamais les racines $1$ et $2$ : en ces points le trinôme vaut $0$, et $\\ln 0$ n'existe pas. Les crochets restent ouverts.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$f(x)$ existe si et seulement si $x^2 - 3x + 2 > 0$. Le trinôme a pour racines $1$ et $2$ et son coefficient dominant est positif : il est strictement positif sur $\\left]\\,-\\infty\\ ;\\ 1\\,\\right[ \\cup \\left]\\,2\\ ;\\ +\\infty\\,\\right[$. L'ensemble de définition de $f$ est donc $D_f = \\left]\\,-\\infty\\ ;\\ 1\\,\\right[ \\cup \\left]\\,2\\ ;\\ +\\infty\\,\\right[$.

*[Barème : condition d'existence : 1 pt · racines : 1 pt · signe + conclusion : 1,5 pt — Total : 3,5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 3 — Limite avec forme indéterminée.** Calcule $\\displaystyle\\lim_{x \\to +\\infty} \\big(x - \\ln x\\big)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `En $+\\infty$, $x \\to +\\infty$ et $\\ln x \\to +\\infty$ : c'est une forme indéterminée $\\infty - \\infty$. On factorise par le terme le plus fort, $x$.` },
            { name: `Étape 1`, contenu: `Pour $x > 0$, $x - \\ln x = x\\left(1 - \\dfrac{\\ln x}{x}\\right)$.` },
            { name: `Étape 2`, contenu: `Or $\\displaystyle\\lim_{x \\to +\\infty} \\dfrac{\\ln x}{x} = 0$ (croissance comparée, vue au Module 6). Donc le facteur entre parenthèses tend vers $1$.` },
            { name: `Étape 3`, contenu: `Comme $x \\to +\\infty$ et $1 - \\dfrac{\\ln x}{x} \\to 1$, le produit tend vers $+\\infty$.` },
          ],
          reponse: `$\\displaystyle\\lim_{x \\to +\\infty} \\big(x - \\ln x\\big) = +\\infty$.`,
          conseil: `Face à $\\infty - \\infty$, factorise toujours par le terme dominant. Ici $x$ écrase $\\ln x$, donc c'est $x$ qui sort.`,
          piege: `Ne conclus jamais « $\\infty - \\infty = 0$ ». Une forme indéterminée n'a pas de valeur toute faite : il faut lever l'indétermination par factorisation.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Pour tout $x > 0$, $x - \\ln x = x\\left(1 - \\dfrac{\\ln x}{x}\\right)$. Or $\\displaystyle\\lim_{x \\to +\\infty} \\dfrac{\\ln x}{x} = 0$, donc $\\displaystyle\\lim_{x \\to +\\infty}\\left(1 - \\dfrac{\\ln x}{x}\\right) = 1$. Comme $\\displaystyle\\lim_{x \\to +\\infty} x = +\\infty$, on conclut par produit : $\\displaystyle\\lim_{x \\to +\\infty}\\big(x - \\ln x\\big) = +\\infty$.

*[Barème : reconnaissance de la FI : 1 pt · factorisation : 1,5 pt · croissance comparée : 1 pt · conclusion : 0,5 pt — Total : 4 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Repère la méthode avant de calculer. Réponses finales seulement.

- **Exercice 1.** Écris $B = \\ln 27 - \\ln 3$ sous la forme $k\\ln 3$. *(Réponse : $\\ln 27 = 3\\ln 3$, donc $B = 2\\ln 3$.)*
- **Exercice 2.** Donne l'ensemble de définition de $g(x) = \\ln(2x - 6)$. *(Réponse : $2x - 6 > 0 \\iff x > 3$, donc $D_g = \\left]\\,3\\ ;\\ +\\infty\\,\\right[$.)*
- **Exercice 3.** Résous dans $\\left]\\,0\\ ;\\ +\\infty\\,\\right[$ l'équation $\\ln x = \\ln 5$. *(Réponse : $\\ln$ étant strictement croissante, $x = 5$.)*`,
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
            `Le logarithme népérien n'existe que d'une quantité **strictement positive** : toujours poser la condition d'existence.`,
            `📘 Vocabulaire officiel : ensemble de définition, propriété fonctionnelle, logarithme népérien de $e$, fonction strictement croissante.`,
            `Produits et quotients se cassent en sommes et différences ; les puissances descendent en coefficients — jamais l'addition.`,
            `Limites de référence : $\\ln x \\to -\\infty$ en $0^+$, $\\ln x \\to +\\infty$ en $+\\infty$. Signe : $\\ln x > 0 \\iff x > 1$.`,
            `La courbe passe par $(1\\,;\\,0)$ et $(e\\,;\\,1)$, avec l'axe des ordonnées en asymptote verticale.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m1',
          titre: `Fil rouge`,
          contenu: `Tu sais maintenant ce qu'est le logarithme et comment manipuler ses propriétés. Mais une question reste ouverte : comment **dériver** une fonction comme $\\ln(x^2 + 1)$, comment retrouver les **primitives** cachées sous la forme $\\dfrac{u'}{u}$, et surtout comment enfin résoudre ce fameux seuil $1{,}05^{\\,n} > 2$ resté en suspens depuis le Tome 4 ? C'est tout le sujet du Module 2 : les applications du logarithme.`,
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
            `Je pose la condition d'existence (quantité interne $> 0$) avant tout calcul de logarithme.`,
            `J'emploie le vocabulaire officiel (ensemble de définition, propriété fonctionnelle, fonction strictement croissante).`,
            `Je casse un produit ou un quotient en somme ou différence, et je fais descendre les puissances.`,
            `Je connais les limites de référence en $0^+$ et $+\\infty$ et le signe de $\\ln x$.`,
            `Je sais décrire l'allure de la courbe et placer les points $(1\\,;\\,0)$ et $(e\\,;\\,1)$.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m1',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Fondation en béton armé. Direction Module 2.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 2.`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : le compteur d'heures de Yopougon.`,
          ],
        },
      ],
    },
  ],
};
