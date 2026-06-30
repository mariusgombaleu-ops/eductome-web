import { useUser, USER_LEVELS } from '../../contexts/UserContext';
import { useTheme } from '../../contexts/ThemeContext';
import { Star } from 'lucide-react';

const LEVEL_EMOJIS: Record<number, string> = {
  1: '📚', 2: '💪', 3: '🐊', 4: '🐊', 5: '👨‍🏫', 6: '🏆',
};

const QUOTES = [
  'On affûte tes outils, puis tu voles.',
  'Celui qui comprend domine. Celui qui mémorise subit.',
  'Ce n\'est pas une question d\'intelligence, c\'est une question de méthode.',
  'Le Caïman ne dort pas — il prépare sa victoire.',
  'La répétition est la mère du succès, Champion.',
];

/**
 * DashboardHero — en-tête de la Vue d'ensemble, fidèle à la maquette #2 :
 * overline + salutation, bulle Grand Frère (citation en Caveat), puis carte
 * « niveau premium » (badge rang, nom, XP, barre de progression).
 * Toutes les données sont réelles (useUser). Texte du hero toujours blanc
 * (le dégradé heroBg est sombre dans tous les thèmes).
 */
export const DashboardHero = () => {
  const { xp, level, statut, pseudo, sexe } = useUser();
  const { palette } = useTheme();

  const championWord = sexe === 'F' ? 'Championne' : 'Champion';
  const name = pseudo || championWord;

  const nextLevel = USER_LEVELS.find(l => l.level === level.level + 1);
  const progressPct = level.maxXp
    ? Math.min(100, Math.max(0, ((xp - level.minXp) / (level.maxXp - level.minXp)) * 100))
    : 100;
  const xpToNext = nextLevel ? Math.max(0, nextLevel.minXp - xp) : 0;

  const hour = new Date().getHours();
  const quote = QUOTES[Math.floor(hour / 3) % QUOTES.length];

  return (
    <div>
      {/* Overline + salutation */}
      <div
        className="text-[11px] font-bold uppercase tracking-[0.14em] font-poppins"
        style={{ color: palette.accent }}
      >
        Tableau de bord
      </div>
      <h1
        className="mt-1.5 mb-3.5 text-[26px] sm:text-3xl font-extrabold leading-[1.05] tracking-tight"
        style={{ color: palette.ink, fontFamily: palette.display }}
      >
        Salut {name} 👋
      </h1>

      {/* Bulle Grand Frère — citation en Caveat */}
      <div
        className="flex items-center gap-3 rounded-2xl px-3.5 py-3 mb-4"
        style={{ background: palette.gfBubble }}
      >
        <img
          src="/images/profil.jpeg"
          alt="Le Grand Frère"
          className="w-9 h-9 rounded-full object-cover object-center shrink-0 border-2"
          style={{ borderColor: palette.accent }}
        />
        <div className="min-w-0">
          <div className="text-[12px] font-bold font-poppins" style={{ color: palette.gfInk }}>
            Marius · ton grand frère
          </div>
          <div className="text-[18px] leading-[1.15] font-caveat" style={{ color: palette.gfInk }}>
            « {quote} »
          </div>
        </div>
      </div>

      {/* Carte niveau premium */}
      <div
        className="relative overflow-hidden rounded-[24px] p-5"
        style={{
          background: palette.heroBg,
          color: '#FFFFFF',
          boxShadow: `0 9px 20px ${palette.heroShadow}, inset 0 1px 0 rgba(255,255,255,.28)`,
        }}
      >
        {/* Décor */}
        <div className="absolute -top-12 -right-9 w-40 h-40 rounded-full pointer-events-none" style={{ border: '1.5px solid rgba(255,255,255,.14)' }} />
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.10) 1px, transparent 1px)', backgroundSize: '15px 15px' }}
        />
        <div className="relative">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.1em] font-poppins" style={{ background: 'rgba(255,255,255,.16)', border: '1px solid rgba(255,255,255,.18)' }}>
                <Star className="w-3 h-3" style={{ fill: '#FFD66B', color: '#FFD66B' }} />
                Niveau {level.level} · {level.title}
              </span>
              <div className="flex items-center gap-2 mt-2.5">
                <span className="text-[24px] leading-none">{LEVEL_EMOJIS[level.level] || '📚'}</span>
                <span className="text-[26px] font-extrabold leading-[1.05] truncate" style={{ fontFamily: palette.display, textShadow: '0 2px 12px rgba(0,0,0,.18)' }}>
                  {name}
                </span>
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-[24px] font-extrabold leading-none" style={{ fontFamily: palette.display, textShadow: '0 2px 10px rgba(0,0,0,.2)' }}>
                {xp.toLocaleString('fr-FR')}
                <span className="text-[12px] font-semibold opacity-85"> XP</span>
                {statut === 'famille' && <span className="ml-1 text-[10px] opacity-80">×2</span>}
              </div>
              <div className="text-[10px] font-semibold opacity-80 mt-0.5">
                {nextLevel ? `${xpToNext} avant niv. ${nextLevel.level}` : 'Niveau max atteint 🏆'}
              </div>
            </div>
          </div>
          {/* Barre de progression */}
          <div className="mt-3.5 h-[9px] rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,.2)' }}>
            <div
              className="h-full rounded-full"
              style={{
                width: `${progressPct}%`,
                background: 'linear-gradient(90deg, rgba(255,255,255,.65), #fff)',
                boxShadow: '0 0 12px rgba(255,255,255,.5)',
                transition: 'width 1s cubic-bezier(.2,.8,.2,1)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
