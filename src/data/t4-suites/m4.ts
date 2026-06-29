import { Chapitre } from '../../types/course';

export const chapitreM4: Chapitre = {
  id: 't4-m4',
  titre: `Module 4 — Les Suites Récurrentes`,
  duree: 30,
  niveau: 'BAC',
  xpGain: 30,
  objectifs: [
    `Reconnaître une suite récurrente de la forme $u_{n+1} = f(u_n)$`,
    `Énoncer le théorème du point fixe et la stabilité d'un intervalle avec le vocabulaire officiel du BAC`,
    `Placer les premiers termes sur l'axe avec la méthode de la toile d'araignée`,
    `Démontrer qu'un intervalle est stable et encadrer la suite par récurrence`,
    `Déterminer la limite éventuelle en résolvant l'équation du point fixe`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, le trésorier de la promo est revenu avec une formule bizarre pour la caisse de secours : $u_{n+1} = \\dfrac{u_n}{2} + 1$, avec $u_0 = 6$. J'essaie de trouver l'expression de $u_n$ en fonction de $n$ comme pour la tontine, mais je suis bloqué(e). Impossible de trouver un terme général direct !`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Respire, Champion(ne). Ce que ton trésorier t'a donné, c'est un monument du BAC : une suite récurrente. Chaque terme se nourrit du précédent pour exister. Vouloir calculer $u_n$ directement, c'est s'attaquer à un mur de face. Mais la magie, c'est qu'on n'a pas besoin de la formule de chaque étape pour prédire l'état d'équilibre final. Regarde plutôt une salle de soins au CHU de Treichville.`,
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
          contenu: `Une infirmière injecte une forte dose initiale d'un traitement dans le bras d'un patient hospitalisé à Treichville. Au fil des heures, le corps élimine naturellement la **moitié** du produit présent. Pour éviter que le remède ne s'épuise, l'infirmière revient chaque heure injecter une **quantité fixe** de rechange.

La concentration baisse d'abord nettement, passant de six milligrammes à quatre, puis à trois, avant de ralentir vers deux et demi. Ce va-et-vient entre la perte biologique (la moitié qui s'élimine) et l'apport médical (la dose fixe) force la concentration à se stabiliser sagement.

Sans aucun calcul, on sent que le système se dirige vers un **palier de sécurité** parfaitement stationnaire. À ce palier, ce qu'on perd égale exactement ce qu'on apporte : la quantité ne bouge plus d'une heure à l'autre. *Ce point d'équilibre où l'entrée compense la sortie, c'est le cœur de toute suite récurrente.*`,
        },
        {
          type: 'figure',
          id: 'fig-m4-1',
          src: '/images/t4/fig_M4_1.png',
          legende: `La concentration descend puis se stabilise : l'apport finit par compenser l'élimination.`,
          alt: `La concentration descend puis se stabilise : l'apport finit par compenser l'élimination.`,
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
          contenu: `Mettons de l'ordre dans notre seringue pour l'habiller avec les outils de la Terminale D.

- **L'écoulement des heures** → l'indice $n$, chaque passage de l'infirmière.
- **La concentration à l'heure $n$** → le terme $u_n$ ; la dose de départ → $u_0 = 6$.
- **Éliminer la moitié puis ajouter une dose fixe** → la fonction $f(x) = \\dfrac{x}{2} + 1$.
- **La dynamique de la suite** → $u_{n+1} = f(u_n)$.
- **Le palier d'équilibre** → la valeur $\\ell$ telle que $\\ell = f(\\ell)$, c'est-à-dire $\\ell = \\dfrac{\\ell}{2} + 1$, donc $\\ell = 2$.`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène du CHU`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Le passage de l'infirmière`, `$n \\in \\mathbb{N}$`, `L'indice des étapes.`],
            [`La concentration à l'heure $n$`, `$u_n$`, `Le terme général.`],
            [`Élimination + apport fixe`, `$f(x) = \\dfrac{x}{2} + 1$`, `La fonction de transition.`],
            [`La règle de mise à jour`, `$u_{n+1} = f(u_n)$`, `La relation de récurrence.`],
            [`Le palier de stabilité`, `$\\ell = f(\\ell)$`, `L'équation du point fixe : $\\ell = 2$.`],
          ],
        },
      ],
    },
    {
      id: 's-bac',
      titre: `📘 LANGAGE OFFICIEL DU BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b5',
          contenu: `Champion(ne), l'image de la seringue qui rejoint son palier est posée. La copie attend les énoncés rigoureux.

**Définition formelle.** Soit $f$ une fonction continue sur un intervalle $I$. Une suite $(u_n)$ est dite **récurrente** s'il existe $u_0 \\in I$ tel que pour tout $n$ : $u_{n+1} = f(u_n)$. On dit que l'intervalle $I$ est **stable par $f$** si $f(I) \\subseteq I$, c'est-à-dire que pour tout $x \\in I$, $f(x) \\in I$.

**En langage courant.** Chaque terme est l'image du précédent par $f$ ; si l'intervalle est stable, tous les termes y restent enfermés.`,
        },
        {
          type: 'warning',
          id: 'warn6',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Suite récurrente** — définie par $u_0$ et $u_{n+1} = f(u_n)$.
- **Intervalle stable** — $f(I) \\subseteq I$ ; sert à encadrer la suite par récurrence.
- **Point fixe** — un réel $\\ell$ tel que $f(\\ell) = \\ell$ ; candidat-limite obligatoire.
- **Théorème du point fixe** — si $(u_n)$ converge vers $\\ell$ et $f$ est continue en $\\ell$, alors $f(\\ell) = \\ell$.`,
        },
        {
          type: 'tip',
          id: 'tip7',
          titre: `À retenir`,
          contenu: `Le correcteur attend la phrase : *« $(u_n)$ converge et $f$ est continue, donc sa limite $\\ell$ vérifie $f(\\ell) = \\ell$. »* Mais attention : trouver une solution de $f(\\ell) = \\ell$ ne prouve **pas** la convergence — il faut d'abord la démontrer (monotone + bornée).`,
        },
        {
          type: 'figure',
          id: 'fig-m4-2',
          src: '/images/t4/fig_M4_2.png',
          legende: `La droite $y = x$ est le miroir qui reporte chaque terme sur l'axe ; l'escalier rejoint le point fixe.`,
          alt: `La droite $y = x$ est le miroir qui reporte chaque terme sur l'axe ; l'escalier rejoint le point fixe.`,
        },
      ],
    },
    {
      id: 's4',
      titre: `④ LA RÈGLE`,
      blocs: [
        {
          type: 'rule',
          id: 'rule8',
          titre: `Règle d'Or — Suites Récurrentes et Point Fixe`,
          contenu: `Soit $f$ continue sur un intervalle $I$ stable par $f$, et $(u_n)$ définie par $u_0 \\in I$ et $u_{n+1} = f(u_n)$.

**1. Stabilité.** Si $I$ est stable par $f$, alors $u_n \\in I$ pour tout $n$ (démonstration par récurrence).

**2. Théorème du point fixe.** Si $(u_n)$ converge vers $\\ell$ et $f$ est continue en $\\ell$, alors :
$$f(\\ell) = \\ell.$$

**3. Sens de variation.** Le signe de $u_{n+1} - u_n = f(u_n) - u_n$ donne la monotonie. Souvent : si $f$ est croissante sur $I$, la suite est monotone (le sens dépend de la position de $u_0$ par rapport à $\\ell$).`,
        },
        {
          type: 'tip',
          id: 'tip9',
          titre: `Conseil du Grand Frère`,
          contenu: `La stratégie gagnante du BAC, en trois temps : (1) montrer que $I$ est stable et encadrer $(u_n)$ ; (2) montrer la monotonie ; (3) conclure la convergence, puis calculer $\\ell$ par $f(\\ell) = \\ell$.`,
        },
        {
          type: 'warning',
          id: 'warn10',
          titre: `Piège à éviter`,
          contenu: `Résoudre $f(\\ell) = \\ell$ **ne prouve jamais** la convergence. C'est l'erreur la plus chère : il faut d'abord établir monotone **et** bornée avant de proclamer l'existence de la limite.`,
        },
      ],
    },
    {
      id: 's5',
      titre: `⑤ LA DESCENTE`,
      blocs: [
        {
          type: 'text',
          id: 'b11',
          titre: `Le Diagnostic`,
          contenu: `L'énoncé donne $u_0$ et une relation $u_{n+1} = f(u_n)$ (souvent avec une fraction, une racine ou un carré) → suite récurrente. Les questions typiques : « démontrer que $a \\leq u_n \\leq b$ », « étudier la monotonie », « justifier la convergence », « déterminer la limite ».`,
        },
        {
          type: 'table',
          id: 'tbl12',
          titre: `L'Arbre de décision`,
          headers: [`Si tu vois…`, `Ce que tu fais`],
          rows: [
            [`« Placer les termes sur l'axe »`, `Trace $f$ et $y = x$, construis la toile d'araignée.`],
            [`« Montrer que $a \\leq u_n \\leq b$ »`, `Récurrence + stabilité de l'intervalle par $f$.`],
            [`« Étudier la monotonie »`, `Signe de $u_{n+1}-u_n = f(u_n)-u_n$ (conjuguée si racine).`],
            [`« Justifier la convergence »`, `Monotone + bornée ⟹ convergente.`],
            [`« Déterminer la limite »`, `Résous $f(\\ell) = \\ell$ (point fixe).`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure`,
          contenu: `**Étape 1.** Démontre par récurrence que $(u_n)$ reste dans l'intervalle $I$ (stabilité).

**Étape 2.** Étudie le signe de $u_{n+1} - u_n$ → monotonie.

**Étape 3.** Conclus : monotone + bornée ⟹ convergente.

**Étape 4.** Résous $f(\\ell) = \\ell$ pour obtenir la valeur de la limite (en gardant la solution qui appartient à $I$).`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `- **Calcule $u_1, u_2$** à la main : leur évolution doit confirmer le sens de variation annoncé.
- **La limite $\\ell$ doit appartenir à $I$** ; sinon, tu as gardé la mauvaise racine de $f(\\ell) = \\ell$.`,
        },
        {
          type: 'text',
          id: 'b-code',
          titre: `💻 Le Coin du Code — Itérer une suite récurrente et détecter le palier`,
          contenu: `Au BAC, on conjecture souvent la limite en regardant les termes se stabiliser. Voici comment une machine itère $u_{n+1} = f(u_n)$ et s'arrête quand le palier est atteint.

\`\`\`python
def palier(u0, f, eps=1e-6, n_max=100):
    # u0 : premier terme ; f : fonction ; eps : seuil de stabilite
    u = u0
    for n in range(n_max):
        v = f(u)              # terme suivant
        if abs(v - u) < eps:  # l'ecart devient negligeable
            return n + 1, v   # etape et valeur du palier
        u = v
    return n_max, u

# Exemple : u_(n+1) = u_n/2 + 1, avec u_0 = 6  -> point fixe 2
etape, limite = palier(6, lambda x: x/2 + 1)
print(etape, round(limite, 4))   # -> 22 2.0
\`\`\`

💬 **Le message du Grand Frère.** La machine fait exactement ce que tu fais au brouillon : elle applique $f$ encore et encore jusqu'à ce que deux termes consécutifs soient quasi identiques — c'est le palier. Elle confirme ce que le calcul $f(\\ell)=\\ell$ te donne : $\\ell = 2$. Le code ne remplace pas la démonstration, il muscle ton intuition.`,
        },
        {
          type: 'figure',
          id: 'fig-m4-3',
          src: '/images/t4/fig_M4_3.png',
          legende: `L'escalier converge vers le point fixe $\\ell = 2$ : la concentration rejoint son palier.`,
          alt: `L'escalier converge vers le point fixe $\\ell = 2$ : la concentration rejoint son palier.`,
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
            [`🟢 BASE`, `Calcul des premiers termes`, `$u_0$ et $u_{n+1}=f(u_n)$ donnés`, `Maintenant à toi`],
            [`🟡 MOYEN`, `Point fixe + toile d'araignée`, `« Placer les termes » / « état d'équilibre »`, `Type 2`],
            [`🔴 BAC`, `Encadrement + monotonie + limite`, `« Montrer que… puis déterminer la limite »`, `Type 1`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 1 — Suite récurrente homographique.** Soit $f$ définie sur $[0\\ ;\\ 4]$ par $f(x) = \\dfrac{2 + 3x}{4 + x}$, et $(u_n)$ définie par $u_0 = 3$ et $u_{n+1} = f(u_n)$. (1) Démontrer que $f$ est croissante sur $[0\\ ;\\ 4]$. (2) Démontrer par récurrence que $1 \\leq u_{n+1} \\leq u_n \\leq 3$. (3) En déduire que $(u_n)$ converge. (4) Déterminer $\\ell$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Suite récurrente homographique. On montre la décroissance minorée, on conclut, puis on résout $f(\\ell) = \\ell$.` },
            { name: `Étape 1`, contenu: `$f'(x) = \\dfrac{3(4+x) - (2+3x)}{(4+x)^2} = \\dfrac{10}{(4+x)^2} > 0$. Donc $f$ est croissante sur $[0\\ ;\\ 4]$.` },
            { name: `Étape 2`, contenu: `Montrons $1 \\leq u_{n+1} \\leq u_n \\leq 3$. Initialisation : $u_0 = 3$ et $u_1 = f(3) = \\dfrac{11}{7} \\approx 1,57$, donc $1 \\leq u_1 \\leq u_0 \\leq 3$. Hérédité : $f$ étant croissante conserve l'ordre, $f(1) \\leq f(u_{n+1}) \\leq f(u_n) \\leq f(3)$, soit $1 \\leq u_{n+2} \\leq u_{n+1} \\leq 3$. La propriété est héréditaire.` },
            { name: `Étape 3`, contenu: `$(u_n)$ est décroissante et minorée par $1$ : par le théorème de convergence monotone, elle **converge** vers $\\ell \\in [1\\ ;\\ 3]$.` },
            { name: `Étape 4`, contenu: `$f$ continue, donc $\\ell = f(\\ell)$ : $\\ell = \\dfrac{2+3\\ell}{4+\\ell} \\iff \\ell^2 + \\ell - 2 = 0 \\iff (\\ell-1)(\\ell+2) = 0$. Seule $\\ell = 1$ appartient à $[1\\ ;\\ 3]$. Donc $\\ell = 1$.` },
          ],
          reponse: `(1) $f'(x) = \\dfrac{10}{(4+x)^2} > 0$ : croissante. (2)(3) $(u_n)$ décroissante minorée par $1$, donc converge. (4) $\\ell = 1$.`,
          conseil: `Quand $f$ est croissante, l'ordre se conserve par $f$ : c'est l'argument-clé de l'hérédité. Pose-le explicitement.`,
          piege: `L'équation $f(\\ell)=\\ell$ donne deux solutions ; garde uniquement celle qui appartient à l'intervalle de la suite. Ici $-2 \\notin [1\\ ;\\ 3]$, on l'écarte.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$f'(x) = \\dfrac{10}{(4+x)^2} > 0$ sur $[0\\ ;\\ 4]$ : $f$ y est croissante. Par récurrence, $1 \\leq u_{n+1} \\leq u_n \\leq 3$ : vrai au rang $0$ ($u_1 = \\tfrac{11}{7}$) ; et si c'est vrai au rang $n$, la croissance de $f$ donne $1 \\leq u_{n+2} \\leq u_{n+1} \\leq 3$. La suite est décroissante et minorée par $1$, donc elle converge vers $\\ell \\in [1\\ ;\\ 3]$. Comme $f$ est continue, $\\ell = f(\\ell)$, soit $\\ell^2 + \\ell - 2 = 0$, d'où $\\ell = 1$ (la racine $-2$ est exclue).

*[Barème : sens de variation de $f$ : 1 pt · récurrence : 1,5 pt · convergence : 0,5 pt · limite : 1 pt — Total : 4 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Point fixe et construction graphique.** Soit $(u_n)$ définie par $u_0 = 6$ et $u_{n+1} = \\dfrac{u_n}{2} + 1$. (1) Déterminer le point fixe $\\ell$ de $f(x) = \\dfrac{x}{2}+1$. (2) Calculer $u_1, u_2, u_3$ et conjecturer le comportement de la suite.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Suite récurrente affine. Point fixe par $f(\\ell)=\\ell$, puis calcul des premiers termes.` },
            { name: `Étape 1`, contenu: `$\\ell = \\dfrac{\\ell}{2} + 1 \\iff \\dfrac{\\ell}{2} = 1 \\iff \\ell = 2$.` },
            { name: `Étape 2`, contenu: `$u_1 = \\dfrac{6}{2}+1 = 4$ ; $u_2 = \\dfrac{4}{2}+1 = 3$ ; $u_3 = \\dfrac{3}{2}+1 = 2,5$. Les termes décroissent vers $2$ : on conjecture que $(u_n)$ converge vers $\\ell = 2$.` },
          ],
          reponse: `(1) $\\ell = 2$. (2) $u_1 = 4$, $u_2 = 3$, $u_3 = 2,5$ ; la suite décroît vers $2$.`,
          conseil: `Calculer trois termes suffit pour conjecturer le sens et la limite avant de rédiger la démonstration complète.`,
          piege: `Une conjecture n'est pas une preuve : pour valider, il faudrait démontrer décroissante et minorée par $2$.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Le point fixe vérifie $\\ell = \\dfrac{\\ell}{2}+1$, donc $\\ell = 2$. On calcule $u_1 = 4$, $u_2 = 3$, $u_3 = 2,5$ : la suite décroît et semble converger vers $2$.

*[Barème : point fixe : 1,5 pt · trois termes : 1,5 pt · conjecture : 1 pt — Total : 4 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Calme ton jeu, applique la méthode. Réponses finales seulement.

- **Exercice 1.** $u_0 = 0$, $u_{n+1} = \\sqrt{u_n + 2}$. Calcule $u_1$ et $u_2$. *(Réponse : $u_1 = \\sqrt{2} \\approx 1,41$ ; $u_2 = \\sqrt{2+\\sqrt2} \\approx 1,85$.)*
- **Exercice 2.** Pour $u_{n+1} = \\sqrt{u_n + 2}$, trouve le point fixe. *(Réponse : $\\ell = \\sqrt{\\ell+2} \\Rightarrow \\ell^2-\\ell-2=0 \\Rightarrow \\ell = 2$.)*
- **Exercice 3.** $u_0 = 10$, $u_{n+1} = 0,8\\,u_n$. Cette suite est-elle récurrente ? Sa limite ? *(Réponse : oui, $f(x)=0,8x$ ; point fixe $\\ell = 0$, et $0<0,8<1$ donc $\\lim u_n = 0$.)*`,
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
            `Suite récurrente : $u_0$ donné et $u_{n+1} = f(u_n)$ ; pas de formule directe.`,
            `📘 Vocabulaire officiel : suite récurrente, intervalle stable, point fixe, théorème du point fixe.`,
            `Stratégie BAC : stabilité (récurrence) → monotonie → convergence → limite par $f(\\ell)=\\ell$.`,
            `La toile d'araignée ($f$ et $y=x$) place les termes et fait voir la convergence.`,
            `$f(\\ell)=\\ell$ ne prouve pas la convergence : il faut monotone + bornée d'abord.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m4',
          titre: `Fil rouge`,
          contenu: `Tu as utilisé la récurrence pour **encadrer** une suite. Mais ce raisonnement par dominos est bien plus puissant que ça : il sert à démontrer rigoureusement **toute** propriété qui se transmet d'un rang au suivant — une égalité, une divisibilité, une formule conjecturée. Et quand on poussera l'analyse à l'infini, on rencontrera des courses de vitesse entre $n$, $q^n$ et les autres : les croissances comparées. C'est le **Module 5**.`,
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
            `Je reconnais une suite récurrente et je calcule ses premiers termes.`,
            `J'emploie le vocabulaire officiel (suite récurrente, intervalle stable, point fixe).`,
            `Je sais construire la toile d'araignée avec $f$ et la droite $y = x$.`,
            `Je démontre un encadrement et une monotonie pour conclure la convergence.`,
            `Je détermine la limite en résolvant $f(\\ell) = \\ell$ et je garde la bonne racine.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m4',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Monument du BAC maîtrisé. Direction Module 5.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 1 (homographique).`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : la seringue du CHU qui rejoint son palier.`,
          ],
        },
      ],
    },
  ],
};
