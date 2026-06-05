export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow"></div>
      <div className="hero-glow2"></div>

      <div className="hero-left">
        <h1 className="hero-h1">
          Rank<br />
          <em>Higher.</em><br />
          <strong>Convert</strong>
        </h1>
        <p className="hero-h1-sub">More. Faster.</p>
        <p className="hero-desc">
          We help businesses across India dominate Google search and turn organic traffic into
          measurable revenue. No fluff — just results backed by data.
        </p>
        <div className="hero-actions">
          <a href="#cta" className="btn-primary">Get Free SEO Audit <span>↗</span></a>
          <a href="#process" className="btn-outline">See our process</a>
        </div>
        <div className="hero-metrics">
          <div className="hero-metric" style={{ borderTop: '2px solid var(--fire)' }}>
            <div className="hm-num" style={{ color: 'var(--fire)' }}>150<span style={{ color: 'var(--fire)' }}>+</span></div>
            <div className="hm-label">Clients Ranked</div>
          </div>
          <div className="hero-metric" style={{ borderTop: '2px solid var(--teal)' }}>
            <div className="hm-num" style={{ color: 'var(--teal)' }}>6.8<span style={{ color: 'var(--teal)' }}>×</span></div>
            <div className="hm-label">Avg. ROI</div>
          </div>
          <div className="hero-metric" style={{ borderTop: '2px solid var(--gold)' }}>
            <div className="hm-num" style={{ color: 'var(--gold)' }}>90<span style={{ color: 'var(--gold)' }}>d</span></div>
            <div className="hm-label">To Page One</div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-right-top">
          <div className="rank-widget">
            <div className="rw-header" style={{ borderTop: '2px solid var(--fire2)' }}>
              <span className="rw-title">Live Rankings · India</span>
              <span className="rw-live"><span className="live-dot"></span> Updating</span>
            </div>
            <div className="rw-body">
              <div className="kw-row">
                <span className="kw-pos pos-gold">#1</span>
                <span className="kw-name">SEO agency India</span>
                <span className="kw-change ch-up">↑ 12</span>
              </div>
              <div className="kw-row">
                <span className="kw-pos pos-gold">#1</span>
                <span className="kw-name">digital marketing Delhi NCR</span>
                <span className="kw-change ch-up">↑ 8</span>
              </div>
              <div className="kw-row">
                <span className="kw-pos pos-silver">#2</span>
                <span className="kw-name">best restaurant near me</span>
                <span className="kw-change ch-up">↑ 5</span>
              </div>
              <div className="kw-row">
                <span className="kw-pos pos-bronze">#3</span>
                <span className="kw-name">property dealer Bangalore</span>
                <span className="kw-change ch-new">NEW</span>
              </div>
              <div className="kw-row">
                <span className="kw-pos pos-gray">#14</span>
                <span className="kw-name" style={{ color: 'var(--fire2)' }}>your business → ?</span>
                <span className="kw-change ch-same">—</span>
              </div>
            </div>
            <div className="rw-footer">
              <span>Updated 2 min ago</span>
              <strong>↑ Rankings improving</strong>
            </div>
          </div>
        </div>
        <div className="hero-right-bottom">
          <div className="hrb-cell" style={{ borderTop: '2px solid var(--fire2)' }}>
            <div className="hrb-label">Avg. Traffic Increase</div>
            <div className="hrb-value" style={{ color: 'var(--fire2)' }}>+312<small>%</small></div>
            <div className="hrb-trend" style={{ color: 'var(--fire2)' }}>↑ in first 90 days</div>
          </div>
          <div className="hrb-cell" style={{ borderLeft: '1px solid var(--line)', borderTop: '2px solid var(--gold)' }}>
            <div className="hrb-label">Retention Rate</div>
            <div className="hrb-value" style={{ color: 'var(--gold)' }}>98<small>%</small></div>
            <div className="hrb-trend" style={{ color: 'var(--gold)' }}>clients stay long-term</div>
          </div>
        </div>
      </div>
    </section>
  );
}
