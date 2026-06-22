import { Hero } from '../components/home/Hero';
import { RecognizeSection } from '../components/home/RecognizeSection';
import { DifferenceSection } from '../components/home/DifferenceSection';
import { PreviewSection } from '../components/home/PreviewSection';
import { CollectionsSection } from '../components/home/CollectionsSection';
import { FreeResourcesSection } from '../components/home/FreeResourcesSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { ParentsSection } from '../components/home/ParentsSection';
import { FAQSection } from '../components/home/FAQSection';
import { CTASection } from '../components/home/CTASection';
import { StickyMobileCTA } from '../components/home/StickyMobileCTA';
import { SectionDivider } from '../components/ui/SectionDivider';
import { SEO } from '../components/SEO';

export function Home() {
  return (
    <div className="transition-colors duration-300">
      <SEO title="Accueil" description="Le manuel qui t'explique comme un grand frère. Réussis ton BAC et ton BEPC avec la méthode Eductome." />

      {/* 1. Hero Cinématique */}
      <Hero />

      {/* 2. Le Problème — "Tu te reconnais ?" + Citation Fondateur */}
      <RecognizeSection />

      <SectionDivider fromColor="#f4f7fb" toColor="#FFF8F0" />

      {/* 3. La Solution — Les 3 piliers + Avant/Après intégrés */}
      <DifferenceSection />

      {/* 4. Voir Pour Croire — Preview interactive */}
      <PreviewSection />

      {/* 5. Collections & Formats */}
      <CollectionsSection />

      {/* 6. Goûte Gratuitement — Ressources gratuites */}
      <FreeResourcesSection />

      {/* 7. Ils en parlent — Carousel témoignages */}
      <TestimonialsSection />

      {/* 8. Mot aux Parents */}
      <ParentsSection />

      {/* 9. FAQ */}
      <FAQSection />

      {/* 10. CTA Final — Urgence + Countdown BAC */}
      <CTASection />

      {/* Sticky CTA Mobile */}
      <StickyMobileCTA />
    </div>
  );
}
