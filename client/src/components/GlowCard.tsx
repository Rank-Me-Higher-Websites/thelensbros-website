// Futuristic glow card — tracks mouse position and creates a radial glow effect
// Blue/gold gradient border glow on hover
import { useRef, useState, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'gold' | 'mixed';
}

export default function GlowCard({ children, className = '', glowColor = 'blue' }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowPos({ x, y });
  };

  const glowColors = {
    blue: 'hsla(210, 80%, 55%, 0.15)',
    gold: 'hsla(45, 80%, 55%, 0.15)',
    mixed: 'hsla(210, 80%, 55%, 0.12)',
  };

  const borderColors = {
    blue: 'hsla(210, 80%, 55%, 0.3)',
    gold: 'hsla(45, 80%, 55%, 0.3)',
    mixed: 'hsla(210, 80%, 55%, 0.25)',
  };

  return (
    <div
      ref={cardRef}
      className={`relative group overflow-hidden rounded-xl transition-all duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        border: `1px solid ${isHovered ? borderColors[glowColor] : 'rgba(255,255,255,0.05)'}`,
      }}
    >
      {/* Glow overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, ${glowColors[glowColor]}, transparent 60%)`,
        }}
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
