import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Lock, MessageCircle, Timer, Trophy } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { useUser } from '../contexts/UserContext';
import { useAuth } from '../contexts/AuthContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useTheme } from '../contexts/ThemeContext';

const DAILY_QUIZ_LIMIT = 3;
const QUIZ_ATTEMPTS_KEY = 'eductome_quiz_attempts';
const EXAM_DURATION_SECONDS = 14400;

function getTodayKey() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

function getAttemptsToday(): number {
  try {
    const raw = localStorage.getItem(QUIZ_ATTEMPTS_KEY);
    if (!raw) return 0;
    const parsed = JSON.parse(raw);
    return parsed.date === getTodayKey() ? parsed.count : 0;
  } catch {
    return 0;
  }
}

type ProfileType = 'perdu' | 'bloque' | 'memoriseur' | 'strategePresse' | 'organiseDoute';
type Step = 'intro' | 'questions' | 'result' | 'exam' | 'examResult';

interface Question {
  id: number;
  title: string;
  question: string;
  options: { id: 'A' | 'B' | 'C' | 'D'; text: string }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "Diagnostic en classe",
    question: "En classe, quand le prof explique une nouvelle notion en maths…",
    correctAnswer: 'D',
    options: [
      { id: 'A', text: "Je décroche au bout de 5 minutes, c'est trop rapide pour moi" },
      { id: 'B', text: "Je suis, je comprends, je copie. Tout va bien" },
      { id: 'C', text: "Je note tout sans vraiment écouter, je me dis que je relirai plus tard" },
      { id: 'D', text: "Je suis souvent en avance, j'ai déjà vu la notion ailleurs" }
    ]
  },
  {
    id: 2,
    title: "Face au devoir",
    question: "Tu reçois ton devoir surveillé de maths. Tu ouvres la feuille…",
    correctAnswer: 'D',
    options: [
      { id: 'A', text: "Trou noir. Je ne sais même pas par où commencer" },
      { id: 'B', text: "Je connais les formules mais je n'arrive pas à les appliquer" },
      { id: 'C', text: "Je m'en sors plutôt bien, mais je perds des points bêtement" },
      { id: 'D', text: "Je suis à l'aise, mon objectif c'est viser le 18+" }
    ]
  },
  {
    id: 3,
    title: "Méthode de révision",
    question: "Comment tu révises pour un contrôle ?",
    correctAnswer: 'D',
    options: [
      { id: 'A', text: "Je relis mon cahier la veille au soir" },
      { id: 'B', text: "Je refais les exercices du cours sans regarder le corrigé" },
      { id: 'C', text: "Je m'organise mais souvent je remets au lendemain" },
      { id: 'D', text: "J'ai un planning, je m'y tiens (ou presque)" }
    ]
  },
  {
    id: 4,
    title: "Ton rapport au cours",
    question: "Quand tu apprends une formule, tu…",
    correctAnswer: 'B',
    options: [
      { id: 'A', text: "Tu la mémorises par cœur sans savoir d'où elle vient" },
      { id: 'B', text: "Tu cherches à comprendre d'où elle vient avant de l'apprendre" },
      { id: 'C', text: "Tu l'apprends, mais tu l'oublies vite" },
      { id: 'D', text: "Tu la comprends, mais tu galères à l'appliquer dans un nouvel exercice" }
    ]
  },
  {
    id: 5,
    title: "Ta plus grande peur au BAC",
    question: "Ce qui te fait le plus peur à l'approche du BAC, c'est…",
    correctAnswer: 'D',
    options: [
      { id: 'A', text: "De ne pas avoir le temps de tout réviser" },
      { id: 'B', text: "De bloquer sur un exercice et tout perdre" },
      { id: 'C', text: "De ne pas comprendre la consigne ou tomber sur du nouveau" },
      { id: 'D', text: "De manquer mon objectif à cause d'erreurs d'inattention" }
    ]
  },
  {
    id: 6,
    title: "Combien de temps avant ton examen ?",
    question: "À combien de mois es-tu de ton BAC ou BEPC ?",
    correctAnswer: 'B',
    options: [
      { id: 'A', text: "Plus de 6 mois — j'ai le temps" },
      { id: 'B', text: "Entre 3 et 6 mois — il faut s'y mettre sérieusement" },
      { id: 'C', text: "Moins de 3 mois — c'est le sprint final" },
      { id: 'D', text: "Moins d'1 mois — urgence absolue" }
    ]
  }
];

