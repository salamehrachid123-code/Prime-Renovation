import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

// Import service pages
import KitchenRenovationMontreal from './pages/KitchenRenovationMontreal';
import BathroomRenovationMontreal from './pages/BathroomRenovationMontreal';
import BasementRenovationMontreal from './pages/BasementRenovationMontreal';
import PaintingServicesMontreal from './pages/PaintingServicesMontreal';
import FlooringInstallationMontreal from './pages/FlooringInstallationMontreal';
import DeckPatioConstructionMontreal from './pages/DeckPatioConstructionMontreal';
import RoofingRepairReplacementMontreal from './pages/RoofingRepairReplacementMontreal';
import SidingInstallationMontreal from './pages/SidingInstallationMontreal';
import DrywallPlasterServicesMontreal from './pages/DrywallPlasterServicesMontreal';
import LightingDesignElectricalUpgradesMontreal from './pages/LightingDesignElectricalUpgradesMontreal';
import CustomMillworkBuiltinsMontreal from './pages/CustomMillworkBuiltinsMontreal';
import OfficeRetailRenovationMontreal from './pages/OfficeRetailRenovationMontreal';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
    
    // Check for saved language preference or default to English
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save preference
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    // Save language preference
    localStorage.setItem('language', language);
  }, [language]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const HomePage = () => (
    <div>
      <Hero language={language} />
      <About language={language} />
      <Services language={language} />
      <Projects language={language} />
      <FAQ language={language} />
      <Contact language={language} />
      <FloatingCTA language={language} />
    </div>
  );

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'dark bg-gray-900' : 'bg-prime-cream'
      }`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} language={language} toggleLanguage={toggleLanguage} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kitchen-renovation-montreal" element={<KitchenRenovationMontreal language={language} />} />
          <Route path="/bathroom-renovation-montreal" element={<BathroomRenovationMontreal language={language} />} />
          <Route path="/basement-renovation-montreal" element={<BasementRenovationMontreal language={language} />} />
          <Route path="/painting-services-montreal" element={<PaintingServicesMontreal language={language} />} />
          <Route path="/flooring-installation-montreal" element={<FlooringInstallationMontreal language={language} />} />
          <Route path="/deck-patio-construction-montreal" element={<DeckPatioConstructionMontreal language={language} />} />
          <Route path="/roofing-repair-replacement-montreal" element={<RoofingRepairReplacementMontreal language={language} />} />
          <Route path="/siding-installation-montreal" element={<SidingInstallationMontreal language={language} />} />
          <Route path="/drywall-plaster-services-montreal" element={<DrywallPlasterServicesMontreal language={language} />} />
          <Route path="/lighting-design-electrical-upgrades-montreal" element={<LightingDesignElectricalUpgradesMontreal language={language} />} />
          <Route path="/custom-millwork-builtins-montreal" element={<CustomMillworkBuiltinsMontreal language={language} />} />
          <Route path="/office-retail-renovation-montreal" element={<OfficeRetailRenovationMontreal language={language} />} />
        </Routes>
        
        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;
