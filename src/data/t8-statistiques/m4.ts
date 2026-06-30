import { Chapitre } from '../../types/course';

export const chapitreM4: Chapitre = {
  id: 't8-m4',
  titre: `Module 4 — Les Droites de Mayer`,
  duree: 22,
  niveau: 'MOYEN',
  xpGain: 25,
  objectifs: [
    `Partager un nuage en deux groupes ordonnés de même effectif`,
    `Calculer les points moyens partiels $G_1$ et $G_2$`,
    `Énoncer la définition de la droite de Mayer avec le vocabulaire officiel`,
    `Déterminer l'équation de la droite de Mayer passant par $G_1$ et $G_2$`,
    `Vérifier qu'elle passe bien par le point moyen $G$ du nuage entier`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, au Module 3 j'ai la droite des moindres carrés. Pourquoi le sujet me parle parfois d'une « droite de Mayer » ? C'est encore une autre droite ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Oui Champion(ne), c'est une seconde méthode d'ajustement, plus simple et plus visuelle. Au lieu de longues formules, on coupe le nuage en deux groupes, on trouve le « point moyen » de chaque groupe, et on relie ces deux points. Pas de covariance à calculer ! C'est rapide, et le correcteur l'apprécie quand l'énoncé l'impose. On va voir que cette droite passe, elle aussi, par notre point moyen $G$.`,
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
          contenu: `Imagine ta classe rangée par ordre de taille, du plus petit au plus grand, pour la photo de fin d'année. Tu veux résumer « comment la taille augmente dans la file » sans faire de calcul compliqué.

Tu fais simple : tu coupes la file en deux moitiés. La première moitié, ce sont les plus petits ; la seconde, les plus grands. Pour chaque moitié, tu imagines l'élève moyen : la taille moyenne du premier groupe, la taille moyenne du second groupe. Tu obtiens deux « élèves repères », un pour chaque moitié.

Maintenant, tu relies ces deux élèves repères par une règle. La droite que tu obtiens donne la tendance générale de la file. C'est exactement la droite de Mayer : on partage en deux groupes, on calcule un point moyen par groupe ($G_1$ et $G_2$), et on trace la droite qui passe par ces deux points. Et le plus beau : cette droite passe toujours par le centre de toute la classe, le point moyen $G$.`,
        },
        {
          type: 'figure',
          id: 'fig-m4-1',
          src: '/images/t8/fig_M4_1.png',
          legende: `On coupe le nuage en deux, un point moyen par moitié.`,
          alt: `Le nuage partagé en deux groupes avec G1 et G2.`,
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
          contenu: `On traduit le partage de la file en symboles.

- Couper la file en deux moitiés → deux groupes ordonnés de même effectif
- L'élève moyen du premier groupe → $G_1(\\bar{x}_1 ; \\bar{y}_1)$
- L'élève moyen du second groupe → $G_2(\\bar{x}_2 ; \\bar{y}_2)$
- Relier les deux à la règle → la droite de Mayer $(G_1 G_2)$`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène de la file`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`La file rangée par taille`, `données ordonnées selon $x$`, `On trie avant de couper`],
            [`La première moitié`, `groupe 1`, `Les plus petites valeurs de $x$`],
            [`L'élève moyen du groupe 1`, `$G_1(\\bar{x}_1 ; \\bar{y}_1)$`, `Point moyen partiel`],
            [`L'élève moyen du groupe 2`, `$G_2(\\bar{x}_2 ; \\bar{y}_2)$`, `Point moyen partiel`],
            [`La règle qui relie les deux`, `droite $(G_1 G_2)$`, `La droite de Mayer`],
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
          contenu: `Champion(ne), tu as l'image de la file coupée en deux. Voici les mots exacts.

**Définition formelle.** On ordonne la série selon les valeurs croissantes de $x$, puis on la partage en deux groupes de même effectif. On note $G_1(\\bar{x}_1 ; \\bar{y}_1)$ et $G_2(\\bar{x}_2 ; \\bar{y}_2)$ les points moyens de chaque groupe. La **droite de Mayer** est la droite $(G_1 G_2)$. Son coefficient directeur est :
$$a = \\dfrac{\\bar{y}_2 - \\bar{y}_1}{\\bar{x}_2 - \\bar{x}_1} \\qquad \\text{puis} \\qquad b = \\bar{y}_1 - a\\bar{x}_1$$

**En langage courant.** On relie le point moyen des « petits » au point moyen des « grands ».`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Droite de Mayer** — droite d'ajustement passant par $G_1$ et $G_2$.
- **Points moyens partiels** $G_1$, $G_2$ — points moyens de chaque sous-groupe.
- **Groupes de même effectif** — on partage en deux parts égales (après tri selon $x$).`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend *« La droite de Mayer passe par les points moyens $G_1$ et $G_2$, et par le point moyen $G$ du nuage. »*. Pense à le justifier.`,
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
          titre: `Règle d'Or — La droite de Mayer`,
          contenu: `Après tri selon $x$ et partage en deux groupes de même effectif, la droite de Mayer $(G_1 G_2)$ a pour coefficient directeur :
$$a = \\dfrac{\\bar{y}_2 - \\bar{y}_1}{\\bar{x}_2 - \\bar{x}_1}$$

et passe par $G_1$, donc $b = \\bar{y}_1 - a\\bar{x}_1$. **Propriété :** la droite de Mayer passe toujours par le point moyen $G$ du nuage entier.`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Vérifie ta droite en y injectant $G$ : si $\\bar{y} = a\\bar{x} + b$, c'est gagné.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `N'oublie pas de **trier** les données selon $x$ avant de couper. Couper un tableau non trié donne une droite fausse.`,
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
          contenu: `Le sujet emploie les mots « droite de Mayer », « points moyens $G_1$ et $G_2$ », ou « partage en deux groupes » : tu es ici. Aucune covariance n'est nécessaire.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Si l'énoncé demande...`, `Alors l'action est...`],
          rows: [
            [`De déterminer la droite de Mayer`, `Trier selon $x$, partager, calculer $G_1$ et $G_2$, puis la droite $(G_1 G_2)$.`],
            [`De vérifier le passage par $G$`, `Calculer $\\bar{x}, \\bar{y}$ et tester $\\bar{y} = a\\bar{x} + b$.`],
            [`De faire une prévision`, `Remplacer $x$ dans l'équation de la droite de Mayer.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure`,
          contenu: `**Étape 1.** Ordonne les couples selon les $x$ croissants, puis coupe en deux groupes de même effectif.

**Étape 2.** Calcule $G_1(\\bar{x}_1 ; \\bar{y}_1)$ (moyennes du groupe 1) et $G_2(\\bar{x}_2 ; \\bar{y}_2)$ (groupe 2).

**Étape 3.** Calcule $a = \\dfrac{\\bar{y}_2 - \\bar{y}_1}{\\bar{x}_2 - \\bar{x}_1}$, puis $b = \\bar{y}_1 - a\\bar{x}_1$.

**Étape 4.** Écris l'équation $y = ax + b$.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `Calcule le point moyen global $G$. Remplace $\\bar{x}$ dans ton équation : tu dois retrouver $\\bar{y}$. Sinon, revois tes deux points moyens partiels.`,
        },
        {
          type: 'figure',
          id: 'fig-m4-2',
          src: '/images/t8/fig_M4_2.png',
          legende: `La droite $(G_1 G_2)$ passe par le centre $G$ du nuage entier.`,
          alt: `La droite de Mayer reliant G1 et G2 et passant par G.`,
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
            [`🟡 MOYEN`, `Construction complète de Mayer`, `On donne un tableau, on demande la droite de Mayer`, `Type 1`],
            [`🔴 BAC`, `Mayer + vérification par $G$`, `On demande la droite et le passage par $G$`, `Type 2`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 1 — Construire la droite de Mayer.** Soit la série double suivante (déjà ordonnée selon $x$) : $x_i : 1 ; 2 ; 3 ; 4 ; 5 ; 6$ et $y_i : 4 ; 5 ; 9 ; 10 ; 11 ; 15$. Détermine une équation de la droite de Mayer.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Données ordonnées : on coupe en deux groupes de $3$, on calcule $G_1$ et $G_2$.` },
            { name: `Étape 1 — Groupe 1`, contenu: `($x = 1, 2, 3$) : $\\bar{x}_1 = \\dfrac{1+2+3}{3} = 2$ ; $\\bar{y}_1 = \\dfrac{4+5+9}{3} = 6$. Donc $G_1(2 ; 6)$.` },
            { name: `Étape 2 — Groupe 2`, contenu: `($x = 4, 5, 6$) : $\\bar{x}_2 = \\dfrac{4+5+6}{3} = 5$ ; $\\bar{y}_2 = \\dfrac{10+11+15}{3} = 12$. Donc $G_2(5 ; 12)$.` },
            { name: `Étape 3 — La droite`, contenu: `$a = \\dfrac{12 - 6}{5 - 2} = \\dfrac{6}{3} = 2$ ; $b = \\bar{y}_1 - a\\bar{x}_1 = 6 - 2 \\times 2 = 2$. Donc $y = 2x + 2$.` },
          ],
          reponse: `La droite de Mayer a pour équation $y = 2x + 2$.`,
          conseil: `Le partage est ici naturel ($6$ valeurs → $3$ et $3$). Si l'effectif est impair, suis la consigne du sujet pour répartir.`,
          piege: `Ne mélange pas les $x$ et les $y$ dans le calcul de la pente : c'est $\\dfrac{\\Delta \\bar{y}}{\\Delta \\bar{x}}$.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `On partage la série ordonnée en deux groupes de même effectif.
$G_1(\\bar{x}_1 ; \\bar{y}_1) = (2 ; 6)$ et $G_2(\\bar{x}_2 ; \\bar{y}_2) = (5 ; 12)$.
$a = \\dfrac{\\bar{y}_2 - \\bar{y}_1}{\\bar{x}_2 - \\bar{x}_1} = \\dfrac{6}{3} = 2$ ; $b = \\bar{y}_1 - a\\bar{x}_1 = 6 - 4 = 2$.
La droite de Mayer a pour équation $y = 2x + 2$.

*[Barème type BAC : $G_1$ = 0,5 pt — $G_2$ = 0,5 pt — pente $a$ = 0,5 pt — équation = 0,5 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 2 — Vérifier le passage par $G$.** Avec la série précédente, vérifie que la droite de Mayer $y = 2x + 2$ passe par le point moyen $G$ du nuage entier.`,
          etapes: [
            { name: `Diagnostic`, contenu: `On calcule $G$ global puis on teste l'équation.` },
            { name: `Étape 1`, contenu: `$\\bar{x} = \\dfrac{1+2+3+4+5+6}{6} = \\dfrac{21}{6} = 3{,}5$ ; $\\bar{y} = \\dfrac{4+5+9+10+11+15}{6} = \\dfrac{54}{6} = 9$. Donc $G(3{,}5 ; 9)$.` },
            { name: `Étape 2`, contenu: `On teste : $2 \\times 3{,}5 + 2 = 7 + 2 = 9 = \\bar{y}$. Le point $G$ appartient bien à la droite.` },
          ],
          reponse: `$G(3{,}5 ; 9)$ vérifie $y = 2x + 2$ : la droite de Mayer passe par le point moyen.`,
          conseil: `Cette vérification est souvent une question à part entière du BAC : ne la néglige pas, c'est un point facile.`,
          piege: `Calcule $G$ sur **toutes** les données, pas sur un seul groupe.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Le point moyen du nuage est $G(\\bar{x} ; \\bar{y})$ avec $\\bar{x} = \\dfrac{21}{6} = 3{,}5$ et $\\bar{y} = \\dfrac{54}{6} = 9$.
En remplaçant $x$ par $3{,}5$ dans $y = 2x + 2$ : $y = 2(3{,}5) + 2 = 9 = \\bar{y}$.
Donc la droite de Mayer passe par le point moyen $G(3{,}5 ; 9)$.

*[Barème type BAC : calcul de $G$ = 1 pt — vérification = 0,5 pt — conclusion = 0,5 pt — Total : 2 pts]*`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-a',
          pf: `Grand Frère, la droite de Mayer et la droite des moindres carrés, c'est la même au final ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-b',
          gf: `Pas tout à fait, Champion(ne) ! Elles sont en général très proches et passent toutes deux par $G$, mais leurs équations diffèrent légèrement. Mayer est plus rapide à la main, les moindres carrés sont plus précis. Tu utilises celle que le sujet demande.`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Trie d'abord, coupe ensuite. Réponses finales seulement.

- **Exercice 1.** $G_1(2 ; 5)$ et $G_2(6 ; 13)$. Donne la pente de la droite de Mayer. *(Réponse : $a = \\dfrac{13-5}{6-2} = 2$.)*
- **Exercice 2.** Avec $a = 2$ et $G_1(2 ; 5)$, donne $b$. *(Réponse : $b = 5 - 2 \\times 2 = 1$, donc $y = 2x + 1$.)*
- **Exercice 3.** La droite de Mayer est $y = 1{,}5x + 4$ et $\\bar{x} = 6$. Que doit valoir $\\bar{y}$ ? *(Réponse : $\\bar{y} = 1{,}5 \\times 6 + 4 = 13$, car $G$ est sur la droite.)*`,
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
            `La **droite de Mayer** relie les points moyens partiels $G_1$ et $G_2$ de deux groupes de même effectif.`,
            `📘 Vocabulaire officiel : droite de Mayer, points moyens partiels $G_1$/$G_2$, groupes de même effectif.`,
            `Pente : $a = \\dfrac{\\bar{y}_2 - \\bar{y}_1}{\\bar{x}_2 - \\bar{x}_1}$, puis $b = \\bar{y}_1 - a\\bar{x}_1$.`,
            `Elle passe toujours par le point moyen $G$ : c'est ta vérification.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m4',
          titre: `Fil rouge`,
          contenu: `Tu disposes maintenant de deux droites d'ajustement (moindres carrés et Mayer). Une droite, c'est fait pour prévoir. Mais jusqu'où a-t-on le droit de prévoir, et à quelles conditions ? Le Module 5 te donne les règles de l'interpolation et de l'extrapolation.`,
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
            `Je sais trier les données et partager le nuage en deux groupes de même effectif.`,
            `Je sais calculer les points moyens partiels $G_1$ et $G_2$.`,
            `J'utilise le vocabulaire officiel (droite de Mayer, points moyens partiels).`,
            `Je sais déterminer l'équation de la droite $(G_1 G_2)$.`,
            `Je vérifie qu'elle passe par le point moyen global $G$.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m4',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → En route pour le Module 5, les prévisions.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et le ⑤ La Descente.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel.`,
          ],
        },
      ],
    },
  ],
};
