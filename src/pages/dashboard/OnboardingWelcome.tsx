import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import {
  GraduationCap,
  BookOpen,
  Target,
  User,
  School,
  Heart,
  ChevronRight,
  Sparkles,
  LayoutDashboard,
  Trophy,
} from 'lucide-react';
import { Badge } from '../../components/ui/system';

// ─── Confetti Canvas ────────────────────────────────────────────────────────
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
}

const CONFETTI_COLORS = [
  '#D81B60', '#1976D2', '#E65100', '#2E7D32',
  '#FFD700', '#FF6B6B', '#7B2FF7', '#33A6FF',
  '#FF2E84', '#00C9A7',
];

function useConfetti(canvasRef: React.RefObject<HTMLCanvasElement | null>, duration = 4000) {
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  const launch = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: -20 - Math.random() * canvas.height * 0.5,
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 3 + 1.5,
        w: Math.random() * 8 + 3,
        h: Math.random() * 4 + 2,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.2,
        opacity: 1,
      });
    }
    particlesRef.current = particles;

    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.vy += 0.08; // gravity
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        if (elapsed > duration * 0.6) {
          p.opacity = Math.max(0, p.opacity - 0.015);
        }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });

      if (elapsed < duration) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    animRef.current = requestAnimationFrame(animate);
  }, [canvasRef, duration]);

  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return launch;
}

// ─── Helpers ────────────────────────────────────────────────────────────────

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

// ─── Component ──────────────────────────────────────────────────────────────

