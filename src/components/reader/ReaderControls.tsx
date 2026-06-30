import { Maximize2 } from 'lucide-react';
import type { PaletteTokens } from '../../contexts/ThemeContext';

/**
 * ReaderControls
 * ──────────────
 * La barre « Lecture » premium qui se glisse sous l'en-tête flottant du
 * CourseReader : réglage de la taille du texte (A− / A+) et entrée en
 * Mode Focus. Entièrement piloté par useReaderSettings + la palette du thème.
 *
 * Aucune couleur en dur : tout vient de `palette` pour rester cohérent en
 * clair / sombre et en style focus / studio.
 */
interface ReaderControlsProps {
  palette: PaletteTokens;
  sizeLabel: string;
  canDecrease: boolean;
  canIncrease: boolean;
  onDecrease: () => void;
  onIncrease: () => void;
  onEnterFocus: () => void;
}

export const ReaderControls = ({
  palette,
  sizeLabel,
  canDecrease,
  canIncrease,
  onDecrease,
  onIncrease,
  onEnterFocus,
}: ReaderControlsProps) => {
  const stepBtn =
    'w-8 h-7 rounded-lg flex items-center justify-center transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-80';

  return (
    <div
      className="pointer-events-auto mt-2 flex items-center gap-2 rounded-[14px] px-2 py-1.5 shadow-sm"
      style={{
        background: palette.glass,
        backdropFilter: 'blur(16px) saturate(160%)',
        WebkitBackdropFilter: 'blur(16px) saturate(160%)',
        border: `1px solid ${palette.glassLine}`,
      }}
    >
      <span
        className="pl-1 text-[10px] font-semibold uppercase tracking-[0.06em]"
        style={{ color: palette.ink3 }}
      >
        Lecture
      </span>

      <div className="flex-1" />

      <button
        type="button"
        onClick={onDecrease}
        disabled={!canDecrease}
        aria-label="Réduire la taille du texte"
        className={stepBtn}
        style={{
          background: palette.bg2,
          color: palette.ink2,
          border: `1px solid ${palette.line}`,
        }}
      >
        <span className="text-[12px] font-semibold">A−</span>
      </button>

      <div
        className="w-[54px] text-center text-[11px] font-bold"
        style={{ color: palette.accent }}
      >
        {sizeLabel}
      </div>

      <button
        type="button"
        onClick={onIncrease}
        disabled={!canIncrease}
        aria-label="Augmenter la taille du texte"
        className={stepBtn}
        style={{
          background: palette.bg2,
          color: palette.ink,
          border: `1px solid ${palette.line}`,
        }}
      >
        <span className="text-[14px] font-bold">A+</span>
      </button>

      <div className="w-px h-5 mx-0.5" style={{ background: palette.glassLine }} />

      <button
        type="button"
        onClick={onEnterFocus}
        aria-label="Activer le Mode Focus"
        title="Mode Focus — lecture sans distraction"
        className="w-8 h-7 rounded-lg flex items-center justify-center transition-all duration-200 hover:opacity-80"
        style={{ background: palette.bg3, color: palette.ink2 }}
      >
        <Maximize2 className="w-4 h-4" strokeWidth={2.2} />
      </button>
    </div>
  );
};
