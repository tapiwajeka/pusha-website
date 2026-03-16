export interface Company {
  id: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  url: string;
  icon: string;
  color: string;
  accentColor: string;
  industry: string;
  angle: number; // degrees for ecosystem visualization positioning
  logo?: string; // path relative to /public, e.g. /images/pusha-branding.png
  brand?: 'pusha' | 'sentriqo' | 'bytewave'; // parent brand group
}

export const companies: Company[] = [
  {
    id: 'branding',
    name: 'Pusha Branding',
    shortName: 'Branding',
    description: 'Corporate wear, promotional products and full business branding solutions.',
    longDescription:
      'From custom corporate wear to full-scale brand identity packages, Pusha Branding delivers premium promotional products that make businesses stand out.',
    url: 'https://branding.pusha.co.zw',
    icon: 'Palette',
    color: '#E10600',
    accentColor: '#FF3B30',
    industry: 'Branding & Design',
    angle: 315,
    logo: '/images/pusha-branding-logo.png',
    brand: 'pusha',
  },
  {
    id: 'travel',
    name: 'Pusha Travel & Tours',
    shortName: 'Travel',
    description: 'Curated travel experiences across Zimbabwe and Africa.',
    longDescription:
      'Discover breathtaking destinations with Pusha Travel & Tours. We craft unforgettable journeys across Zimbabwe and the African continent.',
    url: 'https://travel.pusha.co.zw',
    icon: 'Plane',
    color: '#FF3B30',
    accentColor: '#E10600',
    industry: 'Travel & Tourism',
    angle: 45,
    logo: '/images/pusha-travel-logo.png',
    brand: 'pusha',
  },
  {
    id: 'poultry',
    name: 'Pusha Poultry',
    shortName: 'Poultry',
    description: 'Fresh poultry, chicks and eggs raised with care.',
    longDescription:
      'Pusha Poultry delivers farm-fresh broilers, point-of-lay hens, day-old chicks, and high-quality eggs — all raised with the highest standards of care.',
    url: 'https://poultry.pusha.co.zw',
    icon: 'Leaf',
    color: '#E10600',
    accentColor: '#B70500',
    industry: 'Agriculture & Food',
    angle: 135,
    logo: '/images/pusha-poultry-logo.png',
    brand: 'pusha',
  },
  {
    id: 'sms',
    name: 'Pusha SMS',
    shortName: 'SMS',
    description: 'Enterprise bulk messaging platform for businesses and developers.',
    longDescription:
      'Power your communications with Pusha SMS — a robust bulk messaging API platform built for businesses that need reliable, scalable, and affordable messaging solutions.',
    url: 'https://sms.pusha.co.zw',
    icon: 'MessageSquare',
    color: '#FF3B30',
    accentColor: '#B70500',
    industry: 'Technology & Messaging',
    angle: 225,
    logo: '/images/pusha-sms-logo.png',
    brand: 'pusha',
  },
  {
    id: 'sentriqo-security',
    name: 'Sentriqo Security',
    shortName: 'Security',
    description: 'Professional security solutions protecting businesses, homes and assets.',
    longDescription:
      'Sentriqo Security provides end-to-end physical security services — from manned guarding and access control to CCTV surveillance — keeping people and property safe across Zimbabwe.',
    url: 'https://security.sentriqo.co.zw',
    icon: 'Shield',
    color: '#1E3A5C',
    accentColor: '#2d5282',
    industry: 'Security Services',
    angle: 0,
    logo: '/images/sentriqo-security-logo.png',
    brand: 'sentriqo',
  },
  {
    id: 'sentriqo-cleaning',
    name: 'Sentriqo Cleaning',
    shortName: 'Cleaning',
    description: 'Premium commercial and residential cleaning services.',
    longDescription:
      'Sentriqo Cleaning delivers spotless environments for offices, residences, and industrial facilities. Our trained teams use professional-grade equipment and eco-friendly products.',
    url: 'https://cleaning.sentriqo.co.zw',
    icon: 'Sparkles',
    color: '#0284C7',
    accentColor: '#0369a1',
    industry: 'Cleaning & Hygiene',
    angle: 0,
    logo: '/images/sentriqo-cleaning-logo.png',
    brand: 'sentriqo',
  },
  {
    id: 'sentriqo-home',
    name: 'Sentriqo Home Services',
    shortName: 'Home',
    description: 'Quality construction and home building services across Zimbabwe.',
    longDescription:
      'Sentriqo Home Services builds quality homes and handles all aspects of residential construction — from architectural design to turnkey delivery. Your dream home, built with precision.',
    url: 'https://homes.sentriqo.co.zw',
    icon: 'HardHat',
    color: '#D97706',
    accentColor: '#b45309',
    industry: 'Construction & Housing',
    angle: 0,
    logo: '/images/sentriqo-construction-logo.png',
    brand: 'sentriqo',
  },
  {
    id: 'pusha-consulting',
    name: 'Pusha Consulting',
    shortName: 'Legal',
    description: 'Expert legal advisory, compliance and business consulting services.',
    longDescription:
      'Pusha Consulting is your trusted legal and business advisory partner. From company registration and contract drafting to corporate governance, we help businesses operate with confidence and compliance.',
    url: 'https://consulting.pusha.co.zw',
    icon: 'Scale',
    color: '#7C3AED',
    accentColor: '#6d28d9',
    industry: 'Legal & Consulting',
    angle: 0,
    logo: '/images/pusha-consulting-logo.png',
    brand: 'pusha',
  },
  {
    id: 'bytewave',
    name: 'Bytewave',
    shortName: 'Bytewave',
    description: 'Software consulting and custom digital solutions for modern businesses.',
    longDescription:
      'Bytewave is a software consulting firm building cutting-edge digital products — from web and mobile applications to enterprise systems and API integrations — helping businesses ride the wave of technology.',
    url: 'https://bytewave.co.zw',
    icon: 'Code2',
    color: '#0891B2',
    accentColor: '#0e7490',
    industry: 'Software & Technology',
    angle: 0,
    logo: '/images/bytewave-logo.png',
    brand: 'bytewave',
  },
  {
    id: 'translate',
    name: 'Pusha Translate',
    shortName: 'Translate',
    description: 'Professional translation and language services for businesses and individuals.',
    longDescription:
      'Pusha Translate delivers accurate, culturally aware translation services across dozens of languages — bridging communication gaps for businesses, legal documents, and personal correspondence.',
    url: 'https://translate.pusha.co.zw',
    icon: 'Languages',
    color: '#E10600',
    accentColor: '#FF3B30',
    industry: 'Language & Translation',
    angle: 0,
    logo: '/images/pusha-translate-logo.png',
    brand: 'pusha',
  },
];

export const ecosystemStats = [
  { label: 'Businesses', value: 10, suffix: '+' },
  { label: 'Industries', value: 9, suffix: '+' },
  { label: 'Growing Ecosystem', value: 3, suffix: ' Brands' },
  { label: 'Zimbabwe Based', value: 1, suffix: '' },
];

