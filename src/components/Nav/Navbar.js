import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import '../font.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Simulating search (replace with actual service list filtering)
    const allServices = ['Web Development', 'App Development', 'SEO', 'Consulting'];
    setFilteredServices(allServices.filter(service => service.toLowerCase().includes(e.target.value.toLowerCase())));
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ backgroundColor: '#your_solve_color' }} // Replace with Solve color
    >
      <motion.div className="logo" whileHover={{ scale: 1.1 }}>
        <span className="logo-main">Tap</span><span className="highlight">Solve</span>
      </motion.div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {['Home', 'Services', 'About', 'Contact'].map((link, index) => (
          <motion.li 
            key={index}
            whileHover={{ scale: 1.1, color: '#FFD700' }}
            className="nav-item"
          >
            <a href={`#${link.toLowerCase()}`}>{link}</a>
          </motion.li>
        ))}
      </ul>

      <div className="search-container">
        <input 
          type="text" 
          value={searchTerm} 
          onChange={handleSearch} 
          className="search-bar" 
          placeholder="Search Services"
        />
        {searchTerm && (
          <div className="search-results">
            {filteredServices.map((service, index) => (
              <div key={index} className="search-item">{service}</div>
            ))}
          </div>
        )}
      </div>

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
                whileHover={{ scale: 1.1, color: '#FFD700' }}
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
