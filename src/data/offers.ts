// ============================================================================
// Offres promotionnelles limitées — EDUCTOME.
// Réf. note stratégie §6 : « Offre Rentrée : Collection à 12 000 F au lieu de
// 15 000 jusqu'au 30 septembre » + cadre « membres fondateurs ».
//
// Principe : l'offre s'active / se désactive TOUTE SEULE selon la date (et,
// optionnellement, un quota de fondateurs). Après échéance → retour automatique
// au prix standard. On ne bake jamais un faux prix permanent.
// ============================================================================

import { COLLECTION_MATHS, COLLECTION_MATHS_SKU, FOUNDERS_COLLECTION_SKU, PRICES } from './skus';

export interface CollectionOffer {
  sku: string;
  collection: string;
  price: number;
  originalPrice: number;
  /** Date (incluse) jusqu'à laquelle l'offre est valable — YYYY-MM-DD. */
  until: string;
  /** Nb max de fondateurs. Appliqué uniquement si un compteur est fourni à l'exécution. */
  maxFounders?: number;
  label: string;
}

/** Offre Rentrée fondateurs — Collection Maths à 12 000 jusqu'au 30 sept. 2026. */
export const FOUNDERS_COLLECTION_OFFER: CollectionOffer = {
  sku: FOUNDERS_COLLECTION_SKU,
  collection: COLLECTION_MATHS,
  price: PRICES.foundersCollection, // 12 000
  originalPrice: PRICES.collection, // 15 000
  until: '2026-09-30',
  maxFounders: 200,
  label: 'Offre Rentrée — Membre Fondateur',
};

export interface ActiveOffer {
  /** true = l'offre promo s'applique maintenant. */
  active: boolean;
  /** Prix à appliquer maintenant (promo si active, sinon standard). */
  price: number;
  /** Prix standard (à barrer quand active). */
  originalPrice: number;
  /** SKU à utiliser au checkout (offre si active, sinon collection standard). */
  sku: string;
  /** Détail de l'offre quand active. */
  offer?: CollectionOffer;
  /** Pourquoi l'offre n'est pas active. */
  reason?: 'expired' | 'sold_out';
}

/** Fin de validité (dernière seconde du jour `until`). */
function deadlineDate(offer: CollectionOffer): Date {
  return new Date(`${offer.until}T23:59:59`);
}

/**
 * Résout l'offre collection applicable à l'instant `now`.
 * @param foundersSold nombre de collections fondateurs déjà vendues (optionnel).
 *   Si fourni et ≥ maxFounders → offre épuisée. Non fourni → quota non appliqué.
 */
export function getActiveCollectionOffer(
  now: Date = new Date(),
  foundersSold?: number,
  offer: CollectionOffer = FOUNDERS_COLLECTION_OFFER,
): ActiveOffer {
  const standard: ActiveOffer = {
    active: false,
    price: offer.originalPrice,
    originalPrice: offer.originalPrice,
    sku: COLLECTION_MATHS_SKU,
  };

  if (now > deadlineDate(offer)) return { ...standard, reason: 'expired' };
  if (offer.maxFounders != null && foundersSold != null && foundersSold >= offer.maxFounders) {
    return { ...standard, reason: 'sold_out' };
  }

  return {
    active: true,
    price: offer.price,
    originalPrice: offer.originalPrice,
    sku: offer.sku,
    offer,
  };
}

/** Jours restants avant échéance (0 si passée). Utile pour l'urgence. */
export function daysRemaining(now: Date = new Date(), offer: CollectionOffer = FOUNDERS_COLLECTION_OFFER): number {
  const ms = deadlineDate(offer).getTime() - now.getTime();
  return ms <= 0 ? 0 : Math.ceil(ms / (24 * 60 * 60 * 1000));
}

/** Places fondateurs restantes (null si quota non suivi). */
export function foundersRemaining(foundersSold?: number, offer: CollectionOffer = FOUNDERS_COLLECTION_OFFER): number | null {
  if (offer.maxFounders == null || foundersSold == null) return null;
  return Math.max(0, offer.maxFounders - foundersSold);
}

/** Libellé français de l'échéance : "30 septembre 2026". */
export function deadlineLabel(offer: CollectionOffer = FOUNDERS_COLLECTION_OFFER): string {
  const [y, m, d] = offer.until.split('-').map(Number);
  return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(
    new Date(y, m - 1, d),
  );
}
