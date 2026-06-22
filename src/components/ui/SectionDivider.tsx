interface SectionDividerProps {
  fromColor?: string;
  toColor?: string;
  flip?: boolean;
}

export function SectionDivider({ fromColor = '#ffffff', toColor = '#0a1628', flip = false }: SectionDividerProps) {
  return (
    <div className="section-divider" style={{ transform: flip ? 'rotate(180deg)' : undefined }}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,0 C360,60 1080,0 1440,48 L1440,60 L0,60 Z"
          fill={toColor}
        />
        <rect width="1440" height="60" fill={fromColor} style={{ zIndex: -1 }} />
      </svg>
    </div>
  );
}
