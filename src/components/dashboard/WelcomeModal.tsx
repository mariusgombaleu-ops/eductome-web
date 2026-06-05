import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useUser } from '../../contexts/UserContext';

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [showButton, setShowButton] = useState(false);
  const { pseudo } = useUser();
  
  const fullText = `Champion(ne) ${pseudo || ''}, bienvenue ! Tu as fait le bon choix de nous rejoindre. Si tu es ici, c'est que tu es déterminé(e) à réussir et à t'engager pour de vrai. Nous avons tout mis en place pour t'accompagner vers la victoire. N'hésite pas à explorer tes cours et tes ressources. Ne t'inquiète surtout pas, je serai là pour t'accompagner chaque fois que tu auras besoin d'aide. On avance ensemble ! 💪`;

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('eductome_welcome_seen');
    if (!hasSeenWelcome) {
      // Small delay before showing modal
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('eductome_welcome_seen', 'true');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      let index = 0;
      const typingInterval = setInterval(() => {
        setDisplayedText(fullText.substring(0, index));
        index++;
        if (index > fullText.length) {
          clearInterval(typingInterval);
          setTimeout(() => setShowButton(true), 500);
        }
      }, 30); // Typing speed
      return () => clearInterval(typingInterval);
    }
  }, [isOpen, fullText]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-500">
      <div className="bg-white dark:bg-[#161B22] border border-[#E1E4E8] dark:border-[#30363D] w-full max-w-2xl rounded-3xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-500 delay-150">
        
        {/* Left/Top Side: Photo */}
        <div className="md:w-2/5 bg-gradient-to-br from-blue-900 to-[#1A3557] relative flex flex-col items-center justify-end">
           <img src="/images/marius.jpeg" alt="Grand Frère" className="w-full h-[200px] md:h-full object-cover object-top border-b-4 md:border-b-0 md:border-r-4 border-[#D81B60]" />
           <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md rounded-xl p-2 text-center border border-white/10 shadow-xl">
             <p className="text-white font-bold text-sm">Le Grand Frère</p>
             <p className="text-[#D81B60] text-[10px] font-bold uppercase tracking-wider">Gombaleu Marius</p>
           </div>
        </div>

        {/* Right/Bottom Side: Message */}
        <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center relative">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors bg-gray-100 dark:bg-gray-800 rounded-full p-1"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="mb-2 inline-flex">
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Nouveau Message 💬
            </span>
          </div>

          <div className="min-h-[150px] md:min-h-[220px] mt-4 flex items-center">
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 font-medium leading-relaxed font-playfair italic">
              "{displayedText}"
              <span className="animate-pulse inline-block w-1 h-5 bg-gray-400 ml-1 translate-y-1"></span>
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
