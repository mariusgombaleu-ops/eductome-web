import React, { useState } from 'react';
import { X, Clock, User, Check, Copy } from 'lucide-react';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  subjectName: string;
  subjectId: string;
  onSave: (data: {
    dayOfWeek: string;
    startTime: string;
    endTime: string;
    teacherName: string;
    duplicateTo?: string[];
  }) => void;
}

export const TimetableBottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  subjectName,
  subjectId,
  onSave,
}) => {
  const [dayOfWeek, setDayOfWeek] = useState<'Lundi' | 'Mardi' | 'Mercredi' | 'Jeudi' | 'Vendredi' | 'Samedi'>('Lundi');
  const [startTime, setStartTime] = useState('08:00');
  const [endTime, setEndTime] = useState('10:00');
  const [teacherName, setTeacherName] = useState('');
  const [showDuplicator, setShowDuplicator] = useState(false);
  const [selectedDuplicateDays, setSelectedDuplicateDays] = useState<string[]>([]);

  if (!isOpen) return null;

  const toggleDuplicateDay = (day: string) => {
    setSelectedDuplicateDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const handleSave = () => {
    onSave({
      dayOfWeek,
      startTime,
      endTime,
      teacherName,
      duplicateTo: selectedDuplicateDays
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />
      
      <div className="relative w-full bg-slate-950 border-t border-slate-800 rounded-t-3xl p-6 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
        <div className="w-12 h-1.5 bg-slate-700 rounded-full mx-auto mb-4" />
        
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="text-xs font-bold tracking-wider text-rose-500 uppercase">Configuration Profil</span>
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mt-0.5">
              Slot : {subjectName}
            </h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-5">
          {/* Choix du jour de cours principal */}
          <div>
            <label className="text-xs font-semibold text-slate-400 block mb-2">Quel jour tu as ce cours ?</label>
            <div className="grid grid-cols-3 gap-2">
              {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'].map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDayOfWeek(d as any)}
                  className={`py-2.5 px-2 text-xs font-bold rounded-xl transition-all border ${
                    dayOfWeek === d
                      ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Heures */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-400 block mb-2 flex items-center gap-1">
                <Clock size={14} className="text-blue-400" /> Début du cours
              </label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3 px-4 text-white font-bold focus:outline-none focus:border-blue-500 text-center"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 block mb-2 flex items-center gap-1">
                <Clock size={14} className="text-rose-400" /> Fin du cours
              </label>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3 px-4 text-white font-bold focus:outline-none focus:border-blue-500 text-center"
              />
            </div>
          </div>

          {/* Enseignant */}
          <div>
            <label className="text-xs font-semibold text-slate-400 block mb-2 flex items-center gap-1">
              <User size={14} className="text-emerald-400" /> Nom du Professeur
            </label>
            <input
              type="text"
              placeholder="Ex: M. Koné"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3 px-4 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Fonctionnalité : Duplication rapide */}
          <div className="border-t border-slate-900 pt-4">
            <button
              type="button"
              onClick={() => setShowDuplicator(!showDuplicator)}
              className="flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300"
            >
              <Copy size={14} />
              {showDuplicator ? "Masquer le duplicateur" : "Tu as ce cours plusieurs fois dans la semaine ?"}
            </button>

            {showDuplicator && (
              <div className="bg-slate-900/50 border border-slate-900 rounded-xl p-3 mt-3 animate-slide-up">
                <p className="text-[11px] text-slate-400 mb-2">Coche les autres jours où tu as ce même prof aux mêmes heures :</p>
                <div className="grid grid-cols-3 gap-2">
                  {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
                    .filter(d => d !== dayOfWeek)
                    .map(d => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => toggleDuplicateDay(d)}
                        className={`py-1.5 px-2 text-[11px] font-semibold rounded-lg border transition-all ${
                          selectedDuplicateDays.includes(d)
                            ? 'bg-emerald-600/20 border-emerald-500 text-emerald-400'
                            : 'bg-slate-950 border-slate-800 text-slate-400'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* Section Conseil EDUCTOME */}
          <div className="bg-blue-950/20 border border-blue-900/40 rounded-xl p-3 text-xs text-blue-400 flex gap-2">
            <span>💡</span>
            <p><strong>Grand Frère te dit :</strong> Une fois ton programme calé, l'application t'enverra un signal fort avant tes devoirs pour réviser les bonnes sections.</p>
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg hover:opacity-90 transition-all flex justify-center items-center gap-2 text-sm"
          >
            <Check size={16} />
            Valider l'enregistrement
          </button>
        </div>
      </div>
    </div>
  );
};