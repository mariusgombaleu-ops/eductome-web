// src/data/t1-limites/chap6.ts
// CHAPITRE 5 — EXERCICES TYPE BAC — ENRICHI
// Tome 1 : Les Limites · Collection Les Clés Maths
// Contenu extrait fidèlement du PDF LES LIMITES-final.pdf (pages 70-92)
// Enrichissements : Accroches · Transitions · Récaps · Dialogues vivants · Micro-motivations

import { Chapitre } from '../../types/course';

export const chapitre5: Chapitre = {
  id: 't1-chap6',
  titre: 'Chapitre 5 : Exercices Type BAC — La Salle d\'Entraînement',
  duree: 60,
  niveau: 'BAC',
  xpGain: 120,
  gratuit: false,
  objectifs: [
    'Résoudre les limites de niveau BASE sans hésitation',
    'Lever les formes indéterminées de niveau MOYEN avec méthode',
    'Maîtriser les exercices type BAC : asymptotes, continuité, gendarmes',
    'Travailler en conditions d\'examen (2 minutes par question)',
  ],
  sections: [
    {
      id: 's1',
      titre: 'Introduction — Monter sur le ring',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b0-accroche',
          contenu:
            "Champion(ne), c'est maintenant que tout ce qu'on a appris devient réel. Ce chapitre, c'est ta salle d'entraînement — les mêmes exercices que tu vas rencontrer le jour J.",
        },
        {
          type: 'text',
          id: 'b1',
          contenu: "\"BAC C 2019 au 'Cacao'. Épreuve de mathématiques. J'ouvre le sujet. Problème d'analyse (12 points) :\n\nQuestion 1a (2pts) : Calculer \\( \\lim_{x \\to 2} f(x) \\) sachant que \\( f(x) = \\frac{x^3-8}{x-2} \\)\n\nMon voisin a regardé ça et a écrit direct : '0/0 donc pas de limite ERREUR !' Il a perdu 2 points.\n\nMoi, j'ai appliqué le protocole :\n1. Je remplace → 0/0 (forme indéterminée)\n2. Je factorise → \\( x^3 - 8 = (x-2)(x^2+2x+4) \\)\n3. Je simplifie → \\( f(x) = x^2+2x+4 \\)\n4. Je recalcule → \\( (2)^2+2(2)+4 = 12 \\)\n\nRésultat : 12 ✅ (2 points gagné en 2 minutes)\n\nSur 12 points du problème, j'en avais déjà 4 en 5 minutes. Le reste a suivi naturellement. Résultat final : 11/12 sur l'analyse.\n\nCe jour-là, j'ai compris : le BAC ne cherche PAS à te piéger. Il vérifie que tu APPLIQUES les méthodes du cours.\"",
        },
        {
          type: 'text',
          id: 'b2',
          contenu: "On a vu la théorie, on a vu la méthode. Maintenant, on monte sur le ring. C'est ici que tu vas transformer tes connaissances en réflexes. J'ai classé les exercices par niveau de difficulté. Ne triche pas : essaie de les faire avant de regarder ma correction !",
        },
        // ── Enrichissement 6 : Dialogue vivant ──
        {
          type: 'dialogue',
          id: 'b3',
          pf: "Vieux père, quand je vois 'Niveau BAC' écrit sur un exercice, mes mains commencent à chauffer. J'ai peur de ne pas être à la hauteur.",
          gf: "C'est normal petit(e), c'est le trac du champion. Mais regarde bien : un exercice de BAC, c'est juste un assemblage de petits calculs qu'on a déjà faits ensemble. On va commencer par l'échauffement, et tu verras que tu as déjà les muscles pour gagner.",
        },
        // ── Enrichissement 2 : Transition ──
        {
          type: 'text',
          id: 'transition-s1-s2',
          contenu:
            "Allez, on commence par les exercices BASE — l'échauffement. Ces limites sont directes ou très simples. Si tu les rates, relis le Chapitre 1 avant de continuer.",
        },
      ],
    },
    {
      id: 's2',
      titre: '5.1 Exercices niveau BASE (Échauffement)',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b4-accroche',
          contenu:
            "Ici, on vérifie que tu sais démarrer la voiture. Des limites directes, des substitutions simples. Ton chrono : 2 minutes max par exercice.",
        },
        {
          type: 'exercise',
          id: 'base-ex1',
          niveau: 'BASE',
          enonce: 'Exercice 1 : Le polynôme docile — Calculer \\( \\lim_{x \\to -\\infty} (2x^3 - 5x + 1) \\)',
          etapes: [
            'Identification : Limite d\'un polynôme à l\'infini.',
            'Règle : À l\'infini, un polynôme se comporte comme son terme de plus haut degré (le Chef).',
            'Calcul : \\( \\lim_{x \\to -\\infty} (2x^3 - 5x + 1) = \\lim_{x \\to -\\infty} 2x^3 \\)',
            'On sait que \\( x^3 \\) en \\( -\\infty \\) donne \\( -\\infty \\). Multiplié par 2 (positif), ça reste \\( -\\infty \\).',
          ],
          reponse: '\\( -\\infty \\)',
          conseil: 'À l\'infini, un polynôme = son terme dominant. Le reste ne compte plus.',
          piege: 'Ne jamais appliquer cette règle si x tend vers un nombre fini (ex: x → 2). Cette astuce ne marche qu\'à l\'infini !',
        },
        {
          type: 'exercise',
          id: 'base-ex2',
          niveau: 'BASE',
          enonce: 'Exercice 2 : La fraction sans piège — Calculer \\( \\lim_{x \\to 3} \\frac{x^2+1}{x+2} \\)',
          etapes: [
            'Réflexe : Je remplace \\( x \\) par 3.',
            'Numérateur : \\( 3^2+1 = 10 \\)',
            'Dénominateur : \\( 3+2 = 5 \\)',
            'Calcul : \\( \\frac{10}{5} = 2 \\)',
          ],
          reponse: '2',
          conseil: 'Toujours tester le remplacement simple d\'abord ! Beaucoup cherchent une factorisation compliquée alors qu\'il n\'y a pas de Forme Indéterminée.',
          piege: 'Ne cherche pas une technique complexe quand la substitution directe marche !',
        },
        {
          type: 'exercise',
          id: 'base-ex3',
          niveau: 'BASE',
          enonce: 'Exercice 3 : L\'infini sur l\'infini — Calculer \\( \\lim_{x \\to +\\infty} \\frac{-3x^2+x}{x^2+4} \\)',
          etapes: [
            'Analyse : En haut → \\( -\\infty \\), en bas → \\( +\\infty \\). C\'est une F.I. \\( \\frac{\\infty}{\\infty} \\).',
            'Méthode : On garde les termes de plus haut degré (les chefs).',
            'Calcul : \\( \\lim_{x \\to +\\infty} \\frac{-3x^2}{x^2} \\) — on simplifie les \\( x^2 \\). Il reste -3.',
          ],
          reponse: '-3',
          conseil: 'Forme \\( \\frac{\\infty}{\\infty} \\) → Duel des Chefs. Garde uniquement les termes de plus haut degré.',
          piege: 'Oublier le signe "moins" du coefficient -3 !',
        },
        {
          type: 'exercise',
          id: 'base-ex4',
          niveau: 'BASE',
          enonce: 'Exercice 4 : Le mur vertical — Calculer \\( \\lim_{x \\to 2^+} \\frac{5}{x-2} \\)',
          etapes: [
            'Analyse : Haut = 5. Bas = 2-2 = 0. C\'est du type "Nombre sur Zéro". Ça va faire l\'infini.',
            'Signe du zéro : \\( x \\to 2^+ \\) signifie \\( x > 2 \\) (par exemple 2,01). Donc \\( x-2 \\) est positif \\( (0^+) \\).',
            'Calcul : \\( \\frac{5}{0^+} = +\\infty \\)',
          ],
          reponse: '\\( +\\infty \\)',
          conseil: 'Le signe du zéro détermine le signe de l\'infini. C\'est le tableau de signe du dénominateur qui te dit si c\'est 0⁺ ou 0⁻.',
          piege: 'Écrire = 0 ou ne pas préciser le signe de l\'infini. Diviser par "presque rien" donne "très gros".',
        },
        {
          type: 'exercise',
          id: 'base-ex5',
          niveau: 'BASE',
          enonce: 'Exercice 5 : La racine simple — Calculer \\( \\lim_{x \\to +\\infty} \\sqrt{x^2+3} \\)',
          etapes: [
            'Intérieur : Quand \\( x \\to +\\infty \\), alors \\( x^2+3 \\to +\\infty \\).',
            'Extérieur : La racine carrée de l\'infini, c\'est l\'infini.',
          ],
          reponse: '\\( +\\infty \\)',
          conseil: 'Racine carrée de l\'infini = infini (juste un peu plus lent). La racine ne "freine" pas assez pour donner un résultat fini.',
          piege: 'Penser que la racine "ralentit" l\'infini jusqu\'à un nombre fini. Non, ça monte toujours !',
        },
        // ── Enrichissement 3 : Récap intermédiaire ──
        {
          type: 'recap',
          id: 'recap-base',
          titre: 'Ce qu\'on vient de voir (Niveau BASE)',
          contenu: [
            '✅ Polynôme en \\( \\pm\\infty \\) → seul le terme dominant compte',
            '✅ Fraction sans FI → substitution directe',
            '✅ \\( \\frac{\\infty}{\\infty} \\) → Duel des Chefs',
            '✅ Nombre/zéro → analyser le signe du 0 (0⁺ ou 0⁻)',
            '✅ Racine de l\'infini = l\'infini',
          ],
        },
        // ── Enrichissement 2 : Transition ──
        {
          type: 'text',
          id: 'transition-s2-s3',
          contenu:
            "Tu as chaud ? Bien. On monte d'un cran. Les exercices MOYEN font intervenir les formes indéterminées — il faut ouvrir le capot et utiliser les outils du Chapitre 3.",
        },
      ],
    },
    {
      id: 's3',
      titre: '5.2 Exercices niveau MOYEN (Technique)',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b5-accroche',
          contenu:
            "Là le moteur tousse un peu. Les formes indéterminées entrent en jeu. Mais tu as les outils — utilise-les sans hésiter.",
        },
        // ── Enrichissement 7 : Micro-motivation avant exercice MOYEN ──
        {
          type: 'tip',
          id: 'motivation-moyen',
          titre: 'Grand Frère te dit',
          contenu: [
            "Faut pas gnan — tu as tout ce qu'il faut pour résoudre ces exercices.",
            "Ces types de calculs reviennent RÉGULIÈREMENT au BAC ivoirien.",
            "C'est normal de bloquer ici la première fois. Relis lentement — le déclic arrive.",
          ],
        },
        {
          type: 'exercise',
          id: 'moyen-ex1',
          niveau: 'MOYEN',
          enonce: 'Exercice 1 : Le classique 0/0 — Calculer \\( \\lim_{x \\to 1} \\frac{x^2-1}{x-1} \\)',
          etapes: [
            'Test : \\( \\frac{1-1}{1-1} = \\frac{0}{0} \\) → Forme Indéterminée (F.I.).',
            'Méthode : Factoriser. Je reconnais \\( a^2-b^2 \\) en haut. \\( x^2-1 = (x-1)(x+1) \\)',
            'Simplification : \\( \\frac{(x-1)(x+1)}{x-1} = x+1 \\)',
            'Recalcul : Je remplace maintenant \\( x \\) par 1 dans \\( x+1 \\). \\( 1+1=2 \\)',
          ],
          reponse: '2',
          conseil: 'Si ça s\'annule en 1, c\'est qu\'il y a obligatoirement \\( (x-1) \\) caché en haut ET en bas. Traque-le !',
        },
        {
          type: 'exercise',
          id: 'moyen-ex2',
          niveau: 'MOYEN',
          enonce: 'Exercice 2 : Bagarre des infinis avec Racine — Calculer \\( \\lim_{x \\to +\\infty} (\\sqrt{x+2} - \\sqrt{x}) \\)',
          etapes: [
            'Test : \\( +\\infty - \\infty \\) → F.I.',
            'Méthode : Expression conjuguée (car on a des racines qui se soustraient). On multiplie haut et bas par \\( (\\sqrt{x+2}+\\sqrt{x}) \\).',
            'En haut : \\( (x+2)-x = 2 \\)',
            'Bas : \\( \\sqrt{x+2}+\\sqrt{x} \\to +\\infty \\)',
            'Analyse : On a \\( \\frac{2}{+\\infty} \\). Un nombre divisé par l\'infini donne 0.',
          ],
          reponse: '0',
          conseil: 'Dès que tu vois des racines qui se SOUSTRAIENT, ton réflexe immédiat = CONJUGUÉ.',
        },
        {
          type: 'exercise',
          id: 'moyen-ex3',
          niveau: 'MOYEN',
          enonce: 'Exercice 3 : Polynôme vs Polynôme avec piège de signe — Calculer \\( \\lim_{x \\to -\\infty} \\frac{2x^3+1}{-x^2+x} \\)',
          etapes: [
            'Test : \\( \\frac{\\infty}{\\infty} \\) → F.I.',
            'Méthode : Termes de plus haut degré. \\( \\frac{2x^3}{-x^2} \\)',
            'Simplification : \\( \\frac{x^3}{x^2} = x \\). Donc il reste \\( -2x \\). (Attention au signe moins du bas !)',
            'Calcul final : Si \\( x \\to -\\infty \\), alors \\( -2x \\to -2 \\times (-\\infty) = +\\infty \\)',
          ],
          reponse: '\\( +\\infty \\)',
          conseil: 'Règle des signes : Moins × Moins = Plus. Ne rate pas ta mention pour ça.',
        },
        {
          type: 'exercise',
          id: 'moyen-ex4',
          niveau: 'MOYEN',
          enonce: 'Exercice 4 : Limite à gauche et à droite — Étudier la limite en 1 de \\( f(x) = \\frac{2x+1}{x-1} \\)',
          etapes: [
            'Haut : \\( 2(1)+1 = 3 \\)',
            'Bas : \\( 1-1 = 0 \\). C\'est une asymptote verticale, mais il faut le signe du zéro.',
            'Tableau de signe de \\( x-1 \\) :',
            'Si \\( x > 1 \\) (droite) : \\( x-1 \\) est positif \\( (0^+) \\). Limite = \\( \\frac{3}{0^+} = +\\infty \\)',
            'Si \\( x < 1 \\) (gauche) : \\( x-1 \\) est négatif \\( (0^-) \\). Limite = \\( \\frac{3}{0^-} = -\\infty \\)',
          ],
          reponse: 'Pas de limite unique. \\( +\\infty \\) à droite, \\( -\\infty \\) à gauche.',
          conseil: 'Toujours faire le tableau de signe du dénominateur pour savoir si l\'infini est positif ou négatif.',
        },
        {
          type: 'exercise',
          id: 'moyen-ex5',
          niveau: 'MOYEN',
          enonce: 'Exercice 5 : Fonction composée (Trigo) — Calculer \\( \\lim_{x \\to +\\infty} \\cos\\left(\\frac{\\pi x+1}{2x}\\right) \\)',
          etapes: [
            'Intérieur : On regarde d\'abord \\( \\frac{\\pi x+1}{2x} \\). C\'est une fraction rationnelle en l\'infini. On garde les chefs : \\( \\frac{\\pi x}{2x} = \\frac{\\pi}{2} \\).',
            'Extérieur : Maintenant, on applique le cosinus au résultat. \\( \\cos\\left(\\frac{\\pi}{2}\\right) \\)',
            'On sait que \\( \\cos\\left(\\frac{\\pi}{2}\\right) = 0 \\).',
          ],
          reponse: '0',
          conseil: 'Pour une fonction composée : d\'abord la limite de l\'intérieur, puis appliquer l\'extérieur au résultat. C\'est comme des poupées russes.',
        },
        // ── Enrichissement 3 : Récap intermédiaire ──
        {
          type: 'recap',
          id: 'recap-moyen',
          titre: 'Ce qu\'on vient de voir (Niveau MOYEN)',
          contenu: [
            '✅ 0/0 → Factoriser par (x-a) · Identité remarquable \\( a^2-b^2 \\)',
            '✅ \\( \\infty-\\infty \\) avec racines → Expression conjuguée',
            '✅ Signe infini → toujours faire le tableau de signe du dénominateur',
            '✅ Fonction composée → limite de l\'intérieur PUIS appliquer l\'extérieur',
          ],
        },
        // ── Enrichissement 2 : Transition ──
        {
          type: 'text',
          id: 'transition-s3-s4',
          contenu:
            "On monte maintenant au niveau BAC. Problèmes réels, asymptotes obliques, continuité, gendarmes... C'est exactement ce qui tombe le jour J.",
        },
      ],
    },
    {
      id: 's4',
      titre: '5.3 Exercices niveau BAC (Problème type)',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b6-accroche',
          contenu:
            "C'est ce qui tombe le jour J. C'est souvent mélangé à une étude de fonction. Champion(ne), tu as les armes — à toi de jouer.",
        },
        // ── Enrichissement 7 : Micro-motivation avant BAC ──
        {
          type: 'tip',
          id: 'motivation-bac',
          titre: 'Grand Frère te dit',
          contenu: [
            "C'est normal de bloquer ici. Relis lentement — le déclic arrive.",
            "Ce que tu viens de lire dans ce livre, beaucoup d'élèves ne le comprennent JAMAIS. Toi oui.",
            "Respire. On avance ensemble.",
          ],
        },
        {
          type: 'exercise',
          id: 'bac-ex1',
          niveau: 'BAC',
          enonce: 'Exercice 1 : Asymptote Oblique — Soit \\( f(x) = 2x-3+\\frac{1}{x+1} \\). Calculer la limite en \\( +\\infty \\) et montrer que la droite \\( (D) : y = 2x-3 \\) est asymptote oblique.',
          etapes: [
            'Étape 1 (Calcul de limite) : Quand \\( x \\) est géant (+∞), le bout \\( \\frac{1}{x+1} \\) devient minuscule (tend vers 0). Il reste quoi ? L\'infini (à cause de 2x). Donc \\( \\lim_{x \\to +\\infty} f(x) = +\\infty \\).',
            'Étape 2 (L\'Asymptote) : Calculer la distance entre la courbe et la droite. Formule : \\( \\lim_{x \\to +\\infty} [f(x) - (ax+b)] \\)',
            'Calcul de la distance : \\( \\left(2x-3+\\frac{1}{x+1}\\right) - (2x-3) = \\frac{1}{x+1} \\)',
            'Étape 3 (Conclusion) : \\( \\lim_{x \\to +\\infty} \\frac{1}{x+1} = 0 \\). Puisque la différence tend vers 0, la courbe colle à la droite.',
          ],
          reponse: 'La droite \\( y = 2x-3 \\) est une asymptote oblique de f.',
          conseil: 'Barème indicatif : 0.5pt pour la limite, 0.5pt pour la soustraction, 0.5pt pour la conclusion.',
          piege: 'L\'oubli des parenthèses dans \\( f(x) - (ax+b) \\) ! Sans parenthèses, tu vas te tromper de signe.',
        },
        {
          type: 'exercise',
          id: 'bac-ex2',
          niveau: 'BAC',
          enonce: 'Exercice 2 : Interprétation graphique — On a \\( f(x) = \\frac{2x^2+3}{x-1} \\). On a trouvé : \\( \\lim_{x \\to 1} f(x) = \\infty \\) et \\( \\lim_{x \\to \\infty} f(x) = \\infty \\). Quelles sont les asymptotes ?',
          etapes: [
            'Pour la limite en 1 : Quand x se rapproche d\'un nombre (ici 1), le résultat explose (∞). Asymptote verticale !',
            'La droite d\'équation \\( x = 1 \\) est une Asymptote Verticale.',
            'Pour la limite en l\'infini : Le résultat est l\'infini. Donc pas d\'asymptote horizontale (ce n\'est pas un plafond).',
          ],
          reponse: 'Asymptote verticale \\( x = 1 \\). Pas d\'asymptote horizontale.',
          conseil: 'Barème : 0.5pt par interprétation correcte. La phrase sur la copie compte autant que le calcul !',
        },
        {
          type: 'exercise',
          id: 'bac-ex3',
          niveau: 'BAC',
          enonce: 'Exercice 3 : Théorème des Gendarmes — Calculer \\( \\lim_{x \\to +\\infty} \\frac{\\sin(x)}{x} \\)',
          etapes: [
            'Le problème : \\( \\sin(x) \\) n\'a pas de limite en l\'infini (ça oscille entre -1 et 1). On est bloqué.',
            'L\'idée : On va l\'encadrer (le coincer). Tu sais que \\( -1 \\leq \\sin(x) \\leq 1 \\). C\'est toujours vrai.',
            'L\'action : On divise tout le monde par \\( x \\) (qui est positif car on va vers \\( +\\infty \\)).',
            '\\( \\frac{-1}{x} \\leq \\frac{\\sin(x)}{x} \\leq \\frac{1}{x} \\)',
            'Le verdict : À gauche, \\( \\frac{-1}{x} \\to 0 \\). À droite, \\( \\frac{1}{x} \\to 0 \\). Ta fonction est coincée entre 0 et 0.',
            'Par le Théorème des Gendarmes : \\( \\lim_{x \\to +\\infty} \\frac{\\sin(x)}{x} = 0 \\)',
          ],
          reponse: '0',
          conseil: 'Théorème des Gendarmes = quand tu vois sin(x) ou cos(x) à l\'infini dans une fraction. Les inégalités \\( -1 \\leq \\sin(x) \\leq 1 \\) sont ton arme.',
        },
        {
          type: 'exercise',
          id: 'bac-ex4',
          niveau: 'BAC',
          enonce: 'Exercice 4 : Paramètre réel (Niveau Expert) — Déterminer le réel a pour que \\( \\lim_{x \\to +\\infty} (\\sqrt{x^2+ax} - x) = 2 \\)',
          etapes: [
            'Analyse : C\'est une forme \\( \\infty-\\infty \\). On utilise le conjugué.',
            '\\( (\\sqrt{x^2+ax}-x) \\times \\frac{\\sqrt{x^2+ax}+x}{\\sqrt{x^2+ax}+x} = \\frac{(x^2+ax)-x^2}{\\sqrt{x^2+ax}+x} = \\frac{ax}{\\sqrt{x^2+ax}+x} \\)',
            'Simplification : En bas, on factorise par \\( x \\) (car \\( x>0 \\) et \\( \\sqrt{x^2}=x \\)). Le bas devient \\( x(\\sqrt{1+\\frac{a}{x}}+1) \\).',
            'On barre les \\( x \\). La limite quand \\( x \\to \\infty \\) est \\( \\frac{a}{\\sqrt{1}+1} = \\frac{a}{2} \\).',
            'Équation : On veut que cette limite soit égale à 2. Donc \\( \\frac{a}{2} = 2 \\) ce qui implique \\( a = 4 \\).',
          ],
          reponse: '\\( a = 4 \\)',
          conseil: 'Ce type d\'exercice montre qu\'on peut trouver un paramètre à partir d\'une limite donnée. C\'est un classique des BAC C/D.',
        },
        {
          type: 'exercise',
          id: 'bac-ex5',
          niveau: 'BAC',
          enonce: 'Exercice 5 : Limite composée avec Logarithme — Calculer \\( \\lim_{x \\to 0^+} x \\ln\\left(x + \\frac{1}{x}\\right) \\)',
          etapes: [
            'Transformation : \\( x + \\frac{1}{x} = \\frac{x^2+1}{x} \\). Donc \\( \\ln\\left(x+\\frac{1}{x}\\right) = \\ln\\left(\\frac{x^2+1}{x}\\right) = \\ln(x^2+1) - \\ln(x) \\).',
            'Distribution : \\( x[\\ln(x^2+1) - \\ln(x)] = x\\ln(x^2+1) - x\\ln(x) \\)',
            'Calcul par morceaux :',
            '\\( x\\ln(x^2+1) \\) : Quand \\( x \\to 0 \\), \\( x = 0 \\) et \\( \\ln(1) = 0 \\). \\( 0 \\times 0 = 0 \\).',
            '\\( -x\\ln(x) \\) : C\'est une limite de référence (Croissance comparée). On sait que \\( \\lim_{x \\to 0^+} x\\ln x = 0 \\).',
            'Total : \\( 0 - 0 = 0 \\).',
          ],
          reponse: '0',
          conseil: 'Maîtriser \\( \\lim_{x \\to 0^+} x\\ln x = 0 \\) par cœur — c\'est une limite de référence qui revient souvent.',
        },
        {
          type: 'exercise',
          id: 'bac-ex6',
          niveau: 'BAC',
          enonce: 'Exercice 6 : Continuité en un point — Soit \\( f(x) = \\frac{x^2-1}{x-1} \\) si \\( x \\neq 1 \\) et \\( f(1) = 3 \\). La fonction f est-elle continue en 1 ?',
          etapes: [
            'La règle : Pour être continue en 1, il faut que la limite quand \\( x \\to 1 \\) soit égale à l\'image \\( f(1) \\).',
            'L\'image : L\'énoncé dit \\( f(1) = 3 \\).',
            'La limite : Calculons \\( \\lim_{x \\to 1} \\frac{x^2-1}{x-1} \\). C\'est 0/0. On factorise : \\( \\frac{(x-1)(x+1)}{x-1} = x+1 \\). La limite est donc \\( 1+1 = 2 \\).',
            'Conclusion : La limite (2) est différente de l\'image (3). Il y a une cassure.',
          ],
          reponse: 'Non, f n\'est pas continue en 1 (limite ≠ valeur).',
          conseil: 'Pour la continuité, tu dois vérifier 3 conditions : f(a) existe, la limite existe, et elles sont ÉGALES. Ici la 3e condition n\'est pas remplie.',
        },
        {
          type: 'exercise',
          id: 'bac-ex7',
          niveau: 'BAC',
          enonce: 'Exercice 7 : Croissance comparée avec exponentielle — Calculer \\( \\lim_{x \\to +\\infty} \\frac{e^x+x}{e^x+1} \\)',
          etapes: [
            'Analyse : \\( \\frac{\\infty}{\\infty} \\). On ne peut pas appliquer la règle des polynômes car il y a des \\( e^x \\).',
            'Méthode : Factoriser par le terme dominant (\\( e^x \\)) en haut et en bas.',
            'Haut : \\( e^x\\left(1+\\frac{x}{e^x}\\right) \\). Bas : \\( e^x\\left(1+\\frac{1}{e^x}\\right) \\)',
            'Simplification : On barre les \\( e^x \\). Il reste \\( \\frac{1+\\frac{x}{e^x}}{1+\\frac{1}{e^x}} \\)',
            'Limites usuelles : \\( \\frac{x}{e^x} \\to 0 \\) (l\'exponentielle gagne toujours). \\( \\frac{1}{e^x} \\to 0 \\).',
            'Final : \\( \\frac{1+0}{1+0} = 1 \\)',
          ],
          reponse: '1',
          conseil: 'Quand tu vois \\( e^x \\) dans une fraction, factorise TOUJOURS par \\( e^x \\) en haut et en bas.',
        },
        {
          type: 'exercise',
          id: 'bac-ex8',
          niveau: 'BAC',
          enonce: 'Exercice 8 : Limite par taux d\'accroissement — Calculer \\( \\lim_{x \\to 0} \\frac{\\cos x - 1}{x} \\)',
          etapes: [
            'Reconnaissance : Ça ressemble à la définition du nombre dérivé \\( \\frac{f(x)-f(a)}{x-a} \\) avec \\( a=0 \\) et \\( f(x)=\\cos x \\).',
            'Vérification : \\( f(0) = \\cos 0 = 1 \\). Donc on a bien \\( \\frac{f(x)-f(0)}{x-0} \\).',
            'Propriété : Cette limite est égale à \\( f\'(0) \\).',
            'Dérivée : Si \\( f(x) = \\cos x \\), alors \\( f\'(x) = -\\sin x \\).',
            'Calcul : \\( f\'(0) = -\\sin 0 = 0 \\).',
          ],
          reponse: '0',
          conseil: 'Reconnaître le taux d\'accroissement = reconnaître la définition de la dérivée. C\'est une technique élégante qui impressionne les correcteurs.',
        },
        {
          type: 'exercise',
          id: 'bac-ex9',
          niveau: 'BAC',
          enonce: 'Exercice 9 : Racine et infini négatif — Calculer \\( \\lim_{x \\to -\\infty} \\sqrt{x^2+2x}+x \\)',
          etapes: [
            'Piège : Attention, c\'est \\( \\infty-\\infty \\). Et comme \\( x \\to -\\infty \\), \\( x \\) est négatif !',
            'Conjugué : On multiplie par \\( (\\sqrt{x^2+2x}-x) \\).',
            'Haut : \\( (x^2+2x) - x^2 = 2x \\).',
            'Bas : \\( \\sqrt{x^2+2x} - x \\)',
            'Factorisation du bas : Attention !! \\( \\sqrt{x^2} = |x| = -x \\) (car \\( x \\) est négatif).',
            'Bas = \\( \\sqrt{x^2}\\sqrt{1+2/x} - x = -x\\sqrt{1+2/x} - x = -x(\\sqrt{1+2/x}+1) \\)',
            'Final : \\( \\frac{2x}{-x(\\sqrt{...}+1)} \\). On barre les \\( x \\). \\( \\frac{2}{-(\\sqrt{1}+1)} = \\frac{2}{-2} = -1 \\)',
          ],
          reponse: '-1',
          conseil: 'PIÈGE CLASSIQUE : Quand \\( x \\to -\\infty \\), \\( \\sqrt{x^2} = |x| = -x \\) (et pas +x). Ce signe change tout !',
        },
        {
          type: 'exercise',
          id: 'bac-ex10',
          niveau: 'BAC',
          enonce: 'Exercice 10 : Limite composée graphique — On donne \\( \\lim_{x \\to +\\infty} f(x) = -2 \\) et \\( g(x) = \\sqrt{x^2+5} \\). Calculer \\( \\lim_{x \\to +\\infty} g(f(x)) \\).',
          etapes: [
            'Étape 1 : On regarde l\'intérieur \\( f(x) \\). Quand \\( x \\to +\\infty \\), \\( f(x) \\to -2 \\). Posons \\( X = -2 \\).',
            'Étape 2 : On regarde l\'extérieur \\( g(X) \\) quand \\( X \\to -2 \\).',
            '\\( g(-2) = \\sqrt{(-2)^2+5} = \\sqrt{4+5} = \\sqrt{9} = 3 \\)',
            'Conclusion : La fonction composée tend vers 3.',
          ],
          reponse: '3',
          conseil: 'Fonction composée : intérieur d\'abord, puis extérieur. Comme des poupées russes — on ouvre de l\'intérieur vers l\'extérieur.',
        },
        // ── Enrichissement 3 : Récap final ──
        {
          type: 'recap',
          id: 'recap-bac',
          titre: '🚀 Récap du Chapitre 5 — Exercices Type BAC',
          contenu: [
            '✅ Asymptote oblique → calculer \\( \\lim [f(x)-(ax+b)] \\) et montrer que c\'est 0',
            '✅ Asymptote verticale/horizontale → interpréter les limites trouvées',
            '✅ Gendarmes → encadrer avec \\( -1 \\leq \\sin(x) \\leq 1 \\) puis diviser par \\( x \\)',
            '✅ Continuité → 3 conditions : f(a) existe, limite existe, limite = f(a)',
            '✅ Exponentielle en fraction → factoriser par \\( e^x \\) en haut ET en bas',
          ],
        },
      ],
    },
    {
      id: 's5',
      titre: '5.4 Exercices pour t\'entraîner seul',
      blocs: [
        // ── Enrichissement 1 : Accroche de section ──
        {
          type: 'text',
          id: 'b7-accroche',
          contenu:
            "Fais-les sur une feuille. Chronomètre-toi : 2 minutes par question max. Les réponses sont à la fin — vérifie APRÈS.",
        },
        {
          type: 'text',
          id: 'b8',
          contenu:
            "1. \\( \\lim_{x \\to +\\infty} (-x^3+4x^2) \\)\n2. \\( \\lim_{x \\to -\\infty} \\frac{2x+1}{x^2-3} \\)\n3. \\( \\lim_{x \\to 1} \\frac{x^2+x-2}{x-1} \\)\n4. \\( \\lim_{x \\to 3^+} \\frac{2}{x-3} \\)\n5. \\( \\lim_{x \\to +\\infty} \\frac{e^x}{x} \\) (Croissance comparée)\n6. \\( \\lim_{x \\to +\\infty} (x-\\ln x) \\) (Factorise par x)\n7. \\( \\lim_{x \\to -\\infty} \\frac{5}{x^3} \\)\n8. \\( \\lim_{x \\to +\\infty} (\\sqrt{4x^2+1}-2x) \\) (Forme conjuguée subtile)\n9. Quelle est l'asymptote verticale de \\( f(x) = \\ln(x-2) \\) ?\n10. \\( \\lim_{x \\to 0} \\frac{\\sin 3x}{x} \\) (Astuce: faire apparaître 3x en bas)",
        },
        {
          type: 'rule',
          id: 'reponses',
          titre: 'RÉPONSES FINALES (Pour vérifier)',
          contenu: [
            '1. \\( -\\infty \\)',
            '2. 0',
            '3. 3',
            '4. \\( +\\infty \\)',
            '5. \\( +\\infty \\)',
            '6. \\( +\\infty \\)',
            '7. 0',
            '8. 0',
            '9. Droite \\( x = 2 \\)',
            '10. 3',
          ],
        },
        // ── Enrichissement 7 : Micro-motivation finale ──
        {
          type: 'tip',
          id: 'motivation-finale',
          titre: 'Grand Frère te dit',
          contenu: [
            "\"Petit(e), faut dja le pion (maîtriser) à l'entraînement pour ne pas 'taper poto' le jour J.",
            "Si tu cales sur un exo, ne reste pas là à regarder les mouches. Saute-le, va prendre les points ailleurs, et reviens le 'gâter' quand tu es plus frais !\"",
            "Tu es prêt pour le Chapitre 6 — la stratégie du Général.",
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      type: 'quiz',
      id: 'q1',
      question: 'Que vaut \\( \\lim_{x \\to -\\infty} (3x^4 - x^2 + 1) \\) ?',
      options: [
        '\\( -\\infty \\)',
        '\\( +\\infty \\)',
        '1',
        '3',
      ],
      bonneReponse: 1,
      explication: 'Polynôme en \\( -\\infty \\) : seul le terme dominant \\( 3x^4 \\) compte. \\( x^4 \\) reste positif même en \\( -\\infty \\) (puissance paire). Donc \\( 3x^4 \\to +\\infty \\).',
    },
    {
      type: 'quiz',
      id: 'q2',
      question: 'Comment prouver qu\'une droite \\( y = ax+b \\) est asymptote oblique de f ?',
      options: [
        'Montrer que \\( \\lim_{x \\to +\\infty} f(x) = +\\infty \\)',
        'Montrer que \\( \\lim_{x \\to +\\infty} [f(x) - (ax+b)] = 0 \\)',
        'Calculer f(0)',
        'Vérifier que f est continue',
      ],
      bonneReponse: 1,
      explication: 'Une asymptote oblique, c\'est une droite dont la courbe se rapproche. Pour le prouver : calculer \\( \\lim [f(x)-(ax+b)] \\). Si c\'est 0, la courbe colle à la droite.',
    },
    {
      type: 'quiz',
      id: 'q3',
      question: 'Le Théorème des Gendarmes s\'utilise quand la fonction contient...',
      options: [
        'Une exponentielle',
        'Une racine carrée',
        '\\( \\sin(x) \\) ou \\( \\cos(x) \\) qui oscille sans limite',
        'Un polynôme de degré > 3',
      ],
      bonneReponse: 2,
      explication: 'Le Théorème des Gendarmes est l\'outil quand tu as sin(x) ou cos(x) à l\'infini — car ces fonctions oscillent sans avoir de limite. On les encadre entre -1 et 1.',
    },
    {
      type: 'quiz',
      id: 'q4',
      question: 'Que vaut \\( \\sqrt{x^2} \\) quand \\( x \\to -\\infty \\) ?',
      options: [
        '\\( x \\) (toujours)',
        '\\( -x \\) (car x est négatif, donc \\( |x| = -x \\))',
        '0',
        '\\( +\\infty \\)',
      ],
      bonneReponse: 1,
      explication: 'PIÈGE CLASSIQUE : \\( \\sqrt{x^2} = |x| \\). Quand \\( x < 0 \\), \\( |x| = -x \\). Donc \\( \\sqrt{x^2} = -x \\) (qui est positif). Ce signe change tout dans les calculs !',
    },
    {
      type: 'quiz',
      id: 'q5',
      question: 'f est continue en a si et seulement si...',
      options: [
        'f(a) existe',
        'La limite en a existe',
        'f(a) existe ET la limite existe ET elles sont égales',
        'f est dérivable en a',
      ],
      bonneReponse: 2,
      explication: '3 conditions TOUTES nécessaires pour la continuité : (1) f(a) existe, (2) la limite existe, (3) limite = f(a). Si une seule manque → pas continue.',
    },
  ],
};

