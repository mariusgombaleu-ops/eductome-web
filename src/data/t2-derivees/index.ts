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

export const tomeDerivees: Tome = {
  id: 't2-derivees',
  titre: 'Les Dérivées (Tome 2)',
  collection: 'les-cles-maths',
  matiere: 'Mathématiques',
  niveau: 'Terminale D',
  description:
    'Le Tome 1 t\'a appris à voir où va la courbe ; le Tome 2 t\'apprend à quelle vitesse elle y va. Du nombre dérivé à la tangente, avec l\'analogie du prix du cacao à Adjamé, le formulaire des dérivées usuelles et la méthode de rédaction qui rafle tous les points.',
  objectifs: [
    'Donner un sens concret à la vitesse instantanée d\'une courbe en un point (le nombre dérivé)',
    'Trouver la fonction dérivée de chaque famille de fonctions usuelles',
    'Dériver n\'importe quelle combinaison : somme, produit, quotient, composée',
    'Démontrer le sens de variation et dresser un tableau de variations parfait',
    'Calculer et tracer proprement l\'équation de la tangente à une courbe',
    'Maîtriser l\'Inégalité des Accroissements Finis et la dérivée de la réciproque',
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
  couverture: '/covers/tomes/cover-t2.png',
};
