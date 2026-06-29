// ============================================================================
// QcmRunner — l'Interrogation QCM : questions en mode « suspense » (aucune
// correction pendant l'épreuve), puis bilan auto-corrigé (jauge + sous-scores
// Formules / Méthodes + erreurs + redirection grand frère).
// ============================================================================

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, EyeOff, RotateCcw, X, Zap } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { RingTimer } from './RingTimer';
import { GrandFrereBubble } from './GrandFrereBubble';
import { Tex } from './Tex';
import { useExamTimer } from '../../hooks/useExamTimer';
import { formatClock, mention, noteSur20 } from '../../utils/examen-utils';
import type { ExamData, InterroLevelConfig, InterroResult, QcmLetter } from '../../types/examen';

interface QcmRunnerProps {
  exam: ExamData;
  cfg: InterroLevelConfig;
  storageKey: string;
  onResult: (result: InterroResult) => void;   // XP + persistance (appelé une fois)
  onRestart: () => void;
  onUp: () => void;                              // monter en niveau / retour Hall
  onRedirect: () => void;                        // ouvrir le module conseillé
  onRevision?: () => void;                       // retour au Hub de Révision
}

export function QcmRunner({ exam, cfg, storageKey, onResult, onRestart, onUp, onRedirect, onRevision }: QcmRunnerProps) {
  const { palette } = useTheme();
  const [phase, setPhase] = useState<'running' | 'bilan'>('running');
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, QcmLetter>>({});
  const [picked, setPicked] = useState<QcmLetter | null>(null);
  const resultRef = useRef<InterroResult | null>(null);

  const finish = (finalAnswers: Record<number, QcmLetter>) => {
    const qs = cfg.questions;
    let bonnes = 0; const erreurs: string[] = [];
    const comp = { formule: [0, 0] as [number, number], methode: [0, 0] as [number, number] };
    qs.forEach((q, i) => {
      comp[q.competence][1] += 1;
      if (finalAnswers[i] === q.correct) { bonnes++; comp[q.competence][0] += 1; }
      else erreurs.push(q.id);
    });
    const note = noteSur20(bonnes, qs.length);
    const result: InterroResult = {
      examId: exam.id, level: cfg.level, bonnes, total: qs.length, note,
      parCompetence: comp, erreurs, xpGagne: 0,
    };
    resultRef.current = result;
    onResult(result);
    setPhase('bilan');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const timer = useExamTimer(cfg.dureeMin * 60, storageKey, () => finish(answers));
  // lance le chrono au montage
  useEffect(() => { timer.start(); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, []);

  const q = cfg.questions[index];
  const isLast = index === cfg.questions.length - 1;

  const validate = () => {
    if (!picked) return;
    const next = { ...answers, [index]: picked };
    setAnswers(next);
    setPicked(null);
    if (isLast) { timer.stop(); finish(next); }
    else { setIndex(i => i + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  };

  // ── BILAN ──────────────────────────────────────────────────────────────────
  if (phase === 'bilan' && resultRef.current) {
    const res = resultRef.current;
    const m = mention(res.note);
    const r = 64, c = 2 * Math.PI * r;
    const erreursQ = cfg.questions.filter(qq => res.erreurs.includes(qq.id));
    return (
      <div style={{ maxWidth: 540, margin: '0 auto', borderRadius: 22, overflow: 'hidden', border: `1px solid ${palette.line}` }}>
        <div style={{ background: palette.accent, padding: '40px 22px 28px', textAlign: 'center', color: '#fff' }}>
          <div style={{ font: '700 10px/1 Poppins, sans-serif', letterSpacing: '.2em', textTransform: 'uppercase', color: '#BBD6F5' }}>Interrogation terminée</div>
          <div style={{ position: 'relative', width: 150, height: 150, margin: '16px auto 0' }}>
            <svg width="150" height="150" viewBox="0 0 150 150" style={{ transform: 'rotate(-90deg)' }}>
              <circle cx="75" cy="75" r={r} fill="none" stroke="rgba(255,255,255,.16)" strokeWidth="10" />
              <circle cx="75" cy="75" r={r} fill="none" stroke="#7CE0AE" strokeWidth="10" strokeLinecap="round"
                strokeDasharray={c} strokeDashoffset={c * (1 - res.bonnes / res.total)} style={{ transition: 'stroke-dashoffset .8s ease' }} />
            </svg>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ font: '900 38px/1 Poppins, sans-serif' }}>{res.bonnes}<span style={{ font: '700 18px/1', color: '#BBD6F5' }}>/{res.total}</span></span>
              <span style={{ font: '700 12px/1 Poppins, sans-serif', color: '#BBD6F5', marginTop: 5 }}>{String(res.note).replace('.', ',')} / 20</span>
            </div>
          </div>
          <div style={{ marginTop: 16, display: 'inline-flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ padding: '7px 15px', background: '#1E8449', borderRadius: 999, font: '800 12px/1 Poppins, sans-serif' }}>Mention {m.label}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 13px', background: 'rgba(240,196,25,.18)', border: '1px solid rgba(240,196,25,.34)', borderRadius: 999 }}>
              <Zap size={12} fill="#F0C419" stroke="none" /><span style={{ font: '800 11px/1 Poppins, sans-serif', color: '#F0C419' }}>+{res.xpGagne} XP</span>
            </span>
          </div>
        </div>

        <div style={{ background: palette.bg, padding: '18px 20px' }}>
          {/* Sous-scores */}
          <div style={{ display: 'flex', gap: 10 }}>
            {([['Formules', res.parCompetence.formule, '#176B3C'], ['Méthodes', res.parCompetence.methode, '#B5651D']] as const).map(([lbl, [ok, tot], col]) => (
              <div key={lbl} style={{ flex: 1, background: palette.bg2, border: `1px solid ${palette.line}`, borderRadius: 16, padding: 14, textAlign: 'center' }}>
                <div style={{ font: '800 18px/1 Poppins, sans-serif', color: col }}>{ok} / {tot}</div>
                <div style={{ font: '600 9.5px/1.3 Poppins, sans-serif', letterSpacing: '.04em', textTransform: 'uppercase', color: palette.ink3, marginTop: 6 }}>{lbl}</div>
              </div>
            ))}
          </div>

          {/* Erreurs */}
          {erreursQ.length > 0 && (
            <div style={{ marginTop: 14, background: palette.bg2, border: `1px solid ${palette.line}`, borderRadius: 18, padding: 16 }}>
              <div style={{ font: '700 10px/1 Poppins, sans-serif', letterSpacing: '.1em', textTransform: 'uppercase', color: palette.ink3, marginBottom: 13 }}>Tes {erreursQ.length} erreur{erreursQ.length > 1 ? 's' : ''}</div>
              {erreursQ.map((qq, i) => (
                <div key={qq.id} style={{ paddingBottom: i < erreursQ.length - 1 ? 13 : 0, marginBottom: i < erreursQ.length - 1 ? 13 : 0, borderBottom: i < erreursQ.length - 1 ? `1px solid ${palette.line}` : 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ flex: 'none', width: 18, height: 18, borderRadius: 999, background: '#C0392B', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><X size={11} /></span>
                    <Tex style={{ font: '700 12px/1.3 Poppins, sans-serif', color: palette.ink }}>{qq.prompt}</Tex>
                  </div>
                  <Tex block style={{ marginTop: 7, font: "400 12.5px/1.55 'Newsreader', serif", color: palette.ink2 }}>{qq.explication}</Tex>
                </div>
              ))}
            </div>
          )}

          {/* Redirection grand frère */}
          <div style={{ marginTop: 14 }}>
            <GrandFrereBubble action={
              <button onClick={onRedirect}
                style={{ width: '100%', padding: 13, border: 'none', cursor: 'pointer', borderRadius: 13, background: palette.accent, color: '#fff', font: '800 13px/1 Poppins, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxShadow: `0 8px 20px ${palette.heroShadow}` }}>
                {exam.moduleRedirect.label} <ArrowRight size={15} />
              </button>
            }>
              {res.parCompetence.methode[0] < res.parCompetence.methode[1]
                ? <>« Tes formules sont béton ! C'est le <b>choix de la méthode</b> qui coince. Relis le module, puis retente en niveau supérieur. »</>
                : <>« Beau travail, champion. Consolide encore et passe au niveau au-dessus. »</>}
            </GrandFrereBubble>
          </div>

          <div style={{ marginTop: 12, display: 'flex', gap: 9 }}>
            <button onClick={onRestart}
              style={{ flex: 1, padding: 13, border: `1px solid ${palette.line}`, cursor: 'pointer', borderRadius: 13, background: palette.bg2, color: palette.accent2, font: '700 12.5px/1 Poppins, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
              <RotateCcw size={14} /> Refaire
            </button>
            <button onClick={onUp}
              style={{ flex: 1, padding: 13, border: 'none', cursor: 'pointer', borderRadius: 13, background: palette.accent2, color: '#fff', font: '700 12.5px/1 Poppins, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
              <ArrowUpRight size={14} /> Le Hall
            </button>
          </div>

          {/* Retour au Hub de Révision — ferme la boucle Composer → Révision */}
          {onRevision && (
            <button onClick={onRevision}
              style={{ marginTop: 10, width: '100%', padding: 11, border: 'none', cursor: 'pointer', background: 'none', color: palette.ink3, font: '600 12px/1 Poppins, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
              <ArrowLeft size={13} /> Retour à la Révision
            </button>
          )}
        </div>
      </div>
    );
  }

  // ── EN COURS (suspense) ──────────────────────────────────────────────────
  return (
    <div style={{ maxWidth: 540, margin: '0 auto', borderRadius: 22, overflow: 'hidden', border: `1px solid ${palette.line}`, background: palette.bg2 }}>
      <div style={{ background: palette.accent, padding: '16px 18px 14px', color: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ font: '700 10px/1 Poppins, sans-serif', letterSpacing: '.1em', textTransform: 'uppercase', color: '#BBD6F5' }}>Interro · {cfg.level}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <RingTimer size={34} stroke={3.5} ratio={timer.ratio} phase={timer.phase} color="#fff" trackColor="rgba(255,255,255,.2)" />
            <span style={{ font: '800 14px/1 Poppins, sans-serif', fontVariantNumeric: 'tabular-nums' }}>{formatClock(timer.remaining)}</span>
          </div>
        </div>
        <div style={{ marginTop: 11, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ font: '700 11px/1 Poppins, sans-serif', whiteSpace: 'nowrap' }}>Q {index + 1} / {cfg.questions.length}</span>
          <div style={{ flex: 1, display: 'flex', gap: 5 }}>
            {cfg.questions.map((_, i) => (
              <span key={i} style={{ flex: 1, height: 5, borderRadius: 999, background: i <= index ? '#fff' : 'rgba(255,255,255,.32)' }} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: 20 }}>
        <span style={{ display: 'inline-block', font: '700 9.5px/1 Poppins, sans-serif', letterSpacing: '.1em', textTransform: 'uppercase', color: palette.accent, background: palette.accentSoft, padding: '6px 11px', borderRadius: 999 }}>
          {q.competence === 'formule' ? 'Formule' : 'Méthode'}
        </span>
        <Tex block style={{ marginTop: 13, font: '600 16px/1.5 Poppins, sans-serif', color: palette.ink }}>{q.prompt}</Tex>
        {q.formula && (
          <Tex block style={{ marginTop: 10, padding: '18px 14px', textAlign: 'center', background: palette.bg3, border: `1px solid ${palette.line}`, borderRadius: 16, fontSize: 17, color: palette.ink }}>{q.formula}</Tex>
        )}

        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {q.options.map(opt => {
            const active = picked === opt.id;
            return (
              <button key={opt.id} onClick={() => setPicked(opt.id)}
                style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '13px 14px', border: `2px solid ${active ? palette.accent : palette.line}`, borderRadius: 14, background: active ? palette.accentSoft : palette.bg2, cursor: 'pointer', textAlign: 'left', boxShadow: active ? `0 6px 16px ${palette.heroShadow}` : 'none' }}>
                <span style={{ flex: 'none', width: 24, height: 24, borderRadius: 8, background: active ? palette.accent : palette.bg3, color: active ? '#fff' : palette.ink2, display: 'flex', alignItems: 'center', justifyContent: 'center', font: '800 12px/1 Poppins, sans-serif' }}>{opt.id}</span>
                <Tex style={{ font: "500 13.5px/1.4 'Newsreader', serif", color: palette.ink }}>{opt.text}</Tex>
              </button>
            );
          })}
        </div>

        <div style={{ marginTop: 14, display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center', font: '500 11.5px/1.4 Poppins, sans-serif', color: palette.ink3 }}>
          <EyeOff size={13} /> Mode suspense — la correction arrive à la fin
        </div>

        <button onClick={validate} disabled={!picked}
          style={{ marginTop: 14, width: '100%', padding: 15, border: 'none', cursor: picked ? 'pointer' : 'not-allowed', opacity: picked ? 1 : .5, borderRadius: 16, background: palette.accent, color: '#fff', font: '800 14px/1 Poppins, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          {isLast ? 'Valider & voir mon bilan' : 'Valider & question suivante'} <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
