// ============================================================================
// Moteur d'entitlements EDUCTOME — provider-agnostique (aucune dépendance
// Firebase / réseau). Réf. brief : BRIEF_DEV_ARCHITECTURE.md §2, §3, §9.
//
// Un droit (Entitlement) est accordé À VIE et rattaché au compte. La résolution
// d'accès remonte la hiérarchie : module ⊂ tome ⊂ collection.
// ============================================================================

import {
  COLLECTION_TOMES,
  EntitlementScope,
  moduleRef,
  Resource,
  parseSku,
  priceOfSku,
} from '../data/skus';

export type EntitlementSource = 'chariow' | 'code' | 'book' | 'gift' | 'promo';

export interface Entitlement {
  scope: EntitlementScope;
  /** module → `${tomeId}:${moduleId}` ; tome → tomeId ; collection → collectionId. */
  ref: string;
  source: EntitlementSource;
  /** Date d'octroi (ISO string ou epoch ms). */
  grantedAt: string | number;
  /** SKU d'origine, si connu. */
  sku?: string;
  /** Id de commande (Chariow orderId ou code livre), pour l'audit / l'idempotence. */
  orderId?: string;
}

/** Sources considérées « payantes » pour le flag membre (brief §2). */
const PAID_SOURCES: ReadonlySet<EntitlementSource> = new Set(['chariow', 'code', 'book']);

// ── Résolution d'accès ───────────────────────────────────────────────────────

/** Les tomes couverts par une collection donnée. */
function tomesOfCollection(collectionId: string): readonly string[] {
  return COLLECTION_TOMES[collectionId] ?? [];
}

/** Une collection possédée couvre-t-elle ce tome ? */
function collectionCoversTome(entitlements: Entitlement[], tomeId: string): boolean {
  return entitlements.some(
    (e) => e.scope === 'collection' && tomesOfCollection(e.ref).includes(tomeId),
  );
}

/**
 * L'utilisateur a-t-il accès (via un droit acheté) à la ressource demandée ?
 * Ne gère PAS le free-tier — composer avec `isFreeResource` via `resolveAccess`.
 */
export function canAccess(entitlements: Entitlement[], resource: Resource): boolean {
  switch (resource.kind) {
    case 'collection':
      return entitlements.some((e) => e.scope === 'collection' && e.ref === resource.collection);

    case 'tome':
      return (
        entitlements.some((e) => e.scope === 'tome' && e.ref === resource.tome) ||
        collectionCoversTome(entitlements, resource.tome)
      );

    case 'module': {
      const ref = moduleRef(resource.tome, resource.module);
      return (
        entitlements.some((e) => e.scope === 'module' && e.ref === ref) ||
        canAccess(entitlements, { kind: 'tome', tome: resource.tome })
      );
    }
  }
}

/**
 * Accès effectif = free-tier OU droit acheté.
 * `isFree` : callback fourni par l'appelant (WS5 gating) qui décide si la
 * ressource fait partie de l'offre Découverte gratuite.
 */
export function resolveAccess(
  entitlements: Entitlement[],
  resource: Resource,
  isFree?: (resource: Resource) => boolean,
): boolean {
  if (isFree && isFree(resource)) return true;
  return canAccess(entitlements, resource);
}

/** L'utilisateur a-t-il au moins un droit payant (= « membre ») ? Brief §2. */
export function isMember(entitlements: Entitlement[]): boolean {
  return entitlements.some((e) => PAID_SOURCES.has(e.source));
}

// ── Déduplication (un droit large rend redondant un droit plus fin) ──────────

/**
 * Retire les droits rendus redondants par un droit plus large déjà possédé :
 *  - un module couvert par un tome/collection possédé,
 *  - un tome couvert par une collection possédée.
 * Utile pour ne jamais revendre un contenu déjà détenu (brief §1, §9).
 */
export function dedupeEntitlements(entitlements: Entitlement[]): Entitlement[] {
  return entitlements.filter((e) => {
    if (e.scope === 'module') {
      const [tome] = e.ref.split(':');
      const others = entitlements.filter((o) => o !== e);
      // redondant si le tome est possédé (directement ou via collection)
      return !canAccess(others, { kind: 'tome', tome });
    }
    if (e.scope === 'tome') {
      const others = entitlements.filter((o) => o !== e);
      return !collectionCoversTome(others, e.ref);
    }
    return true; // collection : jamais redondante
  });
}

// ── Upgrade au différentiel (brief §1, §9) ───────────────────────────────────

export interface UpgradeQuote {
  /** Prix plein du SKU cible. */
  fullPrice: number;
  /** Déduction pour les contenus déjà possédés qui sont des sous-parties de la cible. */
  deduction: number;
  /** Prix à payer = max(0, fullPrice - deduction) si crédit appliqué, sinon fullPrice. */
  price: number;
  /** true si l'utilisateur possède déjà (au moins) la cible → rien à revendre. */
  alreadyOwned: boolean;
}

