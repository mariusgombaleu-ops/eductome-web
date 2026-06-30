import { Chapitre } from '../../types/course';

export const chapitreAnnexe: Chapitre = {
  id: 't7-annexe',
  titre: `Annexes — Formulaire & Réflexes BAC`,
  duree: 12,
  niveau: 'BASE',
  xpGain: 10,
  sections: [
    {
      id: 's-a',
      titre: `Annexe A — Formulaire du Tome 7`,
      blocs: [
        {
          type: 'text',
          id: 'b-a-intro',
          contenu: `Voici ton tableau de bord. Toutes les formules indispensables du programme ivoirien sont réunies pour tes révisions de dernière minute.`,
        },
        {
          type: 'table',
          id: 'tbl-formulaire',
          headers: [`Situation`, `Formule à appliquer`],
          rows: [
            [`Permutation de $n$ objets`, `$P_n = n!$`],
            [`Arrangement de $p$ parmi $n$ (ordre)`, `$A_n^p = \\dfrac{n!}{(n-p)!}$`],
            [`Combinaison de $p$ parmi $n$ (sans ordre)`, `$C_n^p = \\dfrac{n!}{p!\\,(n-p)!}$`],
            [`Équiprobabilité`, `$P(A) = \\dfrac{\\text{card}(A)}{\\text{card}(\\Omega)}$`],
            [`Événement contraire`, `$P(\\overline{A}) = 1 - P(A)$`],
            [`Réunion de deux événements`, `$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$`],
            [`Probabilité conditionnelle`, `$P_B(A) = \\dfrac{P(A \\cap B)}{P(B)}$`],
            [`Multiplication (chemin d'arbre)`, `$P(A \\cap B) = P(B)\\,P_B(A)$`],
            [`Indépendance de $A$ et $B$`, `$P(A \\cap B) = P(A) \\times P(B)$`],
            [`Probabilités totales`, `$P(A) = P(B)\\,P_B(A) + P(\\overline{B})\\,P_{\\overline{B}}(A)$`],
            [`Espérance mathématique`, `$E(X) = \\sum x_i\\, p_i$`],
            [`Variance (König-Huygens)`, `$V(X) = E(X^2) - [E(X)]^2$`],
            [`Écart-type`, `$\\sigma(X) = \\sqrt{V(X)}$`],
            [`Transformation affine`, `$E(aX+b) = aE(X)+b$ ; $V(aX+b) = a^2 V(X)$`],
            [`Loi binomiale ($k$ succès)`, `$P(X=k) = C_n^k\\, p^k (1-p)^{n-k}$`],
            [`Espérance et variance binomiales`, `$E(X) = np$ ; $V(X) = np(1-p)$`],
            [`Fonction de répartition`, `$F(x) = P(X \\leqslant x)$ ; $P(a < X \\leqslant b) = F(b) - F(a)$`],
          ],
        },
      ],
    },
    {
      id: 's-b',
      titre: `Annexe B — Charte typographique du BAC`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-charte',
          headers: [`Règle`, `Écriture correcte attendue`],
          rows: [
            [`Intervalle de probabilité`, `$\\left[\\,0\\ ;\\ 1\\,\\right]$ (crochets, point-virgule)`],
            [`Virgule décimale (jamais le point)`, `$0{,}135$ et non $0.135$`],
            [`Fraction irréductible`, `$\\dfrac{20}{56} = \\dfrac{5}{14}$`],
            [`Probabilité conditionnelle`, `$P_B(A)$ (ou $P(A/B)$), jamais $P(B/A)$ à la place`],
            [`Loi binomiale`, `$\\mathcal{B}(n\\,;\\,p)$, point-virgule entre les paramètres`],
            [`Coefficient binomial`, `$C_n^p$ (aussi noté $\\dbinom{n}{p}$)`],
            [`Espaces insécables avant ; : ! ?`, `« mot ; mot »`],
            [`Bornes de la fonction de répartition`, `Fermées à gauche, ouvertes à droite : $\\left[a\\ ;\\ b\\right[$`],
          ],
        },
      ],
    },
    {
      id: 's-c',
      titre: `Annexe C — Vocabulaire officiel à placer sur ta copie`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-vocab',
          headers: [`Terme officiel`, `Définition à connaître`],
          rows: [
            [`Univers $\\Omega$`, `Ensemble de toutes les issues d'une expérience aléatoire.`],
            [`Événement`, `Partie de l'univers ; élémentaire s'il contient une seule issue.`],
            [`Équiprobabilité`, `Toutes les issues ont la même probabilité.`],
            [`Événements incompatibles`, `$A \\cap B = \\varnothing$ : ne se réalisent pas ensemble.`],
            [`Permutation / arrangement / combinaison`, `Rangement total / choix ordonné / choix non ordonné.`],
            [`Probabilité conditionnelle $P_B(A)$`, `Probabilité de $A$ sachant que $B$ est réalisé.`],
            [`Partition de l'univers`, `Événements incompatibles dont la réunion est $\\Omega$.`],
            [`Indépendance`, `$P(A \\cap B) = P(A) \\times P(B)$.`],
            [`Variable aléatoire`, `Fonction associant un nombre réel à chaque issue.`],
            [`Espérance / variance / écart-type`, `Moyenne théorique / dispersion / racine de la variance.`],
            [`Épreuve et schéma de Bernoulli`, `Épreuve à deux issues ; sa répétition identique et indépendante.`],
            [`Loi binomiale $\\mathcal{B}(n\\,;\\,p)$`, `Loi du nombre de succès sur $n$ épreuves de Bernoulli.`],
            [`Fonction de répartition`, `$F(x) = P(X \\leqslant x)$, croissante, en escalier.`],
          ],
        },
      ],
    },
    {
      id: 's-d',
      titre: `Annexe D — Les 10 réflexes BAC du probabiliste`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-reflexes',
          headers: [`Le déclencheur`, `Le réflexe immédiat`],
          rows: [
            [`« de combien de façons »`, `Pose la question de l'ordre → arrangement ou combinaison.`],
            [`« simultanément », « en même temps »`, `Combinaison $C_n^p$, jamais d'arbre.`],
            [`« au hasard »`, `Justifie l'équiprobabilité avant de compter.`],
            [`« au moins un »`, `Passe par l'événement contraire $1 - P(\\text{aucun})$.`],
            [`« sachant que », « parmi les »`, `Probabilité conditionnelle $P_B(A)$.`],
            [`« sans remise »`, `Arbre pondéré : l'urne change au 2e tirage.`],
            [`Plusieurs scénarios de départ`, `Partition + formule des probabilités totales.`],
            [`« le jeu est-il équitable »`, `Calcule $E(X)$ et teste s'il vaut $0$.`],
            [`« on répète $n$ fois, indépendantes »`, `Loi binomiale : justifie, puis $C_n^k p^k(1-p)^{n-k}$.`],
            [`« fonction de répartition »`, `$F(x) = P(X \\leqslant x)$, tracé en escalier.`],
          ],
        },
      ],
    },
    {
      id: 's-e',
      titre: `Annexe E — Le cimetière des points`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-cimetiere',
          headers: [`L'erreur à éviter au BAC`, `La parade EDUCTOME`],
          rows: [
            [`Trouver une probabilité supérieure à $1$`, `On barre tout : une probabilité appartient à $\\left[\\,0\\ ;\\ 1\\,\\right]$.`],
            [`Confondre arrangement et combinaison`, `Pose la question de l'ordre ; $A_n^p = C_n^p \\times p!$.`],
            [`Faire un arbre pour un tirage simultané`, `Simultané = combinaisons, pas d'arbre.`],
            [`Penser que $P_B(A) = P_A(B)$`, `L'univers de référence change : ce sont deux probabilités différentes.`],
            [`Confondre indépendant et incompatible`, `Incompatible : $A \\cap B = \\varnothing$ ; indépendant : $P(A \\cap B) = P(A)P(B)$.`],
            [`Oublier de justifier la partition`, `Écris « forment une partition » avant les probabilités totales.`],
            [`Oublier la mise dans une variable aléatoire`, `Gain algébrique = lot gagné − prix du ticket.`],
            [`Confondre $E(X^2)$ et $[E(X)]^2$`, `Moyenne des carrés ≠ carré de la moyenne.`],
            [`Trouver une variance négative`, `Impossible : un écart au carré est positif ou nul.`],
            [`Oublier le coefficient $C_n^k$`, `Première chose à écrire dans $P(X=k)$.`],
            [`Tracer $F(x)$ comme un toboggan`, `Escalier : segments strictement horizontaux.`],
            [`Confondre $P(X < a)$ et $F(a)$`, `$F(a) = P(X \\leqslant a)$ ; l'inégalité large inclut $a$.`],
          ],
        },
      ],
    },
    {
      id: 's-f',
      titre: `Annexe F — Carte de couverture BAC`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-couverture',
          headers: [`Compétence BAC TleD`, `Module`, `Statut`],
          rows: [
            [`Dénombrement : permutations, arrangements, combinaisons`, `M1`, `✅ Couvert`],
            [`Coefficient binomial, Triangle de Pascal`, `M1`, `✅ Couvert`],
            [`Vocabulaire, univers, événements, équiprobabilité`, `M2`, `✅ Couvert`],
            [`Opérations sur les événements (réunion, contraire)`, `M2`, `✅ Couvert`],
            [`Probabilité conditionnelle et indépendance`, `M3`, `✅ Couvert`],
            [`Arbres pondérés et probabilités totales`, `M3`, `✅ Couvert`],
            [`Variables aléatoires : loi, $E(X)$, $V(X)$, écart-type`, `M4`, `✅ Couvert`],
            [`Épreuve de Bernoulli et loi binomiale`, `M5`, `✅ Couvert`],
            [`Fonction de répartition`, `M6`, `✅ Couvert`],
          ],
        },
        {
          type: 'text',
          id: 'b-f-fin',
          contenu: `**On a gâté le coin, Champion(ne) !** Tu es arrivé(e) au bout du Tome 7. Ce chapitre qui fait peur parce qu'il ne ressemble à rien de l'analyse, tu viens de le maîtriser de bout en bout. Le hasard ne te fait plus gnan : tu comptes, tu mesures, tu modélises, tu prévois. Le jour du BAC, tu seras celui ou celle qui comprend ce que les autres ont appris par cœur.

Garde cette énergie, Champion(ne). On se retrouve au Tome 8 pour faire le pont entre le hasard théorique et les données réelles. En attendant, révise avec ce tome, refais les dix combats de la Salle d'Entraînement, et fais confiance à ta méthode.

**Reste connecté(e) à EDUCTOME :**

- 📱 WhatsApp : (+225) 07 99 50 63 00
- 🛒 Boutique : selar.com/m/eductome
- 📘 Facebook : Eductome

**Marius Dion — Ton Grand Frère**
*EDUCTOME — Apprendre sans limites. La méthode avant la chance.*`,
        },
      ],
    },
  ],
};
