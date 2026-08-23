'use client';

import { CheckCircle } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-primary-charcoal to-primary-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="animate-fade-up">
            <p className="text-accent-gold font-semibold tracking-widest mb-4">ABOUT US</p>
            <h2 className="text-section-title font-serif font-bold text-text-primary mb-6">
              Leading the Property Management Revolution
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              Founded with a mission to simplify property management, Le Lörd Homes brings professional expertise and innovative solutions to landlords and investors across the UK.
            </p>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              Our team combines years of property market experience with deep knowledge of HMO regulations, short-term rental optimization, and investment strategy. We believe every property owner deserves access to world-class management solutions.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Expert property management consultancy',
                'HMO compliance and regulatory expertise',
                'Proven Airbnb and short-term rental optimization',
                'Comprehensive tenant sourcing and vetting',
                'Investment strategy and deal sourcing',
                'Personalized support for every client',
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
                  <span className="text-text-muted">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#consultations"
              className="inline-block px-8 py-4 bg-accent-gold text-primary-dark font-bold rounded-lg hover:bg-accent-bronze transition-all hover:scale-105"
            >
              Get Started Today
            </a>
          </div>

          {/* Right side - Image placeholder */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative w-full aspect-square bg-gradient-to-br from-primary-dark to-primary-charcoal rounded-lg border border-secondary-charcoal flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 to-accent-gold/5" />
              <div className="relative z-10 text-center">
                <div className="text-6xl mb-4">🏢</div>
                <p className="text-text-muted">Premium Property Solutions</p>
                <p className="text-sm text-text-muted mt-2">[Future: About section hero image]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
