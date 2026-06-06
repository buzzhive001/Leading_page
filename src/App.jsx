import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Search, Zap, Link2, Code2, ShoppingCart, FileText, Trophy, Target, Users, MessageCircle, TrendingUp, CheckCircle2, Phone, Mail, Globe } from 'lucide-react';
import logo from './assets/logo.png';
import './App.css';

/* ── Design tokens (Kinetic Precision — Dark) ───────────────────── */
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

/* ── Shared animation variants ──────────────────────────────────── */
const fadeUp    = { hidden:{ opacity:0, y:40 },    show:{ opacity:1, y:0,   transition:{ duration:.6,  ease:[.22,1,.36,1] } } };
const fromLeft  = { hidden:{ opacity:0, x:-60 },  show:{ opacity:1, x:0,   transition:{ duration:.65, ease:[.22,1,.36,1] } } };
const fromRight = { hidden:{ opacity:0, x:60 },   show:{ opacity:1, x:0,   transition:{ duration:.65, ease:[.22,1,.36,1] } } };
const fromLeft2 = { hidden:{ opacity:0, x:-40 },  show:{ opacity:1, x:0,   transition:{ duration:.55, ease:[.22,1,.36,1] } } };
const fromRight2= { hidden:{ opacity:0, x:40 },   show:{ opacity:1, x:0,   transition:{ duration:.55, ease:[.22,1,.36,1] } } };
const stagger   = { show:{ transition:{ staggerChildren:.10 } } };
const staggerLR = { show:{ transition:{ staggerChildren:.12 } } };

