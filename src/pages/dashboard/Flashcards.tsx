import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, RotateCcw, AlertTriangle, Lightbulb, BookOpen, Target, ArrowLeft, Clock, PlayCircle } from 'lucide-react';
import { tomeLesLimites } from '../../data/t1-limites';
import { EncadreBlock, MathBlock } from '../../types/course';
import { parseMarkdown } from '../../components/blocks/BlockRenderer';
import { useAuth } from '../../contexts/AuthContext';
import { useUser } from '../../contexts/UserContext';
import { db } from '../../config/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { AssessmentEvent } from '../../components/types';
import { useNavigate } from 'react-router-dom';
import { getRecommendedTome } from '../../utils/getRecommendedTome';
import { useTheme } from '../../contexts/ThemeContext';

export interface FlashcardItem {
  id: string;
  type: string;
  titre?: string;
  contenu: string | string[];
}

// Map temporaire pour les métadonnées des cours
const COURSE_METADATA: Record<string, any> = {
  't1-limites': {
    title: 'Les Limites',
    subject: 'Mathématiques',
    level: 'Terminale D',
    colorClass: 'from-blue-600 to-blue-800'
  },
  't2-derivees': {
    title: 'Les Dérivées',
    subject: 'Mathématiques',
    level: 'Terminale D',
    colorClass: 'from-purple-600 to-purple-800'
  },
  't3-primitives': {
    title: 'Les Primitives',
    subject: 'Mathématiques',
    level: 'Terminale D',
    colorClass: 'from-indigo-600 to-indigo-800'
  },
  't11-eq-diff': {
    title: 'Équations Différentielles',
    subject: 'Mathématiques',
    level: 'Terminale D',
    colorClass: 'from-teal-600 to-teal-800'
  }
};

const extractFlashcards = (courseId: string) => {
  const cards: FlashcardItem[] = [];
  // Pour l'instant, seul t1-limites a des vraies données. Pour les autres, on simule ou on retourne vide.
  const tomeData = courseId === 't1-limites' ? tomeLesLimites : null;
  
  if (tomeData) {
    tomeData.chapitres.forEach(chap => {
      chap.sections.forEach(sec => {
        sec.blocs.forEach(bloc => {
          if (bloc.type === 'rule' || bloc.type === 'warning') {
            cards.push(bloc as unknown as FlashcardItem);
          } else if (bloc.type === 'math') {
            const m = bloc as MathBlock;
            const mathContent = m.formule || m.contenu || '';
            const wrapped = mathContent.includes('$$') || mathContent.includes('\\[') ? mathContent : `\\[ ${mathContent} \\]`;
            cards.push({
              id: m.id || Math.random().toString(),
              type: 'math',
              titre: 'Formule Mathématique',
              contenu: wrapped
            });
          } else if (bloc.type === 'recap') {
            const r = bloc as EncadreBlock;
            const t = (r.titre || '').toLowerCase();
            if (!t.includes('gagner') && !t.includes('apprendre') && !t.includes('ce que')) {
              cards.push(r as unknown as FlashcardItem);
            }
          }
        });
      });
    });
  } else {
    // Fausse donnée pour les cours non implémentés
    cards.push({ id: '1', type: 'rule', titre: 'Règle d\'Or', contenu: `Ceci est une flashcard simulée pour le cours ${courseId}. Les vraies données arriveront bientôt !` });
  }
  return cards;
};

