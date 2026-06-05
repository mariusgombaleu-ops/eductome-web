import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, BookOpen, FileText, Info, Edit3, HeartHandshake, User, Download, Share, PlusSquare } from 'lucide-react';
import { useInstallPWA } from '../../hooks/useInstallPWA';
import { useAuth } from '../../contexts/AuthContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { isInstallable, installPWA, showIOSPrompt, setShowIOSPrompt } = useInstallPWA();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      setIsOpen(true);
    }
  };

  const closeMenu = () => {
    if (!isOpen) return;
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300); // 300ms pour correspondre à la durée de la transition
  };

  const { currentUser } = useAuth();
  const isLoggedIn = !!currentUser;
  const lastChapter = localStorage.getItem('eductome_last_chapter_read');
  const espaceUrl = isLoggedIn ? (lastChapter ? `/dashboard/course/${lastChapter}` : '/dashboard') : '/login';

  const navLinks = [
    { name: 'Accueil', path: '/', icon: Home },
    { name: 'Nos Manuels', path: '/collections/cles-maths', icon: BookOpen },
    { name: 'Ressources', path: '/ressources', icon: FileText },
    { name: 'À propos', path: '/a-propos', icon: Info },
    { name: 'Blog', path: '/blog', icon: Edit3 },
    { name: 'Devenir Relais', path: '/devenir-relais', icon: HeartHandshake },
    { name: 'Mon Espace', path: espaceUrl, icon: User },
  ];

  const isTransparent = isHome && !scrolled && !isOpen && !isClosing;

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isTransparent ? 'bg-transparent py-4' : 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20 transition-all duration-300">
            {/* Logo */}
            <Link to="/" className="flex flex-shrink-0 items-center py-2" onClick={closeMenu} aria-label="Accueil EDUCTOME">
              <img 
                src="/images/logo.png?v=2" 
                alt="Eductome Logo" 
                className={`transition-all duration-300 object-contain ${isTransparent ? 'h-16 md:h-20 drop-shadow-lg bg-white/20 p-2 rounded-xl backdrop-blur-sm' : 'h-12 md:h-14'}`} 
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`font-semibold text-sm transition-all duration-200 border-b-2 py-1 flex items-center gap-1 ${
                      isActive 
                        ? 'text-eductome-magenta border-eductome-magenta' 
                        : isTransparent
                          ? 'text-white border-transparent hover:text-eductome-magenta hover:border-eductome-magenta/30 drop-shadow-md'
                          : 'text-gray-700 border-transparent hover:text-eductome-magenta hover:border-eductome-magenta/30'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              {isInstallable && (
                <button
                  onClick={installPWA}
                  className="bg-eductome-magenta text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4" /> Installer l'App
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-xl focus:outline-none transition-colors shadow-sm relative z-50 ${
                  isTransparent 
                    ? 'bg-eductome-magenta text-white shadow-eductome-magenta/30' 
                    : isOpen 
                      ? 'bg-eductome-magenta text-white shadow-lg' 
                      : 'bg-gray-100 text-eductome-marine hover:bg-gray-200'
                }`}
                aria-expanded={isOpen}
                aria-label="Ouvrir le menu"
              >
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {(isOpen || isClosing) && (
          <div className="md:hidden fixed inset-0 top-[60px] md:top-[80px] bg-black/60 backdrop-blur-sm z-40 animate-in fade-in" onClick={closeMenu}>
            <div 
              className={`absolute top-4 left-4 right-4 bg-white/95 dark:bg-[#161B22]/95 backdrop-blur-xl border border-white/20 dark:border-[#30363D] shadow-2xl rounded-3xl p-6 transition-all duration-300 ease-in-out transform origin-top ${isClosing ? 'scale-95 opacity-0 -translate-y-4' : 'scale-100 opacity-100 translate-y-0 animate-in slide-in-from-top-4'}`}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={closeMenu}
                      className={`font-semibold text-lg flex items-center gap-4 p-4 rounded-2xl transition-all ${
                        isActive 
                          ? 'bg-gradient-to-r from-pink-50 to-white dark:from-[#D81B60]/20 dark:to-transparent text-eductome-magenta shadow-sm border border-pink-100 dark:border-pink-900/30' 
                          : 'text-eductome-marine dark:text-white hover:bg-gray-50 dark:hover:bg-[#30363D]'
                      }`}
                    >
                      <div className={`${isActive ? 'bg-pink-100 dark:bg-[#D81B60]/30 text-[#D81B60]' : 'bg-gray-100 dark:bg-[#0D1117] text-gray-500 dark:text-gray-400'} p-2 rounded-xl transition-colors`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      {link.name}
                    </Link>
                  );
                })}
                {isInstallable && (
                  <div className="pt-4 mt-2 border-t border-gray-100 dark:border-[#30363D]">
                    <button
                      onClick={() => {
                        closeMenu();
                        installPWA();
                      }}
                      className="w-full bg-gradient-to-r from-[#D81B60] to-pink-600 text-white px-4 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg shadow-pink-500/30 active:scale-95"
                    >
                      <Download className="w-5 h-5" /> Installer l'App EDUCTOME
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Spacer pour empêcher le contenu de passer sous la navbar fixe sur les autres pages */}
      {!isHome && <div className="h-16 md:h-20" />}

      {/* iOS Install Prompt Modal */}
      {showIOSPrompt && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 pb-10">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowIOSPrompt(false)} />
          <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 animate-in slide-in-from-bottom-8 sm:slide-in-from-bottom-0 sm:zoom-in-95">
            <button 
              onClick={() => setShowIOSPrompt(false)} 
              className="absolute top-4 right-4 p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center space-y-4 pt-2">
              <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <img src="/logo-pwa.png?v=2" alt="Eductome App" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-eductome-marine font-playfair">Installer EDUCTOME</h3>
              <p className="text-sm text-gray-600">Installez cette application sur votre écran d'accueil pour un accès rapide et facile, sans passer par le navigateur.</p>
              
              <div className="bg-gray-50 rounded-xl p-4 text-left mt-6 border border-gray-100">
                <ol className="space-y-4 text-sm text-gray-700 font-medium">
                  <li className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-eductome-marine text-white text-xs shrink-0">1</span>
                    Appuyez sur <Share className="w-5 h-5 text-blue-500 mx-1" /> dans la barre Safari
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-eductome-marine text-white text-xs shrink-0">2</span>
                    Faites défiler et appuyez sur <br /> <span className="font-bold flex items-center gap-1 mt-1">"Sur l'écran d'accueil" <PlusSquare className="w-4 h-4" /></span>
                  </li>
                </ol>
              </div>
              <button onClick={() => setShowIOSPrompt(false)} className="w-full py-3 bg-eductome-marine text-white rounded-xl font-bold mt-4 hover:bg-blue-900 transition-colors">
                J'ai compris
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
