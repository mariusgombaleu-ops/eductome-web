import { useState, useRef, useEffect } from 'react';
import { BottomTabBar } from './BottomTabBar';
import { NavLink, useOutlet, Link, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AnimatedPage } from './AnimatedPage';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  LayoutDashboard,
  BookOpen,
  MessageSquare,
  User,
  LogOut,
  Menu,
  Bell,
  Search,
  ShoppingBag,
  FileText,
  ChevronLeft,
  ChevronRight,
  Moon,
  Sun,
  Settings,
  Download,
  Share,
  Newspaper,
  Megaphone,
  PlusSquare,
  Calculator,
  TrendingUp,
  X,
  Flame,
  RotateCcw
} from 'lucide-react';
import { useInstallPWA } from '../../hooks/useInstallPWA';
import { useThemeSync } from '../../hooks/useThemeSync';
import { useHasUnreadNotifications } from '../../hooks/useHasUnreadNotifications';
import { useAuth } from '../../contexts/AuthContext';
import { useUser } from '../../contexts/UserContext';
import { NotificationDropdown } from '../notifications/NotificationDropdown';

export const DashboardLayout = () => {
  const { currentUser, loading, logout } = useAuth();
  const { pseudo, levelString, photoURL, isRelais, currentStreak } = useUser();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const outlet = useOutlet();
  const { theme, toggleTheme } = useTheme();
  useThemeSync(); // pont Firestore ↔ ThemeContext pour la typo (cross-device)
  const { isInstallable, installPWA, showIOSPrompt, setShowIOSPrompt } = useInstallPWA();
  const hasUnread = useHasUnreadNotifications();
  const [showNotifications, setShowNotifications] = useState(false);
  const bellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showNotifications) return;
    const handler = (e: MouseEvent) => {
      if (bellRef.current && !bellRef.current.contains(e.target as Node)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [showNotifications]);

  const navigation = [
    { name: 'Vue d\'ensemble', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Mon Profil', href: '/dashboard/profile', icon: User },
    { name: 'Mes Cours', href: '/dashboard/courses', icon: BookOpen },
    { name: 'Mes Notes & Objectifs', href: '/dashboard/objectifs', icon: Calculator },
    { name: 'Révision', href: '/dashboard/revisions', icon: RotateCcw },
    { name: 'Forum d\'Entraide', href: '/forum', icon: MessageSquare },
    { name: 'Ressources Gratuites', href: '/dashboard/ressources', icon: FileText },
    { name: 'Boutique', href: '/dashboard/boutique', icon: ShoppingBag },
    { name: 'Le Blog', href: '/dashboard/blog', icon: Newspaper },
    ...(isRelais ? [{ name: 'Tableau Relais', href: '/dashboard/relais', icon: TrendingUp }] : []),
    { name: 'Devenir Relais', href: '/dashboard/devenir-relais', icon: Megaphone },
  ];

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-[var(--ed-bg)] text-[var(--ed-ink3)]">Chargement...</div>;
  }

  // Bypass de prévisualisation : UNIQUEMENT en dev (import.meta.env.DEV) et si
  // la clé localStorage est posée manuellement. Impossible en build de prod.
  const devPreview = import.meta.env.DEV && localStorage.getItem('__dev_preview_bypass') === '1';
  if (!currentUser && !devPreview) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  const isCourseReader = location.pathname.includes('/dashboard/course/');

  return (
    <div className="min-h-screen flex font-poppins bg-[var(--ed-bg)] transition-colors duration-300">
      {/* Mobile Bottom Tab Bar */}
      <BottomTabBar />
      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed lg:sticky lg:top-0 lg:h-screen inset-y-0 left-0 z-50 border-r transform transition-all duration-300 ease-in-out flex flex-col
          bg-[var(--ed-bg2)] border-[var(--ed-line)]
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${isCollapsed ? 'lg:w-[60px]' : 'lg:w-[260px]'} w-[260px] shrink-0
        `}
      >
        {/* Toggle Collapse Button (Desktop Only) */}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:flex absolute -right-3 top-20 border rounded-full p-1.5 z-50 shadow-sm transition-transform hover:scale-110 bg-[var(--ed-bg2)] border-[var(--ed-line)] text-[var(--ed-ink3)] hover:text-[var(--ed-accent)]"
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>

        <div className={`h-16 flex items-center border-b border-[var(--ed-line)] transition-all duration-300 ${isCollapsed ? 'justify-center px-0' : 'px-6'}`}>
          <Link to="/" className="flex items-center space-x-2 overflow-hidden" onClick={() => setIsMobileOpen(false)}>
            {isCollapsed ? (
              <span className="font-playfair font-bold text-2xl text-[var(--ed-ink)]">E</span>
            ) : (
              <span className="font-playfair font-bold text-2xl text-[var(--ed-ink)] tracking-wide">EDUCTOME</span>
            )}
          </Link>
        </div>

        <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto overflow-x-hidden">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              end={item.href === '/dashboard'}
              onClick={() => setIsMobileOpen(false)}
              className={({ isActive }) => `
                group flex items-center px-3 py-3 rounded-lg transition-all duration-300 relative overflow-hidden
                ${isActive
                  ? 'bg-[var(--ed-accentSoft)] text-[var(--ed-accent)] font-bold'
                  : 'text-[var(--ed-ink2)] hover:bg-[var(--ed-bg3)] hover:text-[var(--ed-ink)] font-medium'
                }
                ${isCollapsed ? 'justify-center' : 'space-x-3'}
              `}
              title={isCollapsed ? item.name : undefined}
            >
              {({ isActive }) => (
                <>
                  {/* Active Indicator Line */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-[var(--ed-accent)] rounded-r-md transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></div>
                  
                  <item.icon className="w-5 h-5 shrink-0" />
                  
                  {!isCollapsed && (
                    <span className="truncate whitespace-nowrap">{item.name}</span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="p-3 border-t border-[var(--ed-line)] space-y-2">
          <NavLink
            to="/dashboard/settings"
            onClick={() => setIsMobileOpen(false)}
            className={({ isActive }) => `
              group flex items-center px-3 py-3 rounded-lg transition-all duration-300 w-full relative overflow-hidden
              ${isActive
                ? 'bg-[var(--ed-accentSoft)] text-[var(--ed-accent)] font-bold'
                : 'text-[var(--ed-ink2)] hover:bg-[var(--ed-bg3)] hover:text-[var(--ed-ink)] font-medium'
              }
              ${isCollapsed ? 'justify-center' : 'space-x-3'}
            `}
            title={isCollapsed ? 'Paramètres' : undefined}
          >
            {({ isActive }) => (
              <>
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-[var(--ed-accent)] rounded-r-md transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></div>
                <Settings className="w-5 h-5 shrink-0" />
                {!isCollapsed && <span className="truncate whitespace-nowrap">Paramètres</span>}
              </>
            )}
          </NavLink>

          <button 
            onClick={logout}
            className={`group flex items-center px-3 py-3 rounded-lg transition-all duration-300 w-full
              text-[var(--ed-ink2)] hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 font-medium
              ${isCollapsed ? 'justify-center' : 'space-x-3'}
            `}
            title={isCollapsed ? 'Déconnexion' : undefined}
          >
            <LogOut className="w-5 h-5 shrink-0" />
            {!isCollapsed && <span className="truncate whitespace-nowrap">Déconnexion</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 relative" id="main-scroll-container">
        {/* Topbar */}
        <header className={`${isCourseReader ? 'relative' : 'sticky top-0'} z-30 border-b border-[var(--ed-line)] px-4 lg:px-6 py-3 flex items-center justify-between bg-[var(--ed-glass)] backdrop-blur-md transition-colors duration-300`}>
          <div className="flex items-center gap-4 flex-1">
            <button 
              onClick={() => setIsMobileOpen(true)}
              className="p-2 rounded-lg lg:hidden text-[var(--ed-ink2)] hover:bg-[var(--ed-bg3)]"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative hidden sm:flex items-center group w-full max-w-md">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-[var(--ed-ink3)]" />
              </div>
              <input
                type="text"
                placeholder="Rechercher un cours, un exercice..."
                className="py-2 pl-10 pr-4 outline-none rounded-xl border border-[var(--ed-line)] w-full bg-[var(--ed-bg3)] text-[var(--ed-ink)] placeholder-[var(--ed-ink3)] focus:border-[var(--ed-accent)] focus:ring-1 focus:ring-[var(--ed-accent)] transition-all duration-300"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            {isInstallable && (
              <button 
                onClick={installPWA}
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-lg bg-[var(--ed-accent)] text-[var(--ed-onAccent)] font-bold text-xs sm:text-sm hover:opacity-90 transition-opacity shadow-sm"
                title="Installer l'application sur cet appareil"
              >
                <Download className="w-4 h-4" /> <span className="hidden sm:inline">Installer l'App</span><span className="sm:hidden">Installer</span>
              </button>
            )}
            {/* Streak Flame */}
            <div 
              className={`flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg border transition-all ${
                currentStreak >= 3
                  ? 'bg-[var(--ed-flameBg)] border-[var(--ed-flameBg)]'
                  : 'bg-[var(--ed-bg3)] border-[var(--ed-line)]'
              }`}
              title={`${currentStreak} jour(s) de suite !`}
            >
              <Flame className={`w-4 h-4 sm:w-5 sm:h-5 ${
                currentStreak >= 3
                  ? 'text-[var(--ed-flame)] animate-pulse'
                  : 'text-[var(--ed-ink3)]'
              }`} />
              <span className={`font-bold text-xs sm:text-sm ${
                currentStreak >= 3
                  ? 'text-[var(--ed-flame)]'
                  : 'text-[var(--ed-ink2)]'
              }`}>
                {currentStreak}
              </span>
            </div>
            {/* Theme toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-xl transition-colors relative group text-[var(--ed-ink2)] hover:bg-[var(--ed-bg3)]"
              title={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="relative" ref={bellRef}>
              <button
                onClick={() => setShowNotifications(prev => !prev)}
                className="p-2 rounded-xl transition-colors relative group text-[var(--ed-ink2)] hover:bg-[var(--ed-bg3)]"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                {hasUnread && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
                )}
              </button>
              <AnimatePresence>
                {showNotifications && (
                  <NotificationDropdown onClose={() => setShowNotifications(false)} />
                )}
              </AnimatePresence>
            </div>
            <Link to="/dashboard/profile" className="flex items-center space-x-2 p-1 pr-2 sm:pr-3 rounded-full sm:rounded-xl transition-colors hover:bg-[var(--ed-bg3)]">
              <div className="w-8 h-8 rounded-full bg-[var(--ed-accent)] flex items-center justify-center text-[var(--ed-onAccent)] font-bold text-sm shadow-sm uppercase overflow-hidden">
                {photoURL ? (
                  <img src={photoURL} alt="Profil" className="w-full h-full object-cover" />
                ) : (
                  pseudo ? pseudo.substring(0, 2) : 'GM'
                )}
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-bold text-[var(--ed-ink)] leading-tight truncate max-w-[120px]">{pseudo || 'Champion'}</p>
                <p className="text-xs text-[var(--ed-ink2)]">{levelString || 'Terminale D'}</p>
              </div>
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 pb-20 lg:pb-0">
          <AnimatePresence mode="wait">
            <AnimatedPage key={location.pathname}>
              {outlet}
            </AnimatedPage>
          </AnimatePresence>
        </main>
      </div>

      {/* iOS Install Prompt Modal */}
      {showIOSPrompt && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 pb-10">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowIOSPrompt(false)} />
          <div className="relative w-full max-w-sm bg-[var(--ed-bg2)] rounded-2xl shadow-2xl border border-[var(--ed-line)] p-6 animate-in slide-in-from-bottom-8 sm:slide-in-from-bottom-0 sm:zoom-in-95">
            <button
              onClick={() => setShowIOSPrompt(false)}
              className="absolute top-4 right-4 p-2 rounded-lg text-[var(--ed-ink2)] hover:bg-[var(--ed-bg3)] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center space-y-4 pt-2">
              <div className="w-16 h-16 bg-[var(--ed-accentSoft)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <img src="/logo-pwa.png?v=2" alt="Eductome App" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-[var(--ed-ink)] font-playfair">Installer EDUCTOME</h3>
              <p className="text-sm text-[var(--ed-ink2)]">Installez cette application sur votre écran d'accueil pour un accès rapide et facile, sans passer par le navigateur.</p>

              <div className="bg-[var(--ed-bg3)] rounded-xl p-4 text-left mt-6 border border-[var(--ed-line)]">
                <ol className="space-y-4 text-sm text-[var(--ed-ink)] font-medium">
                  <li className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--ed-accent2)] text-white text-xs shrink-0">1</span>
                    Appuyez sur <Share className="w-5 h-5 text-[var(--ed-accent)] mx-1" /> dans la barre Safari
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--ed-accent2)] text-white text-xs shrink-0">2</span>
                    Faites défiler et appuyez sur <br /> <span className="font-bold flex items-center gap-1 mt-1">"Sur l'écran d'accueil" <PlusSquare className="w-4 h-4" /></span>
                  </li>
                </ol>
              </div>
              <button onClick={() => setShowIOSPrompt(false)} className="w-full py-3 bg-[var(--ed-accent2)] text-white rounded-xl font-bold mt-4 hover:opacity-90 transition-opacity">
                J'ai compris
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
