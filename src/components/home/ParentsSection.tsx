import { ScrollReveal } from '../ui/ScrollReveal';

export function ParentsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0a1628] text-white px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <span className="text-eductome-magenta font-bold tracking-wider uppercase text-sm mb-4 block">Pour les parents</span>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6">
            Vous voulez aider votre enfant à réussir ?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-10 leading-relaxed">
            Payer des répétiteurs coûte cher et ne garantit pas toujours des résultats si l'enfant n'a pas la bonne méthode. 
            Nos manuels offrent une pédagogie structurée, bienveillante et autonome. Offrez-lui le guide qui changera sa scolarité.
          </p>
          <button 
            onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 bg-white text-eductome-marine shadow-lg hover:shadow-xl"
          >
            Découvrir nos offres &rarr;
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
