export type SubjectId = 'maths' | 'pc' | 'svt' | 'francais' | 'philo' | 'anglais' | 'hg' | 'edhc';

export interface SubjectConfig {
  id: SubjectId;
  name: string;
  coeff: number;
}

export type LevelCoefficients = {
  [key: string]: SubjectConfig[];
};

export const LEVEL_SUBJECTS: LevelCoefficients = {
  '3eme': [
    { id: 'francais', name: 'Français', coeff: 3 },
    { id: 'maths', name: 'Mathématiques', coeff: 2 },
    { id: 'pc', name: 'Physique-Chimie', coeff: 2 },
    { id: 'svt', name: 'SVT', coeff: 2 },
    { id: 'anglais', name: 'Anglais', coeff: 2 },
    { id: 'hg', name: 'Histoire-Géographie', coeff: 2 },
    { id: 'edhc', name: 'EDHC', coeff: 1 },
  ],
  'terminale-d': [
    { id: 'maths', name: 'Mathématiques', coeff: 4 },
    { id: 'pc', name: 'Physique-Chimie', coeff: 4 },
    { id: 'svt', name: 'SVT', coeff: 4 },
    { id: 'francais', name: 'Français', coeff: 2 },
    { id: 'philo', name: 'Philosophie', coeff: 2 },
    { id: 'anglais', name: 'Anglais', coeff: 2 },
    { id: 'hg', name: 'Histoire-Géographie', coeff: 2 },
  ],
  'terminale-c': [
    { id: 'maths', name: 'Mathématiques', coeff: 5 },
    { id: 'pc', name: 'Physique-Chimie', coeff: 5 },
    { id: 'svt', name: 'SVT', coeff: 2 },
    { id: 'francais', name: 'Français', coeff: 2 },
    { id: 'philo', name: 'Philosophie', coeff: 2 },
    { id: 'anglais', name: 'Anglais', coeff: 2 },
    { id: 'hg', name: 'Histoire-Géographie', coeff: 2 },
  ],
  'terminale-a': [
    { id: 'philo', name: 'Philosophie', coeff: 5 },
    { id: 'francais', name: 'Français', coeff: 4 },
    { id: 'anglais', name: 'Anglais', coeff: 3 },
    { id: 'hg', name: 'Histoire-Géographie', coeff: 3 },
    { id: 'maths', name: 'Mathématiques', coeff: 2 },
    { id: 'svt', name: 'SVT', coeff: 2 },
  ],
  // Fallbacks for generic or unknown levels
  '2nde': [
    { id: 'maths', name: 'Mathématiques', coeff: 3 },
    { id: 'pc', name: 'Physique-Chimie', coeff: 3 },
    { id: 'svt', name: 'SVT', coeff: 3 },
    { id: 'francais', name: 'Français', coeff: 3 },
    { id: 'anglais', name: 'Anglais', coeff: 2 },
    { id: 'hg', name: 'Histoire-Géographie', coeff: 2 },
  ],
  '1ere': [
    { id: 'maths', name: 'Mathématiques', coeff: 4 },
    { id: 'pc', name: 'Physique-Chimie', coeff: 4 },
    { id: 'svt', name: 'SVT', coeff: 4 },
    { id: 'francais', name: 'Français', coeff: 2 },
    { id: 'anglais', name: 'Anglais', coeff: 2 },
    { id: 'hg', name: 'Histoire-Géographie', coeff: 2 },
  ],
};

export const getSubjectsForLevel = (level: string): SubjectConfig[] => {
  return LEVEL_SUBJECTS[level] || LEVEL_SUBJECTS['terminale-d']; // Default to Tle D if unknown
};
