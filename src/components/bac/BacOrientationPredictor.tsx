import { useMemo } from 'react';

interface Props {
  levelString: string;
  notesSimulees: Record<string, number | null>;
  moyennesParMatiere: Record<string, number | null>;
  moyenneSimulee: number | null;
}

interface KeySubject {
  id: string;
  name: string;
  threshold: number;
}

interface OrientationConfig {
  id: string;
  name: string;
  icon: string;
  description: string;
  eligibleSeries: string[];
  keySubjects: KeySubject[];
  mentionMin: number;
  grandFrereMessage: (compat: number, gaps: string[]) => string;
}

const ORIENTATIONS: OrientationConfig[] = [
  {
    id: 'inphb',
    name: 'INPHB Yamoussoukro',
    icon: '🏛️',
    description: 'Institut National Polytechnique — Ingénierie & Sciences',
    eligibleSeries: ['terminale-d', 'terminale-c'],
    keySubjects: [
      { id: 'maths', name: 'Mathématiques', threshold: 14 },
      { id: 'pc', name: 'Physique-Chimie', threshold: 13 },
      { id: 'anglais', name: 'Anglais', threshold: 12 },
    ],
    mentionMin: 12,
    grandFrereMessage: (compat, gaps) => {
      if (compat >= 85)
        return "Ton profil est solide pour l'INPHB. Maintiens le cap sur les sciences et l'anglais — c'est la clé du concours d'entrée.";
      if (compat >= 60)
        return gaps.length > 0
          ? `Tu es dans la bonne direction. Point de vigilance : ${gaps.join(', ')}. Consolide ces matières avant le BAC.`
          : "Tu es dans la bonne direction. Consolide tes points faibles et l'INPHB devient accessible.";
      return "L'INPHB est exigeant. Commence par viser la Mention Assez Bien, puis travaille Maths et PC en priorité absolue.";
    },
  },
  {
    id: 'medecine',
    name: 'Faculté de Médecine',
    icon: '🩺',
    description: 'CHU — Médecine, Pharmacie & Odontologie',
    eligibleSeries: ['terminale-d'],
    keySubjects: [
      { id: 'svt', name: 'SVT', threshold: 14 },
      { id: 'pc', name: 'Physique-Chimie', threshold: 14 },
      { id: 'maths', name: 'Mathématiques', threshold: 12 },
    ],
    mentionMin: 12,
    grandFrereMessage: (compat, gaps) => {
      if (compat >= 85)
        return "Médecine est dans ta portée. SVT et PC sont tes atouts — ne lâche rien sur ces deux matières. Le numerus clausus est serré, chaque point compte.";
      if (compat >= 60)
        return gaps.length > 0
          ? `La Faculté de Médecine demande de la précision absolue. Travaille en priorité : ${gaps.join(', ')}. L'erreur incontournable à éviter ici, c'est de négliger SVT.`
          : "Tu as le niveau de base. Médecine demande une régularité sans faille — chaque trimestre doit être meilleur que le précédent.";
      return "La Médecine reste un objectif à long terme. Commence par viser 14/20 en SVT et PC — ce sont les deux piliers que le jury regarde en premier.";
    },
  },
  {
    id: 'numerique',
    name: 'Écoles du Numérique',
    icon: '💻',
    description: 'ESATIC, INP-HB Info & parcours tech',
    eligibleSeries: ['terminale-d', 'terminale-c', 'terminale-a'],
    keySubjects: [
      { id: 'maths', name: 'Mathématiques', threshold: 13 },
      { id: 'anglais', name: 'Anglais', threshold: 12 },
    ],
    mentionMin: 10,
    grandFrereMessage: (compat, gaps) => {
      if (compat >= 85)
        return "Le numérique est fait pour toi. Maths solides + anglais technique = le profil idéal pour ESATIC et les concours tech. Pense aussi à pratiquer la logique algorithmique.";
      if (compat >= 60)
        return gaps.length > 0
          ? `Tu es sur la bonne voie. Le piège à éviter : négliger ${gaps.join(' et ')}. Ces deux matières sont discriminantes pour tous les concours du numérique.`
          : "Tu as les bases. Affine ton niveau en Maths et anglais — ce sont les portes d'entrée de toutes les écoles du numérique en Côte d'Ivoire.";
      return "Le numérique est accessible. Concentre-toi sur Maths d'abord, anglais ensuite. Avec une Mention Passable et une bonne logique, les portes du secteur tech s'ouvrent.";
    },
  },
];

function getBestNote(subjectId: string, notesSimulees: Record<string, number | null>, moyennesParMatiere: Record<string, number | null>): number | null {
  const sim = notesSimulees[subjectId];
  if (sim !== null && sim !== undefined) return sim;
  return moyennesParMatiere[subjectId] ?? null;
}

