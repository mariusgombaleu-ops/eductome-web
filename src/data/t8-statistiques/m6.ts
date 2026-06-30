import { Chapitre } from '../../types/course';

export const chapitreM6: Chapitre = {
  id: 't8-m6',
  titre: `Module 6 — Ajustement par Changement de Variable`,
  duree: 26,
  niveau: 'BAC',
  xpGain: 30,
  objectifs: [
    `Reconnaître un nuage non affine (courbe) qui résiste à la droite`,
    `Poser un changement de variable, en général $Z = \\ln y$`,
    `Énoncer la démarche officielle du changement de variable`,
    `Ajuster la série transformée $(x ; Z)$ par les moindres carrés`,
    `Revenir à $y$ pour faire une prévision sur le modèle de départ`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, j'ai tracé mon nuage et là... ce n'est pas une droite du tout ! Ça monte en courbe, de plus en plus vite. Mes outils de droite ne servent plus à rien ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Au contraire, Champion(ne), c'est là qu'on devient malin ! Quand le nuage est courbe, on ne jette pas nos outils : on transforme les données pour redresser la courbe en droite. La baguette magique, c'est le logarithme $\\ln$. On pose $Z = \\ln y$, et souvent le nuage $(x ; Z)$ devient une belle droite. On applique alors tout ce qu'on a appris, puis on revient à $y$. C'est le dernier module, et le plus astucieux.`,
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
          contenu: `Imagine la page Facebook d'EDUCTOME à ses débuts. Le premier mois, $2$ abonnés. Le deuxième, $6$. Le troisième, $18$. Le quatrième, $54$. Tu vois le truc : ça ne monte pas d'un nombre fixe, ça **triple** à chaque fois. Sur le graphique, le nuage s'envole vers le ciel en une courbe de plus en plus raide. Impossible d'y coller une droite : elle serait fausse partout.

Voici l'astuce du grand frère. Au lieu de regarder le nombre d'abonnés, regarde son **logarithme**. Le logarithme a un super pouvoir : il transforme une multiplication en addition. Donc une croissance qui *triple* (multiplication par $3$) devient une croissance qui *avance d'un pas constant* (addition de $\\ln 3$). Et une avancée à pas constant, ça, c'est une droite !

Concrètement, tu crées une nouvelle variable $Z = \\ln y$. Tu refais ton nuage avec $(x ; Z)$ : surprise, les points s'alignent. Tu appliques alors la droite des moindres carrés sur $(x ; Z)$, exactement comme au Module 3. Puis, à la fin, tu reviens en arrière pour exprimer $y$. La courbe rebelle a été domptée.`,
        },
        {
          type: 'figure',
          id: 'fig-m6-1',
          src: '/images/t8/fig_M6_1.png',
          legende: `Une croissance qui triple : le nuage est courbe, pas droit.`,
          alt: `Un nuage qui s'envole en courbe exponentielle.`,
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
          contenu: `On traduit l'astuce du logarithme en symboles.

- La courbe qui s'envole → modèle non affine $y = b \\cdot a^x$
- La baguette magique → $Z = \\ln y$
- Le nuage redressé → la série $(x ; Z)$ devient affine
- Le retour à $y$ → $y = e^Z$`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène des abonnés`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`La croissance qui triple`, `$y = b \\cdot a^x$`, `Modèle non affine (courbe)`],
            [`On prend le logarithme`, `$Z = \\ln y$`, `Nouvelle variable transformée`],
            [`Le nuage se redresse`, `$(x ; Z)$ affine`, `On peut ajuster par une droite`],
            [`On revient en arrière`, `$y = e^Z$`, `Prévision sur le modèle d'origine`],
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
          contenu: `Champion(ne), tu as l'image du nuage redressé. Voici la démarche en mots officiels.

**Définition formelle.** Lorsqu'un nuage $(x ; y)$ n'est pas linéaire mais que la série $(x ; Z)$ avec $Z = \\ln y$ l'est, on procède par **changement de variable** : on ajuste $Z$ en $x$ par la droite des moindres carrés, $Z = ax + b$, puis on revient à $y$ par $y = e^{ax + b}$.

**En langage courant.** On transforme une variable pour redresser la courbe en droite, on ajuste, puis on revient.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Changement de variable** — poser $Z = \\ln y$ (ou une autre transformation).
- **Série transformée** — la nouvelle série $(x ; Z)$.
- **Ajustement affine de la série transformée** — droite $Z = ax + b$.
- **Retour à la variable initiale** — $y = e^{ax + b}$.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend : *« On pose $Z = \\ln y$ ; la série $(x ; Z)$ est ajustée par $Z = ax + b$, d'où $y = e^{ax+b}$. »*. Le retour à $y$ rapporte les derniers points.`,
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
          titre: `Règle d'Or — L'ajustement par changement de variable`,
          contenu: `Pour un modèle de la forme $y = b \\cdot a^x$ (ou $y = B e^{Ax}$) :

1. Poser $Z = \\ln y$ et calculer les $Z_i$.
2. Ajuster $(x ; Z)$ par les moindres carrés : $Z = a x + b$.
3. Revenir : $y = e^{a x + b}$.`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Toute ta méthode du Module 3 se réapplique telle quelle à la série $(x ; Z)$. Tu connais déjà le plus dur.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Ne calcule pas la droite sur $(x ; y)$ : tout le sens du module est de travailler sur $(x ; Z)$. Et n'oublie pas le retour $y = e^Z$.`,
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
          contenu: `Le sujet dit « le nuage n'est pas linéaire », « on pose $Z = \\ln y$ », ou donne un tableau de $Z$ déjà calculé : tu es ici. Le travail se fait sur la série transformée.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Si l'énoncé demande...`, `Alors l'action est...`],
          rows: [
            [`De calculer les $Z_i$`, `Appliquer $Z_i = \\ln(y_i)$ pour chaque valeur.`],
            [`D'ajuster la série transformée`, `Faire les moindres carrés sur $(x ; Z)$ : $Z = ax + b$.`],
            [`De revenir au modèle initial`, `Écrire $y = e^{ax + b}$.`],
            [`De prévoir une valeur`, `Calculer $Z$ pour le $x$ voulu, puis $y = e^{Z}$.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure`,
          contenu: `**Étape 1.** Construis le tableau des $Z_i = \\ln(y_i)$ (arrondis à $10^{-2}$).

**Étape 2.** Calcule $\\bar{x}$, $\\bar{Z}$, $\\text{cov}(x,Z)$ et $V(x)$.

**Étape 3.** Obtiens $a = \\dfrac{\\text{cov}(x,Z)}{V(x)}$ et $b = \\bar{Z} - a\\bar{x}$, donc $Z = ax + b$.

**Étape 4.** Reviens : $y = e^{ax + b}$, et fais la prévision demandée.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `La série $(x ; Z)$ doit être fortement corrélée ($|r|$ proche de $1$). Si ce n'est pas le cas, le changement de variable $\\ln$ n'était pas le bon.`,
        },
        {
          type: 'figure',
          id: 'fig-m6-2',
          src: '/images/t8/fig_M6_2.png',
          legende: `Le logarithme transforme la courbe en droite.`,
          alt: `À gauche le nuage courbe, à droite le nuage redressé par Z = ln y.`,
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
            [`🔴 BAC`, `Changement de variable complet`, `Nuage courbe, on pose $Z = \\ln y$`, `Type 1`],
            [`🟡 MOYEN`, `Retour et prévision`, `On donne $Z = ax+b$, on demande $y$`, `Type 2`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 1 — La page qui triple.** Le nombre d'abonnés $y$ d'une page sur $4$ mois (rang $x$) : $x_i : 1 ; 2 ; 3 ; 4$ et $y_i : 2 ; 6 ; 18 ; 54$. **1.** On pose $Z = \\ln y$. Calcule les $Z_i$ (arrondis à $10^{-2}$). **2.** Détermine la droite d'ajustement $Z = ax + b$. **3.** Exprime $y$ en fonction de $x$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Croissance qui triple : nuage courbe, on passe par $Z = \\ln y$.` },
            { name: `Étape 1`, contenu: `$Z_i = \\ln(y_i)$ : $\\ln 2 \\approx 0{,}69$ ; $\\ln 6 \\approx 1{,}79$ ; $\\ln 18 \\approx 2{,}89$ ; $\\ln 54 \\approx 3{,}99$.` },
            { name: `Étape 2`, contenu: `$\\bar{x} = 2{,}5$ ; $\\bar{Z} = \\dfrac{0{,}69 + 1{,}79 + 2{,}89 + 3{,}99}{4} = 2{,}34$. $\\text{cov}(x,Z) = 7{,}225 - 2{,}5 \\times 2{,}34 = 1{,}375$. $V(x) = 7{,}5 - 6{,}25 = 1{,}25$. $a = \\dfrac{1{,}375}{1{,}25} = 1{,}1$ ; $b = 2{,}34 - 1{,}1 \\times 2{,}5 = -0{,}41$. Donc $Z = 1{,}1x - 0{,}41$.` },
            { name: `Étape 3`, contenu: `Retour : $y = e^{1{,}1x - 0{,}41}$.` },
          ],
          reponse: `$Z = 1{,}1x - 0{,}41$, d'où $y = e^{1{,}1x - 0{,}41}$.`,
          conseil: `Garde tous tes $Z_i$ avec $2$ décimales : un arrondi trop brutal décale $a$ et $b$.`,
          piege: `Ne fais surtout pas les moindres carrés sur $(x ; y)$ ; c'est sur $(x ; Z)$ que tout se joue.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `On pose $Z = \\ln y$. Les valeurs transformées sont $Z_i \\approx 0{,}69 ; 1{,}79 ; 2{,}89 ; 3{,}99$.
$\\bar{x} = 2{,}5$, $\\bar{Z} = 2{,}34$, $\\text{cov}(x,Z) = 1{,}375$, $V(x) = 1{,}25$.
$a = \\dfrac{\\text{cov}(x,Z)}{V(x)} = 1{,}1$ et $b = \\bar{Z} - a\\bar{x} = -0{,}41$, d'où $Z = 1{,}1x - 0{,}41$.
En revenant à la variable initiale : $y = e^{1{,}1x - 0{,}41}$.

*[Barème type BAC : $Z_i$ = 0,5 pt — cov & $V$ = 1 pt — $a$ et $b$ = 1 pt — retour à $y$ = 0,5 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Prévoir avec le modèle transformé.** On garde $Z = 1{,}1x - 0{,}41$, soit $y = e^{1{,}1x - 0{,}41}$. Estime le nombre d'abonnés au mois de rang $5$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `On calcule $Z$ pour $x = 5$, puis $y = e^Z$.` },
            { name: `Étape 1`, contenu: `$Z = 1{,}1 \\times 5 - 0{,}41 = 5{,}5 - 0{,}41 = 5{,}09$.` },
            { name: `Étape 2`, contenu: `$y = e^{5{,}09} \\approx 162$.` },
          ],
          reponse: `Environ $162$ abonnés au mois de rang $5$, sous réserve que la tendance se maintienne.`,
          conseil: `Vérifie la cohérence : la suite $2, 6, 18, 54$ triple, donc le mois $5$ devrait avoisiner $54 \\times 3 = 162$. C'est cohérent.`,
          piege: `N'oublie pas le retour : la réponse est $y = e^Z$, pas $Z$ lui-même.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Pour $x = 5$ : $Z = 1{,}1(5) - 0{,}41 = 5{,}09$.
On revient à la variable initiale : $y = e^{5{,}09} \\approx 162$.
On peut estimer environ $162$ abonnés au mois de rang $5$, sous réserve que la tendance se maintienne.

*[Barème type BAC : calcul de $Z$ = 0,5 pt — retour $y = e^Z$ = 1 pt — réserve = 0,5 pt — Total : 2 pts]*`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-a',
          pf: `Grand Frère, pourquoi on prend $\\ln$ et pas autre chose ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-b',
          gf: `Parce que $\\ln$ transforme les multiplications en additions, Champion(ne). Une croissance qui multiplie (exponentielle) devient une croissance qui additionne (droite). C'est exactement le pont avec le Tome 5 sur le logarithme : tout se tient !`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Pose $Z = \\ln y$, travaille sur $(x ; Z)$, reviens à $y$. Réponses finales seulement.

- **Exercice 1.** $y = 8$, donne $Z = \\ln y$ (arrondi à $10^{-2}$). *(Réponse : $Z \\approx 2{,}08$.)*
- **Exercice 2.** $Z = 0{,}5x + 1$. Donne $y$ en fonction de $x$. *(Réponse : $y = e^{0{,}5x + 1}$.)*
- **Exercice 3.** Avec $y = e^{0{,}5x + 1}$, estime $y$ pour $x = 4$. *(Réponse : $y = e^{3} \\approx 20{,}1$.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m6',
          titre: `À retenir`,
          contenu: [
            `Quand le nuage est **courbe**, on le redresse par un **changement de variable** $Z = \\ln y$.`,
            `📘 Vocabulaire officiel : changement de variable, série transformée, ajustement affine de $(x ; Z)$, retour à la variable initiale.`,
            `On ajuste $Z = ax + b$ par les moindres carrés, puis $y = e^{ax+b}$.`,
            `C'est le pont direct avec le logarithme du Tome 5.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m6',
          titre: `Fil rouge`,
          contenu: `Tu tiens maintenant l'arsenal complet des statistiques à deux variables : nuage, point moyen, covariance, corrélation, deux méthodes d'ajustement, prévisions et modèles non affines. Direction la Salle d'Entraînement, où l'on enchaîne $10$ sujets BAC pour tout verrouiller.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m6',
          titre: `Auto-évaluation — Module 6`,
          contenu: [
            `Je reconnais un nuage courbe qui ne se prête pas à une droite.`,
            `Je sais poser $Z = \\ln y$ et calculer la série transformée.`,
            `J'emploie le vocabulaire officiel (changement de variable, série transformée, retour).`,
            `Je sais ajuster $(x ; Z)$ par les moindres carrés.`,
            `Je reviens toujours à $y = e^{ax+b}$ pour la prévision.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m6',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Tu as plié le cours du Tome 8. Cap sur la Salle d'Entraînement.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et le ⑤ La Descente.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel.`,
          ],
        },
      ],
    },
  ],
};
