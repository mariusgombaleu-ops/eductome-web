import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Link, useLocation } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { SEO } from '../components/SEO';

export function Blog() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
  const basePath = isDashboard ? '/dashboard/blog' : '/blog';

  return (
    <div className="min-h-screen bg-gray-50 font-poppins pb-20">
      <SEO title="Le Blog" description="Conseils, méthodologie et astuces pour réussir ton BAC et BEPC en Côte d'Ivoire." />
      {/* Hero Banner */}
      <div className="py-20 px-4 text-center relative overflow-hidden" style={{ backgroundImage: 'linear-gradient(165deg, #0a1628, #1A3557)' }}>
        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">
          Le Blog <span className="text-[#D81B60]">Eductome</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl font-light relative z-10">
          Conseils de révision, décryptage des examens et méthodes pour réussir ton année scolaire en Côte d'Ivoire.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 100} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
              <Link to={`${basePath}/${post.slug}`} className="block relative h-48 overflow-hidden group">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-eductome-marine">
                  {post.category}
                </div>
              </Link>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                  <span>📅 {post.date}</span>
                  <span>⏱️ {post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-eductome-marine mb-3 line-clamp-2 hover:text-eductome-magenta transition-colors">
                  <Link to={`${basePath}/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`${basePath}/${post.slug}`}
                  className="inline-flex items-center font-semibold text-eductome-magenta hover:text-eductome-marine transition-colors mt-auto"
                >
                  Lire l'article <span className="ml-2">&rarr;</span>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  );
}
