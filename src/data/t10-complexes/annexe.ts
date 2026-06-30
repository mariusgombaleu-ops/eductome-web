import { Chapitre } from '../../types/course';

export const chapitreAnnexe: Chapitre = {
  id: 't10-annexe',
  titre: `Annexes — Formulaire & Réflexes BAC`,
  duree: 12,
  niveau: 'BASE',
  xpGain: 10,
  sections: [
    {
      id: 's-a',
      titre: `Annexe A — Formulaire complet du Tome 10`,
      blocs: [
        {
          type: 'text',
          id: 'b-a-intro',
          contenu: `Voici ton arsenal complet des complexes. Aucune de ces formules ne doit t'échapper le jour J.`,
        },
        {
          type: 'table',
          id: 'tbl-formulaire',
          headers: [`Notion`, `Formule`],
          rows: [
            [`Forme algébrique`, `$z = a + ib$, avec $a = \\mathrm{Re}(z)$ et $b = \\mathrm{Im}(z)$`],
            [`Conjugué`, `$\\overline{z} = a - ib$, avec $z\\overline{z} = a^2 + b^2 = |z|^2$`],
            [`Module`, `$|z| = \\sqrt{a^2 + b^2}$ et $AB = |z_B - z_A|$`],
            [`Cycle de $i$`, `$i^2 = -1$, $i^3 = -i$, $i^4 = 1$ (période 4)`],
            [`Module et argument`, `$\\cos\\theta = \\dfrac{a}{r}$, $\\sin\\theta = \\dfrac{b}{r}$ avec $r = |z|$`],
            [`Forme trigonométrique`, `$z = r(\\cos\\theta + i\\sin\\theta)$`],
            [`Forme exponentielle`, `$z = re^{i\\theta}$`],
            [`Produit et quotient`, `$z_1 z_2 = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}$, $\\dfrac{z_1}{z_2} = \\dfrac{r_1}{r_2}e^{i(\\theta_1 - \\theta_2)}$`],
            [`Formule de Moivre`, `$(re^{i\\theta})^n = r^n e^{in\\theta}$`],
            [`Formules d'Euler`, `$\\cos\\theta = \\dfrac{e^{i\\theta} + e^{-i\\theta}}{2}$, $\\sin\\theta = \\dfrac{e^{i\\theta} - e^{-i\\theta}}{2i}$`],
            [`2nd degré, $\\Delta < 0$ (coeff. réels)`, `$z = \\dfrac{-b \\pm i\\sqrt{|\\Delta|}}{2a}$ (racines conjuguées)`],
            [`Racines carrées de $a + ib$`, `système $x^2 - y^2 = a$, $x^2 + y^2 = |Z_0|$, $2xy = b$`],
            [`Racines n-ièmes de $re^{i\\theta}$`, `$z_k = r^{1/n}e^{i\\frac{\\theta + 2k\\pi}{n}}$, $k = 0, \\dots, n-1$`],
            [`Affixe, distance, angle`, `$\\vec{AB} : z_B - z_A$ ; $AB = |z_B - z_A|$ ; angle $= \\arg\\!\\frac{z_C - z_A}{z_B - z_A}$`],
            [`Transformation $z' = az + b$`, `centre $\\omega = \\dfrac{b}{1 - a}$, rapport $|a|$, angle $\\arg(a)$`],
          ],
        },
      ],
    },
    {
      id: 's-b',
      titre: `Annexe B — Charte typographique du BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b-b-intro',
          contenu: `La forme compte autant que le fond. Le correcteur repère un(e) Champion(ne) à sa rigueur d'écriture.`,
        },
        {
          type: 'table',
          id: 'tbl-charte',
          headers: [`Règle`, `Écriture correcte`],
          rows: [
            [`Coordonnées et affixe avec point-virgule`, `$A(3 \\,;\\, 5)$, repère $(O \\,;\\, \\vec{u} \\,;\\, \\vec{v})$`],
            [`Virgule décimale (jamais le point)`, `$1{,}5$ et non $1.5$`],
            [`Intervalles, crochets inversés`, `$]a \\,;\\, b[$ ; $[0 \\,;\\, +\\infty[$`],
            [`Ensembles en blackboard`, `$\\mathbb{R}$, $\\mathbb{C}$, $z \\in \\mathbb{C}$`],
            [`Fractions en displaystyle`, `$\\dfrac{a}{b}$, $\\dfrac{b}{1 - a}$`],
            [`Conjugué et module`, `$\\overline{z}$ et $|z|$`],
            [`Argument modulo $2\\pi$`, `$\\arg(z) = \\dfrac{\\pi}{3} \\pmod{2\\pi}$`],
            [`Espaces insécables avant ; : ! ?`, `« le module $r$ ; l'argument $\\theta$ »`],
          ],
        },
      ],
    },
    {
      id: 's-c',
      titre: `Annexe C — Vocabulaire officiel du BAC`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-vocab',
          headers: [`Terme officiel`, `Ce qu'il faut écrire / quand l'employer`],
          rows: [
            [`Partie réelle / imaginaire`, `Les deux réels $a$ et $b$ de $z = a + ib$`],
            [`Imaginaire pur`, `Un complexe de partie réelle nulle ($z = ib$)`],
            [`Conjugué`, `$\\overline{z} = a - ib$, symétrique par rapport à l'axe réel`],
            [`Module / argument`, `La distance à $O$ / l'angle, défini modulo $2\\pi$`],
            [`Racines conjuguées`, `Les deux solutions d'un 2nd degré réel quand $\\Delta < 0$`],
            [`Racine évidente / factorisation`, `Une racine connue $z_0$ / l'écriture $(z - z_0)(\\dots)$`],
            [`Racine n-ième de l'unité`, `Solution de $z^n = 1$, sur le polygone régulier`],
            [`Alignement / orthogonalité`, `Quotient d'affixes réel / imaginaire pur`],
            [`Médiatrice / cercle`, `Lieux : $|z - z_A| = |z - z_B|$ / $|z - z_A| = r$`],
            [`Translation / homothétie / rotation / similitude`, `Les natures de $z' = az + b$ selon $a$`],
          ],
        },
      ],
    },
    {
      id: 's-d',
      titre: `Annexe D — Les 10 réflexes BAC`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-reflexes',
          headers: [`N°`, `Le réflexe`],
          rows: [
            [`1`, `Tout $i^2$ se remplace immédiatement par $-1$.`],
            [`2`, `Diviser = multiplier haut et bas par le conjugué du dénominateur.`],
            [`3`, `Argument = cosinus ET sinus, pour le bon quadrant.`],
            [`4`, `Grande puissance = forme exponentielle + Moivre.`],
            [`5`, `$\\Delta < 0$ (coeff. réels) = deux racines conjuguées avec $i\\sqrt{|\\Delta|}$.`],
            [`6`, `Coefficients complexes = extraire $\\delta$, racine carrée de $\\Delta$, par identification.`],
            [`7`, `Équation de degré $n$ = exactement $n$ solutions, sans en oublier.`],
            [`8`, `Distance $AB = |z_B - z_A|$ ; angle $= \\arg\\frac{z_C - z_A}{z_B - z_A}$.`],
            [`9`, `Alignement = quotient réel ; orthogonalité = quotient imaginaire pur.`],
            [`10`, `Centre d'une transformation $= \\dfrac{b}{1 - a}$, jamais $b$.`],
          ],
        },
      ],
    },
    {
      id: 's-e',
      titre: `Annexe E — Le cimetière des points`,
      blocs: [
        {
          type: 'text',
          id: 'b-e-intro',
          contenu: `Les erreurs qui coûtent le plus cher au BAC sur ce chapitre. Évite-les, et tu gardes tes points.`,
        },
        {
          type: 'table',
          id: 'tbl-cimetiere',
          headers: [`L'erreur à éviter`, `La bonne pratique`],
          rows: [
            [`Remplacer $i^2$ par $1$ dans un moment de panique`, `On le grave : $i^2 = -1$, toujours`],
            [`Oublier de distribuer le signe : $z_A - z_B = a + ib - c + id$`, `Le signe s'applique à tout : $a - c + i(b - d)$`],
            [`Conclure l'argument avec le seul sinus de la machine`, `Vérifier le cosinus ET le sinus pour le quadrant`],
            [`Croire que $z' = 2iz + 3$ est une homothétie`, `$a$ non réel pur = ça tourne : similitude directe`],
            [`S'arrêter à $z_0$ et $z_1$ pour les racines cubiques`, `Une équation de degré $n$ a exactement $n$ racines`],
            [`Laisser un $i$ au dénominateur d'un résultat`, `Nettoyer en multipliant par le conjugué`],
            [`Confondre l'affixe $z_B - z_A$ et la distance $|z_B - z_A|$`, `L'une porte une direction, l'autre une longueur`],
            [`Écrire $\\arg(z_1 + z_2) = \\arg(z_1) + \\arg(z_2)$`, `L'argument gère les produits, pas les sommes`],
          ],
        },
      ],
    },
    {
      id: 's-f',
      titre: `Annexe F — Carte de couverture BAC`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-couverture',
          headers: [`Thème BAC`, `Module qui le couvre`],
          rows: [
            [`Forme algébrique, conjugué, module, division`, `Module 1`],
            [`Formes trigonométrique et exponentielle, Moivre`, `Module 2`],
            [`Équations dans $\\mathbb{C}$, racines carrées, factorisation`, `Module 3`],
            [`Racines n-ièmes de l'unité et d'un complexe`, `Module 4`],
            [`Affixes, distances, angles, alignement, lieux`, `Module 5`],
            [`Transformations $z' = az + b$ et suites de points`, `Module 6`],
          ],
        },
      ],
    },
  ],
};
