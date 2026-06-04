export interface BadgeDef {
  id: string;
  title: string;
  description: string;
  iconName: string;
  colorTheme: 'orange' | 'blue' | 'yellow' | 'green' | 'purple' | 'magenta';
}

export const BADGES: BadgeDef[] = [
  {
    id: 'badge_curieux',
    title: 'Le Curieux',
    description: 'Avoir validé son premier exercice interactif.',
    iconName: 'Eye',
    colorTheme: 'blue'
  },
  {
    id: 'badge_studieux',
    title: 'Studieux',
    description: 'Avoir terminé un premier chapitre complet.',
    iconName: 'Book',
    colorTheme: 'orange'
  },
  {
    id: 'badge_sans_faute',
    title: 'Sans Faute',
    description: 'Avoir réussi un Quiz du premier coup.',
    iconName: 'Star',
    colorTheme: 'yellow'
  },
  {
    id: 'badge_pilier_forum',
    title: 'Pilier du Forum',
    description: 'Avoir aidé 5 personnes sur le forum.',
    iconName: 'Heart',
    colorTheme: 'magenta'
  }
];
