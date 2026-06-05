import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  onAuthStateChanged,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  ConfirmationResult,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { auth } from '../config/firebase';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  setupRecaptcha: (containerId: string) => void;
  sendVerificationCode: (phoneNumber: string) => Promise<ConfirmationResult>;
  verifyCodeAndCreateAccount: (confirmationResult: ConfirmationResult, code: string, password: string) => Promise<void>;
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
const phoneToEmail = (phone: string) => {
  // Remove spaces and make sure it starts with +225
  let cleanPhone = phone.replace(/\s+/g, '');
  if (!cleanPhone.startsWith('+')) {
    if (cleanPhone.length === 10) {
      cleanPhone = '+225' + cleanPhone;
    }
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

  const setupRecaptcha = (containerId: string) => {
    if (!(window as any).recaptchaVerifier) {
      (window as any).recaptchaVerifier = new RecaptchaVerifier(auth, containerId, {
        size: 'invisible',
      });
    }
  };

  const sendVerificationCode = async (phoneNumber: string) => {
    if ((window as any).recaptchaVerifier) {
      try {
        (window as any).recaptchaVerifier.clear();
      } catch (e) {}
    }
    
    const appVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      size: 'invisible',
    });
    (window as any).recaptchaVerifier = appVerifier;

    let cleanPhone = phoneNumber.replace(/\s+/g, '');
    if (!cleanPhone.startsWith('+')) {
      cleanPhone = '+225' + cleanPhone;
    }
    const confirmationResult = await signInWithPhoneNumber(auth, cleanPhone, appVerifier);
    return confirmationResult;
  };

  const verifyCodeAndCreateAccount = async (confirmationResult: ConfirmationResult, code: string, password: string) => {
    // 1. Verify SMS code
    const result = await confirmationResult.confirm(code);
    const phoneUser = result.user;
    const phoneNumber = phoneUser.phoneNumber || '';

    // 2. We are now logged in with Phone Auth.
    // We want to create an Email/Password account instead so we don't need SMS next time.
    const email = phoneToEmail(phoneNumber);
    
    // Sign out of Phone Auth
    await signOut(auth);

    // Create the Email/Password account
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
    setupRecaptcha,
    sendVerificationCode,
    verifyCodeAndCreateAccount,
    loginWithPhoneAndPassword,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
