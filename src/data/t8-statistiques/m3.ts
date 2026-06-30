import { Chapitre } from '../../types/course';

export const chapitreM3: Chapitre = {
  id: 't8-m3',
  titre: `Module 3 — Droite des Moindres Carrés`,
  duree: 26,
  niveau: 'BAC',
  xpGain: 30,
  objectifs: [
    `Calculer les coefficients $a$ et $b$ de la droite de $Y$ en $X$`,
    `Calculer aussi la droite de $X$ en $Y$ et savoir laquelle l'énoncé demande`,
    `Énoncer la propriété officielle : les deux droites passent par $G$`,
    `Vérifier ton équation grâce au passage obligatoire par le point moyen $G$`,
    `Utiliser l'équation pour faire une prévision chiffrée`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, mon coefficient $r$ est proche de $1$, donc mes points sont presque alignés. Mais « presque », ce n'est pas une droite exacte. Quelle droite je trace, au juste ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Là est toute la finesse, Champion(ne) ! Comme les points ne sont pas parfaitement alignés, il existe une infinité de droites possibles. On va choisir LA meilleure : celle qui passe au plus près de tous les points à la fois, la droite des moindres carrés. Et bonus : elle passe toujours par notre vieux ami, le point moyen $G$. C'est elle qui va te permettre de prédire l'avenir.`,
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
          contenu: `Reprends ta boutique Selar. Chaque mois, tu notes deux chiffres : le mois (rang $1, 2, 3...$) et le chiffre d'affaires réalisé. Tu places tes points : ils montent, mais pas en ligne parfaitement droite — un mois un peu plus fort, un mois un peu plus faible, c'est la vraie vie du commerce.

Ton patron te demande : « Trace-moi la tendance générale, et dis-moi ce qu'on peut espérer le mois prochain. » Tu pourrais tirer un trait à la louche... mais ton voisin de classe qui fait ça perd des points à chaque BAC. La bonne approche, c'est de chercher la droite qui minimise l'écart total avec tous les points : aucune ne colle parfaitement, mais celle-ci est la moins mauvaise de toutes, mathématiquement la meilleure.

Cette droite « au plus près » a deux qualités : elle passe pile par le point moyen $G$ (le centre de ta boutique sur les six mois), et son équation te sert de boule de cristal pour le mois suivant. C'est la droite des moindres carrés.`,
        },
        {
          type: 'figure',
          id: 'fig-m3-1',
          src: '/images/t8/fig_M3_1.png',
          legende: `La droite des moindres carrés passe au plus près de tous les points, et toujours par $G$.`,
          alt: `Le nuage Selar avec sa droite d'ajustement passant par G.`,
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
          contenu: `On traduit la « meilleure droite » en symboles.

- La tendance générale → la droite $(D)$ : $y = ax + b$
- La pente de la tendance → le coefficient directeur $a$
- Le passage par le centre → la droite contient $G(\\bar{x} ; \\bar{y})$
- La prévision du mois prochain → remplacer $x$ par le nouveau rang`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène de la boutique`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`La tendance générale`, `$y = ax + b$`, `La droite d'ajustement $(D)$`],
            [`La raideur de la montée`, `$a = \\dfrac{\\text{cov}(X,Y)}{V(X)}$`, `Le coefficient directeur`],
            [`Le passage par le centre`, `$G \\in (D)$`, `D'où $b = \\bar{y} - a\\bar{x}$`],
            [`Prévoir le mois suivant`, `remplacer $x$ dans $(D)$`, `Une prévision chiffrée`],
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
          id: 'b6',
          contenu: `Champion(ne), il existe en réalité DEUX droites d'ajustement. Ta copie doit savoir les nommer et les distinguer.

**Définition formelle.** La droite d'ajustement de **$Y$ en $X$** par la méthode des moindres carrés a pour équation $y = ax + b$ avec :
$$a = \\dfrac{\\text{cov}(X,Y)}{V(X)} \\qquad b = \\bar{y} - a\\bar{x}$$

La droite d'ajustement de **$X$ en $Y$** a pour équation $x = a'y + b'$ avec $a' = \\dfrac{\\text{cov}(X,Y)}{V(Y)}$ et $b' = \\bar{x} - a'\\bar{y}$. **Ces deux droites passent toutes les deux par le point moyen $G$.**

**En langage courant.** « $Y$ en $X$ » sert à prévoir $y$ à partir de $x$ ; « $X$ en $Y$ », l'inverse. Elles se croisent en $G$.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Droite des moindres carrés** — la droite qui minimise les écarts au nuage.
- **Ajustement de $Y$ en $X$** — équation $y = ax + b$, dénominateur $V(X)$.
- **Ajustement de $X$ en $Y$** — équation $x = a'y + b'$, dénominateur $V(Y)$.
- **Point d'intersection $G$** — les deux droites se coupent au point moyen.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend *« La droite des moindres carrés passe par le point moyen $G(\\bar{x} ; \\bar{y})$. »*. Et lis bien : si on demande $X$ en $Y$, c'est $V(Y)$ au dénominateur, pas $V(X)$.`,
        },
        {
          type: 'figure',
          id: 'fig-m3-2',
          src: '/images/t8/fig_M3_2.png',
          legende: `Les deux droites d'ajustement se croisent toujours au point moyen $G$.`,
          alt: `La droite de Y en X et celle de X en Y se coupant en G.`,
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
          titre: `Règle d'Or — La droite des moindres carrés de Y en X`,
          contenu: `$$y = ax + b \\qquad \\text{avec} \\qquad a = \\dfrac{\\text{cov}(X,Y)}{V(X)} \\quad \\text{et} \\quad b = \\bar{y} - a\\bar{x}$$

Cette droite passe obligatoirement par le point moyen $G(\\bar{x} ; \\bar{y})$. Pour l'ajustement de $X$ en $Y$, on remplace $V(X)$ par $V(Y)$ et on échange les rôles : $x = a'y + b'$.`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Tu as déjà $\\text{cov}(X,Y)$ et $V(X)$ des modules précédents : pioche dedans, ne recalcule pas tout.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Au dénominateur de $a$ (droite de $Y$ en $X$), c'est **$V(X)$**, jamais $V(Y)$ ni un écart-type. Ne confonds pas cette fraction avec celle de $r$.`,
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
          contenu: `Le sujet demande « l'équation de la droite d'ajustement », « une prévision », ou « tracer la droite » : tu es ici. Lis bien si c'est $Y$ en $X$ (cas le plus fréquent) ou $X$ en $Y$.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Si l'énoncé demande...`, `Alors l'action est...`],
          rows: [
            [`L'équation de $Y$ en $X$`, `Calculer $a = \\text{cov}/V(X)$, puis $b = \\bar{y} - a\\bar{x}$.`],
            [`L'équation de $X$ en $Y$`, `Calculer $a' = \\text{cov}/V(Y)$, puis $b' = \\bar{x} - a'\\bar{y}$.`],
            [`Une prévision de $y$ pour un $x$ donné`, `Remplacer $x$ dans $y = ax + b$.`],
            [`De tracer la droite`, `Placer $G$, choisir un second point éloigné, relier à la règle.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure`,
          contenu: `**Étape 1.** Calcule $a$ : tu as déjà $\\text{cov}(X,Y)$ et $V(X)$. Pose la division calmement.

**Étape 2.** Calcule $b = \\bar{y} - a\\bar{x}$ avec les moyennes du Module 1.

**Étape 3.** Écris l'équation finale $y = ax + b$.

**Étape 4.** Exploite-la : pour un nouveau $x$, remplace pour trouver $y$.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `Le point moyen $G$ est ton contrôleur. Remplace $x$ par $\\bar{x}$ dans ton équation : si tu ne retombes pas sur $\\bar{y}$ (aux arrondis près), ton $a$ ou ton $b$ est faux. Recommence immédiatement.`,
        },
        {
          type: 'figure',
          id: 'fig-m3-3',
          src: '/images/t8/fig_M3_3.png',
          legende: `On lit une prévision en remontant du $x$ choisi jusqu'à la droite.`,
          alt: `Lecture graphique d'une prévision sur la droite d'ajustement.`,
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
            [`🔴 BAC`, `Droite de $Y$ en $X$ + prévision`, `On donne cov et $V(X)$, on demande $(D)$ et une prévision`, `Type 1`],
            [`🔴 BAC`, `Les deux droites $Y/X$ et $X/Y$`, `On demande explicitement les deux et leur intersection`, `Type 2`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 1 — Bénéfice annuel et prévision.** Pour une entreprise, on a $G(3 ; 20)$, $\\text{cov}(X,Y) = 5{,}4$ et $V(X) = 2$ (bénéfice en millions de F CFA, $x$ = rang de l'année). **1.** Détermine la droite d'ajustement de $Y$ en $X$. **2.** Quel bénéfice prévoir pour l'année de rang $6$ ?`,
          etapes: [
            { name: `Diagnostic`, contenu: `On a cov et $V(X)$ : on calcule directement $a$ puis $b$ via $G$.` },
            { name: `Étape 1`, contenu: `$a = \\dfrac{\\text{cov}(X,Y)}{V(X)} = \\dfrac{5{,}4}{2} = 2{,}7$.` },
            { name: `Étape 2`, contenu: `$b = \\bar{y} - a\\bar{x} = 20 - (2{,}7 \\times 3) = 20 - 8{,}1 = 11{,}9$.` },
            { name: `Étape 3`, contenu: `Prévision pour $x = 6$ : $y = 2{,}7 \\times 6 + 11{,}9 = 16{,}2 + 11{,}9 = 28{,}1$.` },
          ],
          reponse: `$(D) : y = 2{,}7x + 11{,}9$ ; le bénéfice prévisionnel à l'année $6$ est de $28{,}1$ millions de F CFA.`,
          conseil: `Avant de conclure, vérifie : $2{,}7 \\times 3 + 11{,}9 = 20 = \\bar{y}$. La droite passe bien par $G$.`,
          piege: `N'inverse pas la fraction : $a = \\text{cov}/V(X)$, pas $V(X)/\\text{cov}$.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Soit $(D) : y = ax + b$ la droite d'ajustement de $Y$ en $X$.
$a = \\dfrac{\\text{cov}(X,Y)}{V(X)} = \\dfrac{5{,}4}{2} = 2{,}7$. La droite passe par $G$, donc $b = \\bar{y} - a\\bar{x} = 20 - 2{,}7 \\times 3 = 11{,}9$.
$(D) : y = 2{,}7x + 11{,}9$. Pour $x = 6$ : $y = 2{,}7(6) + 11{,}9 = 28{,}1$.
Le bénéfice prévisionnel à l'année $6$ est de $28{,}1$ millions de F CFA.

*[Barème type BAC : $a$ = 0,5 pt — $b$ = 0,5 pt — équation = 0,5 pt — prévision = 1 pt — Total : 2,5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 2 — Les deux droites d'ajustement.** On reprend la série du Module 2 : $\\bar{x} = 5$, $\\bar{y} = 6$, $\\text{cov}(X,Y) = 6$, $V(X) = 5$, $V(Y) = 7{,}5$. **1.** Détermine la droite de $Y$ en $X$. **2.** Détermine la droite de $X$ en $Y$. **3.** Vérifie qu'elles se croisent en $G$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `On demande les deux droites : attention au dénominateur de chacune.` },
            { name: `Étape 1 — $Y$ en $X$`, contenu: `$a = \\dfrac{6}{5} = 1{,}2$ et $b = 6 - 1{,}2 \\times 5 = 0$. Donc $(D_1) : y = 1{,}2x$.` },
            { name: `Étape 2 — $X$ en $Y$`, contenu: `$a' = \\dfrac{6}{7{,}5} = 0{,}8$ et $b' = \\bar{x} - a'\\bar{y} = 5 - 0{,}8 \\times 6 = 0{,}2$. Donc $(D_2) : x = 0{,}8y + 0{,}2$.` },
            { name: `Étape 3 — Intersection`, contenu: `Sur $(D_1)$ : pour $x = 5$, $y = 1{,}2 \\times 5 = 6$. Sur $(D_2)$ : pour $y = 6$, $x = 0{,}8 \\times 6 + 0{,}2 = 5$. Les deux passent par $G(5 ; 6)$.` },
          ],
          reponse: `$(D_1) : y = 1{,}2x$ et $(D_2) : x = 0{,}8y + 0{,}2$ se croisent en $G(5 ; 6)$.`,
          conseil: `Garde bien les deux dénominateurs séparés : $V(X)$ pour $D_1$, $V(Y)$ pour $D_2$.`,
          piege: `Ne mélange pas les formes : $(D_1)$ s'écrit en $y = \\ldots$, $(D_2)$ en $x = \\ldots$.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Droite de $Y$ en $X$ : $a = \\dfrac{\\text{cov}(X,Y)}{V(X)} = \\dfrac{6}{5} = 1{,}2$ ; $b = \\bar{y} - a\\bar{x} = 0$. Donc $(D_1) : y = 1{,}2x$.
Droite de $X$ en $Y$ : $a' = \\dfrac{\\text{cov}(X,Y)}{V(Y)} = \\dfrac{6}{7{,}5} = 0{,}8$ ; $b' = \\bar{x} - a'\\bar{y} = 0{,}2$. Donc $(D_2) : x = 0{,}8y + 0{,}2$.
$G(5 ; 6)$ vérifie les deux équations : les droites se coupent en $G$.

*[Barème type BAC : $D_1$ = 1 pt — $D_2$ = 1 pt — intersection en $G$ = 1 pt — Total : 3 pts]*`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-a',
          pf: `Grand Frère, et si le sujet ne me donne ni la covariance ni la variance directement ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-b',
          gf: `Alors ton tableau à $5$ colonnes du Module 2 est ton meilleur ami, Champion(ne). Si tu l'as fait proprement, toutes les sommes sont déjà là : tu n'as qu'à piocher.`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Pioche dans tes acquis, vérifie toujours par $G$. Réponses finales seulement.

- **Exercice 1.** $\\text{cov}(X,Y) = 8$, $V(X) = 4$, $G(2 ; 10)$. Donne $(D)$ de $Y$ en $X$. *(Réponse : $a = 2$, $b = 6$, donc $y = 2x + 6$.)*
- **Exercice 2.** Avec la droite $y = 2x + 6$, prévois $y$ pour $x = 7$. *(Réponse : $y = 20$.)*
- **Exercice 3.** $\\text{cov}(X,Y) = 9$, $V(Y) = 6$, $G(4 ; 5)$. Donne $(D)$ de $X$ en $Y$. *(Réponse : $a' = 1{,}5$, $b' = -3{,}5$, donc $x = 1{,}5y - 3{,}5$.)*`,
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
            `La **droite des moindres carrés** est la meilleure droite d'ajustement du nuage.`,
            `📘 Vocabulaire officiel : ajustement de $Y$ en $X$, de $X$ en $Y$, point d'intersection $G$.`,
            `$Y$ en $X$ : $a = \\dfrac{\\text{cov}(X,Y)}{V(X)}$, $b = \\bar{y} - a\\bar{x}$. $X$ en $Y$ : dénominateur $V(Y)$.`,
            `Les deux droites passent par $G$ : c'est ton contrôle systématique.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m3',
          titre: `Fil rouge`,
          contenu: `La droite des moindres carrés est la méthode reine. Mais le programme connaît une seconde méthode d'ajustement, plus géométrique, qui partage le nuage en deux groupes : les droites de Mayer. C'est le Module 4.`,
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
            `Je connais la pente de $Y$ en $X$ : $a = \\dfrac{\\text{cov}(X,Y)}{V(X)}$.`,
            `Je sais calculer $b$ grâce aux coordonnées de $G$.`,
            `J'utilise le vocabulaire officiel (ajustement $Y/X$, $X/Y$, intersection en $G$).`,
            `Je vérifie mon équation en remplaçant $x$ par $\\bar{x}$.`,
            `Je sais faire une prévision en remplaçant $x$ par une nouvelle valeur.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m3',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Direction le Module 4, la méthode de Mayer.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et le ⑤ La Descente.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel.`,
          ],
        },
      ],
    },
  ],
};
