import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, MessageCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ScrollReveal } from '../components/ui/ScrollReveal';

// Types
type ProfileType = 'perdu' | 'bloque' | 'memoriseur' | 'strategePresse' | 'organiseDoute';

interface Question {
  id: number;
  title: string;
  question: string;
  options: { id: 'A' | 'B' | 'C' | 'D'; text: string }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "Diagnostic en classe",
    question: "En classe, quand le prof explique une nouvelle notion en maths…",
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
  const [currentStep, setCurrentStep] = useState<'intro' | 'questions' | 'result'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [resultProfile, setResultProfile] = useState<ProfileType | null>(null);

  const handleStart = () => {
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

    // Logique de scoring simplifiée d'après le prompt
    // Q1
    if (finalAnswers[0] === 'A') { scores.perdu += 3; scores.bloque += 1; }
    if (finalAnswers[0] === 'B') { scores.bloque += 2; scores.organiseDoute += 1; }
    if (finalAnswers[0] === 'C') { scores.memoriseur += 3; }
    if (finalAnswers[0] === 'D') { scores.organiseDoute += 2; }
    
    // Q2
    if (finalAnswers[1] === 'A') { scores.perdu += 3; }
    if (finalAnswers[1] === 'B') { scores.bloque += 3; scores.memoriseur += 1; }
    if (finalAnswers[1] === 'C') { scores.organiseDoute += 2; }
    if (finalAnswers[1] === 'D') { scores.organiseDoute += 3; scores.strategePresse += 1; }

    // Q3
    if (finalAnswers[2] === 'A') { scores.perdu += 3; }
    if (finalAnswers[2] === 'B') { scores.bloque += 2; scores.organiseDoute += 1; }
    if (finalAnswers[2] === 'C') { scores.memoriseur += 2; scores.strategePresse += 1; }
    if (finalAnswers[2] === 'D') { scores.organiseDoute += 3; }

    // Q4
    if (finalAnswers[3] === 'A') { scores.memoriseur += 3; scores.perdu += 1; }
    if (finalAnswers[3] === 'B') { scores.organiseDoute += 2; scores.bloque += 1; }
    if (finalAnswers[3] === 'C') { scores.memoriseur += 2; scores.perdu += 2; }
    if (finalAnswers[3] === 'D') { scores.bloque += 3; }

    // Q5
    if (finalAnswers[4] === 'A') { scores.strategePresse += 3; scores.perdu += 1; }
    if (finalAnswers[4] === 'B') { scores.bloque += 3; }
    if (finalAnswers[4] === 'C') { scores.perdu += 2; scores.memoriseur += 1; }
    if (finalAnswers[4] === 'D') { scores.organiseDoute += 3; }

    // Q6
    if (finalAnswers[5] === 'B') { scores.strategePresse += 1; }
    if (finalAnswers[5] === 'C') { scores.strategePresse += 3; }
    if (finalAnswers[5] === 'D') { scores.strategePresse += 5; }

    // Déterminer le maximum (priorité en cas d'égalité: strategePresse > bloque > perdu > memoriseur > organise)
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
    <div className="min-h-screen bg-[#1A3557] font-sans pt-20">
      <SEO 
        title="Quel type d'élève es-tu ? — Quiz EDUCTOME" 
        description="En 2 minutes, découvre ton profil d'élève et reçois un plan de bataille personnalisé pour réussir ton BAC ou ton BEPC en Côte d'Ivoire." 
      />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <button onClick={() => navigate('/ressources')} className="text-white/70 hover:text-white flex items-center mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Retour aux ressources
        </button>

        {/* INTRO STEP */}
        {currentStep === 'intro' && (
          <ScrollReveal className="text-center bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <span className="text-6xl mb-6 block">🎯</span>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Quel type d'élève es-tu ?
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Réponds à 6 questions. En 2 minutes, on te dit exactement par où commencer pour décoller — avec un plan de bataille personnalisé.
            </p>
            
            <button 
              onClick={handleStart}
              className="bg-eductome-magenta hover:bg-pink-600 text-white font-bold text-lg py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(216,27,96,0.4)]"
            >
              Commencer le quiz →
            </button>
            
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400 font-medium">
              <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> 100% gratuit</span>
              <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Aucune mauvaise réponse</span>
              <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Plan personnalisé sur WhatsApp</span>
            </div>
          </ScrollReveal>
        )}

        {/* QUESTIONS STEP */}
        {currentStep === 'questions' && (
          <ScrollReveal className="bg-white rounded-3xl p-6 md:p-12 shadow-2xl">
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

            <h2 className="text-sm font-bold text-eductome-magenta uppercase tracking-wider mb-2">
              📍 {QUESTIONS[currentQuestionIndex].title}
            </h2>
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-[#1A3557] mb-8 leading-tight">
              {QUESTIONS[currentQuestionIndex].question}
            </h3>

            <div className="space-y-4">
              {QUESTIONS[currentQuestionIndex].options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(option.id)}
                  className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 group
                    ${answers[currentQuestionIndex] === option.id 
                      ? 'border-eductome-magenta bg-pink-50' 
                      : 'border-gray-200 hover:border-eductome-magenta hover:bg-gray-50'}`}
                >
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold mr-4 transition-colors
                      ${answers[currentQuestionIndex] === option.id 
                        ? 'border-eductome-magenta bg-eductome-magenta text-white' 
                        : 'border-gray-300 text-gray-500 group-hover:border-eductome-magenta group-hover:text-eductome-magenta'}`}
                    >
                      {option.id}
                    </div>
                    <span className={`text-lg font-medium ${answers[currentQuestionIndex] === option.id ? 'text-eductome-magenta' : 'text-gray-700'}`}>
                      {option.text}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* RESULT STEP */}
        {currentStep === 'result' && resultProfile && (
          <ScrollReveal className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-eductome-magenta to-pink-600 p-8 md:p-12 text-center text-white relative">
              <div className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
                RÉSULTAT
              </div>
              <span className="text-7xl mb-4 block">{PROFILES[resultProfile].icon}</span>
              <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4">
                {PROFILES[resultProfile].title}
              </h2>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="mb-10 text-gray-700 text-lg leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: PROFILES[resultProfile].description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </div>

              <div className="bg-[#FFF3E0] border-l-4 border-[#E65100] p-6 rounded-r-xl mb-10">
                <h3 className="font-bold text-[#E65100] uppercase text-sm mb-2">🎯 Ta priorité absolue</h3>
                <p className="text-lg text-gray-800 font-medium">{PROFILES[resultProfile].priority}</p>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-playfair font-bold text-[#1A3557] mb-6">Ton plan de bataille personnalisé :</h3>
                <ul className="space-y-4">
                  {PROFILES[resultProfile].steps.map((step, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-eductome-marine flex items-center justify-center font-bold mr-4 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-lg text-gray-700">{step}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
                <h4 className="text-xl font-bold text-[#1A3557] mb-3">Récupère ton plan sur WhatsApp 🎁</h4>
                <p className="text-gray-600 mb-6">
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
