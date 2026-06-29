import { Chapitre } from '../../types/course';

export const chapitreM1: Chapitre = {
  id: 't2-m1',
  titre: `Module 1 — Le Nombre Dérivé`,
  duree: 25,
  niveau: 'BASE',
  xpGain: 25,
  objectifs: [
    `Expliquer ce qu'est une dérivée avec l'image du prix du cacao au marché d'Adjamé`,
    `Énoncer la définition formelle du nombre dérivé avec le vocabulaire exact du BAC`,
    `Calculer $f'(a)$ par définition (limite du taux de variation) sur un polynôme`,
    `Utiliser l'expression conjuguée pour calculer $f'(a)$ d'une fonction avec racine`,
    `Écrire proprement l'équation de la tangente à la courbe au point d'abscisse $a$`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, on a passé tout le Tome 1 à calculer des limites. Et là tu me dis que les dérivées, c'est encore des limites ? C'est quoi la différence alors ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Tu poses exactement la bonne question. En Tome 1, on cherchait *où* allait la courbe quand $x$ s'approchait d'un point. Aujourd'hui, on change de regard : *à quelle vitesse* la courbe y va-t-elle à chaque instant ? Deux questions différentes sur la même courbe. Et oui — la dérivée est bel et bien définie par une limite. Tout ce que tu as construit en Tome 1 va payer ici, brique par brique. Suis-moi au marché.`,
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
          contenu: `Descends avec moi au marché d'Adjamé un matin de grande affluence. Tu observes le prix du kilo de cacao : à 8h00, il est à 1 500 F. À 9h00, il a grimpé à 1 550 F. Si on te demande ce qui s'est passé sur la matinée, tu réponds : « Le prix a monté de 50 F en une heure. » Ça, c'est une **vitesse moyenne** — elle décrit le mouvement sur toute la plage de temps.

Mais à 8h30 précises, un gros acheteur débarque et le marché s'emballe. Le patron de la coopérative t'appelle et te pose une autre question : « À cet instant précis, à quelle vitesse le prix est-il en train de grimper ? » Ton calcul global sur une heure ne peut pas lui répondre. Il te faut zoomer sur un intervalle minuscule autour de 8h30 — quelques secondes, presque rien.

Ce passage d'une vitesse moyenne à une vitesse captée sur un instant qui tend vers zéro, **c'est ça, le nombre dérivé** : la vitesse exacte du prix à la seconde où le patron pose sa question.`,
        },
        {
          type: 'figure',
          id: 'fig-m1-1',
          src: '/images/t2/fig_M1_1.png',
          legende: `La sécante $(AB)$ bascule vers la tangente en $A$ quand $h \\to 0$.`,
          alt: `La sécante $(AB)$ bascule vers la tangente en $A$ quand $h \\to 0$.`,
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
          contenu: `Traduisons cette scène du marché en langage mathématique, brique par brique :

- **Le temps fixe** où le patron appelle → un réel fixé, noté $a$.
- **Le petit écart de temps** qui suit → un incrément, noté $h$. La nouvelle position est $a + h$.
- **La variation du prix** entre ces deux instants → la différence $f(a + h) - f(a)$.
- **La vitesse moyenne** sur cet écart → le taux de variation $\\dfrac{f(a + h) - f(a)}{h}$.
- **La vitesse instantanée** en $a$ → ce qu'on obtient en poussant $h$ vers $0$.`,
        },
        {
          type: 'table',
          id: 'tbl5',
          headers: [`Scène du marché`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`L'heure précise du coup de fil`, `$a$`, `Le point où l'on mesure la vitesse`],
            [`Le petit écart de temps qui suit`, `$h$`, `L'incrément qu'on fera tendre vers $0$`],
            [`La hausse du prix sur cet écart`, `$f(a+h) - f(a)$`, `La variation de la fonction`],
            [`La vitesse moyenne sur l'écart`, `$\\dfrac{f(a+h)-f(a)}{h}$`, `Le taux de variation`],
            [`La vitesse à l'instant exact`, `$f'(a)$`, `Le nombre dérivé — la limite du taux`],
          ],
        },
        {
          type: 'text',
          id: 'b6',
          contenu: `C'est exactement là qu'intervient le Tome 1 : on calcule $\\displaystyle\\lim_{h \\to 0} \\dfrac{f(a+h) - f(a)}{h}$. La dérivée, c'est une limite déguisée — et tu sais déjà manier les limites.`,
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
          contenu: `Champion(ne), l'image du cacao t'a donné l'intuition. Maintenant, ta copie doit parler le langage rigoureux des mathématiques. Voici la traduction officielle, celle que le correcteur attend.

**Définition formelle.** Soit $f$ une fonction définie sur un intervalle ouvert contenant le réel $a$. On dit que $f$ est **dérivable en $a$** lorsque le taux de variation admet une limite finie quand $h$ tend vers $0$. Cette limite est appelée **nombre dérivé** de $f$ en $a$ et se note :

$$f'(a) = \\lim_{h \\to 0} \\dfrac{f(a+h) - f(a)}{h}$$

**En langage courant.** $f'(a)$ mesure la vitesse exacte à laquelle $f$ varie au point $a$. Géométriquement, c'est la pente de la tangente à la courbe en ce point.`,
        },
        {
          type: 'warning',
          id: 'warn8',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Taux de variation** — la fraction $\\dfrac{f(a+h)-f(a)}{h}$ avant tout passage à la limite.
- **Dérivable en $a$** — la limite du taux existe **et** est un réel fini.
- **Nombre dérivé** — la valeur $f'(a)$ de cette limite.
- **Tangente** — la droite de pente $f'(a)$ qui frôle la courbe au point d'abscisse $a$.`,
        },
        {
          type: 'tip',
          id: 'tip9',
          titre: `À retenir`,
          contenu: `Le correcteur attend la phrase *« La limite est un réel fini, donc $f$ est dérivable en $a$ et $f'(a) = \\ldots$ »*. Sans cette conclusion rédigée, tu perds le point de justification même si ton calcul est juste.`,
        },
        {
          type: 'figure',
          id: 'fig-m1-2',
          src: '/images/t2/fig_M1_2.png',
          legende: `Le nombre dérivé $f'(a)$ est la pente de la tangente en $a$.`,
          alt: `Le nombre dérivé $f'(a)$ est la pente de la tangente en $a$.`,
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
          titre: `Règle d'Or — Le Nombre Dérivé`,
          contenu: `Soit $f$ une fonction définie sur un intervalle contenant un réel $a$. On dit que $f$ est **dérivable en $a$** si et seulement si la limite suivante existe et est un réel fini :

$$f'(a) = \\lim_{h \\to 0} \\dfrac{f(a + h) - f(a)}{h}$$

Ce nombre $f'(a)$ s'appelle le **nombre dérivé** de $f$ en $a$.

**Interprétation géométrique.** $f'(a)$ est la pente (coefficient directeur) de la tangente à la courbe $\\mathcal{C}_f$ au point d'abscisse $a$.

**Équation de la tangente** à $\\mathcal{C}_f$ au point d'abscisse $a$ :

$$y = f'(a)(x - a) + f(a)$$

**Cas particulier.** Si la limite vaut $+\\infty$ ou $-\\infty$, la fonction n'est **pas** dérivable en $a$ : la courbe présente une tangente verticale en ce point.`,
        },
        {
          type: 'tip',
          id: 'tip11',
          titre: `Conseil du Grand Frère`,
          contenu: `Avant de te lancer, lis la consigne. « Par définition » t'oblige à poser le taux avec $h$ ; sinon, tu pourras utiliser les formules du Module 2. Ne confonds pas les deux chemins.`,
        },
        {
          type: 'warning',
          id: 'warn12',
          titre: `Piège à éviter`,
          contenu: `Ne passe jamais à la limite tant qu'un $h$ traîne encore au dénominateur. Tant que le $h$ du bas n'a pas été simplifié, tu es sur la forme indéterminée $\\dfrac{0}{0}$.`,
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
          contenu: `L'énoncé impose la définition dès qu'il contient les mots **« par définition »** ou **« en utilisant la définition du nombre dérivé »**. Ton réflexe : poser le taux de variation, développer le numérateur, factoriser $h$, simplifier, puis passer à la limite.`,
        },
        {
          type: 'table',
          id: 'tbl14',
          titre: `L'Arbre de décision`,
          headers: [`Si $f(x)$ est…`, `Le réflexe à activer`, `Le but avant la limite`],
          rows: [
            [`Un polynôme (ex : $2x^2 + 3x$)`, `Développer $(a+h)^2$ ou $(a+h)^3$ — Outil 2 du Socle.`, `Mettre $h$ en facteur pour l'éliminer.`],
            [`Une fonction avec $\\sqrt{x}$`, `Multiplier haut et bas par la conjuguée — Outil 3 du Socle.`, `Faire disparaître la racine pour libérer $h$.`],
            [`Une fonction en $\\dfrac{1}{x}$`, `Mettre au même dénominateur — Outil 5 du Socle.`, `Simplifier $h$ une fois la fraction réduite.`],
          ],
        },
        {
          type: 'text',
          id: 'b15',
          titre: `La Procédure en 4 étapes`,
          contenu: `**Étape 1.** Écris le taux $\\dfrac{f(a + h) - f(a)}{h}$ en remplaçant $x$ par $(a + h)$ dans la formule de $f$.

**Étape 2.** Développe le numérateur. Les termes sans $h$ doivent s'annuler avec $f(a)$.

**Étape 3.** Factorise $h$ au numérateur, puis simplifie avec le $h$ du dénominateur. C'est l'étape qui détruit l'indétermination.

**Étape 4.** Fais tendre $h$ vers $0$ et lis le résultat $f'(a)$. Conclus par la phrase officielle de dérivabilité.`,
        },
        {
          type: 'tip',
          id: 'tip16',
          titre: `La Vérification`,
          contenu: `- **Contrôle du terme constant** : s'il reste un nombre sans $h$ après l'étape 2, reprends la soustraction $f(a+h) - f(a)$ — c'est une erreur de signe.
- **Contrôle du $h$** : si un $h$ seul reste au dénominateur sans pouvoir partir, ta factorisation de l'étape 3 est incomplète.`,
        },
        {
          type: 'text',
          id: 'b-code',
          titre: `💻 Le Coin du Code — Approcher le nombre dérivé`,
          contenu: `Le nombre dérivé est une limite « idéale ». Sur une calculatrice ou en informatique, on ne sait pas faire tendre $h$ vraiment vers $0$ — mais on peut prendre un $h$ tout petit et regarder vers quoi le taux se stabilise. C'est exactement l'idée de la limite, vue de l'intérieur.

\`\`\`python
def nombre_derive(f, a, h=1e-6):
    # Taux de variation pour un h tres petit : approche f'(a)
    return (f(a + h) - f(a)) / h

f = lambda x: 2*x**2 + 3*x      # notre fonction du Module
print(nombre_derive(f, 1))      # affiche ~6.999... soit 7
\`\`\`

💬 **Le message du Grand Frère.** Regarde : la machine trouve $\\approx 7$, exactement le $f'(1)$ qu'on va calculer à la main juste en dessous. L'ordinateur ne « comprend » pas la limite — il s'en approche avec un $h$ minuscule. Toi, avec la définition, tu trouves la valeur **exacte**. C'est ça, ta supériorité sur la machine, Champion(ne).`,
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
          headers: [`Niveau`, `Situation d'examen`, `Comment la reconnaître`, `Exercice-Type`],
          rows: [
            [`🟢 BASE`, `Calcul de $f'(a)$ par définition — polynôme`, `L'énoncé donne un polynôme et exige la définition avec $h$.`, `ET-1`],
            [`🟡 MOYEN`, `Calcul de $f'(a)$ par définition — fonction avec racine`, `La fonction contient une racine carrée → réflexe conjuguée.`, `ET-2`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Nombre dérivé d'un polynôme.** Soit $f$ définie sur $\\mathbb{R}$ par $f(x) = 2x^2 + 3x$. Calculer $f'(1)$ par définition, puis écrire l'équation de la tangente à $\\mathcal{C}_f$ au point d'abscisse $1$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Nombre dérivé en un point fixe ($a = 1$) d'un polynôme. On développe $f(1+h)$, on forme le taux, on simplifie $h$.` },
            { name: `Étape 1`, contenu: `Les images : $f(1) = 2(1)^2 + 3(1) = 5$ et $f(1+h) = 2(1+h)^2 + 3(1+h) = 2h^2 + 7h + 5$.` },
            { name: `Étape 2`, contenu: `Le numérateur : $f(1+h) - f(1) = (2h^2 + 7h + 5) - 5 = 2h^2 + 7h$.` },
            { name: `Étape 3`, contenu: `Factoriser et simplifier : $\\dfrac{2h^2 + 7h}{h} = \\dfrac{h(2h + 7)}{h} = 2h + 7$.` },
            { name: `Étape 4`, contenu: `Passer à la limite : $f'(1) = \\displaystyle\\lim_{h \\to 0} (2h + 7) = 7$.` },
          ],
          reponse: `$f$ est dérivable en $1$ et $f'(1) = 7$. La tangente : $y = 7(x - 1) + 5 = 7x - 2$.`,
          conseil: `Les termes constants (ici le $5$) doivent toujours s'annuler à l'étape 2. S'il te reste un nombre sans $h$, c'est une erreur de signe dans la soustraction.`,
          piege: `Ne passe jamais à la limite sans avoir simplifié $h$ d'abord. Écrire $\\displaystyle\\lim_{h \\to 0} \\dfrac{2h^2 + 7h}{h}$ directement, c'est un piège — le $h$ du bas n'a pas encore disparu.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Calculons le nombre dérivé de $f$ en $1$ par définition. Pour tout réel $h \\neq 0$ :

$$\\dfrac{f(1+h) - f(1)}{h} = \\dfrac{2(1+h)^2 + 3(1+h) - 5}{h} = \\dfrac{2h^2 + 7h}{h}$$

Puisque $h \\neq 0$, on simplifie par $h$ : $\\dfrac{f(1+h) - f(1)}{h} = 2h + 7$.

Par passage à la limite : $\\displaystyle\\lim_{h \\to 0} (2h + 7) = 7$.

La limite est un réel fini, donc $f$ est dérivable en $1$ et $f'(1) = 7$.

Équation de la tangente $(T)$ au point d'abscisse $1$ :

$$y = f'(1)(x - 1) + f(1) = 7(x - 1) + 5 = 7x - 2$$

*[Barème type BAC : taux 0,5 pt · développement et simplification 1 pt · limite et conclusion 0,5 pt · tangente 0,5 pt — Total : 2,5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Nombre dérivé d'une fonction racine.** Soit $g$ définie sur $]0\\ ;\\ +\\infty[$ par $g(x) = \\sqrt{x}$. Calculer $g'(a)$ pour tout $a > 0$ par définition.`,
          etapes: [
            { name: `Diagnostic`, contenu: `La racine bloque le développement polynomial : le taux $\\dfrac{\\sqrt{a+h} - \\sqrt{a}}{h}$ est de la forme $\\dfrac{0}{0}$. Réflexe immédiat : l'expression conjuguée (Outil 3 du Socle).` },
            { name: `Étape 1`, contenu: `Poser le taux : $\\dfrac{g(a+h) - g(a)}{h} = \\dfrac{\\sqrt{a+h} - \\sqrt{a}}{h}$.` },
            { name: `Étape 2`, contenu: `Multiplier par la conjuguée : $\\dfrac{(\\sqrt{a+h} - \\sqrt{a})(\\sqrt{a+h} + \\sqrt{a})}{h(\\sqrt{a+h} + \\sqrt{a})} = \\dfrac{h}{h(\\sqrt{a+h} + \\sqrt{a})}$.` },
            { name: `Étape 3`, contenu: `Simplifier $h$ : $\\dfrac{1}{\\sqrt{a+h} + \\sqrt{a}}$.` },
            { name: `Étape 4`, contenu: `Passer à la limite : $g'(a) = \\displaystyle\\lim_{h \\to 0} \\dfrac{1}{\\sqrt{a+h} + \\sqrt{a}} = \\dfrac{1}{2\\sqrt{a}}$.` },
          ],
          reponse: `$g$ est dérivable sur $]0\\ ;\\ +\\infty[$ et $g'(a) = \\dfrac{1}{2\\sqrt{a}}$.`,
          conseil: `Ne développe jamais le dénominateur après avoir posé la conjuguée. Le $h$ doit rester visible en facteur en bas pour se simplifier avec le $h$ du haut.`,
          piege: `La conjuguée de $\\sqrt{a+h} - \\sqrt{a}$ est $\\sqrt{a+h} + \\sqrt{a}$, pas $\\sqrt{a} - \\sqrt{a+h}$. Un signe inversé et rien ne s'annule.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Étudions la dérivabilité de $g$ en un réel $a > 0$. Pour tout $h \\neq 0$ tel que $a + h > 0$ :

$$\\dfrac{g(a+h) - g(a)}{h} = \\dfrac{\\sqrt{a+h} - \\sqrt{a}}{h} = \\dfrac{(a+h) - a}{h(\\sqrt{a+h} + \\sqrt{a})} = \\dfrac{h}{h(\\sqrt{a+h} + \\sqrt{a})}$$

Puisque $h \\neq 0$, on simplifie par $h$ : $\\dfrac{g(a+h) - g(a)}{h} = \\dfrac{1}{\\sqrt{a+h} + \\sqrt{a}}$.

Par passage à la limite : $\\displaystyle\\lim_{h \\to 0} \\dfrac{1}{\\sqrt{a+h} + \\sqrt{a}} = \\dfrac{1}{2\\sqrt{a}}$.

La limite est un réel fini pour tout $a > 0$, donc $g$ est dérivable sur $]0\\ ;\\ +\\infty[$ et $g'(a) = \\dfrac{1}{2\\sqrt{a}}$.

*[Barème type BAC : taux 0,5 pt · conjuguée 1 pt · simplification 0,5 pt · limite et conclusion 1 pt — Total : 3 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Prends ton cahier de recherche, applique la méthode. Résultats finaux seulement pour vérification :

- **Exercice 1.** Soit $f(x) = x^2 - 4x$. Calcule $f'(3)$ par définition. *(Réponse : $f'(3) = 2$.)*
- **Exercice 2.** Soit $f(x) = 3x^2 + 5$. Écris l'équation de la tangente à $\\mathcal{C}_f$ au point d'abscisse $0$. *(Réponse : $y = 5$, car $f'(0) = 0$ et $f(0) = 5$.)*`,
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
            `Le nombre dérivé $f'(a)$ n'est pas une formule tombée du ciel : c'est la **vitesse de variation** de la courbe à l'instant $a$, exactement comme le prix du cacao à 8h30 précises.`,
            `📘 Vocabulaire officiel à maîtriser : taux de variation, dérivable en $a$, nombre dérivé, tangente.`,
            `Face à la forme $\\dfrac{0}{0}$, un seul objectif : faire disparaître le $h$ du dénominateur avant la limite. Polynôme → factorise ($h$) ; racine → conjuguée ; fraction → même dénominateur.`,
            `L'équation de la tangente au point d'abscisse $a$ : $y = f'(a)(x - a) + f(a)$ — toujours la même structure.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m1',
          titre: `Fil rouge`,
          contenu: `Tu sais maintenant calculer $f'(a)$ en **un** point, par définition. Mais recommencer ce calcul lourd pour chaque valeur de $a$ serait épuisant. Et si on trouvait une **formule générale**, valable pour tout $x$ d'un coup ? Cette formule, c'est la **fonction dérivée** — et c'est tout l'enjeu du **Module 2**. En route, Champion(ne) !`,
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
            `Je sais expliquer la différence entre vitesse moyenne et vitesse instantanée avec l'analogie du cacao.`,
            `J'utilise le vocabulaire officiel (taux de variation, dérivable, nombre dérivé, tangente) dans ma rédaction.`,
            `Je maîtrise les 4 étapes pour chasser le $h$ du dénominateur sans erreur de signe.`,
            `Je sais traiter une fonction avec racine grâce à l'expression conjuguée.`,
            `Je connais l'équation de la tangente et je sais la poser proprement sur copie.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m1',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Le coin est gâté. File vers le Module 2 la tête haute !`,
            `🟡 **3 ou 4** → Relis ⑤ La Descente et refais l'Exercice-Type 1 au propre sans regarder la correction.`,
            `🔴 **0 à 2** → Pas de panique, faut pas gnan. Reprends le ① Le Besoin depuis l'image du cacao — la compréhension vient avant la formule, toujours.`,
          ],
        },
      ],
    },
  ],
};
