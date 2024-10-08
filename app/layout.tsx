import React from 'react';
import type { Metadata, Viewport } from 'next';

import { Footer } from '@/app/_components/footer';
import { Link } from '@/components/ui/link';
import { PageWrapper } from '@/components/ui/page-wrapper';
import { Toaster } from '@/components/ui/sonner';
import { siteConfig } from '@/config/site';
import { fontMono, fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';

import { Header } from './_components/header';
import { ScreenIndicator } from './_components/screen-indicator';
import { Sidebar } from './_components/sidebar';
import { ThemeProvider } from './_components/theme-provider';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: 'mkas3',
      url: siteConfig.links.github
    }
  ],
  creator: 'mkas3',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 847,
        height: 443,
        alt: siteConfig.name,
        type: 'image/jpeg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: 'mkas3'
  },
  icons: {
    icon: [
      { url: '/favicon.ico', rel: 'icon', sizes: '32x32' },
      { url: '/icons/favicon.svg', rel: 'icon', type: 'image/svg+xml' },
      { url: '/icons/android-icon-192x192.png', rel: 'icon', sizes: '192x192' },
      { url: '/icons/favicon-32x32.png', rel: 'icon', sizes: '32x32' },
      { url: '/icons/favicon-96x96.png', rel: 'icon', sizes: '96x96' },
      { url: '/icons/favicon-16x16.png', rel: 'icon', sizes: '16x16' }
    ],
    apple: [
      { url: '/icons/apple-icon-57x57.png', rel: 'apple-touch-icon', sizes: '57x57' },
      { url: '/icons/apple-icon-60x60.png', rel: 'apple-touch-icon', sizes: '60x60' },
      { url: '/icons/apple-icon-72x72.png', rel: 'apple-touch-icon', sizes: '72x72' },
      { url: '/icons/apple-icon-76x76.png', rel: 'apple-touch-icon', sizes: '76x76' },
      { url: '/icons/apple-icon-114x114.png', rel: 'apple-touch-icon', sizes: '114x114' },
      { url: '/icons/apple-icon-120x120.png', rel: 'apple-touch-icon', sizes: '120x120' },
      { url: '/icons/apple-icon-144x144.png', rel: 'apple-touch-icon', sizes: '144x144' },
      { url: '/icons/apple-icon-152x152.png', rel: 'apple-touch-icon', sizes: '152x152' },
      { url: '/icons/apple-icon-180x180.png', rel: 'apple-touch-icon', sizes: '180x180' }
    ],
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/icons/apple-icon-precomposed.png'
    }
  },
  manifest: `/manifest.webmanifest`
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans text-foreground antialiased',
          fontSans.className,
          fontMono.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          disableTransitionOnChange
          enableSystem
        >
          <div className='relative flex min-h-screen flex-col'>
            <Header />
            <main className='flex flex-1'>
              <Sidebar />
              <PageWrapper>{children}</PageWrapper>
            </main>
            <Footer>
              Built by{' '}
              <Link
                className='underline'
                href={siteConfig.links.github}
                rel='noreferrer'
                target='_blank'
              >
                mkas3
              </Link>
              .
            </Footer>
          </div>
          <ScreenIndicator />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
