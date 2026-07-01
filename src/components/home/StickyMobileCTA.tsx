import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if already dismissed this session
    if (sessionStorage.getItem('sticky-cta-dismissed')) {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      // Show after scrolling past the hero (approx 90vh)
      const heroHeight = window.innerHeight * 0.9;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem('sticky-cta-dismissed', 'true');
  };

  if (isDismissed) return null;

  return (
    <div className={`sticky-mobile-cta md:hidden ${isVisible ? 'visible' : ''}`}>
      <div className="flex items-center gap-3">
        <Link
          to="/register"
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#F0247A] to-[#FF3D8B] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-pink-500/25 active:scale-95 transition-transform text-sm"
        >
          Commencer gratuitement
          <ArrowRight className="w-4 h-4" />
        </Link>
        <button
          onClick={handleDismiss}
          className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors shrink-0"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
