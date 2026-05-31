export type ExerciseLevel = 'BASE' | 'MOYEN' | 'BAC';

export type StepType = 'IDENTIFIER' | 'STRATEGIE' | 'PIEGE' | 'CALCUL' | 'CONCLUSION';

export interface ExerciseStep {
  type: StepType;
  content: string;
}

export interface ExerciseQuestion {
  label: string;
  etapes: ExerciseStep[];
}

export interface Exercise {
  id: string;
  tome: number;
  numero: number;
  level: ExerciseLevel;
  points: number;
  statement: string;
  contextBac?: {
    format: string;
    serie: string;
    dureeConseillee: number;
  };
  testedConcept: string;
  
  correction: {
    repartitionTemps?: Array<{
      question: string;
      duree: number;
      description: string;
    }>;
    questions: ExerciseQuestion[];
    dialogue?: {
      petitFrere: string;
      grandFrere: string;
    }[];
    astuces?: string[];
    noteGrandFrere: string;
  };
}

export const exercicesT1: Exercise[] = [
  // Ex 1 BASE
  {
    id: 't1-ex1',
    tome: 1,
    numero: 1,
    level: 'BASE',
    points: 4,
    testedConcept: "tes réflexes de base sur les limites. Savoir reconnaître quand substituer directement, et quand c'est une forme indéterminée à transformer.",
    statement: `Calculer les limites suivantes :
<br/>a) $\\lim_{x \\to 2} (3x^2 - 5x + 2)$ <span class="text-sm text-gray-500 float-right">[1 pt]</span>
<br/>b) $\\lim_{x \\to 2} \\frac{x^3 - 8}{x - 2}$ <span class="text-sm text-gray-500 float-right">[1 pt]</span>
<br/>c) $\\lim_{x \\to +\\infty} \\frac{2x + 1}{x^2 - 1}$ <span class="text-sm text-gray-500 float-right">[1 pt]</span>
<br/>d) $\\lim_{x \\to +\\infty} (\\sqrt{x^2 + 3x} - x)$ <span class="text-sm text-gray-500 float-right">[1 pt]</span>`,
    correction: {
      questions: [
        {
          label: 'Question a)',
          etapes: [
            { type: 'IDENTIFIER', content: `On veut calculer la limite d'un polynôme quand $x$ tend vers 2.` },
            { type: 'STRATEGIE', content: `Pour un polynôme, c'est TOUJOURS substitution directe. Pas de forme indéterminée possible. On remplace $x$ par 2 et on calcule.` },
            { type: 'CALCUL', content: `$3(2)^2 - 5(2) + 2 = 3(4) - 10 + 2 = 12 - 10 + 2 = 4$` },
            { type: 'CONCLUSION', content: `$\\lim_{x \\to 2}(3x^2 - 5x + 2) = \\mathbf{4}$` }
          ]
        },
        {
          label: 'Question b)',
          etapes: [
            { type: 'IDENTIFIER', content: `On substitue $x = 2$ : numérateur = $8 - 8 = 0$, dénominateur = $2 - 2 = 0$.<br/>On tombe sur <strong>0/0 $\\rightarrow$ forme indéterminée</strong>.` },
            { type: 'STRATEGIE', content: `Réflexe quand on voit $0/0$ : on factorise pour faire apparaître et simplifier le facteur qui s'annule.<br/>Au numérateur, $x^3 - 8$ ressemble à $a^3 - b^3$. Identité remarquable :<br/>$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$` },
            { type: 'CALCUL', content: `$x^3 - 8 = (x-2)(x^2 + 2x + 4)$<br/><br/>On simplifie :<br/>$\\frac{x^3 - 8}{x - 2} = \\frac{(x-2)(x^2 + 2x + 4)}{x - 2} = x^2 + 2x + 4 \\quad (x \\neq 2)$<br/><br/>On peut maintenant substituer $x = 2$ :<br/>$\\lim_{x \\to 2}(x^2 + 2x + 4) = 4 + 4 + 4 = 12$` },
            { type: 'CONCLUSION', content: `$\\lim_{x \\to 2}\\frac{x^3 - 8}{x - 2} = \\mathbf{12}$` }
          ]
        },
        {
          label: 'Question c)',
          etapes: [
            { type: 'IDENTIFIER', content: `Limite d'une fraction rationnelle quand $x \\to +\\infty$. Réflexe : on regarde les <strong>termes de plus haut degré</strong>.` },
            { type: 'STRATEGIE', content: `Numérateur : $2x$ (degré 1). Dénominateur : $x^2$ (degré 2).<br/>Comme degré du numérateur < degré du dénominateur, la limite est <strong>0</strong>.` },
            { type: 'CALCUL', content: `$\\frac{2x + 1}{x^2 - 1} \\sim_{+\\infty} \\frac{2x}{x^2} = \\frac{2}{x} \\to 0$` },
            { type: 'CONCLUSION', content: `$\\lim_{x \\to +\\infty}\\frac{2x + 1}{x^2 - 1} = \\mathbf{0}$` }
          ]
        },
        {
          label: 'Question d)',
          etapes: [
            { type: 'IDENTIFIER', content: `Quand $x \\to +\\infty$ : $\\sqrt{x^2 + 3x} \\to +\\infty$ et $x \\to +\\infty$. On a une forme <strong>$\\infty - \\infty \\rightarrow$ indéterminée</strong>.` },
            { type: 'STRATEGIE', content: `Dès qu'on voit $\\infty - \\infty$ avec une racine carrée, <strong>réflexe : multiplier par le conjugué</strong>.<br/>Le conjugué de $\\sqrt{x^2 + 3x} - x$ est $\\sqrt{x^2 + 3x} + x$.` },
            { type: 'PIEGE', content: `Tu ne peux PAS dire "$\\sqrt{x^2 + 3x} \\sim x$ donc la limite est 0". C'est faux. L'équivalence ne se conserve pas par soustraction. Toujours conjuguer.` },
            { type: 'CALCUL', content: `On multiplie en haut et en bas par le conjugué :<br/>$\\sqrt{x^2 + 3x} - x = \\frac{(\\sqrt{x^2 + 3x} - x)(\\sqrt{x^2 + 3x} + x)}{\\sqrt{x^2 + 3x} + x}$<br/><br/>Au numérateur, identité remarquable $(a-b)(a+b) = a^2 - b^2$ :<br/>$= \\frac{(x^2 + 3x) - x^2}{\\sqrt{x^2 + 3x} + x} = \\frac{3x}{\\sqrt{x^2 + 3x} + x}$<br/><br/>Pour $x > 0$, on factorise par $x$ sous la racine et au dénominateur :<br/>$= \\frac{3x}{x\\sqrt{1 + 3/x} + x} = \\frac{3x}{x(\\sqrt{1 + 3/x} + 1)} = \\frac{3}{\\sqrt{1 + 3/x} + 1}$<br/><br/>Quand $x \\to +\\infty$ : $3/x \\to 0$, donc $\\sqrt{1 + 3/x} \\to 1$.` },
            { type: 'CONCLUSION', content: `$\\lim_{x \\to +\\infty}(\\sqrt{x^2 + 3x} - x) = \\frac{3}{1 + 1} = \\mathbf{\\frac{3}{2}}$` }
          ]
        }
      ],
      astuces: [
        `Retiens ces 4 réflexes par cœur, ils vont te servir partout :
- **Polynôme à valeur finie** → substitution directe
- **0/0 à valeur finie** → factorisation
- **Fraction rationnelle à l'infini** → termes dominants
- **∞ − ∞ avec racine** → multiplier par le conjugué`
      ],
      noteGrandFrere: `Cet exercice teste les 4 cas de figure les plus fréquents au BAC. Si tu maîtrises ces 4 réflexes, tu prends déjà 4 points facile. La question d) est celle qui élimine 50% des candidats — entraîne-toi jusqu'à ce que le conjugué soit automatique.`
    }
  },
  // Ex 2 MOYEN
  {
    id: 't1-ex2',
    tome: 1,
    numero: 2,
    level: 'MOYEN',
    points: 6,
    testedConcept: "tes réflexes sur des formes indéterminées un peu plus subtiles. Factorisations à deux niveaux, et la limite trigonométrique classique du BAC.",
    statement: `Calculer les limites suivantes :
<br/>a) $\\lim_{x \\to 3} \\frac{x^2 - 9}{x^2 - 2x - 3}$ <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>b) $\\lim_{x \\to 0} \\frac{1 - \\cos(x)}{x^2}$ <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>c) $\\lim_{x \\to 1} \\frac{x^2 - 1}{x^3 - 1}$ <span class="text-sm text-gray-500 float-right">[2 pts]</span>`,
    correction: {
      questions: [
        {
          label: 'Question a)',
          etapes: [
            { type: 'IDENTIFIER', content: `Substitution $x = 3$ : numérateur = $9 - 9 = 0$, dénominateur = $9 - 6 - 3 = 0$.<br/><strong>Forme indéterminée 0/0</strong>.` },
            { type: 'STRATEGIE', content: `On factorise au numérateur ET au dénominateur pour faire apparaître le facteur $(x - 3)$ qui s'annule.` },
            { type: 'CALCUL', content: `Numérateur : différence de carrés<br/>$x^2 - 9 = (x-3)(x+3)$<br/><br/>Dénominateur : trinôme de degré 2, on cherche les racines.<br/>Discriminant : $\\Delta = 4 + 12 = 16$, donc $\\sqrt{\\Delta} = 4$.<br/>Racines : $x = (2 \\pm 4)/2$, donc $x = 3$ ou $x = -1$.<br/>$x^2 - 2x - 3 = (x-3)(x+1)$<br/><br/>On simplifie :<br/>$\\frac{x^2 - 9}{x^2 - 2x - 3} = \\frac{(x-3)(x+3)}{(x-3)(x+1)} = \\frac{x+3}{x+1} \\quad (x \\neq 3)$` },
            { type: 'CONCLUSION', content: `$\\lim_{x \\to 3}\\frac{x^2 - 9}{x^2 - 2x - 3} = \\frac{3+3}{3+1} = \\frac{6}{4} = \\mathbf{\\frac{3}{2}}$` }
          ]
        },
        {
          label: 'Question b)',
          etapes: [
            { type: 'IDENTIFIER', content: `Substitution $x = 0$ : numérateur = $1 - 1 = 0$, dénominateur = $0$.<br/><strong>Forme indéterminée 0/0</strong>.` },
            { type: 'STRATEGIE', content: `C'est une <strong>limite trigonométrique classique du BAC</strong> qu'il faut absolument connaître. Deux méthodes :<br/>- Méthode 1 : utiliser l'identité $1 - \\cos(x) = 2\\sin^2(x/2)$<br/>- Méthode 2 : utiliser la limite de référence $\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$<br/><br/>On utilise la méthode 1, plus rapide.` },
            { type: 'CALCUL', content: `Identité trigonométrique : $1 - \\cos(x) = 2\\sin^2(x/2)$<br/><br/>$\\frac{1 - \\cos(x)}{x^2} = \\frac{2\\sin^2(x/2)}{x^2} = \\frac{1}{2} \\cdot \\frac{\\sin^2(x/2)}{(x/2)^2}$<br/><br/>On pose $u = x/2$. Quand $x \\to 0, u \\to 0$.<br/><br/>$= \\frac{1}{2} \\cdot \\left(\\frac{\\sin(u)}{u}\\right)^2 \\to \\frac{1}{2} \\cdot 1^2 = \\frac{1}{2}$` },
            { type: 'CONCLUSION', content: `$\\lim_{x \\to 0}\\frac{1 - \\cos(x)}{x^2} = \\mathbf{\\frac{1}{2}}$` }
          ]
        },
        {
          label: 'Question c)',
          etapes: [
            { type: 'IDENTIFIER', content: `Substitution $x = 1$ : numérateur = $0$, dénominateur = $0$.<br/><strong>Forme indéterminée 0/0</strong>.` },
            { type: 'STRATEGIE', content: `Factorisation des deux côtés.<br/>- Numérateur : différence de carrés $\\rightarrow (x-1)(x+1)$<br/>- Dénominateur : identité remarquable $a^3 - b^3 \\rightarrow (x-1)(x^2 + x + 1)$` },
            { type: 'CALCUL', content: `$\\frac{x^2 - 1}{x^3 - 1} = \\frac{(x-1)(x+1)}{(x-1)(x^2 + x + 1)} = \\frac{x+1}{x^2 + x + 1} \\quad (x \\neq 1)$` },
            { type: 'CONCLUSION', content: `$\\lim_{x \\to 1}\\frac{x^2 - 1}{x^3 - 1} = \\frac{1+1}{1+1+1} = \\mathbf{\\frac{2}{3}}$` }
          ]
        }
      ],
      dialogue: [
        {
          petitFrere: "Grand Frère, sur la question b), j'aurais jamais pensé à utiliser $\\sin^2(x/2)$. Comment tu fais pour le voir ?",
          grandFrere: "Petit, écoute bien. Dès que tu vois $(1 - \\cos x)$ au BAC, ton cerveau doit faire BIP : 'identité avec $\\sin^2(x/2)$'. C'est un automatisme qui s'apprend par répétition. Note-le dans ta fiche : '$(1 - \\cos x) = 2\\sin^2(x/2)$' — et entraîne-toi sur 5 exos de ce type. Au bout du 3ème, tu le vois venir avant même de lire la question."
        }
      ],
      astuces: [
        `Les **3 limites trigonométriques de référence** à connaître par cœur pour le BAC ivoirien :
- $\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$
- $\\lim_{x \\to 0} \\frac{1 - \\cos(x)}{x^2} = \\frac{1}{2}$
- $\\lim_{x \\to 0} \\frac{\\tan(x)}{x} = 1$

Si tu les sors automatiquement, tu gagnes 2 à 3 points par sujet BAC.`
      ],
      noteGrandFrere: `Cet exercice cumule deux stratégies clés : factorisation à deux niveaux (a et c) et limite trigo de référence (b). Les questions a) et c) sont les plus revisitées au BAC. La b) sépare les bons des très bons. Si tu sèches sur l'une des trois, marque-la 🔴 et reviens dans 3 jours.`
    }
  },
  // Ex 3 BAC
  {
    id: 't1-ex3',
    tome: 1,
    numero: 3,
    level: 'BAC',
    points: 10,
    contextBac: {
      format: "Problème d'Analyse",
      serie: "BAC Série D Côte d'Ivoire",
      dureeConseillee: 25
    },
    testedConcept: "un problème complet d'analyse (domaine, asymptotes, simplification, interprétation géométrique). Compétences BAC Série D.",
    statement: `Soit $f$ définie par $f(x) = \\frac{x^2 - x - 2}{x - 2}$.
<br/><br/>1. Déterminer $D$. <span class="text-sm text-gray-500 float-right">[1 pt]</span>
<br/>2a. Calculer $\\lim_{x \\to 2} f(x)$. <span class="text-sm text-gray-500 float-right">[1 pt]</span>
<br/>2b. La droite $x = 2$ est-elle une asymptote verticale ? Justifier. <span class="text-sm text-gray-500 float-right">[1 pt]</span>
<br/>3a. Calculer $\\lim_{x \\to +\\infty} f(x)$ et $\\lim_{x \\to -\\infty} f(x)$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>3b. Déduire l'équation de l'asymptote oblique. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>4. Montrer que $f(x) = x + 1$ pour tout $x \\in D$. Interpréter graphiquement. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>5. La droite $y = x + 1$ est-elle la courbe de $f$ ? Expliquer. <span class="text-sm text-gray-500 float-right">[1 pt]</span>`,
    correction: {
      repartitionTemps: [
        { question: "Q1", duree: 1, description: "Domaine simple (gimme — point facile)" },
        { question: "Q2a", duree: 4, description: "Limite + factorisation" },
        { question: "Q2b", duree: 3, description: "⚠️ PIÈGE classique BAC" },
        { question: "Q3a", duree: 4, description: "Deux limites en l'infini" },
        { question: "Q3b", duree: 4, description: "Asymptote oblique (déduction)" },
        { question: "Q4", duree: 5, description: "Simplification + interprétation" },
        { question: "Q5", duree: 3, description: "⚠️ PIÈGE classique BAC" }
      ],
      questions: [
        {
          label: 'Question 1',
          etapes: [
            { type: 'IDENTIFIER', content: `On cherche le domaine de définition. Réflexe : valeurs interdites = celles qui annulent un dénominateur.` },
            { type: 'STRATEGIE', content: `Dénominateur $(x - 2)$ s'annule pour $x = 2$.` },
            { type: 'CONCLUSION', content: `$D = \\mathbb{R} \\setminus \\{2\\}$` }
          ]
        },
        {
          label: 'Question 2a',
          etapes: [
            { type: 'IDENTIFIER', content: `Substitution $x = 2$ : numérateur = $4 - 2 - 2 = 0$, dénominateur = $0$.<br/><strong>Forme indéterminée 0/0</strong>.` },
            { type: 'STRATEGIE', content: `Factoriser le numérateur. Pour $x^2 - x - 2$, on cherche les racines.<br/>Discriminant : $\\Delta = 1 + 8 = 9, \\sqrt{\\Delta} = 3$.<br/>Racines : $x = (1 \\pm 3)/2$, donc $x = 2$ ou $x = -1$.` },
            { type: 'CALCUL', content: `$x^2 - x - 2 = (x - 2)(x + 1)$<br/><br/>Donc pour $x \\neq 2$ :<br/>$f(x) = \\frac{(x - 2)(x + 1)}{x - 2} = x + 1$` },
            { type: 'CONCLUSION', content: `$\\lim_{x \\to 2} f(x) = 2 + 1 = \\mathbf{3}$` }
          ]
        },
        {
          label: 'Question 2b',
          etapes: [
            { type: 'PIEGE', content: `Tu vois "x = 2 interdit dans le domaine" et ton réflexe c'est : "Donc x = 2 est une asymptote verticale, hop hop."<br/><strong>FAUX. Tu perds le point sec.</strong><br/><br/><strong>📌 RÈGLE D'OR</strong><br/>$x = a \\text{ est une asymptote verticale} \\iff \\lim_{x \\to a} f(x) = \\pm\\infty$` },
            { type: 'IDENTIFIER', content: `Ici, on a vu en 2a que la limite vaut <strong>3</strong> (finie). Donc :<br/>- ❌ Pas d'asymptote verticale en $x = 2$<br/>- ✅ C'est un <strong>point de discontinuité réparable</strong> (un "trou") au point $(2 ; 3)$` },
            { type: 'CONCLUSION', content: `La droite $x = 2$ <strong>n'est PAS</strong> une asymptote verticale. Il s'agit d'un point de discontinuité (trou) en $(2 ; 3)$.` }
          ]
        },
        {
          label: 'Question 3a',
          etapes: [
            { type: 'IDENTIFIER', content: `Limites en $\\pm\\infty$ d'une fraction rationnelle. Réflexe : termes de plus haut degré.` },
            { type: 'STRATEGIE', content: `Numérateur : $x^2$ (degré 2). Dénominateur : $x$ (degré 1). Degré num > degré dénom $\\rightarrow$ limite infinie. Le quotient se comporte comme $x$.` },
            { type: 'CALCUL', content: `$f(x) \\sim_{\\pm\\infty} \\frac{x^2}{x} = x$<br/><br/>Donc :<br/>$\\lim_{x \\to +\\infty} f(x) = +\\infty$<br/>$\\lim_{x \\to -\\infty} f(x) = -\\infty$` },
            { type: 'CONCLUSION', content: `$\\lim_{x \\to +\\infty} f(x) = \\mathbf{+\\infty} \\quad ; \\quad \\lim_{x \\to -\\infty} f(x) = \\mathbf{-\\infty}$` }
          ]
        },
        {
          label: 'Question 3b',
          etapes: [
            { type: 'IDENTIFIER', content: `On nous demande l'asymptote oblique. Définition : $y = ax + b$ est asymptote oblique en $\\pm\\infty$ si $\\lim[f(x) - (ax + b)] = 0$.` },
            { type: 'STRATEGIE', content: `Comme $f(x) = x + 1$ pour tout $x \\in D$ (vu en 2a), on a directement :<br/>$f(x) - (x + 1) = 0 \\quad \\text{pour tout } x \\in D$<br/><br/>Donc la limite de cette différence est trivialement 0.` },
            { type: 'CALCUL', content: `$\\lim_{x \\to \\pm\\infty}[f(x) - (x + 1)] = \\lim_{x \\to \\pm\\infty} 0 = 0$` },
            { type: 'CONCLUSION', content: `La droite <strong>$y = x + 1$</strong> est asymptote oblique à la courbe de $f$ en $+\\infty$ ET en $-\\infty$.` }
          ]
        },
        {
          label: 'Question 4',
          etapes: [
            { type: 'IDENTIFIER', content: `On nous demande de montrer une égalité pour tout $x$ du domaine, puis d'interpréter géométriquement.` },
            { type: 'STRATEGIE', content: `Reprendre la factorisation de la question 2a, et écrire proprement.` },
            { type: 'CALCUL', content: `Pour tout $x \\in D$ (donc $x \\neq 2$) :<br/>$f(x) = \\frac{(x - 2)(x + 1)}{x - 2} = x + 1$` },
            { type: 'CONCLUSION', content: `Pour tout $x \\in D$, $f(x) = x + 1$.<br/><br/>Géométriquement : <strong>la courbe de $f$ est la droite d'équation $y = x + 1$, privée du point $(2 ; 3)$</strong> (qui correspond au trou identifié en 2b).` }
          ]
        },
        {
          label: 'Question 5',
          etapes: [
            { type: 'PIEGE', content: `La question est subtile. Beaucoup d'élèves répondent <em>"OUI bien sûr, on vient de montrer que f(x) = x + 1"</em> et <strong>perdent 1 point sec</strong>.` },
            { type: 'IDENTIFIER', content: `La droite $y = x + 1$ est définie pour <strong>TOUT</strong> $x \\in \\mathbb{R}$ (y compris $x = 2$).<br/>La courbe de $f$ est définie pour $x \\in \\mathbb{R} \\setminus \\{2\\}$ (le point $(2 ; 3)$ n'existe pas pour $f$).` },
            { type: 'STRATEGIE', content: `Comparer rigoureusement les deux ensembles de définition.` },
            { type: 'CONCLUSION', content: `<strong>NON.</strong> La droite $y = x + 1$ <strong>n'est PAS</strong> la courbe de $f$.<br/><br/>Justification : la courbe de $f$ est <strong>identique</strong> à cette droite <strong>SAUF en $x = 2$</strong>, où $f$ n'est pas définie. Il y a un <strong>trou</strong> au point $(2 ; 3)$. Algébriquement $f(x) = x + 1$ oui, <strong>mais pas au point $x = 2$</strong>. Cette nuance vaut 1 à 2 points au BAC.` }
          ]
        }
      ],
      dialogue: [
        {
          petitFrere: "Mais Grand Frère, je comprends pas. On a montré que $f(x) = x + 1$. C'est bien la même chose, non ? Pourquoi je perds 1 point si je dis OUI ?",
          grandFrere: "Petit, écoute bien parce que c'est exactement ce piège qui fait la différence entre 12 et 14 au BAC. L'égalité $f(x) = x + 1$, on l'a montrée **pour tout x ∈ D**. Et D, c'est ℝ privé de 2. La droite $y = x + 1$, elle, est définie partout, y compris en $x = 2$. Donc la courbe de $f$ a un TROU en $(2 ; 3)$ que la droite n'a pas. Deux ensembles différents = deux courbes différentes. C'est subtil, mais c'est de la rigueur mathématique. Le correcteur du BAC, lui, il voit ça en 3 secondes."
        }
      ],
      astuces: [
        `**Astuce 1 — Réflexe asymptote verticale**
Avant d'annoncer une asymptote verticale, TOUJOURS vérifier que la limite est infinie. Pas de limite infinie = pas d'asymptote. C'est un trou.`,
        `**Astuce 2 — Réflexe asymptote oblique**
Si tu peux simplifier $f(x)$ en $ax + b$ + (un truc qui tend vers 0), l'asymptote oblique te tombe dans les mains : $y = ax + b$.`,
        `**Astuce 3 — Réflexe "trou vs droite"**
Quand tu factorises et que $(x - a)$ disparaît du dénominateur, n'oublie JAMAIS que $x = a$ reste exclu du domaine. Le trou est invisible algébriquement mais bien réel géométriquement.`
      ],
      noteGrandFrere: `Cet exercice est un classique absolu du BAC Série D ivoirien. Les questions 2b et 5 sont les pièges typiques qui séparent les 12 des 16. Si tu vois ce type d'énoncé au BAC, tu sais maintenant exactement où sont les traps. Maîtrise-le à fond.`
    }
  }
];
