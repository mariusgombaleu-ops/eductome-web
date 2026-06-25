import { useState } from 'react';
import { BookOpen, PlayCircle, Star, ShoppingBag, Book, Zap } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { useTheme } from '../../contexts/ThemeContext';
import { GrandFrereGuide } from '../../components/ui/GrandFrereGuide';

const COURSE_METADATA: Record<string, any> = {
  't1-limites': {
    title: 'Les Limites',
    subject: 'Mathématiques',
    level: 'Terminale D',
    colorClass: 'bg-gradient-to-br from-[#1976D2] to-[#1A3557]',
    series: ['Terminale D', 'Terminale C'],
    totalQuizzes: 5,
    completedQuizzes: 0,
    progress: 0,
    status: 'nouveau'
  },
  't2-derivees': {
    title: 'Les Dérivées',
    subject: 'Mathématiques',
    level: 'Terminale D',
    colorClass: 'bg-gradient-to-br from-purple-600 to-purple-800',
    series: ['Terminale D', 'Terminale C'],
    totalQuizzes: 4,
    completedQuizzes: 0,
    progress: 0,
    status: 'nouveau'
  },
  't3-primitives': {
    title: 'Les Primitives',
    subject: 'Mathématiques',
    level: 'Terminale D',
    colorClass: 'bg-gradient-to-br from-indigo-600 to-indigo-800',
    series: ['Terminale D', 'Terminale C'],
    totalQuizzes: 4,
    completedQuizzes: 0,
    progress: 0,
    status: 'nouveau'
  },
  't11-eq-diff': {
    title: 'Équations Différentielles',
    subject: 'Mathématiques',
    level: 'Terminale D',
    colorClass: 'bg-gradient-to-br from-teal-600 to-teal-800',
    series: ['Terminale D', 'Terminale C'],
    totalQuizzes: 3,
    completedQuizzes: 0,
    progress: 0,
    status: 'nouveau'
  }
};

const STARTER_COURSES = [
  {
    id: "t1-limites",
    title: "Les Limites",
    subject: "Mathématiques",
    level: "Terminale",
    series: ["Terminale D", "Terminale C"],
    progress: 0,
    totalQuizzes: 1,
    completedQuizzes: 0,
    status: "nouveau",
    colorClass: "bg-gradient-to-br from-[#1976D2] to-[#1A3557]", // Bleu Marine
    badge: "Chapitre 1 Gratuit"
  },
  {
    id: "pc-cinematique",
    title: "Cinématique du Point",
    subject: "Physique-Chimie",
    level: "Terminale",
    series: ["Terminale D", "Terminale C"],
    progress: 0,
    totalQuizzes: 1,
    completedQuizzes: 0,
    status: "nouveau",
    colorClass: "bg-gradient-to-br from-purple-600 to-purple-800", // Violet
    badge: "Chapitre 1 Gratuit"
  },
  {
    id: "svt-nerveux",
    title: "Le Système Nerveux",
    subject: "SVT",
    level: "Terminale",
    series: ["Terminale D", "Terminale C"],
    progress: 0,
    totalQuizzes: 1,
    completedQuizzes: 0,
    status: "nouveau",
    colorClass: "bg-gradient-to-br from-green-600 to-green-800", // Vert
    badge: "Chapitre 1 Gratuit"
  },
  {
    id: "philo-methode",
    title: "Méthodologie Dissertation",
    subject: "Philosophie",
    level: "Terminale",
    series: ["Terminale D", "Terminale C", "Terminale A"],
    progress: 0,
    totalQuizzes: 1,
    completedQuizzes: 0,
    status: "nouveau",
    colorClass: "bg-gradient-to-br from-rose-700 to-rose-900", // Bordeaux
    badge: "Chapitre 1 Gratuit"
  }
];

