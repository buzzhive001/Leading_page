import { useState } from 'react';

const faqs = [
  {
    q: 'How long before I see results?',
    a: 'Most clients see measurable ranking improvements within 30–60 days. Significant traffic increases typically happen between 60–90 days. Full potential is usually achieved at the 6-month mark, with continuous growth beyond.',
  },
  {
    q: 'Do you work with all types of businesses?',
    a: 'Yes — we work with restaurants, clinics, law firms, real estate agencies, e-commerce stores, and service businesses across India. We have case studies for 40+ industries.',
  },
  {
    q: "What if I'm not seeing results?",
    a: "We have a transparent reporting system and monthly strategy calls. If projections aren't being met, we escalate our efforts at no extra cost. We're month-to-month after 3 months — you're never trapped.",
  },
  {
    q: 'Do you guarantee first page rankings?',
    a: 'No ethical SEO agency can guarantee specific rankings — Google controls that. What we guarantee is: transparent reporting, consistent work, and strategies based on proven data from 150+ campaigns across India.',
  },
  {
    q: 'Can you handle both Hindi and English SEO?',
    a: 'Absolutely. Many local searches happen in Hindi. We optimise for both Hindi and English keywords to maximise your reach across the full local search audience.',
  },
];

const visibilityFeatures = [
  { label: 'Improved Rankings On Google Maps', highlight: null },
  { label: 'Rank On:', highlight: '2–3 Keywords', highlightColor: '#2dd4bf' },
  { label: 'Google Posts Monthly:', highlight: '15', highlightColor: '#2dd4bf' },
  { label: 'Results In:', highlight: '3 Months', highlightColor: '#2dd4bf' },
  { label: 'GMB SEO Report:', highlight: 'Monthly 1', highlightColor: '#2dd4bf' },
  { label: 'Backlink Follow:', highlight: '15–20', highlightColor: '#2dd4bf' },
  { label: 'Local SEO Audit', highlight: null },
  { label: 'Competitors Analysis', highlight: null },
];

const dominanceFeatures = [
  { label: 'Improved Rankings On Google Maps', highlight: null },
  { label: 'Rank On:', highlight: '4–5 Keywords', highlightColor: '#e6b830' },
  { label: 'Google Posts Monthly:', highlight: '30', highlightColor: '#e6b830' },
  { label: 'Results In:', highlight: '3 Months', highlightColor: '#e6b830' },
  { label: 'GMB SEO Report:', highlight: '1 Monthly', highlightColor: '#e6b830' },
  { label: 'Backlink Follow:', highlight: '25–30', highlightColor: '#e6b830' },
  { label: 'Local SEO Audit', highlight: null },
  { label: 'Competitors Analysis', highlight: null },
];

function PlanCard({ title, color, features, featured }) {
  return (
    <div className={`plan-card${featured ? ' plan-featured' : ''}`}>
      <div className="plan-header" style={{ background: color }}>
        <div className="plan-title">{title}</div>
      </div>
      <div className="plan-features-list">
        {features.map((f, i) => (
          <div key={i} className="plan-feat">
            <span className="plan-check" style={{ background: color }}>✓</span>
            {f.label}
            {f.highlight && <strong style={{ color: f.highlightColor }}>{f.highlight}</strong>}
          </div>
        ))}
      </div>
      <div className="plan-actions">
        <a href="tel:8770161193" className="plan-btn-call" style={{ background: color }}>📞 Call Now</a>
        <a href="https://wa.me/918770161193" target="_blank" rel="noopener noreferrer" className="plan-btn-wa">💬 WhatsApp Now</a>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="faq-section section reveal" id="pricing">
      <div className="section-tag">FAQ &amp; Pricing</div>
      <h2 className="section-h" style={{ marginBottom: '3rem' }}>Questions &amp;<br /><em>answers.</em></h2>
      <div className="faq-grid">
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${openIdx === i ? ' open' : ''}`}>
              <div className="faq-q" onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
                {faq.q}<span className="faq-icon">+</span>
              </div>
              <div className="faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
        <div className="plans-grid">
          <PlanCard title="Visibility Plan" color="#0d9488" features={visibilityFeatures} />
          <PlanCard title="Dominance Plan" color="#b8960c" features={dominanceFeatures} featured />
        </div>
      </div>
    </section>
  );
}
