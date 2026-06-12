import { SubjectConfig } from '../../constants/coefficients';
import { BacRealityCheck } from './BacRealityCheck';

interface Props {
  subject: SubjectConfig;
  value: number | null;
  onChange: (id: string, val: number | null) => void;
  noteMinRequise: number | null;
  moyenneClasse: number | null;
}

export function BacSubjectRow({ subject, value, onChange, noteMinRequise, moyenneClasse }: Props) {
  const isVide = value === null || value === undefined;
  const showRealityCheck =
    !isVide &&
    moyenneClasse !== null &&
    value - moyenneClasse >= 1.5;
  const noteMinImpossible = noteMinRequise !== null && noteMinRequise > 20;

  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-semibold text-[#1A3557] dark:text-white">
        {subject.name}
        <span className="ml-2 text-xs font-normal text-gray-400 dark:text-gray-500">Coeff {subject.coeff}</span>
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
        className="w-full px-4 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-[#D81B60] focus:border-[#D81B60] border-gray-300 dark:border-gray-700 bg-white dark:bg-[#161B22] dark:text-white transition-colors"
      />
      {isVide && noteMinRequise !== null && (
        <p className={`text-xs ${noteMinImpossible ? 'text-[#B71C1C] font-semibold' : 'text-gray-400 dark:text-gray-500'}`}>
          {noteMinImpossible
            ? 'Objectif hors de portée avec ces notes'
            : `Tu as besoin d'au moins ${noteMinRequise.toFixed(1)}/20 ici`}
        </p>
      )}
      {showRealityCheck && (
        <BacRealityCheck
          noteSim={value!}
          moyenneClasse={moyenneClasse!}
          matiereName={subject.name}
          matiereId={subject.id}
        />
      )}
    </div>
  );
}
