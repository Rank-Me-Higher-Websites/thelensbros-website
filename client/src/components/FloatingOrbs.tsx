// Futuristic floating orbs — ambient blue/gold glowing spheres that drift slowly
// Pure CSS animations, no JS overhead
interface Props {
  className?: string;
  count?: number;
  variant?: 'hero' | 'section' | 'subtle';
}

const orbConfigs = {
  hero: [
    { size: 300, x: '10%', y: '20%', hue: 210, delay: 0, duration: 20 },
    { size: 200, x: '80%', y: '60%', hue: 45, delay: 5, duration: 25 },
    { size: 150, x: '60%', y: '10%', hue: 210, delay: 10, duration: 22 },
    { size: 100, x: '30%', y: '80%', hue: 45, delay: 3, duration: 18 },
    { size: 250, x: '90%', y: '30%', hue: 210, delay: 8, duration: 28 },
  ],
  section: [
    { size: 200, x: '5%', y: '30%', hue: 210, delay: 0, duration: 22 },
    { size: 150, x: '85%', y: '50%', hue: 45, delay: 7, duration: 20 },
    { size: 120, x: '50%', y: '80%', hue: 210, delay: 4, duration: 25 },
  ],
  subtle: [
    { size: 150, x: '15%', y: '40%', hue: 210, delay: 0, duration: 30 },
    { size: 100, x: '75%', y: '60%', hue: 45, delay: 5, duration: 25 },
  ],
};

export default function FloatingOrbs({ className = '', variant = 'section' }: Props) {
  const orbs = orbConfigs[variant];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float-orb"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, hsla(${orb.hue}, 80%, 55%, 0.08) 0%, hsla(${orb.hue}, 80%, 55%, 0.02) 50%, transparent 70%)`,
            filter: `blur(${orb.size * 0.3}px)`,
            animationDelay: `${orb.delay}s`,
            animationDuration: `${orb.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
