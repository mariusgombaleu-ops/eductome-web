import { ReactNode } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Lightbulb, AlertTriangle, BarChart3, Flame, ShieldAlert } from 'lucide-react';

/**
 * Callout — encadrés sémantiques unifiés, branchés sur les tokens SEMANTIC du
 * ThemeContext (tip / warn / ana / flame). `tone="piege"` est un cas spécial du
 * design : carte à en-tête (et non simple barre latérale).
 */
export type CalloutTone = 'tip' | 'warn' | 'ana' | 'flame' | 'piege';

interface CalloutProps {
  tone?: CalloutTone;
  title?: ReactNode;
  children: ReactNode;
  /** Remplace l'icône par défaut du ton. */
  icon?: ReactNode;
  className?: string;
}

export function Callout({ tone = 'tip', title, children, icon, className = '' }: CalloutProps) {
  const { palette } = useTheme();

  // Résolution des couleurs depuis les tokens sémantiques selon le ton.
  const map = {
    tip: { bg: palette.tipBg, bar: palette.tipBar, ink: palette.tipBar, Icon: Lightbulb, label: 'Astuce' },
    warn: { bg: palette.warnBg, bar: palette.warnBar, ink: palette.warnInk, Icon: AlertTriangle, label: 'Attention' },
    ana: { bg: palette.anaBg, bar: palette.anaBar, ink: palette.anaInk, Icon: BarChart3, label: 'Analyse' },
    flame: { bg: palette.flameBg, bar: palette.flame, ink: palette.flame, Icon: Flame, label: 'À retenir' },
    piege: { bg: palette.warnBg, bar: palette.warnBar, ink: palette.warnInk, Icon: ShieldAlert, label: 'Piège' },
  }[tone];

  const { Icon } = map;
  const heading = title ?? map.label;

  // Variante « piège » : carte à en-tête coloré (plus marquée).
  if (tone === 'piege') {
    return (
      <div
        className={`rounded-[16px] overflow-hidden border ${className}`}
        style={{ borderColor: map.bar, background: palette.bg2 }}
      >
        <div
          className="flex items-center gap-2 px-4 py-2.5 font-bold text-sm"
          style={{ background: map.bar, color: '#FFFFFF', fontFamily: palette.display }}
        >
          {icon ?? <Icon className="w-4 h-4" />}
          {heading}
        </div>
        <div className="p-4 text-sm leading-relaxed" style={{ color: palette.ink, fontFamily: palette.body }}>
          {children}
        </div>
      </div>
    );
  }

  // Variante standard : barre latérale colorée.
  return (
    <div
      className={`rounded-[16px] p-4 ${className}`}
      style={{ background: map.bg, borderLeft: `4px solid ${map.bar}` }}
    >
      <div className="flex items-center gap-2 font-bold text-sm mb-1" style={{ color: map.ink, fontFamily: palette.display }}>
        {icon ?? <Icon className="w-4 h-4" />}
        {heading}
      </div>
      <div className="text-sm leading-relaxed" style={{ color: palette.ink, fontFamily: palette.body }}>
        {children}
      </div>
    </div>
  );
}
