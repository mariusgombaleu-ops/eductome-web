import { Chapitre } from '../../types/course';

export const chapitreM1: Chapitre = {
  id: 't6-m1',
  titre: `Module 1 — Radians et cercle trigonométrique`,
  duree: 25,
  niveau: 'BASE',
  xpGain: 25,
  objectifs: [
    `Convertir une mesure d'angle des degrés vers les radians et inversement`,
    `Placer un angle quelconque, même fractionnaire, sur le cercle trigonométrique`,
    `Énoncer la définition du radian et de la mesure principale avec le vocabulaire officiel attendu au BAC`,
    `Déterminer la mesure principale d'un angle en retirant les tours complets`,
    `Lire le cosinus et le sinus d'un angle remarquable directement sur le cercle`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, pourquoi on veut me fatiguer avec les radians ? On n'avait aucun problème avec les degrés depuis l'école primaire ! $360^\\circ$, c'est clair, c'est net.`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Excellente question, Champion(ne). Et c'est la première chose à régler dans ta tête pour débloquer ton intuition. Le degré, c'est une unité humaine, un peu arbitraire : pourquoi $360$ et pas $100$ ? Le radian, lui, est l'unité naturelle du mouvement circulaire — celle qui fait que les dérivées de $\\cos$ et $\\sin$ tombent juste. Aujourd'hui, on apprivoise cette unité et le cercle qui va avec ; dès le Module 5, tu verras que sans le radian, $(\\sin x)' = \\cos x$ serait faux.`,
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
          contenu: `Imagine la grosse montre au poignet du surveillant général au marché du Cacao. Le cadran est un cercle parfait, et la grande aiguille tourne. Quand elle part de midi et revient à midi, elle a fait un tour complet : un seul et même point de départ et d'arrivée.

Maintenant, oublie un instant les chiffres « 12, 3, 6, 9 » imprimés sur le cadran. Concentre-toi plutôt sur la **distance** que parcourt le bout de l'aiguille le long du bord. Si le rayon du cadran vaut $1$, alors le tour complet mesure une longueur de $2\\pi$ (le périmètre du cercle). À mi-chemin, l'aiguille a parcouru $\\pi$. Au quart, elle a parcouru $\\dfrac{\\pi}{2}$.

Le radian, c'est exactement ça : **mesurer un angle par la longueur d'arc qu'il découpe sur un cercle de rayon $1$.** On ne compte plus en « parts de gâteau » arbitraires, on compte en distance réellement parcourue sur le bord. Voilà toute l'idée cachée derrière ce mot qui fait peur.`,
        },
        {
          type: 'figure',
          id: 'fig-m1-1',
          src: '/images/t6/fig_M1_1.png',
          legende: `Un tour complet $= 2\\pi$. L'angle se mesure par la distance parcourue sur le bord, pas en parts arbitraires.`,
          alt: `Un cercle de rayon 1 avec une aiguille et l'arc parcouru figurant la mesure en radians.`,
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
          contenu: `On traduit maintenant la montre du marché en langage mathématique, brique par brique.

- Le tour complet de l'aiguille → $360^\\circ$ → une longueur d'arc de $2\\pi$ radians.
- Le demi-tour (l'aiguille à l'opposé) → $180^\\circ$ → $\\pi$ radians.
- Le quart de tour (angle droit) → $90^\\circ$ → $\\dfrac{\\pi}{2}$ radians.`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Position de l'aiguille`, `En degrés`, `En radians`, `Ce que ça signifie`],
          rows: [
            [`Tour complet`, `$360^\\circ$`, `$2\\pi$`, `Retour au point de départ`],
            [`Demi-tour`, `$180^\\circ$`, `$\\pi$`, `Point diamétralement opposé`],
            [`Quart de tour`, `$90^\\circ$`, `$\\dfrac{\\pi}{2}$`, `Angle droit`],
            [`Un sixième de tour`, `$60^\\circ$`, `$\\dfrac{\\pi}{3}$`, `Angle remarquable du triangle équilatéral`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `Le rapport est toujours le même : $180^\\circ$ correspond à $\\pi$ radians. C'est la clé de toutes les conversions, et c'est ce qu'on formalise maintenant.`,
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
          contenu: `Champion(ne), tu as l'image de l'aiguille qui parcourt le bord du cadran. La copie attend maintenant les mots exacts.

**Définition formelle.** Le **radian** est la mesure de l'angle au centre qui intercepte, sur un cercle, un arc de longueur égale au rayon. Le **cercle trigonométrique** est le cercle de centre $O$ et de rayon $1$, orienté dans le sens direct (sens inverse des aiguilles d'une montre). Pour un point $M$ du cercle associé au réel $x$, on définit $\\cos x$ comme l'abscisse de $M$ et $\\sin x$ comme son ordonnée.

**En langage courant.** Le réel $x$, c'est la distance signée parcourue sur le bord du cercle depuis le point $I(1\\ ;\\ 0)$ ; $\\cos x$ et $\\sin x$ sont les coordonnées du point d'arrivée.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Cercle trigonométrique** — cercle de centre $O$, de rayon $1$, orienté dans le sens direct.
- **Sens direct** — le sens inverse des aiguilles d'une montre ; il définit les angles positifs.
- **Mesure principale** — l'unique mesure d'un angle appartenant à $\\left]\\,-\\pi\\ ;\\ \\pi\\,\\right]$.
- **Angles associés** — les réels de la forme $x + 2k\\pi$ ($k \\in \\mathbb{Z}$) repèrent le même point du cercle.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend que tu écrives qu'un angle est défini *« à $2k\\pi$ près, avec $k \\in \\mathbb{Z}$ »*. Oublier le $2k\\pi$ dans une résolution d'équation, c'est perdre la moitié des solutions.`,
        },
        {
          type: 'figure',
          id: 'fig-m1-2',
          src: '/images/t6/fig_M1_2.png',
          legende: `Le cercle trigonométrique : chaque réel $x$ pointe un point dont l'abscisse est $\\cos x$ et l'ordonnée $\\sin x$.`,
          alt: `Le cercle trigonométrique et les angles remarquables du premier quadrant.`,
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
          titre: `Règle d'Or — Conversion et mesure principale`,
          contenu: `La conversion repose sur la proportion fondamentale :
$$\\dfrac{\\text{mesure en degrés}}{180} = \\dfrac{\\text{mesure en radians}}{\\pi}.$$

Pour passer des degrés aux radians, on multiplie par $\\dfrac{\\pi}{180}$ ; pour l'inverse, on multiplie par $\\dfrac{180}{\\pi}$.

**Mesure principale.** Tout angle admet une infinité de mesures de la forme $x + 2k\\pi$ ($k \\in \\mathbb{Z}$). Sa **mesure principale** est l'unique valeur appartenant à $\\left]\\,-\\pi\\ ;\\ \\pi\\,\\right]$.`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Pour retrouver le sens de la conversion sans hésiter : si tu veux des radians, le $\\pi$ doit apparaître **en haut** de ta fraction. Tu multiplies donc par $\\dfrac{\\pi}{180}$.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Ne mélange jamais les unités dans un même calcul. Avant la première ligne, décide : « je travaille en radians ». Et la calculatrice doit être réglée en conséquence.`,
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
          contenu: `On te demande de convertir, de placer un angle, ou de trouver une mesure principale. Repère les mots : « exprime en radians » → multiplie par $\\dfrac{\\pi}{180}$ ; « place sur le cercle » → décompose l'angle avec $\\pi$ ; « mesure principale » → retire ou ajoute des paquets de $2\\pi$ pour atterrir dans $\\left]\\,-\\pi\\ ;\\ \\pi\\,\\right]$.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Si tu vois…`, `Ce que tu fais`],
          rows: [
            [`Une mesure en degrés à convertir`, `Multiplie par $\\dfrac{\\pi}{180}$ et simplifie la fraction.`],
            [`Un angle fractionnaire à placer`, `Décompose avec $\\pi$ et utilise les symétries du cercle.`],
            [`Un angle géant comme $\\dfrac{25\\pi}{6}$`, `Retire des paquets de $2\\pi$ jusqu'à tomber dans $\\left]\\,-\\pi\\ ;\\ \\pi\\,\\right]$.`],
            [`$\\cos$ ou $\\sin$ d'un angle remarquable`, `Lis la coordonnée du point sur le cercle (Outil 4 du Socle).`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure (trouver une mesure principale)`,
          contenu: `**Étape 1.** Écris l'angle sous la forme « partie en $\\pi$ ». Repère combien de tours complets ($2\\pi$) il contient.

**Étape 2.** Retire (ou ajoute) autant de fois $2\\pi$ que nécessaire pour ramener le résultat dans $\\left]\\,-\\pi\\ ;\\ \\pi\\,\\right]$.

**Étape 3.** Vérifie l'appartenance à l'intervalle et conclus par une phrase complète : « La mesure principale est… ».`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `- **Bon intervalle** : ta réponse doit être strictement supérieure à $-\\pi$ et inférieure ou égale à $\\pi$.
- **Même point** : la mesure principale et l'angle de départ doivent pointer le même point du cercle (différence multiple de $2\\pi$).`,
        },
        {
          type: 'figure',
          id: 'fig-m1-3',
          src: '/images/t6/fig_M1_3.png',
          legende: `$\\dfrac{25\\pi}{6} = \\dfrac{\\pi}{6} + 4\\pi$ : après deux tours complets, on retombe sur $\\dfrac{\\pi}{6}$.`,
          alt: `Réduction d'un grand angle à sa mesure principale par retrait de tours complets.`,
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
            [`🟢 BASE`, `Conversion degrés ↔ radians`, `On donne une mesure dans une unité, on en demande l'autre`, `Type 1`],
            [`🟡 MOYEN`, `Lire cos/sin d'un angle remarquable`, `Angle du type $\\dfrac{5\\pi}{6}$ ou $\\dfrac{7\\pi}{4}$`, `Type 2`],
            [`🔴 BAC`, `Mesure principale d'un grand angle`, `Angle géant avec un gros multiple de $\\pi$`, `Type 3`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Convertir un angle.** Convertis $135^\\circ$ en radians.`,
          etapes: [
            { name: `Diagnostic`, contenu: `On part des degrés, on veut des radians : on multiplie par $\\dfrac{\\pi}{180}$.` },
            { name: `Étape 1`, contenu: `$135 \\times \\dfrac{\\pi}{180} = \\dfrac{135\\pi}{180}$.` },
            { name: `Étape 2`, contenu: `On simplifie : $\\dfrac{135}{180} = \\dfrac{3}{4}$.` },
          ],
          reponse: `$135^\\circ = \\dfrac{3\\pi}{4}$ rad.`,
          conseil: `Simplifie la fraction $\\dfrac{\\text{degrés}}{180}$ avant de coller le $\\pi$ : les calculs restent légers.`,
          piege: `Ne multiplie pas par $\\dfrac{180}{\\pi}$ : ce sens-là transforme des radians en degrés, l'inverse de ce qu'on veut ici.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$135^\\circ = 135 \\times \\dfrac{\\pi}{180}\\ \\text{rad} = \\dfrac{135\\pi}{180}\\ \\text{rad} = \\dfrac{3\\pi}{4}\\ \\text{rad}.$

*[Barème : bon facteur de conversion : 1 pt · simplification : 0,5 pt · conclusion : 0,5 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Lire un cosinus remarquable.** Détermine la valeur exacte de $\\cos\\left(\\dfrac{5\\pi}{6}\\right)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `L'angle $\\dfrac{5\\pi}{6}$ n'est pas dans le premier quadrant ; on le ramène à un angle de base par symétrie (Outil 4 du Socle).` },
            { name: `Étape 1`, contenu: `On écrit $\\dfrac{5\\pi}{6} = \\pi - \\dfrac{\\pi}{6}$.` },
            { name: `Étape 2`, contenu: `Par symétrie, $\\cos(\\pi - x) = -\\cos x$.` },
          ],
          reponse: `$\\cos\\left(\\dfrac{5\\pi}{6}\\right) = -\\cos\\left(\\dfrac{\\pi}{6}\\right) = -\\dfrac{\\sqrt{3}}{2}$.`,
          conseil: `Devant un angle hors du premier quadrant, cherche toujours à l'écrire sous la forme $\\pi - x$, $\\pi + x$ ou $-x$ : les formules de symétrie font le reste.`,
          piege: `Le cosinus est négatif dans le deuxième quadrant. N'oublie pas le signe moins : une valeur juste mais de signe faux ne rapporte pas les points.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$\\cos\\left(\\dfrac{5\\pi}{6}\\right) = \\cos\\left(\\pi - \\dfrac{\\pi}{6}\\right) = -\\cos\\left(\\dfrac{\\pi}{6}\\right) = -\\dfrac{\\sqrt{3}}{2}.$

*[Barème : décomposition de l'angle : 1 pt · formule de symétrie : 1 pt · valeur exacte signée : 1 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 3 — Mesure principale.** Détermine la mesure principale de l'angle $\\dfrac{25\\pi}{6}$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `L'angle dépasse largement un tour ; on retire des paquets de $2\\pi$ pour atterrir dans $\\left]\\,-\\pi\\ ;\\ \\pi\\,\\right]$.` },
            { name: `Étape 1`, contenu: `On exprime $2\\pi$ avec le même dénominateur : $2\\pi = \\dfrac{12\\pi}{6}$.` },
            { name: `Étape 2`, contenu: `On retire deux tours : $\\dfrac{25\\pi}{6} - 2 \\times \\dfrac{12\\pi}{6} = \\dfrac{25\\pi - 24\\pi}{6} = \\dfrac{\\pi}{6}$.` },
            { name: `Étape 3`, contenu: `On vérifie : $\\dfrac{\\pi}{6} \\in \\left]\\,-\\pi\\ ;\\ \\pi\\,\\right]$. C'est bon.` },
          ],
          reponse: `La mesure principale de $\\dfrac{25\\pi}{6}$ est $\\dfrac{\\pi}{6}$.`,
          conseil: `Mets toujours $2\\pi$ au même dénominateur que ton angle : la soustraction des paquets devient mécanique.`,
          piege: `Ne t'arrête pas au premier retrait si tu es encore hors de l'intervalle. Ici il fallait retirer **deux** tours, pas un seul.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite`,
          contenu: `On a $\\dfrac{25\\pi}{6} = \\dfrac{\\pi}{6} + \\dfrac{24\\pi}{6} = \\dfrac{\\pi}{6} + 4\\pi = \\dfrac{\\pi}{6} + 2 \\times 2\\pi$. Comme $\\dfrac{\\pi}{6} \\in \\left]\\,-\\pi\\ ;\\ \\pi\\,\\right]$, la mesure principale de $\\dfrac{25\\pi}{6}$ est $\\dfrac{\\pi}{6}$.

*[Barème : mise au même dénominateur : 1 pt · retrait des tours : 1,5 pt · vérification d'intervalle + conclusion : 1 pt — Total : 3,5 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Repère la méthode avant de calculer. Réponses finales seulement.

- **Exercice 1.** Convertis $210^\\circ$ en radians. *(Réponse : $210 \\times \\dfrac{\\pi}{180} = \\dfrac{7\\pi}{6}$.)*
- **Exercice 2.** Donne la valeur exacte de $\\sin\\left(\\dfrac{3\\pi}{4}\\right)$. *(Réponse : $\\sin\\left(\\pi - \\dfrac{\\pi}{4}\\right) = \\sin\\dfrac{\\pi}{4} = \\dfrac{\\sqrt2}{2}$.)*
- **Exercice 3.** Détermine la mesure principale de $\\dfrac{17\\pi}{4}$. *(Réponse : $\\dfrac{17\\pi}{4} - 2 \\times 2\\pi = \\dfrac{\\pi}{4}$.)*`,
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
            `Le radian mesure un angle par la longueur d'arc sur le cercle de rayon $1$ : $180^\\circ = \\pi$ rad.`,
            `📘 Vocabulaire officiel : cercle trigonométrique, sens direct, mesure principale, angles associés.`,
            `Conversion : $\\times \\dfrac{\\pi}{180}$ (vers radians), $\\times \\dfrac{180}{\\pi}$ (vers degrés).`,
            `La mesure principale est l'unique mesure dans $\\left]\\,-\\pi\\ ;\\ \\pi\\,\\right]$ : on y arrive en retirant des paquets de $2\\pi$.`,
            `$\\cos x$ = abscisse, $\\sin x$ = ordonnée du point du cercle associé à $x$.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m1',
          titre: `Fil rouge`,
          contenu: `Tu sais maintenant placer un point sur le cercle et lire ses coordonnées. Mais que se passe-t-il quand l'aiguille tourne encore et encore ? Les coordonnées se **répètent** : c'est la périodicité. Au Module 2, on transforme ce cercle qui tourne en deux fonctions, le cosinus et le sinus, et on apprend à exploiter leur périodicité et leur parité pour réduire le travail d'étude.`,
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
            `Je convertis un angle des degrés vers les radians et inversement sans hésiter sur le sens.`,
            `J'emploie le vocabulaire officiel (cercle trigonométrique, sens direct, mesure principale, angles associés).`,
            `Je place un angle fractionnaire sur le cercle et je lis son cosinus et son sinus.`,
            `Je trouve la mesure principale d'un grand angle en retirant des paquets de $2\\pi$.`,
            `Je n'oublie jamais le « $+\\,2k\\pi$, $k \\in \\mathbb{Z}$ » quand je repère un angle.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m1',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Le cadran n'a plus de secret. Direction Module 2.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 3.`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : la montre du marché du Cacao.`,
          ],
        },
      ],
    },
  ],
};
