import { Chapitre } from '../../types/course';

export const chapitreM2: Chapitre = {
  id: 't11-m2',
  titre: `Module 2 — L'équation y' + ay = b : l'équilibre`,
  duree: 24,
  niveau: 'BASE',
  xpGain: 25,
  objectifs: [
    `Reconnaître une équation du premier ordre avec second membre constant`,
    `Calculer la solution particulière constante y_p = b/a (le régime permanent)`,
    `Écrire la solution générale comme une somme : transitoire + permanent`,
    `Déterminer la constante C avec la condition initiale`,
    `Interpréter le régime permanent comme la limite quand x → +∞`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, au Module 1 la bassine se vidait jusqu'au fond. Mais maintenant on me met un $b$ tout seul de l'autre côté : $y' + 2y = 6$. Ce $6$, il vient d'où, et qu'est-ce qu'il change ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Bonne intuition, Champion(ne) ! Ce $b$, c'est une force extérieure qui empêche ton système de s'éteindre complètement. Imagine qu'un robinet réalimente la bassine pendant qu'elle fuit. Le niveau ne tombe plus à zéro : il se stabilise à un palier d'équilibre. On va apprendre à calculer ce palier, et tu verras que la solution se range en deux morceaux très propres.`,
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
          contenu: `Reprends ta bassine percée de Yopougon, mais cette fois ouvre un robinet au-dessus qui verse un débit constant. Deux phénomènes s'opposent : l'eau qui fuit par le trou (d'autant plus vite que le niveau est haut) et l'eau qui entre par le robinet (toujours pareil).

Au début, si la bassine est presque vide, le robinet remplit plus vite que le trou ne vide : le niveau monte. Mais plus le niveau monte, plus la fuite s'accélère. Il arrive un moment où la fuite compense exactement l'apport du robinet : le niveau se fige. C'est le **palier d'équilibre**. Et que tu démarres bassine vide ou bassine pleine, tu finis toujours par rejoindre ce même palier. La solution a donc deux visages : une partie qui s'efface avec le temps, et un palier qui reste.`,
        },
        {
          type: 'figure',
          id: 'fig-m2-1',
          src: '/images/t11/fig_M2_1.png',
          legende: `Quel que soit le point de départ, la solution rejoint le même palier d'équilibre $y_p = \\dfrac{b}{a}$ : c'est le régime permanent.`,
          alt: `Deux courbes, l'une descendante et l'autre montante, qui rejoignent toutes deux la droite horizontale du palier d'équilibre.`,
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
          contenu: `On traduit la bassine réalimentée, brique par brique.

- La fuite proportionnelle au niveau → le terme $ay$
- L'apport constant du robinet → le second membre $b$
- Le palier où tout s'équilibre → la solution particulière constante $y_p$
- La partie qui s'efface avec le temps → le régime transitoire $Ce^{-ax}$
- Le niveau total à tout instant → la somme $y = Ce^{-ax} + y_p$`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène de la bassine`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`La fuite par le trou`, `$ay$`, `Le terme de décroissance`],
            [`L'apport du robinet`, `$b$`, `Le second membre constant`],
            [`Le palier d'équilibre`, `$y_p = \\dfrac{b}{a}$`, `La solution particulière constante`],
            [`Ce qui s'efface avec le temps`, `$Ce^{-ax}$`, `Le régime transitoire`],
            [`Le niveau total`, `$y = Ce^{-ax} + \\dfrac{b}{a}$`, `La solution générale`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `Chaque morceau a son symbole : passons à la définition rigoureuse.`,
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
          contenu: `Champion(ne), le robinet et le palier, c'est l'image. Voici la langue du BAC.

**Définition formelle.** Soit $a \\neq 0$ et $b$ deux réels. Les solutions de l'équation $(E) : y' + ay = b$ sont les fonctions $y(x) = Ce^{-ax} + \\dfrac{b}{a}$, où $C \\in \\mathbb{R}$. La fonction constante $y_p = \\dfrac{b}{a}$ est **une solution particulière** de $(E)$ ; la fonction $Ce^{-ax}$ est la solution générale de l'**équation homogène associée** $(E_0) : y' + ay = 0$.

**En langage courant.** La solution complète = la solution générale de l'équation sans second membre PLUS une solution particulière constante.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Équation homogène associée** $(E_0)$ — la même équation, avec $0$ à la place de $b$.
- **Solution particulière** $y_p$ — une solution qui marche, ici la constante $\\dfrac{b}{a}$.
- **Régime permanent** — le comportement à long terme, $\\displaystyle\\lim_{x \\to +\\infty} y(x) = \\dfrac{b}{a}$ (si $a > 0$).
- **Régime transitoire** — la partie $Ce^{-ax}$ qui s'efface quand $x$ grandit.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `La structure que le correcteur veut voir : « solution générale de $(E)$ = solution générale de $(E_0)$ + une solution particulière de $(E)$. »`,
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
          titre: `Règle d'Or — Solution avec second membre constant`,
          contenu: `$$\\boxed{\\,y' + ay = b \\quad (a \\neq 0) \\quad \\Longleftrightarrow \\quad y(x) = Ce^{-ax} + \\dfrac{b}{a}, \\ C \\in \\mathbb{R}\\,}$$

Le palier $y_p = \\dfrac{b}{a}$ se trouve en cherchant une solution **constante** : si $y$ est constante, alors $y' = 0$, donc l'équation devient $0 + ay_p = b$, c'est-à-dire $y_p = \\dfrac{b}{a}$.`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Procède toujours dans l'ordre : d'abord l'homogène ($Ce^{-ax}$), ensuite le palier ($\\dfrac{b}{a}$), enfin la condition initiale pour $C$. Trois temps, jamais mélangés.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Le palier, c'est $\\dfrac{b}{a}$, surtout pas $b$ tout seul. Pour $y' + 2y = 6$, le palier est $\\dfrac{6}{2} = 3$, pas $6$. Divise toujours par $a$.`,
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
          contenu: `Tu vois une équation $y' + ay = b$ avec un nombre fixe (non nul) derrière le signe égal ? C'est une équation à second membre constant. Tu sais que la réponse sera un palier plus une exponentielle qui s'efface.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Si l'équation est...`, `Alors ton action immédiate`],
          rows: [
            [`$y' + ay = b$ (avec $b \\neq 0$)`, `Calculer le palier $y_p = \\dfrac{b}{a}$.`],
            [`$y' + ay = 0$`, `Pas de palier : $y_p = 0$ (retour au Module 1).`],
            [`$\\alpha y' + \\beta y = b$`, `Diviser d'abord toute l'équation par $\\alpha$.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure en 5 étapes`,
          contenu: `**Étape 1.** Isole $y'$ (divise si un coefficient traîne), puis identifie $a$ et $b$.

**Étape 2.** Calcule le palier $y_p = \\dfrac{b}{a}$.

**Étape 3.** Vérifie le palier en l'injectant : $y_p' + a\\,y_p$ doit donner $b$.

**Étape 4.** Écris la solution générale $y(x) = Ce^{-ax} + \\dfrac{b}{a}$.

**Étape 5.** Utilise la condition initiale pour déterminer $C$.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `Dérive ta solution finale, remplace $y$ et $y'$ dans l'énoncé. Tu dois retomber exactement sur $b$ (et non sur $0$). Sinon, cherche une erreur de signe ou de division.`,
        },
        {
          type: 'figure',
          id: 'fig-m2-2',
          src: '/images/t11/fig_M2_2.png',
          legende: `La solution bleue est la somme du palier (vert) et du transitoire (orange) qui disparaît : à la fin, il ne reste que le palier.`,
          alt: `Le transitoire en orange montant vers zéro, le palier en vert constant, et leur somme en bleu montant vers le palier.`,
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
            [`🟢 BASE`, `Second membre constant + condition initiale`, `« Résous $y' + ay = b$, $y(0) = \\dots$ »`, `Type 1`],
            [`🟡 MOYEN`, `Calcul du palier et de $C$`, `On demande la valeur de stabilisation`, `Type 1`],
            [`🔴 BAC`, `Interprétation du régime permanent (limite)`, `« Détermine $\\displaystyle\\lim_{x\\to+\\infty} y(x)$ »`, `Type 2`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Palier et constante** *(BASE / MOYEN)*. Soit $(E) : y' + 3y = 6$ sur $\\mathbb{R}$. **1.** Détermine la solution générale de $(E)$. **2.** Détermine la solution $f$ telle que $f(0) = 5$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Second membre constant : on calcule le palier $y_p = \\dfrac{b}{a}$, on ajoute l'homogène, puis on fixe $C$.` },
            { name: `Étape 1`, contenu: `Ici $a = 3$, $b = 6$, donc $y_p = \\dfrac{6}{3} = 2$. Solution générale : $y(x) = Ce^{-3x} + 2$.` },
            { name: `Étape 2`, contenu: `$f(0) = Ce^{0} + 2 = C + 2 = 5$, donc $C = 3$.` },
          ],
          reponse: `$y(x) = Ce^{-3x} + 2$, $C \\in \\mathbb{R}$, et la solution cherchée est $f(x) = 3e^{-3x} + 2$.`,
          conseil: `Calcule le palier $y_p$ AVANT de toucher à la condition initiale : sinon tu risques d'attribuer à $C$ une valeur qui appartient en fait au palier.`,
          piege: `En $x = 0$, $Ce^{-3\\times 0} = C$, donc $f(0) = C + 2$. N'oublie pas d'ajouter le palier $2$ : $C$ n'est pas égal à $5$.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$(E) : y' + 3y = 6$ a pour second membre constant $b = 6$ et $a = 3$.
Une solution particulière constante est $y_p = \\dfrac{b}{a} = \\dfrac{6}{3} = 2$.
La solution générale de l'équation homogène $y' + 3y = 0$ est $Ce^{-3x}$. Donc :
$$y(x) = Ce^{-3x} + 2, \\quad C \\in \\mathbb{R}.$$
Condition $f(0) = 5$ : $\\ Ce^{0} + 2 = C + 2 = 5$, d'où $C = 3$.
$$f(x) = 3e^{-3x} + 2.$$

*[Barème type BAC : palier $y_p$ = 1 pt — solution générale = 1 pt — constante $C$ = 1 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 2 — Régime permanent et limite** *(BAC)*. Soit $(E) : y' + 0{,}5\\,y = 4$. Détermine la solution $g$ telle que $g(0) = 2$, puis calcule $\\displaystyle\\lim_{x \\to +\\infty} g(x)$ et interprète.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Second membre constant : palier, puis $C$, puis limite. Comme $a = 0{,}5 > 0$, le transitoire $e^{-0{,}5x}$ tend vers $0$ : la limite est le palier.` },
            { name: `Étape 1`, contenu: `$y_p = \\dfrac{4}{0{,}5} = 8$. Solution générale : $y(x) = Ce^{-0{,}5x} + 8$.` },
            { name: `Étape 2`, contenu: `$g(0) = C + 8 = 2$, donc $C = -6$. Ainsi $g(x) = 8 - 6e^{-0{,}5x}$. Quand $x \\to +\\infty$, $e^{-0{,}5x} \\to 0$, donc $g(x) \\to 8$.` },
          ],
          reponse: `$g(x) = 8 - 6e^{-0{,}5x}$ et $\\displaystyle\\lim_{x \\to +\\infty} g(x) = 8$ : le système se stabilise sur le régime permanent de valeur $8$.`,
          conseil: `Quand on te demande une limite en $+\\infty$ dans ce chapitre, c'est presque toujours le palier $y_p$ : le transitoire s'efface.`,
          piege: `La limite vaut $8$ (le palier), pas $0$. C'est le terme exponentiel qui tend vers $0$, pas la fonction entière.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Pour $(E) : y' + 0{,}5\\,y = 4$, le palier est $y_p = \\dfrac{4}{0{,}5} = 8$.
La solution générale est $y(x) = Ce^{-0{,}5x} + 8$, $C \\in \\mathbb{R}$.
Condition $g(0) = 2$ : $\\ C + 8 = 2$, d'où $C = -6$. Donc :
$$g(x) = 8 - 6e^{-0{,}5x}.$$
Comme $0{,}5 > 0$, on a $\\displaystyle\\lim_{x \\to +\\infty} e^{-0{,}5x} = 0$, donc $\\displaystyle\\lim_{x \\to +\\infty} g(x) = 8$.
**Interprétation.** Le système se stabilise à long terme sur le régime permanent de valeur $8$.

*[Barème type BAC : palier = 1 pt — constante $C$ = 1 pt — limite + interprétation = 1 pt — Total : 3 pts]*`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-a',
          pf: `Donc le $b$ ne donne jamais le palier directement, il faut diviser par $a$ ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-b',
          gf: `Voilà, Champion(ne) ! Le robinet verse $b$, mais le palier dépend aussi de la taille du trou $a$. C'est l'équilibre entre les deux : $y_p = \\dfrac{b}{a}$. Retiens-le, et tu ne perdras plus jamais ce point au BAC.`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Palier d'abord, condition initiale ensuite. Réponses finales seulement.

- **Exercice 1.** Résous $y' + 4y = 8$. *(Réponse : $y_p = 2$, donc $y(x) = Ce^{-4x} + 2$.)*
- **Exercice 2.** Donne la solution de $y' + y = 10$ telle que $y(0) = 4$. *(Réponse : $y_p = 10$, $C = -6$, donc $y(x) = 10 - 6e^{-x}$.)*
- **Exercice 3.** Calcule $\\displaystyle\\lim_{x \\to +\\infty} y(x)$ pour $y(x) = 5 + 3e^{-2x}$. *(Réponse : $5$.)*`,
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
            `Avec un second membre constant, la solution est une **somme** : $y = Ce^{-ax} + \\dfrac{b}{a}$.`,
            `📘 Vocabulaire officiel : équation homogène associée, solution particulière, régime permanent, régime transitoire.`,
            `Le geste clé : calculer le **palier** $y_p = \\dfrac{b}{a}$ (jamais $b$ seul), puis seulement après fixer $C$.`,
            `La limite en $+\\infty$ est le palier $y_p$ (quand $a > 0$).`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m2',
          titre: `Fil rouge`,
          contenu: `Ici le robinet versait un débit **constant**. Mais si le débit varie dans le temps — un robinet qu'on ouvre de plus en plus — le palier n'est plus une constante. Le second membre devient une fonction de $x$, et il faut une nouvelle stratégie : c'est le **principe de superposition** du Module 3.`,
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
            `Je reconnais une équation à second membre constant $y' + ay = b$.`,
            `J'emploie le vocabulaire officiel : équation homogène associée, solution particulière, régime permanent.`,
            `Je calcule le palier $y_p = \\dfrac{b}{a}$ (et jamais $b$ seul).`,
            `Je sais écrire la solution comme somme et déterminer $C$ avec la condition initiale.`,
            `Je sais interpréter la limite en $+\\infty$ comme le régime permanent.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m2',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Direction le Module 3, le robinet se met à varier.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et la procédure en 5 étapes.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel, l'image du robinet et du palier.`,
          ],
        },
      ],
    },
  ],
};
