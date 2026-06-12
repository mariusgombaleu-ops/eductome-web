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
      <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#0D1117] font-poppins pb-24 md:pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 space-y-8">
          
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-2.5 rounded-xl shrink-0">
              <RotateCcw className="w-6 h-6 text-orange-500" />
            </div>
            <h1 className="text-2xl font-bold font-playfair text-[#1A1A2E] dark:text-white">
              Hub de Révision
            </h1>
          </div>

          {/* Plan de Bataille */}
          {upcomingAssessment && daysUntilNext <= 5 && (
            <div className="bg-white dark:bg-[#161B22] border-2 border-orange-500 rounded-2xl p-6 shadow-lg relative overflow-hidden">
              <div className="absolute -right-10 -top-10 opacity-10 text-orange-500">
                <Target size={150} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded">Plan de Bataille</span>
                  <span className="text-sm font-bold text-gray-600 dark:text-gray-300 flex items-center gap-1">
                    <Clock size={14} className="text-orange-500" /> J-{daysUntilNext}
                  </span>
                </div>
                
                <h2 className="text-xl md:text-2xl font-bold text-[#1A1A2E] dark:text-white mb-2">
                  Objectif : {upcomingAssessment.type === 'DEVOIR' ? 'Devoir' : 'Évaluation'} de {upcomingAssessment.subjectName}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-2xl">
                  💡 <strong>Message du Grand Frère :</strong> Ne laisse rien au hasard. Voici la stratégie en 3 étapes pour gâter le coin à cette évaluation.
                </p>

                <div className="space-y-4">
                  {/* Étape 1 : Cahier de cours */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-black flex items-center justify-center shrink-0">1</div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-base">Relire ton cahier de cours</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Eductome t'aide à comprendre, mais ton prof te note sur ce qu'il a enseigné. Assure-toi de maîtriser ses méthodes en premier.</p>
                    </div>
                  </div>

                  {/* Étape 2 : Flashcards */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-8 h-8 rounded-full bg-orange-500 text-white font-black flex items-center justify-center shrink-0">2</div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-base">S'échauffer avec les Flashcards</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Vérifie que tu connais tes formules et les pièges classiques sur le bout des doigts.</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        const tomeInfo = getRecommendedTome(upcomingAssessment.subjectId, upcomingAssessment.title);
                        launchRevision(tomeInfo ? tomeInfo.tomeId : 't1-limites');
                      }}
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-xl transition-colors shrink-0 flex items-center justify-center gap-2 shadow-sm w-full md:w-auto"
                    >
                      <PlayCircle size={18} /> Lancer l'échauffement
                    </button>
                  </div>

                  {/* Étape 3 : Exercices */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-8 h-8 rounded-full bg-green-500 text-white font-black flex items-center justify-center shrink-0">3</div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-base">S'entraîner avec les Exercices</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Passe aux choses sérieuses avec les exercices types du Tome officiel.</p>
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
                      className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2.5 rounded-xl transition-colors shrink-0 flex items-center justify-center gap-2 shadow-sm w-full md:w-auto"
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
            <h3 className="font-bold text-[#1A1A2E] dark:text-white mb-4 text-lg">Révisions Libres (À la carte)</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Choisis un chapitre que tu as déjà débloqué pour une session de 10-15 minutes chronos. Parfait pour tester ta mémoire après un cours !
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {unlockedCourses.map(courseId => {
                const meta = COURSE_METADATA[courseId];
                if (!meta) return null;
                return (
                  <div 
                    key={courseId}
                    onClick={() => launchRevision(courseId)}
                    className="bg-white dark:bg-[#161B22] border border-gray-200 dark:border-gray-800 rounded-2xl p-5 cursor-pointer hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-md group flex flex-col"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${meta.colorClass} flex items-center justify-center mb-4 text-white shadow-sm group-hover:scale-110 transition-transform`}>
                      <BookOpen size={20} />
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {meta.title}
                    </h4>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
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
    if (currentIndex >= cards.length) return;
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
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0D1117] flex flex-col font-poppins pb-20 md:pb-0">
      
      {/* HEADER */}
      <header className="bg-white dark:bg-[#161B22] border-b border-gray-200 dark:border-gray-800 px-4 py-4 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setView('hub')}
            className="p-2 -ml-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="font-bold text-[#1A3557] dark:text-white">Révision Express</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">{selectedCourse ? COURSE_METADATA[selectedCourse]?.title : 'Chapitre'}</p>
          </div>
        </div>
        {!isFinished && (
          <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-bold text-gray-600 dark:text-gray-300">
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
            <AnimatePresence>
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
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, { offset }) => {
                    const swipeThreshold = 50;
                    if (offset.x > swipeThreshold) {
                      swipe(true);
                    } else if (offset.x < -swipeThreshold) {
                      swipe(false);
                    }
                  }}
                  className={`absolute w-full h-full bg-gradient-to-br ${getCardColor(currentCard.type)} rounded-3xl border-2 shadow-xl p-6 flex flex-col cursor-grab active:cursor-grabbing`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    {getCardIcon(currentCard.type)}
                    <h2 className="font-bold text-lg text-gray-800 dark:text-white uppercase tracking-wider">
                      {currentCard.titre || getCardTitle(currentCard.type)}
                    </h2>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto hide-scrollbar text-gray-700 dark:text-gray-300 text-lg leading-relaxed flex items-center">
                    <div>
                      {renderContent(currentCard.contenu)}
                    </div>
                  </div>

                  <div className="mt-6 text-center text-xs text-gray-400 font-medium uppercase tracking-widest">
                    Swipe pour répondre
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-sm bg-white dark:bg-[#161B22] border border-gray-200 dark:border-gray-800 rounded-3xl shadow-xl p-8 text-center relative z-10"
          >
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
              <Check className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-black text-[#1A3557] dark:text-white mb-2">Session Terminée !</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">Tu as passé en revue {cards.length} fiches.</p>
            
            <div className="flex justify-between gap-4 mb-8">
              <div className="bg-green-50 dark:bg-green-900/10 rounded-xl p-4 flex-1 border border-green-100 dark:border-green-900/30">
                <p className="text-3xl font-black text-green-600 dark:text-green-400">{stats.mastered}</p>
                <p className="text-xs text-green-700 dark:text-green-500 font-medium mt-1 uppercase">Maîtrisées</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/10 rounded-xl p-4 flex-1 border border-orange-100 dark:border-orange-900/30">
                <p className="text-3xl font-black text-orange-600 dark:text-orange-400">{stats.toReview}</p>
                <p className="text-xs text-orange-700 dark:text-orange-500 font-medium mt-1 uppercase">À revoir</p>
              </div>
            </div>

            <button 
              onClick={reset}
              className="w-full bg-[#1A3557] hover:bg-[#11233B] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors mb-3"
            >
              <RotateCcw className="w-5 h-5" /> Recommencer
            </button>
            <button 
              onClick={() => setView('hub')}
              className="w-full bg-transparent border-2 border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 py-3.5 rounded-xl font-bold transition-colors"
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
              className="w-16 h-16 bg-white dark:bg-[#161B22] border-2 border-red-500 rounded-full flex items-center justify-center text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all hover:scale-105 shadow-lg"
              title="À revoir"
            >
              <X className="w-8 h-8" />
            </button>
            <button 
              onClick={() => swipe(true)}
              className="w-16 h-16 bg-white dark:bg-[#161B22] border-2 border-green-500 rounded-full flex items-center justify-center text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all hover:scale-105 shadow-lg"
              title="Je maîtrise"
            >
              <Check className="w-8 h-8" />
            </button>
          </div>
        )}

      </main>
    </div>
  );
}
