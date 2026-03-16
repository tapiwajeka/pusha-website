import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  background?: 'white' | 'gray' | 'dark' | 'gradient' | 'transparent';
  paddingY?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Section({
  className,
  background = 'white',
  paddingY = 'lg',
  children,
  ...props
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-[#F8FAFC]',
    dark: 'bg-[#111827] text-white',
    gradient: 'bg-gradient-to-br from-[#0d5c2b] via-[#111827] to-[#1a2a1a]',
    transparent: 'bg-transparent',
  };

  const paddings = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-24',
    xl: 'py-32',
  };

  return (
    <section className={cn(backgrounds[background], paddings[paddingY], className)} {...props}>
      {children}
    </section>
  );
}
