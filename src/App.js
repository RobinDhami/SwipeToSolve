import React from 'react';
import './App.css';
import log from './images/log.svg';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="container">
      {/* HEADER / NAVBAR */}
      <motion.header 
        className="header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="logo-container"
          whileHover={{ scale: 1.1 }}
        >
          <img src={log} alt="Swipe to Solve Logo" className="logo" />
        </motion.div>
        <nav>
          <ul className="nav-list">
            <motion.li className="nav-item" whileHover={{ scale: 1.1 }}><a href="#services">Services</a></motion.li>
            <motion.li className="nav-item" whileHover={{ scale: 1.1 }}><a href="#about">About</a></motion.li>
            <motion.li className="nav-item" whileHover={{ scale: 1.1 }}><a href="#contact">Contact</a></motion.li>
          </ul>
        </nav>
      </motion.header>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-overlay">
          <motion.h1 
            className="hero-title"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Swipe. Solve. Succeed.
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Innovating NFC & IT solutions for a smarter, contactless future.
          </motion.p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.8)" }}
            whileTap={{ scale: 0.9 }}
          >
            Learn More
          </motion.button>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {["Access Control", "Attendance Tracking", "Contactless Payments", "IT Automation"].map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.5)" }}
            >
              <div className="service-bg"></div>
              <h3 className="service-title">{service}</h3>
              <p className="service-desc">Secure and innovative {service.toLowerCase()} solutions.</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
