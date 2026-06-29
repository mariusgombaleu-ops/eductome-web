import { Chapitre } from '../../types/course';

export const chapitreSalle: Chapitre = {
  id: 't3-salle',
  titre: `La Salle d'Examen`,
  duree: 40,
  niveau: 'BAC',
  xpGain: 40,
  objectifs: [
    `Débusquer instantanément la bonne méthode face à n'importe quelle intégrale du BAC`,
    `Manier l'IPP et le changement de variable sans s'emmêler les pinceaux`,
    `Calculer des aires et des volumes de révolution avec la précision d'un vieux caïman`,
    `Rédiger une copie qui coche tous les points de barème du correcteur`,
    `Gérer son temps sur les 4 heures de l'épreuve`,
  ],
  sections: [
    {
      id: 's-a',
      titre: `Section A — Stratégie Générale BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b-a1',
          contenu: `Installe-toi, Champion(ne). Tu connais cette ambiance lourde de la salle de composition du Lycée Classique d'Abidjan, quand le surveillant dépose l'épreuve sur ta table ? Pour éviter le syndrome de la feuille blanche, on pose les règles du jeu. L'intégration au BAC n'est pas une loterie : c'est une suite de réflexes bien huilés.`,
        },
        {
          type: 'table',
          id: 'tbl-reflexes',
          headers: [`Réflexe`, `Ce qu'il faut faire sur ta copie`],
          rows: [
            [`Lire le sujet en entier`, `Repérer si on demande une primitive ou une intégrale définie, pour calibrer ton temps.`],
            [`Identifier la forme`, `Classer la fonction : référence, composée, IPP ou changement de variable.`],
            [`Poser $u$ et $u'$ au brouillon`, `Faire l'identification à l'écart AVANT d'écrire sur la copie.`],
            [`Pour les aires`, `Étudier le signe de $f(x)$ sur l'intervalle avant toute formule.`],
            [`Pour les volumes`, `Calculer $[f(x)]^2$ au brouillon et le développer avant d'intégrer.`],
            [`Vérification systématique`, `Dériver ton résultat 30 secondes pour confirmer que tu retombes sur $f$.`],
          ],
        },
        {
          type: 'dialogue',
          id: 'dlg-a1',
          pf: `Grand Frère, je panique parce que je ne sais jamais s'il faut faire une IPP ou chercher une forme composée.`,
        },
        {
          type: 'dialogue',
          id: 'dlg-a2',
          gf: `Respire, Champion(ne). Regarde le produit : si un morceau est la dérivée de ce qui est caché dans l'autre, c'est une forme composée. Si les deux n'ont rien à voir — un polynôme et une exponentielle — l'IPP sort ses muscles. On va drill ça tout de suite, dix exercices façon BAC.`,
        },
      ],
    },
    {
      id: 's-b',
      titre: `Section B — Les 10 Exercices BAC`,
      blocs: [
        {
          type: 'exercise',
          id: 'exo-1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice 1 — Primitives d'un polynôme + condition initiale.** Soit $f(x) = 3x^2 - 4x + 5$ sur $\\mathbb{R}$. (1) Déterminer toutes les primitives $F$ de $f$. (2) Déterminer la primitive $F_0$ telle que $F_0(1) = 2$.`,
          etapes: [],
          reponse: `(1) $F(x) = x^3 - 2x^2 + 5x + C$, $C \\in \\mathbb{R}$. (2) $F_0(x) = x^3 - 2x^2 + 5x - 2$.`,
          piege: `Pour la condition, on injecte $x_0$ dans $F(x) + C$, jamais dans $f(x)$.`,
        },
        {
          type: 'text',
          id: 'b-copie-1',
          titre: `✍️ La Copie Parfaite — Exercice 1`,
          contenu: `**(1)** $f$ est continue sur $\\mathbb{R}$ (polynôme). Ses primitives sont $F(x) = x^3 - 2x^2 + 5x + C$, $C \\in \\mathbb{R}$.

**(2)** $F_0(1) = 2 \\iff 1 - 2 + 5 + C = 2 \\iff 4 + C = 2 \\iff C = -2$. Donc $F_0(x) = x^3 - 2x^2 + 5x - 2$.

*[Barème : Q1 : 1,5 pt · Q2 : 1,5 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice 2 — Primitives de formes composées.** Déterminer toutes les primitives de : (a) $f(x) = (6x^2 + 2x)\\sin(2x^3 + x^2)$ sur $\\mathbb{R}$ ; (b) $g(x) = \\dfrac{4x - 3}{(2x^2 - 3x + 1)^4}$ sur $]1\\ ;\\ +\\infty[$.`,
          etapes: [],
          reponse: `(a) $F(x) = -\\cos(2x^3 + x^2) + C$. (b) $G(x) = -\\dfrac{1}{3(2x^2 - 3x + 1)^3} + C$, $C \\in \\mathbb{R}$.`,
        },
        {
          type: 'text',
          id: 'b-copie-2',
          titre: `✍️ La Copie Parfaite — Exercice 2`,
          contenu: `**(a)** Posons $u(x) = 2x^3 + x^2$, $u'(x) = 6x^2 + 2x$. Alors $f = u'\\sin(u)$, donc $F(x) = -\\cos(2x^3 + x^2) + C$.

**(b)** Posons $u(x) = 2x^2 - 3x + 1$ ($> 0$ sur $]1\\ ;\\ +\\infty[$), $u'(x) = 4x - 3$. Alors $g = \\dfrac{u'}{u^4} = u'u^{-4}$, donc
$$G(x) = \\dfrac{u^{-3}}{-3} + C = -\\dfrac{1}{3(2x^2 - 3x + 1)^3} + C, \\quad C \\in \\mathbb{R}.$$

*[Barème : (a) : 2 pts · (b) : 2 pts — Total : 4 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice 3 — Intégrale, Chasles et valeur moyenne.** Soit $f(x) = x^2 - 2x$ sur $[0\\ ;\\ 3]$. (1) Calculer $I = \\displaystyle\\int_0^3 f(x)\\,dx$ en coupant au zéro de $f$. (2) Calculer la valeur moyenne $\\mu$ de $f$ sur $[0\\ ;\\ 3]$. (3) Interpréter graphiquement $I$.`,
          etapes: [],
          reponse: `$I = 0$ ; $\\mu = 0$ ; l'aire sous l'axe sur $[0\\ ;\\ 2]$ égale l'aire au-dessus sur $[2\\ ;\\ 3]$.`,
        },
        {
          type: 'text',
          id: 'b-copie-3',
          titre: `✍️ La Copie Parfaite — Exercice 3`,
          contenu: `**(1)** $f$ s'annule en $0$ et $2$. Primitive $F(x) = \\dfrac{x^3}{3} - x^2$.
$$\\int_0^2 f = \\Big[\\dfrac{x^3}{3} - x^2\\Big]_0^2 = \\dfrac{8}{3} - 4 = -\\dfrac{4}{3}\\ ; \\quad \\int_2^3 f = (9 - 9) - \\Big(\\dfrac{8}{3} - 4\\Big) = \\dfrac{4}{3}.$$
Donc $I = -\\dfrac{4}{3} + \\dfrac{4}{3} = 0$.

**(2)** $\\mu = \\dfrac{1}{3}\\,I = 0$.

**(3)** $I = 0$ signifie que l'aire sous l'axe (sur $[0\\ ;\\ 2]$) égale exactement l'aire au-dessus (sur $[2\\ ;\\ 3]$). L'intégrale est une somme algébrique, pas une aire géométrique.

*[Barème : Q1 : 2 pts · Q2 : 1 pt · Q3 : 1 pt — Total : 4 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-4',
          niveau: 'BAC',
          enonce: `🔴 **Exercice 4 — Intégration par parties.** Calculer $I = \\displaystyle\\int_0^1 (2x + 1)e^x\\,dx$ par IPP.`,
          etapes: [],
          reponse: `$I = e + 1$.`,
          conseil: `ALPES : le polynôme se dérive (il se simplifie), l'exponentielle s'intègre.`,
        },
        {
          type: 'text',
          id: 'b-copie-4',
          titre: `✍️ La Copie Parfaite — Exercice 4`,
          contenu: `Posons $u(x) = 2x + 1$, $u'(x) = 2$ ; $v'(x) = e^x$, $v(x) = e^x$. Par IPP :
$$I = \\big[(2x+1)e^x\\big]_0^1 - \\int_0^1 2e^x\\,dx = (3e - 1) - \\big[2e^x\\big]_0^1 = (3e - 1) - (2e - 2) = e + 1.$$

*[Barème : choix de $u, v'$ : 1,5 pt · primitive : 1,5 pt · résultat : 1 pt — Total : 4 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-5',
          niveau: 'BAC',
          enonce: `🔴 **Exercice 5 — Aire et volume (changement de variable).** Soit $f(x) = x\\sqrt{4 - x^2}$ sur $[0\\ ;\\ 2]$. **A.** (1) Montrer que $f(x) \\ge 0$ sur $[0\\ ;\\ 2]$. (2) Calculer l'aire $\\mathcal{A}$ sous $\\mathcal{C}_f$ (poser $u = 4 - x^2$). **B.** (3) Calculer le volume $V$ engendré par la rotation de $\\mathcal{C}_f$ autour de $(Ox)$.`,
          etapes: [],
          reponse: `$\\mathcal{A} = \\dfrac{8}{3}$ u.a. ; $V = \\dfrac{64\\pi}{15}$ u.v.`,
        },
        {
          type: 'text',
          id: 'b-copie-5',
          titre: `✍️ La Copie Parfaite — Exercice 5`,
          contenu: `**A.1.** Sur $[0\\ ;\\ 2]$, $x \\ge 0$ et $\\sqrt{4 - x^2} \\ge 0$, donc $f(x) \\ge 0$.

**A.2.** $\\mathcal{A} = \\displaystyle\\int_0^2 x\\sqrt{4 - x^2}\\,dx$. Posons $u = 4 - x^2$, $du = -2x\\,dx$, donc $x\\,dx = -\\dfrac{1}{2}du$. Bornes : $x = 0 \\Rightarrow u = 4$ ; $x = 2 \\Rightarrow u = 0$.
$$\\mathcal{A} = \\int_4^0 \\sqrt{u}\\Big(-\\dfrac{1}{2}\\Big)du = \\dfrac{1}{2}\\int_0^4 u^{1/2}\\,du = \\dfrac{1}{2}\\Big[\\dfrac{2}{3}u^{3/2}\\Big]_0^4 = \\dfrac{1}{3}\\big(4\\sqrt{4}\\big) = \\dfrac{8}{3}\\ \\text{u.a.}$$

**B.3.** $[f(x)]^2 = x^2(4 - x^2) = 4x^2 - x^4$, donc
$$V = \\pi\\int_0^2 (4x^2 - x^4)\\,dx = \\pi\\Big[\\dfrac{4}{3}x^3 - \\dfrac{1}{5}x^5\\Big]_0^2 = \\pi\\Big(\\dfrac{32}{3} - \\dfrac{32}{5}\\Big) = \\dfrac{64\\pi}{15}\\ \\text{u.v.}$$

*[Barème : A.1 : 1 pt · A.2 : 2,5 pts · B.3 : 2,5 pts — Total : 6 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-6',
          niveau: 'BAC',
          enonce: `🔴 **Exercice 6 — Démontrer qu'une fonction est une primitive** *(annale ivoirienne)*. Soit $m(x) = \\dfrac{1}{\\sqrt{x^2 + 2}}$ et $M(x) = \\ln\\!\\big(x + \\sqrt{x^2 + 2}\\big)$ sur $\\mathbb{R}$. Démontrer que $M$ est une primitive de $m$ sur $\\mathbb{R}$.`,
          etapes: [],
          reponse: `$M'(x) = \\dfrac{1}{\\sqrt{x^2 + 2}} = m(x)$, donc $M$ est une primitive de $m$ sur $\\mathbb{R}$.`,
          conseil: `« Démontrer que $M$ est une primitive » = dériver $M$ et retrouver $m$.`,
        },
        {
          type: 'text',
          id: 'b-copie-6',
          titre: `✍️ La Copie Parfaite — Exercice 6`,
          contenu: `$M$ est dérivable sur $\\mathbb{R}$ (composée de $\\ln$ et d'une fonction strictement positive). Posons $w(x) = x + \\sqrt{x^2 + 2}$, alors $w'(x) = 1 + \\dfrac{x}{\\sqrt{x^2 + 2}} = \\dfrac{\\sqrt{x^2 + 2} + x}{\\sqrt{x^2 + 2}}$. Donc
$$M'(x) = \\dfrac{w'(x)}{w(x)} = \\dfrac{1}{\\sqrt{x^2 + 2}} \\times \\dfrac{\\sqrt{x^2 + 2} + x}{\\,x + \\sqrt{x^2 + 2}\\,} = \\dfrac{1}{\\sqrt{x^2 + 2}} = m(x).$$
Comme $M'(x) = m(x)$ pour tout $x \\in \\mathbb{R}$, $M$ est une primitive de $m$ sur $\\mathbb{R}$.

*[Barème : dérivée de $w$ : 1,5 pt · forme $\\dfrac{w'}{w}$ : 1 pt · simplification + conclusion : 1,5 pt — Total : 4 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-7',
          niveau: 'BASE',
          enonce: `🟢 **Exercice 7 — QCM primitives** *(annale ivoirienne)*. Pour chaque ligne, une seule réponse est juste. (1) Une primitive sur $\\mathbb{R}$ de $x \\mapsto e^{3x - 5}$ est : A) $e^{3x-5}$ B) $\\dfrac{1}{3}e^{3x-5}$ C) $\\dfrac{1}{5}e^{3x-5}$ D) $3e^{3x-5}$. (2) Une primitive sur $]-\\infty\\ ;\\ 1[$ de $x \\mapsto \\dfrac{1}{x - 1}$ est : A) $\\ln(x - 1)$ B) $\\ln(1 - x)$ C) $-\\dfrac{1}{(x-1)^2}$ D) $\\dfrac{1}{(x-1)^2}$.`,
          etapes: [],
          reponse: `(1) **B** ; (2) **B**.`,
        },
        {
          type: 'text',
          id: 'b-copie-7',
          titre: `✍️ La Copie Parfaite — Exercice 7`,
          contenu: `**(1)** Réponse **B** : $\\Big(\\dfrac{1}{3}e^{3x-5}\\Big)' = \\dfrac{1}{3}\\times 3\\,e^{3x-5} = e^{3x-5}$ (forme $\\dfrac{1}{a}e^{ax+b}$).

