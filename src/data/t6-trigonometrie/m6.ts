import { Chapitre } from '../../types/course';

export const chapitreM6: Chapitre = {
  id: 't6-m6',
  titre: `Module 6 — Équations, inéquations et étude de fonction`,
  duree: 30,
  niveau: 'BAC',
  xpGain: 35,
  objectifs: [
    `Résoudre une équation trigonométrique sur un intervalle, factorisation comprise`,
    `Résoudre une inéquation trigonométrique en lisant le cercle ou un tableau de signe`,
    `Énoncer la démarche d'étude d'une fonction trigonométrique avec le vocabulaire officiel du BAC`,
    `Réduire l'intervalle d'étude grâce à la parité et à la périodicité`,
    `Dresser le tableau de variations et tracer la courbe d'une fonction trigonométrique`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, le dernier exercice du sujet me demande d'« étudier et représenter la fonction $f(x) = \\cos 2x$ sur $\\left[\\,0\\ ;\\ \\pi\\,\\right]$ ». Il y a tellement de questions à la suite que je ne sais même pas par où commencer. C'est le gros morceau, non ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `C'est le gros morceau, oui, mais aussi le plus rentable en points, Champion(ne). Et bonne nouvelle : tu possèdes déjà toutes les pièces. Réduire l'intervalle (Module 2), dériver (Module 5), résoudre les équations (Modules 2 et 3) — il ne reste qu'à les assembler dans le bon ordre. Aujourd'hui, on monte la machine complète, et tu repars avec une méthode qui marche sur n'importe quelle fonction trigonométrique du BAC.`,
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
          contenu: `Imagine que tu organises le trajet d'un car de transport entre Abidjan et Bouaké, avec des arrêts réguliers. Le tronçon entre deux gares se répète : si tu connais parfaitement ce qui se passe sur **un** tronçon — les montées, les descentes, le point le plus haut — tu connais tout le voyage, car le motif se reproduit. Tu n'étudies pas la route entière au mètre près ; tu étudies un morceau, puis tu dis « et ça recommence ».

Une fonction trigonométrique, c'est exactement ce voyage à motif répété. Grâce à la périodicité, tu te concentres sur un seul intervalle. Grâce à la parité, tu peux même n'en étudier que la moitié et compléter par symétrie. Tu fais le quart du travail, tu obtiens cent pour cent de la courbe.

Et avant de tracer, il faut souvent résoudre : « pour quels angles la fonction s'annule-t-elle ? est-elle positive ? » Ce sont les équations et les inéquations — les panneaux indicateurs qui te disent où la route monte, descend ou croise l'axe.`,
        },
        {
          type: 'figure',
          id: 'fig-m6-1',
          src: '/images/t6/fig_M6_1.png',
          legende: `On étudie un seul motif, puis on recopie : la périodicité fait le reste du travail.`,
          alt: `Une courbe périodique sur trois périodes, avec un seul motif encadré.`,
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
          contenu: `On traduit le « voyage à motif répété » en démarche d'étude.

- « un seul tronçon suffit » → réduire l'intervalle d'étude à une période.
- « la moitié suffit même » → exploiter la parité pour étudier sur une demi-période.
- « où la route croise l'axe » → résoudre $f(x) = 0$ (équation).
- « où la route est au-dessus du niveau » → résoudre $f(x) > 0$ (inéquation).`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Étape du voyage`, `Geste mathématique`, `Outil mobilisé`],
          rows: [
            [`Choisir un tronçon`, `Réduire l'intervalle d'étude`, `Périodicité (M2)`],
            [`N'en étudier que la moitié`, `Exploiter parité ou imparité`, `Parité (Socle, M2)`],
            [`Repérer les croisements de l'axe`, `Résoudre $f(x) = 0$`, `Équation-produit (Socle, M2)`],
            [`Repérer les zones positives`, `Résoudre $f(x) > 0$`, `Lecture de signe (Socle)`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `Toutes les briques sont là. On formalise la démarche complète.`,
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
          contenu: `Champion(ne), tu as l'image du car à motif répété. La copie attend la démarche normalisée.

**Définition formelle.** **Étudier une fonction trigonométrique** $f$, c'est : préciser son **ensemble de définition**, déterminer une **période** $T$ et l'éventuelle **parité** pour réduire l'**intervalle d'étude**, calculer $f'$ et **étudier son signe**, dresser le **tableau de variations**, puis tracer la **courbe représentative** en complétant par périodicité et symétrie.

**En langage courant.** On étudie le moins possible (un petit intervalle), puis on recopie partout grâce aux symétries.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Intervalle d'étude** — intervalle réduit où l'on mène l'étude avant de compléter.
- **Période** — plus petit $T > 0$ tel que $f(x + T) = f(x)$ ; pour $\\cos(2x)$, $T = \\pi$.
- **Résoudre dans un intervalle** — donner uniquement les solutions appartenant à l'intervalle imposé.
- **Inéquation trigonométrique** — recherche des $x$ où $f(x) > 0$ (ou $< 0$), par lecture du cercle.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend la justification de réduction : *« $f$ est périodique de période $T$ et paire, je l'étudie donc sur tel intervalle puis je complète par symétrie. »*`,
        },
        {
          type: 'figure',
          id: 'fig-m6-2',
          src: '/images/t6/fig_M6_2.png',
          legende: `$\\cos x > \\dfrac12$ correspond à l'arc à droite de la verticale : on lit la solution directement sur le cercle.`,
          alt: `Lecture d'une inéquation sur le cercle trigonométrique.`,
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
          titre: `Règle d'Or — Résoudre et étudier`,
          contenu: `**Équations de référence.** Pour $a \\in \\left[\\,-1\\ ;\\ 1\\,\\right]$ :
$$\\cos x = \\cos\\alpha \\iff x = \\alpha + 2k\\pi \\ \\text{ou} \\ x = -\\alpha + 2k\\pi,$$
$$\\sin x = \\sin\\alpha \\iff x = \\alpha + 2k\\pi \\ \\text{ou} \\ x = \\pi - \\alpha + 2k\\pi, \\qquad (k \\in \\mathbb{Z}).$$

**Inéquations.** On résout $\\cos x > a$ ou $\\sin x > a$ en repérant sur le cercle l'arc où la condition est vérifiée, puis on lit les bornes.

**Étude de fonction.** Ensemble de définition → période et parité → intervalle d'étude réduit → dérivée et signe → tableau de variations → tracé complété par symétrie.`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Pour une inéquation, dessine toujours le cercle et hachure l'arc solution : tu vois immédiatement entre quelles bornes la fonction respecte la condition.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Pour $\\sin x = \\sin\\alpha$, la seconde famille est $\\pi - \\alpha$, pas $-\\alpha$. Confondre les règles du sinus et du cosinus est l'erreur à éviter ici.`,
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
          contenu: `On te demande de résoudre une équation, une inéquation, ou de mener une étude complète. Repère : « résous $\\cos x = a$ » → familles de solutions ; « résous $\\cos x > a$ » → arc sur le cercle ; « étudie et représente $f$ » → déroule la démarche complète d'étude.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Si tu vois…`, `Ce que tu fais`],
          rows: [
            [`$\\cos x = a$ ou $\\sin x = a$`, `Angle de référence $\\alpha$, puis familles de solutions.`],
            [`Un produit $= 0$`, `Équation-produit : chaque facteur nul séparément (Outil 5 du Socle).`],
            [`$\\cos x > a$ ou $\\sin x < a$`, `Hachure l'arc solution sur le cercle, lis les bornes.`],
            [`« Étudier et représenter $f$ »`, `Période → parité → dérivée → variations → tracé.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure (étude complète d'une fonction trigonométrique)`,
          contenu: `**Étape 1.** Donne l'ensemble de définition et détermine la période $T$.

**Étape 2.** Étudie la parité ; déduis-en l'intervalle d'étude réduit.

**Étape 3.** Calcule $f'(x)$ et étudie son signe sur l'intervalle réduit.

**Étape 4.** Dresse le tableau de variations, puis trace la courbe en complétant par périodicité et symétrie.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `- **Cohérence des bornes** : aux extrémités de l'intervalle réduit, les valeurs doivent se raccorder par symétrie.
- **Encadrement** : la courbe d'une fonction du type $\\cos$ ou $\\sin$ reste entre ses valeurs extrêmes annoncées.`,
        },
        {
          type: 'figure',
          id: 'fig-m6-3',
          src: '/images/t6/fig_M6_3.png',
          legende: `$f(x) = \\cos 2x$ : période $\\pi$, une descente puis une montée sur $\\left[\\,0\\ ;\\ \\pi\\,\\right]$.`,
          alt: `Étude de f(x) = cos 2x sur [0 ; pi] avec son tableau de variations.`,
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
            [`🟢 BASE`, `Équation factorisée`, `Un produit de facteurs trigonométriques $= 0$`, `Type 1`],
            [`🟡 MOYEN`, `Inéquation trigonométrique`, `$\\cos x > a$ ou $\\sin x < a$ sur un intervalle`, `Type 2`],
            [`🔴 BAC`, `Étude complète de fonction`, `« Étudier et représenter $f$ »`, `Type 3`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Équation factorisée.** Résous dans $\\left[\\,0\\ ;\\ 2\\pi\\,\\right]$ l'équation $\\sin x\\,(2\\cos x - 1) = 0$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Équation-produit : un produit est nul si l'un des facteurs est nul (Outil 5 du Socle).` },
            { name: `Étape 1`, contenu: `$\\sin x = 0$ donne, dans $\\left[\\,0\\ ;\\ 2\\pi\\,\\right]$ : $x = 0,\\ \\pi,\\ 2\\pi$.` },
            { name: `Étape 2`, contenu: `$2\\cos x - 1 = 0 \\iff \\cos x = \\dfrac{1}{2}$ donne $x = \\dfrac{\\pi}{3}$ et $x = \\dfrac{5\\pi}{3}$.` },
          ],
          reponse: `$S = \\left\\{0\\ ;\\ \\dfrac{\\pi}{3}\\ ;\\ \\pi\\ ;\\ \\dfrac{5\\pi}{3}\\ ;\\ 2\\pi\\right\\}$.`,
          conseil: `Traite chaque facteur dans un coin séparé de ta copie, puis réunis toutes les solutions à la fin.`,
          piege: `Ne divise jamais par $\\sin x$ pour « simplifier » : tu perdrais les solutions $0$, $\\pi$, $2\\pi$. On factorise, on n'élimine pas.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$\\sin x\\,(2\\cos x - 1) = 0 \\iff \\sin x = 0$ ou $\\cos x = \\dfrac{1}{2}$. Dans $\\left[\\,0\\ ;\\ 2\\pi\\,\\right]$ : $\\sin x = 0$ donne $0,\\ \\pi,\\ 2\\pi$ ; $\\cos x = \\dfrac{1}{2}$ donne $\\dfrac{\\pi}{3},\\ \\dfrac{5\\pi}{3}$. Donc $S = \\left\\{0\\ ;\\ \\dfrac{\\pi}{3}\\ ;\\ \\pi\\ ;\\ \\dfrac{5\\pi}{3}\\ ;\\ 2\\pi\\right\\}$.

*[Barème : factorisation comprise : 1 pt · solutions de chaque facteur : 1,5 pt · réunion : 0,5 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Inéquation trigonométrique.** Résous dans $\\left[\\,0\\ ;\\ 2\\pi\\,\\right]$ l'inéquation $\\cos x > \\dfrac{1}{2}$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Inéquation en cosinus : on repère sur le cercle l'arc où l'abscisse dépasse $\\dfrac{1}{2}$.` },
            { name: `Étape 1`, contenu: `On résout d'abord $\\cos x = \\dfrac{1}{2}$ : les bornes sont $x = \\dfrac{\\pi}{3}$ et $x = \\dfrac{5\\pi}{3}$.` },
            { name: `Étape 2`, contenu: `Sur le cercle, $\\cos x > \\dfrac{1}{2}$ correspond à l'arc proche de $0$, à droite de la verticale.` },
          ],
          reponse: `$S = \\left[\\,0\\ ;\\ \\dfrac{\\pi}{3}\\,\\right[ \\cup \\left]\\,\\dfrac{5\\pi}{3}\\ ;\\ 2\\pi\\,\\right]$.`,
          conseil: `Place toujours les deux bornes trouvées sur le cercle, puis demande-toi « de quel côté l'abscisse est-elle plus grande ? ». L'arc solution saute aux yeux.`,
          piege: `Aux bornes, le cosinus vaut exactement $\\dfrac{1}{2}$, pas plus : l'inégalité étant stricte, on exclut $\\dfrac{\\pi}{3}$ et $\\dfrac{5\\pi}{3}$ (crochets ouverts).`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$\\cos x = \\dfrac{1}{2}$ pour $x = \\dfrac{\\pi}{3}$ et $x = \\dfrac{5\\pi}{3}$. Sur $\\left[\\,0\\ ;\\ 2\\pi\\,\\right]$, $\\cos x > \\dfrac{1}{2}$ sur l'arc à droite de la verticale, soit $S = \\left[\\,0\\ ;\\ \\dfrac{\\pi}{3}\\,\\right[ \\cup \\left]\\,\\dfrac{5\\pi}{3}\\ ;\\ 2\\pi\\,\\right]$.

*[Barème : équation associée : 1 pt · lecture du cercle : 1,5 pt · intervalles et bornes ouvertes : 1 pt — Total : 3,5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 3 — Étude complète d'une fonction.** Soit $f(x) = \\cos 2x$. Étudie la parité et la période de $f$, puis dresse son tableau de variations sur $\\left[\\,0\\ ;\\ \\pi\\,\\right]$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Étude de fonction trigonométrique : on déroule période → parité → dérivée → variations.` },
            { name: `Étape 1`, contenu: `$f$ est définie sur $\\mathbb{R}$. Comme $\\cos$ a pour période $2\\pi$, $f(x) = \\cos 2x$ a pour période $T = \\dfrac{2\\pi}{2} = \\pi$.` },
            { name: `Étape 2`, contenu: `$f(-x) = \\cos(-2x) = \\cos 2x = f(x)$ : $f$ est **paire**.` },
            { name: `Étape 3`, contenu: `$f'(x) = -2\\sin 2x$. Sur $\\left]\\,0\\ ;\\ \\dfrac{\\pi}{2}\\,\\right[$, $\\sin 2x > 0$ donc $f'(x) < 0$ ; sur $\\left]\\,\\dfrac{\\pi}{2}\\ ;\\ \\pi\\,\\right[$, $\\sin 2x < 0$ donc $f'(x) > 0$.` },
          ],
          reponse: `$f$ décroît de $1$ à $-1$ sur $\\left[\\,0\\ ;\\ \\dfrac{\\pi}{2}\\,\\right]$, puis croît de $-1$ à $1$ sur $\\left[\\,\\dfrac{\\pi}{2}\\ ;\\ \\pi\\,\\right]$.`,
          conseil: `Pour $\\cos(ax)$, la période est $\\dfrac{2\\pi}{a}$ : un réflexe qui te fait gagner un temps précieux à l'examen.`,
          piege: `N'annonce pas la période $2\\pi$ par habitude : ici le facteur $2$ devant $x$ la divise par deux, $T = \\pi$.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$f$ est définie sur $\\mathbb{R}$, de période $T = \\dfrac{2\\pi}{2} = \\pi$, et paire car $f(-x) = \\cos(-2x) = \\cos 2x = f(x)$. On a $f'(x) = -2\\sin 2x$ ; sur $\\left[\\,0\\ ;\\ \\dfrac{\\pi}{2}\\,\\right]$, $f'(x) \\leqslant 0$ donc $f$ décroît de $1$ à $-1$, et sur $\\left[\\,\\dfrac{\\pi}{2}\\ ;\\ \\pi\\,\\right]$, $f'(x) \\geqslant 0$ donc $f$ croît de $-1$ à $1$.

*[Barème : période : 1 pt · parité : 1 pt · dérivée et signe : 1,5 pt · variations : 1 pt — Total : 4,5 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Assemble toutes tes pièces. Réponses finales seulement.

- **Exercice 1.** Résous $\\cos x\\,(2\\sin x - \\sqrt3) = 0$ dans $\\left[\\,0\\ ;\\ 2\\pi\\,\\right]$. *(Réponse : $\\dfrac{\\pi}{2},\\ \\dfrac{3\\pi}{2},\\ \\dfrac{\\pi}{3},\\ \\dfrac{2\\pi}{3}$.)*
- **Exercice 2.** Résous $\\sin x \\leqslant \\dfrac{1}{2}$ sur $\\left[\\,0\\ ;\\ \\dfrac{\\pi}{2}\\,\\right]$. *(Réponse : $\\left[\\,0\\ ;\\ \\dfrac{\\pi}{6}\\,\\right]$.)*
- **Exercice 3.** Donne la période de $g(x) = \\sin 3x$. *(Réponse : $\\dfrac{2\\pi}{3}$.)*`,
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
            `$\\cos x = \\cos\\alpha \\iff x = \\pm\\alpha + 2k\\pi$ ; $\\sin x = \\sin\\alpha \\iff x = \\alpha + 2k\\pi$ ou $x = \\pi - \\alpha + 2k\\pi$.`,
            `📘 Vocabulaire officiel : intervalle d'étude, période, résoudre dans un intervalle, inéquation trigonométrique.`,
            `Une inéquation se lit sur le cercle : hachure l'arc, lis les bornes, attention aux crochets.`,
            `Étude complète : ensemble de définition → période et parité → dérivée et signe → variations → tracé.`,
            `Pour $\\cos(ax)$ ou $\\sin(ax)$, la période est $\\dfrac{2\\pi}{a}$.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m6',
          titre: `Fil rouge`,
          contenu: `Tu viens de monter la machine complète d'étude d'une fonction trigonométrique — la reine de l'épreuve. C'est la dernière grande compétence du tome. Il ne reste qu'à tout mettre à l'épreuve du feu dans la Salle d'Entraînement, sur dix sujets de type BAC.`,
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
            `Je résous une équation factorisée sans jamais diviser par un facteur trigonométrique.`,
            `J'emploie le vocabulaire officiel (intervalle d'étude, période, inéquation trigonométrique).`,
            `Je lis la solution d'une inéquation directement sur le cercle, bornes comprises.`,
            `Je réduis l'intervalle d'étude grâce à la période et à la parité.`,
            `Je dresse le tableau de variations d'une fonction trigonométrique et je trace sa courbe.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m6',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Le combat final est gagné. Direction la Salle d'Entraînement.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 3.`,
            `🔴 **0 à 2** → Reprends le ⑤ La Descente : la démarche d'étude pas à pas.`,
          ],
        },
      ],
    },
  ],
};
