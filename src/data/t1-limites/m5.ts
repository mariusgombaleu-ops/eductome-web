import { Chapitre } from '../../types/course';

export const chapitreM5: Chapitre = {
  id: 't1-m5',
  titre: `Module 5 — La Continuité`,
  duree: 25,
  niveau: 'BAC',
  xpGain: 35,
  objectifs: [
    `Dire avec tes mots ce qu'est une fonction continue`,
    `Énoncer la définition formelle de la continuité en un point avec le vocabulaire officiel attendu au BAC`,
    `Vérifier si une fonction est continue en un point précis`,
    `Reconnaître d'un coup d'œil les fonctions continues sans calcul (polynômes, fractions, racines, sin, cos)`,
    `Réparer une fonction qui a un « trou » : le prolongement par continuité`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, on vient de passer des semaines sur les limites. Pourquoi on remet ça avec un nouveau mot, la « continuité » ? C'est pas la même chose ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Bonne question, Champion(ne). Non, c'est pas pareil — mais c'est cousin. La limite te dit : vers quoi la fonction se dirige quand tu t'approches d'un point. La continuité te pose une autre question, plus simple à voir : est-ce que la courbe est en un seul morceau, ou est-ce qu'elle se casse ?`,
        },
        {
          type: 'text',
          id: 'b3',
          contenu: `Jusqu'ici, pour calculer une limite en un point, tu faisais parfois un détour compliqué. Mais pour plein de fonctions, il y a un raccourci énorme : tu remplaces directement $x$ par sa valeur, et c'est fini.

La continuité, c'est exactement ça : savoir reconnaître les fonctions « gentilles » où on a le droit de remplacer directement — et repérer les fonctions « piégées » où il y a une cassure. Au BAC, c'est aussi le **passeport obligatoire** avant d'utiliser les gros théorèmes (ceux du prochain module). Sans continuité, ils sont interdits.`,
        },
      ],
    },
    {
      id: 's2',
      titre: `② LE RÉEL`,
      blocs: [
        {
          type: 'text',
          id: 'b4',
          contenu: `Imagine que tu prends un gbaka d'Adjamé jusqu'à Yopougon. Le tracé du gbaka, c'est une ligne : il roule, il roule, sans jamais disparaître pour réapparaître plus loin. Même quand il ralentit au feu, même dans les embouteillages, tu peux suivre son trajet du doigt sur la carte sans jamais lever le doigt.

Ça, c'est une fonction **continue** : un seul trait, du départ à l'arrivée.

Maintenant imagine un autre trajet. Tu es à Adjamé, et pour traverser la lagune, tu prends le bac (le bateau). Là, il se passe quelque chose : à un instant tu es sur une rive, et juste après tu es sur l'autre rive — il y a un saut, un trou dans le trajet par la route. Tu as été obligé de lever le doigt et de le reposer plus loin.

Ça, c'est une fonction **pas continue** : il y a une cassure à cet endroit précis.

La continuité, c'est tout ce mystère : *est-ce que je peux tracer ma courbe sans lever le crayon, oui ou non ?*`,
        },
        {
          type: 'figure',
          id: 'fig-m5-1',
          src: '/images/t1/fig_M5_1.png',
          legende: `Fonction continue (un seul trait) vs discontinue (saut).`,
          alt: `Fonction continue (un seul trait) vs discontinue (saut).`,
        },
      ],
    },
    {
      id: 's3',
      titre: `③ LE PONT`,
      blocs: [
        {
          type: 'text',
          id: 'b5',
          contenu: `Ce que tu viens de sentir avec le gbaka, traduisons-le, brique par brique.`,
        },
        {
          type: 'table',
          id: 'tbl6',
          headers: [`Scène du quartier`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Le gbaka roule sans s'arrêter`, `$f$ continue sur $I$`, `La courbe est un seul trait sur l'intervalle`],
            [`Suivre le trajet du doigt sans lever`, `$\\\\displaystyle\\\\lim_{x \\\\to a} f(x) = f(a)$`, `La limite tombe pile sur la valeur`],
            [`Le point $a$ sur la carte`, `$f(a)$ existe`, `La fonction est définie en ce point`],
            [`Le bac (bateau) — saut entre deux rives`, `$\\\\displaystyle\\\\lim_{x \\\\to a} f(x) \\\\neq f(a)$`, `Cassure : la courbe saute`],
            [`Lever le doigt — trou dans le trajet`, `$f$ non définie en $a$`, `Il manque un point sur la courbe`],
            [`Reposer le doigt au bon endroit`, `Prolongement : $f(a) = L$`, `On bouche le trou avec la limite`],
          ],
        },
        {
          type: 'text',
          id: 'b7',
          contenu: `« Tracer sans lever le crayon au point $a$ », ça veut dire **trois choses qui doivent toutes être vraies en même temps** :

**Brique 1 — Le point existe sur la courbe.**
Pour ne pas lever le crayon en $a$, il faut déjà que la courbe passe par là. Donc $f$ doit être définie en $a$ : $f(a)$ existe.

**Brique 2 — La courbe se dirige vers ce point.**
Quand tu t'approches de $a$ (le gbaka ralentit en arrivant), la fonction doit tendre vers une vraie valeur. Donc la limite de $f$ en $a$ existe et c'est un réel.

**Brique 3 — Et c'est le MÊME point.**
Le piège du bac : la limite peut exister, le point peut exister… mais pas au même endroit. Exemple : une fonction où, quand $x$ s'approche de $1$, la courbe se dirige vers $2$, mais le point posé en $1$ vaut $3$. La limite ($2$) et la valeur ($3$) ne tombent pas ensemble, le crayon saute. Pour que le crayon ne se lève pas, il faut que la limite **tombe pile sur $f(a)$**.

Quand ces trois briques tiennent ensemble, le crayon ne se lève pas : la fonction est continue en $a$. Limpide comme l'eau de roche, ou bien ?`,
        },
      ],
    },
    {
      id: 's4',
      titre: `④ LA RÈGLE`,
      blocs: [
        {
          type: 'rule',
          id: 'rule8',
          titre: `Règle`,
          contenu: `Soit $f$ une fonction définie sur un intervalle ouvert contenant un réel $a$. $f$ est continue en $a$ si et seulement si :
$$\\lim_{x \\to a} f(x) = f(a)$$

(les trois briques du Pont réunies en une seule ligne).`,
        },
        {
          type: 'rule',
          id: 'rule9',
          titre: `Règle`,
          contenu: `$f$ est continue sur un intervalle $K$ si elle est continue en chaque point de $K$.`,
        },
        {
          type: 'rule',
          id: 'rule10',
          titre: `Règle`,
          contenu: `On admet (programme officiel Terminale D) que :

- Les fonctions polynômes sont continues sur $\\mathbb{R}$.
- Les fonctions rationnelles sont continues sur chaque intervalle de leur ensemble de définition.
- Les fonctions $\\sqrt{\\cdot}$, $\\sin$, $\\cos$, $\\exp$ et $\\ln$ sont continues sur leur ensemble de définition.
- La somme, le produit, le quotient (à dénominateur non nul) et la composée de fonctions continues sont continues.`,
        },
        {
          type: 'tip',
          id: 'tip11',
          titre: `Conseil`,
          contenu: `Cette dernière règle, c'est ton meilleur ami au BAC. Elle veut dire qu'environ 95 % du temps, tu n'as rien à calculer : tu regardes la fonction, tu dis « c'est un polynôme, un quotient, une composée de fonctions continues », et tu conclus en une phrase. On reverra ça dans la Descente.

**Exemples.**

- $f(x) = x^2 - 3x + 1$ est un polynôme, continue sur $\\mathbb{R}$, rien à démontrer.
- $g(x) = \\dfrac{x+1}{x-3}$ est un quotient de fonctions continues, continue sur $\\mathbb{R} \\setminus \\{3\\}$ (où le dénominateur s'annule).`,
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
          contenu: `### 🔍 Le Diagnostic — Quelle question on me pose vraiment ?

Quand tu vois « continuité » dans un énoncé, c'est toujours l'une de ces deux situations. Regarde la tête de la fonction.

**Cas A — Une seule formule.**
La fonction s'écrit d'un seul bloc, par exemple $f(x) = \\dfrac{x+1}{x-3}$ ou $f(x) = \\sqrt{x}$. La question sera : *« sur quel ensemble $f$ est-elle continue ? »*. Réponse rapide par les fonctions gentilles, zéro calcul.

**Cas B — Une fonction par morceaux.**
La fonction change de formule selon où on est. Ça ressemble toujours à ça, avec une grosse accolade :
$$f(x) = \\dfrac{x^2 - 1}{x - 1} \\text{ si } x \\neq 1, \\qquad f(1) = 3$$
Partout sauf en $1$ on utilise la fraction ; mais exactement en $x = 1$, l'énoncé impose $f(1) = 3$. La question sera : *« $f$ est-elle continue en $1$ ? »* (le point de raccordement). Là, il faut vérifier les trois briques.

### 🧭 L'Arbre de décision`,
        },
        {
          type: 'table',
          id: 'tbl13',
          headers: [`Si tu vois…`, `Exemple`, `Alors…`],
          rows: [
            [`Une seule formule polynôme / sin / cos / racine`, `$f(x) = x^2 - 3x + 1$`, `Continue sur tout son ensemble de définition. Tu cites le théorème admis.`],
            [`Un quotient`, `$f(x) = \\\\dfrac{x+1}{x-3}$`, `Continue partout sauf là où le dénominateur s'annule (ici sauf en 3).`],
            [`Fonction par morceaux, continuité en $a$ demandée`, `$f(x)=\\\\dfrac{x^2-1}{x-1}$ si $x\\\\neq 1$, $f(1)=3$`, `Tu calcules $\\\\displaystyle\\\\lim_{x \\\\to a} f(x)$ et tu compares à $f(a)$. Égales → continue. Différentes → pas continue.`],
            [`Fonction non définie en $a$, « prolonger » demandé`, `$g(x)=\\\\dfrac{x^2-1}{x-1}$, non définie en 1`, `C'est le prolongement par continuité (voir procédure).`],
          ],
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `Conseil`,
          contenu: `Le réflexe qui te fait gagner du temps : dès que tu vois une accolade dans la définition de la fonction, ton cerveau doit dire *« Cas B, point de raccordement, je vérifie les trois briques »*. Pas d'accolade, Cas A, je cite le théorème et je conclus.

### 📋 La Procédure — Continuité en un point (Cas B)

Prenons l'exemple de l'arbre : $f(x) = \\dfrac{x^2 - 1}{x - 1}$ si $x \\neq 1$, et $f(1) = 3$.

**Étape 1.** Calcule $f(a)$. Ici, $f(1) = 3$ (donné par l'énoncé).

**Étape 2.** Calcule $\\displaystyle\\lim_{x \\to a} f(x)$. Avec l'autre morceau :
$$\\lim_{x \\to 1} \\dfrac{x^2 - 1}{x - 1} = \\lim_{x \\to 1} \\dfrac{(x-1)(x+1)}{x-1} = \\lim_{x \\to 1} (x+1) = 2$$

**Étape 3.** Compare. La limite vaut $2$, mais $f(1) = 3$. Comme $2 \\neq 3$, $f$ n'est pas continue en $1$ (il y a un saut : la courbe se dirige vers $2$, mais le point est posé à $3$).

Et si l'énoncé avait imposé $f(1) = 2$ ? Alors limite $= f(1) = 2$, et $f$ serait continue en $1$. Tout se joue sur cette seule comparaison.

### 📋 La Procédure — Le prolongement par continuité

Reprenons la même fraction, sans valeur imposée : $g(x) = \\dfrac{x^2 - 1}{x - 1}$, qui n'est pas définie en $1$ (le dénominateur s'annule). La courbe a un trou en $x = 1$. Peut-on le boucher ?

**Étape 1.** Vérifie que $g$ n'est pas définie en $a$. En $1$, le dénominateur est nul, $g(1)$ n'existe pas. ✓

**Étape 2.** Calcule $\\displaystyle\\lim_{x \\to a} g(x)$. On l'a déjà fait : elle vaut $2$, un réel fini. OUI, on peut prolonger.

**Étape 3.** Définis la fonction prolongée. On bouche le trou avec cette valeur :
$$\\tilde{g}(x) = \\dfrac{x^2-1}{x-1} \\text{ si } x \\neq 1, \\qquad \\tilde{g}(1) = 2$$
Le trou est bouché avec la valeur exacte vers laquelle la courbe se dirigeait.`,
        },
        {
          type: 'warning',
          id: 'warn15',
          titre: `Piège à éviter`,
          contenu: `Le prolongement n'est possible que si la limite est **finie**. Contre-exemple : $k(x) = \\dfrac{1}{x}$ n'est pas définie en $0$, et $\\displaystyle\\lim_{x \\to 0} k(x) = \\pm\\infty$. La limite n'est pas un réel, on ne peut pas boucher le trou. On répond clairement : *« $k$ n'admet pas de prolongement par continuité en $0$. »* Beaucoup d'élèves se précipitent et prolongent quand même, c'est exactement là qu'on perd des points.

### ✅ La Vérification

Reprends ton prolongement $\\tilde{g}$ et teste les trois briques en $1$ :
- $\\tilde{g}(1) = 2$ existe ✓
- $\\displaystyle\\lim_{x \\to 1} \\tilde{g}(x) = 2$ ✓
- Les deux valeurs sont égales ✓

Les trois tiennent : ton prolongement est correct.`,
        },
        {
          type: 'figure',
          id: 'fig-m5-3',
          src: '/images/t1/fig_M5_3.png',
          legende: `Prolongement par continuité : on bouche le trou en $(1\\,;\\,2)$.`,
          alt: `Prolongement par continuité : on bouche le trou en $(1\\,;\\,2)$.`,
        },
      ],
    },
    {
      id: 's-bac-5',
      titre: `📘 LANGAGE OFFICIEL DU BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b16',
          contenu: `Champion(ne), tu as l'image du gbaka et des trois briques. Maintenant, ta copie doit parler le langage rigoureux des maths.

**Définition formelle — Continuité en un point.** Soit $f$ une fonction définie sur un intervalle ouvert contenant un réel $a$. On dit que $f$ est **continue en $a$** lorsque :
$$\\lim_{x \\to a} f(x) = f(a)$$

**Définition formelle — Continuité sur un intervalle.** Une fonction $f$ est dite **continue sur un intervalle $I$** lorsqu'elle est continue en chaque point de $I$.

**Définition formelle — Prolongement par continuité.** Soit $f$ une fonction définie sur un intervalle ouvert privé d'un point $a$. Si $\\displaystyle\\lim_{x \\to a} f(x) = L$ où $L$ est un réel, on appelle **prolongement par continuité de $f$ en $a$** la fonction $\\tilde{f}$ définie par :
$$\\tilde{f}(x) = f(x) \\text{ si } x \\neq a, \\qquad \\tilde{f}(a) = L$$

**En langage courant.** Une fonction est continue en $a$ si sa limite en $a$ tombe pile sur sa valeur en $a$. Et prolonger par continuité, c'est *boucher un trou* avec la valeur que la limite désigne.`,
        },
        {
          type: 'warning',
          id: 'warn17',
          titre: `Piège à éviter`,
          contenu: `- **Continue en $a$** — l'expression officielle, à utiliser sans détour. Jamais « régulière » ni « lisse ».
- **Point de raccordement** — pour désigner le $a$ d'une fonction définie par morceaux.
- **Prolongement par continuité** — l'expression complète, jamais juste « prolongement ».
- **Théorème admis** — formule à employer pour invoquer la continuité des fonctions usuelles (polynômes, rationnelles, racine, $\\sin$, $\\cos$, $\\exp$, $\\ln$) sans démonstration.`,
        },
        {
          type: 'tip',
          id: 'tip18',
          titre: `Conseil`,
          contenu: `Le correcteur attend la phrase *« Par théorème admis, les fonctions polynômes sont continues sur $\\mathbb{R}$. »* avant tout usage. Et pour la continuité en un point de raccordement, il attend la comparaison explicite : *« On compare $\\displaystyle\\lim_{x \\to a} f(x)$ et $f(a)$. »*`,
        },
      ],
    },
    {
      id: 's-recap-6',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap19',
          titre: `À retenir`,
          contenu: [
            `① **Le test en une ligne.** Continue en $a$ quand $\\displaystyle\\lim_{x \\to a} f(x) = f(a)$ — la limite tombe pile sur la valeur. Le crayon ne se lève pas.`,
            `② **Le raccourci des fonctions gentilles.** Polynômes, racines, $\\sin$, $\\cos$, $\\exp$, $\\ln$ : continus sans calcul. Quotients aussi, sauf où le dénominateur s'annule.`,
            `③ **Le point de raccordement.** Dès qu'il y a une accolade, compare la limite à $f(a)$. Égales → continue. Différentes → saut.`,
            `④ **Le prolongement.** Pour boucher un trou en $a$ : limite finie → pose $f(a) =$ cette limite. Limite infinie → pas de prolongement.`,
            `⑤ 📘 **Vocabulaire officiel BAC :** continue en $a$, continue sur un intervalle, point de raccordement, prolongement par continuité, théorème admis.`,
            `**Transition.** Maintenant que tu sais reconnaître une fonction continue, on va voir à quoi ça sert vraiment. Dans le prochain module — **Du TVI à la Bijection** — la continuité devient ton passeport pour les gros théorèmes du BAC : montrer qu'une équation $f(x) = 0$ a une solution, et même une seule. Garde bien ton test en tête, Champion(ne), on s'en sert dès la première ligne. On va gâter le coin.`,
          ],
        },
      ],
    },
    {
      id: 's-eval-7',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval20',
          titre: `Auto-évaluation`,
          contenu: [
            `Je sais dire si une fonction donnée par une seule formule est continue, et sur quel ensemble.`,
            `J'utilise le vocabulaire officiel (continue en $a$, théorème admis, point de raccordement, prolongement par continuité) dans chacune de mes rédactions.`,
            `Je sais vérifier la continuité en un point de raccordement : je calcule la limite, je la compare à $f(a)$, je conclus.`,
            `Je sais prolonger une fonction par continuité : je calcule la limite, et si elle est finie, je pose la valeur du trou.

<tableau_data>
verdict_auto_eval_m5 = {
    "headers": ["Score", "Verdict"],
    "rows": [
        ["4 cases ✓", "Limpide comme l'eau de roche ! Passe au module Du TVI à la Bijection, tu as le passeport."],
        ["2 ou 3 cases", "Tu y es presque, faut pas gnan. Relis la brique 📘 et la ⑤ Descente (Arbre + Procédures), puis refais le « Maintenant à toi »."],
        ["0 ou 1 case", "Pas de panique. Reprends depuis le ② Réel : le gbaka, le bac, le crayon. Tant que tu n'as pas « vu » l'image, le reste flotte."]
    ]
}
</tableau_data>`,
          ],
        },
      ],
    },
  ],
};
