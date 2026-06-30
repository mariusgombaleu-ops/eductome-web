import { ReactNode } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export interface PageHeroStat {
  /** Valeur mise en avant (chiffre, niveau, badge court…). Donnée réelle. */
  value: ReactNode;
  /** Libellé court sous la valeur. */
  label: string;
  /**
   * Remplissage de la barre bleu clair en bas du bloc, de 0 à 100.
   * Si omis → barre pleine (accent décoratif statique).
   */
  progress?: number;
}

interface PageHeroProps {
  /** Overline — catégorie de la page (uppercase, discret). */
  eyebrow: string;
  /** Titre = nom de la page. */
  title: string;
  /** Une ligne qui dit ce qu'on fait sur la page. */
  description: string;
  /** 2 à 3 infos clés (données réelles) affichées en bandeau. */
  stats?: PageHeroStat[];
  /** Action optionnelle alignée à droite du titre (ex. bouton « Réviser »). */
  action?: ReactNode;
}

/**
 * PageHero — en-tête unifié de l'espace élève.
 *
 * Grammaire unique sur toutes les pages (hors Profil & Paramètres) :
 *   overline → titre → description → infos clés.
 * Rayon, padding, dégradé `heroBg`, décor et ombre identiques partout, pour
 * que le haut de chaque page se ressemble. Le contenu spécifique vient ensuite.
 */
export const PageHero = ({ eyebrow, title, description, stats, action }: PageHeroProps) => {
  const { palette } = useTheme();

  return (
    <section
      className="relative overflow-hidden rounded-[24px] p-5 sm:p-6"
      style={{
        background: palette.heroBg,
        color: '#fff',
        boxShadow: `0 7px 18px ${palette.heroShadow}, inset 0 1px 0 rgba(255,255,255,.28)`,
      }}
    >
      {/* Décor — cohérent avec la carte niveau de l'Accueil */}
      <div
        className="absolute -top-12 -right-9 w-40 h-40 rounded-full pointer-events-none"
        style={{ border: '1.5px solid rgba(255,255,255,.14)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.10) 1px, transparent 1px)', backgroundSize: '15px 15px' }}
      />

      <div className="relative">
        {/* Ligne titre + action : l'action ne comprime que le titre, pas la description */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] opacity-85 font-poppins">
              {eyebrow}
            </div>
            <h1
              className="mt-2 text-[24px] sm:text-[28px] font-extrabold leading-[1.08]"
              style={{ fontFamily: palette.display, textShadow: '0 2px 12px rgba(0,0,0,.18)' }}
            >
              {title}
            </h1>
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </div>
        {/* Description en pleine largeur (ne se fait pas rogner par l'action) */}
        <p className="mt-1.5 text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,.85)' }}>
          {description}
        </p>

        {stats && stats.length > 0 && (
          <div
            className="grid gap-2.5 mt-4 max-w-md"
            style={{ gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-[14px] px-3 py-2.5"
                style={{
                  background: 'rgba(255,255,255,.10)',
                  border: '1px solid rgba(255,255,255,.18)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,.22)',
                }}
              >
                <div className="text-[22px] font-extrabold leading-none truncate" style={{ fontFamily: palette.display, color: '#FFD66B' }}>
                  {s.value}
                </div>
                <div className="text-[10px] font-semibold opacity-80 mt-1 leading-tight">{s.label}</div>
                {/* Fine barre bleu clair — accent vivant (statique si pas de progress) */}
                <div className="mt-2 h-[3px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,.16)' }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${Math.max(0, Math.min(100, s.progress ?? 100))}%`,
                      background: '#9FD4FF',
                      boxShadow: '0 0 8px rgba(159,212,255,.55)',
                      transition: 'width 1s cubic-bezier(.2,.8,.2,1)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
