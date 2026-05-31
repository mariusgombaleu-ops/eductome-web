import { ScrollReveal } from '../ui/ScrollReveal';
import { CTAButton } from '../ui/CTAButton';

export function FreeResourcesSection() {
  const resources = [
    {
      icon: "📄",
      title: "Fiches Méthode",
      desc: "Une fiche = une méthode pour résoudre un type d'exercice. Tu imprimes, tu gardes, tu appliques."
    },
    {
      icon: "📖",
      title: "Extraits de Tomes",
      desc: "Lis le premier chapitre gratuitement. Si ça t'aide, tu sais où trouver la suite."
    },
    {
      icon: "✏️",
      title: "Exercices Corrigés",
      desc: "Des exercices types avec corrections détaillées, étape par étape."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-eductome-cream px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-eductome-marine mb-4">
              Commence ici — c'est gratuit.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pas besoin d'acheter quoi que ce soit pour commencer. Voici ce qu'on t'offre :
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {resources.map((res, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-white rounded-xl p-8 shadow-sm text-center h-full flex flex-col items-center hover:shadow-md transition-shadow">
                <span className="text-4xl mb-6">{res.icon}</span>
                <h3 className="font-playfair font-bold text-xl text-eductome-marine mb-4">
                  {res.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {res.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="text-center">
          <CTAButton to="/ressources" variant="primary">
            Accéder aux ressources gratuites &rarr;
          </CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
