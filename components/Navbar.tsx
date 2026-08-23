'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/95 backdrop-blur-md border-b border-secondary-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-2">
            <div className="text-2xl font-bold font-serif">
              <span className="text-accent-gold">Le</span>
              <span className="text-text-primary"> Lörd</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-text-secondary hover:text-accent-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-6 py-2 bg-accent-gold text-primary-dark font-semibold rounded-lg hover:bg-accent-bronze transition-colors"
          >
            Chat Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-accent-gold"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4 animate-fade-in">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm font-medium text-text-secondary hover:text-accent-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 py-2 bg-accent-gold text-primary-dark font-semibold rounded-lg hover:bg-accent-bronze transition-colors text-center"
            >
              Chat Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
