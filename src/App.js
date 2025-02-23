import React from 'react';
import './App.css';
import Navbar from './components/Nav/Navbar.js';
import HeroSection from './components/Hero/hero.js';
import ServicesSection from "./components/Services/services"

function App() {
  return (
    <div className="container">
    <Navbar />
    <HeroSection />
    <ServicesSection/>
    </div>
  );
}

export default App;
