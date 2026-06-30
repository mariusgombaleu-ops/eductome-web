import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';

/**
 * Collapsible — pliable unifié de tout l'espace élève (Apparence, collections,
 * « À débloquer », matières). Chevron qui pivote, transition hauteur + opacité.
 * Mécanique identique partout (cf. handoff).
 *
 * Non contrôlé par défaut (`defaultOpen`) ; passer `open` + `onToggle` pour le
 * piloter de l'extérieur.
 */
interface CollapsibleProps {
  title: ReactNode;
  children: ReactNode;
  /** Contenu à droite de l'en-tête (compteur, badge…), avant le chevron. */
  right?: ReactNode;
  /** Icône optionnelle à gauche du titre. */
  icon?: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onToggle?: (next: boolean) => void;
  className?: string;
}

export function Collapsible({
  title,
  children,
  right,
  icon,
  defaultOpen = false,
  open,
  onToggle,
  className = '',
}: CollapsibleProps) {
  const { palette } = useTheme();
  const [internal, setInternal] = useState(defaultOpen);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internal;

  const handleToggle = () => {
    const next = !isOpen;
    if (!isControlled) setInternal(next);
    onToggle?.(next);
  };

  return (
    <div
      className={`border rounded-[18px] overflow-hidden transition-colors ${className}`}
      style={{ background: palette.bg2, borderColor: palette.line }}
    >
      <button
        type="button"
        onClick={handleToggle}
        className="w-full flex items-center gap-3 px-4 py-3.5 text-left"
        aria-expanded={isOpen}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span className="flex-1 font-bold text-sm" style={{ color: palette.ink, fontFamily: palette.display }}>
          {title}
        </span>
        {right && <span className="shrink-0">{right}</span>}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
          style={{ color: palette.ink3 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>
      {/* Rendu conditionnel + entrée animée (même pattern fiable que BottomSheet).
          On évite AnimatePresence/height:auto/max-height qui, sous StrictMode +
          framer-motion v12, ne collapsent pas de façon déterministe. Repli =
          démontage instantané, fiable. */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          style={{ overflow: 'hidden' }}
        >
          <div className="px-4 pb-4 pt-0" style={{ color: palette.ink2, fontFamily: palette.body }}>
            {children}
          </div>
        </motion.div>
      )}
    </div>
  );
}
