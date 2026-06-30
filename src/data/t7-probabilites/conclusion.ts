import { Chapitre } from '../../types/course';

export const chapitreConclusion: Chapitre = {
  id: 't7-conclusion',
  titre: `Conclusion du Tome 7`,
  duree: 6,
  niveau: 'BASE',
  xpGain: 10,
  sections: [
    {
      id: 's1',
      titre: `Regarde le chemin parcouru, Champion(ne)`,
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu: `Quand on a ouvert ce Tome 7, le hasard te semblait peut-être incalculable — un domaine d'instinct, de chance, de « on verra bien ». Aujourd'hui, tu as mis une structure et des chiffres sur l'incertitude. Tu sais compter les possibilités, mesurer une chance, recalculer tes probabilités quand une information tombe, traduire un jeu en gain moyen, et prévoir le nombre de succès d'une expérience répétée. Le hasard ne te fait plus gnan : tu le domptes avec la rigueur des mathématiques.

Avant de refermer le tome, fais le bilan de ce que tu as mis dans ta poche.`,
        },
        {
          type: 'table',
          id: 'tbl-recap',
          headers: [`Étape`, `Ce que tu as mis dans ta poche`, `L'impact sur ta copie`],
          rows: [
            [`✅ Le Socle`, `Fractions, factorielles, ensembles, Sigma, validité d'un tableau.`, `Tu n'es plus jamais bloqué(e) sur un prérequis.`],
            [`✅ M1 — Dénombrement`, `Permutations, arrangements, combinaisons, Triangle de Pascal.`, `Tu comptes les possibilités sans te tromper.`],
            [`✅ M2 — Vocabulaire & équiprobabilité`, `Univers, événements, réunion, contraire, $P = \\dfrac{\\text{card}A}{\\text{card}\\Omega}$.`, `Tu poses le décor exact attendu au BAC.`],
            [`✅ M3 — Conditionnelles`, `Arbres pondérés, probabilités totales, indépendance.`, `Tu gères les tirages et les tests sans rature.`],
            [`✅ M4 — Variables aléatoires`, `Loi, espérance, variance, écart-type.`, `Tu traduis un jeu de hasard en bilan financier.`],
            [`✅ M5 — Loi binomiale`, `Schéma de Bernoulli, $\\mathcal{B}(n\\,;\\,p)$, $E(X)=np$.`, `Tu plies les répétitions en une seule formule.`],
            [`✅ M6 — Fonction de répartition`, `Cumul, courbe en escalier, $F(b)-F(a)$.`, `Tu cumules les chances d'un coup d'œil.`],
          ],
        },
      ],
    },
    {
      id: 's2',
      titre: `Le pont vers le Tome 8`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, donc si l'espérance de mon ticket de tombola est de $500$ francs, ça veut dire que je vais forcément gagner ça demain à la kermesse du Cacao ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Pas du tout, Champion(ne) ! En T7, on a calculé l'espérance $E(X)$ : c'est la moyenne théorique si tu jouais une infinité de fois. Au Tome 8, on passe aux **Statistiques** : on travaille avec des données réelles, observées sur le terrain. Le lien entre l'espérance théorique (ce que le modèle prédit) et la moyenne observée (ce qu'on mesure vraiment), c'est exactement le pont entre le monde des modèles et notre monde réel. Comprendre ce pont, c'est comprendre pourquoi les maths servent à décider dans la vraie vie.`,
        },
        {
          type: 'text',
          id: 'b2',
          contenu: `Dans le **Tome 8, Les Statistiques**, on quitte la théorie du hasard pour les données du terrain : séries à deux variables, nuage de points, droite d'ajustement, coefficient de corrélation. Tu verras comment la moyenne observée vient confirmer — ou nuancer — l'espérance que tu viens de maîtriser. Garde cette énergie de vainqueur(e), on continue ensemble.`,
        },
      ],
    },
    {
      id: 's3',
      titre: `Mot de la fin`,
      blocs: [
        {
          type: 'text',
          id: 'b3',
          contenu: `**Marius Dion — Ton Grand Frère**

*Le jour du BAC, respire, trace ton arbre proprement au brouillon, et on va gâter le coin, Champion(ne). Tu as tout ce qu'il faut.*

P.S. — N'oublie jamais ton arme secrète du Tome 7 : avant de calculer, pose la question de l'ordre (combinaison ou arrangement ?), justifie l'équiprobabilité ou la partition, et vérifie que $\\sum p_i = 1$. Et garde ta calculatrice prête : avec les combinaisons et les puissances de la loi binomiale, elle va transpirer un peu. Voir et poser le décor avant de calculer — c'est toujours là que se trouve la clé.`,
        },
      ],
    },
  ],
};
