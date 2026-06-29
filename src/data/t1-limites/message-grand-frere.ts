import { Chapitre } from '../../types/course';

export const chapitreIntro: Chapitre = {
  id: 't1-intro',
  titre: `Introduction : Message du Grand Frère`,
  duree: 5,
  niveau: 'BASE',
  xpGain: 10,
  gratuit: true,
  sections: [
    {
      id: 's1',
      titre: `Avant qu'on commence, assieds-toi.`,
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu: `Respire un bon coup, détends les épaules. On va se parler franchement, toi et moi.

Tu viens d'entrer en Terminale D, et je devine ce qui tourne dans ta tête en ce moment. Les profs qui sortent les grands discours sur le sérieux du BAC dès le premier cours. Tes parents qui te regardent avec ce mélange d'espoir et d'inquiétude. Les rumeurs qui circulent déjà : « la D, c'est dur », « les fonctions, c'est piégeux », « le correcteur, il ne pardonne rien ». Et toi, au milieu, qui te demandes si tu vas tenir le rythme.

Laisse-moi te dire une vérité toute simple, Champion(ne) : **le BAC n'a rien de sorcier**. C'est un examen. Un jeu scolaire dont les règles sont fixées et connues d'avance. Et ce livre que tu tiens entre les mains n'est pas un manuel de plus pour alourdir ton étagère. C'est notre espace de discussion, à toi et à moi. C'est aussi ta salle d'entraînement : pour tes interros, tes devoirs, et surtout pour le grand jour.`,
        },
      ],
    },
    {
      id: 's2',
      titre: `Pourquoi je suis bien placé pour t'aider`,
      blocs: [
        {
          type: 'text',
          id: 'b2',
          contenu: `Tu te demandes peut-être qui je suis pour écrire ce livre, pour prétendre t'accompagner jusqu'au BAC. Tes questions sont légitimes. Voici la réponse courte : **je suis passé exactement là où tu es aujourd'hui**.

J'ai été élève au Lycée Classique d'Abidjan — le vieux « Cacao » de Cocody — promotion 2013-2016. Cet endroit où on oriente uniquement les « cerveaux », ceux qu'on appelle les « petits génies ». Au collège, j'étais le genre d'élève sérieux qui collectait les bonnes moyennes sans trop forcer. Puis le Lycée Classique m'a rattrapé. Le rythme du collège n'avait rien à voir avec celui de la Terminale. Le niveau était plus élevé, les cours pleuvaient, les profs ne facilitaient rien. Les lacunes s'accumulaient. Et derrière, forcément, les mauvaises notes.

Il fallait courir partout : acheter des manuels, supplier les grands frères de Terminale C de nous expliquer un cours. C'est dans ce stress qu'on a tous fini par comprendre une chose : **réussir en Terminale, ce n'est pas une question d'intelligence. C'est une question de compréhension et de méthode.**

Les « génies », les « cerveaux » — en vérité, ce sont juste ceux qui ont compris plus tôt que les autres comment **comprendre** ce qu'ils manipulent, et qui ont une méthode claire pour l'appliquer. Voilà tout le secret. Ce n'est pas une question de naissance.

C'est cette conviction qui fonde EDUCTOME. Si tu passes ton année à mémoriser des cours et des formules sans comprendre ce que tu manipules, tu vas bloquer dès qu'un exercice change de visage. Ou pire : tu vas connaître la formule par cœur sans jamais savoir **quand** ni **comment** l'appliquer. C'est ce piège-là qui fait le plus mal au BAC.

Moi, je suis **Marius Dion**, ton grand frère EDUCTOME. Je ne vais pas seulement t'aider à comprendre les maths. Je vais te transmettre les méthodes que j'ai moi-même utilisées pour faire passer cette compréhension dans mes copies. Tu ne lis pas seul. Je suis assis à côté de toi, pour te guider pas à pas — le grand frère que j'aurais aimé avoir à ton âge.`,
        },
      ],
    },
    {
      id: 's3',
      titre: `Comment on va travailler ensemble`,
      blocs: [
        {
          type: 'text',
          id: 'b3',
          contenu: `Un principe non négociable dans ce tome : **on comprend le sens avant de toucher à la moindre formule.** Le phénomène d'abord, le calcul ensuite. Toujours.

Pour chaque notion, tu vas circuler entre **trois registres** bien distincts. Ils ne se mélangent jamais, et chacun a son rôle :

### 🟢 « Le Grand Frère t'explique » — pour COMPRENDRE
On pose le problème avec des mots de tous les jours et des situations concrètes d'Abidjan : un gbaka qui s'arrête au feu, le marché d'Adjamé, un kiosque de café. On enlève le jargon pour regarder le squelette mathématique en face.

### 📘 « Le Langage Officiel du BAC » — pour MÉMORISER le bon vocabulaire
Une fois que tu as compris l'intuition, on traduit ça dans le vocabulaire exact que le correcteur attend de toi : limite finie, limite à gauche, bijection, voisinage. Ce sont les **mots de ta copie**. Pas négociables.

### ✍️ « La Copie Parfaite » — pour RÉDIGER comme un champion
On écrit, ligne par ligne, exactement ce qu'il faut poser sur ta feuille pour récolter tous les points du barème. Avoir le bon résultat ne suffit pas en série D : il faut le **rédiger** dans les règles de l'art.

Comprendre, mémoriser, rédiger. Trois étapes. Trois registres. Aucun raccourci.`,
        },
      ],
    },
    {
      id: 's4',
      titre: `Ta Feuille de Route — Les 7 Modules`,
      blocs: [
        {
          type: 'table',
          id: 'tbl4',
          headers: [`Ce que tu sauras faire`, `Le module`],
          rows: [
            [`Donner un sens visuel et concret à « tendre vers un nombre »`, `M1 — Comprendre ce qu'est une limite`],
            [`Identifier le mur du 0/0 et sortir les outils de factorisation`, `M2 — Franchir les formes indéterminées`],
            [`Utiliser la quantité conjuguée pour nettoyer les racines carrées`, `M3 — Dompter les expressions irrationnelles`],
            [`Découvrir la hiérarchie à l'infini : exp vs puissances vs log`, `M4 — Hiérarchiser les croissances comparées`],
            [`Vérifier si une courbe est d'un seul morceau`, `M5 — Maîtriser la continuité en un point`],
            [`Prouver l'existence d'une solution et reboucher les trous`, `M6 — Le TVI, la Bijection et le prolongement par continuité`],
            [`Traduire chaque limite en ligne de mire graphique`, `M7 — Lire et interpréter les asymptotes`],
          ],
        },
      ],
    },
    {
      id: 's5',
      titre: `Mon dernier conseil avant que tu ouvres le Module 1`,
      blocs: [
        {
          type: 'text',
          id: 'b5',
          contenu: `Ne te précipite pas. Avance à ton rythme, module après module. Fais les exercices, trompe-toi s'il le faut — c'est en forgeant qu'on devient forgeron. Lis mes conseils, évite les pièges que je te signale, et reviens en arrière chaque fois qu'un point te résiste. Un module pas digéré, c'est dix points perdus au BAC.

Tu as toutes les cartes en main pour réussir cette année, Champion(ne). La route est tracée devant toi. Moi, je suis juste à côté, pour m'assurer que tu ne rates aucun virage.

Prends ton stylo. Ouvre ton cahier de recherche. Et tournons ensemble la première page de ton succès.

**Marius Dion — Ton Grand Frère**`,
        },
      ],
    },
  ],
};
