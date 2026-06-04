import { Tome } from '../types/course';
import { chapitreIntro } from './t3-primitives/chap1';
import { chapitre1 } from './t3-primitives/chap2';
import { chapitre2 } from './t3-primitives/chap3';
import { chapitre3 } from './t3-primitives/chap4';
import { chapitre4 } from './t3-primitives/chap5';
import { chapitre5 } from './t3-primitives/chap6';
import { chapitre6 } from './t3-primitives/chap7';

export const courseT3: Tome = {
  id: "t3-primitives",
  titre: "Primitives & Calcul Intégral (Tome 3)",
  collection: 'les-cles-maths',
  matiere: 'Mathématiques',
  niveau: 'Terminale D',
  description: "Découvre le remontage de fonctions. Apprends à retrouver la fonction d'origine, à manipuler les intégrales définies, à calculer des aires et à déjouer tous les pièges du BAC.",
  objectifs: [
    'Comprendre intuitivement ce qu\'est une primitive (l\'opération inverse de la dérivée)',
    'Maîtriser le tableau complet des primitives usuelles et composées',
    'Calculer des intégrales définies avec le théorème fondamental',
    'Résoudre des problèmes de calcul d\'aires sous et entre les courbes',
    'Dominer les exercices de type BAC sur les intégrales',
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
  couverture: '/covers/t3-primitives.png',
};

