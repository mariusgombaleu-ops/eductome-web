import { useState, useEffect } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface GrandFrereGuideProps {
  id: string;
  title?: string;
  message: string;
}

export function GrandFrereGuide({ id, title = "Le Grand Frère t'explique", message }: GrandFrereGuideProps) {
  const { currentUser } = useAuth();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!currentUser) return;

    const checkAndShow = () => {
      // Vérifier si l'utilisateur a fini l'onboarding général
      const hasFinishedOnboarding = localStorage.getItem(`eductome_goals_onboarding_seen_${currentUser.uid}`);
      if (!hasFinishedOnboarding) return;

      const storageKey = `eductome_guide_${id}_seen_${currentUser.uid}`;
      const hasSeen = localStorage.getItem(storageKey);
      
      if (!hasSeen) {
        // Delay before showing the bubble
        setTimeout(() => {
          setIsVisible(true);
        }, 800);
      }
    };

    checkAndShow();

    // Ecouter la fin de l'onboarding pour afficher la bulle si on est déjà sur la page
    const handleOnboardingComplete = () => {
      checkAndShow();
    };
    window.addEventListener('onboarding_complete', handleOnboardingComplete);

    return () => {
      window.removeEventListener('onboarding_complete', handleOnboardingComplete);
    };
  }, [id, currentUser]);

  const handleDismiss = () => {
    if (!currentUser) return;
    setIsVisible(false);
    const storageKey = `eductome_guide_${id}_seen_${currentUser.uid}`;
    localStorage.setItem(storageKey, 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="mb-6 bg-white dark:bg-[#161B22] border border-blue-100 dark:border-[#30363D] rounded-2xl p-5 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative overflow-hidden animate-in slide-in-from-top-4 fade-in duration-500 max-w-3xl mx-auto">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
        <Sparkles className="w-32 h-32 text-blue-600 dark:text-blue-400" />
      </div>

      <div className="relative z-10 flex flex-col items-start gap-4">
        {/* Avatar & Header */}
        <div className="flex items-center gap-4 w-full">
          <div className="shrink-0 relative">
            <img 
              src="/images/marius.jpeg" 
              alt="Grand Frère Marius" 
              className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-md"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#D81B60] rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
              <span className="text-[10px] text-white font-bold">i</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-[#1A3557] dark:text-white text-base md:text-lg">
              {title}
            </h4>
            <span className="text-xs text-green-500 font-medium">À l'instant</span>
          </div>
        </div>

        {/* Message Bubble Tail */}
        <div className="absolute top-[60px] left-[20px] w-0 h-0 border-r-[15px] border-r-blue-50 dark:border-r-[#0D1117] border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent transform -translate-x-[14px]"></div>

        {/* Message Content */}
        <div className="bg-blue-50 dark:bg-[#0D1117] rounded-2xl rounded-tl-none p-4 md:p-5 w-full mt-2 border border-blue-100/50 dark:border-[#30363D]/50">
          <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base leading-relaxed font-medium">
            {message}
          </p>
        </div>

        {/* Action Button */}
        <div className="w-full flex justify-end mt-2">
          <button 
            onClick={handleDismiss}
            className="bg-[#D81B60] hover:bg-pink-700 text-white font-bold py-2.5 px-6 rounded-xl transition-all active:scale-95 shadow-md flex items-center gap-2"
          >
            <CheckCircle2 className="w-5 h-5" />
            J'ai compris
          </button>
        </div>
      </div>
    </div>
  );
}
