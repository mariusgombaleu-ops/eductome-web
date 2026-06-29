import { Chapitre } from '../../types/course';

export const chapitreM5: Chapitre = {
  id: 't4-m5',
  titre: `Module 5 — Récurrence et Comportements à l'Infini`,
  duree: 30,
  niveau: 'BAC',
  xpGain: 30,
  objectifs: [
    `Rédiger une démonstration par récurrence complète et notée maximum`,
    `Énoncer le principe de récurrence avec le vocabulaire officiel attendu au BAC`,
    `Démontrer une formule conjecturée (égalité, inégalité, encadrement)`,
    `Reconnaître une course de croissances comparées entre $n$ et $q^n$`,
    `Lever une indétermination de limite par croissance comparée`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, dans un exercice, j'ai observé sur les premiers termes que $u_n = 2^n - 1$. Ça marche pour $u_0$, $u_1$, $u_2$… Mais le prof a écrit en rouge « observer ne suffit pas, démontre ! ». Comment je prouve quelque chose pour TOUS les $n$, alors que je ne peux pas tester l'infini ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Tu touches le cœur des mathématiques, Champion(ne) ! Tester trois cas, c'est de l'observation, pas une preuve. L'arme qui démontre une propriété pour **tous** les entiers d'un seul coup, c'est le raisonnement par récurrence — l'effet domino. Et une fois la formule prouvée, on regardera qui gagne la course à l'infini entre $n$ et $2^n$. Deux outils, une seule séance. Faut pas gnan.`,
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
          contenu: `Imagine une longue rangée de dominos dressés, alignés depuis le terrain de Yopougon jusqu'au bout de la rue. Tu veux être certain qu'ils tomberont **tous**, sans avoir à les pousser un par un.

Deux conditions suffisent. D'abord, tu pousses le **premier** domino : il tombe — c'est l'initialisation. Ensuite, tu t'assures que chaque domino est assez proche du suivant pour que, **s'il tombe, il fasse tomber le suivant** — c'est l'hérédité. Si ces deux conditions sont réunies, alors, sans rien faire de plus, toute la rangée s'écroule jusqu'au dernier.

C'est exactement le raisonnement par récurrence : *prouve que c'est vrai au départ, prouve que « vrai à une étape » entraîne « vrai à l'étape suivante », et la propriété devient vraie pour tous les entiers à la fois.*

Et quand on regarde une suite filer vers l'infini, c'est une autre image : une course entre deux coureurs, $n$ qui avance d'un pas régulier, et $2^n$ qui double sa foulée à chaque pas. Sur le long terme, le doubleur écrase toujours le marcheur régulier.`,
        },
        {
          type: 'figure',
          id: 'fig-m5-1',
          src: '/images/t4/fig_M5_1.png',
          legende: `Premier qui tombe + chaque chute en entraîne une autre = toute la rangée s'écroule.`,
          alt: `Premier qui tombe + chaque chute en entraîne une autre = toute la rangée s'écroule.`,
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
          contenu: `Traduisons les dominos en langage de Terminale D.

- **Pousser le premier domino** → vérifier la propriété au rang initial : initialisation.
- **« S'il tombe, le suivant tombe »** → supposer vrai au rang $n$, prouver au rang $n+1$ : hérédité.
- **Toute la rangée s'écroule** → la propriété est vraie pour tout entier $n$ : conclusion.`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène des dominos`, `Étape de la preuve`, `Ce que tu écris`],
          rows: [
            [`Pousser le premier domino`, `Initialisation`, `« Pour $n = n_0$, la propriété est vraie. »`],
            [`Le lien entre deux dominos`, `Hypothèse de récurrence`, `« Supposons $P(n)$ vraie à un rang $n$ fixé. »`],
            [`La chute se propage`, `Hérédité`, `« Montrons $P(n+1)$. » puis les calculs.`],
            [`Toute la rangée tombe`, `Conclusion`, `« Par récurrence, vraie pour tout $n$. »`],
          ],
        },
      ],
    },
    {
      id: 's-bac',
      titre: `📘 LANGAGE OFFICIEL DU BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b5',
          contenu: `Champion(ne), l'image des dominos est posée. La copie attend la formulation rigoureuse.

**Définition formelle.** Soit $P(n)$ une propriété dépendant de l'entier $n$. Si **(initialisation)** $P(n_0)$ est vraie, et **(hérédité)** pour tout $n \\geq n_0$, $P(n) \\Rightarrow P(n+1)$, alors $P(n)$ est vraie pour tout entier $n \\geq n_0$. C'est le **principe de raisonnement par récurrence**.

**Croissances comparées (admis).** Pour tout réel $q > 1$ et tout entier $k$ : $\\displaystyle\\lim_{n\\to+\\infty} \\dfrac{n^k}{q^n} = 0$ — l'exponentielle $q^n$ l'emporte sur toute puissance de $n$.

**En langage courant.** La récurrence prouve d'un coup une propriété pour tous les entiers ; à l'infini, une suite géométrique de raison $> 1$ écrase toujours une puissance de $n$.`,
        },
        {
          type: 'warning',
          id: 'warn6',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Initialisation** — vérification au premier rang $n_0$.
- **Hypothèse de récurrence** — « on suppose $P(n)$ vraie » : à écrire explicitement.
- **Hérédité** — le passage démontré de $P(n)$ à $P(n+1)$.
- **Croissance comparée** — $q^n$ (avec $q > 1$) l'emporte sur $n^k$ à l'infini.`,
        },
        {
          type: 'tip',
          id: 'tip7',
          titre: `À retenir`,
          contenu: `Le correcteur retire des points dès qu'une des trois étapes manque. Écris toujours les trois mots : **Initialisation**, **Hérédité**, **Conclusion**. *(Le détail complet des croissances comparées avec $\\ln$ et $e^x$ t'attend au Tome 5.)*`,
        },
        {
          type: 'figure',
          id: 'fig-m5-2',
          src: '/images/t4/fig_M5_2.png',
          legende: `À l'infini, l'exponentielle $2^n$ écrase la puissance $n$ : leur quotient tend vers $0$.`,
          alt: `À l'infini, l'exponentielle $2^n$ écrase la puissance $n$ : leur quotient tend vers $0$.`,
        },
      ],
    },
    {
      id: 's4',
      titre: `④ LA RÈGLE`,
      blocs: [
        {
          type: 'rule',
          id: 'rule8',
          titre: `Règle d'Or — Principe de Récurrence`,
          contenu: `Pour démontrer $P(n)$ vraie pour tout $n \\geq n_0$ :
$$\\textbf{Initialisation : } P(n_0) \\text{ vraie} \\quad ; \\quad \\textbf{Hérédité : } \\forall n \\geq n_0,\\ P(n) \\Rightarrow P(n+1).$$
$$\\Longrightarrow \\quad P(n) \\text{ vraie pour tout } n \\geq n_0.$$

**Croissances comparées (suites usuelles).** Pour $q > 1$ et $k$ entier :
$$\\lim_{n\\to+\\infty} \\dfrac{n^k}{q^n} = 0 \\qquad \\text{et} \\qquad \\lim_{n\\to+\\infty} \\dfrac{q^n}{n^k} = +\\infty.$$`,
        },
        {
          type: 'tip',
          id: 'tip9',
          titre: `Conseil du Grand Frère`,
          contenu: `Dans l'hérédité, Champion(ne), pars **toujours** du membre qui contient l'hypothèse de récurrence, et transforme-le pour atteindre le rang $n+1$. Ne travaille jamais les deux membres en même temps.`,
        },
        {
          type: 'warning',
          id: 'warn10',
          titre: `Piège à éviter`,
          contenu: `Oublier l'initialisation est l'erreur classique : sans le premier domino qui tombe, toute la chaîne est invalide, même si l'hérédité est parfaite. Le correcteur retire systématiquement des points.`,
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
          titre: `Le Diagnostic`,
          contenu: `L'énoncé dit « démontrer par récurrence que… », ou donne une formule conjecturée à valider → récurrence. Une limite avec un quotient $\\dfrac{\\text{polynôme}}{q^n}$ (forme « $\\dfrac{\\infty}{\\infty}$ ») → croissance comparée.`,
        },
        {
          type: 'table',
          id: 'tbl12',
          titre: `L'Arbre de décision`,
          headers: [`Si tu vois…`, `Ce que tu fais`],
          rows: [
            [`« Démontrer par récurrence que… »`, `Initialisation → Hérédité → Conclusion.`],
            [`Une inégalité à prouver pour tout $n$`, `Récurrence : pars de l'hypothèse, majore/minore.`],
            [`Une limite $\\dfrac{n^k}{q^n}$ avec $q>1$`, `Croissance comparée : la limite vaut $0$.`],
            [`Une limite $\\dfrac{q^n}{n^k}$ avec $q>1$`, `Croissance comparée : la limite vaut $+\\infty$.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure (récurrence)`,
          contenu: `**Étape 1.** Énonce clairement $P(n)$.

**Étape 2.** Initialisation : vérifie $P(n_0)$ (calcul des deux membres).

**Étape 3.** Hérédité : suppose $P(n)$, pars du membre avec l'hypothèse, atteins $P(n+1)$.

**Étape 4.** Conclusion : « Par récurrence, $P(n)$ est vraie pour tout $n \\geq n_0$. »`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `- **Teste $P(n_0)$ et $P(n_0+1)$** numériquement : si l'un échoue, ta propriété est mal posée.
- **Dans l'hérédité, vérifie que tu as bien utilisé l'hypothèse** : sinon la preuve est incomplète.`,
        },
        {
          type: 'figure',
          id: 'fig-m5-3',
          src: '/images/t4/fig_M5_3.png',
          legende: `Trois blocs, jamais deux : sans l'un, la preuve s'effondre.`,
          alt: `Trois blocs, jamais deux : sans l'un, la preuve s'effondre.`,
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
            [`🟢 BASE`, `Récurrence sur une égalité simple`, `Formule de $u_n$ à valider`, `Maintenant à toi`],
            [`🟡 MOYEN`, `Limite par croissance comparée`, `Quotient $n^k / q^n$`, `Type 2`],
            [`🔴 BAC`, `Récurrence d'un encadrement / inégalité`, `« Démontrer que $u_n \\leq \\ldots$ pour tout $n$ »`, `Type 1`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 1 — Récurrence sur une inégalité.** Soit $(u_n)$ définie par $u_0 = 0$ et $u_{n+1} = \\sqrt{u_n + 2}$. Démontrer par récurrence que, pour tout $n \\in \\mathbb{N}$, $0 \\leq u_n \\leq 2$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Propriété à établir pour tout $n$ → récurrence. La fonction $x \\mapsto \\sqrt{x+2}$ est croissante.` },
            { name: `Étape 1 — Propriété`, contenu: `$P(n)$ : « $0 \\leq u_n \\leq 2$ ».` },
            { name: `Étape 2 — Initialisation`, contenu: `$u_0 = 0$, donc $0 \\leq 0 \\leq 2$ : $P(0)$ est vraie.` },
            { name: `Étape 3 — Hérédité`, contenu: `Supposons $0 \\leq u_n \\leq 2$. Alors $2 \\leq u_n + 2 \\leq 4$, et la fonction racine étant croissante : $\\sqrt{2} \\leq \\sqrt{u_n+2} \\leq \\sqrt{4} = 2$. Comme $\\sqrt{2} \\geq 0$, on a $0 \\leq u_{n+1} \\leq 2$ : $P(n+1)$ est vraie.` },
            { name: `Étape 4 — Conclusion`, contenu: `Par récurrence, $0 \\leq u_n \\leq 2$ pour tout $n \\in \\mathbb{N}$.` },
          ],
          reponse: `Par récurrence : initialisation $u_0 = 0 \\in [0\\ ;\\ 2]$, hérédité par croissance de la racine, donc $0 \\leq u_n \\leq 2$ pour tout $n \\in \\mathbb{N}$.`,
          conseil: `Quand la récurrence porte sur un encadrement avec une fonction croissante, applique la fonction à l'encadrement : elle conserve l'ordre.`,
          piege: `Ne saute jamais l'initialisation, même si elle paraît évidente. « $P(0)$ vraie » vaut un point à elle seule.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Soit $P(n)$ : « $0 \\leq u_n \\leq 2$ ». **Initialisation :** $u_0 = 0 \\in [0\\ ;\\ 2]$, donc $P(0)$ est vraie. **Hérédité :** supposons $0 \\leq u_n \\leq 2$. Alors $2 \\leq u_n + 2 \\leq 4$, et la fonction $x \\mapsto \\sqrt{x}$ étant croissante, $\\sqrt 2 \\leq u_{n+1} \\leq 2$, donc $0 \\leq u_{n+1} \\leq 2$. **Conclusion :** par récurrence, pour tout $n \\in \\mathbb{N}$, $0 \\leq u_n \\leq 2$.

*[Barème : énoncé de $P(n)$ : 0,5 pt · initialisation : 1 pt · hérédité : 2 pts · conclusion : 0,5 pt — Total : 4 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Limite par croissance comparée.** Déterminer $\\displaystyle\\lim_{n\\to+\\infty} \\dfrac{n^2}{2^n}$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Quotient « puissance de $n$ sur exponentielle » avec $q = 2 > 1$ → croissance comparée.` },
            { name: `Étape 1`, contenu: `On reconnaît la forme $\\dfrac{n^k}{q^n}$ avec $k = 2$ et $q = 2 > 1$.` },
            { name: `Étape 2`, contenu: `Par croissance comparée, $\\displaystyle\\lim_{n\\to+\\infty} \\dfrac{n^2}{2^n} = 0$ : l'exponentielle $2^n$ l'emporte sur $n^2$.` },
          ],
          reponse: `$\\displaystyle\\lim_{n\\to+\\infty} \\dfrac{n^2}{2^n} = 0$.`,
          conseil: `Dès qu'une exponentielle de raison $> 1$ affronte une puissance de $n$, l'exponentielle gagne. Cite la croissance comparée, ne te lance pas dans des calculs.`,
          piege: `Ne conclus pas « forme indéterminée donc on ne peut rien dire » : la croissance comparée tranche directement.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Le quotient est de la forme $\\dfrac{n^k}{q^n}$ avec $k = 2$ et $q = 2 > 1$. Par croissance comparée, $\\displaystyle\\lim_{n\\to+\\infty} \\dfrac{n^2}{2^n} = 0$.

*[Barème : reconnaissance de la forme : 1,5 pt · énoncé de la croissance comparée : 1,5 pt · conclusion : 1 pt — Total : 4 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Pose les trois étapes, puis cours vers l'infini. Réponses finales seulement.

- **Exercice 1.** Démontre par récurrence que $1 + 2 + \\cdots + n = \\dfrac{n(n+1)}{2}$. *(Réponse : init $n=1$ : $1 = 1$ ; hérédité : ajoute $n+1$ aux deux membres.)*
- **Exercice 2.** $\\displaystyle\\lim_{n\\to+\\infty} \\dfrac{3^n}{n^5}$. *(Réponse : $+\\infty$, croissance comparée avec $q = 3 > 1$.)*
- **Exercice 3.** $\\displaystyle\\lim_{n\\to+\\infty} \\dfrac{n + 1}{2^n}$. *(Réponse : $0$, l'exponentielle l'emporte.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m5',
          titre: `À retenir`,
          contenu: [
            `Récurrence = trois étapes obligatoires : Initialisation, Hérédité, Conclusion.`,
            `📘 Vocabulaire officiel : initialisation, hypothèse de récurrence, hérédité, croissance comparée.`,
            `Dans l'hérédité, pars du membre contenant l'hypothèse de récurrence.`,
            `Croissance comparée : pour $q > 1$, $\\dfrac{n^k}{q^n} \\to 0$ et $\\dfrac{q^n}{n^k} \\to +\\infty$.`,
            `Le détail $\\ln$ / $e^x$ des croissances comparées s'approfondit au Tome 5.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m5',
          titre: `Fil rouge`,
          contenu: `Tu tiens maintenant tout l'arsenal des suites : nature, variation, bornes, convergence, récurrence, comportement à l'infini. Il ne reste qu'à s'entraîner sur de vrais sujets BAC. Direction la **Salle d'Entraînement** — dix exercices d'annales pour transformer tout ce savoir en réflexes de copie.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m5',
          titre: `Auto-évaluation — Module 5`,
          contenu: [
            `Je rédige une récurrence complète avec ses trois étapes nommées.`,
            `J'emploie le vocabulaire officiel (initialisation, hypothèse de récurrence, hérédité, croissance comparée).`,
            `Dans l'hérédité, je pars du membre qui contient l'hypothèse de récurrence.`,
            `Je reconnais une limite de croissance comparée et je conclus sans calcul inutile.`,
            `Je sais que $q^n$ (pour $q > 1$) l'emporte sur toute puissance de $n$.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m5',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Récurrence et infini domptés. Direction la Salle d'Entraînement.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 1 (inégalité).`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : la rangée de dominos de Yopougon.`,
          ],
        },
      ],
    },
  ],
};
