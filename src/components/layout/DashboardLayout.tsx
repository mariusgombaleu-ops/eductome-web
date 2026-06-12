import { useState, useRef, useEffect } from 'react';
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
  X
} from 'lucide-react';
import { useInstallPWA } from '../../hooks/useInstallPWA';
import { useHasUnreadNotifications } from '../../hooks/useHasUnreadNotifications';
import { useAuth } from '../../contexts/AuthContext';
import { useUser } from '../../contexts/UserContext';
import { NotificationDropdown } from '../notifications/NotificationDropdown';

export const DashboardLayout = () => {
  const { currentUser, loading, logout } = useAuth();
  const { pseudo, levelString, photoURL, isRelais } = useUser();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const outlet = useOutlet();
  const { theme, toggleTheme } = useTheme();
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
    { name: 'Forum d\'Entraide', href: '/forum', icon: MessageSquare },
    { name: 'Ressources Gratuites', href: '/dashboard/ressources', icon: FileText },
    { name: 'Boutique', href: '/dashboard/boutique', icon: ShoppingBag },
    { name: 'Le Blog', href: '/dashboard/blog', icon: Newspaper },
    ...(isRelais ? [{ name: 'Tableau Relais', href: '/dashboard/relais', icon: TrendingUp }] : []),
    { name: 'Devenir Relais', href: '/dashboard/devenir-relais', icon: Megaphone },
  ];

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#0D1117] text-gray-500">Chargement...</div>;
  }

  if (!currentUser) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return (
    <div className="min-h-screen flex font-poppins bg-[#F8F9FA] dark:bg-[#0D1117] transition-colors duration-300">
      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed lg:static inset-y-0 left-0 z-50 border-r transform transition-all duration-300 ease-in-out flex flex-col
          bg-white dark:bg-[#0D1117] border-[#E1E4E8] dark:border-[#30363D]
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${isCollapsed ? 'lg:w-[60px]' : 'lg:w-[260px]'} w-[260px] shrink-0
        `}
      >
        {/* Toggle Collapse Button (Desktop Only) */}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:flex absolute -right-3 top-20 border rounded-full p-1.5 z-50 shadow-sm transition-transform hover:scale-110 bg-white dark:bg-[#161B22] border-[#E1E4E8] dark:border-[#30363D] text-[#6B7280] dark:text-[#8B949E] hover:text-eductome-magenta dark:hover:text-eductome-magenta"
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>

        <div className={`h-16 flex items-center border-b border-[#E1E4E8] dark:border-[#30363D] transition-all duration-300 ${isCollapsed ? 'justify-center px-0' : 'px-6'}`}>
          <Link to="/" className="flex items-center space-x-2 overflow-hidden" onClick={() => setIsMobileOpen(false)}>
            {isCollapsed ? (
              <span className="font-playfair font-bold text-2xl text-[#1A3557] dark:text-white">E</span>
            ) : (
              <span className="font-playfair font-bold text-2xl text-[#1A3557] dark:text-white tracking-wide">EDUCTOME</span>
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
                  ? 'bg-[#EBF5FB] dark:bg-[#1A3557] text-[#1A3557] dark:text-white font-bold' 
                  : 'text-[#6B7280] dark:text-[#8B949E] hover:bg-[#F8F9FA] dark:hover:bg-[#161B22] hover:text-[#1A1A2E] dark:hover:text-white font-medium'
                }
                ${isCollapsed ? 'justify-center' : 'space-x-3'}
              `}
              title={isCollapsed ? item.name : undefined}
            >
              {({ isActive }) => (
                <>
                  {/* Active Indicator Line */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-eductome-magenta rounded-r-md transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></div>
                  
                  <item.icon className="w-5 h-5 shrink-0" />
                  
                  {!isCollapsed && (
                    <span className="truncate whitespace-nowrap">{item.name}</span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="p-3 border-t border-[#E1E4E8] dark:border-[#30363D] space-y-2">
          <NavLink
            to="/dashboard/settings"
            onClick={() => setIsMobileOpen(false)}
            className={({ isActive }) => `
              group flex items-center px-3 py-3 rounded-lg transition-all duration-300 w-full relative overflow-hidden
              ${isActive 
                ? 'bg-[#EBF5FB] dark:bg-[#1A3557] text-[#1A3557] dark:text-white font-bold' 
                : 'text-[#6B7280] dark:text-[#8B949E] hover:bg-[#F8F9FA] dark:hover:bg-[#161B22] hover:text-[#1A1A2E] dark:hover:text-white font-medium'
              }
              ${isCollapsed ? 'justify-center' : 'space-x-3'}
            `}
            title={isCollapsed ? 'Paramètres' : undefined}
          >
            {({ isActive }) => (
              <>
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-eductome-magenta rounded-r-md transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></div>
                <Settings className="w-5 h-5 shrink-0" />
                {!isCollapsed && <span className="truncate whitespace-nowrap">Paramètres</span>}
              </>
            )}
          </NavLink>

          <button 
            onClick={logout}
            className={`group flex items-center px-3 py-3 rounded-lg transition-all duration-300 w-full 
              text-[#6B7280] dark:text-[#8B949E] hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 font-medium
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
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="sticky top-0 z-30 border-b border-[#E1E4E8] dark:border-[#30363D] px-4 lg:px-6 py-3 flex items-center justify-between bg-white/80 dark:bg-[#0D1117]/80 backdrop-blur-md transition-colors duration-300">
          <div className="flex items-center gap-4 flex-1">
            <button 
              onClick={() => setIsMobileOpen(true)}
              className="p-2 rounded-lg lg:hidden text-[#6B7280] dark:text-[#8B949E] hover:bg-[#F8F9FA] dark:hover:bg-[#161B22]"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative hidden sm:flex items-center group w-full max-w-md">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-[#9CA3AF] dark:text-[#6E7681]" />
              </div>
              <input 
                type="text"
                placeholder="Rechercher un cours, un exercice..."
                className="py-2 pl-10 pr-4 outline-none rounded-xl border border-[#E1E4E8] dark:border-[#30363D] w-full bg-[#F8F9FA] dark:bg-[#161B22] text-[#1A1A2E] dark:text-white placeholder-[#9CA3AF] dark:placeholder-[#6E7681] focus:bg-white dark:focus:bg-[#0D1117] focus:border-eductome-magenta dark:focus:border-eductome-magenta focus:ring-1 focus:ring-eductome-magenta transition-all duration-300"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            {isInstallable && (
              <button 
                onClick={installPWA}
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-lg bg-[#D81B60] text-white font-bold text-xs sm:text-sm hover:bg-pink-600 transition-colors shadow-sm"
                title="Installer l'application sur cet appareil"
              >
                <Download className="w-4 h-4" /> <span className="hidden sm:inline">Installer l'App</span><span className="sm:hidden">Installer</span>
              </button>
            )}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-xl transition-colors relative group text-[#6B7280] dark:text-[#E6EDF3] hover:bg-[#F8F9FA] dark:hover:bg-[#161B22]"
              title="Changer de thème"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="relative" ref={bellRef}>
              <button
                onClick={() => setShowNotifications(prev => !prev)}
                className="p-2 rounded-xl transition-colors relative group text-[#6B7280] dark:text-[#E6EDF3] hover:bg-[#F8F9FA] dark:hover:bg-[#161B22]"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                {hasUnread && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
                )}
              </button>
              {showNotifications && (
                <NotificationDropdown onClose={() => setShowNotifications(false)} />
              )}
            </div>
            <Link to="/dashboard/profile" className="flex items-center space-x-2 p-1 pr-2 sm:pr-3 rounded-full sm:rounded-xl transition-colors hover:bg-[#F8F9FA] dark:hover:bg-[#161B22]">
              <div className="w-8 h-8 rounded-full bg-eductome-magenta flex items-center justify-center text-white font-bold text-sm shadow-sm uppercase overflow-hidden">
                {photoURL ? (
                  <img src={photoURL} alt="Profil" className="w-full h-full object-cover" />
                ) : (
                  pseudo ? pseudo.substring(0, 2) : 'GM'
                )}
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-bold text-[#1A1A2E] dark:text-[#E6EDF3] leading-tight truncate max-w-[120px]">{pseudo || 'Champion'}</p>
                <p className="text-xs text-[#6B7280] dark:text-[#8B949E]">{levelString || 'Terminale D'}</p>
              </div>
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
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
          <div className="relative w-full max-w-sm bg-white dark:bg-[#161B22] rounded-2xl shadow-2xl border border-[#E1E4E8] dark:border-[#30363D] p-6 animate-in slide-in-from-bottom-8 sm:slide-in-from-bottom-0 sm:zoom-in-95">
            <button 
              onClick={() => setShowIOSPrompt(false)} 
              className="absolute top-4 right-4 p-2 rounded-lg text-[#6B7280] dark:text-[#8B949E] hover:bg-[#F8F9FA] dark:hover:bg-[#30363D] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center space-y-4 pt-2">
              <div className="w-16 h-16 bg-[#D81B60]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <img src="/logo-pwa.png?v=2" alt="Eductome App" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A2E] dark:text-white font-playfair">Installer EDUCTOME</h3>
              <p className="text-sm text-[#6B7280] dark:text-[#8B949E]">Installez cette application sur votre écran d'accueil pour un accès rapide et facile, sans passer par le navigateur.</p>
              
              <div className="bg-[#F8F9FA] dark:bg-[#0D1117] rounded-xl p-4 text-left mt-6 border border-[#E1E4E8] dark:border-[#30363D]">
                <ol className="space-y-4 text-sm text-[#1A1A2E] dark:text-[#E6EDF3] font-medium">
                  <li className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1A3557] text-white text-xs shrink-0">1</span>
                    Appuyez sur <Share className="w-5 h-5 text-[#1976D2] mx-1" /> dans la barre Safari
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1A3557] text-white text-xs shrink-0">2</span>
                    Faites défiler et appuyez sur <br /> <span className="font-bold flex items-center gap-1 mt-1">"Sur l'écran d'accueil" <PlusSquare className="w-4 h-4" /></span>
                  </li>
                </ol>
              </div>
              <button onClick={() => setShowIOSPrompt(false)} className="w-full py-3 bg-[#1A3557] text-white rounded-xl font-bold mt-4 hover:bg-[#1A3557]/90 transition-colors">
                J'ai compris
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
