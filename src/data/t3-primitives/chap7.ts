// src/data/t3-primitives/chap7.ts
import { Chapitre } from '../../types/course';

export const chapitre6: Chapitre = {
  id: 't3-chap7',
  titre: 'Réussir le BAC sur les Intégrales',
  duree: 35,
  niveau: 'BAC',
  xpGain: 120,
  gratuit: false,
  objectifs: [
    'Connaître la structure des 10 questions incontournables sur les intégrales au BAC',
    'Identifier et esquiver les 5 grands pièges d\'analyse relevés par les jurys',
    'Gérer ton chronomètre de calcul à la minute près le jour J',
    'Piloter ton organigramme de décision rapide (GPS Mental EDUCTOME)',
    'Déployer les 4 tactiques de survie d\'urgence en cas de blocage',
  ],
  sections: [
    {
      id: 's1',
      titre: '6.1 Stratégie Commando — Les 10 Questions Incontournables',
      blocs: [
        {
          type: 'text',
          id: 'b1-accroche',
          contenu: 'Champion(ne), l\'épreuve d\'analyse au BAC n\'est pas une surprise, c\'est un plan hautement codé. Découvre la check-list des questions pour braquer le sujet.',
        },
        {
          type: 'warning',
          id: 'b1',
          contenu: "📖 L'ANECDOTE DU GRAND FRÈRE (La Stratégie du Général) :\nLa veille du BAC au Lycée Classique d'Abidjan, le fameux « Cacao », je n'ai pas ouvert un seul livre de calcul. J'ai juste pris une feuille blanche et j'ai dessiné toutes les situations possibles de limites, dérivées et intégrales dans ma tête. Je me suis dit : « Demain, ce n'est pas un examen, c'est une démonstration de force ». Le secret des majors, ce n'est pas de tout savoir, c'est de savoir exactement quoi faire quand le stress veut te faire oublier ce que tu sais. J'ai géré mon temps comme un chronomètre suisse, j'ai repéré les questions cadeaux, j'ai évité les pièges grossiers, et c'est ce qui m'a permis de finir le problème d'analyse avec 30 minutes d'avance pour tout revérifier.",
        },
        {
          type: 'text',
          id: 'b2',
          contenu: "Les concepteurs des sujets de la série D en Côte d'Ivoire réutilisent toujours les mêmes trames. Voici la liste des 10 questions les plus fréquentes sur les primitives et intégrales, et la stratégie militaire pour les détruire en un temps record :",
        },
        {
          type: 'text',
          id: 'b3-q1-q5',
          contenu: `
<div class="mb-6"><div class="font-bold text-[#1976D2] dark:text-blue-400 text-lg mb-2">1. « Calculer une primitive de f(x) »</div>
<div class="pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-2">
<div><span class="font-bold">Fréquence :</span> Toujours présent | <span class="font-bold">Points :</span> 2 à 4 points.</div>
<div><span class="font-bold text-emerald-600 dark:text-emerald-400">Stratégie :</span> Identifie la forme globale (somme, composée). Récite ton tableau et intègre terme par terme.</div>
<div><span class="font-bold text-red-600 dark:text-red-400">Piège :</span> Oublier le + C à la fin de l'expression générale. Sans lui, ton résultat est incomplet.</div>
</div></div>

<div class="mb-6"><div class="font-bold text-[#1976D2] dark:text-blue-400 text-lg mb-2">2. « Calculer l'intégrale définie $\\int_a^b f(x)dx$ »</div>
<div class="pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-2">
<div><span class="font-bold">Fréquence :</span> Très fréquent | <span class="font-bold">Points :</span> 2 à 3 points.</div>
<div><span class="font-bold text-emerald-600 dark:text-emerald-400">Stratégie :</span> Écris systématiquement ta notation crochet $[F(x)]_a^b$. Pose le calcul $F(b) - F(a)$ avec de grandes parenthèses de protection.</div>
<div><span class="font-bold text-red-600 dark:text-red-400">Piège :</span> L'erreur de signe ! Le moins de la formule s'attaque à tous les termes de la seconde parenthèse.</div>
</div></div>

<div class="mb-6"><div class="font-bold text-[#1976D2] dark:text-blue-400 text-lg mb-2">3. « Calculer l'aire de la surface délimitée par la courbe et l'axe... »</div>
<div class="pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-2">
<div><span class="font-bold">Fréquence :</span> Quasi-systématique en fin d'étude de fonction | <span class="font-bold">Points :</span> 3 à 5 points.</div>
<div><span class="font-bold text-emerald-600 dark:text-emerald-400">Stratégie :</span> ÉTUDIE LE SIGNE DE f(x) AVANT TOUT ! Si la courbe est au-dessus, intègre $f(x)$. Si elle est en dessous, intègre $-f(x)$. Multiplie le résultat final par l'Unité d'Aire (u.a.) convertie en cm².</div>
<div><span class="font-bold text-red-600 dark:text-red-400">Piège :</span> Foncer tête baissée et donner une surface finale négative.</div>
</div></div>

<div class="mb-6"><div class="font-bold text-[#1976D2] dark:text-blue-400 text-lg mb-2">4. « Calculer l'aire emprisonnée entre deux courbes $C_f$ et $C_g$ »</div>
<div class="pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-2">
<div><span class="font-bold">Fréquence :</span> Régulier | <span class="font-bold">Points :</span> 3 à 5 points.</div>
<div><span class="font-bold text-emerald-600 dark:text-emerald-400">Stratégie :</span> Détermine les points d'intersection en résolvant $f(x) = g(x)$ pour trouver tes bornes. Regarde qui est au-dessus (Haut - Bas).</div>
<div><span class="font-bold text-red-600 dark:text-red-400">Piège :</span> Soustraire dans le mauvais sens et se retrouver bloqué avec une aire négative.</div>
</div></div>

<div class="mb-6"><div class="font-bold text-[#1976D2] dark:text-blue-400 text-lg mb-2">5. « Vérifier qu'une fonction F est une primitive de f »</div>
<div class="pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-2">
<div><span class="font-bold">Fréquence :</span> Souvent présent | <span class="font-bold">Points :</span> 1 à 2 points.</div>
<div><span class="font-bold text-emerald-600 dark:text-emerald-400">Stratégie :</span> C'est un pur cadeau. On te donne la réponse ! Ne cherche pas à intégrer f(x). Dérive simplement F(x) et montre que $F'(x) = f(x)$.</div>
<div><span class="font-bold text-red-600 dark:text-red-400">Piège :</span> Choisir le chemin difficile en essayant d'intégrer une fonction tordue alors que dériver prend 30 secondes.</div>
</div></div>
`.trim(),
        },
        {
          type: 'text',
          id: 'b4-q6-q10',
          contenu: `
<div class="mb-6"><div class="font-bold text-[#1976D2] dark:text-blue-400 text-lg mb-2">6. « Calculer la valeur moyenne de f sur [a, b] »</div>
<div class="pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-2">
<div><span class="font-bold">Fréquence :</span> Parfois (contextes concrets) | <span class="font-bold">Points :</span> 2 à 3 points.</div>
<div><span class="font-bold text-emerald-600 dark:text-emerald-400">Stratégie :</span> Pose la formule $\\mu = \\frac{1}{b-a} \\int_a^b f(x)dx$. Calcule l'intégrale puis applique le lisseur à la fin.</div>
<div><span class="font-bold text-red-600 dark:text-red-400">Piège :</span> Oublier la fraction $\\frac{1}{b-a}$ devant et rendre un cumul de valeur au lieu d'une moyenne.</div>
</div></div>

<div class="mb-6"><div class="font-bold text-[#1976D2] dark:text-blue-400 text-lg mb-2">7. « Déterminer la constante C sachant que $F(x_0) = k$ »</div>
<div class="pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-2">
<div><span class="font-bold">Fréquence :</span> Régulier | <span class="font-bold">Points :</span> 1 à 2 points.</div>
<div><span class="font-bold text-emerald-600 dark:text-emerald-400">Stratégie :</span> Pose ta famille de primitives avec le + C. Remplace x par $x_0$, égale le tout à k, et isole C via une équation simple.</div>
<div><span class="font-bold text-red-600 dark:text-red-400">Piège :</span> Paniquer devant la notation et rater une résolution de degré 1 de niveau collège.</div>
</div></div>

<div class="mb-6"><div class="font-bold text-[#1976D2] dark:text-blue-400 text-lg mb-2">8. « Montrer que F est la primitive de f qui s'annule en $x_0$ »</div>
<div class="pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-2">
<div><span class="font-bold">Fréquence :</span> Souvent | <span class="font-bold">Points :</span> 2 points.</div>
<div><span class="font-bold text-emerald-600 dark:text-emerald-400">Stratégie :</span> C'est la fusion des questions 5 et 7. Tu dois valider deux choses : $F'(x) = f(x)$ ET $F(x_0) = 0$.</div>
<div><span class="font-bold text-red-600 dark:text-red-400">Piège :</span> Ne faire que la moitié de la démonstration et abandonner un point gratuit.</div>
</div></div>

<div class="mb-6"><div class="font-bold text-[#1976D2] dark:text-blue-400 text-lg mb-2">9. « Intégrale avec lien dérivée-primitive (Questions enchaînées) »</div>
<div class="pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-2">
<div><span class="font-bold">Fréquence :</span> Fréquent dans les longs problèmes d'analyse.</div>
<div><span class="font-bold text-emerald-600 dark:text-emerald-400">Stratégie :</span> Lis tout l'exercice avant de démarrer. Si on t'a fait dériver une expression au début, elle correspondra au bloc à intégrer à la fin.</div>
<div><span class="font-bold text-red-600 dark:text-red-400">Piège :</span> Garder le nez collé sur le guidon et ne pas voir les passerelles logiques du sujet.</div>
</div></div>

<div class="mb-6"><div class="font-bold text-[#1976D2] dark:text-blue-400 text-lg mb-2">10. « Situation Complexe (Économie, physique ou cinématique) »</div>
<div class="pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-2">
<div><span class="font-bold">Fréquence :</span> 1 fois sur 3 à l'Exercice 6 | <span class="font-bold">Points :</span> 4 à 6 points.</div>
<div><span class="font-bold text-emerald-600 dark:text-emerald-400">Stratégie :</span> Dédramatise le texte. Remplace les tonnes de cacao ou la vitesse du gbaka par des x et des f(x). Traduis : le coût total est la primitive du coût marginal.</div>
<div><span class="font-bold text-red-600 dark:text-red-400">Piège :</span> Se laisser impressionner par le vocabulaire littéraire et sauter la question alors que les calculs sont basiques.</div>
</div></div>
`.trim(),
        },
        {
          type: 'text',
          id: 'b5-transition',
          contenu: 'Connaître les types de questions sécurise ta feuille. Voyons maintenant l\'Atelier des points de relecture pour débusquer les fautes classiques de stress.',
        },
      ],
    },
    {
      id: 's2',
      titre: '6.2 L\'Atelier des Pièges à Éviter — Rétablir la Rigueur',
      blocs: [
        {
          type: 'text',
          id: 'b6-accroche',
          contenu: 'Découvre les 5 erreurs incontournables à éviter qui font chuter la moyenne nationale lors des corrections de la DECO. Analyse-les bien.',
        },
        {
          type: 'warning',
          id: 'b7-piege-t3-1',
          contenu: "⚠️ PIÈGE À ÉVITER 1 : Oublier la constante générale dans la famille de primitives\n\n• Erreur typique : On te demande de déterminer l'ensemble des primitives de $f(x)=2x$, et tu écris directement $F(x)=x^2$. C'est incomplet !\n• Pourquoi c'est faux : $x^2+5$ ou $x^2-100$ donnent aussi $2x$ en dérivant. En oubliant le + C, tu réduis l'univers des réponses à un seul cas particulier.\n• Comment l'éviter : Dès que la consigne mentionne « les primitives generales », ajoute le + C comme un réflexe pavlovien. Cela te protège d'une pénalité de rigueur de 0,5 point.",
        },
        {
          type: 'warning',
          id: 'b8-piege-t3-2',
          contenu: "⚠️ PIÈGE À ÉVITER 2 : Forcer la règle des puissances sur l'exception de 1/x\n\n• Erreur typique : Appliquer la formule $\\frac{x^{n+1}}{n+1}$ sur la fraction $\\frac{1}{x}$, ce qui produit une division par zéro interdite : $\\frac{x^0}{0}$.\n• Comment l'éviter : Mémorise que la puissance $-1$ (la fraction $1/x$) possède un statut de sécurité et exige exclusivement le Logarithme Népérien : $\\ln|x| + C$. Écrire une division par zéro détruit instantanément la crédibilité de ta copie.",
        },
        {
          type: 'warning',
          id: 'b9-piege-t3-3',
          contenu: "⚠️ PIÈGE À ÉVITER 3 : Oublier la compensation de l'intérieur sur les composées affines\n\n• Erreur typique : Écrire que la primitive de $e^{3x}$ est $e^{3x}$. C'est faux, il y a un coefficient parasite !\n• Comment l'éviter : Applique la règle du péage linéaire : tu dois diviser devant par la dérivée de l'exposant, ce qui donne $\\frac{1}{3}e^{3x} + C$. Fais la vérification par la Règle d'Or au brouillon.",
        },
        {
          type: 'warning',
          id: 'b10-piege-t3-4',
          contenu: "⚠️ PIÈGE À ÉVITER 4 : Valider une superficie physique négative\n\n• Erreur typique : Conclure un problème d'aire en écrivant : « L'aire du domaine sous la lagune est de -5 cm² ».\n• Comment l'éviter : Une aire négative n'existe pas dans le monde réel. L'intégrale algébrique peut être négative, mais la surface doit être corrigée en appliquant une valeur absolue ou un signe moins devant ton intégrale. Le résultat géométrique final rendu au correcteur doit obligatoirement être positif.",
        },
        {
          type: 'warning',
          id: 'b11-piege-t3-5',
          contenu: "⚠️ PIÈGE À ÉVITER 5 : Intervertir les bornes d'intégration sans modifier le signe\n\n• Erreur typique : Inverser les bornes $\\int_3^1 f(x)dx$ en $\\int_1^3 f(x)dx$ sans changer l'expression.\n• Comment l'éviter : Modifier le sens de lecture inverse le résultat du théorème fondamental ($F(b)-F(a)$ devient $F(a)-F(b)$). N'oublie jamais de placer un signe moins devant ton bloc si tu rectifies l'ordre des bornes : $\\int_b^a f(x)dx = -\\int_a^b f(x)dx$.",
        },
        {
          type: 'text',
          id: 'b12-transition',
          contenu: 'Les verrous de sécurité sont posés. Voyons comment piloter ton temps à la minute près grâce au chronomètre officiel d\'EDUCTOME.',
        },
      ],
    },
    {
      id: 's3',
      titre: '6.3 Le Chronomètre du BAC & 6.5 Tactiques de Secours',
      blocs: [
        {
          type: 'text',
          id: 'b13-accroche',
          contenu: 'Le jour de l\'examen, le temps s\'écoule à une vitesse folle. Découvre le budget minutes idéal pour ne pas sacrifier les autres exercices.',
        },
        {
          type: 'recap',
          id: 'b13-temps-flash',
          titre: '⏱️ Actions rapides à expédier en moins de 5 minutes :',
          contenu: [
            '⚡ Calcul d\'une primitive usuelle directe (ex: polynôme) ➜ Cible : 2 min',
            '⚡ Calcul d\'une intégrale définie simple ➜ Cible : 3 min',
            '⚡ Vérifier qu\'Le parent F est valide par dérivation ➜ Cible : 3 min',
            '⚡ Isoler la constante C avec une condition initiale $F(0) = 5$ ➜ Cible : 4 min',
          ],
        },
        {
          type: 'recap',
          id: 'b14-temps-moyen',
          titre: '⏱️ Questions intermédiaires exigeant 5 à 10 minutes :',
          contenu: [
            '⚡ Primitiver une forme composée ajustée ($u\'u^n$, $u\'/u$) ➜ Cible : 6 min',
            '⚡ Calcul de la valeur moyenne d\'une fonction avec interprétation ➜ Cible : 6 min',
            '⚡ Intégration par parties standard ($xe^x$) ➜ Cible : 8 min',
            '⚡ Surface simple sous une courbe positive ➜ Cible : 7 min',
          ],
        },
        {
          type: 'recap',
          id: 'b15-temps-bac',
          titre: '⏱️ Déploiements lourds nécessitant 10 à 20 minutes :',
          contenu: [
            '⚡ Aire avec bascule de signe (Chasles + deux évaluations de crochets) ➜ Cible : 12 min',
            '⚡ Aire fermée entre deux courbes (intersections + position relative) ➜ Cible : 15 min',
            '⚡ Situation Complexe (Exercice 6) combinant modélisation et intégrale totale ➜ Cible : 20 min',
          ],
        },
        {
          type: 'text',
          id: 'b16',
          contenu: "SECTION 6.5 — QUE FAIRE SI TU BLOQUES ? (Opération Survie)\n\nLa sueur froide, le stylo qui tremble... Tu es bloqué sur une intégrale complexe à 10h15 le jour du BAC ? Pas de panique. Même les majors ont des blancs. Déploie l'une de ces 4 tactiques d'urgence :",
        },
        {
          type: 'tip',
          id: 'b17-survie-techniques',
          titre: 'Les 4 Commandements de Survie du Caïman',
          contenu: [
            '💡 Tactique 1 : L\'Inversion des Rôles (La dérivation) : Si la question demande de démontrer qu\'un F(x) donné est une primitive, n\'essaie pas d\'intégrer f(x). Dérive F(x), c\'est infiniment plus mécanique et plus simple. Si tu retombes sur f(x), le point est sécurisé.',
            '💡 Tactique 2 : Le Débuggage sur Valeurs Simples : Un doute sur une formule complexe contenant des logarithmes ? Teste ta méthode au brouillon sur une fonction ultra-basique (comme $x^2$). Si ta logique s\'effondre sur le cas simple, c\'est qu\'elle est fausse, cela permet de recalibrer ton esprit.',
            '💡 Tactique 3 : Le Saut Quantique Limitateur de Dégâts : Bloqué sur une primitive à la question 3.b et le temps tourne ? Écris : « La primitive étant complexe à isoler, admettons le résultat fourni par l\'énoncé et poursuivons le problème ». Le correcteur te retire 0,5 point mais est obligé de te noter sur toute la suite de ton tableau et de tes calculs d\'aires !',
            '💡 Tactique 4 : Découper l\'Éléphant (Linéarité) : Face à un monstre algébrique du type $\\int_0^2 (3x^2 - 5x + e^{2x})dx$, ton cerveau s\'embrouille. Utilise la linéarité pour scinder le calcul en trois petits bébés inoffensifs. Calcule chaque morceau séparément dans un coin de ton brouillon et rassemble les valeurs à la fin.',
          ],
        },
        {
          type: 'text',
          id: 'b18-transition',
          contenu: 'Le plan de bataille stratégique est scellé. Passons à l\'ouverture officielle de ton arsenal de révision de fin de tome : les Annexes techniques.',
        },
      ],
    },
    {
      id: 's4',
      titre: 'ANNEXE A : Formulaire Complet des Primitives',
      blocs: [
        {
          type: 'text',
          id: 'b19-accroche',
          contenu: 'Voici ton armoire à outils définitive. Pas de place au hasard le jour de l\'examen, tout est centralisé ici.',
        },
        {
          type: 'table',
          id: 'table-annexe-a1',
          titre: 'Tableau 1 : Les Primitives Usuelles (Les Briques Élémentaires)',
          headers: ['Fonction $f(x)$', 'Primitive Générale $F(x) + C$', 'Condition d\'existence'],
          rows: [
            ['$k$ (constante: 5, $\\pi$, $\\ln 2$)', '$kx + C$', '$x \\in \\mathbb{R}$'],
            ['$x$', '$\\frac{1}{2}x^2 + C$', '$x \\in \\mathbb{R}$'],
            ['$ax + b$', '$\\frac{1}{2}ax^2 + bx + C$', '$x \\in \\mathbb{R}$'],
            ['$x^2$', '$\\frac{1}{3}x^3 + C$', '$x \\in \\mathbb{R}$'],
            ['$x^n$ ($n \\in \\mathbb{N}^*$)', '$\\frac{1}{n+1}x^{n+1} + C$', '$x \\in \\mathbb{R}$'],
            ['$\\frac{1}{x}$', '$\\ln|x| + C$', '$x \\neq 0$'],
            ['$\\frac{1}{x^2}$', '$-\\frac{1}{x} + C$', '$x \\neq 0$'],
            ['$\\frac{1}{x^n}$ ($n > 1$)', '$-\\frac{1}{(n-1)x^{n-1}} + C$', '$x \\neq 0$'],
            ['$\\sqrt{x}$', '$\\frac{2}{3}x\\sqrt{x} + C$', '$x > 0$'],
            ['$\\cos(x)$', '$\\sin(x) + C$', '$x \\in \\mathbb{R}$'],
            ['$\\sin(x)$', '$-\\cos(x) + C$', '$x \\in \\mathbb{R}$'],
            ['$\\tan(x)$', '$-\\ln|\\cos(x)| + C$', '$x \\neq \\frac{\\pi}{2} + k\\pi$'],
            ['$e^x$', '$e^x + C$', '$x \\in \\mathbb{R}$'],
            ['$e^{ax}$ ($a \\neq 0$)', '$\\frac{1}{a}e^{ax} + C$', '$x \\in \\mathbb{R}$'],
          ],
        },
        {
          type: 'table',
          id: 'table-annexe-a2',
          titre: 'Tableau 2 : Primitives des Fonctions Composées (Niveau Boss)',
          headers: ['Structure de la dérivée vue dans l\'énoncé', 'Primitive Générale $F(x) + C$', 'Condition requise'],
          rows: [
            ['$u\' \\cdot u^n$ ($n \\neq -1$)', '$\\frac{1}{n+1}u^{n+1} + C$', 'u est une fonction dérivable'],
            ['$\\frac{u\'}{u}$', '$\\ln|u| + C$', '$u(x) \\neq 0$ sur l\'intervalle'],
            ['$\\frac{u\'}{u^2}$', '$-\\frac{1}{u} + C$', '$u(x) \\neq 0$ sur l\'intervalle'],
            ['$\\frac{u\'}{\\sqrt{u}}$', '$2\\sqrt{u} + C$', '$u(x) > 0$ sur l\'intervalle'],
            ['$u\' \\cdot e^u$', '$e^u + C$', 'u est présente à l\'exposant'],
            ['$u\' \\cdot \\cos(u)$', '$\\sin(u) + C$', 'L\'angle intérieur est composé'],
            ['$u\' \\cdot \\sin(u)$', '$-\\cos(u) + C$', 'L\'angle intérieur est composé'],
          ],
        },
        {
          type: 'text',
          id: 'b20-transition',
          contenu: 'Passons à l\'Annexe B pour analyser le recueil noir des fautes de relecture : le Cimetière des Points.',
        },
      ],
    },
    {
      id: 's5',
      titre: 'ANNEXE B : Le Cimetière des Points — Les 10 Erreurs Classiques',
      blocs: [
        {
          type: 'text',
          id: 'b21-accroche',
          contenu: 'Voici le recueil des fautes qui font pleurer les correcteurs du BAC chaque année. Lis-les attentivement pour ne jamais tomber dans ces pièges.',
        },
        {
          type: 'table',
          id: 'table-annexe-b-cimetiere',
          titre: 'Le Cimetière des Points (Format Officiel EDUCTOME)',
          headers: ['#', 'Erreur classique commise par l\'élève ❌', 'Bonne méthode et correction EDUCTOME ✅'],
          rows: [
            ['1', 'Écrire que « la primitive de $2x$ est $x^2$ » de façon isolée.', 'Il faut ajouter le constant $+ C$ (*car la dérivation efface l\'histoire initiale de la fonction*).'],
            ['2', 'Calculer $\\int \\frac{1}{x} dx$ en faisant $\\frac{x^0}{0}$ avec la règle des puissances.', 'C\'est l\'exception absolue ! La fraction $\\frac{1}{x}$ exige le Logarithme Népérien : $\\ln|x| + C$.'],
            ['3', 'Croire que la primitive de $e^{3x}$ est simplement $e^{3x}$.', 'Il faut payer le péage linéaire en divisant par le coefficient de l\'exposant devant : $\\frac{1}{3}e^{3x} + C$.'],
            ['4', 'Conclure une question de surface par : « L\'aire mesure -15 cm² ».', 'Une superficie physique négative n\'existe pas ! Applique une valeur absolue pour corriger le résultat en $+15\\text{ cm}^2$.'],
            ['5', 'Inverser l\'ordre des bornes $\\int_3^1 f(x)dx$ en $\\int_1^3 f(x)dx$ sans altérer le signe.', 'Inverser le sens de lecture impose d\'ajouter un signe moins global devant ton bloc : $-\\int_1^3 f(x)dx$.'],
            ['6', 'Calculer la valeur moyenne sur un intervalle en faisant uniquement $\\int_a^b f(x)dx$.', 'Ne jamais oublier la fraction de lissage devant : $\\mu = \\frac{1}{b-a}\\int_a^b f(x)dx$ (*pour diviser par la largeur du domaine*).'],
            ['7', 'Primitiver à l\'aveugle un calcul d\'aire sans vérifier la position de la courbe.', 'Étudie obligatoirement le SIGNE de f(x) sur l\'intervalle pour savoir s\'il faut découper avec Chasles ou inverser le bloc.'],
            ['8', 'Rendre un calcul d\'intégrale définie $\\int_1^3 2xdx$ sous forme de fonction avec un $+ C$.', 'L\'intégrale définie produit un NOMBRE réel net. Le $+ C$ s\'élimine mutuellement lors de la soustraction.'],
            ['9', 'Calculer une surface fermée entre deux courbes en posant des bornes au hasard.', 'Détermine d\'abord les murs géométriques en résolvant $f(x) = g(x)$ pour dégoter les vraies bornes d\'intégration.'],
            ['10', 'Trouver une primitive complexe au brouillon et l\'écrire direct sur la copie sans tester.', 'C\'est la Règle d\'Or ! Dérive ton résultat F(x) au brouillon pour vérifier si tu retombes bien sur la fonction f(x) de départ.'],
          ],
        },
        {
          type: 'text',
          id: 'b22-transition',
          contenu: 'Les erreurs sont identifiées. Déployons l\'organigramme de décision rapide : ton GPS Mental de calcul.',
        },
      ],
    },
    {
      id: 's6',
      titre: 'ANNEXE C : Organigramme de Décision (GPS Mental)',
      blocs: [
        {
          type: 'text',
          id: 'b23-accroche',
          contenu: 'Ton esprit s\'embrouille face à une fonction bizarre ? Pose-toi ces questions exactes dans cet ordre pour forcer l\'expression à avouer sa nature.',
        },
        {
          type: 'table',
          id: 'table-annexe-c-gps',
          titre: 'GPS Mental EDUCTOME — Quelle est la forme globale ?',
          headers: ['Sous-question de diagnostic à poser', 'Si la réponse est OUI', 'Ce que tu fais immédiatement sur ton brouillon'],
          rows: [
            ['« Est-ce une simple somme ou soustraction de monômes ? » ex: $x^3 - 4x + 5$', 'Type Somme Usuelle', '① Respire, c\'est le cas le plus facile.\n② Sépare chaque bloc proprement.\n③ Prprimitive terme par terme de façon indépendante.'],
            ['« S\'agit-il d\'un coefficient constant collé à une expression ? » ex: $5\\ln(x)$ ou $\\frac{1}{3}x^3$', 'Type Facteur Constant', '① Ne déploie pas la lourde formule du produit uv.\n② Laisse le nombre constant en spectateur à sa place.\n③ Primitive uniquement la brique contenant la variable x.'],
            ['« S\'agit-il d\'un produit de deux blocs contenant des x ? » ex: $(2x+1)e^x$', 'Type Produit Variable', '① Alerte ! N\'écris jamais que c\'est le produit des primitives.\n② Pose tes expressions u, v, u\', v\' au brouillon.\n③ Utilise la technique de l\'Intégration Par Parties (IPP).'],
            ['« Est-ce une fraction avec des expressions variables en haut et en bas ? » ex: $\\frac{3x-1}{x+2}$', 'Type Fraction Rationnelle', '① Vigilance sur les signes.\n② Vérifie directement si le numérateur est la dérivée exacte du bas.\n③ Si oui, utilise le modèle $\\frac{u\'}{u}$ pour sortir du $\\ln|u|$.'],
            ['« Est-ce une fonction imbriquée ou emboîtée dans une puissance ? » ex: $(4x+5)^3$', 'Type Chaîne Composée', '① Règle de la chaîne inverse, règle du \"bébé\".\n② Isole le bloc interne u and calcule u\' au brouillon.\n③ Ajuste les coefficients parasites devant avant d\'intégrer la puissance.'],
          ],
        },
        {
          type: 'text',
          id: 'b24-transition',
          contenu: 'Le GPS Mental est configuré. Découvrons la conclusion finale et les conseils de veille d\'examen du Vieux Père.',
        },
      ],
    },
    {
      id: 's7',
      titre: 'ANNEXE D & E : Conseils de Dernière Minute du Vieux Père',
      blocs: [
        {
          type: 'text',
          id: 'b25-accroche',
          contenu: 'Dernière ligne droite, Champion(ne). Viens t\'asseoir une dernière fois sous l\'apatam, voici les 5 commandements pour aborder l\'épreuve avec l\'esprit d\'un Major.',
        },
        {
          type: 'recap',
          id: 'recueil-annexe-e',
          titre: '🚀 Les 5 Commandements de vie d\'un Caïman d\'Abidjan',
          contenu: [
            '⚡ 1. Le \"Vidage de Cerveau\" immédiat : Dès que tu t\'assois à ta table d\'examen et qu\'on te remet ton brouillon, n\'attends pas le sujet. Écris directement dans un coin tes formules lourdes (quotients, composées, théorème fondamental) pour libérer de la mémoire vive dans ton esprit.',
            '⚡ 2. Le Test de Cohérence du Bon Sens : Les mathématiques sont un bloc uni. Si ton tableau de variations montre une flèche qui monte de -inf à +inf, mais que ta dérivée ou ton intégrale d\'aire est négative... STOP ! Il y a un bug. Si la pente est positive, la courbe grimpe obligatoirement.',
            '⚡ 3. La Tactique du Saut de Secours : Bloqué sur une démonstration de primitive depuis plus de 5 minutes ? Ne sacrifie pas ton épreuve. Regarde la question suivante qui te donne souvent la formule de l\'expression. Écris : « Admettons ce résultat », utilise-le pour effectuer tes calculs d\'aires et rafle tous les points restants !',
            '⚡ 4. Rédige avec du Miel : Le BAC n\'est pas qu\'une suite de calculs froids. Les correcteurs adorent les élèves qui rédigent en français correct. Écris : « La fonction f est continue sur l\'intervalle car c\'est un polynôme, elle admet donc des primitives. Posons u = ... ». C\'est du velours pour sa notation !',
            '⚡ 5. La Veille du Match, on ferme les cahiers : Le soir de la veille à 18h, arrête tout. Ne cherche pas à comprendre une technique que tu as ignorée toute l\'année, cela va juste saturer ton stress. Relis uniquement ton Annexe B (Le Cimetière) et ton Annexe C (Le GPS). Mange bien, bois de l\'eau et dors au moins 8 heures. Ton cerveau a besoin de lucidité pour éviter les fautes de signes stupides sur des fractions très simples.',
          ],
        },
        {
          type: 'text',
          id: 'b26',
          contenu: "Tu as désormais toutes les cartes en main, champion(ne) ! Tu possèdes la trilogie de l'analyse : les Frontières (Limites - Tome 1), la Vitesse (Dérivées - Tome 2), et les Superficies (Intégrales - Tome 3). Tu as la vue d'ensemble du général. Fais confiance à ta méthode, applique tes protocoles pas-à-pas, reste concentré dans ta salle de composition et va décrocher ton BAC ! On est ensemble jusqu\'à la victoire !",
        },
        {
          type: 'text',
          id: 'b27-signature',
          contenu: "Je crois en toi ! — Ton Grand Frère EDUCTOME 📚\n\nOn se retrouve très vite dans le Tome 4 : Les Suites Numériques, pour poursuivre notre marche triomphale vers la mention !",
        },
      ],
    },
  ],
  quiz: [
    {
      type: 'quiz',
      id: 't3-c7-q1',
      question: 'D\'après le Cimetière des Points (Piège 4), que dois-tu corriger si ton calcul d\'intégrale donne -15 pour une question de surface ?',
      options: [
        'Rien, j\'écris "L\'aire mesure -15 cm²"',
        'J\'applique une valeur absolue car une aire physique ne peut pas être négative, le résultat final est 15 cm²',
        'Je mets un 0 car une surface négative n\'existe pas',
        'Je dis que la courbe est à l\'envers'
      ],
      bonneReponse: 1,
      explication: 'L\'intégrale peut être négative (si la courbe est sous l\'axe), mais l\'aire géométrique, elle, est toujours positive. On la corrige donc avec une valeur absolue.',
    },
    {
      type: 'quiz',
      id: 't3-c7-q2',
      question: 'Si on te demande de VÉRIFIER que F(x) est une primitive de f(x), quelle est la méthode la plus rapide (Stratégie Commando) ?',
      options: [
        'Essayer d\'intégrer f(x) pour voir si on trouve F(x)',
        'Dériver F(x) et vérifier que le résultat donne exactement f(x)',
        'Calculer la limite des deux fonctions',
        'Faire un tableau de signes'
      ],
      bonneReponse: 1,
      explication: 'Dériver est mécanique et rapide ! C\'est un point cadeau. Ne perds pas de temps à essayer d\'intégrer une fonction compliquée si on te donne déjà la réponse.',
    },
    {
      type: 'quiz',
      id: 't3-c7-q3',
      question: 'Que se passe-t-il si tu inverses les bornes d\'intégration, par exemple en transformant l\'intégrale de 3 à 1 en intégrale de 1 à 3 ? (Piège 5)',
      options: [
        'Rien ne change',
        'L\'intégrale devient nulle',
        'Il faut absolument placer un signe moins devant la nouvelle intégrale',
        'C\'est mathématiquement impossible'
      ],
      bonneReponse: 2,
      explication: 'Inverser le sens de lecture inverse le signe du résultat (F(b) - F(a) devient F(a) - F(b)). Il faut donc compenser avec un signe moins devant !',
    },
    {
      type: 'quiz',
      id: 't3-c7-q4',
      question: 'Le jour J, si tu bloques complètement sur une démonstration de primitive depuis 5 minutes et que le chronomètre tourne, que fais-tu ? (Tactique 3)',
      options: [
        'J\'abandonne l\'exercice entier',
        'Je reste bloqué dessus jusqu\'à trouver, c\'est une question de fierté',
        'J\'écris "Admettons ce résultat" et je l\'utilise pour calculer les aires dans les questions suivantes pour rafler les points',
        'Je recommence tout au brouillon'
      ],
      bonneReponse: 2,
      explication: 'La tactique du Saut de Secours ! Ne sacrifie pas 5 points à cause d\'un seul point bloquant. Admets le résultat et poursuis ton devoir.',
    },
    {
      type: 'quiz',
      id: 't3-c7-q5',
      question: 'À quelle exception absolue NE FAUT-IL JAMAIS appliquer la règle des puissances (sous peine de division par zéro) ?',
      options: [
        'x²',
        '1/x (ou x⁻¹)',
        'e^x',
        'La racine carrée'
      ],
      bonneReponse: 1,
      explication: 'La fraction 1/x est l\'exception absolue. Si on utilise x^(n+1)/(n+1) avec n=-1, on obtient x^0/0 ! Sa primitive est toujours ln|x|.',
    }
  ],
};
