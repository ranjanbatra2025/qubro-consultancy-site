
import './globals.css';
import { Inter } from 'next/font/google';
import ClientLayout from './ClientLayout';
import { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Absolute AI - Excellence in GenAI, Agentic Systems, Data Engineering',
    template: '%s | Absolute AI',
  },
  description: 'Absolute AI delivers cutting-edge AI solutions, specializing in GenAI, agentic systems, and data engineering for global clients.',
  keywords: ['AI', 'GenAI', 'agentic systems', 'data engineering', 'Absolute AI'],
  openGraph: {
    title: 'Absolute AI',
    description: 'Innovative AI solutions for businesses worldwide.',
    url: 'https://www.absoluteai.co',
    siteName: 'Absolute AI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@AbsoluteAI',
  },
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
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
