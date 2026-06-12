import React from 'react';
import { Lock, CreditCard, ExternalLink, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useAuth } from '../../contexts/AuthContext';

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
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  // Extraire le vrai numéro depuis l'email fictif Firebase (format: +225XXXXXXXXXX@eductome.app)
  const realPhoneNumber = currentUser?.email?.replace('@eductome.app', '') || '';
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');
  const [relaisCode, setRelaisCode] = React.useState('');
  const [relaisCodeError, setRelaisCodeError] = React.useState('');

  if (!isOpen) return null;

  let paymentLink = SELAR_TOME_LINK;
  if (isChapter) paymentLink = SELAR_CHAPTER_LINK;
  if (isCollection) paymentLink = SELAR_COLLECTION_LINK;

  const handlePaymentRedirect = async () => {
    if (!email || !email.includes('@')) {
      setError('Un email valide est obligatoire pour valider ton achat plus tard.');
      return;
    }
    setError('');
    setRelaisCodeError('');

    // Valider le code relais si fourni (ne bloque pas l'achat si invalide)
    if (relaisCode.trim()) {
      try {
        const code = relaisCode.trim().toUpperCase();
        const relaisDocSnap = await getDoc(doc(db, 'relais', code));
        if (!relaisDocSnap.exists()) {
          setRelaisCodeError('Code invalide');
        } else {
          localStorage.setItem('eductome_pending_relais_code', code);
        }
      } catch (_) {
        // Échec silencieux : l'achat continue sans code relais
      }
    }

    let finalLink = paymentLink;
    let paymentEmail = email.trim();

    // Sauvegarder le courseId pour le déblocage après paiement
    if (courseId) {
      localStorage.setItem('eductome_pending_course', courseId);
    }

    if (realPhoneNumber) {
      const encodedPhone = encodeURIComponent(realPhoneNumber);
      const separator = finalLink.includes('?') ? '&' : '?';
      finalLink = `${finalLink}${separator}email=${encodeURIComponent(paymentEmail)}&phone=${encodedPhone}`;

      // Enregistrer l'email dans le storage pour que le Vigile background prenne le relais
      localStorage.setItem('eductome_waiting_payment_email', paymentEmail);
      localStorage.setItem('eductome_waiting_payment_time', Date.now().toString());
    }

    // Redirection vers le lien Selar avec paramètres
    window.open(finalLink, '_blank');
    onClose();

    if (paymentEmail) {
      navigate(`/dashboard/paiement-confirme?email=${encodeURIComponent(paymentEmail)}`);
    }
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

          <div className="space-y-2 mb-4 text-left">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Email utilisé sur Selar <span className="text-eductome-magenta">*</span>
            </label>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              Ce pont est indispensable pour retrouver ton paiement.
            </p>
            <input 
              type="email" 
              placeholder="ex: ton-email@gmail.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-3 rounded-xl border ${error ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} bg-white dark:bg-[#0D1117] text-gray-900 dark:text-white focus:outline-none focus:border-eductome-magenta transition-colors`}
              required
            />
            {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
          </div>

          <div className="space-y-2 mb-4 text-left">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Code Relais <span className="text-gray-400 font-normal">(optionnel)</span>
            </label>
            <input
              type="text"
              placeholder="ex: ABC123"
              value={relaisCode}
              onChange={(e) => { setRelaisCode(e.target.value.toUpperCase()); setRelaisCodeError(''); }}
              maxLength={6}
              className={`w-full p-3 rounded-xl border font-mono uppercase tracking-widest ${relaisCodeError ? 'border-red-400' : 'border-gray-200 dark:border-gray-700'} bg-white dark:bg-[#0D1117] text-gray-900 dark:text-white focus:outline-none focus:border-eductome-magenta transition-colors`}
            />
            {relaisCodeError && <p className="text-xs text-red-500 font-medium">{relaisCodeError}</p>}
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
