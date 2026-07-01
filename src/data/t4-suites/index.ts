import { Tome } from '../../types/course';
import { chapitreIntro } from './message-grand-frere';
import { chapitreSocle } from './socle';
import { chapitreM1 } from './m1';
import { chapitreM2 } from './m2';
import { chapitreM3 } from './m3';
import { chapitreM4 } from './m4';
import { chapitreM5 } from './m5';
import { chapitreSalle } from './salle-entrainement';
import { chapitreAnnexe } from './annexe';
import { chapitreConclusion } from './conclusion';

export const tomeSuites: Tome = {
  id: 't4-suites',
  titre: 'Suites Numériques (Tome 4)',
  collection: 'les-cles-maths',
  matiere: 'Mathématiques',
  niveau: 'Terminale D',
  description:
    "Là où les fonctions glissaient sur le continu, les suites avancent par bonds entiers. De la tontine d'Abobo au capital placé à intérêts composés, de la seringue du CHU au point fixe : ce tome dompte les suites arithmétiques, géométriques et récurrentes, la convergence monotone, le raisonnement par récurrence et les croissances comparées — avec la méthode de rédaction qui rafle tous les points.",
  objectifs: [
    "Étudier la monotonie et les bornes d'une suite, et conclure la convergence par le théorème de convergence monotone",
    "Maîtriser les suites arithmétiques : raison, terme général et somme de termes consécutifs",
    "Maîtriser les suites géométriques : raison, terme général, somme et limite selon $|q|$",
    "Mener le protocole complet d'une suite récurrente $u_{n+1} = f(u_n)$ : intervalle stable, monotonie, point fixe",
    "Démontrer une propriété par récurrence et lever une indétermination par croissance comparée",
  ],
  chapitres: [
    chapitreIntro,
    chapitreSocle,
    chapitreM1,
    chapitreM2,
    chapitreM3,
    chapitreM4,
    chapitreM5,
    chapitreSalle,
    chapitreAnnexe,
    chapitreConclusion,
  ],
  prix: {
    chapitre: 300,
    tome: 1500,
  },
  couleurCollection: '#1A3557',
  couverture: '/covers/tomes/Tome-04-Suites-Numeriques.png',
};
