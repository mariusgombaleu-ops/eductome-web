import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string; // emoji or initial letter
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number; // ms
}

export function TestimonialCarousel({ testimonials, autoPlayInterval = 5000 }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [next, autoPlayInterval, isPaused]);

  return (
    <div
      className="relative max-w-3xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Card */}
      <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[280px] flex flex-col justify-center">
        {/* Quote mark */}
        <span className="absolute top-6 left-6 text-eductome-magenta text-7xl font-serif leading-none opacity-20 select-none">
          ❝
        </span>

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Stars */}
          <div className="flex gap-1 mb-5">
            {Array.from({ length: testimonials[current].rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>

          {/* Quote */}
          <p className="text-white text-lg md:text-2xl italic mb-8 font-playfair leading-relaxed max-w-2xl transition-opacity duration-300">
            {testimonials[current].quote}
          </p>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-eductome-magenta to-eductome-sky rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
              {testimonials[current].avatar}
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-lg">{testimonials[current].name}</p>
              <p className="text-eductome-magenta text-sm font-medium">{testimonials[current].role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all border border-white/10"
        aria-label="Témoignage précédent"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all border border-white/10"
        aria-label="Témoignage suivant"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? 'bg-eductome-magenta w-8'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Aller au témoignage ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
