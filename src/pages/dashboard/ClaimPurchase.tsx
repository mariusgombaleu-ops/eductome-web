import React, { useState } from 'react';
import { Search, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';

export const ClaimPurchase = () => {
  const { palette } = useTheme();
  const [reference, setReference] = useState('');
  const [status, setStatus] = useState<'idle' | 'searching' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { unlockCourse } = useUser();
  const { currentUser } = useAuth();

  const handleClaim = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reference.trim()) return;

    setStatus('searching');
    setErrorMessage('');

    try {
      // Récupérer le token Firebase pour authentifier la requête
      if (!currentUser) {
        setStatus('error');
        setErrorMessage('Tu dois être connecté(e) pour réclamer un achat.');
        return;
      }
      const idToken = await currentUser.getIdToken();

      // Appel de la Cloud Function claimSelarOrder (authéentifiée)
      const response = await fetch(`https://us-central1-eductome-web.cloudfunctions.net/claimSelarOrder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
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
    <div className="max-w-2xl mx-auto space-y-6 transition-colors">
      <div>
        <h1 className="text-3xl font-bold font-playfair mb-2" style={{ color: palette.ink }}>
          Réclamer un achat
        </h1>
        <p style={{ color: palette.ink2 }}>
          Tu as payé sur Selar mais ton cours n'est pas débloqué ? Entre le numéro de référence reçu par email ci-dessous.
        </p>
      </div>

      <div className="rounded-[28px] p-6 md:p-8 shadow-sm border transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
        <form onSubmit={handleClaim} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold" style={{ color: palette.ink }}>
              Référence de commande Selar <span style={{ color: palette.accent }}>*</span>
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60" style={{ color: palette.ink }} />
              <input
                type="text"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                placeholder="Ex: SELAR-123456789"
                className="w-full pl-12 pr-4 py-4 rounded-[16px] border focus:outline-none focus:ring-2 transition-colors"
                style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink, ['--tw-ring-color' as any]: palette.accent }}
                required
              />
            </div>
            <p className="text-sm mt-2 flex items-start gap-1.5" style={{ color: palette.ink2 }}>
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              Tu trouveras cette référence dans le reçu Selar envoyé sur ton adresse email.
            </p>
          </div>

          <button
            type="submit"
            disabled={status === 'searching' || !reference.trim()}
            className="w-full py-4 rounded-[16px] font-bold flex items-center justify-center gap-2 transition-all shadow-md"
            style={status === 'searching' || !reference.trim() ? {
              background: palette.bg2, color: palette.ink2, opacity: 0.7, cursor: 'not-allowed'
            } : {
              background: palette.accent, color: 'white', boxShadow: `0 4px 14px ${palette.accent}40`, transform: 'scale(1)'
            }}
          >
            {status === 'searching' ? 'Vérification en cours...' : 'Vérifier la commande'}
          </button>
        </form>

        {status === 'success' && (
          <div className="mt-6 p-4 bg-green-50/10 border border-green-500/30 rounded-[16px] flex flex-col items-center text-center animate-in zoom-in-95">
            <CheckCircle2 className="w-10 h-10 text-green-500 mb-2" />
            <h3 className="font-bold text-green-500 mb-1">Achat retrouvé ✅</h3>
            <p className="text-sm mb-4" style={{ color: palette.ink2 }}>
              Ton cours est maintenant débloqué. Bonne étude Champion(ne) !
            </p>
            <button
              onClick={() => navigate('/dashboard/courses')}
              className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-[12px] font-bold text-sm flex items-center gap-2 transition-colors"
            >
              Aller à mes cours <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {status === 'error' && (
          <div className="mt-6 p-4 bg-red-50/10 border border-red-500/30 rounded-[16px] flex items-start gap-3 animate-in zoom-in-95">
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-red-500 text-sm">{errorMessage}</h3>
              <p className="text-sm mt-1" style={{ color: palette.ink2 }}>
                Vérifie que tu as bien copié la référence. Si le problème persiste, écris au support sur WhatsApp.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
