import { ScrollReveal } from '../components/ui/ScrollReveal';
import { CTAButton } from '../components/ui/CTAButton';
import { SEO } from '../components/SEO';
import { GrandFrereGuide } from '../components/ui/GrandFrereGuide';
import { useTheme } from '../contexts/ThemeContext';
import { useLocation } from 'react-router-dom';

export function BecomeRelay() {
  const { palette } = useTheme();
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
  const WHATSAPP_NUMBER = "2250799506300";
  const WHATSAPP_MESSAGE = encodeURIComponent("Bonjour Eductome, je souhaite devenir Relais dans mon établissement/ville !");
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <div className={`min-h-screen font-poppins pb-20 transition-colors duration-300 ${isDashboard ? '' : 'bg-gray-50'}`} style={{ background: isDashboard ? 'transparent' : undefined }}>
      <SEO title="Devenir Relais" description="Deviens le Grand Frère de ton lycée. Rejoins le programme Relais Eductome." />
      
      <div className={`pt-24 px-4 max-w-6xl mx-auto ${isDashboard ? 'pt-6' : ''}`}>
        <GrandFrereGuide 
          id="relais"
          message="Si tu as compris l'esprit Eductome, c'est le moment de le partager. Deviens Relais, aide tes camarades à s'en sortir, et gagne de quoi assurer tes propres frais. On compte sur toi !"
        />
      </div>

      {/* Hero Header */}
      <section className="relative bg-eductome-marine text-white pt-10 pb-32 px-4 overflow-hidden">
        {/* Background Decorative Blur */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-eductome-magenta/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-eductome-sky/20 blur-[80px] rounded-full"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Deviens le <span className="text-eductome-magenta">Grand Frère</span> de ton lycée (et gagne ton propre argent).
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-playfair italic mb-10 max-w-2xl mx-auto">
              Rejoins le programme Relais Eductome. Aide tes camarades à réussir, développe ton réseau et génère des revenus en toute simplicité.
            </p>
            <CTAButton href={WHATSAPP_URL} variant="primary">
              Je postule sur WhatsApp &rarr;
            </CTAButton>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <ScrollReveal delay={0.1}>
            <div className="rounded-[28px] p-8 shadow-xl border-t-4 h-full transform transition-all hover:-translate-y-2 border" style={{ background: palette.bg, borderColor: palette.line, borderTopColor: '#10B981' }}>
              <span className="text-5xl mb-6 block animate-bounce">💸</span>
              <h3 className="font-playfair font-bold text-2xl mb-3 transition-colors" style={{ color: palette.ink }}>Génère des revenus</h3>
              <p className="leading-relaxed transition-colors" style={{ color: palette.ink2 }}>
                Touche une commission attractive sur chaque manuel ou pack Eductome vendu grâce à toi. Plus tu aides tes camarades, plus tu gagnes.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-[28px] p-8 shadow-xl border-t-4 h-full transform transition-all hover:-translate-y-2 border" style={{ background: palette.bg, borderColor: palette.line, borderTopColor: '#D81B60' }}>
              <span className="text-5xl mb-6 block">📚</span>
              <h3 className="font-playfair font-bold text-2xl mb-3 transition-colors" style={{ color: palette.ink }}>Accès VIP aux manuels</h3>
              <p className="leading-relaxed transition-colors" style={{ color: palette.ink2 }}>
                En tant que Relais, tu peux recevoir nos manuels gratuitement pour tes propres révisions ou pour faire des démonstrations.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="rounded-[28px] p-8 shadow-xl border-t-4 h-full transform transition-all hover:-translate-y-2 border" style={{ background: palette.bg, borderColor: palette.line, borderTopColor: '#0EA5E9' }}>
              <span className="text-5xl mb-6 block">🎓</span>
              <h3 className="font-playfair font-bold text-2xl mb-3 transition-colors" style={{ color: palette.ink }}>Expérience Pro</h3>
              <p className="leading-relaxed transition-colors" style={{ color: palette.ink2 }}>
                Développe tes compétences en communication, négociation et gestion de réseau. Un énorme plus pour ton futur CV et tes études supérieures.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-4 py-24">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 transition-colors" style={{ color: palette.ink }}>
              Comment ça marche ?
            </h2>
            <p className="text-lg transition-colors" style={{ color: palette.ink2 }}>
              Le processus est ultra simple pour que tu puisses commencer dès cette semaine.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5" style={{ '--tw-before-bg': palette.line } as any}>
          
          <ScrollReveal>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10" style={{ background: '#D81B60', borderColor: palette.bg, color: '#fff' }}>
                1
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-[24px] shadow-sm border transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
                <h3 className="font-bold text-xl mb-2 transition-colors" style={{ color: palette.ink }}>Tu postules</h3>
                <p className="transition-colors" style={{ color: palette.ink2 }}>
                  Envoie-nous simplement un message sur WhatsApp en nous indiquant ton lycée, ta ville et tes motivations.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10" style={{ background: '#0EA5E9', borderColor: palette.bg, color: '#fff' }}>
                2
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-[24px] shadow-sm border transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
                <h3 className="font-bold text-xl mb-2 transition-colors" style={{ color: palette.ink }}>On te forme</h3>
                <p className="transition-colors" style={{ color: palette.ink2 }}>
                  On t'explique en détail comment utiliser nos manuels, quels sont leurs points forts et comment les présenter à tes camarades.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10" style={{ background: '#10B981', borderColor: palette.bg, color: '#fff' }}>
                3
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-[24px] shadow-sm border transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
                <h3 className="font-bold text-xl mb-2 transition-colors" style={{ color: palette.ink }}>Tu diffuses</h3>
                <p className="transition-colors" style={{ color: palette.ink2 }}>
                  Parle de la méthode Eductome autour de toi. On te fournira des codes promos personnalisés ou des stocks selon ta région.
                </p>
              </div>
            </div>
          </ScrollReveal>
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <div className="bg-eductome-marine rounded-3xl p-10 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-eductome-magenta/20 blur-[80px] rounded-full"></div>
            
            <h2 className="text-3xl font-playfair font-bold mb-6 relative z-10">Prêt à rejoindre l'aventure ?</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto relative z-10">
              Il te suffit d'un smartphone et de la volonté d'aider les autres à réussir leurs examens.
            </p>
            <CTAButton href={WHATSAPP_URL} variant="primary" className="relative z-10">
              Envoyer un message WhatsApp
            </CTAButton>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
