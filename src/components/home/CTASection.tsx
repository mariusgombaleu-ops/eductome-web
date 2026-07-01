import { Link } from 'react-router-dom';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Rocket, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { getActiveCollectionOffer, deadlineLabel, daysRemaining } from '../../data/offers';
import { formatFcfa } from '../../utils/format';

export function CTASection() {
  const offer = getActiveCollectionOffer();
  const days = daysRemaining();

  return (
    <section className="py-20 md:py-32 relative overflow-hidden px-4">
      {/* Fond dynamique vibrant */}
      <div className="absolute inset-0 bg-gradient-to-br from-eductome-magenta via-pink-600 to-orange-500 animate-gradient-shift z-0" />
      <div className="absolute inset-0 opacity-[0.06] z-0" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '24px 24px'}} />

      {/* Éléments flottants décoratifs */}
      <div className="absolute top-10 left-10 text-white/15 animate-pulse">
        <Sparkles className="w-10 h-10 md:w-12 md:h-12" />
      </div>
      <div className="absolute bottom-10 right-10 text-white/15 animate-bounce" style={{ animationDuration: '3s' }}>
        <Rocket className="w-12 h-12 md:w-16 md:h-16" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <div className="mb-10">
            <span className="inline-block bg-white/20 backdrop-blur-md text-white font-bold tracking-widest uppercase text-sm px-5 py-2 rounded-full mb-6 border border-white/30 shadow-lg">
              Objectif réussite
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-extrabold text-white mb-6 leading-tight drop-shadow-md">
              Le BAC t'attend. <br className="hidden md:block" />
              <span className="text-yellow-300">Chaque jour compte.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium max-w-2xl mx-auto">
              Commence gratuitement, compose ton premier devoir, et débloque la suite quand tu es prêt — à vie, sans abonnement.
            </p>
          </div>
        </ScrollReveal>

        {/* Urgence — portée par l'offre fondateur (une seule échéance) */}
        {offer.active && (
          <ScrollReveal delay={0.15}>
            <div className="inline-flex flex-col sm:flex-row items-center gap-x-4 gap-y-1 bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl px-6 py-3.5 mb-10 shadow-lg">
              <span className="text-base font-black text-white uppercase tracking-wide">
                Tarif fondateur · plus que {days} jour{days > 1 ? 's' : ''}
              </span>
              <span className="hidden sm:block w-px h-5 bg-white/30" />
              <span className="text-base text-white/95 font-medium">
                <span className="line-through text-white/60">{formatFcfa(offer.originalPrice)}</span>{' '}
                <span className="font-black text-yellow-300">{formatFcfa(offer.price)}</span> à vie · jusqu'au {deadlineLabel()}
              </span>
            </div>
          </ScrollReveal>
        )}

        {/* CTA — le compte gratuit domine, le livre reste une porte secondaire */}
        <ScrollReveal delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link
              to="/register"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-black px-10 py-5 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 bg-white text-eductome-magenta shadow-[0_15px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >
              Commencer gratuitement
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/2250799506300?text=Bonjour%20Grand%20Frère,%20je%20souhaite%20commander%20un%20livre."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center font-bold px-8 py-4 text-base rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 bg-transparent text-white border-2 border-white/40 hover:bg-white/10 hover:border-white"
            >
              Commander un livre
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
            <Shield className="w-4 h-4" />
            <span>Accès à vie, sans abonnement</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
