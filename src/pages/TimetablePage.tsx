import { useState, useEffect } from 'react';
import { collection, onSnapshot, addDoc, setDoc, doc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { useToast } from '../contexts/ToastContext';
import { Calendar, Plus, Pencil, X, Clock, AlertTriangle, ChevronRight, CheckCircle2 } from 'lucide-react';
import type { TimetableSlot, AssessmentEvent } from '../components/types';
import { IVORIAN_CURRICULUM } from '../utils/curriculum';
import { TimetableBottomSheet } from '../components/TimetableBottomSheet';

const DAYS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'] as const;
type Day = typeof DAYS[number];

function getSubjectColor(subjectId: string): string {
  for (const series of Object.values(IVORIAN_CURRICULUM)) {
    for (const subject of series) {
      if (subject.id === subjectId) return subject.color;
    }
  }
  return '#64748b';
}

const SUBJECTS = [
  { id: 'maths', name: 'Mathématiques' },
  { id: 'pc', name: 'Physique-Chimie' },
  { id: 'svt', name: 'SVT' },
  { id: 'philo', name: 'Philosophie' },
  { id: 'français', name: 'Français' },
  { id: 'anglais', name: 'Anglais' },
  { id: 'hg', name: 'Histoire-Géographie' },
];

const TYPE_LABELS: Record<string, string> = {
  INTERRO: 'Interro',
  DEVOIR: 'Devoir',
  BAC_BLANC: 'Bac Blanc',
};

const TYPE_COLORS: Record<string, string> = {
  INTERRO: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  DEVOIR: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  BAC_BLANC: 'bg-red-500/10 text-red-400 border-red-500/30',
};

export const TimetablePage = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { theme } = useTheme();
  const { addToast } = useToast();
  const dark = theme === 'dark';

  const currentDayIdx = new Date().getDay();
  const initialDay = currentDayIdx === 0 ? 'Lundi' : DAYS[currentDayIdx - 1];

  const [selectedDay, setSelectedDay] = useState<Day>(initialDay as Day);
  const [slots, setSlots] = useState<TimetableSlot[]>([]);
  const [assessments, setAssessments] = useState<AssessmentEvent[]>([]);
  const [editSubject, setEditSubject] = useState<{ id: string; name: string; color: string } | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [fabSubjectId, setFabSubjectId] = useState('maths');
  const [fabSubjectName, setFabSubjectName] = useState('Mathématiques');
  const [fabType, setFabType] = useState<'INTERRO' | 'DEVOIR' | 'BAC_BLANC'>('INTERRO');
  const [fabDate, setFabDate] = useState('');
  const [fabTitle, setFabTitle] = useState('');

  useEffect(() => {
    if (!currentUser) return;
    const unsub = onSnapshot(
      collection(db, 'users', currentUser.uid, 'timetable'),
      snap => setSlots(snap.docs.map(snapDoc => snapDoc.data() as TimetableSlot))
    );
    return () => unsub();
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser) return;
    const unsub = onSnapshot(
      collection(db, 'users', currentUser.uid, 'assessments'),
      snap => setAssessments(snap.docs.map(snapDoc => snapDoc.data() as AssessmentEvent))
    );
    return () => unsub();
  }, [currentUser]);

  const handleSaveSlot = async (data: {
    dayOfWeek: string;
    startTime: string;
    endTime: string;
    teacherName: string;
    duplicateTo?: string[];
  }) => {
    if (!currentUser || !editSubject) return;
    const allDays = [data.dayOfWeek, ...(data.duplicateTo ?? [])];
    for (const day of allDays) {
      const slotId = `${day}-${data.startTime.replace(':', '')}`;
      await setDoc(doc(db, 'users', currentUser.uid, 'timetable', slotId), {
        id: slotId, dayOfWeek: day, startTime: data.startTime, endTime: data.endTime,
        subjectId: editSubject.id, subjectName: editSubject.name,
        teacherName: data.teacherName || null
      });
    }
    addToast({ type: 'success', title: 'Cours mis à jour', message: `${editSubject.name} enregistré.` });
    setEditSubject(null);
  };

  const handleSaveAssessment = async () => {
    if (!currentUser || !fabDate) return;
    const now = Date.now();
    await addDoc(collection(db, 'users', currentUser.uid, 'assessments'), {
      id: `assessment_${now}`,
      title: fabTitle || `${TYPE_LABELS[fabType]} ${fabSubjectName}`,
      type: fabType,
      subjectId: fabSubjectId,
      subjectName: fabSubjectName,
      date: fabDate,
      reminderEnabled: false,
      status: 'UPCOMING',
      createdAt: now
    });
    addToast({ type: 'success', title: 'Devoir ajouté', message: `${fabSubjectName} le ${fabDate}.` });
    setShowAddForm(false);
    setFabDate('');
    setFabTitle('');
  };

  const todayStr = new Date().toISOString().split('T')[0];
  const sortedAssessments = [...assessments].sort((a, b) => a.date.localeCompare(b.date));
  const slotsByDay = (day: Day) =>
    [...slots].filter(s => s.dayOfWeek === day).sort((a, b) => a.startTime.localeCompare(b.startTime));

  const nextMajorAssessment = sortedAssessments.find(a => a.date >= todayStr && (a.type === 'DEVOIR' || a.type === 'BAC_BLANC'));
  let daysUntilNext = -1;
  if (nextMajorAssessment) {
    const diffTime = new Date(nextMajorAssessment.date).getTime() - new Date(todayStr).getTime();
    daysUntilNext = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  const pendingAssessments = sortedAssessments.filter(a => a.date < todayStr && a.status === 'UPCOMING');

  const handleMarkAsDone = async (assessmentId: string) => {
    if (!currentUser) return;
    await updateDoc(doc(db, 'users', currentUser.uid, 'assessments', assessmentId), {
      status: 'SUCCESS'
    });
    addToast({ type: 'success', title: 'C\'est noté !', message: 'Pense à mettre à jour ton simulateur.' });
  };

  return (
    <div className="space-y-8 px-4 md:px-6 lg:px-8 pt-6 pb-24 font-poppins max-w-7xl mx-auto">
      {/* Hero Banner avec dégradé EDUCTOME */}
      <div className="relative bg-gradient-to-r from-eductome-marine to-eductome-sky rounded-2xl p-6 md:p-8 overflow-hidden shadow-lg mb-8 animate-in fade-in slide-in-from-top-4 duration-500 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 -mb-12 w-32 h-32 rounded-full bg-white opacity-10 pointer-events-none"></div>
        
        <div className="relative z-10 text-white flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm shrink-0 shadow-sm">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-playfair font-bold">
              Mon Emploi du Temps
            </h1>
          </div>
          <p className="text-blue-100 text-sm md:text-base max-w-lg mt-2">
            Organise tes journées, programme tes révisions et sois prêt pour chaque évaluation.
          </p>
        </div>

        {nextMajorAssessment && (
          <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex flex-row items-center gap-4 shadow-sm w-full md:w-auto shrink-0">
            <div className="bg-white/20 p-2.5 rounded-lg shrink-0 hidden sm:block">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-blue-100 font-bold uppercase tracking-wider mb-0.5">Prochain défi</p>
              <p className="text-sm md:text-base font-bold text-white leading-tight truncate max-w-[160px] md:max-w-[200px]" title={`${TYPE_LABELS[nextMajorAssessment.type]} de ${nextMajorAssessment.subjectName}`}>
                {TYPE_LABELS[nextMajorAssessment.type]} - {nextMajorAssessment.subjectName}
              </p>
            </div>
            <div className="bg-white text-blue-600 px-4 py-2 rounded-lg font-black text-center shrink-0 shadow-sm">
              <span className="text-lg md:text-xl block leading-none">{daysUntilNext}</span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-widest mt-0.5 block">Jours</span>
            </div>
          </div>
        )}
      </div>



      {/* NOUVEAU : Le Pont "Calendrier ➡️ Notes" (Action Requise) */}
      {pendingAssessments.length > 0 && (
        <div className="space-y-3">
          {pendingAssessments.map(assessment => (
            <div key={assessment.id} className="bg-orange-50 border border-orange-200 dark:bg-orange-900/20 dark:border-orange-800/50 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-orange-700 dark:text-orange-400 text-sm">
                    Comment s'est passé ton {TYPE_LABELS[assessment.type]} de {assessment.subjectName} ?
                  </h4>
                  <p className="text-xs text-orange-600/80 dark:text-orange-300/80 mt-1">
                    C'était le {new Date(assessment.date).toLocaleDateString('fr-FR')}. Mets à jour tes notes pour voir si tu as atteint ton objectif !
                  </p>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <button 
                  onClick={() => handleMarkAsDone(assessment.id)}
                  className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-gray-50 flex items-center gap-1 transition-colors"
                >
                  <CheckCircle2 size={14} /> Ignorer
                </button>
                <button 
                  onClick={() => {
                    handleMarkAsDone(assessment.id);
                    navigate('/dashboard/grades');
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors"
                >
                  Saisir ma note <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Section 1 — Planning Mobile-First (Day Picker) */}
      <div className={`${dark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-2xl border shadow-sm overflow-hidden flex flex-col md:flex-row`}>
        {/* Sélecteur de jour */}
        <div className={`md:w-64 shrink-0 flex flex-row md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-r ${dark ? 'border-gray-700 bg-gray-900/30' : 'border-gray-100 bg-gray-50/50'} p-2 md:p-4 gap-2 custom-scrollbar`}>
          {DAYS.map(day => {
            const isActive = selectedDay === day;
            const count = slotsByDay(day).length;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`flex-shrink-0 flex items-center justify-between px-4 md:px-4 py-3 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-[#1A3557] text-white shadow-md font-bold' 
                    : `hover:bg-gray-200 dark:hover:bg-gray-700 font-medium ${dark ? 'text-gray-400' : 'text-gray-600'}`
                }`}
              >
                <span>{day}</span>
                {count > 0 && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Cours du jour sélectionné */}
        <div className="flex-1 p-4 md:p-6 min-h-[300px]">
          <div className="flex items-center justify-between mb-6">
            <h2 className={`font-bold text-lg ${dark ? 'text-white' : 'text-gray-900'}`}>Programme du {selectedDay}</h2>
            <span className="text-xs text-blue-500 bg-blue-50 dark:bg-blue-900/20 px-2.5 py-1 rounded-md font-bold">
              {slotsByDay(selectedDay).length} cours
            </span>
          </div>

          <div className="space-y-3">
            {slotsByDay(selectedDay).length === 0 ? (
              <div className={`text-center py-12 border-2 border-dashed rounded-xl ${dark ? 'border-gray-700 text-gray-500' : 'border-gray-200 text-gray-400'}`}>
                <Calendar className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="font-medium text-sm">Aucun cours programmé ce jour</p>
              </div>
            ) : (
              slotsByDay(selectedDay).map(slot => (
                <div
                  key={slot.id}
                  className={`group flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl border transition-all hover:shadow-md ${dark ? 'bg-gray-900/50 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-100 hover:border-gray-200'}`}
                >
                  <div className="flex flex-col shrink-0 min-w-[100px]">
                    <span className={`text-sm font-bold ${dark ? 'text-gray-300' : 'text-gray-700'}`}>{slot.startTime}</span>
                    <span className={`text-xs ${dark ? 'text-gray-500' : 'text-gray-400'}`}>{slot.endTime}</span>
                  </div>
                  
                  <div className="w-1.5 h-12 rounded-full hidden sm:block shrink-0" style={{ backgroundColor: getSubjectColor(slot.subjectId) }} />
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full sm:hidden" style={{ backgroundColor: getSubjectColor(slot.subjectId) }} />
                      <h4 className={`font-bold text-base ${dark ? 'text-white' : 'text-gray-900'}`}>{slot.subjectName}</h4>
                    </div>
                    {slot.teacherName && (
                      <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{slot.teacherName}</p>
                    )}
                  </div>
                  
                  <div className="shrink-0 pt-2 sm:pt-0">
                    <button
                      onClick={() => setEditSubject({
                        id: slot.subjectId,
                        name: slot.subjectName,
                        color: getSubjectColor(slot.subjectId)
                      })}
                      className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-lg transition-colors flex items-center gap-2 text-xs font-bold w-full sm:w-auto justify-center"
                    >
                      <Pencil size={14} /> <span className="sm:hidden">Modifier</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Section 2 — Devoirs & Interros */}
      <div className={`${dark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-2xl border shadow-sm`}>
        <div className={`px-6 py-4 border-b ${dark ? 'border-gray-700' : 'border-gray-100'}`}>
          <h2 className={`font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>Devoirs & Interros Programmés</h2>
          <p className={`text-xs mt-0.5 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
            Triés par date · passés grisés
          </p>
        </div>

        {sortedAssessments.length === 0 ? (
          <div className={`text-center py-14 px-4 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
            <Calendar className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="font-medium text-sm">Aucun devoir programmé</p>
            <p className="text-xs mt-1 opacity-75">Utilise le bouton + pour ajouter un devoir ou une interro.</p>
          </div>
        ) : (
          <div className={`divide-y ${dark ? 'divide-gray-700/50' : 'divide-gray-100'}`}>
            {sortedAssessments.map(assessment => {
              const isPast = assessment.date < todayStr;
              const isSuccess = assessment.status === 'SUCCESS';
              const isFailed = assessment.status === 'FAILED';
              return (
                <div
                  key={assessment.id}
                  className={`px-6 py-4 flex items-center gap-4 transition-opacity ${isPast ? 'opacity-50' : ''}`}
                >
                  <div
                    className="w-1 self-stretch rounded-full shrink-0"
                    style={{ backgroundColor: getSubjectColor(assessment.subjectId) }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${getSubjectColor(assessment.subjectId)}20`,
                          color: getSubjectColor(assessment.subjectId)
                        }}
                      >
                        {assessment.subjectName}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${TYPE_COLORS[assessment.type] ?? TYPE_COLORS.INTERRO}`}>
                        {TYPE_LABELS[assessment.type] ?? assessment.type}
                      </span>
                      {isSuccess && (
                        <span className="text-[10px] font-bold text-emerald-400">✅ Réussi</span>
                      )}
                      {isFailed && (
                        <span className="text-[10px] font-bold text-red-400">❌ À revoir</span>
                      )}
                    </div>
                    <h4 className={`text-sm font-semibold mt-1 truncate ${dark ? 'text-white' : 'text-gray-900'}`}>
                      {assessment.title}
                    </h4>
                    {assessment.reviewComment && (
                      <p className={`text-xs mt-0.5 truncate ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                        Notion : {assessment.reviewComment}
                      </p>
                    )}
                  </div>
                  <div className="shrink-0 text-right">
                    <span className={`text-xs font-bold ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {new Date(assessment.date + 'T00:00:00').toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* FAB */}
      <button
        onClick={() => setShowAddForm(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#1A3557] hover:bg-[#1A3557]/90 text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-105"
        title="Ajouter un devoir / interro"
      >
        <Plus size={24} />
      </button>

      {/* Add Assessment Modal */}
      {showAddForm && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4">
          <div className="w-full max-w-sm bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Ajouter un devoir / interro</h3>
              <button onClick={() => setShowAddForm(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-slate-300 transition-colors">
                <X size={20} />
              </button>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 dark:text-slate-400 block mb-1">Matière</label>
              <select
                value={fabSubjectId}
                onChange={e => {
                  const subj = SUBJECTS.find(s => s.id === e.target.value);
                  setFabSubjectId(e.target.value);
                  setFabSubjectName(subj?.name ?? e.target.value);
                }}
                className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl py-2.5 px-3 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-blue-500"
              >
                {SUBJECTS.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 dark:text-slate-400 block mb-1">Type</label>
              <select
                value={fabType}
                onChange={e => setFabType(e.target.value as 'INTERRO' | 'DEVOIR' | 'BAC_BLANC')}
                className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl py-2.5 px-3 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-blue-500"
              >
                <option value="INTERRO">Interro</option>
                <option value="DEVOIR">Devoir</option>
                <option value="BAC_BLANC">Bac Blanc</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 dark:text-slate-400 block mb-1">Titre (optionnel)</label>
              <input
                type="text"
                placeholder="Ex: Chapitre 3 Limites"
                value={fabTitle}
                onChange={e => setFabTitle(e.target.value)}
                className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl py-2.5 px-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 dark:text-slate-400 block mb-1">Date</label>
              <input
                type="date"
                value={fabDate}
                onChange={e => setFabDate(e.target.value)}
                className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl py-2.5 px-3 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              onClick={handleSaveAssessment}
              disabled={!fabDate}
              className="w-full bg-blue-600 disabled:opacity-40 text-white font-bold py-3 rounded-xl text-sm transition-all hover:bg-blue-700"
            >
              Enregistrer
            </button>
          </div>
        </div>
      )}

      {editSubject && (
        <TimetableBottomSheet
          isOpen={true}
          onClose={() => setEditSubject(null)}
          subjectName={editSubject.name}
          subjectId={editSubject.id}
          onSave={handleSaveSlot}
        />
      )}
    </div>
  );
};
