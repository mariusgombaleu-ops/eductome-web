import { useState } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export function FAQSection() {
  const faqs = [
    {
      question: "Est-ce que les livres sont conformes au programme ivoirien ?",
      answer: "Oui, à 100%. Nos manuels sont spécifiquement conçus pour les élèves de 3ème et Terminale en Côte d'Ivoire. Ils intègrent les derniers ajustements du Ministère de l'Éducation Nationale et reprennent les anciens sujets de BAC et BEPC."
    },
    {
      question: "Comment se passe la livraison à Abidjan et à l'intérieur ?",
      answer: "À Abidjan, la livraison se fait à domicile ou à l'école sous 24h à 48h. Pour l'intérieur du pays, nous expédions via les compagnies de transport (UTB, etc.) avec réception le lendemain."
    },
    {
      question: "Les corrigés détaillés sont-ils inclus ?",
      answer: "Absolument. Contrairement aux annales classiques qui donnent juste la réponse finale, nous détaillons chaque étape du raisonnement. On t'explique le 'pourquoi' de chaque calcul, comme le ferait un grand frère à côté de toi."
    },
    {
      question: "Quels sont les moyens de paiement acceptés ?",
      answer: "Le paiement est 100% sécurisé. Tu peux payer par Mobile Money (Wave, Orange Money, MTN, Moov) directement sur notre plateforme Selar, ou payer à la livraison si tu es à Abidjan."
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
