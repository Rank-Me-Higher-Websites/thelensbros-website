// Cinematic Noir — Individual Service Detail Page
import { Link } from 'wouter';
import { IMAGES } from '@/lib/images';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import SectionLabel from '@/components/SectionLabel';
import { ArrowRight, Check, Clock } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

interface ServiceData {
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  features: { title: string; desc: string }[];
  process: string[];
  seoTitle: string;
}

const serviceData: Record<string, ServiceData> = {
  'real-estate': {
    title: 'Real Estate Photography',
    tagline: 'Sell Properties Faster with Stunning Visuals',
    description: 'Our real estate photography service combines HDR imaging, professional staging consultation, and aerial drone photography to showcase properties at their absolute best. Every listing deserves to make a powerful first impression — and with our 24-hour turnaround, your photos are ready before the ink dries on the listing agreement.',
    heroImage: IMAGES.realEstateExterior,
    galleryImages: [IMAGES.realEstateInterior, IMAGES.realEstateKitchen, IMAGES.luxuryBathroom, IMAGES.aerialMiami],
    features: [
      { title: 'HDR Photography', desc: 'Multiple exposures blended for perfect lighting in every room.' },
      { title: 'Drone Aerials', desc: 'FAA-certified pilots capture stunning aerial perspectives.' },
      { title: 'Twilight Shoots', desc: 'Golden hour and blue hour exteriors that captivate buyers.' },
      { title: 'Virtual Staging', desc: 'Transform empty rooms into beautifully furnished spaces.' },
    ],
    process: ['Schedule your shoot online', 'Our team arrives with professional equipment', 'Full property coverage in 1-2 hours', 'Edited photos delivered within 24 hours'],
    seoTitle: 'Real Estate Photography Chicago | Lens Bros',
  },
  events: {
    title: 'Event Photography',
    tagline: 'Every Moment, Captured with Precision',
    description: 'From intimate corporate dinners to large-scale conferences and festivals, our event photography team blends into your event while capturing every key moment. We use professional-grade equipment and our signature editing style to deliver images that tell the complete story of your event.',
    heroImage: IMAGES.corporateGala,
    galleryImages: [IMAGES.musicFestival, IMAGES.elegantDinner, IMAGES.productLaunch, IMAGES.chicagoEvent],
    features: [
      { title: 'Corporate Events', desc: 'Professional coverage for conferences, galas, and meetings.' },
      { title: 'Private Celebrations', desc: 'Birthdays, anniversaries, and milestone events.' },
      { title: 'Product Launches', desc: 'Dynamic coverage that captures brand energy and excitement.' },
      { title: 'Festival Coverage', desc: 'High-energy photography for concerts and festivals.' },
    ],
    process: ['Discuss your event details and shot list', 'We assign the right team size for your event', 'Discreet, professional coverage throughout', 'Curated gallery delivered within 24 hours'],
    seoTitle: 'Event Photography Chicago | Lens Bros',
  },
  weddings: {
    title: 'Wedding Photography',
    tagline: 'Your Love Story, Told Through Our Lens',
    description: 'Your wedding day is one of the most important days of your life, and we treat it that way. Our wedding photography packages include full-day coverage, engagement sessions, and beautifully designed albums. We capture the candid emotions, the grand moments, and every detail in between.',
    heroImage: IMAGES.weddingOutdoor,
    galleryImages: [IMAGES.weddingFirstDance, IMAGES.weddingRings, IMAGES.chicagoWeddingVenue, IMAGES.weddingOutdoor],
    features: [
      { title: 'Full-Day Coverage', desc: 'From getting ready to the last dance — we capture it all.' },
      { title: 'Engagement Sessions', desc: 'Pre-wedding shoots to tell the beginning of your story.' },
      { title: 'Second Shooter', desc: 'Multiple angles ensure no moment is missed.' },
      { title: 'Custom Albums', desc: 'Professionally designed wedding albums delivered to your door.' },
    ],
    process: ['Free consultation to understand your vision', 'Engagement session to build rapport', 'Full wedding day coverage with our team', 'Edited gallery + album within 24-48 hours'],
    seoTitle: 'Wedding Photography Chicago | Lens Bros',
  },
  photo: {
    title: 'Photo Sessions',
    tagline: 'Professional Photography for Every Occasion',
    description: 'Whether you need corporate headshots, brand photography, or lifestyle portraits, our photo sessions are tailored to your specific needs. We offer both studio and on-location shoots with professional lighting, direction, and post-processing that makes you look your absolute best.',
    heroImage: IMAGES.photoStudio,
    galleryImages: [IMAGES.portrait, IMAGES.photoStudio, IMAGES.elegantDinner, IMAGES.chicagoSkyline],
    features: [
      { title: 'Corporate Headshots', desc: 'Professional portraits for teams and executives.' },
      { title: 'Brand Photography', desc: 'Visual content that aligns with your brand identity.' },
      { title: 'Lifestyle Portraits', desc: 'Natural, authentic photography in beautiful settings.' },
      { title: 'Studio Sessions', desc: 'Controlled lighting and backdrops for perfect results.' },
    ],
    process: ['Choose your session type and location', 'Pre-shoot consultation on styling and goals', 'Professional directed photo session', 'Retouched images delivered within 24 hours'],
    seoTitle: 'Professional Photo Sessions Chicago | Lens Bros',
  },
  video: {
    title: 'Video Production',
    tagline: 'Cinematic Stories That Move Audiences',
    description: 'Our video production team creates compelling visual narratives from concept to final cut. Using cinema-grade cameras, professional audio equipment, and drone technology, we produce brand films, commercials, social media content, and event highlight reels that captivate your audience.',
    heroImage: IMAGES.videoProduction,
    galleryImages: [IMAGES.droneVideography, IMAGES.videoProduction, IMAGES.musicFestival, IMAGES.corporateGala],
    features: [
      { title: 'Brand Films', desc: 'Tell your brand story with cinematic quality.' },
      { title: 'Commercials', desc: 'High-impact video ads for digital and broadcast.' },
      { title: 'Drone Videography', desc: 'Breathtaking aerial footage for any project.' },
      { title: 'Social Media Content', desc: 'Optimized video content for every platform.' },
    ],
    process: ['Creative brief and concept development', 'Pre-production planning and scheduling', 'Professional shoot with cinema-grade equipment', 'Edited video delivered within 24-48 hours'],
    seoTitle: 'Video Production Chicago | Lens Bros',
  },
};

