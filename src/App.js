import React from 'react';
import './App.css';
import log from './images/log.svg'; // Ensure your logo image is saved here

function App() {
  return (
    <div className="container">
      {/* HEADER / NAVBAR */}
      <header className="header">
        <div className="logo-container">
          <img src={log} alt="Swipe to Solve Logo" className="logo" />
        </div>
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#services" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
{/* work on banner and navbar*/}
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Swipe. Solve. Succeed.</h1>
          <p className="hero-subtitle">
            Innovating NFC &amp; IT solutions for a smarter, contactless future.
          </p>
          <button className="cta-button">Learn More</button>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {/* Service 1 */}
          <div className="service-card">
            <div className="service-icon">🔒</div>
            <h3 className="service-title">Access Control</h3>
            <p className="service-desc">
              Secure NFC-based entry systems for offices, schools, and more.
            </p>
          </div>
          {/* Service 2 */}
          <div className="service-card">
            <div className="service-icon">🕑</div>
            <h3 className="service-title">Attendance Tracking</h3>
            <p className="service-desc">
              Contactless attendance solutions with real-time analytics.
            </p>
          </div>
          {/* Service 3 */}
          <div className="service-card">
            <div className="service-icon">💳</div>
            <h3 className="service-title">Contactless Payments</h3>
            <p className="service-desc">
              Fast, secure, and convenient NFC payment systems.
            </p>
          </div>
          {/* Service 4 */}
          <div className="service-card">
            <div className="service-icon">⚙️</div>
            <h3 className="service-title">IT Automation</h3>
            <p className="service-desc">
              Streamline workflows and operations with customized IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
        <h2 className="section-title">About Swipe to Solve</h2>
        <p className="about-text">
          We are committed to revolutionizing the way businesses, schools, and organizations handle security, automation, and data management. Our mission is to simplify technology by integrating fast and reliable NFC solutions into everyday operations.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-text">Ready to go contactless? Let's work together!</p>
        <button className="cta-button">Contact Us</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p className="footer-text">© 2025 Swipe to Solve. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
