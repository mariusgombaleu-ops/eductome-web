import { Chapitre } from '../../types/course';

export const chapitreSocle: Chapitre = {
  id: 't1-socle',
  titre: `Le Socle — Les 3 Réflexes à Réveiller`,
  duree: 10,
  niveau: 'BASE',
  xpGain: 15,
  gratuit: true,
  sections: [
    {
      id: 's1',
      titre: `LE SOCLE — Les 3 Réflexes à Réveiller Avant d'Attaquer`,
      blocs: [
        {
          type: 'table',
          id: 'tbl1',
          headers: [`🔧 CE QU'ON FAIT ICI`],
          rows: [
            [`Pas de nouvelle notion — juste trois automatismes de Première D qu'on dépoussière`],
            [`Ces trois réflexes sont les outils que tu utiliseras dès le Module 2`],
          ],
        },
        {
          type: 'dialogue',
          id: 'dlg2',
          pf: `Grand Frère, j'ai jeté un coup d'œil au gros chapitre sur les limites. Franchement, ça a l'air bizarre avec tous ces symboles et les infinis partout. Mais ne t'inquiète pas, j'ai bien géré ma Première D, je connais mes leçons. On peut sauter les rappels et attaquer le vrai BAC directement ?`,
        },
        {
          type: 'dialogue',
          id: 'dlg3',
          gf: `Calme ton cœur, Champion(ne). C'est bien d'avoir de l'assurance, mais la Terminale D, c'est un autre match. Les limites ne sont pas compliquées en soi — sauf si tu pars au front avec une machette émoussée. Là, tu vas te faire coincer dès la première question. Viens, on s'assoit deux minutes. On réveille trois petits réflexes qui dorment dans ton cerveau. Quand ils seront affûtés, la suite va glisser toute seule.`,
        },
      ],
    },
    {
      id: 's2',
      titre: `🔧 Outil 1 — La Factorisation · L'identité $a^2 - b^2$`,
      blocs: [
        {
          type: 'text',
          id: 'b4',
          contenu: `Le premier outil à dépoussiérer, c'est la factorisation. Plus précisément, une formule que tu manipules depuis le collège : l'identité remarquable $a^2 - b^2$.

Pourquoi on en parle avant même d'avoir écrit le mot « limite » sur ta copie ? Parce qu'au Module 2, tu vas te retrouver bloqué devant des fractions qui s'annulent en haut et en bas. C'est le fameux mur du $\\dfrac{0}{0}$. Pour le traverser, ta seule arme sera de découper l'expression et de simplifier ce qui coince.

Test rapide. Si je te montre $x^2 - 16$, ton cerveau doit voir tout de suite $x^2 - 4^2$. Et sans hésiter, tu écris $(x - 4)(x + 4)$. Ce geste tout simple débloque des calculs entiers face au correcteur.`,
        },
        {
          type: 'rule',
          id: 'rule5',
          titre: `Règle`,
          contenu: `Pour tous réels $a$ et $b$ :

$$a^2 - b^2 = (a - b)(a + b)$$

C'est ton outil de base pour casser les expressions du second degré et libérer ta copie des pièges d'indétermination.`,
        },
      ],
    },
    {
      id: 's3',
      titre: `🔧 Outil 2 — L'Expression Conjuguée`,
      blocs: [
        {
          type: 'text',
          id: 'b6',
          contenu: `Le deuxième outil à remettre en place, c'est l'expression conjuguée. Au Module 3, les racines carrées vont s'inviter dans tes fractions et tenter de te bloquer la route. C'est là que tu sors leur jumeau.

Si tu as sous les yeux une expression du type $\\sqrt{A} - B$, son conjugué est exactement la même chose, mais avec le signe du milieu inversé : $\\sqrt{A} + B$.

Pourquoi ce geste ? Parce qu'en multipliant les deux blocs, la racine s'envole grâce à notre identité remarquable. Le produit $(\\sqrt{A} - B)(\\sqrt{A} + B)$ devient simplement $A - B^2$. Un calcul propre, sans racine pour t'embêter.

Exemple chiffré pour fixer l'idée. Prends $\\sqrt{x + 1} - 3$. Son expression conjuguée est $\\sqrt{x + 1} + 3$. En les multipliant au brouillon :

$$(\\sqrt{x + 1} - 3)(\\sqrt{x + 1} + 3) = (\\sqrt{x + 1})^2 - 3^2 = x + 1 - 9 = x - 8$$

Retiens bien ce mouvement — c'est exactement la technique qu'on utilisera pour nettoyer les fonctions irrationnelles.`,
        },
        {
          type: 'warning',
          id: 'warn7',
          titre: `Piège à éviter`,
          contenu: `Lorsque tu multiplies le numérateur d'une fraction par son expression conjuguée, tu dois **obligatoirement** multiplier le dénominateur par ce même conjugué. Si tu oublies le bas en chemin, tu changes la valeur de la fraction et tout ton développement devient faux. Point de vigilance absolu.`,
        },
      ],
    },
    {
      id: 's4',
      titre: `🔧 Outil 3 — L'Ensemble de Définition · La Chasse aux Dénominateurs Nuls`,
      blocs: [
        {
          type: 'text',
          id: 'b8',
          contenu: `Le troisième réflexe, c'est de regarder où tu mets les pieds : l'ensemble de définition. Tu te souviens de ton prof qui criait en classe, la craie dans la main : « On ne divise jamais par zéro ! » Tout le monde hochait la tête. Et au premier devoir, la moitié de la classe tombait dans le panneau.

Dès qu'une fonction se présente sous forme de fraction (on appelle ça une fonction rationnelle), ton premier travail est de repérer les valeurs interdites qui font paniquer ta calculatrice. Ce sont précisément ces valeurs qui déclenchent les formes indéterminées que nous allons apprendre à dompter.

Regarde la fonction $g$ définie par $g(x) = \\dfrac{2x - 3}{x - 5}$. Pour qu'elle fonctionne, il faut que son dénominateur ne s'annule pas. On pose donc la condition $x - 5 \\neq 0$, ce qui donne $x \\neq 5$. Sa zone de sécurité — son ensemble de définition — c'est tout $\\mathbb{R}$ privé de ce point gênant.`,
        },
        {
          type: 'rule',
          id: 'copie9',
          titre: `La Copie Parfaite`,
          contenu: `$$D_g = \\mathbb{R} \\setminus \\{5\\} = \\,]-\\infty\\,;\\,5[\\,\\cup\\,]5\\,;\\,+\\infty[$$

Les **deux écritures** sont valides au BAC. La forme ensembliste $\\mathbb{R} \\setminus \\{5\\}$ est plus rapide ; la forme avec les intervalles est plus explicite — choisis selon ce que demande l'énoncé.`,
        },
        {
          type: 'warning',
          id: 'warn10',
          titre: `Piège à éviter`,
          contenu: `Sur ta copie, ne te contente jamais d'écrire « $x \\neq 5$ ». Le correcteur attend la forme ensembliste. Le « $x \\neq 5$ » reste au brouillon.`,
        },
        {
          type: 'tip',
          id: 'tip11',
          titre: `Conseil`,
          contenu: `Prends l'habitude de noter ces trois réflexes sur un coin de ton brouillon avant tout calcul de limite. Réveiller tes automatismes deux minutes en amont t'évitera de t'emmêler les pinceaux au moment de rédiger.`,
        },
      ],
    },
    {
      id: 's5',
      titre: `🚀 Récap du Socle — Où tu vas utiliser ces 3 outils`,
      blocs: [
        {
          type: 'table',
          id: 'tbl12',
          headers: [`Outil réveillé ici`, `Tu en auras besoin dans...`],
          rows: [
            [`① Factorisation — a² − b² = (a−b)(a+b)`, `Module 2 — Lever le mur du 0/0 par factorisation et simplification du facteur (x−a)`],
            [`② Expression conjuguée — (√A − B)(√A + B) = A − B²`, `Module 3 — Briser le cadenas des racines carrées dans les formes 0/0 et +∞−∞`],
            [`③ Ensemble de définition — valeurs interdites`, `Tous les modules — identifier les points critiques avant tout calcul de limite`],
          ],
        },
        {
          type: 'text',
          id: 'b13',
          contenu: `**Pont vers le Module 1.** Tes trois outils sont affûtés. Maintenant, on rentre dans le vif du sujet : comprendre **ce qu'est vraiment une limite**, avant même d'en calculer une seule. Tourne la page, Champion(ne).`,
        },
      ],
    },
  ],
};
