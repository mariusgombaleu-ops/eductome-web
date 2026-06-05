import { useState } from 'react';
import { Moon, Sun, Bell, Shield, Smartphone, Trash2, Save, Monitor } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useToast } from '../../contexts/ToastContext';

export function Settings() {
  const { theme, toggleTheme } = useTheme();
  const { addToast } = useToast();
  
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    addToast({
      type: 'success',
      title: 'Paramètres sauvegardés',
      message: 'Vos préférences ont été mises à jour avec succès.'
    });
  };

  const isDark = theme === 'dark';

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up pb-20 p-4 md:p-8">
      <div>
        <h1 className="text-3xl font-playfair font-bold text-[#1A1A2E] dark:text-white mb-2">Paramètres</h1>
        <p className="text-[#6B7280] dark:text-[#8B949E]">Configurez votre espace d'apprentissage selon vos préférences.</p>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        
        {/* Section Apparence */}
        <div className={`p-6 rounded-2xl shadow-sm border ${isDark ? 'bg-[#161B22] border-[#30363D]' : 'bg-white border-[#E1E4E8]'}`}>
          <h2 className={`text-lg font-bold mb-6 flex items-center gap-2 ${isDark ? 'text-white' : 'text-[#1A1A2E]'}`}>
            <Monitor className="w-5 h-5 text-[#1976D2]" /> Apparence
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={() => theme !== 'light' && toggleTheme()}
              className={`flex-1 flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                theme === 'light' 
                  ? 'border-[#D81B60] bg-pink-50 text-[#D81B60]' 
                  : `border-[#E1E4E8] dark:border-[#30363D] ${isDark ? 'text-[#8B949E] hover:bg-[#30363D]' : 'text-[#6B7280] hover:bg-[#F8F9FA]'}`
              }`}
            >
              <Sun className="w-8 h-8" />
              <span className="font-bold">Mode Clair</span>
            </button>
            
            <button
              type="button"
              onClick={() => theme !== 'dark' && toggleTheme()}
              className={`flex-1 flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                theme === 'dark' 
                  ? 'border-[#D81B60] bg-[#D81B60]/10 text-[#D81B60]' 
                  : `border-[#E1E4E8] dark:border-[#30363D] ${isDark ? 'text-[#8B949E] hover:bg-[#30363D]' : 'text-[#6B7280] hover:bg-[#F8F9FA]'}`
              }`}
            >
              <Moon className="w-8 h-8" />
              <span className="font-bold">Mode Sombre</span>
            </button>
          </div>
        </div>

        {/* Section Notifications */}
        <div className={`p-6 rounded-2xl shadow-sm border ${isDark ? 'bg-[#161B22] border-[#30363D]' : 'bg-white border-[#E1E4E8]'}`}>
          <h2 className={`text-lg font-bold mb-6 flex items-center gap-2 ${isDark ? 'text-white' : 'text-[#1A1A2E]'}`}>
            <Bell className="w-5 h-5 text-yellow-500" /> Notifications
          </h2>
          
          <div className="space-y-4">
            <label className="flex items-center justify-between p-4 rounded-xl border border-[#E1E4E8] dark:border-[#30363D] cursor-pointer hover:bg-[#F8F9FA] dark:hover:bg-[#30363D]/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${isDark ? 'bg-[#0D1117]' : 'bg-[#F8F9FA]'}`}>
                  <Smartphone className={`w-5 h-5 ${isDark ? 'text-white' : 'text-[#1A1A2E]'}`} />
                </div>
                <div>
                  <div className={`font-bold ${isDark ? 'text-white' : 'text-[#1A1A2E]'}`}>Notifications Push</div>
                  <div className="text-sm text-[#6B7280] dark:text-[#8B949E]">Recevez des alertes pour le forum et vos cours</div>
                </div>
              </div>
              <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={notificationsEnabled} onChange={(e) => setNotificationsEnabled(e.target.checked)} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#D81B60]"></div>
              </div>
            </label>

            <label className="flex items-center justify-between p-4 rounded-xl border border-[#E1E4E8] dark:border-[#30363D] cursor-pointer hover:bg-[#F8F9FA] dark:hover:bg-[#30363D]/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${isDark ? 'bg-[#0D1117]' : 'bg-[#F8F9FA]'}`}>
                  <Bell className={`w-5 h-5 ${isDark ? 'text-white' : 'text-[#1A1A2E]'}`} />
                </div>
                <div>
                  <div className={`font-bold ${isDark ? 'text-white' : 'text-[#1A1A2E]'}`}>Actualités EDUCTOME</div>
                  <div className="text-sm text-[#6B7280] dark:text-[#8B949E]">Nouveaux tomes, offres et annonces importantes</div>
                </div>
              </div>
              <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={emailUpdates} onChange={(e) => setEmailUpdates(e.target.checked)} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#D81B60]"></div>
              </div>
            </label>
          </div>
        </div>

        {/* Section Sécurité */}
        <div className={`p-6 rounded-2xl shadow-sm border ${isDark ? 'bg-[#161B22] border-[#30363D]' : 'bg-white border-[#E1E4E8]'}`}>
          <h2 className={`text-lg font-bold mb-6 flex items-center gap-2 ${isDark ? 'text-white' : 'text-[#1A1A2E]'}`}>
            <Shield className="w-5 h-5 text-green-500" /> Sécurité du Compte
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-[#8B949E]' : 'text-[#6B7280]'}`}>Nouveau mot de passe</label>
              <input 
                type="password" 
                placeholder="Laissez vide pour ne pas changer"
                className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#D81B60] focus:border-[#D81B60] transition-colors outline-none ${
                  isDark ? 'bg-[#0D1117] border-[#30363D] text-white placeholder-[#6E7681]' : 'bg-[#F8F9FA] border-[#E1E4E8] text-[#1A1A2E] placeholder-[#9CA3AF]'
                }`}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button 
            type="submit" 
            className="flex items-center gap-2 bg-[#D81B60] hover:bg-pink-600 text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-pink-500/30"
          >
            <Save className="w-5 h-5" /> Enregistrer mes paramètres
          </button>
        </div>

        {/* Zone de Danger */}
        <div className="mt-12 pt-8 border-t border-red-200 dark:border-red-900/30">
          <h2 className="text-lg font-bold text-red-600 dark:text-red-400 mb-4 flex items-center gap-2">
            <Trash2 className="w-5 h-5" /> Zone de danger
          </h2>
          <div className={`p-6 rounded-2xl border border-red-200 dark:border-red-900/50 ${isDark ? 'bg-red-900/10' : 'bg-red-50'}`}>
            <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">Supprimer le compte</h3>
            <p className="text-red-600 dark:text-red-400 text-sm mb-4">
              La suppression de votre compte entraînera la perte définitive de votre progression, de vos achats et de vos badges. Cette action est irréversible.
            </p>
            <button 
              type="button" 
              onClick={() => {
                if (window.confirm("Êtes-vous sûr de vouloir supprimer définitivement votre compte ? Cette action est irréversible.")) {
                  addToast({ type: 'error', title: 'Action non disponible', message: 'Veuillez contacter le support pour supprimer votre compte.' });
                }
              }}
              className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 font-bold rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors text-sm"
            >
              Supprimer mon compte
            </button>
          </div>
        </div>

      </form>
    </div>
  );
}
