import { Chapitre } from '../../types/course';

export const chapitreM4: Chapitre = {
  id: 't9-m4',
  titre: `Module 4 — Droites et Plans : Représentations`,
  duree: 24,
  niveau: 'MOYEN',
  xpGain: 25,
  objectifs: [
    `Écrire la représentation paramétrique d'une droite à partir d'un point et d'un vecteur directeur`,
    `Énoncer ces représentations avec le vocabulaire officiel attendu au BAC`,
    `Déterminer l'équation cartésienne d'un plan à partir d'un point et d'un vecteur normal`,
    `Lire un vecteur directeur ou un vecteur normal directement sur une équation`,
    `Vérifier qu'un point appartient à une droite ou à un plan`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, dans le plan une droite c'était $y = ax + b$, facile. Mais on a vu au Socle qu'en 3D, $ax+by+cz+d=0$ c'est un plan, pas une droite. Alors comment j'écris une droite dans l'espace ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Tu as parfaitement retenu le piège, Champion(ne) ! Dans l'espace, une droite a besoin d'un autre langage : on la décrit avec un point de départ et une direction, c'est la représentation paramétrique. Et pour le plan, on utilise le fil à plomb du maçon — son vecteur normal. Deux objets, deux écritures. On va les maîtriser toutes les deux.`,
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
          contenu: `Imagine que tu expliques un chemin à un ami au téléphone. Tu ne lui donnes jamais une équation : tu lui dis « pars du carrefour de l'Indénié, et roule tout droit dans cette direction-là ». Un **point de départ** plus une **direction** : avec ça, ton ami peut reconstituer toute la route, mètre par mètre. Plus il avance dans la direction, plus il s'éloigne du carrefour. C'est exactement ça, la représentation paramétrique d'une droite : un point fixe, un vecteur directeur, et un curseur $t$ qui fait avancer le long de la route.

Maintenant, comment décrire un mur, une surface plate ? Reviens au fil à plomb du maçon. Un mur est entièrement déterminé par **un point** où il passe et **la direction perpendiculaire** à sa surface — ce fil tendu à la verticale, le vecteur normal. Si tu connais un point du mur et l'orientation de son fil à plomb, le mur est figé dans l'espace : c'est l'équation cartésienne du plan.`,
        },
        {
          type: 'figure',
          id: 'fig-m4-1',
          src: '/images/t9/fig_M4_1.png',
          legende: `Une droite = un point $A$ + une direction $\\vec{u}$ + un curseur $t$.`,
          alt: `Une droite oblique d'un repère 3D, le point A, le vecteur directeur u et deux positions pour t=1 et t=2.`,
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
          contenu: `On traduit les deux descriptions en langage mathématique.

- Le carrefour de départ → le point $A$ — point connu de la droite
- La direction de la route → le vecteur directeur $\\vec{u}$ — guide la droite
- Le curseur qui avance → le paramètre $t$ — réel qui balaie la droite
- Le fil à plomb du mur → le vecteur normal $\\vec{n}$ — perpendiculaire au plan`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène concrète`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Le carrefour de départ`, `$A(x_A ; y_A ; z_A)$`, `Un point connu de la droite`],
            [`La direction de la route`, `$\\vec{u}(a ; b ; c)$`, `Le vecteur directeur`],
            [`Avancer sur la route`, `$t \\in \\mathbb{R}$`, `Le paramètre qui balaie la droite`],
            [`Le fil à plomb du mur`, `$\\vec{n}(a ; b ; c)$`, `Le vecteur normal au plan`],
            [`Le mur figé`, `$ax + by + cz + d = 0$`, `L'équation cartésienne du plan`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `On passe aux écritures rigoureuses.`,
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
          contenu: `Champion(ne), tu as l'image de la route et du mur. Ta copie doit employer les mots exacts.

**Définition formelle.** La **représentation paramétrique** de la droite passant par $A(x_A ; y_A ; z_A)$ et de vecteur directeur $\\vec{u}(a ; b ; c)$ est :
$$\\begin{cases} x = x_A + ta \\\\ y = y_A + tb \\\\ z = z_A + tc \\end{cases} \\quad (t \\in \\mathbb{R})$$

Tout plan de vecteur normal $\\vec{n}(a ; b ; c)$ admet une **équation cartésienne** de la forme $ax + by + cz + d = 0$.

**En langage courant.** La droite se décrit par un point et une direction ; le plan, par un point et sa perpendiculaire.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Vecteur directeur** — la direction d'une droite (lue sur les coefficients de $t$).
- **Représentation paramétrique** — le système en $t$ décrivant une droite.
- **Vecteur normal** — la perpendiculaire à un plan (lue sur $a$, $b$, $c$).
- **Équation cartésienne** — l'écriture $ax + by + cz + d = 0$ d'un plan.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le vecteur normal d'un plan se lit DIRECTEMENT sur les coefficients de $x$, $y$, $z$. Pour $2x - y + 3z - 1 = 0$, on a $\\vec{n}(2 ; -1 ; 3)$.`,
        },
        {
          type: 'figure',
          id: 'fig-m4-2',
          src: '/images/t9/fig_M4_2.png',
          legende: `Un point $A$ + un vecteur normal $\\vec{n}$ figent entièrement le plan.`,
          alt: `Un plan d'un repère 3D passant par A, avec le vecteur normal n dressé perpendiculairement.`,
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
          titre: `Règle d'Or — Représentation d'une droite, équation d'un plan`,
          contenu: `**Droite** passant par $A(x_A ; y_A ; z_A)$, de vecteur directeur $\\vec{u}(a ; b ; c)$ :
$$\\begin{cases} x = x_A + ta \\\\ y = y_A + tb \\\\ z = z_A + tc \\end{cases} \\quad (t \\in \\mathbb{R})$$

**Plan** de vecteur normal $\\vec{n}(a ; b ; c)$ passant par $A$ : son équation est $ax + by + cz + d = 0$, où $d$ se calcule en remplaçant $x$, $y$, $z$ par les coordonnées de $A$.`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Un point $M$ appartient à une droite (resp. un plan) si ses coordonnées vérifient la représentation (resp. l'équation). Pour la droite, cherche un même $t$ sur les trois lignes.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Ne confonds pas vecteur **directeur** (il suit la droite) et vecteur **normal** (il est perpendiculaire au plan). Les deux se lisent sur des coefficients, mais ne jouent pas le même rôle.`,
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
          contenu: `« Représentation paramétrique », « vecteur directeur » → droite. « Équation cartésienne », « vecteur normal », « plan » → plan. Repère le mot-clé et choisis la bonne écriture.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`La situation posée`, `Ton réflexe algébrique`],
          rows: [
            [`Écrire une droite passant par $A$, de direction $\\vec{u}$`, `Je pose le système $x=x_A+ta$, $y=y_A+tb$, $z=z_A+tc$.`],
            [`Écrire l'équation d'un plan de normal $\\vec{n}(a;b;c)$`, `J'écris $ax+by+cz+d=0$, puis je trouve $d$ avec un point.`],
            [`Vérifier qu'un point est sur la droite / le plan`, `Je remplace ses coordonnées et je teste l'égalité.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure (équation cartésienne d'un plan)`,
          contenu: `**Étape 1.** Identifie les coordonnées $(a ; b ; c)$ du vecteur normal $\\vec{n}$.

**Étape 2.** Écris l'amorce : $ax + by + cz + d = 0$.

**Étape 3.** Remplace $x$, $y$, $z$ par les coordonnées d'un point $A$ du plan.

**Étape 4.** Résous la petite équation pour trouver $d$, puis écris l'équation complète.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `Reprends les coordonnées de $A$ et substitue-les dans ton équation finale. Si tu ne retombes pas sur $0$, tu as une erreur sur $d$.`,
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
            [`🟢 BASE`, `Écrire une droite paramétrique`, `Point + vecteur directeur donnés`, `Type 1`],
            [`🟡 MOYEN`, `Tester l'appartenance d'un point`, `« le point $B$ appartient-il à $D$ ? »`, `Type 1`],
            [`🔴 BAC`, `Équation cartésienne d'un plan`, `Point + vecteur normal donnés`, `Type 2`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Droite paramétrique et appartenance** *(BASE / MOYEN)*. Soit la droite $D$ passant par $A(1 ; -1 ; 2)$ et de vecteur directeur $\\vec{u}(2 ; 1 ; -1)$. **1.** Donne une représentation paramétrique de $D$. **2.** Le point $B(5 ; 1 ; 0)$ appartient-il à $D$ ?`,
          etapes: [
            { name: `Diagnostic`, contenu: `Écriture paramétrique, puis test d'appartenance (un même $t$).` },
            { name: `Étape 1`, contenu: `Représentation paramétrique : $\\begin{cases} x = 1 + 2t \\\\ y = -1 + t \\\\ z = 2 - t \\end{cases}$ avec $t \\in \\mathbb{R}$.` },
            { name: `Étape 2`, contenu: `Pour $B$ : la première ligne donne $5 = 1 + 2t$, soit $t = 2$. On teste : $y = -1 + 2 = 1$ ✓ et $z = 2 - 2 = 0$ ✓.` },
          ],
          reponse: `Le même $t = 2$ vérifie les trois lignes : $B$ appartient à $D$.`,
          conseil: `Trouve $t$ avec une ligne, puis vérifie sur les deux autres. C'est plus rapide que de tout poser en bloc.`,
          piege: `Si un seul des trois tests échoue, le point n'appartient pas à la droite. Il faut les trois.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `1. Une représentation paramétrique de $D$ est : $x = 1 + 2t$ ; $y = -1 + t$ ; $z = 2 - t$, avec $t \\in \\mathbb{R}$.
2. $x_B = 5$ donne $t = 2$ ; alors $y = 1 = y_B$ et $z = 0 = z_B$. Le point $B$ appartient donc à la droite $D$.

*[Barème type BAC : représentation = 1,5 pt — test d'appartenance = 1 pt — Total : 2,5 pts]*`,
        },
        {
          type: 'figure',
          id: 'fig-m4-3',
          src: '/images/t9/fig_M4_3.png',
          legende: `$M \\in D$ si un même $t$ vérifie les trois équations.`,
          alt: `Une droite D d'un repère 3D, un point B dessus (t=2) et un point C à l'écart.`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 2 — Équation cartésienne d'un plan** *(BAC)*. Détermine l'équation cartésienne du plan $P$ passant par $A(2 ; -1 ; 4)$ et de vecteur normal $\\vec{n}(3 ; 1 ; -2)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Point + vecteur normal : on pose $ax + by + cz + d = 0$ et on calcule $d$.` },
            { name: `Étape 1`, contenu: `Le vecteur normal donne les coefficients : l'équation est de la forme $3x + y - 2z + d = 0$.` },
            { name: `Étape 2`, contenu: `Le point $A(2 ; -1 ; 4)$ appartient à $P$ : $3(2) + (-1) - 2(4) + d = 0 \\Longrightarrow 6 - 1 - 8 + d = 0 \\Longrightarrow -3 + d = 0$.` },
            { name: `Étape 3`, contenu: `Donc $d = 3$.` },
          ],
          reponse: `L'équation cartésienne de $P$ est $3x + y - 2z + 3 = 0$.`,
          conseil: `Vérifie ton résultat en resubstituant $A$ : $6 - 1 - 8 + 3 = 0$ ✓. Cinq secondes qui sécurisent un point.`,
          piege: `Le vecteur normal n'a que **trois** coordonnées : $\\vec{n}(a ; b ; c)$. Le $d$ n'est qu'une constante de décalage, il ne fait pas partie du vecteur.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Le plan $P$ admet $\\vec{n}(3 ; 1 ; -2)$ pour vecteur normal, son équation est de la forme $3x + y - 2z + d = 0$.
Comme $A(2 ; -1 ; 4) \\in P$ : $3(2) + (-1) - 2(4) + d = 0$, d'où $-3 + d = 0$, soit $d = 3$.
L'équation cartésienne de $P$ est : $3x + y - 2z + 3 = 0$.

*[Barème type BAC : forme avec $\\vec{n}$ = 1 pt — calcul de $d$ = 1,5 pt — conclusion = 0,5 pt — Total : 3 pts]*`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-a',
          pf: `Grand Frère, est-ce qu'une même droite peut avoir plusieurs représentations paramétriques ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-b',
          gf: `Oui, et c'est normal, Champion(ne) ! Tu peux choisir un autre point de la droite, ou un vecteur directeur deux fois plus grand. L'écriture change, mais la droite reste la même. Ne t'étonne pas si ton résultat ne ressemble pas trait pour trait à celui du corrigé.`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Repère bien directeur et normal. Réponses finales seulement.

- **Exercice 1.** Droite par $A(0 ; 2 ; -1)$, directeur $\\vec{u}(1 ; 0 ; 3)$. *(Réponse : $x=t$ ; $y=2$ ; $z=-1+3t$.)*
- **Exercice 2.** Vecteur normal du plan $4x - 2y + z - 7 = 0$. *(Réponse : $\\vec{n}(4 ; -2 ; 1)$.)*
- **Exercice 3.** Plan par $A(1 ; 0 ; 0)$, normal $\\vec{n}(1 ; 1 ; 1)$. *(Réponse : $x + y + z - 1 = 0$.)*`,
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
            `Une **droite** se décrit par un point + un vecteur directeur (représentation paramétrique en $t$).`,
            `📘 Vocabulaire officiel : vecteur directeur, représentation paramétrique, vecteur normal, équation cartésienne.`,
            `Un **plan** s'écrit $ax + by + cz + d = 0$, avec $\\vec{n}(a ; b ; c)$ normal et $d$ trouvé par un point.`,
            `Le vecteur normal se **lit directement** sur les coefficients de l'équation.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m4',
          titre: `Fil rouge`,
          contenu: `Tu sais maintenant écrire droites et plans. La question naturelle qui suit : quand deux droites se croisent-elles ? Quand une droite perce-t-elle un plan ? C'est tout le sujet du Module 5 : les positions relatives.`,
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
            `Je sais écrire la représentation paramétrique d'une droite.`,
            `Je sais tester si un point appartient à une droite (même $t$).`,
            `J'utilise le vocabulaire officiel (vecteur directeur, normal, équation cartésienne).`,
            `Je sais déterminer l'équation cartésienne d'un plan avec un point et un normal.`,
            `Je sais lire un vecteur normal directement sur une équation.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m4',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → En route pour le Module 5, on étudie les positions relatives.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et la procédure du plan.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel, l'image de la route et du mur.`,
          ],
        },
      ],
    },
  ],
};
