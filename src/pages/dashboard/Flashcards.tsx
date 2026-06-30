import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, AlertTriangle, Lightbulb, BookOpen, Target, ArrowLeft, Clock, PlayCircle, Timer, PenTool, ChevronRight, Sigma, Loader2 } from 'lucide-react';
import { tomeLoaders } from '../../data/tomeLoaders';
import { EncadreBlock, MathBlock, Tome } from '../../types/course';
import { parseMarkdown } from '../../components/blocks/BlockRenderer';
import { useAuth } from '../../contexts/AuthContext';
import { useUser } from '../../contexts/UserContext';
import { db } from '../../config/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { AssessmentEvent } from '../../components/types';
import { useNavigate } from 'react-router-dom';
import { getRecommendedTome } from '../../utils/getRecommendedTome';
import { useTheme } from '../../contexts/ThemeContext';
import { useFlashcardProgress } from '../../hooks/useFlashcardProgress';

export interface FlashcardItem {
  id: string;
  type: string;
  titre?: string;
  contenu: string | string[];
}

// Map temporaire pour les métadonnées des cours.
// Exporté : c'est la source unique des chapitres disposant d'un paquet de
// flashcards (réutilisé par l'Overview pour le compteur « Révisions du jour »).
export const COURSE_METADATA: Record<string, any> = {
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
    colorClass: 'from-blue-600 to-blue-800'
  },
  't3-primitives': {
    title: 'Primitives & Intégrales',
    subject: 'Mathématiques',
    level: 'Terminale D',
    colorClass: 'from-blue-600 to-blue-800'
  },
  't4-suites': {
    title: 'Suites Numériques',
    subject: 'Mathématiques',
    level: 'Terminale D',
    colorClass: 'from-blue-600 to-blue-800'
  },
  't5-log-expo': {
    title: 'Logarithme & Exponentielle',
    subject: 'Mathématiques',
    level: 'Terminale D',
    colorClass: 'from-blue-600 to-blue-800'
  },
  't6-trigonometrie': {
    title: 'Fonctions Trigonométriques',
    subject: 'Mathématiques',
    level: 'Terminale D',
    colorClass: 'from-blue-600 to-blue-800'
  },
  't7-probabilites': {
    title: 'Probabilités',
    subject: 'Mathématiques',
    level: 'Terminale D',
    colorClass: 'from-blue-600 to-blue-800'
  },
  't8-statistiques': {
    title: 'Statistiques',
    subject: 'Mathématiques',
    level: 'Terminale D',
    colorClass: 'from-blue-600 to-blue-800'
  },
  't9-geometrie-espace': {
    title: 'Géométrie dans l\'Espace',
    subject: 'Mathématiques',
    level: 'Terminale D',
    colorClass: 'from-blue-600 to-blue-800'
  },
  't10-complexes': {
    title: 'Nombres Complexes',
    subject: 'Mathématiques',
    level: 'Terminale D',
    colorClass: 'from-blue-600 to-blue-800'
  },
  't11-equations-diff': {
    title: 'Les Équations Différentielles',
    subject: 'Mathématiques',
    level: 'Terminale D',
    colorClass: 'from-blue-600 to-blue-800'
  },
  't12-revisions-bac': {
    title: 'Révisions BAC Complètes',
    subject: 'Mathématiques',
    level: 'Terminale D',
    colorClass: 'from-blue-600 to-blue-800'
  }
};

