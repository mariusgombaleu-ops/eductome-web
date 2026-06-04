import { Tome } from '../types/course';

export const courseT11: Tome = {
  id: "t11-eq-diff",
  titre: "Les Équations Différentielles (Tome 11)",
  description: "Concepts clés et exercices interactifs pour maîtriser les équations différentielles sur mobile.",
  chapitres: [
    {
      id: "chap-1",
      number: 1,
      titre: "Les 3 Cas Fondamentaux",
      sections: [
        {
          id: "intro",
          titre: "Message du Grand Frère",
          blocs: [
            {
              id: "b1",
              type: "tip",
              titre: "L'essentiel pour commencer",
              contenu: "Les équations différentielles, c'est mécanique ! Identifie le 'moule' et applique la recette. Concentrons-nous sur la pratique. Le cours complet sera en PDF !"
            }
          ]
        },
        {
          id: "cas-1",
          titre: "Cas 1 : y' = ay",
          blocs: [
            {
              id: "b2",
              type: "warning",
              titre: "Concept Clé : Solution Homogène",
              contenu: "L'équation $y' = ay$ a pour solution générale : $y(x) = C e^{ax}$ (avec $C \\in \\mathbb{R}$)."
            },
            {
              id: "b3",
              type: "exercise",
              enonce: "Résous $y' = 5y$ avec $y(0) = 3$.",
              etapes: [
                { name: "Identification", contenu: "Ici $a = 5$, donc la solution générale est $y(x) = C e^{5x}$." },
                { name: "Condition Initiale", contenu: "On utilise $y(0) = 3$ : $C e^0 = 3 \\implies C = 3$." }
              ],
              reponse: "y(x) = 3e^{5x}"
            }
          ]
        },
        {
          id: "cas-2",
          titre: "Cas 2 : y' = ay + b",
          blocs: [
            {
              id: "b4",
              type: "warning",
              titre: "Concept Clé : Avec Second Membre",
              contenu: "La solution générale est de la forme $y(x) = C e^{ax} - \\frac{b}{a}$. Le signe '-' est crucial !"
            },
            {
              id: "b5",
              type: "exercise",
              enonce: "Résous $y' = 3y + 6$ avec $y(0) = 5$.",
              etapes: [
                { name: "Identification", contenu: "Ici $a = 3$ et $b = 6$. La solution est $y(x) = C e^{3x} - \\frac{6}{3} = C e^{3x} - 2$." },
                { name: "Condition Initiale", contenu: "On utilise $y(0) = 5$ : $C e^0 - 2 = 5 \\implies C - 2 = 5 \\implies C = 7$." }
              ],
              reponse: "y(x) = 7e^{3x} - 2"
            }
          ]
        }
      ],
      quiz: [
        {
          id: "q1-1",
          type: "quiz",
          question: "Quelle est la forme de la solution générale de l'équation $y' = 2y$ ?",
          options: [
            "$y(x) = C e^{-2x}$",
            "$y(x) = C e^{2x}$",
            "$y(x) = 2x + C$"
          ],
          bonneReponse: 1,
          explication: "Pour $y' = ay$, la solution est $C e^{ax}$. Ici $a=2$."
        }
      ]
    },
    {
      id: "chap-2",
      number: 2,
      titre: "Les Pièges à Éviter",
      sections: [
        {
          id: "pieges",
          titre: "Les erreurs qui coûtent cher",
          blocs: [
            {
              id: "p1",
              type: "warning",
              titre: "Concept Clé : Vérifier sa solution",
              contenu: "Dérive toujours ta solution finale et remplace-la dans l'équation de départ pour vérifier si tu as juste !"
            },
            {
              id: "p2",
              type: "exercise",
              enonce: "Vérifie si $y(x) = 2e^{3x}$ est solution de $y' = 3y$.",
              etapes: [
                { name: "Dériver", contenu: "Je dérive : $y'(x) = 2 \\times 3 e^{3x} = 6e^{3x}$." },
                { name: "Remplacer", contenu: "Je calcule $3y = 3 \\times 2e^{3x} = 6e^{3x}$. On a bien $y' = 3y$." }
              ],
              reponse: "Oui, c'est une solution."
            }
          ]
        }
      ],
      quiz: [
        {
          id: "q2-1",
          type: "quiz",
          question: "Que faut-il faire pour être sûr à 100% de sa réponse le jour de l'examen ?",
          options: [
            "Refaire le calcul deux fois",
            "Dériver sa solution et vérifier l'équation"
          ],
          bonneReponse: 1,
          explication: "Toujours vérifier ! En dérivant ta solution finale tu dois retomber sur une égalité."
        }
      ]
    }
  ]
};

