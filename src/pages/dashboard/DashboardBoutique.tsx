import { useState } from 'react';
import { collectionsData } from '../../data/collections';
import { ShoppingBag, Lock, Unlock } from 'lucide-react';
import { CinetPayModal } from '../../components/checkout/CinetPayModal';

export const DashboardBoutique = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{ title: string, price: number, isChapter: boolean } | null>(null);
  
  // Supprimé: allTomes

  const openCheckout = (title: string, price: number, isChapter: boolean) => {
    setSelectedItem({ title, price, isChapter });
    setModalOpen(true);
  };

  return (
    <div className="space-y-8 pb-10 font-poppins">
      {/* Banner */}
      <div className="relative bg-gradient-to-r from-eductome-marine to-eductome-sky rounded-2xl p-6 md:p-8 overflow-hidden shadow-lg flex flex-col md:flex-row items-center gap-8 animate-fade-in-up mb-6">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 -mb-12 w-32 h-32 rounded-full bg-white opacity-10 pointer-events-none"></div>
        
        <div className="relative z-10 text-white flex-1">
          <h1 className="text-3xl font-playfair font-bold mb-2 flex items-center gap-3">
            <ShoppingBag className="w-8 h-8" />
            Débloquer du contenu
          </h1>
          <p className="text-blue-100 max-w-lg mt-2 text-sm">
            Achète le tome complet pour accéder à 100% du contenu, ou débloque chapitre par chapitre à ton rythme. 
            Paiement sécurisé par Mobile Money (Wave, Orange, MTN).
          </p>
        </div>
      </div>

      {/* Grid of Tomes by Collection */}
      <div className="space-y-10">
        {collectionsData.filter(c => c.tomes && c.tomes.length > 0).map((collection) => (
          <div key={collection.id}>
            <h2 className="text-xl md:text-2xl font-bold font-playfair mb-4 flex items-center gap-2" style={{ color: collection.primaryColor }}>
              <span>{collection.emoji}</span> Collection {collection.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {collection.tomes?.map((tome, index) => (
                <div key={tome.id} className="bg-white dark:bg-[#161B22] rounded-2xl shadow-md border border-[#E1E4E8] dark:border-[#30363D] overflow-hidden flex flex-col group animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${(index + 1) * 50}ms` }}>
                  
                  {/* Image / Header */}
                  <div className="h-[90px] sm:h-[140px] relative p-3 sm:p-6 flex flex-col justify-end overflow-hidden" style={{ backgroundColor: collection.primaryColor }}>
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-black rounded-full -ml-12 -mb-12"></div>
                    </div>
                    <div className="relative z-10">
                      <span className="text-[10px] sm:text-xs font-bold text-white/80 uppercase tracking-wider mb-0.5 sm:mb-1 block truncate">
                        {collection.name}
                      </span>
                      <h3 className="text-sm sm:text-xl font-bold text-white drop-shadow-md leading-tight line-clamp-2">
                        Tome {tome.number} : {tome.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Content & Actions */}
                  <div className="p-3 sm:p-5 flex flex-col flex-grow">
                    <div className="mb-3 sm:mb-4 hidden sm:block">
                      <h4 className="text-xs sm:text-sm font-bold text-[#1A1A2E] dark:text-white mb-1 sm:mb-2 flex items-center gap-2">
                        <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" /> Ce que contient ce tome :
                      </h4>
                      <ul className="text-[10px] sm:text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-4 sm:ml-6 list-disc">
                        {tome.chapters ? tome.chapters.map((chap, i) => (
                          <li key={i}>{chap}</li>
                        )) : (
                          <>
                            <li>Cours détaillé</li>
                            <li>Méthode de résolution</li>
                            <li>Exercices corrigés type BAC</li>
                          </>
                        )}
                      </ul>
                    </div>

                    <div className="mt-auto space-y-2 sm:space-y-3 pt-2 sm:pt-4 border-t border-gray-100 dark:border-gray-800">
                      <button 
                        onClick={() => openCheckout(`Tome ${tome.number} : ${tome.title}`, 1500, false)}
                        className="w-full py-2 sm:py-3 bg-[#1A3557] hover:bg-[#1976D2] text-white rounded-xl font-bold flex flex-col sm:flex-row items-center justify-between px-2 sm:px-4 transition-colors shadow-sm text-[11px] sm:text-base gap-1 sm:gap-0"
                      >
                        <span className="flex items-center gap-1 sm:gap-2">
                          <Unlock className="w-3 h-3 sm:w-4 sm:h-4" /> Tome Complet
                        </span>
                        <span className="bg-white/20 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-sm">1.500 FCFA</span>
                      </button>
                      
                      <button 
                        onClick={() => openCheckout(`Chapitre au choix - Tome ${tome.number}`, 300, true)}
                        className="w-full py-2 sm:py-2.5 bg-transparent border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-600 dark:text-gray-300 rounded-xl font-medium flex items-center justify-center gap-1 sm:gap-2 transition-colors text-[10px] sm:text-sm leading-tight text-center"
                      >
                        <span className="hidden sm:inline">Ou débloquer par chapitre (300 FCFA)</span>
                        <span className="sm:hidden flex items-center gap-1"><Lock className="w-3 h-3" /> Chapitre (300 F)</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <CinetPayModal 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)} 
          tomeTitle={selectedItem.title} 
          price={selectedItem.price} 
          isChapter={selectedItem.isChapter} 
        />
      )}
    </div>
  );
};
