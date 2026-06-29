// ============================================================================
// Convocation — briefing du Devoir : durée/exercices/barème + mise en
// condition de concentration, puis décompte 3-2-1 avant le lancement du chrono.
// ============================================================================

import { useEffect, useState } from 'react';
import { ArrowRight, BellRing, ListChecks, Smartphone, VolumeX } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { GrandFrereBubble } from './GrandFrereBubble';
import type { DevoirLevelConfig, ExamData } from '../../types/examen';

interface ConvocationProps {
  exam: ExamData;
  cfg: DevoirLevelConfig;
  onStart: () => void;     // appelé à la fin du décompte (lance le chrono)
}

const RULES = [
  { icon: <VolumeX size={16} />, label: 'Active le mode silencieux' },
  { icon: <BellRing size={16} />, label: 'Coupe tes notifications' },
  { icon: <Smartphone size={16} />, label: "Ne quitte pas l'app", note: 'si tu sors, le chrono continue' },
  { icon: <ListChecks size={16} />, label: 'Feuille, stylo, calculatrice prêts' },
];

export function Convocation({ exam, cfg, onStart }: ConvocationProps) {
  const { palette } = useTheme();
  const [count, setCount] = useState<number | null>(null); // null = briefing, 3..0 = décompte
  const totalPoints = cfg.exercices.reduce((s, e) => s + e.points, 0);

  useEffect(() => {
    if (count === null) return;
    if (count === 0) { const id = setTimeout(onStart, 700); return () => clearTimeout(id); }
    const id = setTimeout(() => setCount(c => (c ?? 0) - 1), 1000);
    return () => clearTimeout(id);
  }, [count, onStart]);

  // ── Décompte 3-2-1 ────────────────────────────────────────────────────────
  if (count !== null) {
    const ringRatio = (3 - count) / 3;
    const r = 92, c = 2 * Math.PI * r;
    return (
      <div style={{ maxWidth: 460, margin: '0 auto', background: palette.bannerBg, borderRadius: 24, padding: '52px 32px', textAlign: 'center', color: '#fff' }}>
        <div style={{ font: '700 10px/1 Poppins, sans-serif', letterSpacing: '.2em', textTransform: 'uppercase', color: '#9FC0E4' }}>
          La composition démarre dans
        </div>
        <div style={{ position: 'relative', width: 200, height: 200, margin: '28px auto' }}>
          <svg width="200" height="200" viewBox="0 0 200 200" style={{ transform: 'rotate(-90deg)' }}>
            <circle cx="100" cy="100" r={r} fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="7" />
            <circle cx="100" cy="100" r={r} fill="none" stroke="#5A93E0" strokeWidth="7" strokeLinecap="round"
              strokeDasharray={c} strokeDashoffset={c * (1 - ringRatio)} style={{ transition: 'stroke-dashoffset 1s linear' }} />
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ font: '900 96px/1 Poppins, sans-serif' }}>{count === 0 ? 'Go' : count}</span>
          </div>
        </div>
        <h2 style={{ margin: 0, font: '800 24px/1.15 Poppins, sans-serif' }}>Respire. Prends ta feuille.</h2>
        <p style={{ margin: '12px 0 0', font: "400 15px/1.6 'Newsreader', serif", color: '#C8D6E8', fontStyle: 'italic' }}>
          Le chrono se lance au « Go ». À partir de là, tu es en conditions réelles.
        </p>
      </div>
    );
  }

  // ── Briefing ──────────────────────────────────────────────────────────────
  return (
    <div style={{ maxWidth: 560, margin: '0 auto' }}>
      <div style={{ background: palette.accent2, borderRadius: '22px 22px 0 0', padding: '24px', color: '#fff' }}>
        <div style={{ font: '700 10px/1 Poppins, sans-serif', letterSpacing: '.16em', textTransform: 'uppercase', color: '#9FC0E4' }}>
          Devoir Surveillé · {cfg.level}
        </div>
        <h2 style={{ margin: '13px 0 0', font: '800 26px/1.08 Poppins, sans-serif' }}>{exam.tome}</h2>
        <div style={{ marginTop: 6, font: "400 14px/1.5 'Newsreader', serif", color: '#C8D6E8', fontStyle: 'italic' }}>{exam.matiere} · {exam.sousTitre}</div>
      </div>

      <div style={{ background: palette.bg2, border: `1px solid ${palette.line}`, borderTop: 'none', borderRadius: '0 0 22px 22px', padding: 20 }}>
        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 9 }}>
          {[[`${cfg.dureeMin >= 60 ? (cfg.dureeMin / 60) + 'h' + (cfg.dureeMin % 60 ? String(cfg.dureeMin % 60).padStart(2, '0') : '00') : cfg.dureeMin + ' min'}`, 'Durée'],
            [`${cfg.exercices.length}`, 'Exercices'],
            ['/20', 'Noté sur']].map(([big, lbl]) => (
            <div key={lbl} style={{ background: palette.bg, border: `1px solid ${palette.line}`, borderRadius: 16, padding: '14px 8px', textAlign: 'center' }}>
              <div style={{ font: '800 20px/1 Poppins, sans-serif', color: palette.accent2 }}>{big}</div>
              <div style={{ font: '600 9.5px/1 Poppins, sans-serif', letterSpacing: '.06em', textTransform: 'uppercase', color: palette.ink3, marginTop: 6 }}>{lbl}</div>
            </div>
          ))}
        </div>

        {/* Règles de concentration */}
        <div style={{ marginTop: 14, background: palette.bg, border: `1px solid ${palette.line}`, borderRadius: 18, overflow: 'hidden' }}>
          <div style={{ padding: '13px 16px', background: palette.warnBg, display: 'flex', alignItems: 'center', gap: 8 }}>
            <BellRing size={15} style={{ color: '#D81B60' }} />
            <span style={{ font: '700 12px/1 Poppins, sans-serif', color: palette.warnInk }}>Mets-toi en conditions de concentration</span>
          </div>
          <div style={{ padding: '4px 16px 12px' }}>
            {RULES.map((rule, i) => (
              <div key={i} style={{ display: 'flex', gap: 11, alignItems: 'center', padding: '11px 0', borderBottom: i < RULES.length - 1 ? `1px solid ${palette.line}` : 'none' }}>
                <div style={{ flex: 'none', width: 30, height: 30, borderRadius: 9, background: palette.bg3, color: palette.accent2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{rule.icon}</div>
                <div style={{ flex: 1, font: '600 12.5px/1.35 Poppins, sans-serif', color: palette.ink }}>
                  {rule.label}
                  {rule.note && <div style={{ font: "400 10.5px/1.3 'Newsreader', serif", color: palette.ink3, marginTop: 2 }}>{rule.note}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Barème */}
        <div style={{ marginTop: 14, background: palette.bg, border: `1px solid ${palette.line}`, borderRadius: 18, overflow: 'hidden' }}>
          <div style={{ padding: '13px 16px', borderBottom: `1px solid ${palette.line}`, display: 'flex', alignItems: 'center', gap: 8 }}>
            <ListChecks size={15} style={{ color: palette.accent2 }} />
            <span style={{ font: '700 12px/1 Poppins, sans-serif', color: palette.ink }}>Le barème annoncé</span>
          </div>
          <div style={{ padding: '4px 16px 12px' }}>
            {cfg.exercices.map((ex, i) => (
              <div key={ex.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '11px 0', borderBottom: i < cfg.exercices.length - 1 ? `1px solid ${palette.line}` : 'none' }}>
                <div>
                  <div style={{ font: '700 13px/1 Poppins, sans-serif', color: palette.ink }}>{ex.titre}</div>
                  <div style={{ font: "400 12px/1.4 'Newsreader', serif", color: palette.ink2, marginTop: 3 }}>{ex.id.includes('ex1') ? 'Partie 1' : 'Partie 2'}</div>
                </div>
                <span style={{ flex: 'none', font: '800 13px/1 Poppins, sans-serif', color: palette.accent2, background: palette.bg3, padding: '7px 11px', borderRadius: 999 }}>/ {ex.points}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 14 }}>
          <GrandFrereBubble>« Pose le téléphone à côté, écran vers le bas. 1h de vraie concentration vaut 3h distrait. On y va. »</GrandFrereBubble>
        </div>

        <button onClick={() => setCount(3)}
          style={{ marginTop: 16, width: '100%', padding: 16, border: 'none', cursor: 'pointer', borderRadius: 16, background: palette.accent2, color: '#fff', font: '800 15px/1 Poppins, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9 }}>
          Je suis prêt·e — lancer <ArrowRight size={17} />
        </button>
        <div style={{ textAlign: 'center', marginTop: 9, font: '500 10.5px/1.4 Poppins, sans-serif', color: palette.ink3 }}>
          Un devoir = une vraie tentative · pas de pause, pas de corrigé avant la sonnerie · total {totalPoints} pts
        </div>
      </div>
    </div>
  );
}
