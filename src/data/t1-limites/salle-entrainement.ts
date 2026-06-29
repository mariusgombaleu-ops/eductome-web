import { Chapitre } from '../../types/course';

export const chapitreSalle: Chapitre = {
  id: 't1-salle',
  titre: `La Salle d'Entraînement — 10 Exercices BAC`,
  duree: 45,
  niveau: 'BAC',
  xpGain: 50,
  sections: [
    {
      id: 's1',
      titre: `LA SALLE D'ENTRAÎNEMENT — 10 Exercices BAC`,
      blocs: [
        {
          type: 'table',
          id: 'tbl1',
          headers: [`🎯 OBJECTIF DE CETTE SECTION`],
          rows: [
            [`Synthèse de tous les outils du Tome 1 en conditions d'examen réelles`],
            [`10 exercices complets de niveau BAC — diagnostic + méthode + rédaction`],
            [`Entraîner le réflexe de choisir seul le bon outil face à un énoncé mixte`],
          ],
        },
        {
          type: 'text',
          id: 'b2',
          contenu: `Accroche-toi bien, Champion(ne). Ici, on quitte le confort des entraînements par petits morceaux pour entrer dans la vraie arène : le jour du BAC.

Quand le surveillant va distribuer la feuille d'examen officielle au Lycée Classique d'Abidjan ou au Lycée Sainte Marie, le sujet ne viendra pas avec une étiquette commode disant « applique la conjuguée » ou « s'appuie sur le Module 4 ». Tout sera mélangé au milieu d'un grand problème de synthèse. C'est à toi, et à toi seul, de poser ton diagnostic en regardant l'énoncé, de fouiller dans ta boîte à outils, et de sortir l'arme exacte qu'il faut.

Entrer en salle d'examen sans paniquer, ça ne demande pas un don du ciel. Ça demande une méthode claire, une gestion du temps froide, et le réflexe de repérer les indices cachés dans les questions.

Dans presque tous les sujets de la Série D, le calcul des limites est le **gardien de la maison** : c'est la toute première question du problème de fonction. Si tu rates cette entrée, c'est tout ton tableau de variations qui s'effondre et ton dessin de courbe qui part de travers.

Alors, pose ton stylo deux minutes et écoute la stratégie du Grand Frère.

**Stratégie 1 — Lire l'énoncé en entier avant de calculer.**
Cinq minutes calmes pour parcourir le sujet de la première à la dernière ligne. Le correcteur glisse souvent la réponse de la limite ou l'équation de l'asymptote trois questions plus loin, sous la forme d'un *« démontrer que la droite d'équation $y = ax + b$ est asymptote »*. Si tu as bien lu, tu connais déjà la destination avant même d'avoir commencé.

**Stratégie 2 — Gérer ses minutes.**
Un calcul de limite au BAC, c'est souvent payé $0{,}25$ ou $0{,}5$ point. Si tu bloques plus de dix minutes sur une indétermination coriace, respire, laisse un espace blanc et avance. Tu reviendras dessus quand tu auras engrangé les points faciles de la suite.`,
        },
        {
          type: 'dialogue',
          id: 'dlg3',
          pf: `Grand Frère, quand je vois un gros problème avec une Partie A et une Partie B au BAC, je perds mes moyens. J'ai l'impression que c'est une montagne impossible à grimper, tout s'embrouille dans ma tête.`,
        },
        {
          type: 'dialogue',
          id: 'dlg4',
          gf: `Ne t'inquiète pas, c'est le piège classique. La vérité, c'est que la Partie A est là pour fabriquer les armes de la Partie B. Le prof te fait étudier une fonction auxiliaire $g$ simple pour trouver son signe, et ce signe, c'est précisément la clé qui va ouvrir la dérivée ou la position relative de la courbe dans la Partie B. C'est un travail à la chaîne bien huilé, pas une montagne. Vois les questions comme des marches d'escalier : monte-les une par une sans regarder le sommet.`,
        },
        {
          type: 'tip',
          id: 'tip5',
          titre: `Conseil`,
          contenu: `Dès que tu reçois ton sujet, utilise ton brouillon uniquement pour poser ton diagnostic rapide : écris la forme initiale de la limite (par exemple $\\dfrac{0}{0}$ ou $+\\infty - \\infty$) et dessine ton arbre de décision. Ne perds pas de temps à rédiger tout ton développement au brouillon. Fais le tri des outils dans ta tête, vérifie la méthode, puis écris directement et proprement sur ta copie officielle.`,
        },
        {
          type: 'warning',
          id: 'warn6',
          titre: `Piège à éviter`,
          contenu: `Écrire directement le résultat d'une limite complexe sans justifier les blocs intermédiaires. Si tu écris simplement $\\displaystyle\\lim_{x \\to +\\infty} f(x) = 0$ alors qu'il y avait une croissance comparée cachée, tu perds la moitié du barème de la question. Tu dois obligatoirement détailler les limites de chaque morceau de ta formule. Point de vigilance absolu.`,
        },
        {
          type: 'figure',
          id: 'fig7',
          legende: `Carte des outils du Tome 1 — choisis ta clé`,
          alt: `Carte des outils du Tome 1 — choisis ta clé`,
        },
      ],
    },
    {
      id: 's2',
      titre: `La Check-list du Correcteur`,
      blocs: [
        {
          type: 'text',
          id: 'b8',
          contenu: `Voici ce que le prof cherche des yeux sur ta copie lorsqu'il corrige la partie limites et continuité :`,
        },
        {
          type: 'table',
          id: 'tbl9',
          headers: [`Point contrôlé par le correcteur`, `Statut`],
          rows: [
            [`Le test de substitution initiale fait de manière invisible ou mentionné proprement si la limite est directe.`, `☐`],
            [`L'annonce claire de la forme indéterminée rencontrée (0/0, ∞/∞, 0×∞, ou +∞−∞) avant de la lever.`, `☐`],
            [`La mention explicite de la transformation algébrique utilisée (factorisation, conjuguée, ou développement).`, `☐`],
            [`L'écriture correcte des limites de référence du cours, surtout pour les fonctions exponentielles et logarithmes.`, `☐`],
            [`La phrase de conclusion obligatoire reliant un résultat de limite infinie à l'existence d'une asymptote verticale ou horizontale.`, `☐`],
            [`L'utilisation rigoureuse des trois conditions du Théorème de la Bijection (continuité, stricte monotonie, et changement de signe).`, `☐`],
            [`L'absence totale du symbole « lim » dès que les x sont remplacés par des valeurs numériques dans le calcul final.`, `☐`],
            [`, `],
          ],
        },
      ],
    },
    {
      id: 's3',
      titre: `LE COMBAT — 10 Exercices BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b10',
          contenu: `🔴 **Exercice 1 — Continuité et asymptote verticale · Identité du cube** *(BAC)*

**Énoncé.** Soit $f$ la fonction numérique définie sur $\\mathbb{R}$ par :

$$f(x) = \\dfrac{x^3 - 8}{x^2 - 4} \\quad \\text{si } x \\in \\mathbb{R} \\setminus \\{-2\\,;\\,2\\} \\qquad f(2) = 3$$

1. Étudier la continuité de $f$ au point $x_0 = 2$.
2. Déterminer la limite de $f$ en $-2$, puis interpréter graphiquement ce résultat.

**Diagnostic.** Fonction définie par morceaux. En $2$, la substitution donne $\\dfrac{0}{0}$ — le mur du Module 2. On factorise via l'identité du cube ($a^3 - b^3 = (a-b)(a^2+ab+b^2)$). En $-2$, le dénominateur s'annule mais pas le numérateur : limite infinie et asymptote verticale.

**Méthode du Grand Frère.**

1. Pour la continuité en $2$, on sait déjà que $f(2) = 3$. Comme $x^3 - 8 = (x-2)(x^2 + 2x + 4)$ et $x^2 - 4 = (x-2)(x+2)$, on simplifie par $(x-2)$ pour tout $x \\neq 2$.
2. Il reste $f(x) = \\dfrac{x^2 + 2x + 4}{x + 2}$. En passant à la limite quand $x \\to 2$, on obtient $\\dfrac{4+4+4}{2+2} = \\dfrac{12}{4} = 3$.
3. La limite vaut $3$ et l'image vaut $3$ : les deux coïncident, donc la courbe est raccordée sans trou.
4. Pour la limite en $-2$, le numérateur tend vers $(-2)^3 - 8 = -16$. Le dénominateur tend vers $0$. On étudie le signe de part et d'autre.

💡 Révise bien tes identités remarquables du cube avant l'examen. Retenir que $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$ est le sésame qui débloque de nombreuses situations d'indétermination rationnelle au BAC.

⚠️ Ne confonds pas le comportement à gauche et à droite du point interdit. Si le signe du dénominateur change de part et d'autre de $-2$, les limites latérales auront des signes opposés. Fais toujours un petit tableau de signes au brouillon pour être sûr.`,
        },
        {
          type: 'rule',
          id: 'copie11',
          titre: `La Copie Parfaite`,
          contenu: `**1.** Étudions la continuité de $f$ en $2$.

On sait d'après l'énoncé que $f(2) = 3$. Calculons $\\displaystyle\\lim_{x \\to 2} f(x)$. Par substitution directe, on obtient la forme indéterminée $\\dfrac{0}{0}$.

Pour tout $x \\in \\mathbb{R} \\setminus \\{-2\\,;\\,2\\}$ :
$$x^3 - 8 = (x-2)(x^2 + 2x + 4) \\qquad x^2 - 4 = (x-2)(x+2)$$

Ainsi, pour tout $x \\neq 2$ et $x \\neq -2$ :
$$f(x) = \\dfrac{(x-2)(x^2 + 2x + 4)}{(x-2)(x+2)} = \\dfrac{x^2 + 2x + 4}{x + 2}$$

Par conséquent :
$$\\lim_{x \\to 2} f(x) = \\dfrac{2^2 + 2(2) + 4}{2 + 2} = \\dfrac{12}{4} = 3$$

Comme $\\displaystyle\\lim_{x \\to 2} f(x) = f(2) = 3$, la fonction $f$ est **continue en $2$**.

**2.** Déterminons la limite de $f$ en $-2$.

On a $\\displaystyle\\lim_{x \\to -2} (x^3 - 8) = -16$.

Pour $x > -2$ : $x + 2 > 0$, donc $\\displaystyle\\lim_{x \\to -2^+} f(x) = \\dfrac{-16}{0^+} = -\\infty$.

Pour $x < -2$ : $x + 2 < 0$, donc $\\displaystyle\\lim_{x \\to -2^-} f(x) = \\dfrac{-16}{0^-} = +\\infty$.

Comme la limite de $f$ en $-2$ est infinie, la droite d'équation $x = -2$ est **asymptote verticale** à la courbe représentative de $f$.

*[Barème type BAC — Q1 : identification FI 0,5 pt · factorisation double 1 pt · limite = 3 + conclusion continuité 1 pt = 2,5 pts · Q2 : étude du signe du dénominateur 0,5 pt · deux limites latérales 0,5 pt · conclusion asymptote verticale 0,5 pt = 1,5 pt — Total : 4 pts]*`,
        },
        {
          type: 'text',
          id: 'b12',
          contenu: `🔴 **Exercice 2 — Limites à l'infini avec racine · Expression conjuguée** *(BAC)*

**Énoncé.** Soit $f$ la fonction numérique définie sur $\\mathbb{R}$ par :
$$f(x) = x - \\sqrt{x^2 + 2x + 3}$$

1. Déterminer la limite de $f$ en $-\\infty$.
2. Déterminer la limite de $f$ en $+\\infty$, puis interpréter graphiquement le résultat.

**Diagnostic.** En $-\\infty$, somme de termes qui se renforcent → pas d'indétermination. En $+\\infty$, forme $+\\infty - \\infty$ avec racine → conjuguée du Module 3. Les coefficients devant $x$ et $\\sqrt{x^2}$ sont identiques en valeur absolue, donc la factorisation forcée échouerait. Il faut le conjugué.

**Méthode du Grand Frère.**

1. Pour $-\\infty$, les deux termes tendent vers $-\\infty$ : somme directe.
2. Pour $+\\infty$, on multiplie haut et bas par la quantité conjuguée $x + \\sqrt{x^2 + 2x + 3}$.
3. Au numérateur : $(a-b)(a+b) = a^2 - b^2$ fait sauter la racine → $x^2 - (x^2+2x+3) = -2x - 3$.
4. Au dénominateur : on factorise $x^2$ sous la racine puis on sort $x$ (positif à $+\\infty$) pour simplifier.

💡 Rappelle-toi toujours que $\\sqrt{x^2} = |x|$. Si tu travailles en $-\\infty$, cela devient $-x$. Si tu travailles en $+\\infty$, cela devient $x$. C'est le détail sur lequel les correcteurs du BAC attendent la moitié de la classe au tournant.

⚠️ Trouver la limite ne suffit pas si l'énoncé demande d'interpréter graphiquement. Une limite finie à l'infini signifie qu'on frôle une ligne horizontale. Écris explicitement l'équation de l'asymptote.`,
        },
        {
          type: 'rule',
          id: 'copie13',
          titre: `La Copie Parfaite`,
          contenu: `**1.** Déterminons la limite de $f$ en $-\\infty$.

On a $\\displaystyle\\lim_{x \\to -\\infty} x^2 = +\\infty$, donc $\\displaystyle\\lim_{x \\to -\\infty} \\sqrt{x^2+2x+3} = +\\infty$, ce qui implique $\\displaystyle\\lim_{x \\to -\\infty} (-\\sqrt{x^2+2x+3}) = -\\infty$.

Comme $\\displaystyle\\lim_{x \\to -\\infty} x = -\\infty$, on obtient par somme :
$$\\lim_{x \\to -\\infty} f(x) = -\\infty$$

**2.** Déterminons la limite de $f$ en $+\\infty$.

Par substitution directe, on obtient la forme indéterminée $+\\infty - \\infty$. Pour tout $x \\in \\mathbb{R}$, multiplions par la quantité conjuguée :

$$f(x) = \\dfrac{(x - \\sqrt{x^2+2x+3})(x + \\sqrt{x^2+2x+3})}{x + \\sqrt{x^2+2x+3}} = \\dfrac{x^2 - (x^2+2x+3)}{x + \\sqrt{x^2+2x+3}} = \\dfrac{-2x-3}{x + \\sqrt{x^2\\!\\left(1+\\dfrac{2}{x}+\\dfrac{3}{x^2}\\right)}}$$

Pour tout $x > 0$, $\\sqrt{x^2} = x$, donc :
$$f(x) = \\dfrac{x\\!\\left(-2 - \\dfrac{3}{x}\\right)}{x\\!\\left(1 + \\sqrt{1+\\dfrac{2}{x}+\\dfrac{3}{x^2}}\\right)} = \\dfrac{-2 - \\dfrac{3}{x}}{1 + \\sqrt{1+\\dfrac{2}{x}+\\dfrac{3}{x^2}}}$$

Or $\\displaystyle\\lim_{x \\to +\\infty} \\dfrac{3}{x} = \\displaystyle\\lim_{x \\to +\\infty} \\dfrac{2}{x} = \\displaystyle\\lim_{x \\to +\\infty} \\dfrac{3}{x^2} = 0$. Par conséquent :
$$\\lim_{x \\to +\\infty} f(x) = \\dfrac{-2}{1 + \\sqrt{1}} = \\dfrac{-2}{2} = -1$$

Comme $\\displaystyle\\lim_{x \\to +\\infty} f(x) = -1$, la droite d'équation $y = -1$ est **asymptote horizontale** à la courbe de $f$ en $+\\infty$.

*[Barème type BAC — Q1 : somme directe + conclusion 1 pt · Q2 : conjugué posé 0,5 pt · développement numérateur 1 pt · factorisation terme dominant 1 pt · limite + conclusion + interprétation 1 pt = 3,5 pts — Total : 4,5 pts]*`,
        },
        {
          type: 'text',
          id: 'b14',
          contenu: `🔴 **Exercice 3 — Continuité et croissances comparées · Logarithme** *(BAC)*

**Énoncé.** Soit $f$ la fonction numérique définie sur $[0\\,;\\,+\\infty[$ par :
$$f(x) = \\dfrac{x}{x - \\ln x} \\quad \\text{si } x > 0 \\qquad f(0) = 0$$

1. Justifier que pour tout $x > 0$, $x - \\ln x > 0$.
2. Étudier la continuité de $f$ au point $x_0 = 0$.
3. Calculer la limite de $f$ en $+\\infty$ et en donner une interprétation graphique.

**Diagnostic.** Q1 : propriété classique via une fonction auxiliaire. Q2 : en $0^+$, numérateur → 0, dénominateur → $+\\infty$ → pas d'indétermination réelle. Q3 : forme $\\dfrac{\\infty}{\\infty}$ → croissances comparées du Module 4.

**Méthode du Grand Frère.**

1. Pour Q1, on étudie la fonction auxiliaire $g(x) = x - \\ln x$ — sa dérivée, son minimum.
2. Pour Q2, on calcule $\\displaystyle\\lim_{x \\to 0^+} f(x)$. Le numérateur → 0 et le dénominateur → $0 - (-\\infty) = +\\infty$. Par quotient, $\\dfrac{0}{+\\infty} = 0$. On compare avec $f(0)$.
3. Pour Q3, on extrait $x$ au dénominateur : $x\\!\\left(1 - \\dfrac{\\ln x}{x}\\right)$. On simplifie, puis on applique la limite de référence $\\dfrac{\\ln x}{x} \\to 0$.

💡 Ne te laisse pas impressionner par les fractions contenant des logarithmes à la fois au numérateur et au dénominateur. Le réflexe absolu à l'infini est de mettre le terme le plus fort en facteur pour faire apparaître les limites de référence.

⚠️ Une grosse erreur commise par précipitation est de croire que $\\dfrac{0}{\\infty}$ est une forme indéterminée. C'est faux. Seuls $\\dfrac{0}{0}$ et $\\dfrac{\\infty}{\\infty}$ forment des barrages. Diviser zéro par un nombre infiniment grand donne sagement zéro.`,
        },
        {
          type: 'rule',
          id: 'copie15',
          titre: `La Copie Parfaite`,
          contenu: `**1.** Soit $g(x) = x - \\ln x$ sur $]0\\,;\\,+\\infty[$. On a $g'(x) = 1 - \\dfrac{1}{x} = \\dfrac{x-1}{x}$.

Pour $x \\in \\,]0\\,;\\,1[$, $g'(x) < 0$ et pour $x \\in \\,]1\\,;\\,+\\infty[$, $g'(x) > 0$. La fonction $g$ admet un minimum absolu en $1$ valant $g(1) = 1 - \\ln 1 = 1 > 0$. Donc pour tout $x > 0$, $x - \\ln x > 0$.

**2.** D'après l'énoncé, $f(0) = 0$. Or $\\displaystyle\\lim_{x \\to 0^+} x = 0$ et $\\displaystyle\\lim_{x \\to 0^+} \\ln x = -\\infty$, donc $\\displaystyle\\lim_{x \\to 0^+}(x - \\ln x) = +\\infty$.

Par quotient : $\\displaystyle\\lim_{x \\to 0^+} f(x) = \\dfrac{0}{+\\infty} = 0$.

Comme $\\displaystyle\\lim_{x \\to 0^+} f(x) = f(0) = 0$, la fonction $f$ est **continue à droite en $0$**.

**3.** Par substitution directe, on obtient la forme indéterminée $\\dfrac{+\\infty}{+\\infty}$. Pour tout $x > 0$ :
$$f(x) = \\dfrac{x}{x\\!\\left(1 - \\dfrac{\\ln x}{x}\\right)} = \\dfrac{1}{1 - \\dfrac{\\ln x}{x}}$$

Par croissance comparée : $\\displaystyle\\lim_{x \\to +\\infty} \\dfrac{\\ln x}{x} = 0$. Par conséquent :
$$\\lim_{x \\to +\\infty} f(x) = \\dfrac{1}{1 - 0} = 1$$

Comme $\\displaystyle\\lim_{x \\to +\\infty} f(x) = 1$, la droite d'équation $y = 1$ est **asymptote horizontale** à la courbe de $f$ en $+\\infty$.

*[Barème type BAC — Q1 : dérivée g' + tableau de signes + minimum + conclusion 1,5 pt · Q2 : calcul limite + conclusion continuité 1 pt · Q3 : factorisation + croissance comparée + conclusion + interprétation 1,5 pt — Total : 4 pts]*`,
        },
        {
          type: 'text',
          id: 'b16',
          contenu: `🔴 **Exercice 4 — Continuité en $0^+$ et limite · Logarithme et puissance** *(BAC)*

**Énoncé.** Soit $f$ la fonction numérique définie sur $[0\\,;\\,+\\infty[$ par :
$$f(x) = x - x\\ln x + 1 \\quad \\text{si } x > 0 \\qquad f(0) = 1$$

1. Étudier la continuité de $f$ à droite au point $x_0 = 0$.
2. Déterminer la limite de $f$ en $+\\infty$.

**Diagnostic.** En $0^+$, le terme $x\\ln x$ présente la forme $0 \\times (-\\infty)$ — levée directement par la limite de référence du Module 4. En $+\\infty$, forme $+\\infty - \\infty$ : factorisation par le terme dominant $x$.

**Méthode du Grand Frère.**

1. Pour Q1 : on applique directement la limite de cours $\\displaystyle\\lim_{x \\to 0^+} x\\ln x = 0$. Ensuite, simple addition de constantes. On compare avec $f(0)$.
2. Pour Q2 : on extrait $x$ : $x\\!\\left(1 - \\ln x + \\dfrac{1}{x}\\right)$. Le bloc $-\\ln x$ bascule vers $-\\infty$ → la parenthèse → $-\\infty$ → produit $x \\times (-\\infty) = -\\infty$.

💡 Ne réinvente jamais la roue face à un bloc $x^n \\ln x$ quand $x \\to 0$. C'est une limite de référence inscrite dans le programme officiel du BAC ivoirien. Écris-la directement.

⚠️ Attention à la gestion des signes lors de la factorisation. Quand tu sors $x$ devant une parenthèse contenant $-\\ln x$, le terme résiduel est bien $-\\ln x$, qui tend vers $-\\infty$. Une erreur de signe inverserait totalement ta limite finale.`,
        },
        {
          type: 'rule',
          id: 'copie17',
          titre: `La Copie Parfaite`,
          contenu: `**1.** D'après l'énoncé, $f(0) = 1$. Calculons $\\displaystyle\\lim_{x \\to 0^+} f(x)$.

D'après les limites de référence du cours : $\\displaystyle\\lim_{x \\to 0^+} x\\ln x = 0$.

Par somme :
$$\\lim_{x \\to 0^+} f(x) = \\lim_{x \\to 0^+}(x - x\\ln x + 1) = 0 - 0 + 1 = 1$$

Comme $\\displaystyle\\lim_{x \\to 0^+} f(x) = f(0) = 1$, la fonction $f$ est **continue à droite en $0$**.

**2.** Par substitution directe, on obtient la forme indéterminée $+\\infty - \\infty$. Pour tout $x > 0$, factorisons par $x$ :
$$f(x) = x\\!\\left(1 - \\ln x + \\dfrac{1}{x}\\right)$$

Or $\\displaystyle\\lim_{x \\to +\\infty} \\ln x = +\\infty$ donc $\\displaystyle\\lim_{x \\to +\\infty}(-\\ln x) = -\\infty$. De plus $\\displaystyle\\lim_{x \\to +\\infty} \\dfrac{1}{x} = 0$. Par somme :
$$\\lim_{x \\to +\\infty}\\!\\left(1 - \\ln x + \\dfrac{1}{x}\\right) = -\\infty$$

Comme $\\displaystyle\\lim_{x \\to +\\infty} x = +\\infty$, par produit d'un infini positif et d'un infini négatif :
$$\\lim_{x \\to +\\infty} f(x) = -\\infty$$

*[Barème type BAC — Q1 : limite de référence x ln x posée 0,5 pt · calcul + conclusion continuité 0,5 pt = 1 pt · Q2 : factorisation par x 0,5 pt · analyse du bloc intérieur 0,5 pt · conclusion par produit 0,5 pt = 1,5 pt — Total : 2,5 pts]*`,
        },
        {
          type: 'text',
          id: 'b18',
          contenu: `🔴 **Exercice 5 — Exponentielle et asymptotes · 4 bornes** *(BAC)*

**Énoncé.** Soit $f$ la fonction numérique définie sur $\\mathbb{R} \\setminus \\{1\\}$ par :
$$f(x) = \\dfrac{e^x}{x - 1}$$

Déterminer les limites de $f$ aux bornes de son ensemble de définition, puis préciser les équations des asymptotes à la courbe représentative de $f$.

**Diagnostic.** Quatre bornes à examiner : $-\\infty$, $+\\infty$, et le point interdit $1$ à gauche et à droite. En $-\\infty$, l'exponentielle s'écrase vers $0$. En $+\\infty$, forme $\\dfrac{\\infty}{\\infty}$ → croissances comparées. En $1$, dénominateur nul → asymptote verticale.

**Méthode du Grand Frère.**

1. En $-\\infty$ : $e^x \\to 0$ et $(x-1) \\to -\\infty$ → quotient $\\to 0$.
2. En $+\\infty$ : on reconnaît la forme $\\dfrac{e^x}{x}$ (croissance comparée). On transforme : $f(x) = \\dfrac{e^x}{x} \\times \\dfrac{x}{x-1}$.
3. En $1^-$ et $1^+$ : numérateur → $e > 0$, dénominateur → $0^-$ ou $0^+$ → $\\mp\\infty$.
4. Chaque résultat infini sur une borne finie → asymptote verticale. Chaque résultat fini sur une borne infinie → asymptote horizontale.

💡 Pour faire apparaître proprement la croissance comparée en $+\\infty$, écris $f(x) = \\dfrac{e^x}{x} \\times \\dfrac{x}{x-1}$. La deuxième fraction est rationnelle et tend vers $1$, la limite globale est dictée par le premier morceau.

⚠️ Ne confonds jamais le comportement de l'exponentielle aux deux infinis. En $-\\infty$, l'exponentielle s'écrase complètement sur l'axe des abscisses et vaut $0$.`,
        },
        {
          type: 'rule',
          id: 'copie19',
          titre: `La Copie Parfaite`,
          contenu: `**En $-\\infty$ :** $\\displaystyle\\lim_{x \\to -\\infty} e^x = 0$ et $\\displaystyle\\lim_{x \\to -\\infty}(x-1) = -\\infty$. Par quotient : $\\displaystyle\\lim_{x \\to -\\infty} f(x) = 0$.

La droite d'équation $y = 0$ est **asymptote horizontale** à la courbe de $f$ en $-\\infty$.

**En $+\\infty$ :** Pour tout $x \\notin \\{0\\,;\\,1\\}$ : $f(x) = \\dfrac{e^x}{x} \\times \\dfrac{x}{x-1}$.

Par croissance comparée : $\\displaystyle\\lim_{x \\to +\\infty} \\dfrac{e^x}{x} = +\\infty$. De plus : $\\displaystyle\\lim_{x \\to +\\infty} \\dfrac{x}{x-1} = 1$.

Par produit : $\\displaystyle\\lim_{x \\to +\\infty} f(x) = +\\infty$.

**En $1$ :** $\\displaystyle\\lim_{x \\to 1} e^x = e > 0$. Pour $x < 1$, $x-1 < 0$ donc $\\displaystyle\\lim_{x \\to 1^-} f(x) = -\\infty$. Pour $x > 1$, $x-1 > 0$ donc $\\displaystyle\\lim_{x \\to 1^+} f(x) = +\\infty$.

La droite d'équation $x = 1$ est **asymptote verticale** à la courbe représentative de $f$.

*[Barème type BAC — Limite en −∞ + interprétation 1 pt · Limite en +∞ (factorisation + croissance comparée) 1,5 pt · Limites en 1⁻ et 1⁺ (signe dénominateur) 1 pt · Conclusion asymptote verticale 0,5 pt — Total : 4 pts]*`,
        },
        {
          type: 'text',
          id: 'b20',
          contenu: `🔴 **Exercice 6 — TVI complet · Polynôme du 3ème degré** *(BAC)*

**Énoncé.** Soit $g$ la fonction numérique définie sur $\\mathbb{R}$ par :
$$g(x) = x^3 - x^2 + x + 1$$

1. Déterminer les limites de $g$ en $-\\infty$ et en $+\\infty$.
2. Dresser le tableau de variations de $g$ (on admettra que $g$ est strictement croissante sur $\\mathbb{R}$).
3. Démontrer que l'équation $g(x) = 0$ admet une unique solution réelle $\\alpha$ dans $\\,]-1\\,;\\,0[$.

**Diagnostic.** Q1 : terme de plus haut degré $x^3$. Q3 : Théorème de la Bijection (corollaire du TVI) — triptyque obligatoire : continuité, stricte monotonie, changement de signe. C'est le protocole à réciter mot pour mot.

**Méthode du Grand Frère.**

1. Pour les limites à l'infini d'un polynôme, on conserve uniquement $x^3$.
2. Tableau ascendant puisque $g$ est strictement croissante, avec les limites en bornes.
3. Triptyque : continuité (polynôme = automatique) + stricte monotonie (donnée) + calcul de $g(-1)$ et $g(0)$ pour vérifier le changement de signe.

💡 Ne confonds jamais l'énoncé du TVI général (existence) et le Théorème de la Bijection (existence + unicité). Si la question contient les mots « unique solution », la mention de la **stricte monotonie** est le mot-clé obligatoire sans lequel le correcteur coupe ton barème.

⚠️ Si l'énoncé te donne un intervalle ouvert $\\,]-1\\,;\\,0[$ dans la conclusion, assure-toi que le produit $g(-1) \\times g(0)$ est **strictement** négatif et qu'aucune des bornes n'égale zéro. Reste précis jusqu'au bout du calcul.`,
        },
        {
          type: 'rule',
          id: 'copie21',
          titre: `La Copie Parfaite`,
          contenu: `**1.** La fonction $g$ étant polynôme, sa limite à l'infini est celle de son terme de plus haut degré :
$$\\lim_{x \\to -\\infty} g(x) = -\\infty \\qquad \\lim_{x \\to +\\infty} g(x) = +\\infty$$

**2.** La fonction $g$ est continue (théorème admis : polynôme), dérivable et strictement croissante sur $\\mathbb{R}$ (admis). Tableau de variations : flèche unique de $-\\infty$ vers $+\\infty$.

**3.** Démontrons que $g(x) = 0$ admet une unique solution $\\alpha$ dans $\\,]-1\\,;\\,0[$.

- **Continuité :** $g$ est un polynôme, donc continue sur $\\mathbb{R}$ et en particulier sur $[-1\\,;\\,0]$.
- **Stricte monotonie :** $g$ est strictement croissante sur $[-1\\,;\\,0]$ (admis).
- **Calcul des bornes :** $g(-1) = -1 - 1 - 1 + 1 = -2 < 0$ et $g(0) = 1 > 0$. Donc $g(-1) \\times g(0) = -2 < 0$.

D'après le **Théorème de la Bijection** (corollaire du TVI), $g$ réalise une bijection de $[-1\\,;\\,0]$ sur $[-2\\,;\\,1]$. Comme $0 \\in [-2\\,;\\,1]$, l'équation $g(x) = 0$ admet une **unique** solution réelle $\\alpha$ dans $\\,]-1\\,;\\,0[$.

*[Barème type BAC — Q1 : limites en ±∞ 1 pt · Q2 : tableau 0,5 pt · Q3 : continuité 0,5 pt + stricte monotonie 0,5 pt + calcul g(−1) et g(0) 0,5 pt + conclusion Bijection rédigée 1 pt = 2,5 pts — Total : 4 pts]*`,
        },
        {
          type: 'figure',
          id: 'fig22',
          src: '/images/t1/fig_Salle_2.png',
          legende: `Visualisation de l'Exercice 6 — l'unicité de $\\alpha$`,
          alt: `Visualisation de l'Exercice 6 — l'unicité de $\\alpha$`,
        },
        {
          type: 'text',
          id: 'b23',
          contenu: `🔴 **Exercice 7 — Asymptote oblique et position · Logarithme** *(BAC)*

**Énoncé.** Soit $f$ la fonction numérique définie sur $]1\\,;\\,+\\infty[$ par :
$$f(x) = x - 1 + \\dfrac{2\\ln x}{x - 1}$$

1. Déterminer la limite de $f$ en $1$ par valeurs supérieures.
2. Déterminer la limite de $f$ en $+\\infty$.
3. Démontrer que la droite $(\\Delta)$ d'équation $y = x - 1$ est asymptote oblique à la courbe en $+\\infty$, puis étudier la position relative.

**Diagnostic.** En $1^+$ : la fraction centrale donne $\\dfrac{0}{0}$ — c'est le taux d'accroissement fondamental du logarithme : $\\displaystyle\\lim_{x \\to 1} \\dfrac{\\ln x}{x-1} = 1$. En $+\\infty$ : $\\dfrac{\\infty}{\\infty}$ → croissance comparée $\\dfrac{\\ln x}{x} \\to 0$. Q3 : test de la différence + signe du résidu.

**Méthode du Grand Frère.**

1. Pour $1^+$ : le bloc fractionnaire tend vers $2 \\times 1 = 2$. On ajoute la limite du polynôme $x-1 \\to 0$.
2. Pour $+\\infty$ : transformer $\\dfrac{2\\ln x}{x-1} = \\dfrac{2\\ln x}{x\\!\\left(1-\\dfrac{1}{x}\\right)}$ pour faire apparaître $\\dfrac{\\ln x}{x} \\to 0$.
3. Pour Q3 : différence $f(x) - (x-1) = \\dfrac{2\\ln x}{x-1}$, étudier sa limite puis son signe.

💡 L'étude de la position relative est un automatisme à acquérir. Différence positive → courbe au-dessus. Différence négative → courbe en dessous. Ne confonds jamais le signe de la différence avec le résultat de la limite.

⚠️ Restreins ton étude de signe à l'intervalle imposé par l'énoncé : $]1\\,;\\,+\\infty[$. Sur cette zone, $x-1$ reste strictement positif et $\\ln x$ aussi car $x > 1$. L'analyse du signe est limpide si tu respectes ton domaine.`,
        },
        {
          type: 'rule',
          id: 'copie24',
          titre: `La Copie Parfaite`,
          contenu: `**1.** $\\displaystyle\\lim_{x \\to 1^+}(x-1) = 0$. D'après la limite de référence liée au nombre dérivé de $\\ln$ en $1$ : $\\displaystyle\\lim_{x \\to 1^+} \\dfrac{\\ln x}{x-1} = 1$. Par somme et produit : $\\displaystyle\\lim_{x \\to 1^+} f(x) = 0 + 2 \\times 1 = 2$.

**2.** $\\displaystyle\\lim_{x \\to +\\infty}(x-1) = +\\infty$. Pour la fraction, pour tout $x > 1$ : $\\dfrac{2\\ln x}{x-1} = \\dfrac{2\\ln x}{x\\!\\left(1-\\dfrac{1}{x}\\right)} = 2\\dfrac{\\ln x}{x} \\times \\dfrac{1}{1-\\dfrac{1}{x}}$.

Par croissance comparée : $\\displaystyle\\lim_{x \\to +\\infty} \\dfrac{\\ln x}{x} = 0$, et $\\displaystyle\\lim_{x \\to +\\infty} \\dfrac{1}{1-\\dfrac{1}{x}} = 1$. Par produit → $0$. Par somme : $\\displaystyle\\lim_{x \\to +\\infty} f(x) = +\\infty$.

**3.** Pour tout $x \\in \\,]1\\,;\\,+\\infty[$ : $f(x) - (x-1) = \\dfrac{2\\ln x}{x-1}$. Comme montré en Q2, $\\displaystyle\\lim_{x \\to +\\infty}\\!\\left[f(x)-(x-1)\\right] = 0$. La droite $(\\Delta)$ est **asymptote oblique** à la courbe de $f$ en $+\\infty$.

Signe de $\\dfrac{2\\ln x}{x-1}$ sur $\\,]1\\,;\\,+\\infty[$ : pour $x > 1$, $\\ln x > 0$ et $x - 1 > 0$, donc la différence est **strictement positive**. La courbe est **strictement au-dessus** de $(\\Delta)$ sur $\\,]1\\,;\\,+\\infty[$.

*[Barème type BAC — Q1 : limite de référence taux d'accroissement ln 0,5 pt + calcul 0,5 pt = 1 pt · Q2 : transformation + croissance comparée + conclusion 1,5 pt · Q3 : différence calculée 0,5 pt + limite → 0 + conclusion asymptote 1 pt + signe + conclusion position 1 pt = 2,5 pts — Total : 5 pts]*`,
        },
        {
          type: 'text',
          id: 'b25',
          contenu: `🔴 **Exercice 8 — Exponentielle · Continuité et asymptotes** *(BAC)*

**Énoncé.** Soit $f$ la fonction numérique définie sur $\\mathbb{R}$ par :
$$f(x) = \\dfrac{e^x - 1}{x} \\quad \\text{si } x \\neq 0 \\qquad f(0) = 1$$

1. Étudier la continuité de $f$ au point $x_0 = 0$.
2. Déterminer les limites de $f$ en $-\\infty$ et en $+\\infty$, puis préciser les éventuelles asymptotes.

**Diagnostic.** En $0$ : forme $\\dfrac{0}{0}$ → limite de référence définissant le nombre dérivé de l'exponentielle en $0$. En $-\\infty$ : $e^x \\to 0$ → pas d'indétermination. En $+\\infty$ : forme $\\dfrac{\\infty}{\\infty}$ → croissances comparées.

**Méthode du Grand Frère.**

1. Pour Q1 : appliquer directement $\\displaystyle\\lim_{x \\to 0} \\dfrac{e^x-1}{x} = 1$. Comparer avec $f(0)$.
2. Pour $-\\infty$ : numérateur → $0 - 1 = -1$, dénominateur → $-\\infty$ → quotient → $0$.
3. Pour $+\\infty$ : séparer en $\\dfrac{e^x}{x} - \\dfrac{1}{x}$ → croissance comparée + limite nulle.

💡 La limite $\\displaystyle\\lim_{x \\to 0} \\dfrac{e^x-1}{x} = 1$ est la traduction mathématique du fait que la dérivée de l'exponentielle en $0$ vaut $1$. C'est une clé passe-partout que le correcteur s'attend à voir utilisée sans démonstration supplémentaire.

⚠️ Ne confonds pas la limite en $-\\infty$ et l'asymptote associée. Trouver que la limite vaut $0$ signifie géométriquement que la courbe se colle à l'axe horizontal. Écris proprement l'équation de l'asymptote sous la forme $y = 0$.`,
        },
        {
          type: 'rule',
          id: 'copie26',
          titre: `La Copie Parfaite`,
          contenu: `**1.** L'énoncé donne $f(0) = 1$. D'après les limites de référence du cours (nombre dérivé de $e^x$ en $0$) :
$$\\lim_{x \\to 0} \\dfrac{e^x - 1}{x} = 1$$

Comme $\\displaystyle\\lim_{x \\to 0} f(x) = f(0) = 1$, la fonction $f$ est **continue en $0$**.

**2. En $-\\infty$ :** $\\displaystyle\\lim_{x \\to -\\infty}(e^x - 1) = -1$ et $\\displaystyle\\lim_{x \\to -\\infty} x = -\\infty$. Par quotient : $\\displaystyle\\lim_{x \\to -\\infty} f(x) = 0$.

La droite d'équation $y = 0$ est **asymptote horizontale** à la courbe en $-\\infty$.

**En $+\\infty$ :** Pour tout $x \\neq 0$ : $f(x) = \\dfrac{e^x}{x} - \\dfrac{1}{x}$.

Par croissance comparée : $\\displaystyle\\lim_{x \\to +\\infty} \\dfrac{e^x}{x} = +\\infty$. De plus : $\\displaystyle\\lim_{x \\to +\\infty} \\dfrac{1}{x} = 0$.

Par différence : $\\displaystyle\\lim_{x \\to +\\infty} f(x) = +\\infty$. Pas d'asymptote horizontale en $+\\infty$.

*[Barème type BAC — Q1 : limite de référence (eˣ−1)/x 0,5 pt + conclusion continuité 0,5 pt = 1 pt · Q2 : limite en −∞ + conclusion asymptote y=0 1 pt + limite en +∞ (croissance comparée + différence) 1,5 pt = 2,5 pts — Total : 3,5 pts]*`,
        },
        {
          type: 'text',
          id: 'b27',
          contenu: `🔴 **Exercice 9 — Limite composée et asymptote oblique · Logarithme** *(BAC)*

**Énoncé.** Soit $f$ la fonction numérique définie sur $]1\\,;\\,+\\infty[$ par :
$$f(x) = x + \\ln\\!\\left(\\dfrac{x}{x - 1}\\right)$$

1. Déterminer la limite de $f$ en $1$ par valeurs supérieures.
2. Déterminer la limite de $f$ en $+\\infty$.
3. Démontrer que la droite $(\\Delta)$ d'équation $y = x$ est asymptote oblique à la courbe en $+\\infty$.

**Diagnostic.** En $1^+$ : la fraction interne → $+\\infty$ → $\\ln \\to +\\infty$ (composition). En $+\\infty$ : la fraction → $1$ → $\\ln(1) = 0$ (composition). Q3 : test de la différence avec le résultat de Q2.

**Méthode du Grand Frère.**

1. Pour $1^+$ : calculer d'abord $\\displaystyle\\lim_{x \\to 1^+} \\dfrac{x}{x-1} = +\\infty$, puis appliquer $\\ln(+\\infty) = +\\infty$.
2. Pour $+\\infty$ : fraction rationnelle → $\\dfrac{x}{x} = 1$. Par continuité de $\\ln$ en $1$ : $\\ln 1 = 0$.
3. Pour Q3 : différence $f(x) - x = \\ln\\!\\left(\\dfrac{x}{x-1}\\right)$ → utiliser le résultat de Q2.

💡 Face à un logarithme contenant une fraction, applique la méthode des poupées russes : calcule d'abord ce qui se passe à l'intérieur de la parenthèse, puis regarde comment le logarithme réagit à ce résultat intermédiaire.

⚠️ N'utilise pas de fausses propriétés : $\\ln\\!\\left(\\dfrac{x}{x-1}\\right) = \\ln x - \\ln(x-1)$ créerait une forme $+\\infty - \\infty$ artificielle. Garde le bloc entier — sa limite est directe.`,
        },
        {
          type: 'rule',
          id: 'copie28',
          titre: `La Copie Parfaite`,
          contenu: `**1.** $\\displaystyle\\lim_{x \\to 1^+} x = 1$ et $\\displaystyle\\lim_{x \\to 1^+}(x-1) = 0^+$, donc $\\displaystyle\\lim_{x \\to 1^+} \\dfrac{x}{x-1} = +\\infty$.

Par composition : $\\displaystyle\\lim_{x \\to 1^+} \\ln\\!\\left(\\dfrac{x}{x-1}\\right) = +\\infty$. Par somme : $\\displaystyle\\lim_{x \\to 1^+} f(x) = +\\infty$.

*(La droite $x = 1$ est asymptote verticale.)*

**2.** $\\displaystyle\\lim_{x \\to +\\infty} \\dfrac{x}{x-1} = 1$. Par continuité de $\\ln$ en $1$ : $\\displaystyle\\lim_{x \\to +\\infty} \\ln\\!\\left(\\dfrac{x}{x-1}\\right) = \\ln 1 = 0$.

Par somme : $\\displaystyle\\lim_{x \\to +\\infty} f(x) = +\\infty + 0 = +\\infty$.

**3.** Pour tout $x > 1$ : $f(x) - x = \\ln\\!\\left(\\dfrac{x}{x-1}\\right)$.

D'après Q2 : $\\displaystyle\\lim_{x \\to +\\infty}\\!\\left[f(x) - x\\right] = 0$.

La limite de la différence étant nulle en $+\\infty$, la droite $(\\Delta) : y = x$ est **asymptote oblique** à la courbe de $f$ en $+\\infty$.

*[Barème type BAC — Q1 : limite interne + composition ln 0,5 pt + somme 0,5 pt = 1 pt · Q2 : limite interne → 1 + composition ln → 0 + somme 1,5 pt · Q3 : différence = ln(x/(x-1)) 0,5 pt + limite → 0 + conclusion rédigée 1 pt = 1,5 pt — Total : 4 pts]*`,
        },
        {
          type: 'text',
          id: 'b29',
          contenu: `🔴 **Exercice 10 — Synthèse complète · Logarithme, asymptotes, position relative** *(BAC)*

**Énoncé.** Soit $f$ la fonction numérique définie sur $]0\\,;\\,+\\infty[$ par :
$$f(x) = 2x - 1 - \\dfrac{\\ln x}{x}$$

1. Déterminer la limite de $f$ en $0$ par valeurs supérieures et en donner une interprétation graphique.
2. Déterminer la limite de $f$ en $+\\infty$.
3. Démontrer que la droite $(\\Delta)$ d'équation $y = 2x - 1$ est asymptote oblique à la courbe en $+\\infty$.
4. Étudier la position relative de la courbe de $f$ par rapport à $(\\Delta)$ sur $[1\\,;\\,+\\infty[$.

**Diagnostic.** En $0^+$ : la fraction $\\dfrac{\\ln x}{x}$ est un produit $\\ln x \\times \\dfrac{1}{x}$ → $(-\\infty) \\times (+\\infty) = -\\infty$ → signe opposé → $+\\infty$. En $+\\infty$ : croissance comparée $\\dfrac{\\ln x}{x} \\to 0$. Q3 : différence = $-\\dfrac{\\ln x}{x}$. Q4 : signe de $-\\dfrac{\\ln x}{x}$ sur $[1\\,;\\,+\\infty[$. Exercice de synthèse absolue du tome.

**Méthode du Grand Frère.**

1. Pour $0^+$ : récrire $\\dfrac{\\ln x}{x} = \\ln x \\times \\dfrac{1}{x}$ → produit $(-\\infty)(+\\infty) = -\\infty$ → le signe $-$ devant → $+\\infty$ → asymptote verticale $x = 0$.
2. Pour $+\\infty$ : $\\displaystyle\\lim \\dfrac{\\ln x}{x} = 0$ → simple.
3. Différence $f(x)-(2x-1) = -\\dfrac{\\ln x}{x}$ → même limite.
4. Sur $[1\\,;\\,+\\infty[$ : $x \\geq 1 \\Rightarrow \\ln x \\geq 0$ et $x > 0$ → $\\dfrac{\\ln x}{x} \\geq 0$ → différence $\\leq 0$ → courbe en dessous.

💡 Face à un bloc $\\dfrac{\\ln x}{x}$ en $0^+$, transforme toujours en produit $\\ln x \\times \\dfrac{1}{x}$ pour clarifier les signes. C'est le secret pour éliminer le stress visuel des fractions à l'origine.

⚠️ Attention au signe moins global lors de l'étude de la position relative. La différence vaut $-\\dfrac{\\ln x}{x}$. Si tu oublies ce signe moins, tu concluras que la courbe est au-dessus alors qu'elle est en réalité en dessous. Ce genre d'étourderie coûte très cher en fin de problème.`,
        },
        {
          type: 'rule',
          id: 'copie30',
          titre: `La Copie Parfaite`,
          contenu: `**1.** Pour tout $x > 0$ : $\\dfrac{\\ln x}{x} = \\ln x \\times \\dfrac{1}{x}$.

$\\displaystyle\\lim_{x \\to 0^+} \\ln x = -\\infty$ et $\\displaystyle\\lim_{x \\to 0^+} \\dfrac{1}{x} = +\\infty$. Par produit : $\\displaystyle\\lim_{x \\to 0^+} \\dfrac{\\ln x}{x} = -\\infty$.

En introduisant le signe $-$ : $\\displaystyle\\lim_{x \\to 0^+}\\!\\left(-\\dfrac{\\ln x}{x}\\right) = +\\infty$.

Comme $\\displaystyle\\lim_{x \\to 0^+}(2x-1) = -1$, par somme : $\\displaystyle\\lim_{x \\to 0^+} f(x) = +\\infty$.

La droite d'équation $x = 0$ (l'axe des ordonnées) est **asymptote verticale** à la courbe de $f$.

**2.** $\\displaystyle\\lim_{x \\to +\\infty}(2x-1) = +\\infty$ et par croissance comparée : $\\displaystyle\\lim_{x \\to +\\infty} \\dfrac{\\ln x}{x} = 0$. Par somme : $\\displaystyle\\lim_{x \\to +\\infty} f(x) = +\\infty$.

**3.** Pour tout $x > 0$ : $f(x) - (2x-1) = -\\dfrac{\\ln x}{x}$.

$\\displaystyle\\lim_{x \\to +\\infty}\\!\\left[f(x) - (2x-1)\\right] = -\\displaystyle\\lim_{x \\to +\\infty} \\dfrac{\\ln x}{x} = 0$.

La droite $(\\Delta) : y = 2x - 1$ est **asymptote oblique** à la courbe de $f$ en $+\\infty$.

**4.** Pour tout $x \\in [1\\,;\\,+\\infty[$ : $x \\geq 1 \\Rightarrow x > 0$ (dénominateur positif) et $\\ln x \\geq 0$ (logarithme positif pour $x \\geq 1$). Donc $\\dfrac{\\ln x}{x} \\geq 0$.

Par conséquent : $f(x) - (2x-1) = -\\dfrac{\\ln x}{x} \\leq 0$.

La courbe de $f$ est **en dessous** de $(\\Delta)$ sur $[1\\,;\\,+\\infty[$ (avec contact au seul point $x = 1$ où $\\ln 1 = 0$).

*[Barème type BAC — Q1 : produit ln x × 1/x 0,5 pt + limite → +∞ + interprétation asymptote x=0 1 pt = 1,5 pt · Q2 : croissance comparée + conclusion 1 pt · Q3 : différence calculée 0,5 pt + limite → 0 + conclusion rédigée 1 pt = 1,5 pt · Q4 : signe ln x ≥ 0 + signe x > 0 + conclusion position 1,5 pt — Total : 5,5 pts]*`,
        },
        {
          type: 'figure',
          id: 'fig-salle-3',
          src: '/images/t1/fig_Salle_3.png',
          legende: `Contact en $x=1$, courbe sous l'asymptote $(\\Delta):y=2x-1$.`,
          alt: `Contact en $x=1$, courbe sous l'asymptote $(\\Delta):y=2x-1$.`,
        },
      ],
    },
    {
      id: 's4',
      titre: `🎯 Conclusion de la Salle d'Entraînement`,
      blocs: [
        {
          type: 'text',
          id: 'b32',
          contenu: `Champion(ne), si tu as parcouru ces 10 exercices avec rigueur, ton arsenal est complet. Tu as :

- Levé des $\\dfrac{0}{0}$ avec l'identité du cube et la factorisation classique.
- Brisé des racines à coup d'expressions conjuguées.
- Dompté les croissances comparées dans plusieurs configurations (logarithme/puissance, exponentielle/puissance).
- Appliqué le Théorème de la Bijection pour démontrer l'existence et l'unicité d'une solution.
- Maîtrisé les asymptotes verticales, horizontales et obliques + position relative.

Sur ta copie du jour J, le réflexe gagnant est toujours le même : **diagnostic au brouillon → choix d'outil → rédaction propre avec vocabulaire officiel**. Les 8 lignes de la Check-list du Correcteur sont ta boussole.`,
        },
        {
          type: 'text',
          id: 'b33',
          contenu: `<auto_evaluation>

✅ **AUTO-ÉVALUATION — Salle d'Entraînement**

*Coche chaque case honnêtement après avoir refait au moins 5 exercices sans regarder le corrigé.*

☐ J'ai posé un diagnostic correct (FI identifiée + méthode choisie) avant tout calcul, pour chaque exercice.

☐ J'ai annoncé explicitement la forme indéterminée avant de la lever.

☐ J'ai utilisé le vocabulaire officiel (limite de référence, croissance comparée, Théorème de la Bijection, asymptote verticale/horizontale/oblique, position relative) dans chacune de mes rédactions.

☐ J'ai supprimé le symbole « lim » dès que les $x$ ont été remplacés par des chiffres.

☐ J'ai rédigé une phrase de conclusion complète (et pas juste lâché une équation) à chaque interprétation graphique.

🟢 **5/5** → Tu es prêt(e) pour le combat du BAC, Champion(ne). Plus rien à craindre. Le coin est gâté pour de bon.

🟡 **3 ou 4** → Encore quelques détails de rédaction à polir. Reprends 2 ou 3 exercices que tu as ratés, et compare ta rédaction avec la Copie Parfaite ligne à ligne.

🔴 **0 à 2** → Pas de panique. Reprends d'abord les modules dont les exercices t'ont posé problème (la Check-list du Correcteur t'indique où concentrer tes efforts), puis reviens en salle d'entraînement la semaine suivante.`,
        },
      ],
    },
  ],
};
