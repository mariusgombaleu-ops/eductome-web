import confetti from 'canvas-confetti';

export const fireConfetti = () => {
  confetti({
    particleCount: 50,
    spread: 60,
    origin: { y: 0.7 },
    colors: ['#D81B60', '#1976D2', '#FDEBD0', '#2E7D32'],
    disableForReducedMotion: true,
    gravity: 0.6,
    scalar: 0.8,
    ticks: 150
  });
};
