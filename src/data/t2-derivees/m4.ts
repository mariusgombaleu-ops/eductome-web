import { Chapitre } from '../../types/course';

export const chapitreM4: Chapitre = {
  id: 't2-m4',
  titre: `Module 4 — Dérivée et Variations`,
  duree: 30,
  niveau: 'MOYEN',
  xpGain: 30,
  objectifs: [
    `Utiliser le signe de $f'(x)$ pour déterminer le sens de variation de $f$`,
    `Énoncer le théorème de la monotonie avec le vocabulaire exact du BAC`,
    `Dresser un tableau de variations complet (signe, flèches, extrema, limites)`,
    `Identifier et caractériser un maximum ou un minimum, local comme global`,
    `Démontrer une inégalité $f(x) \\geq k$ en lisant le minimum dans le tableau`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, au Module 3 j'ai appris à dériver n'importe quelle fonction. Mais à quoi ça sert concrètement, une dérivée ? Sur les sujets BAC je vois toujours « dresser le tableau de variations » — c'est ça le lien ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Exactement, Champion(ne). Maintenant qu'on sait dériver, on va récolter les fruits de tout ce travail. La dérivée $f'(x)$, c'est la pente de la courbe en chaque point. Et la pente te dit si la courbe monte ou descend. Une fois que tu connais le signe de $f'$, tu traces le profil complet de la fonction — sans même la dessiner. C'est ça, le tableau de variations. Et sur presque tous les sujets BAC de Terminale D, il est obligatoire.`,
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
          contenu: `Imagine que tu quittes Man à bord d'un gbaka solide pour grimper jusqu'au sommet du **Mont Tonkoui** (prends ça comme ça 😂), notre montagne de l'Ouest ivoirien. Regarde ce qui se passe pendant le trajet.

**La montée.** La route s'élève, le moteur grogne, tu gagnes de l'altitude. La pente est positive. En maths : quand $f'(x) > 0$, la fonction monte — elle est **croissante**.

**Le sommet.** Tu arrives au belvédère. Un instant, la route devient horizontale avant de basculer de l'autre côté. La pente est nulle : $f'(x) = 0$. C'est l'emplacement exact d'un **extremum** — un sommet ou un creux.

**La descente.** Le gbaka s'engage sur la pente descendante, l'altitude diminue, tu freines. La pente est négative. En maths : quand $f'(x) < 0$, la fonction descend — elle est **décroissante**.

La fonction dérivée $f'(x)$ te donne la pente locale à chaque mètre de ton trajet. **Le tableau de variations, lui, n'est rien d'autre que le profil d'altitude résumé de ton voyage complet.**`,
        },
        {
          type: 'figure',
          id: 'fig-m4-1',
          src: '/images/t2/fig_M4_1.png',
          legende: `Le profil du Mont Tonkoui : le signe de $f'$ pilote la flèche du tableau.`,
          alt: `Le profil du Mont Tonkoui : le signe de $f'$ pilote la flèche du tableau.`,
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
          contenu: `Le lien entre la route et la copie est direct :

- Pente positive → le gbaka monte → $f'(x) > 0$ → $f$ **strictement croissante**.
- Pente négative → le gbaka descend → $f'(x) < 0$ → $f$ **strictement décroissante**.
- Pente nulle → la route est plate → $f'(x) = 0$ → point critique, **extremum candidat**.`,
        },
        {
          type: 'table',
          id: 'tbl5',
          headers: [`Sur la route`, `Signe de $f'(x)$`, `Sens de variation`],
          rows: [
            [`Le gbaka monte`, `$f'(x) > 0$`, `$f$ strictement croissante $\\nearrow$`],
            [`Le gbaka descend`, `$f'(x) < 0$`, `$f$ strictement décroissante $\\searrow$`],
            [`La route est plate (sommet/creux)`, `$f'(x) = 0$`, `Extremum candidat`],
          ],
        },
        {
          type: 'text',
          id: 'b6',
          contenu: `La grande clé pour ne pas s'embrouiller : **chercher d'abord les racines de $f'(x) = 0$**. Ces « points plats » sont les coordonnées exactes des virages de la courbe. Une fois trouvés, le signe de $f'$ entre les racines se lit facilement, et les flèches du tableau se dessinent seules.`,
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
          contenu: `Champion(ne), l'image du Mont Tonkoui t'a donné l'intuition. Maintenant, ta copie doit énoncer le théorème comme le correcteur l'attend.

**Définition formelle.** Soit $f$ une fonction dérivable sur un intervalle $I$.

- Si $f'(x) > 0$ pour tout $x$ de $I$, alors $f$ est **strictement croissante** sur $I$.
- Si $f'(x) < 0$ pour tout $x$ de $I$, alors $f$ est **strictement décroissante** sur $I$.
- Si $f'$ s'annule en $a$ **en changeant de signe**, alors $f$ admet un **extremum local** en $a$.

**En langage courant.** Le signe de la dérivée commande le sens de variation. Un extremum n'existe que là où la pente s'annule **et** bascule.`,
        },
        {
          type: 'warning',
          id: 'warn8',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Strictement croissante / décroissante** — sens de variation imposé par le signe de $f'$.
- **Fonction monotone** — qui garde le même sens de variation sur tout l'intervalle.
- **Extremum local** — un maximum ou un minimum atteint en un point où $f'$ change de signe.
- **Maximum global** — la plus grande valeur de $f$ sur tout l'intervalle d'étude (à comparer avec les bornes).`,
        },
        {
          type: 'tip',
          id: 'tip9',
          titre: `À retenir`,
          contenu: `Le correcteur attend la justification : *« $f'(x) > 0$ sur $I$, donc $f$ est strictement croissante sur $I$. »* Annoncer la variation sans citer le signe de $f'$ ne rapporte aucun point.`,
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
          titre: `Règle d'Or — Théorème de la monotonie et des extrema`,
          contenu: `Soit $f$ une fonction dérivable sur un intervalle $I$ :

- $f'(x) > 0$ pour tout $x \\in I$ → $f$ est **strictement croissante** sur $I$.
- $f'(x) < 0$ pour tout $x \\in I$ → $f$ est **strictement décroissante** sur $I$.
- $f'(a) = 0$ et $f'$ **change de signe** en $a$ → $f$ admet un **extremum local** en $a$.

**Nature de l'extremum.**

- $f'$ passe de $+$ à $-$ en $a$ → **maximum local** (la courbe monte puis redescend).
- $f'$ passe de $-$ à $+$ en $a$ → **minimum local** (la courbe descend puis remonte).`,
        },
        {
          type: 'tip',
          id: 'tip11',
          titre: `Conseil du Grand Frère`,
          contenu: `Pour démontrer une inégalité « $f(x) \\geq k$ pour tout $x$ », cherche si $k$ n'est pas tout simplement le **minimum** de $f$ : le tableau de variations te le donne d'un coup.`,
        },
        {
          type: 'warning',
          id: 'warn12',
          titre: `Piège à éviter`,
          contenu: `Si $f'(a) = 0$ **sans** changement de signe, il n'y a pas d'extremum en $a$ (point d'inflexion à tangente horizontale).`,
        },
        {
          type: 'figure',
          id: 'fig-m4-2',
          src: '/images/t2/fig_M4_2.png',
          legende: `Le minimum de $k$ vaut $4$ en $x=2$ : donc $k(x)\\ge 4$ pour tout $x>0$.`,
          alt: `Le minimum de $k$ vaut $4$ en $x=2$ : donc $k(x)\\ge 4$ pour tout $x>0$.`,
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
          contenu: `Deux secondes de lecture avant de commencer. Ce que l'énoncé demande change la stratégie :

- *« Étudier les variations de $f$ »* → procédure complète en 5 étapes.
- *« Déterminer les extrema »* → résoudre $f'(x) = 0$, vérifier le changement de signe, calculer les images.
- *« Sur quel intervalle $f$ est-elle croissante ? »* → résoudre $f'(x) \\geq 0$.`,
        },
        {
          type: 'table',
          id: 'tbl14',
          titre: `L'Arbre de décision`,
          headers: [`Ce que l'énoncé demande`, `La stratégie`],
          rows: [
            [`Variations complètes de $f$`, `Procédure en 5 étapes — tableau complet (signe, flèches, valeurs).`],
            [`Un extremum (max ou min)`, `Résoudre $f'(x)=0$, vérifier le changement de signe, calculer $f(a)$.`],
            [`$f'(x)$ ne s'annule pas sur $I$`, `Fonction purement monotone — conclure avec le signe constant.`],
            [`$f'(x) = 0$ partout`, `Cas particulier : $f$ est constante sur l'intervalle.`],
          ],
        },
        {
          type: 'text',
          id: 'b15',
          titre: `La Procédure en 5 étapes`,
          contenu: `**Étape 1.** Calculer $f'(x)$ avec les formules du Module 3.

**Étape 2.** Résoudre $f'(x) = 0$ pour trouver les racines (les virages).

**Étape 3.** Dresser le tableau de signes de $f'(x)$ sur chaque zone du domaine.

**Étape 4.** Déduire le tableau de variations : flèche $\\nearrow$ si $f' > 0$, $\\searrow$ si $f' < 0$.

**Étape 5.** Calculer les valeurs clés : images des extrema et limites aux bornes.`,
        },
        {
          type: 'warning',
          id: 'warn16',
          titre: `La Vérification — contrôle de cohérence obligatoire`,
          contenu: `Si une flèche « montante » relie une valeur haute à une valeur plus basse (ex. de $5$ vers $2$), il y a une erreur dans tes images ou tes limites. Le signe de $f'$ et la direction de la flèche doivent être en parfait accord.`,
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
            [`🟢 BASE`, `Tableau d'un polynôme du 2nd degré`, `Dérivée du 1er degré, une seule racine.`, `ET-1`],
            [`🟡 MOYEN`, `Fraction rationnelle avec valeur interdite`, `Quotient — double barre au point exclu.`, `ET-2`],
            [`🟡 MOYEN`, `Maximum global sur un intervalle fermé`, `Intervalle borné — comparer extrema ET bornes.`, `ET-3`],
            [`🔴 BAC`, `Variations + inégalité par le minimum`, `« Montrer que $f(x) \\geq k$ » pour tout $x$.`, `ET-4`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Tableau d'un polynôme du 2nd degré.** Soit $f$ définie sur $\\mathbb{R}$ par $f(x) = x^2 - 4x + 3$. Dresser le tableau de variations complet de $f$, puis en déduire l'extremum et sa nature.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Polynôme du second degré — dérivée du premier degré, une seule racine. On cherche le virage de la parabole.` },
            { name: `Étape 1`, contenu: `$f'(x) = 2x - 4$.` },
            { name: `Étape 2`, contenu: `$f'(x) = 0 \\iff x = 2$.` },
            { name: `Étape 3`, contenu: `Coefficient de $x$ positif : $f' < 0$ avant $2$, $f' > 0$ après.` },
            { name: `Étape 4`, contenu: `$f(2) = 4 - 8 + 3 = -1$.` },
          ],
          reponse: `$f'$ passe de $-$ à $+$ en $2$ : $f$ admet un **minimum** en $x = 2$, de valeur $-1$.`,
          conseil: `$x = 2$ est l'endroit où le gbaka fait demi-tour au fond de la vallée ; l'altitude minimale est $-1$.`,
          piege: `Ne confonds pas le signe de $f(x)$ et celui de $f'(x)$ : seule la dérivée décide de la direction de la flèche.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `La fonction $f$ est dérivable sur $\\mathbb{R}$ comme polynôme. Pour tout $x \\in \\mathbb{R}$ : $f'(x) = 2x - 4$, et $f'(x) = 0 \\iff x = 2$.

Pour tout $x \\in\\ ]-\\infty\\ ;\\ 2[$, $f'(x) < 0$ : $f$ est strictement décroissante sur $]-\\infty\\ ;\\ 2]$. Pour tout $x \\in\\ ]2\\ ;\\ +\\infty[$, $f'(x) > 0$ : $f$ est strictement croissante sur $[2\\ ;\\ +\\infty[$.`,
        },
        {
          type: 'table',
          id: 'tv-et1',
          titre: `Tableau de variations`,
          headers: [`$x$`, `$-\\infty$`, ``, `$2$`, ``, `$+\\infty$`],
          rows: [
            [`$f'(x)$`, ``, `$-$`, `$0$`, `$+$`, ``],
            [`$f(x)$`, ``, `$\\searrow$`, `$-1$`, `$\\nearrow$`, ``],
          ],
        },
        {
          type: 'text',
          id: 'b-copie1b',
          contenu: `$f'$ s'annule en $2$ en changeant de signe de $-$ vers $+$, donc $f$ admet un minimum en $x = 2$, de valeur $f(2) = -1$.

*[Barème type BAC : calcul de $f'(x)$ 0,5 pt · racine et signe 0,5 pt · tableau avec $f(2)=-1$ 1 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Fraction rationnelle avec valeur interdite.** Soit $g$ définie sur $\\mathbb{R} \\setminus \\{-2\\}$ par $g(x) = \\dfrac{2x-1}{x+2}$. Dresser le tableau de variations de $g$. On donne $\\displaystyle\\lim_{x \\to \\pm\\infty} g(x) = 2$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Fraction rationnelle — règle du quotient, double barre obligatoire en $x = -2$.` },
            { name: `Étape 1`, contenu: `$u = 2x-1$, $u' = 2$ ; $v = x+2$, $v' = 1$ : $g'(x) = \\dfrac{2(x+2) - (2x-1)}{(x+2)^2} = \\dfrac{5}{(x+2)^2}$.` },
            { name: `Étape 2`, contenu: `$5 > 0$ et $(x+2)^2 > 0$ pour $x \\neq -2$ : donc $g'(x) > 0$ sur tout le domaine.` },
          ],
          reponse: `$g$ est strictement croissante sur $]-\\infty\\ ;\\ -2[$ et sur $]-2\\ ;\\ +\\infty[$.`,
          conseil: `Un dénominateur au carré ne se développe jamais : il est toujours positif, le signe de $g'$ vient du seul numérateur. Lecture immédiate.`,
          piege: `La double barre en $x = -2$ est obligatoire dans la ligne de $g'$ **et** dans celle de $g$. L'oublier laisse croire que la fonction traverse la valeur interdite.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `La fonction $g$ est dérivable sur $]-\\infty\\ ;\\ -2[$ et sur $]-2\\ ;\\ +\\infty[$. Pour tout $x \\in \\mathbb{R} \\setminus \\{-2\\}$ :

$$g'(x) = \\dfrac{2(x+2) - (2x-1)}{(x+2)^2} = \\dfrac{5}{(x+2)^2}$$

$(x+2)^2 > 0$ et $5 > 0$, donc $g'(x) > 0$ sur tout le domaine.`,
        },
        {
          type: 'table',
          id: 'tv-et2',
          titre: `Tableau de variations`,
          headers: [`$x$`, `$-\\infty$`, ``, `$-2$`, ``, `$+\\infty$`],
          rows: [
            [`$g'(x)$`, ``, `$+$`, `||`, `$+$`, ``],
            [`$g(x)$`, `$2$`, `$\\nearrow$`, `||`, `$\\nearrow$`, `$2$`],
          ],
        },
        {
          type: 'text',
          id: 'b-copie2b',
          contenu: `*[Barème type BAC : formule du quotient 0,75 pt · signe justifié 0,5 pt · tableau avec double barre et limites 0,75 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 3 — Maximum global sur un intervalle fermé.** Soit $h$ définie sur $[-1\\ ;\\ 2]$ par $h(x) = 2x^3 - 3x^2$. Déterminer les extrema locaux de $h$ et la valeur du maximum global sur $[-1\\ ;\\ 2]$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Intervalle fermé borné — il faut comparer les extrema locaux **et** les valeurs aux deux bornes.` },
            { name: `Étape 1`, contenu: `$h'(x) = 6x^2 - 6x = 6x(x-1)$.` },
            { name: `Étape 2`, contenu: `Racines : $x = 0$ et $x = 1$, toutes deux dans $[-1\\ ;\\ 2]$.` },
            { name: `Étape 3`, contenu: `Coefficient de $x^2$ positif : $h' < 0$ entre les racines, $> 0$ ailleurs.` },
            { name: `Étape 4`, contenu: `Bornes : $h(-1) = -5$ et $h(2) = 4$. Extrema : $h(0) = 0$ et $h(1) = -1$.` },
          ],
          reponse: `Maximum local $h(0)=0$, minimum local $h(1)=-1$ ; **maximum global $= 4$**, atteint en $x = 2$.`,
          conseil: `Maximum local = sommet d'une colline de quartier ; maximum global = point le plus haut de tout le trajet. Ici le bout de route ($x=2$) bat le sommet local.`,
          piege: `$(-1)^3 = -1$ mais $(-1)^2 = +1$ : les signes des puissances de nombres négatifs sont le piège des bornes. Calcule-les au brouillon.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$h$ est dérivable sur $[-1\\ ;\\ 2]$. Pour tout $x \\in [-1\\ ;\\ 2]$ : $h'(x) = 6x^2 - 6x = 6x(x-1)$, et $h'(x) = 0 \\iff x = 0$ ou $x = 1$.`,
        },
        {
          type: 'table',
          id: 'tv-et3',
          titre: `Tableau de variations`,
          headers: [`$x$`, `$-1$`, ``, `$0$`, ``, `$1$`, ``, `$2$`],
          rows: [
            [`$h'(x)$`, ``, `$+$`, `$0$`, `$-$`, `$0$`, `$+$`, ``],
            [`$h(x)$`, `$-5$`, `$\\nearrow$`, `$0$`, `$\\searrow$`, `$-1$`, `$\\nearrow$`, `$4$`],
          ],
        },
        {
          type: 'text',
          id: 'b-copie3b',
          contenu: `$h(0) = 0$ est un maximum local, $h(1) = -1$ un minimum local. En comparant $-5\\ ;\\ 0\\ ;\\ -1\\ ;\\ 4$, le maximum global sur $[-1\\ ;\\ 2]$ est $\\mathbf{4}$, atteint en $x = 2$.

*[Barème type BAC : dérivée et racines 0,5 pt · tableau avec bornes 0,5 pt · images correctes 0,5 pt · conclusion maximum global 0,5 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et4',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 4 — Démontrer une inégalité par le minimum.** Soit $k$ définie sur $]0\\ ;\\ +\\infty[$ par $k(x) = x + \\dfrac{4}{x}$. (1) Dresser le tableau de variations de $k$. (2) En déduire que pour tout $x > 0$, $k(x) \\geq 4$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Démontrer une inégalité par les variations — on cherche le minimum de $k$. Si le point le plus bas de la route est à l'altitude $4$, alors $k$ ne descend jamais sous $4$.` },
            { name: `Étape 1`, contenu: `$k'(x) = 1 - \\dfrac{4}{x^2} = \\dfrac{x^2 - 4}{x^2} = \\dfrac{(x-2)(x+2)}{x^2}$.` },
            { name: `Étape 2`, contenu: `Sur $]0\\ ;\\ +\\infty[$ : $x^2 > 0$ et $x+2 > 0$, donc le signe de $k'$ est celui de $(x-2)$. Racine : $x = 2$.` },
            { name: `Étape 3`, contenu: `$k' < 0$ sur $]0\\ ;\\ 2[$, $k' > 0$ sur $]2\\ ;\\ +\\infty[$.` },
            { name: `Étape 4`, contenu: `$k(2) = 2 + \\dfrac{4}{2} = 4$.` },
          ],
          reponse: `$k$ admet un minimum en $x=2$ de valeur $4$, donc $k(x) \\geq 4$ pour tout $x > 0$.`,
          conseil: `Pour la question 2, pas d'inéquation à résoudre. La phrase magique : *« D'après le tableau, $k$ admet un minimum en $x=2$ de valeur $4$, donc $k(x) \\geq 4$ pour tout $x > 0$. »* Une ligne, tous les points.`,
          piege: `Reste dans le domaine $]0\\ ;\\ +\\infty[$ : la racine $x = -2$ de $(x+2)$ est hors domaine, inutile de la traiter.`,
        },
        {
          type: 'text',
          id: 'b-copie4',
          titre: `✍️ La Copie Parfaite`,
          contenu: `**(1)** $k$ est dérivable sur $]0\\ ;\\ +\\infty[$. Pour tout $x > 0$ :

$$k'(x) = 1 - \\dfrac{4}{x^2} = \\dfrac{x^2-4}{x^2} = \\dfrac{(x-2)(x+2)}{x^2}$$

Comme $x > 0$ : $x^2 > 0$ et $x+2 > 0$, donc le signe de $k'(x)$ est celui de $(x-2)$, et $k'(x) = 0 \\iff x = 2$.`,
        },
        {
          type: 'table',
          id: 'tv-et4',
          titre: `Tableau de variations`,
          headers: [`$x$`, `$0$`, ``, `$2$`, ``, `$+\\infty$`],
          rows: [
            [`$k'(x)$`, `||`, `$-$`, `$0$`, `$+$`, ``],
            [`$k(x)$`, `||`, `$\\searrow$`, `$4$`, `$\\nearrow$`, ``],
          ],
        },
        {
          type: 'text',
          id: 'b-copie4b',
          contenu: `**(2)** D'après le tableau, $k$ admet un minimum en $x = 2$, de valeur $k(2) = 4$. Par conséquent, pour tout $x \\in\\ ]0\\ ;\\ +\\infty[$, $k(x) \\geq k(2)$, soit $k(x) \\geq 4$. $\\square$

*[Barème type BAC : calcul et factorisation de $k'(x)$ 0,5 pt · tableau avec $k(2)=4$ 0,75 pt · image du minimum 0,25 pt · raisonnement pour l'inégalité 0,5 pt — Total : 2 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Résultats finaux seulement :

- **Exercice 1.** Soit $f(x) = 2x^2 - 4x + 1$ sur $\\mathbb{R}$. Dresse le tableau de variations et donne l'extremum. *(Réponse : minimum en $x = 1$, $f(1) = -1$.)*
- **Exercice 2.** Soit $g(x) = x^3 - 3x$ sur $\\mathbb{R}$. Détermine les extrema locaux. *(Réponse : maximum local en $x = -1$, $g(-1) = 2$ ; minimum local en $x = 1$, $g(1) = -2$.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m4',
          titre: `À retenir`,
          contenu: [
            `Le **signe de $f'(x)$ pilote la flèche** — et lui seul : positif → montée $\\nearrow$, négatif → descente $\\searrow$.`,
            `📘 Vocabulaire officiel : strictement croissante/décroissante, fonction monotone, extremum local, maximum global.`,
            `Un extremum exige un **changement de signe** de $f'$ : $f'(a) = 0$ ne suffit pas.`,
            `Une **inégalité $f(x) \\geq k$ se lit dans le tableau** : $k$ est souvent simplement le minimum de $f$.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m4',
          titre: `Fil rouge`,
          contenu: `Maintenant qu'on sait cartographier une courbe entière, on va zoomer sur **un seul point** et tracer la droite qui l'effleure exactement : la **tangente**. On l'a croisée au Module 1 ($y = f'(a)(x-a) + f(a)$) ; au **Module 5**, on en fait un outil complet — calcul, tracé, position de la courbe par rapport à elle. On va gâter le coin, Champion(ne) !`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m4',
          titre: `Auto-évaluation — Module 4`,
          contenu: [
            `Je fais le lien immédiat entre le signe de $f'(x)$ et la direction de la flèche du tableau.`,
            `J'utilise le vocabulaire officiel (strictement monotone, extremum local, maximum global) dans ma rédaction.`,
            `Je sais prouver la nature d'un extremum en vérifiant le changement de signe de $f'$.`,
            `Je pense à comparer les valeurs aux bornes ET aux extrema locaux quand l'intervalle est fermé.`,
            `Je sais démontrer une inégalité $f(x) \\geq k$ en identifiant $k$ comme le minimum de $f$.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m4',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Le coin est gâté. File vers le Module 5 !`,
            `🟡 **3 ou 4** → Relis la Procédure en 5 étapes et refais l'Exercice-Type 4 — la démonstration d'inégalité par le minimum est la question qui revient le plus au BAC.`,
            `🔴 **0 à 2** → Reprends l'analogie du Mont Tonkoui au ② Le Réel. La montée, le sommet, la descente — vois la courbe comme un trajet et le tableau devient une évidence. Faut pas gnan !`,
          ],
        },
      ],
    },
  ],
};
