import { Chapitre } from '../../types/course';

export const chapitreM3: Chapitre = {
  id: 't6-m3',
  titre: `Module 3 — La fonction tangente`,
  duree: 22,
  niveau: 'MOYEN',
  xpGain: 25,
  objectifs: [
    `Définir $\\tan x$ comme le rapport $\\dfrac{\\sin x}{\\cos x}$ et donner son ensemble de définition`,
    `Repérer les valeurs interdites et les asymptotes verticales de la fonction tangente`,
    `Énoncer la définition, la période et la parité de $\\tan$ avec le vocabulaire officiel du BAC`,
    `Calculer la tangente d'un angle remarquable et exploiter la période $\\pi$`,
    `Résoudre une équation du type $\\tan x = a$ sur un intervalle donné`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Marius, le GPS de mon oncle affichait « pente : 100 % » sur la route de Man l'autre jour. Ça veut dire qu'on roulait sur un mur vertical ou quoi ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Pas du tout, Champion(ne). Une pente de 100 %, ce n'est pas un mur, c'est l'illusion classique. Pour déchiffrer ça, il faut regarder le **rapport** exact entre ce que tu montes et ce que tu avances. La trigonométrie a un outil taillé sur mesure pour ça, et c'est précisément la fonction tangente. Aujourd'hui on l'apprivoise, et tu comprendras pourquoi un vrai mur correspond non pas à 100 %, mais à une pente… infinie.`,
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
          contenu: `Imagine la route qui grimpe vers les montagnes près de Man. À chaque mètre parcouru à l'horizontale, la route gagne aussi un peu de hauteur. La **pente**, c'est le rapport entre ce que tu montes (la hauteur) et ce que tu avances (l'horizontale).

Une pente de 100 %, ça veut dire « je monte autant que j'avance » : un mètre vers le haut pour un mètre vers l'avant. Sur le cercle, ça correspond à un angle de $\\dfrac{\\pi}{4}$, dont la tangente vaut exactement $1$. Pas vertical du tout !

Maintenant, imagine que la route se redresse de plus en plus. Tu avances de moins en moins et tu montes de plus en plus. À la limite du mur vertical, tu n'avances plus du tout : « ce que tu avances » devient zéro. Et diviser une hauteur par zéro, ça explose vers l'infini. **Voilà pourquoi la tangente n'existe pas à la verticale** : son dénominateur, le cosinus, s'annule.`,
        },
        {
          type: 'figure',
          id: 'fig-m3-1',
          src: '/images/t6/fig_M3_1.png',
          legende: `La tangente, c'est la pente : quand l'horizontale tend vers zéro, la pente s'envole.`,
          alt: `Un triangle rectangle figurant une côte, pente = hauteur sur horizontale.`,
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
          contenu: `On traduit la pente de la route en formule.

- « ce que tu montes » → l'ordonnée du point sur le cercle → $\\sin x$.
- « ce que tu avances » → l'abscisse du point → $\\cos x$.
- « la pente » → le rapport des deux → $\\dfrac{\\sin x}{\\cos x}$.`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène de la route`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Hauteur gagnée`, `$\\sin x$`, `Ordonnée du point du cercle`],
            [`Distance horizontale`, `$\\cos x$`, `Abscisse du point du cercle`],
            [`Pente de la côte`, `$\\tan x = \\dfrac{\\sin x}{\\cos x}$`, `Le rapport montée/avancée`],
            [`Mur vertical (avancée nulle)`, `$\\cos x = 0$`, `Valeur interdite : $\\tan$ n'existe pas`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `La tangente n'est donc rien d'autre qu'un quotient, et tout quotient interdit la division par zéro. C'est ce qu'on formalise maintenant.`,
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
          contenu: `Champion(ne), tu as l'image de la pente. La copie attend la définition exacte.

**Définition formelle.** Pour tout réel $x$ tel que $\\cos x \\neq 0$, on appelle **tangente** de $x$ le réel $\\tan x = \\dfrac{\\sin x}{\\cos x}$. La fonction $\\tan$ est définie sur $\\mathbb{R}$ privé des réels $\\dfrac{\\pi}{2} + k\\pi$ ($k \\in \\mathbb{Z}$). Elle est **impaire** et **périodique de période $\\pi$**.

**En langage courant.** La tangente mesure la pente ; elle n'existe pas là où le cosinus s'annule, c'est-à-dire à la verticale.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Ensemble de définition** — $\\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi,\\ k \\in \\mathbb{Z}\\right\\}$.
- **Valeur interdite** — réel où $\\cos x = 0$, donc où $\\tan x$ n'est pas définie.
- **Asymptote verticale** — droite $x = \\dfrac{\\pi}{2} + k\\pi$ dont la courbe se rapproche sans la toucher.
- **Période $\\pi$** — $\\tan(x + \\pi) = \\tan x$ : la tangente se répète deux fois plus vite que $\\cos$ et $\\sin$.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend la phrase d'asymptote complète : *« La droite d'équation $x = \\dfrac{\\pi}{2}$ est asymptote verticale à la courbe de la fonction tangente. »*`,
        },
        {
          type: 'figure',
          id: 'fig-m3-2',
          src: '/images/t6/fig_M3_2.png',
          legende: `La tangente grimpe de $-\\infty$ à $+\\infty$ sur chaque intervalle, bloquée par des asymptotes tous les $\\pi$.`,
          alt: `La courbe de la tangente et ses asymptotes verticales.`,
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
          titre: `Règle d'Or — La fonction tangente`,
          contenu: `Pour tout $x$ tel que $\\cos x \\neq 0$ :
$$\\tan x = \\dfrac{\\sin x}{\\cos x}, \\qquad \\tan(x + \\pi) = \\tan x, \\qquad \\tan(-x) = -\\tan x.$$

**Dérivée.** La fonction $\\tan$ est dérivable sur son ensemble de définition et :
$$\\tan'(x) = 1 + \\tan^2 x = \\dfrac{1}{\\cos^2 x} > 0.$$

La tangente est donc **strictement croissante** sur chaque intervalle $\\left]\\,-\\dfrac{\\pi}{2} + k\\pi\\ ;\\ \\dfrac{\\pi}{2} + k\\pi\\,\\right[$.`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Retiens les tangentes remarquables en divisant : $\\tan\\dfrac{\\pi}{6} = \\dfrac{1}{\\sqrt3} = \\dfrac{\\sqrt3}{3}$, $\\tan\\dfrac{\\pi}{4} = 1$, $\\tan\\dfrac{\\pi}{3} = \\sqrt3$.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `La période de la tangente est $\\pi$, pas $2\\pi$. Pour résoudre $\\tan x = a$, on ajoute des paquets de $\\pi$, pas de $2\\pi$.`,
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
          contenu: `On te demande un ensemble de définition, une tangente remarquable, ou la résolution de $\\tan x = a$. Repère : « pour quelles valeurs $\\tan$ existe-t-elle » → exclus $\\dfrac{\\pi}{2} + k\\pi$ ; « calcule $\\tan$ d'un angle » → divise $\\sin$ par $\\cos$ ; « résous $\\tan x = a$ » → un angle de référence, puis période $\\pi$.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Si tu vois…`, `Ce que tu fais`],
          rows: [
            [`« Ensemble de définition de $\\tan$ »`, `Écris $\\cos x \\neq 0$, donc $x \\neq \\dfrac{\\pi}{2} + k\\pi$.`],
            [`$\\tan$ d'un angle remarquable`, `Calcule $\\dfrac{\\sin x}{\\cos x}$ avec la table du Socle.`],
            [`$\\tan x = a$ à résoudre`, `Trouve $\\alpha$ tel que $\\tan\\alpha = a$ : solutions $x = \\alpha + k\\pi$.`],
            [`Une asymptote à décrire`, `Phrase complète : « $x = \\dfrac{\\pi}{2}$ est asymptote verticale ».`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure (résoudre tan x = a sur un intervalle)`,
          contenu: `**Étape 1.** Trouve l'angle de référence $\\alpha$ tel que $\\tan\\alpha = a$.

**Étape 2.** Écris la famille générale : $x = \\alpha + k\\pi$, $k \\in \\mathbb{Z}$ (attention : période $\\pi$).

**Étape 3.** Donne à $k$ les valeurs qui placent $x$ dans l'intervalle demandé.

**Étape 4.** Conclus en listant les solutions.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `- **Valeurs interdites** : aucune solution ne doit valoir $\\dfrac{\\pi}{2} + k\\pi$.
- **Contrôle** : $\\tan$ de chaque solution doit redonner $a$ (calculatrice en radians).`,
        },
        {
          type: 'figure',
          id: 'fig-m3-3',
          src: '/images/t6/fig_M3_3.png',
          legende: `Sur chaque intervalle entre deux asymptotes, la tangente monte sans cesse de $-\\infty$ à $+\\infty$.`,
          alt: `Tableau de variations de la tangente sur une période.`,
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
            [`🟢 BASE`, `Tangente d'un angle remarquable`, `On demande $\\tan$ d'un angle de la table`, `Type 1`],
            [`🟡 MOYEN`, `Ensemble de définition`, `Fonction avec $\\tan$ ou un $\\cos$ au dénominateur`, `Type 2`],
            [`🔴 BAC`, `Équation $\\tan x = a$ sur un intervalle`, `On impose un intervalle de résolution`, `Type 3`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Tangente remarquable.** Calcule $\\tan\\left(\\dfrac{2\\pi}{3}\\right)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `On ramène l'angle au premier quadrant, puis on divise sinus par cosinus.` },
            { name: `Étape 1`, contenu: `$\\dfrac{2\\pi}{3} = \\pi - \\dfrac{\\pi}{3}$, donc $\\sin\\dfrac{2\\pi}{3} = \\dfrac{\\sqrt3}{2}$ et $\\cos\\dfrac{2\\pi}{3} = -\\dfrac{1}{2}$.` },
            { name: `Étape 2`, contenu: `$\\tan\\dfrac{2\\pi}{3} = \\dfrac{\\sin}{\\cos} = \\dfrac{\\sqrt3/2}{-1/2}$.` },
          ],
          reponse: `$\\tan\\left(\\dfrac{2\\pi}{3}\\right) = -\\sqrt{3}$.`,
          conseil: `Calcule séparément $\\sin$ et $\\cos$ avant de diviser : tu maîtrises les signes un par un.`,
          piege: `Le cosinus est négatif dans le deuxième quadrant : la tangente y est donc négative. Ne donne pas $+\\sqrt3$.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$\\tan\\left(\\dfrac{2\\pi}{3}\\right) = \\dfrac{\\sin(2\\pi/3)}{\\cos(2\\pi/3)} = \\dfrac{\\sqrt3/2}{-1/2} = -\\sqrt{3}.$

*[Barème : valeurs de sin et cos : 1 pt · quotient : 0,5 pt · signe et conclusion : 0,5 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Ensemble de définition.** Détermine l'ensemble de définition de $f(x) = \\tan x$ sur $\\left[\\,0\\ ;\\ 2\\pi\\,\\right]$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `$\\tan$ existe quand $\\cos x \\neq 0$ : on exclut les valeurs interdites de l'intervalle.` },
            { name: `Étape 1`, contenu: `$\\cos x = 0 \\iff x = \\dfrac{\\pi}{2} + k\\pi$.` },
            { name: `Étape 2`, contenu: `Dans $\\left[\\,0\\ ;\\ 2\\pi\\,\\right]$, ces valeurs sont $\\dfrac{\\pi}{2}$ et $\\dfrac{3\\pi}{2}$.` },
          ],
          reponse: `$D_f = \\left[\\,0\\ ;\\ 2\\pi\\,\\right] \\setminus \\left\\{\\dfrac{\\pi}{2}\\ ;\\ \\dfrac{3\\pi}{2}\\right\\}$.`,
          conseil: `Pour un ensemble de définition avec $\\tan$, le réflexe est toujours : « $\\cos x \\neq 0$ », puis on liste les valeurs interdites de l'intervalle.`,
          piege: `N'oublie pas $\\dfrac{3\\pi}{2}$ : sur $\\left[\\,0\\ ;\\ 2\\pi\\,\\right]$, il y a **deux** valeurs interdites, pas une.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$f(x) = \\tan x$ existe si et seulement si $\\cos x \\neq 0$, c'est-à-dire $x \\neq \\dfrac{\\pi}{2} + k\\pi$. Sur $\\left[\\,0\\ ;\\ 2\\pi\\,\\right]$, on exclut $\\dfrac{\\pi}{2}$ et $\\dfrac{3\\pi}{2}$ : $D_f = \\left[\\,0\\ ;\\ 2\\pi\\,\\right] \\setminus \\left\\{\\dfrac{\\pi}{2}\\ ;\\ \\dfrac{3\\pi}{2}\\right\\}$.

*[Barème : condition $\\cos x \\neq 0$ : 1 pt · valeurs interdites : 1 pt · conclusion : 0,5 pt — Total : 2,5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 3 — Équation en tangente.** Résous dans $\\left[\\,0\\ ;\\ 2\\pi\\,\\right]$ l'équation $\\tan x = 1$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Équation $\\tan x = a$ : un angle de référence, puis on ajoute des paquets de $\\pi$ (période $\\pi$).` },
            { name: `Étape 1`, contenu: `L'angle de référence vérifiant $\\tan\\alpha = 1$ est $\\alpha = \\dfrac{\\pi}{4}$.` },
            { name: `Étape 2`, contenu: `Famille générale : $x = \\dfrac{\\pi}{4} + k\\pi$, $k \\in \\mathbb{Z}$.` },
            { name: `Étape 3`, contenu: `Dans $\\left[\\,0\\ ;\\ 2\\pi\\,\\right]$ : $k = 0$ donne $\\dfrac{\\pi}{4}$ ; $k = 1$ donne $\\dfrac{5\\pi}{4}$.` },
          ],
          reponse: `$S = \\left\\{\\dfrac{\\pi}{4}\\ ;\\ \\dfrac{5\\pi}{4}\\right\\}$.`,
          conseil: `Comme la période est $\\pi$, les solutions de $\\tan x = a$ sont espacées de $\\pi$ : à partir de $\\dfrac{\\pi}{4}$, tu ajoutes $\\pi$ pour la suivante.`,
          piege: `N'ajoute pas $2\\pi$ comme pour le cosinus : tu raterais $\\dfrac{5\\pi}{4}$. La tangente se répète tous les $\\pi$.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$\\tan x = 1 \\iff x = \\dfrac{\\pi}{4} + k\\pi,\\ k \\in \\mathbb{Z}$. Dans $\\left[\\,0\\ ;\\ 2\\pi\\,\\right]$, on retient $x = \\dfrac{\\pi}{4}$ et $x = \\dfrac{5\\pi}{4}$. Donc $S = \\left\\{\\dfrac{\\pi}{4}\\ ;\\ \\dfrac{5\\pi}{4}\\right\\}$.

*[Barème : angle de référence : 1 pt · famille de solutions (période $\\pi$) : 1,5 pt · sélection : 1 pt · conclusion : 0,5 pt — Total : 4 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `N'oublie jamais la période $\\pi$. Réponses finales seulement.

