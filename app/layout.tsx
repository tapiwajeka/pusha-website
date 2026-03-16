import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Pusha | Empowering African Hustles',
  description:
    'Discover the Pusha ecosystem — a network of innovative businesses including branding, travel, poultry, and SMS solutions based in Zimbabwe.',
  keywords: [
    'Pusha',
    'Pusha Branding',
    'Pusha Travel',
    'Pusha Poultry',
    'Pusha SMS',
    'Zimbabwe business',
    'African startup',
    'ecosystem',
  ],
  authors: [{ name: 'Pusha Unlimited', url: 'https://pusha.co.zw' }],
  creator: 'Pusha Unlimited',
  metadataBase: new URL('https://pusha.co.zw'),
  openGraph: {
    type: 'website',
    locale: 'en_ZW',
    url: 'https://pusha.co.zw',
    title: 'Pusha | Empowering African Hustles',
    description:
      'A network of ventures pushing innovation forward across industries. Built with ambition. Driven by purpose.',
    siteName: 'Pusha',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pusha | Empowering African Hustles',
    description:
      'A network of ventures pushing innovation forward across industries.',
    creator: '@pushaecosystem',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
