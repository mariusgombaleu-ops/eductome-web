import { ScrollReveal } from '../ui/ScrollReveal';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export function BeforeAfterSection() {
  const points = [
    { 
      before: "Cours illisibles, bourrés de jargon complexe", 
      after: "Explications simples, claires — comme un Grand Frère" 
    },
    { 
      before: "Aucune méthode pour aborder les exercices", 
      after: "Une stratégie étape par étape pour chaque type d'exo" 
    },
    { 
      before: "Apprentissage par cœur sans comprendre", 
      after: "Tu comprends le 'pourquoi' avant d'apprendre la formule" 
    },
    { 
      before: "Panique et stress devant la feuille d'examen", 
      after: "Confiance totale — les pièges à éviter sont identifiés" 
    }
  ];

  return (
    <section className="py-16 md:py-28 bg-white px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-green-50 text-eductome-green font-bold tracking-wider uppercase text-xs px-4 py-2 rounded-full mb-4">
              ✨ La Transformation
            </span>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-eductome-marine mb-4">
              Ce qui va changer pour toi
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-light max-w-xl mx-auto">
              La même matière, la même intelligence — juste la bonne méthode.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            
            {/* Flèche de transition centrale (desktop) */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white rounded-full shadow-lg border-2 border-gray-200 items-center justify-center">
              <ArrowRight className="w-6 h-6 text-eductome-green" />
            </div>

            {/* AVANT */}
            <div className="bg-gradient-to-br from-red-50 to-red-100/60 p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-200 relative">
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'repeating-linear-gradient(45deg, #dc2626 0, #dc2626 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px'}} />
              
              <div className="relative">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-900">Avant EDUCTOME</h3>
                </div>
                <ul className="space-y-5">
                  {points.map((p, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <div className="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-red-200 transition-colors">
                        <XCircle className="w-4 h-4 text-red-400" />
                      </div>
                      <span className="text-gray-600 leading-relaxed text-sm md:text-base">{p.before}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Flèche mobile */}
            <div className="flex md:hidden items-center justify-center py-3 bg-white border-y border-gray-200">
              <div className="w-10 h-10 bg-eductome-green/10 rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-eductome-green rotate-90" />
              </div>
            </div>

            {/* AVEC EDUCTOME */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 md:p-12 relative">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-eductome-green/5 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-eductome-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-eductome-green">Avec EDUCTOME</h3>
                </div>
                <ul className="space-y-5">
                  {points.map((p, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-green-200 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-eductome-green" />
                      </div>
                      <span className="text-gray-800 font-medium leading-relaxed text-sm md:text-base">{p.after}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
