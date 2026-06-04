import { Tome } from '../types/course';
import { chapitreIntro } from './t1-limites/chap1';
import { chapitre1 } from './t1-limites/chap2';
import { chapitre2 } from './t1-limites/chap3';
import { chapitre3 } from './t1-limites/chap4';
import { chapitre4 } from './t1-limites/chap5';
import { chapitre5 } from './t1-limites/chap6';
import { chapitre6 } from './t1-limites/chap7';

export const courseT1: Tome = {
  id: "t1-limites",
  titre: "Les Limites (Tome 1)",
  description: "Comprends vraiment ce qu'est une limite avant de la calculer. Avec l'analogie du gbaka d'Adjamé, la méthode en 5 étapes, et les astuces des majors du Lycée Classique.",
  chapitres: [
    chapitreIntro,
    chapitre1,
    chapitre2,
    chapitre3,
    chapitre4,
    chapitre5,
    chapitre6,
  ]
};
