// src/data/t3-primitives/index.ts
import { Tome } from '../../types/course';
import { chapitreIntro } from './chap1';
import { chapitre1 } from './chap2';

export const tomeLesPrimitives: Tome = {
  id: 'primitives-integrales-t3',
  titre: 'Primitives & Calcul Intégral (Tome 3)',
  collection: 'les-cles-maths',
  matiere: 'Mathématiques',
  niveau: 'Terminale D',
  description:
    'Découvre le remontage de fonctions. Apprends à retrouver la fonction d\'origine à partir de sa variation, à manipuler les intégrales définies, à calculer des aires sur la lagune et à déjouer tous les pièges du BAC.',
  objectifs: [
    'Comprendre intuitivement qu\'une primitive est l\'opération inverse de la dérivée',
    'Calculer la primitive générale et l\'unique primitive vérifiant une condition initiale',
    'Maîtriser les propriétés de l\'intégrale définie (Chasles, linéarité, positivité)',
    'Calculer des aires exactes sous une courbe et entre deux courbes en unités d\'aire',
    'Dominer les exercices de synthèse de type BAC sur les primitives et la cinématique',
  ],
  chapitres: [
    chapitreIntro,
    chapitre1,
  ],
  prix: {
    chapitre: 300,
    tome: 1500,
  },
  couleurCollection: '#1A3557',
  couverture: '/covers/t3-primitives.png',
};
