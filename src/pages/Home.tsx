import { Hero } from '../components/home/Hero';
import { RecognizeSection } from '../components/home/RecognizeSection';
import { FounderSection } from '../components/home/FounderSection';
import { DifferenceSection } from '../components/home/DifferenceSection';
import { PreviewSection } from '../components/home/PreviewSection';
import { CollectionsSection } from '../components/home/CollectionsSection';
import { DeliveryFormatsSection } from '../components/home/DeliveryFormatsSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { BeforeAfterSection } from '../components/home/BeforeAfterSection';
import { FAQSection } from '../components/home/FAQSection';
import { ParentsSection } from '../components/home/ParentsSection';
import { FreeResourcesSection } from '../components/home/FreeResourcesSection';
import { CTASection } from '../components/home/CTASection';
import { SEO } from '../components/SEO';
import { useTheme } from '../contexts/ThemeContext';

export function Home() {
  const { palette } = useTheme();
  return (
    <div className="transition-colors duration-300" style={{ background: palette.bg2 }}>
      <SEO title="Accueil" description="Le manuel qui t'explique comme un grand frère. Réussis ton BAC et ton BEPC avec la méthode Eductome." />
      <Hero />
      <RecognizeSection />
      <FounderSection />
      <DifferenceSection />
      <PreviewSection />
      <CollectionsSection />
      <DeliveryFormatsSection />
      <FreeResourcesSection />
      <TestimonialsSection />
      <BeforeAfterSection />
      <FAQSection />
      <ParentsSection />
      <CTASection />
    </div>
  );
}
