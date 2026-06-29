import { Chapitre } from '../../types/course';

export const chapitreIntro: Chapitre = {
  id: 't5-intro',
  titre: `Introduction : Message du Grand Frère`,
  duree: 5,
  niveau: 'BASE',
  xpGain: 10,
  gratuit: true,
  sections: [
    {
      id: 's1',
      titre: `On y est, Champion(ne) !`,
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu: `Tu connais ce grand silence lourd qui tombe sur une classe de Terminale D juste après la remise des copies d'une interrogation surprise ? Ce moment précis où le professeur s'assoit à son bureau, secoue lentement la tête en regardant la pile de feuilles, et où chacun fixe intensément le bois de sa table pour éviter son regard ? C'est souvent là qu'on réalise une vérité toute simple : aligner des lignes de calcul par cœur sans jamais piger le fond de l'histoire, ça ne mène nulle part le jour de l'examen. Si tu as ce Tome 5 entre les mains, c'est que tu as décidé de briser ce cercle et de prendre les devants. Bienvenue dans la cour des grands, Champion(ne). On attaque aujourd'hui le cœur battant de ton année d'analyse — la zone qui impressionne la majorité des candidats au BAC, mais qui va devenir, si tu me suis bien, ton plus grand réservoir de points.`,
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

J'ai été élève au Lycée Classique d'Abidjan — le vieux « Cacao » de Cocody — promotion 2013-2016. Sur ces bancs, j'ai vu passer des dizaines de camarades pourtant très intelligents qui se croyaient nuls en maths, simplement parce qu'on leur balançait des tonnes de formules brutes à l'encre rouge sans jamais expliquer le pourquoi du comment. Ils passaient des nuits blanches à paniquer sur des brouillons raturés pour finalement rendre copie blanche le jour J. C'est là que j'ai compris la vérité que je veux te transmettre : **réussir en Terminale, ce n'est pas une question d'intelligence. C'est une question de compréhension et de méthode.**`,
        },
      ],
    },
    {
      id: 's3',
      titre: `Le pont qu'on bâtit entre le Tome 4 et le Tome 5`,
      blocs: [
        {
          type: 'text',
          id: 'b3',
          contenu: `Faisons un petit retour en arrière pour bien caler les choses. Tu te souviens de nos séances sur les suites géométriques du Tome 4 ? On cherchait à résoudre $q^n > k$ pour savoir à quel moment une suite franchissait un seuil — un capital placé qui dépasse $700\\,000$ F, par exemple. Mais on n'avait pas l'outil pour isoler l'exposant $n$. On restait coincés au pied du mur, à pianoter au hasard sur la calculatrice comme si on lisait l'avenir dans les lignes de la main. Cet outil qui manquait à ton arsenal, ce super-pouvoir algébrique qui décroche l'exposant de son perchoir pour le faire descendre sur la ligne de calcul, **c'est le logarithme.** Avec lui, tous les verrous sautent d'un coup.

Avant qu'on aligne les théorèmes, pose ton bic deux minutes et regarde la grande idée du tome. La fonction logarithme népérien, qu'on note $\\ln$, n'est pas une invention abstraite pour te fatiguer. C'est un outil conçu pour mesurer une croissance bien particulière : continue, mais qui s'épuise avec le temps. Imagine le médecin scolaire du Cacao qui suit la taille des élèves du CP à la Terminale. Au début de la vie, la croissance est explosive, le graphique grimpe en flèche. Puis le rythme ralentit, la courbe s'apaise et finit par s'écraser presque à l'horizontale, même si l'adolescent grappille encore lentement quelques millimètres. **La courbe du logarithme se comporte exactement ainsi : elle monte toujours, sans jamais s'arrêter, mais avec une lenteur incroyable.**

À l'opposé exact, tu vas découvrir sa fonction jumelle, sa réciproque parfaite : la fonction exponentielle, notée $\\exp$. Elle, c'est l'incarnation de l'emballement. Représente-toi une culture de bactéries oubliée un vendredi soir dans un laboratoire d'Abidjan. Au départ, deux cellules. Une heure plus tard, quatre. Puis huit, seize, et des centaines de milliers en une après-midi. Plus elles sont nombreuses, plus elles se multiplient vite — une accélération verticale qui transperce les nuages du graphique. Ce tome est conçu pour t'apprendre à dompter ces deux mouvements contraires et à comprendre la manière dont ils s'annulent l'un l'autre.`,
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
          contenu: `Un principe non négociable : **on comprend le sens avant de toucher à la moindre formule.** Le phénomène d'abord, le calcul ensuite. Toujours. Pour chaque notion, tu vas circuler entre **trois registres** bien distincts. Ils ne se mélangent jamais :

### 🟢 « Le Grand Frère t'explique » — pour COMPRENDRE
On pose le problème avec des mots de tous les jours et des images d'Abidjan : le médecin scolaire du Cacao, les bactéries du labo, l'échelle du pH au marché. On enlève le jargon pour regarder le squelette mathématique en face.

### 📘 « Le Langage Officiel du BAC » — pour MÉMORISER le bon vocabulaire
Une fois l'intuition acquise, on la traduit dans le vocabulaire exact que le correcteur attend : ensemble de définition, fonction réciproque, propriété fonctionnelle, croissance comparée. Ce sont les **mots de ta copie.** Pas négociables.

### ✍️ « La Copie Parfaite » — pour RÉDIGER comme un champion
On écrit, ligne par ligne, exactement ce qu'il faut poser sur ta feuille pour récolter tous les points du barème. En série D, avoir le bon résultat ne suffit pas : si tu oublies de poser ton ensemble de validité et de vérifier qu'une quantité est strictement positive avant d'appliquer un logarithme, toute la démonstration s'écroule, même si le résultat final semble juste.

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
          headers: [`Ce que tu vas dompter`, `Le module`],
          rows: [
            [`La définition de la fonction $\\ln$, ses propriétés algébriques qui transforment les produits en sommes, ses premières limites`, `M1 — Le Logarithme népérien`],
            [`Dériver $\\ln u$ en $u'/u$, débusquer les primitives de cette forme, résoudre les équations et inéquations du BAC`, `M2 — Applications du Logarithme`],
            [`La fonction réciproque du logarithme, toujours strictement positive, sa dérivée $u'e^u$ et ses comportements aux infinis`, `M3 — La Fonction exponentielle`],
            [`Le logarithme à base 10 utilisé en chimie pour le pH, et les exponentielles de base $a$ avec $a^x = e^{x\\ln a}$`, `M4 — Logarithme décimal & base $a$`],
            [`Les puissances à exposant réel $x^\\alpha = e^{\\alpha\\ln x}$, leur dérivée et l'allure de leurs courbes selon $\\alpha$`, `M5 — Les Puissances réelles`],
            [`Le grand choc des titans : qui gagne la course à l'infini entre $\\ln x$, $x^\\alpha$ et $e^x$ pour lever les indéterminations`, `M6 — Les Croissances comparées`],
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

Faut pas gnan, Champion(ne). Que tu sois dans une classe surchargée à Cocody ou en train de réviser tard le soir à Adjamé sous la faible lumière d'un lampadaire, la Terminale D ne doit pas te faire douter de tes capacités. Ton Grand Frère est juste là, assis à tes côtés. On va prendre le temps, décortiquer chaque piège de la DPFC, et on va gâter le coin pour de bon.

Prends ton plus beau stylo, ouvre ton cahier de recherche. On avance ensemble, la tête haute, vers le premier module.

**Marius Dion — Ton Grand Frère**

*P.S. — Ne commets surtout pas l'erreur de survoler le Module 1 en pensant que la définition et les premières propriétés sont des généralités sans importance. C'est la fondation en béton armé de tout le reste du tome. Si tu maîtrises les règles de transformation du logarithme dès les premières pages, tout notre parcours sur l'exponentielle et les croissances comparées va glisser tout seul, comme de l'eau sur une feuille de manioc.*`,
        },
      ],
    },
  ],
};
