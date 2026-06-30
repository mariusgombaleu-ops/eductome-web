import { Chapitre } from '../../types/course';

export const chapitreM5: Chapitre = {
  id: 't7-m5',
  titre: `Module 5 — La Loi Binomiale et le Schéma de Bernoulli`,
  duree: 28,
  niveau: 'BAC',
  xpGain: 35,
  objectifs: [
    `Identifier les conditions indispensables pour utiliser une loi binomiale`,
    `Calculer la probabilité d'avoir exactement $k$ succès sans oublier le coefficient binomial`,
    `Énoncer le schéma de Bernoulli et la loi binomiale avec le vocabulaire officiel du BAC`,
    `Contourner les calculs interminables grâce à l'événement contraire`,
    `Calculer l'espérance et la variance en une seule ligne`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, on me dit qu'un joueur réussit son lancer franc $8$ fois sur $10$, et qu'il tire $6$ fois. On me demande la probabilité qu'il marque exactement $5$ paniers. Je fais un arbre à $6$ niveaux ? Ça va me prendre la journée !`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Faut pas gnan, Champion(ne) — surtout, pas d'arbre géant. Quand on répète la **même** épreuve, avec deux issues (succès / échec), un grand nombre de fois et de façon indépendante, il existe une formule toute faite. Pas besoin de dessiner $64$ chemins. C'est la reine des probabilités au BAC : la loi binomiale. Une formule, et c'est plié.`,
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
          contenu: `Pense à ce joueur de basket qui s'entraîne aux lancers francs sur le terrain de Marcory. Chaque lancer, c'est la même action, répétée à l'identique. Et chaque lancer n'a que deux issues : panier (succès) ou raté (échec). Sa main ne « se souvient » pas du lancer précédent : qu'il ait marqué ou raté, le lancer suivant repart avec la même chance. Les tirs sont indépendants.

Quand tu réunis ces trois ingrédients — même épreuve, deux issues, indépendance — tu as ce qu'on appelle un schéma de Bernoulli répété. La question naturelle devient : sur $6$ lancers, combien vais-je marquer de paniers ? Ce nombre de succès, c'est une variable aléatoire bien particulière.

Le génie de la chose, c'est qu'on n'a pas besoin de tout détailler. Le coefficient binomial $C_n^k$ — que tu as appris au Module 1 — compte automatiquement de combien de façons les $k$ succès peuvent se répartir parmi les $n$ tirs.

La phrase-pivot : **répéter la même épreuve « succès / échec » de façon indépendante, c'est le terrain de la loi binomiale ; le coefficient $C_n^k$ compte les chemins à ta place.**`,
        },
        {
          type: 'figure',
          id: 'fig-m5-1',
          src: '/images/t7/fig_M5_1.png',
          legende: `Chaque répétition est identique : $P(X=k) = C_n^k\\, p^k (1-p)^{n-k}$ rassemble tous les chemins à $k$ succès.`,
          alt: `Arbre d'un schéma de Bernoulli à trois répétitions, chaque nœud succès ou échec.`,
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
          contenu: `On traduit le terrain de basket en symboles.

- « un lancer : panier ou raté » → une épreuve de Bernoulli (succès $S$, échec $\\overline{S}$).
- « la chance de marquer » → $p = P(S)$ ; la chance de rater → $1 - p$.
- « on répète $6$ lancers indépendants » → $n$ répétitions identiques et indépendantes.
- « le nombre de paniers » → la variable $X$ qui compte les succès.`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`La scène du terrain`, `Le symbole`, `Ce que ça désigne`],
          rows: [
            [`Un lancer (panier/raté)`, `épreuve de Bernoulli`, `Deux issues : $S$ et $\\overline{S}$`],
            [`La chance de marquer`, `$p$`, `Probabilité du succès`],
            [`Le nombre de lancers`, `$n$`, `Nombre de répétitions`],
            [`Le nombre de paniers`, `$X$`, `Variable de comptage des succès`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `On peut poser la loi officielle.`,
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
          contenu: `Champion(ne), tu as l'image du terrain. La copie attend la justification mot pour mot.

**Définition formelle.** On répète $n$ fois, de façon **identique et indépendante**, une épreuve de Bernoulli de paramètre $p$ (probabilité du succès). La variable $X$ qui compte le nombre de succès suit la **loi binomiale** de paramètres $n$ et $p$, notée $\\mathcal{B}(n\\,;\\,p)$, et :
$$P(X = k) = C_n^k\\, p^k (1-p)^{n-k}, \\quad \\text{pour } k \\in \\{0, 1, \\dots, n\\}.$$

**En langage courant.** $X$ compte les succès sur $n$ tirs « pile ou face » indépendants.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Épreuve de Bernoulli** — expérience à deux issues : succès (proba $p$) et échec (proba $1-p$).
- **Schéma de Bernoulli** — répétition de $n$ épreuves identiques et indépendantes.
- **Loi binomiale $\\mathcal{B}(n\\,;\\,p)$** — loi du nombre de succès $X$.
- **Paramètres $n$ et $p$** — nombre de répétitions et probabilité du succès.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur exige la justification : *« L'épreuve a deux issues, elle est répétée $n$ fois de façon identique et indépendante : $X$ suit la loi binomiale $\\mathcal{B}(n\\,;\\,p)$. »* Sans cette phrase, les points de la loi tombent.`,
        },
        {
          type: 'figure',
          id: 'fig-m5-2',
          src: '/images/t7/fig_M5_2.png',
          legende: `Avec $p = 0{,}8$, la distribution penche vers les valeurs élevées : les nombreux succès sont les plus probables.`,
          alt: `Diagramme en barres de la loi binomiale B(6 ; 0,8).`,
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
          titre: `Règle d'Or — La loi binomiale`,
          contenu: `**Probabilité d'exactement $k$ succès :**
$$P(X = k) = C_n^k\\, p^k (1-p)^{n-k}.$$

**Espérance** (nombre moyen de succès) :
$$E(X) = np.$$

**Variance et écart-type :**
$$V(X) = np(1-p), \\qquad \\sigma(X) = \\sqrt{np(1-p)}.$$`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Une fois la loi justifiée, $E(X) = np$ remplace tout le grand tableau de la loi de probabilité. Une seule ligne au lieu de sept colonnes.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `N'écris jamais $p^k(1-p)^{n-k}$ tout seul : le coefficient $C_n^k$ est **obligatoire** en tête de formule. C'est lui qui compte les façons d'obtenir les $k$ succès.`,
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
          contenu: `Les mots qui annoncent la binomiale : « on répète $n$ fois de façon indépendante », « avec remise », « succès / échec », « probabilité $p$ à chaque fois ». Le mot « au moins » doit faire clignoter « événement contraire ».`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Ce qu'on te demande`, `Traduction`, `La méthode`],
          rows: [
            [`Exactement $k$ succès`, `$P(X=k)$`, `Formule directe avec $C_n^k$`],
            [`Au moins 1 succès`, `$P(X \\geqslant 1)$`, `Par le contraire : $1 - P(X=0)$`],
            [`Au plus 2 succès`, `$P(X \\leqslant 2)$`, `$P(X=0)+P(X=1)+P(X=2)$`],
            [`Nombre moyen de succès`, `$E(X)$`, `$E(X) = np$, une seule ligne`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure`,
          contenu: `**Étape 1.** Justifie la loi : deux issues, $n$ répétitions identiques et indépendantes. Écris-le noir sur blanc.

**Étape 2.** Identifie les paramètres $n$ et $p$.

**Étape 3.** Précise que $X$ prend les valeurs entières de $0$ à $n$.

**Étape 4.** Applique la formule de $P(X=k)$, ou passe par le contraire si le calcul est long. Conclus.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `- **Encadrement** : chaque $P(X=k)$ est dans $\\left[\\,0\\ ;\\ 1\\,\\right]$.
- **Cohérence de l'espérance** : $E(X) = np$ doit être comprise entre $0$ et $n$.`,
        },
        {
          type: 'text',
          id: 'b-code',
          titre: `💻 Le Coin du Code — La simulation de Monte-Carlo`,
          contenu: `Au BAC, tu admets la formule $P(X=k) = C_n^k\\, p^k (1-p)^{n-k}$. Cet algorithme te la **prouve par l'expérience** : il rejoue des milliers de fois le schéma de Bernoulli et compte la fréquence réelle de $k$ succès. C'est la méthode de Monte-Carlo — on remplace le calcul exact par un très grand nombre de tirages au hasard.

\`\`\`python
import random

def monte_carlo_binomiale(n, p, k, N=100000):
    # n epreuves de Bernoulli, repetees N fois ; on estime P(X = k)
    compte = 0
    for _ in range(N):
        succes = 0
        for _ in range(n):
            if random.random() < p:   # un tirage : succes avec probabilite p
                succes += 1
        if succes == k:               # on a obtenu exactement k succes
            compte += 1
    return compte / N                 # frequence observee de l'evenement X = k

# Exemple : basket, n = 6 lancers, p = 0,8, on vise k = 5 paniers
estimation = monte_carlo_binomiale(6, 0.8, 5)
print(estimation)        # -> environ 0.393, tres proche de la valeur theorique
\`\`\``,
        },
        {
          type: 'tip',
          id: 'tip-code',
          titre: `Le message du Grand Frère`,
          contenu: `La formule annonce $P(X=5) = C_6^5 \\times 0{,}8^5 \\times 0{,}2 \\approx 0{,}393$. L'ordinateur, lui, ne connaît pas la formule : il tire $100\\,000$ séries de $6$ lancers et compte. Et il retombe sur $0{,}393$. C'est la preuve vivante que la loi binomiale décrit vraiment le hasard répété, Champion(ne). Plus $N$ est grand, plus la fréquence observée colle à la probabilité théorique.`,
        },
        {
          type: 'figure',
          id: 'fig-m5-3',
          src: '/images/t7/fig_M5_3.png',
          legende: `Plus on simule, plus l'estimation Monte-Carlo se cale sur la valeur exacte de la loi binomiale.`,
          alt: `Courbe de la fréquence estimée qui converge vers la probabilité théorique.`,
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
            [`🟢 BASE`, `Exactement $k$ succès`, `« exactement $k$ » avec $n$ répétitions`, `Type 1`],
            [`🟡 MOYEN`, `Au moins un, par le contraire`, `« au moins un » défaut / succès`, `Type 2`],
            [`🔴 BAC`, `Justification + $E(X)$ + cumul`, `Lancers francs / production en série`, `Type 3`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Exactement k succès.** Un tireur atteint sa cible avec une probabilité $0{,}8$. Il tire $4$ fois de façon indépendante. Soit $X$ le nombre de cibles atteintes. Calcule $P(X = 3)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Répétition identique et indépendante, deux issues : loi binomiale $\\mathcal{B}(4\\,;\\,0{,}8)$.` },
            { name: `Étape 1`, contenu: `$P(X=3) = C_4^3 \\times 0{,}8^3 \\times 0{,}2^{1}$.` },
            { name: `Étape 2`, contenu: `$C_4^3 = 4$, $0{,}8^3 = 0{,}512$, donc $P(X=3) = 4 \\times 0{,}512 \\times 0{,}2$.` },
          ],
          reponse: `$P(X = 3) = 0{,}4096$.`,
          conseil: `Pose le coefficient $C_4^3$ en premier : c'est l'oubli le plus sanctionné.`,
          piege: `L'exposant de $(1-p)$ est $n - k = 4 - 3 = 1$, pas $4$. Compte bien les échecs.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$X$ suit $\\mathcal{B}(4\\,;\\,0{,}8)$. $P(X=3) = C_4^3 \\times 0{,}8^3 \\times 0{,}2 = 4 \\times 0{,}512 \\times 0{,}2 = 0{,}4096$.

*[Barème : formule avec $C_4^3$ : 1 pt · calcul : 1 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Au moins un défaut.** Une usine produit des stylos ; la probabilité qu'un stylo soit défectueux est $0{,}1$. On prélève $8$ stylos de façon indépendante. Soit $X$ le nombre de stylos défectueux. Calcule la probabilité qu'**au moins un** stylo soit défectueux (arrondi à $10^{-2}$).`,
          etapes: [
            { name: `Diagnostic`, contenu: `« Au moins un » → événement contraire « aucun ». Loi $\\mathcal{B}(8\\,;\\,0{,}1)$.` },
            { name: `Étape 1`, contenu: `$P(X \\geqslant 1) = 1 - P(X = 0)$.` },
            { name: `Étape 2`, contenu: `$P(X = 0) = C_8^0 \\times 0{,}1^0 \\times 0{,}9^8 = 0{,}9^8 \\approx 0{,}4305$.` },
          ],
          reponse: `$P(X \\geqslant 1) = 1 - 0{,}4305 \\approx 0{,}57$.`,
          conseil: `« Au moins un » se traite presque toujours par le contraire : un seul calcul $P(X=0)$ au lieu d'une longue somme.`,
          piege: `Le contraire de « au moins un » est « aucun » ($X = 0$), pas « un seul ».`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$X$ suit $\\mathcal{B}(8\\,;\\,0{,}1)$. $P(X \\geqslant 1) = 1 - P(X=0) = 1 - 0{,}9^8 \\approx 1 - 0{,}43 = 0{,}57$.

*[Barème : passage au contraire : 1 pt · $P(X=0)$ : 1 pt · conclusion : 0,5 pt — Total : 2,5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 3 — Les lancers francs.** Un basketteur réussit un lancer franc avec la probabilité $0{,}8$ ; les lancers sont indépendants. Il effectue $6$ lancers. Soit $X$ le nombre de lancers réussis. **a)** Justifie que $X$ suit une loi binomiale dont tu préciseras les paramètres. **b)** Calcule $E(X)$ et interprète. **c)** Calcule la probabilité qu'il réussisse au moins $5$ lancers (arrondi à $10^{-2}$).`,
          etapes: [
            { name: `Diagnostic`, contenu: `Répétition identique et indépendante à deux issues → binomiale ; « au moins $5$ » → somme courte ($k = 5$ et $k = 6$).` },
            { name: `Étape 1`, contenu: `Chaque lancer a deux issues (réussi / raté, $p = 0{,}8$), répété $6$ fois de façon identique et indépendante : $X$ suit $\\mathcal{B}(6\\,;\\,0{,}8)$.` },
            { name: `Étape 2`, contenu: `$E(X) = np = 6 \\times 0{,}8 = 4{,}8$ : sur $6$ lancers, il réussit en moyenne $4{,}8$ paniers.` },
            { name: `Étape 3`, contenu: `$P(X \\geqslant 5) = P(X=5) + P(X=6)$, avec $P(X=5) = C_6^5 \\times 0{,}8^5 \\times 0{,}2 \\approx 0{,}3932$ et $P(X=6) = 0{,}8^6 \\approx 0{,}2621$.` },
          ],
          reponse: `$P(X \\geqslant 5) \\approx 0{,}3932 + 0{,}2621 = 0{,}66$.`,
          conseil: `Quand « au moins $k$ » est proche de $n$, la somme directe est plus courte que le contraire. Ici, deux termes suffisent.`,
          piege: `Ne confonds pas « au moins $5$ » ($X = 5$ ou $6$) avec « exactement $5$ ». Lis l'inégalité.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite`,
          contenu: `a) Chaque lancer a deux issues, $p = 0{,}8$, répété $6$ fois de manière identique et indépendante : $X$ suit $\\mathcal{B}(6\\,;\\,0{,}8)$.
b) $E(X) = 6 \\times 0{,}8 = 4{,}8$ : en moyenne $4{,}8$ lancers réussis sur $6$.
c) $P(X \\geqslant 5) = C_6^5 \\times 0{,}8^5 \\times 0{,}2 + 0{,}8^6 \\approx 0{,}39 + 0{,}26 = 0{,}66$.

*[Barème : a) justification : 1 pt · b) $E(X)$ + interprétation : 1 pt · c) cumul : 1,5 pt — Total : 3,5 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Justifie toujours la loi avant la formule. Réponses finales seulement.

- **Exercice 1.** $X \\sim \\mathcal{B}(5\\,;\\,0{,}8)$. Calcule $P(X = 5)$. *(Réponse : $0{,}8^5 = 0{,}32768$.)*
- **Exercice 2.** $X \\sim \\mathcal{B}(10\\,;\\,0{,}3)$. Calcule $E(X)$ et $V(X)$. *(Réponse : $E(X) = 3$, $V(X) = 2{,}1$.)*
- **Exercice 3.** $X \\sim \\mathcal{B}(5\\,;\\,0{,}8)$. Calcule $P(X \\geqslant 1)$ (arrondi à $10^{-3}$). *(Réponse : $1 - 0{,}2^5 = 0{,}99968$.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m5',
          titre: `À retenir`,
          contenu: [
            `Trois conditions : deux issues, $n$ répétitions identiques, indépendance → loi binomiale.`,
            `📘 Vocabulaire officiel : épreuve de Bernoulli, schéma de Bernoulli, loi binomiale $\\mathcal{B}(n\\,;\\,p)$, paramètres $n$ et $p$.`,
            `$P(X=k) = C_n^k\\, p^k (1-p)^{n-k}$ — le coefficient $C_n^k$ est obligatoire.`,
            `$E(X) = np$, $V(X) = np(1-p)$ — une seule ligne chacune.`,
            `« Au moins un » → événement contraire $1 - P(X=0)$.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m5',
          titre: `Fil rouge`,
          contenu: `Tu sais calculer la chance d'avoir exactement, au moins, ou au plus $k$ succès. Reste une dernière question : comment **cumuler** toutes ces chances jusqu'à une valeur, et lire d'un coup d'œil « la probabilité de gagner au plus tant » ? C'est le rôle de la fonction de répartition et de sa courbe en escalier. Dernier module : le Module 6.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m5',
          titre: `Auto-évaluation — Module 5`,
          contenu: [
            `Je sais écrire la phrase « épreuves identiques et indépendantes » pour justifier la loi.`,
            `J'emploie le vocabulaire officiel (Bernoulli, schéma, loi binomiale, paramètres).`,
            `Je n'oublie jamais le coefficient $C_n^k$ dans $P(X=k)$.`,
            `Je sais que $E(X) = np$ remplace tout le tableau de la loi.`,
            `Je passe par $1 - P(X=0)$ pour « au moins un », et je comprends ce que vérifie le Coin du Code.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m5',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → La reine des probabilités est domptée. Direction Module 6.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 3 (le basket).`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : le terrain de Marcory va te débloquer.`,
          ],
        },
      ],
    },
  ],
};
