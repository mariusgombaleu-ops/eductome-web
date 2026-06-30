import { Chapitre } from '../../types/course';

export const chapitreM5: Chapitre = {
  id: 't11-m5',
  titre: `Module 5 — Le second ordre : exponentielles et cas affine`,
  duree: 26,
  niveau: 'MOYEN',
  xpGain: 28,
  objectifs: [
    `Distinguer les trois types d'équations du second ordre selon le signe`,
    `Résoudre y'' - ω²y = 0 et écrire Ae^(ωx) + Be^(-ωx)`,
    `Traiter le cas y'' = 0 (solution affine) et reconnaître y'' = ω²y`,
    `Déterminer A et B par un système de deux conditions initiales`,
    `Choisir le bon modèle de solution selon le signe devant y`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, au Module 4 c'était $y'' + 4y = 0$ et ça oscillait avec des cosinus. Mais là on me donne $y'' - 4y = 0$, juste un signe qui change. Ça donne encore du cosinus ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Surtout pas, Champion(ne) ! Ce petit signe change tout. Avec un plus, la force ramène vers le centre : ça oscille. Avec un moins, la force pousse vers l'extérieur : ça s'emballe et ça file vers l'infini. Plus de balancement, plus de cosinus. À la place, des exponentielles réelles qui explosent ou s'éteignent. Le signe devant $y$, c'est le chef d'orchestre.`,
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
          contenu: `Imagine une bille posée en équilibre tout en haut d'une bosse arrondie, comme un dos d'âne sur la route de Bingerville. En théorie, si elle est pile au sommet, elle reste. Mais au moindre souffle, elle s'écarte un peu — et là, au lieu de revenir, elle dévale. Plus elle s'éloigne du sommet, plus la pente l'emporte vite.

C'est l'inverse exact de la balançoire. La balançoire était rappelée vers son centre (équilibre stable, oscillation) ; la bille, elle, est repoussée loin de son sommet (équilibre instable, fuite). L'accélération n'est plus opposée à la position, elle est dans le même sens : plus tu t'écartes, plus ça t'écarte encore. Le mouvement ne revient jamais : il diverge, porté par une exponentielle qui grandit.`,
        },
        {
          type: 'figure',
          id: 'fig-m5-1',
          src: '/images/t11/fig_M5_1.png',
          legende: `Au signe moins, les solutions se construisent sur deux exponentielles réelles : l'une qui explose, l'autre qui s'éteint.`,
          alt: `Les courbes e^x (croissante) et e^(-x) (décroissante) passant toutes deux par le point (0 ; 1).`,
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
          contenu: `On traduit la bille sur la bosse, brique par brique.

- La position de la bille → la fonction $y(x)$
- Son accélération → la dérivée seconde $y''(x)$
- « la pente la pousse plus loin, proportionnellement à l'écart » → $y'' = \\omega^2 y$
- La raideur de la fuite → la constante $\\omega$
- L'évolution complète → la combinaison $Ae^{\\omega x} + Be^{-\\omega x}$`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène de la bille`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`La position de la bille`, `$y(x)$`, `La fonction inconnue`],
            [`L'accélération`, `$y''(x)$`, `La dérivée seconde`],
            [`« la pente repousse, proportionnellement »`, `$y'' = \\omega^2 y$`, `L'équation divergente`],
            [`La raideur de la fuite`, `$\\omega > 0$`, `Le coefficient`],
            [`L'évolution complète`, `$Ae^{\\omega x} + Be^{-\\omega x}$`, `La solution générale`],
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
          contenu: `Champion(ne), la bille qui dévale, c'est l'image. Voici la langue du BAC.

**Définition formelle.** Soit $\\omega$ un réel strictement positif. Les solutions de $(E) : y'' - \\omega^2 y = 0$ (équivalente à $y'' = \\omega^2 y$) sont les fonctions $y(x) = Ae^{\\omega x} + Be^{-\\omega x}$, avec $A, B \\in \\mathbb{R}$. Le cas particulier $(E_0) : y'' = 0$ a pour solutions les fonctions affines $y(x) = ax + b$.

**En langage courant.** Un signe moins (la force éloigne du centre) donne des exponentielles réelles, pas des oscillations ; un coefficient nul donne une simple droite.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Équation divergente** $y'' - \\omega^2 y = 0$ — solutions exponentielles réelles.
- **Solution générale** — $Ae^{\\omega x} + Be^{-\\omega x}$, avec $A, B \\in \\mathbb{R}$.
- **Cas affine** — si $y'' = 0$, les solutions sont $y(x) = ax + b$.
- **Conditions initiales** — deux conditions $y(0)$, $y'(0)$ pour fixer $A$ et $B$.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `« Les solutions de $y'' - \\omega^2 y = 0$ sont les fonctions $y(x) = Ae^{\\omega x} + Be^{-\\omega x}$, $A, B \\in \\mathbb{R}$. »`,
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
          titre: `Règle d'Or — Les trois visages du second ordre`,
          contenu: `$$y'' + \\omega^2 y = 0 \\;\\Rightarrow\\; A\\cos(\\omega x) + B\\sin(\\omega x) \\qquad \\text{(oscille)}$$
$$y'' - \\omega^2 y = 0 \\;\\Rightarrow\\; Ae^{\\omega x} + Be^{-\\omega x} \\qquad \\text{(diverge)}$$
$$y'' = 0 \\;\\Rightarrow\\; ax + b \\qquad \\text{(affine)}$$`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Le diagnostic tient en un coup d'œil sur le signe du terme constant. Plus → ça tourne (cos/sin). Moins → ça file (exponentielles). Zéro → ça suit une droite. Garde ce petit tableau en tête au BAC.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Ne mélange jamais les deux mondes : un signe moins ne donne JAMAIS de cosinus, et un signe plus ne donne JAMAIS d'exponentielle réelle. La confusion cos/sin ↔ exp est l'erreur la plus fréquente sur ce chapitre.`,
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
          contenu: `Regarde le signe devant le terme en $y$. Un **moins** ($y'' - \\omega^2 y = 0$, ou $y'' = \\omega^2 y$) annonce des exponentielles réelles. Un coefficient **nul** ($y'' = 0$) annonce une droite. Le reste de la méthode est identique au Module 4 : deux conditions, un système.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Forme de l'équation`, `Solution à poser`],
          rows: [
            [`$y'' - \\omega^2 y = 0$ ou $y'' = \\omega^2 y$`, `$Ae^{\\omega x} + Be^{-\\omega x}$`],
            [`$y'' + \\omega^2 y = 0$`, `$A\\cos(\\omega x) + B\\sin(\\omega x)$ (Module 4)`],
            [`$y'' = 0$`, `$ax + b$ (fonction affine)`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure en 4 étapes`,
          contenu: `**Étape 1.** Diagnostique le signe et lis $\\omega = \\sqrt{\\omega^2}$.

**Étape 2.** Écris $y(x) = Ae^{\\omega x} + Be^{-\\omega x}$.

**Étape 3.** Dérive : $y'(x) = A\\omega e^{\\omega x} - B\\omega e^{-\\omega x}$. Remplace en $x = 0$ pour obtenir le système.

**Étape 4.** Résous le système en $A$ et $B$, écris la solution.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `Dérive deux fois ta solution et injecte dans $y'' - \\omega^2 y$. Comme $\\big(e^{\\omega x}\\big)'' = \\omega^2 e^{\\omega x}$, tu dois obtenir $0$.`,
        },
        {
          type: 'figure',
          id: 'fig-m5-2',
          src: '/images/t11/fig_M5_2.png',
          legende: `La somme $e^{2x} + e^{-2x}$ part de son minimum en $0$ puis diverge des deux côtés : pas d'oscillation, une fuite.`,
          alt: `La courbe y = e^(2x) + e^(-2x), une cuvette symétrique de minimum (0 ; 2) qui remonte des deux côtés.`,
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
            [`🟢 BASE`, `Résoudre $y'' - \\omega^2 y = 0$`, `Signe moins devant $y$`, `Type 1`],
            [`🟡 MOYEN`, `Déterminer $A$ et $B$ (deux conditions)`, `On donne $y(0)$ et $y'(0)$`, `Type 1`],
            [`🔴 BAC`, `Diagnostic des trois types + résolution`, `« Précise la nature, puis résous »`, `Type 2`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Équation divergente avec conditions** *(BASE / MOYEN)*. Soit $(E) : y'' - 4y = 0$. **1.** Donne la solution générale de $(E)$. **2.** Détermine la solution telle que $y(0) = 2$ et $y'(0) = 0$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Signe moins, second ordre : exponentielles réelles. On pose la solution, on dérive, on applique les deux conditions.` },
            { name: `Étape 1`, contenu: `$\\omega^2 = 4$ donc $\\omega = 2$. Solution générale : $y(x) = Ae^{2x} + Be^{-2x}$.` },
            { name: `Étape 2`, contenu: `$y'(x) = 2Ae^{2x} - 2Be^{-2x}$. En $x = 0$ : $y(0) = A + B = 2$ et $y'(0) = 2A - 2B = 0$, donc $A = B$. Avec $A + B = 2$ : $A = B = 1$.` },
          ],
          reponse: `$y(x) = e^{2x} + e^{-2x}$.`,
          conseil: `Quand $y'(0) = 0$, l'équation $2A - 2B = 0$ donne tout de suite $A = B$ : un raccourci qui simplifie le système.`,
          piege: `$\\big(e^{-2x}\\big)' = -2e^{-2x}$ : le signe moins descend. Une erreur ici fausse la deuxième équation du système.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$(E) : y'' - 4y = 0$ avec $\\omega^2 = 4$, soit $\\omega = 2$. Solution générale :
$$y(x) = Ae^{2x} + Be^{-2x}, \\quad A, B \\in \\mathbb{R}.$$
$y'(x) = 2Ae^{2x} - 2Be^{-2x}$. Conditions :
$$\\begin{cases} y(0) = A + B = 2 \\\\ y'(0) = 2A - 2B = 0 \\end{cases} \\Rightarrow A = B = 1.$$
La solution cherchée est :
$$y(x) = e^{2x} + e^{-2x}.$$

*[Barème type BAC : solution générale = 1 pt — dérivée = 0,5 pt — système $A, B$ = 1,5 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 2 — Diagnostic et résolution des trois types** *(BAC)*. Pour chacune des équations, précise la nature des solutions puis résous : **1.** $(E_1) : y'' - 9y = 0$ ; **2.** $(E_2) : y'' = 0$ avec $y(0) = 1$ et $y'(0) = 2$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Item 1 : signe moins → exponentielles. Item 2 : dérivée seconde nulle → fonction affine.` },
            { name: `Étape 1`, contenu: `$(E_1)$ : $\\omega = 3$, solutions $Ae^{3x} + Be^{-3x}$.` },
            { name: `Étape 2`, contenu: `$(E_2)$ : $y'' = 0$ donne $y(x) = ax + b$ ; $y'(x) = a$, donc $y'(0) = a = 2$ et $y(0) = b = 1$.` },
          ],
          reponse: `$(E_1)$ : $y(x) = Ae^{3x} + Be^{-3x}$ (divergent). $(E_2)$ : $y(x) = 2x + 1$ (affine).`,
          conseil: `Avant tout calcul, écris la nature : « solutions exponentielles » ou « fonction affine ». Le correcteur attend ce diagnostic, et il rapporte des points.`,
          piege: `$y'' = 0$ n'a pas de constante $\\omega$ : c'est le cas affine $ax + b$, pas une exponentielle. Ne force pas le modèle.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `**1.** $(E_1) : y'' - 9y = 0$ est de type divergent avec $\\omega = 3$. Ses solutions sont :
$$y(x) = Ae^{3x} + Be^{-3x}, \\quad A, B \\in \\mathbb{R}.$$
**2.** $(E_2) : y'' = 0$ a pour solutions les fonctions affines $y(x) = ax + b$. On dérive : $y'(x) = a$.
Conditions : $y'(0) = a = 2$ et $y(0) = b = 1$. Donc :
$$y(x) = 2x + 1.$$

*[Barème type BAC : nature + solutions $(E_1)$ = 1,5 pt — cas affine $(E_2)$ = 1 pt — conditions = 0,5 pt — Total : 3 pts]*`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-a',
          pf: `Donc le seul truc à regarder, c'est le signe devant le $y$ ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-b',
          gf: `C'est ça, Champion(ne) ! Plus → ça oscille (cos/sin). Moins → ça diverge (exponentielles). Zéro → c'est une droite. Tu prends ce réflexe, et tu ne te trompes plus jamais de modèle au BAC. On va gâter le coin.`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Diagnostique le signe, pose le bon modèle. Réponses finales seulement.

- **Exercice 1.** Résous $y'' - y = 0$. *(Réponse : $\\omega = 1$, $y(x) = Ae^{x} + Be^{-x}$.)*
- **Exercice 2.** Résous $y'' = 0$ avec $y(0) = 3$, $y'(0) = -1$. *(Réponse : $y(x) = -x + 3$.)*
- **Exercice 3.** Quelle est la nature des solutions de $y'' = 16y$ ? *(Réponse : exponentielles, $Ae^{4x} + Be^{-4x}$.)*`,
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
            `Un signe **moins**, $y'' - \\omega^2 y = 0$, donne des **exponentielles réelles** : $Ae^{\\omega x} + Be^{-\\omega x}$.`,
            `Le cas $y'' = 0$ donne une **fonction affine** $ax + b$.`,
            `📘 Vocabulaire officiel : équation divergente, cas affine, conditions initiales.`,
            `Le geste clé : **diagnostiquer le signe** avant tout (plus → oscille, moins → diverge, zéro → droite).`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m5',
          titre: `Fil rouge`,
          contenu: `Tu maîtrises maintenant TOUTES les formes : premier ordre (M1, M2, M3) et second ordre (M4, M5). Il ne reste plus qu'à les faire travailler sur le terrain. Au Module 6, on attaque les **applications** : refroidissement, radioactivité, population, circuits — le Grand Problème du BAC.`,
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
            `Je distingue les trois types du second ordre selon le signe devant $y$.`,
            `J'emploie le vocabulaire officiel : équation divergente, cas affine, conditions initiales.`,
            `Je résous $y'' - \\omega^2 y = 0$ en posant $Ae^{\\omega x} + Be^{-\\omega x}$.`,
            `Je traite le cas $y'' = 0$ par une fonction affine $ax + b$.`,
            `Je détermine $A$ et $B$ par un système et je vérifie ma solution.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m5',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Direction le Module 6, on passe aux applications réelles.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et la Règle d'Or des trois visages.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel, l'image de la bille sur la bosse.`,
          ],
        },
      ],
    },
  ],
};
