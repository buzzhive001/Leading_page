import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo-area">
        <a href="#" style={{ textDecoration: 'none' }}>
          <img src={logo} alt="Aleut Technologies" className="footer-logo-img" />
        </a>
        <div style={{ marginTop: '0.5rem' }}>
          {/* <div className="footer-logo-name">Aleut Technologies</div> */}
        </div>
        <div className="footer-contact">
          <a href="tel:8770161193" className="footer-contact-item">
            <span className="footer-contact-icon">📞</span>+91 8770161193
          </a>
          <a href="mailto:info@aleut.tech" className="footer-contact-item">
            <span className="footer-contact-icon">✉</span>info@aleut.tech
          </a>
          <a href="https://www.aleut.tech" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
            <span className="footer-contact-icon">🌐</span>www.aleut.tech
          </a>
          <span className="footer-contact-item">
            <span className="footer-contact-icon">📍</span>Aleut Technologies Pvt Ltd, India &amp; Australia
          </span>
        </div>
      </div>

      <div className="footer-links">
        <a href="#services">GMB Optimization</a>
        <a href="#services">GMB Suspension Removal</a>
        <a href="#services">Local SEO Strategy</a>
        <a href="#services">GMB Management</a>
        <a href="#about">About Us</a>
        <a href="#pricing">FAQ</a>
      </div>

      <div className="footer-right">
        <div className="footer-copy">
          © 2026 Aleut Technologies Pvt Ltd.<br />All rights reserved.
          <br /><br />
          <a
            href="https://wa.me/918770161193"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '0.75rem',
              background: 'var(--fire)',
              color: 'var(--white)',
              padding: '0.5rem 1.1rem',
              borderRadius: '3px',
              textDecoration: 'none',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
