// ============================================================================
// Données d'examen — Tome 4 · Les Suites Numériques (Série D).
// Aligné sur les modules du cours : M1 Généralités · M2 Arithmétiques ·
// M3 Géométriques · M4 Récurrentes · M5 Récurrence & comportements à l'infini.
// KaTeX `$...$` autorisé ; dans une string TS les backslashes sont doublés.
// ============================================================================

import type { ExamData } from '../../types/examen';

export const examT4Suites: ExamData = {
  id: 't4-suites',
  tome: 'Tome 4 — Les Suites Numériques',
  matiere: 'Mathématiques · Série D',
  sousTitre: 'Suites & convergence',
  moduleRedirect: { label: 'Réviser le Module 4 — Les Suites Récurrentes', courseId: 't4-suites' },

  // ── DEVOIR SURVEILLÉ ──────────────────────────────────────────────────────
  devoir: {
    BASE: {
      level: 'BASE',
      dureeMin: 30,
      description: 'Nature, terme général et sommes — application immédiate du cours.',
      exercices: [
        {
          id: 'd-base-ex1',
          titre: 'Exercice 1',
          points: 20,
          consigne: 'Répondre directement en appliquant les formules du cours.',
          questions: [
            {
              id: 'q1', points: 5,
              enonce: 'Soit $(u_n)$ arithmétique de premier terme $u_0=2$ et de raison $r=3$. Calculer $u_{10}$.',
              corrige: 'Formule : $u_n=u_0+nr$. Donc $u_{10}=2+10\\times 3=\\mathbf{32}$.',
            },
            {
              id: 'q2', points: 5,
              enonce: 'Soit $(v_n)$ géométrique de premier terme $v_0=1$ et de raison $q=2$. Calculer $v_5$.',
              corrige: 'Formule : $v_n=v_0\\,q^{n}$. Donc $v_5=1\\times 2^{5}=\\mathbf{32}$.',
            },
            {
              id: 'q3', points: 5,
              enonce: 'Calculer la somme $S=1+2+3+\\cdots+100$.',
              corrige: 'Somme d\'une arithmétique : $S=\\dfrac{n(n+1)}{2}=\\dfrac{100\\times 101}{2}=\\mathbf{5050}$.',
              notePiege: 'Il y a bien $100$ termes : $\\frac{\\text{(1er + dernier)}\\times \\text{nombre de termes}}{2}$.',
            },
            {
              id: 'q4', points: 5,
              enonce: 'On donne $u_n=5n-3$. Préciser la nature de $(u_n)$ et sa raison.',
              corrige: '$u_{n+1}-u_n=\\big(5(n+1)-3\\big)-\\big(5n-3\\big)=5$ (constante) : suite $\\mathbf{arithmétique}$ de raison $\\mathbf{r=5}$.',
            },
          ],
        },
      ],
    },

    MOYEN: {
      level: 'MOYEN',
      dureeMin: 60,
      description: 'Détermination de raison, terme général, sommes et limites + 1 piège.',
      exercices: [
        {
          id: 'd-moyen-ex1',
          titre: 'Exercice 1',
          points: 11,
          consigne: 'Soit $(u_n)$ une suite arithmétique telle que $u_2=7$ et $u_5=16$.',
          questions: [
            {
              id: 'q1', points: 3,
              enonce: 'Déterminer la raison $r$.',
              corrige: '$u_5=u_2+(5-2)r$ donc $16=7+3r$, d\'où $r=\\mathbf{3}$.',
            },
            {
              id: 'q2', points: 3,
              enonce: 'Déterminer le premier terme $u_0$.',
              corrige: '$u_2=u_0+2r$ donc $u_0=7-2\\times 3=\\mathbf{1}$.',
            },
            {
              id: 'q3', points: 2.5,
              enonce: 'Exprimer $u_n$ en fonction de $n$.',
              corrige: '$u_n=u_0+nr=\\mathbf{1+3n}$.',
            },
            {
              id: 'q4', points: 2.5,
              enonce: 'Calculer la somme $S=u_0+u_1+\\cdots+u_{10}$.',
              corrige: '$11$ termes : $S=\\dfrac{(u_0+u_{10})\\times 11}{2}=\\dfrac{(1+31)\\times 11}{2}=\\mathbf{176}$.',
              notePiege: 'De $u_0$ à $u_{10}$ il y a $11$ termes, pas $10$ — sinon demi-barème.',
            },
          ],
        },
        {
          id: 'd-moyen-ex2',
          titre: 'Exercice 2',
          points: 9,
          consigne: 'Soit $(v_n)$ géométrique de premier terme $v_0=3$ et de raison $q=\\dfrac{1}{2}$.',
          questions: [
            {
              id: 'q1', points: 3,
              enonce: 'Exprimer $v_n$ en fonction de $n$.',
              corrige: '$v_n=v_0\\,q^{n}=\\mathbf{3\\left(\\dfrac{1}{2}\\right)^{n}}$.',
            },
            {
              id: 'q2', points: 3,
              enonce: 'Déterminer $\\displaystyle\\lim_{n\\to+\\infty} v_n$.',
              corrige: 'Comme $|q|=\\dfrac{1}{2}<1$, on a $q^n\\to 0$, donc $\\lim v_n=\\mathbf{0}$.',
              notePiege: 'La justification $|q|<1$ est exigée, pas seulement le résultat.',
            },
            {
              id: 'q3', points: 3,
              enonce: 'Calculer $S_n=v_0+v_1+\\cdots+v_n$ puis sa limite.',
              corrige: '$S_n=v_0\\dfrac{1-q^{n+1}}{1-q}=3\\dfrac{1-(1/2)^{n+1}}{1/2}=6\\big(1-(1/2)^{n+1}\\big)$. Comme $(1/2)^{n+1}\\to 0$, $\\lim S_n=\\mathbf{6}$.',
            },
          ],
        },
      ],
    },

    BAC: {
      level: 'BAC',
      dureeMin: 120,
      description: 'Récurrence, suite auxiliaire géométrique et modélisation — raisonnement complet.',
      exercices: [
        {
          id: 'd-bac-ex1',
          titre: 'Exercice 1',
          points: 11,
          consigne: 'Soit $(u_n)$ définie par $u_0=1$ et $u_{n+1}=\\dfrac{1}{2}u_n+3$ pour tout $n\\in\\mathbb{N}$.',
          questions: [
            {
              id: 'q1', points: 4,
              enonce: 'Démontrer par récurrence que $u_n<6$ pour tout $n\\in\\mathbb{N}$.',
              corrige: 'Initialisation : $u_0=1<6$. Hérédité : si $u_n<6$ alors $\\frac{1}{2}u_n<3$ donc $u_{n+1}=\\frac{1}{2}u_n+3<6$. La propriété est héréditaire, donc vraie pour tout $n$.',
              notePiege: 'Les deux étapes (initialisation ET hérédité) plus la conclusion sont notées séparément.',
            },
            {
              id: 'q2', points: 4,
              enonce: 'On pose $v_n=u_n-6$. Montrer que $(v_n)$ est géométrique, puis exprimer $u_n$ en fonction de $n$.',
              corrige: '$v_{n+1}=u_{n+1}-6=\\frac{1}{2}u_n+3-6=\\frac{1}{2}(u_n-6)=\\frac{1}{2}v_n$ : $(v_n)$ est géométrique de raison $\\frac{1}{2}$, $v_0=1-6=-5$. Donc $v_n=-5\\left(\\frac{1}{2}\\right)^n$ et $u_n=\\mathbf{6-5\\left(\\dfrac{1}{2}\\right)^{n}}$.',
            },
            {
              id: 'q3', points: 3,
              enonce: 'En déduire $\\displaystyle\\lim_{n\\to+\\infty} u_n$.',
              corrige: 'Comme $\\left(\\frac{1}{2}\\right)^n\\to 0$, on a $\\lim u_n=\\mathbf{6}$. La suite converge vers son point fixe.',
            },
          ],
        },
        {
          id: 'd-bac-ex2',
          titre: 'Exercice 2',
          points: 9,
          consigne: 'Un capital de $10\\,000$ F est placé au taux annuel de $5\\%$. On note $C_n$ le capital après $n$ années ($C_0=10\\,000$).',
          questions: [
            {
              id: 'q1', points: 3,
              enonce: 'Exprimer $C_{n+1}$ en fonction de $C_n$ et préciser la nature de $(C_n)$.',
              corrige: 'Une hausse de $5\\%$ multiplie par $1{,}05$ : $C_{n+1}=1{,}05\\,C_n$. $(C_n)$ est $\\mathbf{géométrique}$ de raison $q=1{,}05$.',
            },
            {
              id: 'q2', points: 3,
              enonce: 'Exprimer $C_n$ en fonction de $n$, puis calculer $C_5$ (arrondi au franc).',
              corrige: '$C_n=10\\,000\\times 1{,}05^{\\,n}$. Donc $C_5=10\\,000\\times 1{,}05^{5}\\approx \\mathbf{12\\,763}$ F.',
            },
            {
              id: 'q3', points: 3,
              enonce: 'Déterminer $\\displaystyle\\lim_{n\\to+\\infty} C_n$ et interpréter.',
              corrige: 'Comme $q=1{,}05>1$, $q^n\\to+\\infty$ donc $\\lim C_n=\\mathbf{+\\infty}$ : le capital croît indéfiniment.',
              notePiege: 'Ici $q>1$ : la suite diverge. Ne pas confondre avec le cas $|q|<1$.',
            },
          ],
        },
      ],
    },
  },

  // ── INTERROGATION QCM ─────────────────────────────────────────────────────
  interro: {
    BASE: {
      level: 'BASE',
      dureeMin: 10,
      description: 'Rappels de cours & formules en application directe.',
      questions: [
        { id: 'b1', competence: 'formule', prompt: 'La formule $u_n=u_0+nr$ caractérise une suite :', options: [{ id: 'A', text: 'géométrique' }, { id: 'B', text: 'arithmétique' }, { id: 'C', text: 'constante' }, { id: 'D', text: 'récurrente' }], correct: 'B', explication: 'Un ajout constant $r$ à chaque rang : c\'est une suite arithmétique.' },
        { id: 'b2', competence: 'formule', prompt: 'La formule $u_n=u_0\\,q^{n}$ caractérise une suite :', options: [{ id: 'A', text: 'arithmétique' }, { id: 'B', text: 'géométrique' }, { id: 'C', text: 'affine' }, { id: 'D', text: 'alternée' }], correct: 'B', explication: 'Une multiplication par une raison $q$ à chaque rang : suite géométrique.' },
        { id: 'b3', competence: 'methode', prompt: 'Pour montrer qu\'une suite est arithmétique, on calcule :', options: [{ id: 'A', text: '$u_{n+1}\\times u_n$' }, { id: 'B', text: '$u_{n+1}-u_n$' }, { id: 'C', text: '$\\dfrac{u_{n+1}}{u_n}$' }, { id: 'D', text: '$u_n^2$' }], correct: 'B', explication: 'Si $u_{n+1}-u_n$ est constante, la suite est arithmétique (cette constante est la raison).' },
        { id: 'b4', competence: 'formule', prompt: 'Une suite géométrique de raison $q$ avec $|q|<1$ a pour limite :', options: [{ id: 'A', text: '$+\\infty$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$0$' }, { id: 'D', text: '$q$' }], correct: 'C', explication: 'Si $|q|<1$ alors $q^n\\to 0$, donc la suite tend vers $0$.' },
        { id: 'b5', competence: 'methode', prompt: 'Pour montrer qu\'une suite (à termes non nuls) est géométrique, on calcule :', options: [{ id: 'A', text: '$u_{n+1}-u_n$' }, { id: 'B', text: '$u_{n+1}+u_n$' }, { id: 'C', text: '$\\dfrac{u_{n+1}}{u_n}$' }, { id: 'D', text: '$\\sqrt{u_n}$' }], correct: 'C', explication: 'Si le rapport $\\frac{u_{n+1}}{u_n}$ est constant, la suite est géométrique (ce rapport est la raison).' },
        { id: 'b6', competence: 'formule', prompt: 'La somme $1+2+3+\\cdots+n$ vaut :', options: [{ id: 'A', text: '$\\dfrac{n(n+1)}{2}$' }, { id: 'B', text: '$n^2$' }, { id: 'C', text: '$\\dfrac{n(n-1)}{2}$' }, { id: 'D', text: '$2n$' }], correct: 'A', explication: 'Somme des $n$ premiers entiers (arithmétique de raison $1$) : $\\frac{n(n+1)}{2}$.' },
      ],
    },

    MOYEN: {
      level: 'MOYEN',
      dureeMin: 20,
      description: 'Méthodes mixtes (raison, sommes, limites, récurrence) + pièges.',
      questions: [
        { id: 'm1', competence: 'methode', prompt: 'Suite arithmétique avec $u_2=7$ et $u_5=16$ : la raison vaut :', options: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$9$' }, { id: 'D', text: '$\\dfrac{16}{7}$' }], correct: 'B', explication: '$u_5=u_2+3r \\Rightarrow 16=7+3r \\Rightarrow r=3$.' },
        { id: 'm2', competence: 'formule', prompt: '$\\displaystyle\\lim_{n\\to+\\infty}\\left(\\dfrac{1}{2}\\right)^{n}$ vaut :', options: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$+\\infty$' }, { id: 'C', text: '$0$' }, { id: 'D', text: '$\\dfrac{1}{2}$' }], correct: 'C', explication: 'Raison $\\frac{1}{2}$ avec $|q|<1$ : la puissance tend vers $0$.' },
        { id: 'm3', competence: 'methode', prompt: 'Un raisonnement par récurrence comporte :', options: [{ id: 'A', text: 'une seule étape de calcul' }, { id: 'B', text: 'l\'initialisation puis l\'hérédité' }, { id: 'C', text: 'le conjugué' }, { id: 'D', text: 'la comparaison de degrés' }], correct: 'B', explication: 'On vérifie au premier rang (initialisation) puis on montre le passage de $n$ à $n+1$ (hérédité).' },
        { id: 'm4', competence: 'formule', prompt: 'La somme $v_0+v_1+\\cdots+v_n$ d\'une géométrique de raison $q\\neq 1$ vaut :', options: [{ id: 'A', text: '$v_0\\dfrac{1-q^{n+1}}{1-q}$' }, { id: 'B', text: '$v_0\\dfrac{1-q^{n}}{1-q}$' }, { id: 'C', text: '$\\dfrac{n(v_0+v_n)}{2}$' }, { id: 'D', text: '$v_0\\,q^{n}$' }], correct: 'A', explication: 'Avec $n+1$ termes (de $v_0$ à $v_n$) : $v_0\\frac{1-q^{n+1}}{1-q}$.' },
        { id: 'm5', competence: 'methode', prompt: 'Une suite est croissante lorsque, pour tout $n$ :', options: [{ id: 'A', text: '$u_{n+1}-u_n\\le 0$' }, { id: 'B', text: '$u_{n+1}-u_n\\ge 0$' }, { id: 'C', text: '$u_n>0$' }, { id: 'D', text: '$\\dfrac{u_{n+1}}{u_n}<1$' }], correct: 'B', explication: 'Croissance $\\Leftrightarrow$ $u_{n+1}-u_n\\ge 0$ pour tout $n$.' },
        { id: 'm6', competence: 'formule', prompt: 'Une suite géométrique de raison $q=2$ (premier terme positif) a pour limite :', options: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$+\\infty$' }, { id: 'D', text: '$1$' }], correct: 'C', explication: 'Si $q>1$ alors $q^n\\to+\\infty$ : la suite diverge vers $+\\infty$.' },
        { id: 'm7', competence: 'methode', prompt: 'Pour étudier la limite d\'une suite récurrente $u_{n+1}=f(u_n)$, le point fixe se trouve en résolvant :', options: [{ id: 'A', text: '$f(\\ell)=0$' }, { id: 'B', text: '$f(\\ell)=\\ell$' }, { id: 'C', text: '$f\'(\\ell)=0$' }, { id: 'D', text: '$\\ell=0$' }], correct: 'B', explication: 'Si la suite converge vers $\\ell$, alors $\\ell$ vérifie $\\ell=f(\\ell)$ (équation du point fixe).' },
        { id: 'm8', competence: 'formule', prompt: '$\\displaystyle\\lim_{n\\to+\\infty} q^{n}$ pour $q>1$ vaut :', options: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$+\\infty$' }, { id: 'D', text: '$q$' }], correct: 'C', explication: 'Pour $q>1$, les puissances croissent sans borne : limite $+\\infty$.' },
      ],
    },

    BAC: {
      level: 'BAC',
      dureeMin: 30,
      description: 'Énoncés type BAC : récurrence, suite auxiliaire, convergence, pièges.',
      questions: [
        { id: 'x1', competence: 'methode', prompt: 'Dans une récurrence, l\'hérédité consiste à montrer que :', options: [{ id: 'A', text: 'la propriété est vraie au rang $0$' }, { id: 'B', text: 'si vraie au rang $n$, elle l\'est au rang $n+1$' }, { id: 'C', text: 'la suite est bornée' }, { id: 'D', text: 'la suite converge' }], correct: 'B', explication: 'L\'hérédité : en supposant $P(n)$ vraie, on démontre $P(n+1)$.' },
        { id: 'x2', competence: 'formule', prompt: 'Si $u_n=6-5\\left(\\dfrac{1}{2}\\right)^{n}$, alors $\\displaystyle\\lim_{n\\to+\\infty} u_n$ vaut :', options: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$6$' }, { id: 'D', text: '$+\\infty$' }], correct: 'C', explication: '$\\left(\\frac{1}{2}\\right)^n\\to 0$ donc $u_n\\to 6$.' },
        { id: 'x3', competence: 'methode', prompt: 'Pour montrer que $v_n=u_n-6$ est géométrique, on établit que :', options: [{ id: 'A', text: '$v_{n+1}-v_n$ est constante' }, { id: 'B', text: '$\\dfrac{v_{n+1}}{v_n}$ est constante' }, { id: 'C', text: '$v_n>0$' }, { id: 'D', text: '$v_0=0$' }], correct: 'B', explication: 'On exprime $v_{n+1}$ en fonction de $v_n$ et on isole un rapport constant (ici $\\frac{1}{2}$).' },
        { id: 'x4', competence: 'formule', prompt: 'Capital $10\\,000$ F à $5\\%$ par an : le capital après $5$ ans est :', options: [{ id: 'A', text: '$10\\,000\\times 1{,}05^{5}$' }, { id: 'B', text: '$10\\,000\\times 5\\times 1{,}05$' }, { id: 'C', text: '$10\\,000+5\\times 0{,}05$' }, { id: 'D', text: '$10\\,000\\times 0{,}05^{5}$' }], correct: 'A', explication: 'Suite géométrique de raison $1{,}05$ : $C_5=C_0\\times 1{,}05^{5}$.' },
        { id: 'x5', competence: 'methode', prompt: 'Une suite géométrique de raison $q>1$ et de premier terme positif :', options: [{ id: 'A', text: 'converge vers $0$' }, { id: 'B', text: 'diverge vers $+\\infty$' }, { id: 'C', text: 'est constante' }, { id: 'D', text: 'converge vers $q$' }], correct: 'B', explication: '$q>1 \\Rightarrow q^n\\to+\\infty$ : la suite diverge vers $+\\infty$.' },
        { id: 'x6', competence: 'formule', prompt: 'Somme infinie $3+3\\cdot\\dfrac{1}{2}+3\\cdot\\dfrac{1}{4}+\\cdots$ (raison $\\frac{1}{2}$) tend vers :', options: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$6$' }, { id: 'C', text: '$+\\infty$' }, { id: 'D', text: '$\\dfrac{3}{2}$' }], correct: 'B', explication: '$S=\\dfrac{v_0}{1-q}=\\dfrac{3}{1-1/2}=6$.' },
        { id: 'x7', competence: 'methode', prompt: 'D\'après le théorème de convergence monotone, une suite croissante et majorée :', options: [{ id: 'A', text: 'diverge' }, { id: 'B', text: 'est convergente' }, { id: 'C', text: 'tend vers $+\\infty$' }, { id: 'D', text: 'est géométrique' }], correct: 'B', explication: 'Toute suite croissante et majorée converge (vers sa borne supérieure).' },
        { id: 'x8', competence: 'formule', prompt: '$\\displaystyle\\lim_{n\\to+\\infty} (0{,}95)^{n}$ vaut :', options: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$+\\infty$' }, { id: 'D', text: '$0{,}95$' }], correct: 'A', explication: '$|0{,}95|<1$ donc la puissance tend vers $0$.' },
        { id: 'x9', competence: 'methode', prompt: 'Pour prouver qu\'une suite récurrente est croissante, on étudie le plus souvent :', options: [{ id: 'A', text: 'le signe de $u_{n+1}-u_n$' }, { id: 'B', text: 'la limite' }, { id: 'C', text: 'le conjugué' }, { id: 'D', text: 'le discriminant' }], correct: 'A', explication: 'Le sens de variation se lit sur le signe de $u_{n+1}-u_n$ (souvent prouvé par récurrence).' },
        { id: 'x10', competence: 'formule', prompt: 'Une suite arithmétique de raison $r<0$ a pour limite :', options: [{ id: 'A', text: '$+\\infty$' }, { id: 'B', text: '$-\\infty$' }, { id: 'C', text: '$0$' }, { id: 'D', text: '$r$' }], correct: 'B', explication: 'Avec $u_n=u_0+nr$ et $r<0$, le terme $nr\\to-\\infty$ : la suite diverge vers $-\\infty$.' },
      ],
    },
  },
};

export default examT4Suites;
