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

export const tomeStatistiques: Tome = {
  id: 't8-statistiques',
  titre: 'Statistiques (Tome 8)',
  collection: 'les-cles-maths',
  matiere: 'Mathématiques',
  niveau: 'Terminale D',
  description:
    "Du carnet de notes d'une classe de Terminale D aux recettes des chauffeurs de woro-woro, ce tome quitte le hasard pur du Tome 7 pour les données réelles du terrain. On apprend à représenter une série double par un nuage de points, à trouver son centre G, à mesurer la force du lien entre deux variables (covariance, coefficient de corrélation), à tracer la meilleure droite (moindres carrés et Mayer), à prévoir avec prudence (interpolation, extrapolation) et à redresser un nuage courbe par changement de variable ln.",
  objectifs: [
    "Représenter un nuage de points et calculer le point moyen $G(\\bar{x} ; \\bar{y})$",
    "Calculer la covariance et le coefficient de corrélation linéaire $r$, puis l'interpréter",
    "Déterminer les droites d'ajustement de $Y$ en $X$ et de $X$ en $Y$ par les moindres carrés",
    "Construire une droite de Mayer et vérifier son passage par $G$",
    "Prévoir par interpolation ou extrapolation, et ajuster un nuage courbe via $Z = \\ln y$",
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
  couverture: '/covers/tomes/Tome-08-Statistiques.png',
};
