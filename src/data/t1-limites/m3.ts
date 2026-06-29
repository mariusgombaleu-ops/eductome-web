import { Chapitre } from '../../types/course';

export const chapitreM3: Chapitre = {
  id: 't1-m3',
  titre: `Module 3 — L'Expression Conjuguée`,
  duree: 25,
  niveau: 'MOYEN',
  xpGain: 30,
  objectifs: [
    `Identifier le conjugué d'une expression contenant une racine carrée`,
    `Énoncer l'identité remarquable $(\\sqrt{A}-B)(\\sqrt{A}+B) = A - B^2$ avec le vocabulaire officiel attendu au BAC`,
    `Lever une forme $\\dfrac{0}{0}$ avec racine par la technique du conjugué`,
    `Lever une forme $+\\infty - \\infty$ avec racine par la technique du conjugué`,
    `Rédiger une levée d'indétermination propre en maintenant l'équilibre numérateur/dénominateur`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, au Module 2, j'ai compris la factorisation pour lever un $\\dfrac{0}{0}$. Mais là dans mon devoir, j'ai la fonction $\\dfrac{\\sqrt{x+3} - 2}{x - 1}$ — et $x = 1$ me donne encore $\\dfrac{0}{0}$. Sauf que cette fois, je ne vois rien à factoriser ! La racine carrée bloque tout. Je fais quoi ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Exactement là, Champion(ne) — tu viens de toucher la limite de la factorisation algébrique. Une racine carrée n'est pas un polynôme : tu ne peux pas écrire $\\sqrt{x+3} - 2 = (x-1) \\times \\text{quelque chose}$ avec la méthode du Module 2. La racine résiste. Mais on ne reste pas sans armes. Il existe un outil conçu précisément pour ce type de blocage : l'**expression conjuguée**. L'idée est simple — on introduit dans le calcul un jumeau de signe inversé qui déclenche une identité remarquable et fait disparaître la racine d'un seul coup. C'est comme au marché d'Adjamé, quand on contrebalance une arnaque sur la balance avec un contre-poids exactement calibré.`,
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
          contenu: `Pose ton stylo deux minutes, imagine la scène.

Tu es au marché d'Adjamé pour acheter un pagne traditionnel de grande valeur. Le vendeur, un peu roublard, a enroulé le tissu serré autour d'une lourde pierre pour fausser la pesée sur sa balance mécanique. Il a scellé le tout avec un nœud complexe que tu ne peux pas défaire à la main sans déchirer l'étoffe.

Tu as sous les yeux une illusion totale sur le vrai poids du pagne.

Pour rétablir la vérité sans abîmer la marchandise, tu ne vas pas essayer de couper le nœud de force. Tu vas poser sur l'autre plateau de la balance un **contre-poids jumeau**, calculé de façon identique, mais configuré à l'inverse pour annuler précisément l'effet de la pierre cachée.

Dès que ce jumeau inversé entre en jeu, l'arnaque s'annule. Le piège est neutralisé. Et le vrai poids du tissu apparaît enfin.`,
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
          contenu: `Maintenant, mot pour mot, du quartier vers les maths, traduisons cette scène.

Le nœud serré avec la pierre qui fausse tout au numérateur, c'est ton expression sous la forme $\\sqrt{x} - 2$. C'est ce bloc qui engendre le zéro fantôme quand $x$ s'approche de $4$.

Le contre-poids jumeau inversé que tu introduis, c'est ce qu'on appelle l'**expression conjuguée** : même structure de bloc, mais on change le signe central — ce qui donne ici $\\sqrt{x} + 2$.

Le moment magique où le piège s'annule sur la balance, c'est l'utilisation de l'identité remarquable de ton enfance. En multipliant le bloc initial par son jumeau, la racine carrée s'effondre et laisse place à un polynôme propre :
$$(\\sqrt{x}-2)(\\sqrt{x}+2) = x - 2^2 = x - 4$$

Mais attention à la règle d'or du marché : pour que la balance reste juste, si tu ajoutes ce contre-poids au numérateur, tu dois **obligatoirement** ajouter exactement le même au dénominateur. Sinon, ta fraction change de valeur et tout ton calcul s'écroule.

Voici la correspondance complète entre le marché et les maths :`,
        },
        {
          type: 'table',
          id: 'tbl5',
          headers: [`Scène du quartier`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Le nœud serré avec la pierre qui fausse la pesée`, `$\\\\sqrt{x} - k$`, `Le bloc avec la racine carrée qui engendre le $\\\\dfrac{0}{0}$`],
            [`Le contre-poids jumeau inversé posé sur l'autre plateau`, `$\\\\sqrt{x} + k$`, `L'expression conjuguée — même structure, signe central inversé`],
            [`Le piège qui s'annule quand les deux plateaux s'équilibrent`, `$(\\\\sqrt{x}-k)(\\\\sqrt{x}+k) = x - k^2$`, `L'identité remarquable qui fait disparaître la racine`],
            [`Équilibrer les deux plateaux de la balance`, `Multiplier numérateur ET dénominateur`, `La règle d'équilibre — ce que tu fais en haut, tu le fais en bas`],
          ],
        },
      ],
    },
    {
      id: 's4',
      titre: `④ LA RÈGLE`,
      blocs: [
        {
          type: 'rule',
          id: 'rule6',
          titre: `Règle`,
          contenu: `**Définition opérationnelle.** L'expression conjuguée d'un bloc $(\\sqrt{A} - B)$ est $(\\sqrt{A} + B)$. Seul le signe central change ; le contenu sous la racine reste rigoureusement identique.

**La formule fondatrice.** Pour tout réel $A \\geq 0$ et tout réel $B$ :
$$(\\sqrt{A} - B)(\\sqrt{A} + B) = A - B^2$$

En particulier, quand $B$ est une constante $k$ :
$$(\\sqrt{x} - k)(\\sqrt{x} + k) = x - k^2$$

La racine carrée disparaît — c'est l'effet de cette identité.

**La règle d'équilibre (incontournable).** Pour ne pas modifier la valeur d'une fraction, on multiplie **simultanément** le numérateur **et** le dénominateur par l'expression conjuguée. C'est mathématiquement équivalent à multiplier par $1$ — l'égalité est préservée, et la racine s'efface.

**Le contenu sous la racine est intouchable.** Le conjugué de $(\\sqrt{x+3} - 5)$ est $(\\sqrt{x+3} + 5)$. Seul le signe **extérieur** change. L'expression $(x + 3)$ sous le radical reste rigoureusement identique.`,
        },
        {
          type: 'figure',
          id: 'fig-m3-2',
          src: '/images/t1/fig_M3_2.png',
          legende: `$f$ non définie en $x=4$, mais sa limite vaut $\\frac{1}{4}$.`,
          alt: `$f$ non définie en $x=4$, mais sa limite vaut $\\frac{1}{4}$.`,
        },
      ],
    },
    {
      id: 's5',
      titre: `⑤ LA DESCENTE`,
      blocs: [
        {
          type: 'text',
          id: 'b7',
          contenu: `### Le Diagnostic

Avant tout calcul, effectue le **test de substitution directe** sur ton brouillon. Pour savoir si le conjugué est l'outil qu'il te faut, cherche ces deux signaux simultanément :

- Le test donne **$\\dfrac{0}{0}$** en un point fini **ET** le numérateur (ou le dénominateur) contient une racine carrée → conjugué de ce membre, Méthode A.
- Le test donne **$+\\infty - \\infty$** avec une racine carrée dans l'expression → conjugué de la différence, Méthode B.
- Si le test donne $\\dfrac{0}{0}$ **sans racine** → revenir au Module 2 (factorisation).
- Si le test donne $\\dfrac{\\infty}{\\infty}$ **sans racine** → revenir au Module 2 (plus haut degré).

### L'Arbre de décision`,
        },
        {
          type: 'table',
          id: 'tbl8',
          headers: [`Si tu vois…`, `Ce que tu fais`],
          rows: [
            [`0/0 en un point a — avec une racine carrée qui résiste à la factorisation`, `Méthode A : ① Identifier le membre contenant la racine ② Écrire son conjugué (même signe sous la racine, signe central inversé) ③ Multiplier numérateur ET dénominateur par ce conjugué ④ Développer SEULEMENT le membre avec la racine via (A−B)(A+B) ⑤ Laisser l'autre membre factorisé ⑥ Simplifier le facteur commun ⑦ Re-substituer`],
            [`+∞ − ∞ à l'infini — avec une racine carrée dans l'une des expressions`, `Méthode B : ① Écrire le conjugué de la différence ② Multiplier numérateur ET dénominateur par ce conjugué ③ Développer la racine via l'identité remarquable ④ Factoriser par le terme dominant en haut et en bas ⑤ Simplifier et lire la limite`],
            [`0/0 sans racine`, `Retour Module 2 — Méthode A (factorisation algébrique classique)`],
            [`∞/∞ sans racine`, `Retour Module 2 — Méthode B (règle du terme de plus haut degré)`],
          ],
        },
        {
          type: 'text',
          id: 'b9',
          contenu: `### La Procédure — Méthode A (0/0 avec racine)

**Étape 1.** Identifie le bloc contenant la racine carrée (souvent au numérateur). Écris sur ta copie : *« Cette limite présente la forme indéterminée $\\dfrac{0}{0}$. »*

**Étape 2.** Écris son expression conjuguée : même structure, signe central inversé. Ne touche pas au contenu sous le radical.

**Étape 3.** Annonce explicitement sur ta copie : *« Multiplions le numérateur et le dénominateur par la quantité conjuguée. »* Multiplie **simultanément** numérateur et dénominateur par ce conjugué.

**Étape 4.** Développe le membre concerné grâce à l'identité $(\\sqrt{A}-B)(\\sqrt{A}+B) = A - B^2$. La racine disparaît.

**Étape 5.** Laisse l'autre membre **factorisé** tel quel — ne le développe pas.

**Étape 6.** Simplifie le facteur commun $(x - a)$ visible en haut et en bas.

**Étape 7.** Calcule la limite de l'expression nettoyée par substitution directe.

### La Procédure — Méthode B (+∞ − ∞ avec racine)

**Étape 1.** Écris le conjugué de la différence et multiplie numérateur ET dénominateur par lui.

**Étape 2.** Développe grâce à l'identité remarquable : la racine s'efface.

**Étape 3.** Factorise le numérateur et le dénominateur résultants par le **terme dominant** à l'infini.

**Étape 4.** Simplifie et lis la limite des blocs résiduels qui tendent vers des constantes.

### La Vérification

- **Méthode A :** après simplification, le dénominateur ne doit plus s'annuler en $a$. Si c'est encore le cas, le conjugué a mal été construit.
- **Méthode B :** après factorisation par le terme dominant, les blocs en $\\dfrac{1}{x}$ tendent vers $0$ à l'infini. La limite finale se lit sur les coefficients restants.
- **Dans les deux cas :** vérifie que la racine carrée a bien disparu du membre traité. Si la racine est encore là, l'identité remarquable n'a pas été appliquée correctement.

Tu connais la scène par cœur. Devoir sur table, trente minutes que ça a commencé. L'élève devant toi multiplie uniquement le haut, oublie le bas, et déroule une suite d'égalités magnifiques mais totalement fausses. Le prof barrera tout en rouge sans même lire jusqu'au bout. Pendant ce temps, ton voisin tente un coup d'œil discret sur ta copie. Toi, garde la tête froide et fais les choses dans l'ordre.`,
        },
      ],
    },
    {
      id: 's-bac-5',
      titre: `📘 LANGAGE OFFICIEL DU BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b10',
          contenu: `Champion(ne), tu as l'image de la balance. Maintenant, ta copie doit parler le langage rigoureux des maths.

**Définition formelle — L'expression conjuguée.** Soit $A$ un réel positif ou nul et $B$ un réel. On appelle **expression conjuguée** de $\\sqrt{A} - B$ l'expression $\\sqrt{A} + B$ obtenue en changeant le signe central. Plus généralement, l'expression conjuguée de $P - Q$ est $P + Q$ dès que l'un au moins des deux termes contient une racine carrée.

**Définition formelle — L'identité utilisée.** Pour tout réel $A \\geq 0$ et tout réel $B$ :
$$(\\sqrt{A} - B)(\\sqrt{A} + B) = A - B^2$$

C'est une simple application de l'identité remarquable $a^2 - b^2 = (a-b)(a+b)$ avec $a = \\sqrt{A}$ et $b = B$.

**En langage courant.** Le conjugué, c'est le *jumeau de signe inversé* qui fait disparaître la racine quand on multiplie. Et la règle d'équilibre, c'est : *ce que je fais au numérateur, je le fais identiquement au dénominateur.*`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `- **Expression conjuguée** (ou **quantité conjuguée**) — jamais « jumeau » ni « contre-poids » dans la rédaction officielle.
- **Multiplier par la quantité conjuguée** — c'est le verbe technique exact pour décrire l'opération.
- **Identité remarquable $a^2 - b^2 = (a-b)(a+b)$** — à nommer explicitement si on s'en sert.
- **Maintenir l'équilibre de la fraction** — pour justifier la multiplication simultanée numérateur/dénominateur.`,
        },
        {
          type: 'tip',
          id: 'tip12',
          titre: `Conseil`,
          contenu: `Le correcteur attend la phrase *« Multiplions le numérateur et le dénominateur par la quantité conjuguée $(\\sqrt{A} + B)$. »* Cette phrase justifie le calcul qui suit. Sans elle, le développement paraît surgir de nulle part — perte sèche de points de méthode.`,
        },
      ],
    },
    {
      id: 's-exo-6',
      titre: `Exercices-Types`,
      blocs: [
        {
          type: 'exercise',
          id: 'extype13',
          niveau: 'BAC',
          enonce: `Soit $g$ la fonction définie sur $[-1\\,;\\,+\\infty[$ par $g(x) = x - \\sqrt{1 + x}$. Déterminer $\\displaystyle\\lim_{x \\to +\\infty} g(x)$.`,
          etapes: [
            { name: `Étape 1`, contenu: `L'expression conjuguée de $x - \\sqrt{1+x}$ est $x + \\sqrt{1+x}$. On multiplie et on divise $g(x)$ par ce jumeau pour maintenir l'égalité :
$$g(x) = \\dfrac{(x - \\sqrt{1+x})(x + \\sqrt{1+x})}{x + \\sqrt{1+x}} = \\dfrac{x^2 - (1+x)}{x + \\sqrt{1+x}} = \\dfrac{x^2 - x - 1}{x + \\sqrt{1+x}}$$` },
            { name: `Étape 2`, contenu: `Pour extraire la limite à l'infini, on factorise numérateur et dénominateur par leur terme dominant. Au numérateur, on sort $x^2$ :
$$x^2 - x - 1 = x^2\\!\\left(1 - \\dfrac{1}{x} - \\dfrac{1}{x^2}\\right)$$

Au dénominateur, pour $x > 0$, on sort $x$ (en extrayant $x$ de la racine) :
$$x + \\sqrt{1+x} = x\\!\\left(1 + \\sqrt{\\dfrac{1}{x^2} + \\dfrac{1}{x}}\\right)$$` },
            { name: `Étape 3`, contenu: `En simplifiant par $x$, l'expression devient :
$$g(x) = x \\cdot \\dfrac{1 - \\dfrac{1}{x} - \\dfrac{1}{x^2}}{1 + \\sqrt{\\dfrac{1}{x^2} + \\dfrac{1}{x}}}$$` },
          ],
          reponse: `Quand $x \\to +\\infty$, toutes les fractions ayant $x$ au dénominateur s'éteignent vers $0$. Le grand bloc de droite tend vers $\\dfrac{1}{1} = 1$. Multiplié par le facteur $x$ qui grandit vers $+\\infty$, l'ensemble s'envole vers $+\\infty$.`,
          conseil: `À l'infini, pense à factoriser par le terme dominant **après** avoir appliqué le conjugué. Au numérateur c'est $x^2$ qui domine ; au dénominateur c'est $x$. En sortant $x$ de la fraction globale, les blocs résiduels tendent vers des constantes — et la limite finale se lit directement sur leur rapport.`,
          piege: `Ne conclus jamais $+\\infty - \\infty = 0$ sans calcul. La forme est indéterminée : le résultat dépend entièrement des vitesses de croissance de chaque terme. Ici la réponse est $+\\infty$, mais $\\sqrt{x^2+x} - x$ donne $\\dfrac{1}{2}$, et $\\sqrt{x+1} - \\sqrt{x-1}$ donne $0$. Chaque exercice a sa propre réponse — la méthode seule peut la révéler.`,
        },
        {
          type: 'rule',
          id: 'copie14',
          titre: `La Copie Parfaite`,
          contenu: `Déterminons $\\displaystyle\\lim_{x \\to +\\infty} g(x)$ où $g(x) = x - \\sqrt{1+x}$.

On a $\\displaystyle\\lim_{x \\to +\\infty} x = +\\infty$ et $\\displaystyle\\lim_{x \\to +\\infty} \\sqrt{1+x} = +\\infty$. Par somme de limites, on se retrouve face à la forme indéterminée $+\\infty - \\infty$.

Pour tout $x > 0$, multiplions et divisons par la quantité conjuguée $(x + \\sqrt{1+x})$ :

$$g(x) = \\dfrac{(x - \\sqrt{1+x})(x + \\sqrt{1+x})}{x + \\sqrt{1+x}} = \\dfrac{x^2 - (1+x)}{x + \\sqrt{1+x}} = \\dfrac{x^2 - x - 1}{x + \\sqrt{1+x}}$$

Factorisons par les termes dominants :

$$g(x) = \\dfrac{x^2\\!\\left(1 - \\dfrac{1}{x} - \\dfrac{1}{x^2}\\right)}{x\\!\\left(1 + \\sqrt{\\dfrac{1}{x^2} + \\dfrac{1}{x}}\\right)} = x \\cdot \\dfrac{1 - \\dfrac{1}{x} - \\dfrac{1}{x^2}}{1 + \\sqrt{\\dfrac{1}{x^2} + \\dfrac{1}{x}}}$$

Déterminons les limites des blocs constitutifs :

$$\\displaystyle\\lim_{x \\to +\\infty}\\!\\left(1 - \\dfrac{1}{x} - \\dfrac{1}{x^2}\\right) = 1 \\qquad \\displaystyle\\lim_{x \\to +\\infty}\\!\\left(1 + \\sqrt{\\dfrac{1}{x^2} + \\dfrac{1}{x}}\\right) = 1$$

Par limite d'un quotient : $\\displaystyle\\lim_{x \\to +\\infty} \\dfrac{1 - \\dfrac{1}{x} - \\dfrac{1}{x^2}}{1 + \\sqrt{\\dfrac{1}{x^2} + \\dfrac{1}{x}}} = 1$.

Comme $\\displaystyle\\lim_{x \\to +\\infty} x = +\\infty$, on conclut par produit de limites :

$$\\lim_{x \\to +\\infty} g(x) = +\\infty$$

*[Barème type BAC : identification de la FI et choix du conjugué 0,5 pt · développement correct par l'identité remarquable 1 pt · factorisation par le terme dominant 1 pt · calcul des limites des blocs résiduels 0,5 pt · conclusion par produit de limites 0,5 pt — Total : 3,5 pts]*

---`,
        },
        {
          type: 'exercise',
          id: 'exo15',
          niveau: 'MOYEN',
          enonce: `Soit la fonction $h$ définie sur $[-3\\,;\\,1[\\,\\cup\\,]1\\,;\\,+\\infty[$ par $h(x) = \\dfrac{\\sqrt{x+3} - 2}{x - 1}$. Calcule $\\displaystyle\\lim_{x \\to 1} h(x)$.
  *(Réponse : $\\dfrac{1}{4}$. Le conjugué de $\\sqrt{x+3} - 2$ est $\\sqrt{x+3} + 2$ ; le numérateur se transforme en $x - 1$, ce qui permet une simplification immédiate avec le dénominateur.)*`,
          etapes: [
          ],
          reponse: ``,
        },
        {
          type: 'exercise',
          id: 'exo16',
          niveau: 'MOYEN',
          enonce: `Calcule $\\displaystyle\\lim_{x \\to 0} \\dfrac{\\sqrt{x + 4} - 2}{x}$.
  *(Réponse : $\\dfrac{1}{4}$. Le conjugué de $\\sqrt{x+4} - 2$ est $\\sqrt{x+4} + 2$ ; après développement, le numérateur devient $x$, qui simplifie avec le dénominateur. Il reste $\\dfrac{1}{\\sqrt{x+4}+2}$, et en $0$ : $\\dfrac{1}{2+2} = \\dfrac{1}{4}$.)*`,
          etapes: [
          ],
          reponse: ``,
        },
        {
          type: 'exercise',
          id: 'exo17',
          niveau: 'MOYEN',
          enonce: `Calcule $\\displaystyle\\lim_{x \\to +\\infty} \\left(\\sqrt{x+1} - \\sqrt{x-1}\\right)$.
  *(Réponse : $0$. Le conjugué de la différence est $\\sqrt{x+1} + \\sqrt{x-1}$ ; le numérateur devient $(x+1)-(x-1) = 2$, et le dénominateur $\\sqrt{x+1}+\\sqrt{x-1} \\to +\\infty$ ; le quotient tend vers $0$.)*`,
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
          id: 'recap18',
          titre: `À retenir`,
          contenu: [
            `Dès qu'une racine carrée engendre un blocage de type $\\dfrac{0}{0}$ ou $+\\infty - \\infty$, le premier réflexe est de dégainer l'**expression conjuguée**.`,
            `📘 Vocabulaire officiel : quantité conjuguée, multiplier par la quantité conjuguée, identité remarquable $a^2 - b^2$, maintenir l'équilibre de la fraction.`,
            `L'astuce repose entièrement sur l'identité $(\\sqrt{A} - B)(\\sqrt{A} + B) = A - B^2$, construite pour extraire la variable hors de la racine.`,
            `Règle de sécurité incontournable : tout traitement appliqué au numérateur doit être appliqué de manière rigoureusement identique au dénominateur — sans quoi la fraction change de valeur.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil19',
          titre: `Fil rouge`,
          contenu: `Tu disposes désormais de deux armes majeures pour terrasser les indéterminations classiques : la factorisation pure du Module 2 et l'expression conjuguée que tu viens de dompter. Mais comment feras-tu au Module 4 lorsque des fonctions de nature totalement différentes s'affronteront à l'infini ? Imagine une exponentielle lancée à toute vitesse contre une puissance ou un logarithme. Aucune factorisation algébrique ne pourra trancher cette course de vitesse. Il te faudra apprendre les règles secrètes de la **domination à l'infini** : c'est tout l'enjeu des **croissances comparées**.`,
        },
      ],
    },
    {
      id: 's-eval-8',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval20',
          titre: `Auto-évaluation`,
          contenu: [
            `Je sais identifier et construire sans hésiter l'expression conjuguée d'un bloc contenant une racine carrée.`,
            `J'utilise le vocabulaire officiel (quantité conjuguée, identité remarquable, équilibre de la fraction) dans chacune de mes rédactions.`,
            `J'ai compris pourquoi il faut maintenir factorisé le côté non concerné par l'identité remarquable.`,
            `Je me sens capable de rédiger une levée d'indétermination propre sans jamais oublier d'équilibrer le dénominateur.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score21',
          titre: `Ton score`,
          contenu: [
            `🟢 **4/4** → Ton arme est affûtée et ton écriture est propre — tu as le feu vert pour attaquer le Module 4.`,
            `🟡 **2 ou 3** → Prends le temps de relire la brique 📘 et ⑤ La Descente, puis refais l'Exercice-Type 1 sur ton brouillon sans regarder la solution.`,
            `🔴 **0 ou 1** → Pose ton outil, reprends l'image de la balance au marché d'Adjamé, et rappelle-toi pourquoi l'équilibre des deux plateaux n'est pas négociable.`,
          ],
        },
      ],
    },
  ],
};
