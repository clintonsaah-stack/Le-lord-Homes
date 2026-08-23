'use client';

import { SERVICES, WHATSAPP_MESSAGES, CONTACT_CONFIG } from '@/lib/constants';
import { generateWhatsAppLink } from '@/lib/utils';
import {
  Building2,
  Search,
  Briefcase,
  Home,
  Globe,
  Users,
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Building2,
  Search,
  Briefcase,
  Home,
  Globe,
  Users,
};

export function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-primary-dark"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent-gold font-semibold tracking-widest mb-4">OUR SERVICES</p>
          <h2 className="text-section-title font-serif font-bold text-text-primary">
            Comprehensive Property Solutions
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mt-6">
            Tailored services designed to address every aspect of property ownership and investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            const whatsappLink = generateWhatsAppLink(
              WHATSAPP_MESSAGES[service.id as keyof typeof WHATSAPP_MESSAGES] ||
                WHATSAPP_MESSAGES.default,
              CONTACT_CONFIG.whatsapp
            );

            return (
              <a
                key={service.id}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-8 bg-gradient-to-br from-primary-charcoal to-secondary-charcoal rounded-lg border border-secondary-charcoal hover:border-accent-gold/50 transition-all hover:scale-105 cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/0 to-accent-gold/0 group-hover:from-accent-gold/10 group-hover:to-accent-gold/5 rounded-lg transition-all" />

                <div className="relative z-10">
                  <div className="inline-block p-3 bg-accent-gold/20 rounded-lg mb-4 group-hover:bg-accent-gold/30 transition-colors">
                    {Icon && (
                      <Icon className="w-6 h-6 text-accent-gold" />
                    )}
                  </div>

                  <div className="text-sm text-accent-gold font-semibold mb-2">
                    {service.number}
                  </div>

                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {service.title}
                  </h3>

                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="flex items-center text-accent-gold font-semibold text-sm group-hover:translate-x-2 transition-transform">
                    Learn More
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
