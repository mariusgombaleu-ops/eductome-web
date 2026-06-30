import { Chapitre } from '../../types/course';

export const chapitreIntro: Chapitre = {
  id: 't9-intro',
  titre: `Introduction : Message du Grand Frère`,
  duree: 5,
  niveau: 'BASE',
  xpGain: 10,
  gratuit: true,
  sections: [
    {
      id: 's1',
      titre: `On monte d'une dimension`,
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu: `Salut Champion(ne). Prends une grande inspiration et installe-toi confortablement. Aujourd'hui, on attaque un des plus gros morceaux du programme — et je te promets qu'à la fin de ce tome, ce sera devenu un terrain de jeu.

Tu te souviens du Tome 8 ? On mesurait des liens et des distances dans un plan. Tout était plat, lisse, limité à deux directions. On dessinait sur une feuille à carreaux, on plaçait des points avec seulement deux petites coordonnées $(x ; y)$, on traçait des droites qui se croisaient ou s'évitaient. Le monde semblait simple et bien rangé. Mais lève les yeux de ta copie une seconde et regarde autour de toi, dans ta chambre ou dans la rue. Le monde dans lequel tu vis, est-ce que c'est une feuille de papier plat ? Évidemment que non.

En T9, on monte d'une dimension. Le monde réel est en 3D, et nos outils mathématiques doivent suivre. Tout ce que tu faisais dans le plan, on va l'étendre, l'étirer et lui donner du volume. Tes vecteurs, tes calculs de distance, tes équations... tout ça va intégrer une troisième direction avec l'arrivée d'un nouveau paramètre : la fameuse coordonnée $z$, qu'on appelle la **cote**. Elle vient s'installer juste à côté de l'abscisse $x$ et de l'ordonnée $y$, et c'est elle qui va donner l'altitude, la profondeur et le relief à tes mathématiques.`,
        },
      ],
    },
    {
      id: 's2',
      titre: `Tu connais déjà l'espace, Champion(ne)`,
      blocs: [
        {
          type: 'text',
          id: 'b2',
          contenu: `Beaucoup d'élèves paniquent avec ce chapitre parce qu'ils n'arrivent pas à visualiser l'espace. Ils forcent leur cerveau à voir des formes en 3D sur un tableau noir désespérément plat. Mais tu connais déjà l'espace, Champion(ne) ! Tu le pratiques tous les jours sans même y penser.

Prends le livreur de bouteilles de gaz à Adjamé. Quand il part de la place de l'Indénié pour livrer un client au troisième étage d'un immeuble, il ne se déplace pas comme un pion sur un damier plat. Il fait trois mètres vers la droite, deux mètres en avant, puis il grimpe quinze marches d'escalier vers le haut. Ses déplacements, bout à bout, forment exactement un vecteur à trois dimensions. Il manipule des coordonnées $(x ; y ; z)$ avec ses pieds !

Pense aussi au pont Henri Konan Bédié qui enjambe la lagune. Regarde la route tout en haut sur le pont, et la voie rapide qui passe loin en dessous. Elles ne sont pas parallèles. Et pourtant, elles ne se croiseront jamais. Dans la géométrie plane que tu connaissais, c'était impossible : deux droites non parallèles finissent toujours par se percuter. Mais dans l'espace, elles peuvent s'ignorer royalement. On appelle ça des **droites gauches**. C'est une petite révolution pour ton esprit.

Tu as déjà vu un maçon construire un mur dans ton quartier ? Il utilise un fil à plomb : une simple ficelle avec un poids au bout, qui pend parfaitement à la verticale, perpendiculaire au sol. Ce bout de ficelle tendu, c'est l'incarnation du **vecteur normal**, une direction unique qui dicte à elle seule l'inclinaison de tout un plan. Et quand l'arbitre pose le ballon au centre de la pelouse du Stade Félix Houphouët-Boigny, qu'est-ce que tu vois avec tes lunettes de mathématicien ? Une **sphère** parfaite posée sur un plan. La distance entre le centre du ballon et le gazon qu'il touche, c'est son rayon. Tout est géométrie.`,
        },
      ],
    },
    {
      id: 's3',
      titre: `Ta Feuille de Route — Les 7 Modules`,
      blocs: [
        {
          type: 'text',
          id: 'b3',
          contenu: `Voici le plan de vol de ce neuvième tome. Sept modules, sept victoires concrètes à aller chercher.`,
        },
        {
          type: 'table',
          id: 'tbl-route',
          headers: [`Module`, `Ce qu'on va débloquer`, `Outil principal`],
          rows: [
            [`M1 — Vecteurs de l'espace`, `Manipuler les coordonnées 3D et vérifier si des points sont alignés ou dans le même plan.`, `Colinéarité et coplanarité`],
            [`M2 — Barycentre dans l'espace`, `Trouver le point d'équilibre exact de plusieurs points pondérés.`, `Coordonnées du barycentre`],
            [`M3 — Produit scalaire dans l'espace`, `Détecter les angles droits, mesurer des longueurs et des angles. (+ bonus produit vectoriel)`, `Produit scalaire 3D`],
            [`M4 — Droites et plans : représentations`, `Écrire l'équation d'une droite (paramétrique) et d'un plan (cartésienne).`, `Représentation paramétrique et vecteur normal`],
            [`M5 — Positions relatives`, `Savoir si deux droites se croisent, s'évitent (gauches), ou si une droite perce un plan.`, `Systèmes paramétriques`],
            [`M6 — Orthogonalité et vecteur normal`, `Gérer toutes les perpendicularités et le projeté orthogonal.`, `Vecteur normal et colinéarité`],
            [`M7 — Distances et sphères`, `Calculer l'écart exact d'un point à un plan, et couper une sphère par un plan.`, `Formule de distance et équation de sphère`],
          ],
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
          contenu: `Pour réussir ce chapitre, on va travailler sur **trois registres** en même temps, et c'est ça la grande nouveauté de la méthode EDUCTOME.

Le premier registre, c'est **l'intuition du Grand Frère** 🟢 : fermer les yeux, lire la consigne et imaginer la scène concrète avant de toucher à la calculatrice. Si on te demande l'intersection de deux murs de ta chambre, tu sais d'avance que le résultat sera une droite (l'arête). Si ton calcul te sort un point ou une sphère, ton intuition doit tirer la sonnette d'alarme.

Le deuxième registre, c'est **le Langage Officiel du BAC** 📘 : les mots exacts que le correcteur attend sur ta copie — « colinéaires », « coplanaires », « vecteur normal », « représentation paramétrique ». Comprendre, c'est bien ; le dire dans la langue du BAC, c'est ce qui rapporte les points.

Le troisième registre, c'est **la Copie Parfaite** ✍️ : la rédaction modèle, propre, rigoureuse, telle qu'elle doit apparaître sur ta feuille le jour J. On comprend d'abord avec les yeux du maçon, on nomme avec la rigueur du mathématicien, puis on rédige comme un major de promo.`,
        },
      ],
    },
    {
      id: 's5',
      titre: `Mon dernier mot avant le Socle`,
      blocs: [
        {
          type: 'text',
          id: 'b5',
          contenu: `Au Lycée Classique d'Abidjan, on appelait la géométrie dans l'espace « l'hécatombe du deuxième trimestre ». Le professeur dessinait un grand cube au tableau, ajoutait des diagonales tordues, des plans qui coupaient les arêtes, et soudain la moitié de la classe était perdue. J'ai vu d'excellents élèves, des bêtes en étude de fonctions entre 2013 et 2016, abandonner devant une simple équation cartésienne de plan. Pas par manque d'intelligence — par manque de méthode.

Faut pas gnan, Champion(ne). Tu n'es pas là pour faire les Beaux-Arts ni pour dessiner des chefs-d'œuvre en perspective. Tu es là pour analyser des situations géométriques claires avec des outils algébriques surpuissants. Ne laisse pas une coordonnée $z$ t'intimider. On va décortiquer chaque notion, repérer chaque erreur à éviter, et construire ta méthode pas à pas.

Prends ton stylo, ouvre grand ton esprit à la troisième dimension. On y va.

**Marius Dion — Ton Grand Frère**
*EDUCTOME — Apprendre sans limites*

P.S. : Garde toujours un œil sur les signes quand tu calcules les coordonnées d'un vecteur $\\vec{AB}$. C'est la première source d'erreurs bêtes le jour du BAC. Toujours l'arrivée moins le départ, jamais l'inverse !`,
        },
      ],
    },
  ],
};
