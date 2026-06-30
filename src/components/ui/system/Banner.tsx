import { ReactNode, CSSProperties } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';

/**
 * Banner — bannière marketing / Premium (fond `bannerBg` sombre, texte clair,
 * badge or optionnel). Utilisée en pied de Vue d'ensemble, Mes Cours, etc.
 */
interface BannerProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  /** Pastille en haut (ex. « PREMIUM ») — rendue en or par défaut. */
  badge?: ReactNode;
  /** Action à droite (bouton, lien). */
  action?: ReactNode;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const GOLD = '#F4C430';

export function Banner({ title, subtitle, badge, action, icon, children, className = '', style }: BannerProps) {
  const { palette } = useTheme();
  return (
    <div
      className={`relative overflow-hidden rounded-[24px] p-5 sm:p-6 flex items-center gap-4 ${className}`}
      style={{ background: palette.bannerBg, color: '#FFFFFF', ...style }}
    >
      {icon && <div className="shrink-0">{icon}</div>}
      <div className="min-w-0 flex-1">
        {badge && (
          <span
            className="inline-block text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-1.5 font-poppins"
            style={{ background: `${GOLD}22`, color: GOLD }}
          >
            {badge}
          </span>
        )}
        {title && (
          <div className="text-lg font-bold leading-tight" style={{ fontFamily: palette.display }}>
            {title}
          </div>
        )}
        {subtitle && (
          <p className="text-sm opacity-85 mt-1" style={{ fontFamily: palette.body }}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
