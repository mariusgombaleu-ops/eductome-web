import { Chapitre } from '../../types/course';

export const chapitreIntro: Chapitre = {
  id: 't3-intro',
  titre: `Introduction : Message du Grand Frère`,
  duree: 5,
  niveau: 'BASE',
  xpGain: 10,
  gratuit: true,
  sections: [
    {
      id: 's1',
      titre: `On prend deux minutes, toi et moi.`,
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu: `Champion(ne) ! Avant même d'ouvrir ce tome, accorde-moi deux minutes. Laisse-moi d'abord te serrer la main et te féliciter. Tu viens de boucler le Tome 2 sur les Dérivées — et entre les calculs de limites, les nombres dérivés et les tableaux de variations à n'en plus finir, ce n'était pas une petite affaire. Mais tu as tenu bon, tu as bossé dur. Ça, c'est le comportement d'un vrai crack de Terminale D.

Maintenant, on s'installe confortablement et on attaque un très gros morceau du programme ivoirien : le Tome 3, consacré entièrement aux **Primitives** et au **Calcul Intégral**. Mais avant de tourner la première page, on va se parler franchement, toi et moi — comme deux grands frères assis sur le même banc.`,
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
          contenu: `Tu me connais peut-être déjà depuis les tomes précédents, mais si c'est la première fois qu'on se croise, laisse-moi me présenter en deux mots. Moi, c'est **Marius Dion**, ton grand frère EDUCTOME. Et si je peux t'accompagner jusqu'au BAC, c'est pour une raison simple : **je suis passé exactement là où tu es aujourd'hui**.

J'ai été élève au Lycée Classique d'Abidjan — le vieux « Cacao » de Cocody — promotion 2013-2016, cet endroit où on oriente uniquement ceux qu'on appelle les « petits génies ». Au collège, je ramassais les bonnes moyennes sans trop forcer. Puis le Lycée Classique m'a rattrapé : le rythme n'avait plus rien à voir, les cours pleuvaient, les profs ne facilitaient rien. Les lacunes s'accumulaient, et les mauvaises notes derrière. Il fallait courir partout, supplier les grands frères de Terminale de nous réexpliquer un cours qu'on n'avait pas digéré.

C'est dans ce stress que j'ai compris une vérité que je veux te transmettre aujourd'hui : **réussir en Terminale, ce n'est pas une question d'intelligence. C'est une question de compréhension et de méthode.** Les « cerveaux », ce sont juste ceux qui ont compris plus tôt que les autres *comment comprendre* ce qu'ils manipulent. Ce n'est pas une question de naissance, Champion(ne). Et tout ça est à ta portée.`,
        },
      ],
    },
    {
      id: 's3',
      titre: `Le pont qu'on bâtit entre le Tome 2 et le Tome 3`,
      blocs: [
        {
          type: 'text',
          id: 'b3',
          contenu: `Regarde le pont qu'on est en train de construire au-dessus de tes connaissances. Dans le Tome 2, toute ton attention était fixée sur la **vitesse** : « À quelle vitesse la courbe change-t-elle à un instant précis ? » C'était ça, la dérivée. Dans le Tome 3, on fait le **chemin inverse** : si les dérivées mesurent la vitesse instantanée, **les primitives reconstruisent le trajet à partir de la vitesse**.

Laisse-moi t'expliquer cette affaire avec une image de chez nous. Imagine que tu montes dans un gbaka à la grande gare d'Adjamé, direction Bingerville. Le chauffeur démarre, il accélère sur le goudron, il ralentit brusquement au carrefour Agban à cause des embouteillages de huit heures, puis il reprend de la vitesse vers le Lycée Technique. Si tu regardes son compteur à un instant précis, tu lis 60 km/h, puis 15 km/h, puis 45 km/h. Cette vitesse instantanée affichée seconde après seconde, c'est exactement la **dérivée**.

Maintenant, changeons de perspective. À l'arrivée à Bingerville, je te demande : « Champion(ne), en combinant tous ces ralentissements et toutes ces accélérations depuis le départ, quelle distance exacte le gbaka a-t-il parcourue ? » Là, le compteur de vitesse ne peut plus te répondre directement. Pour retrouver la distance totale, tu dois **accumuler**, additionner bout par bout tous ces petits morceaux de vitesse du début à la fin du voyage. Retrouver la distance totale à partir de l'historique de la vitesse, c'est exactement ça, **chercher une primitive**.

La grande idée derrière tout ça est d'une puissance incroyable. La primitive est l'opération inverse de la dérivée, mais s'il te plaît, ne la vois pas comme une simple « dérivée à l'envers » qu'on calcule mécaniquement. C'est avant tout un **outil d'accumulation** : une somme de valeurs minuscules qui finissent par former une grandeur totale et mesurable. Comprendre ce sens intuitif **avant** de te jeter sur les formules, c'est ça qui va te donner un coup d'avance.

Tu vas d'ailleurs remarquer un détail amusant sur cette route : quand on cherche une primitive, il y a toujours une petite **constante réelle $+\\,C$** qui vient s'ajouter à la fin. Pourquoi cette affaire ? Reprenons nos gbakas. Imagine trois véhicules qui quittent Adjamé : le premier part de la gare, le deuxième 50 mètres plus loin, le troisième depuis le carrefour suivant. S'ils roulent tous à la même vitesse à chaque instant, leurs compteurs affichent la même dérivée — pourtant, à l'arrivée, leurs positions sont décalées. Ce décalage de départ, c'est notre constante $C$. Une seule fonction de vitesse reconstruit toute une **famille de trajectoires parallèles** !`,
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
On pose le problème avec des mots de tous les jours et des situations concrètes d'Abidjan : un gbaka qui accumule des kilomètres, un bidon qu'on remplit, une surface qu'on mesure. On enlève le jargon pour regarder le squelette mathématique en face.

### 📘 « Le Langage Officiel du BAC » — pour MÉMORISER le bon vocabulaire
Une fois l'intuition acquise, on la traduit dans le vocabulaire exact que le correcteur attend : primitive, intégrale définie, fonction continue, relation de Chasles, valeur moyenne. Ce sont les **mots de ta copie**. Pas négociables.

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
            [`Reconnaître la fonction de départ à partir de sa dérivée, sans trembler`, `M1 — Les Primitives de Référence`],
            [`Repérer les formes composées ($u'u^n$, $\\dfrac{u'}{u}$, $u'e^u$…) comme des panneaux`, `M2 — Les Primitives des Formes Composées`],
            [`Calculer une accumulation exacte entre deux bornes sans erreur de signe`, `M3 — L'Intégrale Définie et la Valeur Moyenne`],
            [`Dompter l'Intégration Par Parties, l'outil avancé du BAC`, `M4 — Les Techniques d'Intégration Avancées`],
            [`Mesurer une aire exacte et rédiger la justification proprement`, `M5 — Le Calcul d'Aires`],
            [`Calculer le volume d'un solide engendré par une rotation autour de $(Ox)$`, `M6 — Les Volumes de Solides de Révolution`],
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
          contenu: `Quand j'étais au Lycée Classique, nos professeurs nous répétaient une chose : en Terminale D, l'épreuve de maths ne vient pas piéger l'élève qui maîtrise ses outils. Le grand secret des caïmans, c'est de ne jamais paniquer devant une expression compliquée. Ce Tome 3 a parfois l'air impressionnant avec ses grands signes d'intégrales qui ressemblent à des « S » allongés, mais je te promets qu'ensemble, on va rendre tout cela limpide comme l'eau de roche.

Faut pas gnan, Champion(ne). On n'est pas là pour gratter un petit $10/20$ de soulagement : on est là pour dominer le sujet de bout en bout et entrer dans la salle d'examen avec une confiance absolue. Avance à ton rythme, module après module. Si tu butes, ne saute pas directement à l'exercice : reviens à l'analogie, relis le ② Le Réel lentement. C'est toujours là que se trouve la clé.

Prends ton plus beau stylo, ouvre ton cahier de recherche. On va gâter le coin pour de bon, Champion(ne) !

**Marius Dion — Ton Grand Frère**

*P.S. — Retiens ce secret de vieux caïman : pour vérifier si ta primitive $F(x)$ est correcte, il y a un test infaillible. Dérive-la directement au brouillon ! Si tu retrouves exactement la fonction $f(x)$ de départ, c'est que ton calcul est propre et que tu as empoché les points. Le Tome 2 t'a appris à mesurer la vitesse ; le Tome 3 va t'apprendre à reconstruire tout le trajet. Et ça, ça change tout.*`,
        },
      ],
    },
  ],
};
