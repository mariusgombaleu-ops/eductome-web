import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface ContinueReadingProps {
  courseId: string;
  tomeName: string;
  chapterNumber: number;
  chapterTitle: string;
  progressPct: number;
}

export const ContinueReading = ({ courseId, tomeName, chapterNumber, chapterTitle, progressPct }: ContinueReadingProps) => {
  const { palette } = useTheme();

  return (
    <div className="mt-5">
      <div className="text-base font-bold mb-3" style={{ color: palette.ink }}>
        Reprends ta lecture
      </div>
      <Link
        to={`/dashboard/course/${courseId}`}
        className="block w-full text-left border rounded-[20px] overflow-hidden no-underline"
        style={{
          background: palette.bg2,
          borderColor: palette.line,
          boxShadow: `0 4px 16px ${palette.shadow}`,
        }}
      >
        <div className="flex gap-3.5 p-3.5">
          {/* Mini cover */}
          <div
            className="w-[52px] h-[64px] flex-none rounded-[11px] flex items-center justify-center text-white font-extrabold text-[11px] text-center leading-tight p-1.5"
            style={{
              background: `linear-gradient(150deg, ${palette.accent}, ${palette.accent2})`,
            }}
          >
            {tomeName}
          </div>
          {/* Info */}
          <div className="flex-1 min-w-0">
            <div
              className="text-[10px] font-bold tracking-[.08em] uppercase"
              style={{ color: palette.accent }}
            >
              Chapitre {chapterNumber}
            </div>
            <div className="text-[14.5px] font-bold mt-0.5" style={{ color: palette.ink }}>
              {chapterTitle}
            </div>
            <div className="mt-2.5 flex items-center gap-2">
              <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: palette.bg3 }}>
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${progressPct}%`, background: palette.accent }}
                />
              </div>
              <span className="text-[11px] font-bold" style={{ color: palette.ink2 }}>
                {progressPct}%
              </span>
            </div>
          </div>
        </div>
        <div
          className="flex items-center justify-center gap-2 py-2.5 text-[13px] font-bold"
          style={{ background: palette.accent, color: palette.onAccent }}
        >
          Continuer <ArrowRight className="w-4 h-4" />
        </div>
      </Link>
    </div>
  );
};
