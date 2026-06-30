import { useState, ReactNode } from 'react';
import { ArrowRight, Lock, Check, RotateCcw, ShoppingBag, BookOpen, Sparkles, ChevronRight, Atom, Leaf, Feather } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { useTheme } from '../../contexts/ThemeContext';
import type { PaletteTokens } from '../../contexts/ThemeContext';
import { GrandFrereGuide } from '../../components/ui/GrandFrereGuide';
import { PageHero } from '../../components/dashboard/PageHero';

// ──────────────────────────────────────────────────────────────────────────
// Source unique des tomes de la collection « Les Clés Maths » (seul contenu
// réel de l'app). `total` = nombre de chapitres notés par un quiz (= modules
// M1..Mn), qui sert de dénominateur à la progression réelle.
// ──────────────────────────────────────────────────────────────────────────
interface TomeInfo {
  id: string;
  n: number;
  title: string;
  total: number;
  cover?: string;
}

const TOMES: TomeInfo[] = [
  { id: 't1-limites', n: 1, title: 'Les Limites', total: 5, cover: '/covers/tomes/cover-t1.png' },
  { id: 't2-derivees', n: 2, title: 'Les Dérivées', total: 6, cover: '/covers/tomes/cover-t2.png' },
  { id: 't3-primitives', n: 3, title: 'Primitives & Intégrales', total: 6, cover: '/covers/tomes/cover-t3.png' },
  { id: 't4-suites', n: 4, title: 'Suites Numériques', total: 5, cover: '/covers/tomes/cover-t4.png' },
  { id: 't5-log-expo', n: 5, title: 'Logarithme & Exponentielle', total: 6, cover: '/covers/tomes/cover-t5.png' },
  { id: 't6-trigonometrie', n: 6, title: 'Fonctions Trigonométriques', total: 6, cover: '/covers/tomes/cover-t6.png' },
  { id: 't7-probabilites', n: 7, title: 'Probabilités', total: 6, cover: '/covers/tomes/cover-t7.png' },
  { id: 't8-statistiques', n: 8, title: 'Statistiques', total: 6, cover: '/covers/tomes/cover-t8.png' },
  { id: 't9-geometrie-espace', n: 9, title: "Géométrie dans l'Espace", total: 7, cover: '/covers/tomes/cover-t9.jpeg' },
  { id: 't10-complexes', n: 10, title: 'Nombres Complexes', total: 6, cover: '/covers/tomes/cover-t10.png' },
  { id: 't11-equations-diff', n: 11, title: 'Équations Différentielles', total: 6, cover: '/covers/tomes/cover-t11.png' },
  { id: 't12-revisions-bac', n: 12, title: 'Révisions BAC', total: 4 },
];

// Collections dont le contenu n'existe pas encore : présentées en « Bientôt »,
// non cliquables (déroulé = message d'attente). Reprend la grammaire de la
// maquette #5 (Histoire-Géo « Bientôt »).
interface SoonCollection {
  id: string;
  name: string;
  teaser: string;
  gradient: string;
  Icon: typeof BookOpen;
}

const SOON: SoonCollection[] = [
  { id: 'soon-pc', name: 'Les Clés Physique-Chimie', teaser: 'Cinématique, énergie, ondes — on prépare tout ça pour bientôt.', gradient: 'linear-gradient(135deg,#1B9E5B,#117A45)', Icon: Atom },
  { id: 'soon-svt', name: 'Les Clés SVT', teaser: 'Système nerveux, génétique, immunologie — en cours de préparation.', gradient: 'linear-gradient(135deg,#14A6A6,#0E7C7C)', Icon: Leaf },
  { id: 'soon-philo', name: 'Les Clés Philosophie', teaser: 'Méthodo dissert & explication de texte — on y travaille.', gradient: 'linear-gradient(135deg,#E67E22,#C0610F)', Icon: Feather },
];

const LAST_READ_KEY = 'eductome_last_chapter_read';

