export interface TomeRegistryItem {
  id: number;
  title: string;
  theme: string;
  pdfFile: string;
  hasExercises: boolean;
  isUpcoming?: boolean;
}

export const tomesRegistry: TomeRegistryItem[] = [
  { id: 1, title: "Les Limites", theme: "#1976D2", pdfFile: "FICHE_METHODE_T1_LIMITES.pdf", hasExercises: true },
  { id: 2, title: "Les Dérivées", theme: "#1B5E20", pdfFile: "FICHE_METHODE_T2_DERIVEES.pdf", hasExercises: true },
  { id: 3, title: "Intégrales & Primitives", theme: "#E65100", pdfFile: "FICHE_METHODE_T3_INTEGRALES.pdf", hasExercises: true },
  { id: 4, title: "Suites Numériques", theme: "#F57F17", pdfFile: "FICHE_METHODE_T4_SUITES.pdf", hasExercises: true },
  { id: 5, title: "Log & Exponentielles", theme: "#1976D2", pdfFile: "FICHE_METHODE_T5_LOG_EXP.pdf", hasExercises: true },
  { id: 6, title: "Trigonométrie", theme: "#6A1B9A", pdfFile: "FICHE_METHODE_T6_TRIGO.pdf", hasExercises: true },
  { id: 7, title: "Probabilités", theme: "#1976D2", pdfFile: "FICHE_METHODE_T7_PROBABILITES.pdf", hasExercises: true },
  { id: 8, title: "Statistiques", theme: "#00695C", pdfFile: "FICHE_METHODE_T8_STATISTIQUES.pdf", hasExercises: true },
  { id: 9, title: "Géométrie dans l'Espace", theme: "#283593", pdfFile: "FICHE_METHODE_T9_GEOMETRIE.pdf", hasExercises: true },
  { id: 10, title: "Nombres Complexes", theme: "#AD1457", pdfFile: "FICHE_METHODE_T10_COMPLEXES.pdf", hasExercises: true },
  { id: 11, title: "Équations Différentielles", theme: "#4E342E", pdfFile: "FICHE_METHODE_T11_EQ_DIFF.pdf", hasExercises: true },
  { id: 12, title: "Révisions BAC", theme: "#757575", pdfFile: "", hasExercises: false, isUpcoming: true }
];
