// Cinematic Noir — Blog Listing Page
import { Link } from 'wouter';
import { IMAGES } from '@/lib/images';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import SectionLabel from '@/components/SectionLabel';
import { ArrowRight, Calendar, Clock as ClockIcon } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'best-real-estate-photographer-chicago-2026',
    title: 'How to Choose the Best Real Estate Photographer in Chicago (2026 Guide)',
    excerpt: 'Selling a property in Chicago? Learn what separates a great real estate photographer from the rest, including HDR techniques, drone photography, and the importance of 24-hour turnaround times for competitive listings.',
    image: IMAGES.chicagoSkyline,
    date: 'April 8, 2026',
    readTime: '8 min read',
    category: 'Real Estate',
    metaTitle: 'Best Real Estate Photographer Chicago 2026 | Lens Bros',
    metaDescription: 'Find the best real estate photographer in Chicago. Learn about HDR photography, drone aerials, twilight shoots, and 24-hour delivery for competitive property listings.',
    keywords: ['real estate photographer Chicago', 'property photography Chicago', 'best real estate photography Chicago 2026', 'HDR real estate photos'],
  },
  {
    slug: 'top-chicago-wedding-venues-photography',
    title: 'Top 10 Chicago Wedding Venues for Stunning Photography in 2026',
    excerpt: 'From rooftop ceremonies overlooking the skyline to historic ballrooms with crystal chandeliers, discover the most photogenic wedding venues in Chicago and tips for capturing unforgettable moments at each location.',
    image: IMAGES.chicagoWeddingVenue,
    date: 'March 25, 2026',
    readTime: '12 min read',
    category: 'Weddings',
    metaTitle: 'Top Chicago Wedding Venues for Photography 2026 | Lens Bros',
    metaDescription: 'Discover the top 10 Chicago wedding venues for stunning photography. Rooftop ceremonies, historic ballrooms, and lakefront settings with expert photography tips.',
    keywords: ['Chicago wedding venues', 'wedding photography Chicago', 'best wedding venues Chicago 2026', 'Chicago wedding photographer'],
  },
  {
    slug: 'chicago-corporate-event-photography-guide',
    title: 'The Complete Guide to Corporate Event Photography in Chicago',
    excerpt: 'Planning a corporate event in Chicago? This comprehensive guide covers everything from choosing the right photographer to shot lists, lighting considerations at popular Chicago venues, and maximizing your event content ROI.',
    image: IMAGES.chicagoEvent,
    date: 'March 12, 2026',
    readTime: '10 min read',
    category: 'Events',
    metaTitle: 'Corporate Event Photography Chicago Guide | Lens Bros',
    metaDescription: 'Complete guide to corporate event photography in Chicago. Shot lists, venue lighting tips, photographer selection, and maximizing your event content ROI.',
    keywords: ['corporate event photography Chicago', 'event photographer Chicago', 'Chicago corporate events', 'event photography guide'],
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Photography Blog | Lens Bros Chicago"
        description="Expert photography tips, Chicago venue guides, and industry insights from the Lens Bros team. Real estate, wedding, and event photography advice."
        canonical="https://thelensbros.com/blog"
        keywords="photography blog Chicago, real estate photography tips, wedding photography guide, event photography advice"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[oklch(0.75_0.14_80/0.05)] rounded-full blur-[120px] pointer-events-none" />
        <div className="container relative z-10">
          <AnimatedSection>
            <SectionLabel label="Blog" />
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4 max-w-3xl">
              Insights & <span className="text-gradient-blue-gold">Inspiration</span>
            </h1>
            <p className="text-white/40 text-lg max-w-xl">
              Expert tips, industry insights, and behind-the-scenes stories from the Lens Bros team in Chicago.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <div className="space-y-12">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 100}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <article className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10 items-center">
                    <div className="md:col-span-2 relative overflow-hidden rounded-lg aspect-[16/10]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        width={640}
                        height={400}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 border border-white/0 group-hover:border-[oklch(0.65_0.2_250/0.2)] rounded-lg transition-colors duration-500" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[oklch(0.1_0.015_270/0.8)] backdrop-blur-sm border border-white/10 rounded-full text-xs text-white/70 font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="flex items-center gap-1.5 text-white/30 text-xs">
                          <Calendar className="w-3.5 h-3.5" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1.5 text-white/30 text-xs">
                          <ClockIcon className="w-3.5 h-3.5" /> {post.readTime}
                        </span>
                      </div>
                      <h2 className="font-display font-bold text-xl md:text-2xl text-white mb-3 group-hover:text-gradient-blue-gold transition-all duration-300">
                        {post.title}
                      </h2>
                      <p className="text-white/35 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[oklch(0.65_0.2_250)] font-display font-medium text-sm group-hover:gap-3 transition-all">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </article>
                </Link>
                {i < blogPosts.length - 1 && (
                  <div className="h-px bg-white/5 mt-12" />
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
