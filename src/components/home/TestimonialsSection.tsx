import { ScrollReveal } from '../ui/ScrollReveal';
import { testimonialsData } from '../../data/testimonials';

export function TestimonialsSection() {
  return (
    <section className="py-12 md:py-20 bg-eductome-marine px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white text-center mb-16">
            Ils en parlent
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testi, index) => (
            <ScrollReveal key={testi.id} delay={index * 0.1}>
              <div className="glass rounded-xl p-8 h-full flex flex-col relative">
                <span className="absolute top-4 left-4 text-eductome-magenta text-6xl font-serif leading-none opacity-50">
                  ❝
                </span>
                <div className="relative z-10 flex-grow">
                  <div className="text-yellow-400 mb-3 text-lg">⭐⭐⭐⭐⭐</div>
                  <p className="text-white text-lg italic mb-6 font-medium">
                    « {testi.quote.replace('« ', '').replace(' »', '')} »
                  </p>
                </div>
                <div className="relative z-10 mt-auto">
                  <p className="text-gray-300 font-bold">— {testi.author}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
