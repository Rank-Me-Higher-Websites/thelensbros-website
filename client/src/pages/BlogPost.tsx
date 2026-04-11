// Cinematic Noir — Blog Post Detail Page
import { Link } from 'wouter';
import { IMAGES } from '@/lib/images';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { blogPosts } from './Blog';
import { Calendar, Clock as ClockIcon, ArrowLeft, ArrowRight } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { useEffect } from 'react';

// Full blog post content
const postContent: Record<string, { sections: { heading: string; content: string; image?: string }[] }> = {
  'best-real-estate-photographer-chicago-2026': {
    sections: [
      {
        heading: 'Why Professional Real Estate Photography Matters in Chicago',
        content: `In Chicago's competitive real estate market, first impressions are everything. Studies show that listings with professional photography sell 32% faster and for up to 47% more than those with amateur photos. With over 25,000 active listings in the Chicagoland area at any given time, your property needs to stand out from the moment a potential buyer scrolls past it online.\n\nThe Chicago market presents unique challenges — from capturing the dramatic lakefront skyline as a backdrop to managing the harsh lighting contrasts of high-rise condos. A skilled real estate photographer understands these nuances and knows how to turn them into selling points.`,
      },
      {
        heading: 'What to Look for in a Chicago Real Estate Photographer',
        content: `When evaluating real estate photographers in Chicago, there are several critical factors that separate the professionals from the amateurs.\n\n**HDR Photography Expertise** — High Dynamic Range imaging is essential for Chicago properties, especially condos with floor-to-ceiling windows where interior and exterior lighting varies dramatically. Your photographer should deliver images where both the kitchen details and the skyline view through the window are perfectly exposed.\n\n**Drone and Aerial Capabilities** — FAA-certified drone photography is a game-changer for Chicago real estate. Aerial shots showcase proximity to Lake Michigan, neighborhood context, and property size in ways that ground-level photography simply cannot.\n\n**Twilight and Blue Hour Shooting** — Some of the most compelling real estate photos in Chicago are captured during the golden hour or blue hour, when the warm interior lights contrast against the dramatic sky. This technique is particularly effective for properties in Lincoln Park, Gold Coast, and the West Loop.`,
        image: IMAGES.realEstateExterior,
      },
      {
        heading: 'The 24-Hour Delivery Advantage',
        content: `In a market where properties can receive multiple offers within days of listing, turnaround time matters enormously. The best real estate photographers in Chicago now offer 24-hour delivery — meaning your listing can go live with professional photos the day after the shoot.\n\nAt Lens Bros, we've built our entire workflow around this promise. Our editing pipeline uses a combination of professional colorists and optimized batch processing to deliver gallery-ready images within 24 hours of every shoot, without sacrificing quality.\n\nThis speed advantage means your listing hits the MLS while buyer interest is at its peak, giving you a competitive edge that translates directly to faster sales and higher offers.`,
      },
      {
        heading: 'Pricing and Packages: What to Expect in 2026',
        content: `Real estate photography pricing in Chicago varies widely based on property size, services included, and photographer experience. Here's what you can expect in 2026:\n\n**Standard packages** for properties under 2,000 sq ft typically range from $200–$400 and include 25–40 edited photos with HDR processing.\n\n**Premium packages** for larger properties or luxury listings range from $400–$800 and may include drone aerials, twilight shots, virtual staging, and video walkthroughs.\n\n**The key differentiator** isn't just price — it's the combination of quality, turnaround time, and reliability. A photographer who delivers stunning images within 24 hours at a fair price is worth far more than a budget option that takes a week to deliver mediocre results.`,
        image: IMAGES.realEstateInterior,
      },
      {
        heading: 'Making Your Decision',
        content: `Choosing the right real estate photographer in Chicago comes down to three things: portfolio quality, turnaround time, and professionalism. Review their recent work (specifically Chicago properties), ask about their delivery timeline, and check reviews from other agents and brokers.\n\nAt Lens Bros, we combine all three — stunning HDR photography, drone aerials, twilight shoots, and our signature 24-hour delivery guarantee. If you're ready to elevate your listings, we'd love to show you what we can do.`,
      },
    ],
  },
  'top-chicago-wedding-venues-photography': {
    sections: [
      {
        heading: 'Why Your Venue Choice Impacts Your Wedding Photos',
        content: `Your wedding venue isn't just a location — it's the canvas for your entire visual story. In Chicago, couples are blessed with an extraordinary range of venues, from industrial-chic lofts in the West Loop to grand ballrooms along the Magnificent Mile. Each venue presents unique opportunities and challenges for photography.\n\nAs wedding photographers who've shot at virtually every major Chicago venue, we've learned that the most photogenic weddings happen when couples choose venues that align with their vision AND their photographer's strengths. Here are our top picks for 2026.`,
      },
      {
        heading: '1–3: Rooftop Venues with Skyline Views',
        content: `**London House Chicago** — The rooftop terrace at London House offers arguably the most iconic Chicago backdrop for wedding photography. The 360-degree views of the Chicago River, Tribune Tower, and Wrigley Building create a dramatic setting that photographs beautifully at any time of day. Pro tip: schedule your ceremony for golden hour to capture the skyline bathed in warm light.\n\n**Offshore Rooftop & Bar at Navy Pier** — As one of the largest rooftop venues in the country, Offshore provides sweeping lakefront views and a modern aesthetic. The open-air design means natural light floods every corner, making it a photographer's dream.\n\n**The Dalcy** — This Pilsen gem offers a stunning rooftop with downtown skyline views and a contemporary industrial interior. The contrast between the raw architectural elements and romantic wedding décor creates compelling visual storytelling.`,
        image: IMAGES.chicagoWeddingVenue,
      },
      {
        heading: '4–6: Historic and Grand Ballrooms',
        content: `**The Drake Hotel** — A Chicago institution since 1920, The Drake's Gold Coast Room features crystal chandeliers, ornate moldings, and a timeless elegance that elevates every wedding photo. The grand staircase is one of the most photographed spots in Chicago wedding photography.\n\n**The Rookery Building** — Frank Lloyd Wright's stunning light court in this Loop landmark provides a breathtaking backdrop with its ornate ironwork and soaring atrium. The natural light that pours through the glass ceiling creates ethereal, magazine-worthy images.\n\n**Bridgeport Art Center Skyline Loft** — This converted industrial space offers exposed brick, timber beams, and floor-to-ceiling windows with skyline views. It's the perfect blend of raw Chicago character and romantic atmosphere.`,
      },
      {
        heading: '7–10: Unique and Modern Spaces',
        content: `**Garfield Park Conservatory** — For couples who love nature, this botanical paradise offers lush greenery, dramatic palm rooms, and a show house that transforms into a magical wedding setting. The variety of backdrops within a single venue is unmatched.\n\n**Museum of Contemporary Art** — The MCA's clean, modern architecture and rotating art installations provide a sophisticated backdrop for contemporary couples. The terrace overlooking Lake Michigan is perfect for cocktail hour photography.\n\n**Salvage One** — This Fulton Market venue is filled with architectural salvage pieces that create an eclectic, one-of-a-kind atmosphere. Every corner offers a unique photo opportunity.\n\n**The Geraghty** — Designed by renowned architect Jeanne Gang, this South Loop venue features dramatic angular architecture and floor-to-ceiling windows. The minimalist design lets your wedding décor and the Chicago skyline take center stage.`,
        image: IMAGES.weddingFirstDance,
      },
      {
        heading: 'Photography Tips for Chicago Wedding Venues',
        content: `Regardless of which venue you choose, here are essential tips for ensuring your wedding photos are extraordinary:\n\n**Schedule a venue walkthrough with your photographer** — Every venue has hidden photo spots, tricky lighting situations, and optimal times of day. A pre-wedding walkthrough ensures your photographer has a plan for every moment.\n\n**Consider the light** — Chicago's lakefront venues face east, meaning morning ceremonies get soft, warm light while afternoon ceremonies may deal with harsh direct sun. Your photographer should advise on timing.\n\n**Plan for weather** — Chicago weather is unpredictable. The best wedding photographers have backup plans for rain, wind, and unexpected clouds. At Lens Bros, we always scout indoor alternatives at every venue.\n\n**Book early** — Top Chicago wedding photographers book 12–18 months in advance, especially for peak season (June–October). If you've found a photographer whose style you love, don't wait.`,
      },
    ],
  },
  'chicago-corporate-event-photography-guide': {
    sections: [
      {
        heading: 'Why Corporate Event Photography Matters More Than Ever',
        content: `In 2026, corporate events are a critical touchpoint for brand building, networking, and content creation. Whether you're hosting a product launch at the Merchandise Mart, a gala at the Art Institute, or a conference at McCormick Place, professional event photography serves multiple purposes: real-time social media content, post-event marketing materials, internal communications, and brand documentation.\n\nThe ROI of professional event photography extends far beyond the event itself. A single corporate event can generate months of marketing content — from LinkedIn posts and email newsletters to website updates and annual reports.`,
      },
      {
        heading: 'Choosing the Right Event Photographer in Chicago',
        content: `Not all photographers are suited for event work. Corporate event photography requires a unique combination of technical skill, social awareness, and editorial instinct. Here's what to look for:\n\n**Experience with similar events** — A wedding photographer and a corporate event photographer require different skill sets. Look for a photographer who has specific experience with your type of event, whether it's a 50-person dinner or a 5,000-person conference.\n\n**Equipment for challenging conditions** — Chicago event venues range from dimly lit ballrooms to brightly lit convention centers. Your photographer should have professional-grade cameras that perform well in low light, along with portable lighting solutions.\n\n**Turnaround time** — For corporate events, speed matters. You want to share highlights on social media during the event and have a full gallery ready for your marketing team within 24 hours. At Lens Bros, our 24-hour delivery guarantee means your event content is ready to deploy the next morning.`,
        image: IMAGES.chicagoEvent,
      },
      {
        heading: 'Creating an Effective Shot List',
        content: `A comprehensive shot list is the foundation of successful event photography. Here's a framework for Chicago corporate events:\n\n**Pre-event setup** — Venue details, branded signage, table settings, stage setup, and AV equipment. These "scene-setting" shots provide context for your event story.\n\n**Key moments** — Keynote speeches, panel discussions, award presentations, product reveals, and entertainment. Brief your photographer on the exact timing of these moments.\n\n**Candid networking** — Some of the most valuable event photos capture genuine interactions between attendees. These images humanize your brand and are perfect for social media.\n\n**VIP and executive coverage** — Ensure your photographer knows which executives, speakers, and VIP guests should be prioritized for individual and group photos.\n\n**Branding and details** — Close-ups of branded materials, sponsor logos, gift bags, and custom elements that showcase the investment in your event.`,
        image: IMAGES.productLaunch,
      },
      {
        heading: 'Lighting Considerations at Popular Chicago Venues',
        content: `Chicago's most popular corporate event venues each present unique lighting challenges:\n\n**McCormick Place** — The massive convention center has variable lighting depending on the hall. Booth areas are often fluorescent-lit, while main stages use theatrical lighting. A skilled photographer will adjust white balance and use supplemental lighting as needed.\n\n**The Art Institute of Chicago** — The museum's galleries have carefully controlled lighting that's designed for artwork, not photography. Your photographer needs to work with available light and may need to use bounce flash techniques.\n\n**Navy Pier** — The combination of natural light from the lakefront windows and interior event lighting creates mixed color temperatures. This is where professional editing — and fast turnaround — makes all the difference.\n\n**Hotel ballrooms (Palmer House, The Drake, Langham)** — These venues typically have warm, tungsten-based lighting with crystal chandeliers. The key is balancing the ambient warmth with accurate skin tones.`,
      },
      {
        heading: 'Maximizing Your Event Photography ROI',
        content: `To get the most value from your corporate event photography investment, plan your content strategy before the event:\n\n**Real-time social media** — Arrange for your photographer to share select images during the event for immediate social media posting. This drives engagement and FOMO for future events.\n\n**Post-event email campaign** — A curated gallery of event highlights makes for compelling email content. Send within 48 hours while the event is still fresh in attendees' minds.\n\n**Website and blog content** — Event photos refresh your website and provide material for blog posts and case studies. A single event can fuel content for months.\n\n**Internal communications** — Share event photos with your team to build company culture and recognize employee contributions.\n\nAt Lens Bros, we understand that corporate event photography isn't just about capturing moments — it's about creating assets that drive business results. Our 24-hour delivery ensures you can execute your content strategy without delay.`,
      },
    ],
  },
};

