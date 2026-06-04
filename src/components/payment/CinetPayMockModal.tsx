import React, { useState, useEffect } from 'react';
import { CreditCard, Loader2, CheckCircle } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface CinetPayMockModalProps {
  amount: number;
  itemName: string;
  onSuccess: () => void;
  onClose: () => void;
}

export const CinetPayMockModal: React.FC<CinetPayMockModalProps> = ({ amount, itemName, onSuccess, onClose }) => {
  const [step, setStep] = useState<'initial' | 'loading' | 'success'>('initial');
  const { theme } = useTheme();

  const handlePay = () => {
    setStep('loading');
    setTimeout(() => {
      setStep('success');
      setTimeout(() => {
        onSuccess();
      }, 1500);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white dark:bg-[#161B22] w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-300 border border-[#E1E4E8] dark:border-[#30363D]">
        
        {/* Header CinetPay */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CreditCard className="w-6 h-6 text-green-400" />
            <span className="font-bold text-lg tracking-wide">CinetPay <span className="text-xs text-gray-400 font-normal">(Simulation)</span></span>
          </div>
          {step === 'initial' && (
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
              ✕
            </button>
          )}
        </div>

        <div className="p-6 flex flex-col flex-grow">
          {step === 'initial' && (
            <>
              <div className="text-center mb-6">
                <p className="text-sm text-[#6B7280] dark:text-[#8B949E] uppercase tracking-wider mb-1">Achat de</p>
                <h3 className="text-xl font-bold text-[#1A3557] dark:text-white mb-2">{itemName}</h3>
                <div className="text-3xl font-black text-eductome-magenta">{amount} FCFA</div>
              </div>

              <div className="space-y-3 mb-8">
                <p className="text-sm text-center text-[#6B7280] dark:text-[#8B949E] mb-2">Choisissez votre moyen de paiement</p>
                <div className="grid grid-cols-3 gap-2">
                  <button className="py-2 border-2 border-orange-500 rounded-lg text-orange-500 font-bold hover:bg-orange-50 transition-colors dark:hover:bg-orange-500/10">Orange</button>
                  <button className="py-2 border-2 border-yellow-400 rounded-lg text-yellow-500 font-bold hover:bg-yellow-50 transition-colors dark:hover:bg-yellow-400/10">MTN</button>
                  <button className="py-2 border-2 border-blue-500 rounded-lg text-blue-500 font-bold hover:bg-blue-50 transition-colors dark:hover:bg-blue-500/10">Wave</button>
                </div>
              </div>

              <button 
                onClick={handlePay}
                className="w-full py-3.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-lg transition-colors shadow-lg flex items-center justify-center gap-2 mt-auto"
              >
                Payer maintenant
              </button>
            </>
          )}

          {step === 'loading' && (
            <div className="flex flex-col items-center justify-center py-12 text-center h-full">
              <Loader2 className="w-16 h-16 text-eductome-magenta animate-spin mb-4" />
              <h3 className="text-xl font-bold text-[#1A3557] dark:text-white mb-2">Traitement en cours...</h3>
              <p className="text-[#6B7280] dark:text-[#8B949E]">Veuillez patienter pendant la simulation du paiement.</p>
            </div>
          )}

          {step === 'success' && (
            <div className="flex flex-col items-center justify-center py-12 text-center h-full animate-in zoom-in">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">Paiement Réussi !</h3>
              <p className="text-[#6B7280] dark:text-[#8B949E]">Déblocage de votre cours...</p>
            </div>
          )}
        </div>
        
        {/* Footer CinetPay */}
        <div className="bg-gray-50 dark:bg-[#0D1117] p-3 text-center border-t border-[#E1E4E8] dark:border-[#30363D]">
          <span className="text-xs text-gray-400 flex items-center justify-center gap-1">
            🔒 Sécurisé par CinetPay
          </span>
        </div>
      </div>
    </div>
  );
};
