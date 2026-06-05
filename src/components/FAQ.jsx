import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const faqs = [
  { q: 'What is Google Business Profile (GMB) and why is it important?', a: 'Google Business Profile is a free tool allowing businesses to manage their online presence across Google Search and Maps. It directly impacts your visibility in local search results, helping potential customers find your business, see your hours, read reviews, and contact you easily.' },
  { q: 'How long does it take to see results from GMB optimization?',    a: 'Most businesses see improvements within 2–4 weeks. Significant results — like appearing in the top 3 of the Google Maps local pack — typically take 1–3 months depending on your city and competition level.' },
  { q: 'My Google Business Profile is suspended. Can you help?',         a: 'Yes! Suspension reinstatement is our core specialty. We handle both soft and hard suspensions — thorough audit, policy violation fixes, and direct Google appeal management. We have a 98% success rate.' },
  { q: 'What is the difference between Local SEO and GMB Optimization?', a: 'GMB Optimization focuses specifically on your Google Business Profile to improve Maps rankings. Local SEO is broader — website optimization, citations, backlinks — to improve your overall local online presence.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const [ref, inView] = useInView();

  return (
    <section id="faq" ref={ref} style={{ background: '#F5F3FF' }} className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">

        <div className={`text-center mb-14 ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-1.5 border border-purple-200 text-[#7C3AED] text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest bg-purple-50">
            FAQ
          </span>
          <h2 style={{ fontFamily: 'Outfit', letterSpacing: '-0.02em' }}
            className="text-3xl lg:text-4xl font-black text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-[17px]">Everything you need to know about our GMB services.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${inView ? `animate-fadeInUp delay-${i * 100}` : 'opacity-0'}`}
              style={{
                border: open === i ? '2px solid #7C3AED' : '1.5px solid #DDD6FE',
                boxShadow: open === i ? '0 8px 32px rgba(124,58,237,0.12)' : '0 2px 8px rgba(124,58,237,0.05)',
              }}>
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left transition-colors duration-200"
                style={{ background: open === i ? '#F5F3FF' : '#FFFFFF' }}
                onClick={() => setOpen(open === i ? null : i)}>
                <span style={{ fontFamily: 'Outfit', color: '#7C3AED' }} className="font-bold text-[15px] pr-4 leading-snug">
                  {f.q}
                </span>
                <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{ background: open === i ? '#7C3AED' : '#EDE9FE', color: open === i ? '#fff' : '#7C3AED' }}>
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed border-t border-purple-100 pt-4 bg-white animate-fadeInUp">
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
