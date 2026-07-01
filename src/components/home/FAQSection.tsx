import { useState } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { MessageCircle } from 'lucide-react';

export function FAQSection() {
  const faqs = [
    {
      question: "C'est un abonnement ? Je dois payer tous les mois ?",
      answer: "Non. Chez EDUCTOME, tu paies une seule fois et l'accès est à vie. Tu peux commencer gratuitement, puis débloquer ce que tu veux : un module dès 500 F, un tome à 2 000 F, ou toute la Collection Maths. Une fois payé, c'est acquis pour toujours — aucun prélèvement, aucune date d'expiration."
    },
    {
      question: "Comment je paie et je débloque un cours dans l'app ?",
      answer: "Le paiement se fait par Mobile Money (Orange Money, MTN, Wave). Tu choisis ton module, ton tome ou la collection, tu paies, et le contenu se débloque automatiquement dans ton compte — en général en quelques instants. Pas besoin de carte bancaire."
    },
    {
      question: "J'ai payé mais mon cours n'est pas encore débloqué, que faire ?",
      answer: "Pas d'inquiétude, ton achat n'est jamais perdu. Va dans « Réclamer un achat » depuis ton compte et saisis la référence reçue au paiement : le déblocage se fait aussitôt. Si ça bloque, écris-nous sur WhatsApp avec ta référence, on règle ça tout de suite."
    },
    {
      question: "Un même compte peut-il servir à plusieurs élèves ?",
      answer: "Un compte = un élève. C'est ce qui permet à l'app de suivre TA progression, TES faiblesses et TES révisions personnalisées. Le partage de compte est limité. Si vous êtes plusieurs à la maison, chaque enfant crée son compte gratuit — et un livre physique acheté débloque le tome sur le compte de l'élève à qui il est destiné."
    },
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
      question: "Application, PDF ou livre physique ?",
      answer: "L'application est ta base : tout s'y débloque à vie (module, tome ou collection). Le livre physique est livré chez toi et vient avec un code qui débloque le tome dans l'app — idéal comme cadeau des parents. Les fiches PDF (Les Derniers Codes) sont téléchargeables tout de suite après paiement Mobile Money, pour réviser vite. Tu peux commencer par n'importe quel format."
    },
    {
      question: "Pour quelle série exactement ?",
      answer: "Les Clés Maths est pensé pour les séries C et D (Terminale). Les Clés Sciences est conçu pour la Terminale D (Physique-Chimie). Les Derniers Codes couvre Terminale et 3ᵉ. La Voie et La Racine s'adressent à toutes les séries. Pour les élèves de 3ᵉ, la collection dédiée est 3e Facile."
    },
    {
      question: "Combien de temps pour recevoir les livres physiques ?",
      answer: "À Abidjan, comptez 24h à 72h après confirmation de paiement. Pour l'intérieur (San-Pédro, Bouaké, Korhogo, Daloa, etc.), la livraison se fait via une compagnie de transport, généralement sous 3 à 5 jours. On t'envoie le numéro de suivi par WhatsApp."
    },
    {
      question: "Et si je suis bloqué sur un exercice après avoir lu le cours ?",
      answer: "Tu peux nous écrire directement sur WhatsApp. On t'oriente vers la bonne fiche, ou un grand frère du réseau EDUCTOME peut t'expliquer la notion. Tu n'es jamais seul devant ton manuel."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-[#fafafa] px-4">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-blue-50 text-eductome-marine font-bold tracking-wider uppercase text-xs px-4 py-2 rounded-full mb-4 shadow-sm border border-blue-100">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-eductome-marine mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-gray-600">
              Tout ce que tu as besoin de savoir avant de te lancer.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? 'border-eductome-magenta shadow-lg shadow-pink-500/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center gap-3 text-left focus:outline-none group"
                >
                  <span className={`font-semibold flex-1 transition-colors ${
                    openIndex === index ? 'text-eductome-magenta' : 'text-eductome-marine group-hover:text-eductome-sky'
                  }`}>
                    {faq.question}
                  </span>
                  <span className={`text-2xl transition-all duration-300 shrink-0 ${
                    openIndex === index ? 'rotate-45 text-eductome-magenta' : 'text-gray-400'
                  }`}>
                    +
                  </span>
                </button>

                <div
                  className={`px-6 transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-[500px] pb-5 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <div className="pl-9">
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-10">
            <a
              href="https://wa.me/2250799506300?text=Bonjour%20Grand%20Frère,%20j'ai%20une%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-eductome-marine hover:text-eductome-magenta font-semibold transition-colors group text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Tu as une autre question ? Écris-nous sur WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
