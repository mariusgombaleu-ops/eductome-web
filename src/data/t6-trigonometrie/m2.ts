import { Chapitre } from '../../types/course';

export const chapitreM2: Chapitre = {
  id: 't6-m2',
  titre: `Module 2 — Les fonctions cosinus et sinus`,
  duree: 25,
  niveau: 'BASE',
  xpGain: 25,
  objectifs: [
    `Réduire un angle quelconque grâce à la périodicité $2\\pi$ pour calculer son cosinus ou son sinus`,
    `Utiliser la parité ($\\cos$ pair, $\\sin$ impair) et les angles associés pour simplifier une expression`,
    `Énoncer la périodicité et la parité des fonctions $\\cos$ et $\\sin$ avec le vocabulaire officiel du BAC`,
    `Décrire les variations et tracer l'allure des courbes de $\\cos$ et $\\sin$ sur une période`,
    `Résoudre une équation simple du type $\\cos x = a$ ou $\\sin x = a$ sur un intervalle donné`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, au Module 1 on a vu les angles du premier tour. Mais dans mon exercice, on me demande $\\cos\\left(\\dfrac{13\\pi}{6}\\right)$. Cet angle n'est même pas dans mon cours ! Comment on fait quand on sort du cercle ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `C'est justement là le secret, Champion(ne) : on ne sort **jamais** du cercle. Tu te souviens de la montre du marché du Cacao ? Une fois que l'aiguille a fait un tour complet, elle ne quitte pas le cadran, elle repasse simplement sur les mêmes repères. Pour tes angles, c'est exactement la même mécanique : c'est la **périodicité**. On va en faire ton arme numéro un.`,
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
          contenu: `Reviens à la marée à Grand-Lahou. Le matin, l'eau monte jusqu'à un maximum, puis elle redescend jusqu'à un minimum, puis elle remonte. Et le lendemain, exactement le même cycle recommence. Si tu prends une photo du niveau de l'eau aujourd'hui à $14\\text{ h}$, tu obtiens le même niveau qu'hier à $14\\text{ h}$ : le phénomène se **répète à l'identique** après une durée fixe.

Cette durée fixe au bout de laquelle tout recommence, c'est la **période**. Pour le cosinus et le sinus, qui suivent le tour complet du cercle, cette période vaut $2\\pi$. Ajouter $2\\pi$ à un angle, c'est faire un tour de plus et retomber au même endroit : $\\cos(x + 2\\pi) = \\cos x$.

Et il y a une deuxième symétrie cachée. Le cosinus ne fait pas de différence entre monter et descendre du cadran : $\\cos(-x) = \\cos x$ — il est **pair**. Le sinus, lui, change de signe quand on inverse le sens : $\\sin(-x) = -\\sin x$ — il est **impair**. Deux symétries, une économie de travail énorme.`,
        },
        {
          type: 'figure',
          id: 'fig-m2-1',
          src: '/images/t6/fig_M2_1.png',
          legende: `La marée se répète à l'identique : c'est la périodicité, vraie aussi pour $\\cos$ et $\\sin$.`,
          alt: `Le niveau de la marée représenté par une courbe ondulée sur deux cycles identiques.`,
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
          contenu: `On traduit la marée et la montre en propriétés mathématiques.

- « Un tour de plus, même position » → $\\cos(x + 2\\pi) = \\cos x$ et $\\sin(x + 2\\pi) = \\sin x$.
- « Le cosinus ne distingue pas les deux sens » → $\\cos(-x) = \\cos x$ (pair).
- « Le sinus s'inverse avec le sens » → $\\sin(-x) = -\\sin x$ (impair).`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Observation concrète`, `Traduction maths`, `Nom officiel`],
          rows: [
            [`Un tour complet ramène au même point`, `$f(x + 2\\pi) = f(x)$`, `Périodicité de période $2\\pi$`],
            [`Le cosinus ignore le sens de rotation`, `$\\cos(-x) = \\cos x$`, `Fonction paire`],
            [`Le sinus s'inverse avec le sens`, `$\\sin(-x) = -\\sin x$`, `Fonction impaire`],
            [`L'eau reste entre deux niveaux`, `$-1 \\leqslant \\cos x \\leqslant 1$`, `Fonction bornée`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `Ces quatre propriétés sont le moteur qui réduit n'importe quel calcul à un angle du premier quadrant.`,
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
          contenu: `Champion(ne), tu as l'image de la marée qui se répète. La copie attend les mots rigoureux.

**Définition formelle.** Les fonctions $\\cos$ et $\\sin$ sont définies sur $\\mathbb{R}$, **périodiques de période $2\\pi$** : pour tout réel $x$, $\\cos(x + 2\\pi) = \\cos x$ et $\\sin(x + 2\\pi) = \\sin x$. La fonction $\\cos$ est **paire** ($\\cos(-x) = \\cos x$) et la fonction $\\sin$ est **impaire** ($\\sin(-x) = -\\sin x$). Toutes deux sont bornées : pour tout $x$, $-1 \\leqslant \\cos x \\leqslant 1$ et $-1 \\leqslant \\sin x \\leqslant 1$.

**En langage courant.** On n'étudie ces fonctions que sur un intervalle de longueur $2\\pi$ (souvent $\\left[\\,-\\pi\\ ;\\ \\pi\\,\\right]$), puis on complète tout le reste par translations et symétries.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Fonction périodique de période $T$** — pour tout $x$, $f(x + T) = f(x)$.
- **Fonction paire** — courbe symétrique par rapport à l'axe des ordonnées.
- **Fonction impaire** — courbe symétrique par rapport à l'origine du repère.
- **Fonction bornée** — encadrée par deux valeurs fixes, ici $-1$ et $1$.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend que tu justifies une réduction d'intervalle par la phrase : *« Comme $f$ est périodique de période $2\\pi$ et paire (ou impaire), je l'étudie sur tel intervalle, puis je complète par symétrie. »*`,
        },
        {
          type: 'figure',
          id: 'fig-m2-2',
          src: '/images/t6/fig_M2_2.png',
          legende: `Deux ondes décalées d'un quart de tour : $\\sin$ est le $\\cos$ retardé de $\\dfrac{\\pi}{2}$. Toutes deux restent entre $-1$ et $1$.`,
          alt: `Les courbes du cosinus et du sinus sur le même repère.`,
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
          titre: `Règle d'Or — Propriétés et angles associés`,
          contenu: `Pour tout réel $x$ et tout entier $k$ :
$$\\cos(x + 2k\\pi) = \\cos x \\qquad \\sin(x + 2k\\pi) = \\sin x$$
$$\\cos(-x) = \\cos x \\qquad \\sin(-x) = -\\sin x$$
$$\\cos(\\pi - x) = -\\cos x \\qquad \\sin(\\pi - x) = \\sin x$$
$$\\cos(\\pi + x) = -\\cos x \\qquad \\sin(\\pi + x) = -\\sin x$$

**Variations sur une période.** Sur $\\left[\\,0\\ ;\\ \\pi\\,\\right]$, $\\cos$ décroît de $1$ à $-1$. Sur $\\left[\\,-\\dfrac{\\pi}{2}\\ ;\\ \\dfrac{\\pi}{2}\\,\\right]$, $\\sin$ croît de $-1$ à $1$.`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Ne mémorise pas les huit formules d'angles associés en bloc : place le point sur le cercle, lis le signe de l'abscisse et de l'ordonnée, et la formule apparaît d'elle-même.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `$\\cos(\\pi - x) = -\\cos x$, mais $\\sin(\\pi - x) = +\\sin x$. Les deux ne suivent pas la même règle de signe : vérifie toujours sur le cercle avant d'écrire.`,
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
          contenu: `On te demande un cosinus/sinus d'un grand angle, une simplification d'expression avec des angles associés, ou la résolution d'une équation $\\cos x = a$. Repère : « calcule $\\cos$ d'un angle $> 2\\pi$ » → réduis modulo $2\\pi$ ; « simplifie $\\cos(\\pi - x) + \\sin(-x)$ » → applique les angles associés ; « résous $\\cos x = a$ » → cherche l'angle de référence puis ses associés.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Si tu vois…`, `Ce que tu fais`],
          rows: [
            [`Un angle plus grand que $2\\pi$`, `Retire des paquets de $2\\pi$ pour revenir dans un tour.`],
            [`$\\cos(-x)$ ou $\\sin(-x)$`, `Applique la parité : $\\cos$ garde, $\\sin$ change de signe.`],
            [`$\\cos(\\pi \\pm x)$, $\\sin(\\pi \\pm x)$`, `Place le point sur le cercle et lis le signe.`],
            [`$\\cos x = a$ avec $a$ remarquable`, `Trouve l'angle de référence $\\alpha$ : solutions $x = \\pm\\alpha + 2k\\pi$.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure (résoudre cos x = a sur un intervalle)`,
          contenu: `**Étape 1.** Vérifie que $a \\in \\left[\\,-1\\ ;\\ 1\\,\\right]$ (sinon pas de solution) et trouve l'angle de référence $\\alpha$ tel que $\\cos\\alpha = a$.

**Étape 2.** Écris la famille générale : $x = \\alpha + 2k\\pi$ ou $x = -\\alpha + 2k\\pi$, $k \\in \\mathbb{Z}$.

**Étape 3.** Donne à $k$ les valeurs entières qui font tomber $x$ dans l'intervalle demandé.

**Étape 4.** Conclus en listant les solutions retenues.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `- **Encadrement** : si $|a| > 1$, conclus immédiatement « pas de solution ».
- **Contrôle calculatrice** (en radians) : le cosinus de chaque solution doit redonner $a$.`,
        },
        {
          type: 'figure',
          id: 'fig-m2-3',
          src: '/images/t6/fig_M2_3.png',
          legende: `Le cosinus descend puis remonte : un seul aller-retour par période.`,
          alt: `Tableau de variations du cosinus sur une période avec le signe de sa dérivée.`,
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
            [`🟢 BASE`, `Cosinus d'un grand angle`, `Angle supérieur à $2\\pi$`, `Type 1`],
            [`🟡 MOYEN`, `Simplifier avec les angles associés`, `Expression mêlant $-x$, $\\pi - x$, $\\pi + x$`, `Type 2`],
            [`🔴 BAC`, `Résoudre une équation trigonométrique`, `$\\cos x = a$ sur un intervalle imposé`, `Type 3`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Cosinus d'un grand angle.** Calcule $\\cos\\left(\\dfrac{13\\pi}{6}\\right)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `L'angle dépasse $2\\pi$ : on retire un tour complet, puis on lit la valeur remarquable.` },
            { name: `Étape 1`, contenu: `$\\dfrac{13\\pi}{6} = \\dfrac{\\pi}{6} + \\dfrac{12\\pi}{6} = \\dfrac{\\pi}{6} + 2\\pi$.` },
            { name: `Étape 2`, contenu: `Par périodicité, $\\cos\\left(\\dfrac{13\\pi}{6}\\right) = \\cos\\left(\\dfrac{\\pi}{6}\\right)$.` },
          ],
          reponse: `$\\cos\\left(\\dfrac{13\\pi}{6}\\right) = \\dfrac{\\sqrt{3}}{2}$.`,
          conseil: `Mets $2\\pi$ au dénominateur de l'angle pour repérer le tour à retirer d'un coup d'œil.`,
          piege: `$\\dfrac{13\\pi}{6}$ n'est pas un « nouvel » angle : sans la réduction modulo $2\\pi$, tu cherches une valeur qui n'existe pas dans ta table.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$\\dfrac{13\\pi}{6} = \\dfrac{\\pi}{6} + 2\\pi$, donc par périodicité $\\cos\\left(\\dfrac{13\\pi}{6}\\right) = \\cos\\left(\\dfrac{\\pi}{6}\\right) = \\dfrac{\\sqrt{3}}{2}.$

*[Barème : réduction modulo $2\\pi$ : 1 pt · valeur remarquable : 0,5 pt · conclusion : 0,5 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Simplifier avec les angles associés.** Simplifie $A = \\cos(\\pi - x) + \\cos(-x) + \\sin(\\pi + x)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Chaque terme est un angle associé : on applique les formules de signe une par une.` },
            { name: `Étape 1`, contenu: `$\\cos(\\pi - x) = -\\cos x$.` },
            { name: `Étape 2`, contenu: `$\\cos(-x) = \\cos x$ (parité paire) et $\\sin(\\pi + x) = -\\sin x$.` },
          ],
          reponse: `$A = -\\cos x + \\cos x - \\sin x = -\\sin x$.`,
          conseil: `Traite chaque terme isolément au crayon, écris sa forme réduite au-dessus, puis additionne. Tu évites les erreurs de signe en cascade.`,
          piege: `$\\sin(\\pi + x)$ vaut $-\\sin x$, pas $+\\sin x$ : place le point dans le troisième quadrant pour t'en convaincre.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$A = \\cos(\\pi - x) + \\cos(-x) + \\sin(\\pi + x) = -\\cos x + \\cos x - \\sin x = -\\sin x.$

*[Barème : chaque angle associé correct : 0,5 pt × 3 · réduction finale : 1 pt — Total : 2,5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 3 — Résoudre une équation trigonométrique.** Résous dans $\\left[\\,0\\ ;\\ 2\\pi\\,\\right]$ l'équation $\\cos x = \\dfrac{1}{2}$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Équation $\\cos x = a$ avec $a$ remarquable : on trouve l'angle de référence puis ses associés dans l'intervalle.` },
            { name: `Étape 1`, contenu: `L'angle de référence vérifiant $\\cos\\alpha = \\dfrac{1}{2}$ est $\\alpha = \\dfrac{\\pi}{3}$.` },
            { name: `Étape 2`, contenu: `Les solutions générales sont $x = \\dfrac{\\pi}{3} + 2k\\pi$ ou $x = -\\dfrac{\\pi}{3} + 2k\\pi$, $k \\in \\mathbb{Z}$.` },
            { name: `Étape 3`, contenu: `Dans $\\left[\\,0\\ ;\\ 2\\pi\\,\\right]$ : la première donne $\\dfrac{\\pi}{3}$ ; la seconde, avec $k = 1$, donne $-\\dfrac{\\pi}{3} + 2\\pi = \\dfrac{5\\pi}{3}$.` },
          ],
          reponse: `$S = \\left\\{\\dfrac{\\pi}{3}\\ ;\\ \\dfrac{5\\pi}{3}\\right\\}$.`,
          conseil: `Sur le cercle, $\\cos x = a$ donne deux points symétriques par rapport à l'axe des abscisses : pense toujours à la solution « miroir » $-\\alpha$.`,
          piege: `Ne donne pas une seule solution : l'équation $\\cos x = a$ en a presque toujours deux par tour. Oublier $\\dfrac{5\\pi}{3}$ coûte la moitié des points.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$\\cos x = \\dfrac{1}{2} \\iff x = \\dfrac{\\pi}{3} + 2k\\pi$ ou $x = -\\dfrac{\\pi}{3} + 2k\\pi$, $k \\in \\mathbb{Z}$. Dans $\\left[\\,0\\ ;\\ 2\\pi\\,\\right]$, on retient $x = \\dfrac{\\pi}{3}$ et $x = \\dfrac{5\\pi}{3}$. Donc $S = \\left\\{\\dfrac{\\pi}{3}\\ ;\\ \\dfrac{5\\pi}{3}\\right\\}$.

*[Barème : angle de référence : 1 pt · familles de solutions : 1,5 pt · sélection dans l'intervalle : 1 pt · conclusion : 0,5 pt — Total : 4 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Pense périodicité et symétrie. Réponses finales seulement.

- **Exercice 1.** Calcule $\\sin\\left(\\dfrac{15\\pi}{4}\\right)$. *(Réponse : $\\dfrac{15\\pi}{4} = -\\dfrac{\\pi}{4} + 4\\pi$, donc $\\sin = -\\dfrac{\\sqrt2}{2}$.)*
- **Exercice 2.** Simplifie $\\sin(\\pi - x) - \\cos(\\pi + x)$. *(Réponse : $\\sin x + \\cos x$.)*
- **Exercice 3.** Résous $\\sin x = \\dfrac{\\sqrt2}{2}$ dans $\\left[\\,0\\ ;\\ 2\\pi\\,\\right]$. *(Réponse : $x = \\dfrac{\\pi}{4}$ ou $x = \\dfrac{3\\pi}{4}$.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m2',
          titre: `À retenir`,
          contenu: [
            `$\\cos$ et $\\sin$ sont définies sur $\\mathbb{R}$, périodiques de période $2\\pi$ : on réduit tout angle modulo $2\\pi$.`,
            `📘 Vocabulaire officiel : fonction périodique, fonction paire, fonction impaire, fonction bornée.`,
            `$\\cos$ est paire, $\\sin$ est impaire ; les angles associés ($\\pi - x$, $\\pi + x$, $-x$) se lisent sur le cercle.`,
            `Sur une période, $\\cos$ et $\\sin$ font un seul aller-retour entre $-1$ et $1$.`,
            `$\\cos x = a$ (ou $\\sin x = a$) admet en général deux solutions par tour : ne jamais en oublier une.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m2',
          titre: `Fil rouge`,
          contenu: `Le cosinus et le sinus restent sagement entre $-1$ et $1$. Mais il existe une troisième fonction qui, elle, peut grimper jusqu'à l'infini et possède des barrières infranchissables : la **tangente**. D'où viennent ses asymptotes ? C'est le Module 3.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m2',
          titre: `Auto-évaluation — Module 2`,
          contenu: [
            `Je réduis un angle modulo $2\\pi$ avant de chercher son cosinus ou son sinus.`,
            `J'emploie le vocabulaire officiel (périodique, paire, impaire, bornée) pour justifier mes réductions.`,
            `J'applique correctement les angles associés en lisant le signe sur le cercle.`,
            `Je décris les variations de $\\cos$ et $\\sin$ et j'en trace l'allure sur une période.`,
            `Je résous $\\cos x = a$ ou $\\sin x = a$ en donnant toutes les solutions de l'intervalle.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m2',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Les vagues sont domptées. Direction Module 3.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 3.`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : la marée de Grand-Lahou.`,
          ],
        },
      ],
    },
  ],
};
