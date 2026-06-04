import { ScrollReveal } from '../ui/ScrollReveal';
import { HeartHandshake, ArrowRight } from 'lucide-react';

export function ParentsSection() {
  return (
    <section className="py-16 md:py-24 bg-eductome-marine text-white px-4 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px'}} />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20">
              <HeartHandshake className="w-8 h-8 text-pink-300" />
            </div>
            
            <span className="text-pink-300 font-bold tracking-widest uppercase text-xs mb-4 block letter-spacing-2">
              Un mot pour les parents
            </span>
            
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-8 leading-tight">
              Vous voulez aider votre enfant <br className="hidden md:block" /> à réussir ?
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100 font-light mb-10 leading-relaxed max-w-3xl">
              Payer des répétiteurs coûte cher et ne garantit pas toujours des résultats si l'enfant n'a pas la bonne méthode. 
              Nos manuels offrent une pédagogie <span className="font-semibold text-white">structurée, bienveillante et autonome</span>. 
              Offrez-lui le guide qui changera sa scolarité.
            </p>
            
            <button 
              onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 bg-white text-eductome-marine shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.15)] group"
            >
              Découvrir nos offres pour lui
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
