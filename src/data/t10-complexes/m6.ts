import { Chapitre } from '../../types/course';

export const chapitreM6: Chapitre = {
  id: 't10-m6',
  titre: `Module 6 — Écritures Complexes des Transformations`,
  duree: 28,
  niveau: 'BAC',
  xpGain: 35,
  objectifs: [
    `Reconnaître la nature d'une transformation z' = az + b`,
    `Déterminer le centre d'une transformation`,
    `Calculer le rapport et l'angle d'une similitude`,
    `Écrire la transformation à partir de ses éléments caractéristiques`,
    `Étudier une suite de points définie par récurrence`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, faire tourner une figure d'un certain angle autour d'un point, en Première, c'était des constructions au compas qui prenaient une page entière. Il n'y a pas plus simple ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Si, Champion(ne), et c'est même bluffant. Dans le plan complexe, faire tourner, déplacer ou agrandir une figure, ça se résume à une seule petite formule : $z' = az + b$. Tu changes $a$ et $b$, et tu obtiens n'importe quel mouvement, sans tracer le moindre trait. La géométrie devient de l'algèbre pure.`,
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
          contenu: `Imagine la grande statue au centre de la Place de la République. Tu veux la déplacer ou la réorienter, mais sans grue ni dessin compliqué : juste en donnant une instruction de calcul.

Si tu dis « glisse tout le monde de trois mètres vers l'est », sans rien tourner ni agrandir, c'est une translation. Si tu dis « éloigne chaque point deux fois plus loin du centre », la figure grandit sans tourner : c'est une homothétie. Si tu dis « fais pivoter d'un quart de tour autour du centre », elle tourne sans changer de taille : c'est une rotation. Et si tu combines tourner et agrandir en même temps, c'est une similitude. Toutes ces instructions tiennent dans une seule écriture, $z' = az + b$, où le coefficient $a$ décide à lui seul de la nature du mouvement.`,
        },
        {
          type: 'figure',
          id: 'fig-m6-1',
          src: '/images/t10/fig_M6_1.png',
          legende: `Une rotation garde la distance au centre ($\\Omega M = \\Omega M'$) et fait tourner de l'angle $\\theta = \\arg(a)$.`,
          alt: `Un plan complexe avec un centre Omega, un point M et son image M' par rotation d'angle theta.`,
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
          contenu: `On traduit les instructions de la Place de la République, brique par brique.

- « Glisser sans tourner » → $a = 1$, translation de vecteur d'affixe $b$
- « Agrandir sans tourner » → $a$ réel, homothétie de rapport $a$
- « Tourner sans agrandir » → $|a| = 1$, rotation d'angle $\\arg(a)$
- « Tourner et agrandir » → $a$ complexe quelconque, similitude directe
- « Le point qui ne bouge pas » → le centre $\\omega = \\dfrac{b}{1 - a}$`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Instruction sur la Place`, `Coefficient $a$`, `Transformation`],
          rows: [
            [`Glisser sans tourner`, `$a = 1$`, `Translation de vecteur d'affixe $b$`],
            [`Agrandir sans tourner`, `$a$ réel, $a \\neq 1$`, `Homothétie de rapport $a$`],
            [`Tourner sans agrandir`, `$|a| = 1$, $a \\neq 1$`, `Rotation d'angle $\\arg(a)$`],
            [`Tourner et agrandir`, `$a \\in \\mathbb{C} \\setminus \\mathbb{R}$`, `Similitude directe`],
            [`Le point fixe`, `$\\omega = \\dfrac{b}{1 - a}$`, `Le centre de la transformation`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `On passe aux définitions officielles.`,
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
          contenu: `Champion(ne), l'image de la statue t'aide à voir ; ta copie attend les mots précis.

**Définition formelle.** Toute application $z' = az + b$ (avec $a \\neq 0$) est : une **translation** si $a = 1$ ; une **homothétie** de rapport $a$ si $a$ est réel et $a \\neq 1$ ; une **rotation** d'angle $\\arg(a)$ si $|a| = 1$ et $a \\neq 1$ ; une **similitude directe** de rapport $|a|$ et d'angle $\\arg(a)$ sinon. Dans tous les cas avec $a \\neq 1$, le **centre** $\\Omega$ est le point invariant d'affixe $\\omega = \\dfrac{b}{1 - a}$.

**En langage courant.** Le coefficient $a$ porte tout : son module est l'agrandissement, son argument est la rotation.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Translation / homothétie / rotation / similitude directe** — les quatre natures selon $a$.
- **Centre** $\\Omega$ — le point invariant, d'affixe $\\omega = \\dfrac{b}{1 - a}$.
- **Rapport** $k = |a|$ — le facteur d'agrandissement.
- **Angle** $\\theta = \\arg(a)$ — l'angle de rotation.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le centre est le **point invariant** : il vérifie $\\omega = a\\omega + b$. C'est cette équation, pas la valeur de $b$, qui donne le centre.`,
        },
      ],
    },
    {
      id: 's4',
      titre: `④ LA RÈGLE`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-regle',
          titre: `Règle d'Or — Caractériser z' = az + b`,
          headers: [`Le coefficient $a$`, `Nature`, `Éléments`],
          rows: [
            [`$a = 1$`, `Translation`, `vecteur d'affixe $b$`],
            [`$a \\in \\mathbb{R} \\setminus \\lbrace 1 \\rbrace$`, `Homothétie`, `rapport $a$, centre $\\omega = \\dfrac{b}{1-a}$`],
            [`$|a| = 1$, $a \\neq 1$`, `Rotation`, `angle $\\arg(a)$, centre $\\omega = \\dfrac{b}{1-a}$`],
            [`$a \\in \\mathbb{C} \\setminus \\mathbb{R}$`, `Similitude directe`, `rapport $|a|$, angle $\\arg(a)$, centre $\\omega = \\dfrac{b}{1-a}$`],
          ],
        },
        {
          type: 'rule',
          id: 'rule9',
          titre: `Suite de points associée`,
          contenu: `Pour une **suite de points** $z_{n+1} = a z_n + b$ de centre $\\Omega$ : $z_{n+1} - \\omega = a\\,(z_n - \\omega)$, donc $\\Omega A_{n+1} = |a| \\cdot \\Omega A_n$ : la suite des distances est **géométrique** de raison $|a|$.`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Pour le centre, ne devine jamais : résous $\\omega = a\\omega + b$, soit $\\omega = \\dfrac{b}{1 - a}$.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Une similitude de coefficient $a = 2i$ n'est PAS une homothétie : son $a$ a une partie imaginaire, donc elle tourne. Seul un $a$ réel pur donne une homothétie, Champion(ne).`,
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
          contenu: `Identifie $a$ et $b$. Le module et l'argument de $a$ donnent la nature et les éléments ; l'équation du point invariant donne le centre. Pour une suite, fais apparaître $z_{n+1} - \\omega = a(z_n - \\omega)$.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Si dans $z' = az + b$ le coefficient $a$ est...`, `Alors la transformation est...`],
          rows: [
            [`Exactement $1$`, `Une translation (vecteur d'affixe $b$, pas de centre).`],
            [`Un réel comme $2$ ou $-3$`, `Une homothétie (elle étire, sans tourner).`],
            [`De module $1$, comme $i$ ou $e^{i\\frac{\\pi}{4}}$`, `Une rotation (elle tourne, sans déformer).`],
            [`Un complexe quelconque comme $1 + i$`, `Une similitude directe (elle tourne ET étire).`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure (caractériser z' = az + b)`,
          contenu: `**Étape 1.** Identifie $a$ et $b$. Calcule $|a|$ (le rapport) et $\\arg(a)$ (l'angle).

**Étape 2.** Conclus sur la nature grâce à l'arbre.

**Étape 3.** Calcule l'affixe du centre : $\\omega = \\dfrac{b}{1 - a}$.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `Teste le centre : remplace $z$ par $\\omega$ dans $z' = az + b$, tu dois retrouver $\\omega$ (il est invariant). Pour une suite, vérifie que la raison $|a|$ est cohérente avec les premiers termes calculés à la main.`,
        },
        {
          type: 'figure',
          id: 'fig-m6-2',
          src: '/images/t10/fig_M6_2.png',
          legende: `Une homothétie de rapport $2$ aligne $\\Omega$, $M$, $M'$ et double la distance au centre, sans rotation.`,
          alt: `Un plan complexe avec un centre Omega, un point M et son image M' deux fois plus loin sur la même demi-droite.`,
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
            [`🔴 BAC`, `Caractériser une similitude`, `« Précise la nature et les éléments de $f$ »`, `Type 1`],
            [`🔴 BAC`, `Suite de points $z_{n+1}=f(z_n)$`, `« On définit $A_n$ par $z_{n+1} = \\dots$ »`, `Type 2`],
            [`🟡 MOYEN`, `Image d'un point`, `« Détermine l'affixe de l'image de $A$ »`, `Type 1`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 1 — Caractériser une similitude** *(BAC)*. Le plan complexe est muni d'un repère orthonormé direct. Soit $f$ l'application qui, à tout point $M$ d'affixe $z$, associe $M'$ d'affixe $z' = (1 + i)z - 2i$. **1.** Détermine l'affixe de l'image $A'$ du point $A$ d'affixe $z_A = 1 + i$. **2.** Précise la nature et les éléments caractéristiques de $f$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `$z' = az + b$ avec $a$ complexe non réel : similitude directe. On lit $|a|$, $\\arg(a)$, puis le centre.` },
            { name: `Étape 1`, contenu: `On remplace $z$ par $1 + i$ : $z_{A'} = (1 + i)(1 + i) - 2i$.` },
            { name: `Étape 2`, contenu: `$a = 1 + i \\in \\mathbb{C} \\setminus \\mathbb{R}$ : similitude directe. On calcule rapport, angle, centre.` },
          ],
          reponse: `$A' = O$ (affixe $0$). $f$ est la similitude directe de centre $\\Omega(2)$, de rapport $\\sqrt{2}$ et d'angle $\\dfrac{\\pi}{4}$.`,
          conseil: `Écris le centre comme point invariant : $\\omega = \\dfrac{b}{1 - a}$, et simplifie la fraction complexe par le conjugué si besoin.`,
          piege: `Le centre n'est pas $b = -2i$ ! C'est le point fixe : on résout $\\omega = (1+i)\\omega - 2i$.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `**1.** $z_{A'} = (1 + i)(1 + i) - 2i = (1 + 2i + i^2) - 2i = (1 + 2i - 1) - 2i = 0$. Donc $A'$ a pour affixe $0$ : $A' = O$.

**2.** $a = 1 + i \\in \\mathbb{C} \\setminus \\mathbb{R}$ : $f$ est une **similitude directe**.
- Rapport : $k = |1 + i| = \\sqrt{2}$.
- Angle : $\\arg(1 + i) = \\dfrac{\\pi}{4} \\pmod{2\\pi}$.
- Centre : $\\omega = \\dfrac{b}{1 - a} = \\dfrac{-2i}{1 - (1 + i)} = \\dfrac{-2i}{-i} = 2$.

Conclusion : $f$ est la similitude directe de centre $\\Omega(2)$, de rapport $\\sqrt{2}$ et d'angle $\\dfrac{\\pi}{4}$.

*[Barème type BAC : image $A'$ = 1 pt — nature = 0,5 pt — rapport et angle = 1 pt — centre = 1 pt — Total : 3,5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 2 — Suite de points** *(BAC)*. Soit $S$ l'application $z' = (1 - i)z + i$. On définit la suite de points $(A_n)$ par $z_0 = 0$ et $z_{n+1} = (1 - i)z_n + i$. On note $\\Omega$ le centre de $S$ et $r_n = \\Omega A_n$. **1.** Précise la nature et le centre de $S$. **2.** Montre que $z_{n+1} - \\omega = (1 - i)(z_n - \\omega)$ et déduis-en l'expression de $r_n$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Similitude itérée : on caractérise $S$, puis on fait apparaître le centre dans la relation de récurrence pour obtenir une suite géométrique de distances.` },
            { name: `Étape 1`, contenu: `$a = 1 - i$, $b = i$ : similitude directe, centre $\\omega = \\dfrac{b}{1 - a} = \\dfrac{i}{i} = 1$.` },
            { name: `Étape 2`, contenu: `On factorise la récurrence par $(1 - i)$ autour de $\\omega$, puis on prend les modules.` },
          ],
          reponse: `$\\Omega(1)$, similitude directe de rapport $\\sqrt{2}$ et d'angle $-\\dfrac{\\pi}{4}$. La suite $(r_n)$ est géométrique de raison $\\sqrt{2}$, de premier terme $r_0 = 1$, donc $r_n = (\\sqrt{2})^n$.`,
          conseil: `Dès que tu vois une suite $z_{n+1} = a z_n + b$, calcule le centre $\\omega$ : la quantité $z_n - \\omega$ devient une suite géométrique.`,
          piege: `Ne prends le module qu'à la fin : $|1 - i| = \\sqrt{2}$, donc la raison est $\\sqrt{2}$, pas $1 - i$.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `**1.** $a = 1 - i \\in \\mathbb{C} \\setminus \\mathbb{R}$ : $S$ est une similitude directe. Son centre vérifie $\\omega = \\dfrac{b}{1 - a} = \\dfrac{i}{1 - (1 - i)} = \\dfrac{i}{i} = 1$. Donc $\\Omega(1)$. (Rapport $\\sqrt{2}$, angle $-\\dfrac{\\pi}{4}$.)

**2.** Comme $\\omega = (1 - i)\\omega + i$, on soustrait :
$$z_{n+1} - \\omega = (1 - i)z_n + i - \\big((1 - i)\\omega + i\\big) = (1 - i)(z_n - \\omega).$$
En prenant les modules : $r_{n+1} = |1 - i|\\,r_n = \\sqrt{2}\\,r_n$. La suite $(r_n)$ est géométrique de raison $\\sqrt{2}$, de premier terme $r_0 = |z_0 - \\omega| = |0 - 1| = 1$. Donc :
$$r_n = (\\sqrt{2})^n.$$

*[Barème type BAC : nature et centre = 1,5 pt — factorisation de la récurrence = 1,5 pt — expression de $r_n$ = 1 pt — Total : 4 pts]*`,
        },
        {
          type: 'figure',
          id: 'fig-m6-3',
          src: '/images/t10/fig_M6_3.png',
          legende: `La suite $(A_n)$ s'enroule autour de $\\Omega$ : à chaque pas, on tourne de $-\\dfrac{\\pi}{4}$ et la distance est multipliée par $\\sqrt{2}$.`,
          alt: `Un plan complexe avec un centre Omega et les points A0, A1, A2, A3 d'une suite en spirale qui s'éloigne.`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-a',
          pf: `Mais Grand Frère, si je tombe sur $z' = 2iz + 3$, le centre c'est le point d'affixe $3$ ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-b',
          gf: `Surtout pas, Champion(ne) ! $3$, c'est ton $b$. Le centre, c'est le point qui ne bouge pas. Tu résous $\\omega = 2i\\,\\omega + 3$, donc $\\omega = \\dfrac{3}{1 - 2i}$. Le centre se mérite par un petit calcul, il ne se lit jamais directement dans la formule.`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Identifie toujours $a$ et $b$ d'abord. Réponses finales seulement.

- **Exercice 1.** Nature de $z' = -3z + 4$. *(Réponse : homothétie de rapport $-3$, centre $\\omega = 1$.)*
- **Exercice 2.** Nature et centre de $z' = iz + 1 - i$. *(Réponse : rotation d'angle $\\dfrac{\\pi}{2}$, centre $\\omega = 1$.)*
- **Exercice 3.** Pour $z' = \\dfrac{1}{2}z + 1$, donne le rapport et le centre. *(Réponse : homothétie de rapport $\\dfrac{1}{2}$, centre $\\omega = 2$.)*`,
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
            `Toute transformation s'écrit $z' = az + b$ ; le coefficient $a$ décide de la **nature**.`,
            `📘 Vocabulaire officiel : translation, homothétie, rotation, similitude directe, centre, rapport, angle.`,
            `Le **centre** est le point invariant : $\\omega = \\dfrac{b}{1 - a}$.`,
            `Pour une **suite de points** $z_{n+1} = a z_n + b$ : $z_{n+1} - \\omega = a(z_n - \\omega)$, distances géométriques de raison $|a|$.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m6',
          titre: `Fil rouge`,
          contenu: `Tu as bouclé les six modules : tu calcules, tu résous, tu fais tourner le plan à volonté. Au Tome 11, on introduit le temps : ces exponentielles $e^{i\\theta}$ vont devenir $e^{i\\omega t}$ et décrire des ondes, des ressorts et des circuits — les équations différentielles.`,
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
            `Je sais reconnaître la nature d'une transformation $z' = az + b$.`,
            `J'emploie le vocabulaire officiel : translation, homothétie, rotation, similitude.`,
            `Je sais calculer le centre $\\omega = \\dfrac{b}{1 - a}$.`,
            `Je sais donner le rapport $|a|$ et l'angle $\\arg(a)$ d'une similitude.`,
            `Je sais étudier une suite de points $z_{n+1} = f(z_n)$ et sa suite de distances.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m6',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Bravo Champion(ne), le Tome 10 est plié, direction le Tome 11 !`,
            `🟡 **3 ou 4** → Relis la brique 📘 et la procédure de caractérisation.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel, l'image de la Place de la République.`,
          ],
        },
      ],
    },
  ],
};
