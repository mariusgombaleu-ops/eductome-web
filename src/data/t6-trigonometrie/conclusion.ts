import { Chapitre } from '../../types/course';

export const chapitreConclusion: Chapitre = {
  id: 't6-conclusion',
  titre: `Conclusion du Tome 6`,
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
          contenu: `Quand on a ouvert ce Tome 6, le mot « trigonométrie » te faisait peut-être encore monter l'appréhension. Les formules d'addition, les angles bizarres, les courbes qui ondulent : tout ça ressemblait à un mur. Aujourd'hui, tu as escaladé ce mur pierre par pierre. Tu ne regardes plus $\\cos$, $\\sin$ et $\\tan$ comme des hiéroglyphes, mais comme trois fonctions que tu sais placer, dériver, transformer et étudier. Tu as troqué tes doutes de Première contre des réflexes de caïman.

Avant de refermer le tome, fais le bilan de ce que tu as mis dans ta poche.`,
        },
        {
          type: 'table',
          id: 'tbl-recap',
          headers: [`Étape`, `Ce que tu as mis dans ta poche`, `L'impact sur ta copie`],
          rows: [
            [`✅ Le Socle`, `Dérivée composée, valeurs remarquables, équation-produit, parité.`, `Tu n'es plus jamais bloqué(e) sur un prérequis.`],
            [`✅ M1 — Radians & cercle`, `Conversion, placement, mesure principale.`, `Tu places n'importe quel angle sans hésiter.`],
            [`✅ M2 — Cosinus & sinus`, `Périodicité, parité, angles associés, équations de base.`, `Tu réduis et tu résous proprement.`],
            [`✅ M3 — Tangente`, `Définition, valeurs interdites, asymptotes, période $\\pi$.`, `Tu gères les barrières verticales sans trembler.`],
            [`✅ M4 — Formules`, `Addition, duplication, linéarisation, forme $R\\cos(x - \\varphi)$.`, `Tu métamorphoses n'importe quelle expression.`],
            [`✅ M5 — Limites & dérivées`, `Limites de référence, $(\\sin u)'$, $(\\cos u)'$, $(\\tan u)'$.`, `Tu dérives et tu lèves les indéterminations.`],
            [`✅ M6 — Équations & étude`, `Résolution, inéquations, étude complète de fonction.`, `Tu mènes l'étude reine de l'épreuve de bout en bout.`],
          ],
        },
      ],
    },
    {
      id: 's2',
      titre: `Le pont vers le Tome 7`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, j'ai vraiment l'impression d'avoir compris cette fois. Les formules ne sont plus des lignes à apprendre par cœur, je sais les retrouver.`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `C'est ça même, Champion(ne). Tu ne les apprends plus, tu les retrouves. Et ça, personne ne peut te l'enlever le jour du BAC. Mais reste concentré(e) : le voyage continue. Au Tome 7, on change complètement de décor — on quitte les courbes qui oscillent pour entrer dans le monde du hasard et de l'incertitude : les **Probabilités**. Tu vas apprendre à mesurer la chance, à modéliser un tirage au sort, à prévoir l'imprévisible. Et tu verras : là aussi, comprendre le phénomène avant de calculer, ça change tout.`,
        },
        {
          type: 'text',
          id: 'b2',
          contenu: `Dans le **Tome 7, Les Probabilités**, on apprivoise le hasard — du ticket de la LONACI qu'on gratte aux files d'attente du guichet, en passant par les arbres de tirage. Garde cette énergie de vainqueur(e), tu en auras besoin.`,
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

*Le jour du BAC, règle ta calculatrice en radians, dessine ton cercle, et on va gâter le coin, Champion(ne). Tu as tout ce qu'il faut.*

P.S. — N'oublie jamais ton arme secrète du Tome 6 : avant de te lancer dans un calcul d'angle, ramène-le à la table des valeurs remarquables ; avant de résoudre une équation, pense aux deux solutions par tour ; avant de dériver un cosinus, prépare le signe moins. Voir et poser le décor avant de calculer — c'est toujours là que se trouve la clé.`,
        },
      ],
    },
  ],
};
