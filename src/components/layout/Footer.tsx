import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle, MapPin, BookOpen, Heart, ArrowRight, Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-eductome-dark text-white relative">
      {/* Mini CTA Banner */}
      <div className="bg-gradient-to-r from-eductome-magenta to-[#f02b74] py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white font-bold text-sm md:text-base text-center sm:text-left">
            Prêt à commencer ? Ton premier chapitre est gratuit.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 bg-white text-eductome-magenta font-bold px-6 py-2.5 rounded-xl text-sm hover:bg-white/90 transition-colors shrink-0 shadow-lg active:scale-95"
          >
            Créer un compte <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top Section : Multi-column */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-6 mb-16">

            {/* Col 1: Brand & Socials */}
            <div className="col-span-2 lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="text-3xl font-poppins font-extrabold tracking-tight mb-4">
                <span className="text-eductome-magenta">Educ</span>
                <span className="text-white">tome</span>
              </div>
              <p className="italic text-gray-400 text-sm font-playfair mb-6 leading-relaxed">
                "Le manuel qui t'explique comme un grand frère. Comprendre avant de calculer, le sens avant la formule."
              </p>

              <div className="flex gap-3 mb-6">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-eductome-magenta hover:text-white transition-all duration-300" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="https://wa.me/2250799506300" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#25D366] hover:text-white transition-all duration-300" aria-label="WhatsApp">
                  <MessageCircle size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:text-white transition-all duration-300 border-transparent" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
              </div>

              {/* Payment icons */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Paiements :</span>
                <div className="flex items-center gap-2">
                  <span className="bg-yellow-500/20 text-yellow-400 text-[10px] font-bold px-2.5 py-1 rounded-md">MTN MoMo</span>
                  <span className="bg-orange-500/20 text-orange-400 text-[10px] font-bold px-2.5 py-1 rounded-md">Orange</span>
                  <span className="bg-blue-500/20 text-blue-400 text-[10px] font-bold px-2.5 py-1 rounded-md">Wave</span>
                </div>
              </div>
            </div>

            {/* Col 2: Collections */}
            <div className="col-span-1 lg:col-span-3 lg:col-start-6 text-left">
              <h4 className="text-white font-bold mb-5 tracking-wider uppercase text-sm">Collections</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/collections/cles-maths" className="hover:text-eductome-sky transition-colors flex items-center justify-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1A3557]" />Les Clés</Link></li>
                <li><Link to="/collections/la-voie" className="hover:text-eductome-green transition-colors flex items-center justify-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />La Voie</Link></li>
                <li><Link to="/collections/derniers-codes" className="hover:text-red-400 transition-colors flex items-center justify-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C62828]" />Codes</Link></li>
                <li><Link to="/collections/les-racines" className="hover:text-orange-400 transition-colors flex items-center justify-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E67E22]" />Racines</Link></li>
              </ul>
            </div>

            {/* Col 3: Ressources */}
            <div className="col-span-1 lg:col-span-2 text-left">
              <h4 className="text-white font-bold mb-5 tracking-wider uppercase text-sm">Ressources</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/ressources?tab=exercices" className="hover:text-white transition-colors">Exos Corrigés</Link></li>
                <li><Link to="/ressources?tab=fiches" className="hover:text-white transition-colors">Fiches Méthode</Link></li>
                <li><Link to="/ressources?tab=planning" className="hover:text-white transition-colors">Le Planning</Link></li>
                <li><Link to="/ressources?tab=questions" className="hover:text-white transition-colors">10 Pièges</Link></li>
              </ul>
            </div>

            {/* Col 4: Eductome */}
            <div className="col-span-2 lg:col-span-2 text-center md:text-left">
              <h4 className="text-white font-bold mb-5 tracking-wider uppercase text-sm">EDUCTOME</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/a-propos" className="hover:text-white transition-colors">À propos</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/devenir-relais" className="hover:text-white transition-colors">Devenir Relais</Link></li>
                <li><Link to="/ape" className="hover:text-white transition-colors">Partenaire APE</Link></li>
                <li><Link to="/login" className="hover:text-eductome-magenta transition-colors mt-2 inline-block">Connexion</Link></li>
              </ul>
            </div>

          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-6 text-xs text-gray-500">

            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
              <p className="flex items-center gap-1.5 text-gray-400 font-medium">
                <BookOpen className="w-3.5 h-3.5" /> Conforme au programme officiel ivoirien
              </p>
              <p className="flex items-center gap-1.5 text-gray-400 font-medium">
                <Heart className="w-3.5 h-3.5 text-eductome-magenta" /> Conçu à Abidjan pour les élèves
              </p>
              <p className="flex items-center gap-1.5 text-gray-400 font-medium">
                <Shield className="w-3.5 h-3.5" /> Essai gratuit · accès à vie
              </p>
            </div>

            <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
              <Link to="#" className="hover:text-white transition-colors">Mentions légales</Link>
              <Link to="#" className="hover:text-white transition-colors">Confidentialité</Link>
              <Link to="#" className="hover:text-white transition-colors">CGV</Link>
            </div>

            <div className="flex items-center gap-2 justify-center text-gray-400">
              <span>© {new Date().getFullYear()} EDUCTOME</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Abidjan, CI</span>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
