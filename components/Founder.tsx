'use client';

import { Mail, Linkedin } from 'lucide-react';

export function Founder() {
  return (
    <section className="section-padding bg-primary-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-accent-gold font-semibold tracking-widest mb-4">FOUNDER</p>
          <h2 className="text-section-title font-serif font-bold text-text-primary">
            Meet Isaac Umoren
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Founder Image */}
          <div className="lg:col-span-1 animate-fade-up">
            <div className="relative w-full aspect-square bg-gradient-to-br from-primary-charcoal to-secondary-charcoal rounded-lg border-2 border-accent-gold/30 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/10 to-transparent" />
              <div className="relative z-10 text-center">
                <div className="text-7xl mb-4">👤</div>
                <p className="text-text-muted text-sm">[Founder portrait to be added]</p>
              </div>
            </div>
          </div>

          {/* Founder Bio */}
          <div className="lg:col-span-2 animate-fade-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              Isaac Umoren
            </h3>
            <p className="text-accent-gold font-semibold mb-6">
              Founder & Property Investment Consultant
            </p>

            <div className="space-y-6 text-text-muted leading-relaxed">
              <p>
                Isaac Umoren is a seasoned property investment consultant with extensive experience in the UK rental market. His passion for simplifying property management led to the founding of Le Lörd Homes.
              </p>
              <p>
                With a deep understanding of HMO regulations, Airbnb optimization, and investment strategy, Isaac has helped numerous landlords and investors maximize their property returns while maintaining compliance and minimizing operational complexity.
              </p>
              <p>
                Beyond property consulting, Isaac is committed to mentoring new investors and sharing knowledge that empowers property owners to make confident, informed decisions about their portfolios.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="mailto:isaac@lelord.homes"
                className="flex items-center space-x-2 px-6 py-3 border-2 border-accent-gold text-accent-gold font-semibold rounded-lg hover:bg-accent-gold/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Connect via Email</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 border-2 border-accent-gold text-accent-gold font-semibold rounded-lg hover:bg-accent-gold/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
