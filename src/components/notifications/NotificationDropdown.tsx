import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { db } from '../../config/firebase';
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  doc,
  updateDoc,
  writeBatch,
} from 'firebase/firestore';
import {
  BookOpen,
  ShieldAlert,
  AlertTriangle,
  MessageSquare,
  Award,
  Flame,
  Key,
  Bell,
  X,
  CheckCheck,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface AppNotification {
  id: string;
  type: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: number | { toMillis: () => number };
  deepLink: string;
}

interface Props {
  onClose: () => void;
}

function getIcon(type: string) {
  switch (type) {
    case 'COURSE_REMINDER':
      return <BookOpen className="w-4 h-4" />;
    case 'ASSESSMENT_ALERT':
      return <ShieldAlert className="w-4 h-4" />;
    case 'TARGET_WARNING':
      return <AlertTriangle className="w-4 h-4" />;
    case 'FORUM_REPLY':
      return <MessageSquare className="w-4 h-4" />;
    case 'FORUM_BEST_ANSWER':
      return <Award className="w-4 h-4" />;
    case 'STREAK_DANGER':
      return <Flame className="w-4 h-4" />;
    case 'PREMIUM_UNLOCK':
      return <Key className="w-4 h-4" />;
    default:
      return <Bell className="w-4 h-4" />;
  }
}

function getIconColor(type: string): string {
  switch (type) {
    case 'ASSESSMENT_ALERT':
    case 'TARGET_WARNING':
    case 'STREAK_DANGER':
      return '#D81B60';
    case 'FORUM_BEST_ANSWER':
    case 'PREMIUM_UNLOCK':
      return '#1B5E20';
    default:
      return '#1A3557';
  }
}

function toMs(createdAt: number | { toMillis: () => number }): number {
  return typeof createdAt === 'number' ? createdAt : createdAt.toMillis();
}

function formatTime(createdAt: number | { toMillis: () => number }): string {
  const diff = Date.now() - toMs(createdAt);
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "À l'instant";
  if (minutes < 60) return `il y a ${minutes} min`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `il y a ${hours}h`;
  return `il y a ${Math.floor(hours / 24)}j`;
}

export function NotificationDropdown({ onClose }: Props) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) return;
    const q = query(
      collection(db, 'users', currentUser.uid, 'notifications'),
      orderBy('createdAt', 'desc'),
      limit(10),
    );
    const unsub = onSnapshot(
      q,
      snap => {
        setNotifications(snap.docs.map(d => ({ id: d.id, ...d.data() } as AppNotification)));
        setLoading(false);
      },
      () => setLoading(false),
    );
    return unsub;
  }, [currentUser]);

  const handleMarkAllRead = async () => {
    if (!currentUser) return;
    const unread = notifications.filter(n => !n.read);
    if (unread.length === 0) return;
    const batch = writeBatch(db);
    unread.forEach(n => {
      batch.update(doc(db, 'users', currentUser.uid, 'notifications', n.id), { read: true });
    });
    await batch.commit().catch(() => {});
  };

  const handleClick = async (n: AppNotification) => {
    if (!n.read && currentUser) {
      updateDoc(
        doc(db, 'users', currentUser.uid, 'notifications', n.id),
        { read: true },
      ).catch(() => {});
    }
    onClose();
    if (n.deepLink) navigate(n.deepLink);
  };
  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]" 
        onClick={onClose} 
      />
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 bottom-0 w-[400px] max-w-[100vw] bg-white dark:bg-[#0D1117] border-l border-[#E1E4E8] dark:border-[#30363D] z-[101] shadow-2xl flex flex-col font-poppins"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E1E4E8] dark:border-[#30363D]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D81B60]/10 flex items-center justify-center">
              <Bell className="w-5 h-5 text-[#D81B60]" />
            </div>
            <span className="font-bold text-[#1A1A2E] dark:text-white text-lg">Notifications</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleMarkAllRead}
              className="text-xs text-[#6B7280] dark:text-[#8B949E] hover:text-[#1976D2] dark:hover:text-[#1976D2] flex items-center gap-1.5 transition-colors px-3 py-2 rounded-xl hover:bg-[#F8F9FA] dark:hover:bg-[#161B22]"
            >
              <CheckCheck className="w-4 h-4" />
              <span className="hidden sm:inline font-medium">Tout marquer comme lu</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#6B7280] dark:text-[#8B949E] hover:text-[#1A1A2E] dark:hover:text-white hover:bg-[#F8F9FA] dark:hover:bg-[#161B22] transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto">
          {loading && (
            <div className="flex items-center justify-center py-12 text-[#6B7280] dark:text-[#8B949E] text-sm">
              Chargement...
            </div>
          )}

          {!loading && notifications.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 px-6 text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#F8F9FA] dark:bg-[#161B22] flex items-center justify-center">
                <Bell className="w-8 h-8 text-[#9CA3AF] dark:text-[#6E7681]" />
              </div>
              <p className="text-[#6B7280] dark:text-[#8B949E] text-sm leading-relaxed max-w-[250px]">
                Aucune alerte pour le moment. Tu es à jour, Champion !
              </p>
            </div>
          )}

          {!loading && notifications.map(n => {
            const color = getIconColor(n.type);
            return (
              <button
                key={n.id}
                onClick={() => handleClick(n)}
                className={`w-full text-left px-6 py-4 flex gap-4 items-start transition-colors border-b border-[#E1E4E8]/50 dark:border-[#30363D]/50 last:border-0 ${
                  n.read
                    ? 'hover:bg-[#F8F9FA] dark:hover:bg-[#161B22]'
                    : 'bg-[#1976D2]/5 hover:bg-[#1976D2]/10 dark:bg-[#1A3557]/20 dark:hover:bg-[#1A3557]/40'
                }`}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: `${color}15`, color }}
                >
                  {getIcon(n.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <p className={`text-sm font-semibold leading-tight ${n.read ? 'text-[#6B7280] dark:text-[#8B949E]' : 'text-[#1A1A2E] dark:text-white'}`}>
                      {n.title}
                    </p>
                    {!n.read && (
                      <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-[#D81B60] mt-1" />
                    )}
                  </div>
                  <p className={`text-xs mt-1.5 line-clamp-2 leading-relaxed ${n.read ? 'text-[#9CA3AF] dark:text-[#6E7681]' : 'text-[#6B7280] dark:text-[#8B949E]'}`}>
                    {n.message}
                  </p>
                  <p className="text-xs text-[#9CA3AF] dark:text-[#6E7681] mt-2 font-medium">
                    {formatTime(n.createdAt)}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
