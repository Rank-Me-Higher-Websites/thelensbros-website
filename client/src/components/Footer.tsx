// Cinematic Noir — Footer with aperture motif divider
import { Link } from 'wouter';
import { BRAND } from '@/lib/images';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[oklch(0.06_0.01_270)] border-t border-white/5">
      {/* Gradient line accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[oklch(0.65_0.2_250)] to-transparent" />

      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <img src={BRAND.icon} alt="Lens Bros" className="h-10 w-10 object-contain" />
              <span className="font-display font-bold text-xl text-white tracking-tight">
                LENS BR<span className="text-gradient-blue-gold">O</span>S
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Shot Today. Delivered Tomorrow. Chicago's premier photography and video production company.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/30 hover:text-[oklch(0.65_0.2_250)] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/30 hover:text-[oklch(0.65_0.2_250)] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/30 hover:text-[oklch(0.65_0.2_250)] transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-[0.15em] mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                { label: 'Real Estate Photography', href: '/services/real-estate' },
                { label: 'Event Photography', href: '/services/events' },
                { label: 'Wedding Photography', href: '/services/weddings' },
                { label: 'Photo Sessions', href: '/services/photo' },
                { label: 'Video Production', href: '/services/video' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/40 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-[0.15em] mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
                { label: 'Terms & Conditions', href: '/terms' },
                { label: 'Privacy Policy', href: '/privacy' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/40 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-[0.15em] mb-5">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[oklch(0.65_0.2_250)] mt-0.5 shrink-0" />
                <span className="text-white/40 text-sm">Chicago, IL<br />Expanding to Miami, FL</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[oklch(0.65_0.2_250)] shrink-0" />
                <a href="tel:+13125551234" className="text-white/40 hover:text-white text-sm transition-colors">(312) 555-1234</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[oklch(0.65_0.2_250)] shrink-0" />
                <a href="mailto:hello@thelensbros.com" className="text-white/40 hover:text-white text-sm transition-colors">hello@thelensbros.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Lens Bros. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-white/25 hover:text-white/50 text-xs transition-colors">Terms</Link>
            <Link href="/privacy" className="text-white/25 hover:text-white/50 text-xs transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
