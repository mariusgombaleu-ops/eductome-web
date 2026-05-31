import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-end pt-16 pb-6 md:pb-12 bg-[#0a1628] text-white overflow-hidden">
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
        <img 
          src="/images/hero_ivorian_student_hd.png" 
          alt="Élève ivoirien confiant qui révise avec succès avec un manuel EDUCTOME" 
          className="relative z-10 w-full h-full object-cover object-top opacity-80"
        />
        {/* Gradient overlay for text readability (taller to cover bottom text) */}
        <div className="absolute inset-x-0 bottom-0 h-[65%] lg:h-[70%] bg-gradient-to-t from-[#0a1628] via-[#0a1628]/80 to-transparent z-20"></div>
      </div>

      {/* All Text Container (Bottom Aligned) */}
      <div className="relative z-30 w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center mt-auto">
        <span className="text-eductome-magenta font-bold tracking-wider uppercase text-xs md:text-sm mb-2 md:mb-4 drop-shadow-md">
          BEPC & BAC Ivoirien
        </span>
        <h1 className="font-poppins text-2xl md:text-4xl lg:text-[3.5rem] font-extrabold leading-[1.2] drop-shadow-xl text-white mb-3 md:mb-6">
          Le premier manuel qui t'explique les cours <br className="block md:hidden xl:block" />
          <span className="text-eductome-magenta font-playfair italic font-normal inline-block whitespace-nowrap">
            comme un grand frère.
          </span>
        </h1>

        <div className="animate-fade-in animation-delay-1000 mb-4 md:mb-8 max-w-2xl px-2">
          <p className="text-sm md:text-xl lg:text-2xl text-white font-medium leading-relaxed drop-shadow-md">
            Comprends enfin tes cours, réussis tes devoirs et décroche ton examen.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8 w-full sm:w-auto">
          <button 
            onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center font-bold px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 bg-gradient-to-r from-eductome-magenta to-[#f02b74] text-white shadow-lg shadow-eductome-magenta/30 text-sm md:text-base"
          >
            Commencer maintenant &rarr;
          </button>
          <Link 
            to="/ressources"
            className="inline-flex items-center justify-center font-bold px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 shadow-lg text-sm md:text-base"
          >
            Voir un extrait gratuit
          </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-3 animate-fade-in animation-delay-1000 mb-4">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-[#0a1628] bg-eductome-sky flex items-center justify-center text-[10px] md:text-xs text-white shadow-lg">👨‍🎓</div>
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-[#0a1628] bg-eductome-magenta flex items-center justify-center text-[10px] md:text-xs text-white shadow-lg">👩‍🎓</div>
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-[#0a1628] bg-eductome-green flex items-center justify-center text-[10px] md:text-xs text-white shadow-lg">👨‍🎓</div>
          </div>
          <span className="text-[10px] md:text-sm text-gray-300 font-medium drop-shadow-md">Déjà adopté par <strong className="text-white">+2000 élèves ivoiriens</strong></span>
        </div>
      </div>

      <div className="absolute bottom-2 md:bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-[10px] md:text-sm animate-bounce cursor-pointer hover:text-white transition-colors z-40" onClick={() => document.getElementById('diagnostic')?.scrollIntoView({ behavior: 'smooth' })}>
        &darr; Scroll
      </div>
    </section>
  );
}
