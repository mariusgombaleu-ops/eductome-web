import { Chapitre } from '../../types/course';

export const chapitreAnnexe: Chapitre = {
  id: 't6-annexe',
  titre: `Annexes — Formulaire & Réflexes BAC`,
  duree: 12,
  niveau: 'BASE',
  xpGain: 10,
  sections: [
    {
      id: 's-a',
      titre: `Annexe A — Formulaire complet de trigonométrie`,
      blocs: [
        {
          type: 'text',
          id: 'b-a-intro',
          contenu: `Voici ton tableau de bord. Toutes les formules indispensables du programme ivoirien sont réunies pour tes révisions de dernière minute.`,
        },
        {
          type: 'table',
          id: 'tbl-valeurs',
          titre: `A.1 — Valeurs remarquables`,
          headers: [`Angle (rad)`, `$0$`, `$\\dfrac{\\pi}{6}$`, `$\\dfrac{\\pi}{4}$`, `$\\dfrac{\\pi}{3}$`, `$\\dfrac{\\pi}{2}$`],
          rows: [
            [`$\\cos$`, `$1$`, `$\\dfrac{\\sqrt3}{2}$`, `$\\dfrac{\\sqrt2}{2}$`, `$\\dfrac{1}{2}$`, `$0$`],
            [`$\\sin$`, `$0$`, `$\\dfrac{1}{2}$`, `$\\dfrac{\\sqrt2}{2}$`, `$\\dfrac{\\sqrt3}{2}$`, `$1$`],
            [`$\\tan$`, `$0$`, `$\\dfrac{\\sqrt3}{3}$`, `$1$`, `$\\sqrt3$`, `—`],
          ],
        },
        {
          type: 'text',
          id: 'b-a2',
          titre: `A.2 — Relation fondamentale et angles associés`,
          contenu: `$$\\cos^2 x + \\sin^2 x = 1$$
$$\\cos(-x) = \\cos x \\qquad \\sin(-x) = -\\sin x \\qquad \\tan(-x) = -\\tan x$$
$$\\cos(\\pi - x) = -\\cos x \\qquad \\sin(\\pi - x) = \\sin x$$
$$\\cos(\\pi + x) = -\\cos x \\qquad \\sin(\\pi + x) = -\\sin x$$
$$\\cos\\!\\left(\\dfrac{\\pi}{2} - x\\right) = \\sin x \\qquad \\sin\\!\\left(\\dfrac{\\pi}{2} - x\\right) = \\cos x$$`,
        },
        {
          type: 'text',
          id: 'b-a3',
          titre: `A.3 — Formules d'addition et de duplication`,
          contenu: `$$\\cos(a \\pm b) = \\cos a\\cos b \\mp \\sin a\\sin b$$
$$\\sin(a \\pm b) = \\sin a\\cos b \\pm \\cos a\\sin b$$
$$\\cos 2x = \\cos^2 x - \\sin^2 x = 2\\cos^2 x - 1 = 1 - 2\\sin^2 x \\qquad \\sin 2x = 2\\sin x\\cos x$$
$$\\cos^2 x = \\dfrac{1 + \\cos 2x}{2} \\qquad \\sin^2 x = \\dfrac{1 - \\cos 2x}{2}$$`,
        },
        {
          type: 'text',
          id: 'b-a4',
          titre: `A.4 — Limites et dérivées`,
          contenu: `$$\\displaystyle\\lim_{x\\to 0}\\dfrac{\\sin x}{x} = 1 \\qquad \\displaystyle\\lim_{x\\to 0}\\dfrac{\\tan x}{x} = 1 \\qquad \\displaystyle\\lim_{x\\to 0}\\dfrac{1 - \\cos x}{x^2} = \\dfrac{1}{2}$$
$$(\\sin u)' = u'\\cos u \\qquad (\\cos u)' = -u'\\sin u \\qquad (\\tan u)' = \\dfrac{u'}{\\cos^2 u}$$`,
        },
        {
          type: 'text',
          id: 'b-a5',
          titre: `A.5 — Équations de référence`,
          contenu: `$$\\cos x = \\cos\\alpha \\iff x = \\pm\\alpha + 2k\\pi \\quad (k \\in \\mathbb{Z})$$
$$\\sin x = \\sin\\alpha \\iff x = \\alpha + 2k\\pi \\ \\text{ou} \\ x = \\pi - \\alpha + 2k\\pi \\quad (k \\in \\mathbb{Z})$$
$$\\tan x = \\tan\\alpha \\iff x = \\alpha + k\\pi \\quad (k \\in \\mathbb{Z})$$`,
        },
      ],
    },
    {
      id: 's-b',
      titre: `Annexe B — Charte typographique BAC`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-charte',
          headers: [`Règle`, `Exemple correct`],
          rows: [
            [`Intervalles avec crochets`, `]−π ; π]   [0 ; 2π[`],
            [`Virgule décimale (pas de point)`, `1,57   −0,5`],
            [`Coordonnées avec point-virgule`, `M(cos x ; sin x)`],
            [`Ensemble privé d'une valeur`, `ℝ \\ { π/2 + kπ }`],
            [`Limite en romain + displaystyle`, `lim (x→0) sin(x)/x = 1`],
            [`Fractions en dfrac`, `dfrac{√3}{2}`],
            [`Espace insécable avant ; : ! ?`, `mot ; mot`],
            [`Asymptote en phrase complète`, `« La droite x = π/2 est asymptote verticale à la courbe. »`],
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
          headers: [`Terme`, `Définition à recopier sur la copie`],
          rows: [
            [`Radian`, `Mesure d'angle interceptant un arc de longueur égale au rayon.`],
            [`Cercle trigonométrique`, `Cercle de centre O, de rayon 1, orienté dans le sens direct.`],
            [`Mesure principale`, `Unique mesure d'un angle dans ]−π ; π].`],
            [`Fonction périodique`, `Pour tout x, f(x + T) = f(x) ; T est la période.`],
            [`Fonction paire / impaire`, `cos est paire ; sin et tan sont impaires.`],
            [`Valeur interdite`, `Réel où le cosinus s'annule : tan n'y est pas définie.`],
            [`Asymptote verticale`, `Droite x = π/2 + kπ approchée par la courbe de tan.`],
            [`Linéarisation`, `Écriture d'un carré trigonométrique à l'aide de cos 2x.`],
            [`Forme R cos(x − φ)`, `Réécriture d'une somme a cos x + b sin x en une onde unique.`],
            [`Intervalle d'étude`, `Intervalle réduit où l'on étudie avant de compléter par symétrie.`],
          ],
        },
      ],
    },
    {
      id: 's-d',
      titre: `Annexe D — Les 10 réflexes BAC`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-reflexes',
          titre: `Les 10 réflexes à graver`,
          contenu: [
            `Je règle ma calculatrice en **radians** avant le premier chiffre.`,
            `Je ramène tout angle géant à sa mesure dans un tour ($2\\pi$, ou $\\pi$ pour la tangente).`,
            `Devant $\\cos x = a$ ou $\\sin x = a$, je cherche **les deux** solutions par tour.`,
            `Pour la tangente, j'ajoute des paquets de $\\pi$, jamais de $2\\pi$.`,
            `Je pose toujours la condition $\\cos x \\neq 0$ avant d'utiliser une tangente.`,
            `Dans $\\cos(a+b)$, le signe central est un **moins** ; dans $\\sin(a+b)$, un **plus**.`,
            `Je linéarise tout $\\cos^2 x$ ou $\\sin^2 x$ **avant** d'intégrer.`,
            `La dérivée d'un cosinus porte **toujours** un signe moins.`,
            `Pour une inéquation, je dessine le cercle et je hachure l'arc solution.`,
            `J'écris mes phrases d'asymptote, de période et de parité **en toutes lettres**.`,
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
          contenu: `Les erreurs qui coûtent le plus cher au BAC — repère-les pour ne plus jamais les commettre.`,
        },
        {
          type: 'table',
          id: 'tbl-cimetiere',
          headers: [`L'erreur enterrée ici`, `La correction qui sauve tes points`],
          rows: [
            [`Calculatrice en degrés`, `Toujours vérifier le mode RAD avant de calculer.`],
            [`$\\cos(a+b) = \\cos a + \\cos b$`, `Appliquer la formule d'addition complète, signe moins compris.`],
            [`Une seule solution pour $\\cos x = a$`, `En donner deux par tour : $\\alpha$ et $-\\alpha$ (ou $\\pi - \\alpha$ pour $\\sin$).`],
            [`Diviser par $\\sin x$ pour simplifier`, `Factoriser : on perd des solutions en divisant.`],
            [`Oublier le signe moins de $(\\cos x)'$`, `$(\\cos u)' = -u'\\sin u$, le moins est obligatoire.`],
            [`Intégrer $\\cos^2 x$ directement`, `Linéariser d'abord avec $\\cos 2x$.`],
            [`Période $2\\pi$ pour $\\cos(2x)$`, `Période $= \\dfrac{2\\pi}{a}$, donc $\\pi$ ici.`],
            [`Bornes fermées sur une inégalité stricte`, `Crochets ouverts quand l'inégalité est stricte.`],
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
          headers: [`Compétence BAC TleD`, `Module`, `Statut`],
          rows: [
            [`Radians, cercle, mesure principale`, `M1`, `✅ Couvert`],
            [`Cosinus, sinus : périodicité, parité, variations, courbes`, `M2`, `✅ Couvert`],
            [`Fonction tangente, asymptotes`, `M3`, `✅ Couvert`],
            [`Formules d'addition, duplication, linéarisation`, `M4`, `✅ Couvert`],
            [`Transformation $a\\cos x + b\\sin x$`, `M4`, `✅ Couvert`],
            [`Limites trigonométriques de référence`, `M5`, `✅ Couvert`],
            [`Dérivées $(\\sin u)'$, $(\\cos u)'$, $(\\tan u)'$`, `M5`, `✅ Couvert`],
            [`Équations et inéquations trigonométriques`, `M6`, `✅ Couvert`],
            [`Étude complète d'une fonction trigonométrique`, `M6`, `✅ Couvert`],
          ],
        },
        {
          type: 'text',
          id: 'b-f-fin',
          contenu: `**On a gâté le coin, Champion(ne) !** Tu es arrivé(e) au bout du Tome 6. Ce mur que tout le monde redoute, tu viens de l'escalader brique par brique. La trigonométrie n'a plus de secret pour toi : tu places, tu résous, tu dérives, tu étudies. Le jour du BAC, tu seras celui ou celle qui comprend ce que les autres ont appris par cœur.

Garde cette énergie, Champion(ne). On se retrouve au Tome 7 pour apprivoiser le hasard. En attendant, révise avec ce tome, refais les Exercices-Types, et fais confiance à ta méthode.

**Reste connecté(e) à EDUCTOME :**

- 📱 WhatsApp : (+225) 07 99 50 63 00
- 🛒 Boutique : selar.com/m/eductome
- 📘 Facebook : Eductome

**Marius Dion — Ton Grand Frère**
*EDUCTOME — Apprendre sans limites. La méthode avant la chance.*`,
        },
      ],
    },
  ],
};