// `tomeData` est chargé à la demande par l'appelant (code-splitting) puis passé
// ici ; null = tome non encore implémenté → on retombe sur une fiche simulée.
const extractFlashcards = (courseId: string, tomeData: Tome | null) => {
  const cards: FlashcardItem[] = [];

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
  const { isDue, markReviewed } = useFlashcardProgress();
  const [view, setView] = useState<'hub' | 'cards'>('hub');
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  
  // Hub State
  const [assessments, setAssessments] = useState<AssessmentEvent[]>([]);
  
  // Cards State
  const [cards, setCards] = useState<FlashcardItem[]>([]);
  const [isLoadingCards, setIsLoadingCards] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [stats, setStats] = useState({ acquis: 0, presque: 0, aRevoir: 0 });
  const [isFinished, setIsFinished] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  // Répétition espacée légère : cartes ratées à re-proposer + indicateur de 2e tour
  const [aRevoirCards, setARevoirCards] = useState<FlashcardItem[]>([]);
  const [isReRound, setIsReRound] = useState(false);

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

  // Auto-évaluation à 3 niveaux + passage à la fiche suivante
  const grade = (level: 'aRevoir' | 'presque' | 'acquis') => {
    if (!isFlipped || currentIndex >= cards.length) return;
    const card = cards[currentIndex];
    setStats(prev => ({ ...prev, [level]: prev[level] + 1 }));
    if (level === 'aRevoir' && card) setARevoirCards(prev => [...prev, card]);
    setDirection(level === 'acquis' ? 1 : level === 'aRevoir' ? -1 : 0);
    setTimeout(() => {
      if (currentIndex + 1 < cards.length) {
        setCurrentIndex(i => i + 1);
        setDirection(0);
        setIsFlipped(false);
      } else {
        // Fin de session : on planifie la prochaine échéance (1er tour seulement)
        if (!isReRound && selectedCourse) {
          const finalAcquis = stats.acquis + (level === 'acquis' ? 1 : 0);
          const pct = Math.round((finalAcquis / (cards.length || 1)) * 100);
          markReviewed(selectedCourse, pct);
        }
        setIsFinished(true);
      }
    }, 240);
  };

  // Clavier : Espace/Entrée pour retourner la fiche, 1·2·3 pour s'auto-évaluer
  useEffect(() => {
    if (view !== 'cards' || isFinished) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setIsFlipped(true);
      } else if (e.key === '1') grade('aRevoir');
      else if (e.key === '2') grade('presque');
      else if (e.key === '3') grade('acquis');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view, isFinished, isFlipped, currentIndex, cards.length]);

  const launchRevision = async (courseId: string) => {
    setSelectedCourse(courseId);
    setCards([]);
    setCurrentIndex(0);
    setStats({ acquis: 0, presque: 0, aRevoir: 0 });
    setIsFinished(false);
    setDirection(0);
    setIsFlipped(false);
    setARevoirCards([]);
    setIsReRound(false);
    setView('cards');
    // Chargement à la demande du chunk du tome puis extraction des fiches.
    setIsLoadingCards(true);
    const loader = tomeLoaders[courseId];
    const tomeData = loader ? await loader() : null;
    setCards(extractFlashcards(courseId, tomeData));
    setIsLoadingCards(false);
  };

  // 2e tour : on rejoue uniquement les cartes marquées « à revoir »
  const restartARevoir = () => {
    if (aRevoirCards.length === 0) return;
    setCards(aRevoirCards);
    setCurrentIndex(0);
    setStats({ acquis: 0, presque: 0, aRevoir: 0 });
    setIsFinished(false);
    setDirection(0);
    setIsFlipped(false);
    setARevoirCards([]);
    setIsReRound(true);
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
            <div>
              <h1 className="text-2xl font-bold" style={{ color: palette.ink, fontFamily: palette.display }}>
                Hub de Révision
              </h1>
              <p className="text-sm" style={{ color: palette.ink2 }}>Mémorise, entraîne-toi, puis compose — tout au même endroit.</p>
            </div>
          </div>

          {/* Hero révision — répétition espacée (maquette #8) */}
          {(() => {
            const dueList = Array.from(new Set([...unlockedCourses, 't1-limites'])).filter(c => COURSE_METADATA[c] && isDue(c));
            const dueCount = dueList.length;
            return (
              <div className="relative overflow-hidden rounded-[22px] p-6" style={{ background: palette.heroBg, color: '#fff', boxShadow: `0 7px 18px ${palette.heroShadow}, inset 0 1px 0 rgba(255,255,255,.28)` }}>
                <div className="absolute -top-12 -right-8 w-40 h-40 rounded-full pointer-events-none" style={{ border: '1.5px solid rgba(255,255,255,.14)' }} />
                <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.10) 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
                <div className="relative">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] font-poppins" style={{ background: 'rgba(255,255,255,.16)', border: '1px solid rgba(255,255,255,.18)' }}>
                    <RotateCcw className="w-3 h-3" /> Répétition espacée
                  </span>
                  <h2 className="mt-3 mb-1.5 text-[22px] font-extrabold leading-tight" style={{ fontFamily: palette.display, textShadow: '0 2px 12px rgba(0,0,0,.18)' }}>
                    {dueCount > 0 ? `${dueCount} chapitre${dueCount > 1 ? 's' : ''} t'attend${dueCount > 1 ? 'ent' : ''}` : 'Tout est à jour 🎉'}
                  </h2>
                  <p className="text-[13px] mb-4" style={{ color: 'rgba(255,255,255,.85)' }}>
                    {dueCount > 0 ? '5 minutes par jour suffisent pour ancrer tes cours durablement.' : 'Reviens demain, ou révise un chapitre librement ci-dessous.'}
                  </p>
                  <button
                    onClick={() => dueCount > 0 ? launchRevision(dueList[0]) : document.getElementById('revisions-libres')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center gap-2 rounded-[14px] px-6 py-3 text-[14px] font-extrabold transition-transform hover:scale-[1.02]"
                    style={{ background: '#fff', color: palette.accent2, boxShadow: '0 4px 12px rgba(0,0,0,.16)' }}
                  >
                    <PlayCircle className="w-[18px] h-[18px]" /> {dueCount > 0 ? 'Commencer la révision' : 'Réviser librement'}
                  </button>
                </div>
              </div>
            );
          })()}

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
                  <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-[20px] border" style={{ background: `${palette.tipBar}1A`, borderColor: `${palette.tipBar}40` }}>
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-8 h-8 rounded-full font-black flex items-center justify-center shrink-0" style={{ background: palette.tipBar, color: '#FFF' }}>3</div>
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
                      style={{ background: palette.tipBar }}
                    >
                      <BookOpen size={18} /> Aller au Tome
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Parcours d'entraînement — 3 paliers d'intensité croissante */}
          <div>
            <h3 className="font-bold mb-1 text-lg" style={{ color: palette.ink }}>Ton parcours d'entraînement</h3>
            <p className="text-sm mb-5" style={{ color: palette.ink2 }}>
              Trois étapes, l'effort qui monte : mémorise, entraîne-toi, puis compose en conditions réelles.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Étape 1 — Mémoriser (flashcards) */}
              <button
                onClick={() => document.getElementById('revisions-libres')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left border rounded-[24px] p-5 transition-all hover:shadow-md flex flex-col"
                style={{ background: palette.bg2, borderColor: palette.line }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${palette.accent}1A`, color: palette.accent }}>
                    <RotateCcw size={20} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: palette.ink3 }}>Étape 1</span>
                </div>
                <h4 className="font-bold mb-1" style={{ color: palette.ink }}>Mémoriser</h4>
                <p className="text-xs leading-relaxed" style={{ color: palette.ink2 }}>Flashcards : tes formules & pièges sur le bout des doigts.</p>
                <span className="text-[11px] font-bold mt-3 flex items-center gap-1" style={{ color: palette.accent }}>Choisir un chapitre <ChevronRight size={13} /></span>
              </button>

              {/* Étape 2 — S'entraîner (exos corrigés) */}
              <button
                onClick={() => navigate('/dashboard/ressources?tab=exercices')}
                className="text-left border rounded-[24px] p-5 transition-all hover:shadow-md flex flex-col"
                style={{ background: palette.bg2, borderColor: palette.line }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${palette.tipBar}1F`, color: palette.tipBar }}>
                    <PenTool size={20} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: palette.ink3 }}>Étape 2</span>
                </div>
                <h4 className="font-bold mb-1" style={{ color: palette.ink }}>S'entraîner</h4>
                <p className="text-xs leading-relaxed" style={{ color: palette.ink2 }}>Exos corrigés : t'exercer avec le corrigé sous la main.</p>
                <span className="text-[11px] font-bold mt-3 flex items-center gap-1" style={{ color: palette.tipBar }}>Voir les exos <ChevronRight size={13} /></span>
              </button>

              {/* Étape 3 — Composer (simulateur) */}
              <button
                onClick={() => navigate('/dashboard/simulateur')}
                className="text-left border rounded-[24px] p-5 transition-all hover:shadow-md flex flex-col"
                style={{ background: palette.bg2, borderColor: palette.accent }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white" style={{ background: palette.accent }}>
                    <Timer size={20} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: palette.accent }}>Étape 3</span>
                </div>
                <h4 className="font-bold mb-1" style={{ color: palette.ink }}>Composer</h4>
                <p className="text-xs leading-relaxed" style={{ color: palette.ink2 }}>Simulateur : QCM auto-corrigé, puis devoir au barème.</p>
                <span className="text-[11px] font-bold mt-3 flex items-center gap-1" style={{ color: palette.accent }}>Entrer en composition <ChevronRight size={13} /></span>
              </button>
            </div>
          </div>

          {/* Révisions Libres */}
          <div id="revisions-libres">
            <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
              <h3 className="font-bold text-lg" style={{ color: palette.ink }}>Révisions Libres (À la carte)</h3>
              {(() => {
                const due = Array.from(new Set([...unlockedCourses, 't1-limites'])).filter(c => COURSE_METADATA[c] && isDue(c)).length;
                return due > 0 ? (
                  <span className="inline-flex items-center gap-1.5 text-[11.5px] font-bold px-3 py-1 rounded-full" style={{ background: `${palette.accent}1A`, color: palette.accent }}>
                    <Clock size={13} /> {due} à réviser aujourd'hui
                  </span>
                ) : (
                  <span className="text-[11.5px] font-semibold" style={{ color: palette.tipBar }}>Tout est à jour</span>
                );
              })()}
            </div>
            <p className="text-sm mb-6" style={{ color: palette.ink2 }}>
              Choisis un chapitre débloqué pour une session de 10–15 minutes. Les chapitres « à réviser » réapparaissent selon ta mémoire.
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
                    {isDue(courseId) ? (
                      <span className="inline-flex items-center gap-1 self-start text-[10.5px] font-bold mt-3 px-2.5 py-1 rounded-full" style={{ background: `${palette.accent}1A`, color: palette.accent }}>
                        <Clock size={11} /> à réviser
                      </span>
                    ) : (
                      <span className="text-[10.5px] font-semibold mt-3" style={{ color: palette.ink3 }}>revu récemment</span>
                    )}
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

  // Libellé, couleur d'accent et icône par type de fiche (piloté par la palette)
  const typeMeta = (type?: string): { label: string; color: string; Icon: typeof BookOpen } => {
    switch (type) {
      case 'warning': return { label: 'Piège à éviter', color: palette.warnBar, Icon: AlertTriangle };
      case 'tip': return { label: 'Conseil du grand frère', color: palette.tipBar, Icon: Lightbulb };
      case 'rule': return { label: 'Règle d\'or', color: palette.accent, Icon: BookOpen };
      case 'recap': return { label: 'Récapitulatif', color: palette.anaBar, Icon: Target };
      case 'math': return { label: 'Formule à connaître', color: palette.accent2, Icon: Sigma };
      default: return { label: 'Fiche', color: palette.ink2, Icon: BookOpen };
    }
  };

  const reset = () => {
    setCurrentIndex(0);
    setStats({ acquis: 0, presque: 0, aRevoir: 0 });
    setIsFinished(false);
    setDirection(0);
    setIsFlipped(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-poppins pb-24 md:pb-10 transition-colors" style={{ background: palette.bg }}>

      {/* HEADER */}
      <header className="w-full max-w-2xl mx-auto px-4 pt-5 pb-3 flex items-center gap-3">
        <button
          onClick={() => setView('hub')}
          className="p-2 -ml-2 rounded-full transition-opacity hover:opacity-70"
          style={{ color: palette.ink2 }}
          aria-label="Retour au Hub"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1 min-w-0">
          <h1 className="font-bold text-[15px] leading-tight" style={{ color: palette.ink }}>Fiches de révision</h1>
          <p className="text-xs truncate" style={{ color: palette.ink3 }}>{selectedCourse ? COURSE_METADATA[selectedCourse]?.title : 'Chapitre'}</p>
        </div>
        {!isFinished && !isLoadingCards && (
          <span className="text-[13px] font-bold tabular-nums" style={{ color: palette.ink2 }}>
            {Math.min(currentIndex + 1, cards.length)} / {cards.length}
          </span>
        )}
      </header>

      {/* Progression */}
      {!isFinished && !isLoadingCards && (
        <div className="w-full max-w-2xl mx-auto px-5">
          <div className="h-[5px] rounded-full overflow-hidden" style={{ background: palette.bg3 }}>
            <div className="h-full rounded-full transition-all duration-300 ease-out" style={{ width: `${(currentIndex / (cards.length || 1)) * 100}%`, background: palette.accent }} />
          </div>
        </div>
      )}

      {/* MAIN */}
      <main className="flex-1 flex flex-col items-center justify-center w-full px-4 py-6">
        {isLoadingCards ? (
          <div className="flex flex-col items-center justify-center gap-4 py-20">
            <Loader2 className="w-8 h-8 animate-spin" style={{ color: palette.accent }} />
            <p className="text-sm font-medium" style={{ color: palette.ink2 }}>Préparation de tes fiches…</p>
          </div>
        ) : !isFinished ? (
          <div className="w-full max-w-md">
            <AnimatePresence mode="wait">
              {currentCard && (() => {
                const meta = typeMeta(currentCard.type);
                const MetaIcon = meta.Icon;
                return (
                  <motion.div
                    key={currentCard.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0, x: direction * 70 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 340, damping: 30 }}
                    onClick={() => !isFlipped && setIsFlipped(true)}
                    className={`rounded-[24px] border p-7 flex flex-col ${!isFlipped ? 'cursor-pointer' : ''}`}
                    style={{ background: palette.bg2, borderColor: isFlipped ? `${meta.color}59` : palette.line, minHeight: 'clamp(320px, 50vh, 440px)' }}
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span className="inline-flex items-center gap-1.5 text-[11.5px] font-bold px-2.5 py-1 rounded-full" style={{ background: `${meta.color}1A`, color: meta.color }}>
                        <MetaIcon className="w-3.5 h-3.5" strokeWidth={2.4} /> {meta.label}
                      </span>
                    </div>

                    {!isFlipped ? (
                      <div className="flex-1 flex flex-col items-center justify-center text-center gap-6">
                        <h2 className="text-[21px] font-bold leading-snug" style={{ color: palette.ink }}>
                          {currentCard.titre || meta.label}
                        </h2>
                        <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold" style={{ color: palette.ink3 }}>
                          <RotateCcw className="w-4 h-4" /> Retourner pour la réponse
                        </span>
                      </div>
                    ) : (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="flex-1 flex flex-col">
                        {currentCard.titre && (
                          <h2 className="text-[14.5px] font-bold mb-3 pb-3 border-b" style={{ color: palette.ink, borderColor: palette.line }}>
                            {currentCard.titre}
                          </h2>
                        )}
                        <div className="flex-1 text-[16.5px] leading-[1.7]" style={{ color: palette.ink, fontFamily: "'Newsreader', Georgia, Cambria, serif" }}>
                          {renderContent(currentCard.contenu)}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })()}
            </AnimatePresence>

            {/* Auto-évaluation à 3 niveaux */}
            {isFlipped ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-3 gap-2.5 mt-4">
                {([
                  { lvl: 'aRevoir', label: 'À revoir', color: palette.warnBar, key: '1' },
                  { lvl: 'presque', label: 'Presque', color: palette.anaBar, key: '2' },
                  { lvl: 'acquis', label: 'Acquis', color: palette.tipBar, key: '3' },
                ] as const).map(b => (
                  <button
                    key={b.lvl}
                    onClick={() => grade(b.lvl)}
                    className="flex flex-col items-center gap-0.5 py-3 rounded-[16px] border font-bold text-[14px] transition-transform active:scale-95"
                    style={{ background: `${b.color}14`, borderColor: `${b.color}40`, color: b.color }}
                  >
                    {b.label}
                    <span className="text-[10px] font-semibold" style={{ color: palette.ink3 }}>{b.key}</span>
                  </button>
                ))}
              </motion.div>
            ) : (
              <p className="text-center text-[12px] mt-4" style={{ color: palette.ink3 }}>
                Espace pour retourner · 1 · 2 · 3 pour t'auto-évaluer
              </p>
            )}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md border rounded-[24px] p-8 text-center"
            style={{ background: palette.bg2, borderColor: palette.line }}
          >
            {(() => {
              const total = cards.length || 1;
              const pct = Math.round((stats.acquis / total) * 100);
              const C = 2 * Math.PI * 52;
              return (
                <>
                  <div className="relative w-32 h-32 mx-auto mb-5">
                    <svg width="128" height="128" viewBox="0 0 128 128" className="-rotate-90">
                      <circle cx="64" cy="64" r="52" fill="none" stroke={palette.bg3} strokeWidth="10" />
                      <circle cx="64" cy="64" r="52" fill="none" stroke={palette.accent} strokeWidth="10" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C - (C * pct) / 100} style={{ transition: 'stroke-dashoffset 0.6s ease-out' }} />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-[30px] font-extrabold leading-none" style={{ color: palette.ink }}>{pct}%</span>
                      <span className="text-[10px] font-bold tracking-wide mt-1" style={{ color: palette.ink3 }}>acquis</span>
                    </div>
                  </div>

                  <h2 className="text-[20px] font-bold mb-1" style={{ color: palette.ink }}>Bilan de session</h2>
                  <p className="text-[13.5px] mb-6" style={{ color: palette.ink2 }}>Tu as passé {cards.length} fiches en revue.</p>

                  <div className="grid grid-cols-3 gap-2.5 mb-7">
                    {([
                      { label: 'Acquis', val: stats.acquis, color: palette.tipBar },
                      { label: 'Presque', val: stats.presque, color: palette.anaBar },
                      { label: 'À revoir', val: stats.aRevoir, color: palette.warnBar },
                    ] as const).map(s => (
                      <div key={s.label} className="rounded-[16px] py-3 border" style={{ background: `${s.color}12`, borderColor: `${s.color}30` }}>
                        <p className="text-[24px] font-extrabold leading-none" style={{ color: s.color }}>{s.val}</p>
                        <p className="text-[11px] font-semibold mt-1.5" style={{ color: palette.ink2 }}>{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {aRevoirCards.length > 0 && (
                    <button onClick={restartARevoir} className="w-full text-white py-3.5 rounded-[16px] font-bold flex items-center justify-center gap-2 mb-2.5" style={{ background: palette.accent }}>
                      <RotateCcw className="w-5 h-5" /> Refaire les {aRevoirCards.length} à revoir
                    </button>
                  )}
                  <button onClick={reset} className="w-full py-3 rounded-[16px] font-bold flex items-center justify-center gap-2 mb-2.5 border transition-opacity hover:opacity-80" style={aRevoirCards.length > 0 ? { borderColor: palette.line, color: palette.ink } : { background: palette.accent, color: '#fff', borderColor: 'transparent' }}>
                    <RotateCcw className="w-5 h-5" /> Recommencer
                  </button>
                  <button onClick={() => setView('hub')} className="w-full border py-3 rounded-[16px] font-bold transition-opacity hover:opacity-80" style={{ borderColor: palette.line, color: palette.ink }}>
                    Retour au Hub
                  </button>
                </>
              );
            })()}
          </motion.div>
        )}
      </main>
    </div>
  );
}
