import { Chapitre } from '../../types/course';

export const chapitreM6: Chapitre = {
  id: 't7-m6',
  titre: `Module 6 — La Fonction de Répartition`,
  duree: 24,
  niveau: 'BAC',
  xpGain: 35,
  objectifs: [
    `Calculer des probabilités cumulées sans longues additions`,
    `Déterminer l'expression de la fonction de répartition $F$ par intervalles`,
    `Énoncer la définition et les propriétés de la fonction de répartition avec le vocabulaire officiel du BAC`,
    `Tracer une courbe en escalier parfaite, sans relier les paliers`,
    `Calculer une probabilité du type $P(a < X \\leqslant b)$ à l'aide de $F$`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, on me demande la probabilité de gagner « au plus $4$ », puis « plus de $1$ », puis « entre $-1$ et $4$ ». À chaque fois je recommence une grande addition de mon tableau. Il n'y a pas plus rapide ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Bien sûr que si, Champion(ne). L'idée géniale, c'est de calculer **une fois pour toutes** les probabilités cumulées « jusqu'à une valeur ». Une fonction qui range tout ça, et après, chaque question se règle en une soustraction. Cette fonction s'appelle la fonction de répartition. Et sa courbe a une forme reconnaissable entre toutes : un escalier.`,
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
          contenu: `Imagine la cagnotte d'une tontine à Abobo qui se remplit au fil des versements. Au début, elle est à zéro. Puis, à chaque membre qui verse, elle fait un **saut** d'un coup, et reste à ce niveau jusqu'au versement suivant. Entre deux versements, rien ne bouge : le montant est constant, plat.

La fonction de répartition fonctionne pareil. Elle cumule les probabilités de la gauche vers la droite. Tant qu'on n'a pas atteint une valeur $x_i$ de la variable, elle reste plate. Dès qu'on franchit une valeur, elle fait un saut égal à la probabilité de cette valeur. Puis elle reste plate à nouveau.

C'est pour ça que sa courbe ressemble à un escalier : des marches horizontales, séparées par des sauts verticaux. Jamais de pente douce, jamais de toboggan.

La phrase-pivot : **la fonction de répartition cumule les chances de gauche à droite ; elle monte par sauts et reste plate entre les valeurs — un escalier.**`,
        },
        {
          type: 'figure',
          id: 'fig-m6-1',
          src: '/images/t7/fig_M6_1.png',
          legende: `Des marches strictement horizontales, fermées à gauche, ouvertes à droite : jamais de trait penché.`,
          alt: `La courbe en escalier d'une fonction de répartition.`,
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
          contenu: `On traduit la cagnotte qui monte par paliers en symboles.

- « le montant cumulé jusqu'ici » → $F(x) = P(X \\leqslant x)$.
- « un saut à chaque versement » → un saut de hauteur $p_i$ à chaque valeur $x_i$.
- « plat entre deux versements » → $F$ constante entre deux valeurs consécutives.
- « la cagnotte pleine à la fin » → $F(x) = 1$ après la dernière valeur.`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`La cagnotte`, `Le symbole`, `Ce que ça signifie`],
          rows: [
            [`Montant cumulé jusqu'à $x$`, `$F(x) = P(X \\leqslant x)$`, `Probabilité cumulée`],
            [`Un saut à chaque valeur`, `$+\\,p_i$ en $x_i$`, `Hauteur de la marche`],
            [`Plat entre deux valeurs`, `$F$ constante`, `Le palier horizontal`],
            [`La cagnotte pleine`, `$F = 1$ à droite`, `Toutes les chances cumulées`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `On peut poser la définition officielle, Champion(ne).`,
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
          contenu: `Champion(ne), tu as l'image de la cagnotte en escalier. La copie attend la définition exacte.

**Définition formelle.** La **fonction de répartition** de la variable aléatoire $X$ est la fonction $F$ définie sur $\\mathbb{R}$ par :
$$F(x) = P(X \\leqslant x).$$
Elle est **croissante**, à valeurs dans $\\left[\\,0\\ ;\\ 1\\,\\right]$, avec $\\displaystyle\\lim_{x \\to -\\infty} F(x) = 0$ et $\\displaystyle\\lim_{x \\to +\\infty} F(x) = 1$.

**En langage courant.** $F(x)$, c'est la probabilité cumulée d'obtenir au plus $x$.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Fonction de répartition $F$** — $F(x) = P(X \\leqslant x)$.
- **Probabilité cumulée** — somme des $p_i$ jusqu'à la valeur $x$.
- **Courbe en escalier** — paliers horizontaux ; fermés à gauche, ouverts à droite.
- **Inégalité large / stricte** — $F(a) = P(X \\leqslant a)$ inclut $a$ ; $P(X < a)$ ne l'inclut pas.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend la phrase exacte pour un intervalle : *« $P(a < X \\leqslant b) = F(b) - F(a)$. »* Et pour le tracé : des segments strictement horizontaux, jamais reliés.`,
        },
        {
          type: 'figure',
          id: 'fig-m6-2',
          src: '/images/t7/fig_M6_2.png',
          legende: `$P(-1 < X \\leqslant 4) = F(4) - F(-1) = 0{,}7$ : une simple différence de hauteurs.`,
          alt: `Lecture d'une probabilité d'intervalle sur la courbe en escalier.`,
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
          titre: `Règle d'Or — La fonction de répartition`,
          contenu: `**Définition :**
$$F(x) = P(X \\leqslant x).$$

**Trois propriétés :**
$$0 \\leqslant F(x) \\leqslant 1, \\qquad F \\text{ est croissante}, \\qquad \\lim_{x \\to -\\infty} F(x) = 0, \\quad \\lim_{x \\to +\\infty} F(x) = 1.$$

**Formules de calcul par intervalle :**
$$P(X > a) = 1 - F(a), \\qquad P(a < X \\leqslant b) = F(b) - F(a).$$`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Pour une variable **discrète** à valeurs entières, $P(X < 3)$ se réécrit $P(X \\leqslant 2) = F(2)$. Remplace mentalement l'inégalité stricte par la large sur l'entier juste en dessous.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Ne relie jamais les paliers par des traits obliques ou verticaux pleins : la courbe est un **escalier**, pas un toboggan. Entre deux valeurs, $F$ est plate.`,
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
          contenu: `On te le demande dès qu'apparaissent : « fonction de répartition », « probabilité cumulée », « tracer la courbe en escalier », « au plus », ou un calcul d'intervalle $P(a < X \\leqslant b)$.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`La question de l'énoncé`, `Ce que tu cherches`, `La méthode`],
          rows: [
            [`Déterminer $F$`, `L'expression par intervalles`, `Cumuler les $p_i$ de gauche à droite`],
            [`Tracer la courbe`, `La courbe en escalier`, `Segments horizontaux, fermés à gauche`],
            [`Calculer $P(a < X \\leqslant b)$`, `La différence des cumuls`, `$F(b) - F(a)$`],
            [`Calculer $P(X > a)$`, `Le complément`, `$1 - F(a)$`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure`,
          contenu: `**Étape 1.** Range les valeurs $x_i$ dans l'ordre croissant. Les intervalles vont de $-\\infty$ au premier $x_i$, puis entre chaque $x_i$, puis du dernier $x_i$ à $+\\infty$.

**Étape 2.** Cumule : $0$ avant la première valeur ; à chaque franchissement d'un $x_i$, ajoute son $p_i$ ; après la dernière valeur, tu dois trouver exactement $1$.

**Étape 3.** Rédige $F$ sous forme d'un système d'accolades, intervalles **fermés à gauche, ouverts à droite**.

**Étape 4.** Pour un calcul d'intervalle, applique directement $F(b) - F(a)$ ou $1 - F(a)$. Conclus.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `- **Dernier palier** : $F$ doit valoir exactement $1$ après la plus grande valeur.
- **Croissance** : les paliers ne font que monter ; si l'un descend, tu as une erreur de cumul.`,
        },
        {
          type: 'figure',
          id: 'fig-m6-3',
          src: '/images/t7/fig_M6_3.png',
          legende: `On cumule de gauche à droite : le dernier total atterrit toujours sur $1$.`,
          alt: `Construction du cumul valeur par valeur jusqu'à atteindre 1.`,
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
            [`🟢 BASE`, `Lire une probabilité cumulée`, `$F$ est donnée, on demande $P(X \\leqslant a)$`, `Type 1`],
            [`🟡 MOYEN`, `Calcul d'intervalle avec $F$`, `« calculer $P(a < X \\leqslant b)$ »`, `Type 2`],
            [`🔴 BAC`, `Déterminer et tracer $F$`, `« déterminer puis représenter $F$ »`, `Type 3`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Lire un cumul.** La loi de $X$ est : $x_i \\in \\{-1, 0, 2, 3\\}$ avec $p_i = \\dfrac{1}{4}$ ; $\\dfrac{1}{3}$ ; $\\dfrac{1}{12}$ ; $\\dfrac{1}{3}$. Calcule $P(X > 0)$ et $P(X \\leqslant 2)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Probabilités cumulées : on additionne les $p_i$ concernés (ou on passe par le contraire).` },
            { name: `Étape 1`, contenu: `$P(X > 0) = P(X=2) + P(X=3) = \\dfrac{1}{12} + \\dfrac{1}{3} = \\dfrac{1}{12} + \\dfrac{4}{12} = \\dfrac{5}{12}$.` },
            { name: `Étape 2`, contenu: `$P(X \\leqslant 2) = \\dfrac{1}{4} + \\dfrac{1}{3} + \\dfrac{1}{12} = \\dfrac{3 + 4 + 1}{12} = \\dfrac{8}{12} = \\dfrac{2}{3}$.` },
          ],
          reponse: `$P(X > 0) = \\dfrac{5}{12}$ et $P(X \\leqslant 2) = \\dfrac{2}{3}$.`,
          conseil: `Mets tout au même dénominateur ($12$) dès le départ : les additions deviennent immédiates.`,
          piege: `$P(X > 0)$ exclut $0$ : ne compte pas $P(X=0)$ dedans.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$P(X > 0) = \\dfrac{1}{12} + \\dfrac{1}{3} = \\dfrac{5}{12}$. $P(X \\leqslant 2) = \\dfrac{1}{4} + \\dfrac{1}{3} + \\dfrac{1}{12} = \\dfrac{2}{3}$.

*[Barème : $P(X>0)$ : 1 pt · $P(X \\leqslant 2)$ : 1 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Intervalle avec F.** On donne $F(4) = 0{,}9$ et $F(-1) = 0{,}2$. Calcule $P(-1 < X \\leqslant 4)$, puis $P(X > 4)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Calculs d'intervalle : application directe des formules de $F$.` },
            { name: `Étape 1`, contenu: `$P(-1 < X \\leqslant 4) = F(4) - F(-1) = 0{,}9 - 0{,}2 = 0{,}7$.` },
            { name: `Étape 2`, contenu: `$P(X > 4) = 1 - F(4) = 1 - 0{,}9 = 0{,}1$.` },
          ],
          reponse: `$P(-1 < X \\leqslant 4) = 0{,}7$ et $P(X > 4) = 0{,}1$.`,
          conseil: `Avec $F$, tu n'as plus besoin de repasser par le tableau de la loi : une soustraction suffit.`,
          piege: `$P(X > 4)$, c'est $1 - F(4)$, pas $F(4)$. Le « strictement plus grand » est le complément du « au plus ».`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$P(-1 < X \\leqslant 4) = F(4) - F(-1) = 0{,}9 - 0{,}2 = 0{,}7$. $P(X > 4) = 1 - F(4) = 0{,}1$.

*[Barème : intervalle : 1 pt · complément : 1 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 3 — Déterminer et tracer F.** La loi de $X$ est : $x_i \\in \\{-2, 1, 4, 5\\}$ avec $p_i = 0{,}2$ ; $0{,}3$ ; $0{,}4$ ; $0{,}1$. **a)** Détermine la fonction de répartition $F$. **b)** Représente-la graphiquement. **c)** Calcule $P(-1 < X \\leqslant 4)$ à l'aide de $F$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `« Déterminer puis représenter $F$ » : on cumule de gauche à droite, puis on trace l'escalier.` },
            { name: `Étape 1`, contenu: `On cumule : avant $-2$, $F = 0$ ; sur $[-2 \\ ;\\ 1[$, $F = 0{,}2$ ; sur $[1 \\ ;\\ 4[$, $F = 0{,}5$ ; sur $[4 \\ ;\\ 5[$, $F = 0{,}9$ ; sur $[5 \\ ;\\ +\\infty[$, $F = 1$.` },
            { name: `Étape 2`, contenu: `$F(x) = \\begin{cases} 0 & \\text{si } x \\in \\left]-\\infty\\ ;\\ -2\\right[ \\\\ 0{,}2 & \\text{si } x \\in \\left[-2\\ ;\\ 1\\right[ \\\\ 0{,}5 & \\text{si } x \\in \\left[1\\ ;\\ 4\\right[ \\\\ 0{,}9 & \\text{si } x \\in \\left[4\\ ;\\ 5\\right[ \\\\ 1 & \\text{si } x \\in \\left[5\\ ;\\ +\\infty\\right[ \\end{cases}$` },
            { name: `Étape 3`, contenu: `$P(-1 < X \\leqslant 4) = F(4) - F(-1) = 0{,}9 - 0{,}2 = 0{,}7$.` },
          ],
          reponse: `$F$ est l'escalier ci-dessus et $P(-1 < X \\leqslant 4) = 0{,}7$.`,
          conseil: `Pour vérifier au brouillon : $P(-1 < X \\leqslant 4)$ correspond aux valeurs $1$ et $4$, soit $0{,}3 + 0{,}4 = 0{,}7$. La fonction de répartition donne le même résultat, plus vite.`,
          piege: `Le dernier palier doit valoir exactement $1$. Si tu trouves $0{,}9$, tu as oublié la dernière probabilité.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite`,
          contenu: `a) En cumulant de gauche à droite, on obtient $F(x) = 0$ sur $\\left]-\\infty\\ ;\\ -2\\right[$, $0{,}2$ sur $\\left[-2\\ ;\\ 1\\right[$, $0{,}5$ sur $\\left[1\\ ;\\ 4\\right[$, $0{,}9$ sur $\\left[4\\ ;\\ 5\\right[$, et $1$ sur $\\left[5\\ ;\\ +\\infty\\right[$.
b) On trace des segments horizontaux (fermés à gauche, ouverts à droite) aux ordonnées $0$ ; $0{,}2$ ; $0{,}5$ ; $0{,}9$ ; $1$.
c) $P(-1 < X \\leqslant 4) = F(4) - F(-1) = 0{,}9 - 0{,}2 = 0{,}7$.

*[Barème : a) expression de $F$ : 1,5 pt · b) tracé : 1 pt · c) intervalle : 0,5 pt — Total : 3 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Le dernier palier vaut toujours $1$. Réponses finales seulement.

- **Exercice 1.** Loi : $x_i \\in \\{0, 1\\}$, $p_i = 0{,}3$ ; $0{,}7$. Donne $F(0)$. *(Réponse : $0{,}3$.)*
- **Exercice 2.** Avec $F(3) = 0{,}8$, calcule $P(X > 3)$. *(Réponse : $0{,}2$.)*
- **Exercice 3.** Avec $F(5) = 0{,}9$ et $F(2) = 0{,}4$, calcule $P(2 < X \\leqslant 5)$. *(Réponse : $0{,}5$.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m6',
          titre: `À retenir`,
          contenu: [
            `$F(x) = P(X \\leqslant x)$ : la probabilité cumulée jusqu'à $x$.`,
            `📘 Vocabulaire officiel : fonction de répartition, probabilité cumulée, courbe en escalier, inégalité large/stricte.`,
            `$F$ est croissante, à valeurs dans $\\left[\\,0\\ ;\\ 1\\,\\right]$, et vaut $1$ à droite.`,
            `$P(a < X \\leqslant b) = F(b) - F(a)$ et $P(X > a) = 1 - F(a)$.`,
            `Le tracé est un escalier : marches horizontales, fermées à gauche, ouvertes à droite.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m6',
          titre: `Fil rouge`,
          contenu: `Et voilà, Champion(ne) — tu viens de boucler les six notions du programme de probabilités ! Du comptage jusqu'à la courbe en escalier, tu as tous les outils en main. Il ne reste plus qu'à les mettre à l'épreuve sur de vrais sujets du BAC : direction la Salle d'Entraînement, là où on transforme la théorie en points sur la copie.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m6',
          titre: `Auto-évaluation — Module 6`,
          contenu: [
            `Je sais construire les intervalles successifs et cumuler les probabilités.`,
            `J'emploie le vocabulaire officiel (fonction de répartition, probabilité cumulée, escalier).`,
            `Je vérifie que mon dernier palier atterrit exactement sur $1$.`,
            `Je trace des segments strictement horizontaux (pas de toboggan).`,
            `J'utilise $P(a < X \\leqslant b) = F(b) - F(a)$.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m6',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Tu as terminé tous les modules ! Cap sur la Salle d'Entraînement.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 3 (le tracé).`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : la cagnotte de la tontine remet tout en ordre.`,
          ],
        },
      ],
    },
  ],
};
