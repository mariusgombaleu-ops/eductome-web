import { ScrollReveal } from '../ui/ScrollReveal';
import { FileText, Book, Smartphone, Check, Star, ArrowUpRight, Truck } from 'lucide-react';
import { CTAButton } from '../ui/CTAButton';

export function DeliveryFormatsSection() {
  return (
    <section className="py-12 md:py-20 bg-white px-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-eductome-marine mb-4">
              3 Façons d'Obtenir EDUCTOME
            </h2>
            <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
              Peu importe le format que tu choisis, le contenu pédagogique est exactement le même (même ton "Grand Frère"). Mais l'expérience s'enrichit !
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-end mb-12">
          
          {/* Tier 1 : E-Book */}
          <ScrollReveal delay={0.1} className="h-full">
            <div className="h-full bg-[#fafafa] rounded-2xl p-8 border border-gray-200 flex flex-col relative transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-gray-200 p-3 rounded-xl">
                  <FileText className="w-8 h-8 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-eductome-marine">E-book (PDF)</h3>
                  <p className="text-sm font-medium text-gray-500">Télécharge et lis maintenant</p>
                </div>
              </div>
              


              <p className="text-gray-600 text-sm mb-5">La méthode Grand Frère, accessible immédiatement sur ton téléphone pour réviser hors-ligne.</p>
              
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700">Toute la méthode "Grand Frère"</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700">Explications simples et astuces</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700">Consultable hors-ligne partout</span>
                </li>
              </ul>
              
              <div className="mt-auto">
                <a href="https://selar.co/m/eductome" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 hover:bg-gray-100 px-6 py-3 rounded-xl font-bold transition-colors">
                  Acheter le PDF <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Tier 2 : Livre Physique */}
          <ScrollReveal delay={0.2} className="h-full">
            <div className="h-full bg-blue-50/50 rounded-2xl p-8 border border-blue-100 flex flex-col relative transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Book className="w-8 h-8 text-eductome-sky" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-eductome-marine">Livre Physique</h3>
                  <p className="text-sm font-medium text-eductome-sky">Reçois-le chez toi</p>
                </div>
              </div>



              <p className="text-gray-600 text-sm mb-5">Le confort du papier pour se concentrer, sans être distrait par les notifications.</p>
              
              <div className="text-xs font-bold text-eductome-sky uppercase tracking-wide mb-3">Tout du E-book, plus :</div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-eductome-sky shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700">Zéro fatigue visuelle (pas d'écran)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-eductome-sky shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700">Facile à annoter et surligner</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-eductome-sky shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-700">Inclus : code secret pour débloquer l'Application !</span>
                </li>
              </ul>
              
              <div className="mt-auto space-y-2">
                <a href="https://wa.me/2250799506300?text=Bonjour%20Grand%20Frère,%20je%20souhaite%20commander%20un%20livre%20physique." target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 border-2 border-eductome-sky text-eductome-sky hover:bg-blue-100 px-6 py-3 rounded-xl font-bold transition-colors">
                  Commander via WhatsApp <ArrowUpRight className="w-4 h-4" />
                </a>
                <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
                  <Truck className="w-3.5 h-3.5" />
                  <span>Livraison Abidjan 24-48h</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Tier 3 : L'Application — visuellement dominant */}
          <ScrollReveal delay={0.3} className="h-full">
            <div className="h-full bg-gradient-to-b from-eductome-marine to-[#0d1f36] rounded-2xl p-8 pb-10 border-2 border-eductome-magenta flex flex-col relative md:-translate-y-6 shadow-2xl shadow-eductome-marine/30 transition-all duration-300 hover:-translate-y-8 hover:shadow-[0_25px_60px_rgba(26,53,87,0.4)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-eductome-magenta text-white px-5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-pink-900/40">
                <Star className="w-3 h-3 fill-current" /> RECOMMANDÉ
              </div>
              
              <div className="flex items-center gap-4 mb-5 mt-2">
                <div className="bg-white/10 p-3 rounded-xl border border-white/20">
                  <Smartphone className="w-8 h-8 text-eductome-magenta" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">L'Application</h3>
                  <p className="text-sm font-medium text-pink-300">Ton espace d'entraînement</p>
                </div>
              </div>



              <p className="text-blue-100 text-sm mb-5">L'expérience d'apprentissage ultime. Réviser devient interactif, motivant et structuré pour la réussite.</p>
              
              <div className="text-xs font-bold text-pink-300 uppercase tracking-wide mb-3">Tout du Livre, plus :</div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-eductome-magenta shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-white">Quiz interactifs avec correction pas à pas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-eductome-magenta shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-white">Espace personnel avec suivi (XP, Badges)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-eductome-magenta shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-white">Accès au Forum d'entraide entre élèves</span>
                </li>
              </ul>
              
              <div className="mt-auto">
                <CTAButton to="/register" variant="primary" className="w-full text-center justify-center text-base py-4">
                  Créer un compte gratuit
                </CTAButton>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
