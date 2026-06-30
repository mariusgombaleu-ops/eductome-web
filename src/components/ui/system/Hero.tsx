import { ReactNode, CSSProperties } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';

/**
 * Hero — bandeau d'en-tête à dégradé (token `heroBg` + `heroShadow`).
 * Brique unique pour tous les heros de l'espace élève (niveau, bibliothèque,
 * moyenne…). Le titre utilise la police d'affichage de l'axe typo (`--font-display`).
 *
 * On compose soit via les props (`overline` / `title` / `subtitle` / `right`),
 * soit librement via `children`.
 */
interface HeroProps {
  overline?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  /** Contenu aligné à droite de l'en-tête (badge, stat, CTA…) */
  right?: ReactNode;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function Hero({ overline, title, subtitle, right, children, className = '', style }: HeroProps) {
  const { palette } = useTheme();

  return (
    <div
      className={`relative overflow-hidden rounded-[24px] p-5 sm:p-7 ${className}`}
      style={{
        background: palette.heroBg,
        // heroBg est un dégradé toujours sombre (dans tous les thèmes/ambiances) :
        // le texte doit donc toujours être blanc, pas onAccent (qui vire au
        // quasi-noir en ambiance sombre car pensé pour les boutons accent clairs).
        color: '#FFFFFF',
        boxShadow: `0 8px 20px ${palette.heroShadow}`,
        ...style,
      }}
    >
      {(overline || title || subtitle || right) && (
        <div className="relative z-10 flex items-start justify-between gap-4">
          <div className="min-w-0">
            {overline && (
              <div className="text-xs font-semibold uppercase tracking-wider opacity-80 font-poppins">
                {overline}
              </div>
            )}
            {title && (
              <h1
                className="text-2xl sm:text-3xl font-bold leading-tight mt-1"
                style={{ fontFamily: palette.display }}
              >
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-sm sm:text-base opacity-90 mt-1.5" style={{ fontFamily: palette.body }}>
                {subtitle}
              </p>
            )}
          </div>
          {right && <div className="shrink-0">{right}</div>}
        </div>
      )}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
