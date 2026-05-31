import { ScrollReveal } from '../ui/ScrollReveal';

export function CTASection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden px-4 bg-eductome-cream">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-eductome-magenta/5 rounded-full blur-[100px] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-eductome-marine mb-6 leading-tight">
              On va gâter le coin. Prêt à débloquer tes notes ?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
              Choisis ta collection et commence à réviser intelligemment.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <button 
            onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center font-bold px-10 py-5 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 bg-eductome-magenta text-white shadow-[0_10px_40px_rgba(230,57,70,0.3)]"
          >
            Découvrir les manuels &rarr;
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
