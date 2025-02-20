import React from 'react';
import { motion } from 'framer-motion';
import './hero.css';

const HeroSection = () => {
  return (
    <section className="hero-section" style={{ background: 'linear-gradient(180deg, #1f1c2c, #928DAB)' }}>
      <div className="hero-content">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="hero-title"
        >
          Swipe. Solve. Succeed.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.5 }}
          className="hero-subtitle"
        >
          Innovating NFC & IT solutions for a smarter, contactless future.
        </motion.p>

        <motion.button 
          className="cta-button" 
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.8)" }}
        >
          Learn More
        </motion.button>
      </div>

      {/* Background PNG Image Positioned Right */}
      <motion.img 
        src="path_to_your_image.png" 
        alt="People using NFC cards" 
        className="hero-image-bg"
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 0.5, scale: 1 }} 
        transition={{ duration: 1 }}
      />
    </section>
  );
};

export default HeroSection;