- **Exercice 1.** Calcule $\\tan\\left(\\dfrac{5\\pi}{4}\\right)$. *(Réponse : $\\tan\\left(\\dfrac{\\pi}{4} + \\pi\\right) = \\tan\\dfrac{\\pi}{4} = 1$.)*
- **Exercice 2.** Donne les valeurs interdites de $\\tan$ sur $\\left[\\,-\\pi\\ ;\\ \\pi\\,\\right]$. *(Réponse : $-\\dfrac{\\pi}{2}$ et $\\dfrac{\\pi}{2}$.)*
- **Exercice 3.** Résous $\\tan x = \\sqrt3$ dans $\\left[\\,0\\ ;\\ 2\\pi\\,\\right]$. *(Réponse : $x = \\dfrac{\\pi}{3}$ ou $x = \\dfrac{4\\pi}{3}$.)*`,
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
            `$\\tan x = \\dfrac{\\sin x}{\\cos x}$, définie pour $\\cos x \\neq 0$, soit $x \\neq \\dfrac{\\pi}{2} + k\\pi$.`,
            `📘 Vocabulaire officiel : ensemble de définition, valeur interdite, asymptote verticale, période $\\pi$.`,
            `La tangente est impaire, périodique de période $\\pi$, strictement croissante entre deux asymptotes.`,
            `$\\tan'(x) = 1 + \\tan^2 x = \\dfrac{1}{\\cos^2 x} > 0$.`,
            `Pour $\\tan x = a$, les solutions sont espacées de $\\pi$ : $x = \\alpha + k\\pi$.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m3',
          titre: `Fil rouge`,
          contenu: `Tu maîtrises les trois fonctions de base. Mais au BAC, on te demande souvent des angles « impossibles » comme $\\dfrac{7\\pi}{12}$, ou de transformer une expression pour préparer une intégrale. Pour ça, il faut un arsenal de formules : addition, duplication, linéarisation. C'est tout le Module 4.`,
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
            `Je définis $\\tan x = \\dfrac{\\sin x}{\\cos x}$ et je donne ses valeurs interdites.`,
            `J'emploie le vocabulaire officiel (valeur interdite, asymptote verticale, période $\\pi$).`,
            `Je calcule la tangente d'un angle remarquable en divisant sinus par cosinus.`,
            `Je décris la courbe de la tangente et ses asymptotes par une phrase complète.`,
            `Je résous $\\tan x = a$ en ajoutant des paquets de $\\pi$, pas de $2\\pi$.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m3',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → La pente est domptée. Direction Module 4.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 3.`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : la route de Man.`,
          ],
        },
      ],
    },
  ],
};
