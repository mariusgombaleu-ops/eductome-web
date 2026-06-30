import { Chapitre } from '../../types/course';

export const chapitreM4: Chapitre = {
  id: 't6-m4',
  titre: `Module 4 — Les formules trigonométriques`,
  duree: 28,
  niveau: 'MOYEN',
  xpGain: 30,
  objectifs: [
    `Calculer le cosinus ou le sinus d'un angle composé grâce aux formules d'addition`,
    `Utiliser les formules de duplication pour passer de l'angle $x$ à l'angle $2x$`,
    `Énoncer les formules d'addition, de duplication et de linéarisation avec le vocabulaire officiel du BAC`,
    `Linéariser $\\cos^2 x$ et $\\sin^2 x$ pour préparer un calcul d'intégrale`,
    `Transformer une somme $a\\cos x + b\\sin x$ en une seule onde $R\\cos(x - \\varphi)$`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, dans mon sujet on me demande la valeur exacte de $\\cos\\left(\\dfrac{7\\pi}{12}\\right)$. Mais cet angle n'est pas dans ma table ! Il n'est ni $\\dfrac{\\pi}{6}$, ni $\\dfrac{\\pi}{4}$, ni $\\dfrac{\\pi}{3}$. Je fais comment ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Bonne nouvelle, Champion(ne) : cet angle n'est pas un inconnu, c'est un **assemblage**. Regarde : $\\dfrac{7\\pi}{12} = \\dfrac{\\pi}{4} + \\dfrac{\\pi}{3}$. Tu connais les deux morceaux ! Il te manque juste la règle qui dit comment recoller le cosinus d'une somme. C'est exactement le rôle des formules trigonométriques : fabriquer du nouveau à partir de ce que tu connais déjà.`,
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
          contenu: `Pense à la cuisine d'un bon garba à Adjamé. Tu sais préparer la semoule d'attiéké, et tu sais frire le thon séparément. La question, c'est : quand tu **assembles** les deux dans la même assiette, quel goût obtiens-tu ? Ce n'est pas simplement « goût d'attiéké + goût de thon » mis bout à bout : l'assemblage crée une combinaison précise, avec sa propre règle.

Les angles, c'est pareil. Tu connais $\\cos$ et $\\sin$ de $\\dfrac{\\pi}{4}$, tu connais ceux de $\\dfrac{\\pi}{3}$. Mais $\\cos\\left(\\dfrac{\\pi}{4} + \\dfrac{\\pi}{3}\\right)$ **n'est pas** $\\cos\\dfrac{\\pi}{4} + \\cos\\dfrac{\\pi}{3}$. L'assemblage suit une recette précise, qui mélange les cosinus et les sinus des deux morceaux.

Et dans l'autre sens, parfois on veut **décomposer** : casser un $\\cos^2 x$ encombrant en quelque chose de plus simple à intégrer. Assembler ou décomposer : c'est tout l'art de la métamorphose de ce module.`,
        },
        {
          type: 'figure',
          id: 'fig-m4-1',
          src: '/images/t6/fig_M4_1.png',
          legende: `$\\dfrac{7\\pi}{12} = \\dfrac{\\pi}{4} + \\dfrac{\\pi}{3}$ : un angle inconnu est l'assemblage de deux angles connus.`,
          alt: `Assemblage de deux angles connus sur le cercle trigonométrique.`,
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
          contenu: `On traduit « assembler » et « décomposer » en formules.

- « cosinus d'une somme d'angles » → $\\cos(a + b)$ → mélange $\\cos a\\cos b$ et $\\sin a\\sin b$.
- « sinus d'une somme » → $\\sin(a + b)$ → mélange $\\sin a\\cos b$ et $\\cos a\\sin b$.
- « doubler un angle » → $\\cos 2x$, $\\sin 2x$ → cas particulier où $a = b = x$.`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Ce que je veux faire`, `L'outil`, `Le but`],
          rows: [
            [`Calculer un angle composé`, `Formules d'addition`, `Recoller à partir d'angles connus`],
            [`Passer de $x$ à $2x$`, `Formules de duplication`, `Tout ramener à l'angle simple $x$`],
            [`Intégrer $\\cos^2 x$ ou $\\sin^2 x$`, `Linéarisation`, `Casser le carré en un $\\cos(2x)$ intégrable`],
            [`Étudier $a\\cos x + b\\sin x$`, `Transformation en $R\\cos(x - \\varphi)$`, `Obtenir une seule onde, plus facile à étudier`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `Quatre besoins, quatre familles de formules. On les pose proprement maintenant.`,
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
          contenu: `Champion(ne), tu as l'image de l'assemblage du garba. La copie attend les formules exactes et leurs noms.

**Définition formelle.** Les **formules d'addition** donnent, pour tous réels $a$ et $b$ :
$$\\cos(a + b) = \\cos a\\cos b - \\sin a\\sin b, \\qquad \\sin(a + b) = \\sin a\\cos b + \\cos a\\sin b.$$
Les **formules de duplication** en sont le cas $a = b$. La **linéarisation** exprime un carré comme une fonction affine d'un cosinus de l'angle double.

**En langage courant.** « Addition » = recoller deux angles connus ; « duplication » = doubler un angle ; « linéarisation » = aplatir un carré pour pouvoir l'intégrer.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Formule d'addition** — développement de $\\cos(a \\pm b)$ et $\\sin(a \\pm b)$.
- **Formule de duplication** — $\\cos 2x$ et $\\sin 2x$ en fonction de $x$.
- **Linéarisation** — écriture de $\\cos^2 x$ ou $\\sin^2 x$ sans carré, à l'aide de $\\cos 2x$.
- **Forme $R\\cos(x - \\varphi)$** — réécriture d'une somme $a\\cos x + b\\sin x$ en une onde unique d'amplitude $R$.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur sanctionne lourdement $\\cos(a + b) = \\cos a + \\cos b$. La phrase juste à recopier : *« D'après la formule d'addition, $\\cos(a+b) = \\cos a\\cos b - \\sin a\\sin b$. »*`,
        },
        {
          type: 'figure',
          id: 'fig-m4-2',
          src: '/images/t6/fig_M4_2.png',
          legende: `$\\cos x + \\sin x = \\sqrt2\\,\\cos\\!\\left(x - \\dfrac{\\pi}{4}\\right)$ : deux ondes s'additionnent en une seule, plus ample et décalée.`,
          alt: `Une somme de deux ondes devient une seule onde d'amplitude racine de deux.`,
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
          titre: `Règle d'Or — Les formules à connaître`,
          contenu: `**Addition.**
$$\\cos(a \\pm b) = \\cos a\\cos b \\mp \\sin a\\sin b, \\qquad \\sin(a \\pm b) = \\sin a\\cos b \\pm \\cos a\\sin b.$$

**Duplication.**
$$\\cos 2x = \\cos^2 x - \\sin^2 x = 2\\cos^2 x - 1 = 1 - 2\\sin^2 x, \\qquad \\sin 2x = 2\\sin x\\cos x.$$

**Linéarisation** (conséquence directe de la duplication).
$$\\cos^2 x = \\dfrac{1 + \\cos 2x}{2}, \\qquad \\sin^2 x = \\dfrac{1 - \\cos 2x}{2}.$$`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Pour le cosinus double, retiens les **trois visages** de $\\cos 2x$ : choisis celui qui ne laisse que des $\\cos$ (pour $\\cos^2$) ou que des $\\sin$ (pour $\\sin^2$). C'est ce choix qui donne la linéarisation directement.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Dans $\\cos(a + b)$, le signe central est un **moins** ; dans $\\sin(a + b)$, c'est un **plus**. Le cosinus inverse l'opération, le sinus la conserve. Inverser ces signes est l'erreur classique du devoir commun.`,
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
          contenu: `On te demande un angle composé, une simplification, une linéarisation avant intégrale, ou l'étude d'une somme $a\\cos x + b\\sin x$. Repère les mots : « valeur exacte d'un angle inhabituel » → décompose en somme connue ; « $2x$ et $x$ mélangés » → duplication ; « calculer $\\int \\cos^2 x\\,dx$ » → linéarise d'abord ; « somme de cosinus et sinus à étudier » → transforme en $R\\cos(x - \\varphi)$.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Si tu vois…`, `L'outil à dégainer`, `Le but`],
          rows: [
            [`Un angle comme $\\dfrac{7\\pi}{12}$`, `Formules d'addition`, `Décomposer en $\\dfrac{\\pi}{4} + \\dfrac{\\pi}{3}$`],
            [`Du $2x$ et du $x$ mélangés`, `Formules de duplication`, `Tout ramener à l'angle simple $x$`],
            [`$\\cos^2 x$ ou $\\sin^2 x$ à intégrer`, `Linéarisation`, `Casser le carré avec $\\cos 2x$`],
            [`$a\\cos x + b\\sin x$ à étudier`, `Forme $R\\cos(x - \\varphi)$`, `Obtenir une seule onde`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure (transformer a cos x + b sin x)`,
          contenu: `**Étape 1.** Calcule l'amplitude $R = \\sqrt{a^2 + b^2}$.

**Étape 2.** Mets $R$ en facteur : $a\\cos x + b\\sin x = R\\left(\\dfrac{a}{R}\\cos x + \\dfrac{b}{R}\\sin x\\right)$.

**Étape 3.** Identifie l'angle $\\varphi$ tel que $\\cos\\varphi = \\dfrac{a}{R}$ et $\\sin\\varphi = \\dfrac{b}{R}$.

**Étape 4.** Conclus : $a\\cos x + b\\sin x = R\\cos(x - \\varphi)$.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `- **Amplitude** : la somme transformée doit osciller entre $-R$ et $R$.
- **Test en $x = 0$** : la forme de départ et la forme $R\\cos(x - \\varphi)$ doivent donner la même valeur.`,
        },
        {
          type: 'text',
          id: 'b-code',
          titre: `💻 Le Coin du Code — La somme de deux ondes`,
          contenu: `Au BAC, on te demande d'admettre que $a\\cos x + b\\sin x$ est une seule onde $R\\cos(x - \\varphi)$. Cet algorithme te le **montre** : il calcule $R$ et $\\varphi$, puis vérifie que les deux écritures coïncident point par point.

\`\`\`python
import math

def transformer_onde(a, b):
    # Transforme a*cos(x) + b*sin(x) en R*cos(x - phi)
    R = math.sqrt(a**2 + b**2)        # amplitude de l'onde unique
    phi = math.atan2(b, a)            # dephasage : cos(phi)=a/R, sin(phi)=b/R
    # Verification sur quelques angles
    for x in [0, math.pi/6, math.pi/4, math.pi/3, math.pi/2]:
        gauche = a*math.cos(x) + b*math.sin(x)
        droite = R*math.cos(x - phi)
        assert abs(gauche - droite) < 1e-9   # les deux ecritures coincident
    return R, phi

R, phi = transformer_onde(1, 1)      # cas cos x + sin x
print(R, phi)                        # -> 1.4142... (racine de 2) et 0.7853... (pi/4)
\`\`\``,
        },
        {
          type: 'tip',
          id: 'tip-code',
          titre: `Le message du Grand Frère`,
          contenu: `L'ordinateur confirme ce que la formule annonce : $\\cos x + \\sin x = \\sqrt2\\,\\cos\\!\\left(x - \\dfrac{\\pi}{4}\\right)$. La fonction \`atan2\` choisit le bon $\\varphi$ en tenant compte des signes de $a$ et $b$ — exactement le travail que tu fais à la main avec $\\cos\\varphi$ et $\\sin\\varphi$. Comprendre l'algorithme, c'est comprendre pourquoi la transformation marche à tous les coups, Champion(ne).`,
        },
        {
          type: 'figure',
          id: 'fig-m4-3',
          src: '/images/t6/fig_M4_3.png',
          legende: `$\\cos\\dfrac{7\\pi}{12} = \\dfrac{\\sqrt6 - \\sqrt2}{4}$ : un angle hors table, calculé exactement par addition.`,
          alt: `Calcul exact de cos(7 pi sur 12) par la formule d'addition.`,
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
            [`🟢 BASE`, `Calcul exact d'angle composé`, `Angle = somme de deux angles de la table`, `Type 1`],
            [`🟡 MOYEN`, `Linéarisation avant intégrale`, `Un $\\cos^2 x$ ou $\\sin^2 x$ à transformer`, `Type 2`],
            [`🔴 BAC`, `Transformer $a\\cos x + b\\sin x$`, `Somme de cosinus et sinus de même angle`, `Type 3`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Angle composé.** En remarquant que $\\dfrac{7\\pi}{12} = \\dfrac{\\pi}{4} + \\dfrac{\\pi}{3}$, calcule la valeur exacte de $\\cos\\left(\\dfrac{7\\pi}{12}\\right)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Angle = somme de deux angles connus : on applique la formule d'addition du cosinus.` },
            { name: `Étape 1`, contenu: `$\\cos\\left(\\dfrac{\\pi}{4} + \\dfrac{\\pi}{3}\\right) = \\cos\\dfrac{\\pi}{4}\\cos\\dfrac{\\pi}{3} - \\sin\\dfrac{\\pi}{4}\\sin\\dfrac{\\pi}{3}$.` },
            { name: `Étape 2`, contenu: `$= \\dfrac{\\sqrt2}{2}\\times\\dfrac{1}{2} - \\dfrac{\\sqrt2}{2}\\times\\dfrac{\\sqrt3}{2} = \\dfrac{\\sqrt2}{4} - \\dfrac{\\sqrt6}{4}$.` },
          ],
          reponse: `$\\cos\\left(\\dfrac{7\\pi}{12}\\right) = \\dfrac{\\sqrt2 - \\sqrt6}{4}$.`,
          conseil: `Pose la formule littérale **avant** de remplacer par les valeurs : tu évites d'emmêler cosinus et sinus.`,
          piege: `Le signe central est un moins. N'écris jamais $\\cos\\dfrac{\\pi}{4} + \\cos\\dfrac{\\pi}{3}$ : c'est l'erreur qui coûte tout l'exercice.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `D'après la formule d'addition, $\\cos\\left(\\dfrac{7\\pi}{12}\\right) = \\cos\\dfrac{\\pi}{4}\\cos\\dfrac{\\pi}{3} - \\sin\\dfrac{\\pi}{4}\\sin\\dfrac{\\pi}{3} = \\dfrac{\\sqrt2}{4} - \\dfrac{\\sqrt6}{4} = \\dfrac{\\sqrt2 - \\sqrt6}{4}.$

*[Barème : formule posée : 1 pt · substitution : 1 pt · résultat simplifié : 1 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Linéarisation.** Linéarise $\\sin^2 x$, puis calcule $\\displaystyle\\int_0^{\\pi} \\sin^2 x\\,\\mathrm{d}x$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `On ne peut pas intégrer $\\sin^2 x$ directement : on le linéarise avec la formule de duplication.` },
            { name: `Étape 1`, contenu: `$\\sin^2 x = \\dfrac{1 - \\cos 2x}{2}$.` },
            { name: `Étape 2`, contenu: `$\\displaystyle\\int_0^{\\pi} \\sin^2 x\\,\\mathrm{d}x = \\int_0^{\\pi} \\dfrac{1 - \\cos 2x}{2}\\,\\mathrm{d}x = \\dfrac{1}{2}\\left[x - \\dfrac{\\sin 2x}{2}\\right]_0^{\\pi}$.` },
            { name: `Étape 3`, contenu: `$= \\dfrac{1}{2}\\left[\\left(\\pi - \\dfrac{\\sin 2\\pi}{2}\\right) - \\left(0 - 0\\right)\\right] = \\dfrac{1}{2}\\times\\pi$.` },
          ],
          reponse: `$\\displaystyle\\int_0^{\\pi} \\sin^2 x\\,\\mathrm{d}x = \\dfrac{\\pi}{2}$.`,
          conseil: `Dès que tu vois un carré trigonométrique sous une intégrale, le réflexe est immédiat : linéariser avant tout calcul.`,
          piege: `$\\sin 2\\pi = 0$ et $\\sin 0 = 0$ : ces termes disparaissent. Ne les oublie pas dans le calcul, mais ne te trompe pas non plus en leur donnant une valeur.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Comme $\\sin^2 x = \\dfrac{1 - \\cos 2x}{2}$, on a $\\displaystyle\\int_0^{\\pi}\\sin^2 x\\,\\mathrm{d}x = \\dfrac{1}{2}\\left[x - \\dfrac{\\sin 2x}{2}\\right]_0^{\\pi} = \\dfrac{1}{2}(\\pi - 0) = \\dfrac{\\pi}{2}.$

*[Barème : linéarisation : 1 pt · primitive : 1,5 pt · évaluation et conclusion : 1 pt — Total : 3,5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 3 — Transformation en onde unique.** Écris $f(x) = \\cos x + \\sqrt3\\,\\sin x$ sous la forme $R\\cos(x - \\varphi)$ avec $R > 0$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Somme $a\\cos x + b\\sin x$ avec $a = 1$, $b = \\sqrt3$ : on applique la procédure de transformation.` },
            { name: `Étape 1`, contenu: `$R = \\sqrt{1^2 + (\\sqrt3)^2} = \\sqrt{1 + 3} = 2$.` },
            { name: `Étape 2`, contenu: `$f(x) = 2\\left(\\dfrac{1}{2}\\cos x + \\dfrac{\\sqrt3}{2}\\sin x\\right)$.` },
            { name: `Étape 3`, contenu: `On cherche $\\varphi$ tel que $\\cos\\varphi = \\dfrac{1}{2}$ et $\\sin\\varphi = \\dfrac{\\sqrt3}{2}$ : c'est $\\varphi = \\dfrac{\\pi}{3}$.` },
          ],
          reponse: `$f(x) = 2\\cos\\left(x - \\dfrac{\\pi}{3}\\right)$.`,
          conseil: `L'amplitude $R = \\sqrt{a^2 + b^2}$ se calcule en premier : elle te donne tout de suite l'encadrement de la fonction, $-2 \\leqslant f(x) \\leqslant 2$.`,
          piege: `$\\varphi$ doit vérifier **les deux** conditions à la fois ($\\cos\\varphi$ et $\\sin\\varphi$). Ne te contente pas d'une seule : sinon tu peux te tromper de quadrant.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite`,
          contenu: `On a $R = \\sqrt{1 + 3} = 2$, donc $f(x) = 2\\left(\\dfrac{1}{2}\\cos x + \\dfrac{\\sqrt3}{2}\\sin x\\right)$. Comme $\\cos\\dfrac{\\pi}{3} = \\dfrac{1}{2}$ et $\\sin\\dfrac{\\pi}{3} = \\dfrac{\\sqrt3}{2}$, on obtient $f(x) = 2\\cos\\left(x - \\dfrac{\\pi}{3}\\right).$

*[Barème : amplitude $R$ : 1 pt · mise en facteur : 1 pt · identification de $\\varphi$ : 1,5 pt · conclusion : 0,5 pt — Total : 4 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Choisis la bonne formule avant de te lancer. Réponses finales seulement.

- **Exercice 1.** Calcule $\\sin\\left(\\dfrac{5\\pi}{12}\\right)$ en remarquant $\\dfrac{5\\pi}{12} = \\dfrac{\\pi}{6} + \\dfrac{\\pi}{4}$. *(Réponse : $\\dfrac{\\sqrt6 + \\sqrt2}{4}$.)*
- **Exercice 2.** Linéarise $\\cos^2 x$. *(Réponse : $\\dfrac{1 + \\cos 2x}{2}$.)*
- **Exercice 3.** Écris $\\sqrt3\\cos x + \\sin x$ sous la forme $R\\cos(x - \\varphi)$. *(Réponse : $2\\cos\\left(x - \\dfrac{\\pi}{6}\\right)$.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m4',
          titre: `À retenir`,
          contenu: [
            `Formules d'addition : $\\cos(a+b) = \\cos a\\cos b - \\sin a\\sin b$ (moins !), $\\sin(a+b) = \\sin a\\cos b + \\cos a\\sin b$.`,
            `📘 Vocabulaire officiel : formule d'addition, formule de duplication, linéarisation, forme $R\\cos(x - \\varphi)$.`,
            `Duplication : $\\sin 2x = 2\\sin x\\cos x$, et $\\cos 2x$ a trois visages.`,
            `Linéarisation : $\\cos^2 x = \\dfrac{1 + \\cos 2x}{2}$, $\\sin^2 x = \\dfrac{1 - \\cos 2x}{2}$ — le réflexe avant toute intégrale.`,
            `$a\\cos x + b\\sin x = R\\cos(x - \\varphi)$ avec $R = \\sqrt{a^2 + b^2}$.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m4',
          titre: `Fil rouge`,
          contenu: `Tu sais maintenant transformer les expressions trigonométriques dans tous les sens. Il est temps de les mettre **en mouvement** : quelle est la vitesse de variation d'une onde ? Pour le savoir, il faut dériver $\\sin$ et $\\cos$ — et avant ça, comprendre deux limites de référence qui surprennent tout le monde. C'est le Module 5.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m4',
          titre: `Auto-évaluation — Module 4`,
          contenu: [
            `J'applique les formules d'addition en respectant le signe moins du cosinus.`,
            `J'emploie le vocabulaire officiel (formule d'addition, duplication, linéarisation, forme $R\\cos(x-\\varphi)$).`,
            `Je linéarise $\\cos^2 x$ et $\\sin^2 x$ avant d'intégrer.`,
            `Je transforme $a\\cos x + b\\sin x$ en une seule onde $R\\cos(x - \\varphi)$.`,
            `Je comprends ce que l'algorithme du Coin du Code vérifie.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m4',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → La métamorphose est maîtrisée. Direction Module 5.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 3.`,
            `🔴 **0 à 2** → Reprends le ④ La Règle et recopie le tableau des formules au propre.`,
          ],
        },
      ],
    },
  ],
};
