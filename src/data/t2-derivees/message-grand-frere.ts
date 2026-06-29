import { Chapitre } from '../../types/course';

export const chapitreIntro: Chapitre = {
  id: 't2-intro',
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
          contenu: `Avant toute chose, laisse-moi te féliciter Champion(ne) ! Tu as terrassé le Tome 1 sur les Limites — et ça, ce n'est pas rien. Tu sais désormais regarder loin devant pour voir exactement où la courbe se dirige quand la route devient sinueuse. C'est le signe des vrais bosseurs, ceux qui veulent décrocher le précieux sésame sans trembler.

Maintenant, on s'installe confortablement et on passe à la vitesse supérieure. Mais avant de tourner la première page, on va se parler franchement, toi et moi — comme deux grands frères assis sur le même banc.`,
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
          contenu: `Tu me connais peut-être déjà depuis le Tome 1 (tu peux sauter cette partie dans ce cas), mais si c'est la première fois qu'on se croise, laisse-moi me présenter en deux mots. Moi, c'est **Marius Dion**, ton grand frère EDUCTOME. Et si je peux t'accompagner jusqu'au BAC, c'est pour une raison simple : **je suis passé exactement là où tu es aujourd'hui**.

J'ai été élève au Lycée Classique d'Abidjan — le vieux « Cacao » de Cocody — promotion 2013-2016. Cet endroit où on oriente uniquement ceux qu'on appelle les « petits génies ». Au collège, je collectais les bonnes moyennes sans trop forcer. Puis le Lycée Classique m'a rattrapé : le rythme n'avait plus rien à voir, les cours pleuvaient, les profs ne facilitaient rien. Les lacunes s'accumulaient, et les mauvaises notes derrière. Il fallait courir partout, supplier les grands frères de Terminale de nous expliquer un cours qu'on n'avait pas digéré.

C'est dans ce stress que j'ai compris une vérité que je veux te transmettre aujourd'hui : **réussir en Terminale, ce n'est pas une question d'intelligence. C'est une question de compréhension et de méthode.** Les « cerveaux », ce sont juste ceux qui ont compris plus tôt que les autres *comment comprendre* ce qu'ils manipulent. Ce n'est pas une question de naissance, Champion(ne). C'est tout le secret, et il est à ta portée.

Je ne vais pas seulement t'aider à calculer des dérivées. Je vais te transmettre les méthodes que j'ai moi-même utilisées pour faire passer cette compréhension dans mes copies. Tu ne lis pas seul : je suis assis à côté de toi, le grand frère que j'aurais aimé avoir à ton âge.`,
        },
      ],
    },
    {
      id: 's3',
      titre: `Le pont qu'on bâtit entre le Tome 1 et le Tome 2`,
      blocs: [
        {
          type: 'text',
          id: 'b3',
          contenu: `Regarde le pont magnifique qu'on est en train de construire au-dessus de tes connaissances. En Tome 1, toute ton attention était fixée sur la **destination** de la fonction : « Vers quelle hauteur la courbe se dirige-t-elle quand $x$ s'approche d'un point ? ». En Tome 2, la grande question change de visage : « À quelle **vitesse** s'y rend-elle à chaque instant ? ».

Imagine-toi au marché d'Adjamé, en train d'observer le prix du cacao varier d'heure en heure. Le prix monte, descend, fluctue. Si je te demande « à quelle vitesse précise le prix grimpe-t-il à midi pile ? », tu fais comment ? C'est exactement ça, le cœur du Tome 2 : mesurer l'inclinaison d'une courbe en un point précis — ce qu'on appelle la **pente**.

Et la bonne nouvelle, c'est que ton travail du Tome 1 ne va pas dormir dans ton cahier. La dérivée qu'on s'apprête à dompter n'est rien d'autre qu'une **limite** bien particulière : un taux de variation qu'on pousse dans ses retranchements quand l'écart tend vers $0$. Tout est connecté, Champion(ne). Les outils du Tome 1 sont les fondations sur lesquelles on construit chaque module de ce tome.`,
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
          contenu: `Un principe non négociable dans ce tome : **on comprend le sens avant de toucher à la moindre formule.** Le phénomène d'abord, le calcul ensuite. Toujours. Pour chaque notion, tu vas circuler entre **trois registres** bien distincts. Ils ne se mélangent jamais, et chacun a son rôle :

### 🟢 « Le Grand Frère t'explique » — pour COMPRENDRE
On pose le problème avec des mots de tous les jours et des situations concrètes d'Abidjan : le prix du cacao à Adjamé, un taxi-compteur, un gbaka qui accélère. On enlève le jargon pour regarder le squelette mathématique en face.

### 📘 « Le Langage Officiel du BAC » — pour MÉMORISER le bon vocabulaire
Une fois l'intuition acquise, on la traduit dans le vocabulaire exact que le correcteur attend : nombre dérivé, taux de variation, dérivabilité, tangente. Ce sont les **mots de ta copie**. Pas négociables.

### ✍️ « La Copie Parfaite » — pour RÉDIGER comme un champion
On écrit, ligne par ligne, exactement ce qu'il faut poser sur ta feuille pour récolter tous les points du barème. En série D, avoir le bon résultat ne suffit pas : il faut le **rédiger** dans les règles de l'art.

Comprendre, mémoriser, rédiger. Trois étapes, trois registres, aucun raccourci.`,
        },
      ],
    },
    {
      id: 's5',
      titre: `Ta Feuille de Route — Les 6 Modules`,
      blocs: [
        {
          type: 'table',
          id: 'tbl5',
          headers: [`Ce que tu sauras faire`, `Le module`],
          rows: [
            [`Donner un sens concret à la vitesse instantanée d'une courbe en un point`, `M1 — Le Nombre Dérivé`],
            [`Trouver la formule générale de la vitesse pour chaque famille de fonctions`, `M2 — La Fonction Dérivée`],
            [`Dériver n'importe quelle combinaison : produit, quotient, composée`, `M3 — Les Règles de Calcul`],
            [`Démontrer le sens de variation et dresser le tableau parfait`, `M4 — Dérivée et Variations`],
            [`Calculer et tracer proprement la tangente à une courbe`, `M5 — L'Équation de la Tangente`],
            [`Dompter l'Inégalité des Accroissements Finis et la dérivée de la réciproque`, `M6 — IAF et Dérivée de la Réciproque`],
          ],
        },
      ],
    },
    {
      id: 's6',
      titre: `Mon dernier conseil avant que tu ouvres le Module 1`,
      blocs: [
        {
          type: 'text',
          id: 'b6',
          contenu: `Ne te précipite pas. Avance à ton rythme, module après module. Fais les exercices, trompe-toi s'il le faut — c'est en forgeant qu'on devient forgeron. Si tu butes sur un module, ne saute pas directement à l'exercice : reviens à l'analogie, relis le ② Le Réel lentement. C'est toujours là que se trouve la clé. Un module pas digéré, c'est dix points perdus au BAC.

Garde une chose en tête : la dérivée n'est pas une formule tombée du ciel. C'est une **mesure** — quelque chose de précis, de réel, de visible sur un graphique. Parce qu'on va comprendre ce qu'elle mesure avant de calculer, tu vas dominer ce chapitre là où d'autres vont juste le subir. *On ne domine pas ce qu'on ne comprend pas.*

Prends ton plus beau stylo, ouvre ton cahier de recherche. On va gâter le coin pour de bon, Champion(ne) !

**Marius Dion — Ton Grand Frère**

*P.S. — Une dernière chose. Le Tome 1 t'a appris à voir où va la courbe. Le Tome 2 va t'apprendre à quelle vitesse elle y va. Le jour du BAC, quand les autres réciteront des formules par cœur, toi tu sauras lire le mouvement. Et ça, ça change tout.*`,
        },
      ],
    },
  ],
};
