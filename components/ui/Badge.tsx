import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'green' | 'orange' | 'dark' | 'outline';
  children: React.ReactNode;
}

export default function Badge({ className, variant = 'green', children, ...props }: BadgeProps) {
  const base = 'inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full';

  const variants = {
    green: 'bg-red-50 text-[#E10600] border border-red-200',
    orange: 'bg-[#111111] text-white border border-[#111111]',
    dark: 'bg-[#111111] text-white',
    outline: 'border border-[#E10600] text-[#E10600] bg-transparent',
  };

  return (
    <span className={cn(base, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
