import { Chapitre } from '../../types/course';

export const chapitreIntro: Chapitre = {
  id: 't12-intro',
  titre: `Message du Grand Frère — La Synthèse Finale`,
  duree: 6,
  niveau: 'BASE',
  xpGain: 10,
  gratuit: true,
  sections: [
    {
      id: 's1',
      titre: `Le chemin parcouru`,
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu: `Regarde-toi un instant dans la glace, Champion(ne). Regarde bien le visage de la personne que tu es devenue depuis notre tout premier jour ensemble. Quand tu as ouvert le Tome 1 pour la première fois, tu avais la tête lourde, le regard fuyant et le cœur plein de doutes. Tu te demandais bien ce qu'une limite de fonction pouvait apporter à ta vie de jeune Ivoirien(ne). Tu n'es plus cet(te) élève-là. Aujourd'hui, tu as traversé toute la brousse mathématique de la Terminale D, d'un bout à l'autre. Beaucoup ont fui ou abandonné en cours de route ; toi, Champion(ne), tu es là, debout, solide et prêt(e) à en découdre.

Rappelle-toi chaque victoire, une par une, car ce sont elles qui ont forgé ton armure. Au Tome 1, tu as appris à lire le comportement caché d'une fonction aux frontières de son domaine. Au Tome 2, on a accéléré le rythme pour mesurer le changement instantané et la pente des courbes avec les dérivées. Au Tome 3, on a inversé le mouvement pour reconstruire les fonctions et mesurer des aires avec les intégrales. Le Tome 4 t'a montré comment modéliser l'avenir pas à pas avec les suites. Au Tome 5, on a sorti l'artillerie lourde — logarithmes et exponentielles. Au Tome 6, la trigonométrie t'a révélé la musique cachée des phénomènes périodiques. Au Tome 7, tu as appris à chiffrer le hasard avec la loi binomiale. Le Tome 8 t'a appris à tracer une ligne d'espoir au milieu du désordre des nuages de points. Au Tome 9, on a brisé le plafond de la feuille plate pour naviguer dans l'espace en trois dimensions. Le Tome 10 t'a ouvert les yeux sur l'algèbre des complexes. Et au Tome 11, tu as appris à traduire les mouvements de la nature en résolvant des équations différentielles. Onze piliers solides coulés dans le béton armé de ton cerveau, Champion(ne).`,
        },
      ],
    },
    {
      id: 's2',
      titre: `Ce que T12 est — et n'est pas`,
      blocs: [
        {
          type: 'text',
          id: 'b2',
          contenu: `Alors, c'est quoi ce Tome 12 ? Laisse-moi te dire d'abord ce qu'il n'est pas : ce n'est pas un nouveau cours lourd venu surcharger ta mémoire. Ici, il y a zéro nouvelle notion, zéro formule magique sortie d'un chapeau. Ce tome, c'est l'assemblage final, la clé de voûte de toute la collection. C'est le moment précis, Champion(ne), où tes onze savoir-faire isolés fusionnent pour devenir une force totale.

Pense à un grand attaquant des Éléphants sur la pelouse du Stade Félix Houphouët-Boigny. Le jour de la grande finale, le sélectionneur ne lui apprend plus à faire une passe ou à contrôler le ballon. Tout ça, il le maîtrise déjà sur le bout des doigts. Ce qu'on travaille au « Félicia » pendant les derniers entraînements, c'est combiner ces gestes sous la pression du public, feinter au bon moment, lire la défense adverse pour glisser le ballon au fond des filets à l'instant crucial. C'est exactement ce qu'on va faire ensemble : prendre tes outils et t'apprendre à les déployer intelligemment face aux vrais sujets du BAC d'ici.`,
        },
      ],
    },
    {
      id: 's3',
      titre: `La Feuille de Route`,
      blocs: [
        {
          type: 'text',
          id: 'b3',
          contenu: `Voici le plan de vol détaillé de notre dernier voyage ensemble, Champion(ne).`,
        },
        {
          type: 'table',
          id: 'tbl-route',
          headers: [`Module`, `Titre`, `Objectif principal`],
          rows: [
            [`Module 1`, `Bilan des 11 tomes — carte des liaisons`, `Connecter les notions entre elles et maîtriser les 5 formules universelles du BAC D.`],
            [`Module 2`, `Stratégie complète BAC D`, `Décoder l'anatomie du sujet, gérer ses 4 heures et activer les réflexes de survie.`],
            [`Module 3`, `Sujet BAC complet n°1 — corrigé intégral`, `S'entraîner sur une épreuve réelle et viser la Copie Parfaite question par question.`],
            [`Module 4`, `Sujet BAC complet n°2 — corrigé intégral`, `Renforcer ses automatismes sur un sujet complémentaire pour ne rien laisser au hasard.`],
          ],
        },
        {
          type: 'text',
          id: 'b4',
          contenu: `Après les modules, la **Salle d'Entraînement** t'attend avec 5 exercices flash chronométrés, un par grand bloc, pour aiguiser ta vitesse. Puis viendra le couronnement.`,
        },
      ],
    },
    {
      id: 's4',
      titre: `Le mot de la fin avant d'attaquer`,
      blocs: [
        {
          type: 'text',
          id: 'b5',
          contenu: `Faut pas gnan, Champion(ne). Le BAC D, ce n'est pas de la magie, ce n'est pas de la sorcellerie. Ce n'est pas un monstre mystique venu d'ailleurs pour te piéger. C'est juste quatre heures de ta vie où tu vas poser proprement sur ta copie ce que tu as répété, décortiqué et compris cent fois à ton bureau. Quand tu ouvriras le cahier d'examen le jour J, dépouille-le de son mystère et regarde-le bien en face. Chaque question posée a un type bien précis. Et chaque type a sa procédure claire et nette. Tu connais ces procédures. Tu as les clés en main. Respire un grand coup, redresse la tête, et avance avec la certitude de celui ou celle qui sait exactement où il va. Tu as travaillé dur pour ce moment, et le travail ne trahit jamais.

**Marius Dion — Ton Grand Frère · Fondateur EDUCTOME · Abidjan, Côte d'Ivoire**

P.S. : Laisse-moi te confier un petit secret de caïman. En juillet 2002, quand je me suis assis à ma table d'examen au Lycée Classique d'Abidjan, sous les grands arbres du « Cacao », mes mains tremblaient un peu. Et puis je me suis rappelé les paroles de mes aînés : « Marius, calme le jeu. Le sujet n'invente rien. C'est toi le patron de ta copie ici. » J'ai fermé les yeux trois secondes, bu une petite gorgée d'eau, et ouvert le sujet. En lisant la première ligne du grand problème, j'ai souri : ce n'était qu'une étude de fonction avec une exponentielle et une suite imbriquée, le même vieux jeu qu'on avait décortiqué des dizaines de fois. La peur s'est évaporée d'un coup, remplacée par la concentration pure. C'est ce déclic précis que je veux pour toi cette année, Champion(ne). Range tes doutes au placard, prends ton stylo fétiche, et prépare-toi. On va gâter le coin.`,
        },
      ],
    },
  ],
};
