// Cinematic Noir — Terms and Conditions
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import SectionLabel from '@/components/SectionLabel';
import SEOHead from '@/components/SEOHead';

const sections = [
  {
    title: '1. Services',
    content: `Lens Bros provides professional photography and video production services, including but not limited to real estate photography, event photography, wedding photography, portrait sessions, and video production. All services are subject to availability and scheduling confirmation.\n\nOur signature 24-hour delivery guarantee applies to standard photography packages. Complex video production projects, wedding albums, and custom editing requests may require additional processing time, which will be communicated at the time of booking.`,
  },
  {
    title: '2. Booking and Payment',
    content: `A non-refundable deposit of 50% is required to secure your booking date. The remaining balance is due on the day of the shoot or event. We accept all major credit cards, bank transfers, and digital payment methods.\n\nBookings must be made at least 48 hours in advance for standard services. Rush bookings (under 48 hours) may be available at an additional fee, subject to photographer availability.`,
  },
  {
    title: '3. Cancellation and Rescheduling',
    content: `Cancellations made more than 72 hours before the scheduled shoot will receive a credit toward a future booking (minus a 10% administrative fee). Cancellations made within 72 hours of the scheduled shoot will forfeit the deposit.\n\nRescheduling is available at no additional charge if requested more than 48 hours before the original date, subject to availability. Weather-related rescheduling for outdoor shoots is handled on a case-by-case basis at no additional cost.`,
  },
  {
    title: '4. Intellectual Property and Usage Rights',
    content: `Upon full payment, clients receive a non-exclusive license to use the delivered photographs and videos for personal or commercial purposes as specified in their service agreement. Lens Bros retains copyright ownership of all images and videos produced.\n\nLens Bros reserves the right to use photographs and videos from client sessions for portfolio, marketing, and promotional purposes unless a written exclusion agreement is signed prior to the shoot. Client requests for exclusivity must be made in writing before the session.`,
  },
  {
    title: '5. Delivery and Revisions',
    content: `Standard delivery timelines are as follows: photography packages are delivered within 24 hours; video production within 24–48 hours; wedding albums within 2–4 weeks. All deliverables are provided via secure online gallery or digital download.\n\nEach package includes one round of minor revisions (color adjustments, crop modifications). Additional revisions or extensive retouching beyond the scope of the original agreement may incur additional fees.`,
  },
  {
    title: '6. Limitation of Liability',
    content: `While Lens Bros takes every precaution to ensure the safety and integrity of all equipment and data, we are not liable for circumstances beyond our control, including but not limited to equipment malfunction, extreme weather conditions, venue restrictions, or acts of God.\n\nIn the unlikely event of a total loss of images due to equipment failure, our liability is limited to a full refund of the amount paid for the affected session. We maintain backup systems and redundant storage to minimize this risk.`,
  },
  {
    title: '7. Privacy',
    content: `We respect your privacy and handle all personal information in accordance with our Privacy Policy. Client information is never sold or shared with third parties without explicit consent. Please refer to our Privacy Policy for detailed information on data collection and usage.`,
  },
  {
    title: '8. Changes to Terms',
    content: `Lens Bros reserves the right to update these Terms and Conditions at any time. Changes will be posted on this page with an updated effective date. Continued use of our services after changes are posted constitutes acceptance of the revised terms.`,
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Terms & Conditions | Lens Bros"
        description="Terms and conditions for Lens Bros photography and video production services. Booking, payment, cancellation, and usage rights policies."
        canonical="https://thelensbros.com/terms"
      />
      <Navbar />

      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <SectionLabel label="Legal" />
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Terms & Conditions
            </h1>
            <p className="text-white/40 text-sm mb-12">
              Last updated: April 1, 2026
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <p className="text-white/50 text-base leading-[1.85] mb-12">
              Welcome to Lens Bros. By booking our services or using our website (thelensbros.com), you agree to the following terms and conditions. Please read them carefully before engaging our services.
            </p>
          </AnimatedSection>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <h2 className="font-display font-semibold text-xl text-white mb-4">{section.title}</h2>
                <div className="text-white/45 text-sm leading-[1.9] space-y-4">
                  {section.content.split('\n\n').map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-16">
            <div className="p-6 bg-[oklch(0.1_0.015_270/0.5)] border border-white/5 rounded-lg">
              <p className="text-white/40 text-sm">
                If you have questions about these terms, please contact us at{' '}
                <a href="mailto:hello@thelensbros.com" className="text-[oklch(0.65_0.2_250)] hover:underline">
                  hello@thelensbros.com
                </a>{' '}
                or call{' '}
                <a href="tel:+13125551234" className="text-[oklch(0.65_0.2_250)] hover:underline">
                  (312) 555-1234
                </a>.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
