import { Chapitre } from '../../types/course';

export const chapitreM3: Chapitre = {
  id: 't10-m3',
  titre: `Module 3 — Équations dans ℂ et Factorisation`,
  duree: 28,
  niveau: 'BAC',
  xpGain: 35,
  objectifs: [
    `Résoudre une équation du second degré à coefficients réels quand le discriminant est négatif`,
    `Déterminer les racines carrées d'un complexe par identification`,
    `Résoudre une équation du second degré à coefficients complexes`,
    `Factoriser un polynôme connaissant une racine`,
    `Résoudre une équation de degré 3 grâce à une racine évidente`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, en plein devoir je calcule mon discriminant, je trouve $\\Delta = -16$, et la panique monte. Je crois que je me suis trompé quelque part...`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Respire, Champion(ne) — faut pas gnan ! En Terminale D, un $\\Delta$ négatif n'est plus un mur, c'est une porte. C'est exactement le cas qu'on attendait pour sortir notre nouvelle clé $i$. Et une fois cette porte ouverte, on apprend même à casser de gros polynômes en petits morceaux. Ce module, c'est ton trousseau de clés.`,
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
          contenu: `Pense à un trousseau de clés de gardien d'immeuble au Plateau. Jusqu'en Première, tu avais une clé qui ouvrait beaucoup de portes : le discriminant $\\Delta$. Mais devant certaines portes — celles où $\\Delta$ est négatif — ta clé tournait dans le vide. Tu disais « pas de solution » et tu repartais. La clé $i$, c'est le passe-partout qui ouvre justement ces portes restées fermées.

Et pour les très grosses serrures — les polynômes de degré $3$ — on a une autre astuce de gardien. Tu connais le régime de bananes plantain qu'on vend au marché d'Adjamé : quand tu détaches une banane que tu repères tout de suite, le reste du régime se sépare en morceaux beaucoup plus petits, faciles à manier. Un polynôme, c'est pareil : si tu connais déjà une racine $z_0$, tu détaches le facteur $(z - z_0)$, et il ne te reste qu'un petit polynôme du second degré que tu sais déjà résoudre.`,
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
          contenu: `On traduit le trousseau et le régime de bananes en langage mathématique.

- La porte où la clé tourne dans le vide → l'équation avec $\\Delta < 0$
- Le passe-partout → l'unité imaginaire $i$, avec $\\Delta = i^2 |\\Delta|$ quand $\\Delta < 0$
- La banane qu'on repère → la racine évidente $z_0$
- Le morceau détaché → le facteur $(z - z_0)$
- Le reste du régime → le polynôme quotient du second degré`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène concrète`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`La porte fermée dans le réel`, `$\\Delta < 0$`, `Pas de solution réelle`],
            [`Le passe-partout $i$`, `$\\Delta = i^2|\\Delta|$`, `Deux racines conjuguées dans $\\mathbb{C}$`],
            [`La banane repérée`, `$z_0$ racine de $p$`, `$p(z_0) = 0$`],
            [`Le morceau détaché`, `$(z - z_0)$`, `Un facteur de $p(z)$`],
            [`Le reste du régime`, `$z^2 + az + b$`, `Le polynôme quotient à résoudre`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `Chaque morceau a son symbole : passons aux définitions officielles.`,
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
          contenu: `Champion(ne), l'image du trousseau t'aide à voir ; ta copie attend les mots exacts.

**Définition formelle.** Soit $az^2 + bz + c = 0$ à coefficients réels et $\\Delta = b^2 - 4ac$. Si $\\Delta < 0$, l'équation admet deux **racines complexes conjuguées** $z_{1,2} = \\dfrac{-b \\pm i\\sqrt{|\\Delta|}}{2a}$. Une **racine** d'un polynôme $p$ est un nombre $z_0$ tel que $p(z_0) = 0$ ; alors $p(z)$ se **factorise** par $(z - z_0)$.

**En langage courant.** Discriminant négatif = deux solutions miroir. Racine connue = un facteur offert.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Discriminant** $\\Delta = b^2 - 4ac$ — le juge qui décide du nombre de racines.
- **Racines complexes conjuguées** — les deux solutions quand $\\Delta < 0$ (coefficients réels).
- **Racine évidente** — une valeur $z_0$ telle que $p(z_0) = 0$.
- **Factorisation** — l'écriture $p(z) = (z - z_0)\\,(z^2 + az + b)$.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Une équation polynomiale de degré $n$ dans $\\mathbb{C}$ admet **exactement $n$ solutions** (comptées avec leur multiplicité). Ne t'arrête jamais avant d'avoir le compte, Champion(ne).`,
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
          titre: `Règle d'Or — Résoudre et factoriser dans ℂ`,
          contenu: `**Second degré, coefficients réels, $\\Delta < 0$ :**
$$z_1 = \\dfrac{-b - i\\sqrt{|\\Delta|}}{2a} \\qquad z_2 = \\dfrac{-b + i\\sqrt{|\\Delta|}}{2a}$$

**Racines carrées de $Z_0 = a + ib$** (poser $\\delta = x + iy$ avec $\\delta^2 = Z_0$) :
$$\\begin{cases} x^2 - y^2 = a \\\\ x^2 + y^2 = |Z_0| \\\\ 2xy = b \\end{cases}$$

**Second degré, coefficients complexes :** même formule $z = \\dfrac{-b \\pm \\delta}{2a}$, où $\\delta$ est une racine carrée de $\\Delta$ (obtenue par le système ci-dessus).

**Factorisation :** si $p(z_0) = 0$, alors $p(z) = (z - z_0)(z^2 + az + b)$ ; on trouve $a$ et $b$ par identification.`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Pour les racines carrées, la ligne du module $x^2 + y^2 = |Z_0|$ t'évite une lourde équation bicarrée. C'est ton raccourci.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Pour des coefficients **complexes**, la formule $\\dfrac{-b \\pm i\\sqrt{|\\Delta|}}{2a}$ ne marche plus : il faut d'abord extraire une racine carrée $\\delta$ de $\\Delta$ par le système, puis appliquer $\\dfrac{-b \\pm \\delta}{2a}$.`,
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
          contenu: `Regarde les coefficients. Réels avec $\\Delta < 0$ ? Formule directe des conjuguées. Complexes ? Passe par les racines carrées de $\\Delta$. Polynôme de degré $3$ ? Cherche la racine évidente, factorise, puis résous le second degré restant.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Si l'énoncé te donne...`, `Alors ta méthode EDUCTOME`],
          rows: [
            [`Un complexe $Z_0$, on demande ses racines carrées`, `Le système à 3 lignes (Re, module, Im) par identification.`],
            [`$az^2 + bz + c = 0$ à coefficients réels, $\\Delta < 0$`, `Formule directe : deux racines conjuguées avec $i\\sqrt{|\\Delta|}$.`],
            [`$az^2 + bz + c = 0$ à coefficients complexes`, `Calculer $\\Delta$, extraire $\\delta$ par identification, puis $\\dfrac{-b \\pm \\delta}{2a}$.`],
            [`Un polynôme de degré 3 avec une racine $z_0$ donnée`, `Vérifier $p(z_0)=0$, factoriser par $(z - z_0)$, résoudre le reste.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure (factoriser un degré 3)`,
          contenu: `**Étape 1.** Vérifie que la racine annoncée convient : calcule $p(z_0)$ et montre que c'est $0$.

**Étape 2.** Écris $p(z) = (z - z_0)(z^2 + az + b)$, développe, et identifie les coefficients pour trouver $a$ et $b$.

**Étape 3.** Résous $z^2 + az + b = 0$ (réel ou complexe selon le cas).

**Étape 4.** Rassemble toutes les solutions : la racine $z_0$ et les deux du second degré.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `Pour une racine carrée, l'autocontrôle est immédiat : élève ton résultat au carré. Si tu retombes sur $Z_0$, tu peux sourire. Pour une factorisation, vérifie le terme constant : le produit des racines doit redonner le coefficient connu.`,
        },
        {
          type: 'figure',
          id: 'fig-m3-1',
          src: '/images/t10/fig_M3_1.png',
          legende: `Quand les coefficients sont réels et $\\Delta < 0$, les deux racines sont conjuguées : symétriques par rapport à l'axe réel.`,
          alt: `Un plan complexe avec les points 1 - 2i et 1 + 2i symétriques par rapport à l'axe réel.`,
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
            [`🟡 MOYEN`, `Racines carrées d'un complexe`, `« Détermine les racines carrées de $a + ib$ »`, `Type 1`],
            [`🔴 BAC`, `Factorisation et résolution d'un degré 3`, `« Justifie que $z_0$ est racine, puis factorise... »`, `Type 2`],
            [`🔴 BAC`, `Second degré à coefficients complexes`, `$\\Delta$ complexe, on extrait $\\delta$`, `Type 2`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 1 — Racines carrées par identification** *(MOYEN)*. Détermine les racines carrées du nombre complexe $Z_0 = 3 - 4i$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `On cherche $\\delta = x + iy$ tel que $\\delta^2 = Z_0$ : on déploie le système à trois lignes.` },
            { name: `Étape 1`, contenu: `$|Z_0| = \\sqrt{3^2 + (-4)^2} = \\sqrt{25} = 5$.` },
            { name: `Étape 2`, contenu: `On pose le système, on additionne / soustrait les deux premières lignes : $2x^2 = 8$ donc $x^2 = 4$ ; $2y^2 = 2$ donc $y^2 = 1$.` },
          ],
          reponse: `Comme $2xy = -4 < 0$, $x$ et $y$ sont de signes contraires : les racines carrées de $3 - 4i$ sont $\\delta_1 = 2 - i$ et $\\delta_2 = -2 + i$.`,
          conseil: `La troisième ligne $2xy = -4 < 0$ te dit que $x$ et $y$ sont de **signes contraires** : elle sert à apparier les valeurs.`,
          piege: `Ne garde pas les quatre combinaisons de signes : seules deux respectent $2xy < 0$.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Soit $\\delta = x + iy$ tel que $\\delta^2 = 3 - 4i$. Avec $|Z_0| = 5$, on a le système :
$$\\begin{cases} x^2 - y^2 = 3 \\\\ x^2 + y^2 = 5 \\\\ 2xy = -4 \\end{cases}$$
En additionnant les deux premières lignes : $2x^2 = 8$, donc $x^2 = 4$ et $x = 2$ ou $x = -2$.
En soustrayant : $2y^2 = 2$, donc $y^2 = 1$ et $y = 1$ ou $y = -1$.
Comme $2xy = -4 < 0$, $x$ et $y$ sont de signes contraires. Les racines carrées de $3 - 4i$ sont :
$$\\delta_1 = 2 - i \\qquad \\delta_2 = -2 + i$$

*[Barème type BAC : module = 0,5 pt — système = 0,5 pt — résolution = 1 pt — appariement des signes = 0,5 pt — Total : 2,5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 2 — Factorisation d'un degré 3** *(BAC)*. On considère $P(z) = z^3 + (1 - i)z^2 + (2 + 2i)z - 8i$. **1.** Vérifie que $P(-2i) = 0$. **2.** Détermine les nombres complexes $a$ et $b$ tels que $P(z) = (z + 2i)(z^2 + az + b)$. **3.** Résous dans $\\mathbb{C}$ l'équation $P(z) = 0$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Racine donnée → on factorise par $(z + 2i)$, puis on résout le second degré (à coefficients complexes : on passera par une racine carrée).` },
            { name: `Étape 1`, contenu: `On remplace $z$ par $-2i$ et on montre que tout s'annule.` },
            { name: `Étape 2`, contenu: `On développe $(z + 2i)(z^2 + az + b)$ et on identifie. Le terme constant donne $b$ d'un coup : $2ib = -8i$, donc $b = -4$.` },
            { name: `Étape 3`, contenu: `Le second degré obtenu a un discriminant complexe $\\Delta = 8 - 6i$ : on extrait sa racine carrée $\\delta = 3 - i$ comme au Type 1.` },
          ],
          reponse: `$P(z) = (z + 2i)\\big(z^2 + (1 - 3i)z - 4\\big)$ et $S = \\lbrace -2i \\,;\\, 1 + i \\,;\\, -2 + 2i \\rbrace$.`,
          conseil: `Le terme constant donne $b$ d'un coup : $2ib = -8i$, donc $b = -4$. Gain de temps assuré.`,
          piege: `Ici $\\Delta = 8 - 6i$ est complexe : interdiction d'écrire $i\\sqrt{|\\Delta|}$. On cherche une racine carrée $\\delta$ de $\\Delta$ par identification.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `**1.** $P(-2i) = (-2i)^3 + (1-i)(-2i)^2 + (2+2i)(-2i) - 8i$. Or $(-2i)^3 = 8i$, $(-2i)^2 = -4$, donc :
