import { Chapitre } from '../../types/course';

export const chapitreM4: Chapitre = {
  id: 't10-m4',
  titre: `Module 4 — Les Racines n-ièmes`,
  duree: 26,
  niveau: 'BAC',
  xpGain: 35,
  objectifs: [
    `Déterminer les racines n-ièmes de l'unité`,
    `Placer ces racines régulièrement sur le cercle (polygone régulier)`,
    `Compter exactement les n racines, sans en oublier`,
    `Déterminer les racines n-ièmes d'un complexe quelconque`,
    `Résoudre une équation z puissance n = a avec la formule de Moivre`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, quand on me demande de résoudre $z^4 = 1$, j'écris $z = 1$ et $z = -1$, et je passe à la suite. C'est bon, non ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Doucement, Champion(ne) ! Dans $\\mathbb{C}$, une équation $z^4 = 1$ a exactement **quatre** solutions, pas deux. Tu viens d'en oublier la moitié, et le correcteur, lui, compte. La bonne nouvelle, c'est qu'elles se rangent toutes parfaitement, à intervalles réguliers sur un cercle. On va apprendre à les placer comme on dispose des gens autour d'un rond-point.`,
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
          contenu: `Imagine le grand rond-point d'un carrefour d'Adjamé. Tu veux y placer plusieurs vendeurs parfaitement répartis tout autour, pour que personne ne se gêne. Tu en mets un premier quelque part. Puis, pour chacun des suivants, tu fais exactement le même quart de tour (ou le même tiers de tour) supplémentaire, jusqu'à revenir au premier.

Si tu veux $4$ vendeurs, tu avances d'un quart de tour à chaque fois : ils dessinent un carré. Si tu en veux $3$, tu avances d'un tiers de tour : ils forment un triangle équilatéral. C'est exactement ça, les racines n-ièmes : $n$ points tous à la même distance du centre, séparés par le même angle, qui découpent le cercle en parts égales comme une tarte partagée équitablement.`,
        },
        {
          type: 'figure',
          id: 'fig-m4-1',
          src: '/images/t10/fig_M4_1.png',
          legende: `Les racines quatrièmes de l'unité forment un carré parfait inscrit dans le cercle.`,
          alt: `Un plan complexe avec le cercle unité et les quatre points 1, i, -1, -i reliés en carré.`,
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
          contenu: `On traduit le rond-point en langage mathématique, brique par brique.

- Le centre du rond-point → l'origine $O$
- Tous les vendeurs à la même distance → même module $r$
- Le même quart (ou tiers) de tour → l'écart d'angle $\\dfrac{2\\pi}{n}$
- Le premier vendeur → la racine $z_0$
- Le tour complet refermé → on s'arrête à $k = n - 1$`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène du rond-point`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Le centre`, `$O$`, `L'origine du plan`],
            [`Même distance pour tous`, `$|z_k| = r$ constant`, `Tous sur un même cercle`],
            [`Le même pas de rotation`, `$\\dfrac{2\\pi}{n}$`, `L'écart d'angle entre deux racines`],
            [`Le nombre de vendeurs`, `$k = 0, 1, \\dots, n-1$`, `Exactement $n$ racines`],
            [`La répartition`, `polygone régulier`, `Les racines découpent le cercle en parts égales`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `On peut maintenant écrire les définitions officielles.`,
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
          contenu: `Champion(ne), le rond-point te donne l'image ; ta copie réclame la formule exacte.

**Définition formelle.** Les **racines n-ièmes de l'unité** sont les solutions de $z^n = 1$ :
$$z_k = e^{i\\frac{2k\\pi}{n}}, \\quad k \\in \\lbrace 0, 1, \\dots, n-1 \\rbrace.$$
Plus généralement, les **racines n-ièmes** d'un complexe $Z_0 = r e^{i\\theta}$ sont :
$$z_k = r^{\\frac{1}{n}}\\, e^{i\\frac{\\theta + 2k\\pi}{n}}, \\quad k \\in \\lbrace 0, 1, \\dots, n-1 \\rbrace.$$

**En langage courant.** Un même module pour toutes, des angles qui montent par pas de $\\dfrac{2\\pi}{n}$.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Racine n-ième de l'unité** — solution de $z^n = 1$.
- **Polygone régulier** — la figure formée par les $n$ racines sur le cercle.
- **Module commun** $r^{1/n}$ — la même distance au centre pour toutes.
- **Pas angulaire** $\\dfrac{2\\pi}{n}$ — l'écart entre deux racines consécutives.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Il y a **exactement $n$ racines** : de $k = 0$ à $k = n - 1$. Le correcteur vérifie le compte. Au-delà de $k = n - 1$, on retombe sur les mêmes.`,
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
          titre: `Règle d'Or — Résoudre z puissance n = a`,
          contenu: `Écris $a$ sous forme exponentielle $a = r e^{i\\theta}$. Les $n$ solutions sont :
$$z_k = r^{\\frac{1}{n}}\\, e^{i\\frac{\\theta + 2k\\pi}{n}}, \\qquad k = 0, 1, \\dots, n-1.$$

Cas particulier $z^n = 1$ (donc $r = 1$, $\\theta = 0$) :
$$z_k = e^{i\\frac{2k\\pi}{n}}, \\qquad k = 0, 1, \\dots, n-1.$$`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Trouve d'abord $z_0$ (avec $k = 0$), puis multiplie de proche en proche par $e^{i\\frac{2\\pi}{n}}$ : chaque racine est la précédente ayant fait un pas de plus.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Ne t'arrête jamais à deux ou trois racines : si l'énoncé demande les racines quatrièmes, il en faut **quatre** (de $k = 0$ à $k = 3$). Compter, c'est gagner des points.`,
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
          contenu: `Repère le degré $n$ : c'est le nombre de racines à produire. Repère le second membre : s'il vaut $1$, ce sont les racines de l'unité ; sinon, mets-le sous forme exponentielle d'abord.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Si l'équation est...`, `Alors ta méthode EDUCTOME`],
          rows: [
            [`$z^n = 1$`, `Formule $z_k = e^{i\\frac{2k\\pi}{n}}$, pour $k$ de $0$ à $n-1$.`],
            [`$z^n = a$ (réel ou complexe)`, `Écrire $a = re^{i\\theta}$, puis $z_k = r^{1/n}e^{i\\frac{\\theta + 2k\\pi}{n}}$.`],
            [`« Place les racines sur le cercle »`, `Tracer le polygone régulier à $n$ sommets, module $r^{1/n}$.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure (résoudre z puissance n = a)`,
          contenu: `**Étape 1.** Mets $a$ sous forme exponentielle : calcule son module $r$ et son argument $\\theta$.

**Étape 2.** Écris la formule générale $z_k = r^{1/n}\\,e^{i\\frac{\\theta + 2k\\pi}{n}}$.

**Étape 3.** Donne explicitement chaque racine pour $k = 0, 1, \\dots, n-1$, et repasse-les en forme algébrique si on le demande.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `Compte tes racines : il en faut exactement $n$. Et leur somme vaut toujours $0$ pour les racines de l'unité (le polygone est centré sur $O$) : un autocontrôle gratuit, Champion(ne).`,
        },
        {
          type: 'figure',
          id: 'fig-m4-2',
          src: '/images/t10/fig_M4_2.png',
          legende: `Les racines cubiques de l'unité forment un triangle équilatéral ; leur somme vaut $0$.`,
          alt: `Un plan complexe avec le cercle unité et les trois racines cubiques de l'unité reliées en triangle équilatéral.`,
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
            [`🟡 MOYEN`, `Racines de l'unité`, `« Résous $z^n = 1$ »`, `Type 1`],
            [`🔴 BAC`, `Racines n-ièmes d'un complexe`, `« Résous $z^n = a$ » avec $a \\neq 1$`, `Type 2`],
            [`🟢 BASE`, `Placement sur le cercle`, `« Place les solutions et nomme la figure »`, `Type 1`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 1 — Racines quatrièmes de l'unité** *(MOYEN)*. Résous dans $\\mathbb{C}$ l'équation $z^4 = 1$, puis place les solutions dans le plan.`,
          etapes: [
            { name: `Diagnostic`, contenu: `$z^n = 1$ : on applique directement la formule des racines de l'unité avec $n = 4$.` },
            { name: `Étape 1`, contenu: `$z_k = e^{i\\frac{2k\\pi}{4}} = e^{i\\frac{k\\pi}{2}}$ pour $k \\in \\lbrace 0, 1, 2, 3 \\rbrace$.` },
            { name: `Étape 2`, contenu: `On calcule chaque racine : $1 \\to i \\to -1 \\to -i$.` },
          ],
          reponse: `$S = \\lbrace 1 \\,;\\, i \\,;\\, -1 \\,;\\, -i \\rbrace$ : les quatre racines forment un carré inscrit dans le cercle unité.`,
          conseil: `Chaque racine est la précédente tournée d'un quart de tour : $1 \\to i \\to -1 \\to -i$.`,
          piege: `Quatre racines, donc quatre valeurs de $k$ : ne t'arrête pas à $1$ et $-1$.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `L'équation $z^4 = 1$ admet $4$ solutions : $z_k = e^{i\\frac{k\\pi}{2}}$, $k \\in \\lbrace 0, 1, 2, 3 \\rbrace$.
- $k = 0$ : $z_0 = e^{0} = 1$
- $k = 1$ : $z_1 = e^{i\\frac{\\pi}{2}} = i$
- $k = 2$ : $z_2 = e^{i\\pi} = -1$
- $k = 3$ : $z_3 = e^{i\\frac{3\\pi}{2}} = -i$

L'ensemble des solutions est $S = \\lbrace 1 \\,;\\, i \\,;\\, -1 \\,;\\, -i \\rbrace$. Placées dans le plan, ces quatre racines forment un carré inscrit dans le cercle unité.

*[Barème type BAC : formule = 1 pt — les quatre racines = 1 pt — figure = 0,5 pt — Total : 2,5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 2 — Racines cubiques d'un complexe** *(BAC)*. Résous dans $\\mathbb{C}$ l'équation $z^3 = -8$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `$z^n = a$ avec $a = -8 \\neq 1$ : on met $a$ sous forme exponentielle, puis on applique la formule générale.` },
            { name: `Étape 1`, contenu: `$-8 = 8\\,e^{i\\pi}$ : module $r = 8$, argument $\\theta = \\pi$.` },
            { name: `Étape 2`, contenu: `$z_k = 8^{1/3}\\, e^{i\\frac{\\pi + 2k\\pi}{3}} = 2\\,e^{i\\frac{\\pi + 2k\\pi}{3}}$, $k \\in \\lbrace 0, 1, 2 \\rbrace$.` },
          ],
          reponse: `$S = \\lbrace 1 + i\\sqrt{3} \\,;\\, -2 \\,;\\, 1 - i\\sqrt{3} \\rbrace$ : trois racines de module $2$ formant un triangle équilatéral.`,
          conseil: `$8^{1/3} = 2$ : le module commun des trois racines est $2$, pas $8$.`,
          piege: `Le second membre $-8$ est un réel négatif : son argument est $\\pi$, pas $0$. Ne le confonds pas avec $z^3 = 8$.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `On écrit $-8 = 8\\,e^{i\\pi}$. Les solutions de $z^3 = -8$ sont $z_k = 2\\,e^{i\\frac{\\pi + 2k\\pi}{3}}$, $k \\in \\lbrace 0, 1, 2 \\rbrace$.
- $k = 0$ : $z_0 = 2\\,e^{i\\frac{\\pi}{3}} = 2\\left(\\dfrac{1}{2} + i\\dfrac{\\sqrt{3}}{2}\\right) = 1 + i\\sqrt{3}$
- $k = 1$ : $z_1 = 2\\,e^{i\\pi} = -2$
- $k = 2$ : $z_2 = 2\\,e^{i\\frac{5\\pi}{3}} = 2\\left(\\dfrac{1}{2} - i\\dfrac{\\sqrt{3}}{2}\\right) = 1 - i\\sqrt{3}$

L'ensemble des solutions est $S = \\lbrace 1 + i\\sqrt{3} \\,;\\, -2 \\,;\\, 1 - i\\sqrt{3} \\rbrace$. Ces trois racines forment un triangle équilatéral de rayon $2$.

*[Barème type BAC : forme exponentielle de $-8$ = 1 pt — formule générale = 1 pt — les trois racines = 1,5 pt — Total : 3,5 pts]*`,
        },
        {
          type: 'figure',
          id: 'fig-m4-3',
          src: '/images/t10/fig_M4_3.png',
          legende: `Les trois racines cubiques de $-8$ : même module $2$, séparées de $\\dfrac{2\\pi}{3}$.`,
          alt: `Un plan complexe avec le cercle de rayon 2 et les trois points 1 + i racine 3, -2 et 1 - i racine 3 en triangle équilatéral.`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-a',
          pf: `Grand Frère, comment je suis sûr de n'avoir oublié aucune racine ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-b',
          gf: `Deux contrôles, Champion(ne). Un : compte-les, il en faut exactement $n$. Deux : pour les racines de l'unité, additionne-les — tu dois retomber sur $0$, parce que le polygone est parfaitement centré sur l'origine. Si la somme ne fait pas $0$, c'est qu'il t'en manque une.`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Compte toujours tes racines. Réponses finales seulement.

- **Exercice 1.** Résous $z^3 = 1$. *(Réponse : $1$, $e^{i\\frac{2\\pi}{3}}$, $e^{i\\frac{4\\pi}{3}}$.)*
- **Exercice 2.** Résous $z^2 = i$. *(Réponse : $e^{i\\frac{\\pi}{4}}$ et $e^{i\\frac{5\\pi}{4}}$, soit $\\pm\\dfrac{\\sqrt{2}}{2}(1 + i)$.)*
- **Exercice 3.** Combien de solutions a $z^6 = 1$, et que vaut leur somme ? *(Réponse : $6$ solutions, somme $= 0$.)*`,
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
            `$z^n = 1$ a **exactement $n$ solutions** : $z_k = e^{i\\frac{2k\\pi}{n}}$, de $k = 0$ à $n-1$.`,
            `📘 Vocabulaire officiel : racine n-ième de l'unité, polygone régulier, pas angulaire.`,
            `Pour $z^n = a$ : on met $a = re^{i\\theta}$, puis $z_k = r^{1/n}e^{i\\frac{\\theta + 2k\\pi}{n}}$.`,
            `Les racines forment un **polygone régulier** ; pour l'unité, leur **somme vaut $0$**.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m4',
          titre: `Fil rouge`,
          contenu: `Tu sais placer des points parfaitement sur le cercle. Au Module 5, on arrête de seulement les placer : on va calculer des distances, des angles et des lieux entiers de points, directement avec les affixes. La géométrie redevient du calcul.`,
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
            `Je sais trouver les racines n-ièmes de l'unité avec $e^{i\\frac{2k\\pi}{n}}$.`,
            `J'emploie le vocabulaire officiel : racine n-ième, polygone régulier.`,
            `Je sais compter exactement les $n$ racines, sans en oublier.`,
            `Je sais résoudre $z^n = a$ en passant par la forme exponentielle de $a$.`,
            `Je sais placer les racines en polygone régulier sur le cercle.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m4',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Direction le Module 5, la géométrie complexe.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et la procédure de $z^n = a$.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel, l'image du rond-point.`,
          ],
        },
      ],
    },
  ],
};
