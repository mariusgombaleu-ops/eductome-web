import { Chapitre } from '../../types/course';

export const chapitreM4: Chapitre = {
  id: 't3-m4',
  titre: `Module 4 — Les Techniques d'Intégration Avancées`,
  duree: 30,
  niveau: 'BAC',
  xpGain: 35,
  objectifs: [
    `Appliquer l'Intégration Par Parties (IPP) pour intégrer un produit de deux fonctions`,
    `Choisir $u$ et $v'$ avec le critère officiel ALPES et le vocabulaire attendu au BAC`,
    `Intégrer une fonction à argument affine $f(at+b)$ par compensation`,
    `Reconnaître la forme $u'\\times f'(u)$ et la primitiver directement`,
    `Exploiter parité et périodicité pour simplifier des bornes symétriques`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, je tombe sur $\\displaystyle\\int_1^e x\\ln x\\,dx$. C'est un produit de deux fonctions différentes… je cherche dans mon tableau du Module 2, mais aucune ligne ne marche. Je suis bloqué(e).`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Normal, Champion(ne) ! Le tableau ne sait pas intégrer un produit de deux familles différentes comme « polynôme × logarithme ». Là, il te faut une technique spéciale, une vraie arme de caïman : l'Intégration Par Parties. Elle transforme un produit impossible en un calcul que tu sais faire.`,
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
          contenu: `Pense à un match au terrain de Marcory. Tu as le ballon, mais **deux défenseurs** te collent en même temps : impossible de passer en force. Ce duo de défenseurs, c'est ton produit $x \\times \\ln x$ — deux fonctions accrochées que tu ne peux pas franchir directement.

Que fait le bon joueur ? Il ne s'entête pas : il fait **une passe**. L'IPP, c'est exactement cette passe. Tu « payes » une fois le prix du mouvement — le bloc tout fait $[uv]$ — et en échange, l'un des deux défenseurs se **simplifie** : le $\\ln x$, une fois dérivé, devient un modeste $\\dfrac{1}{x}$.

Résultat : à la place du produit infranchissable, tu te retrouves devant une intégrale beaucoup plus légère, que tu sais terminer les yeux fermés. *L'IPP ne supprime pas la difficulté, elle la déplace vers le côté le plus facile à traiter.*`,
        },
        {
          type: 'figure',
          id: 'fig-m4-1',
          src: '/images/t3/fig_M4_1.png',
          legende: `On échange un produit impossible contre un crochet + une intégrale allégée.`,
          alt: `On échange un produit impossible contre un crochet + une intégrale allégée.`,
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
          contenu: `D'où vient la formule ? On part de la dérivée d'un produit, qu'on connaît depuis le Tome 2 :
$$\\big(u(x)v(x)\\big)' = u'(x)v(x) + u(x)v'(x).$$

On intègre chaque morceau entre $a$ et $b$, puis on isole l'intégrale du produit qui nous bloquait :`,
        },
        {
          type: 'table',
          id: 'tbl5',
          headers: [`Scène du match`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Les deux défenseurs collés`, `$u(x)\\,v'(x)$`, `Le produit qu'on ne sait pas intégrer.`],
            [`Le prix de la passe`, `$[\\,u(x)v(x)\\,]_a^b$`, `Le bloc tout fait, calculé aux bornes.`],
            [`Le défenseur qui se simplifie`, `$u'(x)$`, `La fonction dérivée, devenue plus simple.`],
            [`La nouvelle action dégagée`, `$-\\int_a^b u'(x)v(x)\\,dx$`, `L'intégrale allégée qui reste à faire.`],
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
          contenu: `Champion(ne), l'image de la passe t'a donné l'esprit. La copie attend la formule exacte et le bon critère de choix.

**Définition formelle.** Soit $u$ et $v$ deux fonctions dérivables, à dérivées continues sur $[a\\ ;\\ b]$. La formule d'**intégration par parties** est :
$$\\int_a^b u(x)\\,v'(x)\\,dx = \\big[\\,u(x)v(x)\\,\\big]_a^b - \\int_a^b u'(x)\\,v(x)\\,dx.$$

**En langage courant.** On dérive $u$ (pour le simplifier) et on intègre $v'$ ; ce qu'on perd en bloc $[uv]$, on le récupère en une intégrale plus facile.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Intégration par parties** — la technique pour intégrer un produit de deux fonctions.
- **Fonction à dériver $u$ / à intégrer $v'$** — le choix se justifie par le critère de priorité.
- **Critère ALPES** — ordre de priorité pour $u$ : **A**rc · **L**ogarithme · **P**olynôme · **E**xponentielle · **S**inus/cosinus. *(Au programme de Tle D, le « A » n'apparaît pas : en pratique, la priorité démarre au **L**.)*
- **Changement de variable affine** — pour intégrer $f(at+b)$, on compense par $\\dfrac{1}{a}$.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend que tu poses noir sur blanc : *« $u(x) = \\ldots$, $u'(x) = \\ldots$ ; $v'(x) = \\ldots$, $v(x) = \\ldots$ »* avant d'appliquer la formule. Ces quatre lignes valent déjà des points.`,
        },
        {
          type: 'figure',
          id: 'fig-m4-2',
          src: '/images/t3/fig_M4_2.png',
          legende: `Quatre cases au brouillon = zéro erreur de sens dans l'IPP.`,
          alt: `Quatre cases au brouillon = zéro erreur de sens dans l'IPP.`,
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
          titre: `Règle d'Or — Intégration Par Parties`,
          contenu: `Pour $u$ et $v$ dérivables à dérivées continues sur $[a\\ ;\\ b]$ :
$$\\int_a^b u(x)\\,v'(x)\\,dx = \\big[\\,u(x)v(x)\\,\\big]_a^b - \\int_a^b u'(x)\\,v(x)\\,dx.$$
Choix de $u$ : priorité **ALPES** (en Tle D, à partir du **L**ogarithme).

**Changement de variable affine.** Si $F$ est une primitive de $f$, alors pour $a \\neq 0$ :
$$\\int_\\alpha^\\beta f(at+b)\\,dt = \\dfrac{1}{a}\\big[\\,F(at+b)\\,\\big]_\\alpha^\\beta.$$

**Forme composée directe.** $\\displaystyle\\int u'(x)\\,f'(u(x))\\,dx = f(u(x)) + C$.

**Parité et périodicité** (intervalle symétrique $[-a\\ ;\\ a]$) :
- $f$ paire : $\\displaystyle\\int_{-a}^{a} f(t)\\,dt = 2\\int_0^{a} f(t)\\,dt$.
- $f$ impaire : $\\displaystyle\\int_{-a}^{a} f(t)\\,dt = 0$.
- $f$ périodique de période $T$ : $\\displaystyle\\int_a^{a+T} f(t)\\,dt = \\int_0^{T} f(t)\\,dt$.`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Pour un produit « polynôme × $\\ln$ », on pose **toujours** $u = \\ln x$ (le L passe avant le P), pour que $u'$ devienne $\\dfrac{1}{x}$ et simplifie la suite.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Sous le stress, beaucoup intègrent $u$ au lieu de la dériver, et l'exercice devient insoluble. Matérialise tes choix avec des flèches au brouillon.`,
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
          contenu: `Un **produit de deux familles** ($x\\ln x$, $x e^x$, $x\\sin x$) → IPP. Un **argument affine** ($e^{2t+1}$, $\\cos(3t)$) → compensation $\\dfrac{1}{a}$. Des **bornes symétriques** ($-a$ à $a$) → teste la parité. Une forme $u'\\times f'(u)$ → primitive composée directe.`,
        },
        {
          type: 'table',
          id: 'tbl13',
          titre: `L'Arbre de décision`,
          headers: [`Si tu vois…`, `Outil cible`, `Geste immédiat`],
          rows: [
            [`Produit de deux familles ($x\\ln x$, $x^2 e^x$)`, `IPP`, `Appliquer ALPES (à partir du L) pour fixer $u$.`],
            [`Argument affine ($\\cos(2t+3)$, $e^{-5x}$)`, `Compensation affine`, `Sortir $\\dfrac{1}{a}$ devant le crochet.`],
            [`Produit avec dérivée interne ($u'f'(u)$)`, `Primitive composée`, `Poser $u$, appliquer le Module 2.`],
            [`Bornes de $-a$ à $a$`, `Parité / périodicité`, `Tester $f(-x)$ pour simplifier ou annuler.`],
          ],
        },
        {
          type: 'text',
          id: 'b14',
          titre: `La Procédure (IPP)`,
          contenu: `**Étape 1.** Repérer les deux facteurs, appliquer ALPES pour fixer $u$ (à dériver) et $v'$ (à intégrer).

**Étape 2.** Tableau à quatre cases : $u \\to u'$, $v' \\to v$ (sans constante).

**Étape 3.** Écrire la formule : $\\big[uv\\big]_a^b - \\displaystyle\\int_a^b u'v$.

**Étape 4.** Calculer le bloc crochet, puis résoudre la nouvelle intégrale (plus simple).`,
        },
        {
          type: 'tip',
          id: 'tip15',
          titre: `La Vérification`,
          contenu: `- Dérive l'expression de la primitive obtenue (avant les bornes) : tu dois retomber sur la fonction de départ.
- Vérifie que $u$ a bien été **dérivé** (et non intégré).`,
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
            [`🟢 BASE`, `Argument affine simple`, `$e^{at+b}$ ou $\\cos(at+b)$`, `Maintenant à toi`],
            [`🟡 MOYEN`, `Changement de variable affine`, `exponentielle à argument $at+b$`, `Type 2`],
            [`🔴 BAC`, `IPP polynôme × logarithme`, `produit $x\\ln x$ sur $[1\\ ;\\ e]$`, `Type 1`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 1 — IPP polynôme × logarithme** *(modèle dérivé d'annales ivoiriennes)*. Calculer $I = \\displaystyle\\int_1^e x\\ln x\\,dx$ à l'aide d'une intégration par parties.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Produit « polynôme × log ». Aucune formule directe → IPP. ALPES : le **L** passe avant le **P**, donc $u = \\ln x$.` },
            { name: `Étape 1`, contenu: `$u(x) = \\ln x \\Rightarrow u'(x) = \\dfrac{1}{x}$ ; $v'(x) = x \\Rightarrow v(x) = \\dfrac{1}{2}x^2$.` },
            { name: `Étape 2`, contenu: `$I = \\Big[\\dfrac{1}{2}x^2\\ln x\\Big]_1^e - \\displaystyle\\int_1^e \\dfrac{1}{x}\\times\\dfrac{1}{2}x^2\\,dx = \\Big[\\dfrac{1}{2}x^2\\ln x\\Big]_1^e - \\displaystyle\\int_1^e \\dfrac{1}{2}x\\,dx$.` },
            { name: `Étape 3`, contenu: `$I = \\Big[\\dfrac{1}{2}x^2\\ln x - \\dfrac{1}{4}x^2\\Big]_1^e$.` },
            { name: `Étape 4`, contenu: `En $e$ : $\\dfrac{1}{2}e^2 - \\dfrac{1}{4}e^2 = \\dfrac{1}{4}e^2$. En $1$ : $0 - \\dfrac{1}{4} = -\\dfrac{1}{4}$. Donc $I = \\dfrac{1}{4}e^2 - \\big(-\\dfrac{1}{4}\\big) = \\dfrac{e^2 + 1}{4}$.` },
          ],
          reponse: `$I = \\dfrac{e^2 + 1}{4}$.`,
          conseil: `$\\ln e = 1$ et $\\ln 1 = 0$ : ces deux valeurs font tout le calcul des bornes. Pose-les dès le départ.`,
          piege: `Si tu poses $u = x$ et $v' = \\ln x$, tu dois primitiver $\\ln x$ (plus dur) : l'exercice se complique. Respecte ALPES.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$x \\mapsto \\ln x$ et $x \\mapsto x$ sont dérivables à dérivées continues sur $[1\\ ;\\ e]$. Posons $u(x) = \\ln x$, $u'(x) = \\dfrac{1}{x}$ ; $v'(x) = x$, $v(x) = \\dfrac{1}{2}x^2$. Par IPP :
$$I = \\Big[\\dfrac{1}{2}x^2\\ln x\\Big]_1^e - \\int_1^e \\dfrac{1}{2}x\\,dx = \\Big[\\dfrac{1}{2}x^2\\ln x - \\dfrac{1}{4}x^2\\Big]_1^e.$$
Comme $\\ln e = 1$ et $\\ln 1 = 0$ : $I = \\Big(\\dfrac{1}{2}e^2 - \\dfrac{1}{4}e^2\\Big) - \\Big(0 - \\dfrac{1}{4}\\Big) = \\dfrac{e^2 + 1}{4}.$

*[Barème : choix/dérivation de $u, v$ : 1,5 pt · formule IPP : 1,5 pt · calcul des bornes : 2 pts — Total : 5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Changement de variable affine.** Calculer $J = \\displaystyle\\int_0^1 e^{2t+1}\\,dt$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Argument affine $at + b$ avec $a = 2$, $b = 1$ → compensation par $\\dfrac{1}{a} = \\dfrac{1}{2}$.` },
            { name: `Étape 1`, contenu: `Une primitive de $e^{2t+1}$ est $\\dfrac{1}{2}e^{2t+1}$.` },
            { name: `Étape 2`, contenu: `$J = \\Big[\\dfrac{1}{2}e^{2t+1}\\Big]_0^1 = \\dfrac{1}{2}e^3 - \\dfrac{1}{2}e^1 = \\dfrac{e^3 - e}{2}$.` },
          ],
          reponse: `$J = \\dfrac{e^3 - e}{2}$.`,
          conseil: `Le $\\dfrac{1}{a}$ se place **devant le crochet** dès le début, jamais après.`,
          piege: `En $t = 0$, $e^{2(0)+1} = e^1 = e$, pas $1$. La borne inférieure compte vraiment.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$t \\mapsto e^{2t+1}$ est continue sur $[0\\ ;\\ 1]$. L'argument est affine avec $a = 2$, donc
$$J = \\Big[\\dfrac{1}{2}e^{2t+1}\\Big]_0^1 = \\dfrac{1}{2}e^3 - \\dfrac{1}{2}e = \\dfrac{e^3 - e}{2}.$$

*[Barème : forme affine + coefficient : 1,5 pt · crochet compensé : 1,5 pt · valeur exacte : 2 pts — Total : 5 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Repère l'outil avant de calculer. Réponses finales seulement.

- **Exercice 1.** $K = \\displaystyle\\int_0^{\\pi} x\\sin x\\,dx$ par IPP. *(Réponse : $K = \\pi$ ; poser $u = x$, $v' = \\sin x$.)*
- **Exercice 2.** $L = \\displaystyle\\int_0^2 \\cos(3t)\\,dt$ par compensation affine. *(Réponse : $L = \\dfrac{1}{3}\\sin 6$.)*
- **Exercice 3.** $\\displaystyle\\int_{-2}^{2} t^3\\,dt$ en utilisant la parité. *(Réponse : $0$, car $t \\mapsto t^3$ est impaire.)*`,
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
            `IPP : $\\displaystyle\\int_a^b uv' = [uv]_a^b - \\int_a^b u'v$, avec $u$ choisi par ALPES (à partir du L).`,
            `📘 Vocabulaire officiel : intégration par parties, fonction à dériver/à intégrer, critère ALPES, changement de variable affine.`,
            `Argument affine $f(at+b)$ → compenser par $\\dfrac{1}{a}$ devant le crochet.`,
            `Bornes symétriques → tester la parité (impaire → $0$).`,
            `Vérification : dérive ta primitive, tu dois retomber sur $f$.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m4',
          titre: `Fil rouge`,
          contenu: `Tu sais maintenant calculer presque n'importe quelle intégrale. Mais à quoi servent tous ces nombres ? Dans le **Module 5**, on leur donne enfin un **sens géométrique** : mesurer des **aires** exactes entre des courbes — et tu verras que tout ce que tu viens d'apprendre devient un outil de mesure concret.`,
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
            `Je sais appliquer le critère ALPES pour choisir $u$ et $v'$ sans me tromper de sens.`,
            `J'emploie le vocabulaire officiel (IPP, fonction à dériver/intégrer, changement de variable affine).`,
            `Je compense toujours par $\\dfrac{1}{a}$ devant le crochet pour un argument affine.`,
            `Je sais utiliser la parité pour annuler ou simplifier une intégrale symétrique.`,
            `Je vérifie mon intégration en dérivant la primitive obtenue.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m4',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Arme avancée maîtrisée. Direction Module 5.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 1 (IPP).`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : la passe au match et le défenseur qui se simplifie.`,
          ],
        },
      ],
    },
  ],
};
