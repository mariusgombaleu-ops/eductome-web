import { useParams, Navigate, Link, useLocation } from 'react-router-dom';
import { collectionsData } from '../data/collections';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SEO } from '../components/SEO';
import { useState } from 'react';
import { ChevronRight, ArrowLeft, Target, Lightbulb, UserCheck, CheckCircle2 } from 'lucide-react';
import { BlockRenderer } from '../components/blocks/BlockRenderer';
import { PreviewItem } from '../types';
import { useTheme } from '../contexts/ThemeContext';

export function CollectionDetails() {
  const { slug } = useParams<{ slug: string }>();
  const collection = collectionsData.find(c => c.slug === slug);
  const [selectedPreview, setSelectedPreview] = useState<PreviewItem | null>(null);
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
  const { palette } = useTheme();

  if (!collection) {
    return <Navigate to={isDashboard ? "/dashboard/boutique" : "/"} replace />;
  }

  // Previews génériques si aucune n'est définie
  const previews = collection.previews || [
    { image: 'placeholder', caption: 'Sommaire détaillé' },
    { image: 'placeholder', caption: 'Extrait de cours' },
    { image: 'placeholder', caption: 'Exercices corrigés' }
  ];

  const handleScrollToTomes = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const tomesSection = document.getElementById('tomes-section');
    if (tomesSection) {
      tomesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRacineFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = encodeURIComponent(`Bonjour ! Je souhaite m'inscrire sur la liste d'attente pour la collection ${collection.name}.`);
    window.open(`https://wa.me/2250799506300?text=${whatsappMsg}`, '_blank');
  };

  return (
    <div className="min-h-screen font-poppins pb-0 transition-colors duration-300" style={{ background: isDashboard ? palette.bg2 : '#ffffff' }} data-collection={collection.slug}>
      <SEO 
        title={`${collection.name} | EDUCTOME`} 
        description={collection.shortDescription} 
      />

      {/* 1. HERO COLLECTION */}
      <section className={`collection-detail-hero ${isDashboard ? 'mt-4 md:mt-8' : 'mt-16 md:mt-20'}`}>
        <ScrollReveal>
          <Link to={isDashboard ? "/dashboard/boutique" : "/#collections"} className="inline-flex items-center gap-2 text-sm font-semibold mb-8 hover:opacity-80 transition-opacity" style={{ color: collection.primaryColor }}>
            <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
          </Link>
          
          <div className="hero-content-grid">
            <div className="hero-text-content">
              <div className="flex flex-wrap gap-2 mb-4">
                {collection.badges.map(badge => (
                  <span 
                    key={badge.label} 
                    className={`px-3 py-1 text-xs font-bold rounded-sm ${badge.color === 'magenta' ? 'bg-[#D81B60] text-white' : 'bg-white text-gray-700 shadow-sm'}`}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
              
              <h1 className="hero-collection-title">
                {collection.emoji} {collection.name}
              </h1>
              
              <p className="text-xl text-gray-700 mb-6 font-medium">
                {collection.shortDescription}
              </p>
              
              <div className="hero-micro-info">
                <span>📚 {collection.tomeCount > 0 ? `${collection.tomeCount} tomes` : 'À venir'}</span>
                <span>🎓 {collection.targetClass}</span>
                <span>📦 {collection.format}</span>
              </div>
              
              {collection.status !== 'coming-soon' ? (
                <a href="#tomes-section" onClick={handleScrollToTomes} className="hero-scroll-cta mt-4">
                  Voir les tomes disponibles <ChevronRight size={18} />
                </a>
              ) : (
                <a href="#waitlist-section" className="hero-scroll-cta mt-4">
                  S'inscrire sur la liste d'attente <ChevronRight size={18} />
                </a>
              )}
            </div>
            
            <div className="hero-image-wrapper flex justify-center">
              {collection.coverImage ? (
                <img 
                  src={collection.coverImage} 
                  alt={collection.name} 
                  className="hero-cover"
                  loading="lazy"
                  draggable="false"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
              ) : null}
              <div className={`${collection.coverImage ? 'hidden' : ''} hero-cover flex flex-col items-center justify-center text-center p-8 text-white`} style={{ backgroundColor: collection.primaryColor }}>
                 <span className="text-6xl mb-4">{collection.emoji}</span>
                 <h3 className="font-playfair font-bold text-3xl">{collection.name}</h3>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. INFO BLOCKS - MARKETING REDESIGN */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50 px-4">
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          
          {/* Objectif */}
          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 p-6 md:p-10 border border-gray-100 border-l-4 border-l-[#D81B60] relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#D81B60] opacity-[0.03] rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="p-3 bg-pink-50 rounded-xl text-[#D81B60]">
                  <Target className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="font-playfair font-bold text-xl md:text-3xl text-[#1A3557]">L'OBJECTIF</h3>
              </div>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
                {collection.objective}
              </p>
            </div>
          </ScrollReveal>
          
          {/* Ce que ça t'apporte */}
          <ScrollReveal delay={0.2}>
            <div className="rounded-[28px] shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-10 border border-l-4 relative overflow-hidden group" style={{ background: isDashboard ? palette.bg : '#ffffff', borderColor: isDashboard ? palette.line : '#f3f4f6', borderLeftColor: '#1976D2' }}>
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#1976D2] opacity-[0.03] rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="p-3 bg-blue-50 rounded-xl text-[#1976D2]">
                  <Lightbulb className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="font-playfair font-bold text-xl md:text-3xl text-[#1A3557]">CE QUE ÇA T'APPORTE</h3>
              </div>
              <ul className="space-y-4">
                {collection.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 md:p-5 bg-gradient-to-r from-blue-50/50 to-transparent rounded-xl border border-blue-50/50">
                    <CheckCircle2 className="w-6 h-6 text-[#1976D2] shrink-0 mt-0.5" />
                    <span className="text-gray-700 md:text-lg leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          
          {/* Pour toi si... */}
          <ScrollReveal delay={0.3}>
            <div className="rounded-[28px] shadow-sm p-6 md:p-10 relative overflow-hidden transition-colors" style={{ background: palette.accent }}>
              <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-white opacity-[0.03] rounded-full"></div>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="p-3 bg-white/10 rounded-xl text-white">
                  <UserCheck className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="font-playfair font-bold text-xl md:text-3xl text-white">C'EST POUR TOI SI...</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {collection.idealFor.map((ideal, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="mt-1 w-2 h-2 rounded-full bg-[#D81B60] shrink-0"></div>
                    <span className="text-gray-100 font-medium">{ideal}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. APERÇUS (PREVIEWS) */}
      <section className="collection-previews">
        <ScrollReveal>
          <div className="section-header">
            <span className="overline">À L'INTÉRIEUR</span>
            <h2>Feuillette un extrait</h2>
          </div>
          
          <div className="previews-carousel">
            {previews.map((preview, idx) => (
              <div 
                key={idx} 
                className="preview-item cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => setSelectedPreview(preview)}
              >
                {preview.image && preview.image !== 'placeholder' ? (
                  <img src={preview.image} alt={preview.caption} draggable="false" loading="lazy" />
                ) : preview.blocks && preview.blocks.length > 0 ? (
                  <div className="preview-placeholder bg-white border border-gray-200 rounded-lg p-4 text-left shadow-sm h-48 overflow-hidden relative group-hover:border-[#1976D2] transition-colors">
                     <div className="text-[10px] sm:text-xs text-gray-500 leading-relaxed pointer-events-none">
                        {preview.blocks.map((block, i) => (
                           <div key={i} className="mb-2">
                             {block.type === 'text' && <p className="line-clamp-3">{(block as any).contenu}</p>}
                             {block.type === 'dialogue' && <div className="bg-gray-50 p-2 rounded"><p className="line-clamp-2"><strong>PF:</strong> {(block as any).pf}</p></div>}
                             {block.type === 'analogy' && <div className="bg-orange-50 text-orange-800 p-2 rounded"><p className="font-bold mb-1">{(block as any).titre}</p><p className="line-clamp-2">{(block as any).contenu}</p></div>}
                             {block.type === 'tip' && <div className="bg-green-50 text-green-800 p-2 rounded"><p className="font-bold mb-1">{(block as any).titre}</p><p className="line-clamp-2">{Array.isArray((block as any).contenu) ? (block as any).contenu[0] : (block as any).contenu}</p></div>}
                           </div>
                        ))}
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FA] via-[#F8F9FA]/60 to-transparent dark:from-[#0D1117] dark:via-[#0D1117]/60"></div>
                     <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                        <span className="bg-[#1A3557] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">Ouvrir l'extrait</span>
                     </div>
                  </div>
                ) : (
                  <div className="preview-placeholder">
                    <div className="placeholder-image text-4xl mb-2 flex items-center justify-center bg-gray-100 rounded-lg p-8 h-48">
                      🖼️
                    </div>
                  </div>
                )}
                <span className="preview-caption font-bold mt-2 block text-center text-[#1A3557]">{preview.caption}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* LIGHTBOX POUR PREVIEWS */}
      {selectedPreview && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedPreview(null)}
        >
          {selectedPreview.blocks ? (
            <div 
              className="bg-white dark:bg-[#161B22] p-6 rounded-lg w-full max-w-2xl max-h-[80vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-playfair text-2xl font-bold mb-6 text-[#1A1A2E] dark:text-white border-b pb-2">{selectedPreview.caption}</h3>
              {selectedPreview.blocks.map((block, idx) => (
                 <div key={block.id || idx} className="mb-6">
                   <BlockRenderer block={block} isDark={isDashboard ? true : false} />
                 </div>
               ))}
            </div>
          ) : selectedPreview.image ? (
            <img 
              src={selectedPreview.image} 
              alt="Aperçu agrandi" 
              className="max-w-full max-h-full object-contain rounded-md"
              onClick={(e) => e.stopPropagation()}
            />
          ) : null}
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-xl font-bold"
            onClick={() => setSelectedPreview(null)}
          >
            ✕
          </button>
        </div>
      )}

      {/* 4. TOMES OU LISTE D'ATTENTE */}
      {collection.status !== 'coming-soon' ? (
        <section id="tomes-section" className="py-20 px-4 transition-colors duration-300" style={{ background: isDashboard ? palette.bg2 : '#f9fafb' }}>
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="section-header">
                <span className="overline">LES TOMES</span>
                <h2>Choisis ton manuel</h2>
                <p>Tu peux commencer par celui de ton choix.</p>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {collection.tomes.map((tome, idx) => (
                <ScrollReveal key={tome.id} delay={idx * 0.1}>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                    <div className="flex flex-row sm:flex-col flex-grow">
                      <div className="w-1/3 sm:w-full h-32 sm:h-52 bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-center relative p-3 sm:p-4 shrink-0 border-r sm:border-r-0 sm:border-b border-gray-100">
                        {tome.coverImage || tome.image ? (
                          <img 
                            src={tome.coverImage || tome.image} 
                            alt={tome.title} 
                            className="w-full h-full object-contain drop-shadow-md"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const fallback = e.currentTarget.nextElementSibling;
                              if (fallback) fallback.classList.remove('hidden');
                            }}
                          />
                        ) : null}
                        <div className={`${(tome.coverImage || tome.image) ? 'hidden' : ''} text-center flex flex-col items-center`}>
                          <span className="text-3xl sm:text-4xl mb-1 sm:mb-2">{collection.emoji}</span>
                          <span className="font-playfair font-bold text-lg sm:text-xl text-gray-800 text-center leading-tight">Tome {tome.number || idx + 1}</span>
                        </div>
                      </div>
                      <div className="w-2/3 sm:w-full p-4 sm:p-5 flex flex-col flex-grow">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-bold text-base sm:text-lg text-[#1A3557]">{tome.title}</h4>
                          <span className="hidden sm:inline-block px-2 py-0.5 bg-blue-50 text-[#1976D2] text-[10px] font-bold rounded-full">Tome {tome.number || idx + 1}</span>
                        </div>
                        {tome.chapters && (
                          <div className="flex flex-wrap gap-1.5 mb-4 flex-grow">
                            {tome.chapters.map((chap, i) => (
                              <span key={i} className="px-2 py-1 bg-gray-50 text-gray-600 text-[10px] sm:text-xs rounded-md border border-gray-100">
                                {chap}
                              </span>
                            ))}
                          </div>
                        )}
                        {/* Sur mobile, on affiche les boutons directement sous le texte pour garder l'alignement */}
                        <div className="mt-auto hidden sm:flex flex-col gap-2">
                          <Link 
                            to="/register" 
                            className="w-full py-2 rounded-md font-bold text-center text-white bg-[#D81B60] hover:bg-[#C2185B] transition-colors shadow-sm flex items-center justify-center gap-2 text-sm"
                          >
                            📱 Version Interactive
                          </Link>
                          <a 
                            href={tome.selarUrl || '#'} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-full py-2 rounded-md font-semibold text-center text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm"
                            style={{ backgroundColor: collection.primaryColor }}
                          >
                            📖 Format PDF
                          </a>
                          <a 
                            href={`https://wa.me/2250799506300?text=Bonjour%20Grand%20Fr%C3%A8re%2C%20je%20veux%20commander%20le%20livre%20physique%20%3A%20${encodeURIComponent(tome.title)}`}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-full py-2 rounded-md font-medium text-center text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm"
                          >
                            📦 Livre Physique
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Boutons sur mobile affichés en bas de la carte sur toute la largeur */}
                    <div className="p-3 pt-0 sm:hidden flex flex-col gap-2 mt-2 border-t border-gray-50 pt-3">
                        <Link 
                          to="/register" 
                          className="w-full py-2 rounded-md font-bold text-center text-white bg-[#D81B60] hover:bg-[#C2185B] transition-colors shadow-sm flex items-center justify-center gap-2 text-sm"
                        >
                          📱 App Interactive
                        </Link>
                        <a 
                          href={tome.selarUrl || '#'} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-full py-2 rounded-md font-semibold text-center text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm"
                          style={{ backgroundColor: collection.primaryColor }}
                        >
                          📖 Format PDF
                        </a>
                        <a 
                          href={`https://wa.me/2250799506300?text=Bonjour%20Grand%20Fr%C3%A8re%2C%20je%20veux%20commander%20le%20livre%20physique%20%3A%20${encodeURIComponent(tome.title)}`}
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-full py-2 rounded-md font-medium text-center text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm"
                        >
                          📦 Livre Physique
                        </a>
                      </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            {collection.bundleUrl && (
              <div className="mt-16 text-center">
                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border-2" style={{ borderColor: collection.primaryColor }}>
                    <h3 className="font-playfair text-2xl font-bold mb-4" style={{ color: collection.primaryColor }}>
                      Pack Complet {collection.name}
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                      Obtiens l'intégralité de la collection à un prix préférentiel. L'arme ultime pour toute ton année scolaire.
                    </p>
                    <a 
                      href={collection.bundleUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-bold text-lg transition-transform hover:-translate-y-1 hover:shadow-lg"
                      style={{ backgroundColor: collection.primaryColor }}
                    >
                      Acheter le Pack Complet <ChevronRight size={20} />
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            )}
          </div>
        </section>
      ) : (
        <section id="waitlist-section" className="py-20 px-4 transition-colors duration-300" style={{ background: isDashboard ? palette.bg2 : '#f9fafb' }}>
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-t-4" style={{ borderColor: collection.primaryColor }}>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 font-bold text-sm rounded-full mb-4">
                  🔔 BIENTÔT DISPONIBLE
                </span>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A3557] mb-4">
                  Rejoins la liste d'attente
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
                  La collection {collection.name} est en cours de préparation. Inscris-toi pour être prévenu(e) en avant-première lors de sa sortie officielle.
                </p>
                <form onSubmit={handleRacineFormSubmit} className="max-w-md mx-auto flex flex-col gap-4">
                  <input 
                    type="email" 
                    placeholder="Ton adresse email" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ '--tw-ring-color': collection.primaryColor } as React.CSSProperties}
                  />
                  <button 
                    type="submit" 
                    className="w-full py-3 rounded-lg text-white font-bold text-lg transition-transform hover:-translate-y-1 hover:shadow-lg"
                    style={{ backgroundColor: collection.primaryColor }}
                  >
                    M'inscrire à la liste
                  </button>
                  <p className="text-xs text-gray-400 mt-2">
                    En cliquant, tu seras redirigé(e) vers WhatsApp pour valider ton inscription.
                  </p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* 5. TÉMOIGNAGES */}
      <section className="collection-testimonials">
        <ScrollReveal>
          <div className="section-header">
            <span className="overline">AVIS DES ÉLÈVES</span>
            <h2>Ceux qui l'ont lu en parlent</h2>
          </div>
          
          <div className="testimonials-grid">
            {collection.testimonials && collection.testimonials.length > 0 ? (
              collection.testimonials.map((testi, idx) => (
                <div key={idx} className="testimonial-card">
                  <div className="stars">
                    {'★'.repeat(testi.rating)}{'☆'.repeat(5 - testi.rating)}
                  </div>
                  <blockquote>"{testi.text}"</blockquote>
                  <cite>
                    <strong>{testi.author.name}</strong>
                    <span>{testi.author.classe}, {testi.author.lycee}</span>
                  </cite>
                </div>
              ))
            ) : (
              <div className="testimonial-card testimonial-placeholder">
                <div className="stars">★★★★★</div>
                <blockquote>"{collection.placeholderTestimonial || "Cette collection a vraiment changé ma façon d'étudier. Je la recommande !"}"</blockquote>
                <cite>
                  <strong>Un élève Eductome</strong>
                  <span>En attente de vos témoignages...</span>
                </cite>
              </div>
            )}
          </div>
          
          <div className="testimonials-cta">
            <a href="https://wa.me/2250799506300" target="_blank" rel="noopener noreferrer" className="share-experience-link">
              💬 Tu as la collection ? Partage ton expérience avec nous !
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* 6. CROSS-SELL */}
      {collection.crossSell && collection.crossSell.length > 0 && (
        <section className="collection-crosssell bg-white">
          <ScrollReveal>
            <div className="section-header">
              <span className="overline">LE COMBO GAGNANT</span>
              <h2>Parfait en complément de...</h2>
            </div>
            
            <div className="crosssell-cards">
              {collection.crossSell.map((cs, idx) => {
                const targetCollection = collectionsData.find(c => c.id === cs.collectionId);
                if (!targetCollection) return null;
                
                return (
                  <Link to={isDashboard ? `/dashboard/boutique/${targetCollection.slug}` : `/collections/${targetCollection.slug}`} key={idx} className="crosssell-card">
                    {targetCollection.coverImage ? (
                      <img src={targetCollection.coverImage} alt={targetCollection.name} />
                    ) : (
                      <div className="w-[80px] aspect-[3/4] flex items-center justify-center text-3xl rounded-md" style={{ backgroundColor: targetCollection.primaryColor }}>
                        {targetCollection.emoji}
                      </div>
                    )}
                    <div className="crosssell-text">
                      <h3>{targetCollection.name}</h3>
                      <p>{cs.reason}</p>
                      <span className="crosssell-link">Voir la collection →</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* 7. FAQ SPÉCIFIQUE */}
      {collection.faq && collection.faq.length > 0 && (
        <section className="collection-faq bg-gray-50 py-16">
          <ScrollReveal>
            <div className="section-header">
              <span className="overline">FAQ</span>
              <h2>Des questions ?</h2>
            </div>
            
            <div className="faq-list">
              {collection.faq.map((item, idx) => (
                <details key={idx} className="faq-item group">
                  <summary>{item.question}</summary>
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* 8. AUTRES COLLECTIONS */}
      <section className="py-16 px-4 border-t transition-colors duration-300" style={{ background: isDashboard ? palette.bg2 : '#fafafa', borderColor: isDashboard ? palette.line : '#f3f4f6' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-eductome-marine mb-4">
                Découvre nos autres collections
              </h2>
            </div>
          </ScrollReveal>
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 max-w-5xl mx-auto px-4">
            {collectionsData
              .filter(c => c.slug !== collection.slug)
              .map((c, index) => (
                <ScrollReveal key={c.id} delay={index * 0.05} className="flex-1 min-w-[300px] max-w-[400px]">
                  <Link to={isDashboard ? `/dashboard/boutique/${c.slug}` : `/collections/${c.slug}`} className="crosssell-card h-full">
                    {c.coverImage ? (
                      <img src={c.coverImage} alt={c.name} />
                    ) : (
                      <div className="w-[80px] aspect-[3/4] shrink-0 flex items-center justify-center text-3xl rounded-md" style={{ backgroundColor: c.primaryColor }}>
                        {c.emoji}
                      </div>
                    )}
                    <div className="crosssell-text">
                      <h3>{c.name}</h3>
                      <p className="line-clamp-2 text-sm">{c.shortDescription}</p>
                      <span className="crosssell-link mt-auto">Voir la collection →</span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
          </div>
        </div>
      </section>

      {/* 9. CTA FINAL */}
      <section className="collections-final-cta" style={{ background: `linear-gradient(135deg, ${collection.primaryColor} 0%, #111 100%)` }}>
        <ScrollReveal>
          <div className="cta-content">
            <h2>Prêt(e) à passer au niveau supérieur ?</h2>
            <p>
              N'attends pas les veilles d'examen pour combler tes lacunes. 
              Choisis ton tome et commence dès aujourd'hui.
            </p>
            
            <div className="cta-buttons">
              {collection.status !== 'coming-soon' ? (
                <a href="#tomes-section" onClick={handleScrollToTomes} className="btn bg-white" style={{ color: collection.primaryColor }}>
                  🛒 Acheter maintenant
                </a>
              ) : (
                <a href="#waitlist-section" className="btn bg-white" style={{ color: collection.primaryColor }}>
                  🔔 S'inscrire à la liste
                </a>
              )}
              <a href="https://wa.me/2250799506300" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                💬 Poser une question sur WhatsApp
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
