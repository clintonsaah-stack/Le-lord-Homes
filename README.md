# Le Lörd Homes

## Overview

Premium property management and investment consultancy platform for landlords and investors in the UK. Specializing in HMO management, Airbnb optimization, tenant placement, and property investment strategy.

## Features

- **Premium Design System**: Luxury black, charcoal, gold, and white color palette
- **Responsive Architecture**: Mobile-first, fully responsive design
- **Animated Components**: Smooth scroll reveals, fade-in animations, and interactive elements
- **Service Offerings**: Six comprehensive property management services
- **Consultation Packages**: Three tiered consultation options (Free, £50, £85)
- **WhatsApp Integration**: Direct messaging CTA architecture for instant communication
- **Property Enquiry Form**: Comprehensive form for potential clients
- **Founder Profile**: Isaac Umoren biography and contact options
- **Client Testimonials**: Placeholder section for genuine reviews
- **SEO Optimized**: Proper meta tags, structured data, and accessibility
- **Performance**: Next.js optimization, lazy loading, and efficient styling

## Tech Stack

- **Framework**: Next.js 14 with React 18
- **Styling**: Tailwind CSS with custom color system
- **Typography**: Inter (sans-serif) and Playfair Display (serif)
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment Ready**: Optimized for production builds

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with navigation and footer
│   ├── page.tsx            # Home page with all sections
│   ├── globals.css         # Global styles and animations
│   └── favicon.ico         # [To be updated with logo]
├── components/
│   ├── Navbar.tsx          # Navigation with mobile menu
│   ├── Hero.tsx            # Hero section
│   ├── BrandStatement.tsx   # Brand mission section
│   ├── Services.tsx        # Services showcase
│   ├── Consultations.tsx    # Consultation packages
│   ├── About.tsx           # About section
│   ├── Founder.tsx         # Founder profile
│   ├── Testimonials.tsx     # Client testimonials
│   ├── Contact.tsx         # Contact form and details
│   ├── Footer.tsx          # Footer with links
│   └── WhatsAppButton.tsx   # Floating WhatsApp CTA
├── lib/
│   ├── constants.ts        # Configuration and data
│   └── utils.ts            # Utility functions
├── public/
│   └── [assets to be added]
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies
└── README.md               # This file
```

## Configuration Placeholders

The following information needs to be supplied:

### Contact Information (lib/constants.ts)
- WhatsApp number (with country code, e.g., +447700000000)
- Business phone number
- Business email address
- Instagram handle

### Assets (public/)
- Logo image (for navbar and favicon)
- Founder photograph (Isaac Umoren)
- About section hero image

### Content
- Genuine client testimonials (Testimonials component)
- Social media links (Footer)
- Business location/service areas (Contact section)

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Update configuration placeholders
# Edit lib/constants.ts with your contact information
# Add assets to public/ folder

# Run development server
npm run dev

# Open http://localhost:3000 in browser
```

### Build for Production

```bash
# Type checking
npm run type-check

# Build
npm run build

# Start production server
npm start
```

## Color Palette

- **Primary Dark**: `#0f0f0f` (Main background)
- **Primary Charcoal**: `#1a1a1a` (Secondary background)
- **Secondary Charcoal**: `#2a2a2a` (Tertiary background)
- **Accent Gold**: `#d4af37` (Primary accent)
- **Accent Bronze**: `#b8860b` (Secondary accent)
- **Text Primary**: `#ffffff` (Main text)
- **Text Secondary**: `#e0e0e0` (Secondary text)
- **Text Muted**: `#a0a0a0` (Muted text)

## Animation System

- `animate-fade-in`: Fade in effect (0.8s)
- `animate-fade-up`: Fade in with upward movement (0.8s)
- `animate-slide-in`: Slide in from left (0.8s)
- `animate-pulse-gold`: Pulsing gold accent (2s infinite)
- `animate-bounce`: Built-in Tailwind bounce animation

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Color contrast ratios meeting WCAG AA standards
- Focus ring styling for keyboard navigation
- Form labels and error handling

## SEO

- Meta tags for title, description, and keywords
- Open Graph tags for social sharing
- Responsive meta viewport
- Semantic heading hierarchy
- Clean URL structure with hash-based navigation

## Performance Optimizations

- Next.js image optimization
- Code splitting and lazy loading
- CSS purging with Tailwind
- Font optimization with Google Fonts
- Efficient animation performance
- Mobile-optimized touch targets (min 44x44px)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- [ ] Add logo and branding assets
- [ ] Integrate email service (Nodemailer/SendGrid)
- [ ] Add form submission handling
- [ ] Implement blog/resources section
- [ ] Add team member profiles
- [ ] Integrate booking system (Calendly)
- [ ] Add client case studies
- [ ] Implement dark/light mode toggle
- [ ] Add analytics tracking (Google Analytics)
- [ ] Create mobile app version

## Support

For issues or questions, please contact: [contact information from constants.ts]

## License

All rights reserved © 2026 Le Lörd Homes
