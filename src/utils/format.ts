// Formatage monétaire EDUCTOME — FCFA (XOF), sans décimales, séparateur espace.
// Réf. brief : devise FCFA (XOF), pas de décimales.

/**
 * Formate un montant en FCFA : 15000 → "15 000 FCFA".
 * @param amount montant en FCFA (arrondi, plancher 0)
 * @param withSuffix ajoute " FCFA" (défaut true) ; false → "15 000"
 */
export function formatFcfa(amount: number, withSuffix = true): string {
  const n = Math.max(0, Math.round(amount || 0));
  const grouped = n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return withSuffix ? `${grouped} FCFA` : grouped;
}
