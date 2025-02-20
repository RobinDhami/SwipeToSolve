import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div className="logo" whileHover={{ scale: 1.1 }}>
        <span>Swipe</span><span className="highlight">Solve</span>
      </motion.div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {['Home', 'Services', 'About', 'Contact'].map((link, index) => (
          <motion.li 
            key={index}
            whileHover={{ scale: 1.1, color: '#00ffff' }}
          >
            <a href={`#${link.toLowerCase()}`}>{link}</a>
          </motion.li>
        ))}
      </ul>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            exit={{ y: -300 }}
            transition={{ duration: 0.5 }}
          >
            {['Home', 'Services', 'About', 'Contact'].map((link, index) => (
              <motion.a 
                key={index} 
                href={`#${link.toLowerCase()}`}
                whileHover={{ scale: 1.1, color: '#00ffff' }}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
