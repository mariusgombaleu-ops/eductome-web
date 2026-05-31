import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collection } from '../../types';

interface CollectionCardProps {
  collection: Collection;
}

export function CollectionCard({ collection }: CollectionCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
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
      className="relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-400 ease-out transform hover:-translate-y-2 hover:shadow-2xl group cursor-pointer h-full flex flex-row min-h-[160px] block"
      style={{ 
        borderLeft: `5px solid ${primaryColor}`,
        transform: isHovered ? 'perspective(1000px) rotateX(2deg) rotateY(-2deg) scale3d(1.02, 1.02, 1.02)' : 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="absolute inset-0 transition-opacity duration-400 ease-in-out z-0"
        style={{ backgroundColor: primaryColor, opacity: isHovered ? 1 : 0 }}
      />
      
      {/* Colonne Gauche : Image complète */}
      <div className="w-[35%] sm:w-1/3 relative z-10 shrink-0 overflow-hidden bg-gray-50 flex items-center justify-center">
        {cover ? (
          <img 
            src={cover} 
            alt={name} 
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-500 transform group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = `<span class="text-4xl filter drop-shadow-sm">${collection.emoji || ''}</span>`;
            }}
          />
        ) : (
          <span className="text-4xl filter drop-shadow-sm transition-transform duration-500 transform group-hover:scale-110">
            {collection.emoji}
          </span>
        )}
      </div>
      
      {/* Colonne Droite : Contenu aligné à droite */}
      <div className="w-[65%] sm:w-2/3 relative z-10 p-5 md:p-6 flex flex-col justify-center bg-transparent">
        <div className="flex flex-wrap items-center justify-start gap-2 mb-3">
          {badgeLabel && (
            <span className="bg-red-600 text-white text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse shadow-md">
              {badgeLabel}
            </span>
          )}
          {tag && (
            <span 
              className="text-[9px] md:text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider transition-colors duration-400 whitespace-nowrap"
              style={{ 
                backgroundColor: isHovered ? 'rgba(255,255,255,0.2)' : `${primaryColor}15`,
                color: isHovered ? 'white' : primaryColor
              }}
            >
              {tag}
            </span>
          )}
        </div>
        
        <div className="flex flex-col items-start text-left">
          <h3 
            className="text-lg md:text-xl font-bold font-playfair mb-2 transition-colors duration-400"
            style={{ color: isHovered ? 'white' : '#1A3557' }}
          >
            {name}
          </h3>
          
          <p 
            className="text-xs md:text-sm leading-relaxed transition-colors duration-400 mb-3"
            style={{ color: isHovered ? 'white' : '#4B5563' }}
          >
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mt-1">
            {collection.format && (
              <span className="text-[10px] font-semibold px-2 py-1 rounded bg-gray-100 flex items-center gap-1 transition-colors duration-400" style={{ color: isHovered ? 'white' : '#4B5563', backgroundColor: isHovered ? 'rgba(255,255,255,0.1)' : '#F3F4F6' }}>
                📦 {collection.format.split(' + ')[0]}
              </span>
            )}
            {tomeCount > 1 && (
              <span className="text-[10px] font-semibold px-2 py-1 rounded bg-gray-100 flex items-center gap-1 transition-colors duration-400" style={{ color: isHovered ? 'white' : '#4B5563', backgroundColor: isHovered ? 'rgba(255,255,255,0.1)' : '#F3F4F6' }}>
                📚 {tomeCount} tomes
              </span>
            )}
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t transition-colors duration-400 w-full" style={{ borderColor: isHovered ? 'rgba(255,255,255,0.2)' : '#F3F4F6' }}>
          <span 
            className="text-xs md:text-sm font-bold flex items-center gap-2 transition-colors duration-400"
            style={{ color: isHovered ? 'white' : primaryColor }}
          >
            Découvrir la collection &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
