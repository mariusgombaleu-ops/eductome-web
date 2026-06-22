import { useState } from 'react';
import { Bell, Shield, Smartphone, Trash2, Save, Monitor, Eye, EyeOff, Sparkles, Focus } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useToast } from '../../contexts/ToastContext';
import { GrandFrereGuide } from '../../components/ui/GrandFrereGuide';

export function Settings() {
  const { theme, toggleTheme, visualStyle, setVisualStyle, palette } = useTheme();
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

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up pb-20 p-4 md:p-8 transition-colors">
      <div>
        <h1 className="text-3xl font-playfair font-bold mb-2" style={{ color: palette.ink }}>Paramètres</h1>
        <p className="mb-6" style={{ color: palette.ink2 }}>Configurez votre espace d'apprentissage selon vos préférences.</p>
        <GrandFrereGuide 
          id="settings"
          message="Ton espace, tes règles. Configure ton profil pour qu'il te ressemble. Et n'oublie pas : un profil bien rempli, c'est le début de l'organisation !"
        />
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        
        {/* Section Apparence */}
        <div className="p-6 rounded-[28px] shadow-sm border transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
          <h2 className="text-lg font-bold mb-5 flex items-center gap-2" style={{ color: palette.ink }}>
            <Monitor className="w-5 h-5 text-[#1976D2]" /> Apparence
          </h2>

          {/* Style visuel */}
          <p className="text-sm font-semibold mb-3" style={{ color: palette.ink2 }}>Style d'interface</p>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            {/* Mode Vibrant */}
            <button
              type="button"
              id="btn-style-vibrant"
              onClick={() => setVisualStyle('studio')}
              className="flex-1 flex items-center justify-between px-4 py-3 rounded-[16px] border-2 transition-all"
              style={
                visualStyle === 'studio'
                  ? { borderColor: '#D81B60', background: 'rgba(216,27,96,0.07)' }
                  : { borderColor: palette.line, background: 'transparent' }
              }
            >
              <div className="flex items-center gap-3">
                <Sparkles
                  className="w-5 h-5"
                  style={{ color: visualStyle === 'studio' ? '#D81B60' : palette.ink2 }}
                />
                <div className="text-left">
                  <div className="font-bold text-sm" style={{ color: visualStyle === 'studio' ? '#D81B60' : palette.ink }}>Studio · Vibrant</div>
                  <div className="text-xs" style={{ color: palette.ink3 }}>Énergique, glassy, glow</div>
                </div>
              </div>
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ background: visualStyle === 'studio' ? '#D81B60' : palette.line }}
              />
            </button>

            {/* Mode Focus */}
            <button
              type="button"
              id="btn-style-focus"
              onClick={() => setVisualStyle('focus')}
              className="flex-1 flex items-center justify-between px-4 py-3 rounded-[16px] border-2 transition-all"
              style={
                visualStyle === 'focus'
                  ? { borderColor: '#1976D2', background: 'rgba(25,118,210,0.07)' }
                  : { borderColor: palette.line, background: 'transparent' }
              }
            >
              <div className="flex items-center gap-3">
                <Focus
                  className="w-5 h-5"
                  style={{ color: visualStyle === 'focus' ? '#1976D2' : palette.ink2 }}
                />
                <div className="text-left">
                  <div className="font-bold text-sm" style={{ color: visualStyle === 'focus' ? '#1976D2' : palette.ink }}>Clair · Focus</div>
                  <div className="text-xs" style={{ color: palette.ink3 }}>Minimal, aéré, calme</div>
                </div>
              </div>
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ background: visualStyle === 'focus' ? '#1976D2' : palette.line }}
              />
            </button>
          </div>

          {/* Ambiance — toujours visible */}
          <p className="text-sm font-semibold mb-3" style={{ color: palette.ink2 }}>Ambiance</p>
          <div
            className="inline-flex rounded-full p-1 border"
            style={{ background: theme === 'dark' ? palette.bg3 : '#fff', borderColor: palette.line }}
          >
            <button
              type="button"
              id="btn-theme-light"
              onClick={() => theme !== 'light' && toggleTheme()}
              className="px-5 py-1.5 rounded-full text-sm font-bold transition-all"
              style={
                theme === 'light'
                  ? { background: '#1A3557', color: '#fff' }
                  : { background: 'transparent', color: palette.ink3 }
              }
            >
              ☀︎ Clair
            </button>
            <button
              type="button"
              id="btn-theme-dark"
              onClick={() => theme !== 'dark' && toggleTheme()}
              className="px-5 py-1.5 rounded-full text-sm font-bold transition-all"
              style={
                theme === 'dark'
                  ? { background: '#1A3557', color: '#fff' }
                  : { background: 'transparent', color: palette.ink3 }
              }
            >
              ☾ Sombre
            </button>
          </div>
        </div>

        {/* Section Notifications */}
        <div className="p-6 rounded-[28px] shadow-sm border transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
          <h2 className="text-lg font-bold mb-6 flex items-center gap-2" style={{ color: palette.ink }}>
            <Bell className="w-5 h-5 text-yellow-500" /> Notifications
          </h2>
          
          <div className="space-y-4">
            <label className="flex items-center justify-between p-4 rounded-[16px] border cursor-pointer hover:bg-black/5 transition-colors" style={{ borderColor: palette.line }}>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-[12px]" style={{ background: palette.bg2 }}>
                  <Smartphone className="w-5 h-5" style={{ color: palette.ink }} />
                </div>
                <div>
                  <div className="font-bold" style={{ color: palette.ink }}>Notifications Push</div>
                  <div className="text-sm" style={{ color: palette.ink2 }}>Recevez des alertes pour le forum et vos cours</div>
                </div>
              </div>
              <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={notificationsEnabled} onChange={(e) => setNotificationsEnabled(e.target.checked)} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#D81B60]"></div>
              </div>
            </label>

            <label className="flex items-center justify-between p-4 rounded-[16px] border cursor-pointer hover:bg-black/5 transition-colors" style={{ borderColor: palette.line }}>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-[12px]" style={{ background: palette.bg2 }}>
                  <Bell className="w-5 h-5" style={{ color: palette.ink }} />
                </div>
                <div>
                  <div className="font-bold" style={{ color: palette.ink }}>Actualités EDUCTOME</div>
                  <div className="text-sm" style={{ color: palette.ink2 }}>Nouveaux tomes, offres et annonces importantes</div>
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
        <div className="p-6 rounded-[28px] shadow-sm border transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
          <h2 className="text-lg font-bold mb-6 flex items-center gap-2" style={{ color: palette.ink }}>
            <Shield className="w-5 h-5 text-green-500" /> Sécurité du Compte
          </h2>
          
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: palette.ink2 }}>Mot de passe actuel</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} placeholder="••••••••" className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:outline-none transition-colors pr-10" style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink, ['--tw-ring-color' as any]: palette.accent }} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 opacity-60 hover:opacity-100 transition-opacity" style={{ color: palette.ink }}>
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: palette.ink2 }}>Nouveau mot de passe</label>
              <div className="relative">
                <input type={showNewPassword ? "text" : "password"} onChange={handlePasswordChange} placeholder="••••••••" className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:outline-none transition-colors pr-10" style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink, ['--tw-ring-color' as any]: palette.accent }} />
                <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="absolute right-3 top-2.5 opacity-60 hover:opacity-100 transition-opacity" style={{ color: palette.ink }}>
                  {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {/* Strength Indicator */}
              <div className="mt-2 flex gap-1 h-1.5">
                <div className="flex-1 rounded-full transition-colors" style={{ background: passwordStrength >= 1 ? '#ef4444' : palette.line }}></div>
                <div className="flex-1 rounded-full transition-colors" style={{ background: passwordStrength >= 2 ? '#eab308' : palette.line }}></div>
                <div className="flex-1 rounded-full transition-colors" style={{ background: passwordStrength >= 3 ? '#22c55e' : palette.line }}></div>
              </div>
            </div>
            <div className="pt-2">
              <button type="button" className="text-sm font-bold transition-colors hover:opacity-80" style={{ color: palette.accent }}>
                Mettre à jour le mot de passe
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button 
            type="submit" 
            className="flex items-center gap-2 text-white px-8 py-3 rounded-[16px] font-bold shadow-md transition-all hover:scale-[1.02]"
            style={{ background: palette.accent, boxShadow: `0 4px 14px ${palette.accent}40` }}
          >
            <Save className="w-5 h-5" /> Enregistrer mes paramètres
          </button>
        </div>

        {/* Zone de Danger (Discrète) */}
        <div className="mt-16 pt-8 border-t flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity" style={{ borderColor: palette.line }}>
          <h2 className="text-sm font-bold mb-2 flex items-center gap-1.5" style={{ color: palette.ink2 }}>
            <Trash2 className="w-4 h-4" /> Zone de danger
          </h2>
          
          {!showDeleteConfirm ? (
            <button 
              type="button" 
              onClick={() => setShowDeleteConfirm(true)}
              className="text-xs text-red-500 hover:text-red-700 transition-colors underline underline-offset-2"
            >
              Supprimer définitivement mon compte
            </button>
          ) : (
            <div className="w-full max-w-sm mt-2 p-4 rounded-[16px] border bg-red-50/50 flex flex-col gap-3" style={{ borderColor: '#ef444440' }}>
              <p className="text-xs text-red-600 font-medium text-center">
                Action irréversible. Pour confirmer, veuillez entrer votre mot de passe :
              </p>
              <input 
                type="password"
                value={deletePassword}
                onChange={(e) => setDeletePassword(e.target.value)}
                placeholder="Votre mot de passe"
                className="w-full px-3 py-2 text-sm border rounded-[12px] focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink }}
              />
              <div className="flex gap-2 justify-center mt-1">
                <button 
                  type="button"
                  onClick={() => {
                    setShowDeleteConfirm(false);
                    setDeletePassword('');
                  }}
                  className="px-3 py-1.5 text-xs font-bold rounded-[12px] transition-colors hover:bg-black/5"
                  style={{ color: palette.ink2 }}
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
                  className="px-3 py-1.5 text-xs font-bold bg-red-500 hover:bg-red-600 text-white rounded-[12px] transition-colors"
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
