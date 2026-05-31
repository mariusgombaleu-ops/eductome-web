import { useParams, Link } from 'react-router-dom';
import { collectionsData } from '../data/collections';
import { SEO } from '../components/SEO';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { ArrowLeft, BookOpen } from 'lucide-react';

export function CollectionDetails() {
  const { id } = useParams<{ id: string }>();
  const collection = collectionsData.find(c => c.id === id);

  if (!collection) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#fafafa]">
        <h2 className="text-2xl font-bold text-eductome-marine mb-4">Collection introuvable</h2>
        <Link to="/" className="text-eductome-sky hover:underline">
          &larr; Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#fafafa] min-h-screen pt-24 pb-20 px-4">
      <SEO title={`${collection.title} - Eductome`} description={collection.description} />
      
      <div className="max-w-6xl mx-auto">
        {/* Navigation retour */}
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-500 hover:text-eductome-marine transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à l'accueil
        </Link>

        {/* En-tête de la collection */}
        <ScrollReveal>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-eductome-magenta/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div className="w-full md:w-1/3 flex justify-center shrink-0 relative z-10">
              {collection.image ? (
                <img src={collection.image} alt={collection.title} className="max-w-[200px] shadow-2xl rounded-lg transform -rotate-2" />
              ) : (
                <span className="text-8xl">{collection.emoji}</span>
              )}
            </div>
            
            <div className="w-full md:w-2/3 relative z-10 text-center md:text-left">
              <span className="inline-block px-3 py-1 bg-eductome-marine/5 text-eductome-marine text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                {collection.tag}
              </span>
              <h1 className="text-3xl md:text-5xl font-playfair font-bold text-eductome-marine mb-4">
                {collection.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {collection.description}
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <span className="flex items-center text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg">
                  📚 {collection.format || "Physique & PDF"}
                </span>
                <span className="flex items-center text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg">
                  🔢 {collection.tomesCount ? `${collection.tomesCount} Tomes` : "Tomes"}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Liste des Tomes */}
        {collection.tomes && collection.tomes.length > 0 ? (
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-10">
                <BookOpen className="text-eductome-magenta w-6 h-6" />
                <h2 className="text-2xl md:text-3xl font-playfair font-bold text-eductome-marine">
                  Les Tomes de la collection
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {collection.tomes.map((tome, index) => (
                <ScrollReveal key={tome.id} delay={index * 0.05}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full">
                    <div className="aspect-[3/4] bg-gray-50 flex items-center justify-center p-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      <img 
                        src={tome.image} 
                        alt={tome.title} 
                        className="w-full h-full object-contain shadow-lg group-hover:scale-105 transition-transform duration-500 relative z-0"
                        onError={(e) => {
                          e.currentTarget.src = collection.image || ''; // Fallback to collection image
                          if (!collection.image) e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow text-center">
                      <h3 className="font-bold text-eductome-marine text-lg mb-4">{tome.title}</h3>
                      <a 
                        href={collection.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto w-full py-3 bg-eductome-magenta text-white font-semibold rounded-xl transition-transform hover:scale-[1.02] active:scale-95 shadow-md shadow-eductome-magenta/20"
                      >
                        Commander
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ) : (
          <ScrollReveal>
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
              <span className="text-4xl block mb-4">🚧</span>
              <h3 className="text-xl font-bold text-eductome-marine mb-2">Les tomes arrivent bientôt</h3>
              <p className="text-gray-500">Les détails de cette collection sont en cours de mise à jour.</p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}
