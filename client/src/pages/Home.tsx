// Cinematic Noir — Home Page
// Deep blacks, blue/gold selective luminance, futuristic AI interactive elements
import { Link } from 'wouter';
import { IMAGES, BRAND, VIDEO } from '@/lib/images';
import AnimatedSection from '@/components/AnimatedSection';
import SectionLabel from '@/components/SectionLabel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import FloatingOrbs from '@/components/FloatingOrbs';
import GlowCard from '@/components/GlowCard';
import AnimatedGradient from '@/components/AnimatedGradient';
import { useParallax } from '@/hooks/useScrollAnimation';
import SEOHead from '@/components/SEOHead';
import { ArrowRight, Clock, Camera, Zap, Star, ChevronRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const services = [
  {
    title: 'Real Estate',
    desc: 'Stunning property visuals that sell homes faster.',
    image: IMAGES.realEstateExterior,
    href: '/services/real-estate',
    glowColor: 'blue' as const,
  },
  {
    title: 'Events',
    desc: 'Every moment captured with cinematic precision.',
    image: IMAGES.corporateGala,
    href: '/services/events',
    glowColor: 'gold' as const,
  },
  {
    title: 'Weddings',
    desc: 'Your love story, told through our lens.',
    image: IMAGES.weddingFirstDance,
    href: '/services/weddings',
    glowColor: 'blue' as const,
  },
  {
    title: 'Photo',
    desc: 'Professional sessions for any occasion.',
    image: IMAGES.photoStudio,
    href: '/services/photo',
    glowColor: 'gold' as const,
  },
  {
    title: 'Video',
    desc: 'Cinematic video production that moves audiences.',
    image: IMAGES.videoProduction,
    href: '/services/video',
    glowColor: 'mixed' as const,
  },
];

const portfolioItems = [
  { image: IMAGES.realEstateInterior, category: 'Real Estate' },
  { image: IMAGES.weddingOutdoor, category: 'Wedding' },
  { image: IMAGES.musicFestival, category: 'Event' },
  { image: IMAGES.aerialMiami, category: 'Aerial' },
  { image: IMAGES.portrait, category: 'Portrait' },
  { image: IMAGES.droneVideography, category: 'Video' },
];

const testimonials = [
  {
    text: "The Lens Bros delivered our real estate photos in under 18 hours. The quality was exceptional — our listings sold 40% faster.",
    author: "Sarah Mitchell",
    role: "Real Estate Agent, Coldwell Banker",
    rating: 5,
  },
  {
    text: "They captured our wedding day perfectly. Every emotion, every detail. We couldn't have asked for a better team.",
    author: "James & Emily Rivera",
    role: "Wedding Clients",
    rating: 5,
  },
  {
    text: "The event coverage was outstanding. Professional, discreet, and the turnaround time was unbelievable.",
    author: "David Chen",
    role: "Corporate Events Director",
    rating: 5,
  },
];

// Hero video — real estate cinematic background
const HERO_VIDEO_URL = VIDEO.heroVideo;

export default function Home() {
  const { ref: heroParallax, offset: heroOffset } = useParallax(0.15);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="The Lens Bros | Shot Today. Delivered Tomorrow. | Chicago Photography & Video"
        description="Chicago's premier photography and video production company. Real estate, weddings, events — delivered within 24 hours."
        canonical="https://thelensbros.com"
        keywords="Chicago photography, real estate photography Chicago, wedding photographer Chicago, event photography, video production"
      />
      <Navbar />

      {/* ═══════════════ HERO WITH VIDEO BACKGROUND ═══════════════ */}
      <section ref={heroParallax} className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Video or Image Background with parallax */}
        <div
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${heroOffset}px)` }}
        >
          {HERO_VIDEO_URL ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-[120%] object-cover object-center"
              poster={IMAGES.hero}
            >
              <source src={HERO_VIDEO_URL} type="video/mp4" />
            </video>
          ) : (
            <img
              src={IMAGES.hero}
              alt="Professional photographer with Chicago skyline"
              className="w-full h-[120%] object-cover object-center"
              width={1600}
              height={893}
              fetchPriority="high"
              decoding="sync"
            />
          )}
          {/* Dark overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.04_0.01_270/0.95)] via-[oklch(0.04_0.01_270/0.75)] to-[oklch(0.04_0.01_270/0.55)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.015_270)] via-transparent to-[oklch(0.04_0.01_270/0.3)]" />
        </div>

        {/* Particle Canvas overlay */}
        <div className="absolute inset-0 z-[1]">
          <ParticleCanvas particleCount={35} connectionDistance={100} speed={0.2} />
        </div>

        {/* Floating Orbs */}
        <FloatingOrbs variant="hero" className="z-[1]" />

        {/* Animated scan line effect */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          <div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.65_0.2_250/0.15)] to-transparent"
            style={{ animation: 'scan-line 8s linear infinite' }}
          />
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <AnimatedSection delay={200}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-[oklch(0.65_0.2_250)] to-[oklch(0.75_0.14_80)] animate-shimmer" />
                <span className="font-display text-xs uppercase tracking-[0.25em] text-[oklch(0.75_0.14_80)] font-medium">
                  Chicago &bull; Miami
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-6">
                Shot Today.<br />
                <span className="text-gradient-blue-gold">Delivered</span><br />
                Tomorrow.
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
                Premium photography and video production with guaranteed 24-hour delivery. Your vision, our craft.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={800}>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/contact"
                  className="group relative flex items-center gap-3 px-7 py-4 bg-gradient-to-r from-[oklch(0.65_0.2_250)] to-[oklch(0.55_0.18_250)] text-white font-display font-semibold text-sm rounded-md hover:shadow-[0_0_40px_oklch(0.65_0.2_250/0.4)] transition-all duration-300 overflow-hidden"
                >
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
                  <span className="relative">Book a Shoot</span>
                  <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="flex items-center gap-3 px-7 py-4 border border-white/15 text-white/70 hover:text-white hover:border-[oklch(0.65_0.2_250/0.3)] hover:shadow-[0_0_20px_oklch(0.65_0.2_250/0.1)] font-display font-medium text-sm rounded-md transition-all duration-300"
                >
                  View Services
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll indicator with glow pulse */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-display">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[oklch(0.65_0.2_250/0.4)] to-transparent animate-glow-pulse" />
        </div>
      </section>

      {/* ═══════════════ STATS BAR ═══════════════ */}
      <section className="relative bg-[oklch(0.06_0.01_270)] border-y border-white/5 py-12 md:py-16 overflow-hidden">
        {/* Subtle animated gradient background */}
        <AnimatedGradient variant="dark" />
        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { value: 24, suffix: 'hr', label: 'Delivery Time' },
              { value: 500, suffix: '+', label: 'Projects Completed' },
              { value: 98, suffix: '%', label: 'Client Satisfaction' },
              { value: 2, suffix: '', label: 'Cities & Growing' },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100} className="text-center">
                <div className="font-display font-bold text-3xl md:text-4xl text-white mb-1">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/30 text-sm">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICES OVERVIEW ═══════════════ */}
      <section className="relative py-24 md:py-32 bg-grain overflow-hidden">
        <FloatingOrbs variant="subtle" />
        <div className="container relative z-10">
          <AnimatedSection>
            <SectionLabel label="What We Do" number="01" />
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4 max-w-xl">
              Services Built for <span className="text-gradient-blue-gold">Speed & Quality</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl mb-16">
              From real estate to weddings, we deliver premium visual content within 24 hours — without compromising on quality.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <GlowCard glowColor={service.glowColor} className="bg-card">
                  <Link
                    href={service.href}
                    className="group relative block overflow-hidden rounded-xl aspect-[4/3]"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.06_0.01_270/0.95)] via-[oklch(0.06_0.01_270/0.3)] to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-display font-bold text-xl text-white mb-1 group-hover:text-gradient-blue-gold transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-white/40 text-sm mb-3">{service.desc}</p>
                      <span className="inline-flex items-center gap-1.5 text-[oklch(0.65_0.2_250)] text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        Learn More <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY THE LENS BROS ═══════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden content-auto">
        <AnimatedGradient variant="accent" />
        <FloatingOrbs variant="section" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedSection>
                <SectionLabel label="Why Choose Us" number="02" />
                <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6">
                  The 24-Hour <span className="text-gradient-blue-gold">Promise</span>
                </h2>
                <p className="text-white/40 text-lg leading-relaxed mb-10">
                  In a world where time is everything, we guarantee delivery of your professionally edited photos and videos within 24 hours of your shoot. No exceptions.
                </p>
              </AnimatedSection>

              <div className="space-y-6">
                {[
                  { icon: Clock, title: '24-Hour Turnaround', desc: 'Guaranteed delivery within 24 hours after every shoot.' },
                  { icon: Camera, title: 'Professional Equipment', desc: 'Top-tier cameras, lenses, drones, and lighting for every project.' },
                  { icon: Zap, title: 'Instant Booking', desc: 'Book online in minutes. We handle the rest.' },
                ].map((item, i) => (
                  <AnimatedSection key={i} delay={i * 150}>
                    <GlowCard glowColor={i === 1 ? 'gold' : 'blue'} className="bg-[oklch(0.1_0.015_270/0.5)]">
                      <div className="flex items-start gap-4 p-4">
                        <div className="shrink-0 w-12 h-12 rounded-lg bg-[oklch(0.65_0.2_250/0.1)] border border-[oklch(0.65_0.2_250/0.2)] flex items-center justify-center group-hover:bg-[oklch(0.65_0.2_250/0.15)] transition-colors">
                          <item.icon className="w-5 h-5 text-[oklch(0.65_0.2_250)]" />
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-white text-lg mb-1">{item.title}</h3>
                          <p className="text-white/35 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </GlowCard>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src={IMAGES.realEstateKitchen}
                  alt="Professional real estate photography"
                  className="rounded-lg w-full aspect-[4/3] object-cover"
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
                {/* Floating badge with glow pulse */}
                <div className="absolute -bottom-6 -left-6 bg-[oklch(0.1_0.015_270/0.95)] backdrop-blur-xl border border-[oklch(0.65_0.2_250/0.2)] rounded-lg p-5 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[oklch(0.65_0.2_250)] to-[oklch(0.75_0.14_80)] flex items-center justify-center animate-glow-pulse">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-white text-lg">24hrs</div>
                      <div className="text-white/40 text-xs">Avg. Delivery</div>
                    </div>
                  </div>
                </div>
                {/* Glow effect behind image */}
                <div className="absolute -inset-2 bg-gradient-to-br from-[oklch(0.65_0.2_250/0.12)] to-[oklch(0.75_0.14_80/0.08)] rounded-xl blur-2xl -z-10 animate-glow-pulse" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════ PORTFOLIO PREVIEW ═══════════════ */}
      <section className="relative py-24 md:py-32 bg-[oklch(0.06_0.01_270)] content-auto overflow-hidden">
        <FloatingOrbs variant="subtle" />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <SectionLabel label="Our Work" number="03" />
                <h2 className="font-display font-bold text-3xl md:text-5xl text-white">
                  Recent <span className="text-gradient-blue-gold">Projects</span>
                </h2>
              </div>
              <Link
                href="/services"
                className="group flex items-center gap-2 text-[oklch(0.65_0.2_250)] font-display font-medium text-sm hover:gap-3 transition-all"
              >
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {portfolioItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <GlowCard glowColor={i % 2 === 0 ? 'blue' : 'gold'}>
                  <div className="group relative overflow-hidden rounded-xl aspect-square bg-card cursor-pointer">
                    <img
                      src={item.image}
                      alt={item.category}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      width={600}
                      height={600}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-[oklch(0.06_0.01_270/0)] group-hover:bg-[oklch(0.06_0.01_270/0.6)] transition-all duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="font-display font-semibold text-white text-sm uppercase tracking-[0.15em] px-4 py-2 border border-white/20 rounded-md backdrop-blur-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-grain content-auto">
        <AnimatedGradient variant="dark" />
        <FloatingOrbs variant="section" />

        <div className="container relative z-10">
          <AnimatedSection className="text-center mb-16">
            <SectionLabel label="Testimonials" number="04" />
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white">
              What Our <span className="text-gradient-blue-gold">Clients</span> Say
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <GlowCard glowColor={i === 1 ? 'gold' : 'blue'} className="bg-[oklch(0.1_0.015_270/0.5)] h-full">
                  <div className="p-8 flex flex-col h-full">
                    <div className="flex items-center gap-1 mb-5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-[oklch(0.75_0.14_80)] text-[oklch(0.75_0.14_80)]" />
                      ))}
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">"{t.text}"</p>
                    <div>
                      <div className="font-display font-semibold text-white text-sm">{t.author}</div>
                      <div className="text-white/30 text-xs mt-0.5">{t.role}</div>
                    </div>
                  </div>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden content-auto">
        <AnimatedGradient variant="accent" />
        <FloatingOrbs variant="hero" />

        {/* Particle canvas for CTA section */}
        <div className="absolute inset-0 z-[1]">
          <ParticleCanvas particleCount={20} connectionDistance={80} speed={0.15} />
        </div>

        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <img src={BRAND.iconSmall} alt="" className="w-16 h-16 mx-auto mb-8 opacity-60 animate-glow-pulse" width={64} height={64} loading="lazy" decoding="async" />
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 max-w-3xl mx-auto leading-tight">
              Ready to Create Something <span className="text-gradient-blue-gold">Extraordinary</span>?
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto mb-10">
              Book your shoot today and receive professionally edited content within 24 hours. Based in Chicago, serving nationwide.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[oklch(0.65_0.2_250)] to-[oklch(0.55_0.18_250)] text-white font-display font-semibold rounded-md hover:shadow-[0_0_50px_oklch(0.65_0.2_250/0.4)] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
                <span className="relative">Get Started</span>
                <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+13125551234"
                className="flex items-center gap-3 px-8 py-4 border border-white/15 text-white/70 hover:text-white hover:border-[oklch(0.65_0.2_250/0.3)] hover:shadow-[0_0_20px_oklch(0.65_0.2_250/0.1)] font-display font-medium rounded-md transition-all duration-300"
              >
                Call (312) 555-1234
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
