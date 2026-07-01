import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Star, BookOpen, ChevronDown } from 'lucide-react';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { MATHS_TOME_IDS } from '../../data/skus';

const subtitles = [
  'Comprends enfin tes cours.',
  'Réussis tes devoirs surveillés.',
  'Décroche ton BAC avec confiance.',
];

export function Hero() {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const text = subtitles[currentSubtitle];
    let charIndex = 0;

    if (isTyping) {
      const typingInterval = setInterval(() => {
        setDisplayText(text.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex >= text.length) {
          clearInterval(typingInterval);
          // Pause then erase
          setTimeout(() => setIsTyping(false), 2000);
        }
      }, 40);
      return () => clearInterval(typingInterval);
    } else {
      // Erase
      let eraseIndex = displayText.length;
      const erasingInterval = setInterval(() => {
        setDisplayText((prev) => prev.slice(0, eraseIndex - 1));
        eraseIndex--;
        if (eraseIndex <= 0) {
          clearInterval(erasingInterval);
          setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
          setIsTyping(true);
        }
      }, 25);
      return () => clearInterval(erasingInterval);
    }
  }, [currentSubtitle, isTyping]);

  // Stagger animation for title words
  const titleWords = "Le premier manuel qui t'explique".split(' ');

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-end pt-16 pb-6 md:pb-12 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#1A3557] to-[#0a1628] animate-gradient-shift z-0" />

      {/* Math formulas floating — parallax feel */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <span className="absolute top-[12%] left-[8%] text-white/[0.06] font-serif italic text-2xl animate-float select-none">lim f(x)</span>
        <span className="absolute top-[45%] left-[3%] text-white/[0.05] font-serif italic text-xl animate-float-reverse select-none">f'(x)</span>
        <span className="absolute bottom-[25%] left-[18%] text-white/[0.04] font-serif italic text-3xl animate-float select-none">Σuₙ</span>
        <span className="absolute top-[20%] right-[12%] text-white/[0.06] text-5xl animate-float-reverse select-none">∫</span>
        <span className="absolute top-[55%] right-[8%] text-white/[0.05] text-4xl animate-float select-none">π</span>
        <span className="absolute bottom-[35%] right-[22%] text-white/[0.04] font-sans font-bold text-lg animate-float-reverse select-none">pH = -log[H⁺]</span>
        <span className="absolute top-[8%] left-[45%] text-white/[0.05] text-xl animate-float select-none">E = mc²</span>
        <span className="absolute top-[70%] left-[40%] text-white/[0.03] text-2xl animate-float-reverse select-none">Δ = b² - 4ac</span>
      </div>

      {/* Hero Image */}
      <div className="absolute inset-0 w-full h-full z-[2] overflow-hidden">
        <img
          src="/images/hero_ivorian_student_hd.png"
          alt="Élève ivoirien confiant qui révise avec succès avec un manuel EDUCTOME"
          className="w-full h-full object-cover object-top opacity-70"
          loading="eager"
        />
        {/* Stronger gradient for text contrast */}
        <div className="absolute inset-x-0 bottom-0 h-[70%] lg:h-[75%] bg-gradient-to-t from-[#0a1628] via-[#0a1628]/85 to-transparent z-[3]" />
      </div>

      {/* Content */}
      <div className="relative z-30 w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center mt-auto">
        {/* Badge */}
        <span
          className="animate-stagger-in inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white/90 font-bold tracking-widest uppercase text-[11px] md:text-xs px-4 py-2 rounded-full mb-4 md:mb-6 border border-white/15 shadow-lg"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="w-2 h-2 rounded-full bg-eductome-magenta animate-pulse" />
          BEPC & BAC Ivoirien
        </span>

        {/* Title with stagger animation */}
        <h1 className="font-poppins text-[1.7rem] md:text-4xl lg:text-[3.5rem] font-extrabold leading-[1.15] text-white mb-2 md:mb-3">
          {titleWords.map((word, i) => (
            <span
              key={i}
              className="inline-block animate-stagger-in mr-[0.3em]"
              style={{ animationDelay: `${0.3 + i * 0.08}s` }}
            >
              {word}
            </span>
          ))}
          <br className="block md:hidden xl:block" />
          <span
            className="animate-stagger-in text-eductome-magenta font-playfair italic font-normal inline-block whitespace-nowrap"
            style={{ animationDelay: `${0.3 + titleWords.length * 0.08}s` }}
          >
            comme un grand frère.
          </span>
        </h1>

        {/* Typewriter subtitle */}
        <div className="mb-5 md:mb-8 h-10 md:h-12 flex items-center justify-center">
          <p className="text-base md:text-xl lg:text-2xl text-white/90 font-medium drop-shadow-md">
            <span>{displayText}</span>
            <span className="typewriter-cursor" />
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8 w-full sm:w-auto animate-stagger-in"
          style={{ animationDelay: '1s' }}
        >
          <Link
            to="/register"
            className="inline-flex items-center justify-center font-bold px-6 py-3.5 md:px-8 md:py-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 bg-gradient-to-r from-eductome-magenta to-[#f02b74] text-white shadow-lg animate-cta-glow text-sm md:text-base"
          >
            Commencer gratuitement →
          </Link>
          <Link
            to="/ressources"
            className="inline-flex items-center justify-center font-bold px-6 py-3.5 md:px-8 md:py-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 shadow-lg text-sm md:text-base"
          >
            Voir un extrait gratuit
          </Link>
        </div>

        {/* Animated Social Proof Bar */}
        <div
          className="animate-stagger-in flex flex-wrap items-center justify-center gap-5 md:gap-8 mb-4"
          style={{ animationDelay: '1.2s' }}
        >
          <AnimatedCounter
            end={3200}
            prefix="+"
            label="élèves ivoiriens"
            icon={<Users className="w-5 h-5 text-eductome-magenta" />}
          />
          <div className="w-px h-8 bg-white/20 hidden sm:block" />
          <AnimatedCounter
            end={49}
            suffix="/5 ★"
            label="satisfaction"
            icon={<Star className="w-5 h-5 text-yellow-400" />}
            duration={800}
          />
          <div className="w-px h-8 bg-white/20 hidden sm:block" />
          <AnimatedCounter
            end={MATHS_TOME_IDS.length}
            suffix=" tomes"
            label="programme complet"
            icon={<BookOpen className="w-5 h-5 text-eductome-sky" />}
            duration={800}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-2 md:bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1 cursor-pointer group"
        onClick={() => document.getElementById('diagnostic')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-white/40 text-[10px] md:text-xs font-medium tracking-wider uppercase group-hover:text-white/70 transition-colors">
          Découvre la méthode
        </span>
        <ChevronDown className="w-5 h-5 text-white/40 animate-bounce group-hover:text-white/70 transition-colors" />
      </div>
    </section>
  );
}
