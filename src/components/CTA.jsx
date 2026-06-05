import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function CTA() {
  const [ref, inView] = useInView(0.2);

  return (
    <section ref={ref} className="relative overflow-hidden py-24 lg:py-32">
      {/* Gradient background */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 50%, #5B21B6 100%)' }} />
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20 animate-float"
          style={{ background: '#F97316', filter: 'blur(60px)' }} />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-15 animate-float delay-300"
          style={{ background: '#10B981', filter: 'blur(60px)' }} />
        <svg width="100%" height="100%">
          <defs>
            <pattern id="ctaGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaGrid)" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className={inView ? 'animate-fadeInUp' : 'opacity-0'}>
          <span className="inline-flex items-center gap-1.5 border border-white/20 text-white/80 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest bg-white/10">
            Get Started Today
          </span>
          <h2 style={{ fontFamily: 'Outfit', letterSpacing: '-0.02em' }}
            className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Turn Your Google Business Profile into a{' '}
            <span style={{ color: '#FCD34D' }}>Lead-Generating Machine</span>
          </h2>
          <p className="text-purple-200 text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Our experts optimize your GMB profile to drive real customers — from setup and optimization to ongoing management and reporting.
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-4 ${inView ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
          <a href="tel:8770161193"
            className="flex items-center gap-2.5 border-2 border-white/50 text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-white hover:text-[#7C3AED] transition-all duration-200 hover:-translate-y-1">
            <Phone size={17} /> Call +91 8770161193
          </a>
          <a href="https://wa.me/918770161193" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-white px-8 py-4 rounded-2xl font-bold text-base transition-all hover:-translate-y-1"
            style={{ background: '#25d366', boxShadow: '0 6px 24px rgba(37,211,102,0.4)' }}>
            <MessageCircle size={17} /> WhatsApp Us
          </a>
          <a href="#services"
            className="flex items-center gap-2.5 bg-white text-[#7C3AED] px-8 py-4 rounded-2xl font-bold text-base hover:bg-purple-50 transition-all hover:-translate-y-1"
            style={{ boxShadow: '0 6px 24px rgba(255,255,255,0.25)' }}>
            View Services <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
