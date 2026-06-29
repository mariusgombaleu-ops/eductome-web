// ============================================================================
// useExamTimer — chrono de composition à anneau.
// Décompte à la seconde, expose le palier (serein/vigilance/urgence), et
// persiste l'état en localStorage pour survivre à un rafraîchissement.
// ============================================================================

import { useEffect, useRef, useState, useCallback } from 'react';
import { timerPhase } from '../utils/examen-utils';
import type { TimerPhase } from '../types/examen';

interface UseExamTimer {
  remaining: number;       // secondes restantes
  total: number;           // secondes totales
  phase: TimerPhase;
  ratio: number;           // 0 → 1 (part écoulée), pour l'anneau
  running: boolean;
  start: () => void;
  stop: () => void;
  reset: (totalSec?: number) => void;
}

/**
 * @param totalSec  Durée totale (secondes).
 * @param storageKey  Clé localStorage unique (ex. `eductome_sim_<examId>_<mode>_<level>`).
 * @param onExpire  Appelé une fois quand le chrono atteint 0.
 */
export function useExamTimer(
  totalSec: number,
  storageKey: string,
  onExpire?: () => void,
): UseExamTimer {
  const [total, setTotal] = useState(totalSec);
  const [remaining, setRemaining] = useState(totalSec);
  const [running, setRunning] = useState(false);
  const expiredRef = useRef(false);
  const onExpireRef = useRef(onExpire);
  onExpireRef.current = onExpire;

  // Restauration au montage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const saved = JSON.parse(raw) as { remaining: number; total: number; running: boolean; ts: number };
        if (saved.total === totalSec) {
          // Si le chrono tournait, on rattrape le temps écoulé hors-ligne.
          const elapsed = saved.running ? Math.floor((Date.now() - saved.ts) / 1000) : 0;
          const rem = Math.max(0, saved.remaining - elapsed);
          setTotal(saved.total);
          setRemaining(rem);
          setRunning(saved.running && rem > 0);
          return;
        }
      }
    } catch { /* ignore */ }
    setTotal(totalSec);
    setRemaining(totalSec);
  }, [storageKey, totalSec]);

  // Persistance à chaque changement
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ remaining, total, running, ts: Date.now() }));
    } catch { /* ignore */ }
  }, [remaining, total, running, storageKey]);

  // Tick
  useEffect(() => {
    if (!running || remaining <= 0) return;
    const id = setTimeout(() => setRemaining(r => r - 1), 1000);
    return () => clearTimeout(id);
  }, [running, remaining]);

  // Expiration
  useEffect(() => {
    if (remaining === 0 && running && !expiredRef.current) {
      expiredRef.current = true;
      setRunning(false);
      onExpireRef.current?.();
    }
  }, [remaining, running]);

  const start = useCallback(() => { expiredRef.current = false; setRunning(true); }, []);
  const stop = useCallback(() => setRunning(false), []);
  const reset = useCallback((t?: number) => {
    const nt = t ?? totalSec;
    expiredRef.current = false;
    setTotal(nt);
    setRemaining(nt);
    setRunning(false);
    try { localStorage.removeItem(storageKey); } catch { /* ignore */ }
  }, [totalSec, storageKey]);

  const phase = timerPhase(remaining, total);
  const ratio = total > 0 ? (total - remaining) / total : 0;

  return { remaining, total, phase, ratio, running, start, stop, reset };
}
