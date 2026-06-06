import { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
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
    const storageKey = `eductome_guide_${id}_seen_${currentUser.uid}`;
    const hasSeen = localStorage.getItem(storageKey);
    
    if (!hasSeen) {
      // Small delay for better UX (let the page load first)
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [id, currentUser]);

  const handleDismiss = () => {
    if (!currentUser) return;
    setIsVisible(false);
    const storageKey = `eductome_guide_${id}_seen_${currentUser.uid}`;
    localStorage.setItem(storageKey, 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-[#161B22] dark:to-[#0D1117] border border-blue-100 dark:border-[#30363D] rounded-2xl p-4 md:p-5 shadow-sm relative overflow-hidden animate-in slide-in-from-top-4 fade-in duration-500">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-4 opacity-10 dark:opacity-5">
        <Sparkles className="w-24 h-24 text-blue-600 dark:text-blue-400" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4">
        {/* Avatar */}
        <div className="shrink-0 relative">
          <img 
            src="/images/marius.jpeg" 
            alt="Grand Frère Marius" 
            className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-md"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#D81B60] rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
            <span className="text-[10px] text-white font-bold">i</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 pr-8">
          <h4 className="font-bold text-[#1A3557] dark:text-white text-sm md:text-base mb-1">
            {title}
          </h4>
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed font-medium">
            {message}
          </p>
        </div>

        {/* Close Button */}
        <button 
          onClick={handleDismiss}
          className="absolute top-2 right-2 md:static md:shrink-0 p-2 text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors bg-white/50 dark:bg-black/20 hover:bg-white dark:hover:bg-black/40 rounded-full"
          title="J'ai compris"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
