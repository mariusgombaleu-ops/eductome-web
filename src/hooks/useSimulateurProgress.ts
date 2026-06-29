// ============================================================================
// useSimulateurProgress — déblocage des paliers (BASE/MOYEN/BAC), par mode.
// Source de vérité : Firestore users/{uid}.simulateurProgress (sync temps réel),
// avec repli localStorage pour les invités / hors-ligne.
// ============================================================================

import { useCallback, useEffect, useState } from 'react';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from '../contexts/AuthContext';
import { applyResult, emptyProgress } from '../utils/examen-utils';
import type { ExamLevel, ExamMode, SimulateurProgress } from '../types/examen';

const LS_KEY = 'eductome_simulateur_progress';

function readLocal(): SimulateurProgress {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) return JSON.parse(raw) as SimulateurProgress;
  } catch { /* ignore */ }
  return emptyProgress();
}

export function useSimulateurProgress() {
  const { currentUser } = useAuth();
  const [progress, setProgress] = useState<SimulateurProgress>(readLocal);

  // Sync Firestore (si connecté)
  useEffect(() => {
    if (!currentUser) {
      setProgress(readLocal());
      return;
    }
    const ref = doc(db, 'users', currentUser.uid);
    const unsub = onSnapshot(ref, (snap) => {
      const data = snap.data();
      if (data?.simulateurProgress) {
        setProgress(data.simulateurProgress as SimulateurProgress);
      } else {
        setProgress(emptyProgress());
      }
    });
    return () => unsub();
  }, [currentUser]);

  const persist = useCallback(async (next: SimulateurProgress) => {
    setProgress(next);
    try { localStorage.setItem(LS_KEY, JSON.stringify(next)); } catch { /* ignore */ }
    if (currentUser) {
      try {
        await setDoc(doc(db, 'users', currentUser.uid), { simulateurProgress: next }, { merge: true });
      } catch (e) { console.error('persist simulateurProgress', e); }
    }
  }, [currentUser]);

  /** Enregistre un résultat et renvoie la liste des paliers nouvellement débloqués. */
  const recordResult = useCallback(async (mode: ExamMode, level: ExamLevel, note: number): Promise<ExamLevel[]> => {
    const before = progress[mode];
    const after = applyResult(before, level, note);
    const newlyUnlocked = after.unlocked.filter(l => !before.unlocked.includes(l));
    await persist({ ...progress, [mode]: after });
    return newlyUnlocked;
  }, [progress, persist]);

  return { progress, recordResult };
}
