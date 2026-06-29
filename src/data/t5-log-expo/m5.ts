import { Chapitre } from '../../types/course';

export const chapitreM5: Chapitre = {
  id: 't5-m5',
  titre: `Module 5 — Les Puissances réelles`,
  duree: 26,
  niveau: 'BAC',
  xpGain: 35,
  objectifs: [
    `Définir une puissance à exposant réel par $x^\\alpha = e^{\\alpha\\ln x}$ pour $x > 0$`,
    `Dériver une fonction puissance $x^\\alpha$ et donner son sens de variation`,
    `Énoncer la définition d'une puissance réelle avec le vocabulaire officiel attendu au BAC`,
    `Reconnaître l'allure de la courbe de $x^\\alpha$ selon la valeur de $\\alpha$`,
    `Utiliser les règles de calcul sur les puissances réelles`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, je sais calculer $x^2$, $x^3$, même $x^{-1}$. Mais l'autre jour, dans un sujet, j'ai vu $x^{\\sqrt{2}}$ et $x^{0{,}7}$. Un exposant qui n'est même pas un entier… comment on dérive ça ? Ça existe vraiment ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Oui, Champion(ne), et c'est plus simple que ça en a l'air. Grâce à notre couple $\\ln$ / $\\exp$, on peut donner un sens à n'importe quel exposant, même $\\sqrt{2}$ ou $0{,}7$. L'idée géniale, c'est d'écrire $x^\\alpha = e^{\\alpha\\ln x}$. Une fois cette porte ouverte, dériver une puissance réelle devient un jeu d'enfant, et tu vas voir que selon la valeur de $\\alpha$, la courbe change complètement d'allure. On y va.`,
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
          contenu: `Pense à un menuisier de Bingerville qui agrandit un plateau de table carré. S'il double le côté, la surface, elle, est multipliée par quatre — elle réagit « en puissance $2$ ». S'il s'intéressait au simple côté, ça réagirait « en puissance $1$ ». Et s'il cherchait une mesure intermédiaire, une sorte de demi-mesure, ça réagirait « en puissance $\\dfrac{1}{2}$ », c'est-à-dire comme une racine carrée.

L'exposant, c'est donc un **réglage de sensibilité** : il dit à quelle vitesse une grandeur réagit quand on change l'échelle. Un grand exposant, et la grandeur s'emballe ; un petit exposant entre $0$ et $1$, et elle réagit mollement ; un exposant négatif, et elle diminue quand l'autre augmente.

Et rien n'oblige ce réglage à être un nombre rond. *Avec le logarithme, on peut tourner le bouton de la sensibilité sur n'importe quelle valeur réelle — $\\sqrt{2}$, $0{,}7$, $\\pi$ — et la fonction garde tout son sens.*`,
        },
        {
          type: 'figure',
          id: 'fig-m5-1',
          src: '/images/t5/fig_M5_1.png',
          legende: `L'exposant règle la sensibilité : plus il est grand, plus la grandeur réagit fort à l'agrandissement.`,
          alt: `L'exposant comme bouton de sensibilité : doubler le côté quadruple la surface.`,
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
          contenu: `Traduisons le bouton de sensibilité du menuisier en symboles.

- **La grandeur de base, positive** → un réel $x > 0$.
- **Le réglage de sensibilité** → l'exposant réel $\\alpha$.
- **La réaction de la grandeur** → la puissance $x^\\alpha$.
- **Donner un sens à un exposant quelconque** → $x^\\alpha = e^{\\alpha\\ln x}$.`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène de l'atelier`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`La grandeur de base, positive`, `$x > 0$`, `On ne définit $x^\\alpha$ que pour $x$ strictement positif.`],
            [`Le réglage de sensibilité`, `$\\alpha \\in \\mathbb{R}$`, `L'exposant peut être n'importe quel réel.`],
            [`Donner un sens à $x^\\alpha$`, `$x^\\alpha = e^{\\alpha\\ln x}$`, `La puissance réelle passe par l'exponentielle.`],
            [`La réaction de la grandeur`, `$(x^\\alpha)' = \\alpha x^{\\alpha-1}$`, `La dérivée garde la forme habituelle.`],
            [`Le point de passage commun`, `$1^\\alpha = 1$`, `Toutes les courbes passent par $(1\\,;\\,1)$.`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `Cette définition par l'exponentielle mérite son cadre officiel. Habillons-la dans le langage du BAC.`,
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
          contenu: `Champion(ne), tu as l'image du bouton de sensibilité. La copie attend la définition exacte.

**Définition formelle.** Pour tout réel $x > 0$ et tout réel $\\alpha$, la **puissance d'exposant réel** $\\alpha$ est définie par $x^\\alpha = e^{\\alpha\\ln x}$. La fonction $x \\mapsto x^\\alpha$ est dérivable sur $\\left]\\,0\\ ;\\ +\\infty\\,\\right[$ et $(x^\\alpha)' = \\alpha\\,x^{\\alpha-1}$. Pour tous réels $\\alpha, \\beta$ : $x^\\alpha \\times x^\\beta = x^{\\alpha+\\beta}$ et $\\left(x^\\alpha\\right)^\\beta = x^{\\alpha\\beta}$.

**En langage courant.** Élever à une puissance réelle, c'est passer par le logarithme (pour mesurer), multiplier par l'exposant, puis revenir par l'exponentielle.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Puissance d'exposant réel** — l'expression $x^\\alpha = e^{\\alpha\\ln x}$, définie pour $x > 0$.
- **Condition $x > 0$** — indispensable, car la définition passe par $\\ln x$.
- **Fonction puissance** — la fonction $x \\mapsto x^\\alpha$ et sa dérivée $\\alpha x^{\\alpha-1}$.
- **Règles de calcul** — $x^\\alpha x^\\beta = x^{\\alpha+\\beta}$, $(x^\\alpha)^\\beta = x^{\\alpha\\beta}$.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend, pour toute puissance réelle, la phrase de définition : *« Pour $x > 0$, $x^\\alpha = e^{\\alpha\\ln x}$. »* C'est elle qui justifie tous les calculs qui suivent.`,
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
          titre: `Règle d'Or — La fonction puissance x^α`,
          contenu: `Pour $x > 0$ et $\\alpha$ réel :
$$x^\\alpha = e^{\\alpha\\ln x} \\qquad (x^\\alpha)' = \\alpha\\,x^{\\alpha-1}$$`,
        },
        {
          type: 'text',
          id: 'b10',
          contenu: `**Allure de la courbe selon $\\alpha$.** Toutes les courbes passent par le point $(1\\,;\\,1)$.

- Si $\\alpha > 1$ : la courbe est croissante et s'incurve vers le haut (comme $x^2$).
- Si $0 < \\alpha < 1$ : croissante mais qui s'aplatit (comme $\\sqrt{x}$ pour $\\alpha = \\tfrac{1}{2}$).
- Si $\\alpha < 0$ : décroissante (comme $\\dfrac{1}{x}$ pour $\\alpha = -1$).`,
        },
        {
          type: 'tip',
          id: 'tip11',
          titre: `Conseil du Grand Frère`,
          contenu: `Pour deviner l'allure sans calcul, repère juste le signe de $\\alpha$ (montée ou descente) et sa position par rapport à $1$ (incurvée vers le haut ou aplatie). Le point $(1\\,;\\,1)$ est ton ancrage commun.`,
        },
        {
          type: 'warning',
          id: 'warn12',
          titre: `Piège à éviter`,
          contenu: `Ne définis jamais $x^\\alpha$ pour $x \\leq 0$ quand $\\alpha$ n'est pas entier : la définition passe par $\\ln x$, donc $x$ doit être strictement positif. Pose toujours cette condition.`,
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
          contenu: `Repère ce qu'on te demande : « dériver une puissance d'exposant non entier » → applique $\\alpha x^{\\alpha-1}$ après avoir posé $x > 0$ ; « allure / courbe » → classe selon la valeur de $\\alpha$ ; « simplifier une puissance » → utilise les règles de calcul.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Si tu vois…`, `Ce que tu fais`],
          rows: [
            [`$x^\\alpha$ avec $\\alpha$ réel`, `Pose $x > 0$ et écris $x^\\alpha = e^{\\alpha\\ln x}$.`],
            [`Une dérivée de $x^\\alpha$`, `Applique $\\alpha x^{\\alpha-1}$.`],
            [`$x^\\alpha \\times x^\\beta$`, `Additionne les exposants : $x^{\\alpha+\\beta}$.`],
            [`$(x^\\alpha)^\\beta$`, `Multiplie les exposants : $x^{\\alpha\\beta}$.`],
            [`Une question sur l'allure`, `Classe selon $\\alpha$ : $>1$, entre 0 et 1, ou $<0$.`],
          ],
        },
        {
          type: 'text',
          id: 'b14',
          titre: `La Procédure (étudier une fonction puissance)`,
          contenu: `**Étape 1.** Pose l'ensemble de définition $\\left]\\,0\\ ;\\ +\\infty\\,\\right[$ et la réécriture $x^\\alpha = e^{\\alpha\\ln x}$.

**Étape 2.** Dérive avec $(x^\\alpha)' = \\alpha x^{\\alpha-1}$ et lis le signe (celui de $\\alpha$, car $x^{\\alpha-1} > 0$).

**Étape 3.** Donne le sens de variation et l'allure de la courbe selon la position de $\\alpha$.

**Étape 4.** Conclus par une phrase complète, en mentionnant le point $(1\\,;\\,1)$.`,
        },
        {
          type: 'tip',
          id: 'tip15',
          titre: `La Vérification`,
          contenu: `- **Cohérence du signe** : $x^{\\alpha-1} > 0$ sur $\\left]\\,0\\ ;\\ +\\infty\\,\\right[$, donc le signe de la dérivée suit celui de $\\alpha$.
- **Point d'ancrage** : la courbe doit passer par $(1\\,;\\,1)$, quel que soit $\\alpha$.`,
        },
        {
          type: 'figure',
          id: 'fig-m5-2',
          src: '/images/t5/fig_M5_2.png',
          legende: `Toutes passent par $(1\\,;\\,1)$ : l'exposant décide de la montée, de l'aplatissement ou de la descente.`,
          alt: `Faisceau des courbes x puissance alpha passant toutes par le point (1 ; 1).`,
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
            [`🟢 BASE`, `Réécrire une puissance réelle`, `$x^\\alpha$ avec $\\alpha$ non entier`, `Type 1`],
            [`🟡 MOYEN`, `Dériver une fonction puissance`, `$x^\\alpha$ à dériver`, `Type 2`],
            [`🔴 BAC`, `Étudier les variations et l'allure`, `Étude complète d'une puissance réelle`, `Type 3`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Réécrire une puissance réelle.** Écris $x^{\\sqrt{2}}$ (pour $x > 0$) à l'aide de l'exponentielle népérienne.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Puissance d'exposant réel : on applique la définition $x^\\alpha = e^{\\alpha\\ln x}$.` },
            { name: `Étape 1`, contenu: `Ici $\\alpha = \\sqrt{2}$.` },
            { name: `Étape 2`, contenu: `$x^{\\sqrt{2}} = e^{\\sqrt{2}\\,\\ln x}$.` },
          ],
          reponse: `Pour $x > 0$, $x^{\\sqrt{2}} = e^{\\sqrt{2}\\,\\ln x}$.`,
          conseil: `Quel que soit l'exposant, même irrationnel, la définition est toujours la même : $e^{\\alpha\\ln x}$. Aucun cas particulier à craindre.`,
          piege: `N'oublie pas la condition $x > 0$ : sans elle, $\\ln x$ n'existe pas et la réécriture est fausse.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Pour tout $x > 0$, par définition de la puissance d'exposant réel, $x^{\\sqrt{2}} = e^{\\sqrt{2}\\,\\ln x}$.

*[Barème : définition posée : 1,5 pt · réécriture correcte : 1 pt · condition $x>0$ : 0,5 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Dériver une fonction puissance.** Soit $f(x) = x^{0{,}7}$ sur $\\left]\\,0\\ ;\\ +\\infty\\,\\right[$. Calcule $f'(x)$ et donne son signe.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Fonction puissance d'exposant $\\alpha = 0{,}7$ : on applique $(x^\\alpha)' = \\alpha x^{\\alpha-1}$.` },
            { name: `Étape 1`, contenu: `$f'(x) = 0{,}7\\,x^{0{,}7 - 1} = 0{,}7\\,x^{-0{,}3}$.` },
            { name: `Étape 2`, contenu: `Sur $\\left]\\,0\\ ;\\ +\\infty\\,\\right[$, $x^{-0{,}3} > 0$ et $0{,}7 > 0$, donc $f'(x) > 0$.` },
          ],
          reponse: `$f$ est strictement croissante sur $\\left]\\,0\\ ;\\ +\\infty\\,\\right[$ ; comme $0 < 0{,}7 < 1$, sa courbe s'aplatit (allure de type racine).`,
          conseil: `Pour une puissance, le signe de la dérivée suit directement le signe de l'exposant $\\alpha$ : ici $\\alpha > 0$, donc croissance.`,
          piege: `L'exposant de la dérivée est $\\alpha - 1 = -0{,}3$, pas $0{,}7$ : on retire toujours $1$ à l'exposant.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$f$ est dérivable sur $\\left]\\,0\\ ;\\ +\\infty\\,\\right[$ et $f'(x) = 0{,}7\\,x^{-0{,}3}$. Comme $x^{-0{,}3} > 0$ et $0{,}7 > 0$, on a $f'(x) > 0$ : $f$ est strictement croissante. Puisque $0 < 0{,}7 < 1$, la courbe s'aplatit en montant.

*[Barème : dérivée : 1,5 pt · signe : 1,5 pt · allure : 1 pt — Total : 4 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 3 — Étude d'une fonction puissance avec logarithme.** Soit $f(x) = x^2\\ln x$ sur $\\left]\\,0\\ ;\\ +\\infty\\,\\right[$. Calcule $f'(x)$, étudie son signe et dresse le tableau de variations.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Produit de $x^2$ par $\\ln x$ : on applique $(uv)' = u'v + uv'$, puis on factorise pour lire le signe.` },
            { name: `Étape 1`, contenu: `$u = x^2$, $u' = 2x$ ; $v = \\ln x$, $v' = \\dfrac{1}{x}$. Donc $f'(x) = 2x\\ln x + x^2 \\times \\dfrac{1}{x} = 2x\\ln x + x = x(2\\ln x + 1)$.` },
            { name: `Étape 2`, contenu: `Sur $\\left]\\,0\\ ;\\ +\\infty\\,\\right[$, $x > 0$, donc $f'(x)$ est du signe de $2\\ln x + 1$. Or $2\\ln x + 1 = 0 \\iff \\ln x = -\\dfrac{1}{2} \\iff x = e^{-1/2}$.` },
            { name: `Étape 3`, contenu: `Pour $x < e^{-1/2}$, $f'(x) < 0$ ; pour $x > e^{-1/2}$, $f'(x) > 0$. La fonction admet un minimum en $x = e^{-1/2}$.` },
          ],
          reponse: `$f$ décroît sur $\\left]\\,0\\ ;\\ e^{-1/2}\\,\\right]$ puis croît sur $\\left[\\,e^{-1/2}\\ ;\\ +\\infty\\,\\right[$.`,
          conseil: `Factoriser par $x$ (toujours positif) isole le facteur $2\\ln x + 1$ dont le signe se lit avec une simple équation logarithmique. Un classique du BAC.`,
          piege: `Ne lis pas le signe de $f'$ directement sur $2x\\ln x + x$ : factorise d'abord par $x$. Sans factorisation, l'étude de signe est bancale.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$f$ est dérivable sur $\\left]\\,0\\ ;\\ +\\infty\\,\\right[$ et $f'(x) = 2x\\ln x + x = x(2\\ln x + 1)$. Comme $x > 0$, $f'(x)$ a le signe de $2\\ln x + 1$, qui s'annule en $x = e^{-1/2}$. Ainsi $f$ décroît sur $\\left]\\,0\\ ;\\ e^{-1/2}\\,\\right]$ et croît sur $\\left[\\,e^{-1/2}\\ ;\\ +\\infty\\,\\right[$, avec un minimum en $e^{-1/2}$.

*[Barème : dérivée produit : 1,5 pt · factorisation : 1 pt · signe : 1,5 pt · variations : 1 pt — Total : 5 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Pose $x > 0$ avant de calculer. Réponses finales seulement.

- **Exercice 1.** Écris $x^\\pi$ avec l'exponentielle népérienne. *(Réponse : $x^\\pi = e^{\\pi\\ln x}$ pour $x > 0$.)*
- **Exercice 2.** Dérive $f(x) = x^3$ avec la formule des puissances. *(Réponse : $f'(x) = 3x^2$.)*
- **Exercice 3.** Simplifie $x^{1{,}5} \\times x^{0{,}5}$ pour $x > 0$. *(Réponse : $x^{1{,}5 + 0{,}5} = x^2$.)*`,
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
            `Pour $x > 0$, $x^\\alpha = e^{\\alpha\\ln x}$ : c'est l'exponentielle qui donne un sens à tout exposant réel.`,
            `📘 Vocabulaire officiel : puissance d'exposant réel, condition $x > 0$, fonction puissance, règles de calcul.`,
            `$(x^\\alpha)' = \\alpha x^{\\alpha-1}$ : le signe de la dérivée suit celui de $\\alpha$.`,
            `Toutes les courbes $x^\\alpha$ passent par $(1\\,;\\,1)$ ; l'allure dépend de la position de $\\alpha$ par rapport à $0$ et à $1$.`,
            `Règles : $x^\\alpha x^\\beta = x^{\\alpha+\\beta}$ et $(x^\\alpha)^\\beta = x^{\\alpha\\beta}$.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m5',
          titre: `Fil rouge`,
          contenu: `Tu disposes maintenant de toute la famille : $\\ln$, $\\exp$, les bases, les puissances réelles. Une dernière grande bataille reste à livrer. Quand $x$ file vers l'infini, qui gagne la course entre $\\ln x$ qui rampe, $x^\\alpha$ qui avance et $e^x$ qui s'envole ? C'est le choc des titans qui permet de lever les pires indéterminations. Direction le Module 6 : les croissances comparées.`,
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
            `Je définis une puissance réelle par $x^\\alpha = e^{\\alpha\\ln x}$ en posant $x > 0$.`,
            `J'emploie le vocabulaire officiel (puissance d'exposant réel, fonction puissance, règles de calcul).`,
            `Je dérive une fonction puissance avec $\\alpha x^{\\alpha-1}$ et j'en lis le signe.`,
            `Je reconnais l'allure de la courbe selon que $\\alpha > 1$, $0 < \\alpha < 1$ ou $\\alpha < 0$.`,
            `J'utilise les règles $x^\\alpha x^\\beta = x^{\\alpha+\\beta}$ et $(x^\\alpha)^\\beta = x^{\\alpha\\beta}$.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m5',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Le bouton de sensibilité est maîtrisé. Direction Module 6.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 3.`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : le menuisier de Bingerville et son plateau.`,
          ],
        },
      ],
    },
  ],
};
