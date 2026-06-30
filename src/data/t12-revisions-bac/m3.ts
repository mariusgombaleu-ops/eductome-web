import { Chapitre } from '../../types/course';

export const chapitreM3: Chapitre = {
  id: 't12-m3',
  titre: `Module 3 — Sujet BAC complet n°1 : corrigé intégral`,
  duree: 30,
  niveau: 'BAC',
  xpGain: 32,
  objectifs: [
    `Appliquer l'ordre d'attaque sur une épreuve réelle, sans calculatrice`,
    `Rédiger une Copie Parfaite question par question pour un maximum de points`,
    `Justifier une loi binomiale avec ses trois critères officiels`,
    `Qualifier un triangle à partir du module et de l'argument d'un quotient complexe`,
    `Mener une étude de fonction exponentielle complète (limites, asymptote, variations)`,
  ],
  sections: [
    {
      id: 's1',
      titre: `La récolte méthodique`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, quand je regarde un sujet de BAC entier, mes yeux se mélangent. Par quoi je commence pour ne pas perdre mes moyens ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Respire, Champion(ne). Tu te souviens du grand marché d'Adjamé du Module 1 ? Sans liste, tu te perds. Ici c'est pareil : on prend un sujet réel, conforme aux exigences de la Côte d'Ivoire, et on applique le plan de vol du Module 2, minute par minute. Tu vas voir comment transformer cette grosse épreuve en une simple récolte de points bien organisée.`,
        },
        {
          type: 'text',
          id: 'b1',
          contenu: `Pour préparer un grand banquet à Abidjan, les cuisinières ne coupent pas les plantains, ne nettoient pas le poisson et n'allument pas le feu en même temps dans la panique. Elles s'organisent étape par étape : la marmite qui cuit longtemps d'abord, les sauces rapides pendant ce temps.

Sur ta table d'examen, c'est identique. L'installation, ce sont les 15 minutes de lecture globale. Les sauces rapides, ce sont l'Exercice 1 (probabilités) et l'Exercice 2 (complexes). La grosse marmite de sauce graine, c'est le grand problème d'analyse sur 10 points. Et le dressage des assiettes, ce sont les 15 dernières minutes de vérification.`,
        },
        {
          type: 'rule',
          id: 'rule-recolte',
          titre: `La règle d'or de la récolte`,
          contenu: `Chaque exercice est un gisement indépendant : on extrait d'abord les points faciles grâce aux formules de cours, puis on s'attaque au calcul fin. Ne reste jamais bloqué(e) plus de 5 minutes ; utilise le résultat fourni par l'énoncé pour avancer.`,
        },
        {
          type: 'text',
          id: 'b2',
          contenu: `Sujet dérivé des annales PREPABAC D (Côte d'Ivoire) — type BAC officiel.`,
        },
        {
          type: 'table',
          id: 'tbl-structure',
          headers: [`Partie`, `Domaine`, `Objectif tactique`],
          rows: [
            [`Exercice 1 (5 pts)`, `Probabilités — loi binomiale`, `Décrocher la note maximale sur les définitions.`],
            [`Exercice 2 (5 pts)`, `Nombres complexes & géométrie`, `Qualifier un triangle via le module et l'argument.`],
            [`Grand problème (10 pts)`, `Analyse — fonction exponentielle`, `Limites, asymptote oblique, tableau de variations.`],
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
          enonce: `🟢 **Exercice 1 — Probabilités : loi binomiale** *(5 points)*. Une coopérative agricole d'Agboville trie des fèves de cacao. On sait que $10\\%$ des fèves présentent un défaut de séchage. Un inspecteur prélève au hasard, de façon indépendante, un échantillon de $8$ fèves. Soit $X$ la variable aléatoire égale au nombre de fèves défectueuses. **1.** Justifier que $X$ suit une loi binomiale dont on précisera les paramètres. **2.** Calculer $P(X=2)$ (valeur exacte). **3.** Calculer $P(X\\geq 1)$ (valeur à $10^{-4}$ près).`,
          etapes: [
            { name: `Diagnostic`, contenu: `Question 1 : énoncer les trois critères de la loi binomiale. Question 2 : appliquer la formule sans calculatrice. Question 3 : réflexe de l'événement contraire.` },
            { name: `Question 1`, contenu: `Deux issues (succès $S$ « défectueuse » de probabilité $p=0,1$, échec $q=0,9$), $n=8$ répétitions identiques et indépendantes : $X$ suit $\\mathcal{B}(8\\,;\\,0,1)$.` },
            { name: `Question 2`, contenu: `$P(X=2)=\\dbinom{8}{2}(0,1)^2(0,9)^6=28\\times\\dfrac{9^6}{10^8}=\\dfrac{7\\times 9^6}{25\\,000\\,000}$.` },
            { name: `Question 3`, contenu: `$P(X\\geq 1)=1-P(X=0)=1-(0,9)^8\\approx 0,5695$.` },
          ],
          reponse: `$X \\sim \\mathcal{B}(8\\,;\\,0,1)$ ; $P(X=2)=\\dfrac{7\\times 9^6}{25\\,000\\,000}$ ; $P(X\\geq 1)\\approx 0,5695$.`,
          conseil: `Écris la formule générale avec $n$, $k$, $p$ avant de remplacer : le correcteur attribue la moitié des points à la formule de cours.`,
          piege: `Ne confonds pas $\\dbinom{8}{2}$ avec la fraction $\\dfrac{8}{2}$. Le coefficient se calcule au brouillon : $\\dbinom{8}{2}=\\dfrac{8\\times 7}{2\\times 1}=28$.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite (Exercice 1)`,
          contenu: `1. L'expérience consiste à vérifier une fève : deux issues, le succès $S$ « la fève est défectueuse » de probabilité $p=0,1$, et l'échec de probabilité $q=0,9$. L'épreuve est répétée $n=8$ fois de façon identique et indépendante (tirage assimilé à un tirage avec remise). $X$ comptant les succès, $X$ suit la loi binomiale $\\mathcal{B}(8\\,;\\,0,1)$.
2. $P(X=2)=\\dbinom{8}{2}(0,1)^2(0,9)^6=28\\times\\dfrac{1}{100}\\times\\dfrac{9^6}{10^6}=\\dfrac{28\\times 9^6}{10^8}=\\dfrac{7\\times 9^6}{25\\,000\\,000}$.
3. $P(X\\geq 1)=1-P(X=0)=1-(0,9)^8\\approx 1-0,4305=0,5695$.

*[Barème type BAC : 3 critères = 1 pt — paramètres = 0,5 pt — formule = 0,5 pt — calcul de $P(X=2)$ = 1 pt — événement contraire = 1 pt — Total : 4 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🟡 **Exercice 2 — Complexes et nature d'un triangle** *(5 points)*. Le plan complexe est rapporté à un repère orthonormé direct $\\left(O\\,;\\,\\vec{u}\\,;\\,\\vec{v}\\right)$. On considère $A$, $B$, $C$ d'affixes $z_A=1$, $z_B=1+3i$, $z_C=4$. **1.** Place $A$, $B$, $C$. **2.** Calcule la forme algébrique de $Z=\\dfrac{z_B-z_A}{z_C-z_A}$. **3.** Donne le module et un argument de $Z$. **4.** Déduis-en la nature précise du triangle $ABC$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Le quotient $\\dfrac{z_B-z_A}{z_C-z_A}$ a pour module $\\dfrac{AB}{AC}$ et pour argument l'angle $\\left(\\vec{AC},\\vec{AB}\\right)$. Module et argument donnent directement la nature du triangle.` },
            { name: `Question 2`, contenu: `$z_B-z_A=3i$ et $z_C-z_A=3$, donc $Z=\\dfrac{3i}{3}=i$.` },
            { name: `Question 3`, contenu: `$|Z|=|i|=1$ et $\\arg(Z)=\\dfrac{\\pi}{2}\\;[2\\pi]$.` },
            { name: `Question 4`, contenu: `$|Z|=\\dfrac{AB}{AC}=1 \\Rightarrow AB=AC$ (isocèle en $A$) ; $\\arg(Z)=\\dfrac{\\pi}{2}$ (angle droit en $A$).` },
          ],
          reponse: `$Z=i$, $|Z|=1$, $\\arg(Z)=\\dfrac{\\pi}{2}$ : le triangle $ABC$ est **rectangle et isocèle en $A$**.`,
          conseil: `Ne fais jamais le calcul du quotient sur ta copie propre : déroule la distribution au brouillon, puis recopie le résultat net.`,
          piege: `Rappelle-toi que $i^2=-1$. Une erreur de signe ici fausse le module et la conclusion.`,
        },
        {
          type: 'figure',
          id: 'fig-m3-1',
          src: '/images/t12/fig_M3_1.png',
          legende: `Plan d'Argand : le triangle $ABC$ est rectangle et isocèle en $A$ ($AB = AC$, angle droit en $A$).`,
          alt: `Repère complexe avec les points A(1), B(1+3i), C(4) formant un triangle rectangle isocèle en A.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite (Exercice 2)`,
          contenu: `2. Calculons les affixes : $z_B-z_A=3i$ et $z_C-z_A=3$. Donc :
$$Z=\\dfrac{z_B-z_A}{z_C-z_A}=\\dfrac{3i}{3}=i.$$
3. On a $|Z|=|i|=1$ et $\\arg(Z)=\\dfrac{\\pi}{2}\\;[2\\pi]$.
4. De $|Z|=\\dfrac{AB}{AC}=1$, on tire $AB=AC$ : le triangle est isocèle en $A$. De plus, $\\arg(Z)=\\left(\\vec{AC},\\vec{AB}\\right)=\\dfrac{\\pi}{2}$ : l'angle en $A$ est droit. Le triangle $ABC$ est donc **rectangle et isocèle en $A$**.

*[Barème type BAC : placement = 0,5 pt — calcul de $Z$ = 1,5 pt — module et argument = 1,5 pt — nature du triangle = 1,5 pt — Total : 5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice 3 — Le grand problème d'analyse** *(10 points)*. Soit $f$ définie sur $\\mathbb{R}$ par $f(x)=(x-2)e^{-x}+x+1$, de courbe $(\\mathcal{C})$. **1.** Calcule $\\displaystyle\\lim_{x\\to-\\infty}f(x)$ et $\\displaystyle\\lim_{x\\to+\\infty}f(x)$. **2.** Montre que $(\\Delta):y=x+1$ est asymptote oblique à $(\\mathcal{C})$ en $+\\infty$, puis étudie la position relative. **3.** Montre que $f'(x)=g(x)e^{-x}$ avec $g(x)=e^{x}-x+3$, puis (avec $g(x)>0$ admis) dresse le tableau de variations.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Croissance comparée pour les limites, $f(x)-(x+1)$ pour l'asymptote, dérivation d'un produit pour $f'$.` },
            { name: `Question 1`, contenu: `En $-\\infty$ : $(x-2)e^{-x}\\to-\\infty$ et $x+1\\to-\\infty$, donc $f\\to-\\infty$. En $+\\infty$ : par croissance comparée $(x-2)e^{-x}\\to 0$, donc $f\\to+\\infty$.` },
            { name: `Question 2`, contenu: `$f(x)-(x+1)=(x-2)e^{-x}\\to 0$ en $+\\infty$ : $(\\Delta)$ est asymptote oblique. Signe de $(x-2)$ : $(\\mathcal{C})$ dessous sur $]-\\infty;2[$, dessus sur $]2;+\\infty[$, contact en $(2\\,;\\,3)$.` },
            { name: `Question 3`, contenu: `$f'(x)=(3-x)e^{-x}+1=(e^{x}-x+3)e^{-x}=g(x)e^{-x}$. Comme $e^{-x}>0$ et $g(x)>0$ (admis), $f'>0$ : $f$ strictement croissante.` },
          ],
          reponse: `$\\displaystyle\\lim_{-\\infty}f=-\\infty$, $\\displaystyle\\lim_{+\\infty}f=+\\infty$ ; asymptote $(\\Delta):y=x+1$ avec contact en $(2\\,;\\,3)$ ; $f$ strictement croissante sur $\\mathbb{R}$.`,
          conseil: `Quand l'énoncé t'offre « On admet que $g(x)>0$ », ne perds pas une seconde à le démontrer : sers-t'en pour fixer le signe de $f'$.`,
          piege: `Pour la position relative, précise toujours le **point de contact** où $(\\mathcal{C})$ coupe $(\\Delta)$, sinon le correcteur retire un quart de point.`,
        },
        {
          type: 'figure',
          id: 'fig-m3-2',
          src: '/images/t12/fig_M3_2.png',
          legende: `La courbe de $f(x)=(x-2)e^{-x}+x+1$, strictement croissante, et son asymptote oblique $y=x+1$ (contact en $(2\\,;\\,3)$).`,
          alt: `Courbe de f strictement croissante et sa droite asymptote oblique y = x + 1, se touchant au point (2 ; 3).`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite (Grand problème)`,
          contenu: `1. En $-\\infty$ : $\\displaystyle\\lim_{x\\to-\\infty}(x-2)e^{-x}=-\\infty$ et $\\displaystyle\\lim_{x\\to-\\infty}(x+1)=-\\infty$, donc $\\displaystyle\\lim_{x\\to-\\infty}f(x)=-\\infty$. En $+\\infty$ : par croissance comparée $\\displaystyle\\lim_{x\\to+\\infty}(x-2)e^{-x}=0$, donc $\\displaystyle\\lim_{x\\to+\\infty}f(x)=+\\infty$.
2. $f(x)-(x+1)=(x-2)e^{-x}$ et $\\displaystyle\\lim_{x\\to+\\infty}\\left[f(x)-(x+1)\\right]=0$ : la droite $(\\Delta):y=x+1$ est asymptote oblique en $+\\infty$. Le signe de $(x-2)e^{-x}$ est celui de $(x-2)$ car $e^{-x}>0$ : sur $]-\\infty\\,;\\,2[$, $(\\mathcal{C})$ est au-dessous de $(\\Delta)$ ; sur $]2\\,;\\,+\\infty[$, au-dessus. En $x=2$, $f(2)=3$ : contact au point $(2\\,;\\,3)$.
3. $f'(x)=\\left[e^{-x}-(x-2)e^{-x}\\right]+1=(3-x)e^{-x}+1=(e^{x}-x+3)e^{-x}=g(x)e^{-x}$. Pour tout réel $x$, $e^{-x}>0$ et $g(x)>0$ (admis), donc $f'(x)>0$ : $f$ est strictement croissante sur $\\mathbb{R}$.

*[Barème type BAC : limites = 2 pts — asymptote oblique = 1,5 pt — position relative + contact = 1,5 pt — dérivation et factorisation = 2,5 pts — signe de $f'$ et tableau = 2,5 pts — Total : 10 pts]*`,
        },
        {
          type: 'table',
          id: 'tbl-tv',
          titre: `Tableau de variations`,
          headers: [`$x$`, `$-\\infty$`, `$+\\infty$`],
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

- **Exercice 1.** Avec $X \\sim \\mathcal{B}(5\\,;\\,0,2)$, calcule $P(X=0)$. *(Réponse : $(0,8)^5=0,32768$.)*
- **Exercice 2.** Si $\\dfrac{z_B-z_A}{z_C-z_A}=2i$, quelle est la nature du triangle $ABC$ ? *(Réponse : rectangle en $A$, avec $AB=2\\,AC$.)*
- **Exercice 3.** Quelle est la limite en $+\\infty$ de $(x-2)e^{-x}$ ? *(Réponse : $0$, par croissance comparée.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m3',
          titre: `À retenir`,
          contenu: [
            `Un sujet BAC se découpe en séquences tactiques minutées : la structure des réponses rapporte des points indispensables.`,
            `📘 Vocabulaire officiel : « $X$ suit la loi $\\mathcal{B}(n\\,;\\,p)$ », « la droite $(\\Delta)$ est asymptote oblique », « par croissance comparée ».`,
            `Le geste-clé : utiliser une question « Montrer que » ou « On admet que » comme une vérité acquise pour la suite.`,
            `Un quotient complexe livre la nature d'un triangle : module $=\\dfrac{AB}{AC}$, argument $=$ l'angle en $A$.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m3',
          titre: `Fil rouge`,
          contenu: `Tu as plié un premier sujet centré sur l'exponentielle. Mais le BAC aime changer de terrain d'une session à l'autre. Au Module 4, on attaque un sujet n°2 complémentaire : géométrie dans l'espace, suites récurrentes et logarithme népérien.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m3',
          titre: `Auto-évaluation — Module 3`,
          contenu: [
            `Je sais énoncer les 3 critères obligatoires d'une loi binomiale.`,
            `Je sais qualifier un triangle à partir du module et de l'argument d'un quotient complexe.`,
            `J'utilise le vocabulaire officiel (« asymptote oblique », « par croissance comparée ») dans mes copies.`,
            `Je sais lever une indétermination avec les croissances comparées de l'exponentielle.`,
            `Je sais dresser un tableau de variations relié au signe d'une fonction auxiliaire admise.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m3',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Magnifique, Champion(ne) ! Tes réflexes de rédaction sont aiguisés, fonce vers le Module 4.`,
            `🟡 **3 ou 4** → Reprends calmement la dérivation du produit dans le grand problème.`,
            `🔴 **0 à 2** → Relis l'organisation de la cuisine du banquet pour retrouver ta méthode.`,
          ],
        },
      ],
    },
  ],
};
