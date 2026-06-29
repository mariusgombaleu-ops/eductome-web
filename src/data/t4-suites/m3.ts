import { Chapitre } from '../../types/course';

export const chapitreM3: Chapitre = {
  id: 't4-m3',
  titre: `Module 3 — Les Suites Géométriques`,
  duree: 25,
  niveau: 'MOYEN',
  xpGain: 25,
  objectifs: [
    `Reconnaître une suite géométrique et déterminer sa raison $q$`,
    `Énoncer la définition d'une suite géométrique avec le vocabulaire officiel attendu au BAC`,
    `Calculer n'importe quel terme avec $u_n = u_0\\,q^n$`,
    `Calculer la somme de termes consécutifs d'une suite géométrique`,
    `Déterminer la limite d'une suite géométrique selon la valeur de $|q|$`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, mon oncle a placé $500\\,000$ F à la banque à $4\\,\\%$ d'intérêts par an. Il dit que chaque année, son argent est multiplié par le même nombre. Mais alors, ce n'est plus comme la tontine d'Abobo où on ajoute toujours pareil ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Tu as l'œil du caïman, Champion(ne) ! Tu viens de toucher la grande différence. À la tontine, on **ajoute** un montant fixe : c'est arithmétique. À la banque avec des intérêts composés, on **multiplie** par un même facteur chaque année : c'est géométrique. Et crois-moi, multiplier, ça ne grandit pas du tout à la même vitesse qu'ajouter. On va voir pourquoi, et comment prévoir le capital de n'importe quelle année.`,
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
          contenu: `Pense au prix du cacao sur le marché mondial, ou au capital placé de ton oncle. D'une campagne à la suivante, la valeur ne gagne pas un montant fixe : elle est **multipliée** par un même coefficient. Augmenter de $4\\,\\%$, c'est multiplier par $1,04$. Baisser de $10\\,\\%$, c'est multiplier par $0,90$.

Le geste se répète : chaque étape, on multiplie par le même nombre. Si ce nombre est supérieur à $1$, la valeur s'**envole** de plus en plus vite — c'est l'effet boule de neige des intérêts composés. S'il est compris entre $0$ et $1$, la valeur **fond** régulièrement vers zéro, comme un médicament éliminé par moitié chaque heure.

*Là où la suite arithmétique avance à pas réguliers en ligne droite, la suite géométrique accélère ou s'effondre à une vitesse qui dépend de tout son passé.*`,
        },
        {
          type: 'figure',
          id: 'fig-m3-1',
          src: '/images/t4/fig_M3_1.png',
          legende: `Ajouter avance en ligne droite ; multiplier s'envole.`,
          alt: `Ajouter avance en ligne droite ; multiplier s'envole.`,
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
          contenu: `Traduisons le capital bancaire en langage de Terminale D.

- **Le capital de départ** → le premier terme $u_0$.
- **Le facteur multiplicateur** ($1,04$ pour $+4\\,\\%$) → la raison $q$.
- **Passer d'une année à la suivante** → $u_{n+1} = q \\times u_n$.
- **Le capital à l'année $n$** → $u_n = u_0\\,q^n$.`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène de la banque`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Le capital de départ`, `$u_0$`, `Le premier terme.`],
            [`Le facteur multiplicateur`, `$q$`, `La raison ; $q = 1 + t/100$ pour une hausse de $t\\,\\%$.`],
            [`Le geste « je multiplie par $q$ »`, `$u_{n+1} = q\\,u_n$`, `La relation de récurrence.`],
            [`Le capital après $n$ années`, `$u_n = u_0\\,q^n$`, `Le terme général direct.`],
            [`Le comportement à long terme`, `$\\displaystyle\\lim q^n$ selon $|q|$`, `Envol, stabilité ou fonte vers $0$.`],
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
          contenu: `Champion(ne), l'image du capital qui se multiplie est posée. La copie attend les formules exactes.

**Définition formelle.** Une suite $(u_n)$ est **géométrique** s'il existe un réel $q$, appelé **raison**, tel que pour tout $n \\in \\mathbb{N}$ : $u_{n+1} = q\\,u_n$. On a alors $u_n = u_0\\,q^n$, et plus généralement $u_n = u_p\\,q^{\\,n-p}$.

**En langage courant.** On passe d'un terme au suivant en multipliant toujours par le même nombre.`,
        },
        {
          type: 'warning',
          id: 'warn6',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Suite géométrique** — la relation $u_{n+1} = q\\,u_n$ doit être vérifiée.
- **Raison $q$** — le facteur constant ; se calcule par $\\dfrac{u_{n+1}}{u_n}$ (termes non nuls).
- **Terme général** — la formule $u_n = u_0\\,q^n$.
- **Somme géométrique** — $\\displaystyle\\sum = u_{\\text{prem}} \\times \\dfrac{1 - q^{\\,\\text{nb termes}}}{1 - q}$ (pour $q \\neq 1$).`,
        },
        {
          type: 'tip',
          id: 'tip7',
          titre: `À retenir`,
          contenu: `Pour prouver qu'une suite est géométrique, le correcteur attend : *« Pour tout $n$, $\\dfrac{u_{n+1}}{u_n} = q$ (constante). »* C'est cette constance du quotient qui fait la démonstration.`,
        },
        {
          type: 'figure',
          id: 'fig-m3-2',
          src: '/images/t4/fig_M3_2.png',
          legende: `Tout le destin d'une suite géométrique tient dans la valeur de $|q|$.`,
          alt: `Tout le destin d'une suite géométrique tient dans la valeur de $|q|$.`,
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
          titre: `Règle d'Or — Suite Géométrique`,
          contenu: `Une suite $(u_n)$ est géométrique de raison $q$ lorsque $u_{n+1} = q\\,u_n$ pour tout $n$.

**Terme général :**
$$u_n = u_0\\,q^n \\qquad \\text{ou plus généralement} \\qquad u_n = u_p\\,q^{\\,n-p}.$$

**Somme de termes consécutifs** (de $u_0$ à $u_n$, soit $n+1$ termes, $q \\neq 1$) :
$$S = u_0 + u_1 + \\cdots + u_n = u_0 \\times \\dfrac{1 - q^{\\,n+1}}{1 - q}.$$

**Limite** (pour $u_0 > 0$) : si $0 < q < 1$, $\\displaystyle\\lim u_n = 0$ ; si $q > 1$, $\\displaystyle\\lim u_n = +\\infty$ ; si $q = 1$, la suite est constante.`,
        },
        {
          type: 'tip',
          id: 'tip9',
          titre: `Conseil du Grand Frère`,
          contenu: `Pour une hausse de $t\\,\\%$, Champion(ne), la raison est $q = 1 + \\dfrac{t}{100}$ ; pour une baisse, $q = 1 - \\dfrac{t}{100}$. Jamais le taux brut tout seul.`,
        },
        {
          type: 'warning',
          id: 'warn10',
          titre: `Piège à éviter`,
          contenu: `Écrire $q = 0,04$ au lieu de $q = 1,04$ pour $+4\\,\\%$ fait fondre le capital au lieu de le faire grandir. Augmenter de $4\\,\\%$ = **multiplier par $1,04$**.`,
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
          contenu: `L'énoncé parle de pourcentage d'augmentation/diminution, d'intérêts composés, de population qui croît d'un taux fixe, de division par moitié → suite géométrique. Le quotient $\\dfrac{u_{n+1}}{u_n}$ est constant.`,
        },
        {
          type: 'table',
          id: 'tbl12',
          titre: `L'Arbre de décision`,
          headers: [`Si tu vois…`, `Ce que tu fais`],
          rows: [
            [`« Montrer que la suite est géométrique »`, `Calcule $\\dfrac{u_{n+1}}{u_n}$ et montre que c'est une constante $q$.`],
            [`Un pourcentage $t\\,\\%$`, `Pose $q = 1 \\pm \\dfrac{t}{100}$ selon hausse ou baisse.`],
            [`« Calculer $u_n$ »`, `Applique $u_n = u_0\\,q^n$.`],
            [`« Calculer une somme »`, `Applique $S = u_0\\dfrac{1-q^{\\,nb}}{1-q}$.`],
            [`« Limite / convergence »`, `Compare $|q|$ à $1$ (Outil 1 du Socle).`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure`,
          contenu: `**Étape 1.** Identifie $u_0$ et la raison $q = \\dfrac{u_{n+1}}{u_n}$ (ou $q = 1 \\pm t/100$).

**Étape 2.** Pour un terme : applique $u_n = u_0\\,q^n$.

**Étape 3.** Pour une somme : applique $S = u_0\\dfrac{1-q^{\\,n+1}}{1-q}$.

**Étape 4.** Pour la limite : compare $|q|$ à $1$ et conclus.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `- **Recalcule $u_1$** avec ta formule : tu dois retrouver $q \\times u_0$.
- **Cohérence de la limite** : $|q| < 1$ → vers $0$ ; $|q| > 1$ → explose. L'intuition du contexte doit confirmer.`,
        },
        {
          type: 'figure',
          id: 'fig-m3-3',
          src: '/images/t4/fig_M3_3.png',
          legende: `Intérêts composés : chaque année multiplie le capital, l'écart grandit.`,
          alt: `Intérêts composés : chaque année multiplie le capital, l'écart grandit.`,
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
            [`🟢 BASE`, `Terme général d'une géométrique`, `Raison donnée, calculer un terme`, `Maintenant à toi`],
            [`🟡 MOYEN`, `Somme géométrique`, `« Somme des $n$ premiers termes »`, `Type 2`],
            [`🔴 BAC`, `Capital, intérêts composés et seuil`, `Pourcentage + « à partir de quelle année »`, `Type 1`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 1 — Capital et intérêts composés.** Un capital de $500\\,000$ F est placé à $4\\,\\%$ par an à intérêts composés. On note $u_n$ le capital après $n$ années, $u_0 = 500\\,000$. (1) Justifier que $(u_n)$ est géométrique et donner sa raison. (2) Exprimer $u_n$ en fonction de $n$. (3) À partir de quelle année le capital dépasse-t-il $700\\,000$ F ?`,
          etapes: [
            { name: `Diagnostic`, contenu: `Hausse de $4\\,\\%$ chaque année → géométrique de raison $q = 1,04$.` },
            { name: `Étape 1`, contenu: `Chaque année, $u_{n+1} = u_n + 0,04\\,u_n = 1,04\\,u_n$. Donc $\\dfrac{u_{n+1}}{u_n} = 1,04$ : suite géométrique de raison $q = 1,04$.` },
            { name: `Étape 2`, contenu: `$u_n = u_0\\,q^n = 500\\,000 \\times 1,04^n$.` },
            { name: `Étape 3`, contenu: `On cherche $n$ tel que $500\\,000 \\times 1,04^n > 700\\,000$, soit $1,04^n > 1,4$. En passant au logarithme : $n > \\dfrac{\\ln 1,4}{\\ln 1,04} \\approx 8,58$. Comme $u_8 \\approx 684\\,280 < 700\\,000$ et $u_9 \\approx 711\\,651 > 700\\,000$, le capital dépasse $700\\,000$ F à partir de la **9ᵉ année**.` },
          ],
          reponse: `(1) Géométrique de raison $q = 1,04$. (2) $u_n = 500\\,000 \\times 1,04^n$. (3) À partir de la 9ᵉ année.`,
          conseil: `Face à une inéquation avec exposant, pense au logarithme — l'outil qui fait descendre l'exposant. Et $n$ est un entier : arrondis à l'entier supérieur.`,
          piege: `Ne prends jamais le taux brut comme raison ! Écrire $q = 0,04$ au lieu de $q = 1,04$ ferait fondre le capital.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Pour tout $n$, $u_{n+1} = 1,04\\,u_n$, donc $(u_n)$ est géométrique de raison $q = 1,04$ et de premier terme $u_0 = 500\\,000$. Ainsi $u_n = 500\\,000 \\times 1,04^n$. On résout $1,04^n > 1,4 \\iff n > \\dfrac{\\ln 1,4}{\\ln 1,04} \\approx 8,58$. Comme $u_8 \\approx 684\\,280 < 700\\,000$ et $u_9 \\approx 711\\,651 > 700\\,000$, le capital dépasse $700\\,000$ F à partir de la $9^{\\text{e}}$ année.

*[Barème : nature + raison : 1 pt · terme général : 1 pt · seuil (log + vérification) : 2 pts — Total : 4 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Somme d'une suite géométrique.** Soit $(u_n)$ géométrique de premier terme $u_0 = 3$ et de raison $q = 2$. Calculer $S = u_0 + u_1 + \\cdots + u_6$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Somme de $7$ termes consécutifs d'une géométrique, $q = 2 \\neq 1$ → formule de somme.` },
            { name: `Étape 1`, contenu: `Nombre de termes : de $u_0$ à $u_6$, soit $7$ termes.` },
            { name: `Étape 2`, contenu: `$S = u_0 \\times \\dfrac{1 - q^{7}}{1 - q} = 3 \\times \\dfrac{1 - 2^{7}}{1 - 2} = 3 \\times \\dfrac{1 - 128}{-1} = 3 \\times 127 = 381$.` },
          ],
          reponse: `$S = 381$.`,
          conseil: `Quand $q > 1$, écris la formule sous la forme $u_0\\dfrac{q^{\\,nb}-1}{q-1}$ pour éviter les signes négatifs.`,
          piege: `L'exposant de $q$ dans la somme est le **nombre de termes** ($7$), pas le dernier indice ($6$).`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `La suite $(u_n)$ est géométrique de raison $q = 2 \\neq 1$. La somme des $7$ premiers termes vaut $S = u_0\\,\\dfrac{1 - q^{7}}{1 - q} = 3 \\times \\dfrac{1 - 128}{-1} = 381$.

*[Barème : nombre de termes : 1 pt · application de la formule : 2 pts · résultat : 1 pt — Total : 4 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Repère la raison avant de calculer. Réponses finales seulement.

- **Exercice 1.** $(u_n)$ géométrique, $u_0 = 5$, $q = 3$. Calcule $u_4$. *(Réponse : $u_4 = 5 \\times 3^4 = 405$.)*
- **Exercice 2.** $(u_n)$ géométrique, $u_0 = 1\\,000$, $q = 0,5$. Quelle est sa limite ? *(Réponse : $0$, car $0 < q < 1$.)*
- **Exercice 3.** Une population de $20\\,000$ habitants croît de $5\\,\\%$ par an. Population après $2$ ans ? *(Réponse : $20\\,000 \\times 1,05^2 = 22\\,050$.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m3',
          titre: `À retenir`,
          contenu: [
            `Suite géométrique : $u_{n+1} = q\\,u_n$ ; terme général $u_n = u_0\\,q^n$.`,
            `📘 Vocabulaire officiel : suite géométrique, raison, terme général, somme géométrique.`,
            `Somme : $S = u_0\\dfrac{1 - q^{\\,nb}}{1 - q}$ (pour $q \\neq 1$).`,
            `Hausse de $t\\,\\%$ → $q = 1 + t/100$ ; jamais le taux brut.`,
            `Limite : $0 < q < 1$ → $0$ ; $q > 1$ → $+\\infty$.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m3',
          titre: `Fil rouge`,
          contenu: `Arithmétiques et géométriques ont un point commun très confortable : on connaît leur terme général direct ($u_n = u_0 + nr$ ou $u_0\\,q^n$). Mais le BAC adore les suites où chaque terme se calcule à partir du précédent par une fonction, sans formule directe : $u_{n+1} = f(u_n)$, comme la seringue au CHU. Là, plus de formule toute faite — il faut une vraie méthode. C'est le grand morceau du **Module 4** : les suites récurrentes.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m3',
          titre: `Auto-évaluation — Module 3`,
          contenu: [
            `Je sais reconnaître une suite géométrique et calculer sa raison.`,
            `J'emploie le vocabulaire officiel (suite géométrique, raison, terme général, somme).`,
            `Je calcule un terme avec $u_n = u_0\\,q^n$ et une hausse de $t\\,\\%$ avec $q = 1 + t/100$.`,
            `Je calcule une somme géométrique avec la bonne formule.`,
            `Je détermine la limite en comparant $|q|$ à $1$.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m3',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Capital maîtrisé. Direction Module 4.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 1 (capital).`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : le capital qui se multiplie chaque année.`,
          ],
        },
      ],
    },
  ],
};
