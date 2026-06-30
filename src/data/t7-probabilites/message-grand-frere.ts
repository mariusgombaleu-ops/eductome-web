import { Chapitre } from '../../types/course';

export const chapitreIntro: Chapitre = {
  id: 't7-intro',
  titre: `Introduction : Message du Grand Frère`,
  duree: 5,
  niveau: 'BASE',
  xpGain: 10,
  gratuit: true,
  sections: [
    {
      id: 's1',
      titre: `Salut, Champion(ne) !`,
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu: `Après six tomes entiers à transpirer sur l'analyse — dériver des fonctions dans tous les sens, calculer des intégrales, traquer des limites trigonométriques qui n'en finissent pas — on ferme enfin cette parenthèse. Je sais ce que l'analyse t'a demandé : de la rigueur, des nuits de calculs sur des brouillons raturés dix fois pour trouver le bon signe ou la bonne asymptote. Aujourd'hui, on change de monde. Le Tome 7, c'est les probabilités : la mathématique du hasard, de l'incertitude et de la prise de décision. Faut pas gnan, c'est un nouveau souffle, presque une récréation intellectuelle si tu prends la chose sous le bon angle. La rigueur reste, mais le terrain de jeu change complètement.`,
        },
      ],
    },
    {
      id: 's2',
      titre: `Dompter l'incertitude`,
      blocs: [
        {
          type: 'text',
          id: 'b2',
          contenu: `Au quartier, les gens croient souvent que les maths servent à trouver LA bonne réponse exacte, un truc figé dans le marbre. Mais la vraie vie n'est pas comme ça. La vraie vie est incertaine, remplie de doutes et de variables qu'on ne contrôle pas. Les probabilités, c'est l'art de dompter cette incertitude. On ne joue pas aux devins. On ne prédit pas ce qui va arriver avec certitude. On mesure exactement la chance que ça se produise.

Regarde les tontons qui grattent leurs tickets LONACI à Adjamé. Ils se fient à leur instinct, ils analysent les anciens tirages, ils espèrent tous décrocher le gros lot. Nous, avec les probas, on va quitter l'émotion pour entrer dans la pure logique. On va calculer noir sur blanc pourquoi le système est mathématiquement fait pour qu'ils soient perdants sur le long terme. C'est pareil pour la grande kermesse du Lycée Classique d'Abidjan. Tu achètes ton ticket de tombola à $1\\,000$ francs en espérant gagner le dernier smartphone. Ton cœur bat au moment du tirage. Mais avant même que la main innocente ne plonge dans l'urne, l'organisateur connaît déjà, grâce aux probabilités, la somme exacte qu'il va récolter. On va pouvoir calculer ton gain moyen espéré à ce jeu. C'est ça, la puissance de ce tome : mettre des chiffres et une structure sur le hasard pur.`,
        },
      ],
    },
    {
      id: 's3',
      titre: `Ta Feuille de Route — Les 6 Modules`,
      blocs: [
        {
          type: 'text',
          id: 'b3',
          contenu: `Voici la carte de notre voyage. Six étapes bien précises pour quadriller tout le programme de Terminale D.`,
        },
        {
          type: 'table',
          id: 'tbl-route',
          headers: [`Module`, `Ce qu'on va y faire`, `La vraie question à se poser`],
          rows: [
            [`M1 — Dénombrement`, `Compter sans se tromper : permutations, arrangements, combinaisons. Apprivoiser le coefficient binomial et le Triangle de Pascal.`, `De combien de façons différentes puis-je choisir, ranger ou tirer mes objets ?`],
            [`M2 — Vocabulaire & Équiprobabilité`, `Parler le langage exact du hasard : univers, événements, le « ET », le « OU », le contraire. Calculer une probabilité par comptage.`, `Quelle est ma chance quand toutes les issues ont exactement le même poids ?`],
            [`M3 — Probabilités Conditionnelles`, `Calculer une probabilité avec une information supplémentaire. Maîtriser les arbres pondérés et la formule des probabilités totales.`, `Si je sais que A est déjà arrivé, comment ça modifie mes chances pour B ?`],
            [`M4 — Variables Aléatoires`, `Associer un gain ou un nombre précis à chaque issue. Calculer l'espérance E(X), la variance V(X) et l'écart-type.`, `En moyenne, si je joue 100 fois, combien je gagne ou je perds par partie ?`],
            [`M5 — Loi Binomiale`, `Répéter la même épreuve à deux issues (succès/échec) de façon indépendante. Compter les succès.`, `Sur 10 tickets grattés, quelle est la chance d'en avoir exactement 3 gagnants ?`],
            [`M6 — Fonction de Répartition`, `Cumuler les probabilités jusqu'à une valeur x et tracer la courbe en escalier.`, `Quelle est la probabilité de gagner au plus un certain montant ?`],
          ],
        },
      ],
    },
    {
      id: 's4',
      titre: `Comment on va travailler ensemble`,
      blocs: [
        {
          type: 'text',
          id: 'b4',
          contenu: `Comme d'habitude dans la collection Les Clés, on va jouer sur trois tableaux. Le triple registre, Champion(ne).

D'abord, **🟢 le Grand Frère t'explique** : je veux que tu ressentes le concept avant même de poser le stylo. Si tu ne visualises pas ce qu'est une épreuve indépendante ou une variable aléatoire dans la vraie vie, tu vas appliquer des formules à l'aveugle. C'est là que naissent les erreurs absurdes — les probabilités supérieures à $1$, la confusion entre incompatibilité et indépendance. Ensuite, **📘 le Langage Officiel du BAC** : à chaque notion, je te donne le vocabulaire exact que le correcteur attend sur ta copie, les mots à écrire au mot près. Enfin, **✍️ la Copie Parfaite** : la rédaction-modèle complète, telle qu'elle doit apparaître le jour de l'épreuve, sans perdre le moindre demi-point. On comprend avec l'intuition du quotidien, on nomme avec la rigueur du BAC, on rédige sans bavure.`,
        },
      ],
    },
    {
      id: 's5',
      titre: `Mon dernier mot avant le Module 1`,
      blocs: [
        {
          type: 'text',
          id: 'b5',
          contenu: `Je connais ce chapitre par cœur. Quand le prof de maths arrive en classe, écrit la formule $P_B(A) = \\dfrac{P(A \\cap B)}{P(B)}$ au tableau et demande d'un ton sec « Tout le monde a compris ? », je sais ce qui se passe. Il y a toujours ce silence pesant dans la salle. Personne ne répond. Tu fixes ton cahier en espérant que le prof ne croise pas ton regard, pendant que tout le monde espère secrètement que le voisin posera la question qui fâche. Le brouillon est raturé dix fois parce qu'on ne sait pas s'il faut multiplier ou additionner les probabilités sur les branches de l'arbre.

C'était exactement pareil quand j'étais au Cacao, le Lycée Classique d'Abidjan, entre 2013 et 2016. On s'embrouillait avec les boules tirées avec ou sans remise dans des urnes improbables. Mais toi, Champion(ne), tu ne vas plus subir ça. Tu es avec moi maintenant. On va prendre le temps de décortiquer chaque notion, chaque nœud de l'arbre pondéré, chaque coefficient binomial. Je vais te montrer que derrière ces symboles qui ressemblent à un dialecte étranger se cachent des situations logiques de tous les jours : un repas qu'on compose au food court, une équipe qu'on sélectionne, un sondage au conservatoire de musique.

On ne va rien laisser au hasard, justement. Tu vas maîtriser cette matière, et ces exercices deviendront tes points gratuits le jour de l'épreuve. Allez, prends ton bic, ouvre ton cahier de brouillon. On attaque.

**Marius Dion — Ton Grand Frère**

*P.S. — Garde toujours ta calculatrice à portée de main. Dans ce tome, les fractions, les puissances et les factorielles vont vite devenir tes meilleures amies. Et n'oublie jamais la règle d'or : une probabilité est toujours comprise dans l'intervalle $\\left[\\,0\\ ;\\ 1\\,\\right]$. Si tu trouves $1{,}5$ à la fin d'un calcul, pose le stylo, barre tout et recommence !*`,
        },
      ],
    },
  ],
};
