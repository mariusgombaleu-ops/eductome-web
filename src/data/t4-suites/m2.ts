import { Chapitre } from '../../types/course';

export const chapitreM2: Chapitre = {
  id: 't4-m2',
  titre: `Module 2 — Les Suites Arithmétiques`,
  duree: 25,
  niveau: 'BASE',
  xpGain: 25,
  objectifs: [
    `Reconnaître une suite arithmétique et déterminer sa raison $r$`,
    `Énoncer la définition d'une suite arithmétique avec le vocabulaire officiel attendu au BAC`,
    `Calculer n'importe quel terme avec la formule du terme général`,
    `Calculer la somme de termes consécutifs sans erreur de comptage`,
    `Étudier le sens de variation à partir du signe de la raison`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, dans la tontine de ma mère à Abobo, chaque maman dépose exactement 5 000 F le premier mois, puis ajoute 5 000 F de plus chaque mois. Au bout du douzième mois, la trésorière veut savoir combien il y a en caisse. Je ne vais quand même pas additionner douze nombres à la main le jour du BAC ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Excellente question, Champion(ne) ! Tu viens de décrire une suite arithmétique pure : un montant de départ, et le **même écart** ajouté à chaque étape. La beauté de la chose, c'est qu'on n'a pas besoin de tout additionner. Il existe une formule qui te donne directement n'importe quel terme, et une autre pour la somme. On va les installer, et le calcul de douze mois te prendra dix secondes.`,
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
          contenu: `Reviens à la tontine d'Abobo. Le premier mois, chaque maman dépose un montant de départ — disons $u_0$. Le mois suivant, elle ajoute la **même somme fixe**. Et le mois d'après, encore la même. Rien ne change dans le geste : à chaque étape, on ajoute toujours le même écart.

C'est exactement ça, une suite arithmétique : un point de départ, et un **pas constant** qu'on appelle la raison. Si tu connais le départ et le pas, tu peux prévoir le montant de n'importe quel mois sans dérouler toute l'histoire — il suffit de compter combien de pas tu as faits depuis le début.

Et pour la somme totale de la caisse, il y a une astuce de marché : *additionne le premier et le dernier dépôt, multiplie par le nombre de mois, et partage en deux.* C'est le secret des trésorières expérimentées d'Abobo.`,
        },
        {
          type: 'figure',
          id: 'fig-m2-1',
          src: '/images/t4/fig_M2_1.png',
          legende: `Une suite arithmétique : ses termes sont alignés, séparés par le même pas $r$.`,
          alt: `Une suite arithmétique : ses termes sont alignés, séparés par le même pas $r$.`,
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
          contenu: `Traduisons la tontine en langage de Terminale D.

- **Le dépôt de départ** → le premier terme $u_0$ (ou $u_p$).
- **L'écart fixe ajouté chaque mois** → la raison $r$.
- **Passer d'un mois au suivant** → $u_{n+1} = u_n + r$.
- **Le montant au mois $n$** → le terme général $u_n$.`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène de la tontine`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Le dépôt de départ`, `$u_0$`, `Le premier terme de la suite.`],
            [`L'écart fixe mensuel`, `$r$`, `La raison, ajoutée à chaque pas.`],
            [`Le geste « j'ajoute encore $r$ »`, `$u_{n+1} = u_n + r$`, `La relation de récurrence.`],
            [`Le montant après $n$ mois`, `$u_n = u_0 + nr$`, `Le terme général direct.`],
            [`La caisse totale`, `$S = \\dfrac{(\\text{nb termes})(u_{\\text{prem}}+u_{\\text{dern}})}{2}$`, `La somme des termes.`],
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
          contenu: `Champion(ne), l'image de la tontine t'a donné l'intuition. La copie attend les formules exactes.

**Définition formelle.** Une suite $(u_n)$ est **arithmétique** s'il existe un réel $r$, appelé **raison**, tel que pour tout $n \\in \\mathbb{N}$ : $u_{n+1} = u_n + r$. On a alors, pour tous entiers $n$ et $p$ : $u_n = u_p + (n-p)\\,r$, et en particulier $u_n = u_0 + n\\,r$.

**En langage courant.** On passe d'un terme au suivant en ajoutant toujours le même nombre.`,
        },
        {
          type: 'warning',
          id: 'warn6',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Suite arithmétique** — la relation $u_{n+1} = u_n + r$ doit être vérifiée.
- **Raison $r$** — l'écart constant ; se calcule par $u_{n+1} - u_n$.
- **Terme général** — la formule $u_n = u_0 + nr$ qui donne tout terme directement.
- **Somme de termes consécutifs** — $S = \\dfrac{(\\text{nombre de termes}) \\times (\\text{premier} + \\text{dernier})}{2}$.`,
        },
        {
          type: 'tip',
          id: 'tip7',
          titre: `À retenir`,
          contenu: `Pour prouver qu'une suite est arithmétique, le correcteur attend : *« Pour tout $n$, $u_{n+1} - u_n = r$ (constante). »* C'est cette constance qui fait la démonstration.`,
        },
        {
          type: 'figure',
          id: 'fig-m2-2',
          src: '/images/t4/fig_M2_2.png',
          legende: `La somme = (nombre de termes) × (premier + dernier) ÷ 2.`,
          alt: `La somme = (nombre de termes) × (premier + dernier) ÷ 2.`,
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
          titre: `Règle d'Or — Suite Arithmétique`,
          contenu: `Une suite $(u_n)$ est arithmétique de raison $r$ lorsque $u_{n+1} = u_n + r$ pour tout $n$.

**Terme général :**
$$u_n = u_0 + n\\,r \\qquad \\text{ou plus généralement} \\qquad u_n = u_p + (n-p)\\,r.$$

**Somme de termes consécutifs** (de $u_0$ à $u_n$, soit $n+1$ termes) :
$$S = u_0 + u_1 + \\cdots + u_n = \\dfrac{(n+1)\\,(u_0 + u_n)}{2}.$$

**Sens de variation.** Si $r > 0$, la suite est croissante ; si $r < 0$, décroissante ; si $r = 0$, constante.`,
        },
        {
          type: 'tip',
          id: 'tip9',
          titre: `Conseil du Grand Frère`,
          contenu: `Le sens de variation se lit directement sur le signe de $r$, Champion(ne) : pas besoin de calculer $u_{n+1}-u_n$, c'est déjà $r$ !`,
        },
        {
          type: 'warning',
          id: 'warn10',
          titre: `Piège à éviter`,
          contenu: `Dans la somme, le facteur est le **nombre de termes**, pas le dernier indice. De $u_0$ à $u_n$, il y a $n+1$ termes (Outil 4 du Socle). Compte $n - p + 1$ avant d'appliquer.`,
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
          contenu: `L'énoncé dit « on ajoute chaque fois », « écart constant », ou donne $u_{n+1} = u_n + (\\text{nombre})$ → suite arithmétique. Une histoire de cotisation, de salaire augmenté d'un montant fixe, de places de stade en rangées régulières → arithmétique.`,
        },
        {
          type: 'table',
          id: 'tbl12',
          titre: `L'Arbre de décision`,
          headers: [`Si tu vois…`, `Ce que tu fais`],
          rows: [
            [`« Montrer que la suite est arithmétique »`, `Calcule $u_{n+1}-u_n$ et montre que c'est une constante $r$.`],
            [`« Calculer $u_n$ » (terme lointain)`, `Applique $u_n = u_0 + nr$.`],
            [`« Calculer une somme »`, `Compte les termes ($n-p+1$) puis applique la formule de somme.`],
            [`« Sens de variation »`, `Lis le signe de la raison $r$.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure`,
          contenu: `**Étape 1.** Identifie $u_0$ (ou $u_p$) et la raison $r = u_{n+1} - u_n$.

**Étape 2.** Pour un terme : applique $u_n = u_0 + nr$.

**Étape 3.** Pour une somme : compte le nombre de termes, puis $S = \\dfrac{(\\text{nb termes})(u_{\\text{prem}}+u_{\\text{dern}})}{2}$.

**Étape 4.** Conclus par une phrase complète avec l'unité (F CFA, places, etc.).`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `- **Recalcule un terme connu** ($u_1$ par exemple) avec ta formule : tu dois retomber sur la valeur de l'énoncé.
- **Ordre de grandeur de la somme** : elle doit être proche de (nombre de termes) × (terme moyen).`,
        },
        {
          type: 'figure',
          id: 'fig-m2-3',
          src: '/images/t4/fig_M2_3.png',
          legende: `Le signe de la raison décide tout le sens de variation.`,
          alt: `Le signe de la raison décide tout le sens de variation.`,
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
            [`🟢 BASE`, `Terme général d'une arithmétique`, `Raison donnée, calculer un terme`, `Maintenant à toi`],
            [`🟡 MOYEN`, `Calcul d'une somme de termes`, `« Somme des $n$ premiers termes »`, `Type 2`],
            [`🔴 BAC`, `Tontine : terme + somme totale`, `Contexte concret de cotisation`, `Type 1`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 1 — Tontine et suite arithmétique.** Une maman d'Abobo dépose $5\\,000$ F le premier mois ($u_1$), puis augmente son dépôt de $5\\,000$ F chaque mois. On note $u_n$ le dépôt du mois $n$. (1) Justifier que $(u_n)$ est arithmétique et donner sa raison. (2) Calculer $u_{12}$, le dépôt du douzième mois. (3) Calculer la somme totale épargnée au bout de $12$ mois.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Écart fixe de $5\\,000$ F → suite arithmétique. On applique terme général puis somme.` },
            { name: `Étape 1`, contenu: `$u_{n+1} - u_n = 5\\,000$ (constante) : $(u_n)$ est arithmétique de raison $r = 5\\,000$, premier terme $u_1 = 5\\,000$.` },
            { name: `Étape 2`, contenu: `$u_{12} = u_1 + (12-1)r = 5\\,000 + 11 \\times 5\\,000 = 60\\,000$ F.` },
            { name: `Étape 3`, contenu: `Il y a $12$ termes (de $u_1$ à $u_{12}$). $S = \\dfrac{12\\,(u_1 + u_{12})}{2} = \\dfrac{12\\,(5\\,000 + 60\\,000)}{2} = 6 \\times 65\\,000 = 390\\,000$ F.` },
          ],
          reponse: `(1) Arithmétique de raison $r = 5\\,000$. (2) $u_{12} = 60\\,000$ F. (3) $S = 390\\,000$ F.`,
          conseil: `Pour compter les termes de $u_1$ à $u_{12}$ : $12 - 1 + 1 = 12$. Toujours le réflexe $n - p + 1$.`,
          piege: `Ne confonds jamais le dernier **dépôt** ($u_{12} = 60\\,000$) avec la **somme totale** ($S = 390\\,000$). L'un est un terme isolé, l'autre est le cumul.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Pour tout $n$, $u_{n+1} - u_n = 5\\,000$ : la suite $(u_n)$ est arithmétique de raison $r = 5\\,000$ et de premier terme $u_1 = 5\\,000$. Donc $u_{12} = u_1 + 11r = 5\\,000 + 11 \\times 5\\,000 = 60\\,000$ F. La somme des $12$ premiers termes vaut $S = \\dfrac{12\\,(u_1 + u_{12})}{2} = \\dfrac{12 \\times 65\\,000}{2} = 390\\,000$ F. La maman aura épargné $390\\,000$ F au bout d'un an.

*[Barème : nature + raison : 1 pt · $u_{12}$ : 1 pt · somme : 2 pts — Total : 4 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Somme des premiers entiers.** Calculer la somme $S = 1 + 2 + 3 + \\cdots + 100$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Suite arithmétique de premier terme $1$, raison $1$ → formule de somme.` },
            { name: `Étape 1`, contenu: `Les termes $1, 2, \\ldots, 100$ forment une suite arithmétique de raison $1$. Nombre de termes : $100$.` },
            { name: `Étape 2`, contenu: `$S = \\dfrac{100\\,(1 + 100)}{2} = 50 \\times 101 = 5\\,050$.` },
          ],
          reponse: `$S = 5\\,050$.`,
          conseil: `Cette somme $\\dfrac{n(n+1)}{2}$ est un classique : connais-la par cœur (Outil 4 du Socle).`,
          piege: `$100$ termes, pas $99$. De $1$ à $100$ : $100 - 1 + 1 = 100$.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Les entiers de $1$ à $100$ forment une suite arithmétique de raison $1$, comportant $100$ termes. Donc $S = \\dfrac{100\\,(1 + 100)}{2} = 5\\,050$.

*[Barème : reconnaissance + nombre de termes : 1,5 pt · application de la formule : 1,5 pt · résultat : 1 pt — Total : 4 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Repère la formule avant de calculer. Réponses finales seulement.

- **Exercice 1.** $(u_n)$ arithmétique, $u_0 = 7$, $r = 3$. Calcule $u_{10}$. *(Réponse : $u_{10} = 7 + 10 \\times 3 = 37$.)*
- **Exercice 2.** $(u_n)$ arithmétique, $u_0 = 2$, $r = 4$. Calcule $S = u_0 + \\cdots + u_9$. *(Réponse : $u_9 = 38$, $S = \\dfrac{10(2+38)}{2} = 200$.)*
- **Exercice 3.** $(u_n)$ arithmétique avec $u_3 = 11$ et $u_7 = 23$. Trouve la raison. *(Réponse : $r = \\dfrac{23-11}{7-3} = 3$.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m2',
          titre: `À retenir`,
          contenu: [
            `Suite arithmétique : $u_{n+1} = u_n + r$ ; terme général $u_n = u_0 + nr$.`,
            `📘 Vocabulaire officiel : suite arithmétique, raison, terme général, somme de termes consécutifs.`,
            `Somme : $S = \\dfrac{(\\text{nb termes})(u_{\\text{prem}} + u_{\\text{dern}})}{2}$.`,
            `Sens de variation : signe de $r$ ($r>0$ croissante, $r<0$ décroissante).`,
            `Compte toujours le nombre de termes avec $n - p + 1$.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m2',
          titre: `Fil rouge`,
          contenu: `La tontine d'Abobo **ajoute** toujours le même montant. Mais à la banque, ton argent placé ne grossit pas en s'ajoutant : il grossit en se **multipliant** par un taux, campagne après campagne, comme le prix du cacao. Quand on multiplie au lieu d'ajouter, on entre dans un autre monde : celui des suites géométriques. C'est le **Module 3**.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m2',
          titre: `Auto-évaluation — Module 2`,
          contenu: [
            `Je sais reconnaître une suite arithmétique et calculer sa raison.`,
            `J'emploie le vocabulaire officiel (suite arithmétique, raison, terme général, somme).`,
            `Je calcule n'importe quel terme avec $u_n = u_0 + nr$.`,
            `Je calcule une somme en comptant d'abord le nombre de termes.`,
            `Je déduis le sens de variation du signe de la raison.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m2',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Tontine maîtrisée. Direction Module 3.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 1 (tontine).`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : la tontine d'Abobo et son écart constant.`,
          ],
        },
      ],
    },
  ],
};
