import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, ArrowRight, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { fireConfetti } from '../../utils/confetti';
import { useEffect } from 'react';

interface ChapterCompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNextChapter?: () => void;
  xpEarned: number;
  chapterTitle: string;
  hasNextChapter: boolean;
}

export const ChapterCompletionModal = ({
  isOpen,
  onClose,
  onNextChapter,
  xpEarned,
  chapterTitle,
  hasNextChapter
}: ChapterCompletionModalProps) => {
  const { palette } = useTheme();

  useEffect(() => {
    if (isOpen) {
      // Fire a nice blast of confetti when the modal opens
      setTimeout(() => {
        fireConfetti();
      }, 300);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md overflow-hidden rounded-[24px] shadow-2xl"
            style={{ background: palette.bg2, border: `1px solid ${palette.line}` }}
          >
            {/* Top Pattern/Image Area */}
            <div className="relative h-40 w-full overflow-hidden flex items-center justify-center" style={{ background: palette.accentSoft }}>
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '16px 16px', color: palette.accent }}></div>
              
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", delay: 0.2, damping: 15 }}
                className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center border-4 shadow-lg"
                style={{ background: palette.bg, borderColor: palette.accent }}
              >
                <Trophy className="w-12 h-12" style={{ color: palette.accent }} />
              </motion.div>
            </div>

            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="px-8 pt-8 pb-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-2xl font-black mb-2" style={{ color: palette.ink }}>
                  Champion(ne), tu as gâté le coin !
                </h3>
                <p className="text-sm font-medium mb-8" style={{ color: palette.ink2 }}>
                  Tu as terminé <strong style={{ color: palette.ink }}>{chapterTitle}</strong> avec brio. Le Grand Frère est fier de toi.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl mb-10"
                style={{ background: palette.bg3, border: `1px solid ${palette.line}` }}
              >
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-500" />
                <div className="text-left">
                  <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: palette.ink3 }}>XP Gagné</div>
                  <div className="text-xl font-black" style={{ color: palette.accent }}>+{xpEarned} XP</div>
                </div>
              </motion.div>

              <div className="space-y-3">
                {hasNextChapter ? (
                  <button
                    onClick={() => {
                      onClose();
                      onNextChapter?.();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white shadow-lg shadow-blue-900/20 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    style={{ background: '#1976D2' }}
                  >
                    Passer au chapitre suivant <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    onClick={onClose}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white shadow-lg shadow-blue-900/20 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    style={{ background: '#1976D2' }}
                  >
                    Retourner à l'accueil
                  </button>
                )}
                
                <button
                  onClick={onClose}
                  className="w-full py-3 rounded-xl font-bold transition-colors"
                  style={{ color: palette.ink2, background: 'transparent' }}
                >
                  Fermer
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
