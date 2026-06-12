import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../config/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { getLevelFromXp } from '../contexts/UserContext';
import { Trophy, Flame, BookOpen, Star, Calendar, Target, CheckCircle, Lock, TrendingUp, ShieldCheck } from 'lucide-react';
import type { Achat } from '../types';

interface StudentData {
  pseudo: string;
  xp: number;
  currentStreak: number;
  lastStudyDate: string | null;
  rewardedActions: string[];
  unlockedCourses: string[];
}

interface ExamResult {
  id: string;
  score: number;
  total: number;
  completedAt: any;
}

const TOME_MAP = [
  { id: 't1-limites', name: 'Les Limites', tome: 1 },
  { id: 't2-derivees', name: 'Les Dérivées', tome: 2 },
  { id: 't3-primitives', name: 'Intégrales & Primitives', tome: 3 },
  { id: 't11-eq-diff', name: 'Équations Différentielles', tome: 11 },
];

function formatDate(dateStr: string | null): string {
  if (!dateStr) return '—';
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return dateStr ?? '—';
  }
}

function formatTimestamp(ts: any): string {
  if (!ts) return '—';
  try {
    const d = ts.toDate ? ts.toDate() : new Date(ts);
    return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return '—';
  }
}

function StatCard({ icon, label, value, small }: { icon: React.ReactNode; label: string; value: string; small?: boolean }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col gap-2">
      <div className="flex items-center gap-1.5 text-gray-400 text-xs font-medium">
        {icon}
        <span>{label}</span>
      </div>
      <span className={`font-bold text-[#1A3557] leading-tight ${small ? 'text-sm' : 'text-lg'}`}>{value}</span>
    </div>
  );
}

function Section({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
      <h2 className="text-base font-bold text-[#1A3557] flex items-center gap-2 mb-4">
        {icon}
        {title}
      </h2>
      {children}
    </div>
  );
}

