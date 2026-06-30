import { Chapitre } from '../../types/course';

export const chapitreM1: Chapitre = {
  id: 't7-m1',
  titre: `Module 1 — Le Dénombrement`,
  duree: 25,
  niveau: 'BASE',
  xpGain: 25,
  objectifs: [
    `Reconnaître si l'ordre des objets compte ou non dans un tirage`,
    `Calculer une permutation, un arrangement et une combinaison sans confondre les trois`,
    `Énoncer les définitions de permutation, arrangement et combinaison avec le vocabulaire officiel du BAC`,
    `Utiliser le coefficient binomial $C_n^p$ et le Triangle de Pascal`,
    `Compter le nombre de tirages simultanés possibles dans une urne`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, dans mon sujet on me demande « de combien de façons peut-on tirer $2$ boules parmi $10$ ». Je veux faire $10 \\times 9 = 90$, mais la correction dit $45$. Pourquoi on divise par deux ? Je suis perdu(e).`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Excellente question, Champion(ne) — et tu touches le cœur de tout le tome. La vraie question, c'est : **est-ce que l'ordre compte ?** Tirer la boule rouge puis la bleue, ou la bleue puis la rouge, est-ce que ça fait deux tirages différents ou un seul ? En probabilités, avant de calculer la moindre chance, il faut savoir **compter** correctement le nombre de possibilités. C'est ça, le dénombrement. Et tout dépend d'une seule question : l'ordre, ça change quelque chose ou non ?`,
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
          contenu: `Imagine que tu arrives au food court de Cocody avec tes amis. Première situation : tu veux composer le **podium** de tes trois plats préférés — premier, deuxième, troisième. Là, l'ordre compte énormément : avoir le garba en numéro un et l'attiéké en numéro deux, ce n'est pas la même chose que l'inverse. Chaque rangement différent est un podium différent.

Deuxième situation : tu veux juste choisir **trois plats à emporter** dans le même sachet pour partager. Cette fois, l'ordre ne compte plus du tout. Garba-attiéké-alloco ou alloco-garba-attiéké, c'est exactement le même sachet, le même repas. Tu as choisi les mêmes trois plats.

Tu vois la différence ? Dans le premier cas, ranger dans un ordre précis crée de nouvelles possibilités. Dans le second, seul le **contenu** compte, pas la disposition.

C'est toute la clé du dénombrement : **quand l'ordre compte, on parle d'arrangement ; quand l'ordre ne compte pas, on parle de combinaison.**`,
        },
        {
          type: 'figure',
          id: 'fig-m1-1',
          src: '/images/t7/fig_M1_1.png',
          legende: `Mêmes trois plats : trois rangements distincts d'un côté (l'ordre compte → arrangement), un seul choix de l'autre (l'ordre ne compte pas → combinaison).`,
          alt: `Un podium ordonné à gauche, un sachet en vrac à droite, avec les mêmes trois plats.`,
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
          contenu: `On traduit les scènes du food court en langage de comptage.

- « ranger TOUS les objets dans un ordre » → permutation → on note $P_n = n!$.
- « choisir $p$ objets parmi $n$ EN TENANT compte de l'ordre » → arrangement → $A_n^p$.
- « choisir $p$ objets parmi $n$ SANS tenir compte de l'ordre » → combinaison → $C_n^p$.`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène du quartier`, `Le mot mathématique`, `Ce que ça compte`],
          rows: [
            [`Ranger mes $n$ plats dans un ordre complet`, `Permutation $P_n$`, `Tous les rangements possibles`],
            [`Composer un podium de $p$ plats (ordre)`, `Arrangement $A_n^p$`, `Les choix ordonnés de $p$ parmi $n$`],
            [`Remplir un sachet de $p$ plats (sans ordre)`, `Combinaison $C_n^p$`, `Les choix non ordonnés de $p$ parmi $n$`],
            [`Tirer $p$ boules simultanément dans une urne`, `Combinaison $C_n^p$`, `Tous les groupes possibles de $p$ boules`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `Trois mots, trois formules, Champion(ne). On les pose proprement.`,
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
          contenu: `Champion(ne), tu as l'image du podium et du sachet. La copie attend les mots exacts.

**Définition formelle.** Soit un ensemble de $n$ objets distincts.
Une **permutation** est un rangement ordonné des $n$ objets : il y en a $P_n = n!$.
Un **arrangement** de $p$ objets parmi $n$ est une liste **ordonnée** de $p$ objets distincts : $A_n^p = \\dfrac{n!}{(n-p)!}$.
Une **combinaison** de $p$ objets parmi $n$ est un sous-ensemble **non ordonné** de $p$ objets distincts : $C_n^p = \\dfrac{n!}{p!\\,(n-p)!}$.

**En langage courant.** Permutation = je range tout ; arrangement = je choisis $p$ et l'ordre compte ; combinaison = je choisis $p$ et l'ordre ne compte pas.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Permutation** — rangement de tous les éléments ; $P_n = n!$.
- **Arrangement $A_n^p$** — choix ordonné de $p$ éléments parmi $n$ (avec ordre, sans répétition).
- **Combinaison $C_n^p$** — choix non ordonné de $p$ éléments parmi $n$ ; aussi noté $\\dbinom{n}{p}$.
- **Tirage simultané** — tirage de plusieurs objets en même temps : l'ordre ne compte pas, donc combinaison.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend que tu justifies ton choix. La phrase juste : *« Le tirage est simultané, l'ordre n'intervient pas : on dénombre par une combinaison $C_n^p$. »*`,
        },
        {
          type: 'figure',
          id: 'fig-m1-2',
          src: '/images/t7/fig_M1_2.png',
          legende: `Chaque nombre est la somme des deux du dessus : le Triangle de Pascal fabrique tous les $C_n^p$ sans calculatrice.`,
          alt: `Les six premières lignes du Triangle de Pascal.`,
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
          titre: `Règle d'Or — Les trois formules du dénombrement`,
          contenu: `**Permutation** (ranger les $n$ objets) :
$$P_n = n! = n \\times (n-1) \\times \\cdots \\times 2 \\times 1.$$

**Arrangement** (choisir $p$ parmi $n$, l'ordre compte) :
$$A_n^p = \\dfrac{n!}{(n-p)!} = n \\times (n-1) \\times \\cdots \\times (n-p+1).$$

**Combinaison** (choisir $p$ parmi $n$, l'ordre ne compte pas) :
$$C_n^p = \\dfrac{A_n^p}{p!} = \\dfrac{n!}{p!\\,(n-p)!}.$$

**Propriétés utiles du coefficient binomial :**
$$C_n^0 = C_n^n = 1, \\qquad C_n^1 = n, \\qquad C_n^p = C_n^{\\,n-p}, \\qquad C_n^p = C_{n-1}^{\\,p-1} + C_{n-1}^{\\,p}.$$`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Pour calculer $C_n^p$ à la main, simplifie **avant** de multiplier. Pour $C_5^2 = \\dfrac{5 \\times 4}{2 \\times 1} = 10$ : on déroule le haut sur $p$ facteurs seulement, et on divise par $p!$.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Ne confonds pas arrangement et combinaison. Le lien à retenir : $A_n^p = C_n^p \\times p!$. La combinaison, c'est l'arrangement « débarrassé » des $p!$ ordres possibles d'un même groupe.`,
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
          contenu: `Tout se joue sur deux questions à poser à l'énoncé. **Première question : l'ordre compte-t-il ?** Cherche les mots « classement », « podium », « successivement », « le premier puis le second » (ordre → arrangement) ; ou « simultanément », « en même temps », « une poignée », « un groupe », « une équipe » (sans ordre → combinaison). **Deuxième question : prend-on tous les objets ou seulement une partie ?** Tous → permutation ; une partie → arrangement ou combinaison.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Si tu vois…`, `L'ordre…`, `L'outil`],
          rows: [
            [`« ranger les $n$ personnes en file »`, `compte, on prend tout`, `Permutation $P_n = n!$`],
            [`« un podium / un classement de $p$ »`, `compte, on prend une partie`, `Arrangement $A_n^p$`],
            [`« tirage simultané de $p$ boules »`, `ne compte pas`, `Combinaison $C_n^p$`],
            [`« une équipe / un comité de $p$ »`, `ne compte pas`, `Combinaison $C_n^p$`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure`,
          contenu: `**Étape 1.** Repère $n$ (le nombre total d'objets disponibles) et $p$ (le nombre qu'on choisit).

**Étape 2.** Pose la question de l'ordre, et justifie-la par une phrase sur la copie.

**Étape 3.** Choisis la formule : $P_n$, $A_n^p$ ou $C_n^p$, et écris-la littéralement.

**Étape 4.** Simplifie les factorielles avant de calculer, puis conclus par une phrase.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `- **Cohérence de taille** : on doit toujours avoir $p \\leqslant n$. Si $p > n$, le résultat est $0$ (impossible).
- **Ordre de grandeur** : une combinaison est toujours plus petite qu'un arrangement de mêmes $n$ et $p$ (puisque $A_n^p = p! \\times C_n^p$). Si tu trouves l'inverse, recommence.`,
        },
        {
          type: 'figure',
          id: 'fig-m1-3',
          src: '/images/t7/fig_M1_3.png',
          legende: `Tirer $2$ boules en même temps : $C_4^2 = 6$ groupes possibles, l'ordre ne compte pas.`,
          alt: `Une urne de 4 boules et les 6 paires possibles d'un tirage simultané de 2 boules.`,
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
            [`🟢 BASE`, `Calcul direct de $C_n^p$`, `On demande « de combien de façons choisir »`, `Type 1`],
            [`🟡 MOYEN`, `Arrangement contre combinaison`, `« podium / classement » ou « groupe »`, `Type 2`],
            [`🔴 BAC`, `Tirage simultané dans une urne`, `« on tire simultanément $p$ boules »`, `Type 3`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Choisir un comité.** Une classe compte $8$ élèves. On veut former un comité de $3$ élèves (sans rôle particulier). Combien de comités différents peut-on former ?`,
          etapes: [
            { name: `Diagnostic`, contenu: `Un comité « sans rôle » : l'ordre ne compte pas. C'est une combinaison $C_8^3$.` },
            { name: `Étape 1`, contenu: `$C_8^3 = \\dfrac{8!}{3!\\,5!} = \\dfrac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1}$.` },
            { name: `Étape 2`, contenu: `$= \\dfrac{336}{6} = 56$.` },
          ],
          reponse: `On peut former $56$ comités différents.`,
          conseil: `Simplifie le haut sur $3$ facteurs seulement ($8 \\times 7 \\times 6$), divise par $3! = 6$ : pas besoin de calculer $8!$ en entier.`,
          piege: `Ne fais pas $8 \\times 7 \\times 6 = 336$ tout seul : ce serait un arrangement $A_8^3$ (avec ordre). Le comité n'a pas d'ordre, on divise par $3!$.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Le comité est choisi sans tenir compte de l'ordre : on dénombre par une combinaison. $C_8^3 = \\dfrac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$. On peut former $56$ comités différents.

*[Barème : justification (ordre) : 1 pt · formule posée : 1 pt · résultat : 1 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Podium ou délégation ?** $6$ athlètes participent à une finale. **a)** Combien de podiums (or, argent, bronze) sont possibles ? **b)** Combien de délégations de $3$ athlètes (sans distinction) peut-on former ?`,
          etapes: [
            { name: `Diagnostic`, contenu: `**a)** Un podium est ordonné → arrangement $A_6^3$. **b)** Une délégation n'est pas ordonnée → combinaison $C_6^3$.` },
            { name: `Étape 1`, contenu: `$A_6^3 = 6 \\times 5 \\times 4 = 120$.` },
            { name: `Étape 2`, contenu: `$C_6^3 = \\dfrac{A_6^3}{3!} = \\dfrac{120}{6} = 20$.` },
          ],
          reponse: `Il y a $120$ podiums possibles et $20$ délégations possibles.`,
          conseil: `Calcule d'abord l'arrangement, puis divise par $p!$ pour la combinaison : tu réutilises le même calcul.`,
          piege: `« Or, argent, bronze » impose un ordre : c'est un arrangement, pas une combinaison. Le mot « podium » doit faire clignoter « ordre ».`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `a) Le podium est ordonné (or, argent, bronze) : $A_6^3 = 6 \\times 5 \\times 4 = 120$ podiums.
b) La délégation n'est pas ordonnée : $C_6^3 = \\dfrac{120}{3!} = 20$ délégations.

*[Barème : a) arrangement : 1,5 pt · b) combinaison : 1,5 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 3 — Tirage simultané dans une urne.** Une urne contient $10$ boules indiscernables au toucher : $4$ rouges et $6$ blanches. On tire au hasard et **simultanément** $2$ boules. **a)** Combien de tirages de $2$ boules sont possibles ? **b)** Combien de tirages contiennent exactement $2$ boules rouges ? **c)** Combien contiennent exactement $1$ rouge et $1$ blanche ?`,
          etapes: [
            { name: `Diagnostic`, contenu: `Tirage simultané : l'ordre ne compte pas, on dénombre par des combinaisons.` },
            { name: `Étape 1`, contenu: `Nombre total de tirages : $C_{10}^2 = \\dfrac{10 \\times 9}{2} = 45$.` },
            { name: `Étape 2`, contenu: `Tirages de $2$ rouges (parmi $4$) : $C_4^2 = \\dfrac{4 \\times 3}{2} = 6$.` },
            { name: `Étape 3`, contenu: `$1$ rouge (parmi $4$) **et** $1$ blanche (parmi $6$) : on multiplie les choix, $C_4^1 \\times C_6^1 = 4 \\times 6 = 24$.` },
          ],
          reponse: `$45$ tirages possibles ; $6$ avec $2$ rouges ; $24$ avec une de chaque couleur.`,
          conseil: `« Telle couleur ET telle couleur » → on **multiplie** les combinaisons de chaque catégorie. C'est le principe qu'on réutilisera pour les variables aléatoires au Module 4.`,
          piege: `Pour « $1$ rouge et $1$ blanche », ne fais pas $C_{10}^2$ : il faut choisir séparément dans chaque couleur, puis multiplier.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Le tirage est simultané, l'ordre n'intervient pas : on dénombre par des combinaisons.
a) Nombre total : $C_{10}^2 = \\dfrac{10 \\times 9}{2} = 45$.
b) Deux rouges parmi quatre : $C_4^2 = 6$.
c) Une rouge et une blanche : $C_4^1 \\times C_6^1 = 4 \\times 6 = 24$.

*[Barème : a) total : 1 pt · b) deux rouges : 1 pt · c) une de chaque : 1,5 pt — Total : 3,5 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Pose toujours la question de l'ordre avant de calculer. Réponses finales seulement.

- **Exercice 1.** De combien de façons peut-on choisir $2$ délégués parmi $5$ élèves ? *(Réponse : $C_5^2 = 10$.)*
- **Exercice 2.** De combien de façons peut-on ranger $4$ livres distincts sur une étagère ? *(Réponse : $P_4 = 4! = 24$.)*
- **Exercice 3.** Dans une urne de $7$ boules dont $3$ vertes, combien de tirages simultanés de $2$ boules donnent $2$ vertes ? *(Réponse : $C_3^2 = 3$.)*`,
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
            `La question reine : **l'ordre compte-t-il ?** Oui → arrangement ; non → combinaison.`,
            `📘 Vocabulaire officiel : permutation $P_n$, arrangement $A_n^p$, combinaison $C_n^p$, tirage simultané.`,
            `Les formules : $P_n = n!$, $A_n^p = \\dfrac{n!}{(n-p)!}$, $C_n^p = \\dfrac{n!}{p!\\,(n-p)!}$.`,
            `Le lien : $A_n^p = C_n^p \\times p!$ ; le Triangle de Pascal fabrique les $C_n^p$.`,
            `« ET » entre deux catégories → on multiplie les combinaisons.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m1',
          titre: `Fil rouge`,
          contenu: `Tu sais maintenant compter le nombre total de possibilités. Mais compter, ce n'est pas encore calculer une chance. Au Module 2, on va se servir de ce comptage pour répondre à la vraie question : quand toutes les issues ont le même poids, quelle est la probabilité d'un événement ? On entre dans le vocabulaire de l'équiprobabilité.`,
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
            `Je sais décider si l'ordre compte ou non dans un énoncé.`,
            `J'emploie le vocabulaire officiel (permutation, arrangement $A_n^p$, combinaison $C_n^p$, tirage simultané).`,
            `Je calcule $C_n^p$ en simplifiant les factorielles avant de multiplier.`,
            `Je multiplie les combinaisons quand je choisis « une de chaque catégorie ».`,
            `Je vérifie que $p \\leqslant n$ et qu'une combinaison est plus petite que l'arrangement correspondant.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m1',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Tu comptes comme un caïman. Direction Module 2.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 3.`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : le podium et le sachet vont tout débloquer.`,
          ],
        },
      ],
    },
  ],
};
