import { ScrollReveal } from '../ui/ScrollReveal';
import { Link } from 'react-router-dom';

export function FreeResourcesSection() {
  const resources = [
    {
      icon: "📋",
      title: "5 fiches méthode prêtes à imprimer",
      desc: "Une fiche = une méthode pour résoudre un type d'exercice. Tu imprimes, tu gardes, tu appliques.",
      btnText: "Voir les fiches \u2192",
      link: "/ressources?tab=fiches"
    },
    {
      icon: "📅",
      title: "Le Planning du Grand Frère",
      desc: "Un calendrier de révision annuel modulable, avec les rappels méthode aux bons moments de l'année. Imprimable.",
      btnText: "Voir le planning \u2192",
      link: "/ressources?tab=planning"
    },
    {
      icon: "✏️",
      title: "Exercices types BAC corrigés",
      desc: "Pas seulement la réponse finale. Le raisonnement détaillé, comme si on était à côté de toi.",
      btnText: "Faire les exercices \u2192",
      link: "/ressources?tab=exercices"
    },
    {
      icon: "🎯",
      title: "Le Top 10 des questions au BAC",
      desc: "On a analysé les sujets passés. Voici les 10 questions pièges qui tombent presque à chaque fois et comment les déjouer.",
      btnText: "Découvrir le Top 10 \u2192",
      link: "/ressources?tab=questions"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((res, index) => (
            <ScrollReveal key={index} delay={index * 0.1} className="h-full">
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
                  to={res.link} 
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
