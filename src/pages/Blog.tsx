import { useState } from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { SEO } from '../components/SEO';
import { ChevronLeft, Newspaper, GraduationCap, Calendar, Users, Lightbulb, Compass } from 'lucide-react';

export function Blog() {
  const location = useLocation();
  const navigate = useNavigate();
  const isDashboard = location.pathname.startsWith('/dashboard');
  const basePath = isDashboard ? '/dashboard/blog' : '/blog';

  const [activeCategory, setActiveCategory] = useState('Tous');

  const categories = [
    { 
      id: 'Tous', icon: Newspaper, label: 'Tous les articles', 
      unselectedClass: 'border-gray-200 dark:border-[#30363D] text-gray-500 dark:text-[#8B949E] hover:border-eductome-marine hover:text-eductome-marine dark:hover:text-white',
      activeClass: 'bg-eductome-marine text-white border-eductome-marine shadow-md transform scale-[1.02]' 
    },
    { 
      id: 'Spécial BAC / BEPC', icon: GraduationCap, label: 'Spécial BAC / BEPC', 
      unselectedClass: 'border-[#D81B60] text-[#D81B60] hover:bg-[#D81B60]/10',
      activeClass: 'bg-[#D81B60] text-white border-[#D81B60] shadow-md transform scale-[1.02]' 
    },
    { 
      id: 'Actualités Scolaires', icon: Calendar, label: 'Actualités Scolaires', 
      unselectedClass: 'border-[#1976D2] text-[#1976D2] hover:bg-[#1976D2]/10',
      activeClass: 'bg-[#1976D2] text-white border-[#1976D2] shadow-md transform scale-[1.02]' 
    },
    { 
      id: 'Grands Frères', icon: Users, label: 'Grands Frères', 
      unselectedClass: 'border-green-600 dark:border-green-500 text-green-600 dark:text-green-500 hover:bg-green-600/10',
      activeClass: 'bg-green-600 dark:bg-green-500 text-white border-green-600 dark:border-green-500 shadow-md transform scale-[1.02]' 
    },
    { 
      id: 'Astuces & Conseils', icon: Lightbulb, label: 'Astuces & Conseils', 
      unselectedClass: 'border-[#E65100] text-[#E65100] hover:bg-[#E65100]/10',
      activeClass: 'bg-[#E65100] text-white border-[#E65100] shadow-md transform scale-[1.02]' 
    },
    { 
      id: 'Orientation', icon: Compass, label: 'Orientation', 
      unselectedClass: 'border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600/10',
      activeClass: 'bg-purple-600 dark:bg-purple-500 text-white border-purple-600 dark:border-purple-500 shadow-md transform scale-[1.02]' 
    }
  ];

  const filteredPosts = activeCategory === 'Tous' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className={`min-h-screen font-poppins pb-20 ${isDashboard ? 'bg-[#F8F9FA] dark:bg-[#0D1117] transition-colors duration-300' : 'bg-gray-50'}`}>
      <SEO title="Le Blog" description="Conseils, méthodologie et astuces pour réussir ton BAC et BEPC en Côte d'Ivoire." />
      
      {/* Hero Banner */}
      {isDashboard && (
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pt-6 pb-2">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors text-[#6B7280] dark:text-[#8B949E] hover:text-[#1A1A2E] dark:hover:text-white">
            <ChevronLeft className="w-4 h-4" /> Retour
          </button>
        </div>
      )}

      <div className={`relative ${isDashboard ? 'bg-gradient-to-r from-eductome-marine to-eductome-sky rounded-2xl mx-4 md:mx-6 lg:mx-8 p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 animate-fade-in-up mt-2 mb-6' : 'py-20 px-4 md:px-6 lg:px-8 text-center bg-eductome-marine'} overflow-hidden shadow-lg`}>
        {isDashboard ? (
          <>
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 -mb-12 w-32 h-32 rounded-full bg-white opacity-10 pointer-events-none"></div>
            <div className="relative z-10 text-white flex-1">
              <h1 className="text-3xl font-playfair font-bold mb-2 flex items-center gap-3">
                <Newspaper className="w-8 h-8" />
                Le Blog Eductome
              </h1>
              <p className="text-blue-100 max-w-lg mt-2 text-sm">
                Conseils de révision, décryptage des examens et méthodes pour réussir ton année scolaire.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="absolute top-0 right-0 w-80 h-80 bg-eductome-magenta/20 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-eductome-sky/20 blur-[80px] rounded-full pointer-events-none"></div>
            <ScrollReveal>
              <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">
                Le Blog <span className="text-[#D81B60]">Eductome</span>
              </h1>
              <p className="text-gray-200 max-w-2xl mx-auto text-lg md:text-xl font-light relative z-10">
                Conseils de révision, décryptage des examens et méthodes pour réussir ton année scolaire en Côte d'Ivoire.
              </p>
            </ScrollReveal>
          </>
        )}
      </div>

      {/* Tabs / Categories */}
      <div className={`max-w-6xl mx-auto px-4 md:px-6 lg:px-8 ${isDashboard ? '' : '-mt-8'} relative z-20 mb-12`}>
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-4 p-2 rounded-2xl shadow-lg border ${isDashboard ? 'bg-white dark:bg-[#161B22] border-gray-100 dark:border-[#30363D]' : 'bg-white border-gray-100'}`}>
          {categories.map(cat => (
            <button 
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-1 min-w-[120px] md:min-w-[140px] flex justify-center items-center px-4 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 border ${
                activeCategory === cat.id 
                  ? cat.activeClass
                  : cat.unselectedClass
              }`}
            >
              <cat.icon className={`w-4 h-4 md:w-5 md:h-5 mr-2 ${activeCategory === cat.id && cat.id !== 'Tous' ? 'animate-bounce' : ''}`} /> 
              <span className="text-sm md:text-base">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 100} className={`rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full ${isDashboard ? 'bg-white dark:bg-[#161B22] border-gray-100 dark:border-[#30363D]' : 'bg-white border-gray-100'}`}>
              <Link to={`${basePath}/${post.slug}`} className="block relative h-48 overflow-hidden group">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-[#161B22]/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-eductome-marine dark:text-white">
                  {post.category}
                </div>
              </Link>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-500 dark:text-[#8B949E] mb-3 space-x-4">
                  <span>📅 {post.date}</span>
                  <span>⏱️ {post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-eductome-marine dark:text-white mb-3 line-clamp-2 hover:text-eductome-magenta transition-colors">
                  <Link to={`${basePath}/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 dark:text-[#8B949E] text-sm mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`${basePath}/${post.slug}`}
                  className="inline-flex items-center font-semibold text-eductome-magenta hover:text-pink-600 transition-colors mt-auto"
                >
                  Lire l'article <span className="ml-2">&rarr;</span>
                </Link>
              </div>
            </ScrollReveal>
          ))}
          {filteredPosts.length === 0 && (
             <div className="col-span-full py-20 text-center text-gray-500 dark:text-[#8B949E]">
               Aucun article trouvé dans cette catégorie pour le moment.
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
