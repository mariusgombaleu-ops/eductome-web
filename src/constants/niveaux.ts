export const NIVEAUX = [
  { niveau: 1, xpMin: 0,    titre: "Élève",           emoji: "📖" },
  { niveau: 2, xpMin: 200,  titre: "Bosseur",          emoji: "💪" },
  { niveau: 3, xpMin: 500,  titre: "Caïman en herbe",  emoji: "🐊" },
  { niveau: 4, xpMin: 1000, titre: "Le Caïman",        emoji: "⭐" },
  { niveau: 5, xpMin: 2000, titre: "Grand Frère",      emoji: "🏆" },
  { niveau: 6, xpMin: 5000, titre: "Légende du Cacao", emoji: "👑" },
] as const;

export function calculateNiveau(xp: number): number {
  for (let i = NIVEAUX.length - 1; i >= 0; i--) {
    if (xp >= NIVEAUX[i].xpMin) return NIVEAUX[i].niveau;
  }
  return 1;
}
