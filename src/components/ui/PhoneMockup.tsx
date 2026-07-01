import { ReactNode } from 'react';
import { Signal, Wifi, BatteryFull } from 'lucide-react';

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
  /** Barre flottante optionnelle, ancrée en bas de l'écran (comme le dock du reader). */
  dock?: ReactNode;
}

/**
 * Cadre iPhone Pro premium — bezel titane, Dynamic Island, barre d'état iOS.
 * `children` = l'écran applicatif rendu à l'intérieur (défile sous l'île).
 */
export function PhoneMockup({ children, className = '', dock }: PhoneMockupProps) {
  return (
    <div className={`relative mx-auto w-[290px] max-w-full ${className}`}>
      {/* Cadre titane */}
      <div
        className="relative rounded-[3rem] p-[3px] shadow-[0_30px_70px_-15px_rgba(15,23,42,0.55)]"
        style={{
          background:
            'linear-gradient(150deg, #e9eaee 0%, #b6b9c1 16%, #7f838b 38%, #d9dbe0 60%, #797d85 82%, #c9ccd2 100%)',
        }}
      >
        {/* Boutons latéraux */}
        <div className="absolute -left-[2px] top-[104px] h-7 w-[2px] rounded-l bg-[#5f636b]" />
        <div className="absolute -left-[2px] top-[150px] h-11 w-[2px] rounded-l bg-[#5f636b]" />
        <div className="absolute -left-[2px] top-[206px] h-11 w-[2px] rounded-l bg-[#5f636b]" />
        <div className="absolute -right-[2px] top-[172px] h-16 w-[2px] rounded-r bg-[#5f636b]" />

        {/* Bezel noir */}
        <div className="relative rounded-[2.8rem] bg-black p-[9px]">
          {/* Écran — light mode, comme l'app */}
          <div className="relative h-[510px] overflow-hidden rounded-[2.3rem] bg-[#f3f4f6]">
            {/* Dynamic Island */}
            <div className="absolute top-[11px] left-1/2 z-30 flex h-[26px] w-[95px] -translate-x-1/2 items-center justify-end rounded-full bg-black">
              <span className="mr-3 h-2.5 w-2.5 rounded-full bg-[#0b0b0f] ring-1 ring-[#23232a]" />
            </div>

            {/* Barre d'état iOS — texte sombre sur fond clair */}
            <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 pt-[13px] text-gray-900">
              <span className="text-[12px] font-semibold tracking-tight">9:41</span>
              <div className="flex items-center gap-1.5">
                <Signal className="h-3.5 w-3.5" strokeWidth={2.5} />
                <Wifi className="h-3.5 w-3.5" strokeWidth={2.5} />
                <BatteryFull className="h-4 w-4" strokeWidth={2} />
              </div>
            </div>

            {/* Écran applicatif — défile sous l'île */}
            <div className={`h-full overflow-y-auto px-3 pt-[44px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${dock ? 'pb-24' : 'pb-5'}`}>
              {children}
            </div>

            {/* Dock flottant (optionnel) — ancré en bas, comme dans le reader */}
            {dock && (
              <div className="absolute bottom-2 left-0 right-0 z-20 px-2">
                {dock}
              </div>
            )}

            {/* Home indicator (masqué quand un dock occupe le bas) */}
            {!dock && (
              <div className="absolute bottom-[7px] left-1/2 z-20 h-1 w-[110px] -translate-x-1/2 rounded-full bg-black/25" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
