import { SubjectConfig } from '../../constants/coefficients';

interface Props {
  subject: SubjectConfig;
  value: number | null;
  onChange: (id: string, val: number | null) => void;
}

export function BacSubjectRow({ subject, value, onChange }: Props) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-semibold text-[var(--ed-ink)]">
        {subject.name}
        <span className="ml-2 text-xs font-normal text-[var(--ed-ink3)]">Coeff {subject.coeff}</span>
      </label>
      <input
        type="number"
        min={0}
        max={20}
        step={0.5}
        value={value ?? ''}
        placeholder="Note simulée /20"
        onChange={(e) => {
          const raw = e.target.value;
          if (raw === '') {
            onChange(subject.id, null);
          } else {
            const num = parseFloat(raw);
            if (!isNaN(num)) onChange(subject.id, Math.min(20, Math.max(0, num)));
          }
        }}
        className="w-full px-4 py-2.5 border rounded-[12px] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--ed-accent)] focus:border-[var(--ed-accent)] border-[var(--ed-line)] bg-[var(--ed-bg)] text-[var(--ed-ink)] transition-colors"
      />
    </div>
  );
}
