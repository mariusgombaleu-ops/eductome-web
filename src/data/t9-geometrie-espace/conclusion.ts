import { Chapitre } from '../../types/course';

export const chapitreConclusion: Chapitre = {
  id: 't9-conclusion',
  titre: `Conclusion du Tome 9`,
  duree: 6,
  niveau: 'BASE',
  xpGain: 10,
  sections: [
    {
      id: 's1',
      titre: `Tu as fait voler tes outils, Champion(ne)`,
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu: `Tu l'as fait, Champion(ne). Tu as pris des outils d'analyse qui étaient plats, collés à la feuille de papier, et tu as réussi à les faire voler. Tu sais maintenant lire l'invisible : détecter si deux droites s'évitent dans le ciel comme le pont HKB, équilibrer un système de points comme une bascule, dresser un mur avec le fil à plomb du vecteur normal, et mesurer au mètre près la distance entre un aéronef et la piste.

Au début de ce tome, la coordonnée $z$ t'intimidait peut-être. Aujourd'hui, c'est devenu un réflexe : tu ajoutes une ligne, tu vérifies une troisième équation, tu poses une valeur absolue, et le résultat tombe. Comme on disait sous les manguiers du Lycée Classique : la rigueur bat le talent quand le talent manque de rigueur.`,
        },
        {
          type: 'table',
          id: 'tbl-recap',
          headers: [`Module`, `La compétence clé acquise`],
          rows: [
            [`M1 — Vecteurs de l'espace`, `Coordonnées, milieu, distance, colinéarité, coplanarité.`],
            [`M2 — Barycentre`, `Le point d'équilibre de points pondérés et le centre de gravité.`],
            [`M3 — Produit scalaire`, `Orthogonalité, normes, mesures d'angles en 3D.`],
            [`M4 — Droites et plans`, `Représentation paramétrique et équation cartésienne.`],
            [`M5 — Positions relatives`, `Parallèles, sécantes, gauches ; intersection droite/plan.`],
            [`M6 — Orthogonalité`, `Perpendicularités et projeté orthogonal.`],
            [`M7 — Distances et sphères`, `Distance point-plan et intersection sphère/plan.`],
          ],
        },
      ],
    },
    {
      id: 's2',
      titre: `Le pont vers le Tome 10`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, c'était mon chapitre le plus redouté... et finalement, ça a tenu. C'est quoi la suite ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Pas si vite, Champion(ne) ! En T10, on revient dans le plan — mais un plan magique où chaque point devient un nombre complexe. Et multiplier ces nombres, c'est faire des rotations et des distances directement par le calcul. La géométrie que tu viens de dompter va se transformer en algèbre pure. Faut pas avoir peur, on va gâter le coin !`,
        },
        {
          type: 'text',
          id: 'b2',
          contenu: `Garde tes fiches au chaud, refais les exercices de la Salle d'Entraînement dès que les formules commencent à s'évaporer. Le BAC se gagne sur la répétition et la discipline. Reste concentré(e), Champion(ne) : on va gâter le coin !

**Marius Dion — Ton Grand Frère**
*EDUCTOME — Apprendre sans limites*

P.S. : Le réflexe qui sauve sur tout ce tome : devant n'importe quel calcul, demande-toi « est-ce que mon résultat a un sens géométrique ? ». Une distance négative, un cosinus à $1{,}4$, un point hors de son plan : c'est ton intuition qui te sauve avant le correcteur.`,
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
          contenu: `Tu tiens entre les mains les 3 dimensions de l'espace. Refais les exercices, parle le langage officiel du BAC, et avance vers le Tome 10 la tête haute. Ce n'est pas une question d'intelligence, c'est une question de méthode — et la méthode, tu l'as maintenant.

📲 **Reste connecté(e) à EDUCTOME**
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
