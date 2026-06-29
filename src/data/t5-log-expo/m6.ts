import { Chapitre } from '../../types/course';

export const chapitreM6: Chapitre = {
  id: 't5-m6',
  titre: `Module 6 — Les Croissances comparées`,
  duree: 27,
  niveau: 'BAC',
  xpGain: 35,
  objectifs: [
    `Classer $\\ln x$, $x^\\alpha$ et $e^x$ selon leur vitesse de croissance à l'infini`,
    `Lever une forme indéterminée $\\dfrac{\\infty}{\\infty}$ ou $0 \\times \\infty$ avec les croissances comparées`,
    `Énoncer la hiérarchie des croissances avec le vocabulaire officiel attendu au BAC`,
    `Calculer les limites de référence en $+\\infty$, en $-\\infty$ et en $0^+$`,
    `Reconnaître le terme dominant dans une expression mixte`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, dès que j'ai une limite avec $\\dfrac{e^x}{x}$ ou $\\dfrac{\\ln x}{x}$ en $+\\infty$, je tombe sur $\\dfrac{\\infty}{\\infty}$ et je bloque. Tout monte vers l'infini, alors comment savoir qui gagne ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `C'est LA grande question du tome, Champion(ne), et la réponse va te rassurer. À l'infini, toutes ces fonctions montent, c'est vrai — mais pas à la même vitesse. Il y a une hiérarchie absolue, un classement qui ne change jamais : l'exponentielle écrase la puissance, et la puissance écrase le logarithme. Une fois que tu connais ce classement, ces limites qui te bloquaient tombent toutes seules. On va organiser le choc des titans.`,
        },
      ],
    },
    {
      id: 's2',
      titre: `② LE RÉEL`,
      blocs: [
        {
          type: 'text',
          id: 'b3',
          contenu: `Imagine une grande course de vitesse sur le boulevard, départ commun devant le Stade Félix-Houphouët-Boigny. Trois concurrents s'élancent : un piéton qui marche tranquillement, un gbaka qui roule à allure régulière, et un avion de la compagnie qui décolle de Port-Bouët.

Au tout début, sur les premiers mètres, les trois sont presque côte à côte — l'avion n'a pas encore pris sa vitesse, on pourrait même croire que le piéton tient la distance. Mais laisse passer le temps, et le verdict devient sans appel. Le gbaka distance le piéton, encore et encore. Et l'avion, lui, laisse tout le monde sur place et disparaît dans le ciel.

C'est exactement ce qui se passe entre nos trois fonctions à l'infini. *Le logarithme est le piéton, la puissance est le gbaka, l'exponentielle est l'avion : sur la durée, l'exponentielle gagne toujours, le logarithme perd toujours, et aucun retournement n'est possible.*`,
        },
        {
          type: 'figure',
          id: 'fig-m6-1',
          src: '/images/t5/fig_M6_1.png',
          legende: `À l'infini, l'exponentielle écrase la puissance, qui écrase le logarithme : la hiérarchie ne s'inverse jamais.`,
          alt: `Course à l'infini entre ln x, x et e puissance x à des vitesses très différentes.`,
        },
      ],
    },
    {
      id: 's3',
      titre: `③ LE PONT`,
      blocs: [
        {
          type: 'text',
          id: 'b4',
          contenu: `Traduisons la course du boulevard en symboles.

- **Le piéton qui rampe** → $\\ln x$, la croissance la plus lente.
- **Le gbaka régulier** → $x^\\alpha$, une puissance, vitesse intermédiaire.
- **L'avion qui décolle** → $e^x$, la croissance la plus rapide.
- **L'avion distance le gbaka** → $\\dfrac{e^x}{x^\\alpha} \\to +\\infty$ ; **le gbaka distance le piéton** → $\\dfrac{\\ln x}{x^\\alpha} \\to 0$.`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène de la course`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Le piéton (le plus lent)`, `$\\ln x$`, `Croissance la plus lente à l'infini.`],
            [`Le gbaka (intermédiaire)`, `$x^\\alpha$ avec $\\alpha > 0$`, `Croissance de type puissance.`],
            [`L'avion (le plus rapide)`, `$e^x$`, `Croissance la plus rapide à l'infini.`],
            [`L'avion distance le gbaka`, `$\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{e^x}{x^\\alpha} = +\\infty$`, `L'exponentielle l'emporte sur la puissance.`],
            [`Le gbaka distance le piéton`, `$\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{\\ln x}{x^\\alpha} = 0$`, `La puissance l'emporte sur le logarithme.`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `Cette hiérarchie a un énoncé officiel. Habillons-la dans le langage du BAC.`,
        },
      ],
    },
    {
      id: 's-bac',
      titre: `📘 LANGAGE OFFICIEL DU BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b6',
          contenu: `Champion(ne), tu as l'image de la course du Stade FHB. La copie attend les limites exactes.

**Définition formelle.** On appelle **croissances comparées** la hiérarchie des vitesses à l'infini. Pour tout réel $\\alpha > 0$ : $\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{e^x}{x^\\alpha} = +\\infty$ et $\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{\\ln x}{x^\\alpha} = 0$. De plus : $\\displaystyle\\lim_{x\\to+\\infty} x^\\alpha e^{-x} = 0$, $\\displaystyle\\lim_{x\\to-\\infty} x\\,e^{x} = 0$ et $\\displaystyle\\lim_{x\\to 0^+} x^\\alpha \\ln x = 0$.

**En langage courant.** À l'infini, l'exponentielle domine toute puissance, et toute puissance domine le logarithme : « l'avion bat le gbaka qui bat le piéton ».`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Croissance comparée** — la hiérarchie $e^x \\gg x^\\alpha \\gg \\ln x$ à l'infini.
- **Terme dominant** — la fonction qui impose sa limite dans une expression mixte.
- **Forme indéterminée** — $\\dfrac{\\infty}{\\infty}$ ou $0 \\times \\infty$, à lever par les croissances comparées.
- **Limite par domination** — la conclusion « le terme le plus fort impose sa limite ».`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend la justification : *« Par croissance comparée, $\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{e^x}{x} = +\\infty$ »* (ou la limite adaptée). Citer le bon résultat de référence, c'est gagner les points de la levée d'indétermination.`,
        },
      ],
    },
    {
      id: 's4',
      titre: `④ LA RÈGLE`,
      blocs: [
        {
          type: 'rule',
          id: 'rule9',
          titre: `Règle d'Or — La hiérarchie des croissances comparées`,
          contenu: `À l'infini, pour tout $\\alpha > 0$ :
$$\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{e^x}{x^\\alpha} = +\\infty \\qquad \\displaystyle\\lim_{x\\to+\\infty}\\dfrac{\\ln x}{x^\\alpha} = 0$$
Aux autres bornes :
$$\\displaystyle\\lim_{x\\to+\\infty} x^\\alpha e^{-x} = 0 \\qquad \\displaystyle\\lim_{x\\to-\\infty} x\\,e^{x} = 0 \\qquad \\displaystyle\\lim_{x\\to 0^+} x^\\alpha \\ln x = 0$$`,
        },
        {
          type: 'text',
          id: 'b10',
          contenu: `**Limites de taux (en $0$).** $\\displaystyle\\lim_{x\\to 0}\\dfrac{\\ln(1+x)}{x} = 1$ et $\\displaystyle\\lim_{x\\to 0}\\dfrac{e^x - 1}{x} = 1$.`,
        },
        {
          type: 'tip',
          id: 'tip11',
          titre: `Conseil du Grand Frère`,
          contenu: `La phrase magique à retenir : *« l'exponentielle gagne toujours, le logarithme perd toujours »*. Dès qu'une limite oppose $e^x$ à une puissance, ou une puissance à $\\ln x$, tu connais d'avance le vainqueur.`,
        },
        {
          type: 'warning',
          id: 'warn12',
          titre: `Piège à éviter`,
          contenu: `En $0^+$, ne crois pas que $\\ln x$ (qui file vers $-\\infty$) l'emporte dans $x\\ln x$ : c'est la puissance $x$ qui gagne, donc $\\displaystyle\\lim_{x\\to 0^+} x\\ln x = 0$. À l'origine aussi, la puissance domine le logarithme.`,
        },
      ],
    },
    {
      id: 's5',
      titre: `⑤ LA DESCENTE`,
      blocs: [
        {
          type: 'text',
          id: 'b13',
          titre: `Le Diagnostic`,
          contenu: `Repère la forme indéterminée : un quotient $\\dfrac{\\infty}{\\infty}$ mêlant $e^x$, $x^\\alpha$, $\\ln x$ → identifie le terme dominant ; un produit $0 \\times \\infty$ comme $x\\ln x$ en $0^+$ → applique la limite de référence ; un $\\dfrac{0}{0}$ près de $0$ → pense aux limites de taux.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Si tu vois…`, `Ce que tu fais`],
          rows: [
            [`$\\dfrac{e^x}{x^\\alpha}$ en $+\\infty$`, `Conclus $+\\infty$ : l'exponentielle gagne.`],
            [`$\\dfrac{\\ln x}{x^\\alpha}$ en $+\\infty$`, `Conclus $0$ : la puissance gagne.`],
            [`$x^\\alpha \\ln x$ en $0^+$`, `Conclus $0$ : la puissance gagne à l'origine.`],
            [`$x^n e^{x}$ en $-\\infty$`, `Conclus $0$ : l'exponentielle écrase la puissance.`],
            [`$\\dfrac{e^x-1}{x}$ ou $\\dfrac{\\ln(1+x)}{x}$ en $0$`, `Conclus $1$ : limite de taux.`],
          ],
        },
        {
          type: 'text',
          id: 'b14',
          titre: `La Procédure (lever une indétermination)`,
          contenu: `**Étape 1.** Identifie la forme indéterminée (remplace par les limites brutes pour la repérer).

**Étape 2.** Factorise par le terme dominant (le plus rapide), ou réécris pour faire apparaître une limite de référence.

**Étape 3.** Applique la croissance comparée adaptée pour conclure sur chaque facteur.

**Étape 4.** Conclus la limite globale par une phrase complète, en citant le résultat de référence utilisé.`,
        },
        {
          type: 'tip',
          id: 'tip15',
          titre: `La Vérification`,
          contenu: `- **Cohérence avec la hiérarchie** : ta conclusion doit respecter « exponentielle > puissance > logarithme ».
- **Signe attendu** : vérifie le signe de chaque facteur dominant avant d'annoncer $+\\infty$ ou $-\\infty$.`,
        },
        {
          type: 'figure',
          id: 'fig-m6-2',
          src: '/images/t5/fig_M6_2.png',
          legende: `Même divisé par $x$, l'exponentielle finit par tout emporter : la limite est $+\\infty$.`,
          alt: `Courbe du quotient e puissance x sur x qui plonge puis s'envole vers l'infini.`,
        },
      ],
    },
    {
      id: 's-exo',
      titre: `🎯 EXERCICES-TYPES`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-carte',
          titre: `Carte des situations`,
          headers: [`Niveau`, `Situation`, `Comment la reconnaître`, `Exercice-Type`],
          rows: [
            [`🟢 BASE`, `Limite directe par croissance comparée`, `$\\dfrac{\\ln x}{x}$ ou $\\dfrac{e^x}{x}$ en $+\\infty$`, `Type 1`],
            [`🟡 MOYEN`, `Limite d'un produit en $0^+$`, `$x\\ln x$ près de zéro`, `Type 2`],
            [`🔴 BAC`, `Lever une FI dans une étude de fonction`, `$x - \\ln x$, $x e^{-x}$ mixés`, `Type 3`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Limite par croissance comparée.** Calcule $\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{\\ln x}{x}$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Forme $\\dfrac{\\infty}{\\infty}$ avec $\\ln x$ au-dessus d'une puissance : croissance comparée directe ($\\alpha = 1$).` },
            { name: `Étape 1`, contenu: `On reconnaît la limite de référence $\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{\\ln x}{x^\\alpha} = 0$ avec $\\alpha = 1$.` },
            { name: `Étape 2`, contenu: `Donc $\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{\\ln x}{x} = 0$.` },
          ],
          reponse: `$\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{\\ln x}{x} = 0$.`,
          conseil: `Le piéton ($\\ln x$) ne peut pas suivre le gbaka ($x$) : leur rapport s'écrase vers $0$. C'est un résultat à citer tel quel, sans calcul.`,
          piege: `Ne réponds jamais « $\\dfrac{\\infty}{\\infty} = 1$ ». Une forme indéterminée se lève par un résultat de référence, jamais par une simplification hâtive.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Par croissance comparée, $\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{\\ln x}{x} = 0$ (la puissance l'emporte sur le logarithme).

*[Barème : reconnaissance de la FI : 1 pt · citation du résultat : 1 pt · conclusion : 1 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Le produit $x\\ln x$ en $0^+$.** Calcule $\\displaystyle\\lim_{x\\to 0^+} x\\ln x$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Forme $0 \\times (-\\infty)$ : c'est la limite de référence en $0^+$.` },
            { name: `Étape 1`, contenu: `En $0^+$, $x \\to 0$ et $\\ln x \\to -\\infty$ : forme indéterminée $0 \\times \\infty$.` },
            { name: `Étape 2`, contenu: `Or la croissance comparée à l'origine donne $\\displaystyle\\lim_{x\\to 0^+} x^\\alpha\\ln x = 0$ avec $\\alpha = 1$.` },
          ],
          reponse: `$\\displaystyle\\lim_{x\\to 0^+} x\\ln x = 0$.`,
          conseil: `À l'origine comme à l'infini, la puissance domine le logarithme. C'est un piège classique : beaucoup pensent que $\\ln x$ « gagne » parce qu'il file vers l'infini, mais non.`,
          piege: `N'écris jamais $\\displaystyle\\lim_{x\\to 0^+} x\\ln x = -\\infty$. La puissance $x$ écrase le logarithme à l'origine : la limite est $0$.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `En $0^+$, $x\\ln x$ est une forme indéterminée $0 \\times (-\\infty)$. Par croissance comparée à l'origine, $\\displaystyle\\lim_{x\\to 0^+} x\\ln x = 0$.

