import { Hero } from '../components/home/Hero';
import { SocialProofStrip } from '../components/home/SocialProofStrip';
import { FoundersOfferBanner } from '../components/home/FoundersOfferBanner';
import { RecognizeSection } from '../components/home/RecognizeSection';
import { DifferenceSection } from '../components/home/DifferenceSection';
import { PreviewSection } from '../components/home/PreviewSection';
import { PlayableDemoSection } from '../components/home/PlayableDemoSection';
import { CollectionsSection } from '../components/home/CollectionsSection';
import { PricingSection } from '../components/home/PricingSection';
import { FreeResourcesSection } from '../components/home/FreeResourcesSection';
import { FreeToolsSection } from '../components/home/FreeToolsSection';
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

      {/* 1bis. Bande de preuve sociale (sortie du hero pour l'aérer) */}
      <SocialProofStrip />

      {/* 1ter. Offre fondateurs (auto-affichée jusqu'au 30 sept, sinon masquée) */}
      <FoundersOfferBanner />

      {/* 2. Le Problème — "Tu te reconnais ?" + Citation Fondateur */}
      <RecognizeSection />

      <SectionDivider fromColor="#f4f7fb" toColor="#FFF8F0" />

      {/* 3. La Solution — Les 3 piliers + Avant/Après intégrés */}
      <DifferenceSection />

      {/* 4. Voir Pour Croire — Preview interactive */}
      <PreviewSection />

      {/* 4bis. La démo jouable qui convertit — compose, note /20, faiblesses */}
      <PlayableDemoSection />

      {/* 5. Collections & Formats */}
      <CollectionsSection />

      {/* 5bis. Tarifs — échelle de prix à vie (Gratuit → Module → Tome → Collection) */}
      <PricingSection />

      {/* 6. Goûte Gratuitement — Ressources gratuites */}
      <FreeResourcesSection />

      {/* 6bis. Aimants gratuits — outils utilitaires (moyennes, EDT, orientation) */}
      <FreeToolsSection />

      {/* 7. Ils en parlent — Carousel témoignages */}
      <TestimonialsSection />

      {/* 8. Mot aux Parents */}
      <ParentsSection />

      {/* 9. FAQ */}
      <FAQSection />

      {/* 10. CTA Final — accroche BAC + urgence fondateur (une seule échéance) */}
      <CTASection />

      {/* Sticky CTA Mobile */}
      <StickyMobileCTA />
    </div>
  );
}
