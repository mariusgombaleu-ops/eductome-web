import { Chapitre } from '../../types/course';

export const chapitreM2: Chapitre = {
  id: 't8-m2',
  titre: `Module 2 — Covariance et Corrélation`,
  duree: 25,
  niveau: 'MOYEN',
  xpGain: 25,
  objectifs: [
    `Calculer la covariance $\\text{cov}(X,Y)$ sans te tromper de soustraction`,
    `Déterminer le coefficient de corrélation linéaire $r$`,
    `Énoncer la signification de $r$ avec le vocabulaire officiel du BAC`,
    `Interpréter $r$ pour juger la force et le sens du lien entre $X$ et $Y$`,
    `Repérer immédiatement un résultat impossible ($|r| > 1$)`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, au Module 1 j'ai tracé mon nuage. Mais à l'œil, je ne sais pas dire si mes points sont « bien alignés » ou « éparpillés ». Comment je mets un vrai chiffre là-dessus ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Excellente question, Champion(ne) ! C'est exactement le travail du Module 2. On va fabriquer deux outils : la covariance, qui dit si les deux variables montent ensemble ou en sens contraire, et le coefficient $r$, un nombre entre $-1$ et $1$ qui mesure la force de l'alignement. Avec $r$, fini le « à l'œil » : tu auras une preuve chiffrée.`,
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
          contenu: `Pense aux chauffeurs de woro-woro qui sillonnent Yopougon du matin au soir. Chaque soir, un chauffeur note deux choses : le nombre de trajets qu'il a faits dans la journée, et la recette qu'il a ramenée à la maison.

Intuitivement, tu sens bien que plus il fait de trajets, plus sa recette grimpe. Les deux variables « montent ensemble » : c'est un lien dans le **même sens**. À l'inverse, prends le prix de l'essence et le bénéfice du chauffeur : quand le prix de l'essence augmente, le bénéfice a tendance à baisser. Là, les variables évoluent en **sens contraire**.

Maintenant, une nuance importante. Pour certains chauffeurs très réguliers, la relation est presque parfaite : connais le nombre de trajets, tu devines la recette à $100$ francs près. Pour d'autres, plus brouillons, le lien existe mais reste flou. La covariance va te dire le *sens* du lien ; le coefficient $r$ va te dire sa *force*, sur une échelle nette qui ne dépasse jamais $1$.`,
        },
        {
          type: 'figure',
          id: 'fig-m2-1',
          src: '/images/t8/fig_M2_1.png',
          legende: `La covariance donne le SENS du lien entre $X$ et $Y$.`,
          alt: `Trois nuages : covariance positive, négative et nulle.`,
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
          contenu: `On traduit l'histoire du woro-woro en symboles.

- Trajets et recette montent ensemble → $\\text{cov}(X,Y) > 0$
- Ils évoluent en sens contraire → $\\text{cov}(X,Y) < 0$
- Lien quasi parfait → $|r|$ proche de $1$
- Lien flou, brouillon → $|r|$ proche de $0$`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène du woro-woro`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Trajets et recette montent ensemble`, `$\\text{cov}(X,Y) > 0$`, `Lien dans le même sens`],
            [`Essence monte, bénéfice baisse`, `$\\text{cov}(X,Y) < 0$`, `Lien en sens contraire`],
            [`Chauffeur très régulier`, `$|r|$ proche de $1$`, `Lien fort, presque une droite`],
            [`Chauffeur brouillon`, `$|r|$ proche de $0$`, `Lien faible, nuage dispersé`],
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
          contenu: `Champion(ne), tu sens le lien avec l'image du woro-woro. Place maintenant les mots exacts sur ta copie.

**Définition formelle.** La **covariance** de la série double $(x_i ; y_i)$ est :
$$\\text{cov}(X,Y) = \\dfrac{1}{n} \\sum_{i=1}^n x_i y_i - \\bar{x}\\,\\bar{y}$$

Le **coefficient de corrélation linéaire** est $r = \\dfrac{\\text{cov}(X,Y)}{\\sigma_X \\, \\sigma_Y}$, avec $\\sigma_X = \\sqrt{V(X)}$ et $\\sigma_Y = \\sqrt{V(Y)}$. On a toujours $-1 \\leqslant r \\leqslant 1$.

**En langage courant.** La covariance dit le sens du lien ; $r$ mesure à quel point les points sont alignés sur une droite.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Covariance** — moyenne des produits moins produit des moyennes.
- **Écart-type** $\\sigma$ — racine carrée de la variance.
- **Coefficient de corrélation linéaire** $r$ — nombre de $[-1 ; 1]$ mesurant la force du lien.
- **Corrélation forte / faible** — selon que $|r|$ est proche de $1$ ou de $0$.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend une phrase d'interprétation du type *« Comme $|r| \\geqslant 0{,}9$, il existe une forte corrélation linéaire entre $X$ et $Y$. »*. Un $r$ calculé sans phrase d'interprétation perd la moitié des points de la question.`,
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
          titre: `Règle d'Or — Covariance et corrélation`,
          contenu: `$$\\text{cov}(X,Y) = \\dfrac{1}{n} \\sum_{i=1}^n x_i y_i - \\bar{x}\\,\\bar{y} \\qquad r = \\dfrac{\\text{cov}(X,Y)}{\\sigma_X \\, \\sigma_Y}$$

**Propriété absolue.** Pour toute série, $-1 \\leqslant r \\leqslant 1$. Le signe de $r$ est celui de la covariance.`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `En pratique, on retient le seuil : si $|r| \\geqslant 0{,}9$ la corrélation est forte et un ajustement affine est justifié.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Ne confonds jamais corrélation et causalité. $r$ proche de $1$ ne veut pas dire que $X$ *cause* $Y$ : les deux peuvent évoluer ensemble à cause d'un troisième facteur invisible.`,
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
          contenu: `Le sujet parle de « covariance », de « coefficient de corrélation », de « force de la liaison » ou demande de « justifier un ajustement affine » : tu es ici. Le réflexe : le tableau à $5$ colonnes.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Si le sujet demande...`, `La méthode est...`],
          rows: [
            [`De calculer $\\text{cov}(X,Y)$`, `Utiliser la colonne des $x_i y_i$, faire sa moyenne, soustraire $\\bar{x}\\,\\bar{y}$.`],
            [`De calculer $r$`, `Calculer $V(X)$ et $V(Y)$, en déduire $\\sigma_X$ et $\\sigma_Y$, puis appliquer la formule de $r$.`],
            [`D'interpréter $r$`, `Regarder $|r|$ : si $\\geqslant 0{,}9$ corrélation forte ; signe $+$ même sens, signe $-$ sens contraire.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure`,
          contenu: `**Étape 1 — Le Tableau Roi.** Trace tes $5$ colonnes ($x_i$, $y_i$, $x_i^2$, $y_i^2$, $x_i y_i$) et fais la somme de chacune.

**Étape 2 — Les indicateurs.** Calcule $\\bar{x}$, $\\bar{y}$, puis $V(X)$, $V(Y)$ et $\\text{cov}(X,Y)$ à partir des sommes.

**Étape 3 — L'assemblage.** Divise la covariance par $\\sigma_X \\, \\sigma_Y$ pour obtenir $r$, et rédige la phrase d'interprétation.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `Ton $r$ vaut $1{,}5$ ? Arrête tout : $r$ est encadré entre $-1$ et $1$. Si tu sors de cette zone, tu as fait une erreur de signe ou oublié une racine carrée au dénominateur.`,
        },
        {
          type: 'figure',
          id: 'fig-m2-2',
          src: '/images/t8/fig_M2_2.png',
          legende: `Plus les points serrent la droite, plus $|r|$ est proche de $1$.`,
          alt: `Un nuage serré (r fort) contre un nuage dispersé (r faible).`,
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
            [`🟡 MOYEN`, `Calcul complet depuis un tableau`, `On donne les données brutes, on demande cov et $r$`, `Type 1`],
            [`🔴 BAC`, `Sommes / variances déjà fournies`, `On donne $V(X)$, $V(Y)$, cov et on demande $r$ + interprétation`, `Type 2`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 1 — Heures de révision et note.** On relève les heures de révision $x_i$ et la note obtenue $y_i$ de $4$ élèves : $x_i : 2 ; 4 ; 6 ; 8$ et $y_i : 3 ; 4 ; 7 ; 10$. **1.** Calcule $\\text{cov}(X,Y)$. **2.** Calcule $r$ (arrondi à $10^{-3}$).`,
          etapes: [
            { name: `Diagnostic`, contenu: `Données brutes : on dresse le tableau à $5$ colonnes puis on déroule les formules.` },
            { name: `Étape 1`, contenu: `Moyennes : $\\bar{x} = \\dfrac{20}{4} = 5$, $\\bar{y} = \\dfrac{24}{4} = 6$. Sommes : $\\sum x_i y_i = 144$, $\\sum x_i^2 = 120$, $\\sum y_i^2 = 174$.` },
            { name: `Étape 2`, contenu: `$\\text{cov}(X,Y) = \\dfrac{144}{4} - (5 \\times 6) = 36 - 30 = 6$. $V(X) = \\dfrac{120}{4} - 5^2 = 5$ ; $V(Y) = \\dfrac{174}{4} - 6^2 = 7{,}5$.` },
            { name: `Étape 3`, contenu: `$r = \\dfrac{6}{\\sqrt{5} \\times \\sqrt{7{,}5}} = \\dfrac{6}{\\sqrt{37{,}5}} \\approx 0{,}980$.` },
          ],
          reponse: `$\\text{cov}(X,Y) = 6$ et $r \\approx 0{,}980$ : forte corrélation linéaire positive.`,
          conseil: `Garde $\\sqrt{5}$ et $\\sqrt{7{,}5}$ sous forme exacte jusqu'au bout, n'arrondis qu'à la dernière ligne.`,
          piege: `N'oublie pas la racine carrée : au dénominateur de $r$, ce sont les écarts-types $\\sigma$, pas les variances $V$.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$\\text{cov}(X,Y) = \\dfrac{1}{4} \\displaystyle\\sum x_i y_i - \\bar{x}\\bar{y} = \\dfrac{144}{4} - 30 = 6$.
$\\sigma_X = \\sqrt{V(X)} = \\sqrt{5}$ ; $\\sigma_Y = \\sqrt{V(Y)} = \\sqrt{7{,}5}$.
$r = \\dfrac{\\text{cov}(X,Y)}{\\sigma_X \\sigma_Y} = \\dfrac{6}{\\sqrt{37{,}5}} \\approx 0{,}980$.
Comme $|r| \\geqslant 0{,}9$, il existe une forte corrélation linéaire positive entre $X$ et $Y$.

*[Barème type BAC : cov = 1 pt — variances = 0,5 pt — $r$ = 0,5 pt — interprétation = 0,5 pt — Total : 2,5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 2 — Interprétation avec données fournies.** Un sujet fournit directement $\\text{cov}(X,Y) = -5$, $V(X) = 4$ et $V(Y) = 9$. **1.** Calcule $r$. **2.** Interprète la liaison entre $X$ et $Y$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Les indicateurs sont donnés : on applique directement la formule de $r$, puis on rédige.` },
            { name: `Étape 1`, contenu: `$\\sigma_X = \\sqrt{4} = 2$, $\\sigma_Y = \\sqrt{9} = 3$, donc $r = \\dfrac{-5}{2 \\times 3} = \\dfrac{-5}{6} \\approx -0{,}833$.` },
            { name: `Étape 2`, contenu: `$|r| = 0{,}833$, proche de $1$ : forte corrélation. Le signe est négatif : quand $X$ augmente, $Y$ tend à diminuer.` },
          ],
          reponse: `$r \\approx -0{,}833$ : forte corrélation linéaire décroissante.`,
          conseil: `Quand le sujet donne $V(X)$ et $V(Y)$, ne perds pas de temps à recalculer : prends-les tels quels et n'oublie pas la racine.`,
          piege: `Le sujet te donne la variance, pas l'écart-type. Oublier la racine ici donnerait $r = -5/36$, totalement faux.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$r = \\dfrac{\\text{cov}(X,Y)}{\\sigma_X \\sigma_Y}$ avec $\\sigma_X = \\sqrt{V(X)} = 2$ et $\\sigma_Y = \\sqrt{V(Y)} = 3$.
Donc $r = \\dfrac{-5}{6} \\approx -0{,}833$.
$|r| = 0{,}833$ étant proche de $1$, la corrélation linéaire est forte ; le signe négatif indique une corrélation décroissante (quand $X$ augmente, $Y$ diminue).

*[Barème type BAC : $r$ = 1 pt — signe = 0,5 pt — interprétation force = 0,5 pt — Total : 2 pts]*`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-a',
          pf: `Attends Grand Frère, pour la variance c'est bien la moyenne des carrés moins le carré de la moyenne ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-b',
          gf: `Exactement, Champion(ne) ! Et ne soustrais jamais avant d'avoir fait ta division, sinon tout part de travers.`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Vise juste, surveille les bornes de $r$. Réponses finales seulement.

