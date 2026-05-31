import { Link } from 'react-router-dom';

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
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3 text-sm font-semibold text-gray-300">
            <Link to="/collections" className="hover:text-white transition-colors">Collections</Link>
            <Link to="/ressources" className="hover:text-white transition-colors">Ressources</Link>
            <Link to="/a-propos" className="hover:text-white transition-colors">À propos</Link>
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link to="/devenir-relais" className="hover:text-white transition-colors">Devenir Relais</Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} EDUCTOME — Gombaleu Marius</p>
          <div className="flex gap-4">
            <a href="https://wa.me/2250799506300" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="WhatsApp EDUCTOME">
              WhatsApp
            </a>
            <p>Abidjan, Côte d'Ivoire</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
