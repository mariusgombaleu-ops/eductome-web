import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Download, Eye, EyeOff, BookOpen, PenTool, BookMarked, CheckCircle, MessageCircle, X, Filter, ChevronLeft, ArrowRight, Calculator, FlaskConical, Dna, Globe, Brain, Languages } from 'lucide-react';
import { tomesRegistry } from '../data/exercices-registry';
import { allExercises, ExerciseLevel } from '../data/exercices';
import { SEO } from '../components/SEO';
import { useProgress } from '../hooks/useProgress';
import { LeadCaptureModal } from '../components/ui/LeadCaptureModal';
import { GrandFrereGuide } from '../components/ui/GrandFrereGuide';
import { renderMath } from '../components/blocks/BlockRenderer';
import { useTheme } from '../contexts/ThemeContext';

const vitrineFiches = [
  {
    id: "math-1",
    title: "Les Limites",
    subject: "Mathématiques",
    theme: "#1976D2",
    level: "Terminale D",
    content: ["Les 4 formes indéterminées", "Techniques de factorisation", "Limites usuelles à connaître"],
    pdfFile: "FICHE_METHODE_MATHS_LIMITES.pdf"
  },
  {
    id: "math-2",
    title: "Nombres Complexes",
    subject: "Mathématiques",
    theme: "#1976D2",
    level: "Terminale D",
    content: ["Forme algébrique et trigo", "Résolution d'équations", "Interprétation géométrique"],
    pdfFile: "FICHE_METHODE_MATHS_COMPLEXES.pdf"
  },
  {
    id: "pc-1",
    title: "Cinématique du Point",
    subject: "Physique-Chimie",
    theme: "#1B5E20",
    level: "Terminale D",
    content: ["Vecteur vitesse & accélération", "Équations horaires", "Mouvements circulaires"],
    pdfFile: "FICHE_METHODE_PC_CINEMATIQUE.pdf"
  },
  {
    id: "pc-2",
    title: "Acides et Bases",
    subject: "Physique-Chimie",
    theme: "#1B5E20",
    level: "Terminale D",
    content: ["Calculs de pH et pKa", "Constante d'acidité", "Points d'équivalence"],
    pdfFile: "FICHE_METHODE_PC_ACIDE_BASE.pdf"
  },
  {
    id: "svt-1",
    title: "La Génétique",
    subject: "SVT",
    theme: "#D81B60",
    level: "Terminale D",
    content: ["Lois de Mendel", "Arbres généalogiques", "Maladies héréditaires"],
    pdfFile: "FICHE_METHODE_SVT_GENETIQUE.pdf"
  },
  {
    id: "svt-2",
    title: "Système Nerveux",
    subject: "SVT",
    theme: "#D81B60",
    level: "Terminale D",
    content: ["Potentiel d'action/repos", "Transmission synaptique", "Neurotransmetteurs"],
    pdfFile: "FICHE_METHODE_SVT_NERVEUX.pdf"
  },
  {
    id: "hg-1",
    title: "La Dissertation",
    subject: "Histoire-Géo",
    theme: "#E65100",
    level: "Toutes Séries",
    content: ["Analyser et problématiser", "Construire un plan détaillé", "Rédiger l'introduction"],
    pdfFile: "FICHE_METHODE_HG_DISSERTATION.pdf"
  },
  {
    id: "hg-2",
    title: "Le Commentaire",
    subject: "Histoire-Géo",
    theme: "#E65100",
    level: "Toutes Séries",
    content: ["Présenter le document", "Extraire les idées", "Critique et contexte"],
    pdfFile: "FICHE_METHODE_HG_COMMENTAIRE.pdf"
  }
];

// La banque d'exercices (`allExercises`) est importée depuis ../data/exercices.
// Elle repart vide : le nouveau contenu T1→T12 sera recâblé tome par tome.
const vitrineExercicesTomes = [
  { id: 1, title: "Les Limites", subject: "Mathématiques", theme: "#1976D2", isUpcoming: true, icon: Calculator },
  { id: 2, title: "Les Dérivées", subject: "Mathématiques", theme: "#1976D2", isUpcoming: true, icon: Calculator },
  { id: 13, title: "Cinématique", subject: "Physique-Chimie", theme: "#1B5E20", isUpcoming: true, icon: FlaskConical },
  { id: 14, title: "Acides et Bases", subject: "Physique-Chimie", theme: "#1B5E20", isUpcoming: true, icon: FlaskConical },
  { id: 15, title: "La Génétique", subject: "SVT", theme: "#D81B60", isUpcoming: true, icon: Dna },
  { id: 16, title: "Système Nerveux", subject: "SVT", theme: "#D81B60", isUpcoming: true, icon: Dna },
  { id: 17, title: "Dissertation", subject: "Histoire-Géo", theme: "#E65100", isUpcoming: true, icon: Globe },
  { id: 18, title: "Le Commentaire", subject: "Histoire-Géo", theme: "#E65100", isUpcoming: true, icon: Globe },
  { id: 19, title: "Le Sujet, La Raison", subject: "Philosophie", theme: "#880E4F", isUpcoming: true, icon: Brain },
  { id: 20, title: "L'État, Société", subject: "Philosophie", theme: "#880E4F", isUpcoming: true, icon: Brain },
  { id: 21, title: "Reading Skills", subject: "Anglais", theme: "#00695C", isUpcoming: true, icon: Languages },
  { id: 22, title: "Writing Skills", subject: "Anglais", theme: "#00695C", isUpcoming: true, icon: Languages }
];

