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

export const tomeProbabilites: Tome = {
  id: 't7-probabilites',
  titre: 'Probabilités (Tome 7)',
  collection: 'les-cles-maths',
  matiere: 'Mathématiques',
  niveau: 'Terminale D',
  description:
    "Du ticket LONACI gratté à Adjamé à la tombola de la kermesse du Cacao, ce tome met des chiffres et une structure sur le hasard pur. On apprend à compter sans se tromper (dénombrement, coefficient binomial), à parler le langage exact des événements, à recalculer ses chances avec une information (arbres pondérés, probabilités totales), à traduire un jeu en gain moyen (variable aléatoire, espérance, variance), puis à dompter la reine du BAC — la loi binomiale — et la fonction de répartition en escalier.",
  objectifs: [
    "Dénombrer permutations, arrangements et combinaisons en posant la question de l'ordre",
    "Calculer une probabilité en équiprobabilité et manier réunion, intersection et contraire",
    "Maîtriser les arbres pondérés, la probabilité conditionnelle et la formule des probabilités totales",
    "Déterminer la loi d'une variable aléatoire et calculer $E(X)$, $V(X)$ et l'écart-type",
    "Reconnaître un schéma de Bernoulli, appliquer la loi binomiale $\\mathcal{B}(n\\,;\\,p)$ et tracer une fonction de répartition",
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
  couverture: '/covers/tomes/Tome-07-Probabilites.png',
};
