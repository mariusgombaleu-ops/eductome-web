import React, { createContext, useContext, useState, useEffect, useRef, useMemo } from 'react';
import { useToast } from './ToastContext';
import { BADGES } from '../constants/badges';
import { useAuth } from './AuthContext';
import { db } from '../config/firebase';
import { doc, onSnapshot, setDoc, updateDoc, arrayUnion, increment, collection, query, where } from 'firebase/firestore';
import { Achat } from '../types';
import {
  entitlementsFromLegacy,
  canAccess as canAccessEntitlement,
  isMember as isMemberEntitlement,
  Entitlement,
} from '../utils/entitlements';
import { Resource } from '../data/skus';

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
  /** Droits à vie (module ⊂ tome ⊂ collection). Lus depuis le doc, sinon dérivés du legacy. */
  entitlements: Entitlement[];
  /** Accès effectif à une ressource protégée, en remontant la hiérarchie des droits. */
  hasAccess: (resource: Resource) => boolean;
  /** true si l'utilisateur possède au moins un droit payant. */
  isMember: boolean;
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
  const [firestoreEntitlements, setFirestoreEntitlements] = useState<Entitlement[]>([]);
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
      setFirestoreEntitlements([]);
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
        setFirestoreEntitlements((data.entitlements as Entitlement[]) || []);
        setUnlockedBadges(data.unlockedBadges || []);
        setRewardedActions(new Set(data.rewardedActions || []));
        setActivityHistory(data.activityHistory || {});
        
        // SÉCURITÉ (MOY-3) : le rôle est déterminé côté serveur via Firebase Custom Claims.
        // En DEV uniquement : fallback sur le numéro de téléphone pour éviter de configurer
        // les Custom Claims pendant le développement. Ce fallback est supprimé en production.
        let computedRole = data.role || 'student';
        if (currentUser) {
          currentUser.getIdTokenResult().then((tokenResult) => {
            let claimRole = data.role || 'student';
            if (tokenResult.claims.isAdmin === true) {
              claimRole = 'admin';
            } else if (tokenResult.claims.isGrandFrere === true) {
              claimRole = 'grand_frere';
            } else if (tokenResult.claims.isEquipe === true) {
              claimRole = 'equipe';
            } else if (import.meta.env.DEV) {
              // Fallback DEV uniquement — sera supprimé avant la mise en prod
              const identifier = currentUser.phoneNumber || currentUser.email || '';
              if (identifier.includes('0715811398')) {
                claimRole = 'grand_frere';
              } else if (identifier.includes('0799506300')) {
                claimRole = 'admin';
              }
            }
            setUserRole(claimRole);
            setIsAdmin(['admin', 'grand_frere', 'equipe'].includes(claimRole));
          }).catch(() => {
            // En cas d'erreur de token, on garde le rôle du document
            setUserRole(computedRole);
            setIsAdmin(['admin', 'grand_frere', 'equipe'].includes(computedRole));
          });
        } else {
          setUserRole(computedRole);
          setIsAdmin(['admin', 'grand_frere', 'equipe'].includes(computedRole));
        }
        
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
            
            const updates: any = { currentStreak: newStreak, lastStudyDate: today };
            
            let streakBonus = 0;
            let streakMsg = '';
            let streakActionId = '';
            
            if (newStreak % 7 === 0) { // Bonus tous les 7 jours
              streakBonus = 100;
              streakMsg = `Série de ${newStreak} jours ! 🔥🔥`;
              streakActionId = `streak_7_${today}`;
            } else if (newStreak === 3) {
              streakBonus = 30;
              streakMsg = 'Série de 3 jours ! 🔥';
              streakActionId = `streak_3_${today}`;
            }

            if (streakBonus > 0) {
              updates.xp = increment(streakBonus);
              updates[`activityHistory.${today}`] = increment(streakBonus);
              updates.rewardedActions = arrayUnion(streakActionId);
              
              setTimeout(() => {
                addToast({
                  type: 'xp',
                  title: 'Série Maintenue !',
                  message: streakMsg,
                  xpAmount: streakBonus
                });
              }, 1500);
            }
            
            updateDoc(userRef, updates).catch(console.error);
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
        const response = await fetch(
          `https://us-central1-eductome-web.cloudfunctions.net/checkTransaction?email=${encodeURIComponent(waitingEmail)}`,
          {
            headers: {
              Authorization: `Bearer ${await currentUser.getIdToken()}`,
            },
          }
        );
        const data = await response.json();
        
        if (data.success && data.productId) {
          const pendingCourseId = localStorage.getItem('eductome_pending_course');
          let coursesToAdd: string[] = [];

          if (pendingCourseId) {
            if (pendingCourseId === 'cles-maths' || pendingCourseId.includes('cles')) {
               coursesToAdd = ['t1-limites', 't2-derivees', 't3-primitives', 't4-suites', 't5-log-expo', 't6-trigonometrie', 't7-probabilites', 't8-statistiques', 't9-geometrie-espace', 't10-complexes', 't11-equations-diff', 't12-revisions-bac'];
            } else {
               coursesToAdd = [pendingCourseId];
            }
          } else {
            coursesToAdd = [data.productId];
          }
          
          // Appeler la Cloud Function sécurisée pour chaque cours à débloquer.
          // Elle vérifie l'achat dans /achats avant d'écrire dans Firestore.
          const idToken = await currentUser.getIdToken();
          let allUnlocked = true;
          for (const cId of coursesToAdd) {
            try {
              const unlockRes = await fetch(
                'https://us-central1-eductome-web.cloudfunctions.net/unlockCourseSecure',
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${idToken}`,
                  },
                  body: JSON.stringify({ courseId: cId }),
                }
              );
              const unlockData = await unlockRes.json();
              if (!unlockData.success) {
                // La CF refuse (achat pas encore syncé) — on réessaiera au prochain cycle
                console.warn(`Vigile: déblocage refusé pour ${cId}:`, unlockData.message);
                allUnlocked = false;
              }
            } catch (unlockErr) {
              console.error(`Vigile: erreur unlock ${cId}:`, unlockErr);
              allUnlocked = false;
            }
          }
          // Si au moins un cours a échoué, on ne nettoie pas le localStorage
          // Le Vigile réessaiera au prochain cycle (dans 5 secondes)
          if (!allUnlocked) return;

          // SÉCURITÉ (CRIT-2) : tracking relais via Cloud Function sécurisée.
          // Remplace les écritures directes dans /relais qui étaient bloquées par les rules.
          const pendingRelaisCode = localStorage.getItem('eductome_pending_relais_code');
          if (pendingRelaisCode && currentUser) {
            try {
              const produit = pendingCourseId || data.productId;
              const relaisToken = await currentUser.getIdToken();
              await fetch(
                'https://us-central1-eductome-web.cloudfunctions.net/trackRelaisSale',
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${relaisToken}`,
                  },
                  body: JSON.stringify({ relaisCode: pendingRelaisCode, courseId: produit }),
                }
              );
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

    // SÉCURITÉ : on passe TOUJOURS par la Cloud Function sécurisée.
    // Elle vérifie qu'un achat réel existe dans /achats avant d'écrire dans Firestore.
    // NE JAMAIS écrire directement dans users/{uid}.unlockedCourses depuis le client.
    try {
      const idToken = await currentUser.getIdToken();
      const response = await fetch(
        'https://us-central1-eductome-web.cloudfunctions.net/unlockCourseSecure',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${idToken}`,
          },
          body: JSON.stringify({ courseId }),
        }
      );
      const data = await response.json();
      if (!data.success) {
        console.error('unlockCourse refusé :', data.message);
        // On ne lance pas d’exception ici — l'UI gère l'erreur via le flux appelant
      }
    } catch (err) {
      console.error('Erreur unlockCourse (Cloud Function):', err);
    }
  };

  // ─── Fonctions de développement (désactivées en production) ────────────────
  // SÉCURITÉ (MOY-2) : ces fonctions ne sont actives qu'en mode développement.
  // En production, elles sont des no-ops silencieux.

  const resetUser = async () => {
    if (!import.meta.env.DEV || !currentUser) return;
    const userRef = doc(db, 'users', currentUser.uid);
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
    if (!import.meta.env.DEV || !currentUser) return;
    const userRef = doc(db, 'users', currentUser.uid);
    await updateDoc(userRef, {
      xp: 5000,
      unlockedCourses: ['t1-limites', 't2-derivees', 't3-primitives', 't4-suites', 't5-log-expo', 't6-trigonometrie', 't7-probabilites', 't8-statistiques', 't9-geometrie-espace', 't10-complexes', 't11-equations-diff', 't12-revisions-bac'],
      unlockedBadges: ['badge_curieux', 'badge_studieux', 'badge_pilier_forum', 'badge_sans_faute']
    });
    addToast({ type: 'success', title: 'Mode Caïman Activé', message: '5000 XP et tous les contenus débloqués.' });
  };

  const addXpDev = async (amount: number) => {
    if (!import.meta.env.DEV) return;
    await gainXp(amount, 'Dev boost', 'dev_boost');
  };

  const devSimulerGratuit = () => {
    if (!import.meta.env.DEV) return;
    setXp(0);
    setStatut('gratuit');
    setCurrentStreak(0);
    setUnlockedCourses([]);
    setUnlockedBadges([]);
    setRewardedActions(new Set());
  };

  const devSimulerFamille = () => {
    if (!import.meta.env.DEV) return;
    setXp(5000);
    setStatut('famille');
    setCurrentStreak(7);
    setUnlockedCourses(['t1-limites', 't2-derivees', 't3-primitives', 't4-suites', 't5-log-expo', 't6-trigonometrie', 't7-probabilites', 't8-statistiques', 't9-geometrie-espace', 't10-complexes', 't11-equations-diff', 't12-revisions-bac']);
    setUnlockedBadges(['badge_curieux', 'badge_studieux', 'badge_pilier_forum', 'badge_sans_faute']);
  };

  const devSetStreak = (n: number) => { if (import.meta.env.DEV) setCurrentStreak(n); };

  const devUnlockCourseTest = () => {
    if (!import.meta.env.DEV) return;
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

  // Droits à vie : source de vérité = champ `entitlements` du doc Firestore (écrit par
  // les Cloud Functions). Tant que la migration n'a pas tourné, on dérive du legacy
  // (`unlockedCourses` + `achats`) pour rester rétro-compatible.
  const entitlements = useMemo<Entitlement[]>(
    () =>
      firestoreEntitlements.length > 0
        ? firestoreEntitlements
        : entitlementsFromLegacy(unlockedCourses, achats as any),
    [firestoreEntitlements, unlockedCourses, achats],
  );
  const isMember = useMemo(() => isMemberEntitlement(entitlements), [entitlements]);
  const hasAccess = useMemo(
    () => (resource: Resource) => canAccessEntitlement(entitlements, resource),
    [entitlements],
  );

  return (
    <UserContext.Provider value={{
      xp,
      level: getLevelFromXp(xp),
      unlockedBadges,
      unlockedCourses,
      achats,
      statut,
      entitlements,
      hasAccess,
      isMember,
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
