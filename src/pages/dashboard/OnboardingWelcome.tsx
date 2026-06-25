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
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: -20 - Math.random() * canvas.height * 0.5,
        vx: (Math.random() - 0.5) * 6,
        vy: Math.random() * 4 + 2,
        w: Math.random() * 10 + 4,
        h: Math.random() * 6 + 2,
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
  const launchConfetti = useConfetti(canvasRef);

  const [showContent, setShowContent] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const isCollege = levelString === '3eme';
  const examName = isCollege ? 'BEPC' : 'BAC';
  const championWord = sexe === 'M' ? 'Champion' : sexe === 'F' ? 'Championne' : 'Champion(ne)';
  const titleWord = isCollege
    ? sexe === 'M' ? 'futur lycéen' : sexe === 'F' ? 'future lycéenne' : 'futur(e) lycéen(ne)'
    : sexe === 'M' ? 'futur bachelier' : sexe === 'F' ? 'future bachelière' : 'futur(e) bachelier(ère)';

  const welcomeMessage = `Bienvenue ${pseudo || championWord} ! Tu es officiellement ${titleWord}. `
    + `Ton profil est prêt — ${LEVEL_LABELS[levelString] || levelString}, `
    + `${highschool ? highschool + ', ' : ''}`
    + `objectif ${GOAL_LABELS[goal] || 'réussite'}. `
    + `On va construire ta victoire au ${examName} ensemble. Le Grand Frère est avec toi ! 💪`;

  // Guard: if user already completed onboarding, redirect
  useEffect(() => {
    if (!currentUser) return;
    const key = `eductome_onboarding_done_${currentUser.uid}`;
    if (localStorage.getItem(key) === 'true') {
      navigate('/dashboard', { replace: true });
    }
  }, [currentUser, navigate]);

  // Sequenced entrance
  useEffect(() => {
    const t1 = setTimeout(() => { launchConfetti(); setShowContent(true); }, 400);
    const t2 = setTimeout(() => setShowCard(true), 1400);
    const t3 = setTimeout(() => setShowActions(true), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [launchConfetti]);

  // Typing animation for message
  useEffect(() => {
    if (!showContent) return;
    if (charIndex >= welcomeMessage.length) return;
    const timer = setTimeout(() => setCharIndex(i => i + 1), 35);
    return () => clearTimeout(timer);
  }, [showContent, charIndex, welcomeMessage.length]);

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
    { icon: GraduationCap, label: 'Série', value: LEVEL_LABELS[levelString] || levelString, color: '#1976D2' },
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
        style={{ background: '#1976D2' }}
      />

      {/* ── Section 1: Grand Frère Message ── */}
      <div
        className={`w-full max-w-2xl transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Header badge */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
            style={{ background: palette.accentSoft, color: palette.accent }}
          >
            <Sparkles className="w-4 h-4" />
            Inscription réussie !
          </div>
        </div>

        {/* Grand Frère bubble */}
        <div className="flex items-start gap-4 mb-8">
          <div className="shrink-0">
            <div className="relative">
              <img
                src="/images/marius.jpeg"
                alt="Le Grand Frère"
                className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-3 shadow-lg"
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
            <p className="text-sm md:text-base leading-relaxed mt-3" style={{ color: palette.ink }}>
              "{welcomeMessage.substring(0, charIndex)}"
              {charIndex < welcomeMessage.length && (
                <span
                  className="inline-block w-[2px] h-4 ml-0.5 translate-y-0.5 animate-pulse"
                  style={{ background: palette.accent }}
                />
              )}
            </p>
          </div>
        </div>
      </div>

      {/* ── Section 2: Carte Récap Profil ── */}
      <div
        className={`w-full max-w-2xl transition-all duration-700 delay-100 ${showCard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
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

      {/* ── Section 3: Actions CTA ── */}
      <div
        className={`w-full max-w-2xl mt-8 space-y-3 transition-all duration-700 delay-200 ${showActions ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <h3
          className="text-xs font-bold uppercase tracking-wider text-center mb-4"
          style={{ color: palette.ink3 }}
        >
          Par où commencer ?
        </h3>

        {/* Primary CTA */}
        <button
          onClick={() => handleContinue('/dashboard/starter-pack')}
          className="w-full flex items-center justify-between p-4 md:p-5 rounded-2xl font-bold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: palette.accent,
            boxShadow: `0 8px 24px ${palette.accentSoft}`,
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
    </div>
  );
};
