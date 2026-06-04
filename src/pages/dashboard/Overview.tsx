import { Trophy, Star, Book, Target, ArrowRight, Flame, BookOpen } from 'lucide-react';
import { StudyChart } from '../../components/dashboard/StudyChart';
import { useEffect, useState } from 'react';
import { AnimatedCounter } from '../../components/dashboard/AnimatedCounter';
import { Link } from 'react-router-dom';
import { useUser, USER_LEVELS } from '../../contexts/UserContext';

const QUOTES = [
  "Chaque minute d'étude est un pas de plus vers ton but.",
  "Le Caïman ne dort pas — il prépare sa victoire.",
  "Au Cacao, tant que le match n'est pas fini, on peut gâter le coin.",
  "Ce n'est pas une question d'intelligence. C'est une question de méthode.",
  "Celui qui comprend domine. Celui qui mémorise subit."
];

export const Overview = () => {
  const { xp, level, rewardedActions } = useUser();
  const [quote, setQuote] = useState(QUOTES[0]);
  const [greeting, setGreeting] = useState("Bonjour");
  
  const isNewUser = xp === 0;
  let completedQuizzes = 0;
  rewardedActions.forEach(a => { if (a.startsWith('quiz_')) completedQuizzes++; });

  useEffect(() => {
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
    
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Bon matin");
    else if (hour < 18) setGreeting("Bon après-midi");
    else setGreeting("Bonsoir");
  }, []);

  return (
    <div className="space-y-8 pb-10 font-poppins">
      {/* Welcome Banner */}
      <div className="relative bg-gradient-to-r from-eductome-marine to-eductome-sky rounded-2xl p-6 md:p-8 overflow-hidden shadow-lg h-[140px] md:h-[160px] flex items-center justify-between animate-fade-in-up">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 -mb-12 w-32 h-32 rounded-full bg-white opacity-10 pointer-events-none"></div>
        
        <div className="relative z-10 text-white flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-2xl md:text-3xl font-playfair font-bold mb-1">
            {greeting}, Marius 👋
          </h1>
          <p className="text-blue-100 text-sm md:text-base italic max-w-lg">
            "{quote}"
          </p>
        </div>
        
        <div className="relative z-10 bg-[#E65100] rounded-xl p-3 md:p-4 flex items-center space-x-3 text-white shadow-xl animate-in fade-in zoom-in duration-500 delay-150">
          <Flame className="w-6 h-6 md:w-8 md:h-8 text-white" />
          <div className="hidden sm:block">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-orange-200">Série actuelle</p>
            <p className="text-xl md:text-2xl font-bold">3 Jours</p>
          </div>
        </div>
      </div>

      {/* Stats Grid - Toujours visible pour l'aspect psychologique */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {/* Card 1: Leçons terminées */}
        <div className="bg-white dark:bg-[#161B22] p-4 md:p-6 rounded-xl shadow-sm border border-[#E1E4E8] dark:border-[#30363D] border-b-4 border-b-blue-500 transition-colors duration-300">
          <div className="flex justify-between items-start mb-2">
            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-500">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold px-2 py-1 rounded bg-blue-50 dark:bg-blue-900/20 text-blue-500">
              Total Validé
            </span>
          </div>
          <p className="text-sm font-medium text-[#6B7280] dark:text-[#8B949E]">Leçons terminées</p>
          <p className="text-3xl font-bold mt-1 text-[#1A1A2E] dark:text-white">
            <AnimatedCounter value={completedQuizzes} duration={1500} />
          </p>
        </div>
        
        {/* Card 2: Moyenne Quiz */}
        <div className="bg-white dark:bg-[#161B22] p-4 md:p-6 rounded-xl shadow-sm border border-[#E1E4E8] dark:border-[#30363D] border-b-4 border-b-[#D81B60] transition-colors duration-300">
          <div className="flex justify-between items-start mb-2">
            <div className="p-2 rounded-lg bg-pink-50 dark:bg-pink-900/20 text-[#D81B60]">
              <Target className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold px-2 py-1 rounded bg-pink-50 dark:bg-pink-900/20 text-[#D81B60]">Objectif 80%</span>
          </div>
          <p className="text-sm font-medium text-[#6B7280] dark:text-[#8B949E]">Moyenne Quiz</p>
          <p className="text-3xl font-bold mt-1 text-[#1A1A2E] dark:text-white">
            <AnimatedCounter value={isNewUser ? 0 : 85} suffix="%" duration={1800} />
          </p>
        </div>

        {/* Card 3: Points d'XP */}
        <div className="bg-white dark:bg-[#161B22] p-4 md:p-6 rounded-xl shadow-sm border border-[#E1E4E8] dark:border-[#30363D] border-b-4 border-b-yellow-500 transition-colors duration-300">
          <div className="flex justify-between items-start mb-2">
            <div className="p-2 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 text-yellow-500">
              <Star className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold px-2 py-1 rounded bg-yellow-50 dark:bg-yellow-900/20 text-yellow-500">
              Niveau {level.level}
            </span>
          </div>
          <p className="text-sm font-medium text-[#6B7280] dark:text-[#8B949E]">Points d'XP</p>
          <p className="text-3xl font-bold mt-1 text-[#1A1A2E] dark:text-white">
            <AnimatedCounter value={xp} duration={2000} />
          </p>
        </div>

        {/* Card 4: Objectif BAC */}
        <div className="bg-white dark:bg-[#161B22] p-4 md:p-6 rounded-xl shadow-sm border border-[#E1E4E8] dark:border-[#30363D] border-b-4 border-b-green-500 transition-colors duration-300">
          <div className="flex justify-between items-start mb-2">
            <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-500">
              <Trophy className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold px-2 py-1 rounded bg-green-50 dark:bg-green-900/20 text-green-500">
              Objectif Atteignable
            </span>
          </div>
          <p className="text-sm font-medium text-[#6B7280] dark:text-[#8B949E]">Objectif BAC</p>
          <p className="text-3xl font-bold mt-1 text-[#1A1A2E] dark:text-white">
            <AnimatedCounter value={isNewUser ? 0 : Math.min(50 + level.level * 5, 99)} suffix="%" duration={1500} />
          </p>
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
              {/* Chart Section */}
              <div className="bg-white dark:bg-[#161B22] border border-[#E1E4E8] dark:border-[#30363D] rounded-xl shadow-sm p-6 transition-colors duration-300">
                <h2 className="text-lg font-bold text-[#1A1A2E] dark:text-white mb-6">Temps d'étude</h2>
                <StudyChart />
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
    </div>
  );
};