function computeCompatibility(
  orientation: OrientationConfig,
  levelString: string,
  notesSimulees: Record<string, number | null>,
  moyennesParMatiere: Record<string, number | null>,
  moyenneSimulee: number | null,
): number {
  if (!orientation.eligibleSeries.includes(levelString)) return 0;

  const scores: number[] = [];

  // Score per key subject
  orientation.keySubjects.forEach(sub => {
    const note = getBestNote(sub.id, notesSimulees, moyennesParMatiere);
    if (note !== null) {
      scores.push(Math.min(1, note / sub.threshold));
    }
  });

  // Mention score
  if (moyenneSimulee !== null) {
    scores.push(Math.min(1, moyenneSimulee / orientation.mentionMin));
  }

  if (scores.length === 0) return 0;
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  return Math.round(avg * 100);
}

function getCompatColor(compat: number): string {
  if (compat >= 75) return '#1E8449';
  if (compat >= 45) return '#E67E22';
  return '#C62828';
}

function getCompatLabel(compat: number): string {
  if (compat >= 75) return 'Profil compatible';
  if (compat >= 45) return 'Profil en développement';
  return 'Objectif à construire';
}

export function BacOrientationPredictor({
  levelString,
  notesSimulees,
  moyennesParMatiere,
  moyenneSimulee,
}: Props) {
  const results = useMemo(() =>
    ORIENTATIONS.map(o => {
      const compat = computeCompatibility(o, levelString, notesSimulees, moyennesParMatiere, moyenneSimulee);
      const gaps = o.keySubjects
        .filter(sub => {
          const note = getBestNote(sub.id, notesSimulees, moyennesParMatiere);
          return note === null || note < sub.threshold;
        })
        .map(sub => sub.name);
      return { orientation: o, compat, gaps };
    }),
    [levelString, notesSimulees, moyennesParMatiere, moyenneSimulee],
  );

  const hasAnyEligible = results.some(r => r.orientation.eligibleSeries.includes(levelString));

  return (
    <div className="bg-white dark:bg-[#161B22] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm space-y-6">
      <div>
        <h2 className="text-lg font-bold text-[#1A3557] dark:text-white mb-1">
          🎯 Prédicteur d'Orientation
        </h2>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Basé sur ta simulation et tes moyennes de classe actuelles — CampusIvoire, Grand Frère t'éclaire.
        </p>
      </div>

      {!hasAnyEligible && (
        <div className="bg-gray-50 dark:bg-[#0D1117] rounded-xl p-4 text-sm text-gray-500 dark:text-gray-400 text-center">
          Les prédictions d'orientation sont disponibles pour les élèves de Terminale D, C et A.
        </div>
      )}

      <div className="space-y-5">
        {results.map(({ orientation, compat, gaps }) => {
          const isEligible = orientation.eligibleSeries.includes(levelString);
          const color = isEligible ? getCompatColor(compat) : '#6B7280';
          const displayCompat = isEligible ? compat : 0;
          const label = isEligible ? getCompatLabel(compat) : 'Série non éligible';
          const message = isEligible
            ? orientation.grandFrereMessage(compat, gaps)
            : `Cette filière est réservée aux séries ${orientation.eligibleSeries.map(s => s.replace('terminale-', 'Tle ').toUpperCase()).join(', ')}.`;

          return (
            <div
              key={orientation.id}
              className="border border-gray-100 dark:border-gray-800 rounded-xl p-4 space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-2xl shrink-0">{orientation.icon}</span>
                  <div className="min-w-0">
                    <h3 className="font-bold text-[#1A3557] dark:text-white text-sm leading-tight">
                      {orientation.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{orientation.description}</p>
                  </div>
                </div>
                <span
                  className="shrink-0 text-xs font-bold px-3 py-1.5 rounded-full text-white whitespace-nowrap"
                  style={{ backgroundColor: color }}
                >
                  {displayCompat}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${displayCompat}%`, backgroundColor: color }}
                />
              </div>

              <p
                className="text-xs font-semibold"
                style={{ color }}
              >
                {label}
              </p>

              {/* Key subjects status */}
              {isEligible && (
                <div className="flex flex-wrap gap-2">
                  {orientation.keySubjects.map(sub => {
                    const note = getBestNote(sub.id, notesSimulees, moyennesParMatiere);
                    const ok = note !== null && note >= sub.threshold;
                    return (
                      <span
                        key={sub.id}
                        className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                          note === null
                            ? 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                            : ok
                            ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                            : 'bg-red-50 dark:bg-red-900/30 text-[#B71C1C] dark:text-red-400'
                        }`}
                      >
                        {sub.name} {note !== null ? `${note.toFixed(1)}/20` : '—'}{' '}
                        {note !== null && (ok ? '✓' : `(seuil : ${sub.threshold})`)}
                      </span>
                    );
                  })}
                </div>
              )}

              {/* Grand Frère guidance */}
              <div
                className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed rounded-r-lg"
                style={{ borderLeft: '3px solid #1A3557', padding: '8px 12px', background: 'transparent' }}
              >
                <span className="font-bold text-[#1A3557] dark:text-white text-xs uppercase tracking-wide block mb-1">
                  Grand Frère dit
                </span>
                {message}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
