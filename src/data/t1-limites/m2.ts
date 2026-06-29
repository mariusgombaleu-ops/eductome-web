import { Chapitre } from '../../types/course';

export const chapitreM2: Chapitre = {
  id: 't1-m2',
  titre: `Module 2 — Les Formes Indéterminées`,
  duree: 25,
  niveau: 'MOYEN',
  xpGain: 30,
  objectifs: [
    `Reconnaître, dès le brouillon, qu'un calcul direct produit une forme indéterminée`,
    `Énoncer une forme indéterminée avec le vocabulaire officiel attendu par le correcteur`,
    `Nommer les 4 formes indéterminées et savoir quelle déviation dégainer pour chacune`,
    `Lever une forme $\\dfrac{0}{0}$ par factorisation et simplification du facteur $(x - a)$`,
    `Lever une forme $\\dfrac{\\infty}{\\infty}$ par la règle du terme de plus haut degré`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, le Module 1, c'est acquis — la substitution directe, j'ai compris le principe. Mais hier soir, j'ai essayé de calculer une limite sur mon cahier de brouillon et j'ai obtenu zéro divisé par zéro. J'ai bloqué direct. C'est quoi encore cette affaire ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Tu viens de percuter le premier vrai mur des maths de Terminale D, Champion(ne). La substitution directe — ton outil du Module 1 — fonctionne quand la route est libre. Mais certaines fonctions ont des points où elles refusent d'être définies. Diviser par zéro, c'est interdit partout, même pas seulement au Cacao. Quand ton test de remplacement te donne $\\dfrac{0}{0}$ ou $\\dfrac{+\\infty}{+\\infty}$, ta calculatrice se bloque. Et pourtant — c'est là tout le secret — la limite existe souvent très bien à cet endroit précis. Il suffit de prendre une autre route pour l'atteindre. C'est exactement pour ça qu'on a inventé les techniques de levée des formes indéterminées. Ce module, c'est ton cours de conduite hors route.`,
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
          contenu: `Imagine la scène. Tu quittes Bingerville dans un gbaka, direction Adjamé pour aller regarder un match. Tu suis la grande voie, tout est fluide.

Soudain, au milieu de la route, un gros barrage de police bloque tout. Impossible de passer tout droit, c'est fermé. **C'est ton $\\dfrac{0}{0}$.**

Est-ce que ça veut dire qu'Adjamé a disparu ? Pas du tout. Ça veut juste dire que la voie directe est bloquée pour l'instant.

Qu'est-ce que le chauffeur fait ? Il ne fait pas demi-tour pour te ramener à la maison. Il jette un œil sur le côté, prend une petite déviation par les ruelles du quartier, contourne le barrage, et récupère la route principale juste après.

**La déviation en maths, c'est notre secret pour contourner le mur.**`,
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
          contenu: `Traduisons cette déviation en langage mathématique, brique par brique.

Le barrage sur la route, c'est la valeur $x = a$ qui fait sauter le calcul. La fonction n'aime pas ce point — il y a un trou dans la courbe. Prendre la déviation, c'est transformer l'écriture de ta fonction par un calcul astucieux : tu simplifies le morceau qui coince pour réécrire une formule plus propre qui, elle, ne bloque pas. Une fois la déviation trouvée, tu relances la machine et tu calcules la limite de cette nouvelle expression — c'est elle qui te donne la vraie valeur.

Voici la traduction complète, mot pour mot :`,
        },
        {
          type: 'table',
          id: 'tbl5',
          headers: [`Scène du quartier`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Le barrage de police qui bloque la route`, `$\\\\dfrac{0}{0}$ ou $\\\\dfrac{\\\\infty}{\\\\infty}$`, `La forme indéterminée — le calcul direct est impossible`],
            [`Adjamé, ta destination finale`, `$L$`, `La vraie valeur de la limite, qui existe bel et bien`],
            [`La déviation par les ruelles du quartier`, `Factorisation ou simplification`, `La technique algébrique pour contourner le blocage`],
            [`Le facteur $(x - a)$ commun en haut et en bas`, `Le nœud du barrage`, `Le morceau qui crée le zéro — c'est lui qu'on doit éliminer`],
            [`Récupérer la route principale après la déviation`, `Substitution sur l'expression nettoyée`, `Le calcul final de la limite, une fois le barrage contourné`],
          ],
        },
        {
          type: 'figure',
          id: 'fig6',
          src: '/images/t1/fig_M2_1.png',
          legende: `Le trou $0/0$ (à gauche) comblé après simplification (à droite).`,
          alt: `Le trou $0/0$ (à gauche) comblé après simplification (à droite).`,
        },
      ],
    },
    {
      id: 's4',
      titre: `④ LA RÈGLE`,
      blocs: [
        {
          type: 'rule',
          id: 'rule7',
          titre: `Règle`,
          contenu: `Lorsque le test de substitution directe conduit à l'un des résultats ci-dessous, on dit qu'on est face à une **forme indéterminée (FI)**. Ce résultat n'est pas la valeur de la limite — c'est un signal d'alarme qui t'oblige à changer de méthode.`,
        },
        {
          type: 'table',
          id: 'tbl8',
          headers: [`Forme`, `Elle apparaît quand…`, `Déviation à prendre`, `Traité dans`],
          rows: [
            [`0 / 0`, `Un quotient dont numérateur ET dénominateur s'annulent simultanément en un point a`, `Factoriser — repérer le facteur (x − a) commun — simplifier — re-substituer`, `Module 2 · Type 1`],
            [`∞ / ∞`, `Un quotient de polynômes quand x tend vers ±∞`, `Identifier les termes de plus haut degré en haut et en bas — calculer leur quotient`, `Module 2 · Type 2`],
            [`0 × ∞`, `Un produit où l'un des facteurs tend vers 0 et l'autre vers +∞`, `Transformer le produit en quotient — appliquer les croissances comparées`, `Module 4`],
            [`+∞ − ∞`, `Une différence de deux expressions qui tendent toutes deux vers +∞ ou −∞`, `Factoriser par le terme dominant (polynômes) — ou quantité conjuguée (racines)`, `Module 3 / Module 4`],
          ],
        },
        {
          type: 'warning',
          id: 'warn9',
          titre: `Piège à éviter`,
          contenu: `$\\dfrac{0}{0}$ ne vaut ni 0, ni 1, ni rien de défini. C'est uniquement un message d'alarme. La vraie valeur de la limite reste à découvrir par calcul algébrique. Ne conclus jamais que la limite est nulle sous prétexte que tu as obtenu $\\dfrac{0}{0}$.`,
        },
        {
          type: 'figure',
          id: 'fig10',
          src: '/images/t1/fig_M2_1.png',
          legende: `Le trou $0/0$ (à gauche) comblé après simplification (à droite).`,
          alt: `Le trou $0/0$ (à gauche) comblé après simplification (à droite).`,
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
          contenu: `### Le Diagnostic

Avant tout calcul sur ta feuille de devoir, effectue le **test de substitution directe** sur ton brouillon. C'est lui qui te dit dans quel cas tu es et quelle route prendre :

- Le test donne un **réel propre** → pas de FI, substitution directe (Module 1). Tu rédiges.
- Le test donne **$\\dfrac{0}{0}$** → Méthode A (factorisation + simplification). Module 2, Type 1.
- Le test donne **$\\dfrac{\\infty}{\\infty}$** → Méthode B (règle du plus haut degré). Module 2, Type 2.
- Le test donne **$0 \\times \\infty$** ou **$+\\infty - \\infty$** → Méthodes avancées. Voir Modules 3 et 4.

### L'Arbre de décision`,
        },
        {
          type: 'table',
          id: 'tbl12',
          headers: [`Si tu vois…`, `Ce que tu fais`],
          rows: [
            [`Test de substitution → résultat fini et propre`, `Route libre. Substitution directe (Module 1). Tu rédiges directement.`],
            [`Test donne 0/0 — limite en un point fini a`, `Méthode A : ① Vérifier que P(a) = 0 et Q(a) = 0 ② Factoriser le numérateur : trouver (x − a) comme facteur ③ Simplifier le facteur (x − a) commun (valable car x ≠ a) ④ Re-substituer dans l'expression nettoyée`],
            [`Test donne ∞/∞ — limite en ±∞ d'un quotient de polynômes`, `Méthode B : ① Repérer le terme de plus haut degré au numérateur ② Repérer le terme de plus haut degré au dénominateur ③ Énoncer la règle officielle et écrire l'égalité du quotient des dominants ④ Simplifier par la puissance de x et conclure`],
            [`Test donne 0 × ∞ ou +∞ − ∞`, `Méthodes avancées — noter la forme sur le brouillon. Voir Module 3 (conjuguée) ou Module 4 (croissances comparées) selon l'expression.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          contenu: `### La Procédure — Méthode A (lever un 0/0)

**Étape 1.** Effectue le test : remplace $x$ par $a$ et vérifie que tu obtiens bien $\\dfrac{0}{0}$ (numérateur = 0 ET dénominateur = 0). Écris noir sur blanc sur ta copie : *« Cette limite présente la forme indéterminée $\\dfrac{0}{0}$. »*

**Étape 2.** Factorise le numérateur. La valeur $a$ est racine évidente : vérifie que $P(a) = 0$, puis décompose $P(x) = (x - a) \\cdot Q(x)$.

**Étape 3.** Pour tout $x \\neq a$, simplifie le facteur $(x - a)$ commun en haut et en bas. L'expression nettoyée n'a plus de dénominateur nul.

**Étape 4.** Applique la substitution directe sur la nouvelle expression simplifiée pour obtenir la limite.

### La Procédure — Méthode B (lever un ∞/∞)

**Étape 1.** Identifie le terme de **plus haut degré** au numérateur.

**Étape 2.** Identifie le terme de **plus haut degré** au dénominateur.

**Étape 3.** Énonce la règle officielle : *« La limite en $\\pm\\infty$ d'une fonction rationnelle est égale à la limite du quotient de ses termes de plus haut degré. »* Puis écris l'égalité correspondante.

**Étape 4.** Simplifie la puissance de $x$ commune et lis le résultat : réel (degrés égaux), $\\pm\\infty$ (numérateur domine) ou $0$ (dénominateur domine).

### La Vérification

- **Méthode A :** après simplification, remplacer $x$ par $a$ ne doit plus produire $\\dfrac{0}{0}$. Si c'est encore le cas, la factorisation est incomplète — cherche un autre facteur commun.
- **Méthode B :** vérifie la cohérence du signe. Si les termes de plus haut degré sont tous les deux positifs à l'infini, la limite est positive. Si l'un est négatif, ajuste le signe du résultat.

Tu connais la scène classique en classe. Le prof écrit une limite complexe à l'infini. La moitié des élèves recopie sans réfléchir et essaie d'additionner les infinis comme des nombres ordinaires. Résultat : panique générale.

Toi, garde la tête froide, Champion(ne). Isole les termes dominants, applique la déviation, et la vraie valeur apparaît.`,
        },
        {
          type: 'figure',
          id: 'fig14',
          src: '/images/t1/fig_M2_1.png',
          legende: `Le trou $0/0$ (à gauche) comblé après simplification (à droite).`,
          alt: `Le trou $0/0$ (à gauche) comblé après simplification (à droite).`,
        },
      ],
    },
    {
      id: 's-bac-5',
      titre: `📘 LANGAGE OFFICIEL DU BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b15',
          contenu: `Champion(ne), tu as l'image de la déviation. Maintenant, ta copie doit parler le langage rigoureux des maths.

**Définition formelle.** On dit qu'un calcul de limite conduit à une **forme indéterminée** lorsque l'application directe des règles opératoires sur les limites donne une expression dont la valeur ne peut être déterminée sans transformation préalable de la fonction.

**En langage courant.** Une forme indéterminée n'est pas une absence de limite. C'est un message d'alarme qui te dit : *« le chemin direct est bouché, choisis une autre route. »*`,
        },
        {
          type: 'warning',
          id: 'warn16',
          titre: `Piège à éviter`,
          contenu: `- **Forme indéterminée** (abrégé **FI**) — jamais « calcul impossible » ni « limite n'existe pas ».
- **Lever l'indétermination** — c'est le verbe officiel pour décrire l'étape de transformation algébrique.
- **Factoriser par $(x - a)$** — pour les FI de type $\\dfrac{0}{0}$ en un point fini $a$.
- **Mettre en facteur le terme de plus haut degré** — pour les FI de type $\\dfrac{\\infty}{\\infty}$ ou $+\\infty - \\infty$ à l'infini.
- **Quantité conjuguée** — pour les FI avec racines carrées (à voir au Module 3).`,
        },
        {
          type: 'tip',
          id: 'tip17',
          titre: `Conseil`,
          contenu: `Le correcteur attend littéralement la phrase *« Cette limite présente la forme indéterminée $\\dfrac{0}{0}$ »* avant tout calcul de levée. Pas d'aveu de FI = pas de point de méthode.`,
        },
      ],
    },
    {
      id: 's-exo-6',
      titre: `Exercices-Types`,
      blocs: [
        {
          type: 'exercise',
          id: 'extype18',
          niveau: 'BAC',
          enonce: `Soit $g$ la fonction définie sur $\\mathbb{R}$ par $g(x) = -x^3 + 4x^2 - x + 2$. Déterminer $\\displaystyle\\lim_{x \\to +\\infty} g(x)$ et $\\displaystyle\\lim_{x \\to -\\infty} g(x)$.

*[Exercice dérivé d'une étude de fonction type BAC ivoirien — calcul des limites aux bornes du domaine]*`,
          etapes: [
            { name: `Étape 1 — En $+\\infty$`, contenu: `On repère le terme de plus haut degré : c'est $-x^3$ (degré 3, coefficient $-1$). On factorise le polynôme entier par $x^3$ :
$$g(x) = x^3\\!\\left(-1 + \\dfrac{4}{x} - \\dfrac{1}{x^2} + \\dfrac{2}{x^3}\\right)$$` },
            { name: `Étape 2`, contenu: `Quand $x \\to +\\infty$, tous les termes en $\\dfrac{1}{x}$, $\\dfrac{1}{x^2}$ et $\\dfrac{1}{x^3}$ s'éteignent vers $0$. La parenthèse tend vers $-1$. On a donc :
$$\\lim_{x \\to +\\infty} g(x) = (+\\infty) \\times (-1) = -\\infty$$` },
            { name: `Étape 3 — En $-\\infty$`, contenu: `On garde la même factorisation. Quand $x \\to -\\infty$ : $x^3 \\to -\\infty$ et la parenthèse tend toujours vers $-1$. Donc :
$$\\lim_{x \\to -\\infty} g(x) = (-\\infty) \\times (-1) = +\\infty$$` },
          ],
          reponse: `$\\displaystyle\\lim_{x \\to +\\infty} g(x) = -\\infty$ et $\\displaystyle\\lim_{x \\to -\\infty} g(x) = +\\infty$.`,
          conseil: `Pour tout polynôme, la limite en $\\pm\\infty$ est dictée par le **terme de plus haut degré** seul. Factorise par $x^n$ (le degré maximal), et tous les autres termes disparaissent à l'intérieur de la parenthèse. C'est la même philosophie que la Méthode B — sauf qu'ici tu n'as pas de fraction, juste une somme.`,
          piege: `En $-\\infty$, le signe de $x^3$ change (un cube de nombre négatif est négatif). Beaucoup d'élèves calculent machinalement $x^3 \\to +\\infty$ sans vérifier. Rappelle-toi : les puissances impaires ($x$, $x^3$, $x^5$…) conservent le signe de $x$ ; les puissances paires ($x^2$, $x^4$…) sont toujours positives. Si tu mélanges, ton signe final s'inverse et tu perds tous les points.`,
        },
        {
          type: 'rule',
          id: 'copie19',
          titre: `La Copie Parfaite`,
          contenu: `Calculons les limites de $g$ aux bornes de son domaine.

**En $+\\infty$ :**

Pour tout $x \\in \\mathbb{R}$, on factorise par $x^3$ :
$$g(x) = x^3\\!\\left(-1 + \\dfrac{4}{x} - \\dfrac{1}{x^2} + \\dfrac{2}{x^3}\\right)$$

Or $\\displaystyle\\lim_{x \\to +\\infty} \\left(-1 + \\dfrac{4}{x} - \\dfrac{1}{x^2} + \\dfrac{2}{x^3}\\right) = -1$ et $\\displaystyle\\lim_{x \\to +\\infty} x^3 = +\\infty$.

Par produit de limites : $\\displaystyle\\lim_{x \\to +\\infty} g(x) = -\\infty$.

**En $-\\infty$ :**

$\\displaystyle\\lim_{x \\to -\\infty} x^3 = -\\infty$ et la parenthèse tend vers $-1$.

Par produit de limites : $\\displaystyle\\lim_{x \\to -\\infty} g(x) = (-\\infty) \\times (-1) = +\\infty$.

*[Barème type BAC : factorisation par $x^3$ correcte 1 pt · limite de la parenthèse 0,5 pt · conclusion en $+\\infty$ avec signe 0,5 pt · conclusion en $-\\infty$ avec signe 0,5 pt — Total : 2,5 pts]*

---`,
        },
        {
          type: 'exercise',
          id: 'exo20',
          niveau: 'MOYEN',
          enonce: `Calcule $\\displaystyle\\lim_{x \\to 2} \\dfrac{x^2 - 2x}{x^2 - 4}$.
  *(Réponse : $\\dfrac{1}{2}$. On factorise par $(x - 2)$ en haut et en bas ; l'expression simplifiée devient $\\dfrac{x}{x + 2}$, puis on remplace $x$ par $2$.)*`,
          etapes: [
          ],
          reponse: ``,
        },
        {
          type: 'exercise',
          id: 'exo21',
          niveau: 'MOYEN',
          enonce: `Calcule $\\displaystyle\\lim_{x \\to 3} \\dfrac{x^2 - 5x + 6}{x - 3}$.
  *(Réponse : $1$. Le numérateur se factorise en $(x - 3)(x - 2)$ ; après simplification par $(x - 3)$, il reste $x - 2$, et on remplace $x$ par $3$ : $3 - 2 = 1$.)*`,
          etapes: [
          ],
          reponse: ``,
        },
      ],
    },
    {
      id: 's-recap-7',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap22',
          titre: `À retenir`,
          contenu: [
            `Une **forme indéterminée** n'est pas une absence de limite : c'est un signal qui te dit que le chemin direct est bouché et qu'il faut **lever l'indétermination** par une transformation algébrique.`,
            `📘 Vocabulaire officiel : forme indéterminée (FI), lever l'indétermination, factoriser par $(x - a)$, mettre en facteur le terme de plus haut degré.`,
            `Les **4 formes indéterminées** classiques : $\\dfrac{0}{0}$, $\\dfrac{\\infty}{\\infty}$, $+\\infty - \\infty$ et $0 \\times \\infty$.`,
            `FI $\\dfrac{0}{0}$ en un point fini $a$ → **factorise** le numérateur et le dénominateur par $(x - a)$, puis **simplifie** le facteur commun avant de remplacer.`,
            `FI $\\dfrac{\\infty}{\\infty}$ ou $+\\infty - \\infty$ à l'infini → **mets en facteur le terme de plus haut degré**, puis simplifie : à l'infini, seul le terme dominant reste visible.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil23',
          titre: `Fil rouge`,
          contenu: `La factorisation par $(x - a)$ et la règle du terme de plus haut degré couvrent déjà une grande partie des barrages du BAC. Mais une dernière forme va te résister : celle où une **racine carrée** se glisse dans le calcul et fait apparaître un $\\dfrac{0}{0}$ ou un $+\\infty - \\infty$ impossible à factoriser comme avant. Pour franchir ce barrage-là, il te faudra une nouvelle arme : la **quantité conjuguée**. C'est le cœur du **Module 3**.`,
        },
      ],
    },
    {
      id: 's-eval-8',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval24',
          titre: `Auto-évaluation`,
          contenu: [
            `Je reconnais sur mon brouillon qu'un calcul direct produit une forme indéterminée.`,
            `J'annonce la FI avec le vocabulaire officiel (« cette limite présente la forme indéterminée $\\dfrac{0}{0}$ ») **avant** tout calcul de levée.`,
            `Je lève une FI $\\dfrac{0}{0}$ en factorisant numérateur et dénominateur par $(x - a)$ puis en simplifiant.`,
            `Je lève une FI $\\dfrac{\\infty}{\\infty}$ en mettant en facteur le terme de plus haut degré.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score25',
          titre: `Ton score`,
          contenu: [
            `🟢 **4/4** → Tu sais nommer et lever les FI algébriques — tu es prêt(e) pour le Module 3.`,
            `🟡 **2 ou 3** → Relis la brique 📘 et l'Arbre de décision de ⑤ La Descente, puis refais un Exercice-Type sans la correction.`,
            `🔴 **0 ou 1** → Reprends l'image de la déviation au ② Le Réel : une FI, ce n'est pas un cul-de-sac, c'est juste une autre route à trouver.`,
          ],
        },
      ],
    },
  ],
};
