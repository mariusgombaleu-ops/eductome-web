import { Chapitre } from '../../types/course';

export const chapitreConclusion: Chapitre = {
  id: 't8-conclusion',
  titre: `Conclusion du Tome 8`,
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
          contenu: `C'est l'heure du bilan, Champion(ne). Tu viens d'avaler un gros morceau du programme. Les statistiques à deux variables, c'est l'exercice qui doit te mettre en confiance dès les premières minutes de l'épreuve. Ce n'est pas de la magie : c'est de la méthode. Tu sais maintenant lire l'histoire cachée derrière un tableau de chiffres, mesurer un lien, tracer une tendance et prévoir l'avenir avec prudence.`,
        },
        {
          type: 'table',
          id: 'tbl-recap',
          headers: [`Module`, `La compétence clé acquise`],
          rows: [
            [`M1 — Nuage & point moyen`, `Placer les données et trouver leur centre $G(\\bar{x} ; \\bar{y})$.`],
            [`M2 — Covariance & corrélation`, `Mesurer la force du lien avec $\\text{cov}(X,Y)$ et $r$.`],
            [`M3 — Droite des moindres carrés`, `Construire les droites de $Y$ en $X$ et de $X$ en $Y$.`],
            [`M4 — Droites de Mayer`, `Ajuster par la méthode des deux groupes.`],
            [`M5 — Interpolation & extrapolation`, `Prévoir en posant les limites du modèle.`],
            [`M6 — Changement de variable`, `Redresser un nuage courbe via $\\ln$ pour l'ajuster.`],
          ],
        },
      ],
    },
    {
      id: 's2',
      titre: `Le pont vers le Tome 9`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, avec tout ça j'ai l'impression qu'on a fait le tour. Qu'est-ce qu'on peut inventer de plus pour la suite ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Ne t'inquiète pas, on ne va pas faire plus compliqué, on va voir plus grand. En T8 tu es resté dans le plan : deux variables, deux axes, comme une feuille posée sur ta table. En T9, on monte d'une dimension : on attaque la géométrie dans l'espace. Même logique de coordonnées et de distances, mais avec une coordonnée de plus pour s'élever dans les airs. Tu es déjà prêt(e).`,
        },
        {
          type: 'text',
          id: 'b2',
          contenu: `Garde tes fiches bien au chaud, refais les exercices de la Salle d'Entraînement quand tu sens que les formules commencent à s'évaporer. Le BAC se gagne sur la répétition et la discipline. Reste concentré(e), Champion(ne) : on va gâter le coin !

**Marius Dion — Ton Grand Frère**
*EDUCTOME — Apprendre sans limites*

P.S. : N'oublie jamais ton tableau à $5$ colonnes au brouillon. C'est le bouclier qui te protège de toutes les erreurs d'inattention sous la pression de l'examen.`,
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
          contenu: `Tu tiens maintenant tout l'arsenal des statistiques à deux variables. Ce tome, tu peux le réviser en entier, refaire chaque exercice, et arriver le jour du BAC avec le calme de celui ou celle qui *comprend* au lieu d'apprendre par cœur. C'est exactement ça, l'esprit EDUCTOME.

On se retrouve au Tome 9 pour s'élever dans l'espace. D'ici là, travaille bien, et n'oublie pas : ce n'est pas une question d'intelligence, c'est une question de méthode.

📲 **Reste connecté(e) avec le Grand Frère**
- WhatsApp : (+225) 07 99 50 63 00
- Boutique : selar.com/m/eductome
- Facebook : EDUCTOME

*EDUCTOME — Apprendre sans limites*
*© 2026 Marius Dion · Tous droits réservés*`,
        },
      ],
    },
  ],
};