// ──────────────────────────────────────────────────────────────────────────
// Couverture de tome avec repli typographique si l'image manque (ex. T12).
// ──────────────────────────────────────────────────────────────────────────
const TomeCover = ({ tome, className, muted }: { tome: TomeInfo; className?: string; muted?: boolean }) => {
  const { palette } = useTheme();
  const [errored, setErrored] = useState(false);

  if (!tome.cover || errored) {
    return (
      <div
        className={`flex flex-col items-center justify-center text-center px-2 ${className || ''}`}
        style={{ background: palette.accentSoft }}
      >
        <span className="text-[11px] font-bold tracking-wide" style={{ color: palette.accent }}>
          Tome {tome.n}
        </span>
        <span className="text-[10px] leading-tight mt-0.5 line-clamp-2" style={{ color: palette.ink2 }}>
          {tome.title}
        </span>
      </div>
    );
  }

  return (
    <img
      src={tome.cover}
      alt={`Couverture du Tome ${tome.n} — ${tome.title}`}
      onError={() => setErrored(true)}
      loading="lazy"
      className={`object-cover ${className || ''}`}
      style={muted ? { filter: 'grayscale(1)', opacity: 0.55 } : undefined}
    />
  );
};

// ──────────────────────────────────────────────────────────────────────────
const SectionHeader = ({
  title,
  count,
  palette,
  action,
}: {
  title: string;
  count?: number;
  palette: PaletteTokens;
  action?: { label: string; to: string };
}) => (
  <div className="flex items-end justify-between gap-3 mb-3">
    <h2 className="text-[15px] sm:text-base font-bold flex items-center gap-2" style={{ color: palette.ink }}>
      {title}
      {typeof count === 'number' && (
        <span className="text-[12px] font-semibold" style={{ color: palette.ink3 }}>
          {count}
        </span>
      )}
    </h2>
    {action && (
      <Link
        to={action.to}
        className="text-[12.5px] font-semibold flex items-center gap-1 transition-opacity hover:opacity-70 shrink-0"
        style={{ color: palette.accent }}
      >
        {action.label} <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    )}
  </div>
);

