import { ScrollReveal } from '../ui/ScrollReveal';
import { Rocket, Sparkles } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden px-4">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-eductome-magenta via-pink-600 to-orange-500 z-0" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0" />
      
      {/* Decorative floating elements */}
      <div className="absolute top-10 left-10 text-white/20 animate-pulse">
        <Sparkles className="w-12 h-12" />
      </div>
      <div className="absolute bottom-10 right-10 text-white/20 animate-bounce" style={{ animationDuration: '3s' }}>
        <Rocket className="w-16 h-16" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <div className="mb-12">
            <span className="inline-block bg-white/20 backdrop-blur-md text-white font-bold tracking-widest uppercase text-sm px-5 py-2 rounded-full mb-6 border border-white/30 shadow-lg">
              Objectif Réussite
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-extrabold text-white mb-6 leading-tight drop-shadow-md">
              Le BAC t'attend. <br className="hidden md:block" />
              Prêt à débloquer tes notes ?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium max-w-2xl mx-auto">
              Rejoins les centaines d'élèves ivoiriens qui ont déjà changé leur façon d'apprendre avec la méthode Grand Frère.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto inline-flex items-center justify-center font-black px-10 py-5 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 bg-white text-eductome-magenta shadow-[0_15px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >
              Découvrir les manuels &rarr;
            </button>
            <span className="text-white/80 font-medium text-sm mt-2 sm:mt-0">
              Satisfait ou remboursé sous 7 jours
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
