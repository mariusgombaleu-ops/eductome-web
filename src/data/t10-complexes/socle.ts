import { Chapitre } from '../../types/course';

export const chapitreSocle: Chapitre = {
  id: 't10-socle',
  titre: `Le Socle — Ta Boîte à Outils`,
  duree: 20,
  niveau: 'BASE',
  xpGain: 20,
  gratuit: true,
  objectifs: [
    `Réactiver la trigonométrie, le second degré et les puissances utiles au tome`,
    `Maîtriser le cycle des puissances de i et l'affixe d'un point du plan`,
    `Poser le module comme distance et découvrir l'exponentielle complexe`,
  ],
  sections: [
    {
      id: 's-intro',
      titre: `On dépoussière la caisse à outils`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, tu m'as dit qu'on entrait dans un monde magique et tout neuf. Alors pourquoi on doit encore réviser de vieilles formules de Première et de Seconde ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Parce qu'on ne construit pas un immeuble au Plateau sur du sable, Champion(ne). Les nombres complexes, c'est neuf, oui, mais pour les manipuler tu vas réutiliser tes vieux outils. Si ton tournevis est rouillé, tu vas te fatiguer pour rien. On va donc dépoussiérer six outils avant de monter sur le chantier. Lis-les calmement, refais les petits exemples chiffrés à la main, et les modules ne seront que de la lecture.`,
        },
        {
          type: 'text',
          id: 'b-intro',
          contenu: `Champion(ne), ce Socle est ta boîte à outils. Chaque outil sera réutilisé plus loin dans un module précis — je te dis à chaque fois où. C'est ton assurance tranquillité pour tout le tome.`,
        },
      ],
    },
    {
      id: 's-o1',
      titre: `🔧 Outil 1 — La trigonométrie et le cercle (souvenirs du T6)`,
      blocs: [
        {
          type: 'text',
          id: 'b-o1',
          contenu: `Dans ce tome, on va parler de rotation, d'angle et de boussole. Qui dit angle dit cosinus et sinus. Tu ne survivras pas dans le plan complexe si tu hésites sur tes valeurs remarquables. On travaille en **radians**, jamais en degrés.
$$\\cos 0 = 1 \\quad \\cos\\dfrac{\\pi}{6} = \\dfrac{\\sqrt{3}}{2} \\quad \\cos\\dfrac{\\pi}{4} = \\dfrac{\\sqrt{2}}{2} \\quad \\cos\\dfrac{\\pi}{3} = \\dfrac{1}{2} \\quad \\cos\\dfrac{\\pi}{2} = 0$$
$$\\sin 0 = 0 \\quad \\sin\\dfrac{\\pi}{6} = \\dfrac{1}{2} \\quad \\sin\\dfrac{\\pi}{4} = \\dfrac{\\sqrt{2}}{2} \\quad \\sin\\dfrac{\\pi}{3} = \\dfrac{\\sqrt{3}}{2} \\quad \\sin\\dfrac{\\pi}{2} = 1$$

Le cercle trigonométrique te donne aussi les signes selon le quadrant : à droite de l'axe vertical le cosinus est positif, au-dessus de l'axe horizontal le sinus est positif.`,
        },
        {
          type: 'tip',
          id: 'tip-o1',
          titre: `Où tu vas l'utiliser`,
          contenu: `Dès M2, pour lire l'argument d'un nombre complexe, et jusqu'au M6 pour les angles de rotation.`,
        },
        {
          type: 'warning',
          id: 'warn-o1',
          titre: `Piège à éviter`,
          contenu: `Ne confonds jamais $\\dfrac{\\pi}{6}$ (30°) et $\\dfrac{\\pi}{3}$ (60°). Le petit angle a le petit sinus. Garde un mini-cercle au coin de ton brouillon.`,
        },
      ],
    },
    {
      id: 's-o2',
      titre: `🔧 Outil 2 — Les équations du second degré`,
      blocs: [
        {
          type: 'text',
          id: 'b-o2',
          contenu: `Tu connais ça depuis la Première. Pour résoudre $ax^2 + bx + c = 0$, tu calcules le discriminant :
$$\\Delta = b^2 - 4ac$$

Jusqu'à l'an dernier, dès que tu trouvais $\\Delta < 0$, tu écrivais fièrement « pas de solution dans $\\mathbb{R}$ » et tu passais à la suite. Par exemple, $x^2 + x + 1 = 0$ donne $\\Delta = 1 - 4 = -3 < 0$ : terminé, dans le réel.`,
        },
        {
          type: 'warning',
          id: 'warn-o2',
          titre: `Piège à éviter`,
          contenu: `Désormais, en Terminale, un $\\Delta$ négatif n'est plus une impasse, c'est une porte d'entrée. C'est justement pour régler ce cas qu'on a inventé les nombres complexes : un discriminant négatif donnera deux racines complexes conjuguées. Ton vieil outil apprend juste un nouveau tour.`,
        },
        {
          type: 'tip',
          id: 'tip-o2',
          titre: `Où tu vas l'utiliser`,
          contenu: `Au cœur du M3 (équations dans $\\mathbb{C}$), et dès qu'un sujet de géométrie part d'une équation à résoudre.`,
        },
      ],
    },
    {
      id: 's-o3',
      titre: `🔧 Outil 3 — Les puissances et le cycle de i`,
      blocs: [
        {
          type: 'text',
          id: 'b-o3',
          contenu: `La règle de base sur les puissances ne change pas : les exposants s'additionnent quand on multiplie.
$$z^{p+q} = z^p \\cdot z^q$$

Tout le tome repose sur la convention $i^2 = -1$. À partir d'elle, tu déduis toutes les puissances de $i$ :
$$i^0 = 1 \\qquad i^1 = i \\qquad i^2 = -1 \\qquad i^3 = -i \\qquad i^4 = 1$$

Et boum, on retombe sur $1$. Le cycle recommence tous les quatre crans. Pour calculer $i^{2026}$, pas besoin de transpirer : tu divises l'exposant par $4$ et tu regardes le reste. Ici $2026 = 4 \\times 506 + 2$, donc $i^{2026} = i^2 = -1$.`,
        },
        {
          type: 'tip',
          id: 'tip-o3',
          titre: `Où tu vas l'utiliser`,
          contenu: `Dès M1, pour gérer les grandes puissances de $i$ et nettoyer les développements.`,
        },
        {
          type: 'warning',
          id: 'warn-o3',
          titre: `Piège à éviter`,
          contenu: `Ne confonds pas le reste $0, 1, 2, 3$. Reste $0 \\to 1$, reste $1 \\to i$, reste $2 \\to -1$, reste $3 \\to -i$.`,
        },
      ],
    },
    {
      id: 's-o4',
      titre: `🔧 Outil 4 — Le repère et l'affixe du plan (le pont avec le T9)`,
      blocs: [
        {
          type: 'text',
          id: 'b-o4',
          contenu: `En T9, tu repérais un point de l'espace par trois coordonnées. Dans le plan complexe, on garde le repère orthonormé direct $(O \\,;\\, \\vec{u} \\,;\\, \\vec{v})$, mais on range les **deux** coordonnées d'un point dans un seul nombre : son **affixe**.

À tout point $M(x ; y)$ on associe l'affixe $z = x + iy$. Inversement, le nombre $z = x + iy$ a pour image le point $M(x ; y)$. La partie réelle donne l'abscisse, la partie imaginaire donne l'ordonnée.
$$M(x ; y) \\;\\longleftrightarrow\\; z = x + iy$$

De même, le vecteur $\\vec{u}(x ; y)$ a pour affixe $z_{\\vec{u}} = x + iy$. On passe donc des coordonnées $(x ; y)$ du T9 à un seul objet $z$ : c'est exactement le même point, écrit autrement.`,
        },
        {
          type: 'tip',
          id: 'tip-o4',
          titre: `Où tu vas l'utiliser`,
          contenu: `Dès M1 pour placer un nombre, et à plein régime aux M5 et M6 (géométrie et transformations).`,
        },
        {
          type: 'warning',
          id: 'warn-o4',
          titre: `Piège à éviter`,
          contenu: `L'affixe d'un **vecteur** $\\vec{AB}$, c'est $z_B - z_A$ (arrivée moins départ), exactement comme en T9. Ne la confonds pas avec l'affixe d'un point.`,
        },
      ],
    },
    {
      id: 's-o5',
      titre: `🔧 Outil 5 — Le module : une distance, une valeur absolue en 2D`,
      blocs: [
        {
          type: 'text',
          id: 'b-o5',
          contenu: `En Première, la valeur absolue $|x|$ mesurait la distance d'un réel à $0$ sur la droite. Dans le plan complexe, le **module** $|z|$ fait exactement la même chose, mais en deux dimensions : c'est la distance entre le point d'affixe $z$ et l'origine $O$.
$$|z| = \\sqrt{x^2 + y^2} \\qquad (z = x + iy)$$

C'est le théorème de Pythagore appliqué au triangle de côtés $x$ et $y$. Par exemple $|3 + 4i| = \\sqrt{9 + 16} = \\sqrt{25} = 5$. Et la distance entre deux points $A$ et $B$ d'affixes $z_A$ et $z_B$ est tout simplement $AB = |z_B - z_A|$.`,
        },
        {
          type: 'tip',
          id: 'tip-o5',
          titre: `Où tu vas l'utiliser`,
          contenu: `M1 (définition), M2 (forme exponentielle), et surtout M5 (distances et lieux de points).`,
        },
        {
          type: 'warning',
          id: 'warn-o5',
          titre: `Piège à éviter`,
          contenu: `Un module est toujours positif ou nul. Si tu obtiens un module négatif, tu as fait une erreur de signe sous la racine.`,
        },
      ],
    },
    {
      id: 's-o6',
      titre: `🔧 Outil 6 — L'exponentielle complexe (Euler et Moivre)`,
      blocs: [
        {
          type: 'text',
          id: 'b-o6',
          contenu: `On pose l'outil le plus puissant du tome. Pour un angle $\\theta$, on note :
$$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$$

C'est la **formule d'Euler**. Ce nombre a toujours un module égal à $1$ (il est sur le cercle). Et il se comporte comme une vraie exponentielle : les angles s'additionnent quand on multiplie.
$$e^{i\\theta_1} \\cdot e^{i\\theta_2} = e^{i(\\theta_1 + \\theta_2)} \\qquad \\left(e^{i\\theta}\\right)^n = e^{in\\theta}$$

Cette dernière égalité, c'est la **formule de Moivre** : elle transforme une puissance impossible en une simple multiplication d'angle. Par exemple $\\left(e^{i\\frac{\\pi}{4}}\\right)^8 = e^{i2\\pi} = 1$.`,
        },
        {
          type: 'tip',
          id: 'tip-o6',
          titre: `Où tu vas l'utiliser`,
          contenu: `M2 (puissances et produits), M4 (racines n-ièmes), M6 (rotations).`,
        },
        {
          type: 'warning',
          id: 'warn-o6',
          titre: `Piège à éviter`,
          contenu: `$e^{i\\theta}$ n'est pas un nombre réel : ne tape jamais ça bêtement à la calculatrice. C'est une écriture qui code un point du cercle, à l'angle $\\theta$.`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `La carte de ta boîte à outils`,
      blocs: [
        {
          type: 'text',
          id: 'b-recap',
          contenu: `Voici la carte de ta boîte à outils : à chaque ligne, l'outil et le module où il entre en action.`,
        },
        {
          type: 'table',
          id: 'tbl-recap',
          headers: [`Outil du Socle`, `Formule clé`, `Modules où tu l'utilises`],
          rows: [
            [`1. Trigonométrie et cercle`, `$\\cos$, $\\sin$ des valeurs remarquables (en radian)`, `M2, M4, M6`],
            [`2. Équations du 2nd degré`, `$\\Delta = b^2 - 4ac$`, `M3, et partout`],
            [`3. Puissances et cycle de $i$`, `$i^2 = -1$, cycle de période 4`, `M1, M2`],
            [`4. Repère et affixe`, `$M(x ; y) \\leftrightarrow z = x + iy$`, `M1, M5, M6`],
            [`5. Module = distance 2D`, `$|z| = \\sqrt{x^2 + y^2}$ et $AB = |z_B - z_A|$`, `M1, M2, M5`],
            [`6. Exponentielle $e^{i\\theta}$`, `$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ ; Moivre $(e^{i\\theta})^n = e^{in\\theta}$`, `M2, M4, M6`],
          ],
        },
        {
          type: 'text',
          id: 'b-fin',
          contenu: `Ta caisse à outils est prête, Champion(ne). On monte sur le chantier : direction le Module 1.`,
        },
      ],
    },
  ],
};
