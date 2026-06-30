import { Chapitre } from '../../types/course';

export const chapitreAnnexe: Chapitre = {
  id: 't12-annexe',
  titre: `Annexes — Formulaire universel & Conseils BAC`,
  duree: 14,
  niveau: 'BASE',
  xpGain: 10,
  sections: [
    {
      id: 's-a1',
      titre: `Annexe A — Formulaire universel : Limites & Dérivées (T1–T2)`,
      blocs: [
        {
          type: 'text',
          id: 'b-a-intro',
          contenu: `Voici l'arsenal complet de toute la collection, section par section. Le formulaire universel du BAC D, à garder sous les yeux jusqu'au jour J.`,
        },
        {
          type: 'table',
          id: 'tbl-sec1',
          headers: [`Notion clé`, `Formule de référence`, `Vigilance EDUCTOME`],
          rows: [
            [`Taux de variation`, `$\\displaystyle\\lim_{h\\to 0}\\dfrac{f(x_0+h)-f(x_0)}{h}=f'(x_0)$`, `Vérifier la cohérence à gauche et à droite.`],
            [`Dérivée d'une composée`, `$(v\\circ u)'(x)=u'(x)\\,v'\\!\\left(u(x)\\right)$`, `Ne pas oublier de dériver la fonction intérieure.`],
            [`Asymptote verticale`, `$\\displaystyle\\lim_{x\\to a}f(x)=\\pm\\infty \\Rightarrow x=a$`, `Préciser le sens d'approche sur ta copie.`],
          ],
        },
      ],
    },
    {
      id: 's-a2',
      titre: `Annexe A — Primitives & Intégrales (T3)`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-sec2',
          headers: [`Notion clé`, `Formule de référence`, `Vigilance EDUCTOME`],
          rows: [
            [`Forme logarithmique`, `$\\dfrac{u'}{u} \\Rightarrow F(x)=\\ln|u(x)|+C$`, `Garder la valeur absolue tant que le signe de $u$ n'est pas connu.`],
            [`Théorème fondamental`, `$\\displaystyle\\int_a^b f(x)\\,dx=F(b)-F(a)$`, `Vérifier la continuité de $f$ sur $[\\,a\\,;\\,b\\,]$.`],
            [`Relation de Chasles`, `$\\displaystyle\\int_a^c f=\\int_a^b f+\\int_b^c f$`, `Respecter l'ordre des bornes.`],
          ],
        },
      ],
    },
    {
      id: 's-a3',
      titre: `Annexe A — Suites · Log/Exp · Trigo (T4–T5–T6)`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-sec3',
          headers: [`Notion clé`, `Formule de référence`, `Vigilance EDUCTOME`],
          rows: [
            [`Suite géométrique`, `$u_n=u_0\\,q^{\\,n}$`, `Ajuster en $n-1$ si le premier terme est $u_1$.`],
            [`Descente d'exposant`, `$\\ln(a^{\\,n})=n\\ln(a)$`, `Valable uniquement pour $a>0$.`],
            [`Croissance comparée`, `$\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{\\ln(x)}{x}=0$`, `Forme de référence pour lever une indétermination.`],
            [`Dérivée de l'exponentielle`, `$(e^{u})'=u'e^{u}$`, `Ne jamais oublier le facteur $u'$.`],
          ],
        },
      ],
    },
    {
      id: 's-a4',
      titre: `Annexe A — Probabilités & Statistiques (T7–T8)`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-sec4',
          headers: [`Notion clé`, `Formule de référence`, `Vigilance EDUCTOME`],
          rows: [
            [`Loi binomiale`, `$P(X=k)=\\dbinom{n}{k}p^k(1-p)^{n-k}$`, `Ne pas intervertir les exposants de $p$ et de $q$.`],
            [`Événement contraire`, `$P(X\\geq 1)=1-P(X=0)$`, `Réflexe dès que l'énoncé dit « au moins un ».`],
            [`Pente de régression`, `$a=\\dfrac{\\mathrm{cov}(X,Y)}{V(X)}$`, `Au dénominateur, la variance de $X$ uniquement.`],
          ],
        },
      ],
    },
    {
      id: 's-a5',
      titre: `Annexe A — Géométrie 3D, Complexes & Éq. différentielles (T9–T10–T11)`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-sec5',
          headers: [`Notion clé`, `Formule de référence`, `Vigilance EDUCTOME`],
          rows: [
            [`Distance point-plan`, `$d(M,(P))=\\dfrac{|ax_M+by_M+cz_M+d|}{\\sqrt{a^2+b^2+c^2}}$`, `Une distance est toujours positive : garde la valeur absolue.`],
            [`Forme exponentielle`, `$z=re^{i\\theta}$`, `Le module $r$ doit être strictement positif.`],
            [`Écriture de similitude`, `$z'=az+b$`, `Si $|a|=1$, c'est une rotation d'angle $\\arg(a)$.`],
            [`Forme homogène`, `$y'+ay=0 \\Rightarrow y(x)=Ce^{-ax}$`, `Vérifier le signe de $a$ à l'exposant.`],
            [`Avec second membre`, `$y'+ay=b \\Rightarrow y(x)=Ce^{-ax}+\\dfrac{b}{a}$`, `Utiliser la condition initiale pour fixer $C$.`],
          ],
        },
      ],
    },
    {
      id: 's-b',
      titre: `Annexe B — Le cimetière des points`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-cimetiere',
          headers: [`Erreur classique au BAC`, `Tome`, `La bonne méthode`],
          rows: [
            [`Parachuter un résultat graphique sans justification.`, `T2`, `Rédiger une phrase qui explicite ta démarche.`],
            [`Oublier de poser l'ensemble de validité avant un $\\ln$.`, `T5`, `Vérifier la stricte positivité de l'argument.`],
            [`Confondre $\\dbinom{n}{k}$ avec une fraction.`, `T7`, `Développer avec les factorielles au brouillon.`],
            [`Intervertir les exposants du succès et de l'échec.`, `T7`, `Appliquer la formule standard $p^k q^{n-k}$.`],
            [`Laisser un calcul géométrique sans nommer le repère.`, `T9`, `Citer « repère orthonormé direct » dès l'introduction.`],
            [`Écrire une tangente sans la variable $y$.`, `T2`, `Poser $y=f'(a)(x-a)+f(a)$ en entier.`],
            [`Diviser une inéquation par une puissance inconnue.`, `T4`, `Appliquer le logarithme pour descendre l'exposant.`],
            [`Donner une aire sans préciser l'unité.`, `T3`, `Conclure par la mention en unités d'aire.`],
            [`Confondre la variable $X$ et la variable $x$.`, `T5`, `Revenir à la variable initiale avant de conclure.`],
            [`Dessiner des flèches sans le signe de la dérivée.`, `T2`, `Dédier une ligne au signe de $f'(x)$.`],
            [`Poser $\\ell=f(\\ell)$ sans argument.`, `T4`, `Démontrer d'abord la continuité de la fonction associée.`],
            [`Oublier la constante $C$ d'une primitive.`, `T3`, `Écrire $+\\,C$ avec $C\\in\\mathbb{R}$.`],
            [`S'entêter plus de 5 minutes sur une question bloquante.`, `T12`, `Laisser un espace propre et passer à la suite.`],
          ],
        },
      ],
    },
    {
      id: 's-c',
      titre: `Annexe C — Carte de couverture BAC`,
      blocs: [
        {
          type: 'table',
          id: 'tbl-couverture',
          headers: [`Tomes concernés`, `Modules majeurs`, `Situations BAC en Côte d'Ivoire`],
          rows: [
            [`T1 & T2`, `Limites, dérivées, tangentes.`, `Lecture graphique, pente d'une courbe.`],
            [`T3`, `Primitives, intégrales simples.`, `Valeur moyenne, calcul d'aire.`],
            [`T4`, `Récurrence, comportement limite.`, `Suite récurrente imbriquée, calcul de seuil.`],
            [`T5 & T6`, `Exponentielles, logarithmes, trigonométrie.`, `Ossature du problème d'analyse sur 10 points.`],
            [`T7 & T8`, `Loi binomiale, ajustement linéaire.`, `Probabilités de trajets en gbaka, analyse de cacao.`],
            [`T9`, `Vecteurs, équations de plans.`, `Non-colinéarité, distance d'un point à un plan.`],
            [`T10`, `Forme exponentielle, similitudes.`, `Nature d'un triangle, rotation de motifs.`],
            [`T11 & T12`, `Équations différentielles, gestion du temps.`, `Refroidissement, extraction des points gratuits.`],
          ],
        },
      ],
    },
    {
      id: 's-d',
      titre: `Annexe D — Conseils de la dernière nuit`,
      blocs: [
        {
          type: 'tip',
          id: 'tip-veille',
          titre: `Les 7 règles d'or de la veille`,
          contenu: [
            `**Ferme les cahiers de cours.** Plus aucune notion complexe la veille : relis seulement les Cartes des Modules.`,
            `**Chasse aux pièges minutée.** 30 minutes au maximum sur le Cimetière des Points.`,
            `**Logistique de combat.** Prépare ton matériel la veille au soir : stylos, règle, compas.`,
            `**Le sommeil est un multiplicateur.** Une vraie nuit de sommeil : ton cerveau consolide tes acquis.`,
            `**Ancrage mental.** Au réveil, relis le Message du Grand Frère pour fixer ton mental de vainqueur.`,
            `**Le survol tactique.** 15 minutes de lecture du sujet avant d'écrire, pour repérer les bouées.`,
            `**Confiance absolue.** Répète-toi : « Je sais. J'ai travaillé dur pour ce moment. »`,
          ],
        },
      ],
    },
  ],
};
