import { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle2, Loader2, ArrowRight, AlertTriangle } from 'lucide-react';
import { useUser } from '../../contexts/UserContext';

export const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  
  const [status, setStatus] = useState<'polling' | 'success' | 'error' | 'timeout'>('polling');
  const [unlockedProduct, setUnlockedProduct] = useState<string | null>(null);
  const [debugUrl, setDebugUrl] = useState<string>('');
  const { unlockCourse } = useUser();
  const pollCountRef = useRef(0);
  const maxPolls = 36; // 3 minutes maximum (36 * 5s)

  useEffect(() => {
    if (!email) {
      setDebugUrl(window.location.href);
      setStatus('error');
      return;
    }

    const checkPayment = async () => {
      try {
        const response = await fetch(`https://us-central1-eductome-web.cloudfunctions.net/checkTransaction?email=${encodeURIComponent(email)}`);
        const data = await response.json();

        if (data.success && data.productId) {
          // Paiement validé par le Vigile
          unlockCourse(data.productId);
          setUnlockedProduct(data.productId);
          setStatus('success');
        } else {
          // Paiement pas encore traité, on continue
          pollCountRef.current += 1;
          if (pollCountRef.current >= maxPolls) {
            setStatus('timeout');
          } else {
            setTimeout(checkPayment, 5000); // Polling toutes les 5 secondes
          }
        }
      } catch (error) {
        console.error("Erreur lors de la vérification:", error);
        // On réessaie quand même en cas de petite coupure réseau
        pollCountRef.current += 1;
        if (pollCountRef.current >= maxPolls) {
          setStatus('timeout');
        } else {
          setTimeout(checkPayment, 5000);
        }
      }
    };

    checkPayment();
  }, [reference, unlockCourse]);

  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#0D1117] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-[#161B22] rounded-3xl shadow-xl border border-gray-100 dark:border-[#30363D] p-8 text-center animate-in zoom-in-95 duration-500">
        
        {/* Animated Icon */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className={`absolute inset-0 rounded-full animate-ping opacity-75 ${status === 'success' ? 'bg-green-100 dark:bg-green-900/30' : status === 'polling' ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}></div>
          <div className={`relative w-full h-full rounded-full flex items-center justify-center ${status === 'success' ? 'bg-green-50 dark:bg-green-800/20' : status === 'polling' ? 'bg-blue-50 dark:bg-blue-800/20' : 'bg-red-50 dark:bg-red-800/20'}`}>
            {status === 'success' && <CheckCircle2 className="w-12 h-12 text-green-500 animate-in spin-in-180 duration-500" />}
            {status === 'polling' && <Loader2 className="w-12 h-12 text-[#1976D2] animate-spin" />}
            {(status === 'error' || status === 'timeout') && <AlertTriangle className="w-12 h-12 text-red-500" />}
          </div>
        </div>

        {/* Text content */}
        <h1 className="text-2xl md:text-3xl font-playfair font-bold text-[#1A1A2E] dark:text-white mb-4">
          {status === 'success' ? 'Paiement reçu, champion(ne) !' : 
           status === 'polling' ? 'Activation en cours...' : 
           'Oups, petit problème'}
        </h1>
        
        <div className="text-gray-600 dark:text-[#8B949E] mb-8 space-y-2">
          {status === 'success' && (
            <p className="animate-in fade-in slide-in-from-bottom-2">
              Ton accès au cours <strong>{unlockedProduct}</strong> a été activé avec succès. Tu peux commencer à bosser !
            </p>
          )}
          
          {status === 'polling' && (
            <>
              <p>
                Ton accès est en cours d'activation dans notre système.
              </p>
              <p className="text-sm font-bold text-[#1976D2] dark:text-blue-400">
                Ne ferme pas cette page, ça prend généralement moins d'une minute...
              </p>
            </>
          )}

          {status === 'timeout' && (
            <p>
              L'activation prend plus de temps que prévu. Ne t'inquiète pas, si ton paiement est passé, le cours sera débloqué automatiquement d'ici quelques minutes. Tu peux retourner à l'accueil.
            </p>
          )}

          {status === 'error' && (
            <div className="space-y-4">
              <p>
                Nous n'avons pas pu retrouver la référence de ta transaction. Si tu as été débité, contacte le support avec ton numéro de téléphone.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs text-left break-all overflow-hidden border border-red-200">
                <span className="font-bold text-red-500">Debug Info:</span> {debugUrl}
              </div>
            </div>
          )}
        </div>

        {/* Action Button */}
        <button
          onClick={() => navigate('/dashboard/courses')}
          disabled={status === 'polling'}
          className={`w-full py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
            status !== 'polling' 
              ? 'bg-[#1976D2] hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30 translate-y-0 opacity-100' 
              : 'bg-gray-100 dark:bg-[#30363D] text-gray-400 cursor-not-allowed translate-y-2 opacity-50'
          }`}
        >
          {status === 'success' ? 'Accéder à mon tome' : 'Retour à l\'accueil'}
          {status !== 'polling' && <ArrowRight className="w-5 h-5" />}
        </button>

      </div>
    </div>
  );
};
