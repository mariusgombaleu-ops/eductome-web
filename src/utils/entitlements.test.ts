import { describe, it, expect } from 'vitest';
import {
  canAccess,
  resolveAccess,
  isMember,
  dedupeEntitlements,
  priceToUpgrade,
  entitlementsFromLegacy,
  type Entitlement,
} from './entitlements';
import {
  parseSku,
  buildModuleSku,
  buildTomeSku,
  COLLECTION_MATHS_SKU,
  FOUNDERS_COLLECTION_SKU,
  moduleRef,
  PRICES,
} from '../data/skus';

const ent = (scope: Entitlement['scope'], ref: string, source: Entitlement['source'] = 'chariow'): Entitlement => ({
  scope,
  ref,
  source,
  grantedAt: '2026-07-01',
});

describe('parseSku', () => {
  it('parse un module (tomeId à tirets)', () => {
    expect(parseSku('module_t5-log-expo_m3')).toMatchObject({
      scope: 'module',
      ref: 't5-log-expo:m3',
      price: PRICES.module,
    });
  });
  it('parse un tome, un livre, la collection et l’offre fondateurs', () => {
    expect(parseSku('tome_t1-limites')).toMatchObject({ scope: 'tome', ref: 't1-limites', price: PRICES.tome });
    expect(parseSku('book_t1-limites')).toMatchObject({ scope: 'tome', ref: 't1-limites', price: PRICES.book, viaCode: true });
    expect(parseSku(COLLECTION_MATHS_SKU)).toMatchObject({ scope: 'collection', ref: 'cles-maths', price: PRICES.collection });
    expect(parseSku(FOUNDERS_COLLECTION_SKU)).toMatchObject({ scope: 'collection', ref: 'cles-maths', price: PRICES.foundersCollection });
  });
  it('rejette un SKU inconnu', () => {
    expect(parseSku('bidon_x')).toBeNull();
  });
});

describe('canAccess — hiérarchie module ⊂ tome ⊂ collection', () => {
  it('la collection débloque tous les tomes et modules', () => {
    const e = [ent('collection', 'cles-maths')];
    expect(canAccess(e, { kind: 'tome', tome: 't9-geometrie-espace' })).toBe(true);
    expect(canAccess(e, { kind: 'module', tome: 't2-derivees', module: 'm4' })).toBe(true);
    expect(canAccess(e, { kind: 'collection', collection: 'cles-maths' })).toBe(true);
  });
  it('un tome débloque ses modules mais pas les autres tomes', () => {
    const e = [ent('tome', 't1-limites')];
    expect(canAccess(e, { kind: 'module', tome: 't1-limites', module: 'm1' })).toBe(true);
    expect(canAccess(e, { kind: 'tome', tome: 't1-limites' })).toBe(true);
    expect(canAccess(e, { kind: 'tome', tome: 't2-derivees' })).toBe(false);
    expect(canAccess(e, { kind: 'collection', collection: 'cles-maths' })).toBe(false);
  });
  it('un module ne débloque que lui-même', () => {
    const e = [ent('module', moduleRef('t1-limites', 'm1'))];
    expect(canAccess(e, { kind: 'module', tome: 't1-limites', module: 'm1' })).toBe(true);
    expect(canAccess(e, { kind: 'module', tome: 't1-limites', module: 'm2' })).toBe(false);
    expect(canAccess(e, { kind: 'tome', tome: 't1-limites' })).toBe(false);
  });
  it('sans droit → aucun accès', () => {
    expect(canAccess([], { kind: 'module', tome: 't1-limites', module: 'm1' })).toBe(false);
  });
});

describe('resolveAccess — free-tier', () => {
  it('accorde l’accès si la ressource est gratuite, même sans droit', () => {
    const isFree = (r: any) => r.kind === 'module' && r.tome === 't1-limites' && r.module === 'm1';
    expect(resolveAccess([], { kind: 'module', tome: 't1-limites', module: 'm1' }, isFree)).toBe(true);
    expect(resolveAccess([], { kind: 'module', tome: 't1-limites', module: 'm2' }, isFree)).toBe(false);
  });
});

describe('isMember', () => {
  it('vrai avec un droit payant', () => {
    expect(isMember([ent('module', 't1-limites:m1', 'chariow')])).toBe(true);
    expect(isMember([ent('tome', 't1-limites', 'book')])).toBe(true);
  });
  it('faux avec seulement gift/promo ou aucun droit', () => {
    expect(isMember([ent('tome', 't1-limites', 'gift')])).toBe(false);
    expect(isMember([])).toBe(false);
  });
});

