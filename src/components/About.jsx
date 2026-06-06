const industryTags = [
  { label: 'Healthcare',     color: 'var(--fire)' },
  { label: 'Education',      color: 'var(--teal)' },
  { label: 'Real Estate',    color: 'var(--gold)' },
  { label: 'Manufacturing',  color: 'var(--fire2)' },
  { label: 'eCommerce',      color: 'var(--teal)' },
  { label: 'Legal Services', color: 'var(--gold)' },
  { label: 'Hospitality',    color: 'var(--fire)' },
  { label: 'IT & Technology',color: 'var(--teal)' },
  { label: 'Home Services',  color: 'var(--fire2)' },
  { label: 'Finance',        color: 'var(--gold)' },
];

export default function About() {
  return (
    <section className="about section reveal" id="about">
      <div className="section-tag">Who We Are</div>
      <div className="about-grid reveal">
        <div className="about-left">
          <h2 className="section-h">Trusted SEO Company<br />in Indore for<br /><em>Sustainable Growth</em></h2>
          <p className="section-p">
            Whether you're a startup, local business, eCommerce store, or enterprise brand,
            our SEO experts create customized strategies that improve rankings, increase
            organic traffic, and generate quality leads.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.8, marginBottom: '2rem' }}>
            We focus on long-term growth rather than short-term ranking spikes, ensuring
            your website remains competitive in Google's search results.
          </p>
          <div className="about-tags">
            {industryTags.map(t => (
              <span
                key={t.label}
                className="about-tag"
                style={{ borderColor: t.color + '55', color: t.color }}
              >
                {t.label}
              </span>
            ))}
          </div>
        </div>
        <div className="about-right">
          <div className="about-stat-block">
            <div className="asb-number">150<em>+</em></div>
            <p className="asb-text">Page 1 keyword rankings achieved across businesses in Indore and across India.</p>
          </div>
          <div className="about-stat-block">
            <div className="asb-number" style={{ color: 'var(--fire)' }}>95<em>%</em></div>
            <p className="asb-text">Client retention rate. We focus on long-term partnerships, not one-time projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
