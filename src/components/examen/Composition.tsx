// ============================================================================
// Composition — l'épreuve sur « feuille de copie » (lignes Seyès) + chrono anneau.
// L'app ne lit pas la copie : elle affiche le sujet, le temps, et le bouton Rendre.
// L'anneau et l'en-tête changent de couleur selon le palier du chrono.
// ============================================================================

import { useState } from 'react';
import { ArrowRight, Clock, PenLine } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { RingTimer } from './RingTimer';
import { GrandFrereBubble } from './GrandFrereBubble';
import { Tex } from './Tex';
import { formatClock } from '../../utils/examen-utils';
import type { DevoirLevelConfig, TimerPhase } from '../../types/examen';

interface CompositionProps {
  cfg: DevoirLevelConfig;
  remaining: number;
  total: number;
  ratio: number;
  phase: TimerPhase;
  onSubmit: () => void;     // « Rendre ma copie »
}

const PHASE_LABEL: Record<TimerPhase, string> = { serein: 'SEREIN', vigilance: 'VIGILANCE', urgence: 'URGENCE' };

export function Composition({ cfg, remaining, total, ratio, phase, onSubmit }: CompositionProps) {
  const { palette } = useTheme();
  const [exIndex, setExIndex] = useState(0);
  const ex = cfg.exercices[exIndex];

  const headBg = phase === 'urgence' ? '#9F1248' : palette.accent2;
  const ringColor = phase === 'urgence' ? '#FF8FB4' : phase === 'vigilance' ? palette.anaBar : '#5A93E0';
  const subColor = phase === 'urgence' ? '#F4B6CF' : '#9FC0E4';
  const pct = Math.round((remaining / total) * 100);

  return (
    <div style={{ maxWidth: 560, margin: '0 auto', borderRadius: 22, overflow: 'hidden', border: `1px solid ${palette.line}`, background: palette.bg2 }}>
      {/* En-tête chrono */}
      <div style={{ background: headBg, padding: '18px 20px', color: '#fff', transition: 'background .4s ease' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ font: '700 10px/1 Poppins, sans-serif', letterSpacing: '.1em', textTransform: 'uppercase', color: subColor }}>Devoir · {cfg.level}</div>
          <div style={{ font: '600 10px/1 Poppins, sans-serif', color: subColor }}>Exercice {exIndex + 1} / {cfg.exercices.length}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 12 }}>
          <RingTimer size={74} ratio={ratio} phase={phase} color={ringColor} trackColor="rgba(255,255,255,.16)">
            <Clock size={22} color={subColor} />
          </RingTimer>
          <div>
            <div style={{ font: '800 32px/1 Poppins, sans-serif', fontVariantNumeric: 'tabular-nums' }}>{formatClock(remaining)}</div>
            <div style={{ marginTop: 5, font: '600 10px/1 Poppins, sans-serif', letterSpacing: '.04em', color: subColor }}>
              restant · {pct}% du temps
            </div>
            <div style={{ marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 9px', background: 'rgba(255,255,255,.18)', borderRadius: 999 }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: ringColor }} />
              <span style={{ font: '700 9px/1 Poppins, sans-serif', color: subColor }}>{PHASE_LABEL[phase]}</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: 18 }}>
        {phase === 'urgence' && (
          <div style={{ marginBottom: 14 }}>
            <GrandFrereBubble title="⏳ Dernières minutes">
              « Relis-toi, vérifie tes formes indéterminées et numérote bien tes questions. Ne rends pas une copie en vrac, champion. »
            </GrandFrereBubble>
          </div>
        )}

        {/* Sélecteur d'exercice */}
        {cfg.exercices.length > 1 && (
          <div style={{ display: 'flex', gap: 8, marginBottom: 13 }}>
            {cfg.exercices.map((e, i) => (
              <button key={e.id} onClick={() => setExIndex(i)}
                style={{ flex: 1, padding: '9px 0', border: `1px solid ${i === exIndex ? palette.accent2 : palette.line}`, background: i === exIndex ? palette.accent2 : palette.bg, color: i === exIndex ? '#fff' : palette.ink2, borderRadius: 12, cursor: 'pointer', font: '700 12px/1 Poppins, sans-serif' }}>
                {e.titre}
              </button>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 11 }}>
          <span style={{ font: '800 15px/1 Poppins, sans-serif', color: palette.accent2 }}>{ex.titre}</span>
          <span style={{ font: '700 10px/1 Poppins, sans-serif', color: palette.accent2, background: palette.bg3, padding: '6px 9px', borderRadius: 999 }}>{ex.points} points</span>
        </div>

        {/* Feuille de copie */}
        <div style={{ position: 'relative', background: '#FCFCFA', border: '1px solid #ECE6DA', borderRadius: 10, boxShadow: '0 10px 26px rgba(90,75,40,.10)', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(transparent, transparent 33px, #E4ECF4 33px, #E4ECF4 34px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: 38, width: 1.5, background: '#EBB1B1', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', padding: '18px 16px 20px 50px' }}>
            <Tex block style={{ margin: '0 0 10px', font: "500 13.5px/34px 'Newsreader', serif", color: '#16202B' }}>{ex.consigne}</Tex>
            {ex.questions.map((q, i) => (
              <div key={q.id} style={{ display: 'flex', gap: 10, alignItems: 'baseline', padding: '6px 0', position: 'relative' }}>
                <span style={{ position: 'absolute', left: -36, font: '700 13px/34px Poppins, sans-serif', color: '#5A7CA8' }}>{i + 1}.</span>
                <Tex style={{ fontSize: 15, color: '#16202B', lineHeight: '34px' }}>{q.enonce}</Tex>
                <span style={{ font: '600 10px/34px Poppins, sans-serif', color: '#9AA4AE', marginLeft: 'auto', whiteSpace: 'nowrap' }}>{String(q.points).replace('.', ',')} pts</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 14, display: 'flex', gap: 10, padding: '13px 14px', background: '#FFF8E6', border: '1px solid #F2E2AE', borderRadius: 14 }}>
          <PenLine size={18} style={{ color: '#B5651D', flex: 'none', marginTop: 2 }} />
          <div style={{ font: "400 12.5px/1.55 'Newsreader', serif", color: '#6b5a1f' }}>
            Tu rédiges <b>sur ta feuille</b>. L'app ne lit pas ta copie — soigne ta rédaction, tu te corrigeras au barème dès la sonnerie.
          </div>
        </div>

        <button onClick={onSubmit}
          style={{ marginTop: 16, width: '100%', padding: 16, border: 'none', cursor: 'pointer', borderRadius: 16, background: '#D81B60', color: '#fff', font: '800 14px/1 Poppins, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxShadow: '0 10px 24px rgba(216,27,96,.3)' }}>
          Rendre ma copie <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
