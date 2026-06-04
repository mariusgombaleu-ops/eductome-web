import { useState, useEffect } from 'react';

export const useInstallPWA = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSPrompt, setShowIOSPrompt] = useState(false);

  useEffect(() => {
    // Détection iOS
    const isIosDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
    const isStandalone = ('standalone' in navigator) && ((navigator as any).standalone === true);
    
    if (isIosDevice && !isStandalone) {
      setIsIOS(true);
      setIsInstallable(true); // On force l'affichage du bouton pour iOS
    }
    const handleBeforeInstallPrompt = (e: any) => {
      // Empêcher l'affichage automatique de la bannière sur certains navigateurs
      e.preventDefault();
      // Sauvegarder l'évènement pour le déclencher via le bouton
      setDeferredPrompt(e);
      // Mettre à jour l'état pour afficher le bouton d'installation
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Si l'application est déjà installée, on peut écouter l'évènement appinstalled
    window.addEventListener('appinstalled', () => {
      setIsInstallable(false);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const installPWA = async () => {
    if (isIOS) {
      setShowIOSPrompt(true);
      return;
    }

    if (!deferredPrompt) return;
    
    // Afficher l'invite d'installation
    deferredPrompt.prompt();
    
    // Attendre la réponse de l'utilisateur
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setIsInstallable(false);
    }
    
    // L'évènement ne peut être utilisé qu'une seule fois
    setDeferredPrompt(null);
  };

  return { isInstallable, installPWA, isIOS, showIOSPrompt, setShowIOSPrompt };
};
