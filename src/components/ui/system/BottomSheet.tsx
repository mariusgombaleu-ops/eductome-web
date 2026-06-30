import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';

/**
 * BottomSheet — tiroir bas avec scrim flouté (Boutique : 3 paliers). Glisse depuis
 * le bas, se ferme au clic sur le scrim, sur Échap, ou via le bouton de fermeture.
 * Rendu en portail pour échapper aux conteneurs `overflow`/`transform`.
 */
interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  children: ReactNode;
  /** Largeur max du panneau (centré). Par défaut 'max-w-md'. */
  maxWidthClass?: string;
}

export function BottomSheet({ open, onClose, title, children, maxWidthClass = 'max-w-md' }: BottomSheetProps) {
  const { palette } = useTheme();

  // Fermeture clavier + blocage du scroll de fond
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (typeof document === 'undefined' || !open) return null;

  // NB : rendu conditionnel simple plutôt qu'AnimatePresence — sous React
  // StrictMode + framer-motion v12, l'exit d'AnimatePresence ne démonte pas
  // toujours l'enfant (scrim invisible qui bloque les clics). L'entrée reste
  // animée ; la fermeture est un démontage instantané, fiable.
  return createPortal(
    <motion.div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {/* Scrim flouté */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Panneau */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className={`relative w-full ${maxWidthClass} rounded-t-[28px] sm:rounded-[28px] p-5 sm:p-6 m-0 sm:m-4`}
        style={{
          background: palette.bg2,
          boxShadow: `0 -8px 40px ${palette.shadow}`,
          maxHeight: '88vh',
          overflowY: 'auto',
        }}
      >
            {/* poignée mobile */}
            <div className="sm:hidden mx-auto mb-4 h-1.5 w-10 rounded-full" style={{ background: palette.line }} />
            <div className="flex items-center justify-between mb-4">
              {title && (
                <h3 className="text-lg font-bold" style={{ color: palette.ink, fontFamily: palette.display }}>
                  {title}
                </h3>
              )}
              <button
                type="button"
                onClick={onClose}
                className="ml-auto p-2 rounded-full transition-colors"
                style={{ color: palette.ink2 }}
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
        <div style={{ color: palette.ink2, fontFamily: palette.body }}>{children}</div>
      </motion.div>
    </motion.div>,
    document.body,
  );
}
