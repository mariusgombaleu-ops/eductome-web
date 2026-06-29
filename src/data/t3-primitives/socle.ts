import { Chapitre } from '../../types/course';

export const chapitreSocle: Chapitre = {
  id: 't3-socle',
  titre: `Le Socle — Les 5 Outils de Sécurité`,
  duree: 12,
  niveau: 'BASE',
  xpGain: 15,
  gratuit: true,
  objectifs: [
    `Réactiver la dérivation comme un réflexe pour lire une primitive « à l'envers »`,
    `Repérer la fonction intérieure $u$ et sa dérivée $u'$ dans une expression composée`,
    `Développer proprement $[f(x)]^2$ et simplifier une fraction rationnelle`,
    `Réveiller l'exponentielle et le logarithme, invités permanents du calcul intégral`,
  ],
  sections: [
    {
      id: 's1',
      titre: `Avant de se lancer, on aiguise les outils`,
      blocs: [
        {
          type: 'text',
          id: 'b-intro',
          contenu: `Avant de se lancer tête baissée dans les six modules de ce Tome 3, on doit s'assurer que tes bases sont solides. Les primitives et les intégrales ne sont pas de nouvelles inventions bizarres : elles s'appuient entièrement sur ce que tu maîtrises déjà. Si ces cinq outils de sécurité sont bien réveillés dans ton esprit, tu vas traverser ce chapitre avec la confiance d'un vieux caïman.`,
        },
      ],
    },
    {
      id: 's-o1',
      titre: `🔧 Outil 1 — La dérivation, fluide comme un réflexe`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg-o1a',
          pf: `Grand Frère, on attaque enfin les primitives — pourquoi tu nous ramènes encore sur les dérivées du Tome 2 ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-o1b',
          gf: `Champion(ne), si tu veux faire une marche arrière propre avec un gbaka, tu as tout intérêt à savoir d'abord comment il avance ! La primitive, c'est le chemin du retour. Si tu ne connais pas tes dérivées sur le bout des doigts, tu vas bégayer devant ta feuille.`,
        },
        {
          type: 'text',
          id: 'b-o1',
          contenu: `Pour trouver une primitive d'une fonction $f$, la question fondamentale est toujours la même : *« Quelle est la fonction qui, lorsqu'on la dérive, me redonne exactement $f$ ? »* C'est pour cela que la dérivation doit être un automatisme absolu. Rappelle-toi les briques de base que tu as déjà domptées :

- La puissance classique : la dérivée de $x^n$ est $nx^{n-1}$.
- Les fonctions trigonométriques : la dérivée de $\\sin x$ est $\\cos x$, et celle de $\\cos x$ est $-\\sin x$.
- L'incontournable exponentielle : la dérivée de $e^x$ reste toujours $e^x$.

Prenons un exemple. Si on te demande une primitive de $f(x) = 4x^3$, tu fouilles dans ta mémoire des dérivées : le coefficient $4$ devant $x^3$ correspond exactement à l'ancienne puissance descendue d'un cran. La fonction de départ est donc $F(x) = x^4$.

Mais attention ! Si tu dérives $x^4 + 5$, tu obtiens aussi $4x^3$ ; si tu dérives $x^4 - 72$, tu obtiens encore $4x^3$. C'est pour cela qu'on écrit toujours la solution comme une **famille de fonctions** : $F(x) = x^4 + C$, avec $C \\in \\mathbb{R}$.`,
        },
        {
          type: 'warning',
          id: 'warn-o1',
          titre: `L'erreur à éviter — la constante oubliée`,
          contenu: `Quand tu calcules une primitive sur un intervalle, la constante $C$ n'est jamais facultative. Oublier d'écrire $+\\,C$ (avec $C \\in \\mathbb{R}$), c'est abandonner des points au correcteur du BAC alors que tout ton raisonnement est juste.`,
        },
      ],
    },
    {
      id: 's-o2',
      titre: `🔧 Outil 2 — Repérer u et u′ dans une expression`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg-o2a',
          pf: `Fréro, quand je vois une grosse expression avec des puissances et des fractions mélangées, mes yeux s'embrouillent sur la copie…`,
        },
        {
          type: 'dialogue',
          id: 'dlg-o2b',
          gf: `Faut pas gnan, Champion(ne). C'est juste un jeu de cache-cache visuel. Au Lycée Classique d'Abidjan, on appelait ça « avoir l'œil du caïman ». Tu dois repérer la fonction principale $u(x)$ et son apprenti $u'(x)$ qui court juste à côté d'elle.`,
        },
        {
          type: 'text',
          id: 'b-o2',
          contenu: `Les primitives de fonctions composées représentent le gros des points dans les sujets du BAC ivoirien. Ton but est de détecter si une expression est de la forme $u' \\cdot g(u)$.

Regardons $6x^2 \\cos(2x^3)$. Le morceau le plus lourd est enfermé dans le cosinus : pose $u(x) = 2x^3$. En dérivant, $u'(x) = 6x^2$ — écrit juste devant ! L'expression est exactement de la forme $u'(x)\\,\\cos\\big(u(x)\\big)$.

Entraînons-nous sur deux autres cas typiques :

- $f(x) = 3x^2 (x^3 + 1)^5$ : pose $u(x) = x^3 + 1$, alors $u'(x) = 3x^2$. C'est un modèle parfait de la forme $u' \\, u^5$.
- $g(x) = \\dfrac{e^x}{e^x + 4}$ : pose $u(x) = e^x + 4$, alors $u'(x) = e^x$ au numérateur. C'est la forme classique $\\dfrac{u'}{u}$.`,
        },
        {
          type: 'tip',
          id: 'tip-o2',
          titre: `Le point de vigilance`,
          contenu: `Ne fais jamais ces identifications de tête sous le stress. Prends deux secondes pour poser proprement $u(x) = \\ldots$ et $u'(x) = \\ldots$ sur ton brouillon. C'est la seule méthode infaillible pour voir s'il manque un coefficient ou un signe moins.`,
        },
      ],
    },
    {
      id: 's-o3',
      titre: `🔧 Outil 3 — Développer [f(x)]² proprement`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg-o3a',
          pf: `Ah, le carré, c'est cadeau ! Si j'ai $(2x+1)^2$, ça donne directement $4x^2 + 1$, non ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-o3b',
          gf: `Ahi, Champion(ne) ! Tu veux me faire tomber de ma chaise ou bien ? Où est passé le double produit ? Les identités remarquables ne partent jamais en voyage !`,
        },
        {
          type: 'text',
          id: 'b-o3',
          contenu: `Dans le Module 6, on calcule des volumes de révolution. La formule officielle t'imposera d'élever une fonction **complète** au carré avant d'intégrer. Si tu rates cette étape algébrique de niveau Troisième, tout le calcul est faussé. Réveille ces trois identités :

- Le carré d'une somme : $(a+b)^2 = a^2 + 2ab + b^2$.
- La simplification de la racine : $(\\sqrt{x})^2 = x$ sur $[\\,0\\,;\\,+\\infty\\,[$.
- Les puissances fractionnaires : $\\big(x^{1/3}\\big)^2 = x^{2/3}$.

Développons l'expression du Petit Frère :

$$[f(x)]^2 = (2x + 1)^2 = (2x)^2 + 2 \\times (2x) \\times 1 + 1^2 = 4x^2 + 4x + 1$$

Une fois l'expression développée en termes simples séparés par des $+$, tu cherches la primitive de chaque morceau séparément ($4x^2$, puis $4x$, puis $1$) sans difficulté.`,
        },
        {
          type: 'warning',
          id: 'warn-o3',
          titre: `Un piège de notation`,
          contenu: `Ne confonds jamais le carré d'une fonction et son double : $[f(x)]^2 \\neq 2f(x)$. Cette confusion fait perdre des points chaque année. Reste concentré(e) sur tes exposants.`,
        },
      ],
    },
    {
      id: 's-o4',
      titre: `🔧 Outil 4 — Simplifier une fraction rationnelle`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg-o4a',
          pf: `Grand Frère, dès qu'il y a un $x$ en haut ET en bas, je n'arrive plus à trouver de primitive. Je fais comment ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-o4b',
          gf: `Tranquille, Champion(ne). Au BAC ivoirien, on n'intègre presque jamais une fraction telle quelle : on la **réécrit** d'abord pour faire apparaître des morceaux qu'on sait primitiver. Ton outil, c'est la décomposition.`,
        },
        {
          type: 'text',
          id: 'b-o4',
          contenu: `Beaucoup de primitives du BAC passent par une réécriture préalable de la fraction. Deux réflexes à avoir :

- **Faire apparaître la forme $\\dfrac{u'}{u}$** quand le numérateur est (presque) la dérivée du dénominateur — la primitive sera alors un $\\ln|u|$.
- **Abaisser le degré du numérateur** quand il est supérieur ou égal à celui du dénominateur, en isolant la partie entière.

Exemple typique d'annale : on veut une primitive de $h(x) = \\dfrac{x^2 + 2}{x + 1}$ sur $]-1\\,;\\,+\\infty[$. Le degré du haut ($2$) dépasse celui du bas ($1$) : on réécrit

$$\\dfrac{x^2 + 2}{x + 1} = x - 1 + \\dfrac{3}{x + 1}.$$

Là, chaque morceau se primitive tout seul : $x-1$ donne $\\dfrac{x^2}{2} - x$, et $\\dfrac{3}{x+1}$ (de la forme $\\dfrac{u'}{u}$) donne $3\\ln|x+1|$.`,
        },
        {
          type: 'tip',
          id: 'tip-o4',
          titre: `Le réflexe du Grand Frère`,
          contenu: `Avant d'intégrer une fraction, demande-toi toujours : *« Est-ce que je peux la réécrire en somme de morceaux plus simples ? »* Neuf fois sur dix au BAC, la réponse est oui — et c'est même souvent une question intermédiaire de l'énoncé qui te guide.`,
        },
      ],
    },
    {
      id: 's-o5',
      titre: `🔧 Outil 5 — Réveiller l'exponentielle et le logarithme`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg-o5a',
          pf: `On a déjà vu $e^x$ et $\\ln$ dans un autre tome… pourquoi ça revient ici ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-o5b',
          gf: `Parce que, Champion(ne), ce sont les invités permanents du calcul intégral. La moitié des primitives du BAC se terminent par un $e^u$ ou un $\\ln|u|$. Si ces deux-là sont flous dans ta tête, tu vas trembler à chaque exercice.`,
        },
        {
          type: 'text',
          id: 'b-o5',
          contenu: `Garde ces faits près de toi, ils servent dans presque tous les modules :

- La dérivée de $e^{x}$ est $e^{x}$ ; plus généralement, la dérivée de $e^{u}$ est $u'\\,e^{u}$.
- La dérivée de $\\ln(x)$ est $\\dfrac{1}{x}$ sur $]\\,0\\,;\\,+\\infty[$ ; plus généralement, la dérivée de $\\ln|u|$ est $\\dfrac{u'}{u}$.

Lis ces deux lignes **à l'envers** et tu obtiens déjà deux familles entières de primitives :

- une primitive de $u'\\,e^{u}$ est $e^{u}$ ;
- une primitive de $\\dfrac{u'}{u}$ est $\\ln|u| + C$.`,
        },
        {
          type: 'warning',
          id: 'warn-o5',
          titre: `Le piège à éviter — les valeurs absolues`,
          contenu: `Le logarithme n'existe que pour des quantités strictement positives. Quand tu primitives $\\dfrac{u'}{u}$, écris **toujours** $\\ln|u|$ (avec les barres de valeur absolue), sauf si l'énoncé te garantit que $u > 0$ sur l'intervalle de travail. Le correcteur traque cette barre.`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `🚀 Récap du Socle — Quel outil pour quel module ?`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-recap',
          headers: [`Outil réveillé ici`, `Tu en auras besoin dans…`],
          rows: [
            [`① La dérivation, fluide comme un réflexe`, `M1 et M2 — retrouver instantanément la fonction d'origine`],
            [`② Repérer $u$ et $u'$ dans une expression`, `M2 et M4 — maîtriser les formes composées et l'IPP`],
            [`③ Développer $[f(x)]^2$ proprement`, `M6 — réussir sans bavure le calcul des volumes`],
            [`④ Simplifier une fraction rationnelle`, `M1, M3 et la Salle d'Examen — les primitives en $\\ln$`],
            [`⑤ Réveiller l'exponentielle et le logarithme`, `M2, M3, M5 — invités permanents du calcul intégral`],
          ],
        },
        {
          type: 'dialogue',
          id: 'dlg-fin1',
          pf: `OK Grand Frère, j'ai révisé les cinq outils. C'est vrai que la fraction rationnelle et les valeurs absolues, je les avais presque oubliées. Je suis prêt(e) ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-fin2',
          gf: `Là, Champion(ne), tes cinq outils sont aiguisés. Range-les bien à portée de main : à partir d'ici, chaque module va piocher dedans. On démarre par le Module 1, les primitives de référence. Faut pas gnan, on avance ensemble.`,
        },
      ],
    },
  ],
};
