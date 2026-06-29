import { Chapitre } from '../../types/course';

export const chapitreConclusion: Chapitre = {
  id: 't3-conclusion',
  titre: `Conclusion — Le pont vers le Tome 4`,
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
          contenu: `Quand on ouvrait ce Tome 3, le calcul intégral ressemblait à une montagne insurmontable, un vrai casse-tête de formules bizarres. Aujourd'hui, tu as dompté les primitives, tu jongles avec la relation de Chasles, et calculer l'aire sous une courbe ou le volume d'un solide ne te fait plus trembler. Tu as transformé tes doutes en réflexes solides — et cette rigueur va te suivre partout.

Avant de refermer le tome, fais le bilan de ce que tu as mis dans ta poche, module par module.`,
        },
      ],
    },
    {
      id: 's2',
      titre: `🏆 Tes 6 victoires sur ce tome`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-victoires',
          headers: [`Module`, `Ce que tu as mis dans ta poche`, `L'impact sur ta copie`],
          rows: [
            [`✅ M1 — Primitives de référence`, `Les formes élémentaires et le réflexe de la constante $C$.`, `Tu ne bloques plus sur les questions de départ.`],
            [`✅ M2 — Primitives composées`, `L'art de repérer la structure $u'$ cachée dans une expression.`, `Tu gagnes les points des fonctions avec $\\ln$ et $e^x$.`],
            [`✅ M3 — Intégrale définie`, `Linéarité, Chasles, signe et valeur moyenne.`, `Tu découpes intelligemment des calculs impressionnants.`],
            [`✅ M4 — Intégration par parties`, `Le tableau $u/v'$ et la priorité ALPES.`, `Tu débloques la question qui fait paniquer la salle.`],
            [`✅ M5 — Calcul d'aires`, `L'intégrale géométrique et l'unité d'aire.`, `Tu rédiges une justification impeccable avec le signe.`],
            [`✅ M6 — Volumes de révolution`, `La formule $\\pi\\int [f(x)]^2\\,dx$ et la conversion en cm³.`, `Tu assures la note maximale en géométrie intégrale.`],
          ],
        },
      ],
    },
    {
      id: 's3',
      titre: `🔗 Le pont vers le Tome 4`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, on a fini les intégrales, l'aire sous la courbe c'est devenu doux ! Mais le prof a dit qu'on commence les suites numériques la semaine prochaine… c'est encore un autre calvaire, non ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Faut pas gnan, Champion(ne) ! Au Tome 4, on quitte juste le monde continu pour entrer dans le monde discret. Au lieu de glisser ton doigt le long d'une courbe, tu vas avancer par sauts : étape 1, étape 2, étape 3… Et ouvre bien l'œil : tout ce qu'on vient de bâtir — la somme, l'accumulation, la recherche de limites — revient sous une autre forme. Tu as déjà les muscles pour ça.`,
        },
        {
          type: 'text',
          id: 'b3',
          contenu: `Dans le **Tome 4, Les Suites Numériques**, on apprend à dompter l'infini et à analyser les comportements à long terme — un autre gros gisement de points du BAC ivoirien. Garde cette énergie de vainqueur(e).`,
        },
      ],
    },
    {
      id: 's4',
      titre: `🚀 Le mot de la fin`,
      blocs: [
        {
          type: 'tip',
          id: 'tip-fin',
          titre: `Marius Dion — Ton Grand Frère`,
          contenu: `On va gâter le coin au BAC, Champion(ne). Tu as tout ce qu'il faut.

*P.S. — N'oublie jamais ton arme secrète de toute l'année : avant de valider une primitive, dérive-la dans un coin de ton brouillon. Si tu retrouves la fonction de départ, le point est dans ta poche !*`,
        },
      ],
    },
  ],
};
