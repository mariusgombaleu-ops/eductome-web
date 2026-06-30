import { useMemo } from 'react';

interface Props {
  levelString: string;
  notesSimulees: Record<string, number | null>;
  moyenneSimulee: number | null;
  /** Affiche le détail par matière clé (uniquement en mode « par notes »). */
  showSubjectDetail: boolean;
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

// Note simulée pour une matière (le simulateur n'utilise PAS les notes de classe).
function getSimNote(subjectId: string, notesSimulees: Record<string, number | null>): number | null {
  const sim = notesSimulees[subjectId];
  return sim !== null && sim !== undefined ? sim : null;
}

function computeCompatibility(
  orientation: OrientationConfig,
  levelString: string,
  notesSimulees: Record<string, number | null>,
  moyenneSimulee: number | null,
): number {
  if (!orientation.eligibleSeries.includes(levelString)) return 0;

  const scores: number[] = [];

  // Score par matière clé (uniquement si des notes ont été simulées).
  orientation.keySubjects.forEach(sub => {
    const note = getSimNote(sub.id, notesSimulees);
    if (note !== null) {
      scores.push(Math.min(1, note / sub.threshold));
    }
  });

  // Score sur la mention (toujours présent : modes points / mention).
  if (moyenneSimulee !== null) {
    scores.push(Math.min(1, moyenneSimulee / orientation.mentionMin));
  }

  if (scores.length === 0) return 0;
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  return Math.round(avg * 100);
}

// Filières éligibles classées par compatibilité pour une moyenne donnée
// (basé sur la mention seule — réutilisé par la comparaison de scénarios).
export function rankFilieres(levelString: string, moyenneSimulee: number | null) {
  return ORIENTATIONS
    .filter(o => o.eligibleSeries.includes(levelString))
    .map(o => ({
      id: o.id,
      name: o.name,
      icon: o.icon,
      compat: computeCompatibility(o, levelString, {}, moyenneSimulee),
    }))
    .sort((a, b) => b.compat - a.compat);
}

function getCompatColor(compat: number): string {
  if (compat >= 75) return 'var(--ed-tipBar)';
  if (compat >= 45) return 'var(--ed-anaBar)';
  return 'var(--ed-warnBar)';
}

function getCompatBadge(compat: number): string {
  if (compat >= 75) return 'Accessible';
  if (compat >= 45) return 'À ta portée';
  return 'Ambitieux';
}

function mentionName(moyenne: number): string {
  if (moyenne >= 16) return 'Très Bien';
  if (moyenne >= 14) return 'Bien';
  if (moyenne >= 12) return 'Assez Bien';
  if (moyenne >= 10) return 'Passable';
  return 'Bac requis';
}

export function BacOrientationPredictor({
  levelString,
  notesSimulees,
  moyenneSimulee,
  showSubjectDetail,
}: Props) {
  const results = useMemo(() =>
    ORIENTATIONS.map(o => {
      const compat = computeCompatibility(o, levelString, notesSimulees, moyenneSimulee);
      const isEligible = o.eligibleSeries.includes(levelString);
      const gaps = o.keySubjects
        .filter(sub => {
          const note = getSimNote(sub.id, notesSimulees);
          return note === null || note < sub.threshold;
        })
        .map(sub => sub.name);
      return { orientation: o, compat, gaps, isEligible };
    })
    // Classées : éligibles d'abord, puis par compatibilité décroissante.
    .sort((a, b) => (Number(b.isEligible) - Number(a.isEligible)) || (b.compat - a.compat)),
    [levelString, notesSimulees, moyenneSimulee],
  );

  const hasAnyEligible = results.some(r => r.orientation.eligibleSeries.includes(levelString));

  return (
    <div className="space-y-5">
      <p className="text-xs text-[var(--ed-ink3)]">
        Basé sur ta simulation BAC — CampusIvoire, Grand Frère t'éclaire.
      </p>

      {!hasAnyEligible && (
        <div className="bg-[var(--ed-bg3)] rounded-xl p-4 text-sm text-[var(--ed-ink3)] text-center">
          Les prédictions d'orientation sont disponibles pour les élèves de Terminale D, C et A.
        </div>
      )}

      <div className="space-y-5">
        {results.map(({ orientation, compat, gaps, isEligible }) => {
          const color = isEligible ? getCompatColor(compat) : 'var(--ed-ink3)';
          const displayCompat = isEligible ? compat : 0;
          const badge = isEligible ? getCompatBadge(compat) : 'Série non éligible';
          const message = isEligible
            ? orientation.grandFrereMessage(compat, gaps)
            : `Cette filière est réservée aux séries ${orientation.eligibleSeries.map(s => s.replace('terminale-', 'Tle ').toUpperCase()).join(', ')}.`;
          const seuilCles = orientation.keySubjects.map(s => `${s.name} ≥${s.threshold}`).join(' · ');

          return (
            <div
              key={orientation.id}
              className="border border-[var(--ed-line)] rounded-xl p-4 space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-2xl shrink-0">{orientation.icon}</span>
                  <div className="min-w-0">
                    <h3 className="font-bold text-[var(--ed-ink)] text-sm leading-tight">
                      {orientation.name}
                    </h3>
                    <p className="text-xs text-[var(--ed-ink3)] mt-0.5">{orientation.description}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full text-white whitespace-nowrap"
                    style={{ backgroundColor: color }}
                  >
                    {displayCompat}%
                  </span>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
                    style={{ background: isEligible ? 'var(--ed-bg3)' : 'var(--ed-bg3)', color }}
                  >
                    {badge}
                  </span>
                </div>
              </div>

              {/* Seuil d'admission (toujours visible) */}
              <p className="text-[11px] text-[var(--ed-ink3)]">
                Seuil : <strong style={{ color: 'var(--ed-ink2)' }}>Mention {mentionName(orientation.mentionMin)}</strong> (≥{orientation.mentionMin}/20)
                <span className="block mt-0.5">Matières clés : {seuilCles}</span>
              </p>

              {/* Progress bar */}
              <div className="w-full h-2 bg-[var(--ed-bg3)] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${displayCompat}%`, backgroundColor: color }}
                />
              </div>

              {/* Détail par matière clé — uniquement en mode « par notes » */}
              {isEligible && showSubjectDetail && (
                <div className="flex flex-wrap gap-2">
                  {orientation.keySubjects.map(sub => {
                    const note = getSimNote(sub.id, notesSimulees);
                    const ok = note !== null && note >= sub.threshold;
                    return (
                      <span
                        key={sub.id}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={
                          note === null
                            ? { background: 'var(--ed-bg3)', color: 'var(--ed-ink3)' }
                            : ok
                            ? { background: 'var(--ed-tipBg)', color: 'var(--ed-tipBar)' }
                            : { background: 'var(--ed-warnBg)', color: 'var(--ed-warnBar)' }
                        }
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
                className="text-sm leading-relaxed rounded-r-lg"
                style={{ color: 'var(--ed-ink2)', borderLeft: '3px solid var(--ed-accent2)', padding: '8px 12px', background: 'transparent' }}
              >
                <span className="font-bold text-[var(--ed-ink)] text-xs uppercase tracking-wide block mb-1">
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
