import React from 'react';
import { Lock, CreditCard, ExternalLink, ShieldCheck } from 'lucide-react';
// TODO: Intégrer AuthContext Firebase plus tard quand on mettra la base de données
// import { useAuth } from '../../contexts/AuthContext';

interface SelarPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  tomeTitle: string;
  price: number;
  isChapter?: boolean;
  isCollection?: boolean;
  courseId?: string;
}

// Liens réels vers les produits Selar de EDUCTOME
const SELAR_TOME_LINK = "https://selar.com/xm589dmmi9";
const SELAR_CHAPTER_LINK = "https://selar.com/09b17bf2f1";
const SELAR_COLLECTION_LINK = "https://selar.com/27v5n07o20";

export const SelarPaymentModal: React.FC<SelarPaymentModalProps> = ({ isOpen, onClose, tomeTitle, price, isChapter = false, isCollection = false, courseId }) => {
  // Pour l'instant, un numéro fictif puisqu'on n'a pas encore de vraie BDD branchée
  const user = { phoneNumber: "0700000000" };
  
  if (!isOpen) return null;

  let paymentLink = SELAR_TOME_LINK;
  if (isChapter) paymentLink = SELAR_CHAPTER_LINK;
  if (isCollection) paymentLink = SELAR_COLLECTION_LINK;

  const handlePaymentRedirect = () => {
    let finalLink = paymentLink;
    
    // Sauvegarder le courseId pour le déblocage après paiement
    if (courseId) {
      localStorage.setItem('eductome_pending_course', courseId);
    }
    
    if (user?.phoneNumber) {
      // Nettoyer le numéro pour l'email (enlever les + et espaces)
      const cleanPhone = user.phoneNumber.replace(/[^0-9]/g, '');
      const email = `${cleanPhone}@eductome.app`;
      
      const encodedPhone = encodeURIComponent(user.phoneNumber);
      const separator = finalLink.includes('?') ? '&' : '?';
      
      finalLink = `${finalLink}${separator}email=${encodeURIComponent(email)}&phone=${encodedPhone}`;
    }

    // Redirection vers le lien Selar avec paramètres
    window.open(finalLink, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-[#161B22] rounded-3xl w-full max-w-md overflow-hidden shadow-2xl border border-gray-100 dark:border-[#30363D] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-eductome-marine to-eductome-sky p-6 text-white text-center relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 -mr-16 -mt-16 pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-bold font-playfair mb-1 flex items-center justify-center gap-2">
              <ShieldCheck className="w-6 h-6 text-green-400" />
              Paiement Sécurisé
            </h2>
            <p className="text-sm text-blue-100 opacity-90">Transaction protégée par Selar</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="text-center">
            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{tomeTitle}</h3>
            <div className="text-3xl font-extrabold text-eductome-magenta font-poppins">
              {price.toLocaleString()} FCFA
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="py-3 rounded-xl border-2 border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/20 flex flex-col items-center justify-center gap-2 shadow-sm">
              <div className="w-8 h-8 bg-[#1CBEFF] rounded-full flex items-center justify-center text-white font-bold text-xs">W</div>
              <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Wave</span>
            </div>
            <div className="py-3 rounded-xl border-2 border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/20 flex flex-col items-center justify-center gap-2 shadow-sm">
              <div className="w-8 h-8 bg-[#FF7900] rounded-full flex items-center justify-center text-white font-bold text-xs">O</div>
              <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Orange</span>
            </div>
            <div className="py-3 rounded-xl border-2 border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/20 flex flex-col items-center justify-center gap-2 shadow-sm">
              <div className="w-8 h-8 bg-[#FFCC00] rounded-full flex items-center justify-center text-[#000] font-bold text-xs">M</div>
              <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">MTN</span>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={handlePaymentRedirect}
              className="w-full bg-eductome-magenta hover:bg-pink-700 text-white font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-pink-500/30 active:scale-95"
            >
              <CreditCard className="w-5 h-5" />
              Continuer vers Selar
              <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 text-gray-500 dark:text-gray-400 font-medium hover:bg-gray-50 dark:hover:bg-[#0D1117] rounded-xl transition-colors"
            >
              Annuler
            </button>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-50 dark:bg-[#0D1117] p-3 text-center border-t border-gray-100 dark:border-[#30363D]">
          <p className="text-xs text-gray-400 flex items-center justify-center gap-1.5 font-medium">
            <Lock className="w-3 h-3" /> Propulsé par Selar (Wave, Orange, MTN, Visa)
          </p>
        </div>
      </div>
    </div>
  );
};