export const OnboardingWelcome = () => {
  const navigate = useNavigate();
  const { pseudo, sexe, levelString, highschool, favoriteSubject, goal } = useUser();
  const { currentUser } = useAuth();
  const { palette } = useTheme();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const launchConfetti = useConfetti(canvasRef, 2800);

  const [showContent, setShowContent] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false); // 2e bulle : la question d'engagement
  const [ready, setReady] = useState(false); // l'élève a validé son engagement

  const isCollege = levelString === '3eme';
  const examName = isCollege ? 'BEPC' : 'BAC';
  const championWord = sexe === 'M' ? 'Champion' : sexe === 'F' ? 'Championne' : 'Champion(ne)';
  const titleWord = isCollege
    ? sexe === 'M' ? 'futur lycéen' : sexe === 'F' ? 'future lycéenne' : 'futur(e) lycéen(ne)'
    : sexe === 'M' ? 'futur bachelier' : sexe === 'F' ? 'future bachelière' : 'futur(e) bachelier(ère)';

  // Voix « Grand Frère » sobre & éditoriale (cf. ligne éditoriale validée) :
  // affirmations courtes, sans emoji, signature manuscrite plutôt qu'effet sonore.
  const serie = LEVEL_LABELS[levelString] || levelString;
  const objectif = GOAL_LABELS[goal] || 'la réussite';
  const lieu = highschool ? ` au ${highschool.trim()}` : '';
  const greetingLine = `${(pseudo || championWord).trim()}, te voilà chez toi.`;
  const bodyLines = [
    `Tu es ${titleWord} — ${serie}${lieu}, et ton cap est clair : ${objectif} au ${examName}.`,
    `Ici rien n'est laissé au hasard : les cours, les corrections, le rythme de révision, tout est pensé pour t'y mener.`,
    `Je ne te lâche pas en route. Au moindre blocage, je suis là.`,
    `Mais tout commence par toi.`,
  ];
  // Question d'engagement : le bouton « Je suis prêt(e) » y répond en miroir.
  const questionLine = `Alors je te le demande franchement : es-tu prêt(e) à t'engager jusqu'au ${examName} ?`;

  // Guard: if user already completed onboarding, redirect
  useEffect(() => {
    if (!currentUser) return;
    const key = `eductome_onboarding_done_${currentUser.uid}`;
    if (localStorage.getItem(key) === 'true') {
      navigate('/dashboard', { replace: true });
    }
  }, [currentUser, navigate]);

  // Entrée : seul le message du Grand Frère apparaît. Le récap + les CTA
  // ne sont révélés qu'après l'engagement de l'élève (clic « Je suis prêt(e) »).
  useEffect(() => {
    const t1 = setTimeout(() => { launchConfetti(); setShowContent(true); }, 400);
    // Petit silence, puis le Grand Frère « envoie » sa question d'engagement.
    const t2 = setTimeout(() => setShowQuestion(true), 1700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [launchConfetti]);

  // Engagement validé : le message s'efface, puis la suite se révèle.
  const handleReady = () => {
    if (ready) return;
    setReady(true);
    setTimeout(() => { setShowCard(true); setShowActions(true); }, 420);
  };

  const handleContinue = (destination: string) => {
    if (currentUser) {
      // Mark onboarding as done AND mark welcome modal as seen
      localStorage.setItem(`eductome_onboarding_done_${currentUser.uid}`, 'true');
      localStorage.setItem(`eductome_welcome_seen_${currentUser.uid}`, 'true');
    }
    navigate(destination, { replace: true });
  };

  // Profile info items
  const profileItems = [
    { icon: User, label: 'Prénom', value: pseudo || 'Champion(ne)', color: palette.accent },
    { icon: GraduationCap, label: 'Série', value: LEVEL_LABELS[levelString] || levelString, color: palette.accent2 },
    ...(highschool ? [{ icon: School, label: 'Lycée / Collège', value: highschool, color: '#2E7D32' }] : []),
    { icon: BookOpen, label: 'Matière préférée', value: SUBJECT_LABELS[favoriteSubject] || favoriteSubject || '—', color: '#E65100' },
    { icon: Target, label: `Objectif ${examName}`, value: `${GOAL_EMOJIS[goal] || '🎯'} ${GOAL_LABELS[goal] || goal || 'Non défini'}`, color: palette.accent },
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden font-poppins flex flex-col items-center justify-center px-4 py-10"
      style={{ background: palette.bg }}
    >
      {/* Confetti canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-50"
        style={{ width: '100vw', height: '100vh' }}
      />

      {/* Background decorative blobs */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: palette.accent }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full blur-3xl opacity-15"
        style={{ background: palette.accent2 }}
      />

      {/* ── Section 1: Message du Grand Frère + engagement ── */}
      {!showCard && (
      <div
        className={`w-full max-w-2xl transition-all duration-500 ${
          ready
            ? 'opacity-0 -translate-y-4 pointer-events-none'
            : showContent
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Header badge */}
        <div className="flex items-center justify-center mb-6">
          <Badge tone="soft" icon={<Sparkles className="w-4 h-4" />} className="px-4 py-2 text-sm">
            Inscription réussie !
          </Badge>
        </div>

        {/* Grand Frère bubble */}
        <div className="flex items-start gap-4 mb-8">
          <div className="shrink-0">
            <div className="relative">
              <img
                src="/images/profil.jpeg"
                alt="Le Grand Frère"
                className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover object-center border-[3px] shadow-lg"
                style={{ borderColor: palette.accent }}
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 rounded-full"
                style={{ borderColor: palette.bg }}
              />
            </div>
          </div>
          <div
            className="flex-1 p-5 md:p-6 rounded-2xl rounded-tl-sm shadow-lg relative"
            style={{ background: palette.bg2, border: `1px solid ${palette.line}` }}
          >
            {/* Bubble pointer */}
            <div
              className="absolute top-5 -left-2 w-0 h-0"
              style={{
                borderTop: '8px solid transparent',
                borderBottom: '8px solid transparent',
                borderRight: `8px solid ${palette.bg2}`,
              }}
            />
            <div className="mb-2">
              <span
                className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full"
                style={{ background: palette.accentSoft, color: palette.accent }}
              >
                Message du Grand Frère
              </span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-base md:text-lg font-bold leading-snug" style={{ color: palette.ink, fontFamily: palette.display }}>
                {greetingLine}
              </p>
              {bodyLines.map((line, i) => (
                <p key={i} className="text-sm md:text-[15px] leading-relaxed" style={{ color: palette.ink2 }}>
                  {line}
                </p>
              ))}
              <p className="font-caveat text-[20px] leading-none pt-1" style={{ color: palette.ink2 }}>
                — Marius, ton grand frère
              </p>
            </div>
          </div>
        </div>

        {/* 2e message du Grand Frère : la question d'engagement, seule */}
        {showQuestion && (
          <div className="flex items-start gap-4 mb-6 ml-[20px] md:ml-[28px] animate-in fade-in slide-in-from-bottom-3 duration-500">
            <div
              className="flex-1 p-4 md:p-5 rounded-2xl rounded-tl-sm shadow-lg relative"
              style={{ background: palette.bg2, border: `1px solid ${palette.line}` }}
            >
              <div
                className="absolute top-5 -left-2 w-0 h-0"
                style={{ borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderRight: `8px solid ${palette.bg2}` }}
              />
              <p className="text-[15px] md:text-base font-semibold leading-snug" style={{ color: palette.ink }}>
                {questionLine}
              </p>
            </div>
          </div>
        )}

        {/* Engagement : le bouton répond en miroir à la question */}
        {showQuestion && (
        <div className="flex flex-col items-center gap-2.5 mt-2 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-200">
          <button
            type="button"
            onClick={handleReady}
            className="px-9 py-3.5 rounded-2xl font-bold text-[15px] transition-transform active:scale-95"
            style={{ background: palette.accent, color: palette.onAccent, boxShadow: `0 10px 28px ${palette.accentSoft}` }}
          >
            Je suis prêt(e)
          </button>
          <p className="text-xs" style={{ color: palette.ink3 }}>
            Tu pourras tout retrouver dans ton espace.
          </p>
        </div>
        )}
      </div>
      )}

      {/* ── Section 2: Carte Récap Profil ── */}
      {showCard && (
      <div className="w-full max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div
          className="rounded-3xl overflow-hidden shadow-xl"
          style={{ border: `1px solid ${palette.line}` }}
        >
          {/* Card header with gradient */}
          <div
            className="p-5 md:p-6 relative overflow-hidden"
            style={{ background: palette.heroBg }}
          >
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
            <div className="absolute -bottom-10 right-16 w-20 h-20 bg-white/10 rounded-full" />
            <div className="relative flex items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/20 flex items-center justify-center text-3xl md:text-4xl font-bold text-white uppercase shadow-lg">
                {pseudo ? pseudo.substring(0, 2) : '🎓'}
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: palette.display }}>
                  {pseudo || championWord}
                </h2>
                <p className="text-white/80 text-sm flex items-center gap-2 mt-1">
                  <Trophy className="w-4 h-4" />
                  Niveau 1 — Élève · 0 XP
                </p>
              </div>
            </div>
          </div>

          {/* Profile info grid */}
          <div className="p-5 md:p-6 space-y-0" style={{ background: palette.bg2 }}>
            <h3
              className="text-xs font-bold uppercase tracking-wider mb-4"
              style={{ color: palette.ink3 }}
            >
              Ton profil EDUCTOME
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {profileItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300"
                  style={{
                    background: palette.bg3 || palette.bg,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${item.color}15`, color: item.color }}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: palette.ink3 }}>
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold truncate" style={{ color: palette.ink }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      )}

      {/* ── Section 3: Actions CTA ── */}
      {showActions && (
      <div className="w-full max-w-2xl mt-8 space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
        <h3
          className="text-xs font-bold uppercase tracking-wider text-center mb-4"
          style={{ color: palette.ink3 }}
        >
          Par où commencer ?
        </h3>

        {/* Primary CTA */}
        <button
          onClick={() => handleContinue('/dashboard/starter-pack')}
          className="w-full flex items-center justify-between p-4 md:p-5 rounded-2xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: palette.accent,
            color: palette.onAccent,
            boxShadow: `0 8px 24px ${palette.heroShadow}`,
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-base font-bold">Commencer mon premier cours</p>
              <p className="text-xs opacity-80 font-normal">Chapitres gratuits disponibles</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 opacity-80" />
        </button>

        {/* Secondary CTAs */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => handleContinue('/dashboard')}
            className="flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: palette.bg2, borderColor: palette.line }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: palette.accentSoft, color: palette.accent }}
            >
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold" style={{ color: palette.ink }}>
              Mon Dashboard
            </span>
          </button>

          <button
            onClick={() => {
              if (currentUser) {
                localStorage.setItem(`eductome_onboarding_done_${currentUser.uid}`, 'true');
                localStorage.setItem(`eductome_welcome_seen_${currentUser.uid}`, 'true');
              }
              navigate('/dashboard', { replace: true });
              // GoalsOnboardingModal will appear on the dashboard
              setTimeout(() => {
                window.dispatchEvent(new CustomEvent('open_goals_modal'));
              }, 800);
            }}
            className="flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: palette.bg2, borderColor: palette.line }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: '#2E7D3215', color: '#2E7D32' }}
            >
              <Target className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold" style={{ color: palette.ink }}>
              Mes Objectifs
            </span>
          </button>
        </div>

        {/* Footer tagline */}
        <div className="text-center pt-4 pb-2">
          <p className="text-xs flex items-center justify-center gap-1.5" style={{ color: palette.ink3 }}>
            <Heart className="w-3.5 h-3.5" style={{ color: palette.accent }} />
            EDUCTOME — Apprendre sans limites
          </p>
        </div>
      </div>
      )}
    </div>
  );
};
