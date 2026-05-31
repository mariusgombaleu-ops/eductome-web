import { useParams, Navigate, Link } from 'react-router-dom';
import { collectionsData } from '../data/collections';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SEO } from '../components/SEO';
import { useState } from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';

export function CollectionDetails() {
  const { slug } = useParams<{ slug: string }>();
  const collection = collectionsData.find(c => c.slug === slug);
  const [selectedPreview, setSelectedPreview] = useState<string | null>(null);

  if (!collection) {
    return <Navigate to="/collections" replace />;
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
    const whatsappMsg = encodeURIComponent("Bonjour ! Je souhaite m'inscrire sur la liste d'attente pour la collection La Racine.");
    window.open(`https://wa.me/2250799506300?text=${whatsappMsg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-poppins pb-0" data-collection={collection.slug}>
      <SEO 
        title={`${collection.name} | EDUCTOME`} 
        description={collection.shortDescription} 
      />

      {/* 1. HERO COLLECTION */}
      <section className="collection-detail-hero mt-16 md:mt-20">
        <ScrollReveal>
          <Link to="/collections" className="inline-flex items-center gap-2 text-sm font-semibold mb-8 hover:opacity-80 transition-opacity" style={{ color: collection.primaryColor }}>
            <ArrowLeft size={16} /> Retour aux collections
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

      {/* 2. INFO BLOCKS */}
      <section className="collection-info-blocks">
        <ScrollReveal delay={0.1}>
          <div className="info-block">
            <h3>🎯 L'OBJECTIF</h3>
            <p>{collection.objective}</p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <div className="info-block">
            <h3>💡 CE QUE ÇA T'APPORTE</h3>
            <ul>
              {collection.benefits.map((benefit, i) => (
                <li key={i}>
                  <span className="checkmark">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <div className="info-block">
            <h3>👤 POUR TOI SI...</h3>
            <ul>
              {collection.idealFor.map((ideal, i) => (
                <li key={i}>
                  <span className="bullet">•</span>
                  <span>{ideal}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
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
                className="preview-item" 
                onClick={() => setSelectedPreview(preview.image !== 'placeholder' ? preview.image : null)}
              >
                {preview.image !== 'placeholder' ? (
                  <img src={preview.image} alt={preview.caption} draggable="false" loading="lazy" />
                ) : (
                  <div className="preview-placeholder">
                    <div className="placeholder-image">
                      📖
                      <span>Image d'intérieur</span>
                    </div>
                  </div>
                )}
                <span className="preview-caption">{preview.caption}</span>
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
          <img 
            src={selectedPreview} 
            alt="Aperçu agrandi" 
            className="max-w-full max-h-full object-contain rounded-md"
            onClick={(e) => e.stopPropagation()}
          />
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
        <section id="tomes-section" className="py-20 bg-gray-50 px-4">
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
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full border border-gray-100">
                    <div className="aspect-[3/4] bg-gray-50 flex flex-col items-center justify-center relative p-4">
                      {tome.coverImage || tome.image ? (
                        <img 
                          src={tome.coverImage || tome.image} 
                          alt={tome.title} 
                          className="w-full h-full object-contain"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.nextElementSibling;
                            if (fallback) fallback.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      <div className={`${(tome.coverImage || tome.image) ? 'hidden' : ''} text-center flex flex-col items-center`}>
                        <span className="text-4xl mb-2">{collection.emoji}</span>
                        <span className="font-playfair font-bold text-xl text-gray-800">Tome {tome.number || idx + 1}</span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h4 className="font-bold text-lg text-[#1A3557] mb-2">{tome.title}</h4>
                      {tome.chapters && (
                        <p className="text-sm text-gray-500 mb-4 flex-grow">
                          Inclus : {tome.chapters.join(', ')}
                        </p>
                      )}
                      <a 
                        href={tome.selarUrl || '#'} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mt-auto block w-full py-2.5 rounded-md font-semibold text-center text-white transition-transform hover:-translate-y-1"
                        style={{ backgroundColor: collection.primaryColor }}
                      >
                        Commander sur Selar
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
        <section id="waitlist-section" className="py-20 bg-gray-50 px-4">
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
                  <Link to={`/collections/${targetCollection.slug}`} key={idx} className="crosssell-card">
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

      {/* 8. CTA FINAL */}
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
