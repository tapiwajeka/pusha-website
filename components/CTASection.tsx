'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function CTASection() {
  const handleScrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-[#F5F5F5] py-24">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-[#111111] to-[#1a0000] rounded-3xl p-10 md:p-16 text-center overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute -top-12 -left-12 w-56 h-56 bg-[#E10600] rounded-full blur-3xl opacity-25 pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-[#FF3B30] rounded-full blur-3xl opacity-20 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E10600]/60 to-transparent" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E10600] to-[#FF3B30] shadow-xl shadow-red-900/30 mb-6 mx-auto">
              <Sparkles className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Join the{' '}
              <span className="gradient-text">Pusha Movement</span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
              Discover our businesses, partner with us, or reach out — we&apos;re always
              looking to push forward together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleScrollTo('#companies')}
                className="group"
              >
                Explore Our Businesses
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScrollTo('#contact')}
                className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 hover:text-white"
              >
                Get in Touch
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              {['4 Active Businesses', 'Harare, Zimbabwe', 'African Owned', 'Growing Ecosystem'].map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-medium text-gray-500 border border-white/10 bg-white/5 px-3 py-1.5 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
