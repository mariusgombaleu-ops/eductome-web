import { Chapitre } from '../../types/course';

export const chapitreM2: Chapitre = {
  id: 't5-m2',
  titre: `Module 2 — Applications du Logarithme`,
  duree: 26,
  niveau: 'BASE',
  xpGain: 25,
  objectifs: [
    `Dériver une fonction de la forme $\\ln u$ et en déduire son sens de variation`,
    `Reconnaître et calculer une primitive de la forme $\\dfrac{u'}{u}$`,
    `Énoncer la dérivée de $\\ln u$ et la primitive associée avec le vocabulaire officiel attendu au BAC`,
    `Résoudre une équation ou une inéquation contenant des logarithmes`,
    `Isoler un exposant dans un problème de seuil du type $q^{\\,n} > k$`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, le logarithme c'est joli, mais à quoi ça sert vraiment dans un sujet ? Et puis tu m'avais promis qu'on règlerait enfin le seuil $1{,}05^{\\,n} > 2$ du Tome 4. Toujours pas vu venir, hein…`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Aujourd'hui je tiens ma promesse, Champion(ne). Le logarithme, c'est un couteau suisse à trois lames. Première lame : il sait **dériver** des fonctions emboîtées comme $\\ln(x^2+1)$. Deuxième lame : il fait apparaître des **primitives** qu'on ne savait pas calculer. Troisième lame : il **décroche les exposants** pour résoudre tes seuils. On affûte les trois lames une par une, et à la fin, ton $1{,}05^{\\,n} > 2$ tombe en deux lignes.`,
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
          contenu: `Pense au prix du kilo de cacao au marché. Une semaine, il passe de $1\\,000$ F à $1\\,100$ F : il a pris $100$ F. Une autre semaine, il passe de $5\\,000$ F à $5\\,100$ F : encore $100$ F. Sur le papier, même hausse. Mais ton porte-monnaie ne ressent pas du tout la même chose.

Pourquoi ? Parce que la première hausse représente $10\\,\\%$ du prix, alors que la seconde n'en représente que $2\\,\\%$. Ce qui compte vraiment, ce n'est pas la hausse brute en francs, c'est la **hausse relative**, le pourcentage par rapport au prix de départ.

Eh bien le logarithme est l'outil exact qui mesure cette vitesse relative. *Quand tu dérives le logarithme d'une grandeur, tu n'obtiens pas sa vitesse brute, mais sa vitesse en proportion d'elle-même : c'est tout le sens de la formule $(\\ln u)' = \\dfrac{u'}{u}$.*`,
        },
        {
          type: 'figure',
          id: 'fig-m2-1',
          src: '/images/t5/fig_M2_1.png',
          legende: `Même hausse brute de 100 F, mais vitesse relative très différente : voilà ce que mesure $u'/u$.`,
          alt: `Deux hausses de 100 F qui ne pèsent pas pareil en proportion.`,
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
          contenu: `Traduisons l'histoire du prix du cacao en symboles.

- **Le prix au fil du temps** → une fonction strictement positive $u(x)$.
- **La hausse brute** → la dérivée ordinaire $u'(x)$.
- **La hausse relative (en pourcentage)** → le quotient $\\dfrac{u'(x)}{u(x)}$.
- **Suivre le logarithme du prix** → dériver $\\ln\\big(u(x)\\big)$, ce qui donne exactement $\\dfrac{u'}{u}$.`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène du marché`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Le prix, toujours positif`, `$u(x) > 0$`, `La condition pour écrire $\\ln u$.`],
            [`La hausse brute`, `$u'(x)$`, `La dérivée ordinaire du prix.`],
            [`La hausse relative`, `$\\dfrac{u'(x)}{u(x)}$`, `La vitesse en proportion du prix.`],
            [`Dériver le logarithme du prix`, `$(\\ln u)' = \\dfrac{u'}{u}$`, `La dérivée de $\\ln u$ est la hausse relative.`],
            [`Remonter de la hausse relative au logarithme`, `$\\displaystyle\\int \\dfrac{u'}{u}\\,dx = \\ln|u| + C$`, `La primitive cachée sous la forme $u'/u$.`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `Ces deux formules méritent leur cadre officiel. Habillons-les dans le langage du BAC.`,
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
          contenu: `Champion(ne), tu as l'image de la hausse relative. La copie attend la formulation rigoureuse.

**Définition formelle.** Soit $u$ une fonction dérivable et **strictement positive** sur un intervalle $I$. Alors la fonction $\\ln u$ est dérivable sur $I$ et, pour tout $x \\in I$ : $(\\ln u)'(x) = \\dfrac{u'(x)}{u(x)}$. Réciproquement, si $u$ ne s'annule pas sur $I$, une primitive de $\\dfrac{u'}{u}$ sur $I$ est $x \\mapsto \\ln|u(x)|$.

**En langage courant.** Dériver le logarithme d'une grandeur revient à diviser sa vitesse par elle-même : on mesure une variation relative.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Forme $\\dfrac{u'}{u}$** — l'expression à repérer pour dériver $\\ln u$ ou pour intégrer.
- **Condition $u > 0$** — indispensable pour dériver $\\ln u$ ; pour la primitive, on écrit $\\ln|u|$.
- **Primitive** — une fonction dont la dérivée redonne l'expression de départ.
- **Inéquation logarithmique** — une comparaison qu'on résout grâce à la stricte croissance de $\\ln$.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend, dans un calcul de primitive, la phrase : *« On reconnaît une expression de la forme $\\dfrac{u'}{u}$, dont une primitive est $\\ln|u|$. »* C'est la clé d'identification qui rapporte les points.`,
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
          titre: `Règle d'Or — Dériver et intégrer avec le logarithme`,
          contenu: `Soit $u$ dérivable et strictement positive sur $I$.
$$(\\ln u)' = \\dfrac{u'}{u} \\qquad \\text{et} \\qquad \\int \\dfrac{u'(x)}{u(x)}\\,dx = \\ln|u(x)| + C$$`,
        },
        {
          type: 'text',
          id: 'b10',
          contenu: `**Résolution d'un seuil.** Pour $q > 1$ et $k > 0$, l'inéquation $q^{\\,n} > k$ équivaut, en appliquant le logarithme (strictement croissant), à :
$$n\\ln q > \\ln k \\iff n > \\dfrac{\\ln k}{\\ln q}.$$`,
        },
        {
          type: 'tip',
          id: 'tip11',
          titre: `Conseil du Grand Frère`,
          contenu: `Pour les équations, commence **toujours** par poser l'ensemble de validité (chaque quantité sous un $\\ln$ doit être $> 0$), résous, puis **vérifie** que tes solutions appartiennent bien à cet ensemble. Une solution hors domaine est à rejeter.`,
        },
        {
          type: 'warning',
          id: 'warn12',
          titre: `Piège à éviter`,
          contenu: `Pour une primitive, n'oublie pas la valeur absolue : $\\displaystyle\\int \\dfrac{1}{x}\\,dx = \\ln|x| + C$, pas $\\ln x + C$, sauf si l'intervalle est entièrement dans $\\left]\\,0\\ ;\\ +\\infty\\,\\right[$.`,
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
          contenu: `Repère la lame à utiliser : « dériver / sens de variation » → applique $\\dfrac{u'}{u}$ ; « primitive / aire » → cherche la forme $\\dfrac{u'}{u}$ ; « résoudre / à partir de quel rang » → équation ou seuil avec logarithme.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Si tu vois…`, `Ce que tu fais`],
          rows: [
            [`$\\ln$ d'une expression à dériver`, `Pose $u$, calcule $u'$, écris $\\dfrac{u'}{u}$ (Outil 1 du Socle).`],
            [`Une fraction $\\dfrac{u'}{u}$ à intégrer`, `Reconnais la forme et écris $\\ln|u| + C$.`],
            [`$\\ln A = \\ln B$`, `Pose $A>0$ et $B>0$, puis résous $A = B$.`],
            [`$q^{\\,n} > k$ (un exposant inconnu)`, `Applique le logarithme : $n > \\dfrac{\\ln k}{\\ln q}$.`],
            [`Une équation mêlant plusieurs $\\ln$`, `Regroupe en un seul $\\ln$, puis identifie les arguments.`],
          ],
        },
        {
          type: 'text',
          id: 'b14',
          titre: `La Procédure (résoudre une équation logarithmique)`,
          contenu: `**Étape 1.** Pose l'ensemble de validité : chaque quantité sous un $\\ln$ doit être strictement positive.

**Étape 2.** Regroupe les logarithmes en un seul, des deux côtés, avec les propriétés du Module 1.

**Étape 3.** Identifie les arguments : $\\ln A = \\ln B \\iff A = B$, puis résous l'équation obtenue.

**Étape 4.** Vérifie que chaque solution appartient à l'ensemble de validité, et conclus.`,
        },
        {
          type: 'tip',
          id: 'tip15',
          titre: `La Vérification`,
          contenu: `- **Solution dans le domaine** : remplace chaque solution dans les conditions de validité.
- **Contrôle numérique** : pour un seuil, teste le rang trouvé et le rang juste avant.`,
        },
        {
          type: 'text',
          id: 'b-code',
          titre: `💻 Le Coin du Code — Résoudre une équation par dichotomie`,
          contenu: `Certaines équations comme $\\ln x + x - 3 = 0$ n'ont pas de solution exacte avec nos formules : impossible d'isoler $x$. Au BAC, on prouve qu'une solution existe (avec le théorème des valeurs intermédiaires), puis on l'**approche**. Voici comment une machine la coince entre deux bornes, par dichotomie.

\`\`\`python
def dichotomie(f, a, b, precision):
    # f change de signe entre a et b : une solution est piegee dedans
    while b - a > precision:
        m = (a + b) / 2        # milieu de l'intervalle
        if f(a) * f(m) <= 0:   # la solution est dans [a ; m]
            b = m
        else:                  # la solution est dans [m ; b]
            a = m
    return (a + b) / 2

from math import log
g = lambda x: log(x) + x - 3
print(round(dichotomie(g, 1, 3, 1e-4), 4))
# -> 2.2079 : la solution approchee de ln(x) + x = 3
\`\`\`

💬 **Le message du Grand Frère.** Regarde la ruse, Champion(ne) : à chaque tour, on coupe l'intervalle en deux et on garde la moitié où la fonction change de signe. La solution est de plus en plus serrée, comme un étau. La machine ne « devine » rien : elle applique le théorème des valeurs intermédiaires en boucle, exactement comme toi au brouillon, mais sans se fatiguer.`,
        },
        {
          type: 'figure',
          id: 'fig-m2-2',
          src: '/images/t5/fig_M2_2.png',
          legende: `À chaque étape, l'intervalle est divisé par deux : la solution est piégée de plus en plus serré.`,
          alt: `Méthode de dichotomie coinçant la solution entre deux bornes successives.`,
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
            [`🟢 BASE`, `Dériver une fonction $\\ln u$`, `$\\ln$ d'un polynôme strictement positif`, `Type 1`],
            [`🟡 MOYEN`, `Calculer une primitive $\\dfrac{u'}{u}$`, `Une fraction dont le haut est la dérivée du bas`, `Type 2`],
            [`🔴 BAC`, `Résoudre un seuil $q^{\\,n} > k$`, `« À partir de quel rang / quelle année »`, `Type 3`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Dériver $\\ln u$.** Soit $f(x) = \\ln(x^2 + 1)$, définie sur $\\mathbb{R}$. Calcule $f'(x)$ et donne son signe.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Fonction $\\ln u$ avec $u(x) = x^2 + 1 > 0$ : on applique $(\\ln u)' = \\dfrac{u'}{u}$.` },
            { name: `Étape 1`, contenu: `$u(x) = x^2 + 1$, donc $u'(x) = 2x$.` },
            { name: `Étape 2`, contenu: `$f'(x) = \\dfrac{2x}{x^2 + 1}$.` },
            { name: `Conclusion`, contenu: `Le dénominateur est strictement positif, donc $f'(x)$ est du signe de $2x$ : $f$ est décroissante sur $\\left]\\,-\\infty\\ ;\\ 0\\,\\right]$ et croissante sur $\\left[\\,0\\ ;\\ +\\infty\\,\\right[$.` },
          ],
          reponse: `$f'(x) = \\dfrac{2x}{x^2 + 1}$ ; $f$ décroît sur $\\left]\\,-\\infty\\ ;\\ 0\\,\\right]$ puis croît sur $\\left[\\,0\\ ;\\ +\\infty\\,\\right[$.`,
          conseil: `Comme $x^2 + 1 > 0$ pour tout réel, $f$ est définie sur $\\mathbb{R}$ tout entier : pas de condition d'existence à poser ici.`,
          piege: `N'écris jamais $(\\ln u)' = \\dfrac{1}{u}$ : tu oublierais $u'$ au numérateur. La dérivée de l'intérieur ne se perd jamais.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `La fonction $u : x \\mapsto x^2 + 1$ est strictement positive et dérivable sur $\\mathbb{R}$, avec $u'(x) = 2x$. Donc $f'(x) = \\dfrac{u'(x)}{u(x)} = \\dfrac{2x}{x^2 + 1}$. Le dénominateur étant strictement positif, $f'(x)$ a le signe de $2x$ : $f$ décroît sur $\\left]\\,-\\infty\\ ;\\ 0\\,\\right]$ et croît sur $\\left[\\,0\\ ;\\ +\\infty\\,\\right[$.

*[Barème : calcul de $u'$ : 1 pt · dérivée $f'$ : 1 pt · signe + variations : 1 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Une primitive de la forme $\\dfrac{u'}{u}$.** Détermine une primitive sur $\\mathbb{R}$ de la fonction $h(x) = \\dfrac{2x}{x^2 + 1}$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `On reconnaît la forme $\\dfrac{u'}{u}$ avec $u(x) = x^2 + 1$ et $u'(x) = 2x$.` },
            { name: `Étape 1`, contenu: `$u(x) = x^2 + 1 > 0$ et $u'(x) = 2x$ : le numérateur est exactement $u'$.` },
            { name: `Étape 2`, contenu: `Une primitive de $\\dfrac{u'}{u}$ est $\\ln|u|$, soit ici $\\ln(x^2 + 1)$ (le contenu est positif).` },
          ],
          reponse: `$H(x) = \\ln(x^2 + 1) + C$, $C \\in \\mathbb{R}$.`,
          conseil: `Avant de te lancer, vérifie au brouillon si le numérateur est **exactement** la dérivée du dénominateur. S'il manque un coefficient, ajuste par une constante multiplicative.`,
          piege: `Ne confonds pas dériver et intégrer : ici on remonte de $\\dfrac{u'}{u}$ vers $\\ln|u|$. La forme $\\dfrac{u'}{u}$ est le pont entre les deux sens.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Posons $u(x) = x^2 + 1$ ; alors $u'(x) = 2x$ et $h(x) = \\dfrac{u'(x)}{u(x)}$. Comme $u$ est strictement positive sur $\\mathbb{R}$, une primitive de $h$ est $H(x) = \\ln(x^2 + 1) + C$, $C \\in \\mathbb{R}$.

*[Barème : identification $u, u'$ : 1,5 pt · reconnaissance de la forme : 1 pt · primitive : 1,5 pt — Total : 4 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 3 — Le seuil enfin résolu.** Un capital de $500\\,000$ F est placé à $5\\,\\%$ par an à intérêts composés. Le capital après $n$ années est $C_n = 500\\,000 \\times 1{,}05^{\\,n}$. À partir de quelle année le capital dépasse-t-il le double du capital initial ?`,
          etapes: [
            { name: `Diagnostic`, contenu: `On cherche le plus petit entier $n$ tel que $C_n > 1\\,000\\,000$, c'est-à-dire $1{,}05^{\\,n} > 2$. L'inconnue est en exposant : on applique le logarithme.` },
            { name: `Étape 1`, contenu: `$1{,}05^{\\,n} > 2 \\iff \\ln\\!\\left(1{,}05^{\\,n}\\right) > \\ln 2 \\iff n\\ln 1{,}05 > \\ln 2$.` },
            { name: `Étape 2`, contenu: `Comme $\\ln 1{,}05 > 0$, on divise sans changer le sens : $n > \\dfrac{\\ln 2}{\\ln 1{,}05} \\approx \\dfrac{0{,}693}{0{,}0488} \\approx 14{,}2$.` },
            { name: `Étape 3`, contenu: `Le plus petit entier qui convient est $n = 15$. Vérification : $1{,}05^{14} \\approx 1{,}98 < 2$ et $1{,}05^{15} \\approx 2{,}08 > 2$.` },
          ],
          reponse: `Le capital dépasse son double à partir de la **15ᵉ année**.`,
          conseil: `Voilà la promesse du Tome 4 tenue, Champion(ne) : le logarithme décroche l'exposant et le seuil tombe. C'est exactement le geste à reproduire dès qu'une inconnue se cache en hauteur.`,
          piege: `$n \\approx 14{,}2$ ne se garde pas tel quel : un nombre d'années est un entier. On arrondit à l'entier supérieur ($15$) et on vérifie les deux rangs voisins.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite`,
          contenu: `On cherche le plus petit entier $n$ tel que $1{,}05^{\\,n} > 2$. En appliquant le logarithme népérien, strictement croissant : $n\\ln 1{,}05 > \\ln 2$. Comme $\\ln 1{,}05 > 0$, $n > \\dfrac{\\ln 2}{\\ln 1{,}05} \\approx 14{,}2$. Le plus petit entier convenable est $n = 15$ ; on vérifie $1{,}05^{14} < 2 < 1{,}05^{15}$. Le capital dépasse son double à partir de la 15ᵉ année.

*[Barème : mise en inéquation : 1 pt · application du $\\ln$ : 1,5 pt · résolution : 1,5 pt · conclusion entière + vérification : 1 pt — Total : 5 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Repère la lame avant de calculer. Réponses finales seulement.

- **Exercice 1.** Dérive $f(x) = \\ln(3x + 2)$ sur $\\left]\\,-\\dfrac{2}{3}\\ ;\\ +\\infty\\,\\right[$. *(Réponse : $f'(x) = \\dfrac{3}{3x + 2}$.)*
- **Exercice 2.** Donne une primitive de $\\dfrac{1}{x}$ sur $\\left]\\,0\\ ;\\ +\\infty\\,\\right[$. *(Réponse : $\\ln x + C$.)*
- **Exercice 3.** Résous $\\ln x + \\ln(x - 1) = \\ln 6$. *(Réponse : domaine $x > 1$ ; $x(x-1) = 6 \\Rightarrow x = 3$, la racine $-2$ est rejetée.)*`,
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
            `$(\\ln u)' = \\dfrac{u'}{u}$ : dériver le logarithme d'une grandeur, c'est mesurer sa vitesse relative.`,
            `📘 Vocabulaire officiel : forme $\\dfrac{u'}{u}$, condition $u > 0$, primitive, inéquation logarithmique.`,
            `Une primitive de $\\dfrac{u'}{u}$ est $\\ln|u| + C$ : la valeur absolue protège le calcul.`,
            `Pour un seuil $q^{\\,n} > k$ : applique le logarithme, $n > \\dfrac{\\ln k}{\\ln q}$, puis arrondis à l'entier.`,
            `Toute équation logarithmique commence par l'ensemble de validité et finit par la vérification des solutions.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m2',
          titre: `Fil rouge`,
          contenu: `Tu domptes maintenant le logarithme dans tous ses usages. Mais souviens-toi de l'image du début : si $\\ln$ est le compteur qui ralentit, il existe une fonction miroir qui, elle, s'emballe — celle des bactéries du labo. C'est la réciproque exacte du logarithme. Comment passe-t-on de l'une à l'autre ? Quelle est sa dérivée, son signe, son allure ? Rendez-vous au Module 3 : la fonction exponentielle.`,
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
            `Je dérive une fonction $\\ln u$ avec la formule $\\dfrac{u'}{u}$ sans oublier $u'$.`,
            `J'emploie le vocabulaire officiel (forme $\\dfrac{u'}{u}$, primitive, inéquation logarithmique).`,
            `Je reconnais une primitive de la forme $\\dfrac{u'}{u}$ et j'écris $\\ln|u| + C$.`,
            `Je résous une équation logarithmique en posant le domaine et en vérifiant mes solutions.`,
            `Je sais isoler un exposant dans un seuil $q^{\\,n} > k$ avec le logarithme.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m2',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Les trois lames sont affûtées. Direction Module 3.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 3.`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : les deux hausses de 100 F qui ne pèsent pas pareil.`,
          ],
        },
      ],
    },
  ],
};
