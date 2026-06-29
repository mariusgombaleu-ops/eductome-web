import { Chapitre } from '../../types/course';

export const chapitreM1: Chapitre = {
  id: 't3-m1',
  titre: `Module 1 — Les Primitives de Référence`,
  duree: 25,
  niveau: 'BASE',
  xpGain: 25,
  objectifs: [
    `Comprendre et appliquer la définition d'une primitive sur un intervalle`,
    `Énoncer ce qu'est une primitive avec le vocabulaire officiel attendu au BAC`,
    `Maîtriser de tête le tableau des primitives fondamentales de référence`,
    `Justifier rigoureusement qu'une fonction $F$ est une primitive d'une fonction $f$`,
    `Déterminer la primitive unique respectant une condition initiale $F(x_0) = y_0$`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, dans le Tome 2, on partait d'une fonction et on trouvait sa dérivée. Là, on me donne la dérivée et on me demande la fonction de départ… mais comment je fais le chemin à l'envers ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Excellente question, Champion(ne) ! Tu viens de mettre le doigt sur tout le tome. Faire ce chemin retour, c'est chercher ce qu'on appelle une **primitive**. Et bonne nouvelle : tu as déjà tous les outils, parce qu'une primitive, c'est juste une dérivée lue à l'envers. On va commencer par un cas que tu connais par cœur : le gbaka.`,
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
          contenu: `Reprenons notre gbaka qui file d'Adjamé vers Bingerville. Le compteur t'indique sa vitesse à chaque instant $t$ : disons $v(t) = 2t$. La question du voyage, ce n'est plus « à quelle vitesse ? » mais « **où est-il rendu ?** » — autrement dit, quelle est sa fonction de position $h(t)$ ?

Tu cherches donc une fonction qui, une fois dérivée, redonne exactement $2t$. Ton réflexe du Tome 2 s'allume : la dérivée de $t^2$ vaut $2t$. On peut donc poser $h(t) = t^2$.

Mais reste vigilant(e) ! Si le gbaka avait démarré avec $5$ mètres d'avance, sa position serait $h(t) = t^2 + 5$ — car la dérivée d'une constante est nulle. S'il était parti $12$ mètres en retard, ce serait $h(t) = t^2 - 12$. Toutes ces fonctions ont la **même vitesse** mais un **point de départ différent**.

En clair, toutes les fonctions $h(t) = t^2 + C$ (avec $C$ réel) sont de parfaites candidates. Ce nombre $C$, c'est la position initiale, l'endroit précis du départ sur la route. *Une seule vitesse engendre toute une famille de trajectoires parallèles.*`,
        },
        {
          type: 'figure',
          id: 'fig-m1-1',
          src: '/images/t3/fig_M1_1.png',
          legende: `Une seule dérivée $2t$ reconstruit une famille entière de positions $t^2 + C$.`,
          alt: `Une seule dérivée $2t$ reconstruit une famille entière de positions $t^2 + C$.`,
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
          contenu: `Traduisons maintenant la scène du gbaka dans le langage des maths, brique par brique :

- La vitesse lue au compteur → la fonction $f$ qu'on te donne.
- La position du véhicule → la fonction $F$ qu'on cherche (la primitive).
- « Dériver la position donne la vitesse » → $F'(x) = f(x)$.
- Le point de départ inconnu → la constante réelle $C$.`,
        },
        {
          type: 'table',
          id: 'tbl5',
          headers: [`Scène du voyage`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`La vitesse au compteur`, `$f(x)$`, `La fonction de départ, qu'on connaît.`],
            [`La position du gbaka`, `$F(x)$`, `La primitive cherchée.`],
            [`Dériver la position redonne la vitesse`, `$F'(x) = f(x)$`, `La définition même d'une primitive.`],
            [`Le point de départ sur la route`, `$C \\in \\mathbb{R}$`, `La constante qui distingue deux primitives.`],
            [`Connaître un point de passage`, `$F(x_0) = y_0$`, `La condition qui fixe une primitive unique.`],
          ],
        },
        {
          type: 'text',
          id: 'b6',
          contenu: `Tout le module tient dans cette correspondance : trouver $F$ telle que $F' = f$, sans oublier le $+\\,C$.`,
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
          contenu: `Champion(ne), tu as l'image du gbaka et de sa position. Maintenant, ta copie doit parler le langage rigoureux des maths.

**Définition formelle.** Soit $f$ une fonction définie sur un intervalle $I$. On dit que la fonction $F$ est une **primitive** de $f$ sur $I$ lorsque $F$ est dérivable sur $I$ et que, pour tout $x \\in I$, $F'(x) = f(x)$.

**En langage courant.** $F$ est une primitive de $f$ si, en dérivant $F$, on retombe exactement sur $f$ — comme retrouver la position à partir de la vitesse.`,
        },
        {
          type: 'warning',
          id: 'warn8',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Primitive sur un intervalle $I$** — on précise toujours l'intervalle ; une primitive n'existe que là où $f$ est continue.
- **Famille de primitives** — deux primitives d'une même fonction diffèrent d'une constante : $F(x) + C$.
- **Constante d'intégration** — le réel $C$, jamais facultatif tant qu'aucune condition n'est imposée.
- **Condition initiale** — l'égalité $F(x_0) = y_0$ qui sélectionne **une** primitive parmi la famille.`,
        },
        {
          type: 'tip',
          id: 'tip9',
          titre: `À retenir`,
          contenu: `Le correcteur attend la phrase *« $F$ est dérivable sur $I$ et pour tout $x \\in I$, $F'(x) = f(x)$, donc $F$ est une primitive de $f$ sur $I$. »* Sans cette phrase, la justification est incomplète et le barème saute.`,
        },
        {
          type: 'figure',
          id: 'fig-m1-2',
          src: '/images/t3/fig_M1_2.png',
          legende: `La famille est infinie ; la condition initiale n'en garde qu'une.`,
          alt: `La famille est infinie ; la condition initiale n'en garde qu'une.`,
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
          titre: `Règle d'Or — Primitives et unicité`,
          contenu: `Si $f$ est continue sur un intervalle $I$, alors $f$ admet des primitives sur $I$. Deux primitives quelconques de $f$ sur $I$ diffèrent d'une **constante réelle** : si $F$ et $G$ sont deux primitives de $f$ sur $I$, alors il existe $C \\in \\mathbb{R}$ tel que, pour tout $x \\in I$, $G(x) = F(x) + C$.

De plus, pour tout point $(x_0\\ ;\\ y_0)$ avec $x_0 \\in I$, il existe **une unique** primitive $F$ de $f$ sur $I$ vérifiant $F(x_0) = y_0$.`,
        },
        {
          type: 'table',
          id: 'tbl-ref',
          titre: `Le tableau des primitives de référence`,
          headers: [`Fonction $f(x)$`, `Une primitive $F(x)$`, `Intervalle $I$`],
          rows: [
            [`$a$ (constante)`, `$ax$`, `$\\mathbb{R}$`],
            [`$x^n$ ($n \\in \\mathbb{N}$)`, `$\\dfrac{x^{n+1}}{n+1}$`, `$\\mathbb{R}$`],
            [`$\\dfrac{1}{x^2}$`, `$-\\dfrac{1}{x}$`, `$]0\\ ;\\ +\\infty[$ ou $]-\\infty\\ ;\\ 0[$`],
            [`$\\dfrac{1}{\\sqrt{x}}$`, `$2\\sqrt{x}$`, `$]0\\ ;\\ +\\infty[$`],
            [`$\\dfrac{1}{x}$`, `$\\ln(x)$`, `$]0\\ ;\\ +\\infty[$`],
            [`$\\cos x$`, `$\\sin x$`, `$\\mathbb{R}$`],
            [`$\\sin x$`, `$-\\cos x$`, `$\\mathbb{R}$`],
            [`$e^x$`, `$e^x$`, `$\\mathbb{R}$`],
          ],
        },
        {
          type: 'tip',
          id: 'tip11',
          titre: `Conseil du Grand Frère`,
          contenu: `Pour une puissance, le réflexe est *« j'augmente l'exposant de 1, puis je divise par le nouvel exposant »*. Teste-le sur $x^3$ : exposant $4$, on divise par $4$, donc $\\dfrac{x^4}{4}$. Limpide.`,
        },
        {
          type: 'warning',
          id: 'warn12',
          titre: `Piège à éviter`,
          contenu: `Ne confonds pas dérivation et primitivation pour la trigo : la dérivée de $\\sin x$ est $\\cos x$, mais une **primitive** de $\\sin x$ est $-\\cos x$ (avec le signe moins !). Fais-toi un petit cercle trigonométrique au brouillon dès le début de l'épreuve.`,
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
          contenu: `Repère le verbe de la consigne. « **Justifier / démontrer que $F$ est une primitive** » → tu n'as rien à chercher, tu dérives la $F$ qu'on te donne. « **Déterminer / trouver les primitives** » → tu utilises le tableau de référence et tu ajoutes $+\\,C$. « **…la primitive qui vérifie $F(x_0) = y_0$** » → forme générale, puis tu calcules $C$.`,
        },
        {
          type: 'table',
          id: 'tbl14',
          titre: `L'Arbre de décision`,
          headers: [`Si tu vois…`, `Ce que tu fais`],
          rows: [
            [`« Justifier que $F$ est une primitive de $f$ »`, `Dériver $F$ et montrer que $F'(x) = f(x)$ pour tout $x \\in I$.`],
            [`« Déterminer toutes les primitives de $f$ »`, `Lire la forme dans le tableau de référence, ajouter $+\\,C$.`],
            [`« …la primitive telle que $F(x_0) = y_0$ »`, `Écrire $F(x) + C$, poser $F(x_0) + C = y_0$, isoler $C$.`],
          ],
        },
        {
          type: 'text',
          id: 'b15',
          titre: `La Procédure`,
          contenu: `**Étape 1.** Analyser la structure de $f$ et l'associer ligne par ligne au tableau de référence.

**Étape 2.** Écrire la forme générale de la primitive en ajoutant la constante $+\\,C$ (avec $C \\in \\mathbb{R}$).

**Étape 3.** S'il y a une condition initiale, poser l'équation $F(x_0) + C = y_0$, résoudre, puis réécrire l'expression finale **sans la lettre $C$**.`,
        },
        {
          type: 'tip',
          id: 'tip16',
          titre: `La Vérification`,
          contenu: `- **Test infaillible** : dérive ta primitive au brouillon. Si tu retombes sur $f$, c'est bon.
- **Contrôle de la condition** : remplace $x$ par $x_0$ dans ta réponse finale ; tu dois retrouver $y_0$.`,
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
            [`🟢 BASE`, `Justifier qu'une fonction est une primitive`, `« Montrer / justifier que $F$ est une primitive »`, `Type 1`],
            [`🟡 MOYEN`, `Primitive avec condition initiale`, `« la primitive telle que $F(x_0) = y_0$ »`, `Type 2`],
            [`🔴 BAC`, `Vérifier une primitive puis l'exploiter`, `Question 1 démontre, question 2 réutilise $F$`, `Salle d'Examen`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Justifier et déterminer.** Soit $f$ définie sur $]0\\ ;\\ +\\infty[$ par $f(x) = 4x^3 - \\dfrac{1}{x} + \\sin x$. (1) Justifier que $F(x) = x^4 - \\ln x - \\cos x + 7$ est une primitive de $f$ sur $]0\\ ;\\ +\\infty[$. (2) Déterminer la primitive unique $G$ de $g(x) = e^x + 3x^2$ sur $\\mathbb{R}$ telle que $G(0) = 5$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Q1 : $F$ est fournie → on dérive terme à terme. Q2 : on cherche la forme générale puis on fixe $C$ avec la condition.` },
            { name: `Étape 1`, contenu: `Dérivons $F$ : la dérivée de $x^4$ est $4x^3$, celle de $-\\ln x$ est $-\\dfrac{1}{x}$, celle de $-\\cos x$ est $+\\sin x$, celle de $7$ est $0$. Donc $F'(x) = 4x^3 - \\dfrac{1}{x} + \\sin x = f(x)$.` },
            { name: `Étape 2`, contenu: `Une primitive de $e^x$ est $e^x$ ; une primitive de $3x^2$ est $x^3$. Donc $G(x) = e^x + x^3 + C$.` },
            { name: `Étape 3`, contenu: `$G(0) = 5 \\iff e^0 + 0 + C = 5 \\iff 1 + C = 5 \\iff C = 4$.` },
          ],
          reponse: `(1) $F'(x) = f(x)$ sur $]0\\ ;\\ +\\infty[$, donc $F$ est bien une primitive de $f$. (2) $G(x) = e^x + x^3 + 4$.`,
          conseil: `Écris toujours l'étape $e^0 = 1$. Sous le stress, beaucoup posent $e^0 = 0$ et ratent la constante.`,
          piege: `Pour Q1, c'est bien la grande $F$ qu'on dérive (jamais $f$).`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `**(1)** $F$ est dérivable sur $]0\\ ;\\ +\\infty[$. Pour tout $x \\in\\ ]0\\ ;\\ +\\infty[$ :
$$F'(x) = 4x^3 - \\dfrac{1}{x} - (-\\sin x) + 0 = 4x^3 - \\dfrac{1}{x} + \\sin x.$$
Comme $F'(x) = f(x)$ pour tout $x \\in\\ ]0\\ ;\\ +\\infty[$, $F$ est une primitive de $f$ sur cet intervalle.

**(2)** $g$ est continue sur $\\mathbb{R}$. Ses primitives sont les $G(x) = e^x + x^3 + C$, $C \\in \\mathbb{R}$.
$$G(0) = 5 \\iff 1 + C = 5 \\iff C = 4.$$
La primitive cherchée est $G(x) = e^x + x^3 + 4$.

*[Barème : Q1 : 2 pts · Q2 forme générale : 1,5 pt · Q2 calcul de $C$ : 1,5 pt — Total : 5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Primitive avec condition.** Soit $h$ définie sur $]0\\ ;\\ +\\infty[$ par $h(x) = 3x^2 + \\dfrac{2}{x} - \\dfrac{1}{x^2}$. Déterminer la primitive $H$ de $h$ telle que $H(1) = 4$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Somme de fonctions de référence + condition initiale → forme générale puis calcul de $C$.` },
            { name: `Étape 1`, contenu: `Primitive terme à terme : $3x^2 \\to x^3$ ; $\\dfrac{2}{x} \\to 2\\ln x$ ; $-\\dfrac{1}{x^2} \\to +\\dfrac{1}{x}$. Donc $H(x) = x^3 + 2\\ln x + \\dfrac{1}{x} + C$.` },
            { name: `Étape 2`, contenu: `$H(1) = 4 \\iff 1 + 2\\ln 1 + 1 + C = 4 \\iff 2 + C = 4 \\iff C = 2$ (car $\\ln 1 = 0$).` },
          ],
          reponse: `$H(x) = x^3 + 2\\ln x + \\dfrac{1}{x} + 2$.`,
          conseil: `La primitive de $\\dfrac{1}{x^2} = x^{-2}$ se trouve avec la règle des puissances : exposant $-2+1 = -1$, on divise par $-1$, d'où $-x^{-1} = -\\dfrac{1}{x}$. Le signe moins de l'énoncé le repasse en $+\\dfrac{1}{x}$.`,
          piege: `$\\ln 1 = 0$, pas $1$. Cette confusion fausse la constante.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$h$ est continue sur $]0\\ ;\\ +\\infty[$. Ses primitives sont
$$H(x) = x^3 + 2\\ln x + \\dfrac{1}{x} + C, \\quad C \\in \\mathbb{R}.$$
$$H(1) = 4 \\iff 1 + 0 + 1 + C = 4 \\iff C = 2.$$
La primitive cherchée est $H(x) = x^3 + 2\\ln x + \\dfrac{1}{x} + 2$.

*[Barème : forme générale : 2 pts · usage de $\\ln 1 = 0$ : 0,5 pt · calcul de $C$ : 1 pt · conclusion : 0,5 pt — Total : 4 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Applique la procédure, sans trembler. Réponses finales seulement.

- **Exercice 1.** Déterminer toutes les primitives sur $\\mathbb{R}$ de $f(x) = 6x^5 - 3\\cos x$. *(Réponse : $F(x) = x^6 - 3\\sin x + C$, $C \\in \\mathbb{R}$.)*
- **Exercice 2.** Déterminer la primitive $H$ de $h(x) = 2x + \\dfrac{1}{x}$ sur $]0\\ ;\\ +\\infty[$ telle que $H(1) = 3$. *(Réponse : $H(x) = x^2 + \\ln x + 2$.)*
- **Exercice 3.** Déterminer la primitive $K$ de $k(x) = e^x - \\dfrac{1}{x^2}$ sur $]0\\ ;\\ +\\infty[$ telle que $K(1) = e$. *(Réponse : $K(x) = e^x + \\dfrac{1}{x} - 1$.)*`,
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
            `Une primitive, c'est une dérivée lue à l'envers : $F' = f$ sur un intervalle.`,
            `📘 Vocabulaire officiel : primitive sur $I$, famille de primitives, constante d'intégration, condition initiale.`,
            `Deux primitives diffèrent d'une constante $C$ ; une condition initiale en fixe une seule.`,
            `Le tableau de référence (puissances, $\\dfrac{1}{x}$, trigo, $e^x$) doit être un réflexe.`,
            `Vérification reine : dérive ton résultat, tu dois retomber sur $f$.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m1',
          titre: `Fil rouge`,
          contenu: `Jusqu'ici, tes fonctions étaient « simples » : un $x^n$, un $\\cos$, un $e^x$ isolés. Mais que fais-tu devant $6x^2\\cos(2x^3)$ ou $\\dfrac{e^x}{e^x+4}$ ? Impossible de lire ça directement dans le tableau ! C'est exactement le terrain du **Module 2** : repérer les **formes composées** et leurs primitives. Garde ton Outil 2 du Socle bien chaud.`,
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
            `Je sais démontrer qu'une fonction $F$ est une primitive de $f$ en la dérivant.`,
            `J'utilise le vocabulaire officiel (primitive sur $I$, constante d'intégration, condition initiale) dans mes rédactions.`,
            `Je connais le tableau des primitives de référence sans inverser les signes de la trigo.`,
            `Je sais écrire la forme générale $F(x) + C$ d'une primitive.`,
            `Je sais poser et résoudre l'équation $F(x_0) + C = y_0$ pour trouver la primitive unique.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m1',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Tu domines les fondations. File au Module 2.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et le ⑤ La Descente, puis refais l'Exercice-Type 2.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel : l'histoire du gbaka et du $+\\,C$.`,
          ],
        },
      ],
    },
  ],
};
