// src/data/t2-derivees/chap2.ts
import { Chapitre } from '../../types/course';

export const chapitre1: Chapitre = {
  id: 't2-chap2',
  titre: 'Les Bases Solides',
  duree: 30,
  niveau: 'BASE',
  xpGain: 50,
  gratuit: true,
  objectifs: [
    'Comprendre le taux d\'accroissement et le nombre dérivé par définition',
    'Maîtriser les règles de manipulation des puissances et exposants',
    'Utiliser les identités remarquables pour lever les indéterminations 0/0',
    'Parler couramment le vocabulaire officiel décodé des dérivées',
  ],
  sections: [
    {
      id: 's1',
      titre: 'Introduction — Pourquoi revenir en arrière ?',
      blocs: [
        {
          type: 'text',
          id: 'b1-accroche',
          contenu: 'Champion(ne), savais-tu que 90% des élèves qui bloquent sur les dérivées ont juste un problème de fondations ? Prenons 5 minutes pour couler un béton armé indéboulonnable.',
        },
        {
          type: 'text',
          id: 'b1',
          contenu: "Champion(ne), avant de plonger dans le grand bain des dérivées, on va d'abord prendre le temps de s'asseoir, de souffler et de poser des fondations en béton armé. Tu sais, c'est exactement comme quand on veut construire un grand immeuble à la Riviera : si la fondation n'est pas solide, le bâtiment finira par s'écrouler dès la première grosse pluie. En mathématiques, c'est la même chose.",
        },
        {
          type: 'text',
          id: 'b2',
          contenu: "📖 L'ANECDOTE DU GRAND FRÈRE :\nC'était un mercredi matin au Lycée Classique d'Abidjan, notre fameux \"Cacao\". Il faisait chaud, on avait devoir de maths. Le professeur écrit au tableau une question qui paraissait inoffensive : \"Calculer la limite de (x²-4)/(x-2) quand x tend vers 2.\" La moitié de la classe a directement remplacé x par 2 et a écrit fièrement sur sa copie : \"0/0 = 0\". Énorme erreur, c'est FAUX ! L'autre moitié de la classe a complètement paniqué en voyant ce fameux 0/0 (la forme indéterminée) et a laissé la feuille blanche. Résultat des courses ? Sur 30 élèves, seulement 3 ont eu juste à cet exercice. Pourquoi un tel massacre ? Parce que quasiment PERSONNE n'avait compris qu'il fallait tout simplement FACTORISER le numérateur d'abord !",
        },
        {
          type: 'text',
          id: 'b3',
          contenu: "Ce jour-là, j'ai compris un truc fondamental qui a changé ma vision de l'école : en maths, ce qui te bloque, c'est très rarement la nouvelle notion elle-même. C'est presque toujours un OUTIL de base (comme la factorisation, les fractions ou les puissances) que tu ne maîtrises pas bien.",
        },
        {
          type: 'text',
          id: 'b4',
          contenu: "C'est exactement pour ça qu'on va d'abord réviser tes outils. Ce n'est pas pour te faire perdre du temps, bien au contraire : c'est pour t'en faire GAGNER énormément pour la suite du programme. Si on révise bien ces outils aujourd'hui, le calcul des dérivées te paraîtra aussi facile que de boire un bon garba glacé.",
        },
        {
          type: 'text',
          id: 'b5-transition',
          contenu: "Ouvrons tout de suite ta boîte à outils de survie pour faire le point sur les notions indispensables.",
        },
      ],
    },
    {
      id: 's2',
      titre: '1.1 Ce qu\'il te faut savoir — Les Limites et le Taux d\'Accroissement',
      blocs: [
        {
          type: 'text',
          id: 'b6-accroche',
          contenu: 'Ne te laisse pas impressionner par les grands mots des profs. Traduisons le taux d\'accroissement en langage limpide.',
        },
        {
          type: 'text',
          id: 'b6',
          contenu: "Voici ta boîte à outils de survie. Prends le temps de bien lire cette section, même si tu te dis \"Vieux père, ça je connais déjà\". C'est souvent dans ces petits détails que se cachent les pièges à éviter le jour du BAC.",
        },
        {
          type: 'text',
          id: 'b7',
          contenu: "Dans le Tome 1 de cette collection EDUCTOME, nous avons cassé le mythe des limites. Tu sais désormais qu'une limite, c'est une histoire de mouvement et de rapprochement. C'est chercher à savoir vers quelle destination pointe une fonction quand x se rapproche d'une certaine valeur. Pour ce Tome 2 sur les dérivées, il y a une limite très spéciale qui va devenir ta meilleure amie : la limite du taux d'accroissement.",
        },
        {
          type: 'rule',
          id: 'b8',
          titre: 'RÈGLE D\'OR : LE TAUX D\'ACCROISSEMENT',
          contenu: [
            'Le taux de variation (ou taux d\'accroissement) d\'une fonction f entre un point de départ a et un point d\'arrivée x est donné par :',
            '$$T(x) = \\frac{f(x) - f(a)}{x - a}$$',
            'Ce quotient calcule en réalité une vitesse moyenne ou une pente moyenne entre deux points.',
          ],
        },
        {
          type: 'text',
          id: 'b9',
          contenu: "Mais ce qui nous intéresse pour introduire la dérivée, c'est ce qui se passe quand le point x se rapproche infiniment du point a. On calcule donc la limite de ce taux quand x tend vers a :",
        },
        {
          type: 'math',
          id: 'b10',
          formule: '\\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a} = f\'(a)',
          explication: 'Si cette limite existe et donne un nombre réel fini, ce nombre est précisément le nombre dérivé noté f\'(a) !',
        },
        {
          type: 'text',
          id: 'b11',
          contenu: "Exemple concret : Imaginons la fonction $f(x) = x^2$. On veut étudier ce qui se passe exactement au point $a = 2$. Le taux d'accroissement est : $\\frac{x^2 - 2^2}{x - 2} = \\frac{x^2 - 4}{x - 2}$. Si on cherche la limite quand $x \\to 2$ : $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$. Si tu remplaces x par 2, tu trouves 0/0. Forme Indéterminée !",
        },
        {
          type: 'text',
          id: 'b12',
          contenu: "Mais grâce à tes identités remarquables, tu sais que $x^2 - 4 = (x - 2)(x + 2)$. Donc : $\\lim_{x \\to 2} \\frac{(x - 2)(x + 2)}{x - 2} = \\lim_{x \\to 2} (x + 2) = 2 + 2 = 4$. Félicitations, tu viens de calculer ton premier nombre dérivé par définition : $f'(2) = 4$ !",
        },
        {
          type: 'recap',
          id: 'b12-recap',
          titre: 'Le Taux d\'Accroissement en bref',
          contenu: [
            '✅ Le taux T(x) mesure la pente moyenne entre a et x.',
            '✅ Faire tendre x vers a transforme cette moyenne en valeur INSTANTANÉE.',
            '✅ Si le résultat est un nombre fini, c\'est le nombre dérivé f\'(a).',
          ],
        },
        {
          type: 'text',
          id: 'b13-transition',
          contenu: "Maîtriser le taux c'est bien, mais pour dériver à la chaîne, il te faut dompter les exposants. Regardons les règles des puissances.",
        },
      ],
    },
    {
      id: 's3',
      titre: '1.1 Suite — Les Puissances et leurs Règles',
      blocs: [
        {
          type: 'text',
          id: 'b14-accroche',
          contenu: 'Les racines carrées et les x au dénominateur te font peur ? Démasquons-les, ce sont de simples puissances déguisées !',
        },
        {
          type: 'text',
          id: 'b14',
          contenu: "Pour dériver des fonctions, tu vas devoir jongler avec les exposants (les puissances). Beaucoup d'élèves perdent des points bêtement au BAC parce qu'ils confondent les règles de calcul des puissances. Un x au dénominateur ou une racine carrée ne doit plus te faire peur.",
        },
        {
          type: 'table',
          id: 'b15',
          titre: 'Règles de survie des puissances',
          headers: ['Opération / Notation', 'Formule Mathématique', 'En pratique'],
          rows: [
            ['Multiplication', '$x^n \\times x^m = x^{n+m}$', 'On additionnes les exposants.'],
            ['Division', '$\\frac{x^n}{x^m} = x^{n-m}$', 'On soustrait l\'exposant du bas.'],
            ['Puissance de puissance', '$(x^n)^m = x^{n \\times m}$', 'Les exposants se multiplient.'],
            ['L\'Inverse (L\'ascenseur)', '$x^{-n} = \\frac{1}{x^n}$', 'Un exposant négatif, c\'est un nombre qui a pris l\'ascenseur pour descendre.'],
            ['La Racine', '$x^{\\frac{1}{n}} = \\sqrt[n]{x}$', 'Une racine est une puissance sous forme de fraction.'],
          ],
        },
        {
          type: 'tip',
          id: 'b16',
          titre: 'Conseil du Grand Frère',
          contenu: [
            'Quand on te demandera plus tard de dériver la fonction $f(x) = \\frac{1}{x^3}$, ne panique pas en cherchant des formules compliquées de division.',
            'Utilise la règle de l\'inverse ! Transforme ta fonction en $f(x) = x^{-3}$, et la dérivation deviendra un jeu d\'enfant.',
            'De même, transforme $\\sqrt{x}$ en $x^{1/2}$ avant d\'attaquer tes calculs.',
          ],
        },
        {
          type: 'exercise',
          id: 'micro-ex-puissances',
          niveau: 'BASE',
          enonce: 'À toi de jouer ! Réécris la fonction $f(x) = \\frac{5}{x^2}$ sous forme d\'une puissance directe de x en utilisant un exposant négatif.',
          etapes: [
            'Étape 1 : Isole la fraction sous la forme $5 \\times \\frac{1}{x^2}$.',
            'Étape 2 : Applique la règle de l\'ascenseur (inverse) : $\\frac{1}{x^2} = x^{-2}$.',
            'Étape 3 : Tu obtiens le résultat final directement : $5x^{-2}$.',
          ],
          reponse: '5x^{-2}',
          conseil: 'Fais monter le x au numérateur en changeant simplement le signe de sa puissance.',
        },
        {
          type: 'text',
          id: 'b17-transition',
          contenu: "Maintenant que tu as les puissances dans la poche, sortons l'arme absolue pour briser les formes indéterminées : la factorisation.",
        },
      ],
    },
    {
      id: 's4',
      titre: '1.1 Suite — Les Formules de Factorisation',
      blocs: [
        {
          type: 'text',
          id: 'b18-accroche',
          contenu: 'Face au Boss 0/0, l\'arme absolue c\'est la factorisation. Révisons les 3 formules que tu dois connaître par cœur.',
        },
        {
          type: 'text',
          id: 'b18',
          contenu: "Comme on l'a vu dans mon anecdote du \"Cacao\", le grand ennemi du calcul de limite (et donc de dérivée), c'est la forme indéterminée 0/0. Pour éliminer cette forme, il faut faire apparaître un élément commun en haut et en bas de ta fraction pour le simplifier. Et pour ça, l'outil indispensable, c'est la factorisation.",
        },
        {
          type: 'rule',
          id: 'b19',
          titre: 'LES 3 PRODUITS REMARQUABLES À CONNAÎTRE',
          contenu: [
            '1. Le Carré d\'une Somme : $(a + b)^2 = a^2 + 2ab + b^2$',
            '2. Le Carré d\'une Différence : $(a - b)^2 = a^2 - 2ab + b^2$',
            '3. La Différence de deux Carrés : $a^2 - b^2 = (a - b)(a + b)$',
          ],
        },
        {
          type: 'text',
          id: 'b20',
          contenu: "Pourquoi c'est important ? (Exemple concret) : On te donne la limite : $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$. Si tu remplaces x par 3, ça donne (9-9)/(3-3) = 0/0. L'ordinateur de ton cerveau affiche \"Error\". Mais ton œil de champion repère que 9, c'est $3^2$. Tu as donc au numérateur : $x^2 - 3^2$. C'est la 3ème identité remarquable !",
        },
        {
          type: 'text',
          id: 'b21',
          contenu: "Tu factorises : $x^2 - 9 = (x - 3)(x + 3)$. La limite devient : $\\lim_{x \\to 3} \\frac{(x - 3)(x + 3)}{x - 3}$. Tu simplifies \"les jumeaux\" (x - 3) en haut et en bas. Il ne reste que : $\\lim_{x \\to 3} (x + 3) = 3 + 3 = 6$. Boum ! Le problème est réglé en deux lignes.",
        },
        {
          type: 'exercise',
          id: 'micro-ex-factorisation',
          niveau: 'BASE',
          enonce: 'À toi de jouer ! Calcule la limite suivante en levant l\'indétermination par factorisation : $\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5}$',
          etapes: [
            'Étape 1 : Constate la forme indéterminée 0/0 en remplaçant x par 5.',
            'Étape 2 : Repère que $25 = 5^2$ et utilise l\'identité $a^2 - b^2$ : $x^2 - 25 = (x - 5)(x + 5)$.',
            'Étape 3 : Simplifie la fraction par $(x - 5)$, il reste $(x + 5)$.',
            'Étape 4 : Calcule la limite restante : $5 + 5 = 10$.',
          ],
          reponse: '10',
          conseil: 'La différence de deux carrés est l\'astuce la plus fréquente au BAC pour simplifier les fractions.',
        },
        {
          type: 'text',
          id: 'b22-transition',
          contenu: "Les outils techniques sont affûtés ! Faisons une pause discussion pour comprendre ce que le BAC attend réellement de toi.",
        },
      ],
    },
    {
      id: 's5',
      titre: '1.2 Dialogue — Pourquoi les Dérivées ?',
      blocs: [
        {
          type: 'text',
          id: 'b23-accroche',
          contenu: 'Assois-toi deux minutes avec moi sous l\'apatam. Voyons ensemble les 4 piliers que le BAC va te demander de maîtriser.',
        },
        {
          type: 'text',
          id: 'b23',
          contenu: "Je sais que malgré ces révisions, tu te demandes encore à quoi riment ces fameuses dérivées. Laisse-moi te partager une discussion que j'ai souvent avec les plus jeunes au quartier.",
        },
        {
          type: 'dialogue',
          id: 'b24',
          pf: "OK vieux père, j'ai compris le principe avec le gbaka. Mais concrètement au BAC, on me demande quoi exactement ? Calculer des vitesses de gbaka ?",
          gf: "Non, petit ! Au BAC, on va te demander de calculer la dérivée d'une fonction, de dresser un tableau de variations, de trouver l'équation d'une tangente, et de résoudre des problèmes d'optimisation. Ce sont les 4 piliers. Et chacun utilise la dérivée comme outil principal. Si tu maîtrises la dérivée, tu maîtrises 60% du problème d'analyse !",
        },
        {
          type: 'dialogue',
          id: 'b25',
          pf: "60% ? Ça c'est du sérieux ! D'accord vieux père, on attaque le vocabulaire pour être totalement blindé.",
          gf: "C'est ça même ! Parlons la même langue que les correcteurs du BAC.",
        },
        {
          type: 'text',
          id: 'b26-transition',
          contenu: "Passons tout de suite au décodeur officiel EDUCTOME pour traduire le jargon des profs en français facile.",
        },
      ],
    },
    {
      id: 's6',
      titre: '1.3 Le Vocabulaire des Dérivées Expliqué Simplement',
      blocs: [
        {
          type: 'text',
          id: 'b27-accroche',
          contenu: 'Marre du chinois ancien des mathématiques ? Découvre le décodeur officiel EDUCTOME pour tout comprendre en un clin d\'œil.',
        },
        {
          type: 'text',
          id: 'b27',
          contenu: "En mathématiques, les professeurs parlent un langage qui ressemble parfois à du chinois ancien. Ils font ça par souci de rigueur scientifique. Mon rôle, c'est de faire la traduction simultanée pour toi. Si tu comprends le sens caché derrière chaque mot, tu ne te laisseras plus impressionner par les énoncés du BAC.",
        },
        {
          type: 'table',
          id: 'b28',
          titre: 'Le décodeur officiel EDUCTOME',
          headers: ['Ce que dit le prof', 'Ce que ça veut dire en français facile'],
          rows: [
            ['La Dérivée f\'(x)', 'C\'est le radar de vitesse ou le niveau à bulle. Elle indique la pente (inclinaison) de la courbe. Si f\'(x) > 0 tu montes, si f\'(x) < 0 tu descends.'],
            ['Fonction dérivable en a', 'La courbe est \"lisse\" au point a. Il n\'y a pas de pointe pointue ni de cassure brutale. On peut y poser une règle sans trembler.'],
            ['La Tangente', 'Une ligne droite stricte qui vient \"effleurer\" doucement la courbe en un seul point, sans la traverser violemment. Elle donne la direction précise.'],
            ['Coefficient directeur / Pente', 'Le degré d\'inclinaison de ta tangente. S\'il vaut 0 c\'est plat, s\'il vaut 5 c\'est une pente raide ! C\'est la valeur numérique de f\'(a).'],
            ['Un Extremum (Max/Min)', 'Le sommet d\'une montagne (maximum) ou le fond d\'un cratère (minimum). À cet endroit précis, la pente est nulle (f\'(x) = 0).'],
          ],
        },
        {
          type: 'text',
          id: 'b29',
          contenu: "💡 EXEMPLES CONCRETS ET ANALOGIES DE NOTRE QUOTIDIEN :\n\n1. LA DÉRIVÉE / LA PENTE : Imagine que tu sois un homme d'affaires vendant des chaussures au marché de Treichville. Ta fonction f(x) représente ton bénéfice. La dérivée f'(x), c'est ce qui te dit : \"Est-ce que mes affaires sont en train de grimper (dérivée positive) ou de chuter (dérivée négative) aujourd'hui ?\""
        },
        {
          type: 'text',
          id: 'b30',
          contenu: "2. DÉRIVABLE : Pense à un dos d'âne (gendarme couché) sur la route. Si le dos d'âne est bien arrondi et fait en bitume lisse, la voiture passe doucement : la route est \"dérivable\". Si le dos d'âne est fait de briques cassées avec une pointe aiguë au milieu, ta voiture va cogner fort. Mathématiquement, c'est un \"point anguleux\". La fonction n'est PAS dérivable à cette pointe, car on ne peut pas définir une pente unique."
        },
        {
          type: 'text',
          id: 'b31',
          contenu: "3. LA TANGENTE : Imagine que tu fais tourner une fronde (une pierre attachée à une corde) au-dessus de ta tête. Si tu lâches la corde soudainement, la pierre part tout droit dans les airs. Cette ligne droite parfaite que suit la pierre en quittant le cercle, c'est exactement la trajectoire de la tangente !"
        },
        {
          type: 'text',
          id: 'b32',
          contenu: "4. UN EXTREMUM : Imagine que tu jettes une balle en l'air. Elle monte (vitesse positive), ralentit, s'arrête une microseconde tout en haut, puis redescend (vitesse négative). L'endroit exact, le point le plus haut où la balle s'arrête avant de tomber, c'est le maximum. À cet instant magique, la vitesse (la dérivée) est strictement égale à ZÉRO."
        },
        {
          type: 'tip',
          id: 'b33',
          titre: 'Bilan de ton Grand Frère',
          contenu: [
            'Te voilà équipé, champion(ne) ! Tu possèdes les bases des limites, tu sais jongler avec les puissances et les factorisations.',
            'Le terrain est déblayé, les fondations sont coulées, il est grand temps de construire l\'immeuble.',
            'On passe à l\'action dans le Chapitre 2. On est ensemble !',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      type: 'quiz',
      id: 'q1',
      question: 'Quelle est la formule officielle du taux d\'accroissement de f entre a et x ?',
      options: [
        '$T(x) = f(x) - f(a)$',
        '$T(x) = \\frac{f(x) - f(a)}{x - a}$',
        '$T(x) = \\frac{x - a}{f(x) - f(a)}$',
        '$T(x) = f\'(a)(x - a)$',
      ],
      bonneReponse: 1,
      explication: 'Le taux d\'accroissement ou taux de variation est le rapport de la variation de la fonction sur la variation de la variable : (f(x)-f(a))/(x-a).',
    },
    {
      type: 'quiz',
      id: 'q2',
      question: 'Comment s\'exprime la fonction $f(x) = \\frac{1}{x^3}$ sous forme de puissance directe ?',
      options: [
        '$x^3$',
        '$x^{-3}$',
        '$x^{\\frac{1}{3}}$',
        '$-x^3$',
      ],
      bonneReponse: 1,
      explication: 'D\'après la règle de l\'inverse (l\'ascenseur), faire monter une puissance au numérateur inverse le signe de son exposant. Donc 1/(x³) = x⁻³.',
    },
    {
      type: 'quiz',
      id: 'q3',
      question: 'Quelle identité remarquable permet de factoriser rapidement $x^2 - 16$ ?',
      options: [
        '$(x - 4)^2$',
        '$(x + 4)^2$',
        '$(x - 4)(x + 4)$',
        '$x(x - 16)$',
      ],
      bonneReponse: 2,
      explication: '16 est le carré de 4 ($4^2$). On applique la troisième identité remarquable : $a^2 - b^2 = (a-b)(a+b)$, ce qui donne $(x-4)(x+4)$.',
    },
    {
      type: 'quiz',
      id: 'q4',
      question: 'Que se passe-t-il graphiquement au niveau d\'un \"point anguleux\" (dos d\'âne pointu) ?',
      options: [
        'La fonction y est parfaitement dérivable',
        'La fonction n\'est pas définie en ce point',
        'La fonction n\'est pas dérivable en ce point car on ne peut pas y définir une pente unique',
        'La tangente y est parfaitement horizontale',
      ],
      bonneReponse: 2,
      explication: 'Pour qu\'une fonction soit dérivable, la courbe doit être lisse. Une pointe ou cassure brutale empêche de définir une pente unique : la fonction n\'y est pas dérivable.',
    },
    {
      type: 'quiz',
      id: 'q5',
      question: 'Quand une fonction f atteint un extremum (un maximum ou un minimum), que vaut son nombre dérivé f\'(x) ?',
      options: [
        'Il vaut 1',
        'Il est égal à +∞',
        'Il vaut strictement 0',
        'Il dépend de la limite en l\'infini',
      ],
      bonneReponse: 2,
      explication: 'Au sommet d\'une montagne ou au fond d\'un cratère, la courbe se stabilise horizontalement une microseconde. La pente y est nulle, donc la dérivée est égale à 0.',
    },
  ],
};