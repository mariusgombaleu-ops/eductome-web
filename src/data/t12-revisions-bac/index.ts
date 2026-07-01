import { Tome } from '../../types/course';
import { chapitreIntro } from './message-grand-frere';
import { chapitreM1 } from './m1';
import { chapitreM2 } from './m2';
import { chapitreM3 } from './m3';
import { chapitreM4 } from './m4';
import { chapitreSalle } from './salle-entrainement';
import { chapitreAnnexe } from './annexe';
import { chapitreConclusion } from './conclusion';

export const tomeRevisionsBac: Tome = {
  id: 't12-revisions-bac',
  titre: 'Révisions BAC Complètes (Tome 12)',
  collection: 'les-cles-maths',
  matiere: 'Mathématiques',
  niveau: 'Terminale D',
  description:
    "La clé de voûte de toute la collection : zéro nouvelle notion, l'assemblage final où tes onze savoir-faire fusionnent pour devenir une force totale. On dresse la carte des liaisons entre les 11 tomes et les 5 formules universelles du BAC D, on décode l'anatomie d'un sujet et la gestion des 4 heures (plan de vol, 10 réflexes de survie, points gratuits, bouées « On admet que »), puis on corrige intégralement deux sujets BAC complets — n°1 (probabilités, complexes, fonction exponentielle) et n°2 (géométrie 3D, suites, fonction logarithme). Enfin, 5 exercices flash chronométrés (un par grand bloc) pour aiguiser la vitesse, et le formulaire universel complet en annexe.",
  objectifs: [
    "Connecter les notions des 11 tomes et maîtriser les 5 formules universelles du BAC D",
    "Décoder l'anatomie d'un sujet et gérer ses 4 heures avec les 10 réflexes de survie",
    "Corriger intégralement un sujet BAC n°1 : probabilités, complexes, fonction exponentielle",
    "Corriger intégralement un sujet BAC n°2 : géométrie 3D, suites, fonction logarithme",
    "Gagner en vitesse sur 5 exercices flash chronométrés, un par grand bloc",
  ],
  chapitres: [
    chapitreIntro,
    chapitreM1,
    chapitreM2,
    chapitreM3,
    chapitreM4,
    chapitreSalle,
    chapitreAnnexe,
    chapitreConclusion,
  ],
  prix: { chapitre: 300, tome: 1500 },
  couleurCollection: '#1A3557',
  couverture: '/covers/tomes/Tome-12-Revisions-BAC.png',
};