const PROFILES = {
  perdu: {
    id: 'perdu',
    title: "Le Perdu en Classe",
    icon: "🌧",
    description: "Petit(e), je vois clair dans ton jeu. En classe, ça va trop vite. Tu copies sans comprendre. Le soir, ton cahier ressemble à un livre en chinois. **Tu n'es pas seul** — c'est le profil le plus fréquent au Cacao. Et la bonne nouvelle, c'est que c'est aussi celui qui progresse le PLUS VITE avec la bonne méthode.",
    priority: "Reprendre les bases avec un manuel qui t'explique le POURQUOI avant le COMMENT.",
    steps: [
      "Commence par Le Grand Frère Tome 1 — Les Limites",
      "Imprime les 5 fiches méthode EDUCTOME",
      "Adopte Le Planning du Grand Frère pour structurer tes semaines",
      "Abonne-toi à La Minute du Grand Frère pour des conseils chaque semaine"
    ]
  },
  bloque: {
    id: 'bloque',
    title: "Le Bloqué au Devoir",
    icon: "🔒",
    description: "Tu comprends en classe. Tes amis viennent même te demander de l'aide. Mais devant la feuille d'examen : **trou noir**. C'est frustrant, parce que tu sais que tu as travaillé. Le problème n'est pas ce que tu sais — c'est de savoir **par où commencer**. Et ça, ça s'apprend.",
    priority: "Une méthode universelle pour attaquer n'importe quel exercice, sans paniquer.",
    steps: [
      "Commence par les exercices BAC corrigés dans nos ressources gratuites (méthode étape par étape)",
      "Imprime les 5 fiches méthode — c'est ton arme principale",
      "Continue avec Le Grand Frère Tome 2 — Les Dérivées",
      "Pose tes questions sur WhatsApp dès que tu bloques"
    ]
  },
  memoriseur: {
    id: 'memoriseur',
    title: "Le Mémoriseur",
    icon: "📚",
    description: "Tu apprends. Beaucoup. Tu connais tes formules par cœur. Mais dès qu'un exercice change un peu, tu perds pied. **C'est normal** — mémoriser sans comprendre, c'est construire une maison sans fondations. Le moindre vent, tout s'écroule. La solution : remonter à la source de chaque concept.",
    priority: "Comprendre le POURQUOI de chaque formule avant de l'apprendre.",
    steps: [
      "Commence par La Racine — le pourquoi derrière chaque concept",
      "Approfondis avec Le Grand Frère (commence par le Tome qui te bloque le plus)",
      "Abonne-toi à La Minute du Grand Frère pour des rappels méthode hebdomadaires"
    ]
  },
  strategePresse: {
    id: 'strategePresse',
    title: "Le Stratège Pressé",
    icon: "⚡",
    description: "Ton BAC ou ton BEPC arrive vite. Très vite. Pas le temps de tout revoir tome par tome. **Ta priorité, c'est l'efficacité maximum** : aller droit aux essentiels, viser les chapitres qui rapportent le plus de points, et éviter les pièges classiques. Faut pas gnan — c'est jouable, mais il faut être malin.",
    priority: "L'essentiel en condensé. Pas de blabla, juste les pépites.",
    steps: [
      "Commence par Les Derniers Codes — l'essentiel d'un chapitre en 20 pages",
      "Enchaîne avec les exercices BAC corrigés gratuits (filtre rouge)",
      "Imprime les 5 fiches méthode pour les avoir toujours sous la main",
      "WhatsApp en direct si tu bloques (réponse rapide)"
    ]
  },
  organiseDoute: {
    id: 'organiseDoute',
    title: "L'Organisé qui Doute",
    icon: "🎯",
    description: "Tu n'as pas un problème de niveau. Tu as un problème **de confiance et d'erreurs d'inattention**. Tu vises haut — 16, 17, 18+ — mais tu te plantes sur des trucs bêtes. La différence entre un 14 et un 18, ce n'est pas la connaissance. C'est la **méthode de relecture**, la **gestion du stress** le jour J, et l'**anti-piège BAC**.",
    priority: "Méthodologie fine, gestion du temps, anti-pièges BAC.",
    steps: [
      "Commence par La Voie — méthodologie complète, gestion du temps et de l'année",
      "Entraîne-toi avec les exercices BAC corrigés (focus sur les pièges)",
      "Approfondis avec Le Grand Frère sur les chapitres où tu vises le 18+",
      "La Minute du Grand Frère pour les pièges hebdomadaires"
    ]
  }
};

