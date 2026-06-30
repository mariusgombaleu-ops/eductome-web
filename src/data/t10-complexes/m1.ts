import { Chapitre } from '../../types/course';

export const chapitreM1: Chapitre = {
  id: 't10-m1',
  titre: `Module 1 — La Forme Algébrique`,
  duree: 24,
  niveau: 'BASE',
  xpGain: 25,
  objectifs: [
    `Maîtriser l'unité imaginaire i et le cycle de ses puissances`,
    `Reconnaître partie réelle et partie imaginaire, et placer l'affixe dans le plan`,
    `Déterminer le conjugué et calculer le module`,
    `Additionner, multiplier et diviser sous forme algébrique grâce au conjugué`,
    `Résoudre une égalité complexe par identification`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, on m'a toujours juré qu'un carré ne pouvait jamais être négatif. Et là on me pose $i^2 = -1$. Comment je fais confiance à un truc pareil ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Tu as raison de tiquer, Champion(ne) — c'est exactement la bonne question. La vérité, c'est que $i$ n'est pas un nombre réel : il vit dans un nouvel étage, à côté des réels. On a inventé cet étage pour résoudre des équations qui n'avaient aucune solution avant. Une fois la convention $i^2 = -1$ posée, tout le reste se calcule normalement, avec tes règles habituelles. On va apprivoiser cet objet ensemble, tranquillement.`,
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
          contenu: `Imagine que tu gères un portefeuille un peu spécial, comme un commerçant d'Adjamé qui tient deux caisses séparées. Dans la première caisse, tu as tes vrais billets, tes bons vieux FCFA : c'est ta partie réelle. Dans la seconde, tu gardes une monnaie virtuelle, purement imaginaire, réservée à des transactions très particulières : c'est ta partie imaginaire.

Quand tu fais le bilan de ta journée, tu écris un seul nombre qui résume tout : « $3$ FCFA et $2$ jetons imaginaires ». Mais jamais, au grand jamais, tu ne mélanges les deux caisses : tu n'additionnes pas $3$ billets et $2$ jetons pour faire « $5$ ». Chacun reste à sa place. C'est exactement ça, un nombre complexe sous forme algébrique : $z = 3 + 2i$, avec la partie réelle $3$ d'un côté et la partie imaginaire $2$ de l'autre.`,
        },
        {
          type: 'figure',
          id: 'fig-m1-1',
          src: '/images/t10/fig_M1_1.png',
          legende: `Le point $M(3 ; 2)$ a pour affixe $z = 3 + 2i$ : partie réelle en abscisse, partie imaginaire en ordonnée.`,
          alt: `Un plan complexe avec l'axe réel et l'axe imaginaire, le point M d'affixe 3 + 2i et ses projetés sur les deux axes.`,
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
          contenu: `On traduit le portefeuille en langage mathématique, brique par brique.

- Les billets FCFA → la partie réelle $a = \\mathrm{Re}(z)$
- Les jetons imaginaires → la partie imaginaire $b = \\mathrm{Im}(z)$
- Le bilan complet → le nombre $z = a + ib$
- La caisse rangée dans le plan → le point $M(a ; b)$ d'affixe $z$
- Le portefeuille « miroir » (jetons inversés) → le conjugué $\\overline{z} = a - ib$`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène du portefeuille`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Les billets FCFA`, `$a = \\mathrm{Re}(z)$`, `La partie réelle`],
            [`Les jetons imaginaires`, `$b = \\mathrm{Im}(z)$`, `La partie imaginaire`],
            [`Le bilan complet`, `$z = a + ib$`, `La forme algébrique`],
            [`La caisse placée dans le plan`, `$M(a ; b)$`, `Le point image d'affixe $z$`],
            [`La longueur jusqu'au coffre central`, `$|z| = \\sqrt{a^2 + b^2}$`, `Le module (distance à $O$)`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `Maintenant que chaque morceau a son symbole, on peut écrire les définitions rigoureuses.`,
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
          contenu: `Champion(ne), tu as l'image des deux caisses. Ta copie, elle, doit parler le langage exact des maths.

**Définition formelle.** Tout nombre complexe $z$ s'écrit de façon unique $z = a + ib$, où $a$ et $b$ sont des nombres réels et $i$ vérifie $i^2 = -1$. Le réel $a$ est la **partie réelle** $\\mathrm{Re}(z)$, le réel $b$ est la **partie imaginaire** $\\mathrm{Im}(z)$. Le **conjugué** de $z$ est $\\overline{z} = a - ib$ et le **module** de $z$ est $|z| = \\sqrt{a^2 + b^2}$.

**En langage courant.** Un complexe, c'est deux réels rangés ensemble sans se mélanger ; le conjugué, c'est le même nombre avec la partie imaginaire au signe opposé.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Partie réelle / partie imaginaire** — les deux réels $a$ et $b$ (attention : $b$ est un réel, pas $ib$).
- **Imaginaire pur** — un complexe dont la partie réelle est nulle, du type $z = ib$.
- **Conjugué** $\\overline{z}$ — le symétrique de $z$ par rapport à l'axe réel.
- **Module** $|z|$ — la distance du point d'affixe $z$ à l'origine.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `La propriété reine, celle que le correcteur adore voir : $z \\cdot \\overline{z} = a^2 + b^2 = |z|^2$. C'est elle qui rend tout réel au dénominateur.`,
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
          titre: `Règle d'Or — Les opérations sous forme algébrique`,
          contenu: `Pour $z = a + ib$ et $z' = a' + ib'$ :
$$z + z' = (a + a') + i(b + b') \\qquad z \\cdot z' = (aa' - bb') + i(ab' + a'b)$$
$$\\overline{z} = a - ib \\qquad |z| = \\sqrt{a^2 + b^2} \\qquad z \\cdot \\overline{z} = a^2 + b^2 = |z|^2$$

Pour diviser, on multiplie le haut et le bas par le conjugué du dénominateur :
$$\\dfrac{z}{z'} = \\dfrac{z \\cdot \\overline{z'}}{z' \\cdot \\overline{z'}} = \\dfrac{z \\cdot \\overline{z'}}{|z'|^2}$$`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Dès que tu écris un $i^2$ sur ton brouillon, barre-le tout de suite et remplace-le par $-1$. C'est le secret pour ne jamais te tromper de signe.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Ne dis jamais $i^2 = 1$. L'erreur la plus fréquente des copies de Terminale D, c'est d'oublier le signe moins en développant. On grave, Champion(ne) : $i^2 = -1$, toujours.`,
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
          contenu: `Quand on te donne une expression remplie de $i$, ton réflexe est d'isoler la partie réelle d'un côté, la partie imaginaire de l'autre, et de bannir tout $i$ coincé au dénominateur d'une fraction.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Si l'opération est...`, `Alors ton réflexe EDUCTOME`],
          rows: [
            [`Une addition ou une soustraction`, `Regrouper les parties réelles ensemble, les parties imaginaires ensemble.`],
            [`Une multiplication`, `Développer par double distributivité, puis remplacer $i^2$ par $-1$.`],
            [`Une division $\\dfrac{z_1}{z_2}$`, `Multiplier le haut ET le bas par le conjugué $\\overline{z_2}$ du dénominateur.`],
            [`Une grande puissance de $i$ (ex. $i^{2026}$)`, `Diviser l'exposant par $4$ : le reste donne la puissance finale.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure (mettre un quotient sous forme algébrique)`,
          contenu: `**Étape 1.** Repère le dénominateur $z_2 = c + id$ et écris son conjugué $\\overline{z_2} = c - id$ au brouillon.

**Étape 2.** Multiplie en haut et en bas par ce conjugué. Le dénominateur devient réel : $(c + id)(c - id) = c^2 + d^2$.

**Étape 3.** Développe calmement le numérateur, remplace les $i^2$ par $-1$, puis sépare en deux morceaux pour obtenir la belle forme $a + ib$.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `Ton résultat final doit toujours ressembler à un simple $a + ib$. S'il reste une fraction avec un $i$ au dénominateur, c'est que le travail n'est pas fini.`,
        },
        {
          type: 'figure',
          id: 'fig-m1-2',
          src: '/images/t10/fig_M1_2.png',
          legende: `Le conjugué $\\overline{z}$ est le symétrique de $z$ par rapport à l'axe réel.`,
          alt: `Un plan complexe avec le point z = 2 + 3i et son conjugué 2 - 3i, symétriques par rapport à l'axe réel.`,
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
            [`🟢 BASE`, `Calcul d'un produit, d'un conjugué, d'un module`, `« Donne la forme algébrique de... »`, `Type 1`],
            [`🟡 MOYEN`, `Quotient à mettre sous forme algébrique`, `Une fraction avec un $i$ au dénominateur`, `Type 1`],
            [`🔴 BAC`, `Égalité complexe par identification`, `« Trouve les réels $x$ et $y$ tels que... »`, `Type 2`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Opérations et division** *(BASE / MOYEN)*. On pose $z_1 = 2 + 3i$ et $z_2 = 1 + 2i$. **1.** Calcule $z_1 \\cdot \\overline{z_2}$ sous forme algébrique. **2.** Mets $Z = \\dfrac{3 + i}{1 + 2i}$ sous forme algébrique.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Un produit (on développe, on remplace $i^2$) puis un quotient (on multiplie par le conjugué du dénominateur).` },
            { name: `Étape 1`, contenu: `$\\overline{z_2} = 1 - 2i$, donc $z_1 \\cdot \\overline{z_2} = (2 + 3i)(1 - 2i) = 2 - 4i + 3i - 6i^2$. Comme $i^2 = -1$ : $= 2 - i + 6 = 8 - i$.` },
            { name: `Étape 2`, contenu: `On multiplie haut et bas par $\\overline{1 + 2i} = 1 - 2i$.` },
          ],
          reponse: `$z_1 \\cdot \\overline{z_2} = 8 - i$ et $Z = \\dfrac{(3 + i)(1 - 2i)}{1^2 + 2^2} = \\dfrac{3 - 5i + 2}{5} = \\dfrac{5 - 5i}{5} = 1 - i$.`,
          conseil: `Écris le conjugué du dénominateur au brouillon avant même de toucher au numérateur : tu gagnes en clarté.`,
          piege: `Le conjugué de $1 + 2i$ est $1 - 2i$, pas $-1 - 2i$. On change seulement le signe de la partie imaginaire.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$$z_1 \\cdot \\overline{z_2} = (2 + 3i)(1 - 2i) = 2 - 4i + 3i - 6i^2 = (2 + 6) + (-4 + 3)i = 8 - i$$
$$Z = \\dfrac{3 + i}{1 + 2i} = \\dfrac{(3 + i)(1 - 2i)}{(1 + 2i)(1 - 2i)} = \\dfrac{3 - 6i + i - 2i^2}{1^2 + 2^2} = \\dfrac{3 - 5i + 2}{5} = \\dfrac{5 - 5i}{5} = 1 - i$$

*[Barème type BAC : produit = 1 pt — multiplication par le conjugué = 0,5 pt — forme algébrique finale = 1 pt — Total : 2,5 pts]*`,
        },
        {
          type: 'figure',
          id: 'fig-m1-3',
          src: '/images/t10/fig_M1_3.png',
          legende: `Le module $|z| = \\sqrt{3^2 + 4^2} = 5$, c'est la longueur $OM$ : Pythagore dans le plan.`,
          alt: `Un plan complexe avec le point z = 3 + 4i, le segment OM de longueur 5 et le triangle rectangle de côtés 3 et 4.`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 2 — Égalité complexe par identification** *(BAC)*. Détermine les réels $x$ et $y$ tels que $(x + iy)(2 - i) = 4 - 7i$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Une égalité entre deux complexes : on développe à gauche, on sépare réel et imaginaire, puis on identifie membre à membre.` },
            { name: `Étape 1`, contenu: `On développe : $(x + iy)(2 - i) = 2x - ix + 2iy - i^2 y = (2x + y) + i(-x + 2y)$.` },
            { name: `Étape 2`, contenu: `Deux complexes sont égaux si et seulement si leurs parties réelles sont égales ET leurs parties imaginaires sont égales. D'où le système.` },
          ],
          reponse: `Le système $\\begin{cases} 2x + y = 4 \\\\ -x + 2y = -7 \\end{cases}$ donne $x = 3$ et $y = -2$ : le couple solution est $(x ; y) = (3 ; -2)$.`,
          conseil: `Range bien : tout ce qui n'a pas de $i$ d'un côté, tout ce qui porte un $i$ de l'autre, avant d'identifier.`,
          piege: `N'oublie pas que $-i^2 y = +y$ : ce terme rejoint la partie réelle, pas l'imaginaire.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `On développe le membre de gauche :
$$(x + iy)(2 - i) = (2x + y) + i(-x + 2y)$$
L'égalité $(2x + y) + i(-x + 2y) = 4 - 7i$ donne le système :
$$\\begin{cases} 2x + y = 4 \\\\ -x + 2y = -7 \\end{cases}$$
De la première ligne, $y = 4 - 2x$. En reportant : $-x + 2(4 - 2x) = -7$, soit $-5x + 8 = -7$, donc $x = 3$. Alors $y = 4 - 6 = -2$.
La solution est le couple $(x ; y) = (3 ; -2)$.

*[Barème type BAC : développement = 1 pt — système = 1 pt — résolution = 1 pt — Total : 3 pts]*`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-a',
          pf: `Attends Grand Frère, si je dois diviser par $1 + 2i$, je multiplie direct en haut et en bas par $1 - 2i$ ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-b',
          gf: `Exactement, Champion(ne) ! C'est le geste qui te sauve à chaque fois. Le bas devient $1^2 + 2^2 = 5$, un vrai réel bien propre, et il ne te reste plus qu'à ranger le haut. Limpide comme l'eau de roche.`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Barre tes $i^2$ dès que tu les vois. Réponses finales seulement.

- **Exercice 1.** Calcule $(2 - 5i) + (1 + 3i)$ et $(2 - 5i)(1 + 3i)$. *(Réponse : $3 - 2i$ ; $17 + i$.)*
- **Exercice 2.** Donne le conjugué et le module de $z = 2 - 5i$. *(Réponse : $\\overline{z} = 2 + 5i$ ; $|z| = \\sqrt{29}$.)*
- **Exercice 3.** Calcule $i^{2026}$. *(Réponse : $2026 = 4\\times 506 + 2$, donc $i^{2026} = i^2 = -1$.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m1',
          titre: `À retenir`,
          contenu: [
            `Un complexe, c'est **deux caisses séparées** : $z = a + ib$, avec la convention fondatrice $i^2 = -1$.`,
            `📘 Vocabulaire officiel : partie réelle, partie imaginaire, imaginaire pur, conjugué, module.`,
            `Le geste clé : **multiplier par le conjugué** pour chasser un $i$ du dénominateur.`,
            `Une égalité complexe se résout en **identifiant** parties réelles et parties imaginaires.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m1',
          titre: `Fil rouge`,
          contenu: `Tu sais maintenant calculer avec tes portefeuilles. Mais si je te demande $(1 + i)^{100}$, vas-tu vraiment développer cent fois ? Au Module 2, on sort la boussole d'Abidjan : une distance, un angle, et les puissances géantes deviennent un jeu d'enfant.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m1',
          titre: `Auto-évaluation — Module 1`,
          contenu: [
            `Je sais développer une expression complexe et remplacer $i^2$ par $-1$.`,
            `J'emploie le vocabulaire officiel : partie réelle, partie imaginaire, conjugué, module.`,
            `Je sais déterminer le conjugué $\\overline{z}$ et calculer le module $|z|$.`,
            `Je sais mettre un quotient sous forme algébrique en multipliant par le conjugué.`,
            `Je sais résoudre une égalité complexe par identification.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m1',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Direction le Module 2, on sort la boussole.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et la procédure de division.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel, l'image des deux caisses.`,
          ],
        },
      ],
    },
  ],
};
