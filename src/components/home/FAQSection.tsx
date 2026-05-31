import { useState } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export function FAQSection() {
  const faqs = [
    {
      question: "Mon enfant est vraiment faible (6/20), est-ce que ça peut l'aider ?",
      answer: "Oui ! Nos manuels ne sont pas faits pour les génies, ils sont faits pour ceux qui ont des difficultés. On reprend tout depuis les bases, avec des mots simples."
    },
    {
      question: "Combien de temps faut-il pour voir des résultats ?",
      answer: "En général, nos élèves voient un déclic dès les 2 premières semaines d'utilisation régulière, car ils comprennent enfin comment structurer leur réflexion."
    },
    {
      question: "Est-ce que c'est conforme au programme ivoirien ?",
      answer: "Absolument. Nos manuels sont 100% alignés sur le programme du Ministère de l'Éducation Nationale de Côte d'Ivoire."
    },
    {
      question: "Livrez-vous à l'intérieur du pays ?",
      answer: "Oui, nous livrons partout en Côte d'Ivoire. À Abidjan, la livraison se fait à domicile. À l'intérieur, nous expédions via les compagnies de transport."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-20 bg-white px-4 border-t border-gray-100">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-eductome-marine mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-gray-600">
              Tout ce que tu as besoin de savoir avant de te lancer.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div 
                className={`border rounded-xl overflow-hidden transition-colors duration-300 ${openIndex === index ? 'border-eductome-magenta bg-[#fafafa]' : 'border-gray-200 bg-white'}`}
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                >
                  <span className={`font-semibold ${openIndex === index ? 'text-eductome-magenta' : 'text-eductome-marine'}`}>
                    {faq.question}
                  </span>
                  <span className={`text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-45 text-eductome-magenta' : 'text-gray-400'}`}>
                    +
                  </span>
                </button>
                
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-4 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
