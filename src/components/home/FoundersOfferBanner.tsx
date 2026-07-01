import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getActiveCollectionOffer, FOUNDERS_COLLECTION_OFFER, deadlineLabel } from '../../data/offers';
import { formatFcfa } from '../../utils/format';

function useCountdown(target: Date) {
  const compute = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0, over: true };
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
      over: false,
    };
  };
  const [t, setT] = useState(compute);
  useEffect(() => {
    const id = setInterval(() => setT(compute()), 1000);
    return () => clearInterval(id);
  }, [target]);
  return t;
}

const Cell = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="min-w-[3rem] rounded-lg bg-white/10 border border-white/15 px-2 py-2 text-2xl md:text-3xl font-bold tabular-nums text-white">
      {String(value).padStart(2, '0')}
    </div>
    <span className="mt-1.5 text-[10px] uppercase tracking-wider text-white/50">{label}</span>
  </div>
);

export function FoundersOfferBanner() {
  const offer = getActiveCollectionOffer();
  const [target] = useState(() => new Date(`${FOUNDERS_COLLECTION_OFFER.until}T23:59:59`));
  const { d, h, m, s, over } = useCountdown(target);

  if (!offer.active || over) return null;

  const economie = offer.originalPrice - offer.price;

  return (
    <section className="bg-eductome-marine px-4 py-10 md:py-14">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left">
          <span className="text-amber-400 font-bold tracking-wider uppercase text-xs">
            Offre de rentrée — membre fondateur
          </span>
          <h2 className="mt-2 text-2xl md:text-3xl font-playfair font-bold text-white">
            La Collection Maths à{' '}
            <span className="text-amber-400">{formatFcfa(offer.price)}</span>{' '}
            <span className="text-white/50 text-xl line-through font-sans font-medium">{formatFcfa(offer.originalPrice)}</span>
          </h2>
          <p className="mt-2 text-blue-100/80 text-sm md:text-base max-w-xl">
            Les 12 tomes, à vie, sans abonnement. Tu économises {formatFcfa(economie)}.
            Tarif réservé aux fondateurs jusqu'au {deadlineLabel()} — après, retour à {formatFcfa(offer.originalPrice)}.
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 shrink-0">
          <div className="flex items-start gap-2 md:gap-3">
            <Cell value={d} label="jours" />
            <span className="text-white/30 text-2xl font-light pt-1.5">:</span>
            <Cell value={h} label="h" />
            <span className="text-white/30 text-2xl font-light pt-1.5">:</span>
            <Cell value={m} label="min" />
            <span className="text-white/30 text-2xl font-light pt-1.5">:</span>
            <Cell value={s} label="s" />
          </div>
          <Link
            to="/register"
            className="inline-flex items-center justify-center gap-2 font-bold px-8 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-eductome-marine transition-colors shadow-lg"
          >
            Devenir fondateur
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
