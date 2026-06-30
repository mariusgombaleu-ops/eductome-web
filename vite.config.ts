import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  // Honore la variable PORT si elle est définie (utile pour lancer plusieurs
  // serveurs de dev en parallèle) ; sinon Vite garde son port par défaut.
  server: process.env.PORT ? { port: Number(process.env.PORT) } : undefined,
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo-pwa.png'],
      devOptions: {
        // Désactivé en dev : un service worker en `npm run dev` met en cache les
        // anciens fichiers et masque les changements de code (l'app paraît figée).
        // La PWA reste pleinement active en production (build).
        enabled: false
      },
      workbox: {
        // Les tomes sont désormais code-splittés (un chunk par tome, ~150–200 kB),
        // donc ils ne gonflent plus le chunk principal. La limite est calée sur le
        // chunk `index` principal (~2,8 Mo) + une marge pour la croissance de l'app.
        maximumFileSizeToCacheInBytes: 3500000 // 3,5 Mo
      },
      manifest: {
        name: 'EDUCTOME - Apprendre sans limites',
        short_name: 'EDUCTOME',
        start_url: '/',
        description: "La meilleure plateforme e-learning de Côte d'Ivoire",
        theme_color: '#1A3557',
        background_color: '#0D1117',
        display: 'standalone',
        icons: [
          {
            src: '/logo-pwa.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/logo-pwa.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
