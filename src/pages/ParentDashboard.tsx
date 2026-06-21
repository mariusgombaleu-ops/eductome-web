import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getLevelFromXp } from '../contexts/UserContext';
import { Trophy, Flame, BookOpen, Star, ShieldCheck } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface StudentData {
  pseudo: string;
  xp: number;
  currentStreak: number;
}





function StatCard({ icon, label, value, small, palette }: { icon: React.ReactNode; label: string; value: string; small?: boolean, palette: any }) {
  return (
    <div className="rounded-[24px] p-4 shadow-sm border flex flex-col gap-2 transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
      <div className="flex items-center gap-1.5 text-xs font-medium transition-colors" style={{ color: palette.ink3 }}>
        {icon}
        <span>{label}</span>
      </div>
      <span className={`font-bold leading-tight transition-colors ${small ? 'text-sm' : 'text-lg'}`} style={{ color: palette.ink }}>{value}</span>
    </div>
  );
}

function Section({ title, icon, children, palette }: { title: string; icon: React.ReactNode; children: React.ReactNode, palette: any }) {
  return (
    <div className="rounded-[24px] shadow-sm border p-5 transition-colors" style={{ background: palette.bg, borderColor: palette.line }}>
      <h2 className="text-base font-bold flex items-center gap-2 mb-4 transition-colors" style={{ color: palette.ink }}>
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
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const { palette } = useTheme();

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
        });

        // SÉCURITÉ : purchasedReferences supprimé de la réponse publique (info sensible)
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
      <div className="min-h-screen flex items-center justify-center transition-colors duration-300" style={{ background: palette.bg2 }}>
        <div className="w-10 h-10 border-4 rounded-full animate-spin transition-colors" style={{ borderColor: `${palette.line}`, borderTopColor: palette.accent }} />
      </div>
    );
  }

  if (notFound || !student) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-300" style={{ background: palette.bg }}>
        <Trophy className="w-16 h-16 mb-4 transition-colors" style={{ color: palette.ink3 }} />
        <h1 className="text-2xl font-bold mb-2 transition-colors" style={{ color: palette.ink }}>Profil introuvable</h1>
        <p className="text-center max-w-sm text-sm transition-colors" style={{ color: palette.ink2 }}>
          Ce lien ne correspond à aucun élève EDUCTOME. Demandez à votre enfant de vous partager un nouveau lien depuis son profil.
        </p>
        <Link
          to="/"
          className="mt-6 px-6 py-2 rounded-[24px] text-sm font-medium transition-colors hover:opacity-80"
          style={{ background: palette.accent, color: '#fff' }}
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



  return (
    <div className="min-h-screen font-poppins transition-colors duration-300" style={{ background: palette.bg2 }}>
      {/* Header */}
      <div className="transition-colors duration-300" style={{ background: palette.accent }}>
        <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
          <div className="flex items-center gap-2 text-white/70 text-xs font-medium mb-6 uppercase tracking-wider">
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
              <p className="text-white/80 text-sm mt-0.5">
                Niveau {level.level} &middot; {level.title}
              </p>
            </div>
          </div>

          {/* XP progress */}
          <div className="mt-6 bg-white/10 rounded-xl p-4 border border-white/10">
            <div className="flex justify-between items-center mb-2 text-sm text-white">
              <span className="font-semibold">{level.title}</span>
              <span className="text-white/80">
                {student.xp}{level.maxXp ? ` / ${level.maxXp}` : ''} XP
              </span>
            </div>
            <div className="h-2.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-700 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                style={{ width: `${xpProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-5">
        {/* Stat cards */}
        <div className="grid grid-cols-2 gap-3">
          <StatCard
            icon={<Flame className="w-4 h-4 text-orange-500" />}
            label="Série actuelle"
            value={`${student.currentStreak} j`}
            palette={palette}
          />
          <StatCard
            icon={<Star className="w-4 h-4 text-yellow-500" />}
            label="Points XP"
            value={`${student.xp}`}
            palette={palette}
          />
        </div>

        {/* Section info — pas d'affichage des tomes débloqués (donnée sensible) */}
        <Section title="Activité d'apprentissage" icon={<BookOpen className="w-5 h-5" style={{ color: palette.accent }} />} palette={palette}>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-dashed" style={{ borderColor: palette.line }}>
              <span className="text-sm transition-colors" style={{ color: palette.ink2 }}>Niveau actuel</span>
              <span className="text-sm font-bold transition-colors" style={{ color: palette.ink }}>{level.title}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-dashed" style={{ borderColor: palette.line }}>
              <span className="text-sm transition-colors" style={{ color: palette.ink2 }}>Points d'expérience</span>
              <span className="text-sm font-bold transition-colors" style={{ color: palette.ink }}>{student.xp} XP</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm transition-colors" style={{ color: palette.ink2 }}>Jours consécutifs</span>
              <span className="text-sm font-bold transition-colors" style={{ color: palette.ink }}>{student.currentStreak} jour{student.currentStreak > 1 ? 's' : ''}</span>
            </div>
          </div>
        </Section>

        {/* CTA — justify buying the physical book */}
        <div className="rounded-[28px] p-6 text-white text-center transition-colors" style={{ background: palette.accent }}>
          <p className="text-white/80 text-xs uppercase tracking-wider mb-1">Offrir un cadeau utile</p>
          <h2 className="text-xl font-bold mb-1">Les Clés Maths — Livre Physique</h2>
          <p className="text-white/90 text-sm mb-5 max-w-xs mx-auto">
            Un livre papier avec accès numérique complet. Le meilleur soutien que vous pouvez offrir à votre enfant pour le BAC.
          </p>
          <a
            href="/collections/cles-maths"
            className="inline-block bg-white font-bold px-6 py-2.5 rounded-[24px] hover:opacity-90 transition-all text-sm shadow-md"
            style={{ color: palette.accent }}
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
