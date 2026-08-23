'use client';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-charcoal to-primary-dark" />
      
      {/* Accent circles */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        <div className="animate-fade-up space-y-6">
          <div className="inline-block px-4 py-2 bg-secondary-charcoal rounded-full border border-accent-gold/30">
            <span className="text-accent-gold text-sm font-semibold">PREMIUM PROPERTY SOLUTIONS</span>
          </div>

          <h1 className="text-hero font-serif font-bold text-text-primary leading-tight">
            Property Made <span className="text-accent-gold">Easier</span>
          </h1>

          <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Expert consultancy and management solutions for landlords, investors, and property owners. From HMO management to Airbnb optimization, we handle it all.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-accent-gold text-primary-dark font-bold rounded-lg hover:bg-accent-bronze transition-all hover:scale-105 shadow-lg"
            >
              Start Your Journey
            </a>
            <a
              href="#consultations"
              className="px-8 py-4 border-2 border-accent-gold text-accent-gold font-bold rounded-lg hover:bg-accent-gold/10 transition-all"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent-gold rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent-gold rounded-full" />
        </div>
      </div>
    </section>
  );
}
