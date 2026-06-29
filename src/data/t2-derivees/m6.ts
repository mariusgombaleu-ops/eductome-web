import { Chapitre } from '../../types/course';

export const chapitreM6: Chapitre = {
  id: 't2-m6',
  titre: `Module 6 — IAF et Dérivée de la Réciproque`,
  duree: 35,
  niveau: 'BAC',
  xpGain: 35,
  objectifs: [
    `Énoncer l'IAF (Inégalité des Accroissements Finis) et l'utiliser pour encadrer une valeur numérique`,
    `Utiliser l'IAF pour démontrer qu'une fonction est injective`,
    `Calculer $(f^{-1})'(y)$ en un point donné, en partant du bon antécédent`,
    `Reconnaître au BAC quand appliquer l'IAF et quand calculer $(f^{-1})'$`,
    `Employer le vocabulaire officiel : accroissements finis, majorant, fonction injective, bijection réciproque`,
  ],
  sections: [
    {
      id: 's-intro',
      titre: `Les deux outils qui font la très bonne note`,
      blocs: [
        {
          type: 'tip',
          id: 'tip-dpfc',
          titre: `Module de conformité DPFC`,
          contenu: `Ces deux notions — l'Inégalité des Accroissements Finis et la dérivée de la fonction réciproque — étaient absentes de l'ancien T2. Ce module les introduit avec le Moteur complet. Elles sont plus rares au BAC, mais font souvent la différence entre une bonne note et une très bonne note.`,
        },
      ],
    },
    {
      id: 's1a',
      titre: `M6A · ① LE BESOIN — L'Inégalité des Accroissements Finis`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1a',
          pf: `Grand Frère, des fois au BAC il y a une question qui demande de « montrer que $|f(b)-f(a)| \\leq k$ » ou de « démontrer que $f$ est injective ». On utilise quoi pour ça ? La dérivée ne suffit pas ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2a',
          gf: `La dérivée, c'est une information locale — la vitesse en chaque point. L'IAF (Inégalité des Accroissements Finis), c'est ce qui te permet de passer de cette information locale à une estimation globale : si la vitesse est bornée, le déplacement total l'est aussi. C'est l'outil précis pour ces questions d'encadrement et d'injectivité.`,
        },
      ],
    },
    {
      id: 's2a',
      titre: `M6A · ② LE RÉEL`,
      blocs: [
        {
          type: 'text',
          id: 'b3a',
          contenu: `Imagine un chauffeur de gbaka sur la route entre Abidjan et Yamoussoukro. Sa vitesse ne dépasse jamais $80$ km/h, et son trajet dure exactement $0{,}5$ heure. Peut-il avoir parcouru plus de $40$ km ?

Impossible. Même si les passagers le pressent derrière, la physique refuse. Sa distance maximale est verrouillée par sa vitesse maximale multipliée par la durée : $80 \\times 0{,}5 = 40$ km, pas un mètre de plus.

C'est exactement l'IAF : si la dérivée de $f$ est bloquée par un plafond $M$, alors l'écart entre deux valeurs de $f$ ne peut pas dépasser $M$ multiplié par l'écart des abscisses. On passe d'une **vitesse bornée** à un **déplacement borné**.`,
        },
        {
          type: 'figure',
          id: 'fig-m6-1',
          src: '/images/t2/fig_M6_1.png',
          legende: `$|f'|\\le M$ : la courbe reste dans le cône, donc $|f(b)-f(a)|\\le M\\,|b-a|$.`,
          alt: `$|f'|\\le M$ : la courbe reste dans le cône, donc $|f(b)-f(a)|\\le M\\,|b-a|$.`,
        },
      ],
    },
    {
      id: 's3a',
      titre: `M6A · ③ LE PONT`,
      blocs: [
        {
          type: 'text',
          id: 'b4a',
          contenu: `On traduit le trajet du gbaka en langage mathématique, brique par brique :

- **La vitesse bornée** → $|f'(x)| \\leq M$ pour tout $x$ de l'intervalle.
- **La durée du trajet** → $|b - a|$, l'écart entre les deux abscisses.
- **Le déplacement maximal** → $|f(b) - f(a)|$, l'écart entre les deux images.
- **La conclusion** → si la vitesse est bornée par $M$, le déplacement est borné par $M \\times |b-a|$.`,
        },
        {
          type: 'table',
          id: 'tbl5a',
          headers: [`Sur la route`, `En langage mathématique`],
          rows: [
            [`Vitesse plafonnée à $M$`, `$|f'(x)| \\leq M$ sur $]a\\ ;\\ b[$`],
            [`Durée du trajet`, `$|b - a|$`],
            [`Distance parcourue`, `$|f(b) - f(a)|$`],
            [`Distance $\\leq$ vitesse max $\\times$ durée`, `$|f(b)-f(a)| \\leq M\\,|b-a|$`],
          ],
        },
      ],
    },
    {
      id: 's-bac-a',
      titre: `M6A · 📘 LANGAGE OFFICIEL DU BAC — IAF`,
      blocs: [
        {
          type: 'text',
          id: 'b6a',
          contenu: `Champion(ne), l'image du gbaka t'a donné l'intuition. Ta copie, elle, doit poser le théorème avec ses mots exacts.

**Définition formelle.** Soit $f$ une fonction continue sur $[a\\ ;\\ b]$ et dérivable sur $]a\\ ;\\ b[$. S'il existe un réel $M \\geq 0$ tel que $|f'(x)| \\leq M$ pour tout $x \\in\\ ]a\\ ;\\ b[$, alors $|f(b) - f(a)| \\leq M\\,|b - a|$.

**En langage courant.** Une dérivée plafonnée plafonne aussi les écarts de la fonction.`,
        },
        {
          type: 'warning',
          id: 'warn7a',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Accroissements finis** — les écarts $f(b) - f(a)$ (en valeurs) et $b - a$ (en abscisses).
- **Majorant** — le réel $M$ qui borne $|f'(x)|$ sur tout l'intervalle.
- **Fonction injective** — fonction telle que $f(a) = f(b) \\Rightarrow a = b$ (aucune valeur prise deux fois).
- **Hypothèses du théorème** — continuité sur $[a\\ ;\\ b]$ **et** dérivabilité sur $]a\\ ;\\ b[$, à citer avant d'appliquer.`,
        },
        {
          type: 'tip',
          id: 'tip8a',
          titre: `À retenir`,
          contenu: `Avant d'écrire l'inégalité, annonce toujours les hypothèses : *« $f$ est continue sur $[a\\ ;\\ b]$, dérivable sur $]a\\ ;\\ b[$, et $|f'(x)| \\leq M$ »*. Sans elles, le correcteur ne valide pas l'IAF.`,
        },
      ],
    },
    {
      id: 's4a',
      titre: `M6A · ④ LA RÈGLE`,
      blocs: [
        {
          type: 'rule',
          id: 'rule9a',
          titre: `Règle d'Or — Inégalité des Accroissements Finis (IAF)`,
          contenu: `Soit $f$ une fonction continue sur $[a\\ ;\\ b]$ et dérivable sur $]a\\ ;\\ b[$. S'il existe $M \\geq 0$ tel que $|f'(x)| \\leq M$ pour tout $x \\in\\ ]a\\ ;\\ b[$, alors :

$$|f(b) - f(a)| \\leq M\\,|b - a|$$

**Deux applications directes au BAC.**

- **Encadrement** — trouver $M = \\max |f'|$ sur l'intervalle, puis encadrer $f(b)$ à partir de $f(a)$.
- **Injectivité** — si $f'(x) \\geq m > 0$, alors $|f(b)-f(a)| \\geq m\\,|b-a|$, ce qui force $a = b$ quand $f(a) = f(b)$.`,
        },
        {
          type: 'tip',
          id: 'tip10a',
          titre: `Conseil du Grand Frère`,
          contenu: `L'IAF a deux visages : la **majoration** ($|f'| \\leq M$ donne $\\leq$) et la **minoration** ($f' \\geq m$ donne $\\geq$). Lis le sens de l'inégalité attendue pour savoir lequel déployer.`,
        },
        {
          type: 'warning',
          id: 'warn11a',
          titre: `Piège à éviter`,
          contenu: `Le majorant $M$ doit être valable pour **toutes** les valeurs de l'intervalle, pas seulement aux bornes. La dérivée peut atteindre son maximum à l'intérieur — encadre toujours $|f'(x)|$ sur l'intervalle entier avant de conclure.`,
        },
      ],
    },
    {
      id: 's5a',
      titre: `M6A · ⑤ LA DESCENTE`,
      blocs: [
        {
          type: 'text',
          id: 'b12a',
          titre: `Le Diagnostic`,
          contenu: `Lis l'objectif de la question avant de choisir ta forme d'IAF.`,
        },
        {
          type: 'table',
          id: 'tbl13a',
          titre: `L'Arbre de décision`,
          headers: [`Objectif de la question`, `Signal dans l'énoncé`, `L'outil à déployer`],
          rows: [
            [`Encadrer $f(b)$`, `Valeur absolue et constante numérique.`, `IAF classique après recherche du majorant $M$.`],
            [`Montrer l'injectivité`, `« Démontrer que si $f(a)=f(b)$ alors $a=b$ ».`, `IAF en minoration — dérivée minorée par $m>0$ force $a=b$.`],
          ],
        },
        {
          type: 'text',
          id: 'b14a',
          titre: `La Procédure pour l'encadrement — 4 étapes`,
          contenu: `**Étape 1.** Calculer $f'(x)$ sur l'intervalle d'étude.

**Étape 2.** Trouver $M = \\max |f'(x)|$ en encadrant l'expression algébrique.

**Étape 3.** Écrire l'IAF : $|f(b) - f(a)| \\leq M\\,|b - a|$.

**Étape 4.** En déduire l'encadrement de $f(b)$ en injectant les valeurs connues.`,
        },
        {
          type: 'warning',
          id: 'warn15a',
          titre: `La Vérification — contrôle obligatoire`,
          contenu: `Relis ton majorant : est-il valable sur **tout** l'intervalle ? Reprends l'encadrement de $|f'(x)|$ borne par borne. Un $M$ pris seulement à une extrémité est l'erreur classique qui fait sauter les points.`,
        },
      ],
    },
    {
      id: 's1b',
      titre: `M6B · ① LE BESOIN — La Dérivée de la Réciproque`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1b',
          pf: `Grand Frère, si je connais $f$ et $f'$, comment je calcule la dérivée de $f^{-1}$ ? Ce n'est pas simplement l'inverse de $f'$ ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2b',
          gf: `Presque, Champion(ne). Ce n'est pas $\\dfrac{1}{f'(x)}$, c'est $\\dfrac{1}{f'(a)}$ où $a$ est l'antécédent du point où tu calcules. Ce détail change tout. Je t'explique avec le taux de change.`,
        },
      ],
    },
    {
      id: 's2b',
      titre: `M6B · ② LE RÉEL`,
      blocs: [
        {
          type: 'text',
          id: 'b3b',
          contenu: `Imagine que le taux est fixe : $1$ Euro $= 655$ F CFA. La « vitesse » de conversion Euro → CFA est $655$ : chaque euro ajouté apporte $655$ francs.

