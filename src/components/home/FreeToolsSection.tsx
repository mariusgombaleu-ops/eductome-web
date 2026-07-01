import { Link } from 'react-router-dom';
import { Calculator, CalendarClock, Compass, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

const tools = [
  {
    icon: <Calculator className="w-6 h-6" />,
    title: 'Calcul des moyennes',
    desc: 'Ta moyenne par matière et par trimestre, et l\'écart avec la mention que tu vises.',
  },
  {
    icon: <CalendarClock className="w-6 h-6" />,
    title: 'Emploi du temps',
    desc: 'Tes cours, tes interros, tes devoirs et tes BAC blancs — tout au même endroit.',
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: 'Simulateur d\'orientation',
    desc: 'Quelle mention ouvre quelle filière ? Vise juste dès maintenant, sans attendre les résultats.',
    highlight: true,
  },
];

export function FreeToolsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#fafafa] px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-green-50 text-eductome-green font-bold tracking-wider uppercase text-xs px-4 py-2 rounded-full mb-4 shadow-sm border border-green-100">
              Gratuit, pour tous
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-eductome-marine mb-4">
              Des outils qui servent toute l'année
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Même sans acheter un seul cours, l'app t'accompagne au quotidien — et rassure les parents.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tools.map((tool, i) => (
            <ScrollReveal key={tool.title} delay={i * 0.1} className="h-full">
              <div
                className={`h-full rounded-2xl p-6 flex flex-col border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  tool.highlight ? 'bg-white border-eductome-green' : 'bg-white border-gray-200'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${tool.highlight ? 'bg-eductome-green text-white' : 'bg-blue-50 text-eductome-marine'}`}>
                  {tool.icon}
                </div>
                <h3 className="font-bold text-eductome-marine mb-2 flex items-center gap-2">
                  {tool.title}
                  {tool.highlight && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-green-50 text-eductome-green px-2 py-0.5 rounded-full">
                      Aimant parents
                    </span>
                  )}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{tool.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center mt-10">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl bg-eductome-marine hover:bg-[#15294a] text-white transition-colors shadow-lg"
            >
              Créer un compte gratuit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
