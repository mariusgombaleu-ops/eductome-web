import { Chapitre } from '../../types/course';

export const chapitreM4: Chapitre = {
  id: 't5-m4',
  titre: `Module 4 — Logarithme décimal & base a`,
  duree: 25,
  niveau: 'MOYEN',
  xpGain: 30,
  objectifs: [
    `Définir le logarithme décimal $\\log$ à partir du logarithme népérien`,
    `Calculer un logarithme décimal et l'utiliser dans un calcul de pH en chimie`,
    `Énoncer la relation entre $\\log$, $\\ln$ et la base $a$ avec le vocabulaire officiel attendu au BAC`,
    `Écrire une exponentielle de base $a$ sous la forme $a^x = e^{x\\ln a}$ et la dériver`,
    `Convertir entre logarithme népérien et logarithme décimal`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, en cours de physique-chimie, le prof écrit $\\mathrm{pH} = -\\log[\\mathrm{H_3O^+}]$ avec un « log » sans le petit $n$ de $\\ln$. Et il parle de « base 10 ». C'est encore un autre logarithme ? Je vais devoir tout réapprendre ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Faut pas gnan, Champion(ne) ! Bonne nouvelle : ce n'est pas une nouvelle bête à apprivoiser. Le logarithme décimal, c'est juste ton logarithme népérien habillé pour la chimie. C'est le même outil, divisé par une constante. Une fois que tu connais le lien $\\log x = \\dfrac{\\ln x}{\\ln 10}$, tout devient limpide. Et pareil pour les puissances de base $a$ : on les ramène toutes à notre couple $\\ln$ / $\\exp$. Aujourd'hui, on range ces cousines à leur place.`,
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
          contenu: `Imagine le laborantin du CHU de Treichville qui mesure l'acidité de différentes solutions. Le jus de bissap est très acide, l'eau du robinet est neutre, le savon est basique. Le problème, c'est que la concentration en ions varie d'un produit à l'autre par des facteurs gigantesques : un million de fois, dix millions de fois. Écrire ces nombres en entier remplirait toute la paillasse.

Alors les chimistes ont eu une idée astucieuse : au lieu de manipuler ces nombres monstrueux, ils comptent simplement **le nombre de zéros**, c'est-à-dire la puissance de $10$. C'est l'échelle du pH, qui range tout entre $0$ et $14$. Chaque fois qu'on descend d'une unité de pH, l'acidité est multipliée par $10$.

Cette échelle qui compresse des écarts énormes en petits nombres maniables, c'est exactement le logarithme décimal. *Le logarithme décimal compte les puissances de $10$ : il transforme « un million » en simplement « $6$ ».*`,
        },
        {
          type: 'figure',
          id: 'fig-m4-1',
          src: '/images/t5/fig_M4_1.png',
          legende: `Une unité de pH en moins = acidité multipliée par 10 : voilà la compression logarithmique.`,
          alt: `Échelle du pH de 0 à 14 reliée aux concentrations en puissances de 10.`,
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
          contenu: `Traduisons l'échelle du chimiste en symboles.

- **Compter les puissances de 10** → la fonction $\\log$ (logarithme décimal).
- **Le lien avec notre outil habituel** → $\\log x = \\dfrac{\\ln x}{\\ln 10}$.
- **L'acidité, concentration en ions** → un nombre $[\\mathrm{H_3O^+}]$ strictement positif.
- **Le pH lu sur l'échelle** → $\\mathrm{pH} = -\\log[\\mathrm{H_3O^+}]$.`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène du laboratoire`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Compter les puissances de 10`, `$\\log x = \\dfrac{\\ln x}{\\ln 10}$`, `Le log décimal est le log népérien divisé par $\\ln 10$.`],
            [`Le repère neutre`, `$\\log 1 = 0$ et $\\log 10 = 1$`, `Les valeurs de référence de l'échelle.`],
            [`Une puissance de 10`, `$\\log(10^n) = n$`, `Le log décimal lit directement l'exposant.`],
            [`L'acidité mesurée`, `$\\mathrm{pH} = -\\log[\\mathrm{H_3O^+}]$`, `La formule de chimie reliée au log.`],
            [`Une puissance de base $a$`, `$a^x = e^{x\\ln a}$`, `Toute base se ramène à l'exponentielle népérienne.`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `Ces relations méritent leur cadre officiel. Habillons-les dans le langage du BAC.`,
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
          contenu: `Champion(ne), tu as l'image de l'échelle du pH. La copie attend les définitions exactes.

**Définition formelle.** On appelle **logarithme décimal** la fonction notée $\\log$, définie sur $\\left]\\,0\\ ;\\ +\\infty\\,\\right[$ par $\\log x = \\dfrac{\\ln x}{\\ln 10}$. Pour $a > 0$ et $a \\neq 1$, l'**exponentielle de base $a$** est définie sur $\\mathbb{R}$ par $a^x = e^{x\\ln a}$. Le logarithme décimal vérifie les mêmes propriétés algébriques que $\\ln$ : $\\log(xy) = \\log x + \\log y$, et $\\log(10^n) = n$.

**En langage courant.** Le logarithme décimal compte les puissances de $10$ ; c'est le logarithme népérien ramené à l'échelle du chiffre $10$.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Logarithme décimal** — la fonction $\\log$, de base $10$, avec $\\log 10 = 1$.
- **Relation de changement de base** — $\\log x = \\dfrac{\\ln x}{\\ln 10}$.
- **Exponentielle de base $a$** — $a^x = e^{x\\ln a}$, valable pour $a > 0$.
- **pH** — l'application $\\mathrm{pH} = -\\log[\\mathrm{H_3O^+}]$ en chimie.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend, pour tout logarithme décimal, sa réécriture : *« Par définition, $\\log x = \\dfrac{\\ln x}{\\ln 10}$. »* C'est le pont qui ramène tout calcul à des outils connus.`,
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
          titre: `Règle d'Or — Logarithme décimal et base a`,
          contenu: `Pour $x > 0$ et $a > 0$ :
$$\\log x = \\dfrac{\\ln x}{\\ln 10} \\qquad a^x = e^{x\\ln a} \\qquad \\log_a x = \\dfrac{\\ln x}{\\ln a}$$`,
        },
        {
          type: 'text',
          id: 'b10',
          contenu: `**Dérivées.**
$$(\\log x)' = \\dfrac{1}{x\\ln 10} \\qquad \\left(a^x\\right)' = a^x \\ln a$$

**Valeurs.** $\\log 1 = 0$, $\\log 10 = 1$, $\\log(10^n) = n$. Et $a^0 = 1$, $a^1 = a$.`,
        },
        {
          type: 'tip',
          id: 'tip11',
          titre: `Conseil du Grand Frère`,
          contenu: `Dès qu'un $\\log$ ou un $a^x$ apparaît, ton premier réflexe est de le réécrire avec $\\ln$ et $\\exp$. Tu retombes immédiatement sur des outils que tu maîtrises déjà — pas besoin de mémoriser des formules nouvelles.`,
        },
        {
          type: 'warning',
          id: 'warn12',
          titre: `Piège à éviter`,
          contenu: `Ne confonds pas $\\log$ (base $10$) et $\\ln$ (base $e$). En maths, $\\log$ tout court désigne souvent le décimal ; vérifie la convention de ton énoncé. Et $a^x$ n'est pas $x^a$ : dans $a^x$, c'est l'exposant qui varie.`,
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
          contenu: `Repère la cousine : « pH / chimie / base 10 » → logarithme décimal, réécris en $\\ln / \\ln 10$ ; « $a^x$ ou puissance de base $a$ » → réécris en $e^{x\\ln a}$ ; « dériver $a^x$ » → $a^x \\ln a$.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Si tu vois…`, `Ce que tu fais`],
          rows: [
            [`$\\log x$ (base 10)`, `Réécris $\\log x = \\dfrac{\\ln x}{\\ln 10}$.`],
            [`Un calcul de pH`, `Applique $\\mathrm{pH} = -\\log[\\mathrm{H_3O^+}]$.`],
            [`$a^x$ à transformer ou dériver`, `Écris $a^x = e^{x\\ln a}$, puis dérive en $a^x\\ln a$.`],
            [`$\\log(10^n)$`, `Lis directement l'exposant : $\\log(10^n) = n$.`],
            [`Une équation $\\log x = c$`, `Reviens à $\\ln x = c\\ln 10$, puis à $x$.`],
          ],
        },
        {
          type: 'text',
          id: 'b14',
          titre: `La Procédure (calculer un pH)`,
          contenu: `**Étape 1.** Relève la concentration $[\\mathrm{H_3O^+}]$, écrite en puissance de $10$ si possible.

**Étape 2.** Applique la formule $\\mathrm{pH} = -\\log[\\mathrm{H_3O^+}]$.

**Étape 3.** Utilise $\\log(10^n) = n$ pour conclure sans calculatrice quand la concentration est une puissance de $10$.

**Étape 4.** Conclus en précisant si la solution est acide ($\\mathrm{pH} < 7$), neutre ou basique.`,
        },
        {
          type: 'tip',
          id: 'tip15',
          titre: `La Vérification`,
          contenu: `- **Ordre de grandeur** : un pH doit rester entre $0$ et $14$ dans les cas usuels.
- **Cohérence** : plus la concentration en ions est forte, plus le pH est petit (solution acide).`,
        },
        {
          type: 'figure',
          id: 'fig-m4-2',
          src: '/images/t5/fig_M4_2.png',
          legende: `Même forme, même zéro en $x=1$ : $\\log$ n'est qu'un $\\ln$ comprimé par le facteur $1/\\ln 10$.`,
          alt: `Courbes de ln et log décimal, proportionnelles et passant par le point (1 ; 0).`,
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
            [`🟢 BASE`, `Calculer un logarithme décimal`, `$\\log$ d'une puissance de 10`, `Type 1`],
            [`🟡 MOYEN`, `Calculer un pH`, `Une concentration en ions donnée`, `Type 2`],
            [`🔴 BAC`, `Transformer et dériver $a^x$`, `Une puissance de base $a$ variable`, `Type 3`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Logarithme décimal d'une puissance de 10.** Calcule $A = \\log 1000 + \\log 0{,}01$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Tout s'exprime en puissances de $10$ : on utilise $\\log(10^n) = n$.` },
            { name: `Étape 1`, contenu: `$1000 = 10^3$ donc $\\log 1000 = 3$ ; $0{,}01 = 10^{-2}$ donc $\\log 0{,}01 = -2$.` },
            { name: `Étape 2`, contenu: `$A = 3 + (-2) = 1$.` },
          ],
          reponse: `$A = 1$.`,
          conseil: `Repère d'abord la puissance de $10$ : l'exposant donne directement le logarithme décimal, sans calculatrice.`,
          piege: `$0{,}01 = 10^{-2}$, pas $10^{2}$ : l'exposant est négatif pour un nombre inférieur à $1$.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Comme $1000 = 10^3$ et $0{,}01 = 10^{-2}$, on a $\\log 1000 = 3$ et $\\log 0{,}01 = -2$. Donc $A = 3 - 2 = 1$.

*[Barème : puissances de 10 : 1,5 pt · application de $\\log(10^n)=n$ : 1 pt · conclusion : 0,5 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Calcul de pH.** Une solution a une concentration $[\\mathrm{H_3O^+}] = 10^{-3}\\ \\mathrm{mol/L}$. Calcule son pH et précise sa nature.`,
          etapes: [
            { name: `Diagnostic`, contenu: `On applique la définition $\\mathrm{pH} = -\\log[\\mathrm{H_3O^+}]$ avec une concentration en puissance de $10$.` },
            { name: `Étape 1`, contenu: `$\\mathrm{pH} = -\\log(10^{-3})$.` },
            { name: `Étape 2`, contenu: `Or $\\log(10^{-3}) = -3$, donc $\\mathrm{pH} = -(-3) = 3$.` },
          ],
          reponse: `$\\mathrm{pH} = 3 < 7$ : la solution est **acide**.`,
          conseil: `Quand la concentration est une puissance de $10$, le pH se lit en un éclair : c'est l'opposé de l'exposant.`,
          piege: `N'oublie pas le signe « moins » de la définition : sans lui, tu obtiendrais un pH négatif, ce qui n'a aucun sens ici.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Par définition, $\\mathrm{pH} = -\\log[\\mathrm{H_3O^+}] = -\\log(10^{-3})$. Comme $\\log(10^{-3}) = -3$, on obtient $\\mathrm{pH} = 3$. Puisque $3 < 7$, la solution est acide.

*[Barème : application de la formule : 1,5 pt · calcul du log : 1,5 pt · nature de la solution : 1 pt — Total : 4 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 3 — Transformer et dériver $a^x$.** Soit $f(x) = 2^x$ définie sur $\\mathbb{R}$. Écris $f(x)$ à l'aide de l'exponentielle népérienne, puis calcule $f'(x)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Puissance de base $a = 2$ : on utilise $a^x = e^{x\\ln a}$, puis on dérive comme une fonction $e^u$.` },
            { name: `Étape 1`, contenu: `$f(x) = 2^x = e^{x\\ln 2}$.` },
            { name: `Étape 2`, contenu: `On pose $u(x) = x\\ln 2$, d'où $u'(x) = \\ln 2$, et $f'(x) = u'(x)\\,e^{u(x)} = \\ln 2 \\times e^{x\\ln 2}$.` },
            { name: `Étape 3`, contenu: `En revenant à la base $2$ : $f'(x) = 2^x \\ln 2$.` },
          ],
          reponse: `$f'(x) = 2^x \\ln 2 > 0$ : $f$ est strictement croissante sur $\\mathbb{R}$.`,
          conseil: `La réécriture $a^x = e^{x\\ln a}$ ramène toute base à un terrain connu. Tu n'as jamais besoin d'une « formule spéciale » : tout passe par $\\exp$.`,
          piege: `$(2^x)' \\neq x\\,2^{x-1}$ : cette formule vaut pour $x^a$ (exposant fixe), pas pour $a^x$ (exposant variable). Ici c'est $2^x\\ln 2$.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Par définition, $f(x) = 2^x = e^{x\\ln 2}$. En posant $u(x) = x\\ln 2$, on a $u'(x) = \\ln 2$, donc $f'(x) = \\ln 2\\,e^{x\\ln 2} = 2^x\\ln 2$. Comme $2^x > 0$ et $\\ln 2 > 0$, $f'(x) > 0$ : $f$ est strictement croissante sur $\\mathbb{R}$.

*[Barème : réécriture $e^{x\\ln 2}$ : 1,5 pt · dérivation : 2 pts · retour à la base + signe : 1,5 pt — Total : 5 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Réécris avec $\\ln$ et $\\exp$ avant de calculer. Réponses finales seulement.

- **Exercice 1.** Calcule $\\log 100\\,000$. *(Réponse : $100\\,000 = 10^5$, donc $\\log 100\\,000 = 5$.)*
- **Exercice 2.** Une solution a $[\\mathrm{H_3O^+}] = 10^{-7}\\ \\mathrm{mol/L}$. Quel est son pH ? *(Réponse : $\\mathrm{pH} = 7$, solution neutre.)*
- **Exercice 3.** Écris $3^x$ avec l'exponentielle népérienne. *(Réponse : $3^x = e^{x\\ln 3}$.)*`,
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
            `Le logarithme décimal est défini par $\\log x = \\dfrac{\\ln x}{\\ln 10}$ : c'est un $\\ln$ ramené à la base $10$.`,
            `📘 Vocabulaire officiel : logarithme décimal, relation de changement de base, exponentielle de base $a$, pH.`,
            `En chimie, $\\mathrm{pH} = -\\log[\\mathrm{H_3O^+}]$ ; $\\mathrm{pH} < 7$ acide, $= 7$ neutre, $> 7$ basique.`,
            `Toute exponentielle de base $a$ s'écrit $a^x = e^{x\\ln a}$, et se dérive en $a^x\\ln a$.`,
            `Réflexe constant : ramener $\\log$ et $a^x$ à $\\ln$ et $\\exp$, les outils déjà maîtrisés.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m4',
          titre: `Fil rouge`,
          contenu: `Tu sais maintenant ranger toutes les cousines logarithmes et exponentielles. Mais une question de forme reste : que se passe-t-il quand l'exposant lui-même est un nombre réel quelconque, comme $x^{\\sqrt{2}}$ ou $x^{0{,}7}$ ? Comment dériver ces **puissances à exposant réel** et dessiner leurs courbes ? Direction le Module 5 : les puissances réelles.`,
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
            `Je définis le logarithme décimal par $\\log x = \\dfrac{\\ln x}{\\ln 10}$.`,
            `J'emploie le vocabulaire officiel (logarithme décimal, changement de base, exponentielle de base $a$, pH).`,
            `Je calcule un logarithme décimal d'une puissance de $10$ sans calculatrice.`,
            `Je convertis un logarithme décimal en rapport de logarithmes népériens pour un calcul de pH.`,
            `J'écris une exponentielle de base $a$ sous la forme $e^{x\\ln a}$ et je la dérive.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m4',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Les cousines sont rangées. Direction Module 5.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 3.`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : l'échelle du pH au laboratoire.`,
          ],
        },
      ],
    },
  ],
};
