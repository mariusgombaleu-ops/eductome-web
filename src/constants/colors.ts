export const COLORS = {
  // Couleurs principales
  magenta:    '#D81B60',
  marine:     '#1A3557',
  bleu:       '#1976D2',

  // Couleurs collections
  cles:       '#1A3557',
  sciences:   '#6A1B9A',
  lettres:    '#880E4F',
  dc:         '#C62828',
  voie:       '#2E7D32',
  racines:    '#E67E22',
  college:    '#37474F',

  // Encadrés
  tipBg:      '#D5F5E3',
  tipBorder:  '#1E8449',
  warnBg:     '#FDEDEC',
  warnBorder: '#C0392B',
  ruleBg:     '#D6E4F0',
  ruleBorder: '#1F5C99',
  recapBg:    '#FDEBD0',
  recapBorder:'#E67E22',

  // Niveaux exercices
  base:       '#1E8449',
  moyen:      '#E67E22',
  bac:        '#C0392B',
  correction: '#1F5C99',

  // UI généraux
  dark:       '#0D1117',
  darkCard:   '#161B22',
  darkBorder: '#30363D',
  textLight:  '#E6EDF3',
  textMuted:  '#8B949E',
} as const;

export const LIGHT = {
  // Fonds
  bg:           '#F8F9FA',
  bgCard:       '#FFFFFF',
  bgSidebar:    '#FFFFFF',
  bgHeader:     '#FFFFFF',
  border:       '#E1E4E8',

  // Textes
  textPrimary:  '#1A1A2E',
  textSecondary:'#6B7280',
  textMuted:    '#9CA3AF',

  // Encadrés light mode
  tipBg:        '#F0FFF4',
  warnBg:       '#FFF5F5',
  ruleBg:       '#EBF8FF',
  recapBg:      '#FFFBEB',
  analogyBg:    '#FEFCE8',

  // Dialogue light mode
  pfBg:         '#FEF9E7',
  gfBg:         '#EBF5FB',
} as const;

export const DARK = {
  // Fonds
  bg:           '#0D1117',
  bgCard:       '#161B22',
  bgSidebar:    '#0D1117',
  bgHeader:     '#0D1117',
  border:       '#30363D',

  // Textes
  textPrimary:  '#E6EDF3',
  textSecondary:'#8B949E',
  textMuted:    '#6E7681',

  // Encadrés dark mode
  tipBg:        '#0F2A1A',
  warnBg:       '#2A0F0F',
  ruleBg:       '#0A1628',
  recapBg:      '#2A1A0A',
  analogyBg:    '#1A150A',

  // Dialogue dark mode
  pfBg:         '#2A1F0A',
  gfBg:         '#0A1A2A',
} as const;
