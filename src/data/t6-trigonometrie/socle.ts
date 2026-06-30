import { Chapitre } from '../../types/course';

export const chapitreSocle: Chapitre = {
  id: 't6-socle',
  titre: `Le Socle — Les 6 Outils de Sécurité`,
  duree: 14,
  niveau: 'BASE',
  xpGain: 15,
  gratuit: true,
  sections: [
    {
      id: 's1',
      titre: `Le Socle : les six outils de sécurité`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg-introa',
          pf: `Marius, la trigonométrie ça m'a toujours embrouillé(e) depuis la Première. J'ai l'impression d'entrer dans un monde où plus rien n'a de sens. On repart vraiment de zéro ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-introb',
          gf: `Pas du tout, Champion(ne). Respire un grand coup. La trigo, c'est juste un nouvel habillage pour des moteurs que tu sais déjà faire tourner. On ne repart jamais de zéro à EDUCTOME. On va simplement dépoussiérer six outils précis dans ta boîte avant d'attaquer le vif du sujet. Au Lycée Classique d'Abidjan, on appelait ça « nettoyer ses armes ». Après ça, plus aucune excuse.`,
        },
      ],
    },
    {
      id: 's-o1',
      titre: `🔧 Outil 1 — La dérivée composée`,
      blocs: [
        {
          type: 'text',
          id: 'b-o1',
          contenu: `Si tu as bien suivi le Tome 5, tu sais qu'on ne dérive presque jamais une fonction « pure » au BAC. Quand une fonction $g$ est emboîtée dans une fonction $f$, on applique la règle de la composition :
$$(f \\circ g)'(x) = g'(x) \\times f'\\big(g(x)\\big).$$

**Exemple.** Pour dériver $\\sin(3x + 1)$, tu dérives d'abord l'intérieur $g(x) = 3x + 1$ (donc $g'(x) = 3$), puis tu multiplies par la dérivée de la fonction principale (qu'on verra au Module 5).`,
        },
        {
          type: 'tip',
          id: 'tip-o1',
          titre: `Le réflexe du Grand Frère`,
          contenu: `Ce geste de « sortir la dérivée de l'intérieur », garde-le intact. C'est exactement lui qui débloquera $(\\sin u)'$, $(\\cos u)'$ et $(\\tan u)'$ au Module 5, Champion(ne).`,
        },
      ],
    },
    {
      id: 's-o2',
      titre: `🔧 Outil 2 — Les primitives et le théorème fondamental`,
      blocs: [
        {
          type: 'text',
          id: 'b-o2',
          contenu: `Au Tome 3, on a appris l'art de faire machine arrière. Pour calculer une aire ou faire le bilan d'une variation, on utilise le théorème fondamental :
$$\\int_a^b f(x)\\,\\mathrm{d}x = F(b) - F(a),$$
où $F$ est une primitive de $f$. Dans ce tome, les fonctions $f$ seront des cosinus et des sinus, mais la méthode des crochets ne bouge pas d'un cheveu : trouve la primitive, remplace par la borne du haut, soustrais la valeur de la borne du bas.`,
        },
        {
          type: 'tip',
          id: 'tip-o2',
          titre: `Le réflexe du Grand Frère`,
          contenu: `Retiens dès maintenant le couple de base : une primitive de $\\cos x$ est $\\sin x$, et une primitive de $\\sin x$ est $-\\cos x$. Ce signe moins, on le reverra partout — il vient de la dérivée du cosinus.`,
        },
      ],
    },
    {
      id: 's-o3',
      titre: `🔧 Outil 3 — Le triangle rectangle et la relation fondamentale`,
      blocs: [
        {
          type: 'text',
          id: 'b-o3',
          contenu: `Avant de parler de radians ou de cercle, rappelle-toi les bases solides du collège. Dans un triangle rectangle, tu connais le SOH-CAH-TOA et le théorème de Pythagore :
$$a^2 + b^2 = c^2.$$

Garde ça précieusement, car c'est l'ancêtre direct de la formule la plus importante de l'année, vraie pour **tout** réel $x$ :
$$\\cos^2 x + \\sin^2 x = 1.$$`,
        },
        {
          type: 'warning',
          id: 'warn-o3',
          titre: `Le piège à éviter`,
          contenu: `$\\cos^2 x$ se lit $(\\cos x)^2$, pas $\\cos(x^2)$. Cette confusion d'écriture est un point de vigilance classique sur la copie.`,
        },
        {
          type: 'tip',
          id: 'tip-o3',
          titre: `Le réflexe du Grand Frère`,
          contenu: `Dès qu'on te donne $\\sin x$ et qu'on te demande $\\cos x$ (ou l'inverse), tu dégaines cette relation : $\\cos x = \\pm\\sqrt{1 - \\sin^2 x}$, le signe étant choisi selon le quadrant. On s'en sert dès le Module 2.`,
        },
      ],
    },
    {
      id: 's-o4',
      titre: `🔧 Outil 4 — Les valeurs remarquables du premier quadrant`,
      blocs: [
        {
          type: 'text',
          id: 'b-o4',
          contenu: `Toute la trigonométrie de Terminale repose sur une poignée d'angles que tu dois connaître par cœur. Pas par cœur bête : par cœur compris, en les lisant sur le cercle. Voici ta table de référence sur $\\left[\\,0\\ ;\\ \\dfrac{\\pi}{2}\\,\\right]$ :`,
        },
        {
          type: 'table',
          id: 'tbl-valeurs',
          headers: [`Angle (rad)`, `$0$`, `$\\dfrac{\\pi}{6}$`, `$\\dfrac{\\pi}{4}$`, `$\\dfrac{\\pi}{3}$`, `$\\dfrac{\\pi}{2}$`],
          rows: [
            [`$\\cos$`, `$1$`, `$\\dfrac{\\sqrt3}{2}$`, `$\\dfrac{\\sqrt2}{2}$`, `$\\dfrac{1}{2}$`, `$0$`],
            [`$\\sin$`, `$0$`, `$\\dfrac{1}{2}$`, `$\\dfrac{\\sqrt2}{2}$`, `$\\dfrac{\\sqrt3}{2}$`, `$1$`],
          ],
        },
        {
          type: 'tip',
          id: 'tip-o4',
          titre: `Le réflexe du Grand Frère`,
          contenu: `Observe : pour le cosinus on lit $\\dfrac{\\sqrt{4}}{2}, \\dfrac{\\sqrt{3}}{2}, \\dfrac{\\sqrt{2}}{2}, \\dfrac{\\sqrt{1}}{2}, \\dfrac{\\sqrt{0}}{2}$ — soit $1, \\dfrac{\\sqrt3}{2}, \\dfrac{\\sqrt2}{2}, \\dfrac12, 0$. Le sinus, c'est la même liste à l'envers. Avec cette astuce, tu reconstruis la table en dix secondes même sous le stress.`,
        },
      ],
    },
    {
      id: 's-o5',
      titre: `🔧 Outil 5 — Résoudre une équation-produit et lire un signe`,
      blocs: [
        {
          type: 'text',
          id: 'b-o5',
          contenu: `Beaucoup d'équations trigonométriques du BAC se ramènent, après factorisation, à une **équation-produit**. Le principe est celui de la classe de Seconde et il ne change jamais :
$$A \\times B = 0 \\iff A = 0 \\ \\text{ou} \\ B = 0.$$

**Exemple.** Pour résoudre $\\sin x\\,(2\\cos x - 1) = 0$, on traite séparément $\\sin x = 0$ et $2\\cos x - 1 = 0$, c'est-à-dire $\\cos x = \\dfrac{1}{2}$.`,
        },
        {
          type: 'warning',
          id: 'warn-o5',
          titre: `Le piège à éviter`,
          contenu: `Ne « simplifie » jamais en divisant les deux côtés par $\\sin x$ : tu perdrais les solutions où $\\sin x = 0$. On factorise, on n'élimine pas.`,
        },
        {
          type: 'tip',
          id: 'tip-o5',
          titre: `Le réflexe du Grand Frère`,
          contenu: `Lire le signe d'un produit (règle des signes sur un tableau) te servira aussi pour les **inéquations** trigonométriques du Module 6. Même outil, deux usages.`,
        },
      ],
    },
    {
      id: 's-o6',
      titre: `🔧 Outil 6 — Parité, symétries et réduction de l'intervalle d'étude`,
      blocs: [
        {
          type: 'text',
          id: 'b-o6',
          contenu: `Une fonction est **paire** si $f(-x) = f(x)$ (courbe symétrique par rapport à l'axe des ordonnées) et **impaire** si $f(-x) = -f(x)$ (courbe symétrique par rapport à l'origine). Tu as déjà rencontré ces notions dans l'étude générale des fonctions.

En trigonométrie, elles deviennent une arme d'économie : le cosinus est pair, le sinus est impair, et les deux sont périodiques. Résultat : au lieu d'étudier une fonction sur $\\mathbb{R}$ tout entier, tu te restreins à un petit intervalle, puis tu **complètes par symétrie et par translation**.`,
        },
        {
          type: 'tip',
          id: 'tip-o6',
          titre: `Le réflexe du Grand Frère`,
          contenu: `Réduire l'intervalle d'étude n'est pas de la triche, c'est de la stratégie de caïman : tu fais le quart du travail et tu obtiens cent pour cent de la courbe. C'est le cœur de l'étude de fonction du Module 6, Champion(ne).`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `🚀 Récap du Socle — Quel outil pour quel module ?`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-recap',
          headers: [`Outil réveillé ici`, `Tu en auras besoin dans…`],
          rows: [
            [`Outil 1 : La dérivée composée`, `M5 — pour $(\\sin u)'$, $(\\cos u)'$, $(\\tan u)'$.`],
            [`Outil 2 : Primitives & théorème fondamental`, `M5 et M6 — pour intégrer cosinus et sinus.`],
            [`Outil 3 : Triangle rectangle & relation $\\cos^2+\\sin^2=1$`, `M1, M2, M4 — la formule reine de l'année.`],
            [`Outil 4 : Valeurs remarquables`, `M1 à M6 — la base de tout calcul d'angle.`],
            [`Outil 5 : Équation-produit & signe`, `M2, M3, M6 — pour résoudre équations et inéquations.`],
            [`Outil 6 : Parité, symétries & réduction d'intervalle`, `M2 et M6 — pour l'étude complète de fonction.`],
          ],
        },
        {
          type: 'text',
          id: 'b-fin',
          contenu: `Voilà, Champion(ne), tes six outils sont aiguisés. Range-les à portée de main : à partir d'ici, chaque module va piocher dedans. On démarre par le Module 1, le cercle trigonométrique et les radians. Faut pas gnan, on avance ensemble.`,
        },
      ],
    },
  ],
};
