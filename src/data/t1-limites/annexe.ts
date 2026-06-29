import { Chapitre } from '../../types/course';

export const chapitreAnnexe: Chapitre = {
  id: 't1-annexe',
  titre: `Annexes — Formulaire et Ressources`,
  duree: 15,
  niveau: 'BASE',
  xpGain: 10,
  sections: [
    {
      id: 's1',
      titre: `Introduction`,
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu: `Assieds-toi deux minutes, Champion(ne). On a traversé tout ce premier tome, brisé des murs de calculs complexes, débusqué des asymptotes et recousu des courbes point par point. Mais avant de t'installer face à l'épreuve réelle, il te faut une ceinture de munitions bien garnie.

Ces annexes, c'est ton arsenal de secours. Pas de bavardage inutile, juste le concentré pur et solide de ce qui sauve ta copie le jour J. Garde ce bloc sous les yeux pendant tes révisions intensives.`,
        },
      ],
    },
    {
      id: 's2',
      titre: `A. LE FORMULAIRE COMPLET 📌`,
      blocs: [
        {
          type: 'text',
          id: 'b2',
          contenu: `Voici regroupées toutes les Règles d'Or du tome. Ce sont les formules exactes que tu dois avoir gravées dans la tête avant d'entrer en salle de composition.`,
        },
        {
          type: 'text',
          id: 'b3',
          contenu: `**① L'identité reine des factorisations**

$$a^2 - b^2 = (a - b)(a + b)$$

Ton outil de base pour faire apparaître et simplifier le bloc qui crée un $\\dfrac{0}{0}$ au Module 2. Retiens aussi son extension au cube :
$$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$$`,
        },
        {
          type: 'text',
          id: 'b4',
          contenu: `**② La technique de l'expression conjuguée**

$$\\left(\\sqrt{A} - B\\right)\\left(\\sqrt{A} + B\\right) = A - B^2$$

L'arme incontournable du Module 3 pour faire sauter le cadenas des racines carrées sans modifier la valeur de ta fraction. **Règle d'équilibre :** tout ce qu'on fait en haut, on le fait aussi en bas.`,
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `**③ Les limites de référence des croissances comparées**

*Au voisinage de $+\\infty$ :*
$$\\lim_{x \\to +\\infty} \\dfrac{e^x}{x^n} = +\\infty \\qquad \\text{et} \\qquad \\lim_{x \\to +\\infty} \\dfrac{\\ln x}{x^n} = 0 \\qquad (\\text{pour tout entier } n \\ge 1)$$

*Au voisinage de $-\\infty$ :*
$$\\lim_{x \\to -\\infty} x^n e^x = 0$$

*En $0^+$ (limites de contact) :*
$$\\lim_{x \\to 0^+} x^n \\ln x = 0$$

*Limites du nombre dérivé :*
$$\\lim_{x \\to 0} \\dfrac{e^x - 1}{x} = 1 \\qquad \\text{et} \\qquad \\lim_{x \\to 1} \\dfrac{\\ln x}{x - 1} = 1$$

Retiens la hiérarchie asymptotique du Module 4 : $\\ln x \\ll x^n \\ll e^x$.`,
        },
        {
          type: 'text',
          id: 'b6',
          contenu: `**④ Le test de la continuité en un point**

Une fonction $f$ est continue en $x_0$ si et seulement si :
$$\\lim_{x \\to x_0} f(x) = f(x_0)$$

La direction visée par la courbe et la valeur réellement prise en ce point ne font qu'un.`,
        },
        {
          type: 'text',
          id: 'b7',
          contenu: `**⑤ Le protocole du Théorème de la Bijection** (corollaire du TVI)

Pour prouver que l'équation $f(x) = 0$ admet une **unique** solution $\\alpha$ sur $[a\\,;\\,b]$, valide trois critères sur ta copie :

1. $f$ est **continue** sur $[a\\,;\\,b]$ (par théorème admis : polynôme, rationnelle, exp, ln, racine).
2. $f$ est **strictement monotone** (uniquement croissante ou uniquement décroissante) sur $[a\\,;\\,b]$.
3. $f(a) \\times f(b) < 0$ (l'image change de signe entre les deux bornes).`,
        },
        {
          type: 'text',
          id: 'b8',
          contenu: `**⑥ Le prolongement par continuité**

Si $f$ n'est pas définie en $x_0$ mais que $\\displaystyle\\lim_{x \\to x_0} f(x) = L$ avec $L \\in \\mathbb{R}$, tu peux boucher le trou proprement en définissant :
$$g(x) = f(x) \\text{ pour } x \\neq x_0, \\qquad g(x_0) = L$$

Si la limite donne $\\pm\\infty$, le prolongement est **impossible** — ne pas conclure.`,
        },
        {
          type: 'text',
          id: 'b9',
          contenu: `**⑦ Les repères des 3 asymptotes graphiques**

*Asymptote verticale.* Si $\\displaystyle\\lim_{x \\to x_0} f(x) = \\pm\\infty$, la droite d'équation $x = x_0$ est asymptote verticale.

*Asymptote horizontale.* Si $\\displaystyle\\lim_{x \\to \\pm\\infty} f(x) = L$ ($L \\in \\mathbb{R}$), la droite d'équation $y = L$ est asymptote horizontale en $\\pm\\infty$.

*Asymptote oblique.* Si $\\displaystyle\\lim_{x \\to \\pm\\infty} [\\,f(x) - (ax+b)\\,] = 0$, la droite $y = ax + b$ est asymptote oblique en $\\pm\\infty$.

**Règle mnémotechnique :** le nombre fixe sur l'axe $x$ → équation en $x$ (mur vertical). Le nombre fixe en résultat → équation en $y$ (sol horizontal).`,
        },
        {
          type: 'text',
          id: 'b10',
          contenu: `**⑧ Le théorème d'encadrement (Théorème des Gendarmes)**

Pour tout $x$ dans un voisinage d'une borne $a$ (fini ou infini) :
$$g(x) \\leq f(x) \\leq h(x)$$

Si $\\displaystyle\\lim_{x \\to a} g(x) = \\displaystyle\\lim_{x \\to a} h(x) = L$, alors $\\displaystyle\\lim_{x \\to a} f(x) = L$.

Encadrement de base à connaître : $-1 \\leq \\sin x \\leq 1$ et $-1 \\leq \\cos x \\leq 1$ pour tout $x \\in \\mathbb{R}$.`,
        },
        {
          type: 'text',
          id: 'b11',
          contenu: `**⑨ L'algorithme de dichotomie (Python)**

Pour encadrer la solution $\\alpha$ d'une équation $f(x) = 0$ à $10^{-p}$ près, après avoir vérifié les conditions du Théorème de la Bijection sur $[a\\,;\\,b]$ :

\`\`\`python
def dichotomie(f, a, b, p):
    while (b - a) > 10**(-p):
        m = (a + b) / 2
        if f(a) * f(m) <= 0:
            b = m
        else:
            a = m
    return a, b
\`\`\`

C'est la traduction informatique exacte du TVI.`,
        },
      ],
    },
    {
      id: 's3',
      titre: `B. LA CHARTE TYPOGRAPHIQUE DE LA COPIE BAC 📐`,
      blocs: [
        {
          type: 'text',
          id: 'b12',
          contenu: `Ces règles d'écriture sont scrutées par le correcteur. Une notation hors norme = des points perdus.`,
        },
        {
          type: 'table',
          id: 'tbl13',
          headers: [`Élément`, `Notation correcte (BAC ivoirien)`, `Notation BANNIE`],
          rows: [
            [`Intervalle ouvert`],
            [`, `],
            [`Intervalle fermé`],
            [`Intervalle infini`],
            [`, `],
            [`Ensemble de définition (Copie Parfaite)`],
            [`, `],
            [`Symboles d'ensembles`, `ℝ, ℕ, ℤ, ℚ, ℂ (blackboard bold)`, `R, N, Z, Q, C (majuscule simple)`],
            [`Séparateur décimal`, `3,14 (virgule)`, `3.14 (point)`],
            [`Séparateur de couples / coordonnées / bornes`],
            [`, `],
            [`Espacement avant ; : ! ?`, `espace insécable`, `espace simple ou aucun espace`],
            [`lim`, `lim en romain (jamais italique)`, `*lim*, _lim_`],
            [`Limite à gauche / droite`, `x → a⁻  /  x → a⁺`, `x → a−0 ou x → a+0`],
          ],
        },
      ],
    },
    {
      id: 's4',
      titre: `C. LE VOCABULAIRE OFFICIEL DU BAC 📘`,
      blocs: [
        {
          type: 'text',
          id: 'b14',
          contenu: `Voici les termes officiels à placer sur ta copie pour chaque module. Le correcteur vérifie systématiquement leur présence.`,
        },
        {
          type: 'table',
          id: 'tbl15',
          headers: [`Module`, `Vocabulaire à placer sur la copie`, `Phrase modèle`],
          rows: [
            [`M1 — Limite`, `Limite finie, limite infinie, limite à gauche (x → a⁻), limite à droite (x → a⁺)`, `« lim_{x→a} f(x) = L signifie que f(x) peut être rendu aussi proche que l'on veut de L. »`],
            [`M2 — Formes indéterminées`, `Forme indéterminée (FI), lever l'indétermination, factoriser par (x-a), terme de plus haut degré`, `« Cette limite présente la forme indéterminée 0/0. »`],
            [`M3 — Conjuguée`, `Quantité conjuguée, multiplier par la quantité conjuguée, identité remarquable a²−b², maintenir l'équilibre de la fraction`, `« Multiplions le numérateur et le dénominateur par la quantité conjuguée (√A + B). »`],
            [`M4 — Croissances comparées`, `Croissance comparée, l'emporter sur, être négligeable devant, limite de référence`, `« Par croissance comparée (limite de référence ①), eˣ/xⁿ → +∞. »`],
            [`M5 — Continuité`, `Continue en a, continue sur un intervalle, point de raccordement, prolongement par continuité, théorème admis`, `« Par théorème admis, les fonctions polynômes sont continues sur ℝ. »`],
            [`M6 — TVI / Bijection`, `TVI, Théorème de la Bijection (corollaire du TVI), réalise une bijection de I sur J, stricte monotonie, prolongement par continuité`],
            [`M7 — Asymptotes`, `Asymptote verticale d'équation x = x₀, asymptote horizontale d'équation y = b, asymptote oblique d'équation y = mx + p, branche parabolique de direction (Ox) ou (Oy), position relative`, `« La droite d'équation y = 2 est asymptote horizontale à 𝓒f en +∞. »`],
          ],
        },
      ],
    },
    {
      id: 's5',
      titre: `D. LE CIMETIÈRE DES POINTS ⚠️`,
      blocs: [
        {
          type: 'text',
          id: 'b16',
          contenu: `J'ai rassemblé les pires tics d'écriture et les erreurs d'inattention qui font perdre des points bêtement au BAC. Regarde bien ce qu'il ne faut pas faire et retiens la correction.`,
        },
        {
          type: 'table',
          id: 'tbl17',
          headers: [`Erreur classique constatée sur les copies`, `La correction du Grand Frère pour sauver tes points`],
          rows: [
            [`Laisser traîner le symbole « lim » devant une expression où les x ont déjà été remplacés par des nombres.`, `Le mot « lim » disparaît instantanément de ta feuille dès que tu passes de la formule littérale aux calculs numériques.`],
            [`Affirmer que la forme indéterminée 0/0 est égale à 0 ou à 1.`, `C'est un piège majeur. 0/0 signifie que tu as percuté un mur. Tu dois utiliser une méthode algébrique pour débloquer le calcul.`],
            [`Multiplier le numérateur par la quantité conjuguée mais oublier de recopier ce même bloc au dénominateur.`, `Point de vigilance obligatoire : pour maintenir l'égalité d'une fraction, chaque modification apportée en haut doit être équilibrée en bas.`],
            [`Développer tout le bloc du dénominateur après avoir appliqué une quantité conjuguée au numérateur.`, `Laisse le dénominateur sagement factorisé. C'est l'unique moyen de repérer et de simplifier le terme commun qui crée l'indétermination.`],
            [`Invoquer les règles des croissances comparées pour calculer une limite en un point ordinaire, comme lorsque x → 3.`, `C'est un contre-sens. La hiérarchie de force entre l'exponentielle, la puissance et le logarithme s'applique uniquement à l'infini ou en 0⁺.`],
            [`Oublier d'écrire le mot « strictement » et mentionner simplement que la fonction est « monotone » pour valider le Théorème de la Bijection.`, `Si la fonction n'est pas strictement monotone, la courbe peut stagner ou rebrousser chemin. Le mot « strictement » est incontournable pour l'unicité.`],
            [`Rédiger sa conclusion géométrique en écrivant de manière incomplète : « Donc x = 2 est l'asymptote de la fonction ».`, `Le correcteur pénalise ce manque de rigueur. Écris : « La droite d'équation x = 2 est une asymptote verticale à la courbe ».`],
            [`Écrire que eˣ tend vers +∞ en −∞ par réflexe de panique.`, `En −∞, l'exponentielle s'écrase sur l'axe des abscisses et tend vers 0. Ne confonds jamais les deux comportements de la même fonction.`],
            [`Conclure au prolongement par continuité alors que la limite au point interdit donne ±∞.`, `Un trou infini ne se rebouche pas. Le prolongement n'est possible que si la limite est un réel fini L. Toujours vérifier avant de conclure.`],
            [`,
            `],
            [`Utiliser le point décimal (3.14) au lieu de la virgule décimale (3,14).`, `Norme française stricte : virgule pour les décimales, point-virgule pour les couples et les bornes d'intervalle.`],
          ],
        },
      ],
    },
    {
      id: 's6',
      titre: `E. LA CARTE DE COUVERTURE BAC 🎯`,
      blocs: [
        {
          type: 'text',
          id: 'b18',
          contenu: `Pour que tu prennes conscience du chemin parcouru, voici la carte exacte des compétences blindées tout au long de ce premier volume. Chaque exercice-type correspond directement à une question incontournable des sujets officiels du Baccalauréat Série D en Côte d'Ivoire.`,
        },
        {
          type: 'table',
          id: 'tbl19',
          headers: [`Module de formation`, `Situations et questions BAC couvertes`, `Exercices-Types du module`, `Exercices Salle d'Entraînement`],
          rows: [
            [`Module 1 : Concept de base`, `Calcul direct par substitution et nettoyage des valeurs interdites d'un ensemble de définition.`, `2`, `—`],
            [`Module 2 : Formes indéterminées`, `Levée du 0/0 par factorisation · Levée du ∞/∞ par terme dominant · Forme +∞−∞ polynomiale.`, `3`, `Ex 1`],
            [`Module 3 : L'expression conjuguée`, `Levée du 0/0 avec racine carrée · Levée du +∞−∞ avec racine carrée par équilibrage des fractions.`, `2`, `Ex 2`],
            [`Module 4 : Croissances comparées`, `Quotient eˣ/xⁿ et ln x/xⁿ · Forme +∞−∞ mixte par factorisation du terme dominant · Théorème des Gendarmes.`, `3`, `Ex 3, 4, 5, 8`],
            [`Module 5 : La continuité`, `Analyse d'une fonction définie par morceaux · Validation de la connexion de la courbe en un point.`, `6`, `Ex 1, 3, 4, 8`],
            [`Module 6 : TVI, Bijection et Prolongement`, `Démonstration de l'existence d'une racine unique α (continuité + stricte monotonie + changement de signe) · Prolongement par continuité · Dichotomie en Python.`, `2`, `Ex 6`],
            [`Module 7 : Les asymptotes`, `Asymptotes verticale, horizontale et oblique · Étude de position relative · Branche parabolique.`, `2`, `Ex 1, 2, 5, 7, 9, 10`],
            [`TOTAL`, `Maîtrise complète du bloc « Limites et Continuité » de l'épreuve de mathématiques Série D.`, `20`, `10`],
          ],
        },
        {
          type: 'text',
          id: 'b20',
          contenu: `Voilà tes armes, Champion(ne). Revois-les régulièrement, pratique sur ton cahier de recherche, et prépare-toi à faire parler la poudre.`,
        },
      ],
    },
    {
      id: 's7',
      titre: `F. LES 10 RÉFLEXES DU LIMITEUR 🚀`,
      blocs: [
        {
          type: 'text',
          id: 'b21',
          contenu: `*À relire 5 minutes avant l'épreuve, Champion(ne). C'est ta check-list de survie.*`,
        },
        {
          type: 'table',
          id: 'tbl22',
          headers: [`#`, `Le réflexe`, `Pourquoi c'est important`],
          rows: [
            [`1`, `Lire le sujet en entier avant d'écrire`, `5 minutes pour parcourir tout le sujet avant de toucher ton stylo. Le correcteur cache souvent la réponse d'une limite trois questions plus loin, sous forme d'asymptote à vérifier.`],
            [`2`, `Tester la substitution directe en premier`, `Sur ton brouillon, remplace x par sa valeur. Si le résultat est un réel propre, tu rédiges directement. C'est le geste le plus rapide et il te fait gagner du temps sur les questions faciles.`],
            [`3`, `Nommer la forme indéterminée avant de la lever`, `Écris noir sur blanc « Cette limite présente la forme indéterminée 0/0 » sur ta copie. Le correcteur accorde des points pour cette identification — c'est un cadeau, ne le laisse pas filer.`],
            [`4`, `Effacer le symbole « lim » dès que les chiffres remplacent les lettres`, `Garder « lim » devant des nombres, c'est un contresens mathématique. Le correcteur le repère immédiatement et ça te coûte des points de rigueur.`],
            [`5`, `Multiplier en haut ET en bas quand tu utilises la quantité conjuguée`, `C'est la balance du marché d'Adjamé : tu ne touches pas à un plateau sans toucher à l'autre. Sinon tu modifies la valeur de ta fraction et tout ton calcul est faux.`],
            [`6`, `Emballer toute valeur négative dans des parenthèses`, `$(-2)^2 = 4$, mais $-2^2 = -4$. Cette confusion fait plus de dégâts au BAC que n'importe quelle forme indéterminée. Un réflexe simple qui sauve des points.`],
            [`7`, `Respecter la hiérarchie des croissances comparées`, `À l'infini : $\\\\ln x \\\\ll x^n \\\\ll e^x$. Si tu as un doute, relis la Règle d'Or du Module 4. Le logarithme ne gagne jamais.`],
            [`8`, `Écrire « strictement monotone » en toutes lettres pour le Théorème de la Bijection`, `L'oubli du mot « strictement » devant « monotone » dans une preuve d'unicité fait perdre tous les points d'unicité. Un seul mot manquant, des points envolés.`],
            [`9`, `Rédiger les conclusions d'asymptotes en phrases complètes`, `Jamais juste « x = 2 ». Toujours : « La droite d'équation x = 2 est asymptote verticale à la courbe de f ». La phrase complète sécurise les points complets.`],
            [`10`, `Vérifier la conformité typographique avant de rendre la copie`],
          ],
        },
        {
          type: 'text',
          id: 'b23',
          contenu: `*Mémorise ces 10 réflexes et tu seras blindé(e) pour la partie Limites du BAC. On va gâter le coin, Champion(ne) !*`,
        },
      ],
    },
  ],
};
