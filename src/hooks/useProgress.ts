import { useState, useEffect } from 'react';

export type EvaluationLevel = '🟢' | '🟡' | '🟠' | '🔴';

export interface EvaluationData {
  level: EvaluationLevel;
  timestamp: number;
}

export function useProgress() {
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);
  const [evaluations, setEvaluations] = useState<Record<string, EvaluationData>>({});
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const storedCompleted = localStorage.getItem('eductome_progress');
    if (storedCompleted) {
      try {
        setCompletedExercises(JSON.parse(storedCompleted));
      } catch (e) {
        console.error("Erreur parsing progression");
      }
    }

    const storedEvals = localStorage.getItem('eductome_evaluations');
    if (storedEvals) {
      try {
        setEvaluations(JSON.parse(storedEvals));
      } catch (e) {
        console.error("Erreur parsing évaluations");
      }
    }
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 5000);
  };

  const evaluateExercise = (exerciseId: string, evalLevel: EvaluationLevel, exerciseTitle: string, isLastExercise: boolean) => {
    // 1. Update evaluations
    setEvaluations(prev => {
      const newEvals = {
        ...prev,
        [exerciseId]: {
          level: evalLevel,
          timestamp: Date.now()
        }
      };
      localStorage.setItem('eductome_evaluations', JSON.stringify(newEvals));
      return newEvals;
    });

    // 2. Update completedExercises if not already done
    setCompletedExercises(prev => {
      if (prev.includes(exerciseId)) {
        // Just update toast for re-evaluation
        showToast(`Mise à jour de ton auto-évaluation pour ${exerciseTitle}.`);
        return prev;
      }

      const newCompleted = [...prev, exerciseId];
      localStorage.setItem('eductome_progress', JSON.stringify(newCompleted));

      // Vérifier les paliers de motivation
      const totalDone = newCompleted.length;
      
      if (totalDone === 1) {
        showToast(`💪 Premier exo dans la poche (${exerciseTitle}). Bien joué, petit(e). ${isLastExercise ? "Et c'est déjà le dernier pour ce niveau !" : "On continue ?"}`);
      } else if (totalDone === 5) {
        showToast(`🔥 5 exos faits ! Tu prends le rythme. Le BAC commence à trembler.`);
        if (!localStorage.getItem('eductome_capture_done') && !sessionStorage.getItem('eductome_capture_dismissed')) {
          setShowEmailModal(true);
        }
      } else if (totalDone === 10) {
        showToast(`⭐ 10 exos ! Tu es officiellement dans le top 20% des élèves qui passent à l'action.`);
      } else {
        if (evalLevel === '🔴') {
          showToast(`Note prise pour ${exerciseTitle}. On te le rappellera dans 3 jours !`);
        } else {
          showToast(`💪 ${exerciseTitle} validé. Bien joué, petit(e). ${isLastExercise ? "Tu as terminé la liste !" : "On continue ?"}`);
        }
      }

      return newCompleted;
    });
  };

  const getExercisesToReview = () => {
    const now = Date.now();
    const THREE_DAYS = 3 * 24 * 60 * 60 * 1000;
    
    return Object.entries(evaluations)
      .filter(([_, data]) => data.level === '🔴' && (now - data.timestamp) >= THREE_DAYS)
      .map(([id]) => id);
  };

  const dismissModal = () => {
    setShowEmailModal(false);
    sessionStorage.setItem('eductome_capture_dismissed', 'true');
  };

  const completeCapture = () => {
    setShowEmailModal(false);
    localStorage.setItem('eductome_capture_done', 'true');
  };

  return {
    completedExercises,
    evaluations,
    evaluateExercise,
    getExercisesToReview,
    showEmailModal,
    dismissModal,
    completeCapture,
    toastMessage,
    showToast
  };
}
