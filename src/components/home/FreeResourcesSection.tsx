import { ScrollReveal } from '../ui/ScrollReveal';
import { Link } from 'react-router-dom';
import { PenTool, BookOpen, BookMarked, Target, ArrowRight } from 'lucide-react';

export function FreeResourcesSection() {
  const resources = [
    {
      icon: <PenTool className="w-7 h-7" />,
      iconBg: 'bg-eductome-marine',
      accentColor: 'border-eductome-marine',
      btnBg: 'bg-eductome-marine hover:bg-[#15294a]',
      badge: '33 exercices',
      badgeColor: 'bg-blue-50 text-eductome-marine',
      title: "Exos Corrigés",
      desc: "Le raisonnement détaillé étape par étape, comme si le Grand Frère était à côté de toi.",
      btnText: "Faire les exercices",
      link: "/ressources?tab=exercices"
    },
    {
      icon: <BookOpen className="w-7 h-7" />,
      iconBg: 'bg-eductome-magenta',
      accentColor: 'border-eductome-magenta',
      btnBg: 'bg-eductome-magenta hover:bg-pink-700',
      badge: '5 fiches',
      badgeColor: 'bg-pink-50 text-eductome-magenta',
      title: "Fiches Méthode",
      desc: "Une fiche = une méthode prête à imprimer. Tu imprimes, tu gardes, tu appliques.",
      btnText: "Voir les fiches",
      link: "/ressources?tab=fiches"
    },
    {
      icon: <BookMarked className="w-7 h-7" />,
      iconBg: 'bg-teal-600',
      accentColor: 'border-teal-600',
      btnBg: 'bg-teal-600 hover:bg-teal-700',
      badge: 'Imprimable',
      badgeColor: 'bg-teal-50 text-teal-700',
      title: "Le Planning",
      desc: "Un calendrier de révision annuel modulable avec les rappels méthode aux bons moments.",
      btnText: "Voir le planning",
      link: "/ressources?tab=planning"
    },
    {
      icon: <Target className="w-7 h-7" />,
      iconBg: 'bg-orange-500',
      accentColor: 'border-orange-500',
      btnBg: 'bg-orange-500 hover:bg-orange-600',
      badge: '10 questions',
      badgeColor: 'bg-orange-50 text-orange-600',
      title: "10 Pièges du BAC",
      desc: "Les questions pièges qui tombent presque à chaque fois et comment les déjouer.",
      btnText: "Découvrir les pièges",
      link: "/ressources?tab=questions"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-eductome-cream px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-white text-eductome-marine font-bold tracking-wider uppercase text-xs px-4 py-2 rounded-full mb-4 shadow-sm">
              🎁 100% Gratuit
            </span>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-eductome-marine mb-6">
              Commence par ici. C'est gratuit.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Pas encore prêt à acheter un manuel ? Teste notre méthode avec ces ressources offertes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((res, index) => (
            <ScrollReveal key={index} delay={index * 0.1} className="h-full">
              <div className={`bg-white rounded-2xl p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border-2 ${res.accentColor} border-opacity-15 hover:border-opacity-100 relative group overflow-hidden`}>
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${res.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon + Badge row */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-14 h-14 ${res.iconBg} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {res.icon}
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${res.badgeColor}`}>
                    {res.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl text-eductome-marine mb-3">
                  {res.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-6">
                  {res.desc}
                </p>

                {/* CTA */}
                <Link 
                  to={res.link} 
                  className={`mt-auto w-full py-3 px-4 ${res.btnBg} text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-md`}
                >
                  {res.btnText} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
