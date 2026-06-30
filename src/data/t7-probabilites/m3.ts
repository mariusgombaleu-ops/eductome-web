import { Chapitre } from '../../types/course';

export const chapitreM3: Chapitre = {
  id: 't7-m3',
  titre: `Module 3 — Probabilités Conditionnelles`,
  duree: 28,
  niveau: 'MOYEN',
  xpGain: 30,
  objectifs: [
    `Calculer la probabilité d'un événement sachant qu'un autre s'est déjà réalisé`,
    `Construire et lire un arbre pondéré sans raturer ton brouillon`,
    `Énoncer la définition d'une probabilité conditionnelle et la formule des probabilités totales avec le vocabulaire officiel du BAC`,
    `Appliquer la formule des probabilités totales sans oublier de branches`,
    `Prouver que deux événements sont indépendants sans les confondre avec « incompatibles »`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, la moitié des élèves ont révisé. Si je choisis un élève au hasard parmi ceux qui ont eu la moyenne, la probabilité qu'il ait révisé, c'est $0{,}5$, non ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Pas si vite, Champion(ne) ! L'information « parmi ceux qui ont eu la moyenne » change tout. Ton univers n'est plus le lycée entier : c'est devenu un petit groupe très précis. Quand tu as une information supplémentaire avant ton calcul, tes chances s'ajustent. On ne regarde plus le problème avec les mêmes lunettes, on a réduit le champ des possibles. C'est exactement ça, une probabilité conditionnelle.`,
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
          contenu: `Reprends le tonton qui gratte ses tickets LONACI à Adjamé. Au départ, son univers, c'est l'énorme tas de tous les tickets vendus dans le pays. Sa chance de gagner est minuscule.

Mais imagine qu'on lui glisse une information secrète : « le ticket gagnant porte un numéro pair ». D'un coup, son monde rétrécit. Il n'a plus besoin de penser à tous les tickets, seulement aux tickets pairs. Son univers de calcul est devenu le petit tas des tickets pairs.

Sa nouvelle chance de gagner, ce n'est plus « gagnants sur tous les tickets ». C'est « gagnants pairs sur tickets pairs ». L'information a réduit l'univers, et la probabilité s'est recalculée dans ce monde réduit.

La phrase-pivot du module : **une probabilité conditionnelle, c'est recalculer ses chances dans un univers réduit par une information connue.**`,
        },
        {
          type: 'figure',
          id: 'fig-m3-1',
          src: '/images/t7/fig_M3_1.png',
          legende: `Sur une branche, on multiplie : la probabilité d'un chemin est le produit de ses pondérations.`,
          alt: `Arbre pondéré à trois machines d'usine avec leurs taux de pièces défectueuses.`,
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
          contenu: `On traduit le tas réduit du tonton en symboles.

- « le tas de tous les tickets » → l'univers global $\\Omega$.
- « l'information connue : numéro pair » → l'événement $B$ qui s'est réalisé.
- « ce que je vise : gagnant » → l'événement $A$.
- « gagnants pairs sur tickets pairs » → le rapport $\\dfrac{P(A \\cap B)}{P(B)}$.`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`La scène`, `Le symbole`, `Ce que ça signifie`],
          rows: [
            [`L'univers de départ`, `$\\Omega$`, `Tous les cas possibles`],
            [`L'information connue`, `$B$`, `L'événement déjà réalisé`],
            [`Ce qu'on vise`, `$A$`, `L'événement cherché`],
            [`La nouvelle chance, sachant $B$`, `$P_B(A)$`, `Probabilité de $A$ sachant $B$`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `On peut maintenant écrire la définition rigoureuse, Champion(ne).`,
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
          contenu: `Champion(ne), tu as l'image du tas réduit. La copie attend la notation exacte.

**Définition formelle.** Soit $B$ un événement de probabilité non nulle ($P(B) > 0$). La probabilité conditionnelle de $A$ **sachant** $B$ est :
$$P_B(A) = \\dfrac{P(A \\cap B)}{P(B)}.$$

**En langage courant.** C'est la chance de $A$ une fois qu'on sait que $B$ est arrivé : on se restreint au monde où $B$ est vrai.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Probabilité conditionnelle $P_B(A)$** — probabilité de $A$ sachant $B$ ; se note aussi $P(A/B)$.
- **Indépendance** — $A$ et $B$ sont indépendants si $P(A \\cap B) = P(A) \\times P(B)$.
- **Partition de l'univers** — événements deux à deux incompatibles dont la réunion est $\\Omega$.
- **Formule des probabilités totales** — somme des probabilités de tous les chemins menant à un même résultat.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Avant d'utiliser la formule des probabilités totales, le correcteur attend la phrase *« Les événements $M_1$, $M_2$, $M_3$ forment une partition de l'univers. »* Sans cette justification, la formule perd des points.`,
        },
        {
          type: 'figure',
          id: 'fig-m3-2',
          src: '/images/t7/fig_M3_2.png',
          legende: `$P(A) = P(B)\\,P_B(A) + P(\\overline{B})\\,P_{\\overline{B}}(A)$ : la somme de tous les chemins qui finissent en $A$.`,
          alt: `Arbre pondéré général à deux niveaux avec les deux chemins menant à A.`,
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
          titre: `Règle d'Or — Conditionnelles, multiplication, totales`,
          contenu: `**Probabilité conditionnelle** (avec $P(B) > 0$) :
$$P_B(A) = \\dfrac{P(A \\cap B)}{P(B)}.$$

**Formule de multiplication** (la même, réarrangée — c'est elle qu'on lit sur un chemin d'arbre) :
$$P(A \\cap B) = P(B) \\times P_B(A).$$

**Indépendance** de $A$ et $B$ :
$$P(A \\cap B) = P(A) \\times P(B) \\quad \\Longleftrightarrow \\quad P_B(A) = P(A).$$

**Formule des probabilités totales** (si $B$ et $\\overline{B}$ forment une partition) :
$$P(A) = P(B \\cap A) + P(\\overline{B} \\cap A) = P(B)\\,P_B(A) + P(\\overline{B})\\,P_{\\overline{B}}(A).$$`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Sur un arbre : **on MULTIPLIE le long d'un chemin** (on avance), **on ADDITIONNE entre les chemins** (on rassemble). C'est tout l'arbre en une phrase.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `$P_B(A)$ n'est pas $P_A(B)$. « Être malade sachant qu'on est positif » n'est pas « être positif sachant qu'on est malade ». L'univers de référence n'est pas le même.`,
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
          contenu: `C'est caché dans le français. Cherche : « sachant que », « parmi les », « si l'on choisit un… », ou une expérience décrite en deux étapes chronologiques (on tire une boule, **puis** une autre sans remettre la première). Si on te demande de « remonter le temps » ($P_D(M_2)$ après avoir tout calculé en avançant), c'est une conditionnelle inversée.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`La question de l'énoncé`, `Ce que tu cherches`, `La méthode`],
          rows: [
            [`Calculer $P(A \\cap B)$`, `L'intersection (le ET)`, `Multiplier sur un chemin de l'arbre`],
            [`Calculer $P(A)$ en bout d'arbre`, `Probabilité totale`, `Additionner tous les chemins finissant par $A$`],
            [`Calculer $P_A(B)$ (à l'envers)`, `Remonter le temps`, `$P_A(B) = \\dfrac{P(A \\cap B)}{P(A)}$`],
            [`Tester l'indépendance`, `Comparer`, `$P(A \\cap B)$ contre $P(A) \\times P(B)$`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure`,
          contenu: `**Étape 1.** Trace l'arbre complet : premier niveau = premier événement ($B$, $\\overline{B}$) ; second niveau = l'événement suivant ($A$, $\\overline{A}$).

**Étape 2.** Place les probabilités : simples au premier niveau, **conditionnelles** au second.

**Étape 3.** Applique la règle des nœuds : multiplier sur un chemin, additionner entre les chemins.

**Étape 4.** Pour une conditionnelle inversée, calcule d'abord l'intersection et la totale, puis fais le rapport. Conclus par une phrase.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `- **Somme à chaque nœud** : la somme des probabilités issues d'un même point vaut exactement $1$.
- **Encadrement** : toute probabilité finale est dans $\\left[\\,0\\ ;\\ 1\\,\\right]$.`,
        },
        {
          type: 'figure',
          id: 'fig-m3-3',
          src: '/images/t7/fig_M3_3.png',
          legende: `$P(T) = 0{,}135$ : la somme des deux chemins qui mènent à un test positif.`,
          alt: `Arbre pondéré d'un test de dépistage avec porteurs et non-porteurs.`,
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
            [`🟢 BASE`, `Tirage successif sans remise`, `L'urne change entre le 1er et le 2e tirage`, `Type 1`],
            [`🟡 MOYEN`, `Indépendance à prouver`, `« Les événements sont-ils indépendants ? »`, `Type 2`],
            [`🔴 BAC`, `Arbre + probabilités totales + inversée`, `Plusieurs machines / test de dépistage`, `Type 3`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Tirage sans remise.** Une urne contient $3$ boules rouges et $5$ bleues. On tire successivement et **sans remise** $2$ boules. Calcule $P(R_1 \\cap B_2)$ (rouge au premier tirage, bleue au second).`,
          etapes: [
            { name: `Diagnostic`, contenu: `Tirage sans remise : l'urne change → arbre pondéré, on multiplie sur le chemin.` },
            { name: `Étape 1`, contenu: `Au 1er tirage : $P(R_1) = \\dfrac{3}{8}$.` },
            { name: `Étape 2`, contenu: `Sachant $R_1$, il reste $2$ rouges et $5$ bleues (total $7$) : $P_{R_1}(B_2) = \\dfrac{5}{7}$.` },
          ],
          reponse: `$P(R_1 \\cap B_2) = \\dfrac{3}{8} \\times \\dfrac{5}{7} = \\dfrac{15}{56}$.`,
          conseil: `Garde tes fractions irréductibles tout du long : ne passe jamais aux décimaux en cours de route.`,
          piege: `Au second tirage, le total n'est plus $8$ mais $7$ : sans remise, on retire la boule déjà tirée.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Le tirage est sans remise : $P(R_1) = \\dfrac{3}{8}$ et, sachant $R_1$, $P_{R_1}(B_2) = \\dfrac{5}{7}$. Le chemin donne $P(R_1 \\cap B_2) = \\dfrac{3}{8} \\times \\dfrac{5}{7} = \\dfrac{15}{56}$.

*[Barème : arbre / probabilités : 1 pt · produit du chemin : 1 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Tester l'indépendance.** On donne $P(A) = 0{,}4$, $P(B) = 0{,}5$ et $P(A \\cap B) = 0{,}2$. Les événements $A$ et $B$ sont-ils indépendants ?`,
          etapes: [
            { name: `Diagnostic`, contenu: `Question d'indépendance : on compare $P(A \\cap B)$ à $P(A) \\times P(B)$.` },
            { name: `Étape 1`, contenu: `Calcule le produit : $P(A) \\times P(B) = 0{,}4 \\times 0{,}5 = 0{,}2$.` },
            { name: `Étape 2`, contenu: `Compare : $P(A \\cap B) = 0{,}2 = P(A) \\times P(B)$.` },
          ],
          reponse: `L'égalité est vérifiée : $A$ et $B$ sont indépendants.`,
          conseil: `Indépendant n'est pas incompatible. Incompatible voudrait dire $P(A \\cap B) = 0$ : ici l'intersection n'est pas vide, et pourtant ils sont indépendants.`,
          piege: `Ne conclus jamais « indépendants » sans calcul. Il faut montrer l'égalité $P(A \\cap B) = P(A) \\times P(B)$.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$P(A) \\times P(B) = 0{,}4 \\times 0{,}5 = 0{,}2$. Or $P(A \\cap B) = 0{,}2$. Comme $P(A \\cap B) = P(A) \\times P(B)$, les événements $A$ et $B$ sont indépendants.

*[Barème : produit : 1 pt · comparaison : 0,5 pt · conclusion : 0,5 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 3 — Les trois machines.** Dans une usine, trois machines $M_1$, $M_2$, $M_3$ produisent respectivement $50\\,\\%$, $30\\,\\%$ et $20\\,\\%$ des pièces. Parmi leur production, on trouve respectivement $2\\,\\%$, $3\\,\\%$ et $5\\,\\%$ de pièces défectueuses. On note $D$ « la pièce choisie est défectueuse ». **a)** Calcule $P(M_1 \\cap D)$. **b)** Montre que $P(D) = 0{,}029$. **c)** Sachant que la pièce est défectueuse, quelle est la probabilité qu'elle vienne de $M_3$ ?`,
          etapes: [
            { name: `Diagnostic`, contenu: `Plusieurs scénarios de départ formant une partition → probabilités totales, puis conditionnelle inversée.` },
            { name: `Étape 1`, contenu: `$P(M_1 \\cap D) = P(M_1) \\times P_{M_1}(D) = 0{,}50 \\times 0{,}02 = 0{,}01$.` },
            { name: `Étape 2`, contenu: `$P(M_2 \\cap D) = 0{,}30 \\times 0{,}03 = 0{,}009$ et $P(M_3 \\cap D) = 0{,}20 \\times 0{,}05 = 0{,}01$.` },
            { name: `Étape 3`, contenu: `On additionne les trois chemins : $P(D) = 0{,}01 + 0{,}009 + 0{,}01 = 0{,}029$.` },
            { name: `Étape 4`, contenu: `$P_D(M_3) = \\dfrac{P(M_3 \\cap D)}{P(D)} = \\dfrac{0{,}01}{0{,}029} = \\dfrac{10}{29} \\approx 0{,}34$.` },
          ],
          reponse: `$P(D) = 0{,}029$ et $P_D(M_3) = \\dfrac{10}{29} \\approx 0{,}34$.`,
          conseil: `Trace l'arbre complet au brouillon : trois branches au premier niveau, défectueuse / saine au second. Tu lis chaque chemin sans erreur.`,
          piege: `Pour la question c), on **remonte le temps** : on divise l'intersection par la totale $P(D)$, pas par $P(M_3)$.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite`,
          contenu: `a) $P(M_1 \\cap D) = P(M_1)\\,P_{M_1}(D) = 0{,}50 \\times 0{,}02 = 0{,}01$.
b) Les machines $M_1$, $M_2$, $M_3$ forment une partition de l'univers. D'après la formule des probabilités totales :
$P(D) = 0{,}50 \\times 0{,}02 + 0{,}30 \\times 0{,}03 + 0{,}20 \\times 0{,}05 = 0{,}01 + 0{,}009 + 0{,}01 = 0{,}029.$
c) $P_D(M_3) = \\dfrac{P(M_3 \\cap D)}{P(D)} = \\dfrac{0{,}01}{0{,}029} = \\dfrac{10}{29} \\approx 0{,}34$.

*[Barème : a) 0,75 pt · b) partition + totale : 1,5 pt · c) inversée : 1,25 pt — Total : 3,5 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Trace l'arbre avant tout calcul. Réponses finales seulement.

- **Exercice 1.** $P(B) = 0{,}4$ et $P_B(A) = 0{,}5$. Calcule $P(A \\cap B)$. *(Réponse : $0{,}2$, par multiplication sur le chemin.)*
- **Exercice 2.** $P(A) = 0{,}3$, $P(B) = 0{,}6$, $P(A \\cap B) = 0{,}2$. $A$ et $B$ sont-ils indépendants ? *(Réponse : non, car $P(A)\\times P(B) = 0{,}18 \\neq 0{,}2$.)*
- **Exercice 3.** Restaurant de Mariam : affluence $A$ avec $P(A) = 0{,}6$ ; si $P_A(B) = 0{,}7$, calcule $P(A \\cap B)$. *(Réponse : $0{,}42$.)*`,
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
            `Une conditionnelle, c'est recalculer ses chances dans un univers réduit par une information.`,
            `📘 Vocabulaire officiel : probabilité conditionnelle $P_B(A)$, indépendance, partition, probabilités totales.`,
            `$P_B(A) = \\dfrac{P(A \\cap B)}{P(B)}$ et $P(A \\cap B) = P(B)\\,P_B(A)$.`,
            `Sur l'arbre : multiplier sur un chemin, additionner entre les chemins.`,
            `Indépendant ($P(A \\cap B) = P(A)P(B)$) n'est pas incompatible ($P(A \\cap B) = 0$).`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m3',
          titre: `Fil rouge`,
          contenu: `Tu sais manipuler les arbres et les événements. Mais jusqu'ici, on parlait de « gagnant / perdant », « défectueux / sain » : du qualitatif. Et si on **mettait un nombre** sur chaque issue — un gain en francs, un nombre de succès ? On pourrait alors calculer un gain moyen, un risque. Bienvenue dans le monde des variables aléatoires : le Module 4.`,
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
            `Je sais traduire « sachant que » en notation $P_B(A)$.`,
            `J'emploie le vocabulaire officiel (conditionnelle, indépendance, partition, probabilités totales).`,
            `Sur un arbre, je multiplie le long d'un chemin et j'additionne entre les chemins.`,
            `Je justifie qu'une famille forme une partition avant la formule des totales.`,
            `Je distingue indépendant et incompatible.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m3',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Les arbres n'ont plus de secret. Direction Module 4.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 3 (les machines).`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : le tas réduit du tonton LONACI va t'éclairer.`,
          ],
        },
      ],
    },
  ],
};
