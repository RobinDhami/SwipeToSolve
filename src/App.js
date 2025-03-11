import React from 'react';
import Navbar from './components/Nav/Navbar' ;
import HeroSection from './components/Hero/hero' ;
import Services from './components/Services/services';
import ContactSection from './components/Contact/About'
const App = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
    

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <HeroSection />
        <Services />
        <ContactSection/>
      </div>
    </div>
  );
};

export default App;
