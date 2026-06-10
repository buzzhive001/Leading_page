import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Search, Zap, Link2, Code2, ShoppingCart, FileText, Trophy, Target, Users, MessageCircle, TrendingUp, CheckCircle2, Phone, Mail, Globe, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const T = {
  bg:       '#0a0f1a',
  bg2:      '#0d1420',
  surface:  'rgba(255,255,255,0.04)',
  border:   'rgba(255,255,255,0.10)',
  borderHi: 'rgba(0,180,230,0.5)',
  blue:     '#00b4e6',
  blueDim:  '#0097c7',
  blueGlow: 'rgba(0,180,230,0.25)',
  navy:     '#1B3A6B',
  white:    '#ffffff',
  text:     '#e2e8f0',
  muted:    '#94a3b8',
  mono:     "'JetBrains Mono', monospace",
  head:     "'Hanken Grotesk', sans-serif",
  body:     "'Inter', sans-serif",
};

const fadeUp   = { hidden:{ opacity:0, y:40 },   show:{ opacity:1, y:0,  transition:{ duration:.6,  ease:[.22,1,.36,1] } } };
const fromLeft = { hidden:{ opacity:0, x:-60 },  show:{ opacity:1, x:0,  transition:{ duration:.65, ease:[.22,1,.36,1] } } };
const fromRight= { hidden:{ opacity:0, x:60 },   show:{ opacity:1, x:0,  transition:{ duration:.65, ease:[.22,1,.36,1] } } };
const stagger  = { show:{ transition:{ staggerChildren:.10 } } };

const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxPIdARxrkQIJ2_JzqirTwBJfbULey5gKo8FW3LsbJS3BGrtU4idTk7_UF-Lmsvy7F_Dg/exec';

function Label({ children }) {
  return (
    <motion.div variants={fadeUp} style={{ display:'block', marginBottom:'1rem' }}>
      <span style={{
        display:'inline-flex', alignItems:'center', gap:'0.5rem',
        fontFamily:T.mono, fontSize:'0.65rem', fontWeight:500,
        letterSpacing:'0.14em', textTransform:'uppercase', color:T.blue,
        background:'rgba(0,180,230,0.1)', border:`1px solid rgba(0,180,230,0.25)`,
        padding:'0.3rem 0.9rem', borderRadius:20,
      }}>{children}</span>
    </motion.div>
  );
}

function GlassCard({ children, style }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? 'rgba(0,180,230,0.06)' : T.surface,
        border: `1px solid ${hov ? T.borderHi : T.border}`,
        backdropFilter:'blur(12px)', borderRadius:16,
        boxShadow: hov ? `0 0 32px ${T.blueGlow}` : '0 4px 24px rgba(0,0,0,0.3)',
        transition:'all .3s ease', ...style,
      }}
    >{children}</motion.div>
  );
}

const SERVICES = [
  { Icon:Search,       title:'Local SEO Indore',       desc:'Dominate Google Maps and local searches in Indore. Get found by customers searching near MP Nagar, Vijay Nagar, and across the city.' },
  { Icon:MapPin,       title:'Google Business Profile', desc:'Optimise your GMB listing for maximum visibility in Indore local searches and Google Maps rankings.' },
  { Icon:Code2,        title:'Technical SEO',           desc:'Fix Core Web Vitals, improve site speed, and resolve crawl issues for better Google rankings.' },
  { Icon:FileText,     title:'On-Page SEO',             desc:'Keyword-optimised content, meta tags, and page structure targeting Indore-specific search queries.' },
  { Icon:Link2,        title:'Link Building',           desc:'High-authority backlinks from relevant Indian websites to build trust and outrank competitors in Indore.' },
  { Icon:Zap,          title:'SEO Content',             desc:'Blog posts and landing pages targeting high-intent keywords for Indore businesses.' },
];

const FAQS = [
  { q:'How long does SEO take to show results in Indore?', a:'Most Indore businesses see measurable improvements within 3–6 months. Google Maps and Local SEO results can appear within 4–8 weeks.' },
  { q:'Do you work with businesses across all areas of Indore?', a:'Yes — we serve businesses across MP Nagar, Vijay Nagar, Palasia, Rau, Pithampur, and all areas of Indore city.' },
  { q:'Can you help my business rank on Google Maps in Indore?', a:'Absolutely. Our Local SEO strategies are specifically designed to improve Google Maps visibility for Indore businesses.' },
  { q:'Do you provide SEO services for Hindi-language content?', a:'Yes, we create SEO-optimised content in both English and Hindi to capture the full Indore audience.' },
  { q:'How much do SEO services cost for an Indore business?', a:'Pricing depends on your goals and competition. Contact us for a free consultation and custom quote tailored to your Indore business.' },
];

