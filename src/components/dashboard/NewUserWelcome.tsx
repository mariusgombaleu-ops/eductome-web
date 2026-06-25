import { useUser } from '../../contexts/UserContext';
import { useTheme } from '../../contexts/ThemeContext';
import { BookOpen, Target, Calendar, Circle, CheckCircle2, PartyPopper } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NewUserWelcomeProps {
  hasTimetable: boolean;
  hasReadFirstCourse: boolean;
}

export const NewUserWelcome = ({ hasTimetable, hasReadFirstCourse }: NewUserWelcomeProps) => {
  const { levelString, goals } = useUser();
  const { palette } = useTheme();
  const navigate = useNavigate();

  const isCollege = levelString === '3eme';
  const examName = isCollege ? 'BEPC' : 'BAC';

  const isGoalsSet = goals?.bacPoints !== undefined;
  const allCompleted = isGoalsSet && hasTimetable && hasReadFirstCourse;

  if (allCompleted) {
    return (
      <div className="mt-8">
        <div className="rounded-3xl border shadow-sm p-5 flex items-center gap-4" style={{ background: palette.bg2, borderColor: '#10B98130' }}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#10B98115', color: '#10B981' }}>
            <PartyPopper className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-[15px]" style={{ color: palette.ink }}>Mission du jour accomplie !</h3>
            <p className="text-sm font-medium" style={{ color: palette.ink3 }}>Tu as terminé toutes tes tâches d'intégration. Super boulot !</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-[15px] font-bold flex items-center gap-2 mb-4" style={{ color: palette.ink }}>
        <Target className="w-5 h-5" style={{ color: palette.accent }} /> Mon Profil & Prochaines Étapes
      </h2>
      
      <div className="rounded-3xl border shadow-sm overflow-hidden" style={{ background: palette.bg2, borderColor: palette.line }}>
        <div className="p-4 md:p-5 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: palette.ink3 }}>Mission du jour</h3>
          
          {/* Starter Pack */}
          <button
            onClick={() => !hasReadFirstCourse && navigate('/dashboard/starter-pack')}
            className={`w-full flex justify-between items-center p-3 rounded-2xl transition-all ${!hasReadFirstCourse ? 'group hover:scale-[1.02]' : 'cursor-default'}`}
            style={{ background: palette.bg, border: `1px solid ${hasReadFirstCourse ? '#10B98130' : palette.line}` }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: hasReadFirstCourse ? '#10B98115' : palette.accentSoft, color: hasReadFirstCourse ? '#10B981' : palette.accent }}>
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold" style={{ color: palette.ink }}>Découvrir mon Starter Pack</p>
                <p className="text-xs font-medium" style={{ color: hasReadFirstCourse ? '#10B981' : palette.ink3 }}>
                  {hasReadFirstCourse ? 'Bien joué !' : 'Commence ton premier cours'}
                </p>
              </div>
            </div>
            <div className={`w-8 h-8 flex items-center justify-center transition-colors ${hasReadFirstCourse ? 'text-[#10B981]' : 'text-[#9CA3AF] group-hover:text-[#D81B60]'}`}>
              {hasReadFirstCourse ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-5 h-5" />}
            </div>
          </button>

          {/* Objectifs */}
          <button
            onClick={() => !isGoalsSet && window.dispatchEvent(new CustomEvent('open_goals_modal'))}
            className={`w-full flex justify-between items-center p-3 rounded-2xl transition-all ${!isGoalsSet ? 'group hover:scale-[1.02]' : 'cursor-default'}`}
            style={{ background: palette.bg, border: `1px solid ${isGoalsSet ? '#10B98130' : palette.line}` }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: isGoalsSet ? '#10B98115' : '#E6510015', color: isGoalsSet ? '#10B981' : '#E65100' }}>
                <Target className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold" style={{ color: palette.ink }}>Définir mes objectifs</p>
                <p className="text-xs font-medium" style={{ color: isGoalsSet ? '#10B981' : palette.ink3 }}>
                  {isGoalsSet ? 'Bien joué !' : `Combien de points au ${examName} ?`}
                </p>
              </div>
            </div>
            <div className={`w-8 h-8 flex items-center justify-center transition-colors ${isGoalsSet ? 'text-[#10B981]' : 'text-[#9CA3AF] group-hover:text-[#E65100]'}`}>
              {isGoalsSet ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-5 h-5" />}
            </div>
          </button>

          {/* Emploi du temps */}
          <button
            onClick={() => !hasTimetable && navigate('/dashboard/emploi-du-temps')}
            className={`w-full flex justify-between items-center p-3 rounded-2xl transition-all ${!hasTimetable ? 'group hover:scale-[1.02]' : 'cursor-default'}`}
            style={{ background: palette.bg, border: `1px solid ${hasTimetable ? '#10B98130' : palette.line}` }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: hasTimetable ? '#10B98115' : '#1976D215', color: hasTimetable ? '#10B981' : '#1976D2' }}>
                <Calendar className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold" style={{ color: palette.ink }}>Définir mon emploi du temps</p>
                <p className="text-xs font-medium" style={{ color: hasTimetable ? '#10B981' : palette.ink3 }}>
                  {hasTimetable ? 'Bien joué !' : 'Organise tes révisions'}
                </p>
              </div>
            </div>
            <div className={`w-8 h-8 flex items-center justify-center transition-colors ${hasTimetable ? 'text-[#10B981]' : 'text-[#9CA3AF] group-hover:text-[#1976D2]'}`}>
              {hasTimetable ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-5 h-5" />}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
