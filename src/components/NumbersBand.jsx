const stats = [
  { num: '150+', label: 'Businesses ranked on page 1' },
  { num: '6.8×', label: 'Average return on investment' },
  { num: '312%', label: 'Average traffic increase in 90 days' },
  { num: '98%',  label: 'Client retention after year one' },
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
