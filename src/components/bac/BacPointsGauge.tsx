interface Props {
  pointsSimules: number;
  objectifPoints: number;
  moyenneSimulee: number | null;
  totalCoeff: number;
  moyenneClasseGlobale: number | null;
}

function getMention(moyenne: number): string {
  if (moyenne >= 16) return 'Très Bien';
  if (moyenne >= 14) return 'Bien';
  if (moyenne >= 12) return 'Assez Bien';
  if (moyenne >= 10) return 'Passable';
  return '';
}

function getProgressColor(progression: number): string {
  if (progression >= 0.9) return '#1E8449';
  if (progression >= 0.6) return '#E67E22';
  return '#C62828';
}

export function BacPointsGauge({
  pointsSimules,
  objectifPoints,
  moyenneSimulee,
  totalCoeff,
  moyenneClasseGlobale,
}: Props) {
  const progression = objectifPoints > 0 ? Math.min(1, pointsSimules / objectifPoints) : 0;
  const color = getProgressColor(progression);
  const mention = moyenneSimulee !== null ? getMention(moyenneSimulee) : '';

  // Joker logic: show when within 15 pts of the user's objective OR the passable threshold
  const passingThreshold = totalCoeff * 10;
  const nearObjectif = Math.abs(pointsSimules - objectifPoints) <= 15;
  const nearPassing = Math.abs(pointsSimules - passingThreshold) <= 15;
  const showJoker = nearObjectif || nearPassing;

  let jokerStatus: 'secure' | 'vigilance' | null = null;
  if (showJoker && moyenneClasseGlobale !== null) {
    if (moyenneClasseGlobale >= 11.5) jokerStatus = 'secure';
    else if (moyenneClasseGlobale < 10) jokerStatus = 'vigilance';
  }

  return (
    <div className="bg-white dark:bg-[#161B22] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-bold mb-1">
            Points BAC simulés
          </p>
          <p className="text-4xl font-black text-[#1A3557] dark:text-white">
            {pointsSimules.toFixed(1)}
            <span className="text-xl font-medium text-gray-400 ml-2">/ {objectifPoints} pts</span>
          </p>
          {moyenneSimulee !== null && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Moyenne simulée : <strong>{moyenneSimulee.toFixed(2)}/20</strong>
            </p>
          )}
        </div>
        {mention && (
          <span
            className="self-start sm:self-center text-xs font-bold px-4 py-2 rounded-full text-white shrink-0"
            style={{ backgroundColor: color }}
          >
            {mention}
          </span>
        )}
      </div>

      <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{ width: `${(progression * 100).toFixed(1)}%`, backgroundColor: color }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-400">
        <span>0</span>
        <span className="font-semibold" style={{ color }}>{Math.round(progression * 100)}%</span>
        <span>{objectifPoints} pts</span>
      </div>

      {jokerStatus === 'secure' && (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 text-sm">
          <p className="font-bold text-green-700 dark:text-green-300 mb-1">🟢 Statut : Joker Sécurisé</p>
          <p className="text-green-600 dark:text-green-400 leading-relaxed">
            Ton livret scolaire est propre. En maintenant ce niveau, le jury te repêchera en cas de coup de fatigue au BAC !
          </p>
        </div>
      )}

      {jokerStatus === 'vigilance' && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-sm">
          <p className="font-bold text-red-700 dark:text-red-300 mb-1">🔴 Statut : Zone de Vigilance</p>
          <p className="text-red-600 dark:text-red-400 leading-relaxed">
            Ta moyenne de classe est trop faible pour activer le repêchage du livret scolaire. Booste tes devoirs !
          </p>
        </div>
      )}
    </div>
  );
}
