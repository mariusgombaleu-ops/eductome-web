import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Target, ShoppingBag, User } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';

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
      className="fixed left-0 right-0 bottom-0 z-40 lg:hidden flex items-center justify-around"
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
            className="flex-1 flex flex-col items-center gap-1 py-1 relative no-underline transition-colors"
            style={{ color: isActive ? palette.accent : palette.ink3 }}
          >
            {/* Active Bubble Indicator */}
            {isActive && (
              <motion.div
                layoutId="bottomTabBubble"
                className="absolute top-0.5 w-12 h-7 rounded-full z-0"
                style={{ backgroundColor: `${palette.accent}20` }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              />
            )}

            {/* Icon with Bounce Effect */}
            <motion.div
              className="z-10 flex items-center justify-center mt-1"
              animate={isActive ? { scale: [1, 0.8, 1.15, 1] } : { scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <tab.icon
                className="w-[22px] h-[22px]"
                style={{
                  filter: isActive ? 'none' : 'grayscale(1) opacity(.65)',
                }}
              />
            </motion.div>

            {/* Label */}
            <span className="text-[10px] font-bold z-10 mt-0.5">{tab.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};

