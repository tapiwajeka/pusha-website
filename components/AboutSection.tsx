'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Globe, Heart } from 'lucide-react';
import Container from '@/components/ui/Container';

const pillars = [
  {
    icon: Zap,
    title: 'Push Ideas Forward',
    description: 'We take bold ideas and turn them into thriving businesses.',
    color: '#E10600',
  },
  {
    icon: Globe,
    title: 'Build Boldly',
    description: 'Every venture is crafted with ambition, resilience, and precision.',
    color: '#111111',
  },
  {
    icon: Heart,
    title: 'Serve with Excellence',
    description: 'Customers are at the heart of every decision we make.',
    color: '#E10600',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#E10600] border border-[#E10600]/20 bg-red-50 px-4 py-1.5 rounded-full mb-6">
              About Pusha
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] leading-tight mb-6">
              Built on Innovation,{' '}
              <span className="gradient-text">Fueled by Drive</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Pusha is a group of companies operating across different business verticals.
              The name comes from the Shona word meaning{' '}
              <span className="text-[#E10600] font-semibold">"Push"</span> or{' '}
              <span className="text-[#FF3B30] font-semibold">"Hustle Forward"</span> — and that
              spirit is embedded in everything we do.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              From branding and travel to security, cleaning, construction, legal consulting,
              and software — each company operates independently while sharing a common
              mission to serve with excellence and push the boundaries of African business.
            </p>

            {/* Mission points */}
            <ul className="space-y-3">
              {[
                'Push ideas forward with speed and precision',
                'Build category-defining businesses in Africa',
                'Create impact in every industry we enter',
                'Empower local talent and entrepreneurs',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E10600] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Pillars cards */}
          <div className="flex flex-col gap-5">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40, y: 10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex items-start gap-5 bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100 hover:border-green-100 hover:shadow-md transition-all duration-300 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${pillar.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: pillar.color }} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#111827] mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Quote block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative bg-gradient-to-br from-[#E10600] to-[#B70500] rounded-2xl p-6 text-white overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full" />
              <div className="absolute bottom-0 left-8 w-16 h-16 bg-[#FF3B30]/20 rounded-full" />
              <p className="relative text-lg font-semibold leading-relaxed italic">
                &ldquo;Pusha is not just a brand — it&apos;s a movement built to change the African
                business landscape.&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
