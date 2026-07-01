import { Link } from 'react-router-dom';
import { Timer, ClipboardCheck, Target, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

const steps = [
  {
    icon: <Timer className="w-6 h-6" />,
    title: 'Tu composes',
    desc: 'Un vrai sujet type BAC sur le Module 1 (Les Limites), en temps limité, comme en classe.',
  },
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: 'Tu t\'auto-corriges',
    desc: 'Un barème guidé question par question. À la fin, ta note sur 20 tombe.',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Tu vois tes faiblesses',
    desc: 'La liste précise de ce qui te fait perdre des points — et quoi retravailler en priorité.',
  },
];

export function PlayableDemoSection() {
  return (
    <section className="py-16 md:py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-pink-50 text-eductome-magenta font-bold tracking-wider uppercase text-xs px-4 py-2 rounded-full mb-4 shadow-sm border border-pink-100">
              La démo qui déclenche
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-eductome-marine mb-4">
              Ne nous crois pas. Compose.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fais un vrai devoir surveillé, chronométré, gratuitement. Pour la première fois, une app te dit
              exactement pourquoi tu as eu cette note — et quoi retravailler.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Étapes */}
          <div className="space-y-5">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-eductome-marine text-white flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-eductome-marine mb-1">
                      {i + 1}. {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            <ScrollReveal delay={0.4}>
              <Link
                to="/register"
                className="inline-flex items-center gap-2 mt-2 font-bold px-8 py-4 rounded-xl bg-eductome-magenta hover:bg-pink-700 text-white transition-colors shadow-lg"
              >
                Composer gratuitement
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Mock bilan */}
          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl border border-gray-200 bg-[#fafafa] p-6 md:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Bilan du devoir</p>
                  <p className="font-bold text-eductome-marine">Module 1 — Les Limites</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-black text-eductome-marine tabular-nums">07<span className="text-lg text-gray-400">/20</span></p>
                  <p className="text-[11px] text-gray-400">1re tentative</p>
                </div>
              </div>

              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">À retravailler en priorité</p>
              <ul className="space-y-2.5">
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Formes indéterminées</span>
                  <span className="text-eductome-magenta font-bold">−4 pts</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Asymptotes obliques</span>
                  <span className="text-eductome-magenta font-bold">−5 pts</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Limites en l'infini</span>
                  <span className="text-amber-500 font-bold">−2 pts</span>
                </li>
              </ul>

              <div className="mt-6 pt-5 border-t border-gray-200">
                <p className="text-sm text-gray-600 italic">
                  « Champion, tes bases sont là. Ce sont les formes indéterminées qui te coûtent cher. On les attaque ensemble ? »
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
