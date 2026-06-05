import { useState } from 'react';
import { collectionsData } from '../../data/collections';
import { ShoppingBag, Lock, Unlock, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { SelarPaymentModal } from '../../components/payment/SelarPaymentModal';

export const DashboardBoutique = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{ title: string, price: number, isChapter: boolean, isCollection?: boolean, courseId?: string } | null>(null);
  const [openCollections, setOpenCollections] = useState<Record<string, boolean>>({
    'cles-maths': true // Ouvrir la première collection par défaut
  });
  
  const toggleCollection = (id: string) => {
    setOpenCollections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const openCheckout = (title: string, price: number, isChapter: boolean, isCollection: boolean = false, courseId?: string) => {
    setSelectedItem({ title, price, isChapter, isCollection, courseId });
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

      {/* VIP Collection Complete Banner */}
      <div 
        onClick={() => openCheckout('Collection Mathématiques (Tous les tomes)', 10000, false, true, 'cles-maths')}
        className="relative bg-gradient-to-r from-amber-500 to-yellow-400 rounded-2xl p-1 overflow-hidden shadow-lg hover:shadow-xl cursor-pointer transition-all transform hover:-translate-y-1 mb-8"
      >
        <div className="bg-white dark:bg-[#161B22] rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">OFFRE VIP RENTABLE</span>
              <span className="text-amber-500 font-bold flex items-center"><Lock className="w-4 h-4 mr-1" /> Accès total</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#1A1A2E] dark:text-white mb-2">La Collection Mathématiques</h2>
            <p className="text-gray-600 dark:text-[#8B949E] text-sm md:text-base">
              Ne choisis plus. Débloque <strong>absolument tous les tomes de Mathématiques</strong> en un seul clic, pour toute l'année scolaire.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end w-full md:w-auto">
            <div className="text-gray-400 line-through text-sm font-bold mb-1">Valeur: +15 000 FCFA</div>
            <div className="text-4xl md:text-5xl font-black text-amber-500 font-poppins mb-3">10 000 F</div>
            <button className="w-full md:w-auto px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-colors shadow-md flex items-center justify-center gap-2">
              <Unlock className="w-5 h-5" />
              Tout débloquer
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Tomes by Collection */}
      <div className="space-y-6">
        {collectionsData.filter(c => c.tomes && c.tomes.length > 0).map((collection) => {
          const isOpen = !!openCollections[collection.id];
          return (
          <div key={collection.id} className="bg-white dark:bg-[#161B22] rounded-2xl border border-[#E1E4E8] dark:border-[#30363D] overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleCollection(collection.id)}
              className="w-full flex items-center justify-between p-4 sm:p-6 bg-[#F8F9FA] dark:bg-[#0D1117] hover:bg-gray-100 dark:hover:bg-[#1A1A2E] transition-colors"
            >
              <h2 className="text-xl md:text-2xl font-bold font-playfair flex items-center gap-2" style={{ color: collection.primaryColor }}>
                <span>{collection.emoji}</span> Collection {collection.name}
              </h2>
              {isOpen ? <ChevronUp className="w-6 h-6 text-gray-500" /> : <ChevronDown className="w-6 h-6 text-gray-500" />}
            </button>
            
            {isOpen && (
              <div className="p-4 sm:p-6 border-t border-[#E1E4E8] dark:border-[#30363D]">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                  {collection.tomes?.map((tome, index) => (
                    <div key={tome.id} className="bg-white dark:bg-[#161B22] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group relative overflow-hidden animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${(index + 1) * 50}ms` }}>
                      
                      {/* Top Accent Line */}
                      <div className="h-1 w-full" style={{ backgroundColor: collection.primaryColor }}></div>

                      {/* Header Section */}
                      <div className="p-3 sm:p-5 pb-0 flex-grow">
                        <div className="flex items-start justify-between mb-2 sm:mb-3">
                          <span className="inline-flex items-center px-2 py-0.5 sm:py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-md border border-gray-100 dark:border-gray-700">
                            Tome {tome.number}
                          </span>
                          <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-300 dark:text-gray-600" />
                        </div>
                        
                        <h3 className="text-xs sm:text-[15px] font-bold text-[#1A1A2E] dark:text-white leading-snug line-clamp-2 mb-2">
                          {tome.title}
                        </h3>
                        
                        <div className="flex items-baseline gap-1 mt-auto pt-1 sm:pt-2">
                          <span className="text-sm sm:text-lg font-black text-[#1A3557] dark:text-white">
                            1.500
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-bold text-gray-400">
                            FCFA
                          </span>
                        </div>
                      </div>

                      {/* Actions Section */}
                      <div className="p-2 sm:p-4 bg-gray-50/50 dark:bg-[#0D1117]/50 border-t border-gray-100 dark:border-gray-800 mt-2 sm:mt-3">
                        <button 
                          onClick={() => openCheckout(`Tome ${tome.number} : ${tome.title}`, 1500, false, false, tome.id)}
                          className="w-full bg-[#1A3557] hover:bg-[#1976D2] text-white py-2 sm:py-2.5 rounded-xl text-[10px] sm:text-xs font-bold transition-all shadow-sm hover:shadow flex items-center justify-center gap-1.5 mb-1.5 sm:mb-2"
                        >
                          <Unlock className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Débloquer le Tome
                        </button>
                        
                        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                          <button 
                            onClick={() => openCheckout(`Chapitre au choix - Tome ${tome.number}`, 300, true, false, tome.id)}
                            className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 py-1.5 sm:py-2 rounded-lg text-[8px] sm:text-[10px] font-semibold transition-colors flex items-center justify-center gap-1"
                          >
                            <Lock className="w-2.5 h-2.5 text-gray-400" /> 1 Chapitre (300F)
                          </button>
                          <button 
                            onClick={() => openCheckout(`Collection ${collection.name}`, collection.id === 'cles-maths' ? 10000 : 8000, false, true, collection.id)}
                            className="w-full bg-amber-50 dark:bg-amber-900/10 border border-amber-200/50 dark:border-amber-800/50 hover:bg-amber-100 dark:hover:bg-amber-900/30 text-amber-700 dark:text-amber-500 py-1.5 sm:py-2 rounded-lg text-[8px] sm:text-[10px] font-semibold transition-colors flex items-center justify-center gap-1"
                          >
                            <Unlock className="w-2.5 h-2.5" /> Collection compl.
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )})}
      </div>

      {selectedItem && (
        <SelarPaymentModal 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)} 
          tomeTitle={selectedItem.title} 
          price={selectedItem.price} 
          isChapter={selectedItem.isChapter} 
          isCollection={selectedItem.isCollection}
          courseId={selectedItem.courseId}
        />
      )}
    </div>
  );
};
