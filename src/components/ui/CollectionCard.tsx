import { useState } from 'react';
import { Collection } from '../../types';

interface CollectionCardProps {
  collection: Collection;
}

export function CollectionCard({ collection }: CollectionCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-400 ease-out transform hover:-translate-y-2 hover:shadow-2xl group cursor-pointer h-full flex flex-row min-h-[160px]"
      style={{ 
        borderLeft: `5px solid ${collection.color}`,
        transform: isHovered ? 'perspective(1000px) rotateX(2deg) rotateY(-2deg) scale3d(1.02, 1.02, 1.02)' : 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="absolute inset-0 transition-opacity duration-400 ease-in-out z-0"
        style={{ backgroundColor: collection.color, opacity: isHovered ? 1 : 0 }}
      />
      
      {/* Colonne Gauche : Image complète */}
      <div className="w-[35%] sm:w-1/3 relative z-10 shrink-0 overflow-hidden bg-gray-50 flex items-center justify-center">
        {collection.image ? (
          <img 
            src={collection.image} 
            alt={collection.title} 
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-500 transform group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = `<span class="text-4xl filter drop-shadow-sm">${collection.emoji}</span>`;
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
          {collection.badge && (
            <span className="bg-red-600 text-white text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse shadow-md">
              {collection.badge}
            </span>
          )}
          <span 
            className="text-[9px] md:text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider transition-colors duration-400 whitespace-nowrap"
            style={{ 
              backgroundColor: isHovered ? 'rgba(255,255,255,0.2)' : `${collection.color}15`,
              color: isHovered ? 'white' : collection.color
            }}
          >
            {collection.tag}
          </span>
        </div>
        
        <div className="flex flex-col items-start text-left">
          <h3 
            className="text-lg md:text-xl font-bold font-playfair mb-2 transition-colors duration-400"
            style={{ color: isHovered ? 'white' : '#1A3557' }}
          >
            {collection.title}
          </h3>
          
          <p 
            className="text-xs md:text-sm leading-relaxed transition-colors duration-400 mb-3"
            style={{ color: isHovered ? 'white' : '#4B5563' }}
          >
            {collection.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-1">
            {collection.format && (
              <span className="text-[10px] font-semibold px-2 py-1 rounded bg-gray-100 flex items-center gap-1 transition-colors duration-400" style={{ color: isHovered ? 'white' : '#4B5563', backgroundColor: isHovered ? 'rgba(255,255,255,0.1)' : '#F3F4F6' }}>
                📚 {collection.format}
              </span>
            )}
            {collection.tomesCount && collection.tomesCount > 1 && (
              <span className="text-[10px] font-semibold px-2 py-1 rounded bg-gray-100 flex items-center gap-1 transition-colors duration-400" style={{ color: isHovered ? 'white' : '#4B5563', backgroundColor: isHovered ? 'rgba(255,255,255,0.1)' : '#F3F4F6' }}>
                🔢 {collection.tomesCount} tomes
              </span>
            )}
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t transition-colors duration-400 w-full" style={{ borderColor: isHovered ? 'rgba(255,255,255,0.2)' : '#F3F4F6' }}>
          <span 
            className="text-xs md:text-sm font-bold flex items-center gap-2 transition-colors duration-400"
            style={{ color: isHovered ? 'white' : collection.color }}
          >
            Découvrir la collection &rarr;
          </span>
        </div>
      </div>
    </div>
  );
}
