import { Chapitre } from '../../types/course';

export const chapitreM1: Chapitre = {
  id: 't11-m1',
  titre: `Module 1 — L'équation y' + ay = 0 : la décroissance naturelle`,
  duree: 24,
  niveau: 'BASE',
  xpGain: 25,
  objectifs: [
    `Reconnaître une équation différentielle du premier ordre sans second membre`,
    `Écrire la famille des solutions y(x) = Ce^(-ax) sans hésiter`,
    `Gérer une équation « masquée » αy' + βy = 0 en divisant d'abord`,
    `Déterminer la constante C grâce à la condition initiale`,
    `Prouver ta solution au correcteur par vérification (substitution)`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, on me dit « résous $y' + 3y = 0$ ». Mais $y$ c'est une fonction, pas un nombre. Je cherche quoi, au juste ? Et pourquoi tout le monde me sort une exponentielle de nulle part ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Excellente question, Champion(ne). Tu cherches toutes les fonctions dont la dérivée est proportionnelle à elles-mêmes. Et il n'existe qu'une seule famille de fonctions qui a ce pouvoir magique de se redériver en se ressemblant : les exponentielles. C'est pour ça qu'elles débarquent à chaque fois. On va voir d'où ça sort, tranquillement, et après tu la dégaineras les yeux fermés.`,
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
          contenu: `Imagine une grande bassine d'eau posée dans la cour à Yopougon, avec un petit trou percé au fond. Quand la bassine est pleine, la pression est forte : l'eau gicle vite. Mais à mesure que le niveau baisse, la pression faiblit et l'eau s'écoule de plus en plus lentement. La vitesse à laquelle l'eau part dépend directement de la quantité d'eau encore présente.

Plus il y a d'eau, plus ça coule vite ; moins il y a d'eau, plus ça ralentit. La bassine ne se vide donc pas d'un coup régulier : elle décroît vite au début, puis de plus en plus doucement, en se rapprochant tranquillement du fond. C'est exactement le comportement d'une grandeur dont la vitesse de chute est proportionnelle à ce qui reste : une **décroissance naturelle**.`,
        },
        {
          type: 'figure',
          id: 'fig-m1-1',
          src: '/images/t11/fig_M1_1.png',
          legende: `Toutes ces courbes sont solutions de la même équation : elles ne diffèrent que par leur point de départ $C$. C'est la famille des solutions.`,
          alt: `Plusieurs courbes de décroissance exponentielle y = Ce^(-x) pour différentes valeurs de C, toutes décroissantes vers l'axe horizontal.`,
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
          contenu: `On traduit la bassine en langage mathématique, brique par brique.

- La quantité d'eau à l'instant $x$ → la fonction inconnue $y(x)$
- La vitesse à laquelle l'eau part → la dérivée $y'(x)$
- « la vitesse de chute est proportionnelle à ce qui reste » → $y' = -a\\,y$
- Le coefficient de fuite (la taille du trou) → le réel $a > 0$
- Le niveau de départ dans la bassine → la condition initiale $y(0)$`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène de la bassine`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`La quantité d'eau restante`, `$y(x)$`, `La fonction inconnue`],
            [`La vitesse d'écoulement`, `$y'(x)$`, `La dérivée de $y$`],
            [`« proportionnelle à ce qui reste »`, `$y' = -a\\,y$`, `L'équation différentielle`],
            [`La taille du trou`, `$a > 0$`, `Le coefficient de décroissance`],
            [`Le niveau de départ`, `$y(0) = y_0$`, `La condition initiale`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `Maintenant que chaque morceau a son symbole, on peut écrire la définition rigoureuse.`,
        },
      ],
    },
    {
      id: 's-bac',
      titre: `📘 LANGAGE OFFICIEL DU BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b6',
          contenu: `Champion(ne), tu as l'image de la bassine. Ta copie, elle, doit parler la langue exacte du BAC.

**Définition formelle.** Soit $a$ un nombre réel. L'équation différentielle $(E) : y' + ay = 0$ est une **équation du premier ordre, linéaire, à coefficients constants et sans second membre** (on dit aussi **homogène**). Ses solutions sur $\\mathbb{R}$ sont les fonctions $y$ définies par $y(x) = Ce^{-ax}$, où $C$ est un nombre réel quelconque.

**En langage courant.** Une équation qui relie une fonction à sa dérivée, sans rien d'autre derrière le signe égal ; sa solution est toujours une exponentielle multipliée par une constante libre.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Équation homogène (ou sans second membre)** — le membre de droite vaut $0$.
- **Premier ordre** — l'équation ne contient que $y$ et $y'$ (pas de $y''$).
- **Solution générale** — la famille $y(x) = Ce^{-ax}$, avec $C \\in \\mathbb{R}$.
- **Condition initiale** — la donnée $y(x_0) = y_0$ qui fixe la valeur de $C$.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `La phrase exacte que le correcteur attend : « Les solutions de $(E) : y' + ay = 0$ sont les fonctions $y(x) = Ce^{-ax}$, $C \\in \\mathbb{R}$. »`,
        },
      ],
    },
    {
      id: 's4',
      titre: `④ LA RÈGLE`,
      blocs: [
        {
          type: 'rule',
          id: 'rule9',
          titre: `Règle d'Or — Solution de l'équation homogène du premier ordre`,
          contenu: `$$\\boxed{\\,y' + ay = 0 \\quad \\Longleftrightarrow \\quad y(x) = Ce^{-ax}, \\ C \\in \\mathbb{R}\\,}$$

D'où vient cette formule ? Suis le cheminement de l'eau. Si $y' = -ay$, on peut écrire $\\dfrac{y'}{y} = -a$. On reconnaît à gauche la dérivée de $\\ln|y|$, donc $\\left(\\ln|y|\\right)' = -a$. En prenant la primitive des deux côtés : $\\ln|y| = -ax + k$. On libère $y$ avec l'exponentielle : $|y| = e^{k}\\,e^{-ax}$. Comme $e^k$ est un simple nombre constant (qu'on ajuste avec le signe), on le rebaptise $C$. Et voilà : $y = Ce^{-ax}$.`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Le signe de $a$ se retrouve **changé** dans l'exposant. Pour $y' + 3y = 0$, on a $a = 3$ et la solution est $Ce^{-3x}$. Écris toujours « $a = \\dots$ » au brouillon avant de poser la solution.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Ne confonds pas les signes. $y' + 3y = 0$ donne $e^{-3x}$ (l'exposant est négatif), tandis que $y' - 3y = 0$ donne $e^{+3x}$. Une erreur de signe ici, et toute la suite est faussée.`,
        },
      ],
    },
    {
      id: 's5',
      titre: `⑤ LA DESCENTE`,
      blocs: [
        {
          type: 'text',
          id: 'b12',
          titre: `Le Diagnostic`,
          contenu: `Dès que tu vois « résoudre l'équation différentielle » avec une équation de la forme $y' + ay = 0$ (rien derrière le signe égal), tu dégaines la formule $Ce^{-ax}$. L'objectif est double : d'abord la famille de solutions (avec $C$), puis LA solution unique imposée par la condition initiale.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Si l'énoncé te donne...`, `Alors ton action est...`],
          rows: [
            [`Une équation pure $y' + ay = 0$`, `Appliquer directement $y(x) = Ce^{-ax}$.`],
            [`Une équation masquée $\\alpha y' + \\beta y = 0$`, `Diviser toute l'équation par $\\alpha$ pour isoler $y'$ d'abord.`],
            [`Une condition initiale $y(x_0) = y_0$`, `Remplacer $x$ par $x_0$ et $y$ par $y_0$ pour calculer $C$.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure en 3 étapes`,
          contenu: `**Étape 1 — Isoler $y'$.** Assure-toi que la dérivée $y'$ n'a aucun coefficient devant elle. Sinon, divise toute l'équation par ce coefficient.

**Étape 2 — Écrire la solution générale.** Identifie $a$, puis pose $y(x) = Ce^{-ax}$ en précisant $C \\in \\mathbb{R}$.

**Étape 3 — Exploiter la condition initiale.** Utilise $y(x_0) = y_0$ pour calculer la valeur numérique de $C$.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `C'est ton assurance le jour de l'examen. Tu dérives la fonction trouvée, tu remplaces $y$ et $y'$ dans l'équation de départ, et le résultat doit faire $0$. Si oui, les points sont dans la poche.`,
        },
        {
          type: 'figure',
          id: 'fig-m1-2',
          src: '/images/t11/fig_M1_2.png',
          legende: `La famille contient une infinité de courbes ; la condition initiale $f(0) = 7$ en désigne une seule, en bleu.`,
          alt: `Une famille de courbes y = Ce^(-x) en pointillés, et la courbe C = 7 en bleu épais passant par le point (0 ; 7).`,
        },
      ],
    },
    {
      id: 's-exo',
      titre: `🎯 EXERCICES-TYPES`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-carte',
          titre: `Carte des situations`,
          headers: [`Niveau`, `Situation`, `Comment la reconnaître`, `Exercice-Type`],
          rows: [
            [`🟢 BASE`, `Équation pure $y' + ay = 0$`, `« Résous sur $\\mathbb{R}$ l'équation $(E)$ »`, `Type 1`],
            [`🟡 MOYEN`, `Équation + condition initiale`, `« Détermine la solution telle que $f(x_0) = y_0$ »`, `Type 1`],
            [`🔴 BAC`, `Équation masquée $\\alpha y' + \\beta y = 0$`, `Un coefficient traîne devant $y'$`, `Type 2`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Résoudre puis fixer la constante** *(BASE / MOYEN)*. Soit $(E) : y' + 5y = 0$ sur $\\mathbb{R}$. **1.** Donne la forme générale des solutions de $(E)$. **2.** Détermine la solution $f$ vérifiant $f(0) = 7$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Équation homogène pure : on applique $Ce^{-ax}$ avec $a = 5$, puis on exploite la condition initiale.` },
            { name: `Étape 1`, contenu: `$(E)$ est de la forme $y' + ay = 0$ avec $a = 5$. Les solutions sont $y(x) = Ce^{-5x}$.` },
            { name: `Étape 2`, contenu: `On évalue en $0$ : $f(0) = Ce^{0} = C$. Comme $f(0) = 7$, on a $C = 7$.` },
          ],
          reponse: `Les solutions de $(E)$ sont $y(x) = Ce^{-5x}$, $C \\in \\mathbb{R}$. La solution cherchée est $f(x) = 7e^{-5x}$.`,
          conseil: `Écris « $a = 5$ » au brouillon avant tout : c'est le réflexe qui t'évite l'erreur de signe dans l'exposant.`,
          piege: `$e^{-5\\times 0} = e^0 = 1$, pas $0$. En une condition initiale en $x = 0$, l'exponentielle vaut toujours $1$ : la constante $C$ se lit alors directement.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `L'équation $(E) : y' + 5y = 0$ est de la forme $y' + ay = 0$ avec $a = 5$.
Les solutions de $(E)$ sur $\\mathbb{R}$ sont les fonctions :
$$y(x) = Ce^{-5x}, \\quad C \\in \\mathbb{R}.$$
On cherche $f$ telle que $f(0) = 7$. Or $f(0) = Ce^{-5\\times 0} = Ce^{0} = C$.
Donc $C = 7$, et la solution cherchée est :
$$f(x) = 7e^{-5x}.$$

*[Barème type BAC : forme générale = 1 pt — exploitation de $f(0)$ = 1 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 2 — Équation masquée et vérification** *(BAC)*. Résous $(E') : 3y' - y = 0$ et détermine la fonction $g$ telle que $g(3) = e$. Vérifie ton résultat.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Un coefficient $3$ traîne devant $y'$ : il faut d'abord diviser toute l'équation pour isoler $y'$, puis identifier $a$ (attention au signe), trouver $C$, et vérifier.` },
            { name: `Étape 1`, contenu: `On divise par $3$ : $y' - \\dfrac{1}{3}y = 0$, soit la forme $y' + ay = 0$ avec $a = -\\dfrac{1}{3}$.` },
            { name: `Étape 2`, contenu: `La solution générale est $g(x) = Ce^{\\frac{1}{3}x}$. Condition $g(3) = e$ : $Ce^{\\frac{1}{3}\\times 3} = Ce^1 = Ce = e$, donc $C = 1$.` },
          ],
          reponse: `$g(x) = e^{\\frac{1}{3}x}$. Vérification : $g'(x) = \\dfrac{1}{3}e^{\\frac{1}{3}x}$, donc $3g'(x) - g(x) = e^{\\frac{1}{3}x} - e^{\\frac{1}{3}x} = 0$. ✓`,
          conseil: `Tant que $y'$ n'est pas seul, ne lis pas $a$ : tu lirais une fausse valeur. Diviser d'abord, identifier ensuite.`,
          piege: `Ici $a = -\\dfrac{1}{3}$ : l'exposant devient $-a x = +\\dfrac{1}{3}x$. La fonction **croît**, ce qui est normal puisque l'équation cachait un $y' = \\dfrac{1}{3}y$.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `On isole $y'$ en divisant $(E')$ par $3$ :
$$3y' - y = 0 \\;\\Longleftrightarrow\\; y' - \\tfrac{1}{3}y = 0.$$
C'est la forme $y' + ay = 0$ avec $a = -\\tfrac{1}{3}$. Les solutions sont :
$$g(x) = Ce^{\\frac{1}{3}x}, \\quad C \\in \\mathbb{R}.$$
Condition $g(3) = e$ : $\\ Ce^{\\frac{1}{3}\\times 3} = Ce = e$, d'où $C = 1$. Donc :
$$g(x) = e^{\\frac{1}{3}x}.$$
**Vérification.** $g'(x) = \\tfrac{1}{3}e^{\\frac{1}{3}x}$, donc $3g'(x) - g(x) = 3\\times\\tfrac{1}{3}e^{\\frac{1}{3}x} - e^{\\frac{1}{3}x} = e^{\\frac{1}{3}x} - e^{\\frac{1}{3}x} = 0.$ ✓

*[Barème type BAC : division = 1 pt — solution générale = 1 pt — constante $C$ = 0,5 pt — vérification = 0,5 pt — Total : 3 pts]*`,
        },
        {
          type: 'figure',
          id: 'fig-m1-3',
          src: '/images/t11/fig_M1_3.png',
          legende: `La solution décroît et se rapproche de zéro sans jamais l'atteindre : la droite $y = 0$ est asymptote horizontale. C'est la bassine qui se vide.`,
          alt: `La courbe y = 5e^(-x) décroissante depuis le point (0 ; 5), avec l'axe y = 0 en asymptote horizontale.`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-a',
          pf: `Donc si un coefficient traîne devant $y'$, je dois diviser tout par lui avant même de lire $a$ ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-b',
          gf: `Exactement, Champion(ne) ! C'est le geste qui sauve. Tant que $y'$ n'est pas tout seul et tout propre, le $a$ que tu crois voir est un piège. Tu divises, tu nettoies, et là seulement tu lis la bonne valeur. Limpide comme l'eau de roche.`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Identifie $a$ proprement, n'oublie jamais $C$. Réponses finales seulement.

- **Exercice 1.** Résous $y' + 2y = 0$. *(Réponse : $y(x) = Ce^{-2x}$, $C \\in \\mathbb{R}$.)*
- **Exercice 2.** Donne la solution de $y' - 4y = 0$ telle que $f(0) = 3$. *(Réponse : $f(x) = 3e^{4x}$.)*
- **Exercice 3.** Résous $2y' + 6y = 0$. *(Réponse : on divise par $2$ : $y' + 3y = 0$, donc $y(x) = Ce^{-3x}$.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m1',
          titre: `À retenir`,
          contenu: [
            `Une équation $y' + ay = 0$ traduit une **décroissance (ou croissance) naturelle** ; sa solution est toujours $Ce^{-ax}$.`,
            `📘 Vocabulaire officiel : équation homogène, premier ordre, solution générale, condition initiale.`,
            `Le geste clé : **isoler $y'$** (diviser si besoin) AVANT de lire $a$.`,
            `La condition initiale $y(x_0) = y_0$ transforme la famille en une **solution unique**.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m1',
          titre: `Fil rouge`,
          contenu: `Ta bassine se vide jusqu'au fond, vers $0$. Mais que se passe-t-il si, pendant qu'elle se vide, un robinet la réalimente avec un débit constant ? Le niveau ne tombera plus à zéro : il se stabilisera. C'est l'arrivée du **second membre** $b$, et le sujet du Module 2.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m1',
          titre: `Auto-évaluation — Module 1`,
          contenu: [
            `Je reconnais une équation homogène du premier ordre $y' + ay = 0$.`,
            `J'emploie le vocabulaire officiel : équation homogène, solution générale, condition initiale.`,
            `Je sais diviser une équation masquée pour isoler $y'$ avant de lire $a$.`,
            `Je n'oublie jamais la constante $C$, et je sais la calculer avec la condition initiale.`,
            `Je vérifie ma solution en la dérivant et en l'injectant dans l'équation.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m1',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Direction le Module 2, on ouvre le robinet.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et la procédure en 3 étapes.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel, l'image de la bassine percée.`,
          ],
        },
      ],
    },
  ],
};
