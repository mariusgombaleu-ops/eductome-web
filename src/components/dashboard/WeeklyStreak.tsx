import { useUser } from '../../contexts/UserContext';
import { useTheme } from '../../contexts/ThemeContext';

const DAY_LABELS = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

export const WeeklyStreak = () => {
  const { currentStreak, activityHistory } = useUser();
  const { palette } = useTheme();

  // Build week data: today is the rightmost day
  const today = new Date();
  const todayDayOfWeek = today.getDay(); // 0=Sun
  // Map to Mon=0 ... Sun=6
  const todayMondayIndex = todayDayOfWeek === 0 ? 6 : todayDayOfWeek - 1;

  const days = DAY_LABELS.map((label, i) => {
    const diff = i - todayMondayIndex;
    const date = new Date(today);
    date.setDate(date.getDate() + diff);
    const dateStr = date.toISOString().split('T')[0];
    const hasActivity = Boolean(activityHistory[dateStr]);
    const isToday = i === todayMondayIndex;

    return { label, done: hasActivity || (i < todayMondayIndex && i >= todayMondayIndex - currentStreak + 1), isToday };
  });

  return (
    <div
      className="mt-4 p-4 rounded-[20px] border shadow-sm"
      style={{
        background: palette.bg2,
        borderColor: palette.line,
        boxShadow: `0 4px 16px ${palette.shadow}`,
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-[13px] font-bold" style={{ color: palette.ink }}>
          Ta semaine
        </span>
        <span className="text-[11px] font-semibold" style={{ color: palette.accent }}>
          {currentStreak} jour{currentStreak > 1 ? 's' : ''} d'affilée 🔥
        </span>
      </div>
      <div className="flex justify-between gap-1.5">
        {days.map((d, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
            <div
              className="w-[30px] h-[30px] rounded-[11px] flex items-center justify-center text-[13px] font-extrabold transition-all"
              style={{
                background: d.done ? palette.accent : palette.bg3,
                color: d.done ? '#fff' : palette.ink3,
                boxShadow: d.isToday ? `0 0 0 3px ${palette.accentSoft}` : 'none',
              }}
            >
              {d.done ? '✓' : ''}
            </div>
            <span
              className="text-[10px] font-bold"
              style={{ color: d.isToday ? palette.accent : palette.ink3 }}
            >
              {d.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
