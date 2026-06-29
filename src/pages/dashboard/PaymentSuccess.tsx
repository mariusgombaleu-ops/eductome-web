import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle2, Loader2, ArrowRight, AlertTriangle } from 'lucide-react';
import { useUser } from '../../contexts/UserContext';
import { useTheme } from '../../contexts/ThemeContext';

export const PaymentSuccess = () => {
  const { palette } = useTheme();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [unlockedProduct, setUnlockedProduct] = useState<string | null>(null);
  const [debugUrl, setDebugUrl] = useState<string>('');
  const [isChecking, setIsChecking] = useState(false);
  const { unlockCourse } = useUser();

  useEffect(() => {
    if (!email) {
      setDebugUrl(window.location.href);
      setStatus('error');
    }
  }, [email]);

  const checkPayment = async () => {
    if (!email || isChecking || status !== 'idle') return;
    setIsChecking(true);

    try {
      const response = await fetch(`https://us-central1-eductome-web.cloudfunctions.net/checkTransaction?email=${encodeURIComponent(email)}`);
      const data = await response.json();

      if (data.success && data.productId) {
        // On vérifie d'abord si on a un courseId précis enregistré localement
        const pendingCourseId = localStorage.getItem('eductome_pending_course');

        if (pendingCourseId) {
          // Si on a acheté une collection complète
          if (pendingCourseId === 'cles-maths' || pendingCourseId.includes('cles')) {
            // Tomes maths actifs débloqués avec la collection. Ajouter les nouveaux
            // slugs (t2-derivees…t12-revisions-bac) au fur et à mesure de leur mise en ligne.
            const tomesMaths = ['t1-limites', 't2-derivees', 't3-primitives', 't4-suites', 't5-log-expo'];
            tomesMaths.forEach(t => unlockCourse(t));
            setUnlockedProduct(pendingCourseId);
          } else {
            unlockCourse(pendingCourseId);
            setUnlockedProduct(pendingCourseId);
          }
          // On nettoie
          localStorage.removeItem('eductome_pending_course');
        } else {
          // Fallback (ex: le nom renvoyé par Selar)
          unlockCourse(data.productId);
          setUnlockedProduct(data.productId);
        }

        setStatus('success');
      }
      // Pas encore trouvé : on reste en 'idle'. Le bouton manuel ou le
      // polling silencieux ci-dessous reprendra la vérification plus tard.
    } catch (error) {
      console.error("Erreur lors de la vérification:", error);
    } finally {
      setIsChecking(false);
    }
  };

  // Filet de sécurité : on réinterroge Selar en silence pendant que l'élève reste sur la page
  useEffect(() => {
    if (!email || status !== 'idle') return;

    const interval = setInterval(() => {
      if (!isChecking) checkPayment();
    }, 15000);

    return () => clearInterval(interval);
  }, [email, status, isChecking]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 transition-colors duration-300" style={{ background: palette.bg }}>
      <div className="max-w-md w-full rounded-[28px] shadow-xl border p-8 text-center animate-in zoom-in-95 duration-500 transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>

        {/* Animated Icon */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className={`absolute inset-0 rounded-full animate-ping opacity-75 ${status === 'success' ? 'bg-green-100 dark:bg-green-900/30' : isChecking ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}></div>
          <div className={`relative w-full h-full rounded-full flex items-center justify-center ${status === 'success' ? 'bg-green-50 dark:bg-green-800/20' : isChecking ? 'bg-blue-50 dark:bg-blue-800/20' : 'bg-red-50 dark:bg-red-800/20'}`}>
            {status === 'success' && <CheckCircle2 className="w-12 h-12 text-green-500 animate-in spin-in-180 duration-500" />}
            {status !== 'success' && isChecking && <Loader2 className="w-12 h-12 text-[#1976D2] animate-spin" />}
            {status !== 'success' && !isChecking && <AlertTriangle className="w-12 h-12 text-red-500" />}
          </div>
        </div>

        {/* Text content */}
        <h1 className="text-2xl md:text-3xl font-playfair font-bold mb-4 transition-colors" style={{ color: palette.ink }}>
          {status === 'success' ? 'Paiement reçu, champion(ne) !' :
           isChecking ? 'Vérification en cours...' :
           status === 'error' ? 'Petit souci de notre côté' :
           'Vérification de ton paiement'}
        </h1>

        <div className="mb-8 space-y-2 transition-colors" style={{ color: palette.ink2 }}>
          {status === 'success' && (
            <p className="animate-in fade-in slide-in-from-bottom-2">
              Ton accès au cours <strong>{unlockedProduct}</strong> a été activé avec succès. Tu peux commencer à bosser !
            </p>
          )}

          {isChecking && status !== 'success' && (
            <>
              <p>
                Nous interrogeons Selar pour vérifier ton paiement.
              </p>
              <p className="text-sm font-bold transition-colors" style={{ color: palette.accent }}>
                Cela prend généralement quelques secondes...
              </p>
            </>
          )}

          {status === 'idle' && !isChecking && (
            <p>
              Ton achat est en cours de vérification. Si tu as bien payé sur Selar, clique sur « J'ai payé, vérifier mon achat » pour débloquer ton cours tout de suite — sinon on s'en charge automatiquement d'ici quelques minutes.
            </p>
          )}

          {status === 'error' && (
            <div className="space-y-4">
              <p>
                Nous n'avons pas pu retrouver la référence de ta transaction. Si tu as été débité, contacte le support avec ton numéro de téléphone.
              </p>
              <div className="p-2 rounded text-xs text-left break-all overflow-hidden border border-red-200 transition-colors" style={{ background: palette.bg2 }}>
                <span className="font-bold text-red-500">Debug Info:</span> {debugUrl}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {status === 'idle' && (
            <button
              onClick={checkPayment}
              disabled={isChecking}
              className={`w-full py-4 px-6 rounded-[24px] font-bold flex items-center justify-center gap-2 transition-all duration-300 border ${
                isChecking
                  ? 'cursor-not-allowed translate-y-2 opacity-50'
                  : 'shadow-lg shadow-green-500/30 translate-y-0 opacity-100'
              }`}
              style={{
                background: isChecking ? palette.bg2 : '#10B981',
                borderColor: isChecking ? palette.line : '#10B981',
                color: isChecking ? palette.ink3 : '#fff'
              }}
            >
              {isChecking ? 'Vérification...' : 'J\'ai payé, vérifier mon achat'}
            </button>
          )}

          <button
            onClick={() => navigate('/dashboard/courses')}
            className={`w-full py-4 px-6 rounded-[24px] font-bold flex items-center justify-center gap-2 transition-all duration-300 border ${
              status === 'success'
                ? 'text-white shadow-lg shadow-blue-500/30'
                : 'hover:opacity-80'
            }`}
            style={
              status === 'success' 
              ? { background: palette.accent, borderColor: palette.accent }
              : { background: palette.bg2, borderColor: palette.line, color: palette.ink }
            }
          >
            {status === 'success' ? 'Accéder à mon tome' : 'Retour à l\'accueil'}
            {status === 'success' && <ArrowRight className="w-5 h-5" />}
          </button>
        </div>

      </div>
    </div>
  );
};
