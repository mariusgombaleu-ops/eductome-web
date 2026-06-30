import { Chapitre } from '../../types/course';

export const chapitreConclusion: Chapitre = {
  id: 't11-conclusion',
  titre: `Conclusion du Tome 11`,
  duree: 6,
  niveau: 'BASE',
  xpGain: 10,
  sections: [
    {
      id: 's1',
      titre: `Tu as bouclé l'analyse de Terminale D`,
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu: `Tu l'as fait, Champion(ne). Tu viens de fermer le **dernier chapitre d'analyse** du programme de Terminale D. Repense au chemin : tu es parti(e) d'une équation où tu cherchais un nombre, et tu finis en pilotant des fonctions entières — des températures qui chutent, des ponts qui vibrent, des noyaux qui se désintègrent. Tu ne résous plus des équations : tu modélises le réel.

Au début de ce tome, le mot « différentielle » te paraissait savant et lointain. Aujourd'hui, tu repères en une lecture si c'est du premier ou du second ordre, tu résous l'homogène d'un réflexe, tu trouves la particulière, tu fixes les constantes. Comme on disait sous les manguiers du Lycée Classique d'Abidjan : ce n'est pas une question d'intelligence, c'est une question de méthode — et la méthode, tu l'as maintenant.`,
        },
        {
          type: 'table',
          id: 'tbl-recap',
          headers: [`Module`, `La compétence clé acquise`],
          rows: [
            [`M1 — $y' + ay = 0$`, `Résoudre l'homogène et fixer la constante avec une condition initiale.`],
            [`M2 — $y' + ay = b$`, `Traiter le second membre constant et interpréter le régime permanent $\\dfrac{b}{a}$.`],
            [`M3 — Second membre variable`, `Manier le principe de superposition : générale = particulière + homogène.`],
            [`M4 — Oscillations`, `Résoudre $y'' + \\omega^2 y = 0$ (oscillations $\\cos/\\sin$).`],
            [`M5 — Exponentielles & affine`, `Résoudre $y'' - \\omega^2 y = 0$ (exponentielles) et le cas affine $y'' = 0$.`],
            [`M6 — Applications`, `Modéliser et résoudre : refroidissement, désintégration, population, RC.`],
          ],
        },
      ],
    },
    {
      id: 's2',
      titre: `Le pont vers le Tome 12`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, là je me sens un peu perdu avec tout ce qu'on a vu depuis le début de l'année. J'ai peur de tout mélanger le jour du BAC.`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Faut pas gnan, Champion(ne). C'est normal, et c'est même bon signe : ça veut dire que tu as beaucoup appris. Le Tome 12 n'est pas un nouveau chapitre théorique — c'est ton terrain d'entraînement final. On reprend les 11 tomes, on relie les notions entre elles, on attaque des sujets BAC entiers, et on rentre dans la salle d'examen avec une armure complète. Tu ne vas plus seulement résoudre : tu vas piloter l'épreuve. On va gâter le coin au BAC, Champion(ne) !`,
        },
        {
          type: 'text',
          id: 'b2',
          contenu: `Voici les **6 victoires** que tu emportes de ce tome :

✅ Résoudre l'équation homogène $y' + ay = 0$ et fixer la constante avec une condition initiale.
✅ Traiter le second membre constant $y' + ay = b$ et interpréter le régime permanent $\\dfrac{b}{a}$.
✅ Manier le principe de superposition : solution générale = particulière + homogène.
✅ Résoudre le second ordre $y'' + \\omega^2 y = 0$ (oscillations $\\cos/\\sin$).
✅ Résoudre le second ordre $y'' - \\omega^2 y = 0$ (exponentielles) et le cas affine $y'' = 0$.
✅ Modéliser et résoudre les problèmes réels : refroidissement, désintégration, population, circuit RC.

Garde tes fiches au chaud, refais les exercices de la Salle d'Entraînement dès que les réflexes commencent à s'évaporer. Et n'oublie jamais : les équations différentielles tombent dans le Grand Problème de maths ET de physique-chimie. C'est là que tu marqueras ta différence.

**Marius Dion — Ton Grand Frère**
*EDUCTOME — Apprendre sans limites*

P.S. : Le réflexe qui sauve sur tout ce tome : devant n'importe quelle équation, commence **toujours** par résoudre l'équation homogène associée. C'est la dalle de béton sur laquelle tout le reste se construit. Pose-la d'abord, et la suite coule de source.`,
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
          contenu: `Tu tiens entre les mains la maîtrise du mouvement et de l'évolution. Tu as bouclé l'analyse de Terminale D. Refais les exercices, parle le langage officiel du BAC, et avance vers le Tome 12 — les Révisions BAC Complètes — la tête haute. Ce n'est pas une question d'intelligence, c'est une question de méthode — et la méthode, tu l'as maintenant.

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