export default function BlogPost({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug);
  const content = postContent[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post || !content) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <p className="text-white/40">Blog post not found.</p>
      </div>
    );
  }

  // Find next/prev posts
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={`https://thelensbros.com/blog/${slug}`}
        keywords={post.keywords.join(', ')}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <AnimatedSection>
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 text-sm font-display mb-6 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-[oklch(0.65_0.2_250/0.15)] border border-[oklch(0.65_0.2_250/0.2)] rounded-full text-xs text-[oklch(0.65_0.2_250)] font-medium">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-white/30 text-xs">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </span>
              <span className="flex items-center gap-1.5 text-white/30 text-xs">
                <ClockIcon className="w-3.5 h-3.5" /> {post.readTime}
              </span>
            </div>
            <h1 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-white/40 text-lg leading-relaxed">
              {post.excerpt}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container max-w-5xl mx-auto px-4">
          <AnimatedSection>
            <div className="relative rounded-lg overflow-hidden aspect-[21/9]">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" width={1200} height={514} loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-50" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 md:pb-32">
        <div className="container max-w-3xl mx-auto px-4">
          {content.sections.map((section, i) => (
            <AnimatedSection key={i} className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-5">
                {section.heading}
              </h2>
              <div className="text-white/50 text-base leading-[1.85] space-y-4">
                {section.content.split('\n\n').map((paragraph, j) => (
                  <p key={j} dangerouslySetInnerHTML={{
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white/80 font-semibold">$1</strong>')
                  }} />
                ))}
              </div>
              {section.image && (
                <div className="mt-8 rounded-lg overflow-hidden">
                  <img src={section.image} alt={section.heading} className="w-full aspect-[16/9] object-cover" width={800} height={450} loading="lazy" decoding="async" />
                </div>
              )}
            </AnimatedSection>
          ))}

          {/* Author / CTA */}
          <AnimatedSection>
            <div className="mt-16 p-8 bg-gradient-to-br from-[oklch(0.65_0.2_250/0.08)] to-[oklch(0.75_0.14_80/0.06)] border border-[oklch(0.65_0.2_250/0.15)] rounded-lg">
              <h3 className="font-display font-bold text-xl text-white mb-3">Ready to Work with Lens Bros?</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                Whether you need real estate photography, wedding coverage, or corporate event documentation, our team delivers professional results within 24 hours. Based in Chicago, expanding to Miami.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[oklch(0.65_0.2_250)] to-[oklch(0.55_0.18_250)] text-white font-display font-semibold text-sm rounded-md hover:shadow-[0_0_30px_oklch(0.65_0.2_250/0.3)] transition-all duration-300"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Prev/Next Navigation */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
            {prevPost && (
              <Link href={`/blog/${prevPost.slug}`} className="group block bg-[oklch(0.1_0.015_270/0.5)] border border-white/5 rounded-lg p-6 hover:border-[oklch(0.65_0.2_250/0.15)] transition-colors">
                <span className="text-white/30 text-xs font-display uppercase tracking-wider">Previous</span>
                <h4 className="font-display font-semibold text-white text-sm mt-2 group-hover:text-[oklch(0.65_0.2_250)] transition-colors line-clamp-2">
                  {prevPost.title}
                </h4>
              </Link>
            )}
            {nextPost && (
              <Link href={`/blog/${nextPost.slug}`} className="group block bg-[oklch(0.1_0.015_270/0.5)] border border-white/5 rounded-lg p-6 hover:border-[oklch(0.65_0.2_250/0.15)] transition-colors md:text-right md:ml-auto">
                <span className="text-white/30 text-xs font-display uppercase tracking-wider">Next</span>
                <h4 className="font-display font-semibold text-white text-sm mt-2 group-hover:text-[oklch(0.65_0.2_250)] transition-colors line-clamp-2">
                  {nextPost.title}
                </h4>
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
