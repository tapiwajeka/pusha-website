'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Palette, Plane, Leaf, MessageSquare, Shield, Sparkles, HardHat, Scale, Code2, Languages } from 'lucide-react';
import { companies } from '@/data/companies';
import Container from '@/components/ui/Container';

const iconMap: Record<string, React.ElementType> = {
  Palette, Plane, Leaf, MessageSquare, Shield, Sparkles, HardHat, Scale, Code2, Languages,
};

// Duplicate so the marquee loops without gaps
const marqueeItems = [...companies, ...companies];

export default function EcosystemGrid() {
  return (
    <section className="bg-white py-20" id="companies">
      {/* Section header */}
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#E10600] border border-[#E10600]/20 bg-red-50 px-4 py-1.5 rounded-full mb-4">
            Our Companies
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111] mb-4">
            The Pusha{' '}
            <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A group of companies operating across different business verticals — united by a common mission to push forward.
          </p>
        </motion.div>
      </Container>

      {/* Marquee — intentionally breaks out of Container for full-bleed effect */}
      <div className="relative overflow-hidden mt-4">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

        <div className="flex gap-5 w-max animate-marquee hover:[animation-play-state:paused]">
          {marqueeItems.map((company, i) => {
            const Icon = iconMap[company.icon] || Palette;
            return (
              <a
                key={`${company.id}-${i}`}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-shrink-0 flex items-center justify-center bg-[#F5F5F5] rounded-2xl px-8 py-6 w-64 h-40 transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1.5"
                style={{'--brand': company.color} as React.CSSProperties}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.outline = `2px solid ${company.color}40`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.outline = 'none';
                }}
              >
                {/* Logo / icon */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {company.logo ? (
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <Icon className="w-14 h-14" style={{ color: company.color }} />
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
