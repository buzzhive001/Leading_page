const cityTags = [
  { label: 'Delhi NCR',  color: 'var(--fire)' },
  { label: 'Mumbai',     color: 'var(--teal)' },
  { label: 'Bangalore',  color: 'var(--gold)' },
  { label: 'Hyderabad',  color: 'var(--fire2)' },
  { label: 'Pune',       color: 'var(--teal)' },
  { label: 'Chennai',    color: 'var(--gold)' },
  { label: 'Pan India',  color: 'var(--fire)' },
];

export default function About() {
  return (
    <section className="about section reveal" id="about">
      <div className="section-tag">Who We Are</div>
      <div className="about-grid reveal">
        <div className="about-left">
          <h2 className="section-h">India's most<br />results-driven<br /><em>SEO team.</em></h2>
          <p className="section-p">
            Aleut Technologies has helped over 150 local businesses — from clinics
            to restaurants to retailers — climb to Google's first page
            and stay there.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.8, marginBottom: '2rem' }}>
            We don't do cookie-cutter strategies. Every campaign is built around your specific
            market, your specific competitors, and your specific revenue goals.
            We measure success in rupees, not just rankings.
          </p>
          <div className="about-tags">
            {cityTags.map(t => (
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
            <p className="asb-text">Businesses ranking on Google's first page, across 40+ industries from healthcare to hospitality.</p>
          </div>
          <div className="about-stat-block">
            <div className="asb-number" style={{ color: 'var(--fire)' }}>₹0</div>
            <p className="asb-text">In hidden charges. Ever. Transparent monthly reports, real metrics, clear pricing. No surprises on your invoice.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
