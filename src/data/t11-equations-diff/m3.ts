import { Chapitre } from '../../types/course';

export const chapitreM3: Chapitre = {
  id: 't11-m3',
  titre: `Module 3 — Second membre variable et superposition`,
  duree: 26,
  niveau: 'MOYEN',
  xpGain: 28,
  objectifs: [
    `Reconnaître une équation à second membre variable y' + ay = h(x)`,
    `Vérifier qu'une fonction donnée est une solution particulière`,
    `Appliquer le principe de superposition : f solution de (E) ⟺ f - g solution de (E')`,
    `Déduire l'ensemble des solutions à partir d'une solution particulière`,
    `Déterminer la solution imposée par une condition initiale`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, là on me donne $y' - 2y = 8x^2 - 8x$. Le truc de droite n'est plus un nombre fixe, c'est une fonction de $x$ ! Mon palier $\\dfrac{b}{a}$ ne marche plus. Je fais comment ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Tu as l'œil, Champion(ne) ! Quand le second membre bouge, on ne cherche plus un palier constant : on cherche une solution particulière qui « ressemble » au second membre — souvent un polynôme. Et surtout, on a une astuce en or que le BAC adore : le principe de superposition. Une fois que tu tiens UNE solution particulière, toutes les autres se déduisent d'un coup. Je te montre.`,
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
          contenu: `Reprends une dernière fois ta bassine de Yopougon. Au Module 2, le robinet versait un débit constant : le niveau se stabilisait sur un palier fixe. Maintenant, imagine qu'une grande sœur ouvre le robinet de plus en plus au fil de la journée : le débit n'est plus constant, il augmente avec le temps.

Du coup, le niveau ne se fige plus sur un palier : il suit une trajectoire de fond qui monte régulièrement, imposée par le robinet, pendant que les irrégularités du départ s'effacent. Cette « trajectoire de fond » dictée par le second membre, c'est la **solution particulière**. Et l'idée géniale, c'est que toutes les évolutions possibles de la bassine se ramènent à cette trajectoire de fond, plus une décroissance naturelle qui disparaît. Trouver une seule trajectoire de fond suffit pour les avoir toutes.`,
        },
        {
          type: 'figure',
          id: 'fig-m3-1',
          src: '/images/t11/fig_M3_1.png',
          legende: `La solution (bleu) suit la trajectoire de fond (vert) imposée par le second membre, plus un transitoire (orange) qui disparaît.`,
          alt: `La solution particulière en droite verte, le transitoire orange qui s'efface, et la solution générale bleue qui colle peu à peu à la droite verte.`,
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
          contenu: `On traduit la bassine au robinet variable, brique par brique.

- Le débit qui varie avec le temps → le second membre $h(x)$ (une fonction de $x$)
- La trajectoire de fond imposée → une solution particulière $g(x)$
- La décroissance naturelle qui s'efface → la solution homogène $Ce^{-ax}$
- L'évolution complète → $y = g(x) + Ce^{-ax}$
- « toute solution s'écrit ainsi » → le principe de superposition`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène de la bassine`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Le débit variable du robinet`, `$h(x)$`, `Le second membre, fonction de $x$`],
            [`La trajectoire de fond`, `$g(x)$`, `Une solution particulière de $(E)$`],
            [`La décroissance qui s'efface`, `$Ce^{-ax}$`, `La solution de l'homogène $(E')$`],
            [`L'évolution complète`, `$y = g(x) + Ce^{-ax}$`, `La solution générale de $(E)$`],
            [`« toutes les solutions ainsi »`, `$f - g$ solution de $(E')$`, `Le principe de superposition`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `Chaque morceau a son symbole : voici la définition rigoureuse.`,
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
          contenu: `Champion(ne), la trajectoire de fond, c'est l'image. Voici la formulation que le correcteur attend mot pour mot.

**Définition formelle.** Soit $(E) : y' + ay = h(x)$ et son **équation homogène associée** $(E') : y' + ay = 0$. Si $g$ est une **solution particulière** de $(E)$, alors une fonction $f$ est solution de $(E)$ **si et seulement si** $f - g$ est solution de $(E')$. Par conséquent, la solution générale de $(E)$ s'écrit $f(x) = g(x) + Ce^{-ax}$, avec $C \\in \\mathbb{R}$.

**En langage courant.** Une solution quelconque = une solution particulière + n'importe quelle solution de l'équation sans second membre.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Second membre** — la fonction $h(x)$ à droite du signe égal.
- **Solution particulière** — une fonction $g$ qui vérifie $(E)$ (souvent un polynôme).
- **Principe de superposition** — « $f$ solution de $(E)$ $\\iff f - g$ solution de $(E')$ ».
- **Coefficients indéterminés** — la méthode pour chercher $g$ sous la forme d'un polynôme.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `La phrase qui rapporte le point : « $f$ est solution de $(E)$ si et seulement si $f - g$ est solution de l'équation homogène associée $(E')$. »`,
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
          titre: `Règle d'Or — Le principe de superposition`,
          contenu: `$$\\boxed{\\,\\text{Solution générale de } (E) = \\underbrace{g(x)}_{\\text{une solution particulière}} + \\underbrace{Ce^{-ax}}_{\\text{solutions de } (E')}\\,}$$

**Pourquoi ça marche.** Si $f$ et $g$ sont toutes deux solutions de $(E)$, alors :
$$(f - g)' + a(f - g) = \\big(f' + af\\big) - \\big(g' + ag\\big) = h(x) - h(x) = 0,$$
donc $f - g$ est solution de $(E')$. Réciproquement, si $f - g$ est solution de $(E')$, alors $f = g + (f-g)$ est solution de $(E)$.`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Pour trouver $g$ quand le second membre est un polynôme de degré $n$, cherche $g$ sous forme d'un polynôme **de même degré**, puis identifie les coefficients. Si le second membre est $8x^2 - 8x$, essaie $g(x) = \\alpha x^2 + \\beta x + \\gamma$.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Une solution particulière n'est pas unique : peu importe celle que tu trouves, la famille complète $g + Ce^{-ax}$ est la même. Ne panique pas si la tienne diffère de celle d'un camarade.`,
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
          contenu: `Le second membre est une fonction de $x$ (polynôme, ligne affine…) ? Tu es dans un cas « superposition ». Soit l'énoncé te **donne** une solution particulière $g$ (tu la vérifies), soit tu dois la **chercher** sous forme de polynôme.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Ce que dit l'énoncé`, `Ton action`],
          rows: [
            [`« Vérifie que $g$ est solution de $(E)$ »`, `Dériver $g$, l'injecter, retrouver le second membre.`],
            [`« Démontre que $f$ sol. de $(E)$ $\\iff$ $f - g$ sol. de $(E')$ »`, `Calculer $(f-g)' + a(f-g)$ et conclure.`],
            [`« Détermine une solution particulière »`, `Poser un polynôme de même degré et identifier.`],
            [`« Déduis-en toutes les solutions »`, `Écrire $f(x) = g(x) + Ce^{-ax}$.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure en 4 étapes`,
          contenu: `**Étape 1.** Résous l'équation homogène associée $(E') : y' + ay = 0$ → $Ce^{-ax}$.

**Étape 2.** Obtiens une solution particulière $g$ : soit elle est donnée (tu la vérifies), soit tu la cherches en polynôme.

**Étape 3.** Applique la superposition : la solution générale est $f(x) = g(x) + Ce^{-ax}$.

**Étape 4.** Si une condition initiale est donnée, remplace pour trouver $C$.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `Prends ta solution finale complète, dérive-la, injecte $y$ et $y'$ dans $(E)$ : tu dois retrouver **exactement** le second membre $h(x)$, terme par terme.`,
        },
        {
          type: 'figure',
          id: 'fig-m3-2',
          src: '/images/t11/fig_M3_2.png',
          legende: `On additionne la solution de l'homogène et une solution particulière pour obtenir toutes les solutions.`,
          alt: `Trois cadres : la solution homogène décroissante, la solution particulière en droite, et leur somme la solution générale.`,
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
            [`🟡 MOYEN`, `Solution particulière donnée`, `« Vérifie que $g$ est solution, déduis... »`, `Type 1`],
            [`🔴 BAC`, `Superposition à démontrer + polynôme`, `« Démontre que $f$ sol. $\\iff$ $f - g$ sol. de $(E')$ »`, `Type 2`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 1 — Solution particulière donnée** *(MOYEN)*. Soit $(E) : y' + 2y = 2x - 1$. **1.** Vérifie que $g(x) = x - 1$ est une solution particulière de $(E)$. **2.** Déduis-en l'ensemble des solutions de $(E)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `La solution particulière est fournie : on la vérifie par substitution, puis on ajoute la solution de l'homogène.` },
            { name: `Étape 1`, contenu: `$g(x) = x - 1$, donc $g'(x) = 1$. On calcule $g' + 2g = 1 + 2(x - 1) = 1 + 2x - 2 = 2x - 1$. C'est bien le second membre : $g$ est solution.` },
            { name: `Étape 2`, contenu: `L'homogène $y' + 2y = 0$ a pour solutions $Ce^{-2x}$. Par superposition : $y(x) = x - 1 + Ce^{-2x}$.` },
          ],
          reponse: `$y(x) = x - 1 + Ce^{-2x}$, $C \\in \\mathbb{R}$.`,
          conseil: `Pour vérifier $g$, écris d'abord $g'$ sur ton brouillon, puis remplace calmement : le correcteur veut voir le calcul $g' + 2g$, pas juste « c'est vérifié ».`,
          piege: `Ne t'arrête pas à $g$ : la question demande TOUTES les solutions. Sans le terme $Ce^{-2x}$, ta réponse est incomplète.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$g(x) = x - 1$ donne $g'(x) = 1$. Alors :
$$g'(x) + 2g(x) = 1 + 2(x - 1) = 2x - 1,$$
qui est le second membre de $(E)$ : donc $g$ est une solution particulière de $(E)$.
L'équation homogène associée $y' + 2y = 0$ a pour solutions $Ce^{-2x}$, $C \\in \\mathbb{R}$.
Par le principe de superposition, les solutions de $(E)$ sont :
$$y(x) = x - 1 + Ce^{-2x}, \\quad C \\in \\mathbb{R}.$$

*[Barème type BAC : vérification de $g$ = 1,5 pt — solutions de l'homogène = 0,5 pt — conclusion = 1 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 2 — Démontrer la superposition** *(BAC)*. On considère $(E) : y' - 2y = 8x^2 - 8x$ et $(E') : y' - 2y = 0$, et la fonction $g(x) = -4x^2$. **1.** Résous $(E')$. **2.** Vérifie que $g$ est une solution particulière de $(E)$. **3.** Démontre qu'une fonction $f$ est solution de $(E)$ si et seulement si $f - g$ est solution de $(E')$. **4.** Déduis-en les solutions de $(E)$, puis celle vérifiant $f(0) = 1$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Le cœur du sujet : la démonstration du « si et seulement si ». On calcule $(f - g)' - 2(f - g)$ et on utilise que $g$ vérifie $(E)$.` },
            { name: `Étapes 1–2`, contenu: `$(E') : y' - 2y = 0$ a pour solutions $Ce^{2x}$. $g(x) = -4x^2$, $g'(x) = -8x$, donc $g' - 2g = -8x - 2(-4x^2) = 8x^2 - 8x$ : $g$ est solution de $(E)$.` },
            { name: `Étapes 3–4`, contenu: `$(f - g)' - 2(f - g) = (f' - 2f) - (g' - 2g) = (f' - 2f) - (8x^2 - 8x)$, qui vaut $0$ ⟺ $f' - 2f = 8x^2 - 8x$ ⟺ $f$ solution de $(E)$. Donc $f - g = Ce^{2x}$, soit $f(x) = -4x^2 + Ce^{2x}$.` },
          ],
          reponse: `$f(x) = -4x^2 + Ce^{2x}$, $C \\in \\mathbb{R}$. Avec $f(0) = 1$ : $C = 1$, donc $f(x) = -4x^2 + e^{2x}$.`,
          conseil: `La clé de la démonstration, c'est la **linéarité** : la dérivée d'une différence est la différence des dérivées. Écris $(f-g)' - 2(f-g) = (f'-2f) - (g'-2g)$ : tout part de là.`,
          piege: `L'homogène de $y' - 2y = 0$ est $Ce^{2x}$ (exposant $+2x$, car $a = -2$), pas $Ce^{-2x}$. Surveille le signe.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `**1.** $(E') : y' - 2y = 0$ est de la forme $y' + ay = 0$ avec $a = -2$. Ses solutions sont $y(x) = Ce^{2x}$, $C \\in \\mathbb{R}$.
**2.** $g(x) = -4x^2 \\Rightarrow g'(x) = -8x$. Alors $g'(x) - 2g(x) = -8x + 8x^2 = 8x^2 - 8x$ : $g$ est une solution particulière de $(E)$.
**3.** Pour toute fonction $f$ dérivable :
$$(f - g)' - 2(f - g) = (f' - 2f) - (g' - 2g) = (f' - 2f) - (8x^2 - 8x).$$
Ainsi $f - g$ est solution de $(E')$ $\\iff (f' - 2f) - (8x^2 - 8x) = 0 \\iff f' - 2f = 8x^2 - 8x \\iff f$ solution de $(E)$.
**4.** Donc $f - g$ est solution de $(E')$, soit $f(x) - (-4x^2) = Ce^{2x}$, d'où :
$$f(x) = -4x^2 + Ce^{2x}, \\quad C \\in \\mathbb{R}.$$
Condition $f(0) = 1$ : $-4(0)^2 + Ce^{0} = C = 1$. La solution est $f(x) = -4x^2 + e^{2x}$.

*[Barème type BAC : $(E')$ = 0,5 pt — vérif. $g$ = 1 pt — démonstration $\\iff$ = 1,5 pt — solutions + $f(0)$ = 1 pt — Total : 4 pts]*`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-a',
          pf: `Mais Grand Frère, pourquoi on s'embête à démontrer le « si et seulement si » ? On pourrait juste écrire la réponse, non ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-b',
          gf: `Parce qu'au BAC, Champion(ne), cette démonstration EST la question — elle vaut souvent la moitié des points de l'exercice. Et une fois que tu l'as comprise, c'est un automatisme : différence des dérivées, le second membre s'annule, terminé. Tu gâtes le coin à chaque fois.`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Vérifie la particulière, ajoute l'homogène. Réponses finales seulement.

- **Exercice 1.** Vérifie que $g(x) = 3$ est solution de $y' + y = 3$, puis donne toutes les solutions. *(Réponse : $g' + g = 0 + 3 = 3$ ✓ ; $y(x) = 3 + Ce^{-x}$.)*
- **Exercice 2.** $(E) : y' - y = -x - 1$ admet $g(x) = x + 2$ comme solution particulière. Donne l'ensemble des solutions. *(Réponse : $y(x) = x + 2 + Ce^{x}$.)*
- **Exercice 3.** Cherche une solution particulière polynôme de $y' + y = 2x$. *(Réponse : $g(x) = 2x - 2$.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m3',
          titre: `À retenir`,
          contenu: [
            `Quand le second membre est une **fonction de $x$**, on cherche une solution particulière $g$ (souvent un polynôme).`,
            `📘 Vocabulaire officiel : second membre, solution particulière, principe de superposition, coefficients indéterminés.`,
            `Le geste clé : solution générale $= g(x) + Ce^{-ax}$, où $g$ est UNE solution particulière.`,
            `La démonstration du « $\\iff$ » repose sur la **linéarité** : $(f-g)' + a(f-g) = (f'+af) - (g'+ag)$.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m3',
          titre: `Fil rouge`,
          contenu: `On a épuisé le premier ordre sous toutes ses formes : homogène, second membre constant, second membre variable. Mais jusqu'ici, on n'utilisait que $y'$. Au Module 4, on monte d'un cran : la dérivée seconde $y''$ entre en scène, et les systèmes se mettent à **vibrer**.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m3',
          titre: `Auto-évaluation — Module 3`,
          contenu: [
            `Je reconnais une équation à second membre variable $y' + ay = h(x)$.`,
            `J'emploie le vocabulaire officiel : solution particulière, principe de superposition.`,
            `Je sais vérifier qu'une fonction donnée est une solution particulière.`,
            `Je sais démontrer que $f$ est solution de $(E)$ si et seulement si $f - g$ est solution de $(E')$.`,
            `Je sais écrire la solution générale et la solution imposée par une condition initiale.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m3',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Direction le Module 4, on passe au second ordre.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et la démonstration de la Règle d'Or.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel, l'image du robinet variable.`,
          ],
        },
      ],
    },
  ],
};
