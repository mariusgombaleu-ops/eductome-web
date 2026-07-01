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

export const tomeTrigonometrie: Tome = {
  id: 't6-trigonometrie',
  titre: 'Fonctions Trigonométriques (Tome 6)',
  collection: 'les-cles-maths',
  matiere: 'Mathématiques',
  niveau: 'Terminale D',
  description:
    "Le courant de la CIE qui ondule, la marée de Grand-Lahou, l'aiguille du surveillant général au marché du Cacao : tout ce qui tourne, oscille et vibre se met en équation avec le cosinus, le sinus et la tangente. Ce tome dompte le radian et le cercle, la périodicité et la parité, les formules d'addition et de duplication, les limites de référence et les dérivées composées, jusqu'à l'étude complète d'une fonction trigonométrique — la reine de l'épreuve. Même moteur que $\\ln u$ et $e^u$ du Tome 5, nouveau terrain.",
  objectifs: [
    "Placer n'importe quel angle en radians sur le cercle et en lire la mesure principale",
    "Exploiter périodicité et parité de $\\cos$, $\\sin$ et $\\tan$ pour réduire le domaine d'étude",
    "Manier les formules d'addition, de duplication et de linéarisation, et la forme $R\\cos(x - \\varphi)$",
    "Connaître les limites de référence en $0$ et dériver $\\sin u$, $\\cos u$, $\\tan u$ sans trembler",
    "Résoudre équations et inéquations trigonométriques et mener l'étude complète d'une fonction",
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
  couverture: '/covers/tomes/Tome-06-Fonctions-Trigo.png',
};
