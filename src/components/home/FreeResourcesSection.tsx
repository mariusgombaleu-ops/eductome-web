import { ScrollReveal } from '../ui/ScrollReveal';
import { Link } from 'react-router-dom';

export function FreeResourcesSection() {
  const resources = [
    {
      icon: "📖",
      title: "Le chapitre le plus dur de Terminale, expliqué simplement",
      desc: "Télécharge gratuitement un chapitre complet des Clés Maths pour voir si notre méthode te correspond.",
      btnText: "Télécharger l'extrait \u2192"
    },
    {
      icon: "📄",
      title: "Les 10 formules que 80% des élèves oublient au BAC",
      desc: "Une fiche PDF recto-verso à imprimer et à glisser dans ton cahier de brouillon.",
      btnText: "Obtenir la fiche \u2192"
    },
    {
      icon: "🎥",
      title: "Vidéo : Comment organiser tes révisions en 3 étapes",
      desc: "15 minutes de vidéo où le Grand Frère t'explique comment ne plus jamais être en retard sur ton programme.",
      btnText: "Voir la vidéo \u2192"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-eductome-cream px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-eductome-marine mb-6">
              Commence par ici. C'est gratuit.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Pas encore prêt à acheter un manuel ? Teste notre méthode avec ces ressources offertes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((res, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center h-full flex flex-col items-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-gray-100 relative group overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-eductome-sky to-eductome-magenta transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <span className="text-5xl mb-6">{res.icon}</span>
                <h3 className="font-playfair font-bold text-xl text-eductome-marine mb-4">
                  {res.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-8">
                  {res.desc}
                </p>
                <Link 
                  to="/ressources" 
                  className="mt-auto w-full py-3 md:py-4 px-4 bg-eductome-marine text-white font-semibold rounded-xl transition-transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-md shadow-eductome-marine/20"
                >
                  {res.btnText}
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
