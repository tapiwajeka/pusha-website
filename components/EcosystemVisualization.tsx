'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Palette, Plane, Leaf, MessageSquare, Shield, Sparkles, HardHat, Scale, Code2, Languages } from 'lucide-react';
import { companies, Company } from '@/data/companies';
import Button from '@/components/ui/Button';

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

// 10 nodes evenly spaced radially (radius=175, 36° apart), starting at top going clockwise
const nodePositions = [
  { x: 0,    y: -175 }, // Branding
  { x: 103,  y: -142 }, // Travel
  { x: 166,  y: -54  }, // Poultry
  { x: 166,  y: 54   }, // SMS
  { x: 103,  y: 142  }, // Sentriqo Security
  { x: 0,    y: 175  }, // Sentriqo Cleaning
  { x: -103, y: 142  }, // Sentriqo Home
  { x: -166, y: 54   }, // Pusha Consulting
  { x: -166, y: -54  }, // Bytewave
  { x: -103, y: -142 }, // Pusha Translate
];

interface NodeProps {
  company: Company;
  position: { x: number; y: number };
  isActive: boolean;
  onClick: () => void;
}

function EcosystemNode({ company, position, isActive, onClick }: NodeProps) {
  const Icon = iconMap[company.icon] || Palette;

  return (
    <motion.g
      style={{ cursor: 'pointer', outline: 'none' }}
      tabIndex={-1}
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
    >
      {/* Connection line */}
      <motion.line
        x1={0}
        y1={0}
        x2={position.x}
        y2={position.y}
        stroke="url(#lineGradient)"
        strokeWidth={isActive ? 2 : 1.5}
        strokeOpacity={isActive ? 0.9 : 0.4}
        strokeDasharray={isActive ? 'none' : '6 4'}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />

      {/* Glow ring — only visible when active */}
      {isActive && (
        <motion.circle
          cx={position.x}
          cy={position.y}
          r={45}
          fill="none"
          stroke={company.color}
          strokeWidth={2.5}
          strokeOpacity={0.5}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.45, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {/* Node background */}
      <motion.circle
        cx={position.x}
        cy={position.y}
        r={30}
        fill={isActive ? company.color : '#1f2937'}
        stroke={company.color}
        strokeWidth={isActive ? 0 : 1.5}
        strokeOpacity={0.6}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />

      {/* Inner text (SVG foreignObject for icon rendering) */}
      <motion.text
        x={position.x}
        y={position.y + 4}
        textAnchor="middle"
        fontSize="9"
        fontWeight="600"
        fill={isActive ? 'white' : '#d1d5db'}
        fontFamily="Inter, system-ui, sans-serif"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {company.shortName}
      </motion.text>

      {/* Label underneath */}
      <motion.text
        x={position.x}
        y={position.y + 48}
        textAnchor="middle"
        fontSize="9"
        fontWeight="500"
        fill={isActive ? company.color : '#6b7280'}
        fontFamily="Inter, system-ui, sans-serif"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.4 }}
      >
        {company.industry.split(' & ')[0].split(' ')[0]}
      </motion.text>
    </motion.g>
  );
}

export default function EcosystemVisualization() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeCompany = companies.find((c) => c.id === activeId);

  const handleNodeClick = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="ecosystem" className="bg-[#111827] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#E10600] border border-[#E10600]/30 bg-[#E10600]/10 px-4 py-1.5 rounded-full mb-4">
            The Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            One Group.{' '}
            <span className="gradient-text">Many Ventures.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Click any node to explore a company in the group.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 justify-center">
          {/* SVG Ecosystem Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex-shrink-0"
          >
            <svg
              viewBox="-240 -250 480 520"
              width="420"
              height="420"
              className="overflow-visible"
            >
              <defs>
                <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FF3B30" />
                  <stop offset="100%" stopColor="#E10600" />
                </radialGradient>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E10600" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FF3B30" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Company nodes */}
              {companies.map((company, i) => (
                <EcosystemNode
                  key={company.id}
                  company={company}
                  position={nodePositions[i]}
                  isActive={activeId === company.id}
                  onClick={() => handleNodeClick(company.id)}
                />
              ))}

              {/* Center node */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                filter="url(#glow)"
              >
                {/* Outer pulse ring */}
                <motion.circle
                  cx={0}
                  cy={0}
                  r={72}
                  fill="none"
                  stroke="#E10600"
                  strokeWidth={1}
                  strokeOpacity={0.3}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* Center circle */}
                <circle cx={0} cy={0} r={58} fill="url(#centerGradient)" />
                <image
                  href="/images/pusha-main-white-logo.png"
                  x={-75}
                  y={-25}
                  width={150}
                  height={50}
                  preserveAspectRatio="xMidYMid meet"
                />
              </motion.g>
            </svg>
          </motion.div>

          {/* Company Detail Panel */}
          <div className="flex-1 min-h-[280px] flex items-center justify-center w-full max-w-md">
            <AnimatePresence mode="wait">
              {activeCompany ? (
                <motion.div
                  key={activeCompany.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35 }}
                  className="w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
                  style={{ boxShadow: `0 24px 60px ${activeCompany.color}25` }}
                >
                  {/* Brand header zone — logo displayed freely */}
                  <div
                    className="relative w-full flex items-center justify-center py-10 px-10 overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${activeCompany.color}18 0%, ${activeCompany.accentColor}10 100%)`,
                      borderBottom: `3px solid ${activeCompany.color}`,
                    }}
                  >
                    <div
                      className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full blur-2xl opacity-30 pointer-events-none"
                      style={{ backgroundColor: activeCompany.color }}
                    />
                    {activeCompany.logo ? (
                      <div className="relative w-full h-24">
                        <Image
                          src={activeCompany.logo}
                          alt={`${activeCompany.name} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      (() => {
                        const Icon = iconMap[activeCompany.icon] || Palette;
                        return (
                          <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center"
                            style={{ backgroundColor: `${activeCompany.color}20` }}
                          >
                            <Icon className="w-8 h-8" style={{ color: activeCompany.color }} />
                          </div>
                        );
                      })()
                    )}
                  </div>

                  {/* Card body */}
                  <div className="p-7">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest block mb-2"
                      style={{ color: activeCompany.color }}
                    >
                      {activeCompany.industry}
                    </span>

                    <h3 className="text-2xl font-extrabold text-[#111111] mb-3 leading-tight">
                      {activeCompany.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {activeCompany.longDescription}
                    </p>

                    <a href={activeCompany.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" size="md" className="group w-full justify-center">
                        Visit {activeCompany.shortName}
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </Button>
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-gray-500"
                >
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#E10600] animate-pulse" />
                  </div>
                  <p className="text-base font-medium text-gray-400">
                    Select a node to explore
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Click any company in the diagram
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
