import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import {
  Hero,
  Card,
  Panel,
  Banner,
  Callout,
  Collapsible,
  BottomSheet,
  Toggle,
  Badge,
} from '../components/ui/system';
import { Crown, Sparkles, BookOpen } from 'lucide-react';

/**
 * Galerie du système (Couche 2) — page de démonstration interne du vocabulaire
 * de composants unifié. Les 3 sélecteurs en haut pilotent la cascade : tout en
 * dessous s'adapte. Route publique `/_systeme` (pas dans le DashboardLayout) pour
 * pouvoir prévisualiser sans authentification.
 */
export function SystemGallery() {
  const { theme, toggleTheme, visualStyle, setVisualStyle, typeSet, setTypeSet, palette } = useTheme();
  const [sheetOpen, setSheetOpen] = useState(false);
  const [toggleOn, setToggleOn] = useState(true);

  const seg = (active: boolean) =>
    ({
      padding: '6px 14px',
      borderRadius: 999,
      fontWeight: 700,
      fontSize: 13,
      cursor: 'pointer',
      background: active ? palette.accent : 'transparent',
      color: active ? palette.onAccent : palette.ink2,
    }) as React.CSSProperties;

  return (
    <div style={{ background: palette.bg, color: palette.ink, minHeight: '100vh', fontFamily: palette.body }}>
      {/* Barre de sélecteurs (cascade) */}
      <div
        className="sticky top-0 z-20 flex flex-wrap items-center gap-3 px-5 py-3 border-b backdrop-blur-md"
        style={{ borderColor: palette.line, background: palette.glass }}
      >
        <span className="font-bold text-sm" style={{ fontFamily: palette.display }}>Système EDUCTOME</span>
        <div className="inline-flex rounded-full p-1 border" style={{ borderColor: palette.line }}>
          <button style={seg(visualStyle === 'focus')} onClick={() => setVisualStyle('focus')}>Focus</button>
          <button style={seg(visualStyle === 'studio')} onClick={() => setVisualStyle('studio')}>Studio</button>
        </div>
        <div className="inline-flex rounded-full p-1 border" style={{ borderColor: palette.line }}>
          <button style={seg(theme === 'light')} onClick={() => theme !== 'light' && toggleTheme()}>Clair</button>
          <button style={seg(theme === 'dark')} onClick={() => theme !== 'dark' && toggleTheme()}>Sombre</button>
        </div>
        <div className="inline-flex rounded-full p-1 border" style={{ borderColor: palette.line }}>
          <button style={seg(typeSet === 'net')} onClick={() => setTypeSet('net')}>Net</button>
          <button style={seg(typeSet === 'editorial')} onClick={() => setTypeSet('editorial')}>Éditorial</button>
          <button style={seg(typeSet === 'moderne')} onClick={() => setTypeSet('moderne')}>Moderne</button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-5 space-y-6">
        <Hero
          overline="Terminale D"
          title="Salut champion 👋"
          subtitle="Voici le vocabulaire unifié de l'espace élève."
          right={<Badge tone="gold" icon={<Crown className="w-3.5 h-3.5" />}>Premium</Badge>}
        />

        <div className="grid grid-cols-2 gap-4">
          <Card>
            <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: palette.ink3 }}>Leçons</div>
            <div className="text-2xl font-bold" style={{ fontFamily: palette.display }}>128</div>
          </Card>
          <Card sunken>
            <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: palette.ink3 }}>Série</div>
            <div className="text-2xl font-bold" style={{ fontFamily: palette.display }}>12 j 🔥</div>
          </Card>
        </div>

        <Panel>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: palette.display }}>Panneau (rayon 28)</h2>
          <p className="text-sm" style={{ color: palette.ink2 }}>
            Le corps de texte suit l'axe typo via <code>var(--font-body)</code> ; les titres via{' '}
            <code>var(--font-display)</code>.
          </p>
        </Panel>

        <div className="space-y-3">
          <Callout tone="tip" title="Astuce du Grand Frère">Relis tes erreurs avant de refaire l'exercice.</Callout>
          <Callout tone="warn">N'oublie pas le domaine de définition.</Callout>
          <Callout tone="ana">Cette méthode marche 9 fois sur 10 au BAC.</Callout>
          <Callout tone="flame">La formule à connaître par cœur.</Callout>
          <Callout tone="piege" title="Piège classique">Ne confonds pas dérivée et primitive !</Callout>
        </div>

        <Collapsible title="Les Clés Maths — Tome 2" right={<Badge tone="soft">8 chap.</Badge>} icon={<BookOpen className="w-4 h-4" style={{ color: palette.accent }} />} defaultOpen>
          <p className="text-sm">Contenu déplié : chapitres, progression, etc.</p>
        </Collapsible>
        <Collapsible title="Physique-Chimie" icon={<Sparkles className="w-4 h-4" style={{ color: palette.accent }} />}>
          <p className="text-sm">Section repliée par défaut.</p>
        </Collapsible>

        <Banner
          badge="Premium"
          title="Débloque toute la bibliothèque"
          subtitle="Accès VIP à tous les tomes et au simulateur."
          action={
            <button
              className="px-4 py-2 rounded-[16px] font-bold text-sm"
              style={{ background: palette.accent, color: palette.onAccent }}
              onClick={() => setSheetOpen(true)}
            >
              Voir l'offre
            </button>
          }
        />

        <Card>
          <div className="flex items-center justify-between">
            <span className="font-bold text-sm">Interrupteur (Toggle)</span>
            <Toggle checked={toggleOn} onChange={setToggleOn} aria-label="Démo toggle" />
          </div>
        </Card>

        <div className="flex flex-wrap gap-2 pb-10">
          <Badge tone="accent">Accent</Badge>
          <Badge tone="soft">Soft</Badge>
          <Badge tone="neutral">Neutre</Badge>
          <Badge tone="gold">Or</Badge>
          <Badge tone="success">Réussi</Badge>
          <Badge tone="danger">Erreur</Badge>
        </div>
      </div>

      <BottomSheet open={sheetOpen} onClose={() => setSheetOpen(false)} title="Choisis ton offre">
        <div className="space-y-3">
          <Card flat><div className="font-bold">Chapitre — 300 F</div><div className="text-sm" style={{ color: palette.ink2 }}>Un chapitre à l'unité.</div></Card>
          <Card flat><div className="font-bold">Tome — 1 500 F</div><div className="text-sm" style={{ color: palette.ink2 }}>Déduction des chapitres acquis.</div></Card>
          <Card flat><div className="font-bold">VIP — dès 8 000 F</div><div className="text-sm" style={{ color: palette.ink2 }}>Toute la bibliothèque.</div></Card>
        </div>
      </BottomSheet>
    </div>
  );
}
