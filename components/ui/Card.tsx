import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gradient-border';
  hoverable?: boolean;
  children: React.ReactNode;
}

export default function Card({
  className,
  variant = 'default',
  hoverable = false,
  children,
  ...props
}: CardProps) {
  const base = 'rounded-2xl transition-all duration-300';

  const variants = {
    default: 'bg-white border border-gray-100 shadow-sm',
    glass:
      'bg-white/70 backdrop-blur-xl border border-white/30 shadow-md',
    'gradient-border':
      'bg-white relative before:absolute before:inset-0 before:rounded-2xl before:p-[1.5px] before:bg-gradient-to-br before:from-[#1E7F3E] before:to-[#F7931E] before:-z-10 shadow-lg',
  };

  const hoverClass = hoverable
    ? 'hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10 cursor-pointer'
    : '';

  return (
    <div className={cn(base, variants[variant], hoverClass, className)} {...props}>
      {children}
    </div>
  );
}
