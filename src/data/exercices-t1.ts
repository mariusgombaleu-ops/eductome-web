export type ExerciseLevel = 'BASE' | 'MOYEN' | 'BAC';

export interface ExerciseStep {
  title: string;
  content: string;
}

export interface Exercise {
  id: string;
  level: ExerciseLevel;
  points: number;
  statement: string;
  context?: string;
  steps: ExerciseStep[];
  grandFrereNote: string;
}

export const exercicesT1: Exercise[] = [
  {
    id: 't1-ex1',
    level: 'BASE',
    points: 4,
    statement: `Calculer les limites suivantes :
<br/>a) $\\lim_{x \\to 2} (3x^2 - 5x + 2)$ <span class="text-sm text-gray-500 float-right">[1 pt]</span>
<br/>b) $\\lim_{x \\to 2} \\frac{x^3 - 8}{x - 2}$ <span class="text-sm text-gray-500 float-right">[1 pt]</span>
<br/>c) $\\lim_{x \\to +\\infty} \\frac{2x + 1}{x^2 - 1}$ <span class="text-sm text-gray-500 float-right">[1 pt]</span>
<br/>d) $\\lim_{x \\to +\\infty} (\\sqrt{x^2 + 3x} - x)$ <span class="text-sm text-gray-500 float-right">[1 pt]</span>`,
    steps: [
      {
        title: 'a)',
        content: `Substitution directe :<br/> $3(2)^2 - 5(2) + 2 = 12 - 10 + 2 = 4$`
      },
      {
        title: 'b)',
        content: `Substitution $\\rightarrow \\frac{0}{0}$ forme indéterminée.<br/>
Factoriser : $x^3 - 8 = (x-2)(x^2+2x+4)$.<br/>
Simplifier : $\\lim_{x \\to 2} (x^2+2x+4) = 4+4+4 = 12$`
      },
      {
        title: 'c)',
        content: `Terme dominant numérateur : $2x$, dénominateur : $x^2$.<br/>
$\\frac{2x}{x^2} = \\frac{2}{x} \\rightarrow 0$ quand $x \\rightarrow +\\infty$`
      },
      {
        title: 'd)',
        content: `Forme $\\infty - \\infty$. Multiplier par le conjugué :<br/>
$\\frac{(\\sqrt{x^2+3x} - x)(\\sqrt{x^2+3x}+x)}{\\sqrt{x^2+3x}+x}$<br/>
$= \\frac{3x}{\\sqrt{x^2+3x}+x} \\rightarrow \\frac{3x}{2x} = \\frac{3}{2}$`
      }
    ],
    grandFrereNote: "La question d) est un classique du BAC Série D. Dès que tu vois $\\infty - \\infty$ avec une racine, pense conjugué. Entraîne-toi jusqu'à ce que le réflexe soit automatique."
  },
  {
    id: 't1-ex2',
    level: 'MOYEN',
    points: 6,
    statement: `Soit $f$ définie par $f(x) = \\frac{2x^2 - 3x - 2}{x - 2}$.
<br/><br/>1. Déterminer $D$, l'ensemble de définition de $f$. <span class="text-sm text-gray-500 float-right">[1 pt]</span>
<br/>2. Calculer $\\lim_{x \\to 2} f(x)$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>3. Calculer $\\lim_{x \\to +\\infty} f(x)$ et $\\lim_{x \\to -\\infty} f(x)$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>4. Déduire les asymptotes de la courbe de $f$. <span class="text-sm text-gray-500 float-right">[1 pt]</span>`,
    steps: [
      {
        title: 'Question 1',
        content: `$x - 2 = 0 \\implies x = 2$ interdit.<br/>$D = \\mathbb{R} \\setminus \\{2\\}$`
      },
      {
        title: 'Question 2',
        content: `Substitution $\\rightarrow \\frac{0}{0}$.<br/>
$\\Delta = 25$, racines $x_1 = 2$ et $x_2 = -\\frac{1}{2}$.<br/>
Factorisation : $2x^2 - 3x - 2 = (x-2)(2x+1)$.<br/>
$f(x) = 2x+1$ pour $x \\neq 2$.<br/>
$\\lim_{x \\to 2} f(x) = 5$`
      },
      {
        title: 'Question 3',
        content: `Terme dominant : $\\frac{2x^2}{x} = 2x$.<br/>
$\\lim_{x \\to +\\infty} f(x) = +\\infty$<br/>
$\\lim_{x \\to -\\infty} f(x) = -\\infty$`
      },
      {
        title: 'Question 4',
        content: `Limite finie en $x=2 \\rightarrow$ pas d'asymptote verticale.<br/>
$f(x) = 2x+1$ pour $x \\neq 2 \\rightarrow$ la droite $y = 2x+1$ est l'asymptote oblique.`
      }
    ],
    grandFrereNote: "L'asymptote oblique se lit directement ici parce que $f(x)$ se simplifie en $2x+1$. C'est le cas le plus fréquent au BAC D — la factorisation révèle tout."
  },
  {
    id: 't1-ex3',
    level: 'BAC',
    points: 10,
    context: "Format Problème d'Analyse — BAC Série D Côte d'Ivoire. Durée conseillée : 25 min.",
    statement: `Soit $f$ définie par $f(x) = \\frac{x^2 - x - 2}{x - 2}$.
<br/><br/>1. Déterminer $D$. <span class="text-sm text-gray-500 float-right">[1 pt]</span>
<br/>2a. Calculer $\\lim_{x \\to 2} f(x)$. <span class="text-sm text-gray-500 float-right">[1 pt]</span>
<br/>2b. La droite $x = 2$ est-elle une asymptote verticale ? Justifier. <span class="text-sm text-gray-500 float-right">[1 pt]</span>
<br/>3a. Calculer $\\lim_{x \\to +\\infty} f(x)$ et $\\lim_{x \\to -\\infty} f(x)$. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>3b. Déduire l'équation de l'asymptote oblique. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>4. Montrer que $f(x) = x+1$ pour tout $x \\in D$. Interpréter graphiquement. <span class="text-sm text-gray-500 float-right">[2 pts]</span>
<br/>5. La droite $y = x+1$ est-elle la courbe de $f$ ? Expliquer. <span class="text-sm text-gray-500 float-right">[1 pt]</span>`,
    steps: [
      {
        title: 'Question 1',
        content: `$x = 2$ interdit. $D = \\mathbb{R} \\setminus \\{2\\}$`
      },
      {
        title: 'Question 2a',
        content: `Substitution $\\rightarrow \\frac{0}{0}$.<br/>
Factoriser : $x^2 - x - 2 = (x-2)(x+1)$ [racines : $2$ et $-1$].<br/>
$f(x) = x+1$ pour $x \\neq 2$.<br/>
$\\lim_{x \\to 2} f(x) = 3$`
      },
      {
        title: 'Question 2b',
        content: `Limite finie ($=3$) en $x=2 \\rightarrow x=2$ n'est PAS une asymptote verticale.<br/>
C'est un point de discontinuité (trou) en $(2 ; 3)$.`
      },
      {
        title: 'Question 3a',
        content: `Terme dominant : $\\frac{x^2}{x} = x$.<br/>
$\\lim_{x \\to +\\infty} f(x) = +\\infty$<br/>
$\\lim_{x \\to -\\infty} f(x) = -\\infty$`
      },
      {
        title: 'Question 3b',
        content: `$f(x) - (x+1) = 0$ pour tout $x \\in D$.<br/>
$\\lim_{x \\to \\pm\\infty} [f(x)-(x+1)] = 0$.<br/>
La droite $y = x+1$ est l'asymptote oblique.`
      },
      {
        title: 'Question 4',
        content: `$f(x) = \\frac{(x-2)(x+1)}{x-2} = x+1$ pour $x \\neq 2$.<br/>
Graphiquement : la courbe de $f$ est la droite $y=x+1$ privée du point $(2 ; 3)$.`
      },
      {
        title: 'Question 5',
        content: `NON. La droite $y=x+1$ est définie pour tout $x \\in \\mathbb{R}$, y compris $x=2$.<br/>
La courbe de $f$ est identique à cette droite SAUF en $x=2$ où $f$ n'est pas définie —<br/>
il y a un trou $\\circ$ au point $(2 ; 3)$.`
      }
    ],
    grandFrereNote: "La question 5 sépare les bons des très bons. $f(x) = x+1$ algébriquement oui — mais pas au point $x=2$. Cette nuance vaut souvent 1 à 2 points au BAC. Ne jamais l'oublier."
  }
];
