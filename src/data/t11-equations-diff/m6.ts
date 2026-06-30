import { Chapitre } from '../../types/course';

export const chapitreM6: Chapitre = {
  id: 't11-m6',
  titre: `Module 6 — Applications et modélisation`,
  duree: 28,
  niveau: 'BAC',
  xpGain: 30,
  objectifs: [
    `Traduire un énoncé concret en équation différentielle (modéliser)`,
    `Résoudre un refroidissement (loi de Newton) par changement de variable`,
    `Traiter la désintégration radioactive et calculer une demi-vie`,
    `Étudier un modèle de population ou un circuit RC`,
    `Interpréter les résultats : limite, équilibre, temps caractéristique`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, je sais résoudre les équations maintenant. Mais au BAC, on me donne un texte : « un plat refroidit », « un noyau se désintègre »... Comment je passe du texte à l'équation ? C'est là que je bloque.`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Et c'est LE savoir-faire qui rapporte gros, Champion(ne). La résolution, tu la tiens. Ce qui te manque, c'est la traduction : repérer la phrase qui dit « la vitesse de variation est proportionnelle à... ». Cette phrase EST ton équation différentielle. Une fois que tu l'as écrite, tu déroules les modules 1 à 5. On va s'entraîner à lire ces énoncés comme un grand frère lit entre les lignes.`,
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
          contenu: `Revenons à l'attiéké fumant de la maman à Adjamé, sorti du feu à $90$ °C, posé sur la table où l'air est à $25$ °C. Tu le sais d'expérience : au début il brûle les doigts, la chaleur s'échappe très vite. Puis, à mesure qu'il s'approche de la température de la pièce, le refroidissement ralentit. Et jamais l'attiéké ne descend en dessous de la température de l'air : il s'en approche, point.

La loi physique derrière ça est simple : la vitesse de refroidissement est proportionnelle à **l'écart** entre la température du plat et celle de l'air. Gros écart au début → refroidissement rapide ; petit écart à la fin → refroidissement lent. Tout l'art consiste à transformer cette phrase en équation, puis à se ramener à un cas du Module 1 grâce à une petite astuce : on travaille sur l'écart, pas sur la température brute.`,
        },
        {
          type: 'figure',
          id: 'fig-m6-1',
          src: '/images/t11/fig_M6_1.png',
          legende: `La température chute vite au début, puis ralentit et s'approche de l'air ambiant ($25$ °C) sans descendre en dessous.`,
          alt: `La courbe T(t) décroissante depuis 90 °C vers la droite horizontale de l'air ambiant à 25 °C.`,
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
          contenu: `On traduit le refroidissement de l'attiéké, brique par brique.

- La température du plat à l'instant $t$ → la fonction $T(t)$
- La vitesse de refroidissement → la dérivée $T'(t)$
- « proportionnelle à l'écart avec l'air » → $T' = -k\\,(T - T_{\\text{air}})$
- L'astuce : on pose l'écart → $u(t) = T(t) - T_{\\text{air}}$
- L'écart obéit à une équation connue → $u' + k\\,u = 0$`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène de l'attiéké`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`La température du plat`, `$T(t)$`, `La fonction inconnue`],
            [`La vitesse de refroidissement`, `$T'(t)$`, `La dérivée de $T$`],
            [`« proportionnelle à l'écart »`, `$T' = -k(T - T_{\\text{air}})$`, `La loi de refroidissement`],
            [`L'écart à l'air`, `$u(t) = T(t) - T_{\\text{air}}$`, `Le changement de variable`],
            [`L'équation sur l'écart`, `$u' + k u = 0$`, `Un cas du Module 1`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `Chaque morceau a son symbole : voici la formulation officielle.`,
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
          contenu: `Champion(ne), l'attiéké, c'est l'image. Voici la langue du BAC pour les problèmes de modélisation.

**Définition formelle.** Modéliser, c'est traduire un énoncé en équation différentielle. La **loi de refroidissement de Newton** s'écrit $T'(t) = -k\\big(T(t) - T_a\\big)$, où $T_a$ est la température ambiante et $k > 0$. Le **changement de variable** $u(t) = T(t) - T_a$ ramène à l'équation homogène $u'(t) + k\\,u(t) = 0$, dont la solution est $u(t) = u_0\\,e^{-kt}$, d'où $T(t) = T_a + \\big(T_0 - T_a\\big)e^{-kt}$.

**En langage courant.** On pose l'écart à la valeur d'équilibre comme nouvelle inconnue, et on retombe sur une décroissance du Module 1.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Modéliser** — écrire l'équation différentielle qui traduit le phénomène.
- **Changement de variable** — poser $u = T - T_a$ pour se ramener à un cas connu.
- **Constante de désintégration** $\\lambda$ — le coefficient dans $N'(t) = -\\lambda N(t)$.
- **Demi-vie** (ou période radioactive) — la durée $\\tau$ telle que $N(\\tau) = \\dfrac{N_0}{2}$.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `« On pose $u(t) = T(t) - T_a$ ; alors $u' = T'$ et $u$ vérifie $u' + ku = 0$. »`,
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
          titre: `Règle d'Or — Les modèles classiques du BAC`,
          contenu: `$$\\text{Refroidissement : } T(t) = T_a + (T_0 - T_a)e^{-kt}$$
$$\\text{Désintégration : } N(t) = N_0\\,e^{-\\lambda t}, \\qquad \\text{demi-vie } \\tau = \\dfrac{\\ln 2}{\\lambda}$$
$$\\text{Charge d'un condensateur (RC) : } u(t) = E\\big(1 - e^{-t/(RC)}\\big)$$`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Cherche toujours dans l'énoncé la phrase « la vitesse de variation est proportionnelle à... ». C'est elle qui te donne l'équation. Le mot « proportionnelle » est ton signal.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Dans un refroidissement, la solution n'est PAS $Ce^{-kt}$ toute seule : il faut ajouter la température ambiante $T_a$. Sans le changement de variable, on oublie ce palier et on perd l'essentiel.`,
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
          contenu: `Lis l'énoncé et repère la grandeur qui évolue et la phrase de proportionnalité. Si la variation est proportionnelle à la grandeur elle-même → décroissance/croissance pure (Module 1). Si elle est proportionnelle à un **écart** → changement de variable (refroidissement). Si l'énoncé parle de vibration/oscillation → second ordre.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`L'énoncé décrit...`, `Le modèle à poser`],
          rows: [
            [`Une désintégration, une décharge`, `$N' = -\\lambda N$ → $N_0 e^{-\\lambda t}$`],
            [`Un refroidissement vers l'ambiant`, `$u = T - T_a$, puis $u' + ku = 0$`],
            [`Une charge de condensateur (RC)`, `$u' + \\dfrac{1}{RC}u = \\dfrac{E}{RC}$ → palier $E$`],
            [`Une vibration, une oscillation`, `Second ordre $y'' + \\omega^2 y = 0$`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure en 4 étapes`,
          contenu: `**Étape 1.** Repère la grandeur inconnue et écris l'équation différentielle (la modélisation).

**Étape 2.** Si l'équation porte sur un écart, pose le changement de variable adéquat.

**Étape 3.** Résous (Module 1, 2 ou 3 selon le cas) et applique la condition initiale.

**Étape 4.** Réponds à la question concrète : valeur à un instant, limite, ou temps caractéristique.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `Contrôle que ta solution respecte la condition initiale (valeur de départ) ET la tendance physique attendue (la température décroît vers l'ambiant, la population décroît vers $0$, etc.).`,
        },
        {
          type: 'figure',
          id: 'fig-m6-2',
          src: '/images/t11/fig_M6_2.png',
          legende: `À chaque demi-vie $\\tau$, la quantité restante est divisée par deux : $N(\\tau) = \\dfrac{N_0}{2}$.`,
          alt: `La courbe N(t) décroissante avec le repère du niveau N0/2 et du temps de demi-vie τ correspondant.`,
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
            [`🟡 MOYEN`, `Refroidissement (loi de Newton)`, `« un plat / un liquide refroidit »`, `Type 1`],
            [`🔴 BAC`, `Désintégration et demi-vie`, `« un noyau se désintègre », « période radioactive »`, `Type 2`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 1 — Refroidissement de l'attiéké** *(MOYEN)*. Un plat à $90$ °C refroidit dans une pièce à $30$ °C. Sa température vérifie $T'(t) = -0{,}05\\big(T(t) - 30\\big)$, avec $t$ en minutes. **1.** Par le changement de variable $u(t) = T(t) - 30$, exprime $T(t)$. **2.** Au bout de combien de temps la température atteint-elle $60$ °C ?`,
          etapes: [
            { name: `Diagnostic`, contenu: `Refroidissement de Newton : on pose l'écart $u$, on résout une décroissance du Module 1, puis on revient à $T$.` },
            { name: `Étape 1`, contenu: `$u(t) = T(t) - 30$ donne $u'(t) = T'(t) = -0{,}05\\,u(t)$, donc $u(t) = u_0\\,e^{-0{,}05t}$. Or $u_0 = T(0) - 30 = 60$, d'où $T(t) = 30 + 60e^{-0{,}05t}$.` },
            { name: `Étape 2`, contenu: `$T(t) = 60 \\iff 60e^{-0{,}05t} = 30 \\iff e^{-0{,}05t} = 0{,}5$.` },
          ],
          reponse: `$T(t) = 30 + 60e^{-0{,}05t}$ ; $T(t) = 60$ pour $t = \\dfrac{\\ln 2}{0{,}05} = 20\\ln 2 \\approx 13{,}9$ minutes.`,
          conseil: `Le changement de variable $u = T - T_a$ est la clé attendue : énonce-le clairement, le correcteur l'attend explicitement.`,
          piege: `N'oublie pas de revenir à $T$ après avoir trouvé $u$ : $T(t) = u(t) + 30$. La réponse finale porte sur $T$, pas sur $u$.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `On pose $u(t) = T(t) - 30$. Alors $u'(t) = T'(t) = -0{,}05\\big(T(t) - 30\\big) = -0{,}05\\,u(t)$.
Donc $u$ vérifie $u' + 0{,}05\\,u = 0$, d'où $u(t) = u_0\\,e^{-0{,}05t}$ avec $u_0 = T(0) - 30 = 60$.
$$T(t) = u(t) + 30 = 30 + 60e^{-0{,}05t}.$$
On cherche $T(t) = 60$ : $\\ 60e^{-0{,}05t} = 30 \\iff e^{-0{,}05t} = 0{,}5 \\iff -0{,}05t = \\ln(0{,}5)$,
$$t = \\dfrac{\\ln 2}{0{,}05} = 20\\ln 2 \\approx 13{,}9 \\text{ minutes.}$$

*[Barème type BAC : changement de variable = 1 pt — expression de $T(t)$ = 1 pt — résolution du temps = 1 pt — Total : 3 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 2 — Désintégration radioactive** *(BAC)*. Un échantillon contient initialement $N_0$ noyaux. Le nombre $N(t)$ de noyaux vérifie $N'(t) = -\\lambda N(t)$, avec $\\lambda = 0{,}02$ (en an$^{-1}$). **1.** Exprime $N(t)$ en fonction de $N_0$. **2.** Calcule la demi-vie $\\tau$ (durée au bout de laquelle il reste $\\dfrac{N_0}{2}$ noyaux).`,
          etapes: [
            { name: `Diagnostic`, contenu: `Décroissance pure du Module 1 : $N(t) = N_0 e^{-\\lambda t}$, puis on résout $N(\\tau) = \\dfrac{N_0}{2}$.` },
            { name: `Étape 1`, contenu: `$N' + \\lambda N = 0$ donne $N(t) = N_0 e^{-\\lambda t} = N_0 e^{-0{,}02t}$.` },
            { name: `Étape 2`, contenu: `$N(\\tau) = \\dfrac{N_0}{2} \\iff e^{-\\lambda\\tau} = \\dfrac{1}{2} \\iff \\lambda\\tau = \\ln 2$.` },
          ],
          reponse: `$N(t) = N_0 e^{-0{,}02t}$ et $\\tau = \\dfrac{\\ln 2}{\\lambda} = \\dfrac{\\ln 2}{0{,}02} \\approx 34{,}7$ ans.`,
          conseil: `La demi-vie ne dépend PAS de $N_0$ : il se simplifie. C'est une propriété que le correcteur aime voir soulignée.`,
          piege: `$\\tau = \\dfrac{\\ln 2}{\\lambda}$, pas $\\dfrac{\\ln 2}{2}$ ni $\\lambda\\ln 2$. Isole bien $\\tau$ après avoir pris le logarithme.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `L'équation $N'(t) = -\\lambda N(t)$ s'écrit $N' + \\lambda N = 0$, donc :
$$N(t) = N_0\\,e^{-\\lambda t} = N_0\\,e^{-0{,}02t}.$$
La demi-vie $\\tau$ vérifie $N(\\tau) = \\dfrac{N_0}{2}$ :
$$N_0\\,e^{-\\lambda\\tau} = \\dfrac{N_0}{2} \\iff e^{-\\lambda\\tau} = \\dfrac{1}{2} \\iff -\\lambda\\tau = \\ln\\!\\left(\\dfrac{1}{2}\\right) = -\\ln 2.$$
$$\\tau = \\dfrac{\\ln 2}{\\lambda} = \\dfrac{\\ln 2}{0{,}02} \\approx 34{,}7 \\text{ ans.}$$

*[Barème type BAC : expression de $N(t)$ = 1 pt — équation de la demi-vie = 1 pt — calcul de $\\tau$ = 1 pt — Total : 3 pts]*`,
        },
        {
          type: 'figure',
          id: 'fig-m6-3',
          src: '/images/t11/fig_M6_3.png',
          legende: `La tension du condensateur monte vite, puis ralentit et tend vers la valeur d'alimentation $E = 10$ V : c'est le régime permanent.`,
          alt: `La courbe u(t) = 10(1 - e^(-t)) partant de 0 et montant vers la droite horizontale E = 10 V.`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-a',
          pf: `Donc dans tous ces problèmes, le plus dur c'est juste d'écrire la première équation ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-b',
          gf: `Exactement, Champion(ne). Une fois l'équation posée, tu n'as plus qu'à dérouler les modules 1 à 5 que tu maîtrises déjà. La modélisation, c'est la moitié des points du Grand Problème. Lis l'énoncé, repère le mot « proportionnelle », et tu gâtes le coin.`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Pose l'équation, change de variable si besoin. Réponses finales seulement.

- **Exercice 1.** Une population vérifie $P'(t) = 0{,}03\\,P(t)$, $P(0) = 1000$. Donne $P(t)$. *(Réponse : $P(t) = 1000\\,e^{0{,}03t}$.)*
- **Exercice 2.** Un café à $80$ °C, air à $20$ °C, $u = T - 20$ vérifie $u' = -0{,}1u$. Donne $T(t)$. *(Réponse : $T(t) = 20 + 60e^{-0{,}1t}$.)*
- **Exercice 3.** Pour $N(t) = N_0 e^{-0{,}1t}$, calcule la demi-vie. *(Réponse : $\\tau = \\dfrac{\\ln 2}{0{,}1} = 10\\ln 2 \\approx 6{,}93$.)*`,
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
            `Modéliser = repérer la phrase « la vitesse de variation est proportionnelle à... » et l'écrire en équation.`,
            `📘 Vocabulaire officiel : modéliser, changement de variable, constante de désintégration, demi-vie.`,
            `Le geste clé : pour un refroidissement, poser $u = T - T_a$ pour se ramener au Module 1.`,
            `Les modèles types : refroidissement, désintégration ($\\tau = \\dfrac{\\ln 2}{\\lambda}$), circuit RC (palier $E$).`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m6',
          titre: `Fil rouge`,
          contenu: `Tu viens de boucler le dernier chapitre d'analyse du programme. Tu sais résoudre toutes les équations différentielles ET les faire travailler sur des problèmes réels. Direction la **Salle d'Entraînement** : dix sujets de type BAC pour transformer toute cette méthode en réflexes.`,
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
            `Je sais traduire un énoncé concret en équation différentielle.`,
            `J'emploie le vocabulaire officiel : modéliser, changement de variable, demi-vie.`,
            `Je résous un refroidissement en posant $u = T - T_a$.`,
            `Je traite une désintégration et je calcule la demi-vie $\\tau = \\dfrac{\\ln 2}{\\lambda}$.`,
            `J'interprète mes résultats (limite, palier, temps caractéristique).`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m6',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Direction la Salle d'Entraînement, on entre dans l'arène !`,
            `🟡 **3 ou 4** → Relis la brique 📘 et l'arbre de décision des modèles.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel, l'image de l'attiéké qui refroidit.`,
          ],
        },
      ],
    },
  ],
};
