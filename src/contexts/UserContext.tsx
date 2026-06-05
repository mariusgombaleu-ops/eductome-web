import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from './ToastContext';
import { BADGES } from '../constants/badges';

export interface UserLevel {
  level: number;
  title: string;
  minXp: number;
  maxXp: number | null;
}

export const USER_LEVELS: UserLevel[] = [
  { level: 1, title: "Élève", minXp: 0, maxXp: 200 },
  { level: 2, title: "Bosseur", minXp: 200, maxXp: 500 },
  { level: 3, title: "Caïman en herbe", minXp: 500, maxXp: 1000 },
  { level: 4, title: "Le Caïman", minXp: 1000, maxXp: 2000 },
  { level: 5, title: "Grand Frère", minXp: 2000, maxXp: 5000 },
  { level: 6, title: "Légende du Cacao", minXp: 5000, maxXp: null },
];

export const getLevelFromXp = (xp: number): UserLevel => {
  for (let i = USER_LEVELS.length - 1; i >= 0; i--) {
    if (xp >= USER_LEVELS[i].minXp) {
      return USER_LEVELS[i];
    }
  }
  return USER_LEVELS[0];
};

interface UserContextType {
  xp: number;
  level: UserLevel;
  unlockedBadges: string[];
  unlockedCourses: string[];
  activityHistory: Record<string, number>;
  rewardedActions: Set<string>;
  gainXp: (amount: number, reason: string, actionId?: string) => void;
  hasActionBeenRewarded: (actionId: string) => boolean;
  unlockCourse: (courseId: string) => void;
  resetUser: () => void;
  unlockEverything: () => void;
  addXpDev: (amount: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [xp, setXp] = useState<number>(() => {
    return parseInt(localStorage.getItem('eductome_user_xp') || '0', 10);
  });
  
  const [rewardedActions, setRewardedActions] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('eductome_rewarded_actions');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  const [unlockedBadges, setUnlockedBadges] = useState<string[]>(() => {
    return JSON.parse(localStorage.getItem('eductome_unlocked_badges') || '[]');
  });

  const [unlockedCourses, setUnlockedCourses] = useState<string[]>(() => {
    return JSON.parse(localStorage.getItem('eductome_unlocked_courses') || '[]');
  });

  const [activityHistory, setActivityHistory] = useState<Record<string, number>>(() => {
    return JSON.parse(localStorage.getItem('eductome_activity_history') || '{}');
  });

  const { addToast } = useToast();

  useEffect(() => {
    localStorage.setItem('eductome_user_xp', xp.toString());
  }, [xp]);

  useEffect(() => {
    localStorage.setItem('eductome_rewarded_actions', JSON.stringify(Array.from(rewardedActions)));
  }, [rewardedActions]);

  useEffect(() => {
    localStorage.setItem('eductome_unlocked_badges', JSON.stringify(unlockedBadges));
  }, [unlockedBadges]);

  useEffect(() => {
    localStorage.setItem('eductome_unlocked_courses', JSON.stringify(unlockedCourses));
  }, [unlockedCourses]);

  useEffect(() => {
    localStorage.setItem('eductome_activity_history', JSON.stringify(activityHistory));
  }, [activityHistory]);

  // --- SYSTÈME DE VIGILE FRONTEND (POLLING EN ARRIÈRE-PLAN) ---
  useEffect(() => {
    const checkBackgroundPayment = async () => {
      const waitingEmail = localStorage.getItem('eductome_waiting_payment_email');
      const waitingTimeStr = localStorage.getItem('eductome_waiting_payment_time');
      
      if (!waitingEmail || !waitingTimeStr) return;

      const waitingTime = parseInt(waitingTimeStr, 10);
      // Si l'attente dure depuis plus de 15 minutes, on abandonne
      if (Date.now() - waitingTime > 15 * 60 * 1000) {
        localStorage.removeItem('eductome_waiting_payment_email');
        localStorage.removeItem('eductome_waiting_payment_time');
        return;
      }

      try {
        const response = await fetch(`https://us-central1-eductome-web.cloudfunctions.net/checkTransaction?email=${encodeURIComponent(waitingEmail)}`);
        const data = await response.json();
        
        if (data.success && data.productId) {
          const pendingCourseId = localStorage.getItem('eductome_pending_course');
          
          if (pendingCourseId) {
            if (pendingCourseId === 'cles-maths' || pendingCourseId.includes('cles')) {
               const tomesMaths = ['t1-limites', 't2-derivees', 't3-primitives', 't11-eq-diff'];
               setUnlockedCourses(prev => {
                 const newCourses = [...prev];
                 tomesMaths.forEach(t => { if (!newCourses.includes(t)) newCourses.push(t); });
                 return newCourses;
               });
            } else {
               setUnlockedCourses(prev => prev.includes(pendingCourseId) ? prev : [...prev, pendingCourseId]);
            }
          } else {
            setUnlockedCourses(prev => prev.includes(data.productId) ? prev : [...prev, data.productId]);
          }
          
          // Nettoyage
          localStorage.removeItem('eductome_waiting_payment_email');
          localStorage.removeItem('eductome_pending_course');
          localStorage.removeItem('eductome_waiting_payment_time');
          
          addToast({
            type: 'success',
            title: 'Paiement Validé ! 🎉',
            message: 'Le Vigile a détecté ton paiement. Ton cours est débloqué !'
          });
        }
      } catch (error) {
        console.error("Erreur du Vigile frontend:", error);
      }
    };

    // Vérifier immédiatement au chargement
    checkBackgroundPayment();

    // Puis vérifier toutes les 5 secondes
    const interval = setInterval(checkBackgroundPayment, 5000);
    return () => clearInterval(interval);
  }, []); // Exécuté une seule fois au montage du provider

  const hasActionBeenRewarded = (actionId: string) => rewardedActions.has(actionId);

  const gainXp = (amount: number, reason: string, actionId?: string) => {
    if (amount <= 0) return;
    
    let newActions = rewardedActions;
    if (actionId) {
      if (rewardedActions.has(actionId)) return; // Déjà récompensé
      newActions = new Set(rewardedActions).add(actionId);
      setRewardedActions(newActions);
    }

    const previousLevel = getLevelFromXp(xp);
    const newXp = xp + amount;
    const currentLevel = getLevelFromXp(newXp);
    
    setXp(newXp);

    const today = new Date().toISOString().split('T')[0];
    setActivityHistory(prev => ({
      ...prev,
      [today]: (prev[today] || 0) + amount
    }));
    
    addToast({
      type: 'xp',
      title: 'XP Gagné !',
      message: reason,
      xpAmount: amount
    });

    if (currentLevel.level > previousLevel.level) {
      setTimeout(() => {
        addToast({
          type: 'success',
          title: `Niveau ${currentLevel.level} Atteint !`,
          message: `Félicitations, tu es maintenant "${currentLevel.title}".`
        });
      }, 1000);
    }

    // Vérification des Badges
    const newlyUnlocked: string[] = [];

    if (!unlockedBadges.includes('badge_curieux')) {
      let exerciseCount = 0;
      newActions.forEach(a => { if (a.startsWith('exercise_')) exerciseCount++; });
      if (exerciseCount >= 1) newlyUnlocked.push('badge_curieux');
    }

    if (!unlockedBadges.includes('badge_studieux')) {
      let quizCount = 0;
      newActions.forEach(a => { if (a.startsWith('quiz_')) quizCount++; });
      if (quizCount >= 1) newlyUnlocked.push('badge_studieux');
    }
    
    if (!unlockedBadges.includes('badge_pilier_forum')) {
      let likesCount = 0;
      newActions.forEach(a => { if (a.startsWith('forum_like_')) likesCount++; });
      if (likesCount >= 5) newlyUnlocked.push('badge_pilier_forum');
    }

    if (!unlockedBadges.includes('badge_sans_faute') && reason.includes('premier coup')) {
      newlyUnlocked.push('badge_sans_faute');
    }

    if (newlyUnlocked.length > 0) {
      setUnlockedBadges(prev => [...prev, ...newlyUnlocked]);
      setTimeout(() => {
        newlyUnlocked.forEach(badgeId => {
          const badge = BADGES.find(b => b.id === badgeId);
          if (badge) {
            addToast({
              type: 'success',
              title: `Badge Débloqué : ${badge.title} !`,
              message: badge.description
            });
          }
        });
      }, 2000);
    }
  };

  const unlockCourse = (courseId: string) => {
    if (!unlockedCourses.includes(courseId)) {
      setUnlockedCourses(prev => [...prev, courseId]);
    }
  };

  const resetUser = () => {
    setXp(0);
    setUnlockedCourses([]);
    setUnlockedBadges([]);
    setRewardedActions(new Set());
    setActivityHistory({});
    localStorage.removeItem('eductome_user_xp');
    localStorage.removeItem('eductome_unlocked_courses');
    localStorage.removeItem('eductome_unlocked_badges');
    localStorage.removeItem('eductome_rewarded_actions');
    localStorage.removeItem('eductome_activity_history');
    localStorage.removeItem('eductome_courses_with_notes');
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('eductome_course_notes_')) {
        localStorage.removeItem(key);
      }
    });
    addToast({ type: 'info', title: 'Test', message: 'Profil réinitialisé : Nouvel Élève simulé.' });
  };

  const unlockEverything = () => {
    setXp(5000);
    setUnlockedCourses(['t1-limites', 't2-derivees', 't3-primitives', 't11-eq-diff']);
    addToast({ type: 'success', title: 'Mode Caïman activé', message: 'Tomes débloqués, XP max.' });
  };

  const addXpDev = (amount: number) => {
    gainXp(amount, 'Mode Testeur');
  };

  return (
    <UserContext.Provider value={{ 
      xp, 
      level: getLevelFromXp(xp), 
      unlockedBadges, 
      unlockedCourses, 
      activityHistory,
      rewardedActions,
      gainXp, 
      hasActionBeenRewarded, 
      unlockCourse,
      resetUser,
      unlockEverything,
      addXpDev
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
