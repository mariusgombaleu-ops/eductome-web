import { collectionsData } from '../data/collections';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SEO } from '../components/SEO';
import { Link, useLocation } from 'react-router-dom';
import { Star, CheckCircle, ChevronRight } from 'lucide-react';

export function Collections() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
  const userSerie = localStorage.getItem('eductome_user_serie') || '';

  const filteredCollections = collectionsData.filter(collection => {
    if (!userSerie) return true;
    
    const target = collection.targetClass.toLowerCase();
    const serieLowerCase = userSerie.toLowerCase();

    if (target.includes('toutes')) return true;
    
    if (serieLowerCase.includes('terminale a')) {
      return target.includes('terminale a') || target.includes('lettres') || target.includes('toutes') || collection.id === 'derniers-codes';
    }
    if (serieLowerCase.includes('terminale d')) {
      return target.includes('terminale d') || target.includes('toutes') || collection.id === 'derniers-codes';
    }
    if (serieLowerCase.includes('terminale c')) {
      return target.includes('terminale c') || target.includes('toutes') || collection.id === 'derniers-codes';
    }
    if (serieLowerCase.includes('3ème') || serieLowerCase.includes('3e')) {
      return target.includes('3') || target.includes('toutes');
    }
    
    return true;
  });

  return (
    <div className={`min-h-screen bg-[#F8F9FA] dark:bg-[#0D1117] font-poppins pb-20 transition-colors duration-300 ${isDashboard ? 'pt-0' : ''}`}>
      <SEO title="La Boutique EDUCTOME" description="Découvre nos manuels scolaires et fiches de révision pour la 3ème et la Terminale." />
      
      {/* 1. HERO */}
      <section className={`bg-gradient-to-r from-[#1A3557] to-[#1976D2] ${isDashboard ? 'pt-16' : 'pt-32'} pb-20 px-4 text-center`}>
        <div className="max-w-3xl mx-auto text-white">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold tracking-wider mb-6">
            LA BOUTIQUE EDUCTOME
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
            Choisis ton manuel.<br/>
            <span className="text-[#D81B60]">Décroche ton examen.</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Des collections pensées pour les élèves ivoiriens. Chaque manuel a une mission précise — trouve celui qui répond à ton blocage.
          </p>
        </div>
      </section>

      {/* 2. GRILLE DES CARDS COLLECTIONS */}
      <div className="max-w-7xl mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((collection, index) => (
            <ScrollReveal key={collection.id} delay={index * 0.1}>
              <div className="bg-white dark:bg-[#161B22] rounded-2xl shadow-xl border border-[#E1E4E8] dark:border-[#30363D] overflow-hidden flex flex-col h-full group hover:-translate-y-2 transition-all duration-300">
                
                {/* Image Cover */}
                <div className="h-[240px] relative overflow-hidden flex items-center justify-center p-6" style={{ backgroundColor: collection.primaryColor }}>
                  {/* Badge */}
                  {index === 0 && (
                    <div className="absolute top-4 left-4 bg-[#FFC107] text-[#880E4F] text-xs font-bold px-3 py-1.5 rounded-md shadow-md z-10 flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" /> #1 Meilleure Vente
                    </div>
                  )}
                  {collection.badges.find(b => b.label === 'NOUVEAU') && (
                    <div className="absolute top-4 left-4 bg-[#D81B60] text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-md z-10 flex items-center gap-1">
                      Nouveau
                    </div>
                  )}
                  {collection.coverImage ? (
                    <img 
                      src={collection.coverImage} 
                      alt={`Couverture ${collection.name}`} 
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                      loading="lazy"
                    />
                  ) : (
                    <div className="text-center text-white">
                      <span className="text-6xl mb-4 block">{collection.emoji}</span>
                      <h3 className="font-playfair font-bold text-3xl">{collection.name}</h3>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                  
                  <h3 className="text-2xl font-bold text-[#1A1A2E] dark:text-white mb-3">{collection.name}</h3>
                  <p className="text-sm text-[#6B7280] dark:text-[#8B949E] mb-6 flex-grow leading-relaxed">
                    {collection.shortDescription}
                  </p>
                  
                  <div className="bg-[#F8F9FA] dark:bg-[#0D1117] rounded-xl p-4 mb-6 border border-[#E1E4E8] dark:border-[#30363D]">
                    <div className="flex flex-col gap-2">
                      <span className="flex items-center text-sm font-medium text-[#1A1A2E] dark:text-[#E6EDF3]">
                        <CheckCircle className="w-4 h-4 text-[#4CAF50] mr-2" /> Inclus : {collection.tomeCount > 0 ? `${collection.tomeCount} Tomes` : '1 Manuel'}
                      </span>
                      <span className="flex items-center text-sm font-medium text-[#1A1A2E] dark:text-[#E6EDF3]">
                        <CheckCircle className="w-4 h-4 text-[#4CAF50] mr-2" /> Accès Exercices & Quiz
                      </span>
                      <span className="flex items-center text-sm font-medium text-[#1A1A2E] dark:text-[#E6EDF3]">
                        <CheckCircle className="w-4 h-4 text-[#4CAF50] mr-2" /> Format : {collection.format}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-end justify-between mb-6">
                    <div>
                      <p className="text-xs text-[#6B7280] dark:text-[#8B949E] font-medium mb-1">Prix de la collection</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-[#D81B60]">{collection.id === 'derniers-codes' ? '2.000' : '10.000'} FCFA</span>
                        <span className="text-sm text-[#9CA3AF] line-through font-medium">{collection.id === 'derniers-codes' ? '3.500' : '15.000'} FCFA</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link 
                    to={isDashboard ? `/dashboard/boutique/${collection.slug}` : `/collections/${collection.slug}`} 
                    className="w-full py-3.5 bg-[#1A3557] hover:bg-[#1976D2] dark:bg-[#1976D2] dark:hover:bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-lg"
                  >
                    Découvrir la collection <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* 4. BANDEAU RÉASSURANCES */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1A2E] dark:text-white mb-4">Achat 100% Sécurisé</h2>
            <p className="text-[#6B7280] dark:text-[#8B949E]">Des options pensées pour la Côte d'Ivoire.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#161B22] p-8 rounded-2xl border border-[#E1E4E8] dark:border-[#30363D] text-center shadow-sm">
              <div className="w-16 h-16 bg-[#4CAF50]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-[#1A1A2E] dark:text-white mb-3">Accès Immédiat</h3>
              <p className="text-[#6B7280] dark:text-[#8B949E] text-sm leading-relaxed">
                Téléchargement direct pour les PDF. Livraison rapide à Abidjan et expédition le jour même à l'intérieur.
              </p>
            </div>
            
            <div className="bg-white dark:bg-[#161B22] p-8 rounded-2xl border border-[#E1E4E8] dark:border-[#30363D] text-center shadow-sm">
              <div className="w-16 h-16 bg-[#1A3557]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-lg font-bold text-[#1A1A2E] dark:text-white mb-3">Paiement Mobile</h3>
              <p className="text-[#6B7280] dark:text-[#8B949E] text-sm leading-relaxed">
                Transactions sécurisées via Wave, Orange Money, MTN ou Moov. Simple et sans frais cachés.
              </p>
            </div>
            
            <div className="bg-white dark:bg-[#161B22] p-8 rounded-2xl border border-[#E1E4E8] dark:border-[#30363D] text-center shadow-sm">
              <div className="w-16 h-16 bg-[#FF9800]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-lg font-bold text-[#1A1A2E] dark:text-white mb-3">Support WhatsApp</h3>
              <p className="text-[#6B7280] dark:text-[#8B949E] text-sm leading-relaxed">
                Une question avant achat ? Notre équipe vous répond en moins d'une heure sur WhatsApp.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
