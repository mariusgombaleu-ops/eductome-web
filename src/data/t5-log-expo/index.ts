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

export const tomeLogExpo: Tome = {
  id: 't5-log-expo',
  titre: 'Logarithme & Exponentielle (Tome 5)',
  collection: 'les-cles-maths',
  matiere: 'Mathématiques',
  niveau: 'Terminale D',
  description:
    "Le logarithme décroche les exposants coincés en hauteur, l'exponentielle reconstruit l'explosion : deux fonctions miroir au cœur de l'analyse de Terminale D. De la rumeur de Yopougon qui double chaque heure au pH du laboratoire, du seuil d'un capital placé au choc des titans à l'infini, ce tome dompte $\\ln$, $\\exp$, le logarithme décimal, les puissances réelles et les croissances comparées — avec la méthode de rédaction qui rafle tous les points.",
  objectifs: [
    "Définir le logarithme népérien, poser une condition d'existence et manier ses propriétés algébriques",
    "Dériver $\\ln u$ en $u'/u$, reconnaître les primitives de cette forme et résoudre les seuils $q^{n} > k$",
    "Maîtriser la fonction exponentielle, réciproque du logarithme, sa dérivée $u'e^u$ et le changement de variable $X = e^x$",
    "Relier logarithme décimal, pH et exponentielles de base $a$ aux outils $\\ln$ et $\\exp$",
    "Classer $\\ln x$, $x^\\alpha$ et $e^x$ par croissance comparée pour lever les formes indéterminées",
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
  couverture: '/covers/tomes/cover-t5.png',
};
