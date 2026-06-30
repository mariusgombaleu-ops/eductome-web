import { Chapitre } from '../../types/course';

export const chapitreM2: Chapitre = {
  id: 't12-m2',
  titre: `Module 2 — Stratégie complète BAC D`,
  duree: 26,
  niveau: 'MOYEN',
  xpGain: 28,
  objectifs: [
    `Décoder instantanément l'anatomie d'un sujet officiel pour ne pas paniquer`,
    `Gérer tes 4 heures de composition minute par minute, sans calculatrice`,
    `Nommer et appliquer les 5 « points gratuits » qui tombent à chaque session`,
    `Activer les 10 réflexes de survie pour arracher chaque quart de point`,
    `Transformer un résultat « admis » en points sur les questions suivantes`,
  ],
  sections: [
    {
      id: 's1',
      titre: `L'anatomie d'un sujet, et le plan de vol`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, quand je vois un sujet entier de 4 heures, je panique direct. Par où je commence pour ne pas perdre mes moyens ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Calme, Champion(ne). Un match ne se gagne pas en fonçant tête baissée. Le sélectionneur des Éléphants ne lâche pas ses joueurs au hasard sur la pelouse : il y a un plan de jeu, un ordre, une gestion du temps. Ton épreuve, c'est exactement ça. On va décortiquer l'anatomie d'un sujet, poser un plan de vol pour tes 4 heures, et te donner 10 réflexes qui font la différence entre celui qui subit et celui qui domine.`,
        },
        {
          type: 'text',
          id: 'b1',
          contenu: `Un sujet de BAC D, Champion(ne), c'est presque toujours deux exercices courts (probabilités, complexes, géométrie, suites…) puis un grand problème d'analyse sur 10 points. Foncer dans le désordre, c'est se faire déborder. Voici l'ordre d'attaque qui sécurise la moyenne avant même d'entrer dans la zone rouge.`,
        },
        {
          type: 'table',
          id: 'tbl-ordre',
          headers: [`Étape`, `Action tactique`, `Durée`, `Objectif`],
          rows: [
            [`1`, `Lecture globale et repérage des questions liées`, `15 min`, `Prendre de la hauteur, repérer les types de questions.`],
            [`2`, `Résolution complète de l'Exercice 1`, `45 min`, `Se mettre en confiance, empocher les premiers points.`],
            [`3`, `Résolution complète de l'Exercice 2`, `45 min`, `Sécuriser la moyenne avant la zone rouge.`],
            [`4`, `Attaque ciblée du grand problème d'analyse`, `120 min`, `40 min de brouillon tactique, 80 min de Copie Parfaite.`],
            [`5`, `Vérification finale et toilettage visuel`, `15 min`, `Traquer les erreurs de signe, encadrer les résultats.`],
          ],
        },
        {
          type: 'figure',
          id: 'fig-m2-1',
          src: '/images/t12/fig_M2_1.png',
          legende: `Le plan de vol : 15 min de lecture, 45+45 min d'exercices, 120 min de problème, 15 min de vérification.`,
          alt: `Frise chronologique des 5 étapes de l'épreuve réparties sur 240 minutes.`,
        },
      ],
    },
    {
      id: 's2',
      titre: `Où sont les points`,
      blocs: [
        {
          type: 'text',
          id: 'b2',
          contenu: `Sur 20 points, le grand problème en vaut 10 à lui seul, Champion(ne). Mais les deux exercices courts pèsent autant à eux deux : c'est là qu'on sécurise la moyenne avant la zone rouge.`,
        },
        {
          type: 'figure',
          id: 'fig-m2-2',
          src: '/images/t12/fig_M2_2.png',
          legende: `Répartition des 20 points : deux exercices à 5 points et un grand problème à 10 points.`,
          alt: `Diagramme de répartition : Exercice 1 (5 pts), Exercice 2 (5 pts), grand problème (10 pts).`,
        },
        {
          type: 'rule',
          id: 'rule-gratuits',
          titre: `Les 5 points gratuits`,
          contenu: `Apprends ces configurations par cœur : elles tombent à chaque session et offrent des points immédiats dès que la formule est posée proprement.
$$y=f'(a)(x-a)+f(a)\\qquad\\text{(tangente au point d'abscisse } a)$$
$$\\displaystyle\\int_0^1 e^x\\,dx=e-1$$
$$u_n=u_0+n\\,d\\qquad\\text{(suite arithmétique)}$$
$$|z|=\\sqrt{a^2+b^2}\\qquad\\text{et}\\qquad \\overline{z}=a-ib$$
$$y'+ay=0 \\;\\Longrightarrow\\; y(x)=Ce^{-ax}\\quad (C\\in\\mathbb{R})$$`,
        },
      ],
    },
    {
      id: 's3',
      titre: `Les 10 réflexes de survie`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-reflexes',
          headers: [`Réflexe`, `Explication tactique`, `Exemple au BAC`],
          rows: [
            [`1. Aucun carré blanc`, `Même bloqué, écris la formule générale liée à la notion : le correcteur cherche des motifs pour te donner des points.`, `Écris la formule du taux de variation si on demande la dérivabilité.`],
            [`2. Justification systématique`, `Un résultat parachuté sans texte est souvent refusé.`, `Précise que le dénominateur ne s'annule pas avant de conclure.`],
            [`3. Sanctuariser le brouillon`, `Fais les calculs complexes à l'écart pour garder une copie propre.`, `Déroule la dérivée d'un quotient au brouillon avant de poser le net.`],
            [`4. Test de plausibilité`, `Vérifie la cohérence de tes réponses avec les lois mathématiques.`, `Une probabilité reste dans $[\\,0\\,;\\,1\\,]$, une distance est positive.`],
            [`5. Règle des 5 minutes`, `Si tu tournes en rond, passe à la question suivante.`, `Laisse un espace propre et avance vers la construction graphique.`],
            [`6. Exploiter les bouées`, `Les « Montrer que » et « On admet que » te donnent la réponse pour la suite.`, `Utilise la limite donnée par l'énoncé pour trouver l'asymptote.`],
            [`7. Clarté méthodique`, `Une seule ligne par étape de calcul, copie aérée.`, `Aligne tes symboles $\\iff$ verticalement pour guider l'œil.`],
            [`8. Vigilance sur les unités`, `Ne confonds pas aire et longueur sans vérifier le repère.`, `Termine un calcul d'intégrale par la mention $\\text{u.a.}$`],
            [`9. Tableau de signes blindé`, `Jamais de flèches sans le signe de la dérivée au-dessus.`, `Détaille l'annulation du facteur avant de dresser le tableau.`],
            [`10. Phrase de conclusion`, `Toute réponse se termine par une phrase en français.`, `« Le point d'inflexion a pour coordonnées $(1\\,;\\,2)$. »`],
          ],
        },
        {
          type: 'dialogue',
          id: 'dlg3',
          pf: `Mais Grand Frère, si je n'arrive pas à faire la démonstration de la question 2.a), j'ai vraiment le droit d'utiliser ce résultat dans la 2.b) ? Le prof ne va pas me barrer ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg4',
          gf: `Jamais de la vie, Champion(ne) ! C'est la magie des règles du BAC. Si le sujet dit « Montrer que $f(x)=\\dfrac{x}{x+1}$ » et que tu n'as pas trouvé le chemin, tu écris : « D'après la question 2.a), on admet que $f(x)=\\dfrac{x}{x+1}$ », et tu enchaînes pour dériver ou calculer la limite. Tu empoches tous les points de la 2.b) sans remords.`,
        },
      ],
    },
    {
      id: 's-bac',
      titre: `📘 LANGAGE OFFICIEL DU BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b3',
          contenu: `Champion(ne), la stratégie aussi a son vocabulaire : ce sont les mots qui montrent au correcteur que tu maîtrises les règles de l'épreuve.

**Définition formelle.** Une **question intermédiaire admise** (« On admet que… », « Montrer que… ») fournit un résultat que tu peux réinvestir dans la suite **même si tu n'as pas su la démontrer**, à condition de citer explicitement la référence.

**En langage courant.** Une bouée de sauvetage : la réponse t'est offerte pour la suite, sers-t'en.`,
        },
        {
          type: 'warning',
          id: 'warn-vocab',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **« D'après la question … »** — pour réinvestir un résultat admis.
- **« On admet que … »** — pour signaler que tu utilises une donnée de l'énoncé.
- **« en unités d'aire ($\\text{u.a.}$) »** — pour conclure un calcul d'aire.
- **« dans un repère orthonormé direct »** — à poser avant tout calcul de géométrie.`,
        },
        {
          type: 'tip',
          id: 'tip-retenir',
          titre: `À retenir`,
          contenu: `Le correcteur ne pénalise pas l'usage d'un résultat admis correctement cité. La phrase « D'après la question précédente, on a … » est ta meilleure alliée.`,
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
          headers: [`Défi tactique au BAC`, `Réflexe associé`, `Gain au barème`],
          rows: [
            [`Une dérivée qui semble monstrueuse.`, `Réflexe 3 : sanctuariser le brouillon, décomposer en $u$ et $v$.`, `Garantit les points de structure.`],
            [`Blocage sur la première limite du grand problème.`, `Réflexes 5 et 6 : sauter la question, utiliser la bouée.`, `Maintient le rythme sans perdre de minutes.`],
            [`Il reste 10 minutes et la fin est vide.`, `Réflexe 1 : écrire au moins les formules générales.`, `Arrache des fractions de points à la correction.`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 1 — La tangente malgré le trou de mémoire** *(BASE)*. Soit $f$ définie sur $]\\,0\\,;\\,+\\infty\\,[$ par $f(x)=x-2+\\ln(x)$, de courbe $(\\mathcal{C})$. Détermine l'équation de la tangente $(T)$ à $(\\mathcal{C})$ au point d'abscisse $1$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Active la liste des points gratuits : même avec un maillon manquant, poser la structure de la tangente sauve la moitié des points.` },
            { name: `Étape 1`, contenu: `Formule générale au point $a=1$ : $y=f'(1)(x-1)+f(1)$.` },
            { name: `Étape 2`, contenu: `$f(1)=1-2+\\ln(1)=-1$.` },
            { name: `Étape 3`, contenu: `$f'(x)=1+\\dfrac{1}{x}$, donc $f'(1)=2$.` },
          ],
          reponse: `$(T):\\,y=2x-3$.`,
          conseil: `Écris toujours la formule générale avec $a$ ou $x_0$ avant de remplacer : le correcteur attribue des points à la formule de cours même si le calcul numérique dérape.`,
          piege: `Une tangente est une **droite** $y=mx+p$. Si ta réponse finale ne contient pas $y$ et $x$, ta droite n'existe pas.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$f$ est dérivable sur $]\\,0\\,;\\,+\\infty\\,[$. L'équation de la tangente au point d'abscisse $1$ est $y=f'(1)(x-1)+f(1)$.
On a $f(1)=1-2+\\ln(1)=-1$ et, pour $x>0$, $f'(x)=1+\\dfrac{1}{x}$ d'où $f'(1)=2$.
$$y=2(x-1)-1 \\iff (T):\\,y=2x-3.$$

*[Barème type BAC : formule générale = 0,5 pt — calcul de $f(1)$ et $f'(1)$ = 0,5 pt — équation réduite = 0,5 pt — Total : 1,5 pt]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'MOYEN',
          enonce: `🟡 **Exercice-Type 2 — Exploiter l'équation donnée** *(MOYEN)*. Dans un exercice de géométrie dans l'espace, l'énoncé donne l'équation cartésienne du plan $(P): 2x-y+3z-5=0$. Un élève s'est trompé au brouillon et a trouvé une autre équation. On demande la distance du point $A(1\\,;\\,2\\,;\\,1)$ au plan $(P)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Réflexe 6 (exploiter la bouée) + Réflexe 4 (plausibilité) : abandonner le brouillon faux et utiliser l'équation fournie.` },
            { name: `Étape 1`, contenu: `Constater l'écart, sans chercher l'erreur plus de 3 minutes.` },
            { name: `Étape 2`, contenu: `Adopter l'équation officielle : $2x-y+3z-5=0$.` },
            { name: `Étape 3`, contenu: `Appliquer la formule de la distance avec les coordonnées de $A$.` },
          ],
          reponse: `$d(A,(P))=\\dfrac{|2(1)-2+3(1)-5|}{\\sqrt{4+1+9}}=\\dfrac{2}{\\sqrt{14}}=\\dfrac{\\sqrt{14}}{7}$ unité de longueur.`,
          conseil: `Une distance est toujours positive : garde la valeur absolue au numérateur.`,
          piege: `Ne perds pas de temps à chercher ton erreur de brouillon : la donnée de l'énoncé fait foi.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `On utilise l'équation du plan donnée par l'énoncé : $2x-y+3z-5=0$.
$$d(A,(P))=\\dfrac{|2(1)-(2)+3(1)-5|}{\\sqrt{2^2+(-1)^2+3^2}}=\\dfrac{|-2|}{\\sqrt{14}}=\\dfrac{2}{\\sqrt{14}}=\\dfrac{\\sqrt{14}}{7}.$$
La distance du point $A$ au plan $(P)$ est $\\dfrac{\\sqrt{14}}{7}$ unité de longueur.

*[Barème type BAC : usage de l'équation donnée = 0,25 pt — formule = 0,5 pt — calcul exact = 0,25 pt — Total : 1 pt]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et3',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 3 — Déduire les variations d'un résultat admis** *(BAC)*. Soit $f$ définie sur $\\mathbb{R}$ par $f(x)=x\\,e^{-x}+x$. On admet que $f'(x)=g(x)\\,e^{-x}$, où $g(x)=1-x+e^{x}$, et que pour tout réel $x$, $g(x)>0$. Déduis-en le sens de variation de $f$ et dresse son tableau de variations (on admet $\\displaystyle\\lim_{x\\to-\\infty}f(x)=-\\infty$ et $\\displaystyle\\lim_{x\\to+\\infty}f(x)=+\\infty$).`,
          etapes: [
            { name: `Diagnostic`, contenu: `Réflexe 6 + Réflexe 9 : même si la dérivation n'est pas démontrée, la formule de $f'$ est donnée. On fait une étude de signe parfaite de $g(x)\\,e^{-x}$.` },
            { name: `Étapes 1–2`, contenu: `Signe des facteurs de $f'(x)=g(x)\\,e^{-x}$. Par hypothèse, $g(x)>0$ pour tout réel $x$.` },
            { name: `Étapes 3–4`, contenu: `Pour tout réel $x$, $e^{-x}>0$. Produit de deux facteurs strictement positifs : $f'(x)>0$, donc $f$ est strictement croissante.` },
          ],
          reponse: `$f'(x)>0$ sur $\\mathbb{R}$ : $f$ est strictement croissante de $-\\infty$ à $+\\infty$.`,
          conseil: `Prends le résultat admis comme une vérité acquise et sers-t'en directement.`,
          piege: `N'oublie pas de justifier que CHAQUE facteur est positif avant de conclure sur le produit.`,
        },
        {
          type: 'text',
          id: 'b-copie3',
          titre: `✍️ La Copie Parfaite`,
          contenu: `D'après l'énoncé, pour tout réel $x$, $f'(x)=g(x)\\,e^{-x}$.
Or $g(x)>0$ (admis) et $e^{-x}>0$ (propriété de l'exponentielle). Comme produit de deux termes strictement positifs :
$$f'(x)>0.$$
La fonction $f$ est donc strictement croissante sur $\\mathbb{R}$.`,
        },
        {
          type: 'table',
          id: 'tbl-tv',
          titre: `Tableau de variations`,
          headers: [`$x$`, `$-\\infty$`, `$+\\infty$`],
          rows: [
            [`$f'(x)$`, `$+$`, ``],
            [`$f(x)$`, `$-\\infty \\;\\nearrow\\; +\\infty$`, ``],
          ],
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Réflexe et réponse seulement.

- **Exercice 1.** Tangente à $f(x)=x^2$ au point d'abscisse $2$. *(Réponse : $y=4x-4$.)*
- **Exercice 2.** Distance de $O(0\\,;\\,0\\,;\\,0)$ au plan $x+2y-2z-6=0$. *(Réponse : $\\dfrac{6}{3}=2$.)*
- **Exercice 3.** Si $h'(x)=(x^2+1)e^{-x}$, quel est le sens de variation de $h$ sur $\\mathbb{R}$ ? *(Réponse : strictement croissante, car $h'(x)>0$.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m2',
          titre: `À retenir`,
          contenu: [
            `Le BAC D est un match tactique : l'ordre des questions et la gestion du temps comptent autant que les formules.`,
            `📘 Vocabulaire officiel : « D'après la question… », « On admet que… », « en unités d'aire », « repère orthonormé direct ».`,
            `Le geste-clé : repérer les énoncés « bouées » pour sauter une question bloquante et poursuivre la récolte des points.`,
            `Plan de vol : 15 min de lecture, 45 + 45 min pour les exercices, 120 min pour le problème, 15 min de vérification.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m2',
          titre: `Fil rouge`,
          contenu: `Tu as la carte (Module 1) et la stratégie (Module 2). Il est temps de passer en conditions réelles. Au Module 3, on ouvre un sujet BAC complet n°1 et on le corrige question par question, en appliquant tout ce plan de vol.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m2',
          titre: `Auto-évaluation — Module 2`,
          contenu: [
            `Je connais la structure et le barème indicatif d'un sujet de BAC D.`,
            `Je sais découper mes 4 heures selon le plan de vol EDUCTOME.`,
            `J'utilise le vocabulaire officiel (« On admet que… », « en unités d'aire ») dans mes copies.`,
            `Je maîtrise les 10 réflexes de survie pour ne jamais laisser une question blanche.`,
            `Je sais utiliser un résultat admis pour résoudre les questions suivantes.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m2',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Superbe, Champion(ne) ! Ton mental de stratège est en place, file vers le Module 3.`,
            `🟡 **3 ou 4** → Relis le tableau des 10 réflexes de survie.`,
            `🔴 **0 à 2** → Reprends l'analogie du match et du plan de vol : foncer sans plan est la plus grande erreur.`,
          ],
        },
      ],
    },
  ],
};
