import { Chapitre } from '../../types/course';

export const chapitreConclusion: Chapitre = {
  id: 't4-conclusion',
  titre: `Conclusion du Tome`,
  duree: 5,
  niveau: 'BAC',
  xpGain: 10,
  sections: [
    {
      id: 's1',
      titre: `Regarde le chemin parcouru, Champion(ne)`,
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu: `Quand on ouvrait ce Tome 4, les suites te semblaient être une montagne de formules bizarres, un vrai labyrinthe d'indices. Aujourd'hui, tu as dompté cette bête. Tu ne regardes plus une suite comme un calcul abstrait, mais comme un **mouvement**, une trajectoire prévisible : tu sais dire si elle monte, si elle est coincée sous un plafond, et où elle finit par se poser. Tu as transformé tes doutes en réflexes solides.

Avant de refermer le tome, fais le bilan de ce que tu as mis dans ta poche.`,
        },
        {
          type: 'table',
          id: 'tbl-recap',
          headers: [`Étape`, `Ce que tu as mis dans ta poche`, `L'impact sur ta copie`],
          rows: [
            [`✅ Le Socle`, `Limites, signe, récurrence, comptage, conjuguée, lecture graphique.`, `Tu n'es plus jamais bloqué(e) sur un prérequis.`],
            [`✅ M1 — Généralités`, `Monotonie, bornes et théorème de convergence monotone.`, `Tu prouves qu'une suite converge sans calculer l'infini.`],
            [`✅ M2 — Arithmétiques`, `Terme général $u_0 + nr$ et somme de termes.`, `Tu règles les tontines et cotisations en dix secondes.`],
            [`✅ M3 — Géométriques`, `Terme général $u_0 q^n$, somme et seuil par logarithme.`, `Tu domines intérêts composés et croissances.`],
            [`✅ M4 — Récurrentes`, `Point fixe, intervalle stable, toile d'araignée.`, `Tu débloques le monument qui fait paniquer la salle.`],
            [`✅ M5 — Récurrence & infini`, `Démonstration en trois blocs et croissances comparées.`, `Tu prouves rigoureusement, tu lèves les indéterminations.`],
          ],
        },
      ],
    },
    {
      id: 's2',
      titre: `Le pont vers le Tome 5`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, on a fini les suites, le point fixe c'est devenu doux ! Mais le prof a parlé de fonctions logarithme et exponentielle la semaine prochaine… c'est encore un autre calvaire, non ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Faut pas gnan, Champion(ne) ! Tu as déjà croisé $\\ln$ et $e^x$ en passant : pour franchir le seuil du capital à $700\\,000$ F, c'est le logarithme qui a fait descendre l'exposant. Et nos croissances comparées entre $n$ et $q^n$ ? Au Tome 5, on les pousse jusqu'au bout avec $e^x$ et $\\ln x$, les deux stars du programme. Tu as déjà les muscles : on va juste leur donner un nouveau terrain de jeu.`,
        },
        {
          type: 'text',
          id: 'b2',
          contenu: `Dans le **Tome 5, Les Fonctions Logarithme et Exponentielle**, on dompte les deux fonctions les plus puissantes du BAC ivoirien — celles qui décrivent la croissance et la décroissance de tout, du capital placé à la désintégration nucléaire. Garde cette énergie de vainqueur(e).`,
        },
      ],
    },
    {
      id: 's3',
      titre: `Le mot de la fin`,
      blocs: [
        {
          type: 'text',
          id: 'b3',
          contenu: `**Marius Dion — Ton Grand Frère.** *On va gâter le coin au BAC, Champion(ne). Tu as tout ce qu'il faut.*

*P.S. — N'oublie jamais ton arme secrète des suites : avant de te lancer dans le moindre calcul, dessine les premiers termes sur une droite numérique ou trace la toile d'araignée. Voir avant de calculer — c'est là que se trouve toujours la clé.*`,
        },
      ],
    },
  ],
};
