import './globals.css';
import { Cormorant_Garamond, Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans-brand',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif-brand',
  display: 'swap',
});

export const metadata = {
  title: 'PositiEV Mobility — India\'s EV Distribution & Leasing Partner',
  description:
    "India's leading tech-enabled EV distribution and leasing company. We power dealer networks, OEM reach, and EV fleet backends through an integrated operating lease, charging, and maintenance platform.",
  keywords: [
    'EV distribution India',
    'EV leasing',
    'dealer franchise EV',
    'operating lease EV',
    'EV fleet management',
    'DLF franchise',
    'EV charging infrastructure',
    'PositiEV Mobility',
  ],
  openGraph: {
    title: 'PositiEV Mobility',
    description: 'Redefining EV mobility in India — lease, charge, and maintain, all in one.',
    url: 'https://www.positievmobility.com',
    siteName: 'PositiEV Mobility',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable}`}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}

