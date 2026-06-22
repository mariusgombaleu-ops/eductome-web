import { ScrollReveal } from '../ui/ScrollReveal';
import { TestimonialCarousel } from '../ui/TestimonialCarousel';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { Users, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Yann',
    role: 'Élève de Terminale D',
    quote: "Le seul manuel qui m'a fait comprendre la physique. Avant, j'apprenais par cœur sans rien piger. Avec EDUCTOME, j'ai eu 15 au dernier devoir !",
    rating: 5,
    avatar: 'Y',
  },
  {
    name: 'Sarah',
    role: 'Élève de Terminale D',
    quote: "Les analogies m'ont sauvée ! Quand le Grand Frère explique les limites avec le gbaka d'Adjamé, tout devient limpide. Je ne rate plus les formes indéterminées.",
    rating: 5,
    avatar: 'S',
  },
  {
    name: 'Koffi',
    role: 'Élève de 3ème — BEPC',
    quote: "J'ai tout compris avec la méthode étape par étape. Avant je bloquais toujours au milieu de l'exercice, maintenant je sais exactement quoi faire.",
    rating: 5,
    avatar: 'K',
  },
  {
    name: 'Ama',
    role: 'Parent d\'élève — Terminale D',
    quote: "Mon fils est passé de 7 à 14 en maths en deux mois. J'aurais dépensé 10 fois plus en répétiteur pour un résultat pareil. Merci EDUCTOME !",
    rating: 5,
    avatar: 'A',
  },
  {
    name: 'Ibrahim',
    role: 'Élève de Terminale A',
    quote: "La Voie m'a donné la méthode qui me manquait. En philo comme en maths, le principe est le même : comprendre avant de réciter. Ça change tout.",
    rating: 5,
    avatar: 'I',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-eductome-marine px-4 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-eductome-magenta/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-eductome-sky/8 blur-[100px] rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header with stats */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white font-bold tracking-wider uppercase text-xs px-4 py-2 rounded-full mb-4 border border-white/15">
              ⭐ Témoignages
            </span>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6">
              Ils en parlent <span className="text-eductome-magenta">mieux que nous.</span>
            </h2>

            {/* Stats row */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-8">
              <AnimatedCounter
                end={3200}
                prefix="+"
                label="élèves satisfaits"
                icon={<Users className="w-5 h-5 text-eductome-magenta" />}
              />
              <div className="w-px h-10 bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </div>
                <div>
                  <div className="text-white font-extrabold text-xl leading-none">4.9/5</div>
                  <div className="text-blue-200 text-xs mt-1 font-medium">note moyenne</div>
                </div>
              </div>
              <div className="w-px h-10 bg-white/20 hidden sm:block" />
              {/* Rating distribution mini bar */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-white/60 w-6 text-right">5★</span>
                  <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 rounded-full" style={{ width: '87%' }} />
                  </div>
                  <span className="text-[10px] text-white/40">87%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-white/60 w-6 text-right">4★</span>
                  <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 rounded-full" style={{ width: '11%' }} />
                  </div>
                  <span className="text-[10px] text-white/40">11%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-white/60 w-6 text-right">3★</span>
                  <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 rounded-full" style={{ width: '2%' }} />
                  </div>
                  <span className="text-[10px] text-white/40">2%</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <ScrollReveal delay={0.2}>
          <TestimonialCarousel testimonials={testimonials} />
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.3} className="mt-12">
          <div className="text-center">
            <button
              onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(230,57,70,0.4)] active:scale-95 bg-eductome-magenta text-white animate-cta-glow"
            >
              Moi aussi, je veux comprendre →
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
