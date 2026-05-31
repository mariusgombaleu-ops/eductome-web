import { collectionsData } from '../data/collections';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';

export function Collections() {
  return (
    <div className="min-h-screen bg-white font-poppins pb-0">
      <SEO title="Boutique & Collections" description="Découvre nos manuels scolaires et fiches de révision pour la 3ème et la Terminale." />
      
      {/* 1. HERO */}
      <section className="collections-hero mt-16 md:mt-20">
        <span className="hero-overline">TOUTE LA COLLECTION EDUCTOME</span>
        
        <h1 className="hero-title">
          Choisis ton manuel. <br/>
          <span className="hero-title-accent">Décroche ton examen.</span>
        </h1>
        
        <p className="hero-subtitle">
          6 collections pour les élèves de Terminale et de 3ᵉ.
          Chaque manuel a une mission précise — trouve celui qui répond à ton blocage.
        </p>
        
        <Link to="/quiz" className="hero-quiz-link">
          🎯 Pas sûr de quelle collection te convient ? Fais le quiz →
        </Link>
      </section>

      {/* 2. GRILLE DES 6 CARDS COLLECTIONS */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collectionsData.map((collection, index) => (
            <ScrollReveal key={collection.id} delay={index * 0.1}>
              <div className="collection-card h-full flex flex-col" data-collection={collection.slug}>
                
                {/* Image Cover */}
                <div className="aspect-[3/4] bg-gray-50 relative overflow-hidden">
                  {collection.coverImage ? (
                    <img 
                      src={collection.coverImage} 
                      alt={`Couverture ${collection.name}`} 
                      loading="lazy"
                      draggable="false"
                      className="w-full h-full object-contain p-4 transition-transform hover:scale-105 duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling;
                        if (fallback) {
                          fallback.classList.remove('hidden');
                        }
                      }}
                    />
                  ) : null}
                  <div className={`${collection.coverImage ? 'hidden' : ''} absolute inset-0 flex flex-col items-center justify-center text-center p-8 text-white`} style={{ backgroundColor: collection.primaryColor }}>
                    <span className="text-6xl mb-4">{collection.emoji}</span>
                    <h3 className="font-playfair font-bold text-2xl">{collection.name}</h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {collection.badges.map(badge => (
                      <span 
                        key={badge.label} 
                        className={`px-2 py-1 text-[10px] font-bold rounded-sm ${badge.color === 'magenta' ? 'bg-[#D81B60] text-white' : 'bg-gray-100 text-gray-700 border border-gray-200'}`}
                      >
                        {badge.label}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#1A3557] mb-2">{collection.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">{collection.shortDescription}</p>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500 font-medium mb-6">
                    <span className="flex items-center">📦 {collection.format.split(' + ')[0]}</span>
                    <span className="flex items-center">📚 {collection.tomeCount > 0 ? `${collection.tomeCount} tome(s)` : '-'}</span>
                  </div>
                  
                  <Link 
                    to={`/collections/${collection.slug}`} 
                    className="discover-link mt-auto inline-flex items-center font-bold"
                  >
                    Découvrir la collection <span>→</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* 3. TABLEAU COMPARATIF */}
      <section className="collections-comparator">
        <ScrollReveal>
          <div className="comparator-header">
            <span className="overline">AIDE AU CHOIX</span>
            <h2>Quelle collection est faite pour toi ?</h2>
            <p>Compare en un coup d'œil pour faire le bon choix.</p>
          </div>
          
          <div className="comparator-table-wrapper">
            <table className="comparator-table">
              <thead>
                <tr>
                  <th></th>
                  <th>📘 Clés Maths</th>
                  <th>🔬 Clés Sciences</th>
                  <th>🔴 Derniers Codes</th>
                  <th>📅 La Voie</th>
                  <th>📕 La Racine</th>
                  <th>🎨 3e Facile</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="row-label">Format</td>
                  <td>📦 Physique + PDF</td>
                  <td>📦 Physique + PDF</td>
                  <td>📱 PDF</td>
                  <td>📱 PDF</td>
                  <td>📱 PDF</td>
                  <td>📦 Physique + PDF</td>
                </tr>
                <tr>
                  <td className="row-label">Classe</td>
                  <td>Terminale C/D</td>
                  <td>Terminale D</td>
                  <td>Toutes séries</td>
                  <td>Toutes séries</td>
                  <td>Toutes séries</td>
                  <td>3ᵉ</td>
                </tr>
                <tr>
                  <td className="row-label">Durée d'étude</td>
                  <td>Toute l'année</td>
                  <td>Toute l'année</td>
                  <td>1 à 3 mois</td>
                  <td>1 mois</td>
                  <td>6 mois</td>
                  <td>Toute l'année</td>
                </tr>
                <tr>
                  <td className="row-label">Profil idéal</td>
                  <td>Sérieux, méthodique</td>
                  <td>Bloqué en PC</td>
                  <td>Pressé, sprint</td>
                  <td>Désorganisé</td>
                  <td>Curieux, ambitieux</td>
                  <td>Élève de 3ᵉ</td>
                </tr>
                <tr>
                  <td className="row-label">Prérequis</td>
                  <td>Aucun</td>
                  <td>Aucun</td>
                  <td>Cours déjà vu</td>
                  <td>Aucun</td>
                  <td>Bon niveau</td>
                  <td>Aucun</td>
                </tr>
                <tr>
                  <td className="row-label">Idéal pour</td>
                  <td>Comprendre en profondeur</td>
                  <td>Maîtriser la PC</td>
                  <td>Réviser vite</td>
                  <td>S'organiser</td>
                  <td>Penser mathématiques</td>
                  <td>BEPC</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. BANDEAU RÉASSURANCES */}
      <section className="trust-banner">
        <ScrollReveal>
          <div className="trust-banner-header">
            <span className="overline">POURQUOI EDUCTOME ?</span>
            <h2>Tu achètes en toute confiance</h2>
          </div>
          
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon" style={{ color: '#2E7D32' }}>⚡</div>
              <h3>Accès Immédiat</h3>
              <p>
                Pour les PDF : téléchargement direct après paiement.
                Pour les livres physiques : livraison rapide à Abidjan
                et à l'intérieur du pays.
              </p>
            </div>
            
            <div className="trust-item">
              <div className="trust-icon" style={{ color: '#1A3557' }}>🔒</div>
              <h3>Paiement Sécurisé</h3>
              <p>
                Transactions 100% sécurisées via Selar.
                Mobile Money (MTN, Orange, Moov), Wave, ou Carte bancaire.
              </p>
            </div>
            
            <div className="trust-item">
              <div className="trust-icon" style={{ color: '#E67E22' }}>💬</div>
              <h3>Support disponible</h3>
              <p>
                Une question avant ou après achat ? Réponse en moins de
                2h sur WhatsApp.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. CTA FINAL */}
      <section className="collections-final-cta">
        <ScrollReveal>
          <div className="cta-content">
            <h2>Tu hésites encore ?</h2>
            
            <p>
              Fais notre quiz "Quel type d'élève es-tu ?" en 2 minutes — 
              on te recommande la collection idéale selon ton profil.
            </p>
            
            <div className="cta-buttons">
              <Link to="/quiz" className="btn btn-primary">
                🎯 Faire le quiz
              </Link>
              <a href="https://wa.me/2250799506300" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                💬 Demander conseil sur WhatsApp
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
