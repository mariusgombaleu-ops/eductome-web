export type BlockType =
  | 'text'
  | 'math'
  | 'dialogue'
  | 'tip'
  | 'warning'
  | 'rule'
  | 'recap'
  | 'analogy'
  | 'table'
  | 'figure'
  | 'image'
  | 'exercise'
  | 'quiz';

export interface Block {
  type?: BlockType;
  id: string;
}

export interface TextBlock extends Block {
  type?: 'text';
  titre?: string;
  contenu: string;
}

export interface MathBlock extends Block {
  type?: 'math';
  formule?: string;
  explication?: string;
  contenu?: string;
}

export interface DialogueBlock extends Block {
  type?: 'dialogue';
  pf?: string;
  gf?: string;
  titre?: string;
  contenu?: string;
}

export interface EncadreBlock extends Block {
  type?: 'tip' | 'warning' | 'rule' | 'recap';
  titre?: string;
  contenu: string[] | string;
}

export interface AnalogyBlock extends Block {
  type?: 'analogy';
  titre: string;
  contenu: string;
  conceptMath?: string;
}

export interface TableBlock extends Block {
  type?: 'table';
  titre?: string;
  headers?: string[];
  rows?: string[][];
  contenu?: string;
}

export interface FigureBlock extends Block {
  type?: 'figure' | 'image';
  src?: string;
  legende?: string;
  alt?: string;
  contenu?: string;
}

export interface ExerciceBlock extends Block {
  type?: 'exercise';
  niveau?: 'BASE' | 'MOYEN' | 'BAC';
  enonce: string;
  etapes: (string | { name: string; contenu: string })[];
  reponse: string;
  conseil?: string;
  piege?: string;
}

export interface QuizBlock extends Block {
  type?: 'quiz';
  question: string;
  options: string[];
  bonneReponse: number;
  explication: string;
}

export type AnyBlock =
  | TextBlock
  | MathBlock
  | DialogueBlock
  | EncadreBlock
  | AnalogyBlock
  | TableBlock
  | FigureBlock
  | ExerciceBlock
  | QuizBlock;

export interface Section {
  id: string;
  titre?: string;
  blocs: AnyBlock[];
}

export interface Chapitre {
  id: string;
  number?: number;
  titre: string;
  duree?: number;
  niveau?: 'BASE' | 'MOYEN' | 'BAC';
  xpGain?: number;
  objectifs?: string[];
  sections: Section[];
  quiz?: QuizBlock[];
  gratuit?: boolean;
}

export type Collection =
  | 'les-cles-maths'
  | 'les-cles-sciences'
  | 'les-cles-lettres'
  | 'les-derniers-codes'
  | 'la-voie'
  | 'les-racines'
  | '3e-facile';

export interface Tome {
  id: string;
  titre: string;
  collection?: Collection;
  matiere?: string;
  niveau?: string;
  description: string;
  objectifs?: string[];
  chapitres: Chapitre[];
  prix?: {
    chapitre: number;
    tome: number;
  };
  couleurCollection?: string;
  couverture?: string;
}
