import { Chapitre } from '../../types/course';

export const chapitreM5: Chapitre = {
  id: 't2-m5',
  titre: `Module 5 — L'Équation de la Tangente`,
  duree: 30,
  niveau: 'MOYEN',
  xpGain: 30,
  objectifs: [
    `Écrire l'équation de la tangente à $\\mathcal{C}_f$ en un point d'abscisse $x_0$ avec la formule d'or`,
    `Énoncer la définition de la tangente avec le vocabulaire exact du BAC`,
    `Trouver les points où la tangente est horizontale ou parallèle à une droite donnée`,
    `Vérifier si un point appartient à une tangente par substitution`,
    `Étudier la position de $\\mathcal{C}_f$ par rapport à sa tangente via le signe de $f(x) - T(x)$`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Le père, au Module 1 tu m'as dit que $f'(x_0)$ c'est la pente de la courbe en $x_0$. Et en Troisième j'ai appris qu'une droite avec une pente $p$ qui passe par un point, ça donne une équation. C'est pas ça, l'équation de la tangente ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Tu as mis le doigt dessus, Champion(ne). C'est exactement ça. Et c'est pour ça que ce module est un cadeau de points au BAC — la formule découle directement de ce que tu sais déjà. On va juste assembler les briques dans le bon ordre, et à la fin tu sauras même dire si la courbe passe au-dessus ou en dessous de sa tangente.`,
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
          contenu: `Imagine que tu es à bord d'un gbaka sur la route sinueuse qui grimpe vers **Man**, quelque part dans l'Ouest. La route monte et tourne sans arrêt — c'est ta fonction $f(x)$.

À un point précis du trajet — appelons-le $x_0$ — imagine que la route s'arrête net et se prolonge par une **rampe parfaitement droite**. Le gbaka ne suit plus la colline : il file tout droit sur la rampe, en gardant **exactement la direction** qu'il avait à l'instant $x_0$.

Cette rampe droite, c'est la **tangente** à la courbe au point $x_0$. Elle ne fait qu'effleurer la colline en ce point unique, puis repart en ligne droite avec la pente locale du véhicule. Écrire l'équation de la tangente, c'est juste trouver la formule mathématique de cette rampe.

Et juste après le point de contact, une question naturelle se pose : la vraie route passe-t-elle **au-dessus** ou **en dessous** de la rampe ? C'est exactement la *position de la courbe par rapport à la tangente* — on y reviendra à la fin.`,
        },
        {
          type: 'figure',
          id: 'fig-m5-1',
          src: '/images/t2/fig_M5_1.png',
          legende: `La rampe (tangente) effleure la colline en $M_0$ : sa pente est $f'(x_0)$.`,
          alt: `La rampe (tangente) effleure la colline en $M_0$ : sa pente est $f'(x_0)$.`,
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
          contenu: `Construisons la formule brique par brique, en repartant de ce que tu connais déjà :

- **La pente.** En Troisième, une droite a un coefficient directeur $p$. Pour notre tangente en $x_0$, cette pente est le nombre dérivé du Module 1 : $p = f'(x_0)$.
- **Le point d'ancrage.** La tangente touche la courbe en $x_0$. Ce point a pour coordonnées $(x_0\\ ;\\ f(x_0))$.
- **La formule générale de Troisième.** Une droite de pente $p$ passant par $(x_A\\ ;\\ y_A)$ a pour équation $y - y_A = p\\,(x - x_A)$.`,
        },
        {
          type: 'table',
          id: 'tbl5',
          headers: [`La brique connue`, `Sa traduction pour la tangente`],
          rows: [
            [`Coefficient directeur $p$`, `$p = f'(x_0)$ (le nombre dérivé)`],
            [`Point de passage $(x_A\\ ;\\ y_A)$`, `Point de contact $(x_0\\ ;\\ f(x_0))$`],
            [`Droite : $y - y_A = p(x - x_A)$`, `$y - f(x_0) = f'(x_0)(x - x_0)$`],
          ],
        },
        {
          type: 'text',
          id: 'b6',
          contenu: `En remplaçant les briques, on obtient $y - f(x_0) = f'(x_0)(x - x_0)$. On isole $y$, et la formule d'or apparaît.`,
        },
      ],
    },
    {
      id: 's-bac',
      titre: `📘 LANGAGE OFFICIEL DU BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b7',
          contenu: `Champion(ne), l'image de la rampe t'a donné l'intuition. Maintenant, ta copie doit parler comme le correcteur l'attend.

**Définition formelle.** Soit $f$ une fonction dérivable en $x_0$. La **tangente** à la courbe $\\mathcal{C}_f$ au point d'abscisse $x_0$ est la droite $(T)$ qui passe par le point de contact $M_0(x_0\\ ;\\ f(x_0))$ et dont le **coefficient directeur** est le nombre dérivé $f'(x_0)$. Son équation est $y = f'(x_0)(x - x_0) + f(x_0)$.

**En langage courant.** La tangente, c'est la droite qui « colle » à la courbe en un point : même hauteur ($f(x_0)$) et même pente ($f'(x_0)$) qu'elle.`,
        },
        {
          type: 'warning',
          id: 'warn8',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Point de contact** — le point $M_0(x_0\\ ;\\ f(x_0))$ où la tangente touche la courbe.
- **Coefficient directeur** — la pente de la tangente, égale à $f'(x_0)$.
- **Tangente horizontale** — tangente de pente nulle : $f'(x_0) = 0$.
- **Position relative** — place de la courbe par rapport à $(T)$, donnée par le **signe de $f(x) - T(x)$**.`,
        },
        {
          type: 'tip',
          id: 'tip9',
          titre: `À retenir`,
          contenu: `Le correcteur attend la justification du coefficient directeur : *« $(T)$ a pour coefficient directeur $f'(x_0)$ »*. Poser la formule sans nommer $f'(x_0)$ comme pente fait perdre des points.`,
        },
      ],
    },
    {
      id: 's4',
      titre: `④ LA RÈGLE`,
      blocs: [
        {
          type: 'rule',
          id: 'rule10',
          titre: `Règle d'Or — Équation de la tangente`,
          contenu: `Soit $f$ une fonction dérivable en $x_0$. L'équation de la tangente $(T)$ à $\\mathcal{C}_f$ au point d'abscisse $x_0$ est :

$$y = f'(x_0)(x - x_0) + f(x_0)$$

**Position de la courbe par rapport à $(T)$.**

- $f(x) - T(x) > 0$ sur un intervalle → $\\mathcal{C}_f$ est **au-dessus** de $(T)$.
- $f(x) - T(x) < 0$ sur un intervalle → $\\mathcal{C}_f$ est **en dessous** de $(T)$.
- $f(x) - T(x) = 0$ → la courbe **touche** ou **traverse** $(T)$ (au minimum au point de contact $x_0$).`,
        },
        {
          type: 'table',
          id: 'tbl11',
          titre: `Cas particuliers`,
          headers: [`Situation`, `Traduction algébrique`, `Conséquence`],
          rows: [
            [`Tangente horizontale (sommet/creux)`, `$f'(x_0) = 0$`, `$y = f(x_0)$ — droite horizontale`],
            [`Tangente parallèle à $y = ax + b$`, `$f'(x_0) = a$`, `Résoudre d'abord $f'(x) = a$ pour trouver $x_0$`],
          ],
        },
        {
          type: 'tip',
          id: 'tip12',
          titre: `Conseil du Grand Frère`,
          contenu: `Pour la position, calcule $f(x) - T(x)$ puis **factorise** : tu verras souvent apparaître $(x - x_0)^2$ ou $(x - x_0)^3$. Le signe se lit alors d'un coup d'œil.`,
        },
        {
          type: 'warning',
          id: 'warn13',
          titre: `Piège à éviter`,
          contenu: `Ne confonds pas $f(x_0)$ et $f'(x_0)$ : $f(x_0)$ est l'ordonnée du point de contact (elle va au **bout** de la formule), $f'(x_0)$ est la pente (elle va **devant** la parenthèse). Un échange des deux et toute la tangente est fausse.`,
        },
        {
          type: 'figure',
          id: 'fig-m5-2',
          src: '/images/t2/fig_M5_2.png',
          legende: `« Horizontale » : $f'(x)=0$.  « Parallèle à $(D)$ » : $f'(x)=a$, la pente de $(D)$.`,
          alt: `« Horizontale » : $f'(x)=0$.  « Parallèle à $(D)$ » : $f'(x)=a$, la pente de $(D)$.`,
        },
      ],
    },
    {
      id: 's5',
      titre: `⑤ LA DESCENTE`,
      blocs: [
        {
          type: 'text',
          id: 'b14',
          titre: `Le Diagnostic`,
          contenu: `Au BAC, la question sur la tangente arrive sous cinq formes. Lis les mots-clés de l'énoncé **avant** de calculer quoi que ce soit.`,
        },
        {
          type: 'table',
          id: 'tbl15',
          titre: `L'Arbre de décision`,
          headers: [`Si l'énoncé dit...`, `Le réflexe`, `Le but`],
          rows: [
            [`« Équation de la tangente en $x_0 = \\ldots$ »`, `Calculer $f(x_0)$ et $f'(x_0)$ séparément.`, `Appliquer la formule d'or.`],
            [`« Tangente horizontale »`, `Poser $f'(x) = 0$.`, `Trouver $x_0$, puis calculer $f(x_0)$.`],
            [`« Parallèle à $y = ax + b$ »`, `Poser $f'(x) = a$.`, `Trouver $x_0$, puis écrire l'équation.`],
            [`« $P(\\alpha\\ ;\\ \\beta)$ appartient à $(T)$ ? »`, `Écrire d'abord l'équation de $(T)$.`, `Remplacer $x$ par $\\alpha$, vérifier $y = \\beta$.`],
            [`« Position de $\\mathcal{C}_f$ par rapport à $(T)$ »`, `Étudier le signe de $f(x) - T(x)$.`, `Factoriser, puis conclure dessus/dessous.`],
          ],
        },
        {
          type: 'text',
          id: 'b16',
          titre: `La Procédure en 4 étapes`,
          contenu: `**Étape 1.** Calculer $f(x_0)$ — l'ordonnée du point de contact.

**Étape 2.** Calculer $f'(x_0)$ — la pente de la tangente.

**Étape 3.** Écrire $y = f'(x_0)(x - x_0) + f(x_0)$ — la formule posée proprement.

**Étape 4.** Développer et réduire — forme finale $y = ax + b$. (Pour une question de position, enchaîner sur le signe de $f(x) - T(x)$.)`,
        },
        {
          type: 'warning',
          id: 'warn17',
          titre: `La Vérification — contrôle obligatoire`,
          contenu: `Remplace $x$ par $x_0$ dans ton équation finale : tu dois retrouver **exactement** $f(x_0)$. Sinon, il y a une erreur de signe — reprends à l'étape 3. Pour la position, vérifie que $f(x) - T(x)$ s'annule bien en $x_0$ (la courbe touche toujours sa tangente au point de contact).`,
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
          headers: [`Niveau`, `Situation d'examen`, `Comment la reconnaître`, `Exercice-Type`],
          rows: [
            [`🟢 BASE`, `Tangente en un point donné — polynôme`, `On donne $x_0$ et $f$ polynôme.`, `ET-1`],
            [`🟡 MOYEN`, `Points à tangente horizontale`, `Mot-clé : « horizontale » → $f'(x) = 0$.`, `ET-2`],
            [`🟡 MOYEN`, `Tangente parallèle à une droite`, `Mot-clé : « parallèle » → $f'(x) = a$.`, `ET-3`],
            [`🔴 BAC`, `Fonction rationnelle + appartenance d'un point`, `Quotient de fonctions + point $P$ à tester.`, `ET-4`],
            [`🔴 BAC`, `Position de la courbe par rapport à $(T)$`, `« Étudier la position » → signe de $f(x) - T(x)$.`, `ET-5`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Tangente en un point donné.** Soit $f$ définie sur $\\mathbb{R}$ par $f(x) = x^3 - 2x + 1$. Déterminer l'équation de la tangente $(T)$ à $\\mathcal{C}_f$ au point d'abscisse $x_0 = 1$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Question directe — $x_0$ donné, polynôme. On déroule la procédure en 4 étapes.` },
            { name: `Étape 1`, contenu: `$f(1) = 1 - 2 + 1 = 0$.` },
            { name: `Étape 2`, contenu: `$f'(x) = 3x^2 - 2$, donc $f'(1) = 3 - 2 = 1$.` },
            { name: `Étape 3`, contenu: `$y = 1(x - 1) + 0$.` },
            { name: `Étape 4`, contenu: `$y = x - 1$.` },
          ],
          reponse: `$(T) : y = x - 1$.`,
          conseil: `$f(1) = 0$ simplifie la fin du calcul — la formule se réduit à $y = f'(1)(x-1)$. Repère ces cas dès le début pour gagner du temps.`,
          piege: `Ne confonds pas $f(1)$ et $f'(1)$ : $f(1)$ va au bout de la formule ($+f(x_0)$), $f'(1)$ va devant la parenthèse. Un échange et toute la tangente est fausse.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `La fonction $f$ est un polynôme, donc dérivable sur $\\mathbb{R}$, de dérivée $f'(x) = 3x^2 - 2$.

Pour $x_0 = 1$ : $f(1) = 1^3 - 2(1) + 1 = 0$ et $f'(1) = 3(1)^2 - 2 = 1$.

La tangente $(T)$ a pour coefficient directeur $f'(1) = 1$ et passe par le point de contact $(1\\ ;\\ 0)$ :
$$y = f'(1)(x - 1) + f(1) = 1(x - 1) + 0 \\quad\\Longrightarrow\\quad (T) : y = x - 1$$

*[Barème type BAC : $f(1)$ et $f'(1)$ corrects 0,5 pt · formule posée 0,5 pt · résultat final 0,5 pt — Total : 1,5 pt]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Points à tangente horizontale.** Soit $g$ définie sur $\\mathbb{R}$ par $g(x) = x^2 - 3x + 2$. Déterminer les coordonnées du point de $\\mathcal{C}_g$ où la tangente est horizontale, puis écrire l'équation de cette tangente.`,
          etapes: [
            { name: `Diagnostic`, contenu: `« Tangente horizontale » → réflexe immédiat : résoudre $g'(x) = 0$.` },
            { name: `Étape 1`, contenu: `$g'(x) = 2x - 3$.` },
            { name: `Étape 2`, contenu: `$g'(x) = 0 \\iff x = \\dfrac{3}{2}$.` },
            { name: `Étape 3`, contenu: `$g\\!\\left(\\dfrac{3}{2}\\right) = \\dfrac{9}{4} - \\dfrac{9}{2} + 2 = \\dfrac{9 - 18 + 8}{4} = -\\dfrac{1}{4}$.` },
          ],
          reponse: `Point de contact $A\\!\\left(\\dfrac{3}{2}\\ ;\\ -\\dfrac{1}{4}\\right)$ ; tangente horizontale $(T) : y = -\\dfrac{1}{4}$.`,
          conseil: `Une tangente horizontale a toujours la forme $y = \\text{constante}$ — pas de $x$ dans la réponse. Si tu vois un $x$, quelque chose cloche.`,
          piege: `Pour l'image en $\\dfrac{3}{2}$, réduis au dénominateur $4$ dès le départ : $\\left(\\dfrac{3}{2}\\right)^2 = \\dfrac{9}{4}$ et $3 \\times \\dfrac{3}{2} = \\dfrac{18}{4}$.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$g$ est dérivable sur $\\mathbb{R}$ et $g'(x) = 2x - 3$.

La tangente est horizontale si et seulement si $g'(x_0) = 0$ :
$$2x - 3 = 0 \\iff x_0 = \\dfrac{3}{2}$$

L'ordonnée du point de contact :
$$g\\!\\left(\\dfrac{3}{2}\\right) = \\left(\\dfrac{3}{2}\\right)^2 - 3 \\times \\dfrac{3}{2} + 2 = \\dfrac{9}{4} - \\dfrac{18}{4} + \\dfrac{8}{4} = -\\dfrac{1}{4}$$

Le point de contact est $A\\!\\left(\\dfrac{3}{2}\\ ;\\ -\\dfrac{1}{4}\\right)$ et l'équation de la tangente horizontale est $(T) : y = -\\dfrac{1}{4}$.

*[Barème type BAC : dérivée et $g'(x)=0$ posé 0,5 pt · $x_0 = \\dfrac{3}{2}$ 0,5 pt · point et équation 0,5 pt — Total : 1,5 pt]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 3 — Tangente parallèle à une droite.** Soit $h$ définie sur $\\mathbb{R}$ par $h(x) = 2x^2 + x$. Trouver l'abscisse $x_0$ du point de $\\mathcal{C}_h$ où la tangente est parallèle à la droite $(D) : y = 5x - 3$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `« Parallèle » → deux droites parallèles ont la même pente. Pente de $(D)$ : $5$. On résout $h'(x) = 5$.` },
            { name: `Étape 1`, contenu: `$h'(x) = 4x + 1$.` },
            { name: `Étape 2`, contenu: `$4x + 1 = 5 \\iff 4x = 4 \\iff x_0 = 1$.` },
          ],
          reponse: `L'abscisse du point de contact est $x_0 = 1$.`,
          conseil: `Si l'énoncé ne demande que l'abscisse, inutile d'écrire l'équation complète. Lis bien la question avant de calculer plus que nécessaire.`,
          piege: `La pente de $y = 5x - 3$ est $5$ — le coefficient devant $x$. L'ordonnée à l'origine $-3$ ne joue aucun rôle ici.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$h$ est dérivable sur $\\mathbb{R}$, de dérivée $h'(x) = 4x + 1$.

La tangente à $\\mathcal{C}_h$ est parallèle à $(D) : y = 5x - 3$ si et seulement si elles ont le même coefficient directeur :
$$h'(x_0) = 5 \\iff 4x_0 + 1 = 5 \\iff 4x_0 = 4 \\iff x_0 = 1$$

L'abscisse du point de contact est $x_0 = 1$.

*[Barème type BAC : argument sur l'égalité des pentes 0,5 pt · équation $h'(x)=5$ posée 0,5 pt · $x_0 = 1$ 0,5 pt — Total : 1,5 pt]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et4',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 4 — Fonction rationnelle + appartenance d'un point.** Soit $k$ définie sur $\\mathbb{R} \\setminus \\{1\\}$ par $k(x) = \\dfrac{x^2 + 1}{x - 1}$. (1) Déterminer l'équation de la tangente $(T)$ à $\\mathcal{C}_k$ au point d'abscisse $x_0 = 2$. (2) Montrer que le point $P(10\\ ;\\ -3)$ appartient à $(T)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Fraction rationnelle → règle du quotient pour la dérivée. Puis vérification d'appartenance par substitution.` },
            { name: `Étape 1`, contenu: `$k(2) = \\dfrac{4 + 1}{2 - 1} = 5$.` },
            { name: `Étape 2`, contenu: `$u = x^2+1$, $u' = 2x$ ; $v = x-1$, $v' = 1$ : $k'(x) = \\dfrac{2x(x-1) - (x^2+1)}{(x-1)^2} = \\dfrac{x^2 - 2x - 1}{(x-1)^2}$, donc $k'(2) = \\dfrac{4 - 4 - 1}{1} = -1$.` },
            { name: `Étape 3`, contenu: `$y = -1(x - 2) + 5 = -x + 7$.` },
            { name: `Étape 4 — Appartenance`, contenu: `$x = 10 \\Rightarrow y = -10 + 7 = -3$ ✓.` },
          ],
          reponse: `$(T) : y = -x + 7$, et $P(10\\ ;\\ -3) \\in (T)$.`,
          conseil: `Pour la question 2, une seule ligne suffit : remplace $x$ par $10$, calcule $y$, compare à $-3$. C'est une vérification, pas une recherche.`,
          piege: `Au numérateur de $k'(x)$ : le signe $-$ se distribue sur toute la parenthèse $(x^2+1)$, y compris le $+1$ qui devient $-1$ : $2x^2 - 2x - x^2 - 1 = x^2 - 2x - 1$.`,
        },
        {
          type: 'text',
          id: 'b-copie4',
          titre: `✍️ La Copie Parfaite`,
          contenu: `**(1)** La fonction $k$ est dérivable sur $\\mathbb{R} \\setminus \\{1\\}$.
$$k'(x) = \\dfrac{2x(x-1) - (x^2+1)}{(x-1)^2} = \\dfrac{x^2 - 2x - 1}{(x-1)^2}$$

Pour $x_0 = 2$ : $k(2) = \\dfrac{5}{1} = 5$ et $k'(2) = \\dfrac{4-4-1}{1} = -1$.

L'équation de $(T)$ : $y = k'(2)(x-2) + k(2) = -1(x-2) + 5$, soit $(T) : y = -x + 7$.

**(2)** Vérifions si $P(10\\ ;\\ -3) \\in (T)$. On remplace $x = 10$ dans l'équation de $(T)$ : $-10 + 7 = -3$. L'ordonnée obtenue est $-3$, c'est bien celle de $P$. Donc $P(10\\ ;\\ -3)$ appartient à $(T)$. $\\square$

*[Barème type BAC : dérivée juste 0,5 pt · équation de tangente 1 pt · vérification rigoureuse 1 pt — Total : 2,5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et5',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 5 — Position de la courbe par rapport à sa tangente.** Soit $f$ définie sur $\\mathbb{R}$ par $f(x) = x^3 - 3x^2 + 2$. (1) Déterminer l'équation de la tangente $(T)$ à $\\mathcal{C}_f$ au point d'abscisse $x_0 = 1$. (2) Étudier la position de $\\mathcal{C}_f$ par rapport à $(T)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `« Étudier la position » → après avoir trouvé $(T)$, on étudie le **signe de $f(x) - T(x)$**. On factorise pour conclure.` },
            { name: `Étape 1`, contenu: `$f(1) = 1 - 3 + 2 = 0$.` },
            { name: `Étape 2`, contenu: `$f'(x) = 3x^2 - 6x$, donc $f'(1) = 3 - 6 = -3$.` },
            { name: `Étape 3`, contenu: `$(T) : y = -3(x - 1) + 0 = -3x + 3$.` },
            { name: `Étape 4 — Position`, contenu: `$f(x) - T(x) = (x^3 - 3x^2 + 2) - (-3x + 3) = x^3 - 3x^2 + 3x - 1 = (x - 1)^3$. Le signe de $(x-1)^3$ est celui de $(x-1)$ : négatif sur $]-\\infty\\ ;\\ 1[$, positif sur $]1\\ ;\\ +\\infty[$.` },
          ],
          reponse: `$\\mathcal{C}_f$ est **en dessous** de $(T)$ sur $]-\\infty\\ ;\\ 1[$, **au-dessus** sur $]1\\ ;\\ +\\infty[$ ; la courbe **traverse** sa tangente en $x = 1$ (point d'inflexion).`,
          conseil: `Reconnais l'identité remarquable : $x^3 - 3x^2 + 3x - 1 = (x-1)^3$. Quand $f(x) - T(x)$ se factorise par une puissance de $(x - x_0)$, le point de contact est confirmé et le signe devient immédiat.`,
          piege: `Distribue bien le signe $-$ sur **toute** l'équation de $(T)$ : $-(-3x + 3) = +3x - 3$. Une erreur de signe ici fausse toute l'étude de position.`,
        },
        {
          type: 'text',
          id: 'b-copie5',
          titre: `✍️ La Copie Parfaite`,
          contenu: `**(1)** $f$ est un polynôme, dérivable sur $\\mathbb{R}$, de dérivée $f'(x) = 3x^2 - 6x$.

Pour $x_0 = 1$ : $f(1) = 1^3 - 3(1)^2 + 2 = 0$ et $f'(1) = 3(1)^2 - 6(1) = -3$.

L'équation de la tangente : $y = f'(1)(x - 1) + f(1) = -3(x - 1) + 0$, soit $(T) : y = -3x + 3$.

**(2)** Étudions le signe de la différence pour tout $x \\in \\mathbb{R}$ :
$$f(x) - T(x) = x^3 - 3x^2 + 2 - (-3x + 3) = x^3 - 3x^2 + 3x - 1 = (x - 1)^3$$`,
        },
        {
          type: 'table',
          id: 'pos-et5',
          titre: `Signe de $f(x) - T(x)$`,
          headers: [`$x$`, `$-\\infty$`, ``, `$1$`, ``, `$+\\infty$`],
          rows: [
            [`$f(x) - T(x)$`, ``, `$-$`, `$0$`, `$+$`, ``],
            [`Position de $\\mathcal{C}_f$`, ``, `dessous`, `contact`, `dessus`, ``],
          ],
        },
        {
          type: 'text',
          id: 'b-copie5b',
          contenu: `Ainsi $\\mathcal{C}_f$ est en dessous de $(T)$ sur $]-\\infty\\ ;\\ 1[$ et au-dessus sur $]1\\ ;\\ +\\infty[$. La courbe traverse sa tangente au point de contact $(1\\ ;\\ 0)$ : c'est un point d'inflexion. $\\square$

*[Barème type BAC : équation de $(T)$ 1 pt · calcul et factorisation de $f(x)-T(x)$ 1 pt · tableau de signe et conclusion 1 pt — Total : 3 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Résultats finaux seulement :

- **Exercice 1.** Soit $f(x) = 2x^2 - 3x + 1$. Équation de la tangente à $\\mathcal{C}_f$ en $x_0 = 2$. *(Réponse : $y = 5x - 7$.)*
- **Exercice 2.** Soit $g(x) = x^3 - 3x$. Abscisses des points où la tangente est horizontale. *(Réponse : $x_0 = 1$ et $x_0 = -1$, solutions de $g'(x) = 3x^2 - 3 = 0$.)*
- **Exercice 3.** Soit $f(x) = x^3$. Étudie la position de $\\mathcal{C}_f$ par rapport à sa tangente en $x_0 = 0$. *(Réponse : $(T) : y = 0$ ; $f(x) - T(x) = x^3$, donc courbe en dessous sur $]-\\infty\\ ;\\ 0[$, au-dessus sur $]0\\ ;\\ +\\infty[$.)*`,
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
            `La tangente est une **droite ordinaire** dont la pente est le nombre dérivé $f'(x_0)$ : tout découle de la formule de Troisième.`,
            `Le geste clé : calculer $f(x_0)$ et $f'(x_0)$ **séparément** au brouillon, puis assembler dans $y = f'(x_0)(x - x_0) + f(x_0)$.`,
            `📘 Vocabulaire officiel : point de contact, coefficient directeur, tangente horizontale, position relative.`,
            `La **position** de la courbe se lit dans le **signe de $f(x) - T(x)$** — pense à factoriser par une puissance de $(x - x_0)$.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m5',
          titre: `Fil rouge`,
          contenu: `On sait maintenant écrire la droite qui effleure la courbe en un point et dire de quel côté la courbe se range. Au **Module 6**, on attaque les deux derniers outils du programme : l'**Inégalité des Accroissements Finis** (encadrer une fonction sans la calculer) et la **dérivée de la fonction réciproque**. Des notions plus rares, mais qui font la différence entre une bonne note et une très bonne note. On va gâter le coin, Champion(ne) !`,
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
            `Je sais écrire l'équation de la tangente avec $y = f'(x_0)(x - x_0) + f(x_0)$, sans confondre $f(x_0)$ et $f'(x_0)$.`,
            `J'utilise le vocabulaire officiel (point de contact, coefficient directeur, position relative) dans ma rédaction.`,
            `J'ai le réflexe de poser $f'(x) = 0$ pour « horizontale » et $f'(x) = a$ pour « parallèle à $y = ax + b$ ».`,
            `Je sais étudier la position de la courbe par rapport à $(T)$ en factorisant le signe de $f(x) - T(x)$.`,
            `Je sais vérifier mon équation finale en remplaçant $x$ par $x_0$ pour retrouver $f(x_0)$.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m5',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Le coin est gâté. Direction Module 6 — le BAC est prévenu !`,
            `🟡 **3 ou 4** → Les formules sont là, mais les calculs de fractions ou de signes font trébucher. Relis la Vérification et refais l'Exercice-Type 5 posément.`,
            `🔴 **0 à 2** → Reprends l'analogie de la rampe vers Man au ② Le Réel. Visualise d'abord la droite qui effleure la colline avant de lui coller des chiffres. Faut pas gnan !`,
          ],
        },
      ],
    },
  ],
};
