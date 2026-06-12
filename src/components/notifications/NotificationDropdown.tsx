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
    <div className="absolute right-0 top-full mt-2 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl shadow-2xl border border-slate-800 bg-[#090d16] z-50 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-[#D81B60]" />
          <span className="font-bold text-white text-sm font-poppins">Notifications</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={handleMarkAllRead}
            className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors px-2 py-1 rounded-lg hover:bg-slate-800"
          >
            <CheckCheck className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Tout marquer comme lu</span>
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="max-h-[420px] overflow-y-auto">
        {loading && (
          <div className="flex items-center justify-center py-10 text-slate-500 text-sm">
            Chargement...
          </div>
        )}

        {!loading && notifications.length === 0 && (
          <div className="flex flex-col items-center justify-center py-10 px-4 text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
              <Bell className="w-6 h-6 text-slate-500" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
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
              className={`w-full text-left px-4 py-3.5 flex gap-3 items-start transition-colors border-b border-slate-800/50 last:border-0 ${
                n.read
                  ? 'hover:bg-slate-800/40'
                  : 'bg-slate-800/60 hover:bg-slate-700/60'
              }`}
            >
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
                style={{ backgroundColor: `${color}22`, color }}
              >
                {getIcon(n.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className={`text-sm font-semibold leading-tight ${n.read ? 'text-slate-300' : 'text-white'}`}>
                    {n.title}
                  </p>
                  {!n.read && (
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#D81B60] mt-1.5" />
                  )}
                </div>
                <p className="text-xs text-slate-400 mt-0.5 line-clamp-2 leading-relaxed">
                  {n.message}
                </p>
                <p className="text-xs text-slate-600 mt-1.5">
                  {formatTime(n.createdAt)}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