/** Le SKU cible est-il une collection couvrant ce tome (donc ce tome en est une sous-partie) ? */
function skuCoversTome(targetRef: string, targetScope: EntitlementScope, tomeId: string): boolean {
  if (targetScope === 'collection') return tomesOfCollection(targetRef).includes(tomeId);
  if (targetScope === 'tome') return targetRef === tomeId;
  return false;
}

/**
 * Calcule le prix d'un SKU cible en tenant compte de ce que possède déjà l'utilisateur.
 *
 * `creditOwned` (décision produit ouverte pour la collection) :
 *  - true  → on déduit la valeur des sous-parties déjà payées (jamais faire payer 2× le
 *            même contenu).
 *  - false → on affiche le prix plein (déduction calculée mais non appliquée).
 */
export function priceToUpgrade(
  entitlements: Entitlement[],
  targetSku: string,
  creditOwned = true,
): UpgradeQuote | null {
  const target = parseSku(targetSku);
  if (!target) return null;

  const fullPrice = target.price;

  // Déjà possédé (cible exacte ou couverte par plus large) ?
  const alreadyOwned =
    (target.scope === 'collection' &&
      canAccess(entitlements, { kind: 'collection', collection: target.ref })) ||
    (target.scope === 'tome' && canAccess(entitlements, { kind: 'tome', tome: target.ref })) ||
    (target.scope === 'module' &&
      (() => {
        const [tome, module] = target.ref.split(':');
        return canAccess(entitlements, { kind: 'module', tome, module });
      })());

  if (alreadyOwned) {
    return { fullPrice, deduction: fullPrice, price: 0, alreadyOwned: true };
  }

  // Somme des droits déjà payés qui sont des sous-parties strictes de la cible.
  let deduction = 0;
  for (const e of entitlements) {
    const sku = e.sku ?? inferSkuFromEntitlement(e);
    const unitPrice = sku ? priceOfSku(sku) : null;
    if (unitPrice == null) continue;

    if (e.scope === 'tome' && skuCoversTome(target.ref, target.scope, e.ref) && target.scope === 'collection') {
      deduction += unitPrice;
    } else if (e.scope === 'module') {
      const [tome] = e.ref.split(':');
      if (skuCoversTome(target.ref, target.scope, tome)) {
        deduction += unitPrice;
      }
    }
  }

  const price = creditOwned ? Math.max(0, fullPrice - deduction) : fullPrice;
  return { fullPrice, deduction, price, alreadyOwned: false };
}

/** Reconstitue un SKU plausible depuis un droit sans SKU explicite (pour le prix). */
function inferSkuFromEntitlement(e: Entitlement): string | null {
  if (e.scope === 'collection') return 'collection_maths';
  if (e.scope === 'tome') return `tome_${e.ref}`;
  if (e.scope === 'module') {
    const [tome, module] = e.ref.split(':');
    return `module_${tome}_${module}`;
  }
  return null;
}

// ── Migration depuis le modèle historique ────────────────────────────────────

interface LegacyAchat {
  type: 'chapitre' | 'tome' | 'collection' | 'physique';
  reference: string;
  date?: string;
  relaisCode?: string;
  ref_commande_selar?: string;
}

/**
 * Convertit l'état historique (`unlockedCourses[]` + `achats[]`) en entitlements.
 * Sert au refactor de UserContext (rétro-compat lecture) et au script de migration.
 */
export function entitlementsFromLegacy(
  unlockedCourses: string[] = [],
  achats: LegacyAchat[] = [],
): Entitlement[] {
  const out: Entitlement[] = [];
  const seen = new Set<string>();
  const push = (ent: Entitlement) => {
    const key = `${ent.scope}:${ent.ref}`;
    if (seen.has(key)) return;
    seen.add(key);
    out.push(ent);
  };

  for (const a of achats) {
    const grantedAt = a.date ?? Date.now();
    const orderId = a.ref_commande_selar;
    if (a.type === 'collection') {
      push({ scope: 'collection', ref: a.reference || 'cles-maths', source: 'chariow', grantedAt, orderId });
    } else if (a.type === 'physique') {
      push({ scope: 'tome', ref: a.reference, source: 'book', grantedAt, orderId });
    } else if (a.type === 'tome') {
      push({ scope: 'tome', ref: a.reference, source: 'chariow', grantedAt, orderId });
    } else if (a.type === 'chapitre') {
      // Historique : « chapitre » = module. reference peut être `${tome}:${module}` ou un tomeId.
      if (a.reference.includes(':')) {
        push({ scope: 'module', ref: a.reference, source: 'chariow', grantedAt, orderId });
      } else {
        push({ scope: 'tome', ref: a.reference, source: 'chariow', grantedAt, orderId });
      }
    }
  }

  // unlockedCourses : ids de tomes, ou 'cles-maths' pour la collection.
  for (const c of unlockedCourses) {
    if (c === 'cles-maths' || c === 'collection_maths') {
      push({ scope: 'collection', ref: 'cles-maths', source: 'chariow', grantedAt: Date.now() });
    } else {
      push({ scope: 'tome', ref: c, source: 'chariow', grantedAt: Date.now() });
    }
  }

  return dedupeEntitlements(out);
}
