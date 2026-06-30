import { Chapitre } from '../../types/course';

export const chapitreM5: Chapitre = {
  id: 't6-m5',
  titre: `Module 5 — Limites de référence et dérivées trigonométriques`,
  duree: 26,
  niveau: 'MOYEN',
  xpGain: 30,
  objectifs: [
    `Reconnaître et utiliser les limites trigonométriques de référence en $0$`,
    `Lever une forme indéterminée du type $\\dfrac{\\sin x}{x}$ en se ramenant à la limite de référence`,
    `Énoncer les limites de référence et les formules de dérivation avec le vocabulaire officiel du BAC`,
    `Dériver $\\sin u$, $\\cos u$ et $\\tan u$ avec la règle de la dérivée composée`,
    `Étudier le signe d'une dérivée trigonométrique pour préparer un tableau de variations`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, on m'a dit que $(\\sin x)' = \\cos x$. D'accord, je le note. Mais d'où ça sort ? Et pourquoi mon livre insiste autant sur une limite bizarre, $\\dfrac{\\sin x}{x}$ quand $x$ tend vers $0$ ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Tu poses LA bonne question, Champion(ne). Cette « limite bizarre », c'est la clé qui ouvre toute la dérivation trigonométrique. Sans elle, $(\\sin x)' = \\cos x$ n'est qu'une formule apprise par cœur. Avec elle, tu comprends **pourquoi** c'est vrai. Et au BAC, cette limite tombe directement dans les calculs. Aujourd'hui, on la dompte, puis on en déduit toutes les dérivées du tome.`,
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
          contenu: `Imagine un enfant sur une balançoire dans une cour d'école à Cocody. Quand la balançoire est tout en haut de son élan, à l'instant précis où elle s'arrête pour repartir, sa vitesse est nulle. Quand elle passe au point le plus bas, au milieu, elle file à sa vitesse maximale. Entre les deux, la vitesse change continûment.

Si tu traces la **position** de la balançoire au cours du temps, tu obtiens une belle courbe en sinus. Et sa **vitesse** à chaque instant — c'est-à-dire la dérivée de la position — suit elle aussi une courbe régulière, décalée : c'est un cosinus. La position et la vitesse sont deux ondes sœurs, en avance l'une sur l'autre d'un quart de tour.

Mais pour mesurer cette vitesse exactement au départ, quand l'angle est tout petit, on a besoin de savoir comment se comporte $\\sin x$ pour des angles minuscules. Et là, une surprise nous attend : **pour un tout petit angle, $\\sin x$ est pratiquement égal à $x$ lui-même.** C'est cette observation qui fait démarrer toute la machine.`,
        },
        {
          type: 'figure',
          id: 'fig-m5-1',
          src: '/images/t6/fig_M5_1.png',
          legende: `Plus l'angle est petit, plus $\\sin x$ colle à $x$ : c'est le sens de $\\displaystyle\\lim_{x\\to 0}\\dfrac{\\sin x}{x} = 1$.`,
          alt: `Près de l'origine, la courbe y = sin x et la droite y = x se confondent.`,
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
          contenu: `On traduit « $\\sin x$ se confond avec $x$ » en limite.

- « pour un petit angle, $\\sin x \\approx x$ » → $\\dfrac{\\sin x}{x} \\approx 1$ → $\\displaystyle\\lim_{x\\to 0}\\dfrac{\\sin x}{x} = 1$.
- « la position est un sinus, la vitesse un cosinus » → $(\\sin x)' = \\cos x$.
- « le cosinus part à plat en $0$ » → $\\dfrac{1 - \\cos x}{x^2} \\to \\dfrac{1}{2}$.`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Observation concrète`, `Traduction maths`, `Nom officiel`],
          rows: [
            [`$\\sin x$ colle à $x$ près de $0$`, `$\\displaystyle\\lim_{x\\to 0}\\dfrac{\\sin x}{x} = 1$`, `Limite de référence du sinus`],
            [`Le cosinus démarre à plat`, `$\\displaystyle\\lim_{x\\to 0}\\dfrac{1 - \\cos x}{x^2} = \\dfrac{1}{2}$`, `Limite de référence du cosinus`],
            [`Vitesse de la position-sinus`, `$(\\sin x)' = \\cos x$`, `Dérivée du sinus`],
            [`Le cosinus chute en miroir`, `$(\\cos x)' = -\\sin x$`, `Dérivée du cosinus`],
          ],
        },
        {
          type: 'text',
          id: 'b5',
          contenu: `Ces limites sont le socle ; les dérivées en découlent. On formalise tout maintenant.`,
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
          contenu: `Champion(ne), tu as l'image de la balançoire. La copie attend les énoncés exacts.

**Définition formelle.** Les **limites trigonométriques de référence** sont :
$$\\displaystyle\\lim_{x\\to 0}\\dfrac{\\sin x}{x} = 1 \\qquad \\text{et} \\qquad \\displaystyle\\lim_{x\\to 0}\\dfrac{1 - \\cos x}{x^2} = \\dfrac{1}{2}.$$
Les fonctions $\\sin$ et $\\cos$ sont dérivables sur $\\mathbb{R}$, et pour tout réel $x$ : $\\sin'(x) = \\cos x$, $\\cos'(x) = -\\sin x$.

**En langage courant.** Près de zéro, le sinus se comporte comme la droite $y = x$ ; dériver un sinus donne un cosinus, et dériver un cosinus donne un sinus changé de signe.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Limite de référence** — limite admise au programme, utilisable sans démonstration.
- **Forme indéterminée $\\dfrac{0}{0}$** — ce que présente $\\dfrac{\\sin x}{x}$ en $0$ avant qu'on la lève.
- **Fonction dérivable sur $\\mathbb{R}$** — $\\sin$ et $\\cos$ le sont ; on peut dériver partout.
- **Dérivée composée** — $(\\sin u)' = u'\\cos u$, application directe de la règle de chaîne (Outil 1 du Socle).`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend que, devant $\\dfrac{\\sin(3x)}{x}$, tu écrives : *« Je me ramène à la limite de référence en faisant apparaître $\\dfrac{\\sin(3x)}{3x}$. »*`,
        },
        {
          type: 'figure',
          id: 'fig-m5-2',
          src: '/images/t6/fig_M5_2.png',
          legende: `La dérivée du sinus est le cosinus : là où l'onde culmine, sa vitesse s'annule.`,
          alt: `Les courbes de sinus et de sa dérivée cosinus, deux ondes décalées.`,
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
          titre: `Règle d'Or — Limites et dérivées trigonométriques`,
          contenu: `**Limites de référence.**
$$\\displaystyle\\lim_{x\\to 0}\\dfrac{\\sin x}{x} = 1, \\qquad \\displaystyle\\lim_{x\\to 0}\\dfrac{\\tan x}{x} = 1, \\qquad \\displaystyle\\lim_{x\\to 0}\\dfrac{1 - \\cos x}{x^2} = \\dfrac{1}{2}.$$

**Dérivées de base.**
$$\\sin'(x) = \\cos x, \\qquad \\cos'(x) = -\\sin x, \\qquad \\tan'(x) = 1 + \\tan^2 x = \\dfrac{1}{\\cos^2 x}.$$

**Dérivées composées** (avec $u$ dérivable) :
$$(\\sin u)' = u'\\cos u, \\qquad (\\cos u)' = -u'\\sin u, \\qquad (\\tan u)' = \\dfrac{u'}{\\cos^2 u}.$$`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `C'est exactement la mécanique du Tome 5 : comme $(\\ln u)' = \\dfrac{u'}{u}$ et $(e^u)' = u'e^u$, tu « sors la dérivée de l'intérieur » $u'$ et tu l'accroches devant. Même geste, nouvelles fonctions.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `La dérivée du cosinus prend **toujours** un signe moins : $(\\cos x)' = -\\sin x$. Oublier ce moins fausse tout le tableau de variations qui suit.`,
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
          contenu: `On te demande une limite trigonométrique, une dérivée, ou le signe d'une dérivée. Repère : « limite en $0$ avec $\\sin$ ou $\\tan$ » → ramène à la limite de référence ; « dérive $\\cos(3x+1)$ » → dérivée composée, sors $u'$ ; « étudie les variations » → dérive puis étudie le signe.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`Si tu vois…`, `Ce que tu fais`],
          rows: [
            [`$\\dfrac{\\sin(ax)}{x}$ en $0$`, `Multiplie/divise par $a$ : $\\dfrac{\\sin(ax)}{ax}\\times a \\to a$.`],
            [`$\\dfrac{1 - \\cos x}{x^2}$ en $0$`, `Applique la limite de référence : $\\dfrac{1}{2}$.`],
            [`$\\sin(u)$ ou $\\cos(u)$ à dériver`, `Dérivée composée : sors $u'$, garde/inverse le signe.`],
            [`Un tableau de variations à dresser`, `Dérive, étudie le signe de la dérivée, conclus.`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure (dériver et étudier le signe)`,
          contenu: `**Étape 1.** Identifie la fonction intérieure $u$ et calcule $u'$.

**Étape 2.** Applique la formule composée : $(\\sin u)' = u'\\cos u$ (ou cosinus/tangente).

**Étape 3.** Pour les variations, étudie le signe du facteur trigonométrique sur l'intervalle.

**Étape 4.** Conclus le sens de variation par une phrase complète.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `- **Signe du moins** : vérifie que toute dérivée de cosinus porte bien son signe négatif.
- **Cohérence** : aux maximums de la fonction, la dérivée doit s'annuler en changeant de signe.`,
        },
        {
          type: 'figure',
          id: 'fig-m5-3',
          src: '/images/t6/fig_M5_3.png',
          legende: `Le sinus monte quand son cosinus-dérivée est positif, et redescend quand il devient négatif.`,
          alt: `Signe de la dérivée et variations de g(x) = sin x sur une période.`,
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
            [`🟢 BASE`, `Dérivée composée trigonométrique`, `Une fonction $\\sin(u)$ ou $\\cos(u)$ à dériver`, `Type 1`],
            [`🟡 MOYEN`, `Limite de référence`, `$\\dfrac{\\sin(ax)}{x}$ ou $\\dfrac{\\tan x}{x}$ en $0$`, `Type 2`],
            [`🔴 BAC`, `Limite avec forme indéterminée`, `$\\dfrac{1 - \\cos x}{x^2}$ ou combinaison`, `Type 3`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — Dérivée composée.** Dérive la fonction $f(x) = \\cos(5x)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Fonction composée $\\cos(u)$ avec $u = 5x$ : on applique $(\\cos u)' = -u'\\sin u$.` },
            { name: `Étape 1`, contenu: `$u(x) = 5x$, donc $u'(x) = 5$.` },
            { name: `Étape 2`, contenu: `$f'(x) = -u'\\sin u = -5\\sin(5x)$.` },
          ],
          reponse: `$f'(x) = -5\\sin(5x)$.`,
          conseil: `Écris $u$ et $u'$ au brouillon avant de dériver : tu ne risques plus d'oublier le facteur $u'$.`,
          piege: `Deux erreurs en une à éviter : oublier le $5$ qui sort, et oublier le signe moins du cosinus. Ici les deux sont présents.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Avec $u(x) = 5x$ et $u'(x) = 5$, on a $f'(x) = -u'(x)\\sin\\big(u(x)\\big) = -5\\sin(5x).$

*[Barème : $u'$ correct : 1 pt · formule appliquée : 0,5 pt · signe : 0,5 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Limite de référence.** Calcule $\\displaystyle\\lim_{x\\to 0}\\dfrac{\\sin(3x)}{x}$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Forme $\\dfrac{0}{0}$ : on se ramène à la limite de référence en faisant apparaître $\\dfrac{\\sin(3x)}{3x}$.` },
            { name: `Étape 1`, contenu: `$\\dfrac{\\sin(3x)}{x} = 3 \\times \\dfrac{\\sin(3x)}{3x}$.` },
            { name: `Étape 2`, contenu: `Quand $x \\to 0$, $3x \\to 0$, donc $\\dfrac{\\sin(3x)}{3x} \\to 1$ (limite de référence).` },
          ],
          reponse: `$\\displaystyle\\lim_{x\\to 0}\\dfrac{\\sin(3x)}{x} = 3 \\times 1 = 3$.`,
          conseil: `Pour utiliser $\\dfrac{\\sin X}{X} \\to 1$, il faut le **même** argument en haut et en bas : ici on fabrique $3x$ en bas en multipliant par $3$ devant.`,
          piege: `Ne réponds pas « $1$ » par automatisme : la limite vaut $3$ à cause du coefficient $3$ devant l'argument.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Pour tout $x \\neq 0$, $\\dfrac{\\sin(3x)}{x} = 3\\,\\dfrac{\\sin(3x)}{3x}$. Or $\\displaystyle\\lim_{x\\to 0}\\dfrac{\\sin(3x)}{3x} = 1$, donc $\\displaystyle\\lim_{x\\to 0}\\dfrac{\\sin(3x)}{x} = 3.$

*[Barème : reconnaissance de la FI : 1 pt · mise en forme $\\dfrac{\\sin(3x)}{3x}$ : 1,5 pt · conclusion : 1 pt — Total : 3,5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 3 — Limite du cosinus.** Calcule $\\displaystyle\\lim_{x\\to 0}\\dfrac{1 - \\cos x}{x^2}$, puis $\\displaystyle\\lim_{x\\to 0}\\dfrac{1 - \\cos x}{x}$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `La première est une limite de référence directe ; la seconde s'en déduit.` },
            { name: `Étape 1`, contenu: `Par la limite de référence, $\\displaystyle\\lim_{x\\to 0}\\dfrac{1 - \\cos x}{x^2} = \\dfrac{1}{2}$.` },
            { name: `Étape 2`, contenu: `On écrit $\\dfrac{1 - \\cos x}{x} = x \\times \\dfrac{1 - \\cos x}{x^2}$.` },
            { name: `Étape 3`, contenu: `Quand $x \\to 0$, le premier facteur tend vers $0$ et le second vers $\\dfrac{1}{2}$.` },
          ],
          reponse: `$\\displaystyle\\lim_{x\\to 0}\\dfrac{1 - \\cos x}{x^2} = \\dfrac{1}{2}$ et $\\displaystyle\\lim_{x\\to 0}\\dfrac{1 - \\cos x}{x} = 0$.`,
          conseil: `Quand le dénominateur est $x$ et non $x^2$, fais apparaître artificiellement $x^2$ en sortant un facteur $x$ : tu retombes sur la limite connue.`,
          piege: `Ne confonds pas les deux limites : avec $x^2$ au dénominateur on obtient $\\dfrac{1}{2}$, avec $x$ seul on obtient $0$. Le dénominateur change tout.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$\\displaystyle\\lim_{x\\to 0}\\dfrac{1 - \\cos x}{x^2} = \\dfrac{1}{2}$. De plus, $\\dfrac{1 - \\cos x}{x} = x\\,\\dfrac{1 - \\cos x}{x^2}$, produit d'un facteur tendant vers $0$ par un facteur tendant vers $\\dfrac{1}{2}$ ; donc $\\displaystyle\\lim_{x\\to 0}\\dfrac{1 - \\cos x}{x} = 0.$

*[Barème : limite de référence : 1,5 pt · transformation : 1,5 pt · conclusion des deux limites : 1 pt — Total : 4 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Repère la limite de référence cachée. Réponses finales seulement.

- **Exercice 1.** Dérive $f(x) = \\sin(2x + 1)$. *(Réponse : $f'(x) = 2\\cos(2x+1)$.)*
- **Exercice 2.** Calcule $\\displaystyle\\lim_{x\\to 0}\\dfrac{\\sin(5x)}{2x}$. *(Réponse : $\\dfrac{5}{2}$.)*
- **Exercice 3.** Dérive $g(x) = \\tan(3x)$. *(Réponse : $g'(x) = \\dfrac{3}{\\cos^2(3x)}$.)*`,
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
            `Limites de référence : $\\displaystyle\\lim_{x\\to 0}\\dfrac{\\sin x}{x} = 1$ et $\\displaystyle\\lim_{x\\to 0}\\dfrac{1 - \\cos x}{x^2} = \\dfrac{1}{2}$.`,
            `📘 Vocabulaire officiel : limite de référence, forme indéterminée $\\dfrac{0}{0}$, fonction dérivable, dérivée composée.`,
            `$(\\sin u)' = u'\\cos u$, $(\\cos u)' = -u'\\sin u$, $(\\tan u)' = \\dfrac{u'}{\\cos^2 u}$.`,
            `La dérivée du cosinus porte toujours un signe moins.`,
            `Pour $\\dfrac{\\sin(ax)}{x}$, fabrique le même argument en haut et en bas pour utiliser la limite de référence.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m5',
          titre: `Fil rouge`,
          contenu: `Tu sais dériver, donc tu sais étudier le **signe** d'une dérivée. C'est l'ingrédient qui manquait pour mener une étude de fonction complète. Au Module 6, dernier du tome, on assemble tout : résoudre des équations et inéquations trigonométriques, puis dérouler l'étude complète d'une fonction trigonométrique, la reine de l'épreuve.`,
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
            `Je connais les deux limites de référence et je les utilise sans les démontrer.`,
            `J'emploie le vocabulaire officiel (limite de référence, forme indéterminée, dérivée composée).`,
            `Je me ramène à $\\dfrac{\\sin X}{X}$ en fabriquant le bon argument au dénominateur.`,
            `Je dérive $\\sin u$, $\\cos u$, $\\tan u$ sans oublier $u'$ ni le signe moins.`,
            `J'étudie le signe d'une dérivée trigonométrique pour conclure sur les variations.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m5',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Le mouvement est décodé. Direction Module 6, le combat final.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 2.`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : la balançoire de Cocody.`,
          ],
        },
      ],
    },
  ],
};
