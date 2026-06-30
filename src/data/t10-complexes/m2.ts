import { Chapitre } from '../../types/course';

export const chapitreM2: Chapitre = {
  id: 't10-m2',
  titre: `Module 2 — Formes Trigonométrique et Exponentielle`,
  duree: 26,
  niveau: 'MOYEN',
  xpGain: 30,
  objectifs: [
    `Calculer le module d'un nombre complexe`,
    `Déterminer l'argument en vérifiant le cosinus ET le sinus`,
    `Écrire un complexe sous forme trigonométrique et exponentielle`,
    `Utiliser la formule de Moivre pour calculer une puissance géante`,
    `Multiplier et diviser sous forme exponentielle`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, si au BAC on me demande de calculer $(1 + i)^{100}$, je dois vraiment faire cent fois la double distributivité sur ma feuille ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Si tu fais ça, Champion(ne), tu y passes l'année entière et tu te trompes au troisième tour. La forme algébrique du Module 1 est parfaite pour additionner, mais elle est lente pour multiplier. On a besoin d'une autre façon d'écrire le même nombre, une écriture taillée pour les rotations et les puissances. C'est la boussole : une distance et une direction.`,
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
          contenu: `Tu veux indiquer à un ami où se trouve un bâtiment précis au Plateau. Tu as deux manières de faire. La première, c'est de lui donner deux rues : « avance de $3$ blocs vers l'est, puis de $2$ blocs vers le nord ». Ce sont les coordonnées cartésiennes, la forme algébrique.

La deuxième manière, plus maligne, c'est de lui tendre une boussole et un mètre : « marche en ligne droite sur $500$ mètres, dans cette direction précise ». Tu donnes une seule distance et un seul angle, et ton ami arrive au même endroit. La distance à parcourir depuis l'origine, c'est le **module** $r$. La direction visée par la boussole, c'est l'**argument** $\\theta$, l'angle entre l'axe réel et ton trajet. Même bâtiment, même point du plan, mais décrit par le duo $(r ; \\theta)$ au lieu du duo $(a ; b)$.`,
        },
        {
          type: 'figure',
          id: 'fig-m2-1',
          src: '/images/t10/fig_M2_1.png',
          legende: `Un complexe se repère par une distance $r$ (module) et une direction $\\theta$ (argument).`,
          alt: `Un plan complexe avec le point M, le segment OM de longueur r et l'angle theta entre l'axe réel et OM.`,
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
          contenu: `On traduit la boussole en langage mathématique, brique par brique.

- La distance en ligne droite depuis l'origine → le module $r = |z|$
- La direction visée → l'argument $\\theta = \\arg(z)$
- Le lien avec les rues → $a = r\\cos\\theta$ et $b = r\\sin\\theta$
- L'écriture compacte → $z = r(\\cos\\theta + i\\sin\\theta) = re^{i\\theta}$`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène de la boussole`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`La distance à marcher`, `$r = |z| = \\sqrt{a^2 + b^2}$`, `Le module`],
            [`La direction de la boussole`, `$\\theta = \\arg(z)$`, `L'argument (un angle)`],
            [`Le retour vers les rues`, `$a = r\\cos\\theta \\,;\\, b = r\\sin\\theta$`, `Le pont algébrique $\\leftrightarrow$ trigo`],
            [`L'adresse compacte`, `$z = re^{i\\theta}$`, `La forme exponentielle`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `Chaque morceau a son symbole : on peut écrire les définitions officielles.`,
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
          contenu: `Champion(ne), la boussole te donne l'intuition. Le correcteur, lui, attend les mots justes.

**Définition formelle.** Tout complexe non nul $z$ s'écrit $z = r(\\cos\\theta + i\\sin\\theta)$, où $r = |z| > 0$ est le **module** et $\\theta$ est un **argument** de $z$, noté $\\arg(z)$, défini à $2\\pi$ près. La notation $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ donne la **forme exponentielle** $z = re^{i\\theta}$.

**En langage courant.** Le module est la longueur, l'argument est l'angle. La forme exponentielle, c'est la boussole écrite en une seule ligne.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Module** $r = |z|$ — toujours strictement positif pour $z \\neq 0$.
- **Argument** $\\arg(z)$ — un angle, défini **modulo $2\\pi$** (on écrit $\\pmod{2\\pi}$).
- **Forme trigonométrique** — $r(\\cos\\theta + i\\sin\\theta)$.
- **Forme exponentielle** — $re^{i\\theta}$.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Les propriétés qui rapportent les points : $\\arg(zz') = \\arg(z) + \\arg(z') \\pmod{2\\pi}$ et $\\arg\\!\\left(\\dfrac{z}{z'}\\right) = \\arg(z) - \\arg(z') \\pmod{2\\pi}$.`,
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
          titre: `Règle d'Or — Les outils de la forme exponentielle`,
          contenu: `Pour $z_1 = r_1 e^{i\\theta_1}$ et $z_2 = r_2 e^{i\\theta_2}$ :
$$z_1 \\cdot z_2 = r_1 r_2 \\, e^{i(\\theta_1 + \\theta_2)} \\qquad \\dfrac{z_1}{z_2} = \\dfrac{r_1}{r_2} \\, e^{i(\\theta_1 - \\theta_2)}$$

**Formule de Moivre** (la machine à puissances) :
$$\\left(re^{i\\theta}\\right)^n = r^n e^{in\\theta} \\qquad (n \\in \\mathbb{Z})$$

**Formules d'Euler** (pour repasser en algébrique ou linéariser) :
$$\\cos\\theta = \\dfrac{e^{i\\theta} + e^{-i\\theta}}{2} \\qquad \\sin\\theta = \\dfrac{e^{i\\theta} - e^{-i\\theta}}{2i}$$`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Pour multiplier : on multiplie les modules et on additionne les angles. Pour diviser : on divise les modules et on soustrait les angles. Toujours dans cet ordre, Champion(ne).`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Ne choisis jamais ton argument en regardant seulement le cosinus OU seulement le sinus. Tu dois vérifier les **deux signes** pour savoir dans quel quadrant tu te trouves. Un seul signe oublié, et tu te retrouves dans le mauvais coin du plan.`,
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
          contenu: `Regarde ce que l'énoncé veut faire avec ton nombre. S'il faut additionner, reste en algébrique. S'il faut multiplier, diviser ou élever à une grande puissance, passe en exponentielle.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Ce que tu dois faire`, `La forme à choisir`],
          rows: [
            [`Additionner ou soustraire`, `Rester en forme algébrique $a + ib$.`],
            [`Multiplier ou diviser`, `Passer en forme exponentielle $re^{i\\theta}$.`],
            [`Élever à une grande puissance $n$`, `Forme exponentielle, puis formule de Moivre.`],
            [`Linéariser un $\\cos^n$ ou $\\sin^n$`, `Utiliser les formules d'Euler.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure (trouver la forme exponentielle de z = a + ib)`,
          contenu: `**Étape 1.** Calcule le module $r = \\sqrt{a^2 + b^2}$.

**Étape 2.** Pose le système $\\cos\\theta = \\dfrac{a}{r}$ et $\\sin\\theta = \\dfrac{b}{r}$.

**Étape 3.** Identifie $\\theta$ grâce au cercle trigonométrique, en respectant les deux signes, puis écris $z = re^{i\\theta}$.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `Pendant que ton voisin remplit trois pages de brouillon pour une puissance, toi tu sais que ton résultat de Moivre doit retomber sur un angle simple, repassable en algébrique. Si l'angle final est un multiple de $2\\pi$, le résultat est un réel positif.`,
        },
        {
          type: 'figure',
          id: 'fig-m2-2',
          src: '/images/t10/fig_M2_2.png',
          legende: `Cosinus négatif et sinus positif placent $z$ dans le deuxième quadrant : $\\theta = \\dfrac{2\\pi}{3}$.`,
          alt: `Un plan complexe avec le cercle de rayon 2, le point z = -1 + i racine de 3 dans le deuxième quadrant et l'angle 2pi/3.`,
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
            [`🟡 MOYEN`, `Passage à la forme exponentielle`, `« Donne la forme trigonométrique / exponentielle de... »`, `Type 1`],
            [`🔴 BAC`, `Calcul d'une grande puissance`, `« Calcule $z^n$ » avec $n$ grand`, `Type 2`],
            [`🔴 BAC`, `Produit ou quotient à simplifier`, `« Détermine la forme exponentielle de $\\dfrac{z_1}{z_2}$ »`, `Type 2`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 1 — Forme exponentielle** *(MOYEN)*. Donne la forme trigonométrique puis exponentielle de $z = -1 + i\\sqrt{3}$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `On a la forme algébrique, on cherche la boussole $(r ; \\theta)$.` },
            { name: `Étape 1`, contenu: `$r = \\sqrt{(-1)^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = 2$.` },
            { name: `Étape 2`, contenu: `$\\cos\\theta = \\dfrac{-1}{2}$ et $\\sin\\theta = \\dfrac{\\sqrt{3}}{2}$ : cosinus négatif, sinus positif, donc deuxième quadrant.` },
          ],
          reponse: `$\\theta = \\dfrac{2\\pi}{3}$, donc $z = 2\\left(\\cos\\dfrac{2\\pi}{3} + i\\sin\\dfrac{2\\pi}{3}\\right) = 2e^{i\\frac{2\\pi}{3}}$.`,
          conseil: `Fais un mini-cercle au coin du brouillon et place les signes : cosinus négatif, sinus positif, donc deuxième quadrant.`,
          piege: `L'angle dont le cosinus vaut $\\dfrac{1}{2}$ est $\\dfrac{\\pi}{3}$ ; ici le cosinus est **négatif**, donc on prend $\\pi - \\dfrac{\\pi}{3} = \\dfrac{2\\pi}{3}$, pas $\\dfrac{\\pi}{3}$.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$$r = |z| = \\sqrt{(-1)^2 + (\\sqrt{3})^2} = 2$$
On cherche $\\theta$ tel que $\\cos\\theta = -\\dfrac{1}{2}$ et $\\sin\\theta = \\dfrac{\\sqrt{3}}{2}$. Le cosinus est négatif et le sinus positif : $\\theta = \\dfrac{2\\pi}{3}$.
Forme trigonométrique : $z = 2\\left(\\cos\\dfrac{2\\pi}{3} + i\\sin\\dfrac{2\\pi}{3}\\right)$.
Forme exponentielle : $z = 2e^{i\\frac{2\\pi}{3}}$.

*[Barème type BAC : module = 1 pt — système cos/sin = 0,5 pt — argument = 0,5 pt — formes = 0,5 pt — Total : 2,5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 2 — Puissance par Moivre** *(BAC)*. Avec $z = -1 + i\\sqrt{3}$, calcule $z^6$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Une grande puissance : on part de la forme exponentielle et on applique Moivre.` },
            { name: `Étape 1`, contenu: `On a déjà $z = 2e^{i\\frac{2\\pi}{3}}$.` },
            { name: `Étape 2`, contenu: `On applique $\\left(re^{i\\theta}\\right)^n = r^n e^{in\\theta}$ : $z^6 = 2^6 e^{i(6 \\times \\frac{2\\pi}{3})} = 64\\,e^{i4\\pi}$.` },
          ],
          reponse: `$4\\pi$ correspond à deux tours complets, donc $e^{i4\\pi} = 1$ et $z^6 = 64$.`,
          conseil: `Simplifie l'angle final modulo $2\\pi$ : $6 \\times \\dfrac{2\\pi}{3} = 4\\pi$, soit deux tours complets, donc retour sur l'axe réel positif.`,
          piege: `N'oublie pas d'élever aussi le module à la puissance : $2^6 = 64$, pas $2$.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$$z^6 = \\left(2e^{i\\frac{2\\pi}{3}}\\right)^6 = 2^6 \\, e^{i\\left(6 \\times \\frac{2\\pi}{3}\\right)} = 64\\, e^{i4\\pi}$$
Or $4\\pi$ correspond à deux tours complets, donc $e^{i4\\pi} = 1$ :
$$z^6 = 64$$

*[Barème type BAC : forme exponentielle = 1 pt — application de Moivre = 1 pt — simplification de l'angle = 0,5 pt — résultat = 0,5 pt — Total : 3 pts]*`,
        },
        {
          type: 'figure',
          id: 'fig-m2-3',
          src: '/images/t10/fig_M2_3.png',
          legende: `Multiplier deux complexes : on multiplie les modules et on additionne les arguments. La multiplication fait tourner.`,
          alt: `Un plan complexe avec le cercle unité, deux points z1 et z2 et leur produit d'argument theta1 + theta2.`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-a',
          pf: `Et si ma calculatrice me sort un angle bizarre quand je tape l'inverse du cosinus ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-b',
          gf: `C'est pour ça qu'on pose le système, Champion(ne) ! Ta machine te donne une valeur aveugle, sans savoir où tu es sur la carte. Toi, avec les signes du cosinus ET du sinus, tu trouves le bon quartier d'Abidjan à tous les coups.`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Garde ton mini-cercle sous les yeux. Réponses finales seulement.

- **Exercice 1.** Donne la forme exponentielle de $z = 1 + i$. *(Réponse : $z = \\sqrt{2}\\,e^{i\\frac{\\pi}{4}}$.)*
- **Exercice 2.** Calcule $(1 + i)^{8}$. *(Réponse : $\\left(\\sqrt{2}\\,e^{i\\frac{\\pi}{4}}\\right)^8 = 16\\,e^{i2\\pi} = 16$.)*
- **Exercice 3.** Donne le module et un argument de $z = -2i$. *(Réponse : $r = 2$, $\\theta = -\\dfrac{\\pi}{2} \\pmod{2\\pi}$.)*`,
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
            `Un complexe se décrit par ses **rues** $(a ; b)$ ou par sa **boussole** $(r ; \\theta)$.`,
            `📘 Vocabulaire officiel : module, argument (modulo $2\\pi$), forme trigonométrique, forme exponentielle.`,
            `Le geste clé : passer en **exponentielle** $re^{i\\theta}$ pour multiplier, diviser et appliquer **Moivre**.`,
            `Pour l'argument : toujours vérifier le **cosinus ET le sinus** pour le bon quadrant.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m2',
          titre: `Fil rouge`,
          contenu: `Tu sais maintenant faire tourner ta boussole. Au Module 3, on va s'en servir pour résoudre des équations qui semblaient impossibles dans le réel, et pour casser un polynôme entier grâce à une seule racine connue.`,
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
            `Je sais calculer le module $r = \\sqrt{a^2 + b^2}$.`,
            `Je sais déterminer l'argument en vérifiant le cosinus ET le sinus.`,
            `J'emploie le vocabulaire officiel : module, argument modulo $2\\pi$, forme exponentielle.`,
            `Je sais écrire un complexe sous la forme $z = re^{i\\theta}$.`,
            `Je sais appliquer la formule de Moivre pour calculer $z^n$.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m2',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Direction le Module 3, on résout l'impossible.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et la procédure de l'argument.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel, l'image de la boussole.`,
          ],
        },
      ],
    },
  ],
};
