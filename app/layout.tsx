import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Le Lörd Homes | Premium Property Solutions',
  description: 'Premium property consultancy and solutions for landlords, investors and property owners. HMO Management, Deal Sourcing, Serviced Accommodation and more.',
  keywords: 'property consultancy, HMO management, property investment, serviced accommodation, Airbnb management, tenant placement',
  openGraph: {
    title: 'Le Lörd Homes | Premium Property Solutions',
    description: 'Property Made Easier. Expert solutions for landlords, investors and property owners.',
    url: 'https://lelord.homes',
    type: 'website',
    locale: 'en_GB',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-primary-dark text-text-primary">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