Maintenant tu fais l'opération inverse au marché d'Adjamé — convertir tes francs en euros. Ta vitesse de conversion devient $\\dfrac{1}{655}$ euro par franc : il faut $655$ francs pour gagner un seul euro.

La dérivée de la conversion inverse est l'**inverse multiplicatif** de la dérivée de la conversion directe. Le sens s'inverse, et la vitesse aussi.`,
        },
        {
          type: 'figure',
          id: 'fig-m6-2',
          src: '/images/t2/fig_M6_2.png',
          legende: `$\\mathcal{C}_{f^{-1}}$ est le symétrique de $\\mathcal{C}_f$ par $y=x$ : pente $\\dfrac{1}{f'(a)}$ en $A'$.`,
          alt: `$\\mathcal{C}_{f^{-1}}$ est le symétrique de $\\mathcal{C}_f$ par $y=x$ : pente $\\dfrac{1}{f'(a)}$ en $A'$.`,
        },
      ],
    },
    {
      id: 's3b',
      titre: `M6B · ③ LE PONT`,
      blocs: [
        {
          type: 'text',
          id: 'b4b',
          contenu: `On traduit le taux de change en relation entre $f$ et sa réciproque :

- Si $f(a) = b$, alors $f^{-1}(b) = a$.
- La « vitesse » de $f$ en $a$ est $f'(a)$.
- La « vitesse » de $f^{-1}$ en $b$ est l'inverse de celle de $f$ en $a$ : $\\dfrac{1}{f'(a)}$.
- Ce n'est **pas** $\\dfrac{1}{f'(b)}$ — c'est l'antécédent $a$ qui compte, pas l'image $b$.`,
        },
      ],
    },
    {
      id: 's-bac-b',
      titre: `M6B · 📘 LANGAGE OFFICIEL DU BAC — Réciproque`,
      blocs: [
        {
          type: 'text',
          id: 'b6b',
          contenu: `L'image du taux de change t'a donné le réflexe « inverse ». Ta copie doit nommer correctement chaque objet.

**Définition formelle.** Soit $f$ une fonction **bijective** et dérivable sur un intervalle $I$. Pour $a \\in I$ et $y = f(a)$, si $f'(a) \\neq 0$, alors $f^{-1}$ est dérivable en $y$ et $(f^{-1})'(y) = \\dfrac{1}{f'(a)}$.

**En langage courant.** La pente de la réciproque en un point est l'inverse de la pente de $f$ au point antécédent.`,
        },
        {
          type: 'warning',
          id: 'warn7b',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Bijection** — fonction à la fois injective et surjective, condition d'existence de $f^{-1}$.
- **Fonction réciproque** $f^{-1}$ — celle qui « défait » $f$ : $f(a) = b \\iff f^{-1}(b) = a$.
- **Antécédent** — le réel $a$ tel que $f(a) = b$ ; c'est lui qui entre dans la formule, pas l'image $b$.
- **Condition de dérivabilité** — il faut $f'(a) \\neq 0$ pour que $f^{-1}$ soit dérivable en $b$.`,
        },
        {
          type: 'tip',
          id: 'tip8b',
          titre: `À retenir`,
          contenu: `Écris d'abord $f^{-1}(b) = a$, puis vérifie $f'(a) \\neq 0$, **avant** d'appliquer la formule. Ces deux lignes valent des points même si le calcul final est court.`,
        },
      ],
    },
    {
      id: 's4b',
      titre: `M6B · ④ LA RÈGLE`,
      blocs: [
        {
          type: 'rule',
          id: 'rule9b',
          titre: `Règle d'Or — Dérivée de la réciproque`,
          contenu: `Soit $f$ une fonction bijective et dérivable sur un intervalle $I$. Pour $a \\in I$ et $y = f(a)$, si $f'(a) \\neq 0$, alors $f^{-1}$ est dérivable en $y$ et :

$$(f^{-1})'(y) = \\dfrac{1}{f'\\!\\left(f^{-1}(y)\\right)} = \\dfrac{1}{f'(a)}$$

**En pratique.** Si l'énoncé donne $f(a) = b$ et $f'(a) = k$ (avec $k \\neq 0$), alors $(f^{-1})'(b) = \\dfrac{1}{k}$.`,
        },
        {
          type: 'tip',
          id: 'tip10b',
          titre: `Conseil du Grand Frère`,
          contenu: `Pose la formule en lettres au brouillon avant de remplacer par les chiffres : tu ne mélangeras jamais le rôle de l'antécédent et celui de l'image.`,
        },
        {
          type: 'warning',
          id: 'warn11b',
          titre: `Piège à éviter`,
          contenu: `Ne jamais écrire $(f^{-1})'(b) = \\dfrac{1}{f'(b)}$. C'est le piège le plus classique. La formule utilise l'**antécédent** $a$, pas l'**image** $b$. Et vérifie toujours $f'(a) \\neq 0$ avant d'appliquer.`,
        },
      ],
    },
    {
      id: 's5b',
      titre: `M6B · ⑤ LA DESCENTE`,
      blocs: [
        {
          type: 'text',
          id: 'b12b',
          titre: `Le Diagnostic`,
          contenu: `Dès qu'on te donne $f(a) = b$ avec $f'(a)$ et qu'on demande la pente de la réciproque, c'est la formule directe.`,
        },
        {
          type: 'text',
          id: 'b13b',
          titre: `La Procédure — 3 étapes`,
          contenu: `**Étape 1.** Identifier l'antécédent $a$ : trouver $a$ tel que $f(a) = b$, donc $f^{-1}(b) = a$.

**Étape 2.** Calculer $f'(a)$ : dériver $f$ et évaluer en $a$ ; vérifier $f'(a) \\neq 0$.

**Étape 3.** Appliquer la formule : $(f^{-1})'(b) = \\dfrac{1}{f'(a)}$.`,
        },
        {
          type: 'warning',
          id: 'warn14b',
          titre: `La Vérification — contrôle obligatoire`,
          contenu: `Relis ton dénominateur : c'est bien $f'(a)$ (antécédent) et non $f'(b)$ (image) ? Et $f'(a) \\neq 0$ ? Si l'un des deux flanche, la réponse est fausse — reprends à l'étape 1.`,
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
            [`🟡 MOYEN`, `IAF — démonstration d'injectivité`, `« Montrer que $f$ est injective » ou « si $f(a)=f(b)$ alors $a=b$ ».`, `ET-1`],
            [`🔴 BAC`, `IAF — encadrement d'une valeur`, `« Encadrer $f(b)-f(a)$ » ou « donner un encadrement de $g(3)-g(0)$ ».`, `ET-2`],
            [`🔴 BAC`, `Dérivée de la réciproque en un point`, `On donne $f(a)=b$ et $f'(a)$, on demande $(f^{-1})'(b)$.`, `ET-3`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 1 — IAF et injectivité.** Soit $f$ définie sur $\\mathbb{R}$ par $f(x) = x^3 + x$. (1) Montrer que pour tout $x \\in \\mathbb{R}$, $f'(x) \\geq 1$. (2) En déduire que pour tous réels $a$ et $b$, $|f(b) - f(a)| \\geq |b - a|$. (3) Démontrer que $f$ est injective sur $\\mathbb{R}$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Q1 → minoration de $f'$. Q2 → IAF en minoration ($\\geq$). Q3 → injectivité par annulation de l'écart.` },
            { name: `Étape 1`, contenu: `$f'(x) = 3x^2 + 1$. Comme $3x^2 \\geq 0$, on a $f'(x) \\geq 1$.` },
            { name: `Étape 2`, contenu: `Sur $[a\\ ;\\ b]$ (avec $a \\leq b$), $f'(x) \\geq 1 > 0$ donc $f$ est croissante ; par IAF en minoration, $f(b) - f(a) \\geq 1 \\times (b-a) = |b-a|$, et l'écart étant positif, $|f(b)-f(a)| \\geq |b-a|$.` },
            { name: `Étape 3`, contenu: `Si $f(a) = f(b)$, alors $|f(b)-f(a)| = 0$, d'où $0 \\geq |b-a|$ ; comme $|b-a| \\geq 0$, on a $a = b$.` },
          ],
          reponse: `$f'(x) = 3x^2 + 1 \\geq 1$ ; l'IAF en minoration donne $|f(b)-f(a)| \\geq |b-a|$, ce qui force $a = b$ si $f(a) = f(b)$ : $f$ est injective sur $\\mathbb{R}$.`,
          conseil: `L'IAF classique donne un majorant ($\\leq$). Quand ta dérivée est minorée par $m > 0$, tu obtiens le sens inverse ($\\geq$). Lis bien le sens de l'inégalité dans l'énoncé.`,
          piege: `Ne confonds pas injectivité et bijectivité. L'injectivité garantit qu'aucune valeur n'est prise deux fois — c'est le premier verrou pour construire une réciproque, pas le seul.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `**(1)** $f$ est dérivable sur $\\mathbb{R}$ et $f'(x) = 3x^2 + 1$. Pour tout $x \\in \\mathbb{R}$, $3x^2 \\geq 0$, donc $f'(x) = 3x^2 + 1 \\geq 1$.

**(2)** Soient $a, b \\in \\mathbb{R}$ avec $a \\leq b$. $f$ est continue sur $[a\\ ;\\ b]$, dérivable sur $]a\\ ;\\ b[$, avec $f'(x) \\geq 1$. D'après l'IAF (forme minoration) :
$$f(b) - f(a) \\geq 1 \\times (b-a) \\geq 0$$
Donc $|f(b)-f(a)| = f(b)-f(a) \\geq b-a = |b-a|$. Pour tous réels $a$ et $b$ : $|f(b)-f(a)| \\geq |b-a|$.

**(3)** Soient $a, b$ tels que $f(a) = f(b)$. Alors $|f(b)-f(a)| = 0$, et d'après (2), $0 \\geq |b-a|$. Comme $|b-a| \\geq 0$, on conclut $|b-a| = 0$, soit $a = b$. La fonction $f$ est donc injective sur $\\mathbb{R}$. $\\square$

*[Barème type BAC : dérivée et minoration 1 pt · IAF et inégalité 1,5 pt · démonstration injectivité 1,5 pt — Total : 4 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 2 — IAF et encadrement.** Soit $g$ définie sur $[-1\\ ;\\ +\\infty[$ par $g(x) = \\sqrt{x+1}$. (1) Justifier que $g$ est dérivable sur $[0\\ ;\\ 3]$ et calculer $g'(x)$. (2) Déterminer $M$ tel que $|g'(x)| \\leq M$ pour tout $x \\in [0\\ ;\\ 3]$. (3) En utilisant l'IAF, donner un encadrement de $g(3) - g(0)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Encadrement d'une variation numérique par l'IAF — trouver $M$ en encadrant $|g'(x)|$ sur l'intervalle.` },
            { name: `Étape 1`, contenu: `$x \\mapsto x+1$ est affine et $\\geq 1 > 0$ sur $[0\\ ;\\ 3]$ ; par composition $g$ est dérivable et $g'(x) = \\dfrac{1}{2\\sqrt{x+1}}$.` },
            { name: `Étape 2`, contenu: `$0 \\leq x \\leq 3 \\Rightarrow 1 \\leq x+1 \\leq 4 \\Rightarrow 1 \\leq \\sqrt{x+1} \\leq 2 \\Rightarrow \\dfrac{1}{4} \\leq \\dfrac{1}{2\\sqrt{x+1}} \\leq \\dfrac{1}{2}$, donc $M = \\dfrac{1}{2}$.` },
            { name: `Étape 3`, contenu: `Par IAF : $|g(3)-g(0)| \\leq \\dfrac{1}{2} \\times 3 = \\dfrac{3}{2}$, soit $-\\dfrac{3}{2} \\leq g(3)-g(0) \\leq \\dfrac{3}{2}$.` },
          ],
          reponse: `$g'(x) = \\dfrac{1}{2\\sqrt{x+1}}$, $M = \\dfrac{1}{2}$, et $-\\dfrac{3}{2} \\leq g(3) - g(0) \\leq \\dfrac{3}{2}$.`,
          conseil: `Sur $[0\\ ;\\ 3]$, $g'(x) = \\dfrac{1}{2\\sqrt{x+1}}$ est décroissante : son maximum est en $x = 0$ (plus petit dénominateur). C'est ce qui donne $M = g'(0) = \\dfrac{1}{2}$.`,
          piege: `Le domaine de dérivabilité de $\\sqrt{x+1}$ exclut $x = -1$ (la racine s'y annule). Notre intervalle $[0\\ ;\\ 3]$ est loin de ce point — mentionne-le sur copie pour la rigueur.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `**(1)** La fonction $x \\mapsto x+1$ est affine et strictement positive sur $[0\\ ;\\ 3]$. Par composition, $g$ est dérivable sur $[0\\ ;\\ 3]$ et :
$$g'(x) = \\dfrac{(x+1)'}{2\\sqrt{x+1}} = \\dfrac{1}{2\\sqrt{x+1}}$$

**(2)** Pour tout $x \\in [0\\ ;\\ 3]$ :
$$1 \\leq x+1 \\leq 4 \\implies 1 \\leq \\sqrt{x+1} \\leq 2 \\implies \\dfrac{1}{4} \\leq \\dfrac{1}{2\\sqrt{x+1}} \\leq \\dfrac{1}{2}$$
Comme $g'(x) > 0$, $|g'(x)| \\leq \\dfrac{1}{2}$ : on choisit $M = \\dfrac{1}{2}$.

**(3)** $g$ est continue et dérivable sur $[0\\ ;\\ 3]$ avec $|g'(x)| \\leq \\dfrac{1}{2}$. D'après l'IAF :
$$|g(3)-g(0)| \\leq \\dfrac{1}{2} \\times |3-0| = \\dfrac{3}{2}$$
Soit : $-\\dfrac{3}{2} \\leq g(3) - g(0) \\leq \\dfrac{3}{2}$.

*[Barème type BAC : dérivée et dérivabilité 1,5 pt · encadrement de $g'$ et extraction de $M$ 1,5 pt · application IAF 1 pt — Total : 4 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 3 — Dérivée de la réciproque.** Soit $f$ une fonction bijective de $\\mathbb{R}$ vers $\\mathbb{R}$, dérivable sur $\\mathbb{R}$. On sait que $f(2) = 5$ et $f'(2) = 3$. Calculer $(f^{-1})'(5)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `On donne $f(a) = b$ et $f'(a)$ ; on demande $(f^{-1})'(b)$. Application directe de la formule.` },
            { name: `Étape 1`, contenu: `$f(2) = 5 \\Rightarrow f^{-1}(5) = 2$.` },
            { name: `Étape 2`, contenu: `$f'(2) = 3 \\neq 0$ → condition de dérivabilité vérifiée.` },
            { name: `Étape 3`, contenu: `$(f^{-1})'(5) = \\dfrac{1}{f'(f^{-1}(5))} = \\dfrac{1}{f'(2)} = \\dfrac{1}{3}$.` },
          ],
          reponse: `$(f^{-1})'(5) = \\dfrac{1}{f'(2)} = \\dfrac{1}{3}$.`,
          conseil: `Écris la formule en lettres avant de remplacer par les chiffres. Ça évite de mélanger le rôle du $2$ (antécédent) et du $5$ (image) — deux nombres qui semblent interchangeables mais ne le sont pas.`,
          piege: `La plus grande erreur de ce type : écrire $(f^{-1})'(5) = \\dfrac{1}{f'(5)}$. Non. La formule utilise l'**antécédent** ($a = 2$), pas l'image ($b = 5$). Le dénominateur est $f'(2)$, jamais $f'(5)$.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite`,
          contenu: `La fonction $f$ est bijective et dérivable sur $\\mathbb{R}$.

$f(2) = 5$ équivaut, par définition de la réciproque, à $f^{-1}(5) = 2$.

$f'(2) = 3 \\neq 0$, donc $f^{-1}$ est dérivable au point $y = 5$.

D'après la formule de dérivation d'une fonction réciproque :
$$(f^{-1})'(5) = \\dfrac{1}{f'\\!\\left(f^{-1}(5)\\right)} = \\dfrac{1}{f'(2)} = \\dfrac{1}{3}$$

*[Barème type BAC : identification de $f^{-1}(5) = 2$ 1 pt · vérification $f'(2) \\neq 0$ 1 pt · application et résultat 2 pts — Total : 4 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Résultats finaux seulement :

- **Exercice 1.** Soit $f(x) = 2x^3 + x$ sur $\\mathbb{R}$. Montre que $f$ est injective via l'IAF. *(Réponse : $f'(x) = 6x^2 + 1 \\geq 1$, donc par IAF $|f(b)-f(a)| \\geq |b-a|$, ce qui force $a=b$ si $f(a)=f(b)$.)*
- **Exercice 2.** Soit $f$ bijective avec $f(3) = 7$ et $f'(3) = 4$. Calcule $(f^{-1})'(7)$. *(Réponse : $(f^{-1})'(7) = \\dfrac{1}{f'(3)} = \\dfrac{1}{4}$.)*`,
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
            `**L'IAF** : si la vitesse de $f$ est bornée par $M$, le déplacement $|f(b)-f(a)|$ est borné par $M\\,|b-a|$. Pour l'injectivité, une dérivée minorée par $m > 0$ force $a = b$ quand $f(a) = f(b)$.`,
            `**La dérivée de la réciproque** : $(f^{-1})'(b) = \\dfrac{1}{f'(a)}$ où $a$ est l'**antécédent** de $b$ — jamais l'image.`,
            `📘 Vocabulaire officiel : accroissements finis, majorant, fonction injective, bijection réciproque, antécédent.`,
            `**Comment choisir** : inégalité ou injectivité → IAF ; pente de la réciproque en un point → formule $(f^{-1})'$.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m6',
          titre: `Fil rouge`,
          contenu: `Avec l'IAF et la dérivée de la réciproque, tu tiens maintenant **les six outils** du tome sur les dérivées. Place à **La Salle d'Examen** : tous les modules réunis dans des problèmes de synthèse complets, en conditions BAC. On va gâter le coin, Champion(ne) !`,
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
            `Je sais appliquer l'IAF en trouvant le majorant $M$ de $|f'|$ sur l'intervalle pour encadrer $f(b)-f(a)$.`,
            `Je sais utiliser l'IAF en minoration pour démontrer qu'une fonction est injective.`,
            `Je maîtrise la formule de la réciproque et je sais que le dénominateur est toujours $f'(a)$ — l'antécédent, pas l'image.`,
            `J'emploie le vocabulaire officiel (accroissements finis, majorant, bijection réciproque, antécédent) dans ma rédaction.`,
            `Je sais choisir instantanément entre IAF et dérivée de la réciproque selon l'énoncé.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m6',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Le coin est totalement gâté. Tu as les outils les plus pointus du tome — direction La Salle d'Examen !`,
            `🟡 **3 ou 4** → Relis l'Exercice-Type 3 pour ancrer la différence antécédent/image, et refais-le au brouillon.`,
            `🔴 **0 à 2** → Reprends les deux analogies — le gbaka pour l'IAF, le taux de change pour la réciproque. La logique des deux outils vient de là. Faut pas gnan !`,
          ],
        },
      ],
    },
  ],
};
