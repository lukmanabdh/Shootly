import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geist = localFont({
  src: '../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2',
  variable: '--font-geist',
  weight: '100 900',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shotly — HDR Real Estate Photography App for Android',
  description:
    'Shotly automatically brackets and merges exposures into professional, window-lit interior photos — entirely on your Android phone. No desktop software required.',
  metadataBase: new URL('https://shootlyapp.net'),
  alternates: { canonical: 'https://shootlyapp.net' },
  openGraph: {
    title: 'Shotly — HDR Real Estate Photography App for Android',
    description:
      'Professional interior HDR photos from your Android phone. Built for real estate agents, Airbnb hosts, and property photographers.',
    url: 'https://shootlyapp.net',
    siteName: 'Shotly',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shotly — HDR Real Estate Photography App for Android',
    description:
      'Professional interior HDR photos from your Android phone. No desktop software required.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Shotly',
  description:
    'Shotly automatically brackets exposures and merges them into balanced, window-lit interior shots on Android — no desktop editing required. Built for real estate agents, Airbnb hosts, and property photographers.',
  operatingSystem: 'Android',
  applicationCategory: 'PhotographyApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free to download. Pay per exported shot.',
  },
  url: 'https://shootlyapp.net',
  sameAs: ['https://shootlyapp.net'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
