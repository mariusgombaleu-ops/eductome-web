import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo-pwa.png'],
      devOptions: {
        enabled: true
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