export function Resources() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const initialTab = (searchParams.get('tab') as 'fiches' | 'exercices' | 'planning' | 'questions') || 'exercices';
  const [activeTab, setActiveTab] = useState<'fiches' | 'exercices' | 'planning' | 'questions'>(initialTab);
  const [activeTomeId, setActiveTomeId] = useState<number | null>(null);
  const { palette } = useTheme();
  
  // Modal states
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadModalConfig, setLeadModalConfig] = useState({ title: '', description: '' });
  // Contexte mémorisé avant inscription (pour la Redirection Contextuelle)
  const [pendingExerciseId, setPendingExerciseId] = useState<string | null>(null);
  const [pendingTomeId, setPendingTomeId] = useState<number | null>(null);

  // Lire les paramètres d'URL au chargement (inclut la redirection contextuelle post-inscription)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab === 'fiches' || tab === 'exercices' || tab === 'planning' || tab === 'questions') {
      setActiveTab(tab);
    }
    
    // Redirection Contextuelle : auto-ouvrir un tome et un exercice spécifique
    const tomeIdParam = params.get('tomeId');
    const openExParam = params.get('openEx');
    if (tomeIdParam && openExParam) {
      const tomeNum = parseInt(tomeIdParam, 10);
      if (!isNaN(tomeNum)) {
        setActiveTomeId(tomeNum);
        // Déployer la correction de l'exercice cible après le rendu
        setTimeout(() => {
          setShowCorrection(prev => ({ ...prev, [openExParam]: true }));
          // Scroller jusqu'à l'exercice cible
          setTimeout(() => {
            const el = document.getElementById(openExParam);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              // Ajouter un highlight temporaire
              el.classList.add('ring-4', 'ring-eductome-magenta', 'ring-offset-2');
              setTimeout(() => el.classList.remove('ring-4', 'ring-eductome-magenta', 'ring-offset-2'), 3000);
            }
          }, 400);
        }, 300);
      }
    }
  }, [location.search]);
  const { completedExercises, evaluations, evaluateExercise, getExercisesToReview, showEmailModal, dismissModal, completeCapture, toastMessage, showToast } = useProgress();
  const [showQuizBanner, setShowQuizBanner] = useState(true);
  const [activeLevelFilter, setActiveLevelFilter] = useState<'ALL' | ExerciseLevel>('ALL');
  const [showCorrection, setShowCorrection] = useState<Record<string, boolean>>({});
  
  const exercisesContainerRef = useRef<HTMLDivElement>(null);

  const toggleCorrection = (exerciseId: string) => {
    const isLoggedIn = localStorage.getItem('eductome_user_logged_in') === 'true';
    if (!isLoggedIn) {
      // Mémoriser le contexte pour la Redirection Contextuelle post-inscription
      setPendingExerciseId(exerciseId);
      setPendingTomeId(activeTomeId);
      setLeadModalConfig({
        title: "Débloque la correction détaillée 🔓",
        description: "Pour voir la correction étape par étape, crée ton compte gratuit en 10 secondes."
      });
      setIsLeadModalOpen(true);
      return;
    }

    setShowCorrection(prev => {
      const newState = { ...prev, [exerciseId]: !prev[exerciseId] };
      return newState;
    });
  };

  const handleDownloadFiche = (e: React.MouseEvent<HTMLAnchorElement>, _pdfFile: string) => {
    const isLoggedIn = localStorage.getItem('eductome_user_logged_in') === 'true';
    if (!isLoggedIn) {
      e.preventDefault();
      setLeadModalConfig({
        title: "Télécharge ta fiche méthode 📥",
        description: "Pour télécharger le PDF et le garder sur ton téléphone, crée ton compte gratuit EDUCTOME."
      });
      setIsLeadModalOpen(true);
    }
  };


  const handleTomeClick = (id: number) => {
    if (activeTomeId === id) {
      setActiveTomeId(null);
    } else {
      setActiveTomeId(id);
      setTimeout(() => {
        exercisesContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const getLevelStyles = (level: string) => {
    switch(level) {
      case 'BASE': return { badge: 'bg-green-100 text-green-800', header: 'bg-green-800', body: 'bg-green-50', step: 'bg-green-800' };
      case 'MOYEN': return { badge: 'bg-orange-100 text-orange-800', header: 'bg-orange-700', body: 'bg-orange-50', step: 'bg-orange-700' };
      case 'BAC': return { badge: 'bg-red-100 text-red-800', header: 'bg-red-800', body: 'bg-red-50', step: 'bg-red-800' };
      default: return { badge: 'bg-gray-100 text-gray-800', header: 'bg-gray-800', body: 'bg-gray-50', step: 'bg-gray-800' };
    }
  };

  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div className={`min-h-screen pt-24 pb-12 font-poppins transition-colors duration-300 ${isDashboard ? 'pt-6' : ''}`} style={{ background: isDashboard ? 'transparent' : palette.bg }}>
      <SEO 
        title="Ressources Gratuites | EDUCTOME" 
        description="Fiches de révision, exercices corrigés et astuces du Grand Frère pour préparer ton BAC ou BEPC gratuitement." 
      />
      
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${isDashboard ? 'max-w-7xl' : 'max-w-7xl'}`}>
        <GrandFrereGuide 
          id="resources"
          message="C'est cadeau ! Retrouve ici des fiches méthodes, des annales et des astuces gratuites pour booster tes révisions sans dépenser un franc."
        />
        
        {/* Banner Quiz */}
      {showQuizBanner && !localStorage.getItem('eductome_quiz_profile') && (
        <div className="bg-gradient-to-r from-eductome-magenta to-eductome-marine text-white px-4 py-3 relative z-30">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm sm:text-base">
            <div className="flex items-center mb-2 sm:mb-0">
              <span className="text-xl mr-3">🎯</span>
              <p>Première fois ici ? Fais le quiz "Quel type d'élève es-tu ?" en 2 minutes et reçois ton plan personnalisé.</p>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/quiz" className="bg-white text-eductome-magenta px-4 py-1.5 rounded-full font-bold whitespace-nowrap hover:bg-gray-100 transition-colors">
                Faire le quiz →
              </Link>
              <button onClick={() => setShowQuizBanner(false)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Profil Banner */}
      {localStorage.getItem('eductome_quiz_profile') && (
        <div className="px-4 py-3 relative z-30 border-b transition-colors" style={{ background: palette.bg2, color: palette.ink, borderColor: palette.line }}>
          <div className="max-w-4xl mx-auto flex items-center justify-between text-sm sm:text-base font-medium">
            <span style={{ color: palette.ink }}>🎯 Ton profil : {localStorage.getItem('eductome_quiz_profile')}</span>
            <Link to="/quiz" className="hover:underline text-sm font-bold" style={{ color: palette.accent }}>Refaire le quiz</Link>
          </div>
        </div>
      )}

      {/* Hero Banner Premium */}
      {isDashboard && (
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pt-6 pb-2">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors hover:scale-105" style={{ color: palette.ink2 }}>
            <ChevronLeft className="w-4 h-4" /> Retour
          </button>
        </div>
      )}
      <div className={`relative ${isDashboard ? 'bg-gradient-to-r from-eductome-marine to-eductome-sky rounded-2xl mx-4 md:mx-6 lg:mx-8 p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 animate-fade-in-up mt-2 mb-6' : 'pt-20 pb-20 px-4 md:px-6 lg:px-8 text-center bg-eductome-marine'} overflow-hidden shadow-lg`}>
        {isDashboard ? (
          <>
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 -mb-12 w-32 h-32 rounded-full bg-white opacity-10 pointer-events-none"></div>
            <div className="relative z-10 text-white flex-1">
              <h1 className="text-3xl font-playfair font-bold mb-2 flex items-center gap-3">
                <BookOpen className="w-8 h-8" />
                Ressources Gratuites
              </h1>
              <p className="text-blue-100 mt-2 text-sm">
                Bienvenue dans la salle d'entraînement du Grand Frère. Ici tu t'exerces, tu te trompes, tu corriges, tu progresses. Pas un franc à débourser.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="absolute top-0 right-0 w-80 h-80 bg-eductome-magenta/20 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-eductome-sky/20 blur-[80px] rounded-full pointer-events-none"></div>
            <ScrollReveal>
              <span className="text-eductome-magenta font-bold tracking-wider text-sm md:text-base uppercase mb-4 block">TA SALLE D'ENTRAÎNEMENT</span>
              <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">
                Ressources <span className="text-eductome-magenta">Gratuites</span>
              </h1>
              <p className="text-gray-200 mx-auto text-lg md:text-xl font-light relative z-10">
                Bienvenue dans la salle d'entraînement du Grand Frère. Ici tu t'exerces, tu te trompes, tu corriges, tu progresses. Pas un franc à débourser — juste à toi de bosser sérieusement.
              </p>
            </ScrollReveal>
          </>
        )}
      </div>

      {/* Tabs Premium */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 -mt-8 relative z-20 mb-12">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 p-2 rounded-2xl shadow-lg border transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
          <button 
            onClick={() => setActiveTab('exercices')}
            className={`flex-1 min-w-[140px] flex justify-center items-center px-4 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 border ${activeTab === 'exercices' ? 'shadow-md transform scale-[1.02]' : 'opacity-70 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5'}`}
            style={activeTab === 'exercices' ? { background: palette.accent, color: '#fff', borderColor: palette.accent } : { background: 'transparent', borderColor: palette.line, color: palette.ink }}
          >
            <PenTool className={`w-5 h-5 mr-2 ${activeTab === 'exercices' ? 'animate-bounce' : ''}`} /> Exos Corrigés
          </button>
          <button 
            onClick={() => setActiveTab('fiches')}
            className={`flex-1 min-w-[140px] flex justify-center items-center px-4 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 border ${activeTab === 'fiches' ? 'shadow-md transform scale-[1.02]' : 'opacity-70 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5'}`}
            style={activeTab === 'fiches' ? { background: palette.accent, color: '#fff', borderColor: palette.accent } : { background: 'transparent', borderColor: palette.line, color: palette.ink }}
          >
            <BookOpen className="w-5 h-5 mr-2" /> Fiches Méthode
          </button>
          <button 
            onClick={() => setActiveTab('planning')}
            className={`flex-1 min-w-[140px] flex justify-center items-center px-4 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 border ${activeTab === 'planning' ? 'shadow-md transform scale-[1.02]' : 'opacity-70 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5'}`}
            style={activeTab === 'planning' ? { background: palette.accent, color: '#fff', borderColor: palette.accent } : { background: 'transparent', borderColor: palette.line, color: palette.ink }}
          >
            <BookMarked className="w-5 h-5 mr-2" /> Le Planning
          </button>
          <button 
            onClick={() => setActiveTab('questions')}
            className={`flex-1 min-w-[140px] flex justify-center items-center px-4 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 border ${activeTab === 'questions' ? 'shadow-md transform scale-[1.02]' : 'opacity-70 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5'}`}
            style={activeTab === 'questions' ? { background: palette.accent, color: '#fff', borderColor: palette.accent } : { background: 'transparent', borderColor: palette.line, color: palette.ink }}
          >
            <span className="text-xl mr-2">🎯</span> 10 Pièges
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pb-20">
        
        {/* TAB 1: Fiches Méthode */}
        {activeTab === 'fiches' && (
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {vitrineFiches.map(fiche => (
                <div key={fiche.id} className="p-6 rounded-[28px] shadow-sm border flex flex-col hover:shadow-md transition-all relative overflow-hidden" style={{ background: palette.bg, borderColor: palette.line }}>
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-5 rounded-bl-[60px] pointer-events-none" style={{ backgroundColor: fiche.theme }}></div>
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl text-white shadow-inner z-10" style={{ backgroundColor: fiche.theme }}>
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold px-2 py-1 rounded bg-black/5 dark:bg-white/5 uppercase tracking-wider" style={{ color: palette.ink }}>{fiche.subject}</span>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-1" style={{ color: palette.ink }}>{fiche.title}</h3>
                  <p className="text-xs font-bold mb-4" style={{ color: palette.ink2 }}>{fiche.level}</p>
                  
                  <ul className="text-sm mb-6 flex-grow space-y-2" style={{ color: palette.ink2 }}>
                    {fiche.content.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 mt-0.5" style={{ color: palette.accent }}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={(e) => handleDownloadFiche(e as any, fiche.pdfFile)}
                    className="w-full flex items-center justify-center font-semibold py-2.5 rounded-xl border transition-colors z-10 hover:opacity-80"
                    style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink }}
                  >
                    <Download className="w-4 h-4 mr-2" /> Télécharger
                  </button>
                </div>
              ))}
            </div>

            {/* Levier Upsell: Le Méga-Pack */}
            <div className="bg-gradient-to-r from-[#1A3557] to-[#1976D2] rounded-2xl p-8 relative overflow-hidden text-white shadow-xl max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-black/10 backdrop-blur-sm pointer-events-none"></div>
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4 backdrop-blur-md">
                  <span className="text-3xl">🔐</span>
                </div>
                <h3 className="text-2xl font-bold font-playfair mb-3">24 autres fiches secrètes t'attendent !</h3>
                <p className="text-blue-100 mb-6 mx-auto">
                  Le <strong>"Méga-Pack Méthode"</strong> complet (toutes les fiches avancées de Maths, PC, SVT et HG) n'est pas en vente libre. Il t'est <strong className="text-white">OFFERT</strong> en bonus exclusif dès que tu débloques ton premier Tome complet.
                </p>
                <Link 
                  to={isDashboard ? "/dashboard/boutique" : "/collections"}
                  className="inline-flex items-center bg-[#D81B60] hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-xl transition-transform hover:scale-105 shadow-lg"
                >
                  Débloquer un Tome & Obtenir le Bonus
                </Link>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* TAB 2: Exercices Corrigés */}
        {activeTab === 'exercices' && (
          <ScrollReveal>
            <p className="text-center text-gray-600 mb-8 mx-auto">
              Choisis ton tome, Champion(ne). Les exercices vont de BASE à BAC. Tu commences doucement, tu montes en puissance, tu finis fort. On est ensemble.
            </p>
            
            {/* Grid of Tomes */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10">
              {vitrineExercicesTomes.map(tome => {
                const isActive = activeTomeId === tome.id;
                return (
                  <button
                    key={tome.id}
                    onClick={() => !tome.isUpcoming && handleTomeClick(tome.id)}
                    className={`flex flex-col items-center justify-center p-5 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden group
                      ${tome.isUpcoming ? 'cursor-not-allowed opacity-60' : 
                        isActive ? 'shadow-md transform scale-105' : 'shadow-sm hover:shadow-md'}`}
                    style={
                      tome.isUpcoming ? { background: palette.bg2, borderColor: palette.line } :
                      isActive ? { background: `${palette.accent}15`, borderColor: palette.accent } :
                      { background: palette.bg, borderColor: palette.line }
                    }
                  >
                    {tome.isUpcoming && (
                      <div className="absolute top-0 right-0 bg-gray-500 text-white text-[9px] font-bold px-2 py-1 rounded-bl-lg uppercase">Bientôt</div>
                    )}
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white mb-3 shadow-inner" style={{ backgroundColor: tome.theme, opacity: tome.isUpcoming ? 0.5 : 1 }}>
                      <tome.icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${tome.isUpcoming ? '' : isActive ? '' : ''}`} style={{ color: tome.isUpcoming ? palette.ink3 : isActive ? palette.accent : palette.ink2 }}>{tome.subject}</span>
                    <span className={`text-sm font-semibold text-center leading-tight ${tome.isUpcoming ? '' : isActive ? '' : ''}`} style={{ color: tome.isUpcoming ? palette.ink3 : isActive ? palette.accent : palette.ink }}>{tome.title}</span>
                  </button>
                )
              })}
            </div>

            {/* Exercises Panel */}
            {activeTomeId !== null && (
              <div ref={exercisesContainerRef} className="rounded-[28px] shadow-lg border overflow-hidden mt-8 scroll-mt-24 transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
                
                {tomesRegistry.find(t => t.id === activeTomeId)?.hasExercises ? (
                  <div>
                    {/* Header Panel */}
                    <div className="text-white p-6 md:p-8 flex flex-col md:flex-row md:items-start justify-between" style={{ background: palette.ink }}>
                      <div>
                        <h2 className="text-2xl font-bold font-playfair mb-3">Exercices Corrigés — {tomesRegistry.find(t => t.id === activeTomeId)?.title}</h2>
                        <div className="inline-flex items-start px-4 py-3 rounded-xl text-sm font-medium leading-relaxed max-w-3xl border" style={{ background: `${palette.accent}20`, borderColor: `${palette.accent}40`, color: palette.accent }}>
                          <span className="mr-2 text-xl">💡</span>
                          <span>
                            <strong>Conseil du Grand Frère :</strong> Cache la correction avant de commencer. Cherche d'abord — même si tu galères. Trompe-toi, c'est NORMAL : c'est comme ça qu'on apprend vraiment. Vérifie ensuite.
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Filters & Progress */}
                    <div className="p-4 md:p-8 border-b transition-colors" style={{ background: palette.bg2, borderColor: palette.line }}>
                      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center space-x-2 p-1.5 rounded-[12px] border shadow-sm overflow-x-auto w-full md:w-auto transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
                          <Filter className="w-4 h-4 ml-2 mr-1" style={{ color: palette.ink3 }} />
                          <button onClick={() => setActiveLevelFilter('ALL')} className={`px-3 py-1.5 rounded-[8px] text-sm font-semibold whitespace-nowrap transition-colors`} style={activeLevelFilter === 'ALL' ? { background: palette.ink, color: palette.bg } : { background: 'transparent', color: palette.ink2 }}>Tous ({(allExercises[activeTomeId]||[]).length})</button>
                          <button onClick={() => setActiveLevelFilter('BASE')} className={`px-3 py-1.5 rounded-[8px] text-sm font-semibold whitespace-nowrap transition-colors`} style={activeLevelFilter === 'BASE' ? { background: '#16a34a', color: '#fff' } : { background: 'transparent', color: palette.ink2 }}>🟢 BASE</button>
                          <button onClick={() => setActiveLevelFilter('MOYEN')} className={`px-3 py-1.5 rounded-[8px] text-sm font-semibold whitespace-nowrap transition-colors`} style={activeLevelFilter === 'MOYEN' ? { background: '#f97316', color: '#fff' } : { background: 'transparent', color: palette.ink2 }}>🟠 MOYEN</button>
                          <button onClick={() => setActiveLevelFilter('BAC')} className={`px-3 py-1.5 rounded-[8px] text-sm font-semibold whitespace-nowrap transition-colors`} style={activeLevelFilter === 'BAC' ? { background: '#dc2626', color: '#fff' } : { background: 'transparent', color: palette.ink2 }}>🔴 BAC</button>
                        </div>
                        
                        {/* Progress Bar Mini */}
                        <div className="w-full md:w-64 p-3 rounded-[16px] border shadow-sm transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
                          <div className="flex justify-between text-xs font-bold mb-2" style={{ color: palette.ink2 }}>
                            <span>Ta progression</span>
                            <span>{completedExercises.filter(id => id.startsWith(`t${activeTomeId}-`)).length} / {(allExercises[activeTomeId]||[]).length}</span>
                          </div>
                          <div className="w-full h-2 rounded-full overflow-hidden flex" style={{ background: palette.line }}>
                            <div className="bg-green-500 h-full" style={{ width: `${(completedExercises.filter(id => id.startsWith(`t${activeTomeId}-`) && (allExercises[activeTomeId]||[]).find(e => e.id === id)?.level === 'BASE').length / ((allExercises[activeTomeId]||[]).filter(e => e.level === 'BASE').length || 1)) * 33.3}%` }}></div>
                            <div className="bg-orange-500 h-full" style={{ width: `${(completedExercises.filter(id => id.startsWith(`t${activeTomeId}-`) && (allExercises[activeTomeId]||[]).find(e => e.id === id)?.level === 'MOYEN').length / ((allExercises[activeTomeId]||[]).filter(e => e.level === 'MOYEN').length || 1)) * 33.3}%` }}></div>
                            <div className="bg-red-500 h-full" style={{ width: `${(completedExercises.filter(id => id.startsWith(`t${activeTomeId}-`) && (allExercises[activeTomeId]||[]).find(e => e.id === id)?.level === 'BAC').length / ((allExercises[activeTomeId]||[]).filter(e => e.level === 'BAC').length || 1)) * 33.3}%` }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Exercises List */}
                    <div className="p-4 md:p-8 space-y-12">
                      {/* Section "À refaire" */}
                      {getExercisesToReview().length > 0 && activeTomeId && (
                        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-8">
                          <h3 className="font-bold text-red-700 flex items-center mb-2">
                            <span className="mr-2">🔴</span> À refaire aujourd'hui
                          </h3>
                          <p className="text-red-600 text-sm">
                            Tu as des exercices marqués en rouge il y a 3 jours. C'est le moment idéal pour les réessayer et ancrer la méthode !
                          </p>
                        </div>
                      )}

                      {(allExercises[activeTomeId] || []).filter(ex => activeLevelFilter === 'ALL' || ex.level === activeLevelFilter).map((ex: any, index: number, array: any[]) => {
                        const styles = getLevelStyles(ex.level);
                        const isCorrectionVisible = showCorrection[ex.id] || false;
                        const isCompleted = completedExercises.includes(ex.id);
                        const isLastExercise = index === array.length - 1;
                        const currentEvaluation = evaluations[ex.id]?.level;

                        return (
                          <div key={ex.id} id={ex.id} className="border rounded-[24px] overflow-hidden shadow-sm transition-all duration-500 scroll-mt-24" style={{ background: isCompleted ? '#22c55e10' : palette.bg, borderColor: isCompleted ? '#22c55e40' : palette.line }}>
                            {/* Énoncé */}
                            <div className="p-6">
                              <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-lg flex items-center" style={{ color: palette.ink }}>
                                  {isCompleted && <CheckCircle className="w-5 h-5 text-green-500 mr-2" />}
                                  EXERCICE {index + 1}
                                </h3>
                                <div className="flex items-center space-x-3">
                                  <span className={`text-xs font-bold px-2 py-1 rounded-md ${styles.badge}`}>{ex.level}</span>
                                  <span className="text-xs font-semibold px-2 py-1 rounded-md" style={{ background: palette.bg2, color: palette.ink2 }}>{ex.points} pts</span>
                                </div>
                              </div>
                              
                              {ex.contextBac && (
                                <p className="text-sm italic mb-4" style={{ color: palette.ink3 }}>
                                  {ex.contextBac.format} — {ex.contextBac.serie}. Durée conseillée : {ex.contextBac.dureeConseillee} min.
                                </p>
                              )}
                              
                              {ex.testedConcept && (
                                <div className="mb-4">
                                  <span className="italic text-sm" style={{ color: palette.ink2 }}>🎯 Ce qu'on teste ici : {ex.testedConcept}</span>
                                </div>
                              )}
                              
                              <div
                                className="text-base md:text-lg leading-relaxed math-content"
                                style={{ color: palette.ink }}
                                dangerouslySetInnerHTML={{ __html: renderMath(ex.statement) }}
                              />

                              <div className="mt-6 flex flex-wrap items-center gap-3">
                                <button 
                                  onClick={() => toggleCorrection(ex.id)}
                                  className={`inline-flex items-center font-semibold text-sm px-4 py-2 rounded-[12px] transition-colors`}
                                  style={isCorrectionVisible ? { background: palette.bg2, color: palette.ink2 } : { background: palette.ink, color: palette.bg }}
                                >
                                  {isCorrectionVisible ? <><EyeOff className="w-4 h-4 mr-2" /> Masquer la correction</> : <><Eye className="w-4 h-4 mr-2" /> Voir la correction</>}
                                </button>
                                <a
                                  href={`https://wa.me/2250715811398?text=${encodeURIComponent(`Bonjour le Grand Frère 👋\n\nJe suis bloqué sur l'Exercice de la plateforme (ID: ${ex.id}) du Tome ${activeTomeId}.\n\nPouvez-vous m'aider à comprendre ?`)}`}
                                  target="_blank" rel="noopener noreferrer"
                                  className="inline-flex items-center font-semibold text-sm px-4 py-2 rounded-[12px] text-[#128C7E] bg-[#128C7E]/10 hover:bg-[#128C7E]/20 transition-colors"
                                >
                                  <MessageCircle className="w-4 h-4 mr-2" /> Bloqué ?
                                </a>
                              </div>
                            </div>

                            {/* Correction Déroulante */}
                            {isCorrectionVisible && ex.correction && (
                              <div className={`border-t animate-fade-in`} style={{ borderColor: palette.line, background: palette.bg2 }}>
                                <div className={`${styles.header} text-white px-6 py-3 font-semibold flex items-center`}>
                                  <div className="w-2 h-2 rounded-full bg-white/50 mr-2"></div> Correction Détaillée
                                </div>
                                
                                <div className="p-6 space-y-8">
                                  {/* Répartition du temps (BAC) */}
                                  {ex.correction.repartitionTemps && (
                                    <div className="rounded-[16px] p-5 border" style={{ background: palette.bg, borderColor: palette.line }}>
                                      <h4 className="font-bold flex items-center mb-3" style={{ color: palette.ink }}>
                                        <span className="mr-2">⏱️</span> Répartition du temps recommandée :
                                      </h4>
                                      <ul className="space-y-1 text-sm" style={{ color: palette.ink2 }}>
                                        {ex.correction.repartitionTemps.map((rt: any, i: number) => (
                                          <li key={i} className="flex">
                                            <span className="w-12 font-semibold" style={{ color: palette.ink }}>{rt.question}</span>
                                            <span className="w-16 font-semibold" style={{ color: palette.ink }}>: {rt.duree} min</span>
                                            <span className="">— {rt.description}</span>
                                          </li>
                                        ))}
                                        <li className="flex pt-2 mt-2 border-t" style={{ borderColor: palette.line }}>
                                          <span className="w-12"></span>
                                          <span className="w-16 font-semibold" style={{ color: palette.ink3 }}>+ 1 min</span>
                                          <span style={{ color: palette.ink3 }}>de relecture</span>
                                        </li>
                                      </ul>
                                    </div>
                                  )}

                                  {/* Questions et Étapes */}
                                  {ex.correction.questions?.map((q: any, qIdx: number) => (
                                    <div key={qIdx} className="space-y-4">
                                      <div className="flex items-center whitespace-nowrap">
                                        <div className="h-px w-8 mr-4" style={{ background: palette.line }}></div>
                                        <h4 className="font-bold" style={{ color: palette.ink }}>{q.label}</h4>
                                        <div className="h-px w-full ml-4" style={{ background: palette.line }}></div>
                                      </div>
                                      
                                      <div className="pl-4 md:pl-12 space-y-4">
                                        {q.etapes.map((etape: any, eIdx: number) => {
                                          if (etape.type === 'PIEGE') {
                                            return (
                                              <div key={eIdx} className="bg-[#FDEDEC] dark:bg-[#C62828]/10 border-l-4 border-[#C62828] p-4 rounded-r-[12px]">
                                                <h5 className="font-bold text-[#C62828] dark:text-red-400 mb-1">🚨 ATTENTION PIÈGE BAC</h5>
                                                <div className="math-content" style={{ color: palette.ink }} dangerouslySetInnerHTML={{ __html: renderMath(etape.content) }} />
                                              </div>
                                            );
                                          }
                                          
                                          let icon = '🔍';
                                          let color = 'text-[#1A3557] dark:text-blue-400';
                                          if (etape.type === 'STRATEGIE') { icon = '🛠️'; color = 'text-[#1A3557] dark:text-blue-400'; }
                                          else if (etape.type === 'CALCUL') { icon = '🧮'; color = 'text-[#1B5E20] dark:text-green-400'; }
                                          else if (etape.type === 'CONCLUSION') { icon = '✅'; color = 'text-[#2E7D32] dark:text-green-400'; }
                                          
                                          return (
                                            <div key={eIdx} className="mb-4">
                                              <h5 className={`font-bold ${color} mb-1`}>{icon} {etape.type}</h5>
                                              <div className="math-content" style={{ color: palette.ink }} dangerouslySetInnerHTML={{ __html: renderMath(etape.content) }} />
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  ))}

                                  {/* Dialogue Petit Frère / Grand Frère */}
                                  {ex.correction.dialogue?.map((dial: any, dIdx: number) => (
                                    <div key={dIdx} className="space-y-4 mt-8">
                                      <div className="flex items-center whitespace-nowrap">
                                        <div className="h-px w-8 mr-4" style={{ background: palette.line }}></div>
                                        <h4 className="font-bold" style={{ color: palette.ink }}>🗣️ Dialogue Petit Frère / Grand Frère</h4>
                                        <div className="h-px w-full ml-4" style={{ background: palette.line }}></div>
                                      </div>
                                      
                                      <div className="space-y-3 pl-4 md:pl-12">
                                        <div className="p-4 rounded-2xl rounded-tl-sm shadow-sm inline-block max-w-[90%]" style={{ background: palette.bg, border: `1px solid ${palette.line}` }}>
                                          <p className="italic" style={{ color: palette.ink2 }}><span className="font-bold mr-2" style={{ color: palette.ink }}>🗣️ Petit Frère :</span> "{dial.petitFrere}"</p>
                                        </div>
                                        <div className="flex justify-end w-full">
                                          <div className="p-4 rounded-2xl rounded-tr-sm shadow-sm inline-block max-w-[90%]" style={{ background: `${palette.accent}15`, border: `1px solid ${palette.accent}30` }}>
                                            <p style={{ color: palette.ink }}><span className="font-bold mr-2" style={{ color: palette.accent }}>🗣️ Grand Frère :</span> "{dial.grandFrere}"</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}

                                  {/* Astuces du Grand Frère */}
                                  {ex.correction.astuces?.length > 0 && (
                                    <div className="mt-8 space-y-4">
                                      <div className="flex items-center whitespace-nowrap">
                                        <div className="h-px w-8 mr-4" style={{ background: palette.line }}></div>
                                        <h4 className="font-bold" style={{ color: palette.ink }}>💡 Astuces du Grand Frère</h4>
                                        <div className="h-px w-full ml-4" style={{ background: palette.line }}></div>
                                      </div>
                                      
                                      <div className="pl-4 md:pl-12">
                                        {ex.correction.astuces.map((astuce: string, aIdx: number) => (
                                          <div key={aIdx} className="border-l-4 border-[#E67E22] p-4 rounded-r-[12px] mb-3" style={{ background: `${palette.accent}10` }}>
                                            <div className="math-content" style={{ color: palette.ink }} dangerouslySetInnerHTML={{ __html: renderMath(astuce.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>')) }} />
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* Note Grand Frère */}
                                  {ex.correction.noteGrandFrere && (
                                    <div className="mt-8 border-2 p-5 rounded-[16px] shadow-sm relative" style={{ borderColor: palette.accent, background: `${palette.accent}05` }}>
                                      <div className="absolute -top-3 left-4 text-white px-3 py-1 rounded-[8px] text-xs font-bold uppercase tracking-wider" style={{ background: palette.accent }}>
                                        📝 Note du Grand Frère
                                      </div>
                                      <p className="font-medium italic mt-2" style={{ color: palette.ink }}>{ex.correction.noteGrandFrere}</p>
                                    </div>
                                  )}

                                  {/* Auto-Évaluation (Remplace Marquer comme fait) */}
                                  <div className="mt-10 border-2 rounded-[24px] overflow-hidden shadow-sm" style={{ borderColor: palette.ink }}>
                                    <div className="text-white px-6 py-3 font-semibold flex items-center" style={{ background: palette.ink }}>
                                      💪 Comment tu te sens sur cet exercice ?
                                    </div>
                                    <div className="p-6" style={{ background: palette.bg }}>
                                      <div className="space-y-3">
                                        {[
                                          { level: '🟢', label: "J'ai tout réussi tout seul" },
                                          { level: '🟡', label: "J'ai fait la majorité, j'ai jeté un œil au corrigé pour 1-2 questions" },
                                          { level: '🟠', label: "J'ai bloqué, j'ai utilisé le corrigé, maintenant je comprends" },
                                          { level: '🔴', label: "Je dois refaire cet exo dans 3 jours" }
                                        ].map(opt => (
                                          <label key={opt.level} className={`flex items-center p-3 rounded-[12px] border cursor-pointer transition-colors`} style={currentEvaluation === opt.level ? { borderColor: palette.accent, background: `${palette.accent}15` } : { borderColor: palette.line, background: palette.bg2 }}>
                                            <input 
                                              type="radio" 
                                              name={`eval-${ex.id}`} 
                                              value={opt.level}
                                              checked={currentEvaluation === opt.level}
                                              onChange={() => evaluateExercise(ex.id, opt.level as any, `Exercice ${index + 1}`, isLastExercise)}
                                              className="w-4 h-4 focus:ring-2 focus:ring-offset-1"
                                              style={{ accentColor: palette.accent }}
                                            />
                                            <span className="ml-3 font-medium" style={{ color: palette.ink }}><span className="mr-2">{opt.level}</span> {opt.label}</span>
                                          </label>
                                        ))}
                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            )}
                            
                            {/* CTA Doux à la fin de l'exercice BAC */}
                            {index === 2 && isCorrectionVisible && (
                              <div className="p-5 bg-gray-50 border-t border-gray-200 text-center animate-fade-in">
                                <p className="text-sm text-gray-600 mb-1">
                                  🎉 Tu as compris ce problème type BAC ? 
                                </p>
                                <p className="text-xs text-gray-500">
                                  Pour t'entraîner sur d'autres sujets complets de ce chapitre, retrouve-nous sur le <a href="https://selar.com/m/eductome" target="_blank" rel="noopener noreferrer" className="text-[#D81B60] font-semibold hover:underline">Tome intégral</a>.
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="p-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-4">
                      <PenTool className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A3557] mb-2">Bientôt disponible</h3>
                    <p className="text-gray-600 mb-6 mx-auto">Les exercices corrigés de ce tome sont en cours de rédaction par notre équipe pédagogique.</p>
                    <a href="https://wa.me/2250715811398" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md">
                      Préviens-moi sur WhatsApp
                    </a>
                  </div>
                )}
              </div>
            )}
            
            {/* Levier Upsell: Mega-Pack Exercices */}
            <div className="mt-12 bg-gradient-to-br from-gray-900 to-[#1A3557] rounded-3xl p-8 md:p-10 relative overflow-hidden text-white shadow-2xl max-w-5xl mx-auto border border-blue-900/50">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 blur-[80px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20 shrink-0">
                  <span className="text-5xl block mb-2">🚀</span>
                  <div className="text-xs font-bold text-blue-200 uppercase tracking-widest text-center">Bonus Exclusif</div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-2xl md:text-3xl font-bold font-playfair mb-3">Tu veux t'entraîner sur +500 exercices corrigés ?</h3>
                  <p className="text-blue-100 text-sm md:text-base leading-relaxed mb-6">
                    Le <strong>Méga-Pack "Exos Corrigés"</strong> (couvrant l'intégralité du programme pour TOUTES les matières) est <strong className="text-white bg-[#D81B60]/20 px-2 py-0.5 rounded">OFFERT</strong> automatiquement en bonus avec ton premier achat de manuel complet !
                  </p>
                  <Link 
                    to={isDashboard ? "/dashboard/boutique" : "/collections"}
                    className="inline-flex items-center bg-[#D81B60] hover:bg-pink-600 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg hover:shadow-pink-500/25 hover:-translate-y-1"
                  >
                    Obtenir mon Bonus maintenant <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* TAB 3: Planning du Grand Frère */}
        {activeTab === 'planning' && (
          <ScrollReveal className="py-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-teal-100 max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-6xl mb-6 block">📅</span>
                <h2 className="text-3xl font-bold font-playfair text-teal-800 mb-4">Le Planning du Grand Frère</h2>
                <p className="text-gray-600 text-lg">Ta stratégie étape par étape pour arriver serein le jour du BAC.</p>
              </div>

              <div className="relative border-l-4 border-teal-200 ml-4 md:ml-8 space-y-12 pb-8">
                <div className="relative">
                  <div className="absolute -left-[26px] bg-teal-500 w-12 h-12 rounded-full border-4 border-white flex items-center justify-center text-white font-bold shadow-md">1</div>
                  <div className="pl-10">
                    <h3 className="text-xl font-bold text-teal-900 mb-2">Début d'année (Septembre - Octobre)</h3>
                    <p className="text-gray-700 font-medium mb-2">Objectif : Poser les bases et créer la routine.</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Évaluation de ton niveau réel (fais notre Quiz !).</li>
                      <li>Maîtrise absolue du calcul algébrique (sinon tu vas souffrir toute l'année).</li>
                      <li>Début des chapitres Limites & Continuité.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[26px] bg-teal-500 w-12 h-12 rounded-full border-4 border-white flex items-center justify-center text-white font-bold shadow-md">2</div>
                  <div className="pl-10">
                    <h3 className="text-xl font-bold text-teal-900 mb-2">Fin du 1er Trimestre (Décembre)</h3>
                    <p className="text-gray-700 font-medium mb-2">Objectif : Premier bilan et accélération.</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Tu dois être un maître sur les Dérivées et Études de fonctions.</li>
                      <li>On attaque les Intégrales et les Suites Numériques.</li>
                      <li>C'est le moment de relire les fiches méthodes Eductome pour éviter les erreurs bêtes.</li>
                    </ul>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[26px] bg-teal-500 w-12 h-12 rounded-full border-4 border-white flex items-center justify-center text-white font-bold shadow-md">3</div>
                  <div className="pl-10">
                    <h3 className="text-xl font-bold text-teal-900 mb-2">Fin du 2ème Trimestre (Mars)</h3>
                    <p className="text-gray-700 font-medium mb-2">Objectif : Les gros morceaux (Examens blancs).</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Focus total sur Logarithme / Exponentielle.</li>
                      <li>On intègre la Géométrie de l'Espace (Tome 9) et les Statistiques (Tome 8).</li>
                      <li>Commence à faire des sujets d'examens blancs le week-end, en condition réelle.</li>
                    </ul>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[26px] bg-orange-500 w-12 h-12 rounded-full border-4 border-white flex items-center justify-center text-white font-bold shadow-md">4</div>
                  <div className="pl-10">
                    <h3 className="text-xl font-bold text-orange-900 mb-2">Mois - 1 (Avril - Mai)</h3>
                    <p className="text-gray-700 font-medium mb-2">Objectif : Mode Commando.</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Fini d'apprendre des nouveaux cours. Place à la PRATIQUE INTENSIVE.</li>
                      <li>Fais tous les "Exercices type BAC corrigés" de notre plateforme.</li>
                      <li>Si tu as un point rouge 🔴 sur un exo, tu le refais 3 jours après.</li>
                    </ul>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[26px] bg-[#D81B60] w-12 h-12 rounded-full border-4 border-white flex items-center justify-center text-white font-bold shadow-md">5</div>
                  <div className="pl-10">
                    <h3 className="text-xl font-bold text-[#D81B60] mb-2">Semaine - 2 (Fin Mai)</h3>
                    <p className="text-gray-700 font-medium mb-2">Objectif : Affûtage et gestion du stress.</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Révision exclusive avec tes Fiches Méthodes (pas de gros livres).</li>
                      <li>Revoir la liste des "10 questions pièges" (onglet suivant).</li>
                      <li>Dors bien, mange bien. Le travail est déjà fait.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* TAB 4: Les 10 Questions Pièges */}
        {activeTab === 'questions' && (
          <ScrollReveal className="py-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-orange-100">
              <div className="text-center mb-10">
                <span className="text-6xl mb-6 block">🎯</span>
                <h2 className="text-3xl font-bold font-playfair text-orange-800 mb-4">Les 10 questions dont 80% des élèves font erreur</h2>
                <p className="text-gray-600 text-lg">On a corrigé des milliers de copies. Ces 10 erreurs reviennent en boucle. Ne sois pas dans les 80%.</p>
              </div>

              <div className="space-y-6">
                {[
                  { id: 1, title: "L'erreur de la valeur absolue dans ln(x)", desc: "Lorsqu'on te demande de trouver la primitive de f(x) = u'/u, 8 élèves sur 10 écrivent ln(u) au lieu de ln(|u|). C'est -0.5 points immédiat." },
                  { id: 2, title: "L'ensemble de définition des équations logarithmiques", desc: "Avant de résoudre ln(A) + ln(B) = ln(C), tu DOIS poser les conditions A>0, B>0, C>0. Sans ça, ta solution finale peut être hors domaine !" },
                  { id: 3, title: "Le signe moins devant le produit vectoriel", desc: "Dans l'espace (Tome 9), en développant un produit vectoriel, on oublie souvent le 'moins' de la deuxième coordonnée (le j). Résultat : équation du plan fausse, distance fausse, 0 point." },
                  { id: 4, title: "Confondre u_n et u_{n+1} dans les suites récurrentes", desc: "Dans le raisonnement par récurrence, l'hérédité consiste à supposer P(n) vraie pour DÉMONTRER P(n+1). Beaucoup écrivent juste P(n+1) et tournent en rond." },
                  { id: 5, title: "Oublier la constante d'intégration", desc: "Calculer une intégrale c'est avec des bornes (ça donne un nombre). Trouver une primitive, c'est F(x) + C. N'oublie jamais ce + C si on te demande l'ensemble des primitives." },
                  { id: 6, title: "Le discriminant négatif (Complexe)", desc: "Si Delta = -16, n'écris JAMAIS racine(-16). Écris i*racine(16) = 4i. Les correcteurs détestent voir une racine carrée sur un nombre négatif." },
                  { id: 7, title: "Le piège de l'ajustement de Mayer", desc: "En statistiques (Tome 8), pour trouver le point moyen, n'oublie pas de séparer ta série en deux groupes ÉGAUX. Si N est impair, le point central est souvent laissé à part ou mis dans le 1er groupe selon l'énoncé." },
                  { id: 8, title: "Dériver un produit (u*v)'", desc: "Classique : la dérivée de x*e^x n'est PAS 1*e^x. C'est u'v + uv', donc 1*e^x + x*e^x. C'est la base de l'étude de fonction de la Terminale D." },
                  { id: 9, title: "Confusion Limite et Asymptote", desc: "Si limite(x->2) f(x) = infini, alors x=2 est asymptote VERTICALE (pas horizontale). Un moyen mnémotechnique : x=constante, c'est un poteau (vertical)." },
                  { id: 10, title: "L'unité d'aire dans le calcul intégral", desc: "Quand tu calcules l'aire entre deux courbes, le résultat brut est en Unité d'Aire (u.a). Si l'énoncé dit 'unité graphique : 2cm', tu dois multiplier ton résultat par 2*2 = 4 cm² !" }
                ].map((q) => (
                  <div key={q.id} className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="bg-orange-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-4">
                        {q.id}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">{q.title}</h4>
                        <p className="text-gray-600">{q.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Soft CTA Bottom */}
        <ScrollReveal className="mt-12 border-t border-gray-200 dark:border-[#30363D] pt-16 pb-8 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-playfair font-bold text-[#1A1A2E] dark:text-white mb-4">Envie d'aller plus loin ?</h2>
          <p className="text-gray-600 dark:text-[#8B949E] mb-8">
            Si ces ressources gratuites t'ont aidé, nos manuels complets te donneront toutes les clés pour exceller. Retrouve l'intégralité du programme avec encore plus d'exercices corrigés pas-à-pas et d'astuces.
          </p>
          <Link 
            to={isDashboard ? "/dashboard/boutique" : "/collections"}
            className="inline-flex items-center bg-[#D81B60] text-white hover:bg-pink-700 font-bold py-3 px-8 rounded-xl transition-colors shadow-sm"
          >
            Découvrir les Tomes Complets
          </Link>
        </ScrollReveal>

      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-24 right-4 md:right-8 bg-eductome-marine text-white px-6 py-4 rounded-xl shadow-2xl z-50 animate-fade-in flex items-center">
          <span className="mr-3">{toastMessage.includes('🔥') ? '🔥' : toastMessage.includes('⭐') ? '⭐' : toastMessage.includes('💪') ? '💪' : '💡'}</span>
          <p className="font-medium pr-8">{toastMessage}</p>
          <button onClick={() => showToast('')} className="absolute right-4 text-gray-400 hover:text-white"><X className="w-4 h-4" /></button>
        </div>
      )}

      {/* Capture WhatsApp Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative animate-scale-up">
            <button onClick={dismissModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><X className="w-6 h-6" /></button>
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold font-playfair text-eductome-marine mb-2">Eh, tu bosses bien !</h3>
            <p className="text-gray-600 mb-6">Tu veux que je t'envoie chaque semaine 1 fiche méthode + 1 piège à éviter, directement sur WhatsApp ?</p>
            
            <a 
              href="https://wa.me/2250715811398?text=Salut%20le%20Grand%20Fr%C3%A8re%20!%20Je%20veux%20bien%20recevoir%20les%20fiches%20m%C3%A9thodes%20et%20astuces%20chaque%20semaine."
              target="_blank" rel="noopener noreferrer"
              onClick={completeCapture}
              className="w-full flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md mb-3"
            >
              <MessageCircle className="w-5 h-5 mr-2" /> Oui, je veux progresser
            </a>
            <button onClick={dismissModal} className="w-full py-2 text-sm text-gray-500 hover:text-gray-800 font-medium">
              Non merci, je gère
            </button>
          </div>
        </div>
      )}

      {/* Sticky CTA Footer */}
      {activeTomeId && (
        <div className="fixed bottom-0 inset-x-0 bg-white dark:bg-[#161B22] border-t border-gray-200 dark:border-[#30363D] p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40 hidden md:block">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center text-sm">
              <span className="text-[#D81B60] font-bold mr-2">📘 Le Tome complet</span>
              <span className="text-gray-600 dark:text-[#8B949E]">est disponible ! 30+ exos, analogies, astuces de pro.</span>
            </div>
            <Link 
              to={isDashboard ? "/dashboard/boutique" : "/collections"}
              className="bg-[#D81B60] text-white font-semibold px-4 py-1.5 rounded-lg hover:bg-pink-700 transition-colors text-sm shadow-sm"
            >
              Débloquer le tome
            </Link>
          </div>
        </div>
      )}
      <LeadCaptureModal 
        isOpen={isLeadModalOpen} 
        onClose={() => setIsLeadModalOpen(false)} 
        title={leadModalConfig.title}
        description={leadModalConfig.description}
        onSuccess={() => {
          setIsLeadModalOpen(false);
          if (pendingTomeId && pendingExerciseId) {
            // Redirection Contextuelle : propulser l'élève directement sur son exercice dans le Dashboard
            navigate(`/dashboard/ressources?tab=exercices&tomeId=${pendingTomeId}&openEx=${pendingExerciseId}`);
          } else {
            window.location.reload();
          }
        }}
      />
      </div>
    </div>
  );
}
