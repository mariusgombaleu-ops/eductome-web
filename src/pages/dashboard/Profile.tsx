import { User, Mail, Save, Camera, Star, Edit3, Book, Trash2, Key, CheckCircle, ChevronRight, Lock, Flame, Trophy, Heart, Settings, RefreshCw, Unlock, Zap, Users, Timer, Share2, Calendar, Award } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useUser, USER_LEVELS } from '../../contexts/UserContext';
import { BADGES } from '../../constants/badges';
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { RoleBadge } from '../../components/forum/RoleBadge';
import { StudyChart } from '../../components/dashboard/StudyChart';
import { doc, setDoc, updateDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { ImageCropperModal } from '../../components/dashboard/ImageCropperModal';
import { useToast } from '../../contexts/ToastContext';
import { GrandFrereGuide } from '../../components/ui/GrandFrereGuide';
import { TimetableBottomSheet } from '../../components/TimetableBottomSheet';
import { IVORIAN_CURRICULUM, IvorianSeries } from '../../utils/curriculum';

const SERIE_LABELS: Record<string, string> = {
  '3eme': '3ᵉ (Brevet)', '2nde': 'Seconde', '1ere': 'Première',
  'terminale-c': 'Terminale C', 'terminale-d': 'Terminale D', 'terminale-a': 'Terminale A',
};

function getSeriesFromLevel(levelStr: string): IvorianSeries {
  const lower = levelStr.toLowerCase();
  if (lower.includes('3') || lower.includes('troisième') || lower.includes('3ème')) return '3EME';
  if (lower.includes('_a') || lower.includes('terminale a') || lower.includes('tle a')) return 'TLE_A';
  return 'TLE_D';
}

export const Profile = () => {
  const { theme, palette } = useTheme();
  const d = theme === 'dark';
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
  const [selectedSubjectForTimetable, setSelectedSubjectForTimetable] = useState<{ id: string; name: string; color: string } | null>(null);

  const [formPseudo, setFormPseudo] = useState(pseudo);
  const [formLevel, setFormLevel] = useState(levelString);
  const [formSubject, setFormSubject] = useState(favoriteSubject || "Mathématiques");
  const [formGoal, setFormGoal] = useState(goal || "Mention Bien");
  const [formHighschool, setFormHighschool] = useState(highschool || "");

  useEffect(() => {
    setFormPseudo(pseudo);
    setFormLevel(levelString);
    setFormSubject(favoriteSubject || "Mathématiques");
    setFormGoal(goal || "Mention Bien");
    setFormHighschool(highschool || "");
  }, [pseudo, levelString, favoriteSubject, goal, highschool]);

  const nextLevelData = USER_LEVELS.find(l => l.level === level.level + 1);
  const nextLevelXp = nextLevelData ? nextLevelData.minXp : level.minXp;
  const currentLevelXp = level.minXp;
  const progress = nextLevelXp > currentLevelXp ? ((xp - currentLevelXp) / (nextLevelXp - currentLevelXp)) * 100 : 100;

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
        uid: '',
        nom: relaisNom.trim(),
        code,
        totalVentes: 0,
        totalCommission: 0,
        createdAt: new Date()
      });
      setGeneratedRelaisCode(code);
      setRelaisNom('');
    } catch (err) {
      console.error('Erreur génération code relais:', err);
    } finally {
      setGeneratingRelaisCode(false);
    }
  };

  const handleSaveSlot = async (data: {
    dayOfWeek: string;
    startTime: string;
    endTime: string;
    teacherName: string;
    duplicateTo?: string[];
  }) => {
    if (!currentUser || !selectedSubjectForTimetable) return;
    const allDays = [data.dayOfWeek, ...(data.duplicateTo ?? [])];
    for (const day of allDays) {
      const slotId = `${day}-${data.startTime.replace(':', '')}`;
      await setDoc(doc(db, 'users', currentUser.uid, 'timetable', slotId), {
        id: slotId,
        dayOfWeek: day,
        startTime: data.startTime,
        endTime: data.endTime,
        subjectId: selectedSubjectForTimetable.id,
        subjectName: selectedSubjectForTimetable.name,
        teacherName: data.teacherName || null
      });
    }
    addToast({ type: 'success', title: 'Cours enregistré', message: `${selectedSubjectForTimetable.name} ajouté à ton emploi du temps.` });
    setSelectedSubjectForTimetable(null);
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;
    try {
      await updateDoc(doc(db, 'users', currentUser.uid), {
        pseudo: formPseudo,
        level: formLevel,
        favoriteSubject: formSubject,
        goal: formGoal,
        highschool: formHighschool
      });
      addToast({ type: 'success', title: 'Profil mis à jour', message: 'Tes informations ont été sauvegardées avec succès.' });
    } catch (err: any) {
      console.error(err);
      addToast({ type: 'error', title: 'Erreur', message: 'Impossible de sauvegarder tes informations.' });
    }
  };

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCode.trim()) return;
    
    setCouponStatus('loading');
    
    // Simulate API call
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
      courseId: id,
      content: localStorage.getItem(`eductome_course_notes_${id}`) || ''
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

      // Update firestore document
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

  const handleShare = async () => {
    if (!currentUser) return;
    const url = `${window.location.origin}/parent/${currentUser.uid}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: `Progression de ${pseudo} · EDUCTOME`, url });
        return;
      } catch {
        // user cancelled or share failed — fall through to clipboard
      }
    }
    await navigator.clipboard.writeText(url);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2500);
  };

  return (
    <div className="space-y-8 px-4 md:px-6 lg:px-8 pt-6 pb-20 font-poppins max-w-7xl mx-auto">
      <GrandFrereGuide 
        id="profile"
        message="Ton profil, c'est ton identité de Champion. Tu peux changer ton avatar, voir tes badges et suivre ton niveau d'XP. Fais-en une machine de guerre !"
      />
      {/* ── Identité (maquette #6) ── */}
      <div className="max-w-2xl mx-auto w-full">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-[26px] font-extrabold tracking-tight" style={{ color: palette.ink, fontFamily: palette.display }}>Mon profil</h1>
          <a href="#profil-edit" className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[13px] text-[12px] font-bold transition-opacity hover:opacity-80" style={{ background: palette.accentSoft, color: palette.accent }}>
            <Edit3 className="w-3.5 h-3.5" /> Modifier
          </a>
        </div>

        {/* Avatar + nom */}
        <div className="flex flex-col items-center text-center pt-2 pb-4">
          <div className="relative w-[84px] h-[84px] group cursor-pointer" onClick={() => !uploadingPhoto && fileInputRef.current?.click()}>
            <div className="w-[84px] h-[84px] rounded-full flex items-center justify-center overflow-hidden" style={{ background: palette.heroBg, color: '#fff', boxShadow: `0 12px 30px ${palette.heroShadow}` }}>
              {photoURL
                ? <img src={photoURL} alt={pseudo} className="w-full h-full object-cover" />
                : <span className="text-[31px] font-extrabold" style={{ fontFamily: palette.display }}>{(pseudo || 'E').charAt(0).toUpperCase()}</span>}
            </div>
            <div className="absolute -right-0.5 -bottom-0.5 w-7 h-7 rounded-full flex items-center justify-center" style={{ background: palette.accent, border: `3px solid ${palette.bg}` }}>
              {uploadingPhoto ? <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <Camera className="w-3.5 h-3.5 text-white" />}
            </div>
            <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleFileChange} />
          </div>
          <div className="text-[21px] font-extrabold mt-3 flex items-center gap-1.5" style={{ color: palette.ink, fontFamily: palette.display }}>{pseudo} <RoleBadge role={userRole} /></div>
          <div className="text-[13px] font-medium mt-0.5" style={{ color: palette.ink2 }}>{serie}{highschool ? ` · ${highschool}` : ''}</div>
        </div>

        {/* Carte niveau premium */}
        <div className="relative overflow-hidden rounded-[22px] p-[18px] mb-3.5" style={{ background: palette.heroBg, color: '#fff', boxShadow: `0 7px 18px ${palette.heroShadow}, inset 0 1px 0 rgba(255,255,255,.28)` }}>
          <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.10) 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
          <div className="relative flex items-center justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.1em] font-poppins" style={{ background: 'rgba(255,255,255,.16)', border: '1px solid rgba(255,255,255,.18)' }}>
                <Star className="w-3 h-3" style={{ fill: '#FFD66B', color: '#FFD66B' }} /> Niveau {level.level}
              </span>
              <div className="text-[17px] font-extrabold mt-2" style={{ fontFamily: palette.display }}>{level.title}</div>
            </div>
            <div className="text-right">
              <div className="text-[22px] font-extrabold leading-none" style={{ fontFamily: palette.display }}>{xp.toLocaleString('fr-FR')}<span className="text-[12px] font-semibold opacity-85"> XP</span></div>
              <div className="text-[10px] font-semibold opacity-80 mt-1">{nextLevelData ? `${Math.max(0, nextLevelXp - xp)} avant niv. ${level.level + 1}` : 'Niveau max atteint 🏆'}</div>
            </div>
          </div>
          <div className="relative mt-3.5 h-[9px] rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,.2)' }}>
            <div className="h-full rounded-full transition-all duration-700" style={{ width: `${progress}%`, background: 'linear-gradient(90deg, rgba(255,255,255,.65), #fff)', boxShadow: '0 0 12px rgba(255,255,255,.5)' }} />
          </div>
        </div>

        {/* 3 tuiles stats */}
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { n: currentStreak, label: '🔥 jours', color: palette.flame },
            { n: unlockedBadges.length, label: '🏆 badges', color: palette.ink },
            { n: unlockedCourses.length, label: '📘 cours', color: palette.ink },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border text-center py-3.5 transition-colors" style={{ background: palette.bg2, borderColor: palette.line }}>
              <div className="text-[20px] font-extrabold leading-none" style={{ fontFamily: palette.display, color: s.color }}>{s.n}</div>
              <div className="text-[10px] font-semibold mt-1.5" style={{ color: palette.ink3 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Share progress link */}
      {currentUser && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleShare}
            className="flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-xl border transition-colors hover:bg-black/5"
            style={{ borderColor: palette.line, color: palette.ink }}
          >
            <Share2 className="w-4 h-4" />
            {shareCopied ? 'Lien copié !' : 'Partager ma progression'}
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div id="profil-edit" className="scroll-mt-24 p-6 rounded-[28px] shadow-sm border animate-fade-in-up animation-delay-100 transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2" style={{ color: palette.ink }}>
              <User className="w-5 h-5 opacity-60" /> Informations Personnelles
            </h2>
            
            <form className="space-y-5" onSubmit={handleSaveProfile}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: palette.ink2 }}>Prénom / Pseudo</label>
                  <input type="text" value={formPseudo} onChange={e => setFormPseudo(e.target.value)} className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:outline-none transition-colors" style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink, ['--tw-ring-color' as any]: palette.accent }} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: palette.ink2 }}>Niveau d'études</label>
                  <select value={formLevel} onChange={e => setFormLevel(e.target.value)} className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:outline-none transition-colors" style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink, ['--tw-ring-color' as any]: palette.accent }}>
                    <option>Terminale</option>
                    <option>Première</option>
                    <option>Seconde</option>
                    <option>3ème</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: palette.ink2 }}>Matière préférée</label>
                  <select value={formSubject} onChange={e => setFormSubject(e.target.value)} className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:outline-none transition-colors" style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink, ['--tw-ring-color' as any]: palette.accent }}>
                    <option>Mathématiques</option>
                    <option>Physique-Chimie</option>
                    <option>SVT</option>
                    <option>Philosophie</option>
                    <option>Français</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: palette.ink2 }}>Objectif principal</label>
                  <select value={formGoal} onChange={e => setFormGoal(e.target.value)} className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:outline-none transition-colors" style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink, ['--tw-ring-color' as any]: palette.accent }}>
                    <option>Mention Très Bien</option>
                    <option>Mention Bien</option>
                    <option>Mention Assez Bien</option>
                    <option>Avoir le BAC</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: palette.ink2 }}>Lycée</label>
                  <input type="text" value={formHighschool} onChange={e => setFormHighschool(e.target.value)} placeholder="Ex: Lycée Classique d'Abidjan" className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:outline-none transition-colors" style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink, ['--tw-ring-color' as any]: palette.accent }} />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 flex items-center gap-2" style={{ color: palette.ink2 }}>
                  <Mail className="w-4 h-4" /> Numéro de téléphone (Identifiant)
                </label>
                <input type="text" value={currentUser?.phoneNumber || "Non renseigné"} disabled className="w-full px-4 py-2 border rounded-lg cursor-not-allowed opacity-70" style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink3 }} />
                <p className="text-xs mt-1" style={{ color: palette.ink3 }}>Le numéro de téléphone ne peut pas être modifié. <a href="mailto:contact@eductome.ci" className="underline" style={{ color: palette.accent }}>Contacte le support</a> pour changer de numéro ou de mot de passe.</p>
              </div>

              <div className="pt-4 flex justify-end">
                <button type="submit" className="flex items-center gap-2 text-white px-6 py-2 rounded-[16px] font-bold shadow-md transition-all hover:scale-[1.02]" style={{ background: palette.accent, boxShadow: `0 4px 14px ${palette.accent}40` }}>
                  <Save className="w-4 h-4" /> Enregistrer les modifications
                </button>
              </div>
            </form>
          </div>

          <div className="p-6 rounded-[28px] shadow-sm border animate-fade-in-up animation-delay-150 transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2" style={{ color: palette.ink }}>
              <Flame className="w-5 h-5 text-orange-500" /> Temps d'étude
            </h2>
            <StudyChart />
          </div>

          <div className="p-6 rounded-[28px] shadow-sm border animate-fade-in-up animation-delay-200 transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold flex items-center gap-2" style={{ color: palette.ink }}>
                <Edit3 className="w-5 h-5" style={{ color: palette.accent }} /> Mon Carnet de Notes
              </h2>
            </div>
            
            {savedNotes.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {savedNotes.map((note) => (
                  <div key={note.courseId} className="relative p-4 rounded-[20px] border group transition-colors" style={{ background: palette.bg2, borderColor: palette.line }}>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full w-fit uppercase tracking-wider" style={{ background: `${palette.accent}20`, color: palette.accent }}>
                          <Book className="w-3 h-3" /> Chapitre
                        </div>
                        <h3 className="font-bold text-sm pr-6" style={{ color: palette.ink }}>
                          {note.courseId === 't1-limites' ? 'Les Limites' : note.courseId === 't11-eq-diff' ? 'Équations Différentielles' : note.courseId}
                        </h3>
                      </div>
                      <button 
                        type="button"
                        onClick={() => handleDeleteNote(note.courseId)}
                        className="p-1.5 absolute top-3 right-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors sm:opacity-0 group-hover:opacity-100 z-10"
                        title="Supprimer la note"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm whitespace-pre-wrap line-clamp-3 mt-2 mb-3" style={{ color: palette.ink2 }}>
                      {note.content}
                    </p>
                    <div className="pt-3 border-t flex justify-end" style={{ borderColor: palette.line }}>
                      <a href={`/dashboard/course/${note.courseId}`} className="text-xs font-bold hover:opacity-80 flex items-center transition-opacity" style={{ color: palette.accent }}>
                        Aller au cours <ChevronRight className="w-3 h-3 ml-0.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 px-4 border-2 border-dashed rounded-[20px]" style={{ borderColor: palette.line, color: palette.ink3 }}>
                <Edit3 className="w-8 h-8 mx-auto mb-3 opacity-50" />
                <p className="font-medium text-sm">Ton carnet est vide.</p>
                <p className="text-xs mt-1 opacity-80">Prends des notes pendant ta lecture, elles apparaîtront ici.</p>
              </div>
            )}
          </div>



          {/* Mon Emploi du Temps */}
          <div className="p-6 rounded-[28px] shadow-sm border animate-fade-in-up animation-delay-225 transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: palette.ink }}>
              <Calendar className="w-5 h-5" style={{ color: palette.accent }} /> Mon Emploi du Temps
            </h2>
            <p className="text-sm mb-4" style={{ color: palette.ink2 }}>Configure tes créneaux hebdomadaires par matière :</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {IVORIAN_CURRICULUM[getSeriesFromLevel(levelString)].map(subject => (
                <div
                  key={subject.id}
                  className="flex items-center justify-between p-3 rounded-[16px] border transition-colors"
                  style={{ background: palette.bg2, borderColor: palette.line }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: subject.color }} />
                    <span className="text-sm font-medium" style={{ color: palette.ink }}>{subject.name}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedSubjectForTimetable({ id: subject.id, name: subject.name, color: subject.color })}
                    className="text-xs font-bold border px-3 py-1 rounded-[12px] transition-all hover:bg-black/5"
                    style={{ color: palette.accent, borderColor: `${palette.accent}50` }}
                  >
                    Configurer
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Code Livre Physique */}
          <div className="p-6 rounded-[28px] shadow-sm border animate-fade-in-up animation-delay-250 transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
            <h2 className="text-lg font-bold mb-2 flex items-center gap-2" style={{ color: palette.ink }}>
              <Key className="w-5 h-5" style={{ color: palette.accent }} /> Activer un Livre Physique
            </h2>
            <p className="text-sm mb-6" style={{ color: palette.ink2 }}>
              Tu as acheté un manuel EDUCTOME en librairie ? Entre le code unique situé à la fin du livre pour débloquer la version numérique et tous les quiz.
            </p>
            <form onSubmit={handleApplyCoupon} className="space-y-4">
              <div className="flex gap-3">
                <input 
                  type="text" 
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Ex: T1LIMITES2026" 
                  className="flex-1 px-4 py-3 border rounded-xl font-mono uppercase focus:ring-2 focus:outline-none transition-colors" 
                  style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink, ['--tw-ring-color' as any]: palette.accent }}
                />
                <button 
                  type="submit" 
                  disabled={couponStatus === 'loading'}
                  className="text-white px-6 py-3 rounded-[16px] font-bold transition-all hover:scale-[1.02] shadow-md disabled:opacity-70 disabled:hover:scale-100 whitespace-nowrap"
                  style={{ background: palette.accent, boxShadow: `0 4px 14px ${palette.accent}40` }}
                >
                  {couponStatus === 'loading' ? 'Vérification...' : 'Activer'}
                </button>
              </div>
              {couponStatus === 'success' && (
                <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-[16px] text-green-700 dark:text-green-400 text-sm flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <p>Code validé ! Le Tome a été ajouté à tes cours. Tu as maintenant accès à la version numérique et aux quiz interactifs.</p>
                </div>
              )}
              {couponStatus === 'error' && (
                <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-[16px] text-red-700 dark:text-red-400 text-sm">
                  Code invalide ou déjà utilisé. Vérifie que tu as bien recopié les lettres et chiffres.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Sidebar Droite (Badges et Admin) */}
        <div className="space-y-6">
          {/* Progression Niveau */}
          <div className="p-6 rounded-[28px] shadow-sm border animate-fade-in-left animation-delay-300 transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold flex items-center gap-2" style={{ color: palette.ink }}>
                <Trophy className="w-5 h-5 text-yellow-500" /> Niveau {level.level}
              </h3>
              <span className="text-xs font-bold px-2 py-1 rounded-lg" style={{ background: palette.bg2, color: palette.ink }}>
                {level.title || 'Élève'}
              </span>
            </div>
            
            <div className="relative pt-4">
              <div className="flex justify-between text-xs font-bold mb-1">
                <span style={{ color: palette.accent }}>{xp} XP</span>
                <span style={{ color: palette.ink3 }}>{nextLevelXp} XP</span>
              </div>
              <div className="h-3 w-full rounded-full overflow-hidden" style={{ background: palette.bg2 }}>
                <div 
                  className="h-full rounded-full relative overflow-hidden transition-all duration-1000 ease-out"
                  style={{ width: `${progress}%`, background: palette.accent }}
                >
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-white/20 animate-shimmer" style={{
                    backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    transform: 'skewX(-20deg)'
                  }}></div>
                </div>
              </div>
              <p className="text-[10px] text-center mt-2" style={{ color: palette.ink3 }}>
                Plus que {nextLevelXp - xp} XP pour atteindre le niveau {level.level + 1}
              </p>
            </div>
          </div>

          {/* Badges Récents */}
          <div className="p-6 rounded-[28px] shadow-sm border animate-fade-in-left animation-delay-400 transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold flex items-center gap-2" style={{ color: palette.ink }}>
                <Award className="w-5 h-5 text-purple-500" /> Mes Badges
              </h3>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${palette.accent}20`, color: palette.accent }}>
                {unlockedBadges.length} débloqués
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {BADGES.slice(0, 6).map(badge => {
                const isUnlocked = unlockedBadges.includes(badge.id);
                return (
                  <div 
                    key={badge.id}
                    className={`aspect-square rounded-[16px] flex flex-col items-center justify-center p-2 text-center transition-all ${
                      isUnlocked 
                        ? 'border' 
                        : 'opacity-40 grayscale border border-dashed'
                    }`}
                    style={isUnlocked ? { background: palette.bg2, borderColor: palette.line } : { borderColor: palette.line }}
                    title={badge.description}
                  >
                    <Award className={`w-6 h-6 mb-1 ${isUnlocked ? 'text-yellow-500' : 'text-gray-400'}`} />
                    <span className="text-[9px] leading-tight font-bold line-clamp-2" style={{ color: palette.ink }}>
                      {badge.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-6 rounded-[28px] border transition-colors shadow-sm" style={{ background: `linear-gradient(135deg, ${palette.bg2}, #F59E0B20)`, borderColor: palette.line }}>
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <h3 className="font-bold" style={{ color: palette.ink }}>Passez Premium</h3>
            </div>
            <p className="text-sm mb-4" style={{ color: palette.ink2 }}>
              Débloquez des manuels complets et des quiz corrigés en visitant notre boutique de collections.
            </p>
            <button className="w-full font-bold py-3 rounded-[16px] bg-yellow-400 text-yellow-900 hover:bg-yellow-500 transition-colors shadow-sm hover:scale-[1.02]">
              Voir la boutique
            </button>
          </div>
        </div>
      </div>

      {/* Panneau Admin — Génération de codes Relais */}
      {isAdmin && (
        <div className="mt-8 p-6 rounded-[28px] border-2 border-dashed transition-colors shadow-sm" style={{ background: '#f9731610', borderColor: '#f9731640' }}>
          <div className="flex items-center gap-2 mb-4 text-orange-600 dark:text-orange-400">
            <Users className="w-5 h-5" />
            <h2 className="text-lg font-bold font-playfair">Générer un Code Relais</h2>
          </div>
          <div className="flex gap-3 mb-4">
            <input
              type="text"
              placeholder="Nom du relais (ex: Kévin Kouamé)"
              value={relaisNom}
              onChange={(e) => setRelaisNom(e.target.value)}
              className="flex-1 px-4 py-3 border rounded-xl focus:ring-2 focus:outline-none transition-colors"
              style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink, ['--tw-ring-color' as any]: palette.accent }}
            />
            <button
              type="button"
              onClick={handleGenerateRelaisCode}
              disabled={generatingRelaisCode || !relaisNom.trim()}
              className="bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white px-6 py-3 rounded-[16px] font-bold transition-colors whitespace-nowrap hover:scale-[1.02]"
            >
              {generatingRelaisCode ? 'Génération...' : 'Générer'}
            </button>
          </div>
          {generatedRelaisCode && (
            <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-[16px]">
              <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
              <span className={`font-bold text-2xl font-mono tracking-widest ${d ? 'text-green-300' : 'text-green-700'}`}>
                {generatedRelaisCode}
              </span>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(generatedRelaisCode);
                  setRelaisCodeCopied(true);
                  setTimeout(() => setRelaisCodeCopied(false), 2000);
                }}
                className="ml-auto flex items-center gap-1.5 text-sm font-bold text-green-600 dark:text-green-400 hover:text-green-800 transition-colors"
              >
                <Key className="w-4 h-4" />
                {relaisCodeCopied ? 'Copié !' : 'Copier'}
              </button>
            </div>
          )}
          <p className="text-xs mt-3" style={{ color: palette.ink3 }}>
            Associe manuellement l'UID du relais dans Firebase Console pour activer son tableau de bord.
          </p>
        </div>
      )}

      {/* Admin / Dev Tools Panel — visible en mode DEV uniquement et pour l'Admin */}
      {import.meta.env.DEV && isAdmin && (
        <div className="mt-12 p-6 rounded-[28px] border-2 border-dashed transition-colors shadow-sm animate-fade-in-up" style={{ background: '#a855f710', borderColor: '#a855f740' }}>
          <div className="flex items-center gap-2 mb-4 text-purple-600 dark:text-purple-400">
            <Settings className="w-6 h-6 animate-spin-slow" />
            <h2 className="text-xl font-bold font-playfair">Panneau d'Administration (Tests)</h2>
          </div>
          <p className="text-sm text-purple-800/70 dark:text-purple-300/70 mb-6">
            Ces outils ne sont visibles que pendant le développement. Simule différents comptes et états en un clic. Les changements sont locaux et se réinitialisent au prochain rechargement.
          </p>

          {/* Ligne 1 : Simulation de compte */}
          <p className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-3">Simulation de compte</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <button
              onClick={() => { devSimulerGratuit(); localStorage.setItem('eductome_quiz_attempts', JSON.stringify({ date: getTodayKey(), count: 3 })); }}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-[20px] border transition-all text-center group hover:scale-[1.02]"
              style={{ background: palette.bg, borderColor: palette.line }}
            >
              <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-500 rounded-full group-hover:scale-110 transition-transform">
                <RefreshCw className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm" style={{ color: palette.ink }}>Compte Gratuit</span>
              <span className="text-xs" style={{ color: palette.ink3 }}>0 XP · verrouillé · streak 0 · quota quiz plein</span>
            </button>

            <button
              onClick={devSimulerFamille}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-[20px] border transition-all text-center group hover:scale-[1.02]"
              style={{ background: palette.bg, borderColor: palette.line }}
            >
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-500 rounded-full group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm" style={{ color: palette.ink }}>Compte Famille</span>
              <span className="text-xs" style={{ color: palette.ink3 }}>5000 XP · tout débloqué · streak 7 · quiz illimité</span>
            </button>

            <button
              onClick={() => { devSimulerFamille(); localStorage.removeItem('famille_welcomed'); }}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-[20px] border transition-all text-center group hover:scale-[1.02]"
              style={{ background: palette.bg, borderColor: palette.line }}
            >
              <div className="p-3 bg-pink-100 dark:bg-pink-900/30 text-pink-500 rounded-full group-hover:scale-110 transition-transform">
                <Heart className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm" style={{ color: palette.ink }}>Famille — 1ère connexion</span>
              <span className="text-xs" style={{ color: palette.ink3 }}>Famille + bandeau de bienvenue réactivé</span>
            </button>
          </div>

          {/* Ligne 2 : Tests de fonctionnalités */}
          <p className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-3">Tests de fonctionnalités</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <button
              onClick={() => devSetStreak(currentStreak + 1)}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-[20px] border transition-all text-center group hover:scale-[1.02]"
              style={{ background: palette.bg, borderColor: palette.line }}
            >
              <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-500 rounded-full group-hover:scale-110 transition-transform">
                <Flame className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm" style={{ color: palette.ink }}>Streak +1</span>
              <span className="text-xs" style={{ color: palette.ink3 }}>Actuellement : {currentStreak}</span>
            </button>

            <button
              onClick={() => devSetStreak(0)}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-[20px] border transition-all text-center group hover:scale-[1.02]"
              style={{ background: palette.bg, borderColor: palette.line }}
            >
              <div className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-500 rounded-full group-hover:scale-110 transition-transform">
                <RefreshCw className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm" style={{ color: palette.ink }}>Streak reset</span>
              <span className="text-xs" style={{ color: palette.ink3 }}>Remet à 0</span>
            </button>

            <button
              onClick={() => localStorage.setItem('eductome_quiz_attempts', JSON.stringify({ date: getTodayKey(), count: 3 }))}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-[20px] border transition-all text-center group hover:scale-[1.02]"
              style={{ background: palette.bg, borderColor: palette.line }}
            >
              <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-500 rounded-full group-hover:scale-110 transition-transform">
                <Lock className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm" style={{ color: palette.ink }}>Quiz : limite atteinte</span>
              <span className="text-xs" style={{ color: palette.ink3 }}>Simule upsell gratuit</span>
            </button>

            <button
              onClick={() => navigate('/quiz')}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-[20px] border transition-all text-center group hover:scale-[1.02]"
              style={{ background: palette.bg, borderColor: palette.line }}
            >
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-500 rounded-full group-hover:scale-110 transition-transform">
                <Timer className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm" style={{ color: palette.ink }}>Lancer Examen Blanc</span>
              <span className="text-xs" style={{ color: palette.ink3 }}>Ouvre la page Quiz</span>
            </button>

            <button
              onClick={devUnlockCourseTest}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-[20px] border transition-all text-center group hover:scale-[1.02]"
              style={{ background: palette.bg, borderColor: palette.line }}
            >
              <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full group-hover:scale-110 transition-transform">
                <Book className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm" style={{ color: palette.ink }}>Débloquer chapitre test</span>
              <span className="text-xs" style={{ color: palette.ink3 }}>Ajoute t1-limites</span>
            </button>
          </div>

          {/* Utilitaires conservés */}
          <div className="mt-6 pt-6 border-t" style={{ borderColor: palette.line }}>
            <p className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-3">Utilitaires</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={async () => { await resetUser(); }}
                className="flex flex-col items-center justify-center gap-2 p-4 rounded-[20px] border transition-all text-center group hover:scale-[1.02]"
                style={{ background: palette.bg, borderColor: palette.line }}
              >
                <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-500 rounded-full group-hover:scale-110 transition-transform">
                  <Trash2 className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm" style={{ color: palette.ink }}>Réinitialiser Firestore</span>
                <span className="text-xs" style={{ color: palette.ink3 }}>Efface XP, cours, badges en base</span>
              </button>

              <button
                onClick={async () => { await unlockEverything(); }}
                className="flex flex-col items-center justify-center gap-2 p-4 rounded-[20px] border transition-all text-center group hover:scale-[1.02]"
                style={{ background: palette.bg, borderColor: palette.line }}
              >
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-500 rounded-full group-hover:scale-110 transition-transform">
                  <Unlock className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm" style={{ color: palette.ink }}>Mode Caïman (Firestore)</span>
                <span className="text-xs" style={{ color: palette.ink3 }}>5000 XP persisté en base</span>
              </button>

              <button
                onClick={() => { addXpDev(500); }}
                className="flex flex-col items-center justify-center gap-2 p-4 rounded-[20px] border transition-all text-center group hover:scale-[1.02]"
                style={{ background: palette.bg, borderColor: palette.line }}
              >
                <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm" style={{ color: palette.ink }}>Ajouter +500 XP</span>
                <span className="text-xs" style={{ color: palette.ink3 }}>Test de la jauge de niveau</span>
              </button>
            </div>
          </div>
        </div>
      )}
      {selectedSubjectForTimetable && (
        <TimetableBottomSheet
          isOpen={true}
          onClose={() => setSelectedSubjectForTimetable(null)}
          subjectName={selectedSubjectForTimetable.name}
          subjectId={selectedSubjectForTimetable.id}
          onSave={handleSaveSlot}
        />
      )}
      {showCropModal && selectedImage && (
        <ImageCropperModal
          imageSrc={selectedImage}
          onClose={() => {
            setShowCropModal(false);
            setSelectedImage(null);
            if (fileInputRef.current) fileInputRef.current.value = '';
          }}
          onCropComplete={handleCropComplete}
        />
      )}
    </div>
  );
};
