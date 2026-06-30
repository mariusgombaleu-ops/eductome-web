import { Chapitre } from '../../types/course';

export const chapitreM6: Chapitre = {
  id: 't9-m6',
  titre: `Module 6 — Orthogonalité et Vecteur Normal`,
  duree: 24,
  niveau: 'MOYEN',
  xpGain: 25,
  objectifs: [
    `Prouver qu'une droite est perpendiculaire à un plan`,
    `Énoncer l'orthogonalité droite/plan avec le vocabulaire officiel attendu au BAC`,
    `Prouver que deux plans sont perpendiculaires`,
    `Déterminer le projeté orthogonal d'un point sur un plan`,
    `Trouver un vecteur normal à un plan à partir de deux vecteurs`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, pour montrer qu'une droite est perpendiculaire à un plan, j'ai montré qu'elle est perpendiculaire à une arête du plan. Ça suffit, non ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Aïe, attention Champion(ne) ! C'est le point de vigilance majeur de ce module. Être perpendiculaire à une seule droite du plan, ça ne suffit pas. Imagine ton stylo posé sur la table : il peut faire un angle droit avec le bord de la table tout en étant penché ! Heureusement, on a un raccourci puissant : le vecteur normal. Avec lui, une seule comparaison règle l'affaire.`,
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
          contenu: `Reviens sur le chantier du maçon de ton quartier. Quand il monte un mur, il vérifie tout le temps une chose : que le mur est bien d'aplomb, parfaitement vertical par rapport au sol. Pour ça, il sort son **fil à plomb** : une ficelle avec un poids au bout, qui pend tout droit. Ce fil tendu indique LA direction perpendiculaire au sol.

Ce fil à plomb, c'est exactement le **vecteur normal** d'un plan : une seule direction qui dicte à elle seule l'inclinaison de toute la surface. Le maçon n'a pas besoin de vérifier mille points du sol : il lui suffit de comparer son mur à ce fil unique.

Et c'est là que tout devient simple. Pour savoir si un poteau (une droite) est parfaitement perpendiculaire au sol (un plan), tu n'as pas à le comparer à toutes les directions du sol. Tu le compares juste au fil à plomb. Si le poteau est exactement dans l'axe du fil — s'ils sont colinéaires — alors le poteau est perpendiculaire au plan. Une seule vérification, et c'est réglé.`,
        },
        {
          type: 'figure',
          id: 'fig-m6-1',
          src: '/images/t9/fig_M6_1.png',
          legende: `Le vecteur normal résume à lui seul l'orientation du plan.`,
          alt: `Un mur vertical sur un sol horizontal, avec un fil à plomb et le vecteur normal n.`,
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
          contenu: `On traduit le chantier du maçon.

- Le sol → le plan $P$ — la surface de référence
- Le fil à plomb → le vecteur normal $\\vec{n}$ — perpendiculaire au plan
- Le poteau vertical → la droite $D$ de directeur $\\vec{u}$ — la droite testée
- « le poteau est d'aplomb » → $\\vec{u}$ colinéaire à $\\vec{n}$ — droite perpendiculaire au plan`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène du chantier`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Le sol`, `Plan $P$`, `La surface de référence`],
            [`Le fil à plomb`, `$\\vec{n}$`, `Le vecteur normal au plan`],
            [`Le poteau d'aplomb`, `$\\vec{u} = k\\vec{n}$`, `Droite perpendiculaire au plan`],
            [`Deux murs en angle droit`, `$\\vec{n_1}\\cdot\\vec{n_2} = 0$`, `Plans perpendiculaires`],
            [`L'ombre d'un point sur le sol`, `Projeté orthogonal $H$`, `Pied de la perpendiculaire`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `On écrit les critères rigoureux.`,
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
          contenu: `Champion(ne), tu as l'image du fil à plomb. Ta copie doit le formuler exactement.

**Définition formelle.** Une droite $D$ de vecteur directeur $\\vec{u}$ est **perpendiculaire** à un plan $P$ de vecteur normal $\\vec{n}$ si et seulement si $\\vec{u}$ et $\\vec{n}$ sont **colinéaires**. Deux plans sont **perpendiculaires** si et seulement si leurs vecteurs normaux sont **orthogonaux**.

**En langage courant.** Une droite est d'aplomb sur un plan quand elle suit son fil à plomb ; deux murs sont en angle droit quand leurs fils à plomb sont orthogonaux.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Droite perpendiculaire à un plan** — directeur colinéaire au vecteur normal.
- **Plans perpendiculaires** — vecteurs normaux orthogonaux.
- **Projeté orthogonal** — pied $H$ de la perpendiculaire abaissée d'un point sur le plan.
- **Vecteur normal** — direction perpendiculaire à toutes celles du plan.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend : *« Le vecteur directeur $\\vec{u}$ de $D$ est colinéaire au vecteur normal $\\vec{n}$ de $P$, donc $D$ est perpendiculaire à $P$. »*`,
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
          titre: `Règle d'Or — Perpendicularités et projeté`,
          contenu: `**Droite $\\perp$ plan.** $D$ (directeur $\\vec{u}$) est perpendiculaire au plan $P$ (normal $\\vec{n}$) $\\iff$ $\\vec{u}$ et $\\vec{n}$ sont colinéaires ($\\vec{u} = k\\vec{n}$).

**Plans perpendiculaires.** $P_1$ (normal $\\vec{n_1}$) et $P_2$ (normal $\\vec{n_2}$) sont perpendiculaires $\\iff$ $\\vec{n_1}\\cdot\\vec{n_2} = 0$.

**Projeté orthogonal de $M$ sur $P$.** C'est le point $H$ intersection de $P$ et de la droite passant par $M$ et dirigée par $\\vec{n}$.`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Pour trouver un vecteur normal à un plan défini par deux vecteurs $\\vec{u}$ et $\\vec{v}$, cherche $\\vec{n}$ tel que $\\vec{n}\\cdot\\vec{u} = 0$ et $\\vec{n}\\cdot\\vec{v} = 0$ (ou, en bonus, $\\vec{n} = \\vec{u}\\wedge\\vec{v}$).`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Perpendiculaire à UNE droite du plan ne suffit pas. Il faut la colinéarité au vecteur normal (qui équivaut à l'orthogonalité à deux droites sécantes du plan).`,
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
          contenu: `« Perpendiculaire au plan », « projeté orthogonal », « plans perpendiculaires », « pied de la perpendiculaire » : c'est ce module. Premier réflexe : sortir le vecteur normal.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`La situation posée`, `Ton réflexe algébrique`],
          rows: [
            [`Montrer que $D \\perp P$`, `Je vérifie que le directeur $\\vec{u}$ est colinéaire au normal $\\vec{n}$.`],
            [`Montrer que $P_1 \\perp P_2$`, `Je calcule $\\vec{n_1}\\cdot\\vec{n_2}$ ; si c'est $0$, ils sont perpendiculaires.`],
            [`Trouver le projeté $H$ de $M$ sur $P$`, `Je trace la droite par $M$ dirigée par $\\vec{n}$, puis je l'intersecte avec $P$.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure (projeté orthogonal)`,
          contenu: `**Étape 1.** Lis le vecteur normal $\\vec{n}$ sur l'équation du plan $P$.

**Étape 2.** Écris la droite passant par $M$ et dirigée par $\\vec{n}$ (représentation paramétrique).

**Étape 3.** Substitue cette droite dans l'équation de $P$ et résous pour trouver $t$.

**Étape 4.** Reporte $t$ dans la droite : tu obtiens $H$, le projeté orthogonal.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `Vérifie que ton point $H$ appartient bien au plan : substitue ses coordonnées dans l'équation, tu dois obtenir $0$.`,
        },
        {
          type: 'figure',
          id: 'fig-m6-2',
          src: '/images/t9/fig_M6_2.png',
          legende: `$D \\perp P$ exactement quand directeur et normal sont colinéaires.`,
          alt: `Un plan P et une droite D qui le perce perpendiculairement, directeur u et normal n colinéaires.`,
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
            [`🟡 MOYEN`, `Droite perpendiculaire à un plan`, `« montrer que $D \\perp P$ »`, `Type 1`],
            [`🔴 BAC`, `Projeté orthogonal d'un point`, `« déterminer le projeté de $M$ sur $P$ »`, `Type 2`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 1 — Droite perpendiculaire à un plan** *(MOYEN)*. Soit le plan $P : x - 2y + 5z - 7 = 0$, et les points $A(1 ; 1 ; 0)$ et $B(3 ; -3 ; 10)$. Montre que la droite $(AB)$ est perpendiculaire au plan $P$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Perpendicularité droite/plan : on compare le directeur $\\vec{AB}$ au normal $\\vec{n}$.` },
            { name: `Étape 1`, contenu: `Vecteur normal lu sur l'équation : $\\vec{n}(1 ; -2 ; 5)$.` },
            { name: `Étape 2`, contenu: `$\\vec{AB}(3-1 \\,;\\, -3-1 \\,;\\, 10-0)$, soit $\\vec{AB}(2 ; -4 ; 10)$.` },
            { name: `Étape 3`, contenu: `On compare : $2 = 2\\times 1$, $-4 = 2\\times(-2)$, $10 = 2\\times 5$. Donc $\\vec{AB} = 2\\vec{n}$ : les vecteurs sont colinéaires.` },
          ],
          reponse: `Le directeur de $(AB)$ est colinéaire au vecteur normal de $P$, donc $(AB)$ est perpendiculaire à $P$.`,
          conseil: `Pour tester la colinéarité, divise chaque coordonnée de $\\vec{AB}$ par celle de $\\vec{n}$ : même quotient ($2$) partout, c'est gagné.`,
          piege: `Ne te contente pas de vérifier $\\vec{AB}\\cdot\\vec{n} = $ quelque chose. Ici, on veut la **colinéarité**, pas l'orthogonalité.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Le plan $P$ a pour vecteur normal $\\vec{n}(1 ; -2 ; 5)$. Le directeur de $(AB)$ est $\\vec{AB}(2 ; -4 ; 10)$.
On constate que $\\vec{AB} = 2\\vec{n}$ : ces vecteurs sont colinéaires. La direction de $(AB)$ étant colinéaire au vecteur normal de $P$, la droite $(AB)$ est perpendiculaire au plan $P$.

*[Barème type BAC : normal = 0,5 pt — $\\vec{AB}$ = 0,5 pt — colinéarité et conclusion = 1,5 pt — Total : 2,5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 2 — Projeté orthogonal** *(BAC)*. Soit le plan $P : 2x - y + 2z - 3 = 0$ et le point $M(1 ; 2 ; 3)$. Détermine les coordonnées du projeté orthogonal $H$ de $M$ sur $P$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Projeté orthogonal : droite par $M$ dirigée par $\\vec{n}$, puis intersection avec $P$.` },
            { name: `Étape 1`, contenu: `Vecteur normal : $\\vec{n}(2 ; -1 ; 2)$. Droite par $M$ dirigée par $\\vec{n}$ : $x = 1 + 2t$ ; $y = 2 - t$ ; $z = 3 + 2t$.` },
            { name: `Étape 2`, contenu: `Substitution dans $P$ : $2(1 + 2t) - (2 - t) + 2(3 + 2t) - 3 = 0$, soit $9t + 3 = 0$, donc $t = -\\dfrac{1}{3}$.` },
            { name: `Étape 3`, contenu: `On reporte $t = -\\dfrac{1}{3}$ : $x = \\dfrac{1}{3}$ ; $y = \\dfrac{7}{3}$ ; $z = \\dfrac{7}{3}$.` },
          ],
          reponse: `Le projeté orthogonal est $H\\left(\\dfrac{1}{3} ; \\dfrac{7}{3} ; \\dfrac{7}{3}\\right)$.`,
          conseil: `Le projeté orthogonal sert aussi à calculer la distance de $M$ au plan : c'est la longueur $MH$ (à rapprocher du Module 7).`,
          piege: `La droite doit être dirigée par le vecteur **normal** du plan, pas par un vecteur quelconque. C'est ce qui garantit l'angle droit.`,
        },
        {
          type: 'figure',
          id: 'fig-m6-3',
          src: '/images/t9/fig_M6_3.png',
          legende: `$H$ est l'ombre de $M$ sur le plan, au bout de la perpendiculaire.`,
          alt: `Un plan P, un point M au-dessus, la perpendiculaire le long de n et le pied H sur le plan.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Le plan $P$ a pour normal $\\vec{n}(2 ; -1 ; 2)$. La droite passant par $M$ dirigée par $\\vec{n}$ est $x = 1+2t$, $y = 2-t$, $z = 3+2t$.
En substituant dans $P$ : $9t + 3 = 0$, soit $t = -\\dfrac{1}{3}$.
On obtient le projeté orthogonal $H\\left(\\dfrac{1}{3} ; \\dfrac{7}{3} ; \\dfrac{7}{3}\\right)$.

*[Barème type BAC : droite = 1 pt — substitution = 1 pt — résolution = 1 pt — point $H$ = 1 pt — Total : 4 pts]*`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-a',
          pf: `Grand Frère, comment je trouve un vecteur normal si on me donne juste deux vecteurs du plan ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-b',
          gf: `Tu cherches un $\\vec{n}$ orthogonal aux deux à la fois, Champion(ne) : tu poses $\\vec{n}\\cdot\\vec{u} = 0$ et $\\vec{n}\\cdot\\vec{v} = 0$, ça te donne un système. Et si tu veux aller vite au brouillon, le produit vectoriel $\\vec{u}\\wedge\\vec{v}$ te le donne d'un coup, comme on l'a vu en bonus au Module 3 !`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Vecteur normal toujours en première ligne. Réponses finales seulement.

- **Exercice 1.** $P_1$ de normal $\\vec{n_1}(1 ; 2 ; -1)$ et $P_2$ de normal $\\vec{n_2}(3 ; -1 ; 1)$ : perpendiculaires ? *(Réponse : oui, $3 - 2 - 1 = 0$.)*
- **Exercice 2.** Droite de directeur $\\vec{u}(2 ; 4 ; 6)$ et plan de normal $\\vec{n}(1 ; 2 ; 3)$ : $D \\perp P$ ? *(Réponse : oui, $\\vec{u} = 2\\vec{n}$.)*
- **Exercice 3.** Projeté de $M(0 ; 0 ; 5)$ sur le plan $z = 0$. *(Réponse : $H(0 ; 0 ; 0)$.)*`,
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
            `$D \\perp P$ $\\iff$ directeur $\\vec{u}$ **colinéaire** au normal $\\vec{n}$.`,
            `📘 Vocabulaire officiel : perpendiculaire à un plan, plans perpendiculaires, projeté orthogonal, vecteur normal.`,
            `$P_1 \\perp P_2$ $\\iff$ $\\vec{n_1}\\cdot\\vec{n_2} = 0$.`,
            `Le **projeté orthogonal** : droite par $M$ dirigée par $\\vec{n}$, intersectée avec $P$.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m6',
          titre: `Fil rouge`,
          contenu: `Tu maîtrises tous les angles droits de l'espace. Il te reste à mesurer les écarts : à quelle distance un point est-il d'un plan ? Et comment une sphère rencontre-t-elle un plan ? C'est le grand final, le Module 7 : distances et sphères.`,
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
            `Je sais prouver qu'une droite est perpendiculaire à un plan (colinéarité directeur/normal).`,
            `Je sais prouver que deux plans sont perpendiculaires (normaux orthogonaux).`,
            `J'utilise le vocabulaire officiel (perpendiculaire à un plan, projeté orthogonal).`,
            `Je sais déterminer le projeté orthogonal d'un point sur un plan.`,
            `Je sais trouver un vecteur normal à partir de deux vecteurs du plan.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m6',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Direction le grand final, le Module 7.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et la procédure du projeté.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel, l'image du fil à plomb.`,
          ],
        },
      ],
    },
  ],
};
