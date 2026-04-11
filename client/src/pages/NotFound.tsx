import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { BRAND } from '@/lib/images';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center">
          <img src={BRAND.icon} alt="" className="w-20 h-20 mx-auto mb-8 opacity-30" />
          <h1 className="font-display font-bold text-7xl md:text-9xl text-gradient-blue-gold mb-4">404</h1>
          <p className="text-white/40 text-lg mb-8">This page doesn't exist.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[oklch(0.65_0.2_250)] to-[oklch(0.55_0.18_250)] text-white font-display font-semibold text-sm rounded-md hover:shadow-[0_0_30px_oklch(0.65_0.2_250/0.3)] transition-all duration-300"
          >
            Back to Home <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
