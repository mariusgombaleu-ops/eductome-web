import { Chapitre } from '../../types/course';

export const chapitreM3: Chapitre = {
  id: 't2-m3',
  titre: `Module 3 — Les Règles de Calcul`,
  duree: 30,
  niveau: 'MOYEN',
  xpGain: 30,
  objectifs: [
    `Dériver une somme ou une différence sans mélanger les termes`,
    `Dériver un produit $f \\cdot g$ sans le confondre avec le produit des dérivées`,
    `Dériver un quotient $\\dfrac{f}{g}$ avec le carré obligatoire au dénominateur`,
    `Énoncer la règle de la composée avec le vocabulaire exact du BAC et sortir la dérivée interne`,
    `Combiner plusieurs règles sur une même fonction complexe du BAC`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, au Module 2 tu m'as dit que la dérivée de $\\sin(x)$ c'est $\\cos(x)$, et celle de $x^2$ c'est $2x$. Alors pour $x^2 \\cdot \\sin(x)$, je fais simplement $2x \\cdot \\cos(x)$, non ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Non, Champion(ne) — et c'est exactement là où la moitié des copies dérape au BAC. La dérivée d'un produit **n'est pas** le produit des dérivées. Si ça marchait comme ça, les mathématiciens n'auraient pas inventé une formule spéciale. Il y a une logique derrière, et une fois que tu l'as vue, tu ne te trompes plus jamais. C'est tout l'objet de ce module : les quatre lois qui te permettent de dériver absolument n'importe quelle combinaison.`,
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
          contenu: `Pense à ta facture mensuelle chez Orange ou MTN. Elle combine deux parties : un prix à la minute et un nombre de minutes consommées. Ta dépense totale, c'est le **produit** des deux. Maintenant, imagine que le mois prochain, le prix de la minute monte **et** que tu appelles davantage. De combien ta facture grimpe-t-elle ?

La réponse n'est pas « la hausse du prix fois la hausse des minutes ». C'est plus subtil : il faut compter la hausse du prix appliquée à l'ancien nombre de minutes, **plus** l'ancien prix appliqué aux minutes en plus. Les deux forces agissent ensemble, en se croisant.

C'est exactement la logique de la dérivée d'un produit : **un relais croisé**. La première fonction varie pendant que la seconde reste fixe, puis on passe le relais. Cette coopération croisée, c'est ce que la formule $f'g + fg'$ raconte.`,
        },
        {
          type: 'figure',
          id: 'fig-m3-1',
          src: '/images/t2/fig_M3_1.png',
          legende: `Deux machines en série : la dérivée interne $g'(x)$ sort devant.`,
          alt: `Deux machines en série : la dérivée interne $g'(x)$ sort devant.`,
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
          contenu: `Traduisons les quatre situations en langage mathématique :

- **La somme.** Deux fonctions séparées par $+$ ou $-$ : leurs vitesses ne se perturbent pas. On dérive chacune de son côté et on garde le signe. Indépendance totale.
- **Le produit.** Pour $f \\cdot g$, les deux s'entremêlent : la première dérive pendant que la seconde reste fixe ($f' \\cdot g$), puis on passe le relais ($f \\cdot g'$). On additionne.
- **Le quotient.** Pour $\\dfrac{f}{g}$, le dénominateur s'élève au carré ($g^2$) pour stabiliser la fraction. Au numérateur, la division impose une **soustraction stricte** : $f'g - fg'$.
- **La composée.** Quand une fonction vit à l'intérieur d'une autre, la dérivée interne « paie sa taxe » : elle sort devant, multipliée par la dérivée de la fonction externe.`,
        },
        {
          type: 'table',
          id: 'tbl5',
          headers: [`Scène`, `Structure maths`, `La loi de coopération`],
          rows: [
            [`Deux dépenses additionnées`, `$f + g$`, `Chacune dérive de son côté : $f' + g'$`],
            [`Prix × quantité qui montent ensemble`, `$f \\cdot g$`, `Relais croisé : $f'g + fg'$`],
            [`Un rapport, une part divisée`, `$\\dfrac{f}{g}$`, `Soustraction + carré : $\\dfrac{f'g - fg'}{g^2}$`],
            [`Une machine dans une machine`, `$f(g(x))$`, `Taxe interne : $f'(g(x)) \\cdot g'(x)$`],
          ],
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
          contenu: `Champion(ne), l'image de la facture et de la machine t'a donné l'intuition. Maintenant, ta copie doit nommer les choses comme le correcteur l'attend.

**Définition formelle.** Soient $u$ et $v$ deux fonctions dérivables sur un intervalle $I$. Alors leur produit, leur quotient (avec $v$ ne s'annulant pas) et leur composée sont dérivables, et :

$$(uv)' = u'v + uv' \\qquad \\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2} \\qquad \\big(v(u)\\big)' = u' \\cdot v'(u)$$

**En langage courant.** Une **fonction composée**, c'est une fonction « emboîtée » dans une autre. Sa dérivée multiplie la vitesse externe par la **dérivée interne** $u'$ — celle qu'on oublie le plus souvent.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Dérivée d'un produit** — $u'v + uv'$ (jamais $u'v'$).
- **Dérivée d'un quotient** — $\\dfrac{u'v - uv'}{v^2}$, dénominateur au carré.
- **Fonction composée** — une fonction de la forme $x \\mapsto v(u(x))$, une « machine dans une machine ».
- **Dérivée interne** — le facteur $u'$ qui sort devant dans la dérivée d'une composée.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur veut te voir **poser les fonctions** : *« On pose $u(x) = \\ldots$ et $v(x) = \\ldots$ ; alors $u'(x) = \\ldots$ et $v'(x) = \\ldots$. »* Cette phrase d'installation vaut des points à elle seule.`,
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
          titre: `Règle d'Or — Les 5 règles de calcul`,
          contenu: `Pour $f$ et $g$ dérivables sur un intervalle, et $\\lambda$ un réel constant, applique la loi de coopération adaptée à la structure (voir le tableau ci-dessous).`,
        },
        {
          type: 'table',
          id: 'tbl10',
          headers: [`Opération`, `Fonction`, `Dérivée`, `Point de vigilance`],
          rows: [
            [`Somme / Différence`, `$f + g$`, `$f' + g'$`, `Valable sur le domaine commun à $f$ et $g$.`],
            [`Multiplication par $\\lambda$`, `$\\lambda \\cdot f$`, `$\\lambda \\cdot f'$`, `Le coefficient $\\lambda$ reste fixe — il ne se dérive pas.`],
            [`Produit`, `$f \\cdot g$`, `$f'g + fg'$`, `Ne jamais écrire $f'g'$ — la première erreur au BAC.`],
            [`Quotient`, `$\\dfrac{f}{g}$`, `$\\dfrac{f'g - fg'}{g^2}$`, `Le carré en bas est obligatoire. $g(x) \\neq 0$.`],
            [`Composée`, `$f(g(x))$`, `$f'(g(x)) \\cdot g'(x)$`, `La dérivée interne $g'$ sort devant — ne jamais l'oublier.`],
          ],
        },
        {
          type: 'tip',
          id: 'tip11',
          titre: `Conseil du Grand Frère — variantes directes pour le BAC`,
          contenu: `Si $u$ est une fonction dérivable :

$$(u^n)' = n \\cdot u^{n-1} \\cdot u' \\qquad (\\sqrt{u})' = \\dfrac{u'}{2\\sqrt{u}}$$

Ce sont des cas particuliers de la composée — pas des formules séparées à mémoriser.`,
        },
        {
          type: 'warning',
          id: 'warn12',
          titre: `Piège à éviter`,
          contenu: `La soustraction du quotient est orientée : $f'g - fg'$, **pas** $fg' - f'g$. Inverser l'ordre change le signe de toute la dérivée.`,
        },
        {
          type: 'figure',
          id: 'fig-m3-2',
          src: '/images/t2/fig_M3_2.png',
          legende: `L'aire gagnée $= v\\,du + u\\,dv$ : c'est la dérivée d'un produit $(uv)'=u'v+uv'$.`,
          alt: `L'aire gagnée $= v\\,du + u\\,dv$ : c'est la dérivée d'un produit $(uv)'=u'v+uv'$.`,
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
          contenu: `Ton premier geste sur copie : **lire la structure dominante** de la fonction. Qu'est-ce qui relie tes gros blocs ? Un $+$ ou $-$ ? Une barre de fraction ? Une parenthèse coiffée d'un exposant ? Cette lecture dicte la formule.`,
        },
        {
          type: 'table',
          id: 'tbl14',
          titre: `L'Arbre de décision`,
          headers: [`Signal visuel`, `Structure dominante`, `Point de vigilance`],
          rows: [
            [`Signe $+$ ou $-$ entre les blocs`, `Règle de la Somme`, `Les constantes isolées disparaissent (dérivée $0$).`],
            [`Deux blocs en $x$ collés sans fraction`, `Règle du Produit`, `Ne jamais écrire $f' \\times g'$.`],
            [`Grande barre de fraction`, `Règle du Quotient`, `Soustraction orientée : $f'g - fg'$.`],
            [`Parenthèse coiffée d'un exposant $n$`, `Règle $(u^n)'$`, `La dérivée interne $u'$ sort devant — souvent oubliée.`],
            [`Fonction sous une racine carrée`, `Règle $(\\sqrt{u})'$`, `Résultat $\\dfrac{u'}{2\\sqrt{u}}$ — pas une racine au numérateur.`],
          ],
        },
        {
          type: 'text',
          id: 'b15',
          titre: `La Procédure en 4 étapes`,
          contenu: `**Étape 1.** Identifier la structure : somme, produit, quotient ou composée — une seule règle domine.

**Étape 2.** Nommer les composants : note $u = \\ldots$ et $v = \\ldots$ au brouillon avant tout calcul.

**Étape 3.** Calculer les dérivées élémentaires de chaque composant avec le tableau du Module 2.

**Étape 4.** Combiner avec la formule, injecter tes résultats, puis simplifier.`,
        },
        {
          type: 'tip',
          id: 'tip16',
          titre: `La Vérification`,
          contenu: `- **Quotient** : ton dénominateur final doit porter l'exposant $2$. S'il a disparu, erreur.
- **Produit** : ta réponse doit avoir **deux** termes avant simplification.
- **Composée** : vérifie que la dérivée interne $u'$ apparaît bien en facteur.`,
        },
        {
          type: 'warning',
          id: 'warn17',
          titre: `Le piège à éviter de ce module`,
          contenu: `Oublier la dérivée interne sur une composée. Pour $(3x^2-1)^4$, l'intérieur n'est pas un simple $x$ : sa dérivée est $6x$, et elle doit multiplier le tout.`,
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
            [`🟢 BASE`, `Somme de familles différentes`, `Termes séparés par $+$ ou $-$ de familles distinctes.`, `ET-1`],
            [`🟡 MOYEN`, `Produit trigonométrique`, `Deux blocs en $x$ collés, dont un trigonométrique.`, `ET-2`],
            [`🟡 MOYEN`, `Quotient rationnel`, `Grande barre de fraction, numérateur et dénominateur en $x$.`, `ET-3`],
            [`🔴 BAC`, `Puissance d'un polynôme`, `Polynôme entre parenthèses, exposant $n > 1$.`, `ET-4`],
            [`🔴 BAC`, `Produit avec racine composée`, `Produit d'une fonction simple et d'une racine de fonction.`, `ET-5`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Somme de familles.** Soit $f$ définie sur $]0\\ ;\\ +\\infty[$ par $f(x) = 3x^2 + \\sin(x) - \\dfrac{1}{x}$. Calculer $f'(x)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Somme de trois termes de familles différentes — polynôme, trigonométrique, inverse. On dérive terme à terme.` },
            { name: `Étape 1`, contenu: `$3x^2 \\to 6x$ ; $\\sin(x) \\to \\cos(x)$.` },
            { name: `Étape 2`, contenu: `$-\\dfrac{1}{x}$ : la dérivée de $\\dfrac{1}{x}$ est $-\\dfrac{1}{x^2}$, avec le moins : $-\\left(-\\dfrac{1}{x^2}\\right) = +\\dfrac{1}{x^2}$.` },
          ],
          reponse: `$f$ est dérivable sur $]0\\ ;\\ +\\infty[$ et $f'(x) = 6x + \\cos(x) + \\dfrac{1}{x^2}$.`,
          conseil: `La constante multiplicative $3$ devant $x^2$ ne disparaît pas : elle reste et se multiplie avec l'exposant qui descend. Différent d'une constante isolée $+3$, qui donne $0$.`,
          piege: `Ne confonds pas $3x^2$ (constante multiplicative — survit) et $x^2 + 3$ (constante additive — disparaît).`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `La fonction $f$ est dérivable sur $]0\\ ;\\ +\\infty[$ comme somme de fonctions usuelles dérivables sur cet intervalle. Pour tout $x \\in\\ ]0\\ ;\\ +\\infty[$ :

$$f'(x) = 3 \\times (2x) + \\cos(x) - \\left(-\\dfrac{1}{x^2}\\right) = 6x + \\cos(x) + \\dfrac{1}{x^2}$$

*[Barème type BAC : justification 0,5 pt · dérivées des deux premiers termes 1 pt · signe du terme inverse 0,5 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Produit trigonométrique.** Soit $g$ définie sur $\\mathbb{R}$ par $g(x) = x^2 \\cdot \\cos(x)$. Calculer $g'(x)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Deux blocs en $x$ collés — règle du produit. On pose $u = x^2$ et $v = \\cos(x)$.` },
            { name: `Étape 1`, contenu: `$u(x) = x^2 \\Rightarrow u'(x) = 2x$ ; $v(x) = \\cos(x) \\Rightarrow v'(x) = -\\sin(x)$.` },
            { name: `Étape 2`, contenu: `$g'(x) = u'v + uv' = (2x)\\cos(x) + x^2(-\\sin(x))$.` },
          ],
          reponse: `$g'(x) = 2x\\cos(x) - x^2\\sin(x)$.`,
          conseil: `Pose toujours $u$, $v$, $u'$, $v'$ alignés au brouillon avant de rédiger. Ça évite de mélanger les termes.`,
          piege: `$(\\cos x)' = -\\sin x$ : le signe moins est dans la dérivée du cosinus, pas dans la formule du produit. $x^2 \\times (-\\sin x) = -x^2\\sin x$.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `La fonction $g$ est dérivable sur $\\mathbb{R}$ comme produit de deux fonctions dérivables. En posant $u(x) = x^2$ et $v(x) = \\cos(x)$, on a $u'(x) = 2x$ et $v'(x) = -\\sin(x)$. Pour tout $x \\in \\mathbb{R}$ :

