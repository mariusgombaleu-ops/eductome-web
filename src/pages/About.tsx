import { ScrollReveal } from '../components/ui/ScrollReveal';
import { GraduationCap, Users, BookOpen, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { useTheme } from '../contexts/ThemeContext';

export function About() {
  const { palette } = useTheme();
  return (
    <div className="min-h-screen font-poppins pb-20 transition-colors duration-300" style={{ background: palette.bg2 }}>
      <SEO title="À propos de nous" description="Découvrez l'histoire de Marius Gombaleu et de la création d'Eductome." />
      
      {/* Hero Banner */}
      <div className="py-20 px-4 text-center relative overflow-hidden transition-colors duration-300" style={{ background: palette.accent }}>
        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">
          L'Histoire d'<span style={{ color: palette.bg }}>Eductome</span>
        </h1>
        <p className="text-white/90 max-w-2xl mx-auto text-lg md:text-xl font-light relative z-10">
          De la galère au Lycée Classique à la création d'une méthode pour tous.
        </p>
      </div>

      {/* Story Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        
        <ScrollReveal>
          <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
                <img 
                  src="/images/profil.jpeg"
                  alt="Marius Gombaleu, Fondateur d'Eductome"
                  loading="lazy"
                  className="w-full h-[600px] object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-bold font-playfair text-xl">Marius Gombaleu</p>
                  <p className="text-white/80 text-sm">Fondateur d'Eductome</p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/3 space-y-6 text-lg leading-relaxed transition-colors" style={{ color: palette.ink2 }}>
              <h2 className="text-3xl font-playfair font-bold mb-6 transition-colors" style={{ color: palette.ink }}>Un parcours d'élite mis à rude épreuve</h2>
              <p>
                J'ai toujours fait partie des élites durant mon cursus scolaire. J'ai fait un parcours sans faute au primaire, au collège et au premier cycle du secondaire. Mais tout a basculé quand je suis arrivé au lycée. Je venais d'obtenir mon BEPC et j'ai été orienté au <strong>Lycée Classique d'Abidjan</strong>.
              </p>
              <p>
                Dès la classe de seconde, les choses ont commencé à changer parce que l'environnement était intense et la pression, maximale. Je me rappelle qu'avant le tout premier cours de physique, le professeur a demandé à chacun d'écrire la note qu'il visait au troisième trimestre sur une feuille. Très confiants, on a tous inscrit des 17, des 18 ou des 19 sur 20. 
              </p>
              <p>
                À la fin du premier trimestre, lorsqu'on a calculé les moyennes, <strong>c'était la catastrophe</strong>. On s'est retrouvés avec des moins de 10, des 12, des 13... Ceux qui visaient des 19 se retrouvaient avec 11. On a compris tout de suite que c'était un autre monde.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-6 text-lg leading-relaxed mb-16 transition-colors" style={{ color: palette.ink2 }}>
            <h2 className="text-3xl font-playfair font-bold mb-6 transition-colors" style={{ color: palette.ink }}>La réalité de la série D : Polyvalence et autonomie</h2>
            <p>
              Ce nouvel univers demandait plus d'exigences, plus de discipline et plus de concentration. Imaginez-vous avec plus de 12 ou 13 matières en série D : <strong>aucune matière ne devait être négligée</strong>. Il fallait être polyvalent. Il fallait se rassurer d'avoir la moyenne dans pratiquement toutes les matières pour maximiser ses chances d'avoir le bac.
            </p>
            <p>
              Il fallait bosser dur. Non seulement il fallait comprendre ce que le professeur expliquait en classe, mais par la suite, il fallait essayer de traiter les exercices par soi-même pour assimiler les notions, maîtriser les méthodes et devenir indépendant. Ce n'était pas du tout facile. La pression était constante et le doute t'envahit. 
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="p-8 md:p-12 rounded-[28px] shadow-sm border-l-8 mb-16 relative transition-colors" style={{ background: palette.bg, borderColor: palette.accent }}>
            <div className="absolute top-6 left-6 text-6xl font-serif leading-none transition-colors" style={{ color: palette.line }}>"</div>
            <p className="text-2xl font-playfair font-bold italic relative z-10 mb-4 transition-colors" style={{ color: palette.ink }}>
              Parfois, tu as compris une notion théorique, mais tu n'as pas la méthode. Tu ne sais pas comment t'y prendre, ni comment appliquer tes propriétés. On n'arrivait pas à s'en sortir... et c'est plus tard que j'ai compris le secret.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-6 text-lg leading-relaxed transition-colors" style={{ color: palette.ink2 }}>
            <h2 className="text-3xl font-playfair font-bold mb-6 transition-colors" style={{ color: palette.ink }}>Le déclic et la Naissance de la Méthode</h2>
            <p>
              Le véritable déclic a été de comprendre qu'<strong>il fallait se construire une méthode</strong>. Il fallait acquérir une méthode de calcul et savoir exactement comment aborder un exercice. Face à un exercice sur les limites, par exemple, comment doit-on l'aborder ? Comment doit-on réfléchir ? À quoi faut-il penser ?
            </p>
            <p>
              C'est à partir de ce moment-là que tout a changé. J'ai trouvé ma méthode, ce qui m'a permis de sauver mon année et de décrocher mon bac. En réalité, au-delà de la simple compréhension des notions, il fallait une bonne méthodologie : savoir comment commencer, comment structurer sa pensée, comment réfléchir et comment terminer. 
            </p>
            <p className="font-bold mt-8 text-xl transition-colors" style={{ color: palette.ink }}>
              C'est pour partager cette méthodologie, pour être ce "Grand Frère" qui m'a tant manqué au Lycée, que j'ai créé Eductome.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Team Section */}
      <div className="py-20 border-t transition-colors duration-300" style={{ background: palette.bg, borderColor: palette.line }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4 transition-colors" style={{ color: palette.ink }}>Une équipe soudée autour de la réussite</h2>
            <p className="max-w-2xl mx-auto text-lg transition-colors" style={{ color: palette.ink2 }}>
              Eductome, ce n'est pas qu'une seule personne. C'est tout un écosystème d'experts et d'anciens élèves dédiés à la transmission du savoir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Marius */}
            <ScrollReveal>
              <div className="rounded-[28px] p-8 h-full border transition-all hover:shadow-sm" style={{ background: palette.bg2, borderColor: palette.line }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: `${palette.accent}20`, color: palette.accent }}>
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2 transition-colors" style={{ color: palette.ink }}>Marius Gombaleu</h3>
                <p className="font-bold text-sm uppercase tracking-wider mb-4 transition-colors" style={{ color: palette.accent }}>Fondateur</p>
                <p className="leading-relaxed transition-colors" style={{ color: palette.ink2 }}>
                  Ancien élève du Lycée Classique d'Abidjan. Créateur de la méthodologie Eductome et garant de l'approche pédagogique "Grand Frère" à travers toutes les collections.
                </p>
              </div>
            </ScrollReveal>

            {/* Professeurs */}
            <ScrollReveal>
              <div className="rounded-[28px] p-8 h-full border transition-all hover:shadow-sm" style={{ background: palette.bg2, borderColor: palette.line, transitionDelay: '100ms' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: '#10B98120', color: '#10B981' }}>
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2 transition-colors" style={{ color: palette.ink }}>Les Professeurs</h3>
                <p className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: '#10B981' }}>L'Expertise Académique</p>
                <p className="leading-relaxed transition-colors" style={{ color: palette.ink2 }}>
                  Des enseignants chevronnés du système éducatif ivoirien qui valident le contenu scientifique, s'assurent de la conformité avec le programme national et apportent la rigueur nécessaire.
                </p>
              </div>
            </ScrollReveal>

            {/* Anciens Élèves */}
            <ScrollReveal>
              <div className="rounded-[28px] p-8 h-full border transition-all hover:shadow-sm" style={{ background: palette.bg2, borderColor: palette.line, transitionDelay: '200ms' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: '#F59E0B20', color: '#F59E0B' }}>
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2 transition-colors" style={{ color: palette.ink }}>Anciens Élèves</h3>
                <p className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: '#F59E0B' }}>Le Mentorat Continu</p>
                <p className="leading-relaxed transition-colors" style={{ color: palette.ink2 }}>
                  Des étudiants brillants issus de l'<strong>Université Félix Houphouët-Boigny</strong> et de l'<strong>Université Nangui Abrogoua</strong>, diplômés des <strong>séries A, C et D</strong>. Ils apportent leurs astuces et leur expérience du terrain.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>

      {/* CTA Bottom */}
      <div className="py-16 text-center transition-colors duration-300" style={{ background: palette.accent }}>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
              Prêt à appliquer notre méthode ?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Ne laisse plus les exercices te paralyser. Découvre nos manuels et commence à structurer ta pensée pour dominer ton année scolaire.
            </p>
            <Link 
              to="/collections" 
              className="inline-flex items-center justify-center bg-white font-bold py-4 px-8 rounded-[24px] transition-all shadow-md hover:shadow-lg hover:-translate-y-1 transform duration-200 text-lg group"
              style={{ color: palette.accent }}
            >
              Voir les collections <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>

    </div>
  );
}
