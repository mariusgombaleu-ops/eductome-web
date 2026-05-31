import { Link } from 'react-router-dom';
import { ScrollReveal } from '../ui/ScrollReveal';

export function FounderSection() {
  return (
    <section className="py-12 md:py-20 bg-eductome-cream px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        <div className="flex-1">
          <ScrollReveal>
            <div className="prose prose-lg text-gray-700 font-medium">
              <p className="mb-6 leading-relaxed italic text-gray-600">
                « J’ai toujours fait partie des élites au collège. Mais quand je suis arrivé au Lycée Classique d’Abidjan, tout a basculé. Le rythme était fou, la pression maximale. Dès le premier devoir, les 19/20 qu'on visait se sont transformés en 9/20... »
              </p>
              
              <p className="mb-6 leading-relaxed">
                Poser une question en classe était devenu impossible sans passer pour "le guignol de service". Il fallait tout faire en autodidacte, et on paniquait à chaque devoir. 
                C’est là que j'ai eu le véritable déclic : <strong>le problème n'est pas l'intelligence, c'est de se construire une méthode infaillible.</strong>
              </p>
              
              <p className="font-playfair text-2xl font-bold text-eductome-magenta mb-8">
                C'est pour ça que j'ai créé EDUCTOME. Le grand frère que j'aurais aimé avoir.
              </p>
            </div>
            
            <Link 
              to="/a-propos" 
              className="inline-flex items-center text-eductome-sky font-semibold hover:text-eductome-marine transition-colors"
            >
              Lire toute mon histoire &rarr;
            </Link>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2} className="w-full md:w-auto">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center md:max-w-sm relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-eductome-magenta/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
              <img src="/images/marius.jpeg" alt="Marius Gombaleu" className="w-full h-full object-cover object-top" />
            </div>
            <h3 className="font-playfair font-bold text-2xl text-eductome-marine mb-2 relative z-10">Marius Gombaleu</h3>
            <p className="text-gray-500 text-sm font-medium relative z-10">
              Ancien du Lycée Classique d'Abidjan<br />
              <span className="text-eductome-magenta block mt-1">Fondateur d'EDUCTOME</span>
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
