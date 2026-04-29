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
  title: 'Positiev',
  description: 'Positiev web app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable}`}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}

