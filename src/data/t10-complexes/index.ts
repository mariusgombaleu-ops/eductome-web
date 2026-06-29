import { Tome } from '../../types/course';

// ⚠️ SCAFFOLD — contenu à venir (nouvelle base V4 PREMIUM).
// Étapes pour activer ce tome quand le contenu est prêt :
//   1. Ajouter les fichiers de chapitres dans ce dossier en suivant la
//      nomenclature T1 : message-grand-frere.ts, socle.ts, m1.ts … mN.ts,
//      salle-entrainement.ts, annexe.ts, conclusion.ts.
//   2. Les importer ici et remplir `chapitres` (+ `description`, `objectifs`).
//   3. Créer src/data/course-t10.ts : export const courseT10: Tome = tomeComplexes;
//   4. Enregistrer dans CourseReader.tsx : 't10-complexes': courseT10.
export const tomeComplexes: Tome = {
  id: 't10-complexes',
  titre: 'Nombres Complexes (Tome 10)',
  collection: 'les-cles-maths',
  matiere: 'Mathématiques',
  niveau: 'Terminale D',
  description: '',
  objectifs: [],
  chapitres: [],
  prix: { chapitre: 300, tome: 1500 },
  couleurCollection: '#1A3557',
  couverture: '/covers/tomes/cover-t10.png',
};
