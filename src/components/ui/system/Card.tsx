import { ReactNode, CSSProperties } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';

/**
 * Card — surface standard de l'espace élève (fond `bg2`, bord `line`, ombre
 * discrète). Rayon par défaut 20 (carte) ; passer `radius={28}` pour un panneau,
 * ou utiliser le wrapper `Panel`.
 */
interface CardProps {
  children: ReactNode;
  /** Rayon des coins en px (12 chip · 16 champ/bouton · 20 carte · 28 panneau) */
  radius?: number;
  /** Padding Tailwind (ex. 'p-4', 'p-6'). Par défaut 'p-5'. */
  padding?: string;
  /** Surface alternative `bg3` (carte « enfoncée ») au lieu de `bg2`. */
  sunken?: boolean;
  /** Retire l'ombre (cartes imbriquées). */
  flat?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

export function Card({
  children,
  radius = 20,
  padding = 'p-5',
  sunken = false,
  flat = false,
  className = '',
  style,
  onClick,
}: CardProps) {
  const { palette } = useTheme();
  return (
    <div
      onClick={onClick}
      className={`border transition-colors ${padding} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      style={{
        background: sunken ? palette.bg3 : palette.bg2,
        borderColor: palette.line,
        borderRadius: radius,
        boxShadow: flat ? 'none' : `0 1px 2px ${palette.shadow}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/** Panel — Card au rayon panneau (28). */
export function Panel(props: Omit<CardProps, 'radius'>) {
  return <Card radius={28} padding={props.padding ?? 'p-6'} {...props} />;
}
