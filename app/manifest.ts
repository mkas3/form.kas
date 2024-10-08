import type { MetadataRoute } from 'next';

import { siteConfig } from '@/config/site';

const manifest = () =>
  ({
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: '.',
    display: 'standalone',
    background_color: '#0a0a0f',
    theme_color: '#0a0a0f',
    screenshots: [
      {
        src: 'screenshots/screenshot-1.png',
        sizes: '1831x882',
        type: 'image/png'
      },
      {
        src: 'screenshots/screenshot-2.png',
        sizes: '1831x882',
        type: 'image/png'
      },
      {
        src: 'screenshots/screenshot-3.png',
        sizes: '338x739',
        type: 'image/png'
      }
    ],
    icons: [
      {
        src: '/icons/android-icon-36x36.png',
        sizes: '36x36',
        type: 'image/png'
      },
      {
        src: '/icons/android-icon-48x48.png',
        sizes: '48x48',
        type: 'image/png'
      },
      {
        src: '/icons/android-icon-72x72.png',
        sizes: '72x72',
        type: 'image/png'
      },
      {
        src: '/icons/android-icon-96x96.png',
        sizes: '96x96',
        type: 'image/png'
      },
      {
        src: '/icons/android-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png'
      },
      {
        src: '/icons/android-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      }
    ]
  }) satisfies MetadataRoute.Manifest;

export default manifest;
