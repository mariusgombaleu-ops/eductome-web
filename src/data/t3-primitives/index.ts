import { Tome } from '../../types/course';
import { chapitreIntro } from './message-grand-frere';
import { chapitreSocle } from './socle';
import { chapitreM1 } from './m1';
import { chapitreM2 } from './m2';
import { chapitreM3 } from './m3';
import { chapitreM4 } from './m4';
import { chapitreM5 } from './m5';
import { chapitreM6 } from './m6';
import { chapitreSalle } from './salle-examen';
import { chapitreAnnexe } from './annexe';
import { chapitreConclusion } from './conclusion';

export const tomePrimitives: Tome = {
  id: 't3-primitives',
  titre: 'Primitives & Intégrales (Tome 3)',
  collection: 'les-cles-maths',
  matiere: 'Mathématiques',
  niveau: 'Terminale D',
  description:
    'Si les dérivées mesurent la vitesse, les primitives reconstruisent le trajet. Du gbaka qui accumule les kilomètres au volume d\'un vase de potier, ce tome dompte les primitives, l\'intégrale définie, l\'intégration par parties, le calcul d\'aires et les volumes de révolution — avec la méthode de rédaction qui rafle tous les points.',
  objectifs: [
    'Reconnaître la fonction de départ à partir de sa dérivée et maîtriser les primitives de référence',
    'Repérer les formes composées ($u\'u^n$, $\\dfrac{u\'}{u}$, $u\'e^u$…) et les primitiver d\'un geste',
    'Calculer une intégrale définie et une valeur moyenne sans erreur de signe',
    'Dompter l\'Intégration Par Parties, l\'outil avancé du BAC',
    'Mesurer une aire exacte entre courbes et rédiger la justification proprement',
    'Calculer le volume d\'un solide de révolution engendré par une rotation autour de $(Ox)$',
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
    chapitreSalle,
    chapitreAnnexe,
    chapitreConclusion,
  ],
  prix: {
    chapitre: 300,
    tome: 1500,
  },
  couleurCollection: '#1A3557',
  couverture: '/covers/tomes/cover-t3.png',
};
