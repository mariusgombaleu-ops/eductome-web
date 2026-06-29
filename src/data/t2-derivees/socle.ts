import { Chapitre } from '../../types/course';

export const chapitreSocle: Chapitre = {
  id: 't2-socle',
  titre: `Le Socle — Les 7 Outils à Réveiller`,
  duree: 12,
  niveau: 'BASE',
  xpGain: 15,
  gratuit: true,
  objectifs: [
    `Réveiller les réflexes algébriques de Première indispensables à la dérivation`,
    `Manier le taux de variation, les identités remarquables et l'expression conjuguée`,
    `Maîtriser les règles des puissances, les opérations sur les quotients et la factorisation de $h$`,
    `Dresser un tableau de signes propre pour préparer l'étude des variations`,
  ],
  sections: [
    {
      id: 's1',
      titre: `Avant d'attaquer, on affûte la machette`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, on peut pas attaquer directement les modules ? Les rappels de Première, je les connais déjà.`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Je comprends l'impatience, Champion(ne). Mais voici la vérité : beaucoup d'élèves butent sur les dérivées non pas parce que le concept est difficile, mais parce qu'un réflexe algébrique de base a rouillé. La dérivation, c'est avant tout du calcul propre : développer, factoriser, simplifier une fraction, manier une racine. On réveille sept petits outils — pas un de plus — et après ça, tout le Tome 2 glisse tout seul. Dix minutes maintenant, c'est des points sécurisés au BAC. Assieds-toi, on affûte la machette.`,
        },
      ],
    },
    {
      id: 's-o1',
      titre: `🔧 Outil 1 — Le Taux de Variation`,
      blocs: [
        {
          type: 'rule',
          id: 'rule-o1',
          titre: `La Règle`,
          contenu: `Le **taux de variation** d'une fonction $f$ entre un point fixe $a$ et un point décalé $a+h$ est la fraction :

$$\\dfrac{f(a+h) - f(a)}{h}$$

C'est le bloc fondateur de tout le tome : la dérivée n'est rien d'autre que la limite de ce taux quand $h$ tend vers $0$.`,
        },
        {
          type: 'text',
          id: 'b-o1',
          titre: `📝 Exemple chiffré`,
          contenu: `Soit $f(x) = x^2$. Calculons son taux de variation en $a$ :

$$\\dfrac{f(a+h) - f(a)}{h} = \\dfrac{(a+h)^2 - a^2}{h} = \\dfrac{2ah + h^2}{h} = \\dfrac{h(2a + h)}{h} = 2a + h$$

**Où tu vas l'utiliser.** Module 1 — pour définir la vitesse instantanée d'une courbe en un point précis.`,
        },
        {
          type: 'warning',
          id: 'warn-o1',
          titre: `Piège à éviter`,
          contenu: `Si tu ne simplifies pas le $h$ du dénominateur avant de passer à la limite, le haut donne $0$ et le bas donne $0$ : tu retombes dans la forme indéterminée $\\dfrac{0}{0}$ vue au Tome 1. Faire disparaître le $h$ du bas est le passage obligé.`,
        },
      ],
    },
    {
      id: 's-o2',
      titre: `🔧 Outil 2 — Les Identités Remarquables`,
      blocs: [
        {
          type: 'rule',
          id: 'rule-o2',
          titre: `Règle d'Or — Les deux développements clés`,
          contenu: `$$(a+h)^2 = a^2 + 2ah + h^2$$

$$(a+h)^3 = a^3 + 3a^2h + 3ah^2 + h^3$$`,
        },
        {
          type: 'text',
          id: 'b-o2',
          titre: `📝 Exemple chiffré`,
          contenu: `Cherchons le nombre dérivé de $f(x) = x^3$ par définition :

$$\\dfrac{(a+h)^3 - a^3}{h} = \\dfrac{3a^2h + 3ah^2 + h^3}{h} = \\dfrac{h(3a^2 + 3ah + h^2)}{h} = 3a^2 + 3ah + h^2$$

Quand $h \\to 0$, il reste $3a^2$ : tu viens de démontrer toi-même que $(x^3)' = 3x^2$.

**Où tu vas l'utiliser.** Modules 1 et 2 — pour développer $f(a+h)$ et extraire le $h$ en facteur.`,
        },
        {
          type: 'warning',
          id: 'warn-o2',
          titre: `Piège à éviter`,
          contenu: `Dès que tu calcules $f(a+h) - f(a)$, le terme constant ($a^2$ ou $a^3$) s'annule avec $f(a)$. S'il te reste un nombre sans $h$ après développement, c'est une erreur de signe dans la soustraction.`,
        },
      ],
    },
    {
      id: 's-o3',
      titre: `🔧 Outil 3 — L'Expression Conjuguée`,
      blocs: [
        {
          type: 'rule',
          id: 'rule-o3',
          titre: `Règle d'Or`,
          contenu: `Pour faire disparaître une racine carrée d'un numérateur, on multiplie le haut **et** le bas par l'expression conjuguée. La conjuguée de $\\sqrt{A} - \\sqrt{B}$ est $\\sqrt{A} + \\sqrt{B}$, et :

$$(\\sqrt{A} - \\sqrt{B})(\\sqrt{A} + \\sqrt{B}) = A - B$$`,
        },
        {
          type: 'text',
          id: 'b-o3',
          titre: `📝 Exemple chiffré`,
          contenu: `Soit $g(x) = \\sqrt{x}$. Le taux en $a > 0$ se nettoie ainsi :

$$\\dfrac{\\sqrt{a+h} - \\sqrt{a}}{h} = \\dfrac{(\\sqrt{a+h} - \\sqrt{a})(\\sqrt{a+h} + \\sqrt{a})}{h(\\sqrt{a+h} + \\sqrt{a})} = \\dfrac{h}{h(\\sqrt{a+h} + \\sqrt{a})} = \\dfrac{1}{\\sqrt{a+h} + \\sqrt{a}}$$

**Où tu vas l'utiliser.** Modules 1 et 3 — dès qu'une fonction contient $\\sqrt{x}$, c'est le réflexe immédiat, hérité du Tome 1.`,
        },
        {
          type: 'warning',
          id: 'warn-o3',
          titre: `Piège à éviter`,
          contenu: `La conjuguée de $\\sqrt{a+h} - \\sqrt{a}$ est $\\sqrt{a+h} + \\sqrt{a}$, pas $\\sqrt{a} - \\sqrt{a+h}$. Un signe inversé et plus rien ne s'annule.`,
        },
      ],
    },
    {
      id: 's-o4',
      titre: `🔧 Outil 4 — Puissances et Exposants`,
      blocs: [
        {
          type: 'rule',
          id: 'rule-o4',
          titre: `Règle d'Or — Les règles à connaître par cœur`,
          contenu: `Pour tous réels $x \\neq 0$ et entiers $m$, $n$ :

$$x^m \\times x^n = x^{m+n} \\qquad \\dfrac{x^m}{x^n} = x^{m-n} \\qquad (x^m)^n = x^{mn} \\qquad \\dfrac{1}{x^n} = x^{-n} \\qquad \\sqrt{x} = x^{\\frac{1}{2}}$$`,
        },
        {
          type: 'text',
          id: 'b-o4',
          titre: `📝 Exemple chiffré`,
          contenu: `Avant de dériver $f(x) = \\dfrac{1}{x^3}$, on la réécrit en puissance : $f(x) = x^{-3}$. La formule $(x^n)' = n\\,x^{n-1}$ donne alors directement $f'(x) = -3x^{-4} = -\\dfrac{3}{x^4}$.

**Où tu vas l'utiliser.** Module 2 — pour reconnaître les fonctions usuelles ($\\dfrac{1}{x}$, $\\sqrt{x}$, $x^n$) sous leur forme « puissance » et appliquer la bonne dérivée.`,
        },
        {
          type: 'warning',
          id: 'warn-o4',
          titre: `Piège à éviter`,
          contenu: `$\\dfrac{1}{x^n} = x^{-n}$ avec un exposant **négatif**. Oublier le signe moins fausse toute la dérivée qui suit.`,
        },
      ],
    },
    {
      id: 's-o5',
      titre: `🔧 Outil 5 — Les Opérations sur les Quotients`,
      blocs: [
        {
          type: 'rule',
          id: 'rule-o5',
          titre: `La Règle`,
          contenu: `Additionner ou soustraire deux fractions exige un dénominateur commun :

$$\\dfrac{A}{B} - \\dfrac{C}{D} = \\dfrac{AD - CB}{BD} \\qquad (B \\neq 0,\\ D \\neq 0)$$`,
        },
        {
          type: 'text',
          id: 'b-o5',
          titre: `📝 Exemple chiffré`,
          contenu: `Le taux de variation de $f(x) = \\dfrac{1}{x}$ se met au même dénominateur avant de simplifier $h$ :

$$\\dfrac{\\frac{1}{a+h} - \\frac{1}{a}}{h} = \\dfrac{1}{h} \\times \\dfrac{a - (a+h)}{a(a+h)} = \\dfrac{1}{h} \\times \\dfrac{-h}{a(a+h)} = \\dfrac{-1}{a(a+h)}$$

Quand $h \\to 0$ : $f'(a) = -\\dfrac{1}{a^2}$.

**Où tu vas l'utiliser.** Module 3 — la règle du quotient $\\left(\\dfrac{u}{v}\\right)'$ et toutes les fonctions rationnelles.`,
        },
        {
          type: 'warning',
          id: 'warn-o5',
          titre: `Piège à éviter`,
          contenu: `Au numérateur, $a - (a+h)$ : la parenthèse change le signe de $h$. Beaucoup oublient et écrivent $a - a + h$ — le résultat part faux.`,
        },
      ],
    },
    {
      id: 's-o6',
      titre: `🔧 Outil 6 — La Factorisation (mettre $h$ en facteur)`,
      blocs: [
        {
          type: 'rule',
          id: 'rule-o6',
          titre: `La Méthode`,
          contenu: `Après développement, le numérateur d'un taux de variation contient toujours $h$ dans **chacun** de ses termes. On le met en facteur pour le simplifier avec le dénominateur :

$$\\alpha h + \\beta h^2 + \\gamma h^3 = h\\,(\\alpha + \\beta h + \\gamma h^2)$$`,
        },
        {
          type: 'text',
          id: 'b-o6',
          titre: `📝 Exemple chiffré`,
          contenu: `$$\\dfrac{2h^2 + 7h}{h} = \\dfrac{h(2h + 7)}{h} = 2h + 7$$

**Où tu vas l'utiliser.** Modules 1 et 2 — c'est le geste qui détruit l'indétermination $\\dfrac{0}{0}$ avant le passage à la limite.`,
        },
        {
          type: 'warning',
          id: 'warn-o6',
          titre: `Piège à éviter`,
          contenu: `Ne passe **jamais** à la limite avant d'avoir simplifié $h$. Écrire $\\displaystyle\\lim_{h \\to 0} \\dfrac{2h^2 + 7h}{h}$ directement, c'est foncer dans le mur du $\\dfrac{0}{0}$.`,
        },
      ],
    },
    {
      id: 's-o7',
      titre: `🔧 Outil 7 — Le Tableau de Signes`,
      blocs: [
        {
          type: 'rule',
          id: 'rule-o7',
          titre: `La Méthode`,
          contenu: `Pour lire le signe d'une expression du premier degré $\\alpha x + \\beta$ : on cherche la racine ($\\alpha x + \\beta = 0$), puis on applique la règle « signe de $-\\alpha$ avant la racine, signe de $\\alpha$ après ».`,
        },
        {
          type: 'text',
          id: 'b-o7',
          titre: `📝 Exemple chiffré`,
          contenu: `Soit $f'(x) = 2x - 6$. La racine : $2x - 6 = 0 \\iff x = 3$. Le coefficient $2 > 0$ donc :

- Pour tout $x \\in\\ ]-\\infty\\ ;\\ 3[$ : $f'(x) < 0$ → $f$ est strictement décroissante.
- Pour tout $x \\in\\ ]3\\ ;\\ +\\infty[$ : $f'(x) > 0$ → $f$ est strictement croissante.

**Où tu vas l'utiliser.** Module 4 — le signe de la dérivée donne le sens de variation : $f'(x) > 0$ → la courbe monte ; $f'(x) < 0$ → elle descend.`,
        },
        {
          type: 'warning',
          id: 'warn-o7',
          titre: `Piège à éviter`,
          contenu: `Toujours factoriser $f'(x)$ au maximum **avant** de dresser le tableau. Une expression non factorisée, c'est une racine qu'on risque de rater.`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `🚀 Récap du Socle — Où tu vas utiliser ces 7 outils`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-recap',
          headers: [`Outil réveillé ici`, `Tu en auras besoin dans…`],
          rows: [
            [`① Taux de variation : $\\dfrac{f(a+h) - f(a)}{h}$`, `Module 1 — vitesse instantanée d'une courbe`],
            [`② Identités $(a+h)^2$ et $(a+h)^3$`, `Modules 1 et 2 — développer pour extraire $h$`],
            [`③ Expression conjuguée`, `Modules 1 et 3 — nettoyer les racines carrées`],
            [`④ Règles des puissances et exposants`, `Module 2 — reconnaître les fonctions usuelles`],
            [`⑤ Opérations sur les quotients`, `Module 3 — règle du quotient, fonctions rationnelles`],
            [`⑥ Factorisation de $h$`, `Modules 1 et 2 — détruire l'indétermination $\\dfrac{0}{0}$`],
            [`⑦ Tableau de signes`, `Module 4 — sens de variation à partir de $f'(x)$`],
          ],
        },
        {
          type: 'dialogue',
          id: 'dlg-fin1',
          pf: `OK Grand Frère, j'ai révisé les sept outils. C'est vrai que la conjuguée et les puissances, je les avais presque oubliés. Je suis prêt pour la suite ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-fin2',
          gf: `Là, Champion(ne), ta machette est bien affûtée. Tu as toutes les armes de base pour attaquer les dérivées sans te faire coincer bêtement. Maintenant, on passe aux choses sérieuses : dans le Module 1, on pose la première brique — le nombre dérivé. C'est quoi cette « vitesse instantanée » ? Avec ton socle en béton armé, tu vas voir, ça va glisser. On va gâter le coin. Faut pas gnan !`,
        },
      ],
    },
  ],
};
