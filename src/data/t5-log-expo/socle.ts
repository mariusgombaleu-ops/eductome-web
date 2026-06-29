import { Chapitre } from '../../types/course';

export const chapitreSocle: Chapitre = {
  id: 't5-socle',
  titre: `Le Socle — Les 6 Outils de Sécurité`,
  duree: 14,
  niveau: 'BASE',
  xpGain: 15,
  gratuit: true,
  sections: [
    {
      id: 's1',
      titre: `Le Socle : les six outils de sécurité`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg-introa',
          pf: `Grand Frère, j'ai raturé et fermé mes cahiers de T2, T3 et T4 hein ! On est au Tome 5, on attaque les logarithmes et les exponentielles. C'est un nouveau départ, le passé est passé, non ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-introb',
          gf: `Assieds-toi deux minutes, Champion(ne). Tu penses que les maths en Terminale D, c'est une série télé où on change d'histoire à chaque saison ? Si tu démarres ce tome sans vérifier tes rétroviseurs, tu vas te faire coincer dès les premières pages. Les outils qu'on a forgés au premier et deuxième trimestre vont devenir tes meilleures armes ici. Quand on révisait ça au Lycée Classique d'Abidjan, on appelait ça « nettoyer ses armes ». On passe six outils en revue tout de suite — après, plus aucune excuse.`,
        },
      ],
    },
    {
      id: 's-o1',
      titre: `🔧 Outil 1 — La dérivée composée`,
      blocs: [
        {
          type: 'text',
          id: 'b-o1',
          contenu: `En T2, on a appris à dériver une fonction emboîtée dans une autre. Quand une fonction $g$ est installée à l'intérieur d'une fonction $f$, on applique la règle de la composition :
$$(f \\circ g)'(x) = g'(x) \\times f'\\big(g(x)\\big).$$

**Exemple.** Soit $h(x) = (x^2 + 1)^3$. L'enveloppe externe est $f(X) = X^3$ (donc $f'(X) = 3X^2$) et l'intérieur est $g(x) = x^2 + 1$ (donc $g'(x) = 2x$). On obtient :
$$h'(x) = 2x \\times 3(x^2 + 1)^2 = 6x(x^2 + 1)^2.$$`,
        },
        {
          type: 'tip',
          id: 'tip-o1',
          titre: `Le réflexe du Grand Frère`,
          contenu: `Dans les prochains modules, tu vas rencontrer des fonctions du type $y = \\ln\\big(u(x)\\big)$ et $y = e^{u(x)}$ : ce ne sont rien d'autre que des fonctions composées. Maîtrise cet emboîtement et leurs dérivées deviennent un jeu d'enfant, Champion(ne).`,
        },
      ],
    },
    {
      id: 's-o2',
      titre: `🔧 Outil 2 — Les primitives de base (et le grand absent)`,
      blocs: [
        {
          type: 'text',
          id: 'b-o2',
          contenu: `Au Tome 3, on a fait le chemin inverse : retrouver la fonction d'origine à partir de sa dérivée. Tu as dompté la formule des puissances :
$$\\int x^n \\, dx = \\dfrac{x^{n+1}}{n+1} + C \\quad (n \\neq -1).$$

Cette règle marche pour $x^2$, $x^5$, même $x^{-3}$. Mais tu te souviens du grand absent qui nous bloquait ? Quand on l'appliquait à $f(x) = \\dfrac{1}{x}$ (c'est-à-dire $x^{-1}$), on tombait sur une division par zéro : $-1 + 1 = 0$. Le calcul s'effondrait.`,
        },
        {
          type: 'warning',
          id: 'warn-o2',
          titre: `Le piège à éviter`,
          contenu: `N'applique plus jamais la formule des puissances ordinaires à la fonction inverse. C'est une erreur de calcul classique qui coûte une copie entière en deux lignes.`,
        },
        {
          type: 'text',
          id: 'b-o2b',
          contenu: `Le logarithme népérien est précisément né pour combler ce vide : c'est la fonction unique qui sert de primitive à $x \\mapsto \\dfrac{1}{x}$ sur l'intervalle $\\left]\\,0\\ ;\\ +\\infty\\,\\right[$. La transition entre le T3 et le T5 est donc parfaitement naturelle.`,
        },
      ],
    },
    {
      id: 's-o3',
      titre: `🔧 Outil 3 — Étudier le signe d'un trinôme du second degré`,
      blocs: [
        {
          type: 'text',
          id: 'b-o3',
          contenu: `Pour qu'un logarithme existe, ce qu'il y a à l'intérieur doit être **strictement positif.** Et pour dresser un tableau de variations, tu dois lire le signe d'une dérivée. Dans les deux cas, le réflexe est le même : étudier le signe d'un trinôme $ax^2 + bx + c$.

La règle d'or : un trinôme est **du signe de $a$ à l'extérieur des racines, du signe de $-a$ entre les racines.**

**Exemple.** Étudions le signe de $x^2 - 3x + 2$. Le discriminant vaut $\\Delta = 9 - 8 = 1 > 0$, les racines sont $1$ et $2$. Comme $a = 1 > 0$, le trinôme est **positif** sur $\\left]\\,-\\infty\\ ;\\ 1\\,\\right[ \\cup \\left]\\,2\\ ;\\ +\\infty\\,\\right[$ et **négatif** sur $\\left]\\,1\\ ;\\ 2\\,\\right[$.`,
        },
        {
          type: 'tip',
          id: 'tip-o3',
          titre: `Le réflexe du Grand Frère`,
          contenu: `Quand tu vois $\\ln(x^2 - 3x + 2)$, ce tableau de signe te donne directement l'ensemble de définition : on ne garde que les intervalles où le trinôme est strictement positif. Tu réutilises ça dès le Module 1.`,
        },
      ],
    },
    {
      id: 's-o4',
      titre: `🔧 Outil 4 — Résoudre un second degré par changement de variable`,
      blocs: [
        {
          type: 'text',
          id: 'b-o4',
          contenu: `Beaucoup d'équations du BAC mélangent $e^x$ et $e^{2x}$, ou $\\ln x$ et $(\\ln x)^2$. À première vue, c'est effrayant. L'astuce, c'est de **poser une nouvelle inconnue** pour faire apparaître un banal trinôme du second degré.

**Exemple.** Pour résoudre $e^{2x} - 3e^x + 2 = 0$, on remarque que $e^{2x} = (e^x)^2$. On pose $X = e^x$ (avec la condition $X > 0$). L'équation devient $X^2 - 3X + 2 = 0$, qui donne $X = 1$ ou $X = 2$. On revient ensuite à $x$ : $e^x = 1 \\Rightarrow x = 0$ et $e^x = 2 \\Rightarrow x = \\ln 2$.`,
        },
        {
          type: 'warning',
          id: 'warn-o4',
          titre: `Le piège à éviter`,
          contenu: `Après avoir trouvé $X$, ne t'arrête jamais là : il faut **revenir à l'inconnue de départ** $x$. Et si tu trouves $X \\leq 0$, cette solution est à rejeter, car $e^x$ est toujours strictement positif. On reverra ce réflexe au Module 3.`,
        },
      ],
    },
    {
      id: 's-o5',
      titre: `🔧 Outil 5 — La fonction réciproque et la symétrie par rapport à y = x`,
      blocs: [
        {
          type: 'text',
          id: 'b-o5',
          contenu: `Deux fonctions sont **réciproques** quand l'une défait ce que l'autre fait : tu pars d'un nombre, tu appliques la première, puis la seconde, et tu retombes sur ton nombre de départ. C'est exactement la relation entre $\\ln$ et $\\exp$ : $\\ln(e^x) = x$ et $e^{\\ln x} = x$.

Le fait visuel à graver : **les courbes de deux fonctions réciproques sont symétriques par rapport à la droite $\\Delta : y = x$.** Si tu connais l'allure de la courbe de $\\ln$, tu obtiens celle de $\\exp$ en la repliant comme un miroir le long de la première bissectrice.`,
        },
        {
          type: 'tip',
          id: 'tip-o5',
          titre: `Le réflexe du Grand Frère`,
          contenu: `Garde ce miroir en tête : il t'évitera d'apprendre deux courbes par cœur. Une seule suffit, l'autre s'en déduit par symétrie. C'est le cœur du Module 3, Champion(ne).`,
        },
      ],
    },
    {
      id: 's-o6',
      titre: `🔧 Outil 6 — Les suites géométriques et le problème de seuil`,
      blocs: [
        {
          type: 'text',
          id: 'b-o6',
          contenu: `Rappelle-toi nos séances du Tome 4 sur les suites. On résolvait des problèmes d'évolution — la hausse de population d'un quartier d'Adjamé, les intérêts d'un placement à Abidjan — et on finissait toujours sur une inéquation redoutable du type :
$$1{,}05^{\\,n} > 2.$$

On était désarmés pour isoler $n$, perché en exposant. En T4, on tâtonnait à la calculatrice. Faut pas gnan : le logarithme est le super-pouvoir qui décroche l'exposant pour le ramener sur la ligne de calcul. Le suspense prend fin dès le Module 2, où tu sauras traiter cette situation proprement.`,
        },
        {
          type: 'tip',
          id: 'tip-o6',
          titre: `Le réflexe du Grand Frère`,
          contenu: `Chaque fois qu'une inconnue est coincée en exposant, une petite lumière doit s'allumer : « j'applique le logarithme des deux côtés ». C'est le geste qui débloque tous les seuils.`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `🚀 Récap du Socle — Quel outil pour quel module ?`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-recap',
          headers: [`Outil réveillé ici`, `Tu en auras besoin dans…`],
          rows: [
            [`Outil 1 : La dérivée composée`, `M2, M3, M5 — pour dériver $(\\ln u)'$, $(e^u)'$ et $(x^\\alpha)'$.`],
            [`Outil 2 : Les primitives de base`, `M1 et M2 — pour comprendre que $\\ln x$ est la primitive de $\\dfrac{1}{x}$.`],
            [`Outil 3 : Le signe d'un trinôme`, `M1, M2, M3 — pour l'ensemble de définition et le signe des dérivées.`],
            [`Outil 4 : Changement de variable $X = e^x$`, `M2 et M3 — pour les équations qui se ramènent au second degré.`],
            [`Outil 5 : Fonction réciproque & symétrie $y=x$`, `M3 — pour relier les courbes de $\\ln$ et $\\exp$.`],
            [`Outil 6 : Les suites géométriques & le seuil`, `M2 et M4 — pour isoler un exposant avec le logarithme.`],
          ],
        },
        {
          type: 'text',
          id: 'b-fin',
          contenu: `Voilà, Champion(ne), tes six outils sont aiguisés. Range-les à portée de main : à partir d'ici, chaque module va piocher dedans. On démarre par le Module 1, le logarithme népérien. Faut pas gnan, on avance ensemble.`,
        },
      ],
    },
  ],
};
