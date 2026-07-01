import { Tome } from '../../types/course';
import { chapitreIntro } from './message-grand-frere';
import { chapitreSocle } from './socle';
import { chapitreM1 } from './m1';
import { chapitreM2 } from './m2';
import { chapitreM3 } from './m3';
import { chapitreM4 } from './m4';
import { chapitreM5 } from './m5';
import { chapitreM6 } from './m6';
import { chapitreSalle } from './salle-entrainement';
import { chapitreAnnexe } from './annexe';
import { chapitreConclusion } from './conclusion';

export const tomeComplexes: Tome = {
  id: 't10-complexes',
  titre: 'Nombres Complexes (Tome 10)',
  collection: 'les-cles-maths',
  matiere: 'Mathématiques',
  niveau: 'Terminale D',
  description:
    "Le tome le plus emblématique de la Terminale D : du portefeuille à deux caisses (FCFA et imaginaire) à la statue qu'on fait tourner sur la Place de la République, on quitte l'espace du Tome 9 pour entrer dans le plan magique des complexes. On apprivoise le nombre i et la forme algébrique (conjugué, module, division), on passe aux formes trigonométrique et exponentielle pour plier les puissances avec Moivre, on résout l'impossible dans ℂ (discriminant négatif, racines carrées, factorisation), on répartit les racines n-ièmes en polygone régulier, on lit la géométrie dans les affixes (distances, angles, lieux), puis on caractérise les transformations z' = az + b et les suites de points.",
  objectifs: [
    "Maîtriser la forme algébrique : partie réelle, imaginaire, conjugué, module, division",
    "Passer aux formes trigonométrique et exponentielle et appliquer la formule de Moivre",
    "Résoudre dans ℂ : second degré réel ou complexe, racines carrées, factorisation",
    "Déterminer les racines n-ièmes et les placer en polygone régulier sur le cercle",
    "Traiter la géométrie par les affixes : distances, angles orientés, lieux de points",
    "Caractériser les transformations z' = az + b et étudier les suites de points",
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
  prix: { chapitre: 300, tome: 1500 },
  couleurCollection: '#1A3557',
  couverture: '/covers/tomes/Tome-10-Nombres-Complexes.png',
};
