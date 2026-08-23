'use client';

import { CONSULTATIONS, CONTACT_CONFIG } from '@/lib/constants';
import { generateWhatsAppLink } from '@/lib/utils';
import { Check } from 'lucide-react';

export function Consultations() {
  return (
    <section
      id="consultations"
      className="section-padding bg-gradient-to-b from-primary-charcoal to-primary-dark"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent-gold font-semibold tracking-widest mb-4">CONSULTATION PACKAGES</p>
          <h2 className="text-section-title font-serif font-bold text-text-primary">
            Choose Your Perfect Session
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mt-6">
            Personalized consultations tailored to your property and investment goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONSULTATIONS.map((consultation, index) => {
            const whatsappLink = generateWhatsAppLink(
              `Hi, I'm interested in booking the "${consultation.title}" session.`,
              CONTACT_CONFIG.whatsapp
            );

            const isPopular = consultation.id === 3;

            return (
              <div
                key={consultation.id}
                className={`relative group animate-fade-up ${
                  isPopular ? 'md:scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-gold text-primary-dark px-4 py-1 rounded-full text-sm font-bold">
                    POPULAR
                  </div>
                )}

                <div
                  className={`relative h-full p-8 rounded-lg border transition-all ${
                    isPopular
                      ? 'bg-gradient-to-br from-accent-gold/20 to-accent-gold/10 border-accent-gold'
                      : 'bg-primary-dark border-secondary-charcoal hover:border-accent-gold/50'
                  }`}
                >
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 rounded-lg ${
                      isPopular
                        ? 'bg-gradient-to-br from-accent-gold/10 to-transparent'
                        : 'bg-gradient-to-br from-accent-gold/0 group-hover:from-accent-gold/10'
                    } transition-all`}
                  />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-text-primary mb-2">
                      {consultation.title}
                    </h3>

                    <p className="text-accent-gold font-semibold mb-4">
                      {consultation.duration}
                    </p>

                    <div className="mb-6">
                      <span className="text-4xl font-bold text-text-primary">
                        {consultation.price}
                      </span>
                    </div>

                    <p className="text-text-muted text-sm leading-relaxed mb-8 min-h-[80px]">
                      {consultation.description}
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-text-muted">Expert guidance and advice</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-text-muted">Personalized strategy</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-text-muted">Action plan & next steps</span>
                      </div>
                    </div>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 px-6 rounded-lg font-bold transition-all text-center block ${
                        isPopular
                          ? 'bg-accent-gold text-primary-dark hover:bg-accent-bronze'
                          : 'border-2 border-accent-gold text-accent-gold hover:bg-accent-gold/10'
                      }`}
                    >
                      {consultation.cta}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-secondary-charcoal rounded-lg text-center animate-fade-in">
          <p className="text-text-muted mb-4">
            Not sure which package is right for you?
          </p>
          <a
            href={generateWhatsAppLink(
              'Hi Le Lörd Homes, I need help deciding which consultation package would be best for me.',
              CONTACT_CONFIG.whatsapp
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-gold font-semibold hover:text-accent-bronze transition-colors"
          >
            Chat with us to find the perfect fit →
          </a>
        </div>
      </div>
    </section>
  );
}
