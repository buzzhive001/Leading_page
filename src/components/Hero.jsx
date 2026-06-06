export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow"></div>
      <div className="hero-glow2"></div>

      <div className="hero-left">
        <h1 className="hero-h1">
          SEO Company in Indore<br />
          That Helps You<br />
          <em>Rank Higher</em> &<br />
          <strong>Generate More Leads</strong>
        </h1>
        <p className="hero-desc">
          Increase your online visibility, attract qualified traffic, and grow your revenue
          with result-driven SEO services in Indore. Our data-backed SEO strategies help
          businesses dominate search results and convert visitors into customers.
        </p>
        <div className="hero-actions">
          <a href="#cta" className="btn-primary">Get Free SEO Audit <span>↗</span></a>
          <a href="#process" className="btn-outline">View Our Process</a>
        </div>
        <div className="hero-metrics">
          <div className="hero-metric" style={{ borderTop: '2px solid var(--teal)' }}>
            <div className="hm-num" style={{ color: 'var(--teal)' }}>150<span style={{ color: 'var(--teal)' }}>+</span></div>
            <div className="hm-label">Page 1 Rankings</div>
          </div>
          <div className="hero-metric" style={{ borderTop: '2px solid var(--fire2)' }}>
            <div className="hm-num" style={{ color: 'var(--fire2)' }}>+312<span style={{ color: 'var(--fire2)', fontSize: '1rem' }}>%</span></div>
            <div className="hm-label">Avg. Traffic Increase</div>
          </div>
          <div className="hero-metric" style={{ borderTop: '2px solid var(--gold)' }}>
            <div className="hm-num" style={{ color: 'var(--gold)' }}>95<span style={{ color: 'var(--gold)' }}>%</span></div>
            <div className="hm-label">Client Retention Rate</div>
          </div>
        </div>
      </div>

    </section>
  );
}
