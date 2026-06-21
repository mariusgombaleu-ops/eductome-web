import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Target, ShoppingBag, User } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const TABS = [
  { key: 'accueil', label: 'Accueil', href: '/dashboard', icon: LayoutDashboard, end: true },
  { key: 'cours', label: 'Cours', href: '/dashboard/courses', icon: BookOpen, end: false },
  { key: 'objectifs', label: 'Objectifs', href: '/dashboard/objectifs', icon: Target, end: false },
  { key: 'boutique', label: 'Boutique', href: '/dashboard/boutique', icon: ShoppingBag, end: false },
  { key: 'profil', label: 'Profil', href: '/dashboard/profile', icon: User, end: false },
];

export const BottomTabBar = () => {
  const { palette } = useTheme();
  const location = useLocation();

  // Don't show on CourseReader (has its own bottom dock)
  if (location.pathname.includes('/dashboard/course/')) return null;

  return (
    <nav
      className="fixed left-0 right-0 bottom-0 z-40 lg:hidden flex items-center"
      style={{
        padding: '8px 8px calc(env(safe-area-inset-bottom, 0px) + 8px)',
        background: palette.glass,
        backdropFilter: 'blur(18px) saturate(160%)',
        WebkitBackdropFilter: 'blur(18px) saturate(160%)',
        borderTop: `1px solid ${palette.glassLine}`,
      }}
    >
      {TABS.map(tab => {
        const isActive = tab.end
          ? location.pathname === tab.href
          : location.pathname.startsWith(tab.href);

        return (
          <NavLink
            key={tab.key}
            to={tab.href}
            end={tab.end}
            className="flex-1 flex flex-col items-center gap-1 py-2 border-none bg-transparent no-underline transition-colors"
            style={{ color: isActive ? palette.accent : palette.ink3 }}
          >
            <tab.icon
              className="w-5 h-5 transition-all"
              style={{
                filter: isActive ? 'none' : 'grayscale(1) opacity(.65)',
                transform: isActive ? 'translateY(-1px)' : 'none',
              }}
            />
            <span className="text-[9.5px] font-bold">{tab.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};
