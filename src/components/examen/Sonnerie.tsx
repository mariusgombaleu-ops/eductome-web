// ============================================================================
// Sonnerie — fin du temps (ou remise anticipée) : la copie se verrouille.
// Écran de transition vers la correction.
// ============================================================================

import { ArrowRight, BellOff } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { GrandFrereBubble } from './GrandFrereBubble';

interface SonnerieProps {
  early: boolean;          // true si l'élève a rendu avant la fin
  onContinue: () => void;
}

export function Sonnerie({ early, onContinue }: SonnerieProps) {
  const { palette } = useTheme();
  return (
    <div style={{ maxWidth: 460, margin: '0 auto', background: palette.bannerBg, borderRadius: 24, padding: '52px 32px 28px', textAlign: 'center', color: '#fff' }}>
      <div style={{ width: 108, height: 108, margin: '0 auto', borderRadius: 999, background: 'rgba(255,255,255,.07)', border: '1.5px solid rgba(255,255,255,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <BellOff size={48} color="#9FC0E4" />
      </div>
      <div style={{ marginTop: 24, font: '700 10px/1 Poppins, sans-serif', letterSpacing: '.2em', textTransform: 'uppercase', color: '#9FC0E4' }}>
        {early ? 'Copie rendue' : '⏰ Sonnerie · temps écoulé'}
      </div>
      <h2 style={{ margin: '12px 0 0', font: '800 30px/1.12 Poppins, sans-serif' }}>Ta copie est verrouillée.</h2>
      <p style={{ margin: '14px 0 0', font: "400 15px/1.6 'Newsreader', serif", color: '#C8D6E8', fontStyle: 'italic' }}>
        Tu ne peux plus rien modifier — exactement comme quand le surveillant ramasse les feuilles.
      </p>

      <div style={{ marginTop: 26, textAlign: 'left' }}>
        <GrandFrereBubble variant="panel">
          « C'est fini, champion. Maintenant la partie qui te fait grandir : on corrige ensemble, honnêtement. »
        </GrandFrereBubble>
      </div>

      <button onClick={onContinue}
        style={{ marginTop: 24, width: '100%', padding: 16, border: 'none', cursor: 'pointer', borderRadius: 16, background: '#fff', color: palette.accent2, font: '800 15px/1 Poppins, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9 }}>
        Découvrir le corrigé <ArrowRight size={17} />
      </button>
    </div>
  );
}
