import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, BookOpen, FileText, Info, Edit3, HeartHandshake, ChevronRight } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Accueil', path: '/', icon: Home },
    { name: 'Collections', path: '/collections', icon: BookOpen },
    { name: 'Ressources', path: '/ressources', icon: FileText },
    { name: 'À propos', path: '/a-propos', icon: Info },
    { name: 'Blog', path: '/blog', icon: Edit3 },
    { name: 'Devenir Relais', path: '/devenir-relais', icon: HeartHandshake },
  ];

  const isTransparent = isHome && !scrolled && !isOpen;

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isTransparent ? 'bg-transparent py-4' : 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20 transition-all duration-300">
            {/* Logo */}
            <Link to="/" className="flex flex-shrink-0 items-center py-2" onClick={closeMenu} aria-label="Accueil EDUCTOME">
              <img 
                src="/images/logo.png" 
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
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-xl focus:outline-none transition-colors shadow-sm relative ${
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
        {isOpen && (
          <div className="md:hidden absolute top-[100%] left-0 w-full px-4 pt-2 pb-6 z-50">
            {/* Card style menu with notebook background */}
            <div className="bg-notebook bg-white rounded-3xl shadow-2xl border border-gray-200 p-3 flex flex-col space-y-2 animate-fade-in relative overflow-hidden">
              
              {/* Binder rings decoration */}
              <div className="absolute top-0 bottom-0 left-4 w-1 border-l-2 border-dashed border-gray-300"></div>
              
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={closeMenu}
                    className={`group flex items-center justify-between px-4 py-4 pl-8 text-lg font-bold rounded-2xl transition-all duration-300 relative ${
                      isActive
                        ? 'bg-gradient-to-r from-yellow-100 to-yellow-50/20 text-eductome-marine shadow-sm'
                        : 'text-gray-600 hover:bg-white/60 hover:text-eductome-magenta'
                    }`}
                  >
                    {/* Highlighter effect active state */}
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-eductome-magenta rounded-r-full"></div>
                    )}
                    
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-white text-eductome-magenta shadow-sm' : 'bg-gray-100 text-gray-400 group-hover:bg-pink-50 group-hover:text-eductome-magenta'}`}>
                        <Icon size={20} strokeWidth={isActive ? 3 : 2} />
                      </div>
                      <span className={isActive ? 'font-black' : ''}>{link.name}</span>
                    </div>

                    {isActive ? (
                      <span className="text-eductome-magenta font-caveat text-xl">★</span>
                    ) : (
                      <ChevronRight size={18} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
      {/* Spacer pour empêcher le contenu de passer sous la navbar fixe sur les autres pages */}
      {!isHome && <div className="h-16 md:h-20" />}
    </>
  );
}
