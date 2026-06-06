import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const faqs = [
  { q: 'How long does SEO take to show results?',              a: 'Most businesses begin seeing noticeable improvements within 3–6 months, depending on competition and website condition.' },
  { q: 'Why should I hire an SEO company in Indore?',          a: 'A professional SEO company helps improve visibility, attract targeted traffic, and generate more leads through organic search. A local agency understands your market, competition, and audience better.' },
  { q: 'How much do SEO services cost in Indore?',             a: 'SEO pricing depends on your goals, competition, and project scope. We provide customized SEO packages based on your business requirements. Contact us for a free consultation.' },
  { q: 'Do you provide monthly SEO reports?',                  a: 'Yes. We provide transparent monthly reports covering rankings, traffic, backlinks, and campaign performance so you always know what\'s happening.' },
  { q: 'Can you help local businesses rank in Google Maps?',   a: 'Absolutely. Our Local SEO strategies help businesses improve visibility in Google Maps and local search results, driving more foot traffic and inquiries.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const [ref, inView] = useInView();

  return (
    <section id="faq" ref={ref} style={{ background: '#EBF5FB' }} className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">

        <div className={`text-center mb-14 ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-1.5 border border-blue-200 text-[#00b4e6] text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest bg-blue-50">
            FAQ
          </span>
          <h2 style={{ fontFamily: 'Outfit', letterSpacing: '-0.02em' }}
            className="text-3xl lg:text-4xl font-black text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-[17px]">Everything you need to know about our SEO services in Indore.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${inView ? `animate-fadeInUp delay-${i * 100}` : 'opacity-0'}`}
              style={{
                border: open === i ? '2px solid #00b4e6' : '1.5px solid #a8d8f0',
                boxShadow: open === i ? '0 8px 32px rgba(124,58,237,0.12)' : '0 2px 8px rgba(124,58,237,0.05)',
              }}>
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left transition-colors duration-200"
                style={{ background: open === i ? '#EBF5FB' : '#FFFFFF' }}
                onClick={() => setOpen(open === i ? null : i)}>
                <span style={{ fontFamily: 'Outfit', color: '#00b4e6' }} className="font-bold text-[15px] pr-4 leading-snug">
                  {f.q}
                </span>
                <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{ background: open === i ? '#00b4e6' : '#DAEEF8', color: open === i ? '#fff' : '#00b4e6' }}>
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed border-t border-blue-100 pt-4 bg-white animate-fadeInUp">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
