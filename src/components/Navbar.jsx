import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav>
      <a href="#" className="logo" style={{ textDecoration: 'none', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
        <img src={logo} alt="Aleut Technologies" className="logo-img" />
      </a>
      <ul className="nav-center">
        <li><a href="#services">Services</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#results">Results</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>
      <div className="nav-right">
        <span className="nav-badge">Pan India</span>
        {/* <a href="#cta" className="btn-nav">Free Audit →</a> */}
      </div>
    </nav>
  );
}
