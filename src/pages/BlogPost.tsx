import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import { blogPosts, BlogContentElement } from '../data/blogPosts';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SEO } from '../components/SEO';
import { useTheme } from '../contexts/ThemeContext';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
  const basePath = isDashboard ? '/dashboard/blog' : '/blog';
  const { palette } = useTheme();

  if (!post) {
    return <Navigate to={basePath} replace />;
  }

  const renderContentElement = (element: BlogContentElement, index: number) => {
    switch (element.type) {
      case 'h2':
        return <h2 key={index} className="text-2xl font-bold mt-10 mb-4 font-playfair transition-colors" style={{ color: palette.ink }}>{element.text}</h2>;
      case 'h3':
        return <h3 key={index} className="text-xl font-bold mt-8 mb-3 font-poppins transition-colors" style={{ color: palette.ink2 }}>{element.text}</h3>;
      case 'p':
        return <p key={index} className="leading-relaxed mb-6 text-lg transition-colors" style={{ color: palette.ink2 }}>{element.text}</p>;
      case 'ul':
        return (
          <ul key={index} className="space-y-3 mb-6">
            {element.items.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-3 mt-1" style={{ color: palette.accent }}>✦</span>
                <span className="leading-relaxed text-lg transition-colors" style={{ color: palette.ink2 }}>{item}</span>
              </li>
            ))}
          </ul>
        );
      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 p-6 rounded-r-lg my-8 italic text-lg transition-colors" style={{ borderColor: palette.accent, background: `${palette.accent}10`, color: palette.ink }}>
            "{element.text}"
            {element.author && <footer className="mt-2 text-sm font-semibold not-italic transition-colors" style={{ color: palette.ink3 }}>— {element.author}</footer>}
          </blockquote>
        );
      default:
        return null;
    }
  };

  return (
    <article className={`min-h-screen transition-colors duration-300 ${isDashboard ? 'pb-20' : ''}`} style={{ background: isDashboard ? 'transparent' : palette.bg }}>
      <SEO title={post.title} description={post.excerpt} />
      {/* Hero Header */}
      <div className="relative h-[40vh] min-h-[300px] w-full">
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-end pb-12">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <Link to={basePath} className="inline-flex items-center text-gray-300 hover:text-white mb-6 text-sm font-semibold transition-colors">
              &larr; Retour au blog
            </Link>
            <div className="flex items-center space-x-3 mb-4">
              <span className="bg-eductome-magenta text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-gray-300 text-sm">{post.date}</span>
              <span className="text-gray-400 text-sm">•</span>
              <span className="text-gray-300 text-sm">Lecture : {post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-extrabold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <ScrollReveal>
          <div className="prose prose-lg max-w-none">
            {post.content.map((element, index) => renderContentElement(element, index))}
          </div>

          <div className="mt-16 pt-8 border-t flex justify-between items-center transition-colors" style={{ borderColor: palette.line }}>
            <p className="font-medium" style={{ color: palette.ink3 }}>Partager cet article :</p>
            <div className="flex space-x-4">
              <button className="hover:opacity-80 transition-colors" style={{ color: palette.ink2 }}>Facebook</button>
              <button className="hover:opacity-80 transition-colors" style={{ color: palette.ink2 }}>Twitter</button>
              <button className="hover:opacity-80 transition-colors" style={{ color: palette.ink2 }}>WhatsApp</button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </article>
  );
}
