import { SEO } from '../components/SEO';
import { CTAButton } from '../components/ui/CTAButton';
import { useTheme } from '../contexts/ThemeContext';

export function NotFound() {
  const { palette } = useTheme();
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center transition-colors duration-300" style={{ background: palette.bg }}>
      <SEO 
        title="Page Introuvable" 
        description="La page que tu cherches n'existe pas ou a été déplacée." 
      />
      
      <div className="text-9xl font-extrabold mb-4 animate-pulse transition-colors" style={{ color: palette.accent }}>404</div>
      <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-4 transition-colors" style={{ color: palette.ink }}>
        Oups ! Cette page n'existe pas.
      </h1>
      <p className="mb-8 max-w-md transition-colors" style={{ color: palette.ink2 }}>
        On dirait que tu t'es perdu(e) dans le lycée... Mais pas de panique, le surveillant est là pour t'indiquer le bon chemin.
      </p>
      
      <CTAButton to="/" variant="primary" style={{ background: palette.accent, color: '#fff', borderRadius: '24px' }}>
        Retourner à l'accueil
      </CTAButton>
    </div>
  );
}
