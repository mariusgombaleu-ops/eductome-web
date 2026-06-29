import { Chapitre } from '../../types/course';

export const chapitreAnnexe: Chapitre = {
  id: 't4-annexe',
  titre: `Annexes — Formulaire & Fiches de Révision`,
  duree: 10,
  niveau: 'BAC',
  xpGain: 15,
  sections: [
    {
      id: 's-a',
      titre: `Annexe A — Formulaire complet`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-a1',
          titre: `A.1 — Suites arithmétiques et géométriques`,
          headers: [`Notion`, `Suite arithmétique`, `Suite géométrique`],
          rows: [
            [`Définition`, `$u_{n+1} = u_n + r$`, `$u_{n+1} = q\\,u_n$`],
            [`Raison`, `$r = u_{n+1} - u_n$`, `$q = \\dfrac{u_{n+1}}{u_n}$ (termes non nuls)`],
            [`Terme général`, `$u_n = u_0 + nr$`, `$u_n = u_0\\,q^n$`],
            [`Terme général (depuis $u_p$)`, `$u_n = u_p + (n-p)r$`, `$u_n = u_p\\,q^{\\,n-p}$`],
            [`Somme ($n+1$ termes)`, `$\\dfrac{(n+1)(u_0 + u_n)}{2}$`, `$u_0\\,\\dfrac{1 - q^{\\,n+1}}{1 - q}$ ($q \\neq 1$)`],
            [`Sens de variation`, `signe de $r$`, `selon $q$ et le signe de $u_0$`],
          ],
        },
        {
          type: 'table',
          id: 'tbl-a2',
          titre: `A.2 — Limites de référence`,
          headers: [`Expression`, `Limite en $+\\infty$`, `Condition`],
          rows: [
            [`$\\dfrac{1}{n}$, $\\dfrac{1}{n^2}$, $\\dfrac{1}{\\sqrt{n}}$`, `$0$`, `—`],
            [`$q^n$`, `$0$`, `$|q| < 1$`],
            [`$q^n$`, `$+\\infty$`, `$q > 1$`],
            [`$\\dfrac{P(n)}{Q(n)}$`, `rapport des termes dominants`, `fraction de polynômes`],
            [`$\\dfrac{n^k}{q^n}$`, `$0$`, `$q > 1$ (croissance comparée)`],
            [`$\\dfrac{q^n}{n^k}$`, `$+\\infty$`, `$q > 1$ (croissance comparée)`],
          ],
        },
        {
          type: 'table',
          id: 'tbl-a3',
          titre: `A.3 — Méthodes-clés des suites récurrentes`,
          headers: [`Objectif`, `Méthode`, `À retenir`],
          rows: [
            [`Encadrer $(u_n)$`, `Récurrence + intervalle stable par $f$`, `$f(I) \\subseteq I$ garde la suite dans $I$.`],
            [`Sens de variation`, `Signe de $u_{n+1} - u_n = f(u_n) - u_n$`, `Conjuguée si une racine apparaît.`],
            [`Convergence`, `Théorème de convergence monotone`, `Monotone ET bornée du bon côté.`],
            [`Valeur de la limite`, `Résoudre $f(\\ell) = \\ell$`, `Garder la racine dans l'intervalle de la suite.`],
            [`Construction graphique`, `Courbe de $f$ et droite $y = x$`, `Toile d'araignée : escalier ou spirale.`],
            [`Démontrer une formule`, `Récurrence (Init / Hér / Concl)`, `Partir de l'hypothèse dans l'hérédité.`],
          ],
        },
      ],
    },
    {
      id: 's-b',
      titre: `Annexe B — Charte typographique BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b-b1',
          contenu: `Le correcteur lit aussi la **forme**. Voici les notations attendues sur une copie de Terminale D ivoirienne.`,
        },
        {
          type: 'table',
          id: 'tbl-b',
          headers: [`Règle`, `À écrire`, `À éviter`],
          rows: [
            [`Intervalles avec crochets`, `$[1\\ ;\\ 3]$, $[2\\ ;\\ +\\infty[$`, `$(1, 3)$`],
            [`Séparateur point-virgule`, `$[0\\ ;\\ 4]$`, `$[0, 4]$`],
            [`Virgule décimale`, `$2,25$ ; $-0,5$`, `$2.25$`],
            [`Ensembles`, `$\\mathbb{N}$, $\\mathbb{R} \\setminus \\{a\\}$`, `N, R privé de a`],
            [`Limite en romain`, `$\\displaystyle\\lim_{n \\to +\\infty}$`, `lim en italique`],
            [`Fractions affichées`, `$\\dfrac{u_{n+1}}{u_n}$`, `$u(n+1)/u(n)$ dans un calcul posé`],
            [`Indices`, `$u_n$, $u_{n+1}$, $u_{n-1}$`, `un, un+1 sans indice`],
            [`Suite (notation)`, `$(u_n)$ ou $(u_n)_{n \\in \\mathbb{N}}$`, `$u_n$ seul pour désigner la suite`],
          ],
        },
      ],
    },
    {
      id: 's-c',
      titre: `Annexe C — Vocabulaire officiel du BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b-c1',
          contenu: `Les mots exacts attendus par le correcteur, regroupés depuis les briques 📘 de chaque module.`,
        },
        {
          type: 'table',
          id: 'tbl-c',
          headers: [`Terme officiel`, `Ce qu'il désigne`],
          rows: [
            [`Suite numérique`, `Fonction de $\\mathbb{N}$ vers $\\mathbb{R}$, notée $(u_n)$.`],
            [`Terme général`, `L'expression de $u_n$ en fonction de $n$.`],
            [`Majorée / minorée / bornée`, `Existence d'un plafond $M$, d'un plancher $m$, ou des deux.`],
            [`Monotone`, `Croissante ou décroissante (même sens de variation).`],
            [`Convergente / divergente`, `Qui admet (ou non) une limite finie.`],
            [`Suite arithmétique`, `Vérifie $u_{n+1} = u_n + r$ ; $r$ est la raison.`],
            [`Suite géométrique`, `Vérifie $u_{n+1} = q\\,u_n$ ; $q$ est la raison.`],
            [`Suite récurrente`, `Définie par $u_0$ et $u_{n+1} = f(u_n)$.`],
            [`Intervalle stable`, `$f(I) \\subseteq I$ : la suite reste dans $I$.`],
            [`Point fixe`, `Réel $\\ell$ tel que $f(\\ell) = \\ell$ ; candidat-limite.`],
            [`Théorème de convergence monotone`, `Monotone + bornée du bon côté ⟹ convergente.`],
            [`Initialisation / hérédité`, `Les deux temps moteurs du raisonnement par récurrence.`],
            [`Croissance comparée`, `$q^n$ ($q > 1$) l'emporte sur toute puissance $n^k$.`],
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
          id: 'tbl-d',
          headers: [`N°`, `Le réflexe`, `Pourquoi ça compte`],
          rows: [
            [`1`, `Calculer $u_0, u_1, u_2$ avant tout.`, `Identifie le type de suite et oriente la méthode.`],
            [`2`, `Tester $u_1 - u_0$ ET $\\dfrac{u_1}{u_0}$.`, `Tranche entre arithmétique et géométrique.`],
            [`3`, `Pour $+t\\,\\%$, poser $q = 1 + t/100$.`, `Évite l'erreur la plus chère du chapitre géométrie.`],
            [`4`, `Compter le nombre de termes par $n - p + 1$.`, `Une somme juste commence par un comptage juste.`],
            [`5`, `Écrire Init / Hér / Concl avant de rédiger.`, `Aucune étape de récurrence n'est oubliée.`],
            [`6`, `Démarrer l'hérédité par l'hypothèse de récurrence.`, `Le correcteur cherche cette phrase précise.`],
            [`7`, `Pour une suite récurrente, tracer $f$ et $y = x$.`, `Le point fixe et le sens sautent aux yeux.`],
            [`8`, `Convergence : monotone ET bornée, jamais l'un seul.`, `Une borne sans monotonie ne prouve rien.`],
            [`9`, `Résoudre $f(\\ell) = \\ell$ après la convergence.`, `Garder la racine qui appartient à l'intervalle.`],
            [`10`, `Arrondir un rang de seuil à l'entier supérieur.`, `Un rang $n$ est entier ; on vérifie les voisins.`],
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
          id: 'b-e1',
          contenu: `Les erreurs qui coûtent le plus cher chaque année — et comment les éviter.`,
        },
        {
          type: 'table',
          id: 'tbl-e',
          headers: [`Erreur fréquente`, `Pourquoi c'est un piège`, `La bonne méthode`],
          rows: [
            [`Compter $n$ termes de $u_0$ à $u_n$.`, `Il y en a $n+1$ : le résultat de la somme est faux.`, `Toujours $n - p + 1$.`],
            [`Prendre $q = 0,06$ pour $+6\\,\\%$.`, `Le capital fond au lieu de grandir.`, `$q = 1 + t/100$.`],
            [`Confondre $2 \\times 3^n$ et $6^n$.`, `La priorité des opérations est brisée.`, `La puissance d'abord : $2 \\times 3^n$ reste tel quel.`],
            [`Oublier l'initialisation.`, `Sans le premier domino, toute la chaîne tombe.`, `Init + Hér + Concl, toujours les trois.`],
            [`Résoudre $f(\\ell) = \\ell$ sans prouver la convergence.`, `Le raisonnement devient circulaire.`, `Monotone + bornée d'abord, point fixe ensuite.`],
            [`Dire qu'une suite bornée converge.`, `$(-1)^n$ est bornée mais oscille.`, `Bornée + monotone = convergente.`],
            [`Garder un rang de seuil décimal.`, `$n = 8,58$ n'existe pas comme rang.`, `Arrondir à l'entier supérieur, vérifier les voisins.`],
            [`Garder la mauvaise racine du point fixe.`, `La limite obtenue n'a pas de sens.`, `Choisir la racine dans l'intervalle de la suite.`],
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
          id: 'tbl-f',
          headers: [`Module`, `Situations BAC couvertes`, `Exercices-Types résolus`],
          rows: [
            [`M1 — Généralités`, `Sens de variation, encadrement, convergence monotone.`, `Suite décroissante minorée, variation par quotient.`],
            [`M2 — Arithmétiques`, `Terme général et sommes (tontines, cotisations).`, `Tontine d'Abobo, somme des premiers entiers.`],
            [`M3 — Géométriques`, `Intérêts composés, seuils, sommes géométriques.`, `Capital à $4\\,\\%$, somme géométrique.`],
            [`M4 — Récurrentes`, `Point fixe, encadrement, monotonie, toile d'araignée.`, `Suite homographique, construction graphique.`],
            [`M5 — Récurrence & infini`, `Démonstration de formules, croissances comparées.`, `Inégalité par récurrence, limite $n^k/q^n$.`],
            [`Salle d'Entraînement`, `10 sujets BAC mixant tous les modules.`, `Synthèse complète + check-list correcteur.`],
          ],
        },
      ],
    },
    {
      id: 's-fin',
      titre: `On a gâté le coin, Champion(ne) !`,
      blocs: [
        {
          type: 'text',
          id: 'b-fin',
          contenu: `Souviens-toi de nos séances de révision, quand on effaçait le grand tableau du Lycée Classique d'Abidjan sous la chaleur de midi. La clé du succès n'est pas dans la magie : elle est dans ces réflexes appliqués méticuleusement. Le reste, Champion(ne), c'est ton travail qui parle.

Tu as bouclé tout l'arsenal des suites numériques. Garde ce tome près de toi jusqu'au jour J, et rendez-vous au **Tome 5 — Les Fonctions Logarithme et Exponentielle** pour continuer à gâter le coin.

**EDUCTOME — Apprendre sans limites. La méthode avant la chance.**`,
        },
      ],
    },
  ],
};
