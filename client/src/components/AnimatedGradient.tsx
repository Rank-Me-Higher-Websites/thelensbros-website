// Animated mesh gradient — slowly shifting blue/gold gradient background
// Pure CSS animation for zero JS overhead
interface Props {
  className?: string;
  variant?: 'dark' | 'accent';
}

export default function AnimatedGradient({ className = '', variant = 'dark' }: Props) {
  const gradients = {
    dark: `
      radial-gradient(ellipse at 20% 50%, hsla(210, 80%, 25%, 0.15) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 20%, hsla(45, 80%, 35%, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 80%, hsla(210, 60%, 20%, 0.12) 0%, transparent 50%)
    `,
    accent: `
      radial-gradient(ellipse at 30% 40%, hsla(210, 80%, 40%, 0.2) 0%, transparent 50%),
      radial-gradient(ellipse at 70% 60%, hsla(45, 80%, 45%, 0.12) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 90%, hsla(210, 60%, 30%, 0.15) 0%, transparent 50%)
    `,
  };

  return (
    <div
      className={`absolute inset-0 pointer-events-none animate-gradient-shift ${className}`}
      style={{ background: gradients[variant] }}
      aria-hidden="true"
    />
  );
}
