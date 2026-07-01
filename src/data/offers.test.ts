import { describe, it, expect } from 'vitest';
import {
  getActiveCollectionOffer,
  daysRemaining,
  foundersRemaining,
  deadlineLabel,
  FOUNDERS_COLLECTION_OFFER,
} from './offers';
import { PRICES, COLLECTION_MATHS_SKU, FOUNDERS_COLLECTION_SKU } from './skus';

describe('getActiveCollectionOffer', () => {
  it('active avant échéance → prix promo 12 000 et SKU fondateurs', () => {
    const a = getActiveCollectionOffer(new Date('2026-07-01'));
    expect(a.active).toBe(true);
    expect(a.price).toBe(PRICES.foundersCollection);
    expect(a.originalPrice).toBe(PRICES.collection);
    expect(a.sku).toBe(FOUNDERS_COLLECTION_SKU);
  });

  it('le dernier jour (30 sept) est encore actif', () => {
    const a = getActiveCollectionOffer(new Date('2026-09-30T18:00:00'));
    expect(a.active).toBe(true);
  });

  it('après échéance → inactive, retour au prix standard 15 000 et SKU standard', () => {
    const a = getActiveCollectionOffer(new Date('2026-10-01T00:00:01'));
    expect(a.active).toBe(false);
    expect(a.reason).toBe('expired');
    expect(a.price).toBe(PRICES.collection);
    expect(a.sku).toBe(COLLECTION_MATHS_SKU);
  });

  it('quota atteint → épuisée même avant échéance', () => {
    const a = getActiveCollectionOffer(new Date('2026-07-01'), FOUNDERS_COLLECTION_OFFER.maxFounders);
    expect(a.active).toBe(false);
    expect(a.reason).toBe('sold_out');
    expect(a.price).toBe(PRICES.collection);
  });

  it('quota non fourni → non appliqué (reste active)', () => {
    const a = getActiveCollectionOffer(new Date('2026-07-01'), undefined);
    expect(a.active).toBe(true);
  });
});

describe('daysRemaining', () => {
  it('compte les jours jusqu’à l’échéance', () => {
    expect(daysRemaining(new Date('2026-09-30T10:00:00'))).toBe(1); // même jour, ~14h restantes
    expect(daysRemaining(new Date('2026-09-28T23:59:59'))).toBe(2);
    expect(daysRemaining(new Date('2026-10-05'))).toBe(0);
  });
});

describe('foundersRemaining', () => {
  it('renvoie les places restantes ou null si non suivi', () => {
    expect(foundersRemaining(150)).toBe(50); // 200 - 150
    expect(foundersRemaining(250)).toBe(0);
    expect(foundersRemaining(undefined)).toBeNull();
  });
});

describe('deadlineLabel', () => {
  it('formate en français', () => {
    expect(deadlineLabel()).toBe('30 septembre 2026');
  });
});
