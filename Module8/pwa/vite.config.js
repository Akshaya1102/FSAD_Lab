import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['assets/images/*', 'assets/products.json'],
      manifest: {
        name: 'QuickMart 2.0 PWA',
        short_name: 'QuickMartPWA',
        description: 'Quick Mart Progressive Web App',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'assets/images/default-image-icon.jpg',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'assets/images/default-image-icon.jpg',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'assets/images/default-image-icon.jpg',
            sizes: '512x512',
            type: 'image/png',
           
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.startsWith('/assets/'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'assets-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
              },
            },
          },
        
          {
        // Match requests to your backend API
        urlPattern: /^http:\/\/localhost:3000\/products.*$/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'api-cache',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 24 * 60 * 60 // 1 day
          }
        }
      }
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js'
  }
})
