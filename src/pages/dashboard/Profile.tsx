import { Camera, Edit3, Settings, Star, Flame, Award, Book, Key, Calendar, Share2, Copy, ArrowRight, ChevronDown, ChevronRight, Trash2, CheckCircle, Save, RefreshCw, Unlock, Zap, Users, Timer, Lock, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { useUser, USER_LEVELS } from '../../contexts/UserContext';
import { BADGES } from '../../constants/badges';
import { useState, useEffect, useRef, ReactNode } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { RoleBadge } from '../../components/forum/RoleBadge';
import { StudyChart } from '../../components/dashboard/StudyChart';
import { doc, setDoc, updateDoc, collection, query, where, getDocs, onSnapshot } from 'firebase/firestore';
import type { TimetableSlot } from '../../components/types';
import { db } from '../../config/firebase';
import { ImageCropperModal } from '../../components/dashboard/ImageCropperModal';
import { useToast } from '../../contexts/ToastContext';
import { GrandFrereGuide } from '../../components/ui/GrandFrereGuide';

const SERIE_LABELS: Record<string, string> = {
  '3eme': '3ᵉ (Brevet)', '2nde': 'Seconde', '1ere': 'Première',
  'terminale-c': 'Terminale C', 'terminale-d': 'Terminale D', 'terminale-a': 'Terminale A',
};

// Titres des tomes (carnet de notes : afficher un vrai titre plutôt que l'id brut).
const COURSE_TITLES: Record<string, string> = {
  't1-limites': 'Les Limites',
  't2-derivees': 'Les Dérivées',
  't3-primitives': 'Primitives & Intégrales',
  't4-suites': 'Suites Numériques',
  't5-log-expo': 'Logarithme & Exponentielle',
  't6-trigonometrie': 'Fonctions Trigonométriques',
  't7-probabilites': 'Probabilités',
  't8-statistiques': 'Statistiques',
  't9-geometrie-espace': "Géométrie dans l'Espace",
  't10-complexes': 'Nombres Complexes',
  't11-equations-diff': 'Équations Différentielles',
  't12-revisions-bac': 'Révisions BAC',
};

// ──────────────────────────────────────────────────────────────────────────
// Primitives partagées avec Paramètres (même grammaire mobile : sections
// empilées, cartes à lignes, contenu repliable « clic → déroule »).
// ──────────────────────────────────────────────────────────────────────────

/** Étiquette de section en petites capitales (overline). */
function SectionLabel({ children }: { children: ReactNode }) {
  const { palette } = useTheme();
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.1em] mb-2.5 ml-1 font-poppins" style={{ color: palette.ink3 }}>
      {children}
    </p>
  );
}

/** Carte : surface bg2, bord line, rayon 20, lignes à l'intérieur. */
function SettingsCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { palette } = useTheme();
  return (
    <div className={`rounded-[20px] border px-3.5 transition-colors ${className}`} style={{ background: palette.bg2, borderColor: palette.line }}>
      {children}
    </div>
  );
}

/** Ligne : tuile d'icône colorée + titre/sous-titre + contenu à droite. */
function Row({
  iconBg, icon, title, subtitle, right, onClick, divider = false,
}: {
  iconBg: string; icon: ReactNode; title: ReactNode; subtitle?: ReactNode;
  right?: ReactNode; onClick?: () => void; divider?: boolean;
}) {
  const { palette } = useTheme();
  const Tag: any = onClick ? 'button' : 'div';
  return (
    <>
      {divider && <div className="h-px ml-[45px]" style={{ background: palette.line }} />}
      <Tag type={onClick ? 'button' : undefined} onClick={onClick} className={`w-full flex items-center gap-3.5 py-2.5 text-left ${onClick ? 'cursor-pointer' : ''}`}>
        <span className="w-8 h-8 rounded-[9px] flex items-center justify-center shrink-0" style={{ background: iconBg }}>{icon}</span>
        <span className="flex-1 min-w-0">
          <span className="block text-[15px] font-semibold font-poppins truncate" style={{ color: palette.ink }}>{title}</span>
          {subtitle && <span className="block text-[12px] font-poppins" style={{ color: palette.ink2 }}>{subtitle}</span>}
        </span>
        {right && <span className="shrink-0 flex items-center">{right}</span>}
      </Tag>
    </>
  );
}

/** Bouton d'action translucide posé sur la photo d'en-tête (façon Telegram). */
function OverlayButton({ icon, label, onClick }: { icon: ReactNode; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 rounded-[14px] transition-all hover:bg-white/25 active:scale-[0.98] text-white"
      style={{ background: 'rgba(255,255,255,.15)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.22)' }}
    >
      {icon}
      <span className="text-[12px] font-semibold font-poppins">{label}</span>
    </button>
  );
}

/** Ligne d'info façon Telegram : valeur en gros, libellé discret dessous. */
function InfoRow({ value, label, divider = false }: { value: ReactNode; label: string; divider?: boolean }) {
  const { palette } = useTheme();
  return (
    <>
      {divider && <div className="h-px" style={{ background: palette.line }} />}
      <div className="py-3">
        <div className="text-[15px] font-semibold font-poppins" style={{ color: palette.ink }}>{value}</div>
        <div className="text-[12px] mt-0.5 font-poppins" style={{ color: palette.ink3 }}>{label}</div>
      </div>
    </>
  );
}

