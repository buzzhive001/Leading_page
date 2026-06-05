const services = [
  {
    num: '01', title: 'Local SEO India', color: 'var(--fire)',
    desc: 'Hyperlocal strategies built for your market. Dominate "near me" searches, Google Maps, and location-specific queries across every major city and neighbourhood.',
    tags: ['Google Maps','Local Citations','NAP Consistency','Near Me Queries'],
  },
  {
    num: '02', title: 'Technical SEO', color: 'var(--teal)',
    desc: 'Deep technical audits covering crawlability, Core Web Vitals, site architecture, structured data, and mobile performance. Fix what\'s holding your rankings hostage.',
    tags: ['Core Web Vitals','Schema Markup','Crawl Optimisation','Mobile-First'],
  },
  {
    num: '03', title: 'Content Marketing', color: 'var(--gold)',
    desc: 'Keyword-driven content that ranks and converts. Blog posts, service pages, and landing pages written for both Google\'s algorithm and your local buying audience.',
    tags: ['Keyword Mapping','Hindi + English','Topical Authority','Content Calendar'],
  },
  {
    num: '04', title: 'Link Acquisition', color: 'var(--fire2)',
    desc: 'High-authority backlinks from Indian news portals, regional directories, and industry-specific publications that build your domain rating and sustain first-page rankings.',
    tags: ['Indian News Sites','DA 50+ Links','Niche Outreach','Digital PR'],
  },
  {
    num: '05', title: 'Google My Business', color: 'var(--teal)',
    desc: 'Fully optimised GMB profiles, review acquisition systems, Q&A management, and post strategies to lock in the coveted local 3-pack for your target searches.',
    tags: ['3-Pack Targeting','Review Strategy','GMB Posts','Photo Optimisation'],
    last: true,
  },
  {
    num: '06', title: 'E-Commerce SEO', color: 'var(--gold)',
    desc: 'Revenue-focused SEO for online stores — product page optimisation, category architecture, faceted navigation fixes, and shopping schema to drive purchase-intent traffic.',
    tags: ['Product Schema','Category SEO','Shopping Feed','Conversion CRO'],
    last: true,
  },
];

export default function Services() {
  return (
    <section className="services-section section reveal" id="services">
      <div className="section-tag">What We Do</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end', marginBottom: '3rem' }}>
        <h2 className="section-h">Six ways we<br />grow your<br /><em>rankings.</em></h2>
        <p className="section-p" style={{ marginBottom: 0, alignSelf: 'end' }}>
          Every service is designed around one goal: bringing customers who are ready to buy
          to your business through Google search.
        </p>
      </div>
      <div className="svc-grid">
        {services.map(s => (
          <div key={s.num} className="svc-item" style={s.last ? { borderBottom: 'none' } : {}}>
            <div className="svc-num" style={{ color: s.color, opacity: 0.6 }}>{s.num}</div>
            <div className="svc-arrow" style={{ color: s.color }}>↗</div>
            <h3 className="svc-title">{s.title}</h3>
            <p className="svc-desc">{s.desc}</p>
            <div className="svc-tags">
              {s.tags.map(t => (
                <span
                  key={t}
                  className="svc-tag-item"
                  style={{ borderColor: s.color + '44', color: s.color }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
