// Cinematic Noir — Services Landing Page
import { Link } from 'wouter';
import { IMAGES } from '@/lib/images';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import SectionLabel from '@/components/SectionLabel';
import { ArrowRight } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const allServices = [
  {
    title: 'Real Estate Photography',
    desc: 'Showcase properties with stunning interior and exterior photography. HDR processing, twilight shots, aerial views, and virtual staging available.',
    image: IMAGES.realEstateExterior,
    href: '/services/real-estate',
    features: ['HDR Interior & Exterior', 'Twilight Photography', 'Drone Aerial Shots', 'Virtual Staging'],
  },
  {
    title: 'Event Photography',
    desc: 'From corporate galas to private celebrations, we capture every moment with precision and artistry.',
    image: IMAGES.corporateGala,
    href: '/services/events',
    features: ['Corporate Events', 'Conferences & Galas', 'Private Parties', 'Product Launches'],
  },
  {
    title: 'Wedding Photography',
    desc: 'Your love story deserves to be told beautifully. Cinematic wedding photography and videography packages.',
    image: IMAGES.weddingFirstDance,
    href: '/services/weddings',
    features: ['Full-Day Coverage', 'Engagement Sessions', 'Ceremony & Reception', 'Album Design'],
  },
  {
    title: 'Photo Sessions',
    desc: 'Professional portrait, headshot, and lifestyle photography for individuals and brands.',
    image: IMAGES.photoStudio,
    href: '/services/photo',
    features: ['Corporate Headshots', 'Brand Photography', 'Lifestyle Portraits', 'Studio Sessions'],
  },
  {
    title: 'Video Production',
    desc: 'Cinematic video content from concept to final cut. Commercials, brand films, social media, and more.',
    image: IMAGES.videoProduction,
    href: '/services/video',
    features: ['Brand Films', 'Commercials', 'Social Media Content', 'Drone Videography'],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Photography & Video Services | The Lens Bros Chicago"
        description="Professional photography and video services in Chicago. Real estate, events, weddings, portraits, and video production with 24-hour delivery."
        canonical="https://thelensbros.com/services"
        keywords="photography services Chicago, video production Chicago, real estate photography, event photographer, wedding photographer"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[oklch(0.65_0.2_250/0.06)] rounded-full blur-[150px] pointer-events-none" />
        <div className="container relative z-10">
          <AnimatedSection>
            <SectionLabel label="Our Services" />
            <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 max-w-3xl">
              Premium Visual <span className="text-gradient-blue-gold">Solutions</span>
            </h1>
            <p className="text-white/40 text-lg md:text-xl max-w-2xl">
              Every service comes with our signature 24-hour delivery guarantee. Professional quality, on your timeline.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <div className="space-y-20">
            {allServices.map((service, i) => (
              <AnimatedSection key={i}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <Link href={service.href} className="group block relative overflow-hidden rounded-lg aspect-[16/10]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        width={800}
                        height={500}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.06_0.01_270/0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute -inset-px border border-[oklch(0.65_0.2_250/0)] group-hover:border-[oklch(0.65_0.2_250/0.2)] rounded-lg transition-colors duration-500" />
                    </Link>
                  </div>
                  <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                    <span className="font-display text-[oklch(0.65_0.2_250/0.5)] text-sm font-semibold tracking-wider mb-3 block">
                      0{i + 1}
                    </span>
                    <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-white/40 text-base leading-relaxed mb-8">
                      {service.desc}
                    </p>
                    <ul className="grid grid-cols-2 gap-3 mb-8">
                      {service.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-white/50 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.2_250)]" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.href}
                      className="group inline-flex items-center gap-2 text-[oklch(0.65_0.2_250)] font-display font-semibold text-sm hover:gap-3 transition-all"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[oklch(0.06_0.01_270)] border-t border-white/5">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6">
              Ready to <span className="text-gradient-blue-gold">Get Started</span>?
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto mb-10">
              Contact us today for a free consultation and quote. 24-hour delivery guaranteed.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[oklch(0.65_0.2_250)] to-[oklch(0.55_0.18_250)] text-white font-display font-semibold rounded-md hover:shadow-[0_0_30px_oklch(0.65_0.2_250/0.3)] transition-all duration-300"
            >
              Book a Shoot <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
