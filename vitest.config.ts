import { defineConfig } from 'vitest/config';

// Config dédiée aux tests unitaires (logique pure : examen-utils, srs).
// Séparée de vite.config.ts pour ne pas charger le plugin PWA en test.
export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
});
