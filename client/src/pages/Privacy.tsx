// Cinematic Noir — Privacy Policy
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import SectionLabel from '@/components/SectionLabel';
import SEOHead from '@/components/SEOHead';

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us when booking services, filling out contact forms, or communicating with our team. This may include your name, email address, phone number, mailing address, event details, and payment information.\n\nWe also automatically collect certain technical information when you visit our website, including your IP address, browser type, device information, pages visited, and referring URLs. This information is collected through cookies and similar tracking technologies.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to provide, maintain, and improve our photography and video production services. Specifically, we use your information to:\n\nProcess bookings and payments; communicate with you about your sessions, deliverables, and account; send promotional materials and updates about our services (with your consent); improve our website and user experience; comply with legal obligations and protect our rights.\n\nWe will never sell your personal information to third parties. We may share information with trusted service providers who assist us in operating our business, such as payment processors and cloud storage providers, under strict confidentiality agreements.`,
  },
  {
    title: '3. Photo and Video Content',
    content: `As a photography and video production company, we create visual content featuring our clients and their events. The use of this content is governed by the service agreement and model release forms signed at the time of booking.\n\nUnless otherwise agreed in writing, Lens Bros may use photographs and videos from client sessions for portfolio display, marketing materials, social media, and promotional purposes. Clients who wish to restrict the use of their images must submit a written request prior to their session.`,
  },
  {
    title: '4. Data Security',
    content: `We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption of sensitive data, secure server infrastructure, and regular security audits.\n\nPhotographs and videos are stored on encrypted, redundant cloud storage systems with access controls limited to authorized team members. Client galleries are protected by unique access links and optional password protection.`,
  },
  {
    title: '5. Cookies and Tracking',
    content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings.\n\nWe use analytics services to understand how visitors interact with our website. This data is aggregated and anonymized, and is used solely to improve our website performance and user experience.`,
  },
  {
    title: '6. Third-Party Services',
    content: `Our website may contain links to third-party websites and services, including social media platforms, payment processors, and gallery hosting services. We are not responsible for the privacy practices of these third parties.\n\nWe recommend reviewing the privacy policies of any third-party services you interact with through our website.`,
  },
  {
    title: '7. Your Rights',
    content: `You have the right to access, correct, or delete your personal information at any time. You may also opt out of marketing communications by clicking the unsubscribe link in any promotional email or contacting us directly.\n\nIf you are a resident of California, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect and the right to request deletion of your data.\n\nIf you are a resident of the European Economic Area, you have rights under the General Data Protection Regulation (GDPR), including the right to data portability and the right to lodge a complaint with a supervisory authority.`,
  },
  {
    title: '8. Children\'s Privacy',
    content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child under 18, we will take steps to delete that information promptly.`,
  },
  {
    title: '9. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website with a new effective date. Your continued use of our services after changes are posted constitutes acceptance of the revised policy.`,
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Privacy Policy | Lens Bros"
        description="Privacy policy for Lens Bros. Learn how we collect, use, and protect your personal information and photography content."
        canonical="https://thelensbros.com/privacy"
      />
      <Navbar />

      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <SectionLabel label="Legal" />
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/40 text-sm mb-12">
              Last updated: April 1, 2026
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <p className="text-white/50 text-base leading-[1.85] mb-12">
              At Lens Bros ("we," "us," or "our"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (thelensbros.com) or use our photography and video production services.
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
              <h3 className="font-display font-semibold text-white mb-2">Contact Us About Privacy</h3>
              <p className="text-white/40 text-sm">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us at{' '}
                <a href="mailto:privacy@thelensbros.com" className="text-[oklch(0.65_0.2_250)] hover:underline">
                  privacy@thelensbros.com
                </a>{' '}
                or write to us at: Lens Bros, Chicago, IL.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
