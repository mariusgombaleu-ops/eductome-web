import { useState } from 'react';
import { collectionsData } from '../../data/collections';
import { ShoppingBag, Lock, Unlock } from 'lucide-react';
import { CinetPayModal } from '../../components/checkout/CinetPayModal';

export const DashboardBoutique = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{ title: string, price: number, isChapter: boolean } | null>(null);
  
  // Extraire tous les tomes de toutes les collections
  const allTomes = collectionsData.flatMap(c => 
    c.tomes ? c.tomes.map(t => ({ ...t, collectionName: c.name, collectionColor: c.primaryColor, collectionSlug: c.slug })) : []
  );

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

      {/* Grid of Tomes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allTomes.map((tome, index) => (
          <div key={tome.id} className="bg-white dark:bg-[#161B22] rounded-2xl shadow-md border border-[#E1E4E8] dark:border-[#30363D] overflow-hidden flex flex-col group animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${(index + 1) * 50}ms` }}>
            
            {/* Image / Header */}
            <div className="h-[140px] relative p-6 flex flex-col justify-end overflow-hidden" style={{ backgroundColor: tome.collectionColor }}>
              {/* Optional: Add abstract shapes or the actual cover image if preferred */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-black rounded-full -ml-12 -mb-12"></div>
              </div>
              <div className="relative z-10">
                <span className="text-xs font-bold text-white/80 uppercase tracking-wider mb-1 block">
                  {tome.collectionName}
                </span>
                <h3 className="text-xl font-bold text-white drop-shadow-md leading-tight">
                  Tome {tome.number} : {tome.title}
                </h3>
              </div>
            </div>
            
            {/* Content & Actions */}
            <div className="p-5 flex flex-col flex-grow">
              <div className="mb-4">
                <h4 className="text-sm font-bold text-[#1A1A2E] dark:text-white mb-2 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-gray-400" /> Ce que contient ce tome :
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-6 list-disc">
                  {tome.chapters && tome.chapters.map((chap, i) => (
                    <li key={i}>{chap}</li>
                  ))}
                  {!tome.chapters && (
                    <>
                      <li>Cours détaillé</li>
                      <li>Méthode de résolution</li>
                      <li>Exercices corrigés type BAC</li>
                    </>
                  )}
                </ul>
              </div>

              <div className="mt-auto space-y-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                <button 
                  onClick={() => openCheckout(`Tome ${tome.number} : ${tome.title}`, 1500, false)}
                  className="w-full py-3 bg-[#1A3557] hover:bg-[#1976D2] text-white rounded-xl font-bold flex items-center justify-between px-4 transition-colors shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <Unlock className="w-4 h-4" /> Tome Complet
                  </span>
                  <span className="bg-white/20 px-2 py-1 rounded text-sm">1.500 FCFA</span>
                </button>
                
                <button 
                  onClick={() => openCheckout(`Chapitre au choix - Tome ${tome.number}`, 300, true)}
                  className="w-full py-2.5 bg-transparent border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-600 dark:text-gray-300 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors text-sm"
                >
                  Ou débloquer par chapitre (300 FCFA)
                </button>
              </div>
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
