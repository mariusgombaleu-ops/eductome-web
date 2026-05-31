import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-shrink-0 items-center py-2" onClick={closeMenu} aria-label="Accueil EDUCTOME">
            <img src="/images/logo.png" alt="Eductome Logo" className="h-12 md:h-14 w-auto object-contain" />
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
              className="text-gray-700 hover:text-eductome-magenta focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Ouvrir le menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={`block px-3 py-3 text-base font-semibold rounded-md ${
                    isActive
                      ? 'text-eductome-magenta bg-eductome-magenta/5 border-l-4 border-eductome-magenta'
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
  );
}
