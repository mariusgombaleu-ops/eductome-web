import { Users, Star, BookOpen } from 'lucide-react';
import { MATHS_TOME_IDS } from '../../data/skus';

const stats = [
  { icon: <Users className="w-5 h-5 text-eductome-magenta" />, value: '+3 200', label: 'élèves ivoiriens' },
  { icon: <Star className="w-5 h-5 text-yellow-500 fill-current" />, value: '4,9/5', label: 'satisfaction' },
  { icon: <BookOpen className="w-5 h-5 text-eductome-sky" />, value: `${MATHS_TOME_IDS.length} tomes`, label: 'programme complet' },
];

/**
 * Bande de preuve sociale — sortie du Hero pour le désencombrer.
 * Fine, éditoriale, juste sous le hero.
 */
export function SocialProofStrip() {
  return (
    <section className="bg-white border-b border-gray-100 px-4 py-5">
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-8 md:gap-x-14 gap-y-4">
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center gap-6 md:gap-14">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                {s.icon}
              </div>
              <div className="text-left">
                <div className="text-eductome-marine font-extrabold text-lg leading-none tracking-tight">{s.value}</div>
                <div className="text-gray-500 text-xs mt-0.5 font-medium">{s.label}</div>
              </div>
            </div>
            {i < stats.length - 1 && <div className="hidden md:block w-px h-8 bg-gray-200" />}
          </div>
        ))}
      </div>
    </section>
  );
}
