import { Chapitre } from '../../types/course';

export const chapitreM5: Chapitre = {
  id: 't3-m5',
  titre: `Module 5 — Le Calcul d'Aires par l'Intégration`,
  duree: 30,
  niveau: 'BAC',
  xpGain: 35,
  objectifs: [
    `Calculer l'aire exacte entre une courbe et l'axe des abscisses`,
    `Rédiger un calcul d'aire avec le vocabulaire officiel (u.a., position relative, valeur absolue)`,
    `Déterminer l'aire entre deux courbes en étudiant leur position relative`,
    `Gérer un changement de signe avec la valeur absolue et la relation de Chasles`,
    `Convertir un résultat en unités d'aire vers des $\\text{cm}^2$ réels`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, dans le Module 3 tu as dit que l'intégrale, c'est l'aire sous la courbe. Mais si la courbe descend sous l'axe, l'intégrale devient négative… et une surface négative, ça n'existe pas. Comment je fais ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Excellente vigilance, Champion(ne) ! C'est exactement le piège du calcul d'aire. Une aire est toujours positive. L'outil qui te sauve, c'est la valeur absolue $|f(x)|$, plus le tableau de signes. On va voir ça avec un terrain de chez nous.`,
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
          contenu: `Imagine un terrain au village, du côté de Bingerville. Il est bordé en bas par une route bien droite — ce sera notre axe des abscisses — et en haut par une rivière qui serpente : c'est notre courbe $\\mathcal{C}_f$. Tu veux connaître la **superficie exacte** du terrain coincé entre la route et la rivière.

Tant que la rivière reste **au-dessus** de la route, pas de souci : la superficie, c'est l'aire sous la courbe, donc l'intégrale. Mais reste vigilant(e) ! Si la rivière fait une boucle et passe **de l'autre côté** de la route, la courbe descend sous l'axe et $f$ devient négative.

Là, si tu intègres bêtement, le morceau négatif vient se **soustraire** du morceau positif — comme si une parcelle effaçait l'autre. Pour l'empêcher, on enferme la fonction dans une valeur absolue $|f(x)|$ : chaque bande de terrain compte alors **positivement**.

Et le plan a une échelle humaine : si une unité vaut $2\\text{ cm}$ sur chaque axe, le carré de référence — l'**unité d'aire**, notée $1\\,\\text{u.a.}$ — vaut $2\\times 2 = 4\\text{ cm}^2$. *L'intégrale donne l'aire en u.a. ; l'échelle la convertit en cm² réels.*`,
        },
        {
          type: 'figure',
          id: 'fig-m5-1',
          src: '/images/t3/fig_M5_1.png',
          legende: `La superficie du terrain, c'est l'aire sous la rivière entre les deux bornes.`,
          alt: `La superficie du terrain, c'est l'aire sous la rivière entre les deux bornes.`,
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
          contenu: `Traduisons le terrain en langage mathématique :

- La route (le bas du terrain) → l'axe des abscisses ($y = 0$).
- La rivière (le haut) → la courbe $\\mathcal{C}_f$.
- La superficie du terrain → l'aire $\\mathcal{A}$, en unités d'aire.
- La rivière qui passe sous la route → $f(x) < 0$, d'où la valeur absolue.`,
        },
        {
          type: 'table',
          id: 'tbl5',
          headers: [`Scène du terrain`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`La route en bas`, `$y = 0$ (axe des $x$)`, `La frontière basse du terrain.`],
            [`La rivière en haut`, `$\\mathcal{C}_f$`, `La courbe qui délimite le terrain.`],
            [`La superficie`, `$\\mathcal{A} = \\int_a^b |f(x)|\\,dx$`, `L'aire, toujours positive (en u.a.).`],
            [`Le carré de référence`, `$1\\,\\text{u.a.} = OI \\times OJ$`, `Le facteur de conversion vers les cm².`],
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
          contenu: `Champion(ne), l'image du terrain t'a donné l'intuition. La copie attend les formules exactes de l'aire.

**Définition formelle.** Soit $f$ continue sur $[a\\ ;\\ b]$. L'aire $\\mathcal{A}$ de la région délimitée par $\\mathcal{C}_f$, l'axe des abscisses et les droites $x = a$ et $x = b$ est :
$$\\mathcal{A} = \\int_a^b |f(x)|\\,dx \\ \\text{(en u.a.)}.$$
Si $f \\ge 0$ sur $[a\\ ;\\ b]$ : $\\mathcal{A} = \\displaystyle\\int_a^b f(x)\\,dx$. Si $f \\le 0$ : $\\mathcal{A} = \\displaystyle\\int_a^b -f(x)\\,dx$.

**Aire entre deux courbes.** Pour $f$ et $g$ continues sur $[a\\ ;\\ b]$ :
$$\\mathcal{A} = \\int_a^b |f(x) - g(x)|\\,dx \\ \\text{(en u.a.)}.$$

**En langage courant.** On intègre la fonction du haut moins celle du bas, et on convertit en cm² avec l'unité d'aire.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Unité d'aire (u.a.)** — le carré construit sur les unités des deux axes : $1\\,\\text{u.a.} = OI \\times OJ$.
- **Position relative** — laquelle des deux courbes est au-dessus de l'autre sur $[a\\ ;\\ b]$.
- **Tableau de signes** — l'étude obligatoire avant de poser la valeur absolue.
- **Conversion d'échelle** — la multiplication finale pour passer des u.a. aux cm².`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend la phrase *« Sur $[a\\ ;\\ b]$, $f(x) \\ge g(x)$, donc $\\mathcal{A} = \\int_a^b (f(x) - g(x))\\,dx$ »*, suivie de la conversion en cm². Sans l'étude de position, l'aire n'est pas justifiée.`,
        },
        {
          type: 'figure',
          id: 'fig-m5-2',
          src: '/images/t3/fig_M5_2.png',
          legende: `Entre deux courbes : on intègre la différence (haut − bas).`,
          alt: `Entre deux courbes : on intègre la différence (haut − bas).`,
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
          titre: `Règle d'Or — L'aire, c'est l'intégrale de la valeur absolue`,
          contenu: `Aire sous une courbe sur $[a\\ ;\\ b]$ : $\\mathcal{A} = \\displaystyle\\int_a^b |f(x)|\\,dx$ (u.a.).
Aire entre deux courbes : $\\mathcal{A} = \\displaystyle\\int_a^b |f(x) - g(x)|\\,dx$ (u.a.).
Conversion : $\\mathcal{A}_{\\text{cm}^2} = \\mathcal{A}_{\\text{u.a.}} \\times (OI \\times OJ)$.

Avant de poser le moindre crochet, **dresse le tableau de signes**. Si la fonction (ou la différence) change de signe en un point $c$, découpe par Chasles en deux intégrales propres et mets un signe moins devant la zone négative.`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `« Aire entre courbes » ne veut pas dire « toujours $f - g$ » : c'est **la plus haute moins la plus basse**. Si tu n'es pas sûr(e), étudie le signe de $f(x) - g(x)$.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Ne rends jamais une aire négative ou nulle. Si ton résultat est $\\le 0$, tu as oublié un signe moins sur une zone négative ou inversé l'ordre des courbes.`,
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
          contenu: `Une seule courbe + axe → aire $= \\int|f|$. Deux courbes → étudier la position relative $f - g$. Présence d'un changement de signe → Chasles au point d'annulation. Toujours finir par la conversion d'échelle si le repère est gradué en cm.`,
        },
        {
          type: 'table',
          id: 'tbl13',
          titre: `L'Arbre de décision`,
          headers: [`Si tu vois…`, `Analyse du signe`, `Formule`],
          rows: [
            [`Une courbe, $f \\ge 0$ sur $[a\\ ;\\ b]$`, `pas de croisement`, `$\\int_a^b f(x)\\,dx$`],
            [`Une courbe qui change de signe en $c$`, `$f$ s'annule en $c$`, `Chasles : $\\int_a^c |f| + \\int_c^b |f|$`],
            [`Deux courbes $f$ et $g$`, `signe de $f - g$`, `$\\int_a^b (\\text{haut} - \\text{bas})\\,dx$`],
          ],
        },
        {
          type: 'text',
          id: 'b14',
          titre: `La Procédure`,
          contenu: `**Étape 1.** Étudier le signe de $f$ (ou de $f - g$) sur $[a\\ ;\\ b]$.

**Étape 2.** Repérer un éventuel point de coupure $c$ où le signe change.

**Étape 3.** Décomposer par Chasles, en mettant un signe moins devant les zones négatives.

**Étape 4.** Trouver la primitive, calculer le bilan en u.a.

**Étape 5.** Convertir : multiplier par $OI \\times OJ$ pour obtenir les cm².`,
        },
        {
          type: 'tip',
          id: 'tip15',
          titre: `La Vérification`,
          contenu: `- Une aire est strictement positive : un résultat $\\le 0$ signale une erreur de signe.
- Vérifie que tu as bien converti en cm² si le repère est gradué.`,
        },
        {
          type: 'text',
          id: 'b-code',
          titre: `💻 Le Coin du Code — Approcher une aire (rectangles et trapèzes)`,
          contenu: `Quand une primitive est trop difficile à trouver, on peut **approcher** l'aire sous la courbe en la découpant en fines bandes. Deux méthodes au programme de l'algorithmique : les **rectangles** (on remplace chaque bande par un rectangle) et les **trapèzes** (plus précis, on relie les points par des segments).

\`\`\`python
def aire_rectangles(f, a, b, n):
    # n bandes de largeur h ; rectangles "a gauche"
    h = (b - a) / n
    somme = 0.0
    for k in range(n):
        x = a + k * h
        somme += f(x) * h
    return somme

def aire_trapezes(f, a, b, n):
    # n trapezes : moyenne des deux hauteurs de chaque bande
    h = (b - a) / n
    somme = (f(a) + f(b)) / 2
    for k in range(1, n):
        somme += f(a + k * h)
    return somme * h

# Aire sous f(x) = x^2 entre 0 et 1 (valeur exacte 1/3)
f = lambda x: x**2
print(aire_rectangles(f, 0, 1, 1000))  # ~0,3328
print(aire_trapezes(f, 0, 1, 1000))    # ~0,3333
\`\`\`

💬 **Le message du Grand Frère.** Regarde la logique : plus tu prends de bandes ($n$ grand), plus l'approximation colle à la vraie aire $\\dfrac{1}{3}$. C'est exactement l'idée de l'intégrale — une somme de bandes infiniment fines. Les trapèzes collent plus vite que les rectangles : c'est normal, un segment épouse mieux la courbe qu'un sommet plat.`,
        },
        {
          type: 'figure',
          id: 'fig-m5-3',
          src: '/images/t3/fig_M5_3.png',
          legende: `Au point de croisement $c$, on coupe (Chasles) et on compte chaque zone positivement.`,
          alt: `Au point de croisement $c$, on coupe (Chasles) et on compte chaque zone positivement.`,
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
            [`🟢 BASE`, `Courbe positive, aire directe`, `$f \\ge 0$, repère simple`, `Maintenant à toi`],
            [`🟡 MOYEN`, `Aire entre deux courbes`, `deux courbes, position relative`, `Type 2`],
            [`🔴 BAC`, `Changement de signe + conversion`, `$f$ s'annule, repère en cm`, `Type 1`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 1 — Changement de signe + conversion** *(modèle dérivé d'annales ivoiriennes)*. Soit $f(x) = e^x - 1$ continue sur $\\mathbb{R}$, dans un repère orthonormé d'unité graphique $2\\text{ cm}$. Calculer l'aire $\\mathcal{A}$ délimitée par $\\mathcal{C}_f$, l'axe des abscisses et les droites $x = -1$ et $x = 1$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `$f(x) = e^x - 1$ s'annule en $x = 0$ → changement de signe sur $[-1\\ ;\\ 1]$ → Chasles.` },
            { name: `Étape 1 (signe)`, contenu: `$f(x) \\ge 0 \\iff e^x \\ge 1 \\iff x \\ge 0$. Donc $f \\le 0$ sur $[-1\\ ;\\ 0]$ et $f \\ge 0$ sur $[0\\ ;\\ 1]$.` },
            { name: `Étape 2 (Chasles)`, contenu: `$\\mathcal{A} = \\displaystyle\\int_{-1}^{0}(1 - e^x)\\,dx + \\int_{0}^{1}(e^x - 1)\\,dx$.` },
            { name: `Étape 3`, contenu: `Primitive de $e^x - 1$ : $e^x - x$. $\\mathcal{A} = \\big[x - e^x\\big]_{-1}^{0} + \\big[e^x - x\\big]_{0}^{1} = e^{-1} + (e - 2) = e^{-1} + e - 2$ u.a.` },
            { name: `Étape 4 (conversion)`, contenu: `$1\\,\\text{u.a.} = 2\\times 2 = 4\\text{ cm}^2$, donc $\\mathcal{A} = 4\\big(e^{-1} + e - 2\\big) = \\dfrac{4}{e} + 4e - 8\\ \\text{cm}^2$.` },
          ],
          reponse: `$\\mathcal{A} = e^{-1} + e - 2$ u.a. $= \\dfrac{4}{e} + 4e - 8\\ \\text{cm}^2$.`,
          conseil: `Le tableau de signes en tout premier : il commande tout le découpage.`,
          piege: `Sur $[-1\\ ;\\ 0]$, on intègre $-(e^x - 1) = 1 - e^x$, pas $e^x - 1$.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$f$ est continue sur $\\mathbb{R}$. Sur $[-1\\ ;\\ 1]$ : $f(x) \\ge 0 \\iff x \\ge 0$. Donc
$$\\mathcal{A} = \\int_{-1}^{1} |f(x)|\\,dx = \\int_{-1}^{0}(1 - e^x)\\,dx + \\int_{0}^{1}(e^x - 1)\\,dx.$$
$$\\mathcal{A} = \\big[x - e^x\\big]_{-1}^{0} + \\big[e^x - x\\big]_{0}^{1} = e^{-1} + (e - 2) = e^{-1} + e - 2 \\ \\text{u.a.}$$
Comme $1\\,\\text{u.a.} = 2\\text{ cm}\\times 2\\text{ cm} = 4\\text{ cm}^2$ :
$$\\mathcal{A} = 4\\big(e^{-1} + e - 2\\big) = \\dfrac{4}{e} + 4e - 8 \\ \\text{cm}^2.$$

*[Barème : tableau de signes : 1 pt · Chasles : 1,5 pt · crochets : 1,5 pt · conversion : 1 pt — Total : 5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Aire entre deux courbes.** Soit $f(x) = e^x$ et $g(x) = e^{-x}$, repère orthogonal d'unités $3\\text{ cm}$ (abscisses) et $2\\text{ cm}$ (ordonnées). Calculer l'aire $\\mathcal{A}$ entre les deux courbes sur $[0\\ ;\\ \\ln 2]$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Deux courbes → position relative via le signe de $f - g$.` },
            { name: `Étape 1`, contenu: `$f(x) - g(x) = e^x - e^{-x}$. Pour $x \\ge 0$, $e^x \\ge e^{-x}$, donc $f \\ge g$ : la courbe de $f$ est au-dessus.` },
            { name: `Étape 2`, contenu: `$\\mathcal{A} = \\displaystyle\\int_{0}^{\\ln 2}(e^x - e^{-x})\\,dx$.` },
            { name: `Étape 3`, contenu: `Primitive : $e^x + e^{-x}$. $\\mathcal{A} = \\big[e^x + e^{-x}\\big]_{0}^{\\ln 2} = \\big(2 + \\frac{1}{2}\\big) - (1 + 1) = \\dfrac{1}{2}$ u.a.` },
            { name: `Étape 4`, contenu: `$1\\,\\text{u.a.} = 3\\times 2 = 6\\text{ cm}^2$, donc $\\mathcal{A} = \\dfrac{1}{2}\\times 6 = 3\\text{ cm}^2$.` },
          ],
          reponse: `$\\mathcal{A} = \\dfrac{1}{2}$ u.a. $= 3\\text{ cm}^2$.`,
          conseil: `$e^{\\ln 2} = 2$ et $e^{-\\ln 2} = \\dfrac{1}{2}$ : ces deux valeurs débloquent tout le calcul des bornes.`,
          piege: `Le repère est **orthogonal** (unités différentes) : $1\\,\\text{u.a.} = 3\\times 2$, pas $3^2$.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$f$ et $g$ sont continues sur $[0\\ ;\\ \\ln 2]$. Pour tout $x \\ge 0$, $e^x \\ge e^{-x}$, donc $f(x) - g(x) \\ge 0$ :
$$\\mathcal{A} = \\int_{0}^{\\ln 2}(e^x - e^{-x})\\,dx = \\big[e^x + e^{-x}\\big]_{0}^{\\ln 2} = \\Big(2 + \\tfrac{1}{2}\\Big) - 2 = \\dfrac{1}{2}\\ \\text{u.a.}$$
Avec $1\\,\\text{u.a.} = 3\\text{ cm}\\times 2\\text{ cm} = 6\\text{ cm}^2$ : $\\mathcal{A} = \\dfrac{1}{2}\\times 6 = 3\\text{ cm}^2$.

*[Barème : position relative : 1,5 pt · primitive : 1,5 pt · aire en u.a. : 1 pt · conversion : 1 pt — Total : 5 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Tableau de signes d'abord, conversion ensuite. Réponses finales seulement.

- **Exercice 1.** Aire entre $f(x) = \\dfrac{1}{x}$, l'axe des abscisses, $x = 1$ et $x = e$, repère orthonormé d'unité $3\\text{ cm}$. *(Réponse : $\\int_1^e \\dfrac{1}{x}dx = 1$ u.a., et $1\\,\\text{u.a.} = 9\\text{ cm}^2$, donc $\\mathcal{A} = 9\\text{ cm}^2$.)*
- **Exercice 2.** Aire entre l'axe des abscisses et $g(x) = -x^2 + 2x$ sur $[0\\ ;\\ 2]$, unité $1\\text{ cm}$. *(Réponse : $\\mathcal{A} = \\dfrac{4}{3}\\text{ cm}^2$.)*
- **Exercice 3.** Aire entre l'axe et $h(x) = x^2 - 4$ sur $[0\\ ;\\ 2]$, unité $1\\text{ cm}$. *(Réponse : $h \\le 0$ sur $[0\\ ;\\ 2]$, $\\mathcal{A} = \\int_0^2 (4 - x^2)\\,dx = \\dfrac{16}{3}\\text{ cm}^2$.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m5',
          titre: `À retenir`,
          contenu: [
            `Aire $= \\displaystyle\\int_a^b |f(x)|\\,dx$ (u.a.) : toujours positive grâce à la valeur absolue.`,
            `📘 Vocabulaire officiel : unité d'aire, position relative, tableau de signes, conversion d'échelle.`,
            `Entre deux courbes : intégrale de (haut − bas), après étude du signe de $f - g$.`,
            `Changement de signe → Chasles au point d'annulation.`,
            `Conversion finale : $\\times\\,(OI \\times OJ)$ pour les cm².`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m5',
          titre: `Fil rouge`,
          contenu: `Tu sais mesurer des surfaces planes. Mais que se passe-t-il si on fait **tourner** une de ces surfaces autour d'un axe ? Elle engendre un solide dans l'espace — un vase, une toupie. Mesurer son **volume**, c'est le grand final du tome : le **Module 6**. Et ton Outil 3 du Socle (développer $[f(x)]^2$) va enfin servir !`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m5',
          titre: `Auto-évaluation — Module 5`,
          contenu: [
            `Je sais étudier le signe d'une fonction pour poser correctement la valeur absolue.`,
            `J'emploie le vocabulaire officiel (u.a., position relative, conversion d'échelle) dans mes rédactions.`,
            `Je sais découper par Chasles à un point de changement de signe.`,
            `Je sais déterminer l'aire entre deux courbes (haut − bas).`,
            `Je convertis sans erreur les u.a. en cm² selon l'échelle du repère.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m5',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Tu mesures tout ce qui est plat. Direction le grand final, Module 6.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 1 (changement de signe).`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : le terrain entre la route et la rivière.`,
          ],
        },
      ],
    },
  ],
};
