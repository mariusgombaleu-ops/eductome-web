import { Chapitre } from '../../types/course';

export const chapitreSalle: Chapitre = {
  id: 't4-salle',
  titre: `La Salle d'Entraînement`,
  duree: 45,
  niveau: 'BAC',
  xpGain: 40,
  objectifs: [
    `Affronter sereinement les grands types d'exercices de suites au BAC ivoirien`,
    `Gérer ton temps sur un problème de suites en conditions réelles d'examen`,
    `Rédiger une copie qui coche tous les points de barème du correcteur`,
  ],
  sections: [
    {
      id: 's-a',
      titre: `Section A — Stratégie BAC`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg-a1',
          pf: `Grand Frère, quand je vois un exercice sur les suites, je ne sais jamais par quel bout l'attraper. Parfois c'est arithmétique, parfois géométrique, parfois récurrente… Comment je fais pour ne pas perdre de temps à hésiter ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-a2',
          gf: `Champion(ne), je vais te donner six réflexes automatiques. Grave-les comme les numéros de téléphone de ta famille. Quand tu ouvres ta copie et que tu vois « suite », ces réflexes doivent se déclencher avant même que tu aies fini de lire l'énoncé. On va drill ça : dix exercices façon BAC.`,
        },
        {
          type: 'table',
          id: 'tbl-reflexes',
          headers: [`Réflexe`, `Ce que tu fais immédiatement`, `Pourquoi c'est essentiel`],
          rows: [
            [`🔍 Double test`, `Calcule $u_1 - u_0$ ET $\\dfrac{u_1}{u_0}$.`, `Un seul test ne suffit pas pour trancher arithmétique / géométrique.`],
            [`📐 Arithmétique`, `Écris $u_n = u_0 + nr$ avant tout calcul.`, `Cette formule t'évite de calculer terme par terme.`],
            [`🔎 Géométrique`, `Compare $|q|$ à $1$.`, `La valeur de $|q|$ donne la convergence sans calcul.`],
            [`🕸️ Récurrente`, `Trace $f$ et la droite $y = x$ au brouillon.`, `Le point d'intersection donne le candidat-limite.`],
            [`✍️ Récurrence`, `Écris Init / Hér / Concl avant de rédiger.`, `La structure en trois blocs garantit de ne rien oublier.`],
            [`✅ Vérification`, `Calcule $u_1, u_2$ pour confirmer ta formule.`, `Un contrôle de 30 secondes sauve des points.`],
          ],
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
          enonce: `🟢 **Exercice 1 — Tontine et suite arithmétique.** Au marché de Treichville, une vendeuse de pagnes verse $15\\,000$ F le premier mois, puis augmente son versement de $2\\,500$ F chaque mois. On note $u_n$ le versement du mois $n$, $u_0 = 15\\,000$. (1) Justifier que $(u_n)$ est arithmétique et préciser sa raison. (2) Exprimer $u_n$ et calculer $u_{12}$. (3) Déterminer la somme $S$ versée du mois $0$ au mois $12$ inclus.`,
          etapes: [],
          reponse: `(1) Arithmétique de raison $r = 2\\,500$. (2) $u_n = 15\\,000 + 2\\,500\\,n$, $u_{12} = 45\\,000$ F. (3) $S = 390\\,000$ F.`,
        },
        {
          type: 'text',
          id: 'b-copie-1',
          titre: `✍️ La Copie Parfaite — Exercice 1`,
          contenu: `**(1)** Pour tout $n$, $u_{n+1} - u_n = 2\\,500$ (constante) : $(u_n)$ est arithmétique de raison $r = 2\\,500$, $u_0 = 15\\,000$.

**(2)** $u_n = 15\\,000 + 2\\,500\\,n$, donc $u_{12} = 15\\,000 + 30\\,000 = 45\\,000$ F.

**(3)** De $u_0$ à $u_{12}$ : $13$ termes. $S = \\dfrac{13\\,(u_0 + u_{12})}{2} = \\dfrac{13 \\times 60\\,000}{2} = 390\\,000$ F.

*[Barème : Q1 : 1 pt · Q2 : 1,5 pt · Q3 : 1,5 pt — Total : 4 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice 2 — Capital et intérêts composés.** Un planteur de San-Pédro place $500\\,000$ F à $4\\,\\%$ par an à intérêts composés. On note $u_n$ le capital après $n$ années. (1) Montrer que $(u_n)$ est géométrique et préciser sa raison. (2) Exprimer $u_n$ en fonction de $n$. (3) À partir de combien d'années le capital dépasse-t-il $700\\,000$ F ?`,
          etapes: [],
          reponse: `(1) Géométrique de raison $q = 1,04$. (2) $u_n = 500\\,000 \\times 1,04^n$. (3) À partir de la 9ᵉ année.`,
          piege: `$+4\\,\\%$ donne $q = 1,04$, jamais $0,04$.`,
        },
        {
          type: 'text',
          id: 'b-copie-2',
          titre: `✍️ La Copie Parfaite — Exercice 2`,
          contenu: `**(1)** $u_{n+1} = 1,04\\,u_n$ : géométrique de raison $q = 1,04$, $u_0 = 500\\,000$.

**(2)** $u_n = 500\\,000 \\times 1,04^n$.

**(3)** $1,04^n > 1,4 \\iff n > \\dfrac{\\ln 1,4}{\\ln 1,04} \\approx 8,58$. Or $u_8 \\approx 684\\,280 < 700\\,000$ et $u_9 \\approx 711\\,651 > 700\\,000$ : le capital dépasse $700\\,000$ F à partir de la $9^{\\text{e}}$ année.

*[Barème : Q1 : 1 pt · Q2 : 1 pt · Q3 : 2 pts — Total : 4 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice 3 — Suite récurrente avec racine carrée.** Soit $(u_n)$ définie par $u_0 = 0$ et $u_{n+1} = \\sqrt{3u_n + 4}$. (1) Démontrer par récurrence que $0 \\leq u_n \\leq 4$ pour tout $n$. (2) Montrer que $u_{n+1} - u_n = \\dfrac{(4 - u_n)(1 + u_n)}{\\sqrt{3u_n + 4} + u_n}$ et en déduire le sens de variation. (3) Justifier la convergence et déterminer la limite.`,
          etapes: [],
          reponse: `(1) $0 \\leq u_n \\leq 4$ par récurrence. (2) $(u_n)$ croissante. (3) Croissante et majorée par $4$, donc converge vers $\\ell = 4$.`,
        },
        {
          type: 'text',
          id: 'b-copie-3',
          titre: `✍️ La Copie Parfaite — Exercice 3`,
          contenu: `**(1)** Init : $u_0 = 0 \\in [0\\ ;\\ 4]$. Hér : si $0 \\leq u_n \\leq 4$, alors $4 \\leq 3u_n + 4 \\leq 16$, d'où $2 \\leq u_{n+1} \\leq 4$ ; donc $0 \\leq u_{n+1} \\leq 4$. Conclusion : $\\forall n,\\ 0 \\leq u_n \\leq 4$.

**(2)** Par la conjuguée, $u_{n+1} - u_n = \\dfrac{3u_n + 4 - u_n^2}{\\sqrt{3u_n+4} + u_n} = \\dfrac{(4-u_n)(1+u_n)}{\\sqrt{3u_n+4} + u_n}$. Sur $[0\\ ;\\ 4]$, numérateur $\\geq 0$ et dénominateur $> 0$, donc $u_{n+1} - u_n \\geq 0$ : $(u_n)$ est croissante.

**(3)** Croissante et majorée par $4$, donc convergente. $\\ell = \\sqrt{3\\ell + 4} \\Rightarrow \\ell^2 - 3\\ell - 4 = 0 \\Rightarrow \\ell = 4$ (la racine $-1$ est exclue). Donc $\\displaystyle\\lim u_n = 4$.

*[Barème : Q1 : 2 pts · Q2 : 1,5 pt · Q3 : 1,5 pt — Total : 5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-4',
          niveau: 'BAC',
          enonce: `🔴 **Exercice 4 — Suite arithmético-géométrique.** Soit $(u_n)$ définie par $u_0 = 3$ et $u_{n+1} = 3u_n - 4$. On pose $v_n = u_n - 2$. (1) Montrer que $(v_n)$ est géométrique ; préciser raison et premier terme. (2) Exprimer $v_n$ puis $u_n$ en fonction de $n$. (3) Étudier le comportement de $(u_n)$ à l'infini.`,
          etapes: [],
          reponse: `(1) $(v_n)$ géométrique de raison $q = 3$, $v_0 = 1$. (2) $v_n = 3^n$, $u_n = 3^n + 2$. (3) $\\displaystyle\\lim u_n = +\\infty$ : diverge.`,
          conseil: `La constante $2$ est le point fixe : $\\ell = 3\\ell - 4 \\Rightarrow \\ell = 2$.`,
        },
        {
          type: 'text',
          id: 'b-copie-4',
          titre: `✍️ La Copie Parfaite — Exercice 4`,
          contenu: `**(1)** $v_{n+1} = u_{n+1} - 2 = 3u_n - 6 = 3(u_n - 2) = 3v_n$ : géométrique de raison $q = 3$, $v_0 = 1$.

**(2)** $v_n = 3^n$, donc $u_n = 3^n + 2$.

**(3)** $q = 3 > 1$, donc $\\displaystyle\\lim 3^n = +\\infty$ et $\\displaystyle\\lim u_n = +\\infty$ : la suite diverge.

*[Barème : Q1 : 1,5 pt · Q2 : 1,5 pt · Q3 : 1 pt — Total : 4 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-5',
          niveau: 'BAC',
          enonce: `🔴 **Exercice 5 — Problème de synthèse complet (M1 à M5).** Soit $(u_n)$ définie par $u_0 = 3$ et $u_{n+1} = \\dfrac{1}{2}u_n + 1$. On pose $v_n = u_n - 2$. (1) Calculer $u_1, u_2, u_3$ et conjecturer le sens de variation. (2a) Montrer que $(v_n)$ est géométrique de raison $\\dfrac12$. (2b) En déduire $v_n$ puis $u_n$. (3) Étudier la convergence de $(u_n)$. (4) Démontrer par récurrence que $u_n \\geq 2$ pour tout $n$.`,
          etapes: [],
          reponse: `(1) $(u_n)$ décroissante. (2) $v_n = \\dfrac{1}{2^n}$, $u_n = \\dfrac{1}{2^n} + 2$. (3) $\\displaystyle\\lim u_n = 2$. (4) $u_n \\geq 2$ par récurrence.`,
        },
        {
          type: 'text',
          id: 'b-copie-5',
          titre: `✍️ La Copie Parfaite — Exercice 5`,
          contenu: `**(1)** $u_1 = \\dfrac{5}{2}$, $u_2 = \\dfrac{9}{4}$, $u_3 = \\dfrac{17}{8}$ : on conjecture $(u_n)$ décroissante.

**(2a)** $v_{n+1} = \\dfrac12 u_n - 1 = \\dfrac12(u_n - 2) = \\dfrac12 v_n$ : géométrique, $q = \\dfrac12$, $v_0 = 1$. **(2b)** $v_n = \\dfrac{1}{2^n}$, donc $u_n = \\dfrac{1}{2^n} + 2$.

**(3)** $\\left|\\dfrac12\\right| < 1 \\Rightarrow \\displaystyle\\lim \\dfrac{1}{2^n} = 0$, donc $\\displaystyle\\lim u_n = 2$.

**(4)** Init : $u_0 = 3 \\geq 2$. Hér : si $u_n \\geq 2$, alors $u_{n+1} = \\dfrac12 u_n + 1 \\geq 1 + 1 = 2$. Conclusion : $\\forall n,\\ u_n \\geq 2$.

*[Barème : Q1 : 1,5 pt · Q2 : 3 pts · Q3 : 1,5 pt · Q4 : 2 pts — Total : 8 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-6',
          niveau: 'BASE',
          enonce: `🟢 **Exercice 6 — Vrai ou Faux sur la convergence.** Pour chaque affirmation, réponds par Vrai ou Faux en justifiant. (1) Toute suite croissante et majorée est convergente. (2) Toute suite décroissante à termes positifs est convergente. (3) Toute suite bornée est convergente.`,
          etapes: [],
          reponse: `(1) Vrai. (2) Vrai. (3) Faux — contre-exemple $u_n = (-1)^n$.`,
        },
        {
          type: 'text',
          id: 'b-copie-6',
          titre: `✍️ La Copie Parfaite — Exercice 6`,
          contenu: `**(1) Vrai** — c'est exactement le théorème de convergence monotone.

**(2) Vrai** — décroissante et minorée par $0$ (termes positifs), donc convergente.

**(3) Faux** — $u_n = (-1)^n$ est bornée mais oscille entre $-1$ et $1$ : elle diverge.

*[Barème : 1 pt par affirmation justifiée — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-7',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice 7 — Somme d'une suite géométrique.** Soit $(u_n)$ géométrique de premier terme $u_0 = 2$ et de raison $q = 3$. (1) Exprimer $u_n$. (2) Calculer $S = u_0 + u_1 + \\cdots + u_9$.`,
          etapes: [],
          reponse: `(1) $u_n = 2 \\times 3^n$. (2) $S = 3^{10} - 1 = 59\\,048$.`,
        },
        {
          type: 'text',
          id: 'b-copie-7',
          titre: `✍️ La Copie Parfaite — Exercice 7`,
          contenu: `**(1)** $u_n = 2 \\times 3^n$.

**(2)** La somme compte $10$ termes : $S = u_0\\,\\dfrac{1 - q^{10}}{1 - q} = 2 \\times \\dfrac{1 - 3^{10}}{1 - 3} = 2 \\times \\dfrac{3^{10} - 1}{2} = 3^{10} - 1 = 59\\,048$.

*[Barème : Q1 : 1,5 pt · Q2 : 2,5 pts — Total : 4 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-8',
          niveau: 'BAC',
          enonce: `🔴 **Exercice 8 — Suite récurrente quadratique.** Soit $(u_n)$ définie par $u_0 = 4$ et $u_{n+1} = \\dfrac{1}{5}u_n^2$. (1) Démontrer par récurrence que $0 \\leq u_n \\leq 4$ pour tout $n$. (2) Étudier le sens de variation de $(u_n)$. (3) En déduire que $(u_n)$ converge et déterminer sa limite.`,
          etapes: [],
          reponse: `(1) $0 \\leq u_n \\leq 4$. (2) $(u_n)$ décroissante. (3) Converge vers $\\ell = 0$.`,
        },
        {
          type: 'text',
          id: 'b-copie-8',
          titre: `✍️ La Copie Parfaite — Exercice 8`,
          contenu: `**(1)** Init : $u_0 = 4 \\in [0\\ ;\\ 4]$. Hér : si $0 \\leq u_n \\leq 4$, alors $0 \\leq u_n^2 \\leq 16$, donc $0 \\leq u_{n+1} = \\dfrac{1}{5}u_n^2 \\leq \\dfrac{16}{5} = 3,2 \\leq 4$. Conclusion : $\\forall n,\\ 0 \\leq u_n \\leq 4$.

**(2)** $u_{n+1} - u_n = \\dfrac{1}{5}u_n^2 - u_n = \\dfrac{1}{5}u_n(u_n - 5)$. Sur $[0\\ ;\\ 4]$, $u_n \\geq 0$ et $u_n - 5 < 0$, donc $u_{n+1} - u_n \\leq 0$ : $(u_n)$ est décroissante.

**(3)** Décroissante et minorée par $0$, donc convergente. $\\ell = \\dfrac{1}{5}\\ell^2 \\Rightarrow \\ell(\\ell - 5) = 0$ ; comme $\\ell \\in [0\\ ;\\ 4]$, $\\ell = 0$. Donc $\\displaystyle\\lim u_n = 0$.

*[Barème : Q1 : 2 pts · Q2 : 1,5 pt · Q3 : 1,5 pt — Total : 5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-9',
          niveau: 'BAC',
          enonce: `🔴 **Exercice 9 — Suite récurrente de type « moyenne ».** Soit $(u_n)$ définie par $u_0 = 3$ et $u_{n+1} = \\dfrac{1}{2}\\left(u_n + \\dfrac{4}{u_n}\\right)$. On admet que $u_n > 0$ pour tout $n$. (1) Déterminer le point fixe $\\ell$ de $f(x) = \\dfrac{1}{2}\\left(x + \\dfrac{4}{x}\\right)$ sur $]0\\ ;\\ +\\infty[$. (2) Calculer $u_1$ et $u_2$ (valeurs approchées). (3) On admet que $(u_n)$ converge. Justifier que sa limite est $\\ell$.`,
          etapes: [],
          reponse: `(1) $\\ell = 2$. (2) $u_1 = \\dfrac{13}{6} \\approx 2,17$, $u_2 \\approx 2,006$. (3) Par continuité de $f$, $\\ell = f(\\ell) = 2$.`,
        },
        {
          type: 'text',
          id: 'b-copie-9',
          titre: `✍️ La Copie Parfaite — Exercice 9`,
          contenu: `**(1)** $\\ell = \\dfrac{1}{2}\\left(\\ell + \\dfrac{4}{\\ell}\\right) \\Rightarrow 2\\ell = \\ell + \\dfrac{4}{\\ell} \\Rightarrow \\ell = \\dfrac{4}{\\ell} \\Rightarrow \\ell^2 = 4 \\Rightarrow \\ell = 2$ (car $\\ell > 0$).

**(2)** $u_1 = \\dfrac{1}{2}\\left(3 + \\dfrac{4}{3}\\right) = \\dfrac{13}{6} \\approx 2,17$ ; $u_2 \\approx 2,006$.

**(3)** $f$ est continue sur $]0\\ ;\\ +\\infty[$ et $(u_n)$ converge, donc sa limite vérifie $\\ell = f(\\ell)$ : d'après la question 1, $\\ell = 2$.

*[Barème : Q1 : 2 pts · Q2 : 1,5 pt · Q3 : 1,5 pt — Total : 5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-10',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice 10 — Démonstration par récurrence.** Soit $(u_n)$ définie par $u_0 = 1$ et $u_{n+1} = 2u_n + 1$. Démontrer par récurrence que $u_n = 2^{n+1} - 1$ pour tout $n \\in \\mathbb{N}$.`,
          etapes: [],
          reponse: `Par récurrence : init $P(0)$ vraie ($u_0 = 1 = 2^1 - 1$) ; hérédité $u_{n+1} = 2(2^{n+1}-1)+1 = 2^{n+2}-1$. Donc $u_n = 2^{n+1} - 1$.`,
        },
        {
          type: 'text',
          id: 'b-copie-10',
          titre: `✍️ La Copie Parfaite — Exercice 10`,
          contenu: `Soit $P(n)$ : « $u_n = 2^{n+1} - 1$ ». **Init :** $u_0 = 1$ et $2^{1} - 1 = 1$ : $P(0)$ vraie. **Hér :** supposons $u_n = 2^{n+1} - 1$. Alors $u_{n+1} = 2u_n + 1 = 2(2^{n+1} - 1) + 1 = 2^{n+2} - 2 + 1 = 2^{n+2} - 1$ : $P(n+1)$ vraie. **Conclusion :** par récurrence, $u_n = 2^{n+1} - 1$ pour tout $n$.

*[Barème : initialisation : 1 pt · hérédité : 2 pts · conclusion : 1 pt — Total : 4 pts]*`,
        },
      ],
    },
    {
      id: 's-c',
      titre: `Section C — La Check-list du correcteur`,
      blocs: [
        {
          type: 'text',
          id: 'b-c1',
          contenu: `Avant de rendre, relis ta copie avec les yeux du correcteur. Chaque ligne est un point qu'on te donne ou qu'on te retire.`,
        },
        {
          type: 'table',
          id: 'tbl-checklist',
          headers: [`Point contrôlé`, `Ce que le correcteur cherche`],
          rows: [
            [`Nature justifiée`, `« $u_{n+1} - u_n = r$ » (arithm.) ou « $\\dfrac{u_{n+1}}{u_n} = q$ » (géom.) écrit explicitement.`],
            [`Raison correcte`, `$q = 1 + t/100$ pour une hausse de $t\\,\\%$ ; jamais le taux brut.`],
            [`Nombre de termes`, `Comptage $n - p + 1$ avant toute formule de somme.`],
            [`Récurrence complète`, `Les trois mots : Initialisation, Hérédité, Conclusion.`],
            [`Hypothèse de récurrence`, `« Supposons $P(n)$ vraie » écrit avant les calculs de l'hérédité.`],
            [`Convergence justifiée`, `« Monotone ET bornée donc convergente » — les deux conditions.`],
            [`Limite et point fixe`, `$f(\\ell) = \\ell$ résolu, et racine gardée dans l'intervalle de la suite.`],
            [`Phrase de conclusion`, `Résultat final énoncé en phrase complète, avec l'unité s'il y en a une.`],
          ],
        },
      ],
    },
    {
      id: 's-d',
      titre: `Section D — Les pièges à éviter au BAC`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-pieges',
          headers: [`Module / Notion`, `Le piège classique`, `La correction exigée`],
          rows: [
            [`Comptage`, `Compter $n$ termes de $u_0$ à $u_n$ au lieu de $n+1$.`, `Nombre de termes $= n - p + 1$.`],
            [`Géométrique`, `Écrire $q = 0,06$ au lieu de $1,06$ pour $+6\\,\\%$.`, `Hausse : $q = 1 + t/100$. Baisse : $q = 1 - t/100$.`],
            [`Puissances`, `Confondre $2 \\times 3^n$ et $6^n$.`, `La puissance a priorité : $2 \\times 3^n$ reste tel quel.`],
            [`Récurrence`, `Oublier l'initialisation.`, `Toujours Init + Hér + Concl, même si c'est évident.`],
            [`Point fixe`, `Résoudre $f(\\ell) = \\ell$ avant de prouver la convergence.`, `D'abord monotone + bornée, ensuite le point fixe.`],
            [`Convergence`, `Croire qu'une suite bornée converge.`, `Bornée + monotone = convergente ; bornée seule = rien.`],
            [`Seuil`, `Garder un rang décimal ($n = 8,58$).`, `Arrondir à l'entier supérieur et vérifier les deux rangs voisins.`],
          ],
        },
      ],
    },
    {
      id: 's-e',
      titre: `Section E — Planning du bloc Suites (épreuve de 4 h)`,
      blocs: [
        {
          type: 'text',
          id: 'b-e1',
          contenu: `Gérer son temps, c'est tout un art. Si tu restes bloqué(e) une heure sur une récurrence, tu sacrifies ta géométrie ou tes probabilités. Voici une organisation équilibrée pour un problème de suites.`,
        },
        {
          type: 'table',
          id: 'tbl-planning',
          headers: [`Durée indicative`, `Tâche`, `Objectif`],
          rows: [
            [`10 min`, `Lecture complète + calcul de $u_0, u_1, u_2$`, `Identifier le type de suite et numéroter les questions.`],
            [`15 min`, `Brouillon structuré (formules, point fixe, graphique)`, `Poser les outils utiles dans un coin propre.`],
            [`90 min`, `Rédaction soignée, question par question`, `Sauter les questions qui bloquent et y revenir.`],
            [`15 min`, `Vérification (3 blocs de récurrence, signes, comptage)`, `Récupérer les points perdus par étourderie.`],
          ],
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-salle',
          titre: `Auto-évaluation — Salle d'Entraînement`,
          contenu: [
            `Je résous un problème arithmétique avec somme de termes (Ex. 1, 7).`,
            `Je modélise des intérêts composés et je résous une inéquation de seuil (Ex. 2).`,
            `Je mène le protocole complet d'une suite récurrente : borne, monotonie, convergence, point fixe (Ex. 3, 8, 9).`,
            `Je transforme une arithmético-géométrique en suite auxiliaire géométrique (Ex. 4, 5).`,
            `Je rédige une démonstration par récurrence complète (Ex. 5, 6, 10).`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-salle',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Tu es paré(e), Champion(ne). La mention t'attend.`,
            `🟡 **3 ou 4** → Relis la Section D (pièges) et refais l'exercice qui t'a bloqué(e).`,
            `🔴 **0 à 2** → Pas de panique : reprends les modules correspondants. Chaque module est une marche.`,
          ],
        },
      ],
    },
  ],
};
