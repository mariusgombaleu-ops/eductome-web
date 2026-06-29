import { Chapitre } from '../../types/course';

export const chapitreM3: Chapitre = {
  id: 't5-m3',
  titre: `Module 3 — La Fonction exponentielle`,
  duree: 27,
  niveau: 'MOYEN',
  xpGain: 30,
  objectifs: [
    `Comprendre que l'exponentielle est la fonction réciproque du logarithme népérien`,
    `Utiliser les propriétés algébriques de l'exponentielle pour simplifier une écriture`,
    `Énoncer la définition et les propriétés de l'exponentielle avec le vocabulaire officiel attendu au BAC`,
    `Dériver une fonction de la forme $e^u$ et déterminer les limites aux bornes`,
    `Résoudre une équation exponentielle par changement de variable`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, le logarithme range les multiplications en additions et il avance tout doucement. Mais dans la vraie vie, il y a aussi des choses qui s'emballent à toute vitesse, comme les bactéries dont tu parlais. Y a-t-il une fonction qui fait le chemin inverse du logarithme ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Excellente intuition, Champion(ne) ! Oui, il existe une fonction qui défait exactement ce que le logarithme fait : si $\\ln$ est le compteur qui ralentit, sa réciproque est le moteur qui s'emballe. On l'appelle la **fonction exponentielle**, notée $\\exp$ ou $e^x$. Elle reste toujours strictement positive, elle transforme les sommes en produits — l'inverse du logarithme — et sa courbe est le reflet de celle de $\\ln$ dans un miroir. Aujourd'hui, on apprend à la dompter.`,
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
          contenu: `Reviens au laboratoire de biologie d'Abidjan, ce vendredi soir où un chercheur oublie sa boîte de Pétri. Au départ, deux cellules. Une heure plus tard, quatre ; puis huit, seize, et des centaines de milliers en une après-midi. Plus les bactéries sont nombreuses, plus elles se multiplient vite : c'est l'emballement pur.

Maintenant, fais le lien avec le Module 1. Là-bas, le logarithme partait d'une grande foule et **comptait les heures**. Ici, on fait le trajet inverse : on part du nombre d'heures et on veut **retrouver la foule de bactéries**. L'exponentielle est précisément la machine qui, à partir du compteur, reconstruit l'explosion.

C'est pour ça qu'on dit qu'elle est la **réciproque** du logarithme : l'une défait ce que l'autre fait. *Si tu appliques le logarithme puis l'exponentielle, tu reviens exactement à ton point de départ — comme deux portes qui s'ouvrent et se referment sur le même couloir.*`,
        },
        {
          type: 'figure',
          id: 'fig-m3-1',
          src: '/images/t5/fig_M3_1.png',
          legende: `L'exponentielle reste toujours au-dessus de zéro, frôle l'axe à gauche et s'envole à droite.`,
          alt: `Courbe de la fonction exponentielle, plate à gauche et verticale à droite.`,
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
          contenu: `Traduisons la réciprocité bactéries / compteur en symboles.

- **Partir des heures pour retrouver la foule** → appliquer $\\exp$ à un nombre.
- **Faire l'aller-retour compteur puis explosion** → $e^{\\ln x} = x$ pour $x > 0$.
- **Faire l'aller-retour explosion puis compteur** → $\\ln(e^x) = x$ pour tout réel $x$.
- **Multiplier deux explosions** → additionner leurs exposants : $e^a \\times e^b = e^{a+b}$.`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène du laboratoire`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Le nombre d'heures`, `$x \\in \\mathbb{R}$`, `L'exponentielle accepte n'importe quel réel.`],
            [`La foule reconstruite`, `$e^x > 0$`, `L'exponentielle est toujours strictement positive.`],
            [`Aller-retour compteur puis explosion`, `$e^{\\ln x} = x$`, `$\\exp$ défait $\\ln$ (pour $x>0$).`],
            [`Aller-retour explosion puis compteur`, `$\\ln(e^x) = x$`, `$\\ln$ défait $\\exp$ (pour tout réel).`],
            [`Multiplier deux explosions`, `$e^a \\times e^b = e^{a+b}$`, `La somme des exposants devient un produit.`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `Cette relation de réciprocité a une conséquence visuelle célèbre. Habillons-la dans le langage du BAC.`,
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
          contenu: `Champion(ne), tu as l'image des deux portes du même couloir. La copie attend les mots exacts.

**Définition formelle.** La **fonction exponentielle**, notée $\\exp$ ou $x \\mapsto e^x$, est la **fonction réciproque** de la fonction logarithme népérien. Elle est définie, continue et dérivable sur $\\mathbb{R}$, à valeurs dans $\\left]\\,0\\ ;\\ +\\infty\\,\\right[$. Pour tous réels $x$ et $y$ : $e^{\\ln x} = x$ (si $x > 0$), $\\ln(e^x) = x$, et $e^x = y \\iff x = \\ln y$ (avec $y > 0$). Sa dérivée est elle-même : $(e^x)' = e^x$.

**En langage courant.** L'exponentielle reconstruit la grandeur à partir de son compteur logarithmique : elle annule le logarithme.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Fonction réciproque** — $\\exp$ et $\\ln$ se défont mutuellement ; leurs courbes sont symétriques par rapport à la droite $y = x$.
- **Strictement positive** — $e^x > 0$ pour tout réel $x$ : l'équation $e^x = 0$ n'a aucune solution.
- **Propriété fonctionnelle** — $e^{a+b} = e^a \\times e^b$ : la somme devient produit.
- **Dérivée de $e^u$** — $(e^u)' = u'\\,e^u$, l'exposant interne ressort en facteur.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend la phrase : *« Les courbes de $\\ln$ et de $\\exp$ sont symétriques par rapport à la droite d'équation $y = x$. »* C'est la signature de la réciprocité, à connaître par cœur.`,
        },
        {
          type: 'figure',
          id: 'fig-m3-2',
          src: '/images/t5/fig_M3_2.png',
          legende: `Deux fonctions réciproques : chaque courbe est l'image de l'autre dans le miroir $y = x$.`,
          alt: `Courbes de ln et exp symétriques par rapport à la droite y égal x.`,
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
          titre: `Règle d'Or — Propriétés de la fonction exponentielle`,
          contenu: `Pour tous réels $a$, $b$ et tout entier $n$ :
$$e^{a+b} = e^a \\times e^b \\qquad e^{a-b} = \\dfrac{e^a}{e^b} \\qquad e^{-a} = \\dfrac{1}{e^a} \\qquad \\left(e^a\\right)^n = e^{na}$$`,
        },
        {
          type: 'text',
          id: 'b10',
          contenu: `**Valeurs et dérivées.** $e^0 = 1$, $e^1 = e$, et $(e^x)' = e^x$, $(e^u)' = u'\\,e^u$.

**Limites de référence.**
$$\\displaystyle\\lim_{x \\to -\\infty} e^x = 0 \\qquad \\displaystyle\\lim_{x \\to +\\infty} e^x = +\\infty$$`,
        },
        {
          type: 'tip',
          id: 'tip11',
          titre: `Conseil du Grand Frère`,
          contenu: `Dans un tableau de signe, le bloc $e^{u(x)}$ est **toujours strictement positif** : il ne change jamais le signe. Tu peux le mettre de côté et n'étudier que le signe des autres facteurs. Gros gain de temps au BAC.`,
        },
        {
          type: 'warning',
          id: 'warn12',
          titre: `Piège à éviter`,
          contenu: `L'exponentielle transforme la **somme** en produit, pas l'inverse : $e^{a+b} = e^a \\times e^b$, mais $e^{a+b} \\neq e^a + e^b$. Et $e^{x^2} \\neq (e^x)^2$ : ici $(e^x)^2 = e^{2x}$.`,
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
          contenu: `Repère ce qu'on te demande : « dériver / variations » → applique $(e^u)' = u'e^u$ ; « résoudre une équation avec $e^{2x}$ et $e^x$ » → change de variable $X = e^x$ ; « limite » → utilise les limites de référence et, si besoin, les croissances comparées du Module 6.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Si tu vois…`, `Ce que tu fais`],
          rows: [
            [`$e^u$ à dériver`, `Pose $u$, calcule $u'$, écris $u'e^u$ (Outil 1 du Socle).`],
            [`$e^{2x}$ et $e^x$ dans une équation`, `Pose $X = e^x$, $X > 0$ : tu obtiens un trinôme (Outil 4).`],
            [`$e^x = k$ avec $k > 0$`, `Applique $\\ln$ : $x = \\ln k$.`],
            [`$e^x = k$ avec $k \\leq 0$`, `Aucune solution : $e^x$ est strictement positif.`],
            [`Le signe d'un produit avec $e^{u}$`, `Ignore $e^u$ (toujours $>0$), étudie le reste.`],
          ],
        },
        {
          type: 'text',
          id: 'b14',
          titre: `La Procédure (résoudre une équation exponentielle)`,
          contenu: `**Étape 1.** Repère la présence de $e^{2x}$, $e^x$ (ou autres) et pose le changement de variable $X = e^x$ avec la condition $X > 0$.

**Étape 2.** Réécris l'équation comme un trinôme en $X$ et résous-la.

**Étape 3.** Rejette les valeurs $X \\leq 0$, puis reviens à $x$ par $e^x = X \\iff x = \\ln X$.

**Étape 4.** Conclus en donnant l'ensemble des solutions.`,
        },
        {
          type: 'tip',
          id: 'tip15',
          titre: `La Vérification`,
          contenu: `- **Positivité respectée** : toute solution $X \\leq 0$ doit être écartée avant le retour à $x$.
- **Contrôle** : remplace $x$ trouvé dans l'équation de départ pour confirmer.`,
        },
        {
          type: 'figure',
          id: 'fig-m3-3',
          src: '/images/t5/fig_M3_3.png',
          legende: `Dérivée toujours positive : l'exponentielle est strictement croissante de $0$ à $+\\infty$.`,
          alt: `Tableau de variations de la fonction exponentielle, strictement croissante.`,
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
            [`🟢 BASE`, `Dériver une fonction $e^u$`, `$e$ à un exposant qui dépend de $x$`, `Type 1`],
            [`🟡 MOYEN`, `Étudier une fonction mêlant $x$ et $e^x$`, `Produit ou somme comme $x e^x$`, `Type 2`],
            [`🔴 BAC`, `Résoudre par changement de variable`, `$e^{2x}$ et $e^x$ dans la même équation`, `Type 3`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Dériver $e^u$.** Soit $f(x) = e^{2x + 1}$. Calcule $f'(x)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Fonction $e^u$ avec $u(x) = 2x + 1$ : on applique $(e^u)' = u'e^u$.` },
            { name: `Étape 1`, contenu: `$u(x) = 2x + 1$, donc $u'(x) = 2$.` },
            { name: `Étape 2`, contenu: `$f'(x) = 2\\,e^{2x + 1}$.` },
            { name: `Conclusion`, contenu: `$f'(x) = 2\\,e^{2x + 1} > 0$ : $f$ est strictement croissante sur $\\mathbb{R}$.` },
          ],
          reponse: `$f'(x) = 2\\,e^{2x + 1}$ ; $f$ est strictement croissante sur $\\mathbb{R}$.`,
          conseil: `L'exponentielle étant toujours positive, le signe de $f'$ se lit sur le seul facteur $u'$. Ici $u' = 2 > 0$ : croissance immédiate.`,
          piege: `N'oublie jamais de multiplier par $u'$ : écrire $(e^{2x+1})' = e^{2x+1}$ serait faux. L'exposant interne ressort toujours.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Posons $u(x) = 2x + 1$ ; alors $u'(x) = 2$ et $f'(x) = u'(x)\\,e^{u(x)} = 2\\,e^{2x + 1}$. Comme $e^{2x+1} > 0$, $f'(x) > 0$ : $f$ est strictement croissante sur $\\mathbb{R}$.

*[Barème : calcul de $u'$ : 1 pt · dérivée $f'$ : 1 pt · signe : 1 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Une fonction produit $x e^x$.** Soit $g(x) = x\\,e^x$ sur $\\mathbb{R}$. Calcule $g'(x)$ et étudie son signe.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Produit de $x$ par $e^x$ : on applique $(uv)' = u'v + uv'$ avec $u = x$ et $v = e^x$.` },
            { name: `Étape 1`, contenu: `$u' = 1$ et $v' = e^x$, donc $g'(x) = 1 \\times e^x + x \\times e^x = (1 + x)\\,e^x$.` },
            { name: `Étape 2`, contenu: `Comme $e^x > 0$, le signe de $g'$ est celui de $1 + x$ : négatif si $x < -1$, positif si $x > -1$.` },
            { name: `Conclusion`, contenu: `$g$ décroît sur $\\left]\\,-\\infty\\ ;\\ -1\\,\\right]$ et croît sur $\\left[\\,-1\\ ;\\ +\\infty\\,\\right[$ ; elle admet un minimum en $x = -1$.` },
          ],
          reponse: `$g'(x) = (1 + x)e^x$ ; minimum en $x = -1$.`,
          conseil: `Factorise toujours par $e^x$ : il sort du calcul de signe puisqu'il est positif, et il ne reste qu'un facteur simple à étudier.`,
          piege: `$g(x) = x e^x$ est un **produit**, pas une composée : applique $(uv)'$, et non $u'e^u$. Lis bien la structure de l'expression.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$g$ est dérivable sur $\\mathbb{R}$ et $g'(x) = e^x + x e^x = (1 + x)e^x$. Comme $e^x > 0$, $g'(x)$ est du signe de $1 + x$. Donc $g$ décroît sur $\\left]\\,-\\infty\\ ;\\ -1\\,\\right]$, croît sur $\\left[\\,-1\\ ;\\ +\\infty\\,\\right[$, avec un minimum en $-1$.

*[Barème : dérivée produit : 1,5 pt · factorisation par $e^x$ : 1 pt · signe + variations : 1,5 pt — Total : 4 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 3 — Équation par changement de variable.** Résous dans $\\mathbb{R}$ l'équation $e^{2x} - 3e^x + 2 = 0$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `On reconnaît $e^{2x} = (e^x)^2$ : on pose $X = e^x$ (avec $X > 0$) pour obtenir un trinôme.` },
            { name: `Étape 1`, contenu: `Avec $X = e^x$, l'équation devient $X^2 - 3X + 2 = 0$.` },
            { name: `Étape 2`, contenu: `Le discriminant vaut $\\Delta = 9 - 8 = 1$, d'où $X = 1$ ou $X = 2$. Les deux sont strictement positifs : on les garde.` },
            { name: `Étape 3`, contenu: `Retour à $x$ : $e^x = 1 \\Rightarrow x = \\ln 1 = 0$ ; $e^x = 2 \\Rightarrow x = \\ln 2$.` },
          ],
          reponse: `$S = \\{\\,0\\ ;\\ \\ln 2\\,\\}$.`,
          conseil: `Le changement de variable transforme une équation effrayante en un banal second degré. C'est l'Outil 4 du Socle qui paie ici.`,
          piege: `Si un $X$ trouvé était négatif ou nul, il faudrait le rejeter : $e^x > 0$ n'atteint jamais ces valeurs. Pense aussi à revenir jusqu'à $x$, ne t'arrête pas à $X$.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Posons $X = e^x$, avec $X > 0$. L'équation devient $X^2 - 3X + 2 = 0$, de racines $X = 1$ et $X = 2$, toutes deux positives. On revient à $x$ : $e^x = 1$ donne $x = 0$, et $e^x = 2$ donne $x = \\ln 2$. D'où $S = \\{\\,0\\ ;\\ \\ln 2\\,\\}$.

*[Barème : changement de variable + condition : 1,5 pt · résolution du trinôme : 1,5 pt · retour à $x$ : 1,5 pt · conclusion : 0,5 pt — Total : 5 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Repère la structure avant de calculer. Réponses finales seulement.

- **Exercice 1.** Dérive $f(x) = e^{-x^2}$. *(Réponse : $u = -x^2$, $u' = -2x$, donc $f'(x) = -2x\\,e^{-x^2}$.)*
- **Exercice 2.** Résous $e^x = 5$. *(Réponse : $x = \\ln 5$.)*
- **Exercice 3.** Résous $e^{2x} - e^x = 0$. *(Réponse : $X = e^x$, $X^2 - X = 0 \\Rightarrow X = 1$ (on rejette $X=0$), donc $x = 0$.)*`,
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
            `L'exponentielle est la **réciproque** du logarithme : $e^{\\ln x} = x$ et $\\ln(e^x) = x$ ; leurs courbes sont symétriques par rapport à $y = x$.`,
            `📘 Vocabulaire officiel : fonction réciproque, strictement positive, propriété fonctionnelle, dérivée de $e^u$.`,
            `$e^x > 0$ toujours : l'équation $e^x = k$ n'a de solution que si $k > 0$, et alors $x = \\ln k$.`,
            `$(e^u)' = u'e^u$ : l'exposant interne ressort en facteur ; $e^x$ ne change jamais un signe.`,
            `Limites : $e^x \\to 0$ en $-\\infty$, $e^x \\to +\\infty$ en $+\\infty$.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m3',
          titre: `Fil rouge`,
          contenu: `Tu manies maintenant $\\ln$ et $\\exp$, les deux fonctions reines. Mais le programme te réserve deux cousines très utiles : le logarithme à **base 10**, celui que le chimiste utilise pour le pH au laboratoire, et les exponentielles de **base $a$**. D'où viennent-elles, et comment se ramènent-elles à $\\ln$ et $\\exp$ ? Direction le Module 4 : le logarithme décimal et la base $a$.`,
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
            `Je sais que $\\exp$ est la réciproque de $\\ln$ et que leurs courbes sont symétriques par rapport à $y = x$.`,
            `J'emploie le vocabulaire officiel (fonction réciproque, strictement positive, propriété fonctionnelle).`,
            `Je dérive une fonction $e^u$ avec la formule $u'e^u$.`,
            `Je résous une équation exponentielle par changement de variable $X = e^x$.`,
            `Je connais les limites de référence et le fait que $e^x > 0$ pour tout réel.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m3',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Le miroir est maîtrisé. Direction Module 4.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 3.`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : les deux portes du même couloir.`,
          ],
        },
      ],
    },
  ],
};
