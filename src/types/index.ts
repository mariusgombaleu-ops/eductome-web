export interface Collection {
  id: string;
  title: string;
  emoji: string;
  badge?: string;
  image?: string;
  description: string;
  mission?: string;
  valeur?: string[];
  tag: string;
  color: string;
  link: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
}
