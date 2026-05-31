import { ScrollReveal } from '../ui/ScrollReveal';

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-eductome-marine px-4">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <div className="glass rounded-3xl p-10 md:p-16 relative">
            <span className="absolute top-8 left-8 text-eductome-magenta text-8xl font-serif leading-none opacity-30">
              ❝
            </span>
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex gap-1 text-yellow-400 mb-6 text-xl">
                <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
              </div>
              <p className="text-white text-xl md:text-3xl italic mb-8 font-playfair leading-relaxed">
                Le seul manuel qui m'a fait comprendre la physique. Avant, j'apprenais par cœur sans rien piger. Avec EDUCTOME, j'ai eu 15 au dernier devoir !
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  Y
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-lg">Yann</p>
                  <p className="text-eductome-magenta text-sm">Élève de Terminale D</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2} className="mt-12">
          <button 
            onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(230,57,70,0.4)] active:scale-95 bg-eductome-magenta text-white"
          >
            Moi aussi, je veux comprendre &rarr;
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
