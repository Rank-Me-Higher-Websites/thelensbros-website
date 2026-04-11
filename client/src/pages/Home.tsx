// Cinematic Noir — Home Page
// Deep blacks, blue/gold selective luminance, film-strip horizontal storytelling
import { Link } from 'wouter';
import { IMAGES, BRAND } from '@/lib/images';
import AnimatedSection from '@/components/AnimatedSection';
import SectionLabel from '@/components/SectionLabel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
  },
  {
    title: 'Events',
    desc: 'Every moment captured with cinematic precision.',
    image: IMAGES.corporateGala,
    href: '/services/events',
  },
  {
    title: 'Weddings',
    desc: 'Your love story, told through our lens.',
    image: IMAGES.weddingFirstDance,
    href: '/services/weddings',
  },
  {
    title: 'Photo',
    desc: 'Professional sessions for any occasion.',
    image: IMAGES.photoStudio,
    href: '/services/photo',
  },
  {
    title: 'Video',
    desc: 'Cinematic video production that moves audiences.',
    image: IMAGES.videoProduction,
    href: '/services/video',
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
    text: "Lens Bros delivered our real estate photos in under 18 hours. The quality was exceptional — our listings sold 40% faster.",
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

export default function Home() {
  const { ref: heroParallax, offset: heroOffset } = useParallax(0.15);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Lens Bros | Shot Today. Delivered Tomorrow. | Chicago Photography & Video"
        description="Chicago's premier photography and video production company. Real estate, weddings, events — delivered within 24 hours."
        canonical="https://thelensbros.com"
        keywords="Chicago photography, real estate photography Chicago, wedding photographer Chicago, event photography, video production"
      />
      <Navbar />

      {/* ═══════════════ HERO ═══════════════ */}
      <section ref={heroParallax} className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Background image with parallax */}
        <div
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${heroOffset}px)` }}
        >
          <img
            src={IMAGES.hero}
            alt="Professional photographer with Chicago skyline"
            className="w-full h-[120%] object-cover object-center"
          />
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.06_0.01_270/0.92)] via-[oklch(0.06_0.01_270/0.7)] to-[oklch(0.06_0.01_270/0.5)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.015_270)] via-transparent to-transparent" />
        </div>

        {/* Blue/gold glow orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[oklch(0.65_0.2_250/0.08)] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] bg-[oklch(0.75_0.14_80/0.06)] rounded-full blur-[100px] pointer-events-none" />

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <AnimatedSection delay={200}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-[oklch(0.65_0.2_250)] to-[oklch(0.75_0.14_80)]" />
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
                  className="group flex items-center gap-3 px-7 py-4 bg-gradient-to-r from-[oklch(0.65_0.2_250)] to-[oklch(0.55_0.18_250)] text-white font-display font-semibold text-sm rounded-md hover:shadow-[0_0_30px_oklch(0.65_0.2_250/0.3)] transition-all duration-300"
                >
                  Book a Shoot
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="flex items-center gap-3 px-7 py-4 border border-white/15 text-white/70 hover:text-white hover:border-white/30 font-display font-medium text-sm rounded-md transition-all duration-300"
                >
                  View Services
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-display">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </section>

      {/* ═══════════════ STATS BAR ═══════════════ */}
      <section className="relative bg-[oklch(0.06_0.01_270)] border-y border-white/5 py-12 md:py-16">
        <div className="container">
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
      <section className="relative py-24 md:py-32 bg-grain">
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
                <Link
                  href={service.href}
                  className="group relative block overflow-hidden rounded-lg aspect-[4/3] bg-card"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border border-[oklch(0.65_0.2_250/0.2)] rounded-lg" />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY LENS BROS ═══════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[oklch(0.65_0.2_250/0.04)] rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />

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
                    <div className="flex items-start gap-4 group">
                      <div className="shrink-0 w-12 h-12 rounded-lg bg-[oklch(0.65_0.2_250/0.1)] border border-[oklch(0.65_0.2_250/0.2)] flex items-center justify-center group-hover:bg-[oklch(0.65_0.2_250/0.15)] transition-colors">
                        <item.icon className="w-5 h-5 text-[oklch(0.65_0.2_250)]" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-white text-lg mb-1">{item.title}</h3>
                        <p className="text-white/35 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
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
                />
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-[oklch(0.1_0.015_270/0.95)] backdrop-blur-xl border border-white/10 rounded-lg p-5 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[oklch(0.65_0.2_250)] to-[oklch(0.75_0.14_80)] flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-white text-lg">24hrs</div>
                      <div className="text-white/40 text-xs">Avg. Delivery</div>
                    </div>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-[oklch(0.65_0.2_250/0.1)] to-[oklch(0.75_0.14_80/0.1)] rounded-lg blur-xl -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════ PORTFOLIO PREVIEW ═══════════════ */}
      <section className="relative py-24 md:py-32 bg-[oklch(0.06_0.01_270)]">
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
                <div className="group relative overflow-hidden rounded-lg aspect-square bg-card cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.category}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[oklch(0.06_0.01_270/0)] group-hover:bg-[oklch(0.06_0.01_270/0.6)] transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-display font-semibold text-white text-sm uppercase tracking-[0.15em]">
                      {item.category}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-grain">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[oklch(0.75_0.14_80/0.04)] rounded-full blur-[150px] pointer-events-none" />

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
                <div className="bg-[oklch(0.1_0.015_270/0.5)] border border-white/5 rounded-lg p-8 h-full flex flex-col hover:border-[oklch(0.65_0.2_250/0.15)] transition-colors duration-300">
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
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.65_0.2_250/0.08)] via-transparent to-[oklch(0.75_0.14_80/0.06)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[oklch(0.65_0.2_250/0.05)] rounded-full blur-[200px] pointer-events-none" />

        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <img src={BRAND.icon} alt="" className="w-16 h-16 mx-auto mb-8 opacity-60" />
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 max-w-3xl mx-auto leading-tight">
              Ready to Create Something <span className="text-gradient-blue-gold">Extraordinary</span>?
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto mb-10">
              Book your shoot today and receive professionally edited content within 24 hours. Based in Chicago, serving nationwide.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[oklch(0.65_0.2_250)] to-[oklch(0.55_0.18_250)] text-white font-display font-semibold rounded-md hover:shadow-[0_0_40px_oklch(0.65_0.2_250/0.3)] transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+13125551234"
                className="flex items-center gap-3 px-8 py-4 border border-white/15 text-white/70 hover:text-white hover:border-white/30 font-display font-medium rounded-md transition-all duration-300"
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
