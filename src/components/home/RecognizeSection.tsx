import { ScrollReveal } from '../ui/ScrollReveal';
import { CloudRain, AlertCircle, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export function RecognizeSection() {
  return (
    <section id="diagnostic" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#f4f7fb] px-4 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-eductome-sky/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-eductome-magenta/5 blur-[100px] rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-pink-50 text-eductome-magenta font-bold tracking-widest uppercase text-xs px-4 py-2 rounded-full mb-4 shadow-sm border border-pink-100">
              <span className="w-2 h-2 rounded-full bg-eductome-magenta animate-pulse" />
              LA VÉRITÉ SUR L'ÉCOLE EN CI
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-eductome-marine mb-6 leading-tight">
              Si tu n'as pas de bonnes notes,<br className="hidden md:block" /> c'est pour l'une de ces 2 raisons :
            </h2>
            <p className="text-gray-600 text-lg md:text-xl font-medium">
              Dans laquelle te reconnais-tu le plus ?
            </p>
          </div>
        </ScrollReveal>

        {/* Two Profile Cards — Glassmorphism upgrade */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          <ScrollReveal delay={0.1}>
            <div className="border-gradient-hover bg-gradient-to-b from-white to-blue-50/30 rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-100 h-full flex flex-col relative group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="absolute top-0 inset-x-0 h-1 bg-eductome-sky transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-3xl" />

              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-eductome-sky group-hover:scale-110 transition-transform duration-300 border border-blue-50">
                  <CloudRain className="w-8 h-8" />
                </div>
                <div>
                  <span className="font-bold text-eductome-sky uppercase tracking-wider text-xs block mb-1">PROFIL N°1</span>
                  <h3 className="text-2xl font-bold text-eductome-marine">Perdu en classe</h3>
                </div>
              </div>

              <div className="mb-8 flex-grow">
                <h4 className="font-bold text-lg mb-4 text-eductome-marine flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-eductome-sky" />
                  Le prof va trop vite (ou explique mal)
                </h4>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  Tu recopies le tableau machinalement. Tu n'oses pas poser de questions de peur qu'on se moque de toi. Résultat : tu rentres à la maison avec un cahier rempli, mais <span className="font-semibold text-eductome-marine">une tête vide</span>.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="border-gradient-hover bg-gradient-to-b from-white to-pink-50/30 rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-pink-100 h-full flex flex-col relative group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="absolute top-0 inset-x-0 h-1 bg-eductome-magenta transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-3xl" />

              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-eductome-magenta group-hover:scale-110 transition-transform duration-300 border border-pink-50">
                  <AlertCircle className="w-8 h-8" />
                </div>
                <div>
                  <span className="font-bold text-eductome-magenta uppercase tracking-wider text-xs block mb-1">PROFIL N°2</span>
                  <h3 className="text-2xl font-bold text-eductome-marine">Bloqué au devoir</h3>
                </div>
              </div>

              <div className="mb-8 flex-grow">
                <h4 className="font-bold text-lg mb-4 text-eductome-marine flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-eductome-magenta" />
                  Tu connais ton cours, mais tu bloques
                </h4>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  Tu as appris tes formules par cœur. Mais devant l'exercice ou le devoir surveillé, c'est le trou noir. Tu ne sais pas par quoi commencer ni <span className="font-semibold text-eductome-marine">quelle formule utiliser</span>.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* CTA — Test de niveau */}
        <ScrollReveal delay={0.25}>
          <div className="flex flex-col items-center justify-center mb-16 relative z-20">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">La solution commence ici</p>
            <Link
              to="/quiz"
              className="bg-eductome-marine hover:bg-[#11233a] text-white font-bold py-4 px-10 rounded-2xl text-lg shadow-[0_10px_40px_rgba(26,53,87,0.3)] hover:shadow-[0_15px_50px_rgba(26,53,87,0.4)] hover:-translate-y-1 transition-all flex items-center group border border-white/10"
            >
              Faire le test de niveau
              <div className="ml-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-eductome-marine transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </ScrollReveal>

        {/* Founder quote — Fused from FounderSection */}
        <ScrollReveal delay={0.3}>
          <div className="bg-eductome-marine rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            {/* Background design */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-eductome-magenta/20 blur-[60px] rounded-full" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-eductome-sky/10 blur-[60px] rounded-full" />

            <Quote className="w-12 h-12 md:w-16 md:h-16 text-white/10 absolute top-6 left-6 md:top-8 md:left-8 rotate-180" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Photo */}
              <div className="shrink-0">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl ring-4 ring-eductome-magenta/30">
                  <img src="/images/profil.jpeg" alt="Marius Gombaleu" className="w-full h-full object-cover object-center" />
                </div>
              </div>

              {/* Quote + bio */}
              <div className="text-center md:text-left flex-1">
                <p className="text-white text-lg md:text-2xl font-playfair italic leading-relaxed mb-6">
                  « J'ai créé EDUCTOME parce que j'ai vécu la même galère au Lycée Classique d'Abidjan. Le problème <span className="text-eductome-magenta font-semibold not-italic">n'est pas ton intelligence</span> — c'est de se construire une méthode. »
                </p>

                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div>
                    <p className="text-white font-bold text-lg">Marius Gombaleu</p>
                    <p className="text-eductome-sky text-sm font-medium">Fondateur d'EDUCTOME · Le "Grand Frère"</p>
                  </div>
                </div>

                <Link
                  to="/a-propos"
                  className="inline-flex items-center gap-2 text-pink-300 hover:text-white font-semibold mt-4 transition-colors text-sm group"
                >
                  Lire toute mon histoire
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