export const MyCourses = () => {
  const navigate = useNavigate();
  const { unlockedCourses } = useUser();
  const { palette } = useTheme();
  const userSerie = localStorage.getItem('eductome_user_serie') || '';
  const [activeTab, setActiveTab] = useState<'all' | 'progress' | 'completed'>('all');

  // Build myCourses dynamically from unlockedCourses
  const purchasedCourses = unlockedCourses
    .map(id => ({ id, ...COURSE_METADATA[id] }))
    .filter(c => c && c.title);

  // Add the free starter courses that haven't been purchased yet
  const freeStarterCourses = STARTER_COURSES.filter(c => !unlockedCourses.includes(c.id));

  const myCourses = [...purchasedCourses, ...freeStarterCourses];

  const filteredCourses = myCourses.filter(course => {
    // Filter by serie
    if (userSerie && course.series) {
      const normalizedUser = userSerie.toLowerCase().replace('-', ' ');
      const match = course.series.some((s: string) => s.toLowerCase().replace('-', ' ') === normalizedUser);
      if (!match) return false;
    }
    
    // Filter by tab
    if (activeTab === 'all') return true;
    if (activeTab === 'progress') return (course.progress < 100 && course.progress > 0) || course.status === 'nouveau';
    if (activeTab === 'completed') return course.progress === 100;
    return true;
  });

  return (
    <div className="space-y-8 px-4 md:px-6 lg:px-8 pt-6 pb-10 font-poppins">
      <GrandFrereGuide 
        id="courses"
        message="Voici tes armes de guerre. Tu retrouveras ici tous les tomes que tu as débloqués. Continue là où tu t'es arrêté et n'oublie pas : la régularité fait la différence."
      />
      {/* Banner */}
      <div className="relative bg-gradient-to-br from-[#1A3557] to-[#1976D2] rounded-[28px] p-6 md:p-8 overflow-hidden shadow-lg flex flex-col md:flex-row items-center gap-8 animate-fade-in-up mb-6">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 pointer-events-none blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 -mb-12 w-32 h-32 rounded-full bg-white/10 pointer-events-none blur-2xl"></div>
        
        <div className="relative z-10 text-white flex-1">
          <h1 className="text-3xl font-playfair font-bold mb-2 flex items-center gap-3">
            <BookOpen className="w-8 h-8 opacity-80" />
            Mes Cours
          </h1>
          <p className="text-white/80 max-w-lg mt-2 text-[15px] font-medium leading-relaxed">
            Retrouve ici tous les tomes et chapitres que tu as débloqués. Continue ton entraînement !
          </p>
        </div>
      </div>

      {/* Banner Révisions Express */}
      <div className="rounded-[28px] p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border" style={{ background: palette.glass, borderColor: palette.glassLine, backdropFilter: 'blur(20px) saturate(160%)' }}>
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-[20px] shrink-0" style={{ background: 'rgba(216, 27, 96, 0.1)' }}>
            <Zap className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: palette.accent }} />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold" style={{ color: palette.ink }}>Mode Révision Express</h2>
            <p className="text-xs sm:text-[14px] font-medium" style={{ color: palette.ink2 }}>
              15 minutes chrono. Révise les essentiels à connaître avant un devoir !
            </p>
          </div>
        </div>
        <button 
          onClick={() => navigate('/dashboard/revisions')}
          className="w-full sm:w-auto px-6 py-3 text-white rounded-[20px] font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105 shrink-0 shadow-lg"
          style={{ background: palette.accent, boxShadow: `0 8px 24px ${palette.accent}40` }}
        >
          Lancer une révision <Zap className="w-5 h-5 fill-current" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 p-1.5 rounded-[20px] border w-full max-w-md transition-colors duration-300" style={{ background: palette.bg2, borderColor: palette.line }}>
        <button 
          onClick={() => setActiveTab('all')}
          className={`flex-1 py-2 text-sm font-medium rounded-[16px] transition-all duration-300 ${activeTab === 'all' ? 'shadow-sm text-white' : 'hover:bg-black/5 dark:hover:bg-white/5'}`}
          style={{ 
            background: activeTab === 'all' ? palette.accent : 'transparent',
            color: activeTab === 'all' ? '#FFF' : palette.ink2
          }}
        >
          Tous
        </button>
        <button 
          onClick={() => setActiveTab('progress')}
          className={`flex-1 py-2 text-sm font-medium rounded-[16px] transition-all duration-300 ${activeTab === 'progress' ? 'shadow-sm text-white' : 'hover:bg-black/5 dark:hover:bg-white/5'}`}
          style={{ 
            background: activeTab === 'progress' ? palette.accent : 'transparent',
            color: activeTab === 'progress' ? '#FFF' : palette.ink2
          }}
        >
          En cours
        </button>
        <button 
          onClick={() => setActiveTab('completed')}
          className={`flex-1 py-2 text-sm font-medium rounded-[16px] transition-all duration-300 ${activeTab === 'completed' ? 'shadow-sm text-white' : 'hover:bg-black/5 dark:hover:bg-white/5'}`}
          style={{ 
            background: activeTab === 'completed' ? palette.accent : 'transparent',
            color: activeTab === 'completed' ? '#FFF' : palette.ink2
          }}
        >
          Terminés
        </button>
      </div>

      {/* Course Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {filteredCourses.map((course, index) => (
            <div key={course.id} className="rounded-[28px] overflow-hidden flex flex-col group animate-in fade-in slide-in-from-bottom-4 shadow-sm border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ background: palette.bg2, borderColor: palette.line, animationDelay: `${(index + 1) * 100}ms` }}>
              {/* Image / Color Header */}
              <div className={`h-[90px] sm:h-[120px] ${course.colorClass} relative p-4 sm:p-6 flex flex-col justify-center`}>
                <h3 className="text-sm sm:text-xl font-bold text-white drop-shadow-md leading-tight line-clamp-2">{course.title}</h3>
                <p className="text-[10px] sm:text-xs font-bold text-white/80 uppercase tracking-wider mt-1 sm:mt-2">{course.subject} • {course.level}</p>
              </div>
              
              {/* Content */}
              <div className="p-3 sm:p-5 flex flex-col flex-grow">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-4 gap-2">
                  <div className="flex gap-2">
                    {course.badge && (
                      <span className="text-xs font-bold px-2 py-1 rounded bg-[#D81B60] text-white flex items-center shadow-sm">
                        🎁 {course.badge}
                      </span>
                    )}
                    <span className="text-xs font-bold px-2 py-1 rounded-[12px] border flex items-center" style={{ background: palette.bg, borderColor: palette.line, color: palette.ink2 }}>
                      {course.completedQuizzes}/{course.totalQuizzes} Quiz
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    {course.status === 'termine' && (
                      <span className="text-[10px] sm:text-xs font-bold px-2 py-1 rounded-[12px] bg-yellow-100/50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-500 flex items-center gap-1">
                        Terminé <Star className="w-3 h-3 fill-current" />
                      </span>
                    )}
                    {course.status === 'en_cours' && (
                      <span className="text-[10px] sm:text-xs font-bold px-2 py-1 rounded-[12px] bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                        En cours
                      </span>
                    )}
                    {course.status === 'nouveau' && (
                      <span className="text-[10px] sm:text-xs font-bold px-2 py-1 rounded-[12px] bg-green-100/50 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                        Nouveau
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-between text-[10px] mb-1">
                  <span className="font-medium" style={{ color: palette.ink3 }}>Progression</span>
                  <span className="font-bold" style={{ color: palette.ink }}>{course.progress}%</span>
                </div>
                
                <div className="w-full rounded-full h-1.5 sm:h-2 mb-4 overflow-hidden" style={{ background: palette.line }}>
                  <div 
                    className="h-full rounded-full transition-all duration-1000" 
                    style={{ width: `${course.progress}%`, background: palette.accent }}
                  ></div>
                </div>
                
                <div className="mt-auto pt-2">
                  {course.progress === 100 ? (
                    <button 
                      onClick={() => navigate(`/dashboard/course/${course.id}`)}
                      className="w-full py-2.5 rounded-[16px] font-bold flex items-center justify-center gap-2 transition-colors border"
                      style={{ background: palette.bg, color: palette.ink2, borderColor: palette.line }}
                    >
                      <PlayCircle className="w-5 h-5" />
                      Revoir
                    </button>
                  ) : (
                    <button 
                      onClick={() => navigate(`/dashboard/course/${course.id}`)}
                      className="w-full py-2.5 rounded-[16px] font-bold flex items-center justify-center gap-2 border-2 transition-colors hover:text-white"
                      style={{ borderColor: palette.accent, color: palette.accent }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = palette.accent;
                        e.currentTarget.style.color = '#FFF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = palette.accent;
                      }}
                    >
                      <PlayCircle className="w-5 h-5" />
                      Continuer
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="border rounded-[28px] p-12 flex flex-col items-center justify-center text-center animate-in fade-in" style={{ background: palette.glass, borderColor: palette.glassLine, backdropFilter: 'blur(20px) saturate(160%)' }}>
          <div className="w-20 h-20 rounded-[28px] flex items-center justify-center mb-4" style={{ background: palette.bg2 }}>
            <Book className="w-10 h-10" style={{ color: palette.ink3 }} />
          </div>
          <h2 className="text-xl font-bold mb-2" style={{ color: palette.ink }}>Tu n'as pas encore de cours</h2>
          <p className="max-w-md mb-6 font-medium text-sm" style={{ color: palette.ink2 }}>
            Découvre notre catalogue et commence ton apprentissage dès aujourd'hui pour être prêt à l'examen.
          </p>
          <Link 
            to="/dashboard/boutique"
            className="px-6 py-3 text-white rounded-[20px] font-bold flex items-center gap-2 transition-transform hover:scale-105 shadow-md"
            style={{ background: palette.accent, boxShadow: `0 8px 24px ${palette.accent}40` }}
          >
            Découvrir la boutique <ShoppingBag className="w-5 h-5" />
          </Link>
        </div>
      )}
    </div>
  );
};
