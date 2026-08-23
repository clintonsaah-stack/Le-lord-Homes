'use client';

import { CONTACT_CONFIG, WHATSAPP_MESSAGES } from '@/lib/constants';
import { generateWhatsAppLink } from '@/lib/utils';
import { Mail, Phone, MapPin, MessageCircle, Instagram } from 'lucide-react';

export function Contact() {
  const whatsappLink = generateWhatsAppLink(
    WHATSAPP_MESSAGES.default,
    CONTACT_CONFIG.whatsapp
  );

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-primary-charcoal to-primary-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent-gold font-semibold tracking-widest mb-4">CONTACT US</p>
          <h2 className="text-section-title font-serif font-bold text-text-primary">
            Let's Discuss Your Property Goals
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mt-6">
            Reach out to our team to explore how Le Lörd Homes can support your property journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Phone */}
          <a
            href={`tel:${CONTACT_CONFIG.phone.replace(/[^0-9+]/g, '')}`}
            className="group p-8 bg-primary-dark border border-secondary-charcoal rounded-lg hover:border-accent-gold/50 transition-all hover:scale-105 text-center animate-fade-up"
          >
            <div className="inline-block p-4 bg-accent-gold/20 rounded-lg mb-4 group-hover:bg-accent-gold/30 transition-colors">
              <Phone className="w-6 h-6 text-accent-gold" />
            </div>
            <h3 className="font-bold text-text-primary mb-2">Phone</h3>
            <p className="text-text-muted text-sm">{CONTACT_CONFIG.phone}</p>
          </a>

          {/* Email */}
          <a
            href={`mailto:${CONTACT_CONFIG.email}`}
            className="group p-8 bg-primary-dark border border-secondary-charcoal rounded-lg hover:border-accent-gold/50 transition-all hover:scale-105 text-center animate-fade-up"
            style={{ animationDelay: '100ms' }}
          >
            <div className="inline-block p-4 bg-accent-gold/20 rounded-lg mb-4 group-hover:bg-accent-gold/30 transition-colors">
              <Mail className="w-6 h-6 text-accent-gold" />
            </div>
            <h3 className="font-bold text-text-primary mb-2">Email</h3>
            <p className="text-text-muted text-sm">{CONTACT_CONFIG.email}</p>
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 bg-primary-dark border border-secondary-charcoal rounded-lg hover:border-accent-gold/50 transition-all hover:scale-105 text-center animate-fade-up"
            style={{ animationDelay: '200ms' }}
          >
            <div className="inline-block p-4 bg-accent-gold/20 rounded-lg mb-4 group-hover:bg-accent-gold/30 transition-colors">
              <MessageCircle className="w-6 h-6 text-accent-gold" />
            </div>
            <h3 className="font-bold text-text-primary mb-2">WhatsApp</h3>
            <p className="text-text-muted text-sm">Chat with us instantly</p>
          </a>

          {/* Instagram */}
          <a
            href={CONTACT_CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 bg-primary-dark border border-secondary-charcoal rounded-lg hover:border-accent-gold/50 transition-all hover:scale-105 text-center animate-fade-up"
            style={{ animationDelay: '300ms' }}
          >
            <div className="inline-block p-4 bg-accent-gold/20 rounded-lg mb-4 group-hover:bg-accent-gold/30 transition-colors">
              <Instagram className="w-6 h-6 text-accent-gold" />
            </div>
            <h3 className="font-bold text-text-primary mb-2">Instagram</h3>
            <p className="text-text-muted text-sm">Follow our updates</p>
          </a>
        </div>

        {/* Enquiry Form */}
        <div className="max-w-2xl mx-auto bg-primary-charcoal border border-secondary-charcoal rounded-lg p-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <h3 className="text-2xl font-bold text-text-primary mb-6">Property Enquiry Form</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-primary-dark border border-secondary-charcoal rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-gold transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-primary-dark border border-secondary-charcoal rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-gold transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-primary-dark border border-secondary-charcoal rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-gold transition-colors"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Property Type *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 bg-primary-dark border border-secondary-charcoal rounded-lg text-text-primary focus:outline-none focus:border-accent-gold transition-colors"
                >
                  <option value="">Select a property type</option>
                  <option value="hmo">HMO</option>
                  <option value="btl">Buy-to-Let</option>
                  <option value="serviced">Serviced Accommodation</option>
                  <option value="airbnb">Airbnb/Short-term</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">
                What services are you interested in? *
              </label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-3 bg-primary-dark border border-secondary-charcoal rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-gold transition-colors resize-none"
                placeholder="Tell us about your property and what you're looking for..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-accent-gold text-primary-dark font-bold rounded-lg hover:bg-accent-bronze transition-all hover:scale-105"
            >
              Submit Enquiry
            </button>

            <p className="text-xs text-text-muted text-center">
              We'll get back to you within 24 hours. Alternatively, chat with us on WhatsApp for instant support.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
