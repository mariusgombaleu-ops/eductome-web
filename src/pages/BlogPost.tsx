import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts, BlogContentElement } from '../data/blogPosts';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SEO } from '../components/SEO';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const renderContentElement = (element: BlogContentElement, index: number) => {
    switch (element.type) {
      case 'h2':
        return <h2 key={index} className="text-2xl font-bold text-eductome-marine mt-10 mb-4 font-playfair">{element.text}</h2>;
      case 'h3':
        return <h3 key={index} className="text-xl font-bold text-eductome-marine mt-8 mb-3 font-poppins">{element.text}</h3>;
      case 'p':
        return <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">{element.text}</p>;
      case 'ul':
        return (
          <ul key={index} className="space-y-3 mb-6">
            {element.items.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-eductome-magenta mr-3 mt-1">✦</span>
                <span className="text-gray-700 leading-relaxed text-lg">{item}</span>
              </li>
            ))}
          </ul>
        );
      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 border-eductome-magenta bg-eductome-magenta/5 p-6 rounded-r-lg my-8 italic text-lg text-gray-800">
            "{element.text}"
            {element.author && <footer className="mt-2 text-sm font-semibold text-eductome-marine not-italic">— {element.author}</footer>}
          </blockquote>
        );
      default:
        return null;
    }
  };

  return (
    <article className="min-h-screen bg-white">
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
            <Link to="/blog" className="inline-flex items-center text-gray-300 hover:text-white mb-6 text-sm font-semibold transition-colors">
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

          <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
            <p className="text-gray-500 font-medium">Partager cet article :</p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-blue-600 transition-colors">Facebook</button>
              <button className="text-gray-400 hover:text-blue-400 transition-colors">Twitter</button>
              <button className="text-gray-400 hover:text-green-600 transition-colors">WhatsApp</button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </article>
  );
}
