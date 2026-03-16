'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';

const FloatingShape = ({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.4, 0.2],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay,
      ease: 'easeInOut',
    }}
  />
);

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const handleScrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#111111]"
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/pusha-background1.jpg"
          alt="Pusha background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#111111]/75" />
      </div>

      {/* Subtle animated colour blooms on top of image */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: yBg }}>
        <FloatingShape
          className="w-[500px] h-[500px] bg-[#E10600] -top-40 -left-40"
          delay={0}
        />
        <FloatingShape
          className="w-[400px] h-[400px] bg-[#FF3B30] top-20 right-0"
          delay={2}
        />
      </motion.div>

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <Container className="relative z-10 py-32 pt-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <Badge variant="outline" className="border-red-400/40 text-red-300 bg-red-400/10 text-sm px-4 py-1.5">
              🚀 &nbsp; African-built • Innovation-driven
            </Badge>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight tracking-tight mb-6"
          >
            Pusha
            <br />
            <span className="gradient-text">Powering African</span>
            <br />
            <span className="text-white">Hustles</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A network of ventures pushing innovation forward across industries.
            Built with ambition. Driven by purpose.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleScrollTo('#ecosystem')}
              className="group"
            >
              Explore Ecosystem
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleScrollTo('#about')}
              className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex justify-center"
          >
            <motion.button
              onClick={() => handleScrollTo('#ecosystem')}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
              aria-label="Scroll down"
            >
              <ChevronDown className="w-8 h-8" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating stat pills */}
        <div className="absolute bottom-16 left-0 right-0 hidden lg:flex justify-between px-8 pointer-events-none">
          {[
            { label: '10+ Companies', sub: 'Pusha · Sentriqo · Bytewave' },
            { label: '9+ Industries', sub: 'Branding · Travel · Security · Tech' },
            { label: 'Zimbabwe Based', sub: 'Harare, Zimbabwe' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.15 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-3 pointer-events-auto"
            >
              <div className="text-white font-bold text-sm">{item.label}</div>
              <div className="text-gray-500 text-xs mt-0.5">{item.sub}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
