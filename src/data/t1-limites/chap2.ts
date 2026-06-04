// src/data/t1-limites/chap2.ts
// CHAPITRE 1 — LES BASES SOLIDES — ENRICHI
// Tome 1 : Les Limites · Collection Les Clés Maths
// ⚠️ Chapitre gratuit — accessible sans achat
// Enrichissements : Accroches · Transitions · Récaps · Mini-exercices · Dialogues vivants · Micro-motivations · Analogies développées

import { Chapitre } from '../../types/course';

export const chapitre1: Chapitre = {
  id: 't1-chap2',
  titre: 'Chapitre 1 : Les Bases Solides',
  duree: 30,
  niveau: 'BASE',
  xpGain: 50,
  gratuit: true,
  objectifs: [
    'Maîtriser les opérations sur les fractions sans paniquer',
    'Comprendre les règles des puissances et exposants',
    'Saisir intuitivement ce que signifie "tendre vers" une valeur',
    'Lire et interpréter le vocabulaire des limites',
  ],
  sections: [
    {
      id: 's1',
      titre: 'Introduction — Pourquoi revenir en arrière ?',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b0-accroche',
          contenu:
            "Champion(ne), voici le chapitre que beaucoup d'élèves sautent — et c'est exactement pour ça qu'ils bloquent en plein calcul. Toi, tu vas pas faire cette erreur.",
        },
        {
          type: 'text',
          id: 'b1',
          contenu:
            "\"C'était un mercredi matin au 'Cacao'. On avait devoir de maths. Le prof écrit au tableau : 'Calculer la limite de \\( \\frac{x^2-4}{x-2} \\) quand x tend vers 2.' La moitié de la classe a directement remplacé x par 2 et écrit '\\( \\frac{0}{0} = 0 \\)'. FAUX ! L'autre moitié a paniqué en voyant \\( \\frac{0}{0} \\) et a laissé blanc. Résultat ? Sur 30 élèves, seulement 3 ont eu juste. Pourquoi ? Parce que PERSONNE n'avait compris qu'il fallait FACTORISER d'abord. Ce jour-là, j'ai compris un truc important : en maths, ce qui te bloque c'est rarement la notion elle-même. C'est souvent un OUTIL de base que tu ne maîtrises pas (ici, la factorisation). C'est pour ça qu'on va d'abord réviser les outils. Pas pour perdre du temps, mais pour GAGNER du temps après.\"",
        },
        {
          type: 'text',
          id: 'b2',
          contenu:
            "Champion(ne), avant de plonger dans les limites, on va d'abord poser des fondations solides. Tu sais, c'est comme quand tu veux construire une maison à deux étages : si la fondation n'est pas bonne, tout va s'écrouler dès la première pluie ! Alors prends ton temps ici. Ne saute aucune partie, même si tu te dis \"ça je connais déjà\". C'est souvent dans ces \"petits détails\" que se cachent les erreurs à éviter au BAC.",
        },
        // ── Enrichissement 6 : Dialogue vivant — vraie question d'élève ──
        {
          type: 'dialogue',
          id: 'b3',
          pf: "Vieux père, avec tout le respect, on est en Terminale. Pourquoi on perd le temps sur les fractions de la Seconde alors que les limites là me compliquent déjà la vie ? Franchement j'ai l'impression qu'on recule.",
          gf: "Bonne question — et c'est exactement cette logique qui fait rater les devoirs ! Laisse-moi te montrer EXACTEMENT pourquoi avec des exemples concrets de limites.",
        },
        {
          type: 'text',
          id: 'b4',
          contenu: "EXEMPLE 1 — Limite classique au BAC : Calculer \\( \\lim_{x \\to 0} \\left(\\frac{1}{x} + 2\\right) \\)\n\nSi tu ne sais pas mettre au même dénominateur, tu es BLOQUÉ dès le départ !\n\nRegarde : \\( \\frac{1}{x} + 2 = ? \\) La bonne réponse : \\( \\frac{1}{x} + \\frac{2x}{x} = \\frac{1+2x}{x} \\)\n\nMaintenant tu peux analyser la limite. Sans fractions, impossible !",
        },
        {
          type: 'math',
          id: 'b5',
          formule: '\\lim_{x \\to 0} \\left(\\frac{1}{x} + 2\\right)',
          explication: 'Si tu ne maîtrises pas les fractions, tu es bloqué dès cette étape.',
        },
        {
          type: 'text',
          id: 'b6',
          contenu: "EXEMPLE 2 — Forme indéterminée : Calculer \\( \\lim_{x \\to +\\infty} \\left(2 - \\frac{1}{x}\\right)\\left(3 + \\frac{1}{x}\\right) \\)\n\nPour lever cette forme \\( \\frac{\\infty}{\\infty} \\), tu DOIS savoir que :\n\\( 2 - \\frac{1}{x} = \\frac{2x-1}{x} \\)  et  \\( 3 + \\frac{1}{x} = \\frac{3x+1}{x} \\)\nEnsuite tu simplifies les x. Encore des fractions !",
        },
        {
          type: 'text',
          id: 'b7',
          contenu: "EXEMPLE 3 — Division de limites : Si tu ne sais pas que \\( \\frac{1}{\\frac{1}{x}} = x \\), tu vas galérer sur BEAUCOUP de limites.",
        },
        // ── Enrichissement 6 : Dialogue vivant — réponse avec validation + note positive ──
        {
          type: 'dialogue',
          id: 'b8',
          pf: "D'accord, je comprends maintenant. Les fractions reviennent partout dans les limites !",
          gf: "EXACTEMENT ! Tu viens de faire le lien que beaucoup d'élèves ne font jamais. Les limites ne sont PAS de nouvelles maths. Ce sont les MÊMES outils (fractions, puissances, racines) utilisés différemment. Si tes outils de base sont rouillés, comment tu veux construire une maison solide ? On va affûter tes outils en 15 minutes. Après, tu vas VOLER sur les limites. Promis !",
        },
        {
          type: 'dialogue',
          id: 'b9',
          pf: "Ah d'accord ! Maintenant je comprends pourquoi c'est important. Allons-y !",
          gf: "C'est ça même ! On y va. Champion(ne), on commence à construire.",
        },
        // ── Enrichissement 2 : Transition ──
        {
          type: 'text',
          id: 'transition-s1-s2',
          contenu:
            "Tu sais POURQUOI on révise les bases. Maintenant on passe aux outils eux-mêmes. Premier outil : les fractions — le « cauchemar » que tu vas transformer en arme secrète.",
        },
      ],
    },
    {
      id: 's2',
      titre: '1.1 Ce qu\'il te faut absolument savoir avant',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b10-accroche',
          contenu:
            "Beaucoup d'élèves pensent que c'est acquis, mais c'est ici que se cachent la plupart des points perdus. On va être rapides mais chirurgicaux — euh, précis et efficaces !",
        },
        {
          type: 'text',
          id: 'b10',
          contenu:
            "Écoute, je ne vais pas te mentir : les limites, ce n'est pas de la sorcellerie. MAIS, il y a quelques outils de base (niveau 3ème et Seconde) que tu dois maîtriser les yeux fermés. Si tu beugues là-dessus, tu vas galérer pour rien.",
        },
        // ── Enrichissement 2 : Transition ──
        {
          type: 'text',
          id: 'transition-s2-s3',
          contenu:
            "Les fractions — on y va. C'est le premier outil, et aussi le premier que la plupart des élèves pensent maîtriser... à tort.",
        },
      ],
    },
    {
      id: 's3',
      titre: 'A. Les opérations sur les fractions (Le cauchemar des élèves)',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b11-accroche',
          contenu:
            "C'est normal si tu as l'impression de déjà connaître. Lis quand même — je te garantis qu'il y a au moins une chose que tu avais pas vue comme ça.",
        },
        {
          type: 'text',
          id: 'b11',
          contenu:
            "Oui, je sais, tu vas me dire \"Grand frère, on a fait ça en 6ème !\". Mais crois-moi, beaucoup d'erreurs dans les calculs de limites viennent d'une mauvaise gestion des fractions. On révise express :",
        },
        // ── Enrichissement 5 : Analogie ivoirienne développée ──
        {
          type: 'analogy',
          id: 'analogy-fractions',
          titre: "Le marché d'Adjamé et les unités de mesure",
          contenu: `Tu es au marché d'Adjamé et tu veux acheter à la fois 1 tas d'ignames et 2 tas d'attiéké. 
Le problème : la vendeuse d'ignames compte en "tas de 500g" et la vendeuse d'attiéké compte en "tas de 200g". 
Tu ne peux pas additionner directement 1 tas + 2 tas si les tas ne font pas le même poids ! 
Tu dois d'abord tout convertir en kilogrammes (le dénominateur commun) avant de faire ta somme — exactement comme au marché, tout le monde doit parler la même unité.`,
          conceptMath: 'Pour additionner des fractions, il faut obligatoirement un dénominateur commun. \\( \\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd} \\).',
        },
        {
          type: 'tip',
          id: 'b12',
          titre: 'Additionner (Le Piège) — MÊME DÉNOMINATEUR obligatoire',
          contenu: [
            "C'est comme au marché : tu ne peux pas additionner des ignames et des bananes. Il faut tout convertir en \"kilos\" ou en \"tas\".",
            "Formule : \\( \\frac{a}{b} + \\frac{c}{d} = \\frac{ad+bc}{bd} \\)",
            "Exemple : \\( \\frac{1}{x} + 2 = \\frac{1}{x} + \\frac{2x}{x} = \\frac{1+2x}{x} \\)",
          ],
        },
        {
          type: 'math',
          id: 'b13',
          formule: '\\frac{a}{b} + \\frac{c}{d} = \\frac{ad+bc}{bd}',
          explication: 'Réduction au même dénominateur — indispensable pour les limites',
        },
        {
          type: 'tip',
          id: 'b14',
          titre: 'Multiplier (Le Facile) — Haut avec Haut, Bas avec Bas',
          contenu: [
            "Formule : \\( \\frac{a}{b} \\times \\frac{c}{d} = \\frac{a\\times c}{b\\times d} \\)",
          ],
        },
        {
          type: 'math',
          id: 'b15',
          formule: '\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}',
        },
        {
          type: 'tip',
          id: 'b16',
          titre: "Diviser (L'Astuce) — Multiplier par l'inverse",
          contenu: [
            "Diviser par une fraction, c'est multiplier par son inverse. On retourne la fraction du bas !",
            "Formule : \\( \\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} \\)",
            "Exemple classique en limites : \\( \\frac{1}{\\frac{1}{x}} = 1 \\times \\frac{x}{1} = x \\)",
          ],
        },
        {
          type: 'math',
          id: 'b17',
          formule: '\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}',
          explication: 'Exemple classique en limites : 1/(1/x) = x',
        },
        // ── Enrichissement 4 : Mini-exercice "À toi de jouer" ──
        {
          type: 'exercise',
          id: 'micro-ex-fractions',
          niveau: 'BASE',
          enonce: '⚡ À toi de jouer ! Mets au même dénominateur : \\( \\frac{2}{x} + 3 \\)',
          etapes: [
            'Étape 1 : \\( 3 = \\frac{3x}{x} \\) (on convertit le 3 avec le même dénominateur)',
            'Étape 2 : \\( \\frac{2}{x} + \\frac{3x}{x} = \\frac{2 + 3x}{x} \\)',
          ],
          reponse: '\\( \\frac{2 + 3x}{x} \\)',
          conseil: 'C\'est le réflexe numéro 1 avec les fractions — même dénominateur toujours !',
        },
        // ── Enrichissement 3 : Récap intermédiaire ──
        {
          type: 'recap',
          id: 'recap-fractions',
          titre: 'Ce qu\'on vient de voir — Les fractions',
          contenu: [
            '✅ Additionner → même dénominateur obligatoire',
            '✅ Multiplier → haut × haut, bas × bas',
            '✅ Diviser → multiplier par l\'inverse',
          ],
        },
        // ── Enrichissement 2 : Transition ──
        {
          type: 'text',
          id: 'transition-s3-s4',
          contenu:
            "Les fractions, c'est réglé. Maintenant le deuxième outil : les puissances. C'est elles qui décident qui est le plus fort dans une limite à l'infini — et c'est là que beaucoup d'élèves se font surprendre.",
        },
      ],
    },
    {
      id: 's4',
      titre: 'B. Les puissances et exposants (Qui est le plus fort ?)',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b18-accroche',
          contenu:
            "Champion(ne), les puissances vont te servir à chaque limite à l'infini. Si tu comprends ça ici, tu as déjà un avantage sur 70% de la classe.",
        },
        // ── Enrichissement 5 : Analogie ivoirienne développée ──
        {
          type: 'analogy',
          id: 'b18',
          titre: 'Les deux lutteurs',
          contenu: `Imagine une compétition de lutte à Yopougon entre deux champions : Konan (qui représente \\( x^2 \\)) et Séri (qui représente \\( x^3 \\)). 
Au départ, quand x est petit (\\( x = 2 \\)), Konan a 4 points et Séri a 8 — Séri est déjà plus fort. 
Mais quand x devient très grand (\\( x = 1000 \\)), Konan a 1 000 000 points et Séri a 1 000 000 000 — Séri écrase littéralement Konan ! 
Plus x grandit, plus l'écart entre eux se creuse — et ça, c'est exactement comment fonctionnent les puissances dans les limites à l'infini.`,
          conceptMath:
            "Dans une limite à l'infini, la puissance la plus grande domine. \\( x^3 \\) écrase \\( x^2 \\) quand \\( x \\to +\\infty \\).",
        },
        {
          type: 'table',
          id: 'b19',
          titre: 'Règles de survie à connaître par cœur',
          headers: ['Règle', 'Formule et exemple'],
          rows: [
            ['Multiplication', '\\( x^n \\times x^m = x^{n+m} \\)  →  \\( x^2 \\times x^3 = x^5 \\) (On additionne les forces)'],
            ['Division', '\\( \\frac{x^n}{x^m} = x^{n-m} \\)  →  \\( \\frac{x^5}{x^2} = x^3 \\) (On soustrait les forces)'],
            ['Puissance', '\\( (x^n)^m = x^{n \\times m} \\)  →  \\( (x^2)^3 = x^6 \\) (On multiplie les forces)'],
            ['Inverse', '\\( \\frac{1}{x^n} = x^{-n} \\)  →  \\( x^{-2} = \\frac{1}{x^2} \\) (Quand tu montes, le signe change)'],
          ],
        },
        // ── Enrichissement 3 : Récap intermédiaire ──
        {
          type: 'recap',
          id: 'recap-puissances',
          titre: 'Ce qu\'on vient de voir — Les puissances',
          contenu: [
            '✅ Plus la puissance est grande, plus le terme domine à l\'infini',
            '✅ Multiplication → additionner les exposants',
            '✅ Division → soustraire les exposants',
          ],
        },
        // ── Enrichissement 2 : Transition ──
        {
          type: 'text',
          id: 'transition-s4-s5',
          contenu:
            "Tu as maintenant les deux outils clés. Maintenant on passe au cœur du sujet : qu'est-ce que ça veut vraiment dire \"se rapprocher\" d'un nombre ? C'est là que la notion de limite prend tout son sens.",
        },
      ],
    },
    {
      id: 's5',
      titre: 'C. La notion de "se rapprocher" d\'un nombre',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b20-accroche',
          contenu:
            "C'est LE moment du chapitre. Ce que tu vas comprendre ici, c'est ce que la plupart des élèves n'ont jamais vraiment saisi — même ceux qui calculent des limites depuis des mois.",
        },
        {
          type: 'text',
          id: 'b20',
          contenu:
            "Bon, là on arrive au cœur du sujet. Une limite, c'est TOUJOURS une histoire de mouvement.",
        },
        // ── Enrichissement 5 : Analogie ivoirienne développée (4 phrases minimum) ──
        {
          type: 'analogy',
          id: 'b21',
          titre: "L'Analogie du Gbaka — Adjamé vers Grand-Bassam",
          contenu:
            "Tu prends un gbaka d'Adjamé vers Grand-Bassam. \\( x \\) = Le TEMPS écoulé (en minutes). \\( f(x) \\) = La DISTANCE parcourue depuis Adjamé (km).\n\nSITUATION 1 — Tu vas à une destination précise : Le gbaka roule vers Grand-Bassam (situé à 40 km). \\( x = 0 \\) min → \\( f(0) = 0 \\) km (départ d'Adjamé). \\( x = 10 \\) min → \\( f(10) = 10 \\) km (tu es à Marcory). \\( x = 20 \\) min → \\( f(20) = 20 \\) km (tu es à Treichville). \\( x = 30 \\) min → \\( f(30) = 30 \\) km (tu approches de Bassam). \\( x = 40 \\) min → \\( f(40) = 40 \\) km (tu arrives à Bassam).\n\nSITUATION 2 — Le gbaka roule sans s'arrêter : Maintenant, imagine que le gbaka roule indéfiniment (\\( x \\to +\\infty \\)). Si la route finit à Bassam (40 km max) → \\( f(x) \\) tend vers 40 (limite finie). Si la route continue sans fin → \\( f(x) \\) tend vers \\( +\\infty \\) (limite infinie).",
          conceptMath:
            "Limite = Prédire où tu vas ABOUTIR. \\( \\lim_{x \\to 40} f(x) = 40 \\) km. C'est ça une LIMITE : PRÉDIRE vers quelle valeur tu tends.",
        },
        {
          type: 'recap',
          id: 'b22',
          titre: 'Ce qu\'il faut retenir',
          contenu: [
            '\\( x \\) = Ce qui VARIE (le temps, la variable)',
            '\\( f(x) \\) = Ce qu\'on OBSERVE (distance, résultat)',
            '\\( \\lim f(x) \\) = Prédire le COMPORTEMENT de \\( f(x) \\) quand \\( x \\) s\'approche de \\( a \\)',
          ],
        },
        {
          type: 'text',
          id: 'b23',
          contenu:
            "EXEMPLE MATHÉMATIQUE CONCRET : Fonction \\( f(x) = 2x + 5 \\). Question : \\( \\lim_{x \\to 10} f(x) = ? \\)\n\nInterprétation gbaka : \\( x = 10 \\) min (temps). \\( f(10) = 2(10) + 5 = 25 \\) km (distance).\n\nRéponse : Quand \\( x \\) tend vers 10, \\( f(x) \\) tend vers 25. C'est ça une limite : savoir où tu VAS !",
        },
        {
          type: 'math',
          id: 'b24',
          formule: '\\lim_{x \\to 10} f(x) = 25',
          explication: 'Quand x tend vers 10, f(x) = 2x + 5 tend vers 25.',
        },
        // ── Enrichissement 4 : Mini-exercice "À toi de jouer" ──
        {
          type: 'exercise',
          id: 'micro-ex-limite',
          niveau: 'BASE',
          enonce: '⚡ À toi de jouer ! Calcule : \\( \\lim_{x \\to 5} (3x + 1) \\)',
          etapes: [
            'Étape 1 : Substitue directement \\( x = 5 \\)',
            'Étape 2 : \\( 3(5) + 1 = 15 + 1 = 16 \\)',
          ],
          reponse: '16',
          conseil: 'C\'est la substitution directe — le réflexe n°1. Quand ça donne un nombre direct, c\'est terminé !',
        },
        // ── Enrichissement 2 : Transition ──
        {
          type: 'text',
          id: 'transition-s5-s6',
          contenu:
            "Tu comprends maintenant ce que signifie 'tendre vers'. Maintenant il faut apprendre à lire les symboles correctement — et découvrir la règle d'or qui va guider TOUS tes calculs de limites.",
        },
      ],
    },
    {
      id: 's6',
      titre: 'D. Comment lire le symbole "tend vers" correctement',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b25-accroche',
          contenu:
            "Ce symbole → semble simple. Mais sa vraie signification est plus fine qu'on ne le croit. C'est ce que la plupart des profs n'expliquent pas assez.",
        },
        {
          type: 'text',
          id: 'b25',
          contenu:
            "Ce symbole \\( \\to \\) est une flèche. Elle veut dire \"tend vers\".\n- \\( x \\to 2 \\) se lit : \"x tend vers 2\" (x se colle au 2).\n- \\( x \\to +\\infty \\) se lit : \"x tend vers plus l'infini\" (x part très loin à droite).",
        },
        {
          type: 'table',
          id: 'b26',
          titre: 'Tableau des notations officielles',
          headers: ['Notation', 'Signification'],
          rows: [
            ['\\( x \\to 2 \\)', 'x se rapproche de 2 (sans forcément y toucher)'],
            ['\\( x \\to +\\infty \\)', 'x grandit sans limite (devient très grand)'],
            ['\\( x \\to 2^+ \\)', 'x s\'approche de 2 par la DROITE (2,001 ; 2,0001...)'],
            ['\\( x \\to 2^- \\)', 'x s\'approche de 2 par la GAUCHE (1,999 ; 1,9999...)'],
          ],
        },
        // ── Enrichissement 6 : Dialogue vivant ──
        {
          type: 'dialogue',
          id: 'b27',
          pf: "Vieux père, quand je vois 'lim f(x) quand x→2', est-ce que je remplace simplement x par 2 et c'est fini ? Parce que jusqu'ici je faisais ça et parfois ça marchait, parfois non.",
          gf: "Bonne observation — et c'est exactement cette incohérence qui va disparaître maintenant. Je vais te donner la méthode PRÉCISE en 2 étapes qui explique exactement quand ça marche et quand ça bloque.",
        },
        {
          type: 'rule',
          id: 'b28',
          titre: "Règle d'Or — La méthode en 2 étapes",
          contenu: [
            '1. REMPLACE toujours en premier — C\'est le réflexe numéro 1 : remplacer !',
            '2. Si ça marche → C\'EST FINI !',
            '3. Si ça donne \\( \\frac{0}{0} \\) ou \\( \\frac{\\infty}{\\infty} \\) ou \\( \\infty - \\infty \\) ou \\( 0 \\times \\infty \\) → Transforme puis remplace à nouveau',
          ],
        },
        // ── Enrichissement 6 : Dialogue — validation + note positive ──
        {
          type: 'dialogue',
          id: 'b29',
          pf: "Ah ! Donc je commence TOUJOURS par remplacer, et si ça bloque là je transforme ?",
          gf: "EXACTEMENT ! Tu as tout compris, Champion(ne). La substitution directe, c'est le réflexe numéro 1. Si ça passe pas, là tu sors tes techniques (factorisation, conjugué, etc.). Mais on teste le plus simple d'abord ! Cette règle va te faire gagner du temps à chaque devoir.",
        },
        {
          type: 'dialogue',
          id: 'b30',
          pf: "Parfait ! Ça clarifie tout !",
          gf: "On avance, Champion(ne) ! La prochaine section, on voit le vocabulaire complet — et tu vas voir que même les mots compliqués des profs deviennent simples quand on les traduit.",
        },
        {
          type: 'warning',
          id: 'b31',
          titre: 'ATTENTION MON PETIT(E) !',
          contenu: [
            "Quand on écrit \\( x \\to 2 \\), ça ne veut PAS dire que \\( x = 2 \\).",
            "Non ! Ça veut dire que \\( x \\) vaut 1,9999... ou 2,0001... Il est voisin, mais il n'est pas forcément égal.",
            "C'est toute la subtilité des limites.",
          ],
        },
        // ── Enrichissement 2 : Transition ──
        {
          type: 'text',
          id: 'transition-s6-s7',
          contenu:
            "Tu as la règle d'or. Maintenant le dernier morceau de ce chapitre : le vocabulaire. Parce que comprendre les mots du prof, c'est déjà la moitié du travail.",
        },
      ],
    },
    {
      id: 's7',
      titre: '1.2 Le vocabulaire des limites expliqué simplement',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b32-accroche',
          contenu:
            "C'est normal si certains mots te semblaient abstraits. Dans 2 minutes, tu vas pouvoir lire un énoncé de BAC et comprendre exactement ce qu'on te demande.",
        },
        {
          type: 'text',
          id: 'b32',
          contenu:
            "Les profs adorent les mots compliqués. On va traduire ça en langage de quartier pour que ce soit clair dans ta tête.",
        },
        {
          type: 'table',
          id: 'b33',
          titre: 'Dictionnaire des limites — version Grand Frère',
          headers: ['Le prof dit...', 'Ça veut dire en vrai...'],
          rows: [
            ['\\( \\lim f(x) \\) quand \\( x \\to a \\)', 'La valeur vers laquelle tend \\( f(x) \\) quand \\( x \\) s\'approche de \\( a \\)'],
            ['"f(x) tend vers L" s\'écrit \\( f(x) \\to L \\)', 'Les résultats de tes calculs se stabilisent autour du nombre L. C\'est le terminus.'],
            ['Forme indéterminée', 'Un résultat ambigu (\\( \\frac{0}{0} \\) ou \\( \\frac{\\infty}{\\infty} \\)) qu\'il faut lever avec une technique'],
            ['Asymptote verticale \\( x = a \\)', 'Ligne droite DEBOUT : \\( f(x) \\) explose vers \\( \\pm\\infty \\) quand \\( x \\to a \\)'],
            ['Asymptote horizontale \\( y = b \\)', 'Ligne droite COUCHÉE : \\( f(x) \\) se calme vers \\( b \\) quand \\( x \\to \\pm\\infty \\)'],
            ['Limite à gauche / droite', 'On s\'approche de \\( a \\) par \\( x < a \\) (gauche) ou \\( x > a \\) (droite)'],
          ],
        },
        // ── Enrichissement 3 : Récap intermédiaire final ──
        {
          type: 'recap',
          id: 'recap-final-chap2',
          titre: '🚀 Récap du Chapitre 1 — Les Bases Solides',
          contenu: [
            '✅ Fractions → même dénominateur pour additionner, inverse pour diviser',
            '✅ Puissances → la plus grande domine à l\'infini',
            '✅ Limite → prédire la TENDANCE (pas forcément la valeur exacte)',
            '✅ Règle d\'or → substituer d\'abord, transformer si forme indéterminée',
          ],
        },
        // ── Enrichissement 7 : Micro-motivation finale ──
        {
          type: 'tip',
          id: 'motivation-final',
          titre: 'Grand Frère te dit',
          contenu: [
            'Ce que tu viens d\'apprendre ici, beaucoup d\'élèves ne le comprennent JAMAIS.',
            'Toi oui. Et ça va faire toute la différence au BAC.',
            'On continue — la suite, c\'est là que ça devient vraiment intéressant.',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      type: 'quiz',
      id: 'q1',
      question: 'Que vaut $\\frac{1}{x} + 2$ mis au même dénominateur ?',
      options: [
        '$\\frac{3}{x}$',
        '$\\frac{1+2x}{x}$',
        '$\\frac{2}{x}$',
        '$\\frac{1+2}{x}$',
      ],
      bonneReponse: 1,
      explication:
        '1/x + 2 = 1/x + 2x/x = (1+2x)/x. Pour additionner des fractions, il faut le même dénominateur. On convertit 2 en 2x/x.',
    },
    {
      type: 'quiz',
      id: 'q2',
      question: 'Que vaut $x^5 \\div x^2$ ?',
      options: [
        '$x^{10}$',
        '$x^3$',
        '$x^7$',
        '$x^{2.5}$',
      ],
      bonneReponse: 1,
      explication:
        'Pour diviser des puissances de même base, on soustrait les exposants : x⁵ ÷ x² = x⁵⁻² = x³.',
    },
    {
      type: 'quiz',
      id: 'q3',
      question: 'Dans l\'analogie du gbaka, que représente f(x) ?',
      options: [
        'Le temps écoulé',
        'La destination finale',
        'La distance parcourue depuis Adjamé',
        'La vitesse du gbaka',
      ],
      bonneReponse: 2,
      explication:
        'Dans l\'analogie : x = le temps (ce qui varie), f(x) = la distance parcourue (ce qu\'on observe). La limite, c\'est prédire où tu vas aboutir.',
    },
    {
      type: 'quiz',
      id: 'q4',
      question: 'Que signifie $x \\to 2^-$ ?',
      options: [
        'x est négatif',
        'x s\'approche de 2 par la droite',
        'x s\'approche de 2 par la gauche (1,999 ; 1,9999...)',
        'x est égal à -2',
      ],
      bonneReponse: 2,
      explication:
        'x → 2⁻ signifie que x s\'approche de 2 par la GAUCHE, c\'est-à-dire par des valeurs inférieures à 2 (1,999 ; 1,9999...). Le signe ⁻ indique "par en dessous".',
    },
    {
      type: 'quiz',
      id: 'q5',
      question: 'Tu calcules lim f(x) et tu obtiens 0/0. Que fais-tu ?',
      options: [
        'La limite est 0',
        'La limite n\'existe pas',
        'Tu conclus que la limite est 1',
        'C\'est une forme indéterminée — tu dois factoriser ou transformer',
      ],
      bonneReponse: 3,
      explication:
        '0/0 est une forme indéterminée — elle ne donne aucune information directe. Tu dois lever cette forme avec une technique (factorisation, conjugué, etc.) avant de conclure.',
    },
  ],
};

