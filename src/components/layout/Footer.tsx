import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-eductome-dark text-white pt-12 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-3xl font-poppins font-extrabold tracking-tight">
              <span className="text-eductome-magenta">Educ</span>
              <span className="text-white">tome</span>
            </div>
            <p className="italic text-gray-400 mt-2 text-sm font-playfair">
              "Le manuel qui t'explique comme un grand frère."
            </p>
            
            <div className="flex gap-4 mt-6 text-gray-400">
              <a href="#" className="hover:text-eductome-magenta transition-colors" aria-label="Facebook EDUCTOME">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/2250799506300" target="_blank" rel="noopener noreferrer" className="hover:text-eductome-magenta transition-colors" aria-label="WhatsApp EDUCTOME">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="hover:text-eductome-magenta transition-colors" aria-label="Instagram EDUCTOME">
                <Instagram size={20} />
              </a>
            </div>
            
            <div className="mt-6 text-sm text-gray-400 font-medium space-y-2">
              <p className="flex items-center justify-center md:justify-start gap-2"><span aria-hidden="true">📘</span> Conforme au programme officiel ivoirien</p>
              <p className="flex items-center justify-center md:justify-start gap-2"><span aria-hidden="true">🇨🇮</span> Conçu à Abidjan, pour les élèves ivoiriens</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3 text-sm font-semibold text-gray-300 md:mt-2">
            <Link to="/collections" className="hover:text-white transition-colors">Collections</Link>
            <Link to="/ressources" className="hover:text-white transition-colors">Ressources</Link>
            <Link to="/a-propos" className="hover:text-white transition-colors">À propos</Link>
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link to="/devenir-relais" className="hover:text-white transition-colors">Devenir Relais</Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 text-center md:text-left">
          <p>© {new Date().getFullYear()} EDUCTOME — Gombaleu Marius</p>
          
          <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
            <Link to="#" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link to="#" className="hover:text-white transition-colors">Politique de confidentialité</Link>
            <Link to="#" className="hover:text-white transition-colors">CGV</Link>
          </div>

          <div className="flex gap-4 justify-center">
            <p>Abidjan, Côte d'Ivoire</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
