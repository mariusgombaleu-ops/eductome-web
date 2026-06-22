import { useScrollCounter } from '../../hooks/useScrollCounter';

interface AnimatedCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  label: string;
  icon?: React.ReactNode;
}

export function AnimatedCounter({ end, prefix = '', suffix = '', duration = 1500, label, icon }: AnimatedCounterProps) {
  const { ref, display } = useScrollCounter({ end, duration, prefix, suffix });

  return (
    <div ref={ref} className="flex items-center gap-3">
      {icon && (
        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
          {icon}
        </div>
      )}
      <div>
        <div className="text-white font-extrabold text-xl leading-none tracking-tight">{display}</div>
        <div className="text-blue-200 text-xs mt-1 font-medium">{label}</div>
      </div>
    </div>
  );
}
