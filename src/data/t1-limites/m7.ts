import { Chapitre } from '../../types/course';

export const chapitreM7: Chapitre = {
  id: 't1-m7',
  titre: `Module 7 — Les Asymptotes`,
  duree: 25,
  niveau: 'BAC',
  xpGain: 35,
  objectifs: [
    `Traduire n'importe quel résultat de limite vers le dessin géométrique de la courbe`,
    `Énoncer les trois types d'asymptotes avec le vocabulaire officiel attendu au BAC`,
    `Reconnaître et nommer proprement les trois types d'asymptotes sans confondre les axes`,
    `Déterminer l'équation d'une asymptote oblique à l'infini grâce à la méthode du Caïman`,
    `Étudier la position relative d'une courbe par rapport à sa ligne de mire pour réussir ton tracé`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, j'ai enfin compris comment faire sauter les formes indéterminées avec la factorisation du Module 2 et la conjuguée du Module 3. On sait calculer toutes les limites maintenant. Pourquoi le prof insiste pour nous redonner de grands mots bizarres comme « asymptotes » ? Les chiffres ne suffisent plus ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Calme le jeu, Champion(ne). C'est ici que tout s'éclaire. Les limites que tu as calculées au brouillon, ce ne sont pas juste des trophées algébriques. Ce sont des **coordonnées géométriques invisibles**. Si tu vas au tableau dessiner ta courbe sans comprendre ce que tes résultats de limites signifient en vrai, tu vas tracer n'importe quoi sur ton papier millimétré. L'asymptote, c'est l'outil magique qui traduit tes calculs abstraits en lignes guides réelles pour ton crayon. Pas de nouveaux calculs ici : on se contente de récolter la lumière de ce qu'on a déjà semé.`,
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
          contenu: `Oublie les symboles deux minutes. Imagine un avion d'Air Côte d'Ivoire qui amorce sa descente vers la piste de l'aéroport Félix-Houphouët-Boigny.

Il descend doucement. Il se rapproche du sol de plus en plus. Il s'aligne parfaitement sur la ligne droite de la piste. Plus il avance vers le bout de l'horizon, plus l'espace entre ses roues et le béton devient minuscule.

S'il continuait à planer ainsi à l'infini, sans jamais toucher le sol ni remonter dans les nuages, sa trajectoire épouserait exactement celle de la piste.

**Cette ligne droite idéale dont l'avion s'approche indéfiniment sans jamais la percuter, c'est exactement ça : une asymptote.**`,
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
          contenu: `Bon, traduisons cette trajectoire de vol du quartier vers les mathématiques.

- L'avion qui se déplace, c'est la courbe $\\mathcal{C}_f$ de ta fonction.
- La ligne droite de la piste, c'est notre **droite asymptote**.
- Le fait de s'éloigner vers le bout de l'horizon, c'est la variable $x$ qui s'en va vers $+\\infty$ ou $-\\infty$.
- Et la distance verticale entre l'avion et la piste qui s'écrase jusqu'à devenir invisible, c'est la différence entre $f(x)$ et l'équation de la droite qui s'annule.

Voici la correspondance vol ↔ maths, mot pour mot :`,
        },
        {
          type: 'table',
          id: 'tbl5',
          headers: [`Scène du quartier`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`L'avion d'Air Côte d'Ivoire en descente`, `La courbe $\\\\mathcal{C}_f$`, `La représentation graphique de ta fonction`],
            [`La ligne droite de la piste d'atterrissage`, `La droite asymptote`, `La ligne guide dont la courbe s'approche indéfiniment`],
            [`Le bout de l'horizon vers lequel l'avion s'éloigne`, `$x \\\\to \\\\pm\\\\infty$`, `La variable qui grandit sans fin`],
            [`La distance roues-béton qui devient invisible`, `$f(x) - (mx + p) \\\\to 0$`, `La différence entre la courbe et la droite qui s'annule`],
            [`Un mur vertical le long de la piste`, `Asymptote verticale : $x = x_0$`, `Limite infinie quand $x$ tend vers un réel fini`],
            [`Le sol plat et horizontal de la piste`, `Asymptote horizontale : $y = b$`, `Limite finie quand $x$ tend vers l'infini`],
            [`La pente de descente de l'avion`, `Asymptote oblique : $y = mx + p$`, `Limite avec un coefficient directeur non nul`],
          ],
        },
        {
          type: 'text',
          id: 'b6',
          contenu: `Qu'une courbe s'envole le long d'un mur vertical ou qu'elle se stabilise le long d'une plaine horizontale, elle cherche toujours sa ligne de mire.`,
        },
        {
          type: 'figure',
          id: 'fig-m7-1',
          src: '/images/t1/fig_M7_1.png',
          legende: `Asymptotes verticale $x=3$ et horizontale $y=2$.`,
          alt: `Asymptotes verticale $x=3$ et horizontale $y=2$.`,
        },
      ],
    },
    {
      id: 's4',
      titre: `④ LA RÈGLE`,
      blocs: [
        {
          type: 'rule',
          id: 'rule7',
          titre: `Règle`,
          contenu: `Soit $f$ une fonction et $\\mathcal{C}_f$ sa courbe représentative dans le plan.

**① Asymptote Verticale**

Si $\\displaystyle\\lim_{x \\to x_0} f(x) = +\\infty$ ou $\\displaystyle\\lim_{x \\to x_0} f(x) = -\\infty$ (où $x_0$ est un réel fini), alors la droite d'équation $x = x_0$ est **asymptote verticale** à $\\mathcal{C}_f$.

**② Asymptote Horizontale**

Si $\\displaystyle\\lim_{x \\to +\\infty} f(x) = b$ ou $\\displaystyle\\lim_{x \\to -\\infty} f(x) = b$ (où $b$ est un réel fini), alors la droite d'équation $y = b$ est **asymptote horizontale** à $\\mathcal{C}_f$ en $\\pm\\infty$.

**③ Asymptote Oblique**

La droite d'équation $y = mx + p$ (avec $m \\neq 0$) est **asymptote oblique** à $\\mathcal{C}_f$ en $\\pm\\infty$ si et seulement si :
$$\\lim_{x \\to \\pm\\infty} \\left[\\, f(x) - (mx + p)\\,\\right] = 0$$

*Méthode du Caïman* (si $m$ et $p$ sont inconnus) :
$$m = \\lim_{x \\to \\pm\\infty} \\dfrac{f(x)}{x} \\qquad \\text{puis} \\qquad p = \\lim_{x \\to \\pm\\infty} \\left[\\, f(x) - mx\\,\\right]$$

**Branches Paraboliques**

Il arrive qu'une courbe ne possède ni asymptote horizontale ni asymptote oblique en $\\pm\\infty$. Dans ce cas, elle forme une **branche parabolique** : elle s'envole comme une parabole, sans jamais se stabiliser le long d'une droite.

Pour déterminer la direction de cette branche, on calcule $\\displaystyle\\lim_{x \\to \\pm\\infty} \\dfrac{f(x)}{x}$ :

- Si $\\dfrac{f(x)}{x} \\to 0$ → la courbe $\\mathcal{C}_f$ admet une **branche parabolique de direction l'axe des abscisses** $(Ox)$. La courbe s'aplatit et s'étale le long de l'horizontale.

- Si $\\dfrac{f(x)}{x} \\to \\pm\\infty$ → la courbe $\\mathcal{C}_f$ admet une **branche parabolique de direction l'axe des ordonnées** $(Oy)$. La courbe s'envole verticalement.

- Si $\\dfrac{f(x)}{x} \\to m$ avec $m \\neq 0$ et $m$ réel fini → on poursuit en calculant $\\displaystyle\\lim [f(x) - mx]$ pour chercher une asymptote oblique (déjà traité ci-dessus au point ③).`,
        },
        {
          type: 'figure',
          id: 'fig-m7-3',
          src: '/images/t1/fig_M7_3.png',
          legende: `Branche parabolique de direction $(Ox)$ vs $(Oy)$.`,
          alt: `Branche parabolique de direction $(Ox)$ vs $(Oy)$.`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `Conseil`,
          contenu: `Au BAC, la question tombe souvent sous la forme : *« Déterminer la nature de la branche infinie de $\\mathcal{C}_f$ en $+\\infty$. »*. C'est le signal qu'il faut calculer $\\dfrac{f(x)}{x}$ en premier. Si le résultat est $0$ ou $\\pm\\infty$, tu conclus directement par la branche parabolique — pas besoin d'aller chercher $p$.`,
        },
        {
          type: 'warning',
          id: 'warn9',
          titre: `Piège à éviter`,
          contenu: `Ne confonds pas « branche parabolique de direction $(Ox)$ » et « asymptote horizontale $y = 0$ ». Pour l'asymptote horizontale, c'est $f(x)$ lui-même qui tend vers un réel fini. Pour la branche parabolique de direction $(Ox)$, c'est le rapport $\\dfrac{f(x)}{x}$ qui tend vers $0$ — mais $f(x)$ lui-même peut très bien tendre vers $\\pm\\infty$ (comme $\\sqrt{x}$ dont $\\dfrac{\\sqrt{x}}{x} \\to 0$ mais $\\sqrt{x} \\to +\\infty$).`,
        },
        {
          type: 'text',
          id: 'b10',
          contenu: `**④ Étude de la Position Relative**

Pour connaître la hauteur de la courbe par rapport à une asymptote d'équation $y = mx + p$, on étudie le **signe de la différence** $f(x) - (mx + p)$ :

- Si $f(x) - (mx + p) > 0$ → $\\mathcal{C}_f$ est **au-dessus** de l'asymptote.
- Si $f(x) - (mx + p) < 0$ → $\\mathcal{C}_f$ est **en dessous** de l'asymptote.`,
        },
        {
          type: 'tip',
          id: 'tip11',
          titre: `Conseil`,
          contenu: `Pour ne plus jamais confondre les équations sur ta copie :

- Si $x$ tend vers un **réel** $x_0$ et produit un résultat infini → c'est la lettre de la variable qui prend le nombre → équation **$x = x_0$** (mur vertical).
- Si $x$ s'en va à l'infini et produit un **réel** $b$ comme résultat → c'est la lettre de l'axe des images qui prend le nombre → équation **$y = b$** (sol horizontal).`,
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
          contenu: `### Le Diagnostic

Face à ton sujet de BAC, tu repères ce module dès que tu lis : *« Interpréter graphiquement le résultat de la limite »*, *« Montrer que la droite d'équation donnée est asymptote »*, ou *« Préciser la position relative de la courbe »*. Ton cerveau doit quitter le mode calcul pur pour enfiler le costume de géomètre.

Tu connais l'histoire du voisin de classe qui quitte la salle d'examen tout joyeux en disant : « J'ai trouvé $x = 3$ et $y = 2$ ! ». Au moment de la correction, il perd la moitié des points parce qu'il a balancé ses lettres comme des réponses de QCM. Le correcteur cherche des **phrases complètes**, pas des devinettes de brouillon.

### L'Arbre de décision`,
        },
        {
          type: 'table',
          id: 'tbl13',
          headers: [`Si le résultat de ta limite montre…`, `Ce que tu écris mot pour mot sur ta copie`],
          rows: [
            [`x tend vers un réel a, la limite donne l'infini`, `La droite d'équation x = x₀ est asymptote verticale à la courbe Cf.`],
            [`x tend vers l'infini, la limite donne un réel b`, `La droite d'équation y = b est asymptote horizontale à la courbe Cf en ±∞.`],
            [`L'énoncé te donne une droite y = mx + p à vérifier en ±∞`, `Calcule la limite de la différence f(x) − (mx + p). Si elle vaut 0, conclure : la droite d'équation y = mx + p est asymptote oblique à Cf en ±∞.`],
            [`L'énoncé te demande la position relative`, `Étudier le signe de f(x) − (mx + p) sur l'intervalle. Signe positif → courbe au-dessus. Signe négatif → courbe en dessous.`],
            [`f(x)/x tend vers 0 en ±∞ (et f(x) tend vers ±∞)`, `Branche parabolique de direction l'axe des abscisses (Ox). Conclure directement — pas d'asymptote oblique.`],
            [`f(x)/x tend vers ±∞ en ±∞`, `Branche parabolique de direction l'axe des ordonnées (Oy). Conclure directement — la courbe s'envole verticalement.`],
          ],
        },
        {
          type: 'text',
          id: 'b14',
          contenu: `### La Procédure

**Étape 1.** Analyse la borne de ta limite : s'agit-il d'un réel fixe ou d'un infini ?

**Étape 2.** Regarde la valeur du résultat et applique la règle « Le nombre donne la lettre » pour identifier le type d'asymptote.

**Étape 3.** Rédige la conclusion en nommant l'objet complet : ne donne jamais une équation brute sans préciser qu'il s'agit d'**une droite** et de son **type** (verticale, horizontale ou oblique).

**Étape 4.** Si on te demande la position relative, effectue la soustraction $f(x) - (mx + p)$, simplifie l'expression et dresse son tableau de signes sur l'intervalle de travail.

### La Vérification

Vérifie bien tes parenthèses au moment de calculer la différence $f(x) - (mx + p)$. Si tu oublies de distribuer le signe moins sur tout le bloc de la droite, tout ton tableau de signes sera inversé. Ta courbe passera en dessous au lieu de passer au-dessus, et ton dessin final ne suivra plus la trajectoire correcte.`,
        },
      ],
    },
    {
      id: 's-bac-5',
      titre: `📘 LANGAGE OFFICIEL DU BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b15',
          contenu: `Champion(ne), tu as l'image de l'avion qui descend vers la piste. Maintenant, ta copie doit parler le langage rigoureux des maths.

**Définition formelle — Asymptote verticale.** Soit $f$ une fonction et $x_0$ un réel. Si $\\displaystyle\\lim_{x \\to x_0} f(x) = \\pm\\infty$ (ou si l'une des limites latérales en $x_0$ est infinie), alors la droite d'équation $x = x_0$ est appelée **asymptote verticale** à la courbe $\\mathcal{C}_f$.

**Définition formelle — Asymptote horizontale.** Soit $f$ une fonction et $b$ un réel. Si $\\displaystyle\\lim_{x \\to +\\infty} f(x) = b$ (ou si la même limite vaut $b$ en $-\\infty$), alors la droite d'équation $y = b$ est appelée **asymptote horizontale** à la courbe $\\mathcal{C}_f$ en $+\\infty$ (ou en $-\\infty$).

**Définition formelle — Asymptote oblique.** La droite d'équation $y = mx + p$ (avec $m \\neq 0$) est **asymptote oblique** à la courbe $\\mathcal{C}_f$ en $+\\infty$ (ou en $-\\infty$) si et seulement si :
$$\\lim_{x \\to \\pm\\infty} \\left[\\, f(x) - (mx + p)\\,\\right] = 0$$

**Définition formelle — Branche parabolique.** Si en $+\\infty$ (ou $-\\infty$), la courbe $\\mathcal{C}_f$ ne possède ni asymptote horizontale ni asymptote oblique, on parle de **branche parabolique**. Sa direction est donnée par la limite de $\\dfrac{f(x)}{x}$ :
- si $\\dfrac{f(x)}{x} \\to 0$ : branche parabolique de direction l'axe $(Ox)$ ;
- si $\\dfrac{f(x)}{x} \\to \\pm\\infty$ : branche parabolique de direction l'axe $(Oy)$.

**En langage courant.** L'asymptote, c'est la ligne droite dont la courbe se rapproche indéfiniment. La branche parabolique, c'est quand la courbe s'envole sans jamais se stabiliser le long d'une droite.`,
        },
        {
          type: 'warning',
          id: 'warn16',
          titre: `Piège à éviter`,
          contenu: `- **Asymptote verticale d'équation $x = x_0$** — jamais juste « $x = x_0$ ». Toujours préciser le type.
- **Asymptote horizontale en $+\\infty$** (ou en $-\\infty$) — préciser la borne où elle s'applique.
- **Asymptote oblique d'équation $y = mx + p$** — donner l'équation complète.
- **Branche parabolique de direction $(Ox)$** ou **$(Oy)$** — la formulation officielle, pas « branche infinie » seul.
- **Position relative de $\\mathcal{C}_f$ par rapport à $(D)$** — l'expression complète attendue.`,
        },
        {
          type: 'tip',
          id: 'tip17',
          titre: `Conseil`,
          contenu: `Le correcteur attend une phrase complète et nommée : *« La droite d'équation $y = 2$ est asymptote horizontale à $\\mathcal{C}_f$ en $+\\infty$. »* Une équation lâchée sans phrase = points perdus. Un type d'asymptote oublié = points perdus.`,
        },
      ],
    },
    {
      id: 's-exo-6',
      titre: `Exercices-Types`,
      blocs: [
        {
          type: 'exercise',
          id: 'extype18',
          niveau: 'BAC',
          enonce: `Soit $g$ la fonction définie sur $\\,]-1\\,;\\,+\\infty[$ par $g(x) = x - 1 + \\dfrac{1}{x + 1}$.

1. Démontrer que la droite $(D)$ d'équation $y = x - 1$ est asymptote oblique à la courbe $\\mathcal{C}_g$ en $+\\infty$.
2. Étudier la position relative de la courbe $\\mathcal{C}_g$ par rapport à la droite $(D)$.`,
          etapes: [
            { name: `Étape 1 — Test de la différence`, contenu: `On forme $g(x) - (x - 1)$ et on calcule sa limite en $+\\infty$ :
$$g(x) - (x - 1) = \\left(x - 1 + \\dfrac{1}{x + 1}\\right) - (x - 1) = \\dfrac{1}{x + 1}$$

<dialogue role="pf">Grand Frère, pourquoi la partie avec les $x$ disparaît d'un seul coup quand on calcule la différence ?</dialogue>

<dialogue role="gf">Parce que soustraire la droite revient à nettoyer la fonction de sa trajectoire de vol principale. Il ne reste que l'écart — c'est exactement cet écart qui doit tendre vers zéro pour valider l'asymptote. Regarde la suite.</dialogue>

Calculons la limite de cet écart :
$$\\lim_{x \\to +\\infty} \\dfrac{1}{x + 1} = 0$$

Le test est validé — la droite est bien l'asymptote oblique.` },
            { name: `Étape 2 — Position relative`, contenu: `On étudie le signe de $\\dfrac{1}{x+1}$ sur $\\,]-1\\,;\\,+\\infty[$.

Puisque $x > -1$, on a $x + 1 > 0$. Le numérateur étant $1 > 0$, le quotient est **strictement positif** sur tout l'intervalle. La différence est positive → la courbe plane au-dessus de sa piste.` },
          ],
          reponse: ``,
          conseil: `Ne néglige jamais l'étude de position relative lorsqu'elle est demandée. Elle te donne le sens exact du placement de ton tracé par rapport aux lignes de repère — cela t'évite de raturer ton graphique trois fois de suite sur ta feuille d'examen.`,
          piege: `Ne confonds pas l'asymptote horizontale et l'asymptote oblique. Une asymptote horizontale ne possède pas de coefficient en $x$ ($y = b$), tandis que l'asymptote oblique grimpe ou descend avec un coefficient ($y = mx + p$, $m \\neq 0$). Si tu qualifies une droite oblique d'horizontale sur ta copie, le correcteur barre toute la phrase.`,
        },
        {
          type: 'figure',
          id: 'fig-m7-2',
          src: '/images/t1/fig_M7_2.png',
          legende: `Asymptote oblique $(D):y=x-1$, courbe au-dessus.`,
          alt: `Asymptote oblique $(D):y=x-1$, courbe au-dessus.`,
        },
        {
          type: 'rule',
          id: 'copie19',
          titre: `La Copie Parfaite`,
          contenu: `**1.** Démontrons que la droite $(D)$ d'équation $y = x - 1$ est asymptote oblique à $\\mathcal{C}_g$ en $+\\infty$.

Pour tout $x \\in \\,]-1\\,;\\,+\\infty[$ :
$$g(x) - (x - 1) = x - 1 + \\dfrac{1}{x + 1} - (x - 1) = \\dfrac{1}{x + 1}$$

Calculons la limite en $+\\infty$ :
$$\\lim_{x \\to +\\infty} \\left[\\, g(x) - (x - 1)\\,\\right] = \\lim_{x \\to +\\infty} \\dfrac{1}{x + 1} = 0$$

La limite de la différence étant nulle en $+\\infty$, la droite $(D)$ d'équation $y = x - 1$ est **asymptote oblique** à la courbe $\\mathcal{C}_g$ en $+\\infty$.

**2.** Étudions la position relative de $\\mathcal{C}_g$ par rapport à $(D)$.

Pour tout $x \\in \\,]-1\\,;\\,+\\infty[$, $x > -1 \\implies x + 1 > 0$.

Par conséquent : $\\dfrac{1}{x + 1} > 0$, soit $g(x) - (x - 1) > 0$.

On en conclut que la courbe $\\mathcal{C}_g$ est **strictement au-dessus** de la droite $(D)$ sur l'intervalle $\\,]-1\\,;\\,+\\infty[$.

*[Barème type BAC : calcul de la différence g(x) − (x−1) 0,5 pt · limite de la différence en +∞ 0,5 pt · conclusion asymptote oblique rédigée 0,5 pt · signe de la différence justifié 0,5 pt · conclusion position relative rédigée 0,5 pt — Total : 2,5 pts]*

---`,
        },
        {
          type: 'exercise',
          id: 'exo20',
          niveau: 'MOYEN',
          enonce: `Soit $f(x) = \\dfrac{3x - 2}{x + 1}$ définie sur $\\mathbb{R} \\setminus \\{-1\\}$. Trouver les asymptotes de la courbe de $f$.
  *(Réponse : Asymptote verticale $x = -1$ (car $\\displaystyle\\lim_{x \\to -1} |f(x)| = +\\infty$). Asymptote horizontale $y = 3$ (car $\\displaystyle\\lim_{x \\to \\pm\\infty} f(x) = \\dfrac{3x}{x} = 3$).)*`,
          etapes: [
          ],
          reponse: ``,
        },
        {
          type: 'exercise',
          id: 'exo21',
          niveau: 'MOYEN',
          enonce: `Soit $h(x) = 2x + 3 + \\dfrac{5}{x - 2}$ définie sur $\\,]2\\,;\\,+\\infty[$. La droite d'équation $y = 2x + 3$ est-elle asymptote oblique à sa courbe en $+\\infty$, et où se place la courbe par rapport à cette droite ?
  *(Réponse : Oui — $h(x) - (2x+3) = \\dfrac{5}{x-2} \\to 0$ en $+\\infty$. La courbe est strictement au-dessus car $\\dfrac{5}{x-2} > 0$ sur $\\,]2\\,;\\,+\\infty[$.)*`,
          etapes: [
          ],
          reponse: ``,
        },
        {
          type: 'exercise',
          id: 'exo22',
          niveau: 'MOYEN',
          enonce: `Soit $f(x) = x + \\dfrac{2}{x}$ définie sur $\\,]0\\,;\\,+\\infty[$. Montrer que la droite $y = x$ est asymptote oblique en $+\\infty$ et préciser la position de la courbe.
  *(Réponse : $f(x) - x = \\dfrac{2}{x} \\to 0$ en $+\\infty$ → $y = x$ est asymptote oblique. Comme $\\dfrac{2}{x} > 0$ sur $\\,]0\\,;\\,+\\infty[$, la courbe est strictement au-dessus.)*`,
          etapes: [
          ],
          reponse: ``,
        },
      ],
    },
    {
      id: 's-recap-7',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap23',
          titre: `À retenir`,
          contenu: [
            `Une asymptote est une ligne droite dont une courbe s'approche indéfiniment sans jamais la toucher.`,
            `📘 Vocabulaire officiel : asymptote verticale d'équation $x = x_0$, asymptote horizontale d'équation $y = b$, asymptote oblique d'équation $y = mx + p$, branche parabolique de direction $(Ox)$ ou $(Oy)$, position relative de $\\mathcal{C}_f$ par rapport à $(D)$.`,
            `Pour retenir les équations sans paniquer : **« Le nombre donne la lettre »**. Le nombre fixé sur l'axe des $x$ crée une verticale ($x = x_0$). Le nombre fixé sur le résultat de la limite crée une horizontale ($y = b$).`,
            `L'asymptote oblique se repère à la limite de la différence qui doit s'effondrer jusqu'à donner exactement $0$.`,
            `La phrase de conclusion doit être rédigée en entier pour empocher la totalité des points au BAC.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil24',
          titre: `Fil rouge`,
          contenu: `Nous y voilà, Champion(ne). Tu as ouvert ce tout premier tome en te demandant pourquoi ton gbaka changeait de destination face à un point interdit. Ensemble, on a traversé pas à pas le mur des formes indéterminées en débusquant les facteurs cachés. On a brisé les cadenas des racines carrées à coup d'expressions conjuguées. On a découvert la loi de la jungle qui donne la victoire à l'exponentielle sur l'autoroute des croissances comparées. On a recousu les routes brisées grâce au protocole de la continuité, du TVI et du Théorème de la Bijection. Et maintenant, tu sais lire et dessiner les lignes de mire de tes courbes grâce aux asymptotes. Tout l'arsenal indispensable des limites et de la continuité est désormais gravé dans ton cerveau. La prochaine grande aventure ? C'est la **Salle d'Entraînement**. On va réunir toutes tes forces apprises dans ce volume pour faire parler la poudre sur un vrai problème complet du BAC, et gâter le coin pour de bon !`,
        },
      ],
    },
    {
      id: 's-eval-8',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval25',
          titre: `Auto-évaluation`,
          contenu: [
            `Je sais utiliser la règle mnémotechnique « Le nombre donne la lettre » pour écrire directement l'équation d'une asymptote verticale ou horizontale.`,
            `J'utilise le vocabulaire officiel (asymptote verticale, horizontale, oblique, branche parabolique de direction $(Ox)$ ou $(Oy)$, position relative) dans chacune de mes rédactions.`,
            `Je maîtrise le test de la différence pour valider l'existence d'une asymptote oblique en $\\pm\\infty$.`,
            `J'ai assimilé comment exploiter le signe de $f(x) - (mx + p)$ pour en déduire la hauteur de la courbe par rapport à sa ligne de mire.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score26',
          titre: `Ton score`,
          contenu: [
            `🟢 **4/4** → Le coin est gâté ! Ton arsenal sur les limites est complet — tu peux fermer ce tome la tête haute et attaquer les sujets de synthèse.`,
            `🟡 **2 ou 3** → Attention aux étourderies d'écriture. Relis la brique 📘 et l'encadré ⚠️ pour ne pas offrir tes points au correcteur sur la rédaction des conclusions.`,
            `🔴 **0 ou 1** → Pose ton stylo et reprends tranquillement l'histoire de l'avion d'Air Côte d'Ivoire au ② Le Réel avant de te frotter aux soustractions littérales.`,
          ],
        },
      ],
    },
  ],
};
