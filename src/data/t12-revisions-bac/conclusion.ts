import { Chapitre } from '../../types/course';

export const chapitreConclusion: Chapitre = {
  id: 't12-conclusion',
  titre: `Le Couronnement du Caïman`,
  duree: 6,
  niveau: 'BASE',
  xpGain: 10,
  sections: [
    {
      id: 's1',
      titre: `Ce que tu as gravé dans ton armure`,
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu: `Champion(ne), regarde le chemin qu'on a nettoyé ensemble. Tu as traversé douze tomes complets de cette collection. C'est un exploit. Énorme. Beaucoup d'élèves s'arrêtent en route, découragés par la fatigue ou effrayés par la hauteur de la brousse mathématique. Mais toi, tu es resté(e) debout. Solide. Tu es allé(e) jusqu'au bout. Tu n'es plus la même personne qu'au premier jour.`,
        },
        {
          type: 'table',
          id: 'tbl-recap',
          headers: [`Tome`, `Grand acquis EDUCTOME`, `Impact direct au BAC D`],
          rows: [
            [`T1 — Limites`, `Dompter l'infini et analyser le comportement aux frontières.`, `Sécurise les asymptotes du grand problème.`],
            [`T2 — Dérivées`, `Mesurer le taux de variation instantané.`, `Donne le signe qui oriente les flèches de variation.`],
            [`T3 — Primitives`, `Inverser la dérivation et calculer des aires.`, `Arrache les points de l'intégration et des unités d'aire.`],
            [`T4 — Suites`, `Modéliser des phénomènes discrets pas à pas.`, `Garantit les points de la récurrence et des limites.`],
            [`T5 — Log & Expo`, `Piloter les croissances rapides et libérer les inconnues.`, `Forme l'ossature du grand problème d'analyse.`],
            [`T6 — Trigonométrie`, `Maîtriser les phénomènes périodiques.`, `Évite les erreurs de signe sur les fonctions circulaires.`],
            [`T7 — Probabilités`, `Quantifier l'incertitude et structurer le hasard.`, `Valide rapidement le schéma de Bernoulli.`],
            [`T8 — Statistiques`, `Déceler des tendances et ajuster des nuages de points.`, `Offre des points directs via les moindres carrés.`],
            [`T9 — Géométrie 3D`, `Se repérer et calculer dans l'espace.`, `Valide l'orthogonalité via le produit scalaire.`],
            [`T10 — Complexes`, `Transformer la géométrie plane en calcul fluide.`, `Détermine la nature des triangles et les similitudes.`],
            [`T11 — Éq. différentielles`, `Traduire les évolutions continues de la nature.`, `Clôture proprement les grands problèmes d'analyse.`],
            [`T12 — Révisions`, `Orchestrer ses acquis sous la pression du chronomètre.`, `Optimise les 4 heures pour maximiser chaque point.`],
          ],
        },
      ],
    },
    {
      id: 's2',
      titre: `Le message du Grand Frère`,
      blocs: [
        {
          type: 'text',
          id: 'b2',
          contenu: `Tu te souviens de ce moment classique en classe, quand le prof termine un immense tableau, se retourne et demande : « Tout le monde a compris ? » Tout le monde hoche la tête en silence, alors que le brouillon du voisin ressemble à un carrefour de Yopougon après la pluie. Avec EDUCTOME, Champion(ne), on a brisé ce faux-semblant. Notre philosophie est restée la même : comprendre le phénomène concret avant de poser la formule. Comprendre avant de calculer. Toujours.

Le jour du BAC, face à ta feuille, tu n'auras pas besoin d'astuces magiques sorties de nulle part. Tu auras une force bien plus redoutable : tu comprendras précisément ce que tu fais. Et ça, ça ne s'improvise pas. C'est le résultat de tes nuits de travail, Champion(ne), des heures passées à aligner proprement tes symboles d'équivalence. Du Lycée Classique d'Abidjan « le Cacao » jusqu'aux établissements les plus éloignés de notre belle Côte d'Ivoire, les tables d'examen attendent la signature d'un authentique caïman. Ne doute pas de toi, Champion(ne). Prends ton stylo fétiche, bois une gorgée d'eau, regarde le sujet bien en face et applique ta procédure sans remords.

**Marius Dion — Ton Grand Frère**
*EDUCTOME — Apprendre sans limites*`,
        },
      ],
    },
    {
      id: 's3',
      titre: `On a gâté le coin, Champion(ne) !`,
      blocs: [
        {
          type: 'text',
          id: 'b3',
          contenu: `Voilà. Avec ce Tome 12, tu refermes toute la collection Les Clés Maths — douze tomes, du premier jour des limites jusqu'à ce dernier sujet blanc. Il ne reste plus rien à apprendre : tout est en toi. Le prochain rendez-vous, ce n'est pas un Tome 13 — c'est ta table d'examen, le jour du BAC. Et après la victoire, EDUCTOME continue avec toi : Sciences PC, Lettres, et tout ce qui t'aidera à dominer la suite.

Si un jour, au cours de ta longue vie de leader, tu te demandes si ça valait le coup de bosser si dur sur ces lignes de calculs — rappelle-toi le moment précis où tu as compris. Pas mémorisé comme un robot. Compris. C'est là que tout a commencé pour toi. Tu es prêt(e). On a gâté le coin.

📲 **Restons en contact**
- WhatsApp : (+225) 07 99 50 63 00
- Boutique : selar.com/m/eductome
- Facebook : Eductome

*EDUCTOME — Apprendre sans limites. La méthode avant la chance.*
*© 2026 Marius Dion · Tous droits réservés*`,
        },
      ],
    },
  ],
};
