// ============================================================================
// BilanDevoir — la note en jauge, le détail par exercice, les points faibles,
// et la redirection « grand frère » vers le bon module. Ferme la boucle.
// ============================================================================

import { ArrowLeft, ArrowRight, Award, RotateCcw, Zap } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { GrandFrereBubble } from './GrandFrereBubble';
import { mention, MENTIONS } from '../../utils/examen-utils';
import type { ExamData } from '../../types/examen';

export interface Faiblesse { label: string; delta: number; severe: boolean; }

interface BilanDevoirProps {
  exam: ExamData;
  note: number;                 // /20
  xpGagne: number;
  parExercice: { titre: string; obtenus: number; total: number }[];
  faiblesses: Faiblesse[];
  onRestart: () => void;
  onHistory: () => void;
  onRedirect: () => void;
  onRevision?: () => void;
}

export function BilanDevoir({ exam, note, xpGagne, parExercice, faiblesses, onRestart, onHistory, onRedirect, onRevision }: BilanDevoirProps) {
  const { palette } = useTheme();
  const m = mention(note);
  const ratio = note / 20;
  const r = 74, c = 2 * Math.PI * r;
  const gaugeColor = m.tone === 'tip' ? '#2FB875' : m.tone === 'ana' ? '#E67E22' : '#C0392B';

  return (
    <div style={{ maxWidth: 560, margin: '0 auto', borderRadius: 22, overflow: 'hidden', border: `1px solid ${palette.line}` }}>
      {/* Hero jauge */}
      <div style={{ background: palette.accent2, padding: '40px 22px 30px', textAlign: 'center', color: '#fff' }}>
        <div style={{ font: '700 10px/1 Poppins, sans-serif', letterSpacing: '.2em', textTransform: 'uppercase', color: '#9FC0E4' }}>Ta note de devoir</div>
        <div style={{ position: 'relative', width: 172, height: 172, margin: '18px auto 0' }}>
          <svg width="172" height="172" viewBox="0 0 172 172" style={{ transform: 'rotate(-90deg)' }}>
            <circle cx="86" cy="86" r={r} fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="11" />
            <circle cx="86" cy="86" r={r} fill="none" stroke={gaugeColor} strokeWidth="11" strokeLinecap="round"
              strokeDasharray={c} strokeDashoffset={c * (1 - ratio)} style={{ transition: 'stroke-dashoffset .8s ease' }} />
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ font: '900 50px/1 Poppins, sans-serif' }}>{String(note).replace('.', ',')}</span>
            <span style={{ font: '700 14px/1 Poppins, sans-serif', color: '#9FC0E4', marginTop: 4 }}>/ 20</span>
          </div>
        </div>
        <div style={{ marginTop: 18, display: 'inline-flex', alignItems: 'center', gap: 7, padding: '8px 16px', background: gaugeColor, borderRadius: 999 }}>
          <Award size={15} color="#fff" />
          <span style={{ font: '800 13px/1 Poppins, sans-serif', color: '#fff' }}>Mention {m.label}</span>
        </div>
        <div style={{ marginTop: 12 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 13px', background: 'rgba(240,196,25,.16)', border: '1px solid rgba(240,196,25,.32)', borderRadius: 999 }}>
            <Zap size={13} fill="#F0C419" stroke="none" />
            <span style={{ font: '800 12px/1 Poppins, sans-serif', color: '#F0C419' }}>+{xpGagne} XP gagnés</span>
          </span>
        </div>
      </div>

      <div style={{ background: palette.bg, padding: '18px 20px' }}>
        {/* Détail par exercice */}
        <div style={{ background: palette.bg2, border: `1px solid ${palette.line}`, borderRadius: 18, padding: 16 }}>
          <div style={{ font: '700 10px/1 Poppins, sans-serif', letterSpacing: '.1em', textTransform: 'uppercase', color: palette.ink3, marginBottom: 13 }}>Le détail</div>
          {parExercice.map(ex => (
            <div key={ex.titre} style={{ marginBottom: 11 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 5 }}>
                <span style={{ font: '600 12px/1 Poppins, sans-serif', color: palette.ink }}>{ex.titre}</span>
                <span style={{ font: '800 12px/1 Poppins, sans-serif', color: palette.accent2 }}>{String(ex.obtenus).replace('.', ',')}/{ex.total}</span>
              </div>
              <div style={{ height: 6, borderRadius: 999, background: palette.line, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${ex.total ? (ex.obtenus / ex.total) * 100 : 0}%`, borderRadius: 999, background: palette.accent }} />
              </div>
            </div>
          ))}
        </div>

        {/* Points faibles */}
        {faiblesses.length > 0 && (
          <div style={{ marginTop: 14, background: palette.bg2, border: `1px solid ${palette.line}`, borderRadius: 18, padding: 16 }}>
            <div style={{ font: '700 10px/1 Poppins, sans-serif', letterSpacing: '.1em', textTransform: 'uppercase', color: palette.ink3, marginBottom: 12 }}>Là où tu as saigné</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {faiblesses.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ flex: 'none', width: 8, height: 8, borderRadius: 999, background: f.severe ? '#C0392B' : '#E67E22' }} />
                  <span style={{ flex: 1, font: "500 13px/1.4 'Newsreader', serif", color: palette.ink }}>{f.label}</span>
                  <span style={{ font: '700 11px/1 Poppins, sans-serif', color: f.severe ? '#C0392B' : '#B5651D' }}>−{String(f.delta).replace('.', ',')}</span>
                </div>
              ))}
            </div>
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
            {note >= 14
              ? <>« {String(note).replace('.', ',')} c'est solide, champion ! Tes points perdus sont sur les <b>Formes Indéterminées</b>. Ouvre le module, refais-le à froid, puis reviens te venger. »</>
              : <>« On a du travail, champion. Tes points partent sur les <b>Formes Indéterminées</b>. Ouvre le module, reprends la méthode, puis retente. »</>}
          </GrandFrereBubble>
        </div>

        {/* Actions */}
        <div style={{ marginTop: 12, display: 'flex', gap: 9 }}>
          <button onClick={onRestart}
            style={{ flex: 1, padding: 13, border: `1px solid ${palette.line}`, cursor: 'pointer', borderRadius: 13, background: palette.bg2, color: palette.accent2, font: '700 12.5px/1 Poppins, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <RotateCcw size={14} /> Nouveau devoir
          </button>
          <button onClick={onHistory}
            style={{ flex: 1, padding: 13, border: `1px solid ${palette.line}`, cursor: 'pointer', borderRadius: 13, background: palette.bg2, color: palette.accent2, font: '700 12.5px/1 Poppins, sans-serif' }}>
            Mon historique
          </button>
        </div>

        {/* Retour au Hub de Révision — ferme la boucle Composer → Révision */}
        {onRevision && (
          <button onClick={onRevision}
            style={{ marginTop: 10, width: '100%', padding: 11, border: 'none', cursor: 'pointer', background: 'none', color: palette.ink3, font: '600 12px/1 Poppins, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <ArrowLeft size={13} /> Retour à la Révision
          </button>
        )}

        {/* Barème des mentions */}
        <div style={{ marginTop: 14, padding: '13px 15px', background: palette.bg3, borderRadius: 14 }}>
          <div style={{ font: '700 9.5px/1 Poppins, sans-serif', letterSpacing: '.08em', textTransform: 'uppercase', color: palette.ink3, marginBottom: 9 }}>Barème des mentions</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {[...MENTIONS].filter(x => x.min >= 10).reverse().map(x => {
              const active = m.label === x.label;
              return (
                <span key={x.label} style={{ font: `${active ? 700 : 600} 10.5px/1 Poppins, sans-serif`, color: active ? '#176B3C' : palette.ink2, background: active ? '#E6F4EC' : palette.bg2, padding: '6px 9px', borderRadius: 999 }}>
                  {x.label} ≥ {x.min}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
