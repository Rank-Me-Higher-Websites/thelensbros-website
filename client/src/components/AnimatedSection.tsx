// Cinematic Noir — Scroll-triggered animation wrapper
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { ReactNode, CSSProperties } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
}

export default function AnimatedSection({ children, className = '', delay = 0, direction = 'up' }: Props) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const getTransform = () => {
    if (direction === 'up') return 'translateY(40px)';
    if (direction === 'left') return 'translateX(-40px)';
    if (direction === 'right') return 'translateX(40px)';
    return 'none';
  };

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'none' : getTransform(),
    transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
