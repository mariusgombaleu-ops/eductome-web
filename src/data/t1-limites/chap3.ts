// src/data/t1-limites/chap3.ts
// CHAPITRE 2 — COMPRENDRE LES LIMITES COMME UN PRO — ENRICHI
// Tome 1 : Les Limites · Collection Les Clés Maths
// Enrichissements : Accroches · Transitions · Récaps · Mini-exercices · Dialogues vivants · Micro-motivations · Analogies développées

import { Chapitre } from '../../types/course';

export const chapitre2: Chapitre = {
  id: 't1-chap3',
  titre: 'Chapitre 2 : Comprendre les Limites comme un Pro',
  duree: 35,
  niveau: 'BASE',
  xpGain: 60,
  gratuit: false,
  objectifs: [
    'Distinguer parfaitement image f(a) et limite lim f(x)',
    'Comprendre les 4 types de limites et leurs représentations graphiques',
    'Identifier les formes indéterminées et savoir quoi faire',
    'Ne plus jamais confondre asymptote verticale et horizontale',
  ],
  sections: [
    {
      id: 's1',
      titre: '2.1 C\'est quoi une limite ? L\'explication qu\'on te cache',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b0-accroche',
          contenu:
            "Champion(ne), si tu comprends ce chapitre — vraiment — tu as fait 60% du travail pour le BAC. Concentre-toi. Ce qu'on explique ici, c'est ce que beaucoup de profs eux-mêmes n'arrivent pas à expliquer clairement.",
        },
        {
          type: 'recap',
          id: 'b1',
          contenu: "Maintenant que tu as tes chaussures (les bases), on va apprendre à marcher. Si tu comprends ce chapitre, tu as fait 60% du travail pour le BAC.",
        },
        // ── Enrichissement 7 : Micro-motivation avant contenu dense ──
        {
          type: 'tip',
          id: 'motivation-debut',
          titre: 'Grand Frère te dit',
          contenu: [
            "Faut pas gnan pour ce qui suit.",
            "C'est normal de bloquer ici la première fois. Relis lentement — le déclic arrive.",
            "Image vs Limite : deux concepts que tu vas maîtriser pour toujours aujourd'hui.",
          ],
        },
        {
          type: 'rule',
          id: 'b2',
          titre: 'IMAGE = la valeur de f pile au point a',
          contenu: [
            'IMAGE \\( f(a) \\) = Regarder EXACTEMENT au point a',
            '\\( f(3) \\) = la valeur de f pile à \\( x = 3 \\)',
            'Si \\( x = 3 \\) est INTERDIT (trou, division par 0), alors \\( f(3) \\) N\'EXISTE PAS !',
            'Exemple : \\( f(x) = \\frac{x^2 - 9}{x - 3} \\). \\( f(3) = \\frac{9-9}{3-3} = \\frac{0}{0} \\to \\) INTERDIT !',
            'Conclusion : L\'image \\( f(3) \\) N\'EXISTE PAS.',
          ],
        },
        {
          type: 'rule',
          id: 'b3',
          titre: 'LIMITE = Regarder AUTOUR du point a',
          contenu: [
            'C\'est comme demander : "Si je m\'APPROCHE de \\( x = 3 \\), vers quelle valeur je tends ?"',
            'Pour \\( f(x) = \\frac{x^2 - 9}{x - 3} \\) : On peut SIMPLIFIER avant !',
            '\\( x^2 - 9 = (x - 3)(x + 3) \\)',
            'Donc \\( f(x) = \\frac{(x-3)(x+3)}{x-3} = x + 3 \\) (si \\( x \\neq 3 \\))',
            'En regardant AUTOUR de 3 : \\( f(2{,}9) = 5{,}9 \\) · \\( f(2{,}99) = 5{,}99 \\) · \\( f(3{,}001) = 6{,}001 \\)',
            'On voit clairement que \\( f(x) \\) s\'approche de 6 !',
            '\\( \\lim_{x \\to 3} f(x) = \\lim_{x \\to 3} (x+3) = 6 \\)',
          ],
        },
        {
          type: 'math',
          id: 'b4',
          formule: '\\lim_{x \\to 3} f(x) = 6 \\text{ même si } f(3) \\text{ n\'existe pas !}',
          explication: 'La limite existe (= 6) même si f(3) n\'existe pas !',
        },
        // ── Enrichissement 6 : Dialogue vivant ──
        {
          type: 'dialogue',
          id: 'b5',
          pf: "Vieux père, attends — la limite peut exister même si la fonction n'est pas définie au point ? Ça ça me perturbe un peu. Si f(3) n'existe pas, comment la limite peut valoir 6 ?",
          gf: "EXCELLENTE question — et c'est exactement la confusion que tous les élèves font au début. Pense à ça : si tu es dans un gbaka et que tu t'approches de la station de Grand-Bassam, tu peux prévoir que tu vas arriver à 40km. Mais ça ne veut pas dire que tu y es déjà ! La limite dit 'vers quoi tu tends', pas 'où tu es'. L'image f(3) = 'tu ES au point 3'. La limite = 'tu t'APPROCHES de 3 — vers où ça va ?' Deux choses différentes mais complémentaires !",
        },
        {
          type: 'rule',
          id: 'b6',
          titre: 'Règle d\'Or',
          contenu: [
            'La limite regarde le COMPORTEMENT AUTOUR du point, PAS le point lui-même !',
          ],
        },
        // ── Enrichissement 3 : Récap intermédiaire ──
        {
          type: 'recap',
          id: 'recap-image-limite',
          titre: 'Ce qu\'on vient de voir — Image vs Limite',
          contenu: [
            '✅ IMAGE f(a) = valeur exacte au point a (peut ne pas exister)',
            '✅ LIMITE = comportement autour du point (peut exister même si f(a) n\'existe pas)',
            '✅ Les deux sont complémentaires — ne pas les confondre !',
          ],
        },
        // ── Enrichissement 2 : Transition ──
        {
          type: 'recap',
          id: 'transition-s1-s2',
          contenu:
            "Tu viens de saisir la distinction fondamentale entre image et limite. Maintenant passons à une analogie ivoirienne qui va rendre ça encore plus concret — et tu ne l'oublieras plus jamais.",
        },
      ],
    },
    {
      id: 's2',
      titre: 'L\'Analogie du Marché d\'Adjamé',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b7-accroche',
          contenu:
            "Voilà une analogie que tu connais sans le savoir. Chaque fois que tu as négocié au marché, tu faisais des maths.",
        },
        // ── Enrichissement 5 : Analogie ivoirienne développée (4 phrases min) ──
        {
          type: 'analogy',
          id: 'b7',
          titre: 'La négociation au marché d\'Adjamé',
          contenu: `Tu veux acheter un sac d'attiéké au marché d'Adjamé et la négociation commence entre toi et la vendeuse.
Tour 1 : Vendeuse propose 500F, toi 200F → Écart = 300F.
Tour 2 : Vendeuse propose 450F, toi 250F → Écart = 200F.
Tour 3 : Vendeuse propose 425F, toi 275F → Écart = 150F.
Tour 4 : Vendeuse propose 400F, toi 300F → Écart = 100F.
Tour 5 : Vendeuse propose 375F, toi 325F → Écart = 50F.
Si vous continuez indéfiniment (\\( x \\to +\\infty \\)), vers quoi tend l'écart ? Vers 0 ! L'écart diminue, diminue, diminue... Mais attention — est-ce que l'écart devient VRAIMENT 0 ? Pas forcément ! Soit vous tombez d'accord à 350F (écart = 0 ✅), soit vous abandonnez sans accord (écart ≠ 0 ✗).
Et c'est exactement comme ça que fonctionne une limite : elle te dit la DIRECTION, la TENDANCE — vers où tu vas — mais pas si tu y arrives forcément.`,
          conceptMath: "Une limite te dit la TENDANCE (vers où tu vas), mais pas si tu y arrives vraiment ! C'est ça une limite : la DIRECTION, pas forcément l'arrivée.",
        },
        // ── Enrichissement 4 : Mini-exercice après analogie ──
        {
          type: 'exercise',
          id: 'micro-ex-tendance',
          niveau: 'BASE',
          enonce: '⚡ À toi de jouer ! Si \\( f(x) = 350 - \\frac{150}{x} \\) représente le prix proposé, que vaut \\( \\lim_{x \\to +\\infty} f(x) \\) ?',
          etapes: [
            'Étape 1 : Quand \\( x \\to +\\infty \\), \\( \\frac{150}{x} \\to 0 \\)',
            'Étape 2 : \\( f(x) \\to 350 - 0 = 350 \\)',
          ],
          reponse: '350F — le prix vers lequel les deux parties tendent',
          conseil: '\\( \\frac{k}{x} \\to 0 \\) quand \\( x \\to +\\infty \\) pour tout nombre k fixe. À retenir par cœur !',
        },
        // ── Enrichissement 2 : Transition ──
        {
          type: 'recap',
          id: 'transition-s2-s3',
          contenu:
            "Tu sais maintenant ce qu'est intuitivement une limite. Maintenant il faut connaître les 4 situations différentes qui se présentent dans les exercices — parce qu'au BAC, tu vas rencontrer chacune d'elles.",
        },
      ],
    },
    {
      id: 's3',
      titre: '2.2 Les 4 types de limites',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b8-accroche',
          contenu:
            "Champion(ne), au lieu de les apprendre par cœur, comprends juste la logique. Il te suffit de te poser 2 questions — et tu sauras toujours quelle situation tu as devant toi.",
        },
        {
          type: 'text',
          id: 'b8',
          contenu: "En Terminale, tu vas rencontrer différentes situations de limites. Au lieu de les apprendre par cœur, comprends la LOGIQUE derrière. Poses-toi toujours ces 2 questions : QUESTION 1 : Où va x ? · QUESTION 2 : Où va f(x) ?",
        },
        {
          type: 'table',
          id: 'b9',
          titre: 'Tableau complet des 4 situations',
          headers: ['x tend vers', 'f(x) tend vers', 'Interprétation'],
          rows: [
            ['Un nombre a (ex: x→3)', 'Un nombre L (ex: f→5)', 'CAS 1 : Substitution directe (le plus simple)'],
            ['Un nombre a (x→2)', '±∞', 'CAS 2 : Asymptote verticale x = a'],
            ['±∞ (ex: x→+∞)', 'Un nombre L (ex: f→0)', 'CAS 3 : Asymptote horizontale y = L'],
            ['±∞ (ex: x→+∞)', '±∞ (f→+∞)', 'CAS 4 : Croissance illimitée (polynômes, eˣ...)'],
          ],
        },
        {
          type: 'text',
          id: 'b10',
          titre: "A. Limite FINIE en un point FINI (Tout est calme)",
          contenu: "C'est le cas gentil. Tu remplaces x par le nombre, et tu trouves un résultat normal.\n\nExemple : \\( \\lim_{x \\to 1} (2x + 3) \\). Calcul : Je remplace x par 1. \\( 2(1) + 3 = 5 \\). La limite est 5.",
        },
        {
          type: 'figure',
          id: 'b11',
          src: '/figures/t1/chap3-fig1.png',
          legende: 'Graphe de f(x) = 2x + 3 — limite finie en x = 1, la courbe passe normalement par le point',
          alt: 'Droite f(x) = 2x + 3 avec point lim = 5 marqué en x = 1',
        },
        {
          type: 'text',
          id: 'b11-exercices',
          titre: '5 Exercices corrigés (Niveau Base)',
          contenu: "1. \\( \\lim_{x \\to 2} (x^2 - 1) = 2^2 - 1 = 3 \\)\n2. \\( \\lim_{x \\to 0} (e^x + x) = e^0 + 0 = 1 \\)\n3. \\( \\lim_{x \\to -1} \\frac{x+3}{2} = \\frac{-1+3}{2} = 1 \\)\n4. \\( \\lim_{x \\to \\pi} \\cos(x) = -1 \\)\n5. \\( \\lim_{x \\to 1} \\frac{x}{x+1} = \\frac{1}{2} \\)"
        },
        {
          type: 'text',
          id: 'b12',
          titre: "B. Limite INFINIE en un point FINI (L'Asymptote Verticale)",
          contenu: "Pourquoi ça \"explose\" ? C'est quand tu divises un nombre réel par quelque chose de minuscule (proche de 0).\n\nRègle d'or : Un nombre divisé par Zéro (qui n'est pas nul mais tout petit) donne l'Infini. \\( \\frac{1}{0} \\to \\infty \\)\n\nExemple concret : \\( \\lim_{x \\to 2} \\frac{1}{x-2} \\). Si x est un tout petit peu plus grand que 2 (ex: 2,001), alors x - 2 est un \"zéro positif\" \\( \\to \\frac{1}{0^+} = +\\infty \\)",
        },
        {
          type: 'figure',
          id: 'b13',
          src: '/figures/t1/chap3-fig2.png',
          legende: 'Graphe de f(x) = 1/(x-2) — asymptote verticale en x = 2 visible',
          alt: 'Hyperbole 1/(x-2) avec asymptote verticale x = 2 en pointillés rouges',
        },
        {
          type: 'text',
          id: 'b13-exercices',
          titre: '5 Exercices corrigés',
          contenu: "1. \\( \\lim_{x \\to 3^+} \\frac{2}{x-3} \\). Raisonnement : \\( x-3 \\to 0^+ \\) donc \\( \\frac{2}{0^+} = +\\infty \\)\n2. \\( \\lim_{x \\to 3^-} \\frac{2}{x-3} \\). Raisonnement : \\( x-3 \\to 0^- \\) (négatif) donc \\( \\frac{2}{0^-} = -\\infty \\)\n3. \\( \\lim_{x \\to 0} \\frac{-1}{x^2} \\). Raisonnement : \\( x^2 \\) est toujours \\( 0^+ \\). Donc \\( \\frac{-1}{0^+} = -\\infty \\)\n4. \\( \\lim_{x \\to 1^+} \\frac{x+1}{x-1} \\). Raisonnement : Haut \\( \\to 2 \\). Bas \\( \\to 0^+ \\). Résultat \\( +\\infty \\)\n5. \\( \\lim_{x \\to 0^+} \\ln(x) = -\\infty \\). (Limite usuelle à connaître par cœur)"
        },
        // ── Enrichissement 5 : Analogie ivoirienne développée ──
        {
          type: 'analogy',
          id: 'b14',
          titre: 'Partager 1 000F au Stade Houphouët-Boigny',
          contenu: `C'est la finale CAN 2023, Côte d'Ivoire vs Nigeria, au stade Félix Houphouët-Boigny d'Abidjan. Tu as gagné 1000F et tu veux le partager équitablement entre TOUS les spectateurs.
Voici ce qui se passe selon le nombre de personnes : 10 personnes → 100F/personne · 100 personnes → 10F/personne · 1000 personnes → 1F/personne · 10 000 personnes → 0,1F/personne.
Si 60 000 personnes remplissent le stade entier, chaque personne ne reçoit même plus 0,02F — c'est pratiquement rien.
Plus il y a de monde, moins chaque personne reçoit, jusqu'à ce que ça tende vers zéro — et c'est exactement le comportement de la limite \\( \\frac{1000}{n} \\) quand n devient immense.`,
          conceptMath: "\\( f(n) = \\frac{1000}{n} \\). Quand \\( n \\to +\\infty \\) (énormément de spectateurs) : \\( f(n) \\to 0 \\). Un nombre FIXE divisé par quelque chose de TRÈS GRAND donne quelque chose de TRÈS PETIT. Pour tout nombre k : \\( \\lim_{x \\to +\\infty} \\frac{k}{x} = 0 \\)",
        },
        {
          type: 'figure',
          id: 'b15',
          src: '/figures/t1/chap3-fig3.png',
          legende: 'Graphe de f(x) = 1/x — asymptote horizontale y = 0 visible à l\'infini',
          alt: 'Hyperbole f(x) = 1/x avec asymptote horizontale y = 0 et label HORIZON',
        },
        {
          type: 'text',
          id: 'b15-exercices',
          titre: '5 Exercices corrigés',
          contenu: "1. \\( \\lim_{x \\to +\\infty} \\left(3 + \\frac{1}{x}\\right) \\). Raisonnement : \\( \\frac{1}{x} \\to 0 \\). Résultat = 3.\n2. \\( \\lim_{x \\to -\\infty} \\frac{2}{x^2} \\). Raisonnement : 2 divisé par géant = 0.\n3. \\( \\lim_{x \\to +\\infty} (5 - e^{-x}) \\). Raisonnement : \\( e^{-x} \\to 0 \\). Résultat = 5.\n4. \\( \\lim_{x \\to +\\infty} \\frac{1}{x^3} = 0 \\)\n5. \\( \\lim_{x \\to +\\infty} \\frac{4}{x+1} = 0 \\)"
        },
        {
          type: 'text',
          id: 'b16',
          titre: "D. Limite INFINIE à l'INFINI (La Fusée)",
          contenu: "Là, il n'y a pas de frein. x grandit, et f(x) grandit aussi.\n\nL'image : Une fusée qui décolle. Plus le temps passe, plus elle va haut.\n\nExemple : \\( \\lim_{x \\to +\\infty} x^2 = +\\infty \\)",
        },
        {
          type: 'text',
          id: 'b16-exercices',
          titre: '5 Exercices corrigés',
          contenu: "1. \\( \\lim_{x \\to +\\infty} (x^3 + x) \\). Raisonnement : Grand + Grand = TRÈS GRAND (\\( +\\infty \\)).\n2. \\( \\lim_{x \\to -\\infty} x^2 \\). Raisonnement : Négatif géant au carré = Positif géant (\\( +\\infty \\)).\n3. \\( \\lim_{x \\to +\\infty} (e^x + 5) = +\\infty \\)\n4. \\( \\lim_{x \\to -\\infty} x^3 = -\\infty \\)\n5. \\( \\lim_{x \\to +\\infty} \\sqrt{x} = +\\infty \\)"
        },
        // ── Enrichissement 3 : Récap intermédiaire ──
        {
          type: 'recap',
          id: 'recap-4-types',
          titre: 'Les 4 types — version express',
          contenu: [
            '✅ CAS 1 : x→a, f(x)→L (un nombre) → Substitution directe',
            '✅ CAS 2 : x→a, f(x)→±∞ → Asymptote VERTICALE x = a',
            '✅ CAS 3 : x→±∞, f(x)→L (un nombre) → Asymptote HORIZONTALE y = L',
            '✅ CAS 4 : x→±∞, f(x)→±∞ → Croissance sans limite',
          ],
        },
        // ── Enrichissement 2 : Transition ──
        {
          type: 'text',
          id: 'transition-s3-s4',
          contenu:
            "Tu connais les 4 situations. Maintenant le point qui fait paniquer les élèves en salle : les asymptotes. Verticale ? Horizontale ? Je vais te donner une astuce qui les distingue en 2 secondes.",
        },
      ],
    },
    {
      id: 's4',
      titre: 'Asymptotes — Le mystère résolu',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b17-accroche',
          contenu:
            "Beaucoup d'élèves confondent encore asymptote verticale et horizontale en Terminale. Après ce bloc, toi jamais plus.",
        },
        // ── Enrichissement 6 : Dialogue vivant ──
        {
          type: 'dialogue',
          id: 'b17',
          pf: "Vieux père, j'ai vraiment peur de mélanger l'asymptote verticale et l'asymptote horizontale. Les deux parlent d'une ligne droite, je confonds tout ! Est-ce que c'est juste moi ou c'est un problème courant ?",
          gf: "C'est tellement courant que je vais te donner une astuce que j'aurais voulu qu'on me donne au 'Cacao' — et depuis, je n'ai plus jamais confondu. Écoute bien, c'est l'une des astuces les plus simples et les plus efficaces de tout ce tome :",
        },
        {
          type: 'tip',
          id: 'b18',
          titre: 'Astuce pour différencier les asymptotes',
          contenu: [
            'ASYMPTOTE VERTICALE = Ligne droite DEBOUT (x = a)',
            '→ Quand x s\'approche d\'un point précis, f(x) explose vers ±∞',
            '→ Image : C\'est un MUR VERTICAL. Tu ne peux PAS traverser le point x = a.',
            '',
            'ASYMPTOTE HORIZONTALE = Ligne droite COUCHÉE (y = b)',
            '→ Quand x part très loin (vers ±∞), f(x) se stabilise vers une valeur b',
            '→ Image : C\'est l\'HORIZON. Plus tu vas loin, plus tu t\'approches d\'une ligne horizontale.',
            '',
            'Pour différencier : Verticale → x = ... → en UN POINT précis',
            'Horizontale → y = ... → quand x part LOIN',
          ],
        },
        // ── Enrichissement 6 : Dialogue — validation + note positive ──
        {
          type: 'dialogue',
          id: 'b19',
          pf: "Ah ! Donc verticale c'est quand x a une valeur INTERDITE et que ça explose, et horizontale c'est quand x part à l'infini et que f(x) se calme ?",
          gf: "EXACTEMENT ! Tu as tout compris ! Pour résumer : Verticale → BOOM en un point (x = a). Horizontale → CALME au loin (y = b). Ne les mélange plus jamais. Et si tu hésites en devoir, rappelle-toi : verticale = debout, horizontale = couchée !",
        },
        {
          type: 'dialogue',
          id: 'b20',
          pf: "Merci vieux père ! C'est super clair maintenant !",
          gf: "On va gâter le coin, Champion(ne) ! Prochaine section — les pièges à éviter. Ceux qui font perdre des points même aux bons élèves.",
        },
        // ── Enrichissement 2 : Transition ──
        {
          type: 'text',
          id: 'transition-s4-s5',
          contenu:
            "Asymptotes maîtrisées. Maintenant les pièges à éviter — parce qu'au BAC, c'est souvent pas le calcul qui fait rater, c'est une erreur de raisonnement évitable.",
        },
      ],
    },
    {
      id: 's5',
      titre: '2.3 Les pièges à éviter',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b21-accroche',
          contenu:
            "Champion(ne), lis bien cette section. C'est là où 90% des copies perdent des points — et c'est là où toi tu vas les gagner.",
        },
        // ── Enrichissement 7 : Micro-motivation avant contenu difficile ──
        {
          type: 'tip',
          id: 'motivation-pieges',
          titre: 'Grand Frère te dit',
          contenu: [
            "Au 'Cacao', même les meilleurs ont buté là-dessus la première fois.",
            "Toi tu les connais d'avance. C'est ton avantage.",
            "Prends le temps de lire chaque piège. C'est là que tout se débloque.",
          ],
        },
        {
          type: 'warning',
          id: 'b22',
          titre: 'Piège 1 — Confondre +∞ et −∞',
          contenu: [
            'Quand \\( x \\to -\\infty \\), que vaut \\( x^2 \\)?',
            '\\( x \\) est un nombre négatif très grand (ex: -1000, -10 000...)',
            'Or \\( (-1000)^2 = 1 000 000 \\) → POSITIF !',
            'Donc : \\( \\lim_{x \\to -\\infty} x^2 = +\\infty \\) (le carré efface le signe)',
            'Par contre : \\( \\lim_{x \\to -\\infty} x^3 = -\\infty \\) (le cube conserve le signe)',
            'ATTENTION : On ne dit JAMAIS "\\( (-\\infty)^2 = +\\infty \\)" sur une copie.',
            'On dit "quand \\( x \\to -\\infty \\), \\( x^2 \\to +\\infty \\)".',
          ],
        },
        {
          type: 'warning',
          id: 'b23',
          titre: 'Piège 2 — Écrire ∞ − ∞ = 0 ou ∞/∞ = 1',
          contenu: [
            'Pourquoi c\'est indéterminé ? Imagine deux routes infinies. L\'une te tire vers \\( +\\infty \\), l\'autre vers \\( -\\infty \\). Qui gagne ? Ça dépend de laquelle est plus puissante.',
            '\\( \\lim_{x \\to +\\infty} (x^2 - x) \\) : \\( x^2 \\) gagne → résultat \\( +\\infty \\)',
            '\\( \\lim_{x \\to +\\infty} (x - x) \\) : égalité → résultat 0',
            '\\( \\lim_{x \\to +\\infty} (x - x^2) \\) : \\( x^2 \\) gagne → résultat \\( -\\infty \\)',
            'Le même \\( \\infty - \\infty \\) peut donner \\( +\\infty \\), 0, ou \\( -\\infty \\) selon les cas !',
            'Sur ta copie, écris toujours : "On obtient une forme indéterminée du type \\( \\infty - \\infty \\). On va lever cette indétermination en..."',
          ],
        },
        {
          type: 'warning',
          id: 'b24',
          titre: 'Piège 3 — Remplacer directement dans une forme indéterminée',
          contenu: [
            'Si tu obtiens \\( \\frac{0}{0} \\) ou \\( \\frac{\\infty}{\\infty} \\), STOP. Ne conclus pas 0 ou 1.',
            'C\'est une forme indéterminée : applique les techniques du Chapitre 3.',
          ],
        },
        {
          type: 'warning',
          id: 'b25',
          titre: 'Piège 4 — Oublier le signe du 0 dans le dénominateur',
          contenu: [
            'Si tu divises par un "zéro positif" (0⁺) → résultat +∞',
            'Si tu divises par un "zéro négatif" (0⁻) → résultat −∞',
            'Le signe change TOUT !',
          ],
        },
        {
          type: 'tip',
          id: 'b26',
          titre: 'Conseil du Grand Frère — Le GPS des limites',
          contenu: [
            'Lire une limite c\'est comme lire une carte GPS : tu dois d\'abord savoir OÙ VA x, puis déduire OÙ VA f(x).',
            'Si tu gardes ces 2 questions en tête, tu ne te perdras jamais !',
          ],
        },
        // ── Enrichissement 3 : Récap intermédiaire ──
        {
          type: 'recap',
          id: 'recap-pieges',
          titre: 'Les 4 pièges à éviter — version flash',
          contenu: [
            '✅ \\( x^2 \\) quand \\( x \\to -\\infty \\) donne \\( +\\infty \\) (pas \\( -\\infty \\) !)',
            '✅ \\( \\infty - \\infty \\) est indéterminé — ne jamais écrire = 0',
            '✅ \\( \\frac{0}{0} \\) est indéterminé — ne jamais conclure 0 ou 1',
            '✅ Le signe de 0 dans le dénominateur change le résultat',
          ],
        },
        // ── Enrichissement 2 : Transition ──
        {
          type: 'text',
          id: 'transition-s5-s6',
          contenu:
            "Tu connais les 4 pièges qui font perdre des points. Dernière section de ce chapitre : le cas où la limite n'existe tout simplement pas. C'est rare, mais ça tombe au BAC.",
        },
      ],
    },
    {
      id: 's6',
      titre: '2.4 Quand la limite n\'existe PAS',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b27-accroche',
          contenu:
            "Ça peut paraître bizarre qu'une limite puisse ne pas exister. Mais c'est un cas que le BAC aime poser — et les élèves qui ne le connaissent pas perdent des points inutilement.",
        },
        // ── Enrichissement 6 : Dialogue vivant ──
        {
          type: 'dialogue',
          id: 'b27',
          pf: "Vieux père, est-ce qu'une limite peut ne pas exister du tout ? J'ai toujours cru qu'on trouvait toujours quelque chose...",
          gf: "Oui, petit — et c'est souvent là que les élèves perdent des points en essayant de trouver une réponse là où il n'y en a pas. La règle est simple : si la limite à gauche et la limite à droite ne donnent pas le même résultat, la limite GLOBALE n'existe pas. Je t'explique avec un exemple.",
        },
        {
          type: 'text',
          id: 'b28',
          contenu: "Cas classique : limite à gauche ≠ limite à droite. Pour que \\( \\lim_{x \\to a} f(x) \\) existe, il faut que \\( f(x) \\) arrive au même endroit qu'on vienne de la gauche ou de la droite.\n\nExemple concret : \\( f(x) = \\frac{|x|}{x} \\). Si \\( x \\to 0^+ \\) (on s'approche de 0 par la droite, \\( x > 0 \\)) : \\( f(x) = \\frac{x}{x} = 1 \\). Si \\( x \\to 0^- \\) (on s'approche de 0 par la gauche, \\( x < 0 \\)) : \\( f(x) = \\frac{-x}{x} = -1 \\).\n\nLimite à droite = 1 ≠ Limite à gauche = −1. CONCLUSION : La limite en 0 N'EXISTE PAS.",
        },
        {
          type: 'rule',
          id: 'b29',
          titre: 'Règle d\'Or — Existence de la limite',
          contenu: [
            '\\( \\lim_{x \\to a} f(x) \\) existe ⟺ \\( \\lim_{x \\to a^+} f(x) = \\lim_{x \\to a^-} f(x) \\)',
            'Sur ta copie, si tu trouves \\( +\\infty \\) d\'un côté et \\( -\\infty \\) de l\'autre :',
            '"Les limites à gauche et à droite sont différentes, donc la limite en a n\'existe pas."',
          ],
        },
        // ── Enrichissement 3 : Récap final du chapitre ──
        {
          type: 'recap',
          id: 'recap-chap3-final',
          titre: '🚀 Récap du Chapitre 2 — Comprendre les Limites comme un Pro',
          contenu: [
            '✅ Image f(a) ≠ limite en a — deux choses différentes',
            '✅ 4 types de limites : substitution / asymptote verticale / asymptote horizontale / croissance',
            '✅ Asymptote verticale = debout (x = a) · Asymptote horizontale = couchée (y = b)',
            '✅ 4 pièges à éviter mémorisés',
            '✅ Limite n\'existe pas si lim à gauche ≠ lim à droite',
          ],
        },
        // ── Enrichissement 7 : Micro-motivation de fin ──
        {
          type: 'tip',
          id: 'motivation-fin-chap3',
          titre: 'Grand Frère te dit',
          contenu: [
            "Ce que tu viens de lire, beaucoup d'élèves ne le comprennent JAMAIS.",
            "Toi oui. Et ça va faire toute la différence le jour du BAC.",
            "Dans le prochain chapitre, on passe à l'action — comment calculer n'importe quelle limite avec une méthode en 5 étapes.",
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      type: 'quiz',
      id: 'q1',
      question: 'Pour $f(x) = \\frac{x^2-9}{x-3}$, que vaut $f(3)$ ?',
      options: [
        '6',
        '0',
        'N\'existe pas — division par zéro',
        '3',
      ],
      bonneReponse: 2,
      explication: 'f(3) = (9-9)/(3-3) = 0/0 → INTERDIT ! L\'image f(3) N\'EXISTE PAS. Par contre, la LIMITE en x=3 existe et vaut 6 (car on peut factoriser et simplifier).',
    },
    {
      type: 'quiz',
      id: 'q2',
      question: 'Que vaut $\\lim_{x \\to -\\infty} x^2$ ?',
      options: [
        '−∞',
        '+∞',
        '0',
        'N\'existe pas',
      ],
      bonneReponse: 1,
      explication: 'Quand x → −∞, x est un nombre négatif très grand. Mais x² = (nombre négatif)² = toujours positif ! (-1000)² = 1 000 000. Donc lim(x→−∞) x² = +∞.',
    },
    {
      type: 'quiz',
      id: 'q3',
      question: 'L\'asymptote horizontale y = b apparaît quand :',
      options: [
        'x s\'approche d\'un point précis et f(x) explose',
        'x tend vers ±∞ et f(x) se stabilise vers b',
        'f(x) n\'est pas définie en un point',
        'x² tend vers l\'infini',
      ],
      bonneReponse: 1,
      explication: 'L\'asymptote horizontale (ligne COUCHÉE) apparaît quand x part très loin (±∞) et que f(x) se calme vers une valeur fixe b. C\'est l\'HORIZON. Asymptote verticale (ligne DEBOUT) c\'est l\'inverse.',
    },
    {
      type: 'quiz',
      id: 'q4',
      question: 'Pour $f(x) = |x|/x$, la limite en $x = 0$ :',
      options: [
        'Vaut 1',
        'Vaut −1',
        'Vaut 0',
        'N\'existe pas — les limites à gauche et à droite sont différentes',
      ],
      bonneReponse: 3,
      explication: 'Limite à droite (x→0⁺) = 1. Limite à gauche (x→0⁻) = −1. Elles sont différentes → la limite en 0 N\'EXISTE PAS.',
    },
    {
      type: 'quiz',
      id: 'q5',
      question: 'Quelle est la "leçon mathématique" de l\'analogie du marché d\'Adjamé ?',
      options: [
        'Une limite donne toujours un résultat exact',
        'Une limite te dit la TENDANCE (direction), mais pas si tu y arrives vraiment',
        'Les limites sont toujours nulles',
        'Une limite n\'existe que si la fonction est définie au point',
      ],
      bonneReponse: 1,
      explication: 'L\'analogie du marché montre qu\'une limite indique la DIRECTION vers laquelle tu tends, mais pas nécessairement si tu arrives à cette valeur. C\'est la DIRECTION, pas forcément l\'arrivée !',
    },
  ],
};

