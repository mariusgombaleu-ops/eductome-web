import { useEffect, useRef } from 'react';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

/**
 * useThemeSync
 * ────────────
 * Pont Firestore ↔ ThemeContext pour le choix de TYPOGRAPHIE (`typeSet`).
 *
 * Le `ThemeContext` est monté au-dessus de l'`AuthProvider` (main.tsx) : il ne
 * peut donc pas lire `useAuth`. Ce hook vit DANS l'arbre authentifié (monté par
 * le DashboardLayout) et fait le pont : il pousse vers le contexte la préférence
 * stockée sur `users/{uid}.typeSet`, et réécrit ce champ quand l'élève change de
 * typo. La persistance locale (localStorage, instantanée/hors-ligne) reste gérée
 * par le ThemeContext ; Firestore ajoute le suivi cross-device, exactement comme
 * `readerSizeKey` (voir useReaderSettings).
 */
type TypeSet = 'net' | 'editorial' | 'moderne';
const VALID: TypeSet[] = ['net', 'editorial', 'moderne'];

export function useThemeSync() {
  const { currentUser } = useAuth();
  const { typeSet, setTypeSet } = useTheme();

  // `true` quand le dernier changement vient de Firestore : on ne le réécrit pas.
  const remoteEcho = useRef(false);
  // `false` tant qu'on n'a pas reçu le 1er snapshot : on n'écrit pas avant d'avoir
  // lu l'état distant, pour ne pas écraser la préférence d'un autre appareil.
  const hydrated = useRef(false);

  // Lecture Firestore : applique la préférence enregistrée (cross-device)
  useEffect(() => {
    if (!currentUser) {
      hydrated.current = false;
      return;
    }
    const unsub = onSnapshot(
      doc(db, 'users', currentUser.uid),
      snap => {
        hydrated.current = true;
        const remote = snap.data()?.typeSet as TypeSet | undefined;
        if (!remote || !VALID.includes(remote)) return;
        if (remote === typeSet) return;
        remoteEcho.current = true;
        setTypeSet(remote);
      },
      () => {
        /* permission-denied en dev : on garde le repli localStorage */
      },
    );
    return () => unsub();
  }, [currentUser, typeSet, setTypeSet]);

  // Écriture Firestore : uniquement sur changement utilisateur (pas l'écho de
  // lecture, pas avant la 1re hydratation).
  useEffect(() => {
    if (remoteEcho.current) { remoteEcho.current = false; return; }
    if (!hydrated.current || !currentUser) return;
    setDoc(
      doc(db, 'users', currentUser.uid),
      { typeSet },
      { merge: true },
    ).catch(() => {
      /* hors-ligne : localStorage déjà à jour */
    });
  }, [typeSet, currentUser]);
}
