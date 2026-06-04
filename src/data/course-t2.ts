import { Tome } from '../types/course';
import { chapitreIntro } from './t2-derivees/chap1';
import { chapitre1 } from './t2-derivees/chap2';
import { chapitre2 } from './t2-derivees/chap3';
import { chapitre3 } from './t2-derivees/chap4';
import { chapitre4 } from './t2-derivees/chap5';
import { chapitre5 } from './t2-derivees/chap6';
import { chapitre6 } from './t2-derivees/chap7';

export const courseT2: Tome = {
  id: "t2-derivees",
  titre: "Les Dérivées (Tome 2)",
  collection: 'les-cles-maths',
  matiere: 'Mathématiques',
  niveau: 'Terminale D',
  description: "Comprends la vitesse instantanée et la pente avant de calculer. Maîtrise le calcul des dérivées, l'étude des variations, les tangentes et l'optimisation pour rafler tous les points au BAC.",
  objectifs: [
    'Comprendre intuitivement ce qu\'est une dérivée (vitesse instantanée et inclinaison)',
    'Calculer le nombre dérivé et la fonction dérivée de n\'importe quelle fonction',
    'Utiliser le signe de la dérivée pour dresser un tableau de variations sans trembler',
    'Résoudre des problèmes d\'optimisation concrets (bénéfices, surfaces)',
    'Dominer les exercices de type BAC sur les dérivées et les tangentes',
  ],
  chapitres: [
    chapitreIntro,
    chapitre1,
    chapitre2,
    chapitre3,
    chapitre4,
    chapitre5,
    chapitre6,
  ],
  prix: {
    chapitre: 300,
    tome: 1500,
  },
  couleurCollection: '#1A3557',
  couverture: '/covers/t2-derivees.png',
};

