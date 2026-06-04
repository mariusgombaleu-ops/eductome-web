import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useInstallPWA } from '../../hooks/useInstallPWA';
import { X, Share, PlusSquare } from 'lucide-react';

export const MainLayout = () => {
  const { showIOSPrompt, setShowIOSPrompt } = useInstallPWA();

  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />

      {/* iOS Install Prompt Modal */}
      {showIOSPrompt && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 pb-10">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowIOSPrompt(false)} />
          <div className="relative w-full max-w-sm bg-white dark:bg-[#161B22] rounded-2xl shadow-2xl border border-[#E1E4E8] dark:border-[#30363D] p-6 animate-in slide-in-from-bottom-8 sm:slide-in-from-bottom-0 sm:zoom-in-95">
            <button 
              onClick={() => setShowIOSPrompt(false)} 
              className="absolute top-4 right-4 p-2 rounded-lg text-[#6B7280] dark:text-[#8B949E] hover:bg-[#F8F9FA] dark:hover:bg-[#30363D] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center space-y-4 pt-2">
              <div className="w-16 h-16 bg-[#D81B60]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <img src="/logo-pwa.png" alt="Eductome App" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A2E] dark:text-white font-playfair">Installer EDUCTOME</h3>
              <p className="text-sm text-[#6B7280] dark:text-[#8B949E]">Installez cette application sur votre écran d'accueil pour un accès rapide et facile, sans passer par le navigateur.</p>
              
              <div className="bg-[#F8F9FA] dark:bg-[#0D1117] rounded-xl p-4 text-left mt-6 border border-[#E1E4E8] dark:border-[#30363D]">
                <ol className="space-y-4 text-sm text-[#1A1A2E] dark:text-[#E6EDF3] font-medium">
                  <li className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1A3557] text-white text-xs shrink-0">1</span>
                    Appuyez sur <Share className="w-5 h-5 text-[#1976D2] mx-1" /> dans la barre Safari
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1A3557] text-white text-xs shrink-0">2</span>
                    Faites défiler et appuyez sur <br /> <span className="font-bold flex items-center gap-1 mt-1">"Sur l'écran d'accueil" <PlusSquare className="w-4 h-4" /></span>
                  </li>
                </ol>
              </div>
              <button onClick={() => setShowIOSPrompt(false)} className="w-full py-3 bg-[#1A3557] text-white rounded-xl font-bold mt-4 hover:bg-[#1A3557]/90 transition-colors">
                J'ai compris
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
