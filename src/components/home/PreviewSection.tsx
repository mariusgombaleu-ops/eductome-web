import { ScrollReveal } from '../ui/ScrollReveal';
import { BookOpen, AlertTriangle, Lightbulb, CheckSquare, Users, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <BookOpen className="w-7 h-7 text-white" />,
    iconBg: 'bg-eductome-magenta',
    accentColor: 'border-eductome-magenta',
    badgeColor: 'bg-pink-50 text-eductome-magenta',
    badge: '💬 Dialogue',
    title: "Explications en dialogue",
    desc: "Le Grand Frère t'explique comme si tu étais à côté de lui. Pas de monologue académique — une vraie conversation.",
    example: '"Vieux père, pourquoi on fait ça ?" — "Bonne question, voilà pourquoi..."'
  },
  {
    icon: <AlertTriangle className="w-7 h-7 text-white" />,
    iconBg: 'bg-eductome-orange',
    accentColor: 'border-eductome-orange',
    badgeColor: 'bg-orange-50 text-eductome-orange',
    badge: '⚠️ Pièges',
    title: "Les pièges à éviter",
    desc: "On t'indique exactement les erreurs que 80% des élèves font au BAC — pour que tu ne sois pas dans les 80%.",
    example: "Erreur classique identifiée, expliquée, et désamorcée avant l'examen."
  },
  {
    icon: <Lightbulb className="w-7 h-7 text-white" />,
    iconBg: 'bg-eductome-sky',
    accentColor: 'border-eductome-sky',
    badgeColor: 'bg-blue-50 text-eductome-sky',
    badge: '💡 Analogie',
    title: "Analogies du quotidien",
    desc: "Chaque notion abstraite est comparée à quelque chose que tu vis tous les jours en Côte d'Ivoire.",
    example: "Les limites expliquées avec le trajet en gbaka d'Adjamé..."
  },
  {
    icon: <CheckSquare className="w-7 h-7 text-white" />,
    iconBg: 'bg-eductome-green',
    accentColor: 'border-eductome-green',
    badgeColor: 'bg-green-50 text-eductome-green',
    badge: '✅ Correction',
    title: "Correction étape par étape",
    desc: "Pas juste la réponse finale. Le raisonnement complet — pour comprendre, pas seulement recopier.",
    example: 'Chaque étape numérotée avec le "pourquoi" expliqué.'
  }
];

const stats = [
  { icon: <Users className="w-5 h-5 text-eductome-magenta" />, value: '3 200+', label: 'élèves utilisent EDUCTOME' },
  { icon: <Star className="w-5 h-5 text-yellow-500" />, value: '4.9/5', label: 'satisfaction moyenne' },
  { icon: <TrendingUp className="w-5 h-5 text-eductome-green" />, value: '11 tomes', label: 'couvrant le programme complet' },
];

export function PreviewSection() {
  return (
    <section className="py-16 md:py-28 bg-white px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className={`group relative bg-white rounded-2xl border-2 ${feature.accentColor} border-opacity-20 hover:border-opacity-100 p-6 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden`}>
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${feature.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon */}
                <div className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                {/* Badge */}
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${feature.badgeColor} mb-3 self-start`}>
                  {feature.badge}
                </span>

                {/* Title */}
                <h3 className="font-bold text-eductome-marine text-lg mb-3 leading-snug">
                  {feature.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-4">
                  {feature.desc}
                </p>

                {/* Example quote */}
                <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                  <p className="text-xs text-gray-500 italic leading-relaxed">
                    {feature.example}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats bar + CTA */}
        <ScrollReveal delay={0.4}>
          <div className="bg-eductome-marine rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Stats */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg leading-none">{stat.value}</div>
                    <div className="text-blue-200 text-xs mt-0.5">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
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
