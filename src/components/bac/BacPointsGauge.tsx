interface Props {
  mode: 'notes' | 'points' | 'mention';
  pointsSimules: number;
  moyenneSimulee: number | null;
  maxPoints: number;
}

// Paliers de mention sur l'axe /20 (barème absolu).
const MENTION_TICKS: { label: string; moyenne: number }[] = [
  { label: 'P', moyenne: 10 },
  { label: 'AB', moyenne: 12 },
  { label: 'B', moyenne: 14 },
  { label: 'TB', moyenne: 16 },
];

function getMention(moyenne: number): string {
  if (moyenne >= 16) return 'Très Bien';
  if (moyenne >= 14) return 'Bien';
  if (moyenne >= 12) return 'Assez Bien';
  if (moyenne >= 10) return 'Passable';
  return '';
}

function moyenneColor(moyenne: number | null): string {
  if (moyenne === null) return 'var(--ed-ink3)';
  if (moyenne >= 14) return 'var(--ed-tipBar)';
  if (moyenne >= 10) return 'var(--ed-anaBar)';
  return 'var(--ed-warnBar)';
}

export function BacPointsGauge({ mode, pointsSimules, moyenneSimulee, maxPoints }: Props) {
  const color = moyenneColor(moyenneSimulee);
  const mention = moyenneSimulee !== null && moyenneSimulee >= 10 ? getMention(moyenneSimulee) : '';
  const fillPct = moyenneSimulee !== null ? Math.min(100, (moyenneSimulee / 20) * 100) : 0;
  const fmt = (n: number) => n.toFixed(2).replace('.', ',');

  return (
    <div className="bg-[var(--ed-bg2)] border border-[var(--ed-line)] rounded-[20px] p-6 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <p className="text-xs text-[var(--ed-ink3)] uppercase tracking-wider font-bold mb-1">
            Moyenne BAC simulée
          </p>
          <p className="text-4xl font-black" style={{ color }}>
            {moyenneSimulee !== null ? fmt(moyenneSimulee) : '—'}
            <span className="text-xl font-medium text-[var(--ed-ink3)] ml-1">/20</span>
          </p>
          <p className="text-sm text-[var(--ed-ink2)] mt-1">
            = <strong>{Math.round(pointsSimules)} pts</strong> sur {maxPoints}
          </p>
        </div>
        {mention && (
          <span
            className="self-start text-xs font-bold px-4 py-2 rounded-full text-white shrink-0"
            style={{ backgroundColor: color }}
          >
            Mention {mention}
          </span>
        )}
      </div>

      <div>
        {/* Barre /20 + repères de mention */}
        <div className="relative w-full h-3 bg-[var(--ed-bg3)] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700 ease-out"
            style={{ width: `${fillPct.toFixed(1)}%`, backgroundColor: color }}
          />
          {MENTION_TICKS.map(t => (
            <span
              key={t.label}
              className="absolute inset-y-0 w-[1.5px]"
              style={{ left: `${(t.moyenne / 20) * 100}%`, background: 'var(--ed-ink)', opacity: 0.35 }}
              title={`Mention ${t.label} (${t.moyenne}/20)`}
            />
          ))}
        </div>
        <div className="relative h-3 mt-0.5">
          {MENTION_TICKS.map(t => (
            <span
              key={t.label}
              className="absolute text-[9px] font-bold -translate-x-1/2"
              style={{ left: `${(t.moyenne / 20) * 100}%`, color: 'var(--ed-ink3)' }}
            >
              {t.label}
            </span>
          ))}
        </div>
      </div>

      {/* Lecture croisée des 3 unités (relie notes ↔ points ↔ mention) */}
      <p className="text-sm font-medium" style={{ color: 'var(--ed-ink2)' }}>
        {moyenneSimulee === null ? (
          mode === 'notes'
            ? 'Saisis tes notes ci-dessous pour voir ton total et ta mention.'
            : 'Choisis une valeur pour lancer la simulation.'
        ) : mode === 'points' ? (
          <>Pour <strong>{Math.round(pointsSimules)} pts</strong>, il te faut ~<strong>{fmt(moyenneSimulee)}/20</strong> de moyenne{mention ? <> → <strong>Mention {mention}</strong></> : <> (sous la barre des 10/20)</>}.</>
        ) : mode === 'mention' ? (
          <>{mention ? <>La <strong>Mention {mention}</strong></> : 'Cette mention'} demande une moyenne ≥ <strong>{fmt(moyenneSimulee)}/20</strong>, soit <strong>{Math.round(pointsSimules)} pts</strong> au total.</>
        ) : (
          <>Avec ces notes : <strong>{fmt(moyenneSimulee)}/20</strong> = <strong>{Math.round(pointsSimules)} pts</strong>{mention ? <> → <strong>Mention {mention}</strong></> : <> (sous la barre des 10/20)</>}.</>
        )}
      </p>
    </div>
  );
}
