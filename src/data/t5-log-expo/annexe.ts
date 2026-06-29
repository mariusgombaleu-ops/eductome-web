import { Chapitre } from '../../types/course';

export const chapitreAnnexe: Chapitre = {
  id: 't5-annexe',
  titre: `Annexes — Formulaire & Réflexes BAC`,
  duree: 12,
  niveau: 'BASE',
  xpGain: 10,
  sections: [
    {
      id: 's-a',
      titre: `Annexe A — Formulaire complet`,
      blocs: [
        {
          type: 'text',
          id: 'b-a-intro',
          contenu: `Voici ton tableau de bord. Toutes les formules indispensables du programme ivoirien sont réunies pour tes révisions de dernière minute.`,
        },
        {
          type: 'table',
          id: 'tbl-a1',
          titre: `A.1 — Dérivées et primitives`,
          headers: [`Notion`, `Dérivée`, `Primitive`],
          rows: [
            [`Logarithme népérien`, `$(\\ln x)' = \\dfrac{1}{x}$ sur $\\left]\\,0\\ ;\\ +\\infty\\,\\right[$`, `$\\displaystyle\\int \\dfrac{1}{x}\\,dx = \\ln|x| + C$`],
            [`Forme composée $\\ln u$`, `$(\\ln u)' = \\dfrac{u'}{u}$ avec $u > 0$`, `$\\displaystyle\\int \\dfrac{u'}{u}\\,dx = \\ln|u| + C$`],
            [`Exponentielle`, `$(e^x)' = e^x$ sur $\\mathbb{R}$`, `$\\displaystyle\\int e^x\\,dx = e^x + C$`],
            [`Forme composée $e^u$`, `$(e^u)' = u'e^u$`, `$\\displaystyle\\int u'e^{u}\\,dx = e^{u} + C$`],
            [`Log décimal & base $a$`, `$(\\log x)' = \\dfrac{1}{x\\ln 10}$ ; $(a^x)' = a^x\\ln a$`, `$a^x = e^{x\\ln a}$ ; $\\log x = \\dfrac{\\ln x}{\\ln 10}$`],
            [`Puissances réelles`, `$(x^\\alpha)' = \\alpha x^{\\alpha-1}$ sur $\\left]\\,0\\ ;\\ +\\infty\\,\\right[$`, `$x^\\alpha = e^{\\alpha\\ln x}$`],
          ],
        },
        {
          type: 'table',
          id: 'tbl-a2',
          titre: `A.2 — Limites de référence`,
          headers: [`En cette borne`, `Limite de référence`, `Vainqueur`],
          rows: [
            [`$x \\to 0^+$`, `$\\ln x \\to -\\infty$ ; $x^\\alpha\\ln x \\to 0$`, `La puissance gagne à l'origine.`],
            [`$x \\to +\\infty$ ($\\ln$)`, `$\\ln x \\to +\\infty$ ; $\\dfrac{\\ln x}{x^\\alpha} \\to 0$`, `La puissance gagne sur le log.`],
            [`$x \\to +\\infty$ ($e^x$)`, `$e^x \\to +\\infty$ ; $\\dfrac{e^x}{x^\\alpha} \\to +\\infty$`, `L'exponentielle gagne sur tout.`],
            [`$x \\to -\\infty$`, `$e^x \\to 0$ ; $x\\,e^x \\to 0$`, `L'exponentielle écrase la puissance.`],
            [`$x \\to 0$ (taux)`, `$\\dfrac{\\ln(1+x)}{x} \\to 1$ ; $\\dfrac{e^x-1}{x} \\to 1$`, `Limites de taux usuelles.`],
          ],
        },
        {
          type: 'table',
          id: 'tbl-a3',
          titre: `A.3 — Propriétés algébriques`,
          headers: [`Logarithme népérien`, `Exponentielle`],
          rows: [
            [`$\\ln(ab) = \\ln a + \\ln b$`, `$e^{a+b} = e^a \\times e^b$`],
            [`$\\ln\\!\\left(\\dfrac{a}{b}\\right) = \\ln a - \\ln b$`, `$e^{a-b} = \\dfrac{e^a}{e^b}$`],
            [`$\\ln(a^n) = n\\ln a$`, `$\\left(e^a\\right)^n = e^{na}$`],
            [`$\\ln 1 = 0$ ; $\\ln e = 1$`, `$e^0 = 1$ ; $e^1 = e$`],
            [`$e^{\\ln x} = x$ ($x>0$)`, `$\\ln(e^x) = x$ (tout réel)`],
          ],
        },
      ],
    },
    {
      id: 's-b',
      titre: `Annexe B — Charte typographique BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b-b-intro',
          contenu: `Le correcteur lit aussi la **forme**. Voici les notations attendues sur une copie de Terminale D ivoirienne.`,
        },
        {
          type: 'table',
          id: 'tbl-charte',
          headers: [`Règle`, `À écrire ainsi`, `À éviter`],
          rows: [
            [`Intervalles ouverts`, `$\\left]\\,0\\ ;\\ +\\infty\\,\\right[$`, `$(0, +\\infty)$`],
            [`Virgule décimale`, `$1{,}05$ ; $0{,}7$`, `$1.05$ ; $0.7$`],
            [`Ensemble privé d'une valeur`, `$\\mathbb{R} \\setminus \\{0\\}$`, `$\\mathbb{R} - 0$`],
            [`Limite`, `$\\displaystyle\\lim_{x \\to 0^+} \\ln x = -\\infty$`, `$\\lim \\ln = -\\infty$`],
            [`Fractions`, `$\\dfrac{u'}{u}$`, `$u'/u$ inline`],
            [`Asymptote (phrase complète)`, `« La droite $x = 0$ est asymptote verticale à $\\mathcal{C}_f$. »`, `« asymptote en 0 »`],
          ],
        },
      ],
    },
    {
      id: 's-c',
      titre: `Annexe C — Vocabulaire officiel du BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b-c-intro',
          contenu: `Les mots exacts attendus par le correcteur, regroupés depuis les briques 📘 de chaque module.`,
        },
        {
          type: 'table',
          id: 'tbl-vocab',
          headers: [`Module`, `Termes à placer sur ta copie`],
          rows: [
            [`M1 — Logarithme népérien`, `Ensemble de définition, propriété fonctionnelle, fonction strictement croissante.`],
            [`M2 — Applications du log`, `Forme $\\dfrac{u'}{u}$, condition $u > 0$, primitive, inéquation logarithmique.`],
            [`M3 — Exponentielle`, `Fonction réciproque, strictement positive, propriété fonctionnelle, dérivée de $e^u$.`],
            [`M4 — Log décimal & base a`, `Logarithme décimal, changement de base, exponentielle de base $a$, pH.`],
            [`M5 — Puissances réelles`, `Puissance d'exposant réel, condition $x > 0$, fonction puissance, règles de calcul.`],
            [`M6 — Croissances comparées`, `Croissance comparée, terme dominant, forme indéterminée, limite par domination.`],
          ],
        },
      ],
    },
    {
      id: 's-d',
      titre: `Annexe D — Les 10 réflexes BAC`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-reflexes10',
          headers: [`#`, `Le réflexe`, `Pourquoi`],
          rows: [
            [`1`, `Poser l'ensemble de définition avant tout $\\ln$.`, `Sans domaine, la question s'écroule.`],
            [`2`, `Casser produits et quotients, jamais l'addition.`, `$\\ln(a+b) \\neq \\ln a + \\ln b$.`],
            [`3`, `Ne jamais oublier $u'$ dans $(\\ln u)'$ et $(e^u)'$.`, `La dérivée interne ressort toujours.`],
            [`4`, `Mettre $e^{u}$ de côté dans un tableau de signe.`, `L'exponentielle est toujours $> 0$.`],
            [`5`, `Poser $X = e^x$ dès que $e^{2x}$ et $e^x$ cohabitent.`, `On retombe sur un second degré.`],
            [`6`, `Revenir à $x$ et rejeter $X \\leq 0$.`, `$e^x$ n'atteint jamais $0$ ni les négatifs.`],
            [`7`, `Citer la croissance comparée pour lever une FI.`, `Le résultat de référence rapporte les points.`],
            [`8`, `Se rappeler $x\\ln x \\to 0$ en $0^+$.`, `La puissance gagne à l'origine.`],
            [`9`, `Réécrire $\\log$ et $a^x$ avec $\\ln$ et $\\exp$.`, `On revient à des outils connus.`],
            [`10`, `Conclure en phrase complète, domaine vérifié.`, `Le correcteur cherche la rédaction finale.`],
          ],
        },
      ],
    },
    {
      id: 's-e',
      titre: `Annexe E — Le cimetière des points`,
      blocs: [
        {
          type: 'text',
          id: 'b-e-intro',
          contenu: `Étudie attentivement ces huit erreurs classiques. C'est ici que la majorité des candidats perdent bêtement leurs points au Lycée Classique d'Abidjan, « le Cacao ».`,
        },
        {
          type: 'table',
          id: 'tbl-cimetiere',
          headers: [`L'erreur à éviter`, `L'écriture correcte`, `L'explication du Grand Frère`],
          rows: [
            [`$\\ln(a+b) = \\ln a + \\ln b$`, `$\\ln(ab) = \\ln a + \\ln b$`, `Le logarithme casse les produits, pas les sommes.`],
            [`$\\ln(x^2) = 2\\ln x$ partout`, `$\\ln(x^2) = 2\\ln|x|$ pour $x \\neq 0$`, `Si $x < 0$, $x^2 > 0$ existe : la valeur absolue est obligatoire.`],
            [`$e^x = 0$ a une solution`, `Aucune solution`, `$e^x > 0$ sur $\\mathbb{R}$ : la courbe ne touche jamais l'axe.`],
            [`$(e^u)' = e^u$`, `$(e^u)' = u'e^u$`, `Oublier $u'$ est un faux pas qui coûte le calcul.`],
            [`$\\displaystyle\\lim_{x\\to 0^+} x\\ln x = -\\infty$`, `$\\displaystyle\\lim_{x\\to 0^+} x\\ln x = 0$`, `À l'origine, la puissance efface le logarithme.`],
            [`$\\displaystyle\\int \\dfrac{1}{x}\\,dx = \\ln x + C$`, `$\\displaystyle\\int \\dfrac{1}{x}\\,dx = \\ln|x| + C$`, `La valeur absolue maintient le logarithme défini.`],
            [`$e^{a+b} = e^a + e^b$`, `$e^{a+b} = e^a \\times e^b$`, `La somme des exposants devient un produit.`],
            [`$(a^x)' = x\\,a^{x-1}$`, `$(a^x)' = a^x\\ln a$`, `La formule $x^{a-1}$ vaut pour $x^a$, pas pour $a^x$.`],
          ],
        },
      ],
    },
    {
      id: 's-f',
      titre: `Annexe F — Carte de couverture BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b-f-intro',
          contenu: `Pour optimiser tes révisions, regarde comment les notions du Tome 5 se répartissent dans un sujet d'examen type de Terminale D.`,
        },
        {
          type: 'table',
          id: 'tbl-couverture',
          headers: [`Type de question au BAC`, `Notions du Tome 5 sollicitées`, `Poids indicatif`],
          rows: [
            [`Calcul de limites`, `Croissances comparées en $0^+$ et $+\\infty$, formes indéterminées.`, `1 à 1,5 point`],
            [`Étude des variations d'une fonction`, `Dérivation de $\\ln u$ et $e^u$, signe de la dérivée.`, `2 à 3 points`],
            [`Résolution d'un seuil`, `Logarithme pour isoler $n$ dans $q^{\\,n} > k$.`, `1 point`],
            [`Calcul d'aire sous la courbe`, `Primitives de la forme $\\dfrac{u'}{u}$ ou $u'e^u$.`, `1,5 à 2 points`],
            [`Changement de variable`, `Équations se ramenant au second degré avec $X = e^x$.`, `1,5 point`],
            [`Salle d'Entraînement`, `10 sujets BAC mixant tous les modules.`, `Synthèse + check-list correcteur.`],
          ],
        },
      ],
    },
    {
      id: 's-fin',
      titre: `On a gâté le coin, Champion(ne) !`,
      blocs: [
        {
          type: 'text',
          id: 'b-fin',
          contenu: `Si tu es arrivé(e) jusqu'ici, c'est que tu as fait le travail. Pas par hasard, pas par chance : par méthode. C'est ça, la différence entre celui qui subit le BAC et celui qui le domine. Tu es passé(e) du bon côté, Champion(ne).

Le logarithme et l'exponentielle ne te font plus peur. Tu sais poser un domaine, casser une expression, dériver une composée, changer de variable et lever une indétermination. Garde ce tome près de toi, relis les briques 📘 et le cimetière des points avant chaque composition. Le Tome 6, Les Fonctions Trigonométriques, t'attend pour la suite de l'aventure.

**Restons en contact**
- WhatsApp : (+225) 07 99 50 63 00
- Boutique : selar.com/m/eductome
- Facebook : Eductome

*EDUCTOME — Apprendre sans limites. La méthode avant la chance.*

**© 2026 Marius Dion · Tous droits réservés.**`,
        },
      ],
    },
  ],
};