- **Exercice 1.** $\\text{cov}(X,Y) = 8$, $\\sigma_X = 4$, $\\sigma_Y = 2{,}5$. Calcule $r$. *(Réponse : $r = 0{,}8$.)*
- **Exercice 2.** Une série donne $r = 0{,}45$. Le lien est-il fort ? *(Réponse : non, $|r| < 0{,}9$, corrélation faible.)*
- **Exercice 3.** Un élève trouve $r = 1{,}2$. Que conclure ? *(Réponse : c'est impossible, $|r| \\leqslant 1$ : il a oublié une racine ou fait une erreur de signe.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m2',
          titre: `À retenir`,
          contenu: [
            `La **covariance** donne le sens du lien ; le **coefficient $r$** donne sa force.`,
            `📘 Vocabulaire officiel : covariance, écart-type $\\sigma$, coefficient de corrélation linéaire $r$, corrélation forte/faible.`,
            `Toujours $-1 \\leqslant r \\leqslant 1$ ; seuil de décision : $|r| \\geqslant 0{,}9$.`,
            `Un $r$ calculé doit **toujours** être suivi d'une phrase d'interprétation.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m2',
          titre: `Fil rouge`,
          contenu: `Tu sais maintenant que tes points sont solidement liés (ou non). Si le lien est fort, on peut tracer la droite qui passe au plus près d'eux et s'en servir pour prédire. C'est l'objet du Module 3 : la droite des moindres carrés.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m2',
          titre: `Auto-évaluation — Module 2`,
          contenu: [
            `Je sais calculer une covariance avec $\\dfrac{1}{n}\\sum x_i y_i - \\bar{x}\\bar{y}$.`,
            `Je me souviens d'utiliser les écarts-types $\\sigma$ (avec racine) au dénominateur de $r$.`,
            `J'emploie le vocabulaire officiel (covariance, écart-type, corrélation linéaire) dans mon interprétation.`,
            `Je sais interpréter $r$ : fort si proche de $\\pm 1$, faible si proche de $0$.`,
            `Je sais qu'un $|r| > 1$ est impossible et signale une erreur.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m2',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Cap sur le Module 3, on trace la droite.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et le ⑤ La Descente.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel.`,
          ],
        },
      ],
    },
  ],
};
