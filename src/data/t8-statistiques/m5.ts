import { Chapitre } from '../../types/course';

export const chapitreM5: Chapitre = {
  id: 't8-m5',
  titre: `Module 5 — Interpolation et Extrapolation`,
  duree: 22,
  niveau: 'BAC',
  xpGain: 30,
  objectifs: [
    `Vérifier que l'ajustement affine est justifié grâce à $|r|$`,
    `Distinguer une interpolation fiable d'une extrapolation risquée`,
    `Rédiger la réserve officielle attendue par les correcteurs`,
    `Faire une prévision chiffrée à partir de la droite d'ajustement`,
    `Repérer un résultat absurde et le signaler`,
  ],
  sections: [
    {
      id: 's1',
      titre: `① LE BESOIN`,
      blocs: [
        {
          type: 'dialogue',
          id: 'dlg1',
          pf: `Grand Frère, j'ai mon équation $y = ax + b$. Je peux donc prévoir n'importe quelle année, même dans $50$ ans, non ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          gf: `Doucement, Champion(ne) ! Une droite n'est pas une boule de cristal parfaite. Il y a deux questions à se poser avant toute prévision : est-ce que mon lien est assez fort ($|r|$) ? et est-ce que je prédis près de mes données (interpolation, fiable) ou loin (extrapolation, risquée) ? Ce module te donne les règles du jeu et la phrase exacte que le correcteur attend.`,
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
          contenu: `Pense au planteur de cacao près de Daloa. Depuis cinq ans, il note sa récolte annuelle, et elle augmente régulièrement. Il veut prévoir la récolte de l'an prochain pour préparer ses sacs et négocier son prix.

S'il prévoit pour l'an prochain — juste après ses cinq années de relevés — c'est raisonnable : la tendance vient de se vérifier, il reste tout près de ce qu'il connaît. C'est de l'**interpolation** quand la valeur tombe à l'intérieur de ses données, et une extrapolation prudente quand elle dépasse de peu.

Mais s'il se met à prévoir sa récolte dans $30$ ans, là il rêve : un incendie, une maladie du cacaoyer, un changement de prix mondial, et tout s'écroule. Plus on s'éloigne des données connues, plus la prévision devient fragile. C'est de l'**extrapolation lointaine**, à manier avec des pincettes.

La morale du planteur : on peut prédire, mais on annonce toujours « sous réserve que la tendance se maintienne ». Cette phrase n'est pas une décoration : c'est l'honnêteté du bon statisticien.`,
        },
        {
          type: 'figure',
          id: 'fig-m5-1',
          src: '/images/t8/fig_M5_1.png',
          legende: `Dans les données = interpolation (solide). Au-delà = extrapolation (à réserver).`,
          alt: `Une droite d'ajustement avec zone d'interpolation et zone d'extrapolation.`,
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
          contenu: `On traduit la prudence du planteur en symboles.

- Le lien est assez fort → $|r| \\geqslant 0{,}9$
- Prévoir dans les données connues → $x \\in [x_{\\min} ; x_{\\max}]$ : interpolation
- Prévoir au-delà → $x > x_{\\max}$ : extrapolation
- L'honnêteté du planteur → la phrase de réserve`,
        },
        {
          type: 'table',
          id: 'tbl-pont',
          headers: [`Scène du planteur`, `Symbole maths`, `Ce que ça signifie`],
          rows: [
            [`Le lien s'est vérifié`, `$|r| \\geqslant 0{,}9$`, `Ajustement affine justifié`],
            [`Prévoir entre deux années connues`, `$x \\in [x_{\\min} ; x_{\\max}]$`, `Interpolation (fiable)`],
            [`Prévoir après la dernière année`, `$x > x_{\\max}$`, `Extrapolation (prudence)`],
            [`« Si rien ne change »`, `phrase de réserve`, `Mention obligatoire au BAC`],
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
          contenu: `Champion(ne), tu sens la prudence du planteur. Voici les mots exacts à poser.

**Définition formelle.** Estimer une valeur $y$ pour un $x$ situé **dans** l'intervalle $[x_{\\min} ; x_{\\max}]$ des données s'appelle une **interpolation**. L'estimer pour un $x$ **hors** de cet intervalle s'appelle une **extrapolation**. Un ajustement affine n'est justifié que si $|r| \\geqslant 0{,}9$.

**En langage courant.** Interpoler = prévoir entre les points connus ; extrapoler = prévoir au-delà.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Vocabulaire à placer sur ta copie`,
          contenu: `- **Interpolation** — estimation à l'intérieur des données.
- **Extrapolation** — estimation au-delà des données.
- **Ajustement justifié** — condition $|r| \\geqslant 0{,}9$.
- **Réserve** — « sous réserve que la tendance se maintienne ».`,
        },
        {
          type: 'tip',
          id: 'tip8',
          titre: `À retenir`,
          contenu: `Pour toute extrapolation, le correcteur attend la phrase *« sous réserve que la tendance se maintienne »*. Sans elle, tu perds le demi-point réservé à la rigueur.`,
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
          titre: `Règle d'Or — Prévoir avec une droite d'ajustement`,
          contenu: `1. Vérifier $|r| \\geqslant 0{,}9$ : sinon l'ajustement affine n'est pas pertinent.
2. Remplacer $x$ par la valeur cherchée dans $y = ax + b$.
3. Préciser interpolation ($x$ dans les données) ou extrapolation ($x$ au-delà).
4. Pour une extrapolation, ajouter : **« sous réserve que la tendance se maintienne ».**`,
        },
        {
          type: 'tip',
          id: 'tip10',
          titre: `Conseil du Grand Frère`,
          contenu: `Note la phrase de réserve sur ton brouillon dès que tu lis le mot « prévision » : tu ne l'oublieras plus.`,
        },
        {
          type: 'warning',
          id: 'warn11',
          titre: `Piège à éviter`,
          contenu: `Un résultat négatif ou absurde (une population qui devient négative) signale une extrapolation poussée trop loin ou une erreur d'équation.`,
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
          contenu: `Le sujet demande « une prévision », « une estimation », ou « discuter la fiabilité » : tu es ici. Premier réflexe : regarder $|r|$ et situer le $x$ demandé.`,
        },
        {
          type: 'table',
          id: 'tbl-arbre',
          titre: `L'Arbre de décision`,
          headers: [`La situation`, `L'action immédiate`],
          rows: [
            [`$|r| < 0{,}9$`, `Préciser que la corrélation est trop faible : ajustement non pertinent.`],
            [`$x \\in [x_{\\min} ; x_{\\max}]$`, `Remplacer $x$ dans l'équation : interpolation, c'est solide.`],
            [`$x > x_{\\max}$`, `Calculer, puis ajouter « sous réserve que la tendance se maintienne ».`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          titre: `La Procédure`,
          contenu: `**Étape 1.** Vérifie le droit d'entrée : $|r| \\geqslant 0{,}9$ ? Si oui, l'ajustement est justifié.

**Étape 2.** Situe ta cible : le $x$ demandé est-il dans l'intervalle des données ou au-delà ?

**Étape 3.** Calcule $y = ax + b$ et rédige la conclusion, avec la réserve si c'est une extrapolation.`,
        },
        {
          type: 'tip',
          id: 'tip14',
          titre: `La Vérification`,
          contenu: `Regarde si ton résultat est plausible par rapport aux données passées. Un chiffre d'affaires qui explose ou devient négatif doit te faire reprendre le calcul.`,
        },
        {
          type: 'figure',
          id: 'fig-m5-2',
          src: '/images/t8/fig_M5_2.png',
          legende: `Plus on s'éloigne, plus la réserve est nécessaire.`,
          alt: `Une prévision en extrapolation lointaine avec sa réserve.`,
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
            [`🔴 BAC`, `Extrapolation + réserve`, `$x$ au-delà des données, $|r|$ fort`, `Type 1`],
            [`🔴 BAC`, `Discussion de validité`, `On demande si le modèle est fiable`, `Type 2`],
          ],
        },
        {
          type: 'exercise',
          id: 'exo-et1',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 1 — Prévoir le nombre d'abonnés.** Une série d'abonnés (rangs $1$ à $7$) donne $|r| = 0{,}98$ et la droite $y = 12{,}5x + 40$ (en milliers). Estime le nombre d'abonnés en $2025$, qui correspond au rang $x = 11$.`,
          etapes: [
            { name: `Diagnostic`, contenu: `$|r|$ fort, $x = 11$ hors de $[1 ; 7]$ : extrapolation avec réserve.` },
            { name: `Étape 1`, contenu: `$|r| = 0{,}98 \\geqslant 0{,}9$ : l'ajustement affine est justifié.` },
            { name: `Étape 2`, contenu: `$y = 12{,}5 \\times 11 + 40 = 137{,}5 + 40 = 177{,}5$.` },
            { name: `Étape 3`, contenu: `$x = 11$ est hors de l'intervalle $[1 ; 7]$ : c'est une extrapolation.` },
          ],
          reponse: `Environ $177\\,500$ abonnés en $2025$, sous réserve que la tendance se maintienne.`,
          conseil: `Convertis bien l'unité : $177{,}5$ milliers $= 177\\,500$ abonnés.`,
          piege: `Ne conclus jamais une extrapolation sans la phrase de réserve.`,
        },
        {
          type: 'text',
          id: 'b-copie1',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Comme $|r| = 0{,}98 \\geqslant 0{,}9$, la forte corrélation linéaire justifie l'ajustement affine.
Pour $2025$, $x = 11$ : $y = 12{,}5(11) + 40 = 177{,}5$.
La valeur $x = 11$ est en dehors de l'intervalle d'étude $[1 ; 7]$ : il s'agit d'une extrapolation.
On peut prévoir environ $177\\,500$ abonnés en $2025$, sous réserve que la tendance se maintienne.

*[Barème type BAC : justification $|r|$ = 0,5 pt — calcul = 0,5 pt — extrapolation = 0,5 pt — réserve = 0,5 pt — Total : 2 pts]*`,
        },
        {
          type: 'exercise',
          id: 'exo-et2',
          niveau: 'BAC',
          enonce: `🔴 **Exercice-Type 2 — Discuter la fiabilité.** Un directeur financier calcule une prévision de bénéfice à partir d'une série dont le coefficient de corrélation est $r = 0{,}65$. Son calcul arithmétique est exact. Peut-on se fier à sa prévision ?`,
          etapes: [
            { name: `Diagnostic`, contenu: `La question porte sur la validité : on examine $|r|$.` },
            { name: `Étape 1`, contenu: `$|r| = 0{,}65 < 0{,}9$ : la corrélation est trop faible.` },
            { name: `Étape 2`, contenu: `Un ajustement affine n'est donc pas pertinent pour cette série, même si le calcul est juste.` },
          ],
          reponse: `Non : $|r| < 0{,}9$, l'ajustement affine n'est pas fiable malgré un calcul exact.`,
          conseil: `« Calcul exact » ne veut pas dire « prévision fiable » : la fiabilité dépend de $|r|$.`,
          piege: `Ne valide jamais une prévision sur la seule justesse arithmétique.`,
        },
        {
          type: 'text',
          id: 'b-copie2',
          titre: `✍️ La Copie Parfaite`,
          contenu: `Le coefficient de corrélation linéaire est $r = 0{,}65$. Sa valeur absolue $|r| = 0{,}65$ est strictement inférieure à $0{,}9$.
La corrélation entre les variables est donc trop faible : un ajustement affine n'est pas pertinent pour décrire cette série.
Le calcul du directeur, bien qu'exact arithmétiquement, n'est pas fondé sur un modèle statistique fiable ; son affirmation est à prendre avec prudence.

*[Barème type BAC : valeur $|r|$ = 0,5 pt — comparaison à 0,9 = 0,5 pt — conclusion argumentée = 1 pt — Total : 2 pts]*`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-a',
          pf: `Mais Grand Frère, si mon $r$ vaut $0{,}95$ et que j'extrapole à $20$ ans, c'est fiable alors ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg-exo-b',
          gf: `Attention Champion(ne) ! Un bon $r$ ne garantit pas une prévision lointaine. Plus tu t'éloignes des données, plus le risque grandit. La phrase « sous réserve que la tendance se maintienne » n'est pas une décoration, c'est un vrai avertissement.`,
        },
        {
          type: 'tip',
          id: 'tip-atoi',
          titre: `Maintenant à toi, Champion(ne) !`,
          contenu: `Vérifie $|r|$, situe le $x$, n'oublie pas la réserve. Réponses finales seulement.

- **Exercice 1.** Données de rangs $1$ à $6$, droite $y = 3x + 5$. Prévois le rang $4$. *(Réponse : $y = 17$ ; $x = 4 \\in [1 ; 6]$ : interpolation.)*
- **Exercice 2.** Même droite, prévois le rang $10$. *(Réponse : $y = 35$ ; $x = 10 > 6$ : extrapolation, sous réserve que la tendance se maintienne.)*
- **Exercice 3.** Une série a $r = 0{,}80$. Peut-on justifier un ajustement affine ? *(Réponse : non, $|r| < 0{,}9$.)*`,
        },
      ],
    },
    {
      id: 's-recap',
      titre: `Carte du Module`,
      blocs: [
        {
          type: 'recap',
          id: 'recap-m5',
          titre: `À retenir`,
          contenu: [
            `Avant toute prévision : vérifier $|r| \\geqslant 0{,}9$.`,
            `📘 Vocabulaire officiel : interpolation, extrapolation, ajustement justifié, réserve.`,
            `**Interpolation** = dans les données (fiable) ; **extrapolation** = au-delà (prudence).`,
            `Toute extrapolation se conclut par « sous réserve que la tendance se maintienne ».`,
          ],
        },
        {
          type: 'tip',
          id: 'fil-m5',
          titre: `Fil rouge`,
          contenu: `Jusqu'ici, on a supposé que les points suivaient une droite. Mais parfois le nuage est nettement **courbe** : une croissance qui s'accélère, une population qui explose. Peut-on quand même utiliser nos outils de droite ? Oui, grâce à une astuce : le changement de variable. C'est le Module 6, le dernier.`,
        },
      ],
    },
    {
      id: 's-eval',
      titre: `Auto-évaluation`,
      blocs: [
        {
          type: 'recap',
          id: 'eval-m5',
          titre: `Auto-évaluation — Module 5`,
          contenu: [
            `Je vérifie la condition $|r| \\geqslant 0{,}9$ avant de valider un modèle.`,
            `Je sais situer mon $x$ et dire si c'est une interpolation ou une extrapolation.`,
            `J'emploie le vocabulaire officiel (interpolation, extrapolation, ajustement justifié).`,
            `Je n'oublie jamais la phrase « sous réserve que la tendance se maintienne ».`,
            `Je repère un résultat absurde et je le signale.`,
          ],
        },
        {
          type: 'tip',
          id: 'eval-score-m5',
          titre: `Ton score`,
          contenu: [
            `🟢 **5/5** → Dernier module en vue, le changement de variable.`,
            `🟡 **3 ou 4** → Relis la brique 📘 et le ⑤ La Descente.`,
            `🔴 **0 à 2** → Reprends depuis le ② Le Réel.`,
          ],
        },
      ],
    },
  ],
};
