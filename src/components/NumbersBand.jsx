const stats = [
  { num: '150%', label: 'Average Organic Traffic Growth' },
  { num: '6X',   label: 'Increase in Qualified Leads' },
  { num: '70%',  label: 'Improvement in Keyword Rankings' },
  { num: '95%',  label: 'Client Retention Rate' },
];

export default function NumbersBand() {
  return (
    <div className="numbers-band reveal">
      {stats.map(s => (
        <div key={s.num} className="nb-cell">
          <div className="nb-num">{s.num}</div>
          <div className="nb-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
