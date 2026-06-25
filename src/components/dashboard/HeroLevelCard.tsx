import { useEffect, useState } from 'react';
import { useUser, USER_LEVELS } from '../../contexts/UserContext';
import { useTheme } from '../../contexts/ThemeContext';

const LEVEL_EMOJIS: Record<number, string> = {
  1: '📚', 2: '💪', 3: '🐊', 4: '🐊', 5: '👨‍🏫', 6: '🏆',
};

const QUOTES = [
  "Au Cacao, tant que le match n'est pas fini, on peut gâter le coin.",
  "Ce n'est pas une question d'intelligence. C'est une question de méthode.",
  "Celui qui comprend domine. Celui qui mémorise subit.",
  "Chaque minute d'étude est un pas de plus vers ton but.",
  "Le Caïman ne dort pas — il prépare sa victoire.",
];

export const HeroLevelCard = () => {
  const { xp, level, statut, pseudo, sexe } = useUser();
  const { palette } = useTheme();
  const [animIn, setAnimIn] = useState(false);
  const [quote] = useState(() => QUOTES[Math.floor(Math.random() * QUOTES.length)]);

  useEffect(() => {
    requestAnimationFrame(() => setAnimIn(true));
  }, []);

  const championWord = sexe === 'M' ? 'Champion' : sexe === 'F' ? 'Championne' : 'Champion(ne)';
  const nextLevel = USER_LEVELS.find(l => l.level === level.level + 1);
  const progressPct = level.maxXp
    ? ((xp - level.minXp) / (level.maxXp - level.minXp)) * 100
    : 100;
  const xpToNext = nextLevel ? nextLevel.minXp - xp : 0;

  const ringPct = Math.min(progressPct, 100);
  const ringStrokeDashoffset = animIn ? 339 * (1 - ringPct / 100) : 339;

  // Message spécial si c'est un nouvel utilisateur (0 XP)
  const isNewUser = xp === 0;
  const displayQuote = isNewUser
    ? `Bienvenue, ${pseudo || championWord} ! Tu viens d'arriver — commence ton premier cours pour gagner tes premiers XP !`
    : `« ${quote} »`;

  return (
    <div
      className="relative rounded-3xl overflow-hidden p-5 shadow-xl"
      style={{
        background: palette.heroBg,
        boxShadow: `0 14px 34px ${palette.heroShadow}`,
      }}
    >
      {/* Decorative circles */}
      <div className="absolute -top-10 -right-8 w-40 h-40 rounded-full bg-white/[.14]" />
      <div className="absolute -bottom-12 right-10 w-24 h-24 rounded-full bg-white/10" />

      <div className="relative">
        {/* Top row: level info + ring */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-[10.5px] font-bold tracking-[.12em] uppercase text-white/80">
              Ton rang actuel • Niveau {level.level}
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[26px]">{LEVEL_EMOJIS[level.level] || '📚'}</span>
              <span
                className="text-2xl font-extrabold text-white leading-none whitespace-nowrap truncate max-w-[200px]"
                style={{ fontFamily: palette.display }}
              >
                {level.title}
              </span>
            </div>
          </div>

          {/* XP Ring */}
          <div className="relative w-[62px] h-[62px] flex-none">
            <svg width="62" height="62" viewBox="0 0 120 120" style={{ transform: 'rotate(-90deg)' }}>
              <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="11" />
              <circle
                cx="60" cy="60" r="54" fill="none" stroke="#fff" strokeWidth="11"
                strokeLinecap="round" strokeDasharray="339"
                style={{
                  strokeDashoffset: ringStrokeDashoffset,
                  transition: 'stroke-dashoffset 1.2s cubic-bezier(.2,.8,.2,1)',
                }}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-sm font-extrabold text-white">
              {Math.round(ringPct)}%
            </span>
          </div>
        </div>

        {/* XP bar */}
        <div className="mt-4">
          <div className="flex justify-between items-baseline mb-[7px]">
            <span className="text-xs font-bold text-white">
              {xp.toLocaleString('fr-FR')} XP
              {statut === 'famille' && <span className="ml-1 text-[10px] opacity-80">×2</span>}
            </span>
            {nextLevel && (
              <span className="text-[11px] text-white/85">
                Plus que {xpToNext} pour <strong>{nextLevel.title}</strong>
              </span>
            )}
          </div>
          <div className="h-[9px] rounded-full bg-white/25 overflow-hidden">
            <div
              className="h-full rounded-full bg-white"
              style={{
                width: animIn ? `${ringPct}%` : '0%',
                transition: 'width 1.2s cubic-bezier(.2,.8,.2,1)',
              }}
            />
          </div>
        </div>

        {/* Quote */}
        <div className="mt-4 p-3 rounded-xl bg-white/[.16] backdrop-blur-sm">
          <p className={`m-0 text-[12.5px] leading-[1.5] text-white ${!isNewUser && 'italic'}`}>
            {displayQuote}
          </p>
        </div>
      </div>
    </div>
  );
};
