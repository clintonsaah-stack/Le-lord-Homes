'use client';

import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: '[Client Name - Testimonial Pending]',
    role: 'HMO Property Owner',
    content: '[Genuine client testimonial to be added. Share your experience with Le Lörd Homes services]',
    rating: 5,
  },
  {
    id: 2,
    name: '[Client Name - Testimonial Pending]',
    role: 'Airbnb Host',
    content: '[Genuine client testimonial to be added. Tell us how we helped your property business grow]',
    rating: 5,
  },
  {
    id: 3,
    name: '[Client Name - Testimonial Pending]',
    role: 'Buy-to-Let Investor',
    content: '[Genuine client testimonial to be added. Share your property management success story]',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-primary-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent-gold font-semibold tracking-widest mb-4">TESTIMONIALS</p>
          <h2 className="text-section-title font-serif font-bold text-text-primary">
            Trusted by Property Owners
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mt-6">
            Real experiences from landlords and investors who have partnered with Le Lörd Homes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="p-8 bg-primary-charcoal rounded-lg border border-secondary-charcoal hover:border-accent-gold/50 transition-all animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent-gold text-accent-gold" />
                ))}
              </div>

              <p className="text-text-muted mb-6 leading-relaxed">
                {testimonial.content}
              </p>

              <div>
                <p className="font-semibold text-text-primary">{testimonial.name}</p>
                <p className="text-accent-gold text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-secondary-charcoal rounded-lg text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-text-primary mb-4">Ready to Share Your Success?</h3>
          <p className="text-text-muted mb-6">
            If you've worked with Le Lörd Homes, we'd love to hear about your experience. Your feedback helps other property owners make confident decisions.
          </p>
          <a
            href="mailto:testimonials@lelord.homes"
            className="inline-block px-8 py-3 bg-accent-gold text-primary-dark font-bold rounded-lg hover:bg-accent-bronze transition-colors"
          >
            Submit Your Testimonial
          </a>
        </div>
      </div>
    </section>
  );
}
