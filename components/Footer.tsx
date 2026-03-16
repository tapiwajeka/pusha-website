'use client';

import { motion } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  Palette,
  Plane,
  Leaf,
  MessageSquare,
  Shield,
  Sparkles,
  HardHat,
  Scale,
  Code2,
  Languages,
} from 'lucide-react';
import Logo from '@/components/ui/Logo';
import Container from '@/components/ui/Container';
import { companies } from '@/data/companies';

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Plane,
  Leaf,
  MessageSquare,
  Shield,
  Sparkles,
  HardHat,
  Scale,
  Code2,
  Languages,
};

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0d1117] text-white">
      {/* Main footer content */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo size="md" onDark className="mb-4" />
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Pusha is a network of innovative businesses driven by entrepreneurship,
              innovation, and African ambition.
            </p>

            {/* Social / contact quick links */}
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5 text-sm">
                <MapPin className="w-4 h-4 text-[#E10600] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  No.150 Upper Road East, Mt Pleasant,
                  <br />
                  Harare, Zimbabwe
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <Mail className="w-4 h-4 text-[#E10600] flex-shrink-0" />
                <a
                  href="mailto:sales@pushaunlimited.com"
                  className="text-gray-400 hover:text-[#E10600] transition-colors"
                >
                  sales@pushaunlimited.com
                </a>
              </div>
              <div className="flex flex-col gap-1">
                {['+263 781 111 696', '+263 714 844 560', '+263 242 783 063'].map((tel) => (
                  <div key={tel} className="flex items-center gap-2.5 text-sm">
                    <Phone className="w-4 h-4 text-[#E10600] flex-shrink-0" />
                    <a
                      href={`tel:${tel.replace(/\s/g, '')}`}
                      className="text-gray-400 hover:text-[#E10600] transition-colors"
                    >
                      {tel}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-500 hover:text-[#E10600] text-sm transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Companies */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Our Companies
            </h4>
            <ul className="space-y-3">
              {companies.map((company) => {
                const Icon = iconMap[company.icon] || Palette;
                return (
                  <li key={company.id}>
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-500 hover:text-[#E10600] text-sm transition-colors duration-200 group"
                    >
                      <Icon
                        className="w-3.5 h-3.5 group-hover:text-[#E10600] transition-colors"
                        style={{ color: company.color }}
                      />
                      {company.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter / contact CTA */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Get In Touch
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Have a project or partnership idea? We&apos;d love to hear from you.
            </p>
            <a
              href="mailto:sales@pushaunlimited.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-[#E10600] to-[#FF3B30] px-5 py-2.5 rounded-xl hover:from-[#B70500] hover:to-[#E10600] transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30 hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>

            <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs text-gray-500 leading-relaxed">
                <span className="text-[#E10600] font-semibold">pusha.co.zw</span>
                {' '}— Gateway to the Pusha ecosystem. Each company operates independently at
                its own subdomain.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Pusha Unlimited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service'].map((label) => (
              <a
                key={label}
                href="#"
                className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <p className="text-gray-700 text-xs">
            Built in <span className="text-[#E10600]">Zimbabwe</span> 🇿🇼
          </p>
        </Container>
        <Container className="py-3 flex justify-center border-t border-white/5">
          <p className="text-gray-600 text-xs">
            Developed by{' '}
            <a
              href="https://www.dataage.co.zw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#E10600] transition-colors"
            >
              Data Age Solutions
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
