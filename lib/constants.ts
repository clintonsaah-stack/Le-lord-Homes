// Navigation items
export const NAV_ITEMS = [
  { label: 'HOME', href: '#home' },
  { label: 'SERVICES', href: '#services' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONSULTATIONS', href: '#consultations' },
  { label: 'CONTACT', href: '#contact' },
];

// Services data
export const SERVICES = [
  {
    id: 1,
    number: '01',
    title: 'HMO Management',
    description: 'End-to-end support and management for HMO properties, from tenant sourcing to compliance and day-to-day operations.',
    icon: 'Building2',
  },
  {
    id: 2,
    number: '02',
    title: 'Deal Sourcing',
    description: 'Helping investors identify property opportunities that align with their investment goals.',
    icon: 'Search',
  },
  {
    id: 3,
    number: '03',
    title: 'Property Consultancy',
    description: 'Professional property guidance and strategy for landlords, investors and property owners.',
    icon: 'Briefcase',
  },
  {
    id: 4,
    number: '04',
    title: 'Serviced Accommodation',
    description: 'Support with setting up, operating and managing serviced-accommodation properties.',
    icon: 'Home',
  },
  {
    id: 5,
    number: '05',
    title: 'Airbnb Setup & Optimisation',
    description: 'From listing creation and presentation to pricing strategy and guest-management processes.',
    icon: 'Globe',
  },
  {
    id: 6,
    number: '06',
    title: 'Tenant Placement',
    description: 'Helping landlords source suitable tenants and reduce unnecessary void periods.',
    icon: 'Users',
  },
];

// Consultation packages
export const CONSULTATIONS = [
  {
    id: 1,
    title: 'Complimentary Discovery Call',
    duration: '15 Minutes',
    price: 'FREE',
    description: 'A short introductory conversation where the client can explain their property, goals or situation and understand how Le Lörd Homes may be able to help.',
    cta: 'BOOK A DISCOVERY CALL',
    ctaLink: '#',
  },
  {
    id: 2,
    title: 'Property Consultation',
    duration: '30 Minutes',
    price: '£50',
    description: 'Focused property advice and guidance relating to the client\'s individual situation or property.',
    cta: 'BOOK 30-MINUTE CONSULTATION',
    ctaLink: '#',
  },
  {
    id: 3,
    title: 'Property Strategy Session',
    duration: '60 Minutes',
    price: '£85',
    description: 'A deeper session for clients wanting detailed discussion, guidance and strategy around their property, investment or property-business plans.',
    cta: 'BOOK 60-MINUTE SESSION',
    ctaLink: '#',
  },
];

// Contact configuration
export const CONTACT_CONFIG = {
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+1234567890', // To be replaced with real number
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || '+44 (0) 123 456 7890',
  email: process.env.NEXT_PUBLIC_EMAIL || 'hello@lelord.homes',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/lelord.homes',
};

// WhatsApp messages
export const WHATSAPP_MESSAGES = {
  default: "Hi Le Lörd Homes, I've visited your website and I'd like to enquire about your property services.",
  hmoManagement: "Hi Le Lörd Homes, I'm interested in HMO Management and I'd like to find out more.",
  dealSourcing: "Hi Le Lörd Homes, I'm interested in Deal Sourcing and I'd like to find out more.",
  propertyConsultancy: "Hi Le Lörd Homes, I'm interested in Property Consultancy and I'd like to find out more.",
  servicedAccommodation: "Hi Le Lörd Homes, I'm interested in Serviced Accommodation and I'd like to find out more.",
  airbnbOptimisation: "Hi Le Lörd Homes, I'm interested in Airbnb Setup & Optimisation and I'd like to find out more.",
  tenantPlacement: "Hi Le Lörd Homes, I'm interested in Tenant Placement and I'd like to find out more.",
};
