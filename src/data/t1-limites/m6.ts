import { Chapitre } from '../../types/course';

export const chapitreM6: Chapitre = {
  id: 't1-m6',
  titre: `Module 6 — TVI et Bijection`,
  duree: 25,
  niveau: 'BAC',
  xpGain: 35,
  objectifs: [
    `Distinguer le TVI général (existence d'une solution) du Théorème de la Bijection (existence ET unicité)`,
    `Énoncer les deux théorèmes avec le vocabulaire officiel exigé au BAC`,
    `Prouver qu'une équation admet une unique solution en alignant les trois critères de la Bijection`,
    `Utiliser ta calculatrice et la dichotomie en Python pour piéger un nombre mystère $\\alpha$ dans un encadrement serré`,
    `Reboucher proprement le trou d'une fonction par prolongement par continuité`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, j'ai un sérieux problème avec un exercice du Prépa Bac de Djaha Akoupé. Le prof nous demande de trouver la solution de l'équation $x^3 - x^2 + x + 1 = 0$. J'ai essayé de factoriser dans tous les sens, j'ai cherché des racines évidentes, j'ai noirci trois pages de brouillon. Impossible de m'en sortir. C'est quoi l'astuce ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Pose ton bic deux minutes, Champion(ne), et respire. Regarde bien la consigne. Est-ce que le texte te dit « résous l'équation » ? Non. Il te dit « démontre que l'équation admet une solution unique ». C'est un piège classique où tombent presque tous les élèves. On ne te demande pas de calculer ce nombre, on te demande juste de prouver qu'il existe et qu'il est tout seul. C'est toute la magie du module d'aujourd'hui. Et au passage, on va enfin s'occuper de cette pauvre fonction du Module 5 qui avait un trou sous son péage : on va apprendre à réparer le bitume.`,
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
          contenu: `Imagine que tu quittes la gare d'Adjamé dans un gbaka bondé pour te rendre à une fête à Bingerville. Au départ, ton téléphone affiche une altitude de 15 mètres au-dessus du niveau de la mer. À l'arrivée, tu te retrouves sur les hauteurs de Bingerville à 45 mètres d'altitude.

Si la route est entière — pas de pont effondré, pas de crevasse géante au milieu du trajet — tu te doutes bien que le gbaka est forcément passé par l'altitude exacte de 30 mètres à un moment donné. C'est mathématique. Tu n'as pas besoin de connaître la position exacte minute par minute pour en être sûr : la route est continue, donc tu as franchi toutes les altitudes intermédiaires.

Pour le deuxième outil du jour, c'est exactement la même logique humaine. Tu te souviens du nid-de-poule resté ouvert à la fin du Module 5 ? La route était magnifique avant le point $1$, magnifique après, mais vide juste au point $1$. Boucher ce trou, c'est simplement y déposer une miche de bitume qui a exactement la hauteur logique visée par la route. En maths, on appelle ça **prolonger par continuité**.`,
        },
        {
          type: 'figure',
          id: 'fig-m6-1',
          src: '/images/t1/fig_M6_1.png',
          legende: `TVI : la courbe continue franchit $0$ en $\\alpha\\in\\,]a\\,;\\,b[$.`,
          alt: `TVI : la courbe continue franchit $0$ en $\\alpha\\in\\,]a\\,;\\,b[$.`,
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
          contenu: `Mettons des lettres et des symboles sur ce voyage en gbaka.

- Le trajet du gbaka, c'est la courbe de ta fonction $f$.
- L'altitude de départ à Adjamé, c'est la valeur $f(a)$, et celle de Bingerville, c'est $f(b)$.
- L'altitude de 30 mètres que tu es obligé de croiser, c'est notre valeur cible, appelons-la $k$.

Si ta route ne fait aucun saut (**continuité**), alors le gbaka franchit forcément l'altitude $k$ **au moins une fois** : c'est le TVI général. Et si en plus elle monte du début à la fin sans jamais redescendre (**stricte monotonie**), alors elle ne franchit cette altitude qu'**une seule et unique fois** : c'est le Théorème de la Bijection.

Voici la double correspondance — TVI / Bijection et Prolongement — en un seul tableau :`,
        },
        {
          type: 'table',
          id: 'tbl5',
          headers: [`Scène du quartier`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`L'altitude de départ à Adjamé (15 m)`, `$f(a)$`, `L'image de la fonction à la borne gauche`],
            [`L'altitude d'arrivée à Bingerville (45 m)`, `$f(b)$`, `L'image de la fonction à la borne droite`],
            [`L'altitude de 30 m obligatoirement franchie`, `$k$`, `La valeur cible entre $f(a)$ et $f(b)$`],
            [`La route entière, sans pont effondré`, `Continuité de $f$`, `La courbe ne se déchire pas sur l'intervalle`],
            [`La route qui monte sans jamais redescendre`, `Stricte monotonie`, `La fonction est toujours croissante (ou toujours décroissante)`],
            [`Le point exact de passage à 30 m d'altitude`, `$\\\\alpha$`, `La solution de l'équation $f(x) = k$`],
            [`Le nid-de-poule resté ouvert sur la route`, `Point interdit $x_0$`, `La valeur où la fonction n'est pas définie`],
            [`La miche de bitume posée à la bonne hauteur`, `$g(x_0) = L$`, `Le prolongement par continuité — on rebouche le trou`],
          ],
        },
        {
          type: 'text',
          id: 'b6',
          contenu: `Pour le prolongement, la traduction est tout aussi directe. La hauteur logique visée par la route en ce point interdit, c'est la **limite** de la fonction en $x_0$. Si cette limite existe et est un réel fini $L$, alors on peut reboucher le trou en posant $g(x_0) = L$. La route est réparée.`,
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
          contenu: `Si $f$ est **continue** sur un intervalle $[a\\,;\\,b]$, et si $k$ est un réel compris entre $f(a)$ et $f(b)$, alors l'équation $f(x) = k$ admet **au moins une** solution dans $[a\\,;\\,b]$.`,
        },
        {
          type: 'rule',
          id: 'rule8',
          titre: `Règle`,
          contenu: `Si $f$ est **continue** ET **strictement monotone** sur $[a\\,;\\,b]$, alors $f$ réalise une **bijection** de $[a\\,;\\,b]$ sur $[f(a)\\,;\\,f(b)]$ (ou $[f(b)\\,;\\,f(a)]$ selon le sens de variation).

**Conséquence directe pour le BAC.** Pour tout réel $k$ compris entre $f(a)$ et $f(b)$, l'équation $f(x) = k$ admet une **unique** solution $\\alpha$ dans $[a\\,;\\,b]$.

En particulier, si $f(a) \\times f(b) < 0$, l'équation $f(x) = 0$ admet une unique solution $\\alpha$ dans $]a\\,;\\,b[$.`,
        },
        {
          type: 'rule',
          id: 'rule9',
          titre: `Règle`,
          contenu: `Soit $f$ une fonction dont le domaine de définition ne contient pas le point $x_0$.

Si $\\displaystyle\\lim_{x \\to x_0} f(x) = L$ avec $L \\in \\mathbb{R}$ (limite **finie**), alors on peut définir une nouvelle fonction $g$ par :
$$g(x) = f(x) \\text{ si } x \\neq x_0, \\qquad g(x_0) = L$$

Cette fonction $g$ est **continue en $x_0$**, et on dit que $g$ est le **prolongement par continuité** de $f$ en $x_0$.`,
        },
      ],
    },
    {
      id: 's5',
      titre: `⑤ LA DESCENTE`,
      blocs: [
        {
          type: 'text',
          id: 'b10',
          contenu: `### Le Diagnostic

Sur ta copie de Terminale D, la question incontournable se repère de loin : *« Montrer que l'équation admet une unique solution $\\alpha$ sur l'intervalle… »*. Dès que tu vois ça, ne cherche pas à résoudre. C'est l'indicateur qu'il faut sortir l'artillerie du Théorème de la Bijection en trois étapes.

Pour le prolongement, cherche la phrase : *« $f$ admet-elle un prolongement par continuité en $x_0$ ? »*.

Tu connais l'ambiance des devoirs de quatre heures où la salle devient si silencieuse qu'on n'entend plus que le bruit des calculatrices. La moitié de la classe va oublier d'écrire le mot **« strictement »** avant « monotone ». Le prof va barrer toute la logique d'unicité à cause de ce petit mot manquant. Reste vigilant, écris-le en toutes lettres.

### L'Arbre de décision`,
        },
        {
          type: 'table',
          id: 'tbl11',
          headers: [`Si l'énoncé demande de…`, `Ce que tu dois aligner`],
          rows: [
            [`Prouver l'existence d'une solution (sans unicité)`, `TVI général : ① Justifier la continuité ② Vérifier le changement de signe aux bornes : f(a) × f(b) < 0 ③ Conclure par le TVI`],
            [`Prouver une solution UNIQUE α`, `Théorème de la Bijection : ① Justifier la continuité ② Prouver la stricte monotonie (dérivée de signe constant) ③ Vérifier le changement de signe aux bornes : f(a) × f(b) < 0 ④ Conclure par la Bijection`],
            [`Trouver un encadrement de α à 10⁻² près`, `Utiliser le mode TABLE de la calculatrice : balayage au pas 0,1 pour repérer le changement de signe, puis pas 0,01 entre les deux nouvelles bornes. Ou utiliser l'algorithme de dichotomie en Python (voir Coin du Code).`],
            [`Prolonger une fonction en un trou x₀`, `Calculer lim f(x) quand x → x₀. Si la limite est un réel fini L, poser g(x₀) = L et conclure. Si la limite est infinie, le prolongement est impossible.`],
          ],
        },
        {
          type: 'text',
          id: 'b12',
          contenu: `### La Procédure — Théorème de la Bijection

**Étape 1.** Annonce que $f$ est **continue** sur l'intervalle de travail (les fonctions usuelles — polynômes, exponentielles, logarithmes — le sont toujours sur leur domaine).

**Étape 2.** Dérive la fonction. Si $f'(x)$ garde un signe constant sur l'intervalle, la fonction est **strictement monotone**. Écris ce mot en toutes lettres.

**Étape 3.** Calcule les images des bornes. L'une doit être positive, l'autre négative. Vérifie que leur produit est **strictement négatif**.

**Étape 4.** Conclus par le Théorème de la Bijection : l'équation $f(x) = 0$ admet une **unique** solution $\\alpha$ dans l'intervalle.

### La Procédure — Le Prolongement par Continuité

**Étape 1.** Identifie le point interdit $x_0$ et calcule $\\displaystyle\\lim_{x \\to x_0} f(x)$. Lève l'éventuelle indétermination (factorisation, conjugué, selon le module concerné).

**Étape 2.** Si la limite est un réel fini $L$, pose $g(x_0) = L$ et conclus que $g$ est le prolongement par continuité de $f$ en $x_0$.

### 💻 Le Coin du Code — L'Algorithme de Dichotomie (Python)

Le programme officiel du BAC intègre désormais l'algorithmique. Voici comment traduire ton balayage de calculatrice en un script Python propre pour encadrer $\\alpha$ à $10^{-p}$ près.

\`\`\`python
def dichotomie(f, a, b, p):
    # f : la fonction, [a, b] : l'intervalle, p : la précision (ex. 2 pour 10^-2)
    while (b - a) > 10**(-p):
        m = (a + b) / 2
        if f(a) * f(m) <= 0:
            b = m   # D'après le TVI, la racine est dans [a, m]
        else:
            a = m   # D'après le TVI, la racine est dans [m, b]
    return a, b
\`\`\`

💬 **Le message du Grand Frère.** Cet algorithme coupe l'intervalle en deux à chaque étape (comme couper un trait en son milieu). C'est la traduction informatique exacte du TVI ! Tu n'as plus besoin de faire 50 fois « Suivant » sur ta calculatrice — l'ordinateur le fait en une fraction de seconde.

### La Vérification

- **Théorème de la Bijection :** vérifie à la calculatrice que tes deux images de bornes ont bien des signes opposés. Si elles ont le même signe, il y a une erreur de calcul — repars des valeurs numériques.
- **Encadrement :** après balayage au pas $0,01$ (ou après dichotomie), les deux bornes encadrant $\\alpha$ doivent donner des images de signes contraires. Écris l'encadrement explicitement : $b_1 < \\alpha < b_2$.
- **Prolongement :** si la limite est infinie, arrête tout — le trou est impossible à boucher. Un point de vigilance essentiel qui fait perdre des points si on continue malgré tout.`,
        },
        {
          type: 'figure',
          id: 'fig-m6-2',
          src: '/images/t1/fig_M6_2.png',
          legende: `Sans monotonie : plusieurs solutions — avec stricte monotonie : une seule.`,
          alt: `Sans monotonie : plusieurs solutions — avec stricte monotonie : une seule.`,
        },
      ],
    },
    {
      id: 's-bac-5',
      titre: `📘 LANGAGE OFFICIEL DU BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b13',
          contenu: `Champion(ne), tu as l'image du gbaka et de l'altitude. Maintenant, ta copie doit parler le langage rigoureux des maths. **Ici, deux théorèmes distincts cohabitent — tu dois les nommer chacun par son nom.**

**Définition formelle — Théorème des Valeurs Intermédiaires (TVI général).** Si $f$ est une fonction **continue** sur un intervalle $[a\\,;\\,b]$, alors pour tout réel $k$ compris entre $f(a)$ et $f(b)$, l'équation $f(x) = k$ admet **au moins une** solution dans $[a\\,;\\,b]$.


**Définition formelle — Théorème de la Bijection (Corollaire du TVI).** Si $f$ est **continue** ET **strictement monotone** sur un intervalle $[a\\,;\\,b]$, alors $f$ réalise une **bijection** de $[a\\,;\\,b]$ sur $[f(a)\\,;\\,f(b)]$ (ou $[f(b)\\,;\\,f(a)]$ selon le sens). Pour tout réel $k$ compris entre $f(a)$ et $f(b)$, l'équation $f(x) = k$ admet une **unique** solution $\\alpha$ dans $[a\\,;\\,b]$.


**Définition formelle — Prolongement par continuité.** Soit $f$ une fonction définie sur un intervalle ouvert privé d'un point $x_0$. Si $\\displaystyle\\lim_{x \\to x_0} f(x) = L$ avec $L$ réel, on appelle **prolongement par continuité de $f$ en $x_0$** la fonction $g$ définie par :
$$g(x) = f(x) \\text{ si } x \\neq x_0, \\qquad g(x_0) = L$$

**En langage courant.** Le **TVI** te garantit qu'il existe au moins un point où la route croise une altitude donnée. La **Bijection** ajoute la stricte monotonie pour qu'il n'y en ait qu'**un seul**. Le **prolongement par continuité**, c'est boucher un trou avec la valeur que la limite désigne.`,
        },
        {
          type: 'figure',
          id: 'fig-m6-3',
          src: '/images/t1/fig_M6_3.png',
          legende: `Prolongement par continuité : trou bouché à la hauteur $L$.`,
          alt: `Prolongement par continuité : trou bouché à la hauteur $L$.`,
        },
        {
          type: 'warning',
          id: 'warn14',
          titre: `Piège à éviter`,
          contenu: `- **TVI** ou **Théorème des Valeurs Intermédiaires** — quand seule l'existence est demandée.
- **Théorème de la Bijection** (ou **Corollaire du TVI**) — quand l'unicité est exigée. C'est ce théorème qu'on utilise dans 95 % des sujets BAC ivoiriens.
- **Réalise une bijection de $I$ sur $J$** — la formule officielle qui résume le théorème.
- **Stricte monotonie** — toujours avec « strictement » écrit en toutes lettres. Un seul mot oublié, et l'unicité s'effondre.
- **Prolongement par continuité** — l'expression complète, jamais juste « prolongement ».`,
        },
        {
          type: 'tip',
          id: 'tip15',
          titre: `Conseil`,
          contenu: `Le correcteur attend la phrase officielle : *« La fonction $f$ est continue et strictement monotone sur $[a\\,;\\,b]$ ; d'après le théorème de la bijection, l'équation $f(x) = k$ admet une unique solution $\\alpha$ dans cet intervalle. »* Sans cette phrase, pas de points sur l'argument.`,
        },
      ],
    },
    {
      id: 's-exo-6',
      titre: `Exercices-Types`,
      blocs: [
        {
          type: 'exercise',
          id: 'extype16',
          niveau: 'BAC',
          enonce: `Soit $g$ la fonction définie sur $\\mathbb{R}$ par $g(x) = x^3 - x^2 + x + 1$.

1. Dresse le tableau de variation de $g$ (on admettra les limites en l'infini).
2. Démontre que l'équation $g(x) = 0$ admet une solution unique notée $\\alpha$ dans $\\mathbb{R}$.
3. Vérifie que $\\alpha \\in \\,]-1\\,;\\,0[$ et détermine un encadrement de $\\alpha$ à $10^{-2}$ près.`,
          etapes: [
            { name: `Étape 1 — Tableau de variation`, contenu: `Dérivons : $g'(x) = 3x^2 - 2x + 1$.

Calculons le discriminant : $\\Delta = (-2)^2 - 4 \\times 3 \\times 1 = 4 - 12 = -8$.

$\\Delta < 0$ : $g'(x)$ est du signe de son coefficient dominant $3$, donc $g'(x) > 0$ pour tout $x \\in \\mathbb{R}$. La fonction $g$ est **strictement croissante** sur $\\mathbb{R}$.` },
            { name: `Étape 2 — Existence et unicité`, contenu: `La fonction $g$ est continue et strictement croissante sur $\\mathbb{R}$. Elle réalise donc une bijection de $\\mathbb{R}$ sur $]-\\infty\\,;\\,+\\infty[$. Comme $0 \\in \\mathbb{R}$, l'équation $g(x) = 0$ admet une **unique** solution $\\alpha$ dans $\\mathbb{R}$.

<dialogue role="pf">Ah, donc comme elle monte tout le temps sans jamais redescendre, elle ne peut couper l'axe des abscisses qu'une seule fois ?</dialogue>

<dialogue role="gf">C'est exactement ça, Champion(ne) ! Tu as capté l'essence même de la stricte monotonie.</dialogue>` },
            { name: `Étape 3 — Localisation et encadrement`, contenu: `Calculons les images des bornes proposées :

$g(-1) = (-1)^3 - (-1)^2 + (-1) + 1 = -1 - 1 - 1 + 1 = -2$.

$g(0) = 0^3 - 0^2 + 0 + 1 = 1$.

On a $g(-1) < 0$ et $g(0) > 0$, donc $g(-1) \\times g(0) < 0$. Ainsi $\\alpha \\in \\,]-1\\,;\\,0[$.

Par balayage successif à la calculatrice avec un pas de $0{,}01$ :

$g(-0{,}55) \\approx -0{,}02$ et $g(-0{,}54) \\approx 0{,}01$.

Le changement de signe se produit entre $-0{,}55$ et $-0{,}54$, donc : $-0{,}55 < \\alpha < -0{,}54$.` },
            { name: `Étape 1`, contenu: `Cherchons la limite en $1$. Par substitution directe, on obtient la forme indéterminée $\\dfrac{0}{0}$. On lève l'indétermination par factorisation :
$$x^2 - 1 = (x-1)(x+1)$$

Pour tout $x \\neq 1$ :
$$f(x) = \\dfrac{(x-1)(x+1)}{x-1} = x + 1$$

Donc : $\\displaystyle\\lim_{x \\to 1} f(x) = \\lim_{x \\to 1} (x + 1) = 2$.` },
            { name: `Étape 2`, contenu: `La limite en $1$ est le réel fini $L = 2$. Le trou est donc parfaitement localisé et réparable. On définit le prolongement.` },
          ],
          reponse: ``,
          conseil: `Pour l'encadrement par balayage, configure ta calculatrice en mode TABLE. Si on te demande une précision à $10^{-2}$ près, fais un premier balayage au pas de $0{,}1$ pour repérer où le signe change, puis relance un tableau entre ces deux nouvelles valeurs avec un pas de $0{,}01$. Tu peux aussi traduire le procédé en Python par dichotomie (voir Coin du Code).`,
          piege: `Le Théorème de la Bijection ne donne jamais la valeur exacte de $\\alpha$. Ne perds pas ton temps à essayer de deviner une fraction magique. Si le correcteur demande un encadrement, donne-lui ses deux bornes numériques et garde le cap pour la suite du problème.`,
        },
        {
          type: 'rule',
          id: 'copie17',
          titre: `La Copie Parfaite`,
          contenu: `**1.** La fonction $g$ est dérivable sur $\\mathbb{R}$. Pour tout $x \\in \\mathbb{R}$ : $g'(x) = 3x^2 - 2x + 1$.

Le discriminant de ce polynôme est $\\Delta = (-2)^2 - 4(3)(1) = -8$.

Comme $\\Delta`,
        },
        {
          type: 'exercise',
          id: 'exo18',
          niveau: 'MOYEN',
          enonce: `Soit $h$ définie sur $\\mathbb{R} \\setminus \\{3\\}$ par $h(x) = \\dfrac{x^2 - 9}{x - 3}$. Détermine la valeur qu'il faut attribuer à $h(3)$ pour prolonger cette route sans créer de secousse.
  *(Réponse : $h(3) = 6$, car $\\displaystyle\\lim_{x \\to 3} h(x) = \\lim_{x \\to 3} (x+3) = 6$.)*`,
          etapes: [
          ],
          reponse: ``,
        },
        {
          type: 'exercise',
          id: 'exo19',
          niveau: 'MOYEN',
          enonce: `Soit $f(x) = x^3 + 2x - 5$ définie sur $\\mathbb{R}$. Montre que l'équation $f(x) = 0$ admet une unique solution $\\alpha$ sur $\\,]1\\,;\\,2[$.
  *(Réponse : $f'(x) = 3x^2 + 2 > 0$ → $f$ strictement croissante. $f(1) = -2 < 0$, $f(2) = 7 > 0$ → $f(1) \\times f(2) < 0$ → unique $\\alpha \\in \\,]1\\,;\\,2[$ par le Théorème de la Bijection.)*`,
          etapes: [
          ],
          reponse: ``,
        },
        {
          type: 'exercise',
          id: 'exo20',
          niveau: 'MOYEN',
          enonce: `Soit $f(x) = \\dfrac{x^2 - 4x + 3}{x - 1}$ définie sur $\\mathbb{R} \\setminus \\{1\\}$. Quelle valeur faut-il attribuer à $f(1)$ pour que $f$ soit continue en $1$ ?
  *(Réponse : $f(1) = -2$, car $x^2 - 4x + 3 = (x-1)(x-3)$, donc $f(x) = x - 3$ pour $x \\neq 1$, et $\\displaystyle\\lim_{x \\to 1} f(x) = -2$.)*`,
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
          id: 'recap21',
          titre: `À retenir`,
          contenu: [
            `**TVI général** : continuité seule → garantit l'**existence** (au moins une solution).`,
            `**Théorème de la Bijection** : continuité + stricte monotonie → garantit l'**existence ET l'unicité** (une seule solution).`,
            `📘 Vocabulaire officiel : continue, strictement monotone, réalise une bijection de $I$ sur $J$, corollaire du TVI, prolongement par continuité.`,
            `Pour prouver qu'une courbe coupe l'axe une seule fois, aligne : **continuité** + **stricte monotonie** + **changement de signe** aux bornes.`,
            `L'**algorithme de dichotomie en Python** est la traduction informatique du TVI : il encadre $\\alpha$ en coupant l'intervalle en deux à chaque étape.`,
            `Un prolongement par continuité ne fonctionne que si la limite au point interdit donne un **réel fini**.`,
            `Ne confonds jamais **prouver l'existence** d'une solution et **calculer** cette solution.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil22',
          titre: `Fil rouge`,
          contenu: `On sait désormais étudier les routes continues, piéger leurs intersections secrètes et réparer leurs trous locaux. Mais que se passe-t-il si notre véhicule prend de la vitesse et s'élance vers l'infini, en frôlant de très près une longue ligne droite invisible sans jamais réussir à la toucher ? Range tes outils de maçon, prépare tes longues vues : au Module 7, on attaque les **asymptotes**.`,
        },
      ],
    },
    {
      id: 's-eval-8',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval23',
          titre: `Auto-évaluation`,
          contenu: [
            `Je sais distinguer le TVI général (existence) du Théorème de la Bijection (existence + unicité) et choisir le bon selon ce que l'énoncé demande.`,
            `J'utilise le vocabulaire officiel (continue, strictement monotone, réalise une bijection, corollaire du TVI, prolongement par continuité) dans chacune de mes rédactions.`,
            `Je sais réciter les trois critères obligatoires du Théorème de la Bijection sans perdre de points.`,
            `Je sais utiliser le mode TABLE de ma calculatrice ou l'algorithme de dichotomie en Python pour coincer $\\alpha$ entre deux décimaux.`,
            `J'ai compris qu'on ne peut pas prolonger une fonction si sa limite en ce point donne un infini.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score24',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Le coin est gâté, tu as maîtrisé la bijection. En route pour le Module 7 !`,
            `🟡 **3 ou 4** → Attention à la rédaction. Relis la brique 📘 et la Copie Parfaite du Type 1 pour mémoriser l'ordre des phrases exigé au BAC.`,
            `🔴 **0 à 2** → Reviens au gbaka d'Adjamé du ② Le Réel. Il faut que tu comprennes visuellement le franchissement d'altitude avant de calculer quoi que ce soit.`,
          ],
        },
      ],
    },
  ],
};
