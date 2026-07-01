import { Link } from 'react-router-dom';

interface CTAButtonProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export function CTAButton({ to, href, children, variant = 'primary', className = '', style = {}, onClick }: CTAButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 text-center";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#F0247A] to-[#FF3D8B] text-white animate-pulse-glow shadow-lg",
    secondary: "bg-transparent border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles} style={style} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedStyles} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} onClick={onClick}>
      {children}
    </button>
  );
}
