import { useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Shield, Trash2, Monitor, Eye, EyeOff, RefreshCw, LogOut, Star, ChevronDown, ChevronRight, Camera, User, Target, Download, Globe, MessageSquare, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { useUser } from '../../contexts/UserContext';
import { useAuth } from '../../contexts/AuthContext';
import { useToast } from '../../contexts/ToastContext';
import { GrandFrereGuide } from '../../components/ui/GrandFrereGuide';
import { Toggle } from '../../components/ui/system';

/** Version marketing de l'app (affichée dans « À propos »). */
const APP_VERSION = 'v2.4.0';

const SERIE_LABELS: Record<string, string> = {
  '3eme': '3ᵉ (Brevet)',
  '2nde': 'Seconde',
  '1ere': 'Première',
  'terminale-c': 'Terminale C',
  'terminale-d': 'Terminale D',
  'terminale-a': 'Terminale A',
};

/** Étiquette de section en petites capitales (overline), cf. maquette #3. */
function SectionLabel({ children }: { children: ReactNode }) {
  const { palette } = useTheme();
  return (
    <p
      className="text-[11px] font-bold uppercase tracking-[0.1em] mb-2.5 ml-1 font-poppins"
      style={{ color: palette.ink3 }}
    >
      {children}
    </p>
  );
}

/** Carte de réglages : surface bg2, bord line, rayon 20, lignes à l'intérieur. */
function SettingsCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { palette } = useTheme();
  return (
    <div
      className={`rounded-[20px] border px-3.5 transition-colors ${className}`}
      style={{ background: palette.bg2, borderColor: palette.line }}
    >
      {children}
    </div>
  );
}

/** Ligne de réglage : tuile d'icône colorée + titre/sous-titre + contenu à droite. */
function Row({
  iconBg, icon, title, subtitle, right, onClick, divider = false,
}: {
  iconBg: string;
  icon: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  right?: ReactNode;
  onClick?: () => void;
  divider?: boolean;
}) {
  const { palette } = useTheme();
  const Tag: any = onClick ? 'button' : 'div';
  return (
    <>
      {divider && <div className="h-px ml-[45px]" style={{ background: palette.line }} />}
      <Tag
        type={onClick ? 'button' : undefined}
        onClick={onClick}
        className={`w-full flex items-center gap-3.5 py-2.5 text-left ${onClick ? 'cursor-pointer' : ''}`}
      >
        <span
          className="w-8 h-8 rounded-[9px] flex items-center justify-center shrink-0"
          style={{ background: iconBg }}
        >
          {icon}
        </span>
        <span className="flex-1 min-w-0">
          <span className="block text-[15px] font-semibold font-poppins truncate" style={{ color: palette.ink }}>{title}</span>
          {subtitle && <span className="block text-[12px] font-poppins" style={{ color: palette.ink2 }}>{subtitle}</span>}
        </span>
        {right && <span className="shrink-0 flex items-center">{right}</span>}
      </Tag>
    </>
  );
}

/** Chevron de navigation (lignes qui mènent vers une autre page). */
function NavChevron() {
  const { palette } = useTheme();
  return <ChevronRight className="w-[18px] h-[18px]" strokeWidth={2.4} style={{ color: palette.ink3 }} />;
}

/** Valeur à droite d'une ligne (pastille « 320 Mo » ou texte « Français »). */
function RowValue({ children, pill = false }: { children: ReactNode; pill?: boolean }) {
  const { palette } = useTheme();
  if (pill) {
    return (
      <span className="text-[11px] font-bold font-poppins px-2.5 py-1 rounded-full mr-1.5" style={{ color: palette.ink3, background: palette.bg3 }}>
        {children}
      </span>
    );
  }
  return <span className="text-[13px] font-medium font-poppins mr-1.5" style={{ color: palette.ink3 }}>{children}</span>;
}

