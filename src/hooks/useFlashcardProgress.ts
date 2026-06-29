import { useState, useEffect, useCallback } from 'react';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from '../contexts/AuthContext';
import {
  type FlashcardCourseState, type FlashcardProgress,
  nextDue, isCourseDue, todayStr,
} from '../utils/srs';

/**
 * useFlashcardProgress
 * ────────────────────
 * Répétition espacée *légère*, par chapitre (pas par carte) : à la fin d'une
 * session de révision, on planifie la prochaine échéance selon le score obtenu.
 * Un chapitre « dû » (échéance ≤ aujourd'hui, ou jamais revu) alimente le
 * compteur « à réviser aujourd'hui » du Hub. La logique de planification pure
 * vit dans `utils/srs.ts` (testée isolément).
 *
 * Persistance : champ `flashcardProgress` sur `users/{uid}` (merge, déjà
 * autorisé par les règles), avec repli `localStorage` hors-ligne.
 */
export type { FlashcardCourseState, FlashcardProgress };

const LS_KEY = 'eductome_flashcard_progress';

function readLocal(): FlashcardProgress {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) || '{}');
  } catch {
    return {};
  }
}

export function useFlashcardProgress() {
  const { currentUser } = useAuth();
  const [progress, setProgress] = useState<FlashcardProgress>(readLocal);

  useEffect(() => {
    if (!currentUser) return;
    const unsub = onSnapshot(
      doc(db, 'users', currentUser.uid),
      snap => {
        const data = snap.data();
        if (data?.flashcardProgress) {
          setProgress(data.flashcardProgress as FlashcardProgress);
          try {
            localStorage.setItem(LS_KEY, JSON.stringify(data.flashcardProgress));
          } catch {
            /* no-op */
          }
        }
      },
      () => {
        /* permission-denied en dev : on garde le repli localStorage */
      }
    );
    return () => unsub();
  }, [currentUser]);

  /** À appeler à la fin d'une session complète sur un chapitre. */
  const markReviewed = useCallback(
    (courseId: string, pct: number) => {
      const entry: FlashcardCourseState = { due: nextDue(pct), pct, reviewedAt: todayStr() };
      setProgress(prev => {
        const next = { ...prev, [courseId]: entry };
        try {
          localStorage.setItem(LS_KEY, JSON.stringify(next));
        } catch {
          /* no-op */
        }
        if (currentUser) {
          setDoc(
            doc(db, 'users', currentUser.uid),
            { flashcardProgress: next },
            { merge: true }
          ).catch(() => {
            /* hors-ligne : déjà sauvegardé en localStorage */
          });
        }
        return next;
      });
    },
    [currentUser]
  );

  /** Un chapitre jamais revu, ou dont l'échéance est atteinte, est « à réviser ». */
  const isDue = useCallback(
    (courseId: string) => isCourseDue(progress[courseId], todayStr()),
    [progress]
  );

  return { progress, markReviewed, isDue };
}
