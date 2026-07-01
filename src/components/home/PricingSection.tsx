import { Link } from 'react-router-dom';
import { Check, Infinity as InfinityIcon } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { PRICES } from '../../data/skus';
import { formatFcfa } from '../../utils/format';
import { getActiveCollectionOffer } from '../../data/offers';

export function PricingSection() {
  const offer = getActiveCollectionOffer();

  const tiers = [
    {
      name: 'Découverte',
      price: 'Gratuit',
      note: 'pour toujours',
      desc: 'Teste toute la méthode avant de payer.',
      features: [
        'Calcul des moyennes, emploi du temps, orientation',
        'Le Socle + le Module 1 offerts (cours + 1 devoir)',
        'Forum, XP, badges et séries',
      ],
      cta: 'Commencer gratuitement',
      highlight: false,
    },
    {
      name: 'Module',
      price: formatFcfa(PRICES.module),
      note: 'à vie',
      desc: 'Un module à la carte, quand un chapitre te bloque.',
      features: ['Cours complet du module', 'Salle d\'entraînement + composition', 'Flashcards du module'],
      cta: 'Créer un compte',
      highlight: false,
    },
    {
      name: 'Tome',
      price: formatFcfa(PRICES.tome),
      note: 'à vie',
      desc: 'Un tome entier, tous ses modules.',
      features: ['Tous les modules du tome', 'Compositions illimitées', 'Toutes les flashcards du tome'],
      cta: 'Créer un compte',
      highlight: false,
    },
    {
      name: 'Collection Maths',
      price: formatFcfa(offer.price),
      strike: offer.active ? formatFcfa(offer.originalPrice) : undefined,
      note: 'à vie',
      desc: offer.active ? 'Les 12 tomes — tarif fondateur.' : 'Les 12 tomes du programme.',
      features: ['Les 12 tomes de Terminale', 'Tous les outils de valeur', `Tu économises ${formatFcfa(12 * PRICES.tome - offer.price)} vs 12 tomes à l'unité`],
      cta: offer.active ? 'Devenir fondateur' : 'Tout débloquer',
      highlight: true,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-blue-50 text-eductome-marine font-bold tracking-wider uppercase text-xs px-4 py-2 rounded-full mb-4 shadow-sm border border-blue-100">
              Tarifs
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-eductome-marine mb-4">
              Un prix, à vie. Pas d'abonnement.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tu commences gratuitement. Ensuite, tu débloques ce que tu veux — un module, un tome, ou toute la
              collection. Payé une fois, acquis pour toujours.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.08} className="h-full">
              <div
                className={`h-full rounded-2xl p-6 flex flex-col border transition-all duration-300 hover:-translate-y-1 ${
                  tier.highlight
                    ? 'bg-eductome-marine border-eductome-marine text-white shadow-xl'
                    : 'bg-white border-gray-200 hover:shadow-lg'
                }`}
              >
                <div className="mb-4">
                  <p className={`text-sm font-bold uppercase tracking-wider mb-2 ${tier.highlight ? 'text-amber-400' : 'text-eductome-marine'}`}>
                    {tier.name}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-3xl font-black ${tier.highlight ? 'text-white' : 'text-eductome-marine'}`}>
                      {tier.price}
                    </span>
                    {tier.strike && (
                      <span className={`text-sm line-through ${tier.highlight ? 'text-white/50' : 'text-gray-400'}`}>
                        {tier.strike}
                      </span>
                    )}
                  </div>
                  <span className={`inline-flex items-center gap-1 text-xs font-medium mt-1 ${tier.highlight ? 'text-blue-100' : 'text-gray-500'}`}>
                    <InfinityIcon className="w-3.5 h-3.5" /> {tier.note}
                  </span>
                </div>

                <p className={`text-sm mb-4 ${tier.highlight ? 'text-blue-100' : 'text-gray-600'}`}>{tier.desc}</p>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${tier.highlight ? 'text-amber-400' : 'text-eductome-green'}`} />
                      <span className={`text-sm ${tier.highlight ? 'text-white/90' : 'text-gray-700'}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/register"
                  className={`mt-auto w-full text-center font-bold py-3 rounded-xl transition-colors ${
                    tier.highlight
                      ? 'bg-amber-400 hover:bg-amber-300 text-eductome-marine'
                      : 'bg-eductome-marine hover:bg-[#15294a] text-white'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center text-sm text-gray-500 mt-8 max-w-2xl mx-auto">
            À titre de comparaison, un répétiteur coûte 30 000 à 50 000 F par mois. Ici, tu paies une seule fois.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
