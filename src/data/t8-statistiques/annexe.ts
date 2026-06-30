import { Chapitre } from '../../types/course';

export const chapitreAnnexe: Chapitre = {
  id: 't8-annexe',
  titre: `Annexes — Formulaire & Réflexes BAC`,
  duree: 12,
  niveau: 'BASE',
  xpGain: 10,
  sections: [
    {
      id: 's-a',
      titre: `Annexe A — Formulaire complet du Tome 8`,
      blocs: [
        {
          type: 'text',
          id: 'b-a-intro',
          contenu: `Voici ton arsenal complet. Aucune de ces formules ne doit t'échapper.`,
        },
        {
          type: 'table',
          id: 'tbl-formulaire',
          headers: [`Grandeur`, `Formule`, `À retenir`],
          rows: [
            [`Moyennes`, `$\\bar{x} = \\dfrac{1}{n}\\sum x_i$ ; $\\bar{y} = \\dfrac{1}{n}\\sum y_i$`, `Donnent les coordonnées de $G$.`],
            [`Variances`, `$V(X) = \\dfrac{1}{n}\\sum x_i^2 - \\bar{x}^2$`, `Soustraire le carré de la moyenne à la fin.`],
            [`Écarts-types`, `$\\sigma_X = \\sqrt{V(X)}$ ; $\\sigma_Y = \\sqrt{V(Y)}$`, `Interviennent dans $r$.`],
            [`Covariance`, `$\\text{cov}(X,Y) = \\dfrac{1}{n}\\sum x_i y_i - \\bar{x}\\bar{y}$`, `Positive = même sens.`],
            [`Corrélation`, `$r = \\dfrac{\\text{cov}(X,Y)}{\\sigma_X \\sigma_Y}$`, `Toujours $-1 \\leqslant r \\leqslant 1$.`],
            [`Droite $Y$ en $X$`, `$y = ax + b$ ; $a = \\dfrac{\\text{cov}(X,Y)}{V(X)}$ ; $b = \\bar{y} - a\\bar{x}$`, `Dénominateur $V(X)$.`],
            [`Droite $X$ en $Y$`, `$x = a'y + b'$ ; $a' = \\dfrac{\\text{cov}(X,Y)}{V(Y)}$`, `Dénominateur $V(Y)$.`],
            [`Droite de Mayer`, `$a = \\dfrac{\\bar{y}_2 - \\bar{y}_1}{\\bar{x}_2 - \\bar{x}_1}$`, `Passe par $G_1$, $G_2$ et $G$.`],
            [`Changement de variable`, `$Z = \\ln y$ ; $y = e^{ax+b}$`, `Redresse un nuage courbe.`],
          ],
        },
      ],
    },
    {
      id: 's-b',
      titre: `Annexe B — Charte typographique du BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b-b-intro',
          contenu: `La forme compte autant que le fond. Le correcteur repère un(e) Champion(ne) à sa rigueur d'écriture.`,
        },
        {
          type: 'table',
          id: 'tbl-charte',
          headers: [`Règle`, `Exemple correct`],
          rows: [
            [`Intervalles avec crochets`, `$[1 ; 7]$ ; $]0 ; +\\infty[$`],
            [`Virgule décimale (pas de point)`, `$3{,}14$ ; $-0{,}55$`],
            [`Coordonnées avec point-virgule`, `$G(\\bar{x} ; \\bar{y})$ ; $A(3 ; 5)$`],
            [`Encadrement de $r$`, `$-1 \\leqslant r \\leqslant 1$`],
            [`Fractions en $\\dfrac{}{}$`, `$a = \\dfrac{\\text{cov}(X,Y)}{V(X)}$`],
            [`Somme avec indices`, `$\\displaystyle\\sum_{i=1}^n x_i$`],
            [`Phrase complète de prévision`, `« sous réserve que la tendance se maintienne »`],
          ],
        },
      ],
    },
    {
      id: 's-c',
      titre: `Annexe C — Vocabulaire officiel du BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b-c-intro',
          contenu: `Les mots exacts à placer sur ta copie, module par module.`,
        },
        {
          type: 'table',
          id: 'tbl-vocab',
          headers: [`Notion`, `Termes officiels à employer`],
          rows: [
            [`M1`, `Série statistique double, nuage de points, point moyen $G$, centre de gravité.`],
            [`M2`, `Covariance, écart-type, coefficient de corrélation linéaire, corrélation forte/faible.`],
            [`M3`, `Droite des moindres carrés, ajustement de $Y$ en $X$, de $X$ en $Y$, intersection en $G$.`],
            [`M4`, `Droite de Mayer, points moyens partiels $G_1$/$G_2$, groupes de même effectif.`],
            [`M5`, `Interpolation, extrapolation, ajustement justifié, réserve.`],
            [`M6`, `Changement de variable, série transformée, ajustement affine, retour à la variable initiale.`],
          ],
        },
      ],
    },
    {
      id: 's-d',
      titre: `Annexe D — Les 10 réflexes BAC`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-reflexes10',
          headers: [`N°`, `Le réflexe`],
          rows: [
            [`1`, `Tracer le tableau à $5$ colonnes avant tout calcul.`],
            [`2`, `Calculer $\\bar{x}$ et $\\bar{y}$ d'abord, et les vérifier deux fois.`],
            [`3`, `Conclure le point moyen par la phrase $G(\\bar{x} ; \\bar{y})$.`],
            [`4`, `Soustraire le carré de la moyenne à la fin de $V(X)$.`],
            [`5`, `Mettre les écarts-types $\\sigma$ (avec racine) au dénominateur de $r$.`],
            [`6`, `Vérifier que $-1 \\leqslant r \\leqslant 1$.`],
            [`7`, `Choisir $V(X)$ pour $Y$ en $X$, $V(Y)$ pour $X$ en $Y$.`],
            [`8`, `Contrôler que la droite passe par $G$ ($a\\bar{x} + b = \\bar{y}$).`],
            [`9`, `Préciser interpolation ou extrapolation.`],
            [`10`, `Ajouter la réserve pour toute extrapolation.`],
          ],
        },
      ],
    },
    {
      id: 's-e',
      titre: `Annexe E — Le cimetière des points`,
      blocs: [
        {
          type: 'text',
          id: 'b-e-intro',
          contenu: `Huit erreurs classiques qui coûtent des points chaque année. Ne tombe dans aucun de ces panneaux.`,
        },
        {
          type: 'table',
          id: 'tbl-cimetiere',
          headers: [`L'erreur classique`, `La parade EDUCTOME`],
          rows: [
            [`1. Inverser $\\bar{x}$ et $\\bar{y}$`, `Étiquette tes colonnes, recopie $G$ avec soin.`],
            [`2. Trouver $|r| > 1$`, `Impossible : tu as oublié une racine ou fait une erreur de signe.`],
            [`3. $a = \\dfrac{\\text{cov}(X,Y)}{V(Y)}$ pour $Y$ en $X$`, `C'est $V(X)$ au dénominateur. Lis le sens demandé.`],
            [`4. Oublier les carrés dans $V(X)$`, `On divise la somme des carrés, ENSUITE on soustrait $\\bar{x}^2$.`],
            [`5. Tracer la droite au hasard`, `Elle DOIT passer par $G$. Fais le test algébrique.`],
            [`6. Extrapoler en silence`, `Toujours la mention « sous réserve que la tendance se maintienne ».`],
            [`7. Confondre variance et écart-type`, `Pour $r$, on utilise $\\sigma$ (avec racine), pas $V$.`],
            [`8. Oublier le retour $y = e^Z$`, `Après un changement de variable, reviens à la variable initiale.`],
          ],
        },
      ],
    },
    {
      id: 's-f',
      titre: `Annexe F — Carte de couverture BAC`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-couverture',
          headers: [`Partie du programme`, `Fréquence BAC`, `Question attendue`],
          rows: [
            [`Nuage & point moyen`, `Très haute`, `Tracer le repère et placer $G$.`],
            [`Covariance & corrélation`, `Très haute`, `Calcul de cov et $r$, commentaire du lien.`],
            [`Droite des moindres carrés`, `Très haute`, `Coefficients $a$ et $b$, les deux droites.`],
            [`Droites de Mayer`, `Moyenne`, `Construction par deux groupes.`],
            [`Interpolation / extrapolation`, `Très haute`, `Prévision et réserve.`],
            [`Changement de variable`, `Moyenne à haute`, `Pose $Z = \\ln y$, ajuste, reviens à $y$.`],
          ],
        },
      ],
    },
  ],
};
