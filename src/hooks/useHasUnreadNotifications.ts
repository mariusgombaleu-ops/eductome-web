import { useState, useEffect } from 'react';
import { collection, query, where, limit, onSnapshot } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../config/firebase';

export function useHasUnreadNotifications(): boolean {
  const { currentUser } = useAuth();
  const [hasUnread, setHasUnread] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      setHasUnread(false);
      return;
    }
    const q = query(
      collection(db, 'users', currentUser.uid, 'notifications'),
      where('read', '==', false),
      limit(1),
    );
    return onSnapshot(q, snap => setHasUnread(!snap.empty), () => setHasUnread(false));
  }, [currentUser]);

  return hasUnread;
}
