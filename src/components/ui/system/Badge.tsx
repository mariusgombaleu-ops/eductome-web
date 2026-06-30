import { ReactNode } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';

/**
 * Badge / Chip — pastille unifiée (niveau, statut, overline). Tons branchés sur
 * les tokens ; `gold` pour les éléments Premium.
 */
export type BadgeTone = 'accent' | 'soft' | 'neutral' | 'gold' | 'success' | 'danger';

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  icon?: ReactNode;
  className?: string;
}

const GOLD = '#F4C430';

export function Badge({ children, tone = 'soft', icon, className = '' }: BadgeProps) {
  const { palette } = useTheme();

  const styles: Record<BadgeTone, { bg: string; fg: string }> = {
    accent: { bg: palette.accent, fg: palette.onAccent },
    soft: { bg: palette.accentSoft, fg: palette.accent },
    neutral: { bg: palette.bg3, fg: palette.ink2 },
    gold: { bg: `${GOLD}22`, fg: GOLD },
    success: { bg: palette.tipBg, fg: palette.tipBar },
    danger: { bg: palette.warnBg, fg: palette.warnBar },
  };
  const s = styles[tone];

  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full font-poppins whitespace-nowrap ${className}`}
      style={{ background: s.bg, color: s.fg }}
    >
      {icon}
      {children}
    </span>
  );
}
