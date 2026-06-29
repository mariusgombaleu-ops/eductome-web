import { Chapitre } from '../../types/course';

export const chapitreAnnexe: Chapitre = {
  id: 't3-annexe',
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
          contenu: `Assieds-toi deux minutes, Champion(ne). On a traversé tout ce tome : on a reconstruit des trajectoires à partir de la vitesse, accumulé des aires sous des courbes et fait tourner des profils pour engendrer des volumes. Mais avant de t'installer face à l'épreuve réelle, il te faut une ceinture de munitions bien garnie.

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
          contenu: `**① Primitives des fonctions de référence** (sur tout intervalle où $f$ est définie)`,
        },
        {
          type: 'table',
          id: 'tbl-ref',
          headers: [`Fonction $f(x)$`, `Une primitive $F(x)$`, `Domaine`],
          rows: [
            [`$a$ (constante)`, `$ax$`, `$\\mathbb{R}$`],
            [`$x^n$ ($n \\in \\mathbb{N}$)`, `$\\dfrac{x^{n+1}}{n+1}$`, `$\\mathbb{R}$`],
            [`$\\dfrac{1}{x^2}$`, `$-\\dfrac{1}{x}$`, `$]0\\ ;\\ +\\infty[$ ou $]-\\infty\\ ;\\ 0[$`],
            [`$\\dfrac{1}{\\sqrt{x}}$`, `$2\\sqrt{x}$`, `$]0\\ ;\\ +\\infty[$`],
            [`$\\dfrac{1}{x}$`, `$\\ln|x|$`, `$]0\\ ;\\ +\\infty[$ ou $]-\\infty\\ ;\\ 0[$`],
            [`$\\sin x$`, `$-\\cos x$`, `$\\mathbb{R}$`],
            [`$\\cos x$`, `$\\sin x$`, `$\\mathbb{R}$`],
            [`$e^x$`, `$e^x$`, `$\\mathbb{R}$`],
          ],
        },
        {
          type: 'text',
          id: 'b-a2',
          contenu: `**② Primitives des formes composées**`,
        },
        {
          type: 'table',
          id: 'tbl-compose',
          headers: [`Forme $f(x)$`, `Une primitive $F(x)$`, `Point de vigilance`],
          rows: [
            [`$u'\\,u^n$ ($n \\neq -1$)`, `$\\dfrac{u^{n+1}}{n+1}$`, `Vérifier la puissance $n$, surtout si elle est négative.`],
            [`$\\dfrac{u'}{u}$`, `$\\ln|u|$`, `Ne jamais oublier les barres de valeur absolue.`],
            [`$\\dfrac{u'}{u^2}$`, `$-\\dfrac{1}{u}$`, `Le signe moins apparaît obligatoirement.`],
            [`$\\dfrac{u'}{\\sqrt{u}}$`, `$2\\sqrt{u}$`, `Le facteur 2 est un oubli classique.`],
            [`$u'\\,e^u$`, `$e^u$`, `S'assurer que $u'$ est complète, sinon compenser.`],
            [`$u'\\cos u$`, `$\\sin u$`, `Conserve le signe positif.`],
            [`$u'\\sin u$`, `$-\\cos u$`, `Le signe moins est requis.`],
            [`$f(ax+b)$`, `$\\dfrac{1}{a}F(ax+b)$`, `Diviser par le coefficient $a$ de l'argument affine.`],
          ],
        },
        {
          type: 'text',
          id: 'b-a3',
          contenu: `**③ Propriétés et techniques de l'intégrale**`,
        },
        {
          type: 'table',
          id: 'tbl-integral',
          headers: [`Propriété`, `Formule`, `À retenir`],
          rows: [
            [`Théorème fondamental`, `$\\int_a^b f(t)\\,dt = F(b) - F(a)$`, `$F$ est une primitive quelconque de $f$.`],
            [`Linéarité`, `$\\int_a^b (\\alpha f + \\beta g) = \\alpha\\int_a^b f + \\beta\\int_a^b g$`, `On coupe les sommes, on sort les constantes.`],
            [`Relation de Chasles`, `$\\int_a^b f + \\int_b^c f = \\int_a^c f$`, `Indispensable aux changements de signe.`],
            [`Inversion des bornes`, `$\\int_b^a f = -\\int_a^b f$`, `Inverser les bornes change le signe.`],
            [`Signe`, `$f \\ge 0$ et $a \\le b \\Rightarrow \\int_a^b f \\ge 0$`, `L'ordre des bornes est crucial.`],
            [`Valeur moyenne`, `$\\mu = \\dfrac{1}{b-a}\\int_a^b f$`, `Hauteur du rectangle de même aire.`],
            [`Intégration par parties`, `$\\int_a^b uv' = [uv]_a^b - \\int_a^b u'v$`, `Priorité ALPES (à partir du L) pour choisir $u$.`],
            [`Aire sous une courbe`, `$\\mathcal{A} = \\int_a^b |f(x)|\\,dx$ (u.a.)`, `Étudier le signe avant la valeur absolue.`],
            [`Aire entre deux courbes`, `$\\mathcal{A} = \\int_a^b |f - g|\\,dx$ (u.a.)`, `Intégrer haut $-$ bas après étude de position.`],
            [`Volume de révolution`, `$V = \\pi\\int_a^b [f(x)]^2\\,dx$ (u.v.)`, `Élever au carré ; conversion en cm³ au cube.`],
          ],
        },
      ],
    },
    {
      id: 's-b',
      titre: `B. La Charte Typographique BAC 📐`,
      blocs: [
        {
          type: 'text',
          id: 'b-b1',
          contenu: `Le correcteur lit aussi la **forme**. Voici les notations attendues sur une copie de Terminale D ivoirienne.`,
        },
        {
          type: 'table',
          id: 'tbl-charte',
          headers: [`Règle`, `À écrire`, `À éviter`],
          rows: [
            [`Intervalles avec crochets`, `$]a\\ ;\\ b[$, $[a\\ ;\\ +\\infty[$`, `$(a, b)$`],
            [`Séparateur point-virgule`, `$[0\\ ;\\ 1]$`, `$[0, 1]$`],
            [`Virgule décimale`, `$3,14$ ; $-0,5$`, `$3.14$`],
            [`Ensembles`, `$\\mathbb{R} \\setminus \\{a\\}$`, `R privé de a`],
            [`Limite en romain`, `$\\displaystyle\\lim_{x \\to a}$`, `lim en italique`],
            [`Fractions affichées`, `$\\dfrac{a}{b}$`, `$a/b$ dans un calcul posé`],
            [`Unités`, `u.a., u.v., $\\text{cm}^2$, $\\text{cm}^3$`, `cm pour une aire`],
            [`Asymptote (phrase complète)`, `« La droite d'équation $x = 2$ est asymptote… »`, `« asymptote $x=2$ » seul`],
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
          contenu: `Les mots exacts attendus par le correcteur, regroupés depuis les briques 📘 de chaque module.`,
        },
        {
          type: 'table',
          id: 'tbl-vocab',
          headers: [`Terme officiel`, `Ce qu'il désigne`],
          rows: [
            [`Primitive sur un intervalle $I$`, `Fonction $F$ dérivable telle que $F' = f$ sur $I$.`],
            [`Constante d'intégration`, `Le réel $C$ ; obligatoire tant qu'aucune condition n'est imposée.`],
            [`Condition initiale`, `L'égalité $F(x_0) = y_0$ qui fixe une primitive unique.`],
            [`Fonction composée`, `Une fonction emboîtée $g(u(x))$.`],
            [`Intégrale définie`, `Le nombre $\\int_a^b f(t)\\,dt = F(b) - F(a)$.`],
            [`Bornes d'intégration`, `$a$ (inférieure) et $b$ (supérieure).`],
            [`Linéarité de l'intégrale`, `Séparation des sommes et sortie des constantes.`],
            [`Relation de Chasles`, `Découpage $\\int_a^c = \\int_a^b + \\int_b^c$.`],
            [`Valeur moyenne`, `$\\mu = \\dfrac{1}{b-a}\\int_a^b f$.`],
            [`Intégration par parties`, `Technique d'intégration d'un produit ($[uv] - \\int u'v$).`],
            [`Changement de variable affine`, `Compensation par $\\dfrac{1}{a}$ pour $f(ax+b)$.`],
            [`Unité d'aire (u.a.)`, `$OI \\times OJ$, facteur de conversion vers les cm².`],
            [`Position relative`, `Laquelle de deux courbes est au-dessus de l'autre.`],
            [`Solide de révolution`, `Solide engendré par la rotation d'une courbe autour d'un axe.`],
            [`Unité de volume (u.v.)`, `$OI^3$ (repère orthonormé), conversion vers les cm³.`],
          ],
        },
      ],
    },
    {
      id: 's-d',
      titre: `D. Les 10 Réflexes BAC 🚀`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-reflexes',
          headers: [`N°`, `Le réflexe`, `Pourquoi ça compte`],
          rows: [
            [`1`, `Analyser la forme globale 10 secondes avant de calculer.`, `Évite de foncer dans une fausse piste.`],
            [`2`, `Poser $u$ et $u'$ au brouillon.`, `Tu vois s'il manque un coefficient à compenser.`],
            [`3`, `Annoncer « $f$ est continue sur $I$ » avant toute primitive.`, `Une justification de barème à elle seule.`],
            [`4`, `Ne jamais oublier $+\\,C$ pour une primitive indéfinie.`, `Une fonction a toute une famille de primitives.`],
            [`5`, `Mettre $F(a)$ entre parenthèses avant de soustraire.`, `Évite les erreurs de signe dans $F(b) - F(a)$.`],
            [`6`, `Dresser le tableau de signes avant un calcul d'aire.`, `Décide si on intègre $f$ ou $-f$.`],
            [`7`, `Développer $[f(x)]^2$ avant un calcul de volume.`, `Intégrer un carré non développé mène à l'erreur.`],
            [`8`, `Recalculer les bornes après un changement de variable.`, `Les anciennes bornes valent pour $x$, pas pour $u$.`],
            [`9`, `Garder le résultat exact (avec $e$, $\\ln$, $\\pi$).`, `On ne décimalise que si l'énoncé le demande.`],
            [`10`, `Dériver le résultat final pour le vérifier.`, `L'auto-contrôle parfait avant de rendre la copie.`],
          ],
        },
      ],
    },
    {
      id: 's-e',
      titre: `E. Le Cimetière des Points ⚠️`,
      blocs: [
        {
          type: 'text',
          id: 'b-e1',
          contenu: `Les erreurs qui coûtent le plus cher chaque année — et comment les éviter.`,
        },
        {
          type: 'table',
          id: 'tbl-cimetiere',
          headers: [`Erreur fréquente`, `Pourquoi c'est un piège`, `La bonne méthode`],
          rows: [
            [`Oublier la constante $C$.`, `Une fonction a une famille de primitives.`, `Ajouter $+\\,C$ ($C \\in \\mathbb{R}$) à chaque fin de ligne.`],
            [`Confondre $\\int_a^b f$ et l'aire $\\mathcal{A}$.`, `Une intégrale peut être négative.`, `Étudier le signe ; poser $\\mathcal{A} = \\int_a^b |f|$.`],
            [`Écrire $[f(x)]^2 = 2f(x)$.`, `Carré et double sont différents.`, `Développer entièrement le carré avant d'intégrer.`],
            [`Garder les anciennes bornes après substitution.`, `Elles valent pour $x$, pas pour $u$.`, `Recalculer les bornes dès la substitution posée.`],
            [`Mauvais choix de $u$ et $v'$ en IPP.`, `L'intégrale finale devient inextricable.`, `Choisir $u$ = la partie qui se simplifie (priorité $\\ln$).`],
            [`Inverser les bornes sans changer le signe.`, `Le résultat est faussé.`, `$\\int_a^b f = -\\int_b^a f$.`],
            [`Oublier le $\\pi$ du volume.`, `On obtient une intégrale, pas un volume.`, `Poser $V = \\pi\\int_a^b [f]^2$ dès la première ligne.`],
            [`Calculer l'aire d'un bloc malgré un changement de signe.`, `Les portions se compensent et faussent l'aire.`, `Trouver les zéros, découper avec Chasles.`],
          ],
        },
      ],
    },
    {
      id: 's-f',
      titre: `F. La Carte de Couverture BAC 🎯`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-couverture',
          headers: [`Module`, `Situations BAC couvertes`, `Exercices-Types résolus`],
          rows: [
            [`M1 — Primitives de référence`, `Primitive générale ou avec condition initiale.`, `$F$ vérifiant $F(x_0) = y_0$.`],
            [`M2 — Primitives composées`, `Structures cachées dans fractions et produits.`, `Formes $\\dfrac{u'}{u}$, $\\dfrac{u'}{u^2}$, $u'e^u$.`],
            [`M3 — Intégrale définie`, `Calculs combinés, linéarité, Chasles, encadrement.`, `Intégrale + valeur moyenne, linéarité.`],
            [`M4 — Intégration par parties`, `Produits mixtes (polynôme, exp, $\\ln$).`, `$\\int x\\ln x$, $\\int (2x+1)e^x$, argument affine.`],
            [`M5 — Calcul d'aires`, `Surface entre courbe/axe ou entre deux courbes.`, `Aire avec changement de signe + conversion cm².`],
            [`M6 — Volumes de révolution`, `Solide engendré par rotation autour de $(Ox)$.`, `Carré + IPP, volume entre deux courbes.`],
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
          contenu: `Souviens-toi de nos séances de révision, quand on effaçait le grand tableau du Lycée Classique d'Abidjan sous la chaleur de midi. La clé du succès n'est pas dans la magie : elle est dans ces réflexes appliqués méticuleusement. Le reste, Champion(ne), c'est ton travail qui parle.

Tu as bouclé tout l'arsenal du calcul intégral. Garde ce tome près de toi jusqu'au jour J, et rendez-vous au **Tome 4 — Les Suites Numériques** pour continuer à gâter le coin.

— *Marius Dion*`,
        },
        {
          type: 'tip',
          id: 'tip-contact',
          titre: `📞 Restons en contact`,
          contenu: `- **Boutique** · [selar.com/m/eductome](https://selar.com/m/eductome)
- **Facebook** · Eductome
- **WhatsApp** · (+225) 07 99 50 63 00

*EDUCTOME — Apprendre sans limites. La méthode avant la chance.* © 2026 Marius Dion · Tous droits réservés`,
        },
      ],
    },
  ],
};
