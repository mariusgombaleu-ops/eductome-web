import { ScrollReveal } from '../ui/ScrollReveal';

export function DifferenceSection() {
  const pillars = [
    {
      icon: "💡",
      color: "text-eductome-orange",
      title: "On t'explique avant de te donner des formules.",
      desc: "Tu ne mémorises plus à l'aveugle. Chaque notion commence par le POURQUOI — avec des exemples de ta vie quotidienne, pas des théories abstraites.",
      proof: "Par exemple, on t'explique ce qu'est une primitive avec l'image d'un arbre qui pousse, pas juste avec ∫ f(x)."
    },
    {
      icon: "🎯",
      color: "text-eductome-green",
      title: "On te donne une méthode.",
      desc: "Face à un exercice, tu sais exactement par où commencer, comment réfléchir, et comment finir. Plus de « je connais le cours mais je bloque au devoir ».",
      proof: "Chaque exercice corrigé commence par la section 'Le secret du grand frère' pour te montrer le piège à éviter."
    },
    {
      icon: "🤝",
      color: "text-eductome-sky",
      title: "On te parle comme un grand frère.",
      desc: "Pas de jargon inutile. Pas de jugement. Juste quelqu'un qui a vécu la même galère et qui t'explique avec patience, étape par étape.",
      proof: "Le ton est direct et bienveillant, comme si tu révisais avec le major de la classe."
    }
  ];

  return (
    <section id="notre-methode" className="py-12 md:py-20 bg-notebook px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/40"></div> {/* Subtle overlay to soften the grid */}
      
      {/* School supplies decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] text-eductome-marine z-0">
        {/* Pencil SVG */}
        <svg className="absolute top-10 left-10 w-32 h-32 animate-float transform -rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
        {/* Ruler SVG */}
        <svg className="absolute bottom-20 left-1/4 w-40 h-40 animate-float-reverse transform rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21.3 15.3l-7.6-7.6a2 2 0 0 0-2.8 0l-7.6 7.6a2 2 0 0 0 0 2.8l7.6 7.6a2 2 0 0 0 2.8 0l7.6-7.6a2 2 0 0 0 0-2.8z"></path><path d="M14.5 12.5L11 9"></path><path d="M12.5 14.5L9 11"></path><path d="M10.5 16.5L7 13"></path><path d="M8.5 18.5L5 15"></path></svg>
        {/* Compass/Geometry SVG */}
        <svg className="absolute top-1/4 right-10 w-36 h-36 animate-float transform rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M12 2l-6.5 20"></path><path d="M12 2l6.5 20"></path><path d="M6.5 17h11"></path><circle cx="12" cy="22" r="2"></circle></svg>
        {/* Open Book SVG */}
        <svg className="absolute bottom-10 right-1/4 w-48 h-48 animate-float-reverse transform -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
        {/* Graduation Cap SVG */}
        <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-float opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-eductome-magenta font-bold tracking-wider uppercase text-sm mb-2 block">La méthode Grand Frère</span>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-eductome-marine mb-6">
              Pourquoi nos manuels débloquent tes notes
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center h-full">
                <span className={`text-5xl mb-6 inline-block ${index % 2 === 0 ? 'animate-float' : 'animate-float-reverse'}`}>{pillar.icon}</span>
                <h3 className={`font-playfair text-xl font-bold mb-4 ${pillar.color}`}>
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {pillar.desc}
                </p>
                <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-gray-200 mt-auto shadow-sm italic text-sm text-gray-500 text-left w-full relative">
                  <span className="absolute -top-3 left-4 bg-eductome-marine text-white text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full">Exemple</span>
                  <p className="pt-2">"{pillar.proof}"</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
