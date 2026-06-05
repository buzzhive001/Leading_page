export default function Testimonials() {
  return (
    <section className="testimonials-section section reveal" id="results">
      <div className="section-tag">Client Stories</div>
      <h2 className="section-h" style={{ marginBottom: '3rem' }}>
        Real businesses.<br />Real results.<br /><em>Across India.</em>
      </h2>
      <div className="testi-layout">
        <div className="testi-left testi-featured">
          <div>
            <div className="testi-stars">★★★★★</div>
            <p className="tq">
              "Our restaurant went from invisible on Google to{' '}
              <span>#1 for 'best restaurant near me'</span> in just 4 months.
              Walk-ins increased 60% and online orders tripled."
            </p>
            <div className="tf-result">
              <div className="tf-result-num">+420%</div>
              <div className="tf-result-label">Organic traffic<br />increase in 6 months</div>
            </div>
          </div>
          <div className="testi-meta" style={{ marginTop: 'auto' }}>
            <div className="testi-av av-fire">RK</div>
            <div>
              <div className="testi-name">Rahul Khanna</div>
              <div className="testi-role" style={{ color: 'var(--fire)' }}>Spice Garden Restaurant · Delhi NCR</div>
            </div>
          </div>
        </div>
        <div className="testi-right">
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-quote">"Shifted from Google Ads to organic SEO. Now we get 3× more leads at a fraction of the cost. The ROI is extraordinary."</p>
            <div className="testi-meta">
              <div className="testi-av av-teal">SP</div>
              <div>
                <div className="testi-name">Sunita Patel</div>
                <div className="testi-role" style={{ color: 'var(--teal)' }}>Patel Legal Associates · Mumbai</div>
              </div>
            </div>
          </div>
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-quote">"Our clinic appears in Google's local 3-pack for every major health keyword. New patient inquiries doubled in 90 days."</p>
            <div className="testi-meta">
              <div className="testi-av av-gold">AJ</div>
              <div>
                <div className="testi-name">Dr. Amit Joshi</div>
                <div className="testi-role" style={{ color: 'var(--gold)' }}>CareFirst Clinic · Bangalore</div>
              </div>
            </div>
          </div>
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-quote">"Our property listings now rank above national portals for location-specific searches. Inquiries are up 180% with zero ad spend."</p>
            <div className="testi-meta">
              <div className="testi-av" style={{ background: 'var(--gold)' }}>MV</div>
              <div>
                <div className="testi-name">Manju Verma</div>
                <div className="testi-role" style={{ color: 'var(--fire2)' }}>Verma Properties · Hyderabad</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