export const MyCourses = () => {
  const navigate = useNavigate();
  const { unlockedCourses, statut, rewardedActions } = useUser();
  const { palette } = useTheme();

  // Progression réelle : on compte les chapitres validés (quiz réussi →
  // actionId `quiz_<courseId>_<chapterId>` enregistré dans rewardedActions).
  const progressOf = (tome: TomeInfo) => {
    let done = 0;
    rewardedActions.forEach(a => {
      if (a.startsWith(`quiz_${tome.id}_`)) done++;
    });
    done = Math.min(done, tome.total);
    const pct = tome.total ? Math.round((done / tome.total) * 100) : 0;
    return { done, total: tome.total, pct, started: done > 0 };
  };

  const isOwned = (id: string) => statut === 'famille' || unlockedCourses.includes(id);

  const owned = TOMES.filter(t => isOwned(t.id));
  const locked = TOMES.filter(t => !isOwned(t.id));
  const avgPct = owned.length
    ? Math.round(owned.reduce((s, t) => s + progressOf(t).pct, 0) / owned.length)
    : 0;

  // Tome mis en avant dans « Reprendre » : le dernier ouvert, sinon le premier
  // tome possédé, sinon le Tome 1 (dont l'aperçu est gratuit pour tous).
  const lastReadId = localStorage.getItem(LAST_READ_KEY) || '';
  const heroTome =
    TOMES.find(t => t.id === lastReadId) || owned[0] || TOMES[0];
  const heroProgress = progressOf(heroTome);

  const open = (id: string) => navigate(`/dashboard/course/${id}`);

  // État d'ouverture des collections dépliables (Maths ouverte par défaut).
  const [openCol, setOpenCol] = useState<Record<string, boolean>>({ maths: true });
  const isColOpen = (id: string, defaultOpen: boolean) => (openCol[id] === undefined ? defaultOpen : openCol[id]);
  const toggleCol = (id: string, defaultOpen: boolean) =>
    setOpenCol(m => ({ ...m, [id]: !isColOpen(id, defaultOpen) }));

  // ── Ligne de tome dans une collection dépliable (maquette #5) ──
  const renderTomeRow = (tome: TomeInfo, idx: number) => {
    const unlocked = isOwned(tome.id);
    const { done, total, pct, started } = progressOf(tome);
    const actionText = unlocked ? (started ? 'Continuer' : 'Ouvrir') : 'Aperçu';
    return (
      <div key={tome.id}>
        {idx > 0 && <div className="h-px ml-[58px]" style={{ background: palette.line }} />}
        <button onClick={() => open(tome.id)} className="group w-full flex items-center gap-3 px-3.5 py-3 text-left">
          <span
            className="relative w-8 h-[42px] rounded-md flex items-center justify-center text-[10px] font-extrabold shrink-0 font-poppins"
            style={{ background: unlocked ? palette.accentSoft : palette.bg3, color: unlocked ? palette.accent : palette.ink3 }}
          >
            T{tome.n}
            {!unlocked && (
              <span className="absolute -top-1 -left-1 w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,0,0,.45)' }}>
                <Lock className="w-2 h-2 text-white" />
              </span>
            )}
          </span>
          <span className="flex-1 min-w-0">
            <span className="block text-[14px] font-bold leading-snug truncate" style={{ color: palette.ink }}>{tome.title}</span>
            {unlocked && !started ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold" style={{ color: palette.tipBar }}>
                <Check className="w-3 h-3" /> Débloqué
              </span>
            ) : unlocked ? (
              <span className="block text-[11px] font-semibold tabular-nums" style={{ color: palette.ink2 }}>{done}/{total} chapitres · {pct}%</span>
            ) : (
              <span className="block text-[11px] font-semibold" style={{ color: palette.ink3 }}>Aperçu gratuit · intro + socle</span>
            )}
          </span>
          <span className="inline-flex items-center gap-1 text-[12px] font-bold shrink-0" style={{ color: palette.accent }}>
            {actionText} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </button>
      </div>
    );
  };

  // ── Carte de collection dépliable (en-tête icône + corps animé) ──
  const renderCollection = ({
    id, gradient, icon, title, subtitle, badge, badgeTone = 'accent', defaultOpen = false, children,
  }: {
    id: string; gradient: string; icon: ReactNode; title: string; subtitle: string;
    badge?: string; badgeTone?: 'accent' | 'ana'; defaultOpen?: boolean; children: ReactNode;
  }) => {
    const opened = isColOpen(id, defaultOpen);
    return (
      <div key={id} className="rounded-[20px] border overflow-hidden transition-colors" style={{ background: palette.bg2, borderColor: palette.line }}>
        <button onClick={() => toggleCol(id, defaultOpen)} className="w-full flex items-center gap-3 p-3.5 text-left" aria-expanded={opened}>
          <span className="w-[42px] h-[42px] rounded-[12px] flex items-center justify-center shrink-0" style={{ background: gradient, boxShadow: '0 5px 14px rgba(20,40,70,.18)' }}>{icon}</span>
          <span className="flex-1 min-w-0">
            <span className="block text-[15px] font-bold truncate" style={{ color: palette.ink, fontFamily: palette.display }}>{title}</span>
            <span className="block text-[12px] font-medium" style={{ color: palette.ink2 }}>{subtitle}</span>
          </span>
          {badge && (
            <span
              className="shrink-0 rounded-full px-2.5 py-1 font-poppins"
              style={badgeTone === 'ana'
                ? { background: palette.anaBg, color: palette.anaInk, fontWeight: 800, fontSize: 9, textTransform: 'uppercase', letterSpacing: '.06em' }
                : { background: palette.accentSoft, color: palette.accent, fontWeight: 800, fontSize: 11 }}
            >
              {badge}
            </span>
          )}
          <motion.span animate={{ rotate: opened ? 90 : 0 }} transition={{ duration: 0.2 }} className="shrink-0" style={{ color: palette.ink3 }}>
            <ChevronRight className="w-[18px] h-[18px]" strokeWidth={2.4} />
          </motion.span>
        </button>
        {opened && (
          <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, ease: 'easeOut' }} style={{ overflow: 'hidden' }}>
            <div className="h-px mx-3.5" style={{ background: palette.line }} />
            {children}
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-9 px-4 md:px-6 lg:px-8 pt-6 pb-12 font-poppins">
      <GrandFrereGuide
        id="courses"
        message="Voici ta bibliothèque. Reprends là où tu t'es arrêté, avance tome par tome — la régularité fait la différence, pas la vitesse."
      />

      <PageHero
        eyebrow="Ma bibliothèque"
        title="Mes cours"
        description="Débloque tes tomes : comprends chaque notion en profondeur, entraîne-toi et décroche ta mention au BAC."
        stats={[
          { value: owned.length, label: owned.length > 1 ? 'Tomes débloqués' : 'Tome débloqué', progress: Math.round((owned.length / TOMES.length) * 100) },
          { value: locked.length, label: 'À débloquer', progress: Math.round((locked.length / TOMES.length) * 100) },
          { value: `${avgPct}%`, label: 'Progression moy.', progress: avgPct },
        ]}
        action={
          <button
            onClick={() => navigate('/dashboard/revisions')}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[14px] text-[12.5px] font-semibold transition-colors hover:opacity-90"
            style={{ background: 'rgba(255,255,255,.16)', border: '1px solid rgba(255,255,255,.22)', color: '#fff' }}
          >
            <RotateCcw className="w-4 h-4" /> Réviser
          </button>
        }
      />

      {/* ── Reprendre ── */}
      <section>
        <SectionHeader title="Reprendre" palette={palette} />
        <button
          onClick={() => open(heroTome.id)}
          className="group w-full flex items-stretch text-left rounded-[22px] border overflow-hidden transition-all duration-300 hover:shadow-lg"
          style={{ background: palette.bg2, borderColor: palette.line }}
        >
          <TomeCover tome={heroTome} className="w-[96px] sm:w-[132px] shrink-0" />
          <div className="flex-1 min-w-0 p-4 sm:p-6 flex flex-col justify-center">
            <span className="text-[11px] font-semibold" style={{ color: palette.ink3 }}>
              Tome {heroTome.n} · Mathématiques
            </span>
            <h3 className="text-lg sm:text-2xl font-bold leading-tight mt-1" style={{ color: palette.ink }}>
              {heroTome.title}
            </h3>

            {heroProgress.started ? (
              <div className="mt-4 max-w-md">
                <div className="flex items-center justify-between text-[12px] mb-1.5">
                  <span className="font-semibold" style={{ color: palette.ink2 }}>
                    {heroProgress.done}/{heroProgress.total} chapitres validés
                  </span>
                  <span className="font-bold tabular-nums" style={{ color: palette.ink }}>{heroProgress.pct}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: palette.bg3 }}>
                  <div className="h-full rounded-full transition-all duration-700" style={{ width: `${heroProgress.pct}%`, background: palette.accent }} />
                </div>
              </div>
            ) : (
              <p className="mt-3 text-[13.5px]" style={{ color: palette.ink2 }}>
                Tu n'as pas encore commencé ce tome. C'est le bon moment.
              </p>
            )}

            <span
              className="mt-5 inline-flex items-center gap-2 self-start px-4 py-2.5 rounded-[14px] text-[13px] font-bold transition-transform group-hover:scale-[1.02]"
              style={{ background: palette.accent, color: palette.onAccent }}
            >
              {heroProgress.started ? 'Continuer la lecture' : 'Commencer la lecture'}
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </button>
      </section>

      {/* ── Mes collections (dépliables) ── */}
      <section className="space-y-3">
        <SectionHeader title="Mes collections" palette={palette} />

        {/* Les Clés Maths — seule collection avec du contenu réel */}
        {renderCollection({
          id: 'maths',
          gradient: 'linear-gradient(135deg,#1976D2,#1A3557)',
          icon: <BookOpen className="w-5 h-5" style={{ color: '#fff' }} />,
          title: 'Les Clés Maths',
          subtitle: `12 tomes · ${owned.length} débloqué${owned.length > 1 ? 's' : ''}`,
          badge: `${owned.length}/12`,
          badgeTone: 'accent',
          defaultOpen: true,
          children: (
            <div className="pb-1">
              {owned.length > 0 ? (
                owned.map((t, i) => renderTomeRow(t, i))
              ) : (
                <p className="px-3.5 py-3.5 text-[12.5px] leading-relaxed" style={{ color: palette.ink2 }}>
                  Aucun tome débloqué pour l'instant. Chaque tome s'ouvre en aperçu gratuit (intro + socle) — commence quand tu veux.
                </p>
              )}
              {locked.length > 0 && (
                <button
                  onClick={() => setOpenCol(m => ({ ...m, locked: true }))}
                  className="w-full text-left px-3.5 py-3 inline-flex items-center gap-2 text-[12px] font-bold"
                  style={{ color: palette.ink3 }}
                >
                  <Lock className="w-3.5 h-3.5" /> +{locked.length} tomes à débloquer dans cette collection
                </button>
              )}
            </div>
          ),
        })}

        {/* Collections « Bientôt » (sans contenu lisible — message d'attente) */}
        {SOON.map(c =>
          renderCollection({
            id: c.id,
            gradient: c.gradient,
            icon: <c.Icon className="w-5 h-5" style={{ color: '#fff' }} />,
            title: c.name,
            subtitle: 'Bientôt disponible',
            badge: 'Bientôt',
            badgeTone: 'ana',
            defaultOpen: false,
            children: (
              <div className="px-4 py-6 text-center">
                <div className="text-[26px] mb-1.5">🚧</div>
                <p className="text-[13px] leading-relaxed max-w-xs mx-auto" style={{ color: palette.ink2 }}>{c.teaser}</p>
              </div>
            ),
          })
        )}
      </section>

      {/* ── À débloquer (collection verrouillée, dépliable) ── */}
      {locked.length > 0 && (
        <section className="space-y-3">
          <SectionHeader
            title="À débloquer"
            count={locked.length}
            palette={palette}
            action={{ label: 'Voir la boutique', to: '/dashboard/boutique' }}
          />
          {renderCollection({
            id: 'locked',
            gradient: palette.bg3,
            icon: <Lock className="w-[19px] h-[19px]" style={{ color: palette.ink3 }} strokeWidth={2.2} />,
            title: 'Tomes verrouillés',
            subtitle: `${locked.length} tomes · Les Clés Maths`,
            defaultOpen: false,
            children: (
              <div className="pb-1">
                {locked.map((t, i) => renderTomeRow(t, i))}
                <Link to="/dashboard/boutique" className="block px-3.5 py-3 text-[12px] font-bold" style={{ color: palette.accent }}>
                  Voir les {locked.length} tomes en boutique →
                </Link>
              </div>
            ),
          })}
        </section>
      )}

      {/* ── Découvrir la boutique (si tout est déjà débloqué) ── */}
      {locked.length === 0 && (
        <Link
          to="/dashboard/boutique"
          className="flex items-center justify-between gap-4 rounded-[20px] border p-5 transition-colors hover:opacity-90"
          style={{ background: palette.bg2, borderColor: palette.line }}
        >
          <div>
            <h3 className="text-[15px] font-bold" style={{ color: palette.ink }}>Tu possèdes toute la collection</h3>
            <p className="text-[13px] mt-0.5" style={{ color: palette.ink2 }}>Découvre les autres collections EDUCTOME en boutique.</p>
          </div>
          <span className="inline-flex items-center gap-2 text-[13px] font-bold shrink-0" style={{ color: palette.accent }}>
            Boutique <ShoppingBag className="w-4 h-4" />
          </span>
        </Link>
      )}

      {/* ── Bannière offre collection (upsell, s'il reste des tomes à débloquer) ── */}
      {locked.length > 0 && (
        <section
          className="relative overflow-hidden rounded-[24px] p-6"
          style={{ background: palette.bannerBg, color: '#fff', boxShadow: '0 8px 20px rgba(0,0,0,.18), inset 0 1px 0 rgba(255,255,255,.08)' }}
        >
          <div
            className="absolute -top-12 -right-8 w-44 h-44 rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, ${palette.accent}, transparent 70%)`, opacity: 0.5, filter: 'blur(8px)' }}
          />
          <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.08) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
          <div className="relative">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[9px] font-extrabold uppercase tracking-[0.1em] mb-3.5 font-poppins"
              style={{ background: 'linear-gradient(135deg,#F0B43E,#D9942A)', color: '#fff', border: '1px solid rgba(255,255,255,.4)', boxShadow: '0 4px 14px rgba(184,132,31,.4)' }}
            >
              <Sparkles className="w-3 h-3" /> Offre collection
            </span>
            <h3 className="text-[20px] sm:text-[21px] font-extrabold leading-tight mb-2" style={{ fontFamily: palette.display }}>
              Tu avances bien 👏<br />Garde une longueur d'avance.
            </h3>
            <p className="text-[14px] leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,.84)' }}>
              Débloque toute la collection <b className="text-white">Les Clés Maths</b> et arrive au BAC sans aucun angle mort — chaque tome corrigé, expliqué par le Grand Frère.
            </p>
            <div className="flex items-center gap-3.5 flex-wrap">
              <Link
                to="/dashboard/boutique"
                className="inline-flex items-center px-5 py-3 rounded-[14px] text-[14px] font-bold transition-transform hover:scale-[1.02]"
                style={{ background: palette.accent, color: palette.onAccent, boxShadow: `0 4px 12px ${palette.heroShadow}` }}
              >
                Voir la boutique
              </Link>
              <span className="text-[12px] font-semibold" style={{ color: 'rgba(255,255,255,.75)' }}>dès 2 000 FCFA / tome</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
