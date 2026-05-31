import { useTypewriter } from '../../hooks/useTypewriter';
import { CTAButton } from '../ui/CTAButton';

export function Hero() {
  const { displayText } = useTypewriter(['en classe de 3ème.', 'en Terminale.'], 100, 50, 2000);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-end bg-gradient-to-br from-[#0a1628] to-eductome-marine text-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] font-serif italic text-2xl select-none z-0">
        <span className="absolute top-[15%] left-[10%] animate-float">lim f(x)</span>
        <span className="absolute top-[50%] left-[5%] animate-float">f'(x)</span>
        <span className="absolute bottom-[20%] left-[20%] animate-float-reverse">Σuₙ</span>
        <span className="absolute top-[25%] right-[15%] animate-float-reverse text-4xl">∫</span>
        <span className="absolute top-[60%] right-[10%] animate-float text-3xl">π</span>
        <span className="absolute bottom-[30%] right-[25%] animate-float-reverse font-sans font-bold">pH = -log[H⁺]</span>
        <span className="absolute top-[10%] left-[50%] animate-float text-xl">E = mc²</span>
      </div>

      {/* Full Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {/* Decorative blur behind image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-eductome-magenta/20 blur-[100px] rounded-full"></div>
        
        <img 
          src="/images/hero_student_success.png" 
          alt="Élève ivoirien confiant qui révise avec succès" 
          className="relative z-10 w-full h-full object-cover object-top opacity-90"
        />
        {/* Gradient overlay for text readability at the bottom only */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 lg:h-[40%] bg-gradient-to-t from-[#0a1628] via-[#0a1628]/80 to-transparent z-20"></div>
      </div>

      {/* Text Container at the bottom (Centered & Pushed right to the bottom) */}
      <div className="relative z-30 w-full max-w-4xl mx-auto px-4 pb-12 lg:pb-6 mt-auto">
        <div className="w-full text-center flex flex-col items-center">
          <h1 className="font-poppins text-2xl md:text-3xl lg:text-[2.5rem] font-extrabold leading-[1.2] mb-3 min-h-[70px] md:min-h-[80px]">
            Tu es en classe d'examen...
            <br />
            <span className="text-white font-caveat text-4xl md:text-5xl lg:text-[3.5rem] font-normal tracking-wide text-eductome-magenta mt-1 inline-block">
              {displayText}
              <span className="text-white animate-blink ml-1">|</span>
            </span>
          </h1>

          <div className="animate-fade-in animation-delay-1000 mb-5 max-w-2xl">
            <p className="text-base md:text-lg lg:text-xl font-bold text-white font-playfair italic mb-2">
              "Tu as l'impression de travailler dur sans voir tes notes décoller ?"
            </p>
            <p className="text-sm lg:text-base leading-relaxed text-gray-200 hidden sm:block">
              Il te manque juste la bonne méthode. Débloque ton potentiel avec des manuels et exercices conçus pour te faire enfin tout comprendre et réussir ton examen.
            </p>
          </div>

          <button 
            onClick={() => document.getElementById('notre-methode')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 text-center bg-gradient-to-r from-eductome-magenta to-[#f02b74] text-white animate-pulse-glow shadow-lg mb-4 w-full sm:w-auto"
          >
            Découvrir la méthode &rarr;
          </button>

          <div className="flex items-center gap-3 animate-fade-in animation-delay-1000">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-[#0a1628] bg-eductome-sky flex items-center justify-center text-[10px] lg:text-xs text-white shadow-lg">👨‍🎓</div>
              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-[#0a1628] bg-eductome-magenta flex items-center justify-center text-[10px] lg:text-xs text-white shadow-lg">👩‍🎓</div>
              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-[#0a1628] bg-eductome-green flex items-center justify-center text-[10px] lg:text-xs text-white shadow-lg">👨‍🎓</div>
            </div>
            <span className="text-[10px] lg:text-xs text-gray-300 font-medium">Rejoint par <strong className="text-white">+2000 élèves</strong></span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs lg:text-sm animate-bounce cursor-pointer hover:text-white transition-colors z-40" onClick={() => document.getElementById('se-reconnaitre')?.scrollIntoView({ behavior: 'smooth' })}>
        &darr; Scroll
      </div>
    </section>
  );
}
