import { useCallback, useEffect, useRef, useState } from 'react';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from '../contexts/AuthContext';

/**
 * useReaderSettings
 * ─────────────────
 * Gère les réglages de lecture premium du CourseReader :
 *   • la taille du texte (3 paliers : Compact / Confort / Grand)
 *   • le Mode Focus (lecture sans distraction : header + dock masqués)
 *
 * La taille est persistée à deux niveaux : localStorage (instantané, hors-ligne)
 * ET champ `readerSizeKey` sur `users/{uid}` en Firestore — la préférence suit
 * donc l'élève d'un appareil à l'autre. Le Mode Focus n'est volontairement PAS
 * persisté entre les sessions (on ne veut pas piéger l'élève en focus au prochain
 * lancement) — il l'est uniquement le temps de la session via l'état React.
 *
 * Branche `readerFontSize` sur la colonne de lecture (voir INTEGRATION.md).
 */

export type ReaderSizeKey = 'compact' | 'confort' | 'grand';

interface ReaderSizeLevel {
  key: ReaderSizeKey;
  label: string;
  /** px appliqués comme font-size racine de la colonne (approche em) */
  fontSize: number;
  /** facteur `zoom` appliqué à toute la colonne (approche zéro-refactor) */
  zoom: number;
}

// Paliers calés sur la maquette « Le Manuel » (Compact / Confort / Grand)
export const READER_SIZE_LEVELS: ReaderSizeLevel[] = [
  { key: 'compact', label: 'Compact', fontSize: 14.5, zoom: 0.92 },
  { key: 'confort', label: 'Confort', fontSize: 16, zoom: 1 },
  { key: 'grand', label: 'Grand', fontSize: 17.5, zoom: 1.1 },
];

const STORAGE_KEY_SIZE = 'eductome_reader_size';
const DEFAULT_INDEX = 1; // Confort

function readInitialIndex(): number {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_SIZE);
    if (saved) {
      const idx = READER_SIZE_LEVELS.findIndex(l => l.key === saved);
      if (idx >= 0) return idx;
    }
  } catch {
    /* localStorage indisponible (mode privé / SSR) */
  }
  return DEFAULT_INDEX;
}

export function useReaderSettings() {
  const { currentUser } = useAuth();
  const [sizeIndex, setSizeIndex] = useState<number>(readInitialIndex);
  const [focusMode, setFocusMode] = useState<boolean>(false);

  // `true` quand le dernier changement vient de Firestore : on ne le réécrit pas.
  const remoteEcho = useRef(false);
  // `false` tant qu'on n'a pas reçu le 1er snapshot : on n'écrit pas avant d'avoir
  // lu l'état distant, pour ne pas écraser la préférence d'un autre appareil.
  const hydrated = useRef(false);

  // Persistance locale (instantanée, hors-ligne)
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SIZE, READER_SIZE_LEVELS[sizeIndex].key);
    } catch {
      /* no-op */
    }
  }, [sizeIndex]);

  // Lecture Firestore : applique la préférence enregistrée (cross-device)
  useEffect(() => {
    if (!currentUser) return;
    const unsub = onSnapshot(
      doc(db, 'users', currentUser.uid),
      snap => {
        hydrated.current = true;
        const key = snap.data()?.readerSizeKey as ReaderSizeKey | undefined;
        if (!key) return;
        const idx = READER_SIZE_LEVELS.findIndex(l => l.key === key);
        if (idx < 0) return;
        setSizeIndex(prev => {
          if (prev === idx) return prev;
          remoteEcho.current = true;
          return idx;
        });
      },
      () => {
        /* permission-denied en dev : on garde le repli localStorage */
      },
    );
    return () => unsub();
  }, [currentUser]);

  // Écriture Firestore : uniquement sur changement utilisateur (pas l'écho de lecture,
  // pas avant la 1re hydratation).
  useEffect(() => {
    if (remoteEcho.current) { remoteEcho.current = false; return; }
    if (!hydrated.current || !currentUser) return;
    setDoc(
      doc(db, 'users', currentUser.uid),
      { readerSizeKey: READER_SIZE_LEVELS[sizeIndex].key },
      { merge: true },
    ).catch(() => {
      /* hors-ligne : localStorage déjà à jour */
    });
  }, [sizeIndex, currentUser]);

  // En Mode Focus on bloque le scroll « rebond » du body sur mobile
  useEffect(() => {
    if (!focusMode) return;
    const previous = document.body.style.overscrollBehavior;
    document.body.style.overscrollBehavior = 'none';
    return () => {
      document.body.style.overscrollBehavior = previous;
    };
  }, [focusMode]);

  // Sortie du focus à la touche Échap
  useEffect(() => {
    if (!focusMode) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFocusMode(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [focusMode]);

  const decSize = useCallback(() => setSizeIndex(i => Math.max(0, i - 1)), []);
  const incSize = useCallback(
    () => setSizeIndex(i => Math.min(READER_SIZE_LEVELS.length - 1, i + 1)),
    []
  );
  const enterFocus = useCallback(() => setFocusMode(true), []);
  const exitFocus = useCallback(() => setFocusMode(false), []);
  const toggleFocus = useCallback(() => setFocusMode(f => !f), []);

  const level = READER_SIZE_LEVELS[sizeIndex];

  return {
    // taille
    sizeIndex,
    sizeKey: level.key,
    sizeLabel: level.label,
    /** valeur CSS prête à poser sur la colonne : ex. "16px" (approche em) */
    readerFontSize: `${level.fontSize}px`,
    /** facteur `zoom` prêt à poser sur la colonne (approche recommandée) */
    readerZoom: level.zoom,
    canDecrease: sizeIndex > 0,
    canIncrease: sizeIndex < READER_SIZE_LEVELS.length - 1,
    decSize,
    incSize,
    // focus
    focusMode,
    enterFocus,
    exitFocus,
    toggleFocus,
  };
}
