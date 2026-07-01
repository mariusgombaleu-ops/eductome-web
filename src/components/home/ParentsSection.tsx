import { ScrollReveal } from '../ui/ScrollReveal';
import { HeartHandshake, ArrowRight, Shield, Quote } from 'lucide-react';
import { getActiveCollectionOffer, deadlineLabel } from '../../data/offers';
import { formatFcfa } from '../../utils/format';

export function ParentsSection() {
  const offer = getActiveCollectionOffer();
  return (
    <section className="py-16 md:py-24 bg-white px-4 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'radial-gradient(#1A3557 1px, transparent 1px)', backgroundSize: '30px 30px'}} />

      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-12">
            <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 border border-pink-100">
              <HeartHandshake className="w-8 h-8 text-eductome-magenta" />
            </div>

            <span className="text-eductome-magenta font-bold tracking-widest uppercase text-xs mb-4 block">
              Un mot pour les parents
            </span>

            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-eductome-marine mb-8 leading-tight">
              Vous voulez aider votre enfant <br className="hidden md:block" /> à réussir ?
            </h2>

            <p className="text-lg md:text-xl text-gray-600 font-light mb-10 leading-relaxed max-w-3xl">
              Payer des répétiteurs coûte cher et ne garantit pas toujours des résultats si l'enfant n'a pas la bonne méthode.
              Nos manuels offrent une pédagogie <span className="font-semibold text-eductome-marine">structurée, bienveillante et autonome</span>.
            </p>
          </div>
        </ScrollReveal>

        {/* Price comparison */}
        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            {/* Répétiteur */}
            <div className="bg-red-50/60 rounded-2xl p-6 border border-red-100 text-center">
              <p className="text-sm font-bold text-red-800 uppercase tracking-wider mb-2">Répétiteur classique</p>
              <p className="text-3xl md:text-4xl font-extrabold text-red-600 mb-1">50 000 F<span className="text-base font-medium text-red-400">/mois</span></p>
              <p className="text-xs text-red-500">Soit 450 000+ F CFA par an</p>
              <ul className="mt-4 space-y-2 text-left">
                <li className="flex items-center gap-2 text-sm text-red-700">
                  <span className="text-red-400">✗</span> Pas de garantie de méthode
                </li>
                <li className="flex items-center gap-2 text-sm text-red-700">
                  <span className="text-red-400">✗</span> Dépend de la disponibilité
                </li>
                <li className="flex items-center gap-2 text-sm text-red-700">
                  <span className="text-red-400">✗</span> Pas d'accès hors séance
                </li>
              </ul>
            </div>

            {/* EDUCTOME */}
            <div className="bg-green-50/60 rounded-2xl p-6 border-2 border-eductome-green text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-eductome-green text-white text-[10px] font-bold px-3 py-1 rounded-full">
                Meilleur choix
              </div>
              <p className="text-sm font-bold text-green-800 uppercase tracking-wider mb-2">EDUCTOME</p>
              {offer.active && (
                <p className="text-sm text-green-500 line-through">{formatFcfa(offer.originalPrice)}</p>
              )}
              <p className="text-3xl md:text-4xl font-extrabold text-eductome-green mb-1">{formatFcfa(offer.price)}<span className="text-base font-medium text-green-500"> à vie</span></p>
              <p className="text-xs text-green-600">
                Toute la Collection Maths · accès à vie{offer.active ? ` · tarif fondateur jusqu'au ${deadlineLabel()}` : ''}
              </p>
              <ul className="mt-4 space-y-2 text-left">
                <li className="flex items-center gap-2 text-sm text-green-800">
                  <span className="text-eductome-green font-bold">✓</span> Méthode structurée et prouvée
                </li>
                <li className="flex items-center gap-2 text-sm text-green-800">
                  <span className="text-eductome-green font-bold">✓</span> Disponible 24h/24, partout
                </li>
                <li className="flex items-center gap-2 text-sm text-green-800">
                  <span className="text-eductome-green font-bold">✓</span> Payé une fois, acquis à vie
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Parent testimonial */}
        <ScrollReveal delay={0.25}>
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto mb-10 border border-gray-100 relative">
            <Quote className="absolute -top-3 left-6 w-7 h-7 text-eductome-magenta/30 fill-current" />
            <p className="text-gray-700 italic leading-relaxed text-sm md:text-base mt-2">
              "Mon fils est passé de 7 à 14 en maths en deux mois. J'aurais dépensé 10 fois plus en répétiteur pour un résultat pareil. Merci EDUCTOME !"
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-10 h-10 bg-eductome-magenta/10 rounded-full flex items-center justify-center text-eductome-magenta font-bold">A</div>
              <div>
                <p className="font-bold text-eductome-marine text-sm">Ama</p>
                <p className="text-gray-500 text-xs">Parent — Abidjan</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 bg-eductome-marine text-white shadow-[0_10px_30px_rgba(26,53,87,0.3)] group"
            >
              Offrir EDUCTOME à votre enfant
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <Shield className="w-4 h-4" />
              <span>Essai gratuit · accès à vie · sans abonnement</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
