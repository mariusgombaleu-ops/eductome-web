import { useTheme } from '../../contexts/ThemeContext';

/**
 * LogoTile — la marque « livre » EDUCTOME posée sur une tuile claire (token bg2,
 * bord line, ombre douce). Reprend le traitement du handoff (écrans Inscription /
 * Connexion). Le logo complet reste `public/logo-eductome.png` ; ici c'est la
 * seule icône, `public/eductome-mark.png`.
 */
interface LogoTileProps {
  /** Côté de la tuile en px (défaut 64). */
  size?: number;
  className?: string;
}

export function LogoTile({ size = 64, className = '' }: LogoTileProps) {
  const { palette } = useTheme();
  return (
    <div
      className={`flex items-center justify-center mx-auto ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: Math.round(size * 0.28),
        background: palette.bg2,
        border: `1px solid ${palette.line}`,
        boxShadow: `0 10px 26px ${palette.shadow}`,
        padding: Math.round(size * 0.17),
      }}
    >
      <img src="/eductome-mark.png" alt="Eductome" className="w-full h-full object-contain" />
    </div>
  );
}
