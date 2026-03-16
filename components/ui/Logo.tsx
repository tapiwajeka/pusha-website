import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon';
  onDark?: boolean; // true when rendered on a dark background
}

export default function Logo({ className, size = 'md', onDark = false }: LogoProps) {
  const heights = {
    sm: 28,
    md: 72,
    lg: 104,
  };

  const h = heights[size];
  // Keep aspect ratio — logo width is calculated at 3:1 ratio as a safe default
  const w = Math.round(h * 3);

  return (
    <div className={cn('flex items-center', className)}>
      <Image
        src={onDark ? '/images/pusha-main-white-logo.png' : '/images/pusha-main-logo.png'}
        alt="Pusha"
        width={w}
        height={h}
        className="object-contain select-none"
        priority
      />
    </div>
  );
}
