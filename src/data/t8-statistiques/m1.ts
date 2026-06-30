import { Chapitre } from '../../types/course';

export const chapitreM1: Chapitre = {
  id: 't8-m1',
  titre: `Module 1 — Nuage de Points et Point Moyen`,
  duree: 22,
  niveau: 'BASE',
  xpGain: 25,
  objectifs: [
    `Représenter une série statistique à deux variables par un nuage de points`,
    `Énoncer la définition du point moyen $G$ avec le vocabulaire officiel attendu au BAC`,
    `Calculer les coordonnées de $G(\\bar{x} ; \\bar{y})$ sans jamais inverser $\\bar{x}$ et $\\bar{y}$`,
    `Placer $G$ proprement au cœur de ton graphique`,
    `Vérifier la cohérence de ton point $G$ d'un simple coup d'œil`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, au Tome 7 je calculais la probabilité qu'un truc arrive. Là, on me donne deux colonnes de chiffres en même temps, les maths et la physique de chaque élève. Qu'est-ce que je suis censé en faire ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Bonne question, Champion(ne) ! Avec deux colonnes, on ne regarde plus un seul phénomène, on cherche un *lien* entre deux. La toute première chose à faire, c'est dessiner : on transforme chaque élève en un point sur un graphique. Et au milieu de tous ces points, il y a un point spécial, le point moyen $G$, qui résume toute la classe à lui seul. On commence par ça, c'est la fondation de tout le tome.`,
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
          contenu: `Imagine le carnet de notes de ta classe de Terminale D au Lycée Classique d'Abidjan. Pour chaque élève, tu as deux informations : sa note en maths et sa note en physique. Tu te poses la fameuse question : est-ce que les cracks en maths sont aussi les cracks en physique ?

Pour y voir clair, tu prends une grande feuille. En horizontal, tu mets les notes de maths ; en vertical, les notes de physique. Chaque camarade devient alors une petite croix sur la feuille : Awa ($14$ en maths, $15$ en physique) atterrit en haut à droite, Koffi ($8$ en maths, $9$ en physique) se pose en bas à gauche. Petit à petit, toute la classe forme un **nuage** de croix qui flotte sur ta feuille.

Maintenant, imagine qu'on veuille résumer toute cette classe par **un seul élève imaginaire** : l'élève parfaitement moyen, celui qui a la moyenne de la classe en maths *et* la moyenne de la classe en physique. Cet élève fictif, c'est le centre de gravité du nuage.

C'est exactement ça, le point moyen $G$ : le point d'équilibre autour duquel toutes les croix se répartissent, le portrait-robot moyen de toute ta classe.`,
        },
        {
          type: 'figure',
          id: 'fig-m1-1',
          src: '/images/t8/fig_M1_1.png',
          legende: `Chaque croix = un élève. Le point rouge $G$ résume toute la classe.`,
          alt: `Un nuage de cinq croix bleues et le point moyen G en rouge au centre.`,
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
          contenu: `On traduit la scène du carnet de notes en langage mathématique, brique par brique.

- Un élève (ses deux notes) → un couple $(x_i ; y_i)$ — une donnée à deux dimensions
- La note de maths → $x_i$ — la première variable, en abscisse
- La note de physique → $y_i$ — la seconde variable, en ordonnée
- L'élève moyen imaginaire → le point moyen $G$ — le centre du nuage`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène de la classe`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Un élève et ses deux notes`, `$(x_i ; y_i)$`, `Un couple de données, un point du nuage`],
            [`Toute la classe`, `Série statistique double`, `L'ensemble des $n$ couples`],
            [`La moyenne des notes de maths`, `$\\bar{x}$`, `L'abscisse de l'élève moyen`],
            [`La moyenne des notes de physique`, `$\\bar{y}$`, `L'ordonnée de l'élève moyen`],
            [`L'élève moyen imaginaire`, `$G(\\bar{x} ; \\bar{y})$`, `Le point moyen, centre de gravité du nuage`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `Maintenant que chaque morceau de l'image a son symbole, on peut écrire la définition rigoureuse.`,
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
          contenu: `Champion(ne), tu as l'image de l'élève moyen qui résume la classe. Ta copie, elle, doit parler le langage exact des maths.

**Définition formelle.** On considère une série statistique double $(x_i ; y_i)$ à $n$ couples. Le **point moyen** du nuage, noté $G$, est le point de coordonnées $G(\\bar{x} ; \\bar{y})$, où :
$$\\bar{x} = \\dfrac{1}{n} \\sum_{i=1}^n x_i \\qquad \\text{et} \\qquad \\bar{y} = \\dfrac{1}{n} \\sum_{i=1}^n y_i$$

**En langage courant.** $G$ est le centre de gravité du nuage : il a pour abscisse la moyenne des $x$ et pour ordonnée la moyenne des $y$.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Série statistique double** — un tableau qui associe deux variables $X$ et $Y$ à chaque individu.
- **Nuage de points** — l'ensemble des points $M_i(x_i ; y_i)$ représentés dans un repère.
- **Point moyen $G$** — le point de coordonnées $(\\bar{x} ; \\bar{y})$.
- **Centre de gravité** — autre nom du point moyen, à connaître pour le lire dans un énoncé.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend la phrase *« Le point moyen du nuage a pour coordonnées $G(\\bar{x} ; \\bar{y})$. »*. Sans le calcul explicite de $\\bar{x}$ et $\\bar{y}$, le point $G$ ne rapporte aucun point.`,
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
          titre: `Règle d'Or — Le point moyen G`,
          contenu: `Pour une série statistique double de $n$ couples $(x_i ; y_i)$, le point moyen $G$ a pour coordonnées :
$$G\\left( \\dfrac{1}{n}\\sum_{i=1}^n x_i \\;;\\; \\dfrac{1}{n}\\sum_{i=1}^n y_i \\right)$$

Le point moyen $G$ est le centre de gravité du nuage : il résume l'ensemble des données en une seule position centrale, et c'est par lui que passeront toutes les droites d'ajustement des modules suivants.`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Fais toujours la somme totale au brouillon avant de diviser. Ça t'évite de taper une fraction à rallonge à la calculatrice et de glisser une erreur de parenthèse.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Ne confonds jamais $\\bar{x}$ et $\\bar{y}$. Une inversion ici, et tout ton exercice est faussé d'avance. Étiquette bien tes colonnes.`,
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
          contenu: `Dès que l'énoncé te donne un tableau à deux lignes (ou deux colonnes) de chiffres et te parle de « nuage de points », de « point moyen » ou de « centre de gravité », tu es sur ce module. Le premier réflexe : calculer $\\bar{x}$ et $\\bar{y}$.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Si on te demande...`, `Alors l'action est...`],
          rows: [
            [`De représenter le nuage`, `Tracer un repère en respectant l'échelle imposée et placer les points $(x_i ; y_i)$.`],
            [`De déterminer le point moyen $G$`, `Calculer $\\bar{x}$, puis $\\bar{y}$, et écrire $G(\\bar{x} ; \\bar{y})$.`],
            [`De placer $G$ sur le graphique`, `Calculer d'abord ses coordonnées, puis le marquer dans une couleur distincte.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure`,
          contenu: `**Étape 1.** Trace ton repère. Lis bien la consigne : le correcteur impose souvent une échelle précise (par exemple $1$ cm pour $2$ unités en abscisse).

**Étape 2.** Place tes points $M_i(x_i ; y_i)$ proprement, avec une petite croix nette au crayon.

**Étape 3.** Calcule $\\bar{x}$ et $\\bar{y}$ avec la formule, puis place $G$ dans une couleur différente (rouge ou vert) pour bien le faire ressortir.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `Ton point $G$ doit tomber « au milieu » de la meute de points. Si ton nuage est en haut à droite de la feuille et que ton $G$ atterrit en bas à gauche, tu as fait une erreur de calcul sur une moyenne. Recommence.`,
        },
        {
          type: 'figure',
          id: 'fig-m1-2',
          src: '/images/t8/fig_M1_2.png',
          legende: `$G$ est toujours au cœur du nuage : c'est ton contrôle visuel.`,
          alt: `Le nuage de cinq croix avec G en rouge et ses coordonnées en pointillés verts.`,
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
            [`🟢 BASE`, `Petit tableau de données`, `$5$ à $6$ couples, on demande $G$`, `Type 1`],
            [`🟡 MOYEN`, `Tableau dépenses / chiffre d'affaires`, `Contexte économique, on demande $G$`, `Type 2`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Le carnet de notes.** Voici les notes de $5$ élèves en maths ($x_i$) et physique ($y_i$) : maths $8 ; 10 ; 12 ; 14 ; 16$ et physique $9 ; 11 ; 10 ; 15 ; 15$. Calcule les coordonnées du point moyen $G$ de cette série statistique.`,
          etapes: [
            { name: `Diagnostic`, contenu: `On demande $G$ à partir d'un petit tableau : on calcule directement $\\bar{x}$ puis $\\bar{y}$.` },
            { name: `Étape 1`, contenu: `$\\bar{x} = \\dfrac{8 + 10 + 12 + 14 + 16}{5} = \\dfrac{60}{5} = 12$.` },
            { name: `Étape 2`, contenu: `$\\bar{y} = \\dfrac{9 + 11 + 10 + 15 + 15}{5} = \\dfrac{60}{5} = 12$.` },
          ],
          reponse: `Le point moyen a pour coordonnées $G(12 ; 12)$.`,
          conseil: `Fais toujours la somme totale au brouillon avant de diviser, ça t'évite une erreur de frappe à la calculatrice.`,
          piege: `Ne lis pas $G$ sur le dessin : le correcteur exige la trace écrite du calcul de $\\bar{x}$ et $\\bar{y}$.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Soit $G(\\bar{x} ; \\bar{y})$ le point moyen du nuage.
$\\bar{x} = \\dfrac{1}{5} \\displaystyle\\sum_{i=1}^5 x_i = \\dfrac{60}{5} = 12$ ; $\\bar{y} = \\dfrac{1}{5} \\displaystyle\\sum_{i=1}^5 y_i = \\dfrac{60}{5} = 12$.
Le point moyen du nuage a pour coordonnées $G(12 ; 12)$.

*[Barème type BAC : calcul de $\\bar{x}$ = 0,5 pt — calcul de $\\bar{y}$ = 0,5 pt — conclusion $G$ = 0,5 pt — Total : 1,5 pt]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Dépenses et chiffre d'affaires.** Une petite entreprise note ses dépenses de publicité $X$ et son chiffre d'affaires $Y$ (en millions de F CFA) sur $4$ jours : $X : 2 ; 3 ; 5 ; 6$ et $Y : 10 ; 12 ; 16 ; 18$. Détermine les coordonnées du point moyen $G$ de cette série.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Même geste qu'au Type 1, dans un habillage économique : on calcule $\\bar{x}$ et $\\bar{y}$.` },
            { name: `Étape 1`, contenu: `$\\bar{x} = \\dfrac{2 + 3 + 5 + 6}{4} = \\dfrac{16}{4} = 4$.` },
            { name: `Étape 2`, contenu: `$\\bar{y} = \\dfrac{10 + 12 + 16 + 18}{4} = \\dfrac{56}{4} = 14$.` },
          ],
          reponse: `Le point moyen est $G(4 ; 14)$.`,
          conseil: `Garde l'ordre du tableau : la variable citée en premier dans l'énoncé est $X$, donc l'abscisse.`,
          piege: `Ne mélange pas les unités : ici $X$ et $Y$ n'ont pas la même échelle, mais le calcul du point moyen reste le même.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Calculons les coordonnées de $G(\\bar{x} ; \\bar{y})$ :
$\\bar{x} = \\dfrac{1}{4} \\displaystyle\\sum_{i=1}^4 x_i = 4$ ; $\\bar{y} = \\dfrac{1}{4} \\displaystyle\\sum_{i=1}^4 y_i = 14$.
Le point moyen du nuage est le point $G(4 ; 14)$.

*[Barème type BAC : $\\bar{x}$ = 0,5 pt — $\\bar{y}$ = 0,5 pt — conclusion = 0,5 pt — Total : 1,5 pt]*`,
        },
        {
          type: 'figure',
          id: 'fig-m1-3',
          src: '/images/t8/fig_M1_3.png',
          legende: `Même méthode, autre contexte : $G$ reste le centre du nuage.`,
          alt: `Nuage économique dépenses pub / chiffre d'affaires avec le point moyen G(4 ; 14).`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-a',
          pf: `Mais Grand Frère, je pourrais juste placer mes points sur la feuille millimétrée et regarder où est le centre à la règle, non ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-b',
          gf: `Jamais de la vie, Champion(ne) ! L'œil humain est trompeur. Le correcteur exige la trace écrite de ton calcul. Le point moyen se calcule algébriquement, il ne se devine pas sur un dessin.`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Sors ta calculatrice, ça va aller tout seul. Réponses finales seulement.

- **Exercice 1.** Série : $x_i : 1 ; 3 ; 5 ; 7$ et $y_i : 2 ; 4 ; 4 ; 6$. Calcule $G$. *(Réponse : $G(4 ; 4)$.)*
- **Exercice 2.** Série : $x_i : 10 ; 20 ; 30$ et $y_i : 5 ; 8 ; 11$. Calcule $G$. *(Réponse : $G(20 ; 8)$.)*
- **Exercice 3.** Une série de $6$ couples donne $\\sum x_i = 48$ et $\\sum y_i = 72$. Donne $G$. *(Réponse : $G(8 ; 12)$, on divise chaque somme par $6$.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m1',
          titre: `À retenir`,
          contenu: [
            `Une série statistique double se visualise par un **nuage de points** $M_i(x_i ; y_i)$.`,
            `📘 Vocabulaire officiel : série statistique double, nuage de points, point moyen $G$, centre de gravité.`,
            `Le **point moyen** $G(\\bar{x} ; \\bar{y})$ se **calcule** (jamais ne se lit sur le dessin).`,
            `$G$ tombe toujours au cœur du nuage : c'est ton premier contrôle de cohérence.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m1',
          titre: `Fil rouge`,
          contenu: `Tu sais maintenant placer le nuage et trouver son centre. Mais regarde tes croix : parfois elles s'alignent presque comme une droite, parfois elles sont éparpillées partout. Comment mesurer, avec un vrai nombre, la *force* de cet alignement ? C'est tout l'enjeu du Module 2 : la covariance et le coefficient de corrélation.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m1',
          titre: `Auto-évaluation — Module 1`,
          contenu: [
            `Je sais tracer un repère et placer un point avec ses coordonnées $(x_i ; y_i)$.`,
            `Je sais calculer $\\bar{x}$ et $\\bar{y}$ à partir d'un tableau de données.`,
            `J'utilise le vocabulaire officiel (série double, nuage, point moyen $G$, centre de gravité).`,
            `Je sais que $G$ se calcule et ne se lit pas sur le graphique.`,
            `Je vérifie d'un coup d'œil que $G$ tombe au milieu du nuage.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m1',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → En route pour le Module 2, on va mesurer la force du lien.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et le ⑤ La Descente.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel, tranquillement.`,
          ],
        },
      ],
    },
  ],
};
