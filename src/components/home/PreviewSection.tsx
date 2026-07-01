import { useState, ReactNode } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import {
  BookOpen, Lightbulb, MessageCircle, Route, PenLine, Star,
  Users, TrendingUp, ChevronLeft, ChevronRight, List, Clock, Check,
  Edit3, Flag, Download, DownloadCloud,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PhoneMockup } from '../ui/PhoneMockup';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { MATHS_TOME_IDS } from '../../data/skus';

// Palette light « focus » — valeurs exactes de ThemeContext, pour coller au reader réel.
const P = {
  accent: '#1976D2', accentSoft: '#EAF3FC', onAccent: '#FFFFFF',
  ink: '#16202B', ink2: '#586672', ink3: '#9AA4AE',
  line: '#ECEFF3', bg2: '#FFFFFF', bg3: '#F6F8FA',
  gfBubble: '#EFF5FB',
  tipBg: '#EAF7EF', tipBar: '#1E8449',
  glass: 'rgba(255,255,255,.85)', glassLine: 'rgba(20,30,40,.06)',
};

const avatarFallback = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.src = 'https://ui-avatars.com/api/?name=Marius&background=1A3557&color=fff';
};

// ── Blocs fidèles au BlockRenderer (styles light) ────────────────────────────
function AnalogyCard({ title, concept, children }: { title: string; concept?: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl overflow-hidden border" style={{ background: '#FDF6EC', borderColor: '#E67E22' }}>
      <div className="flex items-center gap-2 px-3 py-2 bg-orange-100 border-b border-orange-200">
        <span className="text-sm">🌍</span>
        <span className="text-[11px] font-bold" style={{ color: '#E67E22' }}>{title}</span>
      </div>
      <div className="px-3 py-3 text-[11px] leading-relaxed" style={{ color: '#374151' }}>{children}</div>
      {concept && (
        <div className="mx-3 mb-3 px-3 py-2 rounded-lg border-l-4 border-blue-500 bg-blue-50">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-[11px]">🧮</span>
            <span className="text-[8px] font-bold uppercase tracking-wider text-blue-700">Traduction mathématique</span>
          </div>
          <div className="text-[10px] leading-relaxed text-blue-900">{concept}</div>
        </div>
      )}
    </div>
  );
}

// Dialogue Petit Frère / Grand Frère (bulles), fidèle au bloc 'dialogue'.
function DialogueMock({ pf, gf }: { pf: string; gf: string }) {
  return (
    <div className="space-y-3">
      <div className="flex items-end gap-2 max-w-[92%]">
        <div className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm bg-gray-100">👦</div>
        <div className="rounded-[16px] rounded-bl-sm px-3 py-2 text-[11px] leading-relaxed shadow-sm" style={{ background: '#F0F0F0', color: '#1F2937' }}>{pf}</div>
      </div>
      <div className="flex items-end gap-2 max-w-[92%] ml-auto flex-row-reverse">
        <img src="/images/profil.jpeg" alt="Grand Frère" onError={avatarFallback} className="shrink-0 w-7 h-7 rounded-full object-cover" />
        <div className="rounded-[16px] rounded-br-sm px-3 py-2 text-[11px] leading-relaxed shadow-sm" style={{ background: '#EBF3FF', color: '#1A3557' }}>{gf}</div>
      </div>
    </div>
  );
}

