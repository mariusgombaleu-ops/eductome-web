import { Hero } from '../components/home/Hero';
import { RecognizeSection } from '../components/home/RecognizeSection';
import { FounderSection } from '../components/home/FounderSection';
import { DifferenceSection } from '../components/home/DifferenceSection';
import { CollectionsSection } from '../components/home/CollectionsSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FAQSection } from '../components/home/FAQSection';
import { FreeResourcesSection } from '../components/home/FreeResourcesSection';
import { CTASection } from '../components/home/CTASection';
import { SEO } from '../components/SEO';

export function Home() {
  return (
    <div className="bg-[#fafafa]">
      <SEO title="Accueil" description="Le manuel qui t'explique comme un grand frère. Réussis ton BAC et ton BEPC avec la méthode Eductome." />
      <Hero />
      <RecognizeSection />
      <FounderSection />
      <DifferenceSection />
      <CollectionsSection />
      <FreeResourcesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
