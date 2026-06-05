import { useState } from 'react';
import { Moon, Sun, Bell, Shield, Smartphone, Trash2, Save, Monitor, Eye, EyeOff } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useToast } from '../../contexts/ToastContext';

export function Settings() {
  const { theme, toggleTheme } = useTheme();
  const { addToast } = useToast();
  
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);
  
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    let strength = 0;
    if (val.length >= 8) strength += 1;
    if (/[A-Z]/.test(val) && /[a-z]/.test(val)) strength += 1;
    if (/[0-9]/.test(val) && /[^A-Za-z0-9]/.test(val)) strength += 1;
    setPasswordStrength(strength);
  };

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
          
          <div className="space-y-5">
            <div>
              <label className={`block text-sm font-medium ${isDark ? 'text-[#8B949E]' : 'text-[#6B7280]'} mb-1`}>Mot de passe actuel</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} placeholder="••••••••" className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#D81B60] focus:border-[#D81B60] transition-colors outline-none pr-10 ${isDark ? 'bg-[#0D1117] border-[#30363D] text-white placeholder-[#6E7681]' : 'bg-[#F8F9FA] border-[#E1E4E8] text-[#1A1A2E] placeholder-[#9CA3AF]'}`} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-[#9CA3AF] dark:text-[#6E7681] hover:text-[#1A1A2E] dark:hover:text-white">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <div>
              <label className={`block text-sm font-medium ${isDark ? 'text-[#8B949E]' : 'text-[#6B7280]'} mb-1`}>Nouveau mot de passe</label>
              <div className="relative">
                <input type={showNewPassword ? "text" : "password"} onChange={handlePasswordChange} placeholder="••••••••" className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#D81B60] focus:border-[#D81B60] transition-colors outline-none pr-10 ${isDark ? 'bg-[#0D1117] border-[#30363D] text-white placeholder-[#6E7681]' : 'bg-[#F8F9FA] border-[#E1E4E8] text-[#1A1A2E] placeholder-[#9CA3AF]'}`} />
                <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="absolute right-3 top-2.5 text-[#9CA3AF] dark:text-[#6E7681] hover:text-[#1A1A2E] dark:hover:text-white">
                  {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {/* Strength Indicator */}
              <div className="mt-2 flex gap-1 h-1.5">
                <div className={`flex-1 rounded-full transition-colors ${passwordStrength >= 1 ? 'bg-red-500' : isDark ? 'bg-[#30363D]' : 'bg-gray-200'}`}></div>
                <div className={`flex-1 rounded-full transition-colors ${passwordStrength >= 2 ? 'bg-yellow-500' : isDark ? 'bg-[#30363D]' : 'bg-gray-200'}`}></div>
                <div className={`flex-1 rounded-full transition-colors ${passwordStrength >= 3 ? 'bg-green-500' : isDark ? 'bg-[#30363D]' : 'bg-gray-200'}`}></div>
              </div>
            </div>
            <div className="pt-2">
              <button type="button" className="text-sm font-bold text-[#1976D2] hover:text-blue-700 transition-colors">
                Mettre à jour le mot de passe
              </button>
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

        {/* Zone de Danger (Discrète) */}
        <div className="mt-16 pt-8 border-t border-[#E1E4E8] dark:border-[#30363D] flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
          <h2 className="text-sm font-bold text-[#6B7280] dark:text-[#8B949E] mb-2 flex items-center gap-1.5">
            <Trash2 className="w-4 h-4" /> Zone de danger
          </h2>
          
          {!showDeleteConfirm ? (
            <button 
              type="button" 
              onClick={() => setShowDeleteConfirm(true)}
              className="text-xs text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors underline underline-offset-2"
            >
              Supprimer définitivement mon compte
            </button>
          ) : (
            <div className="w-full max-w-sm mt-2 p-4 rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-900/10 flex flex-col gap-3">
              <p className="text-xs text-red-600 dark:text-red-400 font-medium text-center">
                Action irréversible. Pour confirmer, veuillez entrer votre mot de passe :
              </p>
              <input 
                type="password"
                value={deletePassword}
                onChange={(e) => setDeletePassword(e.target.value)}
                placeholder="Votre mot de passe"
                className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none ${
                  isDark ? 'bg-[#0D1117] border-red-900/50 text-white placeholder-[#6E7681]' : 'bg-white border-red-200 text-[#1A1A2E] placeholder-[#9CA3AF]'
                }`}
              />
              <div className="flex gap-2 justify-center mt-1">
                <button 
                  type="button"
                  onClick={() => {
                    setShowDeleteConfirm(false);
                    setDeletePassword('');
                  }}
                  className="px-3 py-1.5 text-xs font-bold text-[#6B7280] dark:text-[#8B949E] hover:bg-[#E1E4E8] dark:hover:bg-[#30363D] rounded-lg transition-colors"
                >
                  Annuler
                </button>
                <button 
                  type="button"
                  onClick={() => {
                    if (deletePassword) {
                      addToast({ type: 'error', title: 'Action non disponible', message: 'Veuillez contacter le support pour supprimer votre compte.' });
                      setShowDeleteConfirm(false);
                      setDeletePassword('');
                    } else {
                      addToast({ type: 'error', title: 'Erreur', message: 'Mot de passe requis.' });
                    }
                  }}
                  className="px-3 py-1.5 text-xs font-bold bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                >
                  Confirmer la suppression
                </button>
              </div>
            </div>
          )}
        </div>

      </form>
    </div>
  );
}
