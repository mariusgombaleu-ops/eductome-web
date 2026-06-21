import { createContext, useContext, useEffect, useState, ReactNode, useMemo } from 'react';

type Theme = 'light' | 'dark';
type VisualStyle = 'focus' | 'studio';

// Palette tokens derived from the Claude Design spec
const PALETTES = {
  studio: {
    light: {
      bg: '#F4F6FB', bg2: '#FFFFFF', bg3: '#EBEFF7',
      ink: '#0C1A2B', ink2: '#51637A', ink3: '#90A0B5',
      line: '#E3E9F2',
      accent: '#E6007A', accent2: '#1F86FF',
      accentSoft: 'rgba(230,0,122,.10)', onAccent: '#FFFFFF',
      glass: 'rgba(244,246,251,.78)', glassLine: 'rgba(12,26,43,.07)',
      shadow: 'rgba(20,40,80,.08)',
      heroBg: 'linear-gradient(135deg,#E6007A 0%,#7B2FF7 55%,#1F86FF 100%)',
      heroShadow: 'rgba(123,47,247,.30)',
      bannerBg: '#0C1A2B',
      gfBubble: '#E9F2FF', gfInk: '#0C2E55',
      pfBubble: '#EFEFF4', pfInk: '#2B3340',
      display: "'Space Grotesk','Poppins',sans-serif",
    },
    dark: {
      bg: '#080B12', bg2: '#121823', bg3: '#1A2230',
      ink: '#EAF1FA', ink2: '#92A2B8', ink3: '#5C6B7E',
      line: '#222C3B',
      accent: '#FF2E84', accent2: '#33A6FF',
      accentSoft: 'rgba(255,46,132,.16)', onAccent: '#FFFFFF',
      glass: 'rgba(10,14,22,.7)', glassLine: 'rgba(255,255,255,.08)',
      shadow: 'rgba(0,0,0,.5)',
      heroBg: 'linear-gradient(135deg,#FF2E84 0%,#8B3BFF 55%,#33A6FF 100%)',
      heroShadow: 'rgba(255,46,132,.30)',
      bannerBg: '#161E2C',
      gfBubble: '#10243B', gfInk: '#BFE0FF',
      pfBubble: '#1A2230', pfInk: '#C4D0DE',
      display: "'Space Grotesk','Poppins',sans-serif",
    },
  },
  focus: {
    light: {
      bg: '#FFFFFF', bg2: '#FFFFFF', bg3: '#F6F8FA',
      ink: '#16202B', ink2: '#586672', ink3: '#9AA4AE',
      line: '#ECEFF3',
      accent: '#1976D2', accent2: '#1A3557',
      accentSoft: '#EAF3FC', onAccent: '#FFFFFF',
      glass: 'rgba(255,255,255,.82)', glassLine: 'rgba(20,30,40,.06)',
      shadow: 'rgba(20,40,70,.07)',
      heroBg: 'linear-gradient(135deg,#1976D2 0%,#1A3557 100%)',
      heroShadow: 'rgba(25,118,210,.26)',
      bannerBg: '#1A3557',
      gfBubble: '#EFF5FB', gfInk: '#16202B',
      pfBubble: '#F2F4F7', pfInk: '#3A454F',
      display: "'Poppins',sans-serif",
    },
    dark: {
      bg: '#0E1116', bg2: '#161B22', bg3: '#1B212A',
      ink: '#E7EDF3', ink2: '#9AA6B2', ink3: '#647080',
      line: '#232A33',
      accent: '#5BA8FF', accent2: '#9FC5FF',
      accentSoft: 'rgba(91,168,255,.14)', onAccent: '#08121E',
      glass: 'rgba(14,17,22,.76)', glassLine: 'rgba(255,255,255,.06)',
      shadow: 'rgba(0,0,0,.45)',
      heroBg: 'linear-gradient(135deg,#2E6FB5 0%,#16202B 100%)',
      heroShadow: 'rgba(46,111,181,.28)',
      bannerBg: '#1B212A',
      gfBubble: '#16222E', gfInk: '#CFE3F5',
      pfBubble: '#1B212A', pfInk: '#C2CCD6',
      display: "'Poppins',sans-serif",
    },
  },
} as const;

// Semantic colors (same for both styles, differ by light/dark)
const SEMANTIC = {
  light: {
    tipBg: '#EAF7EF', tipBar: '#1E8449',
    warnBg: '#FCEDEA', warnBar: '#C0392B', warnInk: '#8E2A20',
    anaBg: '#FBF0DD', anaBar: '#E67E22', anaInk: '#8A5A1E',
    flameBg: '#FFF1E6', flame: '#E65100',
  },
  dark: {
    tipBg: 'rgba(34,197,94,.14)', tipBar: '#34D399',
    warnBg: 'rgba(239,68,68,.13)', warnBar: '#F87171', warnInk: '#FBB4AB',
    anaBg: 'rgba(230,126,34,.13)', anaBar: '#F0A452', anaInk: '#F2C792',
    flameBg: 'rgba(230,81,0,.16)', flame: '#FFA559',
  },
} as const;

export type PaletteTokens = typeof PALETTES.focus.light & typeof SEMANTIC.light;

interface ThemeContextType {
  theme: Theme;
  visualStyle: VisualStyle;
  toggleTheme: () => void;
  setVisualStyle: (style: VisualStyle) => void;
  palette: PaletteTokens;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('eductome_theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }
    return 'light';
  });

  const [visualStyle, setVisualStyleState] = useState<VisualStyle>(() => {
    const savedStyle = localStorage.getItem('eductome_visual_style');
    if (savedStyle === 'studio' || savedStyle === 'focus') {
      return savedStyle;
    }
    return 'focus'; // Focus par défaut
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('eductome_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('eductome_visual_style', visualStyle);
    // Inject CSS custom properties onto :root
    const root = window.document.documentElement;
    root.dataset.visualStyle = visualStyle;
  }, [visualStyle]);

  // Inject palette as CSS variables whenever theme or style changes
  useEffect(() => {
    const root = window.document.documentElement;
    const pal = { ...PALETTES[visualStyle][theme], ...SEMANTIC[theme] };
    Object.entries(pal).forEach(([key, value]) => {
      root.style.setProperty(`--ed-${key}`, value);
    });
  }, [theme, visualStyle]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setVisualStyle = (style: VisualStyle) => {
    setVisualStyleState(style);
  };

  const isDark = theme === 'dark';

  const palette = useMemo<PaletteTokens>(() => {
    return { ...PALETTES[visualStyle][theme], ...SEMANTIC[theme] } as PaletteTokens;
  }, [theme, visualStyle]);

  return (
    <ThemeContext.Provider value={{ theme, visualStyle, toggleTheme, setVisualStyle, palette, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
