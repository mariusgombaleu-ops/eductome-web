import { AnyBlock } from './course';

export interface Achat {
  id?: string;
  compte_id: string;
  type: 'chapitre' | 'tome' | 'collection' | 'physique';
  reference: string;
  montant_paye: number;
  ref_commande_selar?: string;
  date: string;
  source: 'selar' | 'physique_qr';
  relaisCode?: string;
}

export interface Tome {
  id: string;
  number?: number;
  title: string;
  chapters?: string[];
  coverImage?: string;
  image?: string; // retro-compatibility
  targetClass?: string;
  selarUrl?: string;
  description?: string;
  link?: string;
}

export interface Badge {
  label: string;
  color: string; // e.g., 'magenta', 'gray', 'green'
}

export interface CrossSell {
  collectionId: string;
  reason: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialAuthor {
  name: string;
  classe: string;
  lycee: string;
}

export interface TestimonialItem {
  rating: number;
  text: string;
  author: TestimonialAuthor;
}

export interface PreviewItem {
  image?: string;
  caption: string;
  blocks?: AnyBlock[];
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  primaryColor: string;
  status?: string; // e.g., 'coming-soon'
  
  badges: Badge[];
  shortDescription: string;
  format: string;
  tomeCount: number;
  targetClass: string;
  
  objective: string;
  benefits: string[];
  idealFor: string[];
  
  crossSell: CrossSell[];
  
  placeholderTestimonial?: string;
  testimonials?: TestimonialItem[];
  previews?: PreviewItem[];
  
  tomes: Tome[];
  faq: FaqItem[];
  
  bundleUrl?: string;
  coverImage?: string; // image de couverture globale
  
  // Retro-compatibilité avec certains anciens composants si nécessaire
  title?: string; // map to name
  image?: string; // map to coverImage
  description?: string; // map to shortDescription
  emoji?: string;
  tag?: string;
  color?: string; // map to primaryColor
  link?: string;
  badge?: string;
  tomesCount?: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
}
