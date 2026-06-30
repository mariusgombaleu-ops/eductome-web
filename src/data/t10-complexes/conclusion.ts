import { Chapitre } from '../../types/course';

export const chapitreConclusion: Chapitre = {
  id: 't10-conclusion',
  titre: `Conclusion du Tome 10`,
  duree: 6,
  niveau: 'BASE',
  xpGain: 10,
  sections: [
    {
      id: 's1',
      titre: `Tu as craqué le code, Champion(ne)`,
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu: `Tu l'as fait, Champion(ne). Tu es arrivé(e) au bout du Tome 10, le cœur absolu du programme de Terminale D et le tome référence du vocabulaire EDUCTOME. Tu es parti(e) d'une convention qui te semblait absurde — un nombre $i$ tel que $i^2 = -1$ — et tu finis en faisant tourner des figures, en résolvant l'impossible et en lisant la géométrie directement dans le calcul. Plus aucun dessin compliqué : juste ton stylo et ta tête.

Au début de ce tome, le portefeuille à deux caisses te paraissait étrange. Aujourd'hui, tu jongles entre la forme algébrique pour additionner et la forme exponentielle pour faire tourner, et tu choisis la bonne à chaque fois. Comme on disait sous les manguiers du Lycée Classique d'Abidjan : ce n'est pas une question d'intelligence, c'est une question de méthode — et la méthode, tu l'as maintenant.`,
        },
        {
          type: 'table',
          id: 'tbl-recap',
          headers: [`Module`, `La compétence clé acquise`],
          rows: [
            [`M1 — La forme algébrique`, `Parties réelle et imaginaire, conjugué, module, division par le conjugué.`],
            [`M2 — Formes trigo et exponentielle`, `Module, argument, formule de Moivre pour plier les puissances.`],
            [`M3 — Équations dans ℂ`, `$\\Delta < 0$, racines carrées, coefficients complexes, factorisation.`],
            [`M4 — Racines n-ièmes`, `Toutes les racines, placées en polygone régulier sur le cercle.`],
            [`M5 — Complexes et géométrie`, `Distances, angles orientés, nature de triangle, lieux de points.`],
            [`M6 — Transformations`, `Caractériser $z' = az + b$ et étudier les suites de points.`],
          ],
        },
      ],
    },
    {
      id: 's2',
      titre: `Le pont vers le Tome 11`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, c'était le tome qui me faisait le plus peur... et finalement, j'ai tenu. On a fini avec les complexes maintenant ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Pas tout à fait, Champion(ne) — et c'est une bonne nouvelle ! Au Tome 11, on introduit le temps. Tes exponentielles $e^{i\\theta}$ vont devenir $e^{i\\omega t}$ et décrire des phénomènes qui bougent : des ressorts qui oscillent, des circuits électriques, des ondes. Tout l'investissement d'aujourd'hui va payer demain. Faut pas avoir peur pour la suite : on est ensemble, et on va gâter le coin !`,
        },
        {
          type: 'text',
          id: 'b2',
          contenu: `Garde tes fiches au chaud, refais les exercices de la Salle d'Entraînement dès que les formules commencent à s'évaporer. Le BAC se gagne sur la répétition et la discipline. Reste concentré(e), Champion(ne).

**Marius Dion — Ton Grand Frère**
*EDUCTOME — Apprendre sans limites*

P.S. : Le réflexe qui sauve sur tout ce tome : devant n'importe quel calcul, demande-toi « ai-je choisi la bonne forme ? ». Une puissance géante ? Passe en exponentielle. Une addition ? Reste en algébrique. Une distance ? Prends un module. La bonne forme, c'est la moitié du travail déjà faite.`,
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
          contenu: `Tu tiens entre les mains la lettre magique $i$ et tout son univers. Refais les exercices, parle le langage officiel du BAC, et avance vers le Tome 11 la tête haute. Ce n'est pas une question d'intelligence, c'est une question de méthode — et la méthode, tu l'as maintenant.

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
