import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useToast } from './ToastContext';
import { BADGES } from '../constants/badges';
import { useAuth } from './AuthContext';
import { db } from '../config/firebase';
import { doc, onSnapshot, setDoc, updateDoc, arrayUnion, increment, collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { Achat } from '../types';

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

export interface UserGoals {
  bacPoints?: number;
  generalAverage?: number;
  subjectTargets?: Record<string, number>;
  trimesterTargets?: {
    t1?: number;
    t2?: number;
    t3?: number;
  };
}

export interface UserGrades {
  t1?: Record<string, (number | string)[]>;
  t2?: Record<string, (number | string)[]>;
  t3?: Record<string, (number | string)[]>;
}

interface UserContextType {
  xp: number;
  level: UserLevel;
  unlockedBadges: string[];
  unlockedCourses: string[];
  achats: Achat[];
  statut: 'gratuit' | 'famille';
  currentStreak: number;
  email_selar?: string;
  activityHistory: Record<string, number>;
  rewardedActions: Set<string>;
  isAdmin: boolean;
  isRelais: boolean;
  userRole: 'student' | 'grand_frere' | 'admin' | 'equipe';
  pseudo: string;
  sexe?: 'M' | 'F';
  levelString: string;
  highschool: string;
  favoriteSubject: string;
  goal: string;
  goals: UserGoals;
  grades: UserGrades;
  createdAt: string;
  photoURL: string | null;
  updateGoals: (newGoals: UserGoals) => Promise<void>;
  updateGrades: (newGrades: UserGrades) => Promise<void>;
  gainXp: (amount: number, reason: string, actionId?: string) => void;
  hasActionBeenRewarded: (actionId: string) => boolean;
  unlockCourse: (courseId: string) => void;
  resetUser: () => void;
  unlockEverything: () => void;
  addXpDev: (amount: number) => void;
  devSimulerGratuit: () => void;
  devSimulerFamille: () => void;
  devSetStreak: (n: number) => void;
  devUnlockCourseTest: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();
  const { addToast } = useToast();

  const [xp, setXp] = useState<number>(0);
  const [rewardedActions, setRewardedActions] = useState<Set<string>>(new Set());
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([]);
  const [unlockedCourses, setUnlockedCourses] = useState<string[]>([]);
  const [achats, setAchats] = useState<Achat[]>([]);
  const [statut, setStatut] = useState<'gratuit' | 'famille'>('gratuit');
  const [currentStreak, setCurrentStreak] = useState<number>(1);
  const [email_selar, setEmailSelar] = useState<string | undefined>(undefined);
  const streakUpdatedRef = useRef(false);
  const [activityHistory, setActivityHistory] = useState<Record<string, number>>({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [isRelais, setIsRelais] = useState(false);
  const [userRole, setUserRole] = useState<'student' | 'grand_frere' | 'admin' | 'equipe'>('student');
  const [pseudo, setPseudo] = useState('Champion(ne)');
  const [sexe, setSexe] = useState<'M' | 'F' | undefined>(undefined);
  const [levelString, setLevelString] = useState('terminale-d');
  const [highschool, setHighschool] = useState('');
  const [favoriteSubject, setFavoriteSubject] = useState('');
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState<UserGoals>({});
  const [grades, setGrades] = useState<UserGrades>({});
  const [createdAt, setCreatedAt] = useState('');
  const [photoURL, setPhotoURL] = useState<string | null>(null);

  // Synchronisation avec Firestore
  useEffect(() => {
    if (!currentUser) {
      // Nettoyage si pas connecté
      setXp(0);
      setRewardedActions(new Set());
      setUnlockedBadges([]);
      setUnlockedCourses([]);
      setAchats([]);
      setStatut('gratuit');
      setCurrentStreak(1);
      setEmailSelar(undefined);
      setActivityHistory({});
      setIsAdmin(false);
      setIsRelais(false);
      streakUpdatedRef.current = false;
      setUserRole('student');
      setPseudo('');
      setSexe(undefined);
      setLevelString('');
      setHighschool('');
      setFavoriteSubject('');
      setGoal('');
      setCreatedAt('');
      setPhotoURL(null);
      return;
    }

    const userRef = doc(db, 'users', currentUser.uid);
    streakUpdatedRef.current = false;
    const unsubscribe = onSnapshot(userRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setXp(data.xp || 0);
        setUnlockedCourses(data.unlockedCourses || []);
        setUnlockedBadges(data.unlockedBadges || []);
        setRewardedActions(new Set(data.rewardedActions || []));
        setActivityHistory(data.activityHistory || {});
        
        let computedRole = data.role || 'student';
        const identifier = currentUser.phoneNumber || currentUser.email || '';
        if (identifier.includes('0715811398')) {
          computedRole = 'grand_frere';
        } else if (identifier.includes('0799506300')) {
          computedRole = 'admin';
        }

        setUserRole(computedRole);
        setIsAdmin(['admin', 'grand_frere', 'equipe'].includes(computedRole));
        
        setPseudo(data.pseudo || 'Champion');
        setSexe(data.sexe);
        setLevelString(data.level || 'Terminale');
        setHighschool(data.highschool || '');
        setFavoriteSubject(data.favoriteSubject || '');
        setGoal(data.goal || '');
        setGoals(data.goals || {});
        setGrades(data.grades || {});
        setPhotoURL(data.photoURL || currentUser.photoURL || null);
        setEmailSelar(data.email_selar);

        // Streak logic — runs once per login session to avoid update loops
        const storedStreak: number = data.currentStreak || 1;
        const lastStudyDate: string | null = data.lastStudyDate || null;
        setCurrentStreak(storedStreak);

        if (!streakUpdatedRef.current) {
          streakUpdatedRef.current = true;
          const d = new Date();
          const pad = (n: number) => String(n).padStart(2, '0');
          const today = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
          const yesterday = (() => {
            const y = new Date(d);
            y.setDate(y.getDate() - 1);
            return `${y.getFullYear()}-${pad(y.getMonth() + 1)}-${pad(y.getDate())}`;
          })();

          if (lastStudyDate !== today) {
            const newStreak = lastStudyDate === yesterday ? storedStreak + 1 : 1;
            setCurrentStreak(newStreak);
            updateDoc(userRef, { currentStreak: newStreak, lastStudyDate: today }).catch(console.error);
          }
        }

        if (data.createdAt) {
          const date = data.createdAt.toDate ? data.createdAt.toDate() : new Date(data.createdAt);
          setCreatedAt(new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' }).format(date));
        }
      } else {
        // Initialiser le profil s'il n'existe pas
        setDoc(userRef, {
          xp: 0,
          unlockedCourses: [],
          unlockedBadges: [],
          rewardedActions: [],
          activityHistory: {},
          role: 'student',
          pseudo: 'Champion',
          level: 'Terminale',
          createdAt: new Date()
        });
      }
    });

    return () => unsubscribe();
  }, [currentUser]);

  // Synchronisation des achats
  useEffect(() => {
    if (!currentUser) return;

    const achatsRef = collection(db, 'achats');
    const q = query(achatsRef, where('compte_id', '==', currentUser.uid));
    
    const unsubscribeAchats = onSnapshot(q, (snapshot) => {
      const fetchedAchats: Achat[] = [];
      let isFamille = false;
      const courses: string[] = [];

      snapshot.forEach((doc) => {
        const achat = { id: doc.id, ...doc.data() } as Achat;
        fetchedAchats.push(achat);
        
        if (['tome', 'collection', 'physique'].includes(achat.type)) {
          isFamille = true;
        }
        
        // Dynamically add to unlocked courses for backward compatibility or simple check
        if (!courses.includes(achat.reference)) {
          courses.push(achat.reference);
        }
      });

      setAchats(fetchedAchats);
      setStatut(isFamille ? 'famille' : 'gratuit');
      
      // On fusionne les achats avec les unlockedCourses manuels (s'il y en a eu dans le passé)
      setUnlockedCourses(prev => {
        const merged = new Set([...prev, ...courses]);
        return Array.from(merged);
      });
    });

    return () => unsubscribeAchats();
  }, [currentUser]);

  // Détection du statut Relais
  useEffect(() => {
    if (!currentUser) {
      setIsRelais(false);
      return;
    }
    const relaisQuery = query(collection(db, 'relais'), where('uid', '==', currentUser.uid));
    const unsubscribeRelais = onSnapshot(relaisQuery, (snap) => {
      setIsRelais(!snap.empty);
    });
    return () => unsubscribeRelais();
  }, [currentUser]);

  // --- SYSTÈME DE VIGILE FRONTEND (POLLING EN ARRIÈRE-PLAN) ---
  useEffect(() => {
    const checkBackgroundPayment = async () => {
      const waitingEmail = localStorage.getItem('eductome_waiting_payment_email');
      const waitingTimeStr = localStorage.getItem('eductome_waiting_payment_time');
      
      if (!waitingEmail || !waitingTimeStr || !currentUser) return;

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
          let coursesToAdd: string[] = [];

          if (pendingCourseId) {
            if (pendingCourseId === 'cles-maths' || pendingCourseId.includes('cles')) {
               coursesToAdd = ['t1-limites', 't2-derivees', 't3-primitives', 't11-eq-diff'];
            } else {
               coursesToAdd = [pendingCourseId];
            }
          } else {
            coursesToAdd = [data.productId];
          }
          
          // Mettre à jour Firestore
          const userRef = doc(db, 'users', currentUser.uid);
          // On évite les doublons via une petite vérification ou on utilise arrayUnion pour chaque
          await updateDoc(userRef, {
            unlockedCourses: arrayUnion(...coursesToAdd)
          });

          // Traitement du code relais si présent
          const pendingRelaisCode = localStorage.getItem('eductome_pending_relais_code');
          if (pendingRelaisCode) {
            try {
              const produit = pendingCourseId || data.productId;
              // Mettre à jour le doc achat avec le relaisCode
              const achatSnap = await getDocs(query(
                collection(db, 'achats'),
                where('compte_id', '==', currentUser.uid)
              ));
              const matchingAchat = achatSnap.docs.find(d => d.data().reference === produit);
              if (matchingAchat) {
                await updateDoc(matchingAchat.ref, { relaisCode: pendingRelaisCode });
              }
              // Incrémenter les totaux du relais et enregistrer la vente
              const relaisDocRef = doc(db, 'relais', pendingRelaisCode);
              await updateDoc(relaisDocRef, {
                totalVentes: increment(1),
                totalCommission: increment(300)
              });
              await addDoc(collection(db, 'relais', pendingRelaisCode, 'ventes'), {
                date: new Date(),
                produit,
                commission: 300,
                acheteurId: currentUser.uid
              });
            } catch (relaisErr) {
              console.error('Relais tracking error:', relaisErr);
            }
            localStorage.removeItem('eductome_pending_relais_code');
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

    // Vérifier toutes les 5 secondes
    const interval = setInterval(checkBackgroundPayment, 5000);
    return () => clearInterval(interval);
  }, [currentUser, addToast]);

  const hasActionBeenRewarded = (actionId: string) => rewardedActions.has(actionId);

  const gainXp = async (baseAmount: number, reason: string, actionId?: string) => {
    if (baseAmount <= 0 || !currentUser) return;
    
    if (actionId && rewardedActions.has(actionId)) return;

    // Appliquer le modificateur Famille EDUCTOME (XP x2)
    const amount = statut === 'famille' ? baseAmount * 2 : baseAmount;

    const previousLevel = getLevelFromXp(xp);
    const newXp = xp + amount;
    const currentLevel = getLevelFromXp(newXp);
    const today = new Date().toISOString().split('T')[0];

    const userRef = doc(db, 'users', currentUser.uid);
    const updates: any = {
      xp: increment(amount),
      [`activityHistory.${today}`]: increment(amount)
    };

    if (actionId) {
      updates.rewardedActions = arrayUnion(actionId);
    }

    try {
      await updateDoc(userRef, updates);

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

      // Vérification locale pour les badges
      const newActionsSet = new Set(rewardedActions);
      if (actionId) newActionsSet.add(actionId);
      
      const newlyUnlocked: string[] = [];
      if (!unlockedBadges.includes('badge_curieux')) {
        let exerciseCount = 0;
        newActionsSet.forEach(a => { if (a.startsWith('exercise_')) exerciseCount++; });
        if (exerciseCount >= 1) newlyUnlocked.push('badge_curieux');
      }

      if (!unlockedBadges.includes('badge_studieux')) {
        let quizCount = 0;
        newActionsSet.forEach(a => { if (a.startsWith('quiz_')) quizCount++; });
        if (quizCount >= 1) newlyUnlocked.push('badge_studieux');
      }
      
      if (!unlockedBadges.includes('badge_pilier_forum')) {
        let likesCount = 0;
        newActionsSet.forEach(a => { if (a.startsWith('forum_like_')) likesCount++; });
        if (likesCount >= 5) newlyUnlocked.push('badge_pilier_forum');
      }

      if (!unlockedBadges.includes('badge_sans_faute') && reason.includes('premier coup')) {
        newlyUnlocked.push('badge_sans_faute');
      }

      if (newlyUnlocked.length > 0) {
        await updateDoc(userRef, {
          unlockedBadges: arrayUnion(...newlyUnlocked)
        });
        
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
    } catch (err) {
      console.error("Erreur gainXp:", err);
    }
  };

  const unlockCourse = async (courseId: string) => {
    if (!currentUser || unlockedCourses.includes(courseId)) return;
    const userRef = doc(db, 'users', currentUser.uid);
    await updateDoc(userRef, {
      unlockedCourses: arrayUnion(courseId)
    });
  };

  const resetUser = async () => {
    if (!currentUser) return;
    const userRef = doc(db, 'users', currentUser.uid);
    // Use updateDoc instead of setDoc to preserve pseudo, goal, highschool, etc.
    await updateDoc(userRef, {
      xp: 0,
      unlockedCourses: [],
      unlockedBadges: [],
      rewardedActions: [],
      activityHistory: {},
      grades: {},
      goals: {}
    });
    addToast({ type: 'info', title: 'Test', message: 'Progression réinitialisée à zéro. Profil conservé.' });
  };

  const unlockEverything = async () => {
    if (!currentUser) return;
    const userRef = doc(db, 'users', currentUser.uid);
    // Give 5000 XP and unlock main courses + badges
    await updateDoc(userRef, {
      xp: 5000,
      unlockedCourses: ['t1-limites', 't2-derivees', 't3-primitives', 't11-eq-diff'],
      unlockedBadges: ['badge_curieux', 'badge_studieux', 'badge_pilier_forum', 'badge_sans_faute']
    });
    addToast({ type: 'success', title: 'Mode Caïman Activé', message: '5000 XP et tous les contenus débloqués.' });
  };

  const addXpDev = async (amount: number) => {
    await gainXp(amount, 'Dev boost', 'dev_boost');
  };

  const devSimulerGratuit = () => {
    setXp(0);
    setStatut('gratuit');
    setCurrentStreak(0);
    setUnlockedCourses([]);
    setUnlockedBadges([]);
    setRewardedActions(new Set());
  };

  const devSimulerFamille = () => {
    setXp(5000);
    setStatut('famille');
    setCurrentStreak(7);
    setUnlockedCourses(['t1-limites', 't2-derivees', 't3-primitives', 't11-eq-diff']);
    setUnlockedBadges(['badge_curieux', 'badge_studieux', 'badge_pilier_forum', 'badge_sans_faute']);
  };

  const devSetStreak = (n: number) => setCurrentStreak(n);

  const devUnlockCourseTest = () => {
    setUnlockedCourses(prev => prev.includes('t1-limites') ? prev : [...prev, 't1-limites']);
  };

  const updateGoals = async (newGoals: UserGoals) => {
    if (!currentUser) return;
    try {
      await updateDoc(doc(db, 'users', currentUser.uid), {
        goals: newGoals
      });
      setGoals(newGoals);
    } catch (err) {
      console.error("Failed to update goals", err);
      throw err;
    }
  };

  const updateGrades = async (newGrades: UserGrades) => {
    if (!currentUser) return;
    try {
      await updateDoc(doc(db, 'users', currentUser.uid), {
        grades: newGrades
      });
      setGrades(newGrades);
    } catch (err) {
      console.error("Failed to update grades", err);
      throw err;
    }
  };

  return (
    <UserContext.Provider value={{ 
      xp, 
      level: getLevelFromXp(xp), 
      unlockedBadges, 
      unlockedCourses, 
      achats,
      statut,
      currentStreak,
      email_selar,
      activityHistory,
      rewardedActions,
      isAdmin,
      isRelais,
      userRole,
      pseudo,
      sexe,
      levelString,
      highschool,
      favoriteSubject,
      goal,
      goals,
      grades,
      createdAt,
      photoURL,
      gainXp, 
      hasActionBeenRewarded, 
      unlockCourse,
      resetUser,
      unlockEverything,
      addXpDev,
      devSimulerGratuit,
      devSimulerFamille,
      devSetStreak,
      devUnlockCourseTest,
      updateGoals,
      updateGrades
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