describe('dedupeEntitlements', () => {
  it('retire les modules et tomes couverts par la collection', () => {
    const e = [
      ent('collection', 'cles-maths'),
      ent('tome', 't1-limites'),
      ent('module', moduleRef('t3-primitives', 'm2')),
    ];
    const d = dedupeEntitlements(e);
    expect(d).toHaveLength(1);
    expect(d[0].scope).toBe('collection');
  });
  it('retire un module couvert par son tome', () => {
    const e = [ent('tome', 't1-limites'), ent('module', moduleRef('t1-limites', 'm1'))];
    const d = dedupeEntitlements(e);
    expect(d.map((x) => x.scope)).toEqual(['tome']);
  });
});

describe('priceToUpgrade — upgrade au différentiel', () => {
  it('prix plein sans rien de possédé', () => {
    const q = priceToUpgrade([], buildTomeSku('t1-limites'))!;
    expect(q).toMatchObject({ fullPrice: PRICES.tome, deduction: 0, price: PRICES.tome, alreadyOwned: false });
  });
  it('déduit les modules déjà achetés du prix du tome', () => {
    const e = [ent('module', moduleRef('t1-limites', 'm1')), ent('module', moduleRef('t1-limites', 'm2'))];
    const q = priceToUpgrade(e, buildTomeSku('t1-limites'))!;
    expect(q.deduction).toBe(2 * PRICES.module);
    expect(q.price).toBe(PRICES.tome - 2 * PRICES.module);
  });
  it('déduit les tomes déjà achetés du prix de la collection', () => {
    const e = [ent('tome', 't1-limites'), ent('tome', 't2-derivees')];
    const q = priceToUpgrade(e, COLLECTION_MATHS_SKU)!;
    expect(q.deduction).toBe(2 * PRICES.tome);
    expect(q.price).toBe(PRICES.collection - 2 * PRICES.tome);
  });
  it('décision Marius : crédite modules + tomes (2 tomes + 1 module = 4500 → collection 10 500)', () => {
    const e = [
      ent('tome', 't1-limites'),
      ent('tome', 't2-derivees'),
      ent('module', moduleRef('t3-primitives', 'm1')),
    ];
    const q = priceToUpgrade(e, COLLECTION_MATHS_SKU)!;
    expect(q.deduction).toBe(2 * PRICES.tome + PRICES.module); // 4500
    expect(q.price).toBe(10500);
  });
  it('ne crédite que le contenu inclus dans collection_maths', () => {
    // un tome hors collection maths ne doit pas être crédité
    const e = [ent('tome', 'tX-hors-collection')];
    const q = priceToUpgrade(e, COLLECTION_MATHS_SKU)!;
    expect(q.deduction).toBe(0);
    expect(q.price).toBe(PRICES.collection);
  });
  it('ne crédite pas si creditOwned=false (prix plein affiché)', () => {
    const e = [ent('tome', 't1-limites')];
    const q = priceToUpgrade(e, COLLECTION_MATHS_SKU, false)!;
    expect(q.price).toBe(PRICES.collection);
    expect(q.deduction).toBe(PRICES.tome);
  });
  it('cible déjà possédée → prix 0', () => {
    const e = [ent('collection', 'cles-maths')];
    const q = priceToUpgrade(e, buildTomeSku('t1-limites'))!;
    expect(q.alreadyOwned).toBe(true);
    expect(q.price).toBe(0);
  });
  it('ne descend jamais sous 0', () => {
    const e = Array.from({ length: 6 }, (_, i) => ent('module', moduleRef('t1-limites', `m${i + 1}`)));
    const q = priceToUpgrade(e, buildTomeSku('t1-limites'))!;
    expect(q.price).toBe(0); // 6×500 = 3000 > 2000
  });
});

describe('entitlementsFromLegacy', () => {
  it('mappe unlockedCourses (tomes + collection)', () => {
    const e = entitlementsFromLegacy(['t1-limites', 'cles-maths'], []);
    // la collection absorbe le tome → dédupliqué à 1 droit collection
    expect(e).toHaveLength(1);
    expect(e[0]).toMatchObject({ scope: 'collection', ref: 'cles-maths' });
  });
  it('mappe les achats par type', () => {
    const e = entitlementsFromLegacy([], [
      { type: 'tome', reference: 't2-derivees' },
      { type: 'physique', reference: 't3-primitives' },
    ]);
    expect(e.find((x) => x.ref === 't3-primitives')?.source).toBe('book');
    expect(e.find((x) => x.ref === 't2-derivees')?.source).toBe('chariow');
  });
  it('accès effectif après migration', () => {
    const e = entitlementsFromLegacy(['t1-limites'], []);
    expect(canAccess(e, { kind: 'module', tome: 't1-limites', module: 'm5' })).toBe(true);
  });
});

describe('buildModuleSku round-trip', () => {
  it('build puis parse redonne la même réf', () => {
    const sku = buildModuleSku('t11-equations-diff', 'm7');
    expect(parseSku(sku)?.ref).toBe('t11-equations-diff:m7');
  });
});
