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

export const tomeGeometrieEspace: Tome = {
  id: 't9-geometrie-espace',
  titre: 'Géométrie dans l\'Espace (Tome 9)',
  collection: 'les-cles-maths',
  matiere: 'Mathématiques',
  niveau: 'Terminale D',
  description:
    "Du livreur de gaz d'Adjamé qui grimpe au troisième étage au ballon figé en plein vol au Stade Félix Houphouët-Boigny, ce tome quitte le plan du Tome 8 pour s'élever dans la troisième dimension. On apprend à manipuler les vecteurs de l'espace (colinéarité, coplanarité), à placer un barycentre, à manier le produit scalaire 3D, à écrire droites (paramétrique) et plans (cartésienne), à diagnostiquer les positions relatives (jusqu'aux droites gauches du pont HKB), à gérer toutes les perpendicularités et le projeté orthogonal, puis à calculer une distance point-plan et couper une sphère par un plan.",
  objectifs: [
    "Manipuler les vecteurs de l'espace : coordonnées, milieu, distance, colinéarité, coplanarité",
    "Déterminer un barycentre, un isobarycentre et réduire une somme vectorielle pondérée",
    "Utiliser le produit scalaire 3D : orthogonalité, normes et mesures d'angles",
    "Écrire la représentation paramétrique d'une droite et l'équation cartésienne d'un plan",
    "Étudier les positions relatives, gérer les perpendicularités et le projeté orthogonal",
    "Calculer une distance point-plan et caractériser l'intersection d'une sphère et d'un plan",
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
  prix: { chapitre: 300, tome: 1500 },
  couleurCollection: '#1A3557',
  couverture: '/covers/tomes/cover-t9.jpeg',
};
