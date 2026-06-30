import { Chapitre } from '../../types/course';

export const chapitreM5: Chapitre = {
  id: 't9-m5',
  titre: `Module 5 — Positions Relatives`,
  duree: 24,
  niveau: 'MOYEN',
  xpGain: 25,
  objectifs: [
    `Déterminer la position relative de deux droites (parallèles, sécantes ou gauches)`,
    `Énoncer ces positions avec le vocabulaire officiel attendu au BAC`,
    `Déterminer l'intersection exacte d'une droite et d'un plan`,
    `Reconnaître quand une droite est incluse dans un plan ou strictement parallèle`,
    `Gérer un système en utilisant $t$ et $t'$ sans jamais les confondre`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, dans le plan, deux droites qui ne sont pas parallèles finissent toujours par se croiser. Mais tu m'as parlé du pont HKB où deux routes ne se croisent jamais sans être parallèles. Comment c'est possible ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `C'est LA révolution de l'espace, Champion(ne) ! En 3D, deux droites peuvent ne pas être parallèles ET ne jamais se rencontrer : elles passent l'une au-dessus de l'autre. On les appelle des droites gauches. Dans ce module, on apprend à diagnostiquer avec certitude la position de deux droites, et aussi celle d'une droite face à un plan. Plus aucune surprise.`,
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
          contenu: `Place-toi au pied du pont Henri Konan Bédié, à Abidjan. Lève les yeux : tout en haut, la route du pont file au-dessus de la lagune. Maintenant, baisse le regard : juste en dessous, le boulevard longe l'eau dans une autre direction.

Ces deux voies ne sont pas parallèles — elles partent franchement dans des sens différents. Et pourtant, elles ne se percuteront jamais, parce que l'une est perchée plusieurs mètres au-dessus de l'autre. Dans le plan plat de ta feuille, c'était impossible. Dans l'espace, ça arrive tout le temps : ce sont les **droites gauches**.

Du coup, en 3D, deux droites peuvent se trouver dans trois situations seulement : parallèles (même direction), sécantes (elles se croisent en un point unique), ou gauches (ni parallèles, ni sécantes). Tout le travail consiste à savoir, calcul à l'appui, dans laquelle de ces trois cases tu te trouves.`,
        },
        {
          type: 'figure',
          id: 'fig-m5-1',
          src: '/images/t9/fig_M5_1.png',
          legende: `Le pont HKB : deux routes qui ne se croisent jamais sans être parallèles.`,
          alt: `Une route surélevée et un boulevard en dessous, de directions différentes, sans point commun.`,
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
          contenu: `On traduit les configurations du pont en langage mathématique.

- Deux routes de même direction → vecteurs directeurs colinéaires — droites parallèles
- Deux routes qui se croisent → système avec une solution — droites sécantes
- Le pont au-dessus du boulevard → système impossible — droites gauches`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène du pont`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Routes de même direction`, `$\\vec{u} = k\\vec{v}$`, `Droites parallèles (ou confondues)`],
            [`Routes qui se rencontrent`, `Système : 1 solution`, `Droites sécantes (coplanaires)`],
            [`Route au-dessus de l'autre`, `Système : impossible`, `Droites gauches (non coplanaires)`],
            [`Une lance qui transperce un mur`, `1 valeur de $t$`, `Droite et plan sécants`],
            [`Une lance parallèle au mur`, `Égalité impossible`, `Droite strictement parallèle au plan`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `On formalise ces critères.`,
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
          contenu: `Champion(ne), tu as l'image du pont. Ta copie doit nommer chaque cas avec précision.

**Définition formelle.** Deux droites de l'espace sont **coplanaires** si elles sont dans un même plan : elles sont alors soit **parallèles**, soit **sécantes**. Sinon, elles sont **non coplanaires**, dites **gauches**.

**En langage courant.** Parallèles = même direction ; sécantes = un point commun ; gauches = elles s'évitent dans l'espace.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Droites parallèles** — vecteurs directeurs colinéaires.
- **Droites sécantes** — un unique point d'intersection.
- **Droites gauches** — non coplanaires, sans point commun.
- **Droite incluse dans un plan** — tous ses points vérifient l'équation du plan.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend une conclusion nette : *« Les droites ne sont pas parallèles et le système n'a pas de solution : elles sont gauches. »* Nomme toujours le cas final.`,
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
          titre: `Règle d'Or — Les positions relatives`,
          contenu: `**Deux droites** $D$ (directeur $\\vec{u}$) et $D'$ (directeur $\\vec{v}$) :
1. $\\vec{u}$ et $\\vec{v}$ colinéaires $\\Rightarrow$ **parallèles** (ou confondues).
2. Non colinéaires + système d'intersection à 1 solution $\\Rightarrow$ **sécantes**.
3. Non colinéaires + système impossible $\\Rightarrow$ **gauches**.

**Une droite $D$ et un plan $P$** : on remplace $x$, $y$, $z$ de $D$ dans l'équation de $P$.
- Une valeur de $t$ : **sécants** (un point).
- $0 = 0$ : la droite est **incluse** dans le plan.
- Égalité impossible (ex. $5 = 0$) : **strictement parallèles**.`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Toujours commencer par comparer les directions. Si les vecteurs directeurs sont colinéaires, inutile de résoudre un système : c'est déjà parallèle.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Pour deux droites, n'utilise JAMAIS la même lettre : $t$ pour $D$, $t'$ pour $D'$. Sinon ton système déraille à coup sûr.`,
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
          contenu: `« Position relative », « les droites sont-elles sécantes / gauches », « intersection de $D$ et $P$ » : c'est ce module. Premier réflexe : lire les vecteurs directeurs.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`La situation posée`, `La question à te poser`, `Ta conclusion rapide`],
          rows: [
            [`Deux droites $D$ et $D'$`, `Les directeurs sont-ils colinéaires ?`, `Oui : parallèles. Non : sécantes ou gauches.`],
            [`Deux droites non parallèles`, `Le système a-t-il une solution ?`, `Oui : sécantes. Non : gauches.`],
            [`Une droite $D$ et un plan $P$`, `En substituant, obtient-on un $t$ ?`, `1 solution : sécants. $0=0$ : $D$ incluse. Impossible : parallèles.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure (intersection de deux droites)`,
          contenu: `**Étape 1.** Écris les deux représentations paramétriques, avec $t$ pour $D$ et $t'$ pour $D'$.

**Étape 2.** Égalise les $x$, les $y$, les $z$ pour former un système de trois équations.

**Étape 3.** Résous avec les deux premières lignes.

**Étape 4.** Vérifie la solution dans la troisième ligne (le juge de paix), puis conclus.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `Quand tu trouves un point d'intersection, remplace ta valeur de $t$ dans $D$ et de $t'$ dans $D'$ : tu dois obtenir exactement le même point des deux côtés.`,
        },
        {
          type: 'figure',
          id: 'fig-m5-2',
          src: '/images/t9/fig_M5_2.png',
          legende: `Trois cas, trois diagnostics : direction d'abord, système ensuite.`,
          alt: `Trois schémas 3D : droites parallèles, droites sécantes, droites gauches.`,
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
            [`🟡 MOYEN`, `Position de deux droites`, `« $D$ et $D'$ sont-elles sécantes ? »`, `Type 1`],
            [`🔴 BAC`, `Intersection droite / plan`, `« déterminer l'intersection de $D$ et $P$ »`, `Type 2`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 1 — Position de deux droites** *(MOYEN)*. Soit $D_1 : x = 1 + t \\,;\\, y = 2 - t \\,;\\, z = t$ et $D_2 : x = 2t' \\,;\\, y = 1 + t' \\,;\\, z = 3 - t'$. Étudie leur position relative.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Position de deux droites : on compare les directeurs, puis on résout le système.` },
            { name: `Étape 1`, contenu: `Directeurs : $\\vec{u}(1 ; -1 ; 1)$ pour $D_1$, $\\vec{v}(2 ; 1 ; -1)$ pour $D_2$. Comme $\\dfrac{2}{1} \\neq \\dfrac{1}{-1}$, ils ne sont pas colinéaires : les droites ne sont pas parallèles.` },
            { name: `Étape 2`, contenu: `Système : $\\begin{cases} 1 + t = 2t' \\\\ 2 - t = 1 + t' \\\\ t = 3 - t' \\end{cases}$ En additionnant les deux premières lignes : $3 = 1 + 3t'$, donc $t' = \\dfrac{2}{3}$, puis $t = \\dfrac{1}{3}$.` },
            { name: `Étape 3`, contenu: `Test dans la troisième ligne : $\\dfrac{1}{3} \\stackrel{?}{=} 3 - \\dfrac{2}{3} = \\dfrac{7}{3}$. Faux.` },
          ],
          reponse: `Non parallèles et système impossible : les droites $D_1$ et $D_2$ sont **gauches**.`,
          conseil: `Si la troisième ligne donne une absurdité, ne panique pas : tu viens de prouver qu'il n'y a pas d'intersection. C'est un résultat à part entière.`,
          piege: `Le piège du Lycée Classique : utiliser le même $t$ pour les deux droites. Toujours $t$ et $t'$.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Les directeurs $\\vec{u}(1 ; -1 ; 1)$ et $\\vec{v}(2 ; 1 ; -1)$ ne sont pas colinéaires, donc $D_1$ et $D_2$ ne sont pas parallèles. Le système d'intersection conduit à $t' = \\dfrac{2}{3}$ et $t = \\dfrac{1}{3}$, qui ne vérifient pas la troisième équation. Le système n'a pas de solution : les droites sont non coplanaires (gauches).

*[Barème type BAC : directeurs = 1 pt — système = 1 pt — test et conclusion = 1 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 2 — Intersection droite / plan** *(BAC)*. Soit la droite $D : x = 1 + 2k \\,;\\, y = -1 + k \\,;\\, z = 2 - k$ et le plan $P : x - y + 2z - 6 = 0$. Détermine leur intersection.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Droite et plan : on substitue la droite dans l'équation du plan.` },
            { name: `Étape 1`, contenu: `On remplace $x$, $y$, $z$ par les expressions de $D$ : $(1 + 2k) - (-1 + k) + 2(2 - k) - 6 = 0$.` },
            { name: `Étape 2`, contenu: `On développe avec soin sur les signes : $1 + 2k + 1 - k + 4 - 2k - 6 = 0 \\Longrightarrow -k = 0 \\Longrightarrow k = 0$.` },
            { name: `Étape 3`, contenu: `Une unique valeur $k = 0$ : la droite perce le plan. On reporte dans $D$ : $x = 1$, $y = -1$, $z = 2$.` },
          ],
          reponse: `$D$ et $P$ sont sécants au point $A(1 ; -1 ; 2)$.`,
          conseil: `Si tu trouves $0 = 0$, la droite est incluse dans le plan ; si tu trouves un nombre $\\neq 0$ (genre $5 = 0$), elle est strictement parallèle. Apprends à distinguer ces trois fins.`,
          piege: `L'erreur de signe au développement, surtout sur le $-(-1+k)$. Pose chaque terme proprement.`,
        },
        {
          type: 'figure',
          id: 'fig-m5-3',
          src: '/images/t9/fig_M5_3.png',
          legende: `Substituer la droite dans le plan donne un unique $t$ : les objets sont sécants.`,
          alt: `Un plan P et une droite D qui le traverse en un point d'intersection.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `En substituant $D$ dans $P$ : $(1+2k) - (-1+k) + 2(2-k) - 6 = 0$, soit $-k = 0$, d'où $k = 0$.
L'équation admet une unique solution : $D$ et $P$ sont sécants. En reportant $k = 0$ dans $D$, on obtient le point d'intersection $A(1 ; -1 ; 2)$.

*[Barème type BAC : substitution = 1 pt — résolution = 1 pt — point = 1 pt — Total : 3 pts]*`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-a',
          pf: `Donc elles ne se croisent pas, mais ne sont pas parallèles... elles volent chacune de leur côté ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-b',
          gf: `Exactement, Champion(ne) ! C'est le fameux pont HKB. Elles sont gauches, point final. C'est une vraie réponse de BAC, pas un échec de calcul.`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Directions d'abord, système ensuite. Réponses finales seulement.

- **Exercice 1.** $\\vec{u}(2 ; 4 ; -2)$ et $\\vec{v}(1 ; 2 ; -1)$ : les droites correspondantes sont-elles parallèles ? *(Réponse : oui, $\\vec{u} = 2\\vec{v}$.)*
- **Exercice 2.** Droite $D : x = t \\,;\\, y = t \\,;\\, z = t$ et plan $z = 0$ : intersection ? *(Réponse : $t = 0$, point $O(0 ; 0 ; 0)$.)*
- **Exercice 3.** Une droite de directeur $\\vec{u}(1 ; 1 ; 0)$ et un plan de normal $\\vec{n}(0 ; 0 ; 1)$ : que dire ? *(Réponse : $\\vec{u}\\cdot\\vec{n} = 0$, la droite est parallèle au plan ou incluse.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m5',
          titre: `À retenir`,
          contenu: [
            `Deux droites de l'espace : **parallèles**, **sécantes** ou **gauches**.`,
            `📘 Vocabulaire officiel : coplanaires, parallèles, sécantes, gauches, droite incluse.`,
            `Méthode : **directeurs d'abord**, puis système avec $t$ et $t'$, vérification sur la 3ᵉ ligne.`,
            `Droite/plan : substitution → 1 solution (sécants), $0=0$ (incluse), impossible (parallèles).`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m5',
          titre: `Fil rouge`,
          contenu: `Tu sais situer droites et plans les uns par rapport aux autres. Reste un cas particulier capital : les angles droits. Quand une droite est-elle perpendiculaire à un plan ? C'est le cœur du Module 6 : l'orthogonalité et le vecteur normal.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m5',
          titre: `Auto-évaluation — Module 5`,
          contenu: [
            `Je repère le vecteur directeur directement dans une représentation paramétrique.`,
            `Je n'oublie jamais d'utiliser $t$ et $t'$ pour comparer deux droites.`,
            `J'utilise le vocabulaire officiel (parallèles, sécantes, gauches, incluse).`,
            `Je sais déterminer l'intersection d'une droite et d'un plan par substitution.`,
            `Je sais distinguer les fins « 1 solution / $0=0$ / impossible ».`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m5',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → En route pour le Module 6, on attaque l'orthogonalité.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et l'arbre de décision.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel, l'image du pont HKB.`,
          ],
        },
      ],
    },
  ],
};
