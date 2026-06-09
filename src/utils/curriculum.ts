export const IVORIAN_CURRICULUM = {
  TLE_D: [
    { id: 'maths', name: 'Mathématiques', color: '#1A3557' },
    { id: 'pc', name: 'Physique-Chimie', color: '#6A1B9A' },
    { id: 'svt', name: 'SVT', color: '#1B5E20' },
    { id: 'philo', name: 'Philosophie', color: '#880E4F' },
    { id: 'français', name: 'Français', color: '#D81B60' },
    { id: 'anglais', name: 'Anglais', color: '#1976D2' },
    { id: 'hg', name: 'Histoire-Géographie', color: '#E65100' }
  ],
  TLE_A: [
    { id: 'philo', name: 'Philosophie', color: '#880E4F' },
    { id: 'français', name: 'Français', color: '#D81B60' },
    { id: 'anglais', name: 'Anglais', color: '#1976D2' },
    { id: 'hg', name: 'Histoire-Géographie', color: '#E65100' },
    { id: 'maths', name: 'Mathématiques', color: '#1A3557' },
    { id: 'langue2', name: 'Langue 2 (All/Esp)', color: '#37474F' }
  ],
  '3EME': [
    { id: 'maths', name: 'Mathématiques', color: '#1A3557' },
    { id: 'pc', name: 'Physique-Chimie', color: '#6A1B9A' },
    { id: 'svt', name: 'SVT', color: '#1B5E20' },
    { id: 'français', name: 'Français', color: '#D81B60' },
    { id: 'anglais', name: 'Anglais', color: '#1976D2' },
    { id: 'hg', name: 'Histoire-Géographie', color: '#E65100' },
    { id: 'edhc', name: 'EDHC', color: '#37474F' }
  ]
} as const;

export type SubjectId = string;
export type IvorianSeries = keyof typeof IVORIAN_CURRICULUM;
