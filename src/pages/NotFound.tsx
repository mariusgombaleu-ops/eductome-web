import { SEO } from '../components/SEO';
import { CTAButton } from '../components/ui/CTAButton';

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#fafafa] px-4 text-center">
      <SEO 
        title="Page Introuvable" 
        description="La page que tu cherches n'existe pas ou a été déplacée." 
      />
      
      <div className="text-9xl font-extrabold text-eductome-magenta mb-4 animate-pulse">404</div>
      <h1 className="text-3xl md:text-4xl font-playfair font-bold text-eductome-marine mb-4">
        Oups ! Cette page n'existe pas.
      </h1>
      <p className="text-gray-600 mb-8 max-w-md">
        On dirait que tu t'es perdu(e) dans le lycée... Mais pas de panique, le surveillant est là pour t'indiquer le bon chemin.
      </p>
      
      <CTAButton to="/" variant="primary">
        Retourner à l'accueil
      </CTAButton>
    </div>
  );
}
