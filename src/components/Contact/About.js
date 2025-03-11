import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './About.css';
import { FaInstagram, FaLinkedin, FaFacebookF } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('Sending...');

    // Simulate form submission (replace with API call)
    setTimeout(() => {
      setFormStatus('Thank you for reaching out! We’ll get back to you shortly.');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section className="contact-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get In Touch
      </motion.h2>

      <motion.p 
        className="subheading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Have a question? We’d love to hear from you!
      </motion.p>

      <div className="contact-form-wrapper">
        <motion.form 
          className="contact-form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          onSubmit={handleSubmit}
        >
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
          />
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
          />
          <textarea 
            name="message" 
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            required
          />
          
          <motion.button 
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>

          {formStatus && <p className="form-status">{formStatus}</p>}
        </motion.form>

        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF size={30} /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
