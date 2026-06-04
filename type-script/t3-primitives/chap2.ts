// src/data/t3-primitives/chap2.ts
import { Chapitre } from '../../types/course';

export const chapitre1: Chapitre = {
  id: 't3-chap2',
  titre: 'Les Bases Solides',
  duree: 30,
  niveau: 'BASE',
  xpGain: 50,
  gratuit: true,
  objectifs: [
    'Savoir lire le tableau des dérivées usuelles à l\'envers',
    'Comprendre pourquoi l\'apparition de la constante + C est indispensable',
    'Maîtriser la définition formelle d\'une primitive et de la condition initiale',
    'Appliquer la Règle d\'Or de vérification systématique par dérivation',
  ],
  sections: [
    {
      id: 's1',
      titre: 'Introduction — L\'Histoire du Carburateur d\'Adjamé',
      blocs: [
        {
          type: 'text',
          id: 'b1-accroche',
          contenu: 'Champion(ne), savais-tu que savoir démonter un moteur ne sert à rien si tu ne sais pas replacer chaque vis ? Faisons le point pour devenir le patron du remontage.',
        },
        {
          type: 'text',
          id: 'b1',
          contenu: "Champion(ne), avant de nous lancer tête baissée dans les calculs d'intégrales et les calculs d'aires complexes, il faut qu'on s'assoie pour bien comprendre ce qu'on fait. Laisse-moi te raconter une histoire. Il y avait un jeune, dont son oncle avait une vieille Peugeot 504 qu'il emmenait souvent chez un mécanicien au grand marché de la ferraille d'Adjamé. Un jour, le mécano a demandé à son jeune apprenti de démonter le carburateur pour le nettoyer. Le petit, tout fier, a pris sa clé de 12 et a démonté la pièce en moins de cinq minutes. Toutes les vis étaient étalées par terre. Mais quand le patron est revenu et lui a dit : « C'est bien, maintenant remonte-le exactement comme c'était », le petit a commencé à transpirer à grosses gouttes. Il avait su démonter, mais il n'avait pas mémorisé l'ordre pour remonter !",
        },
        {
          type: 'text',
          id: 'b2',
          contenu: "En mathématiques, c'est exactement la même chose. Avant d'apprendre à remonter un moteur, rappelons comment le démonter. Dans le Tome 2, tu as été l'apprenti qui a appris à \"démonter\" les fonctions grâce à la dérivation pour trouver leur vitesse instantanée ou leur pente. Tu as un peu transpiré sur les formules, tu as maîtrisé les tableaux de variations. Félicitations pour ça ! Maintenant, dans ce Tome 3, on te demande de devenir le patron : tu vas devoir REMONTER les fonctions. Et pour réussir à remonter un moteur, la première étape est de connaître parfaitement toutes les pièces qui le composent. On va donc réviser nos bases, car c'est sur elles que va reposer toute ta réussite au BAC.",
        },
        {
          type: 'text',
          id: 'b3-transition',
          contenu: "Ouvrons tout de suite la boîte à outils des dérivées pour apprendre à inverser notre regard sur les formules.",
        },
      ],
    },
    {
      id: 's2',
      titre: '1.1 Ce qu\'il te faut savoir — Rappel des Dérivées Essentielles',
      blocs: [
        {
          type: 'text',
          id: 'b4-accroche',
          contenu: 'Voici ton armoire de stockage. Le secret est simple : s\'entraîner à lire le tableau de la droite vers la gauche pour retrouver le parent d\'une expression.',
        },
        {
          type: 'text',
          id: 'b4',
          contenu: "Voici ta boîte à outils. Ce tableau, c'est celui que tu as mangé et digéré dans le Tome 2. Sauf que maintenant, tu dois changer ta façon de le regarder. Ces dérivées, tu vas les LIRE à l'envers maintenant. Au lieu de te dire « Si j'ai ça à gauche, ça donne quoi à droite ? », ton cerveau doit s'entraîner à dire « Si je vois le résultat à droite, d'où est-ce qu'il vient à gauche ? ».",
        },
        {
          type: 'table',
          id: 'b5-table-rappel-derivees',
          titre: 'Tableau inversé de dérivation',
          headers: ['Fonction de départ $f(x)$', 'Sa dérivée $f\'(x)$'],
          rows: [
            ['$k$ (une constante, ex: 5)', '$0$'],
            ['$x$', '$1$'],
            ['$x^2$', '$2x$'],
            ['$x^n$ ($n \\neq 0$)', '$nx^{n-1}$'],
            ['$\\frac{1}{x}$', '$-\\frac{1}{x^2}$'],
            ['$\\sqrt{x}$', '$\\frac{1}{2\\sqrt{x}}$'],
            ['$e^x$', '$e^x$'],
            ['$\\ln(x)$', '$\\frac{1}{x}$'],
            ['$\\sin(x)$', '$\\cos(x)$'],
            ['$\\cos(x)$', '$-\\sin(x)$'],
          ],
        },
        {
          type: 'text',
          id: 'b6',
          contenu: "Quand tu étais en train de dériver, tu allais de la colonne de gauche vers la colonne de droite. Pour primitiver, tu vas simplement partir de la colonne de droite pour retrouver le \"parent\" dans la colonne de gauche !",
        },
        {
          type: 'text',
          id: 'b7-transition',
          contenu: "Comprenons maintenant pourquoi ce voyage à reculons fait perdre une information capitale et impose une constante de sécurité.",
        },
      ],
    },
    {
      id: 's3',
      titre: '1.1 Suite — Le Concept de « Faire l\'Inverse » et de la Constante',
      blocs: [
        {
          type: 'text',
          id: 'b8-accroche',
          contenu: 'Découvrons pourquoi plusieurs élèves peuvent avoir des réponses différentes mais toutes valides lors du remontage d\'une fonction.',
        },
        {
          type: 'text',
          id: 'b8',
          contenu: "B. Le concept de \"faire l'inverse\" : Prenons un exemple extrêmement simple pour que ton cerveau clique. Imagine que je te donne la fonction suivante : $f'(x)=2x$. Je te pose la question : Quelle est la fonction d'origine $f(x)$ qui, lorsqu'on la dérive, donne $2x$ ? Si tu regardes le tableau ci-dessus à l'envers, ton œil repère immédiatement le $2x$ dans la colonne de droite. Tu regardes à gauche, et tu vois $x^2$. Donc, tu me réponds fièrement : « Vieux père, c'est $x^2$ ! » Et tu as raison ! Vérifions ensemble par dérivation : si $f(x)=x^2$, alors $f'(x)=2x$. Ça marche parfaitement.",
        },
        {
          type: 'text',
          id: 'b9',
          contenu: "Mais attends un instant... Que se passe-t-il si un autre élève lève la main et dit : « Moi, je propose $f(x)=x^2+3$ » ? Dérivons sa proposition pour voir : La dérivée de $x^2$ est $2x$. La dérivée de la constante $3$ est $0$. Donc, la dérivée de $x^2+3$ est bien $2x + 0 = 2x$. Il a raison aussi ! Et si un troisième élève propose $f(x)=x^2-1000$ ? La dérivée de $-1000$ est $0$. Donc la dérivée de $x^2 - 1000$ est encore $2x$ !",
        },
        {
          type: 'warning',
          id: 'b10-warning-constante-disparue',
          contenu: "La grande révélation : Quand tu \"remontes\" une dérivée, tu perds une information fondamentale : tu ne sais pas s'il y avait un nombre fixe (une constante) à la fin de la fonction d'origine, puisque la dérivation efface les constantes en les transformant en zéro. C'est pour cela que lorsqu'on trouve une primitive, on doit toujours ajouter un $+ C$ (où C est un nombre réel quelconque) à la fin de notre réponse. La vraie réponse à ma devinette n'est donc pas juste $x^2$, mais bien $x^2+C$. C'est ce qu'on appelle l'ensemble des primitives.",
        },
        {
          type: 'text',
          id: 'b11-transition',
          contenu: 'Voyons maintenant comment formaliser cela de façon mathématique et comment isoler une seule réponse grâce à la condition initiale.',
        },
      ],
    },
    {
      id: 's4',
      titre: '1.1 Suite — Définition Formelle et la Condition Initiale',
      blocs: [
        {
          type: 'text',
          id: 'b12-accroche',
          contenu: 'Prêt(e) à mettre ton costume de Major ? Fixons la définition rigoureuse et le protocole pour calculer la valeur exacte de cette constante C.',
        },
        {
          type: 'rule',
          id: 'b12-def-primitive',
          titre: '📌 DÉFINITION FORMELLE D\'UNE PRIMITIVE',
          contenu: [
            'Soit f une fonction définie sur un intervalle I.',
            'On dit qu\'une fonction F est une primitive de f sur l\'intervalle I si F est dérivable sur I et que pour tout x de I :',
            '$$F\'(x) = f(x)$$',
            'Formulé sans jargon : F est une primitive de f si, quand on dérive F, on retrouve exactement f. F est le parent, f est l\'enfant.',
          ],
        },
        {
          type: 'text',
          id: 'b13',
          contenu: "Trouver L'UNIQUE primitive (La Condition Initiale) : Au BAC série D, on va souvent te demander de trouver l'unique primitive qui vérifie une condition précise du type $F(x_0)=y_0$. Pourquoi ? Parce qu'avec le fameux « + C », tu as une infinité de possibilités (une famille de primitives). Pour trouver la valeur exacte de ce fameux « C » et n'avoir qu'une seule fonction finale, l'énoncé te donnera toujours un indice, comme un point de passage de la courbe.",
        },
        {
          type: 'text',
          id: 'b14',
          contenu: "Exemple d'application résolu : « Déterminer la primitive F de $f(x)=2x$ sachant que $F(1)=5$. »\n\n1. Tu sais que la primitive générale s'écrit : $F(x) = x^2 + C$.\n2. Tu utilises l'indice fourni : $F(1) = 1^2 + C = 1 + C$.\n3. Comme l'énoncé impose $F(1) = 5$, tu poses l'équation : $1 + C = 5 \\implies C = 4$.\n4. L'unique primitive cherchée est donc : $F(x) = x^2 + 4$. Bam ! Tu viens de valider une compétence majeure.",
        },
        {
          type: 'exercise',
          id: 'micro-ex-condition-initiale',
          niveau: 'BASE',
          enonce: 'À toi de jouer ! Trouve l\'unique primitive F de la fonction $f(x) = 1$ sachant que la condition initiale impose $F(2) = 7$. (Rappel : la primitive générale de 1 est $x + C$).',
          etapes: [
            'Étape 1 : Écris l\'expression générale de la primitive : $F(x) = x + C$.',
            'Étape 2 : Applique la condition en remplaçant x par 2 : $F(2) = 2 + C$.',
            'Étape 3 : Égale à la valeur demandée : $2 + C = 7 \\implies C = 7 - 2 = 5$.',
            'Étape 4 : Conclus avec l\'expression unique : $x + 5$.',
          ],
          reponse: 'x + 5',
          conseil: 'Isole toujours la constante C avant de réécrire la fonction finale épurée.',
        },
        {
          type: 'text',
          id: 'b15-transition',
          contenu: 'Faisons une pause discussion au maquis pour éclairer la signification profonde de ce réservoir de constantes.',
        },
      ],
    },
    {
      id: 's5',
      titre: '1.2 Dialogue — L\'Histoire du Réservoir d\'Eau de Yopougon',
      blocs: [
        {
          type: 'text',
          id: 'b16-accroche',
          contenu: 'Pourquoi ce satanique « + C » est-il obligatoire ? Prenons l\'image du niveau d\'eau de Yopougon pour tout clarifier en deux lignes.',
        },
        {
          type: 'text',
          id: 'b16',
          contenu: "Pour être sûr que tout est bien en place dans ta tête, écoutons cette petite discussion au maquis du coin :",
        },
        {
          type: 'dialogue',
          id: 'b17',
          pf: "Grand frère, faut m'expliquer un truc. En dérivée, j'avais une fonction, je calculais sa pente. C'était un calcul direct. Mais là, pour la primitive, on dirait que je dois jouer aux devinettes ! Je dois deviner quelle fonction a été dérivée pour donner ce que j'ai sous les yeux. C'est un peu mystique, non ?",
          gf: "Tu as raison, c'est exactement une devinette, ou plutôt une enquête de police ! On te donne les traces de pneus sur la route (la dérivée), et tu devez deviner quelle voiture (la primitive) a pu laisser ces traces. Mais la bonne nouvelle, c'est que tu as déjà toutes les réponses dans ton tableau de dérivées. Tu ne devines pas au hasard, tu lis ton cours à reculons !",
        },
        {
          type: 'dialogue',
          id: 'b18',
          pf: "D'accord. Mais cette histoire de « + C », ça m'énerve un peu. Pourquoi on ne peut pas juste écrire la fonction simplement ? Si on me demande la primitive de $\\cos(x)$, je dis $\\sin(x)$ et puis on avance ! Pourquoi écrire $\\sin(x)+C$ ?",
          gf: "Imagine que tu as un réservoir d'eau chez toi à Yopougon. Je te dis : « J'ai versé 10 litres d'eau dedans aujourd'hui ». Ça, c'est la variation, c'est la dérivée. Maintenant, je te demande : « Il y a combien de litres au total dans le réservoir ? »",
        },
        {
          type: 'dialogue',
          id: 'b19',
          pf: "Bah, je ne peux pas savoir ! Ça dépend de combien d'eau il y avait déjà dans le réservoir avant que tu ne verses tes 10 litres !",
          gf: "Et BAM ! Tu viens de comprendre le « + C » ! La constante d'intégration C, c'est exactement cette quantité d'eau qui était déjà là au départ, la situation initiale inconnue. Quand on dérive, on ne regarde que la variation (les 10 litres ajoutés). Le volume de départ (le C) disparaît. Donc quand on remonte de la variation vers le total (quand on primitive), on est obligé d'ajouter ce +C pour dire « Plus ce qu'il y avait au début ». Sans ça, ton résultat est mathématiquement faux.",
        },
        {
          type: 'dialogue',
          id: 'b20',
          pf: "Ahhhh ! Mais c'est trop logique en fait ! Donc le +C c'est mon filet de sécurité pour ne pas oublier l'histoire passée de la fonction ! Vieux père, c'est propre !",
          gf: "C'est ça même ! Fixons le décodeur officiel des expressions pour être totalement au point.",
        },
        {
          type: 'text',
          id: 'b21-transition',
          contenu: 'Passons au décodeur de vocabulaire pour traduire le jargon technique des professeurs en français facile.',
        },
      ],
    },
    {
      id: 's6',
      titre: '1.3 Le Vocabulaire des Intégrales Décodé',
      blocs: [
        {
          type: 'text',
          id: 'b22-accroche',
          contenu: 'Ne te laisse plus intimider par les énoncés du BAC. Découvrons la traduction simultanée de chaque expression clé.',
        },
        {
          type: 'text',
          id: 'b22',
          contenu: "Le vocabulaire, c'est la clé. Si tu ne comprends pas les mots que le professeur utilise, tu vas paniquer devant l'énoncé de l'Exercice 5 au BAC, même si tu sais faire les calculs. Voici le décodeur officiel EDUCTOME pour ce nouveau chapitre. Garde ce tableau bien en tête :",
        },
        {
          type: 'table',
          id: 'b23-table-vocabulaire-primitives',
          titre: 'Le Décodeur Officiel EDUCTOME',
          headers: ['Ce que dit le prof (Le Jargon Math)', 'Ce que ça veut dire en français facile (La Traduction)'],
          rows: [
            ['Une Primitive de f (notée souvent F)', 'La fonction \"parent\" dont f est la dérivée. L\'opération inverse du démontage mécanique.'],
            ['La famille de primitives', 'L\'ensemble de toutes les réponses possibles, qui s\'écrivent sous la forme F(x) + C. Elles sont décalées verticalement.'],
            ['La constante d\'intégration (C)', 'Le fameux \"+ C\". C\'est le nombre caché qui s\'est effacé lors de la dérivation. Il représente la situation initiale inconnue.'],
            ['Une Intégrale définie', 'C\'est le calcul pour trouver une accumulation ou une aire. Attention : le résultat d\'une primitive est une FONCTION, alors que celui d\'une intégrale définie est un NOMBRE réel.'],
            ['Les bornes d\'intégration (a et b)', 'Les petits nombres écrits en haut et en bas du grand serpent horizontal de l\'intégrale : $\\int_a^b$. Ce sont les points de départ (a) et d\'arrivée (b) de ton calcul.'],
            ['Le Théorème fondamental', 'La formule magique qui relie l\'intégrale à la primitive : $\\int_a^b f(x)dx = F(b) - F(a)$. Tu soustrais la valeur de départ à la valeur d\'arrivée.'],
          ],
        },
        {
          type: 'tip',
          id: 'b24',
          titre: '💡 Conseil du Grand Frère',
          contenu: [
            'Ne te presse pas pour le théorème fondamental, on le verra en détail dans le Chapitre 4 avec l\'application sur les calculs d\'aires.',
            'Je veux juste que tu sois déjà familier avec les mots !',
          ],
        },
        {
          type: 'text',
          id: 'b25-transition',
          contenu: 'Et maintenant, découvrons le bloc le plus crucial de tes révisions de Terminale : l\'arme fatale contre les fautes de calcul.',
        },
      ],
    },
    {
      id: 's7',
      titre: '1.4 La Règle d\'Or — La Vérification Ultime',
      blocs: [
        {
          type: 'text',
          id: 'b26-accroche',
          contenu: 'Marre de douter après avoir écrit une formule ? Découvre la technique d\'EDUCTOME pour sécuriser 100% de tes points en 10 secondes.',
        },
        {
          type: 'text',
          id: 'b26',
          contenu: "Champion, s'il y a un seul conseil que tu dois encadrer et afficher au-dessus de ton lit pour toute l'année de Terminale, c'est celui-ci. C'est l'outil indispensable qui va t'empêcher de perdre des points bêtement au BAC. Les primitives, c'est un jeu de devinettes. Et parfois, l'intuition nous trompe.",
        },
        {
          type: 'rule',
          id: 'b27-regle-or-verif',
          titre: '📌 LA RÈGLE D\'OR : LA VÉRIFICATION ULTIME',
          contenu: [
            'Comment vérifier à 100% qu\'une primitive trouvée est correcte ?',
            'Si tu as écrit une fonction F(x) comme étant la primitive de f(x), DÉRIVE F(x) SUR TON BROUILLON.',
            'Si, après l\'avoir dérivée, tu retombes exactement sur ton f(x) de départ, c\'est que ton calcul est PARFAIT.',
            'Les mathématiques ne mentent jamais. Si ça ne correspond pas, c\'est qu\'il te manque un coefficient ou un signe.',
          ],
        },
        {
          type: 'text',
          id: 'b28',
          contenu: "Analysons 3 exemples pratiques de relecture ciblée issus de notre quotidien :\n\n• Exemple 1 : Le doute sur les puissances. Le prof demande : Trouve la primitive de $f(x)=x^3$. Ton intuition te souffle : « Ah, c'est $x^4$ ! ». Appliquons la Règle d'Or : la dérivée de $F(x)=x^4$ est $F'(x)=4x^3$. Verdict : Ça ne marche pas ! Il y a un \"4\" parasite en trop. Pour éliminer ce \"4\", il faut diviser par 4. Tu proposes donc $F(x)=\\frac{1}{4}x^4$. Tu dérives : la dérivée de $\\frac{1}{4}x^4$ est bien $\\frac{1}{4} \\times 4x^3 = x^3$. BINGO ! La bonne primitive générale est bien $\\frac{1}{4}x^4 + C$.\n\n• Exemple 2 : Le piège du signe avec la trigonométrie. Le prof demande : Trouve la primitive de $f(x)=\\sin(x)$. Ton intuition te dit : « Facile, c'est $\\cos(x)$ ! ». La Règle d'Or : tu dérives ta proposition. La dérivée de $F(x)=\\cos(x)$ est $F'(x)=-\\sin(x)$. Verdict : Faux ! Tu as un signe moins parasite qui n'était pas dans l'énoncé. La correction : tu dois inverser le signe de ta proposition. La bonne primitive est donc $F(x)=-\\cos(x)+C$. Si tu dérives $-\\cos(x)$, le moins par moins fera un plus, et tu retrouveras bien $\\sin(x)$.\n\n• Exemple 3 : Le point de vigilance de la fraction. Le prof demande : Trouve la primitive de $f(x)=e^{2x}$. Ton intuition : « L'exponentielle ne change jamais, donc c'est $e^{2x}$ ! ». La Règle d'Or : tu dérives. La dérivée de $F(x)=e^{2x}$ est $F'(x)=2e^{2x}$ (à cause de la règle des fonctions composées $u'e^u$ vue au Tome 2). Verdict : Faux ! Tu as un \"2\" en trop. La correction : tu dois compenser ce \"2\" en multipliant par $\\frac{1}{2}$. La bonne primitive est donc $F(x)=\\frac{1}{2}e^{2x}+C$.",
        },
        {
          type: 'tip',
          id: 'b29-bilan-final',
          titre: 'Grand Frère te dit',
          contenu: [
            'Tu vois la puissance de cette méthode ? Avec la Règle d\'Or, tu n\'as plus le droit à l\'erreur.',
            'Dès que tu poses une primitive sur ta copie de BAC, dépense 10 secondes sur ton brouillon pour la redériver.',
            'Si tu fais ça, tu sécurises tous tes points, garanti à 100% !',
            'Te voilà solidement ancré, Champion(ne). On passe tout de suite aux formules opérationnelles du Chapitre 2 !',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      type: 'quiz',
      id: 'q1-or',
      question: 'D\'après la Règle d\'Or, comment vérifier avec une certitude absolue qu\'une primitive F(x) est juste ?',
      options: [
        'En calculant sa limite en plus l\'infini',
        'En la dérivant sur son brouillon pour vérifier si l\'on retombe exactement sur f(x)',
        'En remplaçant x par 0',
        'En la multipliant par la constante d\'intégration C',
      ],
      bonneReponse: 1,
      explication: 'Le seul juge en mathématiques pour valider une primitive F est la dérivation : si F\'(x) = f(x), ton résultat est blindé et inattaquable.',
    },
    {
      type: 'quiz',
      id: 'q2-or',
      question: 'Quelle est la primitive exacte de f(x) = e^{2x} après application de la compensation de la Règle d\'Or ?',
      options: [
        '$F(x) = e^{2x} + C$',
        '$F(x) = 2e^{2x} + C$',
        '$F(x) = \\frac{1}{2}e^{2x} + C$',
        '$F(x) = -e^{2x} + C$',
      ],
      bonneReponse: 2,
      explication: 'Comme la dérivation de e^{2x} fait descendre un 2, il faut multiplier par 1/2 devant pour compenser ce coefficient et retrouver l\'expression de départ.',
    },
  ],
};