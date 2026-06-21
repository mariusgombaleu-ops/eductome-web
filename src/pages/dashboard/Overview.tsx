import { Trophy, Star, Book, Target, BookOpen, ShoppingBag, Unlock, ChevronRight, Heart, X, Plus, Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';
import { AnimatedCounter } from '../../components/dashboard/AnimatedCounter';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { WelcomeModal } from '../../components/dashboard/WelcomeModal';
import { GoalsOnboardingModal } from '../../components/dashboard/GoalsOnboardingModal';
// removed CircularProgress
import { useAuth } from '../../contexts/AuthContext';
import { collection, onSnapshot, addDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { TimetableDashboardWidget } from '../../components/TimetableDashboardWidget';
import { PostAssessmentModal } from '../../components/PostAssessmentModal';
import type { TimetableSlot, AssessmentEvent } from '../../components/types';
import { getRecommendedTome } from '../../utils/getRecommendedTome';
import { useTheme } from '../../contexts/ThemeContext';
import { HeroLevelCard } from '../../components/dashboard/HeroLevelCard';
import { WeeklyStreak } from '../../components/dashboard/WeeklyStreak';
import { ContinueReading } from '../../components/dashboard/ContinueReading';

export const Overview = () => {
  const { xp, statut, gainXp, rewardedActions, level } = useUser();
  const { palette } = useTheme();
  const [isGoalsModalOpen, setIsGoalsModalOpen] = useState(false);
  const [showFamilleWelcome, setShowFamilleWelcome] = useState(
    () => statut === 'famille' && localStorage.getItem('famille_welcomed') !== 'true'
  );

  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const todayStr = new Date().toISOString().split('T')[0];

  const [timetableSlots, setTimetableSlots] = useState<TimetableSlot[]>([]);
  const [assessments, setAssessments] = useState<AssessmentEvent[]>([]);
  const [postAssessment, setPostAssessment] = useState<AssessmentEvent | null>(null);
  const [showAddAssessment, setShowAddAssessment] = useState(false);
  const [fabSubjectId, setFabSubjectId] = useState('maths');
  const [fabSubjectName, setFabSubjectName] = useState('Mathématiques');
  const [fabType, setFabType] = useState<'INTERRO' | 'DEVOIR' | 'BAC_BLANC'>('INTERRO');
  const [fabDate, setFabDate] = useState('');
  const [fabTitle, setFabTitle] = useState('');

  const dismissFamilleWelcome = () => {
    localStorage.setItem('famille_welcomed', 'true');
    setShowFamilleWelcome(false);
  };

  const isNewUser = xp === 0;
  let completedQuizzes = 0;
  rewardedActions.forEach(a => { if (a.startsWith('quiz_')) completedQuizzes++; });
  const unlockedTomes = JSON.parse(localStorage.getItem('eductome_unlocked_tomes') || '[]');
  const hasPurchased = unlockedTomes.length > 0;

  useEffect(() => {
    if (!currentUser) return;
    const unsub = onSnapshot(
      collection(db, 'users', currentUser.uid, 'timetable'),
      (snap) => { setTimetableSlots(snap.docs.map(d => d.data() as TimetableSlot)); }
    );
    return () => unsub();
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser) return;
    const unsub = onSnapshot(
      collection(db, 'users', currentUser.uid, 'assessments'),
      (snap) => { setAssessments(snap.docs.map(d => ({ id: d.id, ...d.data() } as AssessmentEvent))); }
    );
    return () => unsub();
  }, [currentUser]);

  useEffect(() => {
    const due = assessments.find(
      a => a.date === todayStr && a.status === 'UPCOMING' && !localStorage.getItem(`assessment_shown_${a.id}`)
    );
    if (due) setPostAssessment(due);
  }, [assessments, todayStr]);

  const DAY_NAMES = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const todayName = DAY_NAMES[new Date().getDay()];
  const currentTime = `${String(new Date().getHours()).padStart(2, '0')}:${String(new Date().getMinutes()).padStart(2, '0')}`;
  const todaySlots = [...timetableSlots]
    .filter(s => s.dayOfWeek === todayName)
    .sort((a, b) => a.startTime.localeCompare(b.startTime));
  const currentSlot = todaySlots.find(s => s.startTime <= currentTime && s.endTime > currentTime) ?? null;
  const nextSlot = todaySlots.find(s => s.startTime > currentTime) ?? null;
  const upcomingAssessment = [...assessments]
    .filter(a => a.status === 'UPCOMING' && a.date >= todayStr)
    .sort((a, b) => a.date.localeCompare(b.date))[0] ?? null;

  const ASSESSMENT_SUBJECTS = [
    { id: 'maths', name: 'Mathématiques' },
    { id: 'pc', name: 'Physique-Chimie' },
    { id: 'svt', name: 'SVT' },
    { id: 'philo', name: 'Philosophie' },
    { id: 'français', name: 'Français' },
    { id: 'anglais', name: 'Anglais' },
    { id: 'hg', name: 'Histoire-Géographie' },
  ];

  const handleAssessmentAction = (_assessment: AssessmentEvent) => {
    navigate(`/dashboard/revisions`);
  };

  const handlePostAssessmentResolve = async (data: { status: 'SUCCESS' | 'FAILED'; reviewComment?: string; xpEarned: number }) => {
    if (!postAssessment || !currentUser) return;
    const { status, reviewComment, xpEarned } = data;
    localStorage.setItem(`assessment_shown_${postAssessment.id}`, 'true');
    try {
      const updateData: Record<string, unknown> = { status };
      if (reviewComment) updateData.reviewComment = reviewComment;
      await updateDoc(doc(db, 'users', currentUser.uid, 'assessments', postAssessment.id), updateData);
    } catch (err) {
      console.error('Failed to update assessment:', err);
    }
    if (xpEarned > 0) gainXp(xpEarned, 'Devoir réussi ! 🎉', `assessment_win_${postAssessment.id}`);
    const assessmentRef = postAssessment;
    setPostAssessment(null);
    if (status === 'FAILED' && reviewComment) {
      const tome = getRecommendedTome(assessmentRef.subjectId, assessmentRef.title);
      if (tome) navigate(`/dashboard/course/${tome.tomeId}`);
    }
  };

  const handleSaveAssessment = async () => {
    if (!currentUser || !fabDate) return;
    const title = fabTitle.trim() || `${fabType} de ${fabSubjectName}`;
    await addDoc(collection(db, 'users', currentUser.uid, 'assessments'), {
      title,
      type: fabType,
      subjectId: fabSubjectId,
      subjectName: fabSubjectName,
      date: fabDate,
      reminderEnabled: true,
      status: 'UPCOMING',
      createdAt: Date.now()
    });
    setShowAddAssessment(false);
    setFabDate('');
    setFabTitle('');
  };

  const handleWelcomeComplete = () => {
    setIsGoalsModalOpen(true);
  };

  const lastCourseRead = localStorage.getItem('eductome_last_chapter_read');

  return (
    <div className="space-y-6 px-4 md:px-6 lg:px-8 pt-6 pb-24 font-poppins min-h-screen" style={{ background: palette.bg }}>
      {postAssessment && (
        <PostAssessmentModal assessment={postAssessment} onResolve={handlePostAssessmentResolve} />
      )}
      <WelcomeModal onComplete={handleWelcomeComplete} />
      <GoalsOnboardingModal isOpen={isGoalsModalOpen} onClose={() => setIsGoalsModalOpen(false)} />
      
      {showFamilleWelcome && (
        <div className="relative bg-gradient-to-r from-amber-400 to-yellow-600 rounded-2xl p-5 md:p-6 shadow-lg flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-white">Bienvenue dans la Famille EDUCTOME ! 🎉</h2>
              <p className="text-white/90 text-sm">Ton badge Famille, ton XP ×2 et tes avantages exclusifs sont activés — à vie.</p>
            </div>
          </div>
          <button
            onClick={dismissFamilleWelcome}
            className="shrink-0 text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Hero Card & Streak */}
      <HeroLevelCard />
      <WeeklyStreak />

      {/* Reprends ta lecture */}
      {lastCourseRead && (
        <ContinueReading 
          courseId={lastCourseRead}
          tomeName="TOME"
          chapterNumber={1}
          chapterTitle="Limites et Continuité"
          progressPct={35}
        />
      )}

      {/* Timetable + Assessments Widget */}
      <div className="mt-8">
        <TimetableDashboardWidget
          currentSlot={currentSlot}
          nextSlot={nextSlot}
          upcomingAssessment={upcomingAssessment}
          onActionClick={handleAssessmentAction}
        />
        <button
          onClick={() => navigate('/dashboard/emploi-du-temps')}
          className="w-full mt-3 flex items-center justify-center gap-2 py-3.5 rounded-xl border-2 font-bold text-sm transition-all duration-300"
          style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink }}
        >
          <Calendar className="w-5 h-5" />
          Voir mon emploi du temps complet
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8">
        <div className="p-4 rounded-[20px] border" style={{ background: palette.bg2, borderColor: palette.line }}>
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4" style={{ color: palette.accent }} />
            <span className="text-[10px] font-bold uppercase" style={{ color: palette.ink3 }}>Leçons</span>
          </div>
          <div className="text-2xl font-bold" style={{ color: palette.ink, fontFamily: palette.display }}>
            <AnimatedCounter value={completedQuizzes} />
          </div>
        </div>
        <div className="p-4 rounded-[20px] border" style={{ background: palette.bg2, borderColor: palette.line }}>
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4" style={{ color: palette.accent2 }} />
            <span className="text-[10px] font-bold uppercase" style={{ color: palette.ink3 }}>Moyenne</span>
          </div>
          <div className="text-2xl font-bold" style={{ color: palette.ink, fontFamily: palette.display }}>
            <AnimatedCounter value={isNewUser ? 0 : 85} suffix="%" />
          </div>
        </div>
        <div className="p-4 rounded-[20px] border" style={{ background: palette.bg2, borderColor: palette.line }}>
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-[10px] font-bold uppercase" style={{ color: palette.ink3 }}>XP Total</span>
          </div>
          <div className="text-2xl font-bold" style={{ color: palette.ink, fontFamily: palette.display }}>
            <AnimatedCounter value={xp} />
          </div>
        </div>
        <div className="p-4 rounded-[20px] border" style={{ background: palette.bg2, borderColor: palette.line }}>
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-4 h-4 text-green-500" />
            <span className="text-[10px] font-bold uppercase" style={{ color: palette.ink3 }}>Obj. BAC</span>
          </div>
          <div className="text-2xl font-bold" style={{ color: palette.ink, fontFamily: palette.display }}>
            <AnimatedCounter value={isNewUser ? 0 : Math.min(50 + level.level * 5, 99)} suffix="%" />
          </div>
        </div>
      </div>

      {/* Suggéré pour toi */}
      <div className="mt-8 space-y-4">
        <h2 className="text-[15px] font-bold flex items-center gap-2" style={{ color: palette.ink }}>
          <Star className="w-5 h-5 text-yellow-500" /> Suggéré pour toi
        </h2>
        <div className="border rounded-2xl p-4 space-y-4" style={{ background: palette.bg2, borderColor: palette.line }}>
          <div className="flex items-center gap-4 group cursor-pointer transition-colors">
            <div className="w-12 h-12 rounded-[14px] flex items-center justify-center" style={{ background: palette.accentSoft, color: palette.accent }}>
              <Book className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm" style={{ color: palette.ink }}>Méthode Dissertation</p>
              <p className="text-xs uppercase font-semibold" style={{ color: palette.ink3 }}>Ressource • Philo</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 group cursor-pointer transition-colors">
            <div className="w-12 h-12 rounded-[14px] flex items-center justify-center text-green-500 bg-green-500/10">
              <Target className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <p className="font-bold text-sm" style={{ color: palette.ink }}>Quiz : Fonctions</p>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full uppercase" style={{ background: palette.accentSoft, color: palette.accent }}>Nouveau</span>
              </div>
              <p className="text-xs uppercase font-semibold" style={{ color: palette.ink3 }}>Exercice • Maths</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bannière Boutique */}
      <div className="mt-8 rounded-2xl p-6 relative overflow-hidden" style={{ background: palette.bannerBg }}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-4">
            {hasPurchased ? <Unlock className="w-7 h-7" /> : <ShoppingBag className="w-7 h-7" />}
          </div>
          <h2 className="text-xl font-bold text-white mb-2" style={{ fontFamily: palette.display }}>
            {hasPurchased ? "Continue sur ta lancée !" : "Passe à la vitesse supérieure"}
          </h2>
          <p className="text-white/80 text-[13px] mb-6 max-w-sm">
            {hasPurchased 
              ? "Découvre nos autres collections (Méthodologie, Philosophie) pour exceller partout."
              : "Accède à 100% des exercices, corrections détaillées et astuces du Grand Frère."}
          </p>
          <Link 
            to="/dashboard/boutique" 
            className="w-full md:w-auto px-8 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2"
            style={{ background: palette.accent, color: palette.onAccent }}
          >
            {hasPurchased ? "Découvrir la suite" : "Voir la boutique"} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* FAB: Ajouter un devoir */}
      <button
        onClick={() => setShowAddAssessment(true)}
        className="fixed bottom-20 lg:bottom-6 right-4 z-40 w-14 h-14 rounded-[20px] flex items-center justify-center shadow-xl transition-all hover:scale-105"
        style={{ background: palette.accent, color: palette.onAccent, boxShadow: `0 8px 24px ${palette.accentSoft}` }}
        title="Ajouter une évaluation"
      >
        <Plus className="w-6 h-6" />
      </button>

      {/* Bottom Sheet Modal */}
      {showAddAssessment && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowAddAssessment(false)} />
          <div 
            className="relative w-full max-w-md rounded-t-3xl sm:rounded-3xl p-6 animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-8 duration-300"
            style={{ background: palette.bg2 }}
          >
            <div className="w-12 h-1.5 rounded-full mx-auto mb-6 sm:hidden" style={{ background: palette.line }} />
            <h3 className="text-[17px] font-bold mb-6 flex justify-between items-center" style={{ color: palette.ink }}>
              Nouvelle évaluation
              <button onClick={() => setShowAddAssessment(false)} style={{ color: palette.ink3 }}>
                <X className="w-5 h-5" />
              </button>
            </h3>
            <div className="space-y-5">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: palette.ink2 }}>Type</label>
                <div className="flex flex-wrap gap-2">
                  {['INTERRO', 'DEVOIR', 'BAC_BLANC'].map(t => (
                    <button
                      key={t}
                      onClick={() => setFabType(t as any)}
                      className="px-4 py-2 rounded-xl text-[13px] font-bold transition-colors"
                      style={{
                        background: fabType === t ? palette.accent : palette.bg,
                        color: fabType === t ? palette.onAccent : palette.ink2,
                        border: `1px solid ${fabType === t ? palette.accent : palette.line}`
                      }}
                    >
                      {t.replace('_', ' ')}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: palette.ink2 }}>Matière</label>
                <select
                  value={fabSubjectId}
                  onChange={(e) => {
                    const subject = ASSESSMENT_SUBJECTS.find(s => s.id === e.target.value);
                    if (subject) { setFabSubjectId(subject.id); setFabSubjectName(subject.name); }
                  }}
                  className="w-full rounded-xl py-3.5 px-4 text-sm font-semibold outline-none"
                  style={{ background: palette.bg, color: palette.ink, border: `1px solid ${palette.line}` }}
                >
                  {ASSESSMENT_SUBJECTS.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: palette.ink2 }}>Titre (optionnel)</label>
                <input
                  type="text"
                  placeholder="Ex: Devoir de niveau"
                  value={fabTitle}
                  onChange={(e) => setFabTitle(e.target.value)}
                  className="w-full rounded-xl py-3.5 px-4 text-sm font-semibold outline-none"
                  style={{ background: palette.bg, color: palette.ink, border: `1px solid ${palette.line}` }}
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: palette.ink2 }}>Date</label>
                <input
                  type="date"
                  value={fabDate}
                  onChange={(e) => setFabDate(e.target.value)}
                  className="w-full rounded-xl py-3.5 px-4 text-sm font-semibold outline-none"
                  style={{ background: palette.bg, color: palette.ink, border: `1px solid ${palette.line}` }}
                />
              </div>

              <button
                onClick={handleSaveAssessment}
                disabled={!fabDate}
                className="w-full py-3.5 rounded-xl text-sm font-bold mt-2 disabled:opacity-50"
                style={{ background: palette.accent, color: palette.onAccent }}
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
