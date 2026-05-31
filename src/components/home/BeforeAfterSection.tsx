import { ScrollReveal } from '../ui/ScrollReveal';
import { XCircle, CheckCircle2 } from 'lucide-react';

export function BeforeAfterSection() {
  const points = [
    { before: "Cours illisibles, bourrés de jargon complexe", after: "Explications simples, claires, 'comme un grand frère'" },
    { before: "Aucune méthode pour aborder les exercices", after: "Une stratégie étape par étape pour chaque type d'exo" },
    { before: "Apprentissage par cœur sans comprendre", after: "Tu comprends le 'pourquoi' avant d'apprendre la formule" },
    { before: "Panique et stress devant la feuille d'examen", after: "Confiance totale grâce aux 'pièges mortels' évités" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-eductome-marine mb-6">
              Ce qui va changer pour toi
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
          {/* Avant */}
          <div className="bg-red-50/50 p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-200">
            <h3 className="text-2xl font-bold text-red-900 mb-8 text-center">Avant EDUCTOME</h3>
            <ul className="space-y-6">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{p.before}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Après */}
          <div className="bg-green-50/50 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-eductome-green mb-8 text-center">Avec EDUCTOME</h3>
            <ul className="space-y-6">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-eductome-green shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium leading-relaxed">{p.after}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
