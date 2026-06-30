import { Chapitre } from '../../types/course';

export const chapitreSocle: Chapitre = {
  id: 't11-socle',
  titre: `Le Socle — Ta Boîte à Outils`,
  duree: 20,
  niveau: 'BASE',
  xpGain: 20,
  gratuit: true,
  objectifs: [
    `Réactiver la dérivée de l'exponentielle et les dérivées secondes de cos et sin`,
    `Maîtriser le geste-clé : vérifier qu'une fonction est solution par substitution`,
    `Gérer la constante C, la condition initiale et le système 2×2`,
  ],
  sections: [
    {
      id: 's-intro',
      titre: `On dépoussière la caisse à outils`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, je regarde ce chapitre... Inconnue qui devient une fonction, dérivée première, dérivée seconde. Mon cerveau chauffe déjà. Il faut encore mémoriser un nouveau dictionnaire de formules ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Faut pas avoir peur, Champion(ne) ! C'est ça la bonne nouvelle : tu ne repars pas de zéro. Tu vas réutiliser les armes que tu as déjà forgées depuis le début de l'année. On va juste les ressortir et les huiler. Si ton tournevis est rouillé, tu te fatigues pour rien. On dépoussière donc six outils avant de monter sur le chantier. Lis-les calmement, refais les petits exemples à la main, et les modules deviendront de la simple lecture.`,
        },
        {
          type: 'text',
          id: 'b-intro',
          contenu: `Champion(ne), ce Socle est ta boîte à outils. Chaque outil est réutilisé plus loin dans un module précis — je te dis à chaque fois où. C'est ton assurance tranquillité pour tout le tome.`,
        },
      ],
    },
    {
      id: 's-o1',
      titre: `🔧 Outil 1 — La dérivée de l'exponentielle (le marteau du T5)`,
      blocs: [
        {
          type: 'text',
          id: 'b-o1',
          contenu: `La fonction exponentielle, c'est le cœur battant de ce tome. Souviens-toi de la règle d'or : quand on dérive $e^{ax}$, le coefficient $a$ descend devant, tout simplement.
$$\\left(e^{ax}\\right)' = a\\,e^{ax}$$

Quelques exemples à refaire de tête : $\\left(e^{3x}\\right)' = 3e^{3x}$ ; $\\left(e^{-2x}\\right)' = -2e^{-2x}$ ; $\\left(5e^{-x}\\right)' = -5e^{-x}$.`,
        },
        {
          type: 'tip',
          id: 'tip-o1',
          titre: `Où tu vas l'utiliser`,
          contenu: `Partout. Dès M1 pour écrire les solutions, et jusqu'au M6 pour les vérifier.`,
        },
        {
          type: 'warning',
          id: 'warn-o1',
          titre: `Piège à éviter`,
          contenu: `Ne perds pas le signe : dériver $e^{-2x}$ donne $-2e^{-2x}$, pas $2e^{-2x}$. Le signe du coefficient descend avec lui.`,
        },
      ],
    },
    {
      id: 's-o2',
      titre: `🔧 Outil 2 — Les dérivées secondes de cos et sin (le ressort du T6)`,
      blocs: [
        {
          type: 'text',
          id: 'b-o2',
          contenu: `Pour les phénomènes qui vibrent, on passe au second ordre. Et qui dit oscillation dit trigonométrie. Tu dois savoir dériver $\\cos(\\omega x)$ et $\\sin(\\omega x)$ deux fois sans trembler.
$$\\left(\\cos(\\omega x)\\right)' = -\\omega\\sin(\\omega x) \\qquad \\left(\\cos(\\omega x)\\right)'' = -\\omega^2\\cos(\\omega x)$$
$$\\left(\\sin(\\omega x)\\right)' = \\omega\\cos(\\omega x) \\qquad \\left(\\sin(\\omega x)\\right)'' = -\\omega^2\\sin(\\omega x)$$

Retiens l'essentiel : dériver deux fois un cosinus ou un sinus, ça fait ressortir un facteur $-\\omega^2$ devant la fonction de départ. C'est exactement ce qui fera apparaître l'équation des oscillateurs.`,
        },
        {
          type: 'tip',
          id: 'tip-o2',
          titre: `Où tu vas l'utiliser`,
          contenu: `Au M4 (oscillations $y'' + \\omega^2 y = 0$).`,
        },
        {
          type: 'warning',
          id: 'warn-o2',
          titre: `Piège à éviter`,
          contenu: `$\\left(\\cos(\\omega x)\\right)''$ n'est pas $\\omega^2\\cos(\\omega x)$ : il y a un signe moins. Deux dérivations, deux signes moins qui se combinent en $-\\omega^2$.`,
        },
      ],
    },
    {
      id: 's-o3',
      titre: `🔧 Outil 3 — Vérifier qu'une fonction est solution (le geste-clé)`,
      blocs: [
        {
          type: 'text',
          id: 'b-o3',
          contenu: `Voici le geste le plus rentable de tout le tome, Champion(ne). Pour prouver qu'une fonction $y$ est solution d'une équation, on **dérive et on remplace** : on calcule $y'$ (et $y''$ si besoin), on injecte dans l'équation, et on vérifie que l'égalité tient.

Vérifions que $y = 3e^{-2x}$ est solution de $y' + 2y = 0$. On dérive : $y' = -6e^{-2x}$. On remplace :
$$y' + 2y = -6e^{-2x} + 2\\left(3e^{-2x}\\right) = -6e^{-2x} + 6e^{-2x} = 0$$

L'égalité est vraie : la balance est équilibrée, donc $y$ est bien solution.`,
        },
        {
          type: 'tip',
          id: 'tip-o3',
          titre: `Où tu vas l'utiliser`,
          contenu: `Dans CHAQUE module. C'est l'étape que le correcteur attend et qui rapporte des points sûrs.`,
        },
        {
          type: 'warning',
          id: 'warn-o3',
          titre: `Piège à éviter`,
          contenu: `La vérification par substitution n'est pas une décoration : au BAC, elle est notée. Ne la saute jamais, même quand tu es sûr(e) de toi.`,
        },
      ],
    },
    {
      id: 's-o4',
      titre: `🔧 Outil 4 — La constante C et la condition initiale (la boussole)`,
      blocs: [
        {
          type: 'text',
          id: 'b-o4',
          contenu: `Quand tu cherches une primitive, tu ajoutes toujours une constante $C$. Ici, c'est la même logique : résoudre une équation différentielle donne une **famille infinie** de solutions (tous les gbaka de la même ligne d'Adjamé). C'est la **condition initiale** qui sélectionne LA fonction exacte de ton problème (le gbaka précis dans lequel tu es monté).

Prenons la solution générale $y(x) = Ce^{-3x}$ avec la condition $y(0) = 5$. On remplace $x$ par $0$ et $y$ par $5$ :
$$5 = Ce^{-3\\times 0} = C\\times e^0 = C\\times 1 \\;\\implies\\; C = 5$$

La solution unique est donc $y(x) = 5e^{-3x}$.`,
        },
        {
          type: 'tip',
          id: 'tip-o4',
          titre: `Où tu vas l'utiliser`,
          contenu: `Dans tous les modules : la condition initiale tombe à chaque exercice de BAC.`,
        },
        {
          type: 'warning',
          id: 'warn-o4',
          titre: `Piège à éviter`,
          contenu: `N'oublie jamais d'écrire la constante $C$ dans la solution générale. Sans $C$, ton équation n'est pas résolue, et c'est une perte de points immédiate.`,
        },
      ],
    },
    {
      id: 's-o5',
      titre: `🔧 Outil 5 — Résoudre un système de deux équations à deux inconnues`,
      blocs: [
        {
          type: 'text',
          id: 'b-o5',
          contenu: `Au second ordre, tu auras **deux** constantes à déterminer ($A$ et $B$), donc deux conditions initiales, donc un petit système $2\\times 2$ à résoudre. Rien de neuf : tu fais ça depuis la Troisième.

Résous le système :
$$\\begin{cases} A = 3 \\\\ 2B = -2 \\end{cases} \\;\\implies\\; A = 3 \\quad\\text{et}\\quad B = -1$$

La plupart du temps, le système est aussi simple que celui-ci : une condition te donne $A$ directement, l'autre te donne $B$. Par substitution ou par combinaison, tu te ramènes toujours à deux valeurs.`,
        },
        {
          type: 'tip',
          id: 'tip-o5',
          titre: `Où tu vas l'utiliser`,
          contenu: `Aux M4 et M5 (second ordre), pour fixer $A$ et $B$ à partir de $y(0)$ et $y'(0)$.`,
        },
        {
          type: 'warning',
          id: 'warn-o5',
          titre: `Piège à éviter`,
          contenu: `Pour trouver la deuxième constante, il faut d'abord **dériver** ta solution générale, puis utiliser la condition sur $y'(0)$. Beaucoup oublient cette dérivation.`,
        },
      ],
    },
    {
      id: 's-o6',
      titre: `🔧 Outil 6 — Le rappel des primitives (le pont avec le T3)`,
      blocs: [
        {
          type: 'text',
          id: 'b-o6',
          contenu: `Au fond, résoudre une équation du premier ordre, c'est de **l'intégration déguisée**. Souviens-toi des primitives de base du Tome 3 : elles éclairent d'où viennent les solutions.
$$\\int a\\,dx = ax + C \\qquad \\int e^{ax}\\,dx = \\dfrac{1}{a}e^{ax} + C \\qquad \\left(\\ln|y|\\right)' = \\dfrac{y'}{y}$$

Cette dernière égalité est la clé qui explique pourquoi la solution de $y' = -ay$ est une exponentielle : on reconnaît $\\dfrac{y'}{y} = -a$, on prend la primitive des deux côtés, et l'exponentielle apparaît naturellement. Tu verras la démonstration complète au M1.`,
        },
        {
          type: 'tip',
          id: 'tip-o6',
          titre: `Où tu vas l'utiliser`,
          contenu: `Au M1 (pour comprendre l'origine de $Ce^{-ax}$) et au M6 (changement de variable dans les applications).`,
        },
        {
          type: 'warning',
          id: 'warn-o6',
          titre: `Piège à éviter`,
          contenu: `Quand tu prends une primitive, n'oublie pas la constante $C$ : c'est elle qui, plus loin, deviendra la constante de ta famille de solutions.`,
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
            [`1. Dérivée de $e^{ax}$`, `$\\left(e^{ax}\\right)' = a\\,e^{ax}$`, `M1, M2, M3, M5, M6`],
            [`2. Dérivées secondes $\\cos$ / $\\sin$`, `$\\left(\\cos\\omega x\\right)'' = -\\omega^2\\cos\\omega x$`, `M4`],
            [`3. Vérification par substitution`, `dériver, remplacer, vérifier $= 0$`, `Tous les modules`],
            [`4. Constante $C$ et condition initiale`, `$y(x_0) = y_0$ fixe la valeur de $C$`, `Tous les modules`],
            [`5. Système $2\\times 2$`, `deux conditions $\\to$ $A$ et $B$`, `M4, M5`],
            [`6. Rappel primitives (T3)`, `$\\int e^{ax}dx = \\dfrac{1}{a}e^{ax} + C$`, `M1, M6`],
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
