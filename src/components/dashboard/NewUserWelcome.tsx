import { useUser } from '../../contexts/UserContext';
import { useTheme } from '../../contexts/ThemeContext';
import { User, GraduationCap, School, BookOpen, Target, CheckCircle2, ChevronRight, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LEVEL_LABELS: Record<string, string> = {
  '3eme': '3ème (BEPC)',
  '2nde': 'Seconde',
  '1ere': 'Première',
  'terminale-c': 'Terminale C',
  'terminale-d': 'Terminale D',
  'terminale-a': 'Terminale A',
};

const SUBJECT_LABELS: Record<string, string> = {
  maths: 'Mathématiques',
  pc: 'Physique-Chimie',
  svt: 'SVT',
  philo: 'Philosophie',
  fr: 'Français',
};

const GOAL_LABELS: Record<string, string> = {
  passable: 'Mention Passable',
  bien: 'Mention Bien',
  'tres-bien': 'Mention Très Bien',
  excellent: 'Excellent (Bourse)',
};

const GOAL_EMOJIS: Record<string, string> = {
  passable: '✅',
  bien: '🌟',
  'tres-bien': '⭐',
  excellent: '🏆',
};

export const NewUserWelcome = () => {
  const { pseudo, levelString, highschool, favoriteSubject, goal, xp, goals } = useUser();
  const { palette } = useTheme();
  const navigate = useNavigate();

  // Only show if user is new
  if (xp > 50) return null; // We can hide this once they get started

  const isCollege = levelString === '3eme';
  const examName = isCollege ? 'BEPC' : 'BAC';

  const profileItems = [
    { icon: User, label: 'Prénom', value: pseudo || 'Champion(ne)', color: palette.accent },
    { icon: GraduationCap, label: 'Série', value: LEVEL_LABELS[levelString] || levelString, color: '#1976D2' },
    ...(highschool ? [{ icon: School, label: 'Lycée / Collège', value: highschool, color: '#2E7D32' }] : []),
    { icon: BookOpen, label: 'Matière', value: SUBJECT_LABELS[favoriteSubject] || favoriteSubject || '—', color: '#E65100' },
    { icon: Target, label: 'Objectif', value: `${GOAL_EMOJIS[goal] || '🎯'} ${GOAL_LABELS[goal] || goal || 'Non défini'}`, color: palette.accent },
  ];

  const isGoalsSet = goals?.bacPoints !== undefined;

  return (
    <div className="mt-8">
      <h2 className="text-[15px] font-bold flex items-center gap-2 mb-4" style={{ color: palette.ink }}>
        <Target className="w-5 h-5" style={{ color: palette.accent }} /> Mon Profil & Prochaines Étapes
      </h2>
      
      <div className="rounded-3xl border shadow-sm overflow-hidden" style={{ background: palette.bg2, borderColor: palette.line }}>
        <div className="p-4 md:p-5 border-b" style={{ borderColor: palette.line, background: palette.bg }}>
          <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: palette.ink3 }}>Tes informations</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {profileItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2 rounded-xl transition-all duration-300"
                style={{ background: palette.bg3 || palette.bg }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${item.color}15`, color: item.color }}
                >
                  <item.icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-wider truncate" style={{ color: palette.ink3 }}>
                    {item.label}
                  </p>
                  <p className="text-xs font-bold truncate" style={{ color: palette.ink }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 md:p-5 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: palette.ink3 }}>Mission du jour</h3>
          
          <button
            onClick={() => navigate('/dashboard/starter-pack')}
            className="w-full flex justify-between items-center p-3 rounded-2xl group transition-all"
            style={{ background: palette.bg, border: `1px solid ${palette.line}` }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: palette.accentSoft, color: palette.accent }}>
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold" style={{ color: palette.ink }}>Découvrir mon Starter Pack</p>
                <p className="text-xs font-medium" style={{ color: palette.ink3 }}>Commence ton premier cours</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-400 group-hover:bg-[#D81B60] group-hover:text-white transition-colors">
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>

          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open_goals_modal'))}
            className="w-full flex justify-between items-center p-3 rounded-2xl group transition-all"
            style={{ background: palette.bg, border: `1px solid ${palette.line}` }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: isGoalsSet ? '#2E7D3215' : '#E6510015', color: isGoalsSet ? '#2E7D32' : '#E65100' }}>
                {isGoalsSet ? <CheckCircle2 className="w-5 h-5" /> : <Target className="w-5 h-5" />}
              </div>
              <div className="text-left">
                <p className="text-sm font-bold" style={{ color: palette.ink }}>{isGoalsSet ? 'Objectifs définis' : 'Définir mes objectifs chiffrés'}</p>
                <p className="text-xs font-medium" style={{ color: palette.ink3 }}>{isGoalsSet ? 'Bien joué !' : `Combien de points au ${examName} ?`}</p>
              </div>
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isGoalsSet ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 dark:bg-gray-800 text-gray-400 group-hover:bg-[#E65100] group-hover:text-white'}`}>
              {isGoalsSet ? <CheckCircle2 className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </div>
          </button>

          <button
            onClick={() => navigate('/dashboard/planning')}
            className="w-full flex justify-between items-center p-3 rounded-2xl group transition-all"
            style={{ background: palette.bg, border: `1px solid ${palette.line}` }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#1976D215', color: '#1976D2' }}>
                <Calendar className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold" style={{ color: palette.ink }}>Définir mon emploi du temps</p>
                <p className="text-xs font-medium" style={{ color: palette.ink3 }}>Organise tes révisions</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-400 group-hover:bg-[#1976D2] group-hover:text-white transition-colors">
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
