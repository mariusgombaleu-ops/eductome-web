import { Chapitre } from '../../types/course';

export const chapitreIntro: Chapitre = {
  id: 't11-intro',
  titre: `Introduction : Message du Grand Frère`,
  duree: 5,
  niveau: 'BASE',
  xpGain: 10,
  gratuit: true,
  sections: [
    {
      id: 's1',
      titre: `Le sommet de la montagne`,
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu: `Salut Champion(ne). Prends une grande inspiration et écoute-moi bien, parce qu'on entre aujourd'hui dans un tome un peu spécial : c'est le tout dernier chapitre d'analyse de ton année de Terminale D. Le sommet de la montagne. Après dix tomes à grimper, te voilà au point culminant — et la vue, je te promets, vaut le déplacement.

Tu te souviens du Tome 10 ? On a appris que multiplier par $e^{i\\theta}$ revient à faire tourner un point dans le plan : une vraie danse géométrique au pays des nombres imaginaires. C'était élégant, abstrait. En T11, on change de dimension. L'exponentielle sort du plan et descend décrire le monde réel, celui qui bouge : la charge d'une batterie de téléphone qui grimpe et plafonne, la température d'un attiéké qui refroidit sur la table, les oscillations d'un pont sous la pression du vent. On introduit le temps.`,
        },
      ],
    },
    {
      id: 's2',
      titre: `La Grande Idée : l'inconnue est une fonction`,
      blocs: [
        {
          type: 'text',
          id: 'b2',
          contenu: `Depuis la classe de Sixième, quand on te demandait de résoudre $2x + 5 = 0$ ou $x^2 - 4 = 0$, tu cherchais quoi ? Un nombre. Un petit $x$ caché qu'il fallait isoler. La Grande Idée de ce tome, la bascule qui va tout changer dans ta tête, c'est qu'une **équation différentielle est une équation dont l'inconnue est une FONCTION**. Pas un chiffre. Pas deux. Une fonction entière, $y(x)$ ou $y(t)$, avec sa courbe, ses variations, son histoire. Tu ne cherches plus une position à un instant précis : tu cherches le **scénario complet** de l'évolution d'un phénomène.

Faut pas gnan devant ce mot qui sonne savant. « Différentielle » veut juste dire qu'à l'intérieur de l'équation, on a mélangé la fonction $y$ avec sa dérivée $y'$ (sa vitesse de variation) ou sa dérivée seconde $y''$ (son accélération). C'est le lien intime entre une grandeur et la façon dont elle évolue.`,
        },
      ],
    },
    {
      id: 's3',
      titre: `La traduction sur le terrain`,
      blocs: [
        {
          type: 'text',
          id: 'b3',
          contenu: `Laisse-moi te donner la traduction sur le terrain. L'attiéké tout fumant de la maman à Adjamé, sorti du feu à $90$ °C, ne refroidit pas à vitesse constante. Au début ça brûle les doigts, la chaleur s'échappe très vite ; puis, plus il s'approche de la température de l'air, plus le refroidissement ralentit. La vitesse de chute $T'$ dépend de la température $T$ elle-même. C'est l'essence de l'équation $y' + ay = 0$.

Et si on complique un peu ? Pense au ventilateur allumé dans ta chambre. La pièce ne refroidit pas jusqu'à zéro degré : le moteur apporte une force extérieure constante, et la température tend vers un équilibre. C'est l'équation avec second membre, $y' + ay = b$. Puis on monte d'un cran : le Pont de la Corniche à Abidjan, frappé par les alizés. Le tablier monte, est rappelé vers le bas par son poids, redescend, remonte. Son accélération $y''$ dépend de sa position $y$. C'est le second ordre, le domaine des vibrations.

Pour vaincre tout ça, les outils que tu as aiguisés dans les tomes passés deviennent tes meilleures armes. La fonction exponentielle $e^{ax}$ du Tome 5 et la trigonométrie $\\cos(\\omega x)$, $\\sin(\\omega x)$ du Tome 6 ne sont plus des fonctions à étudier : elles deviennent **les solutions** de tes équations. La boucle est bouclée, Champion(ne).`,
        },
      ],
    },
    {
      id: 's4',
      titre: `Les trois registres de la méthode`,
      blocs: [
        {
          type: 'text',
          id: 'b4',
          contenu: `Pour réussir ce chapitre, on travaille sur **trois registres** en même temps — c'est ça, la grande méthode EDUCTOME. Le premier, c'est **l'intuition du Grand Frère** 🟢 : lire la consigne et « voir » la scène — l'attiéké, le ventilateur, le pont — avant de toucher au stylo. Le deuxième, c'est **le Langage Officiel du BAC** 📘 : les mots exacts que le correcteur attend sur ta copie — « équation homogène associée », « solution particulière », « principe de superposition », « condition initiale ». Comprendre, c'est bien ; le dire dans la langue du BAC, c'est ce qui rapporte les points. Le troisième, c'est **la Copie Parfaite** ✍️ : la rédaction modèle, propre, telle qu'elle doit apparaître sur ta feuille le jour J. On comprend avec les yeux, on nomme avec rigueur, on rédige comme un major de promo.

Quand je transpirais sur les bancs du Lycée Classique d'Abidjan, « le Cacao » de Cocody, entre 2013 et 2016, ce chapitre tétanisait la plupart des élèves. Ils se cassaient les dents parce qu'ils tentaient d'apprendre des formules par cœur, sans comprendre la physique derrière. Toi, tu vas faire l'inverse : lire la situation, poser ton diagnostic, dérouler la procédure. Tu vas devenir l'architecte du problème, Champion(ne).`,
        },
      ],
    },
    {
      id: 's5',
      titre: `Ta Feuille de Route — Les 6 Modules`,
      blocs: [
        {
          type: 'text',
          id: 'b5',
          contenu: `Voici le plan de vol de ce dernier grand voyage analytique. Six modules, six victoires concrètes.`,
        },
        {
          type: 'table',
          id: 'tbl-route',
          headers: [`Module`, `Ce qu'on va débloquer`, `Outils à mobiliser`],
          rows: [
            [`M1 — $y' + ay = 0$`, `La décroissance naturelle : refroidissement, désintégration. La famille des solutions $Ce^{-ax}$.`, `Exponentielle $e^{-ax}$ et constante $C$`],
            [`M2 — $y' + ay = b$`, `La force extérieure et l'équilibre : ce vers quoi le système se stabilise.`, `Solution particulière $y_p = \\dfrac{b}{a}$`],
            [`M3 — Second membre variable`, `Quand le second membre n'est plus constant : solution particulière et principe de superposition.`, `« $f$ solution de $(E)$ $\\iff f - g$ solution de $(E')$ »`],
            [`M4 — 2nd ordre, oscillations`, `Les systèmes qui vibrent : ressorts, ponts, circuits. Les solutions $A\\cos + B\\sin$.`, `Trigonométrie du T6 et système $2\\times 2$`],
            [`M5 — 2nd ordre, exponentielles`, `L'évolution divergente $Ae^{\\omega x} + Be^{-\\omega x}$ et le cas affine $y'' = 0$.`, `Exponentielle réelle et système $2\\times 2$`],
            [`M6 — Applications`, `Le Grand Problème du BAC : refroidissement, radioactivité, population, circuit RC.`, `Tout l'arsenal des modules 1 à 5`],
          ],
        },
      ],
    },
    {
      id: 's6',
      titre: `Mon dernier mot avant le Socle`,
      blocs: [
        {
          type: 'text',
          id: 'b6',
          contenu: `Le baccalauréat aime passionnément les équations différentielles. Elles tombent presque à chaque session dans le grand problème, souvent cachées dans la première partie, et systématiquement en physique-chimie pour les circuits électriques. Ton succès ici aura donc un **double impact**, Champion(ne) : en maths ET en physique.

Faut pas gnan. Tu n'as pas besoin d'être un génie pour dominer ce tome : tu as besoin d'une méthode claire et d'un grand frère assis à côté de toi. On y va brique par brique, sereinement.

**Marius Dion — Ton Grand Frère**
*EDUCTOME — Apprendre sans limites*

P.S. : Grave un seul réflexe avant d'ouvrir le Module 1. Devant n'importe quelle équation différentielle, on commence **toujours** par résoudre l'équation homogène associée. C'est la fondation absolue. On ne pose jamais le toit avant d'avoir coulé la dalle. Garde ça en tête, Champion(ne), et la moitié du chemin est déjà faite.`,
        },
      ],
    },
  ],
};
