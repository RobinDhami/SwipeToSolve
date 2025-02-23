import React from 'react';
import { motion } from 'framer-motion';
import { Nfc, User, Calendar, Lock } from 'lucide-react';
import './services.css';

const services = [
  {
    title: 'NFC Business Cards',
    icon: <Nfc size={40} />,
    description: 'Seamless contact sharing with NFC-enabled business cards.'
  },
  {
    title: 'vCard Integration',
    icon: <User size={40} />,
    description: 'Instantly download contact details through vCard QR codes.'
  },
  {
    title: 'Contactless Attendance',
    icon: <Calendar size={40} />,
    description: 'Track attendance with NFC scans and real-time updates.'
  },
  {
    title: 'Smart Access Control',
    icon: <Lock size={40} />,
    description: 'Secure, contactless access to facilities using NFC cards.'
  }
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Services
      </motion.h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="service-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255,255,255,0.6)' }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
