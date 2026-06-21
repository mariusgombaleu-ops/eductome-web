import { useState } from 'react';
import { collectionsData } from '../../data/collections';
import { ShoppingBag, Lock, Unlock, ChevronDown, ChevronUp } from 'lucide-react';
import { SelarPaymentModal } from '../../components/payment/SelarPaymentModal';
import { GrandFrereGuide } from '../../components/ui/GrandFrereGuide';
import { useUser } from '../../contexts/UserContext';
import { useTheme } from '../../contexts/ThemeContext';

export const DashboardBoutique = () => {
  const { unlockedCourses } = useUser();
  const { palette } = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [optionsModalOpen, setOptionsModalOpen] = useState(false);
  const [selectedTomeForOptions, setSelectedTomeForOptions] = useState<{tome: any, collection: any} | null>(null);
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
    <div className="space-y-8 px-4 md:px-6 lg:px-8 pt-6 pb-10 font-poppins">
      
      <GrandFrereGuide 
        id="boutique"
        message="C'est ici que tu t'armes pour la bataille finale. Investis en toi-même, prends les tomes qui te manquent et domine tes faiblesses."
      />

      {/* Banner */}
      <div className="relative bg-gradient-to-br from-[#1A3557] to-[#1976D2] rounded-[28px] p-6 md:p-8 overflow-hidden shadow-lg flex flex-col md:flex-row items-center gap-8 animate-fade-in-up mb-6">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 pointer-events-none blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 -mb-12 w-32 h-32 rounded-full bg-white/10 pointer-events-none blur-2xl"></div>
        
        <div className="relative z-10 text-white flex-1">
          <h1 className="text-3xl font-playfair font-bold mb-2 flex items-center gap-3">
            <ShoppingBag className="w-8 h-8 opacity-80" />
            Débloquer du contenu
          </h1>
          <p className="text-white/80 max-w-lg mt-2 text-[15px] font-medium leading-relaxed">
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
          <div key={collection.id} className="rounded-[28px] border overflow-hidden shadow-sm transition-all duration-300" style={{ background: palette.bg2, borderColor: palette.line }}>
            <button 
              onClick={() => toggleCollection(collection.id)}
              className="w-full flex items-center justify-between p-4 sm:p-6 transition-colors hover:bg-black/5 dark:hover:bg-white/5"
              style={{ background: isOpen ? palette.bg : palette.bg2 }}
            >
              <h2 className="text-xl md:text-2xl font-bold font-playfair flex items-center gap-2" style={{ color: collection.primaryColor }}>
                <span>{collection.emoji}</span> Collection {collection.name}
              </h2>
              {isOpen ? <ChevronUp className="w-6 h-6" style={{ color: palette.ink2 }} /> : <ChevronDown className="w-6 h-6" style={{ color: palette.ink2 }} />}
            </button>
            
            {isOpen && (
              <div className="p-4 sm:p-6 border-t" style={{ borderColor: palette.line, background: palette.bg }}>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                  {collection.tomes?.map((tome, index) => (
                    <div key={tome.id} className="rounded-[24px] border shadow-sm hover:shadow-xl transition-all duration-300 p-4 flex flex-col group animate-in fade-in slide-in-from-bottom-4 hover:-translate-y-1" style={{ background: palette.bg2, borderColor: palette.line, animationDelay: `${(index + 1) * 50}ms` }}>
                      
                      {/* Header Section */}
                      <div className="mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest mb-1 block" style={{ color: palette.ink3 }}>
                          Tome {tome.number}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold leading-tight font-playfair" style={{ color: palette.ink }}>
                          {tome.title}
                        </h3>
                      </div>

                      {/* Price Section */}
                      <div className="mb-3 flex items-baseline gap-1 mt-auto">
                        <span className="text-xl sm:text-2xl font-black" style={{ color: palette.ink }}>1.500</span>
                        <span className="text-[10px] sm:text-xs font-bold" style={{ color: palette.ink3 }}>FCFA</span>
                      </div>

                      {/* Actions Section */}
                      <div className="pt-2 mt-auto">
                        <button 
                          onClick={() => {
                            setSelectedTomeForOptions({tome, collection});
                            setOptionsModalOpen(true);
                          }}
                          className="w-full text-white py-2.5 rounded-[16px] text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-md hover:scale-[1.02]"
                          style={{ background: palette.accent, boxShadow: `0 4px 14px ${palette.accent}40` }}
                        >
                          <Unlock className="w-4 h-4" /> Débloquer
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )})}
      </div>

      {/* ── Options Modal ── */}
      {optionsModalOpen && selectedTomeForOptions && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOptionsModalOpen(false)} />
          <div className="relative z-10 w-full max-w-sm rounded-[28px] shadow-2xl overflow-hidden border animate-in zoom-in-95 duration-200" style={{ background: palette.bg, borderColor: palette.glassLine }}>
            <div className="p-6 text-center border-b" style={{ borderColor: palette.line }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: `${palette.accent}20` }}>
                <Unlock className="w-6 h-6" style={{ color: palette.accent }} />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-1" style={{ color: palette.ink }}>
                Comment veux-tu débloquer ?
              </h3>
              <p className="text-sm font-medium" style={{ color: palette.ink2 }}>
                {selectedTomeForOptions.tome.title}
              </p>
            </div>
            
            <div className="p-4 space-y-3" style={{ background: palette.bg2 }}>
              {/* Option 1 : A la carte */}
              <button 
                onClick={() => {
                  setOptionsModalOpen(false);
                  openCheckout(`Chapitre au choix - Tome ${selectedTomeForOptions.tome.number}`, 300, true, false, selectedTomeForOptions.tome.id);
                }}
                className="w-full flex items-center justify-between p-4 rounded-[20px] border hover:shadow-md transition-all group"
                style={{ background: palette.bg, borderColor: palette.line }}
              >
                <div className="text-left">
                  <div className="font-bold mb-0.5 group-hover:opacity-80 transition-opacity" style={{ color: palette.ink }}>1 Chapitre à la carte</div>
                  <div className="text-xs font-medium" style={{ color: palette.ink3 }}>Choisis le chapitre de ton choix</div>
                </div>
                <div className="font-black" style={{ color: palette.ink }}>300F</div>
              </button>

              {/* Option 2 : Tome Complet */}
              {(() => {
                const tomePrefix = selectedTomeForOptions?.tome?.id?.split('-')[0] + '-chap';
                const ownedChaptersCount = unlockedCourses.filter(id => id.startsWith(tomePrefix)).length;
                const deduction = ownedChaptersCount * 300;
                const finalTomePrice = Math.max(0, 1500 - deduction);

                return (
                  <button 
                    onClick={() => {
                      setOptionsModalOpen(false);
                      openCheckout(`Tome ${selectedTomeForOptions.tome.number} : ${selectedTomeForOptions.tome.title}${deduction > 0 ? ` (-${deduction}F déduits)` : ''}`, finalTomePrice, false, false, selectedTomeForOptions.tome.id);
                    }}
                    className="w-full flex items-center justify-between p-4 rounded-[20px] border-2 group transition-all"
                    style={{ background: palette.bg, borderColor: palette.accent }}
                  >
                    <div className="text-left">
                      <div className="font-bold" style={{ color: palette.accent }}>Tome Complet</div>
                      {deduction > 0 ? (
                        <div className="text-xs text-green-500 font-bold">-{deduction}F pour tes chapitres acquis</div>
                      ) : (
                        <div className="text-xs font-medium" style={{ color: palette.ink3 }}>Débloque tous les chapitres</div>
                      )}
                    </div>
                    <div className="font-black" style={{ color: palette.accent }}>{finalTomePrice}F</div>
                  </button>
                );
              })()}

              {/* Option 3 : VIP */}
              <button 
                onClick={() => {
                  setOptionsModalOpen(false);
                  openCheckout(`Collection ${selectedTomeForOptions.collection.name}`, selectedTomeForOptions.collection.id === 'cles-maths' ? 10000 : 8000, false, true, selectedTomeForOptions.collection.id);
                }}
                className="w-full flex items-center justify-between p-4 rounded-[20px] bg-gradient-to-r from-amber-500 to-yellow-400 text-white hover:from-amber-600 hover:to-yellow-500 transition-colors shadow-md"
              >
                <div className="text-left">
                  <div className="font-bold mb-0.5 flex items-center gap-1">
                    Offre VIP <Lock className="w-3 h-3" />
                  </div>
                  <div className="text-xs text-amber-50 font-medium">Toute la collection</div>
                </div>
                <div className="font-black">Dès 8.000F</div>
              </button>
            </div>
            
            <div className="p-4 border-t" style={{ borderColor: palette.line, background: palette.bg }}>
              <button 
                onClick={() => setOptionsModalOpen(false)}
                className="w-full py-2.5 text-sm font-bold transition-colors"
                style={{ color: palette.ink3 }}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}

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
