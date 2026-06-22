import { useState } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { BookOpen, AlertTriangle, Lightbulb, CheckSquare, Users, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PhoneMockup } from '../ui/PhoneMockup';
import { AnimatedCounter } from '../ui/AnimatedCounter';

const tabs = [
  {
    id: 'dialogue',
    label: '💬 Dialogue',
    icon: <BookOpen className="w-4 h-4" />,
    color: 'text-eductome-magenta',
    activeBg: 'bg-pink-50',
    content: (
      <div className="space-y-3">
        <div className="bg-[#1A3557] rounded-t-2xl rounded-br-2xl p-3 max-w-[85%]">
          <p className="text-[10px] font-bold text-eductome-sky mb-1">Petit Frère 🤔</p>
          <p className="text-white text-[11px] leading-relaxed">
            Vieux père, pourquoi on s'embête avec les limites si on peut juste remplacer x directement ? C'est pas plus simple ?
          </p>
        </div>
        <div className="bg-[#D81B60] rounded-t-2xl rounded-bl-2xl p-3 max-w-[85%] ml-auto">
          <p className="text-[10px] font-bold text-pink-200 mb-1">Grand Frère 💡</p>
          <p className="text-white text-[11px] leading-relaxed">
            Bonne question — et c'est exactement ce que tout le monde croit ! Voici pourquoi la substitution directe ne marche pas toujours...
          </p>
        </div>
        <div className="bg-[#0F2A1A] border border-green-800/30 rounded-xl p-3 mt-2">
          <p className="text-[10px] font-bold text-green-400 mb-1">💡 Conseil du Grand Frère</p>
          <p className="text-green-200 text-[10px] leading-relaxed">
            Retiens bien : la limite regarde le COMPORTEMENT autour du point, pas la valeur au point !
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'piege',
    label: '⚠️ Piège',
    icon: <AlertTriangle className="w-4 h-4" />,
    color: 'text-eductome-orange',
    activeBg: 'bg-orange-50',
    content: (
      <div className="space-y-3">
        <div className="bg-[#2A0F0F] border border-red-800/30 rounded-xl p-3">
          <p className="text-[10px] font-bold text-red-400 mb-2">⚠️ Piège à éviter</p>
          <p className="text-red-200 text-[11px] leading-relaxed mb-2">
            Ne jamais écrire <span className="font-mono bg-red-900/40 px-1 rounded">lim f(a) = f(a)</span> sans vérifier que f est définie en a !
          </p>
          <p className="text-red-300/70 text-[10px] italic">
            80% des élèves font cette erreur au BAC.
          </p>
        </div>
        <div className="bg-[#0F2A1A] border border-green-800/30 rounded-xl p-3">
          <p className="text-[10px] font-bold text-green-400 mb-1">✅ Le bon réflexe</p>
          <p className="text-green-200 text-[10px] leading-relaxed">
            Toujours vérifier d'abord si la substitution directe donne une forme indéterminée (0/0, ∞/∞...).
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'analogie',
    label: '💡 Analogie',
    icon: <Lightbulb className="w-4 h-4" />,
    color: 'text-eductome-sky',
    activeBg: 'bg-blue-50',
    content: (
      <div className="space-y-3">
        <div className="bg-[#0A1628] border border-blue-800/30 rounded-xl p-3">
          <p className="text-[10px] font-bold text-blue-400 mb-2">🚌 L'analogie du Gbaka</p>
          <p className="text-blue-100 text-[11px] leading-relaxed mb-2">
            Imagine un gbaka d'Adjamé qui se rapproche du carrefour de Williamsville. Plus il se rapproche, plus tu vois le carrefour — même si le gbaka ne s'arrête jamais exactement au carrefour.
          </p>
          <p className="text-blue-100 text-[11px] leading-relaxed mb-2">
            C'est pareil en maths : la limite, c'est vers quoi tu TENDS, même si tu n'y arrives jamais.
          </p>
          <div className="bg-blue-900/30 rounded-lg p-2 mt-2">
            <p className="text-[10px] text-blue-300 font-medium">
              📌 Concept : lim(x→a) f(x) = L signifie que f(x) se rapproche de L quand x se rapproche de a.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'correction',
    label: '✅ Correction',
    icon: <CheckSquare className="w-4 h-4" />,
    color: 'text-eductome-green',
    activeBg: 'bg-green-50',
    content: (
      <div className="space-y-2">
        <div className="bg-[#0D1117] border border-gray-700/50 rounded-xl p-3">
          <p className="text-[10px] font-bold text-white mb-2">📝 Exercice : Calculer lim(x→2) (x²-4)/(x-2)</p>
          <div className="space-y-2 mt-2">
            <div className="flex items-start gap-2">
              <span className="text-[10px] bg-eductome-magenta text-white w-5 h-5 rounded-full flex items-center justify-center shrink-0 font-bold">1</span>
              <p className="text-gray-300 text-[10px]">On substitue x=2 : on obtient 0/0 → forme indéterminée</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[10px] bg-eductome-magenta text-white w-5 h-5 rounded-full flex items-center justify-center shrink-0 font-bold">2</span>
              <p className="text-gray-300 text-[10px]">On factorise : (x²-4) = (x-2)(x+2)</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[10px] bg-eductome-magenta text-white w-5 h-5 rounded-full flex items-center justify-center shrink-0 font-bold">3</span>
              <p className="text-gray-300 text-[10px]">On simplifie : (x-2)(x+2)/(x-2) = x+2</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[10px] bg-eductome-green text-white w-5 h-5 rounded-full flex items-center justify-center shrink-0 font-bold">✓</span>
              <p className="text-green-400 text-[10px] font-bold">lim(x→2) (x+2) = 4</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export function PreviewSection() {
  const [activeTab, setActiveTab] = useState('dialogue');

  return (
    <section className="py-16 md:py-28 bg-white px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 bg-pink-50 text-eductome-magenta font-bold tracking-wider uppercase text-xs px-4 py-2 rounded-full mb-4">
              <BookOpen className="w-3.5 h-3.5" /> Un coup d'œil à l'intérieur
            </span>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-eductome-marine mb-5 leading-tight">
              Pas un manuel comme les autres.
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl mx-auto">
              Chaque tome EDUCTOME est conçu pour <strong className="text-eductome-marine font-semibold">comprendre</strong>, pas pour mémoriser.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Preview — Tabs + Phone Mockup */}
        <ScrollReveal delay={0.15}>
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-14">
            {/* Tabs — Left side on desktop */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="flex flex-wrap gap-2 mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                      activeTab === tab.id
                        ? `${tab.activeBg} ${tab.color} shadow-sm`
                        : 'text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                    {activeTab === tab.id && (
                      <div className={`absolute bottom-0 left-2 right-2 h-0.5 ${
                        tab.color === 'text-eductome-magenta' ? 'bg-eductome-magenta' :
                        tab.color === 'text-eductome-orange' ? 'bg-eductome-orange' :
                        tab.color === 'text-eductome-sky' ? 'bg-eductome-sky' :
                        'bg-eductome-green'
                      } tab-active-underline rounded-full`} />
                    )}
                  </button>
                ))}
              </div>

              {/* Description cards for each tab */}
              <div className="space-y-4">
                {tabs.map((tab) => (
                  activeTab === tab.id && (
                    <div key={tab.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                      <h3 className={`font-bold text-lg mb-2 ${tab.color}`}>
                        {tab.id === 'dialogue' && "Explications en dialogue"}
                        {tab.id === 'piege' && "Les pièges à éviter"}
                        {tab.id === 'analogie' && "Analogies du quotidien ivoirien"}
                        {tab.id === 'correction' && "Correction étape par étape"}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {tab.id === 'dialogue' && "Le Grand Frère t'explique comme si tu étais à côté de lui. Pas de monologue académique — une vraie conversation."}
                        {tab.id === 'piege' && "On t'indique exactement les erreurs que 80% des élèves font au BAC — pour que tu ne sois pas dans les 80%."}
                        {tab.id === 'analogie' && "Chaque notion abstraite est comparée à quelque chose que tu vis tous les jours en Côte d'Ivoire."}
                        {tab.id === 'correction' && "Pas juste la réponse finale. Le raisonnement complet — pour comprendre, pas seulement recopier."}
                      </p>
                    </div>
                  )
                ))}
              </div>
            </div>

            {/* Phone Mockup — Right side on desktop */}
            <div className="order-1 lg:order-2 shrink-0">
              <PhoneMockup>
                {/* Header inside phone */}
                <div className="bg-gradient-to-r from-eductome-magenta to-[#f02b74] rounded-xl p-3 mb-3">
                  <p className="text-white text-[10px] font-bold">📘 T1 — Limites et Continuité</p>
                  <p className="text-pink-200 text-[9px]">Section 1 · Notion de limite</p>
                </div>

                {/* Active tab content */}
                {tabs.find(t => t.id === activeTab)?.content}
              </PhoneMockup>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats bar */}
        <ScrollReveal delay={0.3}>
          <div className="bg-eductome-marine rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-8">
              <AnimatedCounter
                end={3200}
                prefix="+"
                label="élèves utilisent EDUCTOME"
                icon={<Users className="w-5 h-5 text-eductome-magenta" />}
              />
              <AnimatedCounter
                end={49}
                suffix="/5"
                label="satisfaction moyenne"
                icon={<Star className="w-5 h-5 text-yellow-500" />}
                duration={800}
              />
              <AnimatedCounter
                end={11}
                suffix=" tomes"
                label="couvrant le programme complet"
                icon={<TrendingUp className="w-5 h-5 text-eductome-green" />}
                duration={800}
              />
            </div>

            <Link
              to="/ressources?tab=exercices"
              className="shrink-0 bg-eductome-magenta hover:bg-pink-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-pink-900/30 text-sm whitespace-nowrap"
            >
              Essayer gratuitement →
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
