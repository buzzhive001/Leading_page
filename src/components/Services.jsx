const services = [
  {
    num: '01', title: 'Local SEO', color: 'var(--fire)',
    desc: 'Dominate local searches and Google Business Profile results to attract customers from Indore and the surrounding areas.',
    tags: ['Google Maps','Local Citations','NAP Consistency','Near Me Queries'],
  },
  {
    num: '02', title: 'Technical SEO', color: 'var(--teal)',
    desc: 'Improve website speed, crawlability, indexing, Core Web Vitals, and technical performance.',
    tags: ['Core Web Vitals','Schema Markup','Crawl Optimisation','Mobile-First'],
  },
  {
    num: '03', title: 'On-Page SEO', color: 'var(--gold)',
    desc: 'Optimize content, meta tags, internal linking, keyword targeting, and website structure.',
    tags: ['Meta Tags','Content Optimization','Internal Linking','URL Structure'],
  },
  {
    num: '04', title: 'Off-Page SEO', color: 'var(--fire2)',
    desc: 'Build high-quality backlinks and improve domain authority through ethical link-building strategies.',
    tags: ['High-Authority Backlinks','Digital PR','Business Listings','Brand Mentions'],
  },
  {
    num: '05', title: 'eCommerce SEO', color: 'var(--teal)',
    desc: 'Drive more sales and visibility for Shopify, WooCommerce, Magento, and custom eCommerce websites.',
    tags: ['Product Schema','Category SEO','Shopping Feed','Conversion CRO'],
    last: true,
  },
  {
    num: '06', title: 'SEO Content Marketing', color: 'var(--gold)',
    desc: 'Create high-quality, search-optimized content that attracts users and increases conversions.',
    tags: ['Keyword Mapping','Topical Authority','Content Calendar','Blog Posts'],
    last: true,
  },
];

export default function Services() {
  return (
    <section className="services-section section reveal" id="services">
      <div className="section-tag">Our SEO Services in Indore</div>
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
