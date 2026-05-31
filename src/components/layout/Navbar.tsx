import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
    { name: 'Accueil', path: '/' },
    { name: 'Collections', path: '/collections' },
    { name: 'Ressources', path: '/ressources' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Devenir Relais', path: '/devenir-relais' },
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
                    className={`font-semibold text-sm transition-all duration-200 border-b-2 py-1 ${
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
                className={`p-2 rounded-xl focus:outline-none transition-colors shadow-sm ${
                  isTransparent 
                    ? 'bg-eductome-magenta text-white shadow-eductome-magenta/30' 
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
          <div className="md:hidden absolute top-[100%] left-0 w-full bg-white border-b border-gray-100 shadow-xl z-50">
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={closeMenu}
                    className={`block px-4 py-4 text-lg font-bold rounded-xl transition-colors ${
                      isActive
                        ? 'text-eductome-magenta bg-eductome-magenta/10 border-l-4 border-eductome-magenta'
                        : 'text-gray-800 hover:text-eductome-magenta hover:bg-gray-50 border-l-4 border-transparent'
                    }`}
                  >
                    {link.name}
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
