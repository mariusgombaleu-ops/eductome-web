import { Chapitre } from '../../types/course';

export const chapitreConclusion: Chapitre = {
  id: 't5-conclusion',
  titre: `Conclusion du Tome 5`,
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
          contenu: `Quand on a ouvert ce Tome 5, les fonctions logarithme et exponentielle te semblaient peut-être des monuments de l'analyse, inventés pour te compliquer la vie. Aujourd'hui, tu as traversé la tempête. Tu ne regardes plus $\\ln$ et $e^x$ comme des symboles effrayants, mais comme deux outils que tu sais manier : l'un qui range les multiplications en additions, l'autre qui les défait. Tu as transformé tes doutes en réflexes solides.

Avant de refermer le tome, fais le bilan de ce que tu as mis dans ta poche.`,
        },
        {
          type: 'table',
          id: 'tbl-recap',
          headers: [`Étape`, `Ce que tu as mis dans ta poche`, `L'impact sur ta copie`],
          rows: [
            [`✅ Le Socle`, `Dérivée composée, signe du trinôme, changement de variable, réciprocité, seuil.`, `Tu n'es plus jamais bloqué(e) sur un prérequis.`],
            [`✅ M1 — Logarithme népérien`, `Définition, propriétés algébriques, limites et signe.`, `Tu poses un domaine et tu simplifies sans trembler.`],
            [`✅ M2 — Applications du log`, `$(\\ln u)' = \\dfrac{u'}{u}$, primitives $\\dfrac{u'}{u}$, seuils résolus.`, `Tu débloques enfin les exposants coincés en hauteur.`],
            [`✅ M3 — Exponentielle`, `Réciprocité, $(e^u)' = u'e^u$, équations par changement de variable.`, `Tu domines la fonction reine du BAC.`],
            [`✅ M4 — Log décimal & base a`, `$\\log x = \\dfrac{\\ln x}{\\ln 10}$, pH, $a^x = e^{x\\ln a}$.`, `Tu relies les maths à la chimie sans paniquer.`],
            [`✅ M5 — Puissances réelles`, `$x^\\alpha = e^{\\alpha\\ln x}$, dérivée et allure des courbes.`, `Tu donnes un sens à n'importe quel exposant.`],
            [`✅ M6 — Croissances comparées`, `Hiérarchie $e^x \\gg x^\\alpha \\gg \\ln x$, levée des indéterminations.`, `Tu lèves les pires formes indéterminées en une ligne.`],
          ],
        },
      ],
    },
    {
      id: 's2',
      titre: `Le pont vers le Tome 6`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, on a fini le Tome 5 ! Je maîtrise le logarithme et l'exponentielle maintenant. On peut s'asseoir sur nos lauriers, non ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Félicitations, Champion(ne) ! Tu as abattu un travail de caïman. Mais reste concentré(e), car ce que tu as appris ici est un tremplin. Au Tome 6, la dérivée composée $(f\\circ g)'$ revient en force avec les fonctions trigonométriques. Ce que tu viens de faire avec $\\ln u$ et $e^u$, tu vas exactement le refaire avec $\\sin u$ et $\\cos u$. La mécanique reste la même — c'est pour ça que tes fondations doivent rester solides !`,
        },
        {
          type: 'text',
          id: 'b2',
          contenu: `Dans le **Tome 6, Les Fonctions Trigonométriques**, on apprivoise les fonctions qui décrivent tout ce qui tourne et tout ce qui oscille — du balancier d'une horloge aux signaux d'une radio d'Abidjan. Garde cette énergie de vainqueur(e).`,
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

*Le jour du BAC, reste rigoureux(se) sur ton intercalaire de composition, et on va gâter le coin, Champion(ne). Tu as tout ce qu'il faut.*

P.S. — N'oublie jamais ton arme secrète du Tome 5 : avant de poser ton bic sur une question de logarithme, écris l'ensemble de définition ; avant de te lancer dans une équation exponentielle, pense au changement de variable. Voir et poser le décor avant de calculer — c'est là que se trouve toujours la clé.`,
        },
      ],
    },
  ],
};