export default function ServiceDetail({ slug }: { slug: string }) {
  const data = serviceData[slug];

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-white/40">Service not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={data.seoTitle}
        description={data.description.slice(0, 160)}
        canonical={`https://thelensbros.com/services/${slug}`}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 md:pt-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[oklch(0.65_0.2_250/0.06)] rounded-full blur-[150px] pointer-events-none" />
        <div className="container relative z-10">
          <AnimatedSection>
            <Link href="/services" className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 text-sm font-display mb-6 transition-colors">
              &larr; All Services
            </Link>
            <SectionLabel label={data.title} />
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4 max-w-3xl">
              {data.tagline}
            </h1>
            <p className="text-white/40 text-lg max-w-2xl mb-10">
              {data.description}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-7 py-4 bg-gradient-to-r from-[oklch(0.65_0.2_250)] to-[oklch(0.55_0.18_250)] text-white font-display font-semibold text-sm rounded-md hover:shadow-[0_0_30px_oklch(0.65_0.2_250/0.3)] transition-all duration-300"
            >
              Book This Service <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>

        {/* Hero Image */}
        <div className="container mt-16">
          <AnimatedSection>
            <div className="relative rounded-lg overflow-hidden aspect-[21/9]">
              <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" width={1600} height={685} loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-12">
              What's <span className="text-gradient-blue-gold">Included</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.features.map((f, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-[oklch(0.1_0.015_270/0.5)] border border-white/5 rounded-lg p-8 hover:border-[oklch(0.65_0.2_250/0.15)] transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-[oklch(0.65_0.2_250/0.1)] border border-[oklch(0.65_0.2_250/0.2)] flex items-center justify-center">
                      <Check className="w-5 h-5 text-[oklch(0.65_0.2_250)]" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-white text-lg mb-2">{f.title}</h3>
                      <p className="text-white/35 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-12">
              Sample <span className="text-gradient-blue-gold">Work</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {data.galleryImages.map((img, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="group relative overflow-hidden rounded-lg aspect-square">
                  <img src={img} alt={`${data.title} sample ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" width={400} height={400} loading="lazy" decoding="async" />
                  <div className="absolute inset-0 border border-white/0 group-hover:border-[oklch(0.65_0.2_250/0.2)] rounded-lg transition-colors duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 bg-[oklch(0.06_0.01_270)] border-t border-white/5">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-12">
              Our <span className="text-gradient-blue-gold">Process</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {data.process.map((step, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="relative">
                  <div className="font-display text-5xl font-bold text-[oklch(0.65_0.2_250/0.15)] mb-4">
                    0{i + 1}
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{step}</p>
                  {i < data.process.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-[oklch(0.65_0.2_250/0.2)] to-transparent" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* 24hr badge */}
          <AnimatedSection className="mt-16">
            <div className="flex items-center gap-4 bg-[oklch(0.1_0.015_270/0.5)] border border-[oklch(0.65_0.2_250/0.15)] rounded-lg p-6 max-w-md">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[oklch(0.65_0.2_250)] to-[oklch(0.75_0.14_80)] flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-white">24-Hour Delivery Guaranteed</div>
                <div className="text-white/40 text-sm">Your content, delivered on time. Every time.</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6">
              Book Your <span className="text-gradient-blue-gold">{data.title}</span> Session
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto mb-10">
              Get in touch for a free consultation and custom quote.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[oklch(0.65_0.2_250)] to-[oklch(0.55_0.18_250)] text-white font-display font-semibold rounded-md hover:shadow-[0_0_30px_oklch(0.65_0.2_250/0.3)] transition-all duration-300"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
