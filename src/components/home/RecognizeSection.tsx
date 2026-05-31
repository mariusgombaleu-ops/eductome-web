import { ScrollReveal } from '../ui/ScrollReveal';
import { XCircle, CheckCircle2, Frown, HelpCircle } from 'lucide-react';

export function RecognizeSection() {
  return (
    <section id="se-reconnaitre" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#f4f7fb] px-4 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-eductome-sky/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-eductome-magenta/5 blur-[100px] rounded-full"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-eductome-magenta font-bold tracking-wider uppercase text-sm mb-2 block">Diagnostic</span>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-eductome-marine mb-6">
              Voici deux cas de figure très fréquents.
            </h2>
            <p className="text-gray-600 text-lg md:text-xl font-light">
              Lequel te ressemble le plus ?
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 h-full flex flex-col relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 left-8 w-16 h-1 bg-eductome-sky rounded-b-md transition-all duration-300 group-hover:w-24"></div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-eductome-sky/10 flex items-center justify-center text-eductome-sky">
                  <Frown className="w-8 h-8" />
                </div>
                <div>
                  <span className="font-bold text-eductome-sky uppercase tracking-wider text-xs block mb-1">CAS DE FIGURE N°1</span>
                  <h3 className="text-xl font-bold text-eductome-marine">L'élève "Perdu en classe"</h3>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-600">Le prof va trop vite au tableau.</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-600">Poser une question devant tout le monde ? Trop gênant.</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-600">Tu rentres à la maison avec un cahier rempli de formules que tu ne comprends pas.</span>
                </li>
              </ul>

              <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
                <p className="font-medium text-red-800 text-sm">
                  <span className="font-bold block mb-1">Résultat :</span> Le jour du devoir, face à la feuille d'examen... c'est la panique totale.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 h-full flex flex-col relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 left-8 w-16 h-1 bg-eductome-magenta rounded-b-md transition-all duration-300 group-hover:w-24"></div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-eductome-magenta/10 flex items-center justify-center text-eductome-magenta">
                  <HelpCircle className="w-8 h-8" />
                </div>
                <div>
                  <span className="font-bold text-eductome-magenta uppercase tracking-wider text-xs block mb-1">CAS DE FIGURE N°2</span>
                  <h3 className="text-xl font-bold text-eductome-marine">L'élève "Bloqué au devoir"</h3>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-600">Tu comprends bien en classe (tes amis te demandent même de l'aide).</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-600">Tu as relu tes leçons, tu te sens prêt.</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-600">Mais devant l'exercice de l'évaluation : trou noir. Impossible d'appliquer ce que tu sais.</span>
                </li>
              </ul>

              <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
                <p className="font-medium text-red-800 text-sm">
                  <span className="font-bold block mb-1">Résultat :</span> Une note très décevante qui te frustre, parce que tu avais travaillé.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="bg-eductome-marine rounded-3xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
            {/* Background design inside the card */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-eductome-magenta/30 blur-[50px] rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-eductome-sky/20 blur-[50px] rounded-full"></div>
            
            <p className="text-white text-xl md:text-3xl font-playfair font-medium leading-relaxed relative z-10 max-w-3xl mx-auto mb-6">
              Rassure-toi : le problème <span className="text-white border-b border-eductome-magenta font-semibold">n'est pas ton intelligence</span>. 
              C'est juste qu'il te manque une méthode claire pour appliquer ce que tu apprends.
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-4xl mx-auto relative z-10 border border-white/10 text-left md:text-center">
              <p className="text-gray-300 text-base md:text-lg font-light mb-4">
                En général, face à ce blocage, on se met à la recherche de documents, de cours ou d'annales pour s'en sortir. 
                Mais la plupart des livres sur le marché sont <span className="text-white font-semibold">trop classiques et basiques</span>. 
                Tu as besoin de quelque chose de différent, de spécial, qui te prenne vraiment par la main.
              </p>
              <p className="text-eductome-magenta text-lg md:text-2xl font-playfair font-medium italic mt-6">
                Je comprends exactement ce que tu ressens. Moi aussi, je suis passé par là...
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
