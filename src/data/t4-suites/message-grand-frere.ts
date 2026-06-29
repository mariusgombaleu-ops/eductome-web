import { Chapitre } from '../../types/course';

export const chapitreIntro: Chapitre = {
  id: 't4-intro',
  titre: `Introduction : Message du Grand Frère`,
  duree: 5,
  niveau: 'BASE',
  xpGain: 10,
  gratuit: true,
  sections: [
    {
      id: 's1',
      titre: `Akwaba, Champion(ne) — on prend deux minutes, toi et moi.`,
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu: `Akwaba dans ce quatrième tome de ta préparation, Champion(ne) ! Installe-toi confortablement, prends un grand verre d'eau, et respire un bon coup. Avant même d'ouvrir la première page, accorde-moi deux minutes — comme deux grands frères assis sur le même banc. Et d'abord, laisse-moi te féliciter : tu viens de boucler le Tome 3 sur les Primitives et le Calcul Intégral. Entre les formes composées, la relation de Chasles et les calculs d'aires, ce n'était pas une petite affaire. Mais tu as tenu bon. Ça, c'est le comportement d'un vrai crack de Terminale D.`,
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
          contenu: `Si c'est la première fois qu'on se croise, laisse-moi me présenter en deux mots. Moi, c'est **Marius Dion**, ton grand frère EDUCTOME. Et si je peux t'accompagner jusqu'au BAC, c'est pour une raison simple : **je suis passé exactement là où tu es aujourd'hui.**

J'ai été élève au Lycée Classique d'Abidjan — le vieux « Cacao » de Cocody — promotion 2013-2016, cet endroit où on oriente uniquement ceux qu'on appelle les « petits génies ». Et pourtant, j'en ai vu passer des vagues de camarades de Terminale D qui paniquaient totalement devant une suite récurrente, ou qui s'emmêlaient les pinceaux dans le calcul d'une somme de termes. Ils pensaient que c'était une affaire de magie ou de chance. C'est là que j'ai compris la vérité que je veux te transmettre : **réussir en Terminale, ce n'est pas une question d'intelligence. C'est une question de compréhension et de méthode.**`,
        },
      ],
    },
    {
      id: 's3',
      titre: `Le pont qu'on bâtit entre le Tome 3 et le Tome 4`,
      blocs: [
        {
          type: 'text',
          id: 'b3',
          contenu: `Souviens-toi de ce qu'on faisait au Tome 3 : on gérait le **continu**. On manipulait des fonctions qui glissaient sans aucune interruption sur des courbes magnifiques, on intégrait des surfaces lisses pour trouver des aires parfaites. C'était l'étude du mouvement fluide, comme l'eau de la lagune Ébrié qui coule sans s'arrêter.

Aujourd'hui, oublie un instant cette fluidité. Dans ce Tome 4 consacré aux **suites numériques**, le décor change du tout au tout : on quitte le goudron lisse pour entrer dans le monde du **discret**. Qu'est-ce que cela veut dire concrètement ? On ne glisse plus : **on saute.** On avance par bonds entiers, marche après marche, sans jamais s'arrêter sur les valeurs intermédiaires. On compte $1$, $2$, $3$, $4$… et absolument rien entre les deux. Dans le monde des suites, le terme numéro $1,5$ n'existe tout simplement pas. Soit tu es à l'étape $n$, soit tu passes directement à l'étape $n+1$.

C'est précisément là que réside leur grande idée. Les suites ont le pouvoir de décrire la vie réelle qui se développe coup par coup : la **tontine d'Abobo** où chaque maman dépose la même somme à la fin de chaque mois — une suite arithmétique pure ; les fluctuations du **prix du cacao** qui bondit ou chute par pourcentages d'une campagne à la suivante — une suite géométrique en action ; la concentration d'un médicament dans le sang d'un patient au CHU de Treichville, qui baisse heure après heure puis remonte à chaque injection — une suite récurrente. Tout ce que les fonctions accomplissaient sur l'ensemble infini des réels $\\mathbb{R}$, les suites vont le reproduire, avec leurs propres règles, sur l'ensemble des entiers naturels $\\mathbb{N}$. Le match reste le même, mais le terrain est quadrillé différemment.`,
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
          contenu: `Un principe non négociable dans ce tome : **on comprend le sens avant de toucher à la moindre formule.** Le phénomène d'abord, le calcul ensuite. Toujours. Pour chaque notion, tu vas circuler entre **trois registres** bien distincts. Ils ne se mélangent jamais :

### 🟢 « Le Grand Frère t'explique » — pour COMPRENDRE
On pose le problème avec des mots de tous les jours et des images d'Abidjan : une file d'attente à Adjamé, une tontine, une seringue au CHU. On enlève le jargon pour regarder le squelette mathématique en face.

### 📘 « Le Langage Officiel du BAC » — pour MÉMORISER le bon vocabulaire
Une fois l'intuition acquise, on la traduit dans le vocabulaire exact que le correcteur attend : suite majorée, monotonie, raison, convergence, point fixe. Ce sont les **mots de ta copie.** Pas négociables.

### ✍️ « La Copie Parfaite » — pour RÉDIGER comme un champion
On écrit, ligne par ligne, exactement ce qu'il faut poser sur ta feuille pour récolter tous les points du barème. En série D, avoir le bon résultat ne suffit pas : il faut le **rédiger** dans les règles de l'art.

Comprendre, mémoriser, rédiger. Trois étapes, trois registres, aucun raccourci.`,
        },
      ],
    },
    {
      id: 's5',
      titre: `Ta Feuille de Route — Les 5 Modules`,
      blocs: [
        {
          type: 'table',
          id: 'tbl5',
          headers: [`Ce que tu sauras faire`, `Le module`],
          rows: [
            [`Comprendre une suite en profondeur, traquer sa monotonie et analyser son comportement à l'infini`, `M1 — Généralités sur les Suites`],
            [`Maîtriser les suites qui progressent avec le même écart constant (tontines, cotisations)`, `M2 — Les Suites Arithmétiques`],
            [`Déchiffrer les suites qui avancent par multiplication constante (intérêts, prix du cacao)`, `M3 — Les Suites Géométriques`],
            [`Attaquer les suites de type $u_{n+1} = f(u_n)$ et prévoir leur état d'équilibre`, `M4 — Les Suites Récurrentes`],
            [`Prouver rigoureusement une conjecture par récurrence et lever une indétermination par croissance comparée`, `M5 — Récurrence et Comportements à l'Infini`],
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
          contenu: `L'épreuve de mathématiques du BAC ivoirien ne cherche pas des génies hors normes ; elle cherche des élèves méthodiques, entraînés, capables de garder leur calme. Quand le stress montera dans la salle, ferme les yeux une seconde, repense aux images simples qu'on va installer ensemble, et laisse ta main guider ton stylo.

Faut pas gnan, Champion(ne). On n'est pas là pour gratter un petit $10/20$ de soulagement : on est là pour dominer le sujet de bout en bout. Avance à ton rythme, module après module. Si tu butes, ne saute pas directement à l'exercice : reviens à l'analogie, relis le ② Le Réel lentement. C'est toujours là que se trouve la clé.

Prends ton plus beau stylo, ouvre ton cahier de recherche. On va gâter le coin pour de bon, Champion(ne) !

**Marius Dion — Ton Grand Frère**

*P.S. — Retiens ce secret de vieux caïman : pour les suites, dessine toujours les premiers termes sur une droite numérique avant de te lancer dans le moindre calcul. Voir avant de calculer. Le Tome 3 t'a appris à accumuler le continu ; le Tome 4 va t'apprendre à dompter le discret et à lire l'avenir d'un phénomène. Et ça, ça change tout.*`,
        },
      ],
    },
  ],
};
