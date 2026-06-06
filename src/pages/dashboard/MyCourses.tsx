import { useState } from 'react';
import { BookOpen, PlayCircle, Star, ShoppingBag, Book } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { GrandFrereGuide } from '../../components/ui/GrandFrereGuide';

const COURSE_METADATA: Record<string, any> = {
  't1-limites': {
    title: 'Les Limites',
    subject: 'Mathématiques',
    level: 'Terminale D',
    colorClass: 'bg-gradient-to-br from-blue-600 to-blue-800',
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

export const MyCourses = () => {
  const navigate = useNavigate();
  const { unlockedCourses } = useUser();
  const userSerie = localStorage.getItem('eductome_user_serie') || '';
  const [activeTab, setActiveTab] = useState<'all' | 'progress' | 'completed'>('all');

  // Build myCourses dynamically from unlockedCourses
  const myCourses = unlockedCourses
    .map(id => ({ id, ...COURSE_METADATA[id] }))
    .filter(c => c && c.title);

  const filteredCourses = myCourses.filter(course => {
    // Filter by serie
    if (userSerie && course.series && !course.series.includes(userSerie)) return false;
    
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
      <div className="relative bg-gradient-to-r from-eductome-marine to-eductome-sky rounded-2xl p-6 md:p-8 overflow-hidden shadow-lg flex flex-col md:flex-row items-center gap-8 animate-fade-in-up mb-6">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 -mb-12 w-32 h-32 rounded-full bg-white opacity-10 pointer-events-none"></div>
        
        <div className="relative z-10 text-white flex-1">
          <h1 className="text-3xl font-playfair font-bold mb-2 flex items-center gap-3">
            <BookOpen className="w-8 h-8" />
            Mes Cours
          </h1>
          <p className="text-blue-100 max-w-lg mt-2 text-sm">
            Retrouve ici tous les tomes et chapitres que tu as débloqués. Continue ton entraînement !
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 bg-white dark:bg-[#161B22] p-1.5 rounded-xl border border-[#E1E4E8] dark:border-[#30363D] w-full max-w-md">
        <button 
          onClick={() => setActiveTab('all')}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'all' ? 'bg-[#1976D2] text-white shadow-sm' : 'text-[#6B7280] dark:text-[#8B949E] hover:text-[#1A1A2E] dark:hover:text-white hover:bg-[#F8F9FA] dark:hover:bg-[#0D1117]'}`}
        >
          Tous
        </button>
        <button 
          onClick={() => setActiveTab('progress')}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'progress' ? 'bg-[#1976D2] text-white shadow-sm' : 'text-[#6B7280] dark:text-[#8B949E] hover:text-[#1A1A2E] dark:hover:text-white hover:bg-[#F8F9FA] dark:hover:bg-[#0D1117]'}`}
        >
          En cours
        </button>
        <button 
          onClick={() => setActiveTab('completed')}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === 'completed' ? 'bg-[#1976D2] text-white shadow-sm' : 'text-[#6B7280] dark:text-[#8B949E] hover:text-[#1A1A2E] dark:hover:text-white hover:bg-[#F8F9FA] dark:hover:bg-[#0D1117]'}`}
        >
          Terminés
        </button>
      </div>

      {/* Course Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {filteredCourses.map((course, index) => (
            <div key={course.id} className="bg-white dark:bg-[#161B22] rounded-2xl shadow-md border border-[#E1E4E8] dark:border-[#30363D] overflow-hidden flex flex-col group animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
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
                    <span className="text-xs font-bold px-2 py-1 rounded bg-[#F8F9FA] dark:bg-[#0D1117] border border-[#E1E4E8] dark:border-[#30363D] text-[#6B7280] dark:text-[#8B949E] flex items-center">
                      {course.completedQuizzes}/{course.totalQuizzes} Quiz
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    {course.status === 'termine' && (
                      <span className="text-xs font-bold px-2 py-1 rounded bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-500 flex items-center gap-1">
                        Terminé <Star className="w-3 h-3 fill-current" />
                      </span>
                    )}
                    {course.status === 'en_cours' && (
                      <span className="text-xs font-bold px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                        En cours
                      </span>
                    )}
                    {course.status === 'nouveau' && (
                      <span className="text-xs font-bold px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                        Nouveau
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-[#6B7280] dark:text-[#8B949E] font-medium">Progression</span>
                  <span className="font-bold text-[#1A1A2E] dark:text-white">{course.progress}%</span>
                </div>
                
                <div className="w-full bg-[#E1E4E8] dark:bg-[#30363D] rounded-full h-1.5 sm:h-2 mb-4 overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 bg-[#1A3557] dark:bg-[#1976D2]" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                
                <div className="mt-auto pt-2">
                  {course.progress === 100 ? (
                    <button 
                      onClick={() => navigate(`/dashboard/course/${course.id}`)}
                      className="w-full py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 bg-[#F8F9FA] dark:bg-[#30363D] text-[#6B7280] dark:text-[#8B949E] hover:bg-[#E1E4E8] dark:hover:bg-[#1A1A2E] transition-colors"
                    >
                      <PlayCircle className="w-5 h-5" />
                      Revoir
                    </button>
                  ) : (
                    <button 
                      onClick={() => navigate(`/dashboard/course/${course.id}`)}
                      className="w-full py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 bg-transparent border-2 border-[#1976D2] text-[#1976D2] hover:bg-[#1976D2] hover:text-white transition-colors"
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
        <div className="bg-white dark:bg-[#161B22] border border-[#E1E4E8] dark:border-[#30363D] rounded-2xl p-12 flex flex-col items-center justify-center text-center animate-in fade-in">
          <div className="w-20 h-20 bg-[#F8F9FA] dark:bg-[#0D1117] rounded-full flex items-center justify-center mb-4">
            <Book className="w-10 h-10 text-[#9CA3AF] dark:text-[#6E7681]" />
          </div>
          <h2 className="text-xl font-bold text-[#1A1A2E] dark:text-white mb-2">Tu n'as pas encore de cours</h2>
          <p className="text-[#6B7280] dark:text-[#8B949E] max-w-md mb-6">
            Découvre notre catalogue et commence ton apprentissage dès aujourd'hui pour être prêt à l'examen.
          </p>
          <Link 
            to="/dashboard/boutique"
            className="px-6 py-3 bg-[#D81B60] hover:bg-pink-700 text-white rounded-lg font-bold flex items-center gap-2 transition-colors"
          >
            Découvrir la boutique <ShoppingBag className="w-5 h-5" />
          </Link>
        </div>
      )}
    </div>
  );
};