$$g'(x) = u'(x)v(x) + u(x)v'(x) = (2x)\\cos(x) + x^2(-\\sin(x)) = 2x\\cos(x) - x^2\\sin(x)$$

*[Barème type BAC : identification du produit 0,5 pt · dérivées intermédiaires 0,5 pt · résultat avec signe correct 1 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 3 — Quotient rationnel.** Soit $h$ définie sur $\\mathbb{R} \\setminus \\{3\\}$ par $h(x) = \\dfrac{2x + 1}{x - 3}$. Calculer $h'(x)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Grande barre de fraction — règle du quotient. On pose $u = 2x+1$ et $v = x-3$.` },
            { name: `Étape 1`, contenu: `$u'(x) = 2$ ; $v'(x) = 1$.` },
            { name: `Étape 2`, contenu: `$h'(x) = \\dfrac{u'v - uv'}{v^2} = \\dfrac{2(x-3) - (2x+1)(1)}{(x-3)^2} = \\dfrac{2x - 6 - 2x - 1}{(x-3)^2}$.` },
          ],
          reponse: `$h'(x) = \\dfrac{-7}{(x-3)^2}$.`,
          conseil: `Ne développe pas $(x-3)^2$ — laisse-le emballé. Un carré est toujours positif : au Module 4, le signe de $h'$ sera dicté par le seul numérateur $-7$ (négatif partout). Gain de temps immédiat.`,
          piege: `Le signe moins devant $(2x+1)$ se distribue : $-(2x+1) = -2x - 1$, pas $-2x + 1$. Ce signe sur le $+1$ est le piège classique.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite`,
          contenu: `La fonction $h$ est dérivable sur $\\mathbb{R} \\setminus \\{3\\}$ comme quotient de fonctions dérivables à dénominateur non nul. En posant $u(x) = 2x+1$ et $v(x) = x-3$, pour tout $x \\in \\mathbb{R} \\setminus \\{3\\}$ :

$$h'(x) = \\dfrac{u'(x)v(x) - u(x)v'(x)}{[v(x)]^2} = \\dfrac{2(x-3) - (2x+1)}{(x-3)^2} = \\dfrac{-7}{(x-3)^2}$$

*[Barème type BAC : formule du quotient posée 0,5 pt · numérateur sans erreur de signe 1 pt · dénominateur au carré conservé 0,5 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et4',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 4 — Puissance d'un polynôme.** Soit $k$ définie sur $\\mathbb{R}$ par $k(x) = (3x^2 - 1)^4$. Calculer $k'(x)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Polynôme entre parenthèses, exposant $4$ — règle $(u^n)'$ avec $n = 4$.` },
            { name: `Étape 1`, contenu: `$u(x) = 3x^2 - 1 \\Rightarrow u'(x) = 6x$.` },
            { name: `Étape 2`, contenu: `$k'(x) = n \\cdot u^{n-1} \\cdot u' = 4 \\times (3x^2-1)^3 \\times 6x$.` },
          ],
          reponse: `$k'(x) = 24x(3x^2 - 1)^3$.`,
          conseil: `Vois $(u^n)'$ comme une double action : l'exposant $4$ descend devant, le bloc perd un étage ($4 \\to 3$), et la dérivée interne $u' = 6x$ sort se multiplier devant le tout.`,
          piege: `L'intérieur du bloc n'est pas un simple $x$ — c'est $3x^2 - 1$, de dérivée $6x$, pas $1$. Écrire $4(3x^2-1)^3$ sans le $6x$ est l'erreur la plus fréquente.`,
        },
        {
          type: 'text',
          id: 'b-copie4',
          titre: `✍️ La Copie Parfaite`,
          contenu: `La fonction $k$ est dérivable sur $\\mathbb{R}$ comme puissance d'une fonction polynomiale dérivable. En posant $u(x) = 3x^2 - 1$ et $n = 4$, on a $u'(x) = 6x$. Pour tout $x \\in \\mathbb{R}$ :

$$k'(x) = n \\cdot [u(x)]^{n-1} \\cdot u'(x) = 4 \\times (3x^2-1)^3 \\times 6x = 24x(3x^2-1)^3$$

*[Barème type BAC : présence de la dérivée interne $6x$ 1 pt · application de la puissance 1 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et5',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 5 — Produit avec racine composée.** Soit $m$ définie sur $\\left]-\\dfrac{1}{2}\\ ;\\ +\\infty\\right[$ par $m(x) = x\\sqrt{2x+1}$. Calculer $m'(x)$ et simplifier.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Produit entre $x$ et une racine composée — deux règles combinées : produit **et** $(\\sqrt{u})'$.` },
            { name: `Étape 1`, contenu: `$f(x) = x \\Rightarrow f'(x) = 1$. Pour $g(x) = \\sqrt{2x+1}$ avec $u = 2x+1$, $u' = 2$ : $g'(x) = \\dfrac{2}{2\\sqrt{2x+1}} = \\dfrac{1}{\\sqrt{2x+1}}$.` },
            { name: `Étape 2`, contenu: `Règle du produit : $m'(x) = 1 \\cdot \\sqrt{2x+1} + x \\cdot \\dfrac{1}{\\sqrt{2x+1}}$.` },
            { name: `Étape 3`, contenu: `Même dénominateur : $m'(x) = \\dfrac{(\\sqrt{2x+1})^2 + x}{\\sqrt{2x+1}} = \\dfrac{2x+1+x}{\\sqrt{2x+1}}$.` },
          ],
          reponse: `$m'(x) = \\dfrac{3x+1}{\\sqrt{2x+1}}$.`,
          conseil: `Avec une racine au dénominateur, mets tout sous le même dénominateur. $(\\sqrt{A})^2 = A$ fait disparaître la racine au numérateur et nettoie l'expression.`,
          piege: `Ne laisse pas la réponse en deux fractions séparées. Le correcteur a besoin d'une fraction unique pour étudier le signe de $m'$ au Module 4.`,
        },
        {
          type: 'text',
          id: 'b-copie5',
          titre: `✍️ La Copie Parfaite`,
          contenu: `La fonction $m$ est dérivable sur $\\left]-\\dfrac{1}{2}\\ ;\\ +\\infty\\right[$ comme produit de fonctions dérivables sur cet intervalle. Calculons d'abord la dérivée de la racine :

$$\\left(\\sqrt{2x+1}\\right)' = \\dfrac{(2x+1)'}{2\\sqrt{2x+1}} = \\dfrac{1}{\\sqrt{2x+1}}$$

En appliquant la règle du produit, pour tout $x > -\\dfrac{1}{2}$ :

$$m'(x) = 1 \\times \\sqrt{2x+1} + x \\times \\dfrac{1}{\\sqrt{2x+1}} = \\dfrac{(\\sqrt{2x+1})^2 + x}{\\sqrt{2x+1}} = \\dfrac{3x+1}{\\sqrt{2x+1}}$$

*[Barème type BAC : dérivée de la racine composée 1 pt · application du produit 1 pt · réduction au même dénominateur 0,5 pt — Total : 2,5 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Résultats finaux seulement :

- **Exercice 1.** Soit $f(x) = (x^2 + 5) \\cdot \\cos(x)$. Calcule $f'(x)$. *(Réponse : $f'(x) = 2x\\cos(x) - (x^2+5)\\sin(x)$.)*
- **Exercice 2.** Soit $g(x) = \\dfrac{3x-5}{2x+4}$ sur $\\mathbb{R} \\setminus \\{-2\\}$. Calcule $g'(x)$. *(Réponse : $g'(x) = \\dfrac{22}{(2x+4)^2}$.)*
- **Exercice 3.** Soit $h(x) = \\sqrt{x^2+3}$ sur $\\mathbb{R}$. Calcule $h'(x)$. *(Réponse : $h'(x) = \\dfrac{x}{\\sqrt{x^2+3}}$.)*`,
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
            `Dériver une combinaison, ce n'est pas découper à l'aveugle : c'est **identifier la structure dominante** et appliquer la loi de coopération — relais croisé pour le produit, soustraction avec carré pour le quotient, dérivée interne pour la composée.`,
            `📘 Vocabulaire officiel : dérivée d'un produit, dérivée d'un quotient, fonction composée, dérivée interne.`,
            `Le geste qui sauve : **poser $u$ et $v$ au brouillon** avant de se lancer. Un calcul sans brouillon préparatoire produit des erreurs de signe à coup sûr.`,
            `Les variantes $(u^n)' = n u^{n-1} u'$ et $(\\sqrt{u})' = \\dfrac{u'}{2\\sqrt{u}}$ ne sont que des cas particuliers de la composée.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m3',
          titre: `Fil rouge`,
          contenu: `Tu sais maintenant dériver **n'importe quelle** fonction du programme. Mais une dérivée n'est pas une fin en soi : à quoi sert-elle vraiment ? Au **Module 4**, on va utiliser le **signe** de ces dérivées pour lire les variations des courbes et dresser les tableaux de variation parfaits du BAC. On va gâter le coin, Champion(ne) !`,
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
            `Je lis la structure dominante (somme, produit, quotient, composée) avant de dériver.`,
            `J'utilise le vocabulaire officiel (dérivée d'un produit, d'un quotient, fonction composée, dérivée interne).`,
            `Je n'écris jamais $(fg)' = f'g'$ : je connais le relais croisé $f'g + fg'$.`,
            `Pour un quotient, je respecte la soustraction orientée $f'g - fg'$ et le carré au dénominateur.`,
            `Sur une composée, je n'oublie jamais la dérivée interne $u'$ qui sort devant.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m3',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Le coin est gâté. File vers le Module 4 !`,
            `🟡 **3 ou 4** → Relis l'Arbre de décision et refais l'Exercice-Type 4 — la dérivée interne d'une composée est l'oubli n°1 au BAC.`,
            `🔴 **0 à 2** → Reprends l'image de la facture et de la machine au ② Le Réel. Pose toujours $u$ et $v$ avant de te lancer. Faut pas gnan !`,
          ],
        },
      ],
    },
  ],
};
