import { Link } from 'react-router-dom';
import { ScrollReveal } from '../ui/ScrollReveal';

export function FounderSection() {
  return (
    <section className="py-12 md:py-20 bg-eductome-cream px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        <div className="flex-1">
          <ScrollReveal>
            <div className="prose prose-lg text-gray-700 font-medium">
              <p className="mb-6 leading-relaxed italic text-gray-600">
                « J’ai toujours fait partie des élites au collège. Mais quand je suis arrivé au Lycée Classique d’Abidjan, tout a basculé. Le rythme était fou, la pression maximale. Dès le premier devoir, les 19/20 qu'on visait se sont transformés en 9/20... »
              </p>
              
              <p className="mb-6 leading-relaxed">
                Poser une question en classe était devenu impossible sans passer pour "le guignol de service". Il fallait tout faire en autodidacte, et on paniquait à chaque devoir. 
                C’est là que j'ai eu le véritable déclic : **le problème n'est pas l'intelligence, c'est de se construire une méthode infaillible.**
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
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-eductome-magenta md:max-w-sm">
            <h3 className="font-playfair font-bold text-xl text-eductome-marine mb-2">Marius Gombaleu</h3>
            <p className="text-gray-500 text-sm">
              Ancien du Lycée Classique d'Abidjan —<br />
              Fondateur d'EDUCTOME
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
