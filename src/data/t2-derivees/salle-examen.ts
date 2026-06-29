import { Chapitre } from '../../types/course';

export const chapitreSalle: Chapitre = {
  id: 't2-salle',
  titre: `La Salle d'Examen`,
  duree: 40,
  niveau: 'BAC',
  xpGain: 40,
  objectifs: [
    `Combiner les 6 modules du tome dans un même sujet type BAC`,
    `Rédiger un problème complet en Copie Parfaite, du premier calcul à la dernière justification`,
    `Maîtriser la check-list du correcteur et les pièges classiques de la série D`,
    `Gérer son temps sur les 4 heures de l'épreuve`,
  ],
  sections: [
    {
      id: 's-obj',
      titre: `🎯 Objectif de cette section`,
      blocs: [
        {
          type: 'text',
          id: 'b-obj',
          contenu: `Ici, on ne réapprend plus : on combat. Tu as traversé les 6 modules du tome, un à un. La Salle d'Examen, c'est l'arène où tous les outils se rencontrent dans un même sujet — exactement comme le jour du BAC. Un sujet complet rédigé en Copie Parfaite, six exercices qui couvrent M1 à M6, la check-list du correcteur, les pièges à éviter et le planning des 4 heures. À la fin, le coin est gâté.`,
        },
      ],
    },
    {
      id: 's-a',
      titre: `Section A — Stratégie Générale BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b-a1',
          contenu: `Champion(ne), avant même de laisser ton stylo effleurer la copie, il y a un protocole mental à respecter. C'est comme monter dans un gbaka à Adjamé : on regarde la destination avant d'embarquer. Voici les 7 réflexes pour dompter un sujet de dérivées.`,
        },
        {
          type: 'table',
          id: 'tbl-reflexes',
          headers: [`N°`, `Réflexe avant de toucher le stylo`, `Pourquoi c'est décisif`],
          rows: [
            [`1`, `Lire le sujet en entier`, `La dérivée calculée en Partie A sert systématiquement aux variations ou à l'IAF en Partie B. Anticiper le tableau final t'évite de calculer dans la mauvaise direction.`],
            [`2`, `Identifier la structure de $f(x)$`, `Repère : somme, produit $u \\times v$, quotient $\\dfrac{u}{v}$ ou composée. Rater cette lecture détruit le calcul de $f'$ dès la première ligne.`],
            [`3`, `Brouillon systématique pour $f'(x)$`, `On ne dérive jamais directement au propre. Pose $u$, $v$, $u'$, $v'$ au brouillon, nettoie, recopie seulement le résultat propre.`],
            [`4`, `Vérifier $f'(x)$ en un point simple`, `Une fois $f'(x)$ obtenue, teste en $x=0$ ou $x=1$. Ça évite de dresser un tableau de variations faux sur toute la copie.`],
            [`5`, `Le double calcul de la tangente`, `Dès qu'on parle de tangente en $x_0$, prépare deux cases : la hauteur $f(x_0)$ ET la pente $f'(x_0)$. Les deux sont indispensables.`],
            [`6`, `Le contrôle global pour l'IAF`, `Le majorant $M$ doit valoir pour TOUT $x$ de l'intervalle. Encadre $|f'(x)|$ partout, pas seulement aux bornes.`],
            [`7`, `Le décodage de l'antécédent pour $(f^{-1})'$`, `Pour $(f^{-1})'(b)$, identifie d'abord $a$ tel que $f(a) = b$. C'est $f'(a)$ dont tu prends l'inverse — jamais $f'(b)$.`],
          ],
        },
        {
          type: 'figure',
          id: 'fig-salle-1',
          src: '/images/t2/fig_Salle_1.png',
          legende: `La carte des outils du Tome 2 : à chaque type de question, sa clé.`,
          alt: `La carte des outils du Tome 2 : à chaque type de question, sa clé.`,
        },
      ],
    },
    {
      id: 's-checklist',
      titre: `La Check-list du Correcteur`,
      blocs: [
        {
          type: 'text',
          id: 'b-check',
          contenu: `Le correcteur du BAC D ne note pas seulement le résultat — il note la **rédaction**. Voici ce qu'il cherche, ligne par ligne, dans une copie de dérivées.`,
        },
        {
          type: 'table',
          id: 'tbl-check',
          headers: [`Le correcteur cherche...`, `La phrase qui rapporte le point`],
          rows: [
            [`La justification de la dérivabilité`, `« $f$ est dérivable sur $I$ comme somme / produit / quotient de fonctions dérivables. »`],
            [`Le calcul propre de $f'$`, `$f'$ posée puis réduite, sans étape de brouillon recopiée.`],
            [`Le lien signe de $f'$ → variation`, `« $f'(x) > 0$ sur $I$, donc $f$ est strictement croissante sur $I$. »`],
            [`Les hypothèses de l'IAF`, `« $f$ continue sur $[a\\ ;\\ b]$, dérivable sur $]a\\ ;\\ b[$, et $|f'(x)| \\leq M$. »`],
            [`L'antécédent pour la réciproque`, `« $f(a)=b$ donc $f^{-1}(b)=a$, et $f'(a) \\neq 0$. »`],
          ],
        },
      ],
    },
    {
      id: 's-b',
      titre: `Section B — Sujet Type BAC Complet`,
      blocs: [
        {
          type: 'text',
          id: 'b-b-enonce',
          contenu: `*(Modèle dérivé des standards officiels de la DPFC de Côte d'Ivoire.)*

**Situation d'évaluation.** Un élève du Lycée Classique s'étonne de l'oscillation de la courbe de $f$ à cause du cosinus et craint de ne pas pouvoir analyser ses variations locales. On te demande de résoudre ce problème pas à pas.

Soit $f$ la fonction définie sur $]0\\ ;\\ +\\infty[$ par :
$$f(x) = x^2\\cos(x) + \\dfrac{1}{x}$$

**Q1.** Déterminer $f'(x)$ sur $]0\\ ;\\ +\\infty[$ en appliquant les règles d'opérations.

**Q2.** On pose $J = \\left[\\dfrac{\\pi}{2}\\ ;\\ \\pi\\right]$ et on admet que $f'(x) < 0$ pour tout $x \\in J$. Dresser le tableau de variations de $f$ sur $J$ en calculant les valeurs exactes aux bornes.

**Q3.** Écrire l'équation réduite de la tangente $(T)$ à $\\mathcal{C}_f$ au point d'abscisse $x_0 = \\pi$.

**Q4.** Démontrer que $f$ réalise une bijection de $J$ sur un intervalle $K$ à déterminer.

**Q5.** Justifier que $f^{-1}$ est dérivable au point $b = -\\pi^2 + \\dfrac{1}{\\pi}$, puis calculer $(f^{-1})'(b)$.`,
        },
        {
          type: 'text',
          id: 'b-b-q1',
          titre: `✍️ Correction — Q1 : Calcul de $f'(x)$`,
          contenu: `La fonction $f$ est de la forme $f = u \\cdot v + w$ avec $u(x) = x^2$ ($u' = 2x$), $v(x) = \\cos x$ ($v' = -\\sin x$) et $w(x) = \\dfrac{1}{x}$ ($w' = -\\dfrac{1}{x^2}$). Par somme et produit de fonctions dérivables, $f$ est dérivable sur $]0\\ ;\\ +\\infty[$ et :
$$f'(x) = u'v + uv' + w' = 2x\\cos(x) - x^2\\sin(x) - \\dfrac{1}{x^2}$$`,
        },
        {
          type: 'text',
          id: 'b-b-q2',
          titre: `✍️ Q2 : Tableau de variations sur $J$`,
          contenu: `D'après l'énoncé, $f'(x) < 0$ sur $J$, donc $f$ est strictement décroissante sur $\\left[\\dfrac{\\pi}{2}\\ ;\\ \\pi\\right]$. Valeurs aux bornes :
$$f\\!\\left(\\dfrac{\\pi}{2}\\right) = \\dfrac{\\pi^2}{4}\\cos\\!\\left(\\dfrac{\\pi}{2}\\right) + \\dfrac{2}{\\pi} = 0 + \\dfrac{2}{\\pi} = \\dfrac{2}{\\pi}, \\qquad f(\\pi) = \\pi^2\\cos(\\pi) + \\dfrac{1}{\\pi} = -\\pi^2 + \\dfrac{1}{\\pi}$$`,
        },
        {
          type: 'table',
          id: 'tv-q2',
          titre: `Tableau de variations sur $J$`,
          headers: [`$x$`, `$\\dfrac{\\pi}{2}$`, ``, `$\\pi$`],
          rows: [
            [`$f'(x)$`, ``, `$-$`, ``],
            [`$f(x)$`, `$\\dfrac{2}{\\pi}$`, `$\\searrow$`, `$-\\pi^2 + \\dfrac{1}{\\pi}$`],
          ],
        },
        {
          type: 'text',
          id: 'b-b-q3',
          titre: `✍️ Q3 : Tangente en $x_0 = \\pi$`,
          contenu: `On a $f(\\pi) = -\\pi^2 + \\dfrac{1}{\\pi}$ (Q2). Calculons $f'(\\pi)$ :
$$f'(\\pi) = 2\\pi\\cos(\\pi) - \\pi^2\\sin(\\pi) - \\dfrac{1}{\\pi^2} = -2\\pi - \\dfrac{1}{\\pi^2}$$
L'équation de $(T)$ : $y = f'(\\pi)(x-\\pi) + f(\\pi)$, soit après développement :
$$(T) : y = \\left(-2\\pi - \\dfrac{1}{\\pi^2}\\right)x + \\pi^2 + \\dfrac{2}{\\pi}$$`,
        },
        {
          type: 'text',
          id: 'b-b-q4',
          titre: `✍️ Q4 : Bijection de $J$ vers $K$`,
          contenu: `$f$ est continue sur $J$ (car dérivable) et strictement décroissante sur $J$ (Q2). Continue et strictement monotone sur l'intervalle fermé borné $J$, elle réalise une bijection de $J$ sur $K = f(J)$. Comme $f$ décroît, elle renverse l'ordre des bornes :
$$K = \\left[f(\\pi)\\ ;\\ f\\!\\left(\\dfrac{\\pi}{2}\\right)\\right] = \\left[-\\pi^2 + \\dfrac{1}{\\pi}\\ ;\\ \\dfrac{2}{\\pi}\\right]$$`,
        },
        {
          type: 'text',
          id: 'b-b-q5',
          titre: `✍️ Q5 : Dérivabilité et calcul de $(f^{-1})'(b)$`,
          contenu: `On a $b = -\\pi^2 + \\dfrac{1}{\\pi} = f(\\pi)$, donc l'antécédent de $b$ est $a = \\pi$ : $f^{-1}(b) = \\pi$. D'après Q3, $f'(\\pi) = -2\\pi - \\dfrac{1}{\\pi^2}$, strictement négatif (car $\\pi > 0$), donc $f'(\\pi) \\neq 0$ : $f^{-1}$ est dérivable en $b$ et :
$$(f^{-1})'(b) = \\dfrac{1}{f'(\\pi)} = \\dfrac{1}{-2\\pi - \\dfrac{1}{\\pi^2}} = \\dfrac{-\\pi^2}{2\\pi^3 + 1}$$`,
        },
        {
          type: 'tip',
          id: 'tip-b',
          titre: `Conseil du Grand Frère`,
          contenu: `Ce sujet illustre le **fil rouge** du tome : la dérivée de Q1 sert aux variations de Q2, qui servent à la bijection de Q4, qui débloque la réciproque de Q5. Une seule erreur en Q1 fait tomber toute la chaîne — d'où le réflexe n°4 : vérifie $f'$ avant d'avancer.

*[Barème type BAC : Q1 1 pt · Q2 1 pt · Q3 1 pt · Q4 1 pt · Q5 1 pt — Total : 5 pts]*`,
        },
      ],
    },
    {
      id: 's-combat',
      titre: `Le Combat — 6 Exercices BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b-combat-intro',
          contenu: `Six exercices, couverture M1 → M6. Chacun corrigé en Copie Parfaite, avec son barème.`,
        },
        {
          type: 'exercise',
          id: 'exo-1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice 1 — Dérivée par définition + Tangente *(M1 · M5)*.** Soit $f$ définie sur $\\mathbb{R} \\setminus \\{-1\\}$ par $f(x) = \\dfrac{3x}{x+1}$. (1) Montrer que $f$ est dérivable en $x_0 = 1$ en calculant la limite du taux de variation ; donner $f'(1)$. (2) Écrire l'équation de la tangente $(T)$ à $\\mathcal{C}_f$ au point d'abscisse $x_0 = 1$.`,
          etapes: [],
          reponse: `$f'(1) = \\dfrac{3}{4}$ ; $(T) : y = \\dfrac{3}{4}x + \\dfrac{3}{4}$.`,
          conseil: `Les termes constants ($+6$ et $-6$) s'annulent toujours au numérateur lors du développement de $f(1+h)-f(1)$. Si un nombre sans $h$ subsiste, c'est qu'il y a une erreur de signe.`,
          piege: `Ne simplifie le facteur $h$ qu'après l'avoir mis en évidence au numérateur ; simplifier trop tôt fait disparaître un terme.`,
        },
        {
          type: 'text',
          id: 'b-copie-1',
          titre: `✍️ La Copie Parfaite — Exercice 1`,
          contenu: `**(1)** $f(1) = \\dfrac{3}{2}$. Pour $h \\neq 0$ tel que $1+h \\neq -1$ :
$$f(1+h) - f(1) = \\dfrac{3+3h}{2+h} - \\dfrac{3}{2} = \\dfrac{2(3+3h) - 3(2+h)}{2(2+h)} = \\dfrac{3h}{2(2+h)}$$
$$\\tau(h) = \\dfrac{f(1+h)-f(1)}{h} = \\dfrac{3}{2(2+h)} \\xrightarrow[h \\to 0]{} \\dfrac{3}{4}$$
La limite est finie, donc $f$ est dérivable en $1$ et $f'(1) = \\dfrac{3}{4}$.

**(2)** $f(1) = \\dfrac{3}{2}$ et $f'(1) = \\dfrac{3}{4}$ :
$$y = \\dfrac{3}{4}(x-1) + \\dfrac{3}{2} = \\dfrac{3}{4}x + \\dfrac{3}{4}, \\qquad (T) : y = \\dfrac{3}{4}x + \\dfrac{3}{4}$$

*[Barème type BAC : taux posé 0,5 pt · nettoyage et limite 1,5 pt · tangente 1 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice 2 — Dérivée d'un produit + Variations *(M3 · M4)*.** Soit $f$ définie sur $]0\\ ;\\ +\\infty[$ par $f(x) = (x-2)\\sqrt{x}$. (1) Justifier le domaine de dérivabilité de $f$ et calculer $f'(x)$. (2) Étudier le signe de $f'(x)$ et dresser le tableau de variations complet de $f$ sur $]0\\ ;\\ +\\infty[$.`,
          etapes: [],
          reponse: `$f'(x) = \\dfrac{3x-2}{2\\sqrt{x}}$ ; $f$ admet un minimum en $x = \\dfrac{2}{3}$, de valeur $-\\dfrac{4\\sqrt{6}}{9}$.`,
          conseil: `Réduis $f'$ au même dénominateur $2\\sqrt{x}$ : le signe devient celui du seul numérateur, lecture immédiate.`,
          piege: `Le domaine de dérivabilité de $\\sqrt{x}$ est $]0\\ ;\\ +\\infty[$, pas $[0\\ ;\\ +\\infty[$ : la borne $0$ est exclue (taux de variation infini). Mentionne-le pour le point de justification.`,
        },
        {
          type: 'text',
          id: 'b-copie-2',
          titre: `✍️ La Copie Parfaite — Exercice 2`,
          contenu: `**(1)** $x \\mapsto x-2$ est dérivable sur $\\mathbb{R}$, $x \\mapsto \\sqrt{x}$ sur $]0\\ ;\\ +\\infty[$. Par produit, $f$ est dérivable sur $]0\\ ;\\ +\\infty[$. Avec $u = x-2$ ($u'=1$), $v = \\sqrt{x}$ ($v' = \\dfrac{1}{2\\sqrt{x}}$) :
$$f'(x) = \\sqrt{x} + (x-2)\\dfrac{1}{2\\sqrt{x}} = \\dfrac{2x + x - 2}{2\\sqrt{x}} = \\dfrac{3x-2}{2\\sqrt{x}}$$

**(2)** Pour $x > 0$, $2\\sqrt{x} > 0$ : le signe de $f'$ est celui de $3x-2$, qui s'annule en $x = \\dfrac{2}{3}$. Valeur du minimum : $f\\!\\left(\\dfrac{2}{3}\\right) = \\left(\\dfrac{2}{3}-2\\right)\\sqrt{\\dfrac{2}{3}} = -\\dfrac{4\\sqrt{6}}{9}$.`,
        },
        {
          type: 'table',
          id: 'tv-exo2',
          titre: `Tableau de variations`,
          headers: [`$x$`, `$0$`, ``, `$\\dfrac{2}{3}$`, ``, `$+\\infty$`],
          rows: [
            [`$f'(x)$`, `||`, `$-$`, `$0$`, `$+$`, ``],
            [`$f(x)$`, `||`, `$\\searrow$`, `$-\\dfrac{4\\sqrt{6}}{9}$`, `$\\nearrow$`, `$+\\infty$`],
          ],
        },
        {
          type: 'text',
          id: 'b-copie-2b',
          contenu: `$f$ admet un minimum en $x = \\dfrac{2}{3}$, de valeur $-\\dfrac{4\\sqrt{6}}{9}$.

*[Barème type BAC : domaine 0,5 pt · $f'$ correct 1 pt · signe et tableau 1,5 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-3',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice 3 — Dérivée d'un quotient + Tangente horizontale *(M3 · M5)*.** Soit $f$ définie sur $\\mathbb{R}$ par $f(x) = \\dfrac{x}{x^2+1}$. (1) Calculer $f'(x)$. (2) Déterminer les points de $\\mathcal{C}_f$ où la tangente est horizontale et écrire l'équation de chacune de ces tangentes.`,
          etapes: [],
          reponse: `$f'(x) = \\dfrac{1 - x^2}{(x^2+1)^2}$ ; tangentes horizontales $(T_1) : y = \\dfrac{1}{2}$ en $\\left(1\\ ;\\ \\dfrac{1}{2}\\right)$ et $(T_2) : y = -\\dfrac{1}{2}$ en $\\left(-1\\ ;\\ -\\dfrac{1}{2}\\right)$.`,
          conseil: `Le dénominateur $(x^2+1)^2$ est toujours strictement positif : le signe de $f'$ et l'annulation de $f'$ viennent du seul numérateur $1 - x^2$.`,
          piege: `« Tangente horizontale » signifie $f'(x) = 0$, pas $f(x) = 0$. Ce sont deux équations différentes — c'est la dérivée qu'on annule.`,
        },
        {
          type: 'text',
          id: 'b-copie-3',
          titre: `✍️ La Copie Parfaite — Exercice 3`,
          contenu: `**(1)** $f$ est dérivable sur $\\mathbb{R}$ (quotient à dénominateur ne s'annulant jamais). Avec $u = x$ ($u'=1$), $v = x^2+1$ ($v'=2x$) :
$$f'(x) = \\dfrac{1 \\cdot (x^2+1) - x \\cdot 2x}{(x^2+1)^2} = \\dfrac{1 - x^2}{(x^2+1)^2}$$

**(2)** La tangente est horizontale si et seulement si $f'(x) = 0$, soit $1 - x^2 = 0 \\iff x = 1$ ou $x = -1$.
$$f(1) = \\dfrac{1}{2}, \\qquad f(-1) = -\\dfrac{1}{2}$$
Les tangentes horizontales sont $(T_1) : y = \\dfrac{1}{2}$ au point $\\left(1\\ ;\\ \\dfrac{1}{2}\\right)$ et $(T_2) : y = -\\dfrac{1}{2}$ au point $\\left(-1\\ ;\\ -\\dfrac{1}{2}\\right)$.

*[Barème type BAC : $f'$ par la règle du quotient 1,5 pt · résolution $f'(x)=0$ 1 pt · deux points et deux équations 1,5 pt — Total : 4 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-4',
          niveau: 'BAC',
          enonce: `🔴 **Exercice 4 — Position de la courbe par rapport à sa tangente *(M4 · M5)*.** Soit $f$ définie sur $\\mathbb{R}$ par $f(x) = x^4 - 4x + 3$. (1) Déterminer l'équation de la tangente $(T)$ à $\\mathcal{C}_f$ au point d'abscisse $x_0 = 1$. (2) Étudier la position de $\\mathcal{C}_f$ par rapport à $(T)$.`,
          etapes: [],
          reponse: `$(T) : y = 0$ ; $f(x) - T(x) = (x-1)^2(x^2+2x+3) \\geq 0$ : $\\mathcal{C}_f$ est au-dessus de $(T)$ sur tout $\\mathbb{R}$, contact unique en $(1\\ ;\\ 0)$.`,
          conseil: `Quand $f(x) - T(x)$ se factorise par $(x - x_0)^2$, le carré est toujours positif : la courbe reste du même côté de sa tangente et ne fait que la toucher au point de contact.`,
          piege: `Vérifie que le facteur restant ($x^2+2x+3$) ne change pas de signe : son discriminant est négatif, il est strictement positif partout. Sans ce contrôle, la conclusion de position serait incomplète.`,
        },
        {
          type: 'text',
          id: 'b-copie-4',
          titre: `✍️ La Copie Parfaite — Exercice 4`,
          contenu: `**(1)** $f$ est dérivable sur $\\mathbb{R}$, $f'(x) = 4x^3 - 4$. Pour $x_0 = 1$ : $f(1) = 1 - 4 + 3 = 0$ et $f'(1) = 4 - 4 = 0$. La tangente est donc horizontale : $(T) : y = 0$.

**(2)** Pour tout $x \\in \\mathbb{R}$ :
$$f(x) - T(x) = x^4 - 4x + 3 = (x-1)^2(x^2 + 2x + 3)$$
Le facteur $x^2 + 2x + 3 = (x+1)^2 + 2 > 0$, et $(x-1)^2 \\geq 0$. Donc $f(x) - T(x) \\geq 0$ pour tout $x$, avec égalité seulement en $x = 1$.`,
        },
        {
          type: 'table',
          id: 'pos-exo4',
          titre: `Signe de $f(x) - T(x)$`,
          headers: [`$x$`, `$-\\infty$`, ``, `$1$`, ``, `$+\\infty$`],
          rows: [
            [`$f(x) - T(x)$`, ``, `$+$`, `$0$`, `$+$`, ``],
            [`Position de $\\mathcal{C}_f$`, ``, `dessus`, `contact`, `dessus`, ``],
          ],
        },
        {
          type: 'text',
          id: 'b-copie-4b',
          contenu: `$\\mathcal{C}_f$ est **au-dessus** de $(T)$ sur tout $\\mathbb{R}$, et la touche uniquement au point de contact $(1\\ ;\\ 0)$. $\\square$

*[Barème type BAC : tangente (avec $f'(1)=0$) 1 pt · factorisation de $f(x)-T(x)$ 1,5 pt · signe et conclusion 1,5 pt — Total : 4 pts]*`,
        },
        {
          type: 'figure',
          id: 'fig-salle-2',
          src: '/images/t2/fig_Salle_2.png',
          legende: `$f(x)-T(x)=(x-1)^2(x^2+2x+3)\\ge 0$ : la courbe reste au-dessus de sa tangente.`,
          alt: `$f(x)-T(x)=(x-1)^2(x^2+2x+3)\\ge 0$ : la courbe reste au-dessus de sa tangente.`,
        },
        {
          type: 'exercise',
          id: 'exo-5',
          niveau: 'BAC',
          enonce: `🔴 **Exercice 5 — IAF et encadrement *(M6A)*.** Soit $f$ définie sur $[0\\ ;\\ 1]$ par $f(x) = \\dfrac{x}{x+1}$. (1) Calculer $f'(x)$ et montrer que $f'$ est strictement décroissante sur $[0\\ ;\\ 1]$. (2) En déduire un encadrement de $f'(x)$ pour tout $x \\in [0\\ ;\\ 1]$. (3) En utilisant l'IAF, montrer que pour tout $x \\in [0\\ ;\\ 1]$ : $\\dfrac{x}{4} \\leq \\dfrac{x}{x+1} \\leq x$.`,
          etapes: [],
          reponse: `$f'(x) = \\dfrac{1}{(x+1)^2}$, $\\dfrac{1}{4} \\leq f'(x) \\leq 1$ ; par l'IAF double, $\\dfrac{x}{4} \\leq \\dfrac{x}{x+1} \\leq x$.`,
          conseil: `Ici $f'$ est à la fois minorée et majorée : utilise l'IAF en version double $m(b-a) \\leq f(b)-f(a) \\leq M(b-a)$ pour obtenir l'encadrement d'un seul coup.`,
          piege: `Le majorant et le minorant se lisent aux deux bornes parce que $f'$ est monotone — justifie d'abord cette monotonie (via $f''$) avant de conclure.`,
        },
        {
          type: 'text',
          id: 'b-copie-5',
          titre: `✍️ La Copie Parfaite — Exercice 5`,
          contenu: `**(1)** Avec $u = x$ ($u'=1$), $v = x+1$ ($v'=1$) : $f'(x) = \\dfrac{(x+1) - x}{(x+1)^2} = \\dfrac{1}{(x+1)^2}$. Puis $f''(x) = \\dfrac{-2}{(x+1)^3} < 0$ sur $[0\\ ;\\ 1]$, donc $f'$ est strictement décroissante.

**(2)** $f'$ décroissante : son maximum est en $0$, son minimum en $1$ : $f'(0) = 1$ et $f'(1) = \\dfrac{1}{4}$. Donc $\\dfrac{1}{4} \\leq f'(x) \\leq 1$ pour tout $x \\in [0\\ ;\\ 1]$.

**(3)** $f$ est continue et dérivable sur $[0\\ ;\\ 1]$ avec $\\dfrac{1}{4} \\leq f'(t) \\leq 1$, et $f(0) = 0$. Par l'IAF (version double) sur $[0\\ ;\\ x]$ :
$$\\dfrac{1}{4}(x - 0) \\leq f(x) - f(0) \\leq 1 \\cdot (x - 0) \\implies \\dfrac{x}{4} \\leq \\dfrac{x}{x+1} \\leq x \\qquad \\square$$

*[Barème type BAC : $f'$ et décroissance 1 pt · encadrement de $f'$ 1 pt · application IAF et conclusion 2 pts — Total : 4 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-6',
          niveau: 'BAC',
          enonce: `🔴 **Exercice 6 — Bijection + Dérivée de la réciproque *(M4 · M6B)*.** Soit $f$ définie sur $\\mathbb{R}$ par $f(x) = x^3 + 2x - 2$. (1) Montrer que $f$ est une bijection de $\\mathbb{R}$ vers $\\mathbb{R}$. (2) Montrer que $1$ admet un antécédent unique par $f$ et le déterminer. (3) En déduire $(f^{-1})'(1)$.`,
          etapes: [],
          reponse: `$f$ est continue et strictement croissante ($f'(x) = 3x^2 + 2 > 0$) : bijection de $\\mathbb{R}$ sur $\\mathbb{R}$ ; $f^{-1}(1) = 1$ et $(f^{-1})'(1) = \\dfrac{1}{f'(1)} = \\dfrac{1}{5}$.`,
          conseil: `Pour trouver l'antécédent de $1$, teste les petites valeurs entières ($-1$, $0$, $1$) : une racine évidente débloque tout sans résolution lourde.`,
          piege: `Ici $f(1) = 1$ : l'antécédent ET l'image valent $1$. La formule reste $(f^{-1})'(1) = \\dfrac{1}{f'(a)}$ avec $a = f^{-1}(1) = 1$ — c'est $f'$ de l'antécédent, jamais $\\dfrac{1}{f'(\\text{image})}$ par hasard.`,
        },
        {
          type: 'text',
          id: 'b-copie-6',
          titre: `✍️ La Copie Parfaite — Exercice 6`,
          contenu: `**(1)** $f$ est un polynôme, continue sur $\\mathbb{R}$. $f'(x) = 3x^2 + 2 \\geq 2 > 0$ : $f$ est strictement croissante sur $\\mathbb{R}$. Avec $\\displaystyle\\lim_{x\\to-\\infty} f = -\\infty$ et $\\displaystyle\\lim_{x\\to+\\infty} f = +\\infty$, $f$ continue et strictement croissante réalise une bijection de $\\mathbb{R}$ vers $\\mathbb{R}$.

**(2)** On cherche $a$ tel que $f(a) = 1$ : $a^3 + 2a - 2 = 1 \\iff a^3 + 2a - 3 = 0$. Test $a = 1$ : $1 + 2 - 3 = 0$ ✓. $f$ étant bijective, cet antécédent est unique : $f^{-1}(1) = 1$.

**(3)** $f'(1) = 3(1)^2 + 2 = 5 \\neq 0$, donc $f^{-1}$ est dérivable en $1$ :
$$(f^{-1})'(1) = \\dfrac{1}{f'(f^{-1}(1))} = \\dfrac{1}{f'(1)} = \\dfrac{1}{5}$$

*[Barème type BAC : bijection et monotonie 1 pt · antécédent de $1$ 1 pt · dérivabilité et calcul 2 pts — Total : 4 pts]*`,
        },
      ],
    },
    {
      id: 's-c',
      titre: `Section C — Pièges à Éviter au BAC`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-pieges',
          headers: [`Module`, `Le piège classique`, `La correction exigée au BAC`],
          rows: [
            [`M1-M2 — Dérivée usuelle`, `Écrire que $\\sqrt{x}$ est dérivable sur $[0\\ ;\\ +\\infty[$ en incluant $0$.`, `$\\sqrt{x}$ est définie en $0$ mais son taux de variation y tend vers $+\\infty$ : dérivable seulement sur $]0\\ ;\\ +\\infty[$.`],
            [`M3 — Règles de calcul`, `Dériver un produit en écrivant $(uv)' = u'v'$.`, `La formule croisée est $(uv)' = u'v + uv'$. Identifier la structure avant d'écrire.`],
            [`M4 — Variations`, `Affirmer qu'un extremum existe dès que $f'(x_0)=0$.`, `Il faut que $f'$ change de signe en $x_0$. Sans changement de signe, c'est un point d'inflexion.`],
            [`M5 — Tangente`, `Confondre $f(x_0)$ (hauteur) et $f'(x_0)$ (pente) dans la formule.`, `Poser les deux séparément : hauteur en fin de formule, pente devant la parenthèse.`],
            [`M5 — Position`, `Conclure la position sans vérifier le signe du facteur restant.`, `Après factorisation de $f(x)-T(x)$, contrôler le signe de chaque facteur (carré $\\geq 0$, discriminant du reste).`],
            [`M6A — IAF`, `Choisir $M$ comme la valeur de $|f'|$ en un seul point.`, `$M$ doit majorer $|f'(x)|$ pour TOUT $x$ de l'intervalle. Encadrer $|f'|$ partout.`],
            [`M6B — Réciproque`, `Écrire $(f^{-1})'(b) = \\dfrac{1}{f'(b)}$ avec l'image.`, `La formule est $(f^{-1})'(b) = \\dfrac{1}{f'(a)}$ où $a = f^{-1}(b)$. Identifier d'abord l'antécédent.`],
          ],
        },
      ],
    },
    {
      id: 's-d',
      titre: `Section D — Planning 4 Heures BAC`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-planning',
          headers: [`Étape`, `Durée`, `Ce que tu fais`],
          rows: [
            [`1 — Lecture`, `15 min`, `Lire le sujet en entier. Surligner domaines et valeurs interdites. Repérer les connexions Partie A / Partie B.`],
            [`2 — Exercice court 1`, `45 min`, `Traiter le premier exercice (Géométrie / Complexes) proprement. Mise en confiance.`],
            [`3 — Exercice court 2`, `45 min`, `Traiter le deuxième (Probabilités / Suites). Appliquer les formules types sans s'attarder.`],
            [`4 — Le Grand Problème (Dérivées)`, `110 min`, `30 min de brouillon (dérivées, signes, tangentes), 80 min de rédaction Copie Parfaite avec toutes les justifications.`],
            [`5 — Vérification finale`, `25 min`, `Relire les signes, vérifier les doubles barres des valeurs interdites, nettoyer la copie. Le coin est gâté !`],
          ],
        },
      ],
    },
    {
      id: 's-fin',
      titre: `🎯 Conclusion de la Salle d'Examen`,
      blocs: [
        {
          type: 'text',
          id: 'b-fin',
          contenu: `Champion(ne), tu viens de traverser un sujet complet et six combats qui couvrent l'intégralité du tome : nombre dérivé, calcul de dérivées, variations, tangente, position, IAF et réciproque. Tu as vu comment une dérivée calculée au début irrigue tout le reste d'un problème. C'est ça, l'esprit du BAC D : un fil unique, du premier calcul à la dernière justification. Le jour J, tu ne découvriras rien — tu reconnaîtras. On va gâter le coin !`,
        },
        {
          type: 'recap',
          id: 'eval-salle',
          titre: `Vérification finale — La Salle d'Examen`,
          contenu: [
            `Je découpe ma fonction en composants $u$, $v$ avant d'appliquer la règle du produit ou du quotient.`,
            `J'exclus la borne $0$ du domaine de dérivabilité de toute fonction contenant $\\sqrt{x}$.`,
            `Je pose séparément $f(x_0)$ et $f'(x_0)$ avant d'écrire l'équation de la tangente.`,
            `J'emploie le vocabulaire officiel (point de contact, fonction monotone, accroissements finis, bijection réciproque) dans mes justifications.`,
            `Je me souviens que $(f^{-1})'(b)$ utilise la dérivée de l'antécédent $a$, jamais celle de l'image $b$.`,
          ],
        },
        {
          type: 'tip',
          id: 'verdict-salle',
          titre: `Le Verdict du Grand Frère`,
          contenu: `Si tout est coché, Champion(ne), tu as les clés des Dérivées dans la poche. Le BAC D est prévenu — ta copie va faire sensation. On va gâter le coin !`,
        },
      ],
    },
  ],
};
