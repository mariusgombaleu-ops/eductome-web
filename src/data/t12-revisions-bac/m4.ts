import { Chapitre } from '../../types/course';

export const chapitreM4: Chapitre = {
  id: 't12-m4',
  titre: `Module 4 — Sujet BAC complet n°2 : corrigé intégral`,
  duree: 30,
  niveau: 'BAC',
  xpGain: 32,
  objectifs: [
    `Prouver que trois points définissent un plan et en trouver l'équation cartésienne`,
    `Mener un raisonnement par récurrence et étudier une suite auxiliaire géométrique`,
    `Dompter un grand problème de logarithme népérien (limites, asymptotes, variations)`,
    `Vérifier la stricte positivité d'un argument avant tout calcul de ln`,
    `Basculer d'un domaine à l'autre sans paniquer sous le chronomètre`,
  ],
  sections: [
    {
      id: 's1',
      titre: `La frontière du logarithme`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, j'ai plié le premier sujet au Module 3, je connais l'exponentielle par cœur ! La géométrie dans l'espace et les logarithmes, ça va aller tout seul, non ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Calme tes ardeurs, Champion(ne). C'est exactement là que le terrain change. Le BAC D aime varier le rythme d'une session à l'autre. Les grands joueurs d'Anoumabo le savent : un match sur pelouse sèche ne se gère pas comme un match sur terrain boueux après une tornade d'Abidjan. Sur ce sujet, l'exponentielle s'efface au profit du logarithme et de la géométrie 3D. On décompose chaque coordonnée et chaque limite au brouillon, Champion(ne), et on sécurise le barème sans raccourci dangereux.`,
        },
        {
          type: 'rule',
          id: 'rule-log',
          titre: `La règle d'or du logarithme`,
          contenu: `Tout problème impliquant $\\ln$ impose de vérifier la stricte positivité de son argument. Pour tout $x\\in]\\,0\\,;\\,+\\infty\\,[$, $\\ln(x)$ est défini et $\\left(\\ln(x)\\right)'=\\dfrac{1}{x}$. Contrairement à l'exponentielle qui accepte tout réel, le logarithme dresse un mur infranchissable en $0$. Ne laisse jamais une valeur négative ou nulle s'introduire sous le symbole $\\ln$.`,
        },
        {
          type: 'text',
          id: 'b1',
          contenu: `Sujet dérivé des annales PREPABAC D (Côte d'Ivoire) — type BAC officiel.`,
        },
        {
          type: 'table',
          id: 'tbl-structure',
          headers: [`Partie`, `Domaine`, `Objectif tactique`],
          rows: [
            [`Exercice 1 (5 pts)`, `Géométrie dans l'espace (3D)`, `Valider l'existence d'un plan et son équation.`],
            [`Exercice 2 (5 pts)`, `Suites numériques récurrentes`, `Démontrer une majoration et calculer la limite.`],
            [`Grand problème (10 pts)`, `Analyse — fonction logarithme`, `Limites, asymptotes, position relative et variations.`],
          ],
        },
      ],
    },
    {
      id: 's-exo',
      titre: `🎯 LE SUJET CORRIGÉ`,
      blocs: [
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BAC',
          enonce: `🟢 **Exercice 1 — Géométrie dans l'espace** *(5 points)*. L'espace est muni d'un repère orthonormé. On donne $A(1\\,;\\,2\\,;\\,0)$, $B(2\\,;\\,0\\,;\\,1)$, $C(0\\,;\\,1\\,;\\,2)$. **1.** Démontre que $A$, $B$, $C$ définissent un plan. **2.** Démontre que $\\vec{n}(1\\,;\\,1\\,;\\,1)$ est normal au plan $(ABC)$. **3.** Détermine une équation cartésienne de $(ABC)$, puis la distance de $O$ à ce plan.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Non-colinéarité de $\\vec{AB}$ et $\\vec{AC}$, double produit scalaire nul, puis équation et distance.` },
            { name: `Question 1`, contenu: `$\\vec{AB}(1\\,;\\,-2\\,;\\,1)$ et $\\vec{AC}(-1\\,;\\,-1\\,;\\,2)$. $\\vec{AC}=k\\vec{AB}$ donnerait $k=-1$ puis $k=\\dfrac{1}{2}$ : contradiction, donc non colinéaires : $A$, $B$, $C$ définissent un plan.` },
            { name: `Question 2`, contenu: `$\\vec{n}\\cdot\\vec{AB}=1-2+1=0$ et $\\vec{n}\\cdot\\vec{AC}=-1-1+2=0$ : $\\vec{n}$ est normal au plan.` },
            { name: `Question 3`, contenu: `Équation $x+y+z+d=0$ ; $A$ y appartient : $d=-3$, soit $x+y+z-3=0$. $d(O,(ABC))=\\dfrac{|-3|}{\\sqrt{3}}=\\sqrt{3}$.` },
          ],
          reponse: `$(ABC) : x+y+z-3=0$ et $d(O,(ABC))=\\sqrt{3}$.`,
          conseil: `Écris toujours la formule littérale $\\left(x_B-x_A\\right)$ au brouillon : c'est l'endroit classique où un signe moins se télescope.`,
          piege: `Un vecteur normal doit être orthogonal à **deux** vecteurs non colinéaires du plan. Le vérifier sur un seul ne suffit pas.`,
        },
        {
          type: 'figure',
          id: 'fig-m4-1',
          src: '/images/t12/fig_M4_1.png',
          legende: `Le plan $(ABC)$ et son vecteur normal $\\vec{n}(1\\,;\\,1\\,;\\,1)$, orthogonal à deux vecteurs non colinéaires du plan.`,
          alt: `Schéma 3D du triangle ABC et du vecteur normal n perpendiculaire au plan.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite (Exercice 1)`,
          contenu: `1. $\\vec{AB}(1\\,;\\,-2\\,;\\,1)$ et $\\vec{AC}(-1\\,;\\,-1\\,;\\,2)$. Cherchons $k$ tel que $\\vec{AC}=k\\,\\vec{AB}$ : la première coordonnée donne $k=-1$, la deuxième $k=\\dfrac{1}{2}$. Les valeurs diffèrent : $\\vec{AB}$ et $\\vec{AC}$ ne sont pas colinéaires, donc $A$, $B$, $C$ définissent un plan.
2. $\\vec{n}\\cdot\\vec{AB}=1-2+1=0$ et $\\vec{n}\\cdot\\vec{AC}=-1-1+2=0$. $\\vec{n}$ est orthogonal à deux vecteurs non colinéaires de $(ABC)$ : il est normal au plan.
3. L'équation est de la forme $x+y+z+d=0$. Le point $A$ y appartient : $1+2+0+d=0$, donc $d=-3$. Une équation cartésienne est $x+y+z-3=0$.
$$d\\left(O,(ABC)\\right)=\\dfrac{|0+0+0-3|}{\\sqrt{1^2+1^2+1^2}}=\\dfrac{3}{\\sqrt{3}}=\\sqrt{3}.$$

*[Barème type BAC : non-colinéarité = 1,5 pt — normalité = 1,5 pt — équation = 1 pt — distance = 1 pt — Total : 5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🟡 **Exercice 2 — Suite récurrente et suite auxiliaire** *(5 points)*. Soit $(u_n)$ définie par $u_0=2$ et $u_{n+1}=\\dfrac{1}{3}u_n+2$. **1.** Démontre par récurrence que pour tout $n$, $u_n\\leq 3$. **2.** On pose $v_n=u_n-3$. a) Démontre que $(v_n)$ est géométrique de raison $\\dfrac{1}{3}$ et donne $v_0$. b) Exprime $v_n$ puis $u_n$. c) Calcule $\\displaystyle\\lim_{n\\to+\\infty}u_n$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Récurrence rigoureuse, puis suite auxiliaire géométrique pour obtenir le terme général et la limite.` },
            { name: `Question 1`, contenu: `Initialisation : $u_0=2\\leq 3$. Hérédité : si $u_n\\leq 3$, alors $\\dfrac{1}{3}u_n\\leq 1$ puis $\\dfrac{1}{3}u_n+2\\leq 3$, soit $u_{n+1}\\leq 3$.` },
            { name: `Question 2a-b`, contenu: `$v_{n+1}=\\dfrac{1}{3}u_n-1=\\dfrac{1}{3}(u_n-3)=\\dfrac{1}{3}v_n$, $v_0=-1$. Donc $v_n=-\\left(\\dfrac{1}{3}\\right)^n$ et $u_n=3-\\left(\\dfrac{1}{3}\\right)^n$.` },
            { name: `Question 2c`, contenu: `Comme $-1<\\dfrac{1}{3}<1$, $\\left(\\dfrac{1}{3}\\right)^n\\to 0$, donc $u_n\\to 3$.` },
          ],
          reponse: `$u_n=3-\\left(\\dfrac{1}{3}\\right)^n$ et $\\displaystyle\\lim_{n\\to+\\infty}u_n=3$.`,
          conseil: `Dans l'hérédité, pars toujours de l'hypothèse $u_n\\leq 3$ et applique les opérations dans l'ordre. Ne remonte jamais depuis l'inégalité finale.`,
          piege: `N'écris pas $v_n=q\\cdot v_0^{\\,n}$ : la formule correcte est $v_n=v_0\\cdot q^{\\,n}$.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite (Exercice 2)`,
          contenu: `1. **Initialisation :** $u_0=2\\leq 3$, vrai au rang $0$. **Hérédité :** supposons $u_n\\leq 3$. En multipliant par $\\dfrac{1}{3}>0$ : $\\dfrac{1}{3}u_n\\leq 1$, puis en ajoutant $2$ : $\\dfrac{1}{3}u_n+2\\leq 3$, soit $u_{n+1}\\leq 3$. **Conclusion :** pour tout entier naturel $n$, $u_n\\leq 3$.
2. a) $v_{n+1}=u_{n+1}-3=\\dfrac{1}{3}u_n+2-3=\\dfrac{1}{3}\\left(u_n-3\\right)=\\dfrac{1}{3}v_n$. Donc $(v_n)$ est géométrique de raison $\\dfrac{1}{3}$, avec $v_0=u_0-3=-1$.
b) $v_n=v_0\\cdot\\left(\\dfrac{1}{3}\\right)^{n}=-\\left(\\dfrac{1}{3}\\right)^{n}$, d'où $u_n=v_n+3=3-\\left(\\dfrac{1}{3}\\right)^{n}$.
c) Comme $-1<\\dfrac{1}{3}<1$, $\\displaystyle\\lim_{n\\to+\\infty}\\left(\\dfrac{1}{3}\\right)^{n}=0$, donc $\\displaystyle\\lim_{n\\to+\\infty}u_n=3$.

*[Barème type BAC : récurrence = 1,5 pt — caractère géométrique et $v_0$ = 1,5 pt — expressions = 1 pt — limite = 1 pt — Total : 5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice 3 — Le grand problème : fonction logarithme** *(10 points)*. Soit $f$ définie sur $]\\,0\\,;\\,+\\infty\\,[$ par $f(x)=x+1+\\dfrac{\\ln(x)}{x}$, de courbe $(\\mathcal{C})$. **1.** Calcule $\\displaystyle\\lim_{x\\to 0^{>}}f(x)$ (et interprète) et $\\displaystyle\\lim_{x\\to+\\infty}f(x)$. **2.** Montre que $(\\Delta):y=x+1$ est asymptote oblique en $+\\infty$, puis étudie la position relative. **3.** Montre que $f'(x)=\\dfrac{g(x)}{x^2}$ avec $g(x)=x^2+1-\\ln(x)$, puis (avec $g(x)>0$ admis) dresse le tableau de variations.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Limite en $0$ par produit, croissance comparée en $+\\infty$, dérivation d'un quotient pour $f'$.` },
            { name: `Question 1`, contenu: `En $0^{>}$ : $\\dfrac{\\ln(x)}{x}\\to-\\infty$, donc $f\\to-\\infty$ : asymptote verticale $x=0$. En $+\\infty$ : croissance comparée $\\dfrac{\\ln(x)}{x}\\to 0$, donc $f\\to+\\infty$.` },
            { name: `Question 2`, contenu: `$f(x)-(x+1)=\\dfrac{\\ln(x)}{x}\\to 0$ : $(\\Delta)$ asymptote oblique. Signe de $\\ln(x)$ : dessous sur $]0;1[$, dessus sur $]1;+\\infty[$, contact en $(1\\,;\\,2)$.` },
            { name: `Question 3`, contenu: `$\\left(\\dfrac{\\ln x}{x}\\right)'=\\dfrac{1-\\ln x}{x^2}$, donc $f'(x)=\\dfrac{x^2+1-\\ln x}{x^2}=\\dfrac{g(x)}{x^2}$. Comme $x^2>0$ et $g(x)>0$ (admis), $f'>0$.` },
          ],
          reponse: `$\\displaystyle\\lim_{0^{>}}f=-\\infty$ (asymptote $x=0$), $\\displaystyle\\lim_{+\\infty}f=+\\infty$ ; asymptote oblique $(\\Delta):y=x+1$ avec contact en $(1\\,;\\,2)$ ; $f$ strictement croissante sur $]\\,0\\,;\\,+\\infty\\,[$.`,
          conseil: `Quand l'énoncé admet « $g(x)>0$ », prends-le comme une vérité et sers-t'en pour le signe de $f'$.`,
          piege: `Pour la position relative, précise le point d'intersection en $x=1$, sinon le correcteur retire un quart de point.`,
        },
        {
          type: 'figure',
          id: 'fig-m4-2',
          src: '/images/t12/fig_M4_2.png',
          legende: `La courbe de $f(x)=x+1+\\dfrac{\\ln(x)}{x}$ : asymptote verticale $x=0$ et asymptote oblique $y=x+1$ (contact en $(1\\,;\\,2)$).`,
          alt: `Courbe logarithmique de f avec son asymptote verticale x = 0 et son asymptote oblique y = x + 1.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite (Grand problème)`,
          contenu: `1. a) $\\displaystyle\\lim_{x\\to 0^{>}}(x+1)=1$ ; $\\displaystyle\\lim_{x\\to 0^{>}}\\ln(x)=-\\infty$ et $\\displaystyle\\lim_{x\\to 0^{>}}\\dfrac{1}{x}=+\\infty$, donc par produit $\\displaystyle\\lim_{x\\to 0^{>}}\\dfrac{\\ln(x)}{x}=-\\infty$. Ainsi $\\displaystyle\\lim_{x\\to 0^{>}}f(x)=-\\infty$ : la droite $x=0$ (l'axe des ordonnées) est asymptote verticale à $(\\mathcal{C})$.
b) Par croissance comparée, $\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{\\ln(x)}{x}=0$, donc $\\displaystyle\\lim_{x\\to+\\infty}f(x)=+\\infty$.
2. $f(x)-(x+1)=\\dfrac{\\ln(x)}{x}\\to 0$ en $+\\infty$ : la droite $(\\Delta):y=x+1$ est asymptote oblique. Le signe de $\\dfrac{\\ln(x)}{x}$ est celui de $\\ln(x)$ car $x>0$ : sur $]\\,0\\,;\\,1[$, $(\\mathcal{C})$ est au-dessous de $(\\Delta)$ ; sur $]\\,1\\,;\\,+\\infty[$, au-dessus. En $x=1$, $f(1)=2$ : contact au point $(1\\,;\\,2)$.
3. $\\left(\\dfrac{\\ln(x)}{x}\\right)'=\\dfrac{\\frac{1}{x}\\cdot x-\\ln(x)}{x^2}=\\dfrac{1-\\ln(x)}{x^2}$, donc $f'(x)=1+\\dfrac{1-\\ln(x)}{x^2}=\\dfrac{x^2+1-\\ln(x)}{x^2}=\\dfrac{g(x)}{x^2}$. Pour tout $x>0$, $x^2>0$ et $g(x)>0$ (admis), donc $f'(x)>0$ : $f$ est strictement croissante sur $]\\,0\\,;\\,+\\infty\\,[$.

*[Barème type BAC : limite en $0$ et asymptote verticale = 2 pts — limite en $+\\infty$ = 1 pt — asymptote oblique = 1,5 pt — position relative + contact = 1,5 pt — dérivation = 2 pts — signe de $f'$ et tableau = 2 pts — Total : 10 pts]*`,
        },
        {
          type: 'table',
          id: 'tbl-tv',
          titre: `Tableau de variations`,
          headers: [`$x$`, `$0$`, `$+\\infty$`],
          rows: [
            [`$f'(x)$`, `$+$`, ``],
            [`$f(x)$`, `$-\\infty \\;\\nearrow\\; +\\infty$`, ``],
          ],
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Réponses finales seulement.

- **Exercice 1.** $\\vec{n}(1\\,;\\,1\\,;\\,1)$ est-il orthogonal à $\\vec{w}(2\\,;\\,-1\\,;\\,-1)$ ? *(Réponse : oui, car $2-1-1=0$.)*
- **Exercice 2.** Limite de $u_n=5-\\left(\\dfrac{1}{2}\\right)^{n}$. *(Réponse : $5$.)*
- **Exercice 3.** Limite en $+\\infty$ de $\\dfrac{\\ln(x)}{x}$. *(Réponse : $0$, par croissance comparée.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m4',
          titre: `À retenir`,
          contenu: [
            `Le BAC D exige une flexibilité totale : basculer de la géométrie vectorielle au logarithme sans paniquer.`,
            `📘 Vocabulaire officiel : « les vecteurs ne sont pas colinéaires », « $\\vec{n}$ est normal au plan », « asymptote verticale d'équation $x=0$ ».`,
            `Le geste-clé : rapprocher l'expression de $f'$ de la fonction auxiliaire $g$ fournie pour fixer les flèches du tableau.`,
            `Le logarithme dresse un mur en $0$ : vérifie toujours la stricte positivité de l'argument.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m4',
          titre: `Fil rouge`,
          contenu: `Tu as maintenant deux sujets complets dans les jambes. Place à la vitesse pure : la Salle d'Entraînement t'attend avec 5 exercices flash chronométrés, un par grand bloc, pour aiguiser tes automatismes avant le couronnement.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m4',
          titre: `Auto-évaluation — Module 4`,
          contenu: [
            `Je sais prouver que trois points définissent un plan unique dans l'espace.`,
            `Je maîtrise les trois phases d'un raisonnement par récurrence.`,
            `J'utilise le vocabulaire officiel (« vecteur normal », « asymptote verticale d'équation $x=0$ ») dans mes copies.`,
            `Je sais appliquer les croissances comparées du logarithme népérien.`,
            `Je sais exploiter une fonction auxiliaire admise pour dresser un tableau de variations.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m4',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Merveilleux, Champion(ne) ! Ta préparation technique est achevée, tu es prêt(e) pour la vitesse.`,
            `🟡 **3 ou 4** → Relis calmement la dérivation du quotient du grand problème.`,
            `🔴 **0 à 2** → Reprends l'analogie du terrain boueux pour retrouver ton sens de la méthode.`,
          ],
        },
      ],
    },
  ],
};
