import { Chapitre } from '../../types/course';

export const chapitreAnnexe: Chapitre = {
  id: 't11-annexe',
  titre: `Annexes — Formulaire & Réflexes BAC`,
  duree: 12,
  niveau: 'BASE',
  xpGain: 10,
  sections: [
    {
      id: 's-a',
      titre: `Annexe A — Formulaire complet du Tome 11`,
      blocs: [
        {
          type: 'text',
          id: 'b-a-intro',
          contenu: `Voici ton arsenal complet des équations différentielles. Aucune de ces formes ne doit t'échapper le jour J.`,
        },
        {
          type: 'table',
          id: 'tbl-formulaire',
          headers: [`Type d'équation`, `Solution générale`],
          rows: [
            [`$y' + ay = 0$`, `$y(x) = Ce^{-ax}$, $C \\in \\mathbb{R}$`],
            [`$y' + ay = b$ (avec $a \\neq 0$)`, `$y(x) = Ce^{-ax} + \\dfrac{b}{a}$`],
            [`$y' + ay = h(x)$`, `$y(x) = g(x) + Ce^{-ax}$, $g$ solution particulière`],
            [`$y'' = 0$`, `$y(x) = ax + b$`],
            [`$y'' + \\omega^2 y = 0$`, `$y(x) = A\\cos(\\omega x) + B\\sin(\\omega x)$`],
            [`$y'' - \\omega^2 y = 0$ (ou $y'' = \\omega^2 y$)`, `$y(x) = Ae^{\\omega x} + Be^{-\\omega x}$`],
            [`Refroidissement (Newton)`, `$T(t) = T_a + (T_0 - T_a)e^{-kt}$`],
            [`Désintégration`, `$N(t) = N_0 e^{-\\lambda t}$, demi-vie $\\tau = \\dfrac{\\ln 2}{\\lambda}$`],
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
            [`Dérivées en notation prime`, `$y'$, $y''$ (et non $\\dfrac{dy}{dx}$ au BAC ivoirien)`],
            [`Virgule décimale (jamais le point)`, `$0{,}05$ et non $0.05$`],
            [`Intervalles, crochets inversés`, `$]0 \\,;\\, +\\infty[$ ; $[0 \\,;\\, +\\infty[$`],
            [`Ensemble des réels`, `$C \\in \\mathbb{R}$, $A, B \\in \\mathbb{R}$`],
            [`Fractions en displaystyle`, `$\\dfrac{b}{a}$, $\\dfrac{\\ln 2}{\\lambda}$`],
            [`Exponentielle et signe`, `$e^{-ax}$ pour $y' + ay = 0$ (l'exposant est négatif)`],
            [`Limite en romain`, `$\\displaystyle\\lim_{x \\to +\\infty} y(x) = \\dfrac{b}{a}$`],
            [`Espaces insécables avant ; : ! ?`, `« la pulsation $\\omega$ ; la constante $C$ »`],
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
            [`Équation homogène (sans second membre)`, `Le membre de droite vaut $0$ : $y' + ay = 0$`],
            [`Équation homogène associée`, `La même équation avec $0$ à la place du second membre`],
            [`Solution générale`, `La famille de toutes les solutions, avec sa ou ses constantes`],
            [`Solution particulière`, `Une solution qui marche (palier $\\dfrac{b}{a}$ ou polynôme)`],
            [`Principe de superposition`, `« $f$ solution de $(E)$ $\\iff f - g$ solution de $(E')$ »`],
            [`Régime permanent / transitoire`, `Le palier qui reste / la partie qui s'efface`],
            [`Pulsation $\\omega$`, `La racine du coefficient de $y$ au second ordre`],
            [`Conditions initiales`, `$y(x_0) = y_0$ ; au second ordre, $y(0)$ ET $y'(0)$`],
            [`Demi-vie (période radioactive)`, `La durée $\\tau$ telle que $N(\\tau) = \\dfrac{N_0}{2}$`],
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
            [`1`, `Identifier l'ordre (premier $y'$ ou second $y''$) avant tout.`],
            [`2`, `Isoler $y'$ (ou $y''$) en divisant si un coefficient traîne.`],
            [`3`, `Résoudre l'équation homogène associée en premier.`],
            [`4`, `Ne jamais oublier la constante : $C$ au 1er ordre, $A$ et $B$ au 2nd.`],
            [`5`, `Second membre constant → palier $y_p = \\dfrac{b}{a}$ (jamais $b$ seul).`],
            [`6`, `Second membre variable → solution particulière + superposition.`],
            [`7`, `Second ordre : signe + → $\\cos/\\sin$ ; signe − → exponentielles ; $0$ → affine.`],
            [`8`, `Dériver la solution générale avant d'utiliser $y'(0)$.`],
            [`9`, `Refroidissement → changement de variable $u = T - T_a$.`],
            [`10`, `Toujours vérifier par substitution (c'est noté au BAC).`],
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
            [`Oublier la constante $C$`, `Sans $C$ (ou $A$ et $B$), l'équation n'est pas résolue.`],
            [`Écrire le palier $y_p = b$`, `Le palier est $\\dfrac{b}{a}$ : on divise toujours par $a$.`],
            [`Se tromper de signe dans l'exposant`, `$y' + ay = 0$ donne $e^{-ax}$ (exposant négatif).`],
            [`Une seule condition au second ordre`, `Il en faut DEUX : une sur $y(0)$, une sur $y'(0)$.`],
            [`Confondre $\\cos/\\sin$ et exponentielles`, `Signe + → oscille ; signe − → diverge. Jamais l'inverse.`],
            [`Oublier de dériver avant $y'(0)$`, `La condition sur $y'(0)$ exige la dérivée de la solution.`],
            [`Oublier d'ajouter $T_a$ dans un refroidissement`, `Revenir à $T = u + T_a$ après le changement de variable.`],
            [`Sauter la vérification`, `La substitution finale est notée : écris-la sur ta copie.`],
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
            [`Premier ordre homogène $y' + ay = 0$`, `Module 1`],
            [`Second membre constant et régime permanent`, `Module 2`],
            [`Second membre variable et superposition`, `Module 3`],
            [`Second ordre, oscillations $y'' + \\omega^2 y = 0$`, `Module 4`],
            [`Second ordre, exponentielles et cas affine`, `Module 5`],
            [`Applications : refroidissement, désintégration, RC`, `Module 6`],
          ],
        },
      ],
    },
  ],
};