/* ── Custom cursor ────────────────────────────────────────────────── */
function Cursor() {
  const dot  = useRef(null);
  const ring = useRef(null);
  useEffect(() => {
    const move = e => {
      dot.current  && Object.assign(dot.current.style,  { left: e.clientX+'px', top: e.clientY+'px' });
      ring.current && Object.assign(ring.current.style, { left: e.clientX+'px', top: e.clientY+'px' });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return (
    <>
      <div ref={dot}  style={{ position:'fixed', width:8,  height:8,  background:T.blue, borderRadius:'50%', pointerEvents:'none', zIndex:9999, transform:'translate(-50%,-50%)', transition:'transform .1s' }} />
      <div ref={ring} style={{ position:'fixed', width:32, height:32, border:`1.5px solid ${T.borderHi}`, borderRadius:'50%', pointerEvents:'none', zIndex:9998, transform:'translate(-50%,-50%)', transition:'left .08s ease-out, top .08s ease-out' }} />
    </>
  );
}

/* ── Glass card primitive ─────────────────────────────────────────── */
function GlassCard({ children, style, hoverGlow=true, className='' }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => hoverGlow && setHov(true)}
      onMouseLeave={() => hoverGlow && setHov(false)}
      style={{
        background: hov ? 'rgba(0,180,230,0.06)' : T.surface,
        border: `1px solid ${hov ? T.borderHi : T.border}`,
        backdropFilter: 'blur(12px)',
        borderRadius: 16,
        boxShadow: hov ? `0 0 32px ${T.blueGlow}` : '0 4px 24px rgba(0,0,0,0.3)',
        transition: 'all .3s ease',
        ...style,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Glow button ─────────────────────────────────────────────────── */
function GlowBtn({ children, href, onClick, outline=false, style={} }) {
  const base = {
    display:'inline-flex', alignItems:'center', gap:'0.5rem',
    padding:'0.8rem 1.8rem', borderRadius:10, fontWeight:700,
    fontSize:'0.88rem', fontFamily:T.body, textDecoration:'none',
    letterSpacing:'0.02em', border:'none', cursor:'pointer',
    transition:'all .25s ease', position:'relative', overflow:'hidden',
  };
  const solid = { background:T.blue, color:'#fff', boxShadow:`0 0 20px ${T.blueGlow}` };
  const ghost = { background:'transparent', color:T.blue, border:`1.5px solid ${T.blue}` };
  const props = {
    style:{ ...base, ...(outline ? ghost : solid), ...style },
    whileHover:{ scale:1.03, boxShadow: outline ? `0 0 16px ${T.blueGlow}` : `0 0 32px rgba(0,180,230,0.5)` },
    whileTap:{ scale:.97 },
  };
  return href
    ? <motion.a href={href} {...props}>{children}</motion.a>
    : <motion.button onClick={onClick} {...props}>{children}</motion.button>;
}

/* ── Section label chip ──────────────────────────────────────────── */
function Label({ children }) {
  return (
    <motion.span variants={fadeUp} style={{
      display:'inline-flex', alignItems:'center', gap:'0.5rem',
      fontFamily:T.mono, fontSize:'0.65rem', fontWeight:500,
      letterSpacing:'0.14em', textTransform:'uppercase', color:T.blue,
      background:'rgba(0,180,230,0.1)', border:`1px solid rgba(0,180,230,0.25)`,
      padding:'0.3rem 0.9rem', borderRadius:20, marginBottom:'1rem',
    }}>{children}</motion.span>
  );
}

/* ── Animated counter ────────────────────────────────────────────── */
function Counter({ target, suffix='', duration=1.8 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-80px' });
  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(target.replace(/[^0-9.]/g,''));
    const start = Date.now();
    const tick = () => {
      const p = Math.min((Date.now()-start) / (duration*1000), 1);
      const ease = 1 - Math.pow(1-p, 3);
      setVal(Math.round(ease * num));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ── Contact bar ─────────────────────────────────────────────────── */
function ContactBar() {
  const items = [
    { Icon:Globe,  label:'WEBSITE',        value:'www.aleut.tech',  href:'https://www.aleut.tech' },
    { Icon:Mail,   label:'EMAIL',           value:'info@aleut.tech', href:'mailto:info@aleut.tech' },
    { Icon:Phone,  label:'CALL / WHATSAPP', value:'8770161193',      href:'tel:8770161193' },
  ];
  return (
    <div style={{ background:'#060b14', borderBottom:`1px solid ${T.border}`, display:'flex', justifyContent:'center', flexWrap:'wrap' }}>
      {items.map((item, i) => (
        <a key={item.label} href={item.href}
          target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
          style={{
            display:'flex', alignItems:'center', gap:'0.6rem',
            padding:'0.55rem 2.8rem', textDecoration:'none',
            borderRight: i < 2 ? `1px solid ${T.border}` : 'none',
          }}>
          <item.Icon size={13} color={T.blue} />
          <div>
            <div style={{ fontFamily:T.mono, fontSize:'0.55rem', letterSpacing:'0.14em', color:T.muted, textTransform:'uppercase', lineHeight:1 }}>{item.label}</div>
            <div style={{ color:T.text, fontSize:'0.8rem', fontWeight:600, marginTop:'0.12rem' }}>{item.value}</div>
          </div>
        </a>
      ))}
    </div>
  );
}

/* ── Navbar ──────────────────────────────────────────────────────── */
const NAV = ['Services','Process','Why Us','FAQ'];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mOpen, setMOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <motion.nav
      initial={{ y:-80 }} animate={{ y:0 }} transition={{ duration:.5, ease:[.22,1,.36,1] }}
      style={{
        position:'sticky', top:0, zIndex:200,
        background: scrolled ? 'rgba(10,15,26,0.92)' : 'rgba(10,15,26,0.6)',
        backdropFilter:'blur(20px)',
        borderBottom:`1px solid ${scrolled ? T.border : 'transparent'}`,
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'0 5vw', height:82, transition:'all .3s',
      }}>
      <img src={logo} alt="Aleut" style={{ height:72, objectFit:'contain', maxWidth:180 }} />
      <ul style={{ display:'flex', gap:'2rem', listStyle:'none', margin:0, padding:0 }}>
        {NAV.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase().replace(' ','-')}`} style={{
              color:T.muted, fontWeight:600, fontSize:'0.82rem', textDecoration:'none',
              fontFamily:T.body, letterSpacing:'0.02em', transition:'color .2s',
            }}
              onMouseEnter={e => e.target.style.color = T.blue}
              onMouseLeave={e => e.target.style.color = T.muted}
            >{l}</a>
          </li>
        ))}
      </ul>
      <GlowBtn href="#cta">Get Free Audit</GlowBtn>
    </motion.nav>
  );
}

/* ── Hero ────────────────────────────────────────────────────────── */
function Hero() {
  const metrics = [
    { val:'150+', label:'Page 1 Rankings', delay:.3 },
    { val:'6X',   label:'Lead Growth',     delay:.45 },
    { val:'95%',  label:'Client Retention',delay:.6 },
  ];
  return (
    <section style={{
      minHeight:'92vh', background:`radial-gradient(ellipse 80% 60% at 70% 10%, rgba(0,180,230,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(27,58,107,0.18) 0%, transparent 60%), ${T.bg}`,
      display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
      padding:'100px 5vw 80px', textAlign:'center', position:'relative', overflow:'hidden',
    }}>
      {/* Animated grid */}
      <div style={{ position:'absolute', inset:0, backgroundImage:`linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)`, backgroundSize:'64px 64px', pointerEvents:'none' }} />

      <motion.div variants={stagger} initial="hidden" animate="show" style={{ position:'relative', zIndex:1, maxWidth:860, width:'100%' }}>
        <Label>Aleut Technologies — SEO Services</Label>

        <motion.h1 variants={fadeUp} style={{
          fontFamily:T.head, fontSize:'clamp(2.4rem,6vw,5rem)', fontWeight:800,
          lineHeight:1.08, color:T.white, marginBottom:'1.5rem', letterSpacing:'-0.02em',
        }}>
          SEO That Ranks You{' '}
          <span style={{ color:T.blue, position:'relative' }}>
            #1 on Google
            <motion.span
              style={{ position:'absolute', bottom:-4, left:0, right:0, height:3, background:`linear-gradient(90deg,${T.blue},transparent)`, borderRadius:2 }}
              initial={{ scaleX:0, originX:0 }} animate={{ scaleX:1 }} transition={{ delay:.8, duration:.8 }}
            />
          </span>
        </motion.h1>

        <motion.p variants={fadeUp} style={{ fontFamily:T.body, fontSize:'1.05rem', color:T.muted, lineHeight:1.8, maxWidth:600, margin:'0 auto 2.5rem' }}>
          Data-driven SEO strategies that increase organic traffic, dominate search rankings,
          and convert visitors into high-quality leads.
        </motion.p>

        <motion.div variants={fadeUp} style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap', marginBottom:'3.5rem' }}>
          <GlowBtn href="#cta">Start Your Campaign →</GlowBtn>
          <GlowBtn href="#process" outline>View Our Process</GlowBtn>
        </motion.div>

        {/* Floating metric cards */}
        <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
          {metrics.map(m => (
            <motion.div key={m.label}
              initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:m.delay, duration:.6 }}
              whileHover={{ y:-4, boxShadow:`0 12px 32px ${T.blueGlow}` }}
              style={{
                background:'rgba(0,180,230,0.07)', border:`1px solid rgba(0,180,230,0.25)`,
                backdropFilter:'blur(16px)', borderRadius:14, padding:'1rem 1.6rem', textAlign:'center',
                boxShadow:`0 0 0 1px rgba(255,255,255,0.05)`, transition:'all .3s',
              }}>
              <div style={{ fontFamily:T.head, fontSize:'2rem', fontWeight:800, color:T.blue, lineHeight:1 }}>{m.val}</div>
              <div style={{ fontFamily:T.mono, fontSize:'0.6rem', color:T.muted, marginTop:'0.3rem', letterSpacing:'0.1em', textTransform:'uppercase' }}>{m.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:120, background:`linear-gradient(to top, ${T.bg}, transparent)`, pointerEvents:'none' }} />
    </section>
  );
}

/* ── About ───────────────────────────────────────────────────────── */
function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-80px' });
  const stats = [
    { num:'150', suffix:'+', label:'Page 1 Rankings',    color:T.blue  },
    { num:'95',  suffix:'%', label:'Client Retention',   color:T.navy  },
    { num:'6',   suffix:'X', label:'Lead Increase',      color:T.blue  },
    { num:'70',  suffix:'%', label:'Ranking Improvement',color:T.navy  },
  ];
  return (
    <section id="about" style={{ background:T.bg2, padding:'100px 5vw', borderTop:`1px solid ${T.border}` }}>
      <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center' }} ref={ref}>
        <motion.div initial="hidden" animate={inView ? 'show' : 'hidden'} variants={stagger}>
          <Label>Who We Are</Label>
          <motion.h2 variants={fromLeft} style={{ fontFamily:T.head, fontSize:'clamp(1.8rem,3vw,2.7rem)', fontWeight:800, color:T.white, lineHeight:1.15, marginBottom:'1.2rem' }}>
            Trusted SEO Partner for<br /><span style={{ color:T.blue }}>Sustainable Growth</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontFamily:T.body, color:T.muted, lineHeight:1.85, marginBottom:'.9rem', fontSize:'.93rem' }}>
            Whether you're a startup, local business, eCommerce store, or enterprise brand — our SEO experts craft customized strategies that improve rankings, increase traffic, and generate quality leads.
          </motion.p>
          <motion.p variants={fadeUp} style={{ fontFamily:T.body, color:T.muted, lineHeight:1.85, fontSize:'.93rem' }}>
            We focus on long-term growth rather than short-term ranking spikes, keeping your website ahead in Google's ever-evolving search results.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" animate={inView ? 'show' : 'hidden'} variants={stagger}
          style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
          {stats.map((s, i) => (
            <motion.div key={s.label} variants={i % 2 === 0 ? fromRight2 : fromRight}>
              <GlassCard style={{ padding:'1.6rem', textAlign:'center' }}>
                <div style={{ fontFamily:T.head, fontSize:'2.4rem', fontWeight:800, color:s.color, lineHeight:1 }}>
                  <Counter target={s.num} suffix={s.suffix} />
                </div>
                <div style={{ fontFamily:T.mono, fontSize:'0.65rem', color:T.muted, marginTop:'0.45rem', letterSpacing:'0.1em', textTransform:'uppercase' }}>{s.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Services ────────────────────────────────────────────────────── */
const SERVICES = [
  { Icon:Search,      title:'Local SEO',             desc:'Dominate Google Maps and local searches. Attract customers from your area with optimized Google Business Profiles.' },
  { Icon:Code2,       title:'Technical SEO',         desc:'Improve Core Web Vitals, speed, crawlability, indexing, and site architecture for maximum performance.' },
  { Icon:FileText,    title:'On-Page SEO',           desc:'Optimize content, meta tags, headers, internal links, and page structure for targeted keyword rankings.' },
  { Icon:Link2,       title:'Off-Page SEO',          desc:'Build high-authority backlinks and domain trust through ethical, white-hat link acquisition strategies.' },
  { Icon:ShoppingCart,title:'eCommerce SEO',         desc:'Drive qualified traffic and revenue for Shopify, WooCommerce, Magento, and custom eCommerce stores.' },
  { Icon:Zap,         title:'SEO Content Marketing', desc:'Create search-optimized content that attracts qualified users at every stage of the buying journey.' },
];

function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-60px' });
  return (
    <section id="services" style={{ background:T.bg, padding:'100px 5vw', borderTop:`1px solid ${T.border}` }} ref={ref}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <motion.div initial="hidden" animate={inView ? 'show' : 'hidden'} variants={stagger} style={{ textAlign:'center', marginBottom:'3.5rem' }}>
          <Label>Our SEO Services</Label>
          <motion.h2 variants={fadeUp} style={{ fontFamily:T.head, fontSize:'clamp(1.8rem,3vw,2.6rem)', fontWeight:800, color:T.white }}>
            Complete SEO Solutions
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" animate={inView ? 'show' : 'hidden'} variants={staggerLR}
          style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'1.2rem' }}>
          {SERVICES.map((s, i) => (
            <motion.div key={s.title} variants={i % 2 === 0 ? fromLeft2 : fromRight2}>
              <GlassCard style={{ padding:'1.8rem', height:'100%' }}>
                <div style={{
                  width:44, height:44, borderRadius:12, background:'rgba(0,180,230,0.12)',
                  border:`1px solid rgba(0,180,230,0.25)`, display:'flex', alignItems:'center',
                  justifyContent:'center', marginBottom:'1.1rem',
                }}>
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
  );
}

/* ── Stats band ──────────────────────────────────────────────────── */
function StatsBand() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true });
  const stats = [
    { num:'150', suffix:'%', label:'Avg Organic Traffic Growth' },
    { num:'6',   suffix:'X', label:'Increase in Qualified Leads' },
    { num:'70',  suffix:'%', label:'Keyword Ranking Improvement' },
    { num:'95',  suffix:'%', label:'Client Retention Rate' },
  ];
  return (
    <section ref={ref} style={{ background:`linear-gradient(135deg, ${T.navy} 0%, #0d2244 100%)`, padding:'70px 5vw', borderTop:`1px solid rgba(255,255,255,0.08)`, borderBottom:`1px solid rgba(255,255,255,0.08)` }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <motion.div initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:.5 }}
          style={{ textAlign:'center', marginBottom:'2.5rem' }}>
          <h2 style={{ fontFamily:T.head, fontSize:'clamp(1.4rem,2.5vw,2rem)', fontWeight:800, color:T.white }}>Results That Matter</h2>
        </motion.div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:'1.5rem', textAlign:'center' }}>
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity:0, y:24 }} animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ delay: i*.12, duration:.5 }}>
              <div style={{ fontFamily:T.head, fontSize:'clamp(2.8rem,5vw,4rem)', fontWeight:800, color:T.blue, lineHeight:1 }}>
                {inView && <Counter target={s.num} suffix={s.suffix} />}
              </div>
              <div style={{ fontFamily:T.mono, fontSize:'0.68rem', color:'rgba(255,255,255,0.65)', marginTop:'0.5rem', letterSpacing:'0.08em', textTransform:'uppercase' }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Plans ───────────────────────────────────────────────────────── */
const PLANS = [
  { name:'VISIBILITY PLAN', accent:T.blue,
    items:[
      { label:'Google Maps Rankings' },
      { label:'Rank On', value:'2–3 Keywords' },
      { label:'Google Posts/Month', value:'15' },
      { label:'Results In', value:'3 Months' },
      { label:'GMB SEO Report', value:'Monthly' },
      { label:'Backlinks', value:'25–30' },
      { label:'Competitors Analysis' },
    ]},
  { name:'DOMINANCE PLAN', accent:'#a78bfa', popular:true,
    items:[
      { label:'Google Maps Rankings' },
      { label:'Rank On', value:'4–5 Keywords' },
      { label:'Google Posts/Month', value:'30' },
      { label:'Results In', value:'3 Months' },
      { label:'GMB SEO Report', value:'Monthly' },
      { label:'Backlinks', value:'25–40' },
      { label:'Local SEO Audit' },
      { label:'Competitors Analysis' },
    ]},
];

function Plans() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-60px' });
  return (
    <section id="plans" style={{ background:T.bg2, padding:'100px 5vw', borderTop:`1px solid ${T.border}` }} ref={ref}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <motion.div initial="hidden" animate={inView ? 'show' : 'hidden'} variants={stagger} style={{ textAlign:'center', marginBottom:'3rem' }}>
          <Label>Our Plans</Label>
          <motion.h2 variants={fadeUp} style={{ fontFamily:T.head, fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:800, color:T.white }}>
            Boost Your Google Maps Rankings
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" animate={inView ? 'show' : 'hidden'} variants={staggerLR}
          style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'1.5rem' }}>
          {PLANS.map((p, i) => (
            <motion.div key={p.name} variants={i === 0 ? fromLeft : fromRight} style={{ position:'relative' }}>
              {p.popular && (
                <div style={{
                  position:'absolute', top:-12, left:'50%', transform:'translateX(-50%)',
                  background:'linear-gradient(90deg,#a78bfa,#7c3aed)', color:'#fff',
                  fontSize:'0.6rem', fontWeight:700, letterSpacing:'0.12em',
                  padding:'0.25rem 1rem', borderRadius:20, zIndex:1,
                  fontFamily:T.mono, textTransform:'uppercase',
                }}>Most Popular</div>
              )}
              <GlassCard hoverGlow={true} style={{
                overflow:'hidden', border:`1px solid ${p.popular ? 'rgba(167,139,250,0.4)' : T.border}`,
                boxShadow: p.popular ? '0 0 40px rgba(167,139,250,0.12)' : undefined,
              }}>
                <div style={{ background: p.popular ? 'linear-gradient(135deg,rgba(124,58,237,0.3),rgba(167,139,250,0.15))' : 'rgba(0,180,230,0.08)', padding:'1.3rem 1.8rem', borderBottom:`1px solid ${T.border}` }}>
                  <h3 style={{ fontFamily:T.head, fontSize:'0.9rem', fontWeight:800, letterSpacing:'0.1em', color:'#fff' }}>{p.name}</h3>
                </div>
                <div style={{ padding:'1.4rem 1.8rem' }}>
                  <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'0.7rem', marginBottom:'1.6rem' }}>
                    {p.items.map((item, i) => (
                      <li key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:'0.84rem', paddingBottom:'0.7rem', borderBottom:`1px solid ${T.border}` }}>
                        <span style={{ display:'flex', alignItems:'center', gap:'0.5rem', color:T.text, fontFamily:T.body, fontWeight:500 }}>
                          <CheckCircle2 size={13} color={p.accent} />
                          {item.label}
                        </span>
                        {item.value && <span style={{ color:p.accent, fontWeight:700, fontSize:'0.78rem', fontFamily:T.mono }}>{item.value}</span>}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display:'flex', gap:'0.75rem' }}>
                    <motion.a href="tel:8770161193" whileHover={{ scale:1.02, boxShadow:'0 6px 20px rgba(0,180,230,0.35)' }} style={{
                      flex:1, background:'rgba(0,180,230,0.12)', color:T.blue,
                      border:`1.5px solid rgba(0,180,230,0.35)`,
                      padding:'0.72rem 0', borderRadius:10,
                      fontWeight:700, fontSize:'0.78rem', textDecoration:'none',
                      display:'flex', alignItems:'center', justifyContent:'center', gap:'0.45rem',
                      fontFamily:T.body, letterSpacing:'0.02em', transition:'all .2s',
                    }}>
                      <Phone size={14} strokeWidth={2.5} /> Call Now
                    </motion.a>
                    <motion.a href="https://wa.me/918770161193" target="_blank" rel="noopener noreferrer" whileHover={{ scale:1.02, boxShadow:'0 6px 20px rgba(37,211,102,0.3)' }} style={{
                      flex:1, background:'rgba(37,211,102,0.1)', color:'#25D366',
                      border:'1.5px solid rgba(37,211,102,0.35)',
                      padding:'0.72rem 0', borderRadius:10,
                      fontWeight:700, fontSize:'0.78rem', textDecoration:'none',
                      display:'flex', alignItems:'center', justifyContent:'center', gap:'0.45rem',
                      fontFamily:T.body, letterSpacing:'0.02em', transition:'all .2s',
                    }}>
                      <MessageCircle size={14} strokeWidth={2.5} /> WhatsApp
                    </motion.a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Process ─────────────────────────────────────────────────────── */
const STEPS = [
  { num:'01', title:'SEO Audit & Analysis',       desc:'Deep analysis of your website, competitors, and keyword opportunities to build a winning roadmap.',     tags:['Technical Issues','Core Web Vitals','Competitor Analysis','Keyword Gaps'] },
  { num:'02', title:'Keyword Strategy',           desc:'Discover high-intent keywords your customers are actively searching for across all buying stages.',       tags:['Commercial Keywords','Local Intent','Long-Tail','Buyer Queries'] },
  { num:'03', title:'Website Optimization',       desc:'Optimize every element on your site — meta tags, content, internal links, schema, and URL structure.',   tags:['On-Page SEO','Schema Markup','Internal Linking','Content'] },
  { num:'04', title:'Authority & Link Building',  desc:'Earn high-authority backlinks and citations to build trust with Google and outrank competitors.',         tags:['Backlinks','Local Citations','Digital PR','Brand Mentions'] },
  { num:'05', title:'Tracking & Growth',          desc:'Continuous monitoring, reporting, and strategy refinements to maximize your organic growth trajectory.',   tags:['Rank Tracking','Traffic Analysis','Lead Attribution','ROI Reports'] },
];

function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-60px' });
  return (
    <section id="process" style={{ background:T.bg, padding:'100px 5vw', borderTop:`1px solid ${T.border}` }} ref={ref}>
      <div style={{ maxWidth:900, margin:'0 auto' }}>
        <motion.div initial="hidden" animate={inView ? 'show' : 'hidden'} variants={stagger} style={{ textAlign:'center', marginBottom:'3.5rem' }}>
          <Label>How We Work</Label>
          <motion.h2 variants={fadeUp} style={{ fontFamily:T.head, fontSize:'clamp(1.8rem,3vw,2.6rem)', fontWeight:800, color:T.white }}>Our SEO Process</motion.h2>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? 'show' : 'hidden'} variants={stagger} style={{ position:'relative' }}>
          {/* Vertical line */}
          <div style={{ position:'absolute', left:27, top:20, bottom:20, width:2, background:`linear-gradient(to bottom, ${T.blue}, transparent)`, zIndex:0 }} />

          <div style={{ display:'flex', flexDirection:'column', gap:'1.2rem' }}>
            {STEPS.map((s, i) => (
              <motion.div key={s.num} variants={i % 2 === 0 ? fromLeft : fromRight} style={{ display:'grid', gridTemplateColumns:'56px 1fr', gap:'1.2rem', alignItems:'start', position:'relative', zIndex:1 }}>
                {/* Node */}
                <motion.div
                  initial={{ scale:0 }} animate={inView ? { scale:1 } : {}} transition={{ delay: i*.12+.3, type:'spring', stiffness:200 }}
                  style={{ width:54, height:54, borderRadius:'50%', background: i%2===0 ? T.blue : T.navy, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:T.mono, fontSize:'0.75rem', fontWeight:700, color:'#fff', flexShrink:0, boxShadow: i%2===0 ? `0 0 20px ${T.blueGlow}` : 'none', border:`2px solid ${T.border}` }}
                >{s.num}</motion.div>
                <GlassCard style={{ padding:'1.5rem 1.6rem' }}>
                  <h3 style={{ fontFamily:T.head, fontSize:'1.02rem', fontWeight:700, color:T.white, marginBottom:'0.4rem' }}>{s.title}</h3>
                  <p style={{ fontFamily:T.body, fontSize:'0.84rem', color:T.muted, lineHeight:1.78, marginBottom:'0.8rem' }}>{s.desc}</p>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:'0.4rem' }}>
                    {s.tags.map(t => (
                      <span key={t} style={{ fontFamily:T.mono, fontSize:'0.6rem', color:T.blue, background:'rgba(0,180,230,0.08)', border:`1px solid rgba(0,180,230,0.2)`, padding:'0.2rem 0.6rem', borderRadius:20, letterSpacing:'0.06em' }}>{t}</span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Why Us ──────────────────────────────────────────────────────── */
const REASONS = [
  { Icon:Trophy,        title:'Proven Results',          desc:'We deliver higher rankings, qualified traffic, and measurable revenue growth for every client.' },
  { Icon:Target,        title:'Custom Strategies',       desc:'No cookie-cutter plans. Every campaign is tailored to your goals, market, and competition.' },
  { Icon:Users,         title:'Expert SEO Team',         desc:"Our specialists stay ahead of Google's algorithm updates with continuous learning and testing." },
  { Icon:MessageCircle, title:'Full Transparency',       desc:"Live dashboards, monthly reports — you always know exactly what's happening and why." },
  { Icon:TrendingUp,    title:'ROI-First Approach',      desc:'We optimize for leads and revenue, not vanity metrics — because rankings alone pay no bills.' },
  { Icon:CheckCircle2,  title:'Ethical SEO Only',        desc:"100% white-hat techniques that build lasting authority without risking Google penalties." },
];

function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-60px' });
  return (
    <section id="why-us" style={{ background:T.bg2, padding:'100px 5vw', borderTop:`1px solid ${T.border}` }} ref={ref}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <motion.div initial="hidden" animate={inView ? 'show' : 'hidden'} variants={stagger} style={{ textAlign:'center', marginBottom:'3.5rem' }}>
          <Label>Why Choose Us</Label>
          <motion.h2 variants={fadeUp} style={{ fontFamily:T.head, fontSize:'clamp(1.8rem,3vw,2.6rem)', fontWeight:800, color:T.white }}>Why Aleut for SEO?</motion.h2>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? 'show' : 'hidden'} variants={staggerLR}
          style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'1.2rem' }}>
          {REASONS.map((r, i) => (
            <motion.div key={r.title} variants={i % 2 === 0 ? fromLeft2 : fromRight2}>
              <GlassCard style={{ padding:'1.6rem', display:'flex', gap:'1rem', alignItems:'flex-start' }}>
                <div style={{ width:40, height:40, borderRadius:10, background:'rgba(0,180,230,0.1)', border:`1px solid rgba(0,180,230,0.2)`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <r.Icon size={18} color={T.blue} />
                </div>
                <div>
                  <h3 style={{ fontFamily:T.head, fontSize:'0.97rem', fontWeight:700, color:T.white, marginBottom:'0.4rem' }}>{r.title}</h3>
                  <p style={{ fontFamily:T.body, fontSize:'0.83rem', color:T.muted, lineHeight:1.75 }}>{r.desc}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── FAQ ─────────────────────────────────────────────────────────── */
const FAQS = [
  { q:'How long does SEO take to show results?',      a:'Most businesses see measurable improvements within 3–6 months. Local SEO and GMB optimization can show faster results, typically within 4–8 weeks.' },
  { q:'Why hire a professional SEO company?',         a:'Professional SEO delivers consistent organic growth, improves domain authority, and generates long-term ROI — far beyond what ad spend alone can achieve.' },
  { q:'How much do your SEO services cost?',          a:'Pricing is customized to your goals, competition, and project scope. We offer flexible plans — contact us for a personalized quote based on your needs.' },
  { q:'Do you provide monthly SEO reports?',          a:'Yes. Every client receives detailed monthly reports covering keyword rankings, organic traffic, backlink growth, and campaign performance insights.' },
  { q:'Can you help rank in Google Maps results?',    a:"Absolutely. Our Local SEO service specializes in Google Business Profile optimization and Maps visibility — helping you dominate the local '3-pack'." },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-60px' });
  return (
    <section id="faq" style={{ background:T.bg, padding:'100px 5vw', borderTop:`1px solid ${T.border}` }} ref={ref}>
      <div style={{ maxWidth:740, margin:'0 auto' }}>
        <motion.div initial="hidden" animate={inView ? 'show' : 'hidden'} variants={stagger} style={{ textAlign:'center', marginBottom:'3rem' }}>
          <Label>FAQ</Label>
          <motion.h2 variants={fadeUp} style={{ fontFamily:T.head, fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:800, color:T.white }}>Frequently Asked Questions</motion.h2>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? 'show' : 'hidden'} variants={stagger} style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
          {FAQS.map((f, i) => (
            <motion.div key={i} variants={i % 2 === 0 ? fromLeft2 : fromRight2}>
              <div style={{
                background: open===i ? 'rgba(0,180,230,0.07)' : T.surface,
                border:`1px solid ${open===i ? T.borderHi : T.border}`,
                backdropFilter:'blur(12px)', borderRadius:14, overflow:'hidden',
                boxShadow: open===i ? `0 0 24px ${T.blueGlow}` : 'none',
                transition:'all .25s',
              }}>
                <button onClick={() => setOpen(open===i ? null : i)} style={{
                  width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center',
                  padding:'1.2rem 1.5rem', background:'transparent', border:'none', cursor:'pointer', textAlign:'left', gap:'1rem',
                }}>
                  <span style={{ fontFamily:T.body, fontWeight:700, color:T.text, fontSize:'0.9rem' }}>{f.q}</span>
                  <motion.span animate={{ rotate: open===i ? 45 : 0 }} transition={{ duration:.2 }} style={{
                    width:28, height:28, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
                    background: open===i ? T.blue : 'rgba(0,180,230,0.1)', border:`1px solid rgba(0,180,230,0.3)`,
                    color: open===i ? '#fff' : T.blue, fontSize:'1.1rem', fontWeight:700, lineHeight:1,
                  }}>+</motion.span>
                </button>
                <AnimatePresence>
                  {open===i && (
                    <motion.div initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }} exit={{ height:0, opacity:0 }} transition={{ duration:.28 }}
                      style={{ overflow:'hidden' }}>
                      <div style={{ padding:'0 1.5rem 1.2rem', fontFamily:T.body, color:T.muted, fontSize:'0.88rem', lineHeight:1.8, borderTop:`1px solid ${T.border}` }}>
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── CTA ─────────────────────────────────────────────────────────── */
function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-60px' });
  return (
    <section id="cta" style={{ background:`radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,180,230,0.14) 0%, transparent 70%), linear-gradient(160deg,#0a1828 0%,${T.navy} 100%)`, padding:'110px 5vw', textAlign:'center', borderTop:`1px solid ${T.border}`, position:'relative', overflow:'hidden' }} ref={ref}>
      <div style={{ position:'absolute', inset:0, backgroundImage:`linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)`, backgroundSize:'48px 48px', pointerEvents:'none' }} />
      <motion.div initial="hidden" animate={inView ? 'show' : 'hidden'} variants={stagger} style={{ maxWidth:680, margin:'0 auto', position:'relative', zIndex:1 }}>
        <Label>Ready to Rank?</Label>
        <motion.h2 variants={fromLeft} style={{ fontFamily:T.head, fontSize:'clamp(2rem,5vw,3.5rem)', fontWeight:800, color:T.white, lineHeight:1.1, marginBottom:'1rem', letterSpacing:'-0.02em' }}>
          Ready to <span style={{ color:T.blue }}>Grow</span> Your Business?
        </motion.h2>
        <motion.p variants={fromRight} style={{ fontFamily:T.body, color:T.muted, fontSize:'1rem', lineHeight:1.8, marginBottom:'1.8rem' }}>
          Get a free SEO audit & strategy session. Discover exactly what's holding your site back and how to dominate Google.
        </motion.p>
        <motion.div variants={fadeUp} style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'1.2rem', marginBottom:'2.2rem' }}>
          {['Free Website Audit','Competitor Analysis','Keyword Report','Custom SEO Plan'].map(item => (
            <span key={item} style={{ fontFamily:T.mono, fontSize:'0.68rem', color:'rgba(255,255,255,0.7)', letterSpacing:'0.06em', display:'flex', alignItems:'center', gap:'0.4rem' }}>
              <CheckCircle2 size={12} color={T.blue} />{item}
            </span>
          ))}
        </motion.div>
        <motion.div variants={fadeUp} style={{ display:'flex', gap:'0.75rem', justifyContent:'center', flexWrap:'wrap', marginBottom:'2rem' }}>
          <input type="text" placeholder="Your website URL or phone number" style={{
            padding:'0.9rem 1.4rem', borderRadius:10, background:'rgba(255,255,255,0.06)',
            border:`1px solid ${T.border}`, color:T.text, fontFamily:T.body, fontSize:'0.88rem',
            outline:'none', width:280, backdropFilter:'blur(8px)',
          }} />
          <GlowBtn href="#" style={{ whiteSpace:'nowrap' }}>Schedule Free Consultation →</GlowBtn>
        </motion.div>
        <motion.div variants={fadeUp} style={{ display:'flex', gap:'2rem', justifyContent:'center', flexWrap:'wrap' }}>
          {[
            { Icon:Phone,         label:'Call Now',  href:'tel:8770161193' },
            { Icon:Mail,          label:'Email Us',  href:'mailto:info@aleut.tech' },
            { Icon:MessageCircle, label:'WhatsApp',  href:'https://wa.me/918770161193' },
          ].map(item => (
            <a key={item.label} href={item.href} target={item.href.startsWith('https') ? '_blank' : undefined} rel="noopener noreferrer"
              style={{ color:T.muted, textDecoration:'none', fontSize:'0.85rem', fontWeight:600, fontFamily:T.body, display:'flex', alignItems:'center', gap:'0.45rem', transition:'color .2s' }}
              onMouseEnter={e => e.currentTarget.style.color = T.blue}
              onMouseLeave={e => e.currentTarget.style.color = T.muted}
            ><item.Icon size={15} strokeWidth={2} /> {item.label}</a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ── Footer ──────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ background:'#060b14', borderTop:`1px solid ${T.border}`, padding:'2.5rem 5vw', textAlign:'center'  }}>
      <img src={logo} alt="Aleut Technologies" style={{ height:90, objectFit:'contain', marginBottom:'0.8rem', opacity:0.95, maxWidth:220 }} />
      <p style={{ fontFamily:T.mono, fontSize:'0.7rem', color:T.muted, letterSpacing:'0.08em' }}>
        © {new Date().getFullYear()} Aleut Technologies Pvt Ltd. All rights reserved.
      </p>
    </footer>
  );
}

/* ── App ─────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <Cursor />
      <ContactBar />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <StatsBand />
      <Plans />
      <Process />
      <WhyUs />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
