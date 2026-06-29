import { Chapitre } from '../../types/course';

export const chapitreAnnexe: Chapitre = {
  id: 't2-annexe',
  titre: `Annexes — Formulaire & Fiches de Révision`,
  duree: 10,
  niveau: 'BAC',
  xpGain: 15,
  sections: [
    {
      id: 's-intro',
      titre: `Ton arsenal de secours`,
      blocs: [
        {
          type: 'text',
          id: 'b-intro',
          contenu: `Assieds-toi deux minutes, Champion(ne). On a traversé tout ce tome, mesuré des vitesses, lu le relief des courbes, tracé des tangentes et manié les outils d'élite du BAC D. Mais avant de t'installer face à l'épreuve réelle, il te faut une ceinture de munitions bien garnie.

Ces annexes, c'est ton arsenal de secours. Pas de bavardage inutile, juste le concentré pur de ce qui sauve ta copie le jour J. Garde ce bloc sous les yeux pendant tes révisions intensives.`,
        },
      ],
    },
    {
      id: 's-a',
      titre: `A. Le Formulaire Complet 📌`,
      blocs: [
        {
          type: 'text',
          id: 'b-a1',
          contenu: `Voici regroupées toutes les Règles d'Or du tome. Ce sont les formules exactes que tu dois avoir gravées avant d'entrer en salle de composition.

**① Les dérivées usuelles**`,
        },
        {
          type: 'table',
          id: 'tbl-usuelles',
          headers: [`Fonction $f(x)$`, `Dérivée $f'(x)$`, `Domaine de dérivabilité`],
          rows: [
            [`$k$ (constante)`, `$0$`, `$\\mathbb{R}$`],
            [`$ax + b$`, `$a$`, `$\\mathbb{R}$`],
            [`$x^n$ ($n \\in \\mathbb{Z}^*$)`, `$nx^{n-1}$`, `$\\mathbb{R}$ si $n > 0$ · $\\mathbb{R}^*$ si $n < 0$`],
            [`$\\dfrac{1}{x}$`, `$-\\dfrac{1}{x^2}$`, `$\\mathbb{R}^*$`],
            [`$\\sqrt{x}$`, `$\\dfrac{1}{2\\sqrt{x}}$`, `$]0\\ ;\\ +\\infty[$ — le $0$ est exclu !`],
            [`$\\cos x$`, `$-\\sin x$`, `$\\mathbb{R}$`],
            [`$\\sin x$`, `$\\cos x$`, `$\\mathbb{R}$`],
          ],
        },
        {
          type: 'text',
          id: 'b-a2',
          contenu: `**② Les règles de calcul**`,
        },
        {
          type: 'table',
          id: 'tbl-regles',
          headers: [`Opération`, `Formule`, `À retenir`],
          rows: [
            [`Somme`, `$(u + v)' = u' + v'$`, `On dérive chaque morceau séparément.`],
            [`Produit`, `$(u \\cdot v)' = u'v + uv'$`, `Relais croisé — jamais $u' \\times v'$.`],
            [`Quotient`, `$\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}$`, `Soustraction au numérateur · carré en bas · $v \\neq 0$.`],
            [`Inverse`, `$\\left(\\dfrac{1}{v}\\right)' = -\\dfrac{v'}{v^2}$`, `Cas particulier du quotient avec $u = 1$.`],
            [`Puissance $(u^n)$`, `$(u^n)' = n\\,u^{n-1}\\,u'$`, `La dérivée interne $u'$ sort devant — obligatoire.`],
            [`Racine $(\\sqrt{u})$`, `$(\\sqrt{u})' = \\dfrac{u'}{2\\sqrt{u}}$`, `Même logique — $u'$ au numérateur, $u > 0$.`],
          ],
        },
        {
          type: 'rule',
          id: 'rule-a3',
          titre: `③ L'équation de la tangente (Module 5)`,
          contenu: `$$y = f'(x_0)(x - x_0) + f(x_0)$$

La pente est $f'(x_0)$ (devant la parenthèse), la hauteur est $f(x_0)$ (en bout de formule). **Cas particuliers :** tangente horizontale si $f'(x_0) = 0$ ; tangente parallèle à $y = ax + b$ si $f'(x_0) = a$.

**Position de la courbe par rapport à $(T)$ :** étudier le signe de $f(x) - T(x)$. Positif → courbe au-dessus ; négatif → en dessous ; nul → contact.`,
        },
        {
          type: 'rule',
          id: 'rule-a4',
          titre: `④ Le lien signe de $f'$ → variations (Module 4)`,
          contenu: `$$f'(x) > 0 \\text{ sur } I \\implies f \\text{ strictement croissante sur } I$$
$$f'(x) < 0 \\text{ sur } I \\implies f \\text{ strictement décroissante sur } I$$

$f$ admet un **extremum local** en $a$ si et seulement si $f'$ s'annule en $a$ **en changeant de signe**. Passage de $+$ à $-$ → maximum ; de $-$ à $+$ → minimum.`,
        },
        {
          type: 'rule',
          id: 'rule-a5',
          titre: `⑤ L'Inégalité des Accroissements Finis (Module 6)`,
          contenu: `Si $f$ est continue sur $[a\\ ;\\ b]$, dérivable sur $]a\\ ;\\ b[$, et s'il existe $M \\geq 0$ tel que $|f'(x)| \\leq M$ pour tout $x \\in\\ ]a\\ ;\\ b[$, alors :
$$|f(b) - f(a)| \\leq M\\,|b - a|$$

Version double (encadrement) : si $m \\leq f'(x) \\leq M$, alors $m(b-a) \\leq f(b) - f(a) \\leq M(b-a)$. Le majorant $M$ doit valoir sur **tout** l'intervalle, pas seulement aux bornes.`,
        },
        {
          type: 'rule',
          id: 'rule-a6',
          titre: `⑥ La dérivée de la fonction réciproque (Module 6)`,
          contenu: `Soit $f$ bijective et dérivable sur $I$. Pour $a \\in I$ et $b = f(a)$, si $f'(a) \\neq 0$ :
$$(f^{-1})'(b) = \\dfrac{1}{f'\\!\\left(f^{-1}(b)\\right)} = \\dfrac{1}{f'(a)}$$

On utilise toujours l'**antécédent** $a$ (tel que $f(a) = b$), jamais l'image $b$.`,
        },
      ],
    },
    {
      id: 's-b',
      titre: `B. La Charte Typographique de la Copie BAC 📐`,
      blocs: [
        {
          type: 'text',
          id: 'b-b1',
          contenu: `Ces règles d'écriture sont scrutées par le correcteur. Une notation hors norme = des points perdus.`,
        },
        {
          type: 'table',
          id: 'tbl-charte',
          headers: [`Élément`, `Notation correcte (BAC ivoirien)`, `Notation BANNIE`],
          rows: [
            [`Intervalle ouvert`, `]a ; b[`, `(a, b) ou (a; b)`],
            [`Intervalle fermé`, `[a ; b]`, `inchangé`],
            [`Intervalle infini`, `]-∞ ; a]  ou  [a ; +∞[`, `(-∞, a] ou [a, +∞)`],
            [`Ensemble de définition`, `Df = ℝ \\ {a}  ou  ]-∞ ; a[ ∪ ]a ; +∞[`, `x ≠ a (réservé au brouillon)`],
            [`Symboles d'ensembles`, `ℝ, ℕ, ℤ, ℚ, ℂ (blackboard bold)`, `R, N, Z, Q, C (majuscule simple)`],
            [`Séparateur décimal`, `3,14 (virgule)`, `3.14 (point)`],
            [`Couples / coordonnées / bornes`, `A(3 ; 5)  ou  ]a ; b[`, `A(3, 5) ou ]a, b[`],
            [`Dérivée`, `f'(x) (prime collé)`, `f \`(x), df/dx (réservé au supérieur)`],
            [`Nombre dérivé en un point`, `f'(a)`, `f'(x=a)`],
            [`Réciproque`, `f⁻¹  ·  (f⁻¹)'(b)`, `1/f, f^(-1) sans parenthèses`],
          ],
        },
      ],
    },
    {
      id: 's-c',
      titre: `C. Le Vocabulaire Officiel du BAC 📘`,
      blocs: [
        {
          type: 'text',
          id: 'b-c1',
          contenu: `Voici les termes officiels à placer sur ta copie pour chaque module. Le correcteur vérifie systématiquement leur présence.`,
        },
        {
          type: 'table',
          id: 'tbl-vocab',
          headers: [`Module`, `Vocabulaire à placer sur la copie`, `Phrase modèle`],
          rows: [
            [`M1 — Nombre dérivé`, `Taux de variation, nombre dérivé, dérivable en a, tangente en a`, `« Le taux de variation admet une limite finie en 0, donc f est dérivable en a et f'(a) = ... »`],
            [`M2 — Fonction dérivée`, `Fonction dérivée, dérivées usuelles, domaine de dérivabilité`, `« f est dérivable sur ]0 ; +∞[ et f'(x) = ... »`],
            [`M3 — Règles de calcul`, `Dérivée d'une somme, d'un produit, d'un quotient, d'une composée, dérivée interne`, `« f est dérivable comme quotient de fonctions dérivables ; par la règle du quotient, f'(x) = ... »`],
            [`M4 — Variations`, `Strictement croissante / décroissante, fonction monotone, extremum local, maximum global`, `« f'(x) > 0 sur I, donc f est strictement croissante sur I. »`],
            [`M5 — Tangente`, `Point de contact, coefficient directeur, tangente horizontale, position relative`, `« (T) a pour coefficient directeur f'(x₀) et passe par le point de contact (x₀ ; f(x₀)). »`],
            [`M6 — IAF & Réciproque`, `Accroissements finis, majorant, fonction injective, bijection, réciproque, antécédent`, `« f continue sur [a;b], dérivable sur ]a;b[ avec |f'(x)| ≤ M, l'IAF donne |f(b)−f(a)| ≤ M|b−a|. »`],
          ],
        },
      ],
    },
    {
      id: 's-d',
      titre: `D. Le Cimetière des Points ⚠️`,
      blocs: [
        {
          type: 'text',
          id: 'b-d1',
          contenu: `J'ai rassemblé les pires erreurs d'inattention qui font perdre des points bêtement au BAC. Regarde bien ce qu'il ne faut pas faire et retiens la correction.`,
        },
        {
          type: 'table',
          id: 'tbl-cimetiere',
          headers: [`Erreur classique constatée sur les copies`, `La correction du Grand Frère pour sauver tes points`],
          rows: [
            [`Écrire que la dérivée d'un produit est $(u \\cdot v)' = u' \\cdot v'$.`, `La dérivée d'un produit n'est pas le produit des dérivées : les deux composants interagissent. Applique le relais croisé $(u \\cdot v)' = u'v + uv'$.`],
            [`Mettre un $+$ au numérateur du quotient : $\\dfrac{u'v + uv'}{v^2}$.`, `C'est la formule du produit, pas du quotient. Le quotient impose une soustraction : $\\dfrac{u'v - uv'}{v^2}$.`],
            [`Écrire que $\\sqrt{x}$ est dérivable sur $[0\\ ;\\ +\\infty[$.`, `En $0$, le taux de variation tend vers $+\\infty$ : la dérivée n'existe pas. Le domaine de dérivabilité est strictement $]0\\ ;\\ +\\infty[$.`],
            [`Oublier la dérivée interne : $(\\cos(2x))' = -\\sin(2x)$.`, `La variable intérieure $2x$ n'est pas un simple $x$ : sa dérivée sort devant. $(\\cos(2x))' = -2\\sin(2x)$.`],
            [`Conclure à un extremum dès que $f'(x_0) = 0$.`, `La dérivée peut s'annuler sans changer de signe (point d'inflexion). Un extremum exige que $f'$ s'annule ET change de signe en $x_0$.`],
            [`Confondre $f(x_0)$ (la hauteur) et $f'(x_0)$ (la pente) dans la tangente.`, `Pose les deux séparément : la pente $f'(x_0)$ devant la parenthèse, la hauteur $f(x_0)$ en bout de formule.`],
            [`Développer $(v(x))^2$ après avoir dérivé un quotient.`, `Inutile et source d'erreurs : un carré est toujours positif. Laisse $(v(x))^2$ tel quel et étudie seulement le signe du numérateur.`],
            [`Choisir $M = |f'(a)|$ en un seul point pour l'IAF.`, `$|f'|$ peut être plus grand ailleurs. Encadre $|f'(x)|$ sur tout l'intervalle pour trouver le vrai majorant.`],
            [`Appliquer $(f^{-1})'(b) = \\dfrac{1}{f'(b)}$ avec l'image.`, `On utilise la vitesse au point de départ : $(f^{-1})'(b) = \\dfrac{1}{f'(a)}$ où $a = f^{-1}(b)$. Trouve d'abord l'antécédent $a$.`],
            [`Écrire un intervalle ouvert avec des parenthèses : $(a, b)$.`, `Norme anglo-saxonne, bannie au BAC ivoirien. Toujours $]a\\ ;\\ b[$ avec crochets inversés et point-virgule.`],
          ],
        },
      ],
    },
    {
      id: 's-e',
      titre: `E. La Carte de Couverture BAC 🎯`,
      blocs: [
        {
          type: 'text',
          id: 'b-e1',
          contenu: `Voici la carte exacte des compétences blindées tout au long de ce tome. Chaque exercice-type correspond directement à une question incontournable des sujets officiels du Baccalauréat Série D en Côte d'Ivoire.`,
        },
        {
          type: 'table',
          id: 'tbl-couverture',
          headers: [`Module de formation`, `Situations et questions BAC couvertes`, `Exercices-Types`, `Salle d'Examen`],
          rows: [
            [`M1 — Le nombre dérivé`, `Taux de variation · dérivabilité en un point · interprétation de la pente.`, `2`, `Ex 1`],
            [`M2 — La fonction dérivée`, `Domaines de dérivabilité · puissances · fonctions de référence.`, `3`, `—`],
            [`M3 — Les règles de calcul`, `Produits polynôme × trig · quotients rationnels · puissance et racine composées.`, `5`, `Sujet, Ex 2, Ex 3`],
            [`M4 — Les variations`, `Signe de $f'$ · résolution de $f'(x)=0$ · tableau de variations · extrema · inégalité par le minimum.`, `4`, `Sujet, Ex 2, Ex 4, Ex 6`],
            [`M5 — La tangente`, `Tangente en un point · horizontale · parallèle · appartenance · position de la courbe.`, `5`, `Sujet, Ex 1, Ex 3, Ex 4`],
            [`M6 — IAF et $(f^{-1})'$`, `Encadrement par IAF · injectivité · bijection · calcul de $(f^{-1})'$ en un point.`, `3`, `Sujet, Ex 5, Ex 6`],
            [`TOTAL`, `Maîtrise complète du bloc « Dérivation » de l'épreuve de mathématiques Série D.`, `22`, `Sujet complet + 6`],
          ],
        },
      ],
    },
    {
      id: 's-f',
      titre: `F. Les 10 Réflexes du Dérivateur 🚀`,
      blocs: [
        {
          type: 'text',
          id: 'b-f1',
          contenu: `*À relire 5 minutes avant l'épreuve, Champion(ne). C'est ta check-list de survie.*`,
        },
        {
          type: 'table',
          id: 'tbl-reflexes',
          headers: [`#`, `Le réflexe`, `Pourquoi c'est important`],
          rows: [
            [`1`, `Lire le sujet en entier avant d'écrire`, `La dérivée de la Partie A nourrit les variations, la tangente ou l'IAF de la Partie B. Anticiper t'évite de calculer dans la mauvaise direction.`],
            [`2`, `Identifier la structure de f avant de dériver`, `Somme, produit, quotient ou composée ? Cette lecture décide de la règle à appliquer. La rater fausse tout dès la première ligne.`],
            [`3`, `Justifier la dérivabilité sur la copie`, `« f est dérivable sur I comme somme / produit / quotient de fonctions dérivables. » Le correcteur accorde des points pour cette phrase.`],
            [`4`, `Dériver au brouillon, recopier au propre`, `Pose $u$, $v$, $u'$, $v'$ au brouillon, nettoie, puis recopie seulement le résultat réduit. Jamais de calcul brut sur la copie.`],
            [`5`, `Ne jamais développer $(v(x))^2$`, `Un carré est toujours positif : note-le et concentre ton attention sur le seul signe du numérateur.`],
            [`6`, `Emballer toute valeur négative dans des parenthèses`, `$(-2)^2 = 4$ mais $-2^2 = -4$. Cette confusion fait plus de dégâts que n'importe quel calcul de dérivée.`],
            [`7`, `La tangente en 30 secondes : deux briques`, `Au brouillon, deux cases : la hauteur $f(x_0)$ et la pente $f'(x_0)$. Tu remplaces dans $y = f'(x_0)(x-x_0)+f(x_0)$, tu développes.`],
            [`8`, `Relier le signe de f' à la variation, en toutes lettres`, `« $f'(x) > 0$ sur $I$, donc $f$ est strictement croissante sur $I$. » Annoncer la variation sans citer le signe de $f'$ ne rapporte rien.`],
            [`9`, `Pour $(f^{-1})'$, chercher l'antécédent en premier`, `Écris « je cherche $a$ tel que $f(a) = b$ ». Une fois $a$ trouvé et $f'(a) \\neq 0$ vérifié, la formule devient évidente.`],
            [`10`, `Vérifier la conformité typographique avant de rendre`, `Intervalles ]a ; b[, virgule décimale 3,14, ensembles ℝ \\ {a}. Une seule notation anglo-saxonne peut agacer le correcteur.`],
          ],
        },
      ],
    },
    {
      id: 's-fin',
      titre: `🎉 On a gâté le coin, Champion(ne)`,
      blocs: [
        {
          type: 'text',
          id: 'b-fin',
          contenu: `Si tu es arrivé(e) jusqu'ici, c'est que **tu as fait le travail**. Pas par hasard. Pas par chance. Par méthode. C'est ça, la différence entre celui qui subit le BAC et celui qui le domine. Tu es passé(e) du deuxième côté.

Le **Tome 3 — Primitives & Intégrales** — t'attend. Tu y feras le chemin inverse de la dérivation : repartir de la vitesse pour reconstruire la distance, et calculer des aires sous les courbes. Tu y retrouveras exactement la même mécanique : un Grand Frère, un Petit Frère, la brique 📘 Langage Officiel du BAC, la Copie Parfaite, et la promesse qu'on **comprend avant de calculer**. À très vite.

— *Marius Dion*`,
        },
        {
          type: 'tip',
          id: 'tip-contact',
          titre: `📞 Restons en contact`,
          contenu: `- **Boutique** · [selar.com/m/eductome](https://selar.com/m/eductome)
- **Facebook** · Eductome
- **WhatsApp** · (+225) 07 99 50 63 00

*EDUCTOME — Apprendre sans limites.* © 2026 Marius Dion · Tous droits réservés`,
        },
      ],
    },
  ],
};
