'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Building2, Layers, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';

interface StatCard {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  color: string;
}

const stats: StatCard[] = [
  {
    icon: Building2,
    value: 10,
    suffix: '+',
    label: 'Companies',
    sublabel: 'Active companies across the group',
    color: '#E10600',
  },
  {
    icon: Layers,
    value: 9,
    suffix: '+',
    label: 'Industries',
    sublabel: 'Branding, Travel, Tech, Security & more',
    color: '#111111',
  },
  {
    icon: TrendingUp,
    value: 3,
    suffix: ' Brands',
    label: 'Brand Groups',
    sublabel: 'Pusha, Sentriqo and Bytewave',
    color: '#E10600',
  },
  {
    icon: MapPin,
    value: 1,
    suffix: '',
    label: 'Zimbabwe Based',
    sublabel: 'Proudly headquartered in Harare',
    color: '#111111',
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function VisionSection() {
  return (
    <section className="bg-[#111827] py-24 overflow-hidden">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#E10600] border border-[#E10600]/30 bg-[#E10600]/10 px-4 py-1.5 rounded-full mb-4">
            Vision & Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Built to{' '}
            <span className="gradient-text">Scale</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Numbers that reflect our ambition and the foundations we&apos;re building.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative bg-white/5 border border-white/10 rounded-3xl p-6 overflow-hidden group hover:bg-white/8 transition-all duration-300 hover:border-white/20"
              >
                {/* bg accent */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 -translate-y-6 translate-x-6"
                  style={{ backgroundColor: stat.color }}
                />

                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>

                <div
                  className="text-4xl font-extrabold mb-1"
                  style={{ color: stat.color }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                <div className="text-white font-bold text-lg mb-1">{stat.label}</div>
                <div className="text-gray-500 text-sm leading-relaxed">{stat.sublabel}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Vision statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-[#E10600]/20 via-[#111111] to-[#FF3B30]/20 border border-white/10 rounded-3xl p-8 md:p-12 text-center overflow-hidden"
        >
          {/* decorative orbs */}
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#E10600] rounded-full blur-3xl opacity-20 pointer-events-none" />
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#FF3B30] rounded-full blur-3xl opacity-20 pointer-events-none" />

          <div className="relative">
            <p className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
              &ldquo;Our vision is to become{' '}
              <span className="gradient-text">Africa&apos;s most dynamic</span>{' '}
              multi-vertical entrepreneurial ecosystem.&rdquo;
            </p>
            <p className="text-gray-400 text-lg">
              — The Pusha Team, Harare Zimbabwe
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
