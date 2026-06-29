// ============================================================================
// CorrectionBareme — le cœur du système : auto-évaluation au barème.
// Pour chaque question : corrigé attendu + déclaration honnête (Réussi/Partiel/Manqué).
// Le total se calcule en direct. On corrige exercice par exercice.
// ============================================================================

import { useMemo, useState } from 'react';
import { ArrowRight, Check, Minus, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { Tex } from './Tex';
import { exercicePoints, pointsFor } from '../../utils/examen-utils';
import type { CorrectionState, DevoirLevelConfig } from '../../types/examen';

interface CorrectionBaremeProps {
  cfg: DevoirLevelConfig;
  onComplete: (states: Record<string, CorrectionState>) => void;
}

const CHOICES: { key: Exclude<CorrectionState, null>; label: string; icon: any; color: string }[] = [
  { key: 'reussi',  label: 'Réussi',  icon: Check, color: '#176B3C' },
  { key: 'partiel', label: 'Partiel', icon: Minus, color: '#E67E22' },
  { key: 'manque',  label: 'Manqué',  icon: X,     color: '#C0392B' },
];

export function CorrectionBareme({ cfg, onComplete }: CorrectionBaremeProps) {
  const { palette } = useTheme();
  const [exIndex, setExIndex] = useState(0);
  const [states, setStates] = useState<Record<string, CorrectionState>>({});
  const ex = cfg.exercices[exIndex];

  // namespacing des clés de question par exercice pour éviter les collisions d'id
  const keyOf = (qid: string) => `${ex.id}:${qid}`;
  const exStates = useMemo(() => {
    const m: Record<string, CorrectionState> = {};
    ex.questions.forEach(q => { m[q.id] = states[keyOf(q.id)] ?? null; });
    return m;
  }, [states, ex]);

  const { obtenus, total } = exercicePoints(ex, exStates);
  const allAnswered = ex.questions.every(q => exStates[q.id] !== null);
  const isLast = exIndex === cfg.exercices.length - 1;

  const setChoice = (qid: string, choice: CorrectionState) => {
    setStates(s => ({ ...s, [keyOf(qid)]: choice }));
  };

  const next = () => {
    if (isLast) { onComplete(states); return; }
    setExIndex(i => i + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ maxWidth: 560, margin: '0 auto' }}>
      {/* En-tête collant : points cumulés */}
      <div style={{ position: 'sticky', top: 76, zIndex: 5, background: palette.bg2, border: `1px solid ${palette.line}`, borderRadius: 16, padding: '12px 16px', marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ font: '700 10px/1 Poppins, sans-serif', letterSpacing: '.1em', textTransform: 'uppercase', color: palette.ink3 }}>Correction · {ex.titre}</div>
            <div style={{ font: '800 15px/1 Poppins, sans-serif', color: palette.ink, marginTop: 5 }}>{ex.id.includes('ex1') ? 'Première partie' : 'Seconde partie'}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ font: '800 22px/1 Poppins, sans-serif', color: '#176B3C', fontVariantNumeric: 'tabular-nums' }}>
              {String(obtenus).replace('.', ',')}<span style={{ font: '700 13px/1 Poppins, sans-serif', color: palette.ink3 }}> / {total}</span>
            </div>
            <div style={{ font: '600 9px/1 Poppins, sans-serif', letterSpacing: '.06em', textTransform: 'uppercase', color: palette.ink3, marginTop: 5 }}>Points cumulés</div>
          </div>
        </div>
        <div style={{ marginTop: 9, height: 4, borderRadius: 999, background: palette.line, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${total ? (obtenus / total) * 100 : 0}%`, borderRadius: 999, background: '#176B3C', transition: 'width .3s ease' }} />
        </div>
      </div>

      {/* Rappel d'honnêteté */}
      <div style={{ display: 'flex', gap: 10, padding: '12px 13px', background: palette.warnBg, borderLeft: '3px solid #D81B60', borderRadius: '0 13px 13px 0', marginBottom: 16 }}>
        <span style={{ fontSize: 16, lineHeight: 1.3 }}>💡</span>
        <div style={{ font: "400 12px/1.5 'Newsreader', serif", color: palette.warnInk }}>
          Sois juste avec toi-même : coche seulement ce que tu as <b>vraiment</b> écrit sur ta feuille. C'est toi que tu trompes sinon.
        </div>
      </div>

      {/* Questions */}
      {ex.questions.map((q, i) => {
        const state = exStates[q.id];
        const earned = pointsFor(q, state);
        const tone = state === 'reussi' ? { bd: '#C7E6D3', bg: '#EAF7EF', ink: '#176B3C' }
          : state === 'partiel' ? { bd: '#F2E2AE', bg: '#FFF8E6', ink: '#B5651D' }
          : state === 'manque' ? { bd: '#F3D2CD', bg: '#FDF0EE', ink: '#C0392B' }
          : { bd: palette.line, bg: palette.bg3, ink: palette.ink3 };

        return (
          <div key={q.id} style={{ border: `1px solid ${tone.bd}`, borderRadius: 16, overflow: 'hidden', marginBottom: 12 }}>
            <div style={{ padding: '12px 14px', background: tone.bg, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ font: '700 12.5px/1 Poppins, sans-serif', color: palette.ink }}>Question {i + 1}</span>
              <span style={{ font: '800 12px/1 Poppins, sans-serif', color: tone.ink }}>
                {state ? `${String(earned).replace('.', ',')} / ${String(q.points).replace('.', ',')}` : `… / ${String(q.points).replace('.', ',')}`}
              </span>
            </div>
            <div style={{ padding: '13px 14px', background: palette.bg2 }}>
              <Tex block style={{ font: "400 12.5px/1.4 'Newsreader', serif", color: palette.ink2, marginBottom: 8 }}>{q.enonce}</Tex>
              <div style={{ font: '700 9.5px/1 Poppins, sans-serif', letterSpacing: '.07em', textTransform: 'uppercase', color: palette.ink3, marginBottom: 7 }}>Corrigé attendu</div>
              <Tex block style={{ font: "400 13px/1.65 'Newsreader', serif", color: palette.ink }}>{q.corrige}</Tex>

              {q.notePiege && (state === 'partiel' || state === 'manque') && (
                <div style={{ marginTop: 9, font: "400 11.5px/1.5 'Newsreader', serif", color: state === 'manque' ? '#7a302a' : '#8a6d1f', background: state === 'manque' ? '#FBE7E4' : '#FCF3DC', padding: '8px 10px', borderRadius: 9 }}>
                  {q.notePiege}
                </div>
              )}

              <div style={{ marginTop: 12, display: 'flex', gap: 7 }}>
                {CHOICES.map(c => {
                  const active = state === c.key;
                  const Icon = c.icon;
                  return (
                    <button key={c.key} onClick={() => setChoice(q.id, c.key)}
                      style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, font: '700 11px/1 Poppins, sans-serif', padding: '9px 0', borderRadius: 10, cursor: 'pointer', border: active ? 'none' : `1px solid ${palette.line}`, background: active ? c.color : palette.bg2, color: active ? '#fff' : palette.ink3, boxShadow: active ? `0 4px 12px ${c.color}44` : 'none' }}>
                      <Icon size={13} /> {c.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}

      <button onClick={next} disabled={!allAnswered}
        style={{ marginTop: 4, width: '100%', padding: 15, border: 'none', cursor: allAnswered ? 'pointer' : 'not-allowed', borderRadius: 14, background: allAnswered ? palette.accent2 : palette.ink3, opacity: allAnswered ? 1 : .5, color: '#fff', font: '800 14px/1 Poppins, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        {isLast ? 'Voir mon bilan' : `Corriger ${cfg.exercices[exIndex + 1].titre}`} <ArrowRight size={16} />
      </button>
      {!allAnswered && (
        <div style={{ textAlign: 'center', marginTop: 8, font: '500 11px/1.4 Poppins, sans-serif', color: palette.ink3 }}>
          Évalue chaque question pour continuer.
        </div>
      )}
    </div>
  );
}
