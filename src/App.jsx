import { useState, useEffect, useRef } from 'react';
import logo from './assets/logo.png';
import './App.css';

function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  useEffect(() => {
    const move = e => {
      if (dot.current) { dot.current.style.left = e.clientX + 'px'; dot.current.style.top = e.clientY + 'px'; }
      if (ring.current) { ring.current.style.left = e.clientX + 'px'; ring.current.style.top = e.clientY + 'px'; }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return (
    <>
      <div ref={dot} style={{ position: 'fixed', width: 8, height: 8, background: '#00b4e6', borderRadius: '50%', pointerEvents: 'none', zIndex: 9999, transform: 'translate(-50%,-50%)', transition: 'transform .1s' }} />
      <div ref={ring} style={{ position: 'fixed', width: 32, height: 32, border: '2px solid rgba(0,180,230,0.5)', borderRadius: '50%', pointerEvents: 'none', zIndex: 9998, transform: 'translate(-50%,-50%)', transition: 'left .08s ease-out, top .08s ease-out' }} />
    </>
  );
}

const NAV_LINKS = ['Services', 'Process', 'Why Us', 'FAQ'];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav style={{
      position: 'sticky', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.97)' : '#fff',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : '0 1px 0 #e8f4fb',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 5vw', height: 70, transition: 'box-shadow .3s',
    }}>
      <img src={logo} alt="Aleut Technologies" style={{ height: 64, objectFit: 'contain' }} />
      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
        {NAV_LINKS.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase().replace(' ', '-')}`}
              style={{ color: '#1B3A6B', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none', letterSpacing: '0.04em' }}>
              {l}
            </a>
          </li>
        ))}
      </ul>
      <a href="#cta" style={{
        background: '#00b4e6', color: '#fff', padding: '0.6rem 1.4rem',
        borderRadius: 6, fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none',
      }}>Get Free Audit</a>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e8f4fb 50%, #f8fbff 100%)',
      paddingTop: 80, paddingBottom: 80, textAlign: 'center',
    }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 5vw' }}>
        <span style={{
          display: 'inline-block', background: '#e0f4fc', color: '#00b4e6',
          fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em',
          textTransform: 'uppercase', padding: '0.4rem 1rem', borderRadius: 20,
          marginBottom: '1.5rem', border: '1px solid #b3e5f7',
        }}>SEO Services</span>

        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15,
          color: '#0d1b2a', marginBottom: '1.5rem', fontFamily: 'Poppins, sans-serif',
        }}>
          SEO Company That Helps You<br />
          <span style={{ color: '#00b4e6' }}>Rank Higher</span> &{' '}
          <span style={{ color: '#1B3A6B' }}>Generate More Leads</span>
        </h1>

        <p style={{
          fontSize: '1.05rem', color: '#4a5568', lineHeight: 1.8,
          maxWidth: 680, margin: '0 auto 2.5rem',
        }}>
          Increase your online visibility, attract qualified traffic, and grow your revenue
          with result-driven SEO services. Our data-backed SEO strategies help
          businesses dominate search results and convert visitors into customers.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
          <a href="#cta" style={{
            background: '#00b4e6', color: '#fff', padding: '0.85rem 2rem',
            borderRadius: 8, fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(0,180,230,0.35)',
          }}>Get Free SEO Audit ↗</a>
          <a href="#process" style={{
            background: '#fff', color: '#1B3A6B', padding: '0.85rem 2rem',
            borderRadius: 8, fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none',
            border: '2px solid #1B3A6B',
          }}>View Our Process</a>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem', maxWidth: 800, margin: '0 auto',
        }}>
          {[
            { label: 'Rank in Google AI Overviews & Search Results', icon: '🤖' },
            { label: '150+ Page 1 Keyword Rankings Achieved', icon: '🏆' },
            { label: 'Data-Driven SEO Framework', icon: '📊' },
            { label: 'Transparent Reporting & Measurable ROI', icon: '📈' },
          ].map(b => (
            <div key={b.label} style={{
              background: '#fff', borderRadius: 10, padding: '1rem',
              border: '1.5px solid #c8e8f5', boxShadow: '0 2px 8px rgba(0,180,230,0.07)',
              fontSize: '0.82rem', color: '#1B3A6B', fontWeight: 600, lineHeight: 1.4,
            }}>
              <span style={{ fontSize: '1.3rem', display: 'block', marginBottom: '0.4rem' }}>{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={{ background: '#fff', padding: '80px 5vw' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div>
          <span style={{ display: 'inline-block', background: '#e0f4fc', color: '#00b4e6', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.4rem 1rem', borderRadius: 20, marginBottom: '1.2rem', border: '1px solid #b3e5f7' }}>Who We Are</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: '#0d1b2a', lineHeight: 1.2, marginBottom: '1.2rem' }}>
            Trusted SEO Company for <span style={{ color: '#00b4e6' }}>Sustainable Growth</span>
          </h2>
          <p style={{ color: '#4a5568', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.95rem' }}>
            Whether you're a startup, local business, eCommerce store, or enterprise brand, our SEO experts create customized strategies that improve rankings, increase organic traffic, and generate quality leads.
          </p>
          <p style={{ color: '#4a5568', lineHeight: 1.8, fontSize: '0.95rem' }}>
            We focus on long-term growth rather than short-term ranking spikes, ensuring your website remains competitive in Google's search results.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {[
            { num: '150+', label: 'Page 1 Rankings', color: '#00b4e6' },
            { num: '95%', label: 'Client Retention', color: '#1B3A6B' },
            { num: '6X', label: 'Lead Increase', color: '#00b4e6' },
            { num: '70%', label: 'Ranking Improvement', color: '#1B3A6B' },
          ].map(s => (
            <div key={s.label} style={{
              background: '#f0f9ff', borderRadius: 12, padding: '1.5rem',
              border: '1.5px solid #c8e8f5', textAlign: 'center',
            }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: '0.78rem', color: '#4a5568', marginTop: '0.4rem', fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { num: '01', title: 'Local SEO', desc: 'Dominate local searches and Google Business Profile results to attract customers from your local area and surrounding regions.', color: '#00b4e6' },
  { num: '02', title: 'Technical SEO', desc: 'Improve website speed, crawlability, indexing, Core Web Vitals, and technical performance.', color: '#1B3A6B' },
  { num: '03', title: 'On-Page SEO', desc: 'Optimize content, meta tags, internal linking, keyword targeting, and website structure.', color: '#00b4e6' },
  { num: '04', title: 'Off-Page SEO', desc: 'Build high-quality backlinks and improve domain authority through ethical link-building strategies.', color: '#1B3A6B' },
  { num: '05', title: 'eCommerce SEO', desc: 'Drive more sales and visibility for Shopify, WooCommerce, Magento, and custom eCommerce websites.', color: '#00b4e6' },
  { num: '06', title: 'SEO Content Marketing', desc: 'Create high-quality, search-optimized content that attracts users and increases conversions.', color: '#1B3A6B' },
];

function Services() {
  return (
    <section id="services" style={{ background: '#f8faff', padding: '80px 5vw' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ display: 'inline-block', background: '#e0f4fc', color: '#00b4e6', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.4rem 1rem', borderRadius: 20, marginBottom: '1rem', border: '1px solid #b3e5f7' }}>Our SEO Services</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#0d1b2a' }}>Complete SEO Solutions for Your Business</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {SERVICES.map(s => (
            <div key={s.num} style={{
              background: '#fff', borderRadius: 14, padding: '2rem',
              border: '1.5px solid #e0eef7', boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              transition: 'transform .2s, box-shadow .2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,180,230,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'; }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: s.color, letterSpacing: '0.1em', marginBottom: '0.6rem' }}>{s.num}</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0d1b2a', marginBottom: '0.8rem' }}>{s.title}</h3>
              <p style={{ fontSize: '0.88rem', color: '#4a5568', lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { num: '01', title: 'SEO Audit & Website Analysis', desc: 'We conduct a detailed analysis of your website to identify technical issues, ranking opportunities, and competitor strengths.', tags: ['Technical SEO Issues', 'Website Performance', 'Competitor Rankings', 'Keyword Opportunities', 'User Experience Factors'] },
  { num: '02', title: 'Keyword Research & Strategy', desc: 'Our team discovers high-intent keywords that your potential customers are actively searching for.', tags: ['Commercial Keywords', 'Local Search Terms', 'Service-Based Keywords', 'Long-Tail Opportunities', 'Buyer Intent Queries'] },
  { num: '03', title: 'Website Optimization', desc: 'We optimize every important SEO element on your website.', tags: ['Meta Titles & Descriptions', 'Content Optimization', 'Internal Linking', 'Schema Markup', 'URL Structure', 'Image Optimization'] },
  { num: '04', title: 'Authority Building & Link Acquisition', desc: 'Our off-page SEO strategy focuses on building trust and authority in your industry.', tags: ['High-Authority Backlinks', 'Local Citations', 'Business Listings', 'Digital PR Outreach', 'Brand Mentions'] },
  { num: '05', title: 'Performance Tracking & Growth', desc: 'We continuously monitor campaign performance and refine strategies for better results.', tags: ['Keyword Rankings', 'Organic Traffic Growth', 'Lead Tracking', 'Conversion Analysis', 'Competitor Comparison'] },
];

function Process() {
  return (
    <section id="process" style={{ background: '#fff', padding: '80px 5vw' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ display: 'inline-block', background: '#e0f4fc', color: '#00b4e6', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.4rem 1rem', borderRadius: 20, marginBottom: '1rem', border: '1px solid #b3e5f7' }}>How We Work</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#0d1b2a' }}>Our SEO Process</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {STEPS.map((s, i) => (
            <div key={s.num} style={{
              background: '#f8faff', borderRadius: 14, padding: '2rem',
              border: '1.5px solid #e0eef7', display: 'grid',
              gridTemplateColumns: '60px 1fr', gap: '1.5rem', alignItems: 'start',
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: '50%', display: 'flex',
                alignItems: 'center', justifyContent: 'center', fontWeight: 800,
                fontSize: '1rem', color: '#fff',
                background: i % 2 === 0 ? '#00b4e6' : '#1B3A6B',
              }}>{s.num}</div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0d1b2a', marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.88rem', color: '#4a5568', lineHeight: 1.7, marginBottom: '0.8rem' }}>{s.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {s.tags.map(t => (
                    <span key={t} style={{
                      background: '#e0f4fc', color: '#1B3A6B', fontSize: '0.72rem',
                      fontWeight: 600, padding: '0.25rem 0.7rem', borderRadius: 20,
                      border: '1px solid #b3e5f7',
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const REASONS = [
  { title: 'Proven SEO Results', desc: 'We help businesses achieve higher rankings, increased traffic, and measurable growth.', icon: '🏆' },
  { title: 'Customized SEO Strategy', desc: 'Every business is unique. We build personalized SEO campaigns based on your goals and industry.', icon: '🎯' },
  { title: 'Experienced SEO Team', desc: "Our specialists stay updated with Google's latest algorithm updates and best practices.", icon: '👥' },
  { title: 'Transparent Communication', desc: "No hidden activities. You'll always know what work is being done and the results being achieved.", icon: '💬' },
  { title: 'ROI-Focused Approach', desc: 'We focus on generating leads, inquiries, and sales — not just rankings.', icon: '📈' },
  { title: 'Ethical SEO Practices', desc: "We follow Google's guidelines to deliver sustainable, long-term SEO success.", icon: '✅' },
];

function WhyUs() {
  return (
    <section id="why-us" style={{ background: '#f8faff', padding: '80px 5vw' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ display: 'inline-block', background: '#e0f4fc', color: '#00b4e6', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.4rem 1rem', borderRadius: 20, marginBottom: '1rem', border: '1px solid #b3e5f7' }}>Why Choose Us</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#0d1b2a' }}>Why Choose Aleut for SEO?</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {REASONS.map(r => (
            <div key={r.title} style={{
              background: '#fff', borderRadius: 14, padding: '1.8rem',
              border: '1.5px solid #e0eef7', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              display: 'flex', gap: '1rem', alignItems: 'flex-start',
            }}>
              <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{r.icon}</span>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0d1b2a', marginBottom: '0.4rem' }}>{r.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#4a5568', lineHeight: 1.7 }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section style={{ background: '#1B3A6B', padding: '60px 5vw' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#fff', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, marginBottom: '2.5rem' }}>Results That Matter</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {[
            { num: '150%', label: 'Average Organic Traffic Growth' },
            { num: '6X', label: 'Increase in Qualified Leads' },
            { num: '70%', label: 'Improvement in Keyword Rankings' },
            { num: '95%', label: 'Client Retention Rate' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#00b4e6', lineHeight: 1 }}>{s.num}</div>
              <div style={{ color: '#a8d8f0', fontSize: '0.85rem', marginTop: '0.5rem', fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: 'How long does SEO take to show results?', a: 'Most businesses begin seeing noticeable improvements within 3–6 months, depending on competition and website condition.' },
  { q: 'Why should I hire a professional SEO company?', a: 'A professional SEO company helps improve visibility, attract targeted traffic, and generate more leads through organic search.' },
  { q: 'How much do SEO services cost?', a: 'SEO pricing depends on your goals, competition, and project scope. We provide customized SEO packages based on your business requirements.' },
  { q: 'Do you provide monthly SEO reports?', a: 'Yes. We provide transparent monthly reports covering rankings, traffic, backlinks, and campaign performance.' },
  { q: 'Can you help local businesses rank in Google Maps?', a: 'Absolutely. Our Local SEO strategies help businesses improve visibility in Google Maps and local search results.' },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" style={{ background: '#fff', padding: '80px 5vw' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ display: 'inline-block', background: '#e0f4fc', color: '#00b4e6', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.4rem 1rem', borderRadius: 20, marginBottom: '1rem', border: '1px solid #b3e5f7' }}>FAQ</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#0d1b2a' }}>Frequently Asked Questions</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {FAQS.map((f, i) => (
            <div key={i} style={{
              border: open === i ? '2px solid #00b4e6' : '1.5px solid #e0eef7',
              borderRadius: 12, overflow: 'hidden',
              boxShadow: open === i ? '0 4px 20px rgba(0,180,230,0.1)' : 'none',
            }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{
                width: '100%', display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', padding: '1.2rem 1.5rem',
                background: open === i ? '#f0f9ff' : '#fff',
                border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem',
              }}>
                <span style={{ fontWeight: 700, color: '#0d1b2a', fontSize: '0.95rem' }}>{f.q}</span>
                <span style={{
                  width: 28, height: 28, borderRadius: '50%', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  background: open === i ? '#00b4e6' : '#e0f4fc', color: open === i ? '#fff' : '#00b4e6',
                  fontSize: '1.1rem', fontWeight: 700,
                }}>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div style={{ padding: '0 1.5rem 1.2rem', color: '#4a5568', fontSize: '0.9rem', lineHeight: 1.75, borderTop: '1px solid #e0f4fc' }}>
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

function CTA() {
  return (
    <section id="cta" style={{
      background: 'linear-gradient(135deg, #00b4e6 0%, #1B3A6B 100%)',
      padding: '80px 5vw', textAlign: 'center',
    }}>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
          Ready to Grow Your Business?
        </h2>
        <p style={{ color: '#e0f4fc', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
          Get a Free SEO Audit &amp; Strategy Session — Discover what's holding your website back
          and learn how our SEO experts can help you rank higher, generate more leads, and grow
          your business.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {['Free Website Audit', 'Competitor Analysis', 'Keyword Opportunity Report', 'Custom SEO Strategy'].map(item => (
            <span key={item} style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 600 }}>✓ {item}</span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <input type="text" placeholder="Your website URL or phone number" style={{
            padding: '0.85rem 1.5rem', borderRadius: 8, border: 'none',
            fontSize: '0.9rem', width: 300, outline: 'none',
          }} />
          <button style={{
            background: '#fff', color: '#1B3A6B', padding: '0.85rem 1.8rem',
            borderRadius: 8, fontWeight: 700, fontSize: '0.9rem', border: 'none', cursor: 'pointer',
          }}>Schedule Free Consultation →</button>
        </div>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:8770161193" style={{ color: '#e0f4fc', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600 }}>📞 Call Now</a>
          <a href="mailto:info@aleut.tech" style={{ color: '#e0f4fc', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600 }}>📧 Email Us</a>
          <a href="https://wa.me/918770161193" target="_blank" rel="noopener noreferrer" style={{ color: '#e0f4fc', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600 }}>🚀 WhatsApp Us</a>
        </div>
      </div>
    </section>
  );
}

function ContactBar() {
  return (
    <div style={{
      background: '#1B3A6B', padding: '0.75rem 5vw',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexWrap: 'wrap', gap: '0',
    }}>
      {[
        { icon: '🌐', label: 'WEBSITE', value: 'www.aleut.tech', href: 'https://www.aleut.tech' },
        { icon: '✉️', label: 'EMAIL', value: 'info@aleut.tech', href: 'mailto:info@aleut.tech' },
        { icon: '📞', label: 'CALL / WHATSAPP', value: '8770161193', href: 'tel:8770161193' },
      ].map((item, i) => (
        <a key={item.label} href={item.href}
          target={item.href.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            padding: '0.5rem 3rem', textDecoration: 'none',
            borderRight: i < 2 ? '1px solid rgba(255,255,255,0.2)' : 'none',
          }}>
          <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
          <div>
            <div style={{ color: '#a8d8f0', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', lineHeight: 1 }}>{item.label}</div>
            <div style={{ color: '#ffffff', fontSize: '0.88rem', fontWeight: 700, marginTop: '0.15rem' }}>{item.value}</div>
          </div>
        </a>
      ))}
    </div>
  );
}

function Plans() {
  const plans = [
    {
      name: 'VISIBILITY PLAN',
      color: '#00b4e6',
      bg: '#f0f9ff',
      items: [
        { label: 'Improved Rankings On Google Maps' },
        { label: 'Rank On', value: '2–3 Keywords' },
        { label: 'Google Posts Monthly', value: '15' },
        { label: 'Results In', value: '3 MONTHS' },
        { label: 'GMB SEO Report', value: 'Monthly 1' },
        { label: 'Backlink Follow', value: '25–20' },
        { label: 'Competitors Analysis' },
      ],
    },
    {
      name: 'DOMINANCE PLAN',
      color: '#1B3A6B',
      bg: '#eef2ff',
      popular: true,
      items: [
        { label: 'Improved Rankings On Google Maps' },
        { label: 'Rank On', value: '4–5 Keywords' },
        { label: 'Google Posts Monthly', value: '30' },
        { label: 'Results In', value: '3 MONTHS' },
        { label: 'GMB SEO Report', value: '1 Monthly' },
        { label: 'Backlink Follow', value: '25–30' },
        { label: 'Local SEO Audit' },
        { label: 'Competitors Analysis' },
      ],
    },
  ];

  const features = [
    { icon: '🔍', title: 'Local SEO Audit', desc: 'We analyze your Google Business Profile & fix issues to improve rankings and visibility.' },
    { icon: '📊', title: 'Competitors Analysis', desc: 'We study your competitors and create a winning strategy to keep you ahead in local search.' },
    { icon: '📍', title: 'Rank Higher On Google Maps', desc: 'Improve your local visibility, get more leads & grow faster.' },
  ];

  return (
    <section id="plans" style={{ background: '#f8faff', padding: '80px 5vw' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ display: 'inline-block', background: '#e0f4fc', color: '#00b4e6', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.4rem 1rem', borderRadius: 20, marginBottom: '1rem', border: '1px solid #b3e5f7' }}>Our Plans</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#0d1b2a' }}>Boost Your Rankings on Google Maps</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {plans.map(p => (
            <div key={p.name} style={{
              background: '#fff', borderRadius: 16, overflow: 'hidden',
              border: p.popular ? `2px solid ${p.color}` : '1.5px solid #e0eef7',
              boxShadow: p.popular ? `0 8px 32px rgba(27,58,107,0.15)` : '0 2px 12px rgba(0,0,0,0.05)',
              position: 'relative',
            }}>
              {p.popular && (
                <div style={{ position: 'absolute', top: 16, right: 16, background: p.color, color: '#fff', fontSize: '0.65rem', fontWeight: 700, padding: '0.25rem 0.6rem', borderRadius: 20, letterSpacing: '0.08em' }}>POPULAR</div>
              )}
              <div style={{ background: p.color, padding: '1.5rem 2rem' }}>
                <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.05em' }}>{p.name}</h3>
              </div>
              <div style={{ padding: '1.5rem 2rem' }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {p.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.88rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f0f4f8' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1B3A6B', fontWeight: 600 }}>
                        <span style={{ color: p.color, fontWeight: 700 }}>✓</span> {item.label}
                      </span>
                      {item.value && <span style={{ color: p.color, fontWeight: 700, fontSize: '0.82rem' }}>{item.value}</span>}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a href="tel:8770161193" style={{ flex: 1, background: p.color, color: '#fff', padding: '0.7rem', borderRadius: 8, fontWeight: 700, fontSize: '0.8rem', textDecoration: 'none', textAlign: 'center' }}>📞 Call Now</a>
                  <a href="https://wa.me/918770161193" target="_blank" rel="noopener noreferrer" style={{ flex: 1, background: '#25D366', color: '#fff', padding: '0.7rem', borderRadius: 8, fontWeight: 700, fontSize: '0.8rem', textDecoration: 'none', textAlign: 'center' }}>💬 WhatsApp</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {features.map(f => (
            <div key={f.title} style={{ background: '#fff', borderRadius: 14, padding: '1.8rem', border: '1.5px solid #e0eef7', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '2rem', flexShrink: 0 }}>{f.icon}</span>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0d1b2a', marginBottom: '0.4rem' }}>{f.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#4a5568', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      background: '#0d1b2a', color: '#a8d8f0', textAlign: 'center',
      padding: '2rem 5vw', fontSize: '0.82rem',
    }}>
      <img src={logo} alt="Aleut Technologies" style={{ height: 80, marginBottom: '1rem', filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} Aleut Technologies Pvt Ltd. All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Cursor />
      <ContactBar />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Plans />
      <Process />
      <WhyUs />
      <Stats />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