export function Settings() {
  const { theme, toggleTheme, visualStyle, setVisualStyle, typeSet, setTypeSet, palette } = useTheme();
  const { pseudo, level, currentStreak, levelString, photoURL } = useUser();
  const { logout } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [revisionReminders, setRevisionReminders] = useState(false);

  const [appearanceOpen, setAppearanceOpen] = useState(true);
  const [securityOpen, setSecurityOpen] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');

  const serie = SERIE_LABELS[levelString] || levelString;
  const initial = (pseudo || 'E').trim().charAt(0).toUpperCase();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    let strength = 0;
    if (val.length >= 8) strength += 1;
    if (/[A-Z]/.test(val) && /[a-z]/.test(val)) strength += 1;
    if (/[0-9]/.test(val) && /[^A-Za-z0-9]/.test(val)) strength += 1;
    setPasswordStrength(strength);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      addToast({ type: 'error', title: 'Erreur', message: 'Impossible de te déconnecter. Réessaie.' });
    }
  };

  return (
    <div className="max-w-2xl mx-auto animate-fade-in-up pb-24 px-4 pt-5 md:pt-8 transition-colors">
      {/* En-tête */}
      <h1 className="text-[26px] font-extrabold tracking-tight mb-4" style={{ color: palette.ink, fontFamily: palette.display }}>
        Paramètres
      </h1>

      {/* Carte profil */}
      <div className="flex flex-col items-center text-center pb-5">
        <div className="relative w-[86px] h-[86px]">
          <div
            className="w-[86px] h-[86px] rounded-full flex items-center justify-center overflow-hidden"
            style={{ background: palette.heroBg, color: '#fff', boxShadow: `0 12px 30px ${palette.heroShadow}` }}
          >
            {photoURL
              ? <img src={photoURL} alt={pseudo} className="w-full h-full object-cover" />
              : <span className="text-[32px] font-extrabold" style={{ fontFamily: palette.display }}>{initial}</span>}
          </div>
          <div
            className="absolute -right-0.5 -bottom-0.5 w-[30px] h-[30px] rounded-full flex items-center justify-center"
            style={{ background: palette.accent, border: `3px solid ${palette.bg}` }}
          >
            <Camera className="w-3.5 h-3.5" style={{ color: '#fff' }} />
          </div>
        </div>
        <div className="text-[22px] font-extrabold mt-3 leading-tight" style={{ color: palette.ink, fontFamily: palette.display }}>
          {pseudo}
        </div>
        <div className="text-[13px] font-medium mt-0.5" style={{ color: palette.ink2 }}>
          {serie} · @{(pseudo || 'eleve').toLowerCase().replace(/\s+/g, '')}
        </div>
        <div className="flex gap-2 mt-3 flex-wrap justify-center">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold font-poppins"
            style={{ background: palette.accentSoft, color: palette.accent }}
          >
            <Star className="w-3 h-3" style={{ fill: 'currentColor' }} />
            Niveau {level.level} · {level.title}
          </span>
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold font-poppins"
            style={{ background: palette.flameBg, color: palette.flame }}
          >
            🔥 {currentStreak} {currentStreak > 1 ? 'jours' : 'jour'}
          </span>
        </div>
      </div>

      <GrandFrereGuide
        id="settings"
        message="Ton espace, tes règles. Règle l'apparence, tes rappels et ta sécurité — tout s'applique en direct."
      />

      {/* ============ PERSONNALISATION ============ */}
      <div className="mt-6">
        <SectionLabel>Personnalisation</SectionLabel>
        <SettingsCard>
          <Row
            iconBg={palette.accent}
            icon={<Monitor className="w-[17px] h-[17px]" style={{ color: '#fff' }} strokeWidth={2.2} />}
            title="Apparence"
            subtitle="Thème, ambiance, typographie"
            onClick={() => setAppearanceOpen(o => !o)}
            right={
              <motion.span animate={{ rotate: appearanceOpen ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ color: palette.ink3 }}>
                <ChevronDown className="w-[18px] h-[18px]" strokeWidth={2.4} />
              </motion.span>
            }
          />
          {appearanceOpen && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div className="h-px mb-3.5" style={{ background: palette.line }} />

              {/* Thème de couleur */}
              <p className="text-[12px] font-semibold mb-2.5" style={{ color: palette.ink2 }}>Thème de couleur</p>
              <div className="flex gap-2.5 mb-4">
                <button
                  type="button"
                  id="btn-style-focus"
                  onClick={() => setVisualStyle('focus')}
                  className="flex-1 flex items-center justify-between px-3 py-2.5 rounded-[14px] border-2 transition-all"
                  style={visualStyle === 'focus' ? { borderColor: palette.accent, background: palette.accentSoft } : { borderColor: palette.line, background: 'transparent' }}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-[34px] h-[34px] rounded-[10px] shrink-0" style={{ background: 'linear-gradient(135deg,#1976D2,#1A3557)' }} />
                    <span className="text-left">
                      <span className="block text-[13px] font-bold" style={{ color: palette.ink }}>Focus</span>
                      <span className="block text-[10px] font-medium" style={{ color: palette.ink3 }}>Bleu, calme</span>
                    </span>
                  </span>
                  <span className="w-3 h-3 rounded-full shrink-0" style={{ background: visualStyle === 'focus' ? palette.accent : palette.line }} />
                </button>
                <button
                  type="button"
                  id="btn-style-vibrant"
                  onClick={() => setVisualStyle('studio')}
                  className="flex-1 flex items-center justify-between px-3 py-2.5 rounded-[14px] border-2 transition-all"
                  style={visualStyle === 'studio' ? { borderColor: '#D81B60', background: 'rgba(216,27,96,0.07)' } : { borderColor: palette.line, background: 'transparent' }}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-[34px] h-[34px] rounded-[10px] shrink-0" style={{ background: 'linear-gradient(135deg,#E6007A,#7B2FF7)' }} />
                    <span className="text-left">
                      <span className="block text-[13px] font-bold" style={{ color: palette.ink }}>Studio</span>
                      <span className="block text-[10px] font-medium" style={{ color: palette.ink3 }}>Magenta, vif</span>
                    </span>
                  </span>
                  <span className="w-3 h-3 rounded-full shrink-0" style={{ background: visualStyle === 'studio' ? '#D81B60' : palette.line }} />
                </button>
              </div>

              {/* Ambiance */}
              <p className="text-[12px] font-semibold mb-2.5" style={{ color: palette.ink2 }}>Ambiance</p>
              <div className="inline-flex rounded-full p-1 border mb-4" style={{ background: palette.bg3, borderColor: palette.line }}>
                <button
                  type="button"
                  id="btn-theme-light"
                  onClick={() => theme !== 'light' && toggleTheme()}
                  className="px-4 py-1.5 rounded-full text-[13px] font-bold transition-all"
                  style={theme === 'light' ? { background: palette.accent2, color: '#fff' } : { background: 'transparent', color: palette.ink3 }}
                >
                  ☀︎ Clair
                </button>
                <button
                  type="button"
                  id="btn-theme-dark"
                  onClick={() => theme !== 'dark' && toggleTheme()}
                  className="px-4 py-1.5 rounded-full text-[13px] font-bold transition-all"
                  style={theme === 'dark' ? { background: palette.accent2, color: '#fff' } : { background: 'transparent', color: palette.ink3 }}
                >
                  ☾ Sombre
                </button>
              </div>

              {/* Style typographique */}
              <p className="text-[12px] font-semibold mb-2.5" style={{ color: palette.ink2 }}>Style typographique</p>
              <div className="flex flex-col gap-2">
                {([
                  { key: 'net', label: 'Net', hint: 'Poppins · interface épurée', display: "'Poppins',sans-serif" },
                  { key: 'editorial', label: 'Éditorial', hint: 'Playfair · Newsreader, chaleureux', display: "'Playfair Display',serif" },
                  { key: 'moderne', label: 'Moderne', hint: 'Space Grotesk · Manrope, premium', display: "'Space Grotesk',sans-serif" },
                ] as const).map((opt) => {
                  const active = typeSet === opt.key;
                  return (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => setTypeSet(opt.key)}
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-[14px] border-2 transition-all text-left"
                      style={active ? { borderColor: palette.accent, background: palette.accentSoft } : { borderColor: palette.line, background: 'transparent' }}
                    >
                      <span>
                        <span className="block text-[14px] font-bold" style={{ fontFamily: opt.display, color: active ? palette.accent : palette.ink }}>{opt.label}</span>
                        <span className="block text-[11px] font-medium" style={{ color: palette.ink3 }}>{opt.hint}</span>
                      </span>
                      <span className="w-3 h-3 rounded-full shrink-0" style={{ background: active ? palette.accent : palette.line }} />
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
          <div className="pb-2" />
        </SettingsCard>
      </div>

      {/* ============ PRÉFÉRENCES ============ */}
      <div className="mt-5">
        <SectionLabel>Préférences</SectionLabel>
        <SettingsCard>
          <Row
            iconBg="#E6A700"
            icon={<Bell className="w-[17px] h-[17px]" style={{ color: '#fff' }} strokeWidth={2.2} />}
            title="Notifications push"
            subtitle="Forum & rappels de cours"
            right={<Toggle checked={notificationsEnabled} onChange={setNotificationsEnabled} aria-label="Notifications push" />}
          />
          <Row
            divider
            iconBg="#E6007A"
            icon={<RefreshCw className="w-[17px] h-[17px]" style={{ color: '#fff' }} strokeWidth={2.2} />}
            title="Rappels de révision"
            subtitle="Répétition espacée (flashcards)"
            right={<Toggle checked={revisionReminders} onChange={setRevisionReminders} aria-label="Rappels de révision" />}
          />
        </SettingsCard>
      </div>

      {/* ============ MON COMPTE ============ */}
      <div className="mt-5">
        <SectionLabel>Mon compte</SectionLabel>
        <SettingsCard>
          <Row
            iconBg="#1976D2"
            icon={<User className="w-[17px] h-[17px]" style={{ color: '#fff' }} strokeWidth={2.2} />}
            title="Compte"
            subtitle="Numéro, pseudo, niveau, lycée"
            onClick={() => navigate('/dashboard/profile')}
            right={<NavChevron />}
          />
          <Row
            divider
            iconBg="#E6007A"
            icon={<Target className="w-[17px] h-[17px]" style={{ color: '#fff' }} strokeWidth={2.2} />}
            title="Objectifs & notes"
            subtitle="Mention visée, moyenne cible"
            onClick={() => navigate('/dashboard/objectifs')}
            right={<NavChevron />}
          />
          <Row
            divider
            iconBg="#2E9E5B"
            icon={<Shield className="w-[17px] h-[17px]" style={{ color: '#fff' }} strokeWidth={2.2} />}
            title="Confidentialité & sécurité"
            subtitle="Mot de passe, accès au compte"
            onClick={() => setSecurityOpen(o => !o)}
            right={
              <motion.span animate={{ rotate: securityOpen ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ color: palette.ink3 }}>
                <ChevronDown className="w-[18px] h-[18px]" strokeWidth={2.4} />
              </motion.span>
            }
          />
          {securityOpen && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div className="h-px mb-4" style={{ background: palette.line }} />
              <div className="space-y-4 pb-2">
                <div>
                  <label className="block text-[12px] font-semibold mb-1.5" style={{ color: palette.ink2 }}>Mot de passe actuel</label>
                  <div className="relative">
                    <input type={showPassword ? 'text' : 'password'} placeholder="••••••••" className="w-full px-3.5 py-2.5 border rounded-[14px] focus:outline-none transition-colors pr-10 text-sm" style={{ background: palette.bg, borderColor: palette.line, color: palette.ink }} />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 opacity-60 hover:opacity-100 transition-opacity" style={{ color: palette.ink3 }}>
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] font-semibold mb-1.5" style={{ color: palette.ink2 }}>Nouveau mot de passe</label>
                  <div className="relative">
                    <input type={showNewPassword ? 'text' : 'password'} onChange={handlePasswordChange} placeholder="••••••••" className="w-full px-3.5 py-2.5 border rounded-[14px] focus:outline-none transition-colors pr-10 text-sm" style={{ background: palette.bg, borderColor: palette.line, color: palette.ink }} />
                    <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="absolute right-3 top-2.5 opacity-60 hover:opacity-100 transition-opacity" style={{ color: palette.ink3 }}>
                      {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <div className="mt-2 flex gap-1 h-1.5">
                    <div className="flex-1 rounded-full transition-colors" style={{ background: passwordStrength >= 1 ? palette.warnBar : palette.line }} />
                    <div className="flex-1 rounded-full transition-colors" style={{ background: passwordStrength >= 2 ? palette.flame : palette.line }} />
                    <div className="flex-1 rounded-full transition-colors" style={{ background: passwordStrength >= 3 ? palette.tipBar : palette.line }} />
                  </div>
                </div>
                <button type="button" className="text-sm font-bold transition-colors hover:opacity-80" style={{ color: palette.accent }}>
                  Mettre à jour le mot de passe
                </button>
              </div>
            </motion.div>
          )}
        </SettingsCard>
      </div>

      {/* ============ APPLICATION ============ */}
      <div className="mt-5">
        <SectionLabel>Application</SectionLabel>
        <SettingsCard>
          <Row
            iconBg="#5B5BD6"
            icon={<Download className="w-[17px] h-[17px]" style={{ color: '#fff' }} strokeWidth={2.2} />}
            title="Cours hors-ligne"
            subtitle="Téléchargements & stockage"
            onClick={() => addToast({ type: 'info', title: 'Bientôt disponible', message: 'Le mode hors-ligne arrive prochainement.' })}
            right={<><RowValue pill>Bientôt</RowValue><NavChevron /></>}
          />
          <Row
            divider
            iconBg="#14A6A6"
            icon={<Globe className="w-[17px] h-[17px]" style={{ color: '#fff' }} strokeWidth={2.2} />}
            title="Langue"
            onClick={() => addToast({ type: 'info', title: 'Une seule langue pour l\'instant', message: 'EDUCTOME est disponible en français.' })}
            right={<><RowValue>Français</RowValue><NavChevron /></>}
          />
          <Row
            divider
            iconBg="#3BA0E6"
            icon={<MessageSquare className="w-[17px] h-[17px]" style={{ color: '#fff' }} strokeWidth={2.2} />}
            title="Aide & Grand Frère"
            subtitle="Support, questions fréquentes"
            onClick={() => navigate('/forum')}
            right={<NavChevron />}
          />
          <Row
            divider
            iconBg="#8A94A6"
            icon={<Info className="w-[17px] h-[17px]" style={{ color: '#fff' }} strokeWidth={2.2} />}
            title="À propos"
            onClick={() => navigate('/a-propos')}
            right={<><RowValue>{APP_VERSION}</RowValue><NavChevron /></>}
          />
        </SettingsCard>
      </div>

      {/* ============ DÉCONNEXION ============ */}
      <div className="mt-5">
        <SettingsCard>
          <Row
            iconBg="#E5484D"
            icon={<LogOut className="w-[17px] h-[17px]" style={{ color: '#fff' }} strokeWidth={2.2} />}
            title={<span style={{ color: '#E5484D' }}>Déconnexion</span>}
            onClick={handleLogout}
          />
        </SettingsCard>
      </div>

      {/* ============ ZONE DE DANGER ============ */}
      <div className="mt-8">
        <SectionLabel>Zone de danger</SectionLabel>
        <div
          className="rounded-[20px] border px-3.5 transition-colors"
          style={{ background: palette.warnBg, borderColor: `${palette.warnBar}33` }}
        >
          <Row
            iconBg={palette.warnBar}
            icon={<Trash2 className="w-[17px] h-[17px]" style={{ color: '#fff' }} strokeWidth={2.2} />}
            title={<span style={{ color: palette.warnBar }}>Supprimer mon compte</span>}
            subtitle={<span style={{ color: palette.warnInk }}>Action définitive et irréversible</span>}
            onClick={() => setShowDeleteConfirm(o => !o)}
            right={
              <motion.span animate={{ rotate: showDeleteConfirm ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ color: palette.warnBar }}>
                <ChevronDown className="w-[18px] h-[18px]" strokeWidth={2.4} />
              </motion.span>
            }
          />
          {showDeleteConfirm && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div className="h-px mb-3.5" style={{ background: `${palette.warnBar}26` }} />
              <div className="flex flex-col gap-3 pb-4">
                <p className="text-xs font-medium" style={{ color: palette.warnInk }}>
                  Pour confirmer, entre ton mot de passe. Cette action supprime définitivement ta progression.
                </p>
                <input
                  type="password"
                  value={deletePassword}
                  onChange={(e) => setDeletePassword(e.target.value)}
                  placeholder="Ton mot de passe"
                  className="w-full px-3.5 py-2.5 text-sm border rounded-[14px] focus:outline-none transition-colors"
                  style={{ background: palette.bg, borderColor: `${palette.warnBar}40`, color: palette.ink }}
                />
                <div className="flex gap-2 justify-end mt-0.5">
                  <button
                    type="button"
                    onClick={() => { setShowDeleteConfirm(false); setDeletePassword(''); }}
                    className="px-3.5 py-2 text-xs font-bold rounded-[12px] transition-colors hover:bg-black/5"
                    style={{ color: palette.ink2 }}
                  >
                    Annuler
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (deletePassword) {
                        addToast({ type: 'error', title: 'Action non disponible', message: 'Contacte le support pour supprimer ton compte.' });
                        setShowDeleteConfirm(false);
                        setDeletePassword('');
                      } else {
                        addToast({ type: 'error', title: 'Erreur', message: 'Mot de passe requis.' });
                      }
                    }}
                    className="px-3.5 py-2 text-xs font-bold text-white rounded-[12px] transition-colors"
                    style={{ background: palette.warnBar }}
                  >
                    Supprimer définitivement
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
