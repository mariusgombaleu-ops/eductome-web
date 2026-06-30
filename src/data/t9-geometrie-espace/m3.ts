import { Chapitre } from '../../types/course';

export const chapitreM3: Chapitre = {
  id: 't9-m3',
  titre: `Module 3 — Produit Scalaire dans l'Espace`,
  duree: 24,
  niveau: 'MOYEN',
  xpGain: 25,
  objectifs: [
    `Calculer un produit scalaire de deux vecteurs en 3D`,
    `Énoncer l'orthogonalité avec le vocabulaire officiel attendu au BAC`,
    `Calculer une norme et une longueur à l'aide du produit scalaire`,
    `Déterminer une mesure d'angle avec la formule du cosinus`,
    `(Bonus) Utiliser le produit vectoriel pour une aire ou une coplanarité`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, dans le plan je vérifiais l'angle droit avec le produit scalaire. Mais là, en 3D, comment je sais si deux directions sont vraiment perpendiculaires ? Je ne peux plus le voir à l'œil sur ma feuille.`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Et c'est justement pour ça que le produit scalaire devient ton meilleur ami, Champion(ne) ! Dans l'espace, l'œil te trompe tout le temps. Mais le produit scalaire, lui, ne se trompe jamais. Tu fais une petite multiplication, et il te dit avec certitude si l'angle est droit, et même quelle est sa mesure exacte. C'est ton détecteur d'angles, version 3D.`,
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
          contenu: `Va faire un tour chez un menuisier d'Adjamé qui fabrique une porte. Avant de visser, il sort toujours son **équerre**, ce petit outil en forme de L. Il la pose dans le coin du cadre et vérifie d'un coup d'œil : est-ce que les deux montants forment un angle parfaitement droit ? Si l'équerre colle parfaitement, c'est bon. Si elle bâille, le cadre est de travers et la porte ne fermera jamais.

Le problème, c'est que dans l'espace, tu n'as pas toujours une équerre sous la main, et surtout tu ne peux pas « poser » un outil sur des vecteurs qui flottent en 3D. Il te faut une équerre **mathématique**, un calcul qui te donne la réponse sans rien dessiner.

Cette équerre mathématique, c'est le produit scalaire. Tu prends les coordonnées de tes deux directions, tu fais une multiplication bien précise, et le résultat te parle : s'il tombe **exactement sur zéro**, l'angle est droit, l'équerre colle. Sinon, le résultat te dit même de combien l'angle s'écarte du droit.`,
        },
        {
          type: 'figure',
          id: 'fig-m3-1',
          src: '/images/t9/fig_M3_1.png',
          legende: `Le produit scalaire est l'équerre mathématique : nul $\\Rightarrow$ angle droit.`,
          alt: `Un coin de cadre de porte avec une équerre en L, deux vecteurs u et v et un angle droit.`,
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
          contenu: `On traduit l'équerre du menuisier en langage mathématique.

- Une direction (un montant) → un vecteur $\\vec{u}$ — flèche de l'espace
- L'équerre qui colle → produit scalaire nul — angle droit
- L'équerre qui bâille → produit scalaire non nul — angle quelconque
- La longueur d'un montant → la norme $\\|\\vec{u}\\|$ — mesurée par le produit scalaire`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène du menuisier`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Deux montants du cadre`, `$\\vec{u}$ et $\\vec{v}$`, `Deux vecteurs de l'espace`],
            [`L'équerre colle (angle droit)`, `$\\vec{u}\\cdot\\vec{v}=0$`, `Les vecteurs sont orthogonaux`],
            [`L'équerre bâille`, `$\\vec{u}\\cdot\\vec{v}\\neq 0$`, `L'angle n'est pas droit`],
            [`La longueur d'un montant`, `$\\|\\vec{u}\\| = \\sqrt{\\vec{u}\\cdot\\vec{u}}$`, `La norme du vecteur`],
            [`L'ouverture exacte de l'angle`, `$\\cos\\theta = \\dfrac{\\vec{u}\\cdot\\vec{v}}{\\|\\vec{u}\\|\\,\\|\\vec{v}\\|}$`, `La mesure de l'angle`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `On peut maintenant écrire les définitions rigoureuses.`,
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
          contenu: `Champion(ne), tu as l'image de l'équerre. Ta copie, elle, doit parler le langage exact des maths.

**Définition formelle.** Dans un repère orthonormé, pour $\\vec{u}(x_1 ; y_1 ; z_1)$ et $\\vec{v}(x_2 ; y_2 ; z_2)$, le **produit scalaire** est le réel :
$$\\vec{u}\\cdot\\vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2$$

Deux vecteurs non nuls sont **orthogonaux** si et seulement si $\\vec{u}\\cdot\\vec{v} = 0$.

**En langage courant.** Le produit scalaire est un nombre qui mesure « combien » deux directions vont ensemble ; nul, elles sont perpendiculaires.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Produit scalaire** — le réel $x_1x_2 + y_1y_2 + z_1z_2$.
- **Vecteurs orthogonaux** — produit scalaire nul (le mot officiel, pas « perpendiculaires » pour des vecteurs).
- **Norme** — la longueur $\\|\\vec{u}\\| = \\sqrt{x_1^2 + y_1^2 + z_1^2}$.
- **Repère orthonormé** — condition pour utiliser cette expression analytique.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend la phrase *« Comme $\\vec{u}\\cdot\\vec{v} = 0$, les vecteurs $\\vec{u}$ et $\\vec{v}$ sont orthogonaux. »* Le mot « orthogonal » vaut des points.`,
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
          titre: `Règle d'Or — Produit scalaire, orthogonalité, angle`,
          contenu: `Pour $\\vec{u}(x_1 ; y_1 ; z_1)$ et $\\vec{v}(x_2 ; y_2 ; z_2)$ dans un repère orthonormé :
$$\\vec{u}\\cdot\\vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2 \\qquad \\|\\vec{u}\\| = \\sqrt{x_1^2 + y_1^2 + z_1^2}$$

**Orthogonalité.** $\\vec{u} \\perp \\vec{v} \\iff \\vec{u}\\cdot\\vec{v} = 0$.

**Mesure d'angle.** Si $\\vec{u}$ et $\\vec{v}$ sont non nuls : $\\cos\\theta = \\dfrac{\\vec{u}\\cdot\\vec{v}}{\\|\\vec{u}\\|\\,\\|\\vec{v}\\|}$.`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Pour calculer $\\|\\vec{u}\\|$, tu peux écrire $\\|\\vec{u}\\| = \\sqrt{\\vec{u}\\cdot\\vec{u}}$ : le produit scalaire d'un vecteur par lui-même donne le carré de sa norme.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `L'expression $x_1x_2 + y_1y_2 + z_1z_2$ n'est valable que dans un repère **orthonormé**. Vérifie toujours que l'énoncé le précise (c'est presque toujours le cas au BAC).`,
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
          contenu: `« Montrer que… orthogonaux », « angle droit », « mesure de l'angle », « triangle rectangle » : tous ces mots t'envoient vers le produit scalaire. Premier réflexe : calculer $\\vec{u}\\cdot\\vec{v}$.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`La question au BAC`, `Ton réflexe algébrique`],
          rows: [
            [`Montrer que $\\vec{u}$ et $\\vec{v}$ sont orthogonaux`, `Je calcule $\\vec{u}\\cdot\\vec{v}$ et je vérifie que ça fait $0$.`],
            [`Montrer qu'un triangle est rectangle en $A$`, `Je calcule $\\vec{AB}\\cdot\\vec{AC}$ ; si c'est $0$, l'angle en $A$ est droit.`],
            [`Calculer une mesure d'angle`, `J'applique $\\cos\\theta = \\dfrac{\\vec{u}\\cdot\\vec{v}}{\\|\\vec{u}\\|\\,\\|\\vec{v}\\|}$.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure (mesure d'un angle)`,
          contenu: `**Étape 1.** Calcule les deux vecteurs issus du sommet, par exemple $\\vec{AB}$ et $\\vec{AC}$.

**Étape 2.** Calcule le produit scalaire $\\vec{AB}\\cdot\\vec{AC}$.

**Étape 3.** Calcule les deux normes $\\|\\vec{AB}\\|$ et $\\|\\vec{AC}\\|$.

**Étape 4.** Forme le quotient pour obtenir $\\cos\\theta$, puis conclus avec la calculatrice.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `Un cosinus est toujours compris entre $-1$ et $1$. Si tu trouves $\\cos\\theta = 1{,}4$, tu as une erreur de calcul quelque part. Reprends.`,
        },
        {
          type: 'figure',
          id: 'fig-m3-2',
          src: '/images/t9/fig_M3_2.png',
          legende: `Le produit scalaire donne directement la mesure de l'angle.`,
          alt: `Un triangle ABC avec les vecteurs AB et AC et l'angle theta marqué au sommet A.`,
        },
        {
          type: 'text',
          id: 'b-bonus',
          titre: `🎁 Bonus — Le produit vectoriel (pour aller plus loin)`,
          contenu: `Au-delà du programme strict, un outil élégant fait gagner du temps sur certaines questions d'aire et de coplanarité : le **produit vectoriel** $\\vec{u} \\wedge \\vec{v}$. Ses coordonnées :
$$\\vec{u}\\wedge\\vec{v} = (y_1 z_2 - z_1 y_2 \\,;\\, z_1 x_2 - x_1 z_2 \\,;\\, x_1 y_2 - y_1 x_2)$$

Il a deux super-pouvoirs : il est **orthogonal** à la fois à $\\vec{u}$ et à $\\vec{v}$ (un vecteur normal tout prêt !), et sa norme donne l'**aire** du parallélogramme construit sur $\\vec{u}$ et $\\vec{v}$. L'aire d'un triangle $ABC$ vaut donc $\\dfrac{1}{2}\\|\\vec{AB}\\wedge\\vec{AC}\\|$. Enfin, trois vecteurs sont coplanaires exactement quand $(\\vec{u}\\wedge\\vec{v})\\cdot\\vec{w} = 0$.`,
        },
        {
          type: 'tip',
          id: 'tip-bonus',
          titre: `Le mot du Grand Frère`,
          contenu: `En Terminale D, on te demande rarement le produit vectoriel directement, mais il peut te servir de vérification rapide au brouillon — surtout pour trouver un vecteur normal d'un coup.`,
        },
        {
          type: 'figure',
          id: 'fig-m3-3',
          src: '/images/t9/fig_M3_3.png',
          legende: `$\\vec{u}\\wedge\\vec{v}$ est orthogonal au plan ; sa norme = l'aire du parallélogramme.`,
          alt: `Deux vecteurs u et v dans un plan et leur produit vectoriel dressé perpendiculairement.`,
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
            [`🟢 BASE`, `Produit scalaire et orthogonalité`, `« montrer que orthogonaux »`, `Type 1`],
            [`🟡 MOYEN`, `Norme et longueur`, `« calculer la longueur / la norme »`, `Type 1`],
            [`🔴 BAC`, `Mesure d'un angle d'un triangle`, `« donner la mesure de l'angle »`, `Type 2`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Produit scalaire et orthogonalité** *(BASE / MOYEN)*. On donne $\\vec{u}(2 ; -1 ; 3)$ et $\\vec{v}(1 ; 2 ; 0)$. **1.** Calcule $\\vec{u}\\cdot\\vec{v}$. Que peux-tu en conclure ? **2.** Calcule la norme $\\|\\vec{u}\\|$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Calcul direct de produit scalaire puis de norme.` },
            { name: `Étape 1`, contenu: `$\\vec{u}\\cdot\\vec{v} = 2\\times 1 + (-1)\\times 2 + 3\\times 0 = 2 - 2 + 0 = 0$.` },
            { name: `Étape 2`, contenu: `$\\|\\vec{u}\\| = \\sqrt{2^2 + (-1)^2 + 3^2} = \\sqrt{4 + 1 + 9} = \\sqrt{14}$.` },
          ],
          reponse: `Comme $\\vec{u}\\cdot\\vec{v} = 0$, les vecteurs $\\vec{u}$ et $\\vec{v}$ sont orthogonaux ; et $\\|\\vec{u}\\| = \\sqrt{14}$.`,
          conseil: `Pose le produit scalaire en colonne pour ne pas oublier un terme : $x_1x_2$, puis $y_1y_2$, puis $z_1z_2$.`,
          piege: `Un terme avec un $0$ donne $0$, mais ne l'oublie pas dans l'écriture : le correcteur veut voir les trois produits.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `1. $\\vec{u}\\cdot\\vec{v} = 2\\times 1 + (-1)\\times 2 + 3\\times 0 = 0$. Comme le produit scalaire est nul, $\\vec{u}$ et $\\vec{v}$ sont orthogonaux.
2. $\\|\\vec{u}\\| = \\sqrt{2^2 + (-1)^2 + 3^2} = \\sqrt{14}$.

*[Barème type BAC : produit scalaire + conclusion = 1,5 pt — norme = 1 pt — Total : 2,5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 2 — Mesure d'un angle** *(BAC)*. Dans un repère orthonormé, $A(2 ; 1 ; 0)$, $B(4 ; 1 ; 2)$ et $C(2 ; 3 ; 2)$. Détermine la mesure de l'angle $\\widehat{BAC}$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Mesure d'un angle d'un triangle : produit scalaire des deux vecteurs issus de $A$, puis formule du cosinus.` },
            { name: `Étape 1`, contenu: `$\\vec{AB}(2 ; 0 ; 2)$ et $\\vec{AC}(0 ; 2 ; 2)$.` },
            { name: `Étape 2`, contenu: `$\\vec{AB}\\cdot\\vec{AC} = 2\\times 0 + 0\\times 2 + 2\\times 2 = 4$.` },
            { name: `Étape 3`, contenu: `$\\|\\vec{AB}\\| = \\sqrt{4 + 0 + 4} = 2\\sqrt{2}$ et $\\|\\vec{AC}\\| = \\sqrt{0 + 4 + 4} = 2\\sqrt{2}$.` },
            { name: `Étape 4`, contenu: `$\\cos\\widehat{BAC} = \\dfrac{4}{2\\sqrt{2}\\times 2\\sqrt{2}} = \\dfrac{4}{8} = \\dfrac{1}{2}$.` },
          ],
          reponse: `$\\cos\\widehat{BAC} = \\dfrac{1}{2}$, donc $\\widehat{BAC} = 60°$.`,
          conseil: `Mémorise les cosinus usuels : $\\dfrac{1}{2} \\to 60°$, $\\dfrac{\\sqrt{2}}{2} \\to 45°$, $\\dfrac{\\sqrt{3}}{2} \\to 30°$. Ça t'évite la calculatrice.`,
          piege: `Les deux vecteurs doivent partir du **même** sommet $A$. Si tu prends $\\vec{AB}$ et $\\vec{CA}$, tu changes l'angle.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$\\vec{AB}(2 ; 0 ; 2)$ et $\\vec{AC}(0 ; 2 ; 2)$, donc $\\vec{AB}\\cdot\\vec{AC} = 4$.
$\\|\\vec{AB}\\| = \\|\\vec{AC}\\| = 2\\sqrt{2}$.
Ainsi $\\cos\\widehat{BAC} = \\dfrac{4}{8} = \\dfrac{1}{2}$, d'où $\\widehat{BAC} = 60°$.

*[Barème type BAC : vecteurs = 0,5 pt — produit scalaire = 0,5 pt — normes = 1 pt — angle = 1 pt — Total : 3 pts]*`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-a',
          pf: `Grand Frère, si le produit scalaire est négatif, ça veut dire quoi ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-b',
          gf: `Bonne observation, Champion(ne) ! Un produit scalaire négatif, ça donne un cosinus négatif, donc un angle **obtus** (plus grand que 90°). Positif : angle aigu. Nul : angle droit. Le signe te raconte déjà l'histoire avant même la calculatrice.`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Pose tes produits scalaires bien proprement. Réponses finales seulement.

- **Exercice 1.** $\\vec{u}(1 ; 2 ; -1)$ et $\\vec{v}(3 ; -1 ; 1)$ sont-ils orthogonaux ? *(Réponse : oui, $3-2-1=0$.)*
- **Exercice 2.** Norme de $\\vec{w}(2 ; 3 ; 6)$. *(Réponse : $\\sqrt{4+9+36} = 7$.)*
- **Exercice 3.** $A(1;0;0)$, $B(0;1;0)$, $C(0;0;1)$ : mesure de $\\widehat{BAC}$. *(Réponse : $\\cos = \\dfrac{1}{2}$, soit $60°$.)*`,
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
            `Le produit scalaire en 3D : $\\vec{u}\\cdot\\vec{v} = x_1x_2 + y_1y_2 + z_1z_2$ (repère orthonormé).`,
            `📘 Vocabulaire officiel : produit scalaire, vecteurs orthogonaux, norme, repère orthonormé.`,
            `$\\vec{u}\\cdot\\vec{v} = 0 \\iff$ orthogonaux ; l'angle se lit par $\\cos\\theta = \\dfrac{\\vec{u}\\cdot\\vec{v}}{\\|\\vec{u}\\|\\,\\|\\vec{v}\\|}$.`,
            `🎁 Bonus : le produit vectoriel donne un vecteur normal et une aire.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m3',
          titre: `Fil rouge`,
          contenu: `Tu sais maintenant détecter les angles droits et mesurer les angles. C'est exactement ce qu'il faut pour écrire l'équation d'une droite et d'un plan dans l'espace. Direction le Module 4 : les représentations.`,
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
            `Je sais calculer un produit scalaire en 3D sans oublier un terme.`,
            `Je sais conclure à l'orthogonalité quand le produit scalaire est nul.`,
            `J'utilise le vocabulaire officiel (produit scalaire, orthogonaux, norme).`,
            `Je sais calculer une mesure d'angle avec la formule du cosinus.`,
            `Je sais à quoi sert le produit vectoriel (vecteur normal, aire).`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m3',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → En route pour le Module 4, on écrit droites et plans.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et la procédure d'angle.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel, l'image de l'équerre.`,
          ],
        },
      ],
    },
  ],
};
