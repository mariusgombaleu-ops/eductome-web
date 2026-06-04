import { Link } from 'react-router-dom';
import { Collection } from '../../types';

interface CollectionCardProps {
  collection: Collection;
}

export function CollectionCard({ collection }: CollectionCardProps) {
  const primaryColor = collection.primaryColor || collection.color || '#1A3557';
  const name = collection.name || collection.title || '';
  const description = collection.shortDescription || collection.description || '';
  const tag = collection.targetClass || collection.tag || '';
  const cover = collection.coverImage || collection.image;
  const tomeCount = collection.tomeCount ?? collection.tomesCount ?? 0;
  const badgeLabel = collection.badges?.[0]?.label || collection.badge;

  return (
    <Link
      to={`/collections/${collection.slug || collection.id}`}
      className="relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-xl group cursor-pointer h-full flex flex-col sm:flex-row border border-gray-100"
    >
      {/* Barre de couleur supérieure sur mobile, gauche sur desktop */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 sm:h-full sm:w-1 z-20 transition-all duration-300 group-hover:opacity-80"
        style={{ backgroundColor: primaryColor }}
      />
      
      {/* Zone Image */}
      <div 
        className="w-full sm:w-2/5 relative z-10 overflow-hidden flex items-center justify-center p-6 transition-colors duration-300"
        style={{ backgroundColor: `${primaryColor}08` }} // Fond très subtil basé sur la couleur
      >
        {/* Halo lumineux au survol */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
          style={{ backgroundColor: primaryColor }}
        />
        
        {cover ? (
          <img 
            src={cover} 
            alt={name} 
            loading="lazy"
            className="w-full max-h-[160px] sm:max-h-[200px] object-contain object-center transition-transform duration-500 transform group-hover:scale-105 group-hover:rotate-1 filter drop-shadow-md relative z-10"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = `<span class="text-6xl filter drop-shadow-sm relative z-10">${collection.emoji || ''}</span>`;
            }}
          />
        ) : (
          <span className="text-6xl filter drop-shadow-sm transition-transform duration-500 transform group-hover:scale-110 relative z-10">
            {collection.emoji}
          </span>
        )}
      </div>
      
      {/* Zone Texte */}
      <div className="w-full sm:w-3/5 relative z-10 p-6 flex flex-col justify-between bg-white">
        <div>
          <div className="flex flex-wrap items-center justify-start gap-2 mb-4">
            {badgeLabel && (
              <span 
                className="text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm"
                style={{ backgroundColor: primaryColor, color: 'white' }}
              >
                {badgeLabel}
              </span>
            )}
            {tag && (
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider bg-gray-100 text-gray-600">
                {tag}
              </span>
            )}
          </div>
          
          <h3 
            className="text-xl md:text-2xl font-bold font-playfair mb-3 text-eductome-marine transition-colors duration-300 group-hover:text-opacity-80"
          >
            {name}
          </h3>
          
          <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {collection.format && (
              <span className="text-[11px] font-medium px-2 py-1 rounded-md bg-gray-50 border border-gray-100 text-gray-500 flex items-center gap-1.5">
                <span className="text-gray-400">📦</span> {collection.format.split(' + ')[0]}
              </span>
            )}
            {tomeCount > 1 && (
              <span className="text-[11px] font-medium px-2 py-1 rounded-md bg-gray-50 border border-gray-100 text-gray-500 flex items-center gap-1.5">
                <span className="text-gray-400">📚</span> {tomeCount} tomes
              </span>
            )}
          </div>
          
          <div className="pt-4 border-t border-gray-50 w-full flex items-center justify-between">
            <span 
              className="text-sm font-bold flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1"
              style={{ color: primaryColor }}
            >
              Découvrir la collection
            </span>
            <span 
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-10"
              style={{ color: primaryColor, backgroundColor: `${primaryColor}00` }}
            >
              &rarr;
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
