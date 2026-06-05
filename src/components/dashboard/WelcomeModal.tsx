import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useUser } from '../../contexts/UserContext';
import { useAuth } from '../../contexts/AuthContext';

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const { pseudo, sexe, levelString } = useUser();
  const { currentUser } = useAuth();
  
  const isCollege = levelString === '3eme';

  let titleWord = '';
  if (isCollege) {
    titleWord = sexe === 'M' ? 'futur lycéen' : sexe === 'F' ? 'future lycéenne' : 'futur(e) lycéen(ne)';
  } else {
    titleWord = sexe === 'M' ? 'futur bachelier' : sexe === 'F' ? 'future bachelière' : 'futur(e) bachelier(ère)';
  }

  const determineWord = sexe === 'M' ? 'déterminé' : sexe === 'F' ? 'déterminée' : 'déterminé(e)';
  const championWord = sexe === 'M' ? 'Champion' : sexe === 'F' ? 'Championne' : 'Champion(ne)';
  const parts = [
    { text: 'Bienvenue ', bold: false },
    { text: pseudo || championWord, bold: true },
    { text: ', ', bold: false },
    { text: titleWord, bold: true },
    { text: ' ! Tu as fait le meilleur choix en nous rejoignant. Si tu es ici, c\'est que tu es ' + determineWord + ' à t\'engager pour de vrai et ', bold: false },
    { text: 'à réussir ton examen', bold: true },
    { text: '. Nous avons conçu ', bold: false },
    { text: 'le système parfait', bold: true },
    { text: ' pour t\'accompagner jusqu\'à ', bold: false },
    { text: 'la victoire', bold: true },
    { text: '. Ne t\'inquiète surtout pas, je serai là pour ', bold: false },
    { text: 'te guider', bold: true },
    { text: ' chaque fois que tu auras besoin d\'aide. N\'hésite pas à explorer tes ', bold: false },
    { text: 'cours et tes ressources', bold: true },
    { text: ' dès maintenant : ce sont de ', bold: false },
    { text: 'véritables alliés', bold: true },
    { text: ' pour ta réussite. On est ensemble ! 💪', bold: false }
  ];

  const totalLength = parts.reduce((acc, part) => acc + part.text.length, 0);

  useEffect(() => {
    if (!pseudo || !currentUser) return; // Wait for user data to load
    
    const storageKey = `eductome_welcome_seen_${currentUser.uid}`;
    const hasSeenWelcome = localStorage.getItem(storageKey);
    
    if (!hasSeenWelcome) {
      // Show modal after 1.5s delay to make it feel natural when landing on dashboard
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem(storageKey, 'true');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [pseudo, currentUser]);

  useEffect(() => {
    if (isOpen) {
      let currentCount = 0;
      const typingInterval = setInterval(() => {
        currentCount++;
        setCharCount(currentCount);
        if (currentCount >= totalLength) {
          clearInterval(typingInterval);
          setTimeout(() => setShowButton(true), 500);
        }
      }, 60); // Typing speed
      return () => clearInterval(typingInterval);
    }
  }, [isOpen, totalLength]);

  const renderAnimatedText = () => {
    let remainingChars = charCount;
    return parts.map((part, index) => {
      if (remainingChars <= 0) return null;
      const currentText = part.text.substring(0, remainingChars);
      remainingChars -= part.text.length;
      
      if (part.bold) {
        return <strong key={index} className="font-bold text-gray-900 dark:text-white">{currentText}</strong>;
      }
      return <span key={index}>{currentText}</span>;
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-500">
      <div className="w-full max-w-2xl flex flex-col md:flex-row items-start justify-center gap-4 animate-in slide-in-from-bottom-10 duration-500 delay-150 relative">
        
        {/* Close Button - positioned outside or top right of the message */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute -top-12 right-0 md:-top-4 md:-right-12 text-white/70 hover:text-white transition-colors bg-black/30 hover:bg-black/50 rounded-full p-2"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Photo Profil Circle */}
        <div className="shrink-0 flex flex-col items-center gap-2 mx-auto md:mx-0">
          <div className="relative">
            <img src="/images/marius.jpeg" alt="Grand Frère" className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-[#D81B60] shadow-xl" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="bg-black/60 backdrop-blur-md rounded-xl px-3 py-1 mt-1 text-center border border-white/10 shadow-xl">
             <p className="text-white font-bold text-xs md:text-sm">Le Grand Frère</p>
          </div>
        </div>

        {/* Message Bubble */}
        <div className="flex-1 bg-white dark:bg-[#161B22] p-6 md:p-8 rounded-3xl md:rounded-tl-none shadow-2xl relative mt-4 md:mt-0 w-full max-w-lg mx-auto md:mx-0">
          
          {/* Chat bubble pointer (triangle) - Desktop (Left) */}
          <div className="hidden md:block absolute top-6 -left-4 w-0 h-0 border-y-[12px] border-y-transparent border-r-[16px] border-r-white dark:border-r-[#161B22] z-10"></div>
          
          {/* Chat bubble pointer (triangle) - Mobile (Up) */}
          <div className="md:hidden absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[12px] border-x-transparent border-b-[16px] border-b-white dark:border-b-[#161B22] z-10"></div>
          
          <div className="mb-4 inline-flex">
            <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <span>Message du Grand Frère</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
            </span>
          </div>

          <div className="min-h-[160px] md:min-h-[220px]">
            <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 font-medium leading-relaxed font-poppins">
              "{renderAnimatedText()}"
              <span className="animate-pulse inline-block w-[3px] h-5 bg-gray-500 ml-1 translate-y-1"></span>
            </p>
          </div>

          <div className={`mt-6 transition-all duration-500 transform ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-full py-3.5 bg-[#D81B60] hover:bg-[#C2185B] text-white rounded-xl font-bold transition-all shadow-lg shadow-pink-900/20 active:scale-95 text-base md:text-lg flex items-center justify-center gap-2"
            >
              C'est parti ! 🚀
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
