import React, { useState } from 'react';
import { Search, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

export const ClaimPurchase = () => {
  const [reference, setReference] = useState('');
  const [status, setStatus] = useState<'idle' | 'searching' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { unlockCourse } = useUser();

  const handleClaim = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reference.trim()) return;

    setStatus('searching');
    setErrorMessage('');

    try {
      // Appel de la Cloud Function claimSelarOrder
      const response = await fetch(`https://us-central1-eductome-web.cloudfunctions.net/claimSelarOrder`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reference: reference.trim() })
      });
      
      const data = await response.json();

      if (data.success && data.productId) {
        // BUG FIX — appel manquant : on débloque maintenant le cours dans Firestore
        try {
          await unlockCourse(data.productId);
          setStatus('success');
        } catch (unlockError) {
          console.error('Erreur lors du déblocage du cours:', unlockError);
          setStatus('error');
          setErrorMessage('Ton achat a été retrouvé mais le déblocage a échoué. Réessaie ou contacte le support sur WhatsApp.');
        }
      } else if (data.success) {
        // success sans productId (ne devrait pas arriver, mais on gère)
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Référence introuvable ou déjà utilisée.');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Impossible de vérifier cette référence pour le moment.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-playfair text-[#1A1A2E] dark:text-white mb-2">
          Réclamer un achat
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Tu as payé sur Selar mais ton cours n'est pas débloqué ? Entre le numéro de référence reçu par email ci-dessous.
        </p>
      </div>

      <div className="bg-white dark:bg-[#161B22] border border-gray-200 dark:border-[#30363D] rounded-2xl p-6 md:p-8">
        <form onSubmit={handleClaim} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Référence de commande Selar <span className="text-eductome-magenta">*</span>
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                placeholder="Ex: SELAR-123456789"
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 dark:border-[#30363D] bg-gray-50 dark:bg-[#0D1117] text-gray-900 dark:text-white focus:outline-none focus:border-[#1976D2] dark:focus:border-[#1976D2] transition-colors"
                required
              />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 flex items-start gap-1.5">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              Tu trouveras cette référence dans le reçu Selar envoyé sur ton adresse email.
            </p>
          </div>

          <button
            type="submit"
            disabled={status === 'searching' || !reference.trim()}
            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
              status === 'searching' || !reference.trim()
                ? 'bg-gray-100 dark:bg-[#30363D] text-gray-400 cursor-not-allowed'
                : 'bg-[#1976D2] hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25 active:scale-[0.98]'
            }`}
          >
            {status === 'searching' ? 'Vérification en cours...' : 'Vérifier la commande'}
          </button>
        </form>

        {status === 'success' && (
          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex flex-col items-center text-center animate-in zoom-in-95">
            <CheckCircle2 className="w-10 h-10 text-green-500 mb-2" />
            <h3 className="font-bold text-green-800 dark:text-green-300 mb-1">Achat retrouvé ✅</h3>
            <p className="text-sm text-green-700 dark:text-green-400 mb-4">
              Ton cours est maintenant débloqué. Bonne étude Champion(ne) !
            </p>
            <button
              onClick={() => navigate('/dashboard/courses')}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold text-sm flex items-center gap-2 transition-colors"
            >
              Aller à mes cours <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {status === 'error' && (
          <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3 animate-in zoom-in-95">
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-red-800 dark:text-red-300 text-sm">{errorMessage}</h3>
              <p className="text-sm text-red-700 dark:text-red-400 mt-1">
                Vérifie que tu as bien copié la référence. Si le problème persiste, écris au support sur WhatsApp.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
