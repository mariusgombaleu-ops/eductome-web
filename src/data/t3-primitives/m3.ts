import { Chapitre } from '../../types/course';

export const chapitreM3: Chapitre = {
  id: 't3-m3',
  titre: `Module 3 — L'Intégrale Définie et la Valeur Moyenne`,
  duree: 28,
  niveau: 'MOYEN',
  xpGain: 30,
  objectifs: [
    `Calculer la valeur exacte d'une intégrale définie à l'aide d'une primitive`,
    `Énoncer la linéarité, la relation de Chasles et l'ordre avec le vocabulaire officiel`,
    `Déterminer le signe et construire un encadrement solide d'une intégrale`,
    `Calculer et interpréter la valeur moyenne d'une fonction continue`,
    `Comprendre pourquoi la constante $+\\,C$ disparaît dans une intégrale définie`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, dans les Modules 1 et 2, je trouvais une primitive avec toujours un $+\\,C$ qui traîne. Mais au BAC, on me demande souvent « la valeur exacte »… un seul nombre. Comment je passe d'une famille de fonctions à un nombre précis ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Voilà la grande bascule du tome, Champion(ne) ! Dès qu'on fixe **deux bornes** $a$ et $b$, on ne cherche plus une fonction : on calcule une **accumulation totale**, un nombre. Et le plus beau, c'est que ta constante $+\\,C$ va s'effacer toute seule. On appelle ça l'intégrale définie.`,
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
          contenu: `Imagine que tu remplis un grand bidon à un robinet de cour, à Yopougon. Le débit n'est pas constant : parfois l'eau coule fort, parfois elle faiblit quand le voisin ouvre son robinet. À chaque instant $t$, le débit, c'est notre fonction $f(t)$.

Maintenant je te pose la vraie question : *« Entre l'instant $a$ où tu as ouvert et l'instant $b$ où tu as fermé, quelle quantité totale d'eau est entrée dans le bidon ? »*

Tu ne peux pas répondre avec le débit d'un seul instant. Tu dois **accumuler** tous les petits filets d'eau, seconde après seconde, du début à la fin. Cette quantité totale accumulée entre $a$ et $b$, c'est exactement l'intégrale définie, qu'on note avec le grand « S » allongé : $\\displaystyle\\int_a^b f(t)\\,dt$.

Et la constante $C$ ? Elle représentait le niveau d'eau **déjà présent** au départ. Comme on mesure seulement ce qui est entré entre $a$ et $b$, ce niveau initial se soustrait de lui-même. *La constante disparaît parce qu'on regarde une variation, pas un niveau absolu.*`,
        },
        {
          type: 'figure',
          id: 'fig-m3-1',
          src: '/images/t3/fig_M3_1.png',
          legende: `Quand $f \\ge 0$ et $a \\le b$, l'intégrale mesure l'aire accumulée sous la courbe.`,
          alt: `Quand $f \\ge 0$ et $a \\le b$, l'intégrale mesure l'aire accumulée sous la courbe.`,
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
          contenu: `Traduisons le remplissage du bidon en langage mathématique :

- Le débit à l'instant $t$ → la fonction $f(t)$.
- Le moment d'ouverture et de fermeture → les bornes $a$ et $b$.
- L'eau totale accumulée → l'intégrale $\\displaystyle\\int_a^b f(t)\\,dt$.
- Le niveau déjà présent au départ → la constante qui s'annule.`,
        },
        {
          type: 'table',
          id: 'tbl5',
          headers: [`Scène du robinet`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Le débit instantané`, `$f(t)$`, `La fonction qu'on accumule.`],
            [`Ouverture et fermeture`, `$a$ et $b$`, `Les bornes d'intégration.`],
            [`L'eau totale entrée`, `$\\displaystyle\\int_a^b f(t)\\,dt$`, `Un nombre réel, pas une fonction.`],
            [`Passer par la primitive`, `$F(b) - F(a)$`, `Le théorème fondamental du calcul.`],
            [`Le niveau initial`, `$C$`, `Présent en $a$ et en $b$, il se soustrait.`],
          ],
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
          contenu: `Champion(ne), tu as l'image du bidon. Ta copie, elle, exige les énoncés exacts du programme.

**Définition formelle.** Soit $f$ une fonction continue sur un intervalle $I$ et $F$ **une** primitive de $f$ sur $I$. Pour tous réels $a$ et $b$ de $I$ :
$$\\int_a^b f(t)\\,dt = F(b) - F(a) = \\big[\\,F(t)\\,\\big]_a^b.$$
Ce nombre ne dépend pas de la primitive choisie, car la constante $C$ s'élimine dans la différence $F(b) - F(a)$.

**Linéarité (propriété officielle).** Pour toutes fonctions $f$ et $g$ continues sur $[a\\ ;\\ b]$ et tous réels $\\alpha$ et $\\beta$ :
$$\\int_a^b \\big(\\alpha f(t) + \\beta g(t)\\big)\\,dt = \\alpha\\int_a^b f(t)\\,dt + \\beta\\int_a^b g(t)\\,dt.$$

**En langage courant.** L'intégrale d'une combinaison est la combinaison des intégrales : on a le droit de séparer une somme et de sortir les coefficients constants.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Intégrale définie de $a$ à $b$** — le nombre $\\int_a^b f(t)\\,dt$, pas une fonction.
- **Bornes d'intégration** — $a$ (borne inférieure) et $b$ (borne supérieure).
- **Linéarité de l'intégrale** — séparation des sommes et sortie des constantes $\\alpha, \\beta$.
- **Relation de Chasles** — découpage $\\int_a^c = \\int_a^b + \\int_b^c$.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Avant tout calcul, le correcteur attend la phrase *« $f$ est continue sur $[a\\ ;\\ b]$, donc $\\int_a^b f(t)\\,dt = [F(t)]_a^b = F(b) - F(a)$ »*. C'est la justification qui ouvre tous les points du barème.`,
        },
        {
          type: 'figure',
          id: 'fig-m3-2',
          src: '/images/t3/fig_M3_2.png',
          legende: `Découper l'intervalle revient à additionner les aires : c'est la relation de Chasles.`,
          alt: `Découper l'intervalle revient à additionner les aires : c'est la relation de Chasles.`,
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
          titre: `Règle d'Or — Le théorème fondamental`,
          contenu: `Si $f$ est continue sur $[a\\ ;\\ b]$ et $F$ une primitive de $f$, alors
$$\\int_a^b f(t)\\,dt = \\big[\\,F(t)\\,\\big]_a^b = F(b) - F(a).$$

**Relation de Chasles.** Pour $f$ continue sur un intervalle contenant $a$, $b$, $c$ :
$$\\int_a^b f(t)\\,dt + \\int_b^c f(t)\\,dt = \\int_a^c f(t)\\,dt, \\qquad \\int_b^a f(t)\\,dt = -\\int_a^b f(t)\\,dt.$$

**Ordre et positivité (avec $a \\le b$).**
- Si $f(t) \\ge 0$ pour tout $t \\in [a\\ ;\\ b]$, alors $\\displaystyle\\int_a^b f(t)\\,dt \\ge 0$.
- Inégalité de la moyenne : si $m \\le f(t) \\le M$ sur $[a\\ ;\\ b]$, alors $m(b-a) \\le \\displaystyle\\int_a^b f(t)\\,dt \\le M(b-a)$.

**Valeur moyenne.** La valeur moyenne de $f$ continue sur $[a\\ ;\\ b]$ (avec $a \\neq b$) est
$$\\bar{f} = \\dfrac{1}{b-a}\\int_a^b f(t)\\,dt.$$`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `L'intégrale est un **nombre**, pas une aire. Elle ne coïncide avec l'aire sous la courbe que si $f \\ge 0$ et $a \\le b$. Si $f$ change de signe, les zones sous l'axe comptent en négatif.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Ne calcule jamais $\\int_a^b$ en inversant les bornes par étourderie : $\\int_b^a = -\\int_a^b$. Et entoure toujours le bloc $F(a)$ de parenthèses avant de soustraire.`,
        },
      ],
    },
    {
      id: 's5',
      titre: `⑤ LA DESCENTE`,
      blocs: [
        {
          type: 'text',
          id: 'b12',
          titre: `Le Diagnostic`,
          contenu: `« **Calculer la valeur exacte** » → cherche une primitive, pose les crochets. « **Encadrer** » ou « **justifier le signe** » sans calculer → utilise l'ordre / l'inégalité de la moyenne. « **Valeur moyenne** » → calcule l'intégrale puis divise par $(b-a)$. « **Somme de deux intégrales** » → pense Chasles.`,
        },
        {
          type: 'table',
          id: 'tbl13',
          titre: `L'Arbre de décision`,
          headers: [`Si tu vois…`, `Ce que tu fais`],
          rows: [
            [`« Calculer $\\int_a^b f$ »`, `Primitive $F$, puis $F(b) - F(a)$.`],
            [`« Une combinaison $\\alpha f + \\beta g$ »`, `Linéarité : séparer et sortir $\\alpha, \\beta$.`],
            [`« Somme de deux intégrales accolées »`, `Chasles : $\\int_a^b + \\int_b^c = \\int_a^c$.`],
            [`« Démontrer $I \\ge 0$ sans intégrer »`, `Étudier le signe de $f$ sur $[a\\ ;\\ b]$ et vérifier $a \\le b$.`],
            [`« Encadrer $I$ »`, `Encadrer $f$ par $m$ et $M$, multiplier par $(b-a)$.`],
            [`« Valeur moyenne »`, `Calculer $I$, puis $\\bar f = \\dfrac{1}{b-a}I$.`],
          ],
        },
        {
          type: 'text',
          id: 'b14',
          titre: `La Procédure (calcul direct)`,
          contenu: `**Étape 1.** Trouver une primitive $F$ de la fonction sous l'intégrale (Module 1 ou 2). Pas besoin du $+\\,C$.

**Étape 2.** Poser les crochets : $\\big[\\,F(t)\\,\\big]_a^b$.

**Étape 3.** Calculer $F(b)$, puis $F(a)$ entre parenthèses, puis la différence $F(b) - F(a)$, en simplifiant fractions et logarithmes.`,
        },
        {
          type: 'tip',
          id: 'tip15',
          titre: `La Vérification`,
          contenu: `- Si $f \\ge 0$ sur $[a\\ ;\\ b]$ et que ton résultat est négatif : tu as inversé les bornes ou raté un signe. Reprends l'étape 3.
- Garde le résultat sous forme exacte (avec $e$, $\\ln$), pas en décimal, sauf demande explicite.`,
        },
        {
          type: 'figure',
          id: 'fig-m3-3',
          src: '/images/t3/fig_M3_3.png',
          legende: `La valeur moyenne $\\bar f$ est la hauteur du rectangle de même aire que sous la courbe.`,
          alt: `La valeur moyenne $\\bar f$ est la hauteur du rectangle de même aire que sous la courbe.`,
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
            [`🟢 BASE`, `Calcul direct polynôme / $\\frac{1}{x}$`, `« Calculer $\\int_a^b$ » d'une somme simple`, `Maintenant à toi`],
            [`🟡 MOYEN`, `Linéarité sur une combinaison`, `fonction du type $\\alpha f + \\beta g$`, `Type 2`],
            [`🔴 BAC`, `Intégrale + valeur moyenne avec $e^{2t}$`, `deux questions enchaînées`, `Type 1`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 1 — Intégrale et valeur moyenne** *(modèle dérivé d'annales ivoiriennes)*. Soit $f$ continue sur $\\mathbb{R}$ par $f(t) = e^{2t} - t$. (1) Calculer $I = \\displaystyle\\int_0^1 \\big(e^{2t} - t\\big)\\,dt$. (2) Déterminer la valeur moyenne $\\bar f$ de $f$ sur $[0\\ ;\\ 1]$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Q1 : calcul direct, primitive composée $e^{2t}$. Q2 : application de la formule de la valeur moyenne.` },
            { name: `Étape 1`, contenu: `Primitive : une primitive de $e^{2t}$ est $\\dfrac{1}{2}e^{2t}$ ; de $-t$, c'est $-\\dfrac{1}{2}t^2$. Donc $F(t) = \\dfrac{1}{2}e^{2t} - \\dfrac{1}{2}t^2$.` },
            { name: `Étape 2`, contenu: `$I = \\Big[\\dfrac{1}{2}e^{2t} - \\dfrac{1}{2}t^2\\Big]_0^1$.` },
            { name: `Étape 3`, contenu: `$F(1) = \\dfrac{1}{2}e^2 - \\dfrac{1}{2}$ ; $F(0) = \\dfrac{1}{2}$. Donc $I = \\Big(\\dfrac{1}{2}e^2 - \\dfrac{1}{2}\\Big) - \\dfrac{1}{2} = \\dfrac{e^2 - 2}{2}$. Et $\\bar f = \\dfrac{1}{1}\\,I = \\dfrac{e^2 - 2}{2}$.` },
          ],
          reponse: `$I = \\dfrac{e^2 - 2}{2}$ et $\\bar f = \\dfrac{e^2 - 2}{2}$.`,
          conseil: `Mets toujours $F(a)$ entre parenthèses avant de soustraire : c'est le seul moyen de ne pas se tromper de signe.`,
          piege: `$e^0 = 1$, pas $0$. Et on garde $\\dfrac{e^2-2}{2}$, jamais une valeur décimale.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `**(1)** $f$ est continue sur $\\mathbb{R}$. Une primitive est $F(t) = \\dfrac{1}{2}e^{2t} - \\dfrac{1}{2}t^2$. Donc
$$I = \\Big[\\dfrac{1}{2}e^{2t} - \\dfrac{1}{2}t^2\\Big]_0^1 = \\Big(\\dfrac{1}{2}e^2 - \\dfrac{1}{2}\\Big) - \\Big(\\dfrac{1}{2} - 0\\Big) = \\dfrac{e^2 - 2}{2}.$$
**(2)** $\\bar f = \\dfrac{1}{1-0}\\displaystyle\\int_0^1 f(t)\\,dt = \\dfrac{e^2 - 2}{2}.$

*[Barème : primitive : 2 pts · calcul exact de $I$ : 2 pts · valeur moyenne : 1 pt — Total : 5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — La linéarité en action.** Calculer $K = \\displaystyle\\int_0^1 \\big(2e^{x} + 3x^2\\big)\\,dx$ en utilisant explicitement la linéarité de l'intégrale.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Combinaison $\\alpha f + \\beta g$ avec $\\alpha = 2$, $\\beta = 3$ → on sépare et on sort les constantes.` },
            { name: `Étape 1 (linéarité)`, contenu: `$K = 2\\displaystyle\\int_0^1 e^{x}\\,dx + 3\\displaystyle\\int_0^1 x^2\\,dx$.` },
            { name: `Étape 2`, contenu: `$\\displaystyle\\int_0^1 e^x\\,dx = \\big[e^x\\big]_0^1 = e - 1$ ; $\\displaystyle\\int_0^1 x^2\\,dx = \\Big[\\dfrac{x^3}{3}\\Big]_0^1 = \\dfrac{1}{3}$.` },
            { name: `Étape 3`, contenu: `$K = 2(e - 1) + 3\\times\\dfrac{1}{3} = 2e - 2 + 1 = 2e - 1$.` },
          ],
          reponse: `$K = 2e - 1$.`,
          conseil: `Annonce la linéarité par écrit (« par linéarité de l'intégrale ») : c'est un point de barème à lui tout seul.`,
          piege: `Les constantes $2$ et $3$ sortent ; la variable, jamais.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Les fonctions $x \\mapsto e^x$ et $x \\mapsto x^2$ sont continues sur $[0\\ ;\\ 1]$. Par linéarité de l'intégrale :
$$K = 2\\int_0^1 e^x\\,dx + 3\\int_0^1 x^2\\,dx = 2\\big[e^x\\big]_0^1 + 3\\Big[\\dfrac{x^3}{3}\\Big]_0^1 = 2(e-1) + 1 = 2e - 1.$$

*[Barème : énoncé de la linéarité : 1,5 pt · les deux intégrales : 2 pts · résultat final : 1,5 pt — Total : 5 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Pose tes crochets proprement. Réponses finales seulement.

- **Exercice 1.** $J = \\displaystyle\\int_1^2 \\Big(3x^2 - \\dfrac{1}{x}\\Big)\\,dx$. *(Réponse : $J = 7 - \\ln 2$.)*
- **Exercice 2.** Valeur moyenne de $g(x) = 3x^2$ sur $[0\\ ;\\ 2]$. *(Réponse : $\\bar g = 4$.)*
- **Exercice 3.** En utilisant Chasles, $\\displaystyle\\int_0^1 f + \\int_1^3 f$ vaut quelle intégrale unique ? *(Réponse : $\\displaystyle\\int_0^3 f$.)*`,
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
            `$\\displaystyle\\int_a^b f(t)\\,dt = F(b) - F(a)$ : un nombre, obtenu via une primitive ; le $+\\,C$ s'efface.`,
            `📘 Vocabulaire officiel : intégrale définie, bornes, linéarité, relation de Chasles, valeur moyenne.`,
            `Linéarité : on sépare les sommes et on sort les constantes $\\alpha, \\beta$.`,
            `L'intégrale = aire seulement si $f \\ge 0$ et $a \\le b$.`,
            `Valeur moyenne : $\\bar f = \\dfrac{1}{b-a}\\displaystyle\\int_a^b f$.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m3',
          titre: `Fil rouge`,
          contenu: `Tu sais intégrer une somme, une forme composée. Mais que fais-tu devant un **produit** de deux fonctions de natures différentes, comme $\\displaystyle\\int x\\,e^{x}\\,dx$ ? Aucune ligne du tableau ne marche. Il te faut une arme spéciale : l'Intégration Par Parties. C'est tout le **Module 4**.`,
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
            `Je sais calculer une intégrale définie via les crochets d'une primitive.`,
            `J'énonce correctement la linéarité et la relation de Chasles avec le vocabulaire officiel.`,
            `Je sais justifier le signe d'une intégrale et construire un encadrement.`,
            `Je sais calculer et interpréter une valeur moyenne.`,
            `Je comprends pourquoi la constante $+\\,C$ disparaît dans une intégrale définie.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m3',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Le cœur du tome est acquis. Direction Module 4.`,
            `🟡 **3 ou 4** → Relis la brique 📘 (linéarité, Chasles) et refais l'Exercice-Type 2.`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : le bidon qu'on remplit entre $a$ et $b$.`,
          ],
        },
      ],
    },
  ],
};
