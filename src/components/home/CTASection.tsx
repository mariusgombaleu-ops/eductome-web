import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Rocket, Sparkles, Shield } from 'lucide-react';

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  function getTimeLeft(target: Date) {
    const now = new Date();
    const diff = target.getTime() - now.getTime();

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
      isOver: false,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

export function CTASection() {
  // BAC date: June 12, next occurrence
  const now = new Date();
  const currentYear = now.getFullYear();
  let bacDate = new Date(currentYear, 5, 12); // June 12 (month is 0-indexed)
  if (bacDate.getTime() < now.getTime()) {
    bacDate = new Date(currentYear + 1, 5, 12);
  }

  const { days, hours, minutes, seconds, isOver } = useCountdown(bacDate);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden px-4">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-eductome-magenta via-pink-600 to-orange-500 animate-gradient-shift z-0" />
      <div className="absolute inset-0 opacity-[0.06] z-0" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '24px 24px'}} />

      {/* Decorative floating elements */}
      <div className="absolute top-10 left-10 text-white/15 animate-pulse">
        <Sparkles className="w-10 h-10 md:w-12 md:h-12" />
      </div>
      <div className="absolute bottom-10 right-10 text-white/15 animate-bounce" style={{ animationDuration: '3s' }}>
        <Rocket className="w-12 h-12 md:w-16 md:h-16" />
      </div>
      <div className="absolute top-1/2 left-5 text-white/10 animate-float">
        <span className="text-4xl">📚</span>
      </div>
      <div className="absolute top-1/4 right-1/4 text-white/10 animate-float-reverse">
        <span className="text-3xl">🎯</span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <div className="mb-10">
            <span className="inline-block bg-white/20 backdrop-blur-md text-white font-bold tracking-widest uppercase text-sm px-5 py-2 rounded-full mb-6 border border-white/30 shadow-lg">
              🚀 Objectif Réussite
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-extrabold text-white mb-6 leading-tight drop-shadow-md">
              Le BAC t'attend. <br className="hidden md:block" />
              <span className="text-yellow-300">Chaque jour compte.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium max-w-2xl mx-auto">
              Rejoins les centaines d'élèves ivoiriens qui ont déjà changé leur façon d'apprendre avec la méthode Grand Frère.
            </p>
          </div>
        </ScrollReveal>

        {/* Countdown */}
        {!isOver && (
          <ScrollReveal delay={0.15}>
            <div className="mb-10">
              <p className="text-white/70 text-sm font-bold uppercase tracking-widest mb-4">
                Prochain BAC dans :
              </p>
              <div className="flex items-center justify-center gap-3 md:gap-4">
                <div className="text-center">
                  <div className="countdown-digit">{String(days).padStart(2, '0')}</div>
                  <p className="text-white/60 text-[10px] mt-2 uppercase tracking-wider font-bold">Jours</p>
                </div>
                <span className="text-white/40 text-2xl font-light mb-4">:</span>
                <div className="text-center">
                  <div className="countdown-digit">{String(hours).padStart(2, '0')}</div>
                  <p className="text-white/60 text-[10px] mt-2 uppercase tracking-wider font-bold">Heures</p>
                </div>
                <span className="text-white/40 text-2xl font-light mb-4">:</span>
                <div className="text-center">
                  <div className="countdown-digit">{String(minutes).padStart(2, '0')}</div>
                  <p className="text-white/60 text-[10px] mt-2 uppercase tracking-wider font-bold">Min</p>
                </div>
                <span className="text-white/40 text-2xl font-light mb-4">:</span>
                <div className="text-center">
                  <div className="countdown-digit">{String(seconds).padStart(2, '0')}</div>
                  <p className="text-white/60 text-[10px] mt-2 uppercase tracking-wider font-bold">Sec</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Double CTA */}
        <ScrollReveal delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link
              to="/register"
              className="w-full sm:w-auto inline-flex items-center justify-center font-black px-10 py-5 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 bg-white text-eductome-magenta shadow-[0_15px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >
              Commencer gratuitement →
            </Link>
            <a
              href="https://wa.me/2250799506300?text=Bonjour%20Grand%20Frère,%20je%20souhaite%20commander%20un%20livre."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center font-bold px-8 py-4 text-base rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 bg-transparent text-white border-2 border-white/40 hover:bg-white/10 hover:border-white"
            >
              Commander un livre 📖
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
            <Shield className="w-4 h-4" />
            <span>Satisfait ou remboursé sous 7 jours</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
