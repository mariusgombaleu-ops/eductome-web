import { Chapitre } from '../../types/course';

export const chapitreM2: Chapitre = {
  id: 't9-m2',
  titre: `Module 2 — Barycentre dans l'Espace`,
  duree: 24,
  niveau: 'MOYEN',
  xpGain: 25,
  objectifs: [
    `Calculer les coordonnées d'un barycentre de 2, 3 ou plusieurs points pondérés`,
    `Énoncer la définition du barycentre avec le vocabulaire officiel attendu au BAC`,
    `Reconnaître et placer un isobarycentre (milieu, centre de gravité)`,
    `Réduire une somme vectorielle du type $\\alpha\\vec{MA} + \\beta\\vec{MB}$`,
    `Utiliser l'associativité (barycentre partiel) pour simplifier un calcul`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, je sais calculer le milieu de deux points. Mais si on me donne trois points avec des « poids » différents, genre l'un compte double... comment je trouve leur point d'équilibre ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Excellente question, Champion(ne) ! Le milieu, c'est le cas où les deux points pèsent pareil. Mais dès qu'on met des poids différents, on a besoin d'un outil plus puissant : le barycentre. C'est le point d'équilibre exact d'un système de points chargés. Et le plus beau, c'est qu'il se calcule avec une formule presque aussi simple que celle du milieu.`,
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
          contenu: `Tu as déjà vu une balançoire à bascule dans une cour d'école, ce qu'on appelle un « tape-cul » ? Deux enfants s'assoient chacun d'un côté d'une planche posée sur un pivot. Si les deux pèsent exactement la même chose, le pivot est pile au milieu : c'est l'équilibre parfait.

Mais imagine maintenant qu'un grand de Terminale s'assoie d'un côté, et un petit de sixième de l'autre. Pour que la planche reste à l'horizontale, le pivot ne peut plus rester au centre. Il faut le rapprocher du grand, parce qu'il est plus lourd. Plus un côté est chargé, plus le point d'équilibre se déplace vers lui.

Ce point d'équilibre, qui tient compte du **poids** de chacun, c'est exactement le **barycentre**. Le milieu, lui, n'était que le cas particulier où tout le monde pèse pareil. En maths, le « poids » devient un nombre qu'on appelle un **coefficient**, et le barycentre se place toujours plus près des points qui ont les gros coefficients.`,
        },
        {
          type: 'figure',
          id: 'fig-m2-1',
          src: '/images/t9/fig_M2_1.png',
          legende: `Le barycentre $G$ se déplace vers les gros coefficients.`,
          alt: `Une planche sur un pivot décalé vers le personnage le plus lourd, point d'équilibre G.`,
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
          contenu: `On traduit la bascule en langage mathématique.

- Un enfant assis → un point $A_i$ — un point du système
- Son poids → un coefficient $\\alpha_i$ — un nombre réel
- Le pivot d'équilibre → le barycentre $G$ — le point cherché
- « la planche est en équilibre » → $\\sum \\alpha_i \\vec{GA_i} = \\vec{0}$ — la condition d'équilibre`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène de la bascule`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Un enfant assis`, `$A_i$`, `Un point du système pondéré`],
            [`Son poids`, `$\\alpha_i$`, `Le coefficient affecté au point`],
            [`Le poids total`, `$\\sum \\alpha_i$`, `La somme des coefficients (non nulle)`],
            [`Le pivot d'équilibre`, `$G$`, `Le barycentre du système`],
            [`La planche en équilibre`, `$\\sum \\alpha_i \\vec{GA_i} = \\vec{0}$`, `La relation qui définit $G$`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `À partir de cette condition d'équilibre, on obtient directement une formule de coordonnées.`,
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
          contenu: `Champion(ne), tu as l'image du pivot qui équilibre la bascule. Ta copie doit le dire avec les mots exacts.

**Définition formelle.** Soit un système de points pondérés $(A_1, \\alpha_1), (A_2, \\alpha_2), \\ldots, (A_n, \\alpha_n)$ tel que $\\alpha_1 + \\alpha_2 + \\cdots + \\alpha_n \\neq 0$. Le **barycentre** $G$ est l'unique point vérifiant :
$$\\alpha_1 \\vec{GA_1} + \\alpha_2 \\vec{GA_2} + \\cdots + \\alpha_n \\vec{GA_n} = \\vec{0}$$

**En langage courant.** $G$ est le point d'équilibre du système : la somme des « tractions » pondérées vers chaque point s'annule.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Point pondéré** $(A ; \\alpha)$ — un point affecté d'un coefficient.
- **Barycentre** — le point d'équilibre, défini quand $\\sum \\alpha_i \\neq 0$.
- **Isobarycentre** — barycentre où tous les coefficients sont égaux (le centre de gravité).
- **Propriété de réduction** — pour tout point $M$ : $\\sum \\alpha_i \\vec{MA_i} = \\left(\\sum \\alpha_i\\right)\\vec{MG}$.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Vérifie toujours que $\\sum \\alpha_i \\neq 0$ avant de parler de barycentre. Le correcteur attend la phrase *« Le système admet un barycentre car la somme des coefficients est non nulle. »*`,
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
          titre: `Règle d'Or — Coordonnées et réduction du barycentre`,
          contenu: `Soit $G$ le barycentre de $(A_1, \\alpha_1), \\ldots, (A_n, \\alpha_n)$ avec $S = \\alpha_1 + \\cdots + \\alpha_n \\neq 0$. Ses coordonnées s'obtiennent par moyenne pondérée :
$$x_G = \\dfrac{1}{S}\\sum_{i=1}^n \\alpha_i x_i \\;;\\quad y_G = \\dfrac{1}{S}\\sum_{i=1}^n \\alpha_i y_i \\;;\\quad z_G = \\dfrac{1}{S}\\sum_{i=1}^n \\alpha_i z_i$$

**Propriété de réduction.** Pour tout point $M$ de l'espace : $\\sum_{i=1}^n \\alpha_i \\vec{MA_i} = S\\,\\vec{MG}$.

**Associativité.** On ne change pas le barycentre en remplaçant plusieurs points par leur barycentre partiel, affecté de la somme de leurs coefficients.`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `L'isobarycentre de deux points, c'est le milieu. Celui de trois points (coefficients égaux), c'est le centre de gravité du triangle, à l'intersection des médianes.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Si $\\sum \\alpha_i = 0$, le barycentre **n'existe pas** : on obtient alors un vecteur constant, pas un point. Vérifie la somme d'abord.`,
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
          contenu: `Le mot « barycentre », « point pondéré », « centre de gravité » ou une somme du type $\\alpha\\vec{MA} + \\beta\\vec{MB} + \\gamma\\vec{MC}$ dans l'énoncé : tu es sur ce module. Premier réflexe : additionner les coefficients.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`La question au BAC`, `Ton réflexe algébrique`],
          rows: [
            [`Calculer les coordonnées de $G$`, `Je vérifie $S=\\sum\\alpha_i \\neq 0$, puis moyenne pondérée coordonnée par coordonnée.`],
            [`Réduire $\\alpha\\vec{MA}+\\beta\\vec{MB}+\\cdots$`, `J'introduis le barycentre $G$ et j'écris $S\\,\\vec{MG}$.`],
            [`Placer le centre de gravité d'un triangle`, `Isobarycentre : moyenne simple des trois sommets.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure (coordonnées d'un barycentre)`,
          contenu: `**Étape 1.** Calcule la somme des coefficients $S$ et vérifie $S \\neq 0$.

**Étape 2.** Pour chaque coordonnée, fais la somme des coefficients fois la coordonnée correspondante.

**Étape 3.** Divise chaque somme par $S$.

**Étape 4.** Écris la conclusion : $G(x_G ; y_G ; z_G)$.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `Le barycentre doit tomber « du côté » des gros coefficients. Si tu charges surtout $A$ et que ton $G$ atterrit loin de $A$, reprends ton calcul.`,
        },
        {
          type: 'figure',
          id: 'fig-m2-2',
          src: '/images/t9/fig_M2_2.png',
          legende: `Avec $(A,2)$, $G$ se rapproche de $A$ : les gros coefficients tirent le point d'équilibre.`,
          alt: `Un triangle ABC avec le barycentre pondéré G plus proche du sommet A chargé.`,
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
            [`🟢 BASE`, `Isobarycentre`, `« centre de gravité », coefficients égaux`, `Type 1`],
            [`🟡 MOYEN`, `Barycentre pondéré`, `Coefficients différents donnés`, `Type 1`],
            [`🔴 BAC`, `Réduction vectorielle + barycentre`, `Somme $\\alpha\\vec{MA}+\\cdots$ à simplifier`, `Type 2`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Barycentre pondéré et centre de gravité** *(BASE / MOYEN)*. Dans un repère orthonormé, on donne $A(1 ; 0 ; 2)$, $B(3 ; 2 ; 0)$ et $C(-1 ; 4 ; 2)$. **1.** Calcule les coordonnées du centre de gravité $G_0$ du triangle $ABC$. **2.** Calcule les coordonnées du barycentre $G$ de $(A,2)$, $(B,1)$, $(C,1)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Question de coordonnées : moyenne simple pour le centre de gravité, moyenne pondérée pour le barycentre.` },
            { name: `Étape 1`, contenu: `Centre de gravité (isobarycentre, $S = 3$) : $G_0\\left(\\dfrac{1+3-1}{3} \\,;\\, \\dfrac{0+2+4}{3} \\,;\\, \\dfrac{2+0+2}{3}\\right) = G_0\\left(1 \\,;\\, 2 \\,;\\, \\dfrac{4}{3}\\right)$.` },
            { name: `Étape 2`, contenu: `Barycentre pondéré, $S = 2+1+1 = 4$ : $x_G = \\dfrac{2\\times 1 + 1\\times 3 + 1\\times(-1)}{4} = 1$ ; $y_G = \\dfrac{2\\times 0 + 1\\times 2 + 1\\times 4}{4} = \\dfrac{3}{2}$ ; $z_G = \\dfrac{2\\times 2 + 1\\times 0 + 1\\times 2}{4} = \\dfrac{3}{2}$.` },
          ],
          reponse: `$G_0\\left(1 ; 2 ; \\dfrac{4}{3}\\right)$ et $G\\left(1 ; \\dfrac{3}{2} ; \\dfrac{3}{2}\\right)$.`,
          conseil: `Calcule $S$ une seule fois et garde-le au coin du brouillon : il sert pour les trois coordonnées.`,
          piege: `N'oublie pas le coefficient devant chaque coordonnée : c'est $2\\times x_A$, pas $x_A$ seul.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `1. La somme des coefficients vaut $3 \\neq 0$, le centre de gravité existe : $G_0\\left(1 ; 2 ; \\dfrac{4}{3}\\right)$.
2. La somme des coefficients vaut $4 \\neq 0$, le barycentre $G$ existe. Par moyenne pondérée : $G\\left(1 ; \\dfrac{3}{2} ; \\dfrac{3}{2}\\right)$.

*[Barème type BAC : centre de gravité = 1 pt — barycentre pondéré = 1,5 pt — Total : 2,5 pts]*`,
        },
        {
          type: 'figure',
          id: 'fig-m2-3',
          src: '/images/t9/fig_M2_3.png',
          legende: `L'isobarycentre de $A$, $B$, $C$ est l'intersection des médianes.`,
          alt: `Un triangle ABC avec ses trois médianes concourantes au centre de gravité G.`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 2 — Réduction vectorielle** *(BAC)*. Soit $A$, $B$, $C$ trois points et $G$ le barycentre de $(A,2)$, $(B,1)$, $(C,1)$. **1.** Justifie l'existence de $G$. **2.** Montre que pour tout point $M$ de l'espace, $2\\vec{MA} + \\vec{MB} + \\vec{MC} = 4\\vec{MG}$. **3.** En déduire la construction de $G$ à partir de $A$ et du milieu $I$ de $[BC]$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Une somme pondérée à simplifier : on applique la propriété de réduction, puis l'associativité.` },
            { name: `Étape 1`, contenu: `$S = 2 + 1 + 1 = 4 \\neq 0$ : le barycentre $G$ existe.` },
            { name: `Étape 2`, contenu: `Par la propriété de réduction appliquée au système $(A,2),(B,1),(C,1)$ : $2\\vec{MA} + \\vec{MB} + \\vec{MC} = (2+1+1)\\vec{MG} = 4\\vec{MG}$.` },
            { name: `Étape 3`, contenu: `Par associativité, $B$ et $C$ (coefficients $1$ et $1$) se remplacent par leur barycentre partiel : le milieu $I$ de $[BC]$, affecté du coefficient $2$. Donc $G$ est le barycentre de $(A,2)$ et $(I,2)$, c'est-à-dire l'**isobarycentre** de $A$ et $I$ : $G$ est le milieu de $[AI]$.` },
          ],
          reponse: `$G$ se construit comme le milieu du segment $[AI]$, où $I$ est le milieu de $[BC]$.`,
          conseil: `La réduction transforme une somme effrayante en un seul vecteur $S\\,\\vec{MG}$ : c'est l'outil qui débloque les « ensembles de points » du BAC.`,
          piege: `Le coefficient devant $\\vec{MG}$ est la **somme** des coefficients ($4$ ici), pas le nombre de points.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `1. La somme des coefficients vaut $4 \\neq 0$, donc le barycentre $G$ existe.
2. D'après la propriété de réduction, pour tout point $M$ : $2\\vec{MA} + \\vec{MB} + \\vec{MC} = 4\\vec{MG}$.
3. En regroupant $(B,1)$ et $(C,1)$ par associativité, on obtient le milieu $I$ de $[BC]$ affecté de $2$. Ainsi $G$ est le barycentre de $(A,2)$ et $(I,2)$, donc le milieu de $[AI]$.

*[Barème type BAC : existence = 0,5 pt — réduction = 1,5 pt — associativité et construction = 2 pts — Total : 4 pts]*`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-a',
          pf: `Grand Frère, à quoi ça sert vraiment de réduire la somme comme ça ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-b',
          gf: `À tout, Champion(ne) ! Une fois que $2\\vec{MA}+\\vec{MB}+\\vec{MC}$ devient $4\\vec{MG}$, tu peux résoudre des équations sur $M$, trouver des ensembles de points, des sphères... La réduction, c'est la clé qui ouvre les exercices les plus costauds.`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Vérifie toujours la somme des coefficients d'abord. Réponses finales seulement.

- **Exercice 1.** Centre de gravité de $A(0;0;0)$, $B(6;0;0)$, $C(0;6;0)$. *(Réponse : $G(2 ; 2 ; 0)$.)*
- **Exercice 2.** Barycentre de $(A,1)$, $(B,3)$ avec $A(2;0;1)$ et $B(2;4;-3)$. *(Réponse : $G(2 ; 3 ; -2)$ ; plus proche de $B$.)*
- **Exercice 3.** Le système $(A,3)$, $(B,-3)$ admet-il un barycentre ? *(Réponse : non, car $3 + (-3) = 0$.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m2',
          titre: `À retenir`,
          contenu: [
            `Le barycentre est le **point d'équilibre** d'un système de points pondérés (il existe si $\\sum\\alpha_i \\neq 0$).`,
            `📘 Vocabulaire officiel : point pondéré, barycentre, isobarycentre, propriété de réduction.`,
            `Coordonnées par **moyenne pondérée** ; l'**isobarycentre** est le centre de gravité (médianes).`,
            `La **réduction** $\\sum\\alpha_i\\vec{MA_i} = S\\,\\vec{MG}$ est l'outil clé des exercices avancés.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m2',
          titre: `Fil rouge`,
          contenu: `Tu sais maintenant placer et équilibrer des points. Mais pour mesurer des angles droits, des longueurs et des projections dans l'espace, il te faut une machine de précision : le produit scalaire. C'est tout l'enjeu du Module 3.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m2',
          titre: `Auto-évaluation — Module 2`,
          contenu: [
            `Je vérifie toujours que la somme des coefficients est non nulle.`,
            `Je sais calculer les coordonnées d'un barycentre par moyenne pondérée.`,
            `J'utilise le vocabulaire officiel (point pondéré, barycentre, isobarycentre, réduction).`,
            `Je sais réduire une somme $\\alpha\\vec{MA}+\\beta\\vec{MB}+\\cdots$ en $S\\,\\vec{MG}$.`,
            `Je sais utiliser l'associativité pour construire un barycentre.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m2',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → En route pour le Module 3, on sort le produit scalaire.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et la propriété de réduction.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel, l'image de la bascule.`,
          ],
        },
      ],
    },
  ],
};
