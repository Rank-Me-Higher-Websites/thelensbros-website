// Cinematic Noir — Contact Page
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import SectionLabel from '@/components/SectionLabel';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { toast } from 'sonner';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success('Message sent! We\'ll get back to you within 2 hours.');
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact The Lens Bros | Book a Photography Session in Chicago"
        description="Get in touch with The Lens Bros for professional photography and video services in Chicago. Book a shoot, request a quote, or ask about our 24-hour delivery guarantee."
        canonical="https://thelensbros.com/contact"
        keywords="contact photographer Chicago, book photography session, Chicago photography quote"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[oklch(0.65_0.2_250/0.06)] rounded-full blur-[150px] pointer-events-none" />
        <div className="container relative z-10">
          <AnimatedSection>
            <SectionLabel label="Contact Us" />
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4 max-w-2xl">
              Let's Create <span className="text-gradient-blue-gold">Together</span>
            </h1>
            <p className="text-white/40 text-lg max-w-xl">
              Ready to book a shoot or have questions? Reach out and we'll respond within 2 hours during business hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                {submitted ? (
                  <div className="bg-[oklch(0.1_0.015_270/0.5)] border border-[oklch(0.65_0.2_250/0.2)] rounded-lg p-12 text-center">
                    <CheckCircle className="w-16 h-16 text-[oklch(0.65_0.2_250)] mx-auto mb-6" />
                    <h2 className="font-display font-bold text-2xl text-white mb-3">Message Sent!</h2>
                    <p className="text-white/40 max-w-md mx-auto">
                      Thank you for reaching out. Our team will get back to you within 2 hours during business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/50 text-sm font-medium mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[oklch(0.1_0.015_270)] border border-white/10 rounded-md px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:border-[oklch(0.65_0.2_250/0.5)] focus:ring-1 focus:ring-[oklch(0.65_0.2_250/0.3)] transition-colors outline-none"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-white/50 text-sm font-medium mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[oklch(0.1_0.015_270)] border border-white/10 rounded-md px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:border-[oklch(0.65_0.2_250/0.5)] focus:ring-1 focus:ring-[oklch(0.65_0.2_250/0.3)] transition-colors outline-none"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/50 text-sm font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-[oklch(0.1_0.015_270)] border border-white/10 rounded-md px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:border-[oklch(0.65_0.2_250/0.5)] focus:ring-1 focus:ring-[oklch(0.65_0.2_250/0.3)] transition-colors outline-none"
                          placeholder="(312) 555-1234"
                        />
                      </div>
                      <div>
                        <label className="block text-white/50 text-sm font-medium mb-2">Service Interested In</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-[oklch(0.1_0.015_270)] border border-white/10 rounded-md px-4 py-3.5 text-white text-sm focus:border-[oklch(0.65_0.2_250/0.5)] focus:ring-1 focus:ring-[oklch(0.65_0.2_250/0.3)] transition-colors outline-none appearance-none"
                        >
                          <option value="" className="bg-[oklch(0.1_0.015_270)]">Select a service</option>
                          <option value="real-estate" className="bg-[oklch(0.1_0.015_270)]">Real Estate Photography</option>
                          <option value="events" className="bg-[oklch(0.1_0.015_270)]">Event Photography</option>
                          <option value="weddings" className="bg-[oklch(0.1_0.015_270)]">Wedding Photography</option>
                          <option value="photo" className="bg-[oklch(0.1_0.015_270)]">Photo Sessions</option>
                          <option value="video" className="bg-[oklch(0.1_0.015_270)]">Video Production</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/50 text-sm font-medium mb-2">Your Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[oklch(0.1_0.015_270)] border border-white/10 rounded-md px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:border-[oklch(0.65_0.2_250/0.5)] focus:ring-1 focus:ring-[oklch(0.65_0.2_250/0.3)] transition-colors outline-none resize-none"
                        placeholder="Tell us about your project, preferred dates, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[oklch(0.65_0.2_250)] to-[oklch(0.55_0.18_250)] text-white font-display font-semibold text-sm rounded-md hover:shadow-[0_0_30px_oklch(0.65_0.2_250/0.3)] transition-all duration-300"
                    >
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={200}>
                <div className="space-y-8">
                  {/* Location */}
                  <div className="bg-[oklch(0.1_0.015_270/0.5)] border border-white/5 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-[oklch(0.65_0.2_250/0.1)] border border-[oklch(0.65_0.2_250/0.2)] flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-[oklch(0.65_0.2_250)]" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-white mb-1">Location</h3>
                        <p className="text-white/40 text-sm leading-relaxed">
                          Chicago, Illinois<br />
                          Serving the greater Chicagoland area<br />
                          <span className="text-[oklch(0.75_0.14_80)]">Now expanding to Miami, FL</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="bg-[oklch(0.1_0.015_270/0.5)] border border-white/5 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-[oklch(0.65_0.2_250/0.1)] border border-[oklch(0.65_0.2_250/0.2)] flex items-center justify-center">
                        <Phone className="w-5 h-5 text-[oklch(0.65_0.2_250)]" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-white mb-1">Phone</h3>
                        <a href="tel:+13125551234" className="text-white/40 hover:text-white text-sm transition-colors">
                          (312) 555-1234
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="bg-[oklch(0.1_0.015_270/0.5)] border border-white/5 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-[oklch(0.65_0.2_250/0.1)] border border-[oklch(0.65_0.2_250/0.2)] flex items-center justify-center">
                        <Mail className="w-5 h-5 text-[oklch(0.65_0.2_250)]" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-white mb-1">Email</h3>
                        <a href="mailto:hello@thelensbros.com" className="text-white/40 hover:text-white text-sm transition-colors">
                          hello@thelensbros.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="bg-[oklch(0.1_0.015_270/0.5)] border border-white/5 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-[oklch(0.65_0.2_250/0.1)] border border-[oklch(0.65_0.2_250/0.2)] flex items-center justify-center">
                        <Clock className="w-5 h-5 text-[oklch(0.65_0.2_250)]" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-white mb-1">Business Hours</h3>
                        <p className="text-white/40 text-sm leading-relaxed">
                          Mon – Fri: 8:00 AM – 8:00 PM<br />
                          Sat – Sun: 9:00 AM – 6:00 PM<br />
                          <span className="text-[oklch(0.75_0.14_80)]">Shoots available 7 days a week</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 24hr guarantee */}
                  <div className="bg-gradient-to-br from-[oklch(0.65_0.2_250/0.1)] to-[oklch(0.75_0.14_80/0.1)] border border-[oklch(0.65_0.2_250/0.2)] rounded-lg p-6">
                    <div className="font-display font-bold text-white text-lg mb-2">24-Hour Delivery</div>
                    <p className="text-white/40 text-sm leading-relaxed">
                      Every project comes with our signature 24-hour delivery guarantee. Your content, on time, every time.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
