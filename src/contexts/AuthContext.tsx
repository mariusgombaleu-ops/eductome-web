import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { auth } from '../config/firebase';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  registerWithPhoneAndPassword: (phone: string, password: string) => Promise<void>;
  loginWithPhoneAndPassword: (phone: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Helper to convert phone to email
// Format: +2250700000000@eductome.app
const phoneToEmail = (phone: string): string => {
  let cleanPhone = phone.replace(/\s+/g, '');
  if (!cleanPhone.startsWith('+')) {
    cleanPhone = '+225' + cleanPhone;
  }
  return `${cleanPhone}@eductome.app`;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Inscription directe — crée un compte Email/Password avec conversion phone→email
  // NOTE : Le SMS OTP sera ajouté plus tard via Cloud Function + API SMS tierce
  const registerWithPhoneAndPassword = async (phone: string, password: string) => {
    const email = phoneToEmail(phone);
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithPhoneAndPassword = async (phone: string, password: string) => {
    const email = phoneToEmail(phone);
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
  };

  const value = {
    currentUser,
    loading,
    registerWithPhoneAndPassword,
    loginWithPhoneAndPassword,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
