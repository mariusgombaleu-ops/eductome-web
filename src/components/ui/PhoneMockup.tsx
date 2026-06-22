import { ReactNode } from 'react';

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
}

export function PhoneMockup({ children, className = '' }: PhoneMockupProps) {
  return (
    <div className={`phone-mockup mx-auto ${className}`}>
      <div className="phone-mockup-content">
        {children}
      </div>
    </div>
  );
}
