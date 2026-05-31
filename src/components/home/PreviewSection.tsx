import { ScrollReveal } from '../ui/ScrollReveal';
import { BookOpen, AlertTriangle, Lightbulb, CheckSquare } from 'lucide-react';

export function PreviewSection() {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-eductome-magenta" />,
      title: "Explications sous forme de dialogue",
      desc: "Comme si un prof particulier t'expliquait le cours, étape par étape."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-eductome-orange" />,
      title: "Piège Mortel",
      desc: "On t'indique les erreurs classiques que 80% des élèves font au BAC."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-eductome-sky" />,
      title: "Analogie / Astuce",
      desc: "Une astuce mnémotechnique pour ne jamais oublier la formule."
    },
    {
      icon: <CheckSquare className="w-6 h-6 text-eductome-green" />,
      title: "Correction Ultra-Détaillée",
      desc: "On ne te donne pas juste la réponse finale, on t'explique le raisonnement."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-eductome-magenta font-bold tracking-wider uppercase text-sm mb-2 block">Un coup d'œil</span>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-eductome-marine mb-6">
              Ce que tu trouveras à l'intérieur
            </h2>
            <p className="text-gray-600 text-lg md:text-xl font-light">
              Plonge dans nos manuels et découvre la différence.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-[#f4f7fb] p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow h-full">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-eductome-marine text-lg mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
