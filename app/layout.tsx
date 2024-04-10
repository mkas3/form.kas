import type { Metadata, Viewport } from 'next';

import { siteConfig } from '@/config/site';
import { fontMono, fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { Link } from '@/components/ui/link';
import { PageWrapper } from '@/components/ui/page-wrapper';
import { Toaster } from '@/components/ui/sonner';
import { Footer } from '@/app/_components/footer';

import { Header } from './_components/header';
import { ThemeProvider } from './_components/theme-provider';

import './globals.css';

import { ScreenIndicator } from './_components/screen-indicator';
import { Sidebar } from './_components/sidebar';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: 'App for form examples',
  keywords: [
    'shadcn/ui',
    'Forms',
    'Zod',
    'Next.js',
    'React',
    'Tailwind CSS',
    'Radix UI',
  ],
  authors: [
    {
      name: 'mkas3',
      url: siteConfig.links.github,
    },
  ],
  creator: 'mkas3',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteConfig.url,
    title: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 150,
        height: 150,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: 'mkas3',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
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
          enableSystem
          disableTransitionOnChange
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
                target='_blank'
                rel='noreferrer'
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
}
