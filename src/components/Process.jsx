const steps = [
  {
    num: '01', title: 'SEO Audit & Website Analysis',
    desc: 'We conduct a detailed analysis of your website to identify technical issues, ranking opportunities, and competitor strengths. What We Analyze: Technical SEO Issues, Website Performance, Competitor Rankings, Keyword Opportunities, User Experience Factors.',
    time: 'Timeline', result: '48 hours',
  },
  {
    num: '02', title: 'Keyword Research & Strategy',
    desc: 'Our team discovers high-intent keywords that your potential customers are actively searching for. Targeted Keyword Types: Commercial Keywords, Local Search Terms, Service-Based Keywords, Long-Tail Opportunities, Buyer Intent Queries.',
    time: 'Timeline', result: 'Week 1',
  },
  {
    num: '03', title: 'Website Optimization',
    desc: 'We optimize every important SEO element on your website including Meta Titles & Descriptions, Content Optimization, Internal Linking, Schema Markup, URL Structure, and Image Optimization.',
    time: 'First Results', result: 'Day 30–60',
  },
  {
    num: '04', title: 'Authority Building & Link Acquisition',
    desc: 'Our off-page SEO strategy focuses on building trust and authority in your industry through High-Authority Backlinks, Local Citations, Business Listings, Digital PR Outreach, and Brand Mentions.',
    time: 'Ongoing', result: 'Monthly',
  },
  {
    num: '05', title: 'Performance Tracking & Growth',
    desc: 'We continuously monitor campaign performance and refine strategies for better results. Monthly Reporting Includes: Keyword Rankings, Organic Traffic Growth, Lead Tracking, Conversion Analysis, Competitor Comparison.',
    time: 'Cadence', result: 'Every month', last: true,
  },
];

export default function Process() {
  return (
    <section className="process-section section reveal" id="process">
      <div className="process-header">
        <div>
          <div className="section-tag">How We Work</div>
          <h2 className="section-h">From audit<br />to page <em>one.</em></h2>
        </div>
        <p className="section-p" style={{ marginBottom: 0 }}>
          A proven five-step system refined over 150+ campaigns. Clear milestones,
          measurable outcomes, no guesswork.
        </p>
      </div>
      <div className="process-steps-grid">
        {steps.map(step => (
          <div key={step.num} className="p-step" style={step.last ? { borderBottom: 'none' } : {}}>
            <div className="p-step-num">{step.num}</div>
            <div className="p-step-main">
              <h4 className="p-step-title">{step.title}</h4>
              <p className="p-step-desc">{step.desc}</p>
            </div>
            <div className="p-step-detail">
              <div className="p-step-time">{step.time}</div>
              <div className="p-step-result">{step.result}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
