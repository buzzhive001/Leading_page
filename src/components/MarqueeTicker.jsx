const items = [
  'Local SEO', 'Technical Audit', 'Content Strategy', 'Link Acquisition',
  'Google My Business', 'Core Web Vitals', 'E-Commerce SEO', 'Keyword Research',
  'Schema Markup', 'Competitor Analysis',
];

export default function MarqueeTicker() {
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-inner">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="mi-icon">◆</span> {item}
          </span>
        ))}
      </div>
    </div>
  );
}
