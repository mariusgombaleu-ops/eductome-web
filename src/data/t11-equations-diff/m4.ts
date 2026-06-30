import { Chapitre } from '../../types/course';

export const chapitreM4: Chapitre = {
  id: 't11-m4',
  titre: `Module 4 — Le second ordre : les oscillations`,
  duree: 26,
  niveau: 'MOYEN',
  xpGain: 28,
  objectifs: [
    `Reconnaître une équation du second ordre de type oscillateur y'' + ω²y = 0`,
    `Lire la pulsation ω et écrire la solution A cos(ωx) + B sin(ωx)`,
    `Dériver la solution générale pour exploiter la condition sur y'(0)`,
    `Déterminer A et B par un système de deux équations à deux inconnues`,
    `Vérifier la solution par double substitution`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, jusqu'ici on n'avait que $y'$. Là on me met $y'' + 4y = 0$ avec une dérivée seconde. Et la réponse, ce serait du cosinus et du sinus ? D'où ça sort, ça ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Bienvenue dans le monde qui vibre, Champion(ne) ! La dérivée seconde, c'est l'accélération. Et quand l'accélération d'un objet le rappelle toujours vers son point de repos, proportionnellement à son écart, il se met à osciller : aller, retour, aller, retour. Les seules fonctions capables de faire ça en se redérivant ainsi, ce sont le cosinus et le sinus. C'est la signature mathématique de tout ce qui balance.`,
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
          contenu: `Pense à la balançoire dans la cour de l'école, ou au hamac tendu sous le manguier. Tu écartes le siège de sa position de repos, tu lâches : il revient, dépasse, repart de l'autre côté, et recommence. Toujours le même va-et-vient régulier, à la même cadence.

Pourquoi ce mouvement éternel ? Parce qu'à chaque instant, une force le rappelle vers le centre, d'autant plus fort qu'il s'en est éloigné. L'accélération est donc toujours dirigée vers le point de repos, opposée à la position. Plus tu es loin du centre, plus ça te ramène vite. Ce rappel permanent vers l'équilibre, c'est ce qui crée l'oscillation : un balancement qui ne s'arrête pas, décrit exactement par un cosinus et un sinus.`,
        },
        {
          type: 'figure',
          id: 'fig-m4-1',
          src: '/images/t11/fig_M4_1.png',
          legende: `La solution oscille indéfiniment autour de la position de repos : c'est le balancement régulier de la balançoire.`,
          alt: `Une sinusoïde régulière oscillant autour de l'axe horizontal, représentant la position en fonction du temps.`,
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
          contenu: `On traduit la balançoire, brique par brique.

- La position du siège à l'instant $x$ → la fonction $y(x)$
- L'accélération du siège → la dérivée seconde $y''(x)$
- « le rappel vers le centre, proportionnel à l'écart » → $y'' = -\\omega^2 y$
- La cadence du va-et-vient → la pulsation $\\omega$
- La position et la vitesse de départ → les conditions $y(0)$ et $y'(0)$`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène de la balançoire`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`La position du siège`, `$y(x)$`, `La fonction inconnue`],
            [`L'accélération`, `$y''(x)$`, `La dérivée seconde`],
            [`Le rappel vers le centre`, `$y'' = -\\omega^2 y$`, `L'équation de l'oscillateur`],
            [`La cadence du balancement`, `$\\omega$`, `La pulsation (réel positif)`],
            [`Position et vitesse initiales`, `$y(0)$ et $y'(0)$`, `Les deux conditions initiales`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `Chaque morceau a son symbole : voici la définition rigoureuse.`,
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
          contenu: `Champion(ne), la balançoire, c'est l'image. Voici la langue exacte du BAC.

**Définition formelle.** Soit $\\omega$ un réel strictement positif. Les solutions sur $\\mathbb{R}$ de l'équation différentielle du second ordre $(E) : y'' + \\omega^2 y = 0$ sont les fonctions $y(x) = A\\cos(\\omega x) + B\\sin(\\omega x)$, où $A$ et $B$ sont deux nombres réels. Deux conditions initiales (par exemple $y(0)$ et $y'(0)$) sont nécessaires pour déterminer le couple $(A \\,;\\, B)$.

**En langage courant.** Une équation où l'accélération s'oppose à la position donne un mouvement oscillant, combinaison d'un cosinus et d'un sinus de même pulsation.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Équation du second ordre** — elle contient $y''$.
- **Pulsation** $\\omega$ — la racine carrée du coefficient de $y$ ($\\omega^2$).
- **Solution générale** — $A\\cos(\\omega x) + B\\sin(\\omega x)$, avec $A, B \\in \\mathbb{R}$.
- **Conditions initiales** — il en faut **deux** au second ordre, sur $y(0)$ et $y'(0)$.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `La phrase exacte : « Les solutions de $y'' + \\omega^2 y = 0$ sont les fonctions $y(x) = A\\cos(\\omega x) + B\\sin(\\omega x)$, $A, B \\in \\mathbb{R}$. »`,
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
          titre: `Règle d'Or — L'oscillateur du second ordre`,
          contenu: `$$\\boxed{\\,y'' + \\omega^2 y = 0 \\quad (\\omega > 0) \\quad \\Longleftrightarrow \\quad y(x) = A\\cos(\\omega x) + B\\sin(\\omega x)\\,}$$

La pulsation se lit en prenant la racine carrée du coefficient : si $y'' + 25y = 0$, alors $\\omega^2 = 25$, donc $\\omega = 5$.`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Avec une condition en $x = 0$, c'est très commode : $\\cos(0) = 1$ et $\\sin(0) = 0$. Donc $y(0) = A$ se lit directement, et après dérivation $y'(0) = B\\omega$. Les deux constantes tombent presque toutes seules.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `La pulsation est $\\omega = \\sqrt{25} = 5$, pas $25$. On prend la racine carrée du coefficient de $y$. Confondre $\\omega$ et $\\omega^2$ fausse toute la solution.`,
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
          contenu: `Tu vois une dérivée seconde $y''$ et un signe **plus** devant le terme en $y$ : $y'' + (\\text{positif})\\,y = 0$. C'est un oscillateur. La réponse sera en cosinus/sinus, et il te faudra deux conditions initiales.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Forme de l'équation`, `Ton action`],
          rows: [
            [`$y'' + \\omega^2 y = 0$`, `Lire $\\omega = \\sqrt{\\omega^2}$, poser $A\\cos(\\omega x) + B\\sin(\\omega x)$.`],
            [`Une condition $y(0)$`, `Donne $A$ directement (car $\\cos 0 = 1$, $\\sin 0 = 0$).`],
            [`Une condition $y'(0)$`, `Dériver d'abord la solution, puis remplacer : donne $B\\omega$.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure en 4 étapes`,
          contenu: `**Étape 1.** Lis la pulsation $\\omega = \\sqrt{\\omega^2}$ et écris $y(x) = A\\cos(\\omega x) + B\\sin(\\omega x)$.

**Étape 2.** Calcule la dérivée $y'(x) = -A\\omega\\sin(\\omega x) + B\\omega\\cos(\\omega x)$.

**Étape 3.** Remplace $x$ par $0$ dans $y$ et $y'$ : tu obtiens un système de deux équations en $A$ et $B$.

**Étape 4.** Résous le système pour trouver $A$ et $B$, et écris la solution finale.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `Dérive ta solution **deux fois**, puis injecte $y$ et $y''$ dans $y'' + \\omega^2 y$. Tu dois obtenir $0$. Sinon, vérifie le signe de $\\omega^2$ et tes dérivées.`,
        },
        {
          type: 'figure',
          id: 'fig-m4-2',
          src: '/images/t11/fig_M4_2.png',
          legende: `Toute oscillation est une combinaison de ces deux briques : le cosinus (qui démarre en haut) et le sinus (qui démarre à zéro).`,
          alt: `Les courbes cos(x) et sin(x) superposées, décalées d'un quart de période.`,
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
            [`🟢 BASE`, `Résoudre $y'' + \\omega^2 y = 0$`, `Signe + devant $y$, pas de second membre`, `Type 1`],
            [`🟡 MOYEN`, `Déterminer $A$ et $B$ (deux conditions)`, `On donne $y(0)$ et $y'(0)$`, `Type 1`],
            [`🔴 BAC`, `Résolution complète + vérification`, `« Résous, détermine, vérifie »`, `Type 2`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Oscillateur avec deux conditions** *(BASE / MOYEN)*. Soit $(E) : y'' + 9y = 0$. **1.** Donne la solution générale de $(E)$. **2.** Détermine la solution telle que $y(0) = 2$ et $y'(0) = 3$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Signe plus, second ordre : oscillateur. On lit $\\omega$, on pose la solution, on dérive, on applique les deux conditions.` },
            { name: `Étape 1`, contenu: `$\\omega^2 = 9$ donc $\\omega = 3$. Solution générale : $y(x) = A\\cos(3x) + B\\sin(3x)$.` },
            { name: `Étape 2`, contenu: `$y'(x) = -3A\\sin(3x) + 3B\\cos(3x)$. En $x = 0$ : $y(0) = A = 2$ et $y'(0) = 3B = 3$, donc $B = 1$.` },
          ],
          reponse: `$y(x) = 2\\cos(3x) + \\sin(3x)$.`,
          conseil: `Dérive la solution générale AVANT de remplacer : la condition sur $y'(0)$ est inexploitable sans la dérivée.`,
          piege: `En $x = 0$, $y'(0) = -3A\\sin(0) + 3B\\cos(0) = 3B$. Le terme en $A$ disparaît (car $\\sin 0 = 0$) : c'est $B$ qu'on lit, pas $A$.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$(E) : y'' + 9y = 0$ avec $\\omega^2 = 9$, donc $\\omega = 3$.
La solution générale est :
$$y(x) = A\\cos(3x) + B\\sin(3x), \\quad A, B \\in \\mathbb{R}.$$
On dérive : $y'(x) = -3A\\sin(3x) + 3B\\cos(3x)$.
Conditions : $y(0) = A = 2$ et $y'(0) = 3B = 3 \\Rightarrow B = 1$.
La solution cherchée est :
$$y(x) = 2\\cos(3x) + \\sin(3x).$$

*[Barème type BAC : pulsation + solution générale = 1 pt — dérivée = 0,5 pt — système $A, B$ = 1,5 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 2 — Résolution complète et vérification** *(BAC)*. Résous $(E) : y'' + 25y = 0$, détermine la solution telle que $y(0) = 1$ et $y'(0) = -5$, puis vérifie-la.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Oscillateur de pulsation $\\omega = 5$ ; système puis vérification par double dérivation.` },
            { name: `Étape 1`, contenu: `$\\omega = \\sqrt{25} = 5$, donc $y(x) = A\\cos(5x) + B\\sin(5x)$.` },
            { name: `Étape 2`, contenu: `$y'(x) = -5A\\sin(5x) + 5B\\cos(5x)$. Conditions : $y(0) = A = 1$ ; $y'(0) = 5B = -5$ donc $B = -1$.` },
          ],
          reponse: `$y(x) = \\cos(5x) - \\sin(5x)$. Vérification : $y''(x) = -25\\cos(5x) + 25\\sin(5x) = -25\\,y(x)$, donc $y'' + 25y = 0$. ✓`,
          conseil: `Au second ordre, la vérification demande $y''$ : prends le temps de dériver proprement deux fois, c'est noté.`,
          piege: `$\\big(\\cos(5x)\\big)'' = -25\\cos(5x)$ : deux dérivations font apparaître $-\\omega^2 = -25$. Ne perds pas ce facteur.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$(E) : y'' + 25y = 0$ avec $\\omega^2 = 25$, soit $\\omega = 5$. Solution générale :
$$y(x) = A\\cos(5x) + B\\sin(5x).$$
$y'(x) = -5A\\sin(5x) + 5B\\cos(5x)$. Conditions : $y(0) = A = 1$ et $y'(0) = 5B = -5 \\Rightarrow B = -1$.
$$y(x) = \\cos(5x) - \\sin(5x).$$
**Vérification.** $y'(x) = -5\\sin(5x) - 5\\cos(5x)$, puis $y''(x) = -25\\cos(5x) + 25\\sin(5x) = -25\\big(\\cos(5x) - \\sin(5x)\\big) = -25\\,y(x)$.
Donc $y'' + 25y = 0$. ✓

*[Barème type BAC : solution générale = 1 pt — système $A, B$ = 1 pt — vérification par double dérivation = 1 pt — Total : 3 pts]*`,
        },
        {
          type: 'figure',
          id: 'fig-m4-3',
          src: '/images/t11/fig_M4_3.png',
          legende: `Les deux conditions initiales — position $y(0) = 1$ et vitesse $y'(0) = -5$ — fixent une oscillation unique.`,
          alt: `La courbe y = cos(5x) - sin(5x) avec le point de départ (0 ; 1) et une flèche de pente descendante figurant la vitesse initiale.`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-a',
          pf: `Pourquoi il faut DEUX conditions ici, alors qu'au premier ordre une seule suffisait ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-b',
          gf: `Parce qu'il y a deux constantes à fixer, $A$ et $B$, Champion(ne). Pense à la balançoire : pour décrire son mouvement, il faut savoir où elle est au départ ET à quelle vitesse tu l'as lâchée. Une seule info ne suffit pas. Deux inconnues, deux conditions : c'est logique.`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Lis $\\omega$, dérive, applique les deux conditions. Réponses finales seulement.

- **Exercice 1.** Résous $y'' + 4y = 0$. *(Réponse : $\\omega = 2$, $y(x) = A\\cos(2x) + B\\sin(2x)$.)*
- **Exercice 2.** Solution de $y'' + y = 0$ telle que $y(0) = 0$ et $y'(0) = 1$. *(Réponse : $y(x) = \\sin(x)$.)*
- **Exercice 3.** Donne $\\omega$ pour $y'' + 49y = 0$. *(Réponse : $\\omega = 7$.)*`,
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
            `Un signe **plus** au second ordre, $y'' + \\omega^2 y = 0$, donne des **oscillations** : $A\\cos(\\omega x) + B\\sin(\\omega x)$.`,
            `📘 Vocabulaire officiel : second ordre, pulsation, conditions initiales (il en faut deux).`,
            `Le geste clé : lire $\\omega = \\sqrt{\\omega^2}$, puis **dériver** la solution avant d'utiliser $y'(0)$.`,
            `Deux constantes $A$ et $B$ → un système $2\\times 2$ à résoudre.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m4',
          titre: `Fil rouge`,
          contenu: `Ici, le signe plus faisait osciller la balançoire indéfiniment. Mais que se passe-t-il si le signe devient **moins**, $y'' - \\omega^2 y = 0$ ? Plus d'oscillation : le système s'emballe et diverge. C'est le sujet du Module 5, avec le retour des exponentielles réelles.`,
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
            `Je reconnais un oscillateur $y'' + \\omega^2 y = 0$ (signe plus, second ordre).`,
            `J'emploie le vocabulaire officiel : second ordre, pulsation, conditions initiales.`,
            `Je lis $\\omega = \\sqrt{\\omega^2}$ et j'écris $A\\cos(\\omega x) + B\\sin(\\omega x)$.`,
            `Je dérive la solution générale pour exploiter $y'(0)$ et résoudre le système $2\\times 2$.`,
            `Je vérifie ma solution par double dérivation.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m4',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Direction le Module 5, le signe va changer.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et la procédure en 4 étapes.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel, l'image de la balançoire.`,
          ],
        },
      ],
    },
  ],
};