export const ParentDashboard = () => {
  const { studentUid } = useParams<{ studentUid: string }>();
  const [student, setStudent] = useState<StudentData | null>(null);
  const [achats, setAchats] = useState<Achat[]>([]);
  const [examResults, setExamResults] = useState<ExamResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!studentUid) return;

    const fetchData = async () => {
      try {
        // FIX 5 — Accès via Cloud Function proxy (ne retourne que les champs publics sûrs)
        // Remplace l'ancienne lecture Firestore directe qui exposait toutes les données
        const fnUrl = `https://us-central1-eductome-web.cloudfunctions.net/getPublicStudentData?uid=${encodeURIComponent(studentUid)}`;
        const fnResponse = await fetch(fnUrl);

        if (!fnResponse.ok) {
          setNotFound(true);
          setLoading(false);
          return;
        }

        const fnData = await fnResponse.json();

        if (!fnData.success || !fnData.data) {
          setNotFound(true);
          setLoading(false);
          return;
        }

        const d = fnData.data;
        setStudent({
          pseudo: d.pseudo || 'Élève',
          xp: d.xp || 0,
          currentStreak: d.currentStreak || 0,
          lastStudyDate: d.lastStudyDate || null,
          rewardedActions: d.rewardedActions || [],
          unlockedCourses: d.unlockedCourses || [],
        });

        // Achats — used to show owned tomes (reference + type only, no amounts)
        const achatsSnap = await getDocs(
          query(collection(db, 'achats'), where('compte_id', '==', studentUid))
        );
        setAchats(achatsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() } as Achat)));

        // Exam Blanc results — ordered client-side to avoid composite index requirement
        const examSnap = await getDocs(
          query(collection(db, 'examResults'), where('userId', '==', studentUid))
        );
        const exams: ExamResult[] = examSnap.docs
          .map(doc => ({
            id: doc.id,
            score: doc.data().score ?? 0,
            total: doc.data().total ?? 1,
            completedAt: doc.data().completedAt,
          }))
          .sort((a, b) => {
            const ta = a.completedAt?.toDate?.()?.getTime?.() ?? 0;
            const tb = b.completedAt?.toDate?.()?.getTime?.() ?? 0;
            return tb - ta;
          })
          .slice(0, 10);
        setExamResults(exams);
      } catch (err) {
        console.error('ParentDashboard fetch error:', err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [studentUid]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1A3557] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  if (notFound || !student) {
    return (
      <div className="min-h-screen bg-[#1A3557] flex flex-col items-center justify-center text-white p-6">
        <Trophy className="w-16 h-16 text-white/30 mb-4" />
        <h1 className="text-2xl font-bold mb-2">Profil introuvable</h1>
        <p className="text-white/60 text-center max-w-sm text-sm">
          Ce lien ne correspond à aucun élève EDUCTOME. Demandez à votre enfant de vous partager un nouveau lien depuis son profil.
        </p>
        <Link
          to="/"
          className="mt-6 px-6 py-2 bg-white/20 hover:bg-white/30 rounded-xl text-sm font-medium transition-colors"
        >
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  const level = getLevelFromXp(student.xp);
  const xpProgress = level.maxXp
    ? Math.min(100, Math.max(0, ((student.xp - level.minXp) / (level.maxXp - level.minXp)) * 100))
    : 100;

  const quizCount = student.rewardedActions.filter(a => a.startsWith('quiz_')).length;

  const avgExamScore =
    examResults.length > 0
      ? Math.round(examResults.reduce((sum, r) => sum + (r.score / r.total) * 100, 0) / examResults.length)
      : null;

  const unlockedSet = new Set(student.unlockedCourses);
  const ownedRefs = new Set(achats.map(a => a.reference));

  const tomeProgress = TOME_MAP.map(t => ({
    ...t,
    unlocked: unlockedSet.has(t.id) || ownedRefs.has(t.id) || ownedRefs.has('cles-maths'),
  }));

  const unlockedCount = tomeProgress.filter(t => t.unlocked).length;

  return (
    <div className="min-h-screen bg-[#F0F4F8] font-poppins">
      {/* Header */}
      <div className="bg-[#1A3557]">
        <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
          <div className="flex items-center gap-2 text-white/50 text-xs font-medium mb-6 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Espace Parents · EDUCTOME</span>
          </div>

          {/* Student identity */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl font-bold text-white shrink-0">
              {student.pseudo.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">{student.pseudo}</h1>
              <p className="text-white/60 text-sm mt-0.5">
                Niveau {level.level} &middot; {level.title}
              </p>
            </div>
          </div>

          {/* XP progress */}
          <div className="mt-6 bg-white/10 rounded-xl p-4 border border-white/10">
            <div className="flex justify-between items-center mb-2 text-sm text-white">
              <span className="font-semibold">{level.title}</span>
              <span className="text-white/60">
                {student.xp}{level.maxXp ? ` / ${level.maxXp}` : ''} XP
              </span>
            </div>
            <div className="h-2.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-700"
                style={{ width: `${xpProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-5">
        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <StatCard
            icon={<Flame className="w-4 h-4 text-orange-500" />}
            label="Série actuelle"
            value={`${student.currentStreak} j`}
          />
          <StatCard
            icon={<Star className="w-4 h-4 text-yellow-500" />}
            label="Points XP"
            value={`${student.xp}`}
          />
          <StatCard
            icon={<Target className="w-4 h-4 text-blue-500" />}
            label="Quiz faits"
            value={`${quizCount}`}
          />
          <StatCard
            icon={<Calendar className="w-4 h-4 text-green-500" />}
            label="Dernière activité"
            value={formatDate(student.lastStudyDate)}
            small
          />
        </div>

        {/* Tomes section */}
        <Section title={`Tomes débloqués (${unlockedCount}/${TOME_MAP.length})`} icon={<BookOpen className="w-5 h-5 text-[#1A3557]" />}>
          <div className="divide-y divide-gray-100">
            {tomeProgress.map(t => (
              <div key={t.id} className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  {t.unlocked ? (
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  ) : (
                    <Lock className="w-4 h-4 text-gray-300 shrink-0" />
                  )}
                  <span className={`text-sm font-medium ${t.unlocked ? 'text-gray-800' : 'text-gray-400'}`}>
                    Tome {t.tome} — {t.name}
                  </span>
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                    t.unlocked ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {t.unlocked ? 'Débloqué' : 'Non débloqué'}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* Exam Blanc results */}
        {examResults.length > 0 && (
          <Section title="Examens Blancs" icon={<TrendingUp className="w-5 h-5 text-[#1A3557]" />}>
            {avgExamScore !== null && (
              <div className="mb-4 px-4 py-3 bg-blue-50 rounded-xl flex items-center justify-between">
                <span className="text-sm text-blue-600 font-medium">Score moyen</span>
                <span className="font-bold text-blue-800 text-xl">{avgExamScore}%</span>
              </div>
            )}
            <div className="divide-y divide-gray-100">
              {examResults.map(r => {
                const pct = Math.round((r.score / r.total) * 100);
                const color =
                  pct >= 70 ? 'bg-green-100 text-green-700' :
                  pct >= 50 ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700';
                return (
                  <div key={r.id} className="flex items-center justify-between py-3">
                    <span className="text-sm text-gray-500">{formatTimestamp(r.completedAt)}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#1A3557] text-sm">{r.score}/{r.total}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${color}`}>
                        {pct}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Section>
        )}

        {/* CTA — justify buying the physical book */}
        <div className="bg-[#1A3557] rounded-2xl p-6 text-white text-center">
          <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Offrir un cadeau utile</p>
          <h2 className="text-xl font-bold mb-1">Les Clés Maths — Livre Physique</h2>
          <p className="text-white/70 text-sm mb-5 max-w-xs mx-auto">
            Un livre papier avec accès numérique complet. Le meilleur soutien que vous pouvez offrir à votre enfant pour le BAC.
          </p>
          <a
            href="/collections/cles-maths"
            className="inline-block bg-white text-[#1A3557] font-bold px-6 py-2.5 rounded-xl hover:bg-white/90 transition-colors text-sm"
          >
            Voir la collection →
          </a>
        </div>

        {/* Privacy notice */}
        <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 pb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Vue lecture seule partagée par {student.pseudo} · Aucune donnée personnelle sensible affichée</span>
        </div>
      </div>
    </div>
  );
};
