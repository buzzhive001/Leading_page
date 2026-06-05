import { useEffect } from 'react';
import './index.css';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import About from './components/About';
import Services from './components/Services';
import NumbersBand from './components/NumbersBand';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
// import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <About />
      <Services />
      <NumbersBand />
      <Process />
      <Testimonials />
      <Pricing />
      {/* <CTAFinal /> */}
      <Footer />
    </>
  );
}
