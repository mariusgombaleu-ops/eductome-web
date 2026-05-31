import { collectionsData } from '../data/collections';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { ShoppingCart, MessageCircle, ShieldCheck, Zap, BookOpen } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Collections() {
  return (
    <div className="min-h-screen bg-gray-50 font-poppins pb-20">
      <SEO title="Boutique & Collections" description="Découvre nos manuels scolaires et fiches de révision pour la 3ème et la Terminale." />
      
      {/* Hero Banner */}
      <div className="py-16 px-4 text-center relative overflow-hidden" style={{ backgroundImage: 'linear-gradient(135deg, #1A3557, #0a1628)' }}>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-10 left-10 text-6xl rotate-12">📚</div>
           <div className="absolute bottom-10 right-10 text-6xl -rotate-12">📐</div>
        </div>
        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">
          La Boutique <span className="text-[#D81B60]">Eductome</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg font-light relative z-10">
          Découvre l'intégralité de nos manuels scolaires au format numérique. 
          Trouve la collection qui correspond à tes besoins et commence à t'entraîner dès aujourd'hui.
        </p>
      </div>

      {/* Avantages */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-3">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#1A3557] mb-1">Accès Immédiat</h3>
              <p className="text-sm text-gray-500">Télécharge tes tomes en PDF dès la validation de ton paiement.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#1A3557] mb-1">Paiement Sécurisé</h3>
              <p className="text-sm text-gray-500">Transactions 100% sécurisées via la plateforme Selar (Mobile Money, Carte).</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#1A3557] mb-1">Format Pratique</h3>
              <p className="text-sm text-gray-500">Lis sur ton téléphone, ta tablette, ou imprime-les pour travailler.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Liste des Collections */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        
        <div className="space-y-12 md:space-y-24">
          {collectionsData.map((collection, index) => {
            const isEven = index % 2 === 0;
            return (
              <ScrollReveal key={collection.id}>
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}>
                  
                  {/* Image Side */}
                  <div className="w-full md:w-5/12 flex-shrink-0">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative bg-gray-100 transform transition-transform hover:scale-[1.02]">
                      {collection.image && (
                        <img 
                          src={collection.image} 
                          alt={`Couverture ${collection.title}`} 
                          loading="lazy"
                          className="w-full h-full object-cover relative z-10"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.nextElementSibling;
                            if (fallback) {
                              fallback.classList.remove('hidden');
                              fallback.classList.add('flex');
                            }
                          }}
                        />
                      )}
                      
                      {/* Fallback Placeholder (S'affiche si l'image ne charge pas) */}
                      <div className={`hidden absolute inset-0 flex-col items-center justify-center text-center p-8 text-white z-0`} style={{ backgroundColor: collection.color }}>
                        <span className="text-7xl mb-6 shadow-sm">{collection.emoji}</span>
                        <h3 className="font-playfair font-bold text-3xl mb-4">{collection.title}</h3>
                        <div className="w-12 h-1 bg-white/50 mb-4 rounded-full"></div>
                        <p className="text-sm font-semibold opacity-90">{collection.tag}</p>
                        <p className="text-xs opacity-70 mt-auto pt-4">Image en attente dans public/covers/</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Side */}
                  <div className="w-full md:w-7/12">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-md border border-gray-200">
                        {collection.tag}
                      </span>
                      {collection.badge && (
                        <span className="px-3 py-1 bg-[#D81B60] text-white text-xs font-bold rounded-md shadow-sm">
                          {collection.badge}
                        </span>
                      )}
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[#1A3557] mb-4 flex items-center">
                      <span className="mr-3">{collection.emoji}</span> {collection.title}
                    </h2>
                    
                    <p className="text-lg text-gray-600 mb-8 font-medium leading-relaxed">
                      {collection.description}
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {collection.mission && (
                        <div className="bg-white p-5 rounded-xl border-l-4 shadow-sm" style={{ borderColor: collection.color }}>
                          <h4 className="text-sm font-bold uppercase mb-2 flex items-center" style={{ color: collection.color }}>
                            🎯 L'objectif
                          </h4>
                          <p className="text-gray-700 text-sm leading-relaxed">{collection.mission}</p>
                        </div>
                      )}
                      {collection.valeur && (
                        <div className="bg-white p-5 rounded-xl border-l-4 shadow-sm" style={{ borderColor: collection.color }}>
                          <h4 className="text-sm font-bold uppercase mb-3 flex items-center" style={{ color: collection.color }}>
                            💡 Ce que ça t'apporte
                          </h4>
                          <ul className="space-y-2">
                            {Array.isArray(collection.valeur) ? collection.valeur.map((point, idx) => (
                              <li key={idx} className="flex items-start text-sm text-gray-700 leading-relaxed">
                                <span className="mr-2 font-bold" style={{ color: collection.color }}>✓</span>
                                <span>{point}</span>
                              </li>
                            )) : (
                              <p className="text-gray-700 text-sm leading-relaxed">{collection.valeur}</p>
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                    
                    <a 
                      href={collection.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center bg-[#D81B60] hover:bg-[#B71C1C] text-white font-bold py-4 px-8 rounded-full transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200 w-full md:w-auto text-lg"
                    >
                      <ShoppingCart className="w-5 h-5 mr-3" />
                      Découvrir sur Selar
                    </a>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* CTA Contact Bottom */}
      <ScrollReveal className="mt-12 bg-white py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-playfair font-bold text-[#1A3557] mb-4">Besoin d'aide pour choisir ?</h2>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Tu hésites entre plusieurs collections ou tu as une question sur le paiement ? 
            L'équipe Eductome est là pour t'accompagner directement sur WhatsApp.
          </p>
          <a 
            href="https://wa.me/2250799506300" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all shadow-md hover:shadow-lg"
          >
            Discuter avec nous sur WhatsApp
          </a>
        </div>
      </ScrollReveal>

    </div>
  );
}
