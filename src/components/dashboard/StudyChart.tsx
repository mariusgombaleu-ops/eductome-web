import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';
import { useUser } from '../../contexts/UserContext';

const DAYS_SHORT = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

export const StudyChart = () => {
  const { theme, palette } = useTheme();
  const { activityHistory } = useUser();
  const isDark = theme === 'dark';

  // Generate last 7 days
  const data = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    const dayStr = d.toISOString().split('T')[0];
    const xpEarned = activityHistory[dayStr] || 0;
    
    return {
      name: DAYS_SHORT[d.getDay()],
      xp: xpEarned
    };
  });

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? '#30363D' : '#E1E4E8'} />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: isDark ? '#8B949E' : '#6B7280', fontSize: 12 }} 
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: isDark ? '#8B949E' : '#6B7280', fontSize: 12 }} 
          />
          <Tooltip 
            cursor={{ fill: isDark ? '#30363D' : '#F8F9FA' }}
            formatter={(value: any) => [`${value} XP`, 'Gains']}
            contentStyle={{ 
              borderRadius: '8px', 
              border: 'none', 
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              backgroundColor: isDark ? '#161B22' : '#FFFFFF',
              color: isDark ? '#E6EDF3' : '#1A1A2E'
            }}
          />
          <Bar dataKey="xp" radius={[4, 4, 0, 0]}>
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index === 6 ? palette.accent : palette.accent2}
                fillOpacity={index === 6 ? 1 : 0.8}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
