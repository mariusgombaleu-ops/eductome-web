import { Chapitre } from '../../types/course';

export const chapitreM1: Chapitre = {
  id: 't4-m1',
  titre: `Module 1 — Généralités sur les Suites`,
  duree: 25,
  niveau: 'BASE',
  xpGain: 25,
  objectifs: [
    `Reconnaître une suite, calculer ses premiers termes et lire son mode de définition`,
    `Étudier le sens de variation (monotonie) d'une suite avec la bonne méthode`,
    `Énoncer qu'une suite est majorée, minorée ou bornée avec le vocabulaire officiel attendu au BAC`,
    `Démontrer qu'une suite converge grâce au théorème de convergence monotone`,
    `Déterminer la limite d'une suite et conclure proprement sur sa copie`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, avec notre promotion de Terminale D, on a décidé de cotiser 2 500 F CFA chacun chaque mois dans une caisse commune. Le délégué dit que si on continue, notre argent va dépasser tout l'argent de la Banque Centrale. Franchement, peut-on vraiment prévoir où va une suite à long terme, ou bien c'est juste du hasard ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Pose ton cahier, Champion(ne). Ta question touche le cœur de l'analyse séquentielle. Si vous cotisez sans jamais rien dépenser, la somme grandit sans limite vers l'infini. Mais imagine que la banque prélève chaque mois des frais proportionnels : est-ce que le trésor va exploser, ou se stabiliser autour d'une valeur d'équilibre ? On veut savoir à l'avance si un phénomène va saturer, s'éteindre ou s'envoler — sans calculer les termes jusqu'au jour du jugement dernier. C'est tout l'intérêt d'étudier la monotonie et les bornes d'une suite.`,
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
          contenu: `Imagine-toi un samedi matin de soleil de plomb devant le grand guichet de la LONACI à Adjamé. Les parieurs arrivent un par un, s'alignent patiemment, et la file d'attente s'allonge au rythme des minutes.

Cependant, l'espace physique sous l'auvent est strictement délimité : les agents de sécurité bloquent l'accès dès que le comptage de la cour atteint **cinq cents personnes**. Comme la queue s'agrandit sans cesse mais se heurte à cette barrière infranchissable, la cohue finit inévitablement par se stabiliser au bout de la matinée.

On le sait d'avance, sans connaître l'heure exacte ni le choix des parieurs : le système va saturer et tendre vers un état d'équilibre parfaitement immobile. *Une file qui monte toujours mais qui reste bloquée sous un plafond n'a pas d'autre choix que de s'accumuler contre une valeur limite.*`,
        },
        {
          type: 'figure',
          id: 'fig-m1-1',
          src: '/images/t4/fig_M1_1.png',
          legende: `La file monte toujours mais reste sous le plafond : elle s'accumule contre une limite.`,
          alt: `La file monte toujours mais reste sous le plafond : elle s'accumule contre une limite.`,
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
          contenu: `Mettons de l'ordre dans cette bousculade d'Adjamé pour construire nos outils de Terminale D.

- **L'écoulement du temps** → l'indice entier $n$ — chaque étape, un contrôle.
- **Le nombre de personnes à l'étape $n$** → le terme général $u_n$.
- **La file qui s'allonge** → $u_{n+1} \\geq u_n$ : la suite est croissante.
- **La barrière des 500** → $u_n \\leq 500$ : la suite est majorée.`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène d'Adjamé`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`L'étape de comptage`, `$n \\in \\mathbb{N}$`, `L'indice entier qui avance pas à pas.`],
            [`Le nombre de personnes`, `$u_n$`, `Le terme général de la suite.`],
            [`La file qui grossit`, `$u_{n+1} \\geq u_n$`, `La suite est croissante.`],
            [`Le plafond des 500`, `$u_n \\leq 500$`, `La suite est majorée par $M = 500$.`],
            [`La stabilisation finale`, `$\\displaystyle\\lim_{n\\to+\\infty} u_n = \\ell$`, `La suite converge vers la limite $\\ell$.`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `Cette stabilisation forcée porte un nom de théorème. Habillons-la dans le langage du BAC.`,
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
          contenu: `Champion(ne), tu as l'image de la file qui sature. La copie attend maintenant les mots exacts.

**Définition formelle.** Soit $(u_n)$ une suite réelle. On dit que $(u_n)$ est **majorée** s'il existe un réel $M$ tel que $\\forall n \\in \\mathbb{N},\\ u_n \\leq M$ ; **minorée** s'il existe un réel $m$ tel que $\\forall n \\in \\mathbb{N},\\ u_n \\geq m$ ; **bornée** si elle est à la fois majorée et minorée. Elle est **croissante** si $\\forall n,\\ u_{n+1} \\geq u_n$, **décroissante** si $\\forall n,\\ u_{n+1} \\leq u_n$, et **monotone** si elle garde le même sens de variation.

**En langage courant.** Majorée = bloquée par un plafond ; minorée = posée sur un plancher ; monotone = qui va toujours dans le même sens.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Majorée / minorée / bornée** — l'existence d'un plafond $M$, d'un plancher $m$, ou des deux.
- **Croissante / décroissante / monotone** — le sens de variation, à justifier par le signe de $u_{n+1}-u_n$.
- **Convergente** — qui admet une limite finie $\\ell$ quand $n \\to +\\infty$.
- **Divergente** — qui n'a pas de limite finie (limite infinie ou pas de limite).`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend la phrase modèle : *« La suite $(u_n)$ est croissante et majorée par $M$, donc elle converge. »* Sans la double condition énoncée, le théorème ne s'applique pas.`,
        },
        {
          type: 'figure',
          id: 'fig-m1-2',
          src: '/images/t4/fig_M1_2.png',
          legende: `Monotone + bornée du bon côté = convergence garantie.`,
          alt: `Monotone + bornée du bon côté = convergence garantie.`,
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
          titre: `Règle d'Or — Le Théorème de Convergence Monotone`,
          contenu: `Soit $(u_n)$ une suite réelle.
$$\\text{Toute suite croissante et majorée converge vers une limite finie } \\ell.$$
$$\\text{Toute suite décroissante et minorée converge vers une limite finie } \\ell.$$`,
        },
        {
          type: 'text',
          id: 'b10',
          contenu: `**Cas non borné.** Une suite croissante **et non majorée** a pour limite $+\\infty$. Une suite décroissante et non minorée a pour limite $-\\infty$.

**Limite d'une suite composée.** Si $\\displaystyle\\lim_{n\\to+\\infty} u_n = a$ et si $f$ est continue en $a$, alors $\\displaystyle\\lim_{n\\to+\\infty} f(u_n) = f(a)$.`,
        },
        {
          type: 'tip',
          id: 'tip11',
          titre: `Conseil du Grand Frère`,
          contenu: `Retiens bien ceci, Champion(ne) : ce théorème prouve **l'existence** de la limite, mais ne te donne pas sa valeur. Pour la valeur, il faudra un autre outil (point fixe au Module 4, ou calcul direct).`,
        },
        {
          type: 'warning',
          id: 'warn12',
          titre: `Piège à éviter`,
          contenu: `« Croissante » seule ne suffit jamais à conclure la convergence : sans le plafond (majorée), la suite peut filer vers $+\\infty$. Énonce toujours les **deux** conditions.`,
        },
      ],
    },
    {
      id: 's5',
      titre: `⑤ LA DESCENTE`,
      blocs: [
        {
          type: 'text',
          id: 'b13',
          titre: `Le Diagnostic`,
          contenu: `On te demande la nature d'une suite. Cherche les mots-clés : « sens de variation » → étudie $u_{n+1} - u_n$ ; « montrer qu'elle est majorée/minorée » → récurrence ou encadrement ; « en déduire qu'elle converge » → théorème de convergence monotone.`,
        },
        {
          type: 'table',
          id: 'tbl14',
          titre: `L'Arbre de décision`,
          headers: [`Si tu vois…`, `Ce que tu fais`],
          rows: [
            [`« Sens de variation »`, `Calcule $u_{n+1}-u_n$ et étudie son signe (Outil 2 du Socle).`],
            [`Termes tous strictement positifs`, `Tu peux comparer $\\dfrac{u_{n+1}}{u_n}$ à $1$.`],
            [`« Montrer que $u_n \\leq M$ »`, `Raisonnement par récurrence (Outil 3 du Socle).`],
            [`Croissante + majorée (ou décroiss. + minorée)`, `Conclure : la suite converge (Théorème).`],
            [`Limite à calculer`, `Utilise la règle du terme dominant ou le point fixe (M4).`],
          ],
        },
        {
          type: 'text',
          id: 'b15',
          titre: `La Procédure (étudier et conclure)`,
          contenu: `**Étape 1.** Calcule $u_{n+1} - u_n$, factorise, et lis son signe → sens de variation.

**Étape 2.** Montre l'existence d'un plafond ou d'un plancher (souvent par récurrence).

**Étape 3.** Applique le théorème : « croissante et majorée donc convergente », ou « décroissante et minorée donc convergente ».

**Étape 4.** Conclus par une phrase complète sur la convergence.`,
        },
        {
          type: 'tip',
          id: 'tip16',
          titre: `La Vérification`,
          contenu: `- **Cohérence sens / borne** : une suite croissante converge vers sa borne **supérieure** ; décroissante, vers sa borne **inférieure**.
- **Calcule deux ou trois termes** à la main pour confirmer le sens annoncé.`,
        },
        {
          type: 'text',
          id: 'b-code',
          titre: `💻 Le Coin du Code — Calculer les premiers termes d'une suite`,
          contenu: `Au BAC, avant de conjecturer le sens de variation ou la limite, on calcule souvent $u_0, u_1, u_2, \\ldots$ Voici comment une machine le fait sans se tromper, pour une suite définie par $u_{n+1} = f(u_n)$.

\`\`\`python
def premiers_termes(u0, f, N):
    # u0 : premier terme ; f : fonction de recurrence ; N : nombre d'etapes
    u = u0
    termes = [u0]
    for n in range(N):
        u = f(u)          # on passe de u_n a u_(n+1)
        termes.append(u)
    return termes

# Exemple : u_(n+1) = 0.5*u_n + 1, avec u_0 = 6
print(premiers_termes(6, lambda x: 0.5*x + 1, 4))
# -> [6, 4.0, 3.0, 2.5, 2.25]  : la suite descend et se stabilise vers 2
\`\`\`

💬 **Le message du Grand Frère.** Regarde la liste : $6, 4, 3, 2.5, 2.25\\ldots$ Les termes descendent et se rapprochent de $2$. La machine ne « devine » rien : elle applique la relation pas à pas, exactement comme toi sur ton brouillon. C'est ça, une suite récurrente — chaque terme se construit à partir du précédent.`,
        },
        {
          type: 'figure',
          id: 'fig-m1-3',
          src: '/images/t4/fig_M1_3.png',
          legende: `Croissante et majorée : la suite vient se coller à sa limite $\\ell$ par le bas.`,
          alt: `Croissante et majorée : la suite vient se coller à sa limite $\\ell$ par le bas.`,
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
            [`🟢 BASE`, `Sens de variation par soustraction`, `Suite donnée par une formule explicite`, `Maintenant à toi`],
            [`🟡 MOYEN`, `Variation par quotient (termes positifs)`, `Suite à termes strictement positifs`, `Type 2`],
            [`🔴 BAC`, `Encadrement + convergence monotone`, `« Montrer que… puis en déduire que la suite converge »`, `Type 1`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 1 — Suite croissante et majorée.** Soit $(u_n)$ définie par $u_0 = 3$ et, pour tout $n \\in \\mathbb{N}$, $u_{n+1} = \\sqrt{2 + u_n}$. (1) Démontrer par récurrence que $1 \\leq u_n \\leq 3$ pour tout $n \\in \\mathbb{N}$. (2) Étudier le sens de variation. (3) En déduire que $(u_n)$ converge.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Suite récurrente avec racine. On encadre par récurrence, on étudie la monotonie par le signe, puis on conclut par convergence monotone.` },
            { name: `Étape 1 — Encadrement`, contenu: `Montrons $1 \\leq u_n \\leq 3$. Initialisation : $u_0 = 3$, donc $1 \\leq 3 \\leq 3$. Hérédité : supposons $1 \\leq u_n \\leq 3$. Alors $3 \\leq 2 + u_n \\leq 5$, donc $\\sqrt{3} \\leq u_{n+1} \\leq \\sqrt{5}$, soit $1 \\leq u_{n+1} \\leq 3$ (car $1 \\leq \\sqrt{3}$ et $\\sqrt{5} \\leq 3$). La propriété est héréditaire.` },
            { name: `Étape 2 — Sens de variation`, contenu: `$u_{n+1} - u_n = \\sqrt{2+u_n} - u_n$ est du signe de $2 + u_n - u_n^2 = -(u_n-2)(u_n+1)$. Sur $[1\\ ;\\ 3]$, ce trinôme est négatif dès que $u_n > 2$. Avec $u_0 = 3 > 2$, la suite est **décroissante** et minorée par $1$.` },
            { name: `Étape 3 — Conclusion`, contenu: `$(u_n)$ est décroissante et minorée par $1$, donc d'après le théorème de convergence monotone, elle **converge** vers une limite finie $\\ell \\geq 1$.` },
          ],
          reponse: `(1) $1 \\leq u_n \\leq 3$ par récurrence. (2) $(u_n)$ est décroissante (car $u_0 = 3 > 2$). (3) Décroissante et minorée par $1$, donc $(u_n)$ converge vers $\\ell \\geq 1$.`,
          conseil: `« En déduire que la suite converge » est un signal : le correcteur veut le théorème de convergence monotone, avec ses deux conditions énoncées.`,
          piege: `Trouver une borne ne suffit pas : il faut **aussi** le sens de variation. Les deux ensemble, jamais l'un sans l'autre.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Montrons par récurrence que $1 \\leq u_n \\leq 3$. Pour $n=0$ : $u_0 = 3 \\in [1\\ ;\\ 3]$. Supposons $1 \\leq u_n \\leq 3$ ; alors $3 \\leq 2+u_n \\leq 5$ puis, la fonction racine étant croissante, $1 \\leq \\sqrt{2+u_n} \\leq 3$, c'est-à-dire $1 \\leq u_{n+1} \\leq 3$. La propriété est vraie pour tout $n \\in \\mathbb{N}$. Par ailleurs $u_{n+1}-u_n = \\sqrt{2+u_n}-u_n$ est du signe de $-(u_n-2)(u_n+1)$, négatif sur $[2\\ ;\\ 3]$ : la suite est décroissante. Décroissante et minorée par $1$, $(u_n)$ converge vers un réel $\\ell \\geq 1$.

*[Barème : récurrence d'encadrement : 2 pts · sens de variation : 1,5 pt · conclusion (théorème) : 1,5 pt — Total : 5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Sens de variation par le quotient.** Soit $(u_n)$ définie pour $n \\in \\mathbb{N}$ par $u_n = \\dfrac{2^n}{n+1}$. Étudier son sens de variation.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Tous les termes sont strictement positifs → méthode du quotient $\\dfrac{u_{n+1}}{u_n}$.` },
            { name: `Étape 1`, contenu: `$\\dfrac{u_{n+1}}{u_n} = \\dfrac{2^{n+1}}{n+2} \\times \\dfrac{n+1}{2^n} = \\dfrac{2(n+1)}{n+2}$.` },
            { name: `Étape 2`, contenu: `$\\dfrac{2(n+1)}{n+2} \\geq 1 \\iff 2(n+1) \\geq n+2 \\iff n \\geq 0$, toujours vrai. Donc $\\dfrac{u_{n+1}}{u_n} \\geq 1$.` },
          ],
          reponse: `La suite $(u_n)$ est **croissante**.`,
          conseil: `Le quotient est idéal quand la suite mélange une puissance $2^n$ et un polynôme : la simplification est immédiate.`,
          piege: `N'utilise le quotient que si les termes sont strictement positifs. Vérifie-le et écris-le sur ta copie.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Pour tout $n \\in \\mathbb{N}$, $u_n = \\dfrac{2^n}{n+1} > 0$. On compare le quotient à $1$ : $\\dfrac{u_{n+1}}{u_n} = \\dfrac{2(n+1)}{n+2}$. Or $2(n+1)-(n+2) = n \\geq 0$, donc $\\dfrac{u_{n+1}}{u_n} \\geq 1$. La suite $(u_n)$ est croissante.

*[Barème : positivité + mise en place du quotient : 1,5 pt · simplification : 1,5 pt · conclusion : 1 pt — Total : 4 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Repère la méthode avant de calculer. Réponses finales seulement.

- **Exercice 1.** $u_n = n^2 - 3n$. Étudie le sens de variation pour $n \\geq 2$. *(Réponse : $u_{n+1}-u_n = 2n-2 \\geq 0$ pour $n \\geq 1$ : croissante.)*
- **Exercice 2.** $u_n = \\dfrac{n}{n+1}$. La suite est-elle majorée ? Converge-t-elle ? *(Réponse : $u_n < 1$ pour tout $n$, croissante et majorée par $1$ : converge vers $1$.)*
- **Exercice 3.** $u_n = (-1)^n$. La suite converge-t-elle ? *(Réponse : non, elle oscille entre $-1$ et $1$ : divergente.)*`,
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
            `Le sens de variation se lit sur le signe de $u_{n+1}-u_n$ (ou le quotient si termes $> 0$).`,
            `📘 Vocabulaire officiel : majorée, minorée, bornée, monotone, convergente, divergente.`,
            `Théorème de convergence monotone : croissante + majorée (ou décroissante + minorée) ⟹ converge.`,
            `Le théorème donne l'existence de $\\ell$, pas sa valeur.`,
            `Une suite croissante converge vers sa borne supérieure ; décroissante, vers sa borne inférieure.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m1',
          titre: `Fil rouge`,
          contenu: `Tu sais maintenant décrire et encadrer **n'importe quelle** suite. Mais certaines suites ont une structure très particulière : elles avancent en ajoutant toujours le même montant, comme la tontine d'Abobo où chaque maman verse la même somme chaque mois. Comment calculer directement le $1000^e$ terme sans faire mille additions ? C'est tout le sujet du **Module 2** : les suites arithmétiques.`,
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
            `Je sais étudier le sens de variation d'une suite par la soustraction ou le quotient.`,
            `J'emploie le vocabulaire officiel (majorée, minorée, bornée, monotone, convergente).`,
            `Je sais démontrer un encadrement par récurrence.`,
            `Je sais énoncer et appliquer le théorème de convergence monotone avec ses deux conditions.`,
            `Je conclus toujours la convergence par une phrase complète.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m1',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Bases solides. Direction Module 2.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 1.`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : la file d'Adjamé qui sature sous son plafond.`,
          ],
        },
      ],
    },
  ],
};