**(2)** Réponse **B** : sur $]-\\infty\\ ;\\ 1[$, $x - 1 < 0$, donc $\\ln|x-1| = \\ln(1 - x)$, et $\\big(\\ln(1-x)\\big)' = \\dfrac{-1}{1-x} = \\dfrac{1}{x-1}$.

*[Barème : 1 pt par item — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-8',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice 8 — IPP avec le logarithme** *(annale ivoirienne)*. Calculer $I = \\displaystyle\\int_1^e \\ln x\\,dx$.`,
          etapes: [],
          reponse: `$I = 1$.`,
          conseil: `$\\ln x = 1 \\times \\ln x$ : on pose $u = \\ln x$ et $v' = 1$.`,
        },
        {
          type: 'text',
          id: 'b-copie-8',
          titre: `✍️ La Copie Parfaite — Exercice 8`,
          contenu: `Posons $u(x) = \\ln x$, $u'(x) = \\dfrac{1}{x}$ ; $v'(x) = 1$, $v(x) = x$. Par IPP :
$$I = \\big[x\\ln x\\big]_1^e - \\int_1^e x\\times\\dfrac{1}{x}\\,dx = \\big[x\\ln x\\big]_1^e - \\int_1^e 1\\,dx = (e\\cdot 1 - 0) - (e - 1) = 1.$$

*[Barème : choix $u, v'$ : 1,5 pt · IPP : 1,5 pt · résultat : 1 pt — Total : 4 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-9',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice 9 — Encadrement par l'inégalité de la moyenne.** Soit $I = \\displaystyle\\int_0^1 e^{x^2}\\,dx$. Sans calculer $I$, démontrer que $1 \\le I \\le e$.`,
          etapes: [],
          reponse: `Pour $x \\in [0\\ ;\\ 1]$, $1 \\le e^{x^2} \\le e$, donc en intégrant : $1 \\le I \\le e$.`,
          conseil: `On encadre la fonction sur $[0\\ ;\\ 1]$, puis on intègre (l'intégrale respecte l'ordre).`,
        },
        {
          type: 'text',
          id: 'b-copie-9',
          titre: `✍️ La Copie Parfaite — Exercice 9`,
          contenu: `Pour tout $x \\in [0\\ ;\\ 1]$, $0 \\le x^2 \\le 1$, donc $1 = e^0 \\le e^{x^2} \\le e^1 = e$. En intégrant ces inégalités sur $[0\\ ;\\ 1]$ (où $1 - 0 = 1$) :
$$1\\times(1 - 0) \\le \\int_0^1 e^{x^2}\\,dx \\le e\\times(1 - 0), \\quad \\text{d'où}\\quad 1 \\le I \\le e.$$

*[Barème : encadrement de $e^{x^2}$ : 2 pts · intégration de l'encadrement : 1,5 pt · conclusion : 0,5 pt — Total : 4 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-10',
          niveau: 'BAC',
          enonce: `🔴 **Exercice 10 — Volume entre deux courbes.** Soit $f(x) = e^x$ et $g(x) = 1$ sur $[0\\ ;\\ 1]$, repère orthonormé d'unité $1\\text{ cm}$. Calculer le volume $V$ du solide engendré par la rotation autour de $(Ox)$ de la région comprise entre $\\mathcal{C}_f$ et $\\mathcal{C}_g$.`,
          etapes: [],
          reponse: `$V = \\dfrac{\\pi(e^2 - 3)}{2}$ u.v. $= \\dfrac{\\pi(e^2 - 3)}{2}\\ \\text{cm}^3$.`,
          conseil: `Sur $[0\\ ;\\ 1]$, $e^x \\ge 1 \\ge 0$ : on applique $V = \\pi\\displaystyle\\int ([f]^2 - [g]^2)$.`,
        },
        {
          type: 'text',
          id: 'b-copie-10',
          titre: `✍️ La Copie Parfaite — Exercice 10`,
          contenu: `Pour tout $x \\in [0\\ ;\\ 1]$, $f(x) = e^x \\ge 1 = g(x) \\ge 0$. Donc
$$V = \\pi\\int_0^1 \\big((e^x)^2 - 1^2\\big)\\,dx = \\pi\\int_0^1 (e^{2x} - 1)\\,dx = \\pi\\Big[\\dfrac{1}{2}e^{2x} - x\\Big]_0^1.$$
$$V = \\pi\\Big(\\big(\\dfrac{1}{2}e^2 - 1\\big) - \\dfrac{1}{2}\\Big) = \\dfrac{\\pi(e^2 - 3)}{2}\\ \\text{u.v.} = \\dfrac{\\pi(e^2 - 3)}{2}\\ \\text{cm}^3.$$

*[Barème : position relative $f \\ge g \\ge 0$ : 1 pt · différence des carrés : 1,5 pt · calcul : 1,5 pt · cm³ : 1 pt — Total : 5 pts]*`,
        },
      ],
    },
    {
      id: 's-c',
      titre: `Section C — La Check-list du Correcteur`,
      blocs: [
        {
          type: 'text',
          id: 'b-c1',
          contenu: `Avant de rendre, relis ta copie avec les yeux du correcteur. Chaque ligne ci-dessous est un point qu'on te donne ou qu'on te retire.`,
        },
        {
          type: 'table',
          id: 'tbl-check',
          headers: [`Point contrôlé`, `Ce que le correcteur cherche`],
          rows: [
            [`Continuité annoncée`, `« $f$ est continue sur $I$ » avant toute primitive ou intégrale.`],
            [`Constante $+\\,C$`, `Présente dès qu'on demande TOUTES les primitives.`],
            [`Pose de $u$ et $v$`, `Les quatre lignes ($u, u', v', v$) écrites avant l'IPP.`],
            [`Crochets et bornes`, `$[F]_a^b$ posé, $F(a)$ entre parenthèses avant la soustraction.`],
            [`Étude de signe (aire)`, `Tableau de signes avant la valeur absolue.`],
            [`Carré développé (volume)`, `$[f(x)]^2$ développé avant d'intégrer.`],
            [`Unités`, `u.a. / u.v. puis conversion en cm² / cm³ avec l'échelle.`],
            [`Phrase de conclusion`, `Résultat encadré, sous forme exacte (avec $e$, $\\ln$, $\\pi$).`],
          ],
        },
      ],
    },
    {
      id: 's-d',
      titre: `Section D — Les Pièges à Éviter au BAC`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-pieges',
          headers: [`Module / Notion`, `Le piège classique`, `La correction exigée`],
          rows: [
            [`Primitives`, `Oublier le $+\\,C$ ou injecter $x_0$ dans $f$ au lieu de $F$.`, `Toujours $+\\,C$, et condition dans $F(x) + C$.`],
            [`Formes composées`, `Mettre $\\ln|u|$ alors que le dénominateur est $u^2$.`, `$\\ln|u|$ seulement pour $\\dfrac{u'}{u}$ (exposant 1).`],
            [`Intégrale définie`, `Oublier $e^0 = 1$ ou inverser les bornes.`, `$\\int_b^a = -\\int_a^b$, et $e^0 = 1$.`],
            [`IPP`, `Dériver $v'$ au lieu de $u$ (mauvais sens).`, `ALPES (à partir du L) pour fixer $u$ à dériver.`],
            [`Aires`, `Rendre une aire négative.`, `Valeur absolue + Chasles aux changements de signe.`],
            [`Volumes`, `Intégrer $f$ au lieu de $[f]^2$, ou unité au carré.`, `$\\pi\\int [f]^2$, unité de volume au cube ($OI^3$).`],
          ],
        },
      ],
    },
    {
      id: 's-e',
      titre: `Section E — Planning du Bloc Analyse (sur 4 h)`,
      blocs: [
        {
          type: 'text',
          id: 'b-e1',
          contenu: `Gérer son temps, c'est tout un art. Si tu restes bloqué(e) une heure sur une primitive, tu sacrifies ta géométrie ou tes probabilités. Voici une organisation équilibrée pour le bloc Primitives & Intégrales.`,
        },
        {
          type: 'table',
          id: 'tbl-planning',
          headers: [`Durée indicative`, `Tâche`, `Objectif`],
          rows: [
            [`5 min`, `Lecture complète + repérage des formes`, `Classer chaque intégrale (référence / composée / IPP / aire / volume).`],
            [`40 min`, `Primitives + condition initiale`, `Engranger les premiers points rapidement, sans erreur de calcul.`],
            [`45 min`, `Intégrales définies, IPP, aires, volumes`, `Le cœur des points : rédiger proprement chaque justification.`],
            [`10 min`, `Vérification (dérivation, signes, unités)`, `Récupérer les points perdus par étourderie.`],
          ],
        },
      ],
    },
    {
      id: 's-fin',
      titre: `🎯 Conclusion de la Salle d'Examen`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-salle',
          titre: `Vérification finale — La Salle d'Examen`,
          contenu: [
            `Je classe une intégrale dans la bonne catégorie en moins d'une minute.`,
            `Je choisis sans hésiter entre forme composée et IPP.`,
            `Je rédige une aire (signe + valeur absolue + conversion) sans trou.`,
            `Je rédige un volume ($[f]^2$ + $\\pi$ + cm³) sans trou.`,
            `Je relis ma copie avec la check-list du correcteur.`,
          ],
        },
        {
          type: 'tip',
          id: 'verdict-salle',
          titre: `Le Verdict du Grand Frère`,
          contenu: [
            `🟢 **5/5** → Tu es paré(e) ; tu avances en caïman le jour du BAC.`,
            `🟡 **3 ou 4** → Relis la Section D (pièges) et refais l'exercice qui t'a bloqué(e).`,
            `🔴 **0 à 2** → Pas de panique : efface tes ratures, reprends les exercices pas à pas depuis le n°1.`,
          ],
        },
      ],
    },
  ],
};
