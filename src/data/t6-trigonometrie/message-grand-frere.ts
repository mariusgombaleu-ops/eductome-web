import { Chapitre } from '../../types/course';

export const chapitreIntro: Chapitre = {
  id: 't6-intro',
  titre: `Introduction : Message du Grand Frère`,
  duree: 5,
  niveau: 'BASE',
  xpGain: 10,
  gratuit: true,
  sections: [
    {
      id: 's1',
      titre: `On y est, Champion(ne) !`,
      blocs: [
        {
          type: 'text',
          id: 'b1',
          contenu: `Salut Champion(ne). On y est. Le fameux Tome 6. Je sais très bien ce qui se passe dans ta tête en ce moment. Tu as vu le titre « Fonctions trigonométriques », tu as repensé aux équations à rallonge de la classe de Première, aux tableaux de valeurs interminables, et tu as senti l'appréhension monter. Faut pas gnan, pose ton sac et respire un grand coup. On va démonter cette montagne d'inquiétudes pierre par pierre, ensemble, sans laisser personne sur le bord de la route.`,
        },
      ],
    },
    {
      id: 's2',
      titre: `Le pont qu'on bâtit entre le Tome 5 et le Tome 6`,
      blocs: [
        {
          type: 'text',
          id: 'b2',
          contenu: `En Tome 5, tu as maîtrisé la dérivée composée avec $\\ln u$ et $e^u$. Tu as transpiré dessus, tu as noirci des pages de brouillon pour comprendre comment la chaîne se déploie. Eh bien, j'ai une excellente nouvelle pour toi : en Tome 6, le même outil revient, avec exactement la même mécanique. Le réflexe $(\\ln u)' = \\dfrac{u'}{u}$ et $(e^u)' = u'\\,e^u$ se prolonge mot pour mot en $(\\sin u)' = u'\\cos u$ et $(\\cos u)' = -u'\\sin u$. Même moteur, nouveau terrain. La seule vraie nouveauté, c'est que les fonctions d'aujourd'hui ont un super-pouvoir que le logarithme et l'exponentielle n'auront jamais : elles sont **périodiques** — elles se répètent indéfiniment.`,
        },
      ],
    },
    {
      id: 's3',
      titre: `La Grande Idée : tout ce qui tourne et qui oscille`,
      blocs: [
        {
          type: 'text',
          id: 'b3',
          contenu: `C'est là que réside la Grande Idée de ce tome. Pourquoi est-ce qu'on s'acharne à t'apprendre ça depuis le collège ? Parce que les mathématiques ne sont pas des hiéroglyphes inventés pour te compliquer la vie au tableau. Les fonctions trigonométriques décrivent rigoureusement tout ce qui tourne, tout ce qui oscille, tout ce qui vibre dans notre monde.

Regarde le courant électrique de la CIE qui alimente les maquis d'Abidjan : ce n'est pas un flux droit et ennuyeux. Les alternateurs des barrages de Soubré et de Kossou tournent sans cesse et génèrent une onde sinusoïdale parfaite à $50\\text{ Hz}$. La tension monte, redescend, s'inverse, et remonte avec une régularité absolue. Pense aussi à la marée sur la côte à Grand-Lahou : l'océan ne se gonfle pas au hasard, l'eau avance vers la plage, atteint son point culminant, puis se retire selon une courbe en cosinus dictée par la lune. Ou prends tout simplement la grosse montre au poignet du surveillant général au marché du Cacao : chaque heure accomplie est un tour complet sur le cadran, et la boucle recommence à l'infini. Ce battement régulier, cette pulsation universelle, c'est ce que le cosinus et le sinus arrivent à capturer et à mettre en équation.`,
        },
      ],
    },
    {
      id: 's4',
      titre: `Comment on va travailler ensemble`,
      blocs: [
        {
          type: 'text',
          id: 'b4',
          contenu: `C'est pour cette raison précise qu'avec moi, tu ne vas pas apprendre comme un perroquet. On va jouer sur un triple registre en permanence : 🟢 le Grand Frère t'explique avec des images, 📘 le Langage Officiel du BAC te donne les mots exacts que le correcteur attend, et ✍️ la Copie Parfaite te montre comment rédiger proprement. Le phénomène concret AVANT la formule. Comprendre AVANT de calculer. Toujours.

On va d'abord placer les angles à la main, on va visualiser ce cercle tourner dans notre esprit, on va sentir l'inclinaison de la pente pour la tangente. Ce n'est qu'une fois que ton cerveau aura intégré le mouvement physique qu'on posera la formule. La rigueur devient évidente quand l'intuition est solidement plantée, Champion(ne). Si tu visualises d'abord, les équations s'écrivent presque toutes seules sur ta copie d'examen.`,
        },
      ],
    },
    {
      id: 's5',
      titre: `Ta Feuille de Route — Les 6 Modules`,
      blocs: [
        {
          type: 'table',
          id: 'tbl5',
          headers: [`Module`, `Mission`, `L'enjeu pour le BAC`],
          rows: [
            [`M1 : Radians et cercle`, `Dompter la montre mathématique`, `Placer n'importe quel angle en radians sans jamais hésiter.`],
            [`M2 : Cosinus et Sinus`, `Maîtriser les vagues`, `Exploiter périodicité et parité pour réduire le domaine d'étude.`],
            [`M3 : La Tangente`, `La pente de la montagne`, `Gérer les asymptotes verticales proprement.`],
            [`M4 : Formules de trigo`, `L'art de la métamorphose`, `Linéariser vite et bien, transformer une somme en une seule onde.`],
            [`M5 : Limites et dérivées`, `Le mouvement décodé`, `Connaître les limites de référence et dériver sans trembler.`],
            [`M6 : Équations et étude de fonction`, `Le combat final`, `Résoudre, encadrer, et mener l'étude complète, la reine de l'épreuve.`],
          ],
        },
      ],
    },
    {
      id: 's6',
      titre: `Mon dernier conseil avant que tu ouvres le Module 1`,
      blocs: [
        {
          type: 'text',
          id: 'b6',
          contenu: `Je me souviens de ma propre année de Terminale au Lycée Classique d'Abidjan, promotion 2013-2016 — le « Cacao » de Cocody. Le jour où notre professeur a affiché l'avalanche des formules d'addition et de duplication au tableau, un silence lourd est tombé sur la classe. Mes camarades essayaient de tout photographier d'un coup. Le résultat ? Au premier devoir commun, sous la pression du temps, plus de la moitié de la salle a inversé les signes plus et moins. C'est le piège à éviter par excellence, l'erreur classique qui coûte des points.

Toi, Champion(ne), tu vas procéder autrement. Tu ne vas pas entasser les formules dans ta mémoire à court terme. Tu vas apprendre à les **retrouver**, à comprendre comment elles s'emboîtent les unes dans les autres, comme les pièces d'un moteur bien huilé.

Laisse tes doutes de Première à la porte. Prends quelques feuilles de brouillon, ton stylo bleu, et une bonne dose de détermination. On va décoder ce langage ensemble, pas à pas. Tu es prêt(e), Champion(ne) ? On y va.

**Marius Dion — Ton Grand Frère**

*P.S. — Un conseil de pro avant même de démarrer le premier module : prends ta calculatrice scientifique tout de suite et vérifie qu'elle est bien réglée en mode **radians** (et non en degrés). C'est le tout premier point de vigilance de l'année. Un mauvais réglage ici, et tous tes efforts de calcul s'effondrent. Règle ça, et rejoins-moi au Module 1.*`,
        },
      ],
    },
  ],
};
