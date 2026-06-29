// Types du système d'exercices corrigés (architecture réutilisable).
// Le contenu (banque d'exercices par tome) vit dans ./index.ts et les
// futurs fichiers ./exercices-tN.ts.

export type ExerciseLevel = 'BASE' | 'MOYEN' | 'BAC';

export type StepType = 'IDENTIFIER' | 'STRATEGIE' | 'PIEGE' | 'CALCUL' | 'CONCLUSION';

export interface ExerciseStep {
  type: StepType;
  content: string;
}

export interface ExerciseQuestion {
  label: string;
  etapes: ExerciseStep[];
}

export interface Exercise {
  id: string;
  tome: number;
  numero: number;
  level: ExerciseLevel;
  points: number;
  statement: string;
  contextBac?: {
    format: string;
    serie: string;
    dureeConseillee: number;
  };
  testedConcept: string;

  correction: {
    repartitionTemps?: Array<{
      question: string;
      duree: number;
      description: string;
    }>;
    questions: ExerciseQuestion[];
    dialogue?: {
      petitFrere: string;
      grandFrere: string;
    }[];
    astuces?: string[];
    noteGrandFrere: string;
  };
}
