import { Chapitre } from '../../types/course';

export const chapitreAnnexe: Chapitre = {
  id: 't9-annexe',
  titre: `Annexes — Formulaire & Réflexes BAC`,
  duree: 12,
  niveau: 'BASE',
  xpGain: 10,
  sections: [
    {
      id: 's-a',
      titre: `Annexe A — Formulaire complet du Tome 9`,
      blocs: [
        {
          type: 'text',
          id: 'b-a-intro',
          contenu: `Voici ton arsenal complet de l'espace. Aucune de ces formules ne doit t'échapper le jour J.`,
        },
        {
          type: 'table',
          id: 'tbl-formulaire',
          headers: [`Notion`, `Formule`],
          rows: [
            [`Vecteur $\\vec{AB}$`, `$(x_B - x_A \\,;\\, y_B - y_A \\,;\\, z_B - z_A)$`],
            [`Milieu de $[AB]$`, `$\\left(\\dfrac{x_A+x_B}{2} \\,;\\, \\dfrac{y_A+y_B}{2} \\,;\\, \\dfrac{z_A+z_B}{2}\\right)$`],
            [`Norme / distance`, `$AB = \\sqrt{(x_B-x_A)^2 + (y_B-y_A)^2 + (z_B-z_A)^2}$`],
            [`Colinéarité`, `$\\vec{u} = k\\vec{v}$ (coordonnées proportionnelles)`],
            [`Coplanarité`, `$\\vec{w} = a\\vec{u} + b\\vec{v}$`],
            [`Barycentre (coordonnées)`, `$x_G = \\dfrac{1}{S}\\sum \\alpha_i x_i$ (idem $y$, $z$), $S = \\sum\\alpha_i \\neq 0$`],
            [`Réduction`, `$\\sum \\alpha_i \\vec{MA_i} = S\\,\\vec{MG}$`],
            [`Produit scalaire`, `$\\vec{u}\\cdot\\vec{v} = x_1x_2 + y_1y_2 + z_1z_2$`],
            [`Orthogonalité`, `$\\vec{u} \\perp \\vec{v} \\iff \\vec{u}\\cdot\\vec{v} = 0$`],
            [`Mesure d'angle`, `$\\cos\\theta = \\dfrac{\\vec{u}\\cdot\\vec{v}}{\\|\\vec{u}\\|\\,\\|\\vec{v}\\|}$`],
            [`Représentation paramétrique`, `$x = x_A + ta \\,;\\, y = y_A + tb \\,;\\, z = z_A + tc$`],
            [`Équation d'un plan`, `$ax + by + cz + d = 0$, normal $\\vec{n}(a ; b ; c)$`],
            [`Distance point / plan`, `$d(\\Omega, P) = \\dfrac{|ax_0 + by_0 + cz_0 + d'|}{\\sqrt{a^2 + b^2 + c^2}}$`],
            [`Équation d'une sphère`, `$(x-a)^2 + (y-b)^2 + (z-c)^2 = r^2$`],
            [`Intersection sphère / plan`, `$d>r$ : vide ; $d=r$ : tangent ; $d<r$ : cercle`],
            [`Produit vectoriel (bonus)`, `$\\vec{u}\\wedge\\vec{v} = (y_1z_2 - z_1y_2 \\,;\\, z_1x_2 - x_1z_2 \\,;\\, x_1y_2 - y_1x_2)$`],
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
            [`Coordonnées avec point-virgule`, `$A(3 \\,;\\, 5 \\,;\\, -1)$`],
            [`Virgule décimale (jamais le point)`, `$1{,}33$ et non $1.33$`],
            [`Intervalles, crochets inversés`, `$]a \\,;\\, b[$ ; $[0 \\,;\\, +\\infty[$`],
            [`Ensembles en blackboard`, `$\\mathbb{R}$, $t \\in \\mathbb{R}$`],
            [`Fractions en displaystyle`, `$\\dfrac{a}{b}$`],
            [`Vecteurs avec flèche`, `$\\vec{u}$, $\\vec{AB}$, $\\vec{n}$`],
            [`Norme avec doubles barres`, `$\\|\\vec{u}\\|$`],
            [`Orthogonalité`, `$\\vec{u} \\perp \\vec{v}$`],
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
            [`Colinéaires`, `Pour prouver un alignement de points`],
            [`Coplanaires`, `Pour prouver l'appartenance à un même plan`],
            [`Barycentre / isobarycentre`, `Point d'équilibre pondéré / coefficients égaux`],
            [`Orthogonaux`, `Pour des vecteurs de produit scalaire nul`],
            [`Vecteur directeur`, `La direction d'une droite`],
            [`Vecteur normal`, `La perpendiculaire d'un plan`],
            [`Représentation paramétrique`, `L'écriture en $t$ d'une droite`],
            [`Équation cartésienne`, `L'écriture $ax+by+cz+d=0$ d'un plan`],
            [`Droites gauches`, `Non coplanaires, sans point commun`],
            [`Projeté orthogonal`, `Pied de la perpendiculaire d'un point sur un plan`],
            [`Plan tangent / section plane`, `Sphère touchée en un point / coupée selon un cercle`],
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
            [`1`, `Tout vecteur $\\vec{AB}$ = arrivée moins départ ($B - A$).`],
            [`2`, `Système de coplanarité / intersection : résoudre 2 lignes, vérifier la 3ᵉ.`],
            [`3`, `Deux droites comparées : $t$ pour l'une, $t'$ pour l'autre.`],
            [`4`, `Droite $\\perp$ plan = directeur colinéaire au normal (pas orthogonal).`],
            [`5`, `Plans perpendiculaires = normaux orthogonaux.`],
            [`6`, `Vecteur normal lu directement sur les coefficients de l'équation.`],
            [`7`, `Distance : valeur absolue au numérateur, racine au dénominateur.`],
            [`8`, `Sphère tangente : la distance du centre au plan = le rayon.`],
            [`9`, `Intersection sphère/plan : comparer $d$ et $r$, jamais $d^2$ et $r^2$ à la hâte.`],
            [`10`, `Nommer le cas final avec le mot exact, en phrase complète.`],
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
            [`Écrire $\\vec{AB} = A - B$`, `Toujours $B - A$ : arrivée moins départ`],
            [`Conclure un alignement sur une seule coordonnée`, `Le même $k$ doit valoir sur les trois`],
            [`Oublier de vérifier la 3ᵉ ligne du système`, `C'est elle qui tranche coplanarité / intersection`],
            [`Même paramètre pour deux droites`, `$t$ et $t'$, jamais le même`],
            [`Confondre directeur et normal`, `Directeur suit la droite ; normal est $\\perp$ au plan`],
            [`Distance négative (valeur absolue oubliée)`, `Une distance est toujours $\\geq 0$`],
            [`Barycentre avec $\\sum\\alpha_i = 0$`, `Vérifier la somme : sinon, pas de barycentre`],
            [`Signe oublié dans $(z - z_\\Omega)$`, `Avec $z_\\Omega = -1$, on écrit $(z + 1)$`],
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
            [`Vecteurs, colinéarité, coplanarité`, `Module 1`],
            [`Barycentre, centre de gravité`, `Module 2`],
            [`Produit scalaire, orthogonalité, angles`, `Module 3`],
            [`Représentation paramétrique, équation de plan`, `Module 4`],
            [`Positions relatives (droites, plans)`, `Module 5`],
            [`Orthogonalité, vecteur normal, projeté`, `Module 6`],
            [`Distances, sphères, intersections`, `Module 7`],
          ],
        },
      ],
    },
  ],
};
