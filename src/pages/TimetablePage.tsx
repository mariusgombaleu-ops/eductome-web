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
  const { palette } = useTheme();
  const { addToast } = useToast();

  const currentDayIdx = new Date().getDay();
  const initialDay = currentDayIdx === 0 ? 'Lundi' : DAYS[currentDayIdx - 1];

  const [selectedDay, setSelectedDay] = useState<Day>(initialDay as Day);
  const [slots, setSlots] = useState<TimetableSlot[]>([]);
  const [assessments, setAssessments] = useState<AssessmentEvent[]>([]);
  const [editSubject, setEditSubject] = useState<{ id: string; name: string; color: string } | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [activeTab, setActiveTab] = useState<'COURS' | 'DEVOIR' | 'INTERRO' | 'BAC_BLANC'>('COURS');
  
  // States for Cours
  const [courseSubjectId, setCourseSubjectId] = useState('maths');
  const [courseSubjectName, setCourseSubjectName] = useState('Mathématiques');
  const [courseDayOfWeek, setCourseDayOfWeek] = useState<Day>('Lundi');
  const [courseStartTime, setCourseStartTime] = useState('08:00');
  const [courseEndTime, setCourseEndTime] = useState('10:00');
  const [courseTeacherName, setCourseTeacherName] = useState('');

  // States for Assessment
  const [fabSubjectId, setFabSubjectId] = useState('maths');
  const [fabSubjectName, setFabSubjectName] = useState('Mathématiques');
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
    const type = activeTab === 'COURS' ? 'INTERRO' : activeTab; // Safety check
    await addDoc(collection(db, 'users', currentUser.uid, 'assessments'), {
      id: `assessment_${now}`,
      title: fabTitle || `${TYPE_LABELS[type] || type} ${fabSubjectName}`,
      type: type,
      subjectId: fabSubjectId,
      subjectName: fabSubjectName,
      date: fabDate,
      reminderEnabled: false,
      status: 'UPCOMING',
      createdAt: now
    });
    addToast({ type: 'success', title: 'Évaluation ajoutée', message: `${fabSubjectName} le ${fabDate}.` });
    setShowAddForm(false);
    setFabDate('');
    setFabTitle('');
  };

  const handleSaveCourse = async () => {
    if (!currentUser) return;
    const slotId = `${courseDayOfWeek}-${courseStartTime.replace(':', '')}`;
    await setDoc(doc(db, 'users', currentUser.uid, 'timetable', slotId), {
      id: slotId, 
      dayOfWeek: courseDayOfWeek, 
      startTime: courseStartTime, 
      endTime: courseEndTime,
      subjectId: courseSubjectId, 
      subjectName: courseSubjectName,
      teacherName: courseTeacherName || null
    });
    addToast({ type: 'success', title: 'Cours ajouté', message: `${courseSubjectName} ajouté au ${courseDayOfWeek}.` });
    setShowAddForm(false);
    setCourseTeacherName('');
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
    <div className="space-y-8 px-4 md:px-6 lg:px-8 pt-6 pb-24 font-poppins max-w-7xl mx-auto transition-colors">
      {/* Hero Banner avec dégradé EDUCTOME */}
      <div className="relative bg-gradient-to-r from-[#1A3557] to-[#1976D2] rounded-[28px] p-6 md:p-8 overflow-hidden shadow-lg mb-8 animate-in fade-in slide-in-from-top-4 duration-500 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 -mb-12 w-32 h-32 rounded-full bg-white opacity-10 pointer-events-none"></div>
        
        <div className="relative z-10 text-white flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-white/20 p-2.5 rounded-[12px] backdrop-blur-sm shrink-0 shadow-sm">
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
          <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-[16px] p-4 flex flex-row items-center gap-4 shadow-sm w-full md:w-auto shrink-0">
            <div className="bg-white/20 p-2.5 rounded-[12px] shrink-0 hidden sm:block">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-blue-100 font-bold uppercase tracking-wider mb-0.5">Prochain défi</p>
              <p className="text-sm md:text-base font-bold text-white leading-tight truncate max-w-[160px] md:max-w-[200px]" title={`${TYPE_LABELS[nextMajorAssessment.type]} de ${nextMajorAssessment.subjectName}`}>
                {TYPE_LABELS[nextMajorAssessment.type]} - {nextMajorAssessment.subjectName}
              </p>
            </div>
            <div className="bg-white px-4 py-2 rounded-[12px] font-black text-center shrink-0 shadow-sm" style={{ color: palette.accent }}>
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
            <div key={assessment.id} className="rounded-[16px] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border transition-colors" style={{ background: '#f9731610', borderColor: '#f9731630' }}>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-orange-500 text-sm">
                    Comment s'est passé ton {TYPE_LABELS[assessment.type]} de {assessment.subjectName} ?
                  </h4>
                  <p className="text-xs text-orange-500/80 mt-1">
                    C'était le {new Date(assessment.date).toLocaleDateString('fr-FR')}. Mets à jour tes notes pour voir si tu as atteint ton objectif !
                  </p>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <button 
                  onClick={() => handleMarkAsDone(assessment.id)}
                  className="border px-3 py-1.5 rounded-[12px] text-xs font-bold transition-colors hover:bg-black/5 flex items-center gap-1"
                  style={{ background: palette.bg, color: palette.ink, borderColor: palette.line }}
                >
                  <CheckCircle2 size={14} /> Ignorer
                </button>
                <button 
                  onClick={() => {
                    handleMarkAsDone(assessment.id);
                    navigate('/dashboard/grades');
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-[12px] text-xs font-bold flex items-center gap-1 transition-colors"
                >
                  Saisir ma note <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Section 1 — Planning Mobile-First (Day Picker) */}
      <div className="rounded-[28px] border shadow-sm overflow-hidden flex flex-col md:flex-row transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
        {/* Sélecteur de jour */}
        <div className="md:w-64 shrink-0 flex flex-row md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-r p-2 md:p-4 gap-2 custom-scrollbar transition-colors" style={{ borderColor: palette.line, background: palette.bg2 }}>
          {DAYS.map(day => {
            const isActive = selectedDay === day;
            const count = slotsByDay(day).length;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className="flex-shrink-0 flex items-center justify-between px-4 md:px-4 py-3 rounded-[16px] transition-all"
                style={isActive ? { background: palette.accent, color: 'white', fontWeight: 'bold' } : { color: palette.ink2, fontWeight: '500' }}
              >
                <span>{day}</span>
                {count > 0 && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full" style={isActive ? { background: 'rgba(255,255,255,0.2)', color: 'white' } : { background: palette.bg, color: palette.ink }}>
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
            <h2 className="font-bold text-lg" style={{ color: palette.ink }}>Programme du {selectedDay}</h2>
            <span className="text-xs px-2.5 py-1 rounded-[8px] font-bold" style={{ color: palette.accent, background: `${palette.accent}20` }}>
              {slotsByDay(selectedDay).length} cours
            </span>
          </div>

          <div className="space-y-3">
            {slotsByDay(selectedDay).length === 0 ? (
              <div className="text-center py-12 border-2 border-dashed rounded-[16px] transition-colors" style={{ borderColor: palette.line, color: palette.ink2 }}>
                <Calendar className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="font-medium text-sm">Aucun cours programmé ce jour</p>
              </div>
            ) : (
              slotsByDay(selectedDay).map(slot => (
                <div
                  key={slot.id}
                  className="group flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-[16px] border transition-all hover:shadow-md hover:-translate-y-0.5"
                  style={{ background: palette.bg, borderColor: palette.line }}
                >
                  <div className="flex flex-col shrink-0 min-w-[100px]">
                    <span className="text-sm font-bold" style={{ color: palette.ink }}>{slot.startTime}</span>
                    <span className="text-xs" style={{ color: palette.ink2 }}>{slot.endTime}</span>
                  </div>
                  
                  <div className="w-1.5 h-12 rounded-full hidden sm:block shrink-0" style={{ backgroundColor: getSubjectColor(slot.subjectId) }} />
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full sm:hidden" style={{ backgroundColor: getSubjectColor(slot.subjectId) }} />
                      <h4 className="font-bold text-base" style={{ color: palette.ink }}>{slot.subjectName}</h4>
                    </div>
                    {slot.teacherName && (
                      <p className="text-sm" style={{ color: palette.ink2 }}>{slot.teacherName}</p>
                    )}
                  </div>
                  
                  <div className="shrink-0 pt-2 sm:pt-0">
                    <button
                      onClick={() => setEditSubject({
                        id: slot.subjectId,
                        name: slot.subjectName,
                        color: getSubjectColor(slot.subjectId)
                      })}
                      className="p-2 rounded-[12px] transition-colors flex items-center gap-2 text-xs font-bold w-full sm:w-auto justify-center opacity-60 hover:opacity-100"
                      style={{ background: palette.bg2, color: palette.ink }}
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
      <div className="rounded-[28px] border shadow-sm transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
        <div className="px-6 py-4 border-b transition-colors" style={{ borderColor: palette.line }}>
          <h2 className="font-bold" style={{ color: palette.ink }}>Devoirs & Interros Programmés</h2>
          <p className="text-xs mt-0.5" style={{ color: palette.ink2 }}>
            Triés par date · passés grisés
          </p>
        </div>

        {sortedAssessments.length === 0 ? (
          <div className="text-center py-14 px-4" style={{ color: palette.ink2 }}>
            <Calendar className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="font-medium text-sm">Aucun devoir programmé</p>
            <p className="text-xs mt-1 opacity-75">Utilise le bouton + pour ajouter un devoir ou une interro.</p>
          </div>
        ) : (
          <div className="divide-y transition-colors" style={{ borderTopColor: palette.line }}>
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
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-[8px] border ${TYPE_COLORS[assessment.type] ?? TYPE_COLORS.INTERRO}`}>
                        {TYPE_LABELS[assessment.type] ?? assessment.type}
                      </span>
                      {isSuccess && (
                        <span className="text-[10px] font-bold text-emerald-400">✅ Réussi</span>
                      )}
                      {isFailed && (
                        <span className="text-[10px] font-bold text-red-400">❌ À revoir</span>
                      )}
                    </div>
                    <h4 className="text-sm font-semibold mt-1 truncate" style={{ color: palette.ink }}>
                      {assessment.title}
                    </h4>
                    {assessment.reviewComment && (
                      <p className="text-xs mt-0.5 truncate" style={{ color: palette.ink2 }}>
                        Notion : {assessment.reviewComment}
                      </p>
                    )}
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="text-xs font-bold" style={{ color: palette.ink2 }}>
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

      {/* Add Modal */}
      {showAddForm && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4">
          <div className="w-full max-w-md border rounded-[28px] p-6 space-y-5 shadow-2xl transition-colors max-h-[90vh] overflow-y-auto custom-scrollbar" style={{ background: palette.bg, borderColor: palette.line }}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold" style={{ color: palette.ink }}>Ajouter à l'agenda</h3>
              <button onClick={() => setShowAddForm(false)} className="transition-colors hover:opacity-100 opacity-60" style={{ color: palette.ink }}>
                <X size={20} />
              </button>
            </div>
            
            {/* Tabs */}
            <div className="flex overflow-x-auto gap-2 pb-2 custom-scrollbar">
              {['COURS', 'DEVOIR', 'INTERRO', 'BAC_BLANC'].map(tab => {
                const isActive = activeTab === tab;
                const label = tab === 'COURS' ? 'Cours' : tab === 'DEVOIR' ? 'Devoir' : tab === 'INTERRO' ? 'Interro' : 'Bac Blanc';
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className="flex-shrink-0 px-3 py-1.5 rounded-[12px] text-xs font-bold transition-all border"
                    style={isActive 
                      ? { background: palette.accent, color: 'white', borderColor: palette.accent } 
                      : { background: palette.bg2, color: palette.ink2, borderColor: palette.line }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {activeTab === 'COURS' ? (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold block mb-1" style={{ color: palette.ink2 }}>Matière</label>
                  <select
                    value={courseSubjectId}
                    onChange={e => {
                      const subj = SUBJECTS.find(s => s.id === e.target.value);
                      setCourseSubjectId(e.target.value);
                      setCourseSubjectName(subj?.name ?? e.target.value);
                    }}
                    className="w-full border rounded-[16px] py-2.5 px-3 text-sm focus:outline-none focus:ring-2 transition-colors"
                    style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink, ['--tw-ring-color' as any]: palette.accent }}
                  >
                    {SUBJECTS.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold block mb-1" style={{ color: palette.ink2 }}>Jour</label>
                  <select
                    value={courseDayOfWeek}
                    onChange={e => setCourseDayOfWeek(e.target.value as Day)}
                    className="w-full border rounded-[16px] py-2.5 px-3 text-sm focus:outline-none focus:ring-2 transition-colors"
                    style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink, ['--tw-ring-color' as any]: palette.accent }}
                  >
                    {DAYS.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold block mb-1" style={{ color: palette.ink2 }}>Heure de début</label>
                    <input
                      type="time"
                      value={courseStartTime}
                      onChange={e => setCourseStartTime(e.target.value)}
                      className="w-full border rounded-[16px] py-2.5 px-3 text-sm focus:outline-none focus:ring-2 transition-colors"
                      style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink, ['--tw-ring-color' as any]: palette.accent }}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold block mb-1" style={{ color: palette.ink2 }}>Heure de fin</label>
                    <input
                      type="time"
                      value={courseEndTime}
                      onChange={e => setCourseEndTime(e.target.value)}
                      className="w-full border rounded-[16px] py-2.5 px-3 text-sm focus:outline-none focus:ring-2 transition-colors"
                      style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink, ['--tw-ring-color' as any]: palette.accent }}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold block mb-1" style={{ color: palette.ink2 }}>Nom du professeur (optionnel)</label>
                  <input
                    type="text"
                    placeholder="Ex: M. Koné"
                    value={courseTeacherName}
                    onChange={e => setCourseTeacherName(e.target.value)}
                    className="w-full border rounded-[16px] py-2.5 px-3 text-sm focus:outline-none focus:ring-2 transition-colors"
                    style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink, ['--tw-ring-color' as any]: palette.accent }}
                  />
                </div>
                <button
                  onClick={handleSaveCourse}
                  className="w-full text-white font-bold py-3 rounded-[16px] text-sm transition-all hover:scale-[1.02] mt-2"
                  style={{ background: palette.accent, boxShadow: `0 4px 14px ${palette.accent}40` }}
                >
                  Ajouter le cours
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold block mb-1" style={{ color: palette.ink2 }}>Matière</label>
                  <select
                    value={fabSubjectId}
                    onChange={e => {
                      const subj = SUBJECTS.find(s => s.id === e.target.value);
                      setFabSubjectId(e.target.value);
                      setFabSubjectName(subj?.name ?? e.target.value);
                    }}
                    className="w-full border rounded-[16px] py-2.5 px-3 text-sm focus:outline-none focus:ring-2 transition-colors"
                    style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink, ['--tw-ring-color' as any]: palette.accent }}
                  >
                    {SUBJECTS.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold block mb-1" style={{ color: palette.ink2 }}>Titre ou instructions (optionnel)</label>
                  <input
                    type="text"
                    placeholder="Ex: Chapitre 3 Limites, Ex 4 page 12"
                    value={fabTitle}
                    onChange={e => setFabTitle(e.target.value)}
                    className="w-full border rounded-[16px] py-2.5 px-3 text-sm focus:outline-none focus:ring-2 transition-colors"
                    style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink, ['--tw-ring-color' as any]: palette.accent }}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold block mb-1" style={{ color: palette.ink2 }}>Date {activeTab === 'DEVOIR' ? 'de rendu' : 'de l\'épreuve'}</label>
                  <input
                    type="date"
                    value={fabDate}
                    onChange={e => setFabDate(e.target.value)}
                    className="w-full border rounded-[16px] py-2.5 px-3 text-sm focus:outline-none focus:ring-2 transition-colors"
                    style={{ background: palette.bg2, borderColor: palette.line, color: palette.ink, ['--tw-ring-color' as any]: palette.accent }}
                  />
                </div>
                <button
                  onClick={handleSaveAssessment}
                  disabled={!fabDate}
                  className="w-full disabled:opacity-40 text-white font-bold py-3 rounded-[16px] text-sm transition-all hover:scale-[1.02] mt-2"
                  style={{ background: palette.accent, boxShadow: `0 4px 14px ${palette.accent}40` }}
                >
                  Enregistrer
                </button>
              </div>
            )}
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