$$P(-2i) = 8i + (1-i)(-4) + (2+2i)(-2i) - 8i = 8i - 4 + 4i + 4 - 4i - 8i = 0.$$
Donc $-2i$ est une racine de $P$.

**2.** On écrit $P(z) = (z + 2i)(z^2 + az + b)$. En développant : $z^3 + (a + 2i)z^2 + (b + 2ia)z + 2ib$. Par identification : $a + 2i = 1 - i \\Rightarrow a = 1 - 3i$ et $2ib = -8i \\Rightarrow b = -4$. Donc
$$P(z) = (z + 2i)\\big(z^2 + (1 - 3i)z - 4\\big).$$

**3.** On résout $z^2 + (1 - 3i)z - 4 = 0$. Discriminant :
$$\\Delta = (1 - 3i)^2 - 4(1)(-4) = (1 - 6i - 9) + 16 = 8 - 6i.$$
Une racine carrée de $\\Delta$ est $\\delta = 3 - i$ (car $(3 - i)^2 = 8 - 6i$). D'où $z = \\dfrac{-(1 - 3i) \\pm (3 - i)}{2}$ :
$$z_1 = \\dfrac{2 + 2i}{2} = 1 + i, \\qquad z_2 = \\dfrac{-4 + 4i}{2} = -2 + 2i.$$
L'ensemble des solutions est $S = \\lbrace -2i \\,;\\, 1 + i \\,;\\, -2 + 2i \\rbrace$.

