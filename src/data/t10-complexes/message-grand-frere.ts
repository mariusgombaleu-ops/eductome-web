import { Chapitre } from '../../types/course';

export const chapitreIntro: Chapitre = {
  id: 't10-intro',
  titre: `Introduction : Message du Grand Frère`,
  duree: 5,
  niveau: 'BASE',
  xpGain: 10,
  gratuit: true,
  sections: [
    {
      id: 's1',
      titre: `On entre dans le tome le plus emblématique`,
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu: `Salut Champion(ne). Prends une grande inspiration, ferme ton cahier de brouillon deux minutes et écoute-moi bien. On entre aujourd'hui dans le tome le plus emblématique de toute ton année de Terminale D : les nombres complexes. C'est le cœur du programme, le tome référence du vocabulaire EDUCTOME, et je te promets qu'à la fin tu le manieras comme un terrain de jeu.

Tu te souviens du Tome 9 ? On a transpiré ensemble dans l'espace en trois dimensions : des vecteurs, des plans, des distances, des angles, des sphères. On calculait des positions avec trois coordonnées $(x ; y ; z)$ et il fallait sans cesse dessiner pour visualiser. En T10, on redescend dans le plan, à deux dimensions seulement. Mais attention, on ne revient pas dans le petit repère sage que tu connais depuis la Troisième. On entre dans un plan magique, où chaque point n'est plus un simple couple de coordonnées, mais un nombre à part entière. Et le miracle, c'est que multiplier ces nombres, c'est faire tourner des points ; les additionner, c'est les déplacer. La géométrie que tu viens de dompter dans l'espace va se transformer en pure algèbre.

Depuis la classe de Quatrième, tes professeurs t'ont regardé droit dans les yeux pour t'affirmer une règle absolue : un carré est toujours positif ou nul, jamais négatif. Et là, en Terminale, on débarque tranquillement avec un nombre $i$ tel que $i^2 = -1$. C'est quoi encore cette affaire ? Tu as le droit d'être un peu déboussolé(e). Mais respire, faut pas avoir peur. Ce n'est pas une erreur de calcul, et on ne cherche pas à t'embrouiller. C'est une clé géniale inventée pour ouvrir une porte fermée depuis des siècles. Un monde tout neuf s'offre à toi.`,
        },
      ],
    },
    {
      id: 's2',
      titre: `Le portefeuille et la boussole`,
      blocs: [
        {
          type: 'text',
          id: 'b2',
          contenu: `Imagine un instant que tu gères un portefeuille un peu spécial. D'un côté, tu as de vrais billets, tes bons vieux FCFA : c'est ta partie réelle. De l'autre, tu possèdes une monnaie virtuelle, purement imaginaire, réservée à des transactions très particulières : c'est ta partie imaginaire. Quand tu fais le bilan, tout se range dans un seul objet, mais les FCFA et la monnaie imaginaire ne se mélangent jamais directement. Chacun reste à sa place, bien aligné. C'est exactement ça, la forme algébrique d'un nombre complexe $z = a + ib$.

Ensuite, pour te repérer dans cet univers sans te perdre, on va sortir la carte d'Abidjan comme une boussole. Au lieu de donner bêtement les coordonnées cartésiennes d'un point au Plateau, on raisonnera en distance par rapport au centre et en direction à suivre. Même lieu physique, même destination, mais décrit autrement. C'est tout l'enjeu des formes trigonométrique et exponentielle. Et quand on cherchera les fameuses racines n-ièmes, on pensera aux grands carrefours : trois ou quatre quartiers parfaitement équidistants répartis autour d'Adjamé. Enfin, tu découvriras que faire tourner un monument sur la Place de la République, ou le déplacer, ne demande plus aucun dessin compliqué : juste une addition ou une multiplication.`,
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
          contenu: `Voici le plan de vol de ce dixième tome. Six modules, six victoires concrètes à aller chercher.`,
        },
        {
          type: 'table',
          id: 'tbl-route',
          headers: [`Module`, `Ce qu'on va débloquer`, `Outil principal`],
          rows: [
            [`M1 — La forme algébrique`, `Apprivoiser le nombre $i$ et maîtriser les opérations de base (le portefeuille FCFA et imaginaire).`, `Conjugué et module`],
            [`M2 — Formes trigonométrique et exponentielle`, `Transformer des coordonnées en distance et angle, et plier les puissances géantes (la boussole d'Abidjan).`, `Module, argument et formule de Moivre`],
            [`M3 — Équations dans $\\mathbb{C}$ et factorisation`, `Résoudre l'impossible dans $\\mathbb{C}$ et casser un polynôme grâce à une racine connue.`, `Discriminant et factorisation`],
            [`M4 — Racines n-ièmes`, `Répartir des points équidistants sur un cercle (les quartiers d'Adjamé).`, `Formule des racines n-ièmes`],
            [`M5 — Nombres complexes et géométrie`, `Calculer distances, angles et lieux de points directement avec les affixes.`, `Affixe, module et argument d'un quotient`],
            [`M6 — Écritures complexes des transformations`, `Faire tourner, déplacer ou étirer une figure par un simple calcul (la Place de la République).`, `Écriture $z' = az + b$ et suites de points`],
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
          contenu: `Pour réussir ce chapitre, on va travailler sur **trois registres** en même temps — c'est ça, la grande méthode EDUCTOME.

Le premier registre, c'est **l'intuition du Grand Frère** 🟢 : fermer les yeux, lire la consigne et « voir » la scène concrète — le portefeuille, la boussole, le carrefour — avant même de toucher au stylo. Le deuxième registre, c'est **le Langage Officiel du BAC** 📘 : les mots exacts que le correcteur attend sur ta copie — « partie réelle », « module », « argument », « racines conjuguées », « similitude directe ». Comprendre, c'est bien ; le dire dans la langue du BAC, c'est ce qui rapporte les points. Le troisième registre, c'est **la Copie Parfaite** ✍️ : la rédaction modèle, propre et rigoureuse, telle qu'elle doit apparaître sur ta feuille le jour J. On comprend d'abord avec les yeux, on nomme avec la rigueur du mathématicien, puis on rédige comme un major de promo.`,
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
          contenu: `Je me souviens très bien de mes premières semaines face à ce chapitre, quand j'étais assis sur les bancs du Cacao, au Lycée Classique d'Abidjan, entre 2013 et 2016. Le professeur remplissait le tableau de $z$, de $\\overline{z}$ et de modules bizarres. Tout le monde hochait la tête pour faire semblant, mais au fond, la panique montait : ça paraissait gigantesque. Pourtant, ce n'est qu'un code à craquer, Champion(ne). Il y a un point de vigilance ici, une erreur à éviter là, mais rien d'insurmontable si on avance pas à pas, avec méthode.

Faut pas gnan, Champion(ne). Tu n'as pas besoin d'être un génie pour dominer ce tome : tu as besoin d'une méthode claire et d'un grand frère qui s'assoit à côté de toi. On va décortiquer chaque notion, repérer chaque erreur à éviter, et construire ta technique brique par brique. Prends ton stylo, salis ton brouillon sans hésiter, et ouvre grand ton esprit à la lettre magique $i$. On y va.

**Marius Dion — Ton Grand Frère**
*EDUCTOME — Apprendre sans limites*

P.S. : Grave une seule chose dans le marbre avant même d'ouvrir le Module 1 : $i^2 = -1$. Toujours. C'est le pilier qui tient tout le tome. Dès que tu vois un $i^2$ sur ton brouillon, tu le barres et tu écris $-1$ à la place. Ce réflexe-là te sauvera des dizaines de points le jour du BAC.`,
        },
      ],
    },
  ],
};
