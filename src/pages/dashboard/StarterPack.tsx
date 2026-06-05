import { PlayCircle, Target, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const StarterPack = () => {
  const navigate = useNavigate();
  const userSerie = localStorage.getItem('eductome_user_serie') || '';

  const starterCourses = [
    {
      id: "t1-limites",
      title: "Les Limites (Tome 1)",
      subject: "Mathématiques",
      level: "Terminale",
      series: ["Terminale D", "Terminale C"],
      progress: 0,
      totalQuizzes: 1,
      completedQuizzes: 0,
      status: "nouveau",
      colorClass: "bg-[#1A3557]", // Bleu Marine (Les Clés Maths)
      badge: "Chapitre 1 Gratuit"
    },
    {
      id: "pc-cinematique",
      title: "Cinématique du Point (Tome 1)",
      subject: "Physique-Chimie",
      level: "Terminale",
      series: ["Terminale D", "Terminale C"],
      progress: 0,
      totalQuizzes: 1,
      completedQuizzes: 0,
      status: "nouveau",
      colorClass: "bg-[#4A148C]", // Violet (Les Clés Sciences)
      badge: "Chapitre 1 Gratuit"
    },
    {
      id: "svt-nerveux",
      title: "Le Système Nerveux (Tome 1)",
      subject: "SVT",
      level: "Terminale",
      series: ["Terminale D", "Terminale C"],
      progress: 0,
      totalQuizzes: 1,
      completedQuizzes: 0,
      status: "nouveau",
      colorClass: "bg-[#2E7D32]", // Vert (SVT)
      badge: "Chapitre 1 Gratuit"
    },
    {
      id: "philo-methode",
      title: "Méthodologie Dissertation (Tome 1)",
      subject: "Philosophie",
      level: "Terminale",
      series: ["Terminale D", "Terminale C", "Terminale A"],
      progress: 0,
      totalQuizzes: 1,
      completedQuizzes: 0,
      status: "nouveau",
      colorClass: "bg-[#880E4F]", // Bordeaux (Les Clés Lettres)
      badge: "Chapitre 1 Gratuit"
    }
  ];

  const filteredCourses = starterCourses.filter(course => {
    if (!userSerie) return true;
    
    const normalizedUserSerie = userSerie.toLowerCase().replace(/[-\s]/g, '');
    
    if (course.series && course.series.length > 0) {
      const normalizedCourseSeries = course.series.map(s => s.toLowerCase().replace(/[-\s]/g, ''));
      return normalizedCourseSeries.includes(normalizedUserSerie);
    }
    
    return true;
  });

  return (
    <div className="space-y-6 px-4 md:px-6 lg:px-8 pt-6 pb-10 font-poppins">
      <button onClick={() => navigate('/dashboard')} className="flex items-center gap-2 text-sm font-bold text-[#6B7280] dark:text-[#8B949E] hover:text-[#1A1A2E] dark:hover:text-white transition-colors">
        <ArrowLeft className="w-4 h-4" /> Retour au Dashboard
      </button>

      {/* Banner */}
      <div className="relative bg-gradient-to-r from-eductome-marine to-eductome-sky rounded-2xl p-6 md:p-8 overflow-hidden shadow-lg flex flex-col md:flex-row items-center gap-8 animate-fade-in-up mb-6">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 -mb-12 w-32 h-32 rounded-full bg-white opacity-10 pointer-events-none"></div>
        
        <div className="relative z-10 text-white flex-1">
          <h1 className="text-3xl font-playfair font-bold mb-2 flex items-center gap-3">
            <Target className="w-8 h-8" />
            Ton Starter Pack
          </h1>
          <p className="text-blue-100 max-w-lg mt-2 text-sm">
            Voici tes aperçus gratuits. Entraîne-toi sur le premier chapitre de chaque tome pour tester la méthode EDUCTOME. 🚀
          </p>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredCourses.map((course, index) => (
          <div key={course.id} className="bg-white dark:bg-[#161B22] rounded-2xl shadow-sm border border-[#E1E4E8] dark:border-[#30363D] overflow-hidden flex flex-col group animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
            {/* Image / Color Header */}
            <div className={`h-[120px] ${course.colorClass} relative p-6 flex flex-col justify-center`}>
              <h3 className="text-xl font-bold text-white drop-shadow-md leading-tight line-clamp-2">{course.title}</h3>
              <p className="text-xs font-bold text-white/80 uppercase tracking-wider mt-2">{course.subject} • {course.level}</p>
            </div>
            
            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                <div className="flex gap-2">
                  <span className="text-xs font-bold px-2 py-1 rounded bg-[#D81B60] text-white flex items-center shadow-sm">
                    🎁 {course.badge}
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#6B7280] dark:text-[#8B949E] mb-6 flex-grow">
                Accès complet au Chapitre 1, avec le cours détaillé, les astuces du Grand Frère et les quiz interactifs.
              </p>
              
              <div className="mt-auto pt-2">
                <button 
                  onClick={() => navigate(`/dashboard/course/${course.id}`)}
                  className="w-full py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 bg-[#F8F9FA] dark:bg-[#30363D] text-[#1A1A2E] dark:text-white hover:bg-[#E1E4E8] dark:hover:bg-[#4B5563] border border-[#E1E4E8] dark:border-[#4B5563] transition-colors"
                >
                  <PlayCircle className="w-5 h-5" />
                  Démarrer le chapitre
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="mt-12 bg-[#F8F9FA] dark:bg-[#161B22] rounded-2xl border-2 border-dashed border-[#D81B60] dark:border-pink-800 p-8 text-center animate-in fade-in slide-in-from-bottom-4">
        <div className="w-16 h-16 bg-[#D81B60]/10 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <Target className="w-8 h-8 text-[#D81B60] dark:text-pink-400" />
        </div>
        <h2 className="text-2xl font-bold text-[#1A1A2E] dark:text-white mb-3">
          Convaincu par la méthode ?
        </h2>
        <p className="text-[#6B7280] dark:text-[#8B949E] max-w-2xl mx-auto mb-8 text-sm md:text-base">
          Achète ton cours complet et ne reste pas en marge. Rejoins les élèves d'élite qui préparent déjà leur BAC avec les meilleures méthodes.
        </p>
        <button 
          onClick={() => navigate('/dashboard/boutique')}
          className="px-8 py-3.5 bg-[#D81B60] hover:bg-pink-700 text-white rounded-lg font-bold transition-colors shadow-lg shadow-pink-900/20"
        >
          Rejoindre les élèves d'élite
        </button>
      </div>
    </div>
  );
};
