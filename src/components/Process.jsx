const steps = [
  {
    num: '01', title: 'Free SEO Audit & Competitor Analysis',
    desc: 'We analyse your current site health, existing rankings, backlink profile, and map out every competitor ranking for your target keywords. You get a detailed report — free.',
    time: 'Timeline', result: '48 hours',
  },
  {
    num: '02', title: 'Custom Strategy & 12-Month Roadmap',
    desc: 'Based on the audit, we build a custom roadmap with priority keywords, content plan, technical fixes, and projected traffic and revenue milestones at 30, 60, and 90 days.',
    time: 'Timeline', result: 'Week 1',
  },
  {
    num: '03', title: 'Execution: Technical + Content + Links',
    desc: 'Our team implements fixes, publishes optimised content, and builds authoritative links month over month. You focus on your business — we handle Google.',
    time: 'First Results', result: 'Day 30–90',
  },
  {
    num: '04', title: 'Monthly Reports + Strategy Iteration',
    desc: 'Live ranking dashboard, monthly video reports, and a strategy call to review performance, adjust to algorithm updates, and scale what\'s working.',
    time: 'Cadence', result: 'Every month', last: true,
  },
];

export default function Process() {
  return (
    <section className="process-section section reveal" id="process">
      <div className="process-header">
        <div>
          <div className="section-tag">How It Works</div>
          <h2 className="section-h">From zero<br />to page <em>one.</em></h2>
        </div>
        <p className="section-p" style={{ marginBottom: 0 }}>
          A proven four-step system refined over 150+ campaigns across India. Clear milestones,
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