*[Barème : forme indéterminée identifiée : 1,5 pt · résultat de référence : 1,5 pt · conclusion : 1 pt — Total : 4 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 3 — Lever une FI dans une étude.** Soit $f(x) = x e^{-x}$ sur $\\mathbb{R}$. Calcule $\\displaystyle\\lim_{x\\to+\\infty} f(x)$, puis $\\displaystyle\\lim_{x\\to-\\infty} f(x)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `En $+\\infty$ : forme $\\infty \\times 0$. En $-\\infty$ : $(-\\infty) \\times (+\\infty)$. On réécrit pour faire apparaître les croissances comparées.` },
            { name: `Étape 1 (en $+\\infty$)`, contenu: `$f(x) = x e^{-x} = \\dfrac{x}{e^x}$. Par croissance comparée, $\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{x}{e^x} = 0$. Donc $\\displaystyle\\lim_{x\\to+\\infty} f(x) = 0$.` },
            { name: `Étape 2 (en $-\\infty$)`, contenu: `Posons $X = -x \\to +\\infty$. Alors $f(x) = -X e^{X}$, et comme $X e^X \\to +\\infty$, on a $f(x) \\to -\\infty$.` },
          ],
          reponse: `$\\displaystyle\\lim_{x\\to+\\infty} x e^{-x} = 0$ et $\\displaystyle\\lim_{x\\to-\\infty} x e^{-x} = -\\infty$.`,
          conseil: `Pour une limite avec $e^{-x}$ en $+\\infty$, réécris en $\\dfrac{\\cdots}{e^x}$ : l'avion repasse au dénominateur et écrase tout. Et en $-\\infty$, le changement $X = -x$ ramène à un cas connu.`,
          piege: `En $+\\infty$, ne conclus pas « $\\infty \\times 0 = 0$ » sans justification : c'est la croissance comparée $\\dfrac{x}{e^x} \\to 0$ qui donne le résultat, et il faut la citer.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite`,
          contenu: `En $+\\infty$ : $f(x) = \\dfrac{x}{e^x}$, et par croissance comparée $\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{x}{e^x} = 0$, donc $\\displaystyle\\lim_{x\\to+\\infty} f(x) = 0$. En $-\\infty$ : avec $X = -x \\to +\\infty$, $f(x) = -X e^{X} \\to -\\infty$ car $\\displaystyle\\lim_{X\\to+\\infty} X e^{X} = +\\infty$.

*[Barème : limite en $+\\infty$ (réécriture + croissance comparée) : 2,5 pts · limite en $-\\infty$ (changement de variable) : 2,5 pts — Total : 5 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Cite le bon résultat de référence. Réponses finales seulement.

- **Exercice 1.** $\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{e^x}{x^2}$. *(Réponse : $+\\infty$, l'exponentielle domine la puissance.)*
- **Exercice 2.** $\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{\\ln x}{\\sqrt{x}}$. *(Réponse : $0$, croissance comparée avec $\\alpha = \\tfrac{1}{2}$.)*
- **Exercice 3.** $\\displaystyle\\lim_{x\\to 0^+} \\sqrt{x}\\,\\ln x$. *(Réponse : $0$, la puissance gagne à l'origine.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m6',
          titre: `À retenir`,
          contenu: [
            `Hiérarchie absolue à l'infini : $e^x \\gg x^\\alpha \\gg \\ln x$ — l'exponentielle gagne, le logarithme perd.`,
            `📘 Vocabulaire officiel : croissance comparée, terme dominant, forme indéterminée, limite par domination.`,
            `Résultats clés : $\\dfrac{e^x}{x^\\alpha} \\to +\\infty$, $\\dfrac{\\ln x}{x^\\alpha} \\to 0$, $x^\\alpha\\ln x \\to 0$ en $0^+$, $x e^x \\to 0$ en $-\\infty$.`,
            `Limites de taux en $0$ : $\\dfrac{\\ln(1+x)}{x} \\to 1$ et $\\dfrac{e^x - 1}{x} \\to 1$.`,
            `Pour lever une FI : identifie le terme dominant, réécris, cite le résultat de référence.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m6',
          titre: `Fil rouge`,
          contenu: `Champion(ne), tu as bouclé toute la mécanique du logarithme et de l'exponentielle, jusqu'au choc des titans. C'est maintenant l'heure de mettre tout ça à l'épreuve d'un vrai sujet d'examen. Direction la Salle d'Entraînement : dix exercices façon BAC ivoirien, où chaque outil du tome va être convoqué.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m6',
          titre: `Auto-évaluation — Module 6`,
          contenu: [
            `Je classe $\\ln x$, $x^\\alpha$ et $e^x$ selon leur vitesse à l'infini.`,
            `J'emploie le vocabulaire officiel (croissance comparée, terme dominant, forme indéterminée).`,
            `Je lève une forme indéterminée $\\dfrac{\\infty}{\\infty}$ ou $0 \\times \\infty$ en citant le bon résultat.`,
            `Je sais que $x\\ln x \\to 0$ en $0^+$ (la puissance gagne à l'origine).`,
            `Je connais les limites de taux $\\dfrac{\\ln(1+x)}{x} \\to 1$ et $\\dfrac{e^x-1}{x} \\to 1$.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m6',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Le choc des titans est maîtrisé. Direction la Salle d'Entraînement.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 3.`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : la course du Stade FHB.`,
          ],
        },
      ],
    },
  ],
};