*[Barème type BAC : $P(-2i) = 0$ = 1 pt — factorisation $a, b$ = 1,5 pt — discriminant et racine carrée = 1 pt — solutions = 1 pt — Total : 4,5 pts]*`,
        },
        {
          type: 'figure',
          id: 'fig-m3-2',
          src: '/images/t10/fig_M3_2.png',
          legende: `Un polynôme de degré 3 a exactement trois racines dans le plan complexe.`,
          alt: `Un plan complexe avec les trois racines -2i, 1 + i et -2 + 2i marquées par leurs affixes.`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-a',
          pf: `Mais Grand Frère, pourquoi ça m'arrange de connaître une racine à l'avance ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-b',
          gf: `Parce que ça transforme une grosse serrure de degré 3 en une petite serrure de degré 2 que tu sais déjà ouvrir, Champion(ne) ! Tu détaches la banane connue, et le reste du régime tombe tout seul. C'est le cadeau que le sujet te fait : ne le refuse jamais.`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Vérifie toujours tes racines en les élevant au carré. Réponses finales seulement.

- **Exercice 1.** Résous dans $\\mathbb{C}$ : $z^2 - 2z + 5 = 0$. *(Réponse : $\\Delta = -16$, $z = 1 \\pm 2i$.)*
- **Exercice 2.** Détermine les racines carrées de $-5 + 12i$. *(Réponse : $\\pm(2 + 3i)$.)*
- **Exercice 3.** $z^2 - 2\\sqrt{3}\\,z + 4 = 0$. *(Réponse : $\\Delta = -4$, $z = \\sqrt{3} \\pm i$.)*`,
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
            `Un $\\Delta < 0$ (coefficients réels) donne **deux racines conjuguées** avec $i\\sqrt{|\\Delta|}$.`,
            `📘 Vocabulaire officiel : discriminant, racines conjuguées, racine évidente, factorisation.`,
            `Les **racines carrées** d'un complexe se trouvent par le **système à 3 lignes** (Re, module, Im).`,
            `Une racine connue d'un degré 3 → on **factorise** par $(z - z_0)$, puis on résout le reste.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m3',
          titre: `Fil rouge`,
          contenu: `Tu sais ouvrir les portes une à une. Mais que se passe-t-il quand on cherche **toutes** les solutions de $z^n = 1$, réparties bien régulièrement ? Au Module 4, on découpe le cercle en parts égales : les racines n-ièmes.`,
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
            `Je résous sans paniquer un second degré réel quand $\\Delta < 0$.`,
            `J'emploie le vocabulaire officiel : discriminant, racines conjuguées, factorisation.`,
            `Je sais poser le système à 3 lignes pour les racines carrées d'un complexe.`,
            `Je sais factoriser un degré 3 par $(z - z_0)$ à partir d'une racine connue.`,
            `Je sais résoudre un second degré à coefficients complexes.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m3',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Direction le Module 4, on découpe le cercle.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et la procédure de factorisation.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel, l'image du trousseau de clés.`,
          ],
        },
      ],
    },
  ],
};
