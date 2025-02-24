import React from 'react';
import ThreeJSBackground from './components/ThreeJSBackground';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero/HeroSection';
import Services from './components/Services/services';

const App = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* 3D Background */}
      <ThreeJSBackground />

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <HeroSection />
        <Services />
      </div>
    </div>
  );
};

export default App;
