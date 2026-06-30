import { Chapitre } from '../../types/course';

export const chapitreM7: Chapitre = {
  id: 't9-m7',
  titre: `Module 7 — Distances et Sphères`,
  duree: 24,
  niveau: 'BAC',
  xpGain: 25,
  objectifs: [
    `Calculer la distance exacte d'un point à un plan`,
    `Énoncer ces notions avec le vocabulaire officiel attendu au BAC`,
    `Déterminer l'équation cartésienne d'une sphère`,
    `Déduire la nature de l'intersection entre une sphère et un plan`,
    `Reconnaître et exploiter une sphère tangente à un plan`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, si un aéronef vole aux coordonnées $(3 ; 4 ; 5)$ en kilomètres et que le sol est le plan $z = 0$, comment je calcule son altitude exacte sans tracer un repère géant ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Excellente réflexion, Champion(ne) ! Tu cherches le chemin le plus court, la chute verticale, entre ton point en l'air et la surface plate. C'est ce qu'on appelle la distance d'un point à un plan, et c'est l'ultime outil de notre boîte 3D. Avec lui, on saura aussi si une sphère touche un plan, le coupe, ou passe à côté. Le grand final !`,
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
          contenu: `Imagine un match au Stade Félix Houphouët-Boigny. Le gardien dégage le ballon très haut dans le ciel. À l'instant où il atteint son point culminant, fige l'image.

Le gazon parfaitement tondu, c'est ton **plan** de référence. Le centre du ballon, flottant dans l'air, c'est ton **point** isolé en trois dimensions. L'altitude exacte du ballon, mesurée par un fil tendu verticalement jusqu'au sol, représente la **distance** du point au plan. Et si tu regardes le ballon lui-même, avec son enveloppe en cuir gonflée, tu as une **sphère** parfaite, caractérisée par son rayon.

Maintenant, pose-toi la vraie question du match : ce ballon va-t-il toucher le sol, s'y enfoncer à moitié, ou voler encore ? Il suffit de comparer son altitude (la distance $d$ du centre au sol) avec sa propre taille (le rayon $r$). Si l'altitude dépasse le rayon, le ballon vole ; si elle est plus petite, le sol traverse le ballon. Toute l'intersection sphère/plan tient dans cette simple comparaison.`,
        },
        {
          type: 'figure',
          id: 'fig-m7-1',
          src: '/images/t9/fig_M7_1.png',
          legende: `Comparer la distance $d$ au rayon $r$ : le ballon vole, effleure ou est coupé par le sol.`,
          alt: `Un terrain horizontal et un ballon flottant au-dessus, distance d du centre au sol et rayon r.`,
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
          contenu: `On traduit l'arrêt sur image du stade.

- Le centre du ballon → le point $\\Omega(x_0 ; y_0 ; z_0)$ — le centre de la sphère
- Le gazon plat → le plan $P : ax + by + cz + d' = 0$ — la surface
- Le fil vertical tendu → la distance $d(\\Omega, P)$ — le plus court chemin
- L'enveloppe du ballon → la sphère de rayon $r$ — la surface ronde`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène du stade`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Le centre du ballon`, `$\\Omega(x_0 ; y_0 ; z_0)$`, `Le centre de la sphère`],
            [`Le gazon`, `$P : ax+by+cz+d'=0$`, `Le plan de référence`],
            [`Le fil tendu vers le sol`, `$d(\\Omega, P)$`, `La distance du point au plan`],
            [`L'enveloppe du ballon`, `$(x-a)^2+(y-b)^2+(z-c)^2=r^2$`, `L'équation de la sphère`],
            [`Le ballon coupé par le sol`, `$d < r$`, `L'intersection est un cercle`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `On formalise les trois outils.`,
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
          contenu: `Champion(ne), tu as l'image du ballon au stade. Ta copie doit parler le langage exact.

**Définition formelle.** La **distance** du point $\\Omega(x_0 ; y_0 ; z_0)$ au plan $P : ax + by + cz + d' = 0$ est :
$$d(\\Omega, P) = \\dfrac{|ax_0 + by_0 + cz_0 + d'|}{\\sqrt{a^2 + b^2 + c^2}}$$

La **sphère** de centre $\\Omega(a ; b ; c)$ et de rayon $r$ a pour équation $(x-a)^2 + (y-b)^2 + (z-c)^2 = r^2$.

**En langage courant.** La distance est l'altitude la plus courte ; la sphère est l'ensemble des points à distance $r$ du centre.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Distance d'un point à un plan** — la formule avec valeur absolue et racine.
- **Sphère** — ensemble des points à distance $r$ du centre $\\Omega$.
- **Plan tangent** — plan touchant la sphère en un seul point ($d = r$).
- **Section plane** — le cercle obtenu quand le plan coupe la sphère ($d < r$).`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Pour l'intersection, le correcteur attend la comparaison explicite : *« Comme $d(\\Omega, P) < r$, l'intersection est un cercle. »*`,
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
          titre: `Règle d'Or — La boîte à outils des distances et sphères`,
          contenu: `**1. Distance point / plan.** Pour $\\Omega(x_0 ; y_0 ; z_0)$ et $P : ax + by + cz + d' = 0$ :
$$d(\\Omega, P) = \\dfrac{|ax_0 + by_0 + cz_0 + d'|}{\\sqrt{a^2 + b^2 + c^2}}$$

**2. Équation de la sphère** de centre $\\Omega(a ; b ; c)$ et rayon $r$ :
$$(x - a)^2 + (y - b)^2 + (z - c)^2 = r^2$$

**3. Intersection sphère / plan.** En posant $d = d(\\Omega, P)$ :
- $d > r$ : intersection **vide** (le plan passe loin).
- $d = r$ : intersection **un point** (plan **tangent**).
- $d < r$ : intersection **un cercle** (le plan coupe la sphère).`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Une sphère **tangente** à un plan, c'est le cas $d = r$ : la distance du centre au plan EST le rayon. Énorme raccourci pour trouver $r$.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `N'oublie jamais les barres de valeur absolue au numérateur : une distance est toujours positive. Et compare $d$ et $r$ directement, pas $d^2$ et $r^2$ par précipitation.`,
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
          contenu: `« Distance au plan », « sphère », « plan tangent », « intersection sphère/plan » : c'est le grand final. Premier réflexe : calculer la distance du centre au plan.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`La situation posée`, `Ton réflexe algébrique`],
          rows: [
            [`Distance d'un point $\\Omega$ à un plan $P$`, `J'applique la formule avec valeur absolue et racine.`],
            [`Sphère tangente à un plan`, `Je pose $d(\\Omega, P) = r$ pour trouver le rayon.`],
            [`Intersection sphère / plan`, `Je calcule $d$, je le compare à $r$, je conclus (vide / point / cercle).`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure (caractériser l'intersection sphère / plan)`,
          contenu: `**Étape 1.** Identifie le centre $\\Omega$ et le rayon $r$ de la sphère.

**Étape 2.** Mets le plan sous la forme $ax + by + cz + d' = 0$.

**Étape 3.** Calcule la distance $d(\\Omega, P)$ avec la formule.

**Étape 4.** Compare $d$ et $r$, puis rédige la conclusion (vide, point, ou cercle).`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `Avant de te lancer, contrôle le signe de la constante $d'$ dans l'équation du plan : si c'est $-5$, c'est bien $-5$ dans le numérateur, pas $+5$.`,
        },
        {
          type: 'figure',
          id: 'fig-m7-2',
          src: '/images/t9/fig_M7_2.png',
          legende: `La distance est la longueur du plus court chemin, le long de la perpendiculaire.`,
          alt: `Un plan P et un point Omega au-dessus, le segment perpendiculaire au plan marquant la distance d.`,
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
            [`🟡 MOYEN`, `Calcul de distance pure`, `« calculer la distance de $\\Omega$ à $P$ »`, `Type 1`],
            [`🔴 BAC`, `Intersection sphère / plan`, `« nature de l'intersection »`, `Type 1`],
            [`🔴 BAC`, `Sphère tangente à un plan`, `« sphère tangente », trouver $r$`, `Type 2`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 1 — Intersection sphère / plan** *(BAC)*. L'espace est muni d'un repère orthonormé. Soit le plan $P : 2x - y + 2z - 5 = 0$ et la sphère $S$ de centre $\\Omega(3 ; 1 ; 2)$ et de rayon $r = 3$. **1.** Calcule la distance du point $\\Omega$ au plan $P$. **2.** Déduis-en la nature de l'intersection de $S$ et $P$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Centre, rayon, équation de plan : on calcule $d$ puis on compare à $r$.` },
            { name: `Étape 1`, contenu: `$d(\\Omega, P) = \\dfrac{|2(3) - 1 + 2(2) - 5|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\dfrac{|6 - 1 + 4 - 5|}{\\sqrt{9}} = \\dfrac{4}{3}$.` },
            { name: `Étape 2`, contenu: `On compare à $r = 3$. Comme $\\dfrac{4}{3} \\approx 1{,}33 < 3$, on a $d < r$.` },
          ],
          reponse: `$d(\\Omega, P) < r$ : l'intersection de la sphère $S$ et du plan $P$ est un **cercle**.`,
          conseil: `Calcule d'abord le dénominateur $\\sqrt{a^2+b^2+c^2}$ ; il est souvent un carré parfait ($\\sqrt{9} = 3$), ce qui simplifie tout.`,
          piege: `Oublier les valeurs absolues au numérateur et trouver une distance négative. Une distance est toujours positive.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `1. $d(\\Omega, P) = \\dfrac{|2(3) - 1 + 2(2) - 5|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\dfrac{4}{3}$.
2. Le rayon vaut $r = 3$. Comme $\\dfrac{4}{3} < 3$, on a $d(\\Omega, P) < r$. Par conséquent, l'intersection de $S$ et $P$ est un cercle.

*[Barème type BAC : distance = 1,5 pt — comparaison = 0,5 pt — conclusion = 1 pt — Total : 3 pts]*`,
        },
        {
          type: 'figure',
          id: 'fig-m7-3',
          src: '/images/t9/fig_M7_3.png',
          legende: `Tout se joue sur la comparaison de $d$ et $r$ : vide, un point, ou un cercle.`,
          alt: `Trois sphères avec un plan chacune : plan à l'écart, plan tangent, plan sécant donnant un cercle.`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 2 — Sphère tangente à un plan** *(BAC)*. Détermine l'équation cartésienne de la sphère $S$ de centre $A(1 ; 0 ; -1)$, sachant qu'elle est tangente au plan $Q : x + 2y - 2z + 1 = 0$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `« Tangente » : le rayon est égal à la distance du centre au plan.` },
            { name: `Étape 1`, contenu: `Le rayon vaut $r = d(A, Q) = \\dfrac{|1(1) + 2(0) - 2(-1) + 1|}{\\sqrt{1^2 + 2^2 + (-2)^2}} = \\dfrac{|1 + 0 + 2 + 1|}{\\sqrt{9}} = \\dfrac{4}{3}$.` },
            { name: `Étape 2`, contenu: `On écrit l'équation avec le centre $A(1 ; 0 ; -1)$ et $r = \\dfrac{4}{3}$ : $(x - 1)^2 + (y - 0)^2 + (z - (-1))^2 = \\left(\\dfrac{4}{3}\\right)^2$.` },
          ],
          reponse: `L'équation de $S$ est $(x - 1)^2 + y^2 + (z + 1)^2 = \\dfrac{16}{9}$.`,
          conseil: `Le mot « tangente » est le déclencheur : il transforme une question sans rayon apparent en simple calcul de distance.`,
          piege: `Attention au signe dans $(z - z_A)$ : avec $z_A = -1$, ça donne $(z + 1)$, pas $(z - 1)$.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `La sphère $S$ étant tangente au plan $Q$, son rayon est égal à la distance de son centre $A$ au plan :
$r = d(A, Q) = \\dfrac{|1 + 2(0) - 2(-1) + 1|}{\\sqrt{1^2 + 2^2 + (-2)^2}} = \\dfrac{4}{3}$.
L'équation de la sphère de centre $A(1 ; 0 ; -1)$ et de rayon $\\dfrac{4}{3}$ est : $(x - 1)^2 + y^2 + (z + 1)^2 = \\dfrac{16}{9}$.

*[Barème type BAC : reconnaissance « tangente » = 1 pt — rayon = 1,5 pt — équation = 1,5 pt — Total : 4 pts]*`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-a',
          pf: `Grand Frère, et si on me demande le rayon du cercle d'intersection, pas juste sa nature ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-b',
          gf: `Bonne ambition, Champion(ne) ! Là tu sors Pythagore : le rayon $\\rho$ du cercle vérifie $\\rho^2 = r^2 - d^2$, où $r$ est le rayon de la sphère et $d$ la distance au plan. Le centre de la sphère, le centre du cercle et un point du cercle forment un triangle rectangle. Élégant, non ?`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Valeur absolue obligatoire au numérateur. Réponses finales seulement.

- **Exercice 1.** Distance de $\\Omega(1 ; 2 ; 2)$ au plan $x + 2y + 2z - 3 = 0$. *(Réponse : $\\dfrac{|1+4+4-3|}{3} = 2$.)*
- **Exercice 2.** Équation de la sphère de centre $O(0 ; 0 ; 0)$ et rayon $5$. *(Réponse : $x^2 + y^2 + z^2 = 25$.)*
- **Exercice 3.** Sphère de centre $\\Omega$ avec $d(\\Omega, P) = 4$ et $r = 4$ : nature de l'intersection ? *(Réponse : un point, le plan est tangent.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m7',
          titre: `À retenir`,
          contenu: [
            `Distance point/plan : $d(\\Omega, P) = \\dfrac{|ax_0 + by_0 + cz_0 + d'|}{\\sqrt{a^2 + b^2 + c^2}}$ (valeur absolue obligatoire).`,
            `📘 Vocabulaire officiel : distance d'un point à un plan, sphère, plan tangent, section plane.`,
            `Sphère : $(x-a)^2 + (y-b)^2 + (z-c)^2 = r^2$.`,
            `Intersection sphère/plan : $d > r$ (vide), $d = r$ (tangent), $d < r$ (cercle).`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m7',
          titre: `Fil rouge`,
          contenu: `Tu as bouclé les 3 dimensions de l'espace : vecteurs, barycentres, produits, droites, plans, distances et sphères. Direction la Salle d'Entraînement pour assembler tout ça sur de vrais sujets BAC — puis le Tome 10, où la géométrie deviendra de l'algèbre pure avec les nombres complexes.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m7',
          titre: `Auto-évaluation — Module 7`,
          contenu: [
            `Je sais écrire la formule de la distance avec valeurs absolues et racine.`,
            `Je sais extraire le centre et le rayon d'une équation de sphère.`,
            `J'utilise le vocabulaire officiel (distance, sphère, plan tangent, section plane).`,
            `Je sais déduire l'intersection sphère/plan en comparant $d$ et $r$.`,
            `Je sais utiliser « tangente » pour trouver un rayon.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m7',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → La géométrie dans l'espace est acquise. Direction la Salle d'Entraînement !`,
            `🟡 **3 ou 4** → Relis la brique 📘 et la procédure d'intersection.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel, l'image du ballon au stade.`,
          ],
        },
      ],
    },
  ],
};
