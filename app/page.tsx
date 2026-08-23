'use client';

import { Hero } from '@/components/Hero';
import { BrandStatement } from '@/components/BrandStatement';
import { Services } from '@/components/Services';
import { Consultations } from '@/components/Consultations';
import { About } from '@/components/About';
import { Founder } from '@/components/Founder';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BrandStatement />
      <Services />
      <Consultations />
      <About />
      <Founder />
      <Testimonials />
      <Contact />
    </main>
  );
}
