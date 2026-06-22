import { useState, useEffect, useRef, useCallback } from 'react';

interface UseScrollCounterOptions {
  end: number;
  duration?: number; // ms
  prefix?: string;
  suffix?: string;
}

export function useScrollCounter({ end, duration = 1500, prefix = '', suffix = '' }: UseScrollCounterOptions) {
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const animate = useCallback(() => {
    if (hasAnimated) return;
    setHasAnimated(true);

    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * end);
      setDisplay(`${prefix}${current.toLocaleString('fr-FR')}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, prefix, suffix, hasAnimated]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [animate]);

  return { ref, display };
}