export function Flashcards() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { unlockedCourses } = useUser();
  const { palette } = useTheme();
  const [view, setView] = useState<'hub' | 'cards'>('hub');
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  
  // Hub State
  const [assessments, setAssessments] = useState<AssessmentEvent[]>([]);
  
  // Cards State
  const [cards, setCards] = useState<FlashcardItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [stats, setStats] = useState({ mastered: 0, toReview: 0 });
  const [isFinished, setIsFinished] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (!currentUser) return;
    const unsub = onSnapshot(
      collection(db, 'users', currentUser.uid, 'assessments'),
      snap => {
        setAssessments(snap.docs.map(d => d.data() as AssessmentEvent));
      }
    );
    return () => unsub();
  }, [currentUser]);

  const launchRevision = (courseId: string) => {
    const extracted = extractFlashcards(courseId);
    setCards(extracted);
    setSelectedCourse(courseId);
    setCurrentIndex(0);
    setStats({ mastered: 0, toReview: 0 });
    setIsFinished(false);
    setDirection(0);
    setIsFlipped(false);
    setView('cards');
  };

  const todayStr = new Date().toISOString().split('T')[0];
  // Chercher un devoir dans les 5 prochains jours
  const upcomingAssessment = assessments
    .filter(a => a.date >= todayStr && a.status === 'UPCOMING')
    .sort((a, b) => a.date.localeCompare(b.date))[0];
  
  let daysUntilNext = -1;
  if (upcomingAssessment) {
    const diffTime = new Date(upcomingAssessment.date).getTime() - new Date(todayStr).getTime();
    daysUntilNext = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  // ---- RENDER HUB ----
  if (view === 'hub') {
    return (
      <div className="min-h-screen font-poppins pb-24 md:pb-10 transition-colors" style={{ background: palette.bg }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 space-y-8">
          
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl shrink-0" style={{ background: `${palette.accent}20` }}>
              <RotateCcw className="w-6 h-6" style={{ color: palette.accent }} />
            </div>
            <h1 className="text-2xl font-bold font-playfair" style={{ color: palette.ink }}>
              Hub de Révision
            </h1>
          </div>

          {/* Plan de Bataille */}
          {upcomingAssessment && daysUntilNext <= 5 && (
            <div className="border-2 rounded-[28px] p-6 shadow-lg relative overflow-hidden" style={{ background: palette.bg, borderColor: palette.accent }}>
              <div className="absolute -right-10 -top-10 opacity-10" style={{ color: palette.accent }}>
                <Target size={150} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded" style={{ background: palette.accent, color: '#FFF' }}>Plan de Bataille</span>
                  <span className="text-sm font-bold flex items-center gap-1" style={{ color: palette.ink2 }}>
                    <Clock size={14} style={{ color: palette.accent }} /> J-{daysUntilNext}
                  </span>
                </div>
                
                <h2 className="text-xl md:text-2xl font-bold mb-2" style={{ color: palette.ink }}>
                  Objectif : {upcomingAssessment.type === 'DEVOIR' ? 'Devoir' : 'Évaluation'} de {upcomingAssessment.subjectName}
                </h2>
                <p className="text-sm mb-6 max-w-2xl" style={{ color: palette.ink2 }}>
                  💡 <strong>Message du Grand Frère :</strong> Ne laisse rien au hasard. Voici la stratégie en 3 étapes pour gâter le coin à cette évaluation.
                </p>

                <div className="space-y-4">
                  {/* Étape 1 : Cahier de cours */}
                  <div className="flex items-start gap-4 p-4 rounded-[20px] border" style={{ background: palette.bg2, borderColor: palette.line }}>
                    <div className="w-8 h-8 rounded-full font-black flex items-center justify-center shrink-0" style={{ background: `${palette.accent}20`, color: palette.accent }}>1</div>
                    <div>
                      <h3 className="font-bold text-base" style={{ color: palette.ink }}>Relire ton cahier de cours</h3>
                      <p className="text-sm mt-1" style={{ color: palette.ink2 }}>Eductome t'aide à comprendre, mais ton prof te note sur ce qu'il a enseigné. Assure-toi de maîtriser ses méthodes en premier.</p>
                    </div>
                  </div>

                  {/* Étape 2 : Flashcards */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-[20px] border" style={{ background: `${palette.accent}10`, borderColor: `${palette.accent}30` }}>
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-8 h-8 rounded-full font-black flex items-center justify-center shrink-0" style={{ background: palette.accent, color: '#FFF' }}>2</div>
                      <div>
                        <h3 className="font-bold text-base" style={{ color: palette.ink }}>S'échauffer avec les Flashcards</h3>
                        <p className="text-sm mt-1" style={{ color: palette.ink2 }}>Vérifie que tu connais tes formules et les pièges classiques sur le bout des doigts.</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        const tomeInfo = getRecommendedTome(upcomingAssessment.subjectId, upcomingAssessment.title);
                        launchRevision(tomeInfo ? tomeInfo.tomeId : 't1-limites');
                      }}
                      className="font-bold px-6 py-2.5 rounded-[16px] transition-colors shrink-0 flex items-center justify-center gap-2 shadow-sm w-full md:w-auto text-white"
                      style={{ background: palette.accent }}
                    >
                      <PlayCircle size={18} /> Lancer l'échauffement
                    </button>
                  </div>

                  {/* Étape 3 : Exercices */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-[20px] border" style={{ background: `rgba(34, 197, 94, 0.1)`, borderColor: `rgba(34, 197, 94, 0.3)` }}>
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-8 h-8 rounded-full font-black flex items-center justify-center shrink-0" style={{ background: '#22c55e', color: '#FFF' }}>3</div>
                      <div>
                        <h3 className="font-bold text-base" style={{ color: palette.ink }}>S'entraîner avec les Exercices</h3>
                        <p className="text-sm mt-1" style={{ color: palette.ink2 }}>Passe aux choses sérieuses avec les exercices types du Tome officiel.</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        const tomeInfo = getRecommendedTome(upcomingAssessment.subjectId, upcomingAssessment.title);
                        if (tomeInfo) {
                          navigate(`/dashboard/course/${tomeInfo.tomeId}`);
                        } else {
                          navigate(`/dashboard/boutique`);
                        }
                      }}
                      className="font-bold px-6 py-2.5 rounded-[16px] transition-colors shrink-0 flex items-center justify-center gap-2 shadow-sm w-full md:w-auto text-white"
                      style={{ background: '#16a34a' }}
                    >
                      <BookOpen size={18} /> Aller au Tome
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Révisions Libres */}
          <div>
            <h3 className="font-bold mb-4 text-lg" style={{ color: palette.ink }}>Révisions Libres (À la carte)</h3>
            <p className="text-sm mb-6" style={{ color: palette.ink2 }}>
              Choisis un chapitre que tu as déjà débloqué pour une session de 10-15 minutes chronos. Parfait pour tester ta mémoire après un cours !
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from(new Set([...unlockedCourses, 't1-limites'])).map(courseId => {
                const meta = COURSE_METADATA[courseId];
                if (!meta) return null;
                return (
                  <div 
                    key={courseId}
                    onClick={() => launchRevision(courseId)}
                    className="border rounded-[24px] p-5 cursor-pointer transition-all hover:shadow-md group flex flex-col"
                    style={{ background: palette.bg, borderColor: palette.line }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${meta.colorClass} flex items-center justify-center mb-4 text-white shadow-sm group-hover:scale-110 transition-transform`}>
                      <BookOpen size={20} />
                    </div>
                    <h4 className="font-bold mb-1 transition-colors" style={{ color: palette.ink }}>
                      {meta.title}
                    </h4>
                    <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: palette.ink3 }}>
                      {meta.subject}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    );
  }

  // ---- RENDER CARDS VIEW ----

  const renderContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
      return (
        <ul className="list-disc pl-5 space-y-2">
          {content.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: parseMarkdown(item) }} />
          ))}
        </ul>
      );
    }
    return <div dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }} />;
  };

  const currentCard = cards[currentIndex];

  const swipe = (isMastered: boolean) => {
    if (currentIndex >= cards.length || !isFlipped) return;
    setDirection(isMastered ? 1 : -1);
    if (isMastered) {
      setStats(prev => ({ ...prev, mastered: prev.mastered + 1 }));
    } else {
      setStats(prev => ({ ...prev, toReview: prev.toReview + 1 }));
    }
    setTimeout(() => {
      if (currentIndex + 1 < cards.length) {
        setCurrentIndex(prev => prev + 1);
        setDirection(0);
        setIsFlipped(false);
      } else {
        setIsFinished(true);
      }
    }, 300);
  };

  const getCardIcon = (type?: string) => {
    switch (type) {
      case 'warning': return <AlertTriangle className="w-8 h-8 text-red-500" />;
      case 'tip': return <Lightbulb className="w-8 h-8 text-green-500" />;
      case 'rule': return <BookOpen className="w-8 h-8 text-blue-500" />;
      case 'recap': return <Target className="w-8 h-8 text-orange-500" />;
      case 'math': return <span className="text-2xl">🧮</span>;
      default: return null;
    }
  };

  const getCardColor = (type?: string) => {
    switch (type) {
      case 'warning': return 'border-red-500 from-red-50 to-white dark:from-red-900/20 dark:to-[#161B22]';
      case 'tip': return 'border-green-500 from-green-50 to-white dark:from-green-900/20 dark:to-[#161B22]';
      case 'rule': return 'border-blue-500 from-blue-50 to-white dark:from-blue-900/20 dark:to-[#161B22]';
      case 'recap': return 'border-orange-500 from-orange-50 to-white dark:from-orange-900/20 dark:to-[#161B22]';
      case 'math': return 'border-purple-500 from-purple-50 to-white dark:from-purple-900/20 dark:to-[#161B22]';
      default: return 'border-gray-200 from-gray-50 to-white dark:from-gray-800 dark:to-[#161B22]';
    }
  };

  const getCardTitle = (type?: string) => {
    switch (type) {
      case 'warning': return 'Piège à éviter';
      case 'tip': return 'Conseil Grand Frère';
      case 'rule': return 'Règle d\'Or / Méthode';
      case 'recap': return 'Récapitulatif';
      case 'math': return 'Formule à maîtriser';
      default: return 'Fiche';
    }
  };

  const reset = () => {
    setCurrentIndex(0);
    setStats({ mastered: 0, toReview: 0 });
    setIsFinished(false);
    setDirection(0);
    setIsFlipped(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-poppins pb-20 md:pb-0 transition-colors" style={{ background: palette.bg }}>
      
      {/* HEADER */}
      <header className="border-b px-4 py-4 flex items-center justify-between sticky top-0 z-20 backdrop-blur-md" style={{ background: `${palette.bg}cc`, borderColor: palette.line }}>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setView('hub')}
            className="p-2 -ml-2 rounded-full transition-colors hover:bg-black/5"
            style={{ color: palette.ink2 }}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="font-bold" style={{ color: palette.ink }}>Révision Express</h1>
            <p className="text-xs" style={{ color: palette.ink3 }}>{selectedCourse ? COURSE_METADATA[selectedCourse]?.title : 'Chapitre'}</p>
          </div>
        </div>
        {!isFinished && (
          <div className="px-3 py-1 rounded-[12px] text-sm font-bold" style={{ background: palette.bg2, color: palette.ink2 }}>
            {currentIndex + 1} / {cards.length}
          </div>
        )}
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 relative overflow-hidden">
        
        {/* Background Decorative Circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#D81B60]/10 rounded-full blur-3xl pointer-events-none"></div>

        {!isFinished ? (
          <div className="relative w-full max-w-sm h-[60vh] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {currentCard && (
                <motion.div
                  key={currentCard.id}
                  initial={{ scale: 0.95, opacity: 0, y: 20 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1, 
                    y: 0,
                    x: direction !== 0 ? direction * 300 : 0,
                    rotate: direction !== 0 ? direction * 15 : 0
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  drag={isFlipped ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, { offset }) => {
                    const swipeThreshold = 50;
                    if (offset.x > swipeThreshold) {
                      swipe(true);
                    } else if (offset.x < -swipeThreshold) {
                      swipe(false);
                    }
                  }}
                  onClick={() => !isFlipped && setIsFlipped(true)}
                  className={`absolute w-full h-full bg-gradient-to-br ${getCardColor(currentCard.type)} rounded-3xl border-2 shadow-xl p-6 flex flex-col ${!isFlipped ? 'cursor-pointer hover:shadow-2xl transition-shadow' : 'cursor-grab active:cursor-grabbing'}`}
                >
                  <AnimatePresence mode="wait">
                    {!isFlipped ? (
                      <motion.div 
                        key="front"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        className="flex-1 flex flex-col items-center justify-center text-center space-y-6"
                      >
                        <div className="p-6 rounded-full bg-white/50 dark:bg-black/20 shadow-sm border border-black/5 dark:border-white/5">
                          {getCardIcon(currentCard.type)}
                        </div>
                        <h2 className="font-bold text-2xl uppercase tracking-wider px-4" style={{ color: palette.ink }}>
                          {currentCard.titre || getCardTitle(currentCard.type)}
                        </h2>
                        <div className="absolute bottom-8 flex flex-col items-center animate-bounce opacity-70">
                          <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: palette.ink2 }}>
                            Appuyez pour révéler
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="back"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="flex-1 flex flex-col h-full"
                      >
                        <div className="flex items-center gap-3 mb-6 shrink-0 border-b pb-4 border-black/5 dark:border-white/5">
                          {getCardIcon(currentCard.type)}
                          <h2 className="font-bold text-sm uppercase tracking-wider opacity-80" style={{ color: palette.ink }}>
                            {currentCard.titre || getCardTitle(currentCard.type)}
                          </h2>
                        </div>
                        
                        <div className="flex-1 overflow-y-auto hide-scrollbar text-lg leading-relaxed flex items-center" style={{ color: palette.ink }}>
                          <div className="w-full">
                            {renderContent(currentCard.contenu)}
                          </div>
                        </div>

                        <div className="mt-6 text-center text-xs font-bold uppercase tracking-widest opacity-50 shrink-0" style={{ color: palette.ink3 }}>
                          Swipe pour répondre
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-sm border rounded-[32px] shadow-xl p-8 text-center relative z-10"
            style={{ background: palette.bg, borderColor: palette.line }}
          >
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(34, 197, 94, 0.2)', color: '#22c55e' }}>
              <Check className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-black mb-2" style={{ color: palette.ink }}>Session Terminée !</h2>
            <p className="mb-8" style={{ color: palette.ink2 }}>Tu as passé en revue {cards.length} fiches.</p>
            
            <div className="flex justify-between gap-4 mb-8">
              <div className="rounded-[20px] p-4 flex-1 border" style={{ background: 'rgba(34, 197, 94, 0.1)', borderColor: 'rgba(34, 197, 94, 0.3)' }}>
                <p className="text-3xl font-black" style={{ color: '#16a34a' }}>{stats.mastered}</p>
                <p className="text-xs font-medium mt-1 uppercase" style={{ color: '#15803d' }}>Maîtrisées</p>
              </div>
              <div className="rounded-[20px] p-4 flex-1 border" style={{ background: 'rgba(249, 115, 22, 0.1)', borderColor: 'rgba(249, 115, 22, 0.3)' }}>
                <p className="text-3xl font-black" style={{ color: '#ea580c' }}>{stats.toReview}</p>
                <p className="text-xs font-medium mt-1 uppercase" style={{ color: '#c2410c' }}>À revoir</p>
              </div>
            </div>

            <button 
              onClick={reset}
              className="w-full text-white py-4 rounded-[20px] font-bold flex items-center justify-center gap-2 transition-colors mb-3 shadow-md"
              style={{ background: palette.accent }}
            >
              <RotateCcw className="w-5 h-5" /> Recommencer
            </button>
            <button 
              onClick={() => setView('hub')}
              className="w-full border-2 py-3.5 rounded-[20px] font-bold transition-colors hover:bg-black/5"
              style={{ borderColor: palette.line, color: palette.ink }}
            >
              Retour au Hub
            </button>
          </motion.div>
        )}

        {/* CONTROLS (Only show when not finished) */}
        {!isFinished && (
          <div className="w-full max-w-sm mt-8 flex justify-center gap-8 relative z-10">
            <button 
              onClick={() => swipe(false)}
              disabled={!isFlipped}
              className={`w-16 h-16 border-2 rounded-full flex items-center justify-center transition-all shadow-lg ${
                !isFlipped 
                  ? 'opacity-40 cursor-not-allowed grayscale' 
                  : 'hover:scale-105 active:scale-95'
              }`}
              title="À revoir"
              style={{ background: palette.bg, borderColor: '#ef4444', color: '#ef4444' }}
            >
              <X className="w-8 h-8" />
            </button>
            <button 
              onClick={() => swipe(true)}
              disabled={!isFlipped}
              className={`w-16 h-16 border-2 rounded-full flex items-center justify-center transition-all shadow-lg ${
                !isFlipped 
                  ? 'opacity-40 cursor-not-allowed grayscale' 
                  : 'hover:scale-105 active:scale-95'
              }`}
              title="Je maîtrise"
              style={{ background: palette.bg, borderColor: '#22c55e', color: '#22c55e' }}
            >
              <Check className="w-8 h-8" />
            </button>
          </div>
        )}

      </main>
    </div>
  );
}