export function Quiz() {
  const navigate = useNavigate();
  const { statut, gainXp } = useUser();
  const { currentUser } = useAuth();
  const { palette } = useTheme();

  // Diagnostic quiz state
  const [currentStep, setCurrentStep] = useState<Step>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [resultProfile, setResultProfile] = useState<ProfileType | null>(null);
  const [attemptsToday, setAttemptsToday] = useState(getAttemptsToday);

  // Exam mode state
  const [examCurrentIndex, setExamCurrentIndex] = useState(0);
  const [examAnswers, setExamAnswers] = useState<Record<number, string>>({});
  const examAnswersRef = useRef<Record<number, string>>({});
  const [examTimeLeft, setExamTimeLeft] = useState(EXAM_DURATION_SECONDS);
  const [examActive, setExamActive] = useState(false);
  const [showExamUpsell, setShowExamUpsell] = useState(false);
  const [examScore, setExamScore] = useState(0);
  const examFinalizedRef = useRef(false);
  const finalizeExamCallbackRef = useRef<((a: Record<number, string>) => Promise<void>) | null>(null);

  const hasReachedDailyLimit = statut !== 'famille' && attemptsToday >= DAILY_QUIZ_LIMIT;

  const finalizeExam = async (answersArg: Record<number, string>) => {
    if (examFinalizedRef.current) return;
    examFinalizedRef.current = true;

    const correct = QUESTIONS.filter((q, i) => answersArg[i] === q.correctAnswer).length;
    setExamScore(correct);

    const baseXp = correct >= 6 ? 500 : correct >= 5 ? 400 : correct >= 4 ? 300 : correct >= 3 ? 250 : 200;
    await gainXp(baseXp, `Examen blanc terminé — Score: ${correct}/${QUESTIONS.length}`);

    if (currentUser) {
      try {
        await addDoc(collection(db, 'examResults'), {
          userId: currentUser.uid,
          score: correct,
          total: QUESTIONS.length,
          answers: answersArg,
          statut,
          completedAt: serverTimestamp(),
        });
      } catch (e) {
        console.error('Erreur sauvegarde examResult:', e);
      }
    }

    setCurrentStep('examResult');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  finalizeExamCallbackRef.current = finalizeExam;

  useEffect(() => {
    if (!examActive || examTimeLeft <= 0) return;
    const id = setTimeout(() => setExamTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(id);
  }, [examActive, examTimeLeft]);

  useEffect(() => {
    if (examTimeLeft === 0 && currentStep === 'exam') {
      setExamActive(false);
      finalizeExamCallbackRef.current?.(examAnswersRef.current);
    }
  }, [examTimeLeft, currentStep]);

  const formatExamTime = (seconds: number): string => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const handleExamStart = () => {
    if (statut !== 'famille') {
      setShowExamUpsell(true);
      return;
    }
    examFinalizedRef.current = false;
    examAnswersRef.current = {};
    setExamCurrentIndex(0);
    setExamAnswers({});
    setExamTimeLeft(EXAM_DURATION_SECONDS);
    setExamActive(true);
    setCurrentStep('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExamAnswer = (optionId: string) => {
    const newAnswers = { ...examAnswersRef.current, [examCurrentIndex]: optionId };
    examAnswersRef.current = newAnswers;
    setExamAnswers(newAnswers);

    if (examCurrentIndex < QUESTIONS.length - 1) {
      setTimeout(() => {
        setExamCurrentIndex(i => i + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300);
    } else {
      setExamActive(false);
      finalizeExam(newAnswers);
    }
  };

  const handleStart = () => {
    if (hasReachedDailyLimit) return;

    if (statut !== 'famille') {
      const next = attemptsToday + 1;
      localStorage.setItem(QUIZ_ATTEMPTS_KEY, JSON.stringify({ date: getTodayKey(), count: next }));
      setAttemptsToday(next);
    }

    setCurrentStep('questions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnswer = (optionId: string) => {
    const newAnswers = { ...answers, [currentQuestionIndex]: optionId };
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: Record<number, string>) => {
    const scores = {
      perdu: 0,
      bloque: 0,
      memoriseur: 0,
      strategePresse: 0,
      organiseDoute: 0
    };

    if (finalAnswers[0] === 'A') { scores.perdu += 3; scores.bloque += 1; }
    if (finalAnswers[0] === 'B') { scores.bloque += 2; scores.organiseDoute += 1; }
    if (finalAnswers[0] === 'C') { scores.memoriseur += 3; }
    if (finalAnswers[0] === 'D') { scores.organiseDoute += 2; }

    if (finalAnswers[1] === 'A') { scores.perdu += 3; }
    if (finalAnswers[1] === 'B') { scores.bloque += 3; scores.memoriseur += 1; }
    if (finalAnswers[1] === 'C') { scores.organiseDoute += 2; }
    if (finalAnswers[1] === 'D') { scores.organiseDoute += 3; scores.strategePresse += 1; }

    if (finalAnswers[2] === 'A') { scores.perdu += 3; }
    if (finalAnswers[2] === 'B') { scores.bloque += 2; scores.organiseDoute += 1; }
    if (finalAnswers[2] === 'C') { scores.memoriseur += 2; scores.strategePresse += 1; }
    if (finalAnswers[2] === 'D') { scores.organiseDoute += 3; }

    if (finalAnswers[3] === 'A') { scores.memoriseur += 3; scores.perdu += 1; }
    if (finalAnswers[3] === 'B') { scores.organiseDoute += 2; scores.bloque += 1; }
    if (finalAnswers[3] === 'C') { scores.memoriseur += 2; scores.perdu += 2; }
    if (finalAnswers[3] === 'D') { scores.bloque += 3; }

    if (finalAnswers[4] === 'A') { scores.strategePresse += 3; scores.perdu += 1; }
    if (finalAnswers[4] === 'B') { scores.bloque += 3; }
    if (finalAnswers[4] === 'C') { scores.perdu += 2; scores.memoriseur += 1; }
    if (finalAnswers[4] === 'D') { scores.organiseDoute += 3; }

    if (finalAnswers[5] === 'B') { scores.strategePresse += 1; }
    if (finalAnswers[5] === 'C') { scores.strategePresse += 3; }
    if (finalAnswers[5] === 'D') { scores.strategePresse += 5; }

    let maxProfile: ProfileType = 'organiseDoute';
    let maxScore = scores.organiseDoute;

    if (scores.memoriseur >= maxScore) { maxScore = scores.memoriseur; maxProfile = 'memoriseur'; }
    if (scores.perdu >= maxScore) { maxScore = scores.perdu; maxProfile = 'perdu'; }
    if (scores.bloque >= maxScore) { maxScore = scores.bloque; maxProfile = 'bloque'; }
    if (scores.strategePresse >= maxScore) { maxScore = scores.strategePresse; maxProfile = 'strategePresse'; }

    setResultProfile(maxProfile);
    localStorage.setItem('eductome_quiz_profile', PROFILES[maxProfile].title);
    setCurrentStep('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans pt-20 transition-colors duration-300" style={{ background: palette.bg2 }}>
      <SEO
        title="Quel type d'élève es-tu ? — Quiz EDUCTOME"
        description="En 2 minutes, découvre ton profil d'élève et reçois un plan de bataille personnalisé pour réussir ton BAC ou ton BEPC en Côte d'Ivoire."
      />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <button onClick={() => navigate('/ressources')} className="flex items-center mb-8 transition-colors hover:opacity-80" style={{ color: palette.ink2 }}>
          <ArrowLeft className="w-4 h-4 mr-2" /> Retour aux ressources
        </button>

        {/* INTRO STEP */}
        {currentStep === 'intro' && (
          <>
            <ScrollReveal className="text-center rounded-[28px] p-8 md:p-12 border shadow-sm transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
              <span className="text-6xl mb-6 block">🎯</span>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 transition-colors" style={{ color: palette.ink }}>
                Quel type d'élève es-tu ?
              </h1>
              <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed transition-colors" style={{ color: palette.ink2 }}>
                Réponds à 6 questions. En 2 minutes, on te dit exactement par où commencer pour décoller — avec un plan de bataille personnalisé.
              </p>

              {hasReachedDailyLimit ? (
                <div className="max-w-md mx-auto border rounded-2xl p-6 flex flex-col items-center gap-2" style={{ background: palette.bg2, borderColor: palette.line }}>
                  <Lock className="w-8 h-8 text-amber-400 mb-1" />
                  <p className="font-bold transition-colors" style={{ color: palette.ink }}>Tu as atteint ta limite de {DAILY_QUIZ_LIMIT} quiz aujourd'hui</p>
                  <p className="text-sm transition-colors" style={{ color: palette.ink2 }}>
                    Reviens demain pour de nouvelles tentatives, ou passe à la <strong className="text-amber-500">Famille EDUCTOME</strong> pour un accès illimité.
                  </p>
                </div>
              ) : (
                <>
                  <button
                    onClick={handleStart}
                    className="text-white font-bold text-lg py-4 px-10 rounded-[24px] transition-all transform hover:scale-105 shadow-md"
                    style={{ background: palette.accent }}
                  >
                    Commencer le quiz →
                  </button>
                  {statut !== 'famille' && (
                    <p className="text-sm mt-4 transition-colors" style={{ color: palette.ink3 }}>
                      Tentative {attemptsToday + 1} / {DAILY_QUIZ_LIMIT} aujourd'hui
                    </p>
                  )}
                </>
              )}

              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-medium transition-colors" style={{ color: palette.ink2 }}>
                <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" style={{ color: palette.accent }} /> 100% gratuit</span>
                <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" style={{ color: palette.accent }} /> Aucune mauvaise réponse</span>
                <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" style={{ color: palette.accent }} /> Plan personnalisé sur WhatsApp</span>
              </div>
            </ScrollReveal>

            {/* EXAM MODE CARD */}
            <ScrollReveal className="mt-6 text-center bg-gradient-to-br from-amber-500/10 to-yellow-600/10 rounded-3xl p-8 border border-amber-400/30 shadow-xl">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-amber-400" />
                <span className="text-amber-400 font-bold uppercase tracking-wider text-xs">Famille EDUCTOME</span>
              </div>
              <h2 className="text-2xl font-playfair font-bold text-white mb-3">Mode Examen Blanc</h2>
              <p className="text-gray-300 mb-6 text-sm max-w-md mx-auto leading-relaxed">
                Entraîne-toi dans les conditions réelles du BAC. 4 heures chrono, aucune correction pendant l'épreuve. Score complet et corrigé révélés à la fin.
              </p>

              {showExamUpsell && statut !== 'famille' ? (
                <div className="max-w-md mx-auto bg-white/5 border border-amber-400/20 rounded-2xl p-6 flex flex-col items-center gap-2">
                  <Lock className="w-7 h-7 text-amber-400 mb-1" />
                  <p className="text-white font-bold">Accès réservé à la Famille EDUCTOME</p>
                  <p className="text-gray-300 text-sm text-center">
                    Le Mode Examen Blanc est exclusif aux membres Famille. Rejoins-nous pour accéder à cet entraînement intensif + tous les contenus EDUCTOME.
                  </p>
                  <button onClick={() => setShowExamUpsell(false)} className="mt-2 text-gray-500 text-xs underline">
                    Fermer
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleExamStart}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-white font-bold text-base py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
                >
                  <Timer className="w-5 h-5" />
                  Lancer l'Examen Blanc (4h)
                </button>
              )}

              {statut !== 'famille' && !showExamUpsell && (
                <p className="text-amber-400/50 text-xs mt-3 flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3" /> Famille EDUCTOME uniquement
                </p>
              )}
            </ScrollReveal>
          </>
        )}

        {/* EXAM STEP */}
        {currentStep === 'exam' && (
          <ScrollReveal className="rounded-[28px] overflow-hidden shadow-sm border transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
            <div className={`p-4 text-center font-mono text-3xl font-bold flex items-center justify-center gap-3 transition-colors ${examTimeLeft < 600 ? 'bg-red-600 text-white animate-pulse' : 'text-white'}`} style={{ background: examTimeLeft < 600 ? '' : palette.accent }}>
              <Timer className="w-7 h-7" />
              {formatExamTime(examTimeLeft)}
            </div>

            <div className="p-6 md:p-10">
              <div className="mb-6">
                <div className="flex justify-between text-sm font-bold text-gray-400 mb-2">
                  <span>Question {examCurrentIndex + 1} / {QUESTIONS.length}</span>
                  <span>{Math.round((examCurrentIndex / QUESTIONS.length) * 100)}% complété</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-amber-500 h-full transition-all duration-500 ease-out"
                    style={{ width: `${((examCurrentIndex + 1) / QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-4 h-4" style={{ color: palette.accent }} />
                <h2 className="text-sm font-bold uppercase tracking-wider" style={{ color: palette.accent }}>
                  {QUESTIONS[examCurrentIndex].title}
                </h2>
              </div>
              <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-8 leading-tight transition-colors" style={{ color: palette.ink }}>
                {QUESTIONS[examCurrentIndex].question}
              </h3>

              <div className="space-y-4">
                {QUESTIONS[examCurrentIndex].options.map((option) => {
                  const isSelected = examAnswers[examCurrentIndex] === option.id;
                  return (
                  <button
                    key={option.id}
                    onClick={() => handleExamAnswer(option.id)}
                    className={`w-full text-left p-5 rounded-[24px] border transition-all duration-200 group`}
                    style={{
                      borderColor: isSelected ? palette.accent : palette.line,
                      background: isSelected ? `${palette.accent}15` : palette.bg,
                    }}
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center font-bold mr-4 transition-colors flex-shrink-0`}
                        style={{
                          borderColor: isSelected ? palette.accent : palette.line,
                          background: isSelected ? palette.accent : 'transparent',
                          color: isSelected ? '#fff' : palette.ink3,
                        }}
                      >
                        {option.id}
                      </div>
                      <span className={`text-lg font-medium transition-colors`} style={{ color: isSelected ? palette.accent : palette.ink2 }}>
                        {option.text}
                      </span>
                    </div>
                  </button>
                )})}
              </div>

              {Object.keys(examAnswers).length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                  <button
                    onClick={() => { setExamActive(false); finalizeExam(examAnswersRef.current); }}
                    className="inline-flex items-center gap-2 bg-[#1A3557] hover:bg-[#243d61] text-white font-bold py-3 px-8 rounded-xl transition-colors"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Terminer l'examen
                  </button>
                  <p className="text-gray-400 text-xs mt-2">
                    {Object.keys(examAnswers).length}/{QUESTIONS.length} questions répondues
                  </p>
                </div>
              )}
            </div>
          </ScrollReveal>
        )}

        {/* EXAM RESULT STEP */}
        {currentStep === 'examResult' && (
          <ScrollReveal className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-8 md:p-12 text-center text-white">
              <Trophy className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <p className="text-sm font-bold uppercase tracking-wider opacity-80 mb-1">Examen Blanc — Résultats</p>
              <div className="text-6xl md:text-7xl font-bold mb-2">{examScore}/{QUESTIONS.length}</div>
              <p className="text-xl font-semibold">
                {examScore >= 6 ? 'Parfait ! 🏆' : examScore >= 5 ? 'Excellent ! 🌟' : examScore >= 4 ? 'Très bien ! 💪' : examScore >= 3 ? 'Bien !' : 'À améliorer — continue !'}
              </p>
              {statut === 'famille' && (
                <p className="text-sm opacity-80 mt-2">XP Famille ×2 appliqué 🔥</p>
              )}
            </div>

            <div className="p-6 md:p-10">
              <h3 className="text-xl font-playfair font-bold text-[#1A3557] mb-6">Corrigé complet :</h3>
              <div className="space-y-6">
                {QUESTIONS.map((q, i) => {
                  const userAnswer = examAnswers[i];
                  const isCorrect = userAnswer === q.correctAnswer;
                  return (
                    <div key={q.id} className="border border-gray-100 rounded-2xl overflow-hidden">
                      <div className={`px-5 py-3 text-sm font-bold uppercase tracking-wider flex items-center gap-2 ${isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
                        {isCorrect
                          ? <CheckCircle className="w-4 h-4" />
                          : <span className="w-4 h-4 rounded-full border-2 border-current inline-flex items-center justify-center text-[10px] font-black flex-shrink-0">✕</span>
                        }
                        {q.title} — {isCorrect ? 'Correct' : 'À revoir'}
                      </div>
                      <div className="p-5">
                        <p className="text-gray-700 font-medium mb-4">{q.question}</p>
                        <div className="space-y-2">
                          {q.options.map((opt) => {
                            const isUserChoice = userAnswer === opt.id;
                            const isCorrectAnswer = opt.id === q.correctAnswer;
                            let rowCls = 'border-gray-100 text-gray-500';
                            if (isCorrectAnswer) rowCls = 'border-green-400 bg-green-50 text-green-800 font-semibold';
                            else if (isUserChoice) rowCls = 'border-red-300 bg-red-50 text-red-700 line-through';
                            return (
                              <div key={opt.id} className={`flex items-center gap-3 p-3 rounded-lg border ${rowCls}`}>
                                <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${isCorrectAnswer ? 'bg-green-500 text-white' : isUserChoice ? 'bg-red-400 text-white' : 'bg-gray-100 text-gray-400'}`}>
                                  {opt.id}
                                </div>
                                <span className="text-sm">{opt.text}</span>
                                {isCorrectAnswer && <span className="ml-auto text-green-600 text-xs font-bold whitespace-nowrap">✓ Idéal</span>}
                              </div>
                            );
                          })}
                        </div>
                        {!userAnswer && (
                          <p className="text-gray-400 text-xs mt-2 italic">Non répondu</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => { setCurrentStep('intro'); setShowExamUpsell(false); }}
                  className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-8 rounded-xl transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Retour
                </button>
                <button
                  onClick={handleExamStart}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-white font-bold py-3 px-8 rounded-xl transition-colors"
                >
                  <Timer className="w-4 h-4" />
                  Recommencer l'examen
                </button>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* QUESTIONS STEP */}
        {currentStep === 'questions' && (
          <ScrollReveal className="rounded-[28px] p-6 md:p-12 shadow-sm border transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
            <div className="mb-8">
              <div className="flex justify-between text-sm font-bold text-gray-400 mb-2">
                <span>Question {currentQuestionIndex + 1} sur {QUESTIONS.length}</span>
                <span>{Math.round(((currentQuestionIndex) / QUESTIONS.length) * 100)}% complété</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-eductome-magenta h-full transition-all duration-500 ease-out"
                  style={{ width: `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <h2 className="text-sm font-bold uppercase tracking-wider mb-2 transition-colors" style={{ color: palette.accent }}>
              📍 {QUESTIONS[currentQuestionIndex].title}
            </h2>
            <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-8 leading-tight transition-colors" style={{ color: palette.ink }}>
              {QUESTIONS[currentQuestionIndex].question}
            </h3>

            <div className="space-y-4">
              {QUESTIONS[currentQuestionIndex].options.map((option) => {
                const isSelected = answers[currentQuestionIndex] === option.id;
                return (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(option.id)}
                  className={`w-full text-left p-5 rounded-[24px] border transition-all duration-200 group`}
                  style={{
                    borderColor: isSelected ? palette.accent : palette.line,
                    background: isSelected ? `${palette.accent}15` : palette.bg,
                  }}
                >
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center font-bold mr-4 transition-colors`}
                      style={{
                        borderColor: isSelected ? palette.accent : palette.line,
                        background: isSelected ? palette.accent : 'transparent',
                        color: isSelected ? '#fff' : palette.ink3,
                      }}
                    >
                      {option.id}
                    </div>
                    <span className={`text-lg font-medium transition-colors`} style={{ color: isSelected ? palette.accent : palette.ink2 }}>
                      {option.text}
                    </span>
                  </div>
                </button>
              )})}
            </div>
          </ScrollReveal>
        )}

        {/* RESULT STEP */}
        {currentStep === 'result' && resultProfile && (
          <ScrollReveal className="rounded-[28px] overflow-hidden shadow-sm border transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
            <div className="p-8 md:p-12 text-center text-white relative transition-colors" style={{ background: palette.accent }}>
              <div className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
                RÉSULTAT
              </div>
              <span className="text-7xl mb-4 block">{PROFILES[resultProfile].icon}</span>
              <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4">
                {PROFILES[resultProfile].title}
              </h2>
            </div>

            <div className="p-8 md:p-12">
              <div className="mb-10 text-lg leading-relaxed transition-colors" style={{ color: palette.ink2 }}>
                <p dangerouslySetInnerHTML={{ __html: PROFILES[resultProfile].description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </div>

              <div className="border-l-4 p-6 rounded-r-xl mb-10 transition-colors" style={{ background: `${palette.accent}15`, borderColor: palette.accent }}>
                <h3 className="font-bold uppercase text-sm mb-2 transition-colors" style={{ color: palette.accent }}>🎯 Ta priorité absolue</h3>
                <p className="text-lg font-medium transition-colors" style={{ color: palette.ink }}>{PROFILES[resultProfile].priority}</p>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-playfair font-bold mb-6 transition-colors" style={{ color: palette.ink }}>Ton plan de bataille personnalisé :</h3>
                <ul className="space-y-4">
                  {PROFILES[resultProfile].steps.map((step, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 mt-0.5" style={{ background: `${palette.accent}20`, color: palette.accent }}>
                        {idx + 1}
                      </div>
                      <p className="text-lg transition-colors" style={{ color: palette.ink2 }}>{step}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border rounded-[24px] p-6 md:p-8 text-center transition-colors" style={{ background: palette.bg2, borderColor: palette.line }}>
                <h4 className="text-xl font-bold mb-3 transition-colors" style={{ color: palette.ink }}>Récupère ton plan sur WhatsApp 🎁</h4>
                <p className="mb-6 transition-colors" style={{ color: palette.ink2 }}>
                  On t'envoie tout ça sur WhatsApp pour que tu ne le perdes pas, avec les liens directs vers les ressources gratuites.
                </p>
                <a
                  href={`https://wa.me/2250715811398?text=${encodeURIComponent(`Salut le Grand Frère 👋\n\nJ'ai fait le quiz et mon profil est : ${PROFILES[resultProfile].title} ${PROFILES[resultProfile].icon}\n\nJe veux bien recevoir mon plan d'action détaillé !`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg text-lg"
                >
                  <MessageCircle className="w-6 h-6 mr-3" /> Recevoir mon plan sur WhatsApp
                </a>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-500 mb-4 font-medium">Partage le quiz avec tes potes :</p>
                <div className="flex justify-center gap-4">
                  <a href={`https://wa.me/?text=${encodeURIComponent(`J'ai fait le quiz EDUCTOME, je suis ${PROFILES[resultProfile].title}. Et toi ? Fais le test ici : https://eductome-web-kaef.vercel.app/quiz`)}`} target="_blank" rel="noopener noreferrer" className="bg-[#128C7E]/10 text-[#128C7E] hover:bg-[#128C7E]/20 p-3 rounded-full transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a href={`https://www.facebook.com/share/1Ctr6QHtAx/`} target="_blank" rel="noopener noreferrer" className="bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2]/20 p-3 rounded-full transition-colors font-bold w-11 h-11 flex items-center justify-center">
                    f
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}
