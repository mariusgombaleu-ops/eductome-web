import { Tome } from '../../types/course';
import { chapitreIntro } from './message-grand-frere';
import { chapitreSocle } from './socle';
import { chapitreM1 } from './m1';
import { chapitreM2 } from './m2';
import { chapitreM3 } from './m3';
import { chapitreM4 } from './m4';
import { chapitreM5 } from './m5';
import { chapitreM6 } from './m6';
import { chapitreM7 } from './m7';
import { chapitreSalle } from './salle-entrainement';
import { chapitreAnnexe } from './annexe';
import { chapitreConclusion } from './conclusion';

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
    chapitreSocle,
    chapitreM1,
    chapitreM2,
    chapitreM3,
    chapitreM4,
    chapitreM5,
    chapitreM6,
    chapitreM7,
    chapitreSalle,
    chapitreAnnexe,
    chapitreConclusion,
  ],
  prix: {
    chapitre: 300,
    tome: 1500,
  },
  couleurCollection: '#1A3557',
  couverture: '/covers/t1-limites.png',
};
