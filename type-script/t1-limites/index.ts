// src/data/t1-limites/index.ts
// MÉTADONNÉES — TOME 1 : LES LIMITES
// Collection Les Clés Maths · EDUCTOME

import { Tome } from '../../types/course';
import { chapitreIntro } from './chap1';
import { chapitre1 } from './chap2';
import { chapitre2 } from './chap3';
import { chapitre3 } from './chap4';
import { chapitre4 } from './chap5';
import { chapitre5 } from './chap6';
import { chapitre6 } from './chap7';

export const tomeLesLimites: Tome = {
  id: 'les-limites-t1',
  titre: 'Les Limites (Tome 1)',
  collection: 'les-cles-maths',
  matiere: 'Mathématiques',
  niveau: 'Terminale D',
  description:
    'Comprends vraiment ce qu\'est une limite avant de la calculer. Avec l\'analogie du gbaka d\'Adjamé, la méthode en 5 étapes, et les astuces des majors du Lycée Classique.',
  objectifs: [
    'Comprendre intuitivement ce qu\'est une limite avec des exemples du quotidien',
    'Calculer n\'importe quelle limite sans paniquer devant ta copie',
    'Maîtriser les 4 formes indéterminées avec les bonnes techniques',
    'Utiliser les raccourcis des majors pour gagner du temps au BAC',
    'Dominer les exercices type BAC sur les limites et les asymptotes',
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
  couverture: '/covers/t1-limites.png',
};
