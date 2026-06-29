// ============================================================================
// ExamHall — Le Hall d'Examen : choix de l'épreuve puis du niveau (paliers).
// Deux sous-vues : 'mode' (Interro vs Devoir), 'level' (BASE / MOYEN / BAC).
// ============================================================================

import { useState } from 'react';
import { ArrowRight, CheckCircle2, CheckSquare, ChevronLeft, FileText, Lock } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { GrandFrereBubble } from './GrandFrereBubble';
import { LEVELS, levelStatus, unlockRequirements, modeLabel } from '../../utils/examen-utils';
import type { ExamData, ExamLevel, ExamMode, ModeProgress } from '../../types/examen';
import type { SimulateurProgress } from '../../types/examen';

interface ExamHallProps {
  exam: ExamData;
  progress: SimulateurProgress;
  onLaunch: (mode: ExamMode, level: ExamLevel) => void;
}

const LEVEL_META: Record<ExamLevel, { rail: string }> = {
  BASE:  { rail: '#1E8449' },
  MOYEN: { rail: '#E67E22' },
  BAC:   { rail: '#1565C0' },
};

export function ExamHall({ exam, progress, onLaunch }: ExamHallProps) {
  const { palette } = useTheme();
  const [mode, setMode] = useState<ExamMode | null>(null);

  // ── Vue 1 : choix de l'épreuve ───────────────────────────────────────────
  if (!mode) {
    return (
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <div style={{ background: palette.bannerBg, borderRadius: 22, padding: '26px 24px', color: '#fff' }}>
          <div style={{ font: '700 10px/1 Poppins, sans-serif', letterSpacing: '.16em', textTransform: 'uppercase', color: '#9FC0E4' }}>
            Mode Examen · {exam.tome}
          </div>
          <h2 style={{ margin: '13px 0 0', font: '800 26px/1.1 Poppins, sans-serif' }}>Que veux-tu travailler aujourd'hui ?</h2>
        </div>

        <div style={{ display: 'grid', gap: 13, marginTop: 16 }}>
          <ModeCard
            title="Interrogation" kicker="QCM · Révision" icon={<CheckSquare size={24} />}
            accent={palette.accent} soft={palette.accentSoft}
            desc="Teste si tu maîtrises tes formules et tes méthodes. Correction automatique, bilan immédiat."
            tags={['10–30 min', 'QCM auto-corrigé']} onClick={() => setMode('interro')} palette={palette}
          />
          <ModeCard
            title="Devoir Surveillé" kicker="Conditions réelles" icon={<FileText size={24} />}
            accent={palette.accent2} soft={palette.bg3}
            desc="Compose sur ta feuille comme au BAC, puis auto-évalue ta copie au barème pour décrocher ta note."
            tags={['30 min – 2h', 'Rédigé · au barème']} onClick={() => setMode('devoir')} palette={palette}
          />
        </div>
        <div style={{ marginTop: 16, textAlign: 'center', font: '500 12px/1.5 Poppins, sans-serif', color: palette.ink3 }}>
          Tu choisiras ton niveau juste après.
        </div>
      </div>
    );
  }

  // ── Vue 2 : choix du niveau ──────────────────────────────────────────────
  const modeProgress = progress[mode];
  const cfg = mode === 'devoir' ? exam.devoir : exam.interro;

  return (
    <div style={{ maxWidth: 640, margin: '0 auto' }}>
      <button onClick={() => setMode(null)}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', color: palette.ink2, font: '600 13px/1 Poppins, sans-serif', marginBottom: 14 }}>
        <ChevronLeft size={16} /> {modeLabel(mode)} · changer d'épreuve
      </button>

      <div style={{ background: mode === 'devoir' ? palette.accent2 : palette.accent, borderRadius: 22, padding: '24px', color: '#fff' }}>
        <div style={{ font: '700 10px/1 Poppins, sans-serif', letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.78)' }}>
          {modeLabel(mode)} · {exam.sousTitre}
        </div>
        <h2 style={{ margin: '12px 0 0', font: '800 26px/1.12 Poppins, sans-serif' }}>Choisis ton niveau</h2>
        <div style={{ marginTop: 5, font: "400 13.5px/1.5 'Newsreader', serif", color: 'rgba(255,255,255,.85)', fontStyle: 'italic' }}>
          Plus tu montes, plus c'est long et exigeant.
        </div>
      </div>

      <div style={{ display: 'grid', gap: 12, marginTop: 16 }}>
        {LEVELS.map(level => (
          <LevelCard key={level} mode={mode} level={level} cfg={cfg[level]} modeProgress={modeProgress}
            onLaunch={onLaunch} palette={palette} />
        ))}
      </div>
    </div>
  );
}

// ── Carte d'épreuve ──────────────────────────────────────────────────────────
function ModeCard({ title, kicker, icon, accent, soft, desc, tags, onClick, palette }: any) {
  return (
    <button onClick={onClick}
      style={{ textAlign: 'left', background: palette.bg2, border: `1px solid ${palette.line}`, borderRadius: 20, padding: 18, cursor: 'pointer', boxShadow: `0 8px 24px ${palette.shadow}` }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ flex: 'none', width: 46, height: 46, borderRadius: 14, background: soft, color: accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</div>
        <div>
          <div style={{ font: '800 17px/1.1 Poppins, sans-serif', color: palette.ink }}>{title}</div>
          <div style={{ font: '700 10px/1 Poppins, sans-serif', letterSpacing: '.08em', textTransform: 'uppercase', color: accent, marginTop: 4 }}>{kicker}</div>
        </div>
        <ArrowRight size={20} style={{ marginLeft: 'auto', color: palette.ink3 }} />
      </div>
      <p style={{ margin: '13px 0 0', font: "400 13.5px/1.55 'Newsreader', serif", color: palette.ink2 }}>{desc}</p>
      <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', marginTop: 12 }}>
        {tags.map((t: string) => (
          <span key={t} style={{ font: '600 10.5px/1 Poppins, sans-serif', color: accent, background: soft, padding: '6px 10px', borderRadius: 999 }}>{t}</span>
        ))}
      </div>
    </button>
  );
}

// ── Carte de niveau ──────────────────────────────────────────────────────────
function LevelCard({ mode, level, cfg, modeProgress, onLaunch, palette }: {
  mode: ExamMode; level: ExamLevel; cfg: any; modeProgress: ModeProgress; onLaunch: any; palette: any;
}) {
  const status = levelStatus(modeProgress, level);
  const rail = LEVEL_META[level].rail;
  const locked = status === 'locked';
  const reqs = locked ? unlockRequirements(modeProgress, level) : [];
  const count = mode === 'devoir' ? `${cfg.exercices.length} exercice${cfg.exercices.length > 1 ? 's' : ''}` : `${cfg.questions.length} questions`;

  return (
    <div style={{
      background: locked ? palette.bg3 : palette.bg2,
      border: status === 'mastered' ? `2px solid ${rail}` : locked ? `1.5px dashed ${palette.line}` : `1px solid ${palette.line}`,
      borderRadius: 18, padding: 16,
      boxShadow: status === 'mastered' ? `0 8px 22px ${palette.shadow}` : 'none',
    }}>
      <div style={{ display: 'flex', gap: 13, alignItems: 'center' }}>
        <div style={{ flex: 'none', width: 11, height: 46, borderRadius: 999, background: locked ? palette.ink3 : rail }} />
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ font: '800 15px/1 Poppins, sans-serif', color: locked ? palette.ink3 : palette.ink }}>{level}</span>
            <span style={{ font: '700 10px/1 Poppins, sans-serif', color: locked ? palette.ink3 : rail, background: locked ? palette.line : `${rail}1A`, padding: '5px 8px', borderRadius: 999 }}>
              {cfg.dureeMin} min · {count}
            </span>
            {status === 'mastered' && <span style={{ font: '700 9px/1 Poppins, sans-serif', textTransform: 'uppercase', letterSpacing: '.04em', color: rail }}>Maîtrisé</span>}
          </div>
          <div style={{ marginTop: 6, font: "400 12.5px/1.45 'Newsreader', serif", color: palette.ink2 }}>{cfg.description}</div>
        </div>
        <div style={{ flex: 'none' }}>
          {locked
            ? <span style={{ width: 30, height: 30, borderRadius: 999, background: palette.line, color: palette.ink3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Lock size={15} /></span>
            : status === 'mastered'
              ? <span style={{ width: 26, height: 26, borderRadius: 999, background: rail, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckCircle2 size={15} /></span>
              : null}
        </div>
      </div>

      {locked && (
        <div style={{ marginTop: 13, paddingTop: 13, borderTop: `1px dashed ${palette.line}` }}>
          <div style={{ font: '700 9.5px/1 Poppins, sans-serif', letterSpacing: '.07em', textTransform: 'uppercase', color: palette.ink3, marginBottom: 11 }}>
            Conditions de déblocage
          </div>
          {reqs.map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 9 }}>
              <span style={{ flex: 'none', width: 19, height: 19, borderRadius: 999, background: r.done ? '#1E8449' : 'transparent', border: r.done ? 'none' : `2px solid ${palette.anaBar}`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {r.done && <CheckCircle2 size={11} />}
              </span>
              <span style={{ flex: 1, font: "500 12.5px/1.35 'Newsreader', serif", color: palette.ink }}>{r.label}</span>
              <span style={{ font: '700 10px/1 Poppins, sans-serif', color: r.done ? '#176B3C' : palette.anaInk }}>{r.progress}</span>
            </div>
          ))}
          <div style={{ marginTop: 10 }}>
            <GrandFrereBubble>Tu y es presque, champion — réussis l'étape ci-dessus et ce niveau s'ouvre.</GrandFrereBubble>
          </div>
        </div>
      )}

      {!locked && (
        <button onClick={() => onLaunch(mode, level)}
          style={{ marginTop: 14, width: '100%', padding: 14, border: 'none', cursor: 'pointer', borderRadius: 14, background: mode === 'devoir' ? palette.accent2 : palette.accent, color: '#fff', font: '800 14px/1 Poppins, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          Lancer — {level} · {cfg.dureeMin} min <ArrowRight size={16} />
        </button>
      )}
    </div>
  );
}
