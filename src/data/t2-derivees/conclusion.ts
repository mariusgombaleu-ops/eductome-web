import { Chapitre } from '../../types/course';

export const chapitreConclusion: Chapitre = {
  id: 't2-conclusion',
  titre: `Conclusion — Le pont vers le Tome 3`,
  duree: 6,
  niveau: 'BASE',
  xpGain: 10,
  sections: [
    {
      id: 's1',
      titre: `Regarde le chemin parcouru`,
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu: `Pose ton stylo deux minutes, Champion(ne). Respire un grand coup et regarde le chemin parcouru.

Tu te souviens du début de ce tome ? Le mot « dérivée » sonnait comme une formule mystérieuse à réciter, ce $f'(x)$ qui tombait du ciel sans qu'on sache vraiment d'où il venait. Tu recopiais les règles en espérant qu'elles tiennent le jour du devoir, et la moitié du temps tu confondais la pente et la hauteur dans l'équation de la tangente.

Regarde-toi maintenant. Le brouillard s'est levé. Ce qui te faisait transpirer hier est devenu un réflexe aujourd'hui. On a avancé module par module, sans sauter une marche, et le bloc Dérivées du BAC D est conquis.`,
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
          headers: [`✅ Compétence acquise`, `Ce que tu sais faire maintenant`],
          rows: [
            [`Mesurer la vitesse en un point`, `Tu as compris que le nombre dérivé $f'(x_0)$, c'est la vitesse exacte de la courbe à l'instant $x_0$ — la limite du taux de variation, calculée sans trembler.`],
            [`Connaître la carte des dérivées usuelles`, `Les formules de base ($x^n$, $\\dfrac{1}{x}$, $\\sqrt{x}$, $\\cos$, $\\sin$) sont gravées : tu as la cartographie de la vitesse pour toutes les fonctions de référence.`],
            [`Démonter n'importe quelle structure`, `Somme, produit, quotient, composée : tu reconnais la structure d'une fonction et tu déroules la bonne règle de calcul sans la confondre avec une autre.`],
            [`Lire le relief d'une courbe`, `Rien qu'en observant le signe de $f'$, tu dresses le tableau de variations, tu repères montées, descentes et extrema — tu vois la courbe sans la tracer.`],
            [`Tracer et situer la tangente`, `Tu écris $y = f'(x_0)(x-x_0)+f(x_0)$ en 30 secondes, tu trouves les tangentes horizontales ou parallèles, et tu sais dire si la courbe passe au-dessus ou en dessous de sa tangente.`],
            [`Manier les deux outils d'élite`, `L'IAF pour encadrer et prouver l'injectivité, la dérivée de la réciproque $(f^{-1})'(b)=\\dfrac{1}{f'(a)}$ : tu sécurises les questions les plus sélectives du sujet.`],
          ],
        },
      ],
    },
    {
      id: 's3',
      titre: `🔗 Le secret qui relie ce Tome au suivant`,
      blocs: [
        {
          type: 'text',
          id: 'b3',
          contenu: `Avant de tourner la page, Champion(ne), laisse-moi te révéler un truc qui va te faire sourire quand tu ouvriras le Tome 3.

Tout ce tome, on a appris à passer d'une fonction $f$ à sa dérivée $f'$ : de la position à la vitesse. Au Tome 3 (Primitives & Intégrales), on va faire **exactement le chemin inverse** : repartir de la vitesse $f$ pour reconstruire la position $F$. C'est l'opération qui « défait » la dérivation.

$$F'(x) = f(x) \\quad \\Longleftrightarrow \\quad F \\text{ est une primitive de } f$$

Autrement dit, chaque règle de dérivation que tu viens de maîtriser a son **équivalent primitif** qui se lit dans l'autre sens. Le formulaire des dérivées de l'Annexe A, c'est déjà la moitié du formulaire des primitives du Tome 3 — lu de droite à gauche. Tout le travail d'ici n'était pas une fin, c'était la fondation indispensable de la suite.`,
        },
        {
          type: 'figure',
          id: 'fig-conclusion-1',
          src: '/images/t2/fig_Conclusion_1.png',
          legende: `Le pont Tome 2 → Tome 3 : la primitive est l'opération inverse de la dérivée.`,
          alt: `Le pont Tome 2 → Tome 3 : la primitive est l'opération inverse de la dérivée.`,
        },
      ],
    },
    {
      id: 's4',
      titre: `⚠️ Le piège ultime avant le Tome 3`,
      blocs: [
        {
          type: 'warning',
          id: 'warn4',
          titre: `La constante qui réapparaît`,
          contenu: `Quand tu dérives une fonction, le résultat est **unique** : $f$ a une seule dérivée $f'$. Mais quand tu feras le chemin inverse au Tome 3, ce ne sera plus le cas. Une fonction $f$ admet une **infinité de primitives**, qui diffèrent toutes d'une constante :

$$\\text{si } F'(x) = f(x), \\text{ alors } (F(x) + c)' = f(x) \\text{ pour toute constante } c$$

Pourquoi ? Parce que la dérivée d'une constante est nulle (tu l'as vu en M2). Donc ajouter n'importe quel nombre à une primitive ne change pas sa dérivée. C'est le fameux « $+\\,c$ » que tant d'élèves oublient au Tome 3 — et chaque oubli coûte des points.

Garde ce réflexe dès maintenant : **dériver efface la constante, primitiver la fait réapparaître**. C'est tout le lien entre nos deux tomes en une phrase.`,
        },
      ],
    },
    {
      id: 's5',
      titre: `🚀 La suite — Tome 3 : Primitives & Intégrales`,
      blocs: [
        {
          type: 'text',
          id: 'b5',
          contenu: `Ne t'arrête pas en si bon chemin. Tout ce qu'on vient de bâtir, c'est la fondation de la maison.

Maintenant, tu sais à quelle vitesse ta fonction se déplace à chaque instant. Au Tome 3, on apprend à faire l'inverse : à partir de la vitesse, retrouver la distance totale parcourue — et même à calculer des aires sous une courbe avec l'intégrale. Chaque outil de dérivation que tu tiens va se retourner comme un gant pour devenir un outil de primitivation.

Une fois ce troisième bloc en main, plus aucune question d'analyse de Terminale D ne pourra te faire plier le genou.

**Marius Dion — Ton Grand Frère**

*P.S. : Ne ferme pas ce cahier trop vite. Les annexes qui suivent — formulaire complet, Cimetière des Points, carte de couverture BAC et conseils de dernière minute — sont tes fiches de révision rapide. Relis-les les matins de devoir ! Et quand tu es prêt(e), rejoins-moi pour le Tome 3. On va gâter le coin !*`,
        },
      ],
    },
  ],
};
