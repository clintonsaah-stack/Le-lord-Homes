import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Le Lörd Homes | Property Management & Investment Consultancy',
  description: 'Expert property management and consultancy solutions for landlords and investors. HMO management, Airbnb optimization, tenant placement, and investment strategy.',
  keywords: 'property management, HMO management, Airbnb, landlord consultancy, property investment',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Le Lörd Homes | Property Management & Investment Consultancy',
    description: 'Premium property solutions for UK landlords and investors',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1a1a1a" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏠</text></svg>" />
      </head>
      <body className="bg-primary-dark text-text-primary">
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
