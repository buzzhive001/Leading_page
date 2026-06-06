import { Star, Shield, MessageCircle, Target, BarChart2, CheckCircle, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const reasons = [
  { icon: <Star size={19} />,        bg: '#FFF7ED', color: '#F97316', title: 'Proven SEO Results',        desc: 'We help businesses achieve higher rankings, increased traffic, and measurable growth.' },
  { icon: <Target size={19} />,      bg: '#ECFDF5', color: '#10B981', title: 'Customized SEO Strategy',   desc: 'Every business is unique. We build personalized SEO campaigns based on your goals and industry.' },
  { icon: <BarChart2 size={19} />,   bg: '#EFF6FF', color: '#3B82F6', title: 'Experienced SEO Team',      desc: 'Our specialists stay updated with Google\'s latest algorithm updates and best practices.' },
  { icon: <MessageCircle size={19} />,bg: '#EDE9FE', color: '#7C3AED', title: 'Transparent Communication',desc: 'No hidden activities. You\'ll always know what work is being done and the results being achieved.' },
  { icon: <CheckCircle size={19} />, bg: '#FEF3C7', color: '#D97706', title: 'ROI-Focused Approach',      desc: 'We focus on generating leads, inquiries, and sales — not just rankings.' },
  { icon: <Shield size={19} />,      bg: '#F0FDF4', color: '#16A34A', title: 'Ethical SEO Practices',     desc: 'We follow Google\'s guidelines to deliver sustainable, long-term SEO success.' },
];

export default function WhyChooseUs() {
  const [ref, inView] = useInView();

  return (
    <section style={{ background: '#EBF5FB' }} ref={ref} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className={inView ? 'animate-fadeInLeft' : 'opacity-0'}>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest"
              style={{ background: '#DAEEF8', color: '#00b4e6', border: '1px solid #a8d8f0' }}>
              Why Choose Us
            </span>
            <h2 style={{ fontFamily: 'Outfit', letterSpacing: '-0.02em' }}
              className="text-3xl lg:text-4xl font-black text-gray-900 mb-5 leading-tight">
              Why Choose Aleut for SEO in Indore?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10 text-[17px]">
              We are a trusted SEO company in Indore focused on delivering real, measurable results for businesses of every size and industry.
            </p>
            <div className="space-y-5">
              {reasons.map((r, i) => (
                <div key={r.title}
                  className={`flex gap-4 items-start p-5 bg-white rounded-2xl transition-colors ${inView ? `animate-fadeInLeft delay-${(i + 1) * 100}` : 'opacity-0'}`}
                  style={{ border: '1.5px solid #c8e8f5', boxShadow: '0 2px 12px rgba(0,180,230,0.06)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: r.bg, color: r.color }}>
                    {r.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Outfit' }} className="font-black text-gray-900 mb-1">{r.title}</div>
                    <div className="text-gray-500 text-sm leading-relaxed">{r.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="#about"
              className="inline-flex items-center gap-2 mt-10 text-white px-7 py-3.5 rounded-2xl text-sm font-bold transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#00b4e6,#1B3A6B)', boxShadow: '0 6px 20px rgba(0,180,230,0.35)' }}>
              Learn More About Us <ArrowRight size={15} />
            </a>
          </div>

          {/* Right image */}
          <div className={`relative ${inView ? 'animate-fadeInRight delay-200' : 'opacity-0'}`}>
            <div className="absolute -inset-4 rounded-3xl blur-3xl opacity-15"
              style={{ background: 'linear-gradient(135deg,#00b4e6,#1B3A6B)' }} />
            <div className="relative rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 24px 64px rgba(0,180,230,0.2)' }}>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=85"
                alt="Aleut Technologies team"
                className="w-full h-120 object-cover"
                onError={e => { e.target.src = 'https://placehold.co/700x480?text=Our+Team'; }}
              />
              <div className="absolute inset-0 opacity-20"
                style={{ background: 'linear-gradient(to top,#1B3A6B,transparent)' }} />
            </div>
            <div className="absolute -bottom-5 -left-5 glass rounded-2xl px-5 py-4 animate-float delay-200"
              style={{ border: '1.5px solid #a8d8f0', boxShadow: '0 8px 32px rgba(0,180,230,0.15)', background: '#fff' }}>
              <div className="text-xs text-gray-400 font-semibold mb-0.5">Client Retention Rate</div>
              <div className="text-2xl font-black" style={{ fontFamily: 'Outfit', color: '#00b4e6' }}>95% Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