/** Carte repliable : en-tête (Row + chevron) → contenu déroulant. */
function CollapsibleCard({
  iconBg, icon, title, subtitle, open, onToggle, children, tone,
}: {
  iconBg: string; icon: ReactNode; title: ReactNode; subtitle?: ReactNode;
  open: boolean; onToggle: () => void; children: ReactNode; tone?: 'danger';
}) {
  const { palette } = useTheme();
  return (
    <div
      className="rounded-[20px] border px-3.5 transition-colors"
      style={{ background: tone === 'danger' ? palette.warnBg : palette.bg2, borderColor: tone === 'danger' ? `${palette.warnBar}33` : palette.line }}
    >
      <Row
        iconBg={iconBg}
        icon={icon}
        title={title}
        subtitle={subtitle}
        onClick={onToggle}
        right={
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ color: palette.ink3 }}>
            <ChevronDown className="w-[18px] h-[18px]" strokeWidth={2.4} />
          </motion.span>
        }
      />
      {open && (
        <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, ease: 'easeOut' }} style={{ overflow: 'hidden' }}>
          <div className="h-px mb-3.5" style={{ background: palette.line }} />
          <div className="pb-3.5">{children}</div>
        </motion.div>
      )}
    </div>
  );
}

export const Profile = () => {
  const { palette } = useTheme();
  const { xp, level, unlockedBadges, unlockedCourses, resetUser, unlockEverything, addXpDev, pseudo, levelString, highschool, favoriteSubject, goal, userRole, isAdmin, photoURL, currentStreak, devSimulerGratuit, devSimulerFamille, devSetStreak, devUnlockCourseTest } = useUser();
  const serie = SERIE_LABELS[levelString] || levelString;
  const { currentUser } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();
  const getTodayKey = () => { const n = new Date(); return `${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,'0')}-${String(n.getDate()).padStart(2,'0')}`; };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showCropModal, setShowCropModal] = useState(false);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);

  const [savedNotes, setSavedNotes] = useState<{courseId: string, content: string}[]>([]);
  const [couponCode, setCouponCode] = useState('');
  const [couponStatus, setCouponStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const [relaisNom, setRelaisNom] = useState('');
  const [generatedRelaisCode, setGeneratedRelaisCode] = useState('');
  const [generatingRelaisCode, setGeneratingRelaisCode] = useState(false);
  const [relaisCodeCopied, setRelaisCodeCopied] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [timetableSlots, setTimetableSlots] = useState<TimetableSlot[]>([]);

  const [formPseudo, setFormPseudo] = useState(pseudo);
  const [formLevel, setFormLevel] = useState(levelString);
  const [formSubject, setFormSubject] = useState(favoriteSubject || "Mathématiques");
  const [formGoal, setFormGoal] = useState(goal || "Mention Bien");
  const [formHighschool, setFormHighschool] = useState(highschool || "");

  // État des sections repliables (tout fermé par défaut → page compacte).
  const [editOpen, setEditOpen] = useState(false);
  const [progressionOpen, setProgressionOpen] = useState(false);
  const [studyOpen, setStudyOpen] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);
  const [timetableOpen, setTimetableOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [relaisOpen, setRelaisOpen] = useState(false);
  const [devOpen, setDevOpen] = useState(false);

  useEffect(() => {
    setFormPseudo(pseudo);
    setFormLevel(levelString);
    setFormSubject(favoriteSubject || "Mathématiques");
    setFormGoal(goal || "Mention Bien");
    setFormHighschool(highschool || "");
  }, [pseudo, levelString, favoriteSubject, goal, highschool]);

  // Emploi du temps : on récupère les créneaux pour afficher un aperçu du jour.
  useEffect(() => {
    if (!currentUser) return;
    const unsub = onSnapshot(
      collection(db, 'users', currentUser.uid, 'timetable'),
      (snap) => setTimetableSlots(snap.docs.map(d => d.data() as TimetableSlot))
    );
    return () => unsub();
  }, [currentUser]);

  const DAY_NAMES = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const todayName = DAY_NAMES[new Date().getDay()];
  const todaySlots = [...timetableSlots]
    .filter(s => s.dayOfWeek === todayName)
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  const nextLevelData = USER_LEVELS.find(l => l.level === level.level + 1);
  const nextLevelXp = nextLevelData ? nextLevelData.minXp : level.minXp;
  const currentLevelXp = level.minXp;
  const progress = nextLevelXp > currentLevelXp ? ((xp - currentLevelXp) / (nextLevelXp - currentLevelXp)) * 100 : 100;

  const username = `@${(pseudo || 'eleve').toLowerCase().replace(/\s+/g, '')}`;

  const handleGenerateRelaisCode = async () => {
    if (!relaisNom.trim()) return;
    setGeneratingRelaisCode(true);
    try {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let code = '';
      let unique = false;
      while (!unique) {
        code = Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
        const snap = await getDocs(query(collection(db, 'relais'), where('code', '==', code)));
        unique = snap.empty;
      }
      await setDoc(doc(db, 'relais', code), {
        uid: '', nom: relaisNom.trim(), code, totalVentes: 0, totalCommission: 0, createdAt: new Date()
      });
      setGeneratedRelaisCode(code);
      setRelaisNom('');
    } catch (err) {
      console.error('Erreur génération code relais:', err);
    } finally {
      setGeneratingRelaisCode(false);
    }
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;
    try {
      await updateDoc(doc(db, 'users', currentUser.uid), {
        pseudo: formPseudo, level: formLevel, favoriteSubject: formSubject, goal: formGoal, highschool: formHighschool
      });
      addToast({ type: 'success', title: 'Profil mis à jour', message: 'Tes informations ont été sauvegardées avec succès.' });
      setEditOpen(false);
    } catch (err: any) {
      console.error(err);
      addToast({ type: 'error', title: 'Erreur', message: 'Impossible de sauvegarder tes informations.' });
    }
  };

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCode.trim()) return;
    setCouponStatus('loading');
    setTimeout(() => {
      if (couponCode.toUpperCase() === 'T1LIMITES2026') {
        const unlockedTomes = JSON.parse(localStorage.getItem('eductome_unlocked_tomes') || '[]');
        if (!unlockedTomes.includes('t1-limites')) {
          unlockedTomes.push('t1-limites');
          localStorage.setItem('eductome_unlocked_tomes', JSON.stringify(unlockedTomes));
        }
        setCouponStatus('success');
      } else {
        setCouponStatus('error');
      }
      setTimeout(() => setCouponStatus('idle'), 3000);
    }, 1500);
  };

  useEffect(() => {
    const courses = JSON.parse(localStorage.getItem('eductome_courses_with_notes') || '[]');
    const notes = courses.map((id: string) => ({
      courseId: id, content: localStorage.getItem(`eductome_course_notes_${id}`) || ''
    })).filter((n: {content: string}) => n.content.trim().length > 0);
    setSavedNotes(notes);
  }, []);

  const handleDeleteNote = (courseId: string) => {
    localStorage.removeItem(`eductome_course_notes_${courseId}`);
    const courses = JSON.parse(localStorage.getItem('eductome_courses_with_notes') || '[]');
    const updatedCourses = courses.filter((id: string) => id !== courseId);
    localStorage.setItem('eductome_courses_with_notes', JSON.stringify(updatedCourses));
    setSavedNotes(prev => prev.filter(n => n.courseId !== courseId));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setSelectedImage(reader.result?.toString() || null);
        setShowCropModal(true);
      });
      reader.readAsDataURL(file);
    }
  };

  const handleCropComplete = async (croppedBase64: string) => {
    if (!currentUser) return;
    try {
      setShowCropModal(false);
      setUploadingPhoto(true);
      await setDoc(doc(db, 'users', currentUser.uid), { photoURL: croppedBase64 }, { merge: true });
      addToast({ type: 'success', title: 'Photo de profil mise à jour', message: 'Ta photo de profil a été mise à jour avec succès.' });
    } catch (error: any) {
      console.error("Error saving photo:", error);
      addToast({ type: 'error', title: 'Erreur', message: `Impossible de mettre à jour: ${error.message || 'Erreur inconnue'}` });
    } finally {
      setUploadingPhoto(false);
      setSelectedImage(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const parentUrl = currentUser ? `${window.location.origin}/parent/${currentUser.uid}` : '';

  const handleCopyLink = async () => {
    if (!parentUrl) return;
    await navigator.clipboard.writeText(parentUrl);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2500);
  };

  const handleNativeShare = async () => {
    if (!parentUrl) return;
    // Appelle la feuille de partage native du téléphone (toutes les apps installées).
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      try {
        await navigator.share({ title: `Progression de ${pseudo} · EDUCTOME`, text: 'Suis ma progression sur EDUCTOME 🚀', url: parentUrl });
      } catch {
        // l'utilisateur a annulé le partage — ne rien faire
      }
    } else {
      // Pas de partage natif (ex. ordinateur) : on ne copie pas en douce, on explique.
      addToast({ type: 'info', title: 'Partage', message: 'Le partage direct s\'ouvre depuis ton téléphone. Sur ordinateur, utilise « Copier le lien ».' });
    }
  };

  const fieldStyle = { background: palette.bg, borderColor: palette.line, color: palette.ink, ['--tw-ring-color' as any]: palette.accent };

  return (
    <div className="max-w-2xl mx-auto animate-fade-in-up pb-24 px-4 pt-5 md:pt-8 transition-colors font-poppins">
      {/* ── En-tête photo plein cadre (façon Telegram) ── */}
      <div className="relative -mt-5 md:-mt-8 -mx-4 overflow-hidden rounded-b-[28px]" style={{ height: 'min(118vw, 520px)' }}>
        {/* Photo plein cadre ou repli dégradé */}
        <div className="absolute inset-0 w-full h-full">
          {photoURL
            ? <img src={photoURL} alt={pseudo} className="w-full h-full object-cover object-center" />
            : <div className="w-full h-full flex items-center justify-center" style={{ background: palette.heroBg }}>
                <span className="text-[88px] font-extrabold text-white/90" style={{ fontFamily: palette.display }}>{(pseudo || 'E').charAt(0).toUpperCase()}</span>
              </div>}
        </div>

        {/* Voile bas pour lisibilité */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,.74), rgba(0,0,0,.25) 45%, transparent)' }} />

        {/* Indicateur d'upload */}
        {uploadingPhoto && (
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,0,0,.45)' }}>
            <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Nom + statut + boutons posés en bas */}
        <div className="absolute inset-x-0 bottom-0 p-4 pointer-events-none">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-[26px] font-extrabold leading-tight text-white" style={{ fontFamily: palette.display, textShadow: '0 2px 14px rgba(0,0,0,.45)' }}>{pseudo}</span>
            <RoleBadge role={userRole} />
          </div>
          <div className="text-[13px] font-medium text-white/85 mb-3.5" style={{ textShadow: '0 1px 8px rgba(0,0,0,.45)' }}>Niveau {level.level} · {level.title}</div>
          <div className="flex gap-2.5 pointer-events-auto">
            <OverlayButton
              icon={<span className="relative inline-flex"><Camera className="w-[20px] h-[20px]" /><span className="absolute -top-1.5 -right-2 text-[13px] font-extrabold leading-none">+</span></span>}
              label="Photo"
              onClick={() => !uploadingPhoto && fileInputRef.current?.click()}
            />
            <OverlayButton icon={<Edit3 className="w-[20px] h-[20px]" />} label="Modifier" onClick={() => setEditOpen(o => !o)} />
            <OverlayButton icon={<Settings className="w-[20px] h-[20px]" />} label="Paramètres" onClick={() => navigate('/dashboard/settings')} />
          </div>
        </div>

        <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleFileChange} />
      </div>

      {/* ── Formulaire d'édition (ouvert par « Modifier ») ── */}
      {editOpen && (
        <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, ease: 'easeOut' }} className="mt-4">
          <SettingsCard className="py-4">
            <form className="space-y-3.5" onSubmit={handleSaveProfile}>
              <div>
                <label className="block text-[12px] font-semibold mb-1.5" style={{ color: palette.ink2 }}>Prénom / Pseudo</label>
                <input type="text" value={formPseudo} onChange={e => setFormPseudo(e.target.value)} className="w-full px-3.5 py-2.5 border rounded-[14px] text-sm focus:ring-2 focus:outline-none transition-colors" style={fieldStyle} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-semibold mb-1.5" style={{ color: palette.ink2 }}>Niveau / Série</label>
                  <select value={formLevel} onChange={e => setFormLevel(e.target.value)} className="w-full px-3.5 py-2.5 border rounded-[14px] text-sm focus:ring-2 focus:outline-none transition-colors" style={fieldStyle}>
                    {Object.entries(SERIE_LABELS).map(([key, label]) => <option key={key} value={key}>{label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[12px] font-semibold mb-1.5" style={{ color: palette.ink2 }}>Matière forte</label>
                  <select value={formSubject} onChange={e => setFormSubject(e.target.value)} className="w-full px-3.5 py-2.5 border rounded-[14px] text-sm focus:ring-2 focus:outline-none transition-colors" style={fieldStyle}>
                    <option>Mathématiques</option><option>Physique-Chimie</option><option>SVT</option><option>Philosophie</option><option>Français</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[12px] font-semibold mb-1.5" style={{ color: palette.ink2 }}>Objectif principal</label>
                <select value={formGoal} onChange={e => setFormGoal(e.target.value)} className="w-full px-3.5 py-2.5 border rounded-[14px] text-sm focus:ring-2 focus:outline-none transition-colors" style={fieldStyle}>
                  <option>Mention Très Bien</option><option>Mention Bien</option><option>Mention Assez Bien</option><option>Avoir le BAC</option>
                </select>
              </div>
              <div>
                <label className="block text-[12px] font-semibold mb-1.5" style={{ color: palette.ink2 }}>Lycée</label>
                <input type="text" value={formHighschool} onChange={e => setFormHighschool(e.target.value)} placeholder="Ex: Lycée Classique d'Abidjan" className="w-full px-3.5 py-2.5 border rounded-[14px] text-sm focus:ring-2 focus:outline-none transition-colors" style={fieldStyle} />
              </div>
              <p className="text-[11px]" style={{ color: palette.ink3 }}>
                Le numéro de téléphone ne peut pas être modifié. <a href="mailto:contact@eductome.ci" className="underline" style={{ color: palette.accent }}>Contacte le support</a> pour en changer.
              </p>
              <div className="flex justify-end pt-1">
                <button type="submit" className="flex items-center gap-2 text-white px-5 py-2.5 rounded-[14px] text-sm font-bold transition-all hover:scale-[1.02]" style={{ background: palette.accent, boxShadow: `0 4px 14px ${palette.accent}40` }}>
                  <Save className="w-4 h-4" /> Enregistrer
                </button>
              </div>
            </form>
          </SettingsCard>
        </motion.div>
      )}

      {/* ── Carte d'infos (style Telegram : valeur + libellé) ── */}
      <div className="mt-5">
        <SectionLabel>Informations</SectionLabel>
        <SettingsCard>
          <InfoRow value={currentUser?.phoneNumber || 'Non renseigné'} label="Mobile · identifiant" />
          <InfoRow divider value={goal || 'Non défini'} label="Objectif au BAC" />
          <InfoRow divider value={serie} label="Niveau scolaire" />
          {highschool && <InfoRow divider value={highschool} label="Établissement" />}
          <InfoRow divider value={favoriteSubject || 'Mathématiques'} label="Matière forte" />
          <InfoRow divider value={username} label="Nom d'utilisateur" />
        </SettingsCard>
      </div>

      <div className="mt-5">
        <GrandFrereGuide
          id="profile"
          message="Ton profil, c'est ton identité de Champion. Avatar, badges, niveau d'XP — fais-en une vraie machine de guerre !"
        />
      </div>

      {/* ── Mon parcours (sections repliables) ── */}
      <div className="mt-5">
        <SectionLabel>Mon parcours</SectionLabel>
        <div className="space-y-2.5">
          {/* Ma progression : carte niveau + tuiles + badges */}
          <CollapsibleCard
            iconBg={palette.accent}
            icon={<Star className="w-[17px] h-[17px]" style={{ color: '#fff' }} strokeWidth={2.2} />}
            title="Ma progression"
            subtitle={`Niveau ${level.level} · ${xp.toLocaleString('fr-FR')} XP · ${unlockedBadges.length} badges`}
            open={progressionOpen}
            onToggle={() => setProgressionOpen(o => !o)}
          >
            {/* Carte niveau premium */}
            <div className="relative overflow-hidden rounded-[18px] p-[16px] mb-3" style={{ background: palette.heroBg, color: '#fff', boxShadow: `0 7px 18px ${palette.heroShadow}, inset 0 1px 0 rgba(255,255,255,.28)` }}>
              <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.10) 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
              <div className="relative flex items-center justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.1em] font-poppins" style={{ background: 'rgba(255,255,255,.16)', border: '1px solid rgba(255,255,255,.18)' }}>
                    <Star className="w-3 h-3" style={{ fill: '#FFD66B', color: '#FFD66B' }} /> Niveau {level.level}
                  </span>
                  <div className="text-[16px] font-extrabold mt-2" style={{ fontFamily: palette.display }}>{level.title}</div>
                </div>
                <div className="text-right">
                  <div className="text-[20px] font-extrabold leading-none" style={{ fontFamily: palette.display, color: '#FFD66B' }}>{xp.toLocaleString('fr-FR')}<span className="text-[11px] font-semibold opacity-85" style={{ color: '#fff' }}> XP</span></div>
                  <div className="text-[10px] font-semibold opacity-80 mt-1">{nextLevelData ? `${Math.max(0, nextLevelXp - xp)} avant niv. ${level.level + 1}` : 'Niveau max 🏆'}</div>
                </div>
              </div>
              <div className="relative mt-3 h-[8px] rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,.2)' }}>
                <div className="h-full rounded-full transition-all duration-700" style={{ width: `${progress}%`, background: '#9FD4FF', boxShadow: '0 0 10px rgba(159,212,255,.6)' }} />
              </div>
            </div>

            {/* 3 tuiles stats */}
            <div className="grid grid-cols-3 gap-2.5 mb-4">
              {[
                { n: currentStreak, label: '🔥 jours', color: palette.flame },
                { n: unlockedBadges.length, label: '🏆 badges', color: palette.ink },
                { n: unlockedCourses.length, label: '📘 cours', color: palette.ink },
              ].map((s, i) => (
                <div key={i} className="rounded-2xl border text-center py-3" style={{ background: palette.bg, borderColor: palette.line }}>
                  <div className="text-[19px] font-extrabold leading-none" style={{ fontFamily: palette.display, color: s.color }}>{s.n}</div>
                  <div className="text-[10px] font-semibold mt-1.5" style={{ color: palette.ink3 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Badges */}
            <p className="text-[12px] font-semibold mb-2.5" style={{ color: palette.ink2 }}>Mes badges</p>
            <div className="grid grid-cols-3 gap-2.5">
              {BADGES.slice(0, 6).map(badge => {
                const isUnlocked = unlockedBadges.includes(badge.id);
                return (
                  <div
                    key={badge.id}
                    className={`aspect-square rounded-[16px] flex flex-col items-center justify-center p-2 text-center transition-all ${isUnlocked ? 'border' : 'opacity-40 grayscale border border-dashed'}`}
                    style={isUnlocked ? { background: palette.bg, borderColor: palette.line } : { borderColor: palette.line }}
                    title={badge.description}
                  >
                    <Award className={`w-6 h-6 mb-1 ${isUnlocked ? 'text-yellow-500' : 'text-gray-400'}`} />
                    <span className="text-[9px] leading-tight font-bold line-clamp-2" style={{ color: palette.ink }}>{badge.title}</span>
                  </div>
                );
              })}
            </div>
          </CollapsibleCard>

          {/* Temps d'étude */}
          <CollapsibleCard
            iconBg="#E6A700"
            icon={<Flame className="w-[17px] h-[17px]" style={{ color: '#fff' }} strokeWidth={2.2} />}
            title="Mon temps d'étude"
            subtitle="Ton activité jour par jour"
            open={studyOpen}
            onToggle={() => setStudyOpen(o => !o)}
          >
            <StudyChart />
          </CollapsibleCard>

          {/* Carnet de notes */}
          <CollapsibleCard
            iconBg="#1976D2"
            icon={<Edit3 className="w-[17px] h-[17px]" style={{ color: '#fff' }} strokeWidth={2.2} />}
            title="Mon carnet de notes"
            subtitle={savedNotes.length > 0 ? `${savedNotes.length} note${savedNotes.length > 1 ? 's' : ''} sauvegardée${savedNotes.length > 1 ? 's' : ''}` : 'Tes notes prises en cours'}
            open={notesOpen}
            onToggle={() => setNotesOpen(o => !o)}
          >
            {savedNotes.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {savedNotes.map((note) => (
                  <div key={note.courseId} className="relative p-3.5 rounded-[16px] border group transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full w-fit uppercase tracking-wider mb-1.5" style={{ background: `${palette.accent}20`, color: palette.accent }}>
                      <Book className="w-3 h-3" /> Chapitre
                    </div>
                    <h3 className="font-bold text-sm pr-6" style={{ color: palette.ink }}>
                      {COURSE_TITLES[note.courseId] || note.courseId}
                    </h3>
                    <button type="button" onClick={() => handleDeleteNote(note.courseId)} className="p-1.5 absolute top-3 right-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors" title="Supprimer la note">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <p className="text-sm whitespace-pre-wrap line-clamp-3 mt-1.5 mb-2.5" style={{ color: palette.ink2 }}>{note.content}</p>
                    <div className="pt-2.5 border-t flex justify-end" style={{ borderColor: palette.line }}>
                      <a href={`/dashboard/course/${note.courseId}`} className="text-xs font-bold hover:opacity-80 flex items-center transition-opacity" style={{ color: palette.accent }}>
                        Aller au cours <ChevronRight className="w-3 h-3 ml-0.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-7 px-4 border-2 border-dashed rounded-[16px]" style={{ borderColor: palette.line, color: palette.ink3 }}>
                <Edit3 className="w-8 h-8 mx-auto mb-3 opacity-50" />
                <p className="font-medium text-sm">Ton carnet est vide.</p>
                <p className="text-xs mt-1 opacity-80">Prends des notes pendant ta lecture, elles apparaîtront ici.</p>
              </div>
            )}
          </CollapsibleCard>

          {/* Emploi du temps : aperçu du jour + accès à la page dédiée */}
          <CollapsibleCard
            iconBg="#14A6A6"
            icon={<Calendar className="w-[17px] h-[17px]" style={{ color: '#fff' }} strokeWidth={2.2} />}
            title="Mon emploi du temps"
            subtitle={timetableSlots.length > 0 ? `${timetableSlots.length} créneau${timetableSlots.length > 1 ? 'x' : ''} cette semaine` : 'Tes cours de la semaine'}
            open={timetableOpen}
            onToggle={() => setTimetableOpen(o => !o)}
          >
            <p className="text-[12px] font-semibold mb-2.5" style={{ color: palette.ink2 }}>Aujourd'hui · {todayName}</p>
            {todaySlots.length > 0 ? (
              <div className="space-y-2">
                {todaySlots.map((s, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 rounded-[14px] border" style={{ background: palette.bg, borderColor: palette.line }}>
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ background: palette.accent }} />
                      <span className="text-sm font-medium truncate" style={{ color: palette.ink }}>{s.subjectName}</span>
                    </div>
                    <span className="text-xs font-semibold shrink-0 tabular-nums" style={{ color: palette.ink3 }}>{s.startTime}–{s.endTime}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-5 px-4 rounded-[14px] border border-dashed" style={{ borderColor: palette.line }}>
                <Calendar className="w-7 h-7 mx-auto mb-2 opacity-40" style={{ color: palette.ink3 }} />
                <p className="text-sm font-medium" style={{ color: palette.ink3 }}>Pas de cours programmé aujourd'hui.</p>
              </div>
            )}
            <button
              onClick={() => navigate('/dashboard/emploi-du-temps')}
              className="w-full mt-3 inline-flex items-center justify-center gap-2 py-2.5 rounded-[14px] text-sm font-bold transition-all hover:scale-[1.01]"
              style={{ background: palette.accent, color: palette.onAccent, boxShadow: `0 4px 14px ${palette.accent}40` }}
            >
              <Calendar className="w-4 h-4" /> Voir mon emploi du temps <ArrowRight className="w-4 h-4" />
            </button>
          </CollapsibleCard>

          {/* Code livre physique */}
          <CollapsibleCard
            iconBg="#2E9E5B"
            icon={<Key className="w-[17px] h-[17px]" style={{ color: '#fff' }} strokeWidth={2.2} />}
            title="Livre physique"
            subtitle="Activer le code de ton manuel papier"
            open={bookOpen}
            onToggle={() => setBookOpen(o => !o)}
          >
            <p className="text-sm mb-3.5" style={{ color: palette.ink2 }}>
              Entre le code unique situé à la fin de ton manuel EDUCTOME pour débloquer la version numérique et tous les quiz.
            </p>
            <form onSubmit={handleApplyCoupon} className="space-y-3">
              <div className="flex gap-2.5">
                <input type="text" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} placeholder="Ex: T1LIMITES2026" className="flex-1 min-w-0 px-3.5 py-2.5 border rounded-[14px] text-sm font-mono uppercase focus:ring-2 focus:outline-none transition-colors" style={fieldStyle} />
                <button type="submit" disabled={couponStatus === 'loading'} className="shrink-0 text-white px-5 py-2.5 rounded-[14px] text-sm font-bold transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 whitespace-nowrap" style={{ background: palette.accent, boxShadow: `0 4px 14px ${palette.accent}40` }}>
                  {couponStatus === 'loading' ? '...' : 'Activer'}
                </button>
              </div>
              {couponStatus === 'success' && (
                <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-[14px] text-green-700 dark:text-green-400 text-sm flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <p>Code validé ! Le Tome a été ajouté à tes cours.</p>
                </div>
              )}
              {couponStatus === 'error' && (
                <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-[14px] text-red-700 dark:text-red-400 text-sm">
                  Code invalide ou déjà utilisé. Vérifie les lettres et chiffres.
                </div>
              )}
            </form>
          </CollapsibleCard>
        </div>
      </div>

      {/* ── Partager (repliable, comme les autres sections) ── */}
      <div className="mt-5">
        <CollapsibleCard
          iconBg="#5B5BD6"
          icon={<Share2 className="w-[17px] h-[17px]" style={{ color: '#fff' }} strokeWidth={2.2} />}
          title="Partager ma progression"
          subtitle="Lien de suivi pour tes parents"
          open={shareOpen}
          onToggle={() => setShareOpen(o => !o)}
        >
          <p className="text-[13px] mb-3 leading-relaxed" style={{ color: palette.ink2 }}>
            Donne ce lien à tes parents pour qu'ils suivent tes progrès, où qu'ils soient.
          </p>
          <div className="flex gap-2.5">
            <button
              type="button"
              onClick={handleCopyLink}
              className="flex-1 min-w-0 inline-flex items-center justify-center gap-2 py-2.5 rounded-[14px] text-sm font-bold border transition-colors hover:bg-black/5"
              style={{ borderColor: palette.line, color: palette.ink }}
            >
              <Copy className="w-4 h-4 shrink-0" /> {shareCopied ? 'Lien copié !' : 'Copier le lien'}
            </button>
            <button
              type="button"
              onClick={handleNativeShare}
              className="flex-1 min-w-0 inline-flex items-center justify-center gap-2 py-2.5 rounded-[14px] text-sm font-bold text-white transition-all hover:scale-[1.01]"
              style={{ background: palette.accent, boxShadow: `0 4px 14px ${palette.accent}40` }}
            >
              <Share2 className="w-4 h-4 shrink-0" /> Partager
            </button>
          </div>
        </CollapsibleCard>
      </div>

      {/* ── Panneau Relais (admin) ── */}
      {isAdmin && (
        <div className="mt-5">
          <SectionLabel>Administration</SectionLabel>
          <CollapsibleCard
            iconBg="#E6A700"
            icon={<Users className="w-[17px] h-[17px]" style={{ color: '#fff' }} strokeWidth={2.2} />}
            title="Générer un code Relais"
            subtitle="Créer un code partenaire"
            open={relaisOpen}
            onToggle={() => setRelaisOpen(o => !o)}
          >
            <div className="flex gap-2.5 mb-3">
              <input type="text" placeholder="Nom du relais (ex: Kévin Kouamé)" value={relaisNom} onChange={(e) => setRelaisNom(e.target.value)} className="flex-1 min-w-0 px-3.5 py-2.5 border rounded-[14px] text-sm focus:ring-2 focus:outline-none transition-colors" style={fieldStyle} />
              <button type="button" onClick={handleGenerateRelaisCode} disabled={generatingRelaisCode || !relaisNom.trim()} className="shrink-0 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white px-5 py-2.5 rounded-[14px] text-sm font-bold transition-colors whitespace-nowrap">
                {generatingRelaisCode ? '...' : 'Générer'}
              </button>
            </div>
            {generatedRelaisCode && (
              <div className="flex items-center gap-3 p-3.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-[14px]">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                <span className="font-bold text-xl font-mono tracking-widest text-green-700 dark:text-green-300">{generatedRelaisCode}</span>
                <button type="button" onClick={() => { navigator.clipboard.writeText(generatedRelaisCode); setRelaisCodeCopied(true); setTimeout(() => setRelaisCodeCopied(false), 2000); }} className="ml-auto flex items-center gap-1.5 text-sm font-bold text-green-600 dark:text-green-400 hover:text-green-800 transition-colors">
                  <Key className="w-4 h-4" /> {relaisCodeCopied ? 'Copié !' : 'Copier'}
                </button>
              </div>
            )}
            <p className="text-xs mt-3" style={{ color: palette.ink3 }}>Associe manuellement l'UID du relais dans Firebase Console pour activer son tableau de bord.</p>
          </CollapsibleCard>
        </div>
      )}

      {/* ── Outils Dev (DEV + admin) ── */}
      {import.meta.env.DEV && isAdmin && (
        <div className="mt-5">
          <SectionLabel>Outils développeur</SectionLabel>
          <CollapsibleCard
            iconBg="#8B5CF6"
            icon={<Settings className="w-[17px] h-[17px]" style={{ color: '#fff' }} strokeWidth={2.2} />}
            title="Panneau d'administration (tests)"
            subtitle="Simuler comptes & états — DEV uniquement"
            open={devOpen}
            onToggle={() => setDevOpen(o => !o)}
          >
            <p className="text-xs mb-4" style={{ color: palette.ink3 }}>Visibles seulement en développement. Les changements sont locaux et se réinitialisent au rechargement.</p>

            <p className="text-[11px] font-bold uppercase tracking-widest mb-2.5" style={{ color: '#8B5CF6' }}>Simulation de compte</p>
            <div className="grid grid-cols-3 gap-2.5 mb-5">
              <button onClick={() => { devSimulerGratuit(); localStorage.setItem('eductome_quiz_attempts', JSON.stringify({ date: getTodayKey(), count: 3 })); }} className="flex flex-col items-center gap-2 p-3 rounded-[16px] border transition-all text-center hover:scale-[1.02]" style={{ background: palette.bg, borderColor: palette.line }}>
                <div className="p-2.5 bg-red-100 dark:bg-red-900/30 text-red-500 rounded-full"><RefreshCw className="w-4 h-4" /></div>
                <span className="font-bold text-[11px]" style={{ color: palette.ink }}>Gratuit</span>
              </button>
              <button onClick={devSimulerFamille} className="flex flex-col items-center gap-2 p-3 rounded-[16px] border transition-all text-center hover:scale-[1.02]" style={{ background: palette.bg, borderColor: palette.line }}>
                <div className="p-2.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-500 rounded-full"><Users className="w-4 h-4" /></div>
                <span className="font-bold text-[11px]" style={{ color: palette.ink }}>Famille</span>
              </button>
              <button onClick={() => { devSimulerFamille(); localStorage.removeItem('famille_welcomed'); }} className="flex flex-col items-center gap-2 p-3 rounded-[16px] border transition-all text-center hover:scale-[1.02]" style={{ background: palette.bg, borderColor: palette.line }}>
                <div className="p-2.5 bg-pink-100 dark:bg-pink-900/30 text-pink-500 rounded-full"><Heart className="w-4 h-4" /></div>
                <span className="font-bold text-[11px]" style={{ color: palette.ink }}>Famille 1ʳᵉ</span>
              </button>
            </div>

            <p className="text-[11px] font-bold uppercase tracking-widest mb-2.5" style={{ color: '#8B5CF6' }}>Tests de fonctionnalités</p>
            <div className="grid grid-cols-3 gap-2.5 mb-5">
              <button onClick={() => devSetStreak(currentStreak + 1)} className="flex flex-col items-center gap-2 p-3 rounded-[16px] border transition-all text-center hover:scale-[1.02]" style={{ background: palette.bg, borderColor: palette.line }}>
                <div className="p-2.5 bg-orange-100 dark:bg-orange-900/30 text-orange-500 rounded-full"><Flame className="w-4 h-4" /></div>
                <span className="font-bold text-[11px]" style={{ color: palette.ink }}>Streak +1</span>
              </button>
              <button onClick={() => devSetStreak(0)} className="flex flex-col items-center gap-2 p-3 rounded-[16px] border transition-all text-center hover:scale-[1.02]" style={{ background: palette.bg, borderColor: palette.line }}>
                <div className="p-2.5 bg-gray-100 dark:bg-gray-800 text-gray-500 rounded-full"><RefreshCw className="w-4 h-4" /></div>
                <span className="font-bold text-[11px]" style={{ color: palette.ink }}>Streak 0</span>
              </button>
              <button onClick={() => localStorage.setItem('eductome_quiz_attempts', JSON.stringify({ date: getTodayKey(), count: 3 }))} className="flex flex-col items-center gap-2 p-3 rounded-[16px] border transition-all text-center hover:scale-[1.02]" style={{ background: palette.bg, borderColor: palette.line }}>
                <div className="p-2.5 bg-red-100 dark:bg-red-900/30 text-red-500 rounded-full"><Lock className="w-4 h-4" /></div>
                <span className="font-bold text-[11px]" style={{ color: palette.ink }}>Quiz max</span>
              </button>
              <button onClick={() => navigate('/quiz')} className="flex flex-col items-center gap-2 p-3 rounded-[16px] border transition-all text-center hover:scale-[1.02]" style={{ background: palette.bg, borderColor: palette.line }}>
                <div className="p-2.5 bg-blue-100 dark:bg-blue-900/30 text-blue-500 rounded-full"><Timer className="w-4 h-4" /></div>
                <span className="font-bold text-[11px]" style={{ color: palette.ink }}>Examen</span>
              </button>
              <button onClick={devUnlockCourseTest} className="flex flex-col items-center gap-2 p-3 rounded-[16px] border transition-all text-center hover:scale-[1.02]" style={{ background: palette.bg, borderColor: palette.line }}>
                <div className="p-2.5 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full"><Book className="w-4 h-4" /></div>
                <span className="font-bold text-[11px]" style={{ color: palette.ink }}>Débloquer</span>
              </button>
            </div>

            <p className="text-[11px] font-bold uppercase tracking-widest mb-2.5" style={{ color: '#8B5CF6' }}>Utilitaires</p>
            <div className="grid grid-cols-3 gap-2.5">
              <button onClick={async () => { await resetUser(); }} className="flex flex-col items-center gap-2 p-3 rounded-[16px] border transition-all text-center hover:scale-[1.02]" style={{ background: palette.bg, borderColor: palette.line }}>
                <div className="p-2.5 bg-red-100 dark:bg-red-900/30 text-red-500 rounded-full"><Trash2 className="w-4 h-4" /></div>
                <span className="font-bold text-[11px]" style={{ color: palette.ink }}>Reset</span>
              </button>
              <button onClick={async () => { await unlockEverything(); }} className="flex flex-col items-center gap-2 p-3 rounded-[16px] border transition-all text-center hover:scale-[1.02]" style={{ background: palette.bg, borderColor: palette.line }}>
                <div className="p-2.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-500 rounded-full"><Unlock className="w-4 h-4" /></div>
                <span className="font-bold text-[11px]" style={{ color: palette.ink }}>Caïman</span>
              </button>
              <button onClick={() => { addXpDev(500); }} className="flex flex-col items-center gap-2 p-3 rounded-[16px] border transition-all text-center hover:scale-[1.02]" style={{ background: palette.bg, borderColor: palette.line }}>
                <div className="p-2.5 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full"><Zap className="w-4 h-4" /></div>
                <span className="font-bold text-[11px]" style={{ color: palette.ink }}>+500 XP</span>
              </button>
            </div>
          </CollapsibleCard>
        </div>
      )}

      {showCropModal && selectedImage && (
        <ImageCropperModal
          imageSrc={selectedImage}
          onClose={() => { setShowCropModal(false); setSelectedImage(null); if (fileInputRef.current) fileInputRef.current.value = ''; }}
          onCropComplete={handleCropComplete}
        />
      )}
    </div>
  );
};
