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

export const tomeEquationsDiff: Tome = {
  id: 't11-equations-diff',
  titre: 'Les Équations Différentielles (Tome 11)',
  collection: 'les-cles-maths',
  matiere: 'Mathématiques',
  niveau: 'Terminale D',
  description:
    "Le dernier chapitre d'analyse de la Terminale D, là où l'exponentielle du Tome 5 et la trigonométrie du Tome 6 deviennent les solutions des équations. La grande bascule : l'inconnue n'est plus un nombre mais une fonction entière, le scénario complet de l'évolution d'un phénomène. De la bassine percée (décroissance $y' + ay = 0$) au robinet qui réalimente (équilibre $y' + ay = b$), du principe de superposition à la balançoire qui oscille ($y'' + \\omega^2 y = 0$) et la bille qui dévale ($y'' - \\omega^2 y = 0$), jusqu'aux grands problèmes du BAC : refroidissement de Newton, désintégration radioactive et demi-vie, circuit RC. Un double impact, en maths comme en physique-chimie.",
  objectifs: [
    "Résoudre l'équation homogène y' + ay = 0 et fixer la constante avec une condition initiale",
    "Traiter le second membre constant y' + ay = b et interpréter le régime permanent b/a",
    "Appliquer le principe de superposition pour un second membre variable",
    "Résoudre le second ordre oscillant y'' + ω²y = 0 (cosinus et sinus)",
    "Résoudre le second ordre divergent y'' - ω²y = 0 et le cas affine y'' = 0",
    "Modéliser et résoudre les problèmes réels : refroidissement, désintégration, circuit RC",
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
  couverture: '/covers/tomes/cover-t11.png',
};
