import { Chapitre } from '../../types/course';

export const chapitreM4: Chapitre = {
  id: 't1-m4',
  titre: `Module 4 — Croissances Comparées`,
  duree: 25,
  niveau: 'BAC',
  xpGain: 35,
  objectifs: [
    `Classer $e^x$, $x^n$ et $\\ln x$ du plus faible au plus fort sans jamais t'embrouiller`,
    `Énoncer la hiérarchie asymptotique avec le vocabulaire officiel attendu au BAC`,
    `Choisir instantanément le bon terme à mettre en facteur pour lever une indétermination mixte`,
    `Maîtriser les 4 limites de référence du programme et le théorème d'encadrement`,
    `Rédiger une levée d'indétermination propre et fluide face au correcteur du BAC`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, je suis bloqué sur la limite en $+\\infty$ de $e^x - x^2$. C'est une forme indéterminée du type $+\\infty - \\infty$. Dans le Module 2, tu m'as dit de prendre le plus haut degré — donc ici c'est $x^2$ qui gagne avec son exposant 2, non ? L'exponentielle n'a même pas de puissance visible !`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Ahi, Champion(ne), attention ! Tu es en train de mélanger les royaumes. La méthode du plus haut degré que je t'ai montrée au Module 2, elle ne marche que si tous les membres de ton expression appartiennent à la même famille : les polynômes. Là, tu as une exponentielle et une puissance de $x$. Elles ne jouent pas dans la même catégorie. L'exponentielle n'a pas besoin d'exposant sur son $x$ pour écraser tout ce qui bouge. C'est elle la vraie patronne à l'infini, et c'est ce qu'on appelle les **croissances comparées**. Viens, pose ton stylo, on va regarder ça de près.`,
        },
      ],
    },
    {
      id: 's2',
      titre: `② LE RÉEL`,
      blocs: [
        {
          type: 'text',
          id: 'b3',
          contenu: `Imagine une grande course en ligne droite sur l'autoroute du Nord, juste à la sortie du célèbre embouteillage d'Adjamé. On lance trois concurrents en direction de Yamoussoukro :

- un piéton courageux sur son vélo de course,
- un chauffeur de gbaka pressé qui appuie à fond sur le champignon,
- un avion de chasse de l'armée de l'air.

Au tout début, le cycliste donne l'illusion qu'il tient le coup. Le gbaka, lui, accélère et prend une bonne avance.

Mais dès qu'on regarde les très grandes distances — quand on file vers l'infini — l'avion de chasse allume ses réacteurs. Le gbaka a beau forcer le moteur, il donne l'impression de reculer tellement l'avion explose les compteurs. Quant au cycliste, il avance toujours, mais à une vitesse si ridicule par rapport aux deux autres qu'on dirait qu'il est arrêté.`,
        },
        {
          type: 'figure',
          id: 'fig-m4-1',
          src: '/images/t1/fig_M4_1.png',
          legende: `Hiérarchie à l'infini : $e^x$ domine $x^2$, qui domine $\\ln x$.`,
          alt: `Hiérarchie à l'infini : $e^x$ domine $x^2$, qui domine $\\ln x$.`,
        },
      ],
    },
    {
      id: 's3',
      titre: `③ LE PONT`,
      blocs: [
        {
          type: 'text',
          id: 'b4',
          contenu: `Maintenant, traduisons cette course sur l'autoroute en langage mathématique pur.

- Le piéton sur son vélo, c'est la fonction **logarithme naturel** $\\ln x$. Elle grandit, oui, mais avec une lenteur incroyable.
- Le chauffeur de gbaka, c'est la **puissance** $x^n$ (que ce soit $x$, $x^2$ ou $x^{10}$). Elle va vite, de plus en plus vite.
- L'avion de chasse, c'est **l'exponentielle** $e^x$. Sa croissance dépasse l'entendement.

Résumons cette hiérarchie dans un tableau :`,
        },
        {
          type: 'table',
          id: 'tbl5',
          headers: [`Scène du quartier`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Le cycliste courageux sur son vélo`, `$\\\\ln x$`, `La fonction logarithme — elle avance, mais avec une lenteur incroyable`],
            [`Le chauffeur de gbaka lancé à fond`, `$x^n$`, `La fonction puissance — rapide, de plus en plus rapide`],
            [`L'avion de chasse de l'armée de l'air`, `$e^x$`, `L'exponentielle — sa croissance dépasse l'entendement`],
            [`La distance gigantesque qui sépare les coureurs`, `Les rapports $\\\\dfrac{e^x}{x^n}$, $\\\\dfrac{\\\\ln x}{x^n}$`, `Les limites de référence des croissances comparées`],
            [`Le plus fort qui impose sa loi dans la course`, `Factoriser par le terme dominant`, `La technique pour lever l'indétermination mixte`],
          ],
        },
        {
          type: 'text',
          id: 'b6',
          contenu: `Quand ces trois fonctions se retrouvent dans un même calcul à l'infini, c'est la loi du plus fort qui dicte le résultat. Un rapport entre l'avion et le gbaka ? L'avion impose sa volonté. Un rapport entre le gbaka et le vélo ? Le vélo ne pèse rien. C'est exactement ça, l'esprit des croissances comparées.`,
        },
      ],
    },
    {
      id: 's4',
      titre: `④ LA RÈGLE`,
      blocs: [
        {
          type: 'rule',
          id: 'rule7',
          titre: `Règle`,
          contenu: `En $+\\infty$, la hiérarchie absolue des puissances est la suivante : la fonction exponentielle l'emporte sur toute fonction puissance, qui elle-même l'emporte sur la fonction logarithme :
$$\\ln x \\ll x^n \\ll e^x$$

De cette hiérarchie découlent les **quatre limites de référence incontournables** du programme :

**① L'exponentielle l'emporte sur la puissance en $+\\infty$ :**
$$\\lim_{x \\to +\\infty} \\dfrac{e^x}{x^n} = +\\infty$$

**② La puissance l'emporte sur le logarithme en $+\\infty$ :**
$$\\lim_{x \\to +\\infty} \\dfrac{\\ln x}{x^n} = 0$$

**③ L'exponentielle l'emporte aussi en $-\\infty$ :**
$$\\lim_{x \\to -\\infty} x^n e^x = 0$$

**④ La puissance l'emporte sur le logarithme au voisinage de $0^+$ :**
$$\\lim_{x \\to 0^+} x^n \\ln x = 0$$

**La méthode pratique.** Face à une indétermination où ces familles se mélangent, la clé est de **factoriser par le terme le plus fort** pour faire apparaître l'une de ces limites de référence.`,
        },
        {
          type: 'rule',
          id: 'rule8',
          titre: `Règle`,
          contenu: `Imagine deux gendarmes qui escortent un prisonnier le long de la route. Le gendarme de gauche et celui de droite marchent côte à côte, de plus en plus serrés. Si les deux arrivent exactement au même poste de police, le prisonnier n'a pas le choix : il y arrive aussi, coincé entre les deux.

En maths, c'est exactement le même principe. Si pour tout $x$ dans un voisinage de la borne considérée :
$$g(x) \\leq f(x) \\leq h(x)$$
et si $\\displaystyle\\lim g(x) = \\displaystyle\\lim h(x) = L$, alors nécessairement :
$$\\lim f(x) = L$$

**Application fondamentale — L'encadrement des fonctions trigonométriques.**

Pour tout $x \\in \\mathbb{R}$ : $-1 \\leq \\sin x \\leq 1$ et $-1 \\leq \\cos x \\leq 1$.

Ces inégalités sont ta porte d'entrée vers le théorème des gendarmes chaque fois qu'un $\\sin x$ ou $\\cos x$ vient s'inviter dans une limite à l'infini.

**Procédure en 4 étapes :**

**Étape 1.** Écris l'encadrement de base : $-1 \\leq \\sin x \\leq 1$ (ou $\\cos x$).

**Étape 2.** Multiplie (ou divise) chaque membre de l'inégalité par le terme qui accompagne la fonction trigonométrique. Si ce terme est **positif**, les inégalités gardent leur sens. S'il est **négatif**, elles s'inversent.

**Étape 3.** Calcule les limites des deux bornes — les deux « gendarmes ». Elles doivent tendre vers la **même** valeur $L$.

**Étape 4.** Conclus par le théorème d'encadrement : la fonction du milieu, coincée entre les deux, tend aussi vers $L$.`,
        },
        {
          type: 'tip',
          id: 'tip9',
          titre: `Conseil`,
          contenu: `Le théorème des gendarmes est ton arme secrète quand tu vois un $\\sin$ ou un $\\cos$ multiplié par un terme qui tend vers $0$ — comme $\\dfrac{\\sin x}{x}$ en $+\\infty$ ou $\\dfrac{\\cos(x^2)}{x^3}$. L'encadrement transforme un calcul apparemment impossible en un simple calcul de bornes.`,
        },
        {
          type: 'warning',
          id: 'warn10',
          titre: `Piège à éviter`,
          contenu: `Quand tu multiplies une inégalité par un terme **négatif**, les signes d'inégalité s'inversent. Si tu divises par $x$ et que $x < 0$, le « $\\leq$ » devient « $\\geq$ ». C'est l'erreur la plus fréquente sur les copies — vérifie toujours le signe du facteur avant de toucher aux inégalités.`,
        },
      ],
    },
    {
      id: 's5',
      titre: `⑤ LA DESCENTE`,
      blocs: [
        {
          type: 'text',
          id: 'b11',
          contenu: `### Le Diagnostic

Quand tu te retrouves devant ta feuille de composition et que tu vois une limite mêlant des $e^x$ ou des $\\ln x$ avec des puissances de $x$, regarde d'abord **vers quoi tend $x$**.

Si $x$ tend vers $+\\infty$, $-\\infty$ ou $0^+$ : active le réflexe des croissances comparées. Si l'expression est une somme conflictuelle ou une fraction indéterminée, prépare-toi à imposer la loi du plus fort.`,
        },
        {
          type: 'warning',
          id: 'warn12',
          titre: `Piège à éviter`,
          contenu: `L'erreur classique consiste à invoquer les croissances comparées alors que $x$ tend vers un nombre fixe, comme $2$ ou $1$. Si $x \\to 2$, il n'y a aucune course de vitesse — on remplace simplement les valeurs ! Les croissances comparées ne s'activent **qu'aux bornes de conflit** ($\\pm\\infty$ et $0^+$).

C'est comme le jour où le prof écrit au tableau une grosse formule bien chargée et demande : « Qui est le plus fort ici ? » Tout le monde se regarde, personne ne veut parler. Toi, tu regardes la hiérarchie, tu vois l'exponentielle, et tu sais déjà comment l'histoire va se terminer.

### L'Arbre de décision`,
        },
        {
          type: 'table',
          id: 'tbl13',
          headers: [`Si tu vois…`, `Ce que tu fais`],
          rows: [
            [`Une forme +∞ − ∞ avec eˣ et xⁿ`, `Tu factorises par eˣ (le plus fort) — l'intérieur de la parenthèse doit faire apparaître xⁿ/eˣ → 0`],
            [`Une forme +∞ − ∞ avec xⁿ et ln x`, `Tu factorises par xⁿ (le plus fort) — l'intérieur doit faire apparaître ln x / xⁿ → 0`],
            [`Une fraction ∞/∞ avec eˣ et xⁿ en +∞`, `Tu sépares ou identifies le rapport eˣ/xⁿ → +∞ directement (limite de référence ①)`],
            [`Une fraction ∞/∞ avec ln x et xⁿ en +∞`, `Tu identifies le rapport ln x / xⁿ → 0 directement (limite de référence ②)`],
            [`Un produit avec xⁿeˣ en −∞, ou xⁿ ln x en 0⁺`, `Limites de référence ③ et ④ — résultat direct : 0`],
            [`Un sin x ou cos x multiplié par un terme qui tend vers 0 (ex. sin x / x en +∞)`, `Théorème des Gendarmes : encadrer entre −1 et 1, multiplier par le terme, puis calculer les limites des deux bornes`],
          ],
        },
        {
          type: 'text',
          id: 'b14',
          contenu: `### La Procédure

**Étape 1.** Repère les forces en présence dans l'expression ($e^x$, $x^n$ ou $\\ln x$) et identifie la borne ($+\\infty$, $-\\infty$ ou $0^+$). Écris sur ta copie : *« Cette limite présente la forme indéterminée [type] et fait intervenir une croissance comparée. »*

**Étape 2.** Extrais le terme dominant en le mettant en facteur commun.

**Étape 3.** Distribue proprement à l'intérieur de la parenthèse pour faire apparaître les fractions de référence ($\\dfrac{e^x}{x^n}$, $\\dfrac{\\ln x}{x^n}$, etc.).

**Étape 4.** Applique les limites de référence pour vider les parenthèses et conclus par produit ou somme de limites. Nomme explicitement la limite de référence utilisée (① à ④).

### La Vérification

- **Borne correcte ?** Si $x \\to a$ (nombre fini), les croissances comparées ne s'appliquent pas — substitution directe.
- **Parenthèse cohérente ?** Après factorisation par le terme dominant, le bloc intérieur doit tendre vers un **réel fini non nul** (souvent $1$ ou $-1$). Si ce bloc tend vers $0$ ou $\\pm\\infty$, vérifie ta factorisation.
- **Signe final.** $e^x$ est toujours positif — le signe de la limite est donné par le signe du bloc intérieur de la parenthèse.`,
        },
        {
          type: 'figure',
          id: 'fig-m4-2',
          src: '/images/t1/fig_M4_2.png',
          legende: `Théorème des gendarmes : $g\\le f\\le h$, toutes vers $L$.`,
          alt: `Théorème des gendarmes : $g\\le f\\le h$, toutes vers $L$.`,
        },
      ],
    },
    {
      id: 's-bac-5',
      titre: `📘 LANGAGE OFFICIEL DU BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b15',
          contenu: `Champion(ne), tu as l'image de la course. Maintenant, ta copie doit parler le langage rigoureux des maths.

**Définition formelle — La hiérarchie asymptotique.** En $+\\infty$, les fonctions exponentielle, puissance et logarithme ne grandissent pas à la même vitesse. On dit que **la fonction exponentielle l'emporte sur toute fonction puissance, qui elle-même l'emporte sur la fonction logarithme**. On résume cette hiérarchie par la notation :
$$\\ln x \\ll x^n \\ll e^x \\quad \\text{en } +\\infty$$

Le symbole « $\\ll$ » signifie « est négligeable devant » au sens des limites.

**Théorème des croissances comparées (programme officiel Terminale D).** Pour tout entier naturel $n \\geq 1$ :
$$\\lim_{x \\to +\\infty} \\dfrac{e^x}{x^n} = +\\infty \\qquad \\lim_{x \\to +\\infty} \\dfrac{\\ln x}{x^n} = 0$$
$$\\lim_{x \\to -\\infty} x^n e^x = 0 \\qquad \\lim_{x \\to 0^+} x^n \\ln x = 0$$

**En langage courant.** Quand deux fonctions de familles différentes se battent à l'infini, le plus fort gagne **toujours**, peu importe les coefficients ou les exposants.`,
        },
        {
          type: 'warning',
          id: 'warn16',
          titre: `Piège à éviter`,
          contenu: `- **Croissance comparée** — c'est le terme officiel qui désigne le théorème. Jamais « les forces » ni « l'avion ».
- **L'emporter sur** ou **être négligeable devant** — les verbes officiels pour exprimer la domination asymptotique.
- **Factoriser par le terme dominant** — l'opération qui révèle la limite de référence cachée.
- **Limite de référence** — chacune des 4 limites du théorème, à citer explicitement quand on les utilise.`,
        },
        {
          type: 'tip',
          id: 'tip17',
          titre: `Conseil`,
          contenu: `Le correcteur attend la phrase *« Par croissance comparée, $\\dfrac{e^x}{x^n} \\to +\\infty$ »* avant la conclusion d'une limite mixte. Sans nommer le théorème, le calcul paraît surgir de nulle part — perte sèche de points de méthode.`,
        },
      ],
    },
    {
      id: 's-exo-6',
      titre: `Exercices-Types`,
      blocs: [
        {
          type: 'exercise',
          id: 'extype18',
          niveau: 'BAC',
          enonce: `Soit $h$ la fonction définie sur $\\mathbb{R}$ par $h(x) = e^x - x^2$. Déterminer $\\displaystyle\\lim_{x \\to +\\infty} h(x)$.`,
          etapes: [
            { name: `Étape 1`, contenu: `On met $e^x$ en facteur commun. On divise chaque terme de la différence par $e^x$ à l'intérieur de la parenthèse :
$$h(x) = e^x\\!\\left(1 - \\dfrac{x^2}{e^x}\\right)$$` },
            { name: `Étape 2`, contenu: `On analyse l'intérieur de la parenthèse. Par la limite de référence ①, $\\dfrac{e^x}{x^2} \\to +\\infty$. Donc par inverse : $\\dfrac{x^2}{e^x} \\to 0$. La parenthèse tend vers $1 - 0 = 1$.` },
            { name: `Étape 3`, contenu: `On applique la règle du produit. Comme $\\displaystyle\\lim_{x \\to +\\infty} e^x = +\\infty$ et que la parenthèse tend vers $1$ :
$$+\\infty \\times 1 = +\\infty$$` },
          ],
          reponse: `$\\displaystyle\\lim_{x \\to +\\infty} h(x) = +\\infty$.`,
          conseil: `Ne cherche jamais à inventer des règles hybrides comme « le plus haut degré mixte ». Écris explicitement ta factorisation sur ton brouillon. Dès que le terme le plus fort est sorti, le reste du calcul s'écroule tout seul comme un château de cartes — et tu sécurises tous les points du barème.`,
          piege: `Après factorisation par $e^x$, le facteur $\\dfrac{x^2}{e^x}$ apparaît à l'intérieur de la parenthèse. Ne l'évalue pas directement comme $0$ sans justification. Écris explicitement : *« Par croissance comparée, $\\dfrac{e^x}{x^2} \\to +\\infty$, donc par inverse $\\dfrac{x^2}{e^x} \\to 0$. »* Cette justification par l'inverse est attendue par le correcteur.`,
        },
        {
          type: 'figure',
          id: 'fig-m4-3',
          src: '/images/t1/fig_M4_3.png',
          legende: `$h(x)=e^x-x^2\\to+\\infty$ : l'exponentielle l'emporte.`,
          alt: `$h(x)=e^x-x^2\\to+\\infty$ : l'exponentielle l'emporte.`,
        },
        {
          type: 'rule',
          id: 'copie19',
          titre: `La Copie Parfaite`,
          contenu: `Calculons $\\displaystyle\\lim_{x \\to +\\infty} (e^x - x^2)$.

On obtient la forme indéterminée $+\\infty - \\infty$. Pour tout $x \\in \\mathbb{R}$, on factorise par $e^x$ :
$$h(x) = e^x\\!\\left(1 - \\dfrac{x^2}{e^x}\\right)$$

Par croissance comparée (limite de référence ①) : $\\displaystyle\\lim_{x \\to +\\infty} \\dfrac{e^x}{x^2} = +\\infty$, donc par inverse :
$$\\lim_{x \\to +\\infty} \\dfrac{x^2}{e^x} = 0$$

On en déduit :
$$\\lim_{x \\to +\\infty}\\!\\left(1 - \\dfrac{x^2}{e^x}\\right) = 1$$

Comme $\\displaystyle\\lim_{x \\to +\\infty} e^x = +\\infty$, par produit de limites :
$$\\lim_{x \\to +\\infty} h(x) = +\\infty$$

*[Barème type BAC : identification de la FI et choix de la méthode 0,5 pt · factorisation par $e^x$ 1 pt · justification par l'inverse pour $x^2/e^x \\to 0$ 0,5 pt · limite de la parenthèse 0,5 pt · conclusion par produit 0,5 pt — Total : 3 pts]*

---`,
        },
        {
          type: 'exercise',
          id: 'exo20',
          niveau: 'MOYEN',
          enonce: `Soit la fonction $k$ définie sur $]0\\,;\\,+\\infty[$ par $k(x) = x - \\ln x$. En factorisant par le terme dominant, détermine $\\displaystyle\\lim_{x \\to +\\infty} k(x)$.
  *(Réponse : $+\\infty$. En factorisant par $x$, on obtient $x\\!\\left(1 - \\dfrac{\\ln x}{x}\\right)$. Comme $\\dfrac{\\ln x}{x} \\to 0$, la parenthèse tend vers $1$ et le produit donne $+\\infty$. La puissance l'emporte sur le logarithme.)*`,
          etapes: [
          ],
          reponse: ``,
        },
        {
          type: 'exercise',
          id: 'exo21',
          niveau: 'MOYEN',
          enonce: `Calcule $\\displaystyle\\lim_{x \\to +\\infty} x^2 e^{-x}$.
  *(Réponse : $0$. On réécrit $x^2 e^{-x} = \\dfrac{x^2}{e^x}$. Par la limite de référence ①, $\\dfrac{e^x}{x^2} \\to +\\infty$, donc par inverse $\\dfrac{x^2}{e^x} \\to 0$.)*`,
          etapes: [
          ],
          reponse: ``,
        },
        {
          type: 'exercise',
          id: 'exo22',
          niveau: 'MOYEN',
          enonce: `Calcule $\\displaystyle\\lim_{x \\to 0^+} x \\ln x$.
  *(Réponse : $0$. C'est une application directe de la limite de référence ④ avec $n = 1$ : $x^n \\ln x \\to 0$ quand $x \\to 0^+$.)*`,
          etapes: [
          ],
          reponse: ``,
        },
      ],
    },
    {
      id: 's-recap-7',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap23',
          titre: `À retenir`,
          contenu: [
            `La hiérarchie absolue à l'infini est : **Logarithme $\\ll$ Puissance $\\ll$ Exponentielle**.`,
            `📘 Vocabulaire officiel : croissance comparée, l'emporter sur, être négligeable devant, factoriser par le terme dominant, limite de référence.`,
            `La technique reine pour briser l'indétermination mixte est la **factorisation par le terme le plus fort**.`,
            `Ne confonds jamais les bornes : les croissances comparées gèrent les conflits en $\\pm\\infty$ ou en $0^+$, **jamais sur des valeurs finies ordinaires**.`,
            `Le **théorème des gendarmes** est l'arme secrète quand un $\\sin$ ou un $\\cos$ s'invite dans une limite à l'infini.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil24',
          titre: `Fil rouge`,
          contenu: `Tu as maintenant toutes les armes pour dompter les limites les plus sauvages et franchir les murs algébriques à l'infini. Mais dis-moi : graphiquement, que se passe-t-il lorsqu'une courbe traverse un point sans la moindre coupure, d'un seul trait parfait ? C'est une propriété géométrique fondamentale que le correcteur adore analyser. On appelle ça la **continuité** — c'est l'aventure qui t'attend au Module 5.`,
        },
      ],
    },
    {
      id: 's-eval-8',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval25',
          titre: `Auto-évaluation`,
          contenu: [
            `Je connais par cœur la hiérarchie $\\ln x \\ll x^n \\ll e^x$ et les 4 limites de référence du programme.`,
            `J'utilise le vocabulaire officiel (croissance comparée, l'emporter sur, limite de référence) dans chacune de mes rédactions.`,
            `Je sais quelle méthode appliquer immédiatement devant une forme indéterminée mixte.`,
            `J'ai assimilé pourquoi la règle du plus haut degré du Module 2 est impuissante ici et je sais utiliser le théorème des gendarmes.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score26',
          titre: `Ton score`,
          contenu: [
            `🟢 **4/4** → Le classement est limpide, tu as mis tout le monde au pas. File vers le Module 5 !`,
            `🟡 **2 ou 3** → Relis posément la brique 📘, l'histoire de la course sur l'autoroute, puis refais l'Exercice-Type 3 sur ton brouillon sans regarder la solution.`,
            `🔴 **0 ou 1** → Reprends depuis ① Le Besoin : il faut accepter que l'exponentielle joue dans une autre catégorie avant de manipuler les fractions.`,
          ],
        },
      ],
    },
  ],
};
