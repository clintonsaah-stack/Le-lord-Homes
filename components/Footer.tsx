'use client';

import Link from 'next/link';
import { CONTACT_CONFIG, NAV_ITEMS } from '@/lib/constants';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-charcoal border-t border-secondary-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="#home" className="flex items-center space-x-2">
              <div className="text-2xl font-bold font-serif">
                <span className="text-accent-gold">Le</span>
                <span className="text-text-primary"> Lörd</span>
              </div>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed">
              Premium property management and consultancy solutions for landlords and investors.
            </p>
            <div className="flex space-x-4">
              <a
                href={CONTACT_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-accent-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 text-text-muted hover:text-accent-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 text-text-muted hover:text-accent-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-text-muted hover:text-accent-gold transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li><a href="#services" className="hover:text-accent-gold transition-colors">HMO Management</a></li>
              <li><a href="#services" className="hover:text-accent-gold transition-colors">Deal Sourcing</a></li>
              <li><a href="#services" className="hover:text-accent-gold transition-colors">Property Consultancy</a></li>
              <li><a href="#services" className="hover:text-accent-gold transition-colors">Airbnb Optimization</a></li>
              <li><a href="#services" className="hover:text-accent-gold transition-colors">Tenant Placement</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li>
                <a href={`mailto:${CONTACT_CONFIG.email}`} className="hover:text-accent-gold transition-colors">
                  {CONTACT_CONFIG.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_CONFIG.phone}`} className="hover:text-accent-gold transition-colors">
                  {CONTACT_CONFIG.phone}
                </a>
              </li>
              <li className="text-text-muted">
                Available Monday - Friday, 9am - 6pm
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-charcoal my-8" />

        {/* Bottom footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-text-muted">
          <p>&copy; {currentYear} Le Lörd Homes. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-accent-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent-gold transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
