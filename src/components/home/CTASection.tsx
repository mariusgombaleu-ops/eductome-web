import { ScrollReveal } from '../ui/ScrollReveal';
import { CTAButton } from '../ui/CTAButton';

export function CTASection() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden px-4">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-eductome-marine to-[#0a1628] z-0" />
      
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-eductome-magenta/10 rounded-full blur-[100px] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">
              Tu as lu jusqu'ici. C'est que quelque chose t'a parlé.
            </p>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6 leading-tight">
              Toi aussi tu peux dominer ton BAC.
            </h2>
            <p className="text-xl text-eductome-magenta font-bold">
              EDUCTOME te donne les clés. Le reste, c'est toi.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <CTAButton href="https://selar.com/m/eductome" variant="primary" className="w-full sm:w-auto">
              🛒 Acheter sur Selar
            </CTAButton>
            <CTAButton href="https://wa.me/2250799506300" variant="secondary" className="w-full sm:w-auto">
              📩 Écrire sur WhatsApp
            </CTAButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
