import { Trophy, Star, Book, Target, ArrowRight, Flame, BookOpen, ShoppingBag, Unlock, ChevronRight, Heart, X, Plus, Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';
import { AnimatedCounter } from '../../components/dashboard/AnimatedCounter';
import { Link, useNavigate } from 'react-router-dom';
import { useUser, USER_LEVELS } from '../../contexts/UserContext';
import { WelcomeModal } from '../../components/dashboard/WelcomeModal';
import { GoalsOnboardingModal } from '../../components/dashboard/GoalsOnboardingModal';
import { GrandFrereGuide } from '../../components/ui/GrandFrereGuide';
import { useAuth } from '../../contexts/AuthContext';
import { collection, onSnapshot, addDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { TimetableDashboardWidget } from '../../components/TimetableDashboardWidget';
import { PostAssessmentModal } from '../../components/PostAssessmentModal';
import type { TimetableSlot, AssessmentEvent } from '../../components/types';
import { getRecommendedTome } from '../../utils/getRecommendedTome';

const QUOTES = [
  "Chaque minute d'étude est un pas de plus vers ton but.",
  "Le Caïman ne dort pas — il prépare sa victoire.",
  "Au Cacao, tant que le match n'est pas fini, on peut gâter le coin.",
  "Ce n'est pas une question d'intelligence. C'est une question de méthode.",
  "Celui qui comprend domine. Celui qui mémorise subit."
];

export const Overview = () => {
  const { xp, level, rewardedActions, pseudo, statut, currentStreak, gainXp } = useUser();
  const [quote, setQuote] = useState(QUOTES[0]);
  const [greeting, setGreeting] = useState("Bonjour");
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
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
    
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Bon matin");
    else if (hour < 18) setGreeting("Bon après-midi");
    else setGreeting("Bonsoir");
  }, []);

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

  return (
    <div className="space-y-8 px-4 md:px-6 lg:px-8 pt-6 pb-10 font-poppins">
      {postAssessment && (
        <PostAssessmentModal assessment={postAssessment} onResolve={handlePostAssessmentResolve} />
      )}
      <WelcomeModal onComplete={handleWelcomeComplete} />
      <GoalsOnboardingModal isOpen={isGoalsModalOpen} onClose={() => setIsGoalsModalOpen(false)} />
      
      <GrandFrereGuide 
        id="dashboard"
        message="C'est ici ton QG ! Tu as un aperçu de tes derniers cours, de ta progression et de tes prochains objectifs. Garde un œil sur tes stats pour rester motivé !"
      />
      {/* Bandeau Bienvenue dans la Famille (one-shot, post-activation) */}
      {showFamilleWelcome && (
        <div className="relative bg-gradient-to-r from-amber-400 to-yellow-600 rounded-2xl p-5 md:p-6 shadow-lg flex items-center justify-between gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
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
            aria-label="Fermer"
            className="shrink-0 text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Welcome Banner */}
      <div className="relative bg-gradient-to-r from-eductome-marine to-eductome-sky rounded-2xl p-6 md:p-8 overflow-hidden shadow-lg h-[140px] md:h-[160px] flex items-center justify-between animate-fade-in-up">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 -mb-12 w-32 h-32 rounded-full bg-white opacity-10 pointer-events-none"></div>
        
        <div className="relative z-10 text-white flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-2xl md:text-3xl font-playfair font-bold mb-1">
            {greeting}, {pseudo} 👋
          </h1>
          <p className="text-blue-100 text-sm md:text-base italic max-w-lg">
            "{quote}"
          </p>
        </div>
        
        <div className="relative z-10 bg-[#E65100] rounded-xl p-3 md:p-4 flex items-center space-x-3 text-white shadow-xl animate-in fade-in zoom-in duration-500 delay-150">
          <Flame className="w-6 h-6 md:w-8 md:h-8 text-white" />
          <div className="hidden sm:block">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-orange-200">Série actuelle</p>
            <p className="text-xl md:text-2xl font-bold">{currentStreak} jour{currentStreak > 1 ? 's' : ''}</p>
            {statut === 'famille' && (
              <p className="text-[9px] font-bold text-orange-200 uppercase tracking-wider">XP ×2 actif</p>
            )}
          </div>
        </div>
      </div>

      {/* Timetable + Assessments Widget */}
      <TimetableDashboardWidget
        currentSlot={currentSlot}
        nextSlot={nextSlot}
        upcomingAssessment={upcomingAssessment}
        onActionClick={handleAssessmentAction}
      />
      <button
        onClick={() => navigate('/dashboard/emploi-du-temps')}
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white dark:bg-[#161B22] border-2 border-[#1A3557]/20 dark:border-blue-900/40 text-[#1A3557] dark:text-blue-400 font-bold text-sm shadow-sm hover:border-[#1A3557] dark:hover:border-blue-400 hover:bg-[#F8F9FA] dark:hover:bg-[#0D1117] transition-all duration-300 hover:shadow-md group"
      >
        <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
        Voir mon emploi du temps complet
      </button>

      {/* Stats Grid - Toujours visible pour l'aspect psychologique */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {/* Card 1: Leçons terminées */}
        <div className="bg-white dark:bg-[#161B22] p-3 sm:p-4 md:p-6 rounded-xl shadow-sm border border-[#E1E4E8] dark:border-[#30363D] border-b-4 border-b-blue-500 transition-colors duration-300 flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
            <div className="p-1.5 sm:p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-500 w-fit">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="text-[9px] sm:text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded bg-blue-50 dark:bg-blue-900/20 text-blue-500 text-center">
              Total Validé
            </span>
          </div>
          <div>
            <p className="text-[11px] sm:text-sm font-medium text-[#6B7280] dark:text-[#8B949E] leading-tight">Leçons terminées</p>
            <p className="text-xl sm:text-3xl font-bold mt-0.5 text-[#1A1A2E] dark:text-white">
              <AnimatedCounter value={completedQuizzes} duration={1500} />
            </p>
          </div>
        </div>
        
        {/* Card 2: Moyenne Quiz */}
        <div className="bg-white dark:bg-[#161B22] p-3 sm:p-4 md:p-6 rounded-xl shadow-sm border border-[#E1E4E8] dark:border-[#30363D] border-b-4 border-b-[#D81B60] transition-colors duration-300 flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
            <div className="p-1.5 sm:p-2 rounded-lg bg-pink-50 dark:bg-pink-900/20 text-[#D81B60] w-fit">
              <Target className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="text-[9px] sm:text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded bg-pink-50 dark:bg-pink-900/20 text-[#D81B60] text-center">
              Objectif 80%
            </span>
          </div>
          <div>
            <p className="text-[11px] sm:text-sm font-medium text-[#6B7280] dark:text-[#8B949E] leading-tight">Moyenne Quiz</p>
            <p className="text-xl sm:text-3xl font-bold mt-0.5 text-[#1A1A2E] dark:text-white">
              <AnimatedCounter value={isNewUser ? 0 : 85} suffix="%" duration={1800} />
            </p>
          </div>
        </div>

        {/* Card 3: Points d'XP */}
        <div className="bg-white dark:bg-[#161B22] p-3 sm:p-4 md:p-6 rounded-xl shadow-sm border border-[#E1E4E8] dark:border-[#30363D] border-b-4 border-b-yellow-500 transition-colors duration-300 flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
            <div className="p-1.5 sm:p-2 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 text-yellow-500 w-fit">
              <Star className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="text-[9px] sm:text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded bg-yellow-50 dark:bg-yellow-900/20 text-yellow-500 text-center">
              Niveau {level.level}
            </span>
          </div>
          <div>
            <p className="text-[11px] sm:text-sm font-medium text-[#6B7280] dark:text-[#8B949E] leading-tight">Points d'XP</p>
            <p className="text-xl sm:text-3xl font-bold mt-0.5 text-[#1A1A2E] dark:text-white">
              <AnimatedCounter value={xp} duration={2000} />
            </p>
          </div>
        </div>

        {/* Card 4: Objectif BAC */}
        <div className="bg-white dark:bg-[#161B22] p-3 sm:p-4 md:p-6 rounded-xl shadow-sm border border-[#E1E4E8] dark:border-[#30363D] border-b-4 border-b-green-500 transition-colors duration-300 flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
            <div className="p-1.5 sm:p-2 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-500 w-fit">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="text-[9px] sm:text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded bg-green-50 dark:bg-green-900/20 text-green-500 text-center">
              Objectif Atteignable
            </span>
          </div>
          <div>
            <p className="text-[11px] sm:text-sm font-medium text-[#6B7280] dark:text-[#8B949E] leading-tight">Objectif BAC</p>
            <p className="text-xl sm:text-3xl font-bold mt-0.5 text-[#1A1A2E] dark:text-white">
              <AnimatedCounter value={isNewUser ? 0 : Math.min(50 + level.level * 5, 99)} suffix="%" duration={1500} />
            </p>
          </div>
        </div>
      </div>

      {/* Content depending on user status */}
      {isNewUser ? (
        <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] dark:text-white mb-4">
              Ton aventure commence ici 🚀
            </h2>
            <p className="text-[#6B7280] dark:text-[#8B949E]">
              Bienvenue sur EDUCTOME ! Voici les 3 étapes pour bien démarrer et transformer ta façon d'apprendre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Starter Pack */}
            <div className="bg-white dark:bg-[#161B22] border-2 border-[#1A3557]/10 hover:border-[#D81B60] dark:border-[#30363D] dark:hover:border-pink-800 rounded-2xl p-6 md:p-8 flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-pink-50 dark:bg-[#D81B60]/20 text-[#D81B60] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl text-[#1A1A2E] dark:text-white mb-3">1. Ton Starter Pack</h3>
              <p className="text-[#6B7280] dark:text-[#8B949E] flex-grow mb-8 leading-relaxed">
                Commence par les bases. Le chapitre 1 de chaque tome est <strong className="text-gray-900 dark:text-white">gratuit</strong> pour te permettre de tester la méthode.
              </p>
              <Link to="/dashboard/starter-pack" className="mt-auto w-full py-3.5 bg-[#D81B60] hover:bg-pink-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-colors text-sm md:text-base shadow-lg shadow-pink-900/20">
                Débuter l'entraînement <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Card 2: La Boutique */}
            <div className="bg-white dark:bg-[#161B22] border-2 border-[#1A3557]/10 hover:border-blue-500 dark:border-[#30363D] dark:hover:border-blue-800 rounded-2xl p-6 md:p-8 flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl text-[#1A1A2E] dark:text-white mb-3 relative z-10">2. La Boutique Numérique</h3>
              <p className="text-[#6B7280] dark:text-[#8B949E] flex-grow mb-8 leading-relaxed relative z-10">
                Débloque les tomes complets pour accéder à 100% des cours, exercices et méthodes qui feront la différence au BAC.
              </p>
              <Link to="/dashboard/boutique" className="mt-auto w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-colors text-sm md:text-base relative z-10 shadow-lg shadow-blue-900/20">
                Voir les Tomes
              </Link>
            </div>

            {/* Card 3: Ressources */}
            <div className="bg-white dark:bg-[#161B22] border-2 border-[#1A3557]/10 hover:border-green-500 dark:border-[#30363D] dark:hover:border-green-800 rounded-2xl p-6 md:p-8 flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl text-[#1A1A2E] dark:text-white mb-3">3. Ressources Gratuites</h3>
              <p className="text-[#6B7280] dark:text-[#8B949E] flex-grow mb-8 leading-relaxed">
                Télécharge nos fiches d'exercices et méthodes gratuites pour t'accompagner dans tes révisions quotidiennes.
              </p>
              <Link to="/dashboard/ressources" className="mt-auto w-full py-3.5 bg-[#F8F9FA] dark:bg-[#30363D] hover:bg-[#E1E4E8] dark:hover:bg-[#4B5563] text-[#1A1A2E] dark:text-white rounded-xl font-bold flex items-center justify-center transition-colors text-sm md:text-base border border-[#E1E4E8] dark:border-[#4B5563]">
                Explorer les ressources
              </Link>
            </div>
          </div>

          {/* Gamification Teaser */}
          <div className="mt-12 bg-[#F8F9FA] dark:bg-[#161B22] border-2 border-dashed border-[#1A3557]/20 dark:border-blue-900/30 rounded-3xl p-8 md:p-12 flex flex-col items-center text-center">
            <Trophy className="w-16 h-16 text-yellow-500 mb-6" />
            <h3 className="text-2xl font-bold text-[#1A1A2E] dark:text-white mb-3">Prêt à devenir un Caïman ? 🐊</h3>
            <p className="text-[#6B7280] dark:text-[#8B949E] max-w-2xl mb-8 text-sm md:text-base">
              Chaque chapitre lu et chaque quiz réussi te font gagner de l'XP. Cumule des points pour monter en niveau et prouver que tu maîtrises le programme.
            </p>
            <div className="w-full max-w-md bg-white dark:bg-[#0D1117] p-5 md:p-6 rounded-2xl shadow-sm border border-[#E1E4E8] dark:border-[#30363D]">
              <div className="flex justify-between items-center mb-4">
                <span className="text-base font-bold text-[#1A1A2E] dark:text-white">Niveau {level.level} : {level.title}</span>
                <span className="text-sm font-bold text-[#6B7280] dark:text-[#8B949E]">{xp} / {level.maxXp || '∞'} XP</span>
              </div>
              <div className="h-4 bg-[#F8F9FA] dark:bg-[#161B22] border border-[#E1E4E8] dark:border-[#30363D] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-yellow-400 rounded-full animate-pulse transition-all duration-1000" 
                  style={{ width: `${level.maxXp ? ((xp - level.minXp) / (level.maxXp - level.minXp)) * 100 : 100}%` }}
                ></div>
              </div>
              {level.maxXp && USER_LEVELS.find(l => l.level === level.level + 1) && (
                <p className="text-xs uppercase text-center mt-4 font-bold text-[#D81B60] tracking-wider">
                  Objectif Suivant : {USER_LEVELS.find(l => l.level === level.level + 1)?.title}
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
            
            {/* Main Content Area: Ce que tu dois faire aujourd'hui */}
            <div className="lg:col-span-2 space-y-6">
              {/* Marketing Funnel Section */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border border-blue-100 dark:border-blue-900/30 rounded-2xl p-6 md:p-8 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-16 h-16 shrink-0 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center">
                    {hasPurchased ? <Unlock className="w-8 h-8" /> : <ShoppingBag className="w-8 h-8" />}
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-xl md:text-2xl font-bold text-[#1A1A2E] dark:text-white mb-2">
                      {hasPurchased 
                        ? "Continue sur ta lancée ! 🚀" 
                        : "Passe à la vitesse supérieure ⚡"}
                    </h2>
                    <p className="text-[#6B7280] dark:text-[#8B949E] mb-6">
                      {hasPurchased 
                        ? "Tu as déjà débloqué des tomes. Pour maximiser tes chances au BAC, découvre nos autres collections (Méthodologie, Philosophie) et deviens incollable." 
                        : "Tu as testé les bases, il est temps de débloquer les tomes complets ! Accède à 100% des exercices, corrections détaillées et astuces de Grand Frère."}
                    </p>
                    
                    <Link 
                      to="/dashboard/boutique" 
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-colors shadow-lg shadow-blue-500/20"
                    >
                      {hasPurchased ? "Découvrir la suite" : "Voir la boutique"} <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommandations */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#1A1A2E] dark:text-white flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" /> Suggéré pour toi
              </h2>
              
              <div className="bg-white dark:bg-[#161B22] border border-[#E1E4E8] dark:border-[#30363D] rounded-xl shadow-sm p-4 space-y-4 transition-colors duration-300">
                <div className="flex items-center gap-4 group cursor-pointer hover:bg-[#F8F9FA] dark:hover:bg-[#0D1117] p-2 rounded-lg transition-colors">
                  <div className="w-10 h-10 bg-[#1A3557]/10 dark:bg-[#1A3557]/30 rounded flex items-center justify-center text-[#1A3557] dark:text-blue-400">
                    <Book className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1A2E] dark:text-white text-sm">Méthode Dissertation</p>
                    <p className="text-xs text-[#6B7280] dark:text-[#8B949E] uppercase">Ressource • Philo</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group cursor-pointer hover:bg-[#F8F9FA] dark:hover:bg-[#0D1117] p-2 rounded-lg transition-colors">
                  <div className="w-10 h-10 bg-green-50 dark:bg-green-900/30 rounded flex items-center justify-center text-green-600 dark:text-green-400">
                    <Target className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-[#1A1A2E] dark:text-white text-sm">Quiz : Fonctions</p>
                      <span className="bg-[#D81B60]/10 text-[#D81B60] text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">Nouveau</span>
                    </div>
                    <p className="text-xs text-[#6B7280] dark:text-[#8B949E] uppercase">Exercice • Maths</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* FAB: Ajouter un devoir / interro */}
      <button
        onClick={() => setShowAddAssessment(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-xl shadow-blue-600/30 transition-all hover:scale-110"
        title="Ajouter un devoir / interro"
      >
        <Plus className="w-6 h-6" />
      </button>

      {showAddAssessment && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="absolute inset-0" onClick={() => setShowAddAssessment(false)} />
          <div className="relative z-10 w-full max-w-sm bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-5 flex justify-between items-center">
              Ajouter un devoir / interro
              <button onClick={() => setShowAddAssessment(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <X className="w-5 h-5" />
              </button>
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-gray-500 dark:text-slate-400 block mb-1">Matière</label>
                <select
                  value={fabSubjectId}
                  onChange={(e) => {
                    const subject = ASSESSMENT_SUBJECTS.find(s => s.id === e.target.value);
                    if (subject) { setFabSubjectId(subject.id); setFabSubjectName(subject.name); }
                  }}
                  className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl py-3 px-4 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500"
                >
                  {ASSESSMENT_SUBJECTS.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 dark:text-slate-400 block mb-1">Type</label>
                <select
                  value={fabType}
                  onChange={(e) => setFabType(e.target.value as 'INTERRO' | 'DEVOIR' | 'BAC_BLANC')}
                  className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl py-3 px-4 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="INTERRO">Interrogation</option>
                  <option value="DEVOIR">Devoir</option>
                  <option value="BAC_BLANC">BAC Blanc</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 dark:text-slate-400 block mb-1">Titre (optionnel)</label>
                <input
                  type="text"
                  placeholder="Ex: Devoir Régional N°1"
                  value={fabTitle}
                  onChange={(e) => setFabTitle(e.target.value)}
                  className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl py-3 px-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 dark:text-slate-400 block mb-1">Date</label>
                <input
                  type="date"
                  value={fabDate}
                  onChange={(e) => setFabDate(e.target.value)}
                  className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl py-3 px-4 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                onClick={handleSaveAssessment}
                disabled={!fabDate}
                className="w-full bg-blue-600 disabled:opacity-40 text-white font-bold py-3.5 rounded-xl text-sm transition-all hover:bg-blue-700"
              >
                Enregistrer cette évaluation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
