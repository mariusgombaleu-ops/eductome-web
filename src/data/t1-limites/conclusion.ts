import { Chapitre } from '../../types/course';

export const chapitreConclusion: Chapitre = {
  id: 't1-conclusion',
  titre: `Conclusion — Tes 6 Victoires`,
  duree: 5,
  niveau: 'BASE',
  xpGain: 20,
  sections: [
    {
      id: 's1',
      titre: `Introduction`,
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu: `Pose ton stylo deux minutes. Respire un grand coup et regarde en arrière.

Tu te souviens du tout premier jour, quand tu as ouvert ce livre ? Quand le prof alignait des flèches et des symboles bizarres au tableau, et que tout cela ressemblait à un dialecte impossible à percer ? Tu te demandais si tu allais tenir le coup jusqu'au BAC, ou si tes feuilles de brouillon allaient finir raturées dix fois sous le regard stressé de tes camarades.

Regarde-toi maintenant. Le brouillard s'est levé. Ce qui te faisait paniquer hier est devenu un simple automatisme aujourd'hui. On a avancé pas à pas, sans sauter une seule marche, et le terrain est conquis.`,
        },
      ],
    },
    {
      id: 's2',
      titre: `🏆 TES 6 VICTOIRES SUR CE TOME`,
      blocs: [
        {
          type: 'table',
          id: 'tbl2',
          headers: [`✅ Compétence acquise`, `Ce que tu sais faire maintenant`],
          rows: [
            [`Savoir où va la courbe`, `Tu as compris que calculer une limite, ce n'est pas une formule magique à réciter — c'est anticiper la destination finale de ton gbaka, même si le terminus se cache tout au bout de l'infini.`],
            [`Briser les murs des formes indéterminées`, `Face au fameux barrage du 0/0 ou des infinis qui s'affrontent, là où les autres rendent copie blanche, toi tu sais démonter l'expression pour factoriser le coupable et libérer le passage.`],
            [`Maîtriser l'arme de l'expression conjuguée`, `Quand les racines carrées ont voulu bloquer la route, tu as appris à utiliser la balance du marché pour équilibrer le haut et le bas sans jamais faire paniquer ton dénominateur.`],
            [`Hiérarchiser les croissances comparées`, `Tu as assisté à la grande course de vitesse sur l'autoroute à l'infini et tu as compris pourquoi l'exponentielle impose sa loi absolue, laissant les puissances et les logarithmes loin derrière elle.`],
            [`Vérifier la continuité et réparer les trous`, `Entre la barrière de péage du pont et l'ingénieur qui rebouche les nids-de-poule, tu sais exactement appliquer le Théorème de la Bijection pour prouver l'existence et l'unicité d'une solution, et prolonger une fonction par continuité là où elle s'était coupée.`],
            [`Poser les rails des asymptotes`, `Tu ne dessines plus tes graphiques au hasard en priant pour que ça ressemble à quelque chose. Tu sais repérer ces lignes de mire invisibles que la courbe va frôler sagement sans jamais les toucher.`],
          ],
        },
      ],
    },
    {
      id: 's3',
      titre: `🔗 Le Secret qui relie ce Tome au suivant`,
      blocs: [
        {
          type: 'text',
          id: 'b3',
          contenu: `Avant de tourner la page, Champion(ne), laisse-moi te révéler un truc qui va te faire sourire quand tu ouvriras le Tome 2.

Tu te souviens de ces limites qui reviennent tout le temps dans les sujets BAC ?
$$\\lim_{x \\to 0} \\dfrac{e^x - 1}{x} = 1 \\qquad \\text{et} \\qquad \\lim_{x \\to 1} \\dfrac{\\ln x}{x - 1} = 1$$

Ces deux résultats ne sont pas tombés du ciel. Ce sont en réalité les **nombres dérivés** de l'exponentielle en $0$ et du logarithme en $1$. Autrement dit, chaque fois que tu levais une forme indéterminée avec ces expressions, tu calculais sans le savoir une **dérivée déguisée**.

Dans le Tome 2, tu vas comprendre que la limite du taux d'accroissement $\\dfrac{f(a+h) - f(a)}{h}$ est la définition même de la dérivée. C'est le pont invisible entre nos deux tomes — et c'est pour ça que maîtriser les limites était la première étape obligatoire.`,
        },
        {
          type: 'figure',
          id: 'fig4',
          legende: `Le pont entre Tome 1 et Tome 2 — de la limite à la dérivée`,
          alt: `Le pont entre Tome 1 et Tome 2 — de la limite à la dérivée`,
        },
      ],
    },
    {
      id: 's4',
      titre: `⚠️ Le Piège Ultime avant le Tome 2`,
      blocs: [
        {
          type: 'text',
          id: 'b5',
          contenu: `Attention à ne pas faire l'inverse de ce qu'on a appris, Champion(ne). Voici la nuance que le correcteur du BAC adore tester pour piéger les étourdis :

**La dérivabilité implique la continuité** — si on peut tracer la tangente en un point, c'est qu'il n'y a pas de trou. Tu pourras le démontrer au Tome 2.

**Mais la continuité n'implique PAS la dérivabilité.**

Prends la fonction valeur absolue $f(x) = |x|$ ou la fonction racine $f(x) = \\sqrt{x}$. Elles sont parfaitement continues — tu peux tracer la courbe sans lever le crayon. Mais elles ont un **point anguleux** en $0$ (pour $|x|$) ou une **demi-tangente verticale** en $0$ (pour $\\sqrt{x}$). En ce point précis, la courbe « casse » ou « pique », et la dérivée n'existe pas.

Garde cette nuance en tête. Le correcteur la teste systématiquement.`,
        },
      ],
    },
    {
      id: 's5',
      titre: `🚀 LA SUITE — Tome 2 : Les Dérivées`,
      blocs: [
        {
          type: 'text',
          id: 'b6',
          contenu: `Mais ne t'arrête pas en si bon chemin. Tout ce qu'on vient de bâtir ensemble, c'est la fondation solide de la maison.

Maintenant, tu sais exactement *où* ta fonction se dirige. Tu as tracé sa carte de voyage. Dans le Tome 2, on passe à la vitesse supérieure. On ne va plus seulement se demander quelle est sa destination, mais **à quelle vitesse** elle s'y rend à chaque instant de son trajet. C'est tout le secret du taux de variation instantané et de la dérivation.

Une fois que tu auras ce deuxième bloc en main, plus aucune fonction de Terminale D ne pourra te faire plier le genou.`,
        },
        {
          type: 'text',
          id: 'b7',
          contenu: `**Marius Dion — Ton Grand Frère**

*P.S. : Rappelle-toi notre deal secret du début. On n'est pas là pour gratter un petit 10/20 timide le jour J pour juste assurer la moyenne. On est là pour dompter le sujet, s'installer confortablement devant sa table d'examen et dicter nos règles au correcteur. Repose-toi un peu, prends un verre d'eau, et quand tu es prêt(e), rejoins-moi pour le Tome 2. On va gâter le coin !*`,
        },
      ],
    },
  ],
};
