import React from 'react';
import { BookOpen, Target, ArrowRight, Clock } from 'lucide-react';
import { TimetableSlot, AssessmentEvent } from './types';

interface DashboardWidgetProps {
  currentSlot: TimetableSlot | null;
  nextSlot: TimetableSlot | null;
  upcomingAssessment: AssessmentEvent | null;
  onActionClick: (assessment: AssessmentEvent) => void;
}

export const TimetableDashboardWidget: React.FC<DashboardWidgetProps> = ({
  currentSlot,
  nextSlot,
  upcomingAssessment,
  onActionClick
}) => {
  return (
    <div className="w-full space-y-4 font-poppins">
      {/* BANDEAU ALERTE : Prochain Défi */}
      {upcomingAssessment && (
        <div className="w-full bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-[#161B22] border border-orange-200 dark:border-orange-900/30 rounded-2xl p-4 md:p-5 flex items-start gap-4 shadow-sm transition-all hover:shadow-md">
          <div className="shrink-0 p-3 bg-gradient-to-br from-orange-400 to-[#E67E22] rounded-xl text-white shadow-sm mt-1">
            <Target size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-extrabold tracking-widest bg-orange-100 text-[#E67E22] dark:bg-orange-900/50 dark:text-orange-300 px-2.5 py-0.5 rounded-full uppercase border border-orange-200 dark:border-orange-800/50">
                Prochain Défi
              </span>
              <span className="text-xs text-orange-600 dark:text-orange-400 font-medium flex items-center gap-1">
                <Clock size={12} /> {upcomingAssessment.date}
              </span>
            </div>
            <h4 className="text-base font-bold text-gray-800 dark:text-gray-100 truncate">
              {upcomingAssessment.subjectName} — {upcomingAssessment.title}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
              💡 <strong>Conseil du Grand Frère :</strong> Ne te laisse pas surprendre. Ouvre ton espace d'entraînement pour analyser les points de vigilance et aborder ce devoir sereinement.
            </p>
            <button
              onClick={() => onActionClick(upcomingAssessment)}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-white bg-[#E67E22] hover:bg-[#D35400] px-4 py-2 rounded-lg transition-colors shadow-sm"
            >
              Préparer ce devoir <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* BLOC TEMPOREL DE LA JOURNÉE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Cours actuel */}
        <div className="bg-white dark:bg-[#161B22] border border-gray-200 dark:border-gray-800 rounded-2xl p-4 flex items-center gap-4 shadow-sm transition-shadow hover:shadow-md">
          <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 flex items-center justify-center text-[#1976D2] dark:text-blue-400">
            <BookOpen size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-1">
              Cours en cours
            </span>
            {currentSlot ? (
              <>
                <h5 className="text-sm font-bold text-gray-800 dark:text-gray-200 truncate">{currentSlot.subjectName}</h5>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate">
                  {currentSlot.startTime} - {currentSlot.endTime}
                  {currentSlot.teacherName && <span className="opacity-75"> • {currentSlot.teacherName}</span>}
                </p>
              </>
            ) : (
              <h5 className="text-sm font-medium text-gray-400 dark:text-gray-500 italic">Pas de cours actuellement</h5>
            )}
          </div>
        </div>

        {/* Prochain cours */}
        <div className="bg-gray-50 dark:bg-[#161B22]/50 border border-gray-200 dark:border-gray-800/60 rounded-2xl p-4 flex items-center gap-4 transition-colors">
          <div className="w-12 h-12 shrink-0 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-500">
            <ArrowRight size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-1">
              Prochain bloc
            </span>
            {nextSlot ? (
              <>
                <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 truncate">{nextSlot.subjectName}</h5>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate">{nextSlot.startTime} - {nextSlot.endTime}</p>
              </>
            ) : (
              <h5 className="text-sm font-medium text-gray-400 dark:text-gray-500 italic">Fin des cours pour aujourd'hui</h5>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
