import { Lock, CreditCard, BookOpen, MessageCircle } from 'lucide-react';

interface ChapterLockProps {
  chapterTitle: string;
  tomePrice: number;
  deduction: number;
  onUnlockChapter: () => void;
  onUnlockTome: () => void;
  onUnlockCollection?: () => void;
  onRequestParent?: () => void;
}

export const ChapterLock = ({ chapterTitle, tomePrice, deduction, onUnlockChapter, onUnlockTome, onUnlockCollection, onRequestParent }: ChapterLockProps) => {

  return (
    <div className="my-8 max-w-2xl mx-auto border-2 border-eductome-magenta rounded-2xl overflow-hidden shadow-lg animate-in fade-in slide-in-from-bottom-4 relative">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white dark:from-[#1A1A2E] dark:to-[#0D1117] opacity-50 z-0" />
      
      <div className="relative z-10 p-6 sm:p-8 text-center flex flex-col items-center">
        <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mb-4 text-eductome-magenta shadow-inner">
          <Lock size={32} />
        </div>
        
        <h3 className="font-playfair text-2xl font-bold text-[#1A3557] dark:text-white mb-2">
          La suite est réservée aux Caïmans 🐊
        </h3>
        <p className="text-gray-600 dark:text-[#8B949E] mb-8">
          Tu as terminé la partie gratuite. Pour continuer à débloquer {chapterTitle} et accéder aux quiz et exercices exclusifs, choisis ton pass :
        </p>

        <div className="grid sm:grid-cols-2 gap-4 w-full">
          {/* Option 1: Unlocked Chapter */}
          <div className="bg-white dark:bg-[#161B22] border border-gray-200 dark:border-[#30363D] rounded-xl p-5 hover:border-eductome-magenta dark:hover:border-eductome-magenta transition-colors cursor-pointer flex flex-col h-full shadow-sm" onClick={onUnlockChapter}>
            <h4 className="font-bold text-gray-800 dark:text-[#E6EDF3] mb-1">Débloquer le Chapitre</h4>
            <div className="text-2xl font-black text-[#1A3557] dark:text-blue-400 mb-3">300 FCFA</div>
            <p className="text-sm text-gray-500 dark:text-[#8B949E] flex-grow mb-4">Accès illimité à ce chapitre uniquement, avec tous ses exercices.</p>
            <button className="w-full mt-auto min-h-[44px] py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-[#30363D] dark:hover:bg-gray-700 text-[#1A3557] dark:text-white font-bold transition-colors flex items-center justify-center gap-2">
              <CreditCard size={18} /> Payer 300 F
            </button>
          </div>

          {/* Option 2: Unlocked Tome */}
          <div className="relative bg-[#1A3557] border border-[#1A3557] rounded-xl p-5 text-white shadow-md hover:shadow-xl transition-shadow cursor-pointer flex flex-col h-full transform hover:-translate-y-1" onClick={onUnlockTome}>
            <div className="absolute top-0 right-0 bg-orange-500 text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-xl">
              🔥 PLUS RENTABLE
            </div>
            <h4 className="font-bold text-blue-100 mb-1">Le Tome Complet</h4>
            <div className="text-2xl font-black text-white mb-1">{tomePrice} FCFA</div>
            {deduction > 0 && (
              <div className="text-xs font-bold text-green-300 mb-2">
                -{deduction}F déduits pour tes chapitres déjà achetés !
              </div>
            )}
            <p className="text-sm text-blue-200 flex-grow mb-4">Débloque tous les chapitres, tous les quiz et le chapitre bonus BAC.</p>
            <button className="w-full mt-auto min-h-[44px] py-2 rounded-lg bg-eductome-magenta hover:bg-pink-600 text-white font-bold transition-colors shadow-sm flex items-center justify-center gap-2">
              <BookOpen size={18} /> Payer {tomePrice} F
            </button>
          </div>
        </div>

        {/* Option 3: Collection Complète */}
        {onUnlockCollection && (
          <div 
            className="mt-4 w-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-xl p-1 shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1"
            onClick={onUnlockCollection}
          >
            <div className="bg-white dark:bg-[#161B22] rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide text-sm">Offre VIP</h4>
                  <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full">RECOMMANDÉ</span>
                </div>
                <h3 className="font-black text-xl text-[#1A1A2E] dark:text-white mb-1">La Collection Complète</h3>
                <p className="text-sm text-gray-600 dark:text-[#8B949E]">Débloque absolument TOUT. Accès à tous les tomes de Terminale D pendant 1 an.</p>
              </div>
              <div className="flex flex-col items-center sm:items-end min-w-[120px]">
                <div className="text-xs text-gray-400 line-through mb-1">Au lieu de 15 000 F</div>
                <div className="text-2xl font-black text-amber-500 mb-2">10 000 F</div>
                <button className="w-full sm:w-auto min-h-[44px] px-6 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold transition-colors shadow-sm text-sm">
                  Devenir VIP
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Option 4: Demander à un parent */}
        {onRequestParent && (
          <div 
            className="mt-6 w-full p-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl cursor-pointer hover:bg-[#25D366]/20 transition-colors flex flex-col items-center shadow-sm" 
            onClick={onRequestParent}
          >
            <div className="flex items-center gap-2 text-[#075E54] dark:text-[#25D366] font-bold mb-1">
              <MessageCircle size={20} /> Demander à un parent via WhatsApp
            </div>
            <p className="text-xs text-[#128C7E] dark:text-[#25D366]/80 text-center">
              Pas de Mobile Money ? Envoie un lien de paiement direct à ton père ou ta mère.
            </p>
          </div>
        )}

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
          <span>Paiement sécurisé via</span>
          <span className="font-bold text-[#1A3557] dark:text-[#E6EDF3]">Selar</span>
          <span>(Wave, Orange, MTN, Visa)</span>
        </div>
      </div>
    </div>
  );
};
