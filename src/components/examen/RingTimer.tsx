// ============================================================================
// RingTimer — anneau de progression du chrono.
// La couleur suit le palier (serein → accent, vigilance → orange, urgence → rouge).
// ============================================================================

import { ReactNode } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import type { TimerPhase } from '../../types/examen';

interface RingTimerProps {
  size?: number;
  stroke?: number;
  /** Part écoulée du temps, 0 → 1. L'anneau se vide à mesure. */
  ratio: number;
  phase: TimerPhase;
  children?: ReactNode;
  /** Force une couleur d'anneau (sinon dérivée du palier). */
  color?: string;
  /** Couleur du rail de fond. */
  trackColor?: string;
}

export function RingTimer({
  size = 74, stroke = 6, ratio, phase, children, color, trackColor,
}: RingTimerProps) {
  const { palette } = useTheme();
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const remainingFrac = Math.max(0, Math.min(1, 1 - ratio));
  const offset = c * (1 - remainingFrac);

  const phaseColor = color
    ?? (phase === 'urgence' ? palette.warnBar
      : phase === 'vigilance' ? palette.anaBar
      : palette.accent);

  return (
    <div style={{ position: 'relative', width: size, height: size, flex: 'none' }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none"
          stroke={trackColor ?? palette.line} strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none"
          stroke={phaseColor} strokeWidth={stroke} strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1s linear, stroke .4s ease' }} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {children}
      </div>
    </div>
  );
}
