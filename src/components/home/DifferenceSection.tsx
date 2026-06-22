import { ScrollReveal } from '../ui/ScrollReveal';
import { XCircle, CheckCircle2 } from 'lucide-react';

export function DifferenceSection() {
  const pillars = [
    {
      icon: "💡",
      color: "text-eductome-orange",
      iconBg: "bg-orange-50",
      title: "On t'explique avant de te donner des formules.",
      before: "Cours illisibles, bourrés de jargon complexe",
      after: "Explications simples et claires — le sens avant la formule",
      proof: "Par exemple, on t'explique ce qu'est une primitive avec l'image d'un arbre qui pousse, pas juste avec ∫ f(x)."
    },
    {
      icon: "🎯",
      color: "text-eductome-green",
      iconBg: "bg-green-50",
      title: "On te donne une méthode.",
      before: "Aucune méthode pour aborder les exercices",
      after: "Une stratégie étape par étape pour chaque type d'exo",
      proof: "Chaque exercice corrigé commence par 'Le secret du grand frère' pour te montrer le piège à éviter."
    },
    {
      icon: "🤝",
      color: "text-eductome-sky",
      iconBg: "bg-blue-50",
      title: "On te parle comme un grand frère.",
      before: "Apprentissage par cœur sans comprendre",
      after: "Tu comprends le 'pourquoi' avant d'apprendre la formule",
      proof: "Le ton est direct et bienveillant, comme si tu révisais avec le major de la classe."
    }
  ];

  return (
    <section id="notre-methode" className="py-16 md:py-24 bg-notebook px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/40" />

      {/* Subtle school decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] text-eductome-marine z-0">
        <svg className="absolute top-10 left-10 w-32 h-32 animate-float transform -rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
        <svg className="absolute bottom-20 right-10 w-40 h-40 animate-float-reverse transform rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-white text-eductome-magenta font-bold tracking-wider uppercase text-xs px-4 py-2 rounded-full mb-4 shadow-sm border border-pink-100">
              ✨ La méthode Grand Frère
            </span>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-eductome-marine mb-4">
              Pourquoi nos manuels débloquent tes notes
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-light max-w-xl mx-auto">
              La même matière, la même intelligence — juste la bonne méthode.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={index} delay={index * 0.12}>
              <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 h-full flex flex-col group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Top colored bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${pillar.color === 'text-eductome-orange' ? 'bg-eductome-orange' : pillar.color === 'text-eductome-green' ? 'bg-eductome-green' : 'bg-eductome-sky'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <span className={`text-4xl ${index % 2 === 0 ? 'animate-float' : 'animate-float-reverse'}`}>
                    {pillar.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`font-playfair text-xl font-bold mb-6 ${pillar.color}`}>
                  {pillar.title}
                </h3>

                {/* Before / After mini-cards */}
                <div className="space-y-3 mb-6 flex-grow">
                  {/* Before */}
                  <div className="flex items-start gap-3 bg-red-50/60 rounded-xl p-3 border border-red-100/50">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-500 line-through decoration-red-300">{pillar.before}</span>
                  </div>
                  {/* After */}
                  <div className="flex items-start gap-3 bg-green-50/60 rounded-xl p-3 border border-green-100/50">
                    <CheckCircle2 className="w-5 h-5 text-eductome-green shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-800 font-medium">{pillar.after}</span>
                  </div>
                </div>

                {/* Proof/Example — slides up on hover */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mt-auto">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-eductome-marine bg-blue-50 px-2 py-0.5 rounded-full mb-2 inline-block">Exemple</span>
                  <p className="text-xs text-gray-500 italic leading-relaxed mt-1">"{pillar.proof}"</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 80% stat */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm font-medium">
              <span className="text-eductome-magenta font-bold text-2xl">80%</span> des élèves font les mêmes erreurs au BAC. Nos manuels te montrent lesquelles — et comment les éviter.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
