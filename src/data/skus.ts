// ============================================================================
// Catalogue des SKU — SOURCE DE VÉRITÉ du modèle économique EDUCTOME.
// Réf. brief : NEW_METHOD/BRIEFS/BRIEF_DEV_ARCHITECTURE.md §1
//
// Décisions produit verrouillées (juillet 2026) :
//  - Déblocages À VIE (aucun abonnement, aucune durée).
//  - Prix : Module 500 / Tome 2 000 / Collection 15 000 / Livre 3 000 FCFA.
//  - Offre lancement fondateurs : Collection à 12 000 (= collection_maths).
//  - Plus petite unité vendable = le MODULE (m1…m7 d'un tome).
//
// Convention d'identifiants (surface d'intégration achats / unlockedCourses /
// examens / Cloud Functions) :
//  - Tome        : `t1-limites` … `t12-revisions-bac`
//  - Collection  : `cles-maths`
//  - Module      : `m1` … `m7` au sein d'un tome
// ============================================================================

export type EntitlementScope = 'module' | 'tome' | 'collection';

/** Prix en FCFA (XOF, sans décimales). */
export const PRICES = {
  module: 500,
  tome: 2000,
  collection: 15000,
  book: 3000,
  foundersCollection: 12000,
} as const;

/** Id de la collection Maths (12 tomes). */
export const COLLECTION_MATHS = 'cles-maths';

/** Les 12 tomes de la Collection Maths, dans l'ordre. */
export const MATHS_TOME_IDS = [
  't1-limites',
  't2-derivees',
  't3-primitives',
  't4-suites',
  't5-log-expo',
  't6-trigonometrie',
  't7-probabilites',
  't8-statistiques',
  't9-geometrie-espace',
  't10-complexes',
  't11-equations-diff',
  't12-revisions-bac',
] as const;

/** Modules vendables à la carte au sein d'un tome (Socle + entraînement restent liés au tome). */
export const SELLABLE_MODULE_IDS = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7'] as const;

/** Quels tomes appartiennent à quelle collection (pour la résolution hiérarchique). */
export const COLLECTION_TOMES: Record<string, readonly string[]> = {
  [COLLECTION_MATHS]: MATHS_TOME_IDS,
};

// ── Construction des SKU ─────────────────────────────────────────────────────

export const buildModuleSku = (tomeId: string, moduleId: string) =>
  `module_${tomeId}_${moduleId}`;
export const buildTomeSku = (tomeId: string) => `tome_${tomeId}`;
export const buildBookSku = (tomeId: string) => `book_${tomeId}`;
export const COLLECTION_MATHS_SKU = 'collection_maths';
export const FOUNDERS_COLLECTION_SKU = 'offer_founders_collection';

// ── Représentation d'une ressource protégée ─────────────────────────────────

export type Resource =
  | { kind: 'module'; tome: string; module: string }
  | { kind: 'tome'; tome: string }
  | { kind: 'collection'; collection: string };

/** Réf. canonique d'un module : `${tomeId}:${moduleId}`. */
export const moduleRef = (tomeId: string, moduleId: string) => `${tomeId}:${moduleId}`;

// ── Résultat du parsing d'un SKU vers un droit à accorder ────────────────────

export interface ParsedSku {
  sku: string;
  scope: EntitlementScope;
  /** Réf. du droit : module → `${tome}:${module}` ; tome → tomeId ; collection → collectionId. */
  ref: string;
  price: number;
  /** true si ce SKU passe par un code (livre papier). */
  viaCode?: boolean;
}

/**
 * Traduit un SKU du catalogue en droit (scope + ref + prix).
 * Retourne null si le SKU est inconnu.
 */
export function parseSku(sku: string): ParsedSku | null {
  if (sku === COLLECTION_MATHS_SKU || sku === FOUNDERS_COLLECTION_SKU) {
    return {
      sku,
      scope: 'collection',
      ref: COLLECTION_MATHS,
      price: sku === FOUNDERS_COLLECTION_SKU ? PRICES.foundersCollection : PRICES.collection,
    };
  }

  if (sku.startsWith('module_')) {
    // module_{tomeId}_{moduleId} — tomeId n'a jamais d'underscore, moduleId non plus.
    const rest = sku.slice('module_'.length);
    const sep = rest.lastIndexOf('_');
    if (sep <= 0) return null;
    const tome = rest.slice(0, sep);
    const module = rest.slice(sep + 1);
    return { sku, scope: 'module', ref: moduleRef(tome, module), price: PRICES.module };
  }

  if (sku.startsWith('tome_')) {
    return { sku, scope: 'tome', ref: sku.slice('tome_'.length), price: PRICES.tome };
  }

  if (sku.startsWith('book_')) {
    // Le livre papier accorde le tome, via un code.
    return { sku, scope: 'tome', ref: sku.slice('book_'.length), price: PRICES.book, viaCode: true };
  }

  return null;
}

/** Prix d'affichage d'un SKU (helper). */
export function priceOfSku(sku: string): number | null {
  return parseSku(sku)?.price ?? null;
}
