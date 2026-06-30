import { Chapitre } from '../../types/course';

export const chapitreIntro: Chapitre = {
  id: 't8-intro',
  titre: `Introduction : Message du Grand Frère`,
  duree: 5,
  niveau: 'BASE',
  xpGain: 10,
  gratuit: true,
  sections: [
    {
      id: 's1',
      titre: `Bienvenu, Champion(ne)`,
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu: `On se retrouve pour le Tome 8, et laisse-moi te dire que tu arrives à un tournant. En T7, tu as affronté les probabilités. Tu mesurais la chance qu'une chose arrive : un dé qui tombe sur $6$, une boule rouge tirée du sac, un client qui pousse la porte du restaurant. On regardait surtout un événement isolé, et on essayait de deviner s'il allait se produire ou non. C'était passionnant, mais on restait dans le monde du hasard pur.

En T8, on change complètement de dimension. On quitte le hasard pour les **données réelles du terrain**. Tu vas mesurer le lien entre *deux* choses qui se passent en même temps — et surtout, tu vas apprendre à prédire l'une à partir de l'autre. Tu te souviens de l'espérance mathématique du Tome 7, cette valeur que tu attendais « en théorie » ? Eh bien ici, on s'attaque à sa grande sœur du monde réel : la moyenne observée, celle qu'on calcule à partir de vrais chiffres récoltés sur le terrain. Le pont entre les deux tomes, c'est exactement ça : on passe de ce qu'on *attend* à ce qu'on *constate*.`,
        },
      ],
    },
    {
      id: 's2',
      titre: `Débusquer les tendances cachées`,
      blocs: [
        {
          type: 'text',
          id: 'b2',
          contenu: `La statistique à deux variables, c'est l'art de débusquer les tendances cachées dans des données brutes. Imagine le carnet de notes d'une classe de Terminale D au Lycée Classique d'Abidjan : est-ce que les cracks en maths sont systématiquement les meilleurs en physique ? Pense aux chauffeurs de woro-woro qui sillonnent Yopougon du matin au soir : y a-t-il une vraie relation entre le nombre de trajets qu'ils font et leur recette du jour ? Regarde nos mamans au marché de Cocody : quand le prix du tas de tomates grimpe, comment la quantité vendue réagit-elle ? Ou prends ta propre boutique Selar : avec les ventes des six derniers mois, es-tu capable de deviner le chiffre d'affaires du mois prochain ?

C'est exactement ça, notre mission dans ce tome. On prend des données un peu chaotiques, on les croise, on calcule leur covariance, et on trace une ligne directrice pour lire l'avenir. On part du simple constat pour arriver à la prévision mathématique.

Tu connais cette scène classique dans nos lycées. Le prof remplit le tableau noir de colonnes interminables avec des $x_i$, des $y_i$, des $x_i y_i$, il aligne des sommes immenses à la craie, puis il se retourne, s'essuie les mains et lance : « Tout le monde a compris ? » Et là, le silence. Personne n'ose avouer qu'il a perdu le fil dès la moyenne $\\bar{x}$. C'est pour t'éviter ce moment que ce tome est construit avec une progression logique. On ne va pas recracher des formules par cœur : on va d'abord comprendre d'où elles viennent, avec une image du quartier avant chaque calcul.`,
        },
      ],
    },
    {
      id: 's3',
      titre: `Ta Feuille de Route — Les 6 Modules`,
      blocs: [
        {
          type: 'text',
          id: 'b3',
          contenu: `Voici la feuille de route. Six modules, six victoires concrètes à aller chercher.`,
        },
        {
          type: 'table',
          id: 'tbl-route',
          headers: [`Module`, `Ce qu'on va maîtriser`, `L'objectif BAC`],
          rows: [
            [`M1 — Nuage de points & point moyen`, `Placer les couples $(x_i ; y_i)$ et calculer $G(\\bar{x} ; \\bar{y})$.`, `Sécuriser les premiers points avec un graphique impeccable.`],
            [`M2 — Covariance & corrélation`, `Calculer $\\text{cov}(X,Y)$ et le coefficient $r$ sans t'emmêler.`, `Diagnostiquer si le lien entre les variables est fort, faible ou nul.`],
            [`M3 — Droite des moindres carrés`, `Trouver les droites de $Y$ en $X$ ET de $X$ en $Y$, qui se croisent en $G$.`, `Tracer la droite parfaite et faire des prévisions justes.`],
            [`M4 — Droites de Mayer`, `Construire un ajustement par la méthode des deux groupes.`, `Avoir une deuxième corde à ton arc quand le sujet l'impose.`],
            [`M5 — Interpolation & extrapolation`, `Utiliser l'équation pour prévoir, en justifiant la fiabilité.`, `Deviner l'inconnu avec prudence et la réserve attendue.`],
            [`M6 — Ajustement par changement de variable`, `Redresser un nuage courbe en nuage droit (via $\\ln$).`, `Traiter les modèles non affines, fréquents au BAC.`],
          ],
        },
      ],
    },
    {
      id: 's4',
      titre: `La nature de l'épreuve`,
      blocs: [
        {
          type: 'text',
          id: 'b4',
          contenu: `Un mot sur la nature de cette épreuve, Champion(ne). Au BAC, les statistiques à deux variables tombent presque toujours en Exercice 1 ou 2. C'est le terrain idéal pour ramasser un maximum de points et te mettre en confiance dès la première heure. Mais attention : ce n'est pas parce que c'est réputé abordable qu'on y va sans stratégie. Le correcteur attend de toi un double talent. D'un côté, manipuler ta calculatrice avec la précision d'un horloger pour ne pas fausser une moyenne. Une seule erreur de signe au départ, et tout l'exercice s'effondre. De l'autre, rédiger des phrases en français clair pour expliquer ce que signifie ton coefficient de corrélation $r$. Savoir calculer, c'est indispensable. Savoir expliquer ce qu'on a calculé, c'est ce qui transforme une copie moyenne en excellente copie.

Faut pas gnan devant les longues formules pleines de symboles $\\sum$. Je sais que ces équations intimident la première fois. À l'époque où je faisais mes classes au Cacao, entre 2013 et 2016, je voyais des camarades paniquer rien qu'à la vue de la formule de la variance. Pourtant, quand tu décortiques l'affaire, ce ne sont que des additions et des multiplications de base. Il suffit d'être méthodique, de tracer un tableau de brouillon propre, et le résultat tombe tout seul. C'est précisément le grand frère que je n'avais pas à l'époque que je veux être pour toi aujourd'hui.`,
        },
      ],
    },
    {
      id: 's5',
      titre: `Mon dernier mot avant le Socle`,
      blocs: [
        {
          type: 'text',
          id: 'b5',
          contenu: `Que tu révises sous un lampadaire à Adjamé, sur la table du salon à Yopougon, ou au calme dans une bibliothèque, retiens une chose : sur ce chapitre, la discipline bat toujours le talent brut. Respire un grand coup. Prends ta calculatrice, vérifie tes piles, sors ta règle et ton meilleur stylo. Tu es un(e) Champion(ne), on va plier ce programme ensemble, étape par étape.

**Marius Dion — Ton Grand Frère**
*EDUCTOME — Apprendre sans limites*

P.S. : Ne saute aucune étape dans les modules. Prendre le temps de visualiser le phénomène réel avant de poser les chiffres sur la feuille, c'est ton arme secrète.`,
        },
      ],
    },
  ],
};
