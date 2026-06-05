import { useInView } from '../hooks/useInView';

const tags = ['Profile Optimization', 'Keyword Integration', 'Review Management', 'Photo & Posts', 'Analytics Reporting'];

export default function WhatIsGMB() {
  const [ref, inView] = useInView();

  return (
    <section id="about" ref={ref} style={{ background: '#F5F3FF' }} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left image */}
          <div className={`relative ${inView ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
              style={{ background: 'linear-gradient(135deg,#7C3AED,#F97316)' }} />
            <div className="relative rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 24px 64px rgba(124,58,237,0.2)' }}>
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&q=85"
                alt="GMB Optimization"
                className="w-full h-100 object-cover"
                onError={e => { e.target.src = 'https://placehold.co/640x400?text=GMB'; }}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 opacity-20"
                style={{ background: 'linear-gradient(to top right,#5B21B6,transparent)' }} />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 glass rounded-2xl px-5 py-3.5 shadow-xl border border-purple-100 animate-float"
              style={{ boxShadow: '0 8px 32px rgba(124,58,237,0.15)' }}>
              <div className="text-xs text-gray-400 font-semibold mb-0.5">Google Maps Rank</div>
              <div className="text-xl font-black" style={{ fontFamily: 'Outfit', color: '#7C3AED' }}>#1 Position 🎯</div>
            </div>
          </div>

          {/* Right content */}
          <div className={inView ? 'animate-fadeInRight delay-200' : 'opacity-0'}>
            <span className="inline-flex items-center gap-1.5 border border-purple-200 text-[#7C3AED] text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest bg-purple-50">
              What We Do
            </span>
            <h2 style={{ fontFamily: 'Outfit', letterSpacing: '-0.02em' }}
              className="text-3xl lg:text-4xl font-black text-gray-900 mb-5 leading-tight">
              What Is Google Business Profile Optimization?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4 text-[17px]">
              Google Business Profile (GMB) optimization is the art and science of enhancing your online business profile to improve visibility in local Google Search and Maps results — the single most powerful tool for local discovery.
            </p>
            <p className="text-gray-500 leading-relaxed text-[17px]">
              Our expert service transforms your profile by improving accuracy, integrating high-value keywords, and ensuring your information is always current to help you rank for searches that matter most.
            </p>
            {/* Feature pills */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {tags.map(tag => (
                <span key={tag}
                  className="flex items-center gap-1.5 text-sm font-semibold text-[#7C3AED] bg-purple-50 border border-purple-200 px-3.5 py-1.5 rounded-full transition-all hover:bg-[#7C3AED] hover:text-white hover:border-transparent cursor-default">
                  <span className="text-[#10B981]">✓</span> {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
