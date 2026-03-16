'use client';

import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

    const variants = {
      primary:
        'bg-gradient-to-r from-[#E10600] to-[#FF3B30] text-white hover:from-[#B70500] hover:to-[#E10600] focus:ring-[#E10600] shadow-lg hover:shadow-xl hover:shadow-red-500/25 hover:-translate-y-0.5 active:translate-y-0',
      secondary:
        'bg-[#111111] text-white hover:bg-[#333333] focus:ring-[#111111] shadow-lg hover:shadow-xl hover:shadow-black/25 hover:-translate-y-0.5 active:translate-y-0',
      outline:
        'border-2 border-[#E10600] text-[#E10600] bg-transparent hover:bg-[#E10600] hover:text-white focus:ring-[#E10600] hover:-translate-y-0.5 active:translate-y-0',
      ghost:
        'text-[#E10600] bg-transparent hover:bg-red-50 focus:ring-[#E10600]',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
