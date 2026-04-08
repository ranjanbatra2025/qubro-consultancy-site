import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import ClientLayout from './ClientLayout';
import { ReactNode } from 'react';
import { getSiteUrl, siteConfig } from '../lib/site';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: getSiteUrl('/'),
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: getSiteUrl('/logos/absolute%20logo.jpeg'),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.twitter,
    creator: siteConfig.twitter,
  },
  icons: {
    icon: '/favicon.jpeg',
  },
  authors: [{ name: siteConfig.name }],
  category: 'AI Consulting',
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: getSiteUrl('/logos/absolute%20logo.jpeg'),
    email: siteConfig.email,
    sameAs: [
      'https://twitter.com/AbsoluteAI',
      'https://linkedin.com/company/AbsoluteAI',
      'https://github.com/AbsoluteAI',
      'https://www.stripe.com',
    ],
    description: siteConfig.description,
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.jpeg" type="image/jpeg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} bg-gradient-to-b from-gray-50 to-white text-gray-900 min-h-screen font-sans`}>
        <ClientLayout>
          <main className="pt-24 px-4 md:px-8 max-w-8xl mx-auto relative">
            <div className="absolute inset-0 -z-10 opacity-20 bg-gradient-to-br from-teal-500/50 via-blue-500/50 to-green-500/50 animate-gradient-flow"></div>
            {children}
          </main>
        </ClientLayout>
      </body>
    </html>
  );
}