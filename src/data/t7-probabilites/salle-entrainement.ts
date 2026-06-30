import { Chapitre } from '../../types/course';

export const chapitreSalle: Chapitre = {
  id: 't7-salle',
  titre: `La Salle d'Entraînement`,
  duree: 45,
  niveau: 'BAC',
  xpGain: 40,
  objectifs: [
    `Affronter sereinement les grands types d'exercices de probabilités au BAC ivoirien`,
    `Gérer ton temps sur un problème de probabilités en conditions réelles d'examen`,
    `Rédiger une copie qui coche tous les points de barème du correcteur`,
  ],
  sections: [
    {
      id: 's-a',
      titre: `Section A — La carte des outils`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg-a1',
          pf: `Grand Frère, j'ai lu tous les modules. Mais le jour du BAC, je bloque toujours au moment de me lancer. Comment je m'entraîne pour de vrai ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-a2',
          gf: `Ici, Champion(ne). Dix vrais sujets, comme à l'épreuve, tous corrigés en Copie Parfaite — la rédaction exacte que le correcteur attend. Tu fais l'exercice seul d'abord, tu te chronomètres, puis tu compares. Faut pas gnan : ces dix combats couvrent tout le tome. Quand tu les maîtrises, tu gâtes le coin.`,
        },
        {
          type: 'table',
          id: 'tbl-synoptique',
          headers: [`Le déclencheur dans l'énoncé`, `Le module`, `Le réflexe immédiat`],
          rows: [
            [`« de combien de façons », « simultanément »`, `M1 Dénombrement`, `Combinaison $C_n^p$ (l'ordre ?).`],
            [`« au hasard », « au moins un des deux »`, `M2 Vocabulaire`, `$P=\\dfrac{\\text{card}A}{\\text{card}\\Omega}$, réunion, contraire.`],
            [`« sachant que », « parmi les », « sans remise »`, `M3 Conditionnelles`, `Arbre pondéré, probabilités totales.`],
            [`« gain », « espérance », « le jeu est-il équitable »`, `M4 Variables aléatoires`, `Loi, $E(X)$, $V(X)$, König-Huygens.`],
            [`« on répète $n$ fois », « succès/échec »`, `M5 Loi binomiale`, `$\\mathcal{B}(n\\,;\\,p)$, $C_n^k p^k(1-p)^{n-k}$.`],
            [`« fonction de répartition », « au plus »`, `M6 Répartition`, `$F(x)=P(X\\leqslant x)$, escalier.`],
          ],
        },
      ],
    },
    {
      id: 's-b',
      titre: `Section B — Les 10 Exercices BAC`,
      blocs: [
        {
          type: 'exercise',
          id: 'exo-1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice 1 — Dénombrement dans une urne** *(M1)*. Une urne contient $10$ boules : $4$ rouges et $6$ blanches. On tire simultanément $3$ boules. **a)** Combien de tirages possibles ? **b)** Combien contiennent exactement $2$ rouges et $1$ blanche ?`,
          etapes: [],
          reponse: `Le tirage est simultané : on dénombre par combinaisons. a) Nombre total : $C_{10}^3 = \\dfrac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = 120$. b) Deux rouges parmi $4$ ET une blanche parmi $6$ : $C_4^2 \\times C_6^1 = 6 \\times 6 = 36$ tirages. *[Barème : a) 1 pt · b) 1,5 pt — Total : 2,5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice 2 — Le conservatoire de musique** *(M2)*. $60\\,\\%$ des élèves jouent d'un instrument à cordes ($C$), $45\\,\\%$ d'un instrument à vent ($V$), $10\\,\\%$ des deux. On choisit un élève au hasard. **a)** Donne $P(C)$, $P(V)$, $P(C \\cap V)$. **b)** Probabilité qu'il joue d'au moins un instrument. **c)** Probabilité qu'il n'en joue aucun.`,
          etapes: [],
          reponse: `On choisit au hasard, il y a équiprobabilité. a) $P(C) = 0{,}60$ ; $P(V) = 0{,}45$ ; $P(C \\cap V) = 0{,}10$. b) « Au moins un » $= C \\cup V$ : $P(C \\cup V) = 0{,}60 + 0{,}45 - 0{,}10 = 0{,}95$. c) « Aucun » est le contraire : $P(\\overline{C \\cup V}) = 1 - 0{,}95 = 0{,}05$. *[Barème : a) 1 pt · b) 1,5 pt · c) 1 pt — Total : 3,5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice 3 — Le restaurant de Mariam** *(M3)*. Un jour donné : la probabilité d'une affluence de clients est $P(A) = 0{,}6$. S'il y a affluence, la probabilité d'un bénéfice est $0{,}7$ ; sinon, elle est $0{,}4$. On note $B$ « réaliser un bénéfice ». **a)** Calcule $P(A \\cap B)$. **b)** Montre que $P(B) = 0{,}58$. **c)** Sachant qu'elle a réalisé un bénéfice, quelle est la probabilité qu'il y ait eu affluence ?`,
          etapes: [],
          reponse: `a) $P(A \\cap B) = P(A) \\times P_A(B) = 0{,}6 \\times 0{,}7 = 0{,}42$. b) $A$ et $\\overline{A}$ forment une partition de l'univers. D'après les probabilités totales : $P(B) = P(A)\\,P_A(B) + P(\\overline{A})\\,P_{\\overline{A}}(B) = 0{,}6 \\times 0{,}7 + 0{,}4 \\times 0{,}4 = 0{,}42 + 0{,}16 = 0{,}58$. c) $P_B(A) = \\dfrac{P(A \\cap B)}{P(B)} = \\dfrac{0{,}42}{0{,}58} = \\dfrac{21}{29} \\approx 0{,}72$. *[Barème : a) 1 pt · b) 1,5 pt · c) 1 pt — Total : 3,5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-4',
          niveau: 'BAC',
          enonce: `🔴 **Exercice 4 — Le test de dépistage** *(M3 + M5)*. Dans une population, $10\\,\\%$ des personnes sont porteuses d'un virus ($M$). Le test est positif ($T$) chez $90\\,\\%$ des porteurs et chez $5\\,\\%$ des non-porteurs. **a)** Calcule $P(M \\cap T)$. **b)** Montre que $P(T) = 0{,}135$. **c)** Sachant que le test est positif, quelle est la probabilité d'être porteur ? **d)** On choisit $10$ personnes au hasard et de façon indépendante. Soit $Y$ le nombre de tests positifs. Calcule $E(Y)$ et interprète.`,
          etapes: [],
          reponse: `a) $P(M \\cap T) = P(M) \\times P_M(T) = 0{,}10 \\times 0{,}90 = 0{,}09$. b) $M$ et $\\overline{M}$ forment une partition. $P(T) = 0{,}10 \\times 0{,}90 + 0{,}90 \\times 0{,}05 = 0{,}09 + 0{,}045 = 0{,}135$. c) $P_T(M) = \\dfrac{P(M \\cap T)}{P(T)} = \\dfrac{0{,}09}{0{,}135} = \\dfrac{2}{3} \\approx 0{,}67$. d) On répète $10$ fois, de façon identique et indépendante, l'épreuve « test positif » de probabilité $p = 0{,}135$ : $Y$ suit $\\mathcal{B}(10\\,;\\,0{,}135)$. $E(Y) = 10 \\times 0{,}135 = 1{,}35$ : sur $10$ personnes, on attend en moyenne $1{,}35$ test positif. *[Barème : a) 0,5 pt · b) 1 pt · c) 1 pt · d) 1,5 pt — Total : 4 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-5',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice 5 — Le démarchage téléphonique** *(M3)*. Une clientèle est composée de $65\\,\\%$ d'hommes. $30\\,\\%$ des hommes contactés écoutent les explications ; chez les femmes, $60\\,\\%$ écoutent. On choisit une personne au hasard. On note $H$ « être un homme » et $E$ « écouter les explications ». Calcule la probabilité que la personne écoute les explications.`,
          etapes: [],
          reponse: `$H$ et $\\overline{H}$ forment une partition de l'univers. D'après les probabilités totales : $P(E) = P(H)\\,P_H(E) + P(\\overline{H})\\,P_{\\overline{H}}(E) = 0{,}65 \\times 0{,}30 + 0{,}35 \\times 0{,}60 = 0{,}195 + 0{,}21 = 0{,}405$. La probabilité qu'une personne écoute les explications est $0{,}405$. *[Barème : partition 0,5 pt · totale 1,5 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-6',
          niveau: 'BAC',
          enonce: `🔴 **Exercice 6 — La loterie** *(M4)*. Soit $X$ le gain algébrique (en milliers de francs) d'un jeu, de loi : $x_i \\in \\{-1, 0, 5, 20\\}$ avec $p_i = 0{,}50$ ; $0{,}30$ ; $0{,}15$ ; $0{,}05$. **a)** Calcule $E(X)$. Le jeu est-il équitable ? **b)** Calcule $V(X)$ et $\\sigma(X)$ (arrondi au centième).`,
          etapes: [],
          reponse: `La loi est valide : $0{,}50 + 0{,}30 + 0{,}15 + 0{,}05 = 1$. a) $E(X) = (-1 \\times 0{,}50) + (0 \\times 0{,}30) + (5 \\times 0{,}15) + (20 \\times 0{,}05) = -0{,}50 + 0{,}75 + 1 = 1{,}25$. Comme $E(X) \\neq 0$, le jeu n'est pas équitable ; il est favorable au joueur ($1\\,250$ FCFA gagnés en moyenne par partie). b) $E(X^2) = (1 \\times 0{,}50) + (0 \\times 0{,}30) + (25 \\times 0{,}15) + (400 \\times 0{,}05) = 0{,}50 + 3{,}75 + 20 = 24{,}25$. $V(X) = 24{,}25 - (1{,}25)^2 = 24{,}25 - 1{,}5625 = 22{,}6875$, donc $\\sigma(X) = \\sqrt{22{,}6875} \\approx 4{,}76$. *[Barème : $E(X)$ + interprétation 1,5 pt · $V(X)$ 1 pt · $\\sigma(X)$ 0,5 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-7',
          niveau: 'BAC',
          enonce: `🔴 **Exercice 7 — Loi par dénombrement** *(M1 + M4)*. Une urne contient $4$ rouges et $6$ blanches. On tire simultanément $2$ boules. Soit $X$ le nombre de rouges. **a)** Détermine la loi de $X$. **b)** Calcule $E(X)$. **c)** Calcule la probabilité que les deux boules soient de la même couleur.`,
          etapes: [],
          reponse: `Total des tirages : $C_{10}^2 = 45$. a) $P(X=0) = \\dfrac{C_6^2}{45} = \\dfrac{15}{45} = \\dfrac{1}{3}$ ; $P(X=1) = \\dfrac{C_4^1 C_6^1}{45} = \\dfrac{24}{45} = \\dfrac{8}{15}$ ; $P(X=2) = \\dfrac{C_4^2}{45} = \\dfrac{6}{45} = \\dfrac{2}{15}$ (somme $= 1$). b) $E(X) = 0 \\times \\dfrac{1}{3} + 1 \\times \\dfrac{8}{15} + 2 \\times \\dfrac{2}{15} = \\dfrac{12}{15} = \\dfrac{4}{5} = 0{,}8$. c) « Même couleur » $= (X=0) \\cup (X=2)$, événements incompatibles : $\\dfrac{1}{3} + \\dfrac{2}{15} = \\dfrac{5}{15} + \\dfrac{2}{15} = \\dfrac{7}{15}$. *[Barème : a) 1,5 pt · b) 1 pt · c) 1 pt — Total : 3,5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-8',
          niveau: 'BAC',
          enonce: `🔴 **Exercice 8 — Les patients guéris** *(M5)*. Un traitement guérit un patient avec la probabilité $0{,}8$. On suit $5$ patients, les guérisons étant indépendantes. Soit $X$ le nombre de guéris. **a)** Justifie que $X$ suit une loi binomiale et précise ses paramètres. **b)** Calcule $P(X = 4)$. **c)** Calcule $P(X \\geqslant 3)$.`,
          etapes: [],
          reponse: `a) L'épreuve a deux issues (guéri, proba $0{,}8$ / non guéri, proba $0{,}2$), répétée $5$ fois de façon identique et indépendante : $X$ suit $\\mathcal{B}(5\\,;\\,0{,}8)$. b) $P(X=4) = C_5^4 \\times 0{,}8^4 \\times 0{,}2 = 5 \\times 0{,}4096 \\times 0{,}2 = 0{,}4096$. c) $P(X \\geqslant 3) = P(X=3) + P(X=4) + P(X=5)$, avec $P(X=3) = C_5^3 \\times 0{,}8^3 \\times 0{,}2^2 = 10 \\times 0{,}512 \\times 0{,}04 = 0{,}2048$ et $P(X=5) = 0{,}8^5 = 0{,}32768$. Donc $P(X \\geqslant 3) = 0{,}2048 + 0{,}4096 + 0{,}32768 = 0{,}94208$. *[Barème : a) 1 pt · b) 0,75 pt · c) 1,25 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-9',
          niveau: 'BAC',
          enonce: `🔴 **Exercice 9 — Le tirage successif sans remise** *(M3)*. Une urne contient $3$ rouges et $5$ bleues. On tire successivement et sans remise $2$ boules. **a)** Construis l'arbre pondéré. **b)** Calcule $P(R_1 \\cap B_2)$. **c)** Montre que $P(B_2) = \\dfrac{5}{8}$.`,
          etapes: [],
          reponse: `a) Au départ : $8$ boules ($3$ rouges, $5$ bleues). Si $R_1$ : restent $2$ rouges, $5$ bleues ; si $B_1$ : restent $3$ rouges, $4$ bleues. Donc $P(R_1) = \\dfrac{3}{8}$, $P(B_1) = \\dfrac{5}{8}$, $P_{R_1}(B_2) = \\dfrac{5}{7}$, $P_{B_1}(B_2) = \\dfrac{4}{7}$. b) $P(R_1 \\cap B_2) = \\dfrac{3}{8} \\times \\dfrac{5}{7} = \\dfrac{15}{56}$. c) $R_1$ et $B_1$ forment une partition. $P(B_2) = P(R_1 \\cap B_2) + P(B_1 \\cap B_2) = \\dfrac{15}{56} + \\dfrac{5}{8} \\times \\dfrac{4}{7} = \\dfrac{15}{56} + \\dfrac{20}{56} = \\dfrac{35}{56} = \\dfrac{5}{8}$. *[Barème : a) 1 pt · b) 0,75 pt · c) 1,25 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-10',
          niveau: 'BAC',
          enonce: `🔴 **Exercice 10 — La fonction de répartition** *(M6)*. Soit $X$ de loi : $x_i \\in \\{-2, 1, 4, 5\\}$ avec $p_i = 0{,}2$ ; $0{,}3$ ; $0{,}4$ ; $0{,}1$. **a)** Détermine $F$. **b)** Représente $F$ graphiquement. **c)** Calcule $P(-1 < X \\leqslant 4)$ à l'aide de $F$.`,
          etapes: [],
          reponse: `a) En cumulant de gauche à droite : $F(x) = \\begin{cases} 0 & \\text{si } x \\in \\left]-\\infty\\ ;\\ -2\\right[ \\\\ 0{,}2 & \\text{si } x \\in \\left[-2\\ ;\\ 1\\right[ \\\\ 0{,}5 & \\text{si } x \\in \\left[1\\ ;\\ 4\\right[ \\\\ 0{,}9 & \\text{si } x \\in \\left[4\\ ;\\ 5\\right[ \\\\ 1 & \\text{si } x \\in \\left[5\\ ;\\ +\\infty\\right[ \\end{cases}$ b) On trace des segments strictement horizontaux aux ordonnées $0$ ; $0{,}2$ ; $0{,}5$ ; $0{,}9$ ; $1$, avec un point plein à gauche et un cercle ouvert à droite de chaque palier. c) $P(-1 < X \\leqslant 4) = F(4) - F(-1) = 0{,}9 - 0{,}2 = 0{,}7$. *[Barème : a) 1,5 pt · b) 1 pt · c) 0,5 pt — Total : 3 pts]*`,
        },
      ],
    },
    {
      id: 's-c',
      titre: `Section C — La check-list du correcteur`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-checklist',
          titre: `Relis ta copie avec les yeux du correcteur`,
          contenu: [
            `J'ai justifié l'équiprobabilité (« au hasard ») avant tout comptage.`,
            `Pour un tirage simultané, j'ai bien utilisé des combinaisons (pas d'arbre).`,
            `Sur chaque arbre pondéré, la somme des branches d'un nœud vaut $1$.`,
            `J'ai écrit « partition de l'univers » avant la formule des probabilités totales.`,
            `Aucune de mes probabilités ne sort de l'intervalle $\\left[\\,0\\ ;\\ 1\\,\\right]$.`,
            `Mes fractions sont irréductibles ($\\dfrac{20}{56}$ devient $\\dfrac{5}{14}$).`,
            `J'ai justifié « épreuves identiques et indépendantes » avant la loi binomiale.`,
            `Le coefficient $C_n^k$ est présent dans chaque $P(X=k)$.`,
            `Ma variance est positive ou nulle ; je n'ai pas confondu $E(X^2)$ et $[E(X)]^2$.`,
            `Ma courbe de répartition est un escalier (segments horizontaux), et le dernier palier vaut $1$.`,
          ],
        },
      ],
    },
    {
      id: 's-d',
      titre: `Section D — Ton planning sur un exercice de probabilités`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-planning',
          headers: [`Temps`, `Action sur l'exercice de probabilités`],
          rows: [
            [`0 - 5 min`, `Lecture active : surligner « sans remise », « sachant que », « au moins », « simultanément ».`],
            [`5 - 15 min`, `Traduction au brouillon : arbre pondéré, ou paramètres $n$ et $p$, ou tableau de la loi.`],
            [`15 - 35 min`, `Rédaction propre : formule littérale AVANT les chiffres, justifications (équiprobabilité, partition, loi).`],
            [`35 - 40 min`, `Contrôle : $\\sum p_i = 1$, $V(X) \\geqslant 0$, aucune proba $> 1$, fractions réduites.`],
          ],
        },
        {
          type: 'text',
          id: 'b-fin',
          contenu: `Voilà tes dix combats, Champion(ne). Refais-les jusqu'à ce que la main aille toute seule. Le jour J, ces exercices seront tes points les plus sûrs.

**Marius Dion — Ton Grand Frère**
*EDUCTOME — Apprendre sans limites*`,
        },
      ],
    },
  ],
};
