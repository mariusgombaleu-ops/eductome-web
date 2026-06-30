import { Chapitre } from '../../types/course';

export const chapitreM5: Chapitre = {
  id: 't10-m5',
  titre: `Module 5 — Nombres Complexes et Géométrie`,
  duree: 28,
  niveau: 'BAC',
  xpGain: 35,
  objectifs: [
    `Calculer l'affixe d'un vecteur, d'un milieu, et une distance`,
    `Mesurer un angle orienté avec l'argument d'un quotient`,
    `Prouver un alignement (quotient réel) ou une orthogonalité (imaginaire pur)`,
    `Reconnaître la nature d'un triangle (équilatéral, rectangle isocèle)`,
    `Déterminer un lieu de points (médiatrice, cercle)`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, on revient à la géométrie avec des distances et des angles. Je dois ressortir ma règle et mon rapporteur comme en Troisième ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Range tout ça, Champion(ne) ! C'est toute la beauté du plan complexe : chaque point a une adresse, son affixe, et tu vas lire distances et angles directement dans le calcul. Plus besoin de mesurer sur le dessin. Tu deviens un géomètre qui travaille uniquement avec sa calculatrice et son stylo.`,
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
          contenu: `Pense à l'application GPS sur ton téléphone quand tu circules dans Abidjan. Chaque lieu — ta maison à Yopougon, ton lycée à Cocody, le marché d'Adjamé — possède une adresse unique : ses coordonnées. Dans le plan complexe, cette adresse, c'est l'affixe du point.

Maintenant, quand le GPS calcule la distance entre deux lieux, il fait la différence de leurs adresses et en prend la longueur. Quand il calcule la direction à prendre, il mesure l'angle de ce trajet. C'est exactement ce qu'on va faire : la distance entre deux points, c'est le module de la différence des affixes ; l'angle entre deux trajets, c'est l'argument d'un quotient d'affixes. Le GPS ne dessine pas la carte à la main : il calcule. Toi aussi, désormais.`,
        },
        {
          type: 'figure',
          id: 'fig-m5-1',
          src: '/images/t10/fig_M5_1.png',
          legende: `$OA = OB = AB = 2$ : le triangle $OAB$ est équilatéral, prouvé par les modules.`,
          alt: `Un plan complexe avec O, A d'affixe racine 3 + i et B d'affixe racine 3 - i formant un triangle équilatéral.`,
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
          contenu: `On traduit le GPS en langage mathématique, brique par brique.

- L'adresse d'un lieu → l'affixe $z_A$ du point $A$
- Le trajet de $A$ vers $B$ → le vecteur $\\vec{AB}$ d'affixe $z_B - z_A$
- La distance parcourue → le module $AB = |z_B - z_A|$
- La direction du trajet → l'argument $\\arg(z_B - z_A)$
- L'angle entre deux trajets → $\\arg\\!\\left(\\dfrac{z_C - z_A}{z_B - z_A}\\right)$`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène du GPS`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`L'adresse d'un lieu`, `$z_A$`, `L'affixe du point $A$`],
            [`Le trajet $A \\to B$`, `$z_B - z_A$`, `L'affixe du vecteur $\\vec{AB}$`],
            [`La distance entre deux lieux`, `$AB = |z_B - z_A|$`, `Le module de la différence`],
            [`Le point à mi-chemin`, `$z_I = \\dfrac{z_A + z_B}{2}$`, `L'affixe du milieu de $[AB]$`],
            [`L'angle entre deux trajets`, `$\\arg\\!\\left(\\dfrac{z_C - z_A}{z_B - z_A}\\right)$`, `L'angle orienté $\\widehat{(\\vec{AB}, \\vec{AC})}$`],
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
          contenu: `Champion(ne), le GPS te donne l'intuition ; le correcteur attend les formules exactes.

**Définition formelle.** Pour des points $A$, $B$, $C$ d'affixes $z_A$, $z_B$, $z_C$ : le vecteur $\\vec{AB}$ a pour affixe $z_B - z_A$ ; la distance $AB = |z_B - z_A|$ ; l'angle orienté $\\widehat{(\\vec{AB}, \\vec{AC})} = \\arg\\!\\left(\\dfrac{z_C - z_A}{z_B - z_A}\\right) \\pmod{2\\pi}$. Les points $A$, $B$, $C$ sont **alignés** si ce quotient est **réel** ; les droites $(AB)$ et $(AC)$ sont **perpendiculaires** s'il est **imaginaire pur**.

**En langage courant.** Distance = module d'une différence ; angle = argument d'un quotient.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Affixe d'un point / d'un vecteur** — $z_A$ pour le point, $z_B - z_A$ pour $\\vec{AB}$.
- **Alignement** — le quotient $\\dfrac{z_C - z_A}{z_B - z_A}$ est un **réel**.
- **Orthogonalité** — ce même quotient est un **imaginaire pur**.
- **Médiatrice / cercle** — lieux définis par une égalité ou une valeur de module.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `L'ensemble des points $M$ tels que $|z - z_A| = |z - z_B|$ est la **médiatrice** de $[AB]$ ; l'ensemble tel que $|z - z_A| = r$ est le **cercle** de centre $A$ et de rayon $r$.`,
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
          titre: `Règle d'Or — La géométrie par les affixes`,
          contenu: `$$\\vec{AB} : z_B - z_A \\qquad AB = |z_B - z_A| \\qquad z_I = \\dfrac{z_A + z_B}{2}$$
$$\\widehat{(\\vec{AB}, \\vec{AC})} = \\arg\\!\\left(\\dfrac{z_C - z_A}{z_B - z_A}\\right) \\pmod{2\\pi}$$

**Lieux de points usuels :**
$$|z - z_A| = |z - z_B| \\;\\Rightarrow\\; \\text{médiatrice de } [AB] \\qquad |z - z_A| = r \\;\\Rightarrow\\; \\text{cercle de centre } A, \\text{ rayon } r$$`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Triangle équilatéral ? Montre que les **trois modules** sont égaux. Rectangle isocèle en $A$ ? Montre que $\\dfrac{z_C - z_A}{z_B - z_A} = \\pm i$.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Ne confonds pas l'affixe du vecteur ($z_B - z_A$, un complexe) et la distance ($|z_B - z_A|$, un réel positif). L'un porte une direction, l'autre une longueur, Champion(ne).`,
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
          contenu: `Traduis chaque question géométrique en calcul d'affixes. Distance ? Module d'une différence. Angle ou nature de triangle ? Argument d'un quotient. Lieu de points ? Égalité de modules à interpréter.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`La question au BAC`, `Ton réflexe par les affixes`],
          rows: [
            [`Calculer une distance $AB$`, `$AB = |z_B - z_A|$.`],
            [`Prouver $A$, $B$, $C$ alignés`, `Montrer que $\\dfrac{z_C - z_A}{z_B - z_A}$ est réel.`],
            [`Prouver $(AB) \\perp (AC)$`, `Montrer que $\\dfrac{z_C - z_A}{z_B - z_A}$ est imaginaire pur.`],
            [`Nature d'un triangle`, `Comparer les modules (côtés) et l'argument du quotient (angle).`],
            [`Ensemble des points $M$`, `Traduire l'égalité de modules : médiatrice ou cercle.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure (déterminer un lieu de points)`,
          contenu: `**Étape 1.** Écris la condition donnée avec les modules, par exemple $|z - z_A| = |z - z_B|$.

**Étape 2.** Reconnais la forme : égalité de deux distances → médiatrice ; distance constante à un point → cercle.

**Étape 3.** Donne la réponse en phrase complète, avec les éléments caractéristiques (les deux points, ou le centre et le rayon).`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `Pour un alignement, le quotient doit être réel pur : si un $i$ traîne à la fin, recommence. Pour une nature de triangle, recoupe toujours par deux chemins (modules ET argument) quand c'est possible.`,
        },
        {
          type: 'figure',
          id: 'fig-m5-2',
          src: '/images/t10/fig_M5_2.png',
          legende: `L'ensemble des points $M$ tels que $|z - z_E| = |z - z_K|$ est la médiatrice de $[EK]$.`,
          alt: `Un plan complexe avec deux points E et K, le segment EK et sa médiatrice avec un point M équidistant.`,
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
            [`🔴 BAC`, `Nature d'un triangle`, `« Montre que le triangle $OAB$ est... »`, `Type 1`],
            [`🔴 BAC`, `Ensemble / lieu de points`, `« Détermine l'ensemble des points $M$ tels que... »`, `Type 2`],
            [`🟡 MOYEN`, `Distance et alignement`, `« Calcule $AB$ / montre que $A$, $B$, $C$ sont alignés »`, `Type 1`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 1 — Nature d'un triangle** *(BAC)*. Le plan complexe est muni d'un repère orthonormé direct $(O \\,;\\, \\vec{u} \\,;\\, \\vec{v})$. On donne $A$ d'affixe $z_A = \\sqrt{3} + i$ et $B$ d'affixe $z_B = \\sqrt{3} - i$. **1.** Détermine le module et un argument de $z_A$ et de $z_B$. **2.** Montre que le triangle $OAB$ est équilatéral.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Nature d'un triangle : on calcule les trois côtés via les modules.` },
            { name: `Étape 1`, contenu: `$|z_A| = \\sqrt{(\\sqrt{3})^2 + 1^2} = 2$ ; comme $z_B = \\overline{z_A}$, on a $|z_B| = 2$ et l'argument opposé.` },
            { name: `Étape 2`, contenu: `On calcule $OA$, $OB$, $AB$ avec les modules et on compare.` },
          ],
          reponse: `$OA = OB = AB = 2$ : les trois côtés sont égaux, donc le triangle $OAB$ est équilatéral.`,
          conseil: `Remarque tout de suite que $z_B = \\overline{z_A}$ : même module, argument opposé. Tu gagnes la moitié du travail.`,
          piege: `$AB$ n'est pas $|z_A| - |z_B|$, mais $|z_B - z_A|$. On soustrait les affixes, puis on prend le module.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `**1.** $|z_A| = \\sqrt{3 + 1} = 2$ et $\\cos\\theta_A = \\dfrac{\\sqrt{3}}{2}$, $\\sin\\theta_A = \\dfrac{1}{2}$, donc $\\arg(z_A) = \\dfrac{\\pi}{6}$. Comme $z_B = \\overline{z_A}$ : $|z_B| = 2$ et $\\arg(z_B) = -\\dfrac{\\pi}{6}$.

**2.** $OA = |z_A| = 2$ ; $OB = |z_B| = 2$ ; $AB = |z_B - z_A| = |{-2i}| = 2$.
Les trois côtés sont égaux à $2$ : le triangle $OAB$ est équilatéral.

*[Barème type BAC : module et argument = 1,5 pt — les trois distances = 1 pt — conclusion = 0,5 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 2 — Ensembles de points** *(BAC)*. À tout point $M$ on associe son affixe $z$. Détermine et nomme : **1.** l'ensemble $(\\Gamma_1)$ des points $M$ tels que $|z + 2 - i| = |z - 3 + 4i|$ ; **2.** l'ensemble $(\\Gamma_2)$ des points $M$ tels que $|z - 2 + i| = 3$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Égalité de deux modules → médiatrice ; module constant à un point → cercle. Tout est de reconnaître les points cachés.` },
            { name: `Étape 1`, contenu: `On réécrit chaque module comme une distance $|z - z_0|$.` },
            { name: `Étape 2`, contenu: `On identifie le ou les points, puis on nomme le lieu.` },
          ],
          reponse: `$(\\Gamma_1)$ est la médiatrice de $[EK]$ avec $E(-2 + i)$ et $K(3 - 4i)$ ; $(\\Gamma_2)$ est le cercle de centre $\\Omega(2 - i)$ et de rayon $3$.`,
          conseil: `$|z + 2 - i| = |z - (-2 + i)|$ : le point caché est $-2 + i$. Mets toujours la forme $z - z_0$ pour lire l'affixe.`,
          piege: `$|z - 2 + i| = |z - (2 - i)|$ : le centre est $2 - i$, pas $-2 + i$. Attention aux signes en factorisant.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `**1.** $|z + 2 - i| = |z - 3 + 4i|$ s'écrit $|z - (-2 + i)| = |z - (3 - 4i)|$, soit $ME = MK$ avec $E(-2 + i)$ et $K(3 - 4i)$. L'ensemble $(\\Gamma_1)$ est la **médiatrice du segment $[EK]$**.

**2.** $|z - 2 + i| = 3$ s'écrit $|z - (2 - i)| = 3$, soit $M\\Omega = 3$ avec $\\Omega(2 - i)$. L'ensemble $(\\Gamma_2)$ est le **cercle de centre $\\Omega(2 - i)$ et de rayon $3$**.

*[Barème type BAC : médiatrice = 1,5 pt — cercle (centre + rayon) = 1,5 pt — Total : 3 pts]*`,
        },
        {
          type: 'figure',
          id: 'fig-m5-3',
          src: '/images/t10/fig_M5_3.png',
          legende: `L'ensemble des points $M$ tels que $|z - (2 - i)| = 3$ est le cercle de centre $\\Omega(2 ; -1)$ et de rayon $3$.`,
          alt: `Un plan complexe avec le centre Omega d'affixe 2 - i, le cercle de rayon 3 et un point M dessus.`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-a',
          pf: `Grand Frère, et si on me parle de quatre points sur un même cercle, les cocycliques ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-b',
          gf: `Bonne anticipation, Champion(ne) ! Quatre points $A$, $B$, $C$, $D$ sont cocycliques ou alignés lorsque le rapport $\\dfrac{z_C - z_A}{z_B - z_A} \\div \\dfrac{z_C - z_D}{z_B - z_D}$ est un réel. Ça reste rare au BAC ivoirien, mais c'est au programme : retiens le principe, c'est le même esprit que l'alignement, juste avec deux angles à comparer.`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Traduis toujours la géométrie en affixes. Réponses finales seulement.

- **Exercice 1.** $A(1 + i)$, $B(4 + 5i)$. Calcule $AB$. *(Réponse : $AB = |3 + 4i| = 5$.)*
- **Exercice 2.** Ensemble des $M$ tels que $|z - 1| = |z + 3i|$. *(Réponse : médiatrice de $[AB]$ avec $A(1)$, $B(-3i)$.)*
- **Exercice 3.** $A(2i)$, $B(2)$, $C(0)$. La droite $(CA)$ est-elle perpendiculaire à $(CB)$ ? *(Réponse : oui, $\\dfrac{z_A - z_C}{z_B - z_C} = i$, imaginaire pur.)*`,
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
            `Distance $AB = |z_B - z_A|$ ; angle orienté $= \\arg\\!\\left(\\dfrac{z_C - z_A}{z_B - z_A}\\right)$.`,
            `📘 Vocabulaire officiel : affixe, alignement (réel), orthogonalité (imaginaire pur), médiatrice, cercle.`,
            `Nature d'un triangle : **modules** pour les côtés, **argument du quotient** pour les angles.`,
            `Lieux : $|z - z_A| = |z - z_B|$ → médiatrice ; $|z - z_A| = r$ → cercle.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m5',
          titre: `Fil rouge`,
          contenu: `Tu sais lire la géométrie dans les affixes. Au Module 6, on passe à l'action : on va **bouger** les points — les translater, les faire tourner, les agrandir — par de simples écritures $z' = az + b$.`,
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
            `Je sais calculer une distance $AB = |z_B - z_A|$ et un milieu.`,
            `J'emploie le vocabulaire officiel : affixe, alignement, orthogonalité, médiatrice, cercle.`,
            `Je sais mesurer un angle orienté avec l'argument d'un quotient.`,
            `Je sais prouver la nature d'un triangle (équilatéral, rectangle isocèle).`,
            `Je sais déterminer un ensemble de points (médiatrice, cercle).`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m5',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Direction le Module 6, on fait bouger les points.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et la procédure des lieux.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel, l'image du GPS.`,
          ],
        },
      ],
    },
  ],
};
