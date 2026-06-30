// ============================================================================
// GrandFrereBubble — la prise de parole de Marius (ton « grand frère »).
// Réutilisée à chaque étape : briefing, urgence, sonnerie, bilan.
// ============================================================================

import { ReactNode } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

/**
 * Avatar du grand frère. Place le fichier dans /public et adapte ce chemin,
 * ou importe ton asset existant et passe-le en prop `avatar`.
 */
export const GF_AVATAR = '/images/profil.jpeg';

interface GrandFrereBubbleProps {
  children: ReactNode;
  /** 'card' (encadré magenta sur fond clair) ou 'panel' (sur fond sombre, ex. sonnerie). */
  variant?: 'card' | 'panel';
  title?: string;
  avatar?: string;
  /** Slot d'action sous le message (bouton de redirection, etc.). */
  action?: ReactNode;
}

export function GrandFrereBubble({
  children, variant = 'card', title = 'Marius · ton grand frère', avatar = GF_AVATAR, action,
}: GrandFrereBubbleProps) {
  const { palette } = useTheme();

  const isPanel = variant === 'panel';
  const wrap: React.CSSProperties = isPanel
    ? { background: 'rgba(216,27,96,.16)', border: '1px solid rgba(244,182,207,.3)', borderRadius: 18, padding: 14 }
    : { background: palette.warnBg, borderLeft: `3px solid ${palette.accent === '#1976D2' ? '#D81B60' : palette.accent}`, borderRadius: '0 16px 16px 0', padding: 14 };

  const nameColor = isPanel ? '#F4B6CF' : palette.ink;
  const msgColor = isPanel ? '#EAD3DD' : palette.warnInk;

  return (
    <div style={wrap}>
      <div style={{ display: 'flex', gap: 11 }}>
        <img src={avatar} alt="Marius" loading="lazy"
          style={{ flex: 'none', width: 42, height: 42, borderRadius: 13, objectFit: 'cover', objectPosition: '50% 16%' }} />
        <div style={{ flex: 1 }}>
          <div style={{ font: '700 12px/1.2 Poppins, sans-serif', color: nameColor }}>{title}</div>
          <div style={{ font: "400 13px/1.55 'Newsreader', serif", color: msgColor, fontStyle: 'italic', marginTop: 4 }}>
            {children}
          </div>
        </div>
      </div>
      {action && <div style={{ marginTop: 13 }}>{action}</div>}
    </div>
  );
}
