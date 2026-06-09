import React from 'react';
import { BookOpen, AlertTriangle, ArrowRight } from 'lucide-react';
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
    <div className="w-full space-y-4">
      {/* BANDEAU ROUGE ALERTE CRITIQUE : Prochain Combat imminent */}
      {upcomingAssessment && (
        <div className="w-full bg-gradient-to-r from-red-950 to-slate-950 border border-red-900/60 rounded-2xl p-4 flex items-start gap-4 shadow-xl shadow-red-950/10">
          <div className="p-3 bg-red-600 rounded-xl text-white shadow-lg shadow-red-600/20 mt-1">
            <AlertTriangle size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold tracking-widest bg-red-600 text-white px-2 py-0.5 rounded uppercase">
                Combat Éminent
              </span>
              <span className="text-xs text-red-400 font-medium">Échéance : {upcomingAssessment.date}</span>
            </div>
            <h4 className="text-base font-bold text-white mt-1 truncate">
              {upcomingAssessment.subjectName} — {upcomingAssessment.title}
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              💡 <strong>Conseil du Grand Frère :</strong> Beaucoup d'élèves tombent dans le panneau par manque de méthode. Ouvre ton espace d'entraînement pour analyser les points de vigilance.
            </p>
            <button
              onClick={() => onActionClick(upcomingAssessment)}
              className="mt-3 flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 transition-colors"
            >
              Dominer cette notion maintenant <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* BLOC TEMPOREL DE LA JOURNÉE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Cours actuel */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
            <BookOpen size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Cours en cours</span>
            {currentSlot ? (
              <>
                <h5 className="text-sm font-bold text-white mt-0.5 truncate">{currentSlot.subjectName}</h5>
                <p className="text-xs text-slate-400 truncate">{currentSlot.startTime} - {currentSlot.endTime}{currentSlot.teacherName && ` • ${currentSlot.teacherName}`}</p>
              </>
            ) : (
              <h5 className="text-sm font-bold text-slate-400 mt-0.5">Pas de cours actuellement</h5>
            )}
          </div>
        </div>

        {/* Prochain cours */}
        <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400">
            <ArrowRight size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Prochain bloc</span>
            {nextSlot ? (
              <>
                <h5 className="text-sm font-semibold text-slate-300 mt-0.5 truncate">{nextSlot.subjectName}</h5>
                <p className="text-xs text-slate-500 truncate">{nextSlot.startTime} - {nextSlot.endTime}</p>
              </>
            ) : (
              <h5 className="text-sm font-semibold text-slate-500 mt-0.5">Fin des cours pour aujourd'hui</h5>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
