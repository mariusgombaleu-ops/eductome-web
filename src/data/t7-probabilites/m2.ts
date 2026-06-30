import { Chapitre } from '../../types/course';

export const chapitreM2: Chapitre = {
  id: 't7-m2',
  titre: `Module 2 — Vocabulaire & Équiprobabilité`,
  duree: 22,
  niveau: 'BASE',
  xpGain: 25,
  objectifs: [
    `Décrire l'univers d'une expérience aléatoire et lister ses issues`,
    `Traduire une phrase en événement et utiliser le « ET », le « OU », le contraire`,
    `Énoncer la définition d'une probabilité en situation d'équiprobabilité avec le vocabulaire officiel du BAC`,
    `Calculer une probabilité par le rapport « cas favorables sur cas possibles »`,
    `Appliquer les formules de la réunion et de l'événement contraire`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, le prof écrit $P(A) = \\dfrac{\\text{card}(A)}{\\text{card}(\\Omega)}$ et tout le monde hoche la tête. Mais moi je ne sais même pas ce que veulent dire ces mots : univers, événement, équiprobable. C'est quoi cette affaire de cartes ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Faut pas gnan, Champion(ne). Tu as raison de t'arrêter là : on ne peut pas calculer une chance si on ne sait pas nommer ce qu'on observe. « card », c'est juste le **nombre d'éléments** d'un ensemble. Avant toute formule, on va planter le décor : c'est quoi l'ensemble de tout ce qui peut arriver ? C'est quoi un événement ? Et quand est-ce qu'on a le droit de compter bêtement « cas favorables sur cas possibles » ? Une fois ce vocabulaire posé, le reste du tome coule tout seul.`,
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
          contenu: `Pense à un dé bien équilibré qu'on lance sur une table à la maison. Quand tu le jettes, six résultats sont possibles : $1, 2, 3, 4, 5, 6$. C'est l'ensemble de toutes les issues imaginables — on l'appelle l'univers.

Maintenant, comme le dé est honnête, aucune face n'est avantagée. La face $4$ a exactement la même chance de sortir que la face $1$. On dit que les issues sont **équiprobables** : elles pèsent toutes pareil. C'est ça, la situation rêvée du calcul de probabilité.

Du coup, calculer une chance devient un simple comptage. La probabilité d'« obtenir un nombre pair », c'est le nombre de faces paires ($2, 4, 6$, donc trois) divisé par le nombre total de faces (six) : $\\dfrac{3}{6} = \\dfrac{1}{2}$.

Attention quand même : ce comptage « favorables sur possibles » n'est valable **que** si toutes les issues ont le même poids. Un dé pipé casserait tout. La phrase-pivot du module, la voici : **en situation d'équiprobabilité, une probabilité est un rapport de comptage — cas favorables sur cas possibles.**`,
        },
        {
          type: 'figure',
          id: 'fig-m2-1',
          src: '/images/t7/fig_M2_1.png',
          legende: `$P(C \\cup V) = P(C) + P(V) - P(C \\cap V)$ : on ne compte la zone commune qu'une seule fois.`,
          alt: `Diagramme de Venn de deux instruments dans le conservatoire de musique.`,
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
          contenu: `On traduit le décor du dé et du conservatoire en symboles.

- « tout ce qui peut arriver » → l'univers $\\Omega$.
- « un résultat précis » → une issue (un élément de $\\Omega$).
- « une phrase qu'on peut vérifier » → un événement $A$ (une partie de $\\Omega$).
- « le nombre d'éléments » → le cardinal $\\text{card}(A)$.`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Le mot de tous les jours`, `Le symbole`, `Ce que ça désigne`],
          rows: [
            [`Tout ce qui peut arriver`, `$\\Omega$`, `L'univers de l'expérience`],
            [`Un résultat possible`, `une issue`, `Un élément de l'univers`],
            [`« obtenir un nombre pair »`, `événement $A$`, `Une partie de l'univers`],
            [`« A et B en même temps »`, `$A \\cap B$`, `L'intersection`],
            [`« A ou B »`, `$A \\cup B$`, `La réunion`],
            [`« pas A »`, `$\\overline{A}$`, `L'événement contraire`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `Le décor est posé. On peut formaliser le calcul.`,
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
          contenu: `Champion(ne), tu as l'image du dé honnête. La copie attend les termes exacts.

**Définition formelle.** On considère une expérience aléatoire d'univers fini $\\Omega$. Lorsque toutes les issues sont **équiprobables**, la probabilité d'un événement $A$ est :
$$P(A) = \\dfrac{\\text{card}(A)}{\\text{card}(\\Omega)} = \\dfrac{\\text{nombre de cas favorables}}{\\text{nombre de cas possibles}}.$$

**En langage courant.** Quand toutes les issues pèsent pareil, une probabilité se compte : favorables divisé par possibles.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Univers $\\Omega$** — l'ensemble de toutes les issues de l'expérience.
- **Événement** — une partie de l'univers ; **événement élémentaire** = une seule issue.
- **Équiprobabilité** — situation où toutes les issues ont la même probabilité.
- **Événements incompatibles** — $A \\cap B = \\varnothing$ ; ils ne peuvent pas se réaliser ensemble.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Avant d'utiliser $P(A) = \\dfrac{\\text{card}(A)}{\\text{card}(\\Omega)}$, le correcteur attend la phrase *« Comme on tire au hasard, il y a équiprobabilité. »* Sans cette justification, la formule n'est pas valable.`,
        },
        {
          type: 'figure',
          id: 'fig-m2-2',
          src: '/images/t7/fig_M2_2.png',
          legende: `Six barres de hauteur égale : c'est l'équiprobabilité. Compter les favorables suffit.`,
          alt: `Les six faces d'un dé surmontées de barres de même hauteur.`,
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
          titre: `Règle d'Or — Probabilité et opérations`,
          contenu: `**En cas d'équiprobabilité :**
$$P(A) = \\dfrac{\\text{card}(A)}{\\text{card}(\\Omega)}, \\qquad 0 \\leqslant P(A) \\leqslant 1, \\qquad P(\\Omega) = 1.$$

**Événement contraire :**
$$P(\\overline{A}) = 1 - P(A).$$

**Réunion de deux événements :**
$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B).$$

**Cas particulier — événements incompatibles** ($A \\cap B = \\varnothing$) :
$$P(A \\cup B) = P(A) + P(B).$$`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Pour « au moins un des deux instruments », pense réunion. Pour « exactement un des deux », c'est $P(A \\cup B) - P(A \\cap B)$ : la réunion moins la zone commune.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `N'additionne $P(A)$ et $P(B)$ directement que si les événements sont **incompatibles**. Sinon, tu comptes deux fois l'intersection — il faut la retrancher.`,
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
          contenu: `Tu es dans ce module dès qu'on te demande une probabilité « au hasard » sans information préalable, ou qu'on te parle d'« au moins un », « ou », « et », « ni l'un ni l'autre ». Repère le vocabulaire ensembliste caché dans le français de l'énoncé.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`La phrase de l'énoncé`, `Sa traduction`, `La formule`],
          rows: [
            [`« au moins un des deux »`, `$A \\cup B$`, `$P(A)+P(B)-P(A \\cap B)$`],
            [`« les deux à la fois »`, `$A \\cap B$`, `Donnée ou comptée directement`],
            [`« aucun des deux »`, `$\\overline{A \\cup B}$`, `$1 - P(A \\cup B)$`],
            [`« exactement un des deux »`, `$(A \\cup B)$ privé de $(A \\cap B)$`, `$P(A \\cup B) - P(A \\cap B)$`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure`,
          contenu: `**Étape 1.** Décris l'univers et vérifie l'équiprobabilité (« tirage au hasard »).

**Étape 2.** Nomme les événements par des lettres ($C$, $V$…) et écris ce qu'ils signifient.

**Étape 3.** Traduis la question en opération ensembliste ($\\cap$, $\\cup$, contraire).

**Étape 4.** Applique la formule, calcule, conclus par une phrase.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `- **Encadrement** : chaque probabilité trouvée doit être dans $\\left[\\,0\\ ;\\ 1\\,\\right]$.
- **Cohérence** : $P(A \\cap B) \\leqslant P(A)$ et $P(A \\cap B) \\leqslant P(B)$ (l'intersection est plus petite que chaque partie).`,
        },
        {
          type: 'figure',
          id: 'fig-m2-3',
          src: '/images/t7/fig_M2_3.png',
          legende: `Exactement un instrument = la réunion privée de la zone commune.`,
          alt: `Diagramme de Venn avec les zones « cordes seules » et « vent seul » coloriées.`,
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
            [`🟢 BASE`, `Probabilité par comptage`, `« on tire une carte / une boule au hasard »`, `Type 1`],
            [`🟡 MOYEN`, `Contraire « au moins un »`, `« au moins un » dans l'énoncé`, `Type 2`],
            [`🔴 BAC`, `Réunion et intersection (sondage)`, `Deux caractères croisés en pourcentages`, `Type 3`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Tirage d'une carte.** On tire au hasard une carte d'un jeu de $32$ cartes. Quelle est la probabilité d'obtenir un roi ?`,
          etapes: [
            { name: `Diagnostic`, contenu: `Tirage au hasard → équiprobabilité. On compte favorables sur possibles.` },
            { name: `Étape 1`, contenu: `Cas possibles : $\\text{card}(\\Omega) = 32$.` },
            { name: `Étape 2`, contenu: `Cas favorables : il y a $4$ rois, donc $\\text{card}(A) = 4$.` },
          ],
          reponse: `$P(A) = \\dfrac{4}{32} = \\dfrac{1}{8}$.`,
          conseil: `Écris toujours « au hasard, donc équiprobabilité » : c'est la justification qui autorise le comptage.`,
          piege: `N'oublie pas de simplifier la fraction : $\\dfrac{4}{32}$ devient $\\dfrac{1}{8}$.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `On tire au hasard, il y a donc équiprobabilité. $P(\\text{roi}) = \\dfrac{\\text{card}(A)}{\\text{card}(\\Omega)} = \\dfrac{4}{32} = \\dfrac{1}{8}$.

*[Barème : équiprobabilité : 0,5 pt · comptage : 1 pt · résultat simplifié : 0,5 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Au moins un succès.** Dans une classe, $P(\\overline{R}) = 0{,}3$ est la probabilité qu'un élève n'ait pas révisé. Quelle est la probabilité qu'il ait révisé ?`,
          etapes: [
            { name: `Diagnostic`, contenu: `On passe d'un événement à son contraire : formule du contraire.` },
            { name: `Étape 1`, contenu: `$P(R) = 1 - P(\\overline{R})$.` },
            { name: `Étape 2`, contenu: `$P(R) = 1 - 0{,}3 = 0{,}7$.` },
          ],
          reponse: `La probabilité qu'il ait révisé est $0{,}7$.`,
          conseil: `Dès que tu vois « au moins un » dans un futur exercice, ton cerveau doit crier « contraire ! ». On le réutilisera massivement au Module 5.`,
          piege: `Le contraire de « au moins un » est « aucun », pas « au plus un ». Lis bien.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `D'après la formule de l'événement contraire, $P(R) = 1 - P(\\overline{R}) = 1 - 0{,}3 = 0{,}7$.

*[Barème : formule : 1 pt · calcul : 1 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 3 — Le conservatoire de musique.** Un sondage dans un conservatoire révèle que $60\\,\\%$ des élèves jouent d'un instrument à cordes ($C$), $45\\,\\%$ d'un instrument à vent ($V$), et $10\\,\\%$ jouent des deux. On choisit un élève au hasard. **a)** Donne $P(C)$, $P(V)$, $P(C \\cap V)$. **b)** Calcule la probabilité qu'il joue d'au moins un des deux instruments. **c)** Calcule la probabilité qu'il joue d'un seul des deux.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Deux caractères croisés en pourcentages → réunion et intersection.` },
            { name: `Étape 1`, contenu: `$P(C) = 0{,}60$ ; $P(V) = 0{,}45$ ; $P(C \\cap V) = 0{,}10$.` },
            { name: `Étape 2`, contenu: `« Au moins un » $= C \\cup V$ : $P(C \\cup V) = 0{,}60 + 0{,}45 - 0{,}10 = 0{,}95$.` },
            { name: `Étape 3`, contenu: `« Un seul » $= P(C \\cup V) - P(C \\cap V) = 0{,}95 - 0{,}10 = 0{,}85$.` },
          ],
          reponse: `$P(C \\cup V) = 0{,}95$ et la probabilité de jouer d'un seul instrument est $0{,}85$.`,
          conseil: `Trace le diagramme de Venn au brouillon : tu lis directement les zones sans te tromper de formule.`,
          piege: `« Au moins un » n'est pas « un seul ». La réunion inclut ceux qui jouent des deux ; « un seul » les exclut.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite`,
          contenu: `a) D'après l'énoncé : $P(C) = 0{,}60$, $P(V) = 0{,}45$, $P(C \\cap V) = 0{,}10$.
b) « Au moins un » correspond à $C \\cup V$ : $P(C \\cup V) = P(C) + P(V) - P(C \\cap V) = 0{,}60 + 0{,}45 - 0{,}10 = 0{,}95$.
c) « Un seul des deux » correspond à $P(C \\cup V) - P(C \\cap V) = 0{,}95 - 0{,}10 = 0{,}85$.

*[Barème : a) 1 pt · b) réunion : 1,5 pt · c) un seul : 1 pt — Total : 3,5 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Trace le Venn au brouillon avant de te lancer. Réponses finales seulement.

- **Exercice 1.** On lance un dé équilibré. Probabilité d'obtenir un multiple de $3$ ? *(Réponse : $\\dfrac{2}{6} = \\dfrac{1}{3}$, faces $3$ et $6$.)*
- **Exercice 2.** $P(A) = 0{,}4$, $P(B) = 0{,}5$, $P(A \\cap B) = 0{,}1$. Calcule $P(A \\cup B)$. *(Réponse : $0{,}8$.)*
- **Exercice 3.** $P(A) = 0{,}25$. Calcule $P(\\overline{A})$. *(Réponse : $0{,}75$.)*`,
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
            `L'univers $\\Omega$, c'est tout ce qui peut arriver ; un événement est une partie de $\\Omega$.`,
            `📘 Vocabulaire officiel : univers, événement (élémentaire), équiprobabilité, événements incompatibles.`,
            `En équiprobabilité : $P(A) = \\dfrac{\\text{card}(A)}{\\text{card}(\\Omega)}$, après avoir justifié « au hasard ».`,
            `$P(\\overline{A}) = 1 - P(A)$ et $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.`,
            `« Au moins un » = réunion ; « un seul » = réunion moins l'intersection.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m2',
          titre: `Fil rouge`,
          contenu: `Jusqu'ici, toutes nos issues pesaient pareil et aucune information ne venait perturber le calcul. Mais que se passe-t-il quand on **apprend quelque chose** en cours de route — « sachant que la pièce vient de la machine 1 », « sachant que le test est positif » ? L'univers se réduit, les chances s'ajustent. C'est le grand classique du BAC : les probabilités conditionnelles et les arbres pondérés. Cap sur le Module 3.`,
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
            `Je sais décrire l'univers d'une expérience et compter ses issues.`,
            `J'emploie le vocabulaire officiel (univers, événement, équiprobabilité, incompatibles).`,
            `Je justifie « au hasard, donc équiprobabilité » avant d'utiliser le comptage.`,
            `J'applique correctement $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.`,
            `Je distingue « au moins un » de « un seul des deux ».`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m2',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Le décor est planté. Direction Module 3.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 3.`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : le dé honnête remet tout en place.`,
          ],
        },
      ],
    },
  ],
};
