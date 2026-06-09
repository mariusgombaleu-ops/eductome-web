import { useState, useEffect } from 'react';
import { collection, onSnapshot, addDoc, setDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { useToast } from '../contexts/ToastContext';
import { Calendar, Plus, Pencil, X } from 'lucide-react';
import type { TimetableSlot, AssessmentEvent } from '../components/types';
import { TimetableBottomSheet } from '../components/TimetableBottomSheet';
import { IVORIAN_CURRICULUM } from '../utils/curriculum';

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
  const { currentUser } = useAuth();
  const { theme } = useTheme();
  const { addToast } = useToast();
  const dark = theme === 'dark';

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

  return (
    <div className="space-y-8 px-4 md:px-6 lg:px-8 pt-6 pb-24 font-poppins max-w-7xl mx-auto">
      <div className="flex items-center gap-3">
        <Calendar className="w-6 h-6 text-blue-500 shrink-0" />
        <h1 className={`text-2xl font-bold font-playfair ${dark ? 'text-white' : 'text-gray-900'}`}>
          Mon Emploi du Temps
        </h1>
      </div>

      {/* Section 1 — Weekly Schedule Grid */}
      <div className={`${dark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-2xl border shadow-sm overflow-hidden`}>
        <div className={`px-6 py-4 border-b ${dark ? 'border-gray-700' : 'border-gray-100'}`}>
          <h2 className={`font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>Planning de la Semaine</h2>
          <p className={`text-xs mt-0.5 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
            Passe la souris sur un cours pour le modifier.
          </p>
        </div>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-6 min-w-[560px]">
            {DAYS.map(day => (
              <div key={day} className={`border-r last:border-r-0 ${dark ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className={`px-2 py-2 text-center text-[10px] font-bold uppercase tracking-wider border-b ${dark ? 'bg-gray-900/60 border-gray-700 text-gray-400' : 'bg-gray-50 border-gray-100 text-gray-500'}`}>
                  {day}
                </div>
                <div className="p-1.5 space-y-1.5 min-h-[72px]">
                  {slotsByDay(day).length === 0 ? (
                    <div className={`text-center text-xs py-5 ${dark ? 'text-gray-700' : 'text-gray-300'}`}>—</div>
                  ) : (
                    slotsByDay(day).map(slot => (
                      <div
                        key={slot.id}
                        className={`relative group p-2 rounded-lg border text-xs ${dark ? 'bg-gray-900 border-gray-700/80' : 'bg-gray-50 border-gray-200'}`}
                      >
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <div
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: getSubjectColor(slot.subjectId) }}
                          />
                          <span className={`font-bold truncate leading-tight ${dark ? 'text-white' : 'text-gray-900'}`}>
                            {slot.subjectName}
                          </span>
                        </div>
                        <p className={`${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                          {slot.startTime}–{slot.endTime}
                        </p>
                        {slot.teacherName && (
                          <p className={`truncate ${dark ? 'text-gray-600' : 'text-gray-400'}`}>{slot.teacherName}</p>
                        )}
                        <button
                          onClick={() => setEditSubject({
                            id: slot.subjectId,
                            name: slot.subjectName,
                            color: getSubjectColor(slot.subjectId)
                          })}
                          className="mt-1 opacity-0 group-hover:opacity-100 flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-all text-[10px] font-bold"
                        >
                          <Pencil size={10} /> Modifier
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
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
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-105"
        title="Ajouter un devoir / interro"
      >
        <Plus size={24} />
      </button>

      {/* Add Assessment Modal */}
      {showAddForm && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4">
          <div className="w-full max-w-sm bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white">Ajouter un devoir / interro</h3>
              <button onClick={() => setShowAddForm(false)} className="text-slate-400 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 block mb-1">Matière</label>
              <select
                value={fabSubjectId}
                onChange={e => {
                  const subj = SUBJECTS.find(s => s.id === e.target.value);
                  setFabSubjectId(e.target.value);
                  setFabSubjectName(subj?.name ?? e.target.value);
                }}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 px-3 text-white text-sm focus:outline-none focus:border-blue-500"
              >
                {SUBJECTS.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 block mb-1">Type</label>
              <select
                value={fabType}
                onChange={e => setFabType(e.target.value as 'INTERRO' | 'DEVOIR' | 'BAC_BLANC')}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 px-3 text-white text-sm focus:outline-none focus:border-blue-500"
              >
                <option value="INTERRO">Interro</option>
                <option value="DEVOIR">Devoir</option>
                <option value="BAC_BLANC">Bac Blanc</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 block mb-1">Titre (optionnel)</label>
              <input
                type="text"
                placeholder="Ex: Chapitre 3 Limites"
                value={fabTitle}
                onChange={e => setFabTitle(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 px-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 block mb-1">Date</label>
              <input
                type="date"
                value={fabDate}
                onChange={e => setFabDate(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 px-3 text-white text-sm focus:outline-none focus:border-blue-500"
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
