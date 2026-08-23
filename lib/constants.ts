// Navigation items
export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Consultations', href: '#consultations' },
  { label: 'Contact', href: '#contact' },
];

// Contact configuration
export const CONTACT_CONFIG = {
  whatsapp: '+[PLACEHOLDER: Add WhatsApp number with country code, e.g., +447700000000]',
  phone: '+[PLACEHOLDER: Add business phone number]',
  email: '[PLACEHOLDER: Add business email address]',
  instagram: 'https://instagram.com/[PLACEHOLDER: Add Instagram handle]',
};

// WhatsApp message templates
export const WHATSAPP_MESSAGES = {
  default: 'Hi Le Lörd Homes, I\'d like to learn more about your services.',
  hmo: 'Hi, I\'m interested in your HMO management services. Can we discuss my property?',
  deal_sourcing: 'Hello, I\'m looking for property investment opportunities. Tell me more about your deal sourcing service.',
  consultancy: 'Hi, I need expert property consultancy advice. What packages do you offer?',
  airbnb: 'I\'m interested in optimizing my Airbnb property. Can we discuss your optimization service?',
  tenant_placement: 'Hello, I need help sourcing quality tenants. Do you offer this service?',
  strategy: 'Hi, I\'d like to discuss my property investment strategy with your team.',
};

// Services
export const SERVICES = [
  {
    id: 'hmo',
    number: '01',
    title: 'HMO Management',
    description: 'Complete HMO compliance, tenant management, and regulatory expertise to maximize your rental income while staying compliant.',
    icon: 'Building2',
  },
  {
    id: 'deal_sourcing',
    number: '02',
    title: 'Deal Sourcing',
    description: 'Access curated property investment opportunities aligned with your portfolio goals and investment criteria.',
    icon: 'Search',
  },
  {
    id: 'consultancy',
    number: '03',
    title: 'Property Consultancy',
    description: 'Strategic guidance on property investment, portfolio optimization, and long-term wealth building through real estate.',
    icon: 'Briefcase',
  },
  {
    id: 'airbnb',
    number: '04',
    title: 'Airbnb Optimization',
    description: 'Maximize your short-term rental income with proven strategies for listings, pricing, and guest management.',
    icon: 'Globe',
  },
  {
    id: 'tenant_placement',
    number: '05',
    title: 'Tenant Placement',
    description: 'Thorough tenant sourcing and vetting to ensure quality occupiers and minimize void periods.',
    icon: 'Users',
  },
  {
    id: 'strategy',
    number: '06',
    title: 'Investment Strategy',
    description: 'Personalized strategy sessions to align your property portfolio with financial goals and market opportunities.',
    icon: 'Home',
  },
];

// Consultation packages
export const CONSULTATIONS = [
  {
    id: 1,
    title: 'Quick Consultation',
    duration: '30 minutes',
    price: 'Free',
    cta: 'Book Free Session',
    description: 'Perfect for quick questions or first-time property owners. Get initial guidance on your property needs and explore how we can help.',
  },
  {
    id: 2,
    title: 'Property Review',
    duration: '60 minutes',
    price: '£50',
    cta: 'Book Now',
    description: 'Deep-dive analysis of your current property setup, performance metrics, and actionable recommendations for improvement.',
  },
  {
    id: 3,
    title: 'Strategy Session',
    duration: '90 minutes',
    price: '£85',
    cta: 'Book Now',
    description: 'Comprehensive property portfolio strategy, investment planning, and a detailed action plan customized to your goals.',
  },
];