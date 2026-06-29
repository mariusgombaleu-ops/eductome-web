import { Chapitre } from '../../types/course';

export const chapitreM6: Chapitre = {
  id: 't3-m6',
  titre: `Module 6 — Les Volumes de Solides de Révolution`,
  duree: 30,
  niveau: 'BAC',
  xpGain: 35,
  objectifs: [
    `Calculer le volume d'un solide engendré par la rotation d'une courbe autour de $(Ox)$`,
    `Rédiger un calcul de volume avec le vocabulaire officiel (solide de révolution, u.v.)`,
    `Élever proprement une fonction au carré avec les identités remarquables du Socle`,
    `Calculer le volume entre deux courbes par différence des carrés`,
    `Convertir un volume en u.v. vers des $\\text{cm}^3$ réels`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, avec le Module 5 je sais mesurer une surface plate. Mais au BAC, on me demande parfois le **volume** d'un solide engendré par une rotation. Comment je mesure quelque chose en trois dimensions avec une intégrale ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Beau réflexe, Champion(ne) ! Et la réponse va te plaire : on garde exactement le même outil — l'intégrale — mais au lieu d'empiler des bandes plates, on va empiler des **disques**. Et pour finir le tome en beauté, ton Outil 3 du Socle (développer un carré) va enfin servir. Direction l'atelier du potier.`,
        },
      ],
    },
    {
      id: 's2',
      titre: `② LE RÉEL`,
      blocs: [
        {
          type: 'text',
          id: 'b3',
          contenu: `Va faire un tour chez les potières de Katiola. Sur le tour, il y a un profil d'argile — une courbe — et la roue tourne. En tournant, ce simple profil engendre un **vase** plein et symétrique : un solide de révolution. La courbe, c'est notre fonction $f$ ; l'axe de la roue, c'est l'axe des abscisses $(Ox)$.

Comment mesurer le volume de ce vase ? On le tranche mentalement en une multitude de **disques** très fins, perpendiculaires à l'axe, comme si on découpait le vase en rondelles. Chaque rondelle, à la position $x$, est un disque dont le **rayon** est la hauteur de la courbe à cet endroit, c'est-à-dire $f(x)$.

L'aire d'une rondelle vaut $\\pi \\times [f(x)]^2$, et son volume (rondelle d'épaisseur $dx$) vaut $\\pi [f(x)]^2\\,dx$. Pour avoir le volume total du vase entre $a$ et $b$, on **accumule** toutes ces rondelles — et accumuler, tu sais faire : c'est l'intégrale. *Le volume, c'est la somme continue des disques le long de l'axe.*`,
        },
        {
          type: 'figure',
          id: 'fig-m6-1',
          src: '/images/t3/fig_M6_1.png',
          legende: `En tournant autour de l'axe, le profil $f$ engendre un solide plein.`,
          alt: `En tournant autour de l'axe, le profil $f$ engendre un solide plein.`,
        },
      ],
    },
    {
      id: 's3',
      titre: `③ LE PONT`,
      blocs: [
        {
          type: 'text',
          id: 'b4',
          contenu: `Traduisons l'atelier du potier en langage mathématique :

- Le profil d'argile → la courbe génératrice $f$.
- L'axe de la roue → l'axe $(Ox)$.
- Une rondelle fine → un disque élémentaire de rayon $f(x)$, d'épaisseur $dx$.
- Le volume du vase → l'intégrale des disques.`,
        },
        {
          type: 'table',
          id: 'tbl5',
          headers: [`Atelier du potier`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Le profil d'argile`, `$f(x)$`, `La fonction génératrice.`],
            [`Le rayon d'une rondelle`, `$f(x)$`, `La hauteur de la courbe à la position $x$.`],
            [`L'aire d'une rondelle`, `$\\pi [f(x)]^2$`, `La surface du disque de rayon $f(x)$.`],
            [`Le volume total`, `$\\pi\\displaystyle\\int_a^b [f(x)]^2\\,dx$`, `L'accumulation des disques (en u.v.).`],
          ],
        },
      ],
    },
    {
      id: 's-bac',
      titre: `📘 LANGAGE OFFICIEL DU BAC`,
      blocs: [
        {
          type: 'text',
          id: 'b6',
          contenu: `Champion(ne), l'image du vase t'a donné l'intuition. La copie attend la formule officielle et son vocabulaire.

**Définition formelle.** Soit $f$ continue sur $[a\\ ;\\ b]$. Le volume $V$ du **solide de révolution** engendré par la rotation de $\\mathcal{C}_f$ autour de l'axe $(Ox)$ entre $x = a$ et $x = b$ est :
$$V = \\pi\\int_a^b [f(x)]^2\\,dx \\ \\text{(en u.v.)}.$$

**En langage courant.** On élève la fonction au carré, on intègre, on multiplie par $\\pi$ ; puis on convertit en cm³.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Solide de révolution** — le solide engendré par la rotation d'une courbe autour d'un axe.
- **Courbe génératrice** — la courbe $\\mathcal{C}_f$ qui, en tournant, crée le solide.
- **Disque élémentaire** — la tranche de rayon $f(x)$ et d'épaisseur $dx$.
- **Unité de volume (u.v.)** — le cube construit sur l'unité graphique : $1\\,\\text{u.v.} = OI^3$ (repère orthonormé).`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Le correcteur attend la phrase *« Le volume du solide de révolution est $V = \\pi\\int_a^b [f(x)]^2\\,dx$ »*, posée **avant** tout calcul. Et n'oublie jamais le carré : on intègre $[f(x)]^2$, pas $f(x)$.`,
        },
        {
          type: 'figure',
          id: 'fig-m6-2',
          src: '/images/t3/fig_M6_2.png',
          legende: `Un disque de rayon $f(x)$ : voilà la brique élémentaire du volume.`,
          alt: `Un disque de rayon $f(x)$ : voilà la brique élémentaire du volume.`,
        },
      ],
    },
    {
      id: 's4',
      titre: `④ LA RÈGLE`,
      blocs: [
        {
          type: 'rule',
          id: 'rule9',
          titre: `Règle d'Or — Le volume de révolution autour de (Ox)`,
          contenu: `Pour $f$ continue sur $[a\\ ;\\ b]$, la rotation de $\\mathcal{C}_f$ autour de $(Ox)$ engendre un solide de volume
$$V = \\pi\\int_a^b [f(x)]^2\\,dx \\ \\text{(en u.v.)}.$$

**Solide compris entre deux courbes.** Si le solide est délimité par deux courbes $f$ (extérieure) et $g$ (intérieure), avec $f(x) \\ge g(x) \\ge 0$ sur $[a\\ ;\\ b]$, le volume du solide creux est la différence des deux volumes :
$$V = \\pi\\int_a^b \\Big([f(x)]^2 - [g(x)]^2\\Big)\\,dx \\ \\text{(en u.v.)}.$$
*(La condition $f \\ge g \\ge 0$ rend la différence positive : aucune valeur absolue n'est nécessaire.)*

**Conversion.** Dans un repère orthonormé d'unité $OI$ : $1\\,\\text{u.v.} = OI^3$, donc $V_{\\text{cm}^3} = V_{\\text{u.v.}} \\times OI^3$.`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Devant « volume engendré par la rotation autour de $(Ox)$ », ton tout premier geste est d'écrire $[f(x)]^2$ et de le développer (Outil 3 du Socle). Ne cherche jamais une primitive de $f$ directement.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `L'unité de volume s'obtient au **cube** ($OI^3$), pas au carré. Et le $\\pi$ reste au numérateur du résultat, accroché jusqu'au bout.`,
        },
      ],
    },
    {
      id: 's5',
      titre: `⑤ LA DESCENTE`,
      blocs: [
        {
          type: 'text',
          id: 'b12',
          titre: `Le Diagnostic`,
          contenu: `« Volume du solide engendré par la rotation autour de $(Ox)$ » → formule $\\pi\\int f^2$. Une racine $\\sqrt{x}$ dans $f$ → le carré la fait disparaître. Un produit après le carré (ex. $x e^{2x}$) → IPP du Module 4. Deux courbes → différence des carrés.`,
        },
        {
          type: 'table',
          id: 'tbl13',
          titre: `L'Arbre de décision`,
          headers: [`Si tu vois…`, `Axe de rotation`, `Formule à poser`],
          rows: [
            [`Solide plein, une seule courbe`, `$(Ox)$`, `$V = \\pi\\int_a^b [f(x)]^2\\,dx$`],
            [`Solide creux, deux courbes $f \\ge g \\ge 0$`, `$(Ox)$`, `$V = \\pi\\int_a^b ([f]^2 - [g]^2)\\,dx$`],
            [`Énoncé mentionnant $(Oy)$`, `$(Oy)$`, `Hors-programme Tle D : l'énoncé ramène toujours à $(Ox)$.`],
          ],
        },
        {
          type: 'text',
          id: 'b14',
          titre: `La Procédure`,
          contenu: `**Étape 1.** Identifier $f$ et les bornes $a$, $b$.

**Étape 2.** Développer $[f(x)]^2$ (identités remarquables, $(\\sqrt{x})^2 = x$).

**Étape 3.** Trouver une primitive de $[f(x)]^2$, poser les crochets (IPP si produit).

**Étape 4.** Multiplier par $\\pi$ → volume en u.v.

**Étape 5.** Convertir : $\\times\\,OI^3$ pour les cm³.`,
        },
        {
          type: 'tip',
          id: 'tip15',
          titre: `La Vérification`,
          contenu: `- Un volume est strictement positif. Résultat $\\le 0$ → un double produit oublié ou des bornes inversées.
- Vérifie l'unité finale : un volume s'exprime en $\\text{cm}^3$ (jamais cm²).`,
        },
        {
          type: 'figure',
          id: 'fig-m6-3',
          src: '/images/t3/fig_M6_3.png',
          legende: `Plus les disques sont fins, plus la pile épouse le solide : c'est l'intégrale.`,
          alt: `Plus les disques sont fins, plus la pile épouse le solide : c'est l'intégrale.`,
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
          headers: [`Niveau`, `Situation`, `Comment la reconnaître`, `Exercice-Type`],
          rows: [
            [`🟢 BASE`, `Carré d'une affine`, `$f$ du type $x + 1$, carré simple`, `Type 2`],
            [`🟡 MOYEN`, `Carré d'une fonction avec racine`, `$\\sqrt{x^2+1}$, le carré simplifie`, `Maintenant à toi`],
            [`🔴 BAC`, `Carré + IPP`, `$f = \\sqrt{x}\\,e^x$, produit après le carré`, `Type 1`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 1 — Volume avec carré puis IPP** *(modèle dérivé d'annales ivoiriennes)*. Soit $f(x) = \\sqrt{x}\\,e^x$ continue sur $[0\\ ;\\ 1]$, repère orthonormé d'unité $2\\text{ cm}$. Calculer le volume $V$ engendré par la rotation de $\\mathcal{C}_f$ autour de $(Ox)$ entre $x = 0$ et $x = 1$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Volume autour de $(Ox)$ → carré d'abord. Le carré supprime la racine ; reste un produit $x e^{2x}$ → IPP.` },
            { name: `Étape 1`, contenu: `$[f(x)]^2 = (\\sqrt{x}\\,e^x)^2 = x\\,e^{2x}$.` },
            { name: `Étape 2`, contenu: `$V = \\pi\\displaystyle\\int_0^1 x\\,e^{2x}\\,dx$ u.v.` },
            { name: `Étape 3 (IPP)`, contenu: `$u = x$, $u' = 1$ ; $v' = e^{2x}$, $v = \\dfrac{1}{2}e^{2x}$. Alors $\\int_0^1 x e^{2x}\\,dx = \\Big[\\big(\\dfrac{1}{2}x - \\dfrac{1}{4}\\big)e^{2x}\\Big]_0^1 = \\dfrac{1}{4}e^2 - \\big(-\\dfrac{1}{4}\\big) = \\dfrac{e^2 + 1}{4}$. Donc $V = \\dfrac{\\pi(e^2+1)}{4}$ u.v.` },
            { name: `Étape 4 (conversion)`, contenu: `$1\\,\\text{u.v.} = 2^3 = 8\\text{ cm}^3$, donc $V = 8\\times\\dfrac{\\pi(e^2+1)}{4} = 2\\pi(e^2 + 1)\\ \\text{cm}^3$.` },
          ],
          reponse: `$V = \\dfrac{\\pi(e^2+1)}{4}$ u.v. $= 2\\pi(e^2 + 1)\\ \\text{cm}^3$.`,
          conseil: `Le carré d'abord, l'IPP ensuite : ne jamais inverser l'ordre.`,
          piege: `Le résultat est un **volume** : il s'exprime en $\\text{cm}^3$, et l'unité de volume se calcule au cube ($2^3 = 8$).`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$f$ est continue sur $[0\\ ;\\ 1]$. Le volume est $V = \\pi\\displaystyle\\int_0^1 [f(x)]^2\\,dx = \\pi\\displaystyle\\int_0^1 x e^{2x}\\,dx$.
Par IPP avec $u = x$, $v' = e^{2x}$ :
$$V = \\pi\\Big[\\Big(\\dfrac{1}{2}x - \\dfrac{1}{4}\\Big)e^{2x}\\Big]_0^1 = \\pi\\Big(\\dfrac{1}{4}e^2 + \\dfrac{1}{4}\\Big) = \\dfrac{\\pi(e^2 + 1)}{4}\\ \\text{u.v.}$$
Comme $1\\,\\text{u.v.} = 2^3 = 8\\text{ cm}^3$ : $V = 2\\pi(e^2 + 1)\\ \\text{cm}^3$.

*[Barème : carré de $f$ : 1 pt · IPP : 2 pts · intégrale en u.v. : 1 pt · conversion cm³ : 1 pt — Total : 5 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BASE',
          enonce: `🟢 **Exercice-Type 2 — Volume d'une affine.** Soit $g(x) = x + 1$ sur $[0\\ ;\\ 2]$, repère orthonormé d'unité $1\\text{ cm}$. Calculer le volume engendré par la rotation de $\\mathcal{C}_g$ autour de $(Ox)$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `Affine → carré = identité remarquable, puis primitive terme à terme.` },
            { name: `Étape 1`, contenu: `$[g(x)]^2 = (x+1)^2 = x^2 + 2x + 1$.` },
            { name: `Étape 2`, contenu: `$V = \\pi\\displaystyle\\int_0^2 (x^2 + 2x + 1)\\,dx$.` },
            { name: `Étape 3`, contenu: `Primitive : $\\dfrac{x^3}{3} + x^2 + x$. En $2$ : $\\dfrac{8}{3} + 4 + 2 = \\dfrac{26}{3}$ ; en $0$ : $0$. Donc $V = \\dfrac{26\\pi}{3}$ u.v.` },
            { name: `Étape 4`, contenu: `$1\\,\\text{u.v.} = 1^3 = 1\\text{ cm}^3$, donc $V = \\dfrac{26\\pi}{3}\\ \\text{cm}^3$.` },
          ],
          reponse: `$V = \\dfrac{26\\pi}{3}$ u.v. $= \\dfrac{26\\pi}{3}\\ \\text{cm}^3$.`,
          conseil: `Ne saute pas le double produit : $(x+1)^2 = x^2 + 2x + 1$, jamais $x^2 + 1$.`,
          piege: `Le $\\pi$ reste au numérateur ; on multiplie, on ne divise pas par $\\pi$.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `$g$ est continue sur $[0\\ ;\\ 2]$. $V = \\pi\\displaystyle\\int_0^2 (x+1)^2\\,dx = \\pi\\displaystyle\\int_0^2 (x^2 + 2x + 1)\\,dx$.
$$V = \\pi\\Big[\\dfrac{x^3}{3} + x^2 + x\\Big]_0^2 = \\pi\\Big(\\dfrac{8}{3} + 6\\Big) = \\dfrac{26\\pi}{3}\\ \\text{u.v.} = \\dfrac{26\\pi}{3}\\ \\text{cm}^3.$$

*[Barème : carré développé : 1,5 pt · primitive : 1,5 pt · calcul + cm³ : 2 pts — Total : 5 pts]*`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Carré d'abord, $\\pi$ jusqu'au bout. Réponses finales seulement.

- **Exercice 1.** Rotation de $f(x) = e^x$ autour de $(Ox)$ sur $[0\\ ;\\ \\ln 2]$, unité $2\\text{ cm}$. *(Réponse : $V = \\pi\\int_0^{\\ln 2} e^{2x}dx = \\dfrac{3\\pi}{2}$ u.v., et $1\\,\\text{u.v.} = 8\\text{ cm}^3$, donc $V = 12\\pi\\ \\text{cm}^3$.)*
- **Exercice 2.** Rotation de $g(x) = \\sqrt{x^2 + 1}$ autour de $(Ox)$ sur $[0\\ ;\\ 3]$, unité $1\\text{ cm}$. *(Réponse : $V = \\pi\\int_0^3 (x^2 + 1)\\,dx = 12\\pi\\ \\text{cm}^3$.)*
- **Exercice 3.** Rotation de $h(x) = \\sqrt{x}$ autour de $(Ox)$ sur $[0\\ ;\\ 4]$, unité $1\\text{ cm}$. *(Réponse : $V = \\pi\\int_0^4 x\\,dx = 8\\pi\\ \\text{cm}^3$.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m6',
          titre: `À retenir`,
          contenu: [
            `$V = \\pi\\displaystyle\\int_a^b [f(x)]^2\\,dx$ (u.v.) : on intègre le carré, jamais $f$ seule.`,
            `📘 Vocabulaire officiel : solide de révolution, courbe génératrice, disque élémentaire, unité de volume.`,
            `Entre deux courbes ($f \\ge g \\ge 0$) : $V = \\pi\\displaystyle\\int_a^b ([f]^2 - [g]^2)\\,dx$, sans valeur absolue.`,
            `Conversion : $\\times\\,OI^3$ (au cube), résultat en cm³.`,
            `Vérification : un volume est strictement positif.`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m6',
          titre: `Fil rouge`,
          contenu: `Champion(ne), tu viens de boucler tout l'arsenal du calcul intégral : primitives, intégrales, aires, volumes. Le prochain grand chantier change de décor : dans le **Tome 4, Les Suites Numériques**, on apprend à dompter l'infini et les comportements à long terme — un autre gros gisement de points du BAC. Mais avant, rendez-vous à la Salle d'Examen pour mettre tout ça à l'épreuve.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m6',
          titre: `Auto-évaluation — Module 6`,
          contenu: [
            `Je pose la formule $V = \\pi\\int_a^b [f(x)]^2\\,dx$ avant tout calcul.`,
            `J'emploie le vocabulaire officiel (solide de révolution, génératrice, u.v.) dans mes rédactions.`,
            `Je développe correctement $[f(x)]^2$ avec les identités remarquables.`,
            `Je sais traiter un volume entre deux courbes par différence des carrés.`,
            `Je convertis les u.v. en cm³ en élevant l'unité au cube.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m6',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Tout l'arsenal intégral est à toi. File à la Salle d'Examen.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et refais l'Exercice-Type 1 (carré + IPP).`,
            `🔴 **0 à 2** → Reprends le ② Le Réel : le tour du potier et les rondelles.`,
          ],
        },
      ],
    },
  ],
};