export default function Indore() {
  const [form, setForm]     = useState({ name:'', email:'', phone:'', website:'' });
  const [status, setStatus] = useState('idle');
  const [faqOpen, setFaqOpen] = useState(null);

  const servicesRef = useRef(null);
  const faqRef      = useRef(null);
  const ctaRef      = useRef(null);
  const servicesInView = useInView(servicesRef, { once:true, margin:'-60px' });
  const faqInView      = useInView(faqRef,      { once:true, margin:'-60px' });
  const ctaInView      = useInView(ctaRef,      { once:true, margin:'-60px' });

  const inputStyle = {
    width:'100%', padding:'0.75rem 1rem', borderRadius:8,
    background:'rgba(255,255,255,0.06)', border:`1px solid ${T.border}`,
    color:T.text, fontFamily:T.body, fontSize:'0.85rem',
    outline:'none', transition:'border-color .2s',
  };
  const labelStyle = {
    display:'block', fontFamily:T.mono, fontSize:'0.58rem',
    letterSpacing:'0.12em', textTransform:'uppercase', color:T.muted, marginBottom:'0.35rem',
  };

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      await fetch(SHEETS_URL, {
        method:'POST', mode:'no-cors',
        headers:{ 'Content-Type':'text/plain' },
        body: JSON.stringify({ name:form.name, email:form.email, phone:form.phone, website:form.website }),
      });
      setStatus('success');
      setForm({ name:'', email:'', phone:'', website:'' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div style={{ background:T.bg, minHeight:'100vh', fontFamily:T.body }}>

      {/* ── Navbar ── */}
      <nav style={{ background:'rgba(8,13,24,1)', borderBottom:`1px solid rgba(255,255,255,0.06)`, display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 5vw', height:70, position:'sticky', top:0, zIndex:200 }}>
        <a href="/"><img src={logo} alt="Aleut Technologies" style={{ height:52, objectFit:'contain' }} /></a>
        <div style={{ display:'flex', gap:'1.5rem', alignItems:'center' }}>
          <a href="tel:8770161193" style={{ color:T.blue, fontFamily:T.body, fontWeight:700, fontSize:'0.88rem', textDecoration:'none', display:'flex', alignItems:'center', gap:'0.4rem' }}>
            <Phone size={14} /> 8770161193
          </a>
          <motion.a href="#contact-form"
            whileHover={{ scale:1.03 }} whileTap={{ scale:.97 }}
            style={{ background:T.blue, color:'#fff', padding:'0.65rem 1.4rem', borderRadius:9, fontWeight:700, fontSize:'0.85rem', textDecoration:'none', fontFamily:T.body }}>
            Get Free Audit
          </motion.a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{
        background:`radial-gradient(ellipse 80% 60% at 70% 10%, rgba(0,180,230,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(27,58,107,0.18) 0%, transparent 60%), ${T.bg}`,
        padding:'80px 5vw 70px', position:'relative', overflow:'hidden',
      }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:`linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)`, backgroundSize:'64px 64px', pointerEvents:'none' }} />

        <div className="hero-two-col" style={{ maxWidth:1200, margin:'0 auto', position:'relative', zIndex:1, display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center' }}>

          {/* LEFT — Content */}
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <Label>Aleut Technologies — Indore</Label>
            <motion.h1 variants={fadeUp} style={{ fontFamily:T.head, fontSize:'clamp(2rem,4.5vw,3.8rem)', fontWeight:800, lineHeight:1.08, color:T.white, marginBottom:'1.2rem', letterSpacing:'-0.02em' }}>
              #1 SEO Service in{' '}
              <span style={{ color:T.blue, position:'relative' }}>
                Indore
                <motion.span style={{ position:'absolute', bottom:-4, left:0, right:0, height:3, background:`linear-gradient(90deg,${T.blue},transparent)`, borderRadius:2 }}
                  initial={{ scaleX:0, originX:0 }} animate={{ scaleX:1 }} transition={{ delay:.8, duration:.8 }} />
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontFamily:T.body, fontSize:'1rem', color:T.muted, lineHeight:1.8, marginBottom:'2rem' }}>
              Grow your Indore business with data-driven SEO. Rank higher on Google, dominate local search, and convert more visitors into customers.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display:'flex', flexDirection:'column', gap:'0.6rem', marginBottom:'2rem' }}>
              {['Local SEO & Google Maps Ranking','On-Page & Technical SEO','High-Authority Link Building','Monthly Reports & Transparent Results'].map(item => (
                <span key={item} style={{ fontFamily:T.body, fontSize:'0.88rem', color:T.text, display:'flex', alignItems:'center', gap:'0.6rem' }}>
                  <CheckCircle2 size={14} color={T.blue} />{item}
                </span>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
              {[
                { Icon:Phone,         label:'+91 8770161193', href:'tel:8770161193' },
                { Icon:MessageCircle, label:'WhatsApp',       href:'https://wa.me/918770161193' },
              ].map(item => (
                <motion.a key={item.label} href={item.href}
                  target={item.href.startsWith('https') ? '_blank' : undefined} rel="noopener noreferrer"
                  whileHover={{ scale:1.03 }} whileTap={{ scale:.97 }}
                  style={{ display:'inline-flex', alignItems:'center', gap:'0.45rem', padding:'0.7rem 1.3rem', borderRadius:9, border:`1.5px solid ${T.blue}`, color:T.blue, fontFamily:T.body, fontWeight:700, fontSize:'0.85rem', textDecoration:'none' }}>
                  <item.Icon size={14} /> {item.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div id="contact-form" initial="hidden" animate="show" variants={stagger}>
            <GlassCard style={{ padding:'2rem' }}>
              <motion.p variants={fadeUp} style={{ fontFamily:T.mono, fontSize:'0.6rem', letterSpacing:'0.14em', textTransform:'uppercase', color:T.blue, marginBottom:'0.5rem' }}>
                Free Strategy Session — Indore
              </motion.p>
              <motion.h2 variants={fadeUp} style={{ fontFamily:T.head, fontSize:'clamp(1.2rem,2vw,1.6rem)', fontWeight:800, color:T.white, lineHeight:1.25, marginBottom:'1.4rem' }}>
                Request a Free SEO<br />Strategy Session
              </motion.h2>
              <motion.form variants={fadeUp} onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'0.85rem' }}>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.75rem' }} className="cta-form-grid">
                  <div>
                    <label style={labelStyle}>Name *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder="Your full name" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = T.blue}
                      onBlur={e  => e.target.style.borderColor = T.border} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange}
                      placeholder="you@example.com" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = T.blue}
                      onBlur={e  => e.target.style.borderColor = T.border} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number *</label>
                    <input type="tel" name="phone" required value={form.phone}
                      onChange={e => { if (/^\d{0,10}$/.test(e.target.value)) handleChange(e); }}
                      placeholder="10-digit mobile number" style={inputStyle}
                      maxLength={10} inputMode="numeric"
                      onFocus={e => e.target.style.borderColor = T.blue}
                      onBlur={e  => e.target.style.borderColor = T.border} />
                  </div>
                  <div>
                    <label style={labelStyle}>Website URL *</label>
                    <input type="url" name="website" required value={form.website} onChange={handleChange}
                      placeholder="https://yourwebsite.com" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = T.blue}
                      onBlur={e  => e.target.style.borderColor = T.border} />
                  </div>
                </div>
                <motion.button type="submit" disabled={status === 'sending'}
                  whileHover={status !== 'sending' ? { scale:1.02, boxShadow:`0 0 28px rgba(0,180,230,0.5)` } : {}}
                  whileTap={status !== 'sending' ? { scale:.97 } : {}}
                  style={{ width:'100%', padding:'0.9rem', borderRadius:9, border:'none', cursor: status === 'sending' ? 'not-allowed' : 'pointer', background: status === 'sending' ? 'rgba(0,180,230,0.45)' : T.blue, color:'#fff', fontFamily:T.body, fontWeight:700, fontSize:'0.95rem', transition:'all .25s', boxShadow:`0 0 16px rgba(0,180,230,0.2)` }}>
                  {status === 'sending' ? 'Sending…' : 'Submit'}
                </motion.button>
                {status === 'success' && (
                  <motion.p initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }}
                    style={{ textAlign:'center', color:'#4ade80', fontFamily:T.body, fontSize:'0.88rem', fontWeight:600 }}>
                    ✓ Thank you! We'll reach out to you shortly.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }}
                    style={{ textAlign:'center', color:'#f87171', fontFamily:T.body, fontSize:'0.88rem', fontWeight:600 }}>
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </motion.form>
            </GlassCard>
          </motion.div>

        </div>
      </section>

      {/* ── Services ── */}
      <section style={{ background:T.bg2, padding:'90px 5vw', borderTop:`1px solid ${T.border}` }} ref={servicesRef}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <motion.div initial="hidden" animate={servicesInView ? 'show' : 'hidden'} variants={stagger} style={{ textAlign:'center', marginBottom:'3rem' }}>
            <Label>SEO Services in Indore</Label>
            <motion.h2 variants={fadeUp} style={{ fontFamily:T.head, fontSize:'clamp(1.8rem,3vw,2.6rem)', fontWeight:800, color:T.white }}>
              Complete SEO Solutions for Indore Businesses
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" animate={servicesInView ? 'show' : 'hidden'} variants={stagger}
            style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'1.2rem' }}>
            {SERVICES.map((s, i) => (
              <motion.div key={s.title} variants={i % 2 === 0 ? fromLeft : fromRight}>
                <GlassCard style={{ padding:'1.8rem', height:'100%' }}>
                  <div style={{ width:44, height:44, borderRadius:12, background:'rgba(0,180,230,0.12)', border:`1px solid rgba(0,180,230,0.25)`, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'1.1rem' }}>
                    <s.Icon size={20} color={T.blue} />
                  </div>
                  <h3 style={{ fontFamily:T.head, fontSize:'1.05rem', fontWeight:700, color:T.white, marginBottom:'0.6rem' }}>{s.title}</h3>
                  <p style={{ fontFamily:T.body, fontSize:'0.85rem', color:T.muted, lineHeight:1.78 }}>{s.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Why Indore businesses choose us ── */}
      <section style={{ background:`linear-gradient(135deg, ${T.navy} 0%, #0d2244 100%)`, padding:'80px 5vw', borderTop:`1px solid rgba(255,255,255,0.08)` }}>
        <div style={{ maxWidth:1000, margin:'0 auto', textAlign:'center' }}>
          <h2 style={{ fontFamily:T.head, fontSize:'clamp(1.6rem,3vw,2.4rem)', fontWeight:800, color:T.white, marginBottom:'1rem' }}>
            Why Indore Businesses Trust <span style={{ color:T.blue }}>Aleut Technologies</span>
          </h2>
          <p style={{ fontFamily:T.body, color:T.muted, fontSize:'0.97rem', lineHeight:1.8, marginBottom:'3rem', maxWidth:680, margin:'0 auto 3rem' }}>
            We are an Indore-based SEO agency with deep knowledge of the local market, competition landscape, and customer search behaviour.
          </p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'1.5rem' }}>
            {[
              { num:'150+', label:'Page 1 Rankings' },
              { num:'6X',   label:'Lead Growth for Clients' },
              { num:'95%',  label:'Client Retention Rate' },
              { num:'3+',   label:'Years Serving Indore' },
            ].map(s => (
              <div key={s.label} style={{ textAlign:'center' }}>
                <div style={{ fontFamily:T.head, fontSize:'clamp(2.4rem,4vw,3.2rem)', fontWeight:800, color:T.blue, lineHeight:1 }}>{s.num}</div>
                <div style={{ fontFamily:T.mono, fontSize:'0.65rem', color:'rgba(255,255,255,0.65)', marginTop:'0.4rem', letterSpacing:'0.08em', textTransform:'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background:T.bg, padding:'90px 5vw', borderTop:`1px solid ${T.border}` }} ref={faqRef}>
        <div style={{ maxWidth:740, margin:'0 auto' }}>
          <motion.div initial="hidden" animate={faqInView ? 'show' : 'hidden'} variants={stagger} style={{ textAlign:'center', marginBottom:'3rem' }}>
            <Label>FAQ</Label>
            <motion.h2 variants={fadeUp} style={{ fontFamily:T.head, fontSize:'clamp(1.6rem,3vw,2.4rem)', fontWeight:800, color:T.white }}>
              SEO Questions — Indore
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" animate={faqInView ? 'show' : 'hidden'} variants={stagger} style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
            {FAQS.map((f, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div style={{ background: faqOpen===i ? 'rgba(0,180,230,0.07)' : T.surface, border:`1px solid ${faqOpen===i ? T.borderHi : T.border}`, backdropFilter:'blur(12px)', borderRadius:14, overflow:'hidden', transition:'all .25s' }}>
                  <button onClick={() => setFaqOpen(faqOpen===i ? null : i)} style={{ width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1.2rem 1.5rem', background:'transparent', border:'none', cursor:'pointer', textAlign:'left', gap:'1rem' }}>
                    <span style={{ fontFamily:T.body, fontWeight:700, color:T.text, fontSize:'0.9rem' }}>{f.q}</span>
                    <motion.span animate={{ rotate: faqOpen===i ? 45 : 0 }} transition={{ duration:.2 }} style={{ width:28, height:28, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, background: faqOpen===i ? T.blue : 'rgba(0,180,230,0.1)', border:`1px solid rgba(0,180,230,0.3)`, color: faqOpen===i ? '#fff' : T.blue, fontSize:'1.1rem', fontWeight:700 }}>+</motion.span>
                  </button>
                  <AnimatePresence>
                    {faqOpen===i && (
                      <motion.div initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }} exit={{ height:0, opacity:0 }} transition={{ duration:.28 }} style={{ overflow:'hidden' }}>
                        <div style={{ padding:'0 1.5rem 1.2rem', fontFamily:T.body, color:T.muted, fontSize:'0.88rem', lineHeight:1.8, borderTop:`1px solid ${T.border}` }}>{f.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background:`radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,180,230,0.14) 0%, transparent 70%), linear-gradient(160deg,#0a1828 0%,${T.navy} 100%)`, padding:'90px 5vw', textAlign:'center', borderTop:`1px solid ${T.border}` }} ref={ctaRef}>
        <motion.div initial="hidden" animate={ctaInView ? 'show' : 'hidden'} variants={stagger} style={{ maxWidth:620, margin:'0 auto' }}>
          <Label>Get Started Today</Label>
          <motion.h2 variants={fadeUp} style={{ fontFamily:T.head, fontSize:'clamp(1.8rem,4vw,3rem)', fontWeight:800, color:T.white, lineHeight:1.1, marginBottom:'1rem' }}>
            Grow Your Indore Business<br />with <span style={{ color:T.blue }}>Expert SEO</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontFamily:T.body, color:T.muted, fontSize:'0.97rem', lineHeight:1.8, marginBottom:'2rem' }}>
            Free website audit • Custom SEO strategy • Transparent monthly reports
          </motion.p>
          <motion.div variants={fadeUp} style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
            <motion.a href="#contact-form" whileHover={{ scale:1.03, boxShadow:`0 0 28px rgba(0,180,230,0.5)` }} whileTap={{ scale:.97 }}
              style={{ background:T.blue, color:'#fff', padding:'0.9rem 2rem', borderRadius:10, fontWeight:700, fontSize:'0.95rem', textDecoration:'none', fontFamily:T.body }}>
              Get Free Audit →
            </motion.a>
            <motion.a href="https://wa.me/918770161193" target="_blank" rel="noopener noreferrer" whileHover={{ scale:1.03 }} whileTap={{ scale:.97 }}
              style={{ background:'rgba(37,211,102,0.12)', color:'#25D366', border:'1.5px solid rgba(37,211,102,0.35)', padding:'0.9rem 2rem', borderRadius:10, fontWeight:700, fontSize:'0.95rem', textDecoration:'none', fontFamily:T.body, display:'flex', alignItems:'center', gap:'0.5rem' }}>
              <MessageCircle size={16} /> WhatsApp Us
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background:'#060b14', borderTop:`1px solid ${T.border}`, padding:'2rem 5vw', textAlign:'center' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'1rem', maxWidth:1100, margin:'0 auto', marginBottom:'1.5rem' }}>
          <img src={logo} alt="Aleut Technologies" style={{ height:60, objectFit:'contain' }} />
          <div style={{ display:'flex', gap:'1.5rem', flexWrap:'wrap' }}>
            {[
              { Icon:Globe,  label:'www.aleut.tech',  href:'https://www.aleut.tech' },
              { Icon:Mail,   label:'info@aleut.tech', href:'mailto:info@aleut.tech' },
              { Icon:Phone,  label:'8770161193',      href:'tel:8770161193' },
            ].map(({ Icon, label, href }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                style={{ color:T.muted, textDecoration:'none', fontSize:'0.82rem', fontFamily:T.body, display:'flex', alignItems:'center', gap:'0.4rem' }}
                onMouseEnter={e => e.currentTarget.style.color = T.blue}
                onMouseLeave={e => e.currentTarget.style.color = T.muted}>
                <Icon size={13} color={T.blue} /> {label}
              </a>
            ))}
          </div>
        </div>
        <p style={{ fontFamily:T.mono, fontSize:'0.62rem', color:T.muted, letterSpacing:'0.07em' }}>
          © {new Date().getFullYear()} Aleut Technologies Pvt Ltd · SEO Services in Indore · All rights reserved.
        </p>
      </footer>

    </div>
  );
}
