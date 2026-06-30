import { Chapitre } from '../../types/course';

export const chapitreSalle: Chapitre = {
  id: 't12-salle',
  titre: `La Salle d'Entraînement — 5 exercices flash`,
  duree: 45,
  niveau: 'BAC',
  xpGain: 40,
  objectifs: [
    `Gagner en vitesse et en précision sur un exercice flash chronométré, sans calculatrice`,
    `Sauter d'un domaine à l'autre sans perdre le fil`,
    `Sécuriser les automatismes des grands blocs : suites, log/exp, probabilités, complexes, éq. diff.`,
  ],
  sections: [
    {
      id: 's-intro',
      titre: `Le principe des flashs`,
      blocs: [
        {
          type: 'text',
          id: 'b-intro',
          contenu: `Pour briller le jour J sur les tables du BAC, il ne suffit pas de connaître son cours par cœur, Champion(ne). Il faut de la vitesse, de la précision et l'agilité de sauter d'un domaine à l'autre sans perdre le fil. C'est pour ça que j'ai conçu cette salle : on oublie les longs problèmes pour se concentrer sur **5 exercices flash**, un par grand bloc, chronométrés, sans calculatrice, ligne par ligne.`,
        },
        {
          type: 'table',
          id: 'tbl-planning',
          headers: [`Flash`, `Thème source`, `Durée max`, `Objectif tactique`],
          rows: [
            [`Flash 1`, `Suites (T4) — récurrence et convergence`, `20 min`, `Sécuriser l'initialisation et la limite.`],
            [`Flash 2`, `Log/Exp (T5) — changement de variable`, `25 min`, `Maîtriser les polynômes en exponentielle.`],
            [`Flash 3`, `Probabilités (T7) — schéma de Bernoulli`, `20 min`, `Utiliser l'événement contraire pour gagner du temps.`],
            [`Flash 4`, `Complexes (T10) — forme exponentielle`, `25 min`, `Transformer la géométrie plane en écriture complexe.`],
            [`Flash 5`, `Éq. différentielles (T11) — premier ordre`, `20 min`, `Poser la solution générale et la constante initiale.`],
          ],
        },
      ],
    },
    {
      id: 's-flash',
      titre: `Les 5 exercices flash`,
      blocs: [
        {
          type: 'exercise',
          id: 'flash-1',
          niveau: 'BAC',
          enonce: `⚡ **Flash 1 — Suites : récurrence et convergence** *(T4 · 20 min)*. Soit $(u_n)$ définie par $u_0=1$ et, pour tout entier naturel $n$, $u_{n+1}=\\dfrac{1}{2}u_n+2$. **1.** Démontre par récurrence que pour tout $n$, $u_n\\leq 4$. **2.** On admet que $(u_n)$ est strictement croissante. Justifie qu'elle converge et calcule sa limite $\\ell$.`,
          etapes: [],
          reponse: `**Copie Parfaite :** **1. Initialisation :** $u_0=1\\leq 4$, vrai au rang $0$. **Hérédité :** supposons $u_n\\leq 4$. En multipliant par $\\dfrac{1}{2}>0$ : $\\dfrac{1}{2}u_n\\leq 2$, puis $\\dfrac{1}{2}u_n+2\\leq 4$, soit $u_{n+1}\\leq 4$. **Conclusion :** pour tout $n$, $u_n\\leq 4$. **2.** $(u_n)$ est strictement croissante (admis) et majorée par $4$ : d'après le théorème de convergence des suites monotones, elle converge vers une limite finie $\\ell$. La fonction $f(x)=\\dfrac{1}{2}x+2$, affine, est continue sur $\\mathbb{R}$ et $u_{n+1}=f(u_n)$, donc $\\ell=f(\\ell)$ : $\\ell=\\dfrac{1}{2}\\ell+2 \\iff \\ell=4$. *[Barème : récurrence = 1 pt — convergence = 0,5 pt — limite avec continuité = 1 pt — Total : 2,5 pts]*`,
          conseil: `Dans l'hérédité, pars de $u_n\\leq 4$ et applique les opérations dans l'ordre (multiplication puis addition).`,
          piege: `Écris explicitement que la fonction associée est continue pour avoir le droit de poser $\\ell=f(\\ell)$ : les correcteurs retirent un quart de point aux copies qui parachutent cette équation.`,
        },
        {
          type: 'dialogue',
          id: 'dlg-f2-a',
          pf: `Grand Frère, au brouillon j'ai trouvé $X_1=1$ et $X_2=2$. C'est bon, j'encadre sur ma copie ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-f2-b',
          gf: `Attention, Champion(ne) ! L'énoncé demande la variable minuscule $x$, pas la grande variable $X$. Tu dois repasser par $e^{x}=1$ et $e^{x}=2$ pour obtenir tes vraies réponses. C'est là que la moitié des élèves laissent des points.`,
        },
        {
          type: 'exercise',
          id: 'flash-2',
          niveau: 'BAC',
          enonce: `⚡ **Flash 2 — Log/Exp : changement de variable** *(T5 · 25 min)*. **1.** Résous dans $\\mathbb{R}$ l'équation $e^{2x}-3e^{x}+2=0$. **2.** Soit $f(x)=\\left(e^{x}-1\\right)^2$. Calcule $\\displaystyle\\lim_{x\\to-\\infty}f(x)$ et $\\displaystyle\\lim_{x\\to+\\infty}f(x)$.`,
          etapes: [],
          reponse: `**Copie Parfaite :** **1.** Posons $X=e^{x}$ avec $X>0$. L'équation devient $X^2-3X+2=0$. Le discriminant vaut $\\Delta=9-8=1>0$, d'où $X_1=1$ et $X_2=2$, toutes deux positives. Retour à $x$ : $e^{x}=1 \\iff x=0$ et $e^{x}=2 \\iff x=\\ln(2)$. Donc $\\mathcal{S}=\\lbrace 0\\,;\\,\\ln(2)\\rbrace$. **2.** En $-\\infty$ : $\\displaystyle\\lim_{x\\to-\\infty}e^{x}=0$, donc $e^{x}-1\\to-1$ et $f(x)\\to(-1)^2=1$. En $+\\infty$ : $e^{x}-1\\to+\\infty$, donc $f(x)\\to+\\infty$. *[Barème : changement de variable et discriminant = 0,5 pt — résolution en $x$ = 1 pt — limite en $-\\infty$ = 0,5 pt — limite en $+\\infty$ = 0,5 pt — Total : 2,5 pts]*`,
          conseil: `Une fois $X$ trouvé, reviens toujours à la variable minuscule $x$ via $e^{x}=X$ avant de conclure.`,
          piege: `Ne confonds pas la variable auxiliaire $X$ et la variable initiale $x$ : c'est l'erreur qui coûte la moitié des points.`,
        },
        {
          type: 'exercise',
          id: 'flash-3',
          niveau: 'BAC',
          enonce: `⚡ **Flash 3 — Probabilités : schéma de Bernoulli** *(T7 · 20 min)*. Un chauffeur de gbaka entre Adjamé et Yopougon traverse un feu mal réglé. La probabilité que le feu soit rouge à son passage est $0,2$. Il effectue $5$ trajets identiques et indépendants. Soit $X$ le nombre de feux rouges rencontrés. **1.** Justifie que $X$ suit une loi binomiale (paramètres). **2.** Calcule la probabilité qu'il rencontre au moins un feu rouge (valeur décimale exacte).`,
          etapes: [],
          reponse: `**Copie Parfaite :** **1.** Chaque traversée est une épreuve de Bernoulli : succès $S$ « le feu est rouge » de probabilité $p=0,2$, échec de probabilité $q=0,8$. Elle est répétée $n=5$ fois, identique et indépendante. $X$ comptant les succès suit $\\mathcal{B}(5\\,;\\,0,2)$. **2.** $P(X\\geq 1)=1-P(X=0)=1-\\dbinom{5}{0}(0,2)^0(0,8)^5=1-(0,8)^5=1-0,32768=0,67232$. *[Barème : justification de la loi = 1 pt — événement contraire = 0,5 pt — calcul exact = 1 pt — Total : 2,5 pts]*`,
          conseil: `Dès que tu lis « au moins un », travaille avec l'événement contraire : ton calcul tient en une ligne.`,
          piege: `Ne confonds pas $p$ (succès) et $q=1-p$ (échec) dans la formule.`,
        },
        {
          type: 'exercise',
          id: 'flash-4',
          niveau: 'BAC',
          enonce: `⚡ **Flash 4 — Complexes : forme exponentielle et similitude** *(T10 · 25 min)*. **1.** Détermine la forme exponentielle de $z_A=1-i\\sqrt{3}$. **2.** Soit $S$ la similitude directe de centre $O$, de rapport $k=2$ et d'angle $\\theta=\\dfrac{\\pi}{3}$. Donne son écriture complexe, puis l'affixe (forme algébrique) du point $B=S(A)$.`,
          etapes: [],
          reponse: `**Copie Parfaite :** **1.** $|z_A|=\\sqrt{1^2+\\left(\\sqrt{3}\\right)^2}=\\sqrt{4}=2$. Donc $z_A=2\\left(\\dfrac{1}{2}-i\\dfrac{\\sqrt{3}}{2}\\right)$. On cherche $\\alpha$ tel que $\\cos\\alpha=\\dfrac{1}{2}$ et $\\sin\\alpha=-\\dfrac{\\sqrt{3}}{2}$, soit $\\alpha=-\\dfrac{\\pi}{3}$. Ainsi $z_A=2e^{-i\\frac{\\pi}{3}}$. **2.** L'écriture complexe est $z'=az$ avec $a=ke^{i\\theta}=2e^{i\\frac{\\pi}{3}}$, donc $z'=2e^{i\\frac{\\pi}{3}}z$. L'affixe de $B$ : $z_B=2e^{i\\frac{\\pi}{3}}\\times 2e^{-i\\frac{\\pi}{3}}=4e^{i\\,0}=4$. La forme algébrique est $z_B=4$. *[Barème : module et argument = 1 pt — écriture de la similitude = 0,5 pt — calcul de $z_B$ = 1 pt — Total : 2,5 pts]*`,
          conseil: `Utilise la forme exponentielle pour les multiplications : c'est dix fois plus rapide que la forme algébrique.`,
          piege: `Un cosinus positif et un sinus négatif placent l'argument dans le quatrième quadrant : l'argument est négatif.`,
        },
        {
          type: 'exercise',
          id: 'flash-5',
          niveau: 'BAC',
          enonce: `⚡ **Flash 5 — Équations différentielles : premier ordre** *(T11 · 20 min)*. On considère $(E):y'+2y=6$. **1.** Détermine l'ensemble des solutions de $(E)$ sur $\\mathbb{R}$. **2.** Détermine la solution $f$ telle que $f(0)=5$, puis calcule $\\displaystyle\\lim_{t\\to+\\infty}f(t)$.`,
          etapes: [],
          reponse: `**Copie Parfaite :** **1.** $(E):y'+2y=6$ est de la forme $y'+ay=b$ avec $a=2$, $b=6$. Les solutions sur $\\mathbb{R}$ sont $y(t)=Ce^{-2t}+\\dfrac{6}{2}=Ce^{-2t}+3$, $C\\in\\mathbb{R}$. **2.** $f(0)=5 \\iff C+3=5 \\iff C=2$, donc $f(t)=2e^{-2t}+3$. Comme $\\displaystyle\\lim_{t\\to+\\infty}e^{-2t}=0$, on conclut $\\displaystyle\\lim_{t\\to+\\infty}f(t)=3$. *[Barème : solution générale = 1 pt — constante $C$ = 0,75 pt — limite = 0,75 pt — Total : 2,5 pts]*`,
          conseil: `Retiens la structure $y(t)=Ce^{-at}+\\dfrac{b}{a}$ : la poser directement sécurise toute la première question.`,
          piege: `N'oublie pas le signe moins à l'exposant : un oubli change la décroissance en croissance et fausse la limite.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Le bilan de la Salle`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-salle',
          titre: `Auto-évaluation — Salle d'Entraînement`,
          contenu: [
            `Je mène une récurrence en rédigeant proprement les trois phases.`,
            `Je maîtrise le changement de variable pour une équation avec exponentielles.`,
            `J'utilise l'événement contraire pour une probabilité « au moins un ».`,
            `Je sais poser la forme exponentielle d'un complexe (module et argument).`,
            `J'applique directement la solution d'une équation différentielle du premier ordre.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-salle',
          titre: `Le Verdict du Grand Frère`,
          contenu: [
            `🟢 **5/5** → Magnifique, Champion(ne) ! Tes automatismes sont affûtés, ta vitesse sans calculatrice est digne d'un caïman. Place au couronnement.`,
            `🟡 **3 ou 4** → Relis les Copies Parfaites des exercices où tu as hésité pour ancrer les structures de rédaction.`,
            `🔴 **0 à 2** → Respire, détends-toi. Reprends méthodiquement le tableau des outils pour reconstruire tes bases pas à pas.`,
          ],
        },
      ],
    },
  ],
};
