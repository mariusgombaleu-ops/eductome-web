import { Minimize2 } from 'lucide-react';
import type { PaletteTokens } from '../../contexts/ThemeContext';

/**
 * FocusExitButton
 * ───────────────
 * Pastille flottante « Quitter le focus » affichée uniquement quand le
 * Mode Focus est actif (header + dock masqués). On garde une sortie toujours
 * visible et la touche Échap (gérée par useReaderSettings) en secours.
 */
interface FocusExitButtonProps {
  palette: PaletteTokens;
  onExit: () => void;
}

export const FocusExitButton = ({ palette, onExit }: FocusExitButtonProps) => (
  <button
    type="button"
    onClick={onExit}
    className="fixed top-4 right-4 z-50 flex items-center gap-1.5 rounded-full px-3 py-2 text-[11px] font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 animate-fade-in-up"
    style={{
      background: palette.accent2,
      boxShadow: `0 6px 16px ${palette.heroShadow}`,
    }}
  >
    <Minimize2 className="w-3.5 h-3.5" strokeWidth={2.4} />
    Quitter le focus
  </button>
);
