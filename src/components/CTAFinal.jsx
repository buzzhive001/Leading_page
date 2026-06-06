export default function CTAFinal() {
  return (
    <section className="cta-final reveal" id="cta">
      <div className="cta-grid-bg"></div>
      <h2 className="cta-big">
        Ready to<br />
        <em>Grow Your</em><br />
        <strong>Business?</strong>
      </h2>
      <p className="cta-sub">
        Get a Free SEO Audit &amp; Strategy Session — Discover what's holding your website back
        and learn how our SEO experts can help you rank higher, generate more leads,
        and grow your business in Indore.
      </p>
      <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
        {['Free Website Audit','Competitor Analysis','Keyword Opportunity Report','Custom SEO Strategy'].map(item => (
          <li key={item} style={{ color: 'var(--teal)', fontSize: '0.85rem', fontWeight: 600 }}>✓ {item}</li>
        ))}
      </ul>
      <div className="cta-form">
        <input type="text" placeholder="Your website URL or WhatsApp number" />
        <button type="button">Schedule Free Consultation →</button>
      </div>
      <p className="cta-note">Free · No commitment · Report delivered in 48 hours</p>
      <div className="cta-socials">
        <a href="https://wa.me/918770161193" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
        <a href="tel:8770161193">Call +91 8770161193</a>
        <a href="mailto:info@aleut.tech">info@aleut.tech</a>
        <a href="https://www.aleut.tech" target="_blank" rel="noopener noreferrer">www.aleut.tech</a>
      </div>
    </section>
  );
}
