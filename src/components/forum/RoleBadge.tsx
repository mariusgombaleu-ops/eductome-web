import React from 'react';
import { ShieldCheck, UserCheck } from 'lucide-react';

interface RoleBadgeProps {
  role?: 'student' | 'grand_frere' | 'admin' | 'equipe' | string;
}

export const RoleBadge: React.FC<RoleBadgeProps> = ({ role }) => {
  if (!role || role === 'student') return null;

  if (role === 'grand_frere') {
    return (
      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full ml-2 shadow-sm" title="Fondateur Eductome">
        <ShieldCheck size={12} />
        Le Grand Frère
      </span>
    );
  }

  if (role === 'admin') {
    return (
      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-[#1976D2] to-[#1A3557] text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full ml-2 shadow-sm" title="Administrateur">
        <ShieldCheck size={12} />
        Admin
      </span>
    );
  }

  if (role === 'equipe') {
    return (
      <span className="inline-flex items-center gap-1 bg-[#D81B60] text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full ml-2" title="Équipe Eductome">
        <UserCheck size={12} />
        Équipe Eductome
      </span>
    );
  }

  return null;
};
