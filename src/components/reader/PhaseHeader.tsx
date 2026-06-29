import type { PaletteTokens } from '../../contexts/ThemeContext';

/**
 * PhaseHeader
 * ───────────
 * Jalon de phase premium « ① Le Besoin / ② Le Réel / ③ Le Pont » du rythme
 * pédagogique EDUCTOME (du quartier vers les maths). Cercle numéroté + sur-titre
 * + titre. Optionnel : à insérer entre les blocs d'une section pour rythmer la
 * lecture, ou à dériver d'un futur type de bloc `phase` dans course.ts.
 *
 * `tone` choisit la couleur d'accent du cercle :
 *   • 'besoin' (bleu accent)  • 'reel' (orange analogie)  • 'pont' (marine)
 *   • 'regle'  (vert règle)
 */
type PhaseTone = 'besoin' | 'reel' | 'pont' | 'regle';

interface PhaseHeaderProps {
  palette: PaletteTokens;
  /** numéro affiché dans le cercle, ex. 1, 2, 3 */
  index: number;
  /** sur-titre, ex. « Phase une » */
  kicker: string;
  /** titre, ex. « Le Besoin » */
  title: string;
  tone?: PhaseTone;
}

export const PhaseHeader = ({
  palette,
  index,
  kicker,
  title,
  tone = 'besoin',
}: PhaseHeaderProps) => {
  const toneColor: Record<PhaseTone, string> = {
    besoin: palette.accent,
    reel: palette.anaBar,
    pont: palette.accent2,
    regle: palette.tipBar,
  };
  const color = toneColor[tone];

  return (
    <div className="mt-[34px] flex items-center gap-[13px]">
      <div
        className="flex-none w-[42px] h-[42px] rounded-full flex items-center justify-center font-poppins font-bold text-[19px] leading-none"
        style={{ border: `2px solid ${color}`, color }}
      >
        {index}
      </div>
      <div>
        <div
          className="font-poppins font-bold text-[10px] uppercase tracking-[0.16em]"
          style={{ color: palette.ink3 }}
        >
          {kicker}
        </div>
        <div
          className="font-poppins font-extrabold text-[18px] leading-[1.1] mt-[3px]"
          style={{ color: palette.ink }}
        >
          {title}
        </div>
      </div>
    </div>
  );
};
