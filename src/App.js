import React from 'react';
import './App.css';
import Navbar from './components/Nav/Navbar.js';
import HeroSection from './components/Hero/hero.js';

function App() {
  return (
    <div className="container">
    <Navbar />
    <HeroSection />
    </div>
  );
}

export default App;