// Méthode — étapes numérotées (style procédure).
function MethodCard({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div className="rounded-2xl overflow-hidden border shadow-sm bg-white" style={{ borderColor: P.line }}>
      <div className="px-3 py-2.5 flex items-center gap-2 bg-blue-50 border-b border-blue-100">
        <Route className="w-4 h-4" style={{ color: P.accent }} />
        <span className="text-[11px] font-bold" style={{ color: P.accent }}>{title}</span>
      </div>
      <div className="p-3 space-y-2.5">
        {steps.map((t, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <span className="text-[10px] text-white w-5 h-5 rounded-full flex items-center justify-center shrink-0 font-bold" style={{ background: P.accent }}>{i + 1}</span>
            <p className="text-[10px] leading-relaxed text-gray-700">{t}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Copie Parfaite — rédaction modèle sur « papier ligné » + barème.
function CopieCard({ enonce, lines, bareme }: { enonce: string; lines: string[]; bareme: string }) {
  return (
    <div className="rounded-2xl overflow-hidden border shadow-sm bg-white" style={{ borderColor: P.line }}>
      <div className="px-3 py-2.5 flex items-center gap-2 border-b" style={{ borderColor: P.line, background: P.bg3 }}>
        <PenLine className="w-4 h-4" style={{ color: P.ink }} />
        <span className="text-[11px] font-bold" style={{ color: P.ink }}>La Copie Parfaite</span>
      </div>
      <p className="px-3 pt-2 text-[9px] font-mono text-gray-400">{enonce}</p>
      <div className="px-3 py-2 space-y-[7px]" style={{ backgroundImage: 'repeating-linear-gradient(#ffffff, #ffffff 21px, #eef2f7 22px)' }}>
        {lines.map((l, i) => (
          <p key={i} className="text-[10px] font-mono leading-relaxed" style={{ color: P.ink }}>{l}</p>
        ))}
      </div>
      <div className="px-3 py-2 flex items-center justify-between border-t bg-green-50" style={{ borderColor: P.line }}>
        <span className="text-[8px] font-bold uppercase tracking-wider" style={{ color: P.tipBar }}>✓ Tous les points du barème</span>
        <span className="text-[10px] font-bold" style={{ color: P.tipBar }}>{bareme}</span>
      </div>
    </div>
  );
}

// Conseil du Grand Frère — encadré vert, fidèle au bloc 'tip' (défaut « Conseil du Grand Frère »).
function ConseilCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm border" style={{ background: 'linear-gradient(135deg,#D5F5E3cc,#ECFDF5)', borderColor: P.tipBar }}>
      <div className="flex items-center gap-2 px-3 py-2.5 bg-emerald-100/60 border-b border-emerald-200">
        <Star className="w-4 h-4" style={{ color: P.tipBar }} />
        <span className="text-[11px] font-bold tracking-wide" style={{ color: P.tipBar }}>Conseil du Grand Frère</span>
      </div>
      <div className="px-3 py-3 text-[11px] leading-relaxed text-gray-800">{children}</div>
    </div>
  );
}

// ── 5 écrans = vrais blocs variés, contenu réel repris du programme ──────────
const tabs = [
  {
    id: 'analogie',
    label: 'Analogie',
    icon: <Lightbulb className="w-4 h-4" />,
    color: 'text-eductome-sky',
    activeBg: 'bg-blue-50',
    tomeEyebrow: 'Tome 5 · Log & Exponentielle',
    chapNum: 4,
    chapterTitle: 'Le logarithme décimal',
    duree: 25, niveau: 'MOYEN', xp: 50, progress: 30,
    gfQuote: '« Des nombres géants, rangés sur une petite règle. »',
    objectives: [
      'Comprendre pourquoi le logarithme compresse les grandes échelles',
      "Passer d'une multiplication à une addition",
    ],
    sectionTitle: 'Comprendre avant de calculer',
    heading: 'Analogies du quotidien ivoirien',
    desc: "Chaque notion abstraite est reliée à une scène que tu vis à Abidjan : le labo, le marché, le quartier. Tu comprends avant de calculer.",
    block: (
      <AnalogyCard
        title="Le laborantin du CHU de Treichville"
        concept="log₁₀ transforme un million (10⁶) en 6 : il range des échelles démesurées sur une règle lisible."
      >
        Au CHU de Treichville, un laborantin mesure l'acidité des solutions : le jus de bissap est très acide, l'eau
        neutre, le savon basique. Le souci, c'est que les concentrations varient par des facteurs <b className="text-eductome-marine">gigantesques</b> —
        un million, dix millions de fois. Écrire ces nombres en entier remplirait toute la paillasse. Le logarithme,
        c'est l'outil qui range ces échelles démesurées sur une petite règle qu'on peut lire d'un coup d'œil.
      </AnalogyCard>
    ),
  },
  {
    id: 'conversation',
    label: 'Conversation',
    icon: <MessageCircle className="w-4 h-4" />,
    color: 'text-eductome-green',
    activeBg: 'bg-green-50',
    tomeEyebrow: 'Tome 1 · Les Limites',
    chapNum: 5,
    chapterTitle: 'Limite et continuité',
    duree: 30, niveau: 'MOYEN', xp: 50, progress: 60,
    gfQuote: '« C\'est pas pareil — mais c\'est cousin. »',
    objectives: [
      'Distinguer une limite d\'une continuité',
      'Voir si la courbe est en un seul morceau, ou si elle se casse',
    ],
    sectionTitle: "Le Grand Frère t'explique",
    heading: 'Expliqué comme un grand frère',
    desc: "Pas de monologue académique : une vraie conversation. Le Petit Frère pose LA question que tout le monde se pose, le Grand Frère y répond simplement.",
    block: (
      <DialogueMock
        pf="Grand Frère, on vient de passer des semaines sur les limites. Pourquoi on remet ça avec un nouveau mot, la « continuité » ? C'est pas la même chose ?"
        gf="Bonne question, Champion(ne). Non, c'est pas pareil — mais c'est cousin. La limite te dit : vers quoi la fonction se dirige quand tu t'approches d'un point. La continuité pose une autre question, plus simple à voir : est-ce que la courbe est en un seul morceau, ou est-ce qu'elle se casse ?"
      />
    ),
  },
  {
    id: 'methode',
    label: 'Méthode',
    icon: <Route className="w-4 h-4" />,
    color: 'text-eductome-marine',
    activeBg: 'bg-blue-50',
    tomeEyebrow: 'Tome 2 · Les Dérivées',
    chapNum: 1,
    chapterTitle: 'Le nombre dérivé',
    duree: 30, niveau: 'MOYEN', xp: 50, progress: 55,
    gfQuote: '« Une procédure claire, et l\'indétermination tombe toute seule. »',
    objectives: [
      "Donner un sens concret à la vitesse instantanée d'une courbe",
      'Calculer un nombre dérivé par la définition, sans te tromper',
    ],
    sectionTitle: 'La procédure, pas à pas',
    heading: 'Une méthode que tu peux refaire seul',
    desc: "Chaque notion se termine par une procédure numérotée : les étapes exactes à poser sur ta copie, dans l'ordre, pour ne jamais rester bloqué.",
    block: (
      <MethodCard
        title="Le nombre dérivé — en 4 étapes"
        steps={[
          'Écris le taux (f(a+h) − f(a)) / h en remplaçant x par (a+h).',
          "Développe le numérateur : les termes sans h s'annulent avec f(a).",
          "Factorise h, puis simplifie avec le h du bas — c'est l'étape qui détruit l'indétermination.",
          "Fais tendre h vers 0 et lis le résultat : c'est f'(a).",
        ]}
      />
    ),
  },
  {
    id: 'copie',
    label: 'Copie parfaite',
    icon: <PenLine className="w-4 h-4" />,
    color: 'text-eductome-orange',
    activeBg: 'bg-orange-50',
    tomeEyebrow: 'Tome 1 · Les Limites',
    chapNum: 2,
    chapterTitle: 'Lever une forme 0/0',
    duree: 25, niveau: 'MOYEN', xp: 50, progress: 72,
    gfQuote: '« Avoir le bon résultat ne suffit pas : il faut le rédiger. »',
    objectives: [
      "Rédiger une levée de 0/0 dans les règles de l'art",
      'Récolter tous les points du barème, pas seulement le résultat',
    ],
    sectionTitle: 'La Copie Parfaite',
    heading: 'La copie exacte à rendre au BAC',
    desc: "En série D, le bon résultat ne suffit pas. On te montre, ligne par ligne, ce qu'il faut écrire sur ta feuille pour prendre tous les points.",
    block: (
      <CopieCard
        enonce="Calculer  lim(x→2) (x²−4)/(x−2)"
        lines={[
          '① x²−4 = (x−2)(x+2)',
          '② Pour x ≠ 2 : (x²−4)/(x−2) = x+2',
          '③ lim(x→2) (x+2) = 2 + 2',
          '∴ lim(x→2) (x²−4)/(x−2) = 4',
        ]}
        bareme="4 / 4 pts"
      />
    ),
  },
  {
    id: 'conseil',
    label: 'Conseil',
    icon: <Star className="w-4 h-4" />,
    color: 'text-eductome-green',
    activeBg: 'bg-green-50',
    tomeEyebrow: 'Tome 1 · Les Limites',
    chapNum: 1,
    chapterTitle: "Calcul direct d'une limite",
    duree: 15, niveau: 'BASE', xp: 30, progress: 40,
    gfQuote: '« Ne complique pas quand la porte est grande ouverte. »',
    objectives: [
      'Prendre le bon réflexe : tester le calcul direct en premier',
      'Éviter les factorisations inutiles qui font perdre du temps',
    ],
    sectionTitle: 'Conseil du Grand Frère',
    heading: 'Les réflexes des majors',
    desc: "Après chaque notion, un conseil court et concret du Grand Frère : le réflexe qui fait gagner des points, l'erreur à ne surtout pas commettre.",
    block: (
      <ConseilCard>
        Devant un polynôme ou une fraction bienveillante, commence <b className="text-eductome-marine">toujours</b> par la
        solution la plus directe : remplace x par sa valeur, ça prend quelques secondes au brouillon. Si le dénominateur
        ne s'annule pas, tu as fini. Ne va jamais inventer des factorisations compliquées quand la porte est grande ouverte.
      </ConseilCard>
    ),
  },
];

// ── Anneau de progression du dock (repris du reader) ─────────────────────────
function ProgressRing({ value }: { value: number }) {
  const dash = 94.2;
  return (
    <div className="relative w-[30px] h-[30px]">
      <svg width="30" height="30" viewBox="0 0 36 36" className="-rotate-90">
        <circle cx="18" cy="18" r="15" fill="none" stroke={P.bg3} strokeWidth="4" />
        <circle cx="18" cy="18" r="15" fill="none" stroke={P.accent} strokeWidth="4" strokeLinecap="round"
          strokeDasharray={dash} strokeDashoffset={dash - (dash * value) / 100} />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[8px] font-extrabold" style={{ color: P.accent }}>
        {value}
      </span>
    </div>
  );
}

export function PreviewSection() {
  const [activeTab, setActiveTab] = useState('analogie');
  const active = tabs.find((t) => t.id === activeTab) ?? tabs[0];
  const idx = tabs.findIndex((t) => t.id === active.id);
  const go = (dir: number) => setActiveTab(tabs[(idx + dir + tabs.length) % tabs.length].id);

  // Dock du bas — fidèle au reader (Notes / Signaler / PDF / Gbaka + anneau %).
  const dock = (
    <div
      className="rounded-[18px] p-1.5 flex items-center gap-0.5 shadow-lg"
      style={{ background: P.glass, backdropFilter: 'blur(12px) saturate(160%)', WebkitBackdropFilter: 'blur(12px) saturate(160%)', border: `1px solid ${P.glassLine}` }}
    >
      {[
        { icon: <Edit3 className="w-[18px] h-[18px]" strokeWidth={2} />, label: 'Notes' },
        { icon: <Flag className="w-[18px] h-[18px]" strokeWidth={2} />, label: 'Signaler' },
        { icon: <Download className="w-[18px] h-[18px]" strokeWidth={2} />, label: 'PDF' },
        { icon: <DownloadCloud className="w-[18px] h-[18px]" strokeWidth={2} />, label: 'Gbaka' },
      ].map((a) => (
        <div key={a.label} className="flex-1 flex flex-col items-center gap-[2px] py-1 rounded-xl" style={{ color: P.ink2 }}>
          {a.icon}
          <span className="text-[8px] font-semibold">{a.label}</span>
        </div>
      ))}
      <div className="w-px h-[26px] mx-0.5" style={{ background: P.glassLine }} />
      <div className="px-1"><ProgressRing value={active.progress} /></div>
    </div>
  );

  return (
    <section className="py-16 md:py-28 bg-white px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header — traitement éditorial premium */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-eductome-magenta/50" />
              <span className="inline-flex items-center gap-2 text-eductome-magenta font-semibold tracking-[0.22em] uppercase text-[11px] md:text-xs">
                <BookOpen className="w-3.5 h-3.5" /> Un coup d'œil à l'intérieur
              </span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-eductome-magenta/50" />
            </div>

            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-eductome-marine mb-6 leading-[1.08] tracking-tight">
              Pas un manuel<br className="hidden sm:block" />{' '}
              <span className="italic font-medium text-eductome-magenta">comme les autres.</span>
            </h2>

            <p className="text-gray-500 text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed">
              Voici <span className="text-eductome-marine font-semibold">exactement</span> ce que ton enfant a sous les yeux —
              du vrai contenu, pas une maquette.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Preview — Carrousel iPhone */}
        <ScrollReveal delay={0.15}>
          <div className="flex flex-col items-center gap-7 mb-14">
            {/* Carrousel — flèches latérales autour de l'iPhone */}
            <div className="relative w-[290px] max-w-full">
              <PhoneMockup dock={dock}>
                {/* Barre du haut en glass (comme le reader) */}
                <header
                  className="rounded-[16px] p-[7px] pr-2.5 flex items-center gap-2 shadow-md mb-2"
                  style={{ background: P.glass, backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: `1px solid ${P.glassLine}` }}
                >
                  <div className="w-7 h-7 shrink-0 rounded-[8px] flex items-center justify-center" style={{ background: P.accentSoft, color: P.accent }}>
                    <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 min-w-0 text-center">
                    <div className="text-[8px] font-bold tracking-[0.12em] uppercase truncate" style={{ color: P.accent }}>{active.tomeEyebrow}</div>
                    <div className="text-[11px] font-bold truncate mt-0.5" style={{ color: P.ink }}>{active.chapterTitle}</div>
                  </div>
                  <div className="w-7 h-7 shrink-0 rounded-[8px] flex items-center justify-center" style={{ background: P.bg3, color: P.ink2 }}>
                    <List className="w-4 h-4" strokeWidth={2.2} />
                  </div>
                </header>

                {/* Barre de progression sous le header */}
                <div className="h-[3px] mx-1 rounded-full overflow-hidden mb-4" style={{ background: P.bg3 }}>
                  <div className="h-full rounded-full" style={{ width: `${active.progress}%`, background: P.accent }} />
                </div>

                {/* En-tête de chapitre */}
                <span className="inline-block text-[8px] font-bold tracking-[0.12em] uppercase px-2 py-[3px] rounded-full" style={{ color: P.accent, background: P.accentSoft }}>
                  Les Clés · Maths · Chapitre {active.chapNum}
                </span>
                <h1 className="text-[22px] font-black leading-[1.08] mt-2 tracking-tight" style={{ color: P.ink, fontFamily: "'Playfair Display',serif" }}>
                  {active.chapterTitle}
                </h1>
                <div className="mt-2 h-1 w-[42px] rounded-full" style={{ background: P.accent }} />

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="inline-flex items-center gap-1 text-[9px] font-semibold px-2 py-[4px] rounded-full border" style={{ color: P.ink2, background: P.bg2, borderColor: P.line }}>
                    <Clock className="w-2.5 h-2.5" /> {active.duree} min
                  </span>
                  <span className="inline-flex items-center text-[9px] font-bold px-2 py-[4px] rounded-full" style={{ color: P.tipBar, background: P.tipBg }}>
                    Niveau {active.niveau}
                  </span>
                  <span className="inline-flex items-center text-[9px] font-bold px-2 py-[4px] rounded-full" style={{ color: P.accent, background: P.accentSoft }}>
                    ★ +{active.xp} XP
                  </span>
                </div>

                {/* Encadré Grand Frère */}
                <div className="flex items-center gap-2.5 mt-3 p-2.5 rounded-[16px]" style={{ background: P.gfBubble }}>
                  <div className="relative shrink-0">
                    <img src="/images/profil.jpeg" alt="Marius" onError={avatarFallback} className="w-9 h-9 rounded-full object-cover border-2" style={{ borderColor: P.accent }} />
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white" style={{ background: P.tipBar }} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] font-bold" style={{ color: P.ink }}>Marius · ton grand frère</div>
                    <div className="text-[13px] leading-tight font-caveat" style={{ color: P.ink }}>{active.gfQuote}</div>
                  </div>
                </div>

                {/* Objectifs */}
                <div className="mt-3 p-3 rounded-[16px] border" style={{ background: P.bg3, borderColor: P.line }}>
                  <div className="text-[8px] font-bold tracking-[0.1em] uppercase mb-2" style={{ color: P.ink3 }}>Objectifs du chapitre</div>
                  <div className="space-y-1.5">
                    {active.objectives.map((obj, i) => (
                      <div key={i} className="flex gap-2 items-start">
                        <span className="shrink-0 mt-[1px] w-3.5 h-3.5 rounded-[4px] flex items-center justify-center" style={{ background: P.accent, color: P.onAccent }}>
                          <Check className="w-2.5 h-2.5" strokeWidth={3.2} />
                        </span>
                        <span className="text-[10px] leading-snug font-medium" style={{ color: P.ink }}>{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section + bloc réel */}
                <div className="mt-4 pb-2 border-b-2 mb-3" style={{ borderBottomColor: P.accent }}>
                  <span className="block text-[8px] font-bold tracking-[0.1em] uppercase" style={{ color: P.accent }}>Section 1</span>
                  <span className="text-[15px] font-bold" style={{ color: P.ink, fontFamily: "'Playfair Display',serif" }}>{active.sectionTitle}</span>
                </div>

                {active.block}
              </PhoneMockup>

              {/* Flèches de navigation latérales */}
              <button
                onClick={() => go(-1)}
                aria-label="Écran précédent"
                className="absolute top-1/2 -translate-y-1/2 -left-3 sm:-left-8 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-eductome-marine hover:bg-eductome-marine hover:text-white hover:border-eductome-marine transition-all duration-300 hover:scale-105"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Écran suivant"
                className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-8 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-eductome-marine hover:bg-eductome-marine hover:text-white hover:border-eductome-marine transition-all duration-300 hover:scale-105"
              >
                <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
              </button>
            </div>

            {/* Points indicateurs */}
            <div className="flex items-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  aria-label={`Voir ${tab.label}`}
                  className={`h-2 rounded-full transition-all duration-300 ${activeTab === tab.id ? 'w-6 bg-eductome-magenta' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
                />
              ))}
            </div>

            {/* Description — reste affichée en bas, suit l'écran actif */}
            <div className="w-full max-w-lg text-center bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <span className={`inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 ${active.activeBg} ${active.color}`}>
                {active.tomeEyebrow}
              </span>
              <h3 className={`font-bold text-lg mb-2 ${active.color}`}>{active.heading}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{active.desc}</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats bar */}
        <ScrollReveal delay={0.3}>
          <div className="bg-eductome-marine rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-8">
              <AnimatedCounter
                end={3200}
                prefix="+"
                label="élèves utilisent EDUCTOME"
                icon={<Users className="w-5 h-5 text-eductome-magenta" />}
              />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                </div>
                <div>
                  <div className="text-white font-extrabold text-xl leading-none tracking-tight">4,9<span className="text-blue-200">/5</span></div>
                  <div className="text-blue-200 text-xs mt-1 font-medium">satisfaction moyenne</div>
                </div>
              </div>
              <AnimatedCounter
                end={MATHS_TOME_IDS.length}
                suffix=" tomes"
                label="couvrant le programme complet"
                icon={<TrendingUp className="w-5 h-5 text-eductome-green" />}
                duration={800}
              />
            </div>

            <Link
              to="/ressources?tab=exercices"
              className="shrink-0 bg-eductome-magenta hover:bg-pink-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-pink-900/30 text-sm whitespace-nowrap"
            >
              Essayer gratuitement →
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
