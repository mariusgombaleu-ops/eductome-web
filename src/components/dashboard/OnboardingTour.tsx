import { useState, useEffect } from 'react';
// @ts-ignore
import Joyride, { STATUS } from 'react-joyride';

export const OnboardingTour = () => {
  const [run, setRun] = useState(false);

  // Démarrer la visite guidée au montage si c'est la première fois
  useEffect(() => {
    const hasSeenTour = localStorage.getItem('eductome_tour_seen');
    if (!hasSeenTour) {
      // Petit délai pour laisser la page se charger et s'animer
      setTimeout(() => setRun(true), 1000);
    }
  }, []);

  const steps = [
    {
      target: '.tour-dashboard',
      content: "Bienvenue sur votre Espace Élève ! C'est ici que vous pouvez suivre votre progression et vos statistiques.",
      disableBeacon: true,
    },
    {
      target: '.tour-courses',
      content: "Retrouvez tous vos cours débloqués dans cet espace. Vous pouvez reprendre vos révisions à tout moment.",
    },
    {
      target: '.tour-forum',
      content: "Bloqué sur un exercice ? N'hésitez pas à poser votre question sur le forum d'entraide communautaire !",
    },
    {
      target: '.tour-profile',
      content: "Enfin, vous pouvez personnaliser votre profil et gérer vos préférences ici. Bonne étude !",
    },
  ];

  const handleJoyrideCallback = (data: any) => {
    const { status } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];
    
    if (finishedStatuses.includes(status)) {
      setRun(false);
      localStorage.setItem('eductome_tour_seen', 'true');
    }
  };

  return (
    <Joyride
      callback={handleJoyrideCallback}
      continuous
      hideCloseButton
      run={run}
      scrollToFirstStep
      showProgress
      showSkipButton
      steps={steps}
      styles={{
        options: {
          primaryColor: '#E91E63', // eductome-magenta
          zIndex: 10000,
        },
        tooltipContainer: {
          textAlign: 'left',
          fontFamily: 'Poppins, sans-serif',
        },
        buttonNext: {
          backgroundColor: '#E91E63',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 600,
          borderRadius: '8px',
        },
        buttonBack: {
          color: '#6b7280',
          fontFamily: 'Poppins, sans-serif',
        },
        buttonSkip: {
          color: '#9ca3af',
          fontFamily: 'Poppins, sans-serif',
        }
      } as any}
      locale={{
        back: 'Précédent',
        close: 'Fermer',
        last: 'Terminer',
        next: 'Suivant',
        skip: 'Passer',
      }}
    />
  );
};
