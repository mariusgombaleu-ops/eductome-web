import React, { useState } from 'react';
import { X, Lock, CheckCircle, Smartphone } from 'lucide-react';

interface CinetPayModalProps {
  isOpen: boolean;
  onClose: () => void;
  tomeTitle: string;
  price: number;
  isChapter?: boolean;
}

export const CinetPayModal: React.FC<CinetPayModalProps> = ({ isOpen, onClose, tomeTitle, price, isChapter = false }) => {
  const [step, setStep] = useState<'selection' | 'processing' | 'success'>('selection');
  const [network, setNetwork] = useState<'wave' | 'orange' | 'mtn' | null>(null);
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!network || phone.length < 10) return;
    
    setStep('processing');
    
    // Simulate network delay
    setTimeout(() => {
      setStep('success');
    }, 2000);
  };

  const handleClose = () => {
    setStep('selection');
    setNetwork(null);
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 font-poppins">
      <div className="bg-white dark:bg-[#161B22] rounded-2xl max-w-md w-full relative animate-in zoom-in-95 duration-200 overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
        
        {/* Header */}
        <div className="bg-[#1A3557] p-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-blue-200" />
            <span className="font-bold">Paiement Sécurisé</span>
          </div>
          <button onClick={handleClose} className="text-white/70 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {step === 'selection' && (
            <>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight mb-1">
                  {isChapter ? 'Débloquer un chapitre' : 'Débloquer le tome'}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{tomeTitle}</p>
                <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30 flex justify-between items-center">
                  <span className="font-medium text-blue-900 dark:text-blue-100">Total à payer</span>
                  <span className="text-2xl font-bold text-[#D81B60]">{price} FCFA</span>
                </div>
              </div>

              <form onSubmit={handlePay}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Moyen de paiement
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setNetwork('wave')}
                      className={`py-3 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${network === 'wave' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-gray-700 hover:border-blue-200'}`}
                    >
                      <div className="w-8 h-8 bg-[#1CBEFF] rounded-full flex items-center justify-center text-white font-bold text-xs">W</div>
                      <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Wave</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setNetwork('orange')}
                      className={`py-3 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${network === 'orange' ? 'border-[#FF7900] bg-orange-50 dark:bg-orange-900/20' : 'border-gray-200 dark:border-gray-700 hover:border-orange-200'}`}
                    >
                      <div className="w-8 h-8 bg-[#FF7900] rounded-full flex items-center justify-center text-white font-bold text-xs">O</div>
                      <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Orange</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setNetwork('mtn')}
                      className={`py-3 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${network === 'mtn' ? 'border-[#FFCC00] bg-yellow-50 dark:bg-yellow-900/20' : 'border-gray-200 dark:border-gray-700 hover:border-yellow-200'}`}
                    >
                      <div className="w-8 h-8 bg-[#FFCC00] rounded-full flex items-center justify-center text-[#000] font-bold text-xs">M</div>
                      <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">MTN</span>
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Numéro de téléphone
                  </label>
                  <div className="relative">
                    <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input 
                      type="tel" 
                      placeholder="Ex: 0700000000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#0D1117] border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#1976D2] outline-none transition-all dark:text-white"
                      required
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={!network || phone.length < 10}
                  className="w-full py-4 bg-[#1A3557] hover:bg-[#1976D2] text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Payer {price} FCFA
                </button>
                
                <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3" /> Propulsé par CinetPay
                </p>
              </form>
            </>
          )}

          {step === 'processing' && (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 border-4 border-blue-100 border-t-[#1976D2] rounded-full animate-spin mb-6"></div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Validation en cours...</h3>
              <p className="text-gray-500 dark:text-gray-400">Veuillez confirmer le paiement sur votre téléphone.</p>
            </div>
          )}

          {step === 'success' && (
            <div className="py-8 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Paiement réussi !</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-[250px]">
                Le contenu a été ajouté à votre espace "Mes Cours".
              </p>
              <button 
                onClick={handleClose}
                className="w-full py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-bold transition-colors"
              >
                Commencer à lire
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
